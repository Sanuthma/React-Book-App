import './css/App.css'
import Home from "./pages/Home"
import Favourites from "./pages/Favourites"
import ContactUs from "./pages/ContactUs"
import BookDetails from "./pages/BookDetails"
import {Routes, Route} from "react-router-dom"
import { BookProvider } from './contexts/BookContext'
import NavBar from "./components/NavBar"

function App() {
  return (
    <BookProvider>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favourites" element={<Favourites />}/>
        <Route path="/book/:id" element={<BookDetails />}/>
        <Route path="/contactus" element={<ContactUs />}/>
      </Routes>
    </main>
    </BookProvider>

  );
}

export default App
