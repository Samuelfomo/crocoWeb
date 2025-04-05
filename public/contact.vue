<template>
  <div @mouseover="view = false"
       @mouseleave="view = true"
       class=" sidebar z-50 h-screen bg-gray-800 text-white w-16 fixed left-0 top-0 lg:flex hidden flex-col justify-between transition-all duration-300 ease-in-out hover:w-64 group overflow-hidden"
  >
    <!-- Section Logo -->
    <div class="logo-section p-4 flex items-center"
    >
<!--      <svg class="w-8 h-8 text-blue-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
<!--        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />-->
<!--      </svg>-->
      <svg
        v-show="view"
           class="w-8 h-8 text-blue-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="#87D04C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 5l0 14"/>
        <path d="M5 12l14 0"/>
      </svg>
      <div class="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg width="200px" height="56px" viewBox="0 0 295 56" xmlns="http://www.w3.org/2000/svg">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Splash" transform="translate(-47.000000, -586.000000)" fill-rule="nonzero">
              <g id="logo-white" transform="translate(47.000000, 586.000000)">
                <path d="M0,30.5132592 C0,25.4893878 0.880700452,21.002843 2.64210136,17.0536248 C4.40350226,13.1044066 6.67842336,10.0022058 9.46686467,7.75231606 C12.255306,5.50242635 15.1741229,3.81633253 18.2259761,2.68874075 C21.2751686,1.56379589 24.2738073,1 27.2192315,1 C32.0058783,1 37.2661345,2.25464438 43,4.76658007 L41.1853846,17.794765 C36.765918,14.8646145 32.612524,13.3982158 28.7198812,13.3982158 C24.4068436,13.3982158 20.7510055,14.9016715 17.7523668,17.9112298 C14.7537281,20.9207882 13.2557391,24.5709034 13.2557391,28.8615754 C13.2557391,33.1522474 14.5169235,36.527082 17.0419528,39.1448949 C19.5669822,41.7627077 22.8795867,43.0702907 26.9824268,43.0702907 C31.085267,43.0702907 35.4249118,41.5536003 40.0013613,38.5175727 L38.029763,52.2524876 C33.9801374,54.0841625 29.5606708,55 24.7740239,55 C17.1457212,55 11.1111936,52.8295182 6.66778046,48.4859076 C2.22170658,44.1422969 0,38.1522965 0,30.5132592 Z" id="Path" fill="#FFFFFF"></path>
                <path d="M49.4840343,3 L66.8104503,3 C70.5365326,3 73.702242,3.52231935 76.2996109,4.56432007 C78.8996356,5.60895878 80.7746279,7.00181038 81.9298993,8.74815083 C83.0851708,10.4971293 83.8845655,12.1643304 84.3307393,13.7550303 C84.7769131,15.3457301 85,17.0551389 85,18.8779807 C85,22.5289402 83.9615836,25.6707702 81.8900624,28.3034707 C79.8158854,30.9361713 76.6262739,32.8276005 72.3212278,33.9751203 L84.5272682,54 L69.7212031,54 L58.4606263,35.460301 L58.3039343,35.460301 L55.7039096,54 L42,54 L49.4840343,3 Z M70.9853622,19.0362592 C70.9853622,17.7858584 70.4727935,16.7280298 69.4503119,15.8680494 C68.4251745,15.0080691 67.179606,14.5780789 65.7082947,14.5780789 L61.4563646,14.5780789 L59.7247854,26.3909378 L60.747267,26.3909378 C64.0537336,26.3909378 66.5873634,25.6997879 68.3481564,24.3174882 C70.1062936,22.9351885 70.9853622,21.1756582 70.9853622,19.0362592 L70.9853622,19.0362592 Z" id="Shape" fill="#FFFFFF"></path>
                <path d="M90,29.4147836 C90,26.0664183 90.6322139,22.757757 91.8966418,19.4861526 C93.1610697,16.2171952 94.968888,13.1811676 97.3200969,10.3807166 C99.6686933,7.5829126 102.782739,5.31714132 106.654396,3.59134356 C110.526053,1.86554581 114.839215,1 119.59127,1 C126.976678,1 133.058471,3.43252782 137.834038,8.30023038 C142.609604,13.165286 145,19.3935101 145,26.9796088 C145,29.2824371 144.676056,31.638204 144.030779,34.0442625 C143.385503,36.452968 142.298722,38.9251997 140.778274,41.4609578 C139.255213,43.9993628 137.382083,46.2624871 135.161497,48.2503309 C132.940911,50.2408215 130.075049,51.8607421 126.56391,53.1153865 C123.050159,54.3726778 119.178502,55 114.943713,55 C107.71244,55 101.748207,52.5674722 97.0484017,47.6997696 C92.3485964,42.834714 90,36.7388363 90,29.4121367 L90,29.4147836 Z M118.509714,13.9540709 C114.687693,13.9540709 111.27844,15.4204696 108.284568,18.3506201 C105.288082,21.2807706 103.791146,24.9176511 103.791146,29.2612617 C103.791146,32.9246115 104.992875,35.9976962 107.393721,38.4831626 C109.794566,40.968629 112.777989,42.2100387 116.341377,42.2100387 C120.419418,42.2100387 123.907044,40.6933484 126.799031,37.6573207 C129.691018,34.62394 131.138318,30.9341209 131.138318,26.5905103 C131.138318,23.0859762 129.936589,20.1028871 127.535743,17.6412431 C125.134898,15.182246 122.12535,13.9514239 118.509714,13.9514239 L118.509714,13.9540709 Z" id="Shape" fill="#FFFFFF"></path>
                <path d="M149,30.5132592 C149,25.4893878 149.8807,21.002843 151.642101,17.0536248 C153.403502,13.1044066 155.678423,10.0022058 158.466865,7.75231606 C161.255306,5.50242635 164.174123,3.81633253 167.225976,2.68874075 C170.275169,1.56379589 173.273807,1 176.219231,1 C181.005878,1 186.266135,2.25464438 192,4.76658007 L190.185385,17.794765 C185.765918,14.8646145 181.612524,13.3982158 177.719881,13.3982158 C173.406844,13.3982158 169.751006,14.9016715 166.752367,17.9112298 C163.753728,20.9207882 162.255739,24.5709034 162.255739,28.8615754 C162.255739,33.1522474 163.516923,36.527082 166.041953,39.1448949 C168.566982,41.7627077 171.879587,43.0702907 175.982427,43.0702907 C180.085267,43.0702907 184.424912,41.5536003 189.001361,38.5175727 L187.029763,52.2524876 C182.977477,54.0841625 178.560671,55 173.774024,55 C166.145721,55 160.111194,52.8295182 155.66778,48.4859076 C151.221707,44.1422969 149,38.1522965 149,30.5106122 L149,30.5132592 Z" id="Path" fill="#FFFFFF"></path>
                <path d="M275.462171,19.7615969 L275.462171,0 L259.070043,0 L259.070043,19.7615969 L248.893546,19.7615969 C249.439602,22.0131188 249.721774,24.4179133 249.721774,26.9812656 C249.721774,29.2803549 249.397799,31.6322967 248.75246,34.0344486 C248.548669,34.7955264 248.292623,35.5671747 248,36.3414657 L259.070043,36.3414657 L259.070043,56 L275.462171,56 L275.462171,36.3414657 L295,36.3414657 L295,19.7615969 L275.462171,19.7615969 L275.462171,19.7615969 Z" id="Path" fill="#87D04C"></path>
                <path d="M239.600376,19.7472797 L249,19.7472797 C247.915224,15.337712 245.772195,11.5183806 242.565607,8.29987256 C237.714616,3.43505539 231.542798,1 224.044847,1 C219.220379,1 214.844143,1.86285658 210.910836,3.59121655 C206.977528,5.31692971 203.818682,7.58258994 201.434296,10.3802568 C199.047259,13.1805705 197.211892,16.2138026 195.928196,19.4852465 C194.641848,22.7566905 194,26.0651897 194,29.4133908 C194,36.7397314 196.384385,42.8353103 201.155808,47.7001274 C205.927232,52.5649446 211.98235,55 219.323817,55 C223.623137,55 227.553793,54.3727086 231.121088,53.1154789 C234.685731,51.860896 237.595265,50.238408 239.849689,48.2506617 C242.104113,46.2629154 244.005787,43.999902 245.552057,41.4616214 C246.607658,39.7279678 247.451078,38.0287227 248.090273,36.3559455 L239.597724,36.3559455 L239.597724,19.7499265 L239.600376,19.7472797 Z M231.357139,37.6528772 C228.421083,40.688756 224.880311,42.205372 220.740126,42.205372 C217.122438,42.205372 214.093553,40.9640231 211.656122,38.4786786 C209.218691,35.993334 207.99865,32.9204 207.99865,29.2572297 C207.99865,24.913832 209.518397,21.2797765 212.560544,18.3471228 C215.600039,15.417116 219.061243,13.9507891 222.941506,13.9507891 C226.609587,13.9507891 229.664995,15.1815508 232.105078,17.6404274 C234.542509,20.099304 235.76255,23.0822468 235.76255,26.589256 C235.76255,30.9326537 234.293196,34.6222919 231.357139,37.655524 L231.357139,37.6528772 Z" id="Shape" fill="#FFFFFF"></path>
              </g>
            </g>
          </g>
        </svg>
<!--        <img :src="croco" alt="Croco" />-->
      </div>
    </div>

    <!-- Section Menus Principaux -->
    <div class="menu-section flex-grow">
<!--    <div class="menu-section flex-grow overflow-y-auto">-->
      <ul class="py-4 space-y-2">
        <li v-for="(item, index) in menuItems" :key="index" class="px-3">
          <a href="#" class="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
            <!-- Icône toujours visible -->
            <component :is="item.icon" class="w-6 h-6 flex-shrink-0" />
            <!-- Texte visible uniquement au survol -->
            <span class="ml-4 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {{ item.label }}
            </span>
          </a>
        </li>
      </ul>
    </div>

    <!-- Section Configuration -->
    <div class="config-section border-t border-gray-700">
      <ul class="py-4 space-y-2 ">
        <li v-for="(item, index) in configItems" :key="index" class="px-3">
          <a href="#" class="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors duration-200">
            <!-- Icône toujours visible -->
            <component :is="item.icon" class="w-6 h-6 flex-shrink-0" />
            <!-- Texte visible uniquement au survol -->
            <span class="ml-4 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {{ item.label }}
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {h, ref} from 'vue';
// import Croco from '@/assets/images/svg/croco-white.svg';
// const croco = ref(Croco);
const view = ref(true);
// Création des composants d'icônes
const HomeIcon = (props) => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  class: props.class,
  'stroke-width': '2',
  ...props
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  })
]);

// const Logo = (props) => h('svg', {
//   xmlns: 'http://www.w3.org/2000/svg',
//   fill: 'none',
//   viewBox: '0 0 24 24',
//   stroke: '#87D04C',
//   class: props.class,
//   'stroke-width': '2',
//   'stroke-linecap': 'round',
//   'stroke-linejoin': 'round',
//   ...props
// }, [
//   h('path', {
//     'stroke': 'none',
//     d: 'M0 0h24v24H0z',
//     fill: 'none'
//   }),
//   h('path', {
//     d: 'M12 5l0 14'
//   }),
//   h('path', {
//     d: 'M5 12l14 0'
//   })
// ]);

const ChartIcon = (props) => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  class: props.class,
  'stroke-width': '2',
  ...props
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  })
]);

const UsersIcon = (props) => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  class: props.class,
  'stroke-width': '2',
  ...props
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    d: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
  })
]);

const DocsIcon = (props) => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  class: props.class,
  'stroke-width': '2',
  ...props
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  })
]);

const SettingsIcon = (props) => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  class: props.class,
  'stroke-width': '2',
  ...props
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    d: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
  }),
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z'
  })
]);

const LogoutIcon = (props) => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  class: props.class,
  'stroke-width': '2',
  ...props
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    d: 'M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
  })
]);
const menuItems = [
  {label: 'Tableau de bord', icon: HomeIcon},
  {label: 'Statistiques', icon: ChartIcon},
  {label: 'Utilisateurs', icon: UsersIcon},
  {label: 'Documents', icon: DocsIcon},
];
const configItems = [
  {label: 'Paramètres', icon: SettingsIcon},
  {label: 'Déconnexion', icon: LogoutIcon},
];

</script>

<style>
.sidebar {
  overflow-x: hidden;
}
</style>


<!--<template>-->
<!--  <div class="bg-neutral-50 min-h-screen content-center">-->
<!--&lt;!&ndash;    <Dashboard />&ndash;&gt;-->
<!--    <Header  />-->
<!--    &lt;!&ndash; Loader (identique aux autres composants) &ndash;&gt;-->
<!--    <div v-if="isLoading" class="croco-spinner">-->
<!--      <svg aria-hidden="true" role="status" class="w-32 h-32 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101"-->
<!--           fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>-->
<!--        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#3AEA52"/>-->
<!--      </svg>-->
<!--      <p class="mt-4 font-medium text-gray-700">Loading...</p>-->
<!--    </div>-->

<!--    <div class="flex flex-col py-16">-->
<!--      &lt;!&ndash; Container principal &ndash;&gt;-->
<!--      <div class="bg-white mx-auto w-full max-w-4xl overflow-hidden shadow p-8 z-30">-->

<!--        &lt;!&ndash; En-tête &ndash;&gt;-->
<!--        <div class="w-full pb-5 justify-center items-center">-->
<!--          <h2 class="text-2xl font-medium text-gray-700">Créez votre compte</h2>-->
<!--        </div>-->
<!--&lt;!&ndash;        <div class="px-3 py-5 w-full flex bg-black justify-center items-center rounded-lg">&ndash;&gt;-->
<!--&lt;!&ndash;          <img :src="Croco" alt="Logo Croco+" class="h-10">&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->

<!--        <div class="w-full">-->
<!--&lt;!&ndash;          <h2 class="text-center font-roboto text-2xl mb-4">Créez votre compte</h2>&ndash;&gt;-->

<!--          &lt;!&ndash; Formulaire d'inscription &ndash;&gt;-->
<!--          <form @submit.prevent="submitForm" class="space-y-4">-->
<!--            &lt;!&ndash; Nom et Prénom &ndash;&gt;-->
<!--            <div class="grid grid-cols-2 gap-4">-->
<!--              <div>-->
<!--                <label for="lastname" class="block text-lg font-medium text-gray-700">Nom</label>-->
<!--                <input-->
<!--                  type="text"-->
<!--                  id="lastname"-->
<!--                  v-model="form.lastname"-->
<!--                  class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"-->
<!--                  :class="{'border-red-500': errors.lastname}"-->
<!--                />-->
<!--                <p v-if="errors.lastname" class="text-red-600 text-xs mt-1">{{ errors.lastname }}</p>-->
<!--              </div>-->
<!--              <div>-->
<!--                <label for="firstname" class="block text-lg font-medium text-gray-700">Prénom</label>-->
<!--                <input-->
<!--                  type="text"-->
<!--                  id="firstname"-->
<!--                  v-model="form.firstname"-->
<!--                  class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"-->
<!--                  :class="{'border-red-500': errors.firstname}"-->
<!--                />-->
<!--                <p v-if="errors.firstname" class="text-red-600 text-xs mt-1">{{ errors.firstname }}</p>-->
<!--              </div>-->
<!--            </div>-->

<!--            &lt;!&ndash; Pays et Ville &ndash;&gt;-->
<!--            <div class="grid grid-cols-2 gap-4">-->
<!--              <div>-->
<!--                <label for="country" class="block text-lg font-medium text-gray-700">Pays</label>-->
<!--                <select-->
<!--                  id="country"-->
<!--                  v-model="form.country"-->
<!--                  @change="loadCities"-->
<!--                  class="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"-->
<!--                  :class="{'border-red-500': errors.country}"-->
<!--                >-->
<!--                  <option value="" disabled selected>Sélectionnez un pays</option>-->
<!--                  <option v-for="country in countries" :key="country.code" :value="country.code">-->
<!--                    {{ country.name }}-->
<!--                  </option>-->
<!--                </select>-->
<!--                <p v-if="errors.country" class="text-red-600 text-xs mt-1">{{ errors.country }}</p>-->
<!--              </div>-->
<!--              <div>-->
<!--                <label for="city" class="block text-lg font-medium text-gray-700">Ville</label>-->
<!--                <select-->
<!--                  id="city"-->
<!--                  v-model="form.city"-->
<!--                  class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"-->
<!--                  :class="{'border-red-500': errors.city}"-->
<!--                  :disabled="!form.country"-->
<!--                >-->
<!--                  <option value="" disabled selected>Sélectionnez une ville</option>-->
<!--                  <option v-for="city in cities" :key="city.id" :value="city.id">-->
<!--                    {{ city.name }}-->
<!--                  </option>-->
<!--                </select>-->
<!--                <p v-if="errors.city" class="text-red-600 text-xs mt-1">{{ errors.city }}</p>-->
<!--              </div>-->
<!--            </div>-->

<!--            <div class="grid grid-cols-2 gap-4">-->
<!--            &lt;!&ndash; Téléphone &ndash;&gt;-->
<!--            <div>-->
<!--              <label for="phone" class="block text-lg font-medium text-gray-700">Numéro de téléphone</label>-->
<!--              <div class="flex">-->
<!--              <span class="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">-->
<!--                +{{ selectedCountryCode }}-->
<!--              </span>-->
<!--                <input-->
<!--                  type="tel"-->
<!--                  id="phone"-->
<!--                  v-model="form.phone"-->
<!--                  class="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"-->
<!--                  :class="{'border-red-500': errors.phone}"-->
<!--                />-->
<!--              </div>-->
<!--              <p v-if="errors.phone" class="text-red-600 text-xs mt-1">{{ errors.phone }}</p>-->
<!--            </div>-->

<!--            &lt;!&ndash; Email &ndash;&gt;-->
<!--            <div>-->
<!--              <label for="email" class="block text-lg font-medium text-gray-700">Email</label>-->
<!--              <input-->
<!--                type="email"-->
<!--                id="email"-->
<!--                v-model="form.email"-->
<!--                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"-->
<!--                :class="{'border-red-500': errors.email}"-->
<!--              />-->
<!--              <p v-if="errors.email" class="text-red-600 text-xs mt-1">{{ errors.email }}</p>-->
<!--            </div>-->
<!--            </div>-->

<!--            &lt;!&ndash; Code de parrainage &ndash;&gt;-->
<!--&lt;!&ndash;            <div>&ndash;&gt;-->
<!--&lt;!&ndash;              <label for="referralCode" class="block text-xl font-medium text-gray-600">Code de parrainage (optionnel)</label>&ndash;&gt;-->
<!--&lt;!&ndash;              <input&ndash;&gt;-->
<!--&lt;!&ndash;                type="text"&ndash;&gt;-->
<!--&lt;!&ndash;                id="referralCode"&ndash;&gt;-->
<!--&lt;!&ndash;                v-model="form.referralCode"&ndash;&gt;-->
<!--&lt;!&ndash;                placeholder="Si vous avez été parrainé(e)"&ndash;&gt;-->
<!--&lt;!&ndash;                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-600"&ndash;&gt;-->
<!--&lt;!&ndash;                :class="{'border-red-500': errors.referralCode}"&ndash;&gt;-->
<!--&lt;!&ndash;              />&ndash;&gt;-->
<!--&lt;!&ndash;              <p v-if="errors.referralCode" class="text-red-600 text-xs mt-1">{{ errors.referralCode }}</p>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->

<!--            &lt;!&ndash; Bouton de soumission &ndash;&gt;-->
<!--            <div class="pt-6">-->
<!--              <button-->
<!--                type="submit"-->
<!--                class="w-full rounded-lg bg-green-600 hover:bg-green-700 text-xl text-white font-roboto transition duration-300 capitalize py-3"-->
<!--                :disabled="isSubmitting"-->
<!--              >-->
<!--                <span v-if="isSubmitting">Création en cours...</span>-->
<!--                <span v-else>Créer mon compte</span>-->
<!--              </button>-->
<!--            </div>-->
<!--          </form>-->

<!--          &lt;!&ndash; Lien pour se connecter &ndash;&gt;-->
<!--          <div class="text-center text-base cursor-pointer font-light pt-5">-->
<!--          <span>Vous avez déjà un compte?-->
<!--            <a @click="router.push('/')" class="pl-2 text-green-500 hover:text-green-600 transition duration-300 cursor-pointer">-->
<!--              Se connecter-->
<!--            </a>-->
<!--          </span>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--    </div>-->
<!--<Footer />-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { ref, computed, onMounted } from 'vue';-->
<!--import { useRouter } from 'vue-router';-->
<!--import Footer from "@public/components/footer.vue";-->
<!--// import Croco from '@/assets/images/svg/croco-white.svg';-->
<!--import Header from "@public/components/header.vue";-->
<!--import Dashboard from "@public/components/dashboard.vue";-->

<!--const router = useRouter();-->
<!--const isLoading = ref(false);-->
<!--const isSubmitting = ref(false);-->

<!--// Formulaire-->
<!--const form = ref({-->
<!--  firstname: '',-->
<!--  lastname: '',-->
<!--  country: '',-->
<!--  city: '',-->
<!--  phone: '',-->
<!--  email: '',-->
<!--  referralCode: ''-->
<!--});-->

<!--// Gestion des erreurs-->
<!--const errors = ref({-->
<!--  firstname: '',-->
<!--  lastname: '',-->
<!--  country: '',-->
<!--  city: '',-->
<!--  phone: '',-->
<!--  email: '',-->
<!--  referralCode: ''-->
<!--});-->

<!--// Exemple de pays et villes (à remplacer par vos données réelles)-->
<!--const countries = ref([-->
<!--  { code: 'CI', name: 'Côte d\'Ivoire', phoneCode: '225' },-->
<!--  { code: 'SN', name: 'Sénégal', phoneCode: '221' },-->
<!--  { code: 'CM', name: 'Cameroun', phoneCode: '237' },-->
<!--  { code: 'BJ', name: 'Bénin', phoneCode: '229' },-->
<!--  { code: 'TG', name: 'Togo', phoneCode: '228' },-->
<!--  { code: 'ML', name: 'Mali', phoneCode: '223' }-->
<!--]);-->

<!--const cities = ref([]);-->

<!--// Code téléphonique du pays sélectionné-->
<!--const selectedCountryCode = computed(() => {-->
<!--  if (!form.value.country) return '';-->
<!--  const country = countries.value.find(c => c.code === form.value.country);-->
<!--  return country ? country.phoneCode : '';-->
<!--});-->

<!--// Charger les villes en fonction du pays sélectionné-->
<!--const loadCities = () => {-->
<!--  // Simuler un chargement des villes (à remplacer par votre API)-->
<!--  isLoading.value = true;-->
<!--  setTimeout(() => {-->
<!--    if (form.value.country === 'CI') {-->
<!--      cities.value = [-->
<!--        { id: 'ABJ', name: 'Abidjan' },-->
<!--        { id: 'YAM', name: 'Yamoussoukro' },-->
<!--        { id: 'BKE', name: 'Bouaké' }-->
<!--      ];-->
<!--    } else if (form.value.country === 'SN') {-->
<!--      cities.value = [-->
<!--        { id: 'DKR', name: 'Dakar' },-->
<!--        { id: 'THS', name: 'Thiès' },-->
<!--        { id: 'KLC', name: 'Kaolack' }-->
<!--      ];-->
<!--    } else {-->
<!--      cities.value = [];-->
<!--    }-->
<!--    isLoading.value = false;-->
<!--    form.value.city = ''; // Réinitialiser la ville-->
<!--  }, 500);-->
<!--};-->

<!--// Validation du formulaire-->
<!--const validateForm = () => {-->
<!--  let isValid = true;-->
<!--  errors.value = {-->
<!--    firstname: '',-->
<!--    lastname: '',-->
<!--    country: '',-->
<!--    city: '',-->
<!--    phone: '',-->
<!--    email: '',-->
<!--    referralCode: ''-->
<!--  };-->

<!--  if (!form.value.firstname.trim()) {-->
<!--    errors.value.firstname = 'Le prénom est requis';-->
<!--    isValid = false;-->
<!--  }-->

<!--  if (!form.value.lastname.trim()) {-->
<!--    errors.value.lastname = 'Le nom est requis';-->
<!--    isValid = false;-->
<!--  }-->

<!--  if (!form.value.country) {-->
<!--    errors.value.country = 'Veuillez sélectionner un pays';-->
<!--    isValid = false;-->
<!--  }-->

<!--  // if (!form.value.city) {-->
<!--  //   errors.value.city = 'Veuillez sélectionner une ville';-->
<!--  //   isValid = false;-->
<!--  // }-->

<!--  if (!form.value.phone.trim()) {-->
<!--    errors.value.phone = 'Le numéro de téléphone est requis';-->
<!--    isValid = false;-->
<!--  } else if (!/^\d{8,10}$/.test(form.value.phone.trim())) {-->
<!--    errors.value.phone = 'Veuillez entrer un numéro de téléphone valide';-->
<!--    isValid = false;-->
<!--  }-->

<!--  if (!form.value.email.trim()) {-->
<!--    errors.value.email = 'L\'email est requis';-->
<!--    isValid = false;-->
<!--  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email.trim())) {-->
<!--    errors.value.email = 'Veuillez entrer une adresse email valide';-->
<!--    isValid = false;-->
<!--  }-->

<!--  return isValid;-->
<!--};-->

<!--// Soumission du formulaire-->
<!--const submitForm = async () => {-->
<!--  if (!validateForm()) return;-->

<!--  isSubmitting.value = true;-->

<!--  try {-->
<!--    // Simuler un appel API (à remplacer par votre API réelle)-->
<!--    await new Promise(resolve => setTimeout(resolve, 1500));-->

<!--    // Rediriger vers la page suivante après l'inscription réussie-->
<!--    await router.push('/pin');-->
<!--  } catch (error) {-->
<!--    console.error('Erreur lors de l\'inscription:', error);-->
<!--    // Gérer l'erreur (afficher un message, etc.)-->
<!--  } finally {-->
<!--    isSubmitting.value = false;-->
<!--  }-->
<!--};-->

<!--// Initialisation-->
<!--onMounted(() => {-->
<!--  // Vous pouvez charger des données initiales ici si nécessaire-->
<!--});-->
<!--</script>-->
