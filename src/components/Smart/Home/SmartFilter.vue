<template>
    <div class="filter">
        <BaseDropDown
            title="Filter by Region"
            :options="options"
            :isDark="isDark"
            @selectOption="selectOption"
            :selectedOption="selectedOption"
        />
    </div>
</template>

<script>
import BaseDropDown from "@/components/Base/Dropdown/BaseDropDown.vue";
import { ref } from "@vue/reactivity";
import { computed, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
export default {
    components: { BaseDropDown },
    setup() {
        const store = useStore();
        const router = useRouter();
        const route = useRoute();
        const selectedOption = ref(undefined);
        const options = ref([
            { id: 1, name: "Africa" },
            { id: 2, name: "Americas" },
            { id: 3, name: "Asia" },
            { id: 4, name: "Europe" },
            { id: 5, name: "Oceania" },
        ]);
        const isDark = computed(() => {
            if (store.state.theme === "dark") {
                return true;
            } else {
                return false;
            }
        });
        const pathQuery = computed(() => route.query);
        const regionQuery = computed(() => route.query.region);

        watch(
            regionQuery,
            () => {
                selectedOption.value = regionQuery.value;
            },
            {
                immediate: true,
            },
        );
        const selectOption = (option) => {
            selectedOption.value = option;
            if (option && pathQuery.value.search) {
                router.push(
                    `/?search=${pathQuery.value.search}&region=${option.name}`,
                );
            } else if (option && !pathQuery.value.search) {
                router.push(`/?region=${option.name}`);
            } else if (!option && pathQuery.value.search) {
                router.push(`/?search=${pathQuery.value.search}`);
            } else {
                router.push(`/`);
            }
        };
        return { options, isDark, selectOption,selectedOption };
    },
};
</script>

<style lang="scss" scoped></style>
