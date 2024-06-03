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
              <a href="#" class="text-gray-400 hover:text-gray-500">
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
                <span class="sr-only">Home</span>
              </a>
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
              <a
                href="#"
                class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >Suivi d'horaire</a
              >
            </div>
          </li>
        </ol>
      </nav>

      <section class="py-8">
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
                      required
                    />
                  </div>
                </form> -->
              </div>
              <div
                class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"
              >
                <button
                @click="onOpenModal"
                  type="button"
                  class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  <svg
                    class="h-3.5 w-3.5 mr-2"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    />
                  </svg>
                  Ajouter un indicateur horaire
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
                    <th scope="col" class="px-4 py-3">Date</th>
                    <th scope="col" class="px-4 py-3">Agence</th>
                    <th scope="col" class="px-4 py-3">Total Agents</th>
                    <th scope="col" class="px-4 py-3">Récompense</th>
                    <th scope="col" class="px-4 py-3">Total Gagnant</th>
                    <th scope="col" class="px-4 py-3">Status</th>
                    <th scope="col" class="px-4 py-3">
                      <span class="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tfoot>
                <tr v-if="tbSuivisHoraires.length === 0 && isloading == false">
                  <td colspan="6" class="py-4 text-center">Aucune donnée n'a été trouvé</td>
                </tr>
                <tr v-if="isloading">
                  <td colspan="6" class="py-4 text-center">
                  Chargement des données...
                  </td>
              </tr>
              </tfoot>
                <tbody>
                  <tr class="border-b dark:border-gray-700" v-for="(item, index) in tbSuivisHoraires" :key="index">
                    <th
                      scope="row"
                      class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {{item.reportings.dateComplet}}
                    </th>
                    <td class="px-4 py-3">{{item.agences.libelle}}</td>
                    <td class="px-4 py-3">{{item.reportings.totalAgent}}</td>
                    <td class="px-4 py-3">{{item.reportings.recompense}} FCFA</td>
                    <td class="px-4 py-3">{{item.reportings.compteNbre}}</td>
                    <td class="px-4 py-3">{{item.reportings.status == 1 ? 'En cours' : 'Termier'}} </td>
                    <td class="flex items-center justify-center">
                      <button
                        @click="getOneSuivis(item)"
                        
                        type="button"
                        class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                      >
                        Voir
                      </button>
                      <button
                        type="button"
                        :disabled="item.reportings.status == 2"
                        @click="onOpenUpdateModal(item)"
                        class="ml-4 mr-4 flex items-center justify-center text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                      >
                        <svg
                          class="w-[20px] h-[20px] text-white-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z"
                            clip-rule="evenodd"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>

                      <button
                        @click="onOpenDeleteModal(item)"
                        type="button"
                        :disabled="item.reportings.status == 2"
                        class="flex items-center justify-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                      >
                        <svg
                          class="w-[20px] h-[20px] text-white-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
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
                Totals des agents:
                <span class="font-semibold text-gray-900 dark:text-white"
                  >{{tbSuivisHoraires.length}}</span
                >
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
                  <form @submit.prevent="onSubmit">
                    <div>
                      <label
                        for="recompense1"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Montant de recompense</label
                      >
                      <input
                        type="number"
                        id="recompense1"
                        v-model="recompense" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="ex : 100000"
                        required
                      />
                    </div>
                    <div class="mt-4 grid gap-6 md:grid-cols-2">
                      <div>
                        <label
                          for="agence"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >Agence</label
                        >
                        <select v-model="agencesId" required id="agence" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option selected value="">Selectionner une agence</option>
                          <option :value="item.id" v-for="(item, index) in tbAgences" :key="index">{{ item.libelle }}</option>
                        </select>
                      </div>
                      <div>
                        <label
                          for="compteNbre"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >Nombre total de gagnant</label
                        >
                        <input
                          type="text"
                          id="compteNbre"
                          v-model="compteNbre" 
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="ex : 1"
                          required
                        />
                      </div>
                    </div>
                    <div class="mt-5 text-center">
                      <button
                        :disabled="isloadingAdd"
                        @click="onCloseModal"
                        type="button"
                        class="mr-2 inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      >
                        Annuler
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

    <TransitionRoot appear :show="isOpenUpdate" as="template">
      <Dialog as="div" @close="onCloseUpdateModal" class="relative z-10">
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
                  Modification
                </DialogTitle>
                <hr class="my-4" />
                <div class="mt-4">
                  <form @submit.prevent="onSubmitUpdated">
                    <div>
                      <label
                        for="recompenseUpdated1"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Montant de recompense</label
                      >
                      <input
                        type="number"
                        id="recompenseUpdated1"
                        v-model="recompenseUpdated" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="ex : 100000"
                        required
                      />
                    </div>
                    <div class="mt-4">
                        <label
                          for="compteNbre"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >Nombre total de gagnant</label
                        >
                        <input
                          type="number"
                          id="compteNbre"
                          v-model="compteNbreUpdated" 
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="ex : 1"
                          required
                        />
                      </div>
                    <div class="mt-5 text-center">
                      <button
                        :disabled="isloadingUpdated"
                        @click="onCloseUpdateModal"
                        type="button"
                        class="mr-2 inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      >
                        Annuler
                      </button>
                      <button
                        :disabled="isloadingUpdated"
                        type="submit"
                        class="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      >
                        {{ btnUpdated }}
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

    <TransitionRoot appear :show="isOpenDelete" as="template">
      <Dialog as="div" @close="onCloseDeleteModal" class="relative z-10">
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
                  Suprresion
                </DialogTitle>
                <div class="mt-2 text-center">
                  <p class="text-md text-gray-500">
                    Voulez-vous vraiment supprimer ce suivi d'horaire ?
                  </p>
                  <b>{{ libelledateComplet }}</b>
                </div>

                <div class="mt-4 text-center">
                  <button
                    :hidden="isloadingDelete"
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="onCloseDeleteModal"
                  >
                    Non
                  </button>
                  <button
                    :disabled="isloadingDelete"
                    type="button"
                    class="ml-2 inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="onSubmitDelete"
                  >
                    {{ btnLibelle }}
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

const { $toast, $axios } = useNuxtApp();
// const nuxtApp = useNuxtApp()
const router = useRouter();

const tbSuivisHoraires = ref([]);
const isloading = ref(false);

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const isOpen = ref(false);
const isOpenDelete = ref(false);
const isOpenUpdate = ref(false);

const libelledateComplet = ref("");
const idReportingsDelete = ref("");
const btnLibelle = ref("Oui");

const compteNbre = ref("");
const recompense = ref("");
const agencesId = ref("");
const btnAjouter = ref("Enregistrer");

const idReportingsUpdate = ref("");
const compteNbreUpdated = ref("");
const recompenseUpdated = ref("");
const agencesIdUpdated = ref("");
const btnUpdated = ref("Modifier");

const tbAgences = ref([]);
const isloadingAgences = ref(false);

const isloadingDelete = ref(false);
const isloadingAdd = ref(false);
const isloadingUpdated = ref(false);


const onOpenModal = async () => {
  isOpen.value = true;
};

const onCloseModal = async () => {
  isOpen.value = false;
};

const onOpenUpdateModal = async (item) => {
  compteNbreUpdated.value = item.reportings.compteNbre;
  recompenseUpdated.value = item.reportings.recompense;
  agencesIdUpdated.value = item.agences.id;
  idReportingsUpdate.value = item.reportings.id;
  isOpenUpdate.value = true;
};

const onCloseUpdateModal = async () => {
  isOpenUpdate.value = false;
};

const onOpenDeleteModal = async (item) => {
  libelledateComplet.value = item.reportings.dateComplet;
  idReportingsDelete.value = item.reportings.id;
  isOpenDelete.value = true;
};

const onCloseDeleteModal = async () => {
  isOpenDelete.value = false;
};

const onSubmit = async () => {
  isloadingAdd.value = true;
  btnAjouter.value = "enregistrement en cours...";
  await $axios
    .post("/api/reportings", {
      compteNbre: compteNbre.value,
      recompense: recompense.value,
      agencesId: agencesId.value,
    })
    .finally(() => {
      isloadingAdd.value = false;
    })
    .then(({ data }) => {
      btnAjouter.value = "Enregistrer";
      onCloseModal();
      $toast.success(data.message);
      onGetReportings();

      compteNbre.value = "";
      recompense.value = "";
      agencesId.value = "";
    })
    .catch((error) => {
      btnAjouter.value = "Enregistrer";
      $toast.error(error.response.data.message);
    });
};

const onSubmitUpdated = async () => {
  isloadingUpdated.value = true;
  btnUpdated.value = "modification en cours...";
  await $axios
    .put("/api/reportings/"+ idReportingsUpdate.value, {
      compteNbre: compteNbreUpdated.value,
      recompense: recompenseUpdated.value,
      agencesId: agencesIdUpdated.value,
    })
    .finally(() => {
      isloadingUpdated.value = false;
    })
    .then(({ data }) => {
      btnUpdated.value = "Modifier";
      onCloseUpdateModal();
      $toast.success(data.message);
      onGetReportings();

      compteNbreUpdated.value = "";
      recompenseUpdated.value = "";
      agencesIdUpdated.value = "";
    })
    .catch((error) => {
      btnUpdated.value = "Modifier";
      $toast.error(error.response.data.message);
    });
};


const onSubmitDelete = async () => {
  isloadingDelete.value = true;
  btnLibelle.value = "Suppression en cours...";
  await $axios
    .delete("/api/reportings/" + idReportingsDelete.value)
    .finally(() => {
      isloadingDelete.value = false;
    })
    .then(({ data }) => {
      btnLibelle.value = "Oui";
      onCloseDeleteModal();
      $toast.success(data.message);
      onGetReportings();
    })
    .catch((error) => {
      btnLibelle.value = "Oui";
      onCloseDeleteModal();
      $toast.error(error.response.data.message);
    });
};

const getOneSuivis= async (item) => {
  localStorage.setItem('idReportings', item.reportings.id)
  localStorage.setItem('statusReportings', item.reportings.status)
  localStorage.setItem('idAgencesReportings', item.agences.id)
  router.push(`/admin/suivi-horaire/${item.agences.libelle}`);
};

const onGetAgences = async () => {
  isloadingAgences.value = true;
  await $axios
    .get("/api/agences")
    .finally(() => {
      isloadingAgences.value = false;
    })
    .then(({ data }) => {
      tbAgences.value = data;
    })
    .catch((error) => {
      $toast.error(error.response.data.message);
    });
};

const onGetReportings = async () => {
  isloading.value = true;
  await $axios
    .get("/api/reportings")
    .finally(() => {
      isloading.value = false;
    })
    .then(({ data }) => {
      tbSuivisHoraires.value = data;
    })
    .catch((error) => {
      $toast.error(error.response.data.message);
    });
};

const onCheckUpdatedlast = async () => {
  isloading.value = true;
    await $axios
      .put("/api/reportings/reportingsupdatedlast")
      .finally(() => {
        isloading.value = false;
      })
      .then(({ data }) => {
        //tbHistoriques.value = data;
        console.log(data.message)
      })
      .catch((error) => {
        //$toast.error(error.response.data.message);
        console.log(error.response.data.message)
      });
  };

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
  onCheckUpdatedlast()
  onGetAgences()
  onGetReportings()
});
</script>
