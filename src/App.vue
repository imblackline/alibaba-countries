<template>
    <SmartHeader />
    <router-view />
</template>

<script>
import SmartHeader from "@/components/Smart/Header/SmartHeader.vue";
import { useStore } from "vuex";
export default {
    components: { SmartHeader },
    setup() {
        const store = useStore();
        if (localStorage.getItem("user-theme")) {
            store.commit("SET_THEME", localStorage.getItem("user-theme"));
        } else {
            store.commit("SET_THEME", "light");
        }
    },
};
</script>

<style lang="scss">
#app {
    display: flex;
    flex-direction: column;
    background-color: $primary-light-gray;
    transition: 0.3s;
}
:root.darkmode #app {
    background-color: $darkmode-dark-midnight;
}
</style>
