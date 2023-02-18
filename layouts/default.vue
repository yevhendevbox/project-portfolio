<template>
  <div class="flex flex-col h-screen">
    <!-- <header class="shadow-sm bg-zinc-800">
                                        <nav class="container mx-auto p-4 flex justify-between items-center">
                                          <div class="font-bold flex items-center">
                                            <img class="max-h-7"
                                              src="@/assets/images/my-logo.jpg"
                                              alt="Header logo">
                                            <span class="ml-4">personal website</span>
                                          </div>
                                          <ul class="flex gap-4">
                                            <li>
                                              <NuxtLink to="/">Home</NuxtLink>
                                            </li>
                                            <li>
                                              <NuxtLink to="/work">Work</NuxtLink>
                                            </li>
                                            <li>
                                              <NuxtLink to="/about">About</NuxtLink>
                                            </li>
                                            <li>
                                              <NuxtLink to="/contact">Contact</NuxtLink>
                                            </li>
                                          </ul>
                                        </nav>
                                      </header> -->
    <nav-bar />
    <!-- Pages content goes here -->
    <main class="pt-16 flex-grow">
      <div class="container mx-auto p-4">
        <slot />
      </div>
    </main>
    <footer class="bg-zinc-800 bottom-0">
      <div class="container mx-auto p-4 flex justify-between ">
        <div class="copyright">
          <p>© 2023 Yevhen Dovhan. All rights reserved.</p>
        </div>
        <div class="social-links"></div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>
<style scoped></style>