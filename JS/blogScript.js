const blogs = [
  {
    title: "Preparation 23 Jul 2023",
    text: "With the event just two weeks away, we were back for our second mock setup, feeling confident we'd have everything ready for the dry run by 5 pm. However, reality had other plans. Setting up took us an entire hour, and the purchased cloth failed to block out the light, leading to some last-minute curtain arrangements. The entrance pipe works were wonky, demanding additional reinforcements. To our dismay, the speakers couldn't be controlled by the phone volume. As the clock struck 7 pm, we were still figuring out the movement and guidance for participants.Well, hope everything works out !!!",
    display:
    '<iframe width="100%" height="98%" src="https://www.youtube.com/embed/c-5sfkE6Mms" title="Dining in the Dark" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  
  {
    title: "Renewed Partnership 9 July 2023",
    text: "We are overjoyed to reconnect with our event partner, Yorimichu, and absolutely thrilled to discover their new menus, showcased in their TikTok account. Additionally, they have extended their space by adding a new unit, and have allowed us to book our event in this delightful new cosy area with street inspired decor.",  
    display:
    '<img src="../img/09Jul2023/1.png" width="100%" height="98%">' +
    '<img src="../img/09Jul2023/2.png" width="100%" height="98%">' +
    '<img src="../img/09Jul2023/11.png"  width="100%" height="98%">' 
  },

  {   
    title: "Hello World 22 June 2023",
    text: " After a gap of over two years since we first introduced dining in the dark at Yorimichu, we had to discontinue the experience due to COVID. We are excited to announce that we are back now, and we sincerely hope for everyone's continued support.",
    display:
    '<img src="../img/22June2023/1.jpg" width="100%" height="98%">'
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
    display.innerHTML = blog.display;
    
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

