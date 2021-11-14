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
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n/*\u6211\u4EEC\u5148\u8BBE\u7F6E\u521D\u59CB\u503C*/\n.color * { \n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  .color *::before,\n  .color *::after {\n    box-sizing: border-box;\n  }\n  /*\u5728\u8BBE\u7F6E\u80CC\u666F\u56FE*/\n  .color {\n    height: 65vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: #93b8ca;\n  }\n  /*\u54C6\u5566A\u68A6\u7684\u5927\u6982\u9762\u90E8*/\n  .skin {\n    border: 2px solid #000;\n    border-radius: 47% 47% 45% 45%;\n    background-color: #1e90ff;\n    height: 400px;\n    width: 420px;\n    position: relative;\n    display: flex;\n    justify-content: center;\n  }\n  /*\u54C6\u5566A\u68A6\u7684\u8138*/\n  .face {\n    position: absolute;\n    bottom: 0px;\n    width: 360px;\n    height: 300px;\n    border: 2px solid#000;\n    border-radius: 50% 50% 45% 45%;\n    background-color: #fff;\n    display: flex;\n    justify-content: center;\n  }\n  /*\u54C6\u5566A\u68A6\u7684\u773C\u775B*/\n  .eye_box {\n    position: absolute;\n    top: 0px;\n    display: flex;\n    justify-content: center;\n    transform: translateY(-40%);\n  }\n  /*\u54C6\u5566A\u68A6\u7684\u5DE6\u773C*/\n  .eye_box div:nth-child(1) {\n    width: 90px;\n    height: 110px;\n    border: 2px solid #000;\n    background-color: #fff;\n    border-radius: 46%;\n    position: relative;\n  }\n  .eye_box div:nth-child(1)::after {\n    content: \"\";\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    background-color: #000;\n    border-radius: 50%;\n    right: 10%;\n    bottom: 28%;\n  }\n  /*\u54C6\u5566A\u68A6\u7684\u53F3\u773C*/\n  .eye_box div:nth-child(2) {\n    width: 90px;\n    height: 110px;\n    border: 2px solid #000;\n    background-color: #fff;\n    border-radius: 46%;\n    position: relative;\n  }\n  .eye_box div:nth-child(2)::after {\n    content: \"\";\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    background-color: #000;\n    border-radius: 50%;\n    left: 10%;\n    bottom: 28%;\n  }\n  /*\u54C6\u5566A\u68A6\u7684\u9F3B\u5B50*/\n  .nose {\n    position: absolute;\n    top: 16%;\n    width: 50px;\n    height: 50px;\n    background-color: #ff0000;\n    border: 2px solid #000;\n    border-radius: 50%;\n    position: relative;\n  }\n  .nose::after {\n    content: \"\";\n    position: absolute;\n    width: 15px;\n    height: 15px;\n    background-color: #fff;\n    border-radius: 50%;\n    right: 11%;\n    bottom: 45%;\n  }\n  /*\u54C6\u5566A\u68A6\u7684\u5634\u5DF4*/\n  .mouth {\n    position: absolute;\n    bottom: 22%;\n    width: 240px;\n    height: 200px;\n    border-bottom: 2px solid #000;\n    border-radius: 0 0 45% 45%;\n  }\n  .mouth_2 {\n    position: absolute;\n    height: 134px;\n    width: 2px;\n    border-left: 2px solid #000;\n    left: 50%;\n    bottom: -1px;\n  }\n  /*\u54C6\u5566A\u68A6\u7684\u5DE6\u80E1\u987B*/\n  .beard_left span:nth-child(1) {\n    position: absolute;\n    left: 8.5%;\n    top: 32%;\n    transform: rotate(20deg);\n    height: 60px;\n    width: 100px;\n    border-top: 2px solid #000;\n  }\n  .beard_left span:nth-child(2) {\n    position: absolute;\n    left: 10%;\n    top: 42%;\n    height: 60px;\n    width: 100px;\n    border-top: 2px solid #000;\n  }\n  .beard_left span:nth-child(3) {\n    position: absolute;\n    transform: rotate(-20deg);\n    left: 14%;\n    top: 52%;\n    height: 60px;\n    width: 100px;\n    border-top: 2px solid #000;\n  }\n  /*\u54C6\u5566A\u68A6\u7684\u53F3\u80E1\u987B*/\n  .beard_right span:nth-child(1) {\n    position: absolute;\n    right: 8.5%;\n    top: 32%;\n    transform: rotate(-20deg);\n    height: 60px;\n    width: 100px;\n    border-top: 2px solid #000;\n  }\n  .beard_right span:nth-child(2) {\n    position: absolute;\n    right: 10%;\n    top: 42%;\n    height: 60px;\n    width: 100px;\n    border-top: 2px solid #000;\n  }\n  .beard_right span:nth-child(3) {\n    position: absolute;\n    transform: rotate(20deg);\n    right: 14%;\n    top: 52%;\n    height: 60px;\n    width: 100px;\n    border-top: 2px solid #000;\n  }\n  /*\u54C6\u5566A\u68A6\u7684\u9879\u5708*/\n  .rope {\n    position: absolute;\n    border-radius: 30px;\n    border: 2px solid #000;\n    background-color: #ff0000;\n    height: 50px;\n    width: 320px;\n    bottom: 0px;\n    /* left: 40px; */\n    transform: translateY(20%);\n    display: flex;\n    justify-content: center;\n  }\n  /*\u4F1A\u52A8\u7684\u94C3\u94DB\u52A8\u753B*/\n  @keyframes swing {\n    0% {\n      transform: rotate(0deg);\n      transform-origin: top;\n    }\n    33% {\n      transform: rotate(25deg);\n      transform-origin: top;\n    }\n    66% {\n      transform: rotate(-25deg);\n      transform-origin: top;\n    }\n    100% {\n      transform: rotate(0deg);\n      transform-origin: top;\n    }\n  }\n  /*\u54C6\u5566A\u68A6\u7684\u94C3\u94DB*/\n  .collar {\n    position: absolute;\n    width: 60px;\n    height: 60px;\n    background-color: #ffff00;\n    border-radius: 50%;\n    border: 2px solid #000;\n    bottom: -55%;\n    display: flex;\n    justify-content: center;\n    animation: swing 1s infinite linear;\n  }\n  .collar span:nth-child(1) {\n    position: absolute;\n    width: 56px;\n    height: 18px;\n    border-top: 2px solid #000;\n    top: 36%;\n  }\n  .collar span:nth-child(2) {\n    position: absolute;\n    width: 58px;\n    height: 18px;\n    border-top: 2px solid #000;\n    top: 44%;\n  }\n  .collar span:nth-child(3) {\n    position: absolute;\n    width: 15px;\n    height: 10px;\n    background-color: #000;\n    border-radius: 50%;\n    top: 56%;\n  }\n  .collar span:nth-child(4) {\n    position: absolute;\n    width: 1px;\n    height: 20px;\n    border-left: 2px solid #000;\n    top: 65%;\n  }\n  /*\u597D\u5566\uFF0C\u4E00\u4E2A\u53EF\u7231\u7684\u54C6\u5566A\u68A6\u9001\u7ED9\u4F60\u2727( \u0941\u2022\u2304\u2022 )\u25DE*/\n  ";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToObtain = function ToObtain(node) {
  return document.querySelector(node);
};

var demo = ToObtain(".demo");
var demo2 = ToObtain(".demo2");
var btnPause = ToObtain(".btnpause");
var btnPlay = ToObtain(".btnplay");
var btnSlow = ToObtain(".btnslow");
var btnNormal = ToObtain(".btnNormal");
var fast = ToObtain(".fast");
var timeChoose = {
  start: 50,
  slow: 300,
  Normal: 100,
  fast: 0
};
var n = 1;
var initTime = 50;
var id = setInterval(function () {
  timeRun();
}, initTime);

var timeReset = function timeReset(time) {
  window.clearInterval(id);
  id = setInterval(function () {
    timeRun();
  }, time);
};

var timeRun = function timeRun() {
  n += 1;

  if (n > _css.default.length) {
    window.clearInterval(id);
    return;
  }

  demo.innerText = _css.default.substring(0, n);
  demo2.innerHTML = _css.default.substring(0, n);
  demo.scrollTop = demo.scrollHeight;
};

var addClass = function addClass(data) {
  var nodeList = document.querySelectorAll(".buttoons button");
  nodeList.forEach(function (e) {
    e.classList.remove("active");
  });
  data.classList.add("active");
};

btnPause.onclick = function () {
  window.clearInterval(id);
  addClass(btnPause);
};

btnPlay.onclick = function () {
  timeReset(timeChoose.start);
  addClass(btnPlay);
};

btnSlow.onclick = function () {
  timeReset(timeChoose.slow);
  addClass(btnSlow);
};

btnNormal.onclick = function () {
  timeReset(timeChoose.Normal);
  addClass(btnNormal);
};

fast.onclick = function () {
  timeReset(timeChoose.fast);
  addClass(fast);
};
},{"./css.js":"css.js"}],"../../AppData/Local/Yarn/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50011" + '/');

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
},{}]},{},["../../AppData/Local/Yarn/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map