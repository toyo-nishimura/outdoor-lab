(function () {
  function findQ(label) {
    return Array.from(document.querySelectorAll('[contenteditable="true"]')).find(
      function (el) {
        return (el.innerText || "").trim() === label;
      },
    );
  }

  function cardRoot(el) {
    var node = el;
    for (var i = 0; i < 12 && node; i++) {
      if (
        node.querySelector &&
        node.querySelector('div[role="listbox"][aria-label="質問の種類"]')
      ) {
        return node;
      }
      node = node.parentElement;
    }
    return el.closest("[data-item-id]") || el.parentElement;
  }

  function setType(label, typeLabel) {
    var q = findQ(label);
    if (!q) return label + ":missing";
    q.scrollIntoView({ block: "center" });
    q.click();
    var root = cardRoot(q);
    var box =
      (root &&
        root.querySelector('div[role="listbox"][aria-label="質問の種類"]')) ||
      null;
    if (!box) {
      // fallback: visible listbox
      var boxes = Array.from(
        document.querySelectorAll('div[role="listbox"][aria-label="質問の種類"]'),
      );
      box = boxes.find(function (b) {
        var r = b.getBoundingClientRect();
        return r.width > 0 && r.height > 0;
      });
    }
    if (!box) return label + ":no-box";
    box.click();
    // options appear in a popup; pick visible matching option nearest box
    var boxRect = box.getBoundingClientRect();
    var opts = Array.from(document.querySelectorAll('div[role="option"]')).filter(
      function (el) {
        return (el.innerText || "").trim() === typeLabel;
      },
    );
    var visible = opts.filter(function (el) {
      var r = el.getBoundingClientRect();
      return r.width > 0 && r.height > 0;
    });
    // prefer option closest vertically to the listbox
    visible.sort(function (a, b) {
      var da = Math.abs(a.getBoundingClientRect().top - boxRect.top);
      var db = Math.abs(b.getBoundingClientRect().top - boxRect.top);
      return da - db;
    });
    var opt = visible[0] || opts[0];
    if (!opt) return label + ":no-opt:" + typeLabel;
    opt.click();
    return label + "=>" + typeLabel;
  }

  window.__fixFix = { findQ: findQ, setType: setType, cardRoot: cardRoot };
  return "ready";
})();
