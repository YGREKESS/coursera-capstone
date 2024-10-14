import "./App.css";
import BookingForm from "./components/BookingForm";
import Nav from "./components/Nav";
import BbqImg from "./img/bbq.jpg";

function App() {
  return (
    <main className="App">
      <header>
        <Nav />
      </header>
      <section className="content">
        <img src={BbqImg} alt="" />
        <BookingForm />
      </section>
    </main>
  );
}

export default App;
