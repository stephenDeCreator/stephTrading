import React, { useContext, useReducer } from 'react';
import reducer from '../reducers/user_reducer';

const initialState = {
	token: null,
	isAuthenticated: null,
	loading: true,
	user: null
};

function init(initialState) {
	const user = JSON.parse(localStorage.getItem('user')) || null;
	const token = JSON.parse(localStorage.getItem('token')) || null;

	if (user !== null && token !== null) {
		initialState = {
			token,
			isAuthenticated: true,
			loading: false,
			user
		};
	}

	return initialState;
}

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState, init);
	// const { loginWithRedirect, logout, user } = useAuth0();

	return (
		<UserContext.Provider value={{ state, dispatch }}>
			{children}
		</UserContext.Provider>
	);
};
// make sure use
export const useUserContext = () => {
	return useContext(UserContext);
};
