import { Route, Routes } from "react-router-dom";
import Countries from "./components/Countries";
import CountryDetail from "./components/CountryDetail";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import countryData from "../data.json";
import Loader from "./components/Loader";

const App = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [light, setLight] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setData(countryData);
			setLoading(false);
		}, 750);
	}, []);

	if (loading) {
		return <Loader />;
	}

	return (
		<div
			className={`h-screen overflow-y-scroll ${light ? "bg-gray-50 " : "bg-blue-950"}`}>
			<Header setLight={setLight} light={light} />
			<main className=''>
				<Routes>
					<Route path='/' element={<Countries data={data} light={light} />} />
					<Route path='/:name' element={<CountryDetail data={data} light={light} />} />
				</Routes>
			</main>
		</div>
	);
};

export default App;
