<template>
    <div class="pt-15">
        <banner :category="category"/>

        <!-- <div class="container mx-auto"> -->
            <div class="py-12 bg-white dark:bg-gray-900 transition duration-300 mr-40 mt-14">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="lg:text-center" v-if="category != null">
                        <h2 class="mt-2 text-3xl leading-8 font-bold text-orange-600 dark:text-white uppercase sm:text-4xl tracking-wider">
                            {{category.h1}}
                        </h2>
                        <p class="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-500 lg:mx-auto">
                            {{category.description}}
                        </p>
                    </div>

                    <div class="mt-14">
                        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-14">
                            <div class="relative" v-for="dt in data" :key="dt.id">
                                <div class="flex flex-col gap-3">
                                    <div class="w-full">
                                        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-700 bg-opacity-5 text-white">
                                            <img class="h-6 w-auto" :src="`/icons/${dt.icon}`" alt="">
                                        </div>
                                    </div>
                                    <div class="w-full">
                                        <p class="text-lg leading-6 font-semibold text-orange-600 dark:text-white">{{dt.title}}</p>
                                    </div>
                                    <div class="w-full">
                                        <dd class="text-base text-gray-700 dark:text-gray-400 mb-2" v-for="sdt in dt.servicedetails" :key="sdt.id">
                                            {{sdt.description}}
                                        </dd>
                                    </div>
                                </div>
                            </div>

                        </dl>
                    </div>
                </div>
            </div>
        <!-- </div> -->
    </div>
</template>
<script>
import banner from "~/components/banner.vue";
export default {
    components: { banner },
    data() {
        return {
            data: [],
            category: null,
        };
    },
    async asyncData({ params, app, route }) {
        let response = await app.$axios.$get("services", {
            params: {
                category: params.slug,
                // ...route.query,
            }
        });
        return {
            data: response.data.data,
            category: response.category,
            // meta: response.data.meta,
        };
    },
}
</script>
<style lang="">
    
</style>