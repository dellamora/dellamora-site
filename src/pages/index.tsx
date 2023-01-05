import Head from "next/head";
import AboutMe from "../modules/aboutMe";
import Articles from "../modules/articles";
import Contact from "../modules/contact";
import Experience from "../modules/experience";
import Footer from "../modules/footer";
import Hero from "../modules/hero";
import Portfolio from "../modules/portfolio";

const Home: React.FC = (): JSX.Element => {
  return (
    <div className="">
      <Head>
        <title>Francielle Dellamora</title>
      </Head>
      <Hero />
      <AboutMe />
      <Portfolio />
      <Experience />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
