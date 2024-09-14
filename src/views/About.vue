<script setup>
import Breadcrumb from '../components/Breadcrumb.vue'
</script>

<template>
    <Breadcrumb title="Tentang kami" :breads="[{
        to: '/',
        name: 'Beranda',
    }, {
        to: '/about',
        name: 'Tentang',
    }]" />

    <section id="about" class="p-8 lg:p-16 min-h-screen">
        <h1 class="text-4xl font-bold">Latar belakang</h1>
        
        <div class="prose mt-4 max-w-full text-white prose-a:text-fdtbw">
            <div class="flex gap-8 flex-col-reverse md:flex-row">
                <p>
                    Forum Diskusi Transportasi Banyuwangi (FDTBW) merupakan sebuah wadah diskusi yang berfokus pada isu-isu transportasi di Banyuwangi.
                    Lahir pada 2024, FDTBW merupakan bagian dari <a href="https://tfmalang.github.io">FDTM</a> yang juga berfokus pada isu transportasi publik.
                    FDTBW berkomitmen untuk memberikan informasi yang akurat dan terkini untuk meningkatkan kesadaran masyarakat tentang lebih masifnya opsi bertransportasi di dalam kota.
                </p>
                <img src="../assets/icon.png" alt="TFBW" class="max-h-48 max-w-[12rem]">
            </div>
        </div>

        <div class="flex flex-col md:flex-row gap-12">

            <img src="../assets/pubtrans.jpg" alt="Public Transport" class="rounded-lg aspect-auto">

            <div>
                <h2 class="text-3xl font-semibold">Meningkatkan kualitas hidup melalui transportasi umum</h2>

                <div class="prose mt-4 text-white prose-a:text-fdtbw">
                    <p>
                        Kami meyakini bahwa transportasi umum adalah salah satu faktor penting dalam meningkatkan kualitas hidup masyarakat.
                        Gaya hidup bermobilitas, termasuk berwisata, yang didukung oleh transportasi umum yang efisien dan ramah lingkungan dapat membantu mengurangi kemacetan, polusi udara, dan kecelakaan lalu lintas.
                    </p>

                    <p>
                        Keberadaan transportasi massal dapat mengubah kota yang lebih ramah lingkungan, lebih aman, dan lebih nyaman bagi masyarakatnya.
                    </p>
                </div>
            </div>

        </div>
        
        <!-- <div class="flex flex-col md:flex-row gap-6 mt-4 max-w-full">
            <div class="flex items-center justify-center">
                <img src="../assets/reals.png" alt="REALS" class="max-h-48" />
            </div>
        </div> -->
    </section>
</template>