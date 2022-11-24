import React from 'react';
import Image from 'next/image';
import networks from '~/utils/networks';
import marlinSidebarSrc from '~public/marlin_sidebar.png';
import marlinSidebarMobileSrc from '~public/marlin_sidebar_horizontal.png';
import { useMediaQuery } from "react-responsive";
import { useComponentHydrated } from 'react-hydration-provider';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const isHydrated = useComponentHydrated();
	const isNotMobile = useMediaQuery({ minWidth: 1024 });
	const footerImageSrc = isNotMobile ? marlinSidebarSrc : marlinSidebarMobileSrc;

	return (
		<footer className="flex flex-col lg:flex-row lg:h-[600px]">
			{isHydrated && (
				<div
					className="relative w-full lg:w-[350px] h-[200px] lg:h-full bg-center bg-no-repeat bg-cover flex items-end lg:justify-center pl-8 lg:pl-0 pb-8 lg:pb-12"
				>
					<Image
						src={footerImageSrc}
						alt="Two marlin fishes fighting on a white background"
						className="absolute top-0 left-0 w-full h-full object-cover"
					/>
					<div className="lg:text-center z-10">
						<p className="font-brand uppercase text-3xl sm:text-5xl mb-1 sm:mb-3">Bisbee&apos;s</p>
						<p className="text-xs">The World&apos;s Richest Tournaments</p>
					</div>
				</div>
			)}
			<div className="flex-1 flex flex-col bg-royale p-8 sm:p-16">
				<div className="flex space-x-4 mb-16">
					{networks.map((network) => (
						<a
							target="_blank"
							rel="noreferrer"
							key={network.name}
							href={network.url}
							aria-label={`Follow us on ${network.name}`}
							className="w-12 h-12 border border-white rounded-lg flex items-center justify-center text-white hover:border-white/50 transition-colors duration-200"
						>
							{<network.icon size={24} />}
						</a>
					))}
				</div>
				<div className="max-w-[620px] space-y-6 xs:space-y-0 grid grid-cols-1 xs:grid-cols-2  text-white text-xs">
					<div className="flex flex-col space-y-3">
						<b className="uppercase font-bold">Headquarters</b>
						<p>5454 Surrey Path, Suite 104 <br /> Frisco, Texas 75034 USA</p>
					</div>
					<div className="flex flex-col space-y-3">
						<b className="uppercase font-bold ">Registrations, Payments, Sponsorships</b>
						<p>1117 Hot Springs Way <br /> Celina, TX 75009 USA</p>
					</div>
				</div>
				<div className="max-w-[620px] bg-[#121921] h-px w-full my-6"></div>
				<div className="max-w-[620px] space-y-6 xs:space-y-0 grid grid-cols-1 xs:grid-cols-2 text-white text-xs">
					<div className="flex flex-col space-y-3">
						<b className="uppercase font-bold">Phone</b>
						<p>+1 714 393 6107</p>
					</div>
					<div className="flex flex-col space-y-3">
						<b className="uppercase font-bold">Email</b>
						<a className="hover:underline" href="mailto:info@bisbees.com">info@bisbees.com</a>
					</div>
				</div>

				<div className="flex-1 flex items-end pt-24 lg:pt-0 text-white">
					<div className="flex flex-col sm:flex-row justify-between w-full">
						<div className="flex justify-between sm:space-x-5 md:space-x-16 font-book text-xs">
							<p className="hidden xs:block">{currentYear} &copy; All Rights Reserved</p>
							<a href="#" className="opacity-50 hover:opacity-80 transition-opacity duration-200">Terms Of Use</a>
							<a href="#" className="opacity-50 hover:opacity-80 transition-opacity duration-200">Privacy and Policy</a>
						</div>

						<a
							href="https://gammx.tech"
							rel="noreferrer"
							target="_blank"
							className="self-center sm:self-auto pt-20 sm:pt-0 pb-6 sm:pb-0 hover:opacity-80"
						>
							<img src="/22.svg" alt="GAMMX (logo)" width={47} height={17} />
						</a>
						<p className="flex xs:hidden font-book text-xs self-center">{currentYear} &copy; All Rights Reserved</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
