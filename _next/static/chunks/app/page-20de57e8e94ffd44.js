(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8974],
  {
    8205: (e) => {
      e.exports = {
        "loading-container": "LoadingOverlay_loading-container__ZxAEG",
        loading: "LoadingOverlay_loading__02Nrh",
        active: "LoadingOverlay_active___MZK4",
        img: "LoadingOverlay_img__94g3F",
      };
    },
    16893: (e) => {
      e.exports = {
        button: "components_button__PXzCn",
        lg: "components_lg__8VqXY",
        primary: "components_primary__p_KCd",
        secondary: "components_secondary__vcZUx",
        outline: "components_outline__UaWJb",
      };
    },
    29074: (e, t, i) => {
      "use strict";
      i.d(t, { p: () => c });
      var n = i(95155),
        r = i(66766),
        a = i(59434),
        l = i(8205),
        s = i.n(l);
      let o = {
        src: "/_next/static/media/loading-image.294d352a.png",
        height: 788,
        width: 1400,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAG1BMVEV0dMNAQHNkX6ZrabOEgs5ubreQi9x3ccN6c8N2wG3aAAAACXRSTlMBGlIjQ18sL3fdAXMcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJklEQVR4nGNgYGBhYWYAAUYmJiZGMIORkQksxMzKysEOlmNjAVEABVkAQk1cWc4AAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 5,
      };
      function c(e) {
        let { open: t } = e;
        return (0, n.jsx)("div", {
          className: (0, a.cn)(s()["loading-container"], t && s().active),
          children: (0, n.jsx)("div", {
            className: (0, a.cn)(s().loading, t && s().active),
            children: (0, n.jsx)("div", {
              className: s().img,
              children: (0, n.jsx)(r.default, {
                src: o,
                alt: "",
                width: 300,
                height: 169,
              }),
            }),
          }),
        });
      }
    },
    38982: (e, t, i) => {
      "use strict";
      i.d(t, { M: () => l });
      var n = i(95155),
        r = i(63474),
        a = i.n(r);
      function l(e) {
        let { children: t } = e;
        return (0, n.jsx)("div", {
          className: a().page,
          children: (0, n.jsx)("div", { className: a().content, children: t }),
        });
      }
    },
    48701: (e, t, i) => {
      "use strict";
      i.d(t, { j: () => l });
      var n = i(95155),
        r = i(57292),
        a = i.n(r);
      let l = [
        { header: "#", headerStyle: { width: "5%" }, cell: (e) => e.index },
        {
          header: "Wallet",
          cell: (e) =>
            (0, n.jsx)("div", { className: a().wallet, children: e.wallet }),
        },
        {
          header: (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("div", { className: "mobile", children: "PTS" }),
              (0, n.jsx)("div", { className: "desktop", children: "Points" }),
            ],
          }),
          cell: (e) => e.points,
        },
        { header: "Tier", cell: (e) => e.tier },
      ];
    },
    50210: (e, t, i) => {
      "use strict";
      i.d(t, { $n: () => c, Ak: () => s, Mp: () => o });
      var n = i(95155),
        r = i(59434),
        a = i(16893),
        l = i.n(a),
        s = (function (e) {
          return (
            (e[(e.primary = 0)] = "primary"),
            (e[(e.secondary = 1)] = "secondary"),
            (e[(e.outline = 2)] = "outline"),
            e
          );
        })({}),
        o = (function (e) {
          return (
            (e[(e.normal = 0)] = "normal"), (e[(e.large = 1)] = "large"), e
          );
        })({});
      function c(e) {
        let { size: t = 0, variant: i = 2, ...a } = e,
          s = { 0: l().primary, 1: l().secondary, 2: l().outline },
          o = { 0: "", 1: l().lg };
        return (0, n.jsx)("button", {
          ...a,
          className: (0, r.cn)(a.className, l().button, s[i], o[t]),
        });
      }
    },
    50375: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => R });
      var n = i(95155),
        r = i(2145),
        a = i(23058),
        l = i(12115),
        s = i(23464);
      let {
        Axios: o,
        AxiosError: c,
        CanceledError: d,
        isCancel: u,
        CancelToken: g,
        VERSION: p,
        all: h,
        Cancel: _,
        isAxiosError: m,
        spread: x,
        toFormData: v,
        AxiosHeaders: f,
        HttpStatusCode: j,
        formToJSON: b,
        getAdapter: A,
        mergeConfig: y,
      } = s.A;
      var N = i(87397),
        w = i(50210),
        I = i(63439);
      i(85035);
      var C = i(35695),
        T = i(59434),
        E = i(38982),
        S = i(77068),
        k = i.n(S),
        F = i(29074),
        M = i(53640),
        P = i(48701);
      function R() {
        let [e, t] = (0, l.useState)(!0),
          [i, o] = (0, l.useState)(void 0),
          [d, u] = (0, l.useState)(""),
          [g, p] = (0, l.useState)(""),
          [h, _] = (0, l.useState)(""),
          [m, x] = (0, l.useState)(void 0),
          [v, f] = (0, l.useState)(void 0),
          j = (0, C.useRouter)(),
          b = (0, C.useSearchParams)(),
          { status: A, address: y } = (0, r.F)(),
          { signMessageAsync: I } = (0, a.Y)(),
          T = (0, N.env)("NEXT_PUBLIC_API_URL");
        async function S() {
          let e;
          t(!0);
          try {
            e = (await s.A.get("".concat(T, "/whitelist/status"))).data;
          } catch (e) {
            o({ isActive: !1, endDate: new Date(0) }), t(!1);
            return;
          }
          o(e);
          let i = ""
            .concat(T, "/whitelist/registration-info?wallet=")
            .concat(y);
          s.A.get(i)
            .then((e) => {
              if ((x(e.data), e.data)) {
                var t, i;
                p(null != (t = e.data.email) ? t : ""),
                  u(null != (i = e.data.referralCode) ? i : ""),
                  _("");
              }
            })
            .catch((e) => {
              var t;
              x(void 0),
                p(""),
                u(null != (t = b.get("referral-code")) ? t : ""),
                _("");
            })
            .finally(() => {
              t(!1);
            });
        }
        async function M() {
          var e, i, r, a, l, o, u, p, h, m, v, j, b;
          let A, N, w;
          f(void 0), t(!0);
          let C = ""
            .concat(T, "/whitelist/register?wallet=")
            .concat(y, "&email=")
            .concat(encodeURIComponent(g.trim()));
          d && (C += "&referral-code=".concat(d.trim()));
          try {
            A = await s.A.get(C);
          } catch (d) {
            let s = "Error while getting message to sign";
            d instanceof c &&
              (((null == (e = d.response) ? void 0 : e.status) === 400 ||
                (null == (i = d.response) ? void 0 : i.status) == 409) &&
                (s = null == (l = d.response) ? void 0 : l.data),
              (null == (a = d.response) || null == (r = a.data)
                ? void 0
                : r.reason) === "ValidationFailed" &&
                (s =
                  null == (p = d.response) ||
                  null == (u = p.data) ||
                  null == (o = u.fields)
                    ? void 0
                    : o.map((e) => e.message).join((0, n.jsx)("br", {})))),
              console.error("error while getting message to sign", d),
              f(s),
              t(!1);
            return;
          }
          console.log("msg to sign", A);
          try {
            N = await I({ message: A.data.messageToSign });
          } catch (e) {
            console.error("error while signing", e),
              f("Failed to sign message"),
              t(!1);
            return;
          }
          console.log("signature", N);
          let E = {
            walletAddress: y,
            email: g.trim(),
            signature: N,
            referralCode:
              null != (h = null == d ? void 0 : d.trim()) ? h : void 0,
          };
          try {
            w = await s.A.post("".concat(T, "/whitelist/register"), E);
          } catch (e) {
            if (
              (console.error("error while registering", e),
              e instanceof c &&
                ((null == (m = e.response) ? void 0 : m.status) === 400 ||
                  (null == (v = e.response) ? void 0 : v.status) === 409))
            ) {
              f(
                null != (b = null == (j = e.response) ? void 0 : j.data)
                  ? b
                  : "Failed to register"
              ),
                t(!1);
              return;
            }
            f(
              "Something went wrong while registering. Please try again later."
            ),
              t(!1);
            return;
          }
          console.log("register response", w), x(w.data), _(""), t(!1);
        }
        async function P() {
          var e, i, n, r, a, l, o, u, p, _, m, v, j;
          let b;
          f(void 0), t(!0);
          let A = {
            walletAddress: y,
            email: g.trim(),
            referralCode:
              null != (e = null == d ? void 0 : d.trim()) ? e : void 0,
            confirmationCode: h.trim(),
          };
          try {
            b = await s.A.post("".concat(T, "/whitelist/verify"), A);
          } catch (e) {
            if (
              (console.error("error while verifying", e),
              e instanceof c &&
                (null != (n = null == (i = e.response) ? void 0 : i.status)
                  ? n
                  : 0 in [400, 404, 409]))
            ) {
              if (
                null == (a = e.response) || null == (r = a.data)
                  ? void 0
                  : r.reason
              ) {
                f(
                  null == (v = e.response) || null == (m = v.data)
                    ? void 0
                    : m.fields[0].message
                ),
                  t(!1);
                return;
              }
              f(
                null != (j = null == (l = e.response) ? void 0 : l.data)
                  ? j
                  : "Failed to verify"
              ),
                t(!1),
                ((null == (u = e.response) || null == (o = u.data)
                  ? void 0
                  : o.includes("expired")) ||
                  (null == (_ = e.response) || null == (p = _.data)
                    ? void 0
                    : p.includes("request not found"))) &&
                  x(void 0);
              return;
            }
            f("Something went wrong while verifying. Please try again later."),
              t(!1);
            return;
          }
          console.log("verify response", b), x(b.data), t(!1);
        }
        return (
          (0, N.env)("NEXT_PUBLIC_CHAIN_ID"),
          (0, l.useEffect)(() => {
            t(!1);
          }, []),
          (0, l.useEffect)(() => {
            if (!y) return void x(void 0);
            S();
          }, [y]),
          (0, n.jsxs)(E.M, {
            children: [
              (0, n.jsxs)("div", {
                className: k()["tabs-box"],
                children: [
                  (0, n.jsx)("div", { className: "hands" }),
                  (0, n.jsx)(F.p, {
                    open: e || "connecting" == A || "reconnecting" == A,
                  }),
                  (0, n.jsx)("h1", {
                    className: k().title,
                    style: { marginBottom: 32 },
                    children: "Whitelist",
                  }),
                  m &&
                    m.isVerified &&
                    (0, n.jsxs)("div", {
                      className: k().registrationInfoMobile,
                      children: [
                        (0, n.jsxs)("p", {
                          className: k()["register-info-box-header"],
                          children: [
                            "your tier:",
                            " ",
                            (0, n.jsx)("b", {
                              children: (null == m ? void 0 : m.tier)
                                ? null == m
                                  ? void 0
                                  : m.tier
                                : "0",
                            }),
                          ],
                        }),
                        (null == m ? void 0 : m.tier) !== 1 &&
                          (0, n.jsxs)("p", {
                            className: k()["register-info-box-text-mobile"],
                            children: [
                              "you need ",
                              null == m ? void 0 : m.pointsToNextTier,
                              " ",
                              (null == m ? void 0 : m.pointsToNextTier) === 1
                                ? "point"
                                : "points",
                              " ",
                              (0, n.jsx)("br", {}),
                              "to the next tier",
                            ],
                          }),
                      ],
                    }),
                  (0, n.jsx)(B, {
                    style:
                      m && m.isVerified
                        ? { width: "100%", padding: "0px" }
                        : { width: "100%" },
                    registrationInfo: m,
                  }),
                  !e && i && !i.isActive && (0, n.jsx)(X, {}),
                  "connected" == A &&
                    (0, n.jsx)(n.Fragment, {
                      children:
                        !e &&
                        i &&
                        (0, n.jsxs)(n.Fragment, {
                          children: [
                            i.isActive &&
                              (0, n.jsxs)(n.Fragment, {
                                children: [
                                  !m &&
                                    (0, n.jsx)(n.Fragment, {
                                      children: (0, n.jsx)(L, {
                                        inputEmail: g,
                                        setInputEmail: p,
                                        inputReferralCode: d,
                                        setInputReferralCode: u,
                                        error: v,
                                        startRegistration: M,
                                      }),
                                    }),
                                  m &&
                                    !m.isVerified &&
                                    (0, n.jsx)(n.Fragment, {
                                      children: (0, n.jsx)(U, {
                                        inputVerificationCode: h,
                                        setInputVerificationCode: _,
                                        email: null == m ? void 0 : m.email,
                                        error: v,
                                        finishRegistration: P,
                                        onUseAnotherEmail: function () {
                                          var e;
                                          p(""),
                                            u(
                                              null !=
                                                (e =
                                                  null == m
                                                    ? void 0
                                                    : m.appliedReferralCode)
                                                ? e
                                                : ""
                                            ),
                                            x(void 0),
                                            f(void 0);
                                        },
                                      }),
                                    }),
                                ],
                              }),
                            m &&
                              m.isVerified &&
                              (0, n.jsx)(n.Fragment, {
                                children: (0, n.jsx)(V, {
                                  registrationInfo: m,
                                }),
                              }),
                          ],
                        }),
                    }),
                  (0, n.jsx)(w.$n, {
                    size: w.Mp.large,
                    style: { marginTop: 24, width: "100%", display: "flex" },
                    onClick: () => j.push("/leaderboard"),
                    children: "Go to Leaderboard",
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: k()["info-section"],
                children: [(0, n.jsx)(O, {}), (0, n.jsx)(z, {})],
              }),
            ],
          })
        );
      }
      function L(e) {
        let {
          inputEmail: t,
          setInputEmail: i,
          inputReferralCode: r,
          setInputReferralCode: a,
          error: l,
          startRegistration: s,
        } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("input", {
              type: "email",
              className: "input",
              placeholder: "Email",
              style: { marginTop: "1.2rem" },
              value: t,
              onChange: (e) => i(e.target.value),
            }),
            (0, n.jsx)("input", {
              type: "text",
              className: "input",
              placeholder: "Referral code",
              value: r,
              onChange: (e) => a(e.target.value),
            }),
            l &&
              (0, n.jsx)(n.Fragment, {
                children: (0, n.jsx)("p", {
                  className: k().error,
                  children: l,
                }),
              }),
            (0, n.jsx)(w.$n, {
              size: w.Mp.large,
              variant: w.Ak.primary,
              style: { width: "100%", marginTop: "0rem" },
              onClick: s,
              children: "Register",
            }),
          ],
        });
      }
      function U(e) {
        let {
          inputVerificationCode: t,
          setInputVerificationCode: i,
          error: r,
          finishRegistration: a,
          email: l,
          onUseAnotherEmail: s,
        } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)("p", {
              children: [
                "Verification code sent to ",
                null != l ? l : "your email",
              ],
            }),
            (0, n.jsx)("input", {
              type: "text",
              className: "input",
              placeholder: "Verification code",
              value: t,
              onChange: (e) => i(e.target.value),
            }),
            r &&
              (0, n.jsx)(n.Fragment, {
                children: (0, n.jsx)("p", {
                  className: k().error,
                  children: r,
                }),
              }),
            (0, n.jsx)(w.$n, {
              variant: w.Ak.primary,
              size: w.Mp.large,
              onClick: a,
              children: "Verify",
            }),
            (0, n.jsx)(w.$n, {
              variant: w.Ak.outline,
              size: w.Mp.large,
              onClick: s,
              children: "Use other email address",
            }),
          ],
        });
      }
      function V(e) {
        let { registrationInfo: t } = e,
          [i, r] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            i &&
              setTimeout(() => {
                r(!1);
              }, 3e3);
          }, [i]),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)("div", {
                className: k()["register-info-box"],
                style: { marginTop: "1.5rem" },
                children: [
                  (0, n.jsx)("p", { children: "Registered with email" }),
                  (0, n.jsx)("p", {
                    className: k().selectable,
                    children: t.email,
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: k()["register-info-box"],
                children: [
                  (0, n.jsx)("p", { children: "Your referral code" }),
                  (0, n.jsx)("p", {
                    className: k().selectable,
                    children: t.referralCode,
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "tooltip-container",
                children: [
                  (0, n.jsx)(w.$n, {
                    style: { width: "100%" },
                    variant: w.Ak.primary,
                    size: w.Mp.large,
                    onClick: function () {
                      t &&
                        t.referralLink &&
                        navigator.clipboard
                          .writeText(t.referralLink)
                          .then(() => {
                            console.log("copied to clipboard", t.referralLink),
                              r(!0);
                          })
                          .catch((e) => {
                            console.error(
                              "error while copying to clipboard",
                              e
                            );
                          });
                    },
                    children: "Copy referral link",
                  }),
                  (0, n.jsx)("div", {
                    className: (0, T.cn)("tooltip", !i && "tooltip-hidden"),
                    children: "Copied!",
                  }),
                ],
              }),
            ],
          })
        );
      }
      function X() {
        return (0, n.jsx)("div", {
          className: k()["register-info-box"],
          style: { marginTop: "1rem" },
          children: (0, n.jsx)("p", {
            style: { fontSize: "1.2rem" },
            children: "Whitelist is closed",
          }),
        });
      }
      function B(e) {
        let { style: t, registrationInfo: i } = e;
        return (0, n.jsx)(I.pK.Custom, {
          children: (e) => {
            let {
                account: r,
                chain: a,
                openAccountModal: l,
                openChainModal: s,
                openConnectModal: o,
                authenticationStatus: c,
                mounted: d,
              } = e,
              u = d && r && a;
            return d
              ? (0, n.jsxs)(w.$n, {
                  variant: w.Ak.primary,
                  size: w.Mp.large,
                  style: t,
                  onClick: u ? l : o,
                  type: "button",
                  children: [
                    !u && "Connect Wallet",
                    u &&
                      (0, n.jsxs)("div", {
                        className:
                          k()[
                            i && i.isVerified
                              ? "connect-button"
                              : "connect-button-default"
                          ],
                        children: [
                          i &&
                            i.isVerified &&
                            (0, n.jsxs)("div", {
                              className: k()["register-info-box"],
                              children: [
                                (0, n.jsxs)("p", {
                                  className: k()["register-info-box-header"],
                                  children: [
                                    "your tier:",
                                    " ",
                                    (0, n.jsx)("b", {
                                      children: (null == i ? void 0 : i.tier)
                                        ? null == i
                                          ? void 0
                                          : i.tier
                                        : "0",
                                    }),
                                  ],
                                }),
                                (null == i ? void 0 : i.tier) !== 1 &&
                                  (0, n.jsxs)("p", {
                                    className: k()["register-info-box-text"],
                                    children: [
                                      "you need ",
                                      null == i ? void 0 : i.pointsToNextTier,
                                      " ",
                                      (null == i
                                        ? void 0
                                        : i.pointsToNextTier) === 1
                                        ? "point"
                                        : "points",
                                      " ",
                                      (0, n.jsx)("br", {}),
                                      "to the next tier",
                                    ],
                                  }),
                              ],
                            }),
                          (0, n.jsx)("div", {
                            className: "",
                            children: r.displayBalance,
                          }),
                          (0, n.jsxs)("div", {
                            className: k()["circle-container"],
                            children: [
                              (0, n.jsx)("div", { className: k().circle }),
                              (0, n.jsx)("div", { children: r.displayName }),
                            ],
                          }),
                        ],
                      }),
                  ],
                })
              : null;
          },
        });
      }
      function O() {
        let [e, t] = (0, l.useState)([]),
          i = (0, N.env)("NEXT_PUBLIC_API_URL");
        async function r() {
          try {
            let e = await s.A.get(
              "".concat(i, "/whitelist?page=", 0, "&pageSize=", 10)
            );
            t(e.data.rows);
          } catch (e) {
            console.error("error while fetching data");
          } finally {
          }
        }
        return (
          (0, l.useEffect)(() => {
            r();
          }, []),
          (0, n.jsxs)("div", {
            style: { width: "100%" },
            children: [
              (0, n.jsx)("p", { className: k().header, children: "LEADERS" }),
              (0, n.jsx)(M.X, {
                columns: P.j,
                rows: e,
                getRowId: (e, t) => t.toString(),
              }),
            ],
          })
        );
      }
      function z() {
        let [e, t] = (0, l.useState)([]);
        (0, l.useEffect)(() => {
          s.A.get((0, N.env)("NEXT_PUBLIC_API_URL") + "/whitelist/tiers")
            .then((e) => {
              t(e.data);
            })
            .catch((e) => {
              console.error("error while fetching tiers", e);
            });
        }, []);
        let i = (0, l.useMemo)(() => {
            if (0 == e.length) return [];
            let t = [{ name: e[0].name, count: e[0].maxPlace }];
            for (let i = 1; i < e.length; i++)
              t.push({
                name: e[i].name,
                count:
                  e[i].maxPlace > 0 ? e[i].maxPlace - e[i - 1].maxPlace : 0,
              }),
                console.log(
                  ""
                    .concat(t[i].count, " = ")
                    .concat(e[i].maxPlace, " - ")
                    .concat(t[i - 1].count)
                );
            return t;
          }, [e]).map((e, t) => ({
            cell: (t) =>
              (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)("div", {
                    style: { marginBottom: 16 },
                    children: e.name,
                  }),
                  (0, n.jsx)("div", {
                    children: e.count > 0 ? e.count : "UNLIMITED",
                  }),
                ],
              }),
          })),
          r = [
            { header: "Tier", cell: (e) => e.name },
            {
              header: "Max Place",
              headerStyle: { textAlign: "end" },
              cell: (e) => (e.maxPlace > 0 ? e.maxPlace : "UNLIMITED"),
              cellStyle: { textAlign: "end" },
            },
          ];
        return (0, n.jsx)("div", {
          style: { width: "100%" },
          children:
            e.length > 0 &&
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)("p", {
                  className: k().header,
                  children: "BLUWHALE NODE TIERS",
                }),
                (0, n.jsx)(M.X, {
                  columns: i,
                  rows: [{}],
                  getRowId: (e, t) => t.toString(),
                  className: "desktop",
                }),
                (0, n.jsx)(M.X, {
                  columns: r,
                  rows: e,
                  getRowId: (e, t) => t.toString(),
                  className: "mobile",
                }),
              ],
            }),
        });
      }
    },
    53640: (e, t, i) => {
      "use strict";
      i.d(t, { X: () => s });
      var n = i(95155),
        r = i(96424),
        a = i.n(r),
        l = i(59434);
      function s(e) {
        let { rows: t, columns: i, getRowId: r, className: s } = e;
        return (0, n.jsxs)("table", {
          className: (0, l.cn)(a().table, s),
          children: [
            (0, n.jsx)("thead", {
              children: (0, n.jsx)("tr", {
                className: a().head,
                children: i.map((e, t) =>
                  (0, n.jsx)(
                    "th",
                    {
                      className: a().cell,
                      style: e.headerStyle,
                      children: (0, n.jsx)("div", {
                        className: a().cellHeadInside,
                        children: e.header,
                      }),
                    },
                    "table_header_" + t
                  )
                ),
              }),
            }),
            (0, n.jsx)("tbody", {
              children: t.map((e, t) =>
                (0, n.jsx)(
                  "tr",
                  {
                    className: a().row,
                    children: i.map((i, l) =>
                      (0, n.jsx)(
                        "td",
                        {
                          className: a().cell,
                          style: i.cellStyle,
                          children: (0, n.jsx)("div", {
                            className: a().cellInside,
                            children: i.cell(e),
                          }),
                        },
                        r(e, t) + l
                      )
                    ),
                  },
                  r(e, t)
                )
              ),
            }),
          ],
        });
      }
    },
    54356: (e, t, i) => {
      Promise.resolve().then(i.bind(i, 50375));
    },
    57292: (e) => {
      e.exports = {
        leaderboard: "page_leaderboard__tAIpc",
        header: "page_header__JoxsS",
        spacer: "page_spacer__BaFWh",
        title: "page_title__ARht6",
        buttons: "page_buttons__2DAqA",
        toRegistration: "page_toRegistration__Tk09q",
        "input-wrapper": "page_input-wrapper__x9Bk0",
        input: "page_input__is3b5",
        wallet: "page_wallet__GihtS",
        tableFooter: "page_tableFooter__MpUXw",
        pagination: "page_pagination__7caKt",
        pages: "page_pages__vQOQj",
        active: "page_active__voABr",
      };
    },
    59434: (e, t, i) => {
      "use strict";
      i.d(t, { cn: () => a });
      var n = i(39688),
        r = i(52596);
      function a() {
        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        return (0, n.QP)((0, r.$)(t));
      }
    },
    63474: (e) => {
      e.exports = {
        page: "PageLayout_page__zoIun",
        content: "PageLayout_content__9nm4m",
      };
    },
    77068: (e) => {
      e.exports = {
        "tabs-box": "page_tabs-box__KE_cg",
        registrationInfoMobile: "page_registrationInfoMobile__kt4VX",
        "register-info-box-text-mobile":
          "page_register-info-box-text-mobile__MXnOU",
        title: "page_title__m5nyP",
        text: "page_text__HsUaO",
        "tabs-nav": "page_tabs-nav__peZ7r",
        active: "page_active__tAjuN",
        "rows-btn": "page_rows-btn__3w8nW",
        selectable: "page_selectable__4Xw8Y",
        error: "page_error__err8O",
        "connect-button-default": "page_connect-button-default__EItHe",
        "circle-container": "page_circle-container__ITZE_",
        circle: "page_circle__Qp_fb",
        "connect-button": "page_connect-button__dn7p9",
        "register-info-box": "page_register-info-box___Uppb",
        "register-info-box-header": "page_register-info-box-header__5OBbz",
        "register-info-box-text": "page_register-info-box-text__WzQCU",
        "info-section": "page_info-section__Fmvu0",
        header: "page_header__Tcoou",
      };
    },
    85035: () => {},
    96424: (e) => {
      e.exports = {
        table: "Table_table__YFXZl",
        head: "Table_head__FINek",
        row: "Table_row__syF5p",
        cell: "Table_cell__K1hSA",
        cellHeadInside: "Table_cellHeadInside___1hG4",
        cellInside: "Table_cellInside__2v94D",
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [8367, 4106, 8451, 3478, 9095, 794, 8441, 1684, 7358], () =>
      t(54356)
    ),
      (_N_E = e.O());
  },
]);
