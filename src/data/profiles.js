const profiles = new Map();

profiles.set("1", {
  name: "Peter Cundall",
  avatarImageURL: "https://randomuser.me/api/portraits/men/29.jpg",
  bio:
    "Gardening is my passion, especially trees and native shrubbery. Available for hire.",
  themePrimaryColor: "#44A36A",
});

profiles.set("2", {
  name: "Adam Liaw",
  avatarImageURL: "https://randomuser.me/api/portraits/men/40.jpg",
  bio: "I love cooking, and will cook for you for special events in your home.",
  themePrimaryColor: "#2E9FF0",
});

profiles.set("3", {
  name: "Marie Kondo",
  avatarImageURL: "https://randomuser.me/api/portraits/women/60.jpg",
  bio:
    "Not only will I tidy up your home, I will makeover your life from top to bottom.",
  themePrimaryColor: "#FBA8C6",
});

exports.profiles = profiles;
