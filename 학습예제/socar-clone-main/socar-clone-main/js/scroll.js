const advantage = document.getElementsByClassName('advantage');

for(let i = 0 ; advantage.length ; i ++) {
    for(let j = 0 ; j < advantage[0].childElementCount ; j ++) {
        
        const 대상 = advantage[i].children[j];

        대상.classList.add('scroll-inter')

        window.addEventListener('scroll',() =>{
            if(대상.getBoundingClientRect().top - window.innerHeight < 0 ) {
                대상.classList.add('active');
            }else {
                대상.classList.remove('active');
            }
        })
    }
}