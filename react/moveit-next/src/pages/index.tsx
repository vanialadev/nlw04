import {ExperienceBar} from "../components/ExperienceBar";
import {Profile} from "../components/Profile";
import styles from "../styles/pages/Home.module.css"
import {CompletedChallenges} from "../components/CompletedChallenges";
import Head from "next/head";
import {Countdown} from "../components/Countdown";

export default function Home() {
  return (
  <div className={styles.container}>
    <Head>
      <title>Início | move.it</title>
    </Head>

    <ExperienceBar />

    <section>
      <div>
        <Profile />
        <CompletedChallenges />
        <Countdown />
      </div>
    </section>
  </div>
  )
}
