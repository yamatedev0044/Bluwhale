"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6203],
  {
    98978: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return LoginButtons_EmailOtpLoginButton;
        },
      });
      var i = t(85893),
        o = t(20967),
        r = t(7963),
        l = t(57747),
        s = t(5460),
        a = t(11163),
        c = t(67294),
        u = t(48473),
        d = t(93717),
        p = t(7755),
        g = t(19778),
        f = t(14581),
        h = t(64859),
        x = t(71293),
        m = t(66205),
        b = t(54346),
        w = t(33090),
        v = t(93108),
        y = t(23152),
        S = t(20914),
        EmailOtpModal_EmailStep = function (e) {
          let {
            emailRef: n,
            onSubmit: t,
            setRecaptchaToken: o,
            onClose: l,
          } = e;
          (0, r.p)();
          let { getRecaptchaTokenAsync: s } = (0, y.Z)();
          return (0, i.jsx)(f.h, {
            bg: "rgba(29,28,30,0.7)",
            children: (0, i.jsx)(S.Z, {
              children: (0, i.jsxs)("div", {
                className: "p-4",
                children: [
                  (0, i.jsxs)(h.x, {
                    p: 0,
                    children: [
                      (0, i.jsx)(d.k, {
                        bg: "#6235D080",
                        fontWeight: 700,
                        fontSize: "16px",
                        letterSpacing: "0",
                        w: "full",
                        height: "36px",
                        py: "8px",
                        px: "16px",
                        mb: "12px",
                        borderRadius: "12px",
                        justifyContent: "space-between",
                        children: (0, i.jsx)(x.x, {
                          fontFamily: "Orbitron",
                          color: "#AF9CFD",
                          children: "LOG IN OR SIGN UP",
                        }),
                      }),
                      (0, i.jsx)(m.o, {
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                        color: "#AF9CFD",
                        fontSize: "12px",
                        zIndex: 10,
                        onClick: () => l(),
                      }),
                    ],
                  }),
                  (0, i.jsx)(b.f, {
                    p: 0,
                    mt: 10,
                    children: (0, i.jsxs)("div", {
                      className: "w-full flex flex-col gap-10",
                      children: [
                        (0, i.jsx)(w.I, {
                          id: "email",
                          type: "email",
                          ref: n,
                          placeholder: "your@email.com",
                          px: 4,
                          py: 3,
                          w: "100%",
                          h: "52px",
                          fontWeight: 600,
                          border: "1px solid",
                          borderColor: "rgba(229,231,252,0.3)",
                          bg: "rgba(229,231,252,0.1)",
                          borderRadius: "120px",
                          color: "zinc.400",
                          fontSize: "sm",
                          fontFamily: "Orbitron",
                        }),
                        (0, i.jsx)(v.z, {
                          type: "submit",
                          px: 10,
                          py: 2,
                          w: "full",
                          color: "#000",
                          fontSize: "16px",
                          fontWeight: "bold",
                          textTransform: "uppercase",
                          border: "1px solid",
                          borderColor: "violet.300",
                          h: "52px",
                          borderRadius: "full",
                          fontFamily: "Orbitron",
                          bgGradient:
                            "conic-gradient(from 178.7deg at 47.68% -121.43%, rgba(162, 145, 218, 0.757761) -58.32deg, #C8A5E7 17.02deg, #FFFFFF 75.35deg, #AF9CFD 139.86deg, rgba(255, 255, 255, 0.501806) 170.65deg, rgba(162, 145, 218, 0.61) 207.01deg, #E5E7FC 262.75deg, rgba(162, 145, 218, 0.757761) 301.68deg, #C8A5E7 377.02deg)",
                          _hover: { filter: "brightness(0.8)" },
                          onClick: t,
                          children: "Submit",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        k = t(72923),
        EmailOtpModal_OtpStep = function (e) {
          let {
            otpRef: n,
            onSubmit: t,
            onResend: o,
            onGoBack: r,
            onClose: l,
            email: s,
          } = e;
          return (0, i.jsx)(f.h, {
            bg: "rgba(29,28,30,0.7)",
            children: (0, i.jsx)(S.Z, {
              children: (0, i.jsxs)("div", {
                className: "p-4",
                children: [
                  (0, i.jsxs)(h.x, {
                    p: 0,
                    children: [
                      (0, i.jsxs)(d.k, {
                        bg: "#6235D080",
                        fontWeight: 700,
                        fontSize: "16px",
                        letterSpacing: "0",
                        w: "full",
                        height: "36px",
                        py: "8px",
                        px: "16px",
                        mb: "12px",
                        borderRadius: "12px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        children: [
                          (0, i.jsx)(k.R, {
                            name: "arrow-back",
                            color: "#AF9CFD",
                            onClick: r,
                            cursor: "pointer",
                            fontSize: "16px",
                            fontWeight: 700,
                          }),
                          (0, i.jsx)(x.x, {
                            fontFamily: "Orbitron",
                            color: "#AF9CFD",
                            children: "Enter OTP",
                          }),
                        ],
                      }),
                      (0, i.jsx)(m.o, {
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                        color: "#AF9CFD",
                        fontSize: "12px",
                        zIndex: 10,
                        onClick: () => l(),
                      }),
                    ],
                  }),
                  (0, i.jsx)(b.f, {
                    p: 0,
                    mt: 10,
                    children: (0, i.jsxs)("div", {
                      className: "w-full flex flex-col gap-10",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "flex flex-col justify-center",
                          children: [
                            (0, i.jsx)(x.x, {
                              fontSize: "16px",
                              color: "#FFF",
                              mb: 3,
                              fontFamily: "sans-serif",
                              fontWeight: 700,
                              align: "center",
                              children: "Enter confirmation code",
                            }),
                            (0, i.jsxs)(x.x, {
                              fontSize: "12px",
                              fontFamily: "sans-serif",
                              color: "#9098A0",
                              children: [
                                "Please check ",
                                (0, i.jsx)("strong", {
                                  className: "text-[#AEB9E1]",
                                  children: s,
                                }),
                                " for an email from bluwhale.ai and enter your code below.",
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          children: [
                            (0, i.jsx)(w.I, {
                              id: "otp",
                              type: "number",
                              ref: n,
                              placeholder: "Enter your OTP",
                              px: 4,
                              py: 3,
                              w: "100%",
                              h: "52px",
                              fontWeight: 600,
                              border: "1px solid",
                              borderColor: "rgba(229,231,252,0.3)",
                              bg: "rgba(229,231,252,0.1)",
                              borderRadius: "120px",
                              color: "zinc.400",
                              fontSize: "sm",
                              fontFamily: "Orbitron",
                            }),
                            (0, i.jsx)("div", {
                              onClick: o,
                              className:
                                "text-xs cursor-pointer w-full text-right pt-3 color-[#AF9CFD]",
                              children: "Resend",
                            }),
                          ],
                        }),
                        (0, i.jsx)(v.z, {
                          type: "submit",
                          px: 10,
                          py: 2,
                          w: "full",
                          color: "#000",
                          fontSize: "16px",
                          fontWeight: "bold",
                          textTransform: "uppercase",
                          border: "1px solid",
                          borderColor: "violet.300",
                          h: "52px",
                          borderRadius: "full",
                          fontFamily: "Orbitron",
                          bgGradient:
                            "conic-gradient(from 178.7deg at 47.68% -121.43%, rgba(162, 145, 218, 0.757761) -58.32deg, #C8A5E7 17.02deg, #FFFFFF 75.35deg, #AF9CFD 139.86deg, rgba(255, 255, 255, 0.501806) 170.65deg, rgba(162, 145, 218, 0.61) 207.01deg, #E5E7FC 262.75deg, rgba(162, 145, 218, 0.757761) 301.68deg, #C8A5E7 377.02deg)",
                          _hover: { filter: "brightness(0.8)" },
                          onClick: t,
                          children: "Submit OTP",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        j = t(27490),
        modules_EmailOtpModal = function (e) {
          var n;
          let { isOpen: t, onOpen: o, onClose: l, userType: s } = e,
            { getRecaptchaTokenAsync: a } = (0, y.Z)(),
            [u, f] = (0, c.useState)(""),
            [h, x] = (0, c.useState)(""),
            m = (0, c.useRef)(null),
            b = (0, c.useRef)(null),
            [w, v] = (0, c.useState)("email"),
            [S, k] = (0, c.useState)([]),
            [C, _] = (0, c.useState)(void 0),
            [E, F] = (0, c.useState)(null),
            O = (0, r.p)(),
            {
              onRequestOtp: A,
              emailSignin: L,
              fetchAccountList: U,
            } = (0, j.Z)(),
            handleEmailSubmit = async () => {
              var e;
              let n =
                  null === (e = m.current) || void 0 === e ? void 0 : e.value,
                t = await a("submit");
              if (n && t) {
                f(n);
                let e = await A({ email: n });
                if (e.error) {
                  O.closeAll(),
                    O({
                      description: "Send Otp Error : ".concat(e.error),
                      status: "error",
                      position: "top",
                    });
                  return;
                }
                v("otp");
              } else
                O.closeAll(),
                  O({
                    description: "reCAPTCHA verified failed",
                    status: "error",
                    position: "top",
                  });
            };
          async function handleOtpSubmit() {
            var e;
            let n = null === (e = b.current) || void 0 === e ? void 0 : e.value;
            if (!n || !u) {
              O.closeAll(),
                O({
                  description: "Invalid OTP or Invalid Email",
                  status: "error",
                  position: "top",
                });
              return;
            }
            let t = await L({
              email: u,
              otp: n,
              userType: s,
              isSignUp: !0,
              inviteCode: "",
            });
            if ("accounts" in t && (null == t ? void 0 : t.accounts))
              k(null == t ? void 0 : t.accounts),
                _(null == t ? void 0 : t.current_account);
            else if (!t) {
              O.closeAll(),
                O({
                  description: "Login Error",
                  status: "error",
                  position: "top",
                });
              return;
            }
            l();
          }
          async function handleResendOtp() {
            if (!u) return;
            let e = await A({ email: u });
            e ||
              (O.closeAll(),
              O({
                description: "Send Otp Error",
                status: "error",
                position: "top",
              }));
          }
          return (0, i.jsx)(d.k, {
            children: (0, i.jsxs)(p.u_, {
              isOpen: t,
              onClose: l,
              isCentered: !0,
              children: [
                (0, i.jsx)(g.Z, { backdropFilter: "blur(4px)" }),
                "email" === w
                  ? (0, i.jsx)(EmailOtpModal_EmailStep, {
                      emailRef: m,
                      onSubmit: handleEmailSubmit,
                      setRecaptchaToken: F,
                      onClose: l,
                    })
                  : (0, i.jsx)(EmailOtpModal_OtpStep, {
                      otpRef: b,
                      onSubmit: handleOtpSubmit,
                      onResend: handleResendOtp,
                      email:
                        null === (n = m.current) || void 0 === n
                          ? void 0
                          : n.value,
                      onGoBack: () => v("email"),
                      onClose: l,
                    }),
              ],
            }),
          });
        },
        LoginButtons_EmailOtpLoginButton = function (e) {
          let {
              name: n = "email otp",
              logo: t = "",
              action: c = "signin",
              userType: d,
              isSignUp: p = !0,
              referralCode: g,
              from: f,
              isLoginPage: h,
            } = e,
            { isOpen: x, onOpen: m, onClose: b } = (0, o.q)();
          async function handleEmailOtpLoginin() {
            m();
          }
          return (
            (0, a.useRouter)(),
            (0, r.p)(),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(modules_EmailOtpModal, {
                  isOpen: x,
                  onClose: b,
                  onOpen: m,
                  userType: d,
                }),
                (0, i.jsx)(u.Z, {
                  name: "privy",
                  logo: t,
                  onClick: handleEmailOtpLoginin,
                  isLoginPage: h,
                  children: (0, i.jsx)(l.xu, {
                    display: "flex",
                    flexDir: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    className: "w-[100%]",
                    children: (0, i.jsx)(s.E, {
                      src: "/images/login/continuewithemail.png",
                    }),
                  }),
                }),
              ],
            })
          );
        };
    },
    69558: function (e, n, t) {
      var i = t(85893);
      t(67294);
      var o = t(48473),
        r = t(11163),
        l = t(7963),
        s = t(34673),
        a = t(66929),
        c = t(44304),
        u = t(1840);
      n.Z = function (e) {
        let {
            name: n,
            logo: t,
            action: d = "signin",
            userType: p,
            isSignUp: g = !0,
            from: f,
            inviteCode: h,
            mobileLinkSuccess: x,
            isLoginPage: m = !1,
          } = e,
          { onLink: b, onSignin: w } = (0, a.Z)(),
          { firebaseUser: v, setLoading: y } = (0, s.c)(),
          S = (0, r.useRouter)(),
          k = (0, l.p)();
        function handleRoute(e) {
          var n;
          if (!e.isSuccess) {
            "link" === e.action
              ? k({
                  description: "Link Error, pls check your social account",
                  status: "error",
                  position: "top",
                })
              : (k.closeAll(),
                k({
                  description: "".concat(d, " failure"),
                  position: "top",
                  status: "error",
                }));
            return;
          }
          if (x) return null == x ? void 0 : x();
          let t = new URLSearchParams(window.location.search);
          void 0 !== t.get("status") && t.delete("status");
          let i = {
            ...t,
            status: "success",
            ...(!!(null == e
              ? void 0
              : null === (n = e.result) || void 0 === n
              ? void 0
              : n.is_new_user) && { isNewUser: !0 }),
            from: f,
          };
          if (m) {
            S.push("/enterprise");
            return;
          }
          {
            let e =
              Object.keys(i).length > 0
                ? "?".concat(new URLSearchParams(i).toString())
                : "?status=success";
            S.push(e);
          }
        }
        async function onClick() {
          if (
            ("consumer" === p
              ? (0, c.B)(u.U.linksocial_choose, { social: "Linkedin" })
              : (0, c.B)(
                  g ? u.U.signUpSsocial_choose : u.U.signInSsocial_choose,
                  { social: "Linkedin" }
                ),
            g && !h)
          )
            return k({
              description: "Please input your invitation code before sign up",
              status: "error",
              position: "top",
            });
          let e = null == v ? void 0 : v.token,
            n = { userType: p, accessToken: e, isSignUp: g, inviteCode: h };
          if ("link" === d)
            try {
              let e = await b(n);
              (null == e ? void 0 : e.result) && handleRoute(e);
            } catch (e) {}
          else {
            let e = await w(n);
            (null == e ? void 0 : e.result) !== void 0 && handleRoute(e);
          }
          null == y || y(!1);
        }
        return (0, i.jsx)(o.Z, {
          name: n,
          logo: t,
          onClick: onClick,
          isLoginPage: m,
        });
      };
    },
    25040: function (e, n, t) {
      t.d(n, {
        tw: function () {
          return LoginButtons_GoogleLoginButton;
        },
        e3: function () {
          return LoginButtons_TwitterLoginButton;
        },
      });
      var i = t(85893);
      t(67294);
      var o = t(48473),
        r = t(24284),
        l = t(7963),
        s = t(11163),
        a = t(34673),
        c = t(44304),
        u = t(1840),
        LoginButtons_GoogleLoginButton = function (e) {
          let {
              name: n,
              logo: t,
              action: d = "signin",
              userType: p,
              isSignUp: g = !0,
              from: f,
              inviteCode: h,
              mobileLinkSuccess: x,
              isLoginPage: m = !1,
            } = e,
            { onLink: b, onSignin: w } = (0, r.Z)(),
            { firebaseUser: v, setLoading: y } = (0, a.c)(),
            S = (0, l.p)(),
            k = (0, s.useRouter)();
          function handleRoute(e) {
            var n;
            if (!e) return;
            if (!e.isSuccess) {
              "link" === e.action
                ? S({
                    description: "Link Error, pls check your social account",
                    status: "error",
                    position: "top",
                  })
                : (S.closeAll(),
                  S({
                    description: "".concat(d, " failure"),
                    position: "top",
                    status: "error",
                  }));
              return;
            }
            if (x) return null == x ? void 0 : x();
            let t = new URLSearchParams(window.location.search);
            void 0 !== t.get("status") && t.delete("status");
            let i = {
              ...t,
              status: "success",
              ...(!!(null == e
                ? void 0
                : null === (n = e.result) || void 0 === n
                ? void 0
                : n.is_new_user) && { isNewUser: !0 }),
              from: f,
            };
            if (m) {
              k.push("/enterprise");
              return;
            }
            {
              let e =
                Object.keys(i).length > 0
                  ? "?".concat(new URLSearchParams(i).toString())
                  : "?status=success";
              k.push(e);
            }
          }
          async function onClick() {
            if (
              ("consumer" === p
                ? (0, c.B)(u.U.linksocial_choose, { social: "Google" })
                : (0, c.B)(
                    g ? u.U.signUpSsocial_choose : u.U.signInSsocial_choose,
                    { social: "Google" }
                  ),
              g && !h)
            )
              return S({
                description: "Please input your invitation code before sign up",
                status: "error",
                position: "top",
              });
            let e = null == v ? void 0 : v.token,
              n = { userType: p, accessToken: e, isSignUp: g, inviteCode: h };
            if ("link" === d)
              try {
                let e = await b(n);
                (null == e ? void 0 : e.result) && handleRoute(e);
              } catch (e) {
              } finally {
                null == y || y(!1);
              }
            else {
              let e = await w(n);
              (null == e ? void 0 : e.result) !== void 0 && handleRoute(e);
            }
            null == y || y(!1);
          }
          return (0, i.jsx)(o.Z, {
            name: n,
            logo: t,
            onClick: onClick,
            isLoginPage: m,
          });
        },
        d = t(9309),
        LoginButtons_TwitterLoginButton = function (e) {
          let {
              name: n,
              logo: t,
              action: r = "signin",
              userType: p,
              isSignUp: g = !0,
              from: f,
              inviteCode: h,
              mobileLinkSuccess: x,
              isLoginPage: m = !1,
            } = e,
            { onLink: b, onSignin: w } = (0, d.Z)(),
            { firebaseUser: v, setLoading: y } = (0, a.c)(),
            S = (0, s.useRouter)(),
            k = (0, l.p)();
          async function onClick() {
            var e;
            if (
              ("consumer" === p
                ? (0, c.B)(u.U.linksocial_choose, { social: "Twitter" })
                : (0, c.B)(
                    g ? u.U.signUpSsocial_choose : u.U.signInSsocial_choose,
                    { social: "Twitter" }
                  ),
              g && !h)
            )
              return k({
                description: "Please input your invitation code before sign up",
                status: "error",
                position: "top",
              });
            let n = null == v ? void 0 : v.token,
              t = { userType: p, accessToken: n, isSignUp: g, inviteCode: h },
              i = "link" === r ? await b(t) : await w(t);
            if ((null == y || y(!1), !i.isSuccess)) {
              "link" === i.action
                ? k({
                    description: "Link Error, pls check your social account",
                    status: "error",
                    position: "top",
                  })
                : (k.closeAll(),
                  k({
                    description: "".concat(r, " failure"),
                    position: "top",
                    status: "error",
                  }));
              return;
            }
            if (x) return null == x ? void 0 : x();
            let o = new URLSearchParams(window.location.search);
            void 0 !== o.get("status") && o.delete("status");
            let l = {
              ...o,
              status: "success",
              ...(!!(null == i
                ? void 0
                : null === (e = i.result) || void 0 === e
                ? void 0
                : e.is_new_user) && { isNewUser: !0 }),
              from: f,
            };
            if (m) {
              S.push("/enterprise");
              return;
            }
            {
              let e =
                Object.keys(l).length > 0
                  ? "?".concat(new URLSearchParams(l).toString())
                  : "?status=success";
              S.push(e);
            }
          }
          return (0, i.jsx)(o.Z, {
            name: n,
            logo: t,
            onClick: onClick,
            isLoginPage: m,
          });
        };
    },
    91792: function (e, n, t) {
      var i = t(85893),
        o = t(93717),
        r = t(57747),
        l = t(71293);
      t(67294),
        (n.Z = function (e) {
          let { children: n, title: t, showSubTitle: s, isLoginPage: a } = e;
          return (0, i.jsx)(o.k, {
            justifyContent: "center",
            flexDir: "column",
            alignItems: "center",
            mx: "auto",
            children: (0, i.jsxs)(r.xu, {
              position: "relative",
              w: ["100%", null, "3xl"],
              px: [4, 12, 12],
              rounded: "2xl",
              bg: "transparent",
              textAlign: "center",
              display: "flex",
              flexDir: "column",
              children: [
                t
                  ? (0, i.jsx)(l.x, {
                      color: "#fff",
                      mx: "4",
                      fontSize: ["xl", null, "3xl"],
                      fontWeight: "bold",
                      children: t,
                    })
                  : null,
                s
                  ? (0, i.jsx)(l.x, {
                      color: "#9098A0",
                      fontSize: 13,
                      fontWeight: "400",
                      children:
                        "Please claim your profile to start contributing to Bluwhale's AI network",
                    })
                  : null,
                (0, i.jsx)(r.xu, {
                  className:
                    " flex-col items-center justify-center text-center",
                  flexDirection: ["column", null, "row"],
                  children: n,
                }),
              ],
            }),
          });
        });
    },
    43879: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return LoginPlatform_Web3LoginPlatform;
        },
      });
      var i = t(85893),
        o = t(20967),
        r = t(93717),
        l = t(57747),
        s = t(81136),
        a = t(71293),
        c = t(67294),
        u = t(41664),
        d = t.n(u),
        p = t(11163),
        g = t(91792),
        f = t(34673),
        h = t(99042);
      t(14681);
      var x = t(25675),
        m = t.n(x),
        b = t(22326),
        w = t(25556),
        v = t(29173),
        y = t(44304),
        S = t(1840),
        k = t(55642),
        Web3SuiLoginButton = function (e) {
          var n;
          let [t, o] = (0, c.useState)(!1),
            r = (0, h.Os)(),
            { onSignin: l } = (function (e) {
              var n, t;
              let { platform: i = "web", userType: o } = e,
                r = w.basicConfig.auth.servicesBasicUrl;
              (0, p.useRouter)();
              let l = (0, h.Os)(),
                s = (
                  null === (n = l.account) || void 0 === n
                    ? void 0
                    : n.publicKey
                )
                  ? new Uint8Array(
                      Object.values(
                        null === (t = l.account) || void 0 === t
                          ? void 0
                          : t.publicKey
                      )
                    )
                  : new Uint8Array();
              h.sz.toBase64(s);
              let {
                  user: a,
                  onSetUser: u,
                  setLoading: d,
                  loading: g,
                } = (0, f.c)(),
                {
                  onFirebaseWeb3SuiSignin: x,
                  onLink: m,
                  onSignin: y,
                } = (0, v.Z)({ BASIC_URL: r }),
                [S, k] = (0, c.useState)(!1),
                [j, C] = (0, c.useState)({ account: void 0, chain: void 0 });
              async function signMessage(e) {
                try {
                  let n = new TextEncoder().encode(e),
                    t = await l.signPersonalMessage({ message: n });
                  return t;
                } catch (e) {
                  return;
                }
              }
              async function handleMobileSignIn() {
                throw Error("Mobile sign-in is not implemented yet");
              }
              async function handleWebSignIn(e, n, t) {
                let i = JSON.stringify({ address: e, chain_id: n, type: t });
                if (!S)
                  try {
                    k(!0);
                    let n = await signMessage(i);
                    if ((null == d || d(!0), !n))
                      throw (
                        (null == d || d(!1), Error("No signature received"))
                      );
                    let { signature: t } = n;
                    if (!t)
                      throw (
                        (null == d || d(!1), Error("No signature received"))
                      );
                    let o = await x({ address: e, message: i, signature: t });
                    if (!(null == o ? void 0 : o.token))
                      throw (
                        (null == d || d(!1), Error("No firebaseToken received"))
                      );
                    return o;
                  } catch (e) {
                    throw (
                      (null == d || d(!1),
                      Error("handleWebSignIn error: ".concat(e)))
                    );
                  } finally {
                    null == d || d(!1), k(!1);
                  }
                return { credential: void 0, token: "" };
              }
              async function web3Sign(e) {
                let { address: n, platform: t, type: i, chainId: o } = e;
                return "mobile" === t
                  ? handleMobileSignIn()
                  : handleWebSignIn(n, o, i);
              }
              return {
                onSignin: async function (e) {
                  let { platform: n = "web", userType: t, referralCode: i } = e;
                  try {
                    var o, r;
                    let e =
                      null === (o = l.account) || void 0 === o
                        ? void 0
                        : o.address;
                    if (!e) throw Error("No address received");
                    let s =
                        null === (r = l.chain) || void 0 === r ? void 0 : r.id,
                      { credential: a, token: c } = await web3Sign({
                        address: e,
                        platform: n,
                        chainId: s,
                        type: "signin",
                      }),
                      d = await y({
                        token: c,
                        userType: t,
                        isSignUp: !0,
                        referralCode: i,
                      });
                    if (!d) throw Error("No result received");
                    return (
                      u({ user: d, credential: a }),
                      {
                        result: { user: d, credential: a },
                        action: "signin",
                        isSuccess: !0,
                      }
                    );
                  } catch (e) {
                    return (
                      null == d || d(!1),
                      {
                        result: void 0,
                        action: "signin",
                        isSuccess: !1,
                        error: e,
                      }
                    );
                  }
                },
                onLink: async function (e) {
                  let { accessToken: n, platform: t, userType: i } = e;
                  try {
                    var o, r;
                    if (!n) throw Error("No accessToken received");
                    let e =
                        null === (o = l.account) || void 0 === o
                          ? void 0
                          : o.address,
                      { credential: s, token: a } = await web3Sign({
                        address: e,
                        platform: t,
                        type: "link",
                      }),
                      c =
                        null != n
                          ? n
                          : await (null === (r = b.I8.currentUser) ||
                            void 0 === r
                              ? void 0
                              : r.getIdToken()),
                      d = await m({
                        token: a,
                        preToken: c,
                        userType: null != i ? i : "consumer",
                        isSignUp: !0,
                      });
                    if (!d) throw Error("No bluwhaleUser received");
                    return (
                      u({ user: d, credential: s }),
                      {
                        result: { user: d, credential: s },
                        action: "link",
                        isSuccess: !0,
                      }
                    );
                  } catch (e) {
                    return (
                      null == d || d(!1),
                      {
                        result: void 0,
                        action: "link",
                        isSuccess: !1,
                        error: e,
                      }
                    );
                  }
                },
                signingMessage: S,
              };
            })({}),
            { firebaseUser: s, setLoading: a, user: u } = (0, f.c)(),
            d = (0, p.useRouter)(),
            { isMounted: g } = (0, k.Z)();
          async function handleConnectSuccessed(n) {
            if (!g) return;
            await l({
              platform: "web",
              userType: e.userType,
              referralCode: e.referralCode,
            }),
              (0, y.B)(S.U.connectwallet_success, { wallet: "sui" });
            let t = new URLSearchParams(window.location.search);
            t.delete("status"),
              e.isLoginPage && u
                ? d.push(
                    "/consumer/wallet/".concat(
                      null == u ? void 0 : u.address,
                      "?chain=sui"
                    )
                  )
                : d.push(
                    "".concat(
                      t.size > 0
                        ? "?".concat(t.toString(), "&status=success")
                        : "?status=success"
                    )
                  );
          }
          async function handleOpenChange(e) {
            e && r.connected && r.disconnect(), o(e);
          }
          return (
            (0, c.useEffect)(() => {
              if (!t) {
                r.connected && r.disconnect();
                return;
              }
              if (r.connected) {
                var e;
                handleConnectSuccessed(
                  null !== (e = r.name) && void 0 !== e ? e : ""
                );
              }
            }, [
              r.connected,
              null === (n = r.account) || void 0 === n ? void 0 : n.address,
              t,
            ]),
            (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)(h.Ot, {
                open: t,
                onOpenChange: handleOpenChange,
                children: (0, i.jsx)("div", {
                  className:
                    "relative w-[120px] h-[61px] rounded-[90px] p-[2px] bg-[conic-gradient(from_179.41deg_at_50%_50%,_rgba(162,145,218,0.76)_-58.32deg,_#C8A5E7_17.02deg,_#FFFFFF_75.35deg,_#AF9CFD_139.86deg,_rgba(255,255,255,0.50)_170.65deg,_rgba(162,145,218,0.61)_207.01deg,_#E5E7FC_262.75deg,_rgba(162,145,218,0.76)_301.68deg,_#C8A5E7_377.02deg)] cursor-pointer",
                  children: (0, i.jsx)("div", {
                    className:
                      "w-full h-full rounded-[90px] flex items-center justify-center gap-x-1 p-6 backdrop-blur-[4px] bg-[#15172B]",
                    style: {
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    },
                    children: (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(m(), {
                          src: "/images/chain-sui-login.svg",
                          alt: "Sui",
                          width: 19,
                          height: 24,
                          className: "inline-block",
                        }),
                        (0, i.jsx)("span", {
                          className:
                            "text-[#c8a5e7] text-base font-medium !normal-case pt-1",
                          children: "Sui",
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        },
        j = t(7963),
        C = t(4212),
        _ = t(85518),
        E = t(62664),
        F = t(92321),
        Web3EvmLoginButton = function (e) {
          let {
              web3Provider: n = "metamask",
              userType: t,
              referralCode: o,
              action: s,
              isLoginPage: u,
              isWeb3: d = !1,
              name: g,
            } = e,
            {
              onSignin: h,
              onLink: x,
              signingMessage: m,
            } = (0, C.Z)({ web3Provider: n }),
            { firebaseUser: b, setLoading: w, user: v } = (0, f.c)(),
            { address: k, isConnected: O } = (0, F.m)(),
            [A, L] = (0, c.useState)(!1),
            U = (0, p.useRouter)(),
            R = (0, j.p)(),
            N = (0, c.useRef)(null);
          (0, c.useEffect)(() => {
            k && O && A && !m && web3SignIn();
          }, [k, O, A, m]);
          let handleResult = async (e) => {
              if (!e.isSuccess) {
                null == w || w(!1);
                return;
              }
              (0, y.B)(S.U.connectwallet_success, { wallet: g });
              let n = new URLSearchParams(window.location.search);
              n.delete("status"),
                u && v
                  ? U.push(
                      "/consumer/wallet/".concat(null == v ? void 0 : v.address)
                    )
                  : U.push(
                      "".concat(
                        n.size > 0
                          ? "?".concat(n.toString(), "&status=success")
                          : "?status=success"
                      )
                    );
            },
            web3SignIn = async () => {
              if (!v && !m)
                try {
                  (0, y.B)(S.U.connectwallet_choose, { wallet: "mobile" }),
                    null == w || w(!0);
                  let e = null == b ? void 0 : b.token,
                    n = {
                      provider: "mobile",
                      userType: t,
                      accessToken: e,
                      referralCode: o,
                    },
                    i = "link" === s ? await x(n) : await h(n);
                  await handleResult(i);
                } catch (e) {
                  R({
                    description: "An error occurred during the login process.",
                    position: "top",
                    status: "error",
                  });
                } finally {
                  null == w || w(!1);
                }
            },
            web3ConnectClick = async () => {
              if (k && O) L(!0), web3SignIn();
              else {
                var e, n;
                L(!0),
                  null === (n = N.current) ||
                    void 0 === n ||
                    null === (e = n.querySelector("button")) ||
                    void 0 === e ||
                    e.click();
              }
            };
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(
              l.xu,
              {
                position: "relative",
                className: "my-1 ",
                bg: d
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
                children: (0, i.jsxs)(r.k, {
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  height: _.tq ? "44px" : "56px",
                  py: _.tq ? "" : "14px",
                  onClick: web3ConnectClick,
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
                    (0, i.jsx)(l.xu, {
                      ref: N,
                      style: { display: "none" },
                      children: (0, i.jsx)(E.NL, {}),
                    }),
                  ],
                }),
              },
              g
            ),
          });
        },
        LoginButtons_Web3LoginButton = function (e) {
          return (0, i.jsxs)("div", {
            className: "flex gap-2 justify-center items-center",
            children: [
              (0, i.jsx)(Web3EvmLoginButton, { ...e }),
              (0, i.jsx)(Web3SuiLoginButton, { ...e }),
            ],
          });
        },
        O = t(98978),
        A = t(9473),
        L = t(7755),
        U = t(19778),
        R = t(14581),
        N = t(66205),
        I = t(54346),
        B = t(5460),
        z = t(14253),
        P = t(26285),
        W = t(32745),
        T = t(27490),
        Z = t(69717);
      let useMultipleAccounts = () => {
        let e = (0, A.I0)(),
          n = (0, A.v9)((e) => e.consumerUserAccounts.accounts),
          t = (0, c.useCallback)(
            (n) => {
              e((0, Z.r3)(n));
            },
            [e, n, Z.r3]
          );
        return { changeAccounts: t, accounts: n };
      };
      var Consumer_MultipleAccountModal = (e) => {
          let {
              showMessage: n,
              onShowMessageOpen: t,
              onShowMessageClose: o,
            } = e,
            { axiosInstance: l, user: s, onSetUserWithToken: u } = (0, f.c)(),
            {
              current_account: d,
              accounts: p,
              emailLogined: g,
              token: h,
              credential: x,
              profile: m,
            } = (0, A.v9)((e) => e.consumerUserAccounts),
            { switchAccount: b } = (0, T.Z)(),
            [w, v] = (0, c.useState)(d),
            [y, S] = (0, c.useState)(!1);
          (0, j.p)();
          let { changeAccounts: k } = useMultipleAccounts(),
            changeSelectedAccount = (e) => {
              v(e);
            },
            continueSubmit = async () => {
              if (
                (null == w ? void 0 : w.uuid) === (null == d ? void 0 : d.uuid)
              )
                S(!0),
                  await u({
                    firebaseUser:
                      (null == x ? void 0 : x.userStr) && JSON.parse(x.userStr),
                    token: null == x ? void 0 : x.token,
                    user: m,
                  }),
                  o(),
                  k([]);
              else if (w && h) {
                S(!0);
                let e = await b(h, null == w ? void 0 : w.uuid);
                u({
                  firebaseUser:
                    (null == x ? void 0 : x.userStr) && JSON.parse(x.userStr),
                  token: null == x ? void 0 : x.token,
                  user: e,
                }),
                  o(),
                  k([]);
              }
            };
          return (
            (0, c.useEffect)(() => {
              s && y && S(!1);
            }, [s]),
            (0, i.jsx)(i.Fragment, {
              children: (0, i.jsxs)(L.u_, {
                isOpen: n,
                onClose: o,
                size: "2xl",
                children: [
                  (0, i.jsx)(U.Z, {
                    position: "fixed",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    w: "full",
                    h: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    zIndex: "1000",
                    backdropFilter: "blur(10px)",
                  }),
                  (0, i.jsxs)(R.h, {
                    backgroundColor: "#141218",
                    borderWidth: 1,
                    borderColor:
                      "linear-gradient(55deg, rgba(255,   255, 255, 0.3), rgba(255, 255, 255, 0))",
                    rounded: "2xl",
                    display: "flex",
                    justifyContent: "center",
                    py: 4,
                    px: 4,
                    w: "100%",
                    fontFamily: "Orbitron",
                    children: [
                      (0, i.jsx)(N.o, { variant: "ghost" }),
                      (0, i.jsx)(I.f, {
                        px: [2, null, 6],
                        children: (0, i.jsxs)(r.k, {
                          alignItems: "center",
                          px: 4,
                          rounded: "16px",
                          border: "none",
                          color: "#fff",
                          fontSize: 12,
                          alignSelf: "center",
                          bg: "transparent",
                          gap: 4,
                          justifyContent: "space-between",
                          flexDir: "column",
                          children: [
                            (0, i.jsxs)(a.x, {
                              color: "#CAC4D0",
                              fontSize: 20,
                              textAlign: "center",
                              fontWeight: 700,
                              children: [
                                "Your account is already linked to one or more wallets.",
                                (0, i.jsx)("br", {}),
                                " Please select one to continue.",
                              ],
                            }),
                            (0, i.jsx)(P.Z, {
                              loading: y,
                              minH: "100px",
                              children: (0, i.jsx)(r.k, {
                                flexDir: "column",
                                gap: 4,
                                overflowY: "auto",
                                width: "full",
                                justifyItems: "center",
                                justifyContent: "flex-start",
                                maxH: 300,
                                pt: 4,
                                pb: 4,
                                children:
                                  null == p
                                    ? void 0
                                    : p.map((e) =>
                                        (0, i.jsxs)(
                                          r.k,
                                          {
                                            fontSize: 14,
                                            fontWeight: 500,
                                            alignSelf: "center",
                                            justifyContent: "flex-start",
                                            alignItems: "center",
                                            gap: "5",
                                            cursor: "pointer",
                                            onClick: () =>
                                              changeSelectedAccount(e),
                                            w: 300,
                                            ml: 50,
                                            children: [
                                              (0, i.jsx)(B.E, {
                                                src: "/images/login/address_".concat(
                                                  (null == e
                                                    ? void 0
                                                    : e.uuid) ===
                                                    (null == w
                                                      ? void 0
                                                      : w.uuid)
                                                    ? "selected"
                                                    : "unselected",
                                                  ".png"
                                                ),
                                                width: "20px",
                                                height: "20px",
                                              }),
                                              (0, i.jsx)(a.x, {
                                                children: (0, W.ek)(
                                                  null == e
                                                    ? void 0
                                                    : e.address,
                                                  6
                                                ),
                                              }),
                                            ],
                                          },
                                          null == e ? void 0 : e.uuid
                                        )
                                      ),
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)(z.m, {
                        justifyContent: "center",
                        children: (0, i.jsx)(B.E, {
                          src: "/images/login/continueButton.png",
                          width: "290px",
                          height: "52px",
                          cursor: "pointer",
                          onClick: continueSubmit,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        LoginPlatform_Web3LoginPlatform = function (e) {
          let n,
            {
              action: t = "signin",
              title: u = "Login with Web3 Wallet",
              userType: h = "consumer",
              showSwitchLable: x = !1,
              referralCode: m,
              isLoginPage: b = !1,
            } = e,
            w = (0, p.useRouter)(),
            {
              current_account: v,
              accounts: y,
              emailLogined: S,
            } = (0, A.v9)((e) => e.consumerUserAccounts);
          (n = new URLSearchParams(window.location.search)).delete("type");
          let {
              showStep: k,
              from: j,
              claim: C,
              contract: E,
              projectname: F,
            } = w.query,
            { axiosInstance: L, loading: U } = (0, f.c)(),
            { isOpen: R, onOpen: N, onClose: I } = (0, o.q)(),
            B = [
              (0, i.jsx)(
                LoginButtons_Web3LoginButton,
                {
                  name: "Walletconnect V2",
                  logo: "/images/wallet/ic_wallet_connect.png",
                  action: t,
                  web3Provider: "walletconnect",
                  userType: h,
                  isSignUp: !0,
                  referralCode: m,
                  isMobile: !0,
                  isWeb3: !0,
                },
                "walletconnect"
              ),
            ];
          return (
            (0, c.useEffect)(() => {
              (null == y ? void 0 : y.length) > 1 && N();
            }, [y]),
            (0, i.jsxs)(g.Z, {
              title: u,
              isLoginPage: b,
              children: [
                (0, i.jsx)(r.k, {
                  justifyContent: "center",
                  alignItems: "center",
                  flexDir: "column",
                  flex: "1",
                  children: U
                    ? (0, i.jsxs)(r.k, {
                        minH: ["60vh", 400, 400],
                        w: "90vw",
                        justifyContent: "center",
                        flexDir: "column",
                        alignSelf: "center",
                        children: [
                          (0, i.jsx)(l.xu, {
                            my: 4,
                            children: (0, i.jsx)(s.$, {
                              thickness: "4px",
                              speed: "0.65s",
                              color: "#6bb2c5",
                              size: "xl",
                            }),
                          }),
                          (0, i.jsx)(a.x, {
                            color: "#D6D6D6",
                            children: "Securely logging you in...",
                          }),
                        ],
                      })
                    : (0, i.jsxs)(r.k, {
                        flexDir: "column",
                        textAlign: "center",
                        w: "full",
                        maxW: "575px",
                        fontSize: 14,
                        children: [
                          (0, i.jsx)(a.x, {
                            fontSize: _.tq ? 12 : 14,
                            textAlign: "center",
                            mb: "16px",
                            children: "Already have a wallet?",
                          }),
                          B.map((e) =>
                            (0, i.jsx)(l.xu, { mb: "16px", children: e }, e.key)
                          ),
                          (0, i.jsx)(a.x, {
                            fontSize: _.tq ? 12 : 14,
                            textAlign: "center",
                            my: "16px",
                            children: "No wallet? Log in with your email",
                          }),
                          (0, i.jsx)(
                            l.xu,
                            {
                              children: (0, i.jsx)(O.Z, {
                                name: "Email OTP",
                                logo: "",
                                action: t,
                                userType: h,
                                isSignUp: !0,
                                referralCode: m,
                                isLoginPage: b,
                              }),
                            },
                            "EmailOtp"
                          ),
                          x && !b
                            ? (0, i.jsx)(l.xu, {
                                mb: 4,
                                children: (0, i.jsx)(d(), {
                                  href: "".concat(
                                    n && n.size > 0 ? "?".concat(n) : ""
                                  ),
                                  className: "underline text-sm text-gray-400",
                                  children:
                                    "link" === t
                                      ? "link to other social media"
                                      : "using social media to login",
                                }),
                              })
                            : null,
                        ],
                      }),
                }),
                R
                  ? (0, i.jsx)(Consumer_MultipleAccountModal, {
                      showMessage: R,
                      onShowMessageOpen: N,
                      onShowMessageClose: I,
                    })
                  : null,
              ],
            })
          );
        };
    },
    27490: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return useLoginByEmailOtp;
        },
      });
      var i = t(22326),
        o = t(34673),
        r = t(29173),
        l = t(25556),
        s = t(5121),
        a = t(77132),
        c = t(69717),
        u = t(9473),
        d = t(23152);
      function useLoginByEmailOtp() {
        let e = l.basicConfig.auth.servicesBasicUrl,
          { onSetUser: n, onUpdateUser: t, setLoading: p } = (0, o.c)(),
          { getRecaptchaTokenAsync: g } = (0, d.Z)(),
          {
            onSignin: f,
            onLink: h,
            onDiscordSignin: x,
          } = (0, r.Z)({ BASIC_URL: e }),
          m = (0, u.I0)();
        async function verifyOtp(n) {
          let { email: t, otp: i } = n,
            o = "".concat(e, "/email/otp/verify/"),
            r = JSON.stringify({ email: t, otp: i });
          try {
            let e = await s.default.post(o, r, {
                headers: { "Content-Type": "application/json" },
              }),
              n = await e.data;
            return n;
          } catch (e) {
            return { error: "verifyOtp error " };
          }
        }
        async function fetchAccountList(n) {
          let t = "".concat(e, "/web3_accounts/"),
            i = n ? "Bearer ".concat(n) : void 0;
          if (!i) return { error: "No token received" };
          try {
            let e = await s.default.get(t, {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "".concat(i),
                },
              }),
              n = await e.data;
            return n;
          } catch (e) {
            return { error: "verifyOtp error " };
          }
        }
        async function signinFirebase(e) {
          let n = await (0, a._p)(i.I8, e),
            t = await n.user.getIdToken(!0);
          return { credential: n, token: t };
        }
        async function enterpriseEmailSignin(e) {
          let { bluwhaleUser: t, credential: i } = e;
          return (
            t && n({ credential: i, user: t }),
            null == p || p(!1),
            { result: t, action: "signin", isSuccess: !0 }
          );
        }
        async function consumerEmailSignin(e) {
          let { token: t, bluwhaleUser: i, credential: o } = e,
            r = await fetchAccountList(t),
            { current_account: l, accounts: s } = await r;
          return s.length < 2
            ? (i && n({ credential: o, user: i }),
              null == p || p(!1),
              { result: i, action: "signin", isSuccess: !0 })
            : (await m((0, c.r3)(r)),
              await m(
                (0, c.h1)({
                  token: t,
                  credential: { userStr: JSON.stringify(o.user), token: t },
                  profile: i,
                })
              ),
              null == p || p(!1),
              r);
        }
        return {
          emailSignin: async function (e) {
            let {
              email: n,
              otp: t,
              userType: i,
              isSignUp: o,
              inviteCode: r,
            } = e;
            try {
              null == p || p(!0);
              let { token: e } = await verifyOtp({ email: n, otp: t }),
                { token: l, credential: s } = await signinFirebase(e),
                a = await f({
                  token: l,
                  userType: i,
                  isSignUp: o,
                  ...(r && o && { referralCode: null != r ? r : "" }),
                });
              if ("enterprise" === i)
                return enterpriseEmailSignin({
                  bluwhaleUser: a,
                  credential: s,
                });
              let c = await consumerEmailSignin({
                token: l,
                bluwhaleUser: a,
                credential: s,
              });
              return null == p || p(!1), c;
            } catch (e) {
              return (
                null == p || p(!1),
                { result: void 0, action: "signin", isSuccess: !1, error: e }
              );
            }
          },
          onLink: async function (e) {
            let {
              accessToken: n,
              userType: o,
              media_type: r,
              email: l,
              otp: s,
            } = e;
            try {
              var a;
              null == p || p(!0);
              let e =
                  null != n
                    ? n
                    : await (null === (a = i.I8.currentUser) || void 0 === a
                        ? void 0
                        : a.getIdToken()),
                r = i.I8.currentUser;
              if (!e || !r)
                throw (null == p || p(!1), Error("No preToken received"));
              let { token: c } = await verifyOtp({ email: l, otp: s }),
                { token: u, credential: d } = await signinFirebase(c),
                g = await h({
                  token: u,
                  preToken: e,
                  userType: o,
                  media_type: "LINKEDIN",
                });
              if ((null == p || p(!1), !g))
                throw Error("No bluwhaleUser received");
              return (
                t({ firebaseUser: r, token: e, user: g }),
                { result: g, action: "link", isSuccess: !0 }
              );
            } catch (e) {
              return (
                null == p || p(!1),
                { result: void 0, action: "link", isSuccess: !1, error: e }
              );
            }
          },
          onRequestOtp: async function (n) {
            let { email: t } = n;
            if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(t))
              return { error: "Invalid email" };
            let i = "".concat(e, "/email/otp/");
            try {
              let e = await g("submit"),
                n = JSON.stringify({ email: t, recaptcha_token: e }),
                o = await s.default.post(i, n, {
                  headers: { "Content-Type": "application/json" },
                }),
                r = await o.data;
              return r;
            } catch (e) {
              return { error: e };
            }
          },
          fetchAccountList,
          switchAccount: async function (n, t) {
            let i = "".concat(e, "/web3_accounts/switchover/"),
              o = n ? "Bearer ".concat(n) : void 0;
            if (!o) return { error: "No token received" };
            try {
              let e = await s.default.patch(
                  i,
                  { uuid: t },
                  {
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "".concat(o),
                    },
                  }
                ),
                n = await e.data;
              return n;
            } catch (e) {
              return { error: "verifyOtp error " };
            }
          },
        };
      }
    },
    55642: function (e, n, t) {
      var i = t(67294);
      n.Z = function () {
        let e = (0, i.useRef)(!1);
        return (
          (0, i.useEffect)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          { isMounted: e.current }
        );
      };
    },
  },
]);
