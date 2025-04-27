import { ReactNode } from "react";
import heroStyles from "./hero.module.scss";
import { Instagram, Linkedin, Mail, Download } from "react-feather";

type SocialLinks = {
  name: string;
  link: string;
  icon: ReactNode;
};

const socialLinks: SocialLinks[] = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/daily_tog?igsh=MWV2aDZpZmtsbHZxMQ==",
    icon: <Instagram color="white" />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/gowthaman-ganesan/",
    icon: <Linkedin color="white" />,
  },
  {
    name: "Mail",
    link: "mailto:mailtogowthamanganesan@gmail.com",
    icon: <Mail color="white" />,
  },
  {
    name: "Download Resume",
    link: "https://drive.usercontent.google.com/download?id=1A2B3C4D5E6F7G8H9I0J&export=download&authuser=0",
    icon: <Download color="white" />,
  },
];

const Hero = () => {
  return (
    <div className={heroStyles.parallaxSection}>
      <div className={heroStyles.heroContent}>
        <p className={heroStyles.heroText}>
          Hey, I’m Gowthaman — I build websites and frame moments through
          photography. This space is a blend of code and curiosity.
        </p>
        <div className={heroStyles.socialLinks}>
          {socialLinks.map((platform, i) => (
            <a key={i} href={platform.link} className={platform.name} target="_blank">
              {platform.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
