<template>
  <div>
    <NuxtLayout name="default">
      <section class="bg-white dark:bg-gray-900">
        <div
          class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
        >
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img style="height: 120px" src="/logocean.png" alt="logo" />
          </a>
          <div
            class="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
          >
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1
                class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
              >
                Espace de connexion
              </h1>
              <form class="space-y-4 md:space-y-6" @submit.prevent="onSubmit">
                <div>
                  <label
                    for="text"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Numero de Telephone</label
                  >
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="ex: 0612345678"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Mot de passe</label
                  >
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
const { $toast, $axios } = useNuxtApp();
// const nuxtApp = useNuxtApp()
const router = useRouter();

const phone = ref("");
const password = ref("");
const btnName = ref("Se connecter");

const isloader = ref(false);

const onSubmit = async () => {
  $toast.success("Connexion reussie");
  router.replace("/admin");
  // try {
  //     isloader.value = true;
  //     const { data } = await $axios.post('/auth/login', {
  //         phone: phone.value,
  //         password: password.value
  //     })
  //     if (data) {
  //         $toast.success(data.message);
  //         router.push({ path: '/' })
  //     }
  // } catch (error) {
  //     $toast.error(error.response.data.message);
  // }
  // isloader.value = false;
};

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
