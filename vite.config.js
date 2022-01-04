// yarn build 用到的vite配置

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import typescript2 from 'rollup-plugin-typescript2';

/**
 * @type {import('vite').UserConfig}
 */
export default {
  optimizeDeps: {
    include: [],
    exclude: ['vue-demi'],
  },
  plugins: [
    // vue(),
    // vueJsx(),
    {
      ...typescript2(),
      // apply: 'build',
    },
  ],
  build: {
    minify: false,
    lib: {
      entry: resolve('./packages/core'),
      name: 'df-hooks',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      // external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Dfhooks',
        },
      },
    },
  },
};
