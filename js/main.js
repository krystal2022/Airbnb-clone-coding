// 메인메뉴 클릭시 서브옵션메뉴 생성
const menuname1El = document.querySelector('.item__name.first_name')
const menuname2El = document.querySelector('.item__name.second_name')
const submenu1El = document.querySelector('.item__contents.first')
const submenu2El = document.querySelector('.item__contents.second')

menuname1El.addEventListener('click', function(){
    submenu2El.classList.remove('on')
    submenu1El.classList.remove('hide')
    menuname1El.classList.add('on')
    menuname2El.classList.remove('on')
    
});
menuname2El.addEventListener('click', function(){
    submenu1El.classList.add('hide')
    submenu2El.classList.add('on')
    menuname1El.classList.remove('on')
    menuname2El.classList.add('on')
    
});


// 돋보기아이콘 클릭 시 검색문구 추가 (숙소메뉴)
function appendChild1(){
    const searchkorean1El = document.querySelector('.item__contents.first .search_icon')
    
    const content1 = document.createTextNode('검색')
    const newdiv1 = document.createElement('div')
    newdiv1.style.color = "white"
    newdiv1.style.fontWeight = "bold"
    newdiv1.style.position = "absolute"
    newdiv1.style.top = "12px"
    newdiv1.style.left = "37px"
    
  
    newdiv1.appendChild(content1)
    searchkorean1El.appendChild(newdiv1)
}
// 돋보기아이콘 클릭 시 검색문구 추가 (체험메뉴)
function appendChild2(){
    const searchkorean2El = document.querySelector('.item__contents.second .search_icon')
    
    const content2 = document.createTextNode('검색')
    const newdiv2 = document.createElement('div')
    newdiv2.style.color = "white"
    newdiv2.style.fontWeight = "bold"
    newdiv2.style.position = "absolute"
    newdiv2.style.top = "12px"
    newdiv2.style.left = "37px"
    
  
    newdiv2.appendChild(content2)
    searchkorean2El.appendChild(newdiv2)
}
// 돋보기아이콘 클릭 시 스타일 변경
function submenusize1(){
    const submenuliEl = document.querySelector('.item__contents.first .contents__menu li')
    submenuliEl.style.paddingRight = "20px"
}
function submenusize2(){
    const submenuliEl = document.querySelector('.item__contents.second .contents__menu li')
    submenuliEl.style.paddingRight = "20px"
}

const search1El = document.querySelector('.item__contents.first .search_icon')
const search2El = document.querySelector('.item__contents.second .search_icon')

search1El.addEventListener('click', function(){
    
    // submenuliEl.classList.add('on')
    appendChild1()
    submenusize1()
    search1El.classList.add('on')
})
search2El.addEventListener('click', function(){
    
    // submenuliEl.classList.add('on')
    appendChild2()
    submenusize2()
    search2El.classList.add('on')
})


// const div_list_length = div_list.length;
//   alert(div_list_length);

// for(let i = 0; i < div_list_length; i++)  {
//     alert(div_list[i].innerText);
//   }

// 인원추가 버튼
function count(type){
    
    const buttonEl = document.querySelectorAll('onclick')
    
    if(type === 'plus'){
        number = parseInt(number) + 1;
    } else if(type === 'minus'){
        number = parseInt(number) - 1
        
    }
    if ( number<0 ){
        number = 0;
    }else if ( number>5 ) {
       number = 5;
    }
    
    if (number === 0){
        minusicon.style.color = "#ccc"
        plusicon.style.color = "grey"
    }else if (0 < number < 5){
        plusicon.style.color = "grey"
        minusicon.style.color = "grey"
    } if (number === 5) {
        plusicon.style.color = "#ccc"
        minusicon.style.color = "grey"
    }
    
    
}
    const minusicon = document.querySelectorAll('.button__minus .material-icons')
    const plusicon = document.querySelectorAll('.button__plus .material-icons')
    const plusbutton = document.querySelectorAll('.button__plus')
    
    const resultEl = document.querySelectorAll('.result')

    plusbutton[i].addEventListener('click', function(){
    resultEl[i].innerText = number
})
