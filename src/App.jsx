import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CustomerTickets from "./components/CustomerTickets/CustomerTickets"
import Footer from "./components/Footer/Footer"
import heroImg from "../src/assets/vector1.png"
import heroBg from "../src/assets/vector2.png"



const fetchTicket = async () =>{
  const res = await fetch("/ticket.json")
  return res.json()
}

const customerPromise = fetchTicket();

function App() {
  return (
    <>
      <Navbar></Navbar>


      <Suspense fallback ={<span className="loading loading-spinner loading-xl"></span>}>
        <CustomerTickets customerPromise={customerPromise}></CustomerTickets>
      </Suspense>

      <Footer></Footer>
    </>
  );
}

export default App;
