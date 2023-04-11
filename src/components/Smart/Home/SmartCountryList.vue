<template>
    <div>

    </div>
</template>

<script>
import { inject } from '@vue/runtime-core'
export default {
    setup () {
        const axios = inject('axios')
        axios.get('https://restcountries.com/v3.1/all')

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>