<template>
    <div class="filter">
        <BaseDropDown title="Filter by Region" :options="options" :isDark="isDark"/>
    </div>
</template>

<script>
import BaseDropDown from "@/components/Base/Dropdown/BaseDropDown.vue";
import { ref } from "@vue/reactivity";
import { computed } from '@vue/runtime-core';
import { useStore } from "vuex";
export default {
    components: { BaseDropDown },
    setup() {
        const store = useStore();
        const options = ref([
            { id: 1, name: "Africa" },
            { id: 2, name: "America" },
            { id: 3, name: "Asia" },
            { id: 4, name: "Europe" },
            { id: 5, name: "Ocienia" },
        ]);
        const isDark = computed(()=>{
            if(store.state.theme ==='dark'){
                return true;
            }else{
                return false;
            }
        })
        return { options,isDark };
    },
};
</script>

<style lang="scss" scoped></style>
