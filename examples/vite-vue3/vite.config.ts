import path from 'node:path'
import type { UserConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from '@pennajs/unplugin-vue-components/vite'
import Markdown from 'unplugin-vue-markdown/vite'
import Icons from 'unplugin-icons/vite'
import Inspect from 'vite-plugin-inspect'

const config: UserConfig = {
  resolve: {
    alias: {
      '/~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({}),
    Icons(),
    Inspect(),
    Components({
      extensions: ['vue', 'md', 'svg'],
      directoryAsNamespace: true,
      dts: true,
      dirs: [],
      globalNamespaces: ['global'],
      include: [/\.vue($|\?)/, /\.md($|\?)/],
      resolvers: [
        // (name) => {
        //   if (name === 'MyCustom')
        //     return path.resolve(__dirname, 'src/CustomResolved.vue').replaceAll('\\', '/')
        // },
        // VantResolver(),
        // IconsResolver({
        //   componentPrefix: 'i',
        // }),
      ],
      defaultsMap: {
        TestComp: {
          from: path.resolve(__dirname, 'src/TestComp.vue').replaceAll('\\', '/'),
          as: 'TestComp',
        },
      },
    }),
  ],
  build: {
    sourcemap: true,
  },
}

export default config
