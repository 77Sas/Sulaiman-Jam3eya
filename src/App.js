import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Route, Switch } from 'react-router';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Jam3eyatList from './components/Jam3eyatList';
import Details from './components/Details';

function App() {
	return (
		<div className="App App-header">
			<Navbar />

			<header className="App-header">
				<Switch>
					<Route exact path="/">
						<Home />
						<Jam3eyatList />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/Details/:slugz">
						<Details />
					</Route>
				</Switch>
			</header>
		</div>
	);
}

export default App;
