(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [38],
  {
    2115: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/team",
        function () {
          return r(8133);
        },
      ]);
    },
    2808: function (e, t, r) {
      "use strict";
      var n = r(5893),
        i = r(3100),
        a = r(6979),
        l = r(7651),
        s = r(8911);
      r(7294);
      var o = r(2298);
      let c = (e) => {
        let t = new Date();
        return (0, n.jsx)(i.xu, {
          as: "footer",
          w: "100%",
          py: "12",
          children: (0, n.jsx)(a.W, {
            maxW: "container.xl",
            color: "brand.grayer",
            px: { base: "6", xl: "0" },
            children: (0, n.jsxs)(l.g, {
              spacing: "6",
              children: [
                (0, n.jsx)(o.Z, { variant: "FOOTER" }),
                (0, n.jsxs)(s.x, {
                  fontSize: { base: "sm", md: "md" },
                  fontFamily: "body",
                  fontWeight: "normal",
                  children: [
                    "Copyright \xa9 ",
                    t.getFullYear(),
                    " OSOC - All Rights Reserved",
                  ],
                }),
              ],
            }),
          }),
        });
      };
      t.Z = c;
    },
    4237: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return b;
        },
      });
      var n = r(5893),
        i = r(3100),
        a = r(6979),
        l = r(204),
        s = r(3838);
      r(7294);
      var o = r(4609);
      let c = (e) =>
        (0, n.jsx)(l.k, {
          justify: "center",
          align: "center",
          children: (0, n.jsx)(o.E, { src: "/osoc.png", w: "12" }),
        });
      var d = r(4641),
        u = r(8911),
        f = r(1664),
        h = r.n(f);
      let m = (e) =>
        (0, n.jsxs)(d.U, {
          as: "nav",
          spacing: { base: "4", sm: "8" },
          textTransform: "uppercase",
          fontFamily: "body",
          fontWeight: "semibold",
          fontSize: { base: "xs", sm: "sm" },
          letterSpacing: "widest",
          align: "center",
          justify: "center",
          children: [
            (0, n.jsx)(s.r, {
              as: h(),
              href: "/events",
              position: "relative",
              _after: {
                content: "''",
                position: "absolute",
                width: "100%",
                transform: "scaleX(0)",
                height: "2px",
                bottom: 0,
                left: 0,
                backgroundColor: "#0087ca",
                transformOrigin: "bottom right",
                transition: "transform 0.25s ease-out",
              },
              _hover: {
                textDecoration: "none",
                _after: {
                  transform: "scaleX(1)",
                  transformOrigin: "bottom left",
                },
              },
              children: (0, n.jsx)(u.x, { children: "Events" }),
            }),
            (0, n.jsx)(s.r, {
              as: h(),
              href: "/team",
              position: "relative",
              _after: {
                content: "''",
                position: "absolute",
                width: "100%",
                transform: "scaleX(0)",
                height: "2px",
                bottom: 0,
                left: 0,
                backgroundColor: "#0087ca",
                transformOrigin: "bottom right",
                transition: "transform 0.25s ease-out",
              },
              _hover: {
                textDecoration: "none",
                _after: {
                  transform: "scaleX(1)",
                  transformOrigin: "bottom left",
                },
              },
              children: (0, n.jsx)(u.x, { children: "Team" }),
            }),
            (0, n.jsx)(s.r, {
              as: h(),
              href: "/about",
              position: "relative",
              _after: {
                content: "''",
                position: "absolute",
                width: "100%",
                transform: "scaleX(0)",
                height: "2px",
                bottom: 0,
                left: 0,
                backgroundColor: "#0087ca",
                transformOrigin: "bottom right",
                transition: "transform 0.25s ease-out",
              },
              _hover: {
                textDecoration: "none",
                _after: {
                  transform: "scaleX(1)",
                  transformOrigin: "bottom left",
                },
              },
              children: (0, n.jsx)(u.x, { children: "About" }),
            }),
            (0, n.jsx)(s.r, {
              as: h(),
              href: "/contact",
              position: "relative",
              _after: {
                content: "''",
                position: "absolute",
                width: "100%",
                transform: "scaleX(0)",
                height: "2px",
                bottom: 0,
                left: 0,
                backgroundColor: "#0087ca",
                transformOrigin: "bottom right",
                transition: "transform 0.25s ease-out",
              },
              _hover: {
                textDecoration: "none",
                _after: {
                  transform: "scaleX(1)",
                  transformOrigin: "bottom left",
                },
              },
              children: (0, n.jsx)(u.x, { children: "Contact" }),
            }),
          ],
        });
      var p = r(2298);
      let x = (e) =>
        (0, n.jsx)(i.xu, {
          as: "header",
          w: "100%",
          color: "brand.lightest",
          zIndex: 2,
          children: (0, n.jsx)(a.W, {
            maxW: "container.xl",
            children: (0, n.jsxs)(l.k, {
              h: { base: "40", md: "20" },
              align: "center",
              justify: { base: "space-evenly", md: "space-between" },
              direction: { base: "column", md: "row" },
              children: [
                (0, n.jsx)(s.r, {
                  as: h(),
                  href: "/",
                  "aria-label": "OSOC Homepage",
                  children: (0, n.jsx)(c, {}),
                }),
                (0, n.jsx)(m, {}),
                (0, n.jsx)(p.Z, {}),
              ],
            }),
          }),
        });
      var b = x;
    },
    2298: function (e, t, r) {
      "use strict";
      var n = r(5893),
        i = r(4641),
        a = r(3838),
        l = r(6877);
      r(7294);
      var s = r(9583);
      let o = (e) => {
        let { variant: t = "NAV" } = e;
        return (0, n.jsxs)(i.U, {
          spacing: "6",
          fontSize: "xl",
          display:
            "NAV" === t
              ? { base: "none", md: "flex" }
              : { base: "flex", md: "none" },
          children: [
            (0, n.jsx)(a.r, {
              href: "https://www.instagram.com/osoc_nitt/",
              isExternal: !0,
              "aria-label": "OSOC Instagram",
              children: (0, n.jsx)(l.J, { as: s.Zf_ }),
            }),
            (0, n.jsx)(a.r, {
              href: "https://www.facebook.com/groups/633779233333438/",
              isExternal: !0,
              "aria-label": "OSOC Facebook",
              children: (0, n.jsx)(l.J, { as: s.tBk }),
            }),
            (0, n.jsx)(a.r, {
              href: "https://www.linkedin.com/company/open-source-open-community/",
              isExternal: !0,
              "aria-label": "OSOC LinkedIn",
              children: (0, n.jsx)(l.J, { as: s.ltd }),
            }),
            (0, n.jsx)(a.r, {
              href: "https://github.com/osocnitt-dev/",
              isExternal: !0,
              "aria-label": "OSOC GitHub",
              children: (0, n.jsx)(l.J, { as: s.hJX }),
            }),
          ],
        });
      };
      t.Z = o;
    },
    8133: function (e, t, r) {
      "use strict";
      let n;
      r.r(t),
        r.d(t, {
          __N_SSG: function () {
            return es;
          },
          default: function () {
            return eo;
          },
        });
      var i = r(5893),
        a = r(204),
        l = r(3100),
        s = r(7294),
        o = r(9008),
        c = r.n(o),
        d = r(4237),
        u = r(2808),
        f = r(6979),
        h = r(7651),
        m = r(8611),
        p = (e) =>
          (0, i.jsx)(m.m.div, {
            className: "chakra-stack__divider",
            ...e,
            __css: {
              ...e.__css,
              borderWidth: 0,
              alignSelf: "stretch",
              borderColor: "inherit",
              width: "auto",
              height: "auto",
            },
          });
      p.displayName = "StackDivider";
      var x = r(4641),
        b = r(8911),
        g = r(5432),
        v = r(5059),
        j = (0, v.G)(function (e, t) {
          let { children: r, placeholder: n, className: a, ...l } = e;
          return (0,
          i.jsxs)(m.m.select, { ...l, ref: t, className: (0, g.cx)("chakra-select", a), children: [n && (0, i.jsx)("option", { value: "", children: n }), r] });
        });
      j.displayName = "SelectField";
      var y = r(5227),
        w = r(1103),
        _ = r(4662),
        k = r(7798),
        [C, O] = (0, y.k)({
          name: "FormControlStylesContext",
          errorMessage:
            "useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" ",
        }),
        [S, E] = (0, y.k)({ strict: !1, name: "FormControlContext" });
      ((0, v.G)(function (e, t) {
        let r = (0, _.jC)("Form", e),
          n = (0, k.Lr)(e),
          {
            getRootProps: a,
            htmlProps: l,
            ...o
          } = (function (e) {
            let {
                id: t,
                isRequired: r,
                isInvalid: n,
                isDisabled: i,
                isReadOnly: a,
                ...l
              } = e,
              o = (0, s.useId)(),
              c = t || `field-${o}`,
              d = `${c}-label`,
              u = `${c}-feedback`,
              f = `${c}-helptext`,
              [h, m] = (0, s.useState)(!1),
              [p, x] = (0, s.useState)(!1),
              [b, v] = (0, s.useState)(!1),
              j = (0, s.useCallback)(
                (e = {}, t = null) => ({
                  id: f,
                  ...e,
                  ref: (0, w.lq)(t, (e) => {
                    e && x(!0);
                  }),
                }),
                [f]
              ),
              y = (0, s.useCallback)(
                (e = {}, t = null) => {
                  var r, l;
                  return {
                    ...e,
                    ref: t,
                    "data-focus": (0, g.PB)(b),
                    "data-disabled": (0, g.PB)(i),
                    "data-invalid": (0, g.PB)(n),
                    "data-readonly": (0, g.PB)(a),
                    id: null != (r = e.id) ? r : d,
                    htmlFor: null != (l = e.htmlFor) ? l : c,
                  };
                },
                [c, i, b, n, a, d]
              ),
              _ = (0, s.useCallback)(
                (e = {}, t = null) => ({
                  id: u,
                  ...e,
                  ref: (0, w.lq)(t, (e) => {
                    e && m(!0);
                  }),
                  "aria-live": "polite",
                }),
                [u]
              ),
              k = (0, s.useCallback)(
                (e = {}, t = null) => ({ ...e, ...l, ref: t, role: "group" }),
                [l]
              ),
              C = (0, s.useCallback)(
                (e = {}, t = null) => ({
                  ...e,
                  ref: t,
                  role: "presentation",
                  "aria-hidden": !0,
                  children: e.children || "*",
                }),
                []
              );
            return {
              isRequired: !!r,
              isInvalid: !!n,
              isReadOnly: !!a,
              isDisabled: !!i,
              isFocused: !!b,
              onFocus: () => v(!0),
              onBlur: () => v(!1),
              hasFeedbackText: h,
              setHasFeedbackText: m,
              hasHelpText: p,
              setHasHelpText: x,
              id: c,
              labelId: d,
              feedbackId: u,
              helpTextId: f,
              htmlProps: l,
              getHelpTextProps: j,
              getErrorMessageProps: _,
              getRootProps: k,
              getLabelProps: y,
              getRequiredIndicatorProps: C,
            };
          })(n),
          c = (0, g.cx)("chakra-form-control", e.className);
        return (0,
        i.jsx)(S, { value: o, children: (0, i.jsx)(C, { value: r, children: (0, i.jsx)(m.m.div, { ...a({}, t), className: c, __css: r.container }) }) });
      }).displayName = "FormControl"),
        ((0, v.G)(function (e, t) {
          let r = E(),
            n = O(),
            a = (0, g.cx)("chakra-form__helper-text", e.className);
          return (0,
          i.jsx)(m.m.div, { ...(null == r ? void 0 : r.getHelpTextProps(e, t)), __css: n.helperText, className: a });
        }).displayName = "FormHelperText");
      var F = (0, v.G)((e, t) => {
        var r;
        let n = (0, _.jC)("Select", e),
          {
            rootProps: a,
            placeholder: l,
            icon: s,
            color: o,
            height: c,
            h: d,
            minH: u,
            minHeight: f,
            iconColor: h,
            iconSize: p,
            ...x
          } = (0, k.Lr)(e),
          [b, v] = (function (e, t) {
            let r = {},
              n = {};
            for (let [i, a] of Object.entries(e))
              t.includes(i) ? (r[i] = a) : (n[i] = a);
            return [r, n];
          })(x, k.oE),
          y = (function (e) {
            let {
              isDisabled: t,
              isInvalid: r,
              isReadOnly: n,
              isRequired: i,
              ...a
            } = (function (e) {
              var t, r, n;
              let i = E(),
                {
                  id: a,
                  disabled: l,
                  readOnly: s,
                  required: o,
                  isRequired: c,
                  isInvalid: d,
                  isReadOnly: u,
                  isDisabled: f,
                  onFocus: h,
                  onBlur: m,
                  ...p
                } = e,
                x = e["aria-describedby"] ? [e["aria-describedby"]] : [];
              return (
                (null == i ? void 0 : i.hasFeedbackText) &&
                  (null == i ? void 0 : i.isInvalid) &&
                  x.push(i.feedbackId),
                (null == i ? void 0 : i.hasHelpText) && x.push(i.helpTextId),
                {
                  ...p,
                  "aria-describedby": x.join(" ") || void 0,
                  id: null != a ? a : null == i ? void 0 : i.id,
                  isDisabled:
                    null != (t = null != l ? l : f)
                      ? t
                      : null == i
                      ? void 0
                      : i.isDisabled,
                  isReadOnly:
                    null != (r = null != s ? s : u)
                      ? r
                      : null == i
                      ? void 0
                      : i.isReadOnly,
                  isRequired:
                    null != (n = null != o ? o : c)
                      ? n
                      : null == i
                      ? void 0
                      : i.isRequired,
                  isInvalid: null != d ? d : null == i ? void 0 : i.isInvalid,
                  onFocus: (0, g.v0)(null == i ? void 0 : i.onFocus, h),
                  onBlur: (0, g.v0)(null == i ? void 0 : i.onBlur, m),
                }
              );
            })(e);
            return {
              ...a,
              disabled: t,
              readOnly: n,
              required: i,
              "aria-invalid": (0, g.Qm)(r),
              "aria-required": (0, g.Qm)(i),
              "aria-readonly": (0, g.Qm)(n),
            };
          })(v),
          w = {
            paddingEnd: "2rem",
            ...n.field,
            _focus: {
              zIndex: "unset",
              ...(null == (r = n.field) ? void 0 : r._focus),
            },
          };
        return (0, i.jsxs)(m.m.div, {
          className: "chakra-select__wrapper",
          __css: {
            width: "100%",
            height: "fit-content",
            position: "relative",
            color: o,
          },
          ...b,
          ...a,
          children: [
            (0, i.jsx)(j, {
              ref: t,
              height: null != d ? d : c,
              minH: null != u ? u : f,
              placeholder: l,
              ...y,
              __css: w,
              children: e.children,
            }),
            (0, i.jsx)(A, {
              "data-disabled": (0, g.PB)(y.disabled),
              ...((h || o) && { color: h || o }),
              __css: n.icon,
              ...(p && { fontSize: p }),
              children: s,
            }),
          ],
        });
      });
      F.displayName = "Select";
      var I = (e) =>
          (0, i.jsx)("svg", {
            viewBox: "0 0 24 24",
            ...e,
            children: (0, i.jsx)("path", {
              fill: "currentColor",
              d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z",
            }),
          }),
        N = (0, m.m)("div", {
          baseStyle: {
            position: "absolute",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            top: "50%",
            transform: "translateY(-50%)",
          },
        }),
        A = (e) => {
          let { children: t = (0, i.jsx)(I, {}), ...r } = e,
            n = (0, s.cloneElement)(t, {
              role: "presentation",
              className: "chakra-select__icon",
              focusable: !1,
              "aria-hidden": !0,
              style: { width: "1em", height: "1em", color: "currentColor" },
            });
          return (0, i.jsx)(N, {
            ...r,
            className: "chakra-select__icon-wrapper",
            children: (0, s.isValidElement)(t) ? n : null,
          });
        };
      A.displayName = "SelectIcon";
      let R = (e) => {
        let {
          heading: t,
          children: r,
          years: n,
          defaultYear: a,
          callback: s,
        } = e;
        return (0, i.jsx)(l.xu, {
          w: "full",
          py: "16",
          as: "section",
          children: (0, i.jsx)(f.W, {
            maxW: "container.xl",
            color: "brand.lightest",
            px: "4",
            children: (0, i.jsxs)(h.g, {
              divider: (0, i.jsx)(p, {
                borderColor: "brand.grayer",
                borderWidth: "thin",
              }),
              align: "flex-start",
              children: [
                (0, i.jsxs)(x.U, {
                  w: "full",
                  justify: "space-between",
                  align: "center",
                  children: [
                    (0, i.jsx)(b.x, {
                      as: "h3",
                      fontFamily: "body",
                      fontWeight: "bold",
                      fontSize: "2xl",
                      textTransform: "uppercase",
                      letterSpacing: "widest",
                      children: t,
                    }),
                    (0, i.jsx)(F, {
                      w: "40",
                      defaultValue: a,
                      onChange: (e) => {
                        let t = e.target.value;
                        s(() => t);
                      },
                      children: n.map((e) =>
                        (0, i.jsxs)(
                          "option",
                          { value: e, children: ["Batch ", e] },
                          e
                        )
                      ),
                    }),
                  ],
                }),
                (0, i.jsx)(i.Fragment, { children: r }),
              ],
            }),
          }),
        });
      };
      var T = (0, v.G)(function (e, t) {
        let {
          templateAreas: r,
          gap: n,
          rowGap: a,
          columnGap: l,
          column: s,
          row: o,
          autoFlow: c,
          autoRows: d,
          templateRows: u,
          autoColumns: f,
          templateColumns: h,
          ...p
        } = e;
        return (0,
        i.jsx)(m.m.div, { ref: t, __css: { display: "grid", gridTemplateAreas: r, gridGap: n, gridRowGap: a, gridColumnGap: l, gridAutoColumns: f, gridColumn: s, gridRow: o, gridAutoFlow: c, gridAutoRows: d, gridTemplateRows: u, gridTemplateColumns: h }, ...p });
      });
      T.displayName = "Grid";
      var W = r(5104),
        z = r(4394),
        q = r(1020),
        B = r(5759);
      function P() {
        let e = !1,
          t = new Set(),
          r = {
            subscribe: (e) => (t.add(e), () => void t.delete(e)),
            start(r, n) {
              (0, z.k)(
                e,
                "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook."
              );
              let i = [];
              return (
                t.forEach((e) => {
                  i.push((0, q.d5)(e, r, { transitionOverride: n }));
                }),
                Promise.all(i)
              );
            },
            set: (r) => (
              (0, z.k)(
                e,
                "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
              ),
              t.forEach((e) => {
                (0, B.gg)(e, r);
              })
            ),
            stop() {
              t.forEach((e) => {
                (0, q.p_)(e);
              });
            },
            mount: () => (
              (e = !0),
              () => {
                (e = !1), r.stop();
              }
            ),
          };
        return r;
      }
      var V = r(6681),
        G = r(8868);
      let L = function () {
          let e = (0, V.h)(P);
          return (0, G.L)(e.mount, []), e;
        },
        X = new Map(),
        D = new WeakMap(),
        M = 0;
      var H = r(3951),
        Z = r(7829),
        $ = r(5119),
        J = r(4609),
        Y = r(3838),
        Q = r(6877),
        U = r(1664),
        K = r.n(U),
        ee = r(9583);
      let et = (0, W.E)(a.k),
        er = (0, W.E)(l.xu),
        en = (e) => {
          let { member: t } = e;
          return (
            !(function (e, t) {
              var r;
              let n = (0, g.Kn)(t) ? t : { fallback: null != t ? t : "base" },
                i = (function (e) {
                  var t, r;
                  let n = (0, g.Kn)(e)
                      ? e
                      : { fallback: null != e ? e : "base" },
                    i = (0, $.F)(),
                    a = i.__breakpoints.details.map(
                      ({ minMaxQuery: e, breakpoint: t }) => ({
                        breakpoint: t,
                        query: e.replace("@media screen and ", ""),
                      })
                    ),
                    l = a.map((e) => e.breakpoint === n.fallback),
                    o = (function (e, t = {}) {
                      let { ssr: r = !0, fallback: n } = t,
                        i = (0, Z.O)(),
                        a = Array.isArray(e) ? e : [e],
                        l = Array.isArray(n) ? n : [n];
                      l = l.filter((e) => null != e);
                      let [o, c] = (0, s.useState)(() =>
                        a.map((e, t) => ({
                          media: e,
                          matches: r ? !!l[t] : i.window.matchMedia(e).matches,
                        }))
                      );
                      return (
                        (0, s.useEffect)(() => {
                          c(
                            a.map((e) => ({
                              media: e,
                              matches: i.window.matchMedia(e).matches,
                            }))
                          );
                          let e = a.map((e) => i.window.matchMedia(e)),
                            t = (e) => {
                              c((t) =>
                                t
                                  .slice()
                                  .map((t) =>
                                    t.media === e.media
                                      ? { ...t, matches: e.matches }
                                      : t
                                  )
                              );
                            };
                          return (
                            e.forEach((e) => {
                              "function" == typeof e.addListener
                                ? e.addListener(t)
                                : e.addEventListener("change", t);
                            }),
                            () => {
                              e.forEach((e) => {
                                "function" == typeof e.removeListener
                                  ? e.removeListener(t)
                                  : e.removeEventListener("change", t);
                              });
                            }
                          );
                        }, [i.window]),
                        o.map((e) => e.matches)
                      );
                    })(
                      a.map((e) => e.query),
                      { fallback: l, ssr: n.ssr }
                    ),
                    c = o.findIndex((e) => !0 == e);
                  return null !=
                    (r = null == (t = a[c]) ? void 0 : t.breakpoint)
                    ? r
                    : n.fallback;
                })(n),
                a = (0, $.F)();
              if (!i) return;
              let l = Array.from(
                  (null == (r = a.__breakpoints) ? void 0 : r.keys) || []
                ),
                o = Array.isArray(e)
                  ? Object.fromEntries(
                      Object.entries((0, H.Yq)(e, l)).map(([e, t]) => [e, t])
                    )
                  : e;
              (function (e, t, r = H.AV) {
                let n = Object.keys(e).indexOf(t);
                if (-1 !== n) return e[t];
                let i = r.indexOf(t);
                for (; i >= 0; ) {
                  let a = r[i];
                  if (e.hasOwnProperty(a)) {
                    n = i;
                    break;
                  }
                  i -= 1;
                }
                if (-1 !== n) {
                  let l = r[n];
                  e[l];
                }
              })(o, i, l);
            })({ base: "mobile", md: "desktop" }),
            (0, i.jsxs)(er, {
              w: "full",
              h: "md",
              pos: "relative",
              cursor: "pointer",
              variants: {
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { duration: 0.8 } },
              },
              children: [
                (0, i.jsx)(J.E, {
                  h: "full",
                  w: "full",
                  src: t.image,
                  objectFit: "cover",
                  opacity: 0.9,
                }),
                (0, i.jsx)(Y.r, {
                  as: K(),
                  href: t.redirect,
                  children: (0, i.jsx)(et, {
                    w: "full",
                    h: "full",
                    align: "center",
                    justify: "center",
                    py: "6",
                    bg: "brand.overlay",
                    opacity: "0",
                    pos: "absolute",
                    top: "0",
                    left: "0",
                    whileHover: { opacity: 1 },
                    children: (0, i.jsxs)(a.k, {
                      justify: "center",
                      align: "center",
                      direction: "column",
                      children: [
                        (0, i.jsx)(b.x, {
                          fontFamily: "body",
                          fontWeight: "bold",
                          fontSize: "4xl",
                          align: "center",
                          color: "brand.lightest",
                          textTransform: "uppercase",
                          letterSpacing: "widest",
                          children: t.name,
                        }),
                        (0, i.jsx)(Q.J, { boxSize: "8", as: ee.ltd }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          );
        },
        ei = (0, W.E)(T),
        ea = (e) => {
          let { members: t } = e,
            r = L(),
            { ref: a, inView: l } = (function ({
              threshold: e,
              delay: t,
              trackVisibility: r,
              rootMargin: i,
              root: a,
              triggerOnce: l,
              skip: o,
              initialInView: c,
              fallbackInView: d,
              onChange: u,
            } = {}) {
              var f;
              let [h, m] = s.useState(null),
                p = s.useRef(),
                [x, b] = s.useState({ inView: !!c, entry: void 0 });
              (p.current = u),
                s.useEffect(() => {
                  let s;
                  if (!o && h)
                    return (
                      (s = (function (e, t, r = {}, i = n) {
                        if (
                          void 0 === window.IntersectionObserver &&
                          void 0 !== i
                        ) {
                          let a = e.getBoundingClientRect();
                          return (
                            t(i, {
                              isIntersecting: i,
                              target: e,
                              intersectionRatio:
                                "number" == typeof r.threshold
                                  ? r.threshold
                                  : 0,
                              time: 0,
                              boundingClientRect: a,
                              intersectionRect: a,
                              rootBounds: a,
                            }),
                            () => {}
                          );
                        }
                        let {
                            id: l,
                            observer: s,
                            elements: o,
                          } = (function (e) {
                            let t = Object.keys(e)
                                .sort()
                                .filter((t) => void 0 !== e[t])
                                .map((t) => {
                                  var r;
                                  return `${t}_${
                                    "root" === t
                                      ? (r = e.root)
                                        ? (D.has(r) ||
                                            ((M += 1), D.set(r, M.toString())),
                                          D.get(r))
                                        : "0"
                                      : e[t]
                                  }`;
                                })
                                .toString(),
                              r = X.get(t);
                            if (!r) {
                              let n;
                              let i = new Map(),
                                a = new IntersectionObserver((t) => {
                                  t.forEach((t) => {
                                    var r;
                                    let a =
                                      t.isIntersecting &&
                                      n.some((e) => t.intersectionRatio >= e);
                                    e.trackVisibility &&
                                      void 0 === t.isVisible &&
                                      (t.isVisible = a),
                                      null == (r = i.get(t.target)) ||
                                        r.forEach((e) => {
                                          e(a, t);
                                        });
                                  });
                                }, e);
                              (n =
                                a.thresholds ||
                                (Array.isArray(e.threshold)
                                  ? e.threshold
                                  : [e.threshold || 0])),
                                (r = { id: t, observer: a, elements: i }),
                                X.set(t, r);
                            }
                            return r;
                          })(r),
                          c = o.get(e) || [];
                        return (
                          o.has(e) || o.set(e, c),
                          c.push(t),
                          s.observe(e),
                          function () {
                            c.splice(c.indexOf(t), 1),
                              0 === c.length && (o.delete(e), s.unobserve(e)),
                              0 === o.size && (s.disconnect(), X.delete(l));
                          }
                        );
                      })(
                        h,
                        (e, t) => {
                          b({ inView: e, entry: t }),
                            p.current && p.current(e, t),
                            t.isIntersecting && l && s && (s(), (s = void 0));
                        },
                        {
                          root: a,
                          rootMargin: i,
                          threshold: e,
                          trackVisibility: r,
                          delay: t,
                        },
                        d
                      )),
                      () => {
                        s && s();
                      }
                    );
                }, [
                  Array.isArray(e) ? e.toString() : e,
                  h,
                  a,
                  i,
                  l,
                  o,
                  r,
                  d,
                  t,
                ]);
              let g = null == (f = x.entry) ? void 0 : f.target;
              s.useEffect(() => {
                h || !g || l || o || b({ inView: !!c, entry: void 0 });
              }, [h, g, l, o, c]);
              let v = [m, x.inView, x.entry];
              return (v.ref = v[0]), (v.inView = v[1]), (v.entry = v[2]), v;
            })();
          return (
            (0, s.useEffect)(() => {
              l && r.start("show");
            }, [l, t]),
            (0, i.jsx)(ei, {
              ref: a,
              w: { base: "full", sm: "initial", md: "full" },
              minH: "2xl",
              templateColumns: { md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
              gap: "px",
              mt: "6",
              variants: {
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.2 } },
              },
              initial: "hidden",
              animate: r,
              children: t.map((e) => (0, i.jsx)(en, { member: e }, e.id)),
            })
          );
        },
        el = (e) => {
          let { data: t, years: r } = e,
            [n, o] = (0, s.useState)(t[0].year),
            [f, h] = (0, s.useState)(t[0].members);
          return (
            L(),
            (0, s.useEffect)(() => {
              let e = t.find((e) => e.year === n);
              h(() => e.members);
            }, [n]),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(c(), {
                  children: (0, i.jsx)("title", { children: "Team | OSOC" }),
                }),
                (0, i.jsxs)(a.k, {
                  minW: "100%",
                  flexDir: "column",
                  pos: "relative",
                  zIndex: 10,
                  children: [
                    (0, i.jsx)("video", {
                      autoPlay: !0,
                      muted: !0,
                      loop: !0,
                      src: "/bg.mp4",
                      style: {
                        objectFit: "cover",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        height: "100vh",
                        width: "100vw",
                        zIndex: "-10",
                      },
                    }),
                    (0, i.jsx)(l.xu, {
                      bg: "blackAlpha.700",
                      pos: "fixed",
                      top: "0",
                      left: "0",
                      minH: "full",
                      minW: "full",
                      zIndex: -10,
                    }),
                    (0, i.jsx)(d.Z, {}),
                    (0, i.jsx)(R, {
                      heading: "Members",
                      years: r,
                      callback: o,
                      defaultYear: n,
                      children: (0, i.jsx)(ea, { members: f }),
                    }),
                    (0, i.jsx)(u.Z, {}),
                  ],
                }),
              ],
            })
          );
        };
      var es = !0,
        eo = el;
    },
    1103: function (e, t, r) {
      "use strict";
      r.d(t, {
        lq: function () {
          return i;
        },
        qq: function () {
          return a;
        },
      });
      var n = r(7294);
      function i(...e) {
        return (t) => {
          e.forEach((e) => {
            !(function (e, t) {
              if (null != e) {
                if ("function" == typeof e) {
                  e(t);
                  return;
                }
                try {
                  e.current = t;
                } catch (r) {
                  throw Error(`Cannot assign value '${t}' to ref '${e}'`);
                }
              }
            })(e, t);
          });
        };
      }
      function a(...e) {
        return (0, n.useMemo)(() => i(...e), e);
      }
    },
  },
  function (e) {
    e.O(0, [445, 553, 774, 888, 179], function () {
      return e((e.s = 2115));
    }),
      (_N_E = e.O());
  },
]);
