import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import {
	Home,
	SingleProduct,
	About,
	Cart,
	Products,
	Error,
	Checkout,
	PrivateRoute,
	AuthWrapper
} from './pages';
import FormPage from './pages/FormPage';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUpPage';

function App() {
	return (
		<AuthWrapper>
			<Router>
				<Navbar />
				<Sidebar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
					<Route exact path="/signup">
						<SignUp />
					</Route>
					<Route exact path="/login">
						<LoginPage />
					</Route>
					<Route exact path="/cart">
						<Cart />
					</Route>
					<Route exact path="/products">
						<Products />
					</Route>
					<Route exact path="/products/:id" children={<SingleProduct />} />
					<PrivateRoute exact path="/checkout">
						<Checkout />
					</PrivateRoute>
					<PrivateRoute exact path="/form">
						<FormPage />
					</PrivateRoute>
					<Route exact path="*">
						<Error />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</AuthWrapper>
	);
}

export default App;
