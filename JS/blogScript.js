const event1 = {title:"DINING IN THE DARK", 
date:"06 AUG",
url:"https://www.eventbrite.sg/e/singles-dining-in-the-dark-tickets-653722941917?aff=ebdssbdestsearch&from=6c5eb9b82ad211eeab738e25e12e3ac6"};


function customElement(parentId,el,classList,text,attr) {

    const parent = document.getElementById(parentId)
    const element = document.createElement(el)
    element.classList.add(classList)
    if (text !==""){
        element.append(text)
    }
    if (attr !==""){
        element.setAttribute("href",attr)
    }
    parent.appendChild(element)
}
// blog
customElement('underConstruction','div','blogConstruction','See You Soon !',)


