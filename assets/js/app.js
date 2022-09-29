const { createApp } = Vue;
createApp({
  data() {
    return {
      //Projects
      projects: [
        {
          title: "Dynamic Emotion Wheel",
          description:
            "The Dynamic Emotion Wheel is an emotion self-report and awareness tool primarily thought for research in the fields of Education Technology and Affective Sciences. It allows users in a computer-mediated environment to report their emotions in real-time and to visualize their own and/or the emotions of other users sharing the same environment.",
          img: "./assets/images/portfolio-dew.png",
          link: "https://dynamicemotionwheel.ch/",
        },
        {
          title: "Number Sorting Game(s)",
          description:
            "This application shows the same game, consisting in sorting numbers, with three different kinds of interaction: writing on keyboard, point-and-click, and drag&drop. The aim is to compare the three interactions and discuss with students if and how each application may support the learning goal differently and/or more efficiently depending on intervening factors.",
          img: "./assets/images/portfolio-number-sorting-games.png",
          link: "https://mafritz.ch/number-sorting-game/",
        },
        {
          title: "ERGO II website",
          description:
            "The site of the Design centré utilisateur et ergonomie II course serves three intertwined purposes. First, as the pedagogical plateforme to be used by learners. Second, as an example of a website built using UX principles. And third, as a portfolio of students' projects built during the course itself. The code of the site is on GitHub and can be adapted at will.",
          img: "./assets/images/portfolio-ergo-ii-site.png",
          link: "https://mafritz.ch/ergo-ii-2122/",
        },
        {
          title: "TECFA website",
          description:
            "I have collaborated with the team that has rebuilt TECFA website in 2019. The site has been developed following a participative, UX-driven method and avoids the use of Content Management Systems, adopting a pure HTML5 approach. I defined the general layout of the main pages and implemented the code as well as the documentation to maintain the site.",
          img: "./assets/images/portfolio-tecfa-site.png",
          link: "https://tecfa.unige.ch",
        },
        {
          title: "MALTT theses archive",
          description:
            "The site showcases the end-of-master theses produced by students since 2006. Theses can be filtered and sorted according to different criteria. A basic keywords search engine is also available for students of subsequent years to find theses that may be of interest to them. The site is built in HTML5/CSS/JS, without any back-end technology.",
          img: "./assets/images/portfolio-maltt-memoire.png",
          link: "https://tecfa.unige.ch/tecfa/maltt/memoire/filtrage/",
        },
      ],
    };
  },
  computed: {
    orderedProjects: function () {
      return this.projects.sort(function (a, b) {
        first = a.title.toLowerCase();
        second = b.title.toLowerCase();
        if (first > second) {
          return 1;
        } else if (first < second) {
          return -1;
        } else {
          return 0;
        }
      });
    },
  },
}).mount("#portfolio");
