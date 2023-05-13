import {Form, Button} from "react-bootstrap"
import {useState} from "react"
import axios from "axios"

const AddForm = () => {

    const [newUser, setNewUser] = useState({username:"", password:"", email:"", phone:""})

    const onInputChange = (e) => {setNewUser({...newUser,[e.target.name]: e.target.value})}

    const {username, password, email, phone} = newUser;

    async function handleSubmit(e) {

        e.preventDefault();
        try{
            await axios.post("http://localhost:8080/users",
            {
                role: "client",
                username:username,
                password:password,
                email:email,
                phoneNumber:phone
            })
            alert("User registration succesful")
        }
        catch(err){
            alert(err)
        }
    }

     return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="username"
                    name="username"
                    value={username}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="password"
                    placeholder="******"
                    name="password"
                    value={password}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="email@yahoo.com"
                    name="email"
                    value={email}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="XXXXXXXXXX"
                    name="phone"
                    value={phone}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>

            <Button variant="success" type="submit" block>
                Add new user
            </Button>
        </Form>
     )
}

export default AddForm;