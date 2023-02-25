const bodyElements = document.querySelectorAll(".main-center *")
function isHeaderSection(element) {
  // return (["H1", 'H2', 'H3', 'H4', 'H5', 'H6'].includes(element.tagName) || element.classList.contains("one-page-section-title"));
  return (element.classList.contains("one-page-section-title"));
}
function currentSectionLink() { return document.querySelector("#current-section") }

let intersectionCallback = entries => {
  let intersectingEntries = entries.filter(entry => entry.isIntersecting);
  let lastEntry = intersectingEntries[intersectingEntries.length - 1];
  if (lastEntry) {
    // console.log("last entry: ", lastEntry.target)
    // console.log("last entry's parent: ", lastEntry.target.parentElement)
    // console.log("last entry's nearest sibling: ", lastEntry.target.previousElementSibling)
    // console.log(mostRecentHeader(lastEntry.target));
    let relevantHeader = mostRecentHeader(lastEntry.target);
    console.log("relevant header: ", relevantHeader)
    //assign a variable to the text of the first anchor element inside of relevantHeader
    let titleLinkText = relevantHeader.querySelector(".one-page-section-title-text").innerText;
    currentSectionLink().outerHTML = `<a id="current-section" href="">${titleLinkText}</a>`
  }
}

function mostRecentHeader(element) {
    if (isHeaderSection(element)) {
      return element;
    } else if (element.previousElementSibling != null) {
      return mostRecentHeader(element.previousElementSibling);
    } else {
      return mostRecentHeader(element.parentElement);
    }
  }

const observer = new IntersectionObserver(intersectionCallback);

bodyElements.forEach(element => {
  observer.observe(element)
})