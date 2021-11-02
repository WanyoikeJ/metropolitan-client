<template>
    <div class="py-5 bg-indigo-700 dark:bg-gray-900 px-10 text-white mt-20">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divider-white">
            <div class="col-span-1 px-10 flex items-center">
                <div>
                    <img src="/brand/white-logo.png" alt="">
                </div>
            </div>
            <div class="col-span-1 px-10 py-7 flex items-center">
                <div>
                    <span class="block capitalize text-xs font-bold mb-1">Opening hours:</span>
                    <p class="text-xs mb-1">Mon - Fri: 8:30am – 4:00pm</p>
                    <p class="text-xs mb-1">Saturday: 8:30am - 12:00 noon</p>

                    <span class="block capitalize text-xs font-bold mt-4 mb-1">Head office:</span>
                    <p class="text-xs mb-1">Chai House,</p>
                    <p class="text-xs mb-1">Ground Floor,Koinange Street,</p>
                    <p class="text-xs mb-1">P.O. Box 5684 - 00100, Nairobi</p>
                </div>
            </div>
            <div class="col-span-1 px-10 py-7 flex items-center">
                <div>
                    <span class="block capitalize text-xs font-bold mb-1">Get to know us:</span>
                    <p class="text-xs mb-1">Phone: 0709 641 000 | 0715 680 269</p>
                    <p class="text-xs mb-1">Email: info@metrosacco.co.ke</p>
                    <ul class="flex items-center flex-wrap gap-3 mt-5">
                        <li>
                            <svg width="20" height="20" fill="currentColor" class="text-white"><path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path></svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0.629 -26.25 7.492 14" class=" fill-current text-white"><path d="M7.629-18.375h-2.05v6.125H2.843v-6.125H.629v-2.543h2.215v-1.914q0-1.094.41-1.86.41-.765 1.162-1.162.752-.396 1.736-.396.438 0 .93.041.492.041.766.096l.273.027v2.16H7.027q-.765 0-1.107.397-.342.396-.342.97v1.641h2.434z"></path></svg>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -24.5 12.25 12.25" width="20" height="20" class="text-white fill-current"><path d="M2.734-12.25H.191v-8.176h2.543Zm-1.257-9.297q-.602 0-1.04-.437Q0-22.422 0-23.024q0-.601.438-1.038.437-.438 1.039-.438.382 0 .724.191.342.192.547.534.205.341.205.738 0 .396-.205.738-.205.342-.547.547-.342.205-.724.205ZM12.25-12.25H9.707v-3.992q0-.465-.027-.752-.028-.287-.137-.656-.11-.37-.397-.56-.287-.192-.751-.192-.903 0-1.217.574-.315.574-.315 1.531v4.047H4.32v-8.176h2.461v1.121h.028q.273-.547.902-.943.629-.397 1.504-.397.93 0 1.545.288.615.287.93.847.314.56.437 1.217.123.656.123 1.559Z"/></svg>
                        </li>
                        <li>
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20" class="text-white mt-1"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-span-1 flex items-center px-10 py-7">
                <div>
                    <p class="text-xs mb-4">We are a deposit taking SACCO Licensed and Regulated by the SACCO Societies Regulatory Authority(SASRA)</p>
                    <p class="text-xs">Copyright 2021 Metropolitan National Sacco Ltd. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>