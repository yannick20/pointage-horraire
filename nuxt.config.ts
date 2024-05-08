// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app:{
    head:{
      title: "Pointage-Horraire",
      titleTemplate: "Pointage-Horraire",
      charset: "utf-8",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { "http-equiv": "content-type", charset: "utf-8" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        { name: "author", content: "Potter" },
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "theme-color", content: "#ffffff" },
      ],
      script: [
        { hid: "flowbite", src: "/flowbite.min.js", defer: true },
      ],
      
    }
  },

  modules: [
    '@nuxtjs/tailwindcss'
],

runtimeConfig:{
  // Keys within public are also exposed client-side
  //http://62.72.16.150 http://localhost:4000
  public: {
    api: 'http://localhost:3000'
  }
},
})
