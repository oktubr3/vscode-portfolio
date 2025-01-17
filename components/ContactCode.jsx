import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'maurohabbaby.vercel.app',
    href: 'https://maurohabbaby.vercel.app/',
  },
  {
    social: 'email',
    link: 'mauroh@gmail.com',
    href: 'mailto:mauroh@gmail.com',
  },
  {
    social: 'github',
    link: 'oktubr3',
    href: 'https://github.com/oktubr3',
  },
  {
    social: 'telegram',
    link: '@maurohabbaby',
    href: 'https://t.me/maurohabbaby',
  },
  {
    social: 'codepen',
    link: 'codepen.io/oktubr3',
    href: 'https://codepen.io/oktubr3',
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
