<script setup>
defineProps({
    menus: Array,
})
</script>

<template>
    <div v-for="(menu, i) in menus" :key="i">
        <router-link v-scroll-to="`#app`" v-if="! menu.children" :to="menu.to" class="block px-6 py-2 text-fdtbw font-medium hover:bg-fdtbw hover:text-slate-900 hover:font-semibold">
            <span v-text="menu.text" />
        </router-link>
        <div v-else>
            <div class="px-6 py-2 text-fdtbw font-medium hover:bg-fdtbw hover:text-slate-900 hover:font-semibold flex justify-between gap-6 cursor-pointer" @click="menu.opened.value = ! menu.opened.value">
                <span v-text="menu.text"></span>
                <i class="mdi" :class="{'mdi-chevron-down': ! menu.opened.value, 'mdi-chevron-up': menu.opened.value}"></i>
            </div>

            <div class="pl-2" v-show="menu.opened.value">
                <Sider :menus="menu.children" />
            </div>
        </div>
    </div>
</template>