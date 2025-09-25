"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2778],
  {
    69997: function (e, t, s) {
      s.d(t, {
        AV: function () {
          return i;
        },
        ConfigCtrl: function () {
          return g;
        },
        ExplorerCtrl: function () {
          return U;
        },
        OptionsCtrl: function () {
          return f;
        },
        ThemeCtrl: function () {
          return $;
        },
        ToastCtrl: function () {
          return V;
        },
        jb: function () {
          return M;
        },
        uA: function () {
          return p;
        },
        zv: function () {
          return a;
        },
      });
      var r = s(17832),
        n = s(48764).Buffer;
      let o = (0, r.sj)({
          history: ["ConnectWallet"],
          view: "ConnectWallet",
          data: void 0,
        }),
        i = {
          state: o,
          subscribe: (e) => (0, r.Ld)(o, () => e(o)),
          push(e, t) {
            e !== o.view &&
              ((o.view = e), t && (o.data = t), o.history.push(e));
          },
          reset(e) {
            (o.view = e), (o.history = [e]);
          },
          replace(e) {
            o.history.length > 1 &&
              ((o.history[o.history.length - 1] = e), (o.view = e));
          },
          goBack() {
            if (o.history.length > 1) {
              o.history.pop();
              let [e] = o.history.slice(-1);
              o.view = e;
            }
          },
          setData(e) {
            o.data = e;
          },
        },
        a = {
          WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
          WCM_VERSION: "WCM_VERSION",
          RECOMMENDED_WALLET_AMOUNT: 9,
          isMobile: () =>
            "undefined" != typeof window &&
            !!(
              window.matchMedia("(pointer:coarse)").matches ||
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(
                navigator.userAgent
              )
            ),
          isAndroid: () =>
            a.isMobile() &&
            navigator.userAgent.toLowerCase().includes("android"),
          isIos() {
            let e = navigator.userAgent.toLowerCase();
            return a.isMobile() && (e.includes("iphone") || e.includes("ipad"));
          },
          isHttpUrl: (e) => e.startsWith("http://") || e.startsWith("https://"),
          isArray: (e) => Array.isArray(e) && e.length > 0,
          isTelegram: () =>
            "undefined" != typeof window &&
            (!!window.TelegramWebviewProxy ||
              !!window.Telegram ||
              !!window.TelegramWebviewProxyProto),
          formatNativeUrl(e, t, s) {
            if (a.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
            let r = e;
            r.includes("://") ||
              ((r = e.replaceAll("/", "").replaceAll(":", "")),
              (r = `${r}://`)),
              r.endsWith("/") || (r = `${r}/`),
              this.setWalletConnectDeepLink(r, s);
            let n = encodeURIComponent(t);
            return `${r}wc?uri=${n}`;
          },
          formatUniversalUrl(e, t, s) {
            if (!a.isHttpUrl(e)) return this.formatNativeUrl(e, t, s);
            let r = e;
            if (r.startsWith("https://t.me")) {
              let e = n.from(t).toString("base64").replace(/[=]/g, "");
              r.endsWith("/") && (r = r.slice(0, -1)),
                this.setWalletConnectDeepLink(r, s);
              let o = new URL(r);
              o.searchParams.set("startapp", e);
              let i = o.toString();
              return i;
            }
            r.endsWith("/") || (r = `${r}/`),
              this.setWalletConnectDeepLink(r, s);
            let o = encodeURIComponent(t);
            return `${r}wc?uri=${o}`;
          },
          wait: async (e) =>
            new Promise((t) => {
              setTimeout(t, e);
            }),
          openHref(e, t) {
            let s = this.isTelegram() ? "_blank" : t;
            window.open(e, s, "noreferrer noopener");
          },
          setWalletConnectDeepLink(e, t) {
            try {
              localStorage.setItem(
                a.WALLETCONNECT_DEEPLINK_CHOICE,
                JSON.stringify({ href: e, name: t })
              );
            } catch (e) {
              console.info("Unable to set WalletConnect deep link");
            }
          },
          setWalletConnectAndroidDeepLink(e) {
            try {
              let [t] = e.split("?");
              localStorage.setItem(
                a.WALLETCONNECT_DEEPLINK_CHOICE,
                JSON.stringify({ href: t, name: "Android" })
              );
            } catch (e) {
              console.info("Unable to set WalletConnect android deep link");
            }
          },
          removeWalletConnectDeepLink() {
            try {
              localStorage.removeItem(a.WALLETCONNECT_DEEPLINK_CHOICE);
            } catch (e) {
              console.info("Unable to remove WalletConnect deep link");
            }
          },
          setModalVersionInStorage() {
            try {
              "undefined" != typeof localStorage &&
                localStorage.setItem(a.WCM_VERSION, "2.7.0");
            } catch (e) {
              console.info("Unable to set Web3Modal version in storage");
            }
          },
          getWalletRouterData() {
            var e;
            let t = null == (e = i.state.data) ? void 0 : e.Wallet;
            if (!t) throw Error('Missing "Wallet" view data');
            return t;
          },
        },
        c =
          "undefined" != typeof location &&
          (location.hostname.includes("localhost") ||
            location.protocol.includes("https")),
        d = (0, r.sj)({
          enabled: c,
          userSessionId: "",
          events: [],
          connectedWalletId: void 0,
        }),
        p = {
          state: d,
          subscribe: (e) =>
            (0, r.Ld)(d.events, () =>
              e((0, r.CO)(d.events[d.events.length - 1]))
            ),
          initialize() {
            d.enabled &&
              void 0 !== (null == crypto ? void 0 : crypto.randomUUID) &&
              (d.userSessionId = crypto.randomUUID());
          },
          setConnectedWalletId(e) {
            d.connectedWalletId = e;
          },
          click(e) {
            if (d.enabled) {
              let t = {
                type: "CLICK",
                name: e.name,
                userSessionId: d.userSessionId,
                timestamp: Date.now(),
                data: e,
              };
              d.events.push(t);
            }
          },
          track(e) {
            if (d.enabled) {
              let t = {
                type: "TRACK",
                name: e.name,
                userSessionId: d.userSessionId,
                timestamp: Date.now(),
                data: e,
              };
              d.events.push(t);
            }
          },
          view(e) {
            if (d.enabled) {
              let t = {
                type: "VIEW",
                name: e.name,
                userSessionId: d.userSessionId,
                timestamp: Date.now(),
                data: e,
              };
              d.events.push(t);
            }
          },
        },
        u = (0, r.sj)({
          chains: void 0,
          walletConnectUri: void 0,
          isAuth: !1,
          isCustomDesktop: !1,
          isCustomMobile: !1,
          isDataLoaded: !1,
          isUiLoaded: !1,
        }),
        f = {
          state: u,
          subscribe: (e) => (0, r.Ld)(u, () => e(u)),
          setChains(e) {
            u.chains = e;
          },
          setWalletConnectUri(e) {
            u.walletConnectUri = e;
          },
          setIsCustomDesktop(e) {
            u.isCustomDesktop = e;
          },
          setIsCustomMobile(e) {
            u.isCustomMobile = e;
          },
          setIsDataLoaded(e) {
            u.isDataLoaded = e;
          },
          setIsUiLoaded(e) {
            u.isUiLoaded = e;
          },
          setIsAuth(e) {
            u.isAuth = e;
          },
        },
        m = (0, r.sj)({
          projectId: "",
          mobileWallets: void 0,
          desktopWallets: void 0,
          walletImages: void 0,
          chains: void 0,
          enableAuthMode: !1,
          enableExplorer: !0,
          explorerExcludedWalletIds: void 0,
          explorerRecommendedWalletIds: void 0,
          termsOfServiceUrl: void 0,
          privacyPolicyUrl: void 0,
        }),
        g = {
          state: m,
          subscribe: (e) => (0, r.Ld)(m, () => e(m)),
          setConfig(e) {
            var t, s;
            p.initialize(),
              f.setChains(e.chains),
              f.setIsAuth(!!e.enableAuthMode),
              f.setIsCustomMobile(
                !!(null == (t = e.mobileWallets) ? void 0 : t.length)
              ),
              f.setIsCustomDesktop(
                !!(null == (s = e.desktopWallets) ? void 0 : s.length)
              ),
              a.setModalVersionInStorage(),
              Object.assign(m, e);
          },
        };
      var b = Object.defineProperty,
        v = Object.getOwnPropertySymbols,
        w = Object.prototype.hasOwnProperty,
        C = Object.prototype.propertyIsEnumerable,
        __defNormalProp$2 = (e, t, s) =>
          t in e
            ? b(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (e[t] = s),
        __spreadValues$2 = (e, t) => {
          for (var s in t || (t = {}))
            w.call(t, s) && __defNormalProp$2(e, s, t[s]);
          if (v)
            for (var s of v(t)) C.call(t, s) && __defNormalProp$2(e, s, t[s]);
          return e;
        };
      let L = "https://explorer-api.walletconnect.com",
        I = "js-2.7.0";
      async function fetchListings(e, t) {
        let s = __spreadValues$2({ sdkType: "wcm", sdkVersion: I }, t),
          r = new URL(e, L);
        r.searchParams.append("projectId", g.state.projectId),
          Object.entries(s).forEach(([e, t]) => {
            t && r.searchParams.append(e, String(t));
          });
        let n = await fetch(r);
        return n.json();
      }
      let O = {
        getDesktopListings: async (e) =>
          fetchListings("/w3m/v1/getDesktopListings", e),
        getMobileListings: async (e) =>
          fetchListings("/w3m/v1/getMobileListings", e),
        getInjectedListings: async (e) =>
          fetchListings("/w3m/v1/getInjectedListings", e),
        getAllListings: async (e) => fetchListings("/w3m/v1/getAllListings", e),
        getWalletImageUrl: (e) =>
          `${L}/w3m/v1/getWalletImage/${e}?projectId=${g.state.projectId}&sdkType=wcm&sdkVersion=${I}`,
        getAssetImageUrl: (e) =>
          `${L}/w3m/v1/getAssetImage/${e}?projectId=${g.state.projectId}&sdkType=wcm&sdkVersion=${I}`,
      };
      var j = Object.defineProperty,
        W = Object.getOwnPropertySymbols,
        E = Object.prototype.hasOwnProperty,
        P = Object.prototype.propertyIsEnumerable,
        __defNormalProp$1 = (e, t, s) =>
          t in e
            ? j(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (e[t] = s),
        __spreadValues$1 = (e, t) => {
          for (var s in t || (t = {}))
            E.call(t, s) && __defNormalProp$1(e, s, t[s]);
          if (W)
            for (var s of W(t)) P.call(t, s) && __defNormalProp$1(e, s, t[s]);
          return e;
        };
      let _ = a.isMobile(),
        A = (0, r.sj)({
          wallets: { listings: [], total: 0, page: 1 },
          search: { listings: [], total: 0, page: 1 },
          recomendedWallets: [],
        }),
        U = {
          state: A,
          async getRecomendedWallets() {
            let {
              explorerRecommendedWalletIds: e,
              explorerExcludedWalletIds: t,
            } = g.state;
            if ("NONE" === e || ("ALL" === t && !e)) return A.recomendedWallets;
            if (a.isArray(e)) {
              let t = e.join(","),
                { listings: s } = await O.getAllListings({ recommendedIds: t }),
                r = Object.values(s);
              r.sort((t, s) => {
                let r = e.indexOf(t.id),
                  n = e.indexOf(s.id);
                return r - n;
              }),
                (A.recomendedWallets = r);
            } else {
              let { chains: e, isAuth: s } = f.state,
                r = null == e ? void 0 : e.join(","),
                n = a.isArray(t),
                o = {
                  page: 1,
                  sdks: s ? "auth_v1" : void 0,
                  entries: a.RECOMMENDED_WALLET_AMOUNT,
                  chains: r,
                  version: 2,
                  excludedIds: n ? t.join(",") : void 0,
                },
                { listings: i } = _
                  ? await O.getMobileListings(o)
                  : await O.getDesktopListings(o);
              A.recomendedWallets = Object.values(i);
            }
            return A.recomendedWallets;
          },
          async getWallets(e) {
            let t = __spreadValues$1({}, e),
              {
                explorerRecommendedWalletIds: s,
                explorerExcludedWalletIds: r,
              } = g.state,
              { recomendedWallets: n } = A;
            if ("ALL" === r) return A.wallets;
            n.length
              ? (t.excludedIds = n.map((e) => e.id).join(","))
              : a.isArray(s) && (t.excludedIds = s.join(",")),
              a.isArray(r) &&
                (t.excludedIds = [t.excludedIds, r].filter(Boolean).join(",")),
              f.state.isAuth && (t.sdks = "auth_v1");
            let { page: o, search: i } = e,
              { listings: c, total: d } = _
                ? await O.getMobileListings(t)
                : await O.getDesktopListings(t),
              p = Object.values(c),
              u = i ? "search" : "wallets";
            return (
              (A[u] = {
                listings: [...A[u].listings, ...p],
                total: d,
                page: null != o ? o : 1,
              }),
              { listings: p, total: d }
            );
          },
          getWalletImageUrl: (e) => O.getWalletImageUrl(e),
          getAssetImageUrl: (e) => O.getAssetImageUrl(e),
          resetSearch() {
            A.search = { listings: [], total: 0, page: 1 };
          },
        },
        k = (0, r.sj)({ open: !1 }),
        M = {
          state: k,
          subscribe: (e) => (0, r.Ld)(k, () => e(k)),
          open: async (e) =>
            new Promise((t) => {
              let { isUiLoaded: s, isDataLoaded: r } = f.state;
              if (
                (a.removeWalletConnectDeepLink(),
                f.setWalletConnectUri(null == e ? void 0 : e.uri),
                f.setChains(null == e ? void 0 : e.chains),
                i.reset("ConnectWallet"),
                s && r)
              )
                (k.open = !0), t();
              else {
                let e = setInterval(() => {
                  let s = f.state;
                  s.isUiLoaded &&
                    s.isDataLoaded &&
                    (clearInterval(e), (k.open = !0), t());
                }, 200);
              }
            }),
          close() {
            k.open = !1;
          },
        };
      var N = Object.defineProperty,
        D = Object.getOwnPropertySymbols,
        S = Object.prototype.hasOwnProperty,
        T = Object.prototype.propertyIsEnumerable,
        __defNormalProp = (e, t, s) =>
          t in e
            ? N(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (e[t] = s),
        __spreadValues = (e, t) => {
          for (var s in t || (t = {}))
            S.call(t, s) && __defNormalProp(e, s, t[s]);
          if (D)
            for (var s of D(t)) T.call(t, s) && __defNormalProp(e, s, t[s]);
          return e;
        };
      let x = (0, r.sj)({
          themeMode:
            "undefined" != typeof matchMedia &&
            matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light",
        }),
        $ = {
          state: x,
          subscribe: (e) => (0, r.Ld)(x, () => e(x)),
          setThemeConfig(e) {
            let { themeMode: t, themeVariables: s } = e;
            t && (x.themeMode = t),
              s && (x.themeVariables = __spreadValues({}, s));
          },
        },
        R = (0, r.sj)({ open: !1, message: "", variant: "success" }),
        V = {
          state: R,
          subscribe: (e) => (0, r.Ld)(R, () => e(R)),
          openToast(e, t) {
            (R.open = !0), (R.message = e), (R.variant = t);
          },
          closeToast() {
            R.open = !1;
          },
        };
    },
    92545: function (e, t, s) {
      s.d(t, {
        WalletConnectModal: function () {
          return WalletConnectModal;
        },
      });
      var r = s(69997);
      let WalletConnectModal = class WalletConnectModal {
        constructor(e) {
          (this.openModal = r.jb.open),
            (this.closeModal = r.jb.close),
            (this.subscribeModal = r.jb.subscribe),
            (this.setTheme = r.ThemeCtrl.setThemeConfig),
            r.ThemeCtrl.setThemeConfig(e),
            r.ConfigCtrl.setConfig(e),
            this.initUi();
        }
        async initUi() {
          if ("undefined" != typeof window) {
            await Promise.all([s.e(6609), s.e(7669)]).then(s.bind(s, 85823));
            let e = document.createElement("wcm-modal");
            document.body.insertAdjacentElement("beforeend", e),
              r.OptionsCtrl.setIsUiLoaded(!0);
          }
        }
      };
    },
    17832: function (e, t, s) {
      s.d(t, {
        sj: function () {
          return proxy;
        },
        CO: function () {
          return snapshot;
        },
        Ld: function () {
          return subscribe;
        },
      }),
        Symbol();
      let r = Symbol(),
        n = Object.getPrototypeOf,
        o = new WeakMap(),
        l = (e) =>
          e &&
          (o.has(e)
            ? o.get(e)
            : n(e) === Object.prototype || n(e) === Array.prototype),
        y = (e) => (l(e) && e[r]) || null,
        h = (e, t = !0) => {
          o.set(e, t);
        },
        isObject = (e) => "object" == typeof e && null !== e,
        i = new WeakMap(),
        a = new WeakSet(),
        buildProxyFunction = (
          e = Object.is,
          t = (e, t) => new Proxy(e, t),
          s = (e) =>
            isObject(e) &&
            !a.has(e) &&
            (Array.isArray(e) || !(Symbol.iterator in e)) &&
            !(e instanceof WeakMap) &&
            !(e instanceof WeakSet) &&
            !(e instanceof Error) &&
            !(e instanceof Number) &&
            !(e instanceof Date) &&
            !(e instanceof String) &&
            !(e instanceof RegExp) &&
            !(e instanceof ArrayBuffer),
          r = (e) => {
            switch (e.status) {
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
              default:
                throw e;
            }
          },
          n = new WeakMap(),
          o = (e, t, s = r) => {
            let c = n.get(e);
            if ((null == c ? void 0 : c[0]) === t) return c[1];
            let d = Array.isArray(e)
              ? []
              : Object.create(Object.getPrototypeOf(e));
            return (
              h(d, !0),
              n.set(e, [t, d]),
              Reflect.ownKeys(e).forEach((t) => {
                if (Object.getOwnPropertyDescriptor(d, t)) return;
                let r = Reflect.get(e, t),
                  n = { value: r, enumerable: !0, configurable: !0 };
                if (a.has(r)) h(r, !1);
                else if (r instanceof Promise)
                  delete n.value, (n.get = () => s(r));
                else if (i.has(r)) {
                  let [e, t] = i.get(r);
                  n.value = o(e, t(), s);
                }
                Object.defineProperty(d, t, n);
              }),
              Object.preventExtensions(d)
            );
          },
          c = new WeakMap(),
          d = [1, 1],
          p = (r) => {
            if (!isObject(r)) throw Error("object required");
            let n = c.get(r);
            if (n) return n;
            let u = d[0],
              f = new Set(),
              notifyUpdate = (e, t = ++d[0]) => {
                u !== t && ((u = t), f.forEach((s) => s(e, t)));
              },
              m = d[1],
              ensureVersion = (e = ++d[1]) => (
                m === e ||
                  f.size ||
                  ((m = e),
                  g.forEach(([t]) => {
                    let s = t[1](e);
                    s > u && (u = s);
                  })),
                u
              ),
              createPropListener = (e) => (t, s) => {
                let r = [...t];
                (r[1] = [e, ...r[1]]), notifyUpdate(r, s);
              },
              g = new Map(),
              addPropListener = (e, t) => {
                if (g.has(e)) throw Error("prop listener already exists");
                if (f.size) {
                  let s = t[3](createPropListener(e));
                  g.set(e, [t, s]);
                } else g.set(e, [t]);
              },
              removePropListener = (e) => {
                var t;
                let s = g.get(e);
                s && (g.delete(e), null == (t = s[1]) || t.call(s));
              },
              addListener = (e) => {
                f.add(e),
                  1 === f.size &&
                    g.forEach(([e, t], s) => {
                      if (t) throw Error("remove already exists");
                      let r = e[3](createPropListener(s));
                      g.set(s, [e, r]);
                    });
                let removeListener = () => {
                  f.delete(e),
                    0 === f.size &&
                      g.forEach(([e, t], s) => {
                        t && (t(), g.set(s, [e]));
                      });
                };
                return removeListener;
              },
              b = Array.isArray(r)
                ? []
                : Object.create(Object.getPrototypeOf(r)),
              v = {
                deleteProperty(e, t) {
                  let s = Reflect.get(e, t);
                  removePropListener(t);
                  let r = Reflect.deleteProperty(e, t);
                  return r && notifyUpdate(["delete", [t], s]), r;
                },
                set(t, r, n, o) {
                  let d = Reflect.has(t, r),
                    u = Reflect.get(t, r, o);
                  if (d && (e(u, n) || (c.has(n) && e(u, c.get(n))))) return !0;
                  removePropListener(r), isObject(n) && (n = y(n) || n);
                  let f = n;
                  if (n instanceof Promise)
                    n.then((e) => {
                      (n.status = "fulfilled"),
                        (n.value = e),
                        notifyUpdate(["resolve", [r], e]);
                    }).catch((e) => {
                      (n.status = "rejected"),
                        (n.reason = e),
                        notifyUpdate(["reject", [r], e]);
                    });
                  else {
                    !i.has(n) && s(n) && (f = p(n));
                    let e = !a.has(f) && i.get(f);
                    e && addPropListener(r, e);
                  }
                  return (
                    Reflect.set(t, r, f, o),
                    notifyUpdate(["set", [r], n, u]),
                    !0
                  );
                },
              },
              w = t(b, v);
            c.set(r, w);
            let C = [b, ensureVersion, o, addListener];
            return (
              i.set(w, C),
              Reflect.ownKeys(r).forEach((e) => {
                let t = Object.getOwnPropertyDescriptor(r, e);
                "value" in t &&
                  ((w[e] = r[e]), delete t.value, delete t.writable),
                  Object.defineProperty(b, e, t);
              }),
              w
            );
          }
        ) => [p, i, a, e, t, s, r, n, o, c, d],
        [c] = buildProxyFunction();
      function proxy(e = {}) {
        return c(e);
      }
      function subscribe(e, t, s) {
        let r;
        let n = i.get(e);
        n || console.warn("Please use proxy object");
        let o = [],
          a = n[3],
          c = !1,
          d = a((e) => {
            if ((o.push(e), s)) {
              t(o.splice(0));
              return;
            }
            r ||
              (r = Promise.resolve().then(() => {
                (r = void 0), c && t(o.splice(0));
              }));
          });
        return (
          (c = !0),
          () => {
            (c = !1), d();
          }
        );
      }
      function snapshot(e, t) {
        let s = i.get(e);
        s || console.warn("Please use proxy object");
        let [r, n, o] = s;
        return o(r, n(), t);
      }
    },
  },
]);
