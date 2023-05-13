import React, {useState, useEffect} from "react"
import { Button, Modal } from "react-bootstrap";
import axios from "axios"
import "./Home.css"
import AddForm from "./AddForm"

function Home() {

	const [show, setShow] = useState(false)
	const[data, setData] = useState([])
	const handleShow = () => setShow(true)
	const handleClose = () => setShow(false)
	
	useEffect(() => {getUsers()}, [])

	const getUsers = async() => {
		const response = await axios.get("http://localhost:8080/users")
		if(response.status === 200) 
			setData(response.data)
	}
	const deleteUser = async (username) => {
		if(window.confirm("Are you sure you want to delete the selected user?")) {
			const response = await axios.delete(`http://localhost:8080/users/${username}`)
			if(response.status === 200){
				getUsers()
			}
		}

	}

	return (
		<div style={{marginTop: "150px"}}>

			<div>
				<Button className="btn btn-add" onClick={handleShow} data-toggle="modal">Add user</Button>
				<Modal show = {show} onHide={handleClose}>
					<Modal.Header>
						<Modal.Title>
							Add user
						</Modal.Title>
					</Modal.Header>	

					<Modal.Body>
						<AddForm />
					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</div>	

			<table className = "styled-table">
				<thead>
					<tr>
						<th style={{textAllign:"center"}}>No.</th>
						<th style={{textAllign:"center"}}>Username</th>
						<th style={{textAllign:"center"}}>Password</th>
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
								<td>{item.password}</td>
								<td>{item.email}</td>
								<td>{item.phoneNumber}</td>
								<td>
									<button className="btn btn-edit">Edit</button>
									<button className="btn btn-delete" onClick={() => deleteUser(item.username)}>Delete</button>
									<button className="btn btn-view">View</button>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Home;