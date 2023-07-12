import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelpSection from "../views/HelpSection.vue";
import GetSignalHeroSection from "../views/getsignal/GetSignalHeroSection.vue";
import DevelopersHeroSection from "../views/developers/DevelopersHeroSection.vue";
import BlogHeroSection from "../views/blogs/BlogHeroSection.vue";
import CareersHeroSection from "../views/careers/CareersHeroSection.vue";
import DonateHeroSection from "../views/donate/DonateHeroSection.vue";
import HeroSection from "../components/structure/HeroSection.vue";
import PolicySection from "../components/PolicySection.vue";
import ContactUs from "../views/help/ContactUs.vue";
import Android from "../views/getsignal/Android.vue";
import Iphone from "../views/getsignal/Iphone.vue";
import Window from "../views/getsignal/Window.vue";
import Mac from "../views/getsignal/Mac.vue";
import Linux from "../views/getsignal/Linux.vue";
import GettingStarted from "../views/help/GettingStarted.vue";
import Features from "../views/help/Features.vue";
import Security from "../views/help/Security.vue";
import TroubleShooting from "../views/help/TroubleShooting.vue";
import General from "../views/help/General.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/:locale?',
            name: 'home',
            component: HomeView,
            children: [
                {
                    path: '/:locale?',
                    alias: '/main',
                    name: 'HeroSection',
                    component: HeroSection,
                },
                {
                    path: 'get-signal',
                    name: 'GetSignal',
                    component: GetSignalHeroSection
                },
                {
                    path: 'blogs',
                    name: 'BlogsSection',
                    component: BlogHeroSection,
                },
                {
                    path: 'developers',
                    name: 'DevelopersSection',
                    component: DevelopersHeroSection,
                },
                {
                    path: 'careers',
                    name: 'CareersSection',
                    component: CareersHeroSection,
                },
                {
                    path: 'donate',
                    name: 'DonateSection',
                    component: DonateHeroSection,
                },
                {
                    path: 'policy',
                    name: 'PolicySection',
                    component: PolicySection,
                },
                {
                    path: 'android',
                    name: 'Android',
                    component: Android
                },
                {
                    path: 'iphone',
                    name: 'Iphone',
                    component: Iphone
                },
                {
                    path: 'window',
                    name: 'Window',
                    component: Window
                },
                {
                    path: 'macos',
                    name: 'Mac',
                    component: Mac
                },
                {
                    path: 'linux',
                    name: 'Linux',
                    component: Linux
                },
            ],
        },
        {
            path: '/help',
            name: 'HelpSection',
            component: HelpSection,
        },
        {
            path: '/help/contact',
            name: 'ContactUs',
            component: ContactUs,
        },
        {
            path: '/getting-started',
            name: 'GettingStarted',
            component: GettingStarted
        },
        {
            path: '/features',
            name: 'Features',
            component: Features
        },
        {
            path: '/security',
            name: 'Security',
            component: Security
        },
        {
            path: '/troubleShooting',
            name: 'TroubleShooting',
            component: TroubleShooting
        },
        {
            path: '/general',
            name: 'General',
            component: General
        },
    ]
})

export default router
