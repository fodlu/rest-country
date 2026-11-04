import Countries from "./components/Countries";
import CountryDetail from "./components/CountryDetail";
import Header from "./components/Header";

const App = () => {
	return (
		<div className="bg-blue-950 h-screen overflow-y-scroll">
			<Header />
			<main className="">
				{/* <Countries /> */}
        <CountryDetail />
			</main>
		</div>
	);
};

export default App;
