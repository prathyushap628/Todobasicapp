import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: "server",
    ssr: false,
 
    typescript: {
       shim: false,
    },
 
    head: {
       title: "movieapp",
       htmlAttrs: {
          lang: "en",
       },
       meta: [
          { charset: "utf-8" },
          { name: "viewport", content: "width=device-width, initial-scale=1" },
          { hid: "description", name: "description", content: "" },
          { name: "format-detection", content: "telephone=no" },
       ],
       link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
 
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
     "~/assets/css/main.css"
   ],
 
    hooks: {
       "vite:extendConfig"(config, { isServer }) {
          if (isServer) {
             // Workaround for netlify issue
             // https://github.com/nuxt/framework/issues/6204
             (config.build.rollupOptions.output as any).inlineDynamicImports =
                true;
          }
       },
    },
})
