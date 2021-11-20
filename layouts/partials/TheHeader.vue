<template>
    <nav class="fixed z-50 w-full">
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
                        <button @click="toggleMenu" type="button" class="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
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

            <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden" :class="menuOpen == true ? 'block ': 'hidden'">
                

                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="fixed inset-0 h-screen overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                    <div class="absolute inset-0 overflow-hidden">
                        <!--
                        Background overlay, show/hide based on slide-over state.

                        Entering: "ease-in-out duration-500"
                            From: "opacity-0"
                            To: "opacity-100"
                        Leaving: "ease-in-out duration-500"
                            From: "opacity-100"
                            To: "opacity-0"
                        -->
                        <div class="absolute inset-0 bg-black bg-opacity-75 transition-opacity" :class="menuOpen == true ? 'block': 'hidden'" aria-hidden="true"></div>

                        <div class="fixed inset-y-0 right-0 pl-10 max-w-xs w-full flex h-screen" :class="menuOpen == true ? ' animate-slidein block': 'hidden'">
                            
                            <!--
                                Slide-over panel, show/hide based on slide-over state.

                                Entering: "transform transition ease-in-out duration-500 sm:duration-700"
                                From: "translate-x-full"
                                To: "translate-x-0"
                                Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
                                From: "translate-x-0"
                                To: "translate-x-full"
                            -->
                            <div class="relative w-screen max-w-xs">
                                <!--
                                Close button, show/hide based on slide-over state.

                                Entering: "ease-in-out duration-500"
                                    From: "opacity-0"
                                    To: "opacity-100"
                                Leaving: "ease-in-out duration-500"
                                    From: "opacity-100"
                                    To: "opacity-0"
                                -->

                                <div class="h-full flex flex-col py-6 bg-white dark:bg-gray-900 shadow-xl overflow-y-scroll">
                                    <div class="px-4 sm:px-6">
                                        <div class="flex justify-between border-b border-dashed border-indigo-700 border-opacity-40 pb-2">
                                            <nuxt-link :to="{name:'index'}">
                                                <span class="sr-only">Metropolitan</span>
                                                <img class="h-10 w-auto sm:w-full sm:h-auto" src="/brand/metropolitan.png" alt="">
                                            </nuxt-link>

                                            <button @click="toggleMenu" type="button" class="rounded-md text-gray-500 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600">
                                                <span class="sr-only">Close panel</span>
                                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="mt-4 relative flex-1 px-4 sm:px-6">
                                        <div class="absolute inset-0 px-4 sm:px-6">
                                            <div class="h-full" aria-hidden="true">
                                                <div class="pt-3 pb-8 space-y-10">

                                                    <div v-for="ct in categories" :key="ct.id">
                                                        <div class="flex">
                                                            <img src="/icons/Icons-22.png" class="flex-shrink-0 h-6 w-6" alt="acient-logo">
                                                            <div class="ml-4">
                                                                <p class="text-base font-medium text-gray-900 dark:text-white">
                                                                    {{ct.name}}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <ul role="list" class="ml-10 mt-3 flex flex-col space-y-3" v-if="ct.children.length">
                                                            <li class="flow-root" v-for="ch in ct.children" :key="ch.id">
                                                                <a href="#" class="-m-2 p-2 block text-gray-500">
                                                                    {{ch.name}}
                                                                </a>
                                                            </li>
                                                        </ul>
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

        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            dropMenuOpen: null,
            theme: null,
            menuOpen: false,
        }
    },
    computed: {
        ...mapGetters({
            categories: "categories",
        }),
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen
        },
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