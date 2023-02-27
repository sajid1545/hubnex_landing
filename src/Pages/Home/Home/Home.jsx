import React from 'react';
import LeftNavbar from '../../../Components/LeftNavbar';
import Section2 from '../Section2/Section2';
import Section3 from '../Section3/Section3';
import Section4 from '../Section4/Section4';
import Section1 from './../Section1/Section1';

const Home = () => {
	return (
		<div>
			<div className="flex gap-10 relative">
				<div className="absolute left-10">
					<LeftNavbar />
				</div>
				<div className="flex-grow">
					<Section1 />
					<Section2 />
					<Section3 />
					<Section4 />
				</div>
			</div>
		</div>
	);
};

export default Home;
