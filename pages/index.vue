<template>
    <div class="pt-15">
        <!-- Slider section -->
        <slider :sliders="sliders"/>
            
        <!-- profile section -->
        <!-- <div class="container mx-auto"> -->
            <div class="flex flex-wrap w-full lg:-mt-10 relative z-10 gap-y-10">
                <div class="w-full lg:w-8/12 bg-white dark:bg-gray-900 transition duration-300 pt-20 pb-6 lg:pb-32">
                    <div class="mx-6 lg:mx-28 relative">
                        <h2 class="title-dashes tracking-wider text-lg text-gray-900 dark:text-gray-500">About Us</h2>
                        <p class="text-3xl lg:text-5xl text-orange-600 dark:text-white uppercase tracking-wider font-semibold my-12">Company profile</p>
                        <p v-for="(pr,i) in profile" :key="i" class="leading-relaxed mb-8 text-base text-gray-700 dark:text-gray-400">
                            {{pr.name}}
                        </p>
                    </div>
                </div>
                <div class="w-full lg:w-4/12 flex flex-wrap items-center justify-center px-4 lg:px-10">
                    <div>
                        <p class="text-orange-600 dark:text-white text-3xl lg:text-5xl capitalize tracking-wider font-extrabold text-center">100000+ members</p>
                        <p class="text-orange-600 dark:text-white text-base lg:text-xl capitalize tracking-wider font-bold text-center">8 Branches and 12 Business Centers</p>
                    </div>
                </div>
            </div>
        <!-- </div> -->
        
        <!-- Mission -->
        <div class="container px-4 mx-auto mt-16 lg:mt-0">
            <div class="flex flex-col lg:flex-row">
                <div class="w-full lg:w-1/2 relative z-20">
                    <div class="w-full pl-28">

                        <div class="relative">
                            <img src="/images/mission.jpg" class="relative w-full lg:-mt-16 z-10" alt="">
                            <div class="z-0 filter blur-xl absolute top-8 right-8 w-full h-full bg-cover transform scale-90 transition-opacity duration-500 opacity-60" style="background-image: url('/images/mission.jpg'); "></div>
                        </div>

                    </div>
                    <div class="w-full pr-20 relative">
                        <img src="/images/vision.jpg" class="relative w-full -mt-5 lg:-mt-16 z-10" alt="">
                        <div class="z-0 filter blur-xl absolute top-6 right-7 w-full h-full bg-cover transform scale-90 transition-opacity duration-500 opacity-60" style="background-image: url('/images/vision.jpg');"></div>

                    </div>
                </div>
                <div class="w-full lg:w-1/2 flex flex-wrap items-center lg:pl-20 pt-16 lg:pt-28">
                    <div>
                        <div class="grid grid-cols-1 gap-y-5">
                            <div class="col-span-1">
                                <p class="text-3xl lg:text-5xl text-orange-600 dark:text-white uppercase tracking-wider font-semibold mb-4">Mission</p>
                                <p class="leading-relaxed mb-8 text-base text-gray-700 dark:text-gray-400">
                                    “To be the leading financial service provider to our members and the community”
                                </p>
                            </div>
                            <div class="col-span-1">
                                <p class="text-3xl lg:text-5xl text-orange-600 dark:text-white uppercase tracking-wider font-semibold mb-4">Vision</p>
                                <p class="leading-relaxed mb-8 text-base text-gray-700 dark:text-gray-400">
                                    “To mobilize savings and offer productive and provident products and services at competitive cost within a changing business environment while upholding co-operative ideals”
                                </p>
                            </div>
                            <div class="col-span-1">
                                <p class="text-3xl lg:text-5xl text-orange-600 dark:text-white uppercase tracking-wider font-semibold mb-4">Core values</p>
                                <div class="flow-root">
                                    <ul>
                                        <li v-for="(cv, i) in corevalue" :key="i">
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
            </div>
        </div>

        <!-- Objectives -->
        <div class="container px-4 mx-auto mt-16 lg:mt-28">
            <div class="flex flex-col lg:flex-row">
                <div class="w-full lg:w-1/2">
                    <p class="text-3xl lg:text-5xl text-orange-600 dark:text-white uppercase tracking-wider font-semibold mb-5">Broad objectives</p>
                    <p class="leading-relaxed mb-8 text-base text-gray-700 dark:text-gray-400">
                        The above vision and mission statements have been realized through the following broad objectives:-
                    </p>
                    <div class="flow-root">
                        <ul>
                            <li v-for="(cv, i) in objectives" :key="i">
                                <div class="relative pb-3">
                                    <div class="relative flex items-start space-x-3">
                                        <div>
                                            <div class="relative px-1">
                                                <div class="h-5 w-5 border border-orange-600 dark:border-gray-400 p-1 rounded-full flex items-center justify-center">
                                                    <svg class="text-orange-600 dark:text-gray-400 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clip-rule="evenodd"/></svg>
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
                <div class="w-full lg:w-1/2 flex flex-wrap items-center justify-end lg:pl-16">
                    <div class="w-full relative">
                        <img src="/images/objective.jpg" class="relative w-full z-10" alt="">
                        <div class="z-0 filter blur-xl absolute top-5 right-5 w-full h-full bg-cover transform scale-90 transition-opacity duration-500 opacity-60" style="background-image: url('/images/objective.jpg');"></div>

                    </div>
                    <!-- <img src="/images/objective.jpg" class="w-full"> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import banner from '../components/banner.vue'
import { mapGetters } from 'vuex'
import Slider from '../components/users/slider.vue'
export default {
    components: { banner, Slider },
    data() {
        return {
            submitting: false,
            form:{
                email: null,
                password: null
            },
            profile:[
                {name: 'METROPOLITAN NATIONAL SACCO (since 1977) is a Deposit Taking SACCO licensed and regulated by the SACCO Societies Regulatory Authority (SASRA). Our core business is to primarily empower our membership financially through the provision of unique, progressive and innovative services ranging from but not limited to competitive savings products, flexible loans and investment vehicles.'},
                {name: 'We have a membership of over a hundred thousand from the entire country and drawn from Teachers Service Commission (TSC), Government Ministries, Parastatals, Kenya Defence Forces (KDF), National Police Service, Public and Private Universities, Colleges, Academies and the private sector among others.'},
                {name: 'We are ranked the 6th largest SACCO in asset base nationally as per the SASRA report of year 2018, currently with an asset base of 14.8 billion.'},
            ],
            corevalue:[
                {name:'Professionalism'},
                {name:'Integrity'},
                {name:'Customer Delight'},
                {name:'Collaboration'},
                {name:'Dynamism'},
                {name:'Honesty'},
            ],
            objectives:[
                {name:'Promotion of individual and group investment initiatives by acting as a financial intermediary to serve their needs'},
                {name:'Surveying and fulfilling members needs'},
                {name:'Development and maintenance of necessary public relations with private organizations, national and intermediate co-operative organizations'},
                {name:'Development and promotion of individual strong human resource base both at the technical and leadership levels'},
                {name:'Keeping up to date with the relevant technology'},
                {name:'Dissemination of information concerning Sacco operations to all Sacco members'},
                {name:'Expanding the existing products and services as may be necessary to meet members’ needs'},
            ]
        }
    },
    computed: {
        ...mapGetters({
            sliders: "sliders",
        }),
    },
    methods: {
        
    },
}
</script>
