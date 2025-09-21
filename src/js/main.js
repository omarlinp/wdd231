import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer > a");
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
secondSpan.textContent = parkData.states