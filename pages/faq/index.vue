<template>
    <div class="pt-15">
        <!-- Banner -->
        <banner :category="category"/>

        <!-- Faqs -->
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
                            Search FAQs Titles:
                            </span>
                            <input type="text" v-model="serching" id="search" class="focus:ring-indigo-700 focus:border-indigo-700 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300">
                        </div>
                    </div>
                </div>

                <div class="flex flex-col lg:flex-row">
                    <div class="w-full flex flex-wrap items-start lg:pl-20 pt-8 lg:pt-16">
                        <div>
                            <div class="flow-root" v-if="filteredFaqs.length">

                                <div class="grid grid-cols-1 lg:grid-cols-2">
                                    <div v-for="fa in filteredFaqs" :key="fa.id" class="col-span-1 relative flex space-x-6 bg-repeat-y pb-10" style="background-size:2px 6px;background-position:1.375rem 1.25rem;background-image:url(/images/line.svg);">

                                        <svg width="44" height="44" class="text-orange-600 bg-white dark:bg-gray-900 rounded-md p-1 flex-none h-11 w-11" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 12 2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>

                                        <div class="flex-1 py-0">
                                            <div class="text-gray-900 dark:text-gray-200 font-semibold capitalize text-lg mb-3">
                                                <p>{{fa.title}}</p>
                                            </div>
                                            <div class="text-gray-600 flex flex-wrap gap-3 dark:text-gray-400 text-base" v-if="fa.details.length">
                                                <p class="w-full" v-for="dt in fa.details" :key="dt.id">{{dt.description}}</p>
                                            </div>
                                        </div>
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
        filteredFaqs(){
            var self = this
            if (this.serching == null) {
                return this.category.faqs
            }
            return this.category.faqs.filter(function(faq){
                return faq.title.toLowerCase().indexOf(self.serching) >=0
            });
        },
    },
    async asyncData({ params, app, route }) {
        let response = await app.$axios.$get("services", {
            params: {
                category: 'faqs',
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