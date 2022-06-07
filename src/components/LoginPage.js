import React, {useState}  from 'react'
import { useNavigate } from 'react-router-dom';
import LoginForm  from './LoginForm';


const LoginPage = () => {
const [user, setUser] = useState({ name: "", email: "" });
const [error, setError] = useState("");
const adminUser = {
  email: "admin@admin.com",
  password: "admin123",
};

const navigate = useNavigate();

const Login = (details) => {

  navigate('/HomePage')
  console.log("details");

  if (details.email == adminUser.email && details.password == adminUser.password)
    console.log("Logged in");
  setUser({
    name: details.name,
    email: details.email
  });

  console.log("Details does not match!");
  setError("Details does not match!");
};

const Logout = () => {
  setUser({ name: "", email: "" });
};

  return (
    <>
    

  

<div>
    {user.email != "" ? (
    <div className="welcome">
      <h2>
        welcome, <span>{user.name}</span>
      </h2>
      
      <button onClick={Logout}>Logout</button>
      
    </div>
  ) : (
    <div>
    first name<input type="text" />
    <br></br>
    password<input type="password" />
    <br></br>
    <LoginForm Login={Login} error={error} />
    </div>
    
)}
</div>
  </>




)
}
export default LoginPage;