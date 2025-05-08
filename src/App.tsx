import freestyleLogo from "/placeholder-freestyle-logo.svg";
import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen bg-gray-100">
      <a href="https://vite.dev" target="_blank">
        <img src={freestyleLogo} alt="Vite logo" className="opacity-10 w-48" />
      </a>
    </div>
  );
}

export default App;
