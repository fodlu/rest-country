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

	useEffect(() => {
		setTimeout(() => {
			setData(countryData);
			setLoading(false);
		}, 750);
	}, []);

  if (loading) {
    return <Loader />
  }

	return (
		<div className='bg-blue-950 h-screen overflow-y-scroll'>
			<Header />
			<main className=''>
				<Routes>
					<Route path='/' element={<Countries data={data} />} />
					<Route path='/:name' element={<CountryDetail data={data} />} />
				</Routes>
			</main>
		</div>
	);
};

export default App;
