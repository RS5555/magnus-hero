import HeroScreen from "./components/HeroScreen";

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
