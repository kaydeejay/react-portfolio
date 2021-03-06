const cards = {
  about: {
    header: "About Me",
    text: [
      "Welcome to my portfolio! My name is Kevin. I'm a software developer holding a certificate in Full-Stack Web Development from the Penn LPS Boot Camp at UPenn in Philadelphia. Before that, I spent a lot of time learning from online resources like freecodecamp.org and Eloquent Javascript, and am always excited to learn new technologies.",
      "I graduated from the University of Miami with a BA in Theatre Arts in 2011, and moved to New York. From there I worked in Regional Theatres up and down the East Coast, and I performed in Spider-Man: Turn Off The Dark on Broadway.",
      "I now live in Bucks County, PA, with my wife Kristin. I've been spending the last couple of years learning the fundamentals of programming and development, and I'm hoping to make a career change. I've always loved working with computers, both software and hardware."
    ],
    image: require('../assets/images/kevin-image.png'),
    // image: "https://placekitten.com/200/200",
    imageAlt: "",
  },
  contact: {
    header: "Contact",
    cards: [
      {
        key: 1,
        title: "Github",
        faIcon: "fab fa-5x fa-github",
        href: "https://github.com/kaydeejay"
      },
      {
        key: 2,
        title: "Linkedin",
        faIcon: "fab fa-5x fa-linkedin",
        href: "https://www.linkedin.com/in/kevinjones215/"
      },
      {
        key: 3,
        title: "Resume",
        faIcon: "far fa-5x fa-file",
        href: require('../assets/developer-resume.pdf')
      },
      {
        key: 4,
        title: "Email",
        faIcon: "far fa-5x fa-envelope",
        href: "mailto:kevin.jones215@gmail.com"
      }
    ]
  },
  portfolio: {
    header: "Portfolio",
    projects: [
      {
        name: 'game-finder',
        title: 'GameFinder',
        description: 'Find a new gaming group: Create posts looking for games or players, or comment on games you\'d like to join',
        screenshot: require('../assets/images/portfolio-images/game-finder.png'),
        repoURL: 'https://github.com/kaydeejay/Game-Finder',
        deployedURL: 'https://game-finder-2020.herokuapp.com/'
      },
      {
        name: 'appetizer',
        title: 'APPetizer',
        description: 'Create your own online cookbook: search for recipes and save your favorites',
        screenshot: require('../assets/images/portfolio-images/appetizer.png'),
        repoURL: 'https://github.com/kaydeejay/app-etizer',
        deployedURL: 'https://recipe-track.herokuapp.com/'
      },
      {
        name: 'dnd-char-gen',
        title: 'Dungeons & Dragons Character Generator',
        description: 'Quickly and easily create a character for D&D 5th Edition',
        screenshot: require('../assets/images/portfolio-images/dnd-char-gen.jpg'),
        repoURL: 'https://github.com/kaydeejay/dnd-char-gen/',
        deployedURL: 'https://kaydeejay.github.io/dnd-char-gen/'
      },
      {
        name: 'weather-dashboard',
        title: 'Weather Dashboard',
        description: 'View the current 5-day forecast from a search by city. Powered by the openweathermap.org API.',
        screenshot: require('../assets/images/portfolio-images/weather-dashboard.jpg'),
        repoURL: 'https://github.com/kaydeejay/weather-dashboard',
        deployedURL: 'https://kaydeejay.github.io/weather-dashboard/'
      },
      {
        name: 'burger-logger',
        title: 'Burger Logger',
        description: 'Record burgers you want to eat and have eaten. Uses a persistent MySQL database and a custom ORM.',
        screenshot: require('../assets/images/portfolio-images/burger-logger.jpg'),
        repoURL: 'https://github.com/kaydeejay/burger-logger',
        deployedURL: 'https://shrouded-island-52694.herokuapp.com/'
      },
      {
        name: 'employee-tracker',
        title: 'Employee Tracker',
        description: 'A Node CLI content management system that allows the user to create, read, update, and delete entries in an employee roster.',
        screenshot: require('../assets/images/portfolio-images/employee-tracker.jpg'),
        repoURL: 'https://github.com/kaydeejay/employee-tracker',
        deployedURL: null
      },
      {
        name: 'team-roster-gen',
        title: 'Team Roster Generator',
        description: 'A Node CLI application that generates a graphical project team roster based on user inputs.',
        screenshot: require('../assets/images/portfolio-images/team-roster-gen.jpg'),
        repoURL: 'https://github.com/kaydeejay/team-roster-gen',
        deployedURL: null
      },
      {
        name: 'passport-tutorial',
        title: 'Passport Tutorial',
        description: 'A markdown tutorial going through the steps to make a simple login and user authentication page using passportjs.',
        screenshot: require('../assets/images/portfolio-images/passport-tutorial.jpg'),
        repoURL: 'https://github.com/kaydeejay/passport-tutorial',
        deployedURL: null
      }
    ]
  }
}

const functions = {
  getAbout: async () => cards.about,
  getContact: async () => cards.contact,
  getPortfolio: async () => cards.portfolio
}

export default functions;