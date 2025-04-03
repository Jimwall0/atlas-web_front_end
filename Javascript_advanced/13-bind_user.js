const user = {
  hobby: "Calligraphy",
  favoriteSport: "Hocky",
  astrologicalSign: "aries",
  firstName: "Guillaume",
  lastName: "Johns",
  location: "Netherlands",
  occupation: "Engineer",
};
const logWelcomeUser = function(welcomeString) {
  console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
}

const bindLogWelcomeUser = logWelcomeUser.bind(user);
bindLogWelcomeUser("Welcome");