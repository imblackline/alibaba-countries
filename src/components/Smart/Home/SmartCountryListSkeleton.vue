<template>
    <div class="skeletonList">
        <div class="skeletonList__card" v-for="i in 10" :key="i">
            <div class="skeletonList__card__image"></div>
            <div class="skeletonList__card__info"></div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
@keyframes pulse-bg {
    0% {
        background-color: #ddd;
    }
    50% {
        background-color: #ebebeb;
    }
    100% {
        background-color: #ddd;
    }
}

.skeletonList {
    width: 100%;
    height: 100%;
    display: inline-flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 100px;
    padding-bottom: 200px;

    &__card {
        width: 15%;
        transition: 0.3s;
        height: 250px;
        border-radius: 10px;
        background-color: #ddd;
        animation: pulse-bg 1s infinite;
    }
    @media (max-width: 1250px) {
        gap: 50px;
        &__card {
            width: 20%;
        }
    }
    @media (max-width: 900px) {
        gap: 40px;
        &__card {
            width: 25%;
        }
    }
    @media (max-width: 700px) {
        gap: 30px;
        &__card {
            width: 35%;
        }
    }
    @media (max-width: 500px) {
        gap: 20px;
        &__card {
            width: 100%;
        }
    }
}
</style>
