const projects = {
  codeQuiz: {
    title: "Code Quiz",
    image: {
      src: "codeQuiz",
      alt: "Code Quiz",
    },
    description:
      "Quiz app that prompts the user to answer web-development related questions and maintains a high score board.",
    tech: [
      {
        type: "image",
        alt: "HTML5",
        src:
          "https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white",
      },
      {
        type: "image",
        alt: "C333",
        src:
          "https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white",
      },
      {
        type: "image",
        alt: "JavaScript",
        src:
          "https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
      },
      {
        type: "image",
        alt: "Bootstrap",
        src:
          "https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white",
      },
      {
        type: "image",
        alt: "jQuery",
        src:
          "https://img.shields.io/badge/jquery%20-%230769AD.svg?&style=for-the-badge&logo=jquery&logoColor=white",
      },
    ],
    repoLink: "https://github.com/jdmarty/codeQuiz",
    deployedLink: "https://jdmarty.github.io/codeQuiz/",
  },

  nutriSpot: {
    title: "NutriSpot",
    image: {
      src: "nutriSpot",
      alt: "Nutrispot",
    },
    description:
      "Front End Application that uses the Spoonacular and Yelp API to combine a healthy recipe search and a search for local restaurants",
    tech: [
      {
        type: "image",
        alt: "JavaScript",
        src:
          "https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
      },
      {
        type: "image",
        alt: "jQuery",
        src:
          "https://img.shields.io/badge/jquery%20-%230769AD.svg?&style=for-the-badge&logo=jquery&logoColor=white",
      },
      {
        type: "image",
        alt: "Heroku",
        src:
          "https://img.shields.io/badge/heroku%20-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white",
      },
      {
        type: "icon-span",
        text: "Yelp API",
        class: "featured-tech-span yelp",
        iconClass: "fab fa-yelp mx-2",
      },
    ],
    repoLink: "https://github.com/jdmarty/scoop",
    deployedLink: "https://jdmarty.github.io/scoop/",
  },

  jammming: {
    title: "Jammming with JD",
    image: {
      src: "jammming",
      alt: "Jamming with JD",
    },
    description:
      "An app built with React and the Spotify API that allows users to search the Spotify library and create new playlists.",
    tech: [
      {
        type: "image",
        alt: "React",
        src:
          "https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB",
      },
      {
        type: "image",
        alt: "JavaScript",
        src:
          "https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
      },
      {
        type: "image",
        alt: "CSS3",
        src:
          "https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white",
      },
      {
        type: "icon-span",
        text: "Spotify API",
        class: "featured-tech-span spotify",
        iconClass: "fab fa-spotify mx-2 spotify",
      },
    ],
    repoLink: "https://github.com/jdmarty/jammming/",
    deployedLink: "http://jammmingwithjd.surge.sh/",
  },

  dreamTeam: {
    title: "Dream Team",
    image: {
      src: "dreamTeam",
      alt: "Dream Team",
    },
    description:
      "Full stack application that allows users to create teams of their favorite NBA players and run a simulated game between them.",
    descriptionCont:
      "Sample Account | email: guest@gmail.com | password: P@ssword12345",
    tech: [
      {
        type: "image",
        alt: "MySQL",
        src:
          "https://img.shields.io/badge/mysql-%2300f.svg?&style=for-the-badge&logo=mysql&logoColor=white",
      },
      {
        type: "image",
        alt: "NodeJS",
        src:
          "https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white",
      },
      {
        type: "image",
        alt: "Express",
        src:
          "https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge",
      },
      {
        type: "image",
        alt: "Heroku",
        src:
          "https://img.shields.io/badge/heroku%20-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white",
      },
      {
        type: "span",
        text: "Handlebars",
        class: "featured-tech-span handlebars",
      },
    ],
    repoLink: "https://github.com/jdmarty/DreamTeamRedux",
    deployedLink: "https://dreamteamsim.herokuapp.com/login",
  },
};

export default projects;
