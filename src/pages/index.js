import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>√ 說明易懂 </>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        搭配課程影片以簡單的解說讓您能快速上手，並可在影片留言或GitHub issue上發問討論。
      </>
    ),
  },
  {
    title: <>√ 內容豐富</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        內容涵蓋....
      </>
    ),
  },
  {
    title: <>√ 完整程式碼</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        課程內所有程式碼皆放在GitHub上，方便取得更不漏接任何程式碼。
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.title}`}>{/*Description will go into a meta tag in <head />*/}
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/home')}>
              前往閱讀說明文件
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
