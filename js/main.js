const menunameEl = document.getElementsByClassName('item__name')
const submenuEl = document.getElementsByClassName('item__contents')
const searchEl = document.getElementsByClassName('search_icon')
const submenuliEls = document.querySelectorAll('.contents__menu>li')
const optionMenu = document.getElementsByClassName('option')
const optionList = document.getElementsByClassName('optionList')
const inputEls = document.querySelectorAll('input')
const signIn = document.querySelector('.signin')
const signInTxt = document.querySelector('.signinTxt')

// 메인메뉴 클릭시 서브옵션메뉴 생성
for (let i = 0; i < 2; i++) {
  menunameEl[i].addEventListener('click', function () {
    for (let j = 0; j < 2; j++) {
      submenuEl[j].classList.add('hide')
      menunameEl[j].classList.remove('on')
    }
    submenuEl[i].classList.remove('hide')
    menunameEl[i].classList.add('on')
    if (i === 0) {
      optionList[1].style.display = "none"
      optionList[0].style.display = "block"
    } else if (i === 1) {
      optionList[0].style.display = "none"
      optionList[1].style.display = "block"
    }
  });
}


//signin 버튼 클릭시 옵션창(회원가입/로그인 등) 활성화
signIn.addEventListener('click',function(){
  signInTxt.style.display="block"
})
signIn.addEventListener('blur',function(){
  signInTxt.style.display=""
})


// 검색아이콘 클릭 시 검색문구 추가 (숙소메뉴0 / 체험메뉴1)
for (let i = 0; i < searchEl.length; i++) {
  searchEl[i].addEventListener('click', function searchElTxt() {
    const content = document.createTextNode('검색')
    const newdiv = document.createElement('div')
    newdiv.style.cssText = "color:white; font-weight:bold; position:absolute; top:12px; left:37px"
    newdiv.appendChild(content)
    searchEl[i].appendChild(newdiv)
    searchEl[i].style.cssText = "width:90px";

    //숙소메뉴 검색아이콘0 클릭시
    if (i === 0) {
      submenuliEls[0].style.paddingright = "10px";
      optionMenu[0].style.display = "block";
      submenuliEls[0].classList.add('on')
      for (let j = 1; j < 4; j++) {
        optionMenu[j].style.display = "none"
        submenuliEls[j].classList.remove('on')
      }
      //체험메뉴 검색아이콘1 클릭시  
    } else if (i === 1) {
      submenuliEls[4].style.paddingright = "10px";
      optionMenu[4].style.display = "block";
      submenuliEls[4].classList.add('on')
      for (let j = 5; j < 6; j++) {
        optionMenu[j].style.display = "none"
        submenuliEls[j].classList.remove('on')
      }
    }
  })
}

//옵션창 활성화 상태에서 다른 부분 클릭시 옵션창 비활성화
for (let i = 0; i < submenuEl.length; i++) {
  submenuEl[i].addEventListener('click', function () {
    optionList[i].style.display = "block"
  })
  submenuEl[i].addEventListener('blur', function () {
    optionList[i].style.display = "none"
    for (let j = 0; j < submenuliEls.length; j++) {
      submenuliEls[j].classList.remove('on')
    }
  })

 // 옵션창 내의 input 클릭 후 다른 부분 클릭시 옵션창 비활성화
  inputEls[i].addEventListener('blur', function () {
    optionList[i].style.display = "none"
    inputEls[i].value=""
    for (let j = 0; j < submenuliEls.length; j++) {
      submenuliEls[j].classList.remove('on')
    }
  })


}





//서브메뉴 클릭시 입체적으로 그림자생성 
for (let i = 0; i < submenuliEls.length; i++) {
  submenuliEls[i].addEventListener('click', function () {
    for (let j = 0; j < submenuliEls.length; j++) {
      submenuliEls[j].classList.remove('on')
      optionMenu[j].style.display = "none"
    }
    submenuliEls[i].classList.add('on')
    optionMenu[i].style.display = "block"


    //검색아이콘 활성화
    for (let i = 0; i < searchEl.length; i++) {
      const content = document.createTextNode('검색')
      const newdiv = document.createElement('div')
      newdiv.style.cssText = "color:white; font-weight:bold; position:absolute; top:12px; left:37px;"
      newdiv.appendChild(content)
      searchEl[i].appendChild(newdiv)
      searchEl[i].style.cssText = "width:90px;"
      if (i === 0) {
        submenuliEls[0].style.cssText = "padding-right:10px";
      } else if (i === 1) {
        submenuliEls[4].style.cssText = "padding-right:10px";
      }
    }
  })

}



// 인원추가 버튼
const minusiconLine = document.getElementsByClassName('button__minus')
const minusicon = document.querySelectorAll('.button__minus span')
const plusiconLine = document.getElementsByClassName('button__plus')
const plusicon = document.querySelectorAll('.button__plus span')
const resultEl = document.getElementsByClassName('result')


for (let i = 0; i < minusicon.length; i++) {
  minusicon[i].addEventListener('click', function () {

    let number = resultEl[i].innerText;

    number = parseInt(number) - 1;
    if (number < 0) {
      number = 0;
    } else if (0 < number < 5) {
      plusiconLine[i].style.borderColor = "grey";
      plusicon[i].style.color = "grey";
      minusiconLine[i].style.borderColor = "grey";
      minusicon[i].style.color = "grey";
    }
    if (number === 0) {
      minusiconLine[i].style.borderColor = "#ccc";
      minusicon[i].style.color = "#ccc";
      plusiconLine[i].style.borderColor = "grey";
      plusicon[i].style.color = "grey";
    }
    resultEl[i].innerText = number;
  })


  plusicon[i].addEventListener('click', function () {
    let number = resultEl[i].innerText;

    number = parseInt(number) + 1;
    if (number > 5) {
      number = 5;
    } else if (0 < number < 5) {
      minusiconLine[i].style.borderColor = "grey";
      minusicon[i].style.color = "grey";
    }
    if (number === 5) {
      plusiconLine[i].style.borderColor = "#ccc";
      plusicon[i].style.color = "#ccc";
      minusiconLine[i].style.borderColor = "grey";
      minusicon[i].style.color = "grey";
    }
    resultEl[i].innerText = number;
  })
}