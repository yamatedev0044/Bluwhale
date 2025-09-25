(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7177],
  {
    1441: (e, t, s) => {
      "use strict";
      s.d(t, { Fo: () => f, I3: () => d });
      var i,
        r,
        a = s(87397),
        n = s(37200),
        u = s(55557),
        l = s(56886),
        h = s(63963),
        o = s(58646),
        c = s(36241);
      let d = parseInt(
        null !=
          (r =
            null != (i = (0, a.env)("NEXT_PUBLIC_TARGET_CHAIN_ID"))
              ? i
              : "42161")
          ? r
          : ""
      );
      if (isNaN(d))
        throw Error(
          "Invalid NEXT_PUBLIC_TARGET_CHAIN_ID: " +
            (0, a.env)("NEXT_PUBLIC_TARGET_CHAIN_ID")
        );
      let f = { 1: n.r, 0xaa36a7: u.G, 42161: l.D, 421614: h.Y }[d];
      if (!f) throw Error("Сhain ID is not supported: " + d);
      (0, o.Z)({
        chains: [f],
        transports: {
          [n.r.id]: (0, c.L)(),
          [u.G.id]: (0, c.L)(),
          [l.D.id]: (0, c.L)(),
          [h.Y.id]: (0, c.L)(),
        },
      });
    },
    3652: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => l });
      var i,
        r,
        a = s(63439),
        n = s(87397),
        u = s(1441);
      let l = (0, a.Y8)({
        appName: "Bluwhale Node Sale",
        projectId:
          null !=
          (r =
            null != (i = (0, n.env)("NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID"))
              ? i
              : "99cdb00a513522c2f68235682d96053b")
            ? r
            : "",
        chains: [u.Fo],
        ssr: !0,
      });
    },
    10167: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/socio-4.e8648ac5.svg",
        height: 24,
        width: 30,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    10368: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/socio-3.ee508ce3.svg",
        height: 24,
        width: 22,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    16972: () => {},
    17785: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Orbitron', 'Orbitron Fallback'",
          fontStyle: "normal",
        },
        className: "__className_e087fb",
        variable: "__variable_e087fb",
      };
    },
    24354: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/socio-1.34094eec.svg",
        height: 20,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    36077: (e) => {
      e.exports = { toast: "toasts_toast__51m2z" };
    },
    54408: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => q });
      var i = s(95155),
        r = s(63401),
        a = s(52020),
        n = s(39853),
        u = s(7165),
        l = s(25910),
        h = class extends l.Q {
          constructor(e = {}) {
            super(), (this.config = e), (this.#e = new Map());
          }
          #e;
          build(e, t, s) {
            let i = t.queryKey,
              r = t.queryHash ?? (0, a.F$)(i, t),
              u = this.get(r);
            return (
              u ||
                ((u = new n.X({
                  client: e,
                  queryKey: i,
                  queryHash: r,
                  options: e.defaultQueryOptions(t),
                  state: s,
                  defaultOptions: e.getQueryDefaults(i),
                })),
                this.add(u)),
              u
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
            u.jG.batch(() => {
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
            return this.getAll().find((e) => (0, a.MK)(t, e));
          }
          findAll(e = {}) {
            let t = this.getAll();
            return Object.keys(e).length > 0
              ? t.filter((t) => (0, a.MK)(e, t))
              : t;
          }
          notify(e) {
            u.jG.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          onFocus() {
            u.jG.batch(() => {
              this.getAll().forEach((e) => {
                e.onFocus();
              });
            });
          }
          onOnline() {
            u.jG.batch(() => {
              this.getAll().forEach((e) => {
                e.onOnline();
              });
            });
          }
        },
        o = s(34560),
        c = class extends l.Q {
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
            let i = new o.s({
              mutationCache: this,
              mutationId: ++this.#i,
              options: e.defaultMutationOptions(t),
              state: s,
            });
            return this.add(i), i;
          }
          add(e) {
            this.#t.add(e);
            let t = d(e);
            if ("string" == typeof t) {
              let s = this.#s.get(t);
              s ? s.push(e) : this.#s.set(t, [e]);
            }
            this.notify({ type: "added", mutation: e });
          }
          remove(e) {
            if (this.#t.delete(e)) {
              let t = d(e);
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
            let t = d(e);
            if ("string" != typeof t) return !0;
            {
              let s = this.#s.get(t),
                i = s?.find((e) => "pending" === e.state.status);
              return !i || i === e;
            }
          }
          runNext(e) {
            let t = d(e);
            if ("string" != typeof t) return Promise.resolve();
            {
              let s = this.#s.get(t)?.find((t) => t !== e && t.state.isPaused);
              return s?.continue() ?? Promise.resolve();
            }
          }
          clear() {
            u.jG.batch(() => {
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
            return this.getAll().find((e) => (0, a.nJ)(t, e));
          }
          findAll(e = {}) {
            return this.getAll().filter((t) => (0, a.nJ)(e, t));
          }
          notify(e) {
            u.jG.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          resumePausedMutations() {
            let e = this.getAll().filter((e) => e.state.isPaused);
            return u.jG.batch(() =>
              Promise.all(e.map((e) => e.continue().catch(a.lQ)))
            );
          }
        };
      function d(e) {
        return e.options.scope?.id;
      }
      var f = s(50920),
        m = s(21239),
        y = s(64275),
        b = class {
          #r;
          #a;
          #n;
          #u;
          #l;
          #h;
          #o;
          #c;
          constructor(e = {}) {
            (this.#r = e.queryCache || new h()),
              (this.#a = e.mutationCache || new c()),
              (this.#n = e.defaultOptions || {}),
              (this.#u = new Map()),
              (this.#l = new Map()),
              (this.#h = 0);
          }
          mount() {
            this.#h++,
              1 === this.#h &&
                ((this.#o = f.m.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#r.onFocus());
                })),
                (this.#c = m.t.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#r.onOnline());
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
            return this.#r.findAll({ ...e, fetchStatus: "fetching" }).length;
          }
          isMutating(e) {
            return this.#a.findAll({ ...e, status: "pending" }).length;
          }
          getQueryData(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#r.get(t.queryHash)?.state.data;
          }
          ensureQueryData(e) {
            let t = this.defaultQueryOptions(e),
              s = this.#r.build(this, t),
              i = s.state.data;
            return void 0 === i
              ? this.fetchQuery(e)
              : (e.revalidateIfStale &&
                  s.isStaleByTime((0, a.d2)(t.staleTime, s)) &&
                  this.prefetchQuery(t),
                Promise.resolve(i));
          }
          getQueriesData(e) {
            return this.#r
              .findAll(e)
              .map(({ queryKey: e, state: t }) => [e, t.data]);
          }
          setQueryData(e, t, s) {
            let i = this.defaultQueryOptions({ queryKey: e }),
              r = this.#r.get(i.queryHash),
              n = r?.state.data,
              u = (0, a.Zw)(t, n);
            if (void 0 !== u)
              return this.#r.build(this, i).setData(u, { ...s, manual: !0 });
          }
          setQueriesData(e, t, s) {
            return u.jG.batch(() =>
              this.#r
                .findAll(e)
                .map(({ queryKey: e }) => [e, this.setQueryData(e, t, s)])
            );
          }
          getQueryState(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#r.get(t.queryHash)?.state;
          }
          removeQueries(e) {
            let t = this.#r;
            u.jG.batch(() => {
              t.findAll(e).forEach((e) => {
                t.remove(e);
              });
            });
          }
          resetQueries(e, t) {
            let s = this.#r;
            return u.jG.batch(
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
              u.jG.batch(() => this.#r.findAll(e).map((e) => e.cancel(s)))
            )
              .then(a.lQ)
              .catch(a.lQ);
          }
          invalidateQueries(e, t = {}) {
            return u.jG.batch(() =>
              (this.#r.findAll(e).forEach((e) => {
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
              u.jG.batch(() =>
                this.#r
                  .findAll(e)
                  .filter((e) => !e.isDisabled())
                  .map((e) => {
                    let t = e.fetch(void 0, s);
                    return (
                      s.throwOnError || (t = t.catch(a.lQ)),
                      "paused" === e.state.fetchStatus ? Promise.resolve() : t
                    );
                  })
              )
            ).then(a.lQ);
          }
          fetchQuery(e) {
            let t = this.defaultQueryOptions(e);
            void 0 === t.retry && (t.retry = !1);
            let s = this.#r.build(this, t);
            return s.isStaleByTime((0, a.d2)(t.staleTime, s))
              ? s.fetch(t)
              : Promise.resolve(s.state.data);
          }
          prefetchQuery(e) {
            return this.fetchQuery(e).then(a.lQ).catch(a.lQ);
          }
          fetchInfiniteQuery(e) {
            return (e.behavior = (0, y.PL)(e.pages)), this.fetchQuery(e);
          }
          prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(a.lQ).catch(a.lQ);
          }
          ensureInfiniteQueryData(e) {
            return (e.behavior = (0, y.PL)(e.pages)), this.ensureQueryData(e);
          }
          resumePausedMutations() {
            return m.t.isOnline()
              ? this.#a.resumePausedMutations()
              : Promise.resolve();
          }
          getQueryCache() {
            return this.#r;
          }
          getMutationCache() {
            return this.#a;
          }
          getDefaultOptions() {
            return this.#n;
          }
          setDefaultOptions(e) {
            this.#n = e;
          }
          setQueryDefaults(e, t) {
            this.#u.set((0, a.EN)(e), { queryKey: e, defaultOptions: t });
          }
          getQueryDefaults(e) {
            let t = [...this.#u.values()],
              s = {};
            return (
              t.forEach((t) => {
                (0, a.Cp)(e, t.queryKey) && Object.assign(s, t.defaultOptions);
              }),
              s
            );
          }
          setMutationDefaults(e, t) {
            this.#l.set((0, a.EN)(e), { mutationKey: e, defaultOptions: t });
          }
          getMutationDefaults(e) {
            let t = [...this.#l.values()],
              s = {};
            return (
              t.forEach((t) => {
                (0, a.Cp)(e, t.mutationKey) &&
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
              t.queryHash || (t.queryHash = (0, a.F$)(t.queryKey, t)),
              void 0 === t.refetchOnReconnect &&
                (t.refetchOnReconnect = "always" !== t.networkMode),
              void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
              !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
              t.queryFn === a.hT && (t.enabled = !1),
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
            this.#r.clear(), this.#a.clear();
          }
        },
        p = s(26715),
        v = s(63439),
        g = s(3652);
      let C = new b();
      function q(e) {
        let { children: t } = e;
        return (0, i.jsx)(r.WagmiProvider, {
          config: g.Z,
          children: (0, i.jsx)(p.Ht, {
            client: C,
            children: (0, i.jsx)(v.qL, { children: t }),
          }),
        });
      }
    },
    58137: (e, t, s) => {
      Promise.resolve().then(s.t.bind(s, 85035, 23)),
        Promise.resolve().then(s.bind(s, 58972)),
        Promise.resolve().then(s.bind(s, 36142)),
        Promise.resolve().then(s.t.bind(s, 69243, 23)),
        Promise.resolve().then(s.bind(s, 56671)),
        Promise.resolve().then(s.bind(s, 94170)),
        Promise.resolve().then(s.bind(s, 84551)),
        Promise.resolve().then(s.t.bind(s, 16972, 23)),
        Promise.resolve().then(s.t.bind(s, 36077, 23)),
        Promise.resolve().then(s.t.bind(s, 17785, 23)),
        Promise.resolve().then(s.t.bind(s, 78410, 23)),
        Promise.resolve().then(s.bind(s, 24354)),
        Promise.resolve().then(s.bind(s, 90081)),
        Promise.resolve().then(s.bind(s, 10368)),
        Promise.resolve().then(s.bind(s, 10167)),
        Promise.resolve().then(s.bind(s, 85158)),
        Promise.resolve().then(s.bind(s, 71068)),
        Promise.resolve().then(s.bind(s, 54408));
    },
    59434: (e, t, s) => {
      "use strict";
      s.d(t, { cn: () => r });
      var i = s(52596);
      function r() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, i.$)(t);
      }
    },
    71068: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/socio-youtube.a75e9ecc.svg",
        height: 25,
        width: 26,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    78410: (e) => {
      e.exports = {
        style: { fontFamily: "'Inter', 'Inter Fallback'", fontStyle: "normal" },
        className: "__className_e8ce0c",
        variable: "__variable_e8ce0c",
      };
    },
    84551: (e, t, s) => {
      "use strict";
      s.d(t, { MainLayoutNav: () => l });
      var i = s(95155),
        r = s(59434),
        a = s(12115),
        n = s(66766);
      let u = {
        src: "/_next/static/media/logo.3fbffc0a.svg",
        height: 37,
        width: 147,
        blurWidth: 0,
        blurHeight: 0,
      };
      function l(e) {
        let { children: t } = e,
          [s, l] = (0, a.useState)(!1);
        return (0, i.jsxs)("div", {
          className: (0, r.cn)("nav", s && "open"),
          children: [
            (0, i.jsx)("a", {
              href: "https://bluwhale.com",
              className: "logo",
              children: (0, i.jsx)(n.default, { src: u, alt: "" }),
            }),
            (0, i.jsx)("a", {
              href: "#",
              className: "burger",
              onClick: () => l((e) => !e),
            }),
            t,
          ],
        });
      }
    },
    85035: () => {},
    85158: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/socio-5.75f2daf7.svg",
        height: 18,
        width: 32,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    90081: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => i });
      let i = {
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
      var i = s(95155),
        r = s(12115),
        a = s(59434);
      function n(e) {
        let { text: t, icon: s, sublinks: n, showName: u } = e,
          [l, h] = (0, r.useState)(!1);
        return (0, i.jsxs)("div", {
          className: (0, a.cn)(
            "socio-box-item dropdown-menu up",
            l && "active"
          ),
          children: [
            (0, i.jsxs)("a", {
              className: "socio-link dropdown-menu-switch cursor-pointer",
              onClick: () => h((e) => !e),
              children: [
                (0, i.jsx)("img", { src: s, alt: t }),
                u && (0, i.jsx)("span", { children: t }),
              ],
            }),
            (0, i.jsx)("ul", {
              children:
                null == n
                  ? void 0
                  : n.map((e) =>
                      (0, i.jsx)(
                        "li",
                        {
                          children: (0, i.jsx)("a", {
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
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [4106, 4039, 8451, 4258, 8879, 6234, 6671, 8441, 1684, 7358], () =>
      t(58137)
    ),
      (_N_E = e.O());
  },
]);
