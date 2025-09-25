(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9580],
  {
    1441: (e, t, s) => {
      "use strict";
      s.d(t, { Fo: () => h, I3: () => u });
      var a,
        i,
        l = s(87397),
        n = s(37200),
        o = s(55557),
        c = s(56886),
        r = s(63963),
        d = s(58646),
        A = s(36241);
      let u = parseInt(
        null !=
          (i =
            null != (a = (0, l.env)("NEXT_PUBLIC_TARGET_CHAIN_ID"))
              ? a
              : "42161")
          ? i
          : ""
      );
      if (isNaN(u))
        throw Error(
          "Invalid NEXT_PUBLIC_TARGET_CHAIN_ID: " +
            (0, l.env)("NEXT_PUBLIC_TARGET_CHAIN_ID")
        );
      let h = { 1: n.r, 0xaa36a7: o.G, 42161: c.D, 421614: r.Y }[u];
      if (!h) throw Error("Сhain ID is not supported: " + u);
      (0, d.Z)({
        chains: [h],
        transports: {
          [n.r.id]: (0, A.L)(),
          [o.G.id]: (0, A.L)(),
          [c.D.id]: (0, A.L)(),
          [r.Y.id]: (0, A.L)(),
        },
      });
    },
    5091: (e) => {
      e.exports = {
        "okx-vs-gate": "quest-popup-okx-vs-gate_okx-vs-gate__ZfvYi",
        "image-container": "quest-popup-okx-vs-gate_image-container__pSwgI",
        main: "quest-popup-okx-vs-gate_main__gzsWJ",
        mini: "quest-popup-okx-vs-gate_mini__OMXuw",
        border: "quest-popup-okx-vs-gate_border__8hjV_",
        "decor-text": "quest-popup-okx-vs-gate_decor-text__sb8J4",
        "text-top": "quest-popup-okx-vs-gate_text-top__EYLHm",
        "text-bottom": "quest-popup-okx-vs-gate_text-bottom__WP1zh",
        mobile: "quest-popup-okx-vs-gate_mobile__Knq71",
        "info-box": "quest-popup-okx-vs-gate_info-box__J6Prb",
        "nodes-sold": "quest-popup-okx-vs-gate_nodes-sold__7A6V_",
        number: "quest-popup-okx-vs-gate_number__8swV7",
        text: "quest-popup-okx-vs-gate_text__AMVqG",
        "nodes-bar": "quest-popup-okx-vs-gate_nodes-bar__mEdMq",
        available: "quest-popup-okx-vs-gate_available__wS2_8",
        sold: "quest-popup-okx-vs-gate_sold__jY8fY",
        "available-text": "quest-popup-okx-vs-gate_available-text__tofxk",
        gate: "quest-popup-okx-vs-gate_gate__EoESa",
        okx: "quest-popup-okx-vs-gate_okx__oOQFO",
        title: "quest-popup-okx-vs-gate_title__arsiB",
        boxes: "quest-popup-okx-vs-gate_boxes__NN3fw",
        box: "quest-popup-okx-vs-gate_box__GvoL3",
        row: "quest-popup-okx-vs-gate_row__zPuzf",
        "arrow-img": "quest-popup-okx-vs-gate_arrow-img__fdUHR",
        desktop: "quest-popup-okx-vs-gate_desktop__YBMUv",
      };
    },
    10167: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => a });
      let a = {
        src: "/_next/static/media/socio-4.e8648ac5.svg",
        height: 24,
        width: 30,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    10346: (e, t, s) => {
      "use strict";
      s.d(t, { LinkRetainingQuery: () => l });
      var a = s(95155),
        i = s(35695);
      function l(e) {
        let { href: t, queryKeys: s, ...l } = e,
          n = (0, i.useSearchParams)(),
          o = null != t ? t : "";
        for (let e of null != s ? s : []) {
          let t = n.get(e);
          t &&
            (o = ""
              .concat(o)
              .concat(o.includes("?") ? "&" : "?")
              .concat(e, "=")
              .concat(t));
        }
        return (0, a.jsx)("a", {
          ...l,
          href: o,
          onClick: (e) => e.stopPropagation(),
          children: l.children,
        });
      }
    },
    10368: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => a });
      let a = {
        src: "/_next/static/media/socio-3.ee508ce3.svg",
        height: 24,
        width: 22,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    19308: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => a });
      let a = {
        src: "/_next/static/media/points.9ee23c61.svg",
        height: 922,
        width: 1936,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    24354: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => a });
      let a = {
        src: "/_next/static/media/socio-1.34094eec.svg",
        height: 20,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    40707: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => a });
      let a = {
        src: "/_next/static/media/mobile-logos.1da7721d.svg",
        height: 46,
        width: 315,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    59434: (e, t, s) => {
      "use strict";
      s.d(t, { cn: () => i });
      var a = s(52596);
      function i() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, a.$)(t);
      }
    },
    71068: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => a });
      let a = {
        src: "/_next/static/media/socio-youtube.a75e9ecc.svg",
        height: 25,
        width: 26,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    73145: (e, t, s) => {
      "use strict";
      s.d(t, { y: () => d });
      var a = s(95155),
        i = s(63439),
        l = s(66766),
        n = s(82925),
        o = s.n(n),
        c = s(1441);
      let r = {
        src: "/_next/static/media/warning.b9a335e9.png",
        height: 128,
        width: 128,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUAAABMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC57EdMAAAACnRSTlNBAFyFJ21kChg4sr4UHQAAAAlwSFlzAAADdgAAA3YBfdWCzAAAADNJREFUeJwdxMERwDAIwDAbKJD9F86legg1QkXpfjtZlSMGQMimYC59rPI0OVu1k8T3iwsWtgDNpqLAbAAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
      function d(e) {
        let { style: t, checkNetwork: s, error: n } = e;
        return (0, a.jsx)(i.pK.Custom, {
          children: (e) => {
            let {
                account: i,
                chain: d,
                openAccountModal: A,
                openChainModal: u,
                openConnectModal: h,
                authenticationStatus: x,
                mounted: g,
              } = e,
              m = g && i && d;
            if (!g) return null;
            let p = s && (null == d ? void 0 : d.id) !== c.I3;
            return (0, a.jsxs)("button", {
              className: "btn-link",
              style: t,
              onClick: m ? A : h,
              type: "button",
              children: [
                !m && "Connect Wallet",
                m &&
                  (0, a.jsxs)("div", {
                    className: o()["connect-button"],
                    children: [
                      p || n
                        ? (0, a.jsxs)("div", {
                            onClick: u,
                            className: o()["network-warning"],
                            children: [
                              (0, a.jsx)(l.default, {
                                src: r,
                                alt: "warning",
                                width: 24,
                              }),
                              p ? "INVALID NETWORK" : n,
                            ],
                          })
                        : (0, a.jsx)("div", {
                            className: o().balance,
                            children: i.displayBalance,
                          }),
                      (0, a.jsx)("div", {
                        className: o()["circle-container"],
                        children: (0, a.jsx)("div", {
                          children: i.displayName,
                        }),
                      }),
                    ],
                  }),
              ],
            });
          },
        });
      }
    },
    82925: (e) => {
      e.exports = {
        "connect-button": "connect-button_connect-button__5dhr1",
        balance: "connect-button_balance__pnKfU",
        "circle-container": "connect-button_circle-container__XHKBu",
        "network-warning": "connect-button_network-warning__n1d_m",
        circle: "connect-button_circle__wymRj",
      };
    },
    83985: (e, t, s) => {
      "use strict";
      s.d(t, { g: () => p, OkxVsGateCounter: () => _, A: () => b });
      var a = s(95155),
        i = s(5091),
        l = s.n(i),
        n = s(59434),
        o = s(66766);
      let c = {
          src: "/_next/static/media/main.c5cbd7fd.png",
          height: 834,
          width: 2670,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAElBMVEUABxECGDsBFgUQIQsIFSkBCAKLgw15AAAAA3RSTlP6/v6SHyHwAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAF0lEQVR4nGNgYGFkYWZmYmVgYAAxWFkBAWoALNleW3YAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 2,
        },
        r = {
          src: "/_next/static/media/mobile-main.64843f18.png",
          height: 226,
          width: 352,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAALVBMVEUAAQADFTcIOAwAAAABCRoEFQcFESsMJxAEHUcCBwc2RzcNRxAjLTo1QFEVGhxBiJ3fAAAAA3RSTlPy8fGLK3EWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVR4nB3GyREAIAgDwKgJiFf/5Tqwr0Uz43PvmMa75DtzKiQjJAGj4AMXiADuK/4VKwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 5,
        },
        d = {
          src: "/_next/static/media/border.a026e2a3.svg",
          height: 389,
          width: 1320,
          blurWidth: 0,
          blurHeight: 0,
        },
        A = {
          src: "/_next/static/media/btn.29bed997.png",
          height: 195,
          width: 195,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEWHeauTiKN/caF1aJptX5BnW4p1Z5iGdKFMaXG0p9F2api1rcOknbKoobmFeqGCcKGbiLadkbGqo7eRgqmjnrd5aZhzY5SPfqiimbOajK+5VM8YAAAAFXRSTlMu/bOx/f3s+wAu9/7vr/70sOuv6+sIh+OyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQUlEQVR4nAXBBwLAIAgEsHODswvQ/3+0CQihVg8CsqYUM+AlykwasESLRc0oYmdbeXHZbM3tAb6Pc/tjED+9D6YfXqAC991S+XUAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        };
      var u = s(40707);
      let h = {
        src: "/_next/static/media/logos-line.24dd4ef1.svg",
        height: 20,
        width: 253,
        blurWidth: 0,
        blurHeight: 0,
      };
      var x = s(26072),
        g = s(87397);
      let m = (e) =>
        e ? fetch(e).then((e) => e.json()) : Promise.resolve(null);
      function p(e) {
        let { commonNodesInfo: t } = e,
          s = (0, g.env)("NEXT_PUBLIC_OKX_GATE_DEFAULT_REFERRAL"),
          i = "/sale/common-nodes/gate".concat(s ? "?address=".concat(s) : ""),
          c = "/sale/common-nodes/okx".concat(s ? "?address=".concat(s) : "");
        return (0, a.jsxs)("div", {
          className: l()["okx-vs-gate"],
          children: [
            (0, a.jsx)(_, { commonNodesInfo: t }),
            (0, a.jsx)("h1", {
              className: l().title,
              children: "Make your choice & unlock 10% discount by joining now",
            }),
            (0, a.jsxs)("div", {
              className: l().boxes,
              children: [
                (0, a.jsxs)("div", {
                  className: l().box,
                  children: [
                    (0, a.jsxs)("div", {
                      className: l().row,
                      children: [
                        (0, a.jsx)("p", {
                          className: l().text,
                          children: "Connect Gate wallet on Bluwhale",
                        }),
                        (0, a.jsx)(o.default, {
                          src: A,
                          alt: "arrow",
                          width: 24,
                          className: (0, n.cn)(l()["arrow-img"], l().desktop),
                        }),
                      ],
                    }),
                    (0, a.jsx)("a", {
                      href: i,
                      className: "btn-link",
                      children: "BUY NOW",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: l().box,
                  children: [
                    (0, a.jsxs)("div", {
                      className: l().row,
                      children: [
                        (0, a.jsx)("p", {
                          className: l().text,
                          children: "Connect OKX wallet on Bluwhale",
                        }),
                        (0, a.jsx)(o.default, {
                          src: A,
                          alt: "arrow",
                          width: 24,
                          className: (0, n.cn)(l()["arrow-img"], l().desktop),
                        }),
                      ],
                    }),
                    (0, a.jsx)("a", {
                      href: c,
                      className: "btn-link",
                      children: "BUY NOW",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function _(e) {
        let { commonNodesInfo: t } = e,
          {
            nodesGateSold: s,
            nodesGateTotal: i,
            nodesOkxSold: A,
            nodesOkxTotal: h,
          } = v(t);
        return (0, a.jsxs)("div", {
          className: (0, n.cn)(l()["image-container"]),
          children: [
            (0, a.jsx)(o.default, {
              src: c,
              alt: "okx vs gate",
              width: 1320,
              height: 416,
              className: (0, n.cn)(l().main, l().desktop),
            }),
            (0, a.jsx)(o.default, {
              src: d,
              alt: "okx vs gate",
              width: 1320,
              height: 416,
              className: (0, n.cn)(l().border, l().desktop),
            }),
            (0, a.jsx)(o.default, {
              src: u.A,
              alt: "okx vs gate",
              width: 315,
              height: 46,
              className: (0, n.cn)(l().logos, l().mobile),
            }),
            (0, a.jsx)(o.default, {
              src: r,
              alt: "okx vs gate",
              width: 352,
              height: 226,
              className: (0, n.cn)(l().main, l().mobile),
            }),
            (0, a.jsx)("p", {
              className: (0, n.cn)(
                l()["decor-text"],
                l()["text-top"],
                l().desktop
              ),
              children: "Make your choice!",
            }),
            (0, a.jsx)("p", {
              className: (0, n.cn)(
                l()["decor-text"],
                l()["text-bottom"],
                l().desktop
              ),
              children: "The winning team receives 1000 extra nodes!",
            }),
            (0, a.jsx)("p", {
              className: (0, n.cn)(l()["decor-text"], l().mobile),
              children:
                "The winning team receives 1000 extra nodes. Make your choice!",
            }),
            (0, a.jsxs)("div", {
              className: (0, n.cn)(l()["info-box"], l().gate),
              children: [
                (0, a.jsxs)("div", {
                  className: l()["nodes-sold"],
                  children: [
                    (0, a.jsx)("p", { className: l().number, children: s }),
                    (0, a.jsx)("p", {
                      className: l().text,
                      children: "NODES SOLD",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: (0, n.cn)(l()["nodes-bar"], l().desktop),
                  children: [
                    (0, a.jsx)("div", {
                      className: l().available,
                      style: { flex: 1 - s / i },
                    }),
                    (0, a.jsx)("div", {
                      className: l().sold,
                      style: { flex: s / i },
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: (0, n.cn)(l()["available-text"], l().desktop),
                  children: [
                    (0, a.jsx)("p", { children: "Available Nodes" }),
                    (0, a.jsxs)("p", { children: [i - s, "/", i] }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: (0, n.cn)(l()["info-box"], l().okx),
              children: [
                (0, a.jsxs)("div", {
                  className: l()["nodes-sold"],
                  children: [
                    (0, a.jsx)("p", { className: l().number, children: A }),
                    (0, a.jsx)("p", {
                      className: l().text,
                      children: "NODES SOLD",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: (0, n.cn)(l()["nodes-bar"], l().desktop),
                  children: [
                    (0, a.jsx)("div", {
                      className: l().sold,
                      style: { width: (A / h) * 100 + "%" },
                    }),
                    (0, a.jsx)("div", {
                      className: l().available,
                      style: { width: (1 - A / h) * 100 + "%" },
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: (0, n.cn)(l()["available-text"], l().desktop),
                  children: [
                    (0, a.jsx)("p", { children: "Available Nodes" }),
                    (0, a.jsxs)("p", { children: [h - A, "/", h] }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function b(e) {
        let { commonNodesInfo: t } = e,
          {
            nodesGateSold: s,
            nodesGateTotal: i,
            nodesOkxSold: c,
            nodesOkxTotal: d,
          } = v(t);
        return (0, a.jsxs)("div", {
          className: (0, n.cn)(l()["image-container"]),
          children: [
            (0, a.jsx)(o.default, {
              src: h,
              alt: "okx vs gate",
              width: 253,
              height: 19,
              className: (0, n.cn)(l().logos),
            }),
            (0, a.jsx)(o.default, {
              src: r,
              alt: "okx vs gate",
              width: 352,
              height: 226,
              className: (0, n.cn)(l().main, l().mini),
            }),
            (0, a.jsx)("p", {
              className: (0, n.cn)(l()["decor-text"], l().mini),
              children:
                "The winning team receives 1000 extra nodes. Make your choice!",
            }),
            (0, a.jsx)("div", {
              className: (0, n.cn)(l()["info-box"], l().gate),
              children: (0, a.jsxs)("div", {
                className: (0, n.cn)(l()["nodes-sold"], l().mini),
                children: [
                  (0, a.jsx)("p", {
                    className: (0, n.cn)(l().number, l().mini),
                    children: s,
                  }),
                  (0, a.jsx)("p", {
                    className: (0, n.cn)(l().text, l().mini),
                    children: "NODES SOLD",
                  }),
                ],
              }),
            }),
            (0, a.jsx)("div", {
              className: (0, n.cn)(l()["info-box"], l().okx),
              children: (0, a.jsxs)("div", {
                className: (0, n.cn)(l()["nodes-sold"], l().mini),
                children: [
                  (0, a.jsx)("p", {
                    className: (0, n.cn)(l().number, l().mini),
                    children: c,
                  }),
                  (0, a.jsx)("p", {
                    className: (0, n.cn)(l().text, l().mini),
                    children: "NODES SOLD",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function v(e) {
        var t, s, a, i, l, n;
        let { data: o, error: c } = (0, x.Ay)("/api/common-nodes-info", {
            fetcher: m,
          }),
          r =
            null != (t = null == o ? void 0 : o.gate.nodesSold)
              ? t
              : e.gate.nodesSold,
          d =
            null !=
            (a =
              null != (s = null == o ? void 0 : o.gate.artificialLimit)
                ? s
                : e.gate.artificialLimit)
              ? a
              : 1e3;
        r > d && (r = d);
        let A =
            null != (i = null == o ? void 0 : o.okx.nodesSold)
              ? i
              : e.okx.nodesSold,
          u =
            null !=
            (n =
              null != (l = null == o ? void 0 : o.okx.artificialLimit)
                ? l
                : e.okx.artificialLimit)
              ? n
              : 1e3;
        return (
          A > u && (A = u),
          {
            nodesGateSold: r,
            nodesGateTotal: d,
            nodesOkxSold: A,
            nodesOkxTotal: u,
          }
        );
      }
    },
    85158: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => a });
      let a = {
        src: "/_next/static/media/socio-5.75f2daf7.svg",
        height: 18,
        width: 32,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    90081: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => a });
      let a = {
        src: "/_next/static/media/socio-2.885b3f60.svg",
        height: 22,
        width: 23,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    94170: (e, t, s) => {
      "use strict";
      s.d(t, { LinkDropdown: () => n });
      var a = s(95155),
        i = s(12115),
        l = s(59434);
      function n(e) {
        let { text: t, icon: s, sublinks: n, showName: o } = e,
          [c, r] = (0, i.useState)(!1);
        return (0, a.jsxs)("div", {
          className: (0, l.cn)(
            "socio-box-item dropdown-menu up",
            c && "active"
          ),
          children: [
            (0, a.jsxs)("a", {
              className: "socio-link dropdown-menu-switch cursor-pointer",
              onClick: () => r((e) => !e),
              children: [
                (0, a.jsx)("img", { src: s, alt: t }),
                o && (0, a.jsx)("span", { children: t }),
              ],
            }),
            (0, a.jsx)("ul", {
              children:
                null == n
                  ? void 0
                  : n.map((e) =>
                      (0, a.jsx)(
                        "li",
                        {
                          children: (0, a.jsx)("a", {
                            target: "_blank",
                            href: e.link,
                            children: e.text,
                          }),
                        },
                        e.text
                      )
                    ),
            }),
          ],
        });
      }
    },
  },
]);
