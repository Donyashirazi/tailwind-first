import React from 'react';

const CallToAction = () => {
	return (
		<div
			id="cta"
			className="bg-red-300"
		>
			<div className="flex flex-col item-center justify-between px-6 py-24 mx-20 space-y-12 md:flex-row md:space-y-0 ">
				<h2 className="text-5xl font-bold leading-tight text-white text-center md:text-4xl md:max-w-xl md:text-left">
					{' '}
					Simplify how your team works today
				</h2>
				<button className="bg-red-500 text-white p-3 hover:bg-neutral-500  rounded-full shadow-2xl md:w-1/6  text-2xl">
					Get Started
				</button>
			</div>
		</div>
	);
};

export default CallToAction;
