import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserContext } from '../context/user_context';

const PrivateRoute = ({ children, ...rest }) => {
	const { state } = useUserContext();
	const { isAuthenticated } = state;
	return (
		<Route
			{...rest}
			render={() => {
				return isAuthenticated ? children : <Redirect to="/"></Redirect>;
			}}
		></Route>
	);
};
export default PrivateRoute;
