const cards = {
  about: {
    header: "About Me",
    text: [
      "Welcome to my portfolio! My name is Kevin, and I'm a software developer. Currently I'm enrolled in the Penn LPS Boot Camp at UPenn in Philadelphia. Before that, I spent a lot of time learning from online resources like freecodecamp.org and Eloquent Javascript, and am always excited to learn new technologies.",
      "I graduated from the University of Miami with a BA in Theatre Arts in 2011, and moved to New York. From there I worked in Regional Theatres up and down the East Coast, and I performed in Spider-Man: Turn Off The Dark on Broadway.",
      "I now live in Bucks County, PA, with my wife Kristin. I've been spending the last couple of years learning the fundamentals of programming and development, and I'm hoping to make a career change. I've always loved working with computers, both software and hardware."
    ],
    image: "https://placekitten.com/200/200",
    imageAlt: "",
  },
  contact: {},
  portfolio: {}
}

module.exports = {
  getAbout: async () => cards.about,
  getContact: async () => cards.contact,
  getPortfolio: async () => cards.portfolio
}