import {Form, Button} from "react-bootstrap"
import axios from "axios"

const DeleteForm = ({user}) => {

    const handleSubmit = async () => {
        try{
            await axios.delete("http://localhost:8080/users/"+ user.userID)
            alert("Deleted user succesfuly")
        }
        catch(err){
            alert(err)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <p>Are you sure you want to delete this user?</p>
            <Button variant="success" type="submit" block>
                Delete
            </Button>
        </Form>
    )
}

export default DeleteForm;