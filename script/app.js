function t_onReady(func) {
  if (document.readyState != "loading") {
    func();
  } else {
    document.addEventListener("DOMContentLoaded", func);
  }
}
function t_onFuncLoad(funcName, okFunc, time) {
  if (typeof window[funcName] === "function") {
    okFunc();
  } else {
    setTimeout(function () {
      t_onFuncLoad(funcName, okFunc, time);
    }, time || 100);
  }
}
t_onReady(function () {
  t_onFuncLoad("t1003_init", function () {
    t1003_init("768937446", "");
  });
});
