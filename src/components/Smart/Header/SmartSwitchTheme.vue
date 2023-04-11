<template>
    <div class="switchTheme" @click="changeTheme">
        <span
            class="material-icons-outlined switchTheme__icon"
            v-if="theme === 'light'"
        >
            dark_mode
        </span>
        <span class="material-icons switchTheme__icon" v-else> dark_mode </span>
        <div class="switchTheme__text">
            {{ theme === "light" ? "Dark Mode" : "Light Mode" }}
        </div>
    </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
    setup() {
        const store = useStore();
        const theme = computed(() => store.state.theme);
        const changeTheme = () => {
            store.commit("TOGGLE_THEME");
        };
        return { changeTheme, theme };
    },
};
</script>

<style lang="scss" scoped>
.switchTheme {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    user-select: none;
    &__text {
        margin-left: 10px;
        transition: 0.3s;
    }
    &__icon {
        transition: 0.3s;
    }
    &:hover &__icon {
        transform: scale(1.1) rotate(20deg);
    }
}
</style>
