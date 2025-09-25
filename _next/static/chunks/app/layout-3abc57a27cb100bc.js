(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7177],
  {
    13262: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 58972)),
        Promise.resolve().then(s.bind(s, 36142)),
        Promise.resolve().then(s.t.bind(s, 69243, 23)),
        Promise.resolve().then(s.t.bind(s, 56003, 23)),
        Promise.resolve().then(s.bind(s, 41953)),
        Promise.resolve().then(s.bind(s, 16095));
    },
    16095: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => Q });
      var i,
        a = s(95155),
        r = s(83415),
        n = s(37200);
      let l = (0, s(22732).x)({
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
      var u = s(63439),
        h = s(87397);
      let o = (0, u.Y8)({
        appName: "My RainbowKit App",
        projectId:
          null != (i = (0, h.env)("NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID"))
            ? i
            : "",
        chains: [n.r, l],
        ssr: !0,
      });
      var c = s(52020),
        d = s(39853),
        f = s(7165),
        p = s(25910),
        m = class extends p.Q {
          constructor(e = {}) {
            super(), (this.config = e), (this.#e = new Map());
          }
          #e;
          build(e, t, s) {
            let i = t.queryKey,
              a = t.queryHash ?? (0, c.F$)(i, t),
              r = this.get(a);
            return (
              r ||
                ((r = new d.X({
                  client: e,
                  queryKey: i,
                  queryHash: a,
                  options: e.defaultQueryOptions(t),
                  state: s,
                  defaultOptions: e.getQueryDefaults(i),
                })),
                this.add(r)),
              r
            );
          }
          add(e) {
            this.#e.has(e.queryHash) ||
              (this.#e.set(e.queryHash, e),
              this.notify({ type: "added", query: e }));
          }
          remove(e) {
            let t = this.#e.get(e.queryHash);
            t &&
              (e.destroy(),
              t === e && this.#e.delete(e.queryHash),
              this.notify({ type: "removed", query: e }));
          }
          clear() {
            f.jG.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          get(e) {
            return this.#e.get(e);
          }
          getAll() {
            return [...this.#e.values()];
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, c.MK)(t, e));
          }
          findAll(e = {}) {
            let t = this.getAll();
            return Object.keys(e).length > 0
              ? t.filter((t) => (0, c.MK)(e, t))
              : t;
          }
          notify(e) {
            f.jG.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          onFocus() {
            f.jG.batch(() => {
              this.getAll().forEach((e) => {
                e.onFocus();
              });
            });
          }
          onOnline() {
            f.jG.batch(() => {
              this.getAll().forEach((e) => {
                e.onOnline();
              });
            });
          }
        },
        y = s(34560),
        b = class extends p.Q {
          constructor(e = {}) {
            super(),
              (this.config = e),
              (this.#t = new Set()),
              (this.#s = new Map()),
              (this.#i = 0);
          }
          #t;
          #s;
          #i;
          build(e, t, s) {
            let i = new y.s({
              mutationCache: this,
              mutationId: ++this.#i,
              options: e.defaultMutationOptions(t),
              state: s,
            });
            return this.add(i), i;
          }
          add(e) {
            this.#t.add(e);
            let t = g(e);
            if ("string" == typeof t) {
              let s = this.#s.get(t);
              s ? s.push(e) : this.#s.set(t, [e]);
            }
            this.notify({ type: "added", mutation: e });
          }
          remove(e) {
            if (this.#t.delete(e)) {
              let t = g(e);
              if ("string" == typeof t) {
                let s = this.#s.get(t);
                if (s)
                  if (s.length > 1) {
                    let t = s.indexOf(e);
                    -1 !== t && s.splice(t, 1);
                  } else s[0] === e && this.#s.delete(t);
              }
            }
            this.notify({ type: "removed", mutation: e });
          }
          canRun(e) {
            let t = g(e);
            if ("string" != typeof t) return !0;
            {
              let s = this.#s.get(t),
                i = s?.find((e) => "pending" === e.state.status);
              return !i || i === e;
            }
          }
          runNext(e) {
            let t = g(e);
            if ("string" != typeof t) return Promise.resolve();
            {
              let s = this.#s.get(t)?.find((t) => t !== e && t.state.isPaused);
              return s?.continue() ?? Promise.resolve();
            }
          }
          clear() {
            f.jG.batch(() => {
              this.#t.forEach((e) => {
                this.notify({ type: "removed", mutation: e });
              }),
                this.#t.clear(),
                this.#s.clear();
            });
          }
          getAll() {
            return Array.from(this.#t);
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, c.nJ)(t, e));
          }
          findAll(e = {}) {
            return this.getAll().filter((t) => (0, c.nJ)(e, t));
          }
          notify(e) {
            f.jG.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          resumePausedMutations() {
            let e = this.getAll().filter((e) => e.state.isPaused);
            return f.jG.batch(() =>
              Promise.all(e.map((e) => e.continue().catch(c.lQ)))
            );
          }
        };
      function g(e) {
        return e.options.scope?.id;
      }
      var v = s(50920),
        x = s(21239);
      function w(e) {
        return {
          onFetch: (t, s) => {
            let i = t.options,
              a = t.fetchOptions?.meta?.fetchMore?.direction,
              r = t.state.data?.pages || [],
              n = t.state.data?.pageParams || [],
              l = { pages: [], pageParams: [] },
              u = 0,
              h = async () => {
                let s = !1,
                  h = (e) => {
                    Object.defineProperty(e, "signal", {
                      enumerable: !0,
                      get: () => (
                        t.signal.aborted
                          ? (s = !0)
                          : t.signal.addEventListener("abort", () => {
                              s = !0;
                            }),
                        t.signal
                      ),
                    });
                  },
                  o = (0, c.ZM)(t.options, t.fetchOptions),
                  d = async (e, i, a) => {
                    if (s) return Promise.reject();
                    if (null == i && e.pages.length) return Promise.resolve(e);
                    let r = {
                      client: t.client,
                      queryKey: t.queryKey,
                      pageParam: i,
                      direction: a ? "backward" : "forward",
                      meta: t.options.meta,
                    };
                    h(r);
                    let n = await o(r),
                      { maxPages: l } = t.options,
                      u = a ? c.ZZ : c.y9;
                    return {
                      pages: u(e.pages, n, l),
                      pageParams: u(e.pageParams, i, l),
                    };
                  };
                if (a && r.length) {
                  let e = "backward" === a,
                    t = { pages: r, pageParams: n },
                    s = (
                      e
                        ? function (e, { pages: t, pageParams: s }) {
                            return t.length > 0
                              ? e.getPreviousPageParam?.(t[0], t, s[0], s)
                              : void 0;
                          }
                        : C
                    )(i, t);
                  l = await d(t, s, e);
                } else {
                  let t = e ?? r.length;
                  do {
                    let e = 0 === u ? n[0] ?? i.initialPageParam : C(i, l);
                    if (u > 0 && null == e) break;
                    (l = await d(l, e)), u++;
                  } while (u < t);
                }
                return l;
              };
            t.options.persister
              ? (t.fetchFn = () =>
                  t.options.persister?.(
                    h,
                    {
                      client: t.client,
                      queryKey: t.queryKey,
                      meta: t.options.meta,
                      signal: t.signal,
                    },
                    s
                  ))
              : (t.fetchFn = h);
          },
        };
      }
      function C(e, { pages: t, pageParams: s }) {
        let i = t.length - 1;
        return t.length > 0 ? e.getNextPageParam(t[i], t, s[i], s) : void 0;
      }
      var _ = class {
          #a;
          #r;
          #n;
          #l;
          #u;
          #h;
          #o;
          #c;
          constructor(e = {}) {
            (this.#a = e.queryCache || new m()),
              (this.#r = e.mutationCache || new b()),
              (this.#n = e.defaultOptions || {}),
              (this.#l = new Map()),
              (this.#u = new Map()),
              (this.#h = 0);
          }
          mount() {
            this.#h++,
              1 === this.#h &&
                ((this.#o = v.m.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#a.onFocus());
                })),
                (this.#c = x.t.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#a.onOnline());
                })));
          }
          unmount() {
            this.#h--,
              0 === this.#h &&
                (this.#o?.(),
                (this.#o = void 0),
                this.#c?.(),
                (this.#c = void 0));
          }
          isFetching(e) {
            return this.#a.findAll({ ...e, fetchStatus: "fetching" }).length;
          }
          isMutating(e) {
            return this.#r.findAll({ ...e, status: "pending" }).length;
          }
          getQueryData(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#a.get(t.queryHash)?.state.data;
          }
          ensureQueryData(e) {
            let t = this.defaultQueryOptions(e),
              s = this.#a.build(this, t),
              i = s.state.data;
            return void 0 === i
              ? this.fetchQuery(e)
              : (e.revalidateIfStale &&
                  s.isStaleByTime((0, c.d2)(t.staleTime, s)) &&
                  this.prefetchQuery(t),
                Promise.resolve(i));
          }
          getQueriesData(e) {
            return this.#a
              .findAll(e)
              .map(({ queryKey: e, state: t }) => [e, t.data]);
          }
          setQueryData(e, t, s) {
            let i = this.defaultQueryOptions({ queryKey: e }),
              a = this.#a.get(i.queryHash),
              r = a?.state.data,
              n = (0, c.Zw)(t, r);
            if (void 0 !== n)
              return this.#a.build(this, i).setData(n, { ...s, manual: !0 });
          }
          setQueriesData(e, t, s) {
            return f.jG.batch(() =>
              this.#a
                .findAll(e)
                .map(({ queryKey: e }) => [e, this.setQueryData(e, t, s)])
            );
          }
          getQueryState(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#a.get(t.queryHash)?.state;
          }
          removeQueries(e) {
            let t = this.#a;
            f.jG.batch(() => {
              t.findAll(e).forEach((e) => {
                t.remove(e);
              });
            });
          }
          resetQueries(e, t) {
            let s = this.#a;
            return f.jG.batch(
              () => (
                s.findAll(e).forEach((e) => {
                  e.reset();
                }),
                this.refetchQueries({ type: "active", ...e }, t)
              )
            );
          }
          cancelQueries(e, t = {}) {
            let s = { revert: !0, ...t };
            return Promise.all(
              f.jG.batch(() => this.#a.findAll(e).map((e) => e.cancel(s)))
            )
              .then(c.lQ)
              .catch(c.lQ);
          }
          invalidateQueries(e, t = {}) {
            return f.jG.batch(() =>
              (this.#a.findAll(e).forEach((e) => {
                e.invalidate();
              }),
              e?.refetchType === "none")
                ? Promise.resolve()
                : this.refetchQueries(
                    { ...e, type: e?.refetchType ?? e?.type ?? "active" },
                    t
                  )
            );
          }
          refetchQueries(e, t = {}) {
            let s = { ...t, cancelRefetch: t.cancelRefetch ?? !0 };
            return Promise.all(
              f.jG.batch(() =>
                this.#a
                  .findAll(e)
                  .filter((e) => !e.isDisabled())
                  .map((e) => {
                    let t = e.fetch(void 0, s);
                    return (
                      s.throwOnError || (t = t.catch(c.lQ)),
                      "paused" === e.state.fetchStatus ? Promise.resolve() : t
                    );
                  })
              )
            ).then(c.lQ);
          }
          fetchQuery(e) {
            let t = this.defaultQueryOptions(e);
            void 0 === t.retry && (t.retry = !1);
            let s = this.#a.build(this, t);
            return s.isStaleByTime((0, c.d2)(t.staleTime, s))
              ? s.fetch(t)
              : Promise.resolve(s.state.data);
          }
          prefetchQuery(e) {
            return this.fetchQuery(e).then(c.lQ).catch(c.lQ);
          }
          fetchInfiniteQuery(e) {
            return (e.behavior = w(e.pages)), this.fetchQuery(e);
          }
          prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(c.lQ).catch(c.lQ);
          }
          ensureInfiniteQueryData(e) {
            return (e.behavior = w(e.pages)), this.ensureQueryData(e);
          }
          resumePausedMutations() {
            return x.t.isOnline()
              ? this.#r.resumePausedMutations()
              : Promise.resolve();
          }
          getQueryCache() {
            return this.#a;
          }
          getMutationCache() {
            return this.#r;
          }
          getDefaultOptions() {
            return this.#n;
          }
          setDefaultOptions(e) {
            this.#n = e;
          }
          setQueryDefaults(e, t) {
            this.#l.set((0, c.EN)(e), { queryKey: e, defaultOptions: t });
          }
          getQueryDefaults(e) {
            let t = [...this.#l.values()],
              s = {};
            return (
              t.forEach((t) => {
                (0, c.Cp)(e, t.queryKey) && Object.assign(s, t.defaultOptions);
              }),
              s
            );
          }
          setMutationDefaults(e, t) {
            this.#u.set((0, c.EN)(e), { mutationKey: e, defaultOptions: t });
          }
          getMutationDefaults(e) {
            let t = [...this.#u.values()],
              s = {};
            return (
              t.forEach((t) => {
                (0, c.Cp)(e, t.mutationKey) &&
                  Object.assign(s, t.defaultOptions);
              }),
              s
            );
          }
          defaultQueryOptions(e) {
            if (e._defaulted) return e;
            let t = {
              ...this.#n.queries,
              ...this.getQueryDefaults(e.queryKey),
              ...e,
              _defaulted: !0,
            };
            return (
              t.queryHash || (t.queryHash = (0, c.F$)(t.queryKey, t)),
              void 0 === t.refetchOnReconnect &&
                (t.refetchOnReconnect = "always" !== t.networkMode),
              void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
              !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
              t.queryFn === c.hT && (t.enabled = !1),
              t
            );
          }
          defaultMutationOptions(e) {
            return e?._defaulted
              ? e
              : {
                  ...this.#n.mutations,
                  ...(e?.mutationKey &&
                    this.getMutationDefaults(e.mutationKey)),
                  ...e,
                  _defaulted: !0,
                };
          }
          clear() {
            this.#a.clear(), this.#r.clear();
          }
        },
        q = s(26715);
      let j = new _();
      function Q(e) {
        let { children: t } = e;
        return (0, a.jsx)(r.x, {
          config: o,
          children: (0, a.jsx)(q.Ht, {
            client: j,
            children: (0, a.jsx)(u.qL, { children: t }),
          }),
        });
      }
    },
    41953: (e, t, s) => {
      "use strict";
      s.d(t, { MainLayout: () => m });
      var i = s(95155),
        a = s(84992),
        r = s.n(a),
        n = s(12115),
        l = s(59434),
        u = s(66766);
      let h = {
          src: "/_next/static/media/logo.3fbffc0a.svg",
          height: 37,
          width: 147,
          blurWidth: 0,
          blurHeight: 0,
        },
        o = {
          src: "/_next/static/media/socio-1.34094eec.svg",
          height: 20,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        c = {
          src: "/_next/static/media/socio-2.885b3f60.svg",
          height: 22,
          width: 23,
          blurWidth: 0,
          blurHeight: 0,
        },
        d = {
          src: "/_next/static/media/socio-3.ee508ce3.svg",
          height: 24,
          width: 22,
          blurWidth: 0,
          blurHeight: 0,
        },
        f = {
          src: "/_next/static/media/socio-4.e8648ac5.svg",
          height: 24,
          width: 30,
          blurWidth: 0,
          blurHeight: 0,
        },
        p = {
          src: "/_next/static/media/socio-5.75f2daf7.svg",
          height: 18,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        };
      function m(e) {
        let { children: t } = e,
          [s, a] = (0, n.useState)(!1);
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsxs)("div", {
              className: (0, l.cn)(r().nav, s && r().open),
              children: [
                (0, i.jsx)("a", {
                  href: "/",
                  className: r().logo,
                  children: (0, i.jsx)(u.default, { src: h, alt: "" }),
                }),
                (0, i.jsx)("a", {
                  href: "#",
                  className: r().burger,
                  onClick: () => a((e) => !e),
                }),
                (0, i.jsxs)("div", {
                  className: r()["menu-box"],
                  children: [
                    (0, i.jsxs)("div", {
                      className: r().menu,
                      children: [
                        (0, i.jsx)("a", {
                          href: "/nodes",
                          className: r().link,
                          children: "Nodes",
                        }),
                        (0, i.jsx)("a", {
                          href: "/whitelist",
                          children: "Whitelist",
                        }),
                        (0, i.jsx)("a", {
                          target: "_blank",
                          href: "/whitepaper.pdf",
                          children: "Whitepaper",
                        }),

                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: r()["link-box"],
                      children: (0, i.jsx)("a", {
                        href: "/login",
                        children: "SiGN iN",
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: r()["socio-box"],
                      children: [
                        (0, i.jsx)("a", {
                          target: "_blank",
                          href: "https://t.me/#",
                          children: (0, i.jsx)(u.default, {
                            src: o,
                            alt: "telegram",
                          }),
                        }),
                        (0, i.jsx)("a", {
                          target: "_blank",
                          href: "https://x.com/#",
                          children: (0, i.jsx)(u.default, { src: d, alt: "ч" }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: r()["link-box"],
                  children: (0, i.jsx)("a", {
                    href: "/login",
                    children: "SiGN iN",
                  }),
                }),
              ],
            }),
            (0, i.jsx)("div", { children: t }),
          ],
        });
      }
    },
    56003: () => {},
    59434: (e, t, s) => {
      "use strict";
      s.d(t, { cn: () => r });
      var i = s(39688),
        a = s(52596);
      function r() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, i.QP)((0, a.$)(t));
      }
    },
    84992: (e) => {
      e.exports = {
        nav: "MainLayout_nav__JajRh",
        "menu-box": "MainLayout_menu-box__OIcfF",
        "link-box": "MainLayout_link-box__rgCv6",
        logo: "MainLayout_logo__fOFsB",
        menu: "MainLayout_menu__TMets",
        "socio-box": "MainLayout_socio-box__ORrlw",
        open: "MainLayout_open__iwr6X",
        burger: "MainLayout_burger__6EQeQ",
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [1120, 8451, 3478, 9095, 8441, 1684, 7358], () => t(13262)),
      (_N_E = e.O());
  },
]);
