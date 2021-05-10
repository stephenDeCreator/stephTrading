import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useUserContext } from '../context/user_context';

const LoginPage = () => {
	const history = useHistory();
	const [data, setData] = useState({
		email: '',
		password: ''
	});
	const { dispatch } = useUserContext();
	const handleSubmit = async (e) => {
		e.preventDefault();
		setData({ ...data });
		fetch('http://localhost:4000/auth/login', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: data.email,
				password: data.password
			})
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				throw res;
			})
			.then((resJson) => {
				dispatch({
					type: 'LOGIN',
					payload: resJson
				});
				history.push('/');
			})
			.catch((error) => {
				setData({
					...data
				});
			});
	};

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	return (
		<Wrapper>
			<div className="container">
				<div className="form-container">
					<form className="form" onSubmit={handleSubmit}>
						<h2>login</h2>
						<div className="form-control">
							<label htmlFor="email">email</label>
							<input
								type="email"
								value={data.email}
								name="email"
								className="form-input"
								placeholder="enter your email"
								onChange={handleChange}
							/>
						</div>

						<div className="form-control">
							<label htmlFor="password">password</label>
							<input
								type="password"
								name="password"
								value={data.password}
								className="form-input"
								placeholder="enter your password"
								onChange={handleChange}
							/>
						</div>

						<div className="updates">
							<input type="checkbox" />
							<p>get updates and notifications about our products</p>
						</div>
						<button type="submit" className="btn">
							Login
						</button>
					</form>
				</div>
				<h5 className="signup-btn">
					not registered?{' '}
					<span>
						<Link to="/signup">SignUp</Link>
					</span>
				</h5>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	main {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.container {
		background: var(--clr-primary-9);
		padding: 2.5rem;
		border-radius: var(--radius);
		width: 90vw;
		max-width: var(--max-width);
	}
	.form h2 {
		margin-bottom: 2rem;
		font-weight: 500;
		text-align: center;
	}
	.form-control {
		margin-bottom: 2rem;
	}
	.form-control label {
		display: block;
		text-transform: capitalize;
		font-weight: 500;
		margin-bottom: 0.5rem;
	}
	.form-input {
		border: 1px solid var(--clr-primary-5);
		padding: 1.25rem;
		width: 100%;
		border-radius: var(--radius);
		font-size: 1rem;
		color: var(--clr-primary-3);
	}
	.form-input::placeholder {
		color: var(--clr-primary-5);
		text-transform: capitalize;
	}

	.updates {
		display: grid;
		grid-template-columns: auto 1fr;
		column-gap: 0.5rem;
		align-items: center;
		margin-bottom: 2rem;
	}

	input[type='checkbox'] {
		width: 1.75rem;
		height: 1.75rem;
	}
	.updates p {
		margin-bottom: 0;
		text-transform: capitalize;
		color: var(--clr-primary-5);
	}
	.btn {
		background: var(--clr-primary-5);
		display: block;
		width: 100%;
		color: var(--clr-white);
		border-radius: var(--radius);
		border-color: transparent;
		padding: 1.25rem 0;
		text-transform: capitalize;
		font-size: 1rem;
		cursor: pointer;
	}

	@media screen and (min-width: 992px) {
		.container {
			display: grid;
			column-gap: 4rem;
			align-items: center;
			justify-content: center;
			margin: 0 auto;
			width: 100%;
		}
		.signup-btn {
			margin-top: 1rem;
		}
		.signup-btn span:hover {
			border-bottom: 2px solid var(--clr-primary-5);
		}
		.form-container {
			display: flex;
			justify-content: center;
		}
		.icon {
			width: 2rem;
			height: 2rem;
			display: block;
			background: rgba(255, 255, 255, 0.23);
			border-radius: 50%;
			display: grid;
			place-items: center;
			margin-bottom: 1.75rem;
		}
		.service h4 {
			font-weight: 500;
		}
	}
`;

export default LoginPage;
