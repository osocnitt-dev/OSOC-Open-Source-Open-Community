(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [695],
  {
    1442: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/events",
        function () {
          return n(5730);
        },
      ]);
    },
    2808: function (e, t, n) {
      "use strict";
      var i = n(5893),
        s = n(3100),
        r = n(6979),
        a = n(7651),
        o = n(8911);
      n(7294);
      var l = n(2298);
      let c = (e) => {
        let t = new Date();
        return (0, i.jsx)(s.xu, {
          as: "footer",
          w: "100%",
          py: "12",
          children: (0, i.jsx)(r.W, {
            maxW: "container.xl",
            color: "brand.grayer",
            px: { base: "6", xl: "0" },
            children: (0, i.jsxs)(a.g, {
              spacing: "6",
              children: [
                (0, i.jsx)(l.Z, { variant: "FOOTER" }),
                (0, i.jsxs)(o.x, {
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
      var i = n(5893),
        s = n(3100),
        r = n(6979),
        a = n(204),
        o = n(3838);
      n(7294);
      var l = n(4609);
      let c = (e) =>
        (0, i.jsx)(a.k, {
          justify: "center",
          align: "center",
          children: (0, i.jsx)(l.E, { src: "/osoc.png", w: "12" }),
        });
      var d = n(4641),
        h = n(8911),
        m = n(1664),
        f = n.n(m);
      let x = (e) =>
        (0, i.jsxs)(d.U, {
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
            (0, i.jsx)(o.r, {
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
              children: (0, i.jsx)(h.x, { children: "Events" }),
            }),
            (0, i.jsx)(o.r, {
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
              children: (0, i.jsx)(h.x, { children: "Team" }),
            }),
            (0, i.jsx)(o.r, {
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
              children: (0, i.jsx)(h.x, { children: "About" }),
            }),
            (0, i.jsx)(o.r, {
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
              children: (0, i.jsx)(h.x, { children: "Contact" }),
            }),
          ],
        });
      var u = n(2298);
      let g = (e) =>
        (0, i.jsx)(s.xu, {
          as: "header",
          w: "100%",
          color: "brand.lightest",
          zIndex: 2,
          children: (0, i.jsx)(r.W, {
            maxW: "container.xl",
            children: (0, i.jsxs)(a.k, {
              h: { base: "40", md: "20" },
              align: "center",
              justify: { base: "space-evenly", md: "space-between" },
              direction: { base: "column", md: "row" },
              children: [
                (0, i.jsx)(o.r, {
                  as: f(),
                  href: "/",
                  "aria-label": "OSOC Homepage",
                  children: (0, i.jsx)(c, {}),
                }),
                (0, i.jsx)(x, {}),
                (0, i.jsx)(u.Z, {}),
              ],
            }),
          }),
        });
      var p = g;
    },
    2298: function (e, t, n) {
      "use strict";
      var i = n(5893),
        s = n(4641),
        r = n(3838),
        a = n(6877);
      n(7294);
      var o = n(9583);
      let l = (e) => {
        let { variant: t = "NAV" } = e;
        return (0, i.jsxs)(s.U, {
          spacing: "6",
          fontSize: "xl",
          display:
            "NAV" === t
              ? { base: "none", md: "flex" }
              : { base: "flex", md: "none" },
          children: [
            (0, i.jsx)(r.r, {
              href: "https://www.instagram.com/osoc_nitt/",
              isExternal: !0,
              "aria-label": "OSOC Instagram",
              children: (0, i.jsx)(a.J, { as: o.Zf_ }),
            }),
            (0, i.jsx)(r.r, {
              href: "https://www.facebook.com/groups/633779233333438/",
              isExternal: !0,
              "aria-label": "OSOC Facebook",
              children: (0, i.jsx)(a.J, { as: o.tBk }),
            }),
            (0, i.jsx)(r.r, {
              href: "https://www.linkedin.com/company/open-source-open-community/",
              isExternal: !0,
              "aria-label": "OSOC LinkedIn",
              children: (0, i.jsx)(a.J, { as: o.ltd }),
            }),
            (0, i.jsx)(r.r, {
              href: "https://github.com/osocnitt-dev/",
              isExternal: !0,
              "aria-label": "OSOC GitHub",
              children: (0, i.jsx)(a.J, { as: o.hJX }),
            }),
          ],
        });
      };
      t.Z = l;
    },
    5730: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return O;
          },
        });
      var i = n(5893);
      n(7294);
      var s = n(9008),
        r = n.n(s),
        a = n(204),
        o = n(3100),
        l = n(4237),
        c = n(6979),
        d = n(7306),
        h = n(7651),
        m = n(8911),
        f = n(6066);
      n(1548), n(3873);
      let x = (e) => {
        let {
          description: t,
          heading: n,
          variant: s = "LEFT",
          disableImage: r = !1,
          imageUrl: a,
          imageUrls: l = [],
        } = e;
        return (0, i.jsxs)(d.K, {
          w: "full",
          fontFamily: "display",
          fontSize: { base: "4xl", lg: "5xl" },
          lineHeight: "none",
          py: { base: "6", md: "none" },
          align: "center",
          justify: {
            base: "center",
            md: "RIGHT" === s ? "flex-end" : "flex-start",
          },
          spacing: "6",
          direction: {
            base: "column",
            md: "RIGHT" === s ? "row-reverse" : "row",
          },
          children: [
            (0, i.jsxs)(h.g, {
              justify: "center",
              alignItems: { base: "center", md: "flex-start" },
              spacing: "6",
              textAlign: { base: "center", md: "left" },
              children: [
                (0, i.jsx)(m.x, {
                  as: "h3",
                  letterSpacing: "wider",
                  children: n,
                }),
                (0, i.jsx)(m.x, {
                  fontWeight: "medium",
                  fontFamily: "body",
                  color: "brand.lightest",
                  fontSize: "md",
                  lineHeight: "tall",
                  children: t,
                }),
              ],
            }),
            !r &&
              (0, i.jsx)(o.xu, {
                w: { base: "full", md: "md" },
                h: "md",
                flexShrink: 0,
                children:
                  l.length > 0
                    ? (0, i.jsx)(f.Z, {
                        dots: !0,
                        infinite: !0,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: !0,
                        autoplaySpeed: 3e3,
                        arrows: !1,
                        children: l.map((e, t) =>
                          (0, i.jsx)(
                            o.xu,
                            {
                              h: "md",
                              bgImage: "url(".concat(e, ")"),
                              bgSize: "cover",
                              bgPos: "center",
                            },
                            t
                          )
                        ),
                      })
                    : (0, i.jsx)(o.xu, {
                        h: "md",
                        bgImage: "url(".concat(a, ")"),
                        bgSize: "cover",
                        bgPos: "center",
                      }),
              }),
          ],
        });
      };
      var u = n(4641),
        g = n(6393),
        p = n(965),
        b = n(719);
      let j = (e) => {
          let { slides: t } = e;
          return (0, i.jsx)(b.tq, {
            modules: [p.W_, p.pt],
            navigation: !0,
            autoplay: { disableOnInteraction: !0, stopOnLastSlide: !1 },
            children: t.map((e) =>
              (0, i.jsx)(
                b.o5,
                {
                  children: (0, i.jsxs)(d.K, {
                    direction: { base: "column-reverse", md: "row" },
                    w: "full",
                    align: "center",
                    justify: "space-around",
                    p: "12",
                    children: [
                      (0, i.jsxs)(h.g, {
                        spacing: "8",
                        align: { base: "center", md: "flex-start" },
                        children: [
                          (0, i.jsx)(o.xu, {
                            textAlign: { base: "center", md: "left" },
                            mt: { base: "8", md: "0" },
                            children: (0, i.jsx)(u.U, {
                              align: "center",
                              justify: { base: "center", md: "right" },
                              children: (0, i.jsx)(m.x, {
                                as: "h1",
                                fontSize: {
                                  base: "lg",
                                  sm: "2xl",
                                  md: "3xl",
                                  lg: "4xl",
                                },
                                fontFamily: "oswald",
                                textTransform: "uppercase",
                                children: e.title,
                              }),
                            }),
                          }),
                          (0, i.jsx)(m.x, {
                            fontSize: { base: "sm", sm: "md" },
                            lineHeight: "6",
                            w: { base: "full", md: "72", lg: "96" },
                            fontFamily: "body",
                            fontWeight: "normal",
                            color: "brand.gray",
                            textAlign: { base: "center", md: "left" },
                            children: e.description,
                          }),
                        ],
                      }),
                      (0, i.jsx)(o.xu, {
                        boxSize: { base: "230px", md: "sm", lg: "md" },
                        pos: "relative",
                        children: (0, i.jsx)(g.o, {
                          w: "full",
                          h: "full",
                          mt: "6",
                          children: (0, i.jsx)(o.xu, {
                            w: "full",
                            h: "full",
                            bgImage: e.imageUrl
                              ? "url(".concat(e.imageUrl, ")")
                              : "none",
                            bgSize: "cover",
                            bgPosition: "center",
                          }),
                        }),
                      }),
                    ],
                  }),
                },
                e.id
              )
            ),
          });
        },
        w = () =>
          (0, i.jsx)(o.xu, {
            as: "main",
            w: "full",
            mt: "10",
            children: (0, i.jsxs)(c.W, {
              maxW: "container.xl",
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              flexDir: "column",
              color: "brand.lightest",
              userSelect: "none",
              children: [
                (0, i.jsx)(x, {
                  heading: "Technofania",
                  description:
                    "Technofania, the perfect fusion of masterminds, proves its excellence every year with innovation and proactive topping to fresh young minds. This event took its birth in 2017. It is an inter-departmental Technical symposium organized by TEAM OSOC every year. It is a two-day extravaganza event in which many technical and non-technical events are organized for participants.",
                  imageUrls: [
                    "/events/closing.jpg",
                    "/events/agamya.jpg",
                    "/events/team.jpg",
                    "/events/groupphoto.jpg",
                  ],
                }),
                (0, i.jsx)(x, {
                  variant: "RIGHT",
                  heading: "Workshops",
                  description:
                    "This event possesses a workshop on Web Extensions which will: Let you gain the knowledge of development of add-ons. Creates a new dimension of work for all. Provides you with knowledge of how web extensions work. About Open Source. How to work on Linux (Ubuntu, Mint, Kali). Basic knowledge of Linux. Basic commands used in Linux. How Linux is better than Windows.",
                  imageUrls: [
                    "/events/w1.jpg",
                    "/events/w2.jpg",
                    "/events/w3.jpg",
                    "/events/w4.jpeg",
                  ],
                }),
                (0, i.jsx)(x, {
                  disableImage: !0,
                  heading: "Projects In PRAGYAN",
                  description:
                    "Nowadays, innovative and impactful projects are an essential requirement for every student, so if anyone wants to work on real-time projects, we are here for you all. Yes, OSOC gives you all a platform where you can build a project in any domain you want. Every year, 4-6 projects are made and selected for SANGAM, PRAGYAN HARDWARE HACKATHON to present them in exhibition. In 2019, we worked on 4 projects and 2 of them, MEDICAL ATM and RECALL THE FORGOTTEN SYSTEM, were selected for the final round.",
                }),
                (0, i.jsx)(o.xu, {
                  w: "full",
                  children: (0, i.jsx)(j, {
                    slides: [
                      {
                        id: "1",
                        title: "Medical ATM",
                        description:
                          "Medical ATM is a machine which provides medicine service to customers 24/7. This project work includes a mechanism that works with the help of Arduino to provide the medicines to the customers. It also includes an Android application through which users can use the facilities of Medical ATM. It was live-demonstrated in SANGAM'19, PRAGYAN HARDWARE HACKATHON",
                        imageUrl: "/medicalatm.jpeg",
                      },
                      {
                        id: "2",
                        title: "Smart Helmet",
                        description:
                          "Smart Helmet is a smart device which will be used to send SOS messages in case of bike accidents. It will take readings of the impact on the helmet at the time of the accident. Will trigger an SMS to emergency contacts and nearby hospitals.",
                        imageUrl: "/smarthelmet.jpeg",
                      },
                      {
                        id: "3",
                        title: "RECALL THE FORGOTTEN",
                        description:
                          "It is a system which provides us with a way to look for the items that we forget in day-to-day use. For example, Wallet, keys, etc.",
                        imageUrl: "/recall.jpeg",
                      },
                    ],
                  }),
                }),
              ],
            }),
          });
      var v = n(2808);
      let y = () =>
        (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(r(), {
              children: (0, i.jsx)("title", { children: "Events | OSOC" }),
            }),
            (0, i.jsxs)(a.k, {
              minW: "full",
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
                (0, i.jsx)(o.xu, {
                  bg: "blackAlpha.700",
                  pos: "fixed",
                  top: "0",
                  left: "0",
                  minH: "full",
                  minW: "full",
                  zIndex: -10,
                }),
                (0, i.jsx)(l.Z, {}),
                (0, i.jsx)(w, {}),
                (0, i.jsx)(v.Z, {}),
              ],
            }),
          ],
        });
      var O = y;
    },
  },
  function (e) {
    e.O(0, [445, 553, 41, 774, 888, 179], function () {
      return e((e.s = 1442));
    }),
      (_N_E = e.O());
  },
]);
