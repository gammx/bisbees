import React from 'react';
import moment from 'moment';
import tournaments from '../utils/tournaments';
import { useSpring, animated, config } from 'react-spring';
import { ChevronBack, ChevronForward } from '@styled-icons/ionicons-outline';
import { animations } from '../utils/animations';

const currencyFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD'
});

const Tournaments = () => {
	const [tournament, setTournament] = React.useState(tournaments[0]);
	const [dates, setDates] = React.useState({
		start: moment(tournament.startDate),
		end: moment(tournament.endDate),
		birdDeadline: moment(tournament.birdDeadline),
	});
	const [thumbnailStyles, thumbnailApi] = useSpring(() => (animations.slideUp));
	const [headingStyles, headingApi] = useSpring(() => (animations.scaleIn));
	// Animated currency values
	const [isEntryAnimated, setIsEntryAnimated] = React.useState(true);
	const [isPrizeAnimated, setIsPrizeAnimated] = React.useState(true);
	const { val: baseEntry } = useSpring({
		val: tournament.baseEntry, from: { val: 0 },
		onStart: () => setIsEntryAnimated(true),
		onRest: () => setIsEntryAnimated(false)
	});
	const { val: acrossTheBoard } = useSpring({
		val: tournament.acrossTheBoard, from: { val: 0 },
		onStart: () => setIsPrizeAnimated(true),
		onRest: () => setIsPrizeAnimated(false),
	});

	const moveSlideshow = (direction: 'previous' | 'next') => {
		thumbnailApi.start({
			...animations.slideDown,
			config: config.stiff,
			onResolve: () => {
				thumbnailApi.start({ ...animations.slideUp, config: config.molasses });
			}
		});
		headingApi.start({
			...animations.scaleOut,
			config: config.stiff,
			onResolve: () => {
				headingApi.start({ ...animations.scaleIn, config: config.molasses });
				const currentIndex = tournaments.indexOf(tournament);
				const prevIndex = currentIndex === 0 ? tournaments.length - 1 : currentIndex - 1;
				const nextIndex = currentIndex === tournaments.length - 1 ? 0 : currentIndex + 1;
				const newTournament = direction === 'previous' ? tournaments[prevIndex] : tournaments[nextIndex];
				setTournament(newTournament);
				setDates({
					start: moment(newTournament.startDate),
					end: moment(newTournament.endDate),
					birdDeadline: moment(newTournament.birdDeadline)
				});
			}
		});
	};

	return (
		<section>
			<div
				className="bg-royale overflow-hidden flex flex-col lg:flex-row lg:space-x-14 lg:justify-center lg:px-16 pt-24 md:pt-40"
			>
				<div className="relative flex items-center justify-center">
					<animated.img src={tournament.thumbnail} alt="" className="w-[70vw] lg:w-auto z-10" style={thumbnailStyles} />
					<div
						className="absolute top-0 left-0 lg:left-auto lg:right-0 w-[250px] sm:w-[370px] h-[250px] sm:h-[350px] rounded-full opacity-40 blur-[150px] transition-colors duration-500"
						style={{ backgroundColor: tournament.shadowColors[0] }}
					></div>
				</div>
				<div className="relative flex-1 flex justify-center text-white">
					<div className="flex flex-col relative lg:-top-20 max-w-[100%] xs:max-w-[80vw] lg:max-w-[44vw] xl:max-w-[48vw] px-2 xs:px-0 z-10">
						<animated.div style={headingStyles}>
							<h1 className="font-medium uppercase -tracking-[0.08em] text-center lg:text-left text-[12vw] lg:text-[7.1vw] xl:text-[8vw]">
								{tournament.name}
							</h1>
							<div className="-tracking-[0.08em] font-book w-full flex items-center flex-col md:flex-row md:justify-between text-xs xl:text-base">
								<blockquote><span className="italic">"{tournament.quote.text}"</span> — {tournament.quote.by}</blockquote>
								<span>{dates.start.format('MMMM DD')} — {dates.end.format('DD, YYYY')}</span>
							</div>
						</animated.div>
						<div className="flex-1 flex justify-center pt-24">
							<div className="flex w-[700px] lg:w-[500px] max-w-[700px]">
								<div
									className="pt-8 pr-4 sm:px-9 opacity-30 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
									onClick={() => moveSlideshow('previous')}
								>
									<ChevronBack size={24} />
								</div>
								<div className="flex-1 text-xs">
									<div className="space-y-4">
										<div className="w-full flex justify-between uppercase">
											<span className="font-bold">Early Bird Deadline</span>
											<animated.span className="font-book">{dates.birdDeadline.format('MMMM DD, YYYY')}</animated.span>
										</div>
										<div className="w-full flex justify-between uppercase">
											<span className="font-bold">Base Entry</span>
											{isEntryAnimated ? (
												<animated.span className="font-book">{baseEntry.to(val => currencyFormatter.format(val))}</animated.span>
											) : (
												<span className="font-book">{currencyFormatter.format(baseEntry.get())}</span>
											)}
										</div>
										<div className="w-full flex justify-between uppercase text-[#CF9763]">
											<span className="font-bold">Across The Board</span>
											{isPrizeAnimated ? (
												<animated.span className="font-book">{acrossTheBoard.to(val => currencyFormatter.format(val))}</animated.span>
											) : (
												<span className="font-book">{currencyFormatter.format(acrossTheBoard.get())}</span>
											)}
										</div>
									</div>
									<a href="" className="w-full h-10 flex items-center justify-center font-bold uppercase rounded-md border border-white mt-12 transition-colors duration-100 hover:bg-white hover:text-royale">Tell Me More</a>
								</div>
								<div
									className="pt-8 pl-4 sm:px-9 opacity-30 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
									onClick={() => moveSlideshow('next')}
								>
									<ChevronForward size={24} />
								</div>
							</div>
						</div>
					</div>
					<div
						className="absolute -bottom-24 right-0 w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] rounded-full opacity-40 blur-[150px] transition-colors duration-500"
						style={{ backgroundColor: tournament.shadowColors[1] }}
					></div>
				</div>
			</div>
		</section>
	);
};

export default Tournaments;
