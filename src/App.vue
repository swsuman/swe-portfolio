<template>
  <metainfo> </metainfo>

  <div
    class="scrollspy-example"
    data-bs-offset="0"
    data-bs-spy="scroll"
    data-bs-target="#main-nav"
    tabindex="0"
  >
    <!-- Render active component contents with vue transition -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <!-- Scroll to top -->
    <back-to-top
      visibleoffset="500"
      right="30px"
      bottom="20px"
      class="shadow-lg"
    >
      <i data-feather="chevron-up"></i>
    </back-to-top>
  </div>
</template>
<script>
// aos
// import AOS from "aos";
// import "aos/dist/aos.css";
import { useMeta } from "vue-meta";

export default {
  data: () => {
    return {
      webTitle: "Sweta Suman - SAP ABAP Consultant",
    };
  },
  setup() {
    useMeta({
      title: "Sweta Suman - SAP ABAP Consultant",
      description: "SAP",
      htmlAttrs: {
        lang: "en",
        amp: true,
      },
      twitter: {
        title: "Sweta Suman - SAP ABAP Consultant",
        description: "SAP",
        card: "summary_large_image",
        image: "https://swetasuman.in" + require(`@/assets/images/preview.jpg`),
      },
      og: {
        title: "Sweta Suman - SAP ABAP Consultant",
        description: "SAP",
        type: "website",
        url: "https://swetasuman.in/",
        image:
          "https://swetasuman.in/" + require(`@/assets/images/preview.jpg`),
        site_name: "Sweta Suman - SAP ABAP Consultant",
      },
      meta: [
        {
          name: "keywords",
          content:
            "software developer, software engineer, backend developer, fullstack developer, developer portfolio",
        },
        {
          name: "author",
          content: "Sweta Suman",
        },
      ],
      link: [
        {
          rel: "icon",
          href: require(`@/assets/images/favicon.png`),
        },
      ],
    });
  },
};
</script>
<style lang="scss">
@import "./assets/css/app.scss";
html {
  scroll-behavior: smooth;
}

body {
  position: relative;
  font-family: $default-family;
  font-size: $default-font-size;
}

::-webkit-scrollbar {
  width: 9px;
}

::-webkit-scrollbar-thumb {
  background: #363636;
}

::-webkit-scrollbar-track {
  background: #fff;
}

.btn {
  border-width: 1px;
  cursor: pointer;
  justify-content: center;
  padding: calc(0.5em - 1px) 1em;
  text-align: center;
  white-space: nowrap;
  -webkit-appearance: none;
  align-items: center;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.5em;
  line-height: 1.5;
  position: relative;
  vertical-align: top;
}

.btn-primary {
  color: white;
}

a,
a:active,
a:visited {
  text-decoration: none !important;
}
</style>
