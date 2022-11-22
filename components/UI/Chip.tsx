import React from 'react';
import cn from 'classnames';

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
	theme?: 'primary' | 'secondary';
}

const Chip: React.FC<ChipProps> = ({
	className,
	theme = 'primary',
	...props
}) => {
	return (
		<div
			className={cn("text-2xs inline-flex items-center justify-center rounded-3xl h-6 px-3", className, {
				"bg-royale text-white": theme === 'primary',
				"bg-white text-royale": theme === 'secondary',
			})}
			{...props}
		/>
	);
};

export default Chip;
