import axios from "axios";
import jwt_decode from "jwt-decode";

const refreshToken = async() => {
    try {
      const res = await axios.post("http://localhost:3001/refresh", axios.defaults.withCredentials = true)
      return res.data;
    } catch (error) {
      console.log(error)
    }
}

// Trước khi gửi 1 request nào đó thì axiosJWT nó sẽ check trước khi gọi. Khi viet Ts thi khai bao AxiosRequestConfig
export const createAxios = (user, dispath, stateSuccess) => {
    const newInstance = axios.create();

    newInstance.interceptors.request.use(
        async (config) => {
          let date = new Date();
          const decodedToken = jwt_decode(user?.accessToken);
          if (decodedToken.exp < date.getTime() / 1000) {
            const data = await refreshToken();
            const refreshUser = {
              ...user,
              accessToken: data.accessToken,
            };
            dispath(stateSuccess(refreshUser));
            config.headers["token"] = "Bearer " + data.accessToken;
          }
          return config;
        },
        (err) => {
          return Promise.reject(err);
        }
    )
    return newInstance;
}