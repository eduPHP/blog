<template>
  <div class="flex px-3 h-full">
    <div class="w-48 flex flex-col">
      <router-link to="/admin" exact>
        <span class="mb-3 text-2xl h-12">Blog Admin</span>
      </router-link>
      <router-link to="/admin/pages">Pages</router-link>
      <router-link to="/admin/Posts">Posts</router-link>
    </div>
    <div class="flex-1 flex flex-col">
      <div class="flex justify-between items-center h-12">
        <ul class="breadcrumb text-gray-600 uppercase text-xs flex">
          <li v-for="crumb in crumbs">
            <template v-if="crumb.to !== $route.fullPath">
              <router-link class="text-blue-700" :to="crumb.to" exact>{{ crumb.text }}</router-link>
            </template>
            <span v-else>{{ crumb.text }}</span>
          </li>
        </ul>
        <div>User Menu</div>
      </div>

      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: `Admin Eduardo's Blog`,
    // all titles will be injected into this template
    titleTemplate: `%s | Admin Eduardo's Blog`
  },
  computed: {
    crumbs() {
      let pathArray = this.$route.path.split("/")
      pathArray.shift()
      return pathArray.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          path: path,
          to: breadcrumbArray[idx - 1]
              ? "/" + breadcrumbArray[idx - 1].path + "/" + path
              : "/" + path,
          text: path,
        });
        return breadcrumbArray;
      }, [])
    }
  }
}
</script>

<style>
.breadcrumb li::after {
  content : '\3E';
  margin  : 0 0.3rem 0 0.3rem;
}

.breadcrumb li:last-child:after,
.breadcrumb:first-child:after {
  content : none;
}
</style>