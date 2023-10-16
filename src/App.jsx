import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="w-full h-screen flex">
      <div className="w-1/5 bg-darkblue">
        <Sidebar />
      </div>
      <div className="w-4/5">
        <Dashboard />
      </div>
    </main>
  );
}

export default App;
