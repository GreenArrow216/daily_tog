import SummerVibes2 from "./assets/Summer Vibes 2.webp";
import Buildings3 from "./assets/Buildings 3.webp";
import Cat from "./assets/Cat.webp";
import BeeAndLavender2 from "./assets/Bee and Lavender 2.webp";


export enum CATEGORIES {
  bw = "black&white",
  street = "street",
  travel = "travel",
  animals = "animals",
}

export type ImagesData = {
  name: string;
  category: CATEGORIES;
  image_url: string;
  description?: string;
  tags?: string[];
};

export const categoryImages: ImagesData[] = [
  { name: "Street", category: CATEGORIES.street, image_url: SummerVibes2 },
  { name: "Black and white", category: CATEGORIES.bw, image_url: Buildings3 },
  { name: "Travel", category: CATEGORIES.travel, image_url: Cat },
  { name: "Flora & Fauna", category: CATEGORIES.animals, image_url: BeeAndLavender2 },
];

export const imagesData: ImagesData[] = [
  {
    name: "Pigeon Lamp",
    description: "Pigeon sitting on a lamp",
    tags: ["b&w", "bird", "minimalistic"],
    category: CATEGORIES.bw,
    image_url:
      "https://f005.backblazeb2.com/file/daily-tog-photo-bucket/Black+and+White/DSCF0311+1.jpg",
  },
  {
    name: "Tree",
    description: "Tree with a leading line of buildings",
    tags: ["b&w", "nature"],
    category: CATEGORIES.bw,
    image_url:
      "https://f005.backblazeb2.com/file/daily-tog-photo-bucket/Black+and+White/DSCF0401.jpg",
  },
  {
    name: "Lego Car",
    description: "A lego car in black and white",
    tags: ["b&w", "indoor"],
    category: CATEGORIES.bw,
    image_url:
      "https://f005.backblazeb2.com/file/daily-tog-photo-bucket/Black+and+White/DSCF0870.jpg",
  },
  {
    name: "Pigeon Juxtaposition",
    description: "A Juxtaposition of pigeon grabbing the fruit",
    tags: ["b&w", "bird", "juxtaposition"],
    category: CATEGORIES.bw,
    image_url:
      "https://f005.backblazeb2.com/file/daily-tog-photo-bucket/Black+and+White/DSCF0890.jpg",
  },
  {
    name: "Street Symmetry",
    description: "A reflection where the lamp created a symmety image",
    tags: ["b&w", "reflection", "symmetry"],
    category: CATEGORIES.bw,
    image_url:
      "https://f005.backblazeb2.com/file/daily-tog-photo-bucket/Black+and+White/DSCF1009.jpg",
  },
  {
    name: "Cigarette Juxtapose",
    description: "A cigarette is juxtaposed with the I in Stub it out",
    tags: ["b&w", "juxtaposition"],
    category: CATEGORIES.bw,
    image_url:
      "https://f005.backblazeb2.com/file/daily-tog-photo-bucket/Black+and+White/DSCF1021.jpg",
  },
  {
    name: "Negative space bird",
    description: "A bird flying in the sky with a negative space as building",
    tags: ["b&w", "bird"],
    category: CATEGORIES.bw,
    image_url:
      "https://f005.backblazeb2.com/file/daily-tog-photo-bucket/Black+and+White/DSCF1145.jpg",
  },
  {
    name: "Puddle Reflection",
    description: "A reflection in a puddle",
    tags: ["b&w", "symmetry", "reflection"],
    category: CATEGORIES.bw,
    image_url:
      "https://f005.backblazeb2.com/file/daily-tog-photo-bucket/Black+and+White/DSCF1153.jpg",
  },
  {
    name: "Pigeon and a walking guy",
    description: "A different composition with three pigeons and walking human",
    tags: ["b&w", "bird"],
    category: CATEGORIES.bw,
    image_url:
      "https://f005.backblazeb2.com/file/daily-tog-photo-bucket/Black+and+White/DSCF1654-2.jpg",
  },
];
