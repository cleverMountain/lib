import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import legacy from '@vitejs/plugin-legacy'
import { resolve } from "path"


export default defineConfig({
  define: {
    _APP: 3232
  },
  plugins: [
    // legacy({
    //   targets: ['defaults', 'not IE 11']
    // }),
    vue(), // 处理.vue文件

  ],
  resolve: {
    alias: {
      "@src": resolve(__dirname, "./src")
    }
  },
  base: './',
  build: {
    //打包后文件目录
    outDir: "es",
    //压缩
    minify: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue", "node_modules"],
      //input: ["index.ts"],
      output: {
        globals: {
          vue: "Vue",
        },
        dir: "dist",
      },
    },
    lib: {
      entry: "./src/index.js",
      name: "unittec",
      fileName: "unittec",
      formats: ["es", "umd", "cjs"],
    },
  },
  server: {
    host: 'localhost',
    port: 5174,
    hmr: true,
  }
})