<template>
  <div class="p-3 h-full font-sans text-gray-800 max-w-xl mx-auto border">
    <router-link to="/">
      <h1 class="text-2xl">Eduardo's Blog</h1>
    </router-link>

    <ul class="flex justify-between">
      <li>
        <router-link class="hover:underline text-blue-600" to="/article">Article</router-link>
      </li>
      <li>
        <router-link class="hover:underline text-blue-600" to="/about">About</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Site',
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: `Eduardo's Blog`,
    // all titles will be injected into this template
    titleTemplate: `%s | Eduardo's Blog`
  }
}
</script>