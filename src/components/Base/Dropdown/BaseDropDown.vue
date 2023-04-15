<template>
    <div class="dropdown" v-click-outside="closeOptions">
        <slot name="select">
            <div
                class="dropdown__select"
                @click="isShowOptions = !isShowOptions"
            >
                {{ selectedOption ? selectedOption : title }}
                <span
                    class="material-icons-round dropdown__select__icon"
                    :class="{ 'dropdown__select__icon--show': isShowOptions }"
                >
                    expand_more
                </span>
            </div>
        </slot>
        <slot name="option">
            <div
                class="dropdown__options"
                :class="{ 'dropdown__options--show': isShowOptions }"
            >
                <div
                    class="dropdown__options__option"
                    :class="{
                        'dropdown__options__option--selected':
                            option.name === selectedOption,
                    }"
                    v-for="option in options"
                    :key="option"
                    @click="selectOption(option)"
                >
                    {{ option.name }}
                </div>
            </div>
        </slot>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
    props: ["title", "options", "selectedOption"],
    emits: ["selectOption"],
    setup(props, { emit }) {
        const isShowOptions = ref(false);
        const selectOption = (option) => {
            if (props.selectedOption === option.name) {
                emit("selectOption", undefined);
            } else {
                emit("selectOption", option);
            }
        };
        const closeOptions = () => {
            isShowOptions.value = false;
        };
        return { selectOption, isShowOptions, closeOptions };
    },
};
</script>

<style lang="scss" scoped>
.dropdown {
    position: relative;
    &__select {
        padding: 10px 20px;
        transition: 0.3s;
        background-color: $primary-real-white;
        border-radius: 4px;
        color: $darkmode-midnight;
        width: 210px;
        box-shadow: 0 0 7px rgba($primary-gray, 0.3);
        padding: 18px 20px;
        cursor: pointer;
        font-size: 1rem;
        user-select: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &__icon {
            margin-left: 20px;
            transition: 0.3s;
            &--show {
                transform: rotate(180deg);
            }
        }
    }
    &__options {
        user-select: none;
        position: absolute;
        width: 100%;
        margin-top: 5px;
        background-color: $primary-real-white;
        border-radius: 5px;
        transition: 0.3s;
        box-shadow: 0 0 7px rgba($primary-gray, 0.3);
        padding: 0;
        max-height: 0;
        overflow: hidden;
        opacity: 0;
        visibility: hidden;
        &--show {
            opacity: 1;
            visibility: visible;
            max-height: 500px;
            padding: 10px 0;
        }
        &__option {
            border-radius: 5px;
            background-color: $primary-real-white;
            padding: 10px 20px;
            cursor: pointer;
            transition: 0.3s;
            &:hover {
                background-color: rgba($mental-light, 0.2);
            }
            &--selected {
                background-color: rgba($mental-light, 0.8);
                &:hover {
                    background-color: rgba($mental-light, 0.8);
                }
            }
        }
    }
}
:root.darkmode .dropdown {
    &__select {
        background-color: $darkmode-midnight;
        color: $primary-white;
        box-shadow: 0 0 7px $darkmode-dark-midnight;
    }
    &__options {
        background-color: $darkmode-midnight;
        box-shadow: 0 0 7px $darkmode-dark-midnight;
        &__option {
            background-color: $darkmode-midnight;
            color: $primary-white;
            &:hover {
                background-color: rgba($mental-light, 0.1);
            }
            &--selected {
                background-color: rgba($mental-light, 0.2);
                &:hover {
                    background-color: rgba($mental-light, 0.2);
                }
            }
        }
    }
}
</style>
