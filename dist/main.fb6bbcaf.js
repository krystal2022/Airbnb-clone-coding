// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/main.js":[function(require,module,exports) {
var headerWrap = document.querySelector('.headerWrap');
var headerLogo = document.querySelectorAll('.logo img');
var menunameEl = document.getElementsByClassName('item__name');
var submenuEl = document.getElementsByClassName('item__contents');
var startSearchTxt = document.getElementsByClassName('startSearchTxt');
var searchEl = document.getElementsByClassName('search_icon');
var searchElTxt = document.getElementsByClassName('searchTxt');
var submenuliElsBox = document.getElementsByClassName('contents__menu');
var submenuliEls = document.querySelectorAll('.contents__menu>li');
var optionMenu = document.getElementsByClassName('option');
var optionList = document.getElementsByClassName('optionList');
var inputEls = document.querySelectorAll('input');
var headerRightHost = document.querySelector('.header_right_host a');
var headerRightLang = document.querySelector('.header_right_host .material-icons');
var signIn = document.querySelector('.signin');
var signInTxt = document.querySelector('.signinTxt'); //서브메뉴 클릭시 입체적으로 그림자생성 (디폴트)

var _loop = function _loop(i) {
  submenuliEls[i].addEventListener('click', function () {
    for (var j = 0; j < submenuliEls.length; j++) {
      submenuliEls[j].classList.remove('on');
      optionMenu[j].style.display = "none";
    }

    submenuliEls[i].classList.add('on');
    optionMenu[i].style.display = "block";
  });
};

for (var i = 0; i < submenuliEls.length; i++) {
  _loop(i);
} //서브메뉴 클릭시 검색아이콘 활성화


var _loop2 = function _loop2(_i) {
  submenuliElsBox[_i].addEventListener('click', function () {
    searchElTxt[_i].style.cssText = "display:block";
    searchEl[_i].style.width = "90px";
  });
};

for (var _i = 0; _i < searchEl.length; _i++) {
  _loop2(_i);
} //스크롤시 헤더 변경


document.addEventListener('scroll', function () {
  var nowScrollTop = document.documentElement.scrollTop;

  if (nowScrollTop > 0) {
    //헤더 높이가 좁아졌을 때 (스크롤이 0 이상일 때)
    headerWrap.classList.add('up');
    headerWrap.style.backgroundColor = "#fff";
    headerRightHost.style.color = "#222";
    headerRightLang.style.color = "#222"; //i가 3개

    for (var _i2 = 0; _i2 < menunameEl.length; _i2++) {
      menunameEl[_i2].style.display = "none";
    } //i가 2개


    for (var _i3 = 0; _i3 < submenuliElsBox.length; _i3++) {
      headerLogo[1].style.cssText = "display:block";
      headerLogo[0].style.cssText = "display:none";
      startSearchTxt[_i3].style.cssText = "display:block";
      submenuEl[_i3].style.top = "10px";
      submenuliElsBox[_i3].style.cssText = "width:28%; height:80%; border: 1px solid #ccc";
      searchEl[_i3].style.cssText = "width:35px; height:35px; right:10px";
      searchElTxt[_i3].style.cssText = "display:none";
    } //i가 6개


    for (var _i4 = 0; _i4 < submenuliEls.length; _i4++) {
      submenuliEls[_i4].style.cssText = "display:none";
      optionMenu[_i4].style.display = "none";
    } // 헤더가 좁아졌을 때 검색 시작하기 클릭시 헤더 넓어짐(배경흰색일 때)


    for (var _i5 = 0; _i5 < submenuliElsBox.length; _i5++) {
      submenuliElsBox[_i5].addEventListener('click', function () {
        headerWrap.classList.remove('up');
        headerWrap.style.backgroundColor = "#fff";
        headerRightHost.style.color = "#222";
        headerRightLang.style.color = "#222"; //i가 3개

        for (var _i6 = 0; _i6 < menunameEl.length; _i6++) {
          menunameEl[0].style.cssText = ""; // menunameEl[i].style.color = "#222"
        } //i가 2개


        for (var _i7 = 0; _i7 < submenuliElsBox.length; _i7++) {
          headerLogo[0].style.cssText = "display:none";
          headerLogo[1].style.cssText = "display:block";
          startSearchTxt[_i7].style.cssText = "display:none";
          submenuEl[_i7].style.top = "";
          submenuliElsBox[_i7].style.cssText = "";
          searchEl[_i7].style.cssText = "";
        } //i가 6개


        var _loop3 = function _loop3(_i8) {
          setTimeout(function () {
            submenuliEls[_i8].style.display = "block";
          }, 100);
        };

        for (var _i8 = 0; _i8 < submenuliEls.length; _i8++) {
          _loop3(_i8);
        }
      });
    } //헤더가 넓어졌을 때 (스크롤이 0일 때)

  } else if (nowScrollTop === 0) {
    headerWrap.classList.remove('up');
    headerWrap.style.backgroundColor = "";
    headerRightHost.style.color = "";
    headerRightLang.style.color = ""; //i가 3개

    for (var _i9 = 0; _i9 < menunameEl.length; _i9++) {
      menunameEl[_i9].style.display = "";
      menunameEl[_i9].style.color = "#fff";
      menunameEl[2].firstChild.style.color = "#fff";
    } //i가 2개


    for (var _i10 = 0; _i10 < submenuliElsBox.length; _i10++) {
      headerLogo[0].style.cssText = "display:block";
      headerLogo[1].style.cssText = "display:none";
      startSearchTxt[_i10].style.cssText = "display:none";
      submenuEl[_i10].style.top = "";
      submenuliElsBox[_i10].style.cssText = "";
      searchEl[_i10].style.cssText = "";
    } //i가 6개


    var _loop4 = function _loop4(_i11) {
      setTimeout(function () {
        submenuliEls[_i11].style.display = "block";
      }, 100);
    };

    for (var _i11 = 0; _i11 < submenuliEls.length; _i11++) {
      _loop4(_i11);
    } // 헤더가 넓어졌을 때(스크롤 0일때) 검색 시작하기 클릭시 옵션창뜨기(헤더모양 그대로 유지)


    for (var _i12 = 0; _i12 < submenuliElsBox.length; _i12++) {
      for (var _i13 = 0; _i13 < menunameEl.length; _i13++) {
        menunameEl[_i13].style.cssText = "";
        menunameEl[2].firstChild.style.cssText = "";
      }

      submenuliElsBox[_i12].addEventListener('click', function () {
        headerWrap.classList.remove('up');
        headerWrap.style.backgroundColor = "";
        headerRightHost.style.color = "#fff";
        headerRightLang.style.color = "#fff"; //i가 3개

        for (var _i14 = 0; _i14 < menunameEl.length; _i14++) {
          menunameEl[_i14].style.cssText = "";
          menunameEl[2].firstChild.style.cssText = "";
        } //i가 2개


        for (var _i15 = 0; _i15 < submenuliElsBox.length; _i15++) {
          headerLogo[0].style.cssText = "display:block";
          headerLogo[1].style.cssText = "display:none";
          startSearchTxt[_i15].style.cssText = "display:none";
          submenuEl[_i15].style.top = "";
          submenuliElsBox[_i15].style.cssText = ""; // searchEl[i].style.cssText = ""
        } //i가 6개


        var _loop5 = function _loop5(_i16) {
          setTimeout(function () {
            submenuliEls[_i16].style.display = "block";
          }, 100);
        };

        for (var _i16 = 0; _i16 < submenuliEls.length; _i16++) {
          _loop5(_i16);
        }
      });
    }
  } //서브메뉴 클릭시 검색아이콘 활성화


  var _loop6 = function _loop6(_i17) {
    submenuliElsBox[_i17].addEventListener('click', function () {
      searchElTxt[_i17].style.cssText = "display:block";
      searchEl[_i17].style.width = "90px";
    });
  };

  for (var _i17 = 0; _i17 < searchEl.length; _i17++) {
    _loop6(_i17);
  } //스크롤한 후 클릭했던 서브메뉴와 옵션창이 다른 서브메뉴를 클릭하면 리셋되도록(클릭안한 상태로 돌아가도록)


  for (var _i18 = 0; _i18 < submenuliEls.length; _i18++) {
    submenuliEls[_i18].classList.remove('on');
  }

  var headerColor = headerWrap.css.backgroundColor;

  if (headerColor === '#fff') {
    for (var _i19 = 0; menunameEl.length; _i19++) {
      menunameEl[_i19].classList.add('black');
    }
  }
}); // 메인메뉴 클릭시 서브옵션메뉴 생성

var _loop7 = function _loop7(_i20) {
  menunameEl[_i20].addEventListener('click', function () {
    for (var j = 0; j < 2; j++) {
      submenuEl[j].classList.add('hide');
      menunameEl[j].classList.remove('on');
    }

    submenuEl[_i20].classList.remove('hide');

    menunameEl[_i20].classList.add('on');

    searchElTxt[_i20].style.cssText = "display:none";
    searchEl[_i20].style.width = "";

    if (_i20 === 0) {
      optionList[1].style.display = "none";
      optionList[0].style.display = "block";
    } else if (_i20 === 1) {
      optionList[0].style.display = "none";
      optionList[1].style.display = "block";
    }
  });
};

for (var _i20 = 0; _i20 < 2; _i20++) {
  _loop7(_i20);
} //signin 버튼 클릭시 옵션창(회원가입/로그인 등) 활성화


signIn.addEventListener('click', function () {
  signInTxt.style.display = "block";
});
signIn.addEventListener('blur', function () {
  signInTxt.style.display = "";
}); // 검색아이콘 클릭 시 검색문구 아이콘에 추가 / 첫번째 옵션창 활성화

var _loop8 = function _loop8(_i21) {
  // 검색 아이콘 클릭
  searchEl[_i21].addEventListener('click', function () {
    searchElTxt[_i21].style.cssText = "display:block";
    searchEl[_i21].style.width = "90px"; //숙소메뉴 검색아이콘0 클릭시

    if (_i21 === 0) {
      optionMenu[0].style.display = "block";

      for (var j = 1; j < 4; j++) {
        optionMenu[j].style.display = "none";
      } //체험메뉴 검색아이콘1 클릭시  

    } else if (_i21 === 1) {
      optionMenu[4].style.display = "block";

      for (var _j = 5; _j < 6; _j++) {
        optionMenu[_j].style.display = "none";
      }
    }
  }); //옵션창 활성화 상태에서 다른 부분 클릭시 옵션창 비활성화


  submenuEl[_i21].addEventListener('click', function () {
    optionList[_i21].style.display = "block";
  });

  submenuEl[_i21].addEventListener('blur', function () {
    optionList[_i21].style.display = "none";

    for (var j = 0; j < submenuliEls.length; j++) {
      submenuliEls[j].classList.remove('on');
    }

    searchElTxt[_i21].style.cssText = "display:none";
    searchEl[_i21].style.width = "";
  }); // 옵션창 내의 input 클릭 후 다른 부분 클릭시 옵션창 비활성화


  inputEls[_i21].addEventListener('blur', function () {
    optionList[_i21].style.display = "none";
    inputEls[_i21].value = "";

    for (var j = 0; j < submenuliEls.length; j++) {
      submenuliEls[j].classList.remove('on');
    }
  });
};

for (var _i21 = 0; _i21 < searchEl.length; _i21++) {
  _loop8(_i21);
} // //서브메뉴 클릭시 입체적으로 그림자생성 
// for (let i = 0; i < submenuliEls.length; i++) {
//   submenuliEls[i].addEventListener('click', function () {
//     for (let j = 0; j < submenuliEls.length; j++) {
//       submenuliEls[j].classList.remove('on')
//       optionMenu[j].style.display = "none"
//     }
//     submenuliEls[i].classList.add('on')
//     optionMenu[i].style.display = "block"
//   })
// }
// //서브메뉴 클릭시 검색아이콘 활성화
// for (let i = 0; i < searchEl.length; i++) {
//   submenuliElsBox[i].addEventListener('click', function () {
//     searchElTxt[i].style.cssText = "display:block";
//     searchEl[i].style.width = "90px"
//     console.log(searchEl)
//   })
// }
// 인원추가 버튼


var minusiconLine = document.getElementsByClassName('button__minus');
var minusicon = document.querySelectorAll('.button__minus span');
var plusiconLine = document.getElementsByClassName('button__plus');
var plusicon = document.querySelectorAll('.button__plus span');
var resultEl = document.getElementsByClassName('result');

var _loop9 = function _loop9(_i22) {
  minusicon[_i22].addEventListener('click', function () {
    var number = resultEl[_i22].innerText;
    number = parseInt(number) - 1;

    if (number < 0) {
      number = 0;
    } else if (0 < number < 5) {
      plusiconLine[_i22].style.borderColor = "grey";
      plusicon[_i22].style.color = "grey";
      minusiconLine[_i22].style.borderColor = "grey";
      minusicon[_i22].style.color = "grey";
    }

    if (number === 0) {
      minusiconLine[_i22].style.borderColor = "#ccc";
      minusicon[_i22].style.color = "#ccc";
      plusiconLine[_i22].style.borderColor = "grey";
      plusicon[_i22].style.color = "grey";
    }

    resultEl[_i22].innerText = number;
  });

  plusicon[_i22].addEventListener('click', function () {
    var number = resultEl[_i22].innerText;
    number = parseInt(number) + 1;

    if (number > 5) {
      number = 5;
    } else if (0 < number < 5) {
      minusiconLine[_i22].style.borderColor = "grey";
      minusicon[_i22].style.color = "grey";
    }

    if (number === 5) {
      plusiconLine[_i22].style.borderColor = "#ccc";
      plusicon[_i22].style.color = "#ccc";
      minusiconLine[_i22].style.borderColor = "grey";
      minusicon[_i22].style.color = "grey";
    }

    resultEl[_i22].innerText = number;
  });
};

for (var _i22 = 0; _i22 < minusicon.length; _i22++) {
  _loop9(_i22);
}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53920" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map