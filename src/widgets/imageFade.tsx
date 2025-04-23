import { useState } from "react";

interface ImageFadeProps {
  src: string;
  alt: string;
  top: number
  left: number
  height: number
  width: number
}

const ImageFade = ({ src, alt, top, left, width, height }: ImageFadeProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      style={{
        top,
        left,
        height,
        width,
        position:'absolute',
        objectFit: "cover",
        opacity: loaded ? 1 : 0,
        transform: loaded ? "scale(1)" : "scale(1.02)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    />
  );
};

export default ImageFade;
