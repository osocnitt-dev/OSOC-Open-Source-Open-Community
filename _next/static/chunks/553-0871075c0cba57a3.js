(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [553],
  {
    227: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = function (e, t, r, n) {
          return !1;
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    1551: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = r(2648).Z,
        o = r(7273).Z,
        l = n(r(7294)),
        a = r(1003),
        i = r(7795),
        u = r(4465),
        c = r(2692),
        s = r(8245),
        f = r(9246),
        d = r(227),
        m = r(3468);
      let p = new Set();
      function y(e, t, r, n) {
        if (a.isLocalURL(t)) {
          if (!n.bypassPrefetchedCheck) {
            let o =
                void 0 !== n.locale
                  ? n.locale
                  : "locale" in e
                  ? e.locale
                  : void 0,
              l = t + "%" + r + "%" + o;
            if (p.has(l)) return;
            p.add(l);
          }
          Promise.resolve(e.prefetch(t, r, n)).catch((e) => {});
        }
      }
      function g(e) {
        return "string" == typeof e ? e : i.formatUrl(e);
      }
      let h = l.default.forwardRef(function (e, t) {
        let r, n;
        let {
            href: i,
            as: p,
            children: h,
            prefetch: v,
            passHref: x,
            replace: b,
            shallow: _,
            scroll: k,
            locale: j,
            onClick: E,
            onMouseEnter: O,
            onTouchStart: C,
            legacyBehavior: N = !1,
          } = e,
          w = o(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (r = h),
          N &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = l.default.createElement("a", null, r));
        let L = !1 !== v,
          M = l.default.useContext(c.RouterContext),
          S = l.default.useContext(s.AppRouterContext),
          P = null != M ? M : S,
          I = !M,
          { href: T, as: W } = l.default.useMemo(() => {
            if (!M) {
              let e = g(i);
              return { href: e, as: p ? g(p) : e };
            }
            let [t, r] = a.resolveHref(M, i, !0);
            return { href: t, as: p ? a.resolveHref(M, p) : r || t };
          }, [M, i, p]),
          B = l.default.useRef(T),
          G = l.default.useRef(W);
        N && (n = l.default.Children.only(r));
        let D = N ? n && "object" == typeof n && n.ref : t,
          [R, A, K] = f.useIntersection({ rootMargin: "200px" }),
          z = l.default.useCallback(
            (e) => {
              (G.current !== W || B.current !== T) &&
                (K(), (G.current = W), (B.current = T)),
                R(e),
                D &&
                  ("function" == typeof D
                    ? D(e)
                    : "object" == typeof D && (D.current = e));
            },
            [W, D, T, K, R]
          );
        l.default.useEffect(() => {
          P && A && L && y(P, T, W, { locale: j });
        }, [W, T, A, j, L, null == M ? void 0 : M.locale, P]);
        let q = {
          ref: z,
          onClick(e) {
            N || "function" != typeof E || E(e),
              N &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(e),
              P &&
                !e.defaultPrevented &&
                (function (e, t, r, n, o, i, u, c, s, f) {
                  let { nodeName: d } = e.currentTarget,
                    m = "A" === d.toUpperCase();
                  if (
                    m &&
                    ((function (e) {
                      let { target: t } = e.currentTarget;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      !a.isLocalURL(r))
                  )
                    return;
                  e.preventDefault();
                  let p = () => {
                    "beforePopState" in t
                      ? t[o ? "replace" : "push"](r, n, {
                          shallow: i,
                          locale: c,
                          scroll: u,
                        })
                      : t[o ? "replace" : "push"](n || r, {
                          forceOptimisticNavigation: !f,
                        });
                  };
                  s ? l.default.startTransition(p) : p();
                })(e, P, T, W, b, _, k, j, I, L);
          },
          onMouseEnter(e) {
            N || "function" != typeof O || O(e),
              N &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              P &&
                (L || !I) &&
                y(P, T, W, {
                  locale: j,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
          onTouchStart(e) {
            N || "function" != typeof C || C(e),
              N &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              P &&
                (L || !I) &&
                y(P, T, W, {
                  locale: j,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
        };
        if (!N || x || ("a" === n.type && !("href" in n.props))) {
          let U = void 0 !== j ? j : null == M ? void 0 : M.locale,
            F =
              (null == M ? void 0 : M.isLocaleDomain) &&
              d.getDomainLocale(
                W,
                U,
                null == M ? void 0 : M.locales,
                null == M ? void 0 : M.domainLocales
              );
          q.href =
            F ||
            m.addBasePath(
              u.addLocale(W, U, null == M ? void 0 : M.defaultLocale)
            );
        }
        return N
          ? l.default.cloneElement(n, q)
          : l.default.createElement("a", Object.assign({}, w, q), r);
      });
      (t.default = h),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    9246: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          let { rootRef: t, rootMargin: r, disabled: u } = e,
            c = u || !l,
            [s, f] = n.useState(!1),
            [d, m] = n.useState(null);
          n.useEffect(() => {
            if (l) {
              if (!c && !s && d && d.tagName) {
                let e = (function (e, t, r) {
                  let {
                    id: n,
                    observer: o,
                    elements: l,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      n = i.find(
                        (e) => e.root === r.root && e.margin === r.margin
                      );
                    if (n && (t = a.get(n))) return t;
                    let o = new Map(),
                      l = new IntersectionObserver((e) => {
                        e.forEach((e) => {
                          let t = o.get(e.target),
                            r = e.isIntersecting || e.intersectionRatio > 0;
                          t && r && t(r);
                        });
                      }, e);
                    return (
                      (t = { id: r, observer: l, elements: o }),
                      i.push(r),
                      a.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    l.set(e, t),
                    o.observe(e),
                    function () {
                      if ((l.delete(e), o.unobserve(e), 0 === l.size)) {
                        o.disconnect(), a.delete(n);
                        let t = i.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin
                        );
                        t > -1 && i.splice(t, 1);
                      }
                    }
                  );
                })(d, (e) => e && f(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r,
                });
                return e;
              }
            } else if (!s) {
              let n = o.requestIdleCallback(() => f(!0));
              return () => o.cancelIdleCallback(n);
            }
          }, [d, c, r, t, s]);
          let p = n.useCallback(() => {
            f(!1);
          }, []);
          return [m, s, p];
        });
      var n = r(7294),
        o = r(4686);
      let l = "function" == typeof IntersectionObserver,
        a = new Map(),
        i = [];
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1664: function (e, t, r) {
      e.exports = r(1551);
    },
    8357: function (e, t, r) {
      "use strict";
      r.d(t, {
        w_: function () {
          return u;
        },
      });
      var n = r(7294),
        o = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        l = n.createContext && n.createContext(o),
        a = function () {
          return (a =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
        i = function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              0 > t.indexOf(n) &&
              (r[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var o = 0, n = Object.getOwnPropertySymbols(e);
              o < n.length;
              o++
            )
              0 > t.indexOf(n[o]) &&
                Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                (r[n[o]] = e[n[o]]);
          return r;
        };
      function u(e) {
        return function (t) {
          return n.createElement(
            c,
            a({ attr: a({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map(function (t, r) {
                  return n.createElement(
                    t.tag,
                    a({ key: r }, t.attr),
                    e(t.child)
                  );
                })
              );
            })(e.child)
          );
        };
      }
      function c(e) {
        var t = function (t) {
          var r,
            o = e.attr,
            l = e.size,
            u = e.title,
            c = i(e, ["attr", "size", "title"]),
            s = l || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            n.createElement(
              "svg",
              a(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                o,
                c,
                {
                  className: r,
                  style: a(a({ color: e.color || t.color }, t.style), e.style),
                  height: s,
                  width: s,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              u && n.createElement("title", null, u),
              e.children
            )
          );
        };
        return void 0 !== l
          ? n.createElement(l.Consumer, null, function (e) {
              return t(e);
            })
          : t(o);
      }
    },
    3951: function (e, t, r) {
      "use strict";
      r.d(t, {
        AV: function () {
          return o;
        },
        XQ: function () {
          return l;
        },
        Yq: function () {
          return a;
        },
      });
      var n = r(5432),
        o = Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);
      function l(e, t) {
        return Array.isArray(e)
          ? e.map((e) => (null === e ? null : t(e)))
          : (0, n.Kn)(e)
          ? Object.keys(e).reduce((r, n) => ((r[n] = t(e[n])), r), {})
          : null != e
          ? t(e)
          : null;
      }
      function a(e, t = o) {
        let r = {};
        return (
          e.forEach((e, n) => {
            let o = t[n];
            null != e && (r[o] = e);
          }),
          r
        );
      }
    },
    4609: function (e, t, r) {
      "use strict";
      r.d(t, {
        E: function () {
          return s;
        },
      });
      var n = r(5059),
        o = r(5893),
        l = (0, n.G)(function (e, t) {
          let { htmlWidth: r, htmlHeight: n, alt: l, ...a } = e;
          return (0,
          o.jsx)("img", { width: r, height: n, ref: t, alt: l, ...a });
        });
      l.displayName = "NativeImage";
      var a = r(6245),
        i = r(7294),
        u = (e, t) =>
          ("loaded" !== e && "beforeLoadOrError" === t) ||
          ("failed" === e && "onError" === t),
        c = r(8611),
        s = (0, n.G)(function (e, t) {
          let {
              fallbackSrc: r,
              fallback: n,
              src: s,
              srcSet: f,
              align: d,
              fit: m,
              loading: p,
              ignoreFallback: y,
              crossOrigin: g,
              fallbackStrategy: h = "beforeLoadOrError",
              referrerPolicy: v,
              ...x
            } = e,
            b = null != p || y || !(void 0 !== r || void 0 !== n),
            _ = (function (e) {
              let {
                  loading: t,
                  src: r,
                  srcSet: n,
                  onLoad: o,
                  onError: l,
                  crossOrigin: u,
                  sizes: c,
                  ignoreFallback: s,
                } = e,
                [f, d] = (0, i.useState)("pending");
              (0, i.useEffect)(() => {
                d(r ? "loading" : "pending");
              }, [r]);
              let m = (0, i.useRef)(),
                p = (0, i.useCallback)(() => {
                  if (!r) return;
                  y();
                  let e = new Image();
                  (e.src = r),
                    u && (e.crossOrigin = u),
                    n && (e.srcset = n),
                    c && (e.sizes = c),
                    t && (e.loading = t),
                    (e.onload = (e) => {
                      y(), d("loaded"), null == o || o(e);
                    }),
                    (e.onerror = (e) => {
                      y(), d("failed"), null == l || l(e);
                    }),
                    (m.current = e);
                }, [r, u, n, c, o, l, t]),
                y = () => {
                  m.current &&
                    ((m.current.onload = null),
                    (m.current.onerror = null),
                    (m.current = null));
                };
              return (
                (0, a.G)(() => {
                  if (!s)
                    return (
                      "loading" === f && p(),
                      () => {
                        y();
                      }
                    );
                }, [f, p, s]),
                s ? "loaded" : f
              );
            })({ ...e, ignoreFallback: b }),
            k = u(_, h),
            j = {
              ref: t,
              objectFit: m,
              objectPosition: d,
              ...(b
                ? x
                : (function (e, t = []) {
                    let r = Object.assign({}, e);
                    for (let n of t) n in r && delete r[n];
                    return r;
                  })(x, ["onError", "onLoad"])),
            };
          return k
            ? n ||
                (0, o.jsx)(c.m.img, {
                  as: l,
                  className: "chakra-image__placeholder",
                  src: r,
                  ...j,
                })
            : (0, o.jsx)(c.m.img, {
                as: l,
                src: s,
                srcSet: f,
                crossOrigin: g,
                loading: p,
                referrerPolicy: v,
                className: "chakra-image",
                ...j,
              });
        });
      s.displayName = "Image";
    },
    4641: function (e, t, r) {
      "use strict";
      r.d(t, {
        U: function () {
          return a;
        },
      });
      var n = r(7306),
        o = r(5059),
        l = r(5893),
        a = (0, o.G)((e, t) =>
          (0, l.jsx)(n.K, { align: "center", ...e, direction: "row", ref: t })
        );
      a.displayName = "HStack";
    },
    204: function (e, t, r) {
      "use strict";
      r.d(t, {
        k: function () {
          return a;
        },
      });
      var n = r(5059),
        o = r(8611),
        l = r(5893),
        a = (0, n.G)(function (e, t) {
          let {
            direction: r,
            align: n,
            justify: a,
            wrap: i,
            basis: u,
            grow: c,
            shrink: s,
            ...f
          } = e;
          return (0,
          l.jsx)(o.m.div, { ref: t, __css: { display: "flex", flexDirection: r, alignItems: n, justifyContent: a, flexWrap: i, flexBasis: u, flexGrow: c, flexShrink: s }, ...f });
        });
      a.displayName = "Flex";
    },
    7651: function (e, t, r) {
      "use strict";
      r.d(t, {
        g: function () {
          return a;
        },
      });
      var n = r(7306),
        o = r(5059),
        l = r(5893),
        a = (0, o.G)((e, t) =>
          (0, l.jsx)(n.K, {
            align: "center",
            ...e,
            direction: "column",
            ref: t,
          })
        );
      a.displayName = "VStack";
    },
    7306: function (e, t, r) {
      "use strict";
      r.d(t, {
        K: function () {
          return f;
        },
      });
      var n = r(8611),
        o = r(5893),
        l = (e) =>
          (0, o.jsx)(n.m.div, {
            className: "chakra-stack__item",
            ...e,
            __css: {
              display: "inline-block",
              flex: "0 0 auto",
              minWidth: 0,
              ...e.__css,
            },
          });
      l.displayName = "StackItem";
      var a = r(3951),
        i = "& > *:not(style) ~ *:not(style)",
        u = r(5059),
        c = r(5432),
        s = r(7294),
        f = (0, u.G)((e, t) => {
          let {
              isInline: r,
              direction: u,
              align: f,
              justify: d,
              spacing: m = "0.5rem",
              wrap: p,
              children: y,
              divider: g,
              className: h,
              shouldWrapChildren: v,
              ...x
            } = e,
            b = r ? "row" : null != u ? u : "column",
            _ = (0, s.useMemo)(
              () =>
                (function (e) {
                  let { spacing: t, direction: r } = e,
                    n = {
                      column: {
                        marginTop: t,
                        marginEnd: 0,
                        marginBottom: 0,
                        marginStart: 0,
                      },
                      row: {
                        marginTop: 0,
                        marginEnd: 0,
                        marginBottom: 0,
                        marginStart: t,
                      },
                      "column-reverse": {
                        marginTop: 0,
                        marginEnd: 0,
                        marginBottom: t,
                        marginStart: 0,
                      },
                      "row-reverse": {
                        marginTop: 0,
                        marginEnd: t,
                        marginBottom: 0,
                        marginStart: 0,
                      },
                    };
                  return { flexDirection: r, [i]: (0, a.XQ)(r, (e) => n[e]) };
                })({ direction: b, spacing: m }),
              [b, m]
            ),
            k = (0, s.useMemo)(
              () =>
                (function (e) {
                  let { spacing: t, direction: r } = e,
                    n = {
                      column: {
                        my: t,
                        mx: 0,
                        borderLeftWidth: 0,
                        borderBottomWidth: "1px",
                      },
                      "column-reverse": {
                        my: t,
                        mx: 0,
                        borderLeftWidth: 0,
                        borderBottomWidth: "1px",
                      },
                      row: {
                        mx: t,
                        my: 0,
                        borderLeftWidth: "1px",
                        borderBottomWidth: 0,
                      },
                      "row-reverse": {
                        mx: t,
                        my: 0,
                        borderLeftWidth: "1px",
                        borderBottomWidth: 0,
                      },
                    };
                  return { "&": (0, a.XQ)(r, (e) => n[e]) };
                })({ spacing: m, direction: b }),
              [m, b]
            ),
            j = !!g,
            E = !v && !j,
            O = (0, s.useMemo)(() => {
              let e = s.Children.toArray(y).filter((e) =>
                (0, s.isValidElement)(e)
              );
              return E
                ? e
                : e.map((t, r) => {
                    let n = void 0 !== t.key ? t.key : r,
                      a = r + 1 === e.length,
                      i = (0, o.jsx)(l, { children: t }, n),
                      u = v ? i : t;
                    if (!j) return u;
                    let c = (0, s.cloneElement)(g, { __css: k });
                    return (0, o.jsxs)(
                      s.Fragment,
                      { children: [u, a ? null : c] },
                      n
                    );
                  });
            }, [g, k, j, E, v, y]),
            C = (0, c.cx)("chakra-stack", h);
          return (0, o.jsx)(n.m.div, {
            ref: t,
            display: "flex",
            alignItems: f,
            justifyContent: d,
            flexDirection: _.flexDirection,
            flexWrap: p,
            className: C,
            __css: j ? {} : { [i]: _[i] },
            ...x,
            children: O,
          });
        });
      f.displayName = "Stack";
    },
    8911: function (e, t, r) {
      "use strict";
      r.d(t, {
        x: function () {
          return s;
        },
      });
      var n = r(5059),
        o = r(4662),
        l = r(7798),
        a = r(8611),
        i = r(5432),
        u = r(888),
        c = r(5893),
        s = (0, n.G)(function (e, t) {
          let r = (0, o.mq)("Text", e),
            {
              className: n,
              align: s,
              decoration: f,
              casing: d,
              ...m
            } = (0, l.Lr)(e),
            p = (0, u.oA)({
              textAlign: e.align,
              textDecoration: e.decoration,
              textTransform: e.casing,
            });
          return (0,
          c.jsx)(a.m.p, { ref: t, className: (0, i.cx)("chakra-text", e.className), ...p, ...m, __css: r });
        });
      s.displayName = "Text";
    },
    6979: function (e, t, r) {
      "use strict";
      r.d(t, {
        W: function () {
          return c;
        },
      });
      var n = r(5059),
        o = r(7798),
        l = r(4662),
        a = r(8611),
        i = r(5432),
        u = r(5893),
        c = (0, n.G)(function (e, t) {
          let { className: r, centerContent: n, ...c } = (0, o.Lr)(e),
            s = (0, l.mq)("Container", e);
          return (0,
          u.jsx)(a.m.div, { ref: t, className: (0, i.cx)("chakra-container", r), ...c, __css: { ...s, ...(n && { display: "flex", flexDirection: "column", alignItems: "center" }) } });
        });
      c.displayName = "Container";
    },
    3838: function (e, t, r) {
      "use strict";
      r.d(t, {
        r: function () {
          return c;
        },
      });
      var n = r(5059),
        o = r(4662),
        l = r(7798),
        a = r(8611),
        i = r(5432),
        u = r(5893),
        c = (0, n.G)(function (e, t) {
          let r = (0, o.mq)("Link", e),
            { className: n, isExternal: c, ...s } = (0, l.Lr)(e);
          return (0,
          u.jsx)(a.m.a, { target: c ? "_blank" : void 0, rel: c ? "noopener" : void 0, ref: t, className: (0, i.cx)("chakra-link", n), ...s, __css: r });
        });
      c.displayName = "Link";
    },
  },
]);
