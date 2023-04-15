<template>
    <nav class="header">
        <h2 class="header__title">Where in the world?</h2>
        <SmartSwitchTheme />
    </nav>
</template>

<script>
import SmartSwitchTheme from "./SmartSwitchTheme.vue";
export default {
    components: { SmartSwitchTheme },
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.header {
    background-color: $primary-real-white;
    box-shadow: 0 1px 5px rgba($primary-gray, 0.3);
    padding: 25px 55px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.3s;
    @media (max-width: 500px) {
        padding: 15px 20px;
        font-size: 0.85rem;
    }
}
:root.darkmode .header {
    background-color: $darkmode-midnight;
    box-shadow: 0 1px 5px rgba($darkmode-dark-midnight, 0.3);
    color: $primary-white;
}
</style>
