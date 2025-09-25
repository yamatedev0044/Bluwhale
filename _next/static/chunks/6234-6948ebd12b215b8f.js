(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6234],
  {
    645: (e, t, n) => {
      let r = n(46087).getSymbolSize;
      t.getPositions = function (e) {
        let t = r(e);
        return [
          [0, 0],
          [t - 7, 0],
          [0, t - 7],
        ];
      };
    },
    1607: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => p });
      var r = n(35883),
        o = n(81379),
        i = n(78519),
        a = n(42142),
        s = n(67622),
        c = n(77752),
        l = n(90113),
        u = n(9894);
      function p(e = {}) {
        let t,
          n,
          f,
          w,
          { shimDisconnect: m = !0, unstable_shimAsyncInject: g } = e;
        function A() {
          let t = e.target;
          if ("function" == typeof t) {
            let e = t();
            if (e) return e;
          }
          return "object" == typeof t
            ? t
            : "string" == typeof t
            ? {
                ...(d[t] ?? {
                  id: t,
                  name: `${t[0].toUpperCase()}${t.slice(1)}`,
                  provider: `is${t[0].toUpperCase()}${t.slice(1)}`,
                }),
              }
            : {
                id: "injected",
                name: "Injected",
                provider: (e) => e?.ethereum,
              };
        }
        return (0, u.U)((u) => ({
          get icon() {
            return A().icon;
          },
          get id() {
            return A().id;
          },
          get name() {
            return A().name;
          },
          get supportsSimulation() {
            return !0;
          },
          type: p.type,
          async setup() {
            let n = await this.getProvider();
            n?.on &&
              e.target &&
              (f || ((f = this.onConnect.bind(this)), n.on("connect", f)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                n.on("accountsChanged", t)));
          },
          async connect({ chainId: i, isReconnecting: a } = {}) {
            let s = await this.getProvider();
            if (!s) throw new l.N();
            let c = [];
            if (a) c = await this.getAccounts().catch(() => []);
            else if (m)
              try {
                let e = await s.request({
                  method: "wallet_requestPermissions",
                  params: [{ eth_accounts: {} }],
                });
                (c = e[0]?.caveats?.[0]?.value?.map((e) => (0, r.b)(e)))
                  .length > 0 && (c = await this.getAccounts());
              } catch (e) {
                if (e.code === o.vx.code) throw new o.vx(e);
                if (e.code === o.qZ.code) throw e;
              }
            try {
              c?.length ||
                a ||
                (c = (await s.request({ method: "eth_requestAccounts" })).map(
                  (e) => (0, r.b)(e)
                )),
                f && (s.removeListener("connect", f), (f = void 0)),
                t ||
                  ((t = this.onAccountsChanged.bind(this)),
                  s.on("accountsChanged", t)),
                n ||
                  ((n = this.onChainChanged.bind(this)),
                  s.on("chainChanged", n)),
                w ||
                  ((w = this.onDisconnect.bind(this)), s.on("disconnect", w));
              let l = await this.getChainId();
              if (i && l !== i) {
                let e = await this.switchChain({ chainId: i }).catch((e) => {
                  if (e.code === o.vx.code) throw e;
                  return { id: l };
                });
                l = e?.id ?? l;
              }
              return (
                m && (await u.storage?.removeItem(`${this.id}.disconnected`)),
                e.target ||
                  (await u.storage?.setItem("injected.connected", !0)),
                { accounts: c, chainId: l }
              );
            } catch (e) {
              if (e.code === o.vx.code) throw new o.vx(e);
              if (e.code === o.qZ.code) throw new o.qZ(e);
              throw e;
            }
          },
          async disconnect() {
            let t = await this.getProvider();
            if (!t) throw new l.N();
            n && (t.removeListener("chainChanged", n), (n = void 0)),
              w && (t.removeListener("disconnect", w), (w = void 0)),
              f || ((f = this.onConnect.bind(this)), t.on("connect", f));
            try {
              await (0, i.w)(
                () =>
                  t.request({
                    method: "wallet_revokePermissions",
                    params: [{ eth_accounts: {} }],
                  }),
                { timeout: 100 }
              );
            } catch {}
            m && (await u.storage?.setItem(`${this.id}.disconnected`, !0)),
              e.target || (await u.storage?.removeItem("injected.connected"));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new l.N();
            return (await e.request({ method: "eth_accounts" })).map((e) =>
              (0, r.b)(e)
            );
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new l.N();
            return Number(await e.request({ method: "eth_chainId" }));
          },
          async getProvider() {
            let e;
            if ("undefined" == typeof window) return;
            let t = A();
            return (
              (e =
                "function" == typeof t.provider
                  ? t.provider(window)
                  : "string" == typeof t.provider
                  ? h(window, t.provider)
                  : t.provider) &&
                !e.removeListener &&
                ("off" in e && "function" == typeof e.off
                  ? (e.removeListener = e.off)
                  : (e.removeListener = () => {})),
              e
            );
          },
          async isAuthorized() {
            try {
              if (
                (m && (await u.storage?.getItem(`${this.id}.disconnected`))) ||
                (!e.target && !(await u.storage?.getItem("injected.connected")))
              )
                return !1;
              if (!(await this.getProvider())) {
                if (void 0 !== g && !1 !== g) {
                  let e = async () => (
                      "undefined" != typeof window &&
                        window.removeEventListener("ethereum#initialized", e),
                      !!(await this.getProvider())
                    ),
                    t = "number" == typeof g ? g : 1e3;
                  if (
                    await Promise.race([
                      ...("undefined" != typeof window
                        ? [
                            new Promise((t) =>
                              window.addEventListener(
                                "ethereum#initialized",
                                () => t(e()),
                                { once: !0 }
                              )
                            ),
                          ]
                        : []),
                      new Promise((n) => setTimeout(() => n(e()), t)),
                    ])
                  )
                    return !0;
                }
                throw new l.N();
              }
              return !!(await (0, a.b)(() => this.getAccounts())).length;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let n = await this.getProvider();
            if (!n) throw new l.N();
            let r = u.chains.find((e) => e.id === t);
            if (!r) throw new o.ch(new c.nk());
            let i = new Promise((e) => {
              let n = (r) => {
                "chainId" in r &&
                  r.chainId === t &&
                  (u.emitter.off("change", n), e());
              };
              u.emitter.on("change", n);
            });
            try {
              return (
                await Promise.all([
                  n
                    .request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, s.cK)(t) }],
                    })
                    .then(async () => {
                      (await this.getChainId()) === t &&
                        u.emitter.emit("change", { chainId: t });
                    }),
                  i,
                ]),
                r
              );
            } catch (a) {
              if (4902 === a.code || a?.data?.originalError?.code === 4902)
                try {
                  let a,
                    c,
                    { default: l, ...p } = r.blockExplorers ?? {};
                  e?.blockExplorerUrls
                    ? (a = e.blockExplorerUrls)
                    : l && (a = [l.url, ...Object.values(p).map((e) => e.url)]),
                    (c = e?.rpcUrls?.length
                      ? e.rpcUrls
                      : [r.rpcUrls.default?.http[0] ?? ""]);
                  let d = {
                    blockExplorerUrls: a,
                    chainId: (0, s.cK)(t),
                    chainName: e?.chainName ?? r.name,
                    iconUrls: e?.iconUrls,
                    nativeCurrency: e?.nativeCurrency ?? r.nativeCurrency,
                    rpcUrls: c,
                  };
                  return (
                    await Promise.all([
                      n
                        .request({
                          method: "wallet_addEthereumChain",
                          params: [d],
                        })
                        .then(async () => {
                          if ((await this.getChainId()) === t)
                            u.emitter.emit("change", { chainId: t });
                          else
                            throw new o.vx(
                              Error(
                                "User rejected switch after adding network."
                              )
                            );
                        }),
                      i,
                    ]),
                    r
                  );
                } catch (e) {
                  throw new o.vx(e);
                }
              if (a.code === o.vx.code) throw new o.vx(a);
              throw new o.ch(a);
            }
          },
          async onAccountsChanged(e) {
            if (0 === e.length) this.onDisconnect();
            else if (u.emitter.listenerCount("connect")) {
              let e = (await this.getChainId()).toString();
              this.onConnect({ chainId: e }),
                m && (await u.storage?.removeItem(`${this.id}.disconnected`));
            } else
              u.emitter.emit("change", { accounts: e.map((e) => (0, r.b)(e)) });
          },
          onChainChanged(e) {
            let t = Number(e);
            u.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let r = await this.getAccounts();
            if (0 === r.length) return;
            let o = Number(e.chainId);
            u.emitter.emit("connect", { accounts: r, chainId: o });
            let i = await this.getProvider();
            i &&
              (f && (i.removeListener("connect", f), (f = void 0)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                i.on("accountsChanged", t)),
              n ||
                ((n = this.onChainChanged.bind(this)), i.on("chainChanged", n)),
              w || ((w = this.onDisconnect.bind(this)), i.on("disconnect", w)));
          },
          async onDisconnect(e) {
            let t = await this.getProvider();
            (e && 1013 === e.code && t && (await this.getAccounts()).length) ||
              (u.emitter.emit("disconnect"),
              t &&
                (n && (t.removeListener("chainChanged", n), (n = void 0)),
                w && (t.removeListener("disconnect", w), (w = void 0)),
                f || ((f = this.onConnect.bind(this)), t.on("connect", f))));
          },
        }));
      }
      p.type = "injected";
      let d = {
        coinbaseWallet: {
          id: "coinbaseWallet",
          name: "Coinbase Wallet",
          provider: (e) =>
            e?.coinbaseWalletExtension
              ? e.coinbaseWalletExtension
              : h(e, "isCoinbaseWallet"),
        },
        metaMask: {
          id: "metaMask",
          name: "MetaMask",
          provider: (e) =>
            h(e, (e) => {
              if (!e.isMetaMask || (e.isBraveWallet && !e._events && !e._state))
                return !1;
              for (let t of [
                "isApexWallet",
                "isAvalanche",
                "isBitKeep",
                "isBlockWallet",
                "isKuCoinWallet",
                "isMathWallet",
                "isOkxWallet",
                "isOKExWallet",
                "isOneInchIOSWallet",
                "isOneInchAndroidWallet",
                "isOpera",
                "isPhantom",
                "isPortal",
                "isRabby",
                "isTokenPocket",
                "isTokenary",
                "isUniswapWallet",
                "isZerion",
              ])
                if (e[t]) return !1;
              return !0;
            }),
        },
        phantom: {
          id: "phantom",
          name: "Phantom",
          provider: (e) =>
            e?.phantom?.ethereum ? e.phantom?.ethereum : h(e, "isPhantom"),
        },
      };
      function h(e, t) {
        function n(e) {
          return "function" == typeof t ? t(e) : "string" != typeof t || e[t];
        }
        let r = e.ethereum;
        return r?.providers
          ? r.providers.find((e) => n(e))
          : r && n(r)
          ? r
          : void 0;
      }
    },
    2091: (e, t, n) => {
      "use strict";
      let r, o, i, a, s, c, l, u, p, d, h, f, w, m, g, A;
      n.d(t, { S: () => V });
      let y = new Map([
        [8217, "apostrophe"],
        [8260, "fraction slash"],
        [12539, "middle dot"],
      ]);
      function b(e) {
        var t;
        let n;
        return (
          (t = (function (e) {
            let t = 0;
            function n() {
              return (e[t++] << 8) | e[t++];
            }
            let r = n(),
              o = 1,
              i = [0, 1];
            for (let e = 1; e < r; e++) i.push((o += n()));
            let a = n(),
              s = t;
            t += a;
            let c = 0,
              l = 0;
            function u() {
              return (
                0 == c && ((l = (l << 8) | e[t++]), (c = 8)), (l >> --c) & 1
              );
            }
            let p = 0x80000000 - 1,
              d = 0;
            for (let e = 0; e < 31; e++) d = (d << 1) | u();
            let h = [],
              f = 0,
              w = 0x80000000;
            for (;;) {
              let e = Math.floor(((d - f + 1) * o - 1) / w),
                t = 0,
                n = r;
              for (; n - t > 1; ) {
                let r = (t + n) >>> 1;
                e < i[r] ? (n = r) : (t = r);
              }
              if (0 == t) break;
              h.push(t);
              let a = f + Math.floor((w * i[t]) / o),
                s = f + Math.floor((w * i[t + 1]) / o) - 1;
              for (; ((a ^ s) & 0x40000000) == 0; )
                (d = ((d << 1) & p) | u()),
                  (a = (a << 1) & p),
                  (s = ((s << 1) & p) | 1);
              for (; a & ~s & 0x20000000; )
                (d = (0x40000000 & d) | ((d << 1) & (p >>> 1)) | u()),
                  (a = (a << 1) ^ 0x40000000),
                  (s = ((0x40000000 ^ s) << 1) | 0x40000001);
              (f = a), (w = 1 + s - a);
            }
            let m = r - 4;
            return h.map((t) => {
              switch (t - m) {
                case 3:
                  return m + 65792 + ((e[s++] << 16) | (e[s++] << 8) | e[s++]);
                case 2:
                  return m + 256 + ((e[s++] << 8) | e[s++]);
                case 1:
                  return m + e[s++];
                default:
                  return t - 1;
              }
            });
          })(
            (function (e) {
              let t = [];
              [
                ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              ].forEach((e, n) => (t[e.charCodeAt(0)] = n));
              let n = e.length,
                r = new Uint8Array((6 * n) >> 3);
              for (let o = 0, i = 0, a = 0, s = 0; o < n; o++)
                (s = (s << 6) | t[e.charCodeAt(o)]),
                  (a += 6) >= 8 && (r[i++] = s >> (a -= 8));
              return r;
            })(e)
          )),
          (n = 0),
          () => t[n++]
        );
      }
      function v(e, t = 0) {
        let n = [];
        for (;;) {
          let r = e(),
            o = e();
          if (!o) break;
          t += r;
          for (let e = 0; e < o; e++) n.push(t + e);
          t += o + 1;
        }
        return n;
      }
      function C(e) {
        return E(() => {
          let t = v(e);
          if (t.length) return t;
        });
      }
      function k(e) {
        let t = [];
        for (;;) {
          let n = e();
          if (0 == n) break;
          t.push(
            (function (e, t) {
              let n = 1 + t(),
                r = t(),
                o = E(t);
              return x(o.length, 1 + e, t).flatMap((e, t) => {
                let [i, ...a] = e;
                return Array(o[t])
                  .fill()
                  .map((e, t) => {
                    let o = t * r;
                    return [i + t * n, a.map((e) => e + o)];
                  });
              });
            })(n, e)
          );
        }
        for (;;) {
          var n, r;
          let o = e() - 1;
          if (o < 0) break;
          t.push(
            ((n = o), x(1 + (r = e)(), 1 + n, r).map((e) => [e[0], e.slice(1)]))
          );
        }
        return t.flat();
      }
      function E(e) {
        let t = [];
        for (;;) {
          let n = e(t.length);
          if (!n) break;
          t.push(n);
        }
        return t;
      }
      function x(e, t, n) {
        let r = Array(e)
          .fill()
          .map(() => []);
        for (let o = 0; o < t; o++)
          (function (e, t) {
            let n = Array(e);
            for (let o = 0, i = 0; o < e; o++) {
              var r;
              n[o] = i += 1 & (r = t()) ? ~r >> 1 : r >> 1;
            }
            return n;
          })(e, n).forEach((e, t) => r[t].push(e));
        return r;
      }
      function B(e) {
        return `{${e.toString(16).toUpperCase().padStart(2, "0")}}`;
      }
      function I(e) {
        let t = e.length;
        if (t < 4096) return String.fromCodePoint(...e);
        let n = [];
        for (let r = 0; r < t; )
          n.push(String.fromCodePoint(...e.slice(r, (r += 4096))));
        return n.join("");
      }
      function S(e, t) {
        let n = e.length,
          r = n - t.length;
        for (let o = 0; 0 == r && o < n; o++) r = e[o] - t[o];
        return r;
      }
      let N = 55204;
      function T(e) {
        return (e >> 24) & 255;
      }
      function D(e) {
        return 0xffffff & e;
      }
      function Q(e) {
        return e >= 44032 && e < N;
      }
      function P(e) {
        r ||
          (function () {
            let e = b(
              "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"
            );
            for (let [t, n] of ((r = new Map(
              C(e).flatMap((e, t) => e.map((e) => [e, (t + 1) << 24]))
            )),
            (o = new Set(v(e))),
            (i = new Map()),
            (a = new Map()),
            k(e))) {
              if (!o.has(t) && 2 == n.length) {
                let [e, r] = n,
                  o = a.get(e);
                o || ((o = new Map()), a.set(e, o)), o.set(r, t);
              }
              i.set(t, n.reverse());
            }
          })();
        let t = [],
          n = [],
          s = !1;
        function c(e) {
          let n = r.get(e);
          n && ((s = !0), (e |= n)), t.push(e);
        }
        for (let r of e)
          for (;;) {
            if (r < 128) t.push(r);
            else if (Q(r)) {
              let e = r - 44032,
                t = (e / 588) | 0,
                n = ((e % 588) / 28) | 0,
                o = e % 28;
              c(4352 + t), c(4449 + n), o > 0 && c(4519 + o);
            } else {
              let e = i.get(r);
              e ? n.push(...e) : c(r);
            }
            if (!n.length) break;
            r = n.pop();
          }
        if (s && t.length > 1) {
          let e = T(t[0]);
          for (let n = 1; n < t.length; n++) {
            let r = T(t[n]);
            if (0 == r || e <= r) {
              e = r;
              continue;
            }
            let o = n - 1;
            for (;;) {
              let n = t[o + 1];
              if (((t[o + 1] = t[o]), (t[o] = n), !o || (e = T(t[--o])) <= r))
                break;
            }
            e = T(t[n]);
          }
        }
        return t;
      }
      function M(e) {
        return P(e).map(D);
      }
      function O(e) {
        return (function (e) {
          let t = [],
            n = [],
            r = -1,
            o = 0;
          for (let i of e) {
            let e = T(i),
              s = D(i);
            if (-1 == r) 0 == e ? (r = s) : t.push(s);
            else if (o > 0 && o >= e)
              0 == e ? (t.push(r, ...n), (n.length = 0), (r = s)) : n.push(s),
                (o = e);
            else {
              let i = (function (e, t) {
                if (e >= 4352 && e < 4371 && t >= 4449 && t < 4470)
                  return 44032 + (e - 4352) * 588 + (t - 4449) * 28;
                {
                  if (Q(e) && t > 4519 && t < 4547 && (e - 44032) % 28 == 0)
                    return e + (t - 4519);
                  let n = a.get(e);
                  return n && (n = n.get(t)) ? n : -1;
                }
              })(r, s);
              i >= 0
                ? (r = i)
                : 0 == o && 0 == e
                ? (t.push(r), (r = s))
                : (n.push(s), (o = e));
            }
          }
          return r >= 0 && t.push(r, ...n), t;
        })(P(e));
      }
      let R = (e) => Array.from(e);
      function W(e, t) {
        return e.P.has(t) || e.Q.has(t);
      }
      class U extends Array {
        get is_emoji() {
          return !0;
        }
      }
      function F() {
        let e, t;
        if (s) return;
        let n = b(
            "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"
          ),
          r = () => v(n),
          o = () => new Set(r()),
          i = (e, t) => t.forEach((t) => e.add(t));
        (s = new Map(k(n))),
          (c = o()),
          (l = r()),
          (u = new Set(r().map((e) => l[e]))),
          (l = new Set(l)),
          (p = o()),
          (d = o());
        let a = C(n),
          y = n(),
          x = () => {
            let e = new Set();
            return r().forEach((t) => i(e, a[t])), i(e, r()), e;
          };
        (h = E((e) => {
          let t = E(n).map((e) => e + 96);
          if (t.length) {
            let r = e >= y;
            (t[0] -= 32), (t = I(t)), r && (t = `Restricted[${t}]`);
            let o = x();
            return { N: t, P: o, Q: x(), M: !n(), R: r };
          }
        })),
          (f = o()),
          (w = new Map());
        let B = r()
          .concat(R(f))
          .sort((e, t) => e - t);
        for (let { V: e, M: t } of (B.forEach((e, t) => {
          let r = n(),
            o = (B[t] = r ? B[t - r] : { V: [], M: new Map() });
          o.V.push(e), f.has(e) || w.set(e, o);
        }),
        new Set(w.values()))) {
          let n = [];
          for (let t of e) {
            let e = h.filter((e) => W(e, t)),
              r = n.find(({ G: t }) => e.some((e) => t.has(e)));
            r || ((r = { G: new Set(), V: [] }), n.push(r)),
              r.V.push(t),
              i(r.G, e);
          }
          let r = n.flatMap((e) => R(e.G));
          for (let { G: e, V: o } of n) {
            let n = new Set(r.filter((t) => !e.has(t)));
            for (let e of o) t.set(e, n);
          }
        }
        m = new Set();
        let N = new Set(),
          T = (e) => (m.has(e) ? N.add(e) : m.add(e));
        for (let e of h) {
          for (let t of e.P) T(t);
          for (let t of e.Q) T(t);
        }
        for (let e of m) w.has(e) || N.has(e) || w.set(e, 1);
        for (let r of (i(m, P(m).map(D)),
        (g = ((e = []),
        (t = v(n)),
        (function t({ S: n, B: r }, o, i) {
          if (!(4 & n) || i !== o[o.length - 1])
            for (let a of (2 & n && (i = o[o.length - 1]),
            1 & n && e.push(o),
            r))
              for (let e of a.Q) t(a, [...o, e], i);
        })(
          (function e(r) {
            return {
              S: n(),
              B: E(() => {
                let r = v(n).map((e) => t[e]);
                if (r.length) return e(r);
              }),
              Q: r,
            };
          })([]),
          []
        ),
        e)
          .map((e) => U.from(e))
          .sort(S)),
        (A = new Map()),
        g)) {
          let e = [A];
          for (let t of r) {
            let n = e.map((e) => {
              let n = e.get(t);
              return n || ((n = new Map()), e.set(t, n)), n;
            });
            65039 === t ? e.push(...n) : (e = n);
          }
          for (let t of e) t.V = r;
        }
      }
      function L(e) {
        return (j(e) ? "" : `${q(K([e]))} `) + B(e);
      }
      function q(e) {
        return `"${e}"\u200E`;
      }
      function K(e, t = 1 / 0, n = B) {
        var r, o;
        let i = [];
        (r = e[0]),
          F(),
          l.has(r) && i.push("◌"),
          e.length > t &&
            ((t >>= 1), (e = [...e.slice(0, t), 8230, ...e.slice(-t)]));
        let a = 0,
          s = e.length;
        for (let t = 0; t < s; t++) {
          let r = e[t];
          j(r) && (i.push(I(e.slice(a, t))), i.push(n(r)), (a = t + 1));
        }
        return i.push(I(e.slice(a, s))), i.join("");
      }
      function j(e) {
        return F(), p.has(e);
      }
      function J(e) {
        return Error(`disallowed character: ${L(e)}`);
      }
      function H(e, t) {
        let n = L(t),
          r = h.find((e) => e.P.has(t));
        return (
          r && (n = `${r.N} ${n}`), Error(`illegal mixture: ${e.N} + ${n}`)
        );
      }
      function G(e) {
        return Error(`illegal placement: ${e}`);
      }
      function Y(e) {
        return e.filter((e) => 65039 != e);
      }
      let z = "valid";
      function V(e) {
        var t;
        return (t = (function (e, t, n) {
          if (!e) return [];
          F();
          let r = 0;
          return e.split(".").map((e) => {
            let o = (function (e) {
                let t = [];
                for (let n = 0, r = e.length; n < r; ) {
                  let r = e.codePointAt(n);
                  (n += r < 65536 ? 1 : 2), t.push(r);
                }
                return t;
              })(e),
              i = { input: o, offset: r };
            r += o.length + 1;
            try {
              let e,
                r = (i.tokens = (function (e, t, n) {
                  let r = [],
                    o = [];
                  for (e = e.slice().reverse(); e.length; ) {
                    let i = (function (e, t) {
                      let n,
                        r = A,
                        o = e.length;
                      for (; o && (r = r.get(e[--o])); ) {
                        let { V: i } = r;
                        i &&
                          ((n = i),
                          t && t.push(...e.slice(o).reverse()),
                          (e.length = o));
                      }
                      return n;
                    })(e);
                    if (i) o.length && (r.push(t(o)), (o = [])), r.push(n(i));
                    else {
                      let t = e.pop();
                      if (m.has(t)) o.push(t);
                      else {
                        let e = s.get(t);
                        if (e) o.push(...e);
                        else if (!c.has(t)) throw J(t);
                      }
                    }
                  }
                  return o.length && r.push(t(o)), r;
                })(o, t, n)),
                a = r.length;
              if (!a) throw Error("empty label");
              let p = (i.output = r.flat());
              for (let e = p.lastIndexOf(95); e > 0; )
                if (95 !== p[--e])
                  throw Error("underscore allowed only at start");
              if (
                !(i.emoji = a > 1 || r[0].is_emoji) &&
                p.every((e) => e < 128)
              ) {
                if (p.length >= 4 && 45 == p[2] && 45 == p[3])
                  throw Error(`invalid label extension: "${I(p.slice(0, 4))}"`);
                e = "ASCII";
              } else {
                let t = r.flatMap((e) => (e.is_emoji ? [] : e));
                if (t.length) {
                  if (l.has(p[0])) throw G("leading combining mark");
                  for (let e = 1; e < a; e++) {
                    let t = r[e];
                    if (!t.is_emoji && l.has(t[0]))
                      throw G(
                        `emoji + combining mark: "${I(r[e - 1])} + ${K([
                          t[0],
                        ])}"`
                      );
                  }
                  !(function (e) {
                    let t = e[0],
                      n = y.get(t);
                    if (n) throw G(`leading ${n}`);
                    let r = e.length,
                      o = -1;
                    for (let i = 1; i < r; i++) {
                      t = e[i];
                      let r = y.get(t);
                      if (r) {
                        if (o == i) throw G(`${n} + ${r}`);
                        (o = i + 1), (n = r);
                      }
                    }
                    if (o == r) throw G(`trailing ${n}`);
                  })(p);
                  let n = R(new Set(t)),
                    [o] = (function (e) {
                      let t = h;
                      for (let n of e) {
                        let e = t.filter((e) => W(e, n));
                        if (!e.length)
                          if (h.some((e) => W(e, n))) throw H(t[0], n);
                          else throw J(n);
                        if (((t = e), 1 == e.length)) break;
                      }
                      return t;
                    })(n);
                  (function (e, t) {
                    for (let n of t) if (!W(e, n)) throw H(e, n);
                    if (e.M) {
                      var n;
                      let e = ((n = t), P(n).map(D));
                      for (let t = 1, n = e.length; t < n; t++)
                        if (u.has(e[t])) {
                          let r = t + 1;
                          for (let o; r < n && u.has((o = e[r])); r++)
                            for (let n = t; n < r; n++)
                              if (e[n] == o)
                                throw Error(
                                  `duplicate non-spacing marks: ${L(o)}`
                                );
                          if (r - t > 4)
                            throw Error(
                              `excessive non-spacing marks: ${q(
                                K(e.slice(t - 1, r))
                              )} (${r - t}/4)`
                            );
                          t = r;
                        }
                    }
                  })(o, t),
                    (function (e, t) {
                      let n,
                        r = [];
                      for (let e of t) {
                        let t = w.get(e);
                        if (1 === t) return;
                        if (t) {
                          let r = t.M.get(e);
                          if (
                            !(n = n ? n.filter((e) => r.has(e)) : R(r)).length
                          )
                            return;
                        } else r.push(e);
                      }
                      if (n) {
                        for (let t of n)
                          if (r.every((e) => W(t, e)))
                            throw Error(
                              `whole-script confusable: ${e.N}/${t.N}`
                            );
                      }
                    })(o, n),
                    (e = o.N);
                } else e = "Emoji";
              }
              i.type = e;
            } catch (e) {
              i.error = e;
            }
            return i;
          });
        })(e, O, Y))
          .map(({ input: e, error: n, output: r }) => {
            if (n) {
              let r = n.message;
              throw Error(
                1 == t.length ? r : `Invalid label ${q(K(e, 63))}: ${r}`
              );
            }
            return I(r);
          })
          .join(".");
      }
    },
    2401: function (e, t, n) {
      var r;
      !(function (o, i) {
        "use strict";
        var a = "function",
          s = "undefined",
          c = "object",
          l = "string",
          u = "major",
          p = "model",
          d = "name",
          h = "type",
          f = "vendor",
          w = "version",
          m = "architecture",
          g = "console",
          A = "mobile",
          y = "tablet",
          b = "smarttv",
          v = "wearable",
          C = "embedded",
          k = "Amazon",
          E = "Apple",
          x = "ASUS",
          B = "BlackBerry",
          I = "Browser",
          S = "Chrome",
          N = "Firefox",
          T = "Google",
          D = "Huawei",
          Q = "Microsoft",
          P = "Motorola",
          M = "Opera",
          O = "Samsung",
          R = "Sharp",
          W = "Sony",
          U = "Xiaomi",
          F = "Zebra",
          L = "Facebook",
          q = "Chromium OS",
          K = "Mac OS",
          j = " Browser",
          J = function (e, t) {
            var n = {};
            for (var r in e)
              t[r] && t[r].length % 2 == 0
                ? (n[r] = t[r].concat(e[r]))
                : (n[r] = e[r]);
            return n;
          },
          H = function (e) {
            for (var t = {}, n = 0; n < e.length; n++)
              t[e[n].toUpperCase()] = e[n];
            return t;
          },
          G = function (e, t) {
            return typeof e === l && -1 !== Y(t).indexOf(Y(e));
          },
          Y = function (e) {
            return e.toLowerCase();
          },
          z = function (e, t) {
            if (typeof e === l)
              return (
                (e = e.replace(/^\s\s*/, "")),
                typeof t === s ? e : e.substring(0, 500)
              );
          },
          V = function (e, t) {
            for (var n, r, o, s, l, u, p = 0; p < t.length && !l; ) {
              var d = t[p],
                h = t[p + 1];
              for (n = r = 0; n < d.length && !l && d[n]; )
                if ((l = d[n++].exec(e)))
                  for (o = 0; o < h.length; o++)
                    (u = l[++r]),
                      typeof (s = h[o]) === c && s.length > 0
                        ? 2 === s.length
                          ? typeof s[1] == a
                            ? (this[s[0]] = s[1].call(this, u))
                            : (this[s[0]] = s[1])
                          : 3 === s.length
                          ? typeof s[1] !== a || (s[1].exec && s[1].test)
                            ? (this[s[0]] = u ? u.replace(s[1], s[2]) : void 0)
                            : (this[s[0]] = u
                                ? s[1].call(this, u, s[2])
                                : void 0)
                          : 4 === s.length &&
                            (this[s[0]] = u
                              ? s[3].call(this, u.replace(s[1], s[2]))
                              : i)
                        : (this[s] = u || i);
              p += 2;
            }
          },
          X = function (e, t) {
            for (var n in t)
              if (typeof t[n] === c && t[n].length > 0) {
                for (var r = 0; r < t[n].length; r++)
                  if (G(t[n][r], e)) return "?" === n ? i : n;
              } else if (G(t[n], e)) return "?" === n ? i : n;
            return t.hasOwnProperty("*") ? t["*"] : e;
          },
          Z = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM",
          },
          _ = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [w, [d, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [w, [d, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [d, w],
              [/opios[\/ ]+([\w\.]+)/i],
              [w, [d, M + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [w, [d, M + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [w, [d, M]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [w, [d, "Baidu"]],
              [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
              [w, [d, "Maxthon"]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
                /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
                /(heytap|ovi|115)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [d, w],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [w, [d, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [w, [d, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [w, [d, "UC" + I]],
              [
                /microm.+\bqbcore\/([\w\.]+)/i,
                /\bqbcore\/([\w\.]+).+microm/i,
                /micromessenger\/([\w\.]+)/i,
              ],
              [w, [d, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [w, [d, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [w, [d, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [w, [d, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [w, [d, "Smart Lenovo " + I]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[d, /(.+)/, "$1 Secure " + I], w],
              [/\bfocus\/([\w\.]+)/i],
              [w, [d, N + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [w, [d, M + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [w, [d, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [w, [d, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [w, [d, M + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [w, [d, "MIUI" + j]],
              [/fxios\/([\w\.-]+)/i],
              [w, [d, N]],
              [/\bqihoobrowser\/?([\w\.]*)/i],
              [w, [d, "360"]],
              [/\b(qq)\/([\w\.]+)/i],
              [[d, /(.+)/, "$1Browser"], w],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [[d, /(.+)/, "$1" + j], w],
              [/samsungbrowser\/([\w\.]+)/i],
              [w, [d, O + " Internet"]],
              [/metasr[\/ ]?([\d\.]+)/i],
              [w, [d, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [[d, "Sogou Mobile"], w],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
              ],
              [d, w],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [d],
              [
                /ome\/([\w\.]+) \w* ?(iron) saf/i,
                /ome\/([\w\.]+).+qihu (360)[es]e/i,
              ],
              [w, d],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[d, L], w],
              [
                /(Klarna)\/([\w\.]+)/i,
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(alipay)client\/([\w\.]+)/i,
                /(twitter)(?:and| f.+e\/([\w\.]+))/i,
                /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
              ],
              [d, w],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [w, [d, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [w, [d, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [w, [d, S + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[d, S + " WebView"], w],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [w, [d, "Android " + I]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [d, w],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [w, [d, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [w, d],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                d,
                [
                  w,
                  X,
                  {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/",
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [d, w],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[d, "Netscape"], w],
              [/(wolvic|librewolf)\/([\w\.]+)/i],
              [d, w],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [w, [d, N + " Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i,
              ],
              [d, [w, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [d, [w, /master.|lts./, ""]],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[m, "amd64"]],
              [/(ia32(?=;))/i],
              [[m, Y]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[m, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[m, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[m, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[m, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[m, /ower/, "", Y]],
              [/(sun4\w)[;\)]/i],
              [[m, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[m, Y]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [p, [f, O], [h, y]],
              [
                /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]((?!sm-[lr])[-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [p, [f, O], [h, A]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [p, [f, E], [h, A]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [p, [f, E], [h, y]],
              [/(macintosh);/i],
              [p, [f, E]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [p, [f, R], [h, A]],
              [/(?:honor)([-\w ]+)[;\)]/i],
              [p, [f, "Honor"], [h, A]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [p, [f, D], [h, y]],
              [
                /(?:huawei)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [p, [f, D], [h, A]],
              [
                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
              ],
              [
                [p, /_/g, " "],
                [f, U],
                [h, A],
              ],
              [
                /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
                /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i,
              ],
              [
                [p, /_/g, " "],
                [f, U],
                [h, y],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [p, [f, "OPPO"], [h, A]],
              [/\b(opd2\d{3}a?) bui/i],
              [p, [f, "OPPO"], [h, y]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [p, [f, "Vivo"], [h, A]],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [p, [f, "Realme"], [h, A]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [p, [f, P], [h, A]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [p, [f, P], [h, y]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [p, [f, "LG"], [h, y]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [p, [f, "LG"], [h, A]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [p, [f, "Lenovo"], [h, y]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [p, /_/g, " "],
                [f, "Nokia"],
                [h, A],
              ],
              [/(pixel c)\b/i],
              [p, [f, T], [h, y]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [p, [f, T], [h, A]],
              [
                /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [p, [f, W], [h, A]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [p, "Xperia Tablet"],
                [f, W],
                [h, y],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [p, [f, "OnePlus"], [h, A]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [p, [f, k], [h, y]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [p, /(.+)/g, "Fire Phone $1"],
                [f, k],
                [h, A],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [p, f, [h, y]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [p, [f, B], [h, A]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [p, [f, x], [h, y]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [p, [f, x], [h, A]],
              [/(nexus 9)/i],
              [p, [f, "HTC"], [h, y]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [f, [p, /_/g, " "], [h, A]],
              [
                /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
              ],
              [p, [f, "TCL"], [h, y]],
              [/(itel) ((\w+))/i],
              [
                [f, Y],
                p,
                [h, X, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [p, [f, "Acer"], [h, y]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [p, [f, "Meizu"], [h, A]],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [p, [f, "Ulefone"], [h, A]],
              [
                /; (energy ?\w+)(?: bui|\))/i,
                /; energizer ([\w ]+)(?: bui|\))/i,
              ],
              [p, [f, "Energizer"], [h, A]],
              [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
              [p, [f, "Cat"], [h, A]],
              [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
              [p, [f, "Smartfren"], [h, A]],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [p, [f, "Nothing"], [h, A]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
                /; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [f, p, [h, A]],
              [
                /(imo) (tab \w+)/i,
                /(kobo)\s(ereader|touch)/i,
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [f, p, [h, y]],
              [/(surface duo)/i],
              [p, [f, Q], [h, y]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [p, [f, "Fairphone"], [h, A]],
              [/(u304aa)/i],
              [p, [f, "AT&T"], [h, A]],
              [/\bsie-(\w*)/i],
              [p, [f, "Siemens"], [h, A]],
              [/\b(rct\w+) b/i],
              [p, [f, "RCA"], [h, y]],
              [/\b(venue[\d ]{2,7}) b/i],
              [p, [f, "Dell"], [h, y]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [p, [f, "Verizon"], [h, y]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [p, [f, "Barnes & Noble"], [h, y]],
              [/\b(tm\d{3}\w+) b/i],
              [p, [f, "NuVision"], [h, y]],
              [/\b(k88) b/i],
              [p, [f, "ZTE"], [h, y]],
              [/\b(nx\d{3}j) b/i],
              [p, [f, "ZTE"], [h, A]],
              [/\b(gen\d{3}) b.+49h/i],
              [p, [f, "Swiss"], [h, A]],
              [/\b(zur\d{3}) b/i],
              [p, [f, "Swiss"], [h, y]],
              [/\b((zeki)?tb.*\b) b/i],
              [p, [f, "Zeki"], [h, y]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[f, "Dragon Touch"], p, [h, y]],
              [/\b(ns-?\w{0,9}) b/i],
              [p, [f, "Insignia"], [h, y]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [p, [f, "NextBook"], [h, y]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[f, "Voice"], p, [h, A]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[f, "LvTel"], p, [h, A]],
              [/\b(ph-1) /i],
              [p, [f, "Essential"], [h, A]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [p, [f, "Envizen"], [h, y]],
              [/\b(trio[-\w\. ]+) b/i],
              [p, [f, "MachSpeed"], [h, y]],
              [/\btu_(1491) b/i],
              [p, [f, "Rotor"], [h, y]],
              [/(shield[\w ]+) b/i],
              [p, [f, "Nvidia"], [h, y]],
              [/(sprint) (\w+)/i],
              [f, p, [h, A]],
              [/(kin\.[onetw]{3})/i],
              [
                [p, /\./g, " "],
                [f, Q],
                [h, A],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [p, [f, F], [h, y]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [p, [f, F], [h, A]],
              [/smart-tv.+(samsung)/i],
              [f, [h, b]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [p, /^/, "SmartTV"],
                [f, O],
                [h, b],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [f, "LG"],
                [h, b],
              ],
              [/(apple) ?tv/i],
              [f, [p, E + " TV"], [h, b]],
              [/crkey/i],
              [
                [p, S + "cast"],
                [f, T],
                [h, b],
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [p, [f, k], [h, b]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [p, [f, R], [h, b]],
              [/(bravia[\w ]+)( bui|\))/i],
              [p, [f, W], [h, b]],
              [/(mitv-\w{5}) bui/i],
              [p, [f, U], [h, b]],
              [/Hbbtv.*(technisat) (.*);/i],
              [f, p, [h, b]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [f, z],
                [p, z],
                [h, b],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[h, b]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [f, p, [h, g]],
              [/droid.+; (shield) bui/i],
              [p, [f, "Nvidia"], [h, g]],
              [/(playstation [345portablevi]+)/i],
              [p, [f, W], [h, g]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [p, [f, Q], [h, g]],
              [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
              [p, [f, O], [h, v]],
              [/((pebble))app/i],
              [f, p, [h, v]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [p, [f, E], [h, v]],
              [/droid.+; (glass) \d/i],
              [p, [f, T], [h, v]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [p, [f, F], [h, v]],
              [/droid.+; (glass) \d/i],
              [p, [f, T], [h, v]],
              [/(pico) (4|neo3(?: link|pro)?)/i],
              [f, p, [h, v]],
              [/; (quest( \d| pro)?)/i],
              [p, [f, L], [h, v]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [f, [h, C]],
              [/(aeobc)\b/i],
              [p, [f, k], [h, C]],
              [
                /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i,
              ],
              [p, [h, A]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [p, [h, y]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[h, y]],
              [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
              ],
              [[h, A]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [p, [f, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [w, [d, "EdgeHTML"]],
              [/(arkweb)\/([\w\.]+)/i],
              [d, w],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [w, [d, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
              ],
              [d, w],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [w, d],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [d, w],
              [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
              [d, [w, X, Z]],
              [
                /windows nt 6\.2; (arm)/i,
                /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
              ],
              [
                [w, X, Z],
                [d, "Windows"],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [w, /_/g, "."],
                [d, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [d, K],
                [w, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [w, d],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [d, w],
              [/\(bb(10);/i],
              [w, [d, B]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [w, [d, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [w, [d, N + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [w, [d, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [w, [d, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [w, [d, S + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[d, q], w],
              [
                /panasonic;(viera)/i,
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [d, w],
              [/(sunos) ?([\w\.\d]*)/i],
              [[d, "Solaris"], w],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [d, w],
            ],
          },
          $ = function (e, t) {
            if ((typeof e === c && ((t = e), (e = i)), !(this instanceof $)))
              return new $(e, t).getResult();
            var n = typeof o !== s && o.navigator ? o.navigator : i,
              r = e || (n && n.userAgent ? n.userAgent : ""),
              g = n && n.userAgentData ? n.userAgentData : i,
              b = t ? J(_, t) : _,
              v = n && n.userAgent == r;
            return (
              (this.getBrowser = function () {
                var e,
                  t = {};
                return (
                  (t[d] = i),
                  (t[w] = i),
                  V.call(t, r, b.browser),
                  (t[u] =
                    typeof (e = t[w]) === l
                      ? e.replace(/[^\d\.]/g, "").split(".")[0]
                      : i),
                  v &&
                    n &&
                    n.brave &&
                    typeof n.brave.isBrave == a &&
                    (t[d] = "Brave"),
                  t
                );
              }),
              (this.getCPU = function () {
                var e = {};
                return (e[m] = i), V.call(e, r, b.cpu), e;
              }),
              (this.getDevice = function () {
                var e = {};
                return (
                  (e[f] = i),
                  (e[p] = i),
                  (e[h] = i),
                  V.call(e, r, b.device),
                  v && !e[h] && g && g.mobile && (e[h] = A),
                  v &&
                    "Macintosh" == e[p] &&
                    n &&
                    typeof n.standalone !== s &&
                    n.maxTouchPoints &&
                    n.maxTouchPoints > 2 &&
                    ((e[p] = "iPad"), (e[h] = y)),
                  e
                );
              }),
              (this.getEngine = function () {
                var e = {};
                return (e[d] = i), (e[w] = i), V.call(e, r, b.engine), e;
              }),
              (this.getOS = function () {
                var e = {};
                return (
                  (e[d] = i),
                  (e[w] = i),
                  V.call(e, r, b.os),
                  v &&
                    !e[d] &&
                    g &&
                    g.platform &&
                    "Unknown" != g.platform &&
                    (e[d] = g.platform
                      .replace(/chrome os/i, q)
                      .replace(/macos/i, K)),
                  e
                );
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return r;
              }),
              (this.setUA = function (e) {
                return (
                  (r = typeof e === l && e.length > 500 ? z(e, 500) : e), this
                );
              }),
              this.setUA(r),
              this
            );
          };
        ($.VERSION = "1.0.40"),
          ($.BROWSER = H([d, w, u])),
          ($.CPU = H([m])),
          ($.DEVICE = H([p, f, h, g, A, b, y, v, C])),
          ($.ENGINE = $.OS = H([d, w])),
          typeof t !== s
            ? (e.exports && (t = e.exports = $), (t.UAParser = $))
            : n.amdO
            ? i ===
                (r = function () {
                  return $;
                }.call(t, n, t, e)) || (e.exports = r)
            : typeof o !== s && (o.UAParser = $);
        var ee = typeof o !== s && (o.jQuery || o.Zepto);
        if (ee && !ee.ua) {
          var et = new $();
          (ee.ua = et.getResult()),
            (ee.ua.get = function () {
              return et.getUA();
            }),
            (ee.ua.set = function (e) {
              et.setUA(e);
              var t = et.getResult();
              for (var n in t) ee.ua[n] = t[n];
            });
        }
      })("object" == typeof window ? window : this);
    },
    8527: (e, t) => {
      function n(e) {
        if (("number" == typeof e && (e = e.toString()), "string" != typeof e))
          throw Error("Color should be defined as hex string");
        let t = e.slice().replace("#", "").split("");
        if (t.length < 3 || 5 === t.length || t.length > 8)
          throw Error("Invalid hex color: " + e);
        (3 === t.length || 4 === t.length) &&
          (t = Array.prototype.concat.apply(
            [],
            t.map(function (e) {
              return [e, e];
            })
          )),
          6 === t.length && t.push("F", "F");
        let n = parseInt(t.join(""), 16);
        return {
          r: (n >> 24) & 255,
          g: (n >> 16) & 255,
          b: (n >> 8) & 255,
          a: 255 & n,
          hex: "#" + t.slice(0, 6).join(""),
        };
      }
      (t.getOptions = function (e) {
        e || (e = {}), e.color || (e.color = {});
        let t =
            void 0 === e.margin || null === e.margin || e.margin < 0
              ? 4
              : e.margin,
          r = e.width && e.width >= 21 ? e.width : void 0,
          o = e.scale || 4;
        return {
          width: r,
          scale: r ? 4 : o,
          margin: t,
          color: {
            dark: n(e.color.dark || "#000000ff"),
            light: n(e.color.light || "#ffffffff"),
          },
          type: e.type,
          rendererOpts: e.rendererOpts || {},
        };
      }),
        (t.getScale = function (e, t) {
          return t.width && t.width >= e + 2 * t.margin
            ? t.width / (e + 2 * t.margin)
            : t.scale;
        }),
        (t.getImageWidth = function (e, n) {
          let r = t.getScale(e, n);
          return Math.floor((e + 2 * n.margin) * r);
        }),
        (t.qrToImageData = function (e, n, r) {
          let o = n.modules.size,
            i = n.modules.data,
            a = t.getScale(o, r),
            s = Math.floor((o + 2 * r.margin) * a),
            c = r.margin * a,
            l = [r.color.light, r.color.dark];
          for (let t = 0; t < s; t++)
            for (let n = 0; n < s; n++) {
              let u = (t * s + n) * 4,
                p = r.color.light;
              t >= c &&
                n >= c &&
                t < s - c &&
                n < s - c &&
                (p =
                  l[
                    +!!i[Math.floor((t - c) / a) * o + Math.floor((n - c) / a)]
                  ]),
                (e[u++] = p.r),
                (e[u++] = p.g),
                (e[u++] = p.b),
                (e[u] = p.a);
            }
        });
    },
    9894: (e, t, n) => {
      "use strict";
      function r(e) {
        return e;
      }
      n.d(t, { U: () => r });
    },
    10678: (e, t, n) => {
      "use strict";
      function r(e) {
        var t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e;
      }
      function o(e, t) {
        var n = {};
        if ("object" == typeof t)
          !(function e(t, n) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [],
              o = {};
            for (var i in t) {
              var a = t[i],
                s = [...r, i];
              "string" == typeof a || "number" == typeof a || null == a
                ? (o[i] = n(a, s))
                : "object" != typeof a || Array.isArray(a)
                ? console.warn(
                    'Skipping invalid key "'
                      .concat(
                        s.join("."),
                        '". Should be a string, number, null or object. Received: "'
                      )
                      .concat(Array.isArray(a) ? "Array" : typeof a, '"')
                  )
                : (o[i] = e(a, n, s));
            }
            return o;
          })(t, (t, o) => {
            null != t &&
              (n[
                r(
                  (function (e, t) {
                    var n = e;
                    for (var r of t) {
                      if (!(r in n))
                        throw Error(
                          "Path ".concat(
                            t.join(" -> "),
                            " does not exist in object"
                          )
                        );
                      n = n[r];
                    }
                    return n;
                  })(e, o)
                )
              ] = String(t));
          });
        else
          for (var o in e) {
            var i = e[o];
            null != i && (n[r(o)] = i);
          }
        return (
          Object.defineProperty(n, "toString", {
            value: function () {
              return Object.keys(this)
                .map((e) => "".concat(e, ":").concat(this[e]))
                .join(";");
            },
            writable: !1,
          }),
          n
        );
      }
      n.d(t, { D: () => o });
    },
    12228: (e, t, n) => {
      "use strict";
      n.d(t, { n: () => r });
      var r =
        '{\n  "connect_wallet": {\n    "label": "Connect Wallet",\n    "wrong_network": {\n      "label": "Wrong network"\n    }\n  },\n\n  "intro": {\n    "title": "What is a Wallet?",\n    "description": "A wallet is used to send, receive, store, and display digital assets. It\'s also a new way to log in, without needing to create new accounts and passwords on every website.",\n    "digital_asset": {\n      "title": "A Home for your Digital Assets",\n      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."\n    },\n    "login": {\n      "title": "A New Way to Log In",\n      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."\n    },\n    "get": {\n      "label": "Get a Wallet"\n    },\n    "learn_more": {\n      "label": "Learn More"\n    }\n  },\n\n  "sign_in": {\n    "label": "Verify your account",\n    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",\n    "message": {\n      "send": "Sign message",\n      "preparing": "Preparing message...",\n      "cancel": "Cancel",\n      "preparing_error": "Error preparing message, please retry!"\n    },\n    "signature": {\n      "waiting": "Waiting for signature...",\n      "verifying": "Verifying signature...",\n      "signing_error": "Error signing message, please retry!",\n      "verifying_error": "Error verifying signature, please retry!",\n      "oops_error": "Oops, something went wrong!"\n    }\n  },\n\n  "connect": {\n    "label": "Connect",\n    "title": "Connect a Wallet",\n    "new_to_ethereum": {\n      "description": "New to Ethereum wallets?",\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "learn_more": {\n      "label": "Learn more"\n    },\n    "recent": "Recent",\n    "status": {\n      "opening": "Opening %{wallet}...",\n      "connecting": "Connecting",\n      "connect_mobile": "Continue in %{wallet}",\n      "not_installed": "%{wallet} is not installed",\n      "not_available": "%{wallet} is not available",\n      "confirm": "Confirm connection in the extension",\n      "confirm_mobile": "Accept connection request in the wallet"\n    },\n    "secondary_action": {\n      "get": {\n        "description": "Don\'t have %{wallet}?",\n        "label": "GET"\n      },\n      "install": {\n        "label": "INSTALL"\n      },\n      "retry": {\n        "label": "RETRY"\n      }\n    },\n    "walletconnect": {\n      "description": {\n        "full": "Need the official WalletConnect modal?",\n        "compact": "Need the WalletConnect modal?"\n      },\n      "open": {\n        "label": "OPEN"\n      }\n    }\n  },\n\n  "connect_scan": {\n    "title": "Scan with %{wallet}",\n    "fallback_title": "Scan with your phone"\n  },\n\n  "connector_group": {\n    "installed": "Installed",\n    "recommended": "Recommended",\n    "other": "Other",\n    "popular": "Popular",\n    "more": "More",\n    "others": "Others"\n  },\n\n  "get": {\n    "title": "Get a Wallet",\n    "action": {\n      "label": "GET"\n    },\n    "mobile": {\n      "description": "Mobile Wallet"\n    },\n    "extension": {\n      "description": "Browser Extension"\n    },\n    "mobile_and_extension": {\n      "description": "Mobile Wallet and Extension"\n    },\n    "mobile_and_desktop": {\n      "description": "Mobile and Desktop Wallet"\n    },\n    "looking_for": {\n      "title": "Not what you\'re looking for?",\n      "mobile": {\n        "description": "Select a wallet on the main screen to get started with a different wallet provider."\n      },\n      "desktop": {\n        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",\n        "wide_description": "Select a wallet on the left to get started with a different wallet provider."\n      }\n    }\n  },\n\n  "get_options": {\n    "title": "Get started with %{wallet}",\n    "short_title": "Get %{wallet}",\n    "mobile": {\n      "title": "%{wallet} for Mobile",\n      "description": "Use the mobile wallet to explore the world of Ethereum.",\n      "download": {\n        "label": "Get the app"\n      }\n    },\n    "extension": {\n      "title": "%{wallet} for %{browser}",\n      "description": "Access your wallet right from your favorite web browser.",\n      "download": {\n        "label": "Add to %{browser}"\n      }\n    },\n    "desktop": {\n      "title": "%{wallet} for %{platform}",\n      "description": "Access your wallet natively from your powerful desktop.",\n      "download": {\n        "label": "Add to %{platform}"\n      }\n    }\n  },\n\n  "get_mobile": {\n    "title": "Install %{wallet}",\n    "description": "Scan with your phone to download on iOS or Android",\n    "continue": {\n      "label": "Continue"\n    }\n  },\n\n  "get_instructions": {\n    "mobile": {\n      "connect": {\n        "label": "Connect"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "extension": {\n      "refresh": {\n        "label": "Refresh"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "desktop": {\n      "connect": {\n        "label": "Connect"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    }\n  },\n\n  "chains": {\n    "title": "Switch Networks",\n    "wrong_network": "Wrong network detected, switch or disconnect to continue.",\n    "confirm": "Confirm in Wallet",\n    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",\n    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",\n    "disconnect": "Disconnect",\n    "connected": "Connected"\n  },\n\n  "profile": {\n    "disconnect": {\n      "label": "Disconnect"\n    },\n    "copy_address": {\n      "label": "Copy Address",\n      "copied": "Copied!"\n    },\n    "explorer": {\n      "label": "View more on explorer"\n    },\n    "transactions": {\n      "description": "%{appName} transactions will appear here...",\n      "description_fallback": "Your transactions will appear here...",\n      "recent": {\n        "title": "Recent Transactions"\n      },\n      "clear": {\n        "label": "Clear All"\n      }\n    }\n  },\n\n  "wallet_connectors": {\n    "argent": {\n      "qr_code": {\n        "step1": {\n          "description": "Put Argent on your home screen for faster access to your wallet.",\n          "title": "Open the Argent app"\n        },\n        "step2": {\n          "description": "Create a wallet and username, or import an existing wallet.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the Scan QR button"\n        }\n      }\n    },\n\n    "berasig": {\n      "extension": {\n        "step1": {\n          "title": "Install the BeraSig extension",\n          "description": "We recommend pinning BeraSig to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "best": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Best Wallet app",\n          "description": "Add Best Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "bifrost": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",\n          "title": "Open the Bifrost Wallet app"\n        },\n        "step2": {\n          "description": "Create or import a wallet using your recovery phrase.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      }\n    },\n\n    "bitget": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",\n          "title": "Open the Bitget Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Bitget Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "bitski": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",\n          "title": "Install the Bitski extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "bitverse": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Bitverse Wallet app",\n          "description": "Add Bitverse Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "bloom": {\n      "desktop": {\n        "step1": {\n          "title": "Open the Bloom Wallet app",\n          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "description": "Create or import a wallet using your recovery phrase.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",\n          "title": "Click on Connect"\n        }\n      }\n    },\n\n    "bybit": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bybit on your home screen for faster access to your wallet.",\n          "title": "Open the Bybit app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "Click at the top right of your browser and pin Bybit Wallet for easy access.",\n          "title": "Install the Bybit Wallet extension"\n        },\n        "step2": {\n          "description": "Create a new wallet or import an existing one.",\n          "title": "Create or Import a wallet"\n        },\n        "step3": {\n          "description": "Once you set up Bybit Wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "binance": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Binance on your home screen for faster access to your wallet.",\n          "title": "Open the Binance app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      }\n    },\n\n    "coin98": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",\n          "title": "Open the Coin98 Wallet app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",\n          "title": "Install the Coin98 Wallet extension"\n        },\n        "step2": {\n          "description": "Create a new wallet or import an existing one.",\n          "title": "Create or Import a wallet"\n        },\n        "step3": {\n          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "coinbase": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",\n          "title": "Open the Coinbase Wallet app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using the cloud backup feature.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Coinbase Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "compass": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Compass Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Compass Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "core": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Core on your home screen for faster access to your wallet.",\n          "title": "Open the Core app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",\n          "title": "Install the Core extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "fox": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting FoxWallet on your home screen for quicker access.",\n          "title": "Open the FoxWallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      }\n    },\n\n    "frontier": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",\n          "title": "Open the Frontier Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Frontier Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "im_token": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the imToken app",\n          "description": "Put imToken app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "iopay": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting ioPay on your home screen for faster access to your wallet.",\n          "title": "Open the ioPay app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      }\n    },\n\n    "kaikas": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Kaikas to your taskbar for quicker access to your wallet.",\n          "title": "Install the Kaikas extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kaikas app",\n          "description": "Put Kaikas app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kaia": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Kaia to your taskbar for quicker access to your wallet.",\n          "title": "Install the Kaia extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kaia app",\n          "description": "Put Kaia app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kraken": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kraken Wallet app",\n          "description": "Add Kraken Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kresus": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kresus Wallet app",\n          "description": "Add Kresus Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "magicEden": {\n      "extension": {\n        "step1": {\n          "title": "Install the Magic Eden extension",\n          "description": "We recommend pinning Magic Eden to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "metamask": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the MetaMask app",\n          "description": "We recommend putting MetaMask on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the MetaMask extension",\n          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "nestwallet": {\n      "extension": {\n        "step1": {\n          "title": "Install the NestWallet extension",\n          "description": "We recommend pinning NestWallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "okx": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the OKX Wallet app",\n          "description": "We recommend putting OKX Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the OKX Wallet extension",\n          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "omni": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Omni app",\n          "description": "Add Omni to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "1inch": {\n      "qr_code": {\n        "step1": {\n          "description": "Put 1inch Wallet on your home screen for faster access to your wallet.",\n          "title": "Open the 1inch Wallet app"\n        },\n        "step2": {\n          "description": "Create a wallet and username, or import an existing wallet.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the Scan QR button"\n        }\n      }\n    },\n\n    "token_pocket": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the TokenPocket app",\n          "description": "We recommend putting TokenPocket on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the TokenPocket extension",\n          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "trust": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Trust Wallet app",\n          "description": "Put Trust Wallet on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the Trust Wallet extension",\n          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."\n        },\n        "step2": {\n          "title": "Create or Import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "uniswap": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Uniswap app",\n          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "zerion": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Zerion app",\n          "description": "We recommend putting Zerion on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the Zerion extension",\n          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "rainbow": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Rainbow app",\n          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "You can easily backup your wallet using our backup feature on your phone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "enkrypt": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Enkrypt Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "frame": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",\n          "title": "Install Frame & the companion extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "one_key": {\n      "extension": {\n        "step1": {\n          "title": "Install the OneKey Wallet extension",\n          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "paraswap": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the ParaSwap app",\n          "description": "Add ParaSwap Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "phantom": {\n      "extension": {\n        "step1": {\n          "title": "Install the Phantom extension",\n          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "rabby": {\n      "extension": {\n        "step1": {\n          "title": "Install the Rabby extension",\n          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "ronin": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Ronin Wallet on your home screen for quicker access.",\n          "title": "Open the Ronin Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Ronin Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "ramper": {\n      "extension": {\n        "step1": {\n          "title": "Install the Ramper extension",\n          "description": "We recommend pinning Ramper to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "safeheron": {\n      "extension": {\n        "step1": {\n          "title": "Install the Core extension",\n          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "taho": {\n      "extension": {\n        "step1": {\n          "title": "Install the Taho extension",\n          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "wigwam": {\n      "extension": {\n        "step1": {\n          "title": "Install the Wigwam extension",\n          "description": "We recommend pinning Wigwam to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "talisman": {\n      "extension": {\n        "step1": {\n          "title": "Install the Talisman extension",\n          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import an Ethereum Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "xdefi": {\n      "extension": {\n        "step1": {\n          "title": "Install the XDEFI Wallet extension",\n          "description": "We recommend pinning XDEFI Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "zeal": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Zeal app",\n          "description": "Add Zeal Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      },\n      "extension": {\n        "step1": {\n          "title": "Install the Zeal extension",\n          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "safepal": {\n      "extension": {\n        "step1": {\n          "title": "Install the SafePal Wallet extension",\n          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."\n        },\n        "step2": {\n          "title": "Create or Import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the SafePal Wallet app",\n          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "desig": {\n      "extension": {\n        "step1": {\n          "title": "Install the Desig extension",\n          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "subwallet": {\n      "extension": {\n        "step1": {\n          "title": "Install the SubWallet extension",\n          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the SubWallet app",\n          "description": "We recommend putting SubWallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "clv": {\n      "extension": {\n        "step1": {\n          "title": "Install the CLV Wallet extension",\n          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the CLV Wallet app",\n          "description": "We recommend putting CLV Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "okto": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Okto app",\n          "description": "Add Okto to your home screen for quick access"\n        },\n        "step2": {\n          "title": "Create an MPC Wallet",\n          "description": "Create an account and generate a wallet"\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "ledger": {\n      "desktop": {\n        "step1": {\n          "title": "Open the Ledger Live app",\n          "description": "We recommend putting Ledger Live on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Set up your Ledger",\n          "description": "Set up a new Ledger or connect to an existing one."\n        },\n        "step3": {\n          "title": "Connect",\n          "description": "A connection prompt will appear for you to connect your wallet."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Ledger Live app",\n          "description": "We recommend putting Ledger Live on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Set up your Ledger",\n          "description": "You can either sync with the desktop app or connect your Ledger."\n        },\n        "step3": {\n          "title": "Scan the code",\n          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "valora": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Valora app",\n          "description": "We recommend putting Valora on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "gate": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Gate app",\n          "description": "We recommend putting Gate on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n      "extension": {\n        "step1": {\n          "title": "Install the Gate extension",\n          "description": "We recommend pinning Gate to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "xportal": {\n      "qr_code": {\n        "step1": {\n          "description": "Put xPortal on your home screen for faster access to your wallet.",\n          "title": "Open the xPortal app"\n        },\n        "step2": {\n          "description": "Create a wallet or import an existing one.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the Scan QR button"\n        }\n      }\n    },\n\n    "mew": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting MEW Wallet on your home screen for quicker access.",\n          "title": "Open the MEW Wallet app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using the cloud backup feature.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      }\n    }\n  },\n\n  "zilpay": {\n    "qr_code": {\n      "step1": {\n        "title": "Open the ZilPay app",\n        "description": "Add ZilPay to your home screen for faster access to your wallet."\n      },\n      "step2": {\n        "title": "Create or Import a Wallet",\n        "description": "Create a new wallet or import an existing one."\n      },\n      "step3": {\n        "title": "Tap the scan button",\n        "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n      }\n    }\n  }\n}\n';
    },
    12878: (e) => {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        n = "~";
      function r() {}
      function o(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function i(e, t, r, i, a) {
        if ("function" != typeof r)
          throw TypeError("The listener must be a function");
        var s = new o(r, i || e, a),
          c = n ? n + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], s])
              : e._events[c].push(s)
            : ((e._events[c] = s), e._eventsCount++),
          e
        );
      }
      function a(e, t) {
        0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
      }
      function s() {
        (this._events = new r()), (this._eventsCount = 0);
      }
      Object.create &&
        ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
        (s.prototype.eventNames = function () {
          var e,
            r,
            o = [];
          if (0 === this._eventsCount) return o;
          for (r in (e = this._events))
            t.call(e, r) && o.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols
            ? o.concat(Object.getOwnPropertySymbols(e))
            : o;
        }),
        (s.prototype.listeners = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var o = 0, i = r.length, a = Array(i); o < i; o++)
            a[o] = r[o].fn;
          return a;
        }),
        (s.prototype.listenerCount = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (s.prototype.emit = function (e, t, r, o, i, a) {
          var s = n ? n + e : e;
          if (!this._events[s]) return !1;
          var c,
            l,
            u = this._events[s],
            p = arguments.length;
          if (u.fn) {
            switch ((u.once && this.removeListener(e, u.fn, void 0, !0), p)) {
              case 1:
                return u.fn.call(u.context), !0;
              case 2:
                return u.fn.call(u.context, t), !0;
              case 3:
                return u.fn.call(u.context, t, r), !0;
              case 4:
                return u.fn.call(u.context, t, r, o), !0;
              case 5:
                return u.fn.call(u.context, t, r, o, i), !0;
              case 6:
                return u.fn.call(u.context, t, r, o, i, a), !0;
            }
            for (l = 1, c = Array(p - 1); l < p; l++) c[l - 1] = arguments[l];
            u.fn.apply(u.context, c);
          } else {
            var d,
              h = u.length;
            for (l = 0; l < h; l++)
              switch (
                (u[l].once && this.removeListener(e, u[l].fn, void 0, !0), p)
              ) {
                case 1:
                  u[l].fn.call(u[l].context);
                  break;
                case 2:
                  u[l].fn.call(u[l].context, t);
                  break;
                case 3:
                  u[l].fn.call(u[l].context, t, r);
                  break;
                case 4:
                  u[l].fn.call(u[l].context, t, r, o);
                  break;
                default:
                  if (!c)
                    for (d = 1, c = Array(p - 1); d < p; d++)
                      c[d - 1] = arguments[d];
                  u[l].fn.apply(u[l].context, c);
              }
          }
          return !0;
        }),
        (s.prototype.on = function (e, t, n) {
          return i(this, e, t, n, !1);
        }),
        (s.prototype.once = function (e, t, n) {
          return i(this, e, t, n, !0);
        }),
        (s.prototype.removeListener = function (e, t, r, o) {
          var i = n ? n + e : e;
          if (!this._events[i]) return this;
          if (!t) return a(this, i), this;
          var s = this._events[i];
          if (s.fn)
            s.fn !== t ||
              (o && !s.once) ||
              (r && s.context !== r) ||
              a(this, i);
          else {
            for (var c = 0, l = [], u = s.length; c < u; c++)
              (s[c].fn !== t ||
                (o && !s[c].once) ||
                (r && s[c].context !== r)) &&
                l.push(s[c]);
            l.length
              ? (this._events[i] = 1 === l.length ? l[0] : l)
              : a(this, i);
          }
          return this;
        }),
        (s.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = n ? n + e : e), this._events[t] && a(this, t))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.addListener = s.prototype.on),
        (s.prefixed = n),
        (s.EventEmitter = s),
        (e.exports = s);
    },
    15580: (e, t, n) => {
      let r = n(43585),
        o = n(46087);
      function i(e) {
        (this.mode = r.KANJI), (this.data = e);
      }
      (i.getBitsLength = function (e) {
        return 13 * e;
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (e) {
          let t;
          for (t = 0; t < this.data.length; t++) {
            let n = o.toSJIS(this.data[t]);
            if (n >= 33088 && n <= 40956) n -= 33088;
            else if (n >= 57408 && n <= 60351) n -= 49472;
            else
              throw Error(
                "Invalid SJIS character: " +
                  this.data[t] +
                  "\nMake sure your charset is UTF-8"
              );
            (n = ((n >>> 8) & 255) * 192 + (255 & n)), e.put(n, 13);
          }
        }),
        (e.exports = i);
    },
    16860: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => c });
      var r = n(9894),
        o = n(77752),
        i = n(35883),
        a = n(81379),
        s = n(67622);
      function c(e = {}) {
        var t, l;
        let u, p, d, h, f, w, m, g, A;
        return "3" === e.version || e.headlessMode
          ? ((t = e),
            (0, r.U)((e) => ({
              id: "coinbaseWalletSDK",
              name: "Coinbase Wallet",
              rdns: "com.coinbase.wallet",
              type: c.type,
              async connect({ chainId: e } = {}) {
                try {
                  let t = await this.getProvider(),
                    n = (
                      await t.request({ method: "eth_requestAccounts" })
                    ).map((e) => (0, i.b)(e));
                  d ||
                    ((d = this.onAccountsChanged.bind(this)),
                    t.on("accountsChanged", d)),
                    h ||
                      ((h = this.onChainChanged.bind(this)),
                      t.on("chainChanged", h)),
                    f ||
                      ((f = this.onDisconnect.bind(this)),
                      t.on("disconnect", f));
                  let r = await this.getChainId();
                  if (e && r !== e) {
                    let t = await this.switchChain({ chainId: e }).catch(
                      (e) => {
                        if (e.code === a.vx.code) throw e;
                        return { id: r };
                      }
                    );
                    r = t?.id ?? r;
                  }
                  return { accounts: n, chainId: r };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account)/i.test(
                      e.message
                    )
                  )
                    throw new a.vx(e);
                  throw e;
                }
              },
              async disconnect() {
                let e = await this.getProvider();
                d && (e.removeListener("accountsChanged", d), (d = void 0)),
                  h && (e.removeListener("chainChanged", h), (h = void 0)),
                  f && (e.removeListener("disconnect", f), (f = void 0)),
                  e.disconnect(),
                  e.close();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, i.b)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              async getProvider() {
                if (!p) {
                  u = new (await (async () => {
                    let { default: e } = await Promise.all([
                      n.e(2524),
                      n.e(7446),
                    ]).then(n.t.bind(n, 62524, 19));
                    return "function" != typeof e &&
                      "function" == typeof e.default
                      ? e.default
                      : e;
                  })())({ ...t, reloadOnDisconnect: !1 });
                  let r = u.walletExtension?.getChainId(),
                    o =
                      e.chains.find((e) =>
                        t.chainId ? e.id === t.chainId : e.id === r
                      ) || e.chains[0],
                    i = t.chainId || o?.id,
                    a = t.jsonRpcUrl || o?.rpcUrls.default.http[0];
                  p = u.makeWeb3Provider(a, i);
                }
                return p;
              },
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch {
                  return !1;
                }
              },
              async switchChain({ addEthereumChainParameter: t, chainId: n }) {
                let r = e.chains.find((e) => e.id === n);
                if (!r) throw new a.ch(new o.nk());
                let i = await this.getProvider();
                try {
                  return (
                    await i.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, s.cK)(r.id) }],
                    }),
                    r
                  );
                } catch (e) {
                  if (4902 === e.code)
                    try {
                      let e, o;
                      (e = t?.blockExplorerUrls
                        ? t.blockExplorerUrls
                        : r.blockExplorers?.default.url
                        ? [r.blockExplorers?.default.url]
                        : []),
                        (o = t?.rpcUrls?.length
                          ? t.rpcUrls
                          : [r.rpcUrls.default?.http[0] ?? ""]);
                      let a = {
                        blockExplorerUrls: e,
                        chainId: (0, s.cK)(n),
                        chainName: t?.chainName ?? r.name,
                        iconUrls: t?.iconUrls,
                        nativeCurrency: t?.nativeCurrency ?? r.nativeCurrency,
                        rpcUrls: o,
                      };
                      return (
                        await i.request({
                          method: "wallet_addEthereumChain",
                          params: [a],
                        }),
                        r
                      );
                    } catch (e) {
                      throw new a.vx(e);
                    }
                  throw new a.ch(e);
                }
              },
              onAccountsChanged(t) {
                0 === t.length
                  ? this.onDisconnect()
                  : e.emitter.emit("change", {
                      accounts: t.map((e) => (0, i.b)(e)),
                    });
              },
              onChainChanged(t) {
                let n = Number(t);
                e.emitter.emit("change", { chainId: n });
              },
              async onDisconnect(t) {
                e.emitter.emit("disconnect");
                let n = await this.getProvider();
                d && (n.removeListener("accountsChanged", d), (d = void 0)),
                  h && (n.removeListener("chainChanged", h), (h = void 0)),
                  f && (n.removeListener("disconnect", f), (f = void 0));
              },
            })))
          : ((l = e),
            (0, r.U)((e) => ({
              id: "coinbaseWalletSDK",
              name: "Coinbase Wallet",
              rdns: "com.coinbase.wallet",
              type: c.type,
              async connect({ chainId: e, ...t } = {}) {
                try {
                  let n = await this.getProvider(),
                    r = (
                      await n.request({
                        method: "eth_requestAccounts",
                        params:
                          "instantOnboarding" in t && t.instantOnboarding
                            ? [{ onboarding: "instant" }]
                            : [],
                      })
                    ).map((e) => (0, i.b)(e));
                  m ||
                    ((m = this.onAccountsChanged.bind(this)),
                    n.on("accountsChanged", m)),
                    g ||
                      ((g = this.onChainChanged.bind(this)),
                      n.on("chainChanged", g)),
                    A ||
                      ((A = this.onDisconnect.bind(this)),
                      n.on("disconnect", A));
                  let o = await this.getChainId();
                  if (e && o !== e) {
                    let t = await this.switchChain({ chainId: e }).catch(
                      (e) => {
                        if (e.code === a.vx.code) throw e;
                        return { id: o };
                      }
                    );
                    o = t?.id ?? o;
                  }
                  return { accounts: r, chainId: o };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(
                      e.message
                    )
                  )
                    throw new a.vx(e);
                  throw e;
                }
              },
              async disconnect() {
                let e = await this.getProvider();
                m && (e.removeListener("accountsChanged", m), (m = void 0)),
                  g && (e.removeListener("chainChanged", g), (g = void 0)),
                  A && (e.removeListener("disconnect", A), (A = void 0)),
                  e.disconnect(),
                  e.close?.();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, i.b)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              async getProvider() {
                if (!w) {
                  let t =
                      "string" == typeof l.preference
                        ? { options: l.preference }
                        : {
                            ...l.preference,
                            options: l.preference?.options ?? "all",
                          },
                    { createCoinbaseWalletSDK: r } = await Promise.all([
                      n.e(1034),
                      n.e(4688),
                    ]).then(n.bind(n, 64688));
                  w = r({
                    ...l,
                    appChainIds: e.chains.map((e) => e.id),
                    preference: t,
                  }).getProvider();
                }
                return w;
              },
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch {
                  return !1;
                }
              },
              async switchChain({ addEthereumChainParameter: t, chainId: n }) {
                let r = e.chains.find((e) => e.id === n);
                if (!r) throw new a.ch(new o.nk());
                let i = await this.getProvider();
                try {
                  return (
                    await i.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, s.cK)(r.id) }],
                    }),
                    r
                  );
                } catch (e) {
                  if (4902 === e.code)
                    try {
                      let e, o;
                      (e = t?.blockExplorerUrls
                        ? t.blockExplorerUrls
                        : r.blockExplorers?.default.url
                        ? [r.blockExplorers?.default.url]
                        : []),
                        (o = t?.rpcUrls?.length
                          ? t.rpcUrls
                          : [r.rpcUrls.default?.http[0] ?? ""]);
                      let a = {
                        blockExplorerUrls: e,
                        chainId: (0, s.cK)(n),
                        chainName: t?.chainName ?? r.name,
                        iconUrls: t?.iconUrls,
                        nativeCurrency: t?.nativeCurrency ?? r.nativeCurrency,
                        rpcUrls: o,
                      };
                      return (
                        await i.request({
                          method: "wallet_addEthereumChain",
                          params: [a],
                        }),
                        r
                      );
                    } catch (e) {
                      throw new a.vx(e);
                    }
                  throw new a.ch(e);
                }
              },
              onAccountsChanged(t) {
                0 === t.length
                  ? this.onDisconnect()
                  : e.emitter.emit("change", {
                      accounts: t.map((e) => (0, i.b)(e)),
                    });
              },
              onChainChanged(t) {
                let n = Number(t);
                e.emitter.emit("change", { chainId: n });
              },
              async onDisconnect(t) {
                e.emitter.emit("disconnect");
                let n = await this.getProvider();
                m && (n.removeListener("accountsChanged", m), (m = void 0)),
                  g && (n.removeListener("chainChanged", g), (g = void 0)),
                  A && (n.removeListener("disconnect", A), (A = void 0));
              },
            })));
      }
      c.type = "coinbaseWallet";
    },
    16862: (e, t, n) => {
      let r = n(94676),
        o = n(55908),
        i = n(46514),
        a = n(62013);
      function s(e, t, n, i, a) {
        let s = [].slice.call(arguments, 1),
          c = s.length,
          l = "function" == typeof s[c - 1];
        if (!l && !r()) throw Error("Callback required as last argument");
        if (l) {
          if (c < 2) throw Error("Too few arguments provided");
          2 === c
            ? ((a = n), (n = t), (t = i = void 0))
            : 3 === c &&
              (t.getContext && void 0 === a
                ? ((a = i), (i = void 0))
                : ((a = i), (i = n), (n = t), (t = void 0)));
        } else {
          if (c < 1) throw Error("Too few arguments provided");
          return (
            1 === c
              ? ((n = t), (t = i = void 0))
              : 2 !== c || t.getContext || ((i = n), (n = t), (t = void 0)),
            new Promise(function (r, a) {
              try {
                let a = o.create(n, i);
                r(e(a, t, i));
              } catch (e) {
                a(e);
              }
            })
          );
        }
        try {
          let r = o.create(n, i);
          a(null, e(r, t, i));
        } catch (e) {
          a(e);
        }
      }
      (t.create = o.create),
        (t.toCanvas = s.bind(null, i.render)),
        (t.toDataURL = s.bind(null, i.renderToDataURL)),
        (t.toString = s.bind(null, function (e, t, n) {
          return a.render(e, n);
        }));
    },
    22732: (e, t, n) => {
      "use strict";
      function r(e) {
        return { formatters: void 0, fees: void 0, serializers: void 0, ...e };
      }
      n.d(t, { x: () => r });
    },
    27041: (e, t, n) => {
      "use strict";
      n.d(t, { _: () => u });
      var r =
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        o = {
          rounded: 'SFRounded, ui-rounded, "SF Pro Rounded", '.concat(r),
          system: r,
        },
        i = {
          large: {
            actionButton: "9999px",
            connectButton: "12px",
            modal: "24px",
            modalMobile: "28px",
          },
          medium: {
            actionButton: "10px",
            connectButton: "8px",
            modal: "16px",
            modalMobile: "18px",
          },
          none: {
            actionButton: "0px",
            connectButton: "0px",
            modal: "0px",
            modalMobile: "0px",
          },
          small: {
            actionButton: "4px",
            connectButton: "4px",
            modal: "8px",
            modalMobile: "8px",
          },
        },
        a = {
          large: { modalOverlay: "blur(20px)" },
          none: { modalOverlay: "blur(0px)" },
          small: { modalOverlay: "blur(4px)" },
        },
        s = (e) => {
          let {
            borderRadius: t = "large",
            fontStack: n = "rounded",
            overlayBlur: r = "none",
          } = e;
          return {
            blurs: { modalOverlay: a[r].modalOverlay },
            fonts: { body: o[n] },
            radii: {
              actionButton: i[t].actionButton,
              connectButton: i[t].connectButton,
              menuButton: i[t].connectButton,
              modal: i[t].modal,
              modalMobile: i[t].modalMobile,
            },
          };
        },
        c = {
          blue: { accentColor: "#0E76FD", accentColorForeground: "#FFF" },
          green: { accentColor: "#1DB847", accentColorForeground: "#FFF" },
          orange: { accentColor: "#FF801F", accentColorForeground: "#FFF" },
          pink: { accentColor: "#FF5CA0", accentColorForeground: "#FFF" },
          purple: { accentColor: "#5F5AFA", accentColorForeground: "#FFF" },
          red: { accentColor: "#FA423C", accentColorForeground: "#FFF" },
        },
        l = c.blue,
        u = function () {
          let {
            accentColor: e = l.accentColor,
            accentColorForeground: t = l.accentColorForeground,
            ...n
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          return {
            ...s(n),
            colors: {
              accentColor: e,
              accentColorForeground: t,
              actionButtonBorder: "rgba(0, 0, 0, 0.04)",
              actionButtonBorderMobile: "rgba(0, 0, 0, 0.06)",
              actionButtonSecondaryBackground: "rgba(0, 0, 0, 0.06)",
              closeButton: "rgba(60, 66, 66, 0.8)",
              closeButtonBackground: "rgba(0, 0, 0, 0.06)",
              connectButtonBackground: "#FFF",
              connectButtonBackgroundError: "#FF494A",
              connectButtonInnerBackground:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06))",
              connectButtonText: "#25292E",
              connectButtonTextError: "#FFF",
              connectionIndicator: "#30E000",
              downloadBottomCardBackground:
                "linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF",
              downloadTopCardBackground:
                "linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF",
              error: "#FF494A",
              generalBorder: "rgba(0, 0, 0, 0.06)",
              generalBorderDim: "rgba(0, 0, 0, 0.03)",
              menuItemBackground: "rgba(60, 66, 66, 0.1)",
              modalBackdrop: "rgba(0, 0, 0, 0.3)",
              modalBackground: "#FFF",
              modalBorder: "transparent",
              modalText: "#25292E",
              modalTextDim: "rgba(60, 66, 66, 0.3)",
              modalTextSecondary: "rgba(60, 66, 66, 0.6)",
              profileAction: "#FFF",
              profileActionHover: "rgba(255, 255, 255, 0.5)",
              profileForeground: "rgba(60, 66, 66, 0.06)",
              selectedOptionBorder: "rgba(60, 66, 66, 0.1)",
              standby: "#FFD641",
            },
            shadows: {
              connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
              profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
              selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
              selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.12)",
              walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)",
            },
          };
        };
      u.accentColors = c;
    },
    29343: (e, t) => {
      t.isValid = function (e) {
        return !isNaN(e) && e >= 1 && e <= 40;
      };
    },
    31114: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => H });
      var r,
        o,
        i = n(39249),
        a = n(12115),
        s = "right-scroll-bar-position",
        c = "width-before-scroll-bar";
      function l(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var u = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect,
        p = new WeakMap();
      function d(e) {
        return e;
      }
      var h = (function (e) {
          void 0 === e && (e = {});
          var t,
            n,
            r,
            o,
            a =
              ((t = null),
              void 0 === n && (n = d),
              (r = []),
              (o = !1),
              {
                read: function () {
                  if (o)
                    throw Error(
                      "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                    );
                  return r.length ? r[r.length - 1] : null;
                },
                useMedium: function (e) {
                  var t = n(e, o);
                  return (
                    r.push(t),
                    function () {
                      r = r.filter(function (e) {
                        return e !== t;
                      });
                    }
                  );
                },
                assignSyncMedium: function (e) {
                  for (o = !0; r.length; ) {
                    var t = r;
                    (r = []), t.forEach(e);
                  }
                  r = {
                    push: function (t) {
                      return e(t);
                    },
                    filter: function () {
                      return r;
                    },
                  };
                },
                assignMedium: function (e) {
                  o = !0;
                  var t = [];
                  if (r.length) {
                    var n = r;
                    (r = []), n.forEach(e), (t = r);
                  }
                  var i = function () {
                      var n = t;
                      (t = []), n.forEach(e);
                    },
                    a = function () {
                      return Promise.resolve().then(i);
                    };
                  a(),
                    (r = {
                      push: function (e) {
                        t.push(e), a();
                      },
                      filter: function (e) {
                        return (t = t.filter(e)), r;
                      },
                    });
                },
              });
          return (a.options = (0, i.__assign)({ async: !0, ssr: !1 }, e)), a;
        })(),
        f = function () {},
        w = a.forwardRef(function (e, t) {
          var n,
            r,
            o,
            s,
            c = a.useRef(null),
            d = a.useState({
              onScrollCapture: f,
              onWheelCapture: f,
              onTouchMoveCapture: f,
            }),
            w = d[0],
            m = d[1],
            g = e.forwardProps,
            A = e.children,
            y = e.className,
            b = e.removeScrollBar,
            v = e.enabled,
            C = e.shards,
            k = e.sideCar,
            E = e.noIsolation,
            x = e.inert,
            B = e.allowPinchZoom,
            I = e.as,
            S = e.gapMode,
            N = (0, i.__rest)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            T =
              ((n = [c, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return l(t, e);
                });
              }),
              ((o = (0, a.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (s = o.facade),
              u(
                function () {
                  var e = p.get(s);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = s.current;
                    t.forEach(function (e) {
                      r.has(e) || l(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || l(e, o);
                      });
                  }
                  p.set(s, n);
                },
                [n]
              ),
              s),
            D = (0, i.__assign)((0, i.__assign)({}, N), w);
          return a.createElement(
            a.Fragment,
            null,
            v &&
              a.createElement(k, {
                sideCar: h,
                removeScrollBar: b,
                shards: C,
                noIsolation: E,
                inert: x,
                setCallbacks: m,
                allowPinchZoom: !!B,
                lockRef: c,
                gapMode: S,
              }),
            g
              ? a.cloneElement(
                  a.Children.only(A),
                  (0, i.__assign)((0, i.__assign)({}, D), { ref: T })
                )
              : a.createElement(
                  void 0 === I ? "div" : I,
                  (0, i.__assign)({}, D, { className: y, ref: T }),
                  A
                )
          );
        });
      (w.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (w.classNames = { fullWidth: c, zeroRight: s });
      var m = function (e) {
        var t = e.sideCar,
          n = (0, i.__rest)(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return a.createElement(r, (0, i.__assign)({}, n));
      };
      m.isSideCarExport = !0;
      var g = function () {
          var e = 0,
            t = null;
          return {
            add: function (r) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = o || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var i, a;
                (i = t).styleSheet
                  ? (i.styleSheet.cssText = r)
                  : i.appendChild(document.createTextNode(r)),
                  (a = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(a);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        A = function () {
          var e = g();
          return function (t, n) {
            a.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        y = function () {
          var e = A();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        b = { left: 0, top: 0, right: 0, gap: 0 },
        v = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        C = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [v(n), v(r), v(o)];
        },
        k = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return b;
          var t = C(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        E = y(),
        x = "data-scroll-locked",
        B = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            l = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(x, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(i, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(l, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(l, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(s, " {\n    right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(c, " {\n    margin-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(s, " .")
              .concat(s, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(c, " .")
              .concat(c, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(x, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(l, "px;\n  }\n")
          );
        },
        I = function () {
          var e = parseInt(document.body.getAttribute(x) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        S = function () {
          a.useEffect(function () {
            return (
              document.body.setAttribute(x, (I() + 1).toString()),
              function () {
                var e = I() - 1;
                e <= 0
                  ? document.body.removeAttribute(x)
                  : document.body.setAttribute(x, e.toString());
              }
            );
          }, []);
        },
        N = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          S();
          var i = a.useMemo(
            function () {
              return k(o);
            },
            [o]
          );
          return a.createElement(E, {
            styles: B(i, !t, o, n ? "" : "!important"),
          });
        },
        T = !1;
      if ("undefined" != typeof window)
        try {
          var D = Object.defineProperty({}, "passive", {
            get: function () {
              return (T = !0), !0;
            },
          });
          window.addEventListener("test", D, D),
            window.removeEventListener("test", D, D);
        } catch (e) {
          T = !1;
        }
      var Q = !!T && { passive: !1 },
        P = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            (n.overflowY !== n.overflowX ||
              "TEXTAREA" === e.tagName ||
              "visible" !== n[t])
          );
        },
        M = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              O(e, r))
            ) {
              var o = R(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        O = function (e, t) {
          return "v" === e ? P(t, "overflowY") : P(t, "overflowX");
        },
        R = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        W = function (e, t, n, r, o) {
          var i,
            a =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            s = a * r,
            c = n.target,
            l = t.contains(c),
            u = !1,
            p = s > 0,
            d = 0,
            h = 0;
          do {
            var f = R(e, c),
              w = f[0],
              m = f[1] - f[2] - a * w;
            (w || m) && O(e, c) && ((d += m), (h += w)),
              (c = c instanceof ShadowRoot ? c.host : c.parentNode);
          } while (
            (!l && c !== document.body) ||
            (l && (t.contains(c) || t === c))
          );
          return (
            p && ((o && 1 > Math.abs(d)) || (!o && s > d))
              ? (u = !0)
              : !p && ((o && 1 > Math.abs(h)) || (!o && -s > h)) && (u = !0),
            u
          );
        },
        U = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        F = function (e) {
          return [e.deltaX, e.deltaY];
        },
        L = function (e) {
          return e && "current" in e ? e.current : e;
        },
        q = 0,
        K = [];
      let j =
        ((r = function (e) {
          var t = a.useRef([]),
            n = a.useRef([0, 0]),
            r = a.useRef(),
            o = a.useState(q++)[0],
            s = a.useState(y)[0],
            c = a.useRef(e);
          a.useEffect(
            function () {
              c.current = e;
            },
            [e]
          ),
            a.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(o));
                  var t = (0, i.__spreadArray)(
                    [e.lockRef.current],
                    (e.shards || []).map(L),
                    !0
                  ).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(o));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(o)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(o)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var l = a.useCallback(function (e, t) {
              if (
                ("touches" in e && 2 === e.touches.length) ||
                ("wheel" === e.type && e.ctrlKey)
              )
                return !c.current.allowPinchZoom;
              var o,
                i = U(e),
                a = n.current,
                s = "deltaX" in e ? e.deltaX : a[0] - i[0],
                l = "deltaY" in e ? e.deltaY : a[1] - i[1],
                u = e.target,
                p = Math.abs(s) > Math.abs(l) ? "h" : "v";
              if ("touches" in e && "h" === p && "range" === u.type) return !1;
              var d = M(p, u);
              if (!d) return !0;
              if (
                (d ? (o = p) : ((o = "v" === p ? "h" : "v"), (d = M(p, u))), !d)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (s || l) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var h = r.current || o;
              return W(h, t, e, "h" === h ? s : l, !0);
            }, []),
            u = a.useCallback(function (e) {
              if (K.length && K[K.length - 1] === s) {
                var n = "deltaY" in e ? F(e) : U(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      ((r = t.delta), r[0] === n[0] && r[1] === n[1])
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (c.current.shards || [])
                    .map(L)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? l(e, o[0]) : !c.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            p = a.useCallback(function (e, n, r, o) {
              var i = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(r),
              };
              t.current.push(i),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== i;
                  });
                }, 1);
            }, []),
            d = a.useCallback(function (e) {
              (n.current = U(e)), (r.current = void 0);
            }, []),
            h = a.useCallback(function (t) {
              p(t.type, F(t), t.target, l(t, e.lockRef.current));
            }, []),
            f = a.useCallback(function (t) {
              p(t.type, U(t), t.target, l(t, e.lockRef.current));
            }, []);
          a.useEffect(function () {
            return (
              K.push(s),
              e.setCallbacks({
                onScrollCapture: h,
                onWheelCapture: h,
                onTouchMoveCapture: f,
              }),
              document.addEventListener("wheel", u, Q),
              document.addEventListener("touchmove", u, Q),
              document.addEventListener("touchstart", d, Q),
              function () {
                (K = K.filter(function (e) {
                  return e !== s;
                })),
                  document.removeEventListener("wheel", u, Q),
                  document.removeEventListener("touchmove", u, Q),
                  document.removeEventListener("touchstart", d, Q);
              }
            );
          }, []);
          var w = e.removeScrollBar,
            m = e.inert;
          return a.createElement(
            a.Fragment,
            null,
            m
              ? a.createElement(s, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      o,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(o, " {pointer-events: all;}\n"),
                })
              : null,
            w ? a.createElement(N, { gapMode: e.gapMode }) : null
          );
        }),
        h.useMedium(r),
        m);
      var J = a.forwardRef(function (e, t) {
        return a.createElement(
          w,
          (0, i.__assign)({}, e, { ref: t, sideCar: j })
        );
      });
      J.classNames = w.classNames;
      let H = J;
    },
    34122: (e) => {
      function t() {
        (this.buffer = []), (this.length = 0);
      }
      (t.prototype = {
        get: function (e) {
          let t = Math.floor(e / 8);
          return ((this.buffer[t] >>> (7 - (e % 8))) & 1) == 1;
        },
        put: function (e, t) {
          for (let n = 0; n < t; n++)
            this.putBit(((e >>> (t - n - 1)) & 1) == 1);
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (e) {
          let t = Math.floor(this.length / 8);
          this.buffer.length <= t && this.buffer.push(0),
            e && (this.buffer[t] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (e.exports = t);
    },
    36241: (e, t, n) => {
      "use strict";
      n.d(t, { L: () => p });
      var r = n(90557),
        o = n(7441);
      class i extends o.C {
        constructor() {
          super(
            "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
            { docsPath: "/docs/clients/intro", name: "UrlRequiredError" }
          );
        }
      }
      var a = n(85569),
        s = n(78519),
        c = n(79183);
      let l = {
        current: 0,
        take() {
          return this.current++;
        },
        reset() {
          this.current = 0;
        },
      };
      var u = n(54315);
      function p(e, t = {}) {
        let {
          batch: n,
          fetchOptions: o,
          key: d = "http",
          methods: h,
          name: f = "HTTP JSON-RPC",
          onFetchRequest: w,
          onFetchResponse: m,
          retryDelay: g,
          raw: A,
        } = t;
        return ({ chain: p, retryCount: y, timeout: b }) => {
          let { batchSize: v = 1e3, wait: C = 0 } =
              "object" == typeof n ? n : {},
            k = t.retryCount ?? y,
            E = b ?? t.timeout ?? 1e4,
            x = e || p?.rpcUrls.default.http[0];
          if (!x) throw new i();
          let B = (function (e, t = {}) {
            return {
              async request(n) {
                let {
                    body: o,
                    onRequest: i = t.onRequest,
                    onResponse: a = t.onResponse,
                    timeout: u = t.timeout ?? 1e4,
                  } = n,
                  p = { ...(t.fetchOptions ?? {}), ...(n.fetchOptions ?? {}) },
                  { headers: d, method: h, signal: f } = p;
                try {
                  let t,
                    n = await (0, s.w)(
                      async ({ signal: t }) => {
                        let n = {
                            ...p,
                            body: Array.isArray(o)
                              ? (0, c.A)(
                                  o.map((e) => ({
                                    jsonrpc: "2.0",
                                    id: e.id ?? l.take(),
                                    ...e,
                                  }))
                                )
                              : (0, c.A)({
                                  jsonrpc: "2.0",
                                  id: o.id ?? l.take(),
                                  ...o,
                                }),
                            headers: {
                              "Content-Type": "application/json",
                              ...d,
                            },
                            method: h || "POST",
                            signal: f || (u > 0 ? t : null),
                          },
                          r = new Request(e, n),
                          a = (await i?.(r, n)) ?? { ...n, url: e };
                        return await fetch(a.url ?? e, a);
                      },
                      {
                        errorInstance: new r.MU({ body: o, url: e }),
                        timeout: u,
                        signal: !0,
                      }
                    );
                  if (
                    (a && (await a(n)),
                    n.headers
                      .get("Content-Type")
                      ?.startsWith("application/json"))
                  )
                    t = await n.json();
                  else {
                    t = await n.text();
                    try {
                      t = JSON.parse(t || "{}");
                    } catch (e) {
                      if (n.ok) throw e;
                      t = { error: t };
                    }
                  }
                  if (!n.ok)
                    throw new r.Ci({
                      body: o,
                      details: (0, c.A)(t.error) || n.statusText,
                      headers: n.headers,
                      status: n.status,
                      url: e,
                    });
                  return t;
                } catch (t) {
                  if (t instanceof r.Ci || t instanceof r.MU) throw t;
                  throw new r.Ci({ body: o, cause: t, url: e });
                }
              },
            };
          })(x, { fetchOptions: o, onRequest: w, onResponse: m, timeout: E });
          return (0, u.o)(
            {
              key: d,
              methods: h,
              name: f,
              async request({ method: e, params: t }) {
                let o = { method: e, params: t },
                  { schedule: i } = (0, a.u)({
                    id: x,
                    wait: C,
                    shouldSplitBatch: (e) => e.length > v,
                    fn: (e) => B.request({ body: e }),
                    sort: (e, t) => e.id - t.id,
                  }),
                  s = async (e) => (n ? i(e) : [await B.request({ body: e })]),
                  [{ error: c, result: l }] = await s(o);
                if (A) return { error: c, result: l };
                if (c) throw new r.J8({ body: o, error: c, url: x });
                return l;
              },
              retryCount: k,
              retryDelay: g,
              timeout: E,
              type: "http",
            },
            { fetchOptions: o, url: x }
          );
        };
      }
    },
    36517: (e, t) => {
      t.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      };
      let n = { N1: 3, N2: 3, N3: 40, N4: 10 };
      (t.isValid = function (e) {
        return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7;
      }),
        (t.from = function (e) {
          return t.isValid(e) ? parseInt(e, 10) : void 0;
        }),
        (t.getPenaltyN1 = function (e) {
          let t = e.size,
            r = 0,
            o = 0,
            i = 0,
            a = null,
            s = null;
          for (let c = 0; c < t; c++) {
            (o = i = 0), (a = s = null);
            for (let l = 0; l < t; l++) {
              let t = e.get(c, l);
              t === a
                ? o++
                : (o >= 5 && (r += n.N1 + (o - 5)), (a = t), (o = 1)),
                (t = e.get(l, c)) === s
                  ? i++
                  : (i >= 5 && (r += n.N1 + (i - 5)), (s = t), (i = 1));
            }
            o >= 5 && (r += n.N1 + (o - 5)), i >= 5 && (r += n.N1 + (i - 5));
          }
          return r;
        }),
        (t.getPenaltyN2 = function (e) {
          let t = e.size,
            r = 0;
          for (let n = 0; n < t - 1; n++)
            for (let o = 0; o < t - 1; o++) {
              let t =
                e.get(n, o) +
                e.get(n, o + 1) +
                e.get(n + 1, o) +
                e.get(n + 1, o + 1);
              (4 === t || 0 === t) && r++;
            }
          return r * n.N2;
        }),
        (t.getPenaltyN3 = function (e) {
          let t = e.size,
            r = 0,
            o = 0,
            i = 0;
          for (let n = 0; n < t; n++) {
            o = i = 0;
            for (let a = 0; a < t; a++)
              (o = ((o << 1) & 2047) | e.get(n, a)),
                a >= 10 && (1488 === o || 93 === o) && r++,
                (i = ((i << 1) & 2047) | e.get(a, n)),
                a >= 10 && (1488 === i || 93 === i) && r++;
          }
          return r * n.N3;
        }),
        (t.getPenaltyN4 = function (e) {
          let t = 0,
            r = e.data.length;
          for (let n = 0; n < r; n++) t += e.data[n];
          return Math.abs(Math.ceil((100 * t) / r / 5) - 10) * n.N4;
        }),
        (t.applyMask = function (e, n) {
          let r = n.size;
          for (let o = 0; o < r; o++)
            for (let i = 0; i < r; i++)
              n.isReserved(i, o) ||
                n.xor(
                  i,
                  o,
                  (function (e, n, r) {
                    switch (e) {
                      case t.Patterns.PATTERN000:
                        return (n + r) % 2 == 0;
                      case t.Patterns.PATTERN001:
                        return n % 2 == 0;
                      case t.Patterns.PATTERN010:
                        return r % 3 == 0;
                      case t.Patterns.PATTERN011:
                        return (n + r) % 3 == 0;
                      case t.Patterns.PATTERN100:
                        return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
                      case t.Patterns.PATTERN101:
                        return ((n * r) % 2) + ((n * r) % 3) == 0;
                      case t.Patterns.PATTERN110:
                        return (((n * r) % 2) + ((n * r) % 3)) % 2 == 0;
                      case t.Patterns.PATTERN111:
                        return (((n * r) % 3) + ((n + r) % 2)) % 2 == 0;
                      default:
                        throw Error("bad maskPattern:" + e);
                    }
                  })(e, i, o)
                );
        }),
        (t.getBestMask = function (e, n) {
          let r = Object.keys(t.Patterns).length,
            o = 0,
            i = 1 / 0;
          for (let a = 0; a < r; a++) {
            n(a), t.applyMask(a, e);
            let r =
              t.getPenaltyN1(e) +
              t.getPenaltyN2(e) +
              t.getPenaltyN3(e) +
              t.getPenaltyN4(e);
            t.applyMask(a, e), r < i && ((i = r), (o = a));
          }
          return o;
        });
    },
    37136: (e, t, n) => {
      "use strict";
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                !(function (e, t, n) {
                  var r;
                  (t =
                    "symbol" ==
                    typeof (r = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var n = e[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(t, "string"))
                      ? r
                      : String(r)) in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = n);
                })(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      n.d(t, { U: () => s });
      var i = (e) =>
          function () {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            var i = Object.assign({}, ...n.map((e) => e.styles)),
              a = Object.keys(i),
              s = a.filter((e) => "mappings" in i[e]);
            return Object.assign(
              (t) => {
                var n = [],
                  r = {},
                  a = o({}, t),
                  c = !1;
                for (var l of s) {
                  var u = t[l];
                  if (null != u)
                    for (var p of ((c = !0), i[l].mappings))
                      (r[p] = u), null == a[p] && delete a[p];
                }
                var d = c ? o(o({}, r), a) : t;
                for (var h in d)
                  if (
                    (function () {
                      var e = d[h],
                        t = i[h];
                      try {
                        if (t.mappings) return 1;
                        if ("string" == typeof e || "number" == typeof e)
                          n.push(t.values[e].defaultClass);
                        else if (Array.isArray(e))
                          for (var r = 0; r < e.length; r++) {
                            var o = e[r];
                            if (null != o) {
                              var a = t.responsiveArray[r];
                              n.push(t.values[o].conditions[a]);
                            }
                          }
                        else
                          for (var s in e) {
                            var c = e[s];
                            null != c && n.push(t.values[c].conditions[s]);
                          }
                      } catch (e) {
                        throw e;
                      }
                    })()
                  )
                    continue;
                return e(n.join(" "));
              },
              { properties: new Set(a) }
            );
          },
        a = (e) => e,
        s = function () {
          return i(a)(...arguments);
        };
    },
    37200: (e, t, n) => {
      "use strict";
      n.d(t, { r: () => r });
      let r = (0, n(22732).x)({
        id: 1,
        name: "Ethereum",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://eth.merkle.io"] } },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://etherscan.io",
            apiUrl: "https://api.etherscan.io/api",
          },
        },
        contracts: {
          ensRegistry: {
            address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          },
          ensUniversalResolver: {
            address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
            blockCreated: 0x125db65,
          },
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 0xdb04c1,
          },
        },
      });
    },
    37788: (e, t, n) => {
      let r = n(46087).getSymbolSize;
      (t.getRowColCoords = function (e) {
        if (1 === e) return [];
        let t = Math.floor(e / 7) + 2,
          n = r(e),
          o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)),
          i = [n - 7];
        for (let e = 1; e < t - 1; e++) i[e] = i[e - 1] - o;
        return i.push(6), i.reverse();
      }),
        (t.getPositions = function (e) {
          let n = [],
            r = t.getRowColCoords(e),
            o = r.length;
          for (let e = 0; e < o; e++)
            for (let t = 0; t < o; t++)
              (0 !== e || 0 !== t) &&
                (0 !== e || t !== o - 1) &&
                (e !== o - 1 || 0 !== t) &&
                n.push([r[e], r[t]]);
          return n;
        });
    },
    39249: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          __addDisposableResource: () => O,
          __assign: () => i,
          __asyncDelegator: () => x,
          __asyncGenerator: () => E,
          __asyncValues: () => B,
          __await: () => k,
          __awaiter: () => f,
          __classPrivateFieldGet: () => Q,
          __classPrivateFieldIn: () => M,
          __classPrivateFieldSet: () => P,
          __createBinding: () => m,
          __decorate: () => s,
          __disposeResources: () => W,
          __esDecorate: () => l,
          __exportStar: () => g,
          __extends: () => o,
          __generator: () => w,
          __importDefault: () => D,
          __importStar: () => T,
          __makeTemplateObject: () => I,
          __metadata: () => h,
          __param: () => c,
          __propKey: () => p,
          __read: () => y,
          __rest: () => a,
          __rewriteRelativeImportExtension: () => U,
          __runInitializers: () => u,
          __setFunctionName: () => d,
          __spread: () => b,
          __spreadArray: () => C,
          __spreadArrays: () => v,
          __values: () => A,
          default: () => F,
        });
      var r = function (e, t) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          })(e, t);
      };
      function o(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var i = function () {
        return (i =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function a(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      function s(e, t, n, r) {
        var o,
          i = arguments.length,
          a =
            i < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, n))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, n, r);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (o = e[s]) &&
              (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      }
      function c(e, t) {
        return function (n, r) {
          t(n, r, e);
        };
      }
      function l(e, t, n, r, o, i) {
        function a(e) {
          if (void 0 !== e && "function" != typeof e)
            throw TypeError("Function expected");
          return e;
        }
        for (
          var s,
            c = r.kind,
            l = "getter" === c ? "get" : "setter" === c ? "set" : "value",
            u = !t && e ? (r.static ? e : e.prototype) : null,
            p = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}),
            d = !1,
            h = n.length - 1;
          h >= 0;
          h--
        ) {
          var f = {};
          for (var w in r) f[w] = "access" === w ? {} : r[w];
          for (var w in r.access) f.access[w] = r.access[w];
          f.addInitializer = function (e) {
            if (d)
              throw TypeError(
                "Cannot add initializers after decoration has completed"
              );
            i.push(a(e || null));
          };
          var m = (0, n[h])(
            "accessor" === c ? { get: p.get, set: p.set } : p[l],
            f
          );
          if ("accessor" === c) {
            if (void 0 === m) continue;
            if (null === m || "object" != typeof m)
              throw TypeError("Object expected");
            (s = a(m.get)) && (p.get = s),
              (s = a(m.set)) && (p.set = s),
              (s = a(m.init)) && o.unshift(s);
          } else (s = a(m)) && ("field" === c ? o.unshift(s) : (p[l] = s));
        }
        u && Object.defineProperty(u, r.name, p), (d = !0);
      }
      function u(e, t, n) {
        for (var r = arguments.length > 2, o = 0; o < t.length; o++)
          n = r ? t[o].call(e, n) : t[o].call(e);
        return r ? n : void 0;
      }
      function p(e) {
        return "symbol" == typeof e ? e : "".concat(e);
      }
      function d(e, t, n) {
        return (
          "symbol" == typeof t &&
            (t = t.description ? "[".concat(t.description, "]") : ""),
          Object.defineProperty(e, "name", {
            configurable: !0,
            value: n ? "".concat(n, " ", t) : t,
          })
        );
      }
      function h(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function f(e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(a, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      }
      function w(e, t) {
        var n,
          r,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          },
          a = Object.create(
            ("function" == typeof Iterator ? Iterator : Object).prototype
          );
        return (
          (a.next = s(0)),
          (a.throw = s(1)),
          (a.return = s(2)),
          "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this;
            }),
          a
        );
        function s(s) {
          return function (c) {
            var l = [s, c];
            if (n) throw TypeError("Generator is already executing.");
            for (; a && ((a = 0), l[0] && (i = 0)), i; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o =
                      2 & l[0]
                        ? r.return
                        : l[0]
                        ? r.throw || ((o = r.return) && o.call(r), 0)
                        : r.next) &&
                    !(o = o.call(r, l[1])).done)
                )
                  return o;
                switch (((r = 0), o && (l = [2 & l[0], o.value]), l[0])) {
                  case 0:
                  case 1:
                    o = l;
                    break;
                  case 4:
                    return i.label++, { value: l[1], done: !1 };
                  case 5:
                    i.label++, (r = l[1]), (l = [0]);
                    continue;
                  case 7:
                    (l = i.ops.pop()), i.trys.pop();
                    continue;
                  default:
                    if (
                      !(o = (o = i.trys).length > 0 && o[o.length - 1]) &&
                      (6 === l[0] || 2 === l[0])
                    ) {
                      i = 0;
                      continue;
                    }
                    if (3 === l[0] && (!o || (l[1] > o[0] && l[1] < o[3]))) {
                      i.label = l[1];
                      break;
                    }
                    if (6 === l[0] && i.label < o[1]) {
                      (i.label = o[1]), (o = l);
                      break;
                    }
                    if (o && i.label < o[2]) {
                      (i.label = o[2]), i.ops.push(l);
                      break;
                    }
                    o[2] && i.ops.pop(), i.trys.pop();
                    continue;
                }
                l = t.call(e, i);
              } catch (e) {
                (l = [6, e]), (r = 0);
              } finally {
                n = o = 0;
              }
            if (5 & l[0]) throw l[1];
            return { value: l[0] ? l[1] : void 0, done: !0 };
          };
        }
      }
      var m = Object.create
        ? function (e, t, n, r) {
            void 0 === r && (r = n);
            var o = Object.getOwnPropertyDescriptor(t, n);
            (!o ||
              ("get" in o ? !t.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              }),
              Object.defineProperty(e, r, o);
          }
        : function (e, t, n, r) {
            void 0 === r && (r = n), (e[r] = t[n]);
          };
      function g(e, t) {
        for (var n in e)
          "default" === n ||
            Object.prototype.hasOwnProperty.call(t, n) ||
            m(t, e, n);
      }
      function A(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function y(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          i = n.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
            a.push(r.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (o) throw o.error;
          }
        }
        return a;
      }
      function b() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(y(arguments[t]));
        return e;
      }
      function v() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        for (var r = Array(e), o = 0, t = 0; t < n; t++)
          for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++)
            r[o] = i[a];
        return r;
      }
      function C(e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, o = 0, i = t.length; o < i; o++)
            (!r && o in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      function k(e) {
        return this instanceof k ? ((this.v = e), this) : new k(e);
      }
      function E(e, t, n) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var r,
          o = n.apply(e, t || []),
          i = [];
        return (
          (r = Object.create(
            ("function" == typeof AsyncIterator ? AsyncIterator : Object)
              .prototype
          )),
          a("next"),
          a("throw"),
          a("return", function (e) {
            return function (t) {
              return Promise.resolve(t).then(e, l);
            };
          }),
          (r[Symbol.asyncIterator] = function () {
            return this;
          }),
          r
        );
        function a(e, t) {
          o[e] &&
            ((r[e] = function (t) {
              return new Promise(function (n, r) {
                i.push([e, t, n, r]) > 1 || s(e, t);
              });
            }),
            t && (r[e] = t(r[e])));
        }
        function s(e, t) {
          try {
            var n;
            (n = o[e](t)).value instanceof k
              ? Promise.resolve(n.value.v).then(c, l)
              : u(i[0][2], n);
          } catch (e) {
            u(i[0][3], e);
          }
        }
        function c(e) {
          s("next", e);
        }
        function l(e) {
          s("throw", e);
        }
        function u(e, t) {
          e(t), i.shift(), i.length && s(i[0][0], i[0][1]);
        }
      }
      function x(e) {
        var t, n;
        return (
          (t = {}),
          r("next"),
          r("throw", function (e) {
            throw e;
          }),
          r("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function r(r, o) {
          t[r] = e[r]
            ? function (t) {
                return (n = !n)
                  ? { value: k(e[r](t)), done: !1 }
                  : o
                  ? o(t)
                  : t;
              }
            : o;
        }
      }
      function B(e) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var t,
          n = e[Symbol.asyncIterator];
        return n
          ? n.call(e)
          : ((e = A(e)),
            (t = {}),
            r("next"),
            r("throw"),
            r("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function r(n) {
          t[n] =
            e[n] &&
            function (t) {
              return new Promise(function (r, o) {
                var i, a, s;
                (i = r),
                  (a = o),
                  (s = (t = e[n](t)).done),
                  Promise.resolve(t.value).then(function (e) {
                    i({ value: e, done: s });
                  }, a);
              });
            };
        }
      }
      function I(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      var S = Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            },
        N = function (e) {
          return (N =
            Object.getOwnPropertyNames ||
            function (e) {
              var t = [];
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
              return t;
            })(e);
        };
      function T(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n = N(e), r = 0; r < n.length; r++)
            "default" !== n[r] && m(t, e, n[r]);
        return S(t, e), t;
      }
      function D(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function Q(e, t, n, r) {
        if ("a" === n && !r)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
      }
      function P(e, t, n, r, o) {
        if ("m" === r) throw TypeError("Private method is not writable");
        if ("a" === r && !o)
          throw TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e))
          throw TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === r ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n;
      }
      function M(e, t) {
        if (null === t || ("object" != typeof t && "function" != typeof t))
          throw TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t);
      }
      function O(e, t, n) {
        if (null != t) {
          var r, o;
          if ("object" != typeof t && "function" != typeof t)
            throw TypeError("Object expected.");
          if (n) {
            if (!Symbol.asyncDispose)
              throw TypeError("Symbol.asyncDispose is not defined.");
            r = t[Symbol.asyncDispose];
          }
          if (void 0 === r) {
            if (!Symbol.dispose)
              throw TypeError("Symbol.dispose is not defined.");
            (r = t[Symbol.dispose]), n && (o = r);
          }
          if ("function" != typeof r) throw TypeError("Object not disposable.");
          o &&
            (r = function () {
              try {
                o.call(this);
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            e.stack.push({ value: t, dispose: r, async: n });
        } else n && e.stack.push({ async: !0 });
        return t;
      }
      var R =
        "function" == typeof SuppressedError
          ? SuppressedError
          : function (e, t, n) {
              var r = Error(n);
              return (
                (r.name = "SuppressedError"),
                (r.error = e),
                (r.suppressed = t),
                r
              );
            };
      function W(e) {
        function t(t) {
          (e.error = e.hasError
            ? new R(t, e.error, "An error was suppressed during disposal.")
            : t),
            (e.hasError = !0);
        }
        var n,
          r = 0;
        return (function o() {
          for (; (n = e.stack.pop()); )
            try {
              if (!n.async && 1 === r)
                return (r = 0), e.stack.push(n), Promise.resolve().then(o);
              if (n.dispose) {
                var i = n.dispose.call(n.value);
                if (n.async)
                  return (
                    (r |= 2),
                    Promise.resolve(i).then(o, function (e) {
                      return t(e), o();
                    })
                  );
              } else r |= 1;
            } catch (e) {
              t(e);
            }
          if (1 === r)
            return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error;
        })();
      }
      function U(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e)
          ? e.replace(
              /\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,
              function (e, n, r, o, i) {
                return n
                  ? t
                    ? ".jsx"
                    : ".js"
                  : !r || (o && i)
                  ? r + o + "." + i.toLowerCase() + "js"
                  : e;
              }
            )
          : e;
      }
      let F = {
        __extends: o,
        __assign: i,
        __rest: a,
        __decorate: s,
        __param: c,
        __esDecorate: l,
        __runInitializers: u,
        __propKey: p,
        __setFunctionName: d,
        __metadata: h,
        __awaiter: f,
        __generator: w,
        __createBinding: m,
        __exportStar: g,
        __values: A,
        __read: y,
        __spread: b,
        __spreadArrays: v,
        __spreadArray: C,
        __await: k,
        __asyncGenerator: E,
        __asyncDelegator: x,
        __asyncValues: B,
        __makeTemplateObject: I,
        __importStar: T,
        __importDefault: D,
        __classPrivateFieldGet: Q,
        __classPrivateFieldSet: P,
        __classPrivateFieldIn: M,
        __addDisposableResource: O,
        __disposeResources: W,
        __rewriteRelativeImportExtension: U,
      };
    },
    40363: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => i, f: () => o });
      var r = function (e, t) {
        return (
          Object.defineProperty(e, "__recipe__", { value: t, writable: !1 }), e
        );
      };
      function o(e) {
        var { conditions: t } = e;
        if (!t) throw Error("Styles have no conditions");
        return r(
          function (e) {
            if (
              "string" == typeof e ||
              "number" == typeof e ||
              "boolean" == typeof e
            ) {
              if (!t.defaultCondition) throw Error("No default condition");
              return { [t.defaultCondition]: e };
            }
            if (Array.isArray(e)) {
              if (!("responsiveArray" in t))
                throw Error("Responsive arrays are not supported");
              var n = {};
              for (var r in t.responsiveArray)
                null != e[r] && (n[t.responsiveArray[r]] = e[r]);
              return n;
            }
            return e;
          },
          {
            importPath: "@vanilla-extract/sprinkles/createUtils",
            importName: "createNormalizeValueFn",
            args: [{ conditions: e.conditions }],
          }
        );
      }
      function i(e) {
        var { conditions: t } = e;
        if (!t) throw Error("Styles have no conditions");
        var n = o(e);
        return r(
          function (e, r) {
            if (
              "string" == typeof e ||
              "number" == typeof e ||
              "boolean" == typeof e
            ) {
              if (!t.defaultCondition) throw Error("No default condition");
              return r(e, t.defaultCondition);
            }
            var o = Array.isArray(e) ? n(e) : e,
              i = {};
            for (var a in o) null != o[a] && (i[a] = r(o[a], a));
            return i;
          },
          {
            importPath: "@vanilla-extract/sprinkles/createUtils",
            importName: "createMapValueFn",
            args: [{ conditions: e.conditions }],
          }
        );
      }
    },
    43585: (e, t, n) => {
      let r = n(29343),
        o = n(81685);
      (t.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
        (t.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
        (t.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
        (t.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
        (t.MIXED = { bit: -1 }),
        (t.getCharCountIndicator = function (e, t) {
          if (!e.ccBits) throw Error("Invalid mode: " + e);
          if (!r.isValid(t)) throw Error("Invalid version: " + t);
          return t >= 1 && t < 10
            ? e.ccBits[0]
            : t < 27
            ? e.ccBits[1]
            : e.ccBits[2];
        }),
        (t.getBestModeForData = function (e) {
          return o.testNumeric(e)
            ? t.NUMERIC
            : o.testAlphanumeric(e)
            ? t.ALPHANUMERIC
            : o.testKanji(e)
            ? t.KANJI
            : t.BYTE;
        }),
        (t.toString = function (e) {
          if (e && e.id) return e.id;
          throw Error("Invalid mode");
        }),
        (t.isValid = function (e) {
          return e && e.bit && e.ccBits;
        }),
        (t.from = function (e, n) {
          if (t.isValid(e)) return e;
          try {
            if ("string" != typeof e) throw Error("Param is not a string");
            switch (e.toLowerCase()) {
              case "numeric":
                return t.NUMERIC;
              case "alphanumeric":
                return t.ALPHANUMERIC;
              case "kanji":
                return t.KANJI;
              case "byte":
                return t.BYTE;
              default:
                throw Error("Unknown mode: " + e);
            }
          } catch (e) {
            return n;
          }
        });
    },
    46056: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => l });
      var r = n(9894),
        o = n(90113),
        i = n(77752),
        a = n(35883),
        s = n(81379),
        c = n(67622);
      function l(e) {
        let t,
          u,
          p,
          d,
          h,
          f,
          w,
          m,
          g = e.isNewChainsStale ?? !0;
        return (0, r.U)((r) => ({
          id: "walletConnect",
          name: "WalletConnect",
          type: l.type,
          async setup() {
            let e = await this.getProvider().catch(() => null);
            e &&
              (h || ((h = this.onConnect.bind(this)), e.on("connect", h)),
              w ||
                ((w = this.onSessionDelete.bind(this)),
                e.on("session_delete", w)));
          },
          async connect({ chainId: e, ...t } = {}) {
            try {
              let n = await this.getProvider();
              if (!n) throw new o.N();
              f || ((f = this.onDisplayUri), n.on("display_uri", f));
              let i = e;
              if (!i) {
                let e = (await r.storage?.getItem("state")) ?? {};
                i = r.chains.some((t) => t.id === e.chainId)
                  ? e.chainId
                  : r.chains[0]?.id;
              }
              if (!i) throw Error("No chains found on connector.");
              let s = await this.isChainsStale();
              if ((n.session && s && (await n.disconnect()), !n.session || s)) {
                let e = r.chains.filter((e) => e.id !== i).map((e) => e.id);
                await n.connect({
                  optionalChains: [i, ...e],
                  ...("pairingTopic" in t
                    ? { pairingTopic: t.pairingTopic }
                    : {}),
                }),
                  this.setRequestedChainsIds(r.chains.map((e) => e.id));
              }
              let c = (await n.enable()).map((e) => (0, a.b)(e)),
                l = await this.getChainId();
              return (
                f && (n.removeListener("display_uri", f), (f = void 0)),
                h && (n.removeListener("connect", h), (h = void 0)),
                p ||
                  ((p = this.onAccountsChanged.bind(this)),
                  n.on("accountsChanged", p)),
                d ||
                  ((d = this.onChainChanged.bind(this)),
                  n.on("chainChanged", d)),
                m ||
                  ((m = this.onDisconnect.bind(this)), n.on("disconnect", m)),
                w ||
                  ((w = this.onSessionDelete.bind(this)),
                  n.on("session_delete", w)),
                { accounts: c, chainId: l }
              );
            } catch (e) {
              if (/(user rejected|connection request reset)/i.test(e?.message))
                throw new s.vx(e);
              throw e;
            }
          },
          async disconnect() {
            let e = await this.getProvider();
            try {
              await e?.disconnect();
            } catch (e) {
              if (!/No matching key/i.test(e.message)) throw e;
            } finally {
              d && (e?.removeListener("chainChanged", d), (d = void 0)),
                m && (e?.removeListener("disconnect", m), (m = void 0)),
                h || ((h = this.onConnect.bind(this)), e?.on("connect", h)),
                p && (e?.removeListener("accountsChanged", p), (p = void 0)),
                w && (e?.removeListener("session_delete", w), (w = void 0)),
                this.setRequestedChainsIds([]);
            }
          },
          async getAccounts() {
            return (await this.getProvider()).accounts.map((e) => (0, a.b)(e));
          },
          async getProvider({ chainId: o } = {}) {
            async function i() {
              let t = r.chains.map((e) => e.id);
              if (!t.length) return;
              let { EthereumProvider: o } = await Promise.all([
                n.e(108),
                n.e(4874),
              ]).then(n.bind(n, 15495));
              return await o.init({
                ...e,
                disableProviderPing: !0,
                optionalChains: t,
                projectId: e.projectId,
                rpcMap: Object.fromEntries(
                  r.chains.map((e) => {
                    let [t] = (function (e) {
                      let { chain: t } = e,
                        n = t.rpcUrls.default.http[0];
                      if (!e.transports) return [n];
                      let r = e.transports?.[t.id]?.({ chain: t });
                      return (r?.value?.transports || [r]).map(
                        ({ value: e }) => e?.url || n
                      );
                    })({ chain: e, transports: r.transports });
                    return [e.id, t];
                  })
                ),
                showQrModal: e.showQrModal ?? !0,
              });
            }
            return (
              t ||
                (u || (u = i()),
                (t = await u),
                t?.events.setMaxListeners(Number.POSITIVE_INFINITY)),
              o && (await this.switchChain?.({ chainId: o })),
              t
            );
          },
          async getChainId() {
            return (await this.getProvider()).chainId;
          },
          async isAuthorized() {
            try {
              let [e, t] = await Promise.all([
                this.getAccounts(),
                this.getProvider(),
              ]);
              if (!e.length) return !1;
              if ((await this.isChainsStale()) && t.session)
                return await t.disconnect().catch(() => {}), !1;
              return !0;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let n = await this.getProvider();
            if (!n) throw new o.N();
            let a = r.chains.find((e) => e.id === t);
            if (!a) throw new s.ch(new i.nk());
            try {
              await Promise.all([
                new Promise((e) => {
                  let n = ({ chainId: o }) => {
                    o === t && (r.emitter.off("change", n), e());
                  };
                  r.emitter.on("change", n);
                }),
                n.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: (0, c.cK)(t) }],
                }),
              ]);
              let e = await this.getRequestedChainsIds();
              return this.setRequestedChainsIds([...e, t]), a;
            } catch (r) {
              if (/(user rejected)/i.test(r.message)) throw new s.vx(r);
              try {
                let r, o;
                (r = e?.blockExplorerUrls
                  ? e.blockExplorerUrls
                  : a.blockExplorers?.default.url
                  ? [a.blockExplorers?.default.url]
                  : []),
                  (o = e?.rpcUrls?.length
                    ? e.rpcUrls
                    : [...a.rpcUrls.default.http]);
                let i = {
                  blockExplorerUrls: r,
                  chainId: (0, c.cK)(t),
                  chainName: e?.chainName ?? a.name,
                  iconUrls: e?.iconUrls,
                  nativeCurrency: e?.nativeCurrency ?? a.nativeCurrency,
                  rpcUrls: o,
                };
                await n.request({
                  method: "wallet_addEthereumChain",
                  params: [i],
                });
                let s = await this.getRequestedChainsIds();
                return this.setRequestedChainsIds([...s, t]), a;
              } catch (e) {
                throw new s.vx(e);
              }
            }
          },
          onAccountsChanged(e) {
            0 === e.length
              ? this.onDisconnect()
              : r.emitter.emit("change", {
                  accounts: e.map((e) => (0, a.b)(e)),
                });
          },
          onChainChanged(e) {
            let t = Number(e);
            r.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let t = Number(e.chainId),
              n = await this.getAccounts();
            r.emitter.emit("connect", { accounts: n, chainId: t });
          },
          async onDisconnect(e) {
            this.setRequestedChainsIds([]), r.emitter.emit("disconnect");
            let t = await this.getProvider();
            p && (t.removeListener("accountsChanged", p), (p = void 0)),
              d && (t.removeListener("chainChanged", d), (d = void 0)),
              m && (t.removeListener("disconnect", m), (m = void 0)),
              w && (t.removeListener("session_delete", w), (w = void 0)),
              h || ((h = this.onConnect.bind(this)), t.on("connect", h));
          },
          onDisplayUri(e) {
            r.emitter.emit("message", { type: "display_uri", data: e });
          },
          onSessionDelete() {
            this.onDisconnect();
          },
          getNamespaceChainsIds: () =>
            t
              ? t.session?.namespaces.eip155?.accounts?.map((e) =>
                  Number.parseInt(e.split(":")[1] || "")
                ) ?? []
              : [],
          async getRequestedChainsIds() {
            return (
              (await r.storage?.getItem(this.requestedChainsStorageKey)) ?? []
            );
          },
          async isChainsStale() {
            if (!g) return !1;
            let e = r.chains.map((e) => e.id),
              t = this.getNamespaceChainsIds();
            if (t.length && !t.some((t) => e.includes(t))) return !1;
            let n = await this.getRequestedChainsIds();
            return !e.every((e) => n.includes(e));
          },
          async setRequestedChainsIds(e) {
            await r.storage?.setItem(this.requestedChainsStorageKey, e);
          },
          get requestedChainsStorageKey() {
            return `${this.id}.requestedChains`;
          },
        }));
      }
      l.type = "walletConnect";
    },
    46087: (e, t) => {
      let n,
        r = [
          0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
          655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706,
          1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196,
          3362, 3532, 3706,
        ];
      (t.getSymbolSize = function (e) {
        if (!e) throw Error('"version" cannot be null or undefined');
        if (e < 1 || e > 40)
          throw Error('"version" should be in range from 1 to 40');
        return 4 * e + 17;
      }),
        (t.getSymbolTotalCodewords = function (e) {
          return r[e];
        }),
        (t.getBCHDigit = function (e) {
          let t = 0;
          for (; 0 !== e; ) t++, (e >>>= 1);
          return t;
        }),
        (t.setToSJISFunction = function (e) {
          if ("function" != typeof e)
            throw Error('"toSJISFunc" is not a valid function.');
          n = e;
        }),
        (t.isKanjiModeEnabled = function () {
          return void 0 !== n;
        }),
        (t.toSJIS = function (e) {
          return n(e);
        });
    },
    46514: (e, t, n) => {
      let r = n(8527);
      (t.render = function (e, t, n) {
        var o;
        let i = n,
          a = t;
        void 0 !== i || (t && t.getContext) || ((i = t), (t = void 0)),
          t ||
            (a = (function () {
              try {
                return document.createElement("canvas");
              } catch (e) {
                throw Error("You need to specify a canvas element");
              }
            })()),
          (i = r.getOptions(i));
        let s = r.getImageWidth(e.modules.size, i),
          c = a.getContext("2d"),
          l = c.createImageData(s, s);
        return (
          r.qrToImageData(l.data, e, i),
          (o = a),
          c.clearRect(0, 0, o.width, o.height),
          o.style || (o.style = {}),
          (o.height = s),
          (o.width = s),
          (o.style.height = s + "px"),
          (o.style.width = s + "px"),
          c.putImageData(l, 0, 0),
          a
        );
      }),
        (t.renderToDataURL = function (e, n, r) {
          let o = r;
          void 0 !== o || (n && n.getContext) || ((o = n), (n = void 0)),
            o || (o = {});
          let i = t.render(e, n, o),
            a = o.type || "image/png",
            s = o.rendererOpts || {};
          return i.toDataURL(a, s.quality);
        });
    },
    55557: (e, t, n) => {
      "use strict";
      n.d(t, { G: () => r });
      let r = (0, n(22732).x)({
        id: 0xaa36a7,
        name: "Sepolia",
        nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://sepolia.drpc.org"] } },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://sepolia.etherscan.io",
            apiUrl: "https://api-sepolia.etherscan.io/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 751532,
          },
          ensRegistry: {
            address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          },
          ensUniversalResolver: {
            address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",
            blockCreated: 5317080,
          },
        },
        testnet: !0,
      });
    },
    55908: (e, t, n) => {
      let r = n(46087),
        o = n(58976),
        i = n(34122),
        a = n(79621),
        s = n(37788),
        c = n(645),
        l = n(36517),
        u = n(60519),
        p = n(60061),
        d = n(62202),
        h = n(88252),
        f = n(43585),
        w = n(72920);
      function m(e, t, n) {
        let r,
          o,
          i = e.size,
          a = h.getEncodedBits(t, n);
        for (r = 0; r < 15; r++)
          (o = ((a >> r) & 1) == 1),
            r < 6
              ? e.set(r, 8, o, !0)
              : r < 8
              ? e.set(r + 1, 8, o, !0)
              : e.set(i - 15 + r, 8, o, !0),
            r < 8
              ? e.set(8, i - r - 1, o, !0)
              : r < 9
              ? e.set(8, 15 - r - 1 + 1, o, !0)
              : e.set(8, 15 - r - 1, o, !0);
        e.set(i - 8, 8, 1, !0);
      }
      t.create = function (e, t) {
        let n, h;
        if (void 0 === e || "" === e) throw Error("No input text");
        let g = o.M;
        return (
          void 0 !== t &&
            ((g = o.from(t.errorCorrectionLevel, o.M)),
            (n = d.from(t.version)),
            (h = l.from(t.maskPattern)),
            t.toSJISFunc && r.setToSJISFunction(t.toSJISFunc)),
          (function (e, t, n, o) {
            let h;
            if (Array.isArray(e)) h = w.fromArray(e);
            else if ("string" == typeof e) {
              let r = t;
              if (!r) {
                let t = w.rawSplit(e);
                r = d.getBestVersionForData(t, n);
              }
              h = w.fromString(e, r || 40);
            } else throw Error("Invalid data");
            let g = d.getBestVersionForData(h, n);
            if (!g)
              throw Error(
                "The amount of data is too big to be stored in a QR Code"
              );
            if (t) {
              if (t < g)
                throw Error(
                  "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                    g +
                    ".\n"
                );
            } else t = g;
            let A = (function (e, t, n) {
                let o = new i();
                n.forEach(function (t) {
                  o.put(t.mode.bit, 4),
                    o.put(t.getLength(), f.getCharCountIndicator(t.mode, e)),
                    t.write(o);
                });
                let a =
                  (r.getSymbolTotalCodewords(e) -
                    u.getTotalCodewordsCount(e, t)) *
                  8;
                for (
                  o.getLengthInBits() + 4 <= a && o.put(0, 4);
                  o.getLengthInBits() % 8 != 0;

                )
                  o.putBit(0);
                let s = (a - o.getLengthInBits()) / 8;
                for (let e = 0; e < s; e++) o.put(e % 2 ? 17 : 236, 8);
                return (function (e, t, n) {
                  let o,
                    i,
                    a = r.getSymbolTotalCodewords(t),
                    s = a - u.getTotalCodewordsCount(t, n),
                    c = u.getBlocksCount(t, n),
                    l = a % c,
                    d = c - l,
                    h = Math.floor(a / c),
                    f = Math.floor(s / c),
                    w = f + 1,
                    m = h - f,
                    g = new p(m),
                    A = 0,
                    y = Array(c),
                    b = Array(c),
                    v = 0,
                    C = new Uint8Array(e.buffer);
                  for (let e = 0; e < c; e++) {
                    let t = e < d ? f : w;
                    (y[e] = C.slice(A, A + t)),
                      (b[e] = g.encode(y[e])),
                      (A += t),
                      (v = Math.max(v, t));
                  }
                  let k = new Uint8Array(a),
                    E = 0;
                  for (o = 0; o < v; o++)
                    for (i = 0; i < c; i++)
                      o < y[i].length && (k[E++] = y[i][o]);
                  for (o = 0; o < m; o++)
                    for (i = 0; i < c; i++) k[E++] = b[i][o];
                  return k;
                })(o, e, t);
              })(t, n, h),
              y = new a(r.getSymbolSize(t));
            !(function (e, t) {
              let n = e.size,
                r = c.getPositions(t);
              for (let t = 0; t < r.length; t++) {
                let o = r[t][0],
                  i = r[t][1];
                for (let t = -1; t <= 7; t++)
                  if (!(o + t <= -1) && !(n <= o + t))
                    for (let r = -1; r <= 7; r++)
                      i + r <= -1 ||
                        n <= i + r ||
                        ((t >= 0 && t <= 6 && (0 === r || 6 === r)) ||
                        (r >= 0 && r <= 6 && (0 === t || 6 === t)) ||
                        (t >= 2 && t <= 4 && r >= 2 && r <= 4)
                          ? e.set(o + t, i + r, !0, !0)
                          : e.set(o + t, i + r, !1, !0));
              }
            })(y, t);
            let b = y.size;
            for (let e = 8; e < b - 8; e++) {
              let t = e % 2 == 0;
              y.set(e, 6, t, !0), y.set(6, e, t, !0);
            }
            return (
              !(function (e, t) {
                let n = s.getPositions(t);
                for (let t = 0; t < n.length; t++) {
                  let r = n[t][0],
                    o = n[t][1];
                  for (let t = -2; t <= 2; t++)
                    for (let n = -2; n <= 2; n++)
                      -2 === t ||
                      2 === t ||
                      -2 === n ||
                      2 === n ||
                      (0 === t && 0 === n)
                        ? e.set(r + t, o + n, !0, !0)
                        : e.set(r + t, o + n, !1, !0);
                }
              })(y, t),
              m(y, n, 0),
              t >= 7 &&
                (function (e, t) {
                  let n,
                    r,
                    o,
                    i = e.size,
                    a = d.getEncodedBits(t);
                  for (let t = 0; t < 18; t++)
                    (n = Math.floor(t / 3)),
                      (r = (t % 3) + i - 8 - 3),
                      (o = ((a >> t) & 1) == 1),
                      e.set(n, r, o, !0),
                      e.set(r, n, o, !0);
                })(y, t),
              !(function (e, t) {
                let n = e.size,
                  r = -1,
                  o = n - 1,
                  i = 7,
                  a = 0;
                for (let s = n - 1; s > 0; s -= 2)
                  for (6 === s && s--; ; ) {
                    for (let n = 0; n < 2; n++)
                      if (!e.isReserved(o, s - n)) {
                        let r = !1;
                        a < t.length && (r = ((t[a] >>> i) & 1) == 1),
                          e.set(o, s - n, r),
                          -1 == --i && (a++, (i = 7));
                      }
                    if ((o += r) < 0 || n <= o) {
                      (o -= r), (r = -r);
                      break;
                    }
                  }
              })(y, A),
              isNaN(o) && (o = l.getBestMask(y, m.bind(null, y, n))),
              l.applyMask(o, y),
              m(y, n, o),
              {
                modules: y,
                version: t,
                errorCorrectionLevel: n,
                maskPattern: o,
                segments: h,
              }
            );
          })(e, n, g, h)
        );
      };
    },
    56886: (e, t, n) => {
      "use strict";
      n.d(t, { D: () => r });
      let r = (0, n(22732).x)({
        id: 42161,
        name: "Arbitrum One",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://arb1.arbitrum.io/rpc"] } },
        blockExplorers: {
          default: {
            name: "Arbiscan",
            url: "https://arbiscan.io",
            apiUrl: "https://api.arbiscan.io/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 7654707,
          },
        },
      });
    },
    57354: (e, t) => {
      let n = new Uint8Array(512),
        r = new Uint8Array(256);
      !(function () {
        let e = 1;
        for (let t = 0; t < 255; t++)
          (n[t] = e), (r[e] = t), 256 & (e <<= 1) && (e ^= 285);
        for (let e = 255; e < 512; e++) n[e] = n[e - 255];
      })(),
        (t.log = function (e) {
          if (e < 1) throw Error("log(" + e + ")");
          return r[e];
        }),
        (t.exp = function (e) {
          return n[e];
        }),
        (t.mul = function (e, t) {
          return 0 === e || 0 === t ? 0 : n[r[e] + r[t]];
        });
    },
    58646: (e, t, n) => {
      "use strict";
      let r;
      n.d(t, { Z: () => v });
      var o = n(98078);
      let i = (e) => (t, n, r) => {
          let o = r.subscribe;
          return (
            (r.subscribe = (e, t, n) => {
              let i = e;
              if (t) {
                let o = (null == n ? void 0 : n.equalityFn) || Object.is,
                  a = e(r.getState());
                (i = (n) => {
                  let r = e(n);
                  if (!o(a, r)) {
                    let e = a;
                    t((a = r), e);
                  }
                }),
                  (null == n ? void 0 : n.fireImmediately) && t(a, a);
              }
              return o(i);
            }),
            e(t, n, r)
          );
        },
        a = (e) => (t) => {
          try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
              then: (e) => a(e)(n),
              catch(e) {
                return this;
              },
            };
          } catch (e) {
            return {
              then(e) {
                return this;
              },
              catch: (t) => a(t)(e),
            };
          }
        },
        s = (e, t) => (n, r, o) => {
          let i,
            s = {
              storage: (function (e, t) {
                let n;
                try {
                  n = e();
                } catch (e) {
                  return;
                }
                return {
                  getItem: (e) => {
                    var t;
                    let r = (e) => (null === e ? null : JSON.parse(e, void 0)),
                      o = null != (t = n.getItem(e)) ? t : null;
                    return o instanceof Promise ? o.then(r) : r(o);
                  },
                  setItem: (e, t) => n.setItem(e, JSON.stringify(t, void 0)),
                  removeItem: (e) => n.removeItem(e),
                };
              })(() => localStorage),
              partialize: (e) => e,
              version: 0,
              merge: (e, t) => ({ ...t, ...e }),
              ...t,
            },
            c = !1,
            l = new Set(),
            u = new Set(),
            p = s.storage;
          if (!p)
            return e(
              (...e) => {
                console.warn(
                  `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
                ),
                  n(...e);
              },
              r,
              o
            );
          let d = () => {
              let e = s.partialize({ ...r() });
              return p.setItem(s.name, { state: e, version: s.version });
            },
            h = o.setState;
          o.setState = (e, t) => {
            h(e, t), d();
          };
          let f = e(
            (...e) => {
              n(...e), d();
            },
            r,
            o
          );
          o.getInitialState = () => f;
          let w = () => {
            var e, t;
            if (!p) return;
            (c = !1),
              l.forEach((e) => {
                var t;
                return e(null != (t = r()) ? t : f);
              });
            let o =
              (null == (t = s.onRehydrateStorage)
                ? void 0
                : t.call(s, null != (e = r()) ? e : f)) || void 0;
            return a(p.getItem.bind(p))(s.name)
              .then((e) => {
                if (e)
                  if ("number" != typeof e.version || e.version === s.version)
                    return [!1, e.state];
                  else {
                    if (s.migrate) return [!0, s.migrate(e.state, e.version)];
                    console.error(
                      "State loaded from storage couldn't be migrated since no migrate function was provided"
                    );
                  }
                return [!1, void 0];
              })
              .then((e) => {
                var t;
                let [o, a] = e;
                if ((n((i = s.merge(a, null != (t = r()) ? t : f)), !0), o))
                  return d();
              })
              .then(() => {
                null == o || o(i, void 0),
                  (i = r()),
                  (c = !0),
                  u.forEach((e) => e(i));
              })
              .catch((e) => {
                null == o || o(void 0, e);
              });
          };
          return (
            (o.persist = {
              setOptions: (e) => {
                (s = { ...s, ...e }), e.storage && (p = e.storage);
              },
              clearStorage: () => {
                null == p || p.removeItem(s.name);
              },
              getOptions: () => s,
              rehydrate: () => w(),
              hasHydrated: () => c,
              onHydrate: (e) => (
                l.add(e),
                () => {
                  l.delete(e);
                }
              ),
              onFinishHydration: (e) => (
                u.add(e),
                () => {
                  u.delete(e);
                }
              ),
            }),
            s.skipHydration || w(),
            i || f
          );
        },
        c = (e) => {
          let t,
            n = new Set(),
            r = (e, r) => {
              let o = "function" == typeof e ? e(t) : e;
              if (!Object.is(o, t)) {
                let e = t;
                (t = (null != r ? r : "object" != typeof o || null === o)
                  ? o
                  : Object.assign({}, t, o)),
                  n.forEach((n) => n(t, e));
              }
            },
            o = () => t,
            i = {
              setState: r,
              getState: o,
              getInitialState: () => a,
              subscribe: (e) => (n.add(e), () => n.delete(e)),
            },
            a = (t = e(r, o, i));
          return i;
        },
        l = (e) => (e ? c(e) : c);
      var u = n(1607),
        p = n(12878);
      class d {
        constructor(e) {
          Object.defineProperty(this, "uid", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          }),
            Object.defineProperty(this, "_emitter", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new p(),
            });
        }
        on(e, t) {
          this._emitter.on(e, t);
        }
        once(e, t) {
          this._emitter.once(e, t);
        }
        off(e, t) {
          this._emitter.off(e, t);
        }
        emit(e, ...t) {
          let n = t[0];
          this._emitter.emit(e, { uid: this.uid, ...n });
        }
        listenerCount(e) {
          return this._emitter.listenerCount(e);
        }
      }
      function h(e, t) {
        return JSON.parse(e, (e, n) => {
          let r = n;
          return (
            r?.__type === "bigint" && (r = BigInt(r.value)),
            r?.__type === "Map" && (r = new Map(r.value)),
            t?.(e, r) ?? r
          );
        });
      }
      function f(e, t) {
        return e.slice(0, t).join(".") || ".";
      }
      function w(e, t) {
        let { length: n } = e;
        for (let r = 0; r < n; ++r) if (e[r] === t) return r + 1;
        return 0;
      }
      function m(e, t, n, r) {
        return JSON.stringify(
          e,
          (function (e, t) {
            let n = "function" == typeof e,
              r = "function" == typeof t,
              o = [],
              i = [];
            return function (a, s) {
              if ("object" == typeof s)
                if (o.length) {
                  let e = w(o, this);
                  0 === e ? (o[o.length] = this) : (o.splice(e), i.splice(e)),
                    (i[i.length] = a);
                  let n = w(o, s);
                  if (0 !== n)
                    return r ? t.call(this, a, s, f(i, n)) : `[ref=${f(i, n)}]`;
                } else (o[0] = s), (i[0] = a);
              return n ? e.call(this, a, s) : s;
            };
          })((e, n) => {
            let r = n;
            return (
              "bigint" == typeof r &&
                (r = { __type: "bigint", value: n.toString() }),
              r instanceof Map &&
                (r = { __type: "Map", value: Array.from(n.entries()) }),
              t?.(e, r) ?? r
            );
          }, r),
          n ?? void 0
        );
      }
      let g = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
      var A = n(77752);
      let y = 256;
      var b = n(40194);
      function v(e) {
        let t,
          {
            multiInjectedProviderDiscovery: n = !0,
            storage: a = (function (e) {
              let {
                deserialize: t = h,
                key: n = "wagmi",
                serialize: r = m,
                storage: o = g,
              } = e;
              function i(e) {
                return e instanceof Promise
                  ? e.then((e) => e).catch(() => null)
                  : e;
              }
              return {
                ...o,
                key: n,
                async getItem(e, r) {
                  let a = o.getItem(`${n}.${e}`),
                    s = await i(a);
                  return s ? t(s) ?? null : r ?? null;
                },
                async setItem(e, t) {
                  let a = `${n}.${e}`;
                  null === t
                    ? await i(o.removeItem(a))
                    : await i(o.setItem(a, r(t)));
                },
                async removeItem(e) {
                  await i(o.removeItem(`${n}.${e}`));
                },
              };
            })({
              storage: (function () {
                let e =
                  "undefined" != typeof window && window.localStorage
                    ? window.localStorage
                    : g;
                return {
                  getItem: (t) => e.getItem(t),
                  removeItem(t) {
                    e.removeItem(t);
                  },
                  setItem(t, n) {
                    try {
                      e.setItem(t, n);
                    } catch {}
                  },
                };
              })(),
            }),
            syncConnectedChain: c = !0,
            ssr: p = !1,
            ...f
          } = e,
          w =
            "undefined" != typeof window && n
              ? (function () {
                  let e = new Set(),
                    t = [],
                    n = () =>
                      (function (e) {
                        if ("undefined" == typeof window) return;
                        let t = (t) => e(t.detail);
                        return (
                          window.addEventListener(
                            "eip6963:announceProvider",
                            t
                          ),
                          window.dispatchEvent(
                            new CustomEvent("eip6963:requestProvider")
                          ),
                          () =>
                            window.removeEventListener(
                              "eip6963:announceProvider",
                              t
                            )
                        );
                      })((n) => {
                        t.some(({ info: e }) => e.uuid === n.info.uuid) ||
                          ((t = [...t, n]),
                          e.forEach((e) => e(t, { added: [n] })));
                      }),
                    r = n();
                  return {
                    _listeners: () => e,
                    clear() {
                      e.forEach((e) => e([], { removed: [...t] })), (t = []);
                    },
                    destroy() {
                      this.clear(), e.clear(), r?.();
                    },
                    findProvider: ({ rdns: e }) =>
                      t.find((t) => t.info.rdns === e),
                    getProviders: () => t,
                    reset() {
                      this.clear(), r?.(), (r = n());
                    },
                    subscribe: (n, { emitImmediately: r } = {}) => (
                      e.add(n), r && n(t, { added: t }), () => e.delete(n)
                    ),
                  };
                })()
              : void 0,
          v = l(() => f.chains),
          C = l(() => {
            let e = [],
              t = new Set();
            for (let n of f.connectors ?? []) {
              let r = k(n);
              if ((e.push(r), !p && r.rdns))
                for (let e of "string" == typeof r.rdns ? [r.rdns] : r.rdns)
                  t.add(e);
            }
            if (!p && w)
              for (let n of w.getProviders())
                t.has(n.info.rdns) || e.push(k(E(n)));
            return e;
          });
        function k(e) {
          let t = new d(
              (function (e = 11) {
                if (!r || y + e > 512) {
                  (r = ""), (y = 0);
                  for (let e = 0; e < 256; e++)
                    r += ((256 + 256 * Math.random()) | 0)
                      .toString(16)
                      .substring(1);
                }
                return r.substring(y, y++ + e);
              })()
            ),
            n = {
              ...e({
                emitter: t,
                chains: v.getState(),
                storage: a,
                transports: f.transports,
              }),
              emitter: t,
              uid: t.uid,
            };
          return t.on("connect", D), n.setup?.(), n;
        }
        function E(e) {
          let { info: t } = e,
            n = e.provider;
          return (0, u.b)({ target: { ...t, id: t.rdns, provider: n } });
        }
        let x = new Map();
        function B() {
          return {
            chainId: v.getState()[0].id,
            connections: new Map(),
            current: null,
            status: "disconnected",
          };
        }
        let I = "0.0.0-canary-";
        t = b.r.startsWith(I)
          ? Number.parseInt(b.r.replace(I, ""))
          : Number.parseInt(b.r.split(".")[0] ?? "0");
        let S = l(
          i(
            a
              ? s(B, {
                  migrate(e, n) {
                    if (n === t) return e;
                    let r = B(),
                      o = N(e, r.chainId);
                    return { ...r, chainId: o };
                  },
                  name: "store",
                  partialize: (e) => ({
                    connections: {
                      __type: "Map",
                      value: Array.from(e.connections.entries()).map(
                        ([e, t]) => {
                          let { id: n, name: r, type: o, uid: i } = t.connector;
                          return [
                            e,
                            {
                              ...t,
                              connector: { id: n, name: r, type: o, uid: i },
                            },
                          ];
                        }
                      ),
                    },
                    chainId: e.chainId,
                    current: e.current,
                  }),
                  merge(e, t) {
                    "object" == typeof e &&
                      e &&
                      "status" in e &&
                      delete e.status;
                    let n = N(e, t.chainId);
                    return { ...t, ...e, chainId: n };
                  },
                  skipHydration: p,
                  storage: a,
                  version: t,
                })
              : B
          )
        );
        function N(e, t) {
          return e &&
            "object" == typeof e &&
            "chainId" in e &&
            "number" == typeof e.chainId &&
            v.getState().some((t) => t.id === e.chainId)
            ? e.chainId
            : t;
        }
        function T(e) {
          S.setState((t) => {
            let n = t.connections.get(e.uid);
            return n
              ? {
                  ...t,
                  connections: new Map(t.connections).set(e.uid, {
                    accounts: e.accounts ?? n.accounts,
                    chainId: e.chainId ?? n.chainId,
                    connector: n.connector,
                  }),
                }
              : t;
          });
        }
        function D(e) {
          "connecting" !== S.getState().status &&
            "reconnecting" !== S.getState().status &&
            S.setState((t) => {
              let n = C.getState().find((t) => t.uid === e.uid);
              return n
                ? (n.emitter.listenerCount("connect") &&
                    n.emitter.off("connect", T),
                  n.emitter.listenerCount("change") ||
                    n.emitter.on("change", T),
                  n.emitter.listenerCount("disconnect") ||
                    n.emitter.on("disconnect", Q),
                  {
                    ...t,
                    connections: new Map(t.connections).set(e.uid, {
                      accounts: e.accounts,
                      chainId: e.chainId,
                      connector: n,
                    }),
                    current: e.uid,
                    status: "connected",
                  })
                : t;
            });
        }
        function Q(e) {
          S.setState((t) => {
            let n = t.connections.get(e.uid);
            if (n) {
              let e = n.connector;
              e.emitter.listenerCount("change") &&
                n.connector.emitter.off("change", T),
                e.emitter.listenerCount("disconnect") &&
                  n.connector.emitter.off("disconnect", Q),
                e.emitter.listenerCount("connect") ||
                  n.connector.emitter.on("connect", D);
            }
            if ((t.connections.delete(e.uid), 0 === t.connections.size))
              return {
                ...t,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            let r = t.connections.values().next().value;
            return {
              ...t,
              connections: new Map(t.connections),
              current: r.connector.uid,
            };
          });
        }
        return (
          S.setState(B()),
          c &&
            S.subscribe(
              ({ connections: e, current: t }) =>
                t ? e.get(t)?.chainId : void 0,
              (e) => {
                if (v.getState().some((t) => t.id === e))
                  return S.setState((t) => ({ ...t, chainId: e ?? t.chainId }));
              }
            ),
          w?.subscribe((e) => {
            let t = new Set(),
              n = new Set();
            for (let e of C.getState())
              if ((t.add(e.id), e.rdns))
                for (let t of "string" == typeof e.rdns ? [e.rdns] : e.rdns)
                  n.add(t);
            let r = [];
            for (let o of e) {
              if (n.has(o.info.rdns)) continue;
              let e = k(E(o));
              t.has(e.id) || r.push(e);
            }
            (!a || S.persist.hasHydrated()) &&
              C.setState((e) => [...e, ...r], !0);
          }),
          {
            get chains() {
              return v.getState();
            },
            get connectors() {
              return C.getState();
            },
            storage: a,
            getClient: function (e = {}) {
              let t,
                n = e.chainId ?? S.getState().chainId,
                r = v.getState().find((e) => e.id === n);
              if (e.chainId && !r) throw new A.nk();
              {
                let e = x.get(S.getState().chainId);
                if (e && !r) return e;
                if (!r) throw new A.nk();
              }
              {
                let e = x.get(n);
                if (e) return e;
              }
              if (f.client) t = f.client({ chain: r });
              else {
                let e = r.id,
                  n = v.getState().map((e) => e.id),
                  i = {};
                for (let [t, r] of Object.entries(f))
                  if (
                    "chains" !== t &&
                    "client" !== t &&
                    "connectors" !== t &&
                    "transports" !== t
                  )
                    if ("object" == typeof r)
                      if (e in r) i[t] = r[e];
                      else {
                        if (n.some((e) => e in r)) continue;
                        i[t] = r;
                      }
                    else i[t] = r;
                t = (0, o.U)({
                  ...i,
                  chain: r,
                  batch: i.batch ?? { multicall: !0 },
                  transport: (t) => f.transports[e]({ ...t, connectors: C }),
                });
              }
              return x.set(n, t), t;
            },
            get state() {
              return S.getState();
            },
            setState(e) {
              let t;
              t = "function" == typeof e ? e(S.getState()) : e;
              let n = B();
              "object" != typeof t && (t = n),
                Object.keys(n).some((e) => !(e in t)) && (t = n),
                S.setState(t, !0);
            },
            subscribe: (e, t, n) =>
              S.subscribe(
                e,
                t,
                n ? { ...n, fireImmediately: n.emitImmediately } : void 0
              ),
            _internal: {
              mipd: w,
              store: S,
              ssr: !!p,
              syncConnectedChain: c,
              transports: f.transports,
              chains: {
                setState(e) {
                  let t = "function" == typeof e ? e(v.getState()) : e;
                  if (0 !== t.length) return v.setState(t, !0);
                },
                subscribe: (e) => v.subscribe(e),
              },
              connectors: {
                providerDetailToConnector: E,
                setup: k,
                setState: (e) =>
                  C.setState("function" == typeof e ? e(C.getState()) : e, !0),
                subscribe: (e) => C.subscribe(e),
              },
              events: { change: T, connect: D, disconnect: Q },
            },
          }
        );
      }
    },
    58976: (e, t) => {
      (t.L = { bit: 1 }),
        (t.M = { bit: 0 }),
        (t.Q = { bit: 3 }),
        (t.H = { bit: 2 }),
        (t.isValid = function (e) {
          return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4;
        }),
        (t.from = function (e, n) {
          if (t.isValid(e)) return e;
          try {
            if ("string" != typeof e) throw Error("Param is not a string");
            switch (e.toLowerCase()) {
              case "l":
              case "low":
                return t.L;
              case "m":
              case "medium":
                return t.M;
              case "q":
              case "quartile":
                return t.Q;
              case "h":
              case "high":
                return t.H;
              default:
                throw Error("Unknown EC Level: " + e);
            }
          } catch (e) {
            return n;
          }
        });
    },
    60061: (e, t, n) => {
      let r = n(91640);
      function o(e) {
        (this.genPoly = void 0),
          (this.degree = e),
          this.degree && this.initialize(this.degree);
      }
      (o.prototype.initialize = function (e) {
        (this.degree = e), (this.genPoly = r.generateECPolynomial(this.degree));
      }),
        (o.prototype.encode = function (e) {
          if (!this.genPoly) throw Error("Encoder not initialized");
          let t = new Uint8Array(e.length + this.degree);
          t.set(e);
          let n = r.mod(t, this.genPoly),
            o = this.degree - n.length;
          if (o > 0) {
            let e = new Uint8Array(this.degree);
            return e.set(n, o), e;
          }
          return n;
        }),
        (e.exports = o);
    },
    60519: (e, t, n) => {
      let r = n(58976),
        o = [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4,
          4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8,
          10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6,
          11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23,
          25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12,
          23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29,
          40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51,
          60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74,
          24, 47, 65, 77, 25, 49, 68, 81,
        ],
        i = [
          7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48,
          72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110,
          160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308,
          104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280,
          408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650,
          224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504,
          750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952,
          1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140,
          1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350,
          1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590,
          1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
          2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
        ];
      (t.getBlocksCount = function (e, t) {
        switch (t) {
          case r.L:
            return o[(e - 1) * 4 + 0];
          case r.M:
            return o[(e - 1) * 4 + 1];
          case r.Q:
            return o[(e - 1) * 4 + 2];
          case r.H:
            return o[(e - 1) * 4 + 3];
          default:
            return;
        }
      }),
        (t.getTotalCodewordsCount = function (e, t) {
          switch (t) {
            case r.L:
              return i[(e - 1) * 4 + 0];
            case r.M:
              return i[(e - 1) * 4 + 1];
            case r.Q:
              return i[(e - 1) * 4 + 2];
            case r.H:
              return i[(e - 1) * 4 + 3];
            default:
              return;
          }
        });
    },
    62013: (e, t, n) => {
      let r = n(8527);
      function o(e, t) {
        let n = e.a / 255,
          r = t + '="' + e.hex + '"';
        return n < 1
          ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"'
          : r;
      }
      function i(e, t, n) {
        let r = e + t;
        return void 0 !== n && (r += " " + n), r;
      }
      t.render = function (e, t, n) {
        let a = r.getOptions(t),
          s = e.modules.size,
          c = e.modules.data,
          l = s + 2 * a.margin,
          u = a.color.light.a
            ? "<path " +
              o(a.color.light, "fill") +
              ' d="M0 0h' +
              l +
              "v" +
              l +
              'H0z"/>'
            : "",
          p =
            "<path " +
            o(a.color.dark, "stroke") +
            ' d="' +
            (function (e, t, n) {
              let r = "",
                o = 0,
                a = !1,
                s = 0;
              for (let c = 0; c < e.length; c++) {
                let l = Math.floor(c % t),
                  u = Math.floor(c / t);
                l || a || (a = !0),
                  e[c]
                    ? (s++,
                      (c > 0 && l > 0 && e[c - 1]) ||
                        ((r += a ? i("M", l + n, 0.5 + u + n) : i("m", o, 0)),
                        (o = 0),
                        (a = !1)),
                      (l + 1 < t && e[c + 1]) || ((r += i("h", s)), (s = 0)))
                    : o++;
              }
              return r;
            })(c, s, a.margin) +
            '"/>',
          d =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            (a.width
              ? 'width="' + a.width + '" height="' + a.width + '" '
              : "") +
            ('viewBox="0 0 ' + l + " ") +
            l +
            '" shape-rendering="crispEdges">' +
            u +
            p +
            "</svg>\n";
        return "function" == typeof n && n(null, d), d;
      };
    },
    62202: (e, t, n) => {
      let r = n(46087),
        o = n(60519),
        i = n(58976),
        a = n(43585),
        s = n(29343),
        c = r.getBCHDigit(7973);
      function l(e, t) {
        return a.getCharCountIndicator(e, t) + 4;
      }
      (t.from = function (e, t) {
        return s.isValid(e) ? parseInt(e, 10) : t;
      }),
        (t.getCapacity = function (e, t, n) {
          if (!s.isValid(e)) throw Error("Invalid QR Code version");
          void 0 === n && (n = a.BYTE);
          let i =
            (r.getSymbolTotalCodewords(e) - o.getTotalCodewordsCount(e, t)) * 8;
          if (n === a.MIXED) return i;
          let c = i - l(n, e);
          switch (n) {
            case a.NUMERIC:
              return Math.floor((c / 10) * 3);
            case a.ALPHANUMERIC:
              return Math.floor((c / 11) * 2);
            case a.KANJI:
              return Math.floor(c / 13);
            case a.BYTE:
            default:
              return Math.floor(c / 8);
          }
        }),
        (t.getBestVersionForData = function (e, n) {
          let r,
            o = i.from(n, i.M);
          if (Array.isArray(e)) {
            if (e.length > 1) {
              for (let n = 1; n <= 40; n++)
                if (
                  (function (e, t) {
                    let n = 0;
                    return (
                      e.forEach(function (e) {
                        let r = l(e.mode, t);
                        n += r + e.getBitsLength();
                      }),
                      n
                    );
                  })(e, n) <= t.getCapacity(n, o, a.MIXED)
                )
                  return n;
              return;
            }
            if (0 === e.length) return 1;
            r = e[0];
          } else r = e;
          return (function (e, n, r) {
            for (let o = 1; o <= 40; o++)
              if (n <= t.getCapacity(o, r, e)) return o;
          })(r.mode, r.getLength(), o);
        }),
        (t.getEncodedBits = function (e) {
          if (!s.isValid(e) || e < 7) throw Error("Invalid QR Code version");
          let t = e << 12;
          for (; r.getBCHDigit(t) - c >= 0; )
            t ^= 7973 << (r.getBCHDigit(t) - c);
          return (e << 12) | t;
        });
    },
    62540: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => s });
      var r = n(9894),
        o = n(90113),
        i = n(35883),
        a = n(78519);
      function s(e = {}) {
        let t,
          c,
          { shimDisconnect: l = !1 } = e;
        return (0, r.U)((r) => ({
          id: "safe",
          name: "Safe",
          type: s.type,
          async connect() {
            let e = await this.getProvider();
            if (!e) throw new o.N();
            let t = await this.getAccounts(),
              n = await this.getChainId();
            return (
              c || ((c = this.onDisconnect.bind(this)), e.on("disconnect", c)),
              l && (await r.storage?.removeItem("safe.disconnected")),
              { accounts: t, chainId: n }
            );
          },
          async disconnect() {
            let e = await this.getProvider();
            if (!e) throw new o.N();
            c && (e.removeListener("disconnect", c), (c = void 0)),
              l && (await r.storage?.setItem("safe.disconnected", !0));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new o.N();
            return (await e.request({ method: "eth_accounts" })).map(i.b);
          },
          async getProvider() {
            if ("undefined" != typeof window && window?.parent !== window) {
              if (!t) {
                let { default: r } = await Promise.all([
                    n.e(5242),
                    n.e(4278),
                  ]).then(n.bind(n, 94278)),
                  o = new r(e),
                  i = await (0, a.w)(() => o.safe.getInfo(), {
                    timeout: e.unstable_getInfoTimeout ?? 10,
                  });
                if (!i) throw Error("Could not load Safe information");
                t = new (await (async () => {
                  let e = await Promise.all([
                    n.e(5242),
                    n.e(1034),
                    n.e(5779),
                  ]).then(n.t.bind(n, 55779, 19));
                  return "function" != typeof e.SafeAppProvider &&
                    "function" == typeof e.default.SafeAppProvider
                    ? e.default.SafeAppProvider
                    : e.SafeAppProvider;
                })())(i, o);
              }
              return t;
            }
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new o.N();
            return Number(e.chainId);
          },
          async isAuthorized() {
            try {
              if (l && (await r.storage?.getItem("safe.disconnected")))
                return !1;
              return !!(await this.getAccounts()).length;
            } catch {
              return !1;
            }
          },
          onAccountsChanged() {},
          onChainChanged() {},
          onDisconnect() {
            r.emitter.emit("disconnect");
          },
        }));
      }
      s.type = "safe";
    },
    63963: (e, t, n) => {
      "use strict";
      n.d(t, { Y: () => r });
      let r = (0, n(22732).x)({
        id: 421614,
        name: "Arbitrum Sepolia",
        nativeCurrency: {
          name: "Arbitrum Sepolia Ether",
          symbol: "ETH",
          decimals: 18,
        },
        rpcUrls: {
          default: { http: ["https://sepolia-rollup.arbitrum.io/rpc"] },
        },
        blockExplorers: {
          default: {
            name: "Arbiscan",
            url: "https://sepolia.arbiscan.io",
            apiUrl: "https://api-sepolia.arbiscan.io/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 81930,
          },
        },
        testnet: !0,
      });
    },
    66444: (e, t, n) => {
      let r = n(43585);
      function o(e) {
        (this.mode = r.NUMERIC), (this.data = e.toString());
      }
      (o.getBitsLength = function (e) {
        return 10 * Math.floor(e / 3) + (e % 3 ? (e % 3) * 3 + 1 : 0);
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (e) {
          let t, n, r;
          for (t = 0; t + 3 <= this.data.length; t += 3)
            (r = parseInt(this.data.substr(t, 3), 10)), e.put(r, 10);
          let o = this.data.length - t;
          o > 0 &&
            ((r = parseInt(this.data.substr(t), 10)), e.put(r, 3 * o + 1));
        }),
        (e.exports = o);
    },
    69184: (e, t, n) => {
      let r = n(43585),
        o = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          " ",
          "$",
          "%",
          "*",
          "+",
          "-",
          ".",
          "/",
          ":",
        ];
      function i(e) {
        (this.mode = r.ALPHANUMERIC), (this.data = e);
      }
      (i.getBitsLength = function (e) {
        return 11 * Math.floor(e / 2) + (e % 2) * 6;
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (e) {
          let t;
          for (t = 0; t + 2 <= this.data.length; t += 2) {
            let n = 45 * o.indexOf(this.data[t]);
            (n += o.indexOf(this.data[t + 1])), e.put(n, 11);
          }
          this.data.length % 2 && e.put(o.indexOf(this.data[t]), 6);
        }),
        (e.exports = i);
    },
    72920: (e, t, n) => {
      let r = n(43585),
        o = n(66444),
        i = n(69184),
        a = n(87487),
        s = n(15580),
        c = n(81685),
        l = n(46087),
        u = n(98521);
      function p(e) {
        return unescape(encodeURIComponent(e)).length;
      }
      function d(e, t, n) {
        let r,
          o = [];
        for (; null !== (r = e.exec(n)); )
          o.push({ data: r[0], index: r.index, mode: t, length: r[0].length });
        return o;
      }
      function h(e) {
        let t,
          n,
          o = d(c.NUMERIC, r.NUMERIC, e),
          i = d(c.ALPHANUMERIC, r.ALPHANUMERIC, e);
        return (
          l.isKanjiModeEnabled()
            ? ((t = d(c.BYTE, r.BYTE, e)), (n = d(c.KANJI, r.KANJI, e)))
            : ((t = d(c.BYTE_KANJI, r.BYTE, e)), (n = [])),
          o
            .concat(i, t, n)
            .sort(function (e, t) {
              return e.index - t.index;
            })
            .map(function (e) {
              return { data: e.data, mode: e.mode, length: e.length };
            })
        );
      }
      function f(e, t) {
        switch (t) {
          case r.NUMERIC:
            return o.getBitsLength(e);
          case r.ALPHANUMERIC:
            return i.getBitsLength(e);
          case r.KANJI:
            return s.getBitsLength(e);
          case r.BYTE:
            return a.getBitsLength(e);
        }
      }
      function w(e, t) {
        let n,
          c = r.getBestModeForData(e);
        if ((n = r.from(t, c)) !== r.BYTE && n.bit < c.bit)
          throw Error(
            '"' +
              e +
              '" cannot be encoded with mode ' +
              r.toString(n) +
              ".\n Suggested mode is: " +
              r.toString(c)
          );
        switch ((n === r.KANJI && !l.isKanjiModeEnabled() && (n = r.BYTE), n)) {
          case r.NUMERIC:
            return new o(e);
          case r.ALPHANUMERIC:
            return new i(e);
          case r.KANJI:
            return new s(e);
          case r.BYTE:
            return new a(e);
        }
      }
      (t.fromArray = function (e) {
        return e.reduce(function (e, t) {
          return (
            "string" == typeof t
              ? e.push(w(t, null))
              : t.data && e.push(w(t.data, t.mode)),
            e
          );
        }, []);
      }),
        (t.fromString = function (e, n) {
          let o = (function (e, t) {
              let n = {},
                o = { start: {} },
                i = ["start"];
              for (let a = 0; a < e.length; a++) {
                let s = e[a],
                  c = [];
                for (let e = 0; e < s.length; e++) {
                  let l = s[e],
                    u = "" + a + e;
                  c.push(u), (n[u] = { node: l, lastCount: 0 }), (o[u] = {});
                  for (let e = 0; e < i.length; e++) {
                    let a = i[e];
                    n[a] && n[a].node.mode === l.mode
                      ? ((o[a][u] =
                          f(n[a].lastCount + l.length, l.mode) -
                          f(n[a].lastCount, l.mode)),
                        (n[a].lastCount += l.length))
                      : (n[a] && (n[a].lastCount = l.length),
                        (o[a][u] =
                          f(l.length, l.mode) +
                          4 +
                          r.getCharCountIndicator(l.mode, t)));
                  }
                }
                i = c;
              }
              for (let e = 0; e < i.length; e++) o[i[e]].end = 0;
              return { map: o, table: n };
            })(
              (function (e) {
                let t = [];
                for (let n = 0; n < e.length; n++) {
                  let o = e[n];
                  switch (o.mode) {
                    case r.NUMERIC:
                      t.push([
                        o,
                        {
                          data: o.data,
                          mode: r.ALPHANUMERIC,
                          length: o.length,
                        },
                        { data: o.data, mode: r.BYTE, length: o.length },
                      ]);
                      break;
                    case r.ALPHANUMERIC:
                      t.push([
                        o,
                        { data: o.data, mode: r.BYTE, length: o.length },
                      ]);
                      break;
                    case r.KANJI:
                      t.push([
                        o,
                        { data: o.data, mode: r.BYTE, length: p(o.data) },
                      ]);
                      break;
                    case r.BYTE:
                      t.push([
                        { data: o.data, mode: r.BYTE, length: p(o.data) },
                      ]);
                  }
                }
                return t;
              })(h(e, l.isKanjiModeEnabled())),
              n
            ),
            i = u.find_path(o.map, "start", "end"),
            a = [];
          for (let e = 1; e < i.length - 1; e++) a.push(o.table[i[e]].node);
          return t.fromArray(
            a.reduce(function (e, t) {
              let n = e.length - 1 >= 0 ? e[e.length - 1] : null;
              return (
                n && n.mode === t.mode
                  ? (e[e.length - 1].data += t.data)
                  : e.push(t),
                e
              );
            }, [])
          );
        }),
        (t.rawSplit = function (e) {
          return t.fromArray(h(e, l.isKanjiModeEnabled()));
        });
    },
    78519: (e, t, n) => {
      "use strict";
      function r(
        e,
        { errorInstance: t = Error("timed out"), timeout: n, signal: r }
      ) {
        return new Promise((o, i) => {
          (async () => {
            let a;
            try {
              let s = new AbortController();
              n > 0 &&
                (a = setTimeout(() => {
                  r ? s.abort() : i(t);
                }, n)),
                o(await e({ signal: s?.signal || null }));
            } catch (e) {
              e?.name === "AbortError" && i(t), i(e);
            } finally {
              clearTimeout(a);
            }
          })();
        });
      }
      n.d(t, { w: () => r });
    },
    79621: (e) => {
      function t(e) {
        if (!e || e < 1)
          throw Error("BitMatrix size must be defined and greater than 0");
        (this.size = e),
          (this.data = new Uint8Array(e * e)),
          (this.reservedBit = new Uint8Array(e * e));
      }
      (t.prototype.set = function (e, t, n, r) {
        let o = e * this.size + t;
        (this.data[o] = n), r && (this.reservedBit[o] = !0);
      }),
        (t.prototype.get = function (e, t) {
          return this.data[e * this.size + t];
        }),
        (t.prototype.xor = function (e, t, n) {
          this.data[e * this.size + t] ^= n;
        }),
        (t.prototype.isReserved = function (e, t) {
          return this.reservedBit[e * this.size + t];
        }),
        (e.exports = t);
    },
    81685: (e, t) => {
      let n = "[0-9]+",
        r =
          "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
        o =
          "(?:(?![A-Z0-9 $%*+\\-./:]|" +
          (r = r.replace(/u/g, "\\u")) +
          ")(?:.|[\r\n]))+";
      (t.KANJI = RegExp(r, "g")),
        (t.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
        (t.BYTE = RegExp(o, "g")),
        (t.NUMERIC = RegExp(n, "g")),
        (t.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g"));
      let i = RegExp("^" + r + "$"),
        a = RegExp("^" + n + "$"),
        s = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      (t.testKanji = function (e) {
        return i.test(e);
      }),
        (t.testNumeric = function (e) {
          return a.test(e);
        }),
        (t.testAlphanumeric = function (e) {
          return s.test(e);
        });
    },
    87487: (e, t, n) => {
      let r = n(43585);
      function o(e) {
        (this.mode = r.BYTE),
          "string" == typeof e
            ? (this.data = new TextEncoder().encode(e))
            : (this.data = new Uint8Array(e));
      }
      (o.getBitsLength = function (e) {
        return 8 * e;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (e) {
          for (let t = 0, n = this.data.length; t < n; t++)
            e.put(this.data[t], 8);
        }),
        (e.exports = o);
    },
    88252: (e, t, n) => {
      let r = n(46087),
        o = r.getBCHDigit(1335);
      t.getEncodedBits = function (e, t) {
        let n = (e.bit << 3) | t,
          i = n << 10;
        for (; r.getBCHDigit(i) - o >= 0; ) i ^= 1335 << (r.getBCHDigit(i) - o);
        return ((n << 10) | i) ^ 21522;
      };
    },
    91640: (e, t, n) => {
      let r = n(57354);
      (t.mul = function (e, t) {
        let n = new Uint8Array(e.length + t.length - 1);
        for (let o = 0; o < e.length; o++)
          for (let i = 0; i < t.length; i++) n[o + i] ^= r.mul(e[o], t[i]);
        return n;
      }),
        (t.mod = function (e, t) {
          let n = new Uint8Array(e);
          for (; n.length - t.length >= 0; ) {
            let e = n[0];
            for (let o = 0; o < t.length; o++) n[o] ^= r.mul(t[o], e);
            let o = 0;
            for (; o < n.length && 0 === n[o]; ) o++;
            n = n.slice(o);
          }
          return n;
        }),
        (t.generateECPolynomial = function (e) {
          let n = new Uint8Array([1]);
          for (let o = 0; o < e; o++)
            n = t.mul(n, new Uint8Array([1, r.exp(o)]));
          return n;
        });
    },
    94676: (e) => {
      e.exports = function () {
        return (
          "function" == typeof Promise &&
          Promise.prototype &&
          Promise.prototype.then
        );
      };
    },
    98521: (e) => {
      "use strict";
      var t = {
        single_source_shortest_paths: function (e, n, r) {
          var o,
            i,
            a,
            s,
            c,
            l,
            u,
            p = {},
            d = {};
          d[n] = 0;
          var h = t.PriorityQueue.make();
          for (h.push(n, 0); !h.empty(); )
            for (a in ((i = (o = h.pop()).value),
            (s = o.cost),
            (c = e[i] || {})))
              c.hasOwnProperty(a) &&
                ((l = s + c[a]),
                (u = d[a]),
                (void 0 === d[a] || u > l) &&
                  ((d[a] = l), h.push(a, l), (p[a] = i)));
          if (void 0 !== r && void 0 === d[r])
            throw Error(
              ["Could not find a path from ", n, " to ", r, "."].join("")
            );
          return p;
        },
        extract_shortest_path_from_predecessor_list: function (e, t) {
          for (var n = [], r = t; r; ) n.push(r), e[r], (r = e[r]);
          return n.reverse(), n;
        },
        find_path: function (e, n, r) {
          var o = t.single_source_shortest_paths(e, n, r);
          return t.extract_shortest_path_from_predecessor_list(o, r);
        },
        PriorityQueue: {
          make: function (e) {
            var n,
              r = t.PriorityQueue,
              o = {};
            for (n in ((e = e || {}), r)) r.hasOwnProperty(n) && (o[n] = r[n]);
            return (o.queue = []), (o.sorter = e.sorter || r.default_sorter), o;
          },
          default_sorter: function (e, t) {
            return e.cost - t.cost;
          },
          push: function (e, t) {
            this.queue.push({ value: e, cost: t }),
              this.queue.sort(this.sorter);
          },
          pop: function () {
            return this.queue.shift();
          },
          empty: function () {
            return 0 === this.queue.length;
          },
        },
      };
      e.exports = t;
    },
  },
]);
