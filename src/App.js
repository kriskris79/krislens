import "./scss/_main.scss";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Slider from "./components/Slider";
import Blogvertwo from "./components/Blogvertwo";
import Contact from "./components/Contact";

function App() {
  return (
    <div >


        <NavBar />
        <Slider />
        <MainPage />
        <Contact />
        <Blog />
        <Blogvertwo />

        <Footer />




    </div>
  );
}

export default App;

