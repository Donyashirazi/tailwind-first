import React from 'react';
import { FaEarlybirds } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../Image/logo.svg';
import { FaAlignJustify, FaTimes } from 'react-icons/fa';

const NavBar = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div className="relative bg-red-500 mx-auto my-10 w-auto">
				<div
					className={` ${
						open
							? 'flex flex-row-reverse items-end justify-around p-4'
							: 'flex flex-row justify-between text-2xl mx-20 p-6 md: md:flex-row'
					}`}
				>
					<div className={`pt-2 ${open ? 'hidden' : ''}`}>
						<img
							src={logo}
							className="h-10"
						></img>
					</div>

					<div
						className={`text-gray-800 cursor-pointer flex justify-center w-full items-center space-x-2 md:flex-row md:space-x-6
						${
							open
								? 'flex flex-col items-center space-x-0'
								: 'hidden  md:flex md:flex-row'
						}`}
					>
						<div className="hover:text-white">Pricing</div>
						<div className="hover:text-white">Product</div>
						<div className="hover:text-white">About Us</div>
						<div className="hover:text-white">Careers</div>
						<div className="hover:text-white">Community</div>
						<button className="hover:bg-amber-100 py-2 px-4 text-2xl rounded-full baseline bg-white">
							Get Started
						</button>
					</div>
					<div
						className={`md:hidden text-2xl p-2 ${open ? '' : ''}`}
						onClick={() => setOpen(!open)}
					>
						<div>{open ? <FaTimes /> : <FaAlignJustify />}</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavBar;
