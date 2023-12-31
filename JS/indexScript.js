const filePath = './img/Banner'
const events = [

  {
    url: "#",
    img: `${filePath}/ENCORE.png`
  },
  {
    url: "#",
    img: `${filePath}/GOLF.png`
  },

];

// announcement upcoming events
// events.forEach(e=>{
//     customElement("annoucement","span","announcement__event__date",e.date)
//     customElement("annoucement","a","announcement__event__title",e.title,e.url)

// })

// banner
events.forEach((e) => {
  customBanner(
    "banner",
    "div",
    "a",
    "img",
    "banner__card",
    "href",
    e.url,
    "src",
    e.img
  );
});

// *********
// FUNCTIONS
// *********
function customBanner(
  parentId,
  el1,
  el2,
  el3,
  el1ClassList,
  el2Attr,
  el2AttrStr,
  el3Attr,
  el3AttrStr
) {
  const parent = document.getElementById(parentId);
  const element1 = document.createElement(el1);
  const element2 = document.createElement(el2);
  const element3 = document.createElement(el3);
  element1.classList.add(el1ClassList);
  element2.setAttribute(el2Attr, el2AttrStr);
  element3.setAttribute(el3Attr, el3AttrStr);
  element1.append(element2);
  element2.append(element3);
  parent.append(element1);
}

function customElement(parentId, el, classList, text, attr) {
  const parent = document.getElementById(parentId);
  const element = document.createElement(el);
  element.classList.add(classList);
  if (text !== "") {
    element.append(text);
  }
  if (attr !== "") {
    element.setAttribute("href", attr);
  }
  parent.appendChild(element);
}
