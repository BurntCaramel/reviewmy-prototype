const { mapKeyedBy } = require("./shared");

const reviewsByProfileID = new Map();

reviewsByProfileID.set(
  "1",
  mapKeyedBy("reviewID", [
    {
      reviewID: "3",
      profileID: "1",
      timeDisplay: "2 days ago",
      authorDisplay: "Jane Austin",
      content:
        "Peter transformed my garden into something my whole family uses every day. We love lockdowns as we get to stay in our garden.",
      rating: 5,
      heroImageURL:
        "https://images.unsplash.com/photo-1550948390-6eb7fa773072?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdhcmRlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
      reviewID: "2",
      profileID: "1",
      timeDisplay: "3 weeks ago",
      authorDisplay: "Banjo Patterson",
      content:
        "We now have birds visit our backyard all the time since Peter introduced the trees they would like. It’s changed the feeling of our entire home!",
      rating: 4,
      heroImageURL:
        "https://images.unsplash.com/photo-1615428116353-9d6a4bbf13d2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmlyZCUyMGJhdGh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
      reviewID: "1",
      profileID: "1",
      timeDisplay: "7 weeks ago",
      authorDisplay: "Bob Hawke",
      content:
        "Peter knows Australia’s flora like the back of his hand, I would recommend his expertise to any true Australian.",
      rating: 4.5,
      heroImageURL: null,
    },
  ])
);

reviewsByProfileID.set(
  "2",
  mapKeyedBy("reviewID", [
    {
      reviewID: "23",
      profileID: "2",
      timeDisplay: "3 days ago",
      authorDisplay: "Jane Austin",
      content:
        "The most amazing meal ever, my family put on the most fabulous birthday celebration a man could want, and Adam was at the centre.",
      rating: 5,
      heroImageURL:
        "https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
      reviewID: "22",
      profileID: "2",
      timeDisplay: "1 week ago",
      authorDisplay: "Jane Twain",
      content:
        "We wished to celebrate my father’s milestone birthday with something special, and the food that Adam cooked almost made him faint. In a good way, of course.",
      rating: 4,
      heroImageURL: null,
    },
    {
      reviewID: "21",
      profileID: "2",
      timeDisplay: "2 weeks ago",
      authorDisplay: "Enid Blyton",
      content:
        "When I feel lazy I just get Adam around to my house, he’s quicker than Uber Eats too!",
      rating: 4.5,
      heroImageURL:
        "https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1lYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
  ])
);

reviewsByProfileID.set(
  "3",
  mapKeyedBy("reviewID", [
    {
      reviewID: "33",
      profileID: "3",
      timeDisplay: "6 days ago",
      authorDisplay: "Brené Brown",
      content:
        "I could barely walk through the door some days my house was so cluttered. Now I can finally do everything I want in life.",
      rating: 5,
      heroImageURL:
        "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
      reviewID: "32",
      profileID: "3",
      timeDisplay: "1 week ago",
      authorDisplay: "Cheryl Strayed",
      content:
        "I had to get rid of a lot of things that I thought were important to me, but now I have just the things that really mean a lot at the centre of my home.",
      rating: 4,
      heroImageURL: null,
    },
    {
      reviewID: "31",
      profileID: "3",
      timeDisplay: "1 week ago",
      authorDisplay: "Elizabeth Gilbert",
      content:
        "This review sparks joy and so will yours when you get the Marie Kondo treatment.",
      rating: 4.5,
      heroImageURL:
        "https://images.unsplash.com/photo-1603794067364-0ba8af2418a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
  ])
);

exports.reviewsByProfileID = reviewsByProfileID;
