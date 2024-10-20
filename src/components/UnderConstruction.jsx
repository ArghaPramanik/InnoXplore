import { useNavigate } from "react-router-dom";
import { construction} from "../assets";

const UnderConstruction = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center py-20">
      <h1 className="h1 mb-4">This Page is Under Construction 🚧</h1>
      <img 
        src={construction}
        alt="Construction Animation"
        className="mx-auto mb-8" 
      />
      

      
      <button
  className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
  onClick={() => navigate("/")} 
>
    Go to Home🏗️
</button>

    </div>
  );
};

export default UnderConstruction;