//* Variables
let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: "Our true mentor in life is science.",
    person: "M. Kemal Atatürk",
  },
  {
    quote: "The biggest battle is the war against ignorance.",
    person: "M. Kemal Atatürk",
  },
  {
    quote: "A nation devoid of art and artists cannot have a full existence.",
    person: "M. Kemal Atatürk",
  },
  {
    quote:
      "Victory is for those who can say “Victory is mine”. Success is for those who can begin saying “I will succeed.” and say “I have succeeded.” in the end.",
    person: "M. Kemal Atatürk",
  },
  {
    quote: "The feature is in the skies. ",
    person: "M. Kemal Atatürk",
  },
  {
    quote: "Unless a nation's life faces peril, war is murder.",
    person: "M. Kemal Atatürk",
  },
  {
    quote: "Peace at Home, Peace in the World",
    person: "M. Kemal Atatürk",
  },
  {
    quote:
      "Science is the most reliable guide for civilization, for life, for success in the world. Searching a guide other than the science is meaning carelessness, ignorance and heresy.",
    person: "M. Kemal Atatürk",
  },
  {
    quote:
      "I am sorry in two ways. First of all, I, like all the world, am sorry for such a great man to pass away. Secondly, no matter how much I wanted to get to know him personally, it is now impossible for me to do that.",
    person: "Franklin ROOSVELT",
  },
  {
    quote:
      "The death of Atatürk, who saved Türkiye, leaded and elevated the Turkish Nation, is a great loss for both Turkish Nation and for Europe. The teardrops of the men and women from all social classes of his country are the well deserved proof of the good and right deeds this great man has done in his life.",
    person: "Sir Winston Churchill",
  },
];
btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
