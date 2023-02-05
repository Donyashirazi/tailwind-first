import React from 'react';
import { FaEarlybirds } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../Image/logo.svg';
import { FaAlignJustify } from 'react-icons/fa';

const NavBar = () => {
	return (
		<>
			<div className="relative bg-red-500 mx-auto my-10">
				<div className="flex items-center justify-between text-2xl mx-20 p-6">
					<div className="pt-2">
						<img
							src={logo}
							className="h-10"
						></img>
					</div>
					<div className="hidden cursor-pointer md:flex  items-center space-x-6 ">
						<div className="hover:text-white">Pricing</div>
						<div className="hover:text-white">Product</div>
						<div className="hover:text-white">About Us</div>
						<div className="hover:text-white">Careers</div>
						<div className="hover:text-white">Community</div>

						<button className="hover:bg-amber-100 py-2 px-4 text-2xl rounded-full baseline bg-white">
							Get Started
						</button>
					</div>
					<button className="flex focus:outline-none text-gray-300 text-4xl md:hidden">
						<FaAlignJustify />
						<div className="open cursor-pointer md:flex flex-col justify-center items-center items-center space-x-6 ">
							<div className="hover:text-white">Pricing</div>
							<div className="hover:text-white">Product</div>
							<div className="hover:text-white">About Us</div>
							<div className="hover:text-white">Careers</div>
							<div className="hover:text-white">Community</div>
						</div>
					</button>
				</div>
			</div>
		</>
	);
};

export default NavBar;
