import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../../context/filter_context';
import { getUniqueValues } from '../../utils/helpers';
import { FaCheck } from 'react-icons/fa';

const FilterByColor = () => {
	const {
		filters: { color },
		updateFilters,
		all_products
	} = useFilterContext();

	const colors = getUniqueValues(all_products, 'colors');
	return (
		<Wrapper className="form-control">
			<h5>colors</h5>
			<div className="colors">
				{colors.map((c, index) => {
					if (c === 'all') {
						return (
							<button
								key={index}
								name="color"
								onClick={updateFilters}
								data-color="all"
								className={`${color === 'all' ? 'all-btn active' : 'all-btn'}`}
							>
								all
							</button>
						);
					}
					return (
						<button
							key={index}
							name="color"
							style={{ background: c }}
							className={`${color === c ? 'color-btn active' : 'color-btn'}`}
							data-color={c}
							onClick={updateFilters}
						>
							{color === c ? <FaCheck /> : null}
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
	.colors {
		display: flex;
		align-items: center;
	}
	.color-btn {
		display: inline-block;
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background: #222;
		margin-right: 0.5rem;
		border: none;
		cursor: pointer;
		opacity: 0.5;
		display: flex;
		align-items: center;
		justify-content: center;
		svg {
			font-size: 0.5rem;
			color: var(--clr-white);
		}
	}
	.active {
		border-color: var(--clr-grey-5);
	}

	.all-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 0.5rem;
		opacity: 0.5;
	}
	.active {
		opacity: 1;
	}
	.all-btn .active {
		text-decoration: underline;
	}
`;
export default FilterByColor;
