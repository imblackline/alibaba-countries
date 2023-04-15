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
                <p class="skeleton__borders__border"></p>
                <p class="skeleton__borders__border"></p>
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
    &__info {
        width: 45%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        &__name {
            height: 50px;
            width: 350px;
            border-radius: 7px;
            background-color: #ddd;
            animation: pulse-bg 1s infinite;
            margin-bottom: 40px;
        }
        &__container {
            width: 100%;
            display: flex;
            justify-content: space-between;
            &__col {
                display: flex;
                flex-direction: column;
                &__row {
                    margin-bottom: 20px;
                    width: 250px;
                    border-radius: 50px;
                    height: 15px;
                    background-color: #ddd;
                    animation: pulse-bg 1s infinite;
                }
            }
        }
    }
    &__borders {
        margin-top: 35px;
        display: flex;
        &__border {
            background-color: #ddd;
            animation: pulse-bg 1s infinite;
            width: 100px;
            height: 35px;
            margin-right: 10px;
            border-radius: 3px;
            margin-bottom: 10px;
        }
    }
}
</style>
