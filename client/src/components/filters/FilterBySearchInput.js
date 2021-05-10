import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../../context/filter_context';

const FilterBySearchInput = () => {
	const {
		filters: { text },
		updateFilters
	} = useFilterContext();
	return (
		<Wrapper className="form-control">
			<input
				type="text"
				name="text"
				placeholder="search"
				className="search-input"
				value={text}
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
	.search-input {
		padding: 0.5rem;
		background: var(--clr-grey-10);
		border-radius: var(--radius);
		border-color: transparent;
		letter-spacing: var(--spacing);
	}
	.search-input::placeholder {
		text-transform: capitalize;
	}
`;
export default FilterBySearchInput;
