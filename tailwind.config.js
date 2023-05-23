/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        hindMadurai: ['Hind Madurai'],
        lora: ['Lora'],
      },
      borderRadius: {
        '40': '40px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'yellow-hex-divider': `url('data:image/svg+xml;charset=utf8, <svg preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2001 77"><g fill="%23facc15"><path opacity=".5" d="M1993 46V24l-19-11-19 11v22l19 11 19-11zM1942 72V60l-10-5-10 5v12l10 5 10-5z"/><path opacity=".75" d="M1961 52V36l-14-8-14 8v16l14 9 14-9zM1969 69v-8l-7-4-6 4v8l6 4 7-4z"/><path opacity=".5" d="M1871 46V24l19-11 19 11v22l-19 11-19-11z"/><path opacity=".75" d="M1903 52V36l14-8 14 8v16l-14 9-14-9zM1895 69v-8l7-4 7 4v8l-7 4-7-4z"/><path opacity=".5" d="M1855 46V24l-19-11-19 11v22l19 11 19-11zM1803 72V60l-9-5-10 5v12l10 5 9-5z"/><path opacity=".75" d="M1823 52V36l-14-8-14 8v16l14 9 14-9zM1831 69v-8l-7-4-7 4v8l7 4 7-4z"/><path opacity=".5" d="M1733 46V24l19-11 19 11v22l-19 11-19-11z"/><path opacity=".75" d="M1765 52V36l14-8 14 8v16l-14 9-14-9zM1757 69v-8l6-4 7 4v8l-7 4-6-4z"/><path opacity=".5" d="M1717 46V24l-19-11-19 11v22l19 11 19-11zM1665 72V60l-9-5-10 5v12l10 5 9-5z"/><path opacity=".75" d="M1685 52V36l-14-8-14 8v16l14 9 14-9zM1693 69v-8l-7-4-7 4v8l7 4 7-4z"/><path opacity=".5" d="M1594 46V24l19-11 20 11v22l-20 11-19-11z"/><path opacity=".75" d="M1626 52V36l14-8 15 8v16l-15 9-14-9zM1618 69v-8l7-4 7 4v8l-7 4-7-4z"/><path opacity=".5" d="M1579 46V24l-19-11-20 11v22l20 11 19-11zM1527 72V60l-10-5-9 5v12l9 5 10-5z"/><path opacity=".75" d="M1547 52V36l-14-8-15 8v16l15 9 14-9zM1555 69v-8l-7-4-7 4v8l7 4 7-4z"/><path opacity=".5" d="M1456 46V24l19-11 19 11v22l-19 11-19-11z"/><path opacity=".75" d="M1488 52V36l14-8 14 8v16l-14 9-14-9zM1480 69v-8l7-4 7 4v8l-7 4-7-4z"/><path opacity=".5" d="M1441 46V24l-20-11-19 11v22l19 11 20-11zM1389 72V60l-10-5-9 5v12l9 5 10-5z"/><path opacity=".75" d="M1408 52V36l-14-8-14 8v16l14 9 14-9zM1416 69v-8l-6-4-7 4v8l7 4 6-4z"/><path opacity=".5" d="M1318 46V24l19-11 19 11v22l-19 11-19-11z"/><path opacity=".75" d="M1350 52V36l14-8 14 8v16l-14 9-14-9zM1342 69v-8l7-4 7 4v8l-7 4-7-4z"/><path opacity=".5" d="M1302 46V24l-19-11-19 11v22l19 11 19-11zM1251 72V60l-10-5-10 5v12l10 5 10-5z"/><path opacity=".75" d="M1270 52V36l-14-8-14 8v16l14 9 14-9zM1278 69v-8l-7-4-7 4v8l7 4 7-4z"/><path opacity=".5" d="M1180 46V24l19-11 19 11v22l-19 11-19-11z"/><path opacity=".75" d="M1212 52V36l14-8 14 8v16l-14 9-14-9zM1204 69v-8l7-4 7 4v8l-7 4-7-4z"/><path opacity=".5" d="M1164 46V24l-19-11-19 11v22l19 11 19-11zM1112 72V60l-9-5-10 5v12l10 5 9-5z"/><path opacity=".75" d="M1132 52V36l-14-8-14 8v16l14 9 14-9zM1140 69v-8l-7-4-7 4v8l7 4 7-4z"/><path opacity=".5" d="M1041 46V24l20-11 19 11v22l-19 11-20-11z"/><path opacity=".75" d="M1074 52V36l14-8 14 8v16l-14 9-14-9zM1066 69v-8l6-4 7 4v8l-7 4-6-4z"/><path opacity=".5" d="M1026 46V24l-19-11-20 11v22l20 11 19-11zM974 72V60l-9-5-10 5v12l10 5 9-5z"/><path opacity=".75" d="M994 52V36l-14-8-14 8v16l14 9 14-9zM1002 69v-8l-7-4-7 4v8l7 4 7-4z"/><path opacity=".5" d="M903 46V24l19-11 20 11v22l-20 11-19-11z"/><path opacity=".75" d="M935 52V36l14-8 15 8v16l-15 9-14-9zM927 69v-8l7-4 7 4v8l-7 4-7-4z"/><path opacity=".5" d="M888 46V24l-20-11-19 11v22l19 11 20-11zM836 72V60l-10-5-9 5v12l9 5 10-5z"/><path opacity=".75" d="M856 52V36l-15-8-14 8v16l14 9 15-9zM864 69v-8l-7-4-7 4v8l7 4 7-4z"/><path opacity=".5" d="M765 46V24l19-11 19 11v22l-19 11-19-11z"/><path opacity=".75" d="M797 52V36l14-8 14 8v16l-14 9-14-9zM789 69v-8l7-4 7 4v8l-7 4-7-4z"/><path opacity=".5" d="M749 46V24l-19-11-19 11v22l19 11 19-11zM698 72V60l-10-5-9 5v12l9 5 10-5z"/><path opacity=".75" d="M717 52V36l-14-8-14 8v16l14 9 14-9zM725 69v-8l-7-4-6 4v8l6 4 7-4z"/><path opacity=".5" d="M627 46V24l19-11 19 11v22l-19 11-19-11z"/><path opacity=".75" d="M659 52V36l14-8 14 8v16l-14 9-14-9zM651 69v-8l7-4 7 4v8l-7 4-7-4z"/><path opacity=".5" d="M611 46V24l-19-11-19 11v22l19 11 19-11zM560 72V60l-10-5-10 5v12l10 5 10-5z"/><path opacity=".75" d="M579 52V36l-14-8-14 8v16l14 9 14-9zM587 69v-8l-7-4-7 4v8l7 4 7-4z"/><path opacity=".5" d="M489 46V24l19-11 19 11v22l-19 11-19-11z"/><path opacity=".75" d="M521 52V36l14-8 14 8v16l-14 9-14-9zM513 69v-8l7-4 6 4v8l-6 4-7-4z"/><path opacity=".5" d="M473 46V24l-19-11-19 11v22l19 11 19-11zM421 72V60l-9-5-10 5v12l10 5 9-5z"/><path opacity=".75" d="M441 52V36l-14-8-14 8v16l14 9 14-9zM449 69v-8l-7-4-7 4v8l7 4 7-4z"/><path opacity=".5" d="M350 46V24l20-11 19 11v22l-19 11-20-11z"/><path opacity=".75" d="M382 52V36l15-8 14 8v16l-14 9-15-9zM374 69v-8l7-4 7 4v8l-7 4-7-4z"/><path opacity=".5" d="M335 46V24l-19-11-20 11v22l20 11 19-11zM283 72V60l-10-5-9 5v12l9 5 10-5z"/><path opacity=".75" d="M303 52V36l-14-8-14 8v16l14 9 14-9zM311 69v-8l-7-4-7 4v8l7 4 7-4z"/><path opacity=".5" d="M212 46V24l19-11 20 11v22l-20 11-19-11z"/><path opacity=".75" d="M244 52V36l14-8 14 8v16l-14 9-14-9zM236 69v-8l7-4 7 4v8l-7 4-7-4z"/><path opacity=".5" d="M197 46V24l-20-11-19 11v22l19 11 20-11zM145 72V60l-10-5-9 5v12l9 5 10-5z"/><path opacity=".75" d="M164 52V36l-14-8-14 8v16l14 9 14-9zM173 69v-8l-7-4-7 4v8l7 4 7-4z"/><path opacity=".5" d="M74 46V24l19-11 19 11v22L93 57 74 46z"/><path opacity=".3" d="M53 68V54l13-8 13 8v14l-13 8-13-8zM191 68V54l13-8 13 8v14l-13 8-13-8zM330 68V54l13-8 13 8v14l-13 8-13-8zM468 68V54l13-8 13 8v14l-13 8-13-8zM606 68V54l13-8 13 8v14l-13 8-13-8zM744 68V54l13-8 13 8v14l-13 8-13-8zM883 68V54l12-8 13 8v14l-13 8-12-8zM1021 68V54l13-8 13 8v14l-13 8-13-8zM1159 68V54l13-8 13 8v14l-13 8-13-8zM1297 68V54l13-8 13 8v14l-13 8-13-8zM1435 68V54l13-8 13 8v14l-13 8-13-8zM1574 68V54l13-8 12 8v14l-12 8-13-8zM1712 68V54l13-8 13 8v14l-13 8-13-8zM1850 68V54l13-8 13 8v14l-13 8-13-8z"/><path opacity=".75" d="M106 52V36l14-8 14 8v16l-14 9-14-9zM98 69v-8l7-4 7 4v8l-7 4-7-4z"/><path opacity=".5" d="M58 46V24L39 13 20 24v22l19 11 19-11z"/><path opacity=".75" d="M34 69v-8l-7-4-6 4v8l6 4 7-4z"/><path d="M2001 0v15l-21 12-24-14-23 14-23-14-24 14-23-14-23 14-23-14-24 14-23-14-23 14-24-14-23 14-23-14-23 14-24-14-23 14-23-14-24 14-23-14-23 14-23-14-24 14-23-14-23 14-24-14-23 14-23-14-23 14-24-14-23 14-23-14-24 14-23-14-23 14-23-14-24 14-23-14-23 14-24-14-23 14-23-14-24 14-23-14-23 14-23-14-24 14-23-14-23 14-24-14-23 14-23-14-23 14-24-14-23 14-23-14-24 14-23-14-23 14-23-14-24 14-23-14-23 14-24-14-23 14-23-14-23 14-24-14-23 14-23-14-24 14-23-14-23 14-24-14-23 14-23-14-23 14-24-14-23 14-23-14-24 14-23-14-23 14-23-14-24 14L0 13V0h2001z"/><path opacity=".75" d="M12 28L0 35v19l12 7 14-9V36l-14-8z"/><path opacity=".3" d="M2001 46l-13 8v14l13 8V46z"/></g></svg>')`,
        'blue-book-divider': `url('data:image/svg+xml;charset=utf8, <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><g fill="%23172554"><path d="M907 19c-55-5-97 5-109 8-44 12-44 24-101 44-36 12-63 21-97 20-46-1-81-20-100-33-19 13-54 32-100 33-34 1-61-8-97-20-57-20-57-32-101-44-12-3-54-13-109-8A306 306 0 000 43V0h1000v43a306 306 0 00-93-24z"/><path d="M50 38s76-32 155 2c0 0-65-21-155-2z" opacity=".5"/><path d="M80 46s47-20 95 1c0 0-40-13-95-1z" opacity=".3"/><path d="M801 38s76-32 155 2c0 0-65-21-155-2z" opacity=".5"/><path d="M831 46s47-20 95 1c0 0-40-13-95-1z" opacity=".3"/></g></svg>')`,
        'white-arrow-divider': `url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 773.74 154.98"><g fill="%23ffffff"><path d="M0 0h773.74L386.87 77.5Z"/><path d="m0 0 386.87 154.98L773.74 0Z" opacity=".66"/></g></svg>')`,
        'green-skew-divider': `url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 381 77.25" preserveAspectRatio="none"><g fill="%23052e16"><path d="M381 8.47L0 42.33V0h381z"/><path d="M381 33.87L0 59.27V0h381z" opacity=".33"/><path d="M381 59.27L0 77.25V0h381z" opacity=".33"/></g></svg>')`,
        'black-construction-divider': `url('data:image/svg+xml;charset=utf8, <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><g fill="%23000000"><g opacity=".3"><path d="M1000 25v-9h-20l20 9zM1000 54V40l-50-24h-31l57 27 24 11zM1000 83V68l-2-1-52-24-57-27h-30l56 27 53 24 32 16zM977 86l-40-19-52-24-57-27h-30l57 27 52 24 40 19h30zM916 86l-39-19-53-24-56-27h-31l57 27 52 24 40 19h30zM856 86l-40-19-52-24-57-27h-30l56 27 53 24 39 19h31zM795 86l-40-19-52-24-57-27h-30l57 27 52 24 40 19h30zM734 86l-39-19-53-24-56-27h-31l57 27 52 24 40 19h30zM674 86l-40-19-52-24-57-27h-30l56 27 53 24 39 19h31zM613 86l-40-19-52-24-57-27h-30l57 27 52 24 40 19h30zM552 86l-39-19-53-24-56-27h-31l57 27 52 24 40 19h30zM492 86l-40-19-52-24-57-27h-30l56 27 53 24 39 19h31zM431 86l-40-19-52-24-57-27h-30l57 27 52 24 40 19h30zM370 86l-39-19-53-24-56-27h-31l57 27 52 24 40 19h30zM310 86l-40-19-52-24-57-27h-30l56 27 53 24 39 19h31zM249 86l-40-19-52-24-57-27H70l57 27 52 24 40 19h30zM188 86l-39-19-53-24-56-27H9h1l56 27 52 24 40 19h30zM128 86L88 67 36 43 0 26v14l5 3 53 24 39 19h31zM67 86L27 67 0 54v15l37 17h30z"/></g><path fill="none" d="M1002 67l-2-1V16H0v51h1002z"/><path d="M0 16V0h1000v16H0zM1000 38V23l-16-7h-31l47 22z"/><path d="M1000 66V52l-20-9-57-27h-30l57 27 50 23zM1000 86v-5l-28-14-53-24-57-27h-30l57 27 52 24 40 19h19zM828 43l-57-27h31l57 27 52 24 40 19h-31l-39-19-53-24zM768 43l-57-27h30l57 27 52 24 40 19h-30l-40-19-52-24zM707 43l-57-27h30l57 27 53 24 39 19h-30l-40-19-52-24zM646 43l-57-27h31l57 27 52 24 40 19h-31l-39-19-53-24zM586 43l-57-27h30l57 27 52 24 40 19h-30l-40-19-52-24zM525 43l-57-27h30l57 27 53 24 39 19h-30l-40-19-52-24zM464 43l-57-27h31l57 27 52 24 40 19h-31l-39-19-53-24zM403 43l-56-27h30l57 27 52 24 40 19h-30l-40-19-53-24zM343 43l-57-27h30l57 27 53 24 39 19h-30l-40-19-52-24zM282 43l-57-27h31l56 27 53 24 40 19h-31l-39-19-53-24zM221 43l-56-27h30l57 27 52 24 40 19h-30l-40-19-53-24zM161 43l-57-27h30l57 27 53 24 39 19h-30l-40-19-52-24zM100 43L43 16h31l56 27 53 24 40 19h-31l-39-19-53-24zM70 43l52 24 40 19h-30L92 67 39 43 0 24v-9h10l3 1v-1 1l57 27zM62 67l39 19H71L31 67 0 53V38l9 5 53 24zM40 86H10L0 81V67h1l39 19z"/><path fill="none" d="M0 16h1000v70H0z"/></g></svg>')`,
        'orange-layered-divider': `url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.278 3.527" preserveAspectRatio="none"><path d="M0 1.064v.125a82.946 82.946 0 0035.278-.007v-.125A82.783 82.783 0 010 1.064M0 .45V.7A83.105 83.105 0 0035.278.693v-.25A82.777 82.777 0 010 .45M33.252 0a82.855 82.855 0 01-31.26 0H0v.092A83.44 83.44 0 0035.278.085V0zm-10.8 0h8.84A84.249 84.249 0 013.952 0h8.839zM0 1.557v.075a82.878 82.878 0 0035.278-.007V1.55A82.771 82.771 0 010 1.557" fill="%23f59e0b"/></svg>')`,
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
