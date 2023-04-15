<template>
    <div class="topbar">
        <SmartSearchBar />
        <SmartFilter class="topbar__filter"/>
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
    @media (max-width: 750px) {
        flex-direction: column;
        align-items: flex-start;
        &__filter{
            margin-top: 30px;
        }
    }
}
</style>
