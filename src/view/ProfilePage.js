const { escapeToHTML: text } = require("./escape");

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

.X {
  display: flex;
  flex-direction: row;
}

.X hr {
  margin-left: auto;
  border: none;
}
.X hr[data-x="1"] {
  margin-left: 1rem;
}
.X hr[data-x="1/2"] {
  margin-left: 0.5rem;
}

.Y {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.Y hr[data-y="1"] {
  margin-top: 1rem;
}
.Y hr[data-y="1/2"] {
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

function* ProfileCard() {
  yield `<div class="X" data-measure=center data-p=1>`;
  yield `<div>`;
  yield `<img width=70 height=70 src="https://randomuser.me/api/portraits/men/29.jpg" class="rounded-full">`;
  yield `</div>`;

  yield `<hr data-x=1/2>`;

  yield `<div class="Y">`;
  yield `<h1 data-text=0>`;
  yield "Peter Cundall";
  yield "</h1>";
  yield `<hr data-y=1/2>`;
  yield `<p data-text="-1 italic">`;
  yield "Gardening is my passion, especially trees and native shrubbery. Available for hire.";
  yield `</div>`;

  yield `</div>`;
}

function* ProfileSectionTabs({ baseURL }) {
  yield `<nav class="X" data-measure=center data-p=1 data-links="current-color no-underline">`;

  yield `<a href="${new URL(
    "./p/1",
    baseURL
  )}" data-p=1/2 style="border-top: 4px solid var(--theme-primary);">`;
  yield text`3 Reviews`;
  yield `</a>`;

  yield `<a href="${new URL(
    "./p/1/map",
    baseURL
  )}" data-p=1/2 style="border-top: 4px solid transparent;">`;
  yield text`Map`;
  yield `</a>`;

  yield `<a href="${new URL(
    "./p/1/contact",
    baseURL
  )}" data-p=1/2 style="border-top: 4px solid transparent;">`;
  yield text`Contact`;
  yield `</a>`;

  yield `</nav>`;
}

function* ReviewArticle({
  profileID,
  reviewID,
  timeDisplay,
  authorDisplay,
  content
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
      "Peter transformed my garden into something my whole family uses every day. We love lockdowns as we get to stay in our garden."
  });

  yield* ReviewArticle({
    profileID: 1,
    reviewID: 2,
    timeDisplay: "3 weeks ago",
    authorDisplay: "Banjo Patterson",
    content:
      "We now have birds visit our backyard all the time since Peter introduced the trees they would like. It’s changed the feeling of our entire home!"
  });

  yield* ReviewArticle({
    profileID: 1,
    reviewID: 1,
    timeDisplay: "7 weeks ago",
    authorDisplay: "Bob Hawke",
    content:
      "Peter knows Australia’s flora like the back of his hand, I would recommend his expertise to any true Australian."
  });
}

function ProfilePage({ baseURL }) {
  const themePrimary = "#44A36A";

  return [
    `<style>${style}</style>`,
    `<style>:root{ --theme-primary: ${themePrimary}; }</style>`,
    `<body>`,
    `<div class="bg-theme-primary" style="height: 10px"></div>`,
    ...ProfileCard(),
    ...ProfileSectionTabs({ baseURL }),
    ...ReviewsList()
  ];
}

exports.ProfilePage = ProfilePage;
