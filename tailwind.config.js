/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    fontSize: {
      textH1: ["60px"],
      textH2: ["50px"],
      textH3: ["40px"],
      textH4: ["32px"],
      textH5: ["28px"],
      textH6: ["24px"],
      base: ["16px"],
      textsm: ["14px"],
      textxs: ["12px"],
      textxxs: [
        "10px",
        {
          fontWeight: "500",
        },
      ],

      textxxxs: ["8px"],
    },
    extend: {
      colors: {
        usafPrimary: "#004B9D",
        usafPrimary2: " #99B7D8",
        usafPrimary3: "#6693C4",
        usafPrimary4: "#336FB1",
        usafPrimary6: "#003C7E",
        usafPrimary7: " #002D5E",
        usafPrimary8: " #001E3F",
        usafSecondary: "#EB6223",
        usafSecondary2: "#5E270E",
        usafSecondary3: " #F3A17B",
        usafSecondary4: " #BC4E1C",
        usafSecondary5: " #8D3B15",
        usafSecondary6: "#5E270E",
        usafGreen: "#009D49",
        usafGreen2: " #007E3A",
        usafGreen3: " #005E2C",
        usafGreen4: "#33B16D",
        usafBlack: " #000000",
        usafBlack2: " #333333",
        usafBlack3: "#666666",
        usafBlack4: "#CCCCCC",
        usafWhite: " #FFFFFF",
        usafWhiteBg: "#F5F5F5",
        gray: "#707070",
        grayTwo: "#999999",
        grayText: "#666666",
        lightGray: "#BABABA",
        lightBlue: "#0085DC",
        usafDarkAsh: "#474747",
        usafLightYellow: "#F8CE1C",
        usafNavy: "#28354D",
        usafNavy2: "#2A2E43",
        usafNavy3: "#010334",
        usafNavy4: "#F6F9FA",
        usafNavy5: "#00235B",
        usafNavy6: "#010334",
        usafWhite: "#FFFFFF",
        usafGray: "#2A2E43CC",
        usafGray2: "#2A2E4399",
        usafGray3: "#F7F7F7",
        usafGray4: "#D5D5D5",
        usafGray5: "#2A2E43B3",
        usafGray6: "#F5F6F7",
        usafGray7: "#E4E4E4",
        usafGray8: "#EFEFEF",
        usafWhite: "#FFFFFF",
        usafGray: "#2A2E43CC",
        usafGray2: "#2A2E4399",
        usafGray3: "#F7F7F7",
        usafGray4: "#D5D5D5",
        usafGray5: "#2A2E43B3",
        usafGray6: "#F5F6F7",
        usafGray7: "#E4E4E4",
        usafPurple: "#800080",
        usafGold: " #FFD700",
        usafEmerald: "#50C878",
        usafyellow: "#F8CE1C",
        usafyellow2: "#00C853",
        usafRed: "#FF0000",
        usafRed2: "#FF1515",
        usafTomato: "#F7F7F7",
        usafTomato2: "#FFE8E9",
        usafHeroBg: "#FFFAFA",

        primary: {
          DEFAULT: " #002d5e",
          100: "#0560b9",
        },
        secondary: {
          DEFAULT: "#EB6223",
          100: "#EB6223",
        },
        green: {
          DEFAULT: "#07AA3D",
          100: "#C7E8D2",
        },
        gray: {
          DEFAULT: "#48484A",
          100: "#D1D1D6",
          200: "#8E8E93",
        },
        pine: "#005C39",
        blue: "#0096DB",
        citrus: "#F26D21",
        background: "#F7F7F7",
      },
      fontFamily: {
        LatoBold: "LatoBold",
        LatoRegular: "LatoRegular",
        MontserratBold: " MontserratBold",
        MontserratItalicVariableFont_wght: "MontserratItalicVariableFont_wght",
        MontserratSemiBold: "MontserratSemiBold",
        MontserratVariableFont_wght: "MontserratVariableFont_wght",
        SpectralBold: "SpectralBold",
        SpectralRegular: "SpectralRegular",
        SpectralSemiBold: "SpectralSemiBold",
        GilroyLightItalic: "GilroyLightItalic",
        GilroyMedium: "GilroyMedium",
        GilroyMediumItalic: "GilroyMediumItalic",
        GilroyRegular: "GilroyRegular",
        GilroyRegularItalic: "GilroyRegularItalic",
        GilroySemiBold: "GilroySemiBold",
        GilroyUltraLight: "GilroyUltraLight",
        GilroyUltraLightItalic: "GilroyUltraLightItalic",
      },
    },
  },
  plugins: [],
};
