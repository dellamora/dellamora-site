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
      <Hero />
      <Portfolio />
      <Experience />
      <Articles />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}
