import Home from "./pages/Home";
import Navbar from './components/Header/Navbar';

function App() {
  return (
    <div className="bg-linear-to-l from-(--bg-4) via-(--bg-3) to-(--bg) text-(--ink) h-screen flex flex-col items-center">
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
