import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  // const defaultUrl = "http://localhost:4000";

  // let api = axios.create({
  //   baseUrl: defaultUrl,
  //   headers: {
  //     common: {},
  //   },
  // });
//  nuxtApp.vueApp.use(axios);
return {
    provide: {
      axios: axios,
    },
  };
});