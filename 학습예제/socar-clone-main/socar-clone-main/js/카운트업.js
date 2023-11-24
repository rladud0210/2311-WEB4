const count = document.getElementsByClassName('count-up')
const section = document.getElementById('start-together')


makeCount(8286684,2000,count[0])

window.addEventListener('scroll',(e) => {
    if(section.getBoundingClientRect().top - window.innerHeight < 0){
        makeCount(8286684,2000,count[0])
    }
})



function makeCount(goal ,지속시간, 대상){
    let nowCount = 0;
    const fps = 60;
    const 재생횟수 = 지속시간/1000 * fps; //120
    const 한번에올라가는수 = goal/재생횟수; //69,055.7

    for(let i = 0 ;  i < 재생횟수 ; i++){
        const 진행도 = (i+1)/재생횟수;
        
        setTimeout(()=>{
            대상.innerText = `${Math.floor(easeInOutQuart(진행도) *goal).toLocaleString()}`      
        },1000/fps*i);
        
        function easeInOutQuart(x){
            return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
        }
    }
}
