// 스크롤을 올릴 떄 scrolled 로,
// 스크롤 내릴 때 hide로 만들어야 됨

// 스크롤을 내릴 때 hide 추가, scrolled 빼고
// 스크롤을 올릴 때 hide 빼고, scrolled 추가


const header = document.querySelector(header);

console.log(header.getBoundingClientRect())
       
        
window.addEventListener('scroll',(e)=>{
    if(posY > window.scrollY){ 
        헤더보이기()
    }else{
        헤더숨기기()
    }
    posY = window.scrollY;
})

function 헤더보이기(){
    header.classList.add('scrolled');
}

// function 헤더보이기(){
//     header.classList.remove('hide');
//     header.classList.add('scrolled');
// }