import {Form, Button} from "react-bootstrap"
import {useState} from "react"
import axios from "axios"

const EditForm = ({user}) => {

    const[username, setUsername] = useState(user.username)
    const[email, setEmail] = useState(user.email)
    const[phone, setPhone] = useState(user.phoneNumber)

    const updatedEmployee = {username, email, phone}

    const handleSubmit = async (e) => {
        try{
            await axios.put("http://localhost:8080/users/"+ user.userID,
            {
                role: "client",
                username: updatedEmployee.username,
                password: user.password,
                email: updatedEmployee.email,
                phoneNumber: updatedEmployee.phone
            })
            alert("Updated user succesfuly")
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
                    onChange={(e)=> setUsername(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="email@yahoo.com"
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="XXXXXXXXXX"
                    name="phone"
                    value={phone}
                    onChange={(e)=> setPhone(e.target.value)}
                    required
                />
            </Form.Group>

            <Button variant="success" type="submit" block>
                Update user
            </Button>
        </Form>
     )
}

export default EditForm;