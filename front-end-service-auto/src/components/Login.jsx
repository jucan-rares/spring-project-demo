import {useState} from "react"
import { useNavigate } from 'react-router-dom';
import axios from "axios";
 
function Login() {
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
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
                    console.error(fail);
                }
            );
        }
        catch(err){
            alert(err)
        }
    }

    return (
        <div>
        <form>
            <div>
                <label>Username</label>
                <input 
                    type="text" 
                    id="username" 
                    placeholder="your username here"
                    value={username}
                    onChange={(event) => {setUsername(event.target.value)}}
                />
            </div>

            <div>
                <label>Password</label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="******"
                    value={password}
                    onChange={(event) => {setPassword(event.target.value)}}
                />
            </div>

            <button type="submit" onClick={login}>Log in</button>
        </form>
      </div>
    );
}
  
export default Login;