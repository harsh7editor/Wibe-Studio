"use strict";
(self.webpackChunkwibe_test = self.webpackChunkwibe_test || []).push([[661], {
    1661: function(n, e, i) {
        i.r(e);
        var t, a, s = i(168), o = i(3821), l = (i(7313),
        i(430)), d = i(4781), r = i(6417), h = d.ZP.div(t || (t = (0,
        s.Z)(["\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  z-index: 6;\n\n  width: 100%;\n  width: fit-content;\n\n  a {\n    width: 100%;\n    display: flex;\n    align-items: flex-end;\n  }\n\n  svg {\n    width: 4rem;\n\n    height: auto;\n    overflow: visible;\n    stroke-linejoin: round;\n    stroke-linecap: round;\n    g {\n      path {\n        stroke: #fff;\n      }\n    }\n  }\n"]))), u = (0,
        d.ZP)(o.E.span)(a || (a = (0,
        s.Z)(["\n  font-size: ", ";\n  color: ", ";\n  padding-bottom: 0.5rem;\n"])), (function(n) {
            return n.theme.fontlg
        }
        ), (function(n) {
            return n.theme.text
        }
        )), c = {
            hidden: {
                opacity: 0,
                pathLength: 0
            },
            visible: {
                opacity: 1,
                pathLength: 1,
                transition: {
                    duration: 2,
                    delay: 3,
                    ease: "easeInOut"
                }
            }
        }, p = {
            hidden: {
                opacity: 0,
                x: -50
            },
            visible: {
                opacity: 1,
                x: -5,
                transition: {
                    duration: 2,
                    delay: 5,
                    ease: "easeInOut"
                }
            }
        };
        e.default = function() {
            return (0,
            r.jsx)(h, {
                children: (0,
                r.jsxs)(l.rU, {
                    to: "/",
                    children: [(0,
                    r.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        enableBackground: "new 0 0 24 24",
                        height: "48px",
                        viewBox: "0 0 24 24",
                        width: "48px",
                        fill: "none",
                        children: (0,
                        r.jsx)("g", {
                            children: (0,
                            r.jsx)(o.E.path, {
                                variants: c,
                                initial: "hidden",
                                animate: "visible",
                                d: "M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
                            })
                        })
                    }), (0,
                    r.jsx)(u, {
                        variants: p,
                        initial: "hidden",
                        animate: "visible",
                        children: "Wibe Studio"
                    })]
                })
            })
        }
    }
}]);
