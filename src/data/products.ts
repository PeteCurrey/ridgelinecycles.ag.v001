export type Product = {
  id: string;
  name: string;
  brand: string;
  category: "Road" | "Mountain" | "Gravel" | "E-Bike" | "Kids" | "Accessories" | "Clothing" | "Parts";
  price: number;
  salePrice?: number;
  description: string;
  image: string;
  stock: number;
  colors: string[];
  sizes: string[];
  specs: Record<string, string>;
  isFeatured?: boolean;
};

export const products: Product[] = [
  {
    id: "trek-domane-al-4",
    name: "Domane AL 4 Gen 4",
    brand: "Trek",
    category: "Road",
    price: 1700,
    description: "The Domane AL 4 is a fast and versatile road bike that's a perfect starting point for anyone looking to get into road riding. With an Alpha Aluminum frame, clearance for larger tires, and a 10-speed Shimano Tiagra drivetrain, it's perfect for long rides and commuting.",
    image: "/products/trek-domane.jpg",
    stock: 5,
    colors: ["Era White", "Blue Sage", "Trek Black"],
    sizes: ["44", "49", "52", "54", "56", "58", "61"],
    specs: {
      "Frame": "100 Series Alpha Aluminum",
      "Fork": "Domane AL carbon",
      "Groupset": "Shimano Tiagra 4700",
      "Brakes": "Shimano Tiagra hydraulic disc",
      "Wheels": "Bontrager Paradigm SL",
      "Tyres": "Bontrager R1 Hard-Case Lite",
      "Weight": "10.35 kg"
    },
    isFeatured: true
  },
  {
    id: "specialized-diverge-e5",
    name: "Diverge E5 Elite",
    brand: "Specialized",
    category: "Gravel",
    price: 1900,
    salePrice: 1650,
    description: "Whether your goal is to escape on gravel back roads, far from cars and crowds, or drop the hammer at the front of your favorite gravel race, no bike does it better than the new Diverge.",
    image: "/products/specialized-diverge.jpg",
    stock: 2,
    colors: ["Gloss Blaze", "Satin Cast Blue", "Satin Smoke"],
    sizes: ["49", "52", "54", "56", "58", "61"],
    specs: {
      "Frame": "Specialized Diverge E5 Premium Aluminum",
      "Fork": "FACT carbon",
      "Groupset": "Shimano GRX RX400",
      "Brakes": "Shimano GRX 400 hydraulic disc",
      "Wheels": "Axis Elite Disc",
      "Tyres": "Specialized Pathfinder Sport",
      "Weight": "10.1 kg"
    },
    isFeatured: true
  },
  {
    id: "cannondale-topstone-2",
    name: "Topstone 2",
    brand: "Cannondale",
    category: "Gravel",
    price: 1800,
    description: "An amazingly capable, versatile gravel road bike. Built for chasing horizons, exploring routes less traveled or accelerating your commute.",
    image: "/products/cannondale-topstone.jpg",
    stock: 8,
    colors: ["Midnight", "Olive Green"],
    sizes: ["XS", "S", "M", "L", "XL"],
    specs: {
      "Frame": "SmartForm C2 Alloy",
      "Fork": "Full Carbon",
      "Groupset": "Shimano GRX 400",
      "Brakes": "Shimano GRX 400 hydraulic disc",
      "Wheels": "RD 2.0",
      "Tyres": "WTB Riddler Comp",
      "Weight": "10.5 kg"
    }
  },
  {
    id: "giant-tcr-advanced-1",
    name: "TCR Advanced 1 Disc",
    brand: "Giant",
    category: "Road",
    price: 2799,
    description: "The ultimate all-rounder. Light, stiff and ultra-efficient, this composite road bike delivers a smooth, fast ride quality on all types of roads.",
    image: "/products/giant-tcr.jpg",
    stock: 3,
    colors: ["Amber Glow", "Cold Iron"],
    sizes: ["S", "M", "ML", "L", "XL"],
    specs: {
      "Frame": "Advanced-Grade Composite",
      "Fork": "Advanced-Grade Composite",
      "Groupset": "Shimano 105 Di2",
      "Brakes": "Shimano 105 hydraulic disc",
      "Wheels": "Giant P-R2 Disc",
      "Tyres": "Giant Gavia Course 1",
      "Weight": "8.3 kg"
    },
    isFeatured: true
  },
  {
    id: "whyte-429-v2",
    name: "429 V2 Hardtail",
    brand: "Whyte",
    category: "Mountain",
    price: 1150,
    description: "Award-winning geometry and a 120mm travel fork make the 429 one of the most capable trail hardtails ever produced.",
    image: "/products/whyte-429.jpg",
    stock: 12,
    colors: ["Matt Moss", "Matt Black"],
    sizes: ["S", "M", "L", "XL"],
    specs: {
      "Frame": "6061 Alloy, Hydro Formed",
      "Fork": "RockShox Recon Silver RL",
      "Groupset": "Shimano Deore M5100",
      "Brakes": "Tektro HD-M275",
      "Wheels": "Whyte Trail 25",
      "Tyres": "Maxxis Forekaster",
      "Weight": "13.8 kg"
    }
  },
  {
    id: "orbea-rise-h30",
    name: "Rise H30",
    brand: "Orbea",
    category: "E-Bike",
    price: 4999,
    salePrice: 4200,
    description: "A machine designed to expand your trail experience and bring you closer to the moment. Rise is the e-bike for people who want to feel like they're on a mountain bike.",
    image: "/products/orbea-rise.jpg",
    stock: 1,
    colors: ["Baobab Brown", "Ice Green", "Shark Grey"],
    sizes: ["S", "M", "L", "XL"],
    specs: {
      "Frame": "Orbea Rise Hydro 140mm travel",
      "Fork": "Marzocchi Bomber Z2",
      "Groupset": "Shimano Deore M6100",
      "Brakes": "Shimano MT410",
      "Wheels": "Race Face AR 30c",
      "Tyres": "Maxxis Dissector",
      "Weight": "19.5 kg"
    },
    isFeatured: true
  },
  {
    id: "trek-wahoo-24",
    name: "Wahoo 24",
    brand: "Trek",
    category: "Kids",
    price: 475,
    description: "A lightweight, simple and practical kids' bike that makes it easy for your little one to make the most of every ride.",
    image: "/products/trek-wahoo.jpg",
    stock: 10,
    colors: ["Quicksilver", "Sky Blue", "Viper Red"],
    sizes: ["One Size"],
    specs: {
      "Frame": "Alpha Silver Aluminum",
      "Fork": "Aluminum",
      "Groupset": "Shimano Altus 8-speed",
      "Brakes": "Alloy linear-pull",
      "Wheels": "24\" Alloy",
      "Tyres": "24x1.95\"",
      "Weight": "9.24 kg"
    }
  },
  {
    id: "specialized-tarmac-sl8",
    name: "Tarmac SL8 Expert",
    brand: "Specialized",
    category: "Road",
    price: 6000,
    description: "Nothing is faster than the Tarmac SL8. It's the most aerodynamic road bike we've ever made, while remaining lightweight and delivering incredible ride quality.",
    image: "/products/specialized-tarmac.jpg",
    stock: 2,
    colors: ["Satin Powder Indigo", "Gloss Red"],
    sizes: ["44", "49", "52", "54", "56", "58", "61"],
    specs: {
      "Frame": "Tarmac SL8 FACT 10r Carbon",
      "Fork": "FACT 10r Carbon",
      "Groupset": "SRAM Rival eTap AXS",
      "Brakes": "SRAM Rival hydraulic disc",
      "Wheels": "Roval C38",
      "Tyres": "S-Works Turbo",
      "Weight": "7.7 kg"
    }
  },
  {
    id: "cannondale-habit-4",
    name: "Habit 4",
    brand: "Cannondale",
    category: "Mountain",
    price: 2100,
    description: "A trail bike that's ready to shred. Flowy singletrack, chunky technical trails, and everything in between.",
    image: "/products/cannondale-habit.jpg",
    stock: 4,
    colors: ["Black Pearl", "Slate Grey"],
    sizes: ["S", "M", "L", "XL"],
    specs: {
      "Frame": "SmartForm C1 Alloy, 130mm travel",
      "Fork": "RockShox Recon RL",
      "Groupset": "Shimano Deore M6100",
      "Brakes": "Shimano MT200 hydraulic disc",
      "Wheels": "WTB STX i23",
      "Tyres": "Maxxis Minion DHF",
      "Weight": "14.5 kg"
    }
  },
  {
    id: "giant-reign-e-1",
    name: "Reign E+ 1",
    brand: "Giant",
    category: "E-Bike",
    price: 5999,
    description: "Every trail, every steep climb, every thrilling descent. This full-suspension e-MTB gives you the power to enjoy the best parts of the ride again and again.",
    image: "/products/giant-reign-e.jpg",
    stock: 2,
    colors: ["Black/Amber"],
    sizes: ["S", "M", "L", "XL"],
    specs: {
      "Frame": "ALUXX SL-grade Aluminum, 160mm travel",
      "Fork": "Fox 38 Float Performance Elite",
      "Groupset": "Shimano Deore XT",
      "Brakes": "Shimano Deore XT",
      "Wheels": "Giant AM 29/27.5",
      "Tyres": "Maxxis Minion DHF",
      "Weight": "24.8 kg"
    }
  },
  {
    id: "trek-fuel-exe-9-5",
    name: "Fuel EXe 9.5",
    brand: "Trek",
    category: "E-Bike",
    price: 5200,
    description: "Fuel EXe 9.5 is a new breed of e-mountain bike that bridges the divide between power-assisted and traditional bikes.",
    image: "/products/trek-fuel-exe.jpg",
    stock: 3,
    colors: ["Matte Dnister Black"],
    sizes: ["S", "M", "L", "XL"],
    specs: {
      "Frame": "OCLV Mountain Carbon",
      "Fork": "RockShox 35 Gold RL",
      "Groupset": "Shimano Deore M6100",
      "Brakes": "Shimano hydraulic disc",
      "Wheels": "Alex MD35",
      "Tyres": "Bontrager XR5 Team Issue",
      "Weight": "19.93 kg"
    }
  },
  {
    id: "specialized-stumpjumper-comp",
    name: "Stumpjumper Comp",
    brand: "Specialized",
    category: "Mountain",
    price: 3500,
    description: "Unrivaled suspension kinematics, sublime handling, and perfect chassis stiffness—the Stumpjumper Comp is our definitive carbon trail bike.",
    image: "/products/specialized-stumpjumper.jpg",
    stock: 5,
    colors: ["Satin Gunmetal", "Gloss Sage"],
    sizes: ["S1", "S2", "S3", "S4", "S5", "S6"],
    specs: {
      "Frame": "FACT 11m carbon chassis",
      "Fork": "Fox Float 34 Rhythm",
      "Groupset": "Shimano SLX M7100",
      "Brakes": "Shimano SLX M7120",
      "Wheels": "Specialized 29",
      "Tyres": "Butcher, GRID casing",
      "Weight": "13.6 kg"
    }
  },
  {
    id: "orbea-terra-m30",
    name: "Terra M30 Team",
    brand: "Orbea",
    category: "Gravel",
    price: 3200,
    description: "Gravel is a diverse world. Terra is designed to be capable on all of it—from fast asphalt to rough trails.",
    image: "/products/orbea-terra.jpg",
    stock: 3,
    colors: ["Infinity Green", "Night Black"],
    sizes: ["XS", "S", "M", "L", "XL"],
    specs: {
      "Frame": "Orbea Terra Carbon OMR",
      "Fork": "Terra OMR carbon",
      "Groupset": "Shimano GRX RX810",
      "Brakes": "Shimano RX400",
      "Wheels": "Orbea Ready GR",
      "Tyres": "Vittoria Terreno Dry",
      "Weight": "9.2 kg"
    }
  },
  {
    id: "whyte-glencoe",
    name: "Glencoe",
    brand: "Whyte",
    category: "Gravel",
    price: 1550,
    description: "The Glencoe is the most versatile bike we've ever made. Road, gravel, trail—it handles it all with confidence.",
    image: "/products/whyte-glencoe.jpg",
    stock: 6,
    colors: ["Matt Granite"],
    sizes: ["50", "52", "54", "56", "58"],
    specs: {
      "Frame": "6061 Alloy, Hydro Formed",
      "Fork": "Whyte Straight Bladed Alloy",
      "Groupset": "SRAM Apex 1",
      "Brakes": "TRP Hy/Rd",
      "Wheels": "WTB ST i25",
      "Tyres": "WTB Horizon",
      "Weight": "11.1 kg"
    }
  },
  {
    id: "cannondale-synapse-2",
    name: "Synapse Carbon 2 LE",
    brand: "Cannondale",
    category: "Road",
    price: 3800,
    description: "Road riding redefined. Smooth, fast and confident. Wherever the road takes you, go with Synapse.",
    image: "/products/cannondale-synapse.jpg",
    stock: 2,
    colors: ["Quicksilver"],
    sizes: ["48", "51", "54", "56", "58", "61"],
    specs: {
      "Frame": "Synapse Carbon",
      "Fork": "Synapse Carbon",
      "Groupset": "Shimano 105 Di2",
      "Brakes": "Shimano 105 hydraulic disc",
      "Wheels": "Fulcrum Rapid Red 900",
      "Tyres": "Vittoria Zaffiro Pro",
      "Weight": "8.8 kg"
    }
  }
];
