import '../main.css';
import imageIllustration from '../Image/illustration-intro.svg';

const MainPage = () => {
	return (
		<div className="container flex flex-col-reverse items-center justify-center px-6 mx-auto space-y-0 md:flex-row md:space-y-0">
			<div className="flex flex-col space-y-12  text-4xl space-y-8 mt-20 md:w-1/2">
				<h1 className="max-w-lg text-4xl font-bold text-center md:text-left md:text-6xl ">
					Bring everyone together to build better products
				</h1>
				<p className="max-w-xl text-center text-gray-500 md:text-left ">
					Manage makes it simple for software teams to plan day-to-day
					tasks while keeping the larger team goals in view.
				</p>
				<button className="bg-red-500 text-white p-3 hover:bg-neutral-500  rounded-full md:w-1/3  text-2xl">
					Get Started
				</button>
			</div>
			<img
				src={imageIllustration}
				className="md:w-1/2 space-y-8"
			></img>
		</div>
	);
};
export default MainPage;
