import axios from "axios";
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from "./authSlice";
import { deleteUserFailed, deleteUsersSuccess, deleteUserStart, getUsersFailed, getUsersStart, getUsersSuccess } from "./userSlice";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
      const res = await axios.post("http://127.0.0.1:3001/login", user);
      document.cookie = `refreshToken=${res.data.refreshToken}`;
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (err) {
      dispatch(loginFailed());
    }
};

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart())
    try {
      await axios.post("http://localhost:3001/register", user);
      dispatch(registerSuccess());
      navigate("/login");
    } catch (err) {
      dispatch(registerFailed());
    }
}

export const getAllUsers = async (accessToken, dispatch, axiosJWT) => {
  dispatch(getUsersStart());
  try {
    const res = await axiosJWT.get("http://127.0.0.1:3001/user", {
      headers: {token: `Bearer ${accessToken}`}
    });
    dispatch(getUsersSuccess(res.data))
  } catch (error) {
    dispatch(getUsersFailed());
  }
}

export const deleteUser = async(accessToken, dispatch, id, axiosJWT) => {
  dispatch(deleteUserStart());
  try {
    const res = await axiosJWT.delete("http://127.0.0.1:3001/user/" + id, {
      headers: {token: `Bearer ${accessToken}`}
    });
    dispatch(deleteUsersSuccess(res.data))
  } catch (error) {
    dispatch(deleteUserFailed(error.response.data))
  }
}