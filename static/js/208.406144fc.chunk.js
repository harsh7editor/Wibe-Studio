"use strict";
(self.webpackChunkwibe_test = self.webpackChunkwibe_test || []).push([[208], {
    9208: function(n, e, t) {
        t.r(e);
        var i, r, o, a, l = t(885), c = t(168), s = t(3821), d = t(7313), u = t(2634), h = t(430), m = t(4781), f = t(6417), p = (0,
        m.ZP)(s.E.div)(i || (i = (0,
        c.Z)(["\n  position: absolute;\n  /* left: 50%; */\n  top: ", ";\n  transition: all 0.3s ease;\n  /* transform: translateX(-50%); */\n  z-index: 6;\n  width: 100vw;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  \n  @media (max-width: 40em) {\n    top: ", ";\n\n  }\n"])), (function(n) {
            return n.click ? "0" : "-".concat(n.theme.navHeight)
        }
        ), (function(n) {
            return n.click ? "0" : "calc(-50vh - 4rem)"
        }
        )), x = m.ZP.li(r || (r = (0,
        c.Z)(["\n  background-color: ", ";\n  color: ", ";\n  width: 15rem;\n  height: 2.5rem;\n\n  border: none;\n  outline: none;\n\n  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);\n\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n\n  font-size: ", ";\n  font-weight: 600;\n\n  /* border-end-start-radius: 50%; */\n\n  /* border-end-end-radius: 50%; */\n\n  cursor: pointer;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  transition: all 0.3s ease;\n\n  @media (max-width: 40em) {\n    width: 10rem;\n    height: 2rem;\n\n  }\n"])), (function(n) {
            return "rgba(".concat(n.theme.textRgba, ",0.7)")
        }
        ), (function(n) {
            return n.theme.body
        }
        ), (function(n) {
            return n.theme.fontmd
        }
        )), g = (0,
        m.ZP)(s.E.ul)(o || (o = (0,
        c.Z)(["\n  position: relative;\n  height: ", ";\n  background-color: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  list-style: none;\n\n  width: 100%;\n  padding: 0 10rem;\n\n  @media (max-width: 40em) {\n    flex-direction:column;\n    padding:2rem 0;\n    height: 50vh;\n  }\n"])), (function(n) {
            return n.theme.navHeight
        }
        ), (function(n) {
            return n.theme.body
        }
        ), (function(n) {
            return n.theme.text
        }
        )), w = (0,
        m.ZP)(s.E.li)(a || (a = (0,
        c.Z)(["\n  text-transform: uppercase;\n  color: ", ";\n\n  @media (max-width: 40em) {\n    flex-direction:column;\n    padding:0.5rem 0;\n\n  }\n"])), (function(n) {
            return n.theme.text
        }
        ));
        e.default = function() {
            var n = (0,
            d.useState)(!1)
              , e = (0,
            l.Z)(n, 2)
              , t = e[0]
              , i = e[1]
              , r = (0,
            u.lh)().scroll
              , o = function(n) {
                var e = document.querySelector(n);
                i(!t),
                r.scrollTo(e, {
                    offset: "-100",
                    duration: "2000",
                    easing: [.25, 0, .35, 1]
                })
            };
            return (0,
            f.jsx)(p, {
                click: +t,
                initial: {
                    y: "-100%"
                },
                animate: {
                    y: 0
                },
                transition: {
                    duration: 2,
                    delay: 5
                },
                children: (0,
                f.jsxs)(g, {
                    drag: "y",
                    dragConstraints: {
                        top: 0,
                        bottom: 70
                    },
                    dragElastic: .05,
                    dragSnapToOrigin: !0,
                    children: [(0,
                    f.jsx)(x, {
                        onClick: function() {
                            return i(!t)
                        },
                        children: (0,
                        f.jsx)("span", {
                            children: "MENU"
                        })
                    }), (0,
                    f.jsxs)(w, {
                        whileHover: {
                            scale: 1.1,
                            y: -5
                        },
                        whileTap: {
                            scale: .9,
                            y: 0
                        },
                        onClick: function() {
                            return o("#home")
                        },
                        children: [" ", (0,
                        f.jsx)(h.rU, {
                            to: "/",
                            children: "Home"
                        })]
                    }), (0,
                    f.jsx)(w, {
                        whileHover: {
                            scale: 1.1,
                            y: -5
                        },
                        whileTap: {
                            scale: .9,
                            y: 0
                        },
                        onClick: function() {
                            return o(".about")
                        },
                        children: (0,
                        f.jsx)(h.rU, {
                            to: "/",
                            children: "about"
                        })
                    }), (0,
                    f.jsx)(w, {
                        whileHover: {
                            scale: 1.1,
                            y: -5
                        },
                        whileTap: {
                            scale: .9,
                            y: 0
                        },
                        onClick: function() {
                            return o("#shop")
                        },
                        children: (0,
                        f.jsx)(h.rU, {
                            to: "/",
                            children: "shop"
                        })
                    }), (0,
                    f.jsxs)(w, {
                        whileHover: {
                            scale: 1.1,
                            y: -5
                        },
                        whileTap: {
                            scale: .9,
                            y: 0
                        },
                        onClick: function() {
                            return o(".new-arrival")
                        },
                        children: [" ", (0,
                        f.jsx)(h.rU, {
                            to: "/",
                            children: "new arrival"
                        })]
                    })]
                })
            })
        }
    }
}]);
