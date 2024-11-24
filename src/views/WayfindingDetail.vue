<script setup>
import Arrow from '../components/Wayfinds/Arrow.vue'
import Box from '../components/Wayfinds/Box.vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import Bus from '../components/Icons/Bus.vue'
import ExitUM from '../components/Icons/ExitUM.vue'
import ExitText from '../components/Wayfinds/ExitText.vue'
import Library from '../components/Icons/Library.vue'
import Lines from '../components/Wayfinds/Lines.vue'
import Line from '../components/Wayfinds/Line.vue'
import MultiLanguage from '../components/Wayfinds/MultiLanguage.vue'
import Museum from '../components/Icons/Museum.vue'
import School from '../components/Icons/School.vue'
import Social from '../components/Icons/Social.vue'
import Stops from '../components/Wayfinds/Stops.vue'
import Teach from '../components/Icons/Teach.vue'
import Walk from '../components/Wayfinds/Walk.vue'
import { links, wayfindings } from '../data'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const id = useRoute().params.wayfinding,
    location = wayfindings.find(loc => loc.id === id)

if (! location) {
    const router = useRouter()
    router.push('/404')
}
</script>

<template>
    <div>
        <Breadcrumb :title="location.title" :breads="[{
            to: '/',
            name: 'Beranda',
        }, {
            to: '/wayfindings',
            name: 'Wayfinding',
        }, {
            to: `/wayfindings/${location.id}`,
            name: location.title,
        }]" />

        <section id="wayfinding" class="p-8 lg:p-16">
            <h1 class="text-center text-4xl font-bold my-3">{{ location.title }}</h1>
        </section>

        <section id="detail" class="bg-black font-wayfinding">
            <article v-for="(direction, i) in location.directions" :key="i" :class="{
                'text-primary': direction.color === 'primary',
                'text-secondary': direction.color === 'secondary',
            }" class=""
            :dir="direction.rtl ? 'rtl' : 'ltr'">
                <template v-if="i > 0">
                    <hr class="border-gray-300" :class="{
                        'border-t-2': direction.rotate != location.directions[i - 1].rotate,
                    }" />
                </template>

                <div class="grid grid-cols-2 md:grid-cols-8 lg:grid-cols-12 items-center gap-6 md:gap-8 p-4 md:px-8 md:py-6">
                    <template v-for="(content, j) in direction.contents" :key="j">
                        <Arrow v-if="content.type == 'arrow'" :color="direction.color" :rotate="direction.rotate" :previous="location.directions[i - 1]?.rotate" />

                        <!-- box -->
                        <Box v-if="content.type == 'box'" :color="direction.color">
                            <ExitUM v-if="content.context == 'exit-um'" />
                            <Bus v-if="content.context == 'bus'" />
                            <Teach v-if="content.context == 'lecture-building'" />
                            <Library v-if="content.context == 'library'" />
                            <Museum v-if="content.context == 'museum'" />
                            <School v-if="content.context == 'school'" />
                            <Social v-if="content.context == 'social'" />
                            <span v-if="content.context == 'number'" class="text-black font-extrabold text-4xl">{{ content.value }}</span>
                        </Box>

                        <ExitText v-if="content.type == 'exit-text'" />

                        <MultiLanguage v-if="content.type == 'building'" class="md:col-span-2" id="Gedung" en="Building" />
                        
                        <MultiLanguage v-if="content.type == 'multilang'" class="md:col-span-4" :id="content.id" :en="content.en" />

                        <Stops v-if="content.type == 'exits'" :exits="content.values" />

                        <p class="text-4xl col-span-3 font-bold" v-if="content.type == 'large-text'">{{ content.value }}</p>

                        <Walk v-if="content.type == 'walk'" :distance="content.distance" :color="direction.color" />

                        <Lines v-if="content.type == 'lines'" :served="content.served" />
                    </template>
                </div>
            </article>
        </section>

        <section class="font-wayfinding" v-if="location.stops">
            <div class="grid grid-cols-5 md:grid-cols-12 gap-6 items-center bg-primary p-6">
                <Box color="black">
                    <Bus class="h-12" color="primary" />
                </Box>

                <MultiLanguage class="col-span-4 md:col-span-11 text-black" id="Rute yang melayani halte ini" en="Routes serving this stop" />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 bg-black">
                <div v-for="(stop, i) in location.stops" :key="i" class="border border-primary p-6 flex flex-col items-center justify-center gap-4">
                    <Line class="w-12" :line="stop.line" />
                    <MultiLanguage class="text-center" id="tujuan" en="bound for" />

                    <h1 class="text-2xl font-bold">{{ stop.towards }}</h1>

                    <h2 class="text lg font-semibold">05:30 - 16:00</h2>

                    <div class="grid grid-cols-2 gap-x-4 items-center">
                        <div>
                            <span class="text-xl font-bold">
                                Waktu tunggu
                            </span><br>
                            <span class="text-lg">
                                Headway
                            </span>
                        </div>
                        <h3 class="text-xl font-bold">± 15 menit</h3>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>