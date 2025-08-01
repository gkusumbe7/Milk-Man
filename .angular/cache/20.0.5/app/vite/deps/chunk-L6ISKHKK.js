// node_modules/@ionic/core/components/focus-visible.js
var ION_FOCUSED = "ion-focused";
var ION_FOCUSABLE = "ion-focusable";
var FOCUS_KEYS = [
  "Tab",
  "ArrowDown",
  "Space",
  "Escape",
  " ",
  "Shift",
  "Enter",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "Home",
  "End"
];
var startFocusVisible = (rootEl) => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = rootEl ? rootEl.shadowRoot : document;
  const root = rootEl ? rootEl : document.body;
  const setFocus = (elements) => {
    currentFocus.forEach((el) => el.classList.remove(ION_FOCUSED));
    elements.forEach((el) => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };
  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };
  const onKeydown = (ev) => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);
    if (!keyboardMode) {
      setFocus([]);
    }
  };
  const onFocusin = (ev) => {
    if (keyboardMode && ev.composedPath !== void 0) {
      const toFocus = ev.composedPath().filter((el) => {
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }
        return false;
      });
      setFocus(toFocus);
    }
  };
  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };
  ref.addEventListener("keydown", onKeydown);
  ref.addEventListener("focusin", onFocusin);
  ref.addEventListener("focusout", onFocusout);
  ref.addEventListener("touchstart", pointerDown, { passive: true });
  ref.addEventListener("mousedown", pointerDown);
  const destroy = () => {
    ref.removeEventListener("keydown", onKeydown);
    ref.removeEventListener("focusin", onFocusin);
    ref.removeEventListener("focusout", onFocusout);
    ref.removeEventListener("touchstart", pointerDown);
    ref.removeEventListener("mousedown", pointerDown);
  };
  return {
    destroy,
    setFocus
  };
};

export {
  startFocusVisible
};
/*! Bundled license information:

@ionic/core/components/focus-visible.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-L6ISKHKK.js.map
