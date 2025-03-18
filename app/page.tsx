import { Container } from "./components/container";


export default function Home() {
  return (
    <div>
      <header>
        <Container>header</Container>
      </header>
      <main>
        <Container>Linears</Container>
      </main>
      <footer>
        <Container>
          footer here
        </Container>
      </footer>
    </div>
  );
}
