import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import jam3eyatStore from '../stores/jam3eyatStore';

export default function AddModale(props) {
	const [ jam3eya, setJam3eya ] = useState('');
	const handleChange = (event) => {
		setJam3eya({ ...jam3eya, [event.target.name]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();

		jam3eyatStore.createjam3eya(jam3eya);

		props.closeModal();
	};

	return (
		<div>
			<Modal
				show={props.isOpen}
				onHide={props.closeModal}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header>
					<Modal.Title id="contained-modal-title-vcenter">Add jam3eya</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3">
							<Form.Label>Jam3eya title:</Form.Label>
							<Form.Control
								type="text"
								onChange={handleChange}
								name="title"
								placeholder="Enter jam3eya title"
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Image url</Form.Label>
							<Form.Control
								type="url"
								onChange={handleChange}
								name="image"
								placeholder="Enter image url"
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>amount</Form.Label>
							<Form.Control
								type="number"
								onChange={handleChange}
								name="amount"
								placeholder="Enter amont "
							/>
							<Form.Group>
								<Form.Label>limit</Form.Label>
								<Form.Control
									type="number"
									onChange={handleChange}
									name="limit"
									placeholder="Enter limit"
								/>
							</Form.Group>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>start Date</Form.Label>
							<Form.Control
								type="date"
								onChange={handleChange}
								name="startDate"
								placeholder="Enter start date"
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>end Date</Form.Label>
							<Form.Control
								type="date"
								onChange={handleChange}
								name="endDate"
								placeholder="Enter end date"
							/>
						</Form.Group>
					</Form>
					<p>only registered users can create courses</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="warning" onClick={handleSubmit}>
						Add jam3eya
					</Button>
					<Button variant="warning" onClick={props.closeModal}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}
