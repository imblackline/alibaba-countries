<template>
    <div class="skeleton">
        <div class="skeleton__image">
            <div></div>
        </div>
        <div class="skeleton__info">
            <h2 class="skeleton__info__name"></h2>
            <div class="skeleton__info__container">
                <div class="skeleton__info__container__col">
                    <p class="skeleton__info__container__col__row"></p>
                    <p class="skeleton__info__container__col__row"></p>
                    <p class="skeleton__info__container__col__row"></p>
                    <p class="skeleton__info__container__col__row"></p>
                    <p class="skeleton__info__container__col__row"></p>
                </div>
                <div class="skeleton__info__container__col">
                    <p class="skeleton__info__container__col__row"></p>
                    <p class="skeleton__info__container__col__row"></p>
                    <p class="skeleton__info__container__col__row"></p>
                </div>
            </div>
            <div class="skeleton__borders">
                <p class="skeleton__borders__border"></p>
            </div>
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
.skeleton {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    &__image {
        width: 40%;
        aspect-ratio: 4/3;
        background-color: $primary-gray;
        background-color: #ddd;
        animation: pulse-bg 1s infinite;
    }
}
</style>
