<template>
    <div class="pt-15">
        <banner :category="category"/>

        <!-- <div class="container mx-auto"> -->
            <div class="py-12 bg-white dark:bg-gray-900 transition duration-300 mr-40 mt-14" v-if="category != null">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="lg:text-center" v-if="category != null">
                        <h2 class="mt-2 text-3xl leading-8 font-bold text-orange-600 dark:text-white uppercase sm:text-4xl tracking-wider">
                            {{category.h1}}
                        </h2>
                        <p class="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-500 lg:mx-auto">
                            {{category.description}}
                        </p>
                    </div>

                    <template v-if="category.slug == 'careers'">
                        
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
                            <div class="col-span-1">
                                <div class="mt-2 w-full bg-white dark:bg-acient-700 shadow-xl rounded-lg relative overflow-hidden">
                                    <div class="bg-indigo-700 dark:bg-gray-800 h-40 rounded-t-lg absolute w-full z-0"></div>
                                    <div class="flex flex-col overflow-y-auto h-full p-4 space-y-4">
                                        <div class="flex flex-col z-10 ml-4 text-white text-center">
                                            <h1 class="text-2xl font-semibold mb-2">General Ledger Accountant</h1>
                                            <p class="text-gray-200 font-medium text-sm mb-1">The Desk of Head of Human Resource</p>
                                        </div>
                                        <div class="border-0 border-t-4 border-indigo-500 dark:border-gray-500 rounded z-10 shadow-md text-sm">
                                            <div class="bg-white dark:bg-gray-700 border border-t-0 dark:border-gray-700 rounded-t-none rounded-b flex flex-col space-y-2">
                                                <div class="px-6 py-4 flex flex-wrap items-center justify-between gap-3">
                                                    <div class="font-semibold text-black dark:text-white capitalize">Requirement:</div>
                                                    <a href="/files/General-Ledger-Accountant-Metropolitan-National-Sacco-Ltd.pdf" target="_blank" class="bg-indigo-700 hover:bg-gray-900 rounded-lg text-white flex flex-row gap-2 py-2 px-3 focus:outline-none font-semibold">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor" class="w-5 h-5">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                                                            </path>
                                                        </svg>
                                                        Download file
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </template>

                    <template v-else-if="category.slug == 'gallery'">
                        <div class="container mx-auto mb-20" v-for="ct in category.photosgrouping" :key="ct.id">
                            <h3 class="mt-8 leading-8 text-center font-semibold text-orange-600 dark:text-white uppercase text-xl tracking-wider">
                                {{ct.name}}
                            </h3>

                            <div class="grid grid-cols-4 gap-10 mt-3">
                                <div class="col-span-1 bg-red-200 h-40 w-full" v-for="img in ct.photos" :key="img.id" @click="index = img.id">
                                    <a :href="`/photos/${img.image}`" :data-fancybox="ct.name" :data-caption="img.description">
                                        <img :src="`/photos/${img.image}`" :alt="`${img.description}`" class=" rounded-md shadow-md">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </template>

                    <template v-else-if="category.slug == 'tenders'">

                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
                            <div class="col-span-1">
                                <div class="mt-2 w-full bg-white dark:bg-acient-700 shadow-xl rounded-lg relative overflow-hidden">
                                    <div class="bg-indigo-700 dark:bg-gray-800 h-40 rounded-t-lg absolute w-full z-0"></div>
                                    <div class="flex flex-col overflow-y-auto h-full p-4 space-y-4">
                                        <div class="flex flex-col z-10 ml-4 text-white text-center">
                                            <p class="text-2xl font-semibold mb-4">RFP for Consultancy</p>
                                            <p class="text-gray-200 font-medium text-sm mb-1">RFP for Consultancy to Conduct Business Process Review and Supervision of a SACCO Core System and Alternative Channels</p>
                                        </div>
                                        <div class="border-0 border-t-4 border-indigo-500 dark:border-gray-500 rounded z-10 shadow-md text-sm">
                                            <div class="bg-white dark:bg-gray-700 border border-t-0 dark:border-gray-700 rounded-t-none rounded-b flex flex-col space-y-2">
                                                <div class="px-6 py-4 flex flex-wrap items-center justify-center gap-3">
                                                    <a href="/files/General-Ledger-Accountant-Metropolitan-National-Sacco-Ltd.pdf" target="_blank" class="bg-indigo-700 hover:bg-gray-900 rounded-lg text-white flex flex-row gap-2 py-2 px-3 focus:outline-none font-semibold">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor" class="w-5 h-5">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                                                            </path>
                                                        </svg>
                                                        Download file
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </template>

                    <template v-else-if="category.slug == 'banking-front-office' || category.slug == 'saving-loan-back-office'">
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
                    </template>

                    <template v-else>
                        Please make sure you are in the right URL
                    </template>
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
            images: [
                { title:'img 1', url: '/images/mission.jpg' },
                { title:'img 2', url: '/images/vision.jpg' },
            ],
            index: null,
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