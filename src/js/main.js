import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

/*const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.textContent = parkData.fullName;

document.title = parkData.fullName;

const image = document.querySelector(".hero-banner img");
const randomIndex = Math.floor(Math.random() * parkData.images.length)
image.src =parkData.images[randomIndex].url;
image.alt =parkData.images[randomIndex].altText;

const banner = document.querySelector(".hero-banner_title");
banner.textContent = parkData.name

// Select the parent element
const subtitle = document.querySelector('.hero-banner_subtitle');
// Select the first span
const firstSpan = subtitle.querySelectorAll('span')[0];
firstSpan.textContent = parkData.designation
// Select the second span
const secondSpan = subtitle.querySelectorAll('span')[1];
secondSpan.textContent = parkData.states*/

function setHeaderInfo(data) {
  // insert data into disclaimer section
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.url;
  disclaimer.innerHTML = data.fullName;
  // update the title of the site. Notice that we can select things in the head just like in the body with querySelector
  document.querySelector("head > title").textContent = data.fullName;
  // set the banner image
  document.querySelector(".hero-banner > img").src = data.images[0].url;
  // use the template function above to set the rest of the park specific info in the header
  document.querySelector(".hero-banner__content").innerHTML =
    parkInfoTemplate(data);
}








function setParkIntro(data) {
  const introEl = document.querySelector(".intro");
  introEl.innerHTML = `<h1>${parkData.fullName}</h1>
  <p>${parkData.description}</p>`;
}

function setParkInfoLinks(data) {
  const infoEl = document.querySelector(".info");
  const html = data.map(mediaCardTemplate);
  infoEl.innerHTML = html.join("");
}

function setFooter(data) {
  const footerEl = document.querySelector("#park-footer");
  footerEl.innerHTML = footerTemplate(data);
}

setHeaderInfo(parkData);






















const parkInfoLinks = [
  {
    name: "Current Conditions &#x203A;",
    link: "conditions.html",
    image: parkData.images[2].url,
    description:
      "See what conditions to expect in the park before leaving on your trip!"
  },
  {
    name: "Fees and Passes &#x203A;",
    link: "fees.html",
    image: parkData.images[3].url,
    description: "Learn about the fees and passes that are available."
  },
  {
    name: "Visitor Centers &#x203A;",
    link: "visitor_centers.html",
    image: parkData.images[9].url,
    description: "Learn about the visitor centers in the park."
  }
];