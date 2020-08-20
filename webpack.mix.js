const mix = require('laravel-mix');
// const tailwindcss = require('tailwindcss')

mix.js('resources/js/site.js', 'public/js')
  .js('resources/js/admin.js', 'public/js')

// mix.less('resources/less/app.less', 'public/css/main.css')
//   .options({
//     postCss: [
//       tailwindcss('./resources/less/tailwind.config.js'),
//     ]
//   })

mix.extract([
  'vue',
  'vuex',
  'axios',
  'lodash',
  // 'moment',
  // 'laravel-echo',
  // '@tailwindui/vue'
])
mix.version()