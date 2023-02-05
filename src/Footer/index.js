import React from 'react';
import logo from '../Image/logo.svg';
import faceBook from '../Image/icon-facebook.svg';
import instagram from '../Image/icon-instagram.svg';
import pinterest from '../Image/icon-pinterest.svg';
import twitter from '../Image/icon-twitter.svg';
import youtube from '../Image/icon-youtube.svg';
const Footer = () => {
	return (
		<div
			id="full-container"
			className="bg-gray-800 text-white flex flex-col-reverse items-center h-auto justify-around space-y-12 md:flex-row md:space-y-0 md:py-6"
		>
			<div className="pt-4 h-auto flex flex-col mx-20 items-center justify-around md:flex-col-reverse">
				<img
					src={logo}
					className="h-10 hidden md:block"
				></img>
				<div
					id="social-links"
					className="flex text-black w-22 space-x-4 flex-row justify-center items-center md:mt-2 md:mb-4"
				>
					<img
						className="h-8"
						src={faceBook}
					></img>
					<img
						className="h-8"
						src={instagram}
					></img>
					<img
						className="h-8"
						src={twitter}
					></img>
					<img
						className="h-8"
						src={youtube}
					></img>
					<img
						className="h-8"
						src={pinterest}
					></img>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center space-y-0 text-center md:text-left md:flex-row">
				<div
					id="middle-container"
					className="flex flex-col text-2xl md:text-left"
				>
					<div className="">Home</div>
					<div className="">Pricing</div>
					<div className="">Products</div>
					<div className="">About Us</div>
				</div>
				<div
					id="middle-container"
					className="flex flex-col text-2xl md:ml-12"
				>
					<div className="">Career</div>
					<div className="">Community</div>
					<div className="">Privacy Policy</div>
				</div>
			</div>
			<div
				id="input"
				className="flex flex-row items-center justify-center"
			>
				<form className="space-x-4 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
					<input
						type="text"
						placeholder="Updated in your inbox"
						className="flex-1 rounded-full  focus:outline-none px-4 py-2"
					></input>
					<button
						className="
						hover:bg-amber-200
						hover:text-black
						w-16
						rounded-full
						bg-red-500
						md:px-4
						md:py-2
						"
					>
						Go
					</button>
				</form>
			</div>
		</div>
	);
};
export default Footer;
