export enum CATEGORIES {
  bw = "black&white",
  street = "street",
  travel = "travel",
  animals = "animals",
  none="none"
}

export type ImagesData = {
  name: string;
  category: CATEGORIES;
  image_url: string;
  description?: string;
  tags?: string[];
};

export const categoryImages: ImagesData[] = [
  {
    name: "Gowthaman Ganesan",
    description: "I'm a photographer cum w",
    image_url: "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/Gowthaman+Ganesan.jpg",
    category: CATEGORIES.none
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
  },
  {
    name: "AM-V8-Vantage-Logo",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/AM+V8+Vantage+-+Logo.webp",
  },
  {
    name: "AM-V8-Vantage-Side",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/AM+V8+Vantage+-+Side.webp",
  },
  {
    name: "AM-V8-Vantage-Ultrawide",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/AM+V8+Vantage+-+Ultrawide.webp",
  },
  {
    name: "AM-V8-Vantage-Zoomed",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/AM+V8+Vantage+-+Zoomed.webp",
  },
  {
    name: "Austin-Mini-Cooper",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Austin+Mini+Cooper.webp",
  },
  {
    name: "Sunset-And-Building",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Building+in+a+Sunset.webp",
  },
  {
    name: "Buildings-4",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Buildings+4.webp",
  },
  {
    name: "Cardinal-Flower",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Cardinal+Flower.webp",
  },
  {
    name: "Cottage",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Cottage.webp",
  },
  {
    name: "Framed",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Framed.webp",
  },
  {
    name: "Green",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Green.webp",
  },
  {
    name: "High-Contrast",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/High+Contrast.webp",
  },
  {
    name: "Juxtaposed-dustbin",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Justposed+dusbin.webp",
  },
  {
    name: "Juxtaposed-Cigarette",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Juxtaposed+Cigarette.webp",
  },
  {
    name: "Lambo",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Lambo.webp",
  },
  {
    name: "Leading-Line-Football",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Leading+line+to+football.webp",
  },
  {
    name: "Leading-Line-Couples",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Leading+line+to+the+couples.webp",
  },
  {
    name: "Leading-Line-Person-2",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Leading+lines+person+2.webp",
  },
  {
    name: "Leading-Line-Person",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Leading+lines+to+person.webp",
  },
  {
    name: "MG-Midget-Back",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/MG+Midget+-+Back.webp",
  },
  {
    name: "MG-Midget-Tail",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/MG+Midget+-+Tail.webp",
  },
  {
    name: "MG-Midget-Wide",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/MG+Midget+-+Wide.webp",
  },
  {
    name: "MG-Midget",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/MG+Midget.webp",
  },
  {
    name: "Pigeon-Stepped",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Pigeon+Stepped.webp",
  },
  {
    name: "Plane",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Plane.webp",
  },
  {
    name: "Pub",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Pub.webp",
  },
  {
    name: "Red-Rose-2",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Red+rose+2.webp",
  },
  {
    name: "Shoe-Hanging-From-Tree",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Shoe+Hanging+from+a+tree.webp",
  },
  {
    name: "Smoke-Box",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Smoke+box.webp",
  },
  {
    name: "Cycle-In-Snow",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Snow+on+a+Cycle.webp",
  },
  {
    name: "Street-1",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+1.webp",
  },
  {
    name: "Street-10",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+10.webp",
  },
  {
    name: "Street-11",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+11.webp",
  },
  {
    name: "Street-12",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+12.webp",
  },
  {
    name: "Street-3",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+3.webp",
  },
  {
    name: "Street-4",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+4.webp",
  },
  {
    name: "Street-5",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+5.webp",
  },
  {
    name: "Street-6",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+6.webp",
  },
  {
    name: "Street-7",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+7.webp",
  },
  {
    name: "Street-8",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+8.webp",
  },
  {
    name: "Street-9",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Street+9.webp",
  },
  {
    name: "Summer-Vibes-1",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Summer+Vibes+1.webp",
  },
  {
    name: "Summer-Vibes-2",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Summer+Vibes+2.webp",
  },
  {
    name: "Summer-Vibes-3",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Summer+Vibes+3.webp",
  },
  {
    name: "Summer-Vibes-4",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Summer+Vibes-+Football+and+the+grass.webp",
  },
  {
    name: "Sunset-Street-2",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Sunset+street+2.webp",
  },
  {
    name: "Two-Pigeons-On-A-Lamp",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Two+Pigeons+on+a+lamp.webp",
  },
  {
    name: "Warehouse",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Warehouse.webp",
  },
  {
    name: "Windows",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Windows.webp",
  },
  {
    name: "Yellow-Jacket",
    category: CATEGORIES.street,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Yellow+Jacket.webp",
  },
  {
    name: "Abstract-Shadows",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Abstract+B%26W.webp",
  },
  {
    name: "Looks-Like-Person",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/B%26W+-+looking+like+a+person.webp",
  },
  {
    name: "Ballerina",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Ballerina.webp",
  },
  {
    name: "Bird-And-The-Moon",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Bird+and+the+moon.webp",
  },
  {
    name: "Bird-In-The-Sky",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Bird+in+the+sky+2.webp",
  },
  {
    name: "Dog",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Black+and+white+Dog.webp",
  },
  {
    name: "Buildings-3",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Buildings+3.webp",
  },
  {
    name: "Buildings-4",
    category: CATEGORIES.bw,
    image_url:
      "https://f005.backblazeb2.com/file/daily-tog-photo-bucket/black-and-white/Buildings+4.webp",
  },
  {
    name: "Common-Holly",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Common+Holly.webp",
  },
  {
    name: "Distorted-Reflection",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Distorted+reflection.webp",
  },
  {
    name: "Dog-Walking",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Dog+walking.webp",
  },
  {
    name: "Framed",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Framed.webp",
  },
  {
    name: "High-Contrast",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/High+Contrast.webp",
  },
  {
    name: "Juxtaposed-Cigarette",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Juxtaposed+Cigarette.webp",
  },
  {
    name: "Juxtaposed-Pigeon",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Juxtaposed+Pigeon.webp",
  },
  {
    name: "Leading-Line-Couples",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Leading+line+to+the+couples.webp",
  },
  {
    name: "Leading-Line-Person-2",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Leading+lines+person+2.webp",
  },
  {
    name: "Leading-Line-Person",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/street/Leading+lines+to+person.webp",
  },
  {
    name: "Lego-Car",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Lego+Car.webp",
  },
  {
    name: "Mountain-And-Jetty",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Mountain+and+Jetty.webp",
  },
  {
    name: "Negative-Space",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Negative+space.webp",
  },
  {
    name: "People-And-Jetty",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/People+and+Jetty.webp",
  },
  {
    name: "Pigeon-2",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Pigeon+2.webp",
  },
  {
    name: "Pigeon-Composed-2",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Pigeon+Composed+2.webp",
  },
  {
    name: "Pigeon-Composed-3",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Pigeon+Composed+3.webp",
  },
  {
    name: "Pigeon-Composed",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Pigeon+Composed.webp",
  },
  {
    name: "Pigeon-Feeding",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Pigeon+Feeding.webp",
  },
  {
    name: "Pigeon-On-Flight",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Pigeon+on+Flight.webp",
  },
  {
    name: "Pigeons-On-Lamp",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Pigeon+on+a+lamp.webp",
  },
  {
    name: "Pigeons-Flying",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Pigeons+Flying.webp",
  },
  {
    name: "Sea-Gull",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Sea+gull.webp",
  },
  {
    name: "Sea-Gull-Flight",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Seagull+-+Flight.webp",
  },
  {
    name: "Cycle-In-Snow",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Snow+on+a+Cycle.webp",
  },
  {
    name: "Street-10",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Street+10.webp",
  },
  {
    name: "Street-13",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Street+13.webp",
  },
  {
    name: "Street-7",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Street+7.webp",
  },
  {
    name: "Streetlight-Snow",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Streetlight+snow.webp",
  },
  {
    name: "Symmetry",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Symmetery.webp",
  },
  {
    name: "Symmetry-2",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Symmetry+2.webp",
  },
  {
    name: "Transmission-Tower",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Transmission+Tower.webp",
  },
  {
    name: "Trees-Buildings",
    category: CATEGORIES.bw,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/black-and-white/Trees+and+Buildings.webp",
  },
  {
    name: "Beach-2",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Beach+2.webp",
  },
  {
    name: "Beach-Sunset",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Beach+Sunset.webp",
  },
  {
    name: "Beach-Dustbin",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Beach+and+Dustbin.webp",
  },
  {
    name: "Beach",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Beach.webp",
  },
  {
    name: "Beachside",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Beachside.webp",
  },
  {
    name: "Boat",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Boat+2.webp",
  },
  {
    name: "Boat-Sunset",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Boat+sunset.webp",
  },
  {
    name: "Boat",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Boat.webp",
  },
  {
    name: "Boats-Birds-Sea",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Boats%2C+birds%2C+sea.webp",
  },
  {
    name: "Buildings-2",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Buildings+2.webp",
  },
  {
    name: "Buildings-3",
    category: CATEGORIES.travel,
    image_url:
      "https://f005.backblazeb2.com/file/daily-tog-photo-bucket/travel/Buildings+3.webp",
  },
  {
    name: "Buoy",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Buoy.webp",
  },
  {
    name: "Cat-Basking",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Cat+Basking.webp",
  },
  {
    name: "Cat",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Cat.webp",
  },
  {
    name: "Coolers",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Coolers.webp",
  },
  {
    name: "Cycle-2",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Cycle+2.webp",
  },
  {
    name: "Cycle",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Cycle.webp",
  },
  {
    name: "Buildings-5",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Declining+Buildings.webp",
  },
  {
    name: "Jetty",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Jetty.webp",
  },
  {
    name: "Light-House",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Light+house.webp",
  },
  {
    name: "Mountain-Jetty",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Mountain+and+Jetty.webp",
  },
  {
    name: "Mountain-Buildings",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Moutains+and+Buildings.webp",
  },
  {
    name: "Paraglider",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Paraglider.webp",
  },
  {
    name: "Pasta-Making",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Pasta+making.webp",
  },
  {
    name: "People-Jetty",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/People+and+Jetty.webp",
  },
  {
    name: "RedBoat-BlueSea",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Red+boat+on+a+blue+sea.webp",
  },
  {
    name: "Rock-On-Beach",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Rock+on+a+beach.webp",
  },
  {
    name: "Seagull-Flight",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Seagull+-+Flight.webp",
  },
  {
    name: "Summer-Vibes-5",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Summer+Vibes+5.webp",
  },
  {
    name: "Summer-Vibes-4",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Summer+vibes+4.webp",
  },
  {
    name: "Sunset-2",
    category: CATEGORIES.travel,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/travel/Sunset+2.webp",
  },
  {
    name: "Angry-Cat-1",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Angry+Cat+1.webp",
  },
  {
    name: "Angry-Cat-2",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Angry+Cat+2.webp",
  },
  {
    name: "Bee-Lavender-2",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Bee+and+Lavender+2.webp",
  },
  {
    name: "Bee-Lavender-3",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Bee+and+Lavender+3.webp",
  },
  {
    name: "Bee-Lavender-4",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Bee+and+Lavender+4.webp",
  },
  {
    name: "Bee-Lavender-5",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Bee+and+Lavender+5.webp",
  },
  {
    name: "Bee-Lavender",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Bee+and+Lavender.webp",
  },
  {
    name: "Bird-Moon",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Bird+and+the+moon.webp",
  },
  {
    name: "Dog",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Black+and+white+Dog.webp",
  },
  {
    name: "Cat-Basking",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Cat+Basking.webp",
  },
  {
    name: "Cat-Looking",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Cat+Looking.webp",
  },
  {
    name: "Cat-Fence",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Cat+between+fence.webp",
  },
  {
    name: "Cat-Pathway",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Cat+sitting+on+a+pathway.webp",
  },
  {
    name: "Cat-Talks",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Cat+talks.webp",
  },
  {
    name: "Cat",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Cat.webp",
  },
  {
    name: "Cherry-Blossom-2",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Cherry+Blossom+2.webp",
  },
  {
    name: "Cherry-Blossom",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Cherry+Blossom.webp",
  },
  {
    name: "Common-Holly",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Common+Holly.webp",
  },
  {
    name: "Dog-Walking",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Dog+walking.webp",
  },
  {
    name: "Garden-Spider-2",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Garden+Spider+2.webp",
  },
  {
    name: "Garden-Spider-3",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Garden+Spider+3.webp",
  },
  {
    name: "Garden-Spider",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Garden+Spider.webp",
  },
  {
    name: "Garden-Roses",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Garden+roses.webp",
  },
  {
    name: "Great-Masterwort",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Great+Masterwort.webp",
  },
  {
    name: "Himalayan-Blackberry",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Himalayan+Blackberry.webp",
  },
  {
    name: "Horses",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Horses.webp",
  },
  {
    name: "Hydrangea",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Hydrangea.webp",
  },
  {
    name: "Japanese-Rowan",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Japanese+Rowan.webp",
  },
  {
    name: "Juxtaposed-Pigeon",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Juxtaposed+Pigeon.webp",
  },
  {
    name: "Lady-Bug",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Lady+Bug.webp",
  },
  {
    name: "Magpie-On-Flight",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Magpie+on+Flight.webp",
  },
  {
    name: "Milk-Thistle",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Milk+Thistle.webp",
  },
  {
    name: "Negative-Space",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Negative+space.webp",
  },
  {
    name: "Orange-Cat",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Orange+Cat.webp",
  },
  {
    name: "Pigeon-Composed-3",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Pigeon+Composed+3.webp",
  },
  {
    name: "Pigeon-Landing",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Pigeon+Landing.webp",
  },
  {
    name: "Pigeon-Looking-at",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Pigeon+Looking+at.webp",
  },
  {
    name: "Pigeon-Stepped",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Pigeon+Stepped.webp",
  },
  {
    name: "Pigeons-Flying",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Pigeons+Flying.webp",
  },
  {
    name: "Seagull-Flight",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Seagull+-+Flight.webp",
  },
  {
    name: "Street-12",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Street+12.webp",
  },
  {
    name: "Summer-Vibes-1",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Summer+Vibes+1.webp",
  },
  {
    name: "Sunset-street",
    category: CATEGORIES.animals,
    image_url:
      "https://daily-tog-photo-bucket.s3.us-east-005.backblazeb2.com/flora-and-fauna/Sunset+street.webp",
  },
];
