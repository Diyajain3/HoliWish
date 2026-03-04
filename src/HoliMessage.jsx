import { Sparkles } from "lucide-react";
import holiBg from "./assets/holi.avif";

function HoliMessage() {
  return (
    <div
      className="relative h-screen w-full flex items-center justify-center text-white text-center px-6 overflow-hidden bg-cover bg-center animated-bg"
      style={{ backgroundImage: `url(${holiBg})` }}
    >
      {/* 🌟 Soft Glow Behind Card */}
      <div className="absolute w-[500px] h-[500px] bg-pink-500/30 blur-3xl rounded-full"></div>

      {/* 💎 Glass Card */}
      <div
        className="relative bg-white/10 backdrop-blur-2xl p-10 rounded-3xl 
        shadow-[0_20px_60px_rgba(0,0,0,0.6)] 
        border border-white/20 
        max-w-2xl 
        animate-fadeIn animate-float"
      >
        <Sparkles
          className="mx-auto mb-6 text-yellow-300 animate-pulse"
          size={50}
        />

        <h1 className="text-5xl font-extrabold mb-6 tracking-wide bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
          Happy Holi 🎨
        </h1>

        <p className="text-lg font-medium leading-relaxed">
          May your life be painted with the brightest shades of happiness,
          sprinkled with laughter, and filled with love in every color.
          <br /><br />
          May this festival of colors wash away worries, bring new hopes,
          fresh beginnings, and beautiful memories that last forever.
          <br /><br />
          Let your dreams bloom like vibrant gulal in the air and your
          heart shine brighter than ever before. 💖
        </p>

        <p className="mt-8 text-xl font-semibold bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
          — By Diya Jain 💕
        </p>
      </div>
    </div>
  );
}

export default HoliMessage;