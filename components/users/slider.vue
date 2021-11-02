<template>
    <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper z-0">
            <div class="swiper-slide" v-for="sl in sliders" :key="sl.id">
                <div class="flex flex-wrap">
                    <div class="w-1/12 hidden lg:block bg-gray-100 dark:bg-acient-900 transition duration-300"></div>
                    <div class="w-full lg:w-11/12">
                        <div class="relative py-20 lg:py-44 flex content-center items-center justify-center min-h-screen-75 w-screen">
                            <div class="absolute top-0 w-full h-full bg-center bg-cover" :style="`background-image: url('/images/${sl.image}');`">
                                <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
                            </div>
                            <div class="container relative mx-auto">
                                <div class="items-center flex flex-wrap">
                                    <div class="w-full lg:w-8/12 px-4 mr-auto text-left">
                                        <div class="pr-12">
                                            <h1 class="text-white font-semibold text-5xl tracking-wider">
                                                {{sl.title}}
                                            </h1>
                                            <p class="mt-4 text-lg text-gray-200 font-medium tracking-wider max-w-xl mb-4">
                                                {{sl.description}}
                                            </p>
                                            <button class="mt-3 w-full inline-flex justify-center rounded-full border border-gray-300 shadow-sm px-10 py-2 bg-white text-base text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-xl items-center">
                                                <span class="mr-4 font-semibold text-indigo-800">Read more</span>
                                                <svg class="h-6 w-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style="transform: translateZ(0px)">
                                <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                                    <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
export default {
    props:{
		sliders:{
			required:false,
			type:Array
		}
	},
    data() {
        return {
            swiperOption: {
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                grabCursor: true,
                // effect: "creative",
                // creativeEffect: {
                //     prev: {
                //         shadow: true,
                //         translate: [0, 0, -400],
                //     },
                //     next: {
                //         translate: ["100%", 0, 0],
                //     },
                // },
                lazy: true,
                loop: true,
                breakpoints: {
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 40
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    }
                }
            },
        }
    },
    mounted() {
        this.mySwiper.slideTo(1, 1000, false)
    },
}
</script>
<style>
    .swiper-pagination{
        @apply mb-12;
    }
    .swiper-pagination-bullet {
        width: 15px;
        height: 15px;
        text-align: center;
        line-height: 15px;
        font-size: 12px;
        color: #000;
        margin: 0 10px;
        @apply bg-gray-100 bg-opacity-90;
        /* background: rgba(0, 0, 0, 0.2); */
    }

      .swiper-pagination-bullet-active {
        color: #fff;
        @apply bg-white;
      }
</style>