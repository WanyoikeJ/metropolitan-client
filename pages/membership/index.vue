<template>
    <div class="pt-15">
        <!-- Banner -->
        <banner :category="category"/>

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

                <div class="flex flex-col lg:flex-row">
                    <div class="w-full lg:w-1/2 flex flex-wrap items-start lg:pl-20 pt-16 lg:pt-28">
                        <div>
                            <div class="grid grid-cols-1 gap-y-5">
                                <div class="col-span-1">
                                    <p class="text-xl lg:text-3xl text-orange-600 dark:text-white uppercase tracking-wider font-semibold mb-4">Membership Requirements</p>
                                    <p class="leading-relaxed mb-8 text-base text-gray-700 dark:text-gray-400">
                                        Inline with the cooperative principals, our membership is open to all persons.
                                    </p>
                                    <div class="flow-root">
                                        <ul>
                                            <li v-for="(cv, i) in requirements" :key="i">
                                                <div class="relative pb-3">
                                                    <div class="relative flex items-center space-x-3">
                                                        <div>
                                                            <div class="relative px-1">
                                                                <div class="h-5 w-5 border border-orange-600 dark:border-gray-400 p-1 rounded-full flex items-center justify-center">
                                                                    <svg class="text-orange-600 dark:text-gray-400 w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clip-rule="evenodd"/></svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="min-w-0 flex-1 py-0">
                                                            <div class="text-gray-700 dark:text-gray-400 text-sm">
                                                                <p>{{cv.name}}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full lg:w-1/2 lg:pl-20 pt-16 lg:pt-28">
                        <p class="text-xl lg:text-3xl text-orange-600 dark:text-white uppercase tracking-wider font-semibold mb-4">Who is eligible to become a member?</p>
                        <p class="leading-relaxed mb-8 text-base text-gray-700 dark:text-gray-400">
                            Inline with the cooperative principals, our membership is open to all persons.
                        </p>
                        <div class="flow-root">
                            <ul>
                                <li v-for="(cv, i) in eligible" :key="i">
                                    <div class="relative pb-3">
                                        <div class="relative flex items-center space-x-3">
                                            <div>
                                                <div class="relative px-1">
                                                    <div class="h-5 w-5 border border-orange-600 dark:border-gray-400 p-1 rounded-full flex items-center justify-center">
                                                        <svg class="text-orange-600 dark:text-gray-400 w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clip-rule="evenodd"/></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="min-w-0 flex-1 py-0">
                                                <div class="text-gray-700 dark:text-gray-400 text-sm">
                                                    <p>{{cv.name}}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        
        <!-- Subscription Form -->
        <div class="py-12 bg-white dark:bg-gray-900 transition duration-300 lg:ml-40 mt-14">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="lg:text-center">
                    <h2
                        class="mt-2 text-3xl leading-8 font-bold text-orange-600 dark:text-white uppercase sm:text-4xl tracking-wider">
                        Join Us
                    </h2>
                    <p class="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-500 lg:mx-auto">
                        Apply by filling the form below.
                    </p>
                </div>
                <div class="flex flex-col lg:flex-row">
                    <div class="w-full lg:w-full flex flex-wrap items-center lg:pt-16">
                        <div>

                            <div class="mt-10 sm:mt-0">
                                <div class="md:grid md:grid-cols-3 md:gap-6">
                                    <div class="md:col-span-1">
                                        <div class="px-4 sm:px-0">
                                            <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-white">Personal
                                                Information</h3>
                                            <p class="mt-1 text-sm text-gray-600 dark:text-gray-500">
                                                Use a permanent address where you can receive mail.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mt-5 md:mt-0 md:col-span-2">
                                        <form action="#" method="POST" autocomplete="off">
                                            <div class="shadow overflow-hidden sm:rounded-md">
                                                <div class="px-4 py-5 bg-white dark:bg-acient-900 sm:p-6">
                                                    <div class="grid grid-cols-6 gap-6">
                                                        <div class="col-span-6 sm:col-span-3">
                                                            <label for="first-name" class="block text-sm font-medium text-gray-700 dark:text-white">First
                                                                name</label>
                                                            <input type="text" name="first-name" id="first-name" class="mt-1 focus:ring-indigo-700 focus:border-indigo-700 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-900 dark:text-gray-400 rounded-md dark:bg-gray-800">
                                                        </div>

                                                        <div class="col-span-6 sm:col-span-3">
                                                            <label for="last-name" class="block text-sm font-medium text-gray-700 dark:text-white">Last
                                                                name</label>
                                                            <input type="text" name="last-name" id="last-name" class="mt-1 focus:ring-indigo-700 focus:border-indigo-700 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-900 dark:text-gray-400 rounded-md dark:bg-gray-800">
                                                        </div>

                                                        <div class="col-span-6 sm:col-span-6">
                                                            <label for="email-address" class="block text-sm font-medium text-gray-700 dark:text-white">Email address</label>
                                                            <input type="text" name="email-address" id="email-address" class="mt-1 focus:ring-indigo-700 focus:border-indigo-700 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-900 dark:text-gray-400 rounded-md dark:bg-gray-800">
                                                        </div>

                                                        <div class="col-span-6 sm:col-span-3">
                                                            <label for="street-address" class="block text-sm font-medium text-gray-700 dark:text-white">ID Number</label>
                                                            <input type="text" name="street-address" id="street-address" class="mt-1 focus:ring-indigo-700 focus:border-indigo-700 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-900 dark:text-gray-400 rounded-md dark:bg-gray-800">
                                                        </div>

                                                        <div class="col-span-6 sm:col-span-3">
                                                            <label for="city" class="block text-sm font-medium text-gray-700 dark:text-white">Phone Number</label>
                                                            <input type="text" name="city" id="city" class="mt-1 focus:ring-indigo-700 focus:border-indigo-700 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-900 dark:text-gray-400 rounded-md dark:bg-gray-800">
                                                        </div>

                                                        <div class="col-span-6">
                                                            <label for="region" class="block text-sm font-medium text-gray-700 dark:text-white">Employer</label>
                                                            <input type="text" name="region" id="region" class="mt-1 focus:ring-indigo-700 focus:border-indigo-700 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-900 dark:text-gray-400 rounded-md dark:bg-gray-800">
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div class="hidden sm:block" aria-hidden="true">
                                <div class="py-5">
                                    <div class="border-t border-gray-200 dark:border-gray-600"></div>
                                </div>
                            </div>

                            <div class="mt-10 sm:mt-0">
                                <div class="md:grid md:grid-cols-3 md:gap-6">
                                    <div class="md:col-span-1">
                                        <div class="px-4 sm:px-0">
                                            <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-white">Rejoining
                                                The Sacco ?</h3>
                                            <p class="mt-1 text-sm text-gray-600 dark:text-gray-500">
                                                Decide which communications you'd like to receive and how.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mt-5 md:mt-0 md:col-span-2">
                                        <form action="#" method="POST" autocomplete="off">
                                            <div class="shadow overflow-hidden sm:rounded-md">
                                                <div class="px-4 py-5 bg-white dark:bg-acient-900 space-y-6 sm:p-6">
                                                    <fieldset>
                                                        <div class="space-y-4">
                                                            <div class="flex items-center">
                                                                <input id="push-everything" name="push-notifications"
                                                                    type="radio"
                                                                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                                                                <label for="push-everything"
                                                                    class="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                                                    Everything
                                                                </label>
                                                            </div>
                                                            <div class="flex items-center">
                                                                <input id="push-email" name="push-notifications" type="radio"
                                                                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                                                                <label for="push-email"
                                                                    class="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                                                    Same as email
                                                                </label>
                                                            </div>
                                                            <div class="flex items-center">
                                                                <input id="push-nothing" name="push-notifications" type="radio"
                                                                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                                                                <label for="push-nothing"
                                                                    class="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-400">
                                                                    No push notifications
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                                <div class="px-4 py-3 bg-gray-50 dark:bg-gray-800 text-right sm:px-6">
                                                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
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
import banner from "~/components/banner.vue";
export default {
    components: { banner },
    data() {
        return {
            data: [],
            category: null,
            requirements:[
                {name:'A passsport photo '},
                {name:'A copy of your National Identification Card'},
                {name:'Kshs. 1000 membership fee'},
                {name:'Recent payslip for the employed'},
            ],
            eligible:[
                {name:'Salaried People'},
                {name:'Non Salaried People'},
                {name:'Business Entitie'},
                {name:'Minors'},
                {name:'Commissions'},
            ],
        };
    },
    async asyncData({ params, app, route }) {
        let response = await app.$axios.$get("services", {
            params: {
                category: 'membership',
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