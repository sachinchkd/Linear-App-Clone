import { Container } from "./components/container";
import { Hero, HeroSubtitle, HeroTitle } from "./components/hero";


export default function Home() {
  return (
    <div>
      <header>
        <Container>header</Container>
      </header>
      <main>
        <Container>
          <Hero>
            <HeroTitle>
            Linear is a purpose-built tool for
            <br/>planning and building products
            </HeroTitle>
            <HeroSubtitle>
            Meet the system for modern software development.
            <br/>
            Streamline issues, projects, and product roadmaps.
            </HeroSubtitle>
          </Hero>
            
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
