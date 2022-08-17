import { useEffect } from "react";
import { deleteUser, getAllUsers } from "../../redux/apiRequest";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { createAxios } from "../../createInstance";
import { loginSuccess } from "../../redux/authSlice";

const HomePage = () => {
  const user = useSelector(state => state.auth.login?.currentUser);
  const userList = useSelector(state => state.users.users?.allUsers)
  const dispath = useDispatch();
  const navigate = useNavigate();
  const msg = useSelector(state => state.users?.msg);
  let axiosJWT = createAxios(user, dispath, loginSuccess);

  const handleDelete = (userId) => {
    deleteUser(user?.accessToken, dispath, userId, axiosJWT)
  }

  useEffect(() => {
    if(!user) {
      navigate('/login');
    }
    if(user?.accessToken) {
      getAllUsers(user?.accessToken, dispath, axiosJWT)
    }
  }, [])

  return (
    <main className="home-container">
      <div className="home-title">User List</div>
      {`Your role: ${user?.isAdmin}`}
      <div className="home-userlist">
        {userList?.map((user) => {
          return (
            <div className="user-container" key={user._id}>
              <div className="home-user">{user.username}</div>
              <div className="delete-user" onClick={() => {handleDelete(user._id)}}> Delete </div>
            </div>
          );
        })}
      </div>
      <p>{msg}</p>
    </main>
  );
};

export default HomePage;
