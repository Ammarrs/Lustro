import Home from "./pages/Home";
import Navbar from './components/Header/Navbar';

function App() {
  return (
    <div className="bg-radial-[at_50%_50%] from-(--bg-2) to-(--bg) text-(--ink) h-screen flex flex-col items-center">
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
