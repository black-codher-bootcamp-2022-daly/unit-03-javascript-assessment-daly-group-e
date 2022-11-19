import { dates } from "./data.js";
//return the timeline class element from the html file
const timeline = document.querySelector(".timeline");

dates.map(({ date, title, summary }, index) => {
  const item = document.createElement("div");
  const dateTag = document.createElement("span");
  const titleTag = document.createElement("h2");
  const _caption = document.createElement("p");
  const circle = document.createElement("div");
  const button = document.createElement("button");
  const dateText = document.createTextNode(date);
  const titleText = document.createTextNode(title);
  const captionText = document.createTextNode(summary);
  const buttonText = document.createTextNode("see more info🤩");
  item.setAttribute("class", "timeline-item");
  button.setAttribute("data-index", index);
  circle.setAttribute("class", "timeline-circle");
  titleTag.setAttribute("class", "timeline-item-title");
  dateTag.setAttribute("class", "timeline-item-date");
  _caption.setAttribute("class", "timeline-item-summary");
  button.setAttribute("class", "timeline-item-more-info");
  titleTag.appendChild(titleText);
  dateTag.appendChild(dateText);
  _caption.appendChild(captionText);
  button.appendChild(buttonText);
  item.appendChild(circle);
  circle.appendChild(dateTag);
  item.appendChild(titleTag);
  item.appendChild(_caption);
  item.appendChild(button);
  button.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      const index = e.target.getAttribute("data-index");
      if (index) modal (index);
    },
    false
  );
  timeline.appendChild(item);
});

function modal (index) {
  const { date, title, image, fullDescription } = dates[index];
  const modalContainer = document.createElement("div");
  const modalTitle = document.createElement("div");
  const modalContent = document.createElement("div");

  const dateTag = document.createElement("span");
  const titleTag = document.createElement("h2");
  const seeMoreInfo = document.createElement("p");
  const imageTag = document.createElement("img");
  const closeButton = document.createElement("span");

  modalContainer.setAttribute("id", "modal-container");
  modalContent.setAttribute("id", "modal-content");
  modalTitle.setAttribute("id", "modal-title");
  imageTag.setAttribute("src", image);
  imageTag.setAttribute("alt", title);
  closeButton.setAttribute("id", "modal-close-button");

  const dateText = document.createTextNode(date);
  const titleText = document.createTextNode(title);
  const detailsText = document.createTextNode(fullDescription);

  titleTag.appendChild(titleText);
  dateTag.appendChild(dateText);
  seeMoreInfo.appendChild(detailsText);

  modalTitle.appendChild(dateTag);
  modalTitle.appendChild(closeButton);
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(imageTag);
  modalContent.appendChild(titleTag);
  modalContent.appendChild(seeMoreInfo);
  modalContainer.appendChild(modalContent);

  closeButton.addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      timeline.removeChild(modalContainer);
    },
    false
  );

  modalContainer.style.display = "flex";
  timeline.prepend(modalContainer);
};
