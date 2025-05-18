import type { GetStaticProps, NextPage } from 'next';
import Layout from '../components/Layout';
import { client } from '../lib/cms';

interface ServicesProps {
  content: {
    title: string;
    body: string;
  };
}

const Services: NextPage<ServicesProps> = ({ content }) => {
  return (
    <Layout title={content.title}>
      <div dangerouslySetInnerHTML={{ __html: content.body }} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<ServicesProps> = async () => {
  const content = await client.get<ServicesProps['content']>({ endpoint: 'services' });
  return { props: { content } };
};

export default Services;
