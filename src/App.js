import './App.css';
import Home from './components/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import { Redirect, Route, Switch } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <>
		<Navbar/>
    	<Switch>
			<Route exact path = "/home"	component = {Home}/>
			<Route exact path = "/about"    	component = {About}/>
			<Route exact path = "/service" 	component = {Service}/>
			<Route exact path = "/contact" 	component = {Contact}/>
			<Redirect to = "/home"/>
    	</Switch>
		<Footer/>
    </>
  );
}

export default App;
