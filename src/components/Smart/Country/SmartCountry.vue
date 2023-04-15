<template>
    <div class="country">
        <div class="country__image">
            <img :src="country?.flags.svg" :alt="country?.flags.alt" />
        </div>
        <div class="country__info">
            <h2 class="country__info__name">{{ country?.name.common }}</h2>
            <div class="country__info__container">
                <div class="country__info__container__col">
                    <p class="country__info__container__col__row">
                        Native Name:
                        <span
                            class="country__info__container__col__row__value"
                            >{{ nativeName }}</span
                        >
                    </p>
                    <p class="country__info__container__col__row">
                        Population:
                        <span
                            class="country__info__container__col__row__value"
                            >{{ country?.population }}</span
                        >
                    </p>
                    <p class="country__info__container__col__row">
                        Region:
                        <span
                            class="country__info__container__col__row__value"
                            >{{ country?.region }}</span
                        >
                    </p>
                    <p class="country__info__container__col__row">
                        Sub Region:
                        <span
                            class="country__info__container__col__row__value"
                            >{{ country?.subregion }}</span
                        >
                    </p>
                    <p class="country__info__container__col__row">
                        Capital:
                        <span
                            class="country__info__container__col__row__value"
                            >{{ country?.capital[0] }}</span
                        >
                    </p>
                </div>
                <div class="country__info__container__col">
                    <p class="country__info__container__col__row">
                        Top Level Domain:
                        <span
                            class="country__info__container__col__row__value"
                            >{{ country?.tld[0] }}</span
                        >
                    </p>
                    <p class="country__info__container__col__row">
                        Native Name:
                        <span
                            class="country__info__container__col__row__value"
                            >{{ currency?.[0] }}</span
                        >
                    </p>
                    <p class="country__info__container__col__row">
                        Languages:
                        <span
                            class="country__info__container__col__row__value"
                            v-for="lang in languages"
                            :key="lang"
                            >{{ ` ${lang}` }}</span
                        >
                    </p>
                </div>
            </div>
            <div class="country__borders">
                <p class="country__borders__border">
                    Border Countries:
                    <button
                        class="country__borders__border__button"
                        v-for="border in newBorders"
                        :key="border"
                        @click="$router.push(`/${border}`)"
                    >
                        {{ border }}
                    </button>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, inject, onMounted, ref, watch } from "@vue/runtime-core";
import { useRoute } from "vue-router";

const loadData = async (
    axios,
    countryName,
    nativeName,
    currency,
    newBorders,
    languages,
) => {
    newBorders.value = [];
    return axios
        .get(
            `https://restcountries.com/v3.1/name/${countryName.value}?fullText=true&fields=name,capital,population,region,flags,tld,currencies,languages,subregion,capital,borders`,
        )
        .then((res) => {
            let lastNativeName = Object.entries(
                res.data[0].name.nativeName,
            ).pop();
            nativeName.value = lastNativeName[1].common;
            currency.value = Object.entries(res.data[0].currencies).pop();
            languages.value = Object.values(res.data[0].languages);
            let borders = res.data[0].borders;
            borders.pop();
            const requests = borders.map((border) =>
                axios.get(
                    `https://restcountries.com/v3.1/name/${border}?fields=name`,
                ),
            );
            requests.forEach((req) => {
                req.then((response) => {
                    newBorders.value.push(response.data.pop()?.name.common);
                }).catch((error) => {
                    console.log("Border not found");
                });
            });
            return res.data[0];
        })
        .catch((err) => {
            console.log(err);
        });
};

export default {
    async setup() {
        const axios = inject("axios");

        const route = useRoute();
        const countryName = computed(() => route.params.countryName);
        const nativeName = ref();
        const currency = ref();
        const newBorders = ref([]);
        const languages = ref();
        const country = ref(
            await loadData(
                axios,
                countryName,
                nativeName,
                currency,
                newBorders,
                languages,
            ),
        );
        const getCountry = async () => {
            country.value = await loadData(
                axios,
                countryName,
                nativeName,
                currency,
                newBorders,
                languages,
            );
        };
        watch(route, () => {
            country.value = undefined;
            getCountry();
        });
        return { country, nativeName, currency, languages, newBorders };
    },
};
</script>

<style lang="scss" scoped>
.country {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    &__image {
        width: 40%;
        img {
            aspect-ratio: 4/3;
            object-fit: cover;
        }
    }
    &__info {
        width: 45%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        &__name {
            font-size: 2.5rem;
            margin-bottom: 30px;
        }
        &__container {
            width: 100%;
            display: flex;
            justify-content: space-between;
            &__col {
                display: flex;
                flex-direction: column;
                &__row {
                    margin-bottom: 10px;
                    &__value {
                        color: rgba($primary-dark-gray, 0.9);
                    }
                }
            }
        }
    }
    &__borders {
        margin-top: 35px;
        &__border {
            transition: 0.3s;
            &__button {
                transition: 0.3s;
                color: rgba($primary-dark-gray, 0.9);
                background-color: $primary-real-white;
                padding: 7px 15px;
                margin-left: 10px;
                box-shadow: 0 0 7px rgba($primary-gray, 1);
                border-radius: 3px;
                margin-bottom: 10px;
            }
        }
    }
    @media (max-width: 1200px) {
        flex-direction: column;
        overflow-y: auto;
        padding-bottom: 80px;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
        &__image {
            margin-bottom: 30px;
            width: 100%;
        }
        &__info {
            width: 100%;
        }
    }
    @media (max-width: 600px) {
        &__info {
            &__container {
                flex-direction: column;
                &__col {
                    margin-bottom: 20px;
                }
            }
        }
    }
}

:root.darkmode .country {
    &__info {
        color: $primary-real-white;
        &__container {
            &__col {
                &__row {
                    &__value {
                        color: rgba($primary-gray, 0.9);
                    }
                }
            }
        }
    }
    &__borders {
        &__border {
            &__button {
                color: rgba($primary-gray, 0.9);
                background-color: $darkmode-midnight;
                box-shadow: 0 0 7px rgba($primary-real-black, 0.6);
            }
        }
    }
}
</style>
