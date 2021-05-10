import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../../context/filter_context';

const FilterByShipping = () => {
	const {
		filters: { shipping },
		updateFilters
	} = useFilterContext();
	return (
		<Wrapper className="form-control shipping ">
			<label htmlFor="shipping">free shipping</label>
			<input
				type="checkbox"
				name="shipping"
				id="shipping"
				onChange={updateFilters}
				checked={shipping}
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
`;

export default FilterByShipping;
