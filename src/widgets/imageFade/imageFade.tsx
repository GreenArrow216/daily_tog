import { useState } from "react";

interface ImageFadeProps {
  src: string;
  alt: string;
}

const ImageFade = ({ src, alt }: ImageFadeProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      style={{
        // aspectRatio:index > length - ? '3/2' : 'auto',
        height: "100%",
        width: "100%",
        objectFit: "cover",
        opacity: loaded ? 1 : 0,
        transform: loaded ? "scale(1)" : "scale(1.02)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    />
  );
};

export default ImageFade;
