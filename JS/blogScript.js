const blogs = [

{
  title:"Dining In the Dark 13 Aug 2023",
  text: "We recently hosted our first dining in the dark event since the onset of the pandemic. Our team was on-site at 3:30 PM to set up the venue. However, the setup process took a bit more time than anticipated, primarily because of the curtain installation. The challenge was securing the curtains in hard-to-reach places and ensuring no light leaks. Fortunately, we managed to complete this task just before 6:00 PM. Additionally, there were some issues with setting up the IR camera due to a change in devices. This caused a bit of panic as we received an early call from a participant who arrived before we were fully prepared. Despite this, our team rallied and ensured a smooth event eventually. The event itself ran a bit longer than planned, mainly because of the extra effort put into custom food preparation. Despite the extended duration, we received positive feedback from the participants. They found the experience intriguing, and the food was as fantastic as ever.",
  display:
  '<iframe width="100%" height="98%" src="https://www.youtube.com/embed/mB2AFasdEWM" title="Dining in the dark" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
},

  {
    title: "Preparation 23 Jul 2023",
    text: "With the event just two weeks away, we were back for our second mock setup, feeling confident we'd have everything ready for the dry run by 5 pm. However, reality had other plans. Setting up took us an entire hour, and the purchased cloth failed to block out the light, leading to some last-minute curtain arrangements. The entrance pipe works were wonky, demanding additional reinforcements. To our dismay, the speakers couldn't be controlled by the phone volume. As the clock struck 7 pm, we were still figuring out the movement and guidance for participants.Well, hope everything works out !!!",
    display:
    '<iframe width="100%" height="98%" src="https://www.youtube.com/embed/c-5sfkE6Mms" title="Dining in the Dark" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  },
  
  {
    title: "Renewed Partnership 9 July 2023",
    text: "We are overjoyed to reconnect with our event partner, Yorimichi, and absolutely thrilled to discover their new menus, showcased in their TikTok account. Additionally, they have extended their space by adding a new unit, and have allowed us to book our event in this delightful new cosy area with street inspired decor.",  
    display:
    '<img src="../img/09Jul2023/1.png" width="100%" height="98%">' +
    '<img src="../img/09Jul2023/2.png" width="100%" height="98%">' +
    '<img src="../img/09Jul2023/11.png"  width="100%" height="98%">' 
  },

  {   
    title: "Hello World 22 June 2023",
    text: " After a gap of over two years since we first introduced dining in the dark at Yorimichi, we had to discontinue the experience due to COVID. We are excited to announce that we are back now, and we sincerely hope for everyone's continued support.",
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

