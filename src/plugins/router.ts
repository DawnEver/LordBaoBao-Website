import { createRouter, createWebHistory } from 'vue-router'
import i18n from './i18n'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/components/HomePage.vue')
    },
    {
        path: '/en',
        name: 'HomeEn',
        component: () => import('@/components/HomePage.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: 'Other',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// Navigation guard: handle legacy /#en access, auto-detect initial locale, and set locale per route
router.beforeEach((to: any, from: any, next: any) => {
    // If user enters /#en (hash), path is '/', hash is '#en'
    if (window.location.hash === '#en' && to.path === '/') {
        next({ path: '/en', replace: true })
        return
    }

    // One-time browser language detection on first navigation in this tab
    if (!sessionStorage.getItem('localeRedirectDone')) {
        sessionStorage.setItem('localeRedirectDone', '1')
        try {
            const lang = (navigator.language || navigator.languages?.[0] || '').toLowerCase()
            const isEnglish = lang.startsWith('en')
            if (to.path === '/') {
                if (isEnglish) {
                    next({ path: '/en', replace: true })
                    return
                }
            }
        } catch (_) {
            // ignore
        }
    }

    const { locale } = i18n.global
    if (to.path === '/en') {
        locale.value = 'en'
    } else {
        locale.value = 'zhHans'
    }

    // Keep document title in sync with locale
    if (locale.value === 'en') {
        document.title = 'Mingyang Bao | @Lord BaoBao'
    } else {
        document.title = '包铭阳 | @Lord包包'
    }
    next()
})

export default router
