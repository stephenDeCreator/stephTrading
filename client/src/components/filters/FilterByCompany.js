import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../../context/filter_context';
import { getUniqueValues } from '../../utils/helpers';

const FiltersCompany = () => {
	const {
		filters: { company },
		updateFilters,
		all_products
	} = useFilterContext();

	const companies = getUniqueValues(all_products, 'company');
	return (
		<Wrapper className="form-control">
			<h5>compay</h5>
			<select
				name="company"
				value={company}
				onChange={updateFilters}
				className="company"
			>
				{companies.map((company, index) => {
					return (
						<option key={index} value={company}>
							{company}
						</option>
					);
				})}
			</select>
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
	.company {
		background: var(--clr-grey-10);
		border-radius: var(--radius);
		border-color: transparent;
		padding: 0.25rem;
	}
`;
export default FiltersCompany;
