import { useEffect, useRef, useState } from "react";

interface ImageFadeProps {
  src: string;
  alt: string;
  top: number;
  left: number;
  height: number;
  width: number;
}

const ImageFade = ({ src, alt, top, left, width, height }: ImageFadeProps) => {
  const [loaded, setLoaded] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px",
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <img
      src={isVisible ? src : ""}
      alt={alt}
      loading="lazy"
      ref={imgRef}
      onLoad={() => setLoaded(true)}
      style={{
        top,
        left,
        height,
        width,
        position: "absolute",
        objectFit: "cover",
        opacity: loaded ? 1 : 0,
        transform: loaded ? "scale(1)" : "scale(1.02)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        willChange: "opacity,",
      }}
    />
  );
};

export default ImageFade;
