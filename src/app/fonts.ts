import localFont from "next/font/local";

export const gilroy = localFont({
  src: [
    {
      path: "../../public/fonts/gilroy/Gilroy-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/gilroy/Gilroy-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});
