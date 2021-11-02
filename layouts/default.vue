<template>
    <div>
        <the-header />
            <Nuxt />
        <the-footer />
    </div>
</template>

<script>
import TheHeader from '@/layouts/partials/TheHeader'
import TheFooter from '@/layouts/partials/TheFooter'
export default {
    head: {
        bodyAttrs: {
            class: 'bg-gray-100 dark:bg-acient-900 transition duration-150'
        }
    },
    components:{
        TheHeader,TheFooter
    }
}
</script>