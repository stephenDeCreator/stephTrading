import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { PageHero } from '../components';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
	const history = useHistory();
	const [data, setData] = useState({
		email: '',
		firstName: '',
		lastName: '',
		password: ''
	});

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setData({ ...data });

		fetch('http://localhost:4000/auth/register', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				firstName: data.firstName,
				lastName: data.lastName,
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
				history.push('/login');
			})
			.catch((error) => {
				setData({
					...data
				});
			});
	};
	return (
		<Wrapper>
			<PageHero title="signup" />
			<div className="container">
				<section className="services">
					<article className="service">
						<span className="icon">
							<FaCheck />
						</span>
						<h4>Quick And Easy Sign-Up</h4>
						<p>Enter your email to create an account.</p>
					</article>
					<article className="service">
						<span className="icon">
							<FaCheck />
						</span>
						<h4>Cross-Platform Solution</h4>
						<p>
							Preview your newsletter on any device before sneding them out.
						</p>
					</article>
					<article className="service">
						<span className="icon">
							<FaCheck />
						</span>
						<h4>Start Sending Emails</h4>
						<p>Use our API or pick our pre-built templates.</p>
					</article>
				</section>
				<form className="form" onSubmit={handleSubmit}>
					<h2>create your account</h2>
					<div className="form-control">
						<label htmlFor="email">email</label>
						<input
							type="email"
							name="email"
							className="form-input"
							placeholder="enter your email"
							onChange={handleChange}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="firstName">first Name</label>
						<input
							type="text"
							name="firstName"
							className="form-input"
							placeholder="enter your first name"
							onChange={handleChange}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="lastName">Last Name</label>
						<input
							type="text"
							name="lastName"
							className="form-input"
							placeholder="enter your last name"
							onChange={handleChange}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="password">password</label>
						<input
							type="password"
							name="password"
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
						SignUp
					</button>
				</form>
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
		background: var(--clr-white);
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
		border: 1px solid var(--clr-primary-9);
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
		border-radius: var(--radius);
		border-color: transparent;
		padding: 1.25rem 0;
		text-transform: capitalize;
		font-size: 1.5rem;
		cursor: pointer;
	}

	@media screen and (min-width: 992px) {
		.services {
			display: block;
			padding: 4rem;
			background: var(--clr-primary-5);
			border-radius: var(--radius);
			color: var(--clr-white);
			min-height: 785px;
		}
		.container {
			display: grid;
			grid-template-columns: 1fr 1fr;
			column-gap: 4rem;
			align-items: center;
		}
		.service {
			max-width: 240px;
			margin-bottom: 2.5rem;
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
export default SignUp;
