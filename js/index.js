import { dates } from "./data.js";

//return the timeline class element from the html file
const timeline = document.querySelector(".timeline");

//2. using a for each loop, which carries out 1 function for each array element. 
dates.forEach((element) => {
  //2.i.a create an element named div with the required class name, and store it within a variable named timelineItem
  const timelineItem = document.createElement("div");
  timelineItem.className = "timeline-item";
  //Append timelineItem to the html timeline
  timeline.appendChild(timelineItem);
  //Create an h2 with required class name
  const h2 = document.createElement("h2");
  h2.className = "timeline-item-title";
  // creating a text node that pulls in the title of the element, and store within it a variable called content
  let content = document.createTextNode(element.title);
  // append the title content into the h2
  h2.appendChild(content);
  // append h2 title to the html div, named timelineItem
  timelineItem.appendChild(h2);

  //2.i.b creating a span element with the required class name that contains the date for each item
  const span = document.createElement("span");
  span.className = "timeline-item-date";
  content = document.createTextNode(element.date);
  span.appendChild(content);
  timelineItem.appendChild(span);

  //2.i.c create an element, named p that displays the summary text that has the class name timeline-item-summary
  const p = document.createElement("p");
  p.className = "timeline-item-summary";
  content = document.createTextNode(element.summary);
  p.appendChild(content);
  timelineItem.appendChild(p);

  //2.i.d create a button element that opens the modal so that a visitor can see full information must have the class name timeline-item-more-info
  const button = document.createElement("button");
  button.className = "timeline-item-more-info";
  // create the text to go on the button
  const text = document.createTextNode("More info");
  // append the "more info" text to the button
  button.appendChild(text);
  timelineItem.appendChild(button);
});

function getCard(index) {
  const { date, title, image, details } = dates[index];
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
  const detailsText = document.createTextNode(details);
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
dates.map(({ date, title, caption }, index) => {
  const item = document.createElement("div");
  const _date = document.createElement("span");
  const _title = document.createElement("h2");
  const _caption = document.createElement("p");
  const circle = document.createElement("div");
  const button = document.createElement("button");
  const dateText = document.createTextNode(date);
  const titleText = document.createTextNode(title);
  const captionText = document.createTextNode(caption);
  const buttonText = document.createTextNode("Gimme, Gimme MORE (info)");
  item.setAttribute("class", "timeline-item");
  button.setAttribute("data-index", index);
  circle.setAttribute("class", "timeline-circle");
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
