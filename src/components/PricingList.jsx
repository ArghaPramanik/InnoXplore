import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";
import useCustomToast from "../hooks/useCustomToast.jsx"; // Import your custom toast



const PricingList = () => {
  const { showToast, ToastContainer } = useCustomToast(); // Use custom toast hook


  const contactUs = (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FBE6A3"><path d="M440-280v-40h80v40h-80Zm0-60v-31q-19-11-29.5-29.5T400-440q0-33 23.5-56.5T480-520q33 0 56.5 23.5T560-440q0 21-10.5 39.5T520-371v31h-80Zm200 18-42-43q11-17 16.5-36t5.5-39q0-20-5.5-39T598-515l42-43q20 26 30 56t10 62q0 32-10 62t-30 56Zm-320 0q-20-26-30-56t-10-62q0-83 58.5-141.5T480-640v-50l90 80-90 80v-50q-58 0-99 41t-41 99q0 20 5.5 39t16.5 36l-42 43ZM240-40q-33 0-56.5-23.5T160-120v-720q0-33 23.5-56.5T240-920h480q33 0 56.5 23.5T800-840v720q0 33-23.5 56.5T720-40H240Zm0-200h480v-480H240v480Zm0 80v40h480v-40H240Zm0-640h480v-40H240v40Zm0-40v40-40Zm0 720v-40 40Z"/></svg>
  );

  const GetStarted = (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M382-320 155-547l57-57 170 170 366-366 57 57-423 423ZM200-160v-80h560v80H200Z"/></svg>
  );

  const handleGetStarted = () => {
    showToast("🚀 Get started feature coming soon! Stay tuned! 🔑" ,{
      position: { bottom: "20px", left: "20px" }, // Adjust the position if necessary
      background: "#fff",
      color: "#333",
      icon: GetStarted ,
      duration: 2000,
    });
  };

  const handleContactUs = () => {
    showToast("📧 Feel free to reach out to us at arghapramanik15@gmail.com!", {
      position: { bottom: "20px", left: "20px" }, // Adjust the position if necessary
      background: "#fff",
      color: "#333",
      icon: contactUs ,
      duration: 2000,
    });
  };

  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <Button
            className="w-full mb-6"
            white={!!item.price}
            onClick={item.price ? handleGetStarted : handleContactUs} // Call appropriate handler
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <ToastContainer /> {/* Add the ToastContainer here to display custom toasts */}
    </div>
  );
};

export default PricingList;
