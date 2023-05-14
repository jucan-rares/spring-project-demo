import {useState} from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
 
function Login() {
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function login(event) {

        event.preventDefault();
        try{
            await axios.post("http://localhost:8080/users/login",
            {
                username:username,
                password:password,
            }).then((res) => {

                if(res.status === 201){
                    navigate('/home');
                    alert("Authentification succesful")
                }
                    
                else {                
                    alert("Something went wrong");
                }
             
                }, 
                fail => {
                    alert("Wrong credentials")
                }
            );
        }
        catch(err){
            alert(err)
        }
    }
    
    return (
        <div class="login-page">
            <div class="form">
                <form class="login-form">
                    <input 
                        type="text" 
                        placeholder="username"
                        value={username}
                        onChange={(event) => {setUsername(event.target.value)}}
                    />
                    <input 
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(event) => {setPassword(event.target.value)}}
                    />
                    <button type="submit" onClick={login}>Log in</button>
                    <p class="message">Not registered? <a href="/register">Create an account</a></p>
                </form>
            </div>
        </div>
    );
}
  
export default Login;