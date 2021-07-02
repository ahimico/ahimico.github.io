import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}

const features = [
  {
    image: 'https://avatars.githubusercontent.com/u/23579958?v=4',
    url: 'https://t.me/AhIMi_channel',
    title: 'GitHub page',
  },
  {
    image: '/img/landing/AhIMi.png',
    url: 'https://t.me/AhIMi_channel',
    title: 'AhIMi channel | telegram',
  },
  {
    image: '/img/landing/twitter.svg',
    url: 'https://twitter.com/realamirhe',
    title: '@realamirhe | twitter',
  },
]

function HomeBody() {
  return (
    <main className="hero">
      <div className="container">
        <ul>
          <li className={styles.li}>
            ⚡ If<b>premature optimization</b> is the root of all evil, Then I
            have an<b>evil factory</b>.
          </li>
          <li className={styles.li}>
            💬 If you are searching for<b>new idea</b>, there you are.
          </li>
          <li className={styles.li}>
            ⚡ I explain things in a<b>complex</b> and<b>precise</b> manner
            <b>from the beginning</b>.
          </li>
          <li className={styles.li}>
            ⚡ If<b>premature optimization</b> is the root of all evil, Then I
            have an<b>evil factory</b>.
          </li>
          <li className={styles.li}>
            🚒<b>Kryptonite</b> and<b>misconceptions</b> about other's
            profession are two of my<b>main weaknesses</b>.
          </li>

          <li className={styles.li}>
            🎨 I occasionally<b>draw</b> somethings.
          </li>
        </ul>

        {features.map(item => (
          <a href={item.url} title={item.title} target="_blank">
            <img
              src={item.image}
              width="85"
              className={clsx('shadow--lw', styles.img)}
            />
          </a>
        ))}
      </div>
    </main>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <HomeBody />
    </Layout>
  )
}
