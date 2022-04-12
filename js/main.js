// 메인메뉴 클릭시 서브옵션메뉴 생성
const menuname1El = document.querySelector('.item__name.first_name')
const menuname2El = document.querySelector('.item__name.second_name')
const submenu1El = document.querySelector('.item__contents.first')
const submenu2El = document.querySelector('.item__contents.second')

menuname1El.addEventListener('click', function () {
  submenu2El.classList.remove('on')
  submenu1El.classList.remove('hide')
  menuname1El.classList.add('on')
  menuname2El.classList.remove('on')

});
menuname2El.addEventListener('click', function () {
  submenu1El.classList.add('hide')
  submenu2El.classList.add('on')
  menuname1El.classList.remove('on')
  menuname2El.classList.add('on')

});




// 돋보기아이콘 클릭 시 검색문구 추가 (숙소메뉴)
const searchEl = document.getElementsByClassName('search_icon')
function appendChild1() {
  const content1 = document.createTextNode('검색')
  const newdiv1 = document.createElement('div')
  newdiv1.style.color = "white"
  newdiv1.style.fontWeight = "bold"
  newdiv1.style.position = "absolute"
  newdiv1.style.top = "12px"
  newdiv1.style.left = "37px"

  newdiv1.appendChild(content1)
  searchEl[0].appendChild(newdiv1)
}
// 돋보기아이콘 클릭 시 검색문구 추가 (체험메뉴)
function appendChild2() {
  const content2 = document.createTextNode('검색')
  const newdiv2 = document.createElement('div')
  newdiv2.style.color = "white"
  newdiv2.style.fontWeight = "bold"
  newdiv2.style.position = "absolute"
  newdiv2.style.top = "12px"
  newdiv2.style.left = "37px"


  newdiv2.appendChild(content2)
  searchEl[1].appendChild(newdiv2)
}

// // 돋보기아이콘 클릭 시 스타일 변경
// 서브메뉴들 오른쪽 크기가 늘어남(숙소)
const submenuliEl = document.querySelectorAll('.contents__menu li')
function submenusize1() {
  submenuliEl[0].style.paddingRight = "20px"
}
//서브메뉴들 오른쪽 크기가 늘어남(체험)
function submenusize2() {
  submenuliEl[1].style.paddingRight = "20px"
}


searchEl[0].addEventListener('click', function () {
  // submenuliEl.classList.add('on')
  appendChild1() //검색문구추가
  submenusize1() //서브메뉴들 오른쪽사이즈 늘림
  searchEl[0].classList.add('on')
})
searchEl[1].addEventListener('click', function () {
  // submenuliEl.classList.add('on')
  appendChild2() //검색문구추가
  submenusize2() //서브메뉴들 오른쪽사이즈 늘림
  searchEl[1].classList.add('on')
})





// 인원추가 버튼
const minusiconLine = document.getElementsByClassName('button__minus')
const minusicon = document.querySelectorAll('.button__minus span')
const plusiconLine = document.getElementsByClassName('button__plus')
const plusicon = document.querySelectorAll('.button__plus span')
const resultEl = document.getElementsByClassName('result')


for(let i =0; i<minusicon.length; i++){
  minusicon[i].addEventListener('click', function(){
    
    let number = resultEl[i].innerText;

        number = parseInt(number) - 1;
        if (number < 0) {
          number = 0;
        } else if (0 < number < 5) {
          plusiconLine[i].style.borderColor = "grey"
          plusicon[i].style.color = "grey"
          minusiconLine[i].style.borderColor = "grey"
          minusicon[i].style.color = "grey"
        }
        if (number === 0) {
          minusiconLine[i].style.borderColor = "#ccc"
          minusicon[i].style.color = "#ccc"
          plusiconLine[i].style.borderColor = "grey"
          plusicon[i].style.color = "grey"
        }
        resultEl[i].innerText = number;
      })


      plusicon[i].addEventListener('click', function () {
            let number = resultEl[i].innerText;
        
            number = parseInt(number) + 1;
            if (number > 5) {
              number = 5;
            } else if (0 < number < 5) {
              minusiconLine[i].style.borderColor = "grey"
              minusicon[i].style.color = "grey"
            }
            if (number === 5) {
              plusiconLine[i].style.borderColor = "#ccc"
              plusicon[i].style.color = "#ccc"
              minusiconLine[i].style.borderColor = "grey"
              minusicon[i].style.color = "grey"
            }
            resultEl[i].innerText = number;
          })
}

