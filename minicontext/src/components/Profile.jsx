import UserContext from "../context/Usercontext"
import { useContext } from "react";

const Profile = () => {
  //user is coming from the useContext where v have set user and setUser.
  const { user } = useContext(UserContext);
  if (!user) {
    return <div>Please login</div>;
  } else {
    return <div>Welcome {user.username}</div>;
  }
}

export default Profile
