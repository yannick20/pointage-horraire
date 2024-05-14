<template>
  <div>
    <NuxtLayout name="adminpointage">
      <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <div class="text-center p-5">
          <h1 style="font-size: xx-large; font-weight: bold;">
          Fiche de presence du {{ dateOnly }}
        </h1>
        </div>

      </div>
      <div class="mt-4 grid gap-6 md:grid-cols-4">
        <div
          class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          v-for="(item, index) in tbHistoriques"
                      :key="index"
        >
          <div class="flex justify-end px-4 pt-4">
            <!-- <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span class="sr-only">Open dropdown</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
        </button> -->
            <!-- Dropdown menu -->
          </div>
          <div class="text-center mb-4">
            <span class="text-sm text-gray-500 dark:text-gray-400"
              >Agence de {{ item.agences.libelle }}</span
            >
          </div>
          <div class="flex flex-col items-center pb-10">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="/user.png"
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {{ item.users.nom }} {{ item.users.prenom }}
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400"
              >{{ item.users.fonction}}
              
              </span
            >
            <p class="text-gray-500" :style="item.pointages.heureArrive !== '' ? '' : 'display : none'">Heurre d'arrive :  {{ item.pointages.heureArrive}}</p>
            <div class="flex mt-4 md:mt-6">
              <button
              @click="onCheckHeure(item)"
              :style="item.pointages.heureArrive === '' ? '' : 'display : none'"
              
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >Arrive</button
              >
              <button
              :style="item.pointages.heureArrive !== '' ? '' : 'display : none'"
                class="inline-flex items-center px-4 py-2 ml-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >Depart</button
              >
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { addMinutes,format, parse, isWithinInterval } from 'date-fns'
import { fr } from 'date-fns/locale'
const { $toast, $axios } = useNuxtApp();
// const nuxtApp = useNuxtApp() format(new Date(), 'dd/MM/yyyy', { locale: fr });
const router = useRouter();

const tbHistoriques: any = ref([]);
const isloading = ref(false);

const dateOnly = ref("");

const phone = ref("");
const password = ref("");
const btnName = ref("Se connecter");

const totalUsers = ref(0);
const agentMaxPointOnlyn = ref({});
const agentMoinPointOnlyn = ref({});

const isloader = ref(false);

const onCheckHeure = async (item: any) =>{

  // Heure initiale
  const heureInitiale = item.agences.heuredebutTravail;

  //Date
  const dateonly = format(new Date(), 'yyyy-MM-dd', { locale: fr })

  // Conversion de l'heure initiale en objet Date
  const heureInitialeDate = new Date(`${dateonly}T${heureInitiale}:00`);

  // Ajout de 5 minutes
const heureFinaleDate = addMinutes(heureInitialeDate, 5);

// Formatage de l'heure finale au format HH:mm
const heureFinale = format(heureFinaleDate, 'HH:mm');

// Heure à vérifier
//const heureAVerifier = '03:28';
const heureAVerifier = format(new Date(), 'HH:mm', { locale: fr });

// Convertir les chaînes d'heure en objets Date
const heureDebutDate = parse(heureInitiale, 'HH:mm', new Date());
const heureFinDate = parse(heureFinale, 'HH:mm', new Date());
const heureAVerifierDate = parse(heureAVerifier, 'HH:mm', new Date());

// console.log(`Heure initiale : ${heureInitiale}`);
// console.log(`Heure finale : ${heureFinale}`);

// console.log(`Heure actuel : ${format(new Date(), 'HH:mm', { locale: fr })}`);

// Vérifier si l'heure à vérifier est dans l'intervalle ,
const estDansIntervalle = isWithinInterval(heureAVerifierDate, { start: heureDebutDate, end: heureFinDate });

if (estDansIntervalle) {
    //console.log(`${heureAVerifier} est dans l'intervalle ${heureInitiale}-${heureFinale}.`);
    const pointSuccess = item.pointages.pointSuccess + 2;
    //console.log(`point gagne : ${pointSuccess}`);
    console.log(heureAVerifier)
   console.log(pointSuccess)
   console.log(item.pointages.id)
    await $axios
      .put("/api/pointages/pointagesuccess", {
        keyheureArrive: heureAVerifier,
        keypointSuccess: pointSuccess,
        keyid: item.pointages.id,
    })
      .finally(() => {
        //isloading.value = false;
      })
      .then(({ data }) => {
        //tbHistoriques.value = data;
        $toast.success(data.message);
        console.log(data.message)
        onGetPointagesOnly();
      })
      .catch((error) => {
        //$toast.error(error.response.data.message);
        console.log(error.response.data.message)
      });

} else {
    //console.log(`${heureAVerifier} n'est pas dans l'intervalle ${heureInitiale}-${heureFinale}.`);
    const pointSuccess = item.pointages.pointSuccess - 2;
    const pointDanger = item.pointages.pointDanger + pointSuccess;

    console.log(heureAVerifier)
   console.log(pointDanger)
   console.log(item.pointages.id)
    //console.log(`point perdu : ${pointDanger}`);
    await $axios
      .put("/api/pointages/pointagedanger", {
        keyheureArrive: heureAVerifier,
        keypointDanger: pointDanger,
        keyid: item.pointages.id,
    })
      .finally(() => {
        //isloading.value = false;
      })
      .then(({ data }) => {
        //tbHistoriques.value = data;
        $toast.success(data.message);
        console.log(data.message)
        onGetPointagesOnly();
      })
      .catch((error) => {
        //$toast.error(error.response.data.message);
        console.log(error.response.data.message)
      });
}

}

const onUpdatedPointSuccess = async () => {
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

const onGetPointagesOnly = async () => {
  isloading.value = true;
  await $axios
    .get("/api/pointages/pointageusersonly")
    .finally(() => {
      isloading.value = false;
    })
    .then(({ data }) => {
      tbHistoriques.value = data;
    })
    .catch((error) => {
      $toast.error(error.response.data.message);
    });
};

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
  onGetPointagesOnly();
  dateOnly.value = format(new Date(), 'dd/MM/yyyy', { locale: fr })
});
</script>
