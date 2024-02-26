import Navbar from "../components/Navbar"
import Home from "../components/Home"
import About from "../components/About";
import Services from "../components/Services";


const Page: React.FC = () => {
  return (
    <>
    <Home />
    <Navbar />
    <About />
    <Services />
  </>
  )
};

export default Page;
