import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import { AppRouter } from '~/pages/api/trpc/[trpc]';

function getBaseUrl() {
  if (typeof window !== 'undefined') {
		// Browser should use relative path
    return '';
	}

  if (process.env.VERCEL_URL) {
		// Reference for vercel.com
    return `https://${process.env.VERCEL_URL}`;
	}

  // Assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      links: [
        httpBatchLink({
          // Using full URL to use ssr
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   **/
  ssr: true,
});