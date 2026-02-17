// import AboutScreen from "./components/AboutScreen";
// import ContactPage from "./components/Contact";
// import Footer from "./components/Footer";
import HeroScreen from "./components/HeroScreen";
// import ProjectScreen from "./components/ProjectScreen";

export default function Home() {
  return (
    <main className="bg-white">
      <section id="home">
        <HeroScreen />
      </section>

      {/* <section id="about">
        <AboutScreen />
      </section>

      <section id="projects">
        <ProjectScreen />
      </section>

      <section id="contact">
        <ContactPage />
      </section>

      <Footer /> */}
    </main>
  );
}
