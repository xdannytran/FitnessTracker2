import React from 'react'
import App from './App'
import LogoutButton from './components/LogoutButton';


const HomePage = () => {
    return(
        <div>
            <div id="LoginContainer">
        <img src='https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwZXF1aXBtZW50fGVufDB8fDB8fA%3D%3D&w=1000&q=80'/>
        
        {/* <LoginForm/> */}
    
        </div>
            <h1>Create Workout</h1>
            <form id="exercise">
                <input type = "text" placeholder='Enter Text'/>
                <button type="submit">Add</button>
                <br></br>
                <br></br>
                <LogoutButton/>
            </form>
        </div>
    );
}

export default HomePage;

