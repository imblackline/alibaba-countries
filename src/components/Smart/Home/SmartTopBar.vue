<template>
    <div class="topbar">
        <SmartSearchBar />
        <SmartFilter />
    </div>
</template>

<script>
import SmartSearchBar from "./SmartSearchBar.vue";
import SmartFilter from "./SmartFilter.vue";
export default {
    components: { SmartSearchBar, SmartFilter },
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.topbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
