export enum CATEGORIES {
  bw = "black-and-white",
  street = "street",
  travel = "travel",
  animals = "animals",
  none = "none",
}

export type ImagesData = {
  name: string;
  category: CATEGORIES;
  image_url: string;
  created_at?: Date;
  aspect_ratio?: string;
  description?: string;
  tags?: string[];
};


export const categoryImages: ImagesData[] = [
  {
    name: "Gowthaman Ganesan",
    description: "I'm a photographer cum w",
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/Gowthaman+Ganesan.jpg",
    category: CATEGORIES.none,
  },
  {
    name: "Street",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Summer+Vibes+2.webp",
  },
  {
    name: "Black and white",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Buildings+3.webp",
  },
  {
    name: "Travel",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Cat.webp",
  },
  {
    name: "Flora & Fauna",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Bee+and+Lavender+2.webp",
  },
];

export const imagesData: ImagesData[] = [
  {
    name: "AM-V8-Vantage-Head",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/AM+V8+Vantage+-+Head.webp",
    aspect_ratio: "381:640",
  },
  {
    name: "AM-V8-Vantage-Logo",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/AM+V8+Vantage+-+Logo.webp",
    aspect_ratio: "960:593",
  },
  {
    name: "AM-V8-Vantage-Side",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/AM+V8+Vantage+-+Side.webp",
    aspect_ratio: "3:2",
  },
  {
    name: "AM-V8-Vantage-Ultrawide",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/AM+V8+Vantage+-+Ultrawide.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "AM-V8-Vantage-Zoomed",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/AM+V8+Vantage+-+Zoomed.webp",
    aspect_ratio: "640:437",
  },
  {
    name: "Austin-Mini-Cooper",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Austin+Mini+Cooper.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "Sunset-And-Building",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Building+in+a+Sunset.webp",
    aspect_ratio: "3:4",
  },
  {
    name: "Buildings-4",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Buildings+4.webp",
    aspect_ratio: "480:337",
  },
  {
    name: "Cardinal-Flower",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Cardinal+Flower.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "Cottage",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Cottage.webp",
    aspect_ratio: "3:2",
  },
  {
    name: "Framed",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Framed.webp",
    aspect_ratio: "559:640",
  },
  {
    name: "Green",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Green.webp",
    aspect_ratio: "8:5",
  },
  {
    name: "High-Contrast",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/High+Contrast.webp",
    aspect_ratio: "5:4",
  },
  {
    name: "Juxtaposed-dustbin",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Justposed+dusbin.webp",
    aspect_ratio: "1421:1920",
  },
  {
    name: "Juxtaposed-Cigarette",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Juxtaposed+Cigarette.webp",
    aspect_ratio: "5:4",
  },
  {
    name: "Lambo",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Lambo.webp",
    aspect_ratio: "3:4",
  },
  {
    name: "Leading-Line-Football",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Leading+line+to+football.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "Leading-Line-Couples",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Leading+line+to+the+couples.webp",
    aspect_ratio: "3:2",
  },
  {
    name: "Leading-Line-Person-2",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Leading+lines+person+2.webp",
    aspect_ratio: "5:4",
  },
  {
    name: "Leading-Line-Person",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Leading+lines+to+person.webp",
    aspect_ratio: "4:5",
  },
  {
    name: "MG-Midget-Back",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/MG+Midget+-+Back.webp",
    aspect_ratio: "1920:1409",
  },
  {
    name: "MG-Midget-Tail",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/MG+Midget+-+Tail.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "MG-Midget-Wide",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/MG+Midget+-+Wide.webp",
    aspect_ratio: "1920:1301",
  },
  {
    name: "MG-Midget",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/MG+Midget.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "Pigeon-Stepped",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Pigeon+Stepped.webp",
    aspect_ratio: "429:640",
  },
  {
    name: "Plane",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Plane.webp",
    aspect_ratio: "5:4",
  },
  {
    name: "Pub",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Pub.webp",
    aspect_ratio: "1721:1920",
  },
  {
    name: "Red-Rose-2",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Red+rose+2.webp",
    aspect_ratio: "427:640",
  },
  {
    name: "Shoe-Hanging-From-Tree",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Shoe+Hanging+from+a+tree.webp",
    aspect_ratio: "683:960",
  },
  {
    name: "Smoke-Box",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Smoke+box.webp",
    aspect_ratio: "5:4",
  },
  {
    name: "Cycle-In-Snow",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Snow+on+a+Cycle.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "Street-1",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+1.webp",
    aspect_ratio: "640:317",
  },
  {
    name: "Street-10",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+10.webp",
    aspect_ratio: "4:5",
  },
  {
    name: "Street-11",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+11.webp",
    aspect_ratio: "3:4",
  },
  {
    name: "Street-12",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+12.webp",
    aspect_ratio: "5:8",
  },
  {
    name: "Street-3",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+3.webp",
    aspect_ratio: "3:2",
  },
  {
    name: "Street-4",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+4.webp",
    aspect_ratio: "39:64",
  },
  {
    name: "Street-5",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+5.webp",
    aspect_ratio: "97:128",
  },
  {
    name: "Street-6",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+6.webp",
    aspect_ratio: "3:2",
  },
  {
    name: "Street-7",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+7.webp",
    aspect_ratio: "1920:1283",
  },
  {
    name: "Street-8",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+8.webp",
    aspect_ratio: "4:5",
  },
  {
    name: "Street-9",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+9.webp",
    aspect_ratio: "5:4",
  },
  {
    name: "Summer-Vibes-1",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Summer+Vibes+1.webp",
    aspect_ratio: "3:2",
  },
  {
    name: "Summer-Vibes-2",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Summer+Vibes+2.webp",
    aspect_ratio: "640:397",
  },
  {
    name: "Summer-Vibes-3",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Summer+Vibes+3.webp",
    aspect_ratio: "5:4",
  },
  {
    name: "Summer-Vibes-4",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Summer+Vibes-+Football+and+the+grass.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "Sunset-Street-2",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Sunset+street+2.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "Two-Pigeons-On-A-Lamp",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Two+Pigeons+on+a+lamp.webp",
    aspect_ratio: "4:5",
  },
  {
    name: "Warehouse",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Warehouse.webp",
    aspect_ratio: "3:4",
  },
  {
    name: "Windows",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Windows.webp",
    aspect_ratio: "1920:1817",
  },
  {
    name: "Yellow-Jacket",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Yellow+Jacket.webp",
    aspect_ratio: "261:320",
  },
  {
    name: "Abstract-Shadows",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Abstract+B%26W.webp",
    aspect_ratio: "",
  },
  {
    name: "Looks-Like-Person",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/B%26W+-+looking+like+a+person.webp",
    aspect_ratio: "",
  },
  {
    name: "Ballerina",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Ballerina.webp",
    aspect_ratio: "3:5",
  },
  {
    name: "Bird-And-The-Moon",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Bird+and+the+moon.webp",
    aspect_ratio: "427:640",
  },
  {
    name: "Bird-In-The-Sky",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Bird+in+the+sky+2.webp",
    aspect_ratio: "5:4",
  },
  {
    name: "Dog",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Black+and+white+Dog.webp",
    aspect_ratio: "4:5",
  },
  {
    name: "Buildings-3",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Buildings+3.webp",
    aspect_ratio: "63:64",
  },
  {
    name: "Buildings-4",
    category: CATEGORIES.bw,
    image_url:
      "https://f005.backblazeb2.com/file/daily-tog-photo-bucket/black+and+white/Buildings+4.webp",
    aspect_ratio: "480:337",
  },
  {
    name: "Common-Holly",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Common+Holly.webp",
    aspect_ratio: "5:4",
  },
  {
    name: "Distorted-Reflection",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Distorted+reflection.webp",
    aspect_ratio: "3:2",
  },
  {
    name: "Dog-Walking",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Dog+walking.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "Framed",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Framed.webp",
    aspect_ratio: "559:640",
  },
  {
    name: "High-Contrast",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/High+Contrast.webp",
    aspect_ratio: "5:4",
  },
  {
    name: "Juxtaposed-Cigarette",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Juxtaposed+Cigarette.webp",
    aspect_ratio: "5:4",
  },
  {
    name: "Juxtaposed-Pigeon",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Juxtaposed+Pigeon.webp",
    aspect_ratio: "1229:1920",
  },
  {
    name: "Leading-Line-Person-2",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Leading+lines+person+2.webp",
    aspect_ratio: "5:4",
  },
  {
    name: "Leading-Line-Person",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Leading+lines+to+person.webp",
    aspect_ratio: "4:5",
  },
  {
    name: "Lego-Car",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Lego+Car.webp",
    aspect_ratio: "1920:1171",
  },
  {
    name: "Mountain-And-Jetty",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Mountain+and+Jetty.webp",
    aspect_ratio: "1920:1133",
  },
  {
    name: "Negative-Space",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Negative+space.webp",
    aspect_ratio: "960:623",
  },
  {
    name: "People-And-Jetty",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/People+and+Jetty.webp",
    aspect_ratio: "3:2",
  },
  {
    name: "Pigeon-2",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Pigeon+2.webp",
    aspect_ratio: "3:2",
  },
  {
    name: "Pigeon-Composed-2",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Pigeon+Composed+2.webp",
    aspect_ratio: "640:453",
  },
  {
    name: "Pigeon-Composed-3",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Pigeon+Composed+3.webp",
    aspect_ratio: "3:4",
  },
  {
    name: "Pigeon-Composed",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Pigeon+Composed.webp",
    aspect_ratio: "157:240",
  },
  {
    name: "Pigeon-Feeding",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Pigeon+Feeding.webp",
    aspect_ratio: "640:547",
  },
  {
    name: "Pigeon-On-Flight",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Pigeon+on+Flight.webp",
    aspect_ratio: "3:2",
  },
  {
    name: "Pigeons-On-Lamp",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Pigeon+on+a+lamp.webp",
    aspect_ratio: "5:4",
  },
  {
    name: "Pigeons-Flying",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Pigeons+Flying.webp",
    aspect_ratio: "1429:1920",
  },
  {
    name: "Sea-Gull",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Sea+gull.webp",
    aspect_ratio: "5:4",
  },
  {
    name: "Sea-Gull-Flight",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Seagull+-+Flight.webp",
    aspect_ratio: "233:320",
  },
  {
    name: "Cycle-In-Snow",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Snow+on+a+Cycle.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "Street-10",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Street+10.webp",
    aspect_ratio: "4:5",
  },
  {
    name: "Street-13",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Street+13.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "Street-7",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Street+7.webp",
    aspect_ratio: "1920:1283",
  },
  {
    name: "Streetlight-Snow",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Streetlight+snow.webp",
    aspect_ratio: "320:157",
  },
  {
    name: "Symmetry",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Symmetery.webp",
    aspect_ratio: "5:8",
  },
  {
    name: "Symmetry-2",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Symmetry+2.webp",
    aspect_ratio: "463:640",
  },
  {
    name: "Transmission-Tower",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black+and+white/Transmission+Tower.webp",
    aspect_ratio: "3:2",
  },
  {
    name: "Beach-2",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Beach+2.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "Beach-Sunset",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Beach+Sunset.webp",
    aspect_ratio: "319:480",
  },
  {
    name: "Beach-Dustbin",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Beach+and+Dustbin.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "Beach",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Beach.webp",
    aspect_ratio: "1920:1409",
  },
  {
    name: "Beachside",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Beachside.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "Boat",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Boat+2.webp",
    aspect_ratio: "101:128",
  },
  {
    name: "Boat-Sunset",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Boat+sunset.webp",
    aspect_ratio: "8:5",
  },
  {
    name: "Boat",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Boat.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "Boats-Birds-Sea",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Boats%2C+birds%2C+sea.webp",
    aspect_ratio: "",
  },
  {
    name: "Buildings-2",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Buildings+2.webp",
    aspect_ratio: "191:240",
  },
  {
    name: "Buildings-3",
    category: CATEGORIES.travel,
    image_url:
      "https://f005.backblazeb2.com/file/daily-tog-photo-bucket/travel/Buildings+3.webp",
    aspect_ratio: "63:64",
  },
  {
    name: "Buoy",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Buoy.webp",
    aspect_ratio: "383:480",
  },
  {
    name: "Cat-Basking",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Cat+Basking.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "Cat",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Cat.webp",
    aspect_ratio: "3:2",
  },
  {
    name: "Coolers",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Coolers.webp",
    aspect_ratio: "1920:737",
  },
  {
    name: "Cycle-2",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Cycle+2.webp",
    aspect_ratio: "223:320",
  },
  {
    name: "Cycle",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Cycle.webp",
    aspect_ratio: "3:2",
  },
  {
    name: "Buildings-5",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Declining+Buildings.webp",
    aspect_ratio: "3:4",
  },
  {
    name: "Jetty",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Jetty.webp",
    aspect_ratio: "3:2",
  },
  {
    name: "Light-House",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Light+house.webp",
    aspect_ratio: "109:160",
  },
  {
    name: "Mountain-Jetty",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Mountain+and+Jetty.webp",
    aspect_ratio: "1920:1133",
  },
  {
    name: "Mountain-Buildings",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Moutains+and+Buildings.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "Paraglider",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Paraglider.webp",
    aspect_ratio: "3:2",
  },
  {
    name: "Pasta-Making",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Pasta+making.webp",
    aspect_ratio: "3:2",
  },
  {
    name: "People-Jetty",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/People+and+Jetty.webp",
    aspect_ratio: "3:2",
  },
  {
    name: "RedBoat-BlueSea",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Red+boat+on+a+blue+sea.webp",
    aspect_ratio: "384:217",
  },
  {
    name: "Rock-On-Beach",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Rock+on+a+beach.webp",
    aspect_ratio: "233:384",
  },
  {
    name: "Seagull-Flight",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Seagull+-+Flight.webp",
    aspect_ratio: "233:320",
  },
  {
    name: "Summer-Vibes-5",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Summer+Vibes+5.webp",
    aspect_ratio: "40:39",
  },
  {
    name: "Summer-Vibes-4",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Summer+vibes+4.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "Sunset-2",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Sunset+2.webp",
    aspect_ratio: "960:509",
  },
  {
    name: "Angry-Cat-1",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Angry+Cat+1.webp",
    aspect_ratio: "337:480",
  },
  {
    name: "Angry-Cat-2",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Angry+Cat+2.webp",
    aspect_ratio: "1643:1920",
  },
  {
    name: "Bee-Lavender-2",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Bee+and+Lavender+2.webp",
    aspect_ratio: "4:5",
  },
  {
    name: "Bee-Lavender-3",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Bee+and+Lavender+3.webp",
    aspect_ratio: "4:5",
  },
  {
    name: "Bee-Lavender-4",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Bee+and+Lavender+4.webp",
    aspect_ratio: "4:5",
  },
  {
    name: "Bee-Lavender-5",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Bee+and+Lavender+5.webp",
    aspect_ratio: "16:9",
  },
  {
    name: "Bee-Lavender",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Bee+and+Lavender.webp",
    aspect_ratio: "4:5",
  },
  {
    name: "Bird-Moon",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Bird+and+the+moon.webp",
    aspect_ratio: "427:640",
  },
  {
    name: "Dog",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Black+and+white+Dog.webp",
    aspect_ratio: "4:5",
  },
  {
    name: "Cat-Basking",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Cat+Basking.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "Cat-Looking",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Cat+Looking.webp",
    aspect_ratio: "640:419",
  },
  {
    name: "Cat-Fence",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Cat+between+fence.webp",
    aspect_ratio: "273:320",
  },
  {
    name: "Cat-Pathway",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Cat+sitting+on+a+pathway.webp",
    aspect_ratio: "1139:1920",
  },
  {
    name: "Cat-Talks",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Cat+talks.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "Cat",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Cat.webp",
    aspect_ratio: "3:2",
  },
  {
    name: "Cherry-Blossom-2",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Cherry+Blossom+2.webp",
    aspect_ratio: "4:3",
  },
  {
    name: "Cherry-Blossom",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Cherry+Blossom.webp",
    aspect_ratio: "371:480",
  },
  {
    name: "Common-Holly",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Common+Holly.webp",
    aspect_ratio: "5:4",
  },
  {
    name: "Dog-Walking",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Dog+walking.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "Garden-Spider-2",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Garden+Spider+2.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "Garden-Spider-3",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Garden+Spider+3.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "Garden-Spider",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Garden+Spider.webp",
    aspect_ratio: "3:2",
  },
  {
    name: "Garden-Roses",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Garden+roses.webp",
    aspect_ratio: "1920:1261",
  },
  {
    name: "Great-Masterwort",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Great+Masterwort.webp",
    aspect_ratio: "16:9",
  },
  {
    name: "Himalayan-Blackberry",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Himalayan+Blackberry.webp",
    aspect_ratio: "877:960",
  },
  {
    name: "Horses",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Horses.webp",
    aspect_ratio: "5:4",
  },
  {
    name: "Hydrangea",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Hydrangea.webp",
    aspect_ratio: "4:5",
  },
  {
    name: "Japanese-Rowan",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Japanese+Rowan.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "Juxtaposed-Pigeon",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Juxtaposed+Pigeon.webp",
    aspect_ratio: "1229:1920",
  },
  {
    name: "Lady-Bug",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Lady+Bug.webp",
    aspect_ratio: "5:4",
  },
  {
    name: "Magpie-On-Flight",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Magpie+on+Flight.webp",
    aspect_ratio: "3:2",
  },
  {
    name: "Milk-Thistle",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Milk+Thistle.webp",
    aspect_ratio: "3:2",
  },
  {
    name: "Negative-Space",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Negative+space.webp",
    aspect_ratio: "960:623",
  },
  {
    name: "Orange-Cat",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Orange+Cat.webp",
    aspect_ratio: "177:320",
  },
  {
    name: "Pigeon-Composed-3",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Pigeon+Composed+3.webp",
    aspect_ratio: "3:4",
  },
  {
    name: "Pigeon-Landing",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Pigeon+Landing.webp",
    aspect_ratio: "3:2",
  },
  {
    name: "Pigeon-Looking-at",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Pigeon+Looking+at.webp",
    aspect_ratio: "2:3",
  },
  {
    name: "Pigeon-Stepped",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Pigeon+Stepped.webp",
    aspect_ratio: "429:640",
  },
  {
    name: "Pigeons-Flying",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Pigeons+Flying.webp",
    aspect_ratio: "1429:1920",
  },
  {
    name: "Seagull-Flight",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Seagull+-+Flight.webp",
    aspect_ratio: "233:320",
  },
  {
    name: "Street-12",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Street+12.webp",
    aspect_ratio: "5:8",
  },
  {
    name: "Summer-Vibes-1",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Summer+Vibes+1.webp",
    aspect_ratio: "3:2",
  },
  {
    name: "Sunset-street",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora+and+fauna/Sunset+street.webp",
    aspect_ratio: "353:480",
  },
];
