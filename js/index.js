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
