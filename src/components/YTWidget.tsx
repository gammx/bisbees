import React from 'react';
import YTWidgetItem from './YTWidgetItem';
import { LogoYoutube } from '@styled-icons/ionicons-solid';
import { useSpringCarousel } from 'react-spring-carousel';
import { useMediaQuery } from "react-responsive";
import { useComponentHydrated } from 'react-hydration-provider';
import { trpc } from '~/server/utils/trpc';
import { Video } from '@prisma/client';

const YTWidget = () => {
	const [videos, setVideos] = React.useState([{ id: '' }] as Video[]);
	const { data } = trpc.ytvideos.useQuery(undefined, {
		refetchOnWindowFocus: false,
		onSuccess: (data) => setVideos(data.videos),
	});
	const [isDragging, setIsDragging] = React.useState(false);
	const isHydrated = useComponentHydrated();
	const matchQuery = useMediaQuery({ minWidth: 600 });
	const isNotMobile = isHydrated && matchQuery;
	const {
		carouselFragment,
		slideToNextItem,
		useListenToCustomEvent
	} = useSpringCarousel({
		itemsPerSlide: isNotMobile ? 2 : 1,
		withLoop: true,
		gutter: 24,
		shouldResizeOnWindowResize: true,
		items: videos.map((video) => ({
			id: video.hash,
			renderItem: (
				<YTWidgetItem
					key={video.id}
					item={video}
					isDragging={isDragging}
				/>
			),
		})),
	});

	useListenToCustomEvent(event => {
		if (event.eventName === 'onDrag') {
			setIsDragging(true);
		}
		if (event.eventName === 'onSlideChange') {
			setIsDragging(false);
		}
	});

	React.useEffect(() => {
		const interval = setInterval(() => {
			slideToNextItem();
		}, 5000);

		return () => clearInterval(interval);
	}, [slideToNextItem]);

	if (!data) return null;

	return (
		<section className="px-10 lg:px-20 py-10 sm:py-20 overflow-hidden">
			<div className="flex flex-col xs:flex-row items-center justify-center xs:justify-between pb-10">
				<div className="text-center xs:text-start mb-4 xs:mb-0">
					<h2 className="font-display font-bold text-lg sm:text-[3vw] lg:text-3xl uppercase">Checkout Our Youtube Channel</h2>
					<p className="font-display text-xs sm:text-[1.5vw] lg:text-base">Go now and stop missing the latest videos</p>
				</div>
				<a
					rel="noreferrer"
					target="_blank"
					href="https://www.youtube.com/channel/UCI7o4HvgUMyt0qQxr61K_jg?sub_confirmation=1"
					className="bg-[#EB0000] hover:bg-[#be3030] text-white uppercase font-display font-bold text-xs sm:text-base flex items-center justify-center space-x-2 h-10 sm:h-12 rounded-lg px-4 sm:px-5 transition-colors duration-200"
				>
					<LogoYoutube size={isNotMobile ? '1.2rem' : '1rem'} className="relative -top-[1px]" />
					<span>Subscribe</span>
				</a>
			</div>
			{carouselFragment}
		</section>
	);
};

export default YTWidget;
