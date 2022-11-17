import { dates } from "./data.js";

//return the timeline class element from the html file
const timeline = document.querySelector(".timeline");

function getCard(index) {
  const { date, title, image, fullDescription } = dates[index];
  const wrapper = document.createElement("div");
  const cardHeader = document.createElement("div");
  const timelineItemSummary = document.createElement("div");
  const _date = document.createElement("span");
  const _title = document.createElement("h2");
  const seeMoreInfo = document.createElement("p");
  const timelineImage = document.createElement("img");
  const closeButton = document.createElement("span");
  wrapper.setAttribute("id", "card-wrapper"); //<div id ="card-wrapper"></div>
  timelineItemSummary.setAttribute("id", "card-content");
  cardHeader.setAttribute("id", "card-header");
  timelineImage.setAttribute("src", image); 
  timelineImage.setAttribute("alt", title); //<img src="image" alt="title"/>
  closeButton.setAttribute("id", "modal-close-button");
  const dateText = document.createTextNode(date);
  const titleText = document.createTextNode(title);
  const detailsText = document.createTextNode(fullDescription);
  _title.appendChild(titleText);
  _date.appendChild(dateText);
  seeMoreInfo.appendChild(detailsText);
  cardHeader.appendChild(_date);
  cardHeader.appendChild(closeButton);
  timelineItemSummary.appendChild(cardHeader);
  timelineItemSummary.appendChild(timelineImage);
  timelineItemSummary.appendChild(_title);
  timelineItemSummary.appendChild(seeMoreInfo);
  wrapper.appendChild(timelineItemSummary);
  closeButton.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      timeline.removeChild(wrapper);
    },
    false
  );
  wrapper.style.display = "flex";
  timeline.prepend(wrapper);
}
dates.map(({ date, title, summary }, index) => {
  const item = document.createElement("div");
  const _date = document.createElement("span");
  const _title = document.createElement("h2");
  const _caption = document.createElement("p");
  const circle = document.createElement("div");
  const button = document.createElement("button");
  const dateText = document.createTextNode(date);
  const titleText = document.createTextNode(title);
  const captionText = document.createTextNode(summary);
  const buttonText = document.createTextNode("Gimme, Gimme MORE (info)");
  item.setAttribute("class", "timeline-item");
  button.setAttribute("data-index", index);
  circle.setAttribute("class", "timeline-circle");
  _title.setAttribute("class", "timeline-item-title");
  _date.setAttribute("class", "timeline-item-date");
  _caption.setAttribute("class", "timeline-item-summary");
  button.setAttribute("class", "timeline-item-more-info");
  _title.appendChild(titleText);
  _date.appendChild(dateText);
  _caption.appendChild(captionText);
  button.appendChild(buttonText);
  item.appendChild(circle);
  circle.appendChild(_date);
  item.appendChild(_title);
  item.appendChild(_caption);
  item.appendChild(button);
  button.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      const index = e.target.getAttribute("data-index");
      if (index) getCard(index);
    },
    false
  );
  timeline.appendChild(item);
});
