import { ArrowLeft } from "lucide-react";

const CountryDetail = () => {
	return (
		<div>
			<button type='button' className="">
				{" "}
				<ArrowLeft /> Back
			</button>

			<div className=''>
				<div className=''>
					<img src='' alt='' />
				</div>

				<div className=''>
					<p className=''>Belgium</p>

					<div className=''>
						<div className=''>
							<p className=''>
								Native Name: <span className=''>Biege</span>
							</p>
							<p className=''>
								Population: <span className=''>Biege</span>
							</p>
							<p className=''>
								Region: <span className=''>Biege</span>
							</p>
							<p className=''>
								Sub Region: <span className=''>Biege</span>
							</p>
							<p className=''>
								Capital: <span className=''>Biege</span>
							</p>
						</div>
						<div className=''>
							<p className=''>
								Top Level Domain: <span className=''>Biege</span>
							</p>
							<p className=''>
								Currencies: <span className=''>Biege</span>
							</p>
							<p className=''>
								Languages: <span className=''>Biege</span>
							</p>
						</div>
					</div>

					<div className=''>
						<p className=''>Border Countries: </p>
						{Array.from({ length: 3 }).map((_, i) => (
							<button className='' key={i}>
								France
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountryDetail;
