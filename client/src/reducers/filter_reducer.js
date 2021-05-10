import {
	LOAD_PRODUCTS,
	SET_LISTVIEW,
	SET_GRIDVIEW,
	UPDATE_SORT,
	SORT_PRODUCTS,
	UPDATE_FILTERS,
	FILTER_PRODUCTS,
	CLEAR_FILTERS
} from '../actions';

const filter_reducer = (state, action) => {
	// eslint-disable-next-line default-case
	switch (action.type) {
		case LOAD_PRODUCTS:
			let maxPrice = action.payload.map((product) => product.price);
			maxPrice = Math.max(...maxPrice);
			return {
				...state,
				all_products: [...action.payload],
				filtered_products: [...action.payload],
				filters: { ...state.filters, max_price: maxPrice, price: maxPrice }
			};
		case SET_GRIDVIEW:
			return { ...state, grid_view: true };
		case SET_LISTVIEW:
			return { ...state, grid_view: false };
		case UPDATE_SORT:
			return { ...state, sort: action.payload };
		case SORT_PRODUCTS:
			const { sort, filtered_products } = state;
			let initialProducts = [...filtered_products];
			if (sort === 'price-lowest') {
				initialProducts = initialProducts.sort(
					(curItem, nextItem) => curItem.price - nextItem.price
				);
			}
			if (sort === 'price-highest') {
				initialProducts = initialProducts.sort((curItem, nextItem) => {
					if (nextItem.price < curItem.price) {
						return -1;
					}
					if (nextItem.price > curItem.price) {
						return 1;
					}
					return 0;
				});
			}
			if (sort === 'name-a') {
				initialProducts = initialProducts.sort((curItem, nextItem) => {
					return curItem.name.localeCompare(nextItem.name);
				});
			}
			if (sort === 'name-z') {
				initialProducts = initialProducts.sort((curItem, nextItem) => {
					return nextItem.name.localeCompare(curItem.name);
				});
			}
			return { ...state, filtered_products: initialProducts };
		case UPDATE_FILTERS:
			const { name, value } = action.payload;
			return { ...state, filters: { ...state.filters, [name]: value } };
		case FILTER_PRODUCTS:
			const { all_products } = state;
			const { text, category, company, color, price, shipping } = state.filters;
			let tempProducts = [...all_products];
			// filtering
			// text
			if (text) {
				tempProducts = tempProducts.filter((product) => {
					return product.name.toLowerCase().startsWith(text);
				});
			}

			// category
			if (category !== 'all') {
				tempProducts = tempProducts.filter(
					(product) => product.category === category
				);
			}

			// company
			if (company !== 'all') {
				tempProducts = tempProducts.filter(
					(product) => product.company === company
				);
			}
			// color
			if (color !== 'all') {
				tempProducts = tempProducts.filter((product) => {
					return product.colors.find((c) => c === color);
				});
			}
			// price

			tempProducts = tempProducts.filter((product) => product.price <= price);
			// shipping
			if (shipping) {
				tempProducts = tempProducts.filter(
					(product) => product.shipping === true
				);
			}

			return { ...state, filtered_products: tempProducts };
		case CLEAR_FILTERS:
			return {
				...state,
				filters: {
					...state.filters,
					text: '',
					company: 'all',
					category: 'all',
					color: 'all',
					price: state.filters.max_price,
					shipping: false
				}
			};
	}
	throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
