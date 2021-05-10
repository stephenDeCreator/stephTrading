import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = () => {
	return (
		<Wrapper>
			<h5>
				&copy; {new Date().getFullYear()}
				<span> stephTrading</span>
			</h5>
			<h5> All rights reserved</h5>
			<div>
				<a
					href="https://facebook.com"
					target="_blank"
					className="social-icons"
					rel="noreferrer"
				>
					<FaFacebook />
				</a>
				<a
					href="https://twitter.com"
					target="_blank"
					className="social-icons"
					rel="noreferrer"
				>
					<FaTwitter />
				</a>
				<a
					href="https://instagram.com"
					target="_blank"
					className="social-icons"
					rel="noreferrer"
				>
					<FaInstagram />
				</a>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.footer`
	height: 5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: var(--clr-black);
	text-align: center;
	span {
		color: var(--clr-primary-5);
	}
	h5 {
		color: var(--clr-white);
		margin: 0.1rem;

		font-weight: 400;
		text-transform: none;
		line-height: 1.25;
	}
	.social-icons {
		color: white;
		font-size: 1.5rem;
		margin-left: 1rem;
		transition: all 0.3s linear;
	}
	.social-icons:hover {
		color: blue;
	}
	@media (min-width: 776px) {
		flex-direction: row;
	}
`;

export default Footer;
