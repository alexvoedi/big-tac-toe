import { defineConfig } from "vite";
import path from "path";
import Vue from "@vitejs/plugin-vue";
import VueI18n from "@intlify/vite-plugin-vue-i18n";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import WindiCSS from "vite-plugin-windicss";
import PurgeIcons from "vite-plugin-purge-icons";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
    },
  },
  plugins: [
    Vue(),

    Components({
      dts: true,
      deep: true,
      include: [/\.vue$/, /\.vue\?vue/],
      dirs: ["src/views", "src/components", "src/layouts"],
      resolvers: [
        IconsResolver({
          componentPrefix: "icon",
        }),
      ],
    }),

    Icons(),
    PurgeIcons(),

    WindiCSS(),

    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, "i18n/**")],
    }),
  ],

  server: {
    port: 8080,
    fs: {
      strict: true,
    },
  },

  optimizeDeps: {
    include: ["vue", "vue-router", "@vueuse/core"],
  },
});
