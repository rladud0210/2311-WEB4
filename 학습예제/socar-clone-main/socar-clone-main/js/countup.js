// 이전에 했던 카운트업 예제를 이용해
// 쏘카 예제에 있는 카운트업을 작동하게 만들어주세요
// 가속도 포함해서 만들어줍시다!


const countUp = document.getElementsByClassName('count-up')
const countUpNumbers = [];

for(let i = 0 ; i < countUp.length ; i ++) {
    countUpNumbers.push(countUp[i].innerText);
}

console.log(countUpNumbers);


window.addEventListener('scroll', () =>{
    for(let i = 0 ; i < countUp.length ; i ++) {
        if(countUp[i].getBoundingClientRect().top - window.innerHeight < 0 && !countUp[i].classList.contains('played')) {
            countUp[i].classList.add('played');
            makeCount(countUp[i],2000,60,countUpNumbers[i]);
        }
    }
})


function makeCount(대상,지속시간,fps,목표){
    const goal = Number(목표);

    const 재생횟수 = 지속시간/1000 * fps;

    
    for(let i = 0 ; i < 재생횟수 ; i++) {
        const 진행도 = (i+1) / 재생횟수;
        
        // console.log(easeInOutQuart(진행도)*100);
        
        setTimeout(() => {
            // nowCount += 10000;
            대상.innerText = `${Math.floor(easeInOutQuart(진행도) * goal).toLocaleString()}`
            console.log(easeInOutQuart(진행도) * goal)
        }, 1000/fps*i);
        
    }
    

    function easeInOutQuart(x) {
        return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
    }
    
    
}