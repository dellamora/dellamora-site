import Head from "next/head";
import AboutMe from "../modules/aboutMe";
import Articles from "../modules/articles";
import Contact from "../modules/contact";
import Experience from "../modules/experience";
import Footer from "../modules/footer";
import Hero from "../modules/hero";
import Portfolio from "../modules/portfolio";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Francielle Dellamora</title>
      </Head>
      <Hero />
      <Portfolio />
      <Articles />
      <Experience />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}
