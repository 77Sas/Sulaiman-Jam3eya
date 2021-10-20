import React from 'react';
import { useState, Link } from 'react';
import authStore from '../stores/authStore';

function Register() {
	const [ state, setState ] = useState('');

	const handleChange = (event) => {
		const value = event.target.value;
		setState({ ...state, [event.target.name]: value });
	};
	const handleSubmet = (event) => {
		event.preventDefault();
		authStore.logging(state, 'signup');
		console.log(state);
	};
	return (
		<div className="form-Reg">
			<form onSubmit={handleSubmet}>
				<label>
					Username:
					<input type="text" placeholder="Enter your name" name="username" onChange={handleChange} />
				</label>
				<label>
					Email:
					<input type="text" placeholder="Enter your Email" name="email" onChange={handleChange} />
				</label>
				<label>
					Password:
					<input type="password" placeholder="Enter your password" name="password" onChange={handleChange} />
				</label>

				<button>Register</button>
			</form>
		</div>
	);
}

export default Register;
