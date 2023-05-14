import React, {useState, useEffect} from "react"
import { Button, Modal } from "react-bootstrap";
import axios from "axios"
import "./Home.css"
import AddForm from "./AddForm"
import EditForm from "./EditForm"

function Home() {

	const [data, setData] = useState([])
	const [editUser, setEditUser] = useState(null);

	const [showAdd, setShowAdd] = useState(false)
	const handleShowAdd = () => setShowAdd(true)
	const handleCloseAdd = () => setShowAdd(false)

	const [showEdit, setShowEdit] = useState(false)
	const handleShowEdit = () => setShowEdit(true)
	const handleCloseEdit = () => setShowEdit(false)

	useEffect(() => {getUsers()}, [])

	const onClickEdit = (event, user) => {
		event.preventDefault();
		setEditUser(user);
		handleShowEdit();
	 };

	const getUsers = async() => {
		const response = await axios.get("http://localhost:8080/users")
		if(response.status === 200) 
			setData(response.data)
	}
	const deleteUser = async (id) => {
		if(window.confirm("Are you sure you want to delete the selected user?")) {
			const response = await axios.delete(`http://localhost:8080/users/${id}`)
			if(response.status === 200)
				getUsers()
		}
	}

	return (
		<div style={{marginTop: "150px"}}>
			<div>
				<Button className="btn btn-add" onClick={handleShowAdd} data-toggle="modal">Add user</Button>
				<Modal show = {showAdd} onHide={handleCloseAdd}>
					<Modal.Header>
						<Modal.Title>Add user</Modal.Title>
					</Modal.Header>	

					<Modal.Body>
						<AddForm />
					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary" onClick={handleCloseAdd}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>	

			<table className = "styled-table">
				<thead>
					<tr>
						<th style={{textAllign:"center"}}>No.</th>
						<th style={{textAllign:"center"}}>Username</th>
						<th style={{textAllign:"center"}}>Email</th>
						<th style={{textAllign:"center"}}>Phone number</th>
						<th style={{textAllign:"center"}}>Action</th>
					</tr>
				</thead>
				<tbody>
					{data && data.map((item, index) => {
						return(
							<tr key={index}>
								<th scope="row">{index + 1}</th>
								<td>{item.username}</td>
								<td>{item.email}</td>
								<td>{item.phoneNumber}</td>
								<td>
									<button className="btn btn-edit" onClick={(event) => onClickEdit(event, item)}>Edit</button>
									<button className="btn btn-delete" onClick={() => deleteUser(item.userID)}>Delete</button>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>

			<Modal show = {showEdit} onHide={handleCloseEdit}>
				<Modal.Header>
					<Modal.Title>Edit user</Modal.Title>
				</Modal.Header>	
				<Modal.Body>
					<EditForm user={editUser} />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCloseEdit}>Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default Home;