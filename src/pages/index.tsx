import AboutMe from "../modules/aboutMe";
import Articles from "../modules/articles";
import Contact from "../modules/contact";
import Experiencie from "../modules/experiencie";
import Footer from "../modules/footer";
import Hero from "../modules/hero";
import Portfolio from "../modules/portfolio";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Portfolio />
      <Experiencie />
      <Articles />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}
