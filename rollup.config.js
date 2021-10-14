import typescript from '@rollup/plugin-typescript'

import pkg from './package.json'

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs', exports: 'named', sourcemap: true },
      { file: pkg.module, format: 'es', exports: 'named', sourcemap: true },
      { name: pkg.name, file: pkg.browser, format: 'umd', sourcemap: true },
    ],
    plugins: [typescript({ tsconfig: './tsconfig.json', module: 'esnext' })],
  },
]
