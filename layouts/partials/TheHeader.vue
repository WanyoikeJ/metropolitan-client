<template>
    <nav class="fixed z-30 w-full">
        <div class="relative bg-white dark:bg-gray-900 shadow-md">
            <div class="max-w-7xl mx-auto px-4 md:px-0">
                <div class="flex justify-between items-center border-b border-orange-600 py-3 md:justify-start md:space-x-10">
                    <div class="flex justify-start lg:w-0 lg:flex-1">
                        <nuxt-link :to="{name:'index'}">
                            <span class="sr-only">Metropolitan</span>
                            <img class="h-8 w-auto sm:w-full sm:h-auto" src="/brand/metropolitan.png" alt="">
                        </nuxt-link>
                    </div>
                    <div class="-mr-2 -my-2 md:hidden">
                        <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                            <span class="sr-only">Open menu</span>
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    <nav class="hidden lg:flex space-x-10">
                        <div class="relative" v-for="ct in categories" :key="ct.id" @mouseover="showMenu(ct.id)" @mouseleave="hideMenu(ct.id)">
                            <button type="button" class="text-indigo-700 dark:text-gray-300 group bg-white dark:bg-gray-900 rounded-md inline-flex items-center text-base font-medium hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600" aria-expanded="false">
                                <template v-if="ct.children && ct.children.length">
                                    <span>{{ct.name}}</span>
                                    <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </template>
                                <template v-else>
                                    <nuxt-link exact-active-class="text-ornage-600" :to="{name: ct.folder, params:{slug:ct.slug}}">{{ct.name}}</nuxt-link>
                                </template>
                            </button>
                            <div class="absolute w-full h-3">&nbsp;</div>
                            <template v-if="ct.children && ct.children.length">
                                <div class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/4" :class="dropMenuOpen == ct.id ? 'block animate__animated animate__fadeIn animate__faster': 'hidden'">
                                    <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div class="relative grid gap-6 bg-white dark:bg-gray-900 px-5 py-6 sm:gap-8 sm:p-8">
                                            <nuxt-link v-for="ch in ct.children" :key="ch.id" :to="{name:'service-slug', params:{service:ct.slug, slug:ch.slug}}" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-acient-900">
                                                <img src="/icons/Icons-22.png" class="flex-shrink-0 h-6 w-6" alt="acient-logo">
                                                <div class="ml-4">
                                                    <p class="text-base font-medium text-gray-900 dark:text-white">
                                                        {{ch.name}}
                                                    </p>
                                                    <p class="mt-1 text-sm text-gray-500">
                                                        Get a better understanding of where your traffic is coming from.
                                                    </p>
                                                </div>
                                            </nuxt-link>
                                        </div>
                                        <div class="px-5 py-5 bg-gray-50 dark:bg-gray-900  space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                            <div class="flow-root">
                                                <a href="#" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-acient-900">
                                                    <svg class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                    <span class="ml-3">Contact Help Center</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </nav>

                    <div class="hidden lg:flex items-center justify-end md:flex-1 lg:w-0">
                        <div class="flex items-center space-x-4 pr-4" @click="changetheme()">
                            <svg v-if="$colorMode.preference == 'light'" class="w-6 h-6 cursor-pointer text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>

                            <svg v-if="$colorMode.preference == 'dark'" class="w-6 h-6 cursor-pointer text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>

                            <svg v-if="$colorMode.preference == 'system'" class="w-6 h-6 cursor-pointer text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17 9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/></svg>
                        </div>

                        <template v-if="!$auth.loggedIn">
                            <nuxt-link :to="{name:'auth-user'}">
                                <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-6 h-6 text-indigo-700 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 16-4-4m0 0 4-4m-4 4h14m-5 4v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v1"/></svg>
                            </nuxt-link>
                        </template>
                        <template v-else>
                            <div class="relative">
                                <a href="#" @click.prevent="logout">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 w-6 h-6 text-indigo-700 dark:text-white" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 3a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1zm10.293 9.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 1 0-1.414 1.414L14.586 9H7a1 1 0 1 0 0 2h7.586l-1.293 1.293z" clip-rule="evenodd"/></svg>
                                </a>
                                <div class="absolute bottom-0 right-0 max-w-min min-w-min -mb-11 rounded-b-md py-1 px-2.5 bg-white dark:bg-gray-900 text-sm capitalize font-medium text-indigo-700 dark:text-white shadow-md">{{$auth.user.name}}</div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>

            <!--
                Mobile menu, show/hide based on mobile menu state.

                Entering: "duration-200 ease-out"
                From: "opacity-0 scale-95"
                To: "opacity-100 scale-100"
                Leaving: "duration-100 ease-in"
                From: "opacity-100 scale-100"
                To: "opacity-0 scale-95"
            -->
            <!-- <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div class="pt-5 pb-6 px-5">
                        <div class="flex items-center justify-between">
                        <div>
                            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
                        </div>
                        <div class="-mr-2">
                            <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span class="sr-only">Close menu</span>
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            </button>
                        </div>
                        </div>
                        <div class="mt-6">
                        <nav class="grid gap-y-8">
                            <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                            <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <span class="ml-3 text-base font-medium text-gray-900">
                                Analytics
                            </span>
                            </a>

                            <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                            <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                            </svg>
                            <span class="ml-3 text-base font-medium text-gray-900">
                                Engagement
                            </span>
                            </a>

                            <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                            <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span class="ml-3 text-base font-medium text-gray-900">
                                Security
                            </span>
                            </a>

                            <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                            <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                            <span class="ml-3 text-base font-medium text-gray-900">
                                Integrations
                            </span>
                            </a>

                            <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                            <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <span class="ml-3 text-base font-medium text-gray-900">
                                Automations
                            </span>
                            </a>
                        </nav>
                        </div>
                    </div>
                    <div class="py-6 px-5 space-y-6">
                        <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                        <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                            Pricing
                        </a>

                        <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                            Docs
                        </a>

                        <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                            Help Center
                        </a>

                        <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                            Guides
                        </a>

                        <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                            Events
                        </a>

                        <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                            Security
                        </a>
                        </div>
                        <div>
                        <a href="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                            Sign up
                        </a>
                        <p class="mt-6 text-center text-base font-medium text-gray-500">
                            Existing customer?
                            <a href="#" class="text-indigo-600 hover:text-indigo-500">
                            Sign in
                            </a>
                        </p>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            dropMenuOpen: null,
            theme: null
        }
    },
    computed: {
        ...mapGetters({
            categories: "categories",
        }),
    },
    methods: {
        showMenu(id){
            this.dropMenuOpen = id
        },
        hideMenu(id){
            this.dropMenuOpen = null
        },
        logout() {
            this.$auth.logout();
        },
        changetheme(){
            this.theme++

            if (this.theme > 2) {
                this.theme = 1
            }
            // var color = this.theme > 3 ? 1 : this.theme;

            if (this.theme == 1) {
                this.$colorMode.preference = 'dark'
            }else if (this.theme == 2) {
                this.$colorMode.preference = 'light'
            }else if (this.theme == 3) {
                this.$colorMode.preference = 'system'
            } else {
                this.$colorMode.preference = 'light'
            }

        },
    },
    mounted() {
        if (this.$colorMode.preference == 'dark') {
            this.theme = 1
        }else if (this.$colorMode.preference == 'light') {
            this.theme = 2
        }else if (this.$colorMode.preference == 'system') {
            this.theme = 3
        } else {
            
        }
    },
}
</script>

<style>

</style>