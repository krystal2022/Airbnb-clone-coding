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
var signInTxt = document.querySelector('.signinTxt'); // // 헤더가 좁아졌을 때 검색 시작하기 클릭시 헤더 넓어짐
// for (let i = 0; i < submenuliElsBox.length; i++) {
//   submenuliElsBox[i].addEventListener('click', function () {
//     headerWrap.classList.remove('up')
//     headerWrap.style.backgroundColor = "#fff"
//     headerRightHost.style.color = "#222"
//     headerRightLang.style.color = "#222"
//     //i가 3개
//     for (let i = 0; i < menunameEl.length; i++) {
//       menunameEl[i].style.display = ""
//       menunameEl[i].style.color = "#222"
//       menunameEl[2].firstChild.style.color = "#222"
//     }
//     //i가 2개
//     for (let i = 0; i < submenuliElsBox.length; i++) {
//       headerLogo[0].style.cssText = "display:none"
//       headerLogo[1].style.cssText = "display:block"
//       startSearchTxt[i].style.cssText = "display:none"
//       submenuEl[i].style.top = ""
//       submenuliElsBox[i].style.cssText = ""
//       searchEl[i].style.cssText = ""
//     }
//     //i가 6개
//     for (let i = 0; i < submenuliEls.length; i++) {
//       setTimeout(() => {
//         submenuliEls[i].style.display = "block"
//       }, 100)
//     }
//   })
// }
//스크롤시 헤더 변경

document.addEventListener('scroll', function () {
  var nowScrollTop = document.documentElement.scrollTop;

  if (nowScrollTop > 0) {
    //헤더 높이가 좁아졌을 때 (스크롤이 0 이상일 때)
    headerWrap.classList.add('up');
    headerWrap.style.backgroundColor = "#fff";
    headerRightHost.style.color = "#222";
    headerRightLang.style.color = "#222"; //i가 3개

    for (var i = 0; i < menunameEl.length; i++) {
      menunameEl[i].style.display = "none";
    } //i가 2개


    for (var _i = 0; _i < submenuliElsBox.length; _i++) {
      headerLogo[1].style.cssText = "display:block";
      headerLogo[0].style.cssText = "display:none";
      startSearchTxt[_i].style.cssText = "display:block";
      submenuEl[_i].style.top = "10px";
      submenuliElsBox[_i].style.cssText = "width:28%; height:80%; border: 1px solid #ccc";
      searchEl[_i].style.cssText = "width:35px; height:35px; right:10px";
      searchElTxt[_i].style.cssText = "display:none";
    } //i가 6개


    for (var _i2 = 0; _i2 < submenuliEls.length; _i2++) {
      submenuliEls[_i2].style.cssText = "display:none";
      optionMenu[_i2].style.display = "none";
    } // 헤더가 좁아졌을 때 검색 시작하기 클릭시 헤더 넓어짐


    for (var _i3 = 0; _i3 < submenuliElsBox.length; _i3++) {
      submenuliElsBox[_i3].addEventListener('click', function () {
        headerWrap.classList.remove('up');
        headerWrap.style.backgroundColor = "#fff";
        headerRightHost.style.color = "#222";
        headerRightLang.style.color = "#222"; //i가 3개

        for (var _i4 = 0; _i4 < menunameEl.length; _i4++) {
          menunameEl[_i4].style.display = "";
          menunameEl[_i4].style.color = "#222";
          menunameEl[2].firstChild.style.color = "#222";
        } //i가 2개


        for (var _i5 = 0; _i5 < submenuliElsBox.length; _i5++) {
          headerLogo[0].style.cssText = "display:none";
          headerLogo[1].style.cssText = "display:block";
          startSearchTxt[_i5].style.cssText = "display:none";
          submenuEl[_i5].style.top = "";
          submenuliElsBox[_i5].style.cssText = "";
          searchEl[_i5].style.cssText = "";
        } //i가 6개


        var _loop = function _loop(_i6) {
          setTimeout(function () {
            submenuliEls[_i6].style.display = "block";
          }, 100);
        };

        for (var _i6 = 0; _i6 < submenuliEls.length; _i6++) {
          _loop(_i6);
        }
      });
    } //서브메뉴 클릭시 입체적으로 그림자생성 


    var _loop2 = function _loop2(_i7) {
      submenuliEls[_i7].addEventListener('click', function () {
        for (var j = 0; j < submenuliEls.length; j++) {
          submenuliEls[j].classList.remove('on');
          optionMenu[j].style.display = "none";
        }

        submenuliEls[_i7].classList.add('on');

        optionMenu[_i7].style.display = "block"; //검색아이콘 활성화

        for (var _i8 = 0; _i8 < searchEl.length; _i8++) {
          searchElTxt[_i8].style.cssText = "display:block";
          searchEl[_i8].style.width = "90px"; // if (i === 0) {
          //   submenuliEls[0].style.cssText = "padding-right:100px";
          // } else if (i === 1) {
          //   submenuliEls[4].style.cssText = "padding-right:10px";
          // }
        }
      });
    };

    for (var _i7 = 0; _i7 < submenuliEls.length; _i7++) {
      _loop2(_i7);
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


    var _loop3 = function _loop3(_i11) {
      setTimeout(function () {
        submenuliEls[_i11].style.display = "block";
      }, 100);
    };

    for (var _i11 = 0; _i11 < submenuliEls.length; _i11++) {
      _loop3(_i11);
    } // 헤더가 넓어졌을 때(스크롤 0일때) 검색 시작하기 클릭시 옵션창뜨기(헤더모양 그대로 유지)


    for (var _i12 = 0; _i12 < submenuliElsBox.length; _i12++) {
      submenuliElsBox[_i12].addEventListener('click', function () {
        headerWrap.classList.remove('up');
        headerWrap.style.backgroundColor = "";
        headerRightHost.style.color = "#fff";
        headerRightLang.style.color = "#fff"; //i가 3개

        for (var _i13 = 0; _i13 < menunameEl.length; _i13++) {
          menunameEl[_i13].style.display = "";
          menunameEl[_i13].style.color = "#fff";
          menunameEl[2].firstChild.style.color = "#fff";
        } //i가 2개


        for (var _i14 = 0; _i14 < submenuliElsBox.length; _i14++) {
          headerLogo[0].style.cssText = "display:block";
          headerLogo[1].style.cssText = "display:none";
          startSearchTxt[_i14].style.cssText = "display:none";
          submenuEl[_i14].style.top = "";
          submenuliElsBox[_i14].style.cssText = "";
          searchEl[_i14].style.cssText = "";
        } //i가 6개


        var _loop4 = function _loop4(_i15) {
          setTimeout(function () {
            submenuliEls[_i15].style.display = "block";
          }, 100);
        };

        for (var _i15 = 0; _i15 < submenuliEls.length; _i15++) {
          _loop4(_i15);
        }
      });
    }
  }
}); // 메인메뉴 클릭시 서브옵션메뉴 생성

var _loop5 = function _loop5(i) {
  menunameEl[i].addEventListener('click', function () {
    for (var j = 0; j < 2; j++) {
      submenuEl[j].classList.add('hide');
      menunameEl[j].classList.remove('on');
    }

    submenuEl[i].classList.remove('hide');
    menunameEl[i].classList.add('on');
    searchElTxt[i].style.cssText = "display:none";
    searchEl[i].style.width = "";

    if (i === 0) {
      optionList[1].style.display = "none";
      optionList[0].style.display = "block";
    } else if (i === 1) {
      optionList[0].style.display = "none";
      optionList[1].style.display = "block";
    }
  });
};

for (var i = 0; i < 2; i++) {
  _loop5(i);
} //signin 버튼 클릭시 옵션창(회원가입/로그인 등) 활성화


signIn.addEventListener('click', function () {
  signInTxt.style.display = "block";
});
signIn.addEventListener('blur', function () {
  signInTxt.style.display = "";
}); // 검색아이콘 클릭 시 검색문구 추가 / 첫번째 서브메뉴 너비 줄어듬 (숙소메뉴0 / 체험메뉴1)

var _loop6 = function _loop6(_i16) {
  // 검색 아이콘 클릭
  searchEl[_i16].addEventListener('click', function () {
    searchElTxt[_i16].style.cssText = "display:block";
    searchEl[_i16].style.width = "90px"; //숙소메뉴 검색아이콘0 클릭시

    if (_i16 === 0) {
      optionMenu[0].style.display = "block";
      submenuliEls[0].classList.add('on');

      for (var j = 1; j < 4; j++) {
        optionMenu[j].style.display = "none";
        submenuliEls[j].classList.remove('on');
      } //체험메뉴 검색아이콘1 클릭시  

    } else if (_i16 === 1) {
      optionMenu[4].style.display = "block";
      submenuliEls[4].classList.add('on');

      for (var _j = 5; _j < 6; _j++) {
        optionMenu[_j].style.display = "none";

        submenuliEls[_j].classList.remove('on');
      }
    }
  }); //옵션창 활성화 상태에서 다른 부분 클릭시 옵션창 비활성화


  submenuEl[_i16].addEventListener('click', function () {
    optionList[_i16].style.display = "block";
  });

  submenuEl[_i16].addEventListener('blur', function () {
    optionList[_i16].style.display = "none";

    for (var j = 0; j < submenuliEls.length; j++) {
      submenuliEls[j].classList.remove('on');
    }

    searchElTxt[_i16].style.cssText = "display:none";
    searchEl[_i16].style.width = "";
  }); // 옵션창 내의 input 클릭 후 다른 부분 클릭시 옵션창 비활성화


  inputEls[_i16].addEventListener('blur', function () {
    optionList[_i16].style.display = "none";
    inputEls[_i16].value = "";

    for (var j = 0; j < submenuliEls.length; j++) {
      submenuliEls[j].classList.remove('on');
    }
  });
};

for (var _i16 = 0; _i16 < searchEl.length; _i16++) {
  _loop6(_i16);
} // //서브메뉴 클릭시 입체적으로 그림자생성 
// for (let i = 0; i < submenuliEls.length; i++) {
//   submenuliEls[i].addEventListener('click', function () {
//     for (let j = 0; j < submenuliEls.length; j++) {
//       submenuliEls[j].classList.remove('on')
//       optionMenu[j].style.display = "none"
//     }
//     submenuliEls[i].classList.add('on')
//     optionMenu[i].style.display = "block"
//     //검색아이콘 활성화
//     for (let i = 0; i < searchEl.length; i++) {
//       searchElTxt[i].style.cssText = "display:block";
//       searchEl[i].style.width = "90px"
//       // if (i === 0) {
//       //   submenuliEls[0].style.cssText = "padding-right:100px";
//       // } else if (i === 1) {
//       //   submenuliEls[4].style.cssText = "padding-right:10px";
//       // }
//     }
//   })
// }
// 인원추가 버튼


var minusiconLine = document.getElementsByClassName('button__minus');
var minusicon = document.querySelectorAll('.button__minus span');
var plusiconLine = document.getElementsByClassName('button__plus');
var plusicon = document.querySelectorAll('.button__plus span');
var resultEl = document.getElementsByClassName('result');

var _loop7 = function _loop7(_i17) {
  minusicon[_i17].addEventListener('click', function () {
    var number = resultEl[_i17].innerText;
    number = parseInt(number) - 1;

    if (number < 0) {
      number = 0;
    } else if (0 < number < 5) {
      plusiconLine[_i17].style.borderColor = "grey";
      plusicon[_i17].style.color = "grey";
      minusiconLine[_i17].style.borderColor = "grey";
      minusicon[_i17].style.color = "grey";
    }

    if (number === 0) {
      minusiconLine[_i17].style.borderColor = "#ccc";
      minusicon[_i17].style.color = "#ccc";
      plusiconLine[_i17].style.borderColor = "grey";
      plusicon[_i17].style.color = "grey";
    }

    resultEl[_i17].innerText = number;
  });

  plusicon[_i17].addEventListener('click', function () {
    var number = resultEl[_i17].innerText;
    number = parseInt(number) + 1;

    if (number > 5) {
      number = 5;
    } else if (0 < number < 5) {
      minusiconLine[_i17].style.borderColor = "grey";
      minusicon[_i17].style.color = "grey";
    }

    if (number === 5) {
      plusiconLine[_i17].style.borderColor = "#ccc";
      plusicon[_i17].style.color = "#ccc";
      minusiconLine[_i17].style.borderColor = "grey";
      minusicon[_i17].style.color = "grey";
    }

    resultEl[_i17].innerText = number;
  });
};

for (var _i17 = 0; _i17 < minusicon.length; _i17++) {
  _loop7(_i17);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51784" + '/');

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