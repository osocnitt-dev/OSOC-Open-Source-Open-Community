(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    3454: function (e, t, n) {
      "use strict";
      var r, o;
      e.exports =
        (null == (r = n.g.process) ? void 0 : r.env) &&
        "object" == typeof (null == (o = n.g.process) ? void 0 : o.env)
          ? n.g.process
          : n(7663);
    },
    8312: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(5015);
        },
      ]);
    },
    2808: function (e, t, n) {
      "use strict";
      var r = n(5893),
        o = n(3100),
        i = n(6979),
        s = n(7651),
        a = n(8911);
      n(7294);
      var c = n(2298);
      let l = (e) => {
        let t = new Date();
        return (0, r.jsx)(o.xu, {
          as: "footer",
          w: "100%",
          py: "12",
          children: (0, r.jsx)(i.W, {
            maxW: "container.xl",
            color: "brand.grayer",
            px: { base: "6", xl: "0" },
            children: (0, r.jsxs)(s.g, {
              spacing: "6",
              children: [
                (0, r.jsx)(c.Z, { variant: "FOOTER" }),
                (0, r.jsxs)(a.x, {
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
      t.Z = l;
    },
    4237: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var r = n(5893),
        o = n(3100),
        i = n(6979),
        s = n(204),
        a = n(3838);
      n(7294);
      var c = n(4609);
      let l = (e) =>
        (0, r.jsx)(s.k, {
          justify: "center",
          align: "center",
          children: (0, r.jsx)(c.E, { src: "/osoc.png", w: "12" }),
        });
      var u = n(4641),
        f = n(8911),
        h = n(1664),
        m = n.n(h);
      let d = (e) =>
        (0, r.jsxs)(u.U, {
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
            (0, r.jsx)(a.r, {
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
              children: (0, r.jsx)(f.x, { children: "Events" }),
            }),
            (0, r.jsx)(a.r, {
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
              children: (0, r.jsx)(f.x, { children: "Team" }),
            }),
            (0, r.jsx)(a.r, {
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
              children: (0, r.jsx)(f.x, { children: "About" }),
            }),
            (0, r.jsx)(a.r, {
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
              children: (0, r.jsx)(f.x, { children: "Contact" }),
            }),
          ],
        });
      var x = n(2298);
      let p = (e) =>
        (0, r.jsx)(o.xu, {
          as: "header",
          w: "100%",
          color: "brand.lightest",
          zIndex: 2,
          children: (0, r.jsx)(i.W, {
            maxW: "container.xl",
            children: (0, r.jsxs)(s.k, {
              h: { base: "40", md: "20" },
              align: "center",
              justify: { base: "space-evenly", md: "space-between" },
              direction: { base: "column", md: "row" },
              children: [
                (0, r.jsx)(a.r, {
                  as: m(),
                  href: "/",
                  "aria-label": "OSOC Homepage",
                  children: (0, r.jsx)(l, {}),
                }),
                (0, r.jsx)(d, {}),
                (0, r.jsx)(x.Z, {}),
              ],
            }),
          }),
        });
      var g = p;
    },
    2298: function (e, t, n) {
      "use strict";
      var r = n(5893),
        o = n(4641),
        i = n(3838),
        s = n(6877);
      n(7294);
      var a = n(9583);
      let c = (e) => {
        let { variant: t = "NAV" } = e;
        return (0, r.jsxs)(o.U, {
          spacing: "6",
          fontSize: "xl",
          display:
            "NAV" === t
              ? { base: "none", md: "flex" }
              : { base: "flex", md: "none" },
          children: [
            (0, r.jsx)(i.r, {
              href: "https://www.instagram.com/osoc_nitt/",
              isExternal: !0,
              "aria-label": "OSOC Instagram",
              children: (0, r.jsx)(s.J, { as: a.Zf_ }),
            }),
            (0, r.jsx)(i.r, {
              href: "https://www.facebook.com/groups/633779233333438/",
              isExternal: !0,
              "aria-label": "OSOC Facebook",
              children: (0, r.jsx)(s.J, { as: a.tBk }),
            }),
            (0, r.jsx)(i.r, {
              href: "https://www.linkedin.com/company/open-source-open-community/",
              isExternal: !0,
              "aria-label": "OSOC LinkedIn",
              children: (0, r.jsx)(s.J, { as: a.ltd }),
            }),
            (0, r.jsx)(i.r, {
              href: "https://github.com/osocnitt-dev/",
              isExternal: !0,
              "aria-label": "OSOC GitHub",
              children: (0, r.jsx)(s.J, { as: a.hJX }),
            }),
          ],
        });
      };
      t.Z = c;
    },
    5015: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return O;
          },
        });
      var r = n(5893),
        o = n(204);
      n(7294);
      var i = n(9008),
        s = n.n(i),
        a = n(4237),
        c = n(3100),
        l = n(6979),
        u = n(5059),
        f = n(4662),
        h = n(7798),
        m = n(8611),
        d = n(5432),
        x = (0, u.G)(function (e, t) {
          let n = (0, f.mq)("Heading", e),
            { className: o, ...i } = (0, h.Lr)(e);
          return (0,
          r.jsx)(m.m.h2, { ref: t, className: (0, d.cx)("chakra-heading", e.className), ...i, __css: n });
        });
      x.displayName = "Heading";
      var p = n(8911),
        g = n(7306);
      let b = () =>
        (0, r.jsx)(c.xu, {
          as: "main",
          w: "full",
          mt: { base: "-40", md: "-20" },
          children: (0, r.jsx)(l.W, {
            h: "calc(100vh - 160px)",
            maxW: "container.xl",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "brand.lightest",
            children: (0, r.jsxs)(g.K, {
              direction: { base: "column", md: "row" },
              align: "center",
              justify: "center",
              children: [
                (0, r.jsx)(x, {
                  fontFamily: "oswald",
                  fontSize: { md: "8xl", lg: "9xl", base: "7xl" },
                  color: "brand.lightest",
                  bgImage: "/water-art.jpg",
                  bgRepeat: "no-repeat",
                  bgSize: "cover",
                  bgPos: "left",
                  bgClip: "text",
                  cursor: "default",
                  opacity: 0.85,
                  children: "OSOC",
                }),
                (0, r.jsx)(p.x, {
                  fontSize: { base: "lg", md: "xl", lg: "2xl" },
                  fontFamily: "body",
                  color: "brand.lightest",
                  cursor: "default",
                  children: "Open Source Open Community",
                }),
              ],
            }),
          }),
        });
      var j = n(2808),
        y = n(3454);
      let v = () =>
        (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(s(), {
              children: [
                (0, r.jsx)("title", {
                  children: "OSOC - Open Source Open Community",
                }),
                (0, r.jsx)("meta", {
                  name: "description",
                  content:
                    "We are an open source community initiated by MCA students of NIT Trichy. We learn, work and share the joys of Open source technologies and wish to contribute to the Open Source Society. ",
                }),
                (0, r.jsx)("meta", { property: "og:type", content: "website" }),
                (0, r.jsx)("meta", {
                  property: "og:title",
                  content: "OSOC | Open Source Open Community",
                }),
                (0, r.jsx)("meta", {
                  property: "og:description",
                  content:
                    "We are an open source community initiated by MCA students of NIT Trichy. We learn, work and share the joys of Open source technologies and wish to contribute to the Open Source Society. ",
                }),
                (0, r.jsx)("meta", {
                  property: "og:image",
                  content: "/og.png",
                }),
                (0, r.jsx)("meta", {
                  property: "og:site_name",
                  content: "OSOC | Open Source Open Community",
                }),
                (0, r.jsx)("link", {
                  rel: "canonical",
                  href: "".concat(y.env.NEXT_PUBLIC_OG_HOST, "/"),
                }),
              ],
            }),
            (0, r.jsxs)(o.k, {
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
                (0, r.jsx)(c.xu, {
                  bg: "blackAlpha.700",
                  pos: "fixed",
                  top: "0",
                  left: "0",
                  minH: "full",
                  minW: "full",
                  zIndex: -10,
                }),
                (0, r.jsx)(a.Z, {}),
                (0, r.jsx)(b, {}),
                (0, r.jsx)(j.Z, {}),
              ],
            }),
          ],
        });
      var O = v;
    },
    7663: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                n,
                r,
                o = (e.exports = {});
              function i() {
                throw Error("setTimeout has not been defined");
              }
              function s() {
                throw Error("clearTimeout has not been defined");
              }
              function a(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === i || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (r) {
                  try {
                    return t.call(null, e, 0);
                  } catch (n) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = "function" == typeof setTimeout ? setTimeout : i;
                } catch (e) {
                  t = i;
                }
                try {
                  n = "function" == typeof clearTimeout ? clearTimeout : s;
                } catch (r) {
                  n = s;
                }
              })();
              var c = [],
                l = !1,
                u = -1;
              function f() {
                l &&
                  r &&
                  ((l = !1),
                  r.length ? (c = r.concat(c)) : (u = -1),
                  c.length && h());
              }
              function h() {
                if (!l) {
                  var e = a(f);
                  l = !0;
                  for (var t = c.length; t; ) {
                    for (r = c, c = []; ++u < t; ) r && r[u].run();
                    (u = -1), (t = c.length);
                  }
                  (r = null),
                    (l = !1),
                    (function (e) {
                      if (n === clearTimeout) return clearTimeout(e);
                      if ((n === s || !n) && clearTimeout)
                        return (n = clearTimeout), clearTimeout(e);
                      try {
                        n(e);
                      } catch (r) {
                        try {
                          return n.call(null, e);
                        } catch (t) {
                          return n.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function m(e, t) {
                (this.fun = e), (this.array = t);
              }
              function d() {}
              (o.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                c.push(new m(e, t)), 1 !== c.length || l || a(h);
              }),
                (m.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (o.title = "browser"),
                (o.browser = !0),
                (o.env = {}),
                (o.argv = []),
                (o.version = ""),
                (o.versions = {}),
                (o.on = d),
                (o.addListener = d),
                (o.once = d),
                (o.off = d),
                (o.removeListener = d),
                (o.removeAllListeners = d),
                (o.emit = d),
                (o.prependListener = d),
                (o.prependOnceListener = d),
                (o.listeners = function (e) {
                  return [];
                }),
                (o.binding = function (e) {
                  throw Error("process.binding is not supported");
                }),
                (o.cwd = function () {
                  return "/";
                }),
                (o.chdir = function (e) {
                  throw Error("process.chdir is not supported");
                }),
                (o.umask = function () {
                  return 0;
                });
            },
          },
          n = {};
        function r(e) {
          var o = n[e];
          if (void 0 !== o) return o.exports;
          var i = (n[e] = { exports: {} }),
            s = !0;
          try {
            t[e](i, i.exports, r), (s = !1);
          } finally {
            s && delete n[e];
          }
          return i.exports;
        }
        r.ab = "//";
        var o = r(229);
        e.exports = o;
      })();
    },
  },
  function (e) {
    e.O(0, [445, 553, 774, 888, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
