<template>
    <div class="countryList">
        <div
            class="countryList__card"
            v-for="country in countries"
            :key="country"
        >
            <SmartCountryCard :countryInfo="country" />
        </div>
    </div>
</template>

<script>
import SmartCountryCard from "./SmartCountryCard.vue";
import { inject, onMounted, onUnmounted, ref } from "@vue/runtime-core";
export default {
    components: { SmartCountryCard },
    setup() {
        const axios = inject("axios");
        const countries = ref([]);
        axios
            .get("https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags")
            .then((res) => {
                countries.value = res.data;
                console.log(countries);
            })
            .catch((err) => {});
        const handleScroll = () => {
            const {scrollTop, scrollHeight,clientHeight} = document.documentElement;
            if((scrollTop+clientHeight >= scrollHeight - 5)){

            }
        };
        onMounted(() => {
            window.addEventListener("scroll", handleScroll);
        });

        onUnmounted(() => {
            window.removeEventListener("scroll", handleScroll);
        });
        return { countries };
    },
};
</script>

<style lang="scss" scoped>
.countryList {
    width: 100%;
    height: 100%;
    display: inline-flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow-x: auto;
    gap: 100px;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
    padding-bottom: 200px;

    &::-webkit-scrollbar {
        display: none;
    }
    &__card {
        width: 15%;
    }
}
</style>
