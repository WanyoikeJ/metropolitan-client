<template>
    <div class="pt-15">
        <!-- Banner -->
        <banner :category="category"/>

        <!-- Downloadable files -->
        <div class="py-12 bg-white dark:bg-gray-900 transition duration-300 lg:mr-40 mt-14">
            <div class="max-w-7xl mx-auto px-4 sm:px-3 lg:px-1">
                <div class="lg:text-center" v-if="category != null">
                    <h2 class="mt-2 text-3xl leading-8 font-bold text-orange-600 dark:text-white uppercase sm:text-4xl tracking-wider">
                        {{category.h1}}
                    </h2>
                    <p class="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-500 lg:mx-auto">
                        {{category.description}}
                    </p>
                </div>

                <div class="flex flex-wrap items-center justify-center">
                    <div class="w-full md:w-1/2 lg:1/4">
                        <div class="mt-1 flex rounded-md shadow-sm">
                            <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                Search files:
                            </span>
                            <input type="text" v-model="serching" id="search" class="focus:ring-indigo-700 focus:border-indigo-700 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300">
                        </div>
                    </div>
                </div>

                <div class="flex flex-col lg:flex-row" v-if="banking.length">
                    <div class="w-full pt-8 lg:pt-16">
                        <p class="text-center text-xl font-semibold text-gray-700 dark:text-gray-400 mb-4">Banking (Front Office)</p>
                        <div class="grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
                            <div class="col-span-1" v-for="dw in banking" :key="dw.id">
                                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-700 border-dashed rounded-md">
                                    <div class="space-y-1 text-center">
                                        <svg class="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                        <div class="flex text-sm text-gray-600 dark:text-gray-400">
                                            <p>{{dw.name}}</p>
                                        </div>
                                        <p class="text-xs">
                                            <a :href="`/files/${dw.file}`" target="_blank" for="file-upload" class="relative cursor-pointer bg-white dark:bg-gray-900 rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                <span>Download</span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="py-12 bg-white dark:bg-gray-900 transition duration-300 lg:ml-40 mt-14">
            <div class="max-w-7xl mx-auto px-4 sm:px-3 lg:px-1">

                <div class="flex flex-col lg:flex-row" v-if="saving.length">
                    <div class="w-full pt-2 lg:pt-3">
                        <p class="text-center text-xl font-semibold text-gray-700 dark:text-gray-400 mb-4">Savings & Loans (Back Office)</p>
                        <div class="grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
                            <div class="col-span-1" v-for="dw in saving" :key="dw.id">
                                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-700 border-dashed rounded-md">
                                    <div class="space-y-1 text-center">
                                        <svg class="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                        <div class="flex text-sm text-gray-600 dark:text-gray-400">
                                            <p>{{dw.name}}</p>
                                        </div>
                                        <p class="text-xs">
                                            <a :href="`/files/${dw.file}`" target="_blank" for="file-upload" class="relative cursor-pointer bg-white dark:bg-gray-900 rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                <span>Download</span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            data: [],
            category: null,
            serching: null
        }
    },
    computed: {
        filteredDownloads(){
            var self = this
            if (this.serching == null) {
                return this.category.downloads
            }
            return this.category.downloads.filter(function(faq){
                return faq.name.toLowerCase().indexOf(self.serching) >=0
            });
        },
        banking(){
            return this.filteredDownloads.filter(function(faq){
                return faq.grouping == true
            });
        },
        saving(){
            return this.filteredDownloads.filter(function(faq){
                return faq.grouping == false
            });
        },
    },
    async asyncData({ params, app, route }) {
        let response = await app.$axios.$get("services", {
            params: {
                category: 'downloads',
            }
        });
        return {
            data: response.data.data,
            category: response.category,
        };
    },
}
</script>

<style>

</style>