import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../../context/filter_context';
import { formatPrice } from '../../utils/helpers';

const FilterByPrice = () => {
	const {
		filters: { min_price, max_price, price },
		updateFilters
	} = useFilterContext();
	return (
		<Wrapper className="form-control">
			<h5>price</h5>
			<p className="price">{formatPrice(price)}</p>
			<input
				type="range"
				name="price"
				min={min_price}
				max={max_price}
				value={price}
				onChange={updateFilters}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	.form-control {
		margin-bottom: 1.25rem;
		h5 {
			margin-bottom: 0.5rem;
		}
	}
	.price {
		margin-bottom: 0.25rem;
	}
`;

export default FilterByPrice;
