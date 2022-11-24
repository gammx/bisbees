import Image from 'next/image';
import Chip from './UI/Chip';
import NewsWidgetArticle from './NewsWidgetArticle';
import articlesData from '../utils/articles';
import moment from 'moment';

const lastArticle = articlesData[articlesData.length - 1];
const articles = articlesData.slice(0, 3).reverse();
const lastArticleCreationDate = moment(lastArticle.createdAt).format('MMM DD, YYYY');

const NewsWidget = () => {

	return (
		<section className="py-10">
			<div className="w-full flex flex-col justify-center items-center pb-10">
				<h1 className="uppercase font-display font-bold text-xl xs:text-2xl">Tournament News</h1>
				<p className="font-display text-xs xs:text-base">Read our latest news and press releases</p>
			</div>
			<div
				className="flex flex-col lg:flex-row space-y-6 lg:space-x-6 xl:justify-between px-6 sm:px-14 md:px-24 xl:px-40"
			>
				<article className="bg-royale text-white rounded-xl flex-1 lg:max-w-[460px] p-3">
					<Image
						src={lastArticle.thumbnail}
						alt={`${lastArticle.title} (thumbnail)`}
						width={440}
						height={320}
						className="w-full rounded-xl object-cover h-64 lg:h-auto"
					/>
					<div className="flex flex-col space-y-3 pt-3 px-3 pb-6">
						<div className="flex items-center space-x-3">
							<Chip theme="secondary">{lastArticle.category}</Chip>
							<span className="text-[#849EB9] text-xs">{lastArticle.readTime} min read</span>
						</div>
						<h1 className="font-bold text-2xl">{lastArticle.title}</h1>
						<div className="pt-3">
							<p className="text-xs mb-1">{lastArticle.author.name}</p>
							<p className="text-[#849EB9] text-2xs">{lastArticleCreationDate}</p>
						</div>
					</div>
				</article>
				<div className="flex items-center">
					<div className="w-full flex flex-col lg:max-w-[500px] space-y-10 xs:space-y-6">
						{articles.map((article) => (
							<NewsWidgetArticle key={article._id} article={article} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewsWidget;
