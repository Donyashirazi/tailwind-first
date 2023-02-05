import React from 'react';
import Anisha from '../Image/avatar-anisha.png';
import Ali from '../Image/avatar-ali.png';
import Richard from '../Image/avatar-richard.png';

const Testimonials = () => {
	return (
		<div
			id="full-container"
			className="flex flex-col justify-center space-y-8 my-16 items-center"
		>
			<h2 className="text-4xl font-bold">
				What's different about Manage?
			</h2>
			<div
				id="people-container"
				className="flex flex-col space-y-8 justify-between items-center md:flex-row md:space-x-20 "
			>
				<div
					id="each-person"
					className="flex flex-col items-center justify-center"
				>
					<img src={Anisha}></img>
					<h2 className="font-bold my-4">Anisha Li</h2>
					<p className="max-w-sm">
						{' '}
						Manage provides all the functionality your team needs,
						without the complexity. Our software is tailor-made for
						modern digital product teams.
					</p>
				</div>
				<div
					id="each-person"
					className="flex flex-col items-center justify-center"
				>
					<img src={Ali}></img>
					<h2 className="font-bold my-4">Ali Bravo</h2>
					<p className="max-w-sm">
						{' '}
						“We have been able to cancel so many other subscriptions
						since using Manage. There is no more cross-channel
						confusion and everyone is much more focused.”
					</p>
				</div>
				<div
					id="each-person"
					className="flex flex-col items-center justify-center"
				>
					<img src={Richard}></img>
					<h2 className="font-bold my-4">Richard Watts</h2>
					<p className="max-w-sm">
						{' '}
						“Manage has supercharged our team’s workflow. The
						ability to maintain visibility on larger milestones at
						all times keeps everyone motivated.”
					</p>
				</div>
			</div>
			<button className="bg-red-500 text-white p-3 px-6 hover:bg-neutral-500  rounded-full md:w-fit text-1xl">
				Get Started
			</button>
		</div>
	);
};

export default Testimonials;
