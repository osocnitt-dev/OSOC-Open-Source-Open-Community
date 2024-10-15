(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [335],
  {
    1382: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/contact",
        function () {
          return n(9732);
        },
      ]);
    },
    2808: function (e, t, n) {
      "use strict";
      var r = n(5893),
        a = n(3100),
        o = n(6979),
        i = n(7651),
        s = n(8911);
      n(7294);
      var l = n(2298);
      let c = (e) => {
        let t = new Date();
        return (0, r.jsx)(a.xu, {
          as: "footer",
          w: "100%",
          py: "12",
          children: (0, r.jsx)(o.W, {
            maxW: "container.xl",
            color: "brand.grayer",
            px: { base: "6", xl: "0" },
            children: (0, r.jsxs)(i.g, {
              spacing: "6",
              children: [
                (0, r.jsx)(l.Z, { variant: "FOOTER" }),
                (0, r.jsxs)(s.x, {
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
    4237: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return b;
        },
      });
      var r = n(5893),
        a = n(3100),
        o = n(6979),
        i = n(204),
        s = n(3838);
      n(7294);
      var l = n(4609);
      let c = (e) =>
        (0, r.jsx)(i.k, {
          justify: "center",
          align: "center",
          children: (0, r.jsx)(l.E, { src: "/osoc.png", w: "12" }),
        });
      var d = n(4641),
        h = n(8911),
        x = n(1664),
        m = n.n(x);
      let f = (e) =>
        (0, r.jsxs)(d.U, {
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
            (0, r.jsx)(s.r, {
              as: m(),
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
              children: (0, r.jsx)(h.x, { children: "Events" }),
            }),
            (0, r.jsx)(s.r, {
              as: m(),
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
              children: (0, r.jsx)(h.x, { children: "Team" }),
            }),
            (0, r.jsx)(s.r, {
              as: m(),
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
              children: (0, r.jsx)(h.x, { children: "About" }),
            }),
            (0, r.jsx)(s.r, {
              as: m(),
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
              children: (0, r.jsx)(h.x, { children: "Contact" }),
            }),
          ],
        });
      var u = n(2298);
      let g = (e) =>
        (0, r.jsx)(a.xu, {
          as: "header",
          w: "100%",
          color: "brand.lightest",
          zIndex: 2,
          children: (0, r.jsx)(o.W, {
            maxW: "container.xl",
            children: (0, r.jsxs)(i.k, {
              h: { base: "40", md: "20" },
              align: "center",
              justify: { base: "space-evenly", md: "space-between" },
              direction: { base: "column", md: "row" },
              children: [
                (0, r.jsx)(s.r, {
                  as: m(),
                  href: "/",
                  "aria-label": "OSOC Homepage",
                  children: (0, r.jsx)(c, {}),
                }),
                (0, r.jsx)(f, {}),
                (0, r.jsx)(u.Z, {}),
              ],
            }),
          }),
        });
      var b = g;
    },
    2298: function (e, t, n) {
      "use strict";
      var r = n(5893),
        a = n(4641),
        o = n(3838),
        i = n(6877);
      n(7294);
      var s = n(9583);
      let l = (e) => {
        let { variant: t = "NAV" } = e;
        return (0, r.jsxs)(a.U, {
          spacing: "6",
          fontSize: "xl",
          display:
            "NAV" === t
              ? { base: "none", md: "flex" }
              : { base: "flex", md: "none" },
          children: [
            (0, r.jsx)(o.r, {
              href: "https://www.instagram.com/osoc_nitt/",
              isExternal: !0,
              "aria-label": "OSOC Instagram",
              children: (0, r.jsx)(i.J, { as: s.Zf_ }),
            }),
            (0, r.jsx)(o.r, {
              href: "https://www.facebook.com/groups/633779233333438/",
              isExternal: !0,
              "aria-label": "OSOC Facebook",
              children: (0, r.jsx)(i.J, { as: s.tBk }),
            }),
            (0, r.jsx)(o.r, {
              href: "https://www.linkedin.com/company/open-source-open-community/",
              isExternal: !0,
              "aria-label": "OSOC LinkedIn",
              children: (0, r.jsx)(i.J, { as: s.ltd }),
            }),
            (0, r.jsx)(o.r, {
              href: "https://github.com/osocnitt-dev/",
              isExternal: !0,
              "aria-label": "OSOC GitHub",
              children: (0, r.jsx)(i.J, { as: s.hJX }),
            }),
          ],
        });
      };
      t.Z = l;
    },
    9732: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var r = n(5893),
        a = n(204),
        o = n(3100);
      n(7294);
      var i = n(6979),
        s = n(7651),
        l = n(8911),
        c = n(7306),
        d = n(8855),
        h = n(3838);
      let x = () =>
        (0, r.jsx)(o.xu, {
          as: "main",
          w: "full",
          mt: { base: "-40", md: "-20" },
          children: (0, r.jsx)(i.W, {
            minH: "2xl",
            h: "100vh",
            maxW: "container.xl",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDir: "column",
            color: "brand.lightest",
            children: (0, r.jsx)(c.K, {
              w: "full",
              align: "center",
              justify: "center",
              flexGrow: 1,
              children: (0, r.jsxs)(s.g, {
                spacing: "8",
                align: { base: "center", md: "flex-start" },
                children: [
                  (0, r.jsxs)(o.xu, {
                    textAlign: { base: "center", md: "left" },
                    children: [
                      (0, r.jsx)(l.x, {
                        as: "h1",
                        fontSize: {
                          base: "3xl",
                          sm: "5xl",
                          md: "6xl",
                          lg: "72px",
                        },
                        fontFamily: "display",
                        lineHeight: "none",
                        letterSpacing: "widest",
                        children: "Let's Connect",
                      }),
                      (0, r.jsx)(l.x, {
                        as: "h3",
                        fontSize: {
                          base: "3xl",
                          sm: "5xl",
                          md: "6xl",
                          lg: "72px",
                        },
                        fontFamily: "display",
                        lineHeight: "none",
                        letterSpacing: "widest",
                        color: "brand.lightest",
                        bg: "brand.lightest",
                        bgImage: "/water-art.jpg",
                        bgRepeat: "no-repeat",
                        bgSize: "cover",
                        bgPos: "left",
                        bgClip: "text",
                        children: "osocnitt@gmail.com",
                      }),
                    ],
                  }),
                  (0, r.jsxs)(l.x, {
                    fontSize: "lg",
                    fontFamily: "body",
                    fontWeight: "thin",
                    color: "brand.gray",
                    textAlign: { base: "center", md: "left" },
                    children: [
                      "To contact us kindly use the following contact details.",
                      (0, r.jsx)("br", {}),
                      (0, r.jsx)("br", {}),
                      "Phone Number: +91 7840883262 (Sachin Kumar)",
                      (0, r.jsx)("br", {}),
                      "Facebook Page: ",
                      (0, r.jsx)("a", {
                        href: "http://facebook.com/osocnitt",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "http://facebook.com/osocnitt",
                      }),
                      (0, r.jsx)("br", {}),
                      "Instagram Page: ",
                      (0, r.jsx)("a", {
                        href: "https://www.instagram.com/osoc_nitt/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "https://www.instagram.com/osoc_nitt",
                      }),
                      (0, r.jsx)("br", {}),
                      "Github Page: ",
                      (0, r.jsx)("a", {
                        href: "https://github.com/osocnitt-dev/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "https://github.com/osocnitt-dev",
                      }),
                      (0, r.jsx)("br", {}),
                    ],
                  }),
                  (0, r.jsx)(d.z, {
                    as: h.r,
                    color: "brand.lightest",
                    _hover: { color: "brand.400", bg: "brand.lightest" },
                    size: "md",
                    variant: "outline",
                    href: "mailto:osocnitt@gmail.com?subject=Saying Hi!",
                    children: "Connect",
                  }),
                ],
              }),
            }),
          }),
        });
      var m = n(4237),
        f = n(9008),
        u = n.n(f),
        g = n(2808);
      let b = () =>
        (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(u(), {
              children: (0, r.jsx)("title", { children: "Contact" }),
            }),
            (0, r.jsxs)(a.k, {
              minW: "full",
              flexDir: "column",
              pos: "relative",
              zIndex: 10,
              children: [
                (0, r.jsx)("video", {
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
                (0, r.jsx)(o.xu, {
                  bg: "blackAlpha.700",
                  pos: "fixed",
                  top: "0",
                  left: "0",
                  minH: "full",
                  minW: "full",
                  zIndex: -10,
                }),
                (0, r.jsx)(m.Z, {}),
                (0, r.jsx)(x, {}),
                (0, r.jsx)(g.Z, {}),
              ],
            }),
          ],
        });
      var p = b;
    },
    8855: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return g;
        },
      });
      var r = n(7294),
        [a, o] = (0, n(5227).k)({ strict: !1, name: "ButtonGroupContext" }),
        i = n(8611),
        s = n(5432),
        l = n(5893);
      function c(e) {
        let { children: t, className: n, ...a } = e,
          o = (0, r.isValidElement)(t)
            ? (0, r.cloneElement)(t, { "aria-hidden": !0, focusable: !1 })
            : t,
          c = (0, s.cx)("chakra-button__icon", n);
        return (0, l.jsx)(i.m.span, {
          display: "inline-flex",
          alignSelf: "center",
          flexShrink: 0,
          ...a,
          className: c,
          children: o,
        });
      }
      c.displayName = "ButtonIcon";
      var d = n(295);
      function h(e) {
        let {
            label: t,
            placement: n,
            spacing: a = "0.5rem",
            children: o = (0, l.jsx)(d.$, {
              color: "currentColor",
              width: "1em",
              height: "1em",
            }),
            className: c,
            __css: h,
            ...x
          } = e,
          m = (0, s.cx)("chakra-button__spinner", c),
          f = "start" === n ? "marginEnd" : "marginStart",
          u = (0, r.useMemo)(
            () => ({
              display: "flex",
              alignItems: "center",
              position: t ? "relative" : "absolute",
              [f]: t ? a : 0,
              fontSize: "1em",
              lineHeight: "normal",
              ...h,
            }),
            [h, t, f, a]
          );
        return (0, l.jsx)(i.m.div, {
          className: m,
          ...x,
          __css: u,
          children: o,
        });
      }
      h.displayName = "ButtonSpinner";
      var x = n(1103),
        m = n(5059),
        f = n(4662),
        u = n(7798),
        g = (0, m.G)((e, t) => {
          let n = o(),
            a = (0, f.mq)("Button", { ...n, ...e }),
            {
              isDisabled: c = null == n ? void 0 : n.isDisabled,
              isLoading: d,
              isActive: m,
              children: g,
              leftIcon: p,
              rightIcon: j,
              loadingText: v,
              iconSpacing: w = "0.5rem",
              type: _,
              spinner: y,
              spinnerPlacement: k = "start",
              className: S,
              as: O,
              ...C
            } = (0, u.Lr)(e),
            E = (0, r.useMemo)(() => {
              let e = { ...(null == a ? void 0 : a._focus), zIndex: 1 };
              return {
                display: "inline-flex",
                appearance: "none",
                alignItems: "center",
                justifyContent: "center",
                userSelect: "none",
                position: "relative",
                whiteSpace: "nowrap",
                verticalAlign: "middle",
                outline: "none",
                ...a,
                ...(!!n && { _focus: e }),
              };
            }, [a, n]),
            { ref: N, type: z } = (function (e) {
              let [t, n] = (0, r.useState)(!e),
                a = (0, r.useCallback)((e) => {
                  e && n("BUTTON" === e.tagName);
                }, []);
              return { ref: a, type: t ? "button" : void 0 };
            })(O),
            I = { rightIcon: j, leftIcon: p, iconSpacing: w, children: g };
          return (0, l.jsxs)(i.m.button, {
            disabled: c || d,
            ref: (0, x.qq)(t, N),
            as: O,
            type: null != _ ? _ : z,
            "data-active": (0, s.PB)(m),
            "data-loading": (0, s.PB)(d),
            __css: E,
            className: (0, s.cx)("chakra-button", S),
            ...C,
            children: [
              d &&
                "start" === k &&
                (0, l.jsx)(h, {
                  className: "chakra-button__spinner--start",
                  label: v,
                  placement: "start",
                  spacing: w,
                  children: y,
                }),
              d
                ? v ||
                  (0, l.jsx)(i.m.span, {
                    opacity: 0,
                    children: (0, l.jsx)(b, { ...I }),
                  })
                : (0, l.jsx)(b, { ...I }),
              d &&
                "end" === k &&
                (0, l.jsx)(h, {
                  className: "chakra-button__spinner--end",
                  label: v,
                  placement: "end",
                  spacing: w,
                  children: y,
                }),
            ],
          });
        });
      function b(e) {
        let { leftIcon: t, rightIcon: n, children: r, iconSpacing: a } = e;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            t && (0, l.jsx)(c, { marginEnd: a, children: t }),
            r,
            n && (0, l.jsx)(c, { marginStart: a, children: n }),
          ],
        });
      }
      g.displayName = "Button";
    },
    1103: function (e, t, n) {
      "use strict";
      n.d(t, {
        lq: function () {
          return a;
        },
        qq: function () {
          return o;
        },
      });
      var r = n(7294);
      function a(...e) {
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
                } catch (n) {
                  throw Error(`Cannot assign value '${t}' to ref '${e}'`);
                }
              }
            })(e, t);
          });
        };
      }
      function o(...e) {
        return (0, r.useMemo)(() => a(...e), e);
      }
    },
  },
  function (e) {
    e.O(0, [445, 553, 774, 888, 179], function () {
      return e((e.s = 1382));
    }),
      (_N_E = e.O());
  },
]);
