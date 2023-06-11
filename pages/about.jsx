import styles from '../styles/About.module.css';

const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <br></br>
      <p className={styles.line}>I am passionate about technology, I enjoy software development and since I was a child I was interested in electronics. I promote and celebrate Open Source, Free Software and GNU/Linux. My goal for the future is to work as a Full Developer Stack, for that I train hard every day.</p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
