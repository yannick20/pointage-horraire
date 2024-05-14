<template>
  <div>
    <nav class="bg-white shadow border-gray-200 dark:bg-gray-900">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a
          href="#"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img style="height: 50px" src="/logocean.png" alt="Flowbite Logo" />
    </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
         
        </div>
      </div>
    </nav>

    <div class="container mx-auto px-4 py-4">
        <slot />
    </div>
    
  </div>
</template>

<script setup>
const router = useRouter();

const onProfile = async () =>{
  router.replace("/admin/profile");
}
</script>
