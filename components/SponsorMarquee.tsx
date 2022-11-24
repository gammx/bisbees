import Marquee from "react-fast-marquee";
import Image from "next/image";
import sponsors from '../utils/sponsors';
import { useMediaQuery } from "react-responsive";

const SponsorMarquee = () => {
	const isNotMobile = useMediaQuery({ minWidth: 640 });

	return (
		<div className="px-6 sm:px-10 pt-10 pb-16">
			<Marquee
				pauseOnHover
				gradientWidth={isNotMobile ? 200 : 50}
			>
				{sponsors.map((sponsor, index) => (
					<a key={index} href={sponsor.href} rel="noreferrer" target="_blank" className="mx-6">
						<Image
							src={sponsor.icon}
							alt={`${sponsor.name} (logo)`}
							height={64}
							width={64}
						/>
					</a>
				))}
			</Marquee>
		</div>
	);
};

export default SponsorMarquee;
