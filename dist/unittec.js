import { openBlock as c, createElementBlock as a, renderSlot as d, createTextVNode as u, createBlock as l, Teleport as m, createElementVNode as _, toDisplayString as i, h as p, render as s } from "vue";
import "./style.css"
const f = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, r] of e)
    o[n] = r;
  return o;
}, y = {}, h = { class: "u-button" };
function g(t, e) {
  return c(), a("div", h, [
    d(t.$slots, "default", {}, () => [
      u("我是按钮")
    ])
  ]);
}
const b = /* @__PURE__ */ f(y, [["render", g]]), v = { class: "u-message" }, k = {
  __name: "Message",
  props: {
    content: String,
    duration: Number,
    destroy: Function
  },
  setup(t) {
    const e = t;
    return setTimeout(() => {
      e.destroy();
    }, e.duration), (o, n) => (c(), l(m, { to: "body" }, [
      _("div", v, i(e.content), 1)
    ]));
  }
}, x = [
  {
    name: "u-button",
    component: b
  }
], D = {
  install(t) {
    x.forEach((e) => {
      t.component(e.name, e.component);
    });
  }
}, E = {
  handler() {
  },
  success(t) {
    const o = p(k, {
      content: t,
      duration: 1500,
      destroy: () => {
        s(null, document.body);
      }
    });
    s(o, document.body);
  }
};
export {
  b as UButton,
  D as default,
  E as message
};
