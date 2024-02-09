import './App.css'
import { Outlet, Link } from "react-router-dom";

function App() {

  return (
    <div className="p-[50px]">

      <div className="flex justify-between mb-10">
        <Link className="border px-4 py-2 bg-blue-700 text-white" to="/" >Inici</Link>
        <Link className="border px-4 py-2 bg-blue-700 text-white" to="/parc/montseny">Montseny</Link>
        <Link className="border px-4 py-2 bg-blue-700 text-white" to="/parc/vallvidrera">Vallvidrera</Link>
        <Link className="border px-4 py-2 bg-blue-700 text-white" to="/parc/collserola">Collserola</Link>
      </div>

      <div className="bg-blue-200 p-10">
        <Outlet />
      </div>

    </div>
  )
}

export default App
