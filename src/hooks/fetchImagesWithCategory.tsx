import { useEffect, useState } from "react";
import { CATEGORIES, imagesData, ImagesData } from "../constants";

const API_BASE_URL = import.meta.env.VITE_BASE_URL; 

export const useImagesByCategory = (category: CATEGORIES) => {
  const [images, setImages] = useState<ImagesData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!category) return;
    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        if(category === CATEGORIES.none) {
          throw new Error(`Error this is not a proper category`)
        }
        const encodedCategory = encodeURIComponent(category);
        const res = await fetch(`${API_BASE_URL}/images/category/${encodedCategory}`);

        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        // const data = await res.json();
        setImages(imagesData);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err?.message || "Something went wrong");
        setImages(imagesData);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [category]);

  return { images, loading, error };
};
