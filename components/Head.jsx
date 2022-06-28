import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Mauro Habbaby is a Full Stack Developer building applications you'd love to use"
      />
      <meta
        name="keywords"
        content="mauro habbaby, mauro, habbaby, web developer portfolio, mauro web developer, mauro developer, full stack, portfolio, vue, vuejs, node, nodejs"
      />
      <meta property="og:title" content="Mauro Habbaby's Portfolio" />
      <meta
        property="og:description"
        content="A Full Stack developer building apps that you'd love to use."
      />
      {/* <meta property="og:image" content="https://raw.githubusercontent.com/oktubr3/img/main/maurohabbaby.jpg" />
      <meta property="og:url" content="https://maurohabbaby.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" /> */}
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Mauro Habbaby'
};
