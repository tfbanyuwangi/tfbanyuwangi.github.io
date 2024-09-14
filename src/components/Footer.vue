<script setup>
import { contacts, socials } from "../data";
</script>

<template>
    <footer class="bg-fdtbw text-slate-900 !bg-no-repeat !bg-center !bg-cover" style="background: url('banner.jpg')">
        <div class="bg-fdtbw/75 h-full p-8 md:p-12 grid grid-cols-1 md:grid-cols-6 gap-8">
            <div class="md:col-span-3 flex items-center justify-center">
                <img src="../assets/tfbw-black.png" alt="FDT Banyuwangi" class="max-h-12">
            </div>

            <div class="md:col-span-3">
                <h2 class="text-3xl border-l-4 border-slate-900 font-bold pl-3 mb-5">Terhubung dengan kami:</h2>

                <div>
                    <p class="mb-4" v-for="(contact, i) in contacts" :key="i">
                        <a :title="contact.name" :href="contact.href" target="_blank">
                            <i :class="contact.icon"></i> <span v-text="contact.text"></span>
                        </a>
                    </p>

                    <div class="flex gap-4 mt-4">
                        <a v-for="(social, i) in socials" :key="i" :title="social.title" :href="social.href" class="p-2 text-fdtbw bg-slate-900 rounded-full w-10 aspect-square flex items-center justify-center hover:text-slate-900 hover:bg-fdtbw">
                            <i :class="social.icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <section id="credits" class="flex justify-center py-8 bg-slate-800">
        <p class="text-center prose text-white prose-a:text-fdtbw">
            Copyright © 2024 Forum Diskusi Transportasi Banyuwangi - Transport for Banyuwangi (FDTBW - TfBW)
            <br>a part of <a href="https://tfmalang.github.io">Transport for Malang</a>
        </p>
    </section>
</template>