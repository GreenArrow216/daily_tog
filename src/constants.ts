export enum CATEGORIES {
  bw = "black&white",
  street = "street",
  travel = "travel",
  animals = "animals",
  none = "none",
}

export type ImagesData = {
  name: string;
  category: CATEGORIES;
  image_url: string;
  aspectRatio?: string;
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
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Buildings+3.webp",
  },
  {
    name: "Travel",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Boat+sunset.webp",
  },
  {
    name: "Flora & Fauna",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Bee+and+Lavender+2.webp",
  },
];

export const imagesData: ImagesData[] = [
  {
    name: "AM-V8-Vantage-Head",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/AM+V8+Vantage+-+Head.webp",
    aspectRatio: "381:640",
  },
  {
    name: "AM-V8-Vantage-Logo",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/AM+V8+Vantage+-+Logo.webp",
    aspectRatio: "960:593",
  },
  {
    name: "AM-V8-Vantage-Side",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/AM+V8+Vantage+-+Side.webp",
    aspectRatio: "3:2",
  },
  {
    name: "AM-V8-Vantage-Ultrawide",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/AM+V8+Vantage+-+Ultrawide.webp",
    aspectRatio: "2:3",
  },
  {
    name: "AM-V8-Vantage-Zoomed",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/AM+V8+Vantage+-+Zoomed.webp",
    aspectRatio: "640:437",
  },
  {
    name: "Austin-Mini-Cooper",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Austin+Mini+Cooper.webp",
    aspectRatio: "2:3",
  },
  {
    name: "Sunset-And-Building",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Building+in+a+Sunset.webp",
    aspectRatio: "3:4",
  },
  {
    name: "Buildings-4",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Buildings+4.webp",
    aspectRatio: "480:337",
  },
  {
    name: "Cardinal-Flower",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Cardinal+Flower.webp",
    aspectRatio: "2:3",
  },
  {
    name: "Cottage",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Cottage.webp",
    aspectRatio: "3:2",
  },
  {
    name: "Framed",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Framed.webp",
    aspectRatio: "559:640",
  },
  {
    name: "Green",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Green.webp",
    aspectRatio: "8:5",
  },
  {
    name: "High-Contrast",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/High+Contrast.webp",
    aspectRatio: "5:4",
  },
  {
    name: "Juxtaposed-dustbin",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Justposed+dusbin.webp",
    aspectRatio: "1421:1920",
  },
  {
    name: "Juxtaposed-Cigarette",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Juxtaposed+Cigarette.webp",
    aspectRatio: "5:4",
  },
  {
    name: "Lambo",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Lambo.webp",
    aspectRatio: "3:4",
  },
  {
    name: "Leading-Line-Football",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Leading+line+to+football.webp",
    aspectRatio: "2:3",
  },
  {
    name: "Leading-Line-Couples",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Leading+line+to+the+couples.webp",
    aspectRatio: "3:2",
  },
  {
    name: "Leading-Line-Person-2",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Leading+lines+person+2.webp",
    aspectRatio: "5:4",
  },
  {
    name: "Leading-Line-Person",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Leading+lines+to+person.webp",
    aspectRatio: "4:5",
  },
  {
    name: "MG-Midget-Back",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/MG+Midget+-+Back.webp",
    aspectRatio: "1920:1409",
  },
  {
    name: "MG-Midget-Tail",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/MG+Midget+-+Tail.webp",
    aspectRatio: "2:3",
  },
  {
    name: "MG-Midget-Wide",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/MG+Midget+-+Wide.webp",
    aspectRatio: "1920:1301",
  },
  {
    name: "MG-Midget",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/MG+Midget.webp",
    aspectRatio: "2:3",
  },
  {
    name: "Pigeon-Stepped",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Pigeon+Stepped.webp",
    aspectRatio: "429:640",
  },
  {
    name: "Plane",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Plane.webp",
    aspectRatio: "5:4",
  },
  {
    name: "Pub",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Pub.webp",
    aspectRatio: "1721:1920",
  },
  {
    name: "Red-Rose-2",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Red+rose+2.webp",
    aspectRatio: "427:640",
  },
  {
    name: "Shoe-Hanging-From-Tree",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Shoe+Hanging+from+a+tree.webp",
    aspectRatio: "683:960",
  },
  {
    name: "Smoke-Box",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Smoke+box.webp",
    aspectRatio: "5:4",
  },
  {
    name: "Cycle-In-Snow",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Snow+on+a+Cycle.webp",
    aspectRatio: "2:3",
  },
  {
    name: "Street-1",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+1.webp",
    aspectRatio: "640:317",
  },
  {
    name: "Street-10",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+10.webp",
    aspectRatio: "4:5",
  },
  {
    name: "Street-11",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+11.webp",
    aspectRatio: "3:4",
  },
  {
    name: "Street-12",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+12.webp",
    aspectRatio: "5:8",
  },
  {
    name: "Street-3",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+3.webp",
    aspectRatio: "3:2",
  },
  {
    name: "Street-4",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+4.webp",
    aspectRatio: "39:64",
  },
  {
    name: "Street-5",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+5.webp",
    aspectRatio: "97:128",
  },
  {
    name: "Street-6",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+6.webp",
    aspectRatio: "3:2",
  },
  {
    name: "Street-7",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+7.webp",
    aspectRatio: "1920:1283",
  },
  {
    name: "Street-8",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+8.webp",
    aspectRatio: "4:5",
  },
  {
    name: "Street-9",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+9.webp",
    aspectRatio: "5:4",
  },
  {
    name: "Summer-Vibes-1",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Summer+Vibes+1.webp",
    aspectRatio: "3:2",
  },
  {
    name: "Summer-Vibes-2",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Summer+Vibes+2.webp",
    aspectRatio: "640:397",
  },
  {
    name: "Summer-Vibes-3",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Summer+Vibes+3.webp",
    aspectRatio: "5:4",
  },
  {
    name: "Summer-Vibes-4",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Summer+Vibes-+Football+and+the+grass.webp",
    aspectRatio: "2:3",
  },
  {
    name: "Sunset-Street-2",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Sunset+street+2.webp",
    aspectRatio: "2:3",
  },
  {
    name: "Two-Pigeons-On-A-Lamp",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Two+Pigeons+on+a+lamp.webp",
    aspectRatio: "4:5",
  },
  {
    name: "Warehouse",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Warehouse.webp",
    aspectRatio: "3:4",
  },
  {
    name: "Windows",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Windows.webp",
    aspectRatio: "1920:1817",
  },
  {
    name: "Yellow-Jacket",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Yellow+Jacket.webp",
    aspectRatio: "261:320",
  },
  {
    name: "Abstract-Shadows",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Abstract+B%26W.webp",
    aspectRatio: "",
  },
  {
    name: "Looks-Like-Person",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/B%26W+-+looking+like+a+person.webp",
    aspectRatio: "",
  },
  {
    name: "Ballerina",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Ballerina.webp",
    aspectRatio: "3:5",
  },
  {
    name: "Bird-And-The-Moon",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Bird+and+the+moon.webp",
    aspectRatio: "427:640",
  },
  {
    name: "Bird-In-The-Sky",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Bird+in+the+sky+2.webp",
    aspectRatio: "5:4",
  },
  {
    name: "Dog",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Black+and+white+Dog.webp",
    aspectRatio: "4:5",
  },
  {
    name: "Buildings-3",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Buildings+3.webp",
    aspectRatio: "63:64",
  },
  {
    name: "Buildings-4",
    category: CATEGORIES.bw,
    image_url:
      "https://f005.backblazeb2.com/file/daily-tog-photo-bucket/black-and-white/Buildings+4.webp",
    aspectRatio: "480:337",
  },
  {
    name: "Common-Holly",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Common+Holly.webp",
    aspectRatio: "5:4",
  },
  {
    name: "Distorted-Reflection",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Distorted+reflection.webp",
    aspectRatio: "3:2",
  },
  {
    name: "Dog-Walking",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Dog+walking.webp",
    aspectRatio: "2:3",
  },
  {
    name: "Framed",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Framed.webp",
    aspectRatio: "559:640",
  },
  {
    name: "High-Contrast",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/High+Contrast.webp",
    aspectRatio: "5:4",
  },
  {
    name: "Juxtaposed-Cigarette",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Juxtaposed+Cigarette.webp",
    aspectRatio: "5:4",
  },
  {
    name: "Juxtaposed-Pigeon",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Juxtaposed+Pigeon.webp",
    aspectRatio: "1229:1920",
  },
  {
    name: "Leading-Line-Couples",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Leading+line+to+the+couples.webp",
    aspectRatio: "3:2",
  },
  {
    name: "Leading-Line-Person-2",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Leading+lines+person+2.webp",
    aspectRatio: "5:4",
  },
  {
    name: "Leading-Line-Person",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Leading+lines+to+person.webp",
    aspectRatio: "4:5",
  },
  {
    name: "Lego-Car",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Lego+Car.webp",
    aspectRatio: "1920:1171",
  },
  {
    name: "Mountain-And-Jetty",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Mountain+and+Jetty.webp",
    aspectRatio: "1920:1133",
  },
  {
    name: "Negative-Space",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Negative+space.webp",
    aspectRatio: "960:623",
  },
  {
    name: "People-And-Jetty",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/People+and+Jetty.webp",
    aspectRatio: "3:2",
  },
  {
    name: "Pigeon-2",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Pigeon+2.webp",
    aspectRatio: "3:2",
  },
  {
    name: "Pigeon-Composed-2",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Pigeon+Composed+2.webp",
    aspectRatio: "640:453",
  },
  {
    name: "Pigeon-Composed-3",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Pigeon+Composed+3.webp",
    aspectRatio: "3:4",
  },
  {
    name: "Pigeon-Composed",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Pigeon+Composed.webp",
    aspectRatio: "157:240",
  },
  {
    name: "Pigeon-Feeding",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Pigeon+Feeding.webp",
    aspectRatio: "640:547",
  },
  {
    name: "Pigeon-On-Flight",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Pigeon+on+Flight.webp",
    aspectRatio: "3:2",
  },
  {
    name: "Pigeons-On-Lamp",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Pigeon+on+a+lamp.webp",
    aspectRatio: "5:4",
  },
  {
    name: "Pigeons-Flying",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Pigeons+Flying.webp",
    aspectRatio: "1429:1920",
  },
  {
    name: "Sea-Gull",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Sea+gull.webp",
    aspectRatio: "5:4",
  },
  {
    name: "Sea-Gull-Flight",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Seagull+-+Flight.webp",
    aspectRatio: "233:320",
  },
  {
    name: "Cycle-In-Snow",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Snow+on+a+Cycle.webp",
    aspectRatio: "2:3",
  },
  {
    name: "Street-10",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Street+10.webp",
    aspectRatio: "4:5",
  },
  {
    name: "Street-13",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Street+13.webp",
    aspectRatio: "2:3",
  },
  {
    name: "Street-7",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Street+7.webp",
    aspectRatio: "1920:1283",
  },
  {
    name: "Streetlight-Snow",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Streetlight+snow.webp",
    aspectRatio: "320:157",
  },
  {
    name: "Symmetry",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Symmetery.webp",
    aspectRatio: "5:8",
  },
  {
    name: "Symmetry-2",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Symmetry+2.webp",
    aspectRatio: "463:640",
  },
  {
    name: "Transmission-Tower",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Transmission+Tower.webp",
    aspectRatio: "3:2",
  },
  {
    name: "Trees-Buildings",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Trees+and+Buildings.webp",
    aspectRatio: "5:4",
  },
  {
    name: "Beach-2",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Beach+2.webp",
    aspectRatio: "2:3",
  },
  {
    name: "Beach-Sunset",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Beach+Sunset.webp",
    aspectRatio: "319:480",
  },
  {
    name: "Beach-Dustbin",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Beach+and+Dustbin.webp",
    aspectRatio: "2:3",
  },
  {
    name: "Beach",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Beach.webp",
    aspectRatio: "1920:1409",
  },
  {
    name: "Beachside",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Beachside.webp",
    aspectRatio: "2:3",
  },
  {
    name: "Boat",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Boat+2.webp",
    aspectRatio: "101:128",
  },
  {
    name: "Boat-Sunset",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Boat+sunset.webp",
    aspectRatio: "8:5",
  },
  {
    name: "Boat",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Boat.webp",
    aspectRatio: "2:3",
  },
  {
    name: "Boats-Birds-Sea",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Boats%2C+birds%2C+sea.webp",
    aspectRatio: "",
  },
  {
    name: "Buildings-2",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Buildings+2.webp",
    aspectRatio: "191:240",
  },
  {
    name: "Buildings-3",
    category: CATEGORIES.travel,
    image_url:
      "https://f005.backblazeb2.com/file/daily-tog-photo-bucket/travel/Buildings+3.webp",
    aspectRatio: "63:64",
  },
  {
    name: "Buoy",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Buoy.webp",
    aspectRatio: "383:480",
  },
  {
    name: "Cat-Basking",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Cat+Basking.webp",
    aspectRatio: "2:3",
  },
  {
    name: "Cat",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Cat.webp",
    aspectRatio: "3:2",
  },
  {
    name: "Coolers",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Coolers.webp",
    aspectRatio: "1920:737",
  },
  {
    name: "Cycle-2",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Cycle+2.webp",
    aspectRatio: "223:320",
  },
  {
    name: "Cycle",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Cycle.webp",
    aspectRatio: "3:2",
  },
  {
    name: "Buildings-5",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Declining+Buildings.webp",
    aspectRatio: "3:4",
  },
  {
    name: "Jetty",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Jetty.webp",
    aspectRatio: "3:2",
  },
  {
    name: "Light-House",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Light+house.webp",
    aspectRatio: "109:160",
  },
  {
    name: "Mountain-Jetty",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Mountain+and+Jetty.webp",
    aspectRatio: "1920:1133",
  },
  {
    name: "Mountain-Buildings",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Moutains+and+Buildings.webp",
    aspectRatio: "2:3",
  },
  {
    name: "Paraglider",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Paraglider.webp",
    aspectRatio: "3:2",
  },
  {
    name: "Pasta-Making",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Pasta+making.webp",
    aspectRatio: "3:2",
  },
  {
    name: "People-Jetty",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/People+and+Jetty.webp",
    aspectRatio: "3:2",
  },
  {
    name: "RedBoat-BlueSea",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Red+boat+on+a+blue+sea.webp",
    aspectRatio: "384:217",
  },
  {
    name: "Rock-On-Beach",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Rock+on+a+beach.webp",
    aspectRatio: "233:384",
  },
  {
    name: "Seagull-Flight",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Seagull+-+Flight.webp",
    aspectRatio: "233:320",
  },
  {
    name: "Summer-Vibes-5",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Summer+Vibes+5.webp",
    aspectRatio: "40:39",
  },
  {
    name: "Summer-Vibes-4",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Summer+vibes+4.webp",
    aspectRatio: "2:3",
  },
  {
    name: "Sunset-2",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Sunset+2.webp",
    aspectRatio: "960:509",
  },
  {
    name: "Angry-Cat-1",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Angry+Cat+1.webp",
    aspectRatio: "337:480",
  },
  {
    name: "Angry-Cat-2",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Angry+Cat+2.webp",
    aspectRatio: "1643:1920",
  },
  {
    name: "Bee-Lavender-2",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Bee+and+Lavender+2.webp",
    aspectRatio: "4:5",
  },
  {
    name: "Bee-Lavender-3",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Bee+and+Lavender+3.webp",
    aspectRatio: "4:5",
  },
  {
    name: "Bee-Lavender-4",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Bee+and+Lavender+4.webp",
    aspectRatio: "4:5",
  },
  {
    name: "Bee-Lavender-5",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Bee+and+Lavender+5.webp",
    aspectRatio: "16:9",
  },
  {
    name: "Bee-Lavender",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Bee+and+Lavender.webp",
    aspectRatio: "4:5",
  },
  {
    name: "Bird-Moon",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Bird+and+the+moon.webp",
    aspectRatio: "427:640",
  },
  {
    name: "Dog",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Black+and+white+Dog.webp",
    aspectRatio: "4:5",
  },
  {
    name: "Cat-Basking",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Cat+Basking.webp",
    aspectRatio: "2:3",
  },
  {
    name: "Cat-Looking",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Cat+Looking.webp",
    aspectRatio: "640:419",
  },
  {
    name: "Cat-Fence",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Cat+between+fence.webp",
    aspectRatio: "273:320",
  },
  {
    name: "Cat-Pathway",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Cat+sitting+on+a+pathway.webp",
    aspectRatio: "1139:1920",
  },
  {
    name: "Cat-Talks",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Cat+talks.webp",
    aspectRatio: "2:3",
  },
  {
    name: "Cat",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Cat.webp",
    aspectRatio: "3:2",
  },
  {
    name: "Cherry-Blossom-2",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Cherry+Blossom+2.webp",
    aspectRatio: "4:3",
  },
  {
    name: "Cherry-Blossom",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Cherry+Blossom.webp",
    aspectRatio: "371:480",
  },
  {
    name: "Common-Holly",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Common+Holly.webp",
    aspectRatio: "5:4",
  },
  {
    name: "Dog-Walking",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Dog+walking.webp",
    aspectRatio: "2:3",
  },
  {
    name: "Garden-Spider-2",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Garden+Spider+2.webp",
    aspectRatio: "2:3",
  },
  {
    name: "Garden-Spider-3",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Garden+Spider+3.webp",
    aspectRatio: "2:3",
  },
  {
    name: "Garden-Spider",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Garden+Spider.webp",
    aspectRatio: "3:2",
  },
  {
    name: "Garden-Roses",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Garden+roses.webp",
    aspectRatio: "1920:1261",
  },
  {
    name: "Great-Masterwort",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Great+Masterwort.webp",
    aspectRatio: "16:9",
  },
  {
    name: "Himalayan-Blackberry",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Himalayan+Blackberry.webp",
    aspectRatio: "877:960",
  },
  {
    name: "Horses",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Horses.webp",
    aspectRatio: "5:4",
  },
  {
    name: "Hydrangea",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Hydrangea.webp",
    aspectRatio: "4:5",
  },
  {
    name: "Japanese-Rowan",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Japanese+Rowan.webp",
    aspectRatio: "2:3",
  },
  {
    name: "Juxtaposed-Pigeon",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Juxtaposed+Pigeon.webp",
    aspectRatio: "1229:1920",
  },
  {
    name: "Lady-Bug",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Lady+Bug.webp",
    aspectRatio: "5:4",
  },
  {
    name: "Magpie-On-Flight",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Magpie+on+Flight.webp",
    aspectRatio: "3:2",
  },
  {
    name: "Milk-Thistle",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Milk+Thistle.webp",
    aspectRatio: "3:2",
  },
  {
    name: "Negative-Space",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Negative+space.webp",
    aspectRatio: "960:623",
  },
  {
    name: "Orange-Cat",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Orange+Cat.webp",
    aspectRatio: "177:320",
  },
  {
    name: "Pigeon-Composed-3",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Pigeon+Composed+3.webp",
    aspectRatio: "3:4",
  },
  {
    name: "Pigeon-Landing",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Pigeon+Landing.webp",
    aspectRatio: "3:2",
  },
  {
    name: "Pigeon-Looking-at",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Pigeon+Looking+at.webp",
    aspectRatio: "2:3",
  },
  {
    name: "Pigeon-Stepped",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Pigeon+Stepped.webp",
    aspectRatio: "429:640",
  },
  {
    name: "Pigeons-Flying",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Pigeons+Flying.webp",
    aspectRatio: "1429:1920",
  },
  {
    name: "Seagull-Flight",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Seagull+-+Flight.webp",
    aspectRatio: "233:320",
  },
  {
    name: "Street-12",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Street+12.webp",
    aspectRatio: "5:8",
  },
  {
    name: "Summer-Vibes-1",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Summer+Vibes+1.webp",
    aspectRatio: "3:2",
  },
  {
    name: "Sunset-street",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Sunset+street.webp",
    aspectRatio: "353:480",
  },
];
