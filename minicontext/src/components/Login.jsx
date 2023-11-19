/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import UserContext from "../context/Usercontext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //setUser is coming from the useContext where v have set user and setUser
  const {setuser}=useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    setuser({username,password})

  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type=" text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}> Submit</button>
    </div>
  );
};

export default Login;
