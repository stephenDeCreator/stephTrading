import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../../context/filter_context';
import { getUniqueValues } from '../../utils/helpers';

const FilterByCategory = () => {
	const {
		filters: { category },
		updateFilters,
		all_products
	} = useFilterContext();

	const categories = getUniqueValues(all_products, 'category');
	return (
		<Wrapper className="form-control">
			<h5>category</h5>
			<div>
				{categories.map((c, index) => {
					return (
						<button
							key={index}
							onClick={updateFilters}
							type="button"
							name="category"
							className={`${category === c.toLowerCase() ? 'active' : null}`}
						>
							{c}
						</button>
					);
				})}
			</div>
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
	.active {
		border-color: var(--clr-grey-5);
	}
	button {
		display: block;
		margin: 0.25em 0;
		padding: 0.25rem 0;
		text-transform: capitalize;
		background: transparent;
		border: none;
		border-bottom: 1px solid transparent;
		letter-spacing: var(--spacing);
		color: var(--clr-grey-5);
		cursor: pointer;
	}
`;
export default FilterByCategory;
