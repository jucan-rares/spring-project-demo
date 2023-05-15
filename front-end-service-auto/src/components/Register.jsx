import {useState} from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios"

function Register() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const navigate = useNavigate();

    async function register(event) {

        event.preventDefault();
        try{
            await axios.post("http://localhost:8080/users/register",
            {
                role: "client",
                username:username,
                password:password,
                email:email,
                phoneNumber:phone
            }).then((res) => {
                navigate('/login');
            });
            alert("User registration succesful")
        }
        catch(err){
            alert(err)
        }
    }

    return (
        <div class="login-page">
            <div class="form">
                <form class="register-form">
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
                    <input 
                        type="text" 
                        placeholder="email address"
                        value={email}
                        onChange={(event) => {setEmail(event.target.value)}}
                    />
                    <input 
                        type="text" 
                        placeholder="phone number" 
                        value={phone}
                        onChange={(event) => {setPhone(event.target.value)}}
                    />
                    <button type="submit" onClick={register}>Register</button>
                    <p class="message">Already registered? <a href="/login">Sign In</a></p>
                </form>
            </div> 
        </div>
    );
}
  
export default Register;