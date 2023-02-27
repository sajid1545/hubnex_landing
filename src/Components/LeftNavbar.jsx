import React from 'react';
import { Link } from 'react-scroll';

const LeftNavbar = () => {
	return (
		<div className="h-screen flex flex-col  items-center justify-center gap-10 text-2xl fixed">
			<li className="cursor-pointer text-white ">
				<Link hashSpy activeClass="active" className="flex flex-col" smooth spy to="section-1">
					<span className="line bg-white w-10 h-1"></span>
					<span className="text-1 hidden">SECTION-1</span>
				</Link>
			</li>
			<li className="cursor-pointer text-white">
				<Link hashSpy activeClass="active" className="flex flex-col" smooth spy to="section-2">
					<span className="line bg-white w-10 h-1"></span>
					<span className="text-1 hidden">SECTION-2</span>
				</Link>
			</li>
			<li className="cursor-pointer text-white">
				<Link hashSpy activeClass="active" className="flex flex-col" smooth spy to="section-3">
					<span className="line bg-white w-10 h-1"></span>
					<span className="text-1 hidden">SECTION-3</span>
				</Link>
			</li>
			<li className="cursor-pointer text-white">
				<Link hashSpy activeClass="active" className="flex flex-col" smooth spy to="section-4">
					<span className="line bg-white w-10 h-1"></span>
					<span className="text-1 hidden">SECTION-4</span>
				</Link>
			</li>
		</div>
	);
};

export default LeftNavbar;
