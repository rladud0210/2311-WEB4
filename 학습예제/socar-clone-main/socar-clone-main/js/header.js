// 기본/숨어있는/색 변화

const header = document.querySelector('header')
    
posY = 0;

window.addEventListener('scroll',(e)=>{
    if(posY < window.scrollY){ 
        header.classList.add('hide'); // 헤더숨기기
    }else{
        header.classList.remove('hide'); // 헤더나타내기
    }
    
    

    if( window.scrollY < 50){
        // 0으로 제한하면 부자연스러울 수 있음(맨 위일 때). 50 정도로 설정(거의 맨 위일 때)
        header.classList.remove('scrolled');
    }else{
        header.classList.add('scrolled');
    }
    
    posY = window.scrollY; 
    // 두번째 if문에 posY가 없기 때문에 중간에 있어도 잘 작동이 되지만,
    // 이후에 다른 코드가 추가될 것을 감안해서 이벤트리스너가 끝날 때 위치하는 것이 좋음
})
