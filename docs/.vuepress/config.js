module.exports = {
  theme:"antdocs",
  title: "Swire-Docs",
  description: "A Documention for Swire project.",
  base: "/swiredoc/",
  head: [
    ["link",{ rel: "icon",href: "/assets/logo.png" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/joehecn/swiredoc",
    editLinks: false,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@docs': 'public/docs'
      }
    }
  }
};