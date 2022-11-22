import React from 'react';
import ytvideos from '../utils/ytvideos';
import YTWidgetItem from './YTWidgetItem';
import { LogoYoutube } from '@styled-icons/ionicons-solid';

const YTWidget = () => {
	return (
		<section className="px-4 sm:px-44 py-16">
			<div className="flex items-center justify-between pb-6">
				<div>
					<h2 className="font-display font-bold text-3xl uppercase">Checkout Our Youtube Channel</h2>
					<p className="font-display">Go now and stop missing the latest videos</p>
				</div>
				<a
					target="_blank"
					href="https://www.youtube.com/channel/UCI7o4HvgUMyt0qQxr61K_jg?sub_confirmation=1"
					className="bg-[#FF0000] hover:bg-[#be3030] text-white uppercase font-display font-bold flex items-center justify-center space-x-2 h-12 rounded-lg px-5 transition-colors duration-200"
				>
					<LogoYoutube size="1.2rem" className="relative -top-[1px]" />
					<span>Subscribe</span>
				</a>
			</div>
			<div className="flex space-x-6">
				{ytvideos.map((item, index) => (
					<YTWidgetItem key={index} item={item} />
				))}
			</div>
		</section>
	);
};

export default YTWidget;
