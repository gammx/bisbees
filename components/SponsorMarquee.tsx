import Marquee from "react-fast-marquee";
import sponsors from '../utils/sponsors';

const SponsorMarquee = () => {
	return (
		<div className="px-6 sm:px-14 md:px-24 xl:px-40 pt-10 pb-16">
			<Marquee
				pauseOnHover
			>
				{sponsors.map((sponsor, index) => (
					<a key={index} href={sponsor.href} target="_blank" className="mx-6">
						<img
							src={sponsor.icon}
							alt={`${sponsor.name} (logo)`}
						/>
					</a>
				))}
			</Marquee>
		</div>
	);
};

export default SponsorMarquee;