import Countries from "./components/Countries";
import Country from "./components/Country";
import Header from "./components/Header";

const App = () => {
	return (
		<div>
			<Header />
			<main>
				<Countries />
        <Country />
			</main>
		</div>
	);
};

export default App;
