<template>
    <div class="searchbar">
        <input
            type="text"
            class="searchbar__input"
            placeholder="Search for a country..."
            v-model="searchInput"
        />
        <span class="material-icons-round searchbar__icon"> search </span>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import { computed, watch } from "@vue/runtime-core";
export default {
    setup() {
        const route = useRoute();
        const router = useRouter();
        const searchInput = ref();
        const pathQuery = computed(() => route.query);
        const searchQuery = computed(() => route.query.search);
        watch(
            searchQuery,
            () => {
                searchInput.value = searchQuery.value;
            },
            {
                immediate: true,
            },
        );
        watch(searchInput, () => {
            if (
                searchInput.value &&
                searchInput.value !== " " &&
                pathQuery.value.region
            ) {
                router.push(
                    `/?search=${searchInput.value}&region=${pathQuery.value.region}`,
                );
            } else if (
                searchInput.value &&
                searchInput.value !== " " &&
                !pathQuery.value.region
            ) {
                router.push(`/?search=${searchInput.value}`);
            } else if (
                (!searchInput.value || searchInput.value === " ") &&
                pathQuery.value.region
            ) {
                router.push(`/?region=${pathQuery.value.region}`);
            } else {
                router.push(`/`);
            }
        });
        return { searchQuery, searchInput };
    },
};
</script>

<style lang="scss" scoped>
.searchbar {
    position: relative;
    &__input {
        padding: 18px 60px;
        width: 400px;
        border-radius: 5px;
        box-shadow: 0 0 3px rgba($primary-gray, 0.3);
        font-size: 1rem;
        background-color: $primary-real-white;
        transition: 0.3s;
        &::placeholder {
            color: $primary-gray;
        }
    }
    &__icon {
        color: rgba($primary-dark-gray, 0.6);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 25px;
        margin: auto;
        transition: 0.3s;
        height: fit-content;
    }
    @media (max-width: 500px) {
        width: 100%;
        &__input{
            width: 100%;
        }
    }
}
:root.darkmode .searchbar {
    &__input {
        background-color: $darkmode-midnight;
        box-shadow: 0 0 3px rgba($primary-gray, 0.3);
        color: $primary-white;
        &::placeholder {
            color: $primary-gray;
        }
    }
    &__icon {
        color: rgba($primary-gray, 0.6);
    }
}
</style>
