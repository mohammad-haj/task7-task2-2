const image = document.getElementById('myImage');
const image2 = document.getElementById('myImage2');
    const section = document.getElementById('mySection');

    image.addEventListener('click', () => {
    
      section.style.backgroundColor = "gray";
      section.style.color = "white";
    });

    image2.addEventListener('click', () => {
    
        section.style.backgroundColor = "white";
        section.style.color = "black";
      });