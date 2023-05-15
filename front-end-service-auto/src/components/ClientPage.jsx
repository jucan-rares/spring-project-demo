import React, {useState, useEffect} from "react"
import { Button, Modal } from "react-bootstrap";
import axios from "axios"
import AddForm from "C:/Users/Jucan/IdeaProjects/spring-project/front-end-service-auto/src/forms/AddForm"
import EditForm from "C:/Users/Jucan/IdeaProjects/spring-project/front-end-service-auto/src/forms/EditForm"
import DeleteForm from "C:/Users/Jucan/IdeaProjects/spring-project/front-end-service-auto/src/forms/DeleteForm"

function ClientPage() {

	const [data, setData] = useState([])
	
	const [showAdd, setShowAdd] = useState(false)
	const handleShowAdd = () => setShowAdd(true)
	const handleCloseAdd = () => setShowAdd(false)

	const [showEdit, setShowEdit] = useState(false)
	const handleShowEdit = () => setShowEdit(true)
	const handleCloseEdit = () => setShowEdit(false)
	const [editUser, setEditUser] = useState(null);

	const [showDelete, setShowDelete] = useState(false)
	const handleShowDelete = () => setShowDelete(true)
	const handleCloseDelete = () => setShowDelete(false)
	const [deleteUser, setDeleteUser] = useState(null)

	useEffect(() => {getUsers()}, [])

	const getUsers = async() => {
		const response = await axios.get("http://localhost:8080/cars")
		if(response.status === 200) 
			setData(response.data)
	}
	const onClickEdit = (event, user) => {
		event.preventDefault()
		setEditUser(user)
		handleShowEdit()
	 };
	const onClickDelete = (event, user) => {
		event.preventDefault()
		setDeleteUser(user)
		handleShowDelete()
	 }

	return (
		<div style={{marginTop: "150px"}}>
			<div>
				<button className="btn btn-add" onClick={handleShowAdd}>Add car</button>
			</div>	

			<table className = "styled-table">
				<thead>
					<tr>
						<th style={{textAllign:"center"}}>No.</th>
						<th style={{textAllign:"center"}}>Brand</th>
						<th style={{textAllign:"center"}}>Model</th>
						<th style={{textAllign:"center"}}>Year of production</th>
						<th style={{textAllign:"center"}}>Color</th>
						<th style={{textAllign:"center"}}>Action</th>
					</tr>
				</thead>
				<tbody>
					{data && data.map((item, index) => {
						return(
							<tr key={index}>
								<th scope="row">{index + 1}</th>
								<td>{item.brand}</td>
								<td>{item.model}</td>
								<td>{item.year}</td>
								<td>{item.color}</td>
								<td>
									<button className="btn btn-edit" onClick={(event) => onClickEdit(event, item)}>Edit</button>
									<button className="btn btn-delete" onClick={(event) => onClickDelete(event, item)}>Delete</button>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>

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

			<Modal show = {showDelete} onHide={handleCloseDelete}>
				<Modal.Header>
					<Modal.Title>Delete user</Modal.Title>
				</Modal.Header>	
				<Modal.Body>
					<DeleteForm user={deleteUser} />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCloseDelete}>Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default ClientPage;