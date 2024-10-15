(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [521],
  {
    9212: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/about",
        function () {
          return n(366);
        },
      ]);
    },
    2808: function (e, t, n) {
      "use strict";
      var r = n(5893),
        i = n(3100),
        s = n(6979),
        o = n(7651),
        a = n(8911);
      n(7294);
      var l = n(2298);
      let c = (e) => {
        let t = new Date();
        return (0, r.jsx)(i.xu, {
          as: "footer",
          w: "100%",
          py: "12",
          children: (0, r.jsx)(s.W, {
            maxW: "container.xl",
            color: "brand.grayer",
            px: { base: "6", xl: "0" },
            children: (0, r.jsxs)(o.g, {
              spacing: "6",
              children: [
                (0, r.jsx)(l.Z, { variant: "FOOTER" }),
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
      t.Z = c;
    },
    4237: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var r = n(5893),
        i = n(3100),
        s = n(6979),
        o = n(204),
        a = n(3838);
      n(7294);
      var l = n(4609);
      let c = (e) =>
        (0, r.jsx)(o.k, {
          justify: "center",
          align: "center",
          children: (0, r.jsx)(l.E, { src: "/osoc.png", w: "12" }),
        });
      var h = n(4641),
        d = n(8911),
        x = n(1664),
        f = n.n(x);
      let u = (e) =>
        (0, r.jsxs)(h.U, {
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
              as: f(),
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
              children: (0, r.jsx)(d.x, { children: "Events" }),
            }),
            (0, r.jsx)(a.r, {
              as: f(),
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
              children: (0, r.jsx)(d.x, { children: "Team" }),
            }),
            (0, r.jsx)(a.r, {
              as: f(),
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
              children: (0, r.jsx)(d.x, { children: "About" }),
            }),
            (0, r.jsx)(a.r, {
              as: f(),
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
              children: (0, r.jsx)(d.x, { children: "Contact" }),
            }),
          ],
        });
      var m = n(2298);
      let g = (e) =>
        (0, r.jsx)(i.xu, {
          as: "header",
          w: "100%",
          color: "brand.lightest",
          zIndex: 2,
          children: (0, r.jsx)(s.W, {
            maxW: "container.xl",
            children: (0, r.jsxs)(o.k, {
              h: { base: "40", md: "20" },
              align: "center",
              justify: { base: "space-evenly", md: "space-between" },
              direction: { base: "column", md: "row" },
              children: [
                (0, r.jsx)(a.r, {
                  as: f(),
                  href: "/",
                  "aria-label": "OSOC Homepage",
                  children: (0, r.jsx)(c, {}),
                }),
                (0, r.jsx)(u, {}),
                (0, r.jsx)(m.Z, {}),
              ],
            }),
          }),
        });
      var p = g;
    },
    2298: function (e, t, n) {
      "use strict";
      var r = n(5893),
        i = n(4641),
        s = n(3838),
        o = n(6877);
      n(7294);
      var a = n(9583);
      let l = (e) => {
        let { variant: t = "NAV" } = e;
        return (0, r.jsxs)(i.U, {
          spacing: "6",
          fontSize: "xl",
          display:
            "NAV" === t
              ? { base: "none", md: "flex" }
              : { base: "flex", md: "none" },
          children: [
            (0, r.jsx)(s.r, {
              href: "https://www.instagram.com/osoc_nitt/",
              isExternal: !0,
              "aria-label": "OSOC Instagram",
              children: (0, r.jsx)(o.J, { as: a.Zf_ }),
            }),
            (0, r.jsx)(s.r, {
              href: "https://www.facebook.com/groups/633779233333438/",
              isExternal: !0,
              "aria-label": "OSOC Facebook",
              children: (0, r.jsx)(o.J, { as: a.tBk }),
            }),
            (0, r.jsx)(s.r, {
              href: "https://www.linkedin.com/company/open-source-open-community/",
              isExternal: !0,
              "aria-label": "OSOC LinkedIn",
              children: (0, r.jsx)(o.J, { as: a.ltd }),
            }),
            (0, r.jsx)(s.r, {
              href: "https://github.com/osocnitt-dev/",
              isExternal: !0,
              "aria-label": "OSOC GitHub",
              children: (0, r.jsx)(o.J, { as: a.hJX }),
            }),
          ],
        });
      };
      t.Z = l;
    },
    366: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return w;
          },
        });
      var r = n(5893),
        i = n(204),
        s = n(3100);
      n(7294);
      var o = n(6979),
        a = n(7651),
        l = n(8911),
        c = n(7306),
        h = n(4859),
        d = n(6877),
        x = n(4609),
        f = n(6261),
        u = n(5339),
        m = n(2807);
      let g = () =>
        (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(s.xu, {
              id: "1",
              as: "main",
              w: "full",
              mt: { base: "-40", md: "-20" },
              children: (0, r.jsxs)(o.W, {
                minH: "2xl",
                h: "100vh",
                maxW: "container.xl",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "brand.lightest",
                pos: "relative",
                children: [
                  (0, r.jsx)(c.K, {
                    direction: "column",
                    w: "full",
                    spacing: "16",
                    align: "center",
                    justify: "center",
                    children: (0, r.jsxs)(a.g, {
                      spacing: "8",
                      align: "center",
                      children: [
                        (0, r.jsx)(s.xu, {
                          textAlign: "center",
                          children: (0, r.jsx)(l.x, {
                            as: "h1",
                            fontSize: { base: "5xl", sm: "6xl", lg: "72px" },
                            fontFamily: "display",
                            lineHeight: "none",
                            letterSpacing: "widest",
                            children: "OSOC",
                          }),
                        }),
                        (0, r.jsx)(l.x, {
                          fontSize: "md",
                          w: { base: "full", md: "72", lg: "4xl" },
                          fontFamily: "body",
                          fontWeight: "normal",
                          color: "brand.lightest",
                          textAlign: { base: "center", md: "center" },
                          children:
                            "We are an open source community initiated by MCA students of NIT Trichy. We learn, work and share the joys of Open source technologies and wish to contribute to the Open Source Society. We also provide an encouraging environment for development and research on Open source software through collaboration with the open source community, business establishments, and other organizations. The community is expected to be a portal for knowledge & education and to forge relationships with the open source world.",
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsx)(s.xu, {
                    as: h.h,
                    textAlign: "center",
                    bg: "transparent",
                    color: "whiteAlpha.500",
                    _hover: { color: "brand.lightest", bg: "transparent" },
                    _active: { color: "brand.lightest", bg: "transparent" },
                    pos: "absolute",
                    bottom: "50px",
                    zIndex: "5",
                    onClick: () => {
                      f.OK.scrollTo("2", {
                        duration: 800,
                        delay: 0,
                        smooth: "easeInOutQuad",
                      });
                    },
                    children: (0, r.jsx)(d.J, { boxSize: "8", as: u.v }),
                  }),
                ],
              }),
            }),
            (0, r.jsx)(s.xu, {
              id: "2",
              as: "main",
              w: "full",
              children: (0, r.jsxs)(o.W, {
                minH: "2xl",
                h: "100vh",
                maxW: "container.xl",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "brand.lightest",
                pos: "relative",
                children: [
                  (0, r.jsxs)(c.K, {
                    direction: { base: "column", md: "row" },
                    w: "full",
                    spacing: "16",
                    align: "center",
                    justify: "center",
                    children: [
                      (0, r.jsxs)(a.g, {
                        spacing: "8",
                        align: { base: "center", md: "flex-start" },
                        children: [
                          (0, r.jsx)(s.xu, {
                            textAlign: { base: "center", md: "left" },
                            children: (0, r.jsx)(l.x, {
                              as: "h1",
                              fontSize: { base: "5xl", sm: "6xl", lg: "72px" },
                              fontFamily: "display",
                              lineHeight: "none",
                              letterSpacing: "widest",
                              children: "Staff Advisor",
                            }),
                          }),
                          (0, r.jsx)(l.x, {
                            fontSize: "md",
                            w: { base: "full", md: "72", lg: "3xl" },
                            fontFamily: "body",
                            fontWeight: "normal",
                            color: "brand.lightest",
                            textAlign: { base: "center", md: "left" },
                            children:
                              "Dr. Janet serves NIT, Trichy as Assistant Professor in the Department of Computer Applications. She graduated B.Sc. (Physics) with Distinction from Holy Cross College, Trichy affiliated to the Bharathidasan University, Tiruchirappalli, obtained a Master of Computer Applications from Bishop Heber College, with a third rank from Bharathidasan University, Tiruchirappalli. She cleared the National Eligibility Test for Lectureship by UGC in 2001.",
                          }),
                        ],
                      }),
                      (0, r.jsx)(s.xu, {
                        children: (0, r.jsx)(x.E, {
                          src: "/advisor.jpg",
                          filter: "grayscale(100%)",
                          w: "96",
                          _hover: {
                            filter: "grayscale(0%)",
                            transition: "filter 0.25s ease-in-out",
                          },
                          transition: "filter 0.25s ease-in-out",
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)(s.xu, {
                    as: h.h,
                    textAlign: "center",
                    bg: "transparent",
                    color: "whiteAlpha.500",
                    _hover: { color: "brand.lightest", bg: "transparent" },
                    _active: { color: "brand.lightest", bg: "transparent" },
                    pos: "absolute",
                    bottom: "50px",
                    zIndex: "5",
                    onClick: () => {
                      f.OK.scrollTo("3", {
                        duration: 800,
                        delay: 0,
                        smooth: "easeInOutQuad",
                      });
                    },
                    children: (0, r.jsx)(d.J, { boxSize: "8", as: u.v }),
                  }),
                ],
              }),
            }),
            (0, r.jsx)(s.xu, {
              id: "3",
              as: "main",
              w: "full",
              children: (0, r.jsxs)(o.W, {
                minH: "2xl",
                h: "100vh",
                maxW: "container.xl",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "brand.lightest",
                pos: "relative",
                children: [
                  (0, r.jsx)(c.K, {
                    direction: "column",
                    w: "full",
                    spacing: "16",
                    align: "center",
                    justify: "center",
                    children: (0, r.jsxs)(a.g, {
                      spacing: "8",
                      align: "center",
                      children: [
                        (0, r.jsx)(s.xu, {
                          textAlign: "center",
                          children: (0, r.jsx)(l.x, {
                            as: "h1",
                            fontSize: { base: "5xl", sm: "6xl", lg: "72px" },
                            fontFamily: "display",
                            lineHeight: "none",
                            letterSpacing: "widest",
                            children: "Our Vision",
                          }),
                        }),
                        (0, r.jsx)(l.x, {
                          fontSize: "md",
                          w: { base: "full", md: "72", lg: "4xl" },
                          fontFamily: "body",
                          fontWeight: "normal",
                          color: "brand.lightest",
                          textAlign: { base: "center", md: "center" },
                          children:
                            "To use Open source products, spread knowledge and contribute to the Open source society.",
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsx)(s.xu, {
                    as: h.h,
                    textAlign: "center",
                    bg: "transparent",
                    color: "whiteAlpha.500",
                    _hover: { color: "brand.lightest", bg: "transparent" },
                    _active: { color: "brand.lightest", bg: "transparent" },
                    pos: "absolute",
                    bottom: "50px",
                    zIndex: "5",
                    onClick: () => {
                      f.OK.scrollTo("4", {
                        duration: 800,
                        delay: 0,
                        smooth: "easeInOutQuad",
                      });
                    },
                    children: (0, r.jsx)(d.J, { boxSize: "8", as: u.v }),
                  }),
                ],
              }),
            }),
            (0, r.jsx)(s.xu, {
              id: "4",
              as: "main",
              w: "full",
              children: (0, r.jsxs)(o.W, {
                minH: "2xl",
                h: "100vh",
                maxW: "container.xl",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "brand.lightest",
                pos: "relative",
                children: [
                  (0, r.jsx)(c.K, {
                    direction: "column",
                    w: "full",
                    spacing: "16",
                    align: "center",
                    justify: "center",
                    children: (0, r.jsxs)(a.g, {
                      spacing: "8",
                      align: "center",
                      children: [
                        (0, r.jsx)(s.xu, {
                          textAlign: "center",
                          children: (0, r.jsx)(l.x, {
                            as: "h1",
                            fontSize: { base: "5xl", sm: "6xl", lg: "72px" },
                            fontFamily: "display",
                            lineHeight: "none",
                            letterSpacing: "widest",
                            children: "Club Hierarchy",
                          }),
                        }),
                        (0, r.jsx)(l.x, {
                          fontSize: "md",
                          w: { base: "full", md: "72", lg: "4xl" },
                          fontFamily: "body",
                          fontWeight: "normal",
                          color: "brand.lightest",
                          textAlign: { base: "center", md: "center" },
                          children:
                            "Our club has flat structure, and it's open for all who are keen about open source. The club is fortunate to have Mrs. B Janet as our staff advisor.",
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsx)(s.xu, {
                    as: h.h,
                    textAlign: "center",
                    bg: "transparent",
                    color: "whiteAlpha.500",
                    _hover: { color: "brand.lightest", bg: "transparent" },
                    _active: { color: "brand.lightest", bg: "transparent" },
                    pos: "absolute",
                    bottom: "50px",
                    zIndex: "5",
                    onClick: () => {
                      f.NY.scrollToTop();
                    },
                    children: (0, r.jsx)(d.J, { boxSize: "8", as: m.g }),
                  }),
                ],
              }),
            }),
          ],
        });
      var p = n(4237),
        b = n(9008),
        j = n.n(b),
        y = n(2808);
      let v = () =>
        (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(j(), {
              children: (0, r.jsx)("title", { children: "About Us" }),
            }),
            (0, r.jsxs)(i.k, {
              minW: "full",
              flexDir: "column",
              pos: "relative",
              zIndex: 10,
              children: [
                (0, r.jsxs)("video", {
                  autoPlay: !0,
                  muted: !0,
                  loop: !0,
                  style: {
                    objectFit: "cover",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: "100vh",
                    width: "100vw",
                    zIndex: "-10",
                  },
                  children: [
                    (0, r.jsx)("source", {
                      src: "bg.webm",
                      type: "video/webm",
                    }),
                    (0, r.jsx)("source", { src: "bg.mp4", type: "video/mp4" }),
                  ],
                }),
                (0, r.jsx)(s.xu, {
                  bg: "blackAlpha.700",
                  pos: "fixed",
                  top: "0",
                  left: "0",
                  minH: "full",
                  minW: "full",
                  zIndex: -10,
                }),
                (0, r.jsx)(p.Z, {}),
                (0, r.jsx)(g, {}),
                (0, r.jsx)(y.Z, {}),
              ],
            }),
          ],
        });
      var w = v;
    },
  },
  function (e) {
    e.O(0, [445, 553, 666, 774, 888, 179], function () {
      return e((e.s = 9212));
    }),
      (_N_E = e.O());
  },
]);
