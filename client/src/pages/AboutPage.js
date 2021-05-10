import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
	return (
		<main>
			<PageHero title="about" />
			<Wrapper className="page section section-center">
				<img src={aboutImg} alt="nice desk" />
				<article>
					<div className="title">
						<h2>our mission</h2>
						<div className="underline"></div>
						<p>
							To be the World's most customer-focused e-commerce business, where
							clients or customers can find and discover anything they might
							want to buy online, and endeavors to offer its customers the
							lowest possible prices.” As the most prominent e-commerce website
							in the world, stephTrading is image-conscious and strives to live
							up to its global reputation.
						</p>
					</div>
				</article>
			</Wrapper>
		</main>
	);
};

const Wrapper = styled.section`
	display: grid;
	gap: 4rem;
	img {
		width: 100%;
		display: block;
		border-radius: var(--radius);
		height: 500px;
		object-fit: cover;
	}
	p {
		line-height: 2;
		max-width: 45em;
		margin: 0 auto;
		margin-top: 2rem;
		color: var(--clr-grey-5);
	}
	.title {
		text-align: left;
	}
	.underline {
		margin-left: 0;
	}
	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
`;
export default AboutPage;
