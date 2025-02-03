import Head from 'next/head';

interface MetaHeadProps {
  title: string;
  description: string;
}

const MetaHead = ({ title, description }: MetaHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <link rel="icon" href="/images/spc.png" type="image/png" />
    </Head>
  );
};

export default MetaHead;