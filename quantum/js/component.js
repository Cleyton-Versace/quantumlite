const menuHamburguer=document.getElementById('menu-hamburguer');
const modal=document.getElementById('modal');

menuHamburguer.addEventListener('click',function(){
    if(modal.style.display==='flex'){
        modal.style.display='none'
        
    }
    else{
        modal.style.display='flex';
        
    }
   
})


