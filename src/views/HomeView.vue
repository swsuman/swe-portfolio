<template>
  <!-- Menu -->
  <div>
    <MenuVue :links="links">Menu</MenuVue>
    <HeroSection id="hero" pic="header.png">
      <template v-slot:welcome>Welcome!</template>
      My name is <b>Sweta Suman</b> and I'm a Senior Advisory Consultant
      Technical specialist SAP Project Management SAP Business Analyst SAP ABAP
      ON HANA S4 HANA SAP Fiori
      <template v-slot:buttons>
        <simple-button
          class="btn-primary text-white"
          url="https://www.linkedin.com/in/sweta-suman-504034110"
          icon="fab linkedin-in"
          >Hire me!</simple-button
        >
        <simple-button
          class="btn-outline-secondary"
          url="mailto:swetasumanpwc@gmail.com"
          icon="fa-regular fa-file-lines"
          >Contact me</simple-button
        >
      </template>
    </HeroSection>
    <SkillsGrid id="skills" :skills="skills" />
    <ExperienceTable id="edu-exp" :experience="experience" />
    <AwardsGrid id="awards" :awards="awards" />
    <ProjectsGrid id="projects" :projects="projects" />
    <FooterVue :links="socials" :copyright="copyright" />
  </div>
</template>
<script>
import MenuVue from "@/components/shared/AppMenu.vue";
import FooterVue from "@/components/shared/AppFooter.vue";
import HeroSection from "@/components/hero/HeroSection.vue";
import SkillsGrid from "@/components/skills/SkillsGrid.vue";
import ExperienceTable from "@/components/experience/ExperienceTable.vue";
import AwardsGrid from "@/components/awards/AwardsGrid.vue";
import ProjectsGrid from "@/components/projects/ProjectsGrid.vue";

// data to fill components
import skills from "@/data/skills";
import experience from "@/data/experience";
import awards from "@/data/awards";
import projects from "@/data/projects";

import SimpleButton from "@/components/reusable/SimpleButton.vue";
// import HiWord from "@/components/reusable/HighlightIt.vue";

export default {
  name: "HomeView",
  data: () => {
    return {
      delay: 100,
      links: [
        {
          name: "home",
          url: "#hero",
        },
        {
          name: "skills",
          url: "#skills",
        },
        {
          name: "experience",
          url: "#edu-exp",
        },
        {
          name: "awards",
          url: "#awards",
        },
        {
          name: "projects",
          url: "#projects",
        },
      ],
      skills,
      experience,
      awards,
      projects,
      socials: [
        {
          id: 1,
          icon: "fab linkedin-in",
          url: "https://www.linkedin.com/in/sweta-suman-504034110",
        },
        {
          id: 2,
          icon: "fab github",
          url: "https://github.com/xtenzq",
        },
      ],
      copyright: "2022 Sweta Suman",
    };
  },
  components: {
    MenuVue,
    FooterVue,
    HeroSection,
    SkillsGrid,
    ExperienceTable,
    AwardsGrid,
    ProjectsGrid,
    SimpleButton,
    // HiWord,
  },
};
</script>
<style lang="scss" scoped>
.prim {
  color: $primary;
}
</style>
