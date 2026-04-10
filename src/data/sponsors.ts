export interface Sponsor {
  image: string;
  name: string;
  link: string;
  caption?: string;
  tier?: string;
}

export const sponsors: Sponsor[] = [
  {
    image: "/images/sponsors/snowmonkeysake.png",
    name: "Snow Monkey Sake",
    link: "https://www.snowmonkeysake.com.au/",
    tier: "Platinum",
    caption: "Monetary + product sponsorship",
  },
  {
    image: "/images/sponsors/itoen.png",
    name: "Ito En",
    link: "https://itoen.com.au/",
    tier: "Platinum",
    caption: "Product sponsorship",
  },
  {
    image: "/images/sponsors/japaneasy.png",
    name: "Japaneasy",
    link: "https://japaneasy.com.au/",
    tier: "Gold",
    caption: "Monetary sponsorship",
  },
  {
    image: "/images/sponsors/kori.png",
    name: "Kori Ice Cream",
    link: "https://www.kori-icecream.com.au/",
    tier: "Silver",
    caption: "2 for 1 vouchers (O-Week)",
  },
  {
    image: "/images/sponsors/hareruya.png",
    name: "Hareruya Pantry",
    link: "https://hareruya.com.au/",
    tier: "Silver",
    caption: "Buy one get one free vouchers",
  },
  {
    image: "/images/sponsors/sulbing.png",
    name: "Sulbing",
    link: "https://sulbingcafe.com.au/",
    tier: "Silver",
    caption: "20% off total bill (min $20 spent)",
  },
  {
    image: "/images/sponsors/omi.png",
    name: "Omi",
    link: "https://www.omiwagyu.com.au/",
    tier: "Silver",
  },
  {
    image: "/images/sponsors/rysfly.png",
    name: "Rysfly",
    link: "https://rysfly.com/",
    tier: "Bronze",
    caption: "20% discount on e-SIM",
  },
  {
    image: "/images/sponsors/kbox.png",
    name: "KBox Karaoke",
    link: "https://kbox.com.au/",
    tier: "Bronze",
    caption: "5% discount",
  },
  {
    image: "/images/sponsors/izumi.png",
    name: "Izumi",
    link: "https://www.izumimassage.com.au/",
    caption: "10% discount for all members",
  },
  {
    image: "/images/sponsors/qqchickypot.png",
    name: "QQ Chicken",
    link: "https://www.instagram.com/qqchickypot/",
    tier: "O-Week",
    caption: "300 vouchers (O-Week only)",
  },
  {
    image: "/images/sponsors/chahaus.png",
    name: "CHA HAUS",
    link: "https://chahaus.com/",
    caption: "Pending",
  },
  {
    image: "/images/sponsors/madeinjapan.png",
    name: "Made In Japan",
    link: "https://mij.com.au/",
    caption: "Pending",
  },
];
