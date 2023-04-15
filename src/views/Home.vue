<template>
    <div class="home">
        <SmartTopBar class="home__topbar" />
        <SmartCountryList />
    </div>
</template>

<script>
import SmartTopBar from "@/components/Smart/Home/SmartTopBar.vue";
import SmartCountryList from "@/components/Smart/Home/SmartCountryList.vue";
export default {
    name: "Home",
    components: {
        SmartCountryList,
        SmartTopBar,
    },
};
</script>

<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
    padding: 50px 60px;
    &__topbar {
      margin-bottom: 40px;
    }
    @media (max-width: 500px) {
      padding: 20px 25px;
    }
}
</style>
