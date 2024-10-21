<script setup lang="ts">
import IconGridPlus from "~/components/icons/IconGridPlus.vue";
import IconHome from "~/components/icons/IconHome.vue";
import IconDocument from "~/components/icons/IconDocument.vue";
import IconStructure from "~/components/icons/IconStructure.vue";
import IconSettings from "~/components/icons/IconSettings.vue";
import IconTurn from "~/components/icons/IconTurn.vue";

const firstList = [
  {icon: IconHome, link: "/", name: "Моя Консоль"},
  {icon: IconGridPlus, link: "/templates", name: "Шаблоны"},
  {icon: IconDocument, link: "/documents", name: "Документы"},
]

const secondList = [
  {icon: IconStructure, link: "/structure", name: "Структура"},
]

const bottomList = [
  {icon: IconSettings, link: "/settings", name: "Настройки"},
  {icon: IconTurn, link: "/auth", name: "Выйти"}
]
</script>

<template>
  <aside
      class="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidenav"
      id="drawer-navigation"
  >
    <div class="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800 flex flex-col justify-between">
      <div class="flex h-full flex-col justify-between">
        <ul class="space-y-2">
          <li v-for="i in firstList">
            <a
                :href="i.link"
                class="flex items-center py-3 px-5 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <component :is="i.icon"/>
              <span class="flex-1 ml-3 whitespace-nowrap">{{ i.name }}</span>
            </a>
          </li>
        </ul>
        <ul class="space-y-2">
          <li v-for="i in secondList">
            <a
                :href="i.link"
                class="flex items-center py-3 px-5 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <component :is="i.icon"/>
              <span class="flex-1 ml-3 whitespace-nowrap">{{ i.name }}</span>
            </a>
          </li>
        </ul>
      </div>
      <ul
          class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700"
      >
        <li v-for="i in bottomList">
          <a
              :href="i.link"
              class="flex items-center py-3 px-5 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <component :is="i.icon"/>
            <span class="flex-1 ml-3 whitespace-nowrap">{{ i.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>

</style>