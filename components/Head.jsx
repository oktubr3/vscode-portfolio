import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Mauro Habbaby is a full stack developer building applications you'd love to use"
      />
      <meta
        name="keywords"
        content="mauro habbaby, mauro, habbaby, web developer portfolio, mauro web developer, mauro developer, mern stack, mauro habbaby portfolio"
      />
      <meta property="og:title" content="Mauro Habbaby's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building apps that you'd lovo to use."
      />
      {/* <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" /> */}
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Mauro Habbaby'
};
