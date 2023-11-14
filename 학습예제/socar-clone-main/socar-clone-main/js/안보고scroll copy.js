// advatage를 불러오고
// 반복문을 활용해서 advantage와 advantage의 자식요소에게 scroll-inter 를 넣는다.

const advantage = document.getElementsByClassName('advantage')

for(let i = 0 ; i = advantage.leghth ; i ++) {
    for(let j = 0 ; j = advantage[0].childElementCount ; j++ ) {

        const 대상 = advantage[i].children[j];

        대상.classlist.add('scroll-inter')

        window.addEventListener('scroll',()=>{
            if(대상.getBoundingClientRect().top - window.innerHeight < 0){
                대상.classList.add('active')
            }else{
                대상.classList.remove('active')
            }
        })
    }
}