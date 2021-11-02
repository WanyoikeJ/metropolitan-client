<template>
    <div class="pt-15">
        <!-- banner -->
        <banner :category="category"/>

        <!-- branches -->
        <div class="py-12 bg-white dark:bg-gray-900 transition duration-300 lg:mr-40 mt-14">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="lg:text-center" v-if="category != null">
                    <h2 class="mt-2 text-3xl leading-8 font-bold text-orange-600 dark:text-white uppercase sm:text-4xl tracking-wider">
                        {{category.h1}}
                    </h2>
                    <p class="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-500 lg:mx-auto">
                        {{category.description}}
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8 lg:pt-16 gap-8" v-if="category.branches.length">
                    <div class="col-span-1 flex" v-for="br in category.branches" :key="br.id">
                        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg px-4 py-6 md:mx-4 my-4 w-full">
                            <div class="mx-auto h-44 bg-gray-200 rounded-md">
                                <iframe class="h-full w-full rounded-md" frameborder="0" 
                                    scrolling="no"
                                    marginheight="0"
                                    marginwidth="0"
                                    loading="lazy"
                                    :src="`${br.map}`"
                                    >
                                </iframe>
                            </div>
                            <div class="w-full mt-4 block text-xl uppercase text-gray-900 dark:text-white font-bold mx-auto">
                                {{br.town}}
                            </div>
                            <div class="font-medium text-sm text-gray-700 dark:text-gray-400 w-full mt-2 block mx-auto">
                                {{br.branch}}
                            </div>

                            <div class="flex items-center w-full px-3 mt-3">
                                <div class="px-2 text-gray-500 dark:text-gray-400 text-lg">
                                    <i class="far fa-at"></i>
                                </div>
                                <div class="ml-0">
                                    <div class="mr-auto text-sm font-light text-gray-800 dark:text-gray-100">{{br.email}}</div>
                                </div>
                            </div>

                            <div class="flex items-center gap-1 w-full px-3 mb-2" v-for="(tm, i) in br.branchnumbers" :key="i">
                                <div class="px-2 text-gray-500 dark:text-gray-400 text-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                                </div>
                                <div>
                                    <div class="mr-auto text-sm font-normal text-gray-800 dark:text-gray-100">{{tm.phone}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Service centers -->
        <div class="py-12 bg-white dark:bg-gray-900 transition duration-300 lg:ml-40 mt-14">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div class="py-12">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="lg:text-center">
                            <p class="text-3xl leading-8 uppercase font-bold tracking-wider text-orange-600 dark:text-white sm:text-4xl">
                                Service Centres
                            </p>
                            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                We have 12 service centres, details and contacts as follows:
                            </p>
                        </div>

                        <div class="mt-10" v-if="category.servicecenters.length">
                            <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">

                                <div class="relative" v-for="sc in category.servicecenters" :key="sc.id">
                                    <dt>
                                        <div class="absolute flex items-center justify-center h-10 w-10 rounded-md  bg-indigo-700 bg-opacity-5 text-white">
                                            <img class="h-6 w-auto" src="/icons/Icons-22.png" alt="">
                                        </div>
                                        <p class="ml-16 text-lg leading-6 uppercase font-semibold text-gray-900 dark:text-white">{{sc.town}}</p>
                                    </dt>
                                    <dd class="mt-2 ml-16 text-base text-gray-500">
                                        {{sc.branch}}
                                    </dd>
                                    <dd class="mt-2 ml-16 text-base text-gray-500">
                                        {{sc.phone}}
                                    </dd>
                                </div>

                            </dl>
                        </div>
                    </div>
                </div>



                
            </div>
        </div>

    </div>
</template>

<script>
import banner from '../../components/banner.vue'
export default {
    components: { banner },
    data(){
        return {
            data: [],
            category: null,
        }
    },
    async asyncData({ params, app, route }) {
        let response = await app.$axios.$get("services", {
            params: {
                category: 'branches',
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

<style>

</style>