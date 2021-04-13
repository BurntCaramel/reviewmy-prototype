const { escapeToHTML: text } = require("./escape");

const icons = {
  starFilled: `<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="black"/>
  </svg>`,
  starEmpty: `<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z" fill="black"/>
  </svg>`,
  starHalfFilled: `<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4V4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z" fill="black"/>
  </svg>`,
  call: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.0156 12.375C17.2969 12.375 17.5312 12.4688 17.7188 12.6562C17.9062 12.8438 18 13.0781 18 13.3594V16.8281C18 17.6094 17.6719 18 17.0156 18C12.3594 18 8.35938 16.3281 5.01562 12.9844C1.67188 9.64062 0 5.64062 0 0.984375C0 0.328125 0.390625 0 1.17188 0H4.64062C4.92188 0 5.15625 0.09375 5.34375 0.28125C5.53125 0.46875 5.625 0.703125 5.625 0.984375C5.625 2.20312 5.8125 3.375 6.1875 4.5C6.3125 4.90625 6.23438 5.25 5.95312 5.53125L4.03125 7.21875C5.46875 10.2188 7.76562 12.4844 10.9219 14.0156L12.4688 12.0469C12.6562 11.8594 12.8906 11.7656 13.1719 11.7656C13.3281 11.7656 13.4375 11.7812 13.5 11.8125C14.625 12.1875 15.7969 12.375 17.0156 12.375Z" fill="black"/>
  </svg>`,
  email: `<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.0156 5.01562V3L10 8.01562L1.98438 3V5.01562L10 9.98438L18.0156 5.01562ZM18.0156 0.984375C18.5469 0.984375 19 1.1875 19.375 1.59375C19.7812 2 19.9844 2.46875 19.9844 3V15C19.9844 15.5312 19.7812 16 19.375 16.4062C19 16.8125 18.5469 17.0156 18.0156 17.0156H1.98438C1.45312 17.0156 0.984375 16.8125 0.578125 16.4062C0.203125 16 0.015625 15.5312 0.015625 15V3C0.015625 2.46875 0.203125 2 0.578125 1.59375C0.984375 1.1875 1.45312 0.984375 1.98438 0.984375H18.0156Z" fill="black"/>
  </svg>`,
  twitter: `<svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M23.953 2.57C23.0545 2.9656 22.1026 3.22674 21.128 3.345C22.1541 2.72825 22.9224 1.76104 23.291 0.621996C22.34 1.177 21.286 1.581 20.164 1.806C19.4238 1.01443 18.4429 0.489417 17.3736 0.312497C16.3044 0.135577 15.2067 0.316646 14.2509 0.827586C13.2952 1.33853 12.5349 2.15075 12.0881 3.13812C11.6412 4.12549 11.533 5.23277 11.78 6.288C7.69 6.095 4.067 4.13 1.64 1.162C1.19879 1.91181 0.968664 2.76702 0.974 3.637C0.974 5.347 1.844 6.85 3.162 7.733C2.38086 7.70813 1.61697 7.49693 0.934 7.117V7.177C0.933557 8.31339 1.32627 9.41494 2.04551 10.2948C2.76474 11.1746 3.76621 11.7785 4.88 12.004C4.1583 12.1974 3.40241 12.2264 2.668 12.089C2.98412 13.067 3.59766 13.9219 4.42301 14.5345C5.24837 15.1471 6.24435 15.4867 7.272 15.506C5.53153 16.8719 3.38248 17.6133 1.17 17.611C0.78 17.611 0.391 17.588 0 17.544C2.25571 18.9883 4.87851 19.755 7.557 19.753C16.61 19.753 21.555 12.257 21.555 5.768C21.555 5.558 21.555 5.348 21.54 5.138C22.506 4.44286 23.3392 3.57981 24 2.59L23.953 2.57Z" fill="black"/>
  </svg>`,
  facebook: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 12.073C24 5.446 18.627 0.072998 12 0.072998C5.373 0.072998 0 5.446 0 12.073C0 18.063 4.388 23.027 10.125 23.927V15.542H7.078V12.072H10.125V9.43C10.125 6.423 11.917 4.761 14.658 4.761C15.97 4.761 17.344 4.996 17.344 4.996V7.949H15.83C14.339 7.949 13.874 8.874 13.874 9.823V12.073H17.202L16.67 15.543H13.874V23.928C19.612 23.027 24 18.062 24 12.073Z" fill="black"/>
  </svg>`
};

const style = `
*, *:before, *:after {
  margin: 0;
  box-sizing: border-box;
  font-size: inherit;
}

:root {
  font-family: system-ui, sans-serif;
  font-size: 125%;

  --link--padding-x: 0;
  --link--padding-y: 0;
  --link--color: var(--theme-primary);
  --link--decoration: underline;
  --link--decoration--hover: initial;
}

a {
  padding-left: var(--link--padding-x);
  padding-right: var(--link--padding-x);
  padding-top: var(--link--padding-y);
  padding-bottom: var(--link--padding-y);
  color: var(--link--color);
  text-decoration: var(--link--decoration);
}
a:hover {
  text-decoration: var(--link--decoration--hover);
}

ul[class] {
  list-style: none;
  margin: 0;
  padding: 0;
}

.X {
  display: flex;
  flex-direction: row;
}

.Y {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.X hr {
  margin-left: auto;
}
.X hr, hr[data-x], hr[data-y] {
  border: none;
}

hr[data-x="1"] {
  margin-left: 1rem;
}
hr[data-x="1/2"] {
  margin-left: 0.5rem;
}
hr[data-y="1"] {
  margin-top: 1rem;
}
hr[data-y="1/2"] {
  margin-top: 0.5rem;
}

[data-text] {
  line-height: 1.25;
}
[data-text~="0"] {
  font-size: 1rem;
}
[data-text~="-1"] {
  font-size: 0.8rem;
}
[data-text~="bold"] {
  font-weight: bold;
}
[data-text~="italic"] {
  font-style: italic;
}

[data-measure] {
  max-width: 44rem;
}
[data-measure~="center"] {
  margin-left: auto;
  margin-right: auto;
}

[data-p~="1"] {
  padding: 1rem;
}
[data-p~="1/2"] {
  padding: 0.5rem;
}

.bg-theme-primary {
  background-color: var(--theme-primary);
}

.italic { font-style: italic; }
.font-bold { font-weight: bold; }

[data-links~="current-color"] {
  --link--color: currentColor;
}
[data-links~="no-underline"] {
  --link--decoration: none;
}
[data-links~="underline-on-hover"] {
  --link--decoration: none;
  --link--decoration--hover: underline;
}

.rounded-full {
  border-radius: 100000px;
}
`;

function* ProfileStyles() {
  yield `<style>${style}</style>`;
}

const shadeOf = (amount) => `rgba(0,0,0,${amount * .085})`;
// const shade = `#efefef`;
const shade = shadeOf(.8);

function* StarRating(rating) {
  yield '<div class="X">';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      yield icons.starFilled;
    } else if (i - 0.5 <= rating) {
      yield icons.starHalfFilled;
    } else {
      yield icons.starEmpty;
    }
  }
  yield '</div>';
}

function* ProfileCard({ profile }) {
  yield `<div style="background: linear-gradient(180deg, ${shadeOf(0)} 40.63%, ${shadeOf(0.7)} 100%);">`;

  yield `<div class="X" data-measure=center data-p=1>`;
  yield `<div>`;
  yield `<img width=70 height=70 src="${profile.avatarImageURL}" class="rounded-full">`;
  yield `</div>`;

  yield `<hr data-x=1/2>`;

  yield `<div class="Y">`;
  yield `<h1 data-text=0>`;
  // yield "Peter Cundall";
  yield profile.name;
  yield "</h1>";
  yield `<hr data-y=1/2>`;
  yield `<p data-text="-1 italic">`;
  yield profile.bio;
  // yield "Gardening is my passion, especially trees and native shrubbery. Available for hire.";
  yield `</div>`;

  yield `</div>`;

  yield `</div>`;
}

function* ProfileSectionTabs({ currentPage }) {
  // yield `<div style="background: ${shade};">`;
  yield `<div style="background: linear-gradient(180deg, ${shadeOf(0.7)} 0%, ${shadeOf(1)} 100%);">`;

  yield `<nav class="X" data-measure=center data-links="current-color no-underline">`;

  const activeStyle = `border-top: 4px solid var(--theme-primary); background: white;`;
  const inactiveStyle = `border-top: 4px solid transparent;`;

  const reviewsStyle = currentPage === 'reviews' ? activeStyle : inactiveStyle;
  const mapStyle = currentPage === 'map' ? activeStyle : inactiveStyle;
  const contactStyle = currentPage === 'contact' ? activeStyle : inactiveStyle;

  yield `<a href="/api/p/1" data-p=1/2 style="${reviewsStyle}">`;
  yield text`3 Reviews`;
  yield `</a>`;

  yield `<a href="/api/p/1/map" data-p=1/2 style="${mapStyle}">`;
  yield text`Map`;
  yield `</a>`;

  yield `<a href="/api/p/1/contact" data-p=1/2 style="${contactStyle}">`;
  yield text`Contact`;
  yield `</a>`;

  yield `</nav>`;

  // yield `<div style="opacity: 0.25; border-bottom: 0.5px solid var(--theme-primary);"></div>`
  yield `</div>`;
}

function* ReviewArticle({
  profileID,
  reviewID,
  timeDisplay,
  authorDisplay,
  content,
  rating,
  heroImageURL
}) {
  yield `<article data-measure=center data-p="1">`;

  yield `<header class="X" data-links="current-color underline-on-hover">`;
  yield `<a href="/p/${profileID}/reviews/${reviewID}">`;
  yield text(timeDisplay);
  yield `</a>`;
  yield `<hr>`;
  yield `<div data-text=bold>`;
  yield text(authorDisplay);
  yield `</div>`;
  yield `</header>`;

  if (heroImageURL) {
    // yield `<hr data-y=1/2>`;
    yield `<img src="${heroImageURL}" style="max-width: 100%; height: auto;">`;
  }

  yield* StarRating(rating);


  yield `<p data-text=italic>`;
  yield text(content);

  yield `</article>`;
}

function* ReviewsList() {
  yield* ReviewArticle({
    profileID: 1,
    reviewID: 3,
    timeDisplay: "2 days ago",
    authorDisplay: "Jane Austin",
    content:
      "Peter transformed my garden into something my whole family uses every day. We love lockdowns as we get to stay in our garden.",
    rating: 5,
    heroImageURL: "https://images.unsplash.com/photo-1550948390-6eb7fa773072?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdhcmRlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
  });

  yield* ReviewArticle({
    profileID: 1,
    reviewID: 2,
    timeDisplay: "3 weeks ago",
    authorDisplay: "Banjo Patterson",
    content:
      "We now have birds visit our backyard all the time since Peter introduced the trees they would like. It’s changed the feeling of our entire home!",
    rating: 4,
    heroImageURL: "https://images.unsplash.com/photo-1615428116353-9d6a4bbf13d2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmlyZCUyMGJhdGh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
  });

  yield* ReviewArticle({
    profileID: 1,
    reviewID: 1,
    timeDisplay: "7 weeks ago",
    authorDisplay: "Bob Hawke",
    content:
      "Peter knows Australia’s flora like the back of his hand, I would recommend his expertise to any true Australian.",
    rating: 4.5,
    heroImageURL: null
  });
}

function* ReviewsMap() {
  yield `<article data-measure=center data-p="1">`;
  yield '<img src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="Map of reviews">';
  yield `</article>`;
}

function* ContactSection() {
  yield `<article data-measure=center data-p="1">`;
  yield '<h1>Contact Peter</h1>';

  yield `<hr data-y=1>`
  
  yield `<ul class="" data-text>`;

  yield `<li class="X">`;
  yield icons.call;
  yield `<hr data-x=1/2>`;
  yield '0412 345 678';

  yield `<li class="X">`;
  yield icons.email;
  yield `<hr data-x=1/2>`;
  yield '0412 345 678';

  yield `<li class="X">`;
  yield icons.twitter;
  yield `<hr data-x=1/2>`;
  yield 'Contact on Twitter';

  yield `<li class="X">`;
  yield icons.facebook;
  yield `<hr data-x=1/2>`;
  yield 'Contact on Facebook';

  yield '</ul>';

  yield `</article>`;
}

function ProfilePage({ profile }) {
  const themePrimary = "#44A36A";

  return [
    ...ProfileStyles(),
    `<style>:root{ --theme-primary: ${themePrimary}; }</style>`,
    `<body>`,
    `<div class="bg-theme-primary" style="height: 10px"></div>`,
    ...ProfileCard({ profile }),
    ...ProfileSectionTabs({ currentPage: 'reviews' }),
    ...ReviewsList()
  ];
}

function ProfileMapPage({ profile }) {
  const themePrimary = "#44A36A";

  return [
    ...ProfileStyles(),
    `<style>:root{ --theme-primary: ${themePrimary}; }</style>`,
    `<body>`,
    `<div class="bg-theme-primary" style="height: 10px"></div>`,
    ...ProfileCard({ profile }),
    ...ProfileSectionTabs({ currentPage: 'map' }),
    ...ReviewsMap()
  ];
}

function ProfileContactPage({ profile }) {
  const themePrimary = "#44A36A";

  return [
    ...ProfileStyles(),
    `<style>:root{ --theme-primary: ${themePrimary}; }</style>`,
    `<body>`,
    `<div class="bg-theme-primary" style="height: 10px"></div>`,
    ...ProfileCard({ profile }),
    ...ProfileSectionTabs({ currentPage: 'contact' }),
    ...ContactSection()
  ];
}

exports.ProfilePage = ProfilePage;
exports.ProfileMapPage = ProfileMapPage;
exports.ProfileContactPage = ProfileContactPage;
