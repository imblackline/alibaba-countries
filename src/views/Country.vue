<template>
    <div class="countryContainer">
        <div class="countryContainer__topbar">
            <button
                class="countryContainer__topbar__button"
                @click="$router.go(-1)"
            >
                <span
                    class="material-icons-round countryContainer__topbar__button__icon"
                >
                    keyboard_backspace
                </span>
                Back
            </button>
        </div>
        <Suspense>
            <SmartCountry />
            <template #fallback>
                <SmartCountrySkeleton />
            </template>
        </Suspense>
    </div>
</template>

<script>
import SmartCountry from "@/components/Smart/Country/SmartCountry.vue";
import SmartCountrySkeleton from "@/components/Smart/Country/SmartCountrySkeleton.vue";
export default {
    components: { SmartCountry,SmartCountrySkeleton },
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.countryContainer {
    width: 100%;
    height: 100%;
    padding: 50px 60px;
    display: flex;
    flex-direction: column;
    &__topbar {
        width: 100%;
        display: flex;
        margin-bottom: 50px;
        &__button {
            display: flex;
            align-items: center;
            padding: 7px 35px;
            background-color: $primary-real-white;
            font-size: 1rem;
            border-radius: 5px;
            box-shadow: 0 0 7px rgba($primary-gray, 1);
            color: $primary-dark-gray;
            transition: 0.3s;
            &__icon {
                transition: 0.3s;
                margin-right: 15px;
            }
            &:hover & {
                &__icon {
                    margin-right: 20px;
                }
            }
        }
    }
    @media (max-width: 500px) {
        padding: 20px;
        &__topbar {
            margin-bottom: 20px;
        }
    }
}
:root.darkmode .countryContainer {
    &__topbar {
        &__button {
            background-color: $darkmode-midnight;
            box-shadow: 0 0 7px rgba($primary-real-black, 0.4);
            color: $primary-light-gray;
        }
    }
}
</style>
