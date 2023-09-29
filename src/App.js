import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Ballina } from "./pages/ballina/ballina";
import MaybeShowNavBar from "./components/Maybeshownavbar";
import { Rreth } from './pages/rreth/rreth';
import { Oferta } from './pages/oferta/oferta';
import { Footer } from "./pages/Footer/footer";
import { Contactus } from "./pages/contactus/contactus";

function App() {
  return (
    <div className="App">
      
      <Router>

      <Navbar />

        <MaybeShowNavBar>
        <Ballina />
        <Rreth/>
        <Oferta/>
        </MaybeShowNavBar>

        <Routes>
        <Route path="/kontaktoni" element={<Contactus/>}></Route>
        </Routes>

        <Footer/>


      </Router>

    </div>
  );
}

export default App;
