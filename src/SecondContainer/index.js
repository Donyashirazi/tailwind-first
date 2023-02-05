import React from 'react';

const Difference = () => {
	return (
		<div>
			<div className="container flex mx-auto px-6 flex-col justify-center space-y-18 mt-12 md:flex-row md:w:1/2">
				<div className="flex flex-col md:w-1/2 ">
					<h2 className="max-w-md text-5xl font-bold text-center md:text-left">
						What's different about Manage?
					</h2>
					<p className="max-w-xl text-center text-gray-500 text-3xl mt-6 md:text-left">
						Manage provides all the functionality your team needs,
						without the complexity. Our software is tailor-made for
						modern digital product teams.
					</p>
				</div>
				<div className="flex flex-col mt-20 space-y-12 md:ml-12 md:w-1/2 md:mt-0">
					<div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex flex-row">
						<div className="flex flex-col">
							<div className="flex items-center space-x-4 rounded-full bg-red-200 md:bg-transparent">
								<div className="px-4 py-2 text-white rounded-full bg-red-500">
									01
								</div>
								<h3 className="text-base font-bold">
									Track company-wide progress
								</h3>
							</div>

							<p className="text-gray-700 max-w-lg mx-16 text-left">
								See how your day-to-day tasks fit into the wider
								vision. Go from tracking progress at the
								milestone level all the way down to the smallest
								of details. Never lose sight of the bigger
								picture again.
							</p>
						</div>
					</div>
					<div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex flex-row">
						<div className="flex flex-col">
							<div className="flex items-center space-x-4 rounded-full bg-red-200 md:bg-transparent">
								<div className="px-4 py-2 text-white rounded-full bg-red-500">
									02
								</div>
								<h3 className="text-base font-bold">
									Advanced built-in reports
								</h3>
							</div>

							<p className="text-gray-700 max-w-lg mx-16 text-left">
								Set internal delivery estimates and track
								progress toward company goals. Our customisable
								dashboard helps you build out the reports you
								need to keep key stakeholders informed.
							</p>
						</div>
					</div>
					<div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex flex-row">
						<div className="flex flex-col">
							<div className="flex items-center space-x-4 rounded-full  bg-red-200 md:bg-transparent">
								<div className="px-4 py-2 text-white rounded-full bg-red-500">
									03
								</div>
								<h3 className="text-base font-bold">
									Everything you need in one place
								</h3>
							</div>

							<p className="text-gray-700 max-w-lg mx-16 text-left">
								Stop jumping from one service to another to
								communicate, store files, track tasks and share
								documents. Manage offers an all-in-one team
								productivity solution.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Difference;
