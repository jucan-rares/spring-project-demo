import {useState} from "react"
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function Register() {

    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const[email, setEmail] = useState('')
    const[phone, setPhone] = useState('')
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
                navigate('/');
            });
            alert("User registration succesful")
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

            <div>
                <label>Email</label>
                <input 
                    type="text" 
                    id="email" 
                    placeholder="youremail@yahoo.com"
                    value={email}
                    onChange={(event) => {setEmail(event.target.value)}}
                />
            </div>

            <div>
                <label>Phone number</label>
                <input 
                    type="text" 
                    id="phone" 
                    placeholder="your phone number here"
                    value={phone}
                    onChange={(event) => {setPhone(event.target.value)}}
                />
            </div>

            <button type="submit" onClick={register}>Register</button>
        </form>
      </div>
    );
}
  
export default Register;