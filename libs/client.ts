import { createClient, MicroCMSClient } from 'microcms-js-sdk';

const serviceDomain = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

if (!serviceDomain) {
  throw new Error('`NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN` environment variable is not defined');
}

if (!apiKey) {
  throw new Error('`MICROCMS_API_KEY` environment variable is not defined');
}

export const client: MicroCMSClient = createClient({
  serviceDomain,
  apiKey,
});

/**
 * ブログ一覧を取得する
 */
export const getBlogList = async () => {
  const response = await client.get({ endpoint: 'blogs' });
  return response.contents;
};

/**
 * ブログ詳細を取得する
 * @param id - コンテンツID
 */
export const getBlogById = async (id?: string) => {
  if (!id) {
    throw new Error('`id` is required to fetch blog detail');
  }
  const response = await client.get({ endpoint: 'blogs', contentId: id });
  return response;
};