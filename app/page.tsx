import { Container } from "./components/container";
import { Hero } from "./components/hero";


export default function Home() {
  return (
    <div>
      <header>
        <Container>header</Container>
      </header>
      <main>
        <Container>
          <Hero
            title="Linear is a purpose-built tool for planning and building products"
            subtitle="Meet the system for modern software development. Streamline issues, projects, and product roadmaps."
          />
        </Container>
      </main>
      <footer>
        <Container>
          footer here
        </Container>
      </footer>
    </div>
  );
}
