// 메인메뉴 클릭시 서브옵션메뉴 생성
const menuname1El = document.querySelector('.item__name.first_name')
const menuname2El = document.querySelector('.item__name.second_name')
const submenu1El = document.querySelector('.item__contents.first')
const submenu2El = document.querySelector('.item__contents.second')

const searchEl = document.getElementsByClassName('search_icon')
const submenuliEls = document.querySelectorAll('.contents__menu>li')
const optionMenu = document.getElementsByClassName('option')

menuname1El.addEventListener('click', function () {
  submenu2El.classList.remove('on')
  submenu1El.classList.remove('hide')
  menuname1El.classList.add('on')
  menuname2El.classList.remove('on')
  for (let i = 4; i < 6; i++) {
    submenuliEls[i].classList.remove('on')
  }
});
menuname2El.addEventListener('click', function () {
  submenu1El.classList.add('hide')
  submenu2El.classList.add('on')
  menuname1El.classList.remove('on')
  menuname2El.classList.add('on')
  for (let i = 0; i < 4; i++) {
    optionMenu[i].style.display = "none";
    submenuliEls[i].classList.remove('on')
  }

});



// 검색아이콘 클릭 시 검색문구 추가 (숙소메뉴0 / 체험메뉴1)

console.log(optionMenu)
for (let i = 0; i < searchEl.length; i++) {
  searchEl[i].addEventListener('click', function searchElTxt() {
    const content = document.createTextNode('검색')
    const newdiv = document.createElement('div')
    newdiv.style.cssText = "color:white; font-weight:bold; position:absolute; top:12px; left:37px"
    newdiv.appendChild(content)
    searchEl[i].appendChild(newdiv)
    searchEl[i].style.cssText = "width:90px";
    if (i === 0) {
      submenuliEls[0].style.cssText = "padding-right:10px";
      optionMenu[0].style.cssText = "display: block";
      submenuliEls[0].classList.add('on')
    } else if (i === 1) {
      submenuliEls[4].style.cssText = "padding-right:10px";
      optionMenu[0].style.cssText = "display: none";
    }

  })
}





//서브메뉴 클릭시 입체적으로 그림자생성 
for (let i = 0; i < submenuliEls.length; i++) {
  submenuliEls[i].addEventListener('click', function () {

    for (let j = 0; j < submenuliEls.length; j++) {
      submenuliEls[j].classList.remove('on')
    }
    submenuliEls[i].classList.add('on')

    //검색아이콘 활성화
    for (let i = 0; i < searchEl.length; i++) {
      const content = document.createTextNode('검색')
      const newdiv = document.createElement('div')
      newdiv.style.cssText = "color:white; font-weight:bold; position:absolute; top:12px; left:37px"
      newdiv.appendChild(content)
      searchEl[i].appendChild(newdiv)
      searchEl[i].style.cssText = "width:90px";
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