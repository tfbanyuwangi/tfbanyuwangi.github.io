<script setup>
import Button from '../components/Button.vue'
import SecondaryButton from '../components/SecondaryButton.vue'
import ToBe from '../components/ToBe.vue';
import { informations, map } from '../data'
import { ref, computed } from 'vue'

// create pagination for informations
const page = ref(1),
    perPage = 3,
    paginatedInformations = computed(() => {
        const start = (page.value - 1) * perPage,
            end = start + perPage

        return informations.slice(start, end)
    }),
    setPage = (value) => page.value = value
</script>

<template>
    <div class="pt-8">

        <div class="grid md:grid-cols-2 bg-fdtbw text-slate-800 rounded-xl m-8 lg:mx-16">

            <div class="!bg-no-repeat !bg-center !bg-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none min-h-[50vh]" style="background: url('pubtrans.jpg')">
                <div class="bg-fdtbw/10 h-full w-full rounded-t-xl md:rounded-l-xl md:rounded-tr-none" />
            </div>

            <div class="text-lg px-8 py-12 flex items-center">
                <div>
                    <i class="mdi mdi-map-marker-circle text-4xl text-slate-900" />

                    <h2 class="text-2xl font-bold my-4">Jelajahi Banyuwangi!</h2>
                    <p class="text-sm mb-4">
                        Yuk kelilingi Banyuwangi dengan mudah dan nyaman melalui transportasi umum yang tersedia.
                    </p>

                    <a :href="map">
                        <SecondaryButton>
                            Unduh Peta <i class="mdi mdi-download" />
                        </SecondaryButton>
                    </a>     
                </div>
            </div>
        </div>

        <div class="bg-fdtbw text-slate-800 rounded-xl m-8 lg:mx-16 p-8">
            <h2 class="text-lg font-semibold">
                <i class="mdi mdi-alert"></i>
                Pemberitahuan
            </h2>

            <p class="my-4">
                Kami telah merilis akses beta peta transportasi Banyuwangi. Peta ini berisi informasi rute angkutan umum, lokasi halte, dan informasi lainnya yang dapat membantu Anda dalam perjalanan.
                Silakan isi formulir berikut untuk memberikan masukan atas pengalaman Anda menggunakan peta ini.
                <!-- Pengembangan peta sedang dilaksanakan dan berkolaborasi dengan Pemerintah Kabupaten Banyuwangi.
                Peta akan segera tersedia untuk umum melalui situs kami. -->
            </p>

            <a href="https://bit.ly/PetaTransumBanyuwangi">
                <SecondaryButton>
                    Isi Formulir <i class="mdi mdi-chevron-right" />
                </SecondaryButton>
            </a>
        </div>

        <section id="intro" class="p-8 lg:p-16">
            <div>
                <h1 class="text-4xl font-bold">Forum Diskusi Transportasi Banyuwangi (FDTBW)</h1>
                <div class="md:grid md:grid-cols-2 w-full mt-6">
                    <div class="prose text-white">
                        <p>
                            Forum Diskusi Transportasi Banyuwangi (FDTBW) merupakan forum diskusi yang membahas berbagai topik terkait transportasi di Banyuwangi.
                            FDTBW merupakan forum yang terbuka bagi siapa saja yang ingin berdiskusi dan berbagi informasi terkait transportasi sekitar Banyuwangi.
                        </p>

                        <div class="flex gap-4">
                            <router-link v-scroll-to="`#app`" to="/about">
                                <Button>
                                    Tentang Kami <i class="mdi mdi-chevron-right" />
                                </Button>
                            </router-link>

                            <a :href="map">
                                <SecondaryButton>
                                    Unduh Peta <i class="mdi mdi-download" />
                                </SecondaryButton>
                            </a>
                        </div>
                    </div>

                    
                    <div class="hidden md:flex md:justify-end">
                        <img src="../assets/icon.png" alt="Cakra" class="h-44">
                    </div>
                </div>
                
            </div>

            <!-- <div class="flex justify-center mt-12">
                <iframe class="h-72 w-full max-w-2xl rounded-md" src="https://www.youtube.com/embed/5tnrWm9eY_Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
            </div> -->

            <div id="news" class="my-12">
                <h2 class="text-3xl font-semibold">Berita</h2>

                <template v-if="informations.length">
                    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mt-6">
                        <a v-for="(information, i) in paginatedInformations" :key="i" :href="information.url">
                            <div class="bg-slate-50 rounded-lg shadow-md hover:shadow-fdtbw hover:bg-slate-100/80">
                                <div class="h-32 bg-center bg-no-repeat bg-cover rounded-t-lg shadow-lg" :style="`background-image: url(${ information.image })`" />

                                <div class="p-6">
                                    <h3 class="font-semibold text-fdtbw text-lg" v-text="information.title" />
                                    <h5 class="font-medium mt-4" v-text="information.date" />
                                    <h6 v-text="information.by" />
                                </div>
                            </div>
                        </a>
                    </div>

                    <!-- informations pagination -->
                    <div class="flex justify-center gap-x-4 mt-8">
                        <button @click="setPage(page - 1)" :disabled="page === 1" class="p-2 px-4 bg-fdtbw text-white rounded-md hover:bg-fdtbw/70 hover:text-slate-50 disabled:bg-fdtbw/25">
                            <i class="mdi mdi-chevron-left"></i>
                        </button>

                        <button @click="setPage(page + 1)" :disabled="page === Math.ceil(informations.length / perPage)" class="p-2 px-4 bg-fdtbw text-white rounded-md hover:bg-fdtbw/70 hover:text-slate-50 disabled:bg-fdtbw/25">
                            <i class="mdi mdi-chevron-right"></i>
                        </button>
                    </div>
                </template>
                <p v-else class="mt-6" v-text="'Tidak ada berita tersedia'" />
            </div>
        </section>
    </div>
</template>