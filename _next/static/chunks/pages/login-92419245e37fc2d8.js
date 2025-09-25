(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3459],
  {
    73700: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/login",
        function () {
          return n(17866);
        },
      ]);
    },
    17866: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return login;
          },
        });
      var i = n(85893),
        r = n(43879),
        o = n(34673),
        a = n(44304),
        s = n(1840),
        l = n(25675),
        c = n.n(l),
        u = n(69867),
        d = n(7963),
        h = n(20967),
        g = n(32151),
        f = n(93717),
        p = n(71293),
        w = n(93108),
        m = n(85970),
        x = n(5418),
        v = n(33090),
        y = n(26105),
        b = n(57747),
        k = n(81136),
        C = n(85518),
        E = n(9008),
        I = n.n(E),
        S = n(11163),
        j = n(67294),
        F = n(84527),
        _ = n(60909),
        N = n(25040),
        D = n(22326),
        L = n(69558),
        A = n(98978),
        U = n(78885),
        P = n(50259);
      let T =
          "conic-gradient(from 176.6deg at 35.14% -90.08%, rgba(162, 145, 218, 0.757761) -58.32deg, #C8A5E7 17.02deg, #FFFFFF 75.35deg, #AF9CFD 139.86deg, rgba(255, 255, 255, 0.501806) 170.65deg, rgba(162, 145, 218, 0.61) 207.01deg, #E5E7FC 262.75deg, rgba(162, 145, 218, 0.757761) 301.68deg, #C8A5E7 377.02deg)",
        z = (0, u.B1)({ fonts: { body: "'Emord', sans-serif" } });
      var login = function () {
        var e;
        let {
            user: t,
            loading: n,
            setLoading: l,
            axiosInstance: u,
          } = (0, o.c)(),
          E = (0, S.useRouter)();
        (0, d.p)();
        let { referral: M, enterprise: q } =
            null !== (e = E.query) && void 0 !== e ? e : {},
          [R, W] = (0, j.useState)(!1),
          [B, O] = (0, j.useState)([]),
          [G, Z] = (0, j.useState)(!1),
          [J, K] = (0, j.useState)(""),
          [H, X] = (0, j.useState)(""),
          [$, Q] = (0, j.useState)(!1),
          [V, Y] = (0, j.useState)(!1),
          [ee, et] = (0, j.useState)(!1),
          [en, ei] = (0, j.useState)(""),
          [er, eo] = (0, j.useState)(""),
          [ea, es] = (0, j.useState)(!1),
          { status: el, refetch: ec } = (0, _.z)();
        !(function (e) {
          let { userType: t } = e,
            { user: n } = (0, o.c)(),
            { onFetch: i } = (0, _.z)(),
            { onFetch: r } = (0, U.y)(),
            a = (0, S.useRouter)(),
            { from: s } = a.query;
          async function getOwnedProject() {
            let e = await i();
            if (!e || !(null == e ? void 0 : e.owned_project)) return;
            let t = await r(e.owned_project);
            if (t) return t;
          }
          async function handleEnterpriseLogin() {
            let e = await getOwnedProject();
            if (s) {
              a.push("".concat(s));
              return;
            }
            if ((null == e ? void 0 : e.project_type) === "chain") {
              var t;
              a.push(
                "/enterprise/chain/".concat(
                  null === (t = e.metadata) || void 0 === t
                    ? void 0
                    : t.chain_id
                )
              );
              return;
            }
            a.push("/enterprise/");
          }
          async function main(e, t) {
            if ("consumer" === e) {
              let e = t.uid.startsWith("sui:");
              e
                ? a.push(
                    "/consumer/wallet/".concat(
                      null == n ? void 0 : n.address,
                      "?chain=SUI"
                    )
                  )
                : a.push(
                    "/consumer/wallet/".concat(null == n ? void 0 : n.address)
                  );
              return;
            }
            await handleEnterpriseLogin();
          }
          (0, j.useEffect)(() => {
            t && n && main(t, n);
          }, [t, n]);
        })({ userType: null == t ? void 0 : t.user_type });
        let { isOpen: eu, onOpen: ed, onClose: eh } = (0, h.q)();
        j.useRef(null);
        let getCategory = async () => {
          let { categories: e } = await (0, F.CP)();
          W(!0), O(e);
        };
        (0, j.useEffect)(() => {
          (null == t ? void 0 : t.user_type) === "enterprise" &&
            (getCategory(), ec());
        }, [null == t ? void 0 : t.user_type]),
          (0, j.useEffect)(() => {
            if (E.isReady) {
              let { enterprise: e } = E.query;
              void 0 !== e && es("true" === e);
            }
          }, [E.isReady, E.query]);
        let eg = [
          (0, i.jsx)(
            N.tw,
            {
              name: D.zD.google.name,
              logo: D.zD.google.logo,
              action: "signin",
              userType: "enterprise",
              isSignUp: G,
              from: "",
              inviteCode: H,
              isLoginPage: !0,
            },
            "google"
          ),
          (0, i.jsx)(
            N.e3,
            {
              name: D.zD.twitter.name,
              logo: D.zD.twitter.logo,
              action: "signin",
              userType: "enterprise",
              isSignUp: G,
              from: "",
              inviteCode: H,
              isLoginPage: !0,
            },
            "twitter"
          ),
          (0, i.jsx)(
            L.Z,
            {
              name: D.zD.linkedin.name,
              logo: D.zD.linkedin.logo,
              action: "signin",
              userType: "enterprise",
              isSignUp: G,
              from: "",
              inviteCode: H,
              isLoginPage: !0,
            },
            "linkedin"
          ),
          (0, i.jsx)(
            A.Z,
            {
              name: "Email OTP",
              action: "signin",
              userType: "enterprise",
              isSignUp: G,
              from: "",
              inviteCode: H,
              isLoginPage: !0,
              logo: "",
            },
            "email-otp"
          ),
        ];
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(I(), {
              children: (0, i.jsx)("link", {
                href: "https://fonts.googleapis.com/css2?family=Emord:wght@400;700&display=swap",
                rel: "stylesheet",
              }),
            }),
            (0, i.jsx)(g.x, {
              theme: z,
              children: (0, i.jsx)(P.pm, {
                reCaptchaKey: "6LdcvNAqAAAAAPGIRpkc3LsBz_xFnyX5adFGHNx-",
                children: (0, i.jsx)(f.k, {
                  bgImage: "/images/login/bg-login.png",
                  bgSize: "cover",
                  bgRepeat: "repeat",
                  flexDir: "column",
                  justifyItems: "center",
                  alignItems: "center",
                  h: "100%",
                  minH: "150vh",
                  children: (0, i.jsxs)(f.k, {
                    mt: "60px",
                    flexDir: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    pos: "relative",
                    children: [
                      (0, i.jsx)(p.x, {
                        textAlign: "center",
                        color: "#fff",
                        fontSize: C.tq ? 36 : 60,
                        fontWeight: 800,
                        fontFamily: "Emord",
                        mb: C.tq ? "56px" : 0,
                        children: "SIGN IN",
                      }),
                      C.tq
                        ? null
                        : (0, i.jsxs)(f.k, {
                            border: "1px solid rgba(38,40,75,1)",
                            bg: "transparent",
                            rounded: "full",
                            mt: "32px",
                            mb: "56px",
                            zIndex: 2,
                            children: [
                              (0, i.jsx)(w.z, {
                                position: "relative",
                                bg: ea ? "transparent" : T,
                                width: "282px",
                                rounded: "full",
                                color: "#fff",
                                onClick: () => es(!1),
                                fontSize: 20,
                                height: "62px",
                                _before: ea
                                  ? {}
                                  : {
                                      content: '""',
                                      position: "absolute",
                                      top: "-1px",
                                      left: "-1px",
                                      right: "-1px",
                                      bottom: "-1px",
                                      borderRadius: "inherit",
                                      padding: "1px",
                                      background:
                                        "conic-gradient(from 176.6deg at 35.14% -90.08%, rgba(162, 145, 218, 0.757761) -58.32deg, #C8A5E7 17.02deg, #FFFFFF 75.35deg, #AF9CFD 139.86deg, rgba(255, 255, 255, 0.501806) 170.65deg, rgba(162, 145, 218, 0.61) 207.01deg, #E5E7FC 262.75deg, rgba(162, 145, 218, 0.757761) 301.68deg, #C8A5E7 377.02deg)",
                                      WebkitMask:
                                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                      WebkitMaskComposite: "destination-out",
                                      maskComposite: "exclude",
                                    },
                                children: "CONSUMER",
                              }),
                              (0, i.jsx)(w.z, {
                                position: "relative",
                                bg: ea ? T : "transparent",
                                width: "282px",
                                rounded: "full",
                                color: "#fff",
                                onClick: () => es(!0),
                                fontSize: 20,
                                height: "62px",
                                _before: ea
                                  ? {
                                      content: '""',
                                      position: "absolute",
                                      top: "-1px",
                                      left: "-1px",
                                      right: "-1px",
                                      bottom: "-1px",
                                      borderRadius: "inherit",
                                      padding: "1px",
                                      background:
                                        "conic-gradient(from 176.6deg at 35.14% -90.08%, rgba(162, 145, 218, 0.757761) -58.32deg, #C8A5E7 17.02deg, #FFFFFF 75.35deg, #AF9CFD 139.86deg, rgba(255, 255, 255, 0.501806) 170.65deg, rgba(162, 145, 218, 0.61) 207.01deg, #E5E7FC 262.75deg, rgba(162, 145, 218, 0.757761) 301.68deg, #C8A5E7 377.02deg)",
                                      WebkitMask:
                                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                      WebkitMaskComposite: "destination-out",
                                      maskComposite: "exclude",
                                    }
                                  : {},
                                children: "ENTERPRISE",
                              }),
                            ],
                          }),
                      ea && !C.tq
                        ? (0, i.jsxs)(f.k, {
                            flexDir: "column",
                            textAlign: "center",
                            justifyContent: "center",
                            mx: "auto",
                            flex: "1",
                            gap: "4",
                            zIndex: 2,
                            children: [
                              G
                                ? (0, i.jsxs)(m.NI, {
                                    isRequired: !0,
                                    isInvalid: $,
                                    w: "575px",
                                    h: "64px",
                                    alignSelf: "center",
                                    mb: "16px",
                                    children: [
                                      (0, i.jsx)(x.l, {
                                        fontSize: C.tq ? 12 : 14,
                                        fontWeight: 500,
                                        children: "Invitation Code",
                                      }),
                                      (0, i.jsx)(v.I, {
                                        type: "text",
                                        onChange: (e) => {
                                          X(e.target.value);
                                        },
                                        value: H,
                                        border: "1px solid #767676",
                                        rounded: "full",
                                      }),
                                      (0, i.jsx)(y.J1, {
                                        fontSize: 12,
                                        children: "*Invalid invitation code",
                                      }),
                                    ],
                                  })
                                : null,
                              n
                                ? (0, i.jsxs)(f.k, {
                                    minH: ["60vh", 400, 400],
                                    w: "90vw",
                                    justifyContent: "center",
                                    flexDir: "column",
                                    alignSelf: "center",
                                    children: [
                                      (0, i.jsx)(b.xu, {
                                        my: 4,
                                        children: (0, i.jsx)(k.$, {
                                          thickness: "4px",
                                          speed: "0.65s",
                                          color: "#6bb2c5",
                                          size: "xl",
                                        }),
                                      }),
                                      (0, i.jsx)(p.x, {
                                        color: "#D6D6D6",
                                        children: "Securely logging you in...",
                                      }),
                                    ],
                                  })
                                : (0, i.jsxs)(f.k, {
                                    flexDir: "column",
                                    gap: 4,
                                    fontSize: 14,
                                    display: "flex",
                                    children: [
                                      " ",
                                      eg.map((e) =>
                                        (0, i.jsx)(
                                          b.xu,
                                          {
                                            w: "575px",
                                            h: "64px",
                                            bg: "transparent",
                                            alignSelf: "center",
                                            borderRadius: 10,
                                            pointerEvents: "auto",
                                            opacity: 1,
                                            children: e,
                                          },
                                          e.key
                                        )
                                      ),
                                      G
                                        ? (0, i.jsxs)(p.x, {
                                            onClick: () => Z(!1),
                                            children: [
                                              "Already have an account?",
                                              " ",
                                              (0, i.jsx)(p.x, {
                                                color: "#00FFF0",
                                                as: "u",
                                                display: "inline-block",
                                                cursor: "pointer",
                                                children: "Log in",
                                              }),
                                            ],
                                          })
                                        : (0, i.jsxs)(p.x, {
                                            onClick: () => {
                                              (0, a.B)(s.U.signUp_click), Z(!0);
                                            },
                                            children: [
                                              "Don't have an account?",
                                              " ",
                                              (0, i.jsx)(p.x, {
                                                color: "#00FFF0",
                                                as: "u",
                                                display: "inline-block",
                                                cursor: "pointer",
                                                children: "Sign up",
                                              }),
                                            ],
                                          }),
                                    ],
                                  }),
                            ],
                          })
                        : (0, i.jsx)(f.k, {
                            flexDir: "column",
                            textAlign: "center",
                            justifyContent: "center",
                            mx: "auto",
                            flex: "1",
                            zIndex: 2,
                            children: (0, i.jsx)(r.Z, {
                              action: "signin",
                              title: "",
                              userType: "consumer",
                              showSwitchLable: !0,
                              referralCode: M,
                              isLoginPage: !0,
                            }),
                          }),
                      (0, i.jsxs)(b.xu, {
                        pos: "fixed",
                        h: "100%",
                        w: "100%",
                        top: 0,
                        left: 0,
                        zIndex: 1,
                        children: [
                          (0, i.jsx)(b.xu, {
                            position: "fixed",
                            height: "100%",
                            bottom: C.tq ? "-350px" : "-30%",
                            left: C.tq ? "-71%" : "-280px",
                            width: C.tq ? "129%" : "50%",
                            zIndex: -1,
                            children: (0, i.jsx)(c(), {
                              src: "/images/login/hand.png",
                              layout: "fill",
                              objectFit: "contain",
                              alt: "Hand Image",
                            }),
                          }),
                          !C.tq &&
                            (0, i.jsx)(b.xu, {
                              position: "fixed",
                              height: "100%",
                              top: "-10%",
                              right: "-280px",
                              width: "80%",
                              zIndex: -1,
                              children: (0, i.jsx)(c(), {
                                src: "/images/login/hand1.png",
                                layout: "fill",
                                objectFit: "contain",
                                alt: "Hand Image 1",
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      };
    },
    60909: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return useGetEnterpriseDetail;
        },
      });
      var i = n(84527),
        r = n(34673),
        o = n(22326),
        a = n(9473),
        s = n(67294),
        l = n(55881),
        c = n(11163),
        u = n(10777);
      function useGetEnterpriseDetail() {
        let e = (0, c.useRouter)(),
          { onLogout: t, user: n, axiosInstance: d } = (0, r.c)(),
          [h, g] = (0, s.useState)("idle"),
          [f, p] = (0, s.useState)(!1),
          w = sessionStorage.getItem("firebaseUser"),
          m = (0, a.I0)(),
          x = (0, a.v9)((e) => e.enterpriseDetail.enterpriseDetail),
          v = (0, s.useCallback)(
            (e) => {
              m((0, l.dq)(e));
            },
            [m, l.dq]
          );
        async function getData() {
          try {
            if (!getEnable() || "idle" !== h) return;
            g("loading");
            let e = await (0, i.XM)(d);
            g("success"), await v(e);
          } catch (i) {
            var n;
            throw (
              ((null == i
                ? void 0
                : null === (n = i.response) || void 0 === n
                ? void 0
                : n.status) === 401 && (t(), e.push("/login")),
              g("error"),
              i)
            );
          }
        }
        async function getEnable() {
          let e = await o.I8.currentUser;
          return (
            (e && w && (null == n ? void 0 : n.user_type) === "enterprise") ||
            !1
          );
        }
        let fetchEnterpriseProject = async () => {
          g("loading");
          let e = await (0, i.XM)(d);
          return e && (await v(e)), g("success"), e;
        };
        (0, s.useEffect)(() => {
          f && w && (p(!0), getData());
        }, [f, w]);
        let {
          data: y,
          isLoading: b,
          error: k,
          refetch: C,
        } = (0, u.a)({
          queryKey: ["enterpriseDetail", null == n ? void 0 : n.uuid],
          queryFn: fetchEnterpriseProject,
        });
        return {
          data: x,
          refetch: () => {
            w &&
              (null == n ? void 0 : n.user_type) === "enterprise" &&
              getData();
          },
          status: h,
          onFetch: fetchEnterpriseProject,
        };
      }
    },
    78885: function (e, t, n) {
      "use strict";
      n.d(t, {
        y: function () {
          return useGetEnterpriseProjectInfo;
        },
      });
      var i = n(34673),
        r = n(9473),
        o = n(67294),
        a = n(7959),
        s = n(84527),
        l = n(60909);
      function useGetEnterpriseProjectInfo() {
        let { user: e } = (0, i.c)(),
          [t, n] = (0, o.useState)("idle");
        sessionStorage.getItem("firebaseUser");
        let c = (0, r.I0)(),
          u = (0, r.v9)((e) => e.enterpriseDetail.enterpriseDetail),
          d = (0, r.v9)((e) => e.enterpriseProjectInfo.projectInfo),
          { refetch: h } = (0, l.z)(),
          {
            owned_project: g,
            owned_project_processed: f,
            reviewing_claimed_project: p,
            project_url: w,
            project_favicon_url: m,
          } = null != u ? u : {},
          x = (0, o.useCallback)(
            (e) => {
              c((0, a.cK)(e));
            },
            [c, a.cK]
          ),
          getData = async () => {
            if (g && f) {
              n("loading");
              let e = await (0, s.NU)(g);
              await x(e), n("success");
            } else if (p) {
              n("loading");
              let e = await (0, s.NU)(p);
              await x(e), n("success");
            } else if (w) {
              var t;
              let i = (function (e) {
                  e.startsWith("http://") ||
                    e.startsWith("https://") ||
                    (e = "http://".concat(e));
                  try {
                    let t = new URL(e),
                      { hostname: n } = t,
                      i = n.split("."),
                      r = i.slice(-2, -1)[0];
                    return r;
                  } catch (e) {
                    return null;
                  }
                })(w),
                r =
                  i &&
                  (null == i
                    ? void 0
                    : null === (t = i.charAt(0)) || void 0 === t
                    ? void 0
                    : t.toUpperCase()) + (null == i ? void 0 : i.slice(1)),
                o = {
                  img_url: m || (null == e ? void 0 : e.photo_url),
                  name: r,
                  contract_address: "",
                  wallet_amount: "",
                };
              await x(o), n("success");
            }
          },
          refetch = async () => {
            await h(), await getData();
          },
          fetchProjectInfo = async (e) => {
            n("loading");
            let t = await (0, s.NU)(e);
            return await x(t), n("success"), t;
          };
        return (
          (0, o.useEffect)(() => {
            (null == d ? void 0 : d.img_url) || !u || getData();
          }, [null == d ? void 0 : d.img_url, u]),
          (0, o.useEffect)(() => {
            u && getData();
          }, [
            null == u ? void 0 : u.owned_project,
            null == u ? void 0 : u.reviewing_claimed_project,
          ]),
          {
            data: d,
            refetch,
            status: t,
            onUpdate: x,
            onFetch: fetchProjectInfo,
          }
        );
      }
    },
    20914: function (e, t, n) {
      "use strict";
      var i = n(85893),
        r = n(10899),
        o = n(57747);
      n(67294),
        (t.Z = (e) => {
          let {
            children: t,
            bg: n,
            padding: a = "16px",
            w: s,
            borderColor: l,
            h: c,
            className: u,
          } = e;
          return (0, i.jsxs)(o.xu, {
            position: "relative",
            borderRadius: "12px",
            bg: n || "transparent",
            bgSize: "cover",
            bgImage: n || "",
            w: s,
            h: c,
            className: (0, r.cn)(u),
            children: [
              (0, i.jsx)(o.xu, {
                position: "absolute",
                top: "-1px",
                left: "-1px",
                w: "24px",
                h: "24px",
                borderTop: "2px solid #6235D0",
                borderLeft: "2px solid #6235D0",
                borderTopLeftRadius: "12px",
                zIndex: 3,
                borderColor: l || "",
              }),
              (0, i.jsx)(o.xu, {
                position: "absolute",
                top: "-1px",
                right: "-1px",
                w: "24px",
                h: "24px",
                borderTop: "2px solid #6235D0",
                borderRight: "2px solid #6235D0",
                borderTopRightRadius: "12px",
                zIndex: 3,
                borderColor: l || "",
              }),
              (0, i.jsx)(o.xu, {
                position: "absolute",
                bottom: "-1px",
                left: "-1px",
                w: "24px",
                h: "24px",
                borderBottom: "2px solid #6235D0",
                borderLeft: "2px solid #6235D0",
                borderBottomLeftRadius: "12px",
                zIndex: 3,
                borderColor: l || "",
              }),
              (0, i.jsx)(o.xu, {
                position: "absolute",
                bottom: "-1px",
                right: "-1px",
                w: "24px",
                h: "24px",
                borderBottom: "2px solid #6235D0",
                borderRight: "2px solid #6235D0",
                borderBottomRightRadius: "12px",
                zIndex: 3,
                borderColor: l || "",
              }),
              (0, i.jsx)(o.xu, {
                position: "relative",
                zIndex: 1,
                p: a,
                border: "1px solid #31325e",
                borderRadius: "12px",
                h: "full",
                children: t,
              }),
            ],
          });
        });
    },
    48473: function (e, t, n) {
      "use strict";
      var i = n(85893),
        r = n(57747),
        o = n(93717),
        a = n(71293),
        s = n(5460),
        l = n(67294),
        c = n(92321),
        u = n(85518),
        d = n(62664);
      t.Z = function (e) {
        let {
            name: t,
            logo: n,
            onClick: h,
            isLoginPage: g,
            isWeb3: f,
            children: p,
          } = e,
          { address: w, isConnected: m } = (0, c.m)(),
          x = (0, l.useRef)(null),
          web3ConnectClick = async () => {
            if (!f || (w && m)) null == h || h();
            else {
              var e, t;
              null === (t = x.current) ||
                void 0 === t ||
                null === (e = t.querySelector("button")) ||
                void 0 === e ||
                e.click();
              return;
            }
          };
        return (0, i.jsx)(
          r.xu,
          {
            position: "relative",
            className: "my-1 ",
            bg: f
              ? "radial-gradient(at right bottom, #af9cfd 20%, #c8a5e7 60%, #fff 90%)"
              : "transparent",
            border: "1px solid #FFFFFF33",
            display: "flex",
            flexDir: "row",
            alignItems: "center",
            rounded: "full",
            width: "100%",
            overflow: "hidden",
            cursor: "pointer",
            onClick: web3ConnectClick,
            _before: {
              content: '""',
              position: "absolute",
              top: "-1px",
              left: "-1px",
              right: "-1px",
              bottom: "-1px",
              borderRadius: "inherit",
              padding: "2px",
              background:
                "conic-gradient(from 179.41deg at 50% 50%, rgba(162, 145, 218, 0.757761) -58.32deg, #C8A5E7 17.02deg, #FFFFFF 75.35deg, #AF9CFD 139.86deg, rgba(255, 255, 255, 0.501806) 170.65deg, rgba(162, 145, 218, 0.61) 207.01deg, #E5E7FC 262.75deg, rgba(162, 145, 218, 0.757761) 301.68deg, #C8A5E7 377.02deg)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              maskComposite: "exclude",
            },
            children: f
              ? (0, i.jsxs)(o.k, {
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  height: u.tq ? "44px" : "56px",
                  py: u.tq ? "" : "14px",
                  children: [
                    (0, i.jsx)(a.x, {
                      borderRadius: "90px",
                      color: "#000",
                      fontSize: 16,
                      fontWeight: 500,
                      textAlign: "center",
                      zIndex: 1e3,
                      children: "CONNECT WALLET",
                    }),
                    (0, i.jsx)(r.xu, {
                      ref: x,
                      style: { display: "none" },
                      children: (0, i.jsx)(d.NL, {}),
                    }),
                  ],
                })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    n &&
                      (0, i.jsx)(s.E, {
                        alt: "checked",
                        src: n,
                        width: 54,
                        height: 54,
                        rounded: "full",
                        mx: "6px",
                        p: "1px",
                      }),
                    p
                      ? (0, i.jsx)(i.Fragment, { children: p })
                      : (0, i.jsx)(r.xu, {
                          children: (0, i.jsx)(a.x, {
                            fontSize: u.tq ? 10 : 14,
                            color: "#D0D0D0",
                            fontWeight: "500",
                            textAlign: "left",
                            children: "CONTINUE WITH ".concat(t.toUpperCase()),
                          }),
                        }),
                  ],
                }),
          },
          t
        );
      };
    },
    24284: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return useLoginByGoogle;
        },
      });
      var i = n(25556),
        r = n(22326),
        o = n(34673),
        a = n(77132),
        s = n(29173);
      function useLoginByGoogle() {
        let e = i.basicConfig.auth.servicesBasicUrl,
          { onSetUser: t, onUpdateUser: n, setLoading: l } = (0, o.c)(),
          { onLink: c, onSignin: u } = (0, s.Z)({ BASIC_URL: e });
        async function handleGoogleSigninFailure(e) {}
        async function handleSignin() {
          try {
            let e = new a.hJ(),
              t = null;
            try {
              t = await (0, a.rh)(r.I8, e);
            } catch (e) {
              if (!(t = await handleGoogleSigninFailure(e)))
                throw Error("link failure");
            } finally {
              null == l || l(!1);
            }
            let n = await t.user.getIdToken();
            if (!n) throw Error("token is null");
            return { credential: t, token: n };
          } catch (e) {
            throw Error("login failure");
          }
        }
        return {
          onSignin: async function (e) {
            let { userType: n, isSignUp: i, inviteCode: r } = e;
            try {
              null == l || l(!0);
              let { credential: e, token: o } = await handleSignin(),
                a = await u({
                  token: o,
                  userType: n,
                  isSignUp: i,
                  ...(r && i && { referralCode: null != r ? r : "" }),
                });
              return (
                a && t({ credential: e, user: a }),
                { result: a, action: "signin", isSuccess: !0 }
              );
            } catch (e) {
              var o;
              return (
                null == l || l(!1),
                {
                  result: void 0,
                  action: "signin",
                  isSuccess: !1,
                  error: e,
                  errorCode:
                    null == e
                      ? void 0
                      : null === (o = e.response) || void 0 === o
                      ? void 0
                      : o.status,
                }
              );
            }
          },
          onLink: async function (e) {
            let { userType: t, accessToken: i, isSignUp: o, media_type: a } = e;
            try {
              var s;
              null == l || l(!0);
              let e =
                  null != i
                    ? i
                    : await (null === (s = r.I8.currentUser) || void 0 === s
                        ? void 0
                        : s.getIdToken()),
                a = r.I8.currentUser;
              if (!e || !a) throw Error("No preToken received");
              let u = new Promise((e) => {
                setTimeout(() => {
                  null == l || l(!1), e();
                }, 5e3);
              });
              try {
                let { credential: i, token: r } = await handleSignin(),
                  s = await c({
                    token: r,
                    preToken: e,
                    userType: t,
                    isSignUp: o,
                    media_type: "GOOGLE",
                  });
                if (!s) throw Error("No bluwhaleUser received");
                return (
                  n({ firebaseUser: a, token: e, user: s }),
                  { result: s, action: "link", isSuccess: !0 }
                );
              } catch (t) {
                let e = await handleGoogleSigninFailure(t);
                if (!e) throw Error("link failure");
              } finally {
                await u;
              }
            } catch (e) {
              return {
                result: void 0,
                action: "link",
                isSuccess: !1,
                error: e,
              };
            } finally {
              null == l || l(!1);
            }
          },
        };
      }
    },
    66929: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return useLoginByLinkedin;
        },
      });
      var i = n(22326),
        r = n(34673),
        o = n(29173),
        a = n(25556),
        s = n(76380);
      function useLoginByLinkedin() {
        let e = a.basicConfig.auth.servicesBasicUrl,
          t = a.basicConfig.auth.linkedinClientId,
          { onSetUser: n, onUpdateUser: l, setLoading: c } = (0, r.c)(),
          {
            onSignin: u,
            onLink: d,
            onLinkedinSignin: h,
          } = (0, o.Z)({ BASIC_URL: e }),
          g = window.location.origin ? window.location.origin : "",
          f = "".concat(g, "/login/callback"),
          p = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "".concat(g, "/login/callback");
            return "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id="
              .concat(e, "&redirect_uri=")
              .concat(t, "&scope=")
              .concat("openid%20profile%20email", "&state=")
              .concat("random-string-for-csrf-protection");
          })(null != t ? t : "", f),
          w = (0, s.Z)(p, { height: 600, width: 600 });
        async function handleSignin() {
          try {
            let e = await w();
            if (!e) throw Error("PopupWindow No result received");
            let t = await h({ ...e, redirect_uri: f });
            if (!t) throw Error("LinkedinSignin No result received");
            return t;
          } catch (e) {
            throw (null == c || c(!1), Error("handleSignin failure"));
          }
        }
        return {
          onSignin: async function (e) {
            let { userType: t, isSignUp: i, inviteCode: r } = e;
            try {
              null == c || c(!0);
              let { token: e, credential: o } = await handleSignin(),
                a = await u({
                  token: e,
                  userType: t,
                  isSignUp: i,
                  ...(r && i && { referralCode: null != r ? r : "" }),
                });
              return (
                a && n({ credential: o, user: a }),
                null == c || c(!1),
                { result: a, action: "signin", isSuccess: !0 }
              );
            } catch (e) {
              return (
                null == c || c(!1),
                { result: void 0, action: "signin", isSuccess: !1, error: e }
              );
            }
          },
          onLink: async function (e) {
            let { accessToken: t, userType: n, media_type: r } = e;
            try {
              var o;
              null == c || c(!0);
              let e =
                  null != t
                    ? t
                    : await (null === (o = i.I8.currentUser) || void 0 === o
                        ? void 0
                        : o.getIdToken()),
                r = i.I8.currentUser;
              if (!e || !r)
                throw (null == c || c(!1), Error("No preToken received"));
              let { token: a, credential: s } = await handleSignin(),
                u = await d({
                  token: a,
                  preToken: e,
                  userType: n,
                  media_type: "LINKEDIN",
                });
              if ((null == c || c(!1), !u))
                throw Error("No bluwhaleUser received");
              return (
                l({ firebaseUser: r, token: e, user: u }),
                { result: u, action: "link", isSuccess: !0 }
              );
            } catch (e) {
              return (
                null == c || c(!1),
                { result: void 0, action: "link", isSuccess: !1, error: e }
              );
            }
          },
        };
      }
    },
    9309: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return useLoginByTwitter;
        },
      });
      var i = n(22326),
        r = n(34673),
        o = n(77132),
        a = n(29173),
        s = n(25556);
      function useLoginByTwitter() {
        let e = s.basicConfig.auth.servicesBasicUrl,
          {
            onSetUser: t,
            onUpdateUser: n,
            user: l,
            setLoading: c,
          } = (0, r.c)(),
          { onSignin: u, onLink: d } = (0, a.Z)({ BASIC_URL: e });
        async function handleTwitterLoginFailure(e) {
          let t = o.c4.credentialFromError(e),
            { email: n } = e.customData,
            r = null;
          try {
            r = await (0, o.Nr)(i.I8, n);
          } catch (e) {}
          if (!r) throw Error("signInMethods is null");
          let a = r && r.length > 0 ? r[0].split(".")[0] : "google",
            s = i.aI[a];
          s.setCustomParameters({ login_hint: n });
          let l = await (0, o.rh)(i.I8, s);
          if (!t) throw Error("credential is null");
          try {
            let e = await (0, o.ZJ)(l.user, t);
            return e;
          } catch (e) {
            throw Error("linkWithCredential failure");
          }
        }
        async function handleSignin() {
          try {
            let e = new o.c4(),
              t = null;
            try {
              t = await (0, o.rh)(i.I8, e);
            } catch (e) {
              if (
                ((t = await handleTwitterLoginFailure(e)),
                null == c || c(!1),
                !t)
              )
                throw Error("link failure");
            }
            let n = await t.user.getIdToken();
            if (!n) throw (null == c || c(!1), Error("token is null"));
            return { credential: t, token: n };
          } catch (e) {
            throw (null == c || c(!1), Error("login failure"));
          }
        }
        return {
          onSignin: async function (e) {
            let { userType: n, isSignUp: i, inviteCode: r } = e;
            try {
              null == c || c(!0);
              let { credential: e, token: o } = await handleSignin(),
                a = await u({
                  token: o,
                  userType: n,
                  isSignUp: i,
                  ...(r && i && { referralCode: null != r ? r : "" }),
                });
              return (
                a && t({ credential: e, user: a }),
                { result: a, action: "signin", isSuccess: !0 }
              );
            } catch (e) {
              return (
                null == c || c(!1),
                { result: void 0, action: "signin", isSuccess: !1, error: e }
              );
            }
          },
          onLink: async function (e) {
            let { accessToken: t, userType: r, isSignUp: o, media_type: a } = e;
            try {
              var s;
              null == c || c(!0);
              let e =
                  null != t
                    ? t
                    : await (null === (s = i.I8.currentUser) || void 0 === s
                        ? void 0
                        : s.getIdToken()),
                a = i.I8.currentUser;
              if (!e || !a) throw Error("No preToken received");
              let { credential: l, token: u } = await handleSignin(),
                h = await d({
                  token: u,
                  preToken: e,
                  userType: r,
                  isSignUp: o,
                  media_type: "TWITTER",
                });
              if ((null == c || c(!1), !h))
                throw Error("No bluwhaleUser received");
              return (
                n({ firebaseUser: a, token: e, user: h }),
                { result: h, action: "link", isSuccess: !0 }
              );
            } catch (e) {
              return (
                null == c || c(!1),
                { result: void 0, action: "link", isSuccess: !1, error: e }
              );
            }
          },
        };
      }
    },
    4212: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return useLoginByWeb3;
        },
      });
      var i = n(22326),
        r = n(34673),
        o = n(44328),
        a = n(20486),
        s = n(52150),
        l = n(43194),
        c = n(14444),
        u = n(92321),
        d = n(30820),
        h = n(96754),
        g = n(67294),
        f = n(11163),
        p = n(25556),
        w = n(29173);
      function useLoginByWeb3(e) {
        let { web3Provider: t = "metamask" } = e,
          n = p.basicConfig.auth.servicesBasicUrl;
        (0, f.useRouter)();
        let { address: m, isConnected: x, chainId: v } = (0, u.m)(),
          { disconnectAsync: y } = (0, d.q)(),
          { signMessageAsync: b } = (0, h.Q)(),
          {
            connectMetaMask: k,
            connectWalletConnect: C,
            connectCoinbase: E,
            connectOkxWallet: I,
            connectBybitWallet: S,
            connectGateIOWallet: j,
          } = (function () {
            let { connectAsync: e } = (0, o.$)();
            return {
              connectMetaMask: () => e({ connector: (0, a.O)() }),
              connectWalletConnect: () =>
                e({
                  connector: (0, c.a)({
                    projectId: "3fcc6bba6f1de962d911bb5b5c3dba68",
                  }),
                }),
              connectCoinbase: () => e({ connector: (0, s.D)() }),
              connectOkxWallet: () =>
                e({ connector: (0, l.L)({ target: "metaMask" }) }),
              connectBybitWallet: () =>
                e({ connector: (0, l.L)({ target: "metaMask" }) }),
              connectGateIOWallet: () =>
                e({ connector: (0, l.L)({ target: "metaMask" }) }),
            };
          })(),
          { user: F, onSetUser: _, setLoading: N, loading: D } = (0, r.c)(),
          {
            onFirebaseWeb3Signin: L,
            onLink: A,
            onSignin: U,
          } = (0, w.Z)({ BASIC_URL: n }),
          [P, T] = (0, g.useState)(!1),
          [z, M] = (0, g.useState)({ account: void 0, chain: void 0 });
        async function init(e) {
          try {
            let t;
            switch ((x && "mobile" !== e && (await y()), e)) {
              case "metamask":
                t = await k();
                break;
              case "walletconnect":
                t = await C();
                break;
              case "coinbase":
                t = await E();
                break;
              case "okxwallet":
                t = await I();
                break;
              case "bybitwallet":
                t = await S();
                break;
              case "gateiowallet":
                t = await j();
                break;
              default:
                throw Error("Invalid provider");
            }
            let { accounts: n, chainId: i } = t,
              r = null == n ? void 0 : n[0];
            return { account: r, chainId: i };
          } catch (e) {
            throw Error("connectAsync error: ".concat(e));
          }
        }
        async function signMessage(e) {
          try {
            return await b({ message: e });
          } catch (e) {
            return;
          }
        }
        async function web3Sign(e) {
          let { provider: t, type: n } = e;
          if ("mobile" !== t) {
            let { account: e, chainId: i } = await init(t),
              r = JSON.stringify({ address: e, chain_id: i, type: n });
            if (!P) {
              let t = await signMessage(r);
              if ((null == N || N(!0), !t))
                throw (null == N || N(!1), Error("No signature received"));
              let n = await L({ address: e, message: r, signature: t });
              if (!(null == n ? void 0 : n.token))
                throw (null == N || N(!1), Error("No firebaseToken received"));
              return n;
            }
          } else {
            let e = JSON.stringify({ address: m, chain_id: v, type: n });
            if (!P)
              try {
                T(!0);
                let t = await signMessage(e);
                if ((null == N || N(!0), !t))
                  throw (null == N || N(!1), Error("No signature received"));
                let n = await L({ address: m, message: e, signature: t });
                if (!(null == n ? void 0 : n.token))
                  throw (
                    (null == N || N(!1), Error("No firebaseToken received"))
                  );
                return n;
              } catch (e) {
                throw (null == N || N(!1), e);
              } finally {
                null == N || N(!1), T(!1);
              }
          }
        }
        return {
          onSignin: async function (e) {
            let { provider: t, userType: n, referralCode: i } = e;
            try {
              let { credential: e, token: r } = await web3Sign({
                  provider: t,
                  type: "signin",
                }),
                o = await U({
                  token: r,
                  userType: n,
                  isSignUp: !0,
                  referralCode: i,
                });
              if (!o) throw Error("No result received");
              return (
                _({ user: o, credential: e }),
                {
                  result: { user: o, credential: e },
                  action: "signin",
                  isSuccess: !0,
                }
              );
            } catch (e) {
              return (
                null == N || N(!1),
                { result: void 0, action: "signin", isSuccess: !1, error: e }
              );
            }
          },
          onLink: async function (e) {
            let { accessToken: t, provider: n, userType: r } = e;
            try {
              var o;
              if (!t) throw Error("No accessToken received");
              let { credential: e, token: a } = await web3Sign({
                  provider: n,
                  type: "link",
                }),
                s =
                  null != t
                    ? t
                    : await (null === (o = i.I8.currentUser) || void 0 === o
                        ? void 0
                        : o.getIdToken()),
                l = await A({
                  token: a,
                  preToken: s,
                  userType: r,
                  isSignUp: !0,
                });
              if (!l) throw Error("No bluwhaleUser received");
              return (
                _({ user: l, credential: e }),
                {
                  result: { user: l, credential: e },
                  action: "link",
                  isSuccess: !0,
                }
              );
            } catch (e) {
              return (
                null == N || N(!1),
                { result: void 0, action: "link", isSuccess: !1, error: e }
              );
            }
          },
          signingMessage: P,
          onConnect: init,
        };
      }
    },
    76380: function (e, t, n) {
      "use strict";
      var i = n(67294);
      t.Z = function (e, t) {
        let { height: n, width: r } = t,
          o =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "linkedin-login",
          a = (0, i.useRef)(null),
          s = (0, i.useCallback)(
            () =>
              new Promise((t, i) => {
                a.current = window.open(
                  e,
                  "",
                  "height=".concat(n, ",width=").concat(r)
                );
                let handleMessage = (e) => {
                  e.origin === window.location.origin &&
                    e.data.key === o &&
                    (t(e.data.value),
                    window.removeEventListener("message", handleMessage));
                };
                window.addEventListener("message", handleMessage);
                let s = setInterval(() => {
                  null === a.current &&
                    (clearInterval(s),
                    window.removeEventListener("message", handleMessage),
                    i(Error("Popup has been closed")));
                }, 500);
                setTimeout(() => {
                  a.current && a.current.close(),
                    t(void 0),
                    window.removeEventListener("message", handleMessage),
                    clearInterval(s);
                }, 3e4);
              }),
            [e, n, r]
          );
        return s;
      };
    },
    10899: function (e, t, n) {
      "use strict";
      n.d(t, {
        cn: function () {
          return cn;
        },
      });
      var i = n(86010),
        r = n(98388);
      function cn() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, r.m6)((0, i.clsx)(t));
      }
    },
    14681: function () {},
    9008: function (e, t, n) {
      e.exports = n(79201);
    },
    5418: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return u;
        },
      });
      var i = n(85970),
        r = n(16554),
        o = n(77030),
        a = n(33179),
        s = n(13314),
        l = n(25432),
        c = n(85893),
        u = (0, r.G)(function (e, t) {
          var n;
          let r = (0, o.mq)("FormLabel", e),
            u = (0, a.Lr)(e),
            {
              className: h,
              children: g,
              requiredIndicator: f = (0, c.jsx)(d, {}),
              optionalIndicator: p = null,
              ...w
            } = u,
            m = (0, i.NJ)(),
            x =
              null != (n = null == m ? void 0 : m.getLabelProps(w, t))
                ? n
                : { ref: t, ...w };
          return (0,
          c.jsxs)(s.m.label, { ...x, className: (0, l.cx)("chakra-form__label", u.className), __css: { display: "block", textAlign: "start", ...r }, children: [g, (null == m ? void 0 : m.isRequired) ? f : p] });
        });
      u.displayName = "FormLabel";
      var d = (0, r.G)(function (e, t) {
        let n = (0, i.NJ)(),
          r = (0, i.e)();
        if (!(null == n ? void 0 : n.isRequired)) return null;
        let o = (0, l.cx)("chakra-form__required-indicator", e.className);
        return (0,
        c.jsx)(s.m.span, { ...(null == n ? void 0 : n.getRequiredIndicatorProps(e, t)), __css: r.requiredIndicator, className: o });
      });
      d.displayName = "RequiredIndicator";
    },
    26105: function (e, t, n) {
      "use strict";
      n.d(t, {
        J1: function () {
          return f;
        },
      });
      var i = n(85970),
        r = n(36948),
        o = n(55227),
        a = n(16554),
        s = n(77030),
        l = n(33179),
        c = n(13314),
        u = n(25432),
        d = n(85893),
        [h, g] = (0, o.k)({
          name: "FormErrorStylesContext",
          errorMessage:
            "useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" ",
        }),
        f = (0, a.G)((e, t) => {
          let n = (0, s.jC)("FormError", e),
            r = (0, l.Lr)(e),
            o = (0, i.NJ)();
          return (null == o ? void 0 : o.isInvalid)
            ? (0, d.jsx)(h, {
                value: n,
                children: (0, d.jsx)(c.m.div, {
                  ...(null == o ? void 0 : o.getErrorMessageProps(r, t)),
                  className: (0, u.cx)(
                    "chakra-form__error-message",
                    e.className
                  ),
                  __css: { display: "flex", alignItems: "center", ...n.text },
                }),
              })
            : null;
        });
      (f.displayName = "FormErrorMessage"),
        ((0, a.G)((e, t) => {
          let n = g(),
            o = (0, i.NJ)();
          if (!(null == o ? void 0 : o.isInvalid)) return null;
          let a = (0, u.cx)("chakra-form__error-icon", e.className);
          return (0, d.jsx)(r.J, {
            ref: t,
            "aria-hidden": !0,
            ...e,
            __css: n.icon,
            className: a,
            children: (0, d.jsx)("path", {
              fill: "currentColor",
              d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",
            }),
          });
        }).displayName = "FormErrorIcon");
    },
    72923: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return i;
        },
      });
      var i = (0, n(24027).I)({
        d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",
        displayName: "ArrowBackIcon",
      });
    },
    69867: function (e, t, n) {
      "use strict";
      n.d(t, {
        B1: function () {
          return s;
        },
      });
      var i = n(25432),
        r = [
          "borders",
          "breakpoints",
          "colors",
          "components",
          "config",
          "direction",
          "fonts",
          "fontSizes",
          "fontWeights",
          "letterSpacings",
          "lineHeights",
          "radii",
          "shadows",
          "sizes",
          "space",
          "styles",
          "transition",
          "zIndices",
        ],
        o = n(92717),
        a = n(38554);
      function isFunction(e) {
        return "function" == typeof e;
      }
      var createExtendTheme = (e) =>
          function (...t) {
            var n;
            let o = [...t],
              s = t[t.length - 1];
            return (
              ((n = s),
              (0, i.Kn)(n) &&
                r.every((e) => Object.prototype.hasOwnProperty.call(n, e)) &&
                o.length > 1)
                ? (o = o.slice(0, o.length - 1))
                : (s = e),
              (function (...e) {
                return (t) => e.reduce((e, t) => t(e), t);
              })(
                ...o.map(
                  (e) => (t) =>
                    isFunction(e)
                      ? e(t)
                      : (function (...e) {
                          return a({}, ...e, mergeThemeCustomizer);
                        })(t, e)
                )
              )(s)
            );
          },
        s = createExtendTheme(o.rS);
      function mergeThemeCustomizer(e, t, n, i) {
        if (
          (isFunction(e) || isFunction(t)) &&
          Object.prototype.hasOwnProperty.call(i, n)
        )
          return (...n) => {
            let i = isFunction(e) ? e(...n) : e,
              r = isFunction(t) ? t(...n) : t;
            return a({}, i, r, mergeThemeCustomizer);
          };
      }
      createExtendTheme(o.wE);
    },
    20486: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return metaMask;
        },
      });
      var i = n(8677),
        r = n(78939),
        o = n(12936),
        a = n(93227),
        s = n(45775),
        l = n(39028),
        c = n(92106),
        u = n(7760),
        d = n(60229),
        h = n(95946);
      function metaMask(e = {}) {
        let t, g, f, p, w, m, x, v;
        return (0, i.K)((i) => ({
          id: "metaMaskSDK",
          name: "MetaMask",
          rdns: ["io.metamask", "io.metamask.mobile"],
          type: metaMask.type,
          async setup() {
            let e = await this.getProvider();
            e?.on &&
              (m || ((m = this.onConnect.bind(this)), e.on("connect", m)),
              p ||
                ((p = this.onAccountsChanged.bind(this)),
                e.on("accountsChanged", p)));
          },
          async connect({ chainId: n, isReconnecting: i } = {}) {
            let r = await this.getProvider();
            x || ((x = this.onDisplayUri), r.on("display_uri", x));
            let o = [];
            i && (o = await this.getAccounts().catch(() => []));
            try {
              let i, a;
              if (!o?.length) {
                if (e.connectAndSign || e.connectWith)
                  e.connectAndSign
                    ? (i = await t.connectAndSign({ msg: e.connectAndSign }))
                    : e.connectWith &&
                      (a = await t.connectWith({
                        method: e.connectWith.method,
                        params: e.connectWith.params,
                      })),
                    (o = await this.getAccounts());
                else {
                  let e = await t.connect();
                  o = e.map((e) => (0, s.K)(e));
                }
              }
              let c = await this.getChainId();
              if (n && c !== n) {
                let e = await this.switchChain({ chainId: n }).catch((e) => {
                  if (e.code === l.ab.code) throw e;
                  return { id: c };
                });
                c = e?.id ?? c;
              }
              return (
                x && (r.removeListener("display_uri", x), (x = void 0)),
                i
                  ? r.emit("connectAndSign", {
                      accounts: o,
                      chainId: c,
                      signResponse: i,
                    })
                  : a &&
                    r.emit("connectWith", {
                      accounts: o,
                      chainId: c,
                      connectWithResponse: a,
                    }),
                m && (r.removeListener("connect", m), (m = void 0)),
                p ||
                  ((p = this.onAccountsChanged.bind(this)),
                  r.on("accountsChanged", p)),
                w ||
                  ((w = this.onChainChanged.bind(this)),
                  r.on("chainChanged", w)),
                v ||
                  ((v = this.onDisconnect.bind(this)), r.on("disconnect", v)),
                { accounts: o, chainId: c }
              );
            } catch (e) {
              if (e.code === l.ab.code) throw new l.ab(e);
              if (e.code === l.pT.code) throw new l.pT(e);
              throw e;
            }
          },
          async disconnect() {
            let e = await this.getProvider();
            w && (e.removeListener("chainChanged", w), (w = void 0)),
              v && (e.removeListener("disconnect", v), (v = void 0)),
              m || ((m = this.onConnect.bind(this)), e.on("connect", m)),
              await t.terminate();
          },
          async getAccounts() {
            let e = await this.getProvider(),
              t = await e.request({ method: "eth_accounts" });
            return t.map((e) => (0, s.K)(e));
          },
          async getChainId() {
            let e = await this.getProvider(),
              t =
                e.getChainId() || (await e?.request({ method: "eth_chainId" }));
            return Number(t);
          },
          async getProvider() {
            async function initProvider() {
              let a = await (async () => {
                  let { default: e } = await Promise.all([
                    n.e(5310),
                    n.e(7690),
                  ]).then(n.bind(n, 47972));
                  return "function" != typeof e &&
                    "function" == typeof e.default
                    ? e.default
                    : e;
                })(),
                s = {};
              for (let e of i.chains)
                s[(0, c.eC)(e.id)] = r.N({
                  chain: e,
                  transports: i.transports,
                })?.[0];
              t = new a({
                _source: "wagmi",
                forceDeleteProvider: !1,
                forceInjectProvider: !1,
                injectProvider: !1,
                ...e,
                readonlyRPCMap: s,
                dappMetadata: {
                  ...e.dappMetadata,
                  name: e.dappMetadata?.name ? e.dappMetadata?.name : "wagmi",
                  url: e.dappMetadata?.url
                    ? e.dappMetadata?.url
                    : "undefined" != typeof window
                    ? window.location.origin
                    : "https://wagmi.sh",
                },
                useDeeplink: e.useDeeplink ?? !0,
              });
              let l = await t.init(),
                u = l?.activeProvider ? l.activeProvider : t.getProvider();
              if (!u) throw new o.M();
              return u;
            }
            return g || (f || (f = initProvider()), (g = await f)), g;
          },
          async isAuthorized() {
            try {
              let e = await (0, u.J)(
                () => (0, d.F)(() => this.getAccounts(), { timeout: 200 }),
                { delay: 201, retryCount: 3 }
              );
              return !!e.length;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let n = await this.getProvider(),
              r = i.chains.find((e) => e.id === t);
            if (!r) throw new l.x3(new a.X4());
            try {
              return (
                await n.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: (0, c.eC)(t) }],
                }),
                await waitForChainIdToSync(),
                await sendAndWaitForChangeEvent(t),
                r
              );
            } catch (i) {
              if (i.code === l.ab.code) throw new l.ab(i);
              if (4902 === i.code || i?.data?.originalError?.code === 4902)
                try {
                  return (
                    await n.request({
                      method: "wallet_addEthereumChain",
                      params: [
                        {
                          blockExplorerUrls: (() => {
                            let { default: t, ...n } = r.blockExplorers ?? {};
                            return e?.blockExplorerUrls
                              ? e.blockExplorerUrls
                              : t
                              ? [t.url, ...Object.values(n).map((e) => e.url)]
                              : void 0;
                          })(),
                          chainId: (0, c.eC)(t),
                          chainName: e?.chainName ?? r.name,
                          iconUrls: e?.iconUrls,
                          nativeCurrency: e?.nativeCurrency ?? r.nativeCurrency,
                          rpcUrls: e?.rpcUrls?.length
                            ? e.rpcUrls
                            : [r.rpcUrls.default?.http[0] ?? ""],
                        },
                      ],
                    }),
                    await waitForChainIdToSync(),
                    await sendAndWaitForChangeEvent(t),
                    r
                  );
                } catch (e) {
                  if (e.code === l.ab.code) throw new l.ab(e);
                  throw new l.x3(e);
                }
              throw new l.x3(i);
            }
            async function waitForChainIdToSync() {
              await (0, u.J)(
                async () => {
                  let e = (0, h.ly)(await n.request({ method: "eth_chainId" }));
                  if (e !== t)
                    throw Error("User rejected switch after adding network.");
                  return e;
                },
                { delay: 50, retryCount: 20 }
              );
            }
            async function sendAndWaitForChangeEvent(e) {
              await new Promise((t) => {
                let listener = (n) => {
                  "chainId" in n &&
                    n.chainId === e &&
                    (i.emitter.off("change", listener), t());
                };
                i.emitter.on("change", listener),
                  i.emitter.emit("change", { chainId: e });
              });
            }
          },
          async onAccountsChanged(e) {
            if (0 === e.length) t.isExtensionActive() && this.onDisconnect();
            else if (i.emitter.listenerCount("connect")) {
              let e = (await this.getChainId()).toString();
              this.onConnect({ chainId: e });
            } else
              i.emitter.emit("change", { accounts: e.map((e) => (0, s.K)(e)) });
          },
          onChainChanged(e) {
            let t = Number(e);
            i.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let t = await this.getAccounts();
            if (0 === t.length) return;
            let n = Number(e.chainId);
            i.emitter.emit("connect", { accounts: t, chainId: n });
            let r = await this.getProvider();
            m && (r.removeListener("connect", m), (m = void 0)),
              p ||
                ((p = this.onAccountsChanged.bind(this)),
                r.on("accountsChanged", p)),
              w ||
                ((w = this.onChainChanged.bind(this)), r.on("chainChanged", w)),
              v || ((v = this.onDisconnect.bind(this)), r.on("disconnect", v));
          },
          async onDisconnect(e) {
            let t = await this.getProvider();
            (e && 1013 === e.code && t && (await this.getAccounts()).length) ||
              (i.emitter.emit("disconnect"),
              w && (t.removeListener("chainChanged", w), (w = void 0)),
              v && (t.removeListener("disconnect", v), (v = void 0)),
              m || ((m = this.onConnect.bind(this)), t.on("connect", m)));
          },
          onDisplayUri(e) {
            i.emitter.emit("message", { type: "display_uri", data: e });
          },
        }));
      }
      metaMask.type = "metaMask";
    },
  },
  function (e) {
    e.O(
      0,
      [8031, 1369, 8459, 1664, 220, 8578, 6203, 9774, 2888, 179],
      function () {
        return e((e.s = 73700));
      }
    ),
      (_N_E = e.O());
  },
]);
