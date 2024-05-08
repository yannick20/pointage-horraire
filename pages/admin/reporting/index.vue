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
        <p class="text-sm font-medium leading-6 text-gray-400">Number of deploys</p>
        <p class="mt-2 flex items-baseline gap-x-2">
          <span class="text-4xl font-semibold tracking-tight text-white">405</span>
        </p>
      </div>
      <div class="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
        <p class="text-sm font-medium leading-6 text-gray-400">Average deploy time</p>
        <p class="mt-2 flex items-baseline gap-x-2">
          <span class="text-4xl font-semibold tracking-tight text-white">3.65</span>
          <span class="text-sm text-gray-400">mins</span>
        </p>
      </div>
      <div class="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
        <p class="text-sm font-medium leading-6 text-gray-400">Number of servers</p>
        <p class="mt-2 flex items-baseline gap-x-2">
          <span class="text-4xl font-semibold tracking-tight text-white">3</span>
        </p>
      </div>
      <div class="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
        <p class="text-sm font-medium leading-6 text-gray-400">Success rate</p>
        <p class="mt-2 flex items-baseline gap-x-2">
          <span class="text-4xl font-semibold tracking-tight text-white">98.5%</span>
        </p>
      </div>
    </div>
  </div>
</div>
      <div class="mt-5">
        <h3 class="text-base font-semibold leading-6 text-gray-900">
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
                71.897 FCFA
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
                Akilla Jean Noelle
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
                96
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
                Honkika Piere Nelly
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
                4
              </div>
            </dd>
          </div>
        </dl>
      </div>
      <section class="py-8">
        <div class="mx-auto max-w-screen-xl">
          <!-- Start coding here -->
          <div
            class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden"
          >
            <div
              class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4"
            >
              <div class="w-full md:w-1/2">
                <form class="flex items-center">
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
                </form>
              </div>
              <div
                class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"
              >
                <button
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
                    <th scope="col" class="px-4 py-3">Status</th>
                    <th scope="col" class="px-4 py-3">
                      <span class="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple iMac 27&#34;
                    </th>
                    <td class="px-4 py-3">PC</td>
                    <td class="px-4 py-3">Apple</td>
                    <td class="px-4 py-3">300</td>
                    <td class="px-4 py-3">$2999</td>
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
                  >12</span
                >
              </span>
            </nav>
          </div>
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
