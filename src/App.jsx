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
		return (
			<div
				className={`w-full h-screen flex items-center justify-center ${light ? "bg-red-400" : "bg-blue-950"}`}>
				<div
					className={`border-4 border-t-0 border-r-0 w-50 h-50 rounded-full animate-spin ${light ? "border-red-950" : "border-white"}`}
				/>
			</div>
		);
	}

	return (
		<div
			className={`h-screen overflow-y-scroll ${light ? "bg-gray-50 " : "bg-blue-950"}`}>
			<Header setLight={setLight} light={light} />
			<main className=''>
				<Routes>
					<Route path='/' element={<Countries data={data} light={light} />} />
					<Route
						path='/:name'
						element={<CountryDetail data={data} light={light} />}
					/>
				</Routes>
			</main>
		</div>
	);
};

export default App;
