<template>
    <div class="countryList">
        <div
            class="countryList__card"
            v-for="country in filteredCountries && filteredCountries.length > 0
                ? filteredCountries
                : countries"
            :key="country"
        >
            <SmartCountryCard
                :countryInfo="country"
                @click="goToCountryPage(country)"
            />
        </div>
    </div>
</template>

<script>
import SmartCountryCard from "./SmartCountryCard.vue";
import {
    computed,
    inject,
    nextTick,
    onMounted,
    onUnmounted,
    ref,
    watch,
} from "@vue/runtime-core";
import { useRouter, useRoute } from "vue-router";

const loadData = async (axios) => {
    return axios
        .get(
            "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags",
        )
        .then((res) => {
            return res.data;
        });
};
export default {
    components: { SmartCountryCard },
    async setup() {
        const axios = inject("axios");
        const router = useRouter();
        const route = useRoute();
        const countries = ref(await loadData(axios));

        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } =
                document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 5) {
            }
        };
        const searchWord = (array, word) => {
            let wordArray = [...word.toLowerCase()];
            let filterArray = array.filter((item) => {
                let itemName = item.name.common.toLowerCase();
                for (let [charIndex, char] of wordArray.entries()) {
                    let index = itemName.indexOf(char);
                    console.log(itemName, index, charIndex, wordArray.length);
                    if (charIndex + 1 === wordArray.length && index !== -1) {
                        console.log(itemName, true);
                        return true;
                    } else if (charIndex !== wordArray.length && index !== -1) {
                        console.log(itemName, "slice", char);
                        itemName =
                            itemName.slice(0, index) +
                            itemName.slice(index + 1);
                    } else {
                        console.log(itemName, false);
                        return false;
                    }
                }
            });
            return filterArray;
        };
        const goToCountryPage = (country) => {
            router.push(`/${country.name.common}`);
        };
        const searchQuery = computed(() => route.query.search);
        const regionQuery = computed(() => route.query.region);
        const routeQuery = computed(() => route.query);
        const filteredCountries = computed(() => {
            let filterArray = [];
            if (Object.keys(routeQuery.value).length === 0) {
                return undefined;
            }
            if (regionQuery.value) {
                filterArray = countries.value.filter(
                    (country) => country.region === regionQuery.value,
                );
            }
            if (searchQuery.value && regionQuery.value) {
                filterArray = searchWord(filterArray, searchQuery.value);
            } else if (searchQuery.value && !regionQuery.value) {
                filterArray = searchWord(countries.value, searchQuery.value);
            }
            return filterArray;
        });

        return { countries, goToCountryPage, filteredCountries };
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
        transition: 0.3s;
    }
    @media (max-width: 1250px) {
        gap: 50px;
        &__card {
            width: 20%;
        }
    }
    @media (max-width: 900px) {
        gap: 40px;
        &__card {
            width: 25%;
        }
    }
    @media (max-width: 700px) {
        gap: 30px;
        &__card {
            width: 35%;
        }
    }
    @media (max-width: 500px) {
        gap: 20px;
        &__card {
            width: 100%;
        }
    }
}
</style>
