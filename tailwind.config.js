/* eslint-disable import/no-unresolved */
module.exports = {
   purge: {
      content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   },
   darkMode: false,
   theme: {
      extend: {
         fontFamily: {
            sans: ['Open Sans'],
         },
         gridTemplateColumns: {
            '1/5': '1fr 5fr',
         },
         widthClock: {
            width: '30rem',
         },
      },
   },
   variants: {
      extend: {},
   },
   // eslint-disable-next-line global-require
   plugins: [require('daisyui')],
}
