import { useState } from "react";
import TypingAnimation from "./TypingAnimation";
import profileImage from "@/assets/profile.png";

const ProfileSection = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
      {/* Profile Image */}
      <div className="relative">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden glow-lg animate-float animate-pulse-glow white-glow-img relative">
          <img 
            src={profileImage} 
            alt="Pravin Kumar V" 
            className="w-full h-full object-cover relative z-10"
          />
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-semibold mb-2 text-glow white-text-glow">
          <TypingAnimation 
            text="<Pravin Kumar V>" 
            speed={80}
            onComplete={() => setShowSubtitle(true)}
          />
        </h1>
        {showSubtitle && (
          <p className="text-lg md:text-xl text-comment animate-fade-in">
            // Game Developer & Graphic Designer
          </p>
        )}
      </div>
    </div>
  );
};

export default ProfileSection;
