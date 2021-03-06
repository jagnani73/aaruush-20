module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundImage: () => ({
        contactUsBG: "url('./assets/ContactUs/bg.png')",
        aboutUsBG: "url('./assets/AboutUs/bg.svg')",
        aboutUsAccBG: "url('./assets/AboutUs/accredationsBg.svg')",
      }),
      boxShadow: {
        contactUs: "0 0 30px 0 rgba(0, 0, 0, 0.75)",
      },
      colors: {
        facebook: "#385899",
        twitter: "#1da1f2",
        instagram: "#CE0177",
        linkedin: "#0274B3",
        youtube: "#F70000",
        contactUs: "#0C0C0C",
        team: "#333333",
        teamCard: "#FFD7BF",
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover", "first"],
    translate: ["responsive", "hover", "group-hover", "first"],
  },
  plugins: [],
};
