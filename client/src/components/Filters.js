import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import FilterByCompany from './filters/FilterByCompany';
import FilterByCategory from './filters/FilterByCategory';
import FilterByColor from './filters/FilterByColor';
import FilterBySearchInput from './filters/FilterBySearchInput';
import FilterByPrice from './filters/FilterByPrice';
import FilterByShipping from './filters/FilterByShipping';

const Filters = () => {
	const { clearFilters } = useFilterContext();

	return (
		<Wrapper>
			<div className="content">
				<form onSubmit={(e) => e.preventDefault()}>
					<FilterBySearchInput />
					<FilterByCategory />
					<FilterByCompany />
					<FilterByColor />
					<FilterByPrice />
					<FilterByShipping />
				</form>
				<button type="button" className="clear-btn" onClick={clearFilters}>
					clear filters
				</button>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	.form-control {
		margin-bottom: 1.25rem;
		h5 {
			margin-bottom: 0.5rem;
		}
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
	.active {
		border-color: var(--clr-grey-5);
	}
	.shipping {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		text-transform: capitalize;
		column-gap: 0.5rem;
		font-size: 1rem;
	}
	.clear-btn {
		background: var(--clr-red-dark);
		color: var(--clr-white);
		padding: 0.25rem 0.5rem;
		border-radius: var(--radius);
	}
	@media (min-width: 768px) {
		.content {
			position: sticky;
			top: 1rem;
		}
	}
`;

export default Filters;
