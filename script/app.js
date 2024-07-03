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

t_onReady(function () {
  t_onFuncLoad("t702_initPopup", function () {
    t702_initPopup("769010197");
  });
});

if (!document.getElementById("t-phonemask-script")) {
  (function (d, w, o) {
    var n = d.getElementsByTagName(o)[0],
      s = d.createElement(o),
      f = function () {
        n.parentNode.insertBefore(s, n);
      };
    s.type = "text/javascript";
    s.async = true;
    s.id = "t-phonemask-script";
    s.src = "https://static.tildacdn.one/js/tilda-phone-mask-1.1.min.js";
    if (w.opera == "[object Opera]") {
      d.addEventListener("DOMContentLoaded", f, false);
    } else {
      f();
    }
  })(document, window, "script");
} else {
  t_onReady(function () {
    t_onFuncLoad("t_form_phonemask_load", function () {
      var phoneMasks = document.querySelectorAll(
        '#rec769010197 [data-phonemask-lid="8511215262382"]'
      );
      t_form_phonemask_load(phoneMasks);
    });
  });
}

function submitForm() {
  // Check if inputs are filled
  var nameInput = document.getElementById("input_8511215262381").value.trim();
  var phoneInput = document.getElementById("input_8511215262382").value.trim();
  var premiumRadio = document.querySelector(
    'input[name="Tarifingizni tanlang"][value="Premium"]'
  );
  var vipRadio = document.querySelector(
    'input[name="Tarifingizni tanlang"][value="VIP"]'
  );

  if (
    nameInput !== "" &&
    phoneInput !== "" &&
    (premiumRadio.checked || vipRadio.checked)
  ) {
    // Redirect to payment.html
    window.location.href = "payment.html";
  } else {
    // Display error message or handle validation
    alert("Iltimos, barcha maydonlarni to'ldiring!");
  }
}
