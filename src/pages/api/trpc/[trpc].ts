import * as trpcNext from '@trpc/server/adapters/next';
import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import { prisma } from '~/server/utils/prisma';

export type Context = inferAsyncReturnType<typeof createContext>;

// Do not export the whole object as it can be confused with i18n instances
const t = initTRPC.context<Context>().create();
export const router = t.router;
export const procedure = t.procedure;

// Handle context creation
export const createContext = async ({
  req,
  res,
}: trpcNext.CreateNextContextOptions) => {
  return {
    req,
    res,
  };
};

// Our API routes
export const appRouter = router({
  articles: procedure
    .query(async () => {
      const articles = await prisma.article.findMany({ include: { author: true } });
      return { articles };
    }),
  paginatedArticles: procedure
    .query(async () => {
      let articles = await prisma.article.findMany({ include: { author: true } });
      const lastArticle = articles[articles.length - 1];
      articles = articles.slice(0, 3).reverse();
      return {
        lastArticle,
        articles,
      };
    }),
  ytvideos: procedure
    .query(async () => {
      const videos = await prisma.video.findMany();
      return { videos: videos.reverse() };
    }),
});

export type AppRouter = typeof appRouter;

// Export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  responseMeta({ ctx, paths, type, errors }) {
    // In case we want to add some private routes in the future...
    //const allPublic = paths && paths.every((path) => {
    //  console.log(path);
    //  return path.includes('public')
    //});
    const allPublic = true;
    // Checking that no procedures errored
    const allOk = errors.length === 0;
    // Checking we're doing a query request
    const isQuery = type === 'query';
    if (ctx?.res && allPublic && allOk && isQuery) {
      // Cache request for 1 day + revalidate once every second
      const ONE_DAY_IN_SECONDS = 60 * 60 * 24;
      return {
        headers: {
          'cache-control': `s-maxage=1, stale-while-revalidate=${ONE_DAY_IN_SECONDS}`,
        },
      };
    }
    return {};
  },
});