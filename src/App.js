import logo from './logo.svg';
import './App.css';
import MainPage from './FirstPage';
import NavBar from './NavBar';
import Difference from './SecondContainer';
import Testimonials from './ThirdContainer';
import CallToAction from './CTA';
import Footer from './Footer';

function App() {
	return (
		<div className="App">
			<p>
				<NavBar />
				<MainPage />
				<Difference />
				<Testimonials />
				<CallToAction />
				<Footer />
			</p>
		</div>
	);
}

export default App;
