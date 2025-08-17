import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js";
import data from "../backend/data.js";

const App = {
  data() {
    return {
      info: data
    };
  },
  template: `
    <header>
      <img :src="info.photo" alt="Foto de Laia" style="width:150px; border-radius:50%;">
      <h1>{{ info.name }}</h1>
      <h2>{{ info.title }}</h2>
    </header>

    <section>
      <h3>Sobre mí</h3>
      <p>{{ info.about }}</p>
    </section>

    <section>
      <h3>Educación</h3>
      <ul>
        <li v-for="edu in info.education" :key="edu.degree">
          {{ edu.degree }} - {{ edu.year }}
        </li>
      </ul>
    </section>

    <section>
      <h3>Proyectos</h3>
      <ul>
        <li v-for="project in info.projects" :key="project.name">
          <strong>{{ project.name }}</strong>: {{ project.description }}
          <span v-if="project.link"> - <a :href="project.link" target="_blank">Ver proyecto</a></span>
        </li>
      </ul>
    </section>
  `
};

createApp(App).mount("#app");
