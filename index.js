let box = document.querySelector('.container');
const boxReact =box.getBoundingClientRect();



box.addEventListener('mousemove',(e)=>{
    console.log(e)


    const xPosition=(e.clientX - boxReact.left)/ boxReact.width;
    const yPosition=(e.clientY - boxReact.top)/ boxReact.height - 0.6;
    const xOffSet=(xPosition - 0.6);
    const dknor= Math.min(Math.max(xOffSet,-0.6) ,0.6) 

    box.style.transform = `perspective(1000px)   rotateY(${dknor *45}deg)   rotateX(${yPosition *45}deg) `;
})


box.addEventListener('mouseleave',(e)=>{
    box.style.transform ='none';
})

