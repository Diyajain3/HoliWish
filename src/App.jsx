import { useState } from "react";
import HoliMessage from "./HoliMessage";
import appBg from "./assets/bg1.avif"; // 👈 different image
import { Sparkles } from "lucide-react";
function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-cover bg-center backdrop-blur"
      style={{ backgroundImage: `url(${appBg})` }}
    >
      {!showMessage && (
        <button
  onClick={() => setShowMessage(true)}
  className="z-10 bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white px-8 py-3 rounded-full font-semibold 
  shadow-[0_4px_15px_rgba(0,0,0,0.6),0_0_20px_rgba(255,255,255,0.3)] 
  hover:scale-105 hover:shadow-[0_6px_25px_rgba(0,0,0,0.8),0_0_25px_rgba(255,255,255,0.5)] 
  transition duration-300"
>
  <Sparkles className="mr-2 inline size-6" />
  Click Here
  <Sparkles className="ml-2 inline size-6" />
</button>
      )}

      <div
        className={`absolute inset-0 transition-all duration-[2000ms] ease-out ${
          showMessage ? "circle-open" : "circle-close"
        }`}
      >
        <HoliMessage />
      </div>
    </div>
  );
}

export default App;
