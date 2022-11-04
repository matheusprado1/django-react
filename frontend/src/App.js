import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Container className="py-5">
        <h1>Hello Word</h1>
        </Container>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
