import {Link} from "react-router"
const Error: React.FC=()=>{
    return <>
    
    <div className="flex items-start justify-center min-h-screen bg-white text-gray-800 px-4 md:bg-gray-900 mt-5">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold tracking-widest md:text-white">404</h1>
        <p className="text-2xl mt-4 md:text-white">Page non trouvée</p>
        <p className="mt-2 text-gray-500 md:text-white">Cette page n'existe pas ou a été déplacée.</p>
        <Link
          to={"/"}
          className="mt-6 inline-block px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
        >
          Revenir à l'accueil
        </Link>
      </div>
    </div>
    </>


}
export default Error