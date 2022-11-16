import React from 'react';
import tournaments from '../utils/tournaments';
import { ChevronBack, ChevronForward } from '@styled-icons/ionicons-outline';

const Tournaments = () => {
	const [tournament, setTournament] = React.useState(tournaments[0]);

	return (
		<section>
			<div
				className="bg-royale flex flex-col lg:flex-row lg:space-x-14 lg:justify-center lg:px-16 pt-24 md:pt-40"
			>
				<div className="flex items-center justify-center">
					<img src={tournament.thumbnail} alt="" className="w-[70vw] lg:w-auto" />
				</div>
				<div className="flex-1 flex  justify-center text-white">
					<div className="flex flex-col relative lg:-top-20 max-w-[100%] xs:max-w-[80vw] lg:max-w-[44vw] xl:max-w-[48vw] px-2 xs:px-0">
						<div>
							<h1 className="font-medium uppercase -tracking-[0.08em] text-center lg:text-left text-[12vw] lg:text-[7.1vw] xl:text-[8vw]">
								{tournament.name}
							</h1>
							<div className="-tracking-[0.08em] font-book w-full flex items-center flex-col md:flex-row md:justify-between text-xs xl:text-base">
								<blockquote><span className="italic">"{tournament.quote.text}"</span> — {tournament.quote.by}</blockquote>
								<span>October 24 — 28, 2023</span>
							</div>
						</div>
						<div className="flex-1 flex justify-center pt-24">
							<div className="flex w-[700px] lg:w-[500px] max-w-[700px]">
								<div className="pt-8 pr-4 sm:px-9">
									<ChevronBack size={24} />
								</div>
								<div className="flex-1 text-xs">
									<div className="space-y-4">
										<div className="w-full flex justify-between uppercase">
											<span className="font-bold">Early Bird Deadline</span>
											<span className="font-book">August 31, 2023</span>
										</div>
										<div className="w-full flex justify-between uppercase">
											<span className="font-bold">Base Entry</span>
											<span className="font-book">$5,000.00</span>
										</div>
										<div className="w-full flex justify-between uppercase">
											<span className="font-bold">Across The Board</span>
											<span className="font-book">$71,500.00</span>
										</div>
									</div>
									<a href="" className="w-full h-10 flex items-center justify-center font-bold uppercase rounded-md border border-white mt-12">Tell Me More</a>
								</div>
								<div className="pt-8 pl-4 sm:px-9">
									<ChevronForward size={24} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Tournaments;
