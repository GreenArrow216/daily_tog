import justifiedLayout from "justified-layout";
import { useEffect, useState } from "react";
import ImageFade from "./imageFade";

interface Image {
  src: string;
  width: number;
  height: number;
  name: string;
}

interface Props {
  images: Image[];
  containerWidth: number;
  rowHeight?: number;
  margin?: number;
}

const PhotoGallery = ({
  images,
  containerWidth,
  rowHeight = 400,
  margin = 8,
}: Props) => {
  const [layout, setLayout] = useState<ReturnType<typeof justifiedLayout>>();

  useEffect(() => {
    const aspectRatios = images.map((img) => img.width / img.height);
    const geometry = justifiedLayout(aspectRatios, {
      containerWidth,
      targetRowHeight: rowHeight,
      boxSpacing: margin,
    });
    setLayout(geometry);
  }, [images, containerWidth, rowHeight, margin]);

  return (
    <div
      style={{
        position: "relative",
        width: containerWidth,
        height: layout?.containerHeight || 0,
      }}
    >
      {layout?.boxes.map((box, i: number) => (
        <ImageFade
          key={i}
          src={images[i].src}
          alt={images[i].name}
          top={box.top}
          left={box.left}
          width={box.width}
          height={box.height}
        />
      ))}
    </div>
  );
};

export default PhotoGallery;
