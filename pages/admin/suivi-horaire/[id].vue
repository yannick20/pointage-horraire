<template>
    <div>
      <NuxtLayout name="admin">
        <nav
          class="flex border-b border-gray-200 bg-white mb-4"
          aria-label="Breadcrumb"
        >
          <ol
            role="list"
            class="mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8"
          >
            <li class="flex">
              <div class="flex items-center">
                <NuxtLink
                  to="/admin/suivi-horaire"
                  class="text-gray-400 hover:text-gray-500"
                >
                  <svg
                    class="h-5 w-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Accueil</span>
                </NuxtLink>
              </div>
            </li>
            <li class="flex">
              <div class="flex items-center">
                <svg
                  class="h-full w-6 flex-shrink-0 text-gray-200"
                  viewBox="0 0 24 44"
                  preserveAspectRatio="none"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                </svg>
                <NuxtLink
                  to="/admin/suivi-horaire"
                  class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >Suivi d'horaire de l'agence > {{ $route.params.id }}</NuxtLink
                >
              </div>
            </li>
          </ol>
        </nav>
  
        <section class="bg-gray-50 dark:bg-gray-900">
          <div class="mx-auto">
            <!-- Start coding here -->
            <div
              class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden"
            >
              <div
                class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4"
              >
                <div class="w-full md:w-1/2">
                  <!-- <form class="flex items-center">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                      <div
                        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                      >
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="simple-search"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Search"
                        required=""
                      />
                    </div>
                  </form> -->
                </div>
                <div
                  class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"
                >
                  <button
                    type="button"
                    v-show="!isCheckBtn"
                    @click="onOpenModal"
                    class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                  >
                    Ajouter une fiche de pointage
                  </button>
                </div>
              </div>
              <div class="overflow-x-auto">
                <table
                  class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                >
                  <thead
                    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                  >
                    <tr>
                      <th scope="col" class="px-4 py-3">Nom & Prenom</th>
                      <th scope="col" class="px-4 py-3">Fonction</th>
                      <th scope="col" class="px-4 py-3">Heure d'Arrive</th>
                      <th scope="col" class="px-4 py-3">Heure de Depart</th>
                      <th scope="col" class="px-4 py-3">CUMULE POINT</th>
                      <th scope="col" class="px-4 py-3">Observation</th>
                      <th scope="col" class="px-4 py-3">Date</th>
                      <!-- <th scope="col" class="px-4 py-3">Status</th> -->
                      <!-- <th scope="col" class="px-4 py-3">
                        <span class="sr-only">Actions</span>
                      </th> -->
                    </tr>
                  </thead>
                  <tfoot>
                    <tr v-if="tbPointages.length === 0 && isloadingPointages == false">
                      <td colspan="7" class="py-4 text-center">
                        Aucune donnée n'a été trouvé
                      </td>
                    </tr>
                    <tr v-if="isloadingPointages">
                      <td colspan="7" class="py-4 text-center">
                        Chargement des données...
                      </td>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr
                      class="border-b dark:border-gray-700"
                      v-for="(item, index) in tbPointages"
                      :key="index"
                    >
                      <th
                        scope="row"
                        class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {{ item.users.nom }} {{ item.users.prenom }}
                      </th>
                      <td class="px-4 py-3">
                        {{ item.users.fonction }}
                    </td>
                    <td class="px-4 py-3">
                        {{ item.pointages.heureArrive }}
                    </td>
                    <td class="px-4 py-3">
                        {{ item.pointages.heureDepart }}
                    </td>
                    <td class="px-4 py-3">
                        <div
                          class="inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0"
                        >
                          <svg
                            class="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span class="sr-only"> Increased by </span>
                          {{ item.pointages.pointSuccess }}
                        </div>
                        <div
                          class="ml-2 inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium bg-red-100 text-red-800 md:mt-2 lg:mt-0"
                        >
                          <svg
                            class="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span class="sr-only"> Decreased by </span>
                          {{ item.pointages.pointDanger }}
                        </div>
                    </td>
                    <td class="px-4 py-3">
                      <div
                      v-show="item.pointages.observation"
                          :class="item.pointages.observation == 'Agent Nul' ? 'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium bg-red-100 text-red-800 md:mt-2 lg:mt-0' : item.pointages.observation == 'Agent Moyen' ? 'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium bg-yellow-100 text-yellow-800 md:mt-2 lg:mt-0' : 'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0'"
                        >
                          
                        {{ item.pointages.observation }}
                        </div>
                        
                        <a href="#" v-show="!item.pointages.observation" @click="onOpenUpdateModal(item)" class="text-sm text-gray-500">Ajouter une observation</a>

                    </td>
                    <td class="px-4 py-3">
                        {{ item.pointages.dateComplet }}
                    </td>
                     
                    </tr>
                  </tbody>
                </table>
              </div>
              <nav
                class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
                aria-label="Table navigation"
              >
                <span
                  class="text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                  Totals des Pointages:
                  <span class="font-semibold text-gray-900 dark:text-white">{{
                    tbPointages.length
                  }}</span>
                </span>
              </nav>
            </div>
          </div>
        </section>
      </NuxtLayout>
  
      <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="onCloseModal" class="relative z-10">
            <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
            >
            <div class="fixed inset-0 bg-black/25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
            <div
                class="flex min-h-full items-center justify-center p-4 text-center"
            >
                <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
                >
                <DialogPanel
                    class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                >
                    <DialogTitle
                    as="h3"
                    class="text-lg font-medium leading-6 text-gray-900"
                    >
                    Nouvelle fiche
                    </DialogTitle>
                    <hr class="my-4" />
                    <div class="mt-2 text-center">
                    <p class="text-md text-gray-500">
                        Voulez-vous vraiment generer la fiche de pointage ?
                    </p>
                    <!-- <b>{{ libelledateComplet }}</b> -->
                    </div>

                    <div class="mt-4 text-center">
                    <button
                        :hidden="isloadingAdd"
                        type="button"
                        class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        @click="onCloseModal"
                    >
                        Non
                    </button>
                    <button
                        :disabled="isloadingAdd"
                        type="button"
                        class="ml-2 inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        @click="onSubmit"
                    >
                        {{ btnAjouter }}
                    </button>
                    </div>
                </DialogPanel>
                </TransitionChild>
            </div>
            </div>
        </Dialog>
    </TransitionRoot>

    <TransitionRoot appear :show="isObsOpen" as="template">
      <Dialog as="div" @close="onCloseObsModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  Ajouter un Suivi d'horaire
                </DialogTitle>
                <hr class="my-4" />
                <div class="mt-4">
                  <form @submit.prevent="onSubmitUpdated">
                    <div>
                      <label
                        for="recompense1"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Observation</label
                      >
                      <select v-model="libelleObs" requiredid="agence" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option selected value="">Selectionne un type</option>
                          <option value="Agent Nul">Agent Nul</option>
                          <option value="Agent Moyen">Agent Moyen</option>
                          <option value="Agent Excellent">Agent Excellent</option>
                        </select>
                    </div>
                   
                    <div class="mt-5 text-center">
                      <button
                        :disabled="isloadingAdd"
                        @click="onCloseObsModal"
                        type="button"
                        class="mr-2 inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      >
                        Non
                      </button>
                      <button
                        :disabled="isloadingAdd"
                        type="submit"
                        class="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      >
                        {{ btnAjouter }}
                      </button>
                    </div>
                  </form>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from "vue";
  import { initFlowbite } from "flowbite";
  
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  } from "@headlessui/vue";
  
  const { $toast, $axios } = useNuxtApp();
  // const nuxtApp = useNuxtApp()
  const router = useRouter();
  
  const tbAgents = ref([]);
  const isloadingAgents = ref(false);

  const tbPointages: any = ref([]);
  const isloadingPointages = ref(false);
  
  const isOpen = ref(false);
  const isObsOpen = ref(false);

  const isCheckBtn = ref(false);


  const libelleObs = ref("");
  
  const nom = ref("");
  const prenom = ref("");
  const phone = ref("");
  const fonction = ref("");
  const quartier = ref("");
  const role = ref("");
  const password = ref("");
  const btnAjouter = ref("Oui");

  const idpointagesUpdate = ref("");
const idUser = ref("");

  const isloadingDelete = ref(false);
  const isloadingAdd = ref(false);
  const isloadingUpdated = ref(false);

  const btnUpdated = ref("Modifier");
  
  const onOpenModal = async () => {
    isOpen.value = true;
  };
  
  const onCloseModal = async () => {
    isOpen.value = false;
  };

  const onOpenObsModal = async () => {
    isObsOpen.value = true;
  };
  
  const onCloseObsModal = async () => {
    isObsOpen.value = false;
  };

  const onOpenUpdateModal = async (item: any) => {
    if (isCheckBtn.value == false) {
      console.log(item.pointages)
      idUser.value = item.pointages.userId;
      idpointagesUpdate.value = item.pointages.id;
      onOpenObsModal();
    } else {
      $toast.error("Impossible d'ajouter une observation car ce pointage est deja cloture");
    }
  
  
};
  
  const onSubmit = async () => {
    isloadingAdd.value = true;
    btnAjouter.value = "enregistrement en cours...";
    const agencesid = localStorage.getItem("idAgencesReportings");
    const idreportings = localStorage.getItem("idReportings");
    await $axios
      .post("/api/pointages", {
        agencesId: agencesid,
        reportingsId: idreportings,
      })
      .finally(() => {
        isloadingAdd.value = false;
      })
      .then(({ data }) => {
        btnAjouter.value = "Oui";
        onCloseModal();
        $toast.success(data.message);
        onGetPointages();
      })
      .catch((error) => {
        onCloseModal();
        btnAjouter.value = "Oui";
        $toast.error(error.response.data.message);
      });
  };

  const onSubmitUpdated = async () => {
  isloadingUpdated.value = true;
  btnUpdated.value = "modification en cours...";

  //const idreportings = localStorage.getItem("idReportings");

  await $axios
    .put("/api/pointages/pointageobservation", {
      keyObservation: libelleObs.value,
      keyiduser: idUser.value,
      keyid: idpointagesUpdate.value,
    })
    .finally(() => {
      isloadingUpdated.value = false;
    })
    .then(({ data }) => {
      btnUpdated.value = "Modifier";
      onGetPointages();
      onCloseObsModal();
      $toast.success(data.message);
      

      libelleObs.value = "";
    })
    .catch((error) => {
      btnUpdated.value = "Modifier";
      $toast.error(error.response.data.message);
    });
};

  const onCheckBtn = async () => {
    const statusreportings = localStorage.getItem("statusReportings");
    isCheckBtn.value = statusreportings == '2' ? true : false;
  }

  
  const onGetPointages = async () => {
    isloadingPointages.value = true;
    const statusreportings = localStorage.getItem("statusReportings");
    const idreportings = localStorage.getItem("idReportings");
    await $axios
      .get("/api/pointages/getpointagesbydate", {
        headers: {
          "key-statusReportings": statusreportings,
          "key-idreportings": idreportings,
        },
      })
      .finally(() => {
        isloadingPointages.value = false;
      })
      .then(({ data }) => {
        tbPointages.value = data;
      })
      .catch((error) => {
        $toast.error(error.response.data.message);
      });
  };
  
  // initialize components based on data attribute selectors
  onMounted(() => {
    initFlowbite();
    onCheckBtn();
    onGetPointages();
  });
  </script>
  