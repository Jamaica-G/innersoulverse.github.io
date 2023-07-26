const blogs = [
  {
    iframe:
      '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/c-5sfkE6Mms" title="Dining in the Dark" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    title: "Preparation",
    text: "With the event just two weeks away, we were back for our second mock setup, feeling confident we'd have everything ready for the dry run by 5 pm. However, reality had other plans. Setting up took us an entire hour, and the purchased cloth failed to block out the light, leading to some last-minute curtain arrangements. The entrance pipe works were wonky, demanding additional reinforcements. To our dismay, the speakers couldn't be controlled by the phone volume. As the clock struck 7 pm, we were still figuring out the movement and guidance for participants.Well, hope everything works out !!!",
  },

];

blogs.forEach(b=>{
    customBlogElement(b,"blog","div","blogCard","blogDisplay","blogTitle","blogText");
})





function customBlogElement( blog, parentId,el,blogCard,blogDisplay,blogTitle,blogText) {

    const parent = document.getElementById(parentId);
    const card = document.createElement(el);
    const display = document.createElement(el);
    card.classList.add(blogCard);
    display.classList.add(blogDisplay);
    card.append(display);
    display.innerHTML = blog.iframe;
    
    const title = document.createElement(el);
    title.classList.add(blogTitle);
    title.append(blog.title);
    card.append(title);
    
    const text = document.createElement(el);
    text.classList.add(blogText);
    text.append(blog.text);
    card.append(text);
    
    parent.append(card);
}

