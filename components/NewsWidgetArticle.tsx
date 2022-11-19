import React, { useRef } from 'react';
import Chip from './UI/Chip';
import moment from 'moment';
import type { Article } from '../utils/articles';

type HTMLArticleProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

interface NewsWidgetArticleProps extends HTMLArticleProps {
	article: Article;
}

const NewsWidgetArticle: React.FC<NewsWidgetArticleProps> = ({
	article,
	...props
}) => {
	const creationDate = useRef(moment(article.createdAt));

	return (
		<article className="flex flex-col xs:flex-row xs:space-x-5 xs:max-h-[150px] w-full">
			<img src={article.thumbnail} alt="" className="object-cover rounded-lg w-full xs:w-auto h-48 xs:h-auto" />
			<div className="space-y-3 xs:space-y-5 text-royale">
				<div className="flex items-center space-x-3 pt-3 xs:pt-0">
					<Chip>{article.category}</Chip>
					<span className="text-[#849EB9] text-xs">{article.readTime} min read</span>
				</div>
				<h1 className="font-bold text-xl xs:text-lg">{article.title}</h1>
				<div className="text-2xs flex flex-row space-x-3 xs:space-x-0 xs:flex-col">
					<p className="font-medium">{article.author.name}</p>
					<p className="text-[#849EB9]">
						{creationDate.current.format('MMM DD, YYYY')}
					</p>
				</div>
			</div>
		</article>
	);
};

export default NewsWidgetArticle;