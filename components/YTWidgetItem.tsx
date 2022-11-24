import React from 'react';
import Image from 'next/image';
import { Video } from '../utils/ytvideos';
import { PlayCircle } from '@styled-icons/ionicons-solid';

interface YTWidgetItemProps extends React.HTMLAttributes<HTMLDivElement> {
	item: Video;
	isDragging?: boolean;
}

const YTWidgetItem: React.FC<YTWidgetItemProps> = ({
	item,
	isDragging,
	...props
}) => {
	const thumbnailSrc = item.thumbnailWebp || item.thumbnail;

	return (
		<a
			href={`https://www.youtube.com/watch?v=${item.hash}`}
			target="_blank"
			draggable={false}
			className="relative rounded-xl overflow-hidden cursor-pointer"
			onClick={(e) => isDragging ? e.preventDefault() : null}
		>
			<Image
				src={thumbnailSrc}
				alt={`${item.title} (thumbnail)`}
				width={570}
				height={280}
			/>
			<div className="w-full h-full absolute top-0 left-0 text-white bg-gradient-to-b from-transparent to-royale/80 z-10 flex items-end p-4 hover:opacity-90 transition-opacity duration-200">
				<div className="flex items-center space-x-3">
					<PlayCircle size="1.5rem" />
					<span className="text-xs">{item.title}</span>
				</div>
			</div>
		</a>
	);
};

export default YTWidgetItem;
