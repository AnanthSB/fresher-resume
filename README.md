<!-- ____________Tailwind Setup____________ -->
<!-- 2. yarn add tailwindcss postcss autoprefixer -->
<!-- 3. npx tailwindcss init -->
<!-- 4. postcss.config.js add below code -->
<!-- 5.
    module.exports = {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    };
-->
<!-- 6. under src/styles/tailwind.css add below code -->
<!--
    /* src/styles/tailwind.css */
    @import 'tailwindcss/base';
    @import 'tailwindcss/components';
    @import 'tailwindcss/utilities';
-->
<!-- 7.
    a. Create a file under src #tailwind.css containing code:
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    b. say import './tailwind.css'; in index.js file (import tailwind css into app.)
-->

<!-- ____________ Icomoon Setup ____________ -->
<!--1. un zip icomoon generated folder.
    2. Add Fonts folder under src/Assets containing all 4 files like .eot, .svg, ttf, woff extensions
    3. Add all icons names code in/under src/Styles/_font.scss
    4. set the path for all the imported Fonts paths like below in _font.scss
          src:  url('Assets/Fonts/icomoon.eot'); or   src:  url('../Assets/Fonts/icomoon.eot');

    5. Add below code in index.scss
        @import 'Styles/_include-media.scss';
        @import 'Styles/_reset.scss';
        @import 'Styles/_variables.scss';
        @import 'Styles/_general.scss';
        @import 'Styles/_mixins.scss';
        @import 'Styles/_typography.scss';
 -->

<!-- setup Storybook into react app -->
<!-- 1. npx degit chromaui/intro-storybook-react-template taskbox -->
<!-- 2. cd taskbox -->
<!-- 3. yarn install -->
<!-- 4. yarn storybook -->
