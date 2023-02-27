import React from 'react';

const Section4 = () => {
	return (
		<div id="section-4" className="pl-[250px] h-screen bg-red-800 text-white  ">
			<div className="flex h-screen justify-between items-center pr-[200px] gap-10">
				<div className="lg:w-2/4">
					<h1 className="text-5xl font-extrabold">Section-04</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ratione recusandae
						placeat dignissimos aperiam ut assumenda ad quia quod esse beatae, facere sequi
						repudiandae eligendi dolor nam ullam pariatur amet ipsa minus voluptates praesentium!
						Repellendus, commodi. Quisquam amet reprehenderit, sint quibusdam praesentium, possimus
						tempora quos consequatur recusandae fugit iste nisi.
					</p>
				</div>
				<div>
					{/* <h1 className="text-5xl font-extrabold">Section-04</h1> */}
					<img
						src="https://images.unsplash.com/photo-1532378360235-a014597aa9d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNhcnMlMjBkYXJrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
						alt=""
						className="h-screen"
					/>
				</div>
			</div>
		</div>
	);
};

export default Section4;
