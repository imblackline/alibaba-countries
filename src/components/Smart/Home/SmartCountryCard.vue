<template>
    <div class="countrycard">
        <img
            class="countrycard__image"
            :src="countryInfo.flags?.svg"
            :alt="countryInfo.flags?.alt"
        />
        <div class="countrycard__info">
            <h3 class="countrycard__info__name">
                {{ countryInfo.name?.common }}
            </h3>
            <p>
                Population:
                <span>
                    {{ countryInfo.population }}
                </span>
            </p>
            <p>
                Region:
                <span>
                    {{ countryInfo.region }}
                </span>
            </p>
            <p>
                <b>Capital:</b>
                <span>
                    {{ countryInfo.capital?.[0] }}
                </span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["countryInfo"],
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.countrycard {
    width: 100%;
    border-radius: 7px;
    overflow: hidden;
    cursor: pointer;
    &__image {
        aspect-ratio: 4/2.5;
        object-fit: cover;
    }
    &__info {
        background-color: $primary-real-white;
        padding: 20px;
        padding-bottom: 40px;
        transition: 0.3s;
        &__name {
            margin-bottom: 15px;
        }
        p {
            margin-bottom: 5px;
            span {
                transition: 0.3s;
                color: $primary-dark-gray;
                margin-left: 5px;
                font-weight: lighter;
            }
        }
    }
}
:root.darkmode .countrycard {
    &__info {
        background-color: $darkmode-midnight;
        color: $primary-white;
        p {
            span {
                color: $primary-gray;
            }
        }
    }
}
</style>
