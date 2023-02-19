// const sectionTitles = [];
// document.querySelectorAll("section").forEach(item => sectionTitles.push(item));
// const tocList = []
// document.querySelectorAll(".toc a").forEach(item => tocList.push(item));


// // select the first to start with, even if it's not intersecting the root margin
// tocList[0].firstChild.classList.add("toc-active");

// const observer = new IntersectionObserver(entries => {
//   const entryFilter = entries.filter(entry => entry.isIntersecting);
//   if (entryFilter.length > 0) {
//     const topItem = entryFilter[entryFilter.length - 1].target
//     topItemIndex = tocList.findIndex(item => {
//       return item.href.includes(topItem.id);
//     });
//     const topTocItem = tocList[topItemIndex];
//     console.log(topTocItem)

//     const aboveTopItem = tocList.slice(0 , topItemIndex);
//     const belowTopItem = tocList.slice(topItemIndex + 1);


//     aboveTopItem.forEach(item => {
//       // item.classList.add("past-scroll");
//       item.firstChild.classList.remove("toc-active");
//     })
//     // topTocItem.classList.remove("past-scroll");
//     topTocItem.firstChild.classList.add("toc-active");
//     belowTopItem.forEach(item => {
//       item.firstChild.classList.remove("toc-active");
//       // item.classList.remove("past-scroll");
//   })
//   }
// }, { rootMargin: "-10% 0px -85% 0px" })

// sectionTitles.forEach(title => observer.observe(title));

const sectionTitles = [];
document.querySelectorAll("section").forEach(item => sectionTitles.push(item));
const tocList = []
document.querySelectorAll(".nav-list-main a").forEach(item => tocList.push(item));

// select the first to start with, even if it's not intersecting the root margin
tocList[0].firstChild.classList.add("toc-active");

const observer = new IntersectionObserver(entries => {
  const entryFilter = entries.filter(entry => entry.isIntersecting);
  if (entryFilter.length > 0) {
    const topItem = entryFilter[entryFilter.length - 1].target
    
    topItemIndex = tocList.findIndex(item => {
      return item.href.includes(topItem.id);
    });
    const topTocItem = tocList[topItemIndex];
    
    const aboveTopItem = tocList.slice(0 , topItemIndex);
    const belowTopItem = tocList.slice(topItemIndex + 1);
    
    aboveTopItem.forEach(item => {
      // item.classList.add("past-scroll");
      item.firstChild.classList.remove("toc-active");
    })
    // topTocItem.classList.remove("past-scroll");
    topTocItem.firstChild.classList.add("toc-active");
    belowTopItem.forEach(item => {
      item.firstChild.classList.remove("toc-active");
      // item.classList.remove("past-scroll");
  })
}
}, { rootMargin: "-10% 0px -85% 0px" })

sectionTitles.forEach(title => observer.observe(title));

