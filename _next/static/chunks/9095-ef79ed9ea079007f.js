(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9095],
  {
    270: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => A });
      var r = n(27493),
        i = n(54335),
        o = n(1405),
        a = n(59742),
        s = n(70030),
        c = n(77136);
      function l(e) {
        return "number" == typeof e ? e : "wei" === e ? 0 : Math.abs(c.pj[e]);
      }
      var u = n(35109),
        d = n(6083);
      async function h(e, t) {
        let { allowFailure: n = !0, chainId: r, contracts: i, ...o } = t,
          a = e.getClient({ chainId: r });
        return (0, s.T)(
          a,
          d.C,
          "multicall"
        )({ allowFailure: n, contracts: i, ...o });
      }
      var f = n(3488);
      async function p(e, t) {
        let { allowFailure: n = !0, blockNumber: r, blockTag: i, ...o } = t,
          a = t.contracts;
        try {
          let t = {};
          for (let [n, r] of a.entries()) {
            let i = r.chainId ?? e.state.chainId;
            t[i] || (t[i] = []), t[i]?.push({ contract: r, index: n });
          }
          let s = (
              await Promise.all(
                Object.entries(t).map(([t, a]) =>
                  h(e, {
                    ...o,
                    allowFailure: n,
                    blockNumber: r,
                    blockTag: i,
                    chainId: Number.parseInt(t),
                    contracts: a.map(({ contract: e }) => e),
                  })
                )
              )
            ).flat(),
            c = Object.values(t).flatMap((e) => e.map(({ index: e }) => e));
          return s.reduce((e, t, n) => (e && (e[c[n]] = t), e), []);
        } catch (o) {
          if (o instanceof u.bG) throw o;
          let t = () =>
            a.map((t) =>
              (function (e, t) {
                let { chainId: n, ...r } = t,
                  i = e.getClient({ chainId: n });
                return (0, s.T)(i, f.J, "readContract")(r);
              })(e, { ...t, blockNumber: r, blockTag: i })
            );
          if (n)
            return (await Promise.allSettled(t())).map((e) =>
              "fulfilled" === e.status
                ? { result: e.value, status: "success" }
                : { error: e.reason, result: void 0, status: "failure" }
            );
          return await Promise.all(t());
        }
      }
      async function m(e, t) {
        let {
          address: n,
          blockNumber: c,
          blockTag: u,
          chainId: d,
          token: h,
          unit: f = "ether",
        } = t;
        if (h)
          try {
            return await y(e, {
              balanceAddress: n,
              chainId: d,
              symbolType: "string",
              tokenAddress: h,
            });
          } catch (t) {
            if ("ContractFunctionExecutionError" === t.name) {
              let t = await y(e, {
                  balanceAddress: n,
                  chainId: d,
                  symbolType: "bytes32",
                  tokenAddress: h,
                }),
                o = (0, r.IQ)((0, i.B)(t.symbol, { dir: "right" }));
              return { ...t, symbol: o };
            }
            throw t;
          }
        let p = e.getClient({ chainId: d }),
          m = (0, s.T)(p, a.r, "getBalance"),
          b = await m(
            c ? { address: n, blockNumber: c } : { address: n, blockTag: u }
          ),
          g = e.chains.find((e) => e.id === d) ?? p.chain;
        return {
          decimals: g.nativeCurrency.decimals,
          formatted: (0, o.J)(b, l(f)),
          symbol: g.nativeCurrency.symbol,
          value: b,
        };
      }
      async function y(e, t) {
        let {
            balanceAddress: n,
            chainId: r,
            symbolType: i,
            tokenAddress: a,
            unit: s,
          } = t,
          c = {
            abi: [
              {
                type: "function",
                name: "balanceOf",
                stateMutability: "view",
                inputs: [{ type: "address" }],
                outputs: [{ type: "uint256" }],
              },
              {
                type: "function",
                name: "decimals",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: "uint8" }],
              },
              {
                type: "function",
                name: "symbol",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: i }],
              },
            ],
            address: a,
          },
          [u, d, h] = await p(e, {
            allowFailure: !1,
            contracts: [
              { ...c, functionName: "balanceOf", args: [n], chainId: r },
              { ...c, functionName: "decimals", chainId: r },
              { ...c, functionName: "symbol", chainId: r },
            ],
          }),
          f = (0, o.J)(u ?? "0", l(s ?? d));
        return { decimals: d, formatted: f, symbol: h, value: u };
      }
      var b = n(62108),
        g = n(43484),
        w = n(18224),
        v = n(53031);
      function A() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, query: i = {} } = n,
          o = (0, v.U)(n),
          a = (0, w.i)({ config: o }),
          s = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, scopeKey: r, ...i } = t[1];
                if (!n) throw Error("address is required");
                return (await m(e, { ...i, address: n })) ?? null;
              },
              queryKey: (function (e = {}) {
                return ["balance", (0, b.xO)(e)];
              })(t),
            };
          })(o, { ...n, chainId: null != (e = n.chainId) ? e : a }),
          c = !!(r && (null == (t = i.enabled) || t));
        return (0, g.IT)({ ...i, ...s, enabled: c });
      }
    },
    399: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => r });
      let r = n(68629).k;
    },
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
    1405: (e, t, n) => {
      "use strict";
      function r(e, t) {
        let n = e.toString(),
          r = n.startsWith("-");
        r && (n = n.slice(1));
        let [i, o] = [
          (n = n.padStart(t, "0")).slice(0, n.length - t),
          n.slice(n.length - t),
        ];
        return (
          (o = o.replace(/(0+)$/, "")),
          `${r ? "-" : ""}${i || "0"}${o ? `.${o}` : ""}`
        );
      }
      n.d(t, { J: () => r });
    },
    1607: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => d });
      var r = n(35883),
        i = n(81379),
        o = n(78519),
        a = n(42142),
        s = n(67622),
        c = n(77752),
        l = n(90113),
        u = n(9894);
      function d(e = {}) {
        let t,
          n,
          p,
          m,
          { shimDisconnect: y = !0, unstable_shimAsyncInject: b } = e;
        function g() {
          let t = e.target;
          if ("function" == typeof t) {
            let e = t();
            if (e) return e;
          }
          return "object" == typeof t
            ? t
            : "string" == typeof t
            ? {
                ...(h[t] ?? {
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
            return g().icon;
          },
          get id() {
            return g().id;
          },
          get name() {
            return g().name;
          },
          get supportsSimulation() {
            return !0;
          },
          type: d.type,
          async setup() {
            let n = await this.getProvider();
            n?.on &&
              e.target &&
              (p || ((p = this.onConnect.bind(this)), n.on("connect", p)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                n.on("accountsChanged", t)));
          },
          async connect({ chainId: o, isReconnecting: a } = {}) {
            let s = await this.getProvider();
            if (!s) throw new l.N();
            let c = [];
            if (a) c = await this.getAccounts().catch(() => []);
            else if (y)
              try {
                let e = await s.request({
                  method: "wallet_requestPermissions",
                  params: [{ eth_accounts: {} }],
                });
                (c = e[0]?.caveats?.[0]?.value?.map((e) => (0, r.b)(e)))
                  .length > 0 && (c = await this.getAccounts());
              } catch (e) {
                if (e.code === i.vx.code) throw new i.vx(e);
                if (e.code === i.qZ.code) throw e;
              }
            try {
              c?.length ||
                a ||
                (c = (await s.request({ method: "eth_requestAccounts" })).map(
                  (e) => (0, r.b)(e)
                )),
                p && (s.removeListener("connect", p), (p = void 0)),
                t ||
                  ((t = this.onAccountsChanged.bind(this)),
                  s.on("accountsChanged", t)),
                n ||
                  ((n = this.onChainChanged.bind(this)),
                  s.on("chainChanged", n)),
                m ||
                  ((m = this.onDisconnect.bind(this)), s.on("disconnect", m));
              let l = await this.getChainId();
              if (o && l !== o) {
                let e = await this.switchChain({ chainId: o }).catch((e) => {
                  if (e.code === i.vx.code) throw e;
                  return { id: l };
                });
                l = e?.id ?? l;
              }
              return (
                y && (await u.storage?.removeItem(`${this.id}.disconnected`)),
                e.target ||
                  (await u.storage?.setItem("injected.connected", !0)),
                { accounts: c, chainId: l }
              );
            } catch (e) {
              if (e.code === i.vx.code) throw new i.vx(e);
              if (e.code === i.qZ.code) throw new i.qZ(e);
              throw e;
            }
          },
          async disconnect() {
            let t = await this.getProvider();
            if (!t) throw new l.N();
            n && (t.removeListener("chainChanged", n), (n = void 0)),
              m && (t.removeListener("disconnect", m), (m = void 0)),
              p || ((p = this.onConnect.bind(this)), t.on("connect", p));
            try {
              await (0, o.w)(
                () =>
                  t.request({
                    method: "wallet_revokePermissions",
                    params: [{ eth_accounts: {} }],
                  }),
                { timeout: 100 }
              );
            } catch {}
            y && (await u.storage?.setItem(`${this.id}.disconnected`, !0)),
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
            let t = g();
            return (
              (e =
                "function" == typeof t.provider
                  ? t.provider(window)
                  : "string" == typeof t.provider
                  ? f(window, t.provider)
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
                (y && (await u.storage?.getItem(`${this.id}.disconnected`))) ||
                (!e.target && !(await u.storage?.getItem("injected.connected")))
              )
                return !1;
              if (!(await this.getProvider())) {
                if (void 0 !== b && !1 !== b) {
                  let e = async () => (
                      "undefined" != typeof window &&
                        window.removeEventListener("ethereum#initialized", e),
                      !!(await this.getProvider())
                    ),
                    t = "number" == typeof b ? b : 1e3;
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
            if (!r) throw new i.ch(new c.nk());
            let o = new Promise((e) => {
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
                  o,
                ]),
                r
              );
            } catch (a) {
              if (4902 === a.code || a?.data?.originalError?.code === 4902)
                try {
                  let a,
                    c,
                    { default: l, ...d } = r.blockExplorers ?? {};
                  e?.blockExplorerUrls
                    ? (a = e.blockExplorerUrls)
                    : l && (a = [l.url, ...Object.values(d).map((e) => e.url)]),
                    (c = e?.rpcUrls?.length
                      ? e.rpcUrls
                      : [r.rpcUrls.default?.http[0] ?? ""]);
                  let h = {
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
                          params: [h],
                        })
                        .then(async () => {
                          if ((await this.getChainId()) === t)
                            u.emitter.emit("change", { chainId: t });
                          else
                            throw new i.vx(
                              Error(
                                "User rejected switch after adding network."
                              )
                            );
                        }),
                      o,
                    ]),
                    r
                  );
                } catch (e) {
                  throw new i.vx(e);
                }
              if (a.code === i.vx.code) throw new i.vx(a);
              throw new i.ch(a);
            }
          },
          async onAccountsChanged(e) {
            if (0 === e.length) this.onDisconnect();
            else if (u.emitter.listenerCount("connect")) {
              let e = (await this.getChainId()).toString();
              this.onConnect({ chainId: e }),
                y && (await u.storage?.removeItem(`${this.id}.disconnected`));
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
            let i = Number(e.chainId);
            u.emitter.emit("connect", { accounts: r, chainId: i });
            let o = await this.getProvider();
            o &&
              (p && (o.removeListener("connect", p), (p = void 0)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                o.on("accountsChanged", t)),
              n ||
                ((n = this.onChainChanged.bind(this)), o.on("chainChanged", n)),
              m || ((m = this.onDisconnect.bind(this)), o.on("disconnect", m)));
          },
          async onDisconnect(e) {
            let t = await this.getProvider();
            (e && 1013 === e.code && t && (await this.getAccounts()).length) ||
              (u.emitter.emit("disconnect"),
              t &&
                (n && (t.removeListener("chainChanged", n), (n = void 0)),
                m && (t.removeListener("disconnect", m), (m = void 0)),
                p || ((p = this.onConnect.bind(this)), t.on("connect", p))));
          },
        }));
      }
      d.type = "injected";
      let h = {
        coinbaseWallet: {
          id: "coinbaseWallet",
          name: "Coinbase Wallet",
          provider: (e) =>
            e?.coinbaseWalletExtension
              ? e.coinbaseWalletExtension
              : f(e, "isCoinbaseWallet"),
        },
        metaMask: {
          id: "metaMask",
          name: "MetaMask",
          provider: (e) =>
            f(e, (e) => {
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
            e?.phantom?.ethereum ? e.phantom?.ethereum : f(e, "isPhantom"),
        },
      };
      function f(e, t) {
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
      let r, i, o, a, s, c, l, u, d, h, f, p, m, y, b, g;
      n.d(t, { S: () => V });
      let w = new Map([
        [8217, "apostrophe"],
        [8260, "fraction slash"],
        [12539, "middle dot"],
      ]);
      function v(e) {
        var t;
        let n;
        return (
          (t = (function (e) {
            let t = 0;
            function n() {
              return (e[t++] << 8) | e[t++];
            }
            let r = n(),
              i = 1,
              o = [0, 1];
            for (let e = 1; e < r; e++) o.push((i += n()));
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
            let d = 0x80000000 - 1,
              h = 0;
            for (let e = 0; e < 31; e++) h = (h << 1) | u();
            let f = [],
              p = 0,
              m = 0x80000000;
            for (;;) {
              let e = Math.floor(((h - p + 1) * i - 1) / m),
                t = 0,
                n = r;
              for (; n - t > 1; ) {
                let r = (t + n) >>> 1;
                e < o[r] ? (n = r) : (t = r);
              }
              if (0 == t) break;
              f.push(t);
              let a = p + Math.floor((m * o[t]) / i),
                s = p + Math.floor((m * o[t + 1]) / i) - 1;
              for (; ((a ^ s) & 0x40000000) == 0; )
                (h = ((h << 1) & d) | u()),
                  (a = (a << 1) & d),
                  (s = ((s << 1) & d) | 1);
              for (; a & ~s & 0x20000000; )
                (h = (0x40000000 & h) | ((h << 1) & (d >>> 1)) | u()),
                  (a = (a << 1) ^ 0x40000000),
                  (s = ((0x40000000 ^ s) << 1) | 0x40000001);
              (p = a), (m = 1 + s - a);
            }
            let y = r - 4;
            return f.map((t) => {
              switch (t - y) {
                case 3:
                  return y + 65792 + ((e[s++] << 16) | (e[s++] << 8) | e[s++]);
                case 2:
                  return y + 256 + ((e[s++] << 8) | e[s++]);
                case 1:
                  return y + e[s++];
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
              for (let i = 0, o = 0, a = 0, s = 0; i < n; i++)
                (s = (s << 6) | t[e.charCodeAt(i)]),
                  (a += 6) >= 8 && (r[o++] = s >> (a -= 8));
              return r;
            })(e)
          )),
          (n = 0),
          () => t[n++]
        );
      }
      function A(e, t = 0) {
        let n = [];
        for (;;) {
          let r = e(),
            i = e();
          if (!i) break;
          t += r;
          for (let e = 0; e < i; e++) n.push(t + e);
          t += i + 1;
        }
        return n;
      }
      function x(e) {
        return E(() => {
          let t = A(e);
          if (t.length) return t;
        });
      }
      function C(e) {
        let t = [];
        for (;;) {
          let n = e();
          if (0 == n) break;
          t.push(
            (function (e, t) {
              let n = 1 + t(),
                r = t(),
                i = E(t);
              return I(i.length, 1 + e, t).flatMap((e, t) => {
                let [o, ...a] = e;
                return Array(i[t])
                  .fill()
                  .map((e, t) => {
                    let i = t * r;
                    return [o + t * n, a.map((e) => e + i)];
                  });
              });
            })(n, e)
          );
        }
        for (;;) {
          var n, r;
          let i = e() - 1;
          if (i < 0) break;
          t.push(
            ((n = i), I(1 + (r = e)(), 1 + n, r).map((e) => [e[0], e.slice(1)]))
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
      function I(e, t, n) {
        let r = Array(e)
          .fill()
          .map(() => []);
        for (let i = 0; i < t; i++)
          (function (e, t) {
            let n = Array(e);
            for (let i = 0, o = 0; i < e; i++) {
              var r;
              n[i] = o += 1 & (r = t()) ? ~r >> 1 : r >> 1;
            }
            return n;
          })(e, n).forEach((e, t) => r[t].push(e));
        return r;
      }
      function B(e) {
        return `{${e.toString(16).toUpperCase().padStart(2, "0")}}`;
      }
      function k(e) {
        let t = e.length;
        if (t < 4096) return String.fromCodePoint(...e);
        let n = [];
        for (let r = 0; r < t; )
          n.push(String.fromCodePoint(...e.slice(r, (r += 4096))));
        return n.join("");
      }
      function P(e, t) {
        let n = e.length,
          r = n - t.length;
        for (let i = 0; 0 == r && i < n; i++) r = e[i] - t[i];
        return r;
      }
      let S = 55204;
      function O(e) {
        return (e >> 24) & 255;
      }
      function M(e) {
        return 0xffffff & e;
      }
      function T(e) {
        return e >= 44032 && e < S;
      }
      function R(e) {
        r ||
          (function () {
            let e = v(
              "AEUDVgHLCGMATwDUADIAdAAhADQAFAAtABQAIQAPACcADQASAAoAGAAJABIACQARAAUACwAFAAwABQAQAAMABwAEAAoABQAJAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACwANAA0AAwAKAAkABAAdAAYAZwDTAeYDMwCxCl8B8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgPi89uj00MsvBXxEPAGPCDwBnQKoEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJF8AJpIBpob5AERSMAKNoAXqaQLUBMCzEiC+AZ4EWRJJFbEu7QDQLARtEbgECxDwAb/RyAk1AV4nD2cEQQKTAzsAGpobWgAahAGPCrysdy0OAKwAfFIcBAQFUmoA/PtZADkBIadVj2UMUgx5Il4ANQC9vAITAdQZWxDzALN9AhsZVwIcGSkCBAgXOhG7AqMZ4M7+1M0UAPDNAWsC+mcJDe8AAQA99zkEXLICyQozAo6lAobcP5JvjQLFzwKD9gU/OD8FEQCtEQL6bW+nAKUEvzjDHsuRyUvOFHcacUz5AqIFRSE2kzsBEQCuaQL5DQTlcgO6twSpTiUgCwIFCAUXBHQEqQV6swAVxUlmTmsCwjqsP/wKJQmXb793UgZBEBsnpRD3DDMBtQE7De1L2ATxBjsEyR99GRkPzZWcCKUt3QztJuMuoYBaI/UqgwXtS/Q83QtNUWgPWQtlCeM6Y4FOAyEBDSKLCt0NOQhtEPMKyWsN5RFFBzkD1UmaAKUHAQsRHTUVtSYQYqwLCTl3Bvsa9guPJq8TKXr8BdMaIQZNASka/wDPLueFsFoxXBxPXwYDCyUjxxSoUCANJUC3eEgaGwcVJakCkUNwSodRNh6TIfY8PQ1mLhNRfAf1PAUZTwuBPJ5Gq0UOEdI+jT1IIklMLAQ1fywvJ4sJzw+FDLl8cgFZCSEJsQxxEzERFzfFCDkHGS2XJCcVCCFGlWCaBPefA/MT0QMLBT8JQQcTA7UcLRMuFSkFDYEk1wLzNtUuswKPVoABFwXLDyUf3xBQR+AO6QibAmUDgyXrAC0VIQAXIpsIQ2MAX4/YUwUuywjHamwjdANnFOdhEXMHkQ5XB6ccMxW/HOFwyF4Lhggoo68JWwF1CZkBXwTjCAk1W4ygIEFnU4tYGJsgYUE/XfwCMQxlFZ9EvYd4AosPaxIbATUBcwc5DQECdxHtEWsQlQjrhgQ1tTP4OiUETyGDIBEKJwNPbM4LJyb5DPhpAaMSYgMMND137merYLYkF/0HGTLFQWAh8QuST80MnBrBGEJULhnkB78D8xrzJ+pBVwX/A6MDEzpNM+4EvQtpCIsJPwBJDqMXB9cYagpxjNABMYsBt5kDV5GDAm+PBjcHCwBnC4cFeeUAHQKnCKMABQDPA1cAOQKtB50AGQCFQQE9AycvASHlAo8DkwgxywGVLwHzKQQbwwwVAPc3bkoCw7ECgGpmogXdWAKOAkk1AU0lBAVOR1EDr3HhANsASwYT30cBFatKyxrjQwHfbysAxwD7AAU1BwVBAc0B820AtwFfCzEJorO1AU3pKQCDABVrAdcCiQDdADUAf/EBUwBNBVn5BdMCT0kBETEYK1dhAbsDHwEzAQ0AeQbLjaXJBx8EbQfTAhAbFeEC7y4HtQEDIt8TzULFAr3eVaFgAmSBAmJCW02vWzcgAqH3AmiYAmYJAp+EOBsLAmY7AmYmBG4EfwN/EwN+kjkGOXcXOYI6IyMCbB0CMjY4CgJtxwJtru+KM2dFKwFnAN4A4QBKBQeYDI0A/gvCAA21AncvAnaiPwJ5S0MCeLodXNtFrkbXAnw/AnrIAn0JAnzwBVkFIEgASH1jJAKBbQKAAAKABQJ/rklYSlsVF0rMAtEBAtDMSycDiE8Dh+ZExZEyAvKhXQMDA65LzkwtJQPPTUxNrwKLPwKK2MEbBx1DZwW3Ao43Ao5cQJeBAo7ZAo5ceFG0UzUKUtRUhQKT+wKTDADpABxVHlWvVdAGLBsplYYy4XhmRTs5ApefAu+yWCGoAFklApaPApZ8nACpWaxaCYFNADsClrUClk5cRFzRApnLAplkXMpdBxkCnJs5wjqdApwWAp+bAp64igAdDzEqDwKd8QKekgC1PWE0Ye8CntMCoG4BqQKenx8Cnk6lY8hkJyUrAievAiZ+AqD7AqBMAqLdAqHEAqYvAqXOAqf/AH0Cp/JofGixAANJahxq0QKs4wKsrgKtZwKtAgJXHQJV3AKx4dcDH05slwKyvQ0CsugXbOBtY21IXwMlzQK2XDs/bpADKUUCuF4CuUcVArkqd3A2cOECvRkCu9pwlgMyEQK+iHICAzNxAr4acyJzTwLDywLDBHOCdEs1RXTgAzynAzyaAz2/AsV8AsZHAsYQiQLIaVECyEQCyU8CyS4CZJ0C3dJ4eWF4rnklS9ADGKNnAgJh9BnzlSR7C16SXrsRAs9rAs9sL0tT0vMTnwDGrQLPcwEp6gNOEn5LBQLcJwLbigLSTwNSXANTXwEBA1WMgIk/AMsW7WBFghyC04LOg40C2scC2d6EEIRJpzwDhqUALwNkDoZxWfkAVQLfZQLeuHN3AuIv7RQB8zAnAfSbAfLShwLr8wLpcHkC6vkC6uQA+UcBuQLuiQLrnJaqlwMC7j8DheCYeXDgcaEC8wMAaQOOFpmTAvcTA5FuA5KHAveYAvnZAvhmmhyaq7s3mx4DnYMC/voBGwA5nxyfswMFjQOmagOm2QDRxQMGaqGIogUJAwxJAtQAPwMA4UEXUwER8wNrB5dnBQCTLSu3r73bAYmZFH8RBDkB+ykFIQ6dCZ8Akv0TtRQrxQL3LScApQC3BbmOkRc/xqdtQS4UJo0uAUMBgPwBtSYAdQMOBG0ALAIWDKEAAAoCPQJqA90DfgSRASBFBSF8CgAFAEQAEwA2EgJ3AQAF1QNr7wrFAgD3Cp8nv7G35QGRIUFCAekUfxE0wIkABAAbAFoCRQKEiwAGOlM6lI1tALg6jzrQAI04wTrcAKUA6ADLATqBOjs5/Dn5O3aJOls7nok6bzkYAVYBMwFsBS81XTWeNa01ZjV1NbY1xTWCNZE10jXhNZ41rTXuNf01sjXBNgI2ETXGNdU2FjYnNd417TYuNj02LjUtITY6Nj02PDbJNwgEkDxXNjg23TcgNw82yiA3iTcwCgSwPGc2JDcZN2w6jTchQtRDB0LgQwscDw8JmyhtKFFVBgDpfwDpsAD+mxQ91wLpNSMArQC9BbeOkRdLxptzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgELgEaJZkC7aMAoQCjBcGOmxdNxrsBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUHqSvAj5Gqwr7YrMUACT9AN3rlr3JG9m8w9lIAXltp/v8kfWaIaaR9OwpAES/I3ZVamDXSgB/UsOgAG6D0tq+5CIqE15FiAhV3yA2VhCQ7tj+m6xXaF53FIfGi/IAZIskMGAi2MU7MDVJNCbMzERyHZi+osdPtnFVbvq653O8rwaCy4IAf9OOok65AqJUtUriUfYsGPPVbe6jm0s9lbKlPCUKjdkHsFsEhvX4kT39ZCtAAbwQdn/h4TpO5hTByWAmr5n+Wuwhdegv6bmvX4LyOes3z2+cuHv2JFYwVMNuq2gzn8YHTjlUQd39osyWei4NKl3LAdfxlO876hh5ENp/cOvpuI9bF55guEthLLPOXjD4dktTH04P5TvZrWTM0e4+BHJxj7MLApXIFOs0sWKhNkG8iwuM5wR83my6V3wW06abhDzTXYfOr/ZpFXgXzmv4d12FFyP00/dPGbIVGV5ao8UufGzUwp/IHx6v/wDWJr9iaoCulhWwlZ7A8q/NMoD12+mBdNRgJYnThRLtMx1Bgwttn8/4Qn2CDfOSup9GVXEvA21ILgp0owHYxNOkpwLWz0G7K+WREIDjIzUzSn8I99CuJSmSpPyH0Ke6/NERYiNx+3dncSebPnOUnnWD61AhJ1n/tSLZmU5wYO5GfgzyAYJm6VL91LxZ8hL1lfximQxIDMRhIecQZBmeE5R0XlrpvwplVrJwpa8BBCdp93GPP9lyBeZ2zkRr920CR3cYbKpKHfogvm0nV7XdDz6EbjzlxADCMjSLXuXpIpyuizy39yY+I+H9rmpoIF3YwEjlH9MgGgWcCNTjHEWMqAbprn2Ox7rOHupaVE3lNyg3nt5XaZID6Y+uml5Ja+aOPu+BI+DZbiJVfaspUadakWUX6TA4dETkIqdJJHYnU4Z4yKpt5y8rVIahoMUf8A8kWtAQNCTbjp71gx3/zVdqNz1Sutkw0gFIMVm2BF4Xdv/0olw+NaDIR9Bb3DPweZA2K/cw+/b+AwyWl9ZOP67A9nexmeTNjfdzPGf9J6E6BMPKa5lJh+qNsdUz3HBUevU71eQFCqOcxiIYhacAhh/8PX0J5DdSViZ6WazDDx7cukJNpMfEkYLJ5Ao4vLoVd3d25Pg4qaVa2p2D2L3WvYPJ5Yf/A/MSxptjlgXL/KJtP2U0cRv2I09ATAiWCJYuRwiapeKFsqmi18yMMulDp3HdcIldq+7jkwsJUOHLHCzzzBw5XFvL0CAmo1ub456z7zb7shk3KPGCLZzr47oT1k/j06XNnJvG3Udv6XrP+wsqTBlZ5MaNPt9FOs/4Bt/ja/vbVhTNpBFl9Gq7MqINvGlWKOAwQzwOZy+EzSdjAqKJVV2YcskTuM94aIK+kc/AZaXiZLPREUDpkXIV947IFfj+85TrqPqLfkGcxgboMQjosf+az+odLNXdyp1mDNGsqSdK/pJ2Ca04mt/4d6s1X+lncOEYaGBBeW4pApGcjf7/XJCFbj3N3mFb+BtlIcw8ZiDKoClFX9Rf0bxCqtLpicObKJzBVVHr/6u4siH2hK75RNv7w9GfTbhJOQBYiFUZAByY4rn37tZBHT//kqKsNi3ryL9AqXJRzqiMIJMhILjoi/i8LVEsbu+Ih9bsyW16sgQqjYLO0qda6KaCPKj3DQcu6CfV5lKtjS3ZCdqLAZkOey9MR+QutJBGiz/r15GVD6rCVwJR4UUKC4GNJkfDf00OMW8aQtLSAGLXV8MIi9mbbl/qQEpxCm2L5hutFX4ekeLH4QgBWUFKs/2VVMKy46WtFE6AbwgmYm/Z0yHk5veDIrcl2HpVqb/rSE0PC9EbDzJEWqeaPhh7vF369Umq2kSiB3s5rBI6c/7N9bkRu4h2n+/h5nSwy+7n+/I+6oXQVANo2Jb5zDwtiBPf1ySCzHdT6yJShMzqSRZfnykX49CaFaxhoVF4PBhEuECJ1PrFYSpmHuyYsl14DTAV9ZxRms1XiR/kBrjhZjidOt0UNe+GSml7XNgpVw8YsUTmZXLTK+6iYnyW/wYR1W4UXwOi14xpFROHb6HcZzksgF5DbL2AFXzKNwHU2adjdAY+KCyM/cwRTBkkq/a227NI0q6DR2MkMCRu620t79bGcYUmACtqN3mk/0uNwd3JSXHqE1kzf6Yyj0W2083JNDRnIXDlgBxJ6uf58NN1f6FQiRCWB4egF8QDx74AixV8oTyw7PluIjr3/rj/WzgwPSq4xPojaF7V0xqG2u5ti2L1h6yYHv73Isrukr0kURDIEjClBsBx7kdcXUxaYMS0syT3ymLzDzslNDWQOT1Tao1YNmJHARUenhCkmV9tqCPGI5GqZaRpkiPxyjoncWjyOHYGqvbvRX+Bn1pn7EhRNXa1lqJPmoeN5VqdqIDPhEVhFsyG0d4iQEIYX0wZUbY2XbZWYlpZ/l66IrDDY0q1C1YzBDpHC4h05YqHQLqS9anyl22JQ6lEvjvdBwMHfE7z0luCXD34/rFeDa2TmSeEAykSpYO5j1G/nsgpR3qn0qaQEmLjnnLfcz+veoYqPnRqmRGwCJ6FJ3Gm/Z1/aVX5PSb03MMnjAf41ww54sD5k8FrkfBP+K0b1MrYpapWjtpZfve2HVf4ickX3LKSOhu7qI1Vd4c1kNrn2ajy1t4y93JhV4fnWCKq7OmFpcr7FjdJCXPTql0Drr14Ho3Z87+GPQ4Z/DcTiGqtvZxlRYi8cNuhXABveZIwNl/BX1huhVLaFax5OqypUrQRyb9OE3SSkPlDdy5uo5XGg2EIGEjLY1MO5cr1ibfiFWV7zspcTgkBKkwo5jPyAin04LqizZXb2tDRgwKJjGx4cVk3ngAQixwcxjYAg2Q7vmUR/hpwInMdw7OhC2qyf41vTPkudQAORS0DdLtOGQxb4fH2VYGsvJCkeWPeUwtf1/tuIhzXEThoCZzzSJqqjUtbaPI3ntHm3T5uf849hGUA0zU8ni5W+EEn3/0Y6oUhQFw9z0aGjkljBbAlFXc0y82G2wkd7VdgWa5KTgJJNjNwZMfmdnUIUn1JU5LiWX5UZEZbVlKSN76mlmjUR2ku+fucTNlO4IAAahnLjBhlvQNR9pe9swGBgq0YR7P3VCyI/seYwQ4QBzy9X+HPePgoF8WfKaJ4MBOhLCGHae6Z8xkNXwni9QAKvTNtVA56x8YJflZ/VvONRSlsSLmiSyNMnTjTaE1ko81zkzGEnVwEhjCzlwIqpxmpDAqwsEmtpdr3xpc7i/ZX3f2TzT3M0FdxIEQvO1jgmmiN+D1YpMduAzEhBtj2OBkMN/rv6p7Th4pSH6f5aH3aTvwFTl7EOSgGASI7ttyMehzpm4AVyK+bFEaFg9gnZsSUPpsbAe/0RFhrH+EXZ12Z7thf4dzN1+Sn+G8QrDA1VKaN4IFxD1rQz9Xq9Coii9S9/hPbTGjyBwFH3H1UdQuz5KsgPDEHua4/kPg2Gp/IIItsaLWBqiT9XH45MiQxSosGJ56H/0F2cjcCFd72l1665RNHURdC3lspI77esfJsl+rXXabkAy7vxDXG/XGGcKpwiKDPFfvMEgjkAHil4Za1F36RnyxxvdIAzvgfH8knukYDck07tc++DP4TdWeI7HXuq5Yl6VVFrUQtf64/dkXewlKZSHQo6YvCSpREB0GDrz+Ys2GfO8nw2SwrYwaf88AifzlPvP17bf1mI3AuccJvAjZIpBmqvharKFAebEjVKfGAwpQjWoXlm9LROsq9bCk1UeQ3CJxJqprzssS/Q04JeS1ReCCubL3J7sx86spkP4eNpp95UF+8K748icIs8vdILFklk9skQqi1So6cx3X906pvy1vz+KipTJ8fiVJxsV5MmT0XwA"
            );
            for (let [t, n] of ((r = new Map(
              x(e).flatMap((e, t) => e.map((e) => [e, (t + 1) << 24]))
            )),
            (i = new Set(A(e))),
            (o = new Map()),
            (a = new Map()),
            C(e))) {
              if (!i.has(t) && 2 == n.length) {
                let [e, r] = n,
                  i = a.get(e);
                i || ((i = new Map()), a.set(e, i)), i.set(r, t);
              }
              o.set(t, n.reverse());
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
            else if (T(r)) {
              let e = r - 44032,
                t = (e / 588) | 0,
                n = ((e % 588) / 28) | 0,
                i = e % 28;
              c(4352 + t), c(4449 + n), i > 0 && c(4519 + i);
            } else {
              let e = o.get(r);
              e ? n.push(...e) : c(r);
            }
            if (!n.length) break;
            r = n.pop();
          }
        if (s && t.length > 1) {
          let e = O(t[0]);
          for (let n = 1; n < t.length; n++) {
            let r = O(t[n]);
            if (0 == r || e <= r) {
              e = r;
              continue;
            }
            let i = n - 1;
            for (;;) {
              let n = t[i + 1];
              if (((t[i + 1] = t[i]), (t[i] = n), !i || (e = O(t[--i])) <= r))
                break;
            }
            e = O(t[n]);
          }
        }
        return t;
      }
      function N(e) {
        return R(e).map(M);
      }
      function F(e) {
        return (function (e) {
          let t = [],
            n = [],
            r = -1,
            i = 0;
          for (let o of e) {
            let e = O(o),
              s = M(o);
            if (-1 == r) 0 == e ? (r = s) : t.push(s);
            else if (i > 0 && i >= e)
              0 == e ? (t.push(r, ...n), (n.length = 0), (r = s)) : n.push(s),
                (i = e);
            else {
              let o = (function (e, t) {
                if (e >= 4352 && e < 4371 && t >= 4449 && t < 4470)
                  return 44032 + (e - 4352) * 588 + (t - 4449) * 28;
                {
                  if (T(e) && t > 4519 && t < 4547 && (e - 44032) % 28 == 0)
                    return e + (t - 4519);
                  let n = a.get(e);
                  return n && (n = n.get(t)) ? n : -1;
                }
              })(r, s);
              o >= 0
                ? (r = o)
                : 0 == i && 0 == e
                ? (t.push(r), (r = s))
                : (n.push(s), (i = e));
            }
          }
          return r >= 0 && t.push(r, ...n), t;
        })(R(e));
      }
      let U = (e) => Array.from(e);
      function j(e, t) {
        return e.P.has(t) || e.Q.has(t);
      }
      class D extends Array {
        get is_emoji() {
          return !0;
        }
      }
      function L() {
        let e, t;
        if (s) return;
        let n = v(
            "AEkU4AngDVgB0QKRAQYBOwDqATEAnwDbAIUApABsAOAAbwCRAEYAiQBPAHYAPgA+ACsANwAlAGMAHwAvACsAJQAWAC8AGwAiACIALwAUACsAEQAiAAsAGwARABcAGAA6ACkALAAsADUAFgAsABEAHQAhAA8AGwAdABUAFgAZAA0ADQAXABAAGQAUABIEqgYJAR4UFjfDBdMAsQCuPwFnAKUBA10jAK5/Ly8vLwE/pwUJ6/0HPwbkMQVXBVgAPSs5APa2EQbIwQuUCkEDyJ4zAsUKLwKOoQKG2D+Ob4kCxcsCg/IBH98JAPKtAUECLY0KP48A4wDiChUAF9S5yAwLPZ0EG3cA/QI5GL0P6wkGKekFBIFnDRsHLQCrAGmR76WcfwBbBpMjBukAGwA7DJMAWxVbqfu75wzbIM8IuykDsRQ7APcta6MAoX0YABcEJdcWAR0AuRnNBPoJIEw3CZcJiB4bVllM44NCABMADAAVAA5rVAAhAA4AR+4V2D3zOVjKleYuChAdX01YPewAEwAMABUADmsgXECXAMPrABsAOQzFABsVW6n7Adq4HB0FWwXiAtCfAsSwCkwcpGUUcxptTPUAuw1nAuEACy00iRfJkQKBewETGwC9DWcC4QALLQFIUCWRTAoDLfsFMgnXaRetAddDAEkrEncCMRYhAusnuTdrADnhAfUlAMcOy7UBG2OBALEFAAUAitNJBRvDHwcXAKgn0QGhKy0DmwBnAQoZPu03dAQYFwCqAccCIQDTKxJzOvNQsAWQOncnNUgF+icFWQVYr7gFaTtdQhI6WEGXe5NmX6H4CxMDxQcl8XcjBKNLAlNTAnUbqycBj6OlNVsDRRcEg2EJANEGqz8vIwcpAjldAGsBYR9xAIMdGQCVAUm3ACdpFwGvxQM3LSFDUwFvWQZlAmUA8UkXAykBBQBJQQCrAF0AcwArtQYH8+8ZjX8ACSEAKQCzG0cB0QHbBwsxl3iB6AAKABEANAA9ADgzd3nTwBBfEFwBTQlMbDoVCwKsD6YL5REVDNEqy9PYADSpB+sDUwfrA1MDUwfrB+sDUwfrA1MDUwNTA1McCvAa08AQXw9IBG0FjgWLBNYIgyZJEYEHKAjSVA10HhxHA0UA/CMlSRw7kzMLJUJMDE0DB/w2QmynfTgDRzGrVPWQogPLMk85bAEecRKgACoPcxw1tU5+ekdxoApLT661f0liTmcCvjqoP/gKIQmTb7t3TgY9EBcnoRDzDC8BsQE3DelL1ATtBjcExR95GRUPyZWYCKEt2QzpJt8unYBWI/EqfwXpS/A82QtJUWQPVQthCd86X4FKAx0BCSKHCtkNNQhpEO8KxWcN4RFBBzUD0UmWAKEG/QsNHTEVsSYMYqgLBTlzBvca8guLJqsTJXr4Bc8aHQZJASUa+wDLLuOFrFotXBhPWwX/CyEjwxSkUBwNIUCzeEQaFwcRJaUCjUNsSoNRMh6PIfI8OQ1iLg9ReAfxPAEZSwt9PJpGp0UKEc4+iT1EIkVMKAQxeywrJ4cJyw+BDLV8bgFVCR0JrQxtEy0REzfBCDUHFSmXICcRCB1GkWCWBPObA+8TzQMHBTsJPQcPA7EcKRMqFSUFCYEg0wLvNtEurwKLVnwBEwXHDyEf2xBMR9wO5QiXAmEDfyXnACkVHQATIpcIP18AW4/UUwEuxwjDamgjcANjFONdEW8HjQ5TB6McLxW7HN1wxF4HhgQon6sJVwFxCZUBWwTfCAU1V4ycID1nT4tUGJcgXUE7XfgCLQxhFZtEuYd0AocPZxIXATEBbwc1DP0CcxHpEWcQkQjnhgA1sTP0OiEESyF/IA0KIwNLbMoLIyb1DPRlAZ8SXgMINDl36menYLIgF/kHFTLBQVwh7QuOT8kMmBq9GD5UKhngB7sD7xrvJ+ZBUwX7A58POkkz6gS5C2UIhwk7AEUOnxMH0xhmCm2MzAEthwGzlQNTjX8Ca4sGMwcHAGMHgwV14QAZAqMInwABAMsDUwA1AqkHmQAVAIE9ATkDIysBHeECiwOPCC3HAZErAe8lBBe/DBEA8zNuRgLDrQKAZmaeBdlUAooCRTEBSSEEAUpDTQOrbd0A1wBHBg/bQwERp0bHFt8/AdtrJwDDAPcAATEHAT0ByQHvaQCzAVsLLQmer7EBSeUlAH8AEWcB0wKFANkAMQB77QFPAEkFVfUFzwJLRQENLRQnU10BtwMbAS8BCQB1BseJocUDGwRpB88CEBcV3QLvKgexAyLbE8lCwQK92lEAMhIKNAq1CrQfX/NcLwItbj1MAAofpD7DP0oFTTtPO1Q7TztUO087VDtPO1Q7TztUA5O73rveCmhfQWHnDKIN0ETEOkUT12BNYC4TxC2zFL0VyiVSGTkauCcBJeBVBQ8ALc9mLAgoNHEXuAA7KWSDPWOCHiwKRxzjU41U9C0XAK1LnjOrDagbEUQ8BUN16WImFgoKHgJkfQJiPldJq1c3HAKh8wJolAJmBQKfgDgXBwJmNwJmIgRqBHsDfw8Dfo45AjlzEzl+Oh8fAmwZAjIyOAYCbcMCbarrhi9jQScBYwDaAN0ARgEHlAyJAPoHvgAJsQJ3KwJ2njsCeUc/Ani2GVjXRapG0wJ8OwJ6xAJ9BQJ87AVVBRxH/Eh5XyAAJxFJVEpXERNKyALQ/QLQyEsjA4hLA4fiRMGRLgLynVz/AwOqS8pMKSHLTUhNqwKLOwKK1L0XAxk/YwGzAo4zAo5YPJN9Ao7VAo5YdFGwUzEGUtBUgQKT9wKTCADlABhVGlWrVcwCLBcpkYIy3XhiRTc1ApebAu+uWB2kAFUhApaLApZ4mAClWahaBX1JADcClrEClkpcQFzNApnHAplgXMZdAxUCnJc5vjqZApwSAp+XAp60hgAZCy0mCwKd7QKejgCxOWEwYesCns8CoGoBpQKemxsCnkqhY8RkIyEnAierAiZ6AqD3AqBIAqLZAqHAAqYrAqXKAqf7AHkCp+5oeGit/0VqGGrNAqzfAqyqAq1jAqz+AlcZAlXYArHd0wMfSmyTArK5CQKy5BNs3G1fbURbAyXJArZYNztujAMpQQK4WgK5QxECuSZzcDJw3QK9FQK71nCSAzINAr6Ecf4DM20CvhZzHnNLAsPHAsMAc350RzFBdNwDPKMDPJYDPbsCxXgCxkMCxgyFAshlTQLIQALJSwLJKgJkmQLdznh1XXiqeSFLzAMYn2b+AmHwGe+VIHsHXo5etw0Cz2cCz2grR0/O7w+bAMKpAs9vASXmA04OfkcBAtwjAtuGAtJLA1JYA1NbAP0DVYiAhTvHEulcQYIYgs+CyoOJAtrDAtnahAyERac4A4ahACsDZAqGbVX1AFEC32EC3rRvcwLiK+0QAfMsIwH0lwHyzoMC6+8C6Wx1Aur1AurgAPVDAbUC7oUC65iWppb/Au47A4XcmHVw3HGdAvL/AGUDjhKZjwL3DwORagOSgwL3lAL51QL4YpoYmqe3M5saA51/Av72ARcANZ8Yn68DBYkDpmYDptUAzcEDBmahhKIBBQMMRQELARsHaQZdtWMBALcEZ7sNhx6vCQATcTUAHwMvEkkDhXsBXyMdAIzrAB0A5p8Dm40IswYbn8EApwURu+kdPT4WeAVoNz5AK0IhQrRfcRFfvACWxQUyAJBMGZu5OyZgMhG6zw4vGMYYicn2BVcFWAVXBVgFYwVYBVcFWAVXBVgFVwVYBVcFWEYVCNeFZwICAgpkXukrBMkDsQYvu7sAuwSnuwDnQCkWsgVGPmk+cEI/QrZfdTdf6ABYETOrAIz+zGvL/KbnRno9JiMEKxYnNjV+bd9qwfEZwixpAWvXbjAXBV8FasnBybgIz0lbAAAACnxefYu+ADM/gQADFtEG5a0jBQCMwwsDAQ0A5WUdPSQfSkKxQrxBOCNfJ2A2JzgjCcE9CkQ/Qz54PoE+cD5xAolCvElCO1/LTk9qTQosa1QvagtuH1/gMzobCWebCmIjKzwdJkKrQrwrzAHL/F/JDh8uCQgJIn6d32o6LUoXyavJrAllwcvMCmBBXw/lEKMRAJONHUVCJRupbTnOOAozP0M+cEI/HAcKHUxHbFssLVrhvBIKfe0dK0I/HF0ISgkOM1RDQjcEO0OcLAqBGy1CPxv1CFMiIxgwMQAFj2HwXgpxZMlgC2AtI25DYBk5AhseYLMGAmsQZU5gTREBZOdgFWCVYH1gs2BLYJFoFhcGtQ7cVam8WgtDFqsBuyvNwQIfFQAcAx4BeQJsLzCVUoABigq4RxoA5CN0jgrKDaZN6gGbAoecTwVAXwD39wkANBZXDAulDCQfuq9HAE8MNAAVE58rggh6AtILS2URGwDYTgZ1BAoeWgAxALa4AZonCxZvqyQ4nxkBWwGGCfwD2e0PBqoGSga5AB3LValaCbthE4kLLT8OuwG7ASICR1ooKCggHh8hLBImBiEMjQBUAm5XkEmVAW4fD3FHAdN1D85RIBmpsE3qBxEFTF8A9/cKAHoGJGwKKwulODAtx69WDQsAX7wLAGNAlQh6AOpN7yIbvwAxALa4AZonLTsOzgKQGHtQu1jIdHKO16WbDvWZFT0b7AEpEFwSBg8bAccJOhCTBRArDDYLABEAs84BAgCkAOEAmIIABWtXLwAUAFsbxi5sdioNwRACOyQz0+EcHgsbfQJ7Ls6hHATBCqrxbAA3OS0Opge7CQAQOi7OERkAfavaHA+7GkcczaF3HgE9Kl8cAuugCAHCAULz5B9lAb4Jtwz6CDwKPgAFwAs9AksNuwi8DTwKvC7OoSoJPA67BZgBG2sKD4sa4QHDARELuxY7AKALOxC7BBige9wAO2sMPAACpgm8BRvQ9QUBvgH6bsoGewAHuwG7D00RErwBAQDqAQAAdBVbBhbLFPxvF7sYOwAuuwLrDlaouwAeuwJVICp/AAG7AALjAAg7FTwVuwAbuwG9KOClWw6/xAD0AGj7L7ZtvgNIo7vIqDsDAbuVJ0sAAlsACrsEAOfdGbsIGnsIoQUK/3AA37unuxjbGruji3lyBvupm4MAErsGGwsBvAAAhgBtuwYAC7unOwEaO7oIoZzKAbsL7QfAqTsA4XsBvwAA5QAVuwAG+wAJuwBpiwAauwAOuwIYu45pFfsAAVsADmsALkseAAa7ABe7CCEADUoBwgC3ryYBwAAAtAAOmwG+J+QAsloAHBsBv/7hCqEABcYLFRXbAAebAEK7AQIAabsAC3sAHbsACLsJoQAFygBunxnVAJEIIQAFygABOwAH2wAdmwghAAaaAAl7ABsrAG0bAOa7gAAIWwAUuwkhAAbKAOOLAAk7C6EOxPtfAAc7AG6cQEgARwADOwAJrQM3AAcbABl7Abv/Aab7AAobAAo7AAn7p+sGuwAJGwADCwAQOwAAFDsAEWsAD4sADesADbsAGQsGFhsAFTsAbpsWswG7ALoAEzsDAGkrCgDhSwACOwAEUgAXewUbAAbQABi7AAv7AF+7AGv7AOSLAbsAF3YBvAABcguhAAVKHgF7KFIAOUUA/gcNDHIAKCpwAaQFCF4BvF4jDAkHb0tsXyqJHzwUYi02A6EKtAHYABYC0QNuAXZyR1IUIQNPAhU+ASwGA3NGvHtSekAAKQAxAfsAUwrbAHuQLAErAHblDREyRgFKAFcFAAFQAQeKzAB4OwQgpQBaANYVAJVoNx+LAM1rsQDP1BYIwnVzGxhWHQnRAYiQqyJTU01IEjzCifkAfxw3QCkr4BGXTwByASksMClCGQ8DMFUE98XuAEtl3ABqAnECPxF6Osd4LjXVBgUAEBsdCggMKgQfHSlOU04IuboAChLNACYAARoAhgCJAI41AO4AtADgAJ08ALsAqwCmAKEA8gCfANMAnADrAQwBBwDAAHkAWgDLAM0BBwDXAOsAiACiATUA4wDYANUDAQcqM9TU1NS2wNzN0M5DMhcBTQFXL0cBVQFkAWMBVgFHS0NFaA0BThUHCAMyNgwHACINJCYpLDg6Oj09PT4/DkAeUVFRUVNTUlMpVFVXVlYcXWFhYGJhI2ZocG9ycnJycnJ0dHR0dHR0dHR0dHZ2d3Z1WwBA7ABFAJYAdAAuAGLyAIoAUwBTADMCc+kAh//y8gBgAI/sAJsASwBeAGD5+aoAgQCBAGUAUgCtAB4AsgB/AjwCPwD4AOMA+gD6AOQA+wDlAOUA5ADiACkCdwFNATwBOgFQAToBOgE6ATUBNAE0ATQBGAFUDwArCAAATRcKFgMVFg4AigCSAKIASwBkGAItAHAAaQCRAxIDJCoDHkE+RykAiwJLAMMCUwKgALoCkgKSApICkgKSApIChwKSApICkgKSApICkgKRApEClAKcApMCkgKSApACkAKQApACjgKRAnEB0AKTApsCkgKSApEWeQsA+gUDpwJdAjYXAVAQNQLeEQorEwFKNxNNkQF3pDwBZVkA/wM9RwEAAJMpHhiPagApYABpAC4AiQOUzIvwroRaBborDsIRAZ3VdCoLBCMxbAEzWmwBsgDdfoB/foB+gYKCfoOGhH6FiIaAh4KIgol+in6LfoyKjX6Ofo+CkH6RfpJ+k36Ug5WIloKXftoC2WzhAtdsAIJsJGygAINsbARCBD8EQQREBEIESARFBEAERgRIBEcEQwRFBEgAlmZsAKMDh2wAtGYBBWwAyVFsbADPbAIMbAD2WmwA9gEZAPYA9AD0APUA9AN8XmzUhCNlvwD2APQA9AD1APQcbGwAiVpsAPYAiQEZAPYAiQLsAPYAiQN8XmzUhCNlvxxsAPdabAEZAPYA9gD0APQA9QD0APcA9AD0APUA9AN8XmzUhCNlvxxsbACJWmwBGQD2AIkA9gCJAuwA9gCJA3xebNSEI2W/HGwCQwE2bAJKATlsAkvBbGwCV2xsA54C7AOeA54DnwOfA58DnwN8XmzUhCNlvxxsbACJWmwBGQOeAIkDngCJAuwDngCJA3xebNSEI2W/HGwEN2wAiQQ4AIkGjTFtIC9s1m4DJmwA/QDGWgJsbABVWv4UMgJsbACJAmwAVAEAuV5sAmxebGwAiV5sAmxebD3YAEls1gJsbEZFNiJ9FGVAe8xvEZKvxVfKZszAVTBzYBH2d1iyUXEHH7twNw7eZF5JJRHI5EgaRr5D20/3dfONrFLSq5qSrrgd2CEUq722WBQ/LzpA+bx1oREI5xy4BDSZNun0ZWORUJqInZSyMaioyvfSI0l5uFDzbWaQ28/zdB0hwR4OQZ0/jn9ALSLNikjFYGfqR389qtFlhD3a6KdIh97rhZYpywuLc7o8ql5/X8KCbPU3L/QlmCowhRXhsGDvg6wUNprA9bM/49uxlAj7ZVy3ouEY/BgFXBNyK0TLrSjZWeJm/T4nz6QGLT3cJNtWRZVZTvIdtaxMMJRHgig9+S11LjBh7Inr06ykoch1U097Rw0hvgmOrydQyaWcEQDg0RavuMuT0zYabUZl1e33HNSK1oNUCS03eh+9C2EvF3fq9h+XBaAMFuoWeZf+mfZgL4HzyiKDIUtfNU4oFu0aE9qt3VA3U4D3fOSrAcYVnjG3cSkp1vhXZnp3JQm4JknKdBitO2NVnGCYQwU3YMWHWB87NEd+4AHuOKI8BSIH92reW0pfs+kWCTJxDCbRjFv8Cfc4/DSBYJScJYTeAEgg9wTEvcwd/QuHRHqGzAQ4fXf5FUI1lPrO+fvEcPl4JInM1z9AtBT2bL4QYEREe7KiSnnxTwtmAFjn8lqT3mND8qTktX2F16Ae9cakqJ6/pEQsHURqyqWlRMCzKXRKfCHT7sYHWx9/T/ugYTFY6iVN3Btm58ATJR5alYZybKMWojwOw3HbFn23NFyeLl7+Er82RchyYuBoGQ3j7SAWNxiYvp5U+Fq/DEzB9cG5DlJWsqkosRze92OVlCtQEYo1S1lF72Z8xWc4ld/+fFcfTEDTFb9d8tJGQ75dpJEvcWyGmGBiTbiWDdGOcw93Dmxq5ISUrmasygONfHLvhgo83HQZenbdBtSzBkvYrCEQ/xEDMhMZsN6gqplx5jGG9mSQLhM81UEdEeJ59sdNJDAFy/gPyJoKlwPZgB/MkC/kICLiCB8va+nCdO2ry4aDfkmPFpF/H/SGQ3LJ6aAv9dtJ8DniHtLOckZix0BVb0iR5V3LAp521LBSIi6AtV7r2ZB/hQEvAw54EFNOQcFnl1xGUIc67tqK1INNwD2n/RbwgzO9h45LM6VMuN8V1ZNIQ6t+Xy3lTqyVCD5kqLy/t3/b8MLbgDg8JIWDkSZ+LrGhhr+gYpH+pr1TnCUnZPjpUdw6bSL6MWVXoDDciQDWECwU2e6VEpfrcOBbrSOijqGkEIoJPbpmeJLkcwbvA0yWIixQVjo0HnYh7fji+Dfdq1mtV1lG2Zz9R7eFMHS+FK7nybutu2fwzDpFldO2pZBshsHJWaltn3PWOoGJpCT2jE8EHOuC6FkejNWcfsWCqNqMLP9xTwcWArj2EiiI7D+EaDi7/2cqHL1gPiF6C/J7aUo7RQqogPZ11WqbyP97nsoMxPOC78wZMF7B1Y0g7JNXJV/nN1m4xx8hbqWz07KSaqr5hE4icB326DMR/vUKX9LoNjle/ZWtbUhrTAcsdgrLlG5Ne8aiR0bS/2ZhpNOVVxavWIZsEM/rd68EB4vjbbD13NkMK1qvMk74vGbSkL7ULO0sZ9R6APSCo6KH+Xn98wEdw1bCPAnDTaBsD6sidAGN58uiH4a3ovG1KyZAu2XtyGgF/vgWKGxw9R1lfAVcfuYE71DHuxtTzfGZnHaDpDGWmfEq0N4GawE7yIkaoz8jcmVmzJe1ydM8q0p08YIxFcY1YcqQc1djWBEoNETDFcgk5waRftEJasPREkrV++N/TOKkERF1fCLrXS8DFGYGRBeECMQRNEs0ES3FzUtXCcNxpYEM3Uei6XodZruXUIRnn+UXf2b/r7n1vQutoi6WoIbW7svDNWBbUWcDUc7F9SJK3bvSy9KIqhgyJHoW2Kpvv0J4ob14HFXGWWVsYXJzjwxS+SADShTgCRjhoDgjAYRGxwJ1Vonw+cpnCKhz8NQPrb0SFxHIRbmG95Q2hlC4mDxvPBRbkFa60cvWakd7f0kVBxxktzZ9agPJEWyA63RSHYVqt8cPrs2uFJ3rS3k9ETGKn5+A6F9IOrdZHfT1biEyUJKEvwzuscwshGCBJvd16TrefW03xVnJf4xvs72PdxrMidjJO8EiWyN/VWyB3fv9kc34YIuZTFtXGo9DuG3H1Uka5FgBMwDPEvRcSabi3WakNQkXFecJlFk6buLVk5YHpuKWTw6oF632FPPSVIVl5hgUAeHhj0t/sw/PEEvThLQDDFE34eCg/rLOyXT3r+L98oRKrlTO0MdALYQ3rRQqC7d822dJPGxF1K4J2TtfPSMFaCAg0n0NGk9yiaKKOJD1v2aBX9HUOIawjjfvwCmjHZJTR62R9c9x33JnBjWrN4QYEOmehy0oZMP9XM9Zyi6TYoe07PaLceRXcCWZiY/imRUWW6+mci7+wMxSdwMdbXckXtvhJH8sc4iQcTwm7yp+3f7CaesTTQB2qkgeXh+wFiSMXfMlH7Yil0OoZ2QTtRLTip2O0cLZ4SstqWHZ6H+8A2kZXhpm0kPbL9dUanTOvziqIUh6Ambwa3WrCb2eWbuCN3L1hgWUmjRC3JoL3dBhR3imSQI8xuCMfsszlji7cSShNSYdqCXPxEVwbqO9i5B6hf93YI7aeyI8jxgcVXK0I/klbvhSXjkjOIwZgPdVwmsFW7HGPLUAvDRuKm+itybRg7c8+Yqqjg824Qf+/NxsBSUNAK9KCoJpauFqK0XQULrWYj4FnxeKDuvr54iokpi+D57e6Y1zxRJJdsHnDR3JyraCUufHBRTKODWBVzthjm4k3/Hv+Q990XDVR+KW+TcJX045LW86EKhz/97aqj89A8ZvTk1//tczosU90loIPVaHuWegJU3wP//7XHcO7c0yQM2jM/IhQKrf8hiObHWiWDZManF8Uf/HzbmDfC2wT//aiZ4hGTv/xzgKwdb1sD6cGEkceow0s3b89/zg+3plyRm0HlZi886j5wUwFhdHiDTaBidZRo5cx/tMeLyguOATbzq17ydhzbrpxunuHx6lbFGiO97gsd4dk//7iCIo+Ew+hG2so5kvv+ITG4c1fzHPtu1Xn5QfUnqY3/uByVmB7gmnE/E+5zdm+6nDmoews5fr+NzThdSHzK4bBQOL9c4O8OI0xLSqjJ4lbniLJg1aFpQRLwaSMZmpkC9e/j6FOVrTQ6a/a4alGgfrl2ZL1sbHUQ3DOI7ntq9diHFfm3t1mul3rdJEJCHnlW/hlQntipMrpeMs7fUr6wK370D7VbXH0DUHzdYfRg/6Z11Ult1sffJS+heHbco15Sxy3+rDnPesqH1lajk0yu02hPUvEUqvcUXWXL7Ad0wNGMx5gOle4XJxq/r/YY0xdco2wRSEGwcT7YADlBrHc9ZbvzOL0QwyWCWWChB9Obg800v7tyBWaNvdwz+fL7Ph9i2irEeJkRgOzeEDw+JiD/V93vH9FgMEoFIJMoIuogmicZohf94SBuPn6hXaV9jP4VVVA/bu+Wg8S88GLtmEPSNRLdtlXx2XL/nuM8nKkhnlnjaropiKKLIH94pLIASci0pDBfj9Hi5BfaTSXQg5+PMjQX91Ktk4MOqK1K99l4BRPv5+vNovGZ3IxQv8ICvjV4/diThpoaM8uvd3D9d/DE477w3yAbW3IDm2i73pZ9aEj38JqS6h/s8/xgmUIVcuq2JTgefAyuoafzQxAuRASeg3NtG3ach/JEkyuX+JDt2PnDZTShUhyHHG3ttBg/6lhAchGjLJBtopj4e01MlCp2yqQRTr4sBBXru+lKaoanwYX8y2aWCJiR3KnhCOkYVFSvsO0oDRujUFOEptiNDTYrJoUbvOyvl4AhC9h3wORiTXK1MrpMfnvdnndnR/HRVSusMBgIxwrLdn3vq1VcncPiD0SquTx/kNmxeFyCT4uXVUd9AL+rSGmuq7OOCzDKeVPjiNWVaoP5KOFqYq5Xcuf/xW9S+u9eIq9GAtZWtQlgkRecjRtvG1NR4WXXpn+pwsTBTIy079Ikg8rSef1aVapIFcXCd6C2wHVjLXR+N0tw4Taw6x6H90BFRgNrtlq2up6hHKuV3inM5RJaQWZHd84e6RsKkk9po3dk9by54tpPw7cBkFas/G+GbHwuG+AwP55BZyXILTHCIVrPpXHEaUPYfL6nphJP1Rc10xG4UaCeY4IHCwuur8xmSQDgY4aVwhzWhjbtSHG8JO6P2i2nC9/0Bfx0zk6dYQq3aw7k5vIObD7SEKrxhz0fQ0+YTOfHW23CBNeZci1qNsUDhoeqmfyP6PvjoEjHk8QbrFyQVZPHVWijnb8YCM65iYNoEbvnchStZ/9cKg5Vd45j8KnB6UjzXl/bkyZx7VoD47ocUUi117WwgySSb4rXgLJ52Mv5XJbp3I+uBP81BUvOjy4Cacgi+GWWlC/8dwgqwiojjUBDnEOxyRyowwLQfytFra1OZS4XvRYr4uoamAfG3I/p2bA7G90yqKThH8Ke00Tqd+3l3dmJpaCZelBMYjGqNLVa3SM4+LQeL56gY6Bymy2LQPVOxjWfj5tq4o74swcxhyGJPynkS5xAjOXZP1/FAYcBT3u6qLoIkEfErwo4gozmyI1YCvM0oyI3ghjGPQSsof2sKUhq91WsKy9cYWN+4A2v4pG/Mxpdc6w6kI/HX7Xb0TuihmsiOy2wQIsrZbUmr3OBSUo6oDJNgQp+YqYkgTgYcWZDgawJw3DFfdzT//PhVUidgB2qa8uw/j9ToHBAS33iT8YLhhAfyXG0bQUFp7QmH7oQ3i6Flf4OTZLvJdh8pfuflmWu2ohm5pTiSg1pl3vq9uluTJwqXfh1hqy8e2iHoD+Y35gCIViTo6VOtK5dD8HYClucJucXASzwe2kPj4S4eYQtmkYHagXhAzp/F541xE8YFYqSPszDuz3soWzHy0p3E2jwZNQaIcGU9FNQwQxeDw0ZlK9dxXrj9IUHGUPTOyib8CqXmbZ7Ex54bn1rLx3qqAavu/gh6XjV0GmN1p+yyMK9HN5uYEvxgbAk43tsheREhyI+Q5WLIneKTGPmYiM/lxOp8fvqHy8YgXK0TlMiX0tliLI2JtfmWZP8eVV732sdYm+pcWzDzEmKLJZyeelyaZKkjPnnUO9keDwtgiLnmd5+t+Sr5y8brRnlvxcWEWfCqIALQYHvaXx6jTg4dAlye469uGwwOZVZCILLfGjaMg4LUCNMTtMSp1aC2y/3wR2t1v3w/iNBRQ+bNbtDqL2NAr7K4rUcyqbSpNrXZgAWXvjxBBtfYLK1uRYt3q2pfXJOAL0HtWcEwJLddOSJKV1SwvcvEuzg/4MPnA8MIUJOLqm3qI6wFyN99Ck6zYaV/zGSAzF/PGsaNa4vPLe5QnyuqVUnVQ6xELA6gbe53aGgeke+R/ycb2LJVyc7BhuzI90zA+c6wUDTb7NH//gdDSl2u/aW7lRJm8m1fLtPxcNuEM5JbkOCZKPM88HUsLRoC1pmKKlvWyeAXuxILbu0snpSxf8N+RgtLUSe5n2gdjOjoSTaN7mMZ7bF+cWk/MS8mFD4pcyl5UN7CbpFZH2a+Pm1VAnUTVfbw8qrmz1G9m5aKmRzY1SMhhPrlCn2t4uNUXNA3IFe6NOjSC1DEaAFZAfDlEkQCsbNhsZPj6NQPDSB3tLiTo0ZYoEbIeEIaKtU3Wk60rEszawTFuyHVd365LA/c/uarABN5M5rGq/dqTG3Ilye/5EKiYisisuzqNaZjmWv0z9TORc0CKbaTea214oNM9u2sXUZub/eqM3Pi/PjRSyQiOSwPWif2asTgu6hS6fb5UGosCWxdedMqdViIUUSSdIJx+qQ4KShfTT39VAWZbi+mB+iKICNwpt6cflY57Rcbs6d1kA26Iru73cuxYVlSvuJdcR5VfDYZRk8X0AXePROyw3Le6LaUdmTLzYsoNhhgQpd67xVNiHgk3pakmndeIAtTC4DCXy9oS6eU4CWxDdVmY53pKNbdAKmQsP37lrJZC6iDXMELGKcHjNuuZgcDyY8W/yv6ha3DX7OWm/35fpvhw55oitf4V+GULlcPWYyGGuVBdro19c8u0RDddDun40W7G5cSIzHLh/qZxb59R+EPY+wZ2XerkUim92hhXpKyW6WtAh6zQS97DrPyjCvKi3pCw96LeKynOpyjtsMQc2RmI/20zFOZcSa2AK++PoRcT6zeJyxlBZ7kk5mhqXGkLlM2hFKc+/T544xXP0Ua38Q6xdPTLTeG1PHnLMaOvksUQMrEFTB/lizCirmFQL8zYVU+OTeYQEFaITsBSMMYexS9HkajO2gGIf2micvntCZJsZQEwIH3/4JGJQGflBuH5rNXmnRRYXDQs3ZoEQoMtYDr1kFKUS/siiQSUxcTH9XYeBZiKDDFQoExREO9dddKQLO3BwMHvymCSTFyY+vxn3D27NDx6OlU092D5EDUwilttqVHpjJQDUceJYCLsK2swfXeNUVrBJT/w/sk+7si8rPtiMFis+oxvGdGQxirMBID700T39mULuNHzOyN+xBfcFACZcyngF1aSpv0JPkNUrAZTqfplv509cGXFUiEEm5dZb+OsP/blizqdK45/dSsIrufYTrCPY2lgJD6k6QljTfXVlHfYKSq+MsagyUcaMintyr95bD8kdTAeYNLNsMmo/Wdd8a2nStBP49ARIjqqpUHWY4q4mvO5Cq/CgCP+4/B+5zutGwX5pssgVLr1+fIM7WWLfiUQDk4c6ZdHZOWv5hG3g2dgQ5NXnpIY+BWwJpaouf25bXnjDzbHnQNofH/c6m+dEAS9Gs2h7pFRPKOBDnqswZ8KZjhId1ytHUTs533KwBoSiImoxKQUgZ7z6pA9QB3sZ8Cq0vwutJTTkfbX8AzCpm2cFXx/P22niUMHauU8IGc+78R6TsutoonoqFuoNA3l80t387YHMoL5KGAT1JO4zmx+vJ0LbLHlicHraSVYvJjnO9p++qnWgKw9OwFVVUagvZuf9qfiuum+hIicxP1q4zDnzkHsCNriLxBpxY9N+UOmqzdY1MunLMDgkMyi3uvnN3UBXJeZ8YLs5xr8QrOhimYoKuGBebZHAiBIkViv3DG8k2oNpp5OIgX6ulqaRN8V62QUPjn5tl1kPXhT9bcd8qIm8gi4or/FGbvQ6pgGSHmnayrugmf5E0upGxPRf/3xOtitGMaHLKJVm5zhglmVfI91o0yxhJZVS/5wQ8zfxK8Ylw0WmHXoGfRkoBRx9Hsnl/6sgTjAVwpmNuSeZtBwlX4qB8Bh8lxjqBDIuFGJ4I1wxN0XRlAAslzqMKwQfyA7OkuivCXfv+i+3XmhcBFM2n4jdT+NyUmBnQJPV3F2sZfKvJhUlXzSosFR4VevVVcOkFnnjdiRWc0TeSYxj41sJGYMbZTeLI3GvyZ8/gAAudQ1+4oFX+enX5V49MczGCYVBuoC4kHjp7ZVxj+clBwPr9k+v05SsezQK3enxLs1Nt/N7c7AImVUysjGou4iOohHo83Zs9/MI/OWB+OyXzOBD93NbApGHXrv8CVRHp2bwH+xB55cfNrdqFD35HSMx4iVmtzYAmSCIV8kXsHoq3DIb93riTWbubnjxbBW5zConVtbxLRStXHkIyAByaozME952Gc9aAdAbBpZSVCH88Uwb/4bPTVOVl+WoMYD7JIvK8VcMrJ8zHV4bbG0Dg7Kx17A4ej/ZcZ2Z5pVuVLUH1E/AccUTKm81SE+LQ6STTUDscUk0x2OWIbEORhg69tdoTGNkA1RfkGIRZHr5mCXOpLC55WWzCZoGPFUVtZRHwh0nq039CDdjEPo+JyaxSQAvDgR6Iqvxy0frrtEG1A385N81l05SSzN+IDm9bypF9m92EUqblnauZ5sjc37wRykOdl7w4o8WMgQsjii3EE/aJYDfHs1cH6DNBEujjcCc8qAefYFyIAURDcDnzun5UmkbBQsU4eu/W8I9nBE0qJKTdg2hwjq0+XV7a3TJ7R+alvJZCRia9lJ+grNB9dbrOmWEvUotMjvDhq4wV/kq4fvIBkzUGpDeYH74rne8uU3dgoNZdR9pUL6q9YDNRfOiF6Dyk+SYXQIghTjm9qR4tBHh0gnmF/9q3Qv22EzaLhSvDlDOxMrrCNRmLCl1jApzLrBCPn2mjn5zqK7OYK7VxOfQ5GfBfoPdyQwqFEgCVHkJ9oTnagRM3R0+rsuN5jQv9icCav/p1WqiEXSzCdLd/WEA6z6dDP7tPqPbeDYKAkVcz1lLGbFOC9b7cBd3MV0Ve8dZ89oR7OnxGS7uVpSry8banVZwpJg+nkH1jRBYa2BvBMY2xITH9ERXCjHzdZxs+ipdXP2DY7X+eWiBhtT2L0RRGTLPeazn5tpl4tu8iE2rWig731iuJDRbCHHy+g/Mb9+miAyVqfIpXT/iZeOxOxODO0hEpLM78I1+G2Z45yi3lS1K3m4WMQ559Lp4UML5vZUjYGJuxl+OPpUH5klpyBujkjprhei0TmUik10gjvNUp8mDkWlNKikmYspaVTqewbnOzJrmz8FLIpsT67EJLHIIfeDcWEfiP+DJrZ1jfxpoAb2abeMqLx+9RuZGzQoYtYVGgAWwEM9Kek2vPIeBNAKD6ao7nw6sgvfeLZPoXkbYO/tStHJdKzk+WFSFEU2NcALJAEP6S8pcnqqBBt57dwTrzQNCIdk2SocK4dLRbD/pu/VryKnm65ZYXiJCfHJk3mx9MRSl+nSK6OqEBSoGjz0/LADddwF/HqcfK3K3O+6YUGQcmj8pZL4PhZ6KrGkb8B38FmDvvLd3XQXbvS/FQmrXFTvJNkaN/FGo83KuS43BK1UfVnIqigGkCoP5fBda2MwAGTGNKX9K9t4Bx83pMFc5KSORmWKv+8VoVggWxoaBz3/9IBh6RwLd1tebwy89xvE5z6EEpXpDfrXWfRsMs6+ekUHH6idVosno55+xQ8Zqzelh0bxtJTgCcH3Z3/Cxlx9eNIS4JIFKOAVrDqbrXRszmY55a5+niJGHtkO3b6mnIDxLa1WXc7BAe33mt2KyM4Fbc3R6/WVTQN8QhlqAtave2WsQTqzWeSlKuGUVIJRqtObpv294rS0kDN1RKzdstZTXJebR2HlzsQ4P3NbMHUqFZMZw+/IKXnh4t+lY8qocp/B1oMszR03EFs3bPeND8QkItMvllObeCz3SZAjqZrobmLcrpFyQV7mwBjg3C3C8/bc5goQhv8j/IXMLGnt4mF7tybRDG5G0polxoUScQkPvmnga2/K+aapKeqSL0BTmo1Cm5g+booNOtdyKva2KoefRURaBk7113QKo3y+WTuFKtgETIK8HRluYS9DvlcciCDvnG8UaJRfZE2siZsiTHvRmN80xkUIInHeRZl5Re/+ATL6VhKFi8CZ/n/jbFV6T5pZ+Uoppvsi3qjacVFOJgWWfdlwVHKPW/TJO3na9hRM9bS2yo2rEsC6IBzRReVO6IesJU7PItzOamr+ROFfwGZmZ7ue8HNxAgLJKb7P3p8dMqk6Be5PJaT/5Rdc1deYVihWH9cjVKc9uz5EnfHqxLUkOO8iJUENBNVf5LyNy8zjLu/78k5WNTywiPfYeX3CPk7yc6CI3lum/CEZwfUaNpcI3KsPqfn2lmz3kd/acQjKA1ebkJaiuLD+epQ/Fc1llHXXMzofWzz/Kd29SNmOhcjMWw1jq1g3YfrXZ9rzXDYW4ZttfgfMi6oCUtBs0PkMVuxmq5lxEoCaSXPSqCJJ7MlKdRDidVt0AFlxk5cTdX++sBF2+E35mjwfm8ERVxH0FvuAQtsfA4V2G0TKTUxeyRGVjd/u6F1SvuAiU2/WaQjcNCU4Ep7VunXCYSbZj3U3wzu/LWM5MPlYuyQ3FOOCD/zt7K295hY2JhwF+ODDIZ676vGQFKveEQYkWj7lkK7rVmD7MhU0Y/tF8EcTTpo4/yqOufbd/zWIpMajnbDuWK2vn6OPPtz2rc9MIBNlPd8tt+yf+7SC4wqEPbozKMCwY5Bygx4JmoIEDsixWRDcdHd6S3/dZMHXOJAAv7+NIstl00crgSqHZKAEe4g3G4dzIV51EeZB01r7p8GNlfUnG/GjZgNGsqXZdYMBVtAtFNv3hJWPve4GvqZ2XxuiNkHTz5kxWgr0PjQdJlVywJ9Zf2ZvqeeTbolKtvK54re2Lq5BoyzfsRtvDfyao3kmyFzDQ88nM+qx83w74RDlkngtYiArI05Epre3GgBeSlMig0pE6RGQaFznKkGeb0SozLCyiOtxh7hgwZlbKbClzUUfC8ntMiHUOZE375RhTy9c4DA+oMLkUDkztSybZbdmP1xpaIbjUpPAHBq3cIq+CBFzbMlMMCCkUQ6d9LGV6GYCsYiEWZIy3nBnuxOYXeU4YTGDSin9e4/pCjPtQSHlg5LMEvIlF0ElthqrF129iK2RPBEWd3XWOl3SWV5uz5VUyZYp5kEFmz7QfP/B1W1BBzQ2iTGbSVT79lUHzcGXz3PJceSgz4uknETUwo0xffpr2KUvZF0i/r2sL3IFIClYx8CbIZE6Qt7MDJbOPB3xMScwaOcWG66IJfCnDkb0D2Mb+PHzX+oiCbxeTIogtyN+s2NJirNACk/OACSOTtV6vscwbzW4M168xqaI+RzR47S1nlV/rOoZnid87n/Ima2XYa3un3BuGAisNjb8eLMT9OnMtazQROFCuO1HiZXaOc0oUDbNC4eKLToOx8DzVhMgGA8XIAQ2x3b6I0uEyLssQjJX3QphcUMx4KsMgJ+72km4N2aqkBF2coKmUEt1eqIMGn+5txMT4kYVGd3ALO+y9Z4PP3d3l48JQK8s9ZZ/Qx/+NBKgBEJFlQ32psoJiihGO7FSYM5L81q72kaAYcilEFMG+ZK1BcMqELkflyCV7v8JEXLO4Rf/oZYNZHZVjJhfL6fnpP9Tio3Euue5uS7FMkfGOeRCTrBZ06Caev7tgufeTrX34Ur/Vvc+b8ksiIShNJtuF9WmYxOZ4xg8y6zTdy3KAB2y5kYkcRnXsptWwAFyKZ2I/QGySNeoQLkINUMloC+5L3WuMMx297Q1xUYLKqZ9XHavaobo6QQv4auMm+i84IhxRpPt9nUmcav9NcjCcP+TcMmxsQZ/F3mgeoA0fQgwvTsyXuuTaM3Sqtv2jaaajmaFQpK9W6uIbeqwvSDo34ZrY6elDUHwSCjHRRmlwmyy+eOra64Ssq0XSXYljMHtKY+FShcMkHsEUY/4Bw63dJ6KpwDaxmthlDdbdE+TvYF3v33cGSKqO+1H1pKYhJMvZD5ckQcHyNF8zrtiR5b0ko6NPGoRexUZTYP6VbUdn3zzxGBOi8Z0OqHjGqYxRXwN3mYi0GYEEZYq+Q3QvdKcEHILLLj8S+VFepSfErtmfZCdvxbfIifFSpEzKi+7VJsLMT+zEFeyp1OdwRC1VZrfTLIyR7xTPUcZFYPD9qI7D70uTb4hdpqPXsJIRNYbZtNwch1OI3trh3u2ScoQyM9POnInsUa+OovcwkUP1UfIzPb95n4BaF2ev57NHAej0+BVMF9/Cj9663HN2/JN3SQgslL914bKfiTTDFAz9PlQEL/dSv1H8xl3mtWxh1McFO9EJXlRDaKQDsyKO4vOJW90NFE6yw2tjbc2GeF95sbs0I9enAa6QwQVf/kJQhAD2BzUDKggOyjy1TEhED6sfk+418lQy3c/uj8aw8UEzZ6hIMCd8RohAkumMtIj9m73l2yPWoGHVTPaywkC7Yj9tBM1NxMgcrDwRtk4RO2WHT7Ql5kQCKdJj6kNuOTeyEBYBjLMhGz+O5/YGa84HEiTYEpZ6fFzy26GG2hWtTyteuYrhSyG56BjsT/wQeLRytpTY3D7sIMqZnJ9z1FDrfyjFlGl2TNw9BQysbaxOuwYYZs/7I6BANgkqCknWZC7/BBXvaeKwAmC959I+G39BUE9bExkNlbRoFRyEtNzv+NJ91FuisG3JCS6uYBeRnfv8AkAfKTeg9EYamqnsGfAV7d0f9DghHEQ5IsPGDIUhgoSj7obM4Bu5uhQ3/CYEDTHc92AsFvDK4XGrwUeGBWBHPlS+f4x+CxmmHz2sAGmSFNt65kwZC64mnaoWlu2310laYn8r62AqsR5dfjyK18MEdurdagldzfJtjFXlZs7St4QhdPiye6TPh2/ZAQLU/Fip5s7TDEM16KtRWrK9hmxnQ7bmfa/+7pa10Z8WDPK3NuJ+NN/RAbQ5vHx2uX0Lm7/w7cAEH/hvZA+mt7J7zGw7YtQYwnNN6dpgwkGjjrS3yQoeoYt1EnczmtmJfQZWzUlP3Hlg9Wzlr9IH23q3thGth+QNEANFettxKfskkGOlLk8AqoKJwDqOxAa6UzAx07plSSyNBJSGco9zjnC5gGbDoKvsMDuBR6bGRlGzJ+hFsGa/Izt78aI+WZ6dJlZKp4pGISuv9rV0sAS0MWEwCmfauO7oQZMiakHU35LBxiyJoOMddhUWgcZuC8r4Ksvn75TTcQXLJ7kWtYhGuGqPd9dZuFjBWQHNwosXY5snbHFQq72CvHXhIg+shQxycuLOuWYErwCLZeF24b7F78pO7xw4X6lIAR02hUOf5087Rl0nOaeb6CK4i/KA/EZv76ftOWZtjwxslNr0E/u8rWUmnf3amfg6UZmBAluuoj3Dd7UV+9IAJ6iYcDfSJlgmIImohjfIUMJ27z+opj50Ak9af2LCNrWrBJvMovA1OeNO+MF/MwZvnaCxTgG7Cw4QfSPF6AYCGFt21M8PySZFeV3t2Rqqs5JMzMYzGRgq4o+UaKRgBf9GHi/9X9HXA3wxkCsd/UhnHSh2zUVDiraio/6nP4y3XJqs8ABfALAtCYU7DHPMPRjgcM6Ad/HiSXDAbOdSMkvGZPAkHs8wuQTy6X2Ov/JFvcPuKfV3/r9Q28"
          ),
          r = () => A(n),
          i = () => new Set(r()),
          o = (e, t) => t.forEach((t) => e.add(t));
        (s = new Map(C(n))),
          (c = i()),
          (l = r()),
          (u = new Set(r().map((e) => l[e]))),
          (l = new Set(l)),
          (d = i()),
          (h = i());
        let a = x(n),
          w = n(),
          I = () => {
            let e = new Set();
            return r().forEach((t) => o(e, a[t])), o(e, r()), e;
          };
        (f = E((e) => {
          let t = E(n).map((e) => e + 96);
          if (t.length) {
            let r = e >= w;
            (t[0] -= 32), (t = k(t)), r && (t = `Restricted[${t}]`);
            let i = I();
            return { N: t, P: i, Q: I(), M: !n(), R: r };
          }
        })),
          (p = i()),
          (m = new Map());
        let B = r()
          .concat(U(p))
          .sort((e, t) => e - t);
        for (let { V: e, M: t } of (B.forEach((e, t) => {
          let r = n(),
            i = (B[t] = r ? B[t - r] : { V: [], M: new Map() });
          i.V.push(e), p.has(e) || m.set(e, i);
        }),
        new Set(m.values()))) {
          let n = [];
          for (let t of e) {
            let e = f.filter((e) => j(e, t)),
              r = n.find(({ G: t }) => e.some((e) => t.has(e)));
            r || ((r = { G: new Set(), V: [] }), n.push(r)),
              r.V.push(t),
              o(r.G, e);
          }
          let r = n.flatMap((e) => U(e.G));
          for (let { G: e, V: i } of n) {
            let n = new Set(r.filter((t) => !e.has(t)));
            for (let e of i) t.set(e, n);
          }
        }
        y = new Set();
        let S = new Set(),
          O = (e) => (y.has(e) ? S.add(e) : y.add(e));
        for (let e of f) {
          for (let t of e.P) O(t);
          for (let t of e.Q) O(t);
        }
        for (let e of y) m.has(e) || S.has(e) || m.set(e, 1);
        for (let r of (o(y, R(y).map(M)),
        (b = ((e = []),
        (t = A(n)),
        (function t({ S: n, B: r }, i, o) {
          if (!(4 & n) || o !== i[i.length - 1])
            for (let a of (2 & n && (o = i[i.length - 1]),
            1 & n && e.push(i),
            r))
              for (let e of a.Q) t(a, [...i, e], o);
        })(
          (function e(r) {
            return {
              S: n(),
              B: E(() => {
                let r = A(n).map((e) => t[e]);
                if (r.length) return e(r);
              }),
              Q: r,
            };
          })([]),
          []
        ),
        e)
          .map((e) => D.from(e))
          .sort(P)),
        (g = new Map()),
        b)) {
          let e = [g];
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
      function q(e) {
        return (z(e) ? "" : `${Q(W([e]))} `) + B(e);
      }
      function Q(e) {
        return `"${e}"\u200E`;
      }
      function W(e, t = 1 / 0, n = B) {
        var r, i;
        let o = [];
        (r = e[0]),
          L(),
          l.has(r) && o.push("◌"),
          e.length > t &&
            ((t >>= 1), (e = [...e.slice(0, t), 8230, ...e.slice(-t)]));
        let a = 0,
          s = e.length;
        for (let t = 0; t < s; t++) {
          let r = e[t];
          z(r) && (o.push(k(e.slice(a, t))), o.push(n(r)), (a = t + 1));
        }
        return o.push(k(e.slice(a, s))), o.join("");
      }
      function z(e) {
        return L(), d.has(e);
      }
      function G(e) {
        return Error(`disallowed character: ${q(e)}`);
      }
      function H(e, t) {
        let n = q(t),
          r = f.find((e) => e.P.has(t));
        return (
          r && (n = `${r.N} ${n}`), Error(`illegal mixture: ${e.N} + ${n}`)
        );
      }
      function K(e) {
        return Error(`illegal placement: ${e}`);
      }
      function J(e) {
        return e.filter((e) => 65039 != e);
      }
      let $ = "valid";
      function V(e) {
        var t;
        return (t = (function (e, t, n) {
          if (!e) return [];
          L();
          let r = 0;
          return e.split(".").map((e) => {
            let i = (function (e) {
                let t = [];
                for (let n = 0, r = e.length; n < r; ) {
                  let r = e.codePointAt(n);
                  (n += r < 65536 ? 1 : 2), t.push(r);
                }
                return t;
              })(e),
              o = { input: i, offset: r };
            r += i.length + 1;
            try {
              let e,
                r = (o.tokens = (function (e, t, n) {
                  let r = [],
                    i = [];
                  for (e = e.slice().reverse(); e.length; ) {
                    let o = (function (e, t) {
                      let n,
                        r = g,
                        i = e.length;
                      for (; i && (r = r.get(e[--i])); ) {
                        let { V: o } = r;
                        o &&
                          ((n = o),
                          t && t.push(...e.slice(i).reverse()),
                          (e.length = i));
                      }
                      return n;
                    })(e);
                    if (o) i.length && (r.push(t(i)), (i = [])), r.push(n(o));
                    else {
                      let t = e.pop();
                      if (y.has(t)) i.push(t);
                      else {
                        let e = s.get(t);
                        if (e) i.push(...e);
                        else if (!c.has(t)) throw G(t);
                      }
                    }
                  }
                  return i.length && r.push(t(i)), r;
                })(i, t, n)),
                a = r.length;
              if (!a) throw Error("empty label");
              let d = (o.output = r.flat());
              for (let e = d.lastIndexOf(95); e > 0; )
                if (95 !== d[--e])
                  throw Error("underscore allowed only at start");
              if (
                !(o.emoji = a > 1 || r[0].is_emoji) &&
                d.every((e) => e < 128)
              ) {
                if (d.length >= 4 && 45 == d[2] && 45 == d[3])
                  throw Error(`invalid label extension: "${k(d.slice(0, 4))}"`);
                e = "ASCII";
              } else {
                let t = r.flatMap((e) => (e.is_emoji ? [] : e));
                if (t.length) {
                  if (l.has(d[0])) throw K("leading combining mark");
                  for (let e = 1; e < a; e++) {
                    let t = r[e];
                    if (!t.is_emoji && l.has(t[0]))
                      throw K(
                        `emoji + combining mark: "${k(r[e - 1])} + ${W([
                          t[0],
                        ])}"`
                      );
                  }
                  !(function (e) {
                    let t = e[0],
                      n = w.get(t);
                    if (n) throw K(`leading ${n}`);
                    let r = e.length,
                      i = -1;
                    for (let o = 1; o < r; o++) {
                      t = e[o];
                      let r = w.get(t);
                      if (r) {
                        if (i == o) throw K(`${n} + ${r}`);
                        (i = o + 1), (n = r);
                      }
                    }
                    if (i == r) throw K(`trailing ${n}`);
                  })(d);
                  let n = U(new Set(t)),
                    [i] = (function (e) {
                      let t = f;
                      for (let n of e) {
                        let e = t.filter((e) => j(e, n));
                        if (!e.length)
                          if (f.some((e) => j(e, n))) throw H(t[0], n);
                          else throw G(n);
                        if (((t = e), 1 == e.length)) break;
                      }
                      return t;
                    })(n);
                  (function (e, t) {
                    for (let n of t) if (!j(e, n)) throw H(e, n);
                    if (e.M) {
                      var n;
                      let e = ((n = t), R(n).map(M));
                      for (let t = 1, n = e.length; t < n; t++)
                        if (u.has(e[t])) {
                          let r = t + 1;
                          for (let i; r < n && u.has((i = e[r])); r++)
                            for (let n = t; n < r; n++)
                              if (e[n] == i)
                                throw Error(
                                  `duplicate non-spacing marks: ${q(i)}`
                                );
                          if (r - t > 4)
                            throw Error(
                              `excessive non-spacing marks: ${Q(
                                W(e.slice(t - 1, r))
                              )} (${r - t}/4)`
                            );
                          t = r;
                        }
                    }
                  })(i, t),
                    (function (e, t) {
                      let n,
                        r = [];
                      for (let e of t) {
                        let t = m.get(e);
                        if (1 === t) return;
                        if (t) {
                          let r = t.M.get(e);
                          if (
                            !(n = n ? n.filter((e) => r.has(e)) : U(r)).length
                          )
                            return;
                        } else r.push(e);
                      }
                      if (n) {
                        for (let t of n)
                          if (r.every((e) => j(t, e)))
                            throw Error(
                              `whole-script confusable: ${e.N}/${t.N}`
                            );
                      }
                    })(i, n),
                    (e = i.N);
                } else e = "Emoji";
              }
              o.type = e;
            } catch (e) {
              o.error = e;
            }
            return o;
          });
        })(e, F, J))
          .map(({ input: e, error: n, output: r }) => {
            if (n) {
              let r = n.message;
              throw Error(
                1 == t.length ? r : `Invalid label ${Q(W(e, 63))}: ${r}`
              );
            }
            return k(r);
          })
          .join(".");
      }
    },
    2145: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => u });
      var r = n(87660),
        i = n(64997),
        o = n(53031),
        a = n(34250),
        s = n(12115),
        c = n(45643);
      let l = (e) => "object" == typeof e && !Array.isArray(e);
      function u() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, o.U)(e);
        return (function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : t,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : a.b,
            i = (0, s.useRef)([]),
            o = (0, c.useSyncExternalStoreWithSelector)(
              e,
              t,
              n,
              (e) => e,
              (e, t) => {
                if (l(e) && l(t) && i.current.length) {
                  for (let n of i.current) if (!r(e[n], t[n])) return !1;
                  return !0;
                }
                return r(e, t);
              }
            );
          return (0, s.useMemo)(() => {
            if (l(o)) {
              let e = { ...o },
                t = {};
              for (let [n, r] of Object.entries(e))
                t = {
                  ...t,
                  [n]: {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (i.current.includes(n) || i.current.push(n), r),
                  },
                };
              return Object.defineProperties(e, t), e;
            }
            return o;
          }, [o]);
        })(
          (e) => (0, r.F)(t, { onChange: e }),
          () => (0, i.s)(t)
        );
      }
    },
    2401: function (e, t, n) {
      var r;
      !(function (i, o) {
        "use strict";
        var a = "function",
          s = "undefined",
          c = "object",
          l = "string",
          u = "major",
          d = "model",
          h = "name",
          f = "type",
          p = "vendor",
          m = "version",
          y = "architecture",
          b = "console",
          g = "mobile",
          w = "tablet",
          v = "smarttv",
          A = "wearable",
          x = "embedded",
          C = "Amazon",
          E = "Apple",
          I = "ASUS",
          B = "BlackBerry",
          k = "Browser",
          P = "Chrome",
          S = "Firefox",
          O = "Google",
          M = "Huawei",
          T = "Microsoft",
          R = "Motorola",
          N = "Opera",
          F = "Samsung",
          U = "Sharp",
          j = "Sony",
          D = "Xiaomi",
          L = "Zebra",
          q = "Facebook",
          Q = "Chromium OS",
          W = "Mac OS",
          z = " Browser",
          G = function (e, t) {
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
          K = function (e, t) {
            return typeof e === l && -1 !== J(t).indexOf(J(e));
          },
          J = function (e) {
            return e.toLowerCase();
          },
          $ = function (e, t) {
            if (typeof e === l)
              return (
                (e = e.replace(/^\s\s*/, "")),
                typeof t === s ? e : e.substring(0, 500)
              );
          },
          V = function (e, t) {
            for (var n, r, i, s, l, u, d = 0; d < t.length && !l; ) {
              var h = t[d],
                f = t[d + 1];
              for (n = r = 0; n < h.length && !l && h[n]; )
                if ((l = h[n++].exec(e)))
                  for (i = 0; i < f.length; i++)
                    (u = l[++r]),
                      typeof (s = f[i]) === c && s.length > 0
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
                              : o)
                        : (this[s] = u || o);
              d += 2;
            }
          },
          Y = function (e, t) {
            for (var n in t)
              if (typeof t[n] === c && t[n].length > 0) {
                for (var r = 0; r < t[n].length; r++)
                  if (K(t[n][r], e)) return "?" === n ? o : n;
              } else if (K(t[n], e)) return "?" === n ? o : n;
            return t.hasOwnProperty("*") ? t["*"] : e;
          },
          _ = {
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
          Z = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [m, [h, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [m, [h, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [h, m],
              [/opios[\/ ]+([\w\.]+)/i],
              [m, [h, N + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [m, [h, N + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [m, [h, N]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [m, [h, "Baidu"]],
              [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
              [m, [h, "Maxthon"]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
                /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
                /(heytap|ovi|115)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [h, m],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [m, [h, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [m, [h, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [m, [h, "UC" + k]],
              [
                /microm.+\bqbcore\/([\w\.]+)/i,
                /\bqbcore\/([\w\.]+).+microm/i,
                /micromessenger\/([\w\.]+)/i,
              ],
              [m, [h, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [m, [h, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [m, [h, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [m, [h, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [m, [h, "Smart Lenovo " + k]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[h, /(.+)/, "$1 Secure " + k], m],
              [/\bfocus\/([\w\.]+)/i],
              [m, [h, S + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [m, [h, N + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [m, [h, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [m, [h, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [m, [h, N + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [m, [h, "MIUI" + z]],
              [/fxios\/([\w\.-]+)/i],
              [m, [h, S]],
              [/\bqihoobrowser\/?([\w\.]*)/i],
              [m, [h, "360"]],
              [/\b(qq)\/([\w\.]+)/i],
              [[h, /(.+)/, "$1Browser"], m],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [[h, /(.+)/, "$1" + z], m],
              [/samsungbrowser\/([\w\.]+)/i],
              [m, [h, F + " Internet"]],
              [/metasr[\/ ]?([\d\.]+)/i],
              [m, [h, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [[h, "Sogou Mobile"], m],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
              ],
              [h, m],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [h],
              [
                /ome\/([\w\.]+) \w* ?(iron) saf/i,
                /ome\/([\w\.]+).+qihu (360)[es]e/i,
              ],
              [m, h],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[h, q], m],
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
              [h, m],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [m, [h, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [m, [h, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [m, [h, P + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[h, P + " WebView"], m],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [m, [h, "Android " + k]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [h, m],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [m, [h, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [m, h],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                h,
                [
                  m,
                  Y,
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
              [h, m],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[h, "Netscape"], m],
              [/(wolvic|librewolf)\/([\w\.]+)/i],
              [h, m],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [m, [h, S + " Reality"]],
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
              [h, [m, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [h, [m, /master.|lts./, ""]],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[y, "amd64"]],
              [/(ia32(?=;))/i],
              [[y, J]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[y, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[y, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[y, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[y, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[y, /ower/, "", J]],
              [/(sun4\w)[;\)]/i],
              [[y, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[y, J]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [d, [p, F], [f, w]],
              [
                /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]((?!sm-[lr])[-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [d, [p, F], [f, g]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [d, [p, E], [f, g]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [d, [p, E], [f, w]],
              [/(macintosh);/i],
              [d, [p, E]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [d, [p, U], [f, g]],
              [/(?:honor)([-\w ]+)[;\)]/i],
              [d, [p, "Honor"], [f, g]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [d, [p, M], [f, w]],
              [
                /(?:huawei)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [d, [p, M], [f, g]],
              [
                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
              ],
              [
                [d, /_/g, " "],
                [p, D],
                [f, g],
              ],
              [
                /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
                /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i,
              ],
              [
                [d, /_/g, " "],
                [p, D],
                [f, w],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [d, [p, "OPPO"], [f, g]],
              [/\b(opd2\d{3}a?) bui/i],
              [d, [p, "OPPO"], [f, w]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [d, [p, "Vivo"], [f, g]],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [d, [p, "Realme"], [f, g]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [d, [p, R], [f, g]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [d, [p, R], [f, w]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [d, [p, "LG"], [f, w]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [d, [p, "LG"], [f, g]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [d, [p, "Lenovo"], [f, w]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [d, /_/g, " "],
                [p, "Nokia"],
                [f, g],
              ],
              [/(pixel c)\b/i],
              [d, [p, O], [f, w]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [d, [p, O], [f, g]],
              [
                /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [d, [p, j], [f, g]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [d, "Xperia Tablet"],
                [p, j],
                [f, w],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [d, [p, "OnePlus"], [f, g]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [d, [p, C], [f, w]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [d, /(.+)/g, "Fire Phone $1"],
                [p, C],
                [f, g],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [d, p, [f, w]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [d, [p, B], [f, g]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [d, [p, I], [f, w]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [d, [p, I], [f, g]],
              [/(nexus 9)/i],
              [d, [p, "HTC"], [f, w]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [p, [d, /_/g, " "], [f, g]],
              [
                /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
              ],
              [d, [p, "TCL"], [f, w]],
              [/(itel) ((\w+))/i],
              [
                [p, J],
                d,
                [f, Y, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [d, [p, "Acer"], [f, w]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [d, [p, "Meizu"], [f, g]],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [d, [p, "Ulefone"], [f, g]],
              [
                /; (energy ?\w+)(?: bui|\))/i,
                /; energizer ([\w ]+)(?: bui|\))/i,
              ],
              [d, [p, "Energizer"], [f, g]],
              [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
              [d, [p, "Cat"], [f, g]],
              [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
              [d, [p, "Smartfren"], [f, g]],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [d, [p, "Nothing"], [f, g]],
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
              [p, d, [f, g]],
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
              [p, d, [f, w]],
              [/(surface duo)/i],
              [d, [p, T], [f, w]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [d, [p, "Fairphone"], [f, g]],
              [/(u304aa)/i],
              [d, [p, "AT&T"], [f, g]],
              [/\bsie-(\w*)/i],
              [d, [p, "Siemens"], [f, g]],
              [/\b(rct\w+) b/i],
              [d, [p, "RCA"], [f, w]],
              [/\b(venue[\d ]{2,7}) b/i],
              [d, [p, "Dell"], [f, w]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [d, [p, "Verizon"], [f, w]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [d, [p, "Barnes & Noble"], [f, w]],
              [/\b(tm\d{3}\w+) b/i],
              [d, [p, "NuVision"], [f, w]],
              [/\b(k88) b/i],
              [d, [p, "ZTE"], [f, w]],
              [/\b(nx\d{3}j) b/i],
              [d, [p, "ZTE"], [f, g]],
              [/\b(gen\d{3}) b.+49h/i],
              [d, [p, "Swiss"], [f, g]],
              [/\b(zur\d{3}) b/i],
              [d, [p, "Swiss"], [f, w]],
              [/\b((zeki)?tb.*\b) b/i],
              [d, [p, "Zeki"], [f, w]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[p, "Dragon Touch"], d, [f, w]],
              [/\b(ns-?\w{0,9}) b/i],
              [d, [p, "Insignia"], [f, w]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [d, [p, "NextBook"], [f, w]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[p, "Voice"], d, [f, g]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[p, "LvTel"], d, [f, g]],
              [/\b(ph-1) /i],
              [d, [p, "Essential"], [f, g]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [d, [p, "Envizen"], [f, w]],
              [/\b(trio[-\w\. ]+) b/i],
              [d, [p, "MachSpeed"], [f, w]],
              [/\btu_(1491) b/i],
              [d, [p, "Rotor"], [f, w]],
              [/(shield[\w ]+) b/i],
              [d, [p, "Nvidia"], [f, w]],
              [/(sprint) (\w+)/i],
              [p, d, [f, g]],
              [/(kin\.[onetw]{3})/i],
              [
                [d, /\./g, " "],
                [p, T],
                [f, g],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [d, [p, L], [f, w]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [d, [p, L], [f, g]],
              [/smart-tv.+(samsung)/i],
              [p, [f, v]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [d, /^/, "SmartTV"],
                [p, F],
                [f, v],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [p, "LG"],
                [f, v],
              ],
              [/(apple) ?tv/i],
              [p, [d, E + " TV"], [f, v]],
              [/crkey/i],
              [
                [d, P + "cast"],
                [p, O],
                [f, v],
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [d, [p, C], [f, v]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [d, [p, U], [f, v]],
              [/(bravia[\w ]+)( bui|\))/i],
              [d, [p, j], [f, v]],
              [/(mitv-\w{5}) bui/i],
              [d, [p, D], [f, v]],
              [/Hbbtv.*(technisat) (.*);/i],
              [p, d, [f, v]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [p, $],
                [d, $],
                [f, v],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[f, v]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [p, d, [f, b]],
              [/droid.+; (shield) bui/i],
              [d, [p, "Nvidia"], [f, b]],
              [/(playstation [345portablevi]+)/i],
              [d, [p, j], [f, b]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [d, [p, T], [f, b]],
              [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
              [d, [p, F], [f, A]],
              [/((pebble))app/i],
              [p, d, [f, A]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [d, [p, E], [f, A]],
              [/droid.+; (glass) \d/i],
              [d, [p, O], [f, A]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [d, [p, L], [f, A]],
              [/droid.+; (glass) \d/i],
              [d, [p, O], [f, A]],
              [/(pico) (4|neo3(?: link|pro)?)/i],
              [p, d, [f, A]],
              [/; (quest( \d| pro)?)/i],
              [d, [p, q], [f, A]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [p, [f, x]],
              [/(aeobc)\b/i],
              [d, [p, C], [f, x]],
              [
                /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i,
              ],
              [d, [f, g]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [d, [f, w]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[f, w]],
              [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
              ],
              [[f, g]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [d, [p, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [m, [h, "EdgeHTML"]],
              [/(arkweb)\/([\w\.]+)/i],
              [h, m],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [m, [h, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
              ],
              [h, m],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [m, h],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [h, m],
              [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
              [h, [m, Y, _]],
              [
                /windows nt 6\.2; (arm)/i,
                /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
              ],
              [
                [m, Y, _],
                [h, "Windows"],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [m, /_/g, "."],
                [h, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [h, W],
                [m, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [m, h],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [h, m],
              [/\(bb(10);/i],
              [m, [h, B]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [m, [h, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [m, [h, S + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [m, [h, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [m, [h, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [m, [h, P + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[h, Q], m],
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
              [h, m],
              [/(sunos) ?([\w\.\d]*)/i],
              [[h, "Solaris"], m],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [h, m],
            ],
          },
          X = function (e, t) {
            if ((typeof e === c && ((t = e), (e = o)), !(this instanceof X)))
              return new X(e, t).getResult();
            var n = typeof i !== s && i.navigator ? i.navigator : o,
              r = e || (n && n.userAgent ? n.userAgent : ""),
              b = n && n.userAgentData ? n.userAgentData : o,
              v = t ? G(Z, t) : Z,
              A = n && n.userAgent == r;
            return (
              (this.getBrowser = function () {
                var e,
                  t = {};
                return (
                  (t[h] = o),
                  (t[m] = o),
                  V.call(t, r, v.browser),
                  (t[u] =
                    typeof (e = t[m]) === l
                      ? e.replace(/[^\d\.]/g, "").split(".")[0]
                      : o),
                  A &&
                    n &&
                    n.brave &&
                    typeof n.brave.isBrave == a &&
                    (t[h] = "Brave"),
                  t
                );
              }),
              (this.getCPU = function () {
                var e = {};
                return (e[y] = o), V.call(e, r, v.cpu), e;
              }),
              (this.getDevice = function () {
                var e = {};
                return (
                  (e[p] = o),
                  (e[d] = o),
                  (e[f] = o),
                  V.call(e, r, v.device),
                  A && !e[f] && b && b.mobile && (e[f] = g),
                  A &&
                    "Macintosh" == e[d] &&
                    n &&
                    typeof n.standalone !== s &&
                    n.maxTouchPoints &&
                    n.maxTouchPoints > 2 &&
                    ((e[d] = "iPad"), (e[f] = w)),
                  e
                );
              }),
              (this.getEngine = function () {
                var e = {};
                return (e[h] = o), (e[m] = o), V.call(e, r, v.engine), e;
              }),
              (this.getOS = function () {
                var e = {};
                return (
                  (e[h] = o),
                  (e[m] = o),
                  V.call(e, r, v.os),
                  A &&
                    !e[h] &&
                    b &&
                    b.platform &&
                    "Unknown" != b.platform &&
                    (e[h] = b.platform
                      .replace(/chrome os/i, Q)
                      .replace(/macos/i, W)),
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
                  (r = typeof e === l && e.length > 500 ? $(e, 500) : e), this
                );
              }),
              this.setUA(r),
              this
            );
          };
        (X.VERSION = "1.0.40"),
          (X.BROWSER = H([h, m, u])),
          (X.CPU = H([y])),
          (X.DEVICE = H([d, p, f, b, g, v, w, A, x])),
          (X.ENGINE = X.OS = H([h, m])),
          typeof t !== s
            ? (e.exports && (t = e.exports = X), (t.UAParser = X))
            : n.amdO
            ? o ===
                (r = function () {
                  return X;
                }.call(t, n, t, e)) || (e.exports = r)
            : typeof i !== s && (i.UAParser = X);
        var ee = typeof i !== s && (i.jQuery || i.Zepto);
        if (ee && !ee.ua) {
          var et = new X();
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
    3488: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => c });
      var r = n(69330),
        i = n(60367),
        o = n(54842),
        a = n(34524),
        s = n(81946);
      async function c(e, t) {
        let { abi: n, address: c, args: l, functionName: u, ...d } = t,
          h = (0, i.p)({ abi: n, args: l, functionName: u });
        try {
          let { data: t } = await (0, a.T)(
            e,
            s.T,
            "call"
          )({ ...d, data: h, to: c });
          return (0, r.e)({
            abi: n,
            args: l,
            functionName: u,
            data: t || "0x",
          });
        } catch (e) {
          throw (0, o.j)(e, {
            abi: n,
            address: c,
            args: l,
            docsPath: "/docs/contract/readContract",
            functionName: u,
          });
        }
      }
    },
    4805: (e, t, n) => {
      "use strict";
      n.d(t, { Hi: () => i, ft: () => o, uj: () => s });
      var r = n(7441);
      class i extends r.C {
        constructor({ address: e }) {
          super(`State for account "${e}" is set multiple times.`, {
            name: "AccountStateConflictError",
          });
        }
      }
      class o extends r.C {
        constructor() {
          super("state and stateDiff are set on the same account.", {
            name: "StateAssignmentConflictError",
          });
        }
      }
      function a(e) {
        return e.reduce(
          (e, { slot: t, value: n }) => `${e}        ${t}: ${n}
`,
          ""
        );
      }
      function s(e) {
        return e
          .reduce((e, { address: t, ...n }) => {
            let r = `${e}    ${t}:
`;
            return (
              n.nonce &&
                (r += `      nonce: ${n.nonce}
`),
              n.balance &&
                (r += `      balance: ${n.balance}
`),
              n.code &&
                (r += `      code: ${n.code}
`),
              n.state && ((r += "      state:\n"), (r += a(n.state))),
              n.stateDiff &&
                ((r += "      stateDiff:\n"), (r += a(n.stateDiff))),
              r
            );
          }, "  State Override:\n")
          .slice(0, -1);
      }
    },
    5041: (e, t, n) => {
      "use strict";
      n.d(t, { n: () => u });
      var r = n(12115),
        i = n(34560),
        o = n(7165),
        a = n(25910),
        s = n(52020),
        c = class extends a.Q {
          #e;
          #t = void 0;
          #n;
          #r;
          constructor(e, t) {
            super(),
              (this.#e = e),
              this.setOptions(t),
              this.bindMethods(),
              this.#i();
          }
          bindMethods() {
            (this.mutate = this.mutate.bind(this)),
              (this.reset = this.reset.bind(this));
          }
          setOptions(e) {
            let t = this.options;
            (this.options = this.#e.defaultMutationOptions(e)),
              (0, s.f8)(this.options, t) ||
                this.#e
                  .getMutationCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    mutation: this.#n,
                    observer: this,
                  }),
              t?.mutationKey &&
              this.options.mutationKey &&
              (0, s.EN)(t.mutationKey) !== (0, s.EN)(this.options.mutationKey)
                ? this.reset()
                : this.#n?.state.status === "pending" &&
                  this.#n.setOptions(this.options);
          }
          onUnsubscribe() {
            this.hasListeners() || this.#n?.removeObserver(this);
          }
          onMutationUpdate(e) {
            this.#i(), this.#o(e);
          }
          getCurrentResult() {
            return this.#t;
          }
          reset() {
            this.#n?.removeObserver(this),
              (this.#n = void 0),
              this.#i(),
              this.#o();
          }
          mutate(e, t) {
            return (
              (this.#r = t),
              this.#n?.removeObserver(this),
              (this.#n = this.#e
                .getMutationCache()
                .build(this.#e, this.options)),
              this.#n.addObserver(this),
              this.#n.execute(e)
            );
          }
          #i() {
            let e = this.#n?.state ?? (0, i.$)();
            this.#t = {
              ...e,
              isPending: "pending" === e.status,
              isSuccess: "success" === e.status,
              isError: "error" === e.status,
              isIdle: "idle" === e.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          }
          #o(e) {
            o.jG.batch(() => {
              if (this.#r && this.hasListeners()) {
                let t = this.#t.variables,
                  n = this.#t.context;
                e?.type === "success"
                  ? (this.#r.onSuccess?.(e.data, t, n),
                    this.#r.onSettled?.(e.data, null, t, n))
                  : e?.type === "error" &&
                    (this.#r.onError?.(e.error, t, n),
                    this.#r.onSettled?.(void 0, e.error, t, n));
              }
              this.listeners.forEach((e) => {
                e(this.#t);
              });
            });
          }
        },
        l = n(26715);
      function u(e, t) {
        let n = (0, l.jE)(t),
          [i] = r.useState(() => new c(n, e));
        r.useEffect(() => {
          i.setOptions(e);
        }, [i, e]);
        let a = r.useSyncExternalStore(
            r.useCallback((e) => i.subscribe(o.jG.batchCalls(e)), [i]),
            () => i.getCurrentResult(),
            () => i.getCurrentResult()
          ),
          u = r.useCallback(
            (e, t) => {
              i.mutate(e, t).catch(s.lQ);
            },
            [i]
          );
        if (a.error && (0, s.GU)(i.options.throwOnError, [a.error]))
          throw a.error;
        return { ...a, mutate: u, mutateAsync: a.mutate };
      }
    },
    6083: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => f });
      var r = n(14493),
        i = n(99702),
        o = n(7441),
        a = n(35109),
        s = n(69330),
        c = n(60367),
        l = n(13861),
        u = n(54842),
        d = n(34524),
        h = n(3488);
      async function f(e, t) {
        let {
            account: n,
            allowFailure: f = !0,
            batchSize: p,
            blockNumber: m,
            blockTag: y,
            multicallAddress: b,
            stateOverride: g,
          } = t,
          w = t.contracts,
          v =
            p ??
            (("object" == typeof e.batch?.multicall &&
              e.batch.multicall.batchSize) ||
              1024),
          A = b;
        if (!A) {
          if (!e.chain)
            throw Error(
              "client chain not configured. multicallAddress is required."
            );
          A = (0, l.M)({
            blockNumber: m,
            chain: e.chain,
            contract: "multicall3",
          });
        }
        let x = [[]],
          C = 0,
          E = 0;
        for (let e = 0; e < w.length; e++) {
          let { abi: t, address: r, args: i, functionName: o } = w[e];
          try {
            let e = (0, c.p)({ abi: t, args: i, functionName: o });
            (E += (e.length - 2) / 2),
              v > 0 &&
                E > v &&
                x[C].length > 0 &&
                (C++, (E = (e.length - 2) / 2), (x[C] = [])),
              (x[C] = [...x[C], { allowFailure: !0, callData: e, target: r }]);
          } catch (a) {
            let e = (0, u.j)(a, {
              abi: t,
              address: r,
              args: i,
              docsPath: "/docs/contract/multicall",
              functionName: o,
              sender: n,
            });
            if (!f) throw e;
            x[C] = [...x[C], { allowFailure: !0, callData: "0x", target: r }];
          }
        }
        let I = await Promise.allSettled(
            x.map((t) =>
              (0, d.T)(
                e,
                h.J,
                "readContract"
              )({
                abi: r.v2,
                account: n,
                address: A,
                args: [t],
                blockNumber: m,
                blockTag: y,
                functionName: "aggregate3",
                stateOverride: g,
              })
            )
          ),
          B = [];
        for (let e = 0; e < I.length; e++) {
          let t = I[e];
          if ("rejected" === t.status) {
            if (!f) throw t.reason;
            for (let n = 0; n < x[e].length; n++)
              B.push({ status: "failure", error: t.reason, result: void 0 });
            continue;
          }
          let n = t.value;
          for (let t = 0; t < n.length; t++) {
            let { returnData: r, success: o } = n[t],
              { callData: c } = x[e][t],
              { abi: l, address: d, functionName: h, args: p } = w[B.length];
            try {
              if ("0x" === c) throw new i.O();
              if (!o) throw new a.$S({ data: r });
              let e = (0, s.e)({ abi: l, args: p, data: r, functionName: h });
              B.push(f ? { result: e, status: "success" } : e);
            } catch (t) {
              let e = (0, u.j)(t, {
                abi: l,
                address: d,
                args: p,
                docsPath: "/docs/contract/multicall",
                functionName: h,
              });
              if (!f) throw e;
              B.push({ error: e, result: void 0, status: "failure" });
            }
          }
        }
        if (B.length !== w.length) throw new o.C("multicall results mismatch");
        return B;
      }
    },
    6115: (e, t, n) => {
      "use strict";
      var r = n(12115),
        i = n(49033),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        a = i.useSyncExternalStore,
        s = r.useRef,
        c = r.useEffect,
        l = r.useMemo,
        u = r.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
        var d = s(null);
        if (null === d.current) {
          var h = { hasValue: !1, value: null };
          d.current = h;
        } else h = d.current;
        var f = a(
          e,
          (d = l(
            function () {
              function e(e) {
                if (!c) {
                  if (
                    ((c = !0), (a = e), (e = r(e)), void 0 !== i && h.hasValue)
                  ) {
                    var t = h.value;
                    if (i(t, e)) return (s = t);
                  }
                  return (s = e);
                }
                if (((t = s), o(a, e))) return t;
                var n = r(e);
                return void 0 !== i && i(t, n)
                  ? ((a = e), t)
                  : ((a = e), (s = n));
              }
              var a,
                s,
                c = !1,
                l = void 0 === n ? null : n;
              return [
                function () {
                  return e(t());
                },
                null === l
                  ? void 0
                  : function () {
                      return e(l());
                    },
              ];
            },
            [t, n, r, i]
          ))[0],
          d[1]
        );
        return (
          c(
            function () {
              (h.hasValue = !0), (h.value = f);
            },
            [f]
          ),
          u(f),
          f
        );
      };
    },
    6784: (e, t, n) => {
      "use strict";
      n.d(t, { II: () => d, v_: () => c, wm: () => u });
      var r = n(50920),
        i = n(21239),
        o = n(73504),
        a = n(52020);
      function s(e) {
        return Math.min(1e3 * 2 ** e, 3e4);
      }
      function c(e) {
        return (e ?? "online") !== "online" || i.t.isOnline();
      }
      var l = class extends Error {
        constructor(e) {
          super("CancelledError"),
            (this.revert = e?.revert),
            (this.silent = e?.silent);
        }
      };
      function u(e) {
        return e instanceof l;
      }
      function d(e) {
        let t,
          n = !1,
          u = 0,
          d = !1,
          h = (0, o.T)(),
          f = () =>
            r.m.isFocused() &&
            ("always" === e.networkMode || i.t.isOnline()) &&
            e.canRun(),
          p = () => c(e.networkMode) && e.canRun(),
          m = (n) => {
            d || ((d = !0), e.onSuccess?.(n), t?.(), h.resolve(n));
          },
          y = (n) => {
            d || ((d = !0), e.onError?.(n), t?.(), h.reject(n));
          },
          b = () =>
            new Promise((n) => {
              (t = (e) => {
                (d || f()) && n(e);
              }),
                e.onPause?.();
            }).then(() => {
              (t = void 0), d || e.onContinue?.();
            }),
          g = () => {
            let t;
            if (d) return;
            let r = 0 === u ? e.initialPromise : void 0;
            try {
              t = r ?? e.fn();
            } catch (e) {
              t = Promise.reject(e);
            }
            Promise.resolve(t)
              .then(m)
              .catch((t) => {
                if (d) return;
                let r = e.retry ?? 3 * !a.S$,
                  i = e.retryDelay ?? s,
                  o = "function" == typeof i ? i(u, t) : i,
                  c =
                    !0 === r ||
                    ("number" == typeof r && u < r) ||
                    ("function" == typeof r && r(u, t));
                if (n || !c) return void y(t);
                u++,
                  e.onFail?.(u, t),
                  (0, a.yy)(o)
                    .then(() => (f() ? void 0 : b()))
                    .then(() => {
                      n ? y(t) : g();
                    });
              });
          };
        return {
          promise: h,
          cancel: (t) => {
            d || (y(new l(t)), e.abort?.());
          },
          continue: () => (t?.(), h),
          cancelRetry: () => {
            n = !0;
          },
          continueRetry: () => {
            n = !1;
          },
          canStart: p,
          start: () => (p() ? g() : b().then(g), h),
        };
      }
    },
    7165: (e, t, n) => {
      "use strict";
      n.d(t, { jG: () => i });
      var r = (e) => setTimeout(e, 0),
        i = (function () {
          let e = [],
            t = 0,
            n = (e) => {
              e();
            },
            i = (e) => {
              e();
            },
            o = r,
            a = (r) => {
              t
                ? e.push(r)
                : o(() => {
                    n(r);
                  });
            },
            s = () => {
              let t = e;
              (e = []),
                t.length &&
                  o(() => {
                    i(() => {
                      t.forEach((e) => {
                        n(e);
                      });
                    });
                  });
            };
          return {
            batch: (e) => {
              let n;
              t++;
              try {
                n = e();
              } finally {
                --t || s();
              }
              return n;
            },
            batchCalls:
              (e) =>
              (...t) => {
                a(() => {
                  e(...t);
                });
              },
            schedule: a,
            setNotifyFunction: (e) => {
              n = e;
            },
            setBatchNotifyFunction: (e) => {
              i = e;
            },
            setScheduler: (e) => {
              o = e;
            },
          };
        })();
    },
    7441: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => o });
      let r = "2.30.0",
        i = {
          getDocsUrl: ({ docsBaseUrl: e, docsPath: t = "", docsSlug: n }) =>
            t ? `${e ?? "https://viem.sh"}${t}${n ? `#${n}` : ""}` : void 0,
          version: `viem@${r}`,
        };
      class o extends Error {
        constructor(e, t = {}) {
          let n =
              t.cause instanceof o
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            a = (t.cause instanceof o && t.cause.docsPath) || t.docsPath,
            s = i.getDocsUrl?.({ ...t, docsPath: a });
          super(
            [
              e || "An error occurred.",
              "",
              ...(t.metaMessages ? [...t.metaMessages, ""] : []),
              ...(s ? [`Docs: ${s}`] : []),
              ...(n ? [`Details: ${n}`] : []),
              ...(i.version ? [`Version: ${i.version}`] : []),
            ].join("\n"),
            t.cause ? { cause: t.cause } : void 0
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            (this.details = n),
            (this.docsPath = a),
            (this.metaMessages = t.metaMessages),
            (this.name = t.name ?? this.name),
            (this.shortMessage = e),
            (this.version = r);
        }
        walk(e) {
          return (function e(t, n) {
            return n?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t && void 0 !== t.cause
              ? e(t.cause, n)
              : n
              ? null
              : t;
          })(this, e);
        }
      }
    },
    7612: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => s });
      var r = n(80844),
        i = n(67622),
        o = n(24578),
        a = n(70872);
      function s(e) {
        let t = e.replace(/^\.|\.$/gm, "");
        if (0 === t.length) return new Uint8Array(1);
        let n = new Uint8Array((0, r.Af)(t).byteLength + 2),
          s = 0,
          c = t.split(".");
        for (let e = 0; e < c.length; e++) {
          var l;
          let t = (0, r.Af)(c[e]);
          t.byteLength > 255 &&
            (t = (0, r.Af)(
              ((l = (function (e) {
                let t = new Uint8Array(32).fill(0);
                return e ? (0, a.q)(e) || (0, o.S)((0, r.Af)(e)) : (0, i.My)(t);
              })(c[e])),
              `[${l.slice(2)}]`)
            )),
            (n[s] = t.length),
            n.set(t, s + 1),
            (s += t.length + 1);
        }
        return n.byteLength !== s + 1 ? n.slice(0, s + 1) : n;
      }
    },
    7671: (e, t, n) => {
      "use strict";
      function r(e, { format: t }) {
        if (!t) return {};
        let n = {};
        return (
          !(function t(r) {
            for (let i of Object.keys(r))
              i in e && (n[i] = e[i]),
                r[i] &&
                  "object" == typeof r[i] &&
                  !Array.isArray(r[i]) &&
                  t(r[i]);
          })(t(e || {})),
          n
        );
      }
      n.d(t, { o: () => r });
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
          i = e.scale || 4;
        return {
          width: r,
          scale: r ? 4 : i,
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
          let i = n.modules.size,
            o = n.modules.data,
            a = t.getScale(i, r),
            s = Math.floor((i + 2 * r.margin) * a),
            c = r.margin * a,
            l = [r.color.light, r.color.dark];
          for (let t = 0; t < s; t++)
            for (let n = 0; n < s; n++) {
              let u = (t * s + n) * 4,
                d = r.color.light;
              t >= c &&
                n >= c &&
                t < s - c &&
                n < s - c &&
                (d =
                  l[
                    +!!o[Math.floor((t - c) / a) * i + Math.floor((n - c) / a)]
                  ]),
                (e[u++] = d.r),
                (e[u++] = d.g),
                (e[u++] = d.b),
                (e[u] = d.a);
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
    10231: (e, t, n) => {
      "use strict";
      async function r(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      n.d(t, { u: () => r });
    },
    10678: (e, t, n) => {
      "use strict";
      function r(e) {
        var t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e;
      }
      function i(e, t) {
        var n = {};
        if ("object" == typeof t)
          !(function e(t, n) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [],
              i = {};
            for (var o in t) {
              var a = t[o],
                s = [...r, o];
              "string" == typeof a || "number" == typeof a || null == a
                ? (i[o] = n(a, s))
                : "object" != typeof a || Array.isArray(a)
                ? console.warn(
                    'Skipping invalid key "'
                      .concat(
                        s.join("."),
                        '". Should be a string, number, null or object. Received: "'
                      )
                      .concat(Array.isArray(a) ? "Array" : typeof a, '"')
                  )
                : (i[o] = e(a, n, s));
            }
            return i;
          })(t, (t, i) => {
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
                  })(e, i)
                )
              ] = String(t));
          });
        else
          for (var i in e) {
            var o = e[i];
            null != o && (n[r(i)] = o);
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
      n.d(t, { D: () => i });
    },
    12228: (e, t, n) => {
      "use strict";
      n.d(t, { n: () => r });
      var r =
        '{\n  "connect_wallet": {\n    "label": "Connect Wallet",\n    "wrong_network": {\n      "label": "Wrong network"\n    }\n  },\n\n  "intro": {\n    "title": "What is a Wallet?",\n    "description": "A wallet is used to send, receive, store, and display digital assets. It\'s also a new way to log in, without needing to create new accounts and passwords on every website.",\n    "digital_asset": {\n      "title": "A Home for your Digital Assets",\n      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."\n    },\n    "login": {\n      "title": "A New Way to Log In",\n      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."\n    },\n    "get": {\n      "label": "Get a Wallet"\n    },\n    "learn_more": {\n      "label": "Learn More"\n    }\n  },\n\n  "sign_in": {\n    "label": "Verify your account",\n    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",\n    "message": {\n      "send": "Sign message",\n      "preparing": "Preparing message...",\n      "cancel": "Cancel",\n      "preparing_error": "Error preparing message, please retry!"\n    },\n    "signature": {\n      "waiting": "Waiting for signature...",\n      "verifying": "Verifying signature...",\n      "signing_error": "Error signing message, please retry!",\n      "verifying_error": "Error verifying signature, please retry!",\n      "oops_error": "Oops, something went wrong!"\n    }\n  },\n\n  "connect": {\n    "label": "Connect",\n    "title": "Connect a Wallet",\n    "new_to_ethereum": {\n      "description": "New to Ethereum wallets?",\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "learn_more": {\n      "label": "Learn more"\n    },\n    "recent": "Recent",\n    "status": {\n      "opening": "Opening %{wallet}...",\n      "connecting": "Connecting",\n      "connect_mobile": "Continue in %{wallet}",\n      "not_installed": "%{wallet} is not installed",\n      "not_available": "%{wallet} is not available",\n      "confirm": "Confirm connection in the extension",\n      "confirm_mobile": "Accept connection request in the wallet"\n    },\n    "secondary_action": {\n      "get": {\n        "description": "Don\'t have %{wallet}?",\n        "label": "GET"\n      },\n      "install": {\n        "label": "INSTALL"\n      },\n      "retry": {\n        "label": "RETRY"\n      }\n    },\n    "walletconnect": {\n      "description": {\n        "full": "Need the official WalletConnect modal?",\n        "compact": "Need the WalletConnect modal?"\n      },\n      "open": {\n        "label": "OPEN"\n      }\n    }\n  },\n\n  "connect_scan": {\n    "title": "Scan with %{wallet}",\n    "fallback_title": "Scan with your phone"\n  },\n\n  "connector_group": {\n    "installed": "Installed",\n    "recommended": "Recommended",\n    "other": "Other",\n    "popular": "Popular",\n    "more": "More",\n    "others": "Others"\n  },\n\n  "get": {\n    "title": "Get a Wallet",\n    "action": {\n      "label": "GET"\n    },\n    "mobile": {\n      "description": "Mobile Wallet"\n    },\n    "extension": {\n      "description": "Browser Extension"\n    },\n    "mobile_and_extension": {\n      "description": "Mobile Wallet and Extension"\n    },\n    "mobile_and_desktop": {\n      "description": "Mobile and Desktop Wallet"\n    },\n    "looking_for": {\n      "title": "Not what you\'re looking for?",\n      "mobile": {\n        "description": "Select a wallet on the main screen to get started with a different wallet provider."\n      },\n      "desktop": {\n        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",\n        "wide_description": "Select a wallet on the left to get started with a different wallet provider."\n      }\n    }\n  },\n\n  "get_options": {\n    "title": "Get started with %{wallet}",\n    "short_title": "Get %{wallet}",\n    "mobile": {\n      "title": "%{wallet} for Mobile",\n      "description": "Use the mobile wallet to explore the world of Ethereum.",\n      "download": {\n        "label": "Get the app"\n      }\n    },\n    "extension": {\n      "title": "%{wallet} for %{browser}",\n      "description": "Access your wallet right from your favorite web browser.",\n      "download": {\n        "label": "Add to %{browser}"\n      }\n    },\n    "desktop": {\n      "title": "%{wallet} for %{platform}",\n      "description": "Access your wallet natively from your powerful desktop.",\n      "download": {\n        "label": "Add to %{platform}"\n      }\n    }\n  },\n\n  "get_mobile": {\n    "title": "Install %{wallet}",\n    "description": "Scan with your phone to download on iOS or Android",\n    "continue": {\n      "label": "Continue"\n    }\n  },\n\n  "get_instructions": {\n    "mobile": {\n      "connect": {\n        "label": "Connect"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "extension": {\n      "refresh": {\n        "label": "Refresh"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "desktop": {\n      "connect": {\n        "label": "Connect"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    }\n  },\n\n  "chains": {\n    "title": "Switch Networks",\n    "wrong_network": "Wrong network detected, switch or disconnect to continue.",\n    "confirm": "Confirm in Wallet",\n    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",\n    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",\n    "disconnect": "Disconnect",\n    "connected": "Connected"\n  },\n\n  "profile": {\n    "disconnect": {\n      "label": "Disconnect"\n    },\n    "copy_address": {\n      "label": "Copy Address",\n      "copied": "Copied!"\n    },\n    "explorer": {\n      "label": "View more on explorer"\n    },\n    "transactions": {\n      "description": "%{appName} transactions will appear here...",\n      "description_fallback": "Your transactions will appear here...",\n      "recent": {\n        "title": "Recent Transactions"\n      },\n      "clear": {\n        "label": "Clear All"\n      }\n    }\n  },\n\n  "wallet_connectors": {\n    "argent": {\n      "qr_code": {\n        "step1": {\n          "description": "Put Argent on your home screen for faster access to your wallet.",\n          "title": "Open the Argent app"\n        },\n        "step2": {\n          "description": "Create a wallet and username, or import an existing wallet.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the Scan QR button"\n        }\n      }\n    },\n\n    "berasig": {\n      "extension": {\n        "step1": {\n          "title": "Install the BeraSig extension",\n          "description": "We recommend pinning BeraSig to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "best": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Best Wallet app",\n          "description": "Add Best Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "bifrost": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",\n          "title": "Open the Bifrost Wallet app"\n        },\n        "step2": {\n          "description": "Create or import a wallet using your recovery phrase.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      }\n    },\n\n    "bitget": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",\n          "title": "Open the Bitget Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Bitget Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "bitski": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",\n          "title": "Install the Bitski extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "bitverse": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Bitverse Wallet app",\n          "description": "Add Bitverse Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "bloom": {\n      "desktop": {\n        "step1": {\n          "title": "Open the Bloom Wallet app",\n          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "description": "Create or import a wallet using your recovery phrase.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",\n          "title": "Click on Connect"\n        }\n      }\n    },\n\n    "bybit": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bybit on your home screen for faster access to your wallet.",\n          "title": "Open the Bybit app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "Click at the top right of your browser and pin Bybit Wallet for easy access.",\n          "title": "Install the Bybit Wallet extension"\n        },\n        "step2": {\n          "description": "Create a new wallet or import an existing one.",\n          "title": "Create or Import a wallet"\n        },\n        "step3": {\n          "description": "Once you set up Bybit Wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "binance": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Binance on your home screen for faster access to your wallet.",\n          "title": "Open the Binance app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      }\n    },\n\n    "coin98": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",\n          "title": "Open the Coin98 Wallet app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",\n          "title": "Install the Coin98 Wallet extension"\n        },\n        "step2": {\n          "description": "Create a new wallet or import an existing one.",\n          "title": "Create or Import a wallet"\n        },\n        "step3": {\n          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "coinbase": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",\n          "title": "Open the Coinbase Wallet app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using the cloud backup feature.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Coinbase Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "compass": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Compass Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Compass Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "core": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Core on your home screen for faster access to your wallet.",\n          "title": "Open the Core app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",\n          "title": "Install the Core extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "fox": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting FoxWallet on your home screen for quicker access.",\n          "title": "Open the FoxWallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      }\n    },\n\n    "frontier": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",\n          "title": "Open the Frontier Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Frontier Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "im_token": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the imToken app",\n          "description": "Put imToken app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "iopay": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting ioPay on your home screen for faster access to your wallet.",\n          "title": "Open the ioPay app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      }\n    },\n\n    "kaikas": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Kaikas to your taskbar for quicker access to your wallet.",\n          "title": "Install the Kaikas extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kaikas app",\n          "description": "Put Kaikas app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kaia": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Kaia to your taskbar for quicker access to your wallet.",\n          "title": "Install the Kaia extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kaia app",\n          "description": "Put Kaia app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kraken": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kraken Wallet app",\n          "description": "Add Kraken Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kresus": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kresus Wallet app",\n          "description": "Add Kresus Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "magicEden": {\n      "extension": {\n        "step1": {\n          "title": "Install the Magic Eden extension",\n          "description": "We recommend pinning Magic Eden to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "metamask": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the MetaMask app",\n          "description": "We recommend putting MetaMask on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the MetaMask extension",\n          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "nestwallet": {\n      "extension": {\n        "step1": {\n          "title": "Install the NestWallet extension",\n          "description": "We recommend pinning NestWallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "okx": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the OKX Wallet app",\n          "description": "We recommend putting OKX Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the OKX Wallet extension",\n          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "omni": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Omni app",\n          "description": "Add Omni to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "1inch": {\n      "qr_code": {\n        "step1": {\n          "description": "Put 1inch Wallet on your home screen for faster access to your wallet.",\n          "title": "Open the 1inch Wallet app"\n        },\n        "step2": {\n          "description": "Create a wallet and username, or import an existing wallet.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the Scan QR button"\n        }\n      }\n    },\n\n    "token_pocket": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the TokenPocket app",\n          "description": "We recommend putting TokenPocket on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the TokenPocket extension",\n          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "trust": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Trust Wallet app",\n          "description": "Put Trust Wallet on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the Trust Wallet extension",\n          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."\n        },\n        "step2": {\n          "title": "Create or Import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "uniswap": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Uniswap app",\n          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "zerion": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Zerion app",\n          "description": "We recommend putting Zerion on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the Zerion extension",\n          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "rainbow": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Rainbow app",\n          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "You can easily backup your wallet using our backup feature on your phone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "enkrypt": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Enkrypt Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "frame": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",\n          "title": "Install Frame & the companion extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "one_key": {\n      "extension": {\n        "step1": {\n          "title": "Install the OneKey Wallet extension",\n          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "paraswap": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the ParaSwap app",\n          "description": "Add ParaSwap Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "phantom": {\n      "extension": {\n        "step1": {\n          "title": "Install the Phantom extension",\n          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "rabby": {\n      "extension": {\n        "step1": {\n          "title": "Install the Rabby extension",\n          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "ronin": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Ronin Wallet on your home screen for quicker access.",\n          "title": "Open the Ronin Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Ronin Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "ramper": {\n      "extension": {\n        "step1": {\n          "title": "Install the Ramper extension",\n          "description": "We recommend pinning Ramper to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "safeheron": {\n      "extension": {\n        "step1": {\n          "title": "Install the Core extension",\n          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "taho": {\n      "extension": {\n        "step1": {\n          "title": "Install the Taho extension",\n          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "wigwam": {\n      "extension": {\n        "step1": {\n          "title": "Install the Wigwam extension",\n          "description": "We recommend pinning Wigwam to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "talisman": {\n      "extension": {\n        "step1": {\n          "title": "Install the Talisman extension",\n          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import an Ethereum Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "xdefi": {\n      "extension": {\n        "step1": {\n          "title": "Install the XDEFI Wallet extension",\n          "description": "We recommend pinning XDEFI Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "zeal": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Zeal app",\n          "description": "Add Zeal Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      },\n      "extension": {\n        "step1": {\n          "title": "Install the Zeal extension",\n          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "safepal": {\n      "extension": {\n        "step1": {\n          "title": "Install the SafePal Wallet extension",\n          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."\n        },\n        "step2": {\n          "title": "Create or Import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the SafePal Wallet app",\n          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "desig": {\n      "extension": {\n        "step1": {\n          "title": "Install the Desig extension",\n          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "subwallet": {\n      "extension": {\n        "step1": {\n          "title": "Install the SubWallet extension",\n          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the SubWallet app",\n          "description": "We recommend putting SubWallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "clv": {\n      "extension": {\n        "step1": {\n          "title": "Install the CLV Wallet extension",\n          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the CLV Wallet app",\n          "description": "We recommend putting CLV Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "okto": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Okto app",\n          "description": "Add Okto to your home screen for quick access"\n        },\n        "step2": {\n          "title": "Create an MPC Wallet",\n          "description": "Create an account and generate a wallet"\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "ledger": {\n      "desktop": {\n        "step1": {\n          "title": "Open the Ledger Live app",\n          "description": "We recommend putting Ledger Live on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Set up your Ledger",\n          "description": "Set up a new Ledger or connect to an existing one."\n        },\n        "step3": {\n          "title": "Connect",\n          "description": "A connection prompt will appear for you to connect your wallet."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Ledger Live app",\n          "description": "We recommend putting Ledger Live on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Set up your Ledger",\n          "description": "You can either sync with the desktop app or connect your Ledger."\n        },\n        "step3": {\n          "title": "Scan the code",\n          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "valora": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Valora app",\n          "description": "We recommend putting Valora on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "gate": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Gate app",\n          "description": "We recommend putting Gate on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n      "extension": {\n        "step1": {\n          "title": "Install the Gate extension",\n          "description": "We recommend pinning Gate to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "xportal": {\n      "qr_code": {\n        "step1": {\n          "description": "Put xPortal on your home screen for faster access to your wallet.",\n          "title": "Open the xPortal app"\n        },\n        "step2": {\n          "description": "Create a wallet or import an existing one.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the Scan QR button"\n        }\n      }\n    },\n\n    "mew": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting MEW Wallet on your home screen for quicker access.",\n          "title": "Open the MEW Wallet app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using the cloud backup feature.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      }\n    }\n  },\n\n  "zilpay": {\n    "qr_code": {\n      "step1": {\n        "title": "Open the ZilPay app",\n        "description": "Add ZilPay to your home screen for faster access to your wallet."\n      },\n      "step2": {\n        "title": "Create or Import a Wallet",\n        "description": "Create a new wallet or import an existing one."\n      },\n      "step3": {\n        "title": "Tap the scan button",\n        "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n      }\n    }\n  }\n}\n';
    },
    13423: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => p, k: () => y });
      var r = n(99702),
        i = n(36444),
        o = n(7441),
        a = n(94201),
        s = n(81757),
        c = n(79731),
        l = n(36984),
        u = n(87094),
        d = n(93727),
        h = n(67622),
        f = n(38697);
      function p(e, t) {
        if (e.length !== t.length)
          throw new r.YE({ expectedLength: e.length, givenLength: t.length });
        let n = m(
          (function ({ params: e, values: t }) {
            let n = [];
            for (let p = 0; p < e.length; p++)
              n.push(
                (function e({ param: t, value: n }) {
                  let p = y(t.type);
                  if (p) {
                    let [i, o] = p;
                    return (function (t, { length: n, param: i }) {
                      let o = null === n;
                      if (!Array.isArray(t)) throw new r.dm(t);
                      if (!o && t.length !== n)
                        throw new r.Nc({
                          expectedLength: n,
                          givenLength: t.length,
                          type: `${i.type}[${n}]`,
                        });
                      let a = !1,
                        s = [];
                      for (let n = 0; n < t.length; n++) {
                        let r = e({ param: i, value: t[n] });
                        r.dynamic && (a = !0), s.push(r);
                      }
                      if (o || a) {
                        let e = m(s);
                        if (o) {
                          let t = (0, h.cK)(s.length, { size: 32 });
                          return {
                            dynamic: !0,
                            encoded: s.length > 0 ? (0, c.xW)([t, e]) : t,
                          };
                        }
                        if (a) return { dynamic: !0, encoded: e };
                      }
                      return {
                        dynamic: !1,
                        encoded: (0, c.xW)(s.map(({ encoded: e }) => e)),
                      };
                    })(n, { length: i, param: { ...t, type: o } });
                  }
                  if ("tuple" === t.type)
                    return (function (t, { param: n }) {
                      let r = !1,
                        i = [];
                      for (let o = 0; o < n.components.length; o++) {
                        let a = n.components[o],
                          s = Array.isArray(t) ? o : a.name,
                          c = e({ param: a, value: t[s] });
                        i.push(c), c.dynamic && (r = !0);
                      }
                      return {
                        dynamic: r,
                        encoded: r
                          ? m(i)
                          : (0, c.xW)(i.map(({ encoded: e }) => e)),
                      };
                    })(n, { param: t });
                  if ("address" === t.type) {
                    var b = n;
                    if (!(0, s.P)(b)) throw new i.M({ address: b });
                    return { dynamic: !1, encoded: (0, l.db)(b.toLowerCase()) };
                  }
                  if ("bool" === t.type) {
                    var g = n;
                    if ("boolean" != typeof g)
                      throw new o.C(
                        `Invalid boolean value: "${g}" (type: ${typeof g}). Expected: \`true\` or \`false\`.`
                      );
                    return { dynamic: !1, encoded: (0, l.db)((0, h.$P)(g)) };
                  }
                  if (t.type.startsWith("uint") || t.type.startsWith("int")) {
                    let e = t.type.startsWith("int"),
                      [, , r = "256"] = f.Ge.exec(t.type) ?? [];
                    return (function (e, { signed: t, size: n = 256 }) {
                      if ("number" == typeof n) {
                        let r = 2n ** (BigInt(n) - (t ? 1n : 0n)) - 1n,
                          i = t ? -r - 1n : 0n;
                        if (e > r || e < i)
                          throw new a.Ty({
                            max: r.toString(),
                            min: i.toString(),
                            signed: t,
                            size: n / 8,
                            value: e.toString(),
                          });
                      }
                      return {
                        dynamic: !1,
                        encoded: (0, h.cK)(e, { size: 32, signed: t }),
                      };
                    })(n, { signed: e, size: Number(r) });
                  }
                  if (t.type.startsWith("bytes"))
                    return (function (e, { param: t }) {
                      let [, n] = t.type.split("bytes"),
                        i = (0, u.E)(e);
                      if (!n) {
                        let t = e;
                        return (
                          i % 32 != 0 &&
                            (t = (0, l.db)(t, {
                              dir: "right",
                              size: 32 * Math.ceil((e.length - 2) / 2 / 32),
                            })),
                          {
                            dynamic: !0,
                            encoded: (0, c.xW)([
                              (0, l.db)((0, h.cK)(i, { size: 32 })),
                              t,
                            ]),
                          }
                        );
                      }
                      if (i !== Number.parseInt(n))
                        throw new r.gH({
                          expectedSize: Number.parseInt(n),
                          value: e,
                        });
                      return {
                        dynamic: !1,
                        encoded: (0, l.db)(e, { dir: "right" }),
                      };
                    })(n, { param: t });
                  if ("string" === t.type) {
                    var w = n;
                    let e = (0, h.i3)(w),
                      t = Math.ceil((0, u.E)(e) / 32),
                      r = [];
                    for (let n = 0; n < t; n++)
                      r.push(
                        (0, l.db)((0, d.di)(e, 32 * n, (n + 1) * 32), {
                          dir: "right",
                        })
                      );
                    return {
                      dynamic: !0,
                      encoded: (0, c.xW)([
                        (0, l.db)((0, h.cK)((0, u.E)(e), { size: 32 })),
                        ...r,
                      ]),
                    };
                  }
                  throw new r.nK(t.type, {
                    docsPath: "/docs/contract/encodeAbiParameters",
                  });
                })({ param: e[p], value: t[p] })
              );
            return n;
          })({ params: e, values: t })
        );
        return 0 === n.length ? "0x" : n;
      }
      function m(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let { dynamic: r, encoded: i } = e[n];
          r ? (t += 32) : (t += (0, u.E)(i));
        }
        let n = [],
          r = [],
          i = 0;
        for (let o = 0; o < e.length; o++) {
          let { dynamic: a, encoded: s } = e[o];
          a
            ? (n.push((0, h.cK)(t + i, { size: 32 })),
              r.push(s),
              (i += (0, u.E)(s)))
            : n.push(s);
        }
        return (0, c.xW)([...n, ...r]);
      }
      function y(e) {
        let t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
    },
    13861: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => i });
      var r = n(30445);
      function i({ blockNumber: e, chain: t, contract: n }) {
        let i = t?.contracts?.[n];
        if (!i) throw new r.rj({ chain: t, contract: { name: n } });
        if (e && i.blockCreated && i.blockCreated > e)
          throw new r.rj({
            blockNumber: e,
            chain: t,
            contract: { name: n, blockCreated: i.blockCreated },
          });
        return i.address;
      }
    },
    14493: (e, t, n) => {
      "use strict";
      n.d(t, {
        Ag: () => a,
        Rm: () => l,
        SJ: () => c,
        _: () => u,
        b2: () => i,
        oX: () => s,
        v2: () => r,
      });
      let r = [
          {
            inputs: [
              {
                components: [
                  { name: "target", type: "address" },
                  { name: "allowFailure", type: "bool" },
                  { name: "callData", type: "bytes" },
                ],
                name: "calls",
                type: "tuple[]",
              },
            ],
            name: "aggregate3",
            outputs: [
              {
                components: [
                  { name: "success", type: "bool" },
                  { name: "returnData", type: "bytes" },
                ],
                name: "returnData",
                type: "tuple[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        i = [
          {
            name: "query",
            type: "function",
            stateMutability: "view",
            inputs: [
              {
                type: "tuple[]",
                name: "queries",
                components: [
                  { type: "address", name: "sender" },
                  { type: "string[]", name: "urls" },
                  { type: "bytes", name: "data" },
                ],
              },
            ],
            outputs: [
              { type: "bool[]", name: "failures" },
              { type: "bytes[]", name: "responses" },
            ],
          },
          {
            name: "HttpError",
            type: "error",
            inputs: [
              { type: "uint16", name: "status" },
              { type: "string", name: "message" },
            ],
          },
        ],
        o = [
          { inputs: [], name: "ResolverNotFound", type: "error" },
          { inputs: [], name: "ResolverWildcardNotSupported", type: "error" },
          { inputs: [], name: "ResolverNotContract", type: "error" },
          {
            inputs: [{ name: "returnData", type: "bytes" }],
            name: "ResolverError",
            type: "error",
          },
          {
            inputs: [
              {
                components: [
                  { name: "status", type: "uint16" },
                  { name: "message", type: "string" },
                ],
                name: "errors",
                type: "tuple[]",
              },
            ],
            name: "HttpError",
            type: "error",
          },
        ],
        a = [
          ...o,
          {
            name: "resolve",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes" },
              { name: "data", type: "bytes" },
            ],
            outputs: [
              { name: "", type: "bytes" },
              { name: "address", type: "address" },
            ],
          },
          {
            name: "resolve",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes" },
              { name: "data", type: "bytes" },
              { name: "gateways", type: "string[]" },
            ],
            outputs: [
              { name: "", type: "bytes" },
              { name: "address", type: "address" },
            ],
          },
        ],
        s = [
          ...o,
          {
            name: "reverse",
            type: "function",
            stateMutability: "view",
            inputs: [{ type: "bytes", name: "reverseName" }],
            outputs: [
              { type: "string", name: "resolvedName" },
              { type: "address", name: "resolvedAddress" },
              { type: "address", name: "reverseResolver" },
              { type: "address", name: "resolver" },
            ],
          },
          {
            name: "reverse",
            type: "function",
            stateMutability: "view",
            inputs: [
              { type: "bytes", name: "reverseName" },
              { type: "string[]", name: "gateways" },
            ],
            outputs: [
              { type: "string", name: "resolvedName" },
              { type: "address", name: "resolvedAddress" },
              { type: "address", name: "reverseResolver" },
              { type: "address", name: "resolver" },
            ],
          },
        ],
        c = [
          {
            name: "text",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "key", type: "string" },
            ],
            outputs: [{ name: "", type: "string" }],
          },
        ],
        l = [
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [{ name: "name", type: "bytes32" }],
            outputs: [{ name: "", type: "address" }],
          },
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "coinType", type: "uint256" },
            ],
            outputs: [{ name: "", type: "bytes" }],
          },
        ],
        u = [
          {
            inputs: [
              { name: "_signer", type: "address" },
              { name: "_hash", type: "bytes32" },
              { name: "_signature", type: "bytes" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { name: "_signer", type: "address" },
              { name: "_hash", type: "bytes32" },
              { name: "_signature", type: "bytes" },
            ],
            outputs: [{ type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
            name: "isValidSig",
          },
        ];
    },
    15071: (e, t, n) => {
      "use strict";
      n.d(t, { v: () => l });
      var r = n(55394),
        i = n(70030),
        o = n(62108),
        a = n(43484),
        s = n(18224),
        c = n(53031);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: l, query: u = {} } = n,
          d = (0, c.U)(n),
          h = (0, s.i)({ config: d }),
          f = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, scopeKey: o, ...a } = t[1];
                if (!n) throw Error("address is required");
                let { chainId: s, ...c } = { ...a, address: n },
                  l = e.getClient({ chainId: s });
                return (0, i.T)(l, r.s, "getEnsName")(c);
              },
              queryKey: (function (e = {}) {
                return ["ensName", (0, o.xO)(e)];
              })(t),
            };
          })(d, { ...n, chainId: null != (e = n.chainId) ? e : h }),
          p = !!(l && (null == (t = u.enabled) || t));
        return (0, a.IT)({ ...u, ...f, enabled: p });
      }
    },
    15313: (e, t, n) => {
      "use strict";
      n.d(t, { LX: () => r, WN: () => i, nP: () => o });
      let r =
          "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
        i =
          "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe",
        o =
          "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";
    },
    15484: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => r });
      var r = n(82661);
    },
    15580: (e, t, n) => {
      let r = n(43585),
        i = n(46087);
      function o(e) {
        (this.mode = r.KANJI), (this.data = e);
      }
      (o.getBitsLength = function (e) {
        return 13 * e;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (e) {
          let t;
          for (t = 0; t < this.data.length; t++) {
            let n = i.toSJIS(this.data[t]);
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
        (e.exports = o);
    },
    16652: (e, t, n) => {
      "use strict";
      n.d(t, { B: () => i });
      var r = n(45446);
      function i(e) {
        return "function" === e.type
          ? `function ${e.name}(${(0, r.Q)(e.inputs)})${
              e.stateMutability && "nonpayable" !== e.stateMutability
                ? ` ${e.stateMutability}`
                : ""
            }${e.outputs?.length ? ` returns (${(0, r.Q)(e.outputs)})` : ""}`
          : "event" === e.type
          ? `event ${e.name}(${(0, r.Q)(e.inputs)})`
          : "error" === e.type
          ? `error ${e.name}(${(0, r.Q)(e.inputs)})`
          : "constructor" === e.type
          ? `constructor(${(0, r.Q)(e.inputs)})${
              "payable" === e.stateMutability ? " payable" : ""
            }`
          : "fallback" === e.type
          ? `fallback() external${
              "payable" === e.stateMutability ? " payable" : ""
            }`
          : "receive() external payable";
      }
    },
    16860: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => c });
      var r = n(9894),
        i = n(77752),
        o = n(35883),
        a = n(81379),
        s = n(67622);
      function c(e = {}) {
        var t, l;
        let u, d, h, f, p, m, y, b, g;
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
                    ).map((e) => (0, o.b)(e));
                  h ||
                    ((h = this.onAccountsChanged.bind(this)),
                    t.on("accountsChanged", h)),
                    f ||
                      ((f = this.onChainChanged.bind(this)),
                      t.on("chainChanged", f)),
                    p ||
                      ((p = this.onDisconnect.bind(this)),
                      t.on("disconnect", p));
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
                h && (e.removeListener("accountsChanged", h), (h = void 0)),
                  f && (e.removeListener("chainChanged", f), (f = void 0)),
                  p && (e.removeListener("disconnect", p), (p = void 0)),
                  e.disconnect(),
                  e.close();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, o.b)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              async getProvider() {
                if (!d) {
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
                    i =
                      e.chains.find((e) =>
                        t.chainId ? e.id === t.chainId : e.id === r
                      ) || e.chains[0],
                    o = t.chainId || i?.id,
                    a = t.jsonRpcUrl || i?.rpcUrls.default.http[0];
                  d = u.makeWeb3Provider(a, o);
                }
                return d;
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
                if (!r) throw new a.ch(new i.nk());
                let o = await this.getProvider();
                try {
                  return (
                    await o.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, s.cK)(r.id) }],
                    }),
                    r
                  );
                } catch (e) {
                  if (4902 === e.code)
                    try {
                      let e, i;
                      (e = t?.blockExplorerUrls
                        ? t.blockExplorerUrls
                        : r.blockExplorers?.default.url
                        ? [r.blockExplorers?.default.url]
                        : []),
                        (i = t?.rpcUrls?.length
                          ? t.rpcUrls
                          : [r.rpcUrls.default?.http[0] ?? ""]);
                      let a = {
                        blockExplorerUrls: e,
                        chainId: (0, s.cK)(n),
                        chainName: t?.chainName ?? r.name,
                        iconUrls: t?.iconUrls,
                        nativeCurrency: t?.nativeCurrency ?? r.nativeCurrency,
                        rpcUrls: i,
                      };
                      return (
                        await o.request({
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
                      accounts: t.map((e) => (0, o.b)(e)),
                    });
              },
              onChainChanged(t) {
                let n = Number(t);
                e.emitter.emit("change", { chainId: n });
              },
              async onDisconnect(t) {
                e.emitter.emit("disconnect");
                let n = await this.getProvider();
                h && (n.removeListener("accountsChanged", h), (h = void 0)),
                  f && (n.removeListener("chainChanged", f), (f = void 0)),
                  p && (n.removeListener("disconnect", p), (p = void 0));
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
                    ).map((e) => (0, o.b)(e));
                  y ||
                    ((y = this.onAccountsChanged.bind(this)),
                    n.on("accountsChanged", y)),
                    b ||
                      ((b = this.onChainChanged.bind(this)),
                      n.on("chainChanged", b)),
                    g ||
                      ((g = this.onDisconnect.bind(this)),
                      n.on("disconnect", g));
                  let i = await this.getChainId();
                  if (e && i !== e) {
                    let t = await this.switchChain({ chainId: e }).catch(
                      (e) => {
                        if (e.code === a.vx.code) throw e;
                        return { id: i };
                      }
                    );
                    i = t?.id ?? i;
                  }
                  return { accounts: r, chainId: i };
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
                y && (e.removeListener("accountsChanged", y), (y = void 0)),
                  b && (e.removeListener("chainChanged", b), (b = void 0)),
                  g && (e.removeListener("disconnect", g), (g = void 0)),
                  e.disconnect(),
                  e.close?.();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, o.b)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              async getProvider() {
                if (!m) {
                  let t =
                      "string" == typeof l.preference
                        ? { options: l.preference }
                        : {
                            ...l.preference,
                            options: l.preference?.options ?? "all",
                          },
                    { createCoinbaseWalletSDK: r } = await Promise.all([
                      n.e(1034),
                      n.e(3746),
                    ]).then(n.bind(n, 3746));
                  m = r({
                    ...l,
                    appChainIds: e.chains.map((e) => e.id),
                    preference: t,
                  }).getProvider();
                }
                return m;
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
                if (!r) throw new a.ch(new i.nk());
                let o = await this.getProvider();
                try {
                  return (
                    await o.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, s.cK)(r.id) }],
                    }),
                    r
                  );
                } catch (e) {
                  if (4902 === e.code)
                    try {
                      let e, i;
                      (e = t?.blockExplorerUrls
                        ? t.blockExplorerUrls
                        : r.blockExplorers?.default.url
                        ? [r.blockExplorers?.default.url]
                        : []),
                        (i = t?.rpcUrls?.length
                          ? t.rpcUrls
                          : [r.rpcUrls.default?.http[0] ?? ""]);
                      let a = {
                        blockExplorerUrls: e,
                        chainId: (0, s.cK)(n),
                        chainName: t?.chainName ?? r.name,
                        iconUrls: t?.iconUrls,
                        nativeCurrency: t?.nativeCurrency ?? r.nativeCurrency,
                        rpcUrls: i,
                      };
                      return (
                        await o.request({
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
                      accounts: t.map((e) => (0, o.b)(e)),
                    });
              },
              onChainChanged(t) {
                let n = Number(t);
                e.emitter.emit("change", { chainId: n });
              },
              async onDisconnect(t) {
                e.emitter.emit("disconnect");
                let n = await this.getProvider();
                y && (n.removeListener("accountsChanged", y), (y = void 0)),
                  b && (n.removeListener("chainChanged", b), (b = void 0)),
                  g && (n.removeListener("disconnect", g), (g = void 0));
              },
            })));
      }
      c.type = "coinbaseWallet";
    },
    16862: (e, t, n) => {
      let r = n(94676),
        i = n(55908),
        o = n(46514),
        a = n(62013);
      function s(e, t, n, o, a) {
        let s = [].slice.call(arguments, 1),
          c = s.length,
          l = "function" == typeof s[c - 1];
        if (!l && !r()) throw Error("Callback required as last argument");
        if (l) {
          if (c < 2) throw Error("Too few arguments provided");
          2 === c
            ? ((a = n), (n = t), (t = o = void 0))
            : 3 === c &&
              (t.getContext && void 0 === a
                ? ((a = o), (o = void 0))
                : ((a = o), (o = n), (n = t), (t = void 0)));
        } else {
          if (c < 1) throw Error("Too few arguments provided");
          return (
            1 === c
              ? ((n = t), (t = o = void 0))
              : 2 !== c || t.getContext || ((o = n), (n = t), (t = void 0)),
            new Promise(function (r, a) {
              try {
                let a = i.create(n, o);
                r(e(a, t, o));
              } catch (e) {
                a(e);
              }
            })
          );
        }
        try {
          let r = i.create(n, o);
          a(null, e(r, t, o));
        } catch (e) {
          a(e);
        }
      }
      (t.create = i.create),
        (t.toCanvas = s.bind(null, o.render)),
        (t.toDataURL = s.bind(null, o.renderToDataURL)),
        (t.toString = s.bind(null, function (e, t, n) {
          return a.render(e, n);
        }));
    },
    17130: (e, t, n) => {
      "use strict";
      n.d(t, {
        FO: () => m,
        If: () => A,
        Ji: () => d,
        Rv: () => c,
        WL: () => p,
        Yo: () => g,
        ej: () => h,
        fC: () => E,
        iB: () => l,
        kz: () => a,
        l9: () => b,
        pc: () => o,
        sP: () => C,
        v7: () => I,
        v8: () => v,
      });
      var r = n(59126);
      let i = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
      function o(e) {
        return i.test(e);
      }
      function a(e) {
        return (0, r.Yv)(i, e);
      }
      let s = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
      function c(e) {
        return s.test(e);
      }
      function l(e) {
        return (0, r.Yv)(s, e);
      }
      let u =
        /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
      function d(e) {
        return u.test(e);
      }
      function h(e) {
        return (0, r.Yv)(u, e);
      }
      let f =
        /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
      function p(e) {
        return f.test(e);
      }
      function m(e) {
        return (0, r.Yv)(f, e);
      }
      let y =
        /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
      function b(e) {
        return y.test(e);
      }
      function g(e) {
        return (0, r.Yv)(y, e);
      }
      let w = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
      function v(e) {
        return w.test(e);
      }
      function A(e) {
        return (0, r.Yv)(w, e);
      }
      let x = /^receive\(\) external payable$/;
      function C(e) {
        return x.test(e);
      }
      let E = new Set(["indexed"]),
        I = new Set(["calldata", "memory", "storage"]);
    },
    17255: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => o });
      var r = n(36444),
        i = n(81757);
      function o(e, t) {
        if (!(0, i.P)(e, { strict: !1 })) throw new r.M({ address: e });
        if (!(0, i.P)(t, { strict: !1 })) throw new r.M({ address: t });
        return e.toLowerCase() === t.toLowerCase();
      }
    },
    17829: (e, t, n) => {
      "use strict";
      n.d(t, { sc: () => u });
      var r = n(24526),
        i = n(19989);
      class o extends i.Vw {
        constructor(e, t, n, r) {
          super(),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = n),
            (this.isLE = r),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, i.O8)(this.buffer));
        }
        update(e) {
          (0, r.CC)(this);
          let { view: t, buffer: n, blockLen: o } = this,
            a = (e = (0, i.ZJ)(e)).length;
          for (let r = 0; r < a; ) {
            let s = Math.min(o - this.pos, a - r);
            if (s === o) {
              let t = (0, i.O8)(e);
              for (; o <= a - r; r += o) this.process(t, r);
              continue;
            }
            n.set(e.subarray(r, r + s), this.pos),
              (this.pos += s),
              (r += s),
              this.pos === o && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          (0, r.CC)(this), (0, r.Ht)(e, this), (this.finished = !0);
          let { buffer: t, view: n, blockLen: o, isLE: a } = this,
            { pos: s } = this;
          (t[s++] = 128),
            this.buffer.subarray(s).fill(0),
            this.padOffset > o - s && (this.process(n, 0), (s = 0));
          for (let e = s; e < o; e++) t[e] = 0;
          !(function (e, t, n, r) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, n, r);
            let i = BigInt(32),
              o = BigInt(0xffffffff),
              a = Number((n >> i) & o),
              s = Number(n & o),
              c = 4 * !!r,
              l = 4 * !r;
            e.setUint32(t + c, a, r), e.setUint32(t + l, s, r);
          })(n, o - 8, BigInt(8 * this.length), a),
            this.process(n, 0);
          let c = (0, i.O8)(e),
            l = this.outputLen;
          if (l % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let u = l / 4,
            d = this.get();
          if (u > d.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < u; e++) c.setUint32(4 * e, d[e], a);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let n = e.slice(0, t);
          return this.destroy(), n;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: n,
            length: r,
            finished: i,
            destroyed: o,
            pos: a,
          } = this;
          return (
            (e.length = r),
            (e.pos = a),
            (e.finished = i),
            (e.destroyed = o),
            r % t && e.buffer.set(n),
            e
          );
        }
      }
      let a = new Uint32Array([
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
          0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
          0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
          0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d,
          0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967,
          0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354,
          0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585,
          0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
          0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee,
          0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb,
          0xbef9a3f7, 0xc67178f2,
        ]),
        s = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        c = new Uint32Array(64);
      class l extends o {
        constructor(e = 32) {
          super(64, e, 8, !1),
            (this.A = 0 | s[0]),
            (this.B = 0 | s[1]),
            (this.C = 0 | s[2]),
            (this.D = 0 | s[3]),
            (this.E = 0 | s[4]),
            (this.F = 0 | s[5]),
            (this.G = 0 | s[6]),
            (this.H = 0 | s[7]);
        }
        get() {
          let { A: e, B: t, C: n, D: r, E: i, F: o, G: a, H: s } = this;
          return [e, t, n, r, i, o, a, s];
        }
        set(e, t, n, r, i, o, a, s) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | i),
            (this.F = 0 | o),
            (this.G = 0 | a),
            (this.H = 0 | s);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4) c[n] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = c[e - 15],
              n = c[e - 2],
              r = (0, i.Ow)(t, 7) ^ (0, i.Ow)(t, 18) ^ (t >>> 3),
              o = (0, i.Ow)(n, 17) ^ (0, i.Ow)(n, 19) ^ (n >>> 10);
            c[e] = (o + c[e - 7] + r + c[e - 16]) | 0;
          }
          let { A: n, B: r, C: o, D: s, E: l, F: u, G: d, H: h } = this;
          for (let e = 0; e < 64; e++) {
            var f, p, m, y;
            let t =
                (h +
                  ((0, i.Ow)(l, 6) ^ (0, i.Ow)(l, 11) ^ (0, i.Ow)(l, 25)) +
                  (((f = l) & u) ^ (~f & d)) +
                  a[e] +
                  c[e]) |
                0,
              b =
                (((0, i.Ow)(n, 2) ^ (0, i.Ow)(n, 13) ^ (0, i.Ow)(n, 22)) +
                  (((p = n) & (m = r)) ^ (p & (y = o)) ^ (m & y))) |
                0;
            (h = d),
              (d = u),
              (u = l),
              (l = (s + t) | 0),
              (s = o),
              (o = r),
              (r = n),
              (n = (t + b) | 0);
          }
          (n = (n + this.A) | 0),
            (r = (r + this.B) | 0),
            (o = (o + this.C) | 0),
            (s = (s + this.D) | 0),
            (l = (l + this.E) | 0),
            (u = (u + this.F) | 0),
            (d = (d + this.G) | 0),
            (h = (h + this.H) | 0),
            this.set(n, r, o, s, l, u, d, h);
        }
        roundClean() {
          c.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let u = (0, i.ld)(() => new l());
    },
    18224: (e, t, n) => {
      "use strict";
      function r(e) {
        return e.state.chainId;
      }
      n.d(t, { i: () => a });
      var i = n(12115),
        o = n(53031);
      function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, o.U)(e);
        return (0, i.useSyncExternalStore)(
          (e) =>
            (function (e, t) {
              let { onChange: n } = t;
              return e.subscribe((e) => e.chainId, n);
            })(t, { onChange: e }),
          () => r(t),
          () => r(t)
        );
      }
    },
    19405: (e, t, n) => {
      "use strict";
      function r(e) {
        return "string" == typeof e ? { address: e, type: "json-rpc" } : e;
      }
      n.d(t, { J: () => r });
    },
    19989: (e, t, n) => {
      "use strict";
      n.d(t, {
        Vw: () => y,
        Fc: () => l,
        My: () => h,
        Id: () => m,
        O8: () => a,
        qv: () => c,
        po: () => g,
        Ow: () => s,
        ZJ: () => p,
        DH: () => o,
        ld: () => b,
      });
      let r =
        "object" == typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0;
      var i = n(24526);
      function o(e) {
        return new Uint32Array(
          e.buffer,
          e.byteOffset,
          Math.floor(e.byteLength / 4)
        );
      }
      function a(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function s(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      let c = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
      function l(e) {
        for (let n = 0; n < e.length; n++) {
          var t;
          e[n] =
            (((t = e[n]) << 24) & 0xff000000) |
            ((t << 8) & 0xff0000) |
            ((t >>> 8) & 65280) |
            ((t >>> 24) & 255);
        }
      }
      let u =
          "function" == typeof Uint8Array.from([]).toHex &&
          "function" == typeof Uint8Array.fromHex,
        d = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function h(e) {
        if (((0, i.DO)(e), u)) return e.toHex();
        let t = "";
        for (let n = 0; n < e.length; n++) t += d[e[n]];
        return t;
      }
      let f = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function p(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error("utf8ToBytes expected string, got " + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          (0, i.DO)(e),
          e
        );
      }
      function m(...e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          (0, i.DO)(r), (t += r.length);
        }
        let n = new Uint8Array(t);
        for (let t = 0, r = 0; t < e.length; t++) {
          let i = e[t];
          n.set(i, r), (r += i.length);
        }
        return n;
      }
      class y {
        clone() {
          return this._cloneInto();
        }
      }
      function b(e) {
        let t = (t) => e().update(p(t)).digest(),
          n = e();
        return (
          (t.outputLen = n.outputLen),
          (t.blockLen = n.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function g(e = 32) {
        if (r && "function" == typeof r.getRandomValues)
          return r.getRandomValues(new Uint8Array(e));
        if (r && "function" == typeof r.randomBytes)
          return Uint8Array.from(r.randomBytes(e));
        throw Error("crypto.getRandomValues must be defined");
      }
    },
    20760: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => s });
      var r = n(99702),
        i = n(79731),
        o = n(13423);
      let a = "/docs/contract/encodeDeployData";
      function s(e) {
        let { abi: t, args: n, bytecode: s } = e;
        if (!n || 0 === n.length) return s;
        let c = t.find((e) => "type" in e && "constructor" === e.type);
        if (!c) throw new r.YW({ docsPath: a });
        if (!("inputs" in c) || !c.inputs || 0 === c.inputs.length)
          throw new r.YF({ docsPath: a });
        let l = (0, o.h)(c.inputs, n);
        return (0, i.aP)([s, l]);
      }
    },
    21135: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => o });
      var r = n(93727),
        i = n(68629);
      let o = (e) => (0, r.di)((0, i.k)(e), 0, 4);
    },
    21159: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => o, B: () => i });
      var r = n(99702);
      function i(e, { includeName: t = !1 } = {}) {
        if ("function" !== e.type && "event" !== e.type && "error" !== e.type)
          throw new r.d_(e.type);
        return `${e.name}(${o(e.inputs, { includeName: t })})`;
      }
      function o(e, { includeName: t = !1 } = {}) {
        return e
          ? e
              .map((e) =>
                (function (e, { includeName: t }) {
                  return e.type.startsWith("tuple")
                    ? `(${o(e.components, { includeName: t })})${e.type.slice(
                        5
                      )}`
                    : e.type + (t && e.name ? ` ${e.name}` : "");
                })(e, { includeName: t })
              )
              .join(t ? ", " : ",")
          : "";
      }
    },
    21239: (e, t, n) => {
      "use strict";
      n.d(t, { t: () => o });
      var r = n(25910),
        i = n(52020),
        o = new (class extends r.Q {
          #a = !0;
          #s;
          #c;
          constructor() {
            super(),
              (this.#c = (e) => {
                if (!i.S$ && window.addEventListener) {
                  let t = () => e(!0),
                    n = () => e(!1);
                  return (
                    window.addEventListener("online", t, !1),
                    window.addEventListener("offline", n, !1),
                    () => {
                      window.removeEventListener("online", t),
                        window.removeEventListener("offline", n);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#s || this.setEventListener(this.#c);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#s?.(), (this.#s = void 0));
          }
          setEventListener(e) {
            (this.#c = e),
              this.#s?.(),
              (this.#s = e(this.setOnline.bind(this)));
          }
          setOnline(e) {
            this.#a !== e &&
              ((this.#a = e),
              this.listeners.forEach((t) => {
                t(e);
              }));
          }
          isOnline() {
            return this.#a;
          }
        })();
    },
    22436: (e, t, n) => {
      "use strict";
      var r = n(12115),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        o = r.useState,
        a = r.useEffect,
        s = r.useLayoutEffect,
        c = r.useDebugValue;
      function l(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !i(e, n);
        } catch (e) {
          return !0;
        }
      }
      var u =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var n = t(),
                r = o({ inst: { value: n, getSnapshot: t } }),
                i = r[0].inst,
                u = r[1];
              return (
                s(
                  function () {
                    (i.value = n), (i.getSnapshot = t), l(i) && u({ inst: i });
                  },
                  [e, n, t]
                ),
                a(
                  function () {
                    return (
                      l(i) && u({ inst: i }),
                      e(function () {
                        l(i) && u({ inst: i });
                      })
                    );
                  },
                  [e]
                ),
                c(n),
                n
              );
            };
      t.useSyncExternalStore =
        void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : u;
    },
    22732: (e, t, n) => {
      "use strict";
      function r(e) {
        return { formatters: void 0, fees: void 0, serializers: void 0, ...e };
      }
      n.d(t, { x: () => r });
    },
    23008: (e, t, n) => {
      "use strict";
      n.d(t, { iY: () => c });
      var r = n(99702),
        i = n(32840),
        o = n(81757),
        a = n(399),
        s = n(21135);
      function c(e) {
        let t,
          { abi: n, args: c = [], name: l } = e,
          u = (0, i.q)(l, { strict: !1 }),
          d = n.filter((e) =>
            u
              ? "function" === e.type
                ? (0, s.V)(e) === l
                : "event" === e.type && (0, a.h)(e) === l
              : "name" in e && e.name === l
          );
        if (0 !== d.length) {
          if (1 === d.length) return d[0];
          for (let e of d) {
            if ("inputs" in e) {
              if (!c || 0 === c.length) {
                if (!e.inputs || 0 === e.inputs.length) return e;
                continue;
              }
              if (
                e.inputs &&
                0 !== e.inputs.length &&
                e.inputs.length === c.length &&
                c.every((t, n) => {
                  let r = "inputs" in e && e.inputs[n];
                  return (
                    !!r &&
                    (function e(t, n) {
                      let r = typeof t,
                        i = n.type;
                      switch (i) {
                        case "address":
                          return (0, o.P)(t, { strict: !1 });
                        case "bool":
                          return "boolean" === r;
                        case "function":
                        case "string":
                          return "string" === r;
                        default:
                          if ("tuple" === i && "components" in n)
                            return Object.values(n.components).every((n, r) =>
                              e(Object.values(t)[r], n)
                            );
                          if (
                            /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                              i
                            )
                          )
                            return "number" === r || "bigint" === r;
                          if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i))
                            return "string" === r || t instanceof Uint8Array;
                          if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i))
                            return (
                              Array.isArray(t) &&
                              t.every((t) =>
                                e(t, {
                                  ...n,
                                  type: i.replace(/(\[[0-9]{0,}\])$/, ""),
                                })
                              )
                            );
                          return !1;
                      }
                    })(t, r)
                  );
                })
              ) {
                if (t && "inputs" in t && t.inputs) {
                  let n = (function e(t, n, r) {
                    for (let i in t) {
                      let a = t[i],
                        s = n[i];
                      if (
                        "tuple" === a.type &&
                        "tuple" === s.type &&
                        "components" in a &&
                        "components" in s
                      )
                        return e(a.components, s.components, r[i]);
                      let c = [a.type, s.type];
                      if (
                        (c.includes("address") && c.includes("bytes20")) ||
                        (((c.includes("address") && c.includes("string")) ||
                          (c.includes("address") && c.includes("bytes"))) &&
                          (0, o.P)(r[i], { strict: !1 }))
                      )
                        return c;
                    }
                  })(e.inputs, t.inputs, c);
                  if (n)
                    throw new r.nM(
                      { abiItem: e, type: n[0] },
                      { abiItem: t, type: n[1] }
                    );
                }
                t = e;
              }
            }
          }
          return t || d[0];
        }
      }
    },
    23058: (e, t, n) => {
      "use strict";
      n.d(t, { Y: () => b });
      var r = n(5041),
        i = n(19405),
        o = n(7441);
      class a extends o.C {
        constructor({ docsPath: e } = {}) {
          super(
            "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
            { docsPath: e, docsSlug: "account", name: "AccountNotFoundError" }
          );
        }
      }
      o.C;
      var s = n(67622);
      async function c(e, { account: t = e.account, message: n }) {
        if (!t) throw new a({ docsPath: "/docs/actions/wallet/signMessage" });
        let r = (0, i.J)(t);
        if (r.signMessage) return r.signMessage({ message: n });
        let o =
          "string" == typeof n
            ? (0, s.i3)(n)
            : n.raw instanceof Uint8Array
            ? (0, s.nj)(n.raw)
            : n.raw;
        return e.request(
          { method: "personal_sign", params: [o, r.address] },
          { retryCount: 0 }
        );
      }
      var l = n(70030),
        u = n(98078),
        d = n(54315),
        h = n(35883),
        f = n(77752);
      async function p(e, t = {}) {
        let n;
        if (t.connector) {
          let { connector: r } = t;
          if (
            "reconnecting" === e.state.status &&
            !r.getAccounts &&
            !r.getChainId
          )
            throw new f.HF({ connector: r });
          let [i, o] = await Promise.all([
            r.getAccounts().catch((e) => {
              if (null === t.account) return [];
              throw e;
            }),
            r.getChainId(),
          ]);
          n = { accounts: i, chainId: o, connector: r };
        } else n = e.state.connections.get(e.state.current);
        if (!n) throw new f.gC();
        let r = t.chainId ?? n.chainId,
          o = await n.connector.getChainId();
        if (o !== n.chainId)
          throw new f.xU({ connectionChainId: n.chainId, connectorChainId: o });
        let a = n.connector;
        if (a.getClient) return a.getClient({ chainId: r });
        let s = (0, i.J)(t.account ?? n.accounts[0]);
        if (
          (s && (s.address = (0, h.b)(s.address)),
          t.account &&
            !n.accounts.some(
              (e) => e.toLowerCase() === s.address.toLowerCase()
            ))
        )
          throw new f.aj({ address: s.address, connector: a });
        let c = e.chains.find((e) => e.id === r),
          l = await n.connector.getProvider({ chainId: r });
        return (0, u.U)({
          account: s,
          chain: c,
          name: "Connector Client",
          transport: (e) =>
            (function (e, t = {}) {
              let {
                key: n = "custom",
                methods: r,
                name: i = "Custom Provider",
                retryDelay: o,
              } = t;
              return ({ retryCount: a }) =>
                (0, d.o)({
                  key: n,
                  methods: r,
                  name: i,
                  request: e.request.bind(e),
                  retryCount: t.retryCount ?? a,
                  retryDelay: o,
                  type: "custom",
                });
            })(l)({ ...e, retryCount: 0 }),
        });
      }
      async function m(e, t) {
        let n,
          { account: r, connector: i, ...o } = t;
        return (
          (n =
            "object" == typeof r && "local" === r.type
              ? e.getClient()
              : await p(e, { account: r, connector: i })),
          (0, l.T)(n, c, "signMessage")({ ...o, ...(r ? { account: r } : {}) })
        );
      }
      var y = n(53031);
      function b() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = t,
          i =
            ((e = (0, y.U)(t)),
            { mutationFn: (t) => m(e, t), mutationKey: ["signMessage"] }),
          { mutate: o, mutateAsync: a, ...s } = (0, r.n)({ ...n, ...i });
        return { ...s, signMessage: o, signMessageAsync: a };
      }
    },
    23360: (e, t, n) => {
      "use strict";
      n.d(t, { d: () => a });
      var r = n(35109),
        i = n(42264),
        o = n(35020);
      function a(e, { docsPath: t, ...n }) {
        let a = (() => {
          let t = (0, o.l)(e, n);
          return t instanceof i.RM ? e : t;
        })();
        return new r.zX(a, { docsPath: t, ...n });
      }
    },
    24526: (e, t, n) => {
      "use strict";
      function r(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function i(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function o(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        r(e.outputLen), r(e.blockLen);
      }
      function a(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function s(e, t) {
        i(e);
        let n = t.outputLen;
        if (e.length < n)
          throw Error(
            "digestInto() expects output buffer of length at least " + n
          );
      }
      n.d(t, {
        CC: () => a,
        DO: () => i,
        Fe: () => r,
        Ht: () => s,
        sd: () => o,
      });
    },
    24578: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => s });
      var r = n(32248),
        i = n(32840),
        o = n(80844),
        a = n(67622);
      function s(e, t) {
        let n = (0, r.lY)((0, i.q)(e, { strict: !1 }) ? (0, o.ZJ)(e) : e);
        return "bytes" === (t || "hex") ? n : (0, a.nj)(n);
      }
    },
    25507: (e, t, n) => {
      "use strict";
      n.d(t, { yH: () => l });
      var r = n(36444),
        i = n(58980),
        o = n(4805),
        a = n(81757),
        s = n(67622);
      function c(e) {
        if (e && 0 !== e.length)
          return e.reduce((e, { slot: t, value: n }) => {
            if (66 !== t.length)
              throw new i.NV({ size: t.length, targetSize: 66, type: "hex" });
            if (66 !== n.length)
              throw new i.NV({ size: n.length, targetSize: 66, type: "hex" });
            return (e[t] = n), e;
          }, {});
      }
      function l(e) {
        if (!e) return;
        let t = {};
        for (let { address: n, ...i } of e) {
          if (!(0, a.P)(n, { strict: !1 })) throw new r.M({ address: n });
          if (t[n]) throw new o.Hi({ address: n });
          t[n] = (function (e) {
            let { balance: t, nonce: n, state: r, stateDiff: i, code: a } = e,
              l = {};
            if (
              (void 0 !== a && (l.code = a),
              void 0 !== t && (l.balance = (0, s.cK)(t)),
              void 0 !== n && (l.nonce = (0, s.cK)(n)),
              void 0 !== r && (l.state = c(r)),
              void 0 !== i)
            ) {
              if (l.state) throw new o.ft();
              l.stateDiff = c(i);
            }
            return l;
          })(i);
        }
        return t;
      }
    },
    25910: (e, t, n) => {
      "use strict";
      n.d(t, { Q: () => r });
      var r = class {
        constructor() {
          (this.listeners = new Set()),
            (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(e) {
          return (
            this.listeners.add(e),
            this.onSubscribe(),
            () => {
              this.listeners.delete(e), this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      };
    },
    26715: (e, t, n) => {
      "use strict";
      n.d(t, { Ht: () => s, jE: () => a });
      var r = n(12115),
        i = n(95155),
        o = r.createContext(void 0),
        a = (e) => {
          let t = r.useContext(o);
          if (e) return e;
          if (!t)
            throw Error(
              "No QueryClient set, use QueryClientProvider to set one"
            );
          return t;
        },
        s = (e) => {
          let { client: t, children: n } = e;
          return (
            r.useEffect(
              () => (
                t.mount(),
                () => {
                  t.unmount();
                }
              ),
              [t]
            ),
            (0, i.jsx)(o.Provider, { value: t, children: n })
          );
        };
    },
    26719: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => u });
      var r = n(5041);
      async function i(e, t = {}) {
        let n;
        if (t.connector) n = t.connector;
        else {
          let { connections: t, current: r } = e.state,
            i = t.get(r);
          n = i?.connector;
        }
        let r = e.state.connections;
        n &&
          (await n.disconnect(),
          n.emitter.off("change", e._internal.events.change),
          n.emitter.off("disconnect", e._internal.events.disconnect),
          n.emitter.on("connect", e._internal.events.connect),
          r.delete(n.uid)),
          e.setState((e) => {
            if (0 === r.size)
              return {
                ...e,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            let t = r.values().next().value;
            return { ...e, connections: new Map(r), current: t.connector.uid };
          });
        {
          let t = e.state.current;
          if (!t) return;
          let n = e.state.connections.get(t)?.connector;
          if (!n) return;
          await e.storage?.setItem("recentConnectorId", n.id);
        }
      }
      var o = n(53031),
        a = n(34250);
      let s = [];
      function c(e) {
        let t = [...e.state.connections.values()];
        return "reconnecting" === e.state.status || (0, a.b)(s, t)
          ? s
          : ((s = t), t);
      }
      var l = n(12115);
      function u() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, o.U)(e),
          s = { mutationFn: (e) => i(n, e), mutationKey: ["disconnect"] },
          { mutate: u, mutateAsync: d, ...h } = (0, r.n)({ ...t, ...s });
        return {
          ...h,
          connectors: (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = (0, o.U)(e);
            return (0, l.useSyncExternalStore)(
              (e) =>
                (function (e, t) {
                  let { onChange: n } = t;
                  return e.subscribe(() => c(e), n, { equalityFn: a.b });
                })(t, { onChange: e }),
              () => c(t),
              () => c(t)
            );
          })({ config: n }).map((e) => e.connector),
          disconnect: u,
          disconnectAsync: d,
        };
      }
    },
    27041: (e, t, n) => {
      "use strict";
      n.d(t, { _: () => u });
      var r =
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        i = {
          rounded: 'SFRounded, ui-rounded, "SF Pro Rounded", '.concat(r),
          system: r,
        },
        o = {
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
            fonts: { body: i[n] },
            radii: {
              actionButton: o[t].actionButton,
              connectButton: o[t].connectButton,
              menuButton: o[t].connectButton,
              modal: o[t].modal,
              modalMobile: o[t].modalMobile,
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
    27442: (e, t, n) => {
      "use strict";
      n.d(t, { _o: () => b, Pj: () => m, uT: () => d });
      var r = n(59126),
        i = n(84701),
        o = n(99901),
        a = n(30686),
        s = n(68321);
      class c extends s.C {
        constructor({ current: e, depth: t }) {
          super("Unbalanced parentheses.", {
            metaMessages: [
              `"${e.trim()}" has too many ${
                t > 0 ? "opening" : "closing"
              } parentheses.`,
            ],
            details: `Depth "${t}"`,
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidParenthesisError",
            });
        }
      }
      let l = new Map([
        ["address", { type: "address" }],
        ["bool", { type: "bool" }],
        ["bytes", { type: "bytes" }],
        ["bytes32", { type: "bytes32" }],
        ["int", { type: "int256" }],
        ["int256", { type: "int256" }],
        ["string", { type: "string" }],
        ["uint", { type: "uint256" }],
        ["uint8", { type: "uint8" }],
        ["uint16", { type: "uint16" }],
        ["uint24", { type: "uint24" }],
        ["uint32", { type: "uint32" }],
        ["uint64", { type: "uint64" }],
        ["uint96", { type: "uint96" }],
        ["uint112", { type: "uint112" }],
        ["uint160", { type: "uint160" }],
        ["uint192", { type: "uint192" }],
        ["uint256", { type: "uint256" }],
        ["address owner", { type: "address", name: "owner" }],
        ["address to", { type: "address", name: "to" }],
        ["bool approved", { type: "bool", name: "approved" }],
        ["bytes _data", { type: "bytes", name: "_data" }],
        ["bytes data", { type: "bytes", name: "data" }],
        ["bytes signature", { type: "bytes", name: "signature" }],
        ["bytes32 hash", { type: "bytes32", name: "hash" }],
        ["bytes32 r", { type: "bytes32", name: "r" }],
        ["bytes32 root", { type: "bytes32", name: "root" }],
        ["bytes32 s", { type: "bytes32", name: "s" }],
        ["string name", { type: "string", name: "name" }],
        ["string symbol", { type: "string", name: "symbol" }],
        ["string tokenURI", { type: "string", name: "tokenURI" }],
        ["uint tokenId", { type: "uint256", name: "tokenId" }],
        ["uint8 v", { type: "uint8", name: "v" }],
        ["uint256 balance", { type: "uint256", name: "balance" }],
        ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
        ["uint256 value", { type: "uint256", name: "value" }],
        [
          "event:address indexed from",
          { type: "address", name: "from", indexed: !0 },
        ],
        [
          "event:address indexed to",
          { type: "address", name: "to", indexed: !0 },
        ],
        [
          "event:uint indexed tokenId",
          { type: "uint256", name: "tokenId", indexed: !0 },
        ],
        [
          "event:uint256 indexed tokenId",
          { type: "uint256", name: "tokenId", indexed: !0 },
        ],
      ]);
      var u = n(17130);
      function d(e, t = {}) {
        if ((0, u.Ji)(e))
          return (function (e, t = {}) {
            let n = (0, u.ej)(e);
            if (!n) throw new a.s7({ signature: e, type: "function" });
            let r = y(n.parameters),
              i = [],
              o = r.length;
            for (let e = 0; e < o; e++)
              i.push(
                m(r[e], { modifiers: u.v7, structs: t, type: "function" })
              );
            let s = [];
            if (n.returns) {
              let e = y(n.returns),
                r = e.length;
              for (let n = 0; n < r; n++)
                s.push(
                  m(e[n], { modifiers: u.v7, structs: t, type: "function" })
                );
            }
            return {
              name: n.name,
              type: "function",
              stateMutability: n.stateMutability ?? "nonpayable",
              inputs: i,
              outputs: s,
            };
          })(e, t);
        if ((0, u.Rv)(e))
          return (function (e, t = {}) {
            let n = (0, u.iB)(e);
            if (!n) throw new a.s7({ signature: e, type: "event" });
            let r = y(n.parameters),
              i = [],
              o = r.length;
            for (let e = 0; e < o; e++)
              i.push(m(r[e], { modifiers: u.fC, structs: t, type: "event" }));
            return { name: n.name, type: "event", inputs: i };
          })(e, t);
        if ((0, u.pc)(e))
          return (function (e, t = {}) {
            let n = (0, u.kz)(e);
            if (!n) throw new a.s7({ signature: e, type: "error" });
            let r = y(n.parameters),
              i = [],
              o = r.length;
            for (let e = 0; e < o; e++)
              i.push(m(r[e], { structs: t, type: "error" }));
            return { name: n.name, type: "error", inputs: i };
          })(e, t);
        if ((0, u.l9)(e))
          return (function (e, t = {}) {
            let n = (0, u.Yo)(e);
            if (!n) throw new a.s7({ signature: e, type: "constructor" });
            let r = y(n.parameters),
              i = [],
              o = r.length;
            for (let e = 0; e < o; e++)
              i.push(m(r[e], { structs: t, type: "constructor" }));
            return {
              type: "constructor",
              stateMutability: n.stateMutability ?? "nonpayable",
              inputs: i,
            };
          })(e, t);
        if ((0, u.v8)(e)) {
          var n = e;
          let t = (0, u.If)(n);
          if (!t) throw new a.s7({ signature: n, type: "fallback" });
          return {
            type: "fallback",
            stateMutability: t.stateMutability ?? "nonpayable",
          };
        }
        if ((0, u.sP)(e))
          return { type: "receive", stateMutability: "payable" };
        throw new a.x8({ signature: e });
      }
      let h =
          /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
        f =
          /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
        p = /^u?int$/;
      function m(e, t) {
        var n, a;
        let s,
          c = (function (e, t, n) {
            let r = "";
            if (n)
              for (let e of Object.entries(n)) {
                if (!e) continue;
                let t = "";
                for (let n of e[1])
                  t += `[${n.type}${n.name ? `:${n.name}` : ""}]`;
                r += `(${e[0]}{${t}})`;
              }
            return t ? `${t}:${e}${r}` : e;
          })(e, t?.type, t?.structs);
        if (l.has(c)) return l.get(c);
        let d = r.wj.test(e),
          w = (0, r.Yv)(d ? f : h, e);
        if (!w) throw new o.dV({ param: e });
        if (
          w.name &&
          ("address" === (n = w.name) ||
            "bool" === n ||
            "function" === n ||
            "string" === n ||
            "tuple" === n ||
            r.BD.test(n) ||
            r.Ge.test(n) ||
            g.test(n))
        )
          throw new o.zd({ param: e, name: w.name });
        let v = w.name ? { name: w.name } : {},
          A = "indexed" === w.modifier ? { indexed: !0 } : {},
          x = t?.structs ?? {},
          C = {};
        if (d) {
          s = "tuple";
          let e = y(w.type),
            t = [],
            n = e.length;
          for (let r = 0; r < n; r++) t.push(m(e[r], { structs: x }));
          C = { components: t };
        } else if (w.type in x) (s = "tuple"), (C = { components: x[w.type] });
        else if (p.test(w.type)) s = `${w.type}256`;
        else if (((s = w.type), t?.type !== "struct" && !b(s)))
          throw new i.UG({ type: s });
        if (w.modifier) {
          if (!t?.modifiers?.has?.(w.modifier))
            throw new o.NO({ param: e, type: t?.type, modifier: w.modifier });
          if (
            u.v7.has(w.modifier) &&
            ((a = s),
            !w.array && "bytes" !== a && "string" !== a && "tuple" !== a)
          )
            throw new o.Pj({ param: e, type: t?.type, modifier: w.modifier });
        }
        let E = { type: `${s}${w.array ?? ""}`, ...v, ...A, ...C };
        return l.set(c, E), E;
      }
      function y(e, t = [], n = "", r = 0) {
        let i = e.trim().length;
        for (let o = 0; o < i; o++) {
          let i = e[o],
            a = e.slice(o + 1);
          switch (i) {
            case ",":
              return 0 === r ? y(a, [...t, n.trim()]) : y(a, t, `${n}${i}`, r);
            case "(":
              return y(a, t, `${n}${i}`, r + 1);
            case ")":
              return y(a, t, `${n}${i}`, r - 1);
            default:
              return y(a, t, `${n}${i}`, r);
          }
        }
        if ("" === n) return t;
        if (0 !== r) throw new c({ current: n, depth: r });
        return t.push(n.trim()), t;
      }
      function b(e) {
        return (
          "address" === e ||
          "bool" === e ||
          "function" === e ||
          "string" === e ||
          r.BD.test(e) ||
          r.Ge.test(e)
        );
      }
      let g =
        /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
    },
    27493: (e, t, n) => {
      "use strict";
      n.d(t, {
        IQ: () => d,
        ME: () => u,
        Nx: () => l,
        Sl: () => s,
        uU: () => c,
      });
      var r = n(94201),
        i = n(87094),
        o = n(54335),
        a = n(80844);
      function s(e, { size: t }) {
        if ((0, i.E)(e) > t)
          throw new r.u({ givenSize: (0, i.E)(e), maxSize: t });
      }
      function c(e, t = {}) {
        let { signed: n } = t;
        t.size && s(e, { size: t.size });
        let r = BigInt(e);
        if (!n) return r;
        let i = (e.length - 2) / 2;
        return r <= (1n << (8n * BigInt(i) - 1n)) - 1n
          ? r
          : r - BigInt(`0x${"f".padStart(2 * i, "f")}`) - 1n;
      }
      function l(e, t = {}) {
        let n = e;
        if (
          (t.size && (s(n, { size: t.size }), (n = (0, o.B)(n))),
          "0x00" === (0, o.B)(n))
        )
          return !1;
        if ("0x01" === (0, o.B)(n)) return !0;
        throw new r.H2(n);
      }
      function u(e, t = {}) {
        return Number(c(e, t));
      }
      function d(e, t = {}) {
        let n = (0, a.aT)(e);
        return (
          t.size &&
            (s(n, { size: t.size }), (n = (0, o.B)(n, { dir: "right" }))),
          new TextDecoder().decode(n)
        );
      }
    },
    28452: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => r });
      class r extends Error {
        constructor(e, t = {}) {
          let n = (() => {
              if (t.cause instanceof r) {
                if (t.cause.details) return t.cause.details;
                if (t.cause.shortMessage) return t.cause.shortMessage;
              }
              return t.cause?.message ? t.cause.message : t.details;
            })(),
            i = (t.cause instanceof r && t.cause.docsPath) || t.docsPath,
            o = `https://oxlib.sh${i ?? ""}`;
          super(
            [
              e || "An error occurred.",
              ...(t.metaMessages ? ["", ...t.metaMessages] : []),
              ...(n || i
                ? ["", n ? `Details: ${n}` : void 0, i ? `See: ${o}` : void 0]
                : []),
            ]
              .filter((e) => "string" == typeof e)
              .join("\n"),
            t.cause ? { cause: t.cause } : void 0
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ox@0.1.1",
            }),
            (this.cause = t.cause),
            (this.details = n),
            (this.docs = o),
            (this.docsPath = i),
            (this.shortMessage = e);
        }
        walk(e) {
          return (function e(t, n) {
            return n?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t && t.cause
              ? e(t.cause, n)
              : n
              ? null
              : t;
          })(this, e);
        }
      }
    },
    29343: (e, t) => {
      t.isValid = function (e) {
        return !isNaN(e) && e >= 1 && e <= 40;
      };
    },
    29995: (e, t, n) => {
      "use strict";
      n.d(t, { J9: () => o, Mc: () => i, fD: () => r });
      let r = {
          1: "An `assert` condition failed.",
          17: "Arithmetic operation resulted in underflow or overflow.",
          18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
          33: "Attempted to convert to an invalid type.",
          34: "Attempted to access a storage byte array that is incorrectly encoded.",
          49: "Performed `.pop()` on an empty array",
          50: "Array index is out of bounds.",
          65: "Allocated too much memory or created an array which is too large.",
          81: "Attempted to call a zero-initialized variable of internal function type.",
        },
        i = {
          inputs: [{ name: "message", type: "string" }],
          name: "Error",
          type: "error",
        },
        o = {
          inputs: [{ name: "reason", type: "uint256" }],
          name: "Panic",
          type: "error",
        };
    },
    30445: (e, t, n) => {
      "use strict";
      n.d(t, { YE: () => o, rj: () => i });
      var r = n(7441);
      class i extends r.C {
        constructor({ blockNumber: e, chain: t, contract: n }) {
          super(`Chain "${t.name}" does not support contract "${n.name}".`, {
            metaMessages: [
              "This could be due to any of the following:",
              ...(e && n.blockCreated && n.blockCreated > e
                ? [
                    `- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${e}).`,
                  ]
                : [
                    `- The chain does not have the contract "${n.name}" configured.`,
                  ]),
            ],
            name: "ChainDoesNotSupportContract",
          });
        }
      }
      r.C, r.C;
      class o extends r.C {
        constructor() {
          super("No chain was provided to the Client.", {
            name: "ClientChainNotConfiguredError",
          });
        }
      }
      r.C;
    },
    30686: (e, t, n) => {
      "use strict";
      n.d(t, { X9: () => a, s7: () => i, x8: () => o });
      var r = n(68321);
      class i extends r.C {
        constructor({ signature: e, type: t }) {
          super(`Invalid ${t} signature.`, { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidSignatureError",
            });
        }
      }
      class o extends r.C {
        constructor({ signature: e }) {
          super("Unknown signature.", { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownSignatureError",
            });
        }
      }
      class a extends r.C {
        constructor({ signature: e }) {
          super("Invalid struct signature.", {
            details: e,
            metaMessages: ["No properties exist."],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidStructSignatureError",
            });
        }
      }
    },
    31114: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => H });
      var r,
        i,
        o = n(39249),
        a = n(12115),
        s = "right-scroll-bar-position",
        c = "width-before-scroll-bar";
      function l(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var u = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect,
        d = new WeakMap();
      function h(e) {
        return e;
      }
      var f = (function (e) {
          void 0 === e && (e = {});
          var t,
            n,
            r,
            i,
            a =
              ((t = null),
              void 0 === n && (n = h),
              (r = []),
              (i = !1),
              {
                read: function () {
                  if (i)
                    throw Error(
                      "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                    );
                  return r.length ? r[r.length - 1] : null;
                },
                useMedium: function (e) {
                  var t = n(e, i);
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
                  for (i = !0; r.length; ) {
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
                  i = !0;
                  var t = [];
                  if (r.length) {
                    var n = r;
                    (r = []), n.forEach(e), (t = r);
                  }
                  var o = function () {
                      var n = t;
                      (t = []), n.forEach(e);
                    },
                    a = function () {
                      return Promise.resolve().then(o);
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
          return (a.options = (0, o.__assign)({ async: !0, ssr: !1 }, e)), a;
        })(),
        p = function () {},
        m = a.forwardRef(function (e, t) {
          var n,
            r,
            i,
            s,
            c = a.useRef(null),
            h = a.useState({
              onScrollCapture: p,
              onWheelCapture: p,
              onTouchMoveCapture: p,
            }),
            m = h[0],
            y = h[1],
            b = e.forwardProps,
            g = e.children,
            w = e.className,
            v = e.removeScrollBar,
            A = e.enabled,
            x = e.shards,
            C = e.sideCar,
            E = e.noIsolation,
            I = e.inert,
            B = e.allowPinchZoom,
            k = e.as,
            P = e.gapMode,
            S = (0, o.__rest)(e, [
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
            O =
              ((n = [c, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return l(t, e);
                });
              }),
              ((i = (0, a.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return i.value;
                    },
                    set current(value) {
                      var e = i.value;
                      e !== value && ((i.value = value), i.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (s = i.facade),
              u(
                function () {
                  var e = d.get(s);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      i = s.current;
                    t.forEach(function (e) {
                      r.has(e) || l(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || l(e, i);
                      });
                  }
                  d.set(s, n);
                },
                [n]
              ),
              s),
            M = (0, o.__assign)((0, o.__assign)({}, S), m);
          return a.createElement(
            a.Fragment,
            null,
            A &&
              a.createElement(C, {
                sideCar: f,
                removeScrollBar: v,
                shards: x,
                noIsolation: E,
                inert: I,
                setCallbacks: y,
                allowPinchZoom: !!B,
                lockRef: c,
                gapMode: P,
              }),
            b
              ? a.cloneElement(
                  a.Children.only(g),
                  (0, o.__assign)((0, o.__assign)({}, M), { ref: O })
                )
              : a.createElement(
                  void 0 === k ? "div" : k,
                  (0, o.__assign)({}, M, { className: w, ref: O }),
                  g
                )
          );
        });
      (m.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (m.classNames = { fullWidth: c, zeroRight: s });
      var y = function (e) {
        var t = e.sideCar,
          n = (0, o.__rest)(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return a.createElement(r, (0, o.__assign)({}, n));
      };
      y.isSideCarExport = !0;
      var b = function () {
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
                  var t = i || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var o, a;
                (o = t).styleSheet
                  ? (o.styleSheet.cssText = r)
                  : o.appendChild(document.createTextNode(r)),
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
        g = function () {
          var e = b();
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
        w = function () {
          var e = g();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        v = { left: 0, top: 0, right: 0, gap: 0 },
        A = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        x = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            i = t["padding" === e ? "paddingRight" : "marginRight"];
          return [A(n), A(r), A(i)];
        },
        C = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return v;
          var t = x(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        E = w(),
        I = "data-scroll-locked",
        B = function (e, t, n, r) {
          var i = e.left,
            o = e.top,
            a = e.right,
            l = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(I, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(i, "px;\n    padding-top: ")
                      .concat(o, "px;\n    padding-right: ")
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
              .concat(I, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(l, "px;\n  }\n")
          );
        },
        k = function () {
          var e = parseInt(document.body.getAttribute(I) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        P = function () {
          a.useEffect(function () {
            return (
              document.body.setAttribute(I, (k() + 1).toString()),
              function () {
                var e = k() - 1;
                e <= 0
                  ? document.body.removeAttribute(I)
                  : document.body.setAttribute(I, e.toString());
              }
            );
          }, []);
        },
        S = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            i = void 0 === r ? "margin" : r;
          P();
          var o = a.useMemo(
            function () {
              return C(i);
            },
            [i]
          );
          return a.createElement(E, {
            styles: B(o, !t, i, n ? "" : "!important"),
          });
        },
        O = !1;
      if ("undefined" != typeof window)
        try {
          var M = Object.defineProperty({}, "passive", {
            get: function () {
              return (O = !0), !0;
            },
          });
          window.addEventListener("test", M, M),
            window.removeEventListener("test", M, M);
        } catch (e) {
          O = !1;
        }
      var T = !!O && { passive: !1 },
        R = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            (n.overflowY !== n.overflowX ||
              "TEXTAREA" === e.tagName ||
              "visible" !== n[t])
          );
        },
        N = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              F(e, r))
            ) {
              var i = U(e, r);
              if (i[1] > i[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        F = function (e, t) {
          return "v" === e ? R(t, "overflowY") : R(t, "overflowX");
        },
        U = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        j = function (e, t, n, r, i) {
          var o,
            a =
              ((o = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === o ? -1 : 1),
            s = a * r,
            c = n.target,
            l = t.contains(c),
            u = !1,
            d = s > 0,
            h = 0,
            f = 0;
          do {
            var p = U(e, c),
              m = p[0],
              y = p[1] - p[2] - a * m;
            (m || y) && F(e, c) && ((h += y), (f += m)),
              (c = c instanceof ShadowRoot ? c.host : c.parentNode);
          } while (
            (!l && c !== document.body) ||
            (l && (t.contains(c) || t === c))
          );
          return (
            d && ((i && 1 > Math.abs(h)) || (!i && s > h))
              ? (u = !0)
              : !d && ((i && 1 > Math.abs(f)) || (!i && -s > f)) && (u = !0),
            u
          );
        },
        D = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        L = function (e) {
          return [e.deltaX, e.deltaY];
        },
        q = function (e) {
          return e && "current" in e ? e.current : e;
        },
        Q = 0,
        W = [];
      let z =
        ((r = function (e) {
          var t = a.useRef([]),
            n = a.useRef([0, 0]),
            r = a.useRef(),
            i = a.useState(Q++)[0],
            s = a.useState(w)[0],
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
                  document.body.classList.add("block-interactivity-".concat(i));
                  var t = (0, o.__spreadArray)(
                    [e.lockRef.current],
                    (e.shards || []).map(q),
                    !0
                  ).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(i));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(i)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(i)
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
              var i,
                o = D(e),
                a = n.current,
                s = "deltaX" in e ? e.deltaX : a[0] - o[0],
                l = "deltaY" in e ? e.deltaY : a[1] - o[1],
                u = e.target,
                d = Math.abs(s) > Math.abs(l) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === u.type) return !1;
              var h = N(d, u);
              if (!h) return !0;
              if (
                (h ? (i = d) : ((i = "v" === d ? "h" : "v"), (h = N(d, u))), !h)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (s || l) &&
                  (r.current = i),
                !i)
              )
                return !0;
              var f = r.current || i;
              return j(f, t, e, "h" === f ? s : l, !0);
            }, []),
            u = a.useCallback(function (e) {
              if (W.length && W[W.length - 1] === s) {
                var n = "deltaY" in e ? L(e) : D(e),
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
                  var i = (c.current.shards || [])
                    .map(q)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (i.length > 0 ? l(e, i[0]) : !c.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            d = a.useCallback(function (e, n, r, i) {
              var o = {
                name: e,
                delta: n,
                target: r,
                should: i,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(r),
              };
              t.current.push(o),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== o;
                  });
                }, 1);
            }, []),
            h = a.useCallback(function (e) {
              (n.current = D(e)), (r.current = void 0);
            }, []),
            f = a.useCallback(function (t) {
              d(t.type, L(t), t.target, l(t, e.lockRef.current));
            }, []),
            p = a.useCallback(function (t) {
              d(t.type, D(t), t.target, l(t, e.lockRef.current));
            }, []);
          a.useEffect(function () {
            return (
              W.push(s),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: p,
              }),
              document.addEventListener("wheel", u, T),
              document.addEventListener("touchmove", u, T),
              document.addEventListener("touchstart", h, T),
              function () {
                (W = W.filter(function (e) {
                  return e !== s;
                })),
                  document.removeEventListener("wheel", u, T),
                  document.removeEventListener("touchmove", u, T),
                  document.removeEventListener("touchstart", h, T);
              }
            );
          }, []);
          var m = e.removeScrollBar,
            y = e.inert;
          return a.createElement(
            a.Fragment,
            null,
            y
              ? a.createElement(s, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      i,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(i, " {pointer-events: all;}\n"),
                })
              : null,
            m ? a.createElement(S, { gapMode: e.gapMode }) : null
          );
        }),
        f.useMedium(r),
        y);
      var G = a.forwardRef(function (e, t) {
        return a.createElement(
          m,
          (0, o.__assign)({}, e, { ref: t, sideCar: z })
        );
      });
      G.classNames = m.classNames;
      let H = G;
    },
    31942: (e, t, n) => {
      "use strict";
      n.d(t, { Q: () => o });
      var r = n(77136),
        i = n(1405);
      function o(e, t = "wei") {
        return (0, i.J)(e, r.sz[t]);
      }
    },
    32160: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => c });
      var r = n(79731),
        i = n(80844),
        o = n(67622),
        a = n(24578),
        s = n(70872);
      function c(e) {
        let t = new Uint8Array(32).fill(0);
        if (!e) return (0, o.My)(t);
        let n = e.split(".");
        for (let e = n.length - 1; e >= 0; e -= 1) {
          let o = (0, s.q)(n[e]),
            c = o ? (0, i.ZJ)(o) : (0, a.S)((0, i.Af)(n[e]), "bytes");
          t = (0, a.S)((0, r.xW)([t, c]), "bytes");
        }
        return (0, o.My)(t);
      }
    },
    32248: (e, t, n) => {
      "use strict";
      n.d(t, { lY: () => I });
      var r = n(24526);
      let i = BigInt(0x100000000 - 1),
        o = BigInt(32),
        a = (e, t, n) => (e << n) | (t >>> (32 - n)),
        s = (e, t, n) => (t << n) | (e >>> (32 - n)),
        c = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n)),
        l = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n));
      var u = n(19989);
      let d = [],
        h = [],
        f = [],
        p = BigInt(0),
        m = BigInt(1),
        y = BigInt(2),
        b = BigInt(7),
        g = BigInt(256),
        w = BigInt(113);
      for (let e = 0, t = m, n = 1, r = 0; e < 24; e++) {
        ([n, r] = [r, (2 * n + 3 * r) % 5]),
          d.push(2 * (5 * r + n)),
          h.push((((e + 1) * (e + 2)) / 2) % 64);
        let i = p;
        for (let e = 0; e < 7; e++)
          (t = ((t << m) ^ ((t >> b) * w)) % g) & y &&
            (i ^= m << ((m << BigInt(e)) - m));
        f.push(i);
      }
      let [v, A] = (function (e, t = !1) {
          let n = new Uint32Array(e.length),
            r = new Uint32Array(e.length);
          for (let a = 0; a < e.length; a++) {
            let { h: s, l: c } = (function (e, t = !1) {
              return t
                ? { h: Number(e & i), l: Number((e >> o) & i) }
                : { h: 0 | Number((e >> o) & i), l: 0 | Number(e & i) };
            })(e[a], t);
            [n[a], r[a]] = [s, c];
          }
          return [n, r];
        })(f, !0),
        x = (e, t, n) => (n > 32 ? c(e, t, n) : a(e, t, n)),
        C = (e, t, n) => (n > 32 ? l(e, t, n) : s(e, t, n));
      class E extends u.Vw {
        constructor(e, t, n, i = !1, o = 24) {
          if (
            (super(),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (this.enableXOF = !1),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = n),
            (this.enableXOF = i),
            (this.rounds = o),
            (0, r.Fe)(n),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, u.DH)(this.state));
        }
        keccak() {
          u.qv || (0, u.Fc)(this.state32),
            (function (e, t = 24) {
              let n = new Uint32Array(10);
              for (let r = 24 - t; r < 24; r++) {
                for (let t = 0; t < 10; t++)
                  n[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let r = (t + 8) % 10,
                    i = (t + 2) % 10,
                    o = n[i],
                    a = n[i + 1],
                    s = x(o, a, 1) ^ n[r],
                    c = C(o, a, 1) ^ n[r + 1];
                  for (let n = 0; n < 50; n += 10)
                    (e[t + n] ^= s), (e[t + n + 1] ^= c);
                }
                let t = e[2],
                  i = e[3];
                for (let n = 0; n < 24; n++) {
                  let r = h[n],
                    o = x(t, i, r),
                    a = C(t, i, r),
                    s = d[n];
                  (t = e[s]), (i = e[s + 1]), (e[s] = o), (e[s + 1] = a);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let r = 0; r < 10; r++) n[r] = e[t + r];
                  for (let r = 0; r < 10; r++)
                    e[t + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10];
                }
                (e[0] ^= v[r]), (e[1] ^= A[r]);
              }
              n.fill(0);
            })(this.state32, this.rounds),
            u.qv || (0, u.Fc)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, r.CC)(this);
          let { blockLen: t, state: n } = this,
            i = (e = (0, u.ZJ)(e)).length;
          for (let r = 0; r < i; ) {
            let o = Math.min(t - this.pos, i - r);
            for (let t = 0; t < o; t++) n[this.pos++] ^= e[r++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: n, blockLen: r } = this;
          (e[n] ^= t),
            (128 & t) != 0 && n === r - 1 && this.keccak(),
            (e[r - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, r.CC)(this, !1), (0, r.DO)(e), this.finish();
          let t = this.state,
            { blockLen: n } = this;
          for (let r = 0, i = e.length; r < i; ) {
            this.posOut >= n && this.keccak();
            let o = Math.min(n - this.posOut, i - r);
            e.set(t.subarray(this.posOut, this.posOut + o), r),
              (this.posOut += o),
              (r += o);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (0, r.Fe)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, r.Ht)(e, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: n,
            outputLen: r,
            rounds: i,
            enableXOF: o,
          } = this;
          return (
            e || (e = new E(t, n, r, o, i)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = i),
            (e.suffix = n),
            (e.outputLen = r),
            (e.enableXOF = o),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let I = (0, u.ld)(() => new E(136, 1, 32));
    },
    32840: (e, t, n) => {
      "use strict";
      function r(e, { strict: t = !0 } = {}) {
        return (
          !!e &&
          "string" == typeof e &&
          (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
        );
      }
      n.d(t, { q: () => r });
    },
    32960: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => k });
      var r = n(50920),
        i = n(7165),
        o = n(39853),
        a = n(25910),
        s = n(73504),
        c = n(52020),
        l = class extends a.Q {
          constructor(e, t) {
            super(),
              (this.options = t),
              (this.#e = e),
              (this.#l = null),
              (this.#u = (0, s.T)()),
              this.options.experimental_prefetchInRender ||
                this.#u.reject(
                  Error(
                    "experimental_prefetchInRender feature flag is not enabled"
                  )
                ),
              this.bindMethods(),
              this.setOptions(t);
          }
          #e;
          #d = void 0;
          #h = void 0;
          #t = void 0;
          #f;
          #p;
          #u;
          #l;
          #m;
          #y;
          #b;
          #g;
          #w;
          #v;
          #A = new Set();
          bindMethods() {
            this.refetch = this.refetch.bind(this);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              (this.#d.addObserver(this),
              u(this.#d, this.options) ? this.#x() : this.updateResult(),
              this.#C());
          }
          onUnsubscribe() {
            this.hasListeners() || this.destroy();
          }
          shouldFetchOnReconnect() {
            return d(this.#d, this.options, this.options.refetchOnReconnect);
          }
          shouldFetchOnWindowFocus() {
            return d(this.#d, this.options, this.options.refetchOnWindowFocus);
          }
          destroy() {
            (this.listeners = new Set()),
              this.#E(),
              this.#I(),
              this.#d.removeObserver(this);
          }
          setOptions(e) {
            let t = this.options,
              n = this.#d;
            if (
              ((this.options = this.#e.defaultQueryOptions(e)),
              void 0 !== this.options.enabled &&
                "boolean" != typeof this.options.enabled &&
                "function" != typeof this.options.enabled &&
                "boolean" != typeof (0, c.Eh)(this.options.enabled, this.#d))
            )
              throw Error(
                "Expected enabled to be a boolean or a callback that returns a boolean"
              );
            this.#B(),
              this.#d.setOptions(this.options),
              t._defaulted &&
                !(0, c.f8)(this.options, t) &&
                this.#e
                  .getQueryCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    query: this.#d,
                    observer: this,
                  });
            let r = this.hasListeners();
            r && h(this.#d, n, this.options, t) && this.#x(),
              this.updateResult(),
              r &&
                (this.#d !== n ||
                  (0, c.Eh)(this.options.enabled, this.#d) !==
                    (0, c.Eh)(t.enabled, this.#d) ||
                  (0, c.d2)(this.options.staleTime, this.#d) !==
                    (0, c.d2)(t.staleTime, this.#d)) &&
                this.#k();
            let i = this.#P();
            r &&
              (this.#d !== n ||
                (0, c.Eh)(this.options.enabled, this.#d) !==
                  (0, c.Eh)(t.enabled, this.#d) ||
                i !== this.#v) &&
              this.#S(i);
          }
          getOptimisticResult(e) {
            var t, n;
            let r = this.#e.getQueryCache().build(this.#e, e),
              i = this.createResult(r, e);
            return (
              (t = this),
              (n = i),
              (0, c.f8)(t.getCurrentResult(), n) ||
                ((this.#t = i),
                (this.#p = this.options),
                (this.#f = this.#d.state)),
              i
            );
          }
          getCurrentResult() {
            return this.#t;
          }
          trackResult(e, t) {
            return new Proxy(e, {
              get: (e, n) => (this.trackProp(n), t?.(n), Reflect.get(e, n)),
            });
          }
          trackProp(e) {
            this.#A.add(e);
          }
          getCurrentQuery() {
            return this.#d;
          }
          refetch({ ...e } = {}) {
            return this.fetch({ ...e });
          }
          fetchOptimistic(e) {
            let t = this.#e.defaultQueryOptions(e),
              n = this.#e.getQueryCache().build(this.#e, t);
            return n.fetch().then(() => this.createResult(n, t));
          }
          fetch(e) {
            return this.#x({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
              () => (this.updateResult(), this.#t)
            );
          }
          #x(e) {
            this.#B();
            let t = this.#d.fetch(this.options, e);
            return e?.throwOnError || (t = t.catch(c.lQ)), t;
          }
          #k() {
            this.#E();
            let e = (0, c.d2)(this.options.staleTime, this.#d);
            if (c.S$ || this.#t.isStale || !(0, c.gn)(e)) return;
            let t = (0, c.j3)(this.#t.dataUpdatedAt, e);
            this.#g = setTimeout(() => {
              this.#t.isStale || this.updateResult();
            }, t + 1);
          }
          #P() {
            return (
              ("function" == typeof this.options.refetchInterval
                ? this.options.refetchInterval(this.#d)
                : this.options.refetchInterval) ?? !1
            );
          }
          #S(e) {
            this.#I(),
              (this.#v = e),
              !c.S$ &&
                !1 !== (0, c.Eh)(this.options.enabled, this.#d) &&
                (0, c.gn)(this.#v) &&
                0 !== this.#v &&
                (this.#w = setInterval(() => {
                  (this.options.refetchIntervalInBackground ||
                    r.m.isFocused()) &&
                    this.#x();
                }, this.#v));
          }
          #C() {
            this.#k(), this.#S(this.#P());
          }
          #E() {
            this.#g && (clearTimeout(this.#g), (this.#g = void 0));
          }
          #I() {
            this.#w && (clearInterval(this.#w), (this.#w = void 0));
          }
          createResult(e, t) {
            let n,
              r = this.#d,
              i = this.options,
              a = this.#t,
              l = this.#f,
              d = this.#p,
              p = e !== r ? e.state : this.#h,
              { state: m } = e,
              y = { ...m },
              b = !1;
            if (t._optimisticResults) {
              let n = this.hasListeners(),
                a = !n && u(e, t),
                s = n && h(e, r, t, i);
              (a || s) && (y = { ...y, ...(0, o.k)(m.data, e.options) }),
                "isRestoring" === t._optimisticResults &&
                  (y.fetchStatus = "idle");
            }
            let { error: g, errorUpdatedAt: w, status: v } = y;
            n = y.data;
            let A = !1;
            if (
              void 0 !== t.placeholderData &&
              void 0 === n &&
              "pending" === v
            ) {
              let e;
              a?.isPlaceholderData && t.placeholderData === d?.placeholderData
                ? ((e = a.data), (A = !0))
                : (e =
                    "function" == typeof t.placeholderData
                      ? t.placeholderData(this.#b?.state.data, this.#b)
                      : t.placeholderData),
                void 0 !== e &&
                  ((v = "success"), (n = (0, c.pl)(a?.data, e, t)), (b = !0));
            }
            if (t.select && void 0 !== n && !A)
              if (a && n === l?.data && t.select === this.#m) n = this.#y;
              else
                try {
                  (this.#m = t.select),
                    (n = t.select(n)),
                    (n = (0, c.pl)(a?.data, n, t)),
                    (this.#y = n),
                    (this.#l = null);
                } catch (e) {
                  this.#l = e;
                }
            this.#l &&
              ((g = this.#l), (n = this.#y), (w = Date.now()), (v = "error"));
            let x = "fetching" === y.fetchStatus,
              C = "pending" === v,
              E = "error" === v,
              I = C && x,
              B = void 0 !== n,
              k = {
                status: v,
                fetchStatus: y.fetchStatus,
                isPending: C,
                isSuccess: "success" === v,
                isError: E,
                isInitialLoading: I,
                isLoading: I,
                data: n,
                dataUpdatedAt: y.dataUpdatedAt,
                error: g,
                errorUpdatedAt: w,
                failureCount: y.fetchFailureCount,
                failureReason: y.fetchFailureReason,
                errorUpdateCount: y.errorUpdateCount,
                isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
                isFetchedAfterMount:
                  y.dataUpdateCount > p.dataUpdateCount ||
                  y.errorUpdateCount > p.errorUpdateCount,
                isFetching: x,
                isRefetching: x && !C,
                isLoadingError: E && !B,
                isPaused: "paused" === y.fetchStatus,
                isPlaceholderData: b,
                isRefetchError: E && B,
                isStale: f(e, t),
                refetch: this.refetch,
                promise: this.#u,
              };
            if (this.options.experimental_prefetchInRender) {
              let t = (e) => {
                  "error" === k.status
                    ? e.reject(k.error)
                    : void 0 !== k.data && e.resolve(k.data);
                },
                n = () => {
                  t((this.#u = k.promise = (0, s.T)()));
                },
                i = this.#u;
              switch (i.status) {
                case "pending":
                  e.queryHash === r.queryHash && t(i);
                  break;
                case "fulfilled":
                  ("error" === k.status || k.data !== i.value) && n();
                  break;
                case "rejected":
                  ("error" !== k.status || k.error !== i.reason) && n();
              }
            }
            return k;
          }
          updateResult() {
            let e = this.#t,
              t = this.createResult(this.#d, this.options);
            (this.#f = this.#d.state),
              (this.#p = this.options),
              void 0 !== this.#f.data && (this.#b = this.#d),
              (0, c.f8)(t, e) ||
                ((this.#t = t),
                this.#o({
                  listeners: (() => {
                    if (!e) return !0;
                    let { notifyOnChangeProps: t } = this.options,
                      n = "function" == typeof t ? t() : t;
                    if ("all" === n || (!n && !this.#A.size)) return !0;
                    let r = new Set(n ?? this.#A);
                    return (
                      this.options.throwOnError && r.add("error"),
                      Object.keys(this.#t).some(
                        (t) => this.#t[t] !== e[t] && r.has(t)
                      )
                    );
                  })(),
                }));
          }
          #B() {
            let e = this.#e.getQueryCache().build(this.#e, this.options);
            if (e === this.#d) return;
            let t = this.#d;
            (this.#d = e),
              (this.#h = e.state),
              this.hasListeners() &&
                (t?.removeObserver(this), e.addObserver(this));
          }
          onQueryUpdate() {
            this.updateResult(), this.hasListeners() && this.#C();
          }
          #o(e) {
            i.jG.batch(() => {
              e.listeners &&
                this.listeners.forEach((e) => {
                  e(this.#t);
                }),
                this.#e
                  .getQueryCache()
                  .notify({ query: this.#d, type: "observerResultsUpdated" });
            });
          }
        };
      function u(e, t) {
        return (
          (!1 !== (0, c.Eh)(t.enabled, e) &&
            void 0 === e.state.data &&
            ("error" !== e.state.status || !1 !== t.retryOnMount)) ||
          (void 0 !== e.state.data && d(e, t, t.refetchOnMount))
        );
      }
      function d(e, t, n) {
        if (!1 !== (0, c.Eh)(t.enabled, e)) {
          let r = "function" == typeof n ? n(e) : n;
          return "always" === r || (!1 !== r && f(e, t));
        }
        return !1;
      }
      function h(e, t, n, r) {
        return (
          (e !== t || !1 === (0, c.Eh)(r.enabled, e)) &&
          (!n.suspense || "error" !== e.state.status) &&
          f(e, n)
        );
      }
      function f(e, t) {
        return (
          !1 !== (0, c.Eh)(t.enabled, e) &&
          e.isStaleByTime((0, c.d2)(t.staleTime, e))
        );
      }
      var p = n(12115),
        m = n(26715);
      n(95155);
      var y = p.createContext(
          (function () {
            let e = !1;
            return {
              clearReset: () => {
                e = !1;
              },
              reset: () => {
                e = !0;
              },
              isReset: () => e,
            };
          })()
        ),
        b = () => p.useContext(y),
        g = (e, t) => {
          (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
            !t.isReset() &&
            (e.retryOnMount = !1);
        },
        w = (e) => {
          p.useEffect(() => {
            e.clearReset();
          }, [e]);
        },
        v = (e) => {
          let {
            result: t,
            errorResetBoundary: n,
            throwOnError: r,
            query: i,
            suspense: o,
          } = e;
          return (
            t.isError &&
            !n.isReset() &&
            !t.isFetching &&
            i &&
            ((o && void 0 === t.data) || (0, c.GU)(r, [t.error, i]))
          );
        },
        A = p.createContext(!1),
        x = () => p.useContext(A);
      A.Provider;
      var C = (e) => {
          let t = e.staleTime;
          e.suspense &&
            ((e.staleTime =
              "function" == typeof t
                ? (...e) => Math.max(t(...e), 1e3)
                : Math.max(t ?? 1e3, 1e3)),
            "number" == typeof e.gcTime &&
              (e.gcTime = Math.max(e.gcTime, 1e3)));
        },
        E = (e, t) => e.isLoading && e.isFetching && !t,
        I = (e, t) => e?.suspense && t.isPending,
        B = (e, t, n) =>
          t.fetchOptimistic(e).catch(() => {
            n.clearReset();
          });
      function k(e, t) {
        return (function (e, t, n) {
          var r, o, a, s, l;
          let u = (0, m.jE)(n),
            d = x(),
            h = b(),
            f = u.defaultQueryOptions(e);
          null == (o = u.getDefaultOptions().queries) ||
            null == (r = o._experimental_beforeQuery) ||
            r.call(o, f),
            (f._optimisticResults = d ? "isRestoring" : "optimistic"),
            C(f),
            g(f, h),
            w(h);
          let y = !u.getQueryCache().get(f.queryHash),
            [A] = p.useState(() => new t(u, f)),
            k = A.getOptimisticResult(f),
            P = !d && !1 !== e.subscribed;
          if (
            (p.useSyncExternalStore(
              p.useCallback(
                (e) => {
                  let t = P ? A.subscribe(i.jG.batchCalls(e)) : c.lQ;
                  return A.updateResult(), t;
                },
                [A, P]
              ),
              () => A.getCurrentResult(),
              () => A.getCurrentResult()
            ),
            p.useEffect(() => {
              A.setOptions(f);
            }, [f, A]),
            I(f, k))
          )
            throw B(f, A, h);
          if (
            v({
              result: k,
              errorResetBoundary: h,
              throwOnError: f.throwOnError,
              query: u.getQueryCache().get(f.queryHash),
              suspense: f.suspense,
            })
          )
            throw k.error;
          if (
            (null == (s = u.getDefaultOptions().queries) ||
              null == (a = s._experimental_afterQuery) ||
              a.call(s, f, k),
            f.experimental_prefetchInRender && !c.S$ && E(k, d))
          ) {
            let e = y
              ? B(f, A, h)
              : null == (l = u.getQueryCache().get(f.queryHash))
              ? void 0
              : l.promise;
            null == e ||
              e.catch(c.lQ).finally(() => {
                A.updateResult();
              });
          }
          return f.notifyOnChangeProps ? k : A.trackResult(k);
        })(e, l, t);
      }
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
    34132: (e, t, n) => {
      "use strict";
      n.d(t, { secp256k1: () => ew });
      var r = n(17829),
        i = n(24526),
        o = n(19989);
      class a extends o.Vw {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), (0, i.sd)(e);
          let n = (0, o.ZJ)(t);
          if (
            ((this.iHash = e.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let r = this.blockLen,
            a = new Uint8Array(r);
          a.set(n.length > r ? e.create().update(n).digest() : n);
          for (let e = 0; e < a.length; e++) a[e] ^= 54;
          this.iHash.update(a), (this.oHash = e.create());
          for (let e = 0; e < a.length; e++) a[e] ^= 106;
          this.oHash.update(a), a.fill(0);
        }
        update(e) {
          return (0, i.CC)(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          (0, i.CC)(this),
            (0, i.DO)(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy();
        }
        digest() {
          let e = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(e), e;
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: t,
            iHash: n,
            finished: r,
            destroyed: i,
            blockLen: o,
            outputLen: a,
          } = this;
          return (
            (e.finished = r),
            (e.destroyed = i),
            (e.blockLen = o),
            (e.outputLen = a),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = n._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let s = (e, t, n) => new a(e, t).update(n).digest();
      s.create = (e, t) => new a(e, t);
      let c = BigInt(0),
        l = BigInt(1);
      function u(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function d(e) {
        if (!u(e)) throw Error("Uint8Array expected");
      }
      function h(e, t) {
        if ("boolean" != typeof t)
          throw Error(e + " boolean expected, got " + t);
      }
      function f(e) {
        let t = e.toString(16);
        return 1 & t.length ? "0" + t : t;
      }
      function p(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        return "" === e ? c : BigInt("0x" + e);
      }
      let m =
          "function" == typeof Uint8Array.from([]).toHex &&
          "function" == typeof Uint8Array.fromHex,
        y = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function b(e) {
        if ((d(e), m)) return e.toHex();
        let t = "";
        for (let n = 0; n < e.length; n++) t += y[e[n]];
        return t;
      }
      let g = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function w(e) {
        return e >= g._0 && e <= g._9
          ? e - g._0
          : e >= g.A && e <= g.F
          ? e - (g.A - 10)
          : e >= g.a && e <= g.f
          ? e - (g.a - 10)
          : void 0;
      }
      function v(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        if (m) return Uint8Array.fromHex(e);
        let t = e.length,
          n = t / 2;
        if (t % 2)
          throw Error("hex string expected, got unpadded hex of length " + t);
        let r = new Uint8Array(n);
        for (let t = 0, i = 0; t < n; t++, i += 2) {
          let n = w(e.charCodeAt(i)),
            o = w(e.charCodeAt(i + 1));
          if (void 0 === n || void 0 === o)
            throw Error(
              'hex string expected, got non-hex character "' +
                (e[i] + e[i + 1]) +
                '" at index ' +
                i
            );
          r[t] = 16 * n + o;
        }
        return r;
      }
      function A(e) {
        return p(b(e));
      }
      function x(e) {
        return d(e), p(b(Uint8Array.from(e).reverse()));
      }
      function C(e, t) {
        return v(e.toString(16).padStart(2 * t, "0"));
      }
      function E(e, t) {
        return C(e, t).reverse();
      }
      function I(e, t, n) {
        let r;
        if ("string" == typeof t)
          try {
            r = v(t);
          } catch (t) {
            throw Error(e + " must be hex string or Uint8Array, cause: " + t);
          }
        else if (u(t)) r = Uint8Array.from(t);
        else throw Error(e + " must be hex string or Uint8Array");
        let i = r.length;
        if ("number" == typeof n && i !== n)
          throw Error(e + " of length " + n + " expected, got " + i);
        return r;
      }
      function B(...e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          d(r), (t += r.length);
        }
        let n = new Uint8Array(t);
        for (let t = 0, r = 0; t < e.length; t++) {
          let i = e[t];
          n.set(i, r), (r += i.length);
        }
        return n;
      }
      let k = (e) => "bigint" == typeof e && c <= e;
      function P(e, t, n) {
        return k(e) && k(t) && k(n) && t <= e && e < n;
      }
      function S(e, t, n, r) {
        if (!P(t, n, r))
          throw Error(
            "expected valid " + e + ": " + n + " <= n < " + r + ", got " + t
          );
      }
      let O = (e) => (l << BigInt(e)) - l,
        M = (e) => new Uint8Array(e),
        T = (e) => Uint8Array.from(e),
        R = {
          bigint: (e) => "bigint" == typeof e,
          function: (e) => "function" == typeof e,
          boolean: (e) => "boolean" == typeof e,
          string: (e) => "string" == typeof e,
          stringOrUint8Array: (e) => "string" == typeof e || u(e),
          isSafeInteger: (e) => Number.isSafeInteger(e),
          array: (e) => Array.isArray(e),
          field: (e, t) => t.Fp.isValid(e),
          hash: (e) =>
            "function" == typeof e && Number.isSafeInteger(e.outputLen),
        };
      function N(e, t, n = {}) {
        let r = (t, n, r) => {
          let i = R[n];
          if ("function" != typeof i) throw Error("invalid validator function");
          let o = e[t];
          if ((!r || void 0 !== o) && !i(o, e))
            throw Error(
              "param " + String(t) + " is invalid. Expected " + n + ", got " + o
            );
        };
        for (let [e, n] of Object.entries(t)) r(e, n, !1);
        for (let [e, t] of Object.entries(n)) r(e, t, !0);
        return e;
      }
      function F(e) {
        let t = new WeakMap();
        return (n, ...r) => {
          let i = t.get(n);
          if (void 0 !== i) return i;
          let o = e(n, ...r);
          return t.set(n, o), o;
        };
      }
      let U = BigInt(0),
        j = BigInt(1),
        D = BigInt(2),
        L = BigInt(3),
        q = BigInt(4),
        Q = BigInt(5),
        W = BigInt(8);
      function z(e, t) {
        let n = e % t;
        return n >= U ? n : t + n;
      }
      function G(e, t, n) {
        let r = e;
        for (; t-- > U; ) (r *= r), (r %= n);
        return r;
      }
      function H(e, t) {
        if (e === U) throw Error("invert: expected non-zero number");
        if (t <= U) throw Error("invert: expected positive modulus, got " + t);
        let n = z(e, t),
          r = t,
          i = U,
          o = j,
          a = j,
          s = U;
        for (; n !== U; ) {
          let e = r / n,
            t = r % n,
            c = i - a * e,
            l = o - s * e;
          (r = n), (n = t), (i = a), (o = s), (a = c), (s = l);
        }
        if (r !== j) throw Error("invert: does not exist");
        return z(i, t);
      }
      let K = [
        "create",
        "isValid",
        "is0",
        "neg",
        "inv",
        "sqrt",
        "sqr",
        "eql",
        "add",
        "sub",
        "mul",
        "pow",
        "div",
        "addN",
        "subN",
        "mulN",
        "sqrN",
      ];
      function J(e, t) {
        let n = void 0 !== t ? t : e.toString(2).length,
          r = Math.ceil(n / 8);
        return { nBitLength: n, nByteLength: r };
      }
      function $(e, t, n = !1, r = {}) {
        let i;
        if (e <= U) throw Error("invalid field: expected ORDER > 0, got " + e);
        let { nBitLength: o, nByteLength: a } = J(e, t);
        if (a > 2048)
          throw Error("invalid field: expected ORDER of <= 2048 bytes");
        let s = Object.freeze({
          ORDER: e,
          isLE: n,
          BITS: o,
          BYTES: a,
          MASK: O(o),
          ZERO: U,
          ONE: j,
          create: (t) => z(t, e),
          isValid: (t) => {
            if ("bigint" != typeof t)
              throw Error(
                "invalid field element: expected bigint, got " + typeof t
              );
            return U <= t && t < e;
          },
          is0: (e) => e === U,
          isOdd: (e) => (e & j) === j,
          neg: (t) => z(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => z(t * t, e),
          add: (t, n) => z(t + n, e),
          sub: (t, n) => z(t - n, e),
          mul: (t, n) => z(t * n, e),
          pow: (e, t) =>
            (function (e, t, n) {
              if (n < U) throw Error("invalid exponent, negatives unsupported");
              if (n === U) return e.ONE;
              if (n === j) return t;
              let r = e.ONE,
                i = t;
              for (; n > U; )
                n & j && (r = e.mul(r, i)), (i = e.sqr(i)), (n >>= j);
              return r;
            })(s, e, t),
          div: (t, n) => z(t * H(n, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => H(t, e),
          sqrt:
            r.sqrt ||
            ((t) => (
              i ||
                (i = (function (e) {
                  if (e % q === L) {
                    let t = (e + j) / q;
                    return function (e, n) {
                      let r = e.pow(n, t);
                      if (!e.eql(e.sqr(r), n))
                        throw Error("Cannot find square root");
                      return r;
                    };
                  }
                  if (e % W === Q) {
                    let t = (e - Q) / W;
                    return function (e, n) {
                      let r = e.mul(n, D),
                        i = e.pow(r, t),
                        o = e.mul(n, i),
                        a = e.mul(e.mul(o, D), i),
                        s = e.mul(o, e.sub(a, e.ONE));
                      if (!e.eql(e.sqr(s), n))
                        throw Error("Cannot find square root");
                      return s;
                    };
                  }
                  return (function (e) {
                    let t,
                      n,
                      r,
                      i = (e - j) / D;
                    for (t = e - j, n = 0; t % D === U; t /= D, n++);
                    for (
                      r = D;
                      r < e &&
                      (function (e, t, n) {
                        if (t < U)
                          throw Error(
                            "invalid exponent, negatives unsupported"
                          );
                        if (n <= U) throw Error("invalid modulus");
                        if (n === j) return U;
                        let r = j;
                        for (; t > U; )
                          t & j && (r = (r * e) % n),
                            (e = (e * e) % n),
                            (t >>= j);
                        return r;
                      })(r, i, e) !==
                        e - j;
                      r++
                    )
                      if (r > 1e3)
                        throw Error(
                          "Cannot find square root: likely non-prime P"
                        );
                    if (1 === n) {
                      let t = (e + j) / q;
                      return function (e, n) {
                        let r = e.pow(n, t);
                        if (!e.eql(e.sqr(r), n))
                          throw Error("Cannot find square root");
                        return r;
                      };
                    }
                    let o = (t + j) / D;
                    return function (e, a) {
                      if (e.pow(a, i) === e.neg(e.ONE))
                        throw Error("Cannot find square root");
                      let s = n,
                        c = e.pow(e.mul(e.ONE, r), t),
                        l = e.pow(a, o),
                        u = e.pow(a, t);
                      for (; !e.eql(u, e.ONE); ) {
                        if (e.eql(u, e.ZERO)) return e.ZERO;
                        let t = 1;
                        for (let n = e.sqr(u); t < s && !e.eql(n, e.ONE); t++)
                          n = e.sqr(n);
                        let n = e.pow(c, j << BigInt(s - t - 1));
                        (c = e.sqr(n)),
                          (l = e.mul(l, n)),
                          (u = e.mul(u, c)),
                          (s = t);
                      }
                      return l;
                    };
                  })(e);
                })(e)),
              i(s, t)
            )),
          invertBatch: (e) =>
            (function (e, t) {
              let n = Array(t.length),
                r = t.reduce(
                  (t, r, i) => (e.is0(r) ? t : ((n[i] = t), e.mul(t, r))),
                  e.ONE
                ),
                i = e.inv(r);
              return (
                t.reduceRight(
                  (t, r, i) =>
                    e.is0(r) ? t : ((n[i] = e.mul(t, n[i])), e.mul(t, r)),
                  i
                ),
                n
              );
            })(s, e),
          cmov: (e, t, n) => (n ? t : e),
          toBytes: (e) => (n ? E(e, a) : C(e, a)),
          fromBytes: (e) => {
            if (e.length !== a)
              throw Error(
                "Field.fromBytes: expected " + a + " bytes, got " + e.length
              );
            return n ? x(e) : A(e);
          },
        });
        return Object.freeze(s);
      }
      function V(e) {
        if ("bigint" != typeof e) throw Error("field order must be bigint");
        return Math.ceil(e.toString(2).length / 8);
      }
      function Y(e) {
        let t = V(e);
        return t + Math.ceil(t / 2);
      }
      let _ = BigInt(0),
        Z = BigInt(1);
      function X(e, t) {
        let n = t.negate();
        return e ? n : t;
      }
      function ee(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw Error(
            "invalid window size, expected [1.." + t + "], got W=" + e
          );
      }
      function et(e, t) {
        ee(e, t);
        let n = Math.ceil(t / e) + 1,
          r = 2 ** (e - 1),
          i = 2 ** e;
        return {
          windows: n,
          windowSize: r,
          mask: O(e),
          maxNumber: i,
          shiftBy: BigInt(e),
        };
      }
      function en(e, t, n) {
        let { windowSize: r, mask: i, maxNumber: o, shiftBy: a } = n,
          s = Number(e & i),
          c = e >> a;
        s > r && ((s -= o), (c += Z));
        let l = t * r,
          u = l + Math.abs(s) - 1,
          d = 0 === s;
        return {
          nextN: c,
          offset: u,
          isZero: d,
          isNeg: s < 0,
          isNegF: t % 2 != 0,
          offsetF: l,
        };
      }
      let er = new WeakMap(),
        ei = new WeakMap();
      function eo(e) {
        return ei.get(e) || 1;
      }
      function ea(e) {
        return (
          N(
            e.Fp,
            K.reduce((e, t) => ((e[t] = "function"), e), {
              ORDER: "bigint",
              MASK: "bigint",
              BYTES: "isSafeInteger",
              BITS: "isSafeInteger",
            })
          ),
          N(
            e,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
          ),
          Object.freeze({ ...J(e.n, e.nBitLength), ...e, ...{ p: e.Fp.ORDER } })
        );
      }
      function es(e) {
        void 0 !== e.lowS && h("lowS", e.lowS),
          void 0 !== e.prehash && h("prehash", e.prehash);
      }
      class ec extends Error {
        constructor(e = "") {
          super(e);
        }
      }
      let el = {
          Err: ec,
          _tlv: {
            encode: (e, t) => {
              let { Err: n } = el;
              if (e < 0 || e > 256) throw new n("tlv.encode: wrong tag");
              if (1 & t.length) throw new n("tlv.encode: unpadded data");
              let r = t.length / 2,
                i = f(r);
              if ((i.length / 2) & 128)
                throw new n("tlv.encode: long form length too big");
              let o = r > 127 ? f((i.length / 2) | 128) : "";
              return f(e) + o + i + t;
            },
            decode(e, t) {
              let { Err: n } = el,
                r = 0;
              if (e < 0 || e > 256) throw new n("tlv.encode: wrong tag");
              if (t.length < 2 || t[r++] !== e)
                throw new n("tlv.decode: wrong tlv");
              let i = t[r++],
                o = 0;
              if (128 & i) {
                let e = 127 & i;
                if (!e)
                  throw new n(
                    "tlv.decode(long): indefinite length not supported"
                  );
                if (e > 4)
                  throw new n("tlv.decode(long): byte length is too big");
                let a = t.subarray(r, r + e);
                if (a.length !== e)
                  throw new n("tlv.decode: length bytes not complete");
                if (0 === a[0])
                  throw new n("tlv.decode(long): zero leftmost byte");
                for (let e of a) o = (o << 8) | e;
                if (((r += e), o < 128))
                  throw new n("tlv.decode(long): not minimal encoding");
              } else o = i;
              let a = t.subarray(r, r + o);
              if (a.length !== o) throw new n("tlv.decode: wrong value length");
              return { v: a, l: t.subarray(r + o) };
            },
          },
          _int: {
            encode(e) {
              let { Err: t } = el;
              if (e < eu)
                throw new t("integer: negative integers are not allowed");
              let n = f(e);
              if (
                (8 & Number.parseInt(n[0], 16) && (n = "00" + n), 1 & n.length)
              )
                throw new t("unexpected DER parsing assertion: unpadded hex");
              return n;
            },
            decode(e) {
              let { Err: t } = el;
              if (128 & e[0])
                throw new t("invalid signature integer: negative");
              if (0 === e[0] && !(128 & e[1]))
                throw new t(
                  "invalid signature integer: unnecessary leading zero"
                );
              return A(e);
            },
          },
          toSig(e) {
            let { Err: t, _int: n, _tlv: r } = el,
              i = I("signature", e),
              { v: o, l: a } = r.decode(48, i);
            if (a.length)
              throw new t("invalid signature: left bytes after parsing");
            let { v: s, l: c } = r.decode(2, o),
              { v: l, l: u } = r.decode(2, c);
            if (u.length)
              throw new t("invalid signature: left bytes after parsing");
            return { r: n.decode(s), s: n.decode(l) };
          },
          hexFromSig(e) {
            let { _tlv: t, _int: n } = el,
              r = t.encode(2, n.encode(e.r)),
              i = t.encode(2, n.encode(e.s));
            return t.encode(48, r + i);
          },
        },
        eu = BigInt(0),
        ed = BigInt(1),
        eh = (BigInt(2), BigInt(3)),
        ef =
          (BigInt(4),
          BigInt(
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
          )),
        ep = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        em = BigInt(1),
        ey = BigInt(2),
        eb = (e, t) => (e + t / ey) / t,
        eg = $(ef, void 0, void 0, {
          sqrt: function (e) {
            let t = BigInt(3),
              n = BigInt(6),
              r = BigInt(11),
              i = BigInt(22),
              o = BigInt(23),
              a = BigInt(44),
              s = BigInt(88),
              c = (e * e * e) % ef,
              l = (c * c * e) % ef,
              u = (G(l, t, ef) * l) % ef,
              d = (G(u, t, ef) * l) % ef,
              h = (G(d, ey, ef) * c) % ef,
              f = (G(h, r, ef) * h) % ef,
              p = (G(f, i, ef) * f) % ef,
              m = (G(p, a, ef) * p) % ef,
              y = (G(m, s, ef) * m) % ef,
              b = (G(y, a, ef) * p) % ef,
              g = (G(b, t, ef) * l) % ef,
              w = (G(g, o, ef) * f) % ef,
              v = (G(w, n, ef) * c) % ef,
              A = G(v, ey, ef);
            if (!eg.eql(eg.sqr(A), e)) throw Error("Cannot find square root");
            return A;
          },
        }),
        ew = (function (e, t) {
          let n = (t) =>
            (function (e) {
              let t = (function (e) {
                  let t = ea(e);
                  return (
                    N(
                      t,
                      {
                        hash: "hash",
                        hmac: "function",
                        randomBytes: "function",
                      },
                      {
                        bits2int: "function",
                        bits2int_modN: "function",
                        lowS: "boolean",
                      }
                    ),
                    Object.freeze({ lowS: !0, ...t })
                  );
                })(e),
                { Fp: n, n: r } = t,
                i = n.BYTES + 1,
                o = 2 * n.BYTES + 1;
              function a(e) {
                return z(e, r);
              }
              let {
                  ProjectivePoint: s,
                  normPrivateKeyToScalar: d,
                  weierstrassEquation: f,
                  isWithinCurveOrder: p,
                } = (function (e) {
                  var t;
                  let n = (function (e) {
                      let t = ea(e);
                      N(
                        t,
                        { a: "field", b: "field" },
                        {
                          allowedPrivateKeyLengths: "array",
                          wrapPrivateKey: "boolean",
                          isTorsionFree: "function",
                          clearCofactor: "function",
                          allowInfinityPoint: "boolean",
                          fromBytes: "function",
                          toBytes: "function",
                        }
                      );
                      let { endo: n, Fp: r, a: i } = t;
                      if (n) {
                        if (!r.eql(i, r.ZERO))
                          throw Error(
                            "invalid endomorphism, can only be defined for Koblitz curves that have a=0"
                          );
                        if (
                          "object" != typeof n ||
                          "bigint" != typeof n.beta ||
                          "function" != typeof n.splitScalar
                        )
                          throw Error(
                            "invalid endomorphism, expected beta: bigint and splitScalar: function"
                          );
                      }
                      return Object.freeze({ ...t });
                    })(e),
                    { Fp: r } = n,
                    i = $(n.n, n.nBitLength),
                    o =
                      n.toBytes ||
                      ((e, t, n) => {
                        let i = t.toAffine();
                        return B(
                          Uint8Array.from([4]),
                          r.toBytes(i.x),
                          r.toBytes(i.y)
                        );
                      }),
                    a =
                      n.fromBytes ||
                      ((e) => {
                        let t = e.subarray(1);
                        return {
                          x: r.fromBytes(t.subarray(0, r.BYTES)),
                          y: r.fromBytes(t.subarray(r.BYTES, 2 * r.BYTES)),
                        };
                      });
                  function s(e) {
                    let { a: t, b: i } = n,
                      o = r.sqr(e),
                      a = r.mul(o, e);
                    return r.add(r.add(a, r.mul(e, t)), i);
                  }
                  if (!r.eql(r.sqr(n.Gy), s(n.Gx)))
                    throw Error("bad generator point: equation left != right");
                  function d(e) {
                    let t,
                      {
                        allowedPrivateKeyLengths: r,
                        nByteLength: i,
                        wrapPrivateKey: o,
                        n: a,
                      } = n;
                    if (r && "bigint" != typeof e) {
                      if (
                        (u(e) && (e = b(e)),
                        "string" != typeof e || !r.includes(e.length))
                      )
                        throw Error("invalid private key");
                      e = e.padStart(2 * i, "0");
                    }
                    try {
                      t = "bigint" == typeof e ? e : A(I("private key", e, i));
                    } catch (t) {
                      throw Error(
                        "invalid private key, expected hex or " +
                          i +
                          " bytes, got " +
                          typeof e
                      );
                    }
                    return o && (t = z(t, a)), S("private key", t, ed, a), t;
                  }
                  function f(e) {
                    if (!(e instanceof y))
                      throw Error("ProjectivePoint expected");
                  }
                  let p = F((e, t) => {
                      let { px: n, py: i, pz: o } = e;
                      if (r.eql(o, r.ONE)) return { x: n, y: i };
                      let a = e.is0();
                      null == t && (t = a ? r.ONE : r.inv(o));
                      let s = r.mul(n, t),
                        c = r.mul(i, t),
                        l = r.mul(o, t);
                      if (a) return { x: r.ZERO, y: r.ZERO };
                      if (!r.eql(l, r.ONE)) throw Error("invZ was invalid");
                      return { x: s, y: c };
                    }),
                    m = F((e) => {
                      if (e.is0()) {
                        if (n.allowInfinityPoint && !r.is0(e.py)) return;
                        throw Error("bad point: ZERO");
                      }
                      let { x: t, y: i } = e.toAffine();
                      if (!r.isValid(t) || !r.isValid(i))
                        throw Error("bad point: x or y not FE");
                      let o = r.sqr(i),
                        a = s(t);
                      if (!r.eql(o, a))
                        throw Error("bad point: equation left != right");
                      if (!e.isTorsionFree())
                        throw Error("bad point: not in prime-order subgroup");
                      return !0;
                    });
                  class y {
                    constructor(e, t, n) {
                      if (null == e || !r.isValid(e)) throw Error("x required");
                      if (null == t || !r.isValid(t)) throw Error("y required");
                      if (null == n || !r.isValid(n)) throw Error("z required");
                      (this.px = e),
                        (this.py = t),
                        (this.pz = n),
                        Object.freeze(this);
                    }
                    static fromAffine(e) {
                      let { x: t, y: n } = e || {};
                      if (!e || !r.isValid(t) || !r.isValid(n))
                        throw Error("invalid affine point");
                      if (e instanceof y)
                        throw Error("projective point not allowed");
                      let i = (e) => r.eql(e, r.ZERO);
                      return i(t) && i(n) ? y.ZERO : new y(t, n, r.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(e) {
                      let t = r.invertBatch(e.map((e) => e.pz));
                      return e
                        .map((e, n) => e.toAffine(t[n]))
                        .map(y.fromAffine);
                    }
                    static fromHex(e) {
                      let t = y.fromAffine(a(I("pointHex", e)));
                      return t.assertValidity(), t;
                    }
                    static fromPrivateKey(e) {
                      return y.BASE.multiply(d(e));
                    }
                    static msm(e, t) {
                      return (function (e, t, n, r) {
                        if (
                          ((function (e, t) {
                            if (!Array.isArray(e))
                              throw Error("array expected");
                            e.forEach((e, n) => {
                              if (!(e instanceof t))
                                throw Error("invalid point at index " + n);
                            });
                          })(n, e),
                          (function (e, t) {
                            if (!Array.isArray(e))
                              throw Error("array of scalars expected");
                            e.forEach((e, n) => {
                              if (!t.isValid(e))
                                throw Error("invalid scalar at index " + n);
                            });
                          })(r, t),
                          n.length !== r.length)
                        )
                          throw Error(
                            "arrays of points and scalars must have equal length"
                          );
                        let i = e.ZERO,
                          o = (function (e) {
                            let t;
                            for (t = 0; e > c; e >>= l, t += 1);
                            return t;
                          })(BigInt(n.length)),
                          a = o > 12 ? o - 3 : o > 4 ? o - 2 : o ? 2 : 1,
                          s = O(a),
                          u = Array(Number(s) + 1).fill(i),
                          d = Math.floor((t.BITS - 1) / a) * a,
                          h = i;
                        for (let e = d; e >= 0; e -= a) {
                          u.fill(i);
                          for (let t = 0; t < r.length; t++) {
                            let i = Number((r[t] >> BigInt(e)) & s);
                            u[i] = u[i].add(n[t]);
                          }
                          let t = i;
                          for (let e = u.length - 1, n = i; e > 0; e--)
                            (n = n.add(u[e])), (t = t.add(n));
                          if (((h = h.add(t)), 0 !== e))
                            for (let e = 0; e < a; e++) h = h.double();
                        }
                        return h;
                      })(y, i, e, t);
                    }
                    _setWindowSize(e) {
                      w.setWindowSize(this, e);
                    }
                    assertValidity() {
                      m(this);
                    }
                    hasEvenY() {
                      let { y: e } = this.toAffine();
                      if (r.isOdd) return !r.isOdd(e);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(e) {
                      f(e);
                      let { px: t, py: n, pz: i } = this,
                        { px: o, py: a, pz: s } = e,
                        c = r.eql(r.mul(t, s), r.mul(o, i)),
                        l = r.eql(r.mul(n, s), r.mul(a, i));
                      return c && l;
                    }
                    negate() {
                      return new y(this.px, r.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: e, b: t } = n,
                        i = r.mul(t, eh),
                        { px: o, py: a, pz: s } = this,
                        c = r.ZERO,
                        l = r.ZERO,
                        u = r.ZERO,
                        d = r.mul(o, o),
                        h = r.mul(a, a),
                        f = r.mul(s, s),
                        p = r.mul(o, a);
                      return (
                        (p = r.add(p, p)),
                        (u = r.mul(o, s)),
                        (u = r.add(u, u)),
                        (c = r.mul(e, u)),
                        (l = r.mul(i, f)),
                        (l = r.add(c, l)),
                        (c = r.sub(h, l)),
                        (l = r.add(h, l)),
                        (l = r.mul(c, l)),
                        (c = r.mul(p, c)),
                        (u = r.mul(i, u)),
                        (f = r.mul(e, f)),
                        (p = r.sub(d, f)),
                        (p = r.mul(e, p)),
                        (p = r.add(p, u)),
                        (u = r.add(d, d)),
                        (d = r.add(u, d)),
                        (d = r.add(d, f)),
                        (d = r.mul(d, p)),
                        (l = r.add(l, d)),
                        (f = r.mul(a, s)),
                        (f = r.add(f, f)),
                        (d = r.mul(f, p)),
                        (c = r.sub(c, d)),
                        (u = r.mul(f, h)),
                        (u = r.add(u, u)),
                        new y(c, l, (u = r.add(u, u)))
                      );
                    }
                    add(e) {
                      f(e);
                      let { px: t, py: i, pz: o } = this,
                        { px: a, py: s, pz: c } = e,
                        l = r.ZERO,
                        u = r.ZERO,
                        d = r.ZERO,
                        h = n.a,
                        p = r.mul(n.b, eh),
                        m = r.mul(t, a),
                        b = r.mul(i, s),
                        g = r.mul(o, c),
                        w = r.add(t, i),
                        v = r.add(a, s);
                      (w = r.mul(w, v)),
                        (v = r.add(m, b)),
                        (w = r.sub(w, v)),
                        (v = r.add(t, o));
                      let A = r.add(a, c);
                      return (
                        (v = r.mul(v, A)),
                        (A = r.add(m, g)),
                        (v = r.sub(v, A)),
                        (A = r.add(i, o)),
                        (l = r.add(s, c)),
                        (A = r.mul(A, l)),
                        (l = r.add(b, g)),
                        (A = r.sub(A, l)),
                        (d = r.mul(h, v)),
                        (l = r.mul(p, g)),
                        (d = r.add(l, d)),
                        (l = r.sub(b, d)),
                        (d = r.add(b, d)),
                        (u = r.mul(l, d)),
                        (b = r.add(m, m)),
                        (b = r.add(b, m)),
                        (g = r.mul(h, g)),
                        (v = r.mul(p, v)),
                        (b = r.add(b, g)),
                        (g = r.sub(m, g)),
                        (g = r.mul(h, g)),
                        (v = r.add(v, g)),
                        (m = r.mul(b, v)),
                        (u = r.add(u, m)),
                        (m = r.mul(A, v)),
                        (l = r.mul(w, l)),
                        (l = r.sub(l, m)),
                        (m = r.mul(w, b)),
                        (d = r.mul(A, d)),
                        new y(l, u, (d = r.add(d, m)))
                      );
                    }
                    subtract(e) {
                      return this.add(e.negate());
                    }
                    is0() {
                      return this.equals(y.ZERO);
                    }
                    wNAF(e) {
                      return w.wNAFCached(this, e, y.normalizeZ);
                    }
                    multiplyUnsafe(e) {
                      let { endo: t, n: i } = n;
                      S("scalar", e, eu, i);
                      let o = y.ZERO;
                      if (e === eu) return o;
                      if (this.is0() || e === ed) return this;
                      if (!t || w.hasPrecomputes(this))
                        return w.wNAFCachedUnsafe(this, e, y.normalizeZ);
                      let {
                          k1neg: a,
                          k1: s,
                          k2neg: c,
                          k2: l,
                        } = t.splitScalar(e),
                        u = o,
                        d = o,
                        h = this;
                      for (; s > eu || l > eu; )
                        s & ed && (u = u.add(h)),
                          l & ed && (d = d.add(h)),
                          (h = h.double()),
                          (s >>= ed),
                          (l >>= ed);
                      return (
                        a && (u = u.negate()),
                        c && (d = d.negate()),
                        (d = new y(r.mul(d.px, t.beta), d.py, d.pz)),
                        u.add(d)
                      );
                    }
                    multiply(e) {
                      let t,
                        i,
                        { endo: o, n: a } = n;
                      if ((S("scalar", e, ed, a), o)) {
                        let {
                            k1neg: n,
                            k1: a,
                            k2neg: s,
                            k2: c,
                          } = o.splitScalar(e),
                          { p: l, f: u } = this.wNAF(a),
                          { p: d, f: h } = this.wNAF(c);
                        (l = w.constTimeNegate(n, l)),
                          (d = w.constTimeNegate(s, d)),
                          (d = new y(r.mul(d.px, o.beta), d.py, d.pz)),
                          (t = l.add(d)),
                          (i = u.add(h));
                      } else {
                        let { p: n, f: r } = this.wNAF(e);
                        (t = n), (i = r);
                      }
                      return y.normalizeZ([t, i])[0];
                    }
                    multiplyAndAddUnsafe(e, t, n) {
                      let r = y.BASE,
                        i = (e, t) =>
                          t !== eu && t !== ed && e.equals(r)
                            ? e.multiply(t)
                            : e.multiplyUnsafe(t),
                        o = i(this, t).add(i(e, n));
                      return o.is0() ? void 0 : o;
                    }
                    toAffine(e) {
                      return p(this, e);
                    }
                    isTorsionFree() {
                      let { h: e, isTorsionFree: t } = n;
                      if (e === ed) return !0;
                      if (t) return t(y, this);
                      throw Error(
                        "isTorsionFree() has not been declared for the elliptic curve"
                      );
                    }
                    clearCofactor() {
                      let { h: e, clearCofactor: t } = n;
                      return e === ed
                        ? this
                        : t
                        ? t(y, this)
                        : this.multiplyUnsafe(n.h);
                    }
                    toRawBytes(e = !0) {
                      return (
                        h("isCompressed", e),
                        this.assertValidity(),
                        o(y, this, e)
                      );
                    }
                    toHex(e = !0) {
                      return h("isCompressed", e), b(this.toRawBytes(e));
                    }
                  }
                  (y.BASE = new y(n.Gx, n.Gy, r.ONE)),
                    (y.ZERO = new y(r.ZERO, r.ONE, r.ZERO));
                  let g = n.nBitLength,
                    w =
                      ((t = n.endo ? Math.ceil(g / 2) : g),
                      {
                        constTimeNegate: X,
                        hasPrecomputes: (e) => 1 !== eo(e),
                        unsafeLadder(e, t, n = y.ZERO) {
                          let r = e;
                          for (; t > _; )
                            t & Z && (n = n.add(r)),
                              (r = r.double()),
                              (t >>= Z);
                          return n;
                        },
                        precomputeWindow(e, n) {
                          let { windows: r, windowSize: i } = et(n, t),
                            o = [],
                            a = e,
                            s = a;
                          for (let e = 0; e < r; e++) {
                            (s = a), o.push(s);
                            for (let e = 1; e < i; e++)
                              (s = s.add(a)), o.push(s);
                            a = s.double();
                          }
                          return o;
                        },
                        wNAF(e, n, r) {
                          let i = y.ZERO,
                            o = y.BASE,
                            a = et(e, t);
                          for (let e = 0; e < a.windows; e++) {
                            let {
                              nextN: t,
                              offset: s,
                              isZero: c,
                              isNeg: l,
                              isNegF: u,
                              offsetF: d,
                            } = en(r, e, a);
                            (r = t),
                              c
                                ? (o = o.add(X(u, n[d])))
                                : (i = i.add(X(l, n[s])));
                          }
                          return { p: i, f: o };
                        },
                        wNAFUnsafe(e, n, r, i = y.ZERO) {
                          let o = et(e, t);
                          for (let e = 0; e < o.windows && r !== _; e++) {
                            let {
                              nextN: t,
                              offset: a,
                              isZero: s,
                              isNeg: c,
                            } = en(r, e, o);
                            if (((r = t), !s)) {
                              let e = n[a];
                              i = i.add(c ? e.negate() : e);
                            }
                          }
                          return i;
                        },
                        getPrecomputes(e, t, n) {
                          let r = er.get(t);
                          return (
                            r ||
                              ((r = this.precomputeWindow(t, e)),
                              1 !== e && er.set(t, n(r))),
                            r
                          );
                        },
                        wNAFCached(e, t, n) {
                          let r = eo(e);
                          return this.wNAF(r, this.getPrecomputes(r, e, n), t);
                        },
                        wNAFCachedUnsafe(e, t, n, r) {
                          let i = eo(e);
                          return 1 === i
                            ? this.unsafeLadder(e, t, r)
                            : this.wNAFUnsafe(
                                i,
                                this.getPrecomputes(i, e, n),
                                t,
                                r
                              );
                        },
                        setWindowSize(e, n) {
                          ee(n, t), ei.set(e, n), er.delete(e);
                        },
                      });
                  return {
                    CURVE: n,
                    ProjectivePoint: y,
                    normPrivateKeyToScalar: d,
                    weierstrassEquation: s,
                    isWithinCurveOrder: function (e) {
                      return P(e, ed, n.n);
                    },
                  };
                })({
                  ...t,
                  toBytes(e, t, r) {
                    let i = t.toAffine(),
                      o = n.toBytes(i.x);
                    return (h("isCompressed", r), r)
                      ? B(Uint8Array.from([t.hasEvenY() ? 2 : 3]), o)
                      : B(Uint8Array.from([4]), o, n.toBytes(i.y));
                  },
                  fromBytes(e) {
                    let t = e.length,
                      r = e[0],
                      a = e.subarray(1);
                    if (t === i && (2 === r || 3 === r)) {
                      let e,
                        t = A(a);
                      if (!P(t, ed, n.ORDER))
                        throw Error("Point is not on curve");
                      let i = f(t);
                      try {
                        e = n.sqrt(i);
                      } catch (e) {
                        throw Error(
                          "Point is not on curve" +
                            (e instanceof Error ? ": " + e.message : "")
                        );
                      }
                      return (
                        ((1 & r) == 1) != ((e & ed) === ed) && (e = n.neg(e)),
                        { x: t, y: e }
                      );
                    }
                    if (t === o && 4 === r)
                      return {
                        x: n.fromBytes(a.subarray(0, n.BYTES)),
                        y: n.fromBytes(a.subarray(n.BYTES, 2 * n.BYTES)),
                      };
                    throw Error(
                      "invalid Point, expected length of " +
                        i +
                        ", or uncompressed " +
                        o +
                        ", got " +
                        t
                    );
                  },
                }),
                m = (e) => b(C(e, t.nByteLength)),
                y = (e, t, n) => A(e.slice(t, n));
              class g {
                constructor(e, t, n) {
                  S("r", e, ed, r),
                    S("s", t, ed, r),
                    (this.r = e),
                    (this.s = t),
                    null != n && (this.recovery = n),
                    Object.freeze(this);
                }
                static fromCompact(e) {
                  let n = t.nByteLength;
                  return new g(
                    y((e = I("compactSignature", e, 2 * n)), 0, n),
                    y(e, n, 2 * n)
                  );
                }
                static fromDER(e) {
                  let { r: t, s: n } = el.toSig(I("DER", e));
                  return new g(t, n);
                }
                assertValidity() {}
                addRecoveryBit(e) {
                  return new g(this.r, this.s, e);
                }
                recoverPublicKey(e) {
                  let { r: i, s: o, recovery: c } = this,
                    l = R(I("msgHash", e));
                  if (null == c || ![0, 1, 2, 3].includes(c))
                    throw Error("recovery id invalid");
                  let u = 2 === c || 3 === c ? i + t.n : i;
                  if (u >= n.ORDER) throw Error("recovery id 2 or 3 invalid");
                  let d = (1 & c) == 0 ? "02" : "03",
                    h = s.fromHex(d + m(u)),
                    f = H(u, r),
                    p = a(-l * f),
                    y = a(o * f),
                    b = s.BASE.multiplyAndAddUnsafe(h, p, y);
                  if (!b) throw Error("point at infinify");
                  return b.assertValidity(), b;
                }
                hasHighS() {
                  return this.s > r >> ed;
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new g(this.r, a(-this.s), this.recovery)
                    : this;
                }
                toDERRawBytes() {
                  return v(this.toDERHex());
                }
                toDERHex() {
                  return el.hexFromSig({ r: this.r, s: this.s });
                }
                toCompactRawBytes() {
                  return v(this.toCompactHex());
                }
                toCompactHex() {
                  return m(this.r) + m(this.s);
                }
              }
              function w(e) {
                let t = u(e),
                  n = "string" == typeof e,
                  r = (t || n) && e.length;
                return t
                  ? r === i || r === o
                  : n
                  ? r === 2 * i || r === 2 * o
                  : e instanceof s;
              }
              let k =
                  t.bits2int ||
                  function (e) {
                    if (e.length > 8192) throw Error("input is too large");
                    let n = A(e),
                      r = 8 * e.length - t.nBitLength;
                    return r > 0 ? n >> BigInt(r) : n;
                  },
                R =
                  t.bits2int_modN ||
                  function (e) {
                    return a(k(e));
                  },
                U = O(t.nBitLength);
              function D(e) {
                return (
                  S("num < 2^" + t.nBitLength, e, eu, U), C(e, t.nByteLength)
                );
              }
              let L = { lowS: t.lowS, prehash: !1 },
                q = { lowS: t.lowS, prehash: !1 };
              return (
                s.BASE._setWindowSize(8),
                {
                  CURVE: t,
                  getPublicKey: function (e, t = !0) {
                    return s.fromPrivateKey(e).toRawBytes(t);
                  },
                  getSharedSecret: function (e, t, n = !0) {
                    if (w(e)) throw Error("first arg must be private key");
                    if (!w(t)) throw Error("second arg must be public key");
                    return s.fromHex(t).multiply(d(e)).toRawBytes(n);
                  },
                  sign: function (e, i, o = L) {
                    let { seed: c, k2sig: l } = (function (e, i, o = L) {
                      if (["recovered", "canonical"].some((e) => e in o))
                        throw Error("sign() legacy options not supported");
                      let { hash: c, randomBytes: l } = t,
                        { lowS: u, prehash: h, extraEntropy: f } = o;
                      null == u && (u = !0),
                        (e = I("msgHash", e)),
                        es(o),
                        h && (e = I("prehashed msgHash", c(e)));
                      let m = R(e),
                        y = d(i),
                        b = [D(y), D(m)];
                      if (null != f && !1 !== f) {
                        let e = !0 === f ? l(n.BYTES) : f;
                        b.push(I("extraEntropy", e));
                      }
                      return {
                        seed: B(...b),
                        k2sig: function (e) {
                          var t;
                          let n = k(e);
                          if (!p(n)) return;
                          let i = H(n, r),
                            o = s.BASE.multiply(n).toAffine(),
                            c = a(o.x);
                          if (c === eu) return;
                          let l = a(i * a(m + c * y));
                          if (l === eu) return;
                          let d = (2 * (o.x !== c)) | Number(o.y & ed),
                            h = l;
                          return (
                            u &&
                              l > r >> ed &&
                              ((h = (t = l) > r >> ed ? a(-t) : t), (d ^= 1)),
                            new g(c, h, d)
                          );
                        },
                      };
                    })(e, i, o);
                    return (function (e, t, n) {
                      if ("number" != typeof e || e < 2)
                        throw Error("hashLen must be a number");
                      if ("number" != typeof t || t < 2)
                        throw Error("qByteLen must be a number");
                      if ("function" != typeof n)
                        throw Error("hmacFn must be a function");
                      let r = M(e),
                        i = M(e),
                        o = 0,
                        a = () => {
                          r.fill(1), i.fill(0), (o = 0);
                        },
                        s = (...e) => n(i, r, ...e),
                        c = (e = M(0)) => {
                          (i = s(T([0]), e)),
                            (r = s()),
                            0 !== e.length && ((i = s(T([1]), e)), (r = s()));
                        },
                        l = () => {
                          if (o++ >= 1e3)
                            throw Error("drbg: tried 1000 values");
                          let e = 0,
                            n = [];
                          for (; e < t; ) {
                            let t = (r = s()).slice();
                            n.push(t), (e += r.length);
                          }
                          return B(...n);
                        };
                      return (e, t) => {
                        let n;
                        for (a(), c(e); !(n = t(l())); ) c();
                        return a(), n;
                      };
                    })(
                      t.hash.outputLen,
                      t.nByteLength,
                      t.hmac
                    )(c, l);
                  },
                  verify: function (e, n, i, o = q) {
                    let c, l;
                    (n = I("msgHash", n)), (i = I("publicKey", i));
                    let { lowS: d, prehash: h, format: f } = o;
                    if ((es(o), "strict" in o))
                      throw Error("options.strict was renamed to lowS");
                    if (void 0 !== f && "compact" !== f && "der" !== f)
                      throw Error("format must be compact or der");
                    let p = "string" == typeof e || u(e),
                      m =
                        !p &&
                        !f &&
                        "object" == typeof e &&
                        null !== e &&
                        "bigint" == typeof e.r &&
                        "bigint" == typeof e.s;
                    if (!p && !m)
                      throw Error(
                        "invalid signature, expected Uint8Array, hex string or Signature instance"
                      );
                    try {
                      if ((m && (l = new g(e.r, e.s)), p)) {
                        try {
                          "compact" !== f && (l = g.fromDER(e));
                        } catch (e) {
                          if (!(e instanceof el.Err)) throw e;
                        }
                        l || "der" === f || (l = g.fromCompact(e));
                      }
                      c = s.fromHex(i);
                    } catch (e) {
                      return !1;
                    }
                    if (!l || (d && l.hasHighS())) return !1;
                    h && (n = t.hash(n));
                    let { r: y, s: b } = l,
                      w = R(n),
                      v = H(b, r),
                      A = a(w * v),
                      x = a(y * v),
                      C = s.BASE.multiplyAndAddUnsafe(c, A, x)?.toAffine();
                    return !!C && a(C.x) === y;
                  },
                  ProjectivePoint: s,
                  Signature: g,
                  utils: {
                    isValidPrivateKey(e) {
                      try {
                        return d(e), !0;
                      } catch (e) {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: d,
                    randomPrivateKey: () => {
                      let e = Y(t.n);
                      return (function (e, t, n = !1) {
                        let r = e.length,
                          i = V(t),
                          o = Y(t);
                        if (r < 16 || r < o || r > 1024)
                          throw Error(
                            "expected " + o + "-1024 bytes of input, got " + r
                          );
                        let a = z(n ? x(e) : A(e), t - j) + j;
                        return n ? E(a, i) : C(a, i);
                      })(t.randomBytes(e), t.n);
                    },
                    precompute: (e = 8, t = s.BASE) => (
                      t._setWindowSize(e), t.multiply(BigInt(3)), t
                    ),
                  },
                }
              );
            })({
              ...e,
              ...{
                hash: t,
                hmac: (e, ...n) => s(t, e, (0, o.Id)(...n)),
                randomBytes: o.po,
              },
            });
          return { ...n(t), create: n };
        })(
          {
            a: BigInt(0),
            b: BigInt(7),
            Fp: eg,
            n: ep,
            Gx: BigInt(
              "55066263022277343669578718895168534326250603453777594175500187360389116729240"
            ),
            Gy: BigInt(
              "32670510020758816978083085130507043184471273380659243275938904335757337482424"
            ),
            h: BigInt(1),
            lowS: !0,
            endo: {
              beta: BigInt(
                "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
              ),
              splitScalar: (e) => {
                let t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                  n = -em * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                  r = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                  i = BigInt("0x100000000000000000000000000000000"),
                  o = eb(t * e, ep),
                  a = eb(-n * e, ep),
                  s = z(e - o * t - a * r, ep),
                  c = z(-o * n - a * t, ep),
                  l = s > i,
                  u = c > i;
                if ((l && (s = ep - s), u && (c = ep - c), s > i || c > i))
                  throw Error("splitScalar: Endomorphism failed, k=" + e);
                return { k1neg: l, k1: s, k2neg: u, k2: c };
              },
            },
          },
          r.sc
        ),
        ev = (BigInt(0), {}),
        eA = (e) => e.toRawBytes(!0).slice(1),
        ex = (e) => mod(e, ep),
        eC = ew.ProjectivePoint;
    },
    34250: (e, t, n) => {
      "use strict";
      n.d(t, {
        b: () =>
          function e(t, n) {
            if (t === n) return !0;
            if (t && n && "object" == typeof t && "object" == typeof n) {
              let r, i;
              if (t.constructor !== n.constructor) return !1;
              if (Array.isArray(t) && Array.isArray(n)) {
                if ((r = t.length) !== n.length) return !1;
                for (i = r; 0 != i--; ) if (!e(t[i], n[i])) return !1;
                return !0;
              }
              if (t.valueOf !== Object.prototype.valueOf)
                return t.valueOf() === n.valueOf();
              if (t.toString !== Object.prototype.toString)
                return t.toString() === n.toString();
              let o = Object.keys(t);
              if ((r = o.length) !== Object.keys(n).length) return !1;
              for (i = r; 0 != i--; )
                if (!Object.prototype.hasOwnProperty.call(n, o[i])) return !1;
              for (i = r; 0 != i--; ) {
                let r = o[i];
                if (r && !e(t[r], n[r])) return !1;
              }
              return !0;
            }
            return t != t && n != n;
          },
      });
    },
    34524: (e, t, n) => {
      "use strict";
      function r(e, t, n) {
        let r = e[t.name];
        if ("function" == typeof r) return r;
        let i = e[n];
        return "function" == typeof i ? i : (n) => t(e, n);
      }
      n.d(t, { T: () => r });
    },
    34560: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => s, s: () => a });
      var r = n(7165),
        i = n(57948),
        o = n(6784),
        a = class extends i.k {
          #O;
          #M;
          #T;
          constructor(e) {
            super(),
              (this.mutationId = e.mutationId),
              (this.#M = e.mutationCache),
              (this.#O = []),
              (this.state = e.state || s()),
              this.setOptions(e.options),
              this.scheduleGc();
          }
          setOptions(e) {
            (this.options = e), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(e) {
            this.#O.includes(e) ||
              (this.#O.push(e),
              this.clearGcTimeout(),
              this.#M.notify({
                type: "observerAdded",
                mutation: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            (this.#O = this.#O.filter((t) => t !== e)),
              this.scheduleGc(),
              this.#M.notify({
                type: "observerRemoved",
                mutation: this,
                observer: e,
              });
          }
          optionalRemove() {
            this.#O.length ||
              ("pending" === this.state.status
                ? this.scheduleGc()
                : this.#M.remove(this));
          }
          continue() {
            return this.#T?.continue() ?? this.execute(this.state.variables);
          }
          async execute(e) {
            let t = () => {
              this.#R({ type: "continue" });
            };
            this.#T = (0, o.II)({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(e)
                  : Promise.reject(Error("No mutationFn found")),
              onFail: (e, t) => {
                this.#R({ type: "failed", failureCount: e, error: t });
              },
              onPause: () => {
                this.#R({ type: "pause" });
              },
              onContinue: t,
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#M.canRun(this),
            });
            let n = "pending" === this.state.status,
              r = !this.#T.canStart();
            try {
              if (n) t();
              else {
                this.#R({ type: "pending", variables: e, isPaused: r }),
                  await this.#M.config.onMutate?.(e, this);
                let t = await this.options.onMutate?.(e);
                t !== this.state.context &&
                  this.#R({
                    type: "pending",
                    context: t,
                    variables: e,
                    isPaused: r,
                  });
              }
              let i = await this.#T.start();
              return (
                await this.#M.config.onSuccess?.(
                  i,
                  e,
                  this.state.context,
                  this
                ),
                await this.options.onSuccess?.(i, e, this.state.context),
                await this.#M.config.onSettled?.(
                  i,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                ),
                await this.options.onSettled?.(i, null, e, this.state.context),
                this.#R({ type: "success", data: i }),
                i
              );
            } catch (t) {
              try {
                throw (
                  (await this.#M.config.onError?.(
                    t,
                    e,
                    this.state.context,
                    this
                  ),
                  await this.options.onError?.(t, e, this.state.context),
                  await this.#M.config.onSettled?.(
                    void 0,
                    t,
                    this.state.variables,
                    this.state.context,
                    this
                  ),
                  await this.options.onSettled?.(
                    void 0,
                    t,
                    e,
                    this.state.context
                  ),
                  t)
                );
              } finally {
                this.#R({ type: "error", error: t });
              }
            } finally {
              this.#M.runNext(this);
            }
          }
          #R(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case "failed":
                  return {
                    ...t,
                    failureCount: e.failureCount,
                    failureReason: e.error,
                  };
                case "pause":
                  return { ...t, isPaused: !0 };
                case "continue":
                  return { ...t, isPaused: !1 };
                case "pending":
                  return {
                    ...t,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: e.isPaused,
                    status: "pending",
                    variables: e.variables,
                    submittedAt: Date.now(),
                  };
                case "success":
                  return {
                    ...t,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1,
                  };
                case "error":
                  return {
                    ...t,
                    data: void 0,
                    error: e.error,
                    failureCount: t.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: "error",
                  };
              }
            })(this.state)),
              r.jG.batch(() => {
                this.#O.forEach((t) => {
                  t.onMutationUpdate(e);
                }),
                  this.#M.notify({
                    mutation: this,
                    type: "updated",
                    action: e,
                  });
              });
          }
        };
      function s() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: "idle",
          variables: void 0,
          submittedAt: 0,
        };
      }
    },
    35020: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => o });
      var r = n(7441),
        i = n(42264);
      function o(e, t) {
        let n = (e.details || "").toLowerCase(),
          o = e instanceof r.C ? e.walk((e) => e?.code === i.A7.code) : e;
        return o instanceof r.C
          ? new i.A7({ cause: e, message: o.details })
          : i.A7.nodeMessage.test(n)
          ? new i.A7({ cause: e, message: e.details })
          : i.BG.nodeMessage.test(n)
          ? new i.BG({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : i.jj.nodeMessage.test(n)
          ? new i.jj({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : i.K0.nodeMessage.test(n)
          ? new i.K0({ cause: e, nonce: t?.nonce })
          : i.Oh.nodeMessage.test(n)
          ? new i.Oh({ cause: e, nonce: t?.nonce })
          : i.vW.nodeMessage.test(n)
          ? new i.vW({ cause: e, nonce: t?.nonce })
          : i.k5.nodeMessage.test(n)
          ? new i.k5({ cause: e })
          : i.lY.nodeMessage.test(n)
          ? new i.lY({ cause: e, gas: t?.gas })
          : i.Fo.nodeMessage.test(n)
          ? new i.Fo({ cause: e, gas: t?.gas })
          : i.uC.nodeMessage.test(n)
          ? new i.uC({ cause: e })
          : i.lN.nodeMessage.test(n)
          ? new i.lN({
              cause: e,
              maxFeePerGas: t?.maxFeePerGas,
              maxPriorityFeePerGas: t?.maxPriorityFeePerGas,
            })
          : new i.RM({ cause: e });
      }
    },
    35109: (e, t, n) => {
      "use strict";
      n.d(t, {
        zX: () => b,
        bG: () => g,
        M: () => w,
        rR: () => v,
        Po: () => A,
        $S: () => x,
      });
      var r = n(19405),
        i = n(29995),
        o = n(47826),
        a = n(21159),
        s = n(79183);
      function c({
        abiItem: e,
        args: t,
        includeFunctionName: n = !0,
        includeName: r = !1,
      }) {
        if ("name" in e && "inputs" in e && e.inputs)
          return `${n ? e.name : ""}(${e.inputs
            .map(
              (e, n) =>
                `${r && e.name ? `${e.name}: ` : ""}${
                  "object" == typeof t[n] ? (0, s.A)(t[n]) : t[n]
                }`
            )
            .join(", ")})`;
      }
      var l = n(23008),
        u = n(44494),
        d = n(31942),
        h = n(99702),
        f = n(7441),
        p = n(4805),
        m = n(69432),
        y = n(41514);
      class b extends f.C {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: i,
            data: o,
            gas: a,
            gasPrice: s,
            maxFeePerGas: c,
            maxPriorityFeePerGas: l,
            nonce: h,
            to: f,
            value: y,
            stateOverride: b,
          }
        ) {
          let g = t ? (0, r.J)(t) : void 0,
            w = (0, m.aO)({
              from: g?.address,
              to: f,
              value:
                void 0 !== y &&
                `${(0, u.c)(y)} ${i?.nativeCurrency?.symbol || "ETH"}`,
              data: o,
              gas: a,
              gasPrice: void 0 !== s && `${(0, d.Q)(s)} gwei`,
              maxFeePerGas: void 0 !== c && `${(0, d.Q)(c)} gwei`,
              maxPriorityFeePerGas: void 0 !== l && `${(0, d.Q)(l)} gwei`,
              nonce: h,
            });
          b &&
            (w += `
${(0, p.uj)(b)}`),
            super(e.shortMessage, {
              cause: e,
              docsPath: n,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                "Raw Call Arguments:",
                w,
              ].filter(Boolean),
              name: "CallExecutionError",
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      class g extends f.C {
        constructor(
          e,
          {
            abi: t,
            args: n,
            contractAddress: r,
            docsPath: i,
            functionName: o,
            sender: s,
          }
        ) {
          let u = (0, l.iY)({ abi: t, args: n, name: o }),
            d = u
              ? c({
                  abiItem: u,
                  args: n,
                  includeFunctionName: !1,
                  includeName: !1,
                })
              : void 0,
            h = u ? (0, a.B)(u, { includeName: !0 }) : void 0,
            f = (0, m.aO)({
              address: r && (0, y.R)(r),
              function: h,
              args:
                d &&
                "()" !== d &&
                `${[...Array(o?.length ?? 0).keys()]
                  .map(() => " ")
                  .join("")}${d}`,
              sender: s,
            });
          super(
            e.shortMessage ||
              `An unknown error occurred while executing the contract function "${o}".`,
            {
              cause: e,
              docsPath: i,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                f && "Contract Call:",
                f,
              ].filter(Boolean),
              name: "ContractFunctionExecutionError",
            }
          ),
            Object.defineProperty(this, "abi", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "args", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "contractAddress", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "formattedArgs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "functionName", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "sender", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abi = t),
            (this.args = n),
            (this.cause = e),
            (this.contractAddress = r),
            (this.functionName = o),
            (this.sender = s);
        }
      }
      class w extends f.C {
        constructor({ abi: e, data: t, functionName: n, message: r }) {
          let s, l, u, d, f;
          if (t && "0x" !== t)
            try {
              let {
                abiItem: n,
                errorName: r,
                args: s,
              } = (f = (0, o.W)({ abi: e, data: t }));
              if ("Error" === r) u = s[0];
              else if ("Panic" === r) {
                let [e] = s;
                u = i.fD[e];
              } else {
                let e = n ? (0, a.B)(n, { includeName: !0 }) : void 0,
                  t =
                    n && s
                      ? c({
                          abiItem: n,
                          args: s,
                          includeFunctionName: !1,
                          includeName: !1,
                        })
                      : void 0;
                l = [
                  e ? `Error: ${e}` : "",
                  t && "()" !== t
                    ? `       ${[...Array(r?.length ?? 0).keys()]
                        .map(() => " ")
                        .join("")}${t}`
                    : "",
                ];
              }
            } catch (e) {
              s = e;
            }
          else r && (u = r);
          s instanceof h.Wq &&
            ((d = s.signature),
            (l = [
              `Unable to decode signature "${d}" as it was not found on the provided ABI.`,
              "Make sure you are using the correct ABI and that the error exists on it.",
              `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`,
            ])),
            super(
              (u && "execution reverted" !== u) || d
                ? [
                    `The contract function "${n}" reverted with the following ${
                      d ? "signature" : "reason"
                    }:`,
                    u || d,
                  ].join("\n")
                : `The contract function "${n}" reverted.`,
              {
                cause: s,
                metaMessages: l,
                name: "ContractFunctionRevertedError",
              }
            ),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "raw", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "reason", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = f),
            (this.raw = t),
            (this.reason = u),
            (this.signature = d);
        }
      }
      class v extends f.C {
        constructor({ functionName: e }) {
          super(`The contract function "${e}" returned no data ("0x").`, {
            metaMessages: [
              "This could be due to any of the following:",
              `  - The contract does not have the function "${e}",`,
              "  - The parameters passed to the contract function may be invalid, or",
              "  - The address is not a contract.",
            ],
            name: "ContractFunctionZeroDataError",
          });
        }
      }
      class A extends f.C {
        constructor({ factory: e }) {
          super(
            `Deployment for counterfactual contract call failed${
              e ? ` for factory "${e}".` : ""
            }`,
            {
              metaMessages: [
                "Please ensure:",
                "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
                "- The `factoryData` is a valid encoded function call for contract deployment function on the factory.",
              ],
              name: "CounterfactualDeploymentFailedError",
            }
          );
        }
      }
      class x extends f.C {
        constructor({ data: e, message: t }) {
          super(t || "", { name: "RawContractError" }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 3,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e);
        }
      }
    },
    35791: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => o });
      var r = n(86205);
      function i(e) {
        return {
          address: e.address,
          amount: r.oB(e.amount),
          index: r.oB(e.index),
          validatorIndex: r.oB(e.validatorIndex),
        };
      }
      function o(e) {
        return {
          ...("bigint" == typeof e.baseFeePerGas && {
            baseFeePerGas: r.oB(e.baseFeePerGas),
          }),
          ...("bigint" == typeof e.blobBaseFee && {
            blobBaseFee: r.oB(e.blobBaseFee),
          }),
          ...("string" == typeof e.feeRecipient && {
            feeRecipient: e.feeRecipient,
          }),
          ...("bigint" == typeof e.gasLimit && { gasLimit: r.oB(e.gasLimit) }),
          ...("bigint" == typeof e.number && { number: r.oB(e.number) }),
          ...("bigint" == typeof e.prevRandao && {
            prevRandao: r.oB(e.prevRandao),
          }),
          ...("bigint" == typeof e.time && { time: r.oB(e.time) }),
          ...(e.withdrawals && { withdrawals: e.withdrawals.map(i) }),
        };
      }
    },
    35883: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => u, o: () => l });
      var r = n(36444),
        i = n(80844),
        o = n(24578),
        a = n(65003),
        s = n(81757);
      let c = new a.A(8192);
      function l(e, t) {
        if (c.has(`${e}.${t}`)) return c.get(`${e}.${t}`);
        let n = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
          r = (0, o.S)((0, i.Af)(n), "bytes"),
          a = (t ? n.substring(`${t}0x`.length) : n).split("");
        for (let e = 0; e < 40; e += 2)
          r[e >> 1] >> 4 >= 8 && a[e] && (a[e] = a[e].toUpperCase()),
            (15 & r[e >> 1]) >= 8 &&
              a[e + 1] &&
              (a[e + 1] = a[e + 1].toUpperCase());
        let s = `0x${a.join("")}`;
        return c.set(`${e}.${t}`, s), s;
      }
      function u(e, t) {
        if (!(0, s.P)(e, { strict: !1 })) throw new r.M({ address: e });
        return l(e, t);
      }
    },
    36241: (e, t, n) => {
      "use strict";
      n.d(t, { L: () => d });
      var r = n(90557),
        i = n(7441);
      class o extends i.C {
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
      function d(e, t = {}) {
        let {
          batch: n,
          fetchOptions: i,
          key: h = "http",
          methods: f,
          name: p = "HTTP JSON-RPC",
          onFetchRequest: m,
          onFetchResponse: y,
          retryDelay: b,
          raw: g,
        } = t;
        return ({ chain: d, retryCount: w, timeout: v }) => {
          let { batchSize: A = 1e3, wait: x = 0 } =
              "object" == typeof n ? n : {},
            C = t.retryCount ?? w,
            E = v ?? t.timeout ?? 1e4,
            I = e || d?.rpcUrls.default.http[0];
          if (!I) throw new o();
          let B = (function (e, t = {}) {
            return {
              async request(n) {
                let {
                    body: i,
                    onRequest: o = t.onRequest,
                    onResponse: a = t.onResponse,
                    timeout: u = t.timeout ?? 1e4,
                  } = n,
                  d = { ...(t.fetchOptions ?? {}), ...(n.fetchOptions ?? {}) },
                  { headers: h, method: f, signal: p } = d;
                try {
                  let t,
                    n = await (0, s.w)(
                      async ({ signal: t }) => {
                        let n = {
                            ...d,
                            body: Array.isArray(i)
                              ? (0, c.A)(
                                  i.map((e) => ({
                                    jsonrpc: "2.0",
                                    id: e.id ?? l.take(),
                                    ...e,
                                  }))
                                )
                              : (0, c.A)({
                                  jsonrpc: "2.0",
                                  id: i.id ?? l.take(),
                                  ...i,
                                }),
                            headers: {
                              "Content-Type": "application/json",
                              ...h,
                            },
                            method: f || "POST",
                            signal: p || (u > 0 ? t : null),
                          },
                          r = new Request(e, n),
                          a = (await o?.(r, n)) ?? { ...n, url: e };
                        return await fetch(a.url ?? e, a);
                      },
                      {
                        errorInstance: new r.MU({ body: i, url: e }),
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
                      body: i,
                      details: (0, c.A)(t.error) || n.statusText,
                      headers: n.headers,
                      status: n.status,
                      url: e,
                    });
                  return t;
                } catch (t) {
                  if (t instanceof r.Ci || t instanceof r.MU) throw t;
                  throw new r.Ci({ body: i, cause: t, url: e });
                }
              },
            };
          })(I, { fetchOptions: i, onRequest: m, onResponse: y, timeout: E });
          return (0, u.o)(
            {
              key: h,
              methods: f,
              name: p,
              async request({ method: e, params: t }) {
                let i = { method: e, params: t },
                  { schedule: o } = (0, a.u)({
                    id: I,
                    wait: x,
                    shouldSplitBatch: (e) => e.length > A,
                    fn: (e) => B.request({ body: e }),
                    sort: (e, t) => e.id - t.id,
                  }),
                  s = async (e) => (n ? o(e) : [await B.request({ body: e })]),
                  [{ error: c, result: l }] = await s(i);
                if (g) return { error: c, result: l };
                if (c) throw new r.J8({ body: i, error: c, url: I });
                return l;
              },
              retryCount: C,
              retryDelay: b,
              timeout: E,
              type: "http",
            },
            { fetchOptions: i, url: I }
          );
        };
      }
    },
    36444: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => i });
      var r = n(7441);
      class i extends r.C {
        constructor({ address: e }) {
          super(`Address "${e}" is invalid.`, {
            metaMessages: [
              "- Address must be a hex value of 20 bytes (40 hex characters).",
              "- Address must match its checksum counterpart.",
            ],
            name: "InvalidAddressError",
          });
        }
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
            i = 0,
            o = 0,
            a = null,
            s = null;
          for (let c = 0; c < t; c++) {
            (i = o = 0), (a = s = null);
            for (let l = 0; l < t; l++) {
              let t = e.get(c, l);
              t === a
                ? i++
                : (i >= 5 && (r += n.N1 + (i - 5)), (a = t), (i = 1)),
                (t = e.get(l, c)) === s
                  ? o++
                  : (o >= 5 && (r += n.N1 + (o - 5)), (s = t), (o = 1));
            }
            i >= 5 && (r += n.N1 + (i - 5)), o >= 5 && (r += n.N1 + (o - 5));
          }
          return r;
        }),
        (t.getPenaltyN2 = function (e) {
          let t = e.size,
            r = 0;
          for (let n = 0; n < t - 1; n++)
            for (let i = 0; i < t - 1; i++) {
              let t =
                e.get(n, i) +
                e.get(n, i + 1) +
                e.get(n + 1, i) +
                e.get(n + 1, i + 1);
              (4 === t || 0 === t) && r++;
            }
          return r * n.N2;
        }),
        (t.getPenaltyN3 = function (e) {
          let t = e.size,
            r = 0,
            i = 0,
            o = 0;
          for (let n = 0; n < t; n++) {
            i = o = 0;
            for (let a = 0; a < t; a++)
              (i = ((i << 1) & 2047) | e.get(n, a)),
                a >= 10 && (1488 === i || 93 === i) && r++,
                (o = ((o << 1) & 2047) | e.get(a, n)),
                a >= 10 && (1488 === o || 93 === o) && r++;
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
          for (let i = 0; i < r; i++)
            for (let o = 0; o < r; o++)
              n.isReserved(o, i) ||
                n.xor(
                  o,
                  i,
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
                  })(e, o, i)
                );
        }),
        (t.getBestMask = function (e, n) {
          let r = Object.keys(t.Patterns).length,
            i = 0,
            o = 1 / 0;
          for (let a = 0; a < r; a++) {
            n(a), t.applyMask(a, e);
            let r =
              t.getPenaltyN1(e) +
              t.getPenaltyN2(e) +
              t.getPenaltyN3(e) +
              t.getPenaltyN4(e);
            t.applyMask(a, e), r < o && ((o = r), (i = a));
          }
          return i;
        });
    },
    36984: (e, t, n) => {
      "use strict";
      n.d(t, { db: () => o, eV: () => i });
      var r = n(58980);
      function i(e, { dir: t, size: n = 32 } = {}) {
        return "string" == typeof e
          ? o(e, { dir: t, size: n })
          : (function (e, { dir: t, size: n = 32 } = {}) {
              if (null === n) return e;
              if (e.length > n)
                throw new r.Fl({
                  size: e.length,
                  targetSize: n,
                  type: "bytes",
                });
              let i = new Uint8Array(n);
              for (let r = 0; r < n; r++) {
                let o = "right" === t;
                i[o ? r : n - r - 1] = e[o ? r : e.length - r - 1];
              }
              return i;
            })(e, { dir: t, size: n });
      }
      function o(e, { dir: t, size: n = 32 } = {}) {
        if (null === n) return e;
        let i = e.replace("0x", "");
        if (i.length > 2 * n)
          throw new r.Fl({
            size: Math.ceil(i.length / 2),
            targetSize: n,
            type: "hex",
          });
        return `0x${i["right" === t ? "padEnd" : "padStart"](2 * n, "0")}`;
      }
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
      function i(e) {
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
      var o = (e) =>
          function () {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            var o = Object.assign({}, ...n.map((e) => e.styles)),
              a = Object.keys(o),
              s = a.filter((e) => "mappings" in o[e]);
            return Object.assign(
              (t) => {
                var n = [],
                  r = {},
                  a = i({}, t),
                  c = !1;
                for (var l of s) {
                  var u = t[l];
                  if (null != u)
                    for (var d of ((c = !0), o[l].mappings))
                      (r[d] = u), null == a[d] && delete a[d];
                }
                var h = c ? i(i({}, r), a) : t;
                for (var f in h)
                  if (
                    (function () {
                      var e = h[f],
                        t = o[f];
                      try {
                        if (t.mappings) return 1;
                        if ("string" == typeof e || "number" == typeof e)
                          n.push(t.values[e].defaultClass);
                        else if (Array.isArray(e))
                          for (var r = 0; r < e.length; r++) {
                            var i = e[r];
                            if (null != i) {
                              var a = t.responsiveArray[r];
                              n.push(t.values[i].conditions[a]);
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
          return o(a)(...arguments);
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
          i = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)),
          o = [n - 7];
        for (let e = 1; e < t - 1; e++) o[e] = o[e - 1] - i;
        return o.push(6), o.reverse();
      }),
        (t.getPositions = function (e) {
          let n = [],
            r = t.getRowColCoords(e),
            i = r.length;
          for (let e = 0; e < i; e++)
            for (let t = 0; t < i; t++)
              (0 !== e || 0 !== t) &&
                (0 !== e || t !== i - 1) &&
                (e !== i - 1 || 0 !== t) &&
                n.push([r[e], r[t]]);
          return n;
        });
    },
    38697: (e, t, n) => {
      "use strict";
      n.d(t, { BD: () => r, Ge: () => i });
      let r = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        i =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
    },
    38958: (e, t, n) => {
      "use strict";
      n.d(t, { e: () => d });
      var r = n(59126),
        i = n(84701),
        o = n(99901),
        a = n(30686),
        s = n(68321);
      class c extends s.C {
        constructor({ type: e }) {
          super("Circular reference detected.", {
            metaMessages: [`Struct "${e}" is a circular reference.`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "CircularReferenceError",
            });
        }
      }
      var l = n(17130),
        u = n(27442);
      function d(e) {
        let t = {},
          n = e.length;
        for (let r = 0; r < n; r++) {
          let n = e[r];
          if (!(0, l.WL)(n)) continue;
          let i = (0, l.FO)(n);
          if (!i) throw new a.s7({ signature: n, type: "struct" });
          let o = i.properties.split(";"),
            s = [],
            c = o.length;
          for (let e = 0; e < c; e++) {
            let t = o[e].trim();
            if (!t) continue;
            let n = (0, u.Pj)(t, { type: "struct" });
            s.push(n);
          }
          if (!s.length) throw new a.X9({ signature: n });
          t[i.name] = s;
        }
        let s = {},
          d = Object.entries(t),
          f = d.length;
        for (let e = 0; e < f; e++) {
          let [n, a] = d[e];
          s[n] = (function e(t, n, a = new Set()) {
            let s = [],
              l = t.length;
            for (let d = 0; d < l; d++) {
              let l = t[d];
              if (r.wj.test(l.type)) s.push(l);
              else {
                let t = (0, r.Yv)(h, l.type);
                if (!t?.type) throw new o.nx({ abiParameter: l });
                let { array: d, type: f } = t;
                if (f in n) {
                  if (a.has(f)) throw new c({ type: f });
                  s.push({
                    ...l,
                    type: `tuple${d ?? ""}`,
                    components: e(n[f] ?? [], n, new Set([...a, f])),
                  });
                } else if ((0, u._o)(f)) s.push(l);
                else throw new i.zz({ type: f });
              }
            }
            return s;
          })(a, t);
        }
        return s;
      }
      let h = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
    },
    39249: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          __addDisposableResource: () => F,
          __assign: () => o,
          __asyncDelegator: () => I,
          __asyncGenerator: () => E,
          __asyncValues: () => B,
          __await: () => C,
          __awaiter: () => p,
          __classPrivateFieldGet: () => T,
          __classPrivateFieldIn: () => N,
          __classPrivateFieldSet: () => R,
          __createBinding: () => y,
          __decorate: () => s,
          __disposeResources: () => j,
          __esDecorate: () => l,
          __exportStar: () => b,
          __extends: () => i,
          __generator: () => m,
          __importDefault: () => M,
          __importStar: () => O,
          __makeTemplateObject: () => k,
          __metadata: () => f,
          __param: () => c,
          __propKey: () => d,
          __read: () => w,
          __rest: () => a,
          __rewriteRelativeImportExtension: () => D,
          __runInitializers: () => u,
          __setFunctionName: () => h,
          __spread: () => v,
          __spreadArray: () => x,
          __spreadArrays: () => A,
          __values: () => g,
          default: () => L,
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
      function i(e, t) {
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
      var o = function () {
        return (o =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
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
            var i = 0, r = Object.getOwnPropertySymbols(e);
            i < r.length;
            i++
          )
            0 > t.indexOf(r[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        return n;
      }
      function s(e, t, n, r) {
        var i,
          o = arguments.length,
          a =
            o < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, n))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, n, r);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) &&
              (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return o > 3 && a && Object.defineProperty(t, n, a), a;
      }
      function c(e, t) {
        return function (n, r) {
          t(n, r, e);
        };
      }
      function l(e, t, n, r, i, o) {
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
            d = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}),
            h = !1,
            f = n.length - 1;
          f >= 0;
          f--
        ) {
          var p = {};
          for (var m in r) p[m] = "access" === m ? {} : r[m];
          for (var m in r.access) p.access[m] = r.access[m];
          p.addInitializer = function (e) {
            if (h)
              throw TypeError(
                "Cannot add initializers after decoration has completed"
              );
            o.push(a(e || null));
          };
          var y = (0, n[f])(
            "accessor" === c ? { get: d.get, set: d.set } : d[l],
            p
          );
          if ("accessor" === c) {
            if (void 0 === y) continue;
            if (null === y || "object" != typeof y)
              throw TypeError("Object expected");
            (s = a(y.get)) && (d.get = s),
              (s = a(y.set)) && (d.set = s),
              (s = a(y.init)) && i.unshift(s);
          } else (s = a(y)) && ("field" === c ? i.unshift(s) : (d[l] = s));
        }
        u && Object.defineProperty(u, r.name, d), (h = !0);
      }
      function u(e, t, n) {
        for (var r = arguments.length > 2, i = 0; i < t.length; i++)
          n = r ? t[i].call(e, n) : t[i].call(e);
        return r ? n : void 0;
      }
      function d(e) {
        return "symbol" == typeof e ? e : "".concat(e);
      }
      function h(e, t, n) {
        return (
          "symbol" == typeof t &&
            (t = t.description ? "[".concat(t.description, "]") : ""),
          Object.defineProperty(e, "name", {
            configurable: !0,
            value: n ? "".concat(n, " ", t) : t,
          })
        );
      }
      function f(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function p(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
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
      function m(e, t) {
        var n,
          r,
          i,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
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
            for (; a && ((a = 0), l[0] && (o = 0)), o; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (i =
                      2 & l[0]
                        ? r.return
                        : l[0]
                        ? r.throw || ((i = r.return) && i.call(r), 0)
                        : r.next) &&
                    !(i = i.call(r, l[1])).done)
                )
                  return i;
                switch (((r = 0), i && (l = [2 & l[0], i.value]), l[0])) {
                  case 0:
                  case 1:
                    i = l;
                    break;
                  case 4:
                    return o.label++, { value: l[1], done: !1 };
                  case 5:
                    o.label++, (r = l[1]), (l = [0]);
                    continue;
                  case 7:
                    (l = o.ops.pop()), o.trys.pop();
                    continue;
                  default:
                    if (
                      !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                      (6 === l[0] || 2 === l[0])
                    ) {
                      o = 0;
                      continue;
                    }
                    if (3 === l[0] && (!i || (l[1] > i[0] && l[1] < i[3]))) {
                      o.label = l[1];
                      break;
                    }
                    if (6 === l[0] && o.label < i[1]) {
                      (o.label = i[1]), (i = l);
                      break;
                    }
                    if (i && o.label < i[2]) {
                      (o.label = i[2]), o.ops.push(l);
                      break;
                    }
                    i[2] && o.ops.pop(), o.trys.pop();
                    continue;
                }
                l = t.call(e, o);
              } catch (e) {
                (l = [6, e]), (r = 0);
              } finally {
                n = i = 0;
              }
            if (5 & l[0]) throw l[1];
            return { value: l[0] ? l[1] : void 0, done: !0 };
          };
        }
      }
      var y = Object.create
        ? function (e, t, n, r) {
            void 0 === r && (r = n);
            var i = Object.getOwnPropertyDescriptor(t, n);
            (!i ||
              ("get" in i ? !t.__esModule : i.writable || i.configurable)) &&
              (i = {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              }),
              Object.defineProperty(e, r, i);
          }
        : function (e, t, n, r) {
            void 0 === r && (r = n), (e[r] = t[n]);
          };
      function b(e, t) {
        for (var n in e)
          "default" === n ||
            Object.prototype.hasOwnProperty.call(t, n) ||
            y(t, e, n);
      }
      function g(e) {
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
      function w(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
            a.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      function v() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(w(arguments[t]));
        return e;
      }
      function A() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        for (var r = Array(e), i = 0, t = 0; t < n; t++)
          for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++)
            r[i] = o[a];
        return r;
      }
      function x(e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, i = 0, o = t.length; i < o; i++)
            (!r && i in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      function C(e) {
        return this instanceof C ? ((this.v = e), this) : new C(e);
      }
      function E(e, t, n) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var r,
          i = n.apply(e, t || []),
          o = [];
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
          i[e] &&
            ((r[e] = function (t) {
              return new Promise(function (n, r) {
                o.push([e, t, n, r]) > 1 || s(e, t);
              });
            }),
            t && (r[e] = t(r[e])));
        }
        function s(e, t) {
          try {
            var n;
            (n = i[e](t)).value instanceof C
              ? Promise.resolve(n.value.v).then(c, l)
              : u(o[0][2], n);
          } catch (e) {
            u(o[0][3], e);
          }
        }
        function c(e) {
          s("next", e);
        }
        function l(e) {
          s("throw", e);
        }
        function u(e, t) {
          e(t), o.shift(), o.length && s(o[0][0], o[0][1]);
        }
      }
      function I(e) {
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
        function r(r, i) {
          t[r] = e[r]
            ? function (t) {
                return (n = !n)
                  ? { value: C(e[r](t)), done: !1 }
                  : i
                  ? i(t)
                  : t;
              }
            : i;
        }
      }
      function B(e) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var t,
          n = e[Symbol.asyncIterator];
        return n
          ? n.call(e)
          : ((e = g(e)),
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
              return new Promise(function (r, i) {
                var o, a, s;
                (o = r),
                  (a = i),
                  (s = (t = e[n](t)).done),
                  Promise.resolve(t.value).then(function (e) {
                    o({ value: e, done: s });
                  }, a);
              });
            };
        }
      }
      function k(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      var P = Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            },
        S = function (e) {
          return (S =
            Object.getOwnPropertyNames ||
            function (e) {
              var t = [];
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
              return t;
            })(e);
        };
      function O(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n = S(e), r = 0; r < n.length; r++)
            "default" !== n[r] && y(t, e, n[r]);
        return P(t, e), t;
      }
      function M(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function T(e, t, n, r) {
        if ("a" === n && !r)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
      }
      function R(e, t, n, r, i) {
        if ("m" === r) throw TypeError("Private method is not writable");
        if ("a" === r && !i)
          throw TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !i : !t.has(e))
          throw TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n;
      }
      function N(e, t) {
        if (null === t || ("object" != typeof t && "function" != typeof t))
          throw TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t);
      }
      function F(e, t, n) {
        if (null != t) {
          var r, i;
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
            (r = t[Symbol.dispose]), n && (i = r);
          }
          if ("function" != typeof r) throw TypeError("Object not disposable.");
          i &&
            (r = function () {
              try {
                i.call(this);
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            e.stack.push({ value: t, dispose: r, async: n });
        } else n && e.stack.push({ async: !0 });
        return t;
      }
      var U =
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
      function j(e) {
        function t(t) {
          (e.error = e.hasError
            ? new U(t, e.error, "An error was suppressed during disposal.")
            : t),
            (e.hasError = !0);
        }
        var n,
          r = 0;
        return (function i() {
          for (; (n = e.stack.pop()); )
            try {
              if (!n.async && 1 === r)
                return (r = 0), e.stack.push(n), Promise.resolve().then(i);
              if (n.dispose) {
                var o = n.dispose.call(n.value);
                if (n.async)
                  return (
                    (r |= 2),
                    Promise.resolve(o).then(i, function (e) {
                      return t(e), i();
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
      function D(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e)
          ? e.replace(
              /\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,
              function (e, n, r, i, o) {
                return n
                  ? t
                    ? ".jsx"
                    : ".js"
                  : !r || (i && o)
                  ? r + i + "." + o.toLowerCase() + "js"
                  : e;
              }
            )
          : e;
      }
      let L = {
        __extends: i,
        __assign: o,
        __rest: a,
        __decorate: s,
        __param: c,
        __esDecorate: l,
        __runInitializers: u,
        __propKey: d,
        __setFunctionName: h,
        __metadata: f,
        __awaiter: p,
        __generator: m,
        __createBinding: y,
        __exportStar: b,
        __values: g,
        __read: w,
        __spread: v,
        __spreadArrays: A,
        __spreadArray: x,
        __await: C,
        __asyncGenerator: E,
        __asyncDelegator: I,
        __asyncValues: B,
        __makeTemplateObject: k,
        __importStar: O,
        __importDefault: M,
        __classPrivateFieldGet: T,
        __classPrivateFieldSet: R,
        __classPrivateFieldIn: N,
        __addDisposableResource: F,
        __disposeResources: j,
        __rewriteRelativeImportExtension: D,
      };
    },
    39853: (e, t, n) => {
      "use strict";
      n.d(t, { X: () => s, k: () => c });
      var r = n(52020),
        i = n(7165),
        o = n(6784),
        a = n(57948),
        s = class extends a.k {
          #N;
          #F;
          #U;
          #e;
          #T;
          #j;
          #D;
          constructor(e) {
            super(),
              (this.#D = !1),
              (this.#j = e.defaultOptions),
              this.setOptions(e.options),
              (this.observers = []),
              (this.#e = e.client),
              (this.#U = this.#e.getQueryCache()),
              (this.queryKey = e.queryKey),
              (this.queryHash = e.queryHash),
              (this.#N = (function (e) {
                let t =
                    "function" == typeof e.initialData
                      ? e.initialData()
                      : e.initialData,
                  n = void 0 !== t,
                  r = n
                    ? "function" == typeof e.initialDataUpdatedAt
                      ? e.initialDataUpdatedAt()
                      : e.initialDataUpdatedAt
                    : 0;
                return {
                  data: t,
                  dataUpdateCount: 0,
                  dataUpdatedAt: n ? r ?? Date.now() : 0,
                  error: null,
                  errorUpdateCount: 0,
                  errorUpdatedAt: 0,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: null,
                  isInvalidated: !1,
                  status: n ? "success" : "pending",
                  fetchStatus: "idle",
                };
              })(this.options)),
              (this.state = e.state ?? this.#N),
              this.scheduleGc();
          }
          get meta() {
            return this.options.meta;
          }
          get promise() {
            return this.#T?.promise;
          }
          setOptions(e) {
            (this.options = { ...this.#j, ...e }),
              this.updateGcTime(this.options.gcTime);
          }
          optionalRemove() {
            this.observers.length ||
              "idle" !== this.state.fetchStatus ||
              this.#U.remove(this);
          }
          setData(e, t) {
            let n = (0, r.pl)(this.state.data, e, this.options);
            return (
              this.#R({
                data: n,
                type: "success",
                dataUpdatedAt: t?.updatedAt,
                manual: t?.manual,
              }),
              n
            );
          }
          setState(e, t) {
            this.#R({ type: "setState", state: e, setStateOptions: t });
          }
          cancel(e) {
            let t = this.#T?.promise;
            return (
              this.#T?.cancel(e),
              t ? t.then(r.lQ).catch(r.lQ) : Promise.resolve()
            );
          }
          destroy() {
            super.destroy(), this.cancel({ silent: !0 });
          }
          reset() {
            this.destroy(), this.setState(this.#N);
          }
          isActive() {
            return this.observers.some(
              (e) => !1 !== (0, r.Eh)(e.options.enabled, this)
            );
          }
          isDisabled() {
            return this.getObserversCount() > 0
              ? !this.isActive()
              : this.options.queryFn === r.hT ||
                  this.state.dataUpdateCount + this.state.errorUpdateCount ===
                    0;
          }
          isStale() {
            return (
              !!this.state.isInvalidated ||
              (this.getObserversCount() > 0
                ? this.observers.some((e) => e.getCurrentResult().isStale)
                : void 0 === this.state.data)
            );
          }
          isStaleByTime(e = 0) {
            return (
              this.state.isInvalidated ||
              void 0 === this.state.data ||
              !(0, r.j3)(this.state.dataUpdatedAt, e)
            );
          }
          onFocus() {
            let e = this.observers.find((e) => e.shouldFetchOnWindowFocus());
            e?.refetch({ cancelRefetch: !1 }), this.#T?.continue();
          }
          onOnline() {
            let e = this.observers.find((e) => e.shouldFetchOnReconnect());
            e?.refetch({ cancelRefetch: !1 }), this.#T?.continue();
          }
          addObserver(e) {
            this.observers.includes(e) ||
              (this.observers.push(e),
              this.clearGcTimeout(),
              this.#U.notify({
                type: "observerAdded",
                query: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            this.observers.includes(e) &&
              ((this.observers = this.observers.filter((t) => t !== e)),
              this.observers.length ||
                (this.#T &&
                  (this.#D
                    ? this.#T.cancel({ revert: !0 })
                    : this.#T.cancelRetry()),
                this.scheduleGc()),
              this.#U.notify({
                type: "observerRemoved",
                query: this,
                observer: e,
              }));
          }
          getObserversCount() {
            return this.observers.length;
          }
          invalidate() {
            this.state.isInvalidated || this.#R({ type: "invalidate" });
          }
          fetch(e, t) {
            if ("idle" !== this.state.fetchStatus) {
              if (void 0 !== this.state.data && t?.cancelRefetch)
                this.cancel({ silent: !0 });
              else if (this.#T) return this.#T.continueRetry(), this.#T.promise;
            }
            if ((e && this.setOptions(e), !this.options.queryFn)) {
              let e = this.observers.find((e) => e.options.queryFn);
              e && this.setOptions(e.options);
            }
            let n = new AbortController(),
              i = (e) => {
                Object.defineProperty(e, "signal", {
                  enumerable: !0,
                  get: () => ((this.#D = !0), n.signal),
                });
              },
              a = {
                fetchOptions: t,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#e,
                state: this.state,
                fetchFn: () => {
                  let e = (0, r.ZM)(this.options, t),
                    n = {
                      client: this.#e,
                      queryKey: this.queryKey,
                      meta: this.meta,
                    };
                  return (i(n), (this.#D = !1), this.options.persister)
                    ? this.options.persister(e, n, this)
                    : e(n);
                },
              };
            i(a),
              this.options.behavior?.onFetch(a, this),
              (this.#F = this.state),
              ("idle" === this.state.fetchStatus ||
                this.state.fetchMeta !== a.fetchOptions?.meta) &&
                this.#R({ type: "fetch", meta: a.fetchOptions?.meta });
            let s = (e) => {
              ((0, o.wm)(e) && e.silent) ||
                this.#R({ type: "error", error: e }),
                (0, o.wm)(e) ||
                  (this.#U.config.onError?.(e, this),
                  this.#U.config.onSettled?.(this.state.data, e, this)),
                this.scheduleGc();
            };
            return (
              (this.#T = (0, o.II)({
                initialPromise: t?.initialPromise,
                fn: a.fetchFn,
                abort: n.abort.bind(n),
                onSuccess: (e) => {
                  if (void 0 === e)
                    return void s(Error(`${this.queryHash} data is undefined`));
                  try {
                    this.setData(e);
                  } catch (e) {
                    s(e);
                    return;
                  }
                  this.#U.config.onSuccess?.(e, this),
                    this.#U.config.onSettled?.(e, this.state.error, this),
                    this.scheduleGc();
                },
                onError: s,
                onFail: (e, t) => {
                  this.#R({ type: "failed", failureCount: e, error: t });
                },
                onPause: () => {
                  this.#R({ type: "pause" });
                },
                onContinue: () => {
                  this.#R({ type: "continue" });
                },
                retry: a.options.retry,
                retryDelay: a.options.retryDelay,
                networkMode: a.options.networkMode,
                canRun: () => !0,
              })),
              this.#T.start()
            );
          }
          #R(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case "failed":
                  return {
                    ...t,
                    fetchFailureCount: e.failureCount,
                    fetchFailureReason: e.error,
                  };
                case "pause":
                  return { ...t, fetchStatus: "paused" };
                case "continue":
                  return { ...t, fetchStatus: "fetching" };
                case "fetch":
                  return {
                    ...t,
                    ...c(t.data, this.options),
                    fetchMeta: e.meta ?? null,
                  };
                case "success":
                  return {
                    ...t,
                    data: e.data,
                    dataUpdateCount: t.dataUpdateCount + 1,
                    dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success",
                    ...(!e.manual && {
                      fetchStatus: "idle",
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                    }),
                  };
                case "error":
                  let n = e.error;
                  if ((0, o.wm)(n) && n.revert && this.#F)
                    return { ...this.#F, fetchStatus: "idle" };
                  return {
                    ...t,
                    error: n,
                    errorUpdateCount: t.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: t.fetchFailureCount + 1,
                    fetchFailureReason: n,
                    fetchStatus: "idle",
                    status: "error",
                  };
                case "invalidate":
                  return { ...t, isInvalidated: !0 };
                case "setState":
                  return { ...t, ...e.state };
              }
            })(this.state)),
              i.jG.batch(() => {
                this.observers.forEach((e) => {
                  e.onQueryUpdate();
                }),
                  this.#U.notify({ query: this, type: "updated", action: e });
              });
          }
        };
      function c(e, t) {
        return {
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchStatus: (0, o.v_)(t.networkMode) ? "fetching" : "paused",
          ...(void 0 === e && { error: null, status: "pending" }),
        };
      }
    },
    39975: (e, t, n) => {
      "use strict";
      let r;
      n.d(t, { Z: () => A });
      var i = n(98078);
      let o = (e) => (t, n, r) => {
          let i = r.subscribe;
          return (
            (r.subscribe = (e, t, n) => {
              let o = e;
              if (t) {
                let i = (null == n ? void 0 : n.equalityFn) || Object.is,
                  a = e(r.getState());
                (o = (n) => {
                  let r = e(n);
                  if (!i(a, r)) {
                    let e = a;
                    t((a = r), e);
                  }
                }),
                  (null == n ? void 0 : n.fireImmediately) && t(a, a);
              }
              return i(o);
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
        s = (e, t) => (n, r, i) => {
          let o,
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
                      i = null != (t = n.getItem(e)) ? t : null;
                    return i instanceof Promise ? i.then(r) : r(i);
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
            d = s.storage;
          if (!d)
            return e(
              (...e) => {
                console.warn(
                  `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
                ),
                  n(...e);
              },
              r,
              i
            );
          let h = () => {
              let e = s.partialize({ ...r() });
              return d.setItem(s.name, { state: e, version: s.version });
            },
            f = i.setState;
          i.setState = (e, t) => {
            f(e, t), h();
          };
          let p = e(
            (...e) => {
              n(...e), h();
            },
            r,
            i
          );
          i.getInitialState = () => p;
          let m = () => {
            var e, t;
            if (!d) return;
            (c = !1),
              l.forEach((e) => {
                var t;
                return e(null != (t = r()) ? t : p);
              });
            let i =
              (null == (t = s.onRehydrateStorage)
                ? void 0
                : t.call(s, null != (e = r()) ? e : p)) || void 0;
            return a(d.getItem.bind(d))(s.name)
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
                let [i, a] = e;
                if ((n((o = s.merge(a, null != (t = r()) ? t : p)), !0), i))
                  return h();
              })
              .then(() => {
                null == i || i(o, void 0),
                  (o = r()),
                  (c = !0),
                  u.forEach((e) => e(o));
              })
              .catch((e) => {
                null == i || i(void 0, e);
              });
          };
          return (
            (i.persist = {
              setOptions: (e) => {
                (s = { ...s, ...e }), e.storage && (d = e.storage);
              },
              clearStorage: () => {
                null == d || d.removeItem(s.name);
              },
              getOptions: () => s,
              rehydrate: () => m(),
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
            s.skipHydration || m(),
            o || p
          );
        },
        c = (e) => {
          let t,
            n = new Set(),
            r = (e, r) => {
              let i = "function" == typeof e ? e(t) : e;
              if (!Object.is(i, t)) {
                let e = t;
                (t = (null != r ? r : "object" != typeof i || null === i)
                  ? i
                  : Object.assign({}, t, i)),
                  n.forEach((n) => n(t, e));
              }
            },
            i = () => t,
            o = {
              setState: r,
              getState: i,
              getInitialState: () => a,
              subscribe: (e) => (n.add(e), () => n.delete(e)),
            },
            a = (t = e(r, i, o));
          return o;
        },
        l = (e) => (e ? c(e) : c);
      var u = n(1607),
        d = n(15484);
      class h {
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
              value: new d.b(),
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
      function f(e, t) {
        return JSON.parse(e, (e, n) => {
          let r = n;
          return (
            r?.__type === "bigint" && (r = BigInt(r.value)),
            r?.__type === "Map" && (r = new Map(r.value)),
            t?.(e, r) ?? r
          );
        });
      }
      function p(e, t) {
        return e.slice(0, t).join(".") || ".";
      }
      function m(e, t) {
        let { length: n } = e;
        for (let r = 0; r < n; ++r) if (e[r] === t) return r + 1;
        return 0;
      }
      function y(e, t, n, r) {
        return JSON.stringify(
          e,
          (function (e, t) {
            let n = "function" == typeof e,
              r = "function" == typeof t,
              i = [],
              o = [];
            return function (a, s) {
              if ("object" == typeof s)
                if (i.length) {
                  let e = m(i, this);
                  0 === e ? (i[i.length] = this) : (i.splice(e), o.splice(e)),
                    (o[o.length] = a);
                  let n = m(i, s);
                  if (0 !== n)
                    return r ? t.call(this, a, s, p(o, n)) : `[ref=${p(o, n)}]`;
                } else (i[0] = s), (o[0] = a);
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
      let b = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
      var g = n(77752);
      let w = 256;
      var v = n(40194);
      function A(e) {
        let t,
          {
            multiInjectedProviderDiscovery: n = !0,
            storage: a = (function (e) {
              let {
                deserialize: t = f,
                key: n = "wagmi",
                serialize: r = y,
                storage: i = b,
              } = e;
              function o(e) {
                return e instanceof Promise
                  ? e.then((e) => e).catch(() => null)
                  : e;
              }
              return {
                ...i,
                key: n,
                async getItem(e, r) {
                  let a = i.getItem(`${n}.${e}`),
                    s = await o(a);
                  return s ? t(s) ?? null : r ?? null;
                },
                async setItem(e, t) {
                  let a = `${n}.${e}`;
                  null === t
                    ? await o(i.removeItem(a))
                    : await o(i.setItem(a, r(t)));
                },
                async removeItem(e) {
                  await o(i.removeItem(`${n}.${e}`));
                },
              };
            })({
              storage: (function () {
                let e =
                  "undefined" != typeof window && window.localStorage
                    ? window.localStorage
                    : b;
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
            ssr: d = !1,
            ...p
          } = e,
          m =
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
          A = l(() => p.chains),
          x = l(() => {
            let e = [],
              t = new Set();
            for (let n of p.connectors ?? []) {
              let r = C(n);
              if ((e.push(r), !d && r.rdns))
                for (let e of "string" == typeof r.rdns ? [r.rdns] : r.rdns)
                  t.add(e);
            }
            if (!d && m)
              for (let n of m.getProviders())
                t.has(n.info.rdns) || e.push(C(E(n)));
            return e;
          });
        function C(e) {
          let t = new h(
              (function (e = 11) {
                if (!r || w + e > 512) {
                  (r = ""), (w = 0);
                  for (let e = 0; e < 256; e++)
                    r += ((256 + 256 * Math.random()) | 0)
                      .toString(16)
                      .substring(1);
                }
                return r.substring(w, w++ + e);
              })()
            ),
            n = {
              ...e({
                emitter: t,
                chains: A.getState(),
                storage: a,
                transports: p.transports,
              }),
              emitter: t,
              uid: t.uid,
            };
          return t.on("connect", M), n.setup?.(), n;
        }
        function E(e) {
          let { info: t } = e,
            n = e.provider;
          return (0, u.b)({ target: { ...t, id: t.rdns, provider: n } });
        }
        let I = new Map();
        function B() {
          return {
            chainId: A.getState()[0].id,
            connections: new Map(),
            current: null,
            status: "disconnected",
          };
        }
        let k = "0.0.0-canary-";
        t = v.r.startsWith(k)
          ? Number.parseInt(v.r.replace(k, ""))
          : Number.parseInt(v.r.split(".")[0] ?? "0");
        let P = l(
          o(
            a
              ? s(B, {
                  migrate(e, n) {
                    if (n === t) return e;
                    let r = B(),
                      i = S(e, r.chainId);
                    return { ...r, chainId: i };
                  },
                  name: "store",
                  partialize: (e) => ({
                    connections: {
                      __type: "Map",
                      value: Array.from(e.connections.entries()).map(
                        ([e, t]) => {
                          let { id: n, name: r, type: i, uid: o } = t.connector;
                          return [
                            e,
                            {
                              ...t,
                              connector: { id: n, name: r, type: i, uid: o },
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
                    let n = S(e, t.chainId);
                    return { ...t, ...e, chainId: n };
                  },
                  skipHydration: d,
                  storage: a,
                  version: t,
                })
              : B
          )
        );
        function S(e, t) {
          return e &&
            "object" == typeof e &&
            "chainId" in e &&
            "number" == typeof e.chainId &&
            A.getState().some((t) => t.id === e.chainId)
            ? e.chainId
            : t;
        }
        function O(e) {
          P.setState((t) => {
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
        function M(e) {
          "connecting" !== P.getState().status &&
            "reconnecting" !== P.getState().status &&
            P.setState((t) => {
              let n = x.getState().find((t) => t.uid === e.uid);
              return n
                ? (n.emitter.listenerCount("connect") &&
                    n.emitter.off("connect", O),
                  n.emitter.listenerCount("change") ||
                    n.emitter.on("change", O),
                  n.emitter.listenerCount("disconnect") ||
                    n.emitter.on("disconnect", T),
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
        function T(e) {
          P.setState((t) => {
            let n = t.connections.get(e.uid);
            if (n) {
              let e = n.connector;
              e.emitter.listenerCount("change") &&
                n.connector.emitter.off("change", O),
                e.emitter.listenerCount("disconnect") &&
                  n.connector.emitter.off("disconnect", T),
                e.emitter.listenerCount("connect") ||
                  n.connector.emitter.on("connect", M);
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
          P.setState(B()),
          c &&
            P.subscribe(
              ({ connections: e, current: t }) =>
                t ? e.get(t)?.chainId : void 0,
              (e) => {
                if (A.getState().some((t) => t.id === e))
                  return P.setState((t) => ({ ...t, chainId: e ?? t.chainId }));
              }
            ),
          m?.subscribe((e) => {
            let t = new Set(),
              n = new Set();
            for (let e of x.getState())
              if ((t.add(e.id), e.rdns))
                for (let t of "string" == typeof e.rdns ? [e.rdns] : e.rdns)
                  n.add(t);
            let r = [];
            for (let i of e) {
              if (n.has(i.info.rdns)) continue;
              let e = C(E(i));
              t.has(e.id) || r.push(e);
            }
            (!a || P.persist.hasHydrated()) &&
              x.setState((e) => [...e, ...r], !0);
          }),
          {
            get chains() {
              return A.getState();
            },
            get connectors() {
              return x.getState();
            },
            storage: a,
            getClient: function (e = {}) {
              let t,
                n = e.chainId ?? P.getState().chainId,
                r = A.getState().find((e) => e.id === n);
              if (e.chainId && !r) throw new g.nk();
              {
                let e = I.get(P.getState().chainId);
                if (e && !r) return e;
                if (!r) throw new g.nk();
              }
              {
                let e = I.get(n);
                if (e) return e;
              }
              if (p.client) t = p.client({ chain: r });
              else {
                let e = r.id,
                  n = A.getState().map((e) => e.id),
                  o = {};
                for (let [t, r] of Object.entries(p))
                  if (
                    "chains" !== t &&
                    "client" !== t &&
                    "connectors" !== t &&
                    "transports" !== t
                  )
                    if ("object" == typeof r)
                      if (e in r) o[t] = r[e];
                      else {
                        if (n.some((e) => e in r)) continue;
                        o[t] = r;
                      }
                    else o[t] = r;
                t = (0, i.U)({
                  ...o,
                  chain: r,
                  batch: o.batch ?? { multicall: !0 },
                  transport: (t) => p.transports[e]({ ...t, connectors: x }),
                });
              }
              return I.set(n, t), t;
            },
            get state() {
              return P.getState();
            },
            setState(e) {
              let t;
              t = "function" == typeof e ? e(P.getState()) : e;
              let n = B();
              "object" != typeof t && (t = n),
                Object.keys(n).some((e) => !(e in t)) && (t = n),
                P.setState(t, !0);
            },
            subscribe: (e, t, n) =>
              P.subscribe(
                e,
                t,
                n ? { ...n, fireImmediately: n.emitImmediately } : void 0
              ),
            _internal: {
              mipd: m,
              store: P,
              ssr: !!d,
              syncConnectedChain: c,
              transports: p.transports,
              chains: {
                setState(e) {
                  let t = "function" == typeof e ? e(A.getState()) : e;
                  if (0 !== t.length) return A.setState(t, !0);
                },
                subscribe: (e) => A.subscribe(e),
              },
              connectors: {
                providerDetailToConnector: E,
                setup: C,
                setState: (e) =>
                  x.setState("function" == typeof e ? e(x.getState()) : e, !0),
                subscribe: (e) => x.subscribe(e),
              },
              events: { change: O, connect: M, disconnect: T },
            },
          }
        );
      }
    },
    40194: (e, t, n) => {
      "use strict";
      n.d(t, { r: () => r });
      let r = "2.17.2";
    },
    40363: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => o, f: () => i });
      var r = function (e, t) {
        return (
          Object.defineProperty(e, "__recipe__", { value: t, writable: !1 }), e
        );
      };
      function i(e) {
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
      function o(e) {
        var { conditions: t } = e;
        if (!t) throw Error("Styles have no conditions");
        var n = i(e);
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
            var i = Array.isArray(e) ? n(e) : e,
              o = {};
            for (var a in i) null != i[a] && (o[a] = r(i[a], a));
            return o;
          },
          {
            importPath: "@vanilla-extract/sprinkles/createUtils",
            importName: "createMapValueFn",
            args: [{ conditions: e.conditions }],
          }
        );
      }
    },
    41052: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => a });
      var r = n(29995),
        i = n(7441),
        o = n(35109);
      function a(e, t) {
        if (!(e instanceof i.C)) return !1;
        let n = e.walk((e) => e instanceof o.M);
        return (
          n instanceof o.M &&
          (!!(
            n.data?.errorName === "ResolverNotFound" ||
            n.data?.errorName === "ResolverWildcardNotSupported" ||
            n.data?.errorName === "ResolverNotContract" ||
            n.data?.errorName === "ResolverError" ||
            n.data?.errorName === "HttpError" ||
            n.reason?.includes(
              "Wildcard on non-extended resolvers is not supported"
            )
          ) ||
            ("reverse" === t && n.reason === r.fD[50]))
        );
      }
    },
    41096: (e, t, n) => {
      "use strict";
      n.d(t, { e: () => d });
      var r = n(5041),
        i = n(77752);
      async function o(e, t) {
        let n;
        if (
          (n =
            "function" == typeof t.connector
              ? e._internal.connectors.setup(t.connector)
              : t.connector).uid === e.state.current
        )
          throw new i.nM();
        try {
          e.setState((e) => ({ ...e, status: "connecting" })),
            n.emitter.emit("message", { type: "connecting" });
          let { connector: r, ...i } = t,
            o = await n.connect(i),
            a = o.accounts;
          return (
            n.emitter.off("connect", e._internal.events.connect),
            n.emitter.on("change", e._internal.events.change),
            n.emitter.on("disconnect", e._internal.events.disconnect),
            await e.storage?.setItem("recentConnectorId", n.id),
            e.setState((e) => ({
              ...e,
              connections: new Map(e.connections).set(n.uid, {
                accounts: a,
                chainId: o.chainId,
                connector: n,
              }),
              current: n.uid,
              status: "connected",
            })),
            { accounts: a, chainId: o.chainId }
          );
        } catch (t) {
          throw (
            (e.setState((e) => ({
              ...e,
              status: e.current ? "connected" : "disconnected",
            })),
            t)
          );
        }
      }
      var a = n(12115),
        s = n(53031),
        c = n(34250);
      let l = [];
      function u(e) {
        let t = e.connectors;
        return (0, c.b)(l, t) ? l : ((l = t), t);
      }
      function d() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, s.U)(e),
          i = { mutationFn: (e) => o(n, e), mutationKey: ["connect"] },
          { mutate: c, mutateAsync: l, ...d } = (0, r.n)({ ...t, ...i });
        return (
          (0, a.useEffect)(
            () =>
              n.subscribe(
                (e) => {
                  let { status: t } = e;
                  return t;
                },
                (e, t) => {
                  "connected" === t && "disconnected" === e && d.reset();
                }
              ),
            [n, d.reset]
          ),
          {
            ...d,
            connect: c,
            connectAsync: l,
            connectors: (function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = (0, s.U)(e);
              return (0, a.useSyncExternalStore)(
                (e) =>
                  (function (e, t) {
                    let { onChange: n } = t;
                    return e._internal.connectors.subscribe((e, t) => {
                      n(Object.values(e), t);
                    });
                  })(t, { onChange: e }),
                () => u(t),
                () => u(t)
              );
            })({ config: n }),
          }
        );
      }
    },
    41514: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => i, R: () => r });
      let r = (e) => e,
        i = (e) => e;
    },
    42142: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => i });
      var r = n(10231);
      function i(
        e,
        { delay: t = 100, retryCount: n = 2, shouldRetry: o = () => !0 } = {}
      ) {
        return new Promise((i, a) => {
          let s = async ({ count: c = 0 } = {}) => {
            let l = async ({ error: e }) => {
              let n = "function" == typeof t ? t({ count: c, error: e }) : t;
              n && (await (0, r.u)(n)), s({ count: c + 1 });
            };
            try {
              let t = await e();
              i(t);
            } catch (e) {
              if (c < n && (await o({ count: c, error: e })))
                return l({ error: e });
              a(e);
            }
          };
          s();
        });
      }
    },
    42264: (e, t, n) => {
      "use strict";
      n.d(t, {
        A7: () => o,
        BG: () => a,
        Fo: () => f,
        K0: () => c,
        Oh: () => l,
        RM: () => y,
        jj: () => s,
        k5: () => d,
        lN: () => m,
        lY: () => h,
        uC: () => p,
        vW: () => u,
      });
      var r = n(31942),
        i = n(7441);
      class o extends i.C {
        constructor({ cause: e, message: t } = {}) {
          let n = t
            ?.replace("execution reverted: ", "")
            ?.replace("execution reverted", "");
          super(
            `Execution reverted ${
              n ? `with reason: ${n}` : "for an unknown reason"
            }.`,
            { cause: e, name: "ExecutionRevertedError" }
          );
        }
      }
      Object.defineProperty(o, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 3,
      }),
        Object.defineProperty(o, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /execution reverted/,
        });
      class a extends i.C {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, r.Q)(t)} gwei` : ""
            }) cannot be higher than the maximum allowed value (2^256-1).`,
            { cause: e, name: "FeeCapTooHighError" }
          );
        }
      }
      Object.defineProperty(a, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
      });
      class s extends i.C {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, r.Q)(t)}` : ""
            } gwei) cannot be lower than the block base fee.`,
            { cause: e, name: "FeeCapTooLowError" }
          );
        }
      }
      Object.defineProperty(s, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
      });
      class c extends i.C {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }is higher than the next one expected.`,
            { cause: e, name: "NonceTooHighError" }
          );
        }
      }
      Object.defineProperty(c, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too high/,
      });
      class l extends i.C {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,
            { cause: e, name: "NonceTooLowError" }
          );
        }
      }
      Object.defineProperty(l, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too low|transaction already imported|already known/,
      });
      class u extends i.C {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }exceeds the maximum allowed nonce.`,
            { cause: e, name: "NonceMaxValueError" }
          );
        }
      }
      Object.defineProperty(u, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce has max value/,
      });
      class d extends i.C {
        constructor({ cause: e } = {}) {
          super(
            "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",
            {
              cause: e,
              metaMessages: [
                "This error could arise when the account does not have enough funds to:",
                " - pay for the total gas fee,",
                " - pay for the value to send.",
                " ",
                "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
                " - `gas` is the amount of gas needed for transaction to execute,",
                " - `gas fee` is the gas fee,",
                " - `value` is the amount of ether to send to the recipient.",
              ],
              name: "InsufficientFundsError",
            }
          );
        }
      }
      Object.defineProperty(d, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /insufficient funds|exceeds transaction sender account balance/,
      });
      class h extends i.C {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction exceeds the limit allowed for the block.`,
            { cause: e, name: "IntrinsicGasTooHighError" }
          );
        }
      }
      Object.defineProperty(h, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too high|gas limit reached/,
      });
      class f extends i.C {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction is too low.`,
            { cause: e, name: "IntrinsicGasTooLowError" }
          );
        }
      }
      Object.defineProperty(f, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too low/,
      });
      class p extends i.C {
        constructor({ cause: e }) {
          super("The transaction type is not supported for this chain.", {
            cause: e,
            name: "TransactionTypeNotSupportedError",
          });
        }
      }
      Object.defineProperty(p, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /transaction type not valid/,
      });
      class m extends i.C {
        constructor({
          cause: e,
          maxPriorityFeePerGas: t,
          maxFeePerGas: n,
        } = {}) {
          super(
            `The provided tip (\`maxPriorityFeePerGas\`${
              t ? ` = ${(0, r.Q)(t)} gwei` : ""
            }) cannot be higher than the fee cap (\`maxFeePerGas\`${
              n ? ` = ${(0, r.Q)(n)} gwei` : ""
            }).`,
            { cause: e, name: "TipAboveFeeCapError" }
          );
        }
      }
      Object.defineProperty(m, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
      });
      class y extends i.C {
        constructor({ cause: e }) {
          super(`An error occurred while executing: ${e?.shortMessage}`, {
            cause: e,
            name: "UnknownNodeError",
          });
        }
      }
    },
    43484: (e, t, n) => {
      "use strict";
      n.d(t, { IT: () => o });
      var r = n(32960),
        i = n(62108);
      function o(e) {
        let t = (0, r.I)({ ...e, queryKeyHashFn: i.Zi });
        return (t.queryKey = e.queryKey), t;
      }
    },
    43585: (e, t, n) => {
      let r = n(29343),
        i = n(81685);
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
          return i.testNumeric(e)
            ? t.NUMERIC
            : i.testAlphanumeric(e)
            ? t.ALPHANUMERIC
            : i.testKanji(e)
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
    43935: (e, t, n) => {
      "use strict";
      n.d(t, { n: () => m });
      var r = n(99702),
        i = n(35883),
        o = n(87456),
        a = n(87094),
        s = n(93727),
        c = n(54335),
        l = n(94201),
        u = n(27493),
        d = n(67622);
      function h(e, t = {}) {
        void 0 !== t.size && (0, u.Sl)(e, { size: t.size });
        let n = (0, d.My)(e, t);
        return (0, u.ME)(n, t);
      }
      var f = n(80844),
        p = n(13423);
      function m(e, t) {
        let n = "string" == typeof t ? (0, f.aT)(t) : t,
          m = (0, o.l)(n);
        if (0 === (0, a.E)(n) && e.length > 0) throw new r.O();
        if ((0, a.E)(t) && 32 > (0, a.E)(t))
          throw new r.Iy({
            data: "string" == typeof t ? t : (0, d.My)(t),
            params: e,
            size: (0, a.E)(t),
          });
        let b = 0,
          g = [];
        for (let t = 0; t < e.length; ++t) {
          let n = e[t];
          m.setPosition(b);
          let [o, a] = (function e(t, n, { staticPosition: o }) {
            let a = (0, p.k)(n.type);
            if (a) {
              let [r, i] = a;
              return (function (t, n, { length: r, staticPosition: i }) {
                if (!r) {
                  let r = i + h(t.readBytes(32)),
                    o = r + 32;
                  t.setPosition(r);
                  let a = h(t.readBytes(32)),
                    s = y(n),
                    c = 0,
                    l = [];
                  for (let r = 0; r < a; ++r) {
                    t.setPosition(o + (s ? 32 * r : c));
                    let [i, a] = e(t, n, { staticPosition: o });
                    (c += a), l.push(i);
                  }
                  return t.setPosition(i + 32), [l, 32];
                }
                if (y(n)) {
                  let o = i + h(t.readBytes(32)),
                    a = [];
                  for (let i = 0; i < r; ++i) {
                    t.setPosition(o + 32 * i);
                    let [r] = e(t, n, { staticPosition: o });
                    a.push(r);
                  }
                  return t.setPosition(i + 32), [a, 32];
                }
                let o = 0,
                  a = [];
                for (let s = 0; s < r; ++s) {
                  let [r, s] = e(t, n, { staticPosition: i + o });
                  (o += s), a.push(r);
                }
                return [a, o];
              })(t, { ...n, type: i }, { length: r, staticPosition: o });
            }
            if ("tuple" === n.type)
              return (function (t, n, { staticPosition: r }) {
                let i =
                    0 === n.components.length ||
                    n.components.some(({ name: e }) => !e),
                  o = i ? [] : {},
                  a = 0;
                if (y(n)) {
                  let s = r + h(t.readBytes(32));
                  for (let r = 0; r < n.components.length; ++r) {
                    let c = n.components[r];
                    t.setPosition(s + a);
                    let [l, u] = e(t, c, { staticPosition: s });
                    (a += u), (o[i ? r : c?.name] = l);
                  }
                  return t.setPosition(r + 32), [o, 32];
                }
                for (let s = 0; s < n.components.length; ++s) {
                  let c = n.components[s],
                    [l, u] = e(t, c, { staticPosition: r });
                  (o[i ? s : c?.name] = l), (a += u);
                }
                return [o, a];
              })(t, n, { staticPosition: o });
            if ("address" === n.type) {
              var f = t;
              let e = f.readBytes(32);
              return [(0, i.o)((0, d.My)((0, s.A1)(e, -20))), 32];
            }
            if ("bool" === n.type)
              return [
                (function (e, t = {}) {
                  let n = e;
                  if (
                    (void 0 !== t.size &&
                      ((0, u.Sl)(n, { size: t.size }), (n = (0, c.B)(n))),
                    n.length > 1 || n[0] > 1)
                  )
                    throw new l.xO(n);
                  return !!n[0];
                })(t.readBytes(32), { size: 32 }),
                32,
              ];
            if (n.type.startsWith("bytes"))
              return (function (e, t, { staticPosition: n }) {
                let [r, i] = t.type.split("bytes");
                if (!i) {
                  let t = h(e.readBytes(32));
                  e.setPosition(n + t);
                  let r = h(e.readBytes(32));
                  if (0 === r) return e.setPosition(n + 32), ["0x", 32];
                  let i = e.readBytes(r);
                  return e.setPosition(n + 32), [(0, d.My)(i), 32];
                }
                return [(0, d.My)(e.readBytes(Number.parseInt(i), 32)), 32];
              })(t, n, { staticPosition: o });
            if (n.type.startsWith("uint") || n.type.startsWith("int")) {
              var m = t,
                b = n;
              let e = b.type.startsWith("int"),
                r = Number.parseInt(b.type.split("int")[1] || "256"),
                i = m.readBytes(32);
              return [
                r > 48
                  ? (function (e, t = {}) {
                      void 0 !== t.size && (0, u.Sl)(e, { size: t.size });
                      let n = (0, d.My)(e, t);
                      return (0, u.uU)(n, t);
                    })(i, { signed: e })
                  : h(i, { signed: e }),
                32,
              ];
            }
            if ("string" === n.type)
              return (function (e, { staticPosition: t }) {
                let n = h(e.readBytes(32));
                e.setPosition(t + n);
                let r = h(e.readBytes(32));
                if (0 === r) return e.setPosition(t + 32), ["", 32];
                let i = e.readBytes(r, 32),
                  o = (function (e, t = {}) {
                    let n = e;
                    return (
                      void 0 !== t.size &&
                        ((0, u.Sl)(n, { size: t.size }),
                        (n = (0, c.B)(n, { dir: "right" }))),
                      new TextDecoder().decode(n)
                    );
                  })((0, c.B)(i));
                return e.setPosition(t + 32), [o, 32];
              })(t, { staticPosition: o });
            throw new r.j(n.type, {
              docsPath: "/docs/contract/decodeAbiParameters",
            });
          })(m, n, { staticPosition: 0 });
          (b += a), g.push(o);
        }
        return g;
      }
      function y(e) {
        let { type: t } = e;
        if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
        if ("tuple" === t) return e.components?.some(y);
        let n = (0, p.k)(e.type);
        return !!(n && y({ ...e, type: n[1] }));
      }
    },
    44494: (e, t, n) => {
      "use strict";
      n.d(t, { c: () => o });
      var r = n(77136),
        i = n(1405);
      function o(e, t = "wei") {
        return (0, i.J)(e, r.eL[t]);
      }
    },
    45446: (e, t, n) => {
      "use strict";
      n.d(t, { Q: () => o });
      var r = n(59126);
      let i = /^tuple(?<array>(\[(\d*)\])*)$/;
      function o(e) {
        let t = "",
          n = e.length;
        for (let o = 0; o < n; o++)
          (t += (function e(t) {
            let n = t.type;
            if (i.test(t.type) && "components" in t) {
              n = "(";
              let o = t.components.length;
              for (let r = 0; r < o; r++)
                (n += e(t.components[r])), r < o - 1 && (n += ", ");
              let a = (0, r.Yv)(i, t.type);
              return (n += `)${a?.array ?? ""}`), e({ ...t, type: n });
            }
            return ("indexed" in t && t.indexed && (n = `${n} indexed`), t.name)
              ? `${n} ${t.name}`
              : n;
          })(e[o])),
            o !== n - 1 && (t += ", ");
        return t;
      }
    },
    45643: (e, t, n) => {
      "use strict";
      e.exports = n(6115);
    },
    46056: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => l });
      var r = n(9894),
        i = n(90113),
        o = n(77752),
        a = n(35883),
        s = n(81379),
        c = n(67622);
      function l(e) {
        let t,
          u,
          d,
          h,
          f,
          p,
          m,
          y,
          b = e.isNewChainsStale ?? !0;
        return (0, r.U)((r) => ({
          id: "walletConnect",
          name: "WalletConnect",
          type: l.type,
          async setup() {
            let e = await this.getProvider().catch(() => null);
            e &&
              (f || ((f = this.onConnect.bind(this)), e.on("connect", f)),
              m ||
                ((m = this.onSessionDelete.bind(this)),
                e.on("session_delete", m)));
          },
          async connect({ chainId: e, ...t } = {}) {
            try {
              let n = await this.getProvider();
              if (!n) throw new i.N();
              p || ((p = this.onDisplayUri), n.on("display_uri", p));
              let o = e;
              if (!o) {
                let e = (await r.storage?.getItem("state")) ?? {};
                o = r.chains.some((t) => t.id === e.chainId)
                  ? e.chainId
                  : r.chains[0]?.id;
              }
              if (!o) throw Error("No chains found on connector.");
              let s = await this.isChainsStale();
              if ((n.session && s && (await n.disconnect()), !n.session || s)) {
                let e = r.chains.filter((e) => e.id !== o).map((e) => e.id);
                await n.connect({
                  optionalChains: [o, ...e],
                  ...("pairingTopic" in t
                    ? { pairingTopic: t.pairingTopic }
                    : {}),
                }),
                  this.setRequestedChainsIds(r.chains.map((e) => e.id));
              }
              let c = (await n.enable()).map((e) => (0, a.b)(e)),
                l = await this.getChainId();
              return (
                p && (n.removeListener("display_uri", p), (p = void 0)),
                f && (n.removeListener("connect", f), (f = void 0)),
                d ||
                  ((d = this.onAccountsChanged.bind(this)),
                  n.on("accountsChanged", d)),
                h ||
                  ((h = this.onChainChanged.bind(this)),
                  n.on("chainChanged", h)),
                y ||
                  ((y = this.onDisconnect.bind(this)), n.on("disconnect", y)),
                m ||
                  ((m = this.onSessionDelete.bind(this)),
                  n.on("session_delete", m)),
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
              h && (e?.removeListener("chainChanged", h), (h = void 0)),
                y && (e?.removeListener("disconnect", y), (y = void 0)),
                f || ((f = this.onConnect.bind(this)), e?.on("connect", f)),
                d && (e?.removeListener("accountsChanged", d), (d = void 0)),
                m && (e?.removeListener("session_delete", m), (m = void 0)),
                this.setRequestedChainsIds([]);
            }
          },
          async getAccounts() {
            return (await this.getProvider()).accounts.map((e) => (0, a.b)(e));
          },
          async getProvider({ chainId: i } = {}) {
            async function o() {
              let t = r.chains.map((e) => e.id);
              if (!t.length) return;
              let { EthereumProvider: i } = await Promise.all([
                n.e(108),
                n.e(4874),
              ]).then(n.bind(n, 15495));
              return await i.init({
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
                (u || (u = o()),
                (t = await u),
                t?.events.setMaxListeners(Number.POSITIVE_INFINITY)),
              i && (await this.switchChain?.({ chainId: i })),
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
            if (!n) throw new i.N();
            let a = r.chains.find((e) => e.id === t);
            if (!a) throw new s.ch(new o.nk());
            try {
              await Promise.all([
                new Promise((e) => {
                  let n = ({ chainId: i }) => {
                    i === t && (r.emitter.off("change", n), e());
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
                let r, i;
                (r = e?.blockExplorerUrls
                  ? e.blockExplorerUrls
                  : a.blockExplorers?.default.url
                  ? [a.blockExplorers?.default.url]
                  : []),
                  (i = e?.rpcUrls?.length
                    ? e.rpcUrls
                    : [...a.rpcUrls.default.http]);
                let o = {
                  blockExplorerUrls: r,
                  chainId: (0, c.cK)(t),
                  chainName: e?.chainName ?? a.name,
                  iconUrls: e?.iconUrls,
                  nativeCurrency: e?.nativeCurrency ?? a.nativeCurrency,
                  rpcUrls: i,
                };
                await n.request({
                  method: "wallet_addEthereumChain",
                  params: [o],
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
            d && (t.removeListener("accountsChanged", d), (d = void 0)),
              h && (t.removeListener("chainChanged", h), (h = void 0)),
              y && (t.removeListener("disconnect", y), (y = void 0)),
              m && (t.removeListener("session_delete", m), (m = void 0)),
              f || ((f = this.onConnect.bind(this)), t.on("connect", f));
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
            if (!b) return !1;
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
        var i;
        let o = n,
          a = t;
        void 0 !== o || (t && t.getContext) || ((o = t), (t = void 0)),
          t ||
            (a = (function () {
              try {
                return document.createElement("canvas");
              } catch (e) {
                throw Error("You need to specify a canvas element");
              }
            })()),
          (o = r.getOptions(o));
        let s = r.getImageWidth(e.modules.size, o),
          c = a.getContext("2d"),
          l = c.createImageData(s, s);
        return (
          r.qrToImageData(l.data, e, o),
          (i = a),
          c.clearRect(0, 0, i.width, i.height),
          i.style || (i.style = {}),
          (i.height = s),
          (i.width = s),
          (i.style.height = s + "px"),
          (i.style.width = s + "px"),
          c.putImageData(l, 0, 0),
          a
        );
      }),
        (t.renderToDataURL = function (e, n, r) {
          let i = r;
          void 0 !== i || (n && n.getContext) || ((i = n), (n = void 0)),
            i || (i = {});
          let o = t.render(e, n, i),
            a = i.type || "image/png",
            s = i.rendererOpts || {};
          return o.toDataURL(a, s.quality);
        });
    },
    47826: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => l });
      var r = n(29995),
        i = n(99702),
        o = n(93727),
        a = n(21135),
        s = n(43935),
        c = n(21159);
      function l(e) {
        let { abi: t, data: n } = e,
          l = (0, o.di)(n, 0, 4);
        if ("0x" === l) throw new i.O();
        let u = [...(t || []), r.Mc, r.J9].find(
          (e) => "error" === e.type && l === (0, a.V)((0, c.B)(e))
        );
        if (!u)
          throw new i.Wq(l, { docsPath: "/docs/contract/decodeErrorResult" });
        return {
          abiItem: u,
          args:
            "inputs" in u && u.inputs && u.inputs.length > 0
              ? (0, s.n)(u.inputs, (0, o.di)(n, 4))
              : void 0,
          errorName: u.name,
        };
      }
    },
    49033: (e, t, n) => {
      "use strict";
      e.exports = n(22436);
    },
    50920: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => o });
      var r = n(25910),
        i = n(52020),
        o = new (class extends r.Q {
          #L;
          #s;
          #c;
          constructor() {
            super(),
              (this.#c = (e) => {
                if (!i.S$ && window.addEventListener) {
                  let t = () => e();
                  return (
                    window.addEventListener("visibilitychange", t, !1),
                    () => {
                      window.removeEventListener("visibilitychange", t);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#s || this.setEventListener(this.#c);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#s?.(), (this.#s = void 0));
          }
          setEventListener(e) {
            (this.#c = e),
              this.#s?.(),
              (this.#s = e((e) => {
                "boolean" == typeof e ? this.setFocused(e) : this.onFocus();
              }));
          }
          setFocused(e) {
            this.#L !== e && ((this.#L = e), this.onFocus());
          }
          onFocus() {
            let e = this.isFocused();
            this.listeners.forEach((t) => {
              t(e);
            });
          }
          isFocused() {
            return "boolean" == typeof this.#L
              ? this.#L
              : globalThis.document?.visibilityState !== "hidden";
          }
        })();
    },
    52020: (e, t, n) => {
      "use strict";
      n.d(t, {
        Cp: () => p,
        EN: () => f,
        Eh: () => l,
        F$: () => h,
        GU: () => I,
        MK: () => u,
        S$: () => r,
        ZM: () => E,
        ZZ: () => x,
        Zw: () => o,
        d2: () => c,
        f8: () => m,
        gn: () => a,
        hT: () => C,
        j3: () => s,
        lQ: () => i,
        nJ: () => d,
        pl: () => v,
        y9: () => A,
        yy: () => w,
      });
      var r = "undefined" == typeof window || "Deno" in globalThis;
      function i() {}
      function o(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function a(e) {
        return "number" == typeof e && e >= 0 && e !== 1 / 0;
      }
      function s(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0);
      }
      function c(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function l(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function u(e, t) {
        let {
          type: n = "all",
          exact: r,
          fetchStatus: i,
          predicate: o,
          queryKey: a,
          stale: s,
        } = e;
        if (a) {
          if (r) {
            if (t.queryHash !== h(a, t.options)) return !1;
          } else if (!p(t.queryKey, a)) return !1;
        }
        if ("all" !== n) {
          let e = t.isActive();
          if (("active" === n && !e) || ("inactive" === n && e)) return !1;
        }
        return (
          ("boolean" != typeof s || t.isStale() === s) &&
          (!i || i === t.state.fetchStatus) &&
          (!o || !!o(t))
        );
      }
      function d(e, t) {
        let { exact: n, status: r, predicate: i, mutationKey: o } = e;
        if (o) {
          if (!t.options.mutationKey) return !1;
          if (n) {
            if (f(t.options.mutationKey) !== f(o)) return !1;
          } else if (!p(t.options.mutationKey, o)) return !1;
        }
        return (!r || t.state.status === r) && (!i || !!i(t));
      }
      function h(e, t) {
        return (t?.queryKeyHashFn || f)(e);
      }
      function f(e) {
        return JSON.stringify(e, (e, t) =>
          b(t)
            ? Object.keys(t)
                .sort()
                .reduce((e, n) => ((e[n] = t[n]), e), {})
            : t
        );
      }
      function p(e, t) {
        return (
          e === t ||
          (typeof e == typeof t &&
            !!e &&
            !!t &&
            "object" == typeof e &&
            "object" == typeof t &&
            Object.keys(t).every((n) => p(e[n], t[n])))
        );
      }
      function m(e, t) {
        if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
        for (let n in e) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function y(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length;
      }
      function b(e) {
        if (!g(e)) return !1;
        let t = e.constructor;
        if (void 0 === t) return !0;
        let n = t.prototype;
        return (
          !!g(n) &&
          !!n.hasOwnProperty("isPrototypeOf") &&
          Object.getPrototypeOf(e) === Object.prototype
        );
      }
      function g(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function w(e) {
        return new Promise((t) => {
          setTimeout(t, e);
        });
      }
      function v(e, t, n) {
        return "function" == typeof n.structuralSharing
          ? n.structuralSharing(e, t)
          : !1 !== n.structuralSharing
          ? (function e(t, n) {
              if (t === n) return t;
              let r = y(t) && y(n);
              if (r || (b(t) && b(n))) {
                let i = r ? t : Object.keys(t),
                  o = i.length,
                  a = r ? n : Object.keys(n),
                  s = a.length,
                  c = r ? [] : {},
                  l = 0;
                for (let o = 0; o < s; o++) {
                  let s = r ? o : a[o];
                  ((!r && i.includes(s)) || r) &&
                  void 0 === t[s] &&
                  void 0 === n[s]
                    ? ((c[s] = void 0), l++)
                    : ((c[s] = e(t[s], n[s])),
                      c[s] === t[s] && void 0 !== t[s] && l++);
                }
                return o === s && l === o ? t : c;
              }
              return n;
            })(e, t)
          : t;
      }
      function A(e, t, n = 0) {
        let r = [...e, t];
        return n && r.length > n ? r.slice(1) : r;
      }
      function x(e, t, n = 0) {
        let r = [t, ...e];
        return n && r.length > n ? r.slice(0, -1) : r;
      }
      var C = Symbol();
      function E(e, t) {
        return !e.queryFn && t?.initialPromise
          ? () => t.initialPromise
          : e.queryFn && e.queryFn !== C
          ? e.queryFn
          : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
      }
      function I(e, t) {
        return "function" == typeof e ? e(...t) : !!e;
      }
    },
    53031: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => l });
      var r = n(12115),
        i = n(83415),
        o = n(95782);
      let a = () => "wagmi@2.15.4";
      class s extends o.C {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiError",
            });
        }
        get docsBaseUrl() {
          return "https://wagmi.sh/react";
        }
        get version() {
          return a();
        }
      }
      class c extends s {
        constructor() {
          super("`useConfig` must be used within `WagmiProvider`.", {
            docsPath: "/api/WagmiProvider",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiProviderNotFoundError",
            });
        }
      }
      function l() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = null != (e = t.config) ? e : (0, r.useContext)(i.R);
        if (!n) throw new c();
        return n;
      }
    },
    54315: (e, t, n) => {
      "use strict";
      n.d(t, { o: () => d });
      var r = n(7441),
        i = n(90557),
        o = n(81379),
        a = n(67622);
      let s = new (n(65003).A)(8192);
      var c = n(42142),
        l = n(79183),
        u = n(65368);
      function d(
        {
          key: e,
          methods: t,
          name: n,
          request: d,
          retryCount: h = 3,
          retryDelay: f = 150,
          timeout: p,
          type: m,
        },
        y
      ) {
        return {
          config: {
            key: e,
            methods: t,
            name: n,
            request: d,
            retryCount: h,
            retryDelay: f,
            timeout: p,
            type: m,
          },
          request: (function (e, t = {}) {
            return async (n, u = {}) => {
              let {
                  dedupe: d = !1,
                  methods: h,
                  retryDelay: f = 150,
                  retryCount: p = 3,
                  uid: m,
                } = { ...t, ...u },
                { method: y } = n;
              if (
                h?.exclude?.includes(y) ||
                (h?.include && !h.include.includes(y))
              )
                throw new o.ab(Error("method not supported"), { method: y });
              let b = d ? (0, a.i3)(`${m}.${(0, l.A)(n)}`) : void 0;
              return (function (e, { enabled: t = !0, id: n }) {
                if (!t || !n) return e();
                if (s.get(n)) return s.get(n);
                let r = e().finally(() => s.delete(n));
                return s.set(n, r), r;
              })(
                () =>
                  (0, c.b)(
                    async () => {
                      try {
                        return await e(n);
                      } catch (e) {
                        switch (e.code) {
                          case o.XU.code:
                            throw new o.XU(e);
                          case o.CL.code:
                            throw new o.CL(e);
                          case o.Gi.code:
                            throw new o.Gi(e, { method: n.method });
                          case o.D5.code:
                            throw new o.D5(e);
                          case o.bq.code:
                            throw new o.bq(e);
                          case o.Di.code:
                            throw new o.Di(e);
                          case o.hA.code:
                            throw new o.hA(e);
                          case o.qZ.code:
                            throw new o.qZ(e);
                          case o.YW.code:
                            throw new o.YW(e);
                          case o.ab.code:
                            throw new o.ab(e, { method: n.method });
                          case o.s0.code:
                            throw new o.s0(e);
                          case o.xQ.code:
                            throw new o.xQ(e);
                          case o.vx.code:
                            throw new o.vx(e);
                          case o.sV.code:
                            throw new o.sV(e);
                          case o.Sf.code:
                            throw new o.Sf(e);
                          case o.RV.code:
                            throw new o.RV(e);
                          case o.xq.code:
                            throw new o.xq(e);
                          case o.ch.code:
                            throw new o.ch(e);
                          case o.L5.code:
                            throw new o.L5(e);
                          case o.WT.code:
                            throw new o.WT(e);
                          case o.hl.code:
                            throw new o.hl(e);
                          case o.cg.code:
                            throw new o.cg(e);
                          case o.uL.code:
                            throw new o.uL(e);
                          case o.G1.code:
                            throw new o.G1(e);
                          case o.jz.code:
                            throw new o.jz(e);
                          case 5e3:
                            throw new o.vx(e);
                          default:
                            if (e instanceof r.C) throw e;
                            throw new o.MI(e);
                        }
                      }
                    },
                    {
                      delay: ({ count: e, error: t }) => {
                        if (t && t instanceof i.Ci) {
                          let e = t?.headers?.get("Retry-After");
                          if (e?.match(/\d/)) return 1e3 * Number.parseInt(e);
                        }
                        return ~~(1 << e) * f;
                      },
                      retryCount: p,
                      shouldRetry: ({ error: e }) => {
                        var t;
                        return "code" in (t = e) && "number" == typeof t.code
                          ? -1 === t.code ||
                              t.code === o.s0.code ||
                              t.code === o.bq.code
                          : !(t instanceof i.Ci) ||
                              !t.status ||
                              403 === t.status ||
                              408 === t.status ||
                              413 === t.status ||
                              429 === t.status ||
                              500 === t.status ||
                              502 === t.status ||
                              503 === t.status ||
                              504 === t.status ||
                              !1;
                      },
                    }
                  ),
                { enabled: d, id: b }
              );
            };
          })(d, { methods: t, retryCount: h, retryDelay: f, uid: (0, u.L)() }),
          value: y,
        };
      }
    },
    54335: (e, t, n) => {
      "use strict";
      function r(e, { dir: t = "left" } = {}) {
        let n = "string" == typeof e ? e.replace("0x", "") : e,
          i = 0;
        for (let e = 0; e < n.length - 1; e++)
          if ("0" === n["left" === t ? e : n.length - e - 1].toString()) i++;
          else break;
        return ((n = "left" === t ? n.slice(i) : n.slice(0, n.length - i)),
        "string" == typeof e)
          ? (1 === n.length && "right" === t && (n = `${n}0`),
            `0x${n.length % 2 == 1 ? `0${n}` : n}`)
          : n;
      }
      n.d(t, { B: () => r });
    },
    54842: (e, t, n) => {
      "use strict";
      n.d(t, { j: () => c });
      var r = n(99702),
        i = n(7441),
        o = n(35109),
        a = n(90557),
        s = n(81379);
      function c(
        e,
        { abi: t, address: n, args: c, docsPath: l, functionName: u, sender: d }
      ) {
        let h =
            e instanceof o.$S
              ? e
              : e instanceof i.C
              ? e.walk((e) => "data" in e) || e.walk()
              : {},
          { code: f, data: p, details: m, message: y, shortMessage: b } = h,
          g =
            e instanceof r.O
              ? new o.rR({ functionName: u })
              : [3, s.bq.code].includes(f) && (p || m || y || b)
              ? new o.M({
                  abi: t,
                  data: "object" == typeof p ? p.data : p,
                  functionName: u,
                  message: h instanceof a.J8 ? m : b ?? y,
                })
              : e;
        return new o.bG(g, {
          abi: t,
          args: c,
          contractAddress: n,
          docsPath: l,
          functionName: u,
          sender: d,
        });
      }
    },
    55394: (e, t, n) => {
      "use strict";
      n.d(t, { s: () => u });
      var r = n(14493),
        i = n(13861),
        o = n(67622),
        a = n(41052),
        s = n(7612),
        c = n(34524),
        l = n(3488);
      async function u(
        e,
        {
          address: t,
          blockNumber: n,
          blockTag: u,
          gatewayUrls: d,
          strict: h,
          universalResolverAddress: f,
        }
      ) {
        let p = f;
        if (!p) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          p = (0, i.M)({
            blockNumber: n,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        let m = `${t.toLowerCase().substring(2)}.addr.reverse`;
        try {
          let i = {
              address: p,
              abi: r.oX,
              functionName: "reverse",
              args: [(0, o.nj)((0, s.F)(m))],
              blockNumber: n,
              blockTag: u,
            },
            a = (0, c.T)(e, l.J, "readContract"),
            [h, f] = d ? await a({ ...i, args: [...i.args, d] }) : await a(i);
          if (t.toLowerCase() !== f.toLowerCase()) return null;
          return h;
        } catch (e) {
          if (h) throw e;
          if ((0, a.J)(e, "reverse")) return null;
          throw e;
        }
      }
    },
    55908: (e, t, n) => {
      let r = n(46087),
        i = n(58976),
        o = n(34122),
        a = n(79621),
        s = n(37788),
        c = n(645),
        l = n(36517),
        u = n(60519),
        d = n(60061),
        h = n(62202),
        f = n(88252),
        p = n(43585),
        m = n(72920);
      function y(e, t, n) {
        let r,
          i,
          o = e.size,
          a = f.getEncodedBits(t, n);
        for (r = 0; r < 15; r++)
          (i = ((a >> r) & 1) == 1),
            r < 6
              ? e.set(r, 8, i, !0)
              : r < 8
              ? e.set(r + 1, 8, i, !0)
              : e.set(o - 15 + r, 8, i, !0),
            r < 8
              ? e.set(8, o - r - 1, i, !0)
              : r < 9
              ? e.set(8, 15 - r - 1 + 1, i, !0)
              : e.set(8, 15 - r - 1, i, !0);
        e.set(o - 8, 8, 1, !0);
      }
      t.create = function (e, t) {
        let n, f;
        if (void 0 === e || "" === e) throw Error("No input text");
        let b = i.M;
        return (
          void 0 !== t &&
            ((b = i.from(t.errorCorrectionLevel, i.M)),
            (n = h.from(t.version)),
            (f = l.from(t.maskPattern)),
            t.toSJISFunc && r.setToSJISFunction(t.toSJISFunc)),
          (function (e, t, n, i) {
            let f;
            if (Array.isArray(e)) f = m.fromArray(e);
            else if ("string" == typeof e) {
              let r = t;
              if (!r) {
                let t = m.rawSplit(e);
                r = h.getBestVersionForData(t, n);
              }
              f = m.fromString(e, r || 40);
            } else throw Error("Invalid data");
            let b = h.getBestVersionForData(f, n);
            if (!b)
              throw Error(
                "The amount of data is too big to be stored in a QR Code"
              );
            if (t) {
              if (t < b)
                throw Error(
                  "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                    b +
                    ".\n"
                );
            } else t = b;
            let g = (function (e, t, n) {
                let i = new o();
                n.forEach(function (t) {
                  i.put(t.mode.bit, 4),
                    i.put(t.getLength(), p.getCharCountIndicator(t.mode, e)),
                    t.write(i);
                });
                let a =
                  (r.getSymbolTotalCodewords(e) -
                    u.getTotalCodewordsCount(e, t)) *
                  8;
                for (
                  i.getLengthInBits() + 4 <= a && i.put(0, 4);
                  i.getLengthInBits() % 8 != 0;

                )
                  i.putBit(0);
                let s = (a - i.getLengthInBits()) / 8;
                for (let e = 0; e < s; e++) i.put(e % 2 ? 17 : 236, 8);
                return (function (e, t, n) {
                  let i,
                    o,
                    a = r.getSymbolTotalCodewords(t),
                    s = a - u.getTotalCodewordsCount(t, n),
                    c = u.getBlocksCount(t, n),
                    l = a % c,
                    h = c - l,
                    f = Math.floor(a / c),
                    p = Math.floor(s / c),
                    m = p + 1,
                    y = f - p,
                    b = new d(y),
                    g = 0,
                    w = Array(c),
                    v = Array(c),
                    A = 0,
                    x = new Uint8Array(e.buffer);
                  for (let e = 0; e < c; e++) {
                    let t = e < h ? p : m;
                    (w[e] = x.slice(g, g + t)),
                      (v[e] = b.encode(w[e])),
                      (g += t),
                      (A = Math.max(A, t));
                  }
                  let C = new Uint8Array(a),
                    E = 0;
                  for (i = 0; i < A; i++)
                    for (o = 0; o < c; o++)
                      i < w[o].length && (C[E++] = w[o][i]);
                  for (i = 0; i < y; i++)
                    for (o = 0; o < c; o++) C[E++] = v[o][i];
                  return C;
                })(i, e, t);
              })(t, n, f),
              w = new a(r.getSymbolSize(t));
            !(function (e, t) {
              let n = e.size,
                r = c.getPositions(t);
              for (let t = 0; t < r.length; t++) {
                let i = r[t][0],
                  o = r[t][1];
                for (let t = -1; t <= 7; t++)
                  if (!(i + t <= -1) && !(n <= i + t))
                    for (let r = -1; r <= 7; r++)
                      o + r <= -1 ||
                        n <= o + r ||
                        ((t >= 0 && t <= 6 && (0 === r || 6 === r)) ||
                        (r >= 0 && r <= 6 && (0 === t || 6 === t)) ||
                        (t >= 2 && t <= 4 && r >= 2 && r <= 4)
                          ? e.set(i + t, o + r, !0, !0)
                          : e.set(i + t, o + r, !1, !0));
              }
            })(w, t);
            let v = w.size;
            for (let e = 8; e < v - 8; e++) {
              let t = e % 2 == 0;
              w.set(e, 6, t, !0), w.set(6, e, t, !0);
            }
            return (
              !(function (e, t) {
                let n = s.getPositions(t);
                for (let t = 0; t < n.length; t++) {
                  let r = n[t][0],
                    i = n[t][1];
                  for (let t = -2; t <= 2; t++)
                    for (let n = -2; n <= 2; n++)
                      -2 === t ||
                      2 === t ||
                      -2 === n ||
                      2 === n ||
                      (0 === t && 0 === n)
                        ? e.set(r + t, i + n, !0, !0)
                        : e.set(r + t, i + n, !1, !0);
                }
              })(w, t),
              y(w, n, 0),
              t >= 7 &&
                (function (e, t) {
                  let n,
                    r,
                    i,
                    o = e.size,
                    a = h.getEncodedBits(t);
                  for (let t = 0; t < 18; t++)
                    (n = Math.floor(t / 3)),
                      (r = (t % 3) + o - 8 - 3),
                      (i = ((a >> t) & 1) == 1),
                      e.set(n, r, i, !0),
                      e.set(r, n, i, !0);
                })(w, t),
              !(function (e, t) {
                let n = e.size,
                  r = -1,
                  i = n - 1,
                  o = 7,
                  a = 0;
                for (let s = n - 1; s > 0; s -= 2)
                  for (6 === s && s--; ; ) {
                    for (let n = 0; n < 2; n++)
                      if (!e.isReserved(i, s - n)) {
                        let r = !1;
                        a < t.length && (r = ((t[a] >>> o) & 1) == 1),
                          e.set(i, s - n, r),
                          -1 == --o && (a++, (o = 7));
                      }
                    if ((i += r) < 0 || n <= i) {
                      (i -= r), (r = -r);
                      break;
                    }
                  }
              })(w, g),
              isNaN(i) && (i = l.getBestMask(w, y.bind(null, w, n))),
              l.applyMask(i, w),
              y(w, n, i),
              {
                modules: w,
                version: t,
                errorCorrectionLevel: n,
                maskPattern: i,
                segments: f,
              }
            );
          })(e, n, b, f)
        );
      };
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
    57948: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => i });
      var r = n(52020),
        i = class {
          #q;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout(),
              (0, r.gn)(this.gcTime) &&
                (this.#q = setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (r.S$ ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            this.#q && (clearTimeout(this.#q), (this.#q = void 0));
          }
        };
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
    58980: (e, t, n) => {
      "use strict";
      n.d(t, { Fl: () => o, NV: () => a, ii: () => i });
      var r = n(7441);
      class i extends r.C {
        constructor({ offset: e, position: t, size: n }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset "${e}" is out-of-bounds (size: ${n}).`,
            { name: "SliceOffsetOutOfBoundsError" }
          );
        }
      }
      class o extends r.C {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (${e}) exceeds padding size (${t}).`,
            { name: "SizeExceedsPaddingSizeError" }
          );
        }
      }
      class a extends r.C {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} is expected to be ${t} ${n} long, but is ${e} ${n} long.`,
            { name: "InvalidBytesLengthError" }
          );
        }
      }
    },
    59126: (e, t, n) => {
      "use strict";
      function r(e, t) {
        let n = e.exec(t);
        return n?.groups;
      }
      n.d(t, { BD: () => i, Ge: () => o, Yv: () => r, wj: () => a });
      let i = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        o =
          /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
        a = /^\(.+?\).*?$/;
    },
    59243: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s });
      var r = n(24578),
        i = n(79731),
        o = n(87094),
        a = n(67622);
      function s(e, t) {
        return (0, r.S)(
          (function (e) {
            let t =
                "string" == typeof e
                  ? (0, a.i3)(e)
                  : "string" == typeof e.raw
                  ? e.raw
                  : (0, a.My)(e.raw),
              n = (0, a.i3)(`\x19Ethereum Signed Message:
${(0, o.E)(t)}`);
            return (0, i.xW)([n, t]);
          })(e),
          t
        );
      }
    },
    59742: (e, t, n) => {
      "use strict";
      n.d(t, { r: () => i });
      var r = n(67622);
      async function i(
        e,
        { address: t, blockNumber: n, blockTag: i = "latest" }
      ) {
        let o = "bigint" == typeof n ? (0, r.cK)(n) : void 0;
        return BigInt(
          await e.request({ method: "eth_getBalance", params: [t, o || i] })
        );
      }
    },
    60061: (e, t, n) => {
      let r = n(91640);
      function i(e) {
        (this.genPoly = void 0),
          (this.degree = e),
          this.degree && this.initialize(this.degree);
      }
      (i.prototype.initialize = function (e) {
        (this.degree = e), (this.genPoly = r.generateECPolynomial(this.degree));
      }),
        (i.prototype.encode = function (e) {
          if (!this.genPoly) throw Error("Encoder not initialized");
          let t = new Uint8Array(e.length + this.degree);
          t.set(e);
          let n = r.mod(t, this.genPoly),
            i = this.degree - n.length;
          if (i > 0) {
            let e = new Uint8Array(this.degree);
            return e.set(n, i), e;
          }
          return n;
        }),
        (e.exports = i);
    },
    60367: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => u });
      var r = n(79731),
        i = n(13423),
        o = n(99702),
        a = n(21135),
        s = n(21159),
        c = n(23008);
      let l = "/docs/contract/encodeFunctionData";
      function u(e) {
        let { args: t } = e,
          { abi: n, functionName: u } = (() => {
            if (1 === e.abi.length && e.functionName?.startsWith("0x"))
              return e;
            let { abi: t, args: n, functionName: r } = e,
              i = t[0];
            if (r) {
              let e = (0, c.iY)({ abi: t, args: n, name: r });
              if (!e) throw new o.Iz(r, { docsPath: l });
              i = e;
            }
            if ("function" !== i.type) throw new o.Iz(void 0, { docsPath: l });
            return { abi: [i], functionName: (0, a.V)((0, s.B)(i)) };
          })(),
          d = n[0],
          h = "inputs" in d && d.inputs ? (0, i.h)(d.inputs, t ?? []) : void 0;
        return (0, r.aP)([u, h ?? "0x"]);
      }
    },
    60519: (e, t, n) => {
      let r = n(58976),
        i = [
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
        o = [
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
      }),
        (t.getTotalCodewordsCount = function (e, t) {
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
        });
    },
    61939: (e, t, n) => {
      "use strict";
      n.d(t, { e: () => nv });
      var r = n(14493),
        i = n(69330),
        o = n(60367),
        a = n(13861),
        s = n(54335),
        c = n(67622),
        l = n(41052),
        u = n(95041),
        d = n(32160),
        h = n(7612),
        f = n(34524),
        p = n(3488);
      async function m(e, t) {
        let {
            blockNumber: n,
            blockTag: m,
            coinType: y,
            name: b,
            gatewayUrls: g,
            strict: w,
          } = t,
          { chain: v } = e,
          A = (() => {
            if (t.universalResolverAddress) return t.universalResolverAddress;
            if (!v)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, a.M)({
              blockNumber: n,
              chain: v,
              contract: "ensUniversalResolver",
            });
          })(),
          x = v?.ensTlds;
        if (x && !x.some((e) => b.endsWith(e))) return null;
        try {
          let t = (0, o.p)({
              abi: r.Rm,
              functionName: "addr",
              ...(null != y
                ? { args: [(0, d.k)(b), BigInt(y)] }
                : { args: [(0, d.k)(b)] }),
            }),
            a = {
              address: A,
              abi: r.Ag,
              functionName: "resolve",
              args: [(0, c.nj)((0, h.F)(b)), t, g ?? [u.J]],
              blockNumber: n,
              blockTag: m,
            },
            l = (0, f.T)(e, p.J, "readContract"),
            w = await l(a);
          if ("0x" === w[0]) return null;
          let v = (0, i.e)({
            abi: r.Rm,
            args: null != y ? [(0, d.k)(b), BigInt(y)] : void 0,
            functionName: "addr",
            data: w[0],
          });
          if ("0x" === v || "0x00" === (0, s.B)(v)) return null;
          return v;
        } catch (e) {
          if (w) throw e;
          if ((0, l.J)(e, "resolve")) return null;
          throw e;
        }
      }
      var y = n(75794),
        b = n(55394);
      async function g(e, t) {
        let { blockNumber: n, blockTag: r, name: i } = t,
          { chain: o } = e,
          s = (() => {
            if (t.universalResolverAddress) return t.universalResolverAddress;
            if (!o)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, a.M)({
              blockNumber: n,
              chain: o,
              contract: "ensUniversalResolver",
            });
          })(),
          l = o?.ensTlds;
        if (l && !l.some((e) => i.endsWith(e)))
          throw Error(
            `${i} is not a valid ENS TLD (${l?.join(", ")}) for chain "${
              o.name
            }" (id: ${o.id}).`
          );
        let [u] = await (0, f.T)(
          e,
          p.J,
          "readContract"
        )({
          address: s,
          abi: [
            {
              inputs: [{ type: "bytes" }],
              name: "findResolver",
              outputs: [{ type: "address" }, { type: "bytes32" }],
              stateMutability: "view",
              type: "function",
            },
          ],
          functionName: "findResolver",
          args: [(0, c.nj)((0, h.F)(i))],
          blockNumber: n,
          blockTag: r,
        });
        return u;
      }
      var w = n(65830),
        v = n(81946),
        A = n(19405),
        x = n(23360),
        C = n(7671),
        E = n(76743),
        I = n(65358);
      async function B(e, t) {
        let {
            account: n = e.account,
            blockNumber: r,
            blockTag: i = "latest",
            blobs: o,
            data: a,
            gas: s,
            gasPrice: l,
            maxFeePerBlobGas: u,
            maxFeePerGas: d,
            maxPriorityFeePerGas: h,
            to: f,
            value: p,
            ...m
          } = t,
          y = n ? (0, A.J)(n) : void 0;
        try {
          (0, I.c)(t);
          let n = "bigint" == typeof r ? (0, c.cK)(r) : void 0,
            b = e.chain?.formatters?.transactionRequest?.format,
            g = (b || E.Bv)({
              ...(0, C.o)(m, { format: b }),
              from: y?.address,
              blobs: o,
              data: a,
              gas: s,
              gasPrice: l,
              maxFeePerBlobGas: u,
              maxFeePerGas: d,
              maxPriorityFeePerGas: h,
              to: f,
              value: p,
            }),
            w = await e.request({
              method: "eth_createAccessList",
              params: [g, n || i],
            });
          return { accessList: w.accessList, gasUsed: BigInt(w.gasUsed) };
        } catch (n) {
          throw (0, x.d)(n, { ...t, account: y, chain: e.chain });
        }
      }
      function k(e, { method: t }) {
        let n = {};
        return (
          "fallback" === e.transport.type &&
            e.transport.onResponse?.(
              ({ method: e, response: r, status: i, transport: o }) => {
                "success" === i && t === e && (n[r] = o.request);
              }
            ),
          (t) => n[t] || e.request
        );
      }
      async function P(e) {
        let t = k(e, { method: "eth_newBlockFilter" }),
          n = await e.request({ method: "eth_newBlockFilter" });
        return { id: n, request: t(n), type: "block" };
      }
      var S = n(99702),
        O = n(7441);
      class M extends O.C {
        constructor(e) {
          super(`Filter type "${e}" is not supported.`, {
            name: "FilterTypeNotSupportedError",
          });
        }
      }
      var T = n(80844),
        R = n(24578),
        N = n(399),
        F = n(13423),
        U = n(21159),
        j = n(23008);
      let D = "/docs/contract/encodeEventTopics";
      function L(e) {
        let { abi: t, eventName: n, args: r } = e,
          i = t[0];
        if (n) {
          let e = (0, j.iY)({ abi: t, name: n });
          if (!e) throw new S.M_(n, { docsPath: D });
          i = e;
        }
        if ("event" !== i.type) throw new S.M_(void 0, { docsPath: D });
        let o = (0, U.B)(i),
          a = (0, N.h)(o),
          s = [];
        if (r && "inputs" in i) {
          let e = i.inputs?.filter((e) => "indexed" in e && e.indexed),
            t = Array.isArray(r)
              ? r
              : Object.values(r).length > 0
              ? e?.map((e) => r[e.name]) ?? []
              : [];
          t.length > 0 &&
            (s =
              e?.map((e, n) =>
                Array.isArray(t[n])
                  ? t[n].map((r, i) => q({ param: e, value: t[n][i] }))
                  : void 0 !== t[n] && null !== t[n]
                  ? q({ param: e, value: t[n] })
                  : null
              ) ?? []);
        }
        return [a, ...s];
      }
      function q({ param: e, value: t }) {
        if ("string" === e.type || "bytes" === e.type)
          return (0, R.S)((0, T.ZJ)(t));
        if ("tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/))
          throw new M(e.type);
        return (0, F.h)([e], [t]);
      }
      async function Q(e, t) {
        let {
            address: n,
            abi: r,
            args: i,
            eventName: o,
            fromBlock: a,
            strict: s,
            toBlock: l,
          } = t,
          u = k(e, { method: "eth_newFilter" }),
          d = o ? L({ abi: r, args: i, eventName: o }) : void 0,
          h = await e.request({
            method: "eth_newFilter",
            params: [
              {
                address: n,
                fromBlock: "bigint" == typeof a ? (0, c.cK)(a) : a,
                toBlock: "bigint" == typeof l ? (0, c.cK)(l) : l,
                topics: d,
              },
            ],
          });
        return {
          abi: r,
          args: i,
          eventName: o,
          id: h,
          request: u(h),
          strict: !!s,
          type: "event",
        };
      }
      async function W(
        e,
        {
          address: t,
          args: n,
          event: r,
          events: i,
          fromBlock: o,
          strict: a,
          toBlock: s,
        } = {}
      ) {
        let l = i ?? (r ? [r] : void 0),
          u = k(e, { method: "eth_newFilter" }),
          d = [];
        l &&
          ((d = [
            l.flatMap((e) => L({ abi: [e], eventName: e.name, args: n })),
          ]),
          r && (d = d[0]));
        let h = await e.request({
          method: "eth_newFilter",
          params: [
            {
              address: t,
              fromBlock: "bigint" == typeof o ? (0, c.cK)(o) : o,
              toBlock: "bigint" == typeof s ? (0, c.cK)(s) : s,
              ...(d.length ? { topics: d } : {}),
            },
          ],
        });
        return {
          abi: l,
          args: n,
          eventName: r ? r.name : void 0,
          fromBlock: o,
          id: h,
          request: u(h),
          strict: !!a,
          toBlock: s,
          type: "event",
        };
      }
      async function z(e) {
        let t = k(e, { method: "eth_newPendingTransactionFilter" }),
          n = await e.request({ method: "eth_newPendingTransactionFilter" });
        return { id: n, request: t(n), type: "transaction" };
      }
      var G = n(54842),
        H = n(35883),
        K = n(32840),
        J = n(87094),
        $ = n(27493);
      async function V({ hash: e, signature: t }) {
        let r = (0, K.q)(e) ? e : (0, c.nj)(e),
          { secp256k1: i } = await Promise.resolve().then(n.bind(n, 34132)),
          o = (() => {
            if ("object" == typeof t && "r" in t && "s" in t) {
              let { r: e, s: n, v: r, yParity: o } = t,
                a = Y(Number(o ?? r));
              return new i.Signature((0, $.uU)(e), (0, $.uU)(n)).addRecoveryBit(
                a
              );
            }
            let e = (0, K.q)(t) ? t : (0, c.nj)(t);
            if (65 !== (0, J.E)(e)) throw Error("invalid signature length");
            let n = Y((0, $.ME)(`0x${e.slice(130)}`));
            return i.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(
              n
            );
          })()
            .recoverPublicKey(r.substring(2))
            .toHex(!1);
        return `0x${o}`;
      }
      function Y(e) {
        if (0 === e || 1 === e) return e;
        if (27 === e) return 0;
        if (28 === e) return 1;
        throw Error("Invalid yParityOrV value");
      }
      async function _({ hash: e, signature: t }) {
        var n = await V({ hash: e, signature: t });
        let r = (0, R.S)(`0x${n.substring(4)}`).substring(26);
        return (0, H.o)(`0x${r}`);
      }
      var Z = n(79731),
        X = n(87456);
      function ee(e) {
        if (e < 256) return 1;
        if (e < 65536) return 2;
        if (e < 0x1000000) return 3;
        if (e < 0x100000000) return 4;
        throw new O.C("Length is too large.");
      }
      async function et(e) {
        let { authorization: t, signature: n } = e;
        return _({
          hash: (function (e) {
            let { chainId: t, nonce: n, to: r } = e,
              i = e.contractAddress ?? e.address,
              o = (0, R.S)(
                (0, Z.aP)([
                  "0x05",
                  (function (e, t = "hex") {
                    let n = (function e(t) {
                        return Array.isArray(t)
                          ? (function (e) {
                              let t = e.reduce((e, t) => e + t.length, 0),
                                n = ee(t);
                              return {
                                length: t <= 55 ? 1 + t : 1 + n + t,
                                encode(r) {
                                  for (let { encode: i } of (t <= 55
                                    ? r.pushByte(192 + t)
                                    : (r.pushByte(247 + n),
                                      1 === n
                                        ? r.pushUint8(t)
                                        : 2 === n
                                        ? r.pushUint16(t)
                                        : 3 === n
                                        ? r.pushUint24(t)
                                        : r.pushUint32(t)),
                                  e))
                                    i(r);
                                },
                              };
                            })(t.map((t) => e(t)))
                          : (function (e) {
                              let t = "string" == typeof e ? (0, T.aT)(e) : e,
                                n = ee(t.length);
                              return {
                                length:
                                  1 === t.length && t[0] < 128
                                    ? 1
                                    : t.length <= 55
                                    ? 1 + t.length
                                    : 1 + n + t.length,
                                encode(e) {
                                  (1 === t.length && t[0] < 128) ||
                                    (t.length <= 55
                                      ? e.pushByte(128 + t.length)
                                      : (e.pushByte(183 + n),
                                        1 === n
                                          ? e.pushUint8(t.length)
                                          : 2 === n
                                          ? e.pushUint16(t.length)
                                          : 3 === n
                                          ? e.pushUint24(t.length)
                                          : e.pushUint32(t.length))),
                                    e.pushBytes(t);
                                },
                              };
                            })(t);
                      })(e),
                      r = (0, X.l)(new Uint8Array(n.length));
                    return (n.encode(r), "hex" === t)
                      ? (0, c.My)(r.bytes)
                      : r.bytes;
                  })([t ? (0, c.cK)(t) : "0x", i, n ? (0, c.cK)(n) : "0x"]),
                ])
              );
            return "bytes" === r ? (0, T.aT)(o) : o;
          })(t),
          signature: n ?? t,
        });
      }
      var en = n(44494),
        er = n(31942),
        ei = n(69432);
      class eo extends O.C {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: r,
            data: i,
            gas: o,
            gasPrice: a,
            maxFeePerGas: s,
            maxPriorityFeePerGas: c,
            nonce: l,
            to: u,
            value: d,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: n,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Estimate Gas Arguments:",
              (0, ei.aO)({
                from: t?.address,
                to: u,
                value:
                  void 0 !== d &&
                  `${(0, en.c)(d)} ${r?.nativeCurrency?.symbol || "ETH"}`,
                data: i,
                gas: o,
                gasPrice: void 0 !== a && `${(0, er.Q)(a)} gwei`,
                maxFeePerGas: void 0 !== s && `${(0, er.Q)(s)} gwei`,
                maxPriorityFeePerGas: void 0 !== c && `${(0, er.Q)(c)} gwei`,
                nonce: l,
              }),
            ].filter(Boolean),
            name: "EstimateGasExecutionError",
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      var ea = n(42264),
        es = n(35020),
        ec = n(25507);
      class el extends O.C {
        constructor() {
          super("`baseFeeMultiplier` must be greater than 1.", {
            name: "BaseFeeScalarError",
          });
        }
      }
      class eu extends O.C {
        constructor() {
          super("Chain does not support EIP-1559 fees.", {
            name: "Eip1559FeesNotSupportedError",
          });
        }
      }
      class ed extends O.C {
        constructor({ maxPriorityFeePerGas: e }) {
          super(
            `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,
            er.Q)(e)} gwei).`,
            { name: "MaxFeePerGasTooLowError" }
          );
        }
      }
      class eh extends O.C {
        constructor({ blockHash: e, blockNumber: t }) {
          let n = "Block";
          e && (n = `Block at hash "${e}"`),
            t && (n = `Block at number "${t}"`),
            super(`${n} could not be found.`, { name: "BlockNotFoundError" });
        }
      }
      let ef = {
        "0x0": "legacy",
        "0x1": "eip2930",
        "0x2": "eip1559",
        "0x3": "eip4844",
        "0x4": "eip7702",
      };
      function ep(e) {
        let t = {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          chainId: e.chainId ? (0, $.ME)(e.chainId) : void 0,
          gas: e.gas ? BigInt(e.gas) : void 0,
          gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
          maxFeePerBlobGas: e.maxFeePerBlobGas
            ? BigInt(e.maxFeePerBlobGas)
            : void 0,
          maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
          maxPriorityFeePerGas: e.maxPriorityFeePerGas
            ? BigInt(e.maxPriorityFeePerGas)
            : void 0,
          nonce: e.nonce ? (0, $.ME)(e.nonce) : void 0,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          type: e.type ? ef[e.type] : void 0,
          typeHex: e.type ? e.type : void 0,
          value: e.value ? BigInt(e.value) : void 0,
          v: e.v ? BigInt(e.v) : void 0,
        };
        return (
          e.authorizationList &&
            (t.authorizationList = e.authorizationList.map((e) => ({
              address: e.address,
              chainId: Number(e.chainId),
              nonce: Number(e.nonce),
              r: e.r,
              s: e.s,
              yParity: Number(e.yParity),
            }))),
          (t.yParity = (() => {
            if (e.yParity) return Number(e.yParity);
            if ("bigint" == typeof t.v) {
              if (0n === t.v || 27n === t.v) return 0;
              if (1n === t.v || 28n === t.v) return 1;
              if (t.v >= 35n) return +(t.v % 2n === 0n);
            }
          })()),
          "legacy" === t.type &&
            (delete t.accessList,
            delete t.maxFeePerBlobGas,
            delete t.maxFeePerGas,
            delete t.maxPriorityFeePerGas,
            delete t.yParity),
          "eip2930" === t.type &&
            (delete t.maxFeePerBlobGas,
            delete t.maxFeePerGas,
            delete t.maxPriorityFeePerGas),
          "eip1559" === t.type && delete t.maxFeePerBlobGas,
          t
        );
      }
      function em(e) {
        let t = (e.transactions ?? []).map((e) =>
          "string" == typeof e ? e : ep(e)
        );
        return {
          ...e,
          baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
          blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
          difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
          excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
          gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
          gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
          hash: e.hash ? e.hash : null,
          logsBloom: e.logsBloom ? e.logsBloom : null,
          nonce: e.nonce ? e.nonce : null,
          number: e.number ? BigInt(e.number) : null,
          size: e.size ? BigInt(e.size) : void 0,
          timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
          transactions: t,
          totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null,
        };
      }
      async function ey(
        e,
        {
          blockHash: t,
          blockNumber: n,
          blockTag: r,
          includeTransactions: i,
        } = {}
      ) {
        let o = i ?? !1,
          a = void 0 !== n ? (0, c.cK)(n) : void 0,
          s = null;
        if (
          !(s = t
            ? await e.request(
                { method: "eth_getBlockByHash", params: [t, o] },
                { dedupe: !0 }
              )
            : await e.request(
                {
                  method: "eth_getBlockByNumber",
                  params: [a || (r ?? "latest"), o],
                },
                { dedupe: !!a }
              ))
        )
          throw new eh({ blockHash: t, blockNumber: n });
        return (e.chain?.formatters?.block?.format || em)(s);
      }
      async function eb(e) {
        return BigInt(await e.request({ method: "eth_gasPrice" }));
      }
      async function eg(e, t) {
        return ew(e, t);
      }
      async function ew(e, t) {
        let { block: n, chain: r = e.chain, request: i } = t || {};
        try {
          let t = r?.fees?.maxPriorityFeePerGas ?? r?.fees?.defaultPriorityFee;
          if ("function" == typeof t) {
            let r = n || (await (0, f.T)(e, ey, "getBlock")({})),
              o = await t({ block: r, client: e, request: i });
            if (null === o) throw Error();
            return o;
          }
          if (void 0 !== t) return t;
          let o = await e.request({ method: "eth_maxPriorityFeePerGas" });
          return (0, $.uU)(o);
        } catch {
          let [t, r] = await Promise.all([
            n ? Promise.resolve(n) : (0, f.T)(e, ey, "getBlock")({}),
            (0, f.T)(e, eb, "getGasPrice")({}),
          ]);
          if ("bigint" != typeof t.baseFeePerGas) throw new eu();
          let i = r - t.baseFeePerGas;
          if (i < 0n) return 0n;
          return i;
        }
      }
      async function ev(e, t) {
        return eA(e, t);
      }
      async function eA(e, t) {
        let {
            block: n,
            chain: r = e.chain,
            request: i,
            type: o = "eip1559",
          } = t || {},
          a = await (async () =>
            "function" == typeof r?.fees?.baseFeeMultiplier
              ? r.fees.baseFeeMultiplier({ block: n, client: e, request: i })
              : r?.fees?.baseFeeMultiplier ?? 1.2)();
        if (a < 1) throw new el();
        let s = a.toString().split(".")[1]?.length ?? 0,
          c = 10 ** s,
          l = (e) => (e * BigInt(Math.ceil(a * c))) / BigInt(c),
          u = n || (await (0, f.T)(e, ey, "getBlock")({}));
        if ("function" == typeof r?.fees?.estimateFeesPerGas) {
          let t = await r.fees.estimateFeesPerGas({
            block: n,
            client: e,
            multiply: l,
            request: i,
            type: o,
          });
          if (null !== t) return t;
        }
        if ("eip1559" === o) {
          if ("bigint" != typeof u.baseFeePerGas) throw new eu();
          let t =
              "bigint" == typeof i?.maxPriorityFeePerGas
                ? i.maxPriorityFeePerGas
                : await ew(e, { block: u, chain: r, request: i }),
            n = l(u.baseFeePerGas);
          return {
            maxFeePerGas: i?.maxFeePerGas ?? n + t,
            maxPriorityFeePerGas: t,
          };
        }
        return {
          gasPrice: i?.gasPrice ?? l(await (0, f.T)(e, eb, "getGasPrice")({})),
        };
      }
      async function ex(
        e,
        { address: t, blockTag: n = "latest", blockNumber: r }
      ) {
        let i = await e.request(
          {
            method: "eth_getTransactionCount",
            params: [t, "bigint" == typeof r ? (0, c.cK)(r) : n],
          },
          { dedupe: !!r }
        );
        return (0, $.ME)(i);
      }
      function eC(e) {
        let { kzg: t } = e,
          n = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
          r =
            "string" == typeof e.blobs[0]
              ? e.blobs.map((e) => (0, T.aT)(e))
              : e.blobs,
          i = [];
        for (let e of r) i.push(Uint8Array.from(t.blobToKzgCommitment(e)));
        return "bytes" === n ? i : i.map((e) => (0, c.My)(e));
      }
      function eE(e) {
        let { kzg: t } = e,
          n = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
          r =
            "string" == typeof e.blobs[0]
              ? e.blobs.map((e) => (0, T.aT)(e))
              : e.blobs,
          i =
            "string" == typeof e.commitments[0]
              ? e.commitments.map((e) => (0, T.aT)(e))
              : e.commitments,
          o = [];
        for (let e = 0; e < r.length; e++) {
          let n = r[e],
            a = i[e];
          o.push(Uint8Array.from(t.computeBlobKzgProof(n, a)));
        }
        return "bytes" === n ? o : o.map((e) => (0, c.My)(e));
      }
      var eI = n(17829);
      class eB extends O.C {
        constructor({ maxSize: e, size: t }) {
          super("Blob size is too large.", {
            metaMessages: [`Max: ${e} bytes`, `Given: ${t} bytes`],
            name: "BlobSizeTooLargeError",
          });
        }
      }
      class ek extends O.C {
        constructor() {
          super("Blob data must not be empty.", { name: "EmptyBlobError" });
        }
      }
      async function eP(e) {
        let t = await e.request({ method: "eth_chainId" }, { dedupe: !0 });
        return (0, $.ME)(t);
      }
      O.C, O.C;
      let eS = [
          "blobVersionedHashes",
          "chainId",
          "fees",
          "gas",
          "nonce",
          "type",
        ],
        eO = new Map();
      async function eM(e, t) {
        let n,
          r,
          {
            account: i = e.account,
            blobs: o,
            chain: a,
            gas: s,
            kzg: l,
            nonce: u,
            nonceManager: d,
            parameters: h = eS,
            type: p,
          } = t,
          m = i ? (0, A.J)(i) : i,
          y = { ...t, ...(m ? { from: m?.address } : {}) };
        async function b() {
          return (
            n || (n = await (0, f.T)(e, ey, "getBlock")({ blockTag: "latest" }))
          );
        }
        async function g() {
          return (
            r ||
            (a
              ? a.id
              : void 0 !== t.chainId
              ? t.chainId
              : (r = await (0, f.T)(e, eP, "getChainId")({})))
          );
        }
        if (h.includes("nonce") && void 0 === u && m)
          if (d) {
            let t = await g();
            y.nonce = await d.consume({
              address: m.address,
              chainId: t,
              client: e,
            });
          } else
            y.nonce = await (0, f.T)(
              e,
              ex,
              "getTransactionCount"
            )({ address: m.address, blockTag: "pending" });
        if (
          (h.includes("blobVersionedHashes") || h.includes("sidecars")) &&
          o &&
          l
        ) {
          let e = eC({ blobs: o, kzg: l });
          if (
            (h.includes("blobVersionedHashes") &&
              (y.blobVersionedHashes = (function (e) {
                let { commitments: t, version: n } = e,
                  r = e.to ?? ("string" == typeof t[0] ? "hex" : "bytes"),
                  i = [];
                for (let e of t)
                  i.push(
                    (function (e) {
                      let { commitment: t, version: n = 1 } = e,
                        r = e.to ?? ("string" == typeof t ? "hex" : "bytes"),
                        i = (function (e, t) {
                          let n = (0, eI.sc)(
                            (0, K.q)(e, { strict: !1 }) ? (0, T.ZJ)(e) : e
                          );
                          return "bytes" === (t || "hex") ? n : (0, c.nj)(n);
                        })(t, "bytes");
                      return i.set([n], 0), "bytes" === r ? i : (0, c.My)(i);
                    })({ commitment: e, to: r, version: n })
                  );
                return i;
              })({ commitments: e, to: "hex" })),
            h.includes("sidecars"))
          ) {
            let t = eE({ blobs: o, commitments: e, kzg: l });
            y.sidecars = (function (e) {
              let { data: t, kzg: n, to: r } = e,
                i =
                  e.blobs ??
                  (function (e) {
                    let t =
                        e.to ?? ("string" == typeof e.data ? "hex" : "bytes"),
                      n =
                        "string" == typeof e.data ? (0, T.aT)(e.data) : e.data,
                      r = (0, J.E)(n);
                    if (!r) throw new ek();
                    if (r > 761855) throw new eB({ maxSize: 761855, size: r });
                    let i = [],
                      o = !0,
                      a = 0;
                    for (; o; ) {
                      let e = (0, X.l)(new Uint8Array(131072)),
                        t = 0;
                      for (; t < 4096; ) {
                        let r = n.slice(a, a + 31);
                        if ((e.pushByte(0), e.pushBytes(r), r.length < 31)) {
                          e.pushByte(128), (o = !1);
                          break;
                        }
                        t++, (a += 31);
                      }
                      i.push(e);
                    }
                    return "bytes" === t
                      ? i.map((e) => e.bytes)
                      : i.map((e) => (0, c.My)(e.bytes));
                  })({ data: t, to: r }),
                o = e.commitments ?? eC({ blobs: i, kzg: n, to: r }),
                a = e.proofs ?? eE({ blobs: i, commitments: o, kzg: n, to: r }),
                s = [];
              for (let e = 0; e < i.length; e++)
                s.push({ blob: i[e], commitment: o[e], proof: a[e] });
              return s;
            })({ blobs: o, commitments: e, proofs: t, to: "hex" });
          }
        }
        if (
          (h.includes("chainId") && (y.chainId = await g()),
          (h.includes("fees") || h.includes("type")) && void 0 === p)
        )
          try {
            y.type = (function (e) {
              if (e.type) return e.type;
              if (void 0 !== e.authorizationList) return "eip7702";
              if (
                void 0 !== e.blobs ||
                void 0 !== e.blobVersionedHashes ||
                void 0 !== e.maxFeePerBlobGas ||
                void 0 !== e.sidecars
              )
                return "eip4844";
              if (
                void 0 !== e.maxFeePerGas ||
                void 0 !== e.maxPriorityFeePerGas
              )
                return "eip1559";
              if (void 0 !== e.gasPrice)
                return void 0 !== e.accessList ? "eip2930" : "legacy";
              throw new ei.Vg({ transaction: e });
            })(y);
          } catch {
            let t = eO.get(e.uid);
            if (void 0 === t) {
              let n = await b();
              (t = "bigint" == typeof n?.baseFeePerGas), eO.set(e.uid, t);
            }
            y.type = t ? "eip1559" : "legacy";
          }
        if (h.includes("fees"))
          if ("legacy" !== y.type && "eip2930" !== y.type) {
            if (
              void 0 === y.maxFeePerGas ||
              void 0 === y.maxPriorityFeePerGas
            ) {
              let n = await b(),
                { maxFeePerGas: r, maxPriorityFeePerGas: i } = await eA(e, {
                  block: n,
                  chain: a,
                  request: y,
                });
              if (
                void 0 === t.maxPriorityFeePerGas &&
                t.maxFeePerGas &&
                t.maxFeePerGas < i
              )
                throw new ed({ maxPriorityFeePerGas: i });
              (y.maxPriorityFeePerGas = i), (y.maxFeePerGas = r);
            }
          } else {
            if (void 0 !== t.maxFeePerGas || void 0 !== t.maxPriorityFeePerGas)
              throw new eu();
            if (void 0 === t.gasPrice) {
              let t = await b(),
                { gasPrice: n } = await eA(e, {
                  block: t,
                  chain: a,
                  request: y,
                  type: "legacy",
                });
              y.gasPrice = n;
            }
          }
        return (
          h.includes("gas") &&
            void 0 === s &&
            (y.gas = await (0, f.T)(
              e,
              eR,
              "estimateGas"
            )({
              ...y,
              account: m ? { address: m.address, type: "json-rpc" } : m,
            })),
          (0, I.c)(y),
          delete y.parameters,
          y
        );
      }
      var eT = n(59742);
      async function eR(e, t) {
        let { account: n = e.account } = t,
          r = n ? (0, A.J)(n) : void 0;
        try {
          let {
              accessList: n,
              authorizationList: o,
              blobs: a,
              blobVersionedHashes: s,
              blockNumber: l,
              blockTag: u,
              data: d,
              gas: h,
              gasPrice: f,
              maxFeePerBlobGas: p,
              maxFeePerGas: m,
              maxPriorityFeePerGas: y,
              nonce: b,
              value: g,
              stateOverride: w,
              ...v
            } = await eM(e, {
              ...t,
              parameters:
                r?.type === "local" ? void 0 : ["blobVersionedHashes"],
            }),
            A = ("bigint" == typeof l ? (0, c.cK)(l) : void 0) || u,
            x = (0, ec.yH)(w),
            B = await (async () =>
              v.to
                ? v.to
                : o && o.length > 0
                ? await et({ authorization: o[0] }).catch(() => {
                    throw new O.C(
                      "`to` is required. Could not infer from `authorizationList`"
                    );
                  })
                : void 0)();
          (0, I.c)(t);
          let k = e.chain?.formatters?.transactionRequest?.format,
            P = (k || E.Bv)({
              ...(0, C.o)(v, { format: k }),
              from: r?.address,
              accessList: n,
              authorizationList: o,
              blobs: a,
              blobVersionedHashes: s,
              data: d,
              gas: h,
              gasPrice: f,
              maxFeePerBlobGas: p,
              maxFeePerGas: m,
              maxPriorityFeePerGas: y,
              nonce: b,
              to: B,
              value: g,
            });
          function i(t) {
            let { block: n, request: r, rpcStateOverride: i } = t;
            return e.request({
              method: "eth_estimateGas",
              params: i ? [r, n ?? "latest", i] : n ? [r, n] : [r],
            });
          }
          let S = BigInt(
            await i({ block: A, request: P, rpcStateOverride: x })
          );
          if (o) {
            let t = await (0, eT.r)(e, { address: P.from }),
              n = await Promise.all(
                o.map(async (e) => {
                  let { address: n } = e,
                    o = await i({
                      block: A,
                      request: {
                        authorizationList: void 0,
                        data: d,
                        from: r?.address,
                        to: n,
                        value: (0, c.cK)(t),
                      },
                      rpcStateOverride: x,
                    }).catch(() => 100000n);
                  return 2n * BigInt(o);
                })
              );
            S += n.reduce((e, t) => e + t, 0n);
          }
          return S;
        } catch (n) {
          throw (function (e, { docsPath: t, ...n }) {
            return new eo(
              (() => {
                let t = (0, es.l)(e, n);
                return t instanceof ea.RM ? e : t;
              })(),
              { docsPath: t, ...n }
            );
          })(n, { ...t, account: r, chain: e.chain });
        }
      }
      async function eN(e, t) {
        let {
            abi: n,
            address: r,
            args: i,
            functionName: a,
            dataSuffix: s,
            ...c
          } = t,
          l = (0, o.p)({ abi: n, args: i, functionName: a });
        try {
          return await (0, f.T)(
            e,
            eR,
            "estimateGas"
          )({ data: `${l}${s ? s.replace("0x", "") : ""}`, to: r, ...c });
        } catch (t) {
          let e = c.account ? (0, A.J)(c.account) : void 0;
          throw (0, G.j)(t, {
            abi: n,
            address: r,
            args: i,
            docsPath: "/docs/contract/estimateContractGas",
            functionName: a,
            sender: e?.address,
          });
        }
      }
      async function eF(e) {
        return BigInt(await e.request({ method: "eth_blobBaseFee" }));
      }
      let eU = new Map(),
        ej = new Map();
      async function eD(
        e,
        { cacheKey: t, cacheTime: n = Number.POSITIVE_INFINITY }
      ) {
        let r = (function (e) {
            let t = (e, t) => ({
                clear: () => t.delete(e),
                get: () => t.get(e),
                set: (n) => t.set(e, n),
              }),
              n = t(e, eU),
              r = t(e, ej);
            return {
              clear: () => {
                n.clear(), r.clear();
              },
              promise: n,
              response: r,
            };
          })(t),
          i = r.response.get();
        if (i && n > 0 && new Date().getTime() - i.created.getTime() < n)
          return i.data;
        let o = r.promise.get();
        o || ((o = e()), r.promise.set(o));
        try {
          let e = await o;
          return r.response.set({ created: new Date(), data: e }), e;
        } finally {
          r.promise.clear();
        }
      }
      let eL = (e) => `blockNumber.${e}`;
      async function eq(e, { cacheTime: t = e.cacheTime } = {}) {
        return BigInt(
          await eD(() => e.request({ method: "eth_blockNumber" }), {
            cacheKey: eL(e.uid),
            cacheTime: t,
          })
        );
      }
      async function eQ(
        e,
        { blockHash: t, blockNumber: n, blockTag: r = "latest" } = {}
      ) {
        let i,
          o = void 0 !== n ? (0, c.cK)(n) : void 0;
        return (
          (i = t
            ? await e.request(
                { method: "eth_getBlockTransactionCountByHash", params: [t] },
                { dedupe: !0 }
              )
            : await e.request(
                {
                  method: "eth_getBlockTransactionCountByNumber",
                  params: [o || r],
                },
                { dedupe: !!o }
              )),
          (0, $.ME)(i)
        );
      }
      async function eW(
        e,
        { address: t, blockNumber: n, blockTag: r = "latest" }
      ) {
        let i = void 0 !== n ? (0, c.cK)(n) : void 0,
          o = await e.request(
            { method: "eth_getCode", params: [t, i || r] },
            { dedupe: !!i }
          );
        if ("0x" !== o) return o;
      }
      var ez = n(17255),
        eG = n(97118),
        eH = n(43935);
      let eK = "/docs/contract/decodeEventLog";
      function eJ(e) {
        let { abi: t, data: n, strict: r, topics: i } = e,
          o = r ?? !0,
          [a, ...s] = i;
        if (!a) throw new S._z({ docsPath: eK });
        let c =
          1 === t.length
            ? t[0]
            : t.find((e) => "event" === e.type && a === (0, N.h)((0, U.B)(e)));
        if (!(c && "name" in c) || "event" !== c.type)
          throw new S.kE(a, { docsPath: eK });
        let { name: l, inputs: u } = c,
          d = u?.some((e) => !("name" in e && e.name)),
          h = d ? [] : {},
          f = u.filter((e) => "indexed" in e && e.indexed);
        for (let e = 0; e < f.length; e++) {
          let t = f[e],
            n = s[e];
          if (!n) throw new S.l3({ abiItem: c, param: t });
          h[d ? e : t.name || e] = (function ({ param: e, value: t }) {
            return "string" === e.type ||
              "bytes" === e.type ||
              "tuple" === e.type ||
              e.type.match(/^(.*)\[(\d+)?\]$/)
              ? t
              : ((0, eH.n)([e], t) || [])[0];
          })({ param: t, value: n });
        }
        let p = u.filter((e) => !("indexed" in e && e.indexed));
        if (p.length > 0) {
          if (n && "0x" !== n)
            try {
              let e = (0, eH.n)(p, n);
              if (e)
                if (d) h = [...h, ...e];
                else for (let t = 0; t < p.length; t++) h[p[t].name] = e[t];
            } catch (e) {
              if (o) {
                if (e instanceof S.Iy || e instanceof eG.SK)
                  throw new S.fo({
                    abiItem: c,
                    data: n,
                    params: p,
                    size: (0, J.E)(n),
                  });
                throw e;
              }
            }
          else if (o)
            throw new S.fo({ abiItem: c, data: "0x", params: p, size: 0 });
        }
        return { eventName: l, args: Object.values(h).length > 0 ? h : void 0 };
      }
      function e$(e) {
        let { abi: t, args: n, logs: r, strict: i = !0 } = e,
          o = (() => {
            if (e.eventName)
              return Array.isArray(e.eventName) ? e.eventName : [e.eventName];
          })();
        return r
          .map((e) => {
            try {
              let r = t.find(
                (t) => "event" === t.type && e.topics[0] === (0, N.h)(t)
              );
              if (!r) return null;
              let a = eJ({ ...e, abi: [r], strict: i });
              if (
                (o && !o.includes(a.eventName)) ||
                !(function (e) {
                  let { args: t, inputs: n, matchArgs: r } = e;
                  if (!r) return !0;
                  if (!t) return !1;
                  function i(e, t, n) {
                    try {
                      if ("address" === e.type) return (0, ez.h)(t, n);
                      if ("string" === e.type || "bytes" === e.type)
                        return (0, R.S)((0, T.ZJ)(t)) === n;
                      return t === n;
                    } catch {
                      return !1;
                    }
                  }
                  return Array.isArray(t) && Array.isArray(r)
                    ? r.every((e, r) => {
                        if (null == e) return !0;
                        let o = n[r];
                        return (
                          !!o &&
                          (Array.isArray(e) ? e : [e]).some((e) =>
                            i(o, e, t[r])
                          )
                        );
                      })
                    : !(
                        "object" != typeof t ||
                        Array.isArray(t) ||
                        "object" != typeof r ||
                        Array.isArray(r)
                      ) &&
                        Object.entries(r).every(([e, r]) => {
                          if (null == r) return !0;
                          let o = n.find((t) => t.name === e);
                          return (
                            !!o &&
                            (Array.isArray(r) ? r : [r]).some((n) =>
                              i(o, n, t[e])
                            )
                          );
                        });
                })({ args: a.args, inputs: r.inputs, matchArgs: n })
              )
                return null;
              return { ...a, ...e };
            } catch (r) {
              let t, n;
              if (r instanceof S.kE) return null;
              if (r instanceof S.fo || r instanceof S.l3) {
                if (i) return null;
                (t = r.abiItem.name),
                  (n = r.abiItem.inputs?.some((e) => !("name" in e && e.name)));
              }
              return { ...e, args: n ? [] : {}, eventName: t };
            }
          })
          .filter(Boolean);
      }
      function eV(e, { args: t, eventName: n } = {}) {
        return {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          logIndex: e.logIndex ? Number(e.logIndex) : null,
          transactionHash: e.transactionHash ? e.transactionHash : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          ...(n ? { args: t, eventName: n } : {}),
        };
      }
      async function eY(
        e,
        {
          address: t,
          blockHash: n,
          fromBlock: r,
          toBlock: i,
          event: o,
          events: a,
          args: s,
          strict: l,
        } = {}
      ) {
        let u,
          d = a ?? (o ? [o] : void 0),
          h = [];
        d &&
          ((h = [
            d.flatMap((e) =>
              L({ abi: [e], eventName: e.name, args: a ? void 0 : s })
            ),
          ]),
          o && (h = h[0]));
        let f = (
          n
            ? await e.request({
                method: "eth_getLogs",
                params: [{ address: t, topics: h, blockHash: n }],
              })
            : await e.request({
                method: "eth_getLogs",
                params: [
                  {
                    address: t,
                    topics: h,
                    fromBlock: "bigint" == typeof r ? (0, c.cK)(r) : r,
                    toBlock: "bigint" == typeof i ? (0, c.cK)(i) : i,
                  },
                ],
              })
        ).map((e) => eV(e));
        return d ? e$({ abi: d, args: s, logs: f, strict: l ?? !1 }) : f;
      }
      async function e_(e, t) {
        let {
            abi: n,
            address: r,
            args: i,
            blockHash: o,
            eventName: a,
            fromBlock: s,
            toBlock: c,
            strict: l,
          } = t,
          u = a ? (0, j.iY)({ abi: n, name: a }) : void 0,
          d = u ? void 0 : n.filter((e) => "event" === e.type);
        return (0, f.T)(
          e,
          eY,
          "getLogs"
        )({
          address: r,
          args: i,
          blockHash: o,
          event: u,
          events: d,
          fromBlock: s,
          toBlock: c,
          strict: l,
        });
      }
      class eZ extends O.C {
        constructor({ address: e }) {
          super(`No EIP-712 domain found on contract "${e}".`, {
            metaMessages: [
              "Ensure that:",
              `- The contract is deployed at the address "${e}".`,
              "- `eip712Domain()` function exists on the contract.",
              "- `eip712Domain()` function matches signature to ERC-5267 specification.",
            ],
            name: "Eip712DomainNotFoundError",
          });
        }
      }
      async function eX(e, t) {
        let { address: n, factory: r, factoryData: i } = t;
        try {
          let [t, o, a, s, c, l, u] = await (0, f.T)(
            e,
            p.J,
            "readContract"
          )({
            abi: e0,
            address: n,
            functionName: "eip712Domain",
            factory: r,
            factoryData: i,
          });
          return {
            domain: {
              name: o,
              version: a,
              chainId: Number(s),
              verifyingContract: c,
              salt: l,
            },
            extensions: u,
            fields: t,
          };
        } catch (e) {
          if (
            "ContractFunctionExecutionError" === e.name &&
            "ContractFunctionZeroDataError" === e.cause.name
          )
            throw new eZ({ address: n });
          throw e;
        }
      }
      let e0 = [
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            { name: "fields", type: "bytes1" },
            { name: "name", type: "string" },
            { name: "version", type: "string" },
            { name: "chainId", type: "uint256" },
            { name: "verifyingContract", type: "address" },
            { name: "salt", type: "bytes32" },
            { name: "extensions", type: "uint256[]" },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
      async function e1(
        e,
        {
          blockCount: t,
          blockNumber: n,
          blockTag: r = "latest",
          rewardPercentiles: i,
        }
      ) {
        var o;
        let a = "bigint" == typeof n ? (0, c.cK)(n) : void 0;
        return {
          baseFeePerGas: (o = await e.request(
            { method: "eth_feeHistory", params: [(0, c.cK)(t), a || r, i] },
            { dedupe: !!a }
          )).baseFeePerGas.map((e) => BigInt(e)),
          gasUsedRatio: o.gasUsedRatio,
          oldestBlock: BigInt(o.oldestBlock),
          reward: o.reward?.map((e) => e.map((e) => BigInt(e))),
        };
      }
      async function e2(e, { filter: t }) {
        let n = "strict" in t && t.strict,
          r = await t.request({
            method: "eth_getFilterChanges",
            params: [t.id],
          });
        if ("string" == typeof r[0]) return r;
        let i = r.map((e) => eV(e));
        return "abi" in t && t.abi ? e$({ abi: t.abi, logs: i, strict: n }) : i;
      }
      async function e6(e, { filter: t }) {
        let n = t.strict ?? !1,
          r = (
            await t.request({ method: "eth_getFilterLogs", params: [t.id] })
          ).map((e) => eV(e));
        return t.abi ? e$({ abi: t.abi, logs: r, strict: n }) : r;
      }
      async function e5(
        e,
        { address: t, blockNumber: n, blockTag: r, storageKeys: i }
      ) {
        let o = void 0 !== n ? (0, c.cK)(n) : void 0;
        var a = await e.request({
          method: "eth_getProof",
          params: [t, i, o || (r ?? "latest")],
        });
        return {
          ...a,
          balance: a.balance ? BigInt(a.balance) : void 0,
          nonce: a.nonce ? (0, $.ME)(a.nonce) : void 0,
          storageProof: a.storageProof
            ? a.storageProof.map((e) => ({ ...e, value: BigInt(e.value) }))
            : void 0,
        };
      }
      async function e3(
        e,
        { address: t, blockNumber: n, blockTag: r = "latest", slot: i }
      ) {
        let o = void 0 !== n ? (0, c.cK)(n) : void 0;
        return await e.request({
          method: "eth_getStorageAt",
          params: [t, i, o || r],
        });
      }
      async function e4(
        e,
        { blockHash: t, blockNumber: n, blockTag: r, hash: i, index: o }
      ) {
        let a = r || "latest",
          s = void 0 !== n ? (0, c.cK)(n) : void 0,
          l = null;
        if (
          (i
            ? (l = await e.request(
                { method: "eth_getTransactionByHash", params: [i] },
                { dedupe: !0 }
              ))
            : t
            ? (l = await e.request(
                {
                  method: "eth_getTransactionByBlockHashAndIndex",
                  params: [t, (0, c.cK)(o)],
                },
                { dedupe: !0 }
              ))
            : (s || a) &&
              (l = await e.request(
                {
                  method: "eth_getTransactionByBlockNumberAndIndex",
                  params: [s || a, (0, c.cK)(o)],
                },
                { dedupe: !!s }
              )),
          !l)
        )
          throw new ei.Kz({
            blockHash: t,
            blockNumber: n,
            blockTag: a,
            hash: i,
            index: o,
          });
        return (e.chain?.formatters?.transaction?.format || ep)(l);
      }
      async function e8(e, { hash: t, transactionReceipt: n }) {
        let [r, i] = await Promise.all([
            (0, f.T)(e, eq, "getBlockNumber")({}),
            t ? (0, f.T)(e, e4, "getTransaction")({ hash: t }) : void 0,
          ]),
          o = n?.blockNumber || i?.blockNumber;
        return o ? r - o + 1n : 0n;
      }
      let e9 = { "0x0": "reverted", "0x1": "success" };
      async function e7(e, { hash: t }) {
        let n = await e.request(
          { method: "eth_getTransactionReceipt", params: [t] },
          { dedupe: !0 }
        );
        if (!n) throw new ei.Kc({ hash: t });
        return (
          e.chain?.formatters?.transactionReceipt?.format ||
          function (e) {
            let t = {
              ...e,
              blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
              contractAddress: e.contractAddress ? e.contractAddress : null,
              cumulativeGasUsed: e.cumulativeGasUsed
                ? BigInt(e.cumulativeGasUsed)
                : null,
              effectiveGasPrice: e.effectiveGasPrice
                ? BigInt(e.effectiveGasPrice)
                : null,
              gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
              logs: e.logs ? e.logs.map((e) => eV(e)) : null,
              to: e.to ? e.to : null,
              transactionIndex: e.transactionIndex
                ? (0, $.ME)(e.transactionIndex)
                : null,
              status: e.status ? e9[e.status] : null,
              type: e.type ? ef[e.type] || e.type : null,
            };
            return (
              e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)),
              e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)),
              t
            );
          }
        )(n);
      }
      var te = n(6083),
        tt = n(35791),
        tn = n(35109);
      async function tr(e, t) {
        let {
          blockNumber: n,
          blockTag: r = "latest",
          blocks: a,
          returnFullTransactions: s,
          traceTransfers: l,
          validation: u,
        } = t;
        try {
          let t = [];
          for (let e of a) {
            let n = e.blockOverrides ? tt.J(e.blockOverrides) : void 0,
              r = e.calls.map((e) => {
                let t = e.account ? (0, A.J)(e.account) : void 0,
                  n = {
                    ...e,
                    data: e.abi ? (0, o.p)(e) : e.data,
                    from: e.from ?? t?.address,
                  };
                return (0, I.c)(n), (0, E.Bv)(n);
              }),
              i = e.stateOverrides ? (0, ec.yH)(e.stateOverrides) : void 0;
            t.push({ blockOverrides: n, calls: r, stateOverrides: i });
          }
          let d = "bigint" == typeof n ? (0, c.cK)(n) : void 0;
          return (
            await e.request({
              method: "eth_simulateV1",
              params: [
                {
                  blockStateCalls: t,
                  returnFullTransactions: s,
                  traceTransfers: l,
                  validation: u,
                },
                d || r,
              ],
            })
          ).map((e, t) => ({
            ...em(e),
            calls: e.calls.map((e, n) => {
              let { abi: r, args: o, functionName: s, to: c } = a[t].calls[n],
                l = e.error?.data ?? e.returnData,
                u = BigInt(e.gasUsed),
                d = e.logs?.map((e) => eV(e)),
                h = "0x1" === e.status ? "success" : "failure",
                f =
                  r && "success" === h && "0x" !== l
                    ? (0, i.e)({ abi: r, data: l, functionName: s })
                    : null,
                p = (() => {
                  let t;
                  if (
                    "success" !== h &&
                    (e.error?.data === "0x"
                      ? (t = new S.O())
                      : e.error && (t = new tn.$S(e.error)),
                    t)
                  )
                    return (0, G.j)(t, {
                      abi: r ?? [],
                      address: c,
                      args: o,
                      functionName: s ?? "<unknown>",
                    });
                })();
              return {
                data: l,
                gasUsed: u,
                logs: d,
                status: h,
                ...("success" === h ? { result: f } : { error: p }),
              };
            }),
          }));
        } catch (t) {
          let e = (0, es.l)(t, {});
          if (e instanceof ea.RM) throw t;
          throw e;
        }
      }
      var ti = n(84701),
        to = n(17130),
        ta = n(38958),
        ts = n(27442),
        tc = n(16652),
        tl = n(28452),
        tu = n(32248),
        td = n(86205),
        th = n(97486);
      let tf = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function tp(e) {
        return e >= tf.zero && e <= tf.nine
          ? e - tf.zero
          : e >= tf.A && e <= tf.F
          ? e - (tf.A - 10)
          : e >= tf.a && e <= tf.f
          ? e - (tf.a - 10)
          : void 0;
      }
      var tm = n(93587);
      let ty = new TextEncoder();
      tl.C, tl.C;
      class tb extends tl.C {
        constructor({ givenSize: e, maxSize: t }) {
          super(
            `Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.SizeOverflowError",
            });
        }
      }
      tl.C;
      class tg extends tl.C {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Bytes.SizeExceedsPaddingSizeError",
            });
        }
      }
      function tw(e, t = {}) {
        var n;
        let { as: r = "string" == typeof e ? "Hex" : "Bytes" } = t,
          i = (0, tu.lY)(
            e instanceof Uint8Array
              ? e
              : "string" == typeof e
              ? (function (e, t = {}) {
                  let { size: n } = t,
                    r = e;
                  n && (tm.Sl(e, n), (r = td.M7(e, n)));
                  let i = r.slice(2);
                  i.length % 2 && (i = `0${i}`);
                  let o = i.length / 2,
                    a = new Uint8Array(o);
                  for (let e = 0, t = 0; e < o; e++) {
                    let n = tp(i.charCodeAt(t++)),
                      r = tp(i.charCodeAt(t++));
                    if (void 0 === n || void 0 === r)
                      throw new tl.C(
                        `Invalid byte sequence ("${i[t - 2]}${
                          i[t - 1]
                        }" in "${i}").`
                      );
                    a[e] = 16 * n + r;
                  }
                  return a;
                })(e)
              : (n = e) instanceof Uint8Array
              ? n
              : new Uint8Array(n)
          );
        return "Bytes" === r ? i : td.uK(i);
      }
      class tv extends Map {
        constructor(e) {
          super(),
            Object.defineProperty(this, "maxSize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
        get(e) {
          let t = super.get(e);
          return (
            super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t
          );
        }
        set(e, t) {
          if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
            let e = this.keys().next().value;
            e && this.delete(e);
          }
          return this;
        }
      }
      let tA = { checksum: new tv(8192) }.checksum,
        tx = /^0x[a-fA-F0-9]{40}$/;
      function tC(e, t = {}) {
        let { strict: n = !0 } = t;
        if (!tx.test(e)) throw new tI({ address: e, cause: new tB() });
        if (n) {
          if (e.toLowerCase() === e) return;
          if (
            (function (e) {
              if (tA.has(e)) return tA.get(e);
              tC(e, { strict: !1 });
              let t = e.substring(2).toLowerCase(),
                n = tw(
                  (function (e, t = {}) {
                    let { size: n } = t,
                      r = ty.encode(e);
                    if ("number" == typeof n) {
                      var i;
                      if (r.length > n)
                        throw new tb({ givenSize: r.length, maxSize: n });
                      return (
                        (i = r),
                        (function (e, t = {}) {
                          let { dir: n, size: r = 32 } = t;
                          if (0 === r) return e;
                          if (e.length > r)
                            throw new tg({
                              size: e.length,
                              targetSize: r,
                              type: "Bytes",
                            });
                          let i = new Uint8Array(r);
                          for (let t = 0; t < r; t++) {
                            let o = "right" === n;
                            i[o ? t : r - t - 1] = e[o ? t : e.length - t - 1];
                          }
                          return i;
                        })(i, { dir: "right", size: n })
                      );
                    }
                    return r;
                  })(t),
                  { as: "Bytes" }
                ),
                r = t.split("");
              for (let e = 0; e < 40; e += 2)
                n[e >> 1] >> 4 >= 8 && r[e] && (r[e] = r[e].toUpperCase()),
                  (15 & n[e >> 1]) >= 8 &&
                    r[e + 1] &&
                    (r[e + 1] = r[e + 1].toUpperCase());
              let i = `0x${r.join("")}`;
              return tA.set(e, i), i;
            })(e) !== e
          )
            throw new tI({ address: e, cause: new tk() });
        }
      }
      function tE(e, t = {}) {
        let { strict: n = !0 } = t ?? {};
        try {
          return tC(e, { strict: n }), !0;
        } catch {
          return !1;
        }
      }
      class tI extends tl.C {
        constructor({ address: e, cause: t }) {
          super(`Address "${e}" is invalid.`, { cause: t }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidAddressError",
            });
        }
      }
      class tB extends tl.C {
        constructor() {
          super("Address is not a 20 byte (40 hexadecimal character) value."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidInputError",
            });
        }
      }
      class tk extends tl.C {
        constructor() {
          super("Address does not match its checksum counterpart."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Address.InvalidChecksumError",
            });
        }
      }
      function tP(e) {
        let t = !0,
          n = "",
          r = 0,
          i = "",
          o = !1;
        for (let a = 0; a < e.length; a++) {
          let s = e[a];
          if (
            (["(", ")", ","].includes(s) && (t = !0),
            "(" === s && r++,
            ")" === s && r--,
            t)
          ) {
            if (0 === r) {
              if (" " === s && ["event", "function", "error", ""].includes(i))
                i = "";
              else if (((i += s), ")" === s)) {
                o = !0;
                break;
              }
              continue;
            }
            if (" " === s) {
              "," !== e[a - 1] &&
                "," !== n &&
                ",(" !== n &&
                ((n = ""), (t = !1));
              continue;
            }
            (i += s), (n += s);
          }
        }
        if (!o) throw new tl.C("Unable to normalize signature.");
        return i;
      }
      function tS(e, t = {}) {
        let { prepare: n = !0 } = t,
          r =
            Array.isArray(e) || "string" == typeof e
              ? (function (e) {
                  let t;
                  if ("string" == typeof e) t = (0, ts.uT)(e);
                  else {
                    let n = (0, ta.e)(e),
                      r = e.length;
                    for (let i = 0; i < r; i++) {
                      let r = e[i];
                      if (!(0, to.WL)(r)) {
                        t = (0, ts.uT)(r, n);
                        break;
                      }
                    }
                  }
                  if (!t) throw new ti.xo({ signature: e });
                  return t;
                })(e)
              : e;
        return { ...r, ...(n ? { hash: tM(r) } : {}) };
      }
      function tO(e) {
        return td.di(tM(e), 0, 4);
      }
      function tM(e) {
        return "string" != typeof e && "hash" in e && e.hash
          ? e.hash
          : tw(td.sH(tP("string" == typeof e ? e : tc.B(e))));
      }
      class tT extends tl.C {
        constructor(e, t) {
          super("Found ambiguous types in overloaded ABI Items.", {
            metaMessages: [
              `\`${e.type}\` in \`${tP(tc.B(e.abiItem))}\`, and`,
              `\`${t.type}\` in \`${tP(tc.B(t.abiItem))}\``,
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiItem.AmbiguityError",
            });
        }
      }
      class tR extends tl.C {
        constructor({ name: e, data: t, type: n = "item" }) {
          super(
            `ABI ${n}${
              e ? ` with name "${e}"` : t ? ` with data "${t}"` : ""
            } not found.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiItem.NotFoundError",
            });
        }
      }
      tl.C;
      var tN = n(45446);
      let tF = /^(.*)\[([0-9]*)\]$/,
        tU = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        tj =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
      function tD(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let { dynamic: r, encoded: i } = e[n];
          r ? (t += 32) : (t += td.Ej(i));
        }
        let n = [],
          r = [],
          i = 0;
        for (let o = 0; o < e.length; o++) {
          let { dynamic: a, encoded: s } = e[o];
          a
            ? (n.push(td.oB(t + i, { size: 32 })), r.push(s), (i += td.Ej(s)))
            : n.push(s);
        }
        return td.xW(...n, ...r);
      }
      function tL(e) {
        let t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
      function tq(e) {
        let { type: t } = e;
        if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
        if ("tuple" === t) return e.components?.some(tq);
        let n = tL(e.type);
        return !!(n && tq({ ...e, type: n[1] }));
      }
      function tQ(e, t, n) {
        let { checksumAddress: r = !1 } = n ?? {};
        if (e.length !== t.length)
          throw new tH({ expectedLength: e.length, givenLength: t.length });
        let i = tD(
          (function ({ checksumAddress: e, parameters: t, values: n }) {
            let r = [];
            for (let i = 0; i < t.length; i++)
              r.push(
                (function e({
                  checksumAddress: t = !1,
                  parameter: n,
                  value: r,
                }) {
                  let i = tL(n.type);
                  if (i) {
                    let [o, a] = i;
                    return (function (t, n) {
                      let { checksumAddress: r, length: i, parameter: o } = n,
                        a = null === i;
                      if (!Array.isArray(t)) throw new tK(t);
                      if (!a && t.length !== i)
                        throw new tz({
                          expectedLength: i,
                          givenLength: t.length,
                          type: `${o.type}[${i}]`,
                        });
                      let s = !1,
                        c = [];
                      for (let n = 0; n < t.length; n++) {
                        let i = e({
                          checksumAddress: r,
                          parameter: o,
                          value: t[n],
                        });
                        i.dynamic && (s = !0), c.push(i);
                      }
                      if (a || s) {
                        let e = tD(c);
                        if (a) {
                          let t = td.oB(c.length, { size: 32 });
                          return {
                            dynamic: !0,
                            encoded: c.length > 0 ? td.xW(t, e) : t,
                          };
                        }
                        if (s) return { dynamic: !0, encoded: e };
                      }
                      return {
                        dynamic: !1,
                        encoded: td.xW(...c.map(({ encoded: e }) => e)),
                      };
                    })(r, {
                      checksumAddress: t,
                      length: o,
                      parameter: { ...n, type: a },
                    });
                  }
                  if ("tuple" === n.type)
                    return (function (t, n) {
                      let { checksumAddress: r, parameter: i } = n,
                        o = !1,
                        a = [];
                      for (let n = 0; n < i.components.length; n++) {
                        let s = i.components[n],
                          c = Array.isArray(t) ? n : s.name,
                          l = e({
                            checksumAddress: r,
                            parameter: s,
                            value: t[c],
                          });
                        a.push(l), l.dynamic && (o = !0);
                      }
                      return {
                        dynamic: o,
                        encoded: o
                          ? tD(a)
                          : td.xW(...a.map(({ encoded: e }) => e)),
                      };
                    })(r, { checksumAddress: t, parameter: n });
                  if ("address" === n.type) {
                    var o = r,
                      a = { checksum: t };
                    let { checksum: e = !1 } = a;
                    return (
                      tC(o, { strict: e }),
                      { dynamic: !1, encoded: td.Ho(o.toLowerCase()) }
                    );
                  }
                  if ("bool" === n.type) {
                    var s = r;
                    if ("boolean" != typeof s)
                      throw new tl.C(
                        `Invalid boolean value: "${s}" (type: ${typeof s}). Expected: \`true\` or \`false\`.`
                      );
                    return { dynamic: !1, encoded: td.Ho(td.xb(s)) };
                  }
                  if (n.type.startsWith("uint") || n.type.startsWith("int")) {
                    let e = n.type.startsWith("int"),
                      [, , t = "256"] = tj.exec(n.type) ?? [];
                    return (function (e, { signed: t, size: n }) {
                      if ("number" == typeof n) {
                        let r = 2n ** (BigInt(n) - (t ? 1n : 0n)) - 1n,
                          i = t ? -r - 1n : 0n;
                        if (e > r || e < i)
                          throw new td.Ty({
                            max: r.toString(),
                            min: i.toString(),
                            signed: t,
                            size: n / 8,
                            value: e.toString(),
                          });
                      }
                      return {
                        dynamic: !1,
                        encoded: td.oB(e, { size: 32, signed: t }),
                      };
                    })(r, { signed: e, size: Number(t) });
                  }
                  if (n.type.startsWith("bytes"))
                    return (function (e, { type: t }) {
                      let [, n] = t.split("bytes"),
                        r = td.Ej(e);
                      if (!n) {
                        let t = e;
                        return (
                          r % 32 != 0 &&
                            (t = td.M7(
                              t,
                              32 * Math.ceil((e.length - 2) / 2 / 32)
                            )),
                          {
                            dynamic: !0,
                            encoded: td.xW(td.Ho(td.oB(r, { size: 32 })), t),
                          }
                        );
                      }
                      if (r !== Number.parseInt(n))
                        throw new tG({
                          expectedSize: Number.parseInt(n),
                          value: e,
                        });
                      return { dynamic: !1, encoded: td.M7(e) };
                    })(r, { type: n.type });
                  if ("string" === n.type) {
                    var c = r;
                    let e = td.sH(c),
                      t = Math.ceil(td.Ej(e) / 32),
                      n = [];
                    for (let r = 0; r < t; r++)
                      n.push(td.M7(td.di(e, 32 * r, (r + 1) * 32)));
                    return {
                      dynamic: !0,
                      encoded: td.xW(
                        td.M7(td.oB(td.Ej(e), { size: 32 })),
                        ...n
                      ),
                    };
                  }
                  throw new tJ(n.type);
                })({ checksumAddress: e, parameter: t[i], value: n[i] })
              );
            return r;
          })({ checksumAddress: r, parameters: e, values: t })
        );
        return 0 === i.length ? "0x" : i;
      }
      function tW(e, t) {
        if (e.length !== t.length)
          throw new tH({ expectedLength: e.length, givenLength: t.length });
        let n = [];
        for (let r = 0; r < e.length; r++) {
          let i = e[r],
            o = t[r];
          n.push(tW.encode(i, o));
        }
        return td.xW(...n);
      }
      ((tW || (tW = {})).encode = function e(t, n, r = !1) {
        if ("address" === t) return tC(n), td.Ho(n.toLowerCase(), 32 * !!r);
        if ("string" === t) return td.sH(n);
        if ("bytes" === t) return n;
        if ("bool" === t) return td.Ho(td.xb(n), r ? 32 : 1);
        let i = t.match(tj);
        if (i) {
          let [e, t, o = "256"] = i,
            a = Number.parseInt(o) / 8;
          return td.oB(n, { size: r ? 32 : a, signed: "int" === t });
        }
        let o = t.match(tU);
        if (o) {
          let [e, t] = o;
          if (Number.parseInt(t) !== (n.length - 2) / 2)
            throw new tG({ expectedSize: Number.parseInt(t), value: n });
          return td.M7(n, 32 * !!r);
        }
        let a = t.match(tF);
        if (a && Array.isArray(n)) {
          let [t, r] = a,
            i = [];
          for (let t = 0; t < n.length; t++) i.push(e(r, n[t], !0));
          return 0 === i.length ? "0x" : td.xW(...i);
        }
        throw new tJ(t);
      }),
        tl.C,
        tl.C;
      class tz extends tl.C {
        constructor({ expectedLength: e, givenLength: t, type: n }) {
          super(
            `Array length mismatch for type \`${n}\`. Expected: \`${e}\`. Given: \`${t}\`.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.ArrayLengthMismatchError",
            });
        }
      }
      class tG extends tl.C {
        constructor({ expectedSize: e, value: t }) {
          super(
            `Size of bytes "${t}" (bytes${td.Ej(
              t
            )}) does not match expected size (bytes${e}).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.BytesSizeMismatchError",
            });
        }
      }
      class tH extends tl.C {
        constructor({ expectedLength: e, givenLength: t }) {
          super(`ABI encoding parameters/values length mismatch.
Expected length (parameters): ${e}
Given length (values): ${t}`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.LengthMismatchError",
            });
        }
      }
      class tK extends tl.C {
        constructor(e) {
          super(`Value \`${e}\` is not a valid array.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.InvalidArrayError",
            });
        }
      }
      class tJ extends tl.C {
        constructor(e) {
          super(`Type \`${e}\` is not a valid ABI Type.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.InvalidTypeError",
            });
        }
      }
      function t$(e, t = {}) {
        return tS(e, t);
      }
      let tV = "0x0000000000000000000000000000000000000000";
      var tY = n(15313);
      async function t_(e, t) {
        let {
            blockNumber: n,
            blockTag: r,
            calls: i,
            stateOverrides: a,
            traceAssetChanges: s,
            traceTransfers: c,
            validation: l,
          } = t,
          u = t.account ? (0, A.J)(t.account) : void 0;
        if (s && !u)
          throw new O.C(
            "`account` is required when `traceAssetChanges` is true"
          );
        let d = u
            ? (function (e, t) {
                let { bytecode: n, args: r } = t;
                return td.xW(
                  n,
                  e.inputs?.length && r?.length ? tQ(e.inputs, r) : "0x"
                );
              })(tS("constructor(bytes, bytes)"), {
                bytecode: tY.LX,
                args: [
                  "0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033",
                  (function (e, ...t) {
                    let { overloads: n } = e,
                      r = n
                        ? (function (e, t, n) {
                            let r = (function (e, t, n) {
                              let r,
                                { args: i = [], prepare: o = !0 } = n ?? {},
                                a = td.tf(t, { strict: !1 }),
                                s = e.filter((e) =>
                                  a
                                    ? "function" === e.type ||
                                      "error" === e.type
                                      ? tO(e) === td.di(t, 0, 4)
                                      : "event" === e.type && tM(e) === t
                                    : "name" in e && e.name === t
                                );
                              if (0 === s.length) throw new tR({ name: t });
                              if (1 === s.length)
                                return {
                                  ...s[0],
                                  ...(o ? { hash: tM(s[0]) } : {}),
                                };
                              for (let e of s) {
                                if ("inputs" in e) {
                                  if (!i || 0 === i.length) {
                                    if (!e.inputs || 0 === e.inputs.length)
                                      return {
                                        ...e,
                                        ...(o ? { hash: tM(e) } : {}),
                                      };
                                    continue;
                                  }
                                  if (
                                    e.inputs &&
                                    0 !== e.inputs.length &&
                                    e.inputs.length === i.length &&
                                    i.every((t, n) => {
                                      let r = "inputs" in e && e.inputs[n];
                                      return (
                                        !!r &&
                                        (function e(t, n) {
                                          let r = typeof t,
                                            i = n.type;
                                          switch (i) {
                                            case "address":
                                              return tE(t, { strict: !1 });
                                            case "bool":
                                              return "boolean" === r;
                                            case "function":
                                            case "string":
                                              return "string" === r;
                                            default:
                                              if (
                                                "tuple" === i &&
                                                "components" in n
                                              )
                                                return Object.values(
                                                  n.components
                                                ).every((n, r) =>
                                                  e(Object.values(t)[r], n)
                                                );
                                              if (
                                                /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                                                  i
                                                )
                                              )
                                                return (
                                                  "number" === r ||
                                                  "bigint" === r
                                                );
                                              if (
                                                /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(
                                                  i
                                                )
                                              )
                                                return (
                                                  "string" === r ||
                                                  t instanceof Uint8Array
                                                );
                                              if (
                                                /[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(
                                                  i
                                                )
                                              )
                                                return (
                                                  Array.isArray(t) &&
                                                  t.every((t) =>
                                                    e(t, {
                                                      ...n,
                                                      type: i.replace(
                                                        /(\[[0-9]{0,}\])$/,
                                                        ""
                                                      ),
                                                    })
                                                  )
                                                );
                                              return !1;
                                          }
                                        })(t, r)
                                      );
                                    })
                                  ) {
                                    if (r && "inputs" in r && r.inputs) {
                                      let t = (function e(t, n, r) {
                                        for (let i in t) {
                                          let o = t[i],
                                            a = n[i];
                                          if (
                                            "tuple" === o.type &&
                                            "tuple" === a.type &&
                                            "components" in o &&
                                            "components" in a
                                          )
                                            return e(
                                              o.components,
                                              a.components,
                                              r[i]
                                            );
                                          let s = [o.type, a.type];
                                          if (
                                            (s.includes("address") &&
                                              s.includes("bytes20")) ||
                                            (((s.includes("address") &&
                                              s.includes("string")) ||
                                              (s.includes("address") &&
                                                s.includes("bytes"))) &&
                                              tE(r[i], { strict: !1 }))
                                          )
                                            return s;
                                        }
                                      })(e.inputs, r.inputs, i);
                                      if (t)
                                        throw new tT(
                                          { abiItem: e, type: t[0] },
                                          { abiItem: r, type: t[1] }
                                        );
                                    }
                                    r = e;
                                  }
                                }
                              }
                              let c = (() => {
                                if (r) return r;
                                let [e, ...t] = s;
                                return { ...e, overloads: t };
                              })();
                              if (!c) throw new tR({ name: t });
                              return { ...c, ...(o ? { hash: tM(c) } : {}) };
                            })(e, t, n);
                            if ("function" !== r.type)
                              throw new tR({ name: t, type: "function" });
                            return r;
                          })([e, ...n], e.name, { args: t[0] })
                        : e,
                      i = tO(r),
                      o = t.length > 0 ? tQ(r.inputs, t[0]) : void 0;
                    return o ? td.xW(i, o) : i;
                  })(t$("function getBalance(address)"), [u.address]),
                ],
              })
            : void 0,
          h = s
            ? await Promise.all(
                t.calls.map(async (t) => {
                  if (!t.data && !t.abi) return;
                  let { accessList: n } = await B(e, {
                    account: u.address,
                    ...t,
                    data: t.abi ? (0, o.p)(t) : t.data,
                  });
                  return n.map(({ address: e, storageKeys: t }) =>
                    t.length > 0 ? e : null
                  );
                })
              ).then((e) => e.flat().filter(Boolean))
            : [],
          f = a?.map((e) =>
            e.address === u?.address ? { ...e, nonce: 0 } : e
          ),
          p = await tr(e, {
            blockNumber: n,
            blockTag: r,
            blocks: [
              ...(s
                ? [
                    { calls: [{ data: d }], stateOverrides: a },
                    {
                      calls: h.map((e, t) => ({
                        abi: [
                          t$("function balanceOf(address) returns (uint256)"),
                        ],
                        functionName: "balanceOf",
                        args: [u.address],
                        to: e,
                        from: tV,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: tV, nonce: 0 }],
                    },
                  ]
                : []),
              {
                calls: [...i, {}].map((e, t) => ({
                  ...e,
                  from: u?.address,
                  nonce: t,
                })),
                stateOverrides: f,
              },
              ...(s
                ? [
                    { calls: [{ data: d }] },
                    {
                      calls: h.map((e, t) => ({
                        abi: [
                          t$("function balanceOf(address) returns (uint256)"),
                        ],
                        functionName: "balanceOf",
                        args: [u.address],
                        to: e,
                        from: tV,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: tV, nonce: 0 }],
                    },
                    {
                      calls: h.map((e, t) => ({
                        to: e,
                        abi: [t$("function decimals() returns (uint256)")],
                        functionName: "decimals",
                        from: tV,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: tV, nonce: 0 }],
                    },
                    {
                      calls: h.map((e, t) => ({
                        to: e,
                        abi: [
                          t$("function tokenURI(uint256) returns (string)"),
                        ],
                        functionName: "tokenURI",
                        args: [0n],
                        from: tV,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: tV, nonce: 0 }],
                    },
                    {
                      calls: h.map((e, t) => ({
                        to: e,
                        abi: [t$("function symbol() returns (string)")],
                        functionName: "symbol",
                        from: tV,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: tV, nonce: 0 }],
                    },
                  ]
                : []),
            ],
            traceTransfers: c,
            validation: l,
          }),
          m = s ? p[2] : p[0],
          [y, b, , g, w, v, x, C] = s ? p : [],
          { calls: E, ...I } = m,
          k = E.slice(0, -1) ?? [],
          P = [...(y?.calls ?? []), ...(b?.calls ?? [])].map((e) =>
            "success" === e.status ? (0, $.uU)(e.data) : null
          ),
          S = [...(g?.calls ?? []), ...(w?.calls ?? [])].map((e) =>
            "success" === e.status ? (0, $.uU)(e.data) : null
          ),
          M = (v?.calls ?? []).map((e) =>
            "success" === e.status ? e.result : null
          ),
          T = (C?.calls ?? []).map((e) =>
            "success" === e.status ? e.result : null
          ),
          R = (x?.calls ?? []).map((e) =>
            "success" === e.status ? e.result : null
          ),
          N = [];
        for (let [e, t] of S.entries()) {
          let n = P[e];
          if ("bigint" != typeof t || "bigint" != typeof n) continue;
          let r = M[e - 1],
            i = T[e - 1],
            o = R[e - 1],
            a =
              0 === e
                ? {
                    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                    decimals: 18,
                    symbol: "ETH",
                  }
                : {
                    address: h[e - 1],
                    decimals: o || r ? Number(r ?? 1) : void 0,
                    symbol: i ?? void 0,
                  };
          N.some((e) => e.token.address === a.address) ||
            N.push({ token: a, value: { pre: n, post: t, diff: t - n } });
        }
        return { assetChanges: N, block: I, results: k };
      }
      async function tZ(e, t) {
        let {
            abi: n,
            address: r,
            args: a,
            dataSuffix: s,
            functionName: c,
            ...l
          } = t,
          u = l.account ? (0, A.J)(l.account) : e.account,
          d = (0, o.p)({ abi: n, args: a, functionName: c });
        try {
          let { data: o } = await (0, f.T)(
              e,
              v.T,
              "call"
            )({
              batch: !1,
              data: `${d}${s ? s.replace("0x", "") : ""}`,
              to: r,
              ...l,
              account: u,
            }),
            h = (0, i.e)({ abi: n, args: a, functionName: c, data: o || "0x" }),
            p = n.filter((e) => "name" in e && e.name === t.functionName);
          return {
            result: h,
            request: {
              abi: p,
              address: r,
              args: a,
              dataSuffix: s,
              functionName: c,
              ...l,
              account: u,
            },
          };
        } catch (e) {
          throw (0, G.j)(e, {
            abi: n,
            address: r,
            args: a,
            docsPath: "/docs/contract/simulateContract",
            functionName: c,
            sender: u?.address,
          });
        }
      }
      async function tX(e, { filter: t }) {
        return t.request({ method: "eth_uninstallFilter", params: [t.id] });
      }
      var t0 = n(59243),
        t1 = n(20760);
      let t2 =
        "0x6492649264926492649264926492649264926492649264926492649264926492";
      var t6 = n(93727),
        t5 = n(34132);
      async function t3(e, t) {
        let {
            address: n,
            factory: i,
            factoryData: a,
            hash: s,
            signature: l,
            universalSignatureVerifierAddress: u = e.chain?.contracts
              ?.universalSignatureVerifier?.address,
            ...d
          } = t,
          h = (0, K.q)(l)
            ? l
            : "object" == typeof l && "r" in l && "s" in l
            ? (function ({ r: e, s: t, to: n = "hex", v: r, yParity: i }) {
                let o = (() => {
                    if (0 === i || 1 === i) return i;
                    if (r && (27n === r || 28n === r || r >= 35n))
                      return +(r % 2n === 0n);
                    throw Error("Invalid `v` or `yParity` value");
                  })(),
                  a = `0x${new t5.secp256k1.Signature(
                    (0, $.uU)(e),
                    (0, $.uU)(t)
                  ).toCompactHex()}${0 === o ? "1b" : "1c"}`;
                return "hex" === n ? a : (0, T.aT)(a);
              })(l)
            : (0, c.My)(l),
          p = await (async () => {
            if ((!i && !a) || (0, t6.iN)(h, -32) === t2) return h;
            let {
                address: e,
                data: t,
                signature: n,
                to: r = "hex",
              } = { address: i, data: a, signature: h },
              o = (0, Z.aP)([
                (0, F.h)(
                  [{ type: "address" }, { type: "bytes" }, { type: "bytes" }],
                  [e, t, n]
                ),
                t2,
              ]);
            return "hex" === r ? o : (0, T.aT)(o);
          })();
        try {
          let t = u
              ? {
                  to: u,
                  data: (0, o.p)({
                    abi: r._,
                    functionName: "isValidSig",
                    args: [n, s, p],
                  }),
                  ...d,
                }
              : {
                  data: (0, t1.m)({
                    abi: r._,
                    args: [n, s, p],
                    bytecode: tY.nP,
                  }),
                  ...d,
                },
            { data: i } = await (0, f.T)(e, v.T, "call")(t);
          return (0, $.Nx)(i ?? "0x0");
        } catch (e) {
          try {
            if ((0, ez.h)((0, H.b)(n), await _({ hash: s, signature: l })))
              return !0;
          } catch {}
          if (e instanceof tn.zX) return !1;
          throw e;
        }
      }
      async function t4(
        e,
        {
          address: t,
          message: n,
          factory: r,
          factoryData: i,
          signature: o,
          ...a
        }
      ) {
        return t3(e, {
          address: t,
          factory: r,
          factoryData: i,
          hash: (0, t0.A)(n),
          signature: o,
          ...a,
        });
      }
      var t8 = n(67228);
      async function t9(e, t) {
        let {
          address: n,
          factory: r,
          factoryData: i,
          signature: o,
          message: a,
          primaryType: s,
          types: c,
          domain: l,
          ...u
        } = t;
        return t3(e, {
          address: n,
          factory: r,
          factoryData: i,
          hash: (0, t8.Zh)({ message: a, primaryType: s, types: c, domain: l }),
          signature: o,
          ...u,
        });
      }
      let t7 = new Map(),
        ne = new Map(),
        nt = 0;
      function nn(e, t, n) {
        let r = ++nt,
          i = () => t7.get(e) || [],
          o = () => {
            let t = i();
            t7.set(
              e,
              t.filter((e) => e.id !== r)
            );
          },
          a = () => {
            let t = i();
            if (!t.some((e) => e.id === r)) return;
            let n = ne.get(e);
            1 === t.length && n && n(), o();
          },
          s = i();
        if ((t7.set(e, [...s, { id: r, fns: t }]), s && s.length > 0)) return a;
        let c = {};
        for (let e in t)
          c[e] = (...t) => {
            let n = i();
            if (0 !== n.length) for (let r of n) r.fns[e]?.(...t);
          };
        let l = n(c);
        return "function" == typeof l && ne.set(e, l), a;
      }
      var nr = n(62739),
        ni = n(42142),
        no = n(79183),
        na = n(10231);
      function ns(e, { emitOnBegin: t, initialWaitTime: n, interval: r }) {
        let i = !0,
          o = () => (i = !1);
        return (
          (async () => {
            let a;
            t && (a = await e({ unpoll: o }));
            let s = (await n?.(a)) ?? r;
            await (0, na.u)(s);
            let c = async () => {
              i && (await e({ unpoll: o }), await (0, na.u)(r), c());
            };
            c();
          })(),
          o
        );
      }
      function nc(
        e,
        {
          emitOnBegin: t = !1,
          emitMissed: n = !1,
          onBlockNumber: r,
          onError: i,
          poll: o,
          pollingInterval: a = e.pollingInterval,
        }
      ) {
        let s;
        return (
          void 0 !== o
            ? o
            : "webSocket" !== e.transport.type &&
              ("fallback" !== e.transport.type ||
                "webSocket" !== e.transport.transports[0].config.type)
        )
          ? nn(
              (0, no.A)(["watchBlockNumber", e.uid, t, n, a]),
              { onBlockNumber: r, onError: i },
              (r) =>
                ns(
                  async () => {
                    try {
                      let t = await (0, f.T)(
                        e,
                        eq,
                        "getBlockNumber"
                      )({ cacheTime: 0 });
                      if (s) {
                        if (t === s) return;
                        if (t - s > 1 && n)
                          for (let e = s + 1n; e < t; e++)
                            r.onBlockNumber(e, s), (s = e);
                      }
                      (!s || t > s) && (r.onBlockNumber(t, s), (s = t));
                    } catch (e) {
                      r.onError?.(e);
                    }
                  },
                  { emitOnBegin: t, interval: a }
                )
            )
          : nn(
              (0, no.A)(["watchBlockNumber", e.uid, t, n]),
              { onBlockNumber: r, onError: i },
              (t) => {
                let n = !0,
                  r = () => (n = !1);
                return (
                  (async () => {
                    try {
                      let i = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => "webSocket" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        { unsubscribe: o } = await i.subscribe({
                          params: ["newHeads"],
                          onData(e) {
                            if (!n) return;
                            let r = (0, $.uU)(e.result?.number);
                            t.onBlockNumber(r, s), (s = r);
                          },
                          onError(e) {
                            t.onError?.(e);
                          },
                        });
                      (r = o), n || r();
                    } catch (e) {
                      i?.(e);
                    }
                  })(),
                  () => r()
                );
              }
            );
      }
      async function nl(
        e,
        {
          confirmations: t = 1,
          hash: n,
          onReplaced: r,
          pollingInterval: i = e.pollingInterval,
          retryCount: o = 6,
          retryDelay: a = ({ count: e }) => 200 * ~~(1 << e),
          timeout: s = 18e4,
        }
      ) {
        let c,
          l,
          u,
          d = (0, no.A)(["waitForTransactionReceipt", e.uid, n]),
          h = !1,
          { promise: p, resolve: m, reject: y } = (0, nr.Y)(),
          b = s ? setTimeout(() => y(new ei.WA({ hash: n })), s) : void 0,
          g = nn(d, { onReplaced: r, resolve: m, reject: y }, (r) => {
            let s = (0, f.T)(
              e,
              nc,
              "watchBlockNumber"
            )({
              emitMissed: !0,
              emitOnBegin: !0,
              poll: !0,
              pollingInterval: i,
              async onBlockNumber(i) {
                let d = (e) => {
                    clearTimeout(b), s(), e(), g();
                  },
                  p = i;
                if (!h)
                  try {
                    if (u) {
                      if (
                        t > 1 &&
                        (!u.blockNumber || p - u.blockNumber + 1n < t)
                      )
                        return;
                      d(() => r.resolve(u));
                      return;
                    }
                    if (
                      (c ||
                        ((h = !0),
                        await (0, ni.b)(
                          async () => {
                            (c = await (0, f.T)(
                              e,
                              e4,
                              "getTransaction"
                            )({ hash: n })).blockNumber && (p = c.blockNumber);
                          },
                          { delay: a, retryCount: o }
                        ),
                        (h = !1)),
                      (u = await (0, f.T)(
                        e,
                        e7,
                        "getTransactionReceipt"
                      )({ hash: n })),
                      t > 1 && (!u.blockNumber || p - u.blockNumber + 1n < t))
                    )
                      return;
                    d(() => r.resolve(u));
                  } catch (n) {
                    if (n instanceof ei.Kz || n instanceof ei.Kc) {
                      if (!c) {
                        h = !1;
                        return;
                      }
                      try {
                        (l = c), (h = !0);
                        let n = await (0, ni.b)(
                          () =>
                            (0, f.T)(
                              e,
                              ey,
                              "getBlock"
                            )({ blockNumber: p, includeTransactions: !0 }),
                          {
                            delay: a,
                            retryCount: o,
                            shouldRetry: ({ error: e }) => e instanceof eh,
                          }
                        );
                        h = !1;
                        let i = n.transactions.find(
                          ({ from: e, nonce: t }) =>
                            e === l.from && t === l.nonce
                        );
                        if (
                          !i ||
                          ((u = await (0, f.T)(
                            e,
                            e7,
                            "getTransactionReceipt"
                          )({ hash: i.hash })),
                          t > 1 &&
                            (!u.blockNumber || p - u.blockNumber + 1n < t))
                        )
                          return;
                        let s = "replaced";
                        i.to === l.to &&
                        i.value === l.value &&
                        i.input === l.input
                          ? (s = "repriced")
                          : i.from === i.to &&
                            0n === i.value &&
                            (s = "cancelled"),
                          d(() => {
                            r.onReplaced?.({
                              reason: s,
                              replacedTransaction: l,
                              transaction: i,
                              transactionReceipt: u,
                            }),
                              r.resolve(u);
                          });
                      } catch (e) {
                        d(() => r.reject(e));
                      }
                    } else d(() => r.reject(n));
                  }
              },
            });
          });
        return p;
      }
      var nu = n(81379);
      let nd =
          /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
        nh =
          /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
      var nf = n(81757);
      async function np(e, t) {
        let {
            address: n,
            domain: r,
            message: i,
            nonce: o,
            scheme: a,
            signature: s,
            time: c = new Date(),
            ...l
          } = t,
          u = (function (e) {
            let { scheme: t, statement: n, ...r } = e.match(nd)?.groups ?? {},
              {
                chainId: i,
                expirationTime: o,
                issuedAt: a,
                notBefore: s,
                requestId: c,
                ...l
              } = e.match(nh)?.groups ?? {},
              u = e.split("Resources:")[1]?.split("\n- ").slice(1);
            return {
              ...r,
              ...l,
              ...(i ? { chainId: Number(i) } : {}),
              ...(o ? { expirationTime: new Date(o) } : {}),
              ...(a ? { issuedAt: new Date(a) } : {}),
              ...(s ? { notBefore: new Date(s) } : {}),
              ...(c ? { requestId: c } : {}),
              ...(u ? { resources: u } : {}),
              ...(t ? { scheme: t } : {}),
              ...(n ? { statement: n } : {}),
            };
          })(i);
        if (
          !u.address ||
          !(function (e) {
            let {
              address: t,
              domain: n,
              message: r,
              nonce: i,
              scheme: o,
              time: a = new Date(),
            } = e;
            if (
              (n && r.domain !== n) ||
              (i && r.nonce !== i) ||
              (o && r.scheme !== o) ||
              (r.expirationTime && a >= r.expirationTime) ||
              (r.notBefore && a < r.notBefore)
            )
              return !1;
            try {
              if (
                !r.address ||
                !(0, nf.P)(r.address, { strict: !1 }) ||
                (t && !(0, ez.h)(r.address, t))
              )
                return !1;
            } catch {
              return !1;
            }
            return !0;
          })({
            address: n,
            domain: r,
            message: u,
            nonce: o,
            scheme: a,
            time: c,
          })
        )
          return !1;
        let d = (0, t0.A)(i);
        return t3(e, { address: u.address, hash: d, signature: s, ...l });
      }
      async function nm(e, { serializedTransaction: t }) {
        return e.request(
          { method: "eth_sendRawTransaction", params: [t] },
          { retryCount: 0 }
        );
      }
      function ny(e) {
        return {
          call: (t) => (0, v.T)(e, t),
          createAccessList: (t) => B(e, t),
          createBlockFilter: () => P(e),
          createContractEventFilter: (t) => Q(e, t),
          createEventFilter: (t) => W(e, t),
          createPendingTransactionFilter: () => z(e),
          estimateContractGas: (t) => eN(e, t),
          estimateGas: (t) => eR(e, t),
          getBalance: (t) => (0, eT.r)(e, t),
          getBlobBaseFee: () => eF(e),
          getBlock: (t) => ey(e, t),
          getBlockNumber: (t) => eq(e, t),
          getBlockTransactionCount: (t) => eQ(e, t),
          getBytecode: (t) => eW(e, t),
          getChainId: () => eP(e),
          getCode: (t) => eW(e, t),
          getContractEvents: (t) => e_(e, t),
          getEip712Domain: (t) => eX(e, t),
          getEnsAddress: (t) => m(e, t),
          getEnsAvatar: (t) => (0, y.i)(e, t),
          getEnsName: (t) => (0, b.s)(e, t),
          getEnsResolver: (t) => g(e, t),
          getEnsText: (t) => (0, w.m)(e, t),
          getFeeHistory: (t) => e1(e, t),
          estimateFeesPerGas: (t) => ev(e, t),
          getFilterChanges: (t) => e2(e, t),
          getFilterLogs: (t) => e6(e, t),
          getGasPrice: () => eb(e),
          getLogs: (t) => eY(e, t),
          getProof: (t) => e5(e, t),
          estimateMaxPriorityFeePerGas: (t) => eg(e, t),
          getStorageAt: (t) => e3(e, t),
          getTransaction: (t) => e4(e, t),
          getTransactionConfirmations: (t) => e8(e, t),
          getTransactionCount: (t) => ex(e, t),
          getTransactionReceipt: (t) => e7(e, t),
          multicall: (t) => (0, te.C)(e, t),
          prepareTransactionRequest: (t) => eM(e, t),
          readContract: (t) => (0, p.J)(e, t),
          sendRawTransaction: (t) => nm(e, t),
          simulate: (t) => tr(e, t),
          simulateBlocks: (t) => tr(e, t),
          simulateCalls: (t) => t_(e, t),
          simulateContract: (t) => tZ(e, t),
          verifyMessage: (t) => t4(e, t),
          verifySiweMessage: (t) => np(e, t),
          verifyTypedData: (t) => t9(e, t),
          uninstallFilter: (t) => tX(e, t),
          waitForTransactionReceipt: (t) => nl(e, t),
          watchBlocks: (t) =>
            (function (
              e,
              {
                blockTag: t = "latest",
                emitMissed: n = !1,
                emitOnBegin: r = !1,
                onBlock: i,
                onError: o,
                includeTransactions: a,
                poll: s,
                pollingInterval: c = e.pollingInterval,
              }
            ) {
              let l,
                u,
                d,
                h,
                p =
                  void 0 !== s
                    ? s
                    : "webSocket" !== e.transport.type &&
                      ("fallback" !== e.transport.type ||
                        "webSocket" !== e.transport.transports[0].config.type),
                m = a ?? !1;
              return p
                ? nn(
                    (0, no.A)(["watchBlocks", e.uid, t, n, r, m, c]),
                    { onBlock: i, onError: o },
                    (i) =>
                      ns(
                        async () => {
                          try {
                            let r = await (0, f.T)(
                              e,
                              ey,
                              "getBlock"
                            )({ blockTag: t, includeTransactions: m });
                            if (null !== r.number && l?.number != null) {
                              if (r.number === l.number) return;
                              if (r.number - l.number > 1 && n)
                                for (
                                  let t = l?.number + 1n;
                                  t < r.number;
                                  t++
                                ) {
                                  let n = await (0, f.T)(
                                    e,
                                    ey,
                                    "getBlock"
                                  )({ blockNumber: t, includeTransactions: m });
                                  i.onBlock(n, l), (l = n);
                                }
                            }
                            (l?.number == null ||
                              ("pending" === t && r?.number == null) ||
                              (null !== r.number && r.number > l.number)) &&
                              (i.onBlock(r, l), (l = r));
                          } catch (e) {
                            i.onError?.(e);
                          }
                        },
                        { emitOnBegin: r, interval: c }
                      )
                  )
                : ((u = !0),
                  (d = !0),
                  (h = () => (u = !1)),
                  (async () => {
                    try {
                      r &&
                        (0, f.T)(
                          e,
                          ey,
                          "getBlock"
                        )({ blockTag: t, includeTransactions: m }).then((e) => {
                          u && d && (i(e, void 0), (d = !1));
                        });
                      let n = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => "webSocket" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        { unsubscribe: a } = await n.subscribe({
                          params: ["newHeads"],
                          async onData(t) {
                            if (!u) return;
                            let n = await (0, f.T)(
                              e,
                              ey,
                              "getBlock"
                            )({
                              blockNumber: t.blockNumber,
                              includeTransactions: m,
                            }).catch(() => {});
                            u && (i(n, l), (d = !1), (l = n));
                          },
                          onError(e) {
                            o?.(e);
                          },
                        });
                      (h = a), u || h();
                    } catch (e) {
                      o?.(e);
                    }
                  })(),
                  () => h());
            })(e, t),
          watchBlockNumber: (t) => nc(e, t),
          watchContractEvent: (t) =>
            (function (e, t) {
              let {
                abi: n,
                address: r,
                args: i,
                batch: o = !0,
                eventName: a,
                fromBlock: s,
                onError: c,
                onLogs: l,
                poll: u,
                pollingInterval: d = e.pollingInterval,
                strict: h,
              } = t;
              return (
                void 0 !== u
                  ? u
                  : "bigint" == typeof s ||
                    ("webSocket" !== e.transport.type &&
                      ("fallback" !== e.transport.type ||
                        "webSocket" !== e.transport.transports[0].config.type))
              )
                ? (() => {
                    let t = h ?? !1;
                    return nn(
                      (0, no.A)([
                        "watchContractEvent",
                        r,
                        i,
                        o,
                        e.uid,
                        a,
                        d,
                        t,
                        s,
                      ]),
                      { onLogs: l, onError: c },
                      (c) => {
                        let l, u;
                        void 0 !== s && (l = s - 1n);
                        let h = !1,
                          p = ns(
                            async () => {
                              if (!h) {
                                try {
                                  u = await (0, f.T)(
                                    e,
                                    Q,
                                    "createContractEventFilter"
                                  )({
                                    abi: n,
                                    address: r,
                                    args: i,
                                    eventName: a,
                                    strict: t,
                                    fromBlock: s,
                                  });
                                } catch {}
                                h = !0;
                                return;
                              }
                              try {
                                let s;
                                if (u)
                                  s = await (0, f.T)(
                                    e,
                                    e2,
                                    "getFilterChanges"
                                  )({ filter: u });
                                else {
                                  let o = await (0, f.T)(
                                    e,
                                    eq,
                                    "getBlockNumber"
                                  )({});
                                  (s =
                                    l && l < o
                                      ? await (0, f.T)(
                                          e,
                                          e_,
                                          "getContractEvents"
                                        )({
                                          abi: n,
                                          address: r,
                                          args: i,
                                          eventName: a,
                                          fromBlock: l + 1n,
                                          toBlock: o,
                                          strict: t,
                                        })
                                      : []),
                                    (l = o);
                                }
                                if (0 === s.length) return;
                                if (o) c.onLogs(s);
                                else for (let e of s) c.onLogs([e]);
                              } catch (e) {
                                u && e instanceof nu.Di && (h = !1),
                                  c.onError?.(e);
                              }
                            },
                            { emitOnBegin: !0, interval: d }
                          );
                        return async () => {
                          u &&
                            (await (0, f.T)(
                              e,
                              tX,
                              "uninstallFilter"
                            )({ filter: u })),
                            p();
                        };
                      }
                    );
                  })()
                : (() => {
                    let t = (0, no.A)([
                        "watchContractEvent",
                        r,
                        i,
                        o,
                        e.uid,
                        a,
                        d,
                        h ?? !1,
                      ]),
                      s = !0,
                      u = () => (s = !1);
                    return nn(
                      t,
                      { onLogs: l, onError: c },
                      (t) => (
                        (async () => {
                          try {
                            let o = (() => {
                                if ("fallback" === e.transport.type) {
                                  let t = e.transport.transports.find(
                                    (e) => "webSocket" === e.config.type
                                  );
                                  return t ? t.value : e.transport;
                                }
                                return e.transport;
                              })(),
                              c = a ? L({ abi: n, eventName: a, args: i }) : [],
                              { unsubscribe: l } = await o.subscribe({
                                params: ["logs", { address: r, topics: c }],
                                onData(e) {
                                  if (!s) return;
                                  let r = e.result;
                                  try {
                                    let { eventName: e, args: i } = eJ({
                                        abi: n,
                                        data: r.data,
                                        topics: r.topics,
                                        strict: h,
                                      }),
                                      o = eV(r, { args: i, eventName: e });
                                    t.onLogs([o]);
                                  } catch (o) {
                                    let e, n;
                                    if (
                                      o instanceof S.fo ||
                                      o instanceof S.l3
                                    ) {
                                      if (h) return;
                                      (e = o.abiItem.name),
                                        (n = o.abiItem.inputs?.some(
                                          (e) => !("name" in e && e.name)
                                        ));
                                    }
                                    let i = eV(r, {
                                      args: n ? [] : {},
                                      eventName: e,
                                    });
                                    t.onLogs([i]);
                                  }
                                },
                                onError(e) {
                                  t.onError?.(e);
                                },
                              });
                            (u = l), s || u();
                          } catch (e) {
                            c?.(e);
                          }
                        })(),
                        () => u()
                      )
                    );
                  })();
            })(e, t),
          watchEvent: (t) =>
            (function (
              e,
              {
                address: t,
                args: n,
                batch: r = !0,
                event: i,
                events: o,
                fromBlock: a,
                onError: s,
                onLogs: c,
                poll: l,
                pollingInterval: u = e.pollingInterval,
                strict: d,
              }
            ) {
              let h,
                p,
                m =
                  void 0 !== l
                    ? l
                    : "bigint" == typeof a ||
                      ("webSocket" !== e.transport.type &&
                        ("fallback" !== e.transport.type ||
                          "webSocket" !==
                            e.transport.transports[0].config.type)),
                y = d ?? !1;
              return m
                ? nn(
                    (0, no.A)(["watchEvent", t, n, r, e.uid, i, u, a]),
                    { onLogs: c, onError: s },
                    (s) => {
                      let c, l;
                      void 0 !== a && (c = a - 1n);
                      let d = !1,
                        h = ns(
                          async () => {
                            if (!d) {
                              try {
                                l = await (0, f.T)(
                                  e,
                                  W,
                                  "createEventFilter"
                                )({
                                  address: t,
                                  args: n,
                                  event: i,
                                  events: o,
                                  strict: y,
                                  fromBlock: a,
                                });
                              } catch {}
                              d = !0;
                              return;
                            }
                            try {
                              let a;
                              if (l)
                                a = await (0, f.T)(
                                  e,
                                  e2,
                                  "getFilterChanges"
                                )({ filter: l });
                              else {
                                let r = await (0, f.T)(
                                  e,
                                  eq,
                                  "getBlockNumber"
                                )({});
                                (a =
                                  c && c !== r
                                    ? await (0, f.T)(
                                        e,
                                        eY,
                                        "getLogs"
                                      )({
                                        address: t,
                                        args: n,
                                        event: i,
                                        events: o,
                                        fromBlock: c + 1n,
                                        toBlock: r,
                                      })
                                    : []),
                                  (c = r);
                              }
                              if (0 === a.length) return;
                              if (r) s.onLogs(a);
                              else for (let e of a) s.onLogs([e]);
                            } catch (e) {
                              l && e instanceof nu.Di && (d = !1),
                                s.onError?.(e);
                            }
                          },
                          { emitOnBegin: !0, interval: u }
                        );
                      return async () => {
                        l &&
                          (await (0, f.T)(
                            e,
                            tX,
                            "uninstallFilter"
                          )({ filter: l })),
                          h();
                      };
                    }
                  )
                : ((h = !0),
                  (p = () => (h = !1)),
                  (async () => {
                    try {
                      let r = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => "webSocket" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        a = o ?? (i ? [i] : void 0),
                        l = [];
                      a &&
                        ((l = [
                          a.flatMap((e) =>
                            L({ abi: [e], eventName: e.name, args: n })
                          ),
                        ]),
                        i && (l = l[0]));
                      let { unsubscribe: u } = await r.subscribe({
                        params: ["logs", { address: t, topics: l }],
                        onData(e) {
                          if (!h) return;
                          let t = e.result;
                          try {
                            let { eventName: e, args: n } = eJ({
                                abi: a ?? [],
                                data: t.data,
                                topics: t.topics,
                                strict: y,
                              }),
                              r = eV(t, { args: n, eventName: e });
                            c([r]);
                          } catch (i) {
                            let e, n;
                            if (i instanceof S.fo || i instanceof S.l3) {
                              if (d) return;
                              (e = i.abiItem.name),
                                (n = i.abiItem.inputs?.some(
                                  (e) => !("name" in e && e.name)
                                ));
                            }
                            let r = eV(t, { args: n ? [] : {}, eventName: e });
                            c([r]);
                          }
                        },
                        onError(e) {
                          s?.(e);
                        },
                      });
                      (p = u), h || p();
                    } catch (e) {
                      s?.(e);
                    }
                  })(),
                  () => p());
            })(e, t),
          watchPendingTransactions: (t) =>
            (function (
              e,
              {
                batch: t = !0,
                onError: n,
                onTransactions: r,
                poll: i,
                pollingInterval: o = e.pollingInterval,
              }
            ) {
              let a, s;
              return (void 0 !== i ? i : "webSocket" !== e.transport.type)
                ? nn(
                    (0, no.A)(["watchPendingTransactions", e.uid, t, o]),
                    { onTransactions: r, onError: n },
                    (n) => {
                      let r,
                        i = ns(
                          async () => {
                            try {
                              if (!r)
                                try {
                                  r = await (0, f.T)(
                                    e,
                                    z,
                                    "createPendingTransactionFilter"
                                  )({});
                                  return;
                                } catch (e) {
                                  throw (i(), e);
                                }
                              let o = await (0, f.T)(
                                e,
                                e2,
                                "getFilterChanges"
                              )({ filter: r });
                              if (0 === o.length) return;
                              if (t) n.onTransactions(o);
                              else for (let e of o) n.onTransactions([e]);
                            } catch (e) {
                              n.onError?.(e);
                            }
                          },
                          { emitOnBegin: !0, interval: o }
                        );
                      return async () => {
                        r &&
                          (await (0, f.T)(
                            e,
                            tX,
                            "uninstallFilter"
                          )({ filter: r })),
                          i();
                      };
                    }
                  )
                : ((a = !0),
                  (s = () => (a = !1)),
                  (async () => {
                    try {
                      let { unsubscribe: t } = await e.transport.subscribe({
                        params: ["newPendingTransactions"],
                        onData(e) {
                          if (!a) return;
                          let t = e.result;
                          r([t]);
                        },
                        onError(e) {
                          n?.(e);
                        },
                      });
                      (s = t), a || s();
                    } catch (e) {
                      n?.(e);
                    }
                  })(),
                  () => s());
            })(e, t),
        };
      }
      function nb(e, t = {}) {
        let n = (function (e, t = {}) {
          let n;
          try {
            n = e.getClient(t);
          } catch {}
          return n;
        })(e, t);
        return n?.extend(ny);
      }
      var ng = n(45643),
        nw = n(53031);
      function nv() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, nw.U)(e);
        return (0, ng.useSyncExternalStoreWithSelector)(
          (e) =>
            (function (e, t) {
              let { onChange: n } = t;
              return e.subscribe(() => nb(e), n, {
                equalityFn: (e, t) => e?.uid === t?.uid,
              });
            })(t, { onChange: e }),
          () => nb(t, e),
          () => nb(t, e),
          (e) => e,
          (e, t) =>
            (null == e ? void 0 : e.uid) === (null == t ? void 0 : t.uid)
        );
      }
    },
    62013: (e, t, n) => {
      let r = n(8527);
      function i(e, t) {
        let n = e.a / 255,
          r = t + '="' + e.hex + '"';
        return n < 1
          ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"'
          : r;
      }
      function o(e, t, n) {
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
              i(a.color.light, "fill") +
              ' d="M0 0h' +
              l +
              "v" +
              l +
              'H0z"/>'
            : "",
          d =
            "<path " +
            i(a.color.dark, "stroke") +
            ' d="' +
            (function (e, t, n) {
              let r = "",
                i = 0,
                a = !1,
                s = 0;
              for (let c = 0; c < e.length; c++) {
                let l = Math.floor(c % t),
                  u = Math.floor(c / t);
                l || a || (a = !0),
                  e[c]
                    ? (s++,
                      (c > 0 && l > 0 && e[c - 1]) ||
                        ((r += a ? o("M", l + n, 0.5 + u + n) : o("m", i, 0)),
                        (i = 0),
                        (a = !1)),
                      (l + 1 < t && e[c + 1]) || ((r += o("h", s)), (s = 0)))
                    : i++;
              }
              return r;
            })(c, s, a.margin) +
            '"/>',
          h =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            (a.width
              ? 'width="' + a.width + '" height="' + a.width + '" '
              : "") +
            ('viewBox="0 0 ' + l + " ") +
            l +
            '" shape-rendering="crispEdges">' +
            u +
            d +
            "</svg>\n";
        return "function" == typeof n && n(null, h), h;
      };
    },
    62108: (e, t, n) => {
      "use strict";
      function r(e) {
        return JSON.stringify(e, (e, t) =>
          !(function (e) {
            if (!i(e)) return !1;
            let t = e.constructor;
            if (void 0 === t) return !0;
            let n = t.prototype;
            return !!i(n) && !!n.hasOwnProperty("isPrototypeOf");
          })(t)
            ? "bigint" == typeof t
              ? t.toString()
              : t
            : Object.keys(t)
                .sort()
                .reduce((e, n) => ((e[n] = t[n]), e), {})
        );
      }
      function i(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function o(e) {
        let {
          _defaulted: t,
          behavior: n,
          gcTime: r,
          initialData: i,
          initialDataUpdatedAt: o,
          maxPages: a,
          meta: s,
          networkMode: c,
          queryFn: l,
          queryHash: u,
          queryKey: d,
          queryKeyHashFn: h,
          retry: f,
          retryDelay: p,
          structuralSharing: m,
          getPreviousPageParam: y,
          getNextPageParam: b,
          initialPageParam: g,
          _optimisticResults: w,
          enabled: v,
          notifyOnChangeProps: A,
          placeholderData: x,
          refetchInterval: C,
          refetchIntervalInBackground: E,
          refetchOnMount: I,
          refetchOnReconnect: B,
          refetchOnWindowFocus: k,
          retryOnMount: P,
          select: S,
          staleTime: O,
          suspense: M,
          throwOnError: T,
          config: R,
          connector: N,
          query: F,
          ...U
        } = e;
        return U;
      }
      n.d(t, { Zi: () => r, xO: () => o });
    },
    62202: (e, t, n) => {
      let r = n(46087),
        i = n(60519),
        o = n(58976),
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
          let o =
            (r.getSymbolTotalCodewords(e) - i.getTotalCodewordsCount(e, t)) * 8;
          if (n === a.MIXED) return o;
          let c = o - l(n, e);
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
            i = o.from(n, o.M);
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
                  })(e, n) <= t.getCapacity(n, i, a.MIXED)
                )
                  return n;
              return;
            }
            if (0 === e.length) return 1;
            r = e[0];
          } else r = e;
          return (function (e, n, r) {
            for (let i = 1; i <= 40; i++)
              if (n <= t.getCapacity(i, r, e)) return i;
          })(r.mode, r.getLength(), i);
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
        i = n(90113),
        o = n(35883),
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
            if (!e) throw new i.N();
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
            if (!e) throw new i.N();
            c && (e.removeListener("disconnect", c), (c = void 0)),
              l && (await r.storage?.setItem("safe.disconnected", !0));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new i.N();
            return (await e.request({ method: "eth_accounts" })).map(o.b);
          },
          async getProvider() {
            if ("undefined" != typeof window && window?.parent !== window) {
              if (!t) {
                let { default: r } = await Promise.all([
                    n.e(5242),
                    n.e(4278),
                  ]).then(n.bind(n, 94278)),
                  i = new r(e),
                  o = await (0, a.w)(() => i.safe.getInfo(), {
                    timeout: e.unstable_getInfoTimeout ?? 10,
                  });
                if (!o) throw Error("Could not load Safe information");
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
                })())(o, i);
              }
              return t;
            }
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new i.N();
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
    62739: (e, t, n) => {
      "use strict";
      function r() {
        let e = () => void 0,
          t = () => void 0;
        return {
          promise: new Promise((n, r) => {
            (e = n), (t = r);
          }),
          resolve: e,
          reject: t,
        };
      }
      n.d(t, { Y: () => r });
    },
    64997: (e, t, n) => {
      "use strict";
      function r(e) {
        let t = e.state.current,
          n = e.state.connections.get(t),
          r = n?.accounts,
          i = r?.[0],
          o = e.chains.find((e) => e.id === n?.chainId),
          a = e.state.status;
        switch (a) {
          case "connected":
            return {
              address: i,
              addresses: r,
              chain: o,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !0,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !1,
              status: a,
            };
          case "reconnecting":
            return {
              address: i,
              addresses: r,
              chain: o,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !!i,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !0,
              status: a,
            };
          case "connecting":
            return {
              address: i,
              addresses: r,
              chain: o,
              chainId: n?.chainId,
              connector: n?.connector,
              isConnected: !1,
              isConnecting: !0,
              isDisconnected: !1,
              isReconnecting: !1,
              status: a,
            };
          case "disconnected":
            return {
              address: void 0,
              addresses: void 0,
              chain: void 0,
              chainId: void 0,
              connector: void 0,
              isConnected: !1,
              isConnecting: !1,
              isDisconnected: !0,
              isReconnecting: !1,
              status: a,
            };
        }
      }
      n.d(t, { s: () => r });
    },
    65003: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      class r extends Map {
        constructor(e) {
          super(),
            Object.defineProperty(this, "maxSize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
        get(e) {
          let t = super.get(e);
          return (
            super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t
          );
        }
        set(e, t) {
          if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
            let e = this.keys().next().value;
            e && this.delete(e);
          }
          return this;
        }
      }
    },
    65358: (e, t, n) => {
      "use strict";
      n.d(t, { c: () => l });
      var r = n(19405);
      let i = 2n ** 256n - 1n;
      var o = n(36444),
        a = n(42264),
        s = n(69432),
        c = n(81757);
      function l(e) {
        let {
            account: t,
            gasPrice: n,
            maxFeePerGas: l,
            maxPriorityFeePerGas: u,
            to: d,
          } = e,
          h = t ? (0, r.J)(t) : void 0;
        if (h && !(0, c.P)(h.address)) throw new o.M({ address: h.address });
        if (d && !(0, c.P)(d)) throw new o.M({ address: d });
        if (void 0 !== n && (void 0 !== l || void 0 !== u)) throw new s.n3();
        if (l && l > i) throw new a.BG({ maxFeePerGas: l });
        if (u && l && u > l)
          throw new a.lN({ maxFeePerGas: l, maxPriorityFeePerGas: u });
      }
    },
    65368: (e, t, n) => {
      "use strict";
      let r;
      n.d(t, { L: () => o });
      let i = 256;
      function o(e = 11) {
        if (!r || i + e > 512) {
          (r = ""), (i = 0);
          for (let e = 0; e < 256; e++)
            r += ((256 + 256 * Math.random()) | 0).toString(16).substring(1);
        }
        return r.substring(i, i++ + e);
      }
    },
    65830: (e, t, n) => {
      "use strict";
      n.d(t, { m: () => p });
      var r = n(14493),
        i = n(69330),
        o = n(60367),
        a = n(13861),
        s = n(67622),
        c = n(41052),
        l = n(95041),
        u = n(32160),
        d = n(7612),
        h = n(34524),
        f = n(3488);
      async function p(e, t) {
        let {
            blockNumber: n,
            blockTag: p,
            key: m,
            name: y,
            gatewayUrls: b,
            strict: g,
          } = t,
          { chain: w } = e,
          v = (() => {
            if (t.universalResolverAddress) return t.universalResolverAddress;
            if (!w)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, a.M)({
              blockNumber: n,
              chain: w,
              contract: "ensUniversalResolver",
            });
          })(),
          A = w?.ensTlds;
        if (A && !A.some((e) => y.endsWith(e))) return null;
        try {
          let t = {
              address: v,
              abi: r.Ag,
              functionName: "resolve",
              args: [
                (0, s.nj)((0, d.F)(y)),
                (0, o.p)({
                  abi: r.SJ,
                  functionName: "text",
                  args: [(0, u.k)(y), m],
                }),
                b ?? [l.J],
              ],
              blockNumber: n,
              blockTag: p,
            },
            a = (0, h.T)(e, f.J, "readContract"),
            c = await a(t);
          if ("0x" === c[0]) return null;
          let g = (0, i.e)({ abi: r.SJ, functionName: "text", data: c[0] });
          return "" === g ? null : g;
        } catch (e) {
          if (g) throw e;
          if ((0, c.J)(e, "resolve")) return null;
          throw e;
        }
      }
    },
    66444: (e, t, n) => {
      let r = n(43585);
      function i(e) {
        (this.mode = r.NUMERIC), (this.data = e.toString());
      }
      (i.getBitsLength = function (e) {
        return 10 * Math.floor(e / 3) + (e % 3 ? (e % 3) * 3 + 1 : 0);
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (e) {
          let t, n, r;
          for (t = 0; t + 3 <= this.data.length; t += 3)
            (r = parseInt(this.data.substr(t, 3), 10)), e.put(r, 10);
          let i = this.data.length - t;
          i > 0 &&
            ((r = parseInt(this.data.substr(t), 10)), e.put(r, 3 * i + 1));
        }),
        (e.exports = i);
    },
    67228: (e, t, n) => {
      "use strict";
      n.d(t, { Zh: () => b });
      var r = n(13423),
        i = n(79731),
        o = n(67622),
        a = n(24578),
        s = n(99702),
        c = n(36444),
        l = n(79183),
        u = n(7441);
      class d extends u.C {
        constructor({ domain: e }) {
          super(`Invalid domain "${(0, l.A)(e)}".`, {
            metaMessages: ["Must be a valid EIP-712 domain."],
          });
        }
      }
      class h extends u.C {
        constructor({ primaryType: e, types: t }) {
          super(
            `Invalid primary type \`${e}\` must be one of \`${JSON.stringify(
              Object.keys(t)
            )}\`.`,
            {
              docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
              metaMessages: [
                "Check that the primary type is a key in `types`.",
              ],
            }
          );
        }
      }
      class f extends u.C {
        constructor({ type: e }) {
          super(`Struct type "${e}" is invalid.`, {
            metaMessages: ["Struct type must not be a Solidity type."],
            name: "InvalidStructTypeError",
          });
        }
      }
      var p = n(81757),
        m = n(87094),
        y = n(38697);
      function b(e) {
        let { domain: t = {}, message: n, primaryType: r } = e,
          l = {
            EIP712Domain: (function ({ domain: e }) {
              return [
                "string" == typeof e?.name && { name: "name", type: "string" },
                e?.version && { name: "version", type: "string" },
                ("number" == typeof e?.chainId ||
                  "bigint" == typeof e?.chainId) && {
                  name: "chainId",
                  type: "uint256",
                },
                e?.verifyingContract && {
                  name: "verifyingContract",
                  type: "address",
                },
                e?.salt && { name: "salt", type: "bytes32" },
              ].filter(Boolean);
            })({ domain: t }),
            ...e.types,
          },
          {
            domain: u,
            message: b,
            primaryType: w,
            types: v,
          } = { domain: t, message: n, primaryType: r, types: l },
          A = (e, t) => {
            for (let n of e) {
              let { name: e, type: r } = n,
                i = t[e],
                a = r.match(y.Ge);
              if (a && ("number" == typeof i || "bigint" == typeof i)) {
                let [e, t, n] = a;
                (0, o.cK)(i, {
                  signed: "int" === t,
                  size: Number.parseInt(n) / 8,
                });
              }
              if ("address" === r && "string" == typeof i && !(0, p.P)(i))
                throw new c.M({ address: i });
              let l = r.match(y.BD);
              if (l) {
                let [e, t] = l;
                if (t && (0, m.E)(i) !== Number.parseInt(t))
                  throw new s.BI({
                    expectedSize: Number.parseInt(t),
                    givenSize: (0, m.E)(i),
                  });
              }
              let u = v[r];
              u &&
                ((function (e) {
                  if (
                    "address" === e ||
                    "bool" === e ||
                    "string" === e ||
                    e.startsWith("bytes") ||
                    e.startsWith("uint") ||
                    e.startsWith("int")
                  )
                    throw new f({ type: e });
                })(r),
                A(u, i));
            }
          };
        if (v.EIP712Domain && u) {
          if ("object" != typeof u) throw new d({ domain: u });
          A(v.EIP712Domain, u);
        }
        if ("EIP712Domain" !== w)
          if (v[w]) A(v[w], b);
          else throw new h({ primaryType: w, types: v });
        let x = ["0x1901"];
        return (
          t &&
            x.push(
              (function ({ domain: e, types: t }) {
                return g({ data: e, primaryType: "EIP712Domain", types: t });
              })({ domain: t, types: l })
            ),
          "EIP712Domain" !== r &&
            x.push(g({ data: n, primaryType: r, types: l })),
          (0, a.S)((0, i.xW)(x))
        );
      }
      function g({ data: e, primaryType: t, types: n }) {
        let i = (function e({ data: t, primaryType: n, types: i }) {
          let s = [{ type: "bytes32" }],
            c = [
              (function ({ primaryType: e, types: t }) {
                let n = (0, o.nj)(
                  (function ({ primaryType: e, types: t }) {
                    let n = "",
                      r = (function e(
                        { primaryType: t, types: n },
                        r = new Set()
                      ) {
                        let i = t.match(/^\w*/u),
                          o = i?.[0];
                        if (r.has(o) || void 0 === n[o]) return r;
                        for (let t of (r.add(o), n[o]))
                          e({ primaryType: t.type, types: n }, r);
                        return r;
                      })({ primaryType: e, types: t });
                    for (let i of (r.delete(e), [e, ...Array.from(r).sort()]))
                      n += `${i}(${t[i]
                        .map(({ name: e, type: t }) => `${t} ${e}`)
                        .join(",")})`;
                    return n;
                  })({ primaryType: e, types: t })
                );
                return (0, a.S)(n);
              })({ primaryType: n, types: i }),
            ];
          for (let l of i[n]) {
            let [n, u] = (function t({ types: n, name: i, type: s, value: c }) {
              if (void 0 !== n[s])
                return [
                  { type: "bytes32" },
                  (0, a.S)(e({ data: c, primaryType: s, types: n })),
                ];
              if ("bytes" === s) {
                let e = c.length % 2 ? "0" : "";
                return (
                  (c = `0x${e + c.slice(2)}`),
                  [{ type: "bytes32" }, (0, a.S)(c)]
                );
              }
              if ("string" === s)
                return [{ type: "bytes32" }, (0, a.S)((0, o.nj)(c))];
              if (s.lastIndexOf("]") === s.length - 1) {
                let e = s.slice(0, s.lastIndexOf("[")),
                  o = c.map((r) => t({ name: i, type: e, types: n, value: r }));
                return [
                  { type: "bytes32" },
                  (0, a.S)(
                    (0, r.h)(
                      o.map(([e]) => e),
                      o.map(([, e]) => e)
                    )
                  ),
                ];
              }
              return [{ type: s }, c];
            })({ types: i, name: l.name, type: l.type, value: t[l.name] });
            s.push(n), c.push(u);
          }
          return (0, r.h)(s, c);
        })({ data: e, primaryType: t, types: n });
        return (0, a.S)(i);
      }
    },
    67622: (e, t, n) => {
      "use strict";
      n.d(t, {
        $P: () => c,
        My: () => l,
        cK: () => u,
        i3: () => h,
        nj: () => s,
      });
      var r = n(94201),
        i = n(36984),
        o = n(27493);
      let a = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function s(e, t = {}) {
        return "number" == typeof e || "bigint" == typeof e
          ? u(e, t)
          : "string" == typeof e
          ? h(e, t)
          : "boolean" == typeof e
          ? c(e, t)
          : l(e, t);
      }
      function c(e, t = {}) {
        let n = `0x${Number(e)}`;
        return "number" == typeof t.size
          ? ((0, o.Sl)(n, { size: t.size }), (0, i.eV)(n, { size: t.size }))
          : n;
      }
      function l(e, t = {}) {
        let n = "";
        for (let t = 0; t < e.length; t++) n += a[e[t]];
        let r = `0x${n}`;
        return "number" == typeof t.size
          ? ((0, o.Sl)(r, { size: t.size }),
            (0, i.eV)(r, { dir: "right", size: t.size }))
          : r;
      }
      function u(e, t = {}) {
        let n,
          { signed: o, size: a } = t,
          s = BigInt(e);
        a
          ? (n = o
              ? (1n << (8n * BigInt(a) - 1n)) - 1n
              : 2n ** (8n * BigInt(a)) - 1n)
          : "number" == typeof e && (n = BigInt(Number.MAX_SAFE_INTEGER));
        let c = "bigint" == typeof n && o ? -n - 1n : 0;
        if ((n && s > n) || s < c) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new r.Ty({
            max: n ? `${n}${t}` : void 0,
            min: `${c}${t}`,
            signed: o,
            size: a,
            value: `${e}${t}`,
          });
        }
        let l = `0x${(o && s < 0
          ? (1n << BigInt(8 * a)) + BigInt(s)
          : s
        ).toString(16)}`;
        return a ? (0, i.eV)(l, { size: a }) : l;
      }
      let d = new TextEncoder();
      function h(e, t = {}) {
        return l(d.encode(e), t);
      }
    },
    68321: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => r });
      class r extends Error {
        constructor(e, t = {}) {
          let n =
              t.cause instanceof r
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            i = (t.cause instanceof r && t.cause.docsPath) || t.docsPath;
          super(
            [
              e || "An error occurred.",
              "",
              ...(t.metaMessages ? [...t.metaMessages, ""] : []),
              ...(i ? [`Docs: https://abitype.dev${i}`] : []),
              ...(n ? [`Details: ${n}`] : []),
              "Version: abitype@1.0.8",
            ].join("\n")
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiTypeError",
            }),
            t.cause && (this.cause = t.cause),
            (this.details = n),
            (this.docsPath = i),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
      }
    },
    68629: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => l });
      var r = n(80844),
        i = n(24578);
      let o = (e) => (0, i.S)((0, r.ZJ)(e));
      var a = n(16652),
        s = n(7441);
      let c = (e) =>
        (function (e) {
          let t = !0,
            n = "",
            r = 0,
            i = "",
            o = !1;
          for (let a = 0; a < e.length; a++) {
            let s = e[a];
            if (
              (["(", ")", ","].includes(s) && (t = !0),
              "(" === s && r++,
              ")" === s && r--,
              t)
            ) {
              if (0 === r) {
                if (" " === s && ["event", "function", ""].includes(i)) i = "";
                else if (((i += s), ")" === s)) {
                  o = !0;
                  break;
                }
                continue;
              }
              if (" " === s) {
                "," !== e[a - 1] &&
                  "," !== n &&
                  ",(" !== n &&
                  ((n = ""), (t = !1));
                continue;
              }
              (i += s), (n += s);
            }
          }
          if (!o) throw new s.C("Unable to normalize signature.");
          return i;
        })("string" == typeof e ? e : (0, a.B)(e));
      function l(e) {
        return o(c(e));
      }
    },
    69184: (e, t, n) => {
      let r = n(43585),
        i = [
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
      function o(e) {
        (this.mode = r.ALPHANUMERIC), (this.data = e);
      }
      (o.getBitsLength = function (e) {
        return 11 * Math.floor(e / 2) + (e % 2) * 6;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (e) {
          let t;
          for (t = 0; t + 2 <= this.data.length; t += 2) {
            let n = 45 * i.indexOf(this.data[t]);
            (n += i.indexOf(this.data[t + 1])), e.put(n, 11);
          }
          this.data.length % 2 && e.put(i.indexOf(this.data[t]), 6);
        }),
        (e.exports = o);
    },
    69330: (e, t, n) => {
      "use strict";
      n.d(t, { e: () => s });
      var r = n(99702),
        i = n(43935),
        o = n(23008);
      let a = "/docs/contract/decodeFunctionResult";
      function s(e) {
        let { abi: t, args: n, functionName: s, data: c } = e,
          l = t[0];
        if (s) {
          let e = (0, o.iY)({ abi: t, args: n, name: s });
          if (!e) throw new r.Iz(s, { docsPath: a });
          l = e;
        }
        if ("function" !== l.type) throw new r.Iz(void 0, { docsPath: a });
        if (!l.outputs) throw new r.MR(l.name, { docsPath: a });
        let u = (0, i.n)(l.outputs, c);
        return u && u.length > 1 ? u : u && 1 === u.length ? u[0] : void 0;
      }
    },
    69432: (e, t, n) => {
      "use strict";
      n.d(t, {
        Kc: () => c,
        Kz: () => s,
        Vg: () => a,
        WA: () => l,
        aO: () => i,
        n3: () => o,
      }),
        n(44494),
        n(31942);
      var r = n(7441);
      function i(e) {
        let t = Object.entries(e)
            .map(([e, t]) => (void 0 === t || !1 === t ? null : [e, t]))
            .filter(Boolean),
          n = t.reduce((e, [t]) => Math.max(e, t.length), 0);
        return t.map(([e, t]) => `  ${`${e}:`.padEnd(n + 1)}  ${t}`).join("\n");
      }
      class o extends r.C {
        constructor() {
          super(
            "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.",
            { name: "FeeConflictError" }
          );
        }
      }
      r.C;
      class a extends r.C {
        constructor({ transaction: e }) {
          super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: [
              "Provided Transaction:",
              "{",
              i(e),
              "}",
              "",
              "To infer the type, either provide:",
              "- a `type` to the Transaction, or",
              "- an EIP-1559 Transaction with `maxFeePerGas`, or",
              "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
              "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
              "- an EIP-7702 Transaction with `authorizationList`, or",
              "- a Legacy Transaction with `gasPrice`",
            ],
            name: "InvalidSerializableTransactionError",
          });
        }
      }
      r.C, r.C, r.C, r.C;
      class s extends r.C {
        constructor({
          blockHash: e,
          blockNumber: t,
          blockTag: n,
          hash: r,
          index: i,
        }) {
          let o = "Transaction";
          n &&
            void 0 !== i &&
            (o = `Transaction at block time "${n}" at index "${i}"`),
            e &&
              void 0 !== i &&
              (o = `Transaction at block hash "${e}" at index "${i}"`),
            t &&
              void 0 !== i &&
              (o = `Transaction at block number "${t}" at index "${i}"`),
            r && (o = `Transaction with hash "${r}"`),
            super(`${o} could not be found.`, {
              name: "TransactionNotFoundError",
            });
        }
      }
      class c extends r.C {
        constructor({ hash: e }) {
          super(
            `Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`,
            { name: "TransactionReceiptNotFoundError" }
          );
        }
      }
      class l extends r.C {
        constructor({ hash: e }) {
          super(
            `Timed out while waiting for transaction with hash "${e}" to be confirmed.`,
            { name: "WaitForTransactionReceiptTimeoutError" }
          );
        }
      }
    },
    70030: (e, t, n) => {
      "use strict";
      function r(e, t, n) {
        let r = e[t.name];
        if ("function" == typeof r) return r;
        let i = e[n];
        return "function" == typeof i ? i : (n) => t(e, n);
      }
      n.d(t, { T: () => r });
    },
    70872: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => i });
      var r = n(32840);
      function i(e) {
        if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]"))
          return null;
        let t = `0x${e.slice(1, 65)}`;
        return (0, r.q)(t) ? t : null;
      }
    },
    72920: (e, t, n) => {
      let r = n(43585),
        i = n(66444),
        o = n(69184),
        a = n(87487),
        s = n(15580),
        c = n(81685),
        l = n(46087),
        u = n(98521);
      function d(e) {
        return unescape(encodeURIComponent(e)).length;
      }
      function h(e, t, n) {
        let r,
          i = [];
        for (; null !== (r = e.exec(n)); )
          i.push({ data: r[0], index: r.index, mode: t, length: r[0].length });
        return i;
      }
      function f(e) {
        let t,
          n,
          i = h(c.NUMERIC, r.NUMERIC, e),
          o = h(c.ALPHANUMERIC, r.ALPHANUMERIC, e);
        return (
          l.isKanjiModeEnabled()
            ? ((t = h(c.BYTE, r.BYTE, e)), (n = h(c.KANJI, r.KANJI, e)))
            : ((t = h(c.BYTE_KANJI, r.BYTE, e)), (n = [])),
          i
            .concat(o, t, n)
            .sort(function (e, t) {
              return e.index - t.index;
            })
            .map(function (e) {
              return { data: e.data, mode: e.mode, length: e.length };
            })
        );
      }
      function p(e, t) {
        switch (t) {
          case r.NUMERIC:
            return i.getBitsLength(e);
          case r.ALPHANUMERIC:
            return o.getBitsLength(e);
          case r.KANJI:
            return s.getBitsLength(e);
          case r.BYTE:
            return a.getBitsLength(e);
        }
      }
      function m(e, t) {
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
            return new i(e);
          case r.ALPHANUMERIC:
            return new o(e);
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
              ? e.push(m(t, null))
              : t.data && e.push(m(t.data, t.mode)),
            e
          );
        }, []);
      }),
        (t.fromString = function (e, n) {
          let i = (function (e, t) {
              let n = {},
                i = { start: {} },
                o = ["start"];
              for (let a = 0; a < e.length; a++) {
                let s = e[a],
                  c = [];
                for (let e = 0; e < s.length; e++) {
                  let l = s[e],
                    u = "" + a + e;
                  c.push(u), (n[u] = { node: l, lastCount: 0 }), (i[u] = {});
                  for (let e = 0; e < o.length; e++) {
                    let a = o[e];
                    n[a] && n[a].node.mode === l.mode
                      ? ((i[a][u] =
                          p(n[a].lastCount + l.length, l.mode) -
                          p(n[a].lastCount, l.mode)),
                        (n[a].lastCount += l.length))
                      : (n[a] && (n[a].lastCount = l.length),
                        (i[a][u] =
                          p(l.length, l.mode) +
                          4 +
                          r.getCharCountIndicator(l.mode, t)));
                  }
                }
                o = c;
              }
              for (let e = 0; e < o.length; e++) i[o[e]].end = 0;
              return { map: i, table: n };
            })(
              (function (e) {
                let t = [];
                for (let n = 0; n < e.length; n++) {
                  let i = e[n];
                  switch (i.mode) {
                    case r.NUMERIC:
                      t.push([
                        i,
                        {
                          data: i.data,
                          mode: r.ALPHANUMERIC,
                          length: i.length,
                        },
                        { data: i.data, mode: r.BYTE, length: i.length },
                      ]);
                      break;
                    case r.ALPHANUMERIC:
                      t.push([
                        i,
                        { data: i.data, mode: r.BYTE, length: i.length },
                      ]);
                      break;
                    case r.KANJI:
                      t.push([
                        i,
                        { data: i.data, mode: r.BYTE, length: d(i.data) },
                      ]);
                      break;
                    case r.BYTE:
                      t.push([
                        { data: i.data, mode: r.BYTE, length: d(i.data) },
                      ]);
                  }
                }
                return t;
              })(f(e, l.isKanjiModeEnabled())),
              n
            ),
            o = u.find_path(i.map, "start", "end"),
            a = [];
          for (let e = 1; e < o.length - 1; e++) a.push(i.table[o[e]].node);
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
          return t.fromArray(f(e, l.isKanjiModeEnabled()));
        });
    },
    73504: (e, t, n) => {
      "use strict";
      function r() {
        let e,
          t,
          n = new Promise((n, r) => {
            (e = n), (t = r);
          });
        function r(e) {
          Object.assign(n, e), delete n.resolve, delete n.reject;
        }
        return (
          (n.status = "pending"),
          n.catch(() => {}),
          (n.resolve = (t) => {
            r({ status: "fulfilled", value: t }), e(t);
          }),
          (n.reject = (e) => {
            r({ status: "rejected", reason: e }), t(e);
          }),
          n
        );
      }
      n.d(t, { T: () => r });
    },
    75794: (e, t, n) => {
      "use strict";
      n.d(t, { i: () => E });
      var r = n(3488),
        i = n(7441);
      class o extends i.C {
        constructor({ data: e }) {
          super(
            "Unable to extract image from metadata. The metadata may be malformed or invalid.",
            {
              metaMessages: [
                "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
                "",
                `Provided data: ${JSON.stringify(e)}`,
              ],
              name: "EnsAvatarInvalidMetadataError",
            }
          );
        }
      }
      class a extends i.C {
        constructor({ reason: e }) {
          super(`ENS NFT avatar URI is invalid. ${e}`, {
            name: "EnsAvatarInvalidNftUriError",
          });
        }
      }
      class s extends i.C {
        constructor({ uri: e }) {
          super(
            `Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`,
            { name: "EnsAvatarUriResolutionError" }
          );
        }
      }
      class c extends i.C {
        constructor({ namespace: e }) {
          super(
            `ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`,
            { name: "EnsAvatarUnsupportedNamespaceError" }
          );
        }
      }
      let l =
          /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
        u =
          /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
        d = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
        h = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
      async function f(e) {
        try {
          let t = await fetch(e, { method: "HEAD" });
          if (200 === t.status) {
            let e = t.headers.get("content-type");
            return e?.startsWith("image/");
          }
          return !1;
        } catch (t) {
          if (
            ("object" == typeof t && void 0 !== t.response) ||
            !globalThis.hasOwnProperty("Image")
          )
            return !1;
          return new Promise((t) => {
            let n = new Image();
            (n.onload = () => {
              t(!0);
            }),
              (n.onerror = () => {
                t(!1);
              }),
              (n.src = e);
          });
        }
      }
      function p(e, t) {
        return e ? (e.endsWith("/") ? e.slice(0, -1) : e) : t;
      }
      function m({ uri: e, gatewayUrls: t }) {
        let n = d.test(e);
        if (n) return { uri: e, isOnChain: !0, isEncoded: n };
        let r = p(t?.ipfs, "https://ipfs.io"),
          i = p(t?.arweave, "https://arweave.net"),
          o = e.match(l),
          {
            protocol: a,
            subpath: c,
            target: f,
            subtarget: m = "",
          } = o?.groups || {},
          y = "ipns:/" === a || "ipns/" === c,
          b = "ipfs:/" === a || "ipfs/" === c || u.test(e);
        if (e.startsWith("http") && !y && !b) {
          let n = e;
          return (
            t?.arweave && (n = e.replace(/https:\/\/arweave.net/g, t?.arweave)),
            { uri: n, isOnChain: !1, isEncoded: !1 }
          );
        }
        if ((y || b) && f)
          return {
            uri: `${r}/${y ? "ipns" : "ipfs"}/${f}${m}`,
            isOnChain: !1,
            isEncoded: !1,
          };
        if ("ar:/" === a && f)
          return { uri: `${i}/${f}${m || ""}`, isOnChain: !1, isEncoded: !1 };
        let g = e.replace(h, "");
        if (
          (g.startsWith("<svg") && (g = `data:image/svg+xml;base64,${btoa(g)}`),
          g.startsWith("data:") || g.startsWith("{"))
        )
          return { uri: g, isOnChain: !0, isEncoded: !1 };
        throw new s({ uri: e });
      }
      function y(e) {
        if (
          "object" != typeof e ||
          (!("image" in e) && !("image_url" in e) && !("image_data" in e))
        )
          throw new o({ data: e });
        return e.image || e.image_url || e.image_data;
      }
      async function b({ gatewayUrls: e, uri: t }) {
        try {
          let n = await fetch(t).then((e) => e.json());
          return await g({ gatewayUrls: e, uri: y(n) });
        } catch {
          throw new s({ uri: t });
        }
      }
      async function g({ gatewayUrls: e, uri: t }) {
        let { uri: n, isOnChain: r } = m({ uri: t, gatewayUrls: e });
        if (r || (await f(n))) return n;
        throw new s({ uri: t });
      }
      async function w(e, { nft: t }) {
        if ("erc721" === t.namespace)
          return (0, r.J)(e, {
            address: t.contractAddress,
            abi: [
              {
                name: "tokenURI",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "tokenId", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "tokenURI",
            args: [BigInt(t.tokenID)],
          });
        if ("erc1155" === t.namespace)
          return (0, r.J)(e, {
            address: t.contractAddress,
            abi: [
              {
                name: "uri",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "_id", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "uri",
            args: [BigInt(t.tokenID)],
          });
        throw new c({ namespace: t.namespace });
      }
      async function v(e, { gatewayUrls: t, record: n }) {
        return /eip155:/i.test(n)
          ? A(e, { gatewayUrls: t, record: n })
          : g({ uri: n, gatewayUrls: t });
      }
      async function A(e, { gatewayUrls: t, record: n }) {
        let r = (function (e) {
            let t = e;
            t.startsWith("did:nft:") &&
              (t = t.replace("did:nft:", "").replace(/_/g, "/"));
            let [n, r, i] = t.split("/"),
              [o, s] = n.split(":"),
              [c, l] = r.split(":");
            if (!o || "eip155" !== o.toLowerCase())
              throw new a({ reason: "Only EIP-155 supported" });
            if (!s) throw new a({ reason: "Chain ID not found" });
            if (!l) throw new a({ reason: "Contract address not found" });
            if (!i) throw new a({ reason: "Token ID not found" });
            if (!c) throw new a({ reason: "ERC namespace not found" });
            return {
              chainID: Number.parseInt(s),
              namespace: c.toLowerCase(),
              contractAddress: l,
              tokenID: i,
            };
          })(n),
          {
            uri: i,
            isOnChain: o,
            isEncoded: s,
          } = m({ uri: await w(e, { nft: r }), gatewayUrls: t });
        if (
          o &&
          (i.includes("data:application/json;base64,") || i.startsWith("{"))
        )
          return g({
            uri: y(
              JSON.parse(
                s ? atob(i.replace("data:application/json;base64,", "")) : i
              )
            ),
            gatewayUrls: t,
          });
        let c = r.tokenID;
        return (
          "erc1155" === r.namespace &&
            (c = c.replace("0x", "").padStart(64, "0")),
          b({ gatewayUrls: t, uri: i.replace(/(?:0x)?{id}/, c) })
        );
      }
      var x = n(34524),
        C = n(65830);
      async function E(
        e,
        {
          blockNumber: t,
          blockTag: n,
          assetGatewayUrls: r,
          name: i,
          gatewayUrls: o,
          strict: a,
          universalResolverAddress: s,
        }
      ) {
        let c = await (0, x.T)(
          e,
          C.m,
          "getEnsText"
        )({
          blockNumber: t,
          blockTag: n,
          key: "avatar",
          name: i,
          universalResolverAddress: s,
          gatewayUrls: o,
          strict: a,
        });
        if (!c) return null;
        try {
          return await v(e, { record: c, gatewayUrls: r });
        } catch {
          return null;
        }
      }
    },
    75887: (e, t, n) => {
      "use strict";
      n.d(t, { R: () => h });
      var r = n(5041),
        i = n(77752),
        o = n(90113);
      async function a(e, t) {
        let { addEthereumChainParameter: n, chainId: r } = t,
          a = e.state.connections.get(t.connector?.uid ?? e.state.current);
        if (a) {
          let e = a.connector;
          if (!e.switchChain) throw new o.V({ connector: e });
          return await e.switchChain({
            addEthereumChainParameter: n,
            chainId: r,
          });
        }
        let s = e.chains.find((e) => e.id === r);
        if (!s) throw new i.nk();
        return e.setState((e) => ({ ...e, chainId: r })), s;
      }
      var s = n(34250);
      let c = [];
      function l(e) {
        let t = e.chains;
        return (0, s.b)(c, t) ? c : ((c = t), t);
      }
      var u = n(12115),
        d = n(53031);
      function h() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, d.U)(e),
          i = { mutationFn: (e) => a(n, e), mutationKey: ["switchChain"] },
          { mutate: o, mutateAsync: s, ...c } = (0, r.n)({ ...t, ...i });
        return {
          ...c,
          chains: (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = (0, d.U)(e);
            return (0, u.useSyncExternalStore)(
              (e) =>
                (function (e, t) {
                  let { onChange: n } = t;
                  return e._internal.chains.subscribe((e, t) => {
                    n(e, t);
                  });
                })(t, { onChange: e }),
              () => l(t),
              () => l(t)
            );
          })({ config: n }),
          switchChain: o,
          switchChainAsync: s,
        };
      }
    },
    76743: (e, t, n) => {
      "use strict";
      n.d(t, { Bv: () => o });
      var r = n(67622);
      let i = {
        legacy: "0x0",
        eip2930: "0x1",
        eip1559: "0x2",
        eip4844: "0x3",
        eip7702: "0x4",
      };
      function o(e) {
        let t = {};
        return (
          void 0 !== e.authorizationList &&
            (t.authorizationList = e.authorizationList.map((e) => ({
              address: e.address,
              r: e.r ? (0, r.cK)(BigInt(e.r)) : e.r,
              s: e.s ? (0, r.cK)(BigInt(e.s)) : e.s,
              chainId: (0, r.cK)(e.chainId),
              nonce: (0, r.cK)(e.nonce),
              ...(void 0 !== e.yParity
                ? { yParity: (0, r.cK)(e.yParity) }
                : {}),
              ...(void 0 !== e.v && void 0 === e.yParity
                ? { v: (0, r.cK)(e.v) }
                : {}),
            }))),
          void 0 !== e.accessList && (t.accessList = e.accessList),
          void 0 !== e.blobVersionedHashes &&
            (t.blobVersionedHashes = e.blobVersionedHashes),
          void 0 !== e.blobs &&
            ("string" != typeof e.blobs[0]
              ? (t.blobs = e.blobs.map((e) => (0, r.My)(e)))
              : (t.blobs = e.blobs)),
          void 0 !== e.data && (t.data = e.data),
          void 0 !== e.from && (t.from = e.from),
          void 0 !== e.gas && (t.gas = (0, r.cK)(e.gas)),
          void 0 !== e.gasPrice && (t.gasPrice = (0, r.cK)(e.gasPrice)),
          void 0 !== e.maxFeePerBlobGas &&
            (t.maxFeePerBlobGas = (0, r.cK)(e.maxFeePerBlobGas)),
          void 0 !== e.maxFeePerGas &&
            (t.maxFeePerGas = (0, r.cK)(e.maxFeePerGas)),
          void 0 !== e.maxPriorityFeePerGas &&
            (t.maxPriorityFeePerGas = (0, r.cK)(e.maxPriorityFeePerGas)),
          void 0 !== e.nonce && (t.nonce = (0, r.cK)(e.nonce)),
          void 0 !== e.to && (t.to = e.to),
          void 0 !== e.type && (t.type = i[e.type]),
          void 0 !== e.value && (t.value = (0, r.cK)(e.value)),
          t
        );
      }
    },
    77136: (e, t, n) => {
      "use strict";
      n.d(t, { eL: () => r, pj: () => o, sz: () => i });
      let r = { gwei: 9, wei: 18 },
        i = { ether: -9, wei: 9 },
        o = { ether: -18, gwei: -9 };
    },
    77752: (e, t, n) => {
      "use strict";
      n.d(t, {
        HF: () => l,
        aj: () => s,
        gC: () => a,
        nM: () => o,
        nk: () => i,
        xU: () => c,
      });
      var r = n(95782);
      class i extends r.C {
        constructor() {
          super("Chain not configured."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ChainNotConfiguredError",
            });
        }
      }
      class o extends r.C {
        constructor() {
          super("Connector already connected."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorAlreadyConnectedError",
            });
        }
      }
      class a extends r.C {
        constructor() {
          super("Connector not connected."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorNotConnectedError",
            });
        }
      }
      r.C;
      class s extends r.C {
        constructor({ address: e, connector: t }) {
          super(`Account "${e}" not found for connector "${t.name}".`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorAccountNotFoundError",
            });
        }
      }
      class c extends r.C {
        constructor({ connectionChainId: e, connectorChainId: t }) {
          super(
            `The current chain of the connector (id: ${t}) does not match the connection's chain (id: ${e}).`,
            {
              metaMessages: [
                `Current Chain ID:  ${t}`,
                `Expected Chain ID: ${e}`,
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorChainMismatchError",
            });
        }
      }
      class l extends r.C {
        constructor({ connector: e }) {
          super(`Connector "${e.name}" unavailable while reconnecting.`, {
            details:
              "During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uid`. All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored. This error commonly occurs for connectors that asynchronously inject after reconnection has already started.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorUnavailableReconnectingError",
            });
        }
      }
    },
    78519: (e, t, n) => {
      "use strict";
      function r(
        e,
        { errorInstance: t = Error("timed out"), timeout: n, signal: r }
      ) {
        return new Promise((i, o) => {
          (async () => {
            let a;
            try {
              let s = new AbortController();
              n > 0 &&
                (a = setTimeout(() => {
                  r ? s.abort() : o(t);
                }, n)),
                i(await e({ signal: s?.signal || null }));
            } catch (e) {
              e?.name === "AbortError" && o(t), o(e);
            } finally {
              clearTimeout(a);
            }
          })();
        });
      }
      n.d(t, { w: () => r });
    },
    79183: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (e, t, n) =>
        JSON.stringify(
          e,
          (e, n) => {
            let r = "bigint" == typeof n ? n.toString() : n;
            return "function" == typeof t ? t(e, r) : r;
          },
          n
        );
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
        let i = e * this.size + t;
        (this.data[i] = n), r && (this.reservedBit[i] = !0);
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
    79731: (e, t, n) => {
      "use strict";
      function r(e) {
        return "string" == typeof e[0]
          ? i(e)
          : (function (e) {
              let t = 0;
              for (let n of e) t += n.length;
              let n = new Uint8Array(t),
                r = 0;
              for (let t of e) n.set(t, r), (r += t.length);
              return n;
            })(e);
      }
      function i(e) {
        return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
      }
      n.d(t, { aP: () => i, xW: () => r });
    },
    80844: (e, t, n) => {
      "use strict";
      n.d(t, { Af: () => f, ZJ: () => l, aT: () => h });
      var r = n(7441),
        i = n(32840),
        o = n(36984),
        a = n(27493),
        s = n(67622);
      let c = new TextEncoder();
      function l(e, t = {}) {
        var n, r;
        return "number" == typeof e || "bigint" == typeof e
          ? ((n = e), (r = t), h((0, s.cK)(n, r)))
          : "boolean" == typeof e
          ? (function (e, t = {}) {
              let n = new Uint8Array(1);
              return ((n[0] = Number(e)), "number" == typeof t.size)
                ? ((0, a.Sl)(n, { size: t.size }),
                  (0, o.eV)(n, { size: t.size }))
                : n;
            })(e, t)
          : (0, i.q)(e)
          ? h(e, t)
          : f(e, t);
      }
      let u = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function d(e) {
        return e >= u.zero && e <= u.nine
          ? e - u.zero
          : e >= u.A && e <= u.F
          ? e - (u.A - 10)
          : e >= u.a && e <= u.f
          ? e - (u.a - 10)
          : void 0;
      }
      function h(e, t = {}) {
        let n = e;
        t.size &&
          ((0, a.Sl)(n, { size: t.size }),
          (n = (0, o.eV)(n, { dir: "right", size: t.size })));
        let i = n.slice(2);
        i.length % 2 && (i = `0${i}`);
        let s = i.length / 2,
          c = new Uint8Array(s);
        for (let e = 0, t = 0; e < s; e++) {
          let n = d(i.charCodeAt(t++)),
            o = d(i.charCodeAt(t++));
          if (void 0 === n || void 0 === o)
            throw new r.C(
              `Invalid byte sequence ("${i[t - 2]}${i[t - 1]}" in "${i}").`
            );
          c[e] = 16 * n + o;
        }
        return c;
      }
      function f(e, t = {}) {
        let n = c.encode(e);
        return "number" == typeof t.size
          ? ((0, a.Sl)(n, { size: t.size }),
            (0, o.eV)(n, { dir: "right", size: t.size }))
          : n;
      }
    },
    81379: (e, t, n) => {
      "use strict";
      n.d(t, {
        CL: () => c,
        D5: () => u,
        Di: () => h,
        G1: () => O,
        Gi: () => l,
        L5: () => I,
        MI: () => T,
        RV: () => x,
        Sf: () => A,
        WT: () => B,
        XU: () => s,
        YW: () => m,
        ab: () => y,
        bq: () => d,
        cg: () => P,
        ch: () => E,
        hA: () => f,
        hl: () => k,
        jz: () => M,
        qZ: () => p,
        s0: () => b,
        sV: () => v,
        uL: () => S,
        vx: () => w,
        xQ: () => g,
        xq: () => C,
      });
      var r = n(7441),
        i = n(90557);
      class o extends r.C {
        constructor(
          e,
          { code: t, docsPath: n, metaMessages: r, name: o, shortMessage: a }
        ) {
          super(a, {
            cause: e,
            docsPath: n,
            metaMessages: r || e?.metaMessages,
            name: o || "RpcError",
          }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.name = o || e.name),
            (this.code = e instanceof i.J8 ? e.code : t ?? -1);
        }
      }
      class a extends o {
        constructor(e, t) {
          super(e, t),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = t.data);
        }
      }
      class s extends o {
        constructor(e) {
          super(e, {
            code: s.code,
            name: "ParseRpcError",
            shortMessage:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          });
        }
      }
      Object.defineProperty(s, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32700,
      });
      class c extends o {
        constructor(e) {
          super(e, {
            code: c.code,
            name: "InvalidRequestRpcError",
            shortMessage: "JSON is not a valid request object.",
          });
        }
      }
      Object.defineProperty(c, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32600,
      });
      class l extends o {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: l.code,
            name: "MethodNotFoundRpcError",
            shortMessage: `The method${
              t ? ` "${t}"` : ""
            } does not exist / is not available.`,
          });
        }
      }
      Object.defineProperty(l, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32601,
      });
      class u extends o {
        constructor(e) {
          super(e, {
            code: u.code,
            name: "InvalidParamsRpcError",
            shortMessage:
              "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(u, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32602,
      });
      class d extends o {
        constructor(e) {
          super(e, {
            code: d.code,
            name: "InternalRpcError",
            shortMessage: "An internal error was received.",
          });
        }
      }
      Object.defineProperty(d, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32603,
      });
      class h extends o {
        constructor(e) {
          super(e, {
            code: h.code,
            name: "InvalidInputRpcError",
            shortMessage:
              "Missing or invalid parameters.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(h, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32e3,
      });
      class f extends o {
        constructor(e) {
          super(e, {
            code: f.code,
            name: "ResourceNotFoundRpcError",
            shortMessage: "Requested resource not found.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ResourceNotFoundRpcError",
            });
        }
      }
      Object.defineProperty(f, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32001,
      });
      class p extends o {
        constructor(e) {
          super(e, {
            code: p.code,
            name: "ResourceUnavailableRpcError",
            shortMessage: "Requested resource not available.",
          });
        }
      }
      Object.defineProperty(p, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32002,
      });
      class m extends o {
        constructor(e) {
          super(e, {
            code: m.code,
            name: "TransactionRejectedRpcError",
            shortMessage: "Transaction creation failed.",
          });
        }
      }
      Object.defineProperty(m, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32003,
      });
      class y extends o {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: y.code,
            name: "MethodNotSupportedRpcError",
            shortMessage: `Method${t ? ` "${t}"` : ""} is not supported.`,
          });
        }
      }
      Object.defineProperty(y, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32004,
      });
      class b extends o {
        constructor(e) {
          super(e, {
            code: b.code,
            name: "LimitExceededRpcError",
            shortMessage: "Request exceeds defined limit.",
          });
        }
      }
      Object.defineProperty(b, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32005,
      });
      class g extends o {
        constructor(e) {
          super(e, {
            code: g.code,
            name: "JsonRpcVersionUnsupportedError",
            shortMessage: "Version of JSON-RPC protocol is not supported.",
          });
        }
      }
      Object.defineProperty(g, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32006,
      });
      class w extends a {
        constructor(e) {
          super(e, {
            code: w.code,
            name: "UserRejectedRequestError",
            shortMessage: "User rejected the request.",
          });
        }
      }
      Object.defineProperty(w, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4001,
      });
      class v extends a {
        constructor(e) {
          super(e, {
            code: v.code,
            name: "UnauthorizedProviderError",
            shortMessage:
              "The requested method and/or account has not been authorized by the user.",
          });
        }
      }
      Object.defineProperty(v, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4100,
      });
      class A extends a {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: A.code,
            name: "UnsupportedProviderMethodError",
            shortMessage: `The Provider does not support the requested method${
              t ? ` " ${t}"` : ""
            }.`,
          });
        }
      }
      Object.defineProperty(A, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4200,
      });
      class x extends a {
        constructor(e) {
          super(e, {
            code: x.code,
            name: "ProviderDisconnectedError",
            shortMessage: "The Provider is disconnected from all chains.",
          });
        }
      }
      Object.defineProperty(x, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4900,
      });
      class C extends a {
        constructor(e) {
          super(e, {
            code: C.code,
            name: "ChainDisconnectedError",
            shortMessage:
              "The Provider is not connected to the requested chain.",
          });
        }
      }
      Object.defineProperty(C, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4901,
      });
      class E extends a {
        constructor(e) {
          super(e, {
            code: E.code,
            name: "SwitchChainError",
            shortMessage: "An error occurred when attempting to switch chain.",
          });
        }
      }
      Object.defineProperty(E, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4902,
      });
      class I extends a {
        constructor(e) {
          super(e, {
            code: I.code,
            name: "UnsupportedNonOptionalCapabilityError",
            shortMessage:
              "This Wallet does not support a capability that was not marked as optional.",
          });
        }
      }
      Object.defineProperty(I, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5700,
      });
      class B extends a {
        constructor(e) {
          super(e, {
            code: B.code,
            name: "UnsupportedChainIdError",
            shortMessage:
              "This Wallet does not support the requested chain ID.",
          });
        }
      }
      Object.defineProperty(B, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5710,
      });
      class k extends a {
        constructor(e) {
          super(e, {
            code: k.code,
            name: "DuplicateIdError",
            shortMessage: "There is already a bundle submitted with this ID.",
          });
        }
      }
      Object.defineProperty(k, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5720,
      });
      class P extends a {
        constructor(e) {
          super(e, {
            code: P.code,
            name: "UnknownBundleIdError",
            shortMessage: "This bundle id is unknown / has not been submitted",
          });
        }
      }
      Object.defineProperty(P, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5730,
      });
      class S extends a {
        constructor(e) {
          super(e, {
            code: S.code,
            name: "BundleTooLargeError",
            shortMessage:
              "The call bundle is too large for the Wallet to process.",
          });
        }
      }
      Object.defineProperty(S, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5740,
      });
      class O extends a {
        constructor(e) {
          super(e, {
            code: O.code,
            name: "AtomicReadyWalletRejectedUpgradeError",
            shortMessage:
              "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade.",
          });
        }
      }
      Object.defineProperty(O, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5750,
      });
      class M extends a {
        constructor(e) {
          super(e, {
            code: M.code,
            name: "AtomicityNotSupportedError",
            shortMessage:
              "The wallet does not support atomic execution but the request requires it.",
          });
        }
      }
      Object.defineProperty(M, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5760,
      });
      class T extends o {
        constructor(e) {
          super(e, {
            name: "UnknownRpcError",
            shortMessage: "An unknown RPC error occurred.",
          });
        }
      }
    },
    81685: (e, t) => {
      let n = "[0-9]+",
        r =
          "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
        i =
          "(?:(?![A-Z0-9 $%*+\\-./:]|" +
          (r = r.replace(/u/g, "\\u")) +
          ")(?:.|[\r\n]))+";
      (t.KANJI = RegExp(r, "g")),
        (t.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
        (t.BYTE = RegExp(i, "g")),
        (t.NUMERIC = RegExp(n, "g")),
        (t.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g"));
      let o = RegExp("^" + r + "$"),
        a = RegExp("^" + n + "$"),
        s = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      (t.testKanji = function (e) {
        return o.test(e);
      }),
        (t.testNumeric = function (e) {
          return a.test(e);
        }),
        (t.testAlphanumeric = function (e) {
          return s.test(e);
        });
    },
    81757: (e, t, n) => {
      "use strict";
      n.d(t, { P: () => s });
      var r = n(65003),
        i = n(35883);
      let o = /^0x[a-fA-F0-9]{40}$/,
        a = new r.A(8192);
      function s(e, t) {
        let { strict: n = !0 } = t ?? {},
          r = `${e}.${n}`;
        if (a.has(r)) return a.get(r);
        let s =
          !!o.test(e) && (e.toLowerCase() === e || !n || (0, i.o)(e) === e);
        return a.set(r, s), s;
      }
    },
    81946: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => I });
      var r = n(17130),
        i = n(38958),
        o = n(27442);
      function a(e) {
        let t = (0, i.e)(e),
          n = [],
          a = e.length;
        for (let i = 0; i < a; i++) {
          let a = e[i];
          (0, r.WL)(a) || n.push((0, o.uT)(a, t));
        }
        return n;
      }
      var s = n(35791),
        c = n(19405),
        l = n(14493),
        u = n(15313),
        d = n(7441),
        h = n(30445),
        f = n(35109),
        p = n(69330),
        m = n(20760),
        y = n(60367),
        b = n(13861),
        g = n(67622),
        w = n(23360),
        v = n(7671),
        A = n(76743),
        x = n(85569),
        C = n(25507),
        E = n(65358);
      async function I(e, t) {
        let {
            account: r = e.account,
            batch: i = !!e.batch?.multicall,
            blockNumber: o,
            blockTag: l = "latest",
            accessList: p,
            blobs: y,
            blockOverrides: b,
            code: x,
            data: I,
            factory: k,
            factoryData: P,
            gas: S,
            gasPrice: O,
            maxFeePerBlobGas: M,
            maxFeePerGas: T,
            maxPriorityFeePerGas: R,
            nonce: N,
            to: F,
            value: U,
            stateOverride: j,
            ...D
          } = t,
          L = r ? (0, c.J)(r) : void 0;
        if (x && (k || P))
          throw new d.C(
            "Cannot provide both `code` & `factory`/`factoryData` as parameters."
          );
        if (x && F)
          throw new d.C("Cannot provide both `code` & `to` as parameters.");
        let q = x && I,
          Q = k && P && F && I,
          W = q || Q,
          z = q
            ? (function (e) {
                let { code: t, data: n } = e;
                return (0, m.m)({
                  abi: a(["constructor(bytes, bytes)"]),
                  bytecode: u.LX,
                  args: [t, n],
                });
              })({ code: x, data: I })
            : Q
            ? (function (e) {
                let { data: t, factory: n, factoryData: r, to: i } = e;
                return (0, m.m)({
                  abi: a(["constructor(address, bytes, address, bytes)"]),
                  bytecode: u.WN,
                  args: [i, t, n, r],
                });
              })({ data: I, factory: k, factoryData: P, to: F })
            : I;
        try {
          (0, E.c)(t);
          let n = ("bigint" == typeof o ? (0, g.cK)(o) : void 0) || l,
            r = b ? s.J(b) : void 0,
            a = (0, C.yH)(j),
            c = e.chain?.formatters?.transactionRequest?.format,
            u = (c || A.Bv)({
              ...(0, v.o)(D, { format: c }),
              from: L?.address,
              accessList: p,
              blobs: y,
              data: z,
              gas: S,
              gasPrice: O,
              maxFeePerBlobGas: M,
              maxFeePerGas: T,
              maxPriorityFeePerGas: R,
              nonce: N,
              to: W ? void 0 : F,
              value: U,
            });
          if (
            i &&
            (function ({ request: e }) {
              let { data: t, to: n, ...r } = e;
              return (
                !(!t || t.startsWith("0x82ad56cb")) &&
                !!n &&
                !(Object.values(r).filter((e) => void 0 !== e).length > 0)
              );
            })({ request: u }) &&
            !a &&
            !r
          )
            try {
              return await B(e, { ...u, blockNumber: o, blockTag: l });
            } catch (e) {
              if (!(e instanceof h.YE) && !(e instanceof h.rj)) throw e;
            }
          let d = (() => {
              let e = [u, n];
              return a && r
                ? [...e, a, r]
                : a
                ? [...e, a]
                : r
                ? [...e, {}, r]
                : e;
            })(),
            f = await e.request({ method: "eth_call", params: d });
          if ("0x" === f) return { data: void 0 };
          return { data: f };
        } catch (a) {
          let r = (function (e) {
              if (!(e instanceof d.C)) return;
              let t = e.walk();
              return "object" == typeof t?.data ? t.data?.data : t.data;
            })(a),
            { offchainLookup: i, offchainLookupSignature: o } = await n
              .e(1026)
              .then(n.bind(n, 31026));
          if (!1 !== e.ccipRead && r?.slice(0, 10) === o && F)
            return { data: await i(e, { data: r, to: F }) };
          if (W && r?.slice(0, 10) === "0x101bb98d")
            throw new f.Po({ factory: k });
          throw (0, w.d)(a, { ...t, account: L, chain: e.chain });
        }
      }
      async function B(e, t) {
        let { batchSize: n = 1024, wait: r = 0 } =
            "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
          {
            blockNumber: i,
            blockTag: o = "latest",
            data: a,
            multicallAddress: s,
            to: c,
          } = t,
          u = s;
        if (!u) {
          if (!e.chain) throw new h.YE();
          u = (0, b.M)({
            blockNumber: i,
            chain: e.chain,
            contract: "multicall3",
          });
        }
        let d = ("bigint" == typeof i ? (0, g.cK)(i) : void 0) || o,
          { schedule: m } = (0, x.u)({
            id: `${e.uid}.${d}`,
            wait: r,
            shouldSplitBatch: (e) =>
              e.reduce((e, { data: t }) => e + (t.length - 2), 0) > 2 * n,
            fn: async (t) => {
              let n = t.map((e) => ({
                  allowFailure: !0,
                  callData: e.data,
                  target: e.to,
                })),
                r = (0, y.p)({
                  abi: l.v2,
                  args: [n],
                  functionName: "aggregate3",
                }),
                i = await e.request({
                  method: "eth_call",
                  params: [{ data: r, to: u }, d],
                });
              return (0, p.e)({
                abi: l.v2,
                args: [n],
                functionName: "aggregate3",
                data: i || "0x",
              });
            },
          }),
          [{ returnData: w, success: v }] = await m({ data: a, to: c });
        if (!v) throw new f.$S({ data: w });
        return "0x" === w ? { data: void 0 } : { data: w };
      }
    },
    82661: (e) => {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        n = "~";
      function r() {}
      function i(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function o(e, t, r, o, a) {
        if ("function" != typeof r)
          throw TypeError("The listener must be a function");
        var s = new i(r, o || e, a),
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
            i = [];
          if (0 === this._eventsCount) return i;
          for (r in (e = this._events))
            t.call(e, r) && i.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols
            ? i.concat(Object.getOwnPropertySymbols(e))
            : i;
        }),
        (s.prototype.listeners = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var i = 0, o = r.length, a = Array(o); i < o; i++)
            a[i] = r[i].fn;
          return a;
        }),
        (s.prototype.listenerCount = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (s.prototype.emit = function (e, t, r, i, o, a) {
          var s = n ? n + e : e;
          if (!this._events[s]) return !1;
          var c,
            l,
            u = this._events[s],
            d = arguments.length;
          if (u.fn) {
            switch ((u.once && this.removeListener(e, u.fn, void 0, !0), d)) {
              case 1:
                return u.fn.call(u.context), !0;
              case 2:
                return u.fn.call(u.context, t), !0;
              case 3:
                return u.fn.call(u.context, t, r), !0;
              case 4:
                return u.fn.call(u.context, t, r, i), !0;
              case 5:
                return u.fn.call(u.context, t, r, i, o), !0;
              case 6:
                return u.fn.call(u.context, t, r, i, o, a), !0;
            }
            for (l = 1, c = Array(d - 1); l < d; l++) c[l - 1] = arguments[l];
            u.fn.apply(u.context, c);
          } else {
            var h,
              f = u.length;
            for (l = 0; l < f; l++)
              switch (
                (u[l].once && this.removeListener(e, u[l].fn, void 0, !0), d)
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
                  u[l].fn.call(u[l].context, t, r, i);
                  break;
                default:
                  if (!c)
                    for (h = 1, c = Array(d - 1); h < d; h++)
                      c[h - 1] = arguments[h];
                  u[l].fn.apply(u[l].context, c);
              }
          }
          return !0;
        }),
        (s.prototype.on = function (e, t, n) {
          return o(this, e, t, n, !1);
        }),
        (s.prototype.once = function (e, t, n) {
          return o(this, e, t, n, !0);
        }),
        (s.prototype.removeListener = function (e, t, r, i) {
          var o = n ? n + e : e;
          if (!this._events[o]) return this;
          if (!t) return a(this, o), this;
          var s = this._events[o];
          if (s.fn)
            s.fn !== t ||
              (i && !s.once) ||
              (r && s.context !== r) ||
              a(this, o);
          else {
            for (var c = 0, l = [], u = s.length; c < u; c++)
              (s[c].fn !== t ||
                (i && !s[c].once) ||
                (r && s[c].context !== r)) &&
                l.push(s[c]);
            l.length
              ? (this._events[o] = 1 === l.length ? l[0] : l)
              : a(this, o);
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
    83415: (e, t, n) => {
      "use strict";
      n.d(t, { R: () => s, x: () => c });
      var r = n(12115);
      let i = !1;
      async function o(e, t = {}) {
        let n;
        if (i) return [];
        (i = !0),
          e.setState((e) => ({
            ...e,
            status: e.current ? "reconnecting" : "connecting",
          }));
        let r = [];
        if (t.connectors?.length)
          for (let n of t.connectors) {
            let t;
            (t = "function" == typeof n ? e._internal.connectors.setup(n) : n),
              r.push(t);
          }
        else r.push(...e.connectors);
        try {
          n = await e.storage?.getItem("recentConnectorId");
        } catch {}
        let a = {};
        for (let [, t] of e.state.connections) a[t.connector.id] = 1;
        n && (a[n] = 0);
        let s =
            Object.keys(a).length > 0
              ? [...r].sort((e, t) => (a[e.id] ?? 10) - (a[t.id] ?? 10))
              : r,
          c = !1,
          l = [],
          u = [];
        for (let t of s) {
          let n = await t.getProvider().catch(() => void 0);
          if (!n || u.some((e) => e === n) || !(await t.isAuthorized()))
            continue;
          let r = await t.connect({ isReconnecting: !0 }).catch(() => null);
          r &&
            (t.emitter.off("connect", e._internal.events.connect),
            t.emitter.on("change", e._internal.events.change),
            t.emitter.on("disconnect", e._internal.events.disconnect),
            e.setState((e) => {
              let n = new Map(c ? e.connections : new Map()).set(t.uid, {
                accounts: r.accounts,
                chainId: r.chainId,
                connector: t,
              });
              return { ...e, current: c ? e.current : t.uid, connections: n };
            }),
            l.push({ accounts: r.accounts, chainId: r.chainId, connector: t }),
            u.push(n),
            (c = !0));
        }
        return (
          ("reconnecting" === e.state.status ||
            "connecting" === e.state.status) &&
            (c
              ? e.setState((e) => ({ ...e, status: "connected" }))
              : e.setState((e) => ({
                  ...e,
                  connections: new Map(),
                  current: null,
                  status: "disconnected",
                }))),
          (i = !1),
          l
        );
      }
      function a(e) {
        let {
            children: t,
            config: n,
            initialState: i,
            reconnectOnMount: a = !0,
          } = e,
          { onMount: s } = (function (e, t) {
            let { initialState: n, reconnectOnMount: r } = t;
            return (
              n &&
                !e._internal.store.persist.hasHydrated() &&
                e.setState({
                  ...n,
                  chainId: e.chains.some((e) => e.id === n.chainId)
                    ? n.chainId
                    : e.chains[0].id,
                  connections: r ? n.connections : new Map(),
                  status: r ? "reconnecting" : "disconnected",
                }),
              {
                async onMount() {
                  e._internal.ssr &&
                    (await e._internal.store.persist.rehydrate(),
                    e._internal.mipd &&
                      e._internal.connectors.setState((t) => {
                        let n = new Set();
                        for (let e of t ?? [])
                          if (e.rdns)
                            for (let t of Array.isArray(e.rdns)
                              ? e.rdns
                              : [e.rdns])
                              n.add(t);
                        let r = [];
                        for (let t of e._internal.mipd?.getProviders() ?? []) {
                          if (n.has(t.info.rdns)) continue;
                          let i =
                              e._internal.connectors.providerDetailToConnector(
                                t
                              ),
                            o = e._internal.connectors.setup(i);
                          r.push(o);
                        }
                        return [...t, ...r];
                      })),
                    r
                      ? o(e)
                      : e.storage &&
                        e.setState((e) => ({ ...e, connections: new Map() }));
                },
              }
            );
          })(n, { initialState: i, reconnectOnMount: a });
        n._internal.ssr || s();
        let c = (0, r.useRef)(!0);
        return (
          (0, r.useEffect)(() => {
            if (c.current && n._internal.ssr)
              return (
                s(),
                () => {
                  c.current = !1;
                }
              );
          }, []),
          t
        );
      }
      let s = (0, r.createContext)(void 0);
      function c(e) {
        let { children: t, config: n } = e;
        return (0, r.createElement)(
          a,
          e,
          (0, r.createElement)(s.Provider, { value: n }, t)
        );
      }
    },
    84701: (e, t, n) => {
      "use strict";
      n.d(t, { UG: () => a, xo: () => i, zz: () => o });
      var r = n(68321);
      class i extends r.C {
        constructor({ signature: e }) {
          super("Failed to parse ABI item.", {
            details: `parseAbiItem(${JSON.stringify(e, null, 2)})`,
            docsPath: "/api/human#parseabiitem-1",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiItemError",
            });
        }
      }
      class o extends r.C {
        constructor({ type: e }) {
          super("Unknown type.", {
            metaMessages: [
              `Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownTypeError",
            });
        }
      }
      class a extends r.C {
        constructor({ type: e }) {
          super("Unknown type.", {
            metaMessages: [`Type "${e}" is not a valid ABI type.`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownSolidityTypeError",
            });
        }
      }
    },
    85569: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => o });
      var r = n(62739);
      let i = new Map();
      function o({ fn: e, id: t, shouldSplitBatch: n, wait: o = 0, sort: a }) {
        let s = async () => {
            let t = u();
            c();
            let n = t.map(({ args: e }) => e);
            0 !== n.length &&
              e(n)
                .then((e) => {
                  a && Array.isArray(e) && e.sort(a);
                  for (let n = 0; n < t.length; n++) {
                    let { resolve: r } = t[n];
                    r?.([e[n], e]);
                  }
                })
                .catch((e) => {
                  for (let n = 0; n < t.length; n++) {
                    let { reject: r } = t[n];
                    r?.(e);
                  }
                });
          },
          c = () => i.delete(t),
          l = () => u().map(({ args: e }) => e),
          u = () => i.get(t) || [],
          d = (e) => i.set(t, [...u(), e]);
        return {
          flush: c,
          async schedule(e) {
            let { promise: t, resolve: i, reject: a } = (0, r.Y)();
            return (
              (n?.([...l(), e]) && s(), u().length > 0)
                ? d({ args: e, resolve: i, reject: a })
                : (d({ args: e, resolve: i, reject: a }), setTimeout(s, o)),
              t
            );
          },
        };
      }
    },
    86205: (e, t, n) => {
      "use strict";
      n.d(t, {
        Ej: () => y,
        Fl: () => C,
        Ho: () => f,
        M7: () => p,
        Ty: () => g,
        di: () => m,
        ii: () => x,
        oB: () => d,
        sH: () => h,
        tf: () => b,
        u: () => A,
        uK: () => u,
        xW: () => c,
        xb: () => l,
      });
      var r = n(28452),
        i = n(97486),
        o = n(93587);
      let a = new TextEncoder(),
        s = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function c(...e) {
        return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
      }
      function l(e, t = {}) {
        let n = `0x${Number(e)}`;
        return "number" == typeof t.size ? (o.Sl(n, t.size), f(n, t.size)) : n;
      }
      function u(e, t = {}) {
        let n = "";
        for (let t = 0; t < e.length; t++) n += s[e[t]];
        let r = `0x${n}`;
        return "number" == typeof t.size ? (o.Sl(r, t.size), p(r, t.size)) : r;
      }
      function d(e, t = {}) {
        let n,
          { signed: r, size: i } = t,
          o = BigInt(e);
        i
          ? (n = r
              ? (1n << (8n * BigInt(i) - 1n)) - 1n
              : 2n ** (8n * BigInt(i)) - 1n)
          : "number" == typeof e && (n = BigInt(Number.MAX_SAFE_INTEGER));
        let a = "bigint" == typeof n && r ? -n - 1n : 0;
        if ((n && o > n) || o < a) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new g({
            max: n ? `${n}${t}` : void 0,
            min: `${a}${t}`,
            signed: r,
            size: i,
            value: `${e}${t}`,
          });
        }
        let s = (r && o < 0 ? (1n << BigInt(8 * i)) + BigInt(o) : o).toString(
            16
          ),
          c = `0x${s}`;
        return i ? f(c, i) : c;
      }
      function h(e, t = {}) {
        return u(a.encode(e), t);
      }
      function f(e, t) {
        return o.eV(e, { dir: "left", size: t });
      }
      function p(e, t) {
        return o.eV(e, { dir: "right", size: t });
      }
      function m(e, t, n, r = {}) {
        let { strict: i } = r;
        o.kK(e, t);
        let a = `0x${e
          .replace("0x", "")
          .slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
        return i && o.X(a, t, n), a;
      }
      function y(e) {
        return Math.ceil((e.length - 2) / 2);
      }
      function b(e, t = {}) {
        let { strict: n = !1 } = t;
        try {
          return (
            !(function (e, t = {}) {
              let { strict: n = !1 } = t;
              if (!e || "string" != typeof e) throw new w(e);
              if ((n && !/^0x[0-9a-fA-F]*$/.test(e)) || !e.startsWith("0x"))
                throw new v(e);
            })(e, { strict: n }),
            !0
          );
        } catch {
          return !1;
        }
      }
      class g extends r.C {
        constructor({ max: e, min: t, signed: n, size: r, value: i }) {
          super(
            `Number \`${i}\` is not in safe${r ? ` ${8 * r}-bit` : ""}${
              n ? " signed" : " unsigned"
            } integer range ${
              e ? `(\`${t}\` to \`${e}\`)` : `(above \`${t}\`)`
            }`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.IntegerOutOfRangeError",
            });
        }
      }
      r.C;
      class w extends r.C {
        constructor(e) {
          super(
            `Value \`${
              "object" == typeof e ? i.A(e) : e
            }\` of type \`${typeof e}\` is an invalid hex type.`,
            {
              metaMessages: [
                'Hex types must be represented as `"0x${string}"`.',
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.InvalidHexTypeError",
            });
        }
      }
      class v extends r.C {
        constructor(e) {
          super(`Value \`${e}\` is an invalid hex value.`, {
            metaMessages: [
              'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).',
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.InvalidHexValueError",
            });
        }
      }
      r.C;
      class A extends r.C {
        constructor({ givenSize: e, maxSize: t }) {
          super(
            `Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeOverflowError",
            });
        }
      }
      class x extends r.C {
        constructor({ offset: e, position: t, size: n }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset \`${e}\` is out-of-bounds (size: \`${n}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SliceOffsetOutOfBoundsError",
            });
        }
      }
      class C extends r.C {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeExceedsPaddingSizeError",
            });
        }
      }
    },
    87094: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => i });
      var r = n(32840);
      function i(e) {
        return (0, r.q)(e, { strict: !1 })
          ? Math.ceil((e.length - 2) / 2)
          : e.length;
      }
    },
    87332: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => a });
      var r = n(87660),
        i = n(12115),
        o = n(53031);
      function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { onConnect: t, onDisconnect: n } = e,
          a = (0, o.U)(e);
        (0, i.useEffect)(
          () =>
            (0, r.F)(a, {
              onChange(e, r) {
                if (
                  ("reconnecting" === r.status ||
                    ("connecting" === r.status && void 0 === r.address)) &&
                  "connected" === e.status
                ) {
                  let {
                      address: n,
                      addresses: i,
                      chain: o,
                      chainId: a,
                      connector: s,
                    } = e,
                    c = "reconnecting" === r.status || void 0 === r.status;
                  null == t ||
                    t({
                      address: n,
                      addresses: i,
                      chain: o,
                      chainId: a,
                      connector: s,
                      isReconnected: c,
                    });
                } else
                  "connected" === r.status &&
                    "disconnected" === e.status &&
                    (null == n || n());
              },
            }),
          [a, t, n]
        );
      }
    },
    87456: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => o });
      var r = n(97118);
      let i = {
        bytes: new Uint8Array(),
        dataView: new DataView(new ArrayBuffer(0)),
        position: 0,
        positionReadCount: new Map(),
        recursiveReadCount: 0,
        recursiveReadLimit: Number.POSITIVE_INFINITY,
        assertReadLimit() {
          if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new r.hX({
              count: this.recursiveReadCount + 1,
              limit: this.recursiveReadLimit,
            });
        },
        assertPosition(e) {
          if (e < 0 || e > this.bytes.length - 1)
            throw new r.SK({ length: this.bytes.length, position: e });
        },
        decrementPosition(e) {
          if (e < 0) throw new r.B4({ offset: e });
          let t = this.position - e;
          this.assertPosition(t), (this.position = t);
        },
        getReadCount(e) {
          return this.positionReadCount.get(e || this.position) || 0;
        },
        incrementPosition(e) {
          if (e < 0) throw new r.B4({ offset: e });
          let t = this.position + e;
          this.assertPosition(t), (this.position = t);
        },
        inspectByte(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectBytes(e, t) {
          let n = t ?? this.position;
          return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e);
        },
        inspectUint8(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectUint16(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 1), this.dataView.getUint16(t);
        },
        inspectUint24(e) {
          let t = e ?? this.position;
          return (
            this.assertPosition(t + 2),
            (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
          );
        },
        inspectUint32(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 3), this.dataView.getUint32(t);
        },
        pushByte(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushBytes(e) {
          this.assertPosition(this.position + e.length - 1),
            this.bytes.set(e, this.position),
            (this.position += e.length);
        },
        pushUint8(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushUint16(e) {
          this.assertPosition(this.position + 1),
            this.dataView.setUint16(this.position, e),
            (this.position += 2);
        },
        pushUint24(e) {
          this.assertPosition(this.position + 2),
            this.dataView.setUint16(this.position, e >> 8),
            this.dataView.setUint8(this.position + 2, 255 & e),
            (this.position += 3);
        },
        pushUint32(e) {
          this.assertPosition(this.position + 3),
            this.dataView.setUint32(this.position, e),
            (this.position += 4);
        },
        readByte() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectByte();
          return this.position++, e;
        },
        readBytes(e, t) {
          this.assertReadLimit(), this._touch();
          let n = this.inspectBytes(e);
          return (this.position += t ?? e), n;
        },
        readUint8() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint8();
          return (this.position += 1), e;
        },
        readUint16() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint16();
          return (this.position += 2), e;
        },
        readUint24() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint24();
          return (this.position += 3), e;
        },
        readUint32() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint32();
          return (this.position += 4), e;
        },
        get remaining() {
          return this.bytes.length - this.position;
        },
        setPosition(e) {
          let t = this.position;
          return (
            this.assertPosition(e),
            (this.position = e),
            () => (this.position = t)
          );
        },
        _touch() {
          if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
          let e = this.getReadCount();
          this.positionReadCount.set(this.position, e + 1),
            e > 0 && this.recursiveReadCount++;
        },
      };
      function o(e, { recursiveReadLimit: t = 8192 } = {}) {
        let n = Object.create(i);
        return (
          (n.bytes = e),
          (n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
          (n.positionReadCount = new Map()),
          (n.recursiveReadLimit = t),
          n
        );
      }
    },
    87487: (e, t, n) => {
      let r = n(43585);
      function i(e) {
        (this.mode = r.BYTE),
          "string" == typeof e
            ? (this.data = new TextEncoder().encode(e))
            : (this.data = new Uint8Array(e));
      }
      (i.getBitsLength = function (e) {
        return 8 * e;
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (e) {
          for (let t = 0, n = this.data.length; t < n; t++)
            e.put(this.data[t], 8);
        }),
        (e.exports = i);
    },
    87660: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => o });
      var r = n(34250),
        i = n(64997);
      function o(e, t) {
        let { onChange: n } = t;
        return e.subscribe(() => (0, i.s)(e), n, {
          equalityFn(e, t) {
            let { connector: n, ...i } = e,
              { connector: o, ...a } = t;
            return (0, r.b)(i, a) && n?.id === o?.id && n?.uid === o?.uid;
          },
        });
      }
    },
    88252: (e, t, n) => {
      let r = n(46087),
        i = r.getBCHDigit(1335);
      t.getEncodedBits = function (e, t) {
        let n = (e.bit << 3) | t,
          o = n << 10;
        for (; r.getBCHDigit(o) - i >= 0; ) o ^= 1335 << (r.getBCHDigit(o) - i);
        return ((n << 10) | o) ^ 21522;
      };
    },
    90113: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => i, V: () => o });
      var r = n(95782);
      class i extends r.C {
        constructor() {
          super("Provider not found."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ProviderNotFoundError",
            });
        }
      }
      class o extends r.C {
        constructor({ connector: e }) {
          super(`"${e.name}" does not support programmatic chain switching.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SwitchChainNotSupportedError",
            });
        }
      }
    },
    90557: (e, t, n) => {
      "use strict";
      n.d(t, { Ci: () => a, J8: () => s, MU: () => c });
      var r = n(79183),
        i = n(7441),
        o = n(41514);
      class a extends i.C {
        constructor({
          body: e,
          cause: t,
          details: n,
          headers: i,
          status: a,
          url: s,
        }) {
          super("HTTP request failed.", {
            cause: t,
            details: n,
            metaMessages: [
              a && `Status: ${a}`,
              `URL: ${(0, o.I)(s)}`,
              e && `Request body: ${(0, r.A)(e)}`,
            ].filter(Boolean),
            name: "HttpRequestError",
          }),
            Object.defineProperty(this, "body", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "headers", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "status", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "url", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.body = e),
            (this.headers = i),
            (this.status = a),
            (this.url = s);
        }
      }
      i.C;
      class s extends i.C {
        constructor({ body: e, error: t, url: n }) {
          super("RPC Request failed.", {
            cause: t,
            details: t.message,
            metaMessages: [
              `URL: ${(0, o.I)(n)}`,
              `Request body: ${(0, r.A)(e)}`,
            ],
            name: "RpcRequestError",
          }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.code = t.code),
            (this.data = t.data);
        }
      }
      i.C;
      class c extends i.C {
        constructor({ body: e, url: t }) {
          super("The request took too long to respond.", {
            details: "The request timed out.",
            metaMessages: [
              `URL: ${(0, o.I)(t)}`,
              `Request body: ${(0, r.A)(e)}`,
            ],
            name: "TimeoutError",
          });
        }
      }
    },
    91640: (e, t, n) => {
      let r = n(57354);
      (t.mul = function (e, t) {
        let n = new Uint8Array(e.length + t.length - 1);
        for (let i = 0; i < e.length; i++)
          for (let o = 0; o < t.length; o++) n[i + o] ^= r.mul(e[i], t[o]);
        return n;
      }),
        (t.mod = function (e, t) {
          let n = new Uint8Array(e);
          for (; n.length - t.length >= 0; ) {
            let e = n[0];
            for (let i = 0; i < t.length; i++) n[i] ^= r.mul(t[i], e);
            let i = 0;
            for (; i < n.length && 0 === n[i]; ) i++;
            n = n.slice(i);
          }
          return n;
        }),
        (t.generateECPolynomial = function (e) {
          let n = new Uint8Array([1]);
          for (let i = 0; i < e; i++)
            n = t.mul(n, new Uint8Array([1, r.exp(i)]));
          return n;
        });
    },
    92966: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => l });
      var r = n(75794),
        i = n(70030),
        o = n(62108),
        a = n(43484),
        s = n(18224),
        c = n(53031);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { name: l, query: u = {} } = n,
          d = (0, c.U)(n),
          h = (0, s.i)({ config: d }),
          f = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { name: n, scopeKey: o, ...a } = t[1];
                if (!n) throw Error("name is required");
                let { chainId: s, ...c } = { ...a, name: n },
                  l = e.getClient({ chainId: s });
                return (0, i.T)(l, r.i, "getEnsAvatar")(c);
              },
              queryKey: (function (e = {}) {
                return ["ensAvatar", (0, o.xO)(e)];
              })(t),
            };
          })(d, { ...n, chainId: null != (e = n.chainId) ? e : h }),
          p = !!(l && (null == (t = u.enabled) || t));
        return (0, a.IT)({ ...u, ...f, enabled: p });
      }
    },
    93587: (e, t, n) => {
      "use strict";
      n.d(t, { Sl: () => i, X: () => a, eV: () => s, kK: () => o });
      var r = n(86205);
      function i(e, t) {
        if (r.Ej(e) > t) throw new r.u({ givenSize: r.Ej(e), maxSize: t });
      }
      function o(e, t) {
        if ("number" == typeof t && t > 0 && t > r.Ej(e) - 1)
          throw new r.ii({ offset: t, position: "start", size: r.Ej(e) });
      }
      function a(e, t, n) {
        if ("number" == typeof t && "number" == typeof n && r.Ej(e) !== n - t)
          throw new r.ii({ offset: n, position: "end", size: r.Ej(e) });
      }
      function s(e, t = {}) {
        let { dir: n, size: i = 32 } = t;
        if (0 === i) return e;
        let o = e.replace("0x", "");
        if (o.length > 2 * i)
          throw new r.Fl({
            size: Math.ceil(o.length / 2),
            targetSize: i,
            type: "Hex",
          });
        return `0x${o["right" === n ? "padEnd" : "padStart"](2 * i, "0")}`;
      }
    },
    93727: (e, t, n) => {
      "use strict";
      n.d(t, { A1: () => l, di: () => a, iN: () => u });
      var r = n(58980),
        i = n(32840),
        o = n(87094);
      function a(e, t, n, { strict: r } = {}) {
        return (0, i.q)(e, { strict: !1 })
          ? u(e, t, n, { strict: r })
          : l(e, t, n, { strict: r });
      }
      function s(e, t) {
        if ("number" == typeof t && t > 0 && t > (0, o.E)(e) - 1)
          throw new r.ii({ offset: t, position: "start", size: (0, o.E)(e) });
      }
      function c(e, t, n) {
        if (
          "number" == typeof t &&
          "number" == typeof n &&
          (0, o.E)(e) !== n - t
        )
          throw new r.ii({ offset: n, position: "end", size: (0, o.E)(e) });
      }
      function l(e, t, n, { strict: r } = {}) {
        s(e, t);
        let i = e.slice(t, n);
        return r && c(i, t, n), i;
      }
      function u(e, t, n, { strict: r } = {}) {
        s(e, t);
        let i = `0x${e
          .replace("0x", "")
          .slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
        return r && c(i, t, n), i;
      }
    },
    94201: (e, t, n) => {
      "use strict";
      n.d(t, { H2: () => a, Ty: () => i, u: () => s, xO: () => o });
      var r = n(7441);
      class i extends r.C {
        constructor({ max: e, min: t, signed: n, size: r, value: i }) {
          super(
            `Number "${i}" is not in safe ${
              r ? `${8 * r}-bit ${n ? "signed" : "unsigned"} ` : ""
            }integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`,
            { name: "IntegerOutOfRangeError" }
          );
        }
      }
      class o extends r.C {
        constructor(e) {
          super(
            `Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,
            { name: "InvalidBytesBooleanError" }
          );
        }
      }
      class a extends r.C {
        constructor(e) {
          super(
            `Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`,
            { name: "InvalidHexBooleanError" }
          );
        }
      }
      r.C;
      class s extends r.C {
        constructor({ givenSize: e, maxSize: t }) {
          super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
            name: "SizeOverflowError",
          });
        }
      }
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
    95041: (e, t, n) => {
      "use strict";
      n.d(t, { X: () => b, J: () => y });
      var r = n(14493),
        i = n(29995),
        o = n(99702),
        a = n(93727),
        s = n(21135),
        c = n(43935),
        l = n(21159),
        u = n(79731),
        d = n(13423),
        h = n(23008);
      let f = "/docs/contract/encodeErrorResult";
      function p(e) {
        let { abi: t, errorName: n, args: r } = e,
          i = t[0];
        if (n) {
          let e = (0, h.iY)({ abi: t, args: r, name: n });
          if (!e) throw new o.yy(n, { docsPath: f });
          i = e;
        }
        if ("error" !== i.type) throw new o.yy(void 0, { docsPath: f });
        let a = (0, l.B)(i),
          c = (0, s.V)(a),
          p = "0x";
        if (r && r.length > 0) {
          if (!i.inputs) throw new o.ZP(i.name, { docsPath: f });
          p = (0, d.h)(i.inputs, r);
        }
        return (0, u.aP)([c, p]);
      }
      let m = "/docs/contract/encodeFunctionResult",
        y = "x-batch-gateway:true";
      async function b(e) {
        let { data: t, ccipRequest: n } = e,
          {
            args: [u],
          } = (function (e) {
            let { abi: t, data: n } = e,
              r = (0, a.di)(n, 0, 4),
              i = t.find(
                (e) => "function" === e.type && r === (0, s.V)((0, l.B)(e))
              );
            if (!i)
              throw new o.EB(r, {
                docsPath: "/docs/contract/decodeFunctionData",
              });
            return {
              functionName: i.name,
              args:
                "inputs" in i && i.inputs && i.inputs.length > 0
                  ? (0, c.n)(i.inputs, (0, a.di)(n, 4))
                  : void 0,
            };
          })({ abi: r.b2, data: t }),
          f = [],
          y = [];
        return (
          await Promise.all(
            u.map(async (e, t) => {
              try {
                (y[t] = await n(e)), (f[t] = !1);
              } catch (e) {
                var o;
                (f[t] = !0),
                  (y[t] =
                    "HttpRequestError" === (o = e).name && o.status
                      ? p({
                          abi: r.b2,
                          errorName: "HttpError",
                          args: [o.status, o.shortMessage],
                        })
                      : p({
                          abi: [i.Mc],
                          errorName: "Error",
                          args: [
                            "shortMessage" in o ? o.shortMessage : o.message,
                          ],
                        }));
              }
            })
          ),
          (function (e) {
            let { abi: t, functionName: n, result: r } = e,
              i = t[0];
            if (n) {
              let e = (0, h.iY)({ abi: t, name: n });
              if (!e) throw new o.Iz(n, { docsPath: m });
              i = e;
            }
            if ("function" !== i.type) throw new o.Iz(void 0, { docsPath: m });
            if (!i.outputs) throw new o.MR(i.name, { docsPath: m });
            let a = (() => {
              if (0 === i.outputs.length) return [];
              if (1 === i.outputs.length) return [r];
              if (Array.isArray(r)) return r;
              throw new o.dm(r);
            })();
            return (0, d.h)(i.outputs, a);
          })({ abi: r.b2, functionName: "query", result: [f, y] })
        );
      }
    },
    95782: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => c });
      var r,
        i,
        o = n(40194);
      let a = () => `@wagmi/core@${o.r}`;
      var s = function (e, t, n, r) {
        if ("a" === n && !r)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
      };
      class c extends Error {
        get docsBaseUrl() {
          return "https://wagmi.sh/core";
        }
        get version() {
          return a();
        }
        constructor(e, t = {}) {
          super(),
            r.add(this),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiCoreError",
            });
          let n =
              t.cause instanceof c
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            i = (t.cause instanceof c && t.cause.docsPath) || t.docsPath;
          (this.message = [
            e || "An error occurred.",
            "",
            ...(t.metaMessages ? [...t.metaMessages, ""] : []),
            ...(i
              ? [
                  `Docs: ${this.docsBaseUrl}${i}.html${
                    t.docsSlug ? `#${t.docsSlug}` : ""
                  }`,
                ]
              : []),
            ...(n ? [`Details: ${n}`] : []),
            `Version: ${this.version}`,
          ].join("\n")),
            t.cause && (this.cause = t.cause),
            (this.details = n),
            (this.docsPath = i),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
        walk(e) {
          return s(this, r, "m", i).call(this, this, e);
        }
      }
      (r = new WeakSet()),
        (i = function e(t, n) {
          return n?.(t)
            ? t
            : t.cause
            ? s(this, r, "m", e).call(this, t.cause, n)
            : t;
        });
    },
    97118: (e, t, n) => {
      "use strict";
      n.d(t, { B4: () => i, SK: () => o, hX: () => a });
      var r = n(7441);
      class i extends r.C {
        constructor({ offset: e }) {
          super(`Offset \`${e}\` cannot be negative.`, {
            name: "NegativeOffsetError",
          });
        }
      }
      class o extends r.C {
        constructor({ length: e, position: t }) {
          super(
            `Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`,
            { name: "PositionOutOfBoundsError" }
          );
        }
      }
      class a extends r.C {
        constructor({ count: e, limit: t }) {
          super(
            `Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`,
            { name: "RecursiveReadLimitExceededError" }
          );
        }
      }
    },
    97486: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      function r(e, t, n) {
        return JSON.stringify(
          e,
          (e, n) =>
            "function" == typeof t
              ? t(e, n)
              : "bigint" == typeof n
              ? n.toString() + "#__bigint"
              : n,
          n
        );
      }
    },
    98078: (e, t, n) => {
      "use strict";
      n.d(t, { U: () => o });
      var r = n(19405),
        i = n(65368);
      function o(e) {
        let {
            batch: t,
            cacheTime: n = e.pollingInterval ?? 4e3,
            ccipRead: o,
            key: a = "base",
            name: s = "Base Client",
            pollingInterval: c = 4e3,
            type: l = "base",
          } = e,
          u = e.chain,
          d = e.account ? (0, r.J)(e.account) : void 0,
          {
            config: h,
            request: f,
            value: p,
          } = e.transport({ chain: u, pollingInterval: c }),
          m = {
            account: d,
            batch: t,
            cacheTime: n,
            ccipRead: o,
            chain: u,
            key: a,
            name: s,
            pollingInterval: c,
            request: f,
            transport: { ...h, ...p },
            type: l,
            uid: (0, i.L)(),
          };
        return Object.assign(m, {
          extend: (function e(t) {
            return (n) => {
              let r = n(t);
              for (let e in m) delete r[e];
              let i = { ...t, ...r };
              return Object.assign(i, { extend: e(i) });
            };
          })(m),
        });
      }
    },
    98521: (e) => {
      "use strict";
      var t = {
        single_source_shortest_paths: function (e, n, r) {
          var i,
            o,
            a,
            s,
            c,
            l,
            u,
            d = {},
            h = {};
          h[n] = 0;
          var f = t.PriorityQueue.make();
          for (f.push(n, 0); !f.empty(); )
            for (a in ((o = (i = f.pop()).value),
            (s = i.cost),
            (c = e[o] || {})))
              c.hasOwnProperty(a) &&
                ((l = s + c[a]),
                (u = h[a]),
                (void 0 === h[a] || u > l) &&
                  ((h[a] = l), f.push(a, l), (d[a] = o)));
          if (void 0 !== r && void 0 === h[r])
            throw Error(
              ["Could not find a path from ", n, " to ", r, "."].join("")
            );
          return d;
        },
        extract_shortest_path_from_predecessor_list: function (e, t) {
          for (var n = [], r = t; r; ) n.push(r), e[r], (r = e[r]);
          return n.reverse(), n;
        },
        find_path: function (e, n, r) {
          var i = t.single_source_shortest_paths(e, n, r);
          return t.extract_shortest_path_from_predecessor_list(i, r);
        },
        PriorityQueue: {
          make: function (e) {
            var n,
              r = t.PriorityQueue,
              i = {};
            for (n in ((e = e || {}), r)) r.hasOwnProperty(n) && (i[n] = r[n]);
            return (i.queue = []), (i.sorter = e.sorter || r.default_sorter), i;
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
    99702: (e, t, n) => {
      "use strict";
      n.d(t, {
        BI: () => C,
        EB: () => A,
        Iy: () => c,
        Iz: () => w,
        MR: () => v,
        M_: () => g,
        Nc: () => u,
        O: () => l,
        Wq: () => m,
        YE: () => h,
        YF: () => s,
        YW: () => a,
        ZP: () => f,
        _z: () => y,
        d_: () => S,
        dm: () => P,
        fo: () => E,
        gH: () => d,
        j: () => k,
        kE: () => b,
        l3: () => I,
        nK: () => B,
        nM: () => x,
        yy: () => p,
      });
      var r = n(21159),
        i = n(87094),
        o = n(7441);
      class a extends o.C {
        constructor({ docsPath: e }) {
          super(
            "A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",
            { docsPath: e, name: "AbiConstructorNotFoundError" }
          );
        }
      }
      class s extends o.C {
        constructor({ docsPath: e }) {
          super(
            "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
            { docsPath: e, name: "AbiConstructorParamsNotFoundError" }
          );
        }
      }
      o.C;
      class c extends o.C {
        constructor({ data: e, params: t, size: n }) {
          super(`Data size of ${n} bytes is too small for given parameters.`, {
            metaMessages: [
              `Params: (${(0, r.A)(t, { includeName: !0 })})`,
              `Data:   ${e} (${n} bytes)`,
            ],
            name: "AbiDecodingDataSizeTooSmallError",
          }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e),
            (this.params = t),
            (this.size = n);
        }
      }
      class l extends o.C {
        constructor() {
          super('Cannot decode zero data ("0x") with ABI parameters.', {
            name: "AbiDecodingZeroDataError",
          });
        }
      }
      class u extends o.C {
        constructor({ expectedLength: e, givenLength: t, type: n }) {
          super(
            `ABI encoding array length mismatch for type ${n}.
Expected length: ${e}
Given length: ${t}`,
            { name: "AbiEncodingArrayLengthMismatchError" }
          );
        }
      }
      class d extends o.C {
        constructor({ expectedSize: e, value: t }) {
          super(
            `Size of bytes "${t}" (bytes${(0, i.E)(
              t
            )}) does not match expected size (bytes${e}).`,
            { name: "AbiEncodingBytesSizeMismatchError" }
          );
        }
      }
      class h extends o.C {
        constructor({ expectedLength: e, givenLength: t }) {
          super(
            `ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`,
            { name: "AbiEncodingLengthMismatchError" }
          );
        }
      }
      class f extends o.C {
        constructor(e, { docsPath: t }) {
          super(
            `Arguments (\`args\`) were provided to "${e}", but "${e}" on the ABI does not contain any parameters (\`inputs\`).
Cannot encode error result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the inputs exist on it.`,
            { docsPath: t, name: "AbiErrorInputsNotFoundError" }
          );
        }
      }
      class p extends o.C {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Error ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.`,
            { docsPath: t, name: "AbiErrorNotFoundError" }
          );
        }
      }
      class m extends o.C {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: "AbiErrorSignatureNotFoundError" }
          ),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.signature = e);
        }
      }
      class y extends o.C {
        constructor({ docsPath: e }) {
          super("Cannot extract event signature from empty topics.", {
            docsPath: e,
            name: "AbiEventSignatureEmptyTopicsError",
          });
        }
      }
      class b extends o.C {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: "AbiEventSignatureNotFoundError" }
          );
        }
      }
      class g extends o.C {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Event ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,
            { docsPath: t, name: "AbiEventNotFoundError" }
          );
        }
      }
      class w extends o.C {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Function ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: "AbiFunctionNotFoundError" }
          );
        }
      }
      class v extends o.C {
        constructor(e, { docsPath: t }) {
          super(
            `Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: "AbiFunctionOutputsNotFoundError" }
          );
        }
      }
      class A extends o.C {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded function signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: "AbiFunctionSignatureNotFoundError" }
          );
        }
      }
      class x extends o.C {
        constructor(e, t) {
          super("Found ambiguous types in overloaded ABI items.", {
            metaMessages: [
              `\`${e.type}\` in \`${(0, r.B)(e.abiItem)}\`, and`,
              `\`${t.type}\` in \`${(0, r.B)(t.abiItem)}\``,
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
            name: "AbiItemAmbiguityError",
          });
        }
      }
      class C extends o.C {
        constructor({ expectedSize: e, givenSize: t }) {
          super(`Expected bytes${e}, got bytes${t}.`, {
            name: "BytesSizeMismatchError",
          });
        }
      }
      class E extends o.C {
        constructor({ abiItem: e, data: t, params: n, size: i }) {
          super(
            `Data size of ${i} bytes is too small for non-indexed event parameters.`,
            {
              metaMessages: [
                `Params: (${(0, r.A)(n, { includeName: !0 })})`,
                `Data:   ${t} (${i} bytes)`,
              ],
              name: "DecodeLogDataMismatch",
            }
          ),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e),
            (this.data = t),
            (this.params = n),
            (this.size = i);
        }
      }
      class I extends o.C {
        constructor({ abiItem: e, param: t }) {
          super(
            `Expected a topic for indexed event parameter${
              t.name ? ` "${t.name}"` : ""
            } on event "${(0, r.B)(e, { includeName: !0 })}".`,
            { name: "DecodeLogTopicsMismatch" }
          ),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e);
        }
      }
      class B extends o.C {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: "InvalidAbiEncodingType" }
          );
        }
      }
      class k extends o.C {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: "InvalidAbiDecodingType" }
          );
        }
      }
      class P extends o.C {
        constructor(e) {
          super(`Value "${e}" is not a valid array.`, {
            name: "InvalidArrayError",
          });
        }
      }
      class S extends o.C {
        constructor(e) {
          super(
            `"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`,
            { name: "InvalidDefinitionTypeError" }
          );
        }
      }
      o.C;
    },
    99901: (e, t, n) => {
      "use strict";
      n.d(t, {
        NO: () => a,
        Pj: () => s,
        dV: () => i,
        nx: () => c,
        zd: () => o,
      });
      var r = n(68321);
      r.C, r.C;
      class i extends r.C {
        constructor({ param: e }) {
          super("Invalid ABI parameter.", { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidParameterError",
            });
        }
      }
      class o extends r.C {
        constructor({ param: e, name: t }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `"${t}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SolidityProtectedKeywordError",
            });
        }
      }
      class a extends r.C {
        constructor({ param: e, type: t, modifier: n }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `Modifier "${n}" not allowed${t ? ` in "${t}" type` : ""}.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidModifierError",
            });
        }
      }
      class s extends r.C {
        constructor({ param: e, type: t, modifier: n }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `Modifier "${n}" not allowed${t ? ` in "${t}" type` : ""}.`,
              `Data location can only be specified for array, struct, or mapping types, but "${n}" was given.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidFunctionModifierError",
            });
        }
      }
      class c extends r.C {
        constructor({ abiParameter: e }) {
          super("Invalid ABI parameter.", {
            details: JSON.stringify(e, null, 2),
            metaMessages: ["ABI parameter type is invalid."],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiTypeParameterError",
            });
        }
      }
    },
  },
]);
