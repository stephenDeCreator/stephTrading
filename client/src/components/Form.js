import React, { useState } from 'react';
import styled from 'styled-components';
import image from '../assets/hero-bcg.jpeg';

const Form = () => {
	const [previewSource, setPreviewSource] = useState();
	const [product, setProduct] = useState({
		name: '',
		price: '',
		quantity: '',
		image: '',
		description: '',
		company: '',
		brand: '',
		category: '',
		colors: '',
		featured: '',
		shipping: '',
		reviews: ''
	});

	const url = 'http://localhost:4000/products';

	const handleChange = (e) => {
		setProduct({ ...product, [e.target.name]: e.target.value });
	};

	const handleFileUpload = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setProduct({ ...product, [e.target.name]: reader.result });
		};
		previewFile(file);
	};

	const previewFile = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setPreviewSource(reader.result);
		};
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// form data
		const formData = new FormData();
		for (let [key, value] of Object.entries(product)) {
			formData.append(key, value);
		}

		const res = await fetch(url, {
			method: 'POST',
			body: formData
		});
		const data = await res.json();
		setProduct({ ...product, product: data.product });
		setProduct([]);
	};

	return (
		<Wrapper className="page section section-center">
			<img src={image} alt="nice-bcg" />
			<article>
				<form className="contact-form" onSubmit={handleSubmit}>
					<label htmlFor="name">name</label>
					<input
						type="text"
						name="name"
						value={product.name}
						className="form-input"
						onChange={handleChange}
					/>

					<label htmlFor="price">price</label>
					<input
						type="number"
						name="price"
						value={product.price}
						className="form-input price"
						onChange={handleChange}
					/>

					<label htmlFor="quantity"> quantity</label>
					<input
						type="number"
						name="quantity"
						value={product.quantity}
						className="form-input quantity"
						onChange={handleChange}
					/>

					<label htmlFor="image">image</label>
					<input
						type="file"
						className="form-input image"
						placeholder="upload file"
						name="image"
						onChange={handleFileUpload}
					/>

					<label htmlFor="description" className="desc">
						description
					</label>
					<input
						type="text"
						name="description"
						value={product.description}
						className="form-input description"
						onChange={handleChange}
					/>

					<label htmlFor="company">company</label>
					<input
						type="text"
						name="company"
						value={product.company}
						className="form-input"
						onChange={handleChange}
					/>

					<label htmlFor="category">category</label>
					<input
						type="text"
						name="category"
						value={product.category}
						className="form-input"
						onChange={handleChange}
					/>

					<label htmlFor="shipping">shipping</label>
					<select
						name="shipping"
						id="shipping"
						value={product.shipping}
						className="form-input"
						onChange={handleChange}
					>
						<option value="empty">choose...</option>
						<option value="true">true</option>
						<option value="false">false</option>
					</select>

					<label htmlFor="colors">colors</label>
					<input
						type="text"
						name="colors"
						value={product.colors}
						className="form-input"
						onChange={handleChange}
					/>

					<label htmlFor="stock">stock</label>
					<input
						type="number"
						name="stock"
						value={product.stock}
						className="form-input"
						onChange={handleChange}
					/>

					<label htmlFor="stars">stars</label>
					<input
						type="number"
						name="stars"
						value={product.stars}
						className="form-input stars"
						onChange={handleChange}
					/>

					<label htmlFor="reviews">reviews</label>
					<input
						type="number"
						name="reviews"
						value={product.reviews}
						className="form-input review"
						onChange={handleChange}
					/>

					<label htmlFor="featured">featured</label>
					<select
						name="featured"
						id="featured"
						value={product.featured}
						className="form-input"
						onChange={handleChange}
					>
						<option value="empty">choose...</option>
						<option value="true">true</option>
						<option value="false">false</option>
					</select>
					<button type="submit" className="btn">
						submit
					</button>
				</form>
			</article>
			{previewSource && (
				<img src={previewSource} alt="chosen" style={{ height: '300px' }} />
			)}
		</Wrapper>
	);
};

const Wrapper = styled.section`
	display: grid;
	gap: 2rem;
	img {
		width: 100%;
		display: block;
		border-radius: var(--radius);
		height: 500px;
		object-fit: cover;
	}
	article form {
		display: grid;
		flex-direction: column;
		gap: 0.23rem;
		align-items: center;
		max-height: 500px;
		overflow: scroll;
	}

	article label {
		text-align: center;
		text-transform: capitalize;
	}
	.form-input {
		font-size: 1rem;
		padding: 0.2rem 0.5rem;
		margin-bottom: 0.5rem;
		border: 1px solid grey;
		border-radius: var(--radius);
		outline: none;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	@media (min-width: 992px) {
		display: flex;
	}
`;
export default Form;
