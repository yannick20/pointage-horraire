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
                >Reporting</a
              >
            </div>
          </li>
        </ol>
      </nav>
      <div class="bg-gray-900">
  <div class="mx-auto max-w-7xl">
    <div class="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
      <div class="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
        <p class="text-sm font-medium leading-6 text-gray-400">Total Utilisateurs</p>
        <p class="mt-2 flex items-baseline gap-x-2">
          <span class="text-4xl font-semibold tracking-tight text-white">{{usercount}}</span>
        </p>
      </div>
      <div class="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
        <p class="text-sm font-medium leading-6 text-gray-400">Total Reporting</p>
        <p class="mt-2 flex items-baseline gap-x-2">
          <span class="text-4xl font-semibold tracking-tight text-white">{{reportingsCount}}</span>
          <!-- <span class="text-sm text-gray-400">mins</span> -->
        </p>
      </div>
      <div class="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
        <p class="text-sm font-medium leading-6 text-gray-400">Total Agences</p>
        <p class="mt-2 flex items-baseline gap-x-2">
          <span class="text-4xl font-semibold tracking-tight text-white">{{agencesCount}}</span>
        </p>
      </div>
      <div class="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
        <p class="text-sm font-medium leading-6 text-gray-400">Total Fiche de pointage</p>
        <p class="mt-2 flex items-baseline gap-x-2">
          <span class="text-4xl font-semibold tracking-tight text-white">{{pointagesCount}}</span>
        </p>
      </div>
    </div>
  </div>
</div>
      <div class="mt-5 ">
        <h3 class="text-base font-semibold leading-6 text-gray-900 mb-4">
            Rapport global du mois passe
        </h3>
        <dl
          class="grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0"
        >
          <div class="px-4 py-5 sm:p-6">
            <dt class="text-base font-normal text-gray-900">
                Récompense Total
            </dt>
            <dd
              class="mt-1 flex items-baseline justify-between md:block lg:flex"
            >
              <div
                class="flex items-baseline text-2xl font-semibold text-black-600"
              >
                {{totalReportingsSum}} FCFA
                <!-- <span class="ml-2 text-sm font-medium text-gray-500"
                  >from 70,946</span
                > -->
              </div>

              <!-- <div
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
                12%
              </div> -->
            </dd>
          </div>
          <div class="px-4 py-5 sm:p-6">
            <dt class="text-base font-normal text-gray-900">Meilleur Agent</dt>
            <dd
              class="mt-1 flex items-baseline justify-between md:block lg:flex"
            >
              <div
                class="flex items-baseline text-2xl font-semibold text-green-600"
              >
              {{agentMaxPointOnlyn.nomComplet}}
                <!-- <span class="ml-2 text-sm font-medium text-gray-500"
                  >from 56.14%</span
                > -->
              </div>

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
                {{agentMaxPointOnlyn.totalPointsSuccess}}
              </div>
            </dd>
          </div>
          <div class="px-4 py-5 sm:p-6">
            <dt class="text-base font-normal text-gray-900">Agent Dangereux</dt>
            <dd
              class="mt-1 flex items-baseline justify-between md:block lg:flex"
            >
              <div
                class="flex items-baseline text-2xl font-semibold text-red-600"
              >
              {{agentMoinPointOnlyn.nomComplet}}
                <!-- <span class="ml-2 text-sm font-medium text-gray-500"
                  >from 28.62%</span
                > -->
              </div>

              <div
                class="inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium bg-red-100 text-red-800 md:mt-2 lg:mt-0"
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
                {{agentMoinPointOnlyn.totalPointsDanger}}
              </div>
            </dd>
          </div>
        </dl>
      </div>

    </NuxtLayout>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

const { $toast, $axios } = useNuxtApp();

const isloading = ref(false);

const usercount = ref("");
const reportingsCount = ref("");
const agencesCount = ref("");
const pointagesCount = ref("");

const totalReportingsSum = ref(0);
const agentMaxPointOnlyn = ref({});
const agentMoinPointOnlyn = ref({});

const onGetStatistiqueLast = async () => {
  isloading.value = true;
    await $axios
      .get("/api/statistiques/rapportgloballast")
      .finally(() => {
        isloading.value = false;
      })
      .then(({ data }) => {
        //tbHistoriques.value = data;
        totalReportingsSum.value = data.totalReportingsSum
        agentMaxPointOnlyn.value = data.agentMaxPointOnlyn
        agentMoinPointOnlyn.value = data.agentMoinPointOnlyn
      })
      .catch((error) => {
        //$toast.error(error.response.data.message);
        console.log(error.response.data.message)
      });
  };

const onGetStatistiqueOnly = async () => {
  isloading.value = true;
    await $axios
      .get("/api/statistiques")
      .finally(() => {
        isloading.value = false;
      })
      .then(({ data }) => {
        //tbHistoriques.value = data;
        usercount.value = data.usercount
        reportingsCount.value = data.reportingsCount
        agencesCount.value = data.agencesCount
        pointagesCount.value = data.pointagesCount
      })
      .catch((error) => {
        //$toast.error(error.response.data.message);
        console.log(error.response.data.message)
      });
  };

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
  onGetStatistiqueOnly();
  onGetStatistiqueLast()
});
</script>
