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
                >Bonjour ! Potter</a
              >
            </div>
          </li>
        </ol>
      </nav>

      <div class="py-5">
        <h3 class="text-base font-semibold leading-6 text-gray-900">
          Rapport du mois actuels
        </h3>
        <dl
          class="mt-2 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0"
        >
          <div class="px-4 py-1 sm:p-6">
            <dt class="text-base font-normal text-gray-900">
              Total des Agents
            </dt>
            <dd
              class="mt-1 flex items-baseline justify-between md:block lg:flex"
            >
              <div
                class="flex items-baseline text-2xl font-semibold text-indigo-600"
              >
                7
              </div>

            </dd>
          </div>
          <div class="px-4 py-5 sm:p-6">
            <dt class="text-base font-normal text-gray-900">Agent ponctuel</dt>
            <dd
              class="mt-1 flex items-baseline justify-between md:block lg:flex"
            >
              <div
                class="flex items-baseline text-2xl font-semibold text-indigo-600"
              >
                Bailyanne bouity Yannick
                <!-- <span class="ml-2 text-sm font-medium text-gray-500"
                  >Nbre de point</span
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
                29
              </div>
            </dd>
          </div>
          <div class="px-4 py-5 sm:p-6">
            <dt class="text-base font-normal text-gray-900">Agent retardataire</dt>
            <dd
              class="mt-1 flex items-baseline justify-between md:block lg:flex"
            >
              <div
                class="flex items-baseline text-2xl font-semibold text-red-600"
              >
                Komba Jeannelyne
                
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
                74
              </div>
            </dd>
          </div>
        </dl>
      </div>
      <div class="py-2">
        <h3 class="text-base font-semibold leading-6 text-gray-900">
          Historiques de pointage actuels
        </h3>
        <section class="mt-2">
          <div class="mx-auto max-w-screen-xl">
            <!-- Start coding here -->
            <div
              class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden"
            >
              <div class="overflow-x-auto">
                <table
                  class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                >
                  <thead
                    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                  >
                    <tr>
                      <th scope="col" class="px-4 py-3">Nom & Prenom</th>
                      <th scope="col" class="px-4 py-3">Agence</th>
                      <th scope="col" class="px-4 py-3">Heure d'Arrive</th>
                      <th scope="col" class="px-4 py-3">Heure de Depart</th>
                      <th scope="col" class="px-4 py-3">Cumule Point</th>
                      <th scope="col" class="px-4 py-3">Date</th>
                      
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
                29
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
                74
              </div>
                      </td>
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
      </div>
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
