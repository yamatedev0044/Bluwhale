"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4258],
  {
    399: (e, t, r) => {
      r.d(t, { h: () => n });
      let n = r(68629).k;
    },
    926: (e, t, r) => {
      r.d(t, { T: () => i });
      var n = r(27493);
      async function i(e) {
        let t = await e.request({ method: "eth_chainId" }, { dedupe: !0 });
        return (0, n.ME)(t);
      }
    },
    1405: (e, t, r) => {
      r.d(t, { J: () => n });
      function n(e, t) {
        let r = e.toString(),
          n = r.startsWith("-");
        n && (r = r.slice(1));
        let [i, s] = [
          (r = r.padStart(t, "0")).slice(0, r.length - t),
          r.slice(r.length - t),
        ];
        return (
          (s = s.replace(/(0+)$/, "")),
          `${n ? "-" : ""}${i || "0"}${s ? `.${s}` : ""}`
        );
      }
    },
    1777: (e, t, r) => {
      r.d(t, { u: () => a });
      var n = r(23008),
        i = r(34524),
        s = r(57490);
      async function a(e, t) {
        let {
            abi: r,
            address: a,
            args: o,
            blockHash: c,
            eventName: u,
            fromBlock: l,
            toBlock: d,
            strict: f,
          } = t,
          h = u ? (0, n.iY)({ abi: r, name: u }) : void 0,
          p = h ? void 0 : r.filter((e) => "event" === e.type);
        return (0, i.T)(
          e,
          s.a,
          "getLogs"
        )({
          address: a,
          args: o,
          blockHash: c,
          event: h,
          events: p,
          fromBlock: l,
          toBlock: d,
          strict: f,
        });
      }
    },
    2145: (e, t, r) => {
      r.d(t, { useAccount: () => l });
      var n = r(87660),
        i = r(64997),
        s = r(53031),
        a = r(34250),
        o = r(12115),
        c = r(45566);
      let u = (e) => "object" == typeof e && !Array.isArray(e);
      function l() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, s.useConfig)(e);
        return (function (e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : t,
            n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : a.b,
            i = (0, o.useRef)([]),
            s = (0, c.useSyncExternalStoreWithSelector)(
              e,
              t,
              r,
              (e) => e,
              (e, t) => {
                if (u(e) && u(t) && i.current.length) {
                  for (let r of i.current) if (!n(e[r], t[r])) return !1;
                  return !0;
                }
                return n(e, t);
              }
            );
          return (0, o.useMemo)(() => {
            if (u(s)) {
              let e = { ...s },
                t = {};
              for (let [r, n] of Object.entries(e))
                t = {
                  ...t,
                  [r]: {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (i.current.includes(r) || i.current.push(r), n),
                  },
                };
              return Object.defineProperties(e, t), e;
            }
            return s;
          }, [s]);
        })(
          (e) => (0, n.F)(t, { onChange: e }),
          () => (0, i.s)(t)
        );
      }
    },
    2806: (e, t, r) => {
      r.d(t, { L: () => n });
      async function n(e, { serializedTransaction: t }) {
        return e.request(
          { method: "eth_sendRawTransaction", params: [t] },
          { retryCount: 0 }
        );
      }
    },
    3488: (e, t, r) => {
      r.d(t, { J: () => c });
      var n = r(69330),
        i = r(60367),
        s = r(54842),
        a = r(34524),
        o = r(81946);
      async function c(e, t) {
        let { abi: r, address: c, args: u, functionName: l, ...d } = t,
          f = (0, i.p)({ abi: r, args: u, functionName: l });
        try {
          let { data: t } = await (0, a.T)(
            e,
            o.T,
            "call"
          )({ ...d, data: f, to: c });
          return (0, n.e)({
            abi: r,
            args: u,
            functionName: l,
            data: t || "0x",
          });
        } catch (e) {
          throw (0, s.j)(e, {
            abi: r,
            address: c,
            args: u,
            docsPath: "/docs/contract/readContract",
            functionName: l,
          });
        }
      }
    },
    4805: (e, t, r) => {
      r.d(t, { Hi: () => i, ft: () => s, uj: () => o });
      var n = r(7441);
      class i extends n.C {
        constructor({ address: e }) {
          super(`State for account "${e}" is set multiple times.`, {
            name: "AccountStateConflictError",
          });
        }
      }
      class s extends n.C {
        constructor() {
          super("state and stateDiff are set on the same account.", {
            name: "StateAssignmentConflictError",
          });
        }
      }
      function a(e) {
        return e.reduce(
          (e, { slot: t, value: r }) => `${e}        ${t}: ${r}
`,
          ""
        );
      }
      function o(e) {
        return e
          .reduce((e, { address: t, ...r }) => {
            let n = `${e}    ${t}:
`;
            return (
              r.nonce &&
                (n += `      nonce: ${r.nonce}
`),
              r.balance &&
                (n += `      balance: ${r.balance}
`),
              r.code &&
                (n += `      code: ${r.code}
`),
              r.state && ((n += "      state:\n"), (n += a(r.state))),
              r.stateDiff &&
                ((n += "      stateDiff:\n"), (n += a(r.stateDiff))),
              n
            );
          }, "  State Override:\n")
          .slice(0, -1);
      }
    },
    5041: (e, t, r) => {
      r.d(t, { n: () => l });
      var n = r(12115),
        i = r(34560),
        s = r(7165),
        a = r(25910),
        o = r(52020),
        c = class extends a.Q {
          #e;
          #t = void 0;
          #r;
          #n;
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
              (0, o.f8)(this.options, t) ||
                this.#e
                  .getMutationCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    mutation: this.#r,
                    observer: this,
                  }),
              t?.mutationKey &&
              this.options.mutationKey &&
              (0, o.EN)(t.mutationKey) !== (0, o.EN)(this.options.mutationKey)
                ? this.reset()
                : this.#r?.state.status === "pending" &&
                  this.#r.setOptions(this.options);
          }
          onUnsubscribe() {
            this.hasListeners() || this.#r?.removeObserver(this);
          }
          onMutationUpdate(e) {
            this.#i(), this.#s(e);
          }
          getCurrentResult() {
            return this.#t;
          }
          reset() {
            this.#r?.removeObserver(this),
              (this.#r = void 0),
              this.#i(),
              this.#s();
          }
          mutate(e, t) {
            return (
              (this.#n = t),
              this.#r?.removeObserver(this),
              (this.#r = this.#e
                .getMutationCache()
                .build(this.#e, this.options)),
              this.#r.addObserver(this),
              this.#r.execute(e)
            );
          }
          #i() {
            let e = this.#r?.state ?? (0, i.$)();
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
          #s(e) {
            s.jG.batch(() => {
              if (this.#n && this.hasListeners()) {
                let t = this.#t.variables,
                  r = this.#t.context;
                e?.type === "success"
                  ? (this.#n.onSuccess?.(e.data, t, r),
                    this.#n.onSettled?.(e.data, null, t, r))
                  : e?.type === "error" &&
                    (this.#n.onError?.(e.error, t, r),
                    this.#n.onSettled?.(void 0, e.error, t, r));
              }
              this.listeners.forEach((e) => {
                e(this.#t);
              });
            });
          }
        },
        u = r(26715);
      function l(e, t) {
        let r = (0, u.jE)(t),
          [i] = n.useState(() => new c(r, e));
        n.useEffect(() => {
          i.setOptions(e);
        }, [i, e]);
        let a = n.useSyncExternalStore(
            n.useCallback((e) => i.subscribe(s.jG.batchCalls(e)), [i]),
            () => i.getCurrentResult(),
            () => i.getCurrentResult()
          ),
          l = n.useCallback(
            (e, t) => {
              i.mutate(e, t).catch(o.lQ);
            },
            [i]
          );
        if (a.error && (0, o.GU)(i.options.throwOnError, [a.error]))
          throw a.error;
        return { ...a, mutate: l, mutateAsync: a.mutate };
      }
    },
    5400: (e, t, r) => {
      r.d(t, { I: () => c });
      var n = r(35109),
        i = r(6083),
        s = r(70030);
      async function a(e, t) {
        let { allowFailure: r = !0, chainId: n, contracts: a, ...o } = t,
          c = e.getClient({ chainId: n });
        return (0, s.T)(
          c,
          i.C,
          "multicall"
        )({ allowFailure: r, contracts: a, ...o });
      }
      var o = r(9428);
      async function c(e, t) {
        let { allowFailure: r = !0, blockNumber: i, blockTag: s, ...c } = t,
          u = t.contracts;
        try {
          let t = {};
          for (let [r, n] of u.entries()) {
            let i = n.chainId ?? e.state.chainId;
            t[i] || (t[i] = []), t[i]?.push({ contract: n, index: r });
          }
          let n = (
              await Promise.all(
                Object.entries(t).map(([t, n]) =>
                  a(e, {
                    ...c,
                    allowFailure: r,
                    blockNumber: i,
                    blockTag: s,
                    chainId: Number.parseInt(t),
                    contracts: n.map(({ contract: e }) => e),
                  })
                )
              )
            ).flat(),
            o = Object.values(t).flatMap((e) => e.map(({ index: e }) => e));
          return n.reduce((e, t, r) => (e && (e[o[r]] = t), e), []);
        } catch (a) {
          if (a instanceof n.bG) throw a;
          let t = () =>
            u.map((t) => (0, o.J)(e, { ...t, blockNumber: i, blockTag: s }));
          if (r)
            return (await Promise.allSettled(t())).map((e) =>
              "fulfilled" === e.status
                ? { result: e.value, status: "success" }
                : { error: e.reason, result: void 0, status: "failure" }
            );
          return await Promise.all(t());
        }
      }
    },
    6083: (e, t, r) => {
      r.d(t, { C: () => h });
      var n = r(14493),
        i = r(99702),
        s = r(7441),
        a = r(35109),
        o = r(69330),
        c = r(60367),
        u = r(13861),
        l = r(54842),
        d = r(34524),
        f = r(3488);
      async function h(e, t) {
        let {
            account: r,
            allowFailure: h = !0,
            batchSize: p,
            blockNumber: b,
            blockTag: y,
            multicallAddress: m,
            stateOverride: g,
          } = t,
          v = t.contracts,
          w =
            p ??
            (("object" == typeof e.batch?.multicall &&
              e.batch.multicall.batchSize) ||
              1024),
          x = m;
        if (!x) {
          if (!e.chain)
            throw Error(
              "client chain not configured. multicallAddress is required."
            );
          x = (0, u.M)({
            blockNumber: b,
            chain: e.chain,
            contract: "multicall3",
          });
        }
        let E = [[]],
          P = 0,
          C = 0;
        for (let e = 0; e < v.length; e++) {
          let { abi: t, address: n, args: i, functionName: s } = v[e];
          try {
            let e = (0, c.p)({ abi: t, args: i, functionName: s });
            (C += (e.length - 2) / 2),
              w > 0 &&
                C > w &&
                E[P].length > 0 &&
                (P++, (C = (e.length - 2) / 2), (E[P] = [])),
              (E[P] = [...E[P], { allowFailure: !0, callData: e, target: n }]);
          } catch (a) {
            let e = (0, l.j)(a, {
              abi: t,
              address: n,
              args: i,
              docsPath: "/docs/contract/multicall",
              functionName: s,
              sender: r,
            });
            if (!h) throw e;
            E[P] = [...E[P], { allowFailure: !0, callData: "0x", target: n }];
          }
        }
        let I = await Promise.allSettled(
            E.map((t) =>
              (0, d.T)(
                e,
                f.J,
                "readContract"
              )({
                abi: n.v2,
                account: r,
                address: x,
                args: [t],
                blockNumber: b,
                blockTag: y,
                functionName: "aggregate3",
                stateOverride: g,
              })
            )
          ),
          O = [];
        for (let e = 0; e < I.length; e++) {
          let t = I[e];
          if ("rejected" === t.status) {
            if (!h) throw t.reason;
            for (let r = 0; r < E[e].length; r++)
              O.push({ status: "failure", error: t.reason, result: void 0 });
            continue;
          }
          let r = t.value;
          for (let t = 0; t < r.length; t++) {
            let { returnData: n, success: s } = r[t],
              { callData: c } = E[e][t],
              { abi: u, address: d, functionName: f, args: p } = v[O.length];
            try {
              if ("0x" === c) throw new i.O();
              if (!s) throw new a.$S({ data: n });
              let e = (0, o.e)({ abi: u, args: p, data: n, functionName: f });
              O.push(h ? { result: e, status: "success" } : e);
            } catch (t) {
              let e = (0, l.j)(t, {
                abi: u,
                address: d,
                args: p,
                docsPath: "/docs/contract/multicall",
                functionName: f,
              });
              if (!h) throw e;
              O.push({ error: e, result: void 0, status: "failure" });
            }
          }
        }
        if (O.length !== v.length) throw new s.C("multicall results mismatch");
        return O;
      }
    },
    6158: (e, t, r) => {
      r.d(t, { x: () => d });
      var n = r(35883),
        i = r(24578),
        s = r(32840),
        a = r(87094),
        o = r(27493),
        c = r(67622);
      async function u({ hash: e, signature: t }) {
        let n = (0, s.q)(e) ? e : (0, c.nj)(e),
          { secp256k1: i } = await Promise.resolve().then(r.bind(r, 34132)),
          u = (() => {
            if ("object" == typeof t && "r" in t && "s" in t) {
              let { r: e, s: r, v: n, yParity: s } = t,
                a = l(Number(s ?? n));
              return new i.Signature((0, o.uU)(e), (0, o.uU)(r)).addRecoveryBit(
                a
              );
            }
            let e = (0, s.q)(t) ? t : (0, c.nj)(t);
            if (65 !== (0, a.E)(e)) throw Error("invalid signature length");
            let r = l((0, o.ME)(`0x${e.slice(130)}`));
            return i.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(
              r
            );
          })()
            .recoverPublicKey(n.substring(2))
            .toHex(!1);
        return `0x${u}`;
      }
      function l(e) {
        if (0 === e || 1 === e) return e;
        if (27 === e) return 0;
        if (28 === e) return 1;
        throw Error("Invalid yParityOrV value");
      }
      async function d({ hash: e, signature: t }) {
        var r = await u({ hash: e, signature: t });
        let s = (0, i.S)(`0x${r.substring(4)}`).substring(26);
        return (0, n.o)(`0x${s}`);
      }
    },
    6784: (e, t, r) => {
      r.d(t, { II: () => d, v_: () => c, wm: () => l });
      var n = r(50920),
        i = r(21239),
        s = r(73504),
        a = r(52020);
      function o(e) {
        return Math.min(1e3 * 2 ** e, 3e4);
      }
      function c(e) {
        return (e ?? "online") !== "online" || i.t.isOnline();
      }
      var u = class extends Error {
        constructor(e) {
          super("CancelledError"),
            (this.revert = e?.revert),
            (this.silent = e?.silent);
        }
      };
      function l(e) {
        return e instanceof u;
      }
      function d(e) {
        let t,
          r = !1,
          l = 0,
          d = !1,
          f = (0, s.T)(),
          h = () =>
            n.m.isFocused() &&
            ("always" === e.networkMode || i.t.isOnline()) &&
            e.canRun(),
          p = () => c(e.networkMode) && e.canRun(),
          b = (r) => {
            d || ((d = !0), e.onSuccess?.(r), t?.(), f.resolve(r));
          },
          y = (r) => {
            d || ((d = !0), e.onError?.(r), t?.(), f.reject(r));
          },
          m = () =>
            new Promise((r) => {
              (t = (e) => {
                (d || h()) && r(e);
              }),
                e.onPause?.();
            }).then(() => {
              (t = void 0), d || e.onContinue?.();
            }),
          g = () => {
            let t;
            if (d) return;
            let n = 0 === l ? e.initialPromise : void 0;
            try {
              t = n ?? e.fn();
            } catch (e) {
              t = Promise.reject(e);
            }
            Promise.resolve(t)
              .then(b)
              .catch((t) => {
                if (d) return;
                let n = e.retry ?? 3 * !a.S$,
                  i = e.retryDelay ?? o,
                  s = "function" == typeof i ? i(l, t) : i,
                  c =
                    !0 === n ||
                    ("number" == typeof n && l < n) ||
                    ("function" == typeof n && n(l, t));
                if (r || !c) return void y(t);
                l++,
                  e.onFail?.(l, t),
                  (0, a.yy)(s)
                    .then(() => (h() ? void 0 : m()))
                    .then(() => {
                      r ? y(t) : g();
                    });
              });
          };
        return {
          promise: f,
          cancel: (t) => {
            d || (y(new u(t)), e.abort?.());
          },
          continue: () => (t?.(), f),
          cancelRetry: () => {
            r = !0;
          },
          continueRetry: () => {
            r = !1;
          },
          canStart: p,
          start: () => (p() ? g() : m().then(g), f),
        };
      }
    },
    7165: (e, t, r) => {
      r.d(t, { jG: () => i });
      var n = (e) => setTimeout(e, 0),
        i = (function () {
          let e = [],
            t = 0,
            r = (e) => {
              e();
            },
            i = (e) => {
              e();
            },
            s = n,
            a = (n) => {
              t
                ? e.push(n)
                : s(() => {
                    r(n);
                  });
            },
            o = () => {
              let t = e;
              (e = []),
                t.length &&
                  s(() => {
                    i(() => {
                      t.forEach((e) => {
                        r(e);
                      });
                    });
                  });
            };
          return {
            batch: (e) => {
              let r;
              t++;
              try {
                r = e();
              } finally {
                --t || o();
              }
              return r;
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
              r = e;
            },
            setBatchNotifyFunction: (e) => {
              i = e;
            },
            setScheduler: (e) => {
              s = e;
            },
          };
        })();
    },
    7441: (e, t, r) => {
      r.d(t, { C: () => s });
      let n = "2.30.1",
        i = {
          getDocsUrl: ({ docsBaseUrl: e, docsPath: t = "", docsSlug: r }) =>
            t ? `${e ?? "https://viem.sh"}${t}${r ? `#${r}` : ""}` : void 0,
          version: `viem@${n}`,
        };
      class s extends Error {
        constructor(e, t = {}) {
          let r =
              t.cause instanceof s
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            a = (t.cause instanceof s && t.cause.docsPath) || t.docsPath,
            o = i.getDocsUrl?.({ ...t, docsPath: a });
          super(
            [
              e || "An error occurred.",
              "",
              ...(t.metaMessages ? [...t.metaMessages, ""] : []),
              ...(o ? [`Docs: ${o}`] : []),
              ...(r ? [`Details: ${r}`] : []),
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
            (this.details = r),
            (this.docsPath = a),
            (this.metaMessages = t.metaMessages),
            (this.name = t.name ?? this.name),
            (this.shortMessage = e),
            (this.version = n);
        }
        walk(e) {
          return (function e(t, r) {
            return r?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t && void 0 !== t.cause
              ? e(t.cause, r)
              : r
              ? null
              : t;
          })(this, e);
        }
      }
    },
    7612: (e, t, r) => {
      r.d(t, { F: () => o });
      var n = r(80844),
        i = r(67622),
        s = r(24578),
        a = r(70872);
      function o(e) {
        let t = e.replace(/^\.|\.$/gm, "");
        if (0 === t.length) return new Uint8Array(1);
        let r = new Uint8Array((0, n.Af)(t).byteLength + 2),
          o = 0,
          c = t.split(".");
        for (let e = 0; e < c.length; e++) {
          var u;
          let t = (0, n.Af)(c[e]);
          t.byteLength > 255 &&
            (t = (0, n.Af)(
              ((u = (function (e) {
                let t = new Uint8Array(32).fill(0);
                return e ? (0, a.q)(e) || (0, s.S)((0, n.Af)(e)) : (0, i.My)(t);
              })(c[e])),
              `[${u.slice(2)}]`)
            )),
            (r[o] = t.length),
            r.set(t, o + 1),
            (o += t.length + 1);
        }
        return r.byteLength !== o + 1 ? r.slice(0, o + 1) : r;
      }
    },
    7671: (e, t, r) => {
      r.d(t, { o: () => n });
      function n(e, { format: t }) {
        if (!t) return {};
        let r = {};
        return (
          !(function t(n) {
            for (let i of Object.keys(n))
              i in e && (r[i] = e[i]),
                n[i] &&
                  "object" == typeof n[i] &&
                  !Array.isArray(n[i]) &&
                  t(n[i]);
          })(t(e || {})),
          r
        );
      }
    },
    7739: (e, t, r) => {
      r.d(t, { g: () => n });
      function n(e, { method: t }) {
        let r = {};
        return (
          "fallback" === e.transport.type &&
            e.transport.onResponse?.(
              ({ method: e, response: n, status: i, transport: s }) => {
                "success" === i && t === e && (r[n] = s.request);
              }
            ),
          (t) => r[t] || e.request
        );
      }
    },
    7900: (e, t, r) => {
      r.d(t, { Zh: () => c });
      var n = r(13423),
        i = r(79731),
        s = r(67622),
        a = r(24578),
        o = r(90477);
      function c(e) {
        let { domain: t = {}, message: r, primaryType: n } = e,
          s = { EIP712Domain: (0, o.H4)({ domain: t }), ...e.types };
        (0, o.$$)({ domain: t, message: r, primaryType: n, types: s });
        let c = ["0x1901"];
        return (
          t &&
            c.push(
              (function ({ domain: e, types: t }) {
                return u({ data: e, primaryType: "EIP712Domain", types: t });
              })({ domain: t, types: s })
            ),
          "EIP712Domain" !== n &&
            c.push(u({ data: r, primaryType: n, types: s })),
          (0, a.S)((0, i.xW)(c))
        );
      }
      function u({ data: e, primaryType: t, types: r }) {
        let i = (function e({ data: t, primaryType: r, types: i }) {
          let o = [{ type: "bytes32" }],
            c = [
              (function ({ primaryType: e, types: t }) {
                let r = (0, s.nj)(
                  (function ({ primaryType: e, types: t }) {
                    let r = "",
                      n = (function e(
                        { primaryType: t, types: r },
                        n = new Set()
                      ) {
                        let i = t.match(/^\w*/u),
                          s = i?.[0];
                        if (n.has(s) || void 0 === r[s]) return n;
                        for (let t of (n.add(s), r[s]))
                          e({ primaryType: t.type, types: r }, n);
                        return n;
                      })({ primaryType: e, types: t });
                    for (let i of (n.delete(e), [e, ...Array.from(n).sort()]))
                      r += `${i}(${t[i]
                        .map(({ name: e, type: t }) => `${t} ${e}`)
                        .join(",")})`;
                    return r;
                  })({ primaryType: e, types: t })
                );
                return (0, a.S)(r);
              })({ primaryType: r, types: i }),
            ];
          for (let u of i[r]) {
            let [r, l] = (function t({ types: r, name: i, type: o, value: c }) {
              if (void 0 !== r[o])
                return [
                  { type: "bytes32" },
                  (0, a.S)(e({ data: c, primaryType: o, types: r })),
                ];
              if ("bytes" === o) {
                let e = c.length % 2 ? "0" : "";
                return (
                  (c = `0x${e + c.slice(2)}`),
                  [{ type: "bytes32" }, (0, a.S)(c)]
                );
              }
              if ("string" === o)
                return [{ type: "bytes32" }, (0, a.S)((0, s.nj)(c))];
              if (o.lastIndexOf("]") === o.length - 1) {
                let e = o.slice(0, o.lastIndexOf("[")),
                  s = c.map((n) => t({ name: i, type: e, types: r, value: n }));
                return [
                  { type: "bytes32" },
                  (0, a.S)(
                    (0, n.h)(
                      s.map(([e]) => e),
                      s.map(([, e]) => e)
                    )
                  ),
                ];
              }
              return [{ type: o }, c];
            })({ types: i, name: u.name, type: u.type, value: t[u.name] });
            o.push(r), c.push(l);
          }
          return (0, n.h)(o, c);
        })({ data: e, primaryType: t, types: r });
        return (0, a.S)(i);
      }
    },
    8512: (e, t, r) => {
      let n, i, s;
      r.d(t, { lY: () => P });
      var a = r(48701),
        o = r(19989);
      let c = BigInt(0),
        u = BigInt(1),
        l = BigInt(2),
        d = BigInt(7),
        f = BigInt(256),
        h = BigInt(113),
        p = [],
        b = [],
        y = [];
      for (let e = 0, t = u, r = 1, n = 0; e < 24; e++) {
        ([r, n] = [n, (2 * r + 3 * n) % 5]),
          p.push(2 * (5 * n + r)),
          b.push((((e + 1) * (e + 2)) / 2) % 64);
        let i = c;
        for (let e = 0; e < 7; e++)
          (t = ((t << u) ^ ((t >> d) * h)) % f) & l &&
            (i ^= u << ((u << BigInt(e)) - u));
        y.push(i);
      }
      let m = (0, a.lD)(y, !0),
        g = m[0],
        v = m[1],
        w = (e, t, r) => (r > 32 ? (0, a.WM)(e, t, r) : (0, a.P5)(e, t, r)),
        x = (e, t, r) => (r > 32 ? (0, a.im)(e, t, r) : (0, a.B4)(e, t, r));
      class E extends o.Vw {
        constructor(e, t, r, n = !1, i = 24) {
          if (
            (super(),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (this.enableXOF = !1),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = r),
            (this.enableXOF = n),
            (this.rounds = i),
            (0, o.Fe)(r),
            !(0 < e && e < 200))
          )
            throw Error("only keccak-f1600 function is supported");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, o.DH)(this.state));
        }
        clone() {
          return this._cloneInto();
        }
        keccak() {
          (0, o.fd)(this.state32),
            (function (e, t = 24) {
              let r = new Uint32Array(10);
              for (let n = 24 - t; n < 24; n++) {
                for (let t = 0; t < 10; t++)
                  r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let n = (t + 8) % 10,
                    i = (t + 2) % 10,
                    s = r[i],
                    a = r[i + 1],
                    o = w(s, a, 1) ^ r[n],
                    c = x(s, a, 1) ^ r[n + 1];
                  for (let r = 0; r < 50; r += 10)
                    (e[t + r] ^= o), (e[t + r + 1] ^= c);
                }
                let t = e[2],
                  i = e[3];
                for (let r = 0; r < 24; r++) {
                  let n = b[r],
                    s = w(t, i, n),
                    a = x(t, i, n),
                    o = p[r];
                  (t = e[o]), (i = e[o + 1]), (e[o] = s), (e[o + 1] = a);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let n = 0; n < 10; n++) r[n] = e[t + n];
                  for (let n = 0; n < 10; n++)
                    e[t + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10];
                }
                (e[0] ^= g[n]), (e[1] ^= v[n]);
              }
              (0, o.uH)(r);
            })(this.state32, this.rounds),
            (0, o.fd)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, o.CC)(this), (e = (0, o.ZJ)(e)), (0, o.DO)(e);
          let { blockLen: t, state: r } = this,
            n = e.length;
          for (let i = 0; i < n; ) {
            let s = Math.min(t - this.pos, n - i);
            for (let t = 0; t < s; t++) r[this.pos++] ^= e[i++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: r, blockLen: n } = this;
          (e[r] ^= t),
            (128 & t) != 0 && r === n - 1 && this.keccak(),
            (e[n - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, o.CC)(this, !1), (0, o.DO)(e), this.finish();
          let t = this.state,
            { blockLen: r } = this;
          for (let n = 0, i = e.length; n < i; ) {
            this.posOut >= r && this.keccak();
            let s = Math.min(r - this.posOut, i - n);
            e.set(t.subarray(this.posOut, this.posOut + s), n),
              (this.posOut += s),
              (n += s);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (0, o.Fe)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, o.Ht)(e, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), (0, o.uH)(this.state);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: r,
            outputLen: n,
            rounds: i,
            enableXOF: s,
          } = this;
          return (
            e || (e = new E(t, r, n, s, i)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = i),
            (e.suffix = r),
            (e.outputLen = n),
            (e.enableXOF = s),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let P = ((n = 1), (i = 136), (s = 32), (0, o.qj)(() => new E(i, n, s)));
    },
    9428: (e, t, r) => {
      r.d(t, { J: () => s });
      var n = r(3488),
        i = r(70030);
      function s(e, t) {
        let { chainId: r, ...s } = t,
          a = e.getClient({ chainId: r });
        return (0, i.T)(a, n.J, "readContract")(s);
      }
    },
    9775: (e, t, r) => {
      r.d(t, { B: () => b });
      var n = r(14493),
        i = r(69330),
        s = r(60367),
        a = r(13861),
        o = r(54335),
        c = r(67622),
        u = r(41052),
        l = r(95041),
        d = r(32160),
        f = r(7612),
        h = r(34524),
        p = r(3488);
      async function b(e, t) {
        let {
            blockNumber: r,
            blockTag: b,
            coinType: y,
            name: m,
            gatewayUrls: g,
            strict: v,
          } = t,
          { chain: w } = e,
          x = (() => {
            if (t.universalResolverAddress) return t.universalResolverAddress;
            if (!w)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, a.M)({
              blockNumber: r,
              chain: w,
              contract: "ensUniversalResolver",
            });
          })(),
          E = w?.ensTlds;
        if (E && !E.some((e) => m.endsWith(e))) return null;
        try {
          let t = (0, s.p)({
              abi: n.Rm,
              functionName: "addr",
              ...(null != y
                ? { args: [(0, d.k)(m), BigInt(y)] }
                : { args: [(0, d.k)(m)] }),
            }),
            a = {
              address: x,
              abi: n.Ag,
              functionName: "resolve",
              args: [(0, c.nj)((0, f.F)(m)), t, g ?? [l.J]],
              blockNumber: r,
              blockTag: b,
            },
            u = (0, h.T)(e, p.J, "readContract"),
            v = await u(a);
          if ("0x" === v[0]) return null;
          let w = (0, i.e)({
            abi: n.Rm,
            args: null != y ? [(0, d.k)(m), BigInt(y)] : void 0,
            functionName: "addr",
            data: v[0],
          });
          if ("0x" === w || "0x00" === (0, o.B)(w)) return null;
          return w;
        } catch (e) {
          if (v) throw e;
          if ((0, u.J)(e, "resolve")) return null;
          throw e;
        }
      }
    },
    10231: (e, t, r) => {
      r.d(t, { u: () => n });
      async function n(e) {
        return new Promise((t) => setTimeout(t, e));
      }
    },
    12914: (e, t, r) => {
      r.d(t, { b4: () => i, uP: () => s });
      var n = r(27493);
      let i = {
        "0x0": "legacy",
        "0x1": "eip2930",
        "0x2": "eip1559",
        "0x3": "eip4844",
        "0x4": "eip7702",
      };
      function s(e) {
        let t = {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          chainId: e.chainId ? (0, n.ME)(e.chainId) : void 0,
          gas: e.gas ? BigInt(e.gas) : void 0,
          gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
          maxFeePerBlobGas: e.maxFeePerBlobGas
            ? BigInt(e.maxFeePerBlobGas)
            : void 0,
          maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
          maxPriorityFeePerGas: e.maxPriorityFeePerGas
            ? BigInt(e.maxPriorityFeePerGas)
            : void 0,
          nonce: e.nonce ? (0, n.ME)(e.nonce) : void 0,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          type: e.type ? i[e.type] : void 0,
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
    },
    13423: (e, t, r) => {
      r.d(t, { h: () => p, k: () => y });
      var n = r(99702),
        i = r(36444),
        s = r(7441),
        a = r(94201),
        o = r(81757),
        c = r(79731),
        u = r(36984),
        l = r(87094),
        d = r(93727),
        f = r(67622),
        h = r(38697);
      function p(e, t) {
        if (e.length !== t.length)
          throw new n.YE({ expectedLength: e.length, givenLength: t.length });
        let r = b(
          (function ({ params: e, values: t }) {
            let r = [];
            for (let p = 0; p < e.length; p++)
              r.push(
                (function e({ param: t, value: r }) {
                  let p = y(t.type);
                  if (p) {
                    let [i, s] = p;
                    return (function (t, { length: r, param: i }) {
                      let s = null === r;
                      if (!Array.isArray(t)) throw new n.dm(t);
                      if (!s && t.length !== r)
                        throw new n.Nc({
                          expectedLength: r,
                          givenLength: t.length,
                          type: `${i.type}[${r}]`,
                        });
                      let a = !1,
                        o = [];
                      for (let r = 0; r < t.length; r++) {
                        let n = e({ param: i, value: t[r] });
                        n.dynamic && (a = !0), o.push(n);
                      }
                      if (s || a) {
                        let e = b(o);
                        if (s) {
                          let t = (0, f.cK)(o.length, { size: 32 });
                          return {
                            dynamic: !0,
                            encoded: o.length > 0 ? (0, c.xW)([t, e]) : t,
                          };
                        }
                        if (a) return { dynamic: !0, encoded: e };
                      }
                      return {
                        dynamic: !1,
                        encoded: (0, c.xW)(o.map(({ encoded: e }) => e)),
                      };
                    })(r, { length: i, param: { ...t, type: s } });
                  }
                  if ("tuple" === t.type)
                    return (function (t, { param: r }) {
                      let n = !1,
                        i = [];
                      for (let s = 0; s < r.components.length; s++) {
                        let a = r.components[s],
                          o = Array.isArray(t) ? s : a.name,
                          c = e({ param: a, value: t[o] });
                        i.push(c), c.dynamic && (n = !0);
                      }
                      return {
                        dynamic: n,
                        encoded: n
                          ? b(i)
                          : (0, c.xW)(i.map(({ encoded: e }) => e)),
                      };
                    })(r, { param: t });
                  if ("address" === t.type) {
                    var m = r;
                    if (!(0, o.P)(m)) throw new i.M({ address: m });
                    return { dynamic: !1, encoded: (0, u.db)(m.toLowerCase()) };
                  }
                  if ("bool" === t.type) {
                    var g = r;
                    if ("boolean" != typeof g)
                      throw new s.C(
                        `Invalid boolean value: "${g}" (type: ${typeof g}). Expected: \`true\` or \`false\`.`
                      );
                    return { dynamic: !1, encoded: (0, u.db)((0, f.$P)(g)) };
                  }
                  if (t.type.startsWith("uint") || t.type.startsWith("int")) {
                    let e = t.type.startsWith("int"),
                      [, , n = "256"] = h.Ge.exec(t.type) ?? [];
                    return (function (e, { signed: t, size: r = 256 }) {
                      if ("number" == typeof r) {
                        let n = 2n ** (BigInt(r) - (t ? 1n : 0n)) - 1n,
                          i = t ? -n - 1n : 0n;
                        if (e > n || e < i)
                          throw new a.Ty({
                            max: n.toString(),
                            min: i.toString(),
                            signed: t,
                            size: r / 8,
                            value: e.toString(),
                          });
                      }
                      return {
                        dynamic: !1,
                        encoded: (0, f.cK)(e, { size: 32, signed: t }),
                      };
                    })(r, { signed: e, size: Number(n) });
                  }
                  if (t.type.startsWith("bytes"))
                    return (function (e, { param: t }) {
                      let [, r] = t.type.split("bytes"),
                        i = (0, l.E)(e);
                      if (!r) {
                        let t = e;
                        return (
                          i % 32 != 0 &&
                            (t = (0, u.db)(t, {
                              dir: "right",
                              size: 32 * Math.ceil((e.length - 2) / 2 / 32),
                            })),
                          {
                            dynamic: !0,
                            encoded: (0, c.xW)([
                              (0, u.db)((0, f.cK)(i, { size: 32 })),
                              t,
                            ]),
                          }
                        );
                      }
                      if (i !== Number.parseInt(r))
                        throw new n.gH({
                          expectedSize: Number.parseInt(r),
                          value: e,
                        });
                      return {
                        dynamic: !1,
                        encoded: (0, u.db)(e, { dir: "right" }),
                      };
                    })(r, { param: t });
                  if ("string" === t.type) {
                    var v = r;
                    let e = (0, f.i3)(v),
                      t = Math.ceil((0, l.E)(e) / 32),
                      n = [];
                    for (let r = 0; r < t; r++)
                      n.push(
                        (0, u.db)((0, d.di)(e, 32 * r, (r + 1) * 32), {
                          dir: "right",
                        })
                      );
                    return {
                      dynamic: !0,
                      encoded: (0, c.xW)([
                        (0, u.db)((0, f.cK)((0, l.E)(e), { size: 32 })),
                        ...n,
                      ]),
                    };
                  }
                  throw new n.nK(t.type, {
                    docsPath: "/docs/contract/encodeAbiParameters",
                  });
                })({ param: e[p], value: t[p] })
              );
            return r;
          })({ params: e, values: t })
        );
        return 0 === r.length ? "0x" : r;
      }
      function b(e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let { dynamic: n, encoded: i } = e[r];
          n ? (t += 32) : (t += (0, l.E)(i));
        }
        let r = [],
          n = [],
          i = 0;
        for (let s = 0; s < e.length; s++) {
          let { dynamic: a, encoded: o } = e[s];
          a
            ? (r.push((0, f.cK)(t + i, { size: 32 })),
              n.push(o),
              (i += (0, l.E)(o)))
            : r.push(o);
        }
        return (0, c.xW)([...r, ...n]);
      }
      function y(e) {
        let t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
    },
    13494: (e, t, r) => {
      r.d(t, { h: () => s });
      var n = r(69432),
        i = r(35886);
      async function s(e, { hash: t }) {
        let r = await e.request(
          { method: "eth_getTransactionReceipt", params: [t] },
          { dedupe: !0 }
        );
        if (!r) throw new n.Kc({ hash: t });
        return (e.chain?.formatters?.transactionReceipt?.format || i.uL)(r);
      }
    },
    13649: (e, t, r) => {
      r.d(t, { y: () => s });
      var n = r(27493),
        i = r(67622);
      async function s(
        e,
        { address: t, blockTag: r = "latest", blockNumber: s }
      ) {
        let a = await e.request(
          {
            method: "eth_getTransactionCount",
            params: [t, "bigint" == typeof s ? (0, i.cK)(s) : r],
          },
          { dedupe: !!s }
        );
        return (0, n.ME)(a);
      }
    },
    13861: (e, t, r) => {
      r.d(t, { M: () => i });
      var n = r(30445);
      function i({ blockNumber: e, chain: t, contract: r }) {
        let i = t?.contracts?.[r];
        if (!i) throw new n.rj({ chain: t, contract: { name: r } });
        if (e && i.blockCreated && i.blockCreated > e)
          throw new n.rj({
            blockNumber: e,
            chain: t,
            contract: { name: r, blockCreated: i.blockCreated },
          });
        return i.address;
      }
    },
    14493: (e, t, r) => {
      r.d(t, {
        Ag: () => a,
        Rm: () => u,
        SJ: () => c,
        _: () => l,
        b2: () => i,
        oX: () => o,
        v2: () => n,
      });
      let n = [
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
        s = [
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
          ...s,
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
        o = [
          ...s,
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
        u = [
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
        l = [
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
    15071: (e, t, r) => {
      r.d(t, { useEnsName: () => u });
      var n = r(55394),
        i = r(70030),
        s = r(62108),
        a = r(31959),
        o = r(18224),
        c = r(53031);
      function u() {
        var e, t;
        let r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: u, query: l = {} } = r,
          d = (0, c.useConfig)(r),
          f = (0, o.useChainId)({ config: d }),
          h = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: r, scopeKey: s, ...a } = t[1];
                if (!r) throw Error("address is required");
                let { chainId: o, ...c } = { ...a, address: r },
                  u = e.getClient({ chainId: o });
                return (0, i.T)(u, n.s, "getEnsName")(c);
              },
              queryKey: (function (e = {}) {
                return ["ensName", (0, s.xO)(e)];
              })(t),
            };
          })(d, { ...r, chainId: null != (e = r.chainId) ? e : f }),
          p = !!(u && (null == (t = l.enabled) || t));
        return (0, a.IT)({ ...l, ...h, enabled: p });
      }
    },
    15313: (e, t, r) => {
      r.d(t, { LX: () => n, WN: () => i, nP: () => s });
      let n =
          "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
        i =
          "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe",
        s =
          "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";
    },
    16652: (e, t, r) => {
      r.d(t, { B: () => i });
      var n = r(45446);
      function i(e) {
        return "function" === e.type
          ? `function ${e.name}(${(0, n.Q)(e.inputs)})${
              e.stateMutability && "nonpayable" !== e.stateMutability
                ? ` ${e.stateMutability}`
                : ""
            }${e.outputs?.length ? ` returns (${(0, n.Q)(e.outputs)})` : ""}`
          : "event" === e.type
          ? `event ${e.name}(${(0, n.Q)(e.inputs)})`
          : "error" === e.type
          ? `error ${e.name}(${(0, n.Q)(e.inputs)})`
          : "constructor" === e.type
          ? `constructor(${(0, n.Q)(e.inputs)})${
              "payable" === e.stateMutability ? " payable" : ""
            }`
          : "fallback" === e.type
          ? `fallback() external${
              "payable" === e.stateMutability ? " payable" : ""
            }`
          : "receive() external payable";
      }
    },
    16712: (e, t, r) => {
      r.d(t, { Q: () => v });
      var n = r(19405),
        i = r(7441),
        s = r(83987),
        a = r(67622),
        o = r(44494),
        c = r(31942),
        u = r(69432);
      class l extends i.C {
        constructor(
          e,
          {
            account: t,
            docsPath: r,
            chain: n,
            data: i,
            gas: s,
            gasPrice: a,
            maxFeePerGas: l,
            maxPriorityFeePerGas: d,
            nonce: f,
            to: h,
            value: p,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: r,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Estimate Gas Arguments:",
              (0, u.aO)({
                from: t?.address,
                to: h,
                value:
                  void 0 !== p &&
                  `${(0, o.c)(p)} ${n?.nativeCurrency?.symbol || "ETH"}`,
                data: i,
                gas: s,
                gasPrice: void 0 !== a && `${(0, c.Q)(a)} gwei`,
                maxFeePerGas: void 0 !== l && `${(0, c.Q)(l)} gwei`,
                maxPriorityFeePerGas: void 0 !== d && `${(0, c.Q)(d)} gwei`,
                nonce: f,
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
      var d = r(42264),
        f = r(35020),
        h = r(7671),
        p = r(76743),
        b = r(25507),
        y = r(65358),
        m = r(73979),
        g = r(59742);
      async function v(e, t) {
        let { account: r = e.account } = t,
          o = r ? (0, n.J)(r) : void 0;
        try {
          let {
              accessList: r,
              authorizationList: n,
              blobs: u,
              blobVersionedHashes: l,
              blockNumber: d,
              blockTag: f,
              data: v,
              gas: w,
              gasPrice: x,
              maxFeePerBlobGas: E,
              maxFeePerGas: P,
              maxPriorityFeePerGas: C,
              nonce: I,
              value: O,
              stateOverride: A,
              ...$
            } = await (0, m.ft)(e, {
              ...t,
              parameters:
                o?.type === "local" ? void 0 : ["blobVersionedHashes"],
            }),
            B = ("bigint" == typeof d ? (0, a.cK)(d) : void 0) || f,
            S = (0, b.yH)(A),
            M = await (async () =>
              $.to
                ? $.to
                : n && n.length > 0
                ? await (0, s.g)({ authorization: n[0] }).catch(() => {
                    throw new i.C(
                      "`to` is required. Could not infer from `authorizationList`"
                    );
                  })
                : void 0)();
          (0, y.c)(t);
          let R = e.chain?.formatters?.transactionRequest?.format,
            T = (R || p.Bv)({
              ...(0, h.o)($, { format: R }),
              from: o?.address,
              accessList: r,
              authorizationList: n,
              blobs: u,
              blobVersionedHashes: l,
              data: v,
              gas: w,
              gasPrice: x,
              maxFeePerBlobGas: E,
              maxFeePerGas: P,
              maxPriorityFeePerGas: C,
              nonce: I,
              to: M,
              value: O,
            });
          function c(t) {
            let { block: r, request: n, rpcStateOverride: i } = t;
            return e.request({
              method: "eth_estimateGas",
              params: i ? [n, r ?? "latest", i] : r ? [n, r] : [n],
            });
          }
          let j = BigInt(
            await c({ block: B, request: T, rpcStateOverride: S })
          );
          if (n) {
            let t = await (0, g.r)(e, { address: T.from }),
              r = await Promise.all(
                n.map(async (e) => {
                  let { address: r } = e,
                    n = await c({
                      block: B,
                      request: {
                        authorizationList: void 0,
                        data: v,
                        from: o?.address,
                        to: r,
                        value: (0, a.cK)(t),
                      },
                      rpcStateOverride: S,
                    }).catch(() => 100000n);
                  return 2n * BigInt(n);
                })
              );
            j += r.reduce((e, t) => e + t, 0n);
          }
          return j;
        } catch (r) {
          throw (function (e, { docsPath: t, ...r }) {
            return new l(
              (() => {
                let t = (0, f.l)(e, r);
                return t instanceof d.RM ? e : t;
              })(),
              { docsPath: t, ...r }
            );
          })(r, { ...t, account: o, chain: e.chain });
        }
      }
    },
    17130: (e, t, r) => {
      r.d(t, {
        FO: () => b,
        If: () => x,
        Ji: () => d,
        Rv: () => c,
        WL: () => p,
        Yo: () => g,
        ej: () => f,
        fC: () => C,
        iB: () => u,
        kz: () => a,
        l9: () => m,
        pc: () => s,
        sP: () => P,
        v7: () => I,
        v8: () => w,
      });
      var n = r(59126);
      let i = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
      function s(e) {
        return i.test(e);
      }
      function a(e) {
        return (0, n.Yv)(i, e);
      }
      let o = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/;
      function c(e) {
        return o.test(e);
      }
      function u(e) {
        return (0, n.Yv)(o, e);
      }
      let l =
        /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/;
      function d(e) {
        return l.test(e);
      }
      function f(e) {
        return (0, n.Yv)(l, e);
      }
      let h =
        /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/;
      function p(e) {
        return h.test(e);
      }
      function b(e) {
        return (0, n.Yv)(h, e);
      }
      let y =
        /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/;
      function m(e) {
        return y.test(e);
      }
      function g(e) {
        return (0, n.Yv)(y, e);
      }
      let v = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/;
      function w(e) {
        return v.test(e);
      }
      function x(e) {
        return (0, n.Yv)(v, e);
      }
      let E = /^receive\(\) external payable$/;
      function P(e) {
        return E.test(e);
      }
      let C = new Set(["indexed"]),
        I = new Set(["calldata", "memory", "storage"]);
    },
    17249: (e, t, r) => {
      r.d(t, { I: () => s });
      var n = r(73991),
        i = r(87632);
      async function s(e, { filter: t }) {
        let r = "strict" in t && t.strict,
          s = await t.request({
            method: "eth_getFilterChanges",
            params: [t.id],
          });
        if ("string" == typeof s[0]) return s;
        let a = s.map((e) => (0, i.e)(e));
        return "abi" in t && t.abi
          ? (0, n.p)({ abi: t.abi, logs: a, strict: r })
          : a;
      }
    },
    17255: (e, t, r) => {
      r.d(t, { h: () => s });
      var n = r(36444),
        i = r(81757);
      function s(e, t) {
        if (!(0, i.P)(e, { strict: !1 })) throw new n.M({ address: e });
        if (!(0, i.P)(t, { strict: !1 })) throw new n.M({ address: t });
        return e.toLowerCase() === t.toLowerCase();
      }
    },
    17327: (e, t, r) => {
      r.d(t, { $: () => i });
      var n = r(12914);
      function i(e) {
        let t = (e.transactions ?? []).map((e) =>
          "string" == typeof e ? e : (0, n.uP)(e)
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
    },
    18224: (e, t, r) => {
      function n(e) {
        return e.state.chainId;
      }
      r.d(t, { useChainId: () => a });
      var i = r(12115),
        s = r(53031);
      function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, s.useConfig)(e);
        return (0, i.useSyncExternalStore)(
          (e) =>
            (function (e, t) {
              let { onChange: r } = t;
              return e.subscribe((e) => e.chainId, r);
            })(t, { onChange: e }),
          () => n(t),
          () => n(t)
        );
      }
    },
    18619: (e, t, r) => {
      r.d(t, { D: () => c });
      var n = r(13861),
        i = r(67622),
        s = r(7612),
        a = r(34524),
        o = r(3488);
      async function c(e, t) {
        let { blockNumber: r, blockTag: c, name: u } = t,
          { chain: l } = e,
          d = (() => {
            if (t.universalResolverAddress) return t.universalResolverAddress;
            if (!l)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, n.M)({
              blockNumber: r,
              chain: l,
              contract: "ensUniversalResolver",
            });
          })(),
          f = l?.ensTlds;
        if (f && !f.some((e) => u.endsWith(e)))
          throw Error(
            `${u} is not a valid ENS TLD (${f?.join(", ")}) for chain "${
              l.name
            }" (id: ${l.id}).`
          );
        let [h] = await (0, a.T)(
          e,
          o.J,
          "readContract"
        )({
          address: d,
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
          args: [(0, i.nj)((0, s.F)(u))],
          blockNumber: r,
          blockTag: c,
        });
        return h;
      }
    },
    19192: (e, t, r) => {
      r.d(t, { d: () => a });
      var n = r(34524),
        i = r(94181),
        s = r(30106);
      async function a(e, { hash: t, transactionReceipt: r }) {
        let [a, o] = await Promise.all([
            (0, n.T)(e, i.G, "getBlockNumber")({}),
            t ? (0, n.T)(e, s.x, "getTransaction")({ hash: t }) : void 0,
          ]),
          c = r?.blockNumber || o?.blockNumber;
        return c ? a - c + 1n : 0n;
      }
    },
    19405: (e, t, r) => {
      r.d(t, { J: () => n });
      function n(e) {
        return "string" == typeof e ? { address: e, type: "json-rpc" } : e;
      }
    },
    19444: (e, t, r) => {
      r.d(t, { useBalance: () => y });
      var n = r(27493),
        i = r(54335),
        s = r(1405),
        a = r(59742),
        o = r(70030),
        c = r(32330),
        u = r(5400);
      async function l(e, t) {
        let {
          address: r,
          blockNumber: u,
          blockTag: l,
          chainId: f,
          token: h,
          unit: p = "ether",
        } = t;
        if (h)
          try {
            return await d(e, {
              balanceAddress: r,
              chainId: f,
              symbolType: "string",
              tokenAddress: h,
            });
          } catch (t) {
            if ("ContractFunctionExecutionError" === t.name) {
              let t = await d(e, {
                  balanceAddress: r,
                  chainId: f,
                  symbolType: "bytes32",
                  tokenAddress: h,
                }),
                s = (0, n.IQ)((0, i.B)(t.symbol, { dir: "right" }));
              return { ...t, symbol: s };
            }
            throw t;
          }
        let b = e.getClient({ chainId: f }),
          y = (0, o.T)(b, a.r, "getBalance"),
          m = await y(
            u ? { address: r, blockNumber: u } : { address: r, blockTag: l }
          ),
          g = e.chains.find((e) => e.id === f) ?? b.chain;
        return {
          decimals: g.nativeCurrency.decimals,
          formatted: (0, s.J)(m, (0, c.l)(p)),
          symbol: g.nativeCurrency.symbol,
          value: m,
        };
      }
      async function d(e, t) {
        let {
            balanceAddress: r,
            chainId: n,
            symbolType: i,
            tokenAddress: a,
            unit: o,
          } = t,
          l = {
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
          [d, f, h] = await (0, u.I)(e, {
            allowFailure: !1,
            contracts: [
              { ...l, functionName: "balanceOf", args: [r], chainId: n },
              { ...l, functionName: "decimals", chainId: n },
              { ...l, functionName: "symbol", chainId: n },
            ],
          }),
          p = (0, s.J)(d ?? "0", (0, c.l)(o ?? f));
        return { decimals: f, formatted: p, symbol: h, value: d };
      }
      var f = r(62108),
        h = r(31959),
        p = r(18224),
        b = r(53031);
      function y() {
        var e, t;
        let r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: n, query: i = {} } = r,
          s = (0, b.useConfig)(r),
          a = (0, p.useChainId)({ config: s }),
          o = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: r, scopeKey: n, ...i } = t[1];
                if (!r) throw Error("address is required");
                return (await l(e, { ...i, address: r })) ?? null;
              },
              queryKey: (function (e = {}) {
                return ["balance", (0, f.xO)(e)];
              })(t),
            };
          })(s, { ...r, chainId: null != (e = r.chainId) ? e : a }),
          c = !!(n && (null == (t = i.enabled) || t));
        return (0, h.IT)({ ...i, ...o, enabled: c });
      }
    },
    19989: (e, t, r) => {
      r.d(t, {
        Vw: () => w,
        DO: () => s,
        CC: () => o,
        sd: () => a,
        Fe: () => i,
        Ht: () => c,
        My: () => y,
        uH: () => l,
        Id: () => v,
        qj: () => x,
        O8: () => d,
        po: () => E,
        Ow: () => f,
        fd: () => h,
        ZJ: () => g,
        DH: () => u,
      });
      let n =
        "object" == typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0;
      function i(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function s(e, ...t) {
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
      function a(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.createHasher");
        i(e.outputLen), i(e.blockLen);
      }
      function o(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function c(e, t) {
        s(e);
        let r = t.outputLen;
        if (e.length < r)
          throw Error(
            "digestInto() expects output buffer of length at least " + r
          );
      }
      function u(e) {
        return new Uint32Array(
          e.buffer,
          e.byteOffset,
          Math.floor(e.byteLength / 4)
        );
      }
      function l(...e) {
        for (let t = 0; t < e.length; t++) e[t].fill(0);
      }
      function d(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function f(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      let h =
          68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0]
            ? (e) => e
            : function (e) {
                for (let r = 0; r < e.length; r++) {
                  var t;
                  e[r] =
                    (((t = e[r]) << 24) & 0xff000000) |
                    ((t << 8) & 0xff0000) |
                    ((t >>> 8) & 65280) |
                    ((t >>> 24) & 255);
                }
                return e;
              },
        p =
          "function" == typeof Uint8Array.from([]).toHex &&
          "function" == typeof Uint8Array.fromHex,
        b = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function y(e) {
        if ((s(e), p)) return e.toHex();
        let t = "";
        for (let r = 0; r < e.length; r++) t += b[e[r]];
        return t;
      }
      let m = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function g(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e) throw Error("string expected");
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          s(e),
          e
        );
      }
      function v(...e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let n = e[r];
          s(n), (t += n.length);
        }
        let r = new Uint8Array(t);
        for (let t = 0, n = 0; t < e.length; t++) {
          let i = e[t];
          r.set(i, n), (n += i.length);
        }
        return r;
      }
      class w {}
      function x(e) {
        let t = (t) => e().update(g(t)).digest(),
          r = e();
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function E(e = 32) {
        if (n && "function" == typeof n.getRandomValues)
          return n.getRandomValues(new Uint8Array(e));
        if (n && "function" == typeof n.randomBytes)
          return Uint8Array.from(n.randomBytes(e));
        throw Error("crypto.getRandomValues must be defined");
      }
    },
    20578: (e, t, r) => {
      r.d(t, { l: () => s });
      var n = r(59243),
        i = r(76365);
      async function s(
        e,
        {
          address: t,
          message: r,
          factory: s,
          factoryData: a,
          signature: o,
          ...c
        }
      ) {
        let u = (0, n.A)(r);
        return (0, i.K)(e, {
          address: t,
          factory: s,
          factoryData: a,
          hash: u,
          signature: o,
          ...c,
        });
      }
    },
    20760: (e, t, r) => {
      r.d(t, { m: () => o });
      var n = r(99702),
        i = r(79731),
        s = r(13423);
      let a = "/docs/contract/encodeDeployData";
      function o(e) {
        let { abi: t, args: r, bytecode: o } = e;
        if (!r || 0 === r.length) return o;
        let c = t.find((e) => "type" in e && "constructor" === e.type);
        if (!c) throw new n.YW({ docsPath: a });
        if (!("inputs" in c) || !c.inputs || 0 === c.inputs.length)
          throw new n.YF({ docsPath: a });
        let u = (0, s.h)(c.inputs, r);
        return (0, i.aP)([o, u]);
      }
    },
    20789: (e, t, r) => {
      r.d(t, { l: () => i });
      var n = r(7441);
      class i extends n.C {
        constructor({ blockHash: e, blockNumber: t }) {
          let r = "Block";
          e && (r = `Block at hash "${e}"`),
            t && (r = `Block at number "${t}"`),
            super(`${r} could not be found.`, { name: "BlockNotFoundError" });
        }
      }
    },
    21135: (e, t, r) => {
      r.d(t, { V: () => s });
      var n = r(93727),
        i = r(68629);
      let s = (e) => (0, n.di)((0, i.k)(e), 0, 4);
    },
    21159: (e, t, r) => {
      r.d(t, { A: () => s, B: () => i });
      var n = r(99702);
      function i(e, { includeName: t = !1 } = {}) {
        if ("function" !== e.type && "event" !== e.type && "error" !== e.type)
          throw new n.d_(e.type);
        return `${e.name}(${s(e.inputs, { includeName: t })})`;
      }
      function s(e, { includeName: t = !1 } = {}) {
        return e
          ? e
              .map((e) =>
                (function (e, { includeName: t }) {
                  return e.type.startsWith("tuple")
                    ? `(${s(e.components, { includeName: t })})${e.type.slice(
                        5
                      )}`
                    : e.type + (t && e.name ? ` ${e.name}` : "");
                })(e, { includeName: t })
              )
              .join(t ? ", " : ",")
          : "";
      }
    },
    21239: (e, t, r) => {
      r.d(t, { t: () => s });
      var n = r(25910),
        i = r(52020),
        s = new (class extends n.Q {
          #a = !0;
          #o;
          #c;
          constructor() {
            super(),
              (this.#c = (e) => {
                if (!i.S$ && window.addEventListener) {
                  let t = () => e(!0),
                    r = () => e(!1);
                  return (
                    window.addEventListener("online", t, !1),
                    window.addEventListener("offline", r, !1),
                    () => {
                      window.removeEventListener("online", t),
                        window.removeEventListener("offline", r);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#o || this.setEventListener(this.#c);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#o?.(), (this.#o = void 0));
          }
          setEventListener(e) {
            (this.#c = e),
              this.#o?.(),
              (this.#o = e(this.setOnline.bind(this)));
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
    21734: (e, t, r) => {
      r.d(t, { useDisconnect: () => o });
      var n = r(5041);
      async function i(e, t = {}) {
        let r;
        if (t.connector) r = t.connector;
        else {
          let { connections: t, current: n } = e.state,
            i = t.get(n);
          r = i?.connector;
        }
        let n = e.state.connections;
        r &&
          (await r.disconnect(),
          r.emitter.off("change", e._internal.events.change),
          r.emitter.off("disconnect", e._internal.events.disconnect),
          r.emitter.on("connect", e._internal.events.connect),
          n.delete(r.uid)),
          e.setState((e) => {
            if (0 === n.size)
              return {
                ...e,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            let t = n.values().next().value;
            return { ...e, connections: new Map(n), current: t.connector.uid };
          });
        {
          let t = e.state.current;
          if (!t) return;
          let r = e.state.connections.get(t)?.connector;
          if (!r) return;
          await e.storage?.setItem("recentConnectorId", r.id);
        }
      }
      var s = r(53031),
        a = r(34533);
      function o() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          r = (0, s.useConfig)(e),
          o = { mutationFn: (e) => i(r, e), mutationKey: ["disconnect"] },
          { mutate: c, mutateAsync: u, ...l } = (0, n.n)({ ...t, ...o });
        return {
          ...l,
          connectors: (0, a.useConnections)({ config: r }).map(
            (e) => e.connector
          ),
          disconnect: c,
          disconnectAsync: u,
        };
      }
    },
    22653: (e, t, r) => {
      r.d(t, { q: () => m });
      var n = r(99702),
        i = r(81379),
        s = r(79225),
        a = r(78008),
        o = r(87632),
        c = r(34524),
        u = r(72342),
        l = r(86435),
        d = r(79183),
        f = r(86850),
        h = r(94181),
        p = r(1777),
        b = r(17249),
        y = r(48354);
      function m(e, t) {
        let {
          abi: r,
          address: m,
          args: g,
          batch: v = !0,
          eventName: w,
          fromBlock: x,
          onError: E,
          onLogs: P,
          poll: C,
          pollingInterval: I = e.pollingInterval,
          strict: O,
        } = t;
        return (
          void 0 !== C
            ? C
            : "bigint" == typeof x ||
              ("webSocket" !== e.transport.type &&
                ("fallback" !== e.transport.type ||
                  "webSocket" !== e.transport.transports[0].config.type))
        )
          ? (() => {
              let t = O ?? !1,
                n = (0, d.A)([
                  "watchContractEvent",
                  m,
                  g,
                  v,
                  e.uid,
                  w,
                  I,
                  t,
                  x,
                ]);
              return (0, u.lB)(n, { onLogs: P, onError: E }, (n) => {
                let s, a;
                void 0 !== x && (s = x - 1n);
                let o = !1,
                  u = (0, l.w)(
                    async () => {
                      if (!o) {
                        try {
                          a = await (0, c.T)(
                            e,
                            f.X,
                            "createContractEventFilter"
                          )({
                            abi: r,
                            address: m,
                            args: g,
                            eventName: w,
                            strict: t,
                            fromBlock: x,
                          });
                        } catch {}
                        o = !0;
                        return;
                      }
                      try {
                        let i;
                        if (a)
                          i = await (0, c.T)(
                            e,
                            b.I,
                            "getFilterChanges"
                          )({ filter: a });
                        else {
                          let n = await (0, c.T)(e, h.G, "getBlockNumber")({});
                          (i =
                            s && s < n
                              ? await (0, c.T)(
                                  e,
                                  p.u,
                                  "getContractEvents"
                                )({
                                  abi: r,
                                  address: m,
                                  args: g,
                                  eventName: w,
                                  fromBlock: s + 1n,
                                  toBlock: n,
                                  strict: t,
                                })
                              : []),
                            (s = n);
                        }
                        if (0 === i.length) return;
                        if (v) n.onLogs(i);
                        else for (let e of i) n.onLogs([e]);
                      } catch (e) {
                        a && e instanceof i.Di && (o = !1), n.onError?.(e);
                      }
                    },
                    { emitOnBegin: !0, interval: I }
                  );
                return async () => {
                  a &&
                    (await (0, c.T)(e, y.Z, "uninstallFilter")({ filter: a })),
                    u();
                };
              });
            })()
          : (() => {
              let t = (0, d.A)([
                  "watchContractEvent",
                  m,
                  g,
                  v,
                  e.uid,
                  w,
                  I,
                  O ?? !1,
                ]),
                i = !0,
                c = () => (i = !1);
              return (0, u.lB)(
                t,
                { onLogs: P, onError: E },
                (t) => (
                  (async () => {
                    try {
                      let u = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => "webSocket" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        l = w
                          ? (0, a.R)({ abi: r, eventName: w, args: g })
                          : [],
                        { unsubscribe: d } = await u.subscribe({
                          params: ["logs", { address: m, topics: l }],
                          onData(e) {
                            if (!i) return;
                            let a = e.result;
                            try {
                              let { eventName: e, args: n } = (0, s.j)({
                                  abi: r,
                                  data: a.data,
                                  topics: a.topics,
                                  strict: O,
                                }),
                                i = (0, o.e)(a, { args: n, eventName: e });
                              t.onLogs([i]);
                            } catch (s) {
                              let e, r;
                              if (s instanceof n.fo || s instanceof n.l3) {
                                if (O) return;
                                (e = s.abiItem.name),
                                  (r = s.abiItem.inputs?.some(
                                    (e) => !("name" in e && e.name)
                                  ));
                              }
                              let i = (0, o.e)(a, {
                                args: r ? [] : {},
                                eventName: e,
                              });
                              t.onLogs([i]);
                            }
                          },
                          onError(e) {
                            t.onError?.(e);
                          },
                        });
                      (c = d), i || c();
                    } catch (e) {
                      E?.(e);
                    }
                  })(),
                  () => c()
                )
              );
            })();
      }
    },
    23008: (e, t, r) => {
      r.d(t, { iY: () => c });
      var n = r(99702),
        i = r(32840),
        s = r(81757),
        a = r(399),
        o = r(21135);
      function c(e) {
        let t,
          { abi: r, args: c = [], name: u } = e,
          l = (0, i.q)(u, { strict: !1 }),
          d = r.filter((e) =>
            l
              ? "function" === e.type
                ? (0, o.V)(e) === u
                : "event" === e.type && (0, a.h)(e) === u
              : "name" in e && e.name === u
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
                c.every((t, r) => {
                  let n = "inputs" in e && e.inputs[r];
                  return (
                    !!n &&
                    (function e(t, r) {
                      let n = typeof t,
                        i = r.type;
                      switch (i) {
                        case "address":
                          return (0, s.P)(t, { strict: !1 });
                        case "bool":
                          return "boolean" === n;
                        case "function":
                        case "string":
                          return "string" === n;
                        default:
                          if ("tuple" === i && "components" in r)
                            return Object.values(r.components).every((r, n) =>
                              e(Object.values(t)[n], r)
                            );
                          if (
                            /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                              i
                            )
                          )
                            return "number" === n || "bigint" === n;
                          if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i))
                            return "string" === n || t instanceof Uint8Array;
                          if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i))
                            return (
                              Array.isArray(t) &&
                              t.every((t) =>
                                e(t, {
                                  ...r,
                                  type: i.replace(/(\[[0-9]{0,}\])$/, ""),
                                })
                              )
                            );
                          return !1;
                      }
                    })(t, n)
                  );
                })
              ) {
                if (t && "inputs" in t && t.inputs) {
                  let r = (function e(t, r, n) {
                    for (let i in t) {
                      let a = t[i],
                        o = r[i];
                      if (
                        "tuple" === a.type &&
                        "tuple" === o.type &&
                        "components" in a &&
                        "components" in o
                      )
                        return e(a.components, o.components, n[i]);
                      let c = [a.type, o.type];
                      if (
                        (c.includes("address") && c.includes("bytes20")) ||
                        (((c.includes("address") && c.includes("string")) ||
                          (c.includes("address") && c.includes("bytes"))) &&
                          (0, s.P)(n[i], { strict: !1 }))
                      )
                        return c;
                    }
                  })(e.inputs, t.inputs, c);
                  if (r)
                    throw new n.nM(
                      { abiItem: e, type: r[0] },
                      { abiItem: t, type: r[1] }
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
    23335: (e, t, r) => {
      r.d(t, { g: () => a });
      var n = r(20789),
        i = r(67622),
        s = r(17327);
      async function a(
        e,
        {
          blockHash: t,
          blockNumber: r,
          blockTag: o,
          includeTransactions: c,
        } = {}
      ) {
        let u = c ?? !1,
          l = void 0 !== r ? (0, i.cK)(r) : void 0,
          d = null;
        if (
          !(d = t
            ? await e.request(
                { method: "eth_getBlockByHash", params: [t, u] },
                { dedupe: !0 }
              )
            : await e.request(
                {
                  method: "eth_getBlockByNumber",
                  params: [l || (o ?? "latest"), u],
                },
                { dedupe: !!l }
              ))
        )
          throw new n.l({ blockHash: t, blockNumber: r });
        return (e.chain?.formatters?.block?.format || s.$)(d);
      }
    },
    23360: (e, t, r) => {
      r.d(t, { d: () => a });
      var n = r(35109),
        i = r(42264),
        s = r(35020);
      function a(e, { docsPath: t, ...r }) {
        let a = (() => {
          let t = (0, s.l)(e, r);
          return t instanceof i.RM ? e : t;
        })();
        return new n.zX(a, { docsPath: t, ...r });
      }
    },
    24573: (e, t, r) => {
      r.d(t, { O: () => u, _: () => c });
      var n = r(91836),
        i = r(34524),
        s = r(76654),
        a = r(23335),
        o = r(39112);
      async function c(e, t) {
        return u(e, t);
      }
      async function u(e, t) {
        let {
            block: r,
            chain: c = e.chain,
            request: u,
            type: l = "eip1559",
          } = t || {},
          d = await (async () =>
            "function" == typeof c?.fees?.baseFeeMultiplier
              ? c.fees.baseFeeMultiplier({ block: r, client: e, request: u })
              : c?.fees?.baseFeeMultiplier ?? 1.2)();
        if (d < 1) throw new n.sM();
        let f = d.toString().split(".")[1]?.length ?? 0,
          h = 10 ** f,
          p = (e) => (e * BigInt(Math.ceil(d * h))) / BigInt(h),
          b = r || (await (0, i.T)(e, a.g, "getBlock")({}));
        if ("function" == typeof c?.fees?.estimateFeesPerGas) {
          let t = await c.fees.estimateFeesPerGas({
            block: r,
            client: e,
            multiply: p,
            request: u,
            type: l,
          });
          if (null !== t) return t;
        }
        if ("eip1559" === l) {
          if ("bigint" != typeof b.baseFeePerGas) throw new n.pw();
          let t =
              "bigint" == typeof u?.maxPriorityFeePerGas
                ? u.maxPriorityFeePerGas
                : await (0, s.N)(e, { block: b, chain: c, request: u }),
            r = p(b.baseFeePerGas);
          return {
            maxFeePerGas: u?.maxFeePerGas ?? r + t,
            maxPriorityFeePerGas: t,
          };
        }
        return {
          gasPrice: u?.gasPrice ?? p(await (0, i.T)(e, o.L, "getGasPrice")({})),
        };
      }
    },
    24578: (e, t, r) => {
      r.d(t, { S: () => o });
      var n = r(8512),
        i = r(32840),
        s = r(80844),
        a = r(67622);
      function o(e, t) {
        let r = (0, n.lY)((0, i.q)(e, { strict: !1 }) ? (0, s.ZJ)(e) : e);
        return "bytes" === (t || "hex") ? r : (0, a.nj)(r);
      }
    },
    25507: (e, t, r) => {
      r.d(t, { yH: () => u });
      var n = r(36444),
        i = r(58980),
        s = r(4805),
        a = r(81757),
        o = r(67622);
      function c(e) {
        if (e && 0 !== e.length)
          return e.reduce((e, { slot: t, value: r }) => {
            if (66 !== t.length)
              throw new i.NV({ size: t.length, targetSize: 66, type: "hex" });
            if (66 !== r.length)
              throw new i.NV({ size: r.length, targetSize: 66, type: "hex" });
            return (e[t] = r), e;
          }, {});
      }
      function u(e) {
        if (!e) return;
        let t = {};
        for (let { address: r, ...i } of e) {
          if (!(0, a.P)(r, { strict: !1 })) throw new n.M({ address: r });
          if (t[r]) throw new s.Hi({ address: r });
          t[r] = (function (e) {
            let { balance: t, nonce: r, state: n, stateDiff: i, code: a } = e,
              u = {};
            if (
              (void 0 !== a && (u.code = a),
              void 0 !== t && (u.balance = (0, o.cK)(t)),
              void 0 !== r && (u.nonce = (0, o.cK)(r)),
              void 0 !== n && (u.state = c(n)),
              void 0 !== i)
            ) {
              if (u.state) throw new s.ft();
              u.stateDiff = c(i);
            }
            return u;
          })(i);
        }
        return t;
      }
    },
    25910: (e, t, r) => {
      r.d(t, { Q: () => n });
      var n = class {
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
    26715: (e, t, r) => {
      r.d(t, { Ht: () => o, jE: () => a });
      var n = r(12115),
        i = r(95155),
        s = n.createContext(void 0),
        a = (e) => {
          let t = n.useContext(s);
          if (e) return e;
          if (!t)
            throw Error(
              "No QueryClient set, use QueryClientProvider to set one"
            );
          return t;
        },
        o = (e) => {
          let { client: t, children: r } = e;
          return (
            n.useEffect(
              () => (
                t.mount(),
                () => {
                  t.unmount();
                }
              ),
              [t]
            ),
            (0, i.jsx)(s.Provider, { value: t, children: r })
          );
        };
    },
    27049: (e, t, r) => {
      r.d(t, { O: () => i });
      var n = r(7739);
      async function i(e) {
        let t = (0, n.g)(e, { method: "eth_newPendingTransactionFilter" }),
          r = await e.request({ method: "eth_newPendingTransactionFilter" });
        return { id: r, request: t(r), type: "transaction" };
      }
    },
    27442: (e, t, r) => {
      r.d(t, { _o: () => m, Pj: () => b, uT: () => d });
      var n = r(59126),
        i = r(84701),
        s = r(99901),
        a = r(30686),
        o = r(68321);
      class c extends o.C {
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
      let u = new Map([
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
      var l = r(17130);
      function d(e, t = {}) {
        if ((0, l.Ji)(e))
          return (function (e, t = {}) {
            let r = (0, l.ej)(e);
            if (!r) throw new a.s7({ signature: e, type: "function" });
            let n = y(r.parameters),
              i = [],
              s = n.length;
            for (let e = 0; e < s; e++)
              i.push(
                b(n[e], { modifiers: l.v7, structs: t, type: "function" })
              );
            let o = [];
            if (r.returns) {
              let e = y(r.returns),
                n = e.length;
              for (let r = 0; r < n; r++)
                o.push(
                  b(e[r], { modifiers: l.v7, structs: t, type: "function" })
                );
            }
            return {
              name: r.name,
              type: "function",
              stateMutability: r.stateMutability ?? "nonpayable",
              inputs: i,
              outputs: o,
            };
          })(e, t);
        if ((0, l.Rv)(e))
          return (function (e, t = {}) {
            let r = (0, l.iB)(e);
            if (!r) throw new a.s7({ signature: e, type: "event" });
            let n = y(r.parameters),
              i = [],
              s = n.length;
            for (let e = 0; e < s; e++)
              i.push(b(n[e], { modifiers: l.fC, structs: t, type: "event" }));
            return { name: r.name, type: "event", inputs: i };
          })(e, t);
        if ((0, l.pc)(e))
          return (function (e, t = {}) {
            let r = (0, l.kz)(e);
            if (!r) throw new a.s7({ signature: e, type: "error" });
            let n = y(r.parameters),
              i = [],
              s = n.length;
            for (let e = 0; e < s; e++)
              i.push(b(n[e], { structs: t, type: "error" }));
            return { name: r.name, type: "error", inputs: i };
          })(e, t);
        if ((0, l.l9)(e))
          return (function (e, t = {}) {
            let r = (0, l.Yo)(e);
            if (!r) throw new a.s7({ signature: e, type: "constructor" });
            let n = y(r.parameters),
              i = [],
              s = n.length;
            for (let e = 0; e < s; e++)
              i.push(b(n[e], { structs: t, type: "constructor" }));
            return {
              type: "constructor",
              stateMutability: r.stateMutability ?? "nonpayable",
              inputs: i,
            };
          })(e, t);
        if ((0, l.v8)(e)) {
          var r = e;
          let t = (0, l.If)(r);
          if (!t) throw new a.s7({ signature: r, type: "fallback" });
          return {
            type: "fallback",
            stateMutability: t.stateMutability ?? "nonpayable",
          };
        }
        if ((0, l.sP)(e))
          return { type: "receive", stateMutability: "payable" };
        throw new a.x8({ signature: e });
      }
      let f =
          /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
        h =
          /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
        p = /^u?int$/;
      function b(e, t) {
        var r, a;
        let o,
          c = (function (e, t, r) {
            let n = "";
            if (r)
              for (let e of Object.entries(r)) {
                if (!e) continue;
                let t = "";
                for (let r of e[1])
                  t += `[${r.type}${r.name ? `:${r.name}` : ""}]`;
                n += `(${e[0]}{${t}})`;
              }
            return t ? `${t}:${e}${n}` : e;
          })(e, t?.type, t?.structs);
        if (u.has(c)) return u.get(c);
        let d = n.wj.test(e),
          v = (0, n.Yv)(d ? h : f, e);
        if (!v) throw new s.dV({ param: e });
        if (
          v.name &&
          ("address" === (r = v.name) ||
            "bool" === r ||
            "function" === r ||
            "string" === r ||
            "tuple" === r ||
            n.BD.test(r) ||
            n.Ge.test(r) ||
            g.test(r))
        )
          throw new s.zd({ param: e, name: v.name });
        let w = v.name ? { name: v.name } : {},
          x = "indexed" === v.modifier ? { indexed: !0 } : {},
          E = t?.structs ?? {},
          P = {};
        if (d) {
          o = "tuple";
          let e = y(v.type),
            t = [],
            r = e.length;
          for (let n = 0; n < r; n++) t.push(b(e[n], { structs: E }));
          P = { components: t };
        } else if (v.type in E) (o = "tuple"), (P = { components: E[v.type] });
        else if (p.test(v.type)) o = `${v.type}256`;
        else if (((o = v.type), t?.type !== "struct" && !m(o)))
          throw new i.UG({ type: o });
        if (v.modifier) {
          if (!t?.modifiers?.has?.(v.modifier))
            throw new s.NO({ param: e, type: t?.type, modifier: v.modifier });
          if (
            l.v7.has(v.modifier) &&
            ((a = o),
            !v.array && "bytes" !== a && "string" !== a && "tuple" !== a)
          )
            throw new s.Pj({ param: e, type: t?.type, modifier: v.modifier });
        }
        let C = { type: `${o}${v.array ?? ""}`, ...w, ...x, ...P };
        return u.set(c, C), C;
      }
      function y(e, t = [], r = "", n = 0) {
        let i = e.trim().length;
        for (let s = 0; s < i; s++) {
          let i = e[s],
            a = e.slice(s + 1);
          switch (i) {
            case ",":
              return 0 === n ? y(a, [...t, r.trim()]) : y(a, t, `${r}${i}`, n);
            case "(":
              return y(a, t, `${r}${i}`, n + 1);
            case ")":
              return y(a, t, `${r}${i}`, n - 1);
            default:
              return y(a, t, `${r}${i}`, n);
          }
        }
        if ("" === r) return t;
        if (0 !== n) throw new c({ current: r, depth: n });
        return t.push(r.trim()), t;
      }
      function m(e) {
        return (
          "address" === e ||
          "bool" === e ||
          "function" === e ||
          "string" === e ||
          n.BD.test(e) ||
          n.Ge.test(e)
        );
      }
      let g =
        /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/;
    },
    27493: (e, t, r) => {
      r.d(t, {
        IQ: () => d,
        ME: () => l,
        Nx: () => u,
        Sl: () => o,
        uU: () => c,
      });
      var n = r(94201),
        i = r(87094),
        s = r(54335),
        a = r(80844);
      function o(e, { size: t }) {
        if ((0, i.E)(e) > t)
          throw new n.u({ givenSize: (0, i.E)(e), maxSize: t });
      }
      function c(e, t = {}) {
        let { signed: r } = t;
        t.size && o(e, { size: t.size });
        let n = BigInt(e);
        if (!r) return n;
        let i = (e.length - 2) / 2;
        return n <= (1n << (8n * BigInt(i) - 1n)) - 1n
          ? n
          : n - BigInt(`0x${"f".padStart(2 * i, "f")}`) - 1n;
      }
      function u(e, t = {}) {
        let r = e;
        if (
          (t.size && (o(r, { size: t.size }), (r = (0, s.B)(r))),
          "0x00" === (0, s.B)(r))
        )
          return !1;
        if ("0x01" === (0, s.B)(r)) return !0;
        throw new n.H2(r);
      }
      function l(e, t = {}) {
        return Number(c(e, t));
      }
      function d(e, t = {}) {
        let r = (0, a.aT)(e);
        return (
          t.size &&
            (o(r, { size: t.size }), (r = (0, s.B)(r, { dir: "right" }))),
          new TextDecoder().decode(r)
        );
      }
    },
    28452: (e, t, r) => {
      r.d(t, { C: () => n });
      class n extends Error {
        constructor(e, t = {}) {
          let r = (() => {
              if (t.cause instanceof n) {
                if (t.cause.details) return t.cause.details;
                if (t.cause.shortMessage) return t.cause.shortMessage;
              }
              return t.cause &&
                "details" in t.cause &&
                "string" == typeof t.cause.details
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details;
            })(),
            i = (t.cause instanceof n && t.cause.docsPath) || t.docsPath,
            s = `https://oxlib.sh${i ?? ""}`;
          super(
            [
              e || "An error occurred.",
              ...(t.metaMessages ? ["", ...t.metaMessages] : []),
              ...(r || i
                ? ["", r ? `Details: ${r}` : void 0, i ? `See: ${s}` : void 0]
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
            (this.details = r),
            (this.docs = s),
            (this.docsPath = i),
            (this.shortMessage = e);
        }
        walk(e) {
          return (function e(t, r) {
            return r?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t && t.cause
              ? e(t.cause, r)
              : r
              ? null
              : t;
          })(this, e);
        }
      }
    },
    29889: (e, t, r) => {
      r.d(t, { useConnectors: () => c });
      var n = r(34250);
      let i = [];
      function s(e) {
        let t = e.connectors;
        return (0, n.b)(i, t) ? i : ((i = t), t);
      }
      var a = r(12115),
        o = r(53031);
      function c() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, o.useConfig)(e);
        return (0, a.useSyncExternalStore)(
          (e) =>
            (function (e, t) {
              let { onChange: r } = t;
              return e._internal.connectors.subscribe((e, t) => {
                r(Object.values(e), t);
              });
            })(t, { onChange: e }),
          () => s(t),
          () => s(t)
        );
      }
    },
    29995: (e, t, r) => {
      r.d(t, { J9: () => s, Mc: () => i, fD: () => n });
      let n = {
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
        s = {
          inputs: [{ name: "reason", type: "uint256" }],
          name: "Panic",
          type: "error",
        };
    },
    30106: (e, t, r) => {
      r.d(t, { x: () => a });
      var n = r(69432),
        i = r(67622),
        s = r(12914);
      async function a(
        e,
        { blockHash: t, blockNumber: r, blockTag: a, hash: o, index: c }
      ) {
        let u = a || "latest",
          l = void 0 !== r ? (0, i.cK)(r) : void 0,
          d = null;
        if (
          (o
            ? (d = await e.request(
                { method: "eth_getTransactionByHash", params: [o] },
                { dedupe: !0 }
              ))
            : t
            ? (d = await e.request(
                {
                  method: "eth_getTransactionByBlockHashAndIndex",
                  params: [t, (0, i.cK)(c)],
                },
                { dedupe: !0 }
              ))
            : (l || u) &&
              (d = await e.request(
                {
                  method: "eth_getTransactionByBlockNumberAndIndex",
                  params: [l || u, (0, i.cK)(c)],
                },
                { dedupe: !!l }
              )),
          !d)
        )
          throw new n.Kz({
            blockHash: t,
            blockNumber: r,
            blockTag: u,
            hash: o,
            index: c,
          });
        return (e.chain?.formatters?.transaction?.format || s.uP)(d);
      }
    },
    30445: (e, t, r) => {
      r.d(t, { EH: () => s, YE: () => o, jF: () => a, rj: () => i });
      var n = r(7441);
      class i extends n.C {
        constructor({ blockNumber: e, chain: t, contract: r }) {
          super(`Chain "${t.name}" does not support contract "${r.name}".`, {
            metaMessages: [
              "This could be due to any of the following:",
              ...(e && r.blockCreated && r.blockCreated > e
                ? [
                    `- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`,
                  ]
                : [
                    `- The chain does not have the contract "${r.name}" configured.`,
                  ]),
            ],
            name: "ChainDoesNotSupportContract",
          });
        }
      }
      class s extends n.C {
        constructor({ chain: e, currentChainId: t }) {
          super(
            `The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,
            {
              metaMessages: [
                `Current Chain ID:  ${t}`,
                `Expected Chain ID: ${e.id} – ${e.name}`,
              ],
              name: "ChainMismatchError",
            }
          );
        }
      }
      class a extends n.C {
        constructor() {
          super(
            "No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.",
            { name: "ChainNotFoundError" }
          );
        }
      }
      class o extends n.C {
        constructor() {
          super("No chain was provided to the Client.", {
            name: "ClientChainNotConfiguredError",
          });
        }
      }
      n.C;
    },
    30686: (e, t, r) => {
      r.d(t, { X9: () => a, s7: () => i, x8: () => s });
      var n = r(68321);
      class i extends n.C {
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
      class s extends n.C {
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
      class a extends n.C {
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
    31942: (e, t, r) => {
      r.d(t, { Q: () => s });
      var n = r(77136),
        i = r(1405);
      function s(e, t = "wei") {
        return (0, i.J)(e, n.sz[t]);
      }
    },
    31959: (e, t, r) => {
      r.d(t, { qu: () => l, IT: () => u });
      var n = r(95838),
        i = r(76347),
        s = r(64275),
        a = class extends i.$ {
          constructor(e, t) {
            super(e, t);
          }
          bindMethods() {
            super.bindMethods(),
              (this.fetchNextPage = this.fetchNextPage.bind(this)),
              (this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
          }
          setOptions(e) {
            super.setOptions({ ...e, behavior: (0, s.PL)() });
          }
          getOptimisticResult(e) {
            return (e.behavior = (0, s.PL)()), super.getOptimisticResult(e);
          }
          fetchNextPage(e) {
            return this.fetch({
              ...e,
              meta: { fetchMore: { direction: "forward" } },
            });
          }
          fetchPreviousPage(e) {
            return this.fetch({
              ...e,
              meta: { fetchMore: { direction: "backward" } },
            });
          }
          createResult(e, t) {
            let { state: r } = e,
              n = super.createResult(e, t),
              {
                isFetching: i,
                isRefetching: a,
                isError: o,
                isRefetchError: c,
              } = n,
              u = r.fetchMeta?.fetchMore?.direction,
              l = o && "forward" === u,
              d = i && "forward" === u,
              f = o && "backward" === u,
              h = i && "backward" === u;
            return {
              ...n,
              fetchNextPage: this.fetchNextPage,
              fetchPreviousPage: this.fetchPreviousPage,
              hasNextPage: (0, s.rB)(t, r.data),
              hasPreviousPage: (0, s.RQ)(t, r.data),
              isFetchNextPageError: l,
              isFetchingNextPage: d,
              isFetchPreviousPageError: f,
              isFetchingPreviousPage: h,
              isRefetchError: c && !l && !f,
              isRefetching: a && !d && !h,
            };
          }
        },
        o = r(64079),
        c = r(62108);
      function u(e) {
        let t = (0, n.I)({ ...e, queryKeyHashFn: c.Zi });
        return (t.queryKey = e.queryKey), t;
      }
      function l(e) {
        var t;
        let r = ((t = { ...e, queryKeyHashFn: c.Zi }), (0, o.t)(t, a, void 0));
        return (r.queryKey = e.queryKey), r;
      }
    },
    32160: (e, t, r) => {
      r.d(t, { k: () => c });
      var n = r(79731),
        i = r(80844),
        s = r(67622),
        a = r(24578),
        o = r(70872);
      function c(e) {
        let t = new Uint8Array(32).fill(0);
        if (!e) return (0, s.My)(t);
        let r = e.split(".");
        for (let e = r.length - 1; e >= 0; e -= 1) {
          let s = (0, o.q)(r[e]),
            c = s ? (0, i.ZJ)(s) : (0, a.S)((0, i.Af)(r[e]), "bytes");
          t = (0, a.S)((0, n.xW)([t, c]), "bytes");
        }
        return (0, s.My)(t);
      }
    },
    32330: (e, t, r) => {
      r.d(t, { l: () => i });
      var n = r(77136);
      function i(e) {
        return "number" == typeof e ? e : "wei" === e ? 0 : Math.abs(n.pj[e]);
      }
    },
    32840: (e, t, r) => {
      r.d(t, { q: () => n });
      function n(e, { strict: t = !0 } = {}) {
        return (
          !!e &&
          "string" == typeof e &&
          (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
        );
      }
    },
    33032: (e, t, r) => {
      r.d(t, { useSwitchChain: () => u });
      var n = r(5041),
        i = r(77752),
        s = r(90113);
      async function a(e, t) {
        let { addEthereumChainParameter: r, chainId: n } = t,
          a = e.state.connections.get(t.connector?.uid ?? e.state.current);
        if (a) {
          let e = a.connector;
          if (!e.switchChain) throw new s.V({ connector: e });
          return await e.switchChain({
            addEthereumChainParameter: r,
            chainId: n,
          });
        }
        let o = e.chains.find((e) => e.id === n);
        if (!o) throw new i.nk();
        return e.setState((e) => ({ ...e, chainId: n })), o;
      }
      var o = r(87651),
        c = r(53031);
      function u() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          r = (0, c.useConfig)(e),
          i = { mutationFn: (e) => a(r, e), mutationKey: ["switchChain"] },
          { mutate: s, mutateAsync: u, ...l } = (0, n.n)({ ...t, ...i });
        return {
          ...l,
          chains: (0, o.useChains)({ config: r }),
          switchChain: s,
          switchChainAsync: u,
        };
      }
    },
    34132: (e, t, r) => {
      r.d(t, { secp256k1: () => eC });
      var n = r(98693),
        i = r(19989);
      class s extends i.Vw {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), (0, i.sd)(e);
          let r = (0, i.ZJ)(t);
          if (
            ((this.iHash = e.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let n = this.blockLen,
            s = new Uint8Array(n);
          s.set(r.length > n ? e.create().update(r).digest() : r);
          for (let e = 0; e < s.length; e++) s[e] ^= 54;
          this.iHash.update(s), (this.oHash = e.create());
          for (let e = 0; e < s.length; e++) s[e] ^= 106;
          this.oHash.update(s), (0, i.uH)(s);
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
            iHash: r,
            finished: n,
            destroyed: i,
            blockLen: s,
            outputLen: a,
          } = this;
          return (
            (e.finished = n),
            (e.destroyed = i),
            (e.blockLen = s),
            (e.outputLen = a),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = r._cloneInto(e.iHash)),
            e
          );
        }
        clone() {
          return this._cloneInto();
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let a = (e, t, r) => new s(e, t).update(r).digest();
      a.create = (e, t) => new s(e, t);
      let o = BigInt(0),
        c = BigInt(1);
      function u(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function l(e) {
        if (!u(e)) throw Error("Uint8Array expected");
      }
      function d(e, t) {
        if ("boolean" != typeof t)
          throw Error(e + " boolean expected, got " + t);
      }
      function f(e) {
        let t = e.toString(16);
        return 1 & t.length ? "0" + t : t;
      }
      function h(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        return "" === e ? o : BigInt("0x" + e);
      }
      let p =
          "function" == typeof Uint8Array.from([]).toHex &&
          "function" == typeof Uint8Array.fromHex,
        b = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function y(e) {
        if ((l(e), p)) return e.toHex();
        let t = "";
        for (let r = 0; r < e.length; r++) t += b[e[r]];
        return t;
      }
      let m = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function g(e) {
        return e >= m._0 && e <= m._9
          ? e - m._0
          : e >= m.A && e <= m.F
          ? e - (m.A - 10)
          : e >= m.a && e <= m.f
          ? e - (m.a - 10)
          : void 0;
      }
      function v(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        if (p) return Uint8Array.fromHex(e);
        let t = e.length,
          r = t / 2;
        if (t % 2)
          throw Error("hex string expected, got unpadded hex of length " + t);
        let n = new Uint8Array(r);
        for (let t = 0, i = 0; t < r; t++, i += 2) {
          let r = g(e.charCodeAt(i)),
            s = g(e.charCodeAt(i + 1));
          if (void 0 === r || void 0 === s)
            throw Error(
              'hex string expected, got non-hex character "' +
                (e[i] + e[i + 1]) +
                '" at index ' +
                i
            );
          n[t] = 16 * r + s;
        }
        return n;
      }
      function w(e) {
        return h(y(e));
      }
      function x(e) {
        return l(e), h(y(Uint8Array.from(e).reverse()));
      }
      function E(e, t) {
        return v(e.toString(16).padStart(2 * t, "0"));
      }
      function P(e, t) {
        return E(e, t).reverse();
      }
      function C(e, t, r) {
        let n;
        if ("string" == typeof t)
          try {
            n = v(t);
          } catch (t) {
            throw Error(e + " must be hex string or Uint8Array, cause: " + t);
          }
        else if (u(t)) n = Uint8Array.from(t);
        else throw Error(e + " must be hex string or Uint8Array");
        let i = n.length;
        if ("number" == typeof r && i !== r)
          throw Error(e + " of length " + r + " expected, got " + i);
        return n;
      }
      function I(...e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let n = e[r];
          l(n), (t += n.length);
        }
        let r = new Uint8Array(t);
        for (let t = 0, n = 0; t < e.length; t++) {
          let i = e[t];
          r.set(i, n), (n += i.length);
        }
        return r;
      }
      let O = (e) => "bigint" == typeof e && o <= e;
      function A(e, t, r) {
        return O(e) && O(t) && O(r) && t <= e && e < r;
      }
      function $(e, t, r, n) {
        if (!A(t, r, n))
          throw Error(
            "expected valid " + e + ": " + r + " <= n < " + n + ", got " + t
          );
      }
      let B = (e) => (c << BigInt(e)) - c,
        S = (e) => new Uint8Array(e),
        M = (e) => Uint8Array.from(e),
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
      function T(e, t, r = {}) {
        let n = (t, r, n) => {
          let i = R[r];
          if ("function" != typeof i) throw Error("invalid validator function");
          let s = e[t];
          if ((!n || void 0 !== s) && !i(s, e))
            throw Error(
              "param " + String(t) + " is invalid. Expected " + r + ", got " + s
            );
        };
        for (let [e, r] of Object.entries(t)) n(e, r, !1);
        for (let [e, t] of Object.entries(r)) n(e, t, !0);
        return e;
      }
      function j(e) {
        let t = new WeakMap();
        return (r, ...n) => {
          let i = t.get(r);
          if (void 0 !== i) return i;
          let s = e(r, ...n);
          return t.set(r, s), s;
        };
      }
      let k = BigInt(0),
        F = BigInt(1),
        N = BigInt(2),
        z = BigInt(3),
        U = BigInt(4),
        q = BigInt(5),
        L = BigInt(8);
      function _(e, t) {
        let r = e % t;
        return r >= k ? r : t + r;
      }
      function D(e, t, r) {
        let n = e;
        for (; t-- > k; ) (n *= n), (n %= r);
        return n;
      }
      function G(e, t) {
        if (e === k) throw Error("invert: expected non-zero number");
        if (t <= k) throw Error("invert: expected positive modulus, got " + t);
        let r = _(e, t),
          n = t,
          i = k,
          s = F,
          a = F,
          o = k;
        for (; r !== k; ) {
          let e = n / r,
            t = n % r,
            c = i - a * e,
            u = s - o * e;
          (n = r), (r = t), (i = a), (s = o), (a = c), (o = u);
        }
        if (n !== F) throw Error("invert: does not exist");
        return _(i, t);
      }
      function H(e, t) {
        let r = (e.ORDER + F) / U,
          n = e.pow(t, r);
        if (!e.eql(e.sqr(n), t)) throw Error("Cannot find square root");
        return n;
      }
      function K(e, t) {
        let r = (e.ORDER - q) / L,
          n = e.mul(t, N),
          i = e.pow(n, r),
          s = e.mul(t, i),
          a = e.mul(e.mul(s, N), i),
          o = e.mul(s, e.sub(a, e.ONE));
        if (!e.eql(e.sqr(o), t)) throw Error("Cannot find square root");
        return o;
      }
      let W = [
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
      function Q(e, t, r = !1) {
        let n = Array(t.length).fill(r ? e.ZERO : void 0),
          i = t.reduce(
            (t, r, i) => (e.is0(r) ? t : ((n[i] = t), e.mul(t, r))),
            e.ONE
          ),
          s = e.inv(i);
        return (
          t.reduceRight(
            (t, r, i) =>
              e.is0(r) ? t : ((n[i] = e.mul(t, n[i])), e.mul(t, r)),
            s
          ),
          n
        );
      }
      function V(e, t) {
        let r = (e.ORDER - F) / N,
          n = e.pow(t, r),
          i = e.eql(n, e.ONE),
          s = e.eql(n, e.ZERO),
          a = e.eql(n, e.neg(e.ONE));
        if (!i && !s && !a) throw Error("invalid Legendre symbol result");
        return i ? 1 : s ? 0 : -1;
      }
      function Z(e, t) {
        void 0 !== t && (0, i.Fe)(t);
        let r = void 0 !== t ? t : e.toString(2).length,
          n = Math.ceil(r / 8);
        return { nBitLength: r, nByteLength: n };
      }
      function J(e, t, r = !1, n = {}) {
        let i;
        if (e <= k) throw Error("invalid field: expected ORDER > 0, got " + e);
        let { nBitLength: s, nByteLength: a } = Z(e, t);
        if (a > 2048)
          throw Error("invalid field: expected ORDER of <= 2048 bytes");
        let o = Object.freeze({
          ORDER: e,
          isLE: r,
          BITS: s,
          BYTES: a,
          MASK: B(s),
          ZERO: k,
          ONE: F,
          create: (t) => _(t, e),
          isValid: (t) => {
            if ("bigint" != typeof t)
              throw Error(
                "invalid field element: expected bigint, got " + typeof t
              );
            return k <= t && t < e;
          },
          is0: (e) => e === k,
          isOdd: (e) => (e & F) === F,
          neg: (t) => _(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => _(t * t, e),
          add: (t, r) => _(t + r, e),
          sub: (t, r) => _(t - r, e),
          mul: (t, r) => _(t * r, e),
          pow: (e, t) =>
            (function (e, t, r) {
              if (r < k) throw Error("invalid exponent, negatives unsupported");
              if (r === k) return e.ONE;
              if (r === F) return t;
              let n = e.ONE,
                i = t;
              for (; r > k; )
                r & F && (n = e.mul(n, i)), (i = e.sqr(i)), (r >>= F);
              return n;
            })(o, e, t),
          div: (t, r) => _(t * G(r, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => G(t, e),
          sqrt:
            n.sqrt ||
            ((t) => (
              i ||
                (i =
                  e % U === z
                    ? H
                    : e % L === q
                    ? K
                    : (function (e) {
                        if (e < BigInt(3))
                          throw Error("sqrt is not defined for small field");
                        let t = e - F,
                          r = 0;
                        for (; t % N === k; ) (t /= N), r++;
                        let n = N,
                          i = J(e);
                        for (; 1 === V(i, n); )
                          if (n++ > 1e3)
                            throw Error(
                              "Cannot find square root: probably non-prime P"
                            );
                        if (1 === r) return H;
                        let s = i.pow(n, t),
                          a = (t + F) / N;
                        return function (e, n) {
                          if (e.is0(n)) return n;
                          if (1 !== V(e, n))
                            throw Error("Cannot find square root");
                          let i = r,
                            o = e.mul(e.ONE, s),
                            c = e.pow(n, t),
                            u = e.pow(n, a);
                          for (; !e.eql(c, e.ONE); ) {
                            if (e.is0(c)) return e.ZERO;
                            let t = 1,
                              r = e.sqr(c);
                            for (; !e.eql(r, e.ONE); )
                              if ((t++, (r = e.sqr(r)), t === i))
                                throw Error("Cannot find square root");
                            let n = F << BigInt(i - t - 1),
                              s = e.pow(o, n);
                            (i = t),
                              (o = e.sqr(s)),
                              (c = e.mul(c, o)),
                              (u = e.mul(u, s));
                          }
                          return u;
                        };
                      })(e)),
              i(o, t)
            )),
          toBytes: (e) => (r ? P(e, a) : E(e, a)),
          fromBytes: (e) => {
            if (e.length !== a)
              throw Error(
                "Field.fromBytes: expected " + a + " bytes, got " + e.length
              );
            return r ? x(e) : w(e);
          },
          invertBatch: (e) => Q(o, e),
          cmov: (e, t, r) => (r ? t : e),
        });
        return Object.freeze(o);
      }
      function Y(e) {
        if ("bigint" != typeof e) throw Error("field order must be bigint");
        return Math.ceil(e.toString(2).length / 8);
      }
      function X(e) {
        let t = Y(e);
        return t + Math.ceil(t / 2);
      }
      let ee = BigInt(0),
        et = BigInt(1);
      function er(e, t) {
        let r = t.negate();
        return e ? r : t;
      }
      function en(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw Error(
            "invalid window size, expected [1.." + t + "], got W=" + e
          );
      }
      function ei(e, t) {
        en(e, t);
        let r = Math.ceil(t / e) + 1,
          n = 2 ** (e - 1),
          i = 2 ** e;
        return {
          windows: r,
          windowSize: n,
          mask: B(e),
          maxNumber: i,
          shiftBy: BigInt(e),
        };
      }
      function es(e, t, r) {
        let { windowSize: n, mask: i, maxNumber: s, shiftBy: a } = r,
          o = Number(e & i),
          c = e >> a;
        o > n && ((o -= s), (c += et));
        let u = t * n,
          l = u + Math.abs(o) - 1,
          d = 0 === o;
        return {
          nextN: c,
          offset: l,
          isZero: d,
          isNeg: o < 0,
          isNegF: t % 2 != 0,
          offsetF: u,
        };
      }
      let ea = new WeakMap(),
        eo = new WeakMap();
      function ec(e) {
        return eo.get(e) || 1;
      }
      function eu(e) {
        return (
          T(
            e.Fp,
            W.reduce((e, t) => ((e[t] = "function"), e), {
              ORDER: "bigint",
              MASK: "bigint",
              BYTES: "isSafeInteger",
              BITS: "isSafeInteger",
            })
          ),
          T(
            e,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
          ),
          Object.freeze({ ...Z(e.n, e.nBitLength), ...e, ...{ p: e.Fp.ORDER } })
        );
      }
      function el(e) {
        void 0 !== e.lowS && d("lowS", e.lowS),
          void 0 !== e.prehash && d("prehash", e.prehash);
      }
      class ed extends Error {
        constructor(e = "") {
          super(e);
        }
      }
      let ef = {
          Err: ed,
          _tlv: {
            encode: (e, t) => {
              let { Err: r } = ef;
              if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
              if (1 & t.length) throw new r("tlv.encode: unpadded data");
              let n = t.length / 2,
                i = f(n);
              if ((i.length / 2) & 128)
                throw new r("tlv.encode: long form length too big");
              let s = n > 127 ? f((i.length / 2) | 128) : "";
              return f(e) + s + i + t;
            },
            decode(e, t) {
              let { Err: r } = ef,
                n = 0;
              if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
              if (t.length < 2 || t[n++] !== e)
                throw new r("tlv.decode: wrong tlv");
              let i = t[n++],
                s = 0;
              if (128 & i) {
                let e = 127 & i;
                if (!e)
                  throw new r(
                    "tlv.decode(long): indefinite length not supported"
                  );
                if (e > 4)
                  throw new r("tlv.decode(long): byte length is too big");
                let a = t.subarray(n, n + e);
                if (a.length !== e)
                  throw new r("tlv.decode: length bytes not complete");
                if (0 === a[0])
                  throw new r("tlv.decode(long): zero leftmost byte");
                for (let e of a) s = (s << 8) | e;
                if (((n += e), s < 128))
                  throw new r("tlv.decode(long): not minimal encoding");
              } else s = i;
              let a = t.subarray(n, n + s);
              if (a.length !== s) throw new r("tlv.decode: wrong value length");
              return { v: a, l: t.subarray(n + s) };
            },
          },
          _int: {
            encode(e) {
              let { Err: t } = ef;
              if (e < eh)
                throw new t("integer: negative integers are not allowed");
              let r = f(e);
              if (
                (8 & Number.parseInt(r[0], 16) && (r = "00" + r), 1 & r.length)
              )
                throw new t("unexpected DER parsing assertion: unpadded hex");
              return r;
            },
            decode(e) {
              let { Err: t } = ef;
              if (128 & e[0])
                throw new t("invalid signature integer: negative");
              if (0 === e[0] && !(128 & e[1]))
                throw new t(
                  "invalid signature integer: unnecessary leading zero"
                );
              return w(e);
            },
          },
          toSig(e) {
            let { Err: t, _int: r, _tlv: n } = ef,
              i = C("signature", e),
              { v: s, l: a } = n.decode(48, i);
            if (a.length)
              throw new t("invalid signature: left bytes after parsing");
            let { v: o, l: c } = n.decode(2, s),
              { v: u, l: l } = n.decode(2, c);
            if (l.length)
              throw new t("invalid signature: left bytes after parsing");
            return { r: r.decode(o), s: r.decode(u) };
          },
          hexFromSig(e) {
            let { _tlv: t, _int: r } = ef,
              n = t.encode(2, r.encode(e.r)),
              i = t.encode(2, r.encode(e.s));
            return t.encode(48, n + i);
          },
        },
        eh = BigInt(0),
        ep = BigInt(1),
        eb = (BigInt(2), BigInt(3)),
        ey = BigInt(4),
        em = BigInt(
          "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
        ),
        eg = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        ev = BigInt(0),
        ew = BigInt(1),
        ex = BigInt(2),
        eE = (e, t) => (e + t / ex) / t,
        eP = J(em, void 0, void 0, {
          sqrt: function (e) {
            let t = BigInt(3),
              r = BigInt(6),
              n = BigInt(11),
              i = BigInt(22),
              s = BigInt(23),
              a = BigInt(44),
              o = BigInt(88),
              c = (e * e * e) % em,
              u = (c * c * e) % em,
              l = (D(u, t, em) * u) % em,
              d = (D(l, t, em) * u) % em,
              f = (D(d, ex, em) * c) % em,
              h = (D(f, n, em) * f) % em,
              p = (D(h, i, em) * h) % em,
              b = (D(p, a, em) * p) % em,
              y = (D(b, o, em) * b) % em,
              m = (D(y, a, em) * p) % em,
              g = (D(m, t, em) * u) % em,
              v = (D(g, s, em) * h) % em,
              w = (D(v, r, em) * c) % em,
              x = D(w, ex, em);
            if (!eP.eql(eP.sqr(x), e)) throw Error("Cannot find square root");
            return x;
          },
        }),
        eC = (function (e, t) {
          let r = (t) =>
            (function (e) {
              let t = (function (e) {
                  let t = eu(e);
                  return (
                    T(
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
                { Fp: r, n: n, nByteLength: i, nBitLength: s } = t,
                a = r.BYTES + 1,
                l = 2 * r.BYTES + 1;
              function f(e) {
                return _(e, n);
              }
              let {
                  ProjectivePoint: h,
                  normPrivateKeyToScalar: p,
                  weierstrassEquation: b,
                  isWithinCurveOrder: m,
                } = (function (e) {
                  var t;
                  let r = (function (e) {
                      let t = eu(e);
                      T(
                        t,
                        { a: "field", b: "field" },
                        {
                          allowInfinityPoint: "boolean",
                          allowedPrivateKeyLengths: "array",
                          clearCofactor: "function",
                          fromBytes: "function",
                          isTorsionFree: "function",
                          toBytes: "function",
                          wrapPrivateKey: "boolean",
                        }
                      );
                      let { endo: r, Fp: n, a: i } = t;
                      if (r) {
                        if (!n.eql(i, n.ZERO))
                          throw Error("invalid endo: CURVE.a must be 0");
                        if (
                          "object" != typeof r ||
                          "bigint" != typeof r.beta ||
                          "function" != typeof r.splitScalar
                        )
                          throw Error(
                            'invalid endo: expected "beta": bigint and "splitScalar": function'
                          );
                      }
                      return Object.freeze({ ...t });
                    })(e),
                    { Fp: n } = r,
                    i = J(r.n, r.nBitLength),
                    s =
                      r.toBytes ||
                      ((e, t, r) => {
                        let i = t.toAffine();
                        return I(
                          Uint8Array.from([4]),
                          n.toBytes(i.x),
                          n.toBytes(i.y)
                        );
                      }),
                    a =
                      r.fromBytes ||
                      ((e) => {
                        let t = e.subarray(1);
                        return {
                          x: n.fromBytes(t.subarray(0, n.BYTES)),
                          y: n.fromBytes(t.subarray(n.BYTES, 2 * n.BYTES)),
                        };
                      });
                  function l(e) {
                    let { a: t, b: i } = r,
                      s = n.sqr(e),
                      a = n.mul(s, e);
                    return n.add(n.add(a, n.mul(e, t)), i);
                  }
                  function f(e, t) {
                    let r = n.sqr(t),
                      i = l(e);
                    return n.eql(r, i);
                  }
                  if (!f(r.Gx, r.Gy))
                    throw Error("bad curve params: generator point");
                  let h = n.mul(n.pow(r.a, eb), ey),
                    p = n.mul(n.sqr(r.b), BigInt(27));
                  if (n.is0(n.add(h, p)))
                    throw Error("bad curve params: a or b");
                  function b(e) {
                    let t,
                      {
                        allowedPrivateKeyLengths: n,
                        nByteLength: i,
                        wrapPrivateKey: s,
                        n: a,
                      } = r;
                    if (n && "bigint" != typeof e) {
                      if (
                        (u(e) && (e = y(e)),
                        "string" != typeof e || !n.includes(e.length))
                      )
                        throw Error("invalid private key");
                      e = e.padStart(2 * i, "0");
                    }
                    try {
                      t = "bigint" == typeof e ? e : w(C("private key", e, i));
                    } catch (t) {
                      throw Error(
                        "invalid private key, expected hex or " +
                          i +
                          " bytes, got " +
                          typeof e
                      );
                    }
                    return s && (t = _(t, a)), $("private key", t, ep, a), t;
                  }
                  function m(e) {
                    if (!(e instanceof x))
                      throw Error("ProjectivePoint expected");
                  }
                  let g = j((e, t) => {
                      let { px: r, py: i, pz: s } = e;
                      if (n.eql(s, n.ONE)) return { x: r, y: i };
                      let a = e.is0();
                      null == t && (t = a ? n.ONE : n.inv(s));
                      let o = n.mul(r, t),
                        c = n.mul(i, t),
                        u = n.mul(s, t);
                      if (a) return { x: n.ZERO, y: n.ZERO };
                      if (!n.eql(u, n.ONE)) throw Error("invZ was invalid");
                      return { x: o, y: c };
                    }),
                    v = j((e) => {
                      if (e.is0()) {
                        if (r.allowInfinityPoint && !n.is0(e.py)) return;
                        throw Error("bad point: ZERO");
                      }
                      let { x: t, y: i } = e.toAffine();
                      if (!n.isValid(t) || !n.isValid(i))
                        throw Error("bad point: x or y not FE");
                      if (!f(t, i))
                        throw Error("bad point: equation left != right");
                      if (!e.isTorsionFree())
                        throw Error("bad point: not in prime-order subgroup");
                      return !0;
                    });
                  class x {
                    constructor(e, t, r) {
                      if (null == e || !n.isValid(e)) throw Error("x required");
                      if (null == t || !n.isValid(t) || n.is0(t))
                        throw Error("y required");
                      if (null == r || !n.isValid(r)) throw Error("z required");
                      (this.px = e),
                        (this.py = t),
                        (this.pz = r),
                        Object.freeze(this);
                    }
                    static fromAffine(e) {
                      let { x: t, y: r } = e || {};
                      if (!e || !n.isValid(t) || !n.isValid(r))
                        throw Error("invalid affine point");
                      if (e instanceof x)
                        throw Error("projective point not allowed");
                      let i = (e) => n.eql(e, n.ZERO);
                      return i(t) && i(r) ? x.ZERO : new x(t, r, n.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(e) {
                      let t = Q(
                        n,
                        e.map((e) => e.pz)
                      );
                      return e
                        .map((e, r) => e.toAffine(t[r]))
                        .map(x.fromAffine);
                    }
                    static fromHex(e) {
                      let t = x.fromAffine(a(C("pointHex", e)));
                      return t.assertValidity(), t;
                    }
                    static fromPrivateKey(e) {
                      return x.BASE.multiply(b(e));
                    }
                    static msm(e, t) {
                      return (function (e, t, r, n) {
                        (function (e, t) {
                          if (!Array.isArray(e)) throw Error("array expected");
                          e.forEach((e, r) => {
                            if (!(e instanceof t))
                              throw Error("invalid point at index " + r);
                          });
                        })(r, e),
                          (function (e, t) {
                            if (!Array.isArray(e))
                              throw Error("array of scalars expected");
                            e.forEach((e, r) => {
                              if (!t.isValid(e))
                                throw Error("invalid scalar at index " + r);
                            });
                          })(n, t);
                        let i = r.length,
                          s = n.length;
                        if (i !== s)
                          throw Error(
                            "arrays of points and scalars must have equal length"
                          );
                        let a = e.ZERO,
                          u = (function (e) {
                            let t;
                            for (t = 0; e > o; e >>= c, t += 1);
                            return t;
                          })(BigInt(i)),
                          l = 1;
                        u > 12
                          ? (l = u - 3)
                          : u > 4
                          ? (l = u - 2)
                          : u > 0 && (l = 2);
                        let d = B(l),
                          f = Array(Number(d) + 1).fill(a),
                          h = Math.floor((t.BITS - 1) / l) * l,
                          p = a;
                        for (let e = h; e >= 0; e -= l) {
                          f.fill(a);
                          for (let t = 0; t < s; t++) {
                            let i = Number((n[t] >> BigInt(e)) & d);
                            f[i] = f[i].add(r[t]);
                          }
                          let t = a;
                          for (let e = f.length - 1, r = a; e > 0; e--)
                            (r = r.add(f[e])), (t = t.add(r));
                          if (((p = p.add(t)), 0 !== e))
                            for (let e = 0; e < l; e++) p = p.double();
                        }
                        return p;
                      })(x, i, e, t);
                    }
                    _setWindowSize(e) {
                      O.setWindowSize(this, e);
                    }
                    assertValidity() {
                      v(this);
                    }
                    hasEvenY() {
                      let { y: e } = this.toAffine();
                      if (n.isOdd) return !n.isOdd(e);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(e) {
                      m(e);
                      let { px: t, py: r, pz: i } = this,
                        { px: s, py: a, pz: o } = e,
                        c = n.eql(n.mul(t, o), n.mul(s, i)),
                        u = n.eql(n.mul(r, o), n.mul(a, i));
                      return c && u;
                    }
                    negate() {
                      return new x(this.px, n.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: e, b: t } = r,
                        i = n.mul(t, eb),
                        { px: s, py: a, pz: o } = this,
                        c = n.ZERO,
                        u = n.ZERO,
                        l = n.ZERO,
                        d = n.mul(s, s),
                        f = n.mul(a, a),
                        h = n.mul(o, o),
                        p = n.mul(s, a);
                      return (
                        (p = n.add(p, p)),
                        (l = n.mul(s, o)),
                        (l = n.add(l, l)),
                        (c = n.mul(e, l)),
                        (u = n.mul(i, h)),
                        (u = n.add(c, u)),
                        (c = n.sub(f, u)),
                        (u = n.add(f, u)),
                        (u = n.mul(c, u)),
                        (c = n.mul(p, c)),
                        (l = n.mul(i, l)),
                        (h = n.mul(e, h)),
                        (p = n.sub(d, h)),
                        (p = n.mul(e, p)),
                        (p = n.add(p, l)),
                        (l = n.add(d, d)),
                        (d = n.add(l, d)),
                        (d = n.add(d, h)),
                        (d = n.mul(d, p)),
                        (u = n.add(u, d)),
                        (h = n.mul(a, o)),
                        (h = n.add(h, h)),
                        (d = n.mul(h, p)),
                        (c = n.sub(c, d)),
                        (l = n.mul(h, f)),
                        (l = n.add(l, l)),
                        new x(c, u, (l = n.add(l, l)))
                      );
                    }
                    add(e) {
                      m(e);
                      let { px: t, py: i, pz: s } = this,
                        { px: a, py: o, pz: c } = e,
                        u = n.ZERO,
                        l = n.ZERO,
                        d = n.ZERO,
                        f = r.a,
                        h = n.mul(r.b, eb),
                        p = n.mul(t, a),
                        b = n.mul(i, o),
                        y = n.mul(s, c),
                        g = n.add(t, i),
                        v = n.add(a, o);
                      (g = n.mul(g, v)),
                        (v = n.add(p, b)),
                        (g = n.sub(g, v)),
                        (v = n.add(t, s));
                      let w = n.add(a, c);
                      return (
                        (v = n.mul(v, w)),
                        (w = n.add(p, y)),
                        (v = n.sub(v, w)),
                        (w = n.add(i, s)),
                        (u = n.add(o, c)),
                        (w = n.mul(w, u)),
                        (u = n.add(b, y)),
                        (w = n.sub(w, u)),
                        (d = n.mul(f, v)),
                        (u = n.mul(h, y)),
                        (d = n.add(u, d)),
                        (u = n.sub(b, d)),
                        (d = n.add(b, d)),
                        (l = n.mul(u, d)),
                        (b = n.add(p, p)),
                        (b = n.add(b, p)),
                        (y = n.mul(f, y)),
                        (v = n.mul(h, v)),
                        (b = n.add(b, y)),
                        (y = n.sub(p, y)),
                        (y = n.mul(f, y)),
                        (v = n.add(v, y)),
                        (p = n.mul(b, v)),
                        (l = n.add(l, p)),
                        (p = n.mul(w, v)),
                        (u = n.mul(g, u)),
                        (u = n.sub(u, p)),
                        (p = n.mul(g, b)),
                        (d = n.mul(w, d)),
                        new x(u, l, (d = n.add(d, p)))
                      );
                    }
                    subtract(e) {
                      return this.add(e.negate());
                    }
                    is0() {
                      return this.equals(x.ZERO);
                    }
                    wNAF(e) {
                      return O.wNAFCached(this, e, x.normalizeZ);
                    }
                    multiplyUnsafe(e) {
                      let { endo: t, n: i } = r;
                      $("scalar", e, eh, i);
                      let s = x.ZERO;
                      if (e === eh) return s;
                      if (this.is0() || e === ep) return this;
                      if (!t || O.hasPrecomputes(this))
                        return O.wNAFCachedUnsafe(this, e, x.normalizeZ);
                      let {
                          k1neg: a,
                          k1: o,
                          k2neg: c,
                          k2: u,
                        } = t.splitScalar(e),
                        l = s,
                        d = s,
                        f = this;
                      for (; o > eh || u > eh; )
                        o & ep && (l = l.add(f)),
                          u & ep && (d = d.add(f)),
                          (f = f.double()),
                          (o >>= ep),
                          (u >>= ep);
                      return (
                        a && (l = l.negate()),
                        c && (d = d.negate()),
                        (d = new x(n.mul(d.px, t.beta), d.py, d.pz)),
                        l.add(d)
                      );
                    }
                    multiply(e) {
                      let t,
                        i,
                        { endo: s, n: a } = r;
                      if (($("scalar", e, ep, a), s)) {
                        let {
                            k1neg: r,
                            k1: a,
                            k2neg: o,
                            k2: c,
                          } = s.splitScalar(e),
                          { p: u, f: l } = this.wNAF(a),
                          { p: d, f: f } = this.wNAF(c);
                        (u = O.constTimeNegate(r, u)),
                          (d = O.constTimeNegate(o, d)),
                          (d = new x(n.mul(d.px, s.beta), d.py, d.pz)),
                          (t = u.add(d)),
                          (i = l.add(f));
                      } else {
                        let { p: r, f: n } = this.wNAF(e);
                        (t = r), (i = n);
                      }
                      return x.normalizeZ([t, i])[0];
                    }
                    multiplyAndAddUnsafe(e, t, r) {
                      let n = x.BASE,
                        i = (e, t) =>
                          t !== eh && t !== ep && e.equals(n)
                            ? e.multiply(t)
                            : e.multiplyUnsafe(t),
                        s = i(this, t).add(i(e, r));
                      return s.is0() ? void 0 : s;
                    }
                    toAffine(e) {
                      return g(this, e);
                    }
                    isTorsionFree() {
                      let { h: e, isTorsionFree: t } = r;
                      if (e === ep) return !0;
                      if (t) return t(x, this);
                      throw Error(
                        "isTorsionFree() has not been declared for the elliptic curve"
                      );
                    }
                    clearCofactor() {
                      let { h: e, clearCofactor: t } = r;
                      return e === ep
                        ? this
                        : t
                        ? t(x, this)
                        : this.multiplyUnsafe(r.h);
                    }
                    toRawBytes(e = !0) {
                      return (
                        d("isCompressed", e),
                        this.assertValidity(),
                        s(x, this, e)
                      );
                    }
                    toHex(e = !0) {
                      return d("isCompressed", e), y(this.toRawBytes(e));
                    }
                  }
                  (x.BASE = new x(r.Gx, r.Gy, n.ONE)),
                    (x.ZERO = new x(n.ZERO, n.ONE, n.ZERO));
                  let { endo: E, nBitLength: P } = r,
                    O =
                      ((t = E ? Math.ceil(P / 2) : P),
                      {
                        constTimeNegate: er,
                        hasPrecomputes: (e) => 1 !== ec(e),
                        unsafeLadder(e, t, r = x.ZERO) {
                          let n = e;
                          for (; t > ee; )
                            t & et && (r = r.add(n)),
                              (n = n.double()),
                              (t >>= et);
                          return r;
                        },
                        precomputeWindow(e, r) {
                          let { windows: n, windowSize: i } = ei(r, t),
                            s = [],
                            a = e,
                            o = a;
                          for (let e = 0; e < n; e++) {
                            (o = a), s.push(o);
                            for (let e = 1; e < i; e++)
                              (o = o.add(a)), s.push(o);
                            a = o.double();
                          }
                          return s;
                        },
                        wNAF(e, r, n) {
                          let i = x.ZERO,
                            s = x.BASE,
                            a = ei(e, t);
                          for (let e = 0; e < a.windows; e++) {
                            let {
                              nextN: t,
                              offset: o,
                              isZero: c,
                              isNeg: u,
                              isNegF: l,
                              offsetF: d,
                            } = es(n, e, a);
                            (n = t),
                              c
                                ? (s = s.add(er(l, r[d])))
                                : (i = i.add(er(u, r[o])));
                          }
                          return { p: i, f: s };
                        },
                        wNAFUnsafe(e, r, n, i = x.ZERO) {
                          let s = ei(e, t);
                          for (let e = 0; e < s.windows && n !== ee; e++) {
                            let {
                              nextN: t,
                              offset: a,
                              isZero: o,
                              isNeg: c,
                            } = es(n, e, s);
                            if (((n = t), !o)) {
                              let e = r[a];
                              i = i.add(c ? e.negate() : e);
                            }
                          }
                          return i;
                        },
                        getPrecomputes(e, t, r) {
                          let n = ea.get(t);
                          return (
                            n ||
                              ((n = this.precomputeWindow(t, e)),
                              1 !== e && ea.set(t, r(n))),
                            n
                          );
                        },
                        wNAFCached(e, t, r) {
                          let n = ec(e);
                          return this.wNAF(n, this.getPrecomputes(n, e, r), t);
                        },
                        wNAFCachedUnsafe(e, t, r, n) {
                          let i = ec(e);
                          return 1 === i
                            ? this.unsafeLadder(e, t, n)
                            : this.wNAFUnsafe(
                                i,
                                this.getPrecomputes(i, e, r),
                                t,
                                n
                              );
                        },
                        setWindowSize(e, r) {
                          en(r, t), eo.set(e, r), ea.delete(e);
                        },
                      });
                  return {
                    CURVE: r,
                    ProjectivePoint: x,
                    normPrivateKeyToScalar: b,
                    weierstrassEquation: l,
                    isWithinCurveOrder: function (e) {
                      return A(e, ep, r.n);
                    },
                  };
                })({
                  ...t,
                  toBytes(e, t, n) {
                    let i = t.toAffine(),
                      s = r.toBytes(i.x);
                    return (d("isCompressed", n), n)
                      ? I(Uint8Array.from([t.hasEvenY() ? 2 : 3]), s)
                      : I(Uint8Array.from([4]), s, r.toBytes(i.y));
                  },
                  fromBytes(e) {
                    let t = e.length,
                      n = e[0],
                      i = e.subarray(1);
                    if (t === a && (2 === n || 3 === n)) {
                      let e,
                        t = w(i);
                      if (!A(t, ep, r.ORDER))
                        throw Error("Point is not on curve");
                      let s = b(t);
                      try {
                        e = r.sqrt(s);
                      } catch (e) {
                        throw Error(
                          "Point is not on curve" +
                            (e instanceof Error ? ": " + e.message : "")
                        );
                      }
                      return (
                        ((1 & n) == 1) != ((e & ep) === ep) && (e = r.neg(e)),
                        { x: t, y: e }
                      );
                    }
                    if (t === l && 4 === n)
                      return {
                        x: r.fromBytes(i.subarray(0, r.BYTES)),
                        y: r.fromBytes(i.subarray(r.BYTES, 2 * r.BYTES)),
                      };
                    throw Error(
                      "invalid Point, expected length of " +
                        a +
                        ", or uncompressed " +
                        l +
                        ", got " +
                        t
                    );
                  },
                }),
                g = (e, t, r) => w(e.slice(t, r));
              class O {
                constructor(e, t, r) {
                  $("r", e, ep, n),
                    $("s", t, ep, n),
                    (this.r = e),
                    (this.s = t),
                    null != r && (this.recovery = r),
                    Object.freeze(this);
                }
                static fromCompact(e) {
                  return new O(
                    g((e = C("compactSignature", e, 2 * i)), 0, i),
                    g(e, i, 2 * i)
                  );
                }
                static fromDER(e) {
                  let { r: t, s: r } = ef.toSig(C("DER", e));
                  return new O(t, r);
                }
                assertValidity() {}
                addRecoveryBit(e) {
                  return new O(this.r, this.s, e);
                }
                recoverPublicKey(e) {
                  let { r: i, s, recovery: a } = this,
                    o = N(C("msgHash", e));
                  if (null == a || ![0, 1, 2, 3].includes(a))
                    throw Error("recovery id invalid");
                  let c = 2 === a || 3 === a ? i + t.n : i;
                  if (c >= r.ORDER) throw Error("recovery id 2 or 3 invalid");
                  let u = (1 & a) == 0 ? "02" : "03",
                    l = h.fromHex(u + y(E(c, r.BYTES))),
                    d = G(c, n),
                    p = f(-o * d),
                    b = f(s * d),
                    m = h.BASE.multiplyAndAddUnsafe(l, p, b);
                  if (!m) throw Error("point at infinify");
                  return m.assertValidity(), m;
                }
                hasHighS() {
                  return this.s > n >> ep;
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new O(this.r, f(-this.s), this.recovery)
                    : this;
                }
                toDERRawBytes() {
                  return v(this.toDERHex());
                }
                toDERHex() {
                  return ef.hexFromSig(this);
                }
                toCompactRawBytes() {
                  return v(this.toCompactHex());
                }
                toCompactHex() {
                  return y(E(this.r, i)) + y(E(this.s, i));
                }
              }
              function R(e) {
                if ("bigint" == typeof e) return !1;
                if (e instanceof h) return !0;
                let n = C("key", e).length,
                  s = r.BYTES,
                  a = s + 1;
                if (!t.allowedPrivateKeyLengths && i !== a)
                  return n === a || n === 2 * s + 1;
              }
              let k =
                  t.bits2int ||
                  function (e) {
                    if (e.length > 8192) throw Error("input is too large");
                    let t = w(e),
                      r = 8 * e.length - s;
                    return r > 0 ? t >> BigInt(r) : t;
                  },
                N =
                  t.bits2int_modN ||
                  function (e) {
                    return f(k(e));
                  },
                z = B(s);
              function U(e) {
                return $("num < 2^" + s, e, eh, z), E(e, i);
              }
              let q = { lowS: t.lowS, prehash: !1 },
                L = { lowS: t.lowS, prehash: !1 };
              return (
                h.BASE._setWindowSize(8),
                {
                  CURVE: t,
                  getPublicKey: function (e, t = !0) {
                    return h.fromPrivateKey(e).toRawBytes(t);
                  },
                  getSharedSecret: function (e, t, r = !0) {
                    if (!0 === R(e))
                      throw Error("first arg must be private key");
                    if (!1 === R(t))
                      throw Error("second arg must be public key");
                    return h.fromHex(t).multiply(p(e)).toRawBytes(r);
                  },
                  sign: function (e, i, s = q) {
                    let { seed: a, k2sig: o } = (function (e, i, s = q) {
                      if (["recovered", "canonical"].some((e) => e in s))
                        throw Error("sign() legacy options not supported");
                      let { hash: a, randomBytes: o } = t,
                        { lowS: c, prehash: u, extraEntropy: l } = s;
                      null == c && (c = !0),
                        (e = C("msgHash", e)),
                        el(s),
                        u && (e = C("prehashed msgHash", a(e)));
                      let d = N(e),
                        b = p(i),
                        y = [U(b), U(d)];
                      if (null != l && !1 !== l) {
                        let e = !0 === l ? o(r.BYTES) : l;
                        y.push(C("extraEntropy", e));
                      }
                      return {
                        seed: I(...y),
                        k2sig: function (e) {
                          var t;
                          let r = k(e);
                          if (!m(r)) return;
                          let i = G(r, n),
                            s = h.BASE.multiply(r).toAffine(),
                            a = f(s.x);
                          if (a === eh) return;
                          let o = f(i * f(d + a * b));
                          if (o === eh) return;
                          let u = (2 * (s.x !== a)) | Number(s.y & ep),
                            l = o;
                          return (
                            c &&
                              o > n >> ep &&
                              ((l = (t = o) > n >> ep ? f(-t) : t), (u ^= 1)),
                            new O(a, l, u)
                          );
                        },
                      };
                    })(e, i, s);
                    return (function (e, t, r) {
                      if ("number" != typeof e || e < 2)
                        throw Error("hashLen must be a number");
                      if ("number" != typeof t || t < 2)
                        throw Error("qByteLen must be a number");
                      if ("function" != typeof r)
                        throw Error("hmacFn must be a function");
                      let n = S(e),
                        i = S(e),
                        s = 0,
                        a = () => {
                          n.fill(1), i.fill(0), (s = 0);
                        },
                        o = (...e) => r(i, n, ...e),
                        c = (e = S(0)) => {
                          (i = o(M([0]), e)),
                            (n = o()),
                            0 !== e.length && ((i = o(M([1]), e)), (n = o()));
                        },
                        u = () => {
                          if (s++ >= 1e3)
                            throw Error("drbg: tried 1000 values");
                          let e = 0,
                            r = [];
                          for (; e < t; ) {
                            let t = (n = o()).slice();
                            r.push(t), (e += n.length);
                          }
                          return I(...r);
                        };
                      return (e, t) => {
                        let r;
                        for (a(), c(e); !(r = t(u())); ) c();
                        return a(), r;
                      };
                    })(
                      t.hash.outputLen,
                      t.nByteLength,
                      t.hmac
                    )(a, o);
                  },
                  verify: function (e, r, i, s = L) {
                    let a, o;
                    (r = C("msgHash", r)), (i = C("publicKey", i));
                    let { lowS: c, prehash: l, format: d } = s;
                    if ((el(s), "strict" in s))
                      throw Error("options.strict was renamed to lowS");
                    if (void 0 !== d && "compact" !== d && "der" !== d)
                      throw Error("format must be compact or der");
                    let p = "string" == typeof e || u(e),
                      b =
                        !p &&
                        !d &&
                        "object" == typeof e &&
                        null !== e &&
                        "bigint" == typeof e.r &&
                        "bigint" == typeof e.s;
                    if (!p && !b)
                      throw Error(
                        "invalid signature, expected Uint8Array, hex string or Signature instance"
                      );
                    try {
                      if ((b && (o = new O(e.r, e.s)), p)) {
                        try {
                          "compact" !== d && (o = O.fromDER(e));
                        } catch (e) {
                          if (!(e instanceof ef.Err)) throw e;
                        }
                        o || "der" === d || (o = O.fromCompact(e));
                      }
                      a = h.fromHex(i);
                    } catch (e) {
                      return !1;
                    }
                    if (!o || (c && o.hasHighS())) return !1;
                    l && (r = t.hash(r));
                    let { r: y, s: m } = o,
                      g = N(r),
                      v = G(m, n),
                      w = f(g * v),
                      x = f(y * v),
                      E = h.BASE.multiplyAndAddUnsafe(a, w, x)?.toAffine();
                    return !!E && f(E.x) === y;
                  },
                  ProjectivePoint: h,
                  Signature: O,
                  utils: {
                    isValidPrivateKey(e) {
                      try {
                        return p(e), !0;
                      } catch (e) {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: p,
                    randomPrivateKey: () => {
                      let e = X(t.n);
                      return (function (e, t, r = !1) {
                        let n = e.length,
                          i = Y(t),
                          s = X(t);
                        if (n < 16 || n < s || n > 1024)
                          throw Error(
                            "expected " + s + "-1024 bytes of input, got " + n
                          );
                        let a = _(r ? x(e) : w(e), t - F) + F;
                        return r ? P(a, i) : E(a, i);
                      })(t.randomBytes(e), t.n);
                    },
                    precompute: (e = 8, t = h.BASE) => (
                      t._setWindowSize(e), t.multiply(BigInt(3)), t
                    ),
                  },
                }
              );
            })({
              ...e,
              ...{
                hash: t,
                hmac: (e, ...r) => a(t, e, (0, i.Id)(...r)),
                randomBytes: i.po,
              },
            });
          return { ...r(t), create: r };
        })(
          {
            a: ev,
            b: BigInt(7),
            Fp: eP,
            n: eg,
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
                  r = -ew * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                  n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                  i = BigInt("0x100000000000000000000000000000000"),
                  s = eE(t * e, eg),
                  a = eE(-r * e, eg),
                  o = _(e - s * t - a * n, eg),
                  c = _(-s * r - a * t, eg),
                  u = o > i,
                  l = c > i;
                if ((u && (o = eg - o), l && (c = eg - c), o > i || c > i))
                  throw Error("splitScalar: Endomorphism failed, k=" + e);
                return { k1neg: u, k1: o, k2neg: l, k2: c };
              },
            },
          },
          n.sc
        ),
        eI = {},
        eO = (e) => e.toRawBytes(!0).slice(1),
        eA = (e) => mod(e, eg);
    },
    34250: (e, t, r) => {
      r.d(t, {
        b: () =>
          function e(t, r) {
            if (t === r) return !0;
            if (t && r && "object" == typeof t && "object" == typeof r) {
              let n, i;
              if (t.constructor !== r.constructor) return !1;
              if (Array.isArray(t) && Array.isArray(r)) {
                if ((n = t.length) !== r.length) return !1;
                for (i = n; 0 != i--; ) if (!e(t[i], r[i])) return !1;
                return !0;
              }
              if (t.valueOf !== Object.prototype.valueOf)
                return t.valueOf() === r.valueOf();
              if (t.toString !== Object.prototype.toString)
                return t.toString() === r.toString();
              let s = Object.keys(t);
              if ((n = s.length) !== Object.keys(r).length) return !1;
              for (i = n; 0 != i--; )
                if (!Object.prototype.hasOwnProperty.call(r, s[i])) return !1;
              for (i = n; 0 != i--; ) {
                let n = s[i];
                if (n && !e(t[n], r[n])) return !1;
              }
              return !0;
            }
            return t != t && r != r;
          },
      });
    },
    34524: (e, t, r) => {
      r.d(t, { T: () => n });
      function n(e, t, r) {
        let n = e[t.name];
        if ("function" == typeof n) return n;
        let i = e[r];
        return "function" == typeof i ? i : (r) => t(e, r);
      }
    },
    34533: (e, t, r) => {
      r.d(t, { useConnections: () => c });
      var n = r(34250);
      let i = [];
      function s(e) {
        let t = [...e.state.connections.values()];
        return "reconnecting" === e.state.status || (0, n.b)(i, t)
          ? i
          : ((i = t), t);
      }
      var a = r(12115),
        o = r(53031);
      function c() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, o.useConfig)(e);
        return (0, a.useSyncExternalStore)(
          (e) =>
            (function (e, t) {
              let { onChange: r } = t;
              return e.subscribe(() => s(e), r, { equalityFn: n.b });
            })(t, { onChange: e }),
          () => s(t),
          () => s(t)
        );
      }
    },
    34560: (e, t, r) => {
      r.d(t, { $: () => o, s: () => a });
      var n = r(7165),
        i = r(57948),
        s = r(6784),
        a = class extends i.k {
          #u;
          #l;
          #d;
          constructor(e) {
            super(),
              (this.mutationId = e.mutationId),
              (this.#l = e.mutationCache),
              (this.#u = []),
              (this.state = e.state || o()),
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
            this.#u.includes(e) ||
              (this.#u.push(e),
              this.clearGcTimeout(),
              this.#l.notify({
                type: "observerAdded",
                mutation: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            (this.#u = this.#u.filter((t) => t !== e)),
              this.scheduleGc(),
              this.#l.notify({
                type: "observerRemoved",
                mutation: this,
                observer: e,
              });
          }
          optionalRemove() {
            this.#u.length ||
              ("pending" === this.state.status
                ? this.scheduleGc()
                : this.#l.remove(this));
          }
          continue() {
            return this.#d?.continue() ?? this.execute(this.state.variables);
          }
          async execute(e) {
            let t = () => {
              this.#f({ type: "continue" });
            };
            this.#d = (0, s.II)({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(e)
                  : Promise.reject(Error("No mutationFn found")),
              onFail: (e, t) => {
                this.#f({ type: "failed", failureCount: e, error: t });
              },
              onPause: () => {
                this.#f({ type: "pause" });
              },
              onContinue: t,
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#l.canRun(this),
            });
            let r = "pending" === this.state.status,
              n = !this.#d.canStart();
            try {
              if (r) t();
              else {
                this.#f({ type: "pending", variables: e, isPaused: n }),
                  await this.#l.config.onMutate?.(e, this);
                let t = await this.options.onMutate?.(e);
                t !== this.state.context &&
                  this.#f({
                    type: "pending",
                    context: t,
                    variables: e,
                    isPaused: n,
                  });
              }
              let i = await this.#d.start();
              return (
                await this.#l.config.onSuccess?.(
                  i,
                  e,
                  this.state.context,
                  this
                ),
                await this.options.onSuccess?.(i, e, this.state.context),
                await this.#l.config.onSettled?.(
                  i,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                ),
                await this.options.onSettled?.(i, null, e, this.state.context),
                this.#f({ type: "success", data: i }),
                i
              );
            } catch (t) {
              try {
                throw (
                  (await this.#l.config.onError?.(
                    t,
                    e,
                    this.state.context,
                    this
                  ),
                  await this.options.onError?.(t, e, this.state.context),
                  await this.#l.config.onSettled?.(
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
                this.#f({ type: "error", error: t });
              }
            } finally {
              this.#l.runNext(this);
            }
          }
          #f(e) {
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
              n.jG.batch(() => {
                this.#u.forEach((t) => {
                  t.onMutationUpdate(e);
                }),
                  this.#l.notify({
                    mutation: this,
                    type: "updated",
                    action: e,
                  });
              });
          }
        };
      function o() {
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
    34613: (e, t, r) => {
      r.d(t, { K: () => n });
      function n(e, t = {}) {
        let r;
        try {
          r = e.getClient(t);
        } catch {}
        return r;
      }
    },
    35020: (e, t, r) => {
      r.d(t, { l: () => s });
      var n = r(7441),
        i = r(42264);
      function s(e, t) {
        let r = (e.details || "").toLowerCase(),
          s = e instanceof n.C ? e.walk((e) => e?.code === i.A7.code) : e;
        return s instanceof n.C
          ? new i.A7({ cause: e, message: s.details })
          : i.A7.nodeMessage.test(r)
          ? new i.A7({ cause: e, message: e.details })
          : i.BG.nodeMessage.test(r)
          ? new i.BG({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : i.jj.nodeMessage.test(r)
          ? new i.jj({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : i.K0.nodeMessage.test(r)
          ? new i.K0({ cause: e, nonce: t?.nonce })
          : i.Oh.nodeMessage.test(r)
          ? new i.Oh({ cause: e, nonce: t?.nonce })
          : i.vW.nodeMessage.test(r)
          ? new i.vW({ cause: e, nonce: t?.nonce })
          : i.k5.nodeMessage.test(r)
          ? new i.k5({ cause: e })
          : i.lY.nodeMessage.test(r)
          ? new i.lY({ cause: e, gas: t?.gas })
          : i.Fo.nodeMessage.test(r)
          ? new i.Fo({ cause: e, gas: t?.gas })
          : i.uC.nodeMessage.test(r)
          ? new i.uC({ cause: e })
          : i.lN.nodeMessage.test(r)
          ? new i.lN({
              cause: e,
              maxFeePerGas: t?.maxFeePerGas,
              maxPriorityFeePerGas: t?.maxPriorityFeePerGas,
            })
          : new i.RM({ cause: e });
      }
    },
    35109: (e, t, r) => {
      r.d(t, {
        zX: () => m,
        bG: () => g,
        M: () => v,
        rR: () => w,
        Po: () => x,
        $S: () => E,
      });
      var n = r(19405),
        i = r(29995),
        s = r(47826),
        a = r(21159),
        o = r(79183);
      function c({
        abiItem: e,
        args: t,
        includeFunctionName: r = !0,
        includeName: n = !1,
      }) {
        if ("name" in e && "inputs" in e && e.inputs)
          return `${r ? e.name : ""}(${e.inputs
            .map(
              (e, r) =>
                `${n && e.name ? `${e.name}: ` : ""}${
                  "object" == typeof t[r] ? (0, o.A)(t[r]) : t[r]
                }`
            )
            .join(", ")})`;
      }
      var u = r(23008),
        l = r(44494),
        d = r(31942),
        f = r(99702),
        h = r(7441),
        p = r(4805),
        b = r(69432),
        y = r(41514);
      class m extends h.C {
        constructor(
          e,
          {
            account: t,
            docsPath: r,
            chain: i,
            data: s,
            gas: a,
            gasPrice: o,
            maxFeePerGas: c,
            maxPriorityFeePerGas: u,
            nonce: f,
            to: h,
            value: y,
            stateOverride: m,
          }
        ) {
          let g = t ? (0, n.J)(t) : void 0,
            v = (0, b.aO)({
              from: g?.address,
              to: h,
              value:
                void 0 !== y &&
                `${(0, l.c)(y)} ${i?.nativeCurrency?.symbol || "ETH"}`,
              data: s,
              gas: a,
              gasPrice: void 0 !== o && `${(0, d.Q)(o)} gwei`,
              maxFeePerGas: void 0 !== c && `${(0, d.Q)(c)} gwei`,
              maxPriorityFeePerGas: void 0 !== u && `${(0, d.Q)(u)} gwei`,
              nonce: f,
            });
          m &&
            (v += `
${(0, p.uj)(m)}`),
            super(e.shortMessage, {
              cause: e,
              docsPath: r,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                "Raw Call Arguments:",
                v,
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
      class g extends h.C {
        constructor(
          e,
          {
            abi: t,
            args: r,
            contractAddress: n,
            docsPath: i,
            functionName: s,
            sender: o,
          }
        ) {
          let l = (0, u.iY)({ abi: t, args: r, name: s }),
            d = l
              ? c({
                  abiItem: l,
                  args: r,
                  includeFunctionName: !1,
                  includeName: !1,
                })
              : void 0,
            f = l ? (0, a.B)(l, { includeName: !0 }) : void 0,
            h = (0, b.aO)({
              address: n && (0, y.R)(n),
              function: f,
              args:
                d &&
                "()" !== d &&
                `${[...Array(s?.length ?? 0).keys()]
                  .map(() => " ")
                  .join("")}${d}`,
              sender: o,
            });
          super(
            e.shortMessage ||
              `An unknown error occurred while executing the contract function "${s}".`,
            {
              cause: e,
              docsPath: i,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                h && "Contract Call:",
                h,
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
            (this.args = r),
            (this.cause = e),
            (this.contractAddress = n),
            (this.functionName = s),
            (this.sender = o);
        }
      }
      class v extends h.C {
        constructor({ abi: e, data: t, functionName: r, message: n }) {
          let o, u, l, d, h;
          if (t && "0x" !== t)
            try {
              let {
                abiItem: r,
                errorName: n,
                args: o,
              } = (h = (0, s.W)({ abi: e, data: t }));
              if ("Error" === n) l = o[0];
              else if ("Panic" === n) {
                let [e] = o;
                l = i.fD[e];
              } else {
                let e = r ? (0, a.B)(r, { includeName: !0 }) : void 0,
                  t =
                    r && o
                      ? c({
                          abiItem: r,
                          args: o,
                          includeFunctionName: !1,
                          includeName: !1,
                        })
                      : void 0;
                u = [
                  e ? `Error: ${e}` : "",
                  t && "()" !== t
                    ? `       ${[...Array(n?.length ?? 0).keys()]
                        .map(() => " ")
                        .join("")}${t}`
                    : "",
                ];
              }
            } catch (e) {
              o = e;
            }
          else n && (l = n);
          o instanceof f.Wq &&
            ((d = o.signature),
            (u = [
              `Unable to decode signature "${d}" as it was not found on the provided ABI.`,
              "Make sure you are using the correct ABI and that the error exists on it.",
              `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`,
            ])),
            super(
              (l && "execution reverted" !== l) || d
                ? [
                    `The contract function "${r}" reverted with the following ${
                      d ? "signature" : "reason"
                    }:`,
                    l || d,
                  ].join("\n")
                : `The contract function "${r}" reverted.`,
              {
                cause: o,
                metaMessages: u,
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
            (this.data = h),
            (this.raw = t),
            (this.reason = l),
            (this.signature = d);
        }
      }
      class w extends h.C {
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
      class x extends h.C {
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
      class E extends h.C {
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
    35791: (e, t, r) => {
      r.d(t, { J: () => s });
      var n = r(86205);
      function i(e) {
        return {
          address: e.address,
          amount: n.oB(e.amount),
          index: n.oB(e.index),
          validatorIndex: n.oB(e.validatorIndex),
        };
      }
      function s(e) {
        return {
          ...("bigint" == typeof e.baseFeePerGas && {
            baseFeePerGas: n.oB(e.baseFeePerGas),
          }),
          ...("bigint" == typeof e.blobBaseFee && {
            blobBaseFee: n.oB(e.blobBaseFee),
          }),
          ...("string" == typeof e.feeRecipient && {
            feeRecipient: e.feeRecipient,
          }),
          ...("bigint" == typeof e.gasLimit && { gasLimit: n.oB(e.gasLimit) }),
          ...("bigint" == typeof e.number && { number: n.oB(e.number) }),
          ...("bigint" == typeof e.prevRandao && {
            prevRandao: n.oB(e.prevRandao),
          }),
          ...("bigint" == typeof e.time && { time: n.oB(e.time) }),
          ...(e.withdrawals && { withdrawals: e.withdrawals.map(i) }),
        };
      }
    },
    35883: (e, t, r) => {
      r.d(t, { b: () => l, o: () => u });
      var n = r(36444),
        i = r(80844),
        s = r(24578),
        a = r(65003),
        o = r(81757);
      let c = new a.A(8192);
      function u(e, t) {
        if (c.has(`${e}.${t}`)) return c.get(`${e}.${t}`);
        let r = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
          n = (0, s.S)((0, i.Af)(r), "bytes"),
          a = (t ? r.substring(`${t}0x`.length) : r).split("");
        for (let e = 0; e < 40; e += 2)
          n[e >> 1] >> 4 >= 8 && a[e] && (a[e] = a[e].toUpperCase()),
            (15 & n[e >> 1]) >= 8 &&
              a[e + 1] &&
              (a[e + 1] = a[e + 1].toUpperCase());
        let o = `0x${a.join("")}`;
        return c.set(`${e}.${t}`, o), o;
      }
      function l(e, t) {
        if (!(0, o.P)(e, { strict: !1 })) throw new n.M({ address: e });
        return u(e, t);
      }
    },
    35886: (e, t, r) => {
      r.d(t, { Lj: () => a, uL: () => o });
      var n = r(27493),
        i = r(87632),
        s = r(12914);
      let a = { "0x0": "reverted", "0x1": "success" };
      function o(e) {
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
          logs: e.logs ? e.logs.map((e) => (0, i.e)(e)) : null,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex
            ? (0, n.ME)(e.transactionIndex)
            : null,
          status: e.status ? a[e.status] : null,
          type: e.type ? s.b4[e.type] || e.type : null,
        };
        return (
          e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)),
          e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)),
          t
        );
      }
    },
    36142: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useEnvContext = void 0);
      let n = r(12115),
        i = r(94484);
      t.useEnvContext = () => {
        let e = (0, n.useContext)(i.EnvContext);
        if (!e)
          throw Error(
            "useEnvContext must be used within a EnvProvider or PublicEnvProvider"
          );
        return e;
      };
    },
    36444: (e, t, r) => {
      r.d(t, { M: () => i });
      var n = r(7441);
      class i extends n.C {
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
    36984: (e, t, r) => {
      r.d(t, { db: () => s, eV: () => i });
      var n = r(58980);
      function i(e, { dir: t, size: r = 32 } = {}) {
        return "string" == typeof e
          ? s(e, { dir: t, size: r })
          : (function (e, { dir: t, size: r = 32 } = {}) {
              if (null === r) return e;
              if (e.length > r)
                throw new n.Fl({
                  size: e.length,
                  targetSize: r,
                  type: "bytes",
                });
              let i = new Uint8Array(r);
              for (let n = 0; n < r; n++) {
                let s = "right" === t;
                i[s ? n : r - n - 1] = e[s ? n : e.length - n - 1];
              }
              return i;
            })(e, { dir: t, size: r });
      }
      function s(e, { dir: t, size: r = 32 } = {}) {
        if (null === r) return e;
        let i = e.replace("0x", "");
        if (i.length > 2 * r)
          throw new n.Fl({
            size: Math.ceil(i.length / 2),
            targetSize: r,
            type: "hex",
          });
        return `0x${i["right" === t ? "padEnd" : "padStart"](2 * r, "0")}`;
      }
    },
    38697: (e, t, r) => {
      r.d(t, { BD: () => n, Ge: () => i });
      let n = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        i =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
    },
    38958: (e, t, r) => {
      r.d(t, { e: () => d });
      var n = r(59126),
        i = r(84701),
        s = r(99901),
        a = r(30686),
        o = r(68321);
      class c extends o.C {
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
      var u = r(17130),
        l = r(27442);
      function d(e) {
        let t = {},
          r = e.length;
        for (let n = 0; n < r; n++) {
          let r = e[n];
          if (!(0, u.WL)(r)) continue;
          let i = (0, u.FO)(r);
          if (!i) throw new a.s7({ signature: r, type: "struct" });
          let s = i.properties.split(";"),
            o = [],
            c = s.length;
          for (let e = 0; e < c; e++) {
            let t = s[e].trim();
            if (!t) continue;
            let r = (0, l.Pj)(t, { type: "struct" });
            o.push(r);
          }
          if (!o.length) throw new a.X9({ signature: r });
          t[i.name] = o;
        }
        let o = {},
          d = Object.entries(t),
          h = d.length;
        for (let e = 0; e < h; e++) {
          let [r, a] = d[e];
          o[r] = (function e(t, r, a = new Set()) {
            let o = [],
              u = t.length;
            for (let d = 0; d < u; d++) {
              let u = t[d];
              if (n.wj.test(u.type)) o.push(u);
              else {
                let t = (0, n.Yv)(f, u.type);
                if (!t?.type) throw new s.nx({ abiParameter: u });
                let { array: d, type: h } = t;
                if (h in r) {
                  if (a.has(h)) throw new c({ type: h });
                  o.push({
                    ...u,
                    type: `tuple${d ?? ""}`,
                    components: e(r[h] ?? [], r, new Set([...a, h])),
                  });
                } else if ((0, l._o)(h)) o.push(u);
                else throw new i.zz({ type: h });
              }
            }
            return o;
          })(a, t);
        }
        return o;
      }
      let f = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
    },
    39050: (e, t, r) => {
      r.d(t, { T: () => i });
      var n = r(67622);
      async function i(
        e,
        {
          blockCount: t,
          blockNumber: r,
          blockTag: i = "latest",
          rewardPercentiles: s,
        }
      ) {
        var a;
        let o = "bigint" == typeof r ? (0, n.cK)(r) : void 0;
        return {
          baseFeePerGas: (a = await e.request(
            { method: "eth_feeHistory", params: [(0, n.cK)(t), o || i, s] },
            { dedupe: !!o }
          )).baseFeePerGas.map((e) => BigInt(e)),
          gasUsedRatio: a.gasUsedRatio,
          oldestBlock: BigInt(a.oldestBlock),
          reward: a.reward?.map((e) => e.map((e) => BigInt(e))),
        };
      }
    },
    39112: (e, t, r) => {
      r.d(t, { L: () => n });
      async function n(e) {
        return BigInt(await e.request({ method: "eth_gasPrice" }));
      }
    },
    39853: (e, t, r) => {
      r.d(t, { X: () => o, k: () => c });
      var n = r(52020),
        i = r(7165),
        s = r(6784),
        a = r(57948),
        o = class extends a.k {
          #h;
          #p;
          #b;
          #e;
          #d;
          #y;
          #m;
          constructor(e) {
            super(),
              (this.#m = !1),
              (this.#y = e.defaultOptions),
              this.setOptions(e.options),
              (this.observers = []),
              (this.#e = e.client),
              (this.#b = this.#e.getQueryCache()),
              (this.queryKey = e.queryKey),
              (this.queryHash = e.queryHash),
              (this.#h = (function (e) {
                let t =
                    "function" == typeof e.initialData
                      ? e.initialData()
                      : e.initialData,
                  r = void 0 !== t,
                  n = r
                    ? "function" == typeof e.initialDataUpdatedAt
                      ? e.initialDataUpdatedAt()
                      : e.initialDataUpdatedAt
                    : 0;
                return {
                  data: t,
                  dataUpdateCount: 0,
                  dataUpdatedAt: r ? n ?? Date.now() : 0,
                  error: null,
                  errorUpdateCount: 0,
                  errorUpdatedAt: 0,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: null,
                  isInvalidated: !1,
                  status: r ? "success" : "pending",
                  fetchStatus: "idle",
                };
              })(this.options)),
              (this.state = e.state ?? this.#h),
              this.scheduleGc();
          }
          get meta() {
            return this.options.meta;
          }
          get promise() {
            return this.#d?.promise;
          }
          setOptions(e) {
            (this.options = { ...this.#y, ...e }),
              this.updateGcTime(this.options.gcTime);
          }
          optionalRemove() {
            this.observers.length ||
              "idle" !== this.state.fetchStatus ||
              this.#b.remove(this);
          }
          setData(e, t) {
            let r = (0, n.pl)(this.state.data, e, this.options);
            return (
              this.#f({
                data: r,
                type: "success",
                dataUpdatedAt: t?.updatedAt,
                manual: t?.manual,
              }),
              r
            );
          }
          setState(e, t) {
            this.#f({ type: "setState", state: e, setStateOptions: t });
          }
          cancel(e) {
            let t = this.#d?.promise;
            return (
              this.#d?.cancel(e),
              t ? t.then(n.lQ).catch(n.lQ) : Promise.resolve()
            );
          }
          destroy() {
            super.destroy(), this.cancel({ silent: !0 });
          }
          reset() {
            this.destroy(), this.setState(this.#h);
          }
          isActive() {
            return this.observers.some(
              (e) => !1 !== (0, n.Eh)(e.options.enabled, this)
            );
          }
          isDisabled() {
            return this.getObserversCount() > 0
              ? !this.isActive()
              : this.options.queryFn === n.hT ||
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
              !(0, n.j3)(this.state.dataUpdatedAt, e)
            );
          }
          onFocus() {
            let e = this.observers.find((e) => e.shouldFetchOnWindowFocus());
            e?.refetch({ cancelRefetch: !1 }), this.#d?.continue();
          }
          onOnline() {
            let e = this.observers.find((e) => e.shouldFetchOnReconnect());
            e?.refetch({ cancelRefetch: !1 }), this.#d?.continue();
          }
          addObserver(e) {
            this.observers.includes(e) ||
              (this.observers.push(e),
              this.clearGcTimeout(),
              this.#b.notify({
                type: "observerAdded",
                query: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            this.observers.includes(e) &&
              ((this.observers = this.observers.filter((t) => t !== e)),
              this.observers.length ||
                (this.#d &&
                  (this.#m
                    ? this.#d.cancel({ revert: !0 })
                    : this.#d.cancelRetry()),
                this.scheduleGc()),
              this.#b.notify({
                type: "observerRemoved",
                query: this,
                observer: e,
              }));
          }
          getObserversCount() {
            return this.observers.length;
          }
          invalidate() {
            this.state.isInvalidated || this.#f({ type: "invalidate" });
          }
          fetch(e, t) {
            if ("idle" !== this.state.fetchStatus) {
              if (void 0 !== this.state.data && t?.cancelRefetch)
                this.cancel({ silent: !0 });
              else if (this.#d) return this.#d.continueRetry(), this.#d.promise;
            }
            if ((e && this.setOptions(e), !this.options.queryFn)) {
              let e = this.observers.find((e) => e.options.queryFn);
              e && this.setOptions(e.options);
            }
            let r = new AbortController(),
              i = (e) => {
                Object.defineProperty(e, "signal", {
                  enumerable: !0,
                  get: () => ((this.#m = !0), r.signal),
                });
              },
              a = {
                fetchOptions: t,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#e,
                state: this.state,
                fetchFn: () => {
                  let e = (0, n.ZM)(this.options, t),
                    r = {
                      client: this.#e,
                      queryKey: this.queryKey,
                      meta: this.meta,
                    };
                  return (i(r), (this.#m = !1), this.options.persister)
                    ? this.options.persister(e, r, this)
                    : e(r);
                },
              };
            i(a),
              this.options.behavior?.onFetch(a, this),
              (this.#p = this.state),
              ("idle" === this.state.fetchStatus ||
                this.state.fetchMeta !== a.fetchOptions?.meta) &&
                this.#f({ type: "fetch", meta: a.fetchOptions?.meta });
            let o = (e) => {
              ((0, s.wm)(e) && e.silent) ||
                this.#f({ type: "error", error: e }),
                (0, s.wm)(e) ||
                  (this.#b.config.onError?.(e, this),
                  this.#b.config.onSettled?.(this.state.data, e, this)),
                this.scheduleGc();
            };
            return (
              (this.#d = (0, s.II)({
                initialPromise: t?.initialPromise,
                fn: a.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: (e) => {
                  if (void 0 === e)
                    return void o(Error(`${this.queryHash} data is undefined`));
                  try {
                    this.setData(e);
                  } catch (e) {
                    o(e);
                    return;
                  }
                  this.#b.config.onSuccess?.(e, this),
                    this.#b.config.onSettled?.(e, this.state.error, this),
                    this.scheduleGc();
                },
                onError: o,
                onFail: (e, t) => {
                  this.#f({ type: "failed", failureCount: e, error: t });
                },
                onPause: () => {
                  this.#f({ type: "pause" });
                },
                onContinue: () => {
                  this.#f({ type: "continue" });
                },
                retry: a.options.retry,
                retryDelay: a.options.retryDelay,
                networkMode: a.options.networkMode,
                canRun: () => !0,
              })),
              this.#d.start()
            );
          }
          #f(e) {
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
                  let r = e.error;
                  if ((0, s.wm)(r) && r.revert && this.#p)
                    return { ...this.#p, fetchStatus: "idle" };
                  return {
                    ...t,
                    error: r,
                    errorUpdateCount: t.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: t.fetchFailureCount + 1,
                    fetchFailureReason: r,
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
                  this.#b.notify({ query: this, type: "updated", action: e });
              });
          }
        };
      function c(e, t) {
        return {
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchStatus: (0, s.v_)(t.networkMode) ? "fetching" : "paused",
          ...(void 0 === e && { error: null, status: "pending" }),
        };
      }
    },
    40194: (e, t, r) => {
      r.d(t, { r: () => n });
      let n = "2.17.2";
    },
    41052: (e, t, r) => {
      r.d(t, { J: () => a });
      var n = r(29995),
        i = r(7441),
        s = r(35109);
      function a(e, t) {
        if (!(e instanceof i.C)) return !1;
        let r = e.walk((e) => e instanceof s.M);
        return (
          r instanceof s.M &&
          (!!(
            r.data?.errorName === "ResolverNotFound" ||
            r.data?.errorName === "ResolverWildcardNotSupported" ||
            r.data?.errorName === "ResolverNotContract" ||
            r.data?.errorName === "ResolverError" ||
            r.data?.errorName === "HttpError" ||
            r.reason?.includes(
              "Wildcard on non-extended resolvers is not supported"
            )
          ) ||
            ("reverse" === t && r.reason === n.fD[50]))
        );
      }
    },
    41246: (e, t, r) => {
      r.d(t, { l: () => a });
      var n = r(19405),
        i = r(50431),
        s = r(67622);
      async function a(e, { account: t = e.account, message: r }) {
        if (!t) throw new i.T({ docsPath: "/docs/actions/wallet/signMessage" });
        let a = (0, n.J)(t);
        if (a.signMessage) return a.signMessage({ message: r });
        let o =
          "string" == typeof r
            ? (0, s.i3)(r)
            : r.raw instanceof Uint8Array
            ? (0, s.nj)(r.raw)
            : r.raw;
        return e.request(
          { method: "personal_sign", params: [o, a.address] },
          { retryCount: 0 }
        );
      }
    },
    41514: (e, t, r) => {
      r.d(t, { I: () => i, R: () => n });
      let n = (e) => e,
        i = (e) => e;
    },
    42142: (e, t, r) => {
      r.d(t, { b: () => i });
      var n = r(10231);
      function i(
        e,
        { delay: t = 100, retryCount: r = 2, shouldRetry: s = () => !0 } = {}
      ) {
        return new Promise((i, a) => {
          let o = async ({ count: c = 0 } = {}) => {
            let u = async ({ error: e }) => {
              let r = "function" == typeof t ? t({ count: c, error: e }) : t;
              r && (await (0, n.u)(r)), o({ count: c + 1 });
            };
            try {
              let t = await e();
              i(t);
            } catch (e) {
              if (c < r && (await s({ count: c, error: e })))
                return u({ error: e });
              a(e);
            }
          };
          o();
        });
      }
    },
    42264: (e, t, r) => {
      r.d(t, {
        A7: () => s,
        BG: () => a,
        Fo: () => h,
        K0: () => c,
        Oh: () => u,
        RM: () => y,
        jj: () => o,
        k5: () => d,
        lN: () => b,
        lY: () => f,
        uC: () => p,
        vW: () => l,
      });
      var n = r(31942),
        i = r(7441);
      class s extends i.C {
        constructor({ cause: e, message: t } = {}) {
          let r = t
            ?.replace("execution reverted: ", "")
            ?.replace("execution reverted", "");
          super(
            `Execution reverted ${
              r ? `with reason: ${r}` : "for an unknown reason"
            }.`,
            { cause: e, name: "ExecutionRevertedError" }
          );
        }
      }
      Object.defineProperty(s, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 3,
      }),
        Object.defineProperty(s, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /execution reverted/,
        });
      class a extends i.C {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, n.Q)(t)} gwei` : ""
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
      class o extends i.C {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, n.Q)(t)}` : ""
            } gwei) cannot be lower than the block base fee.`,
            { cause: e, name: "FeeCapTooLowError" }
          );
        }
      }
      Object.defineProperty(o, "nodeMessage", {
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
      class u extends i.C {
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
      Object.defineProperty(u, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too low|transaction already imported|already known/,
      });
      class l extends i.C {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }exceeds the maximum allowed nonce.`,
            { cause: e, name: "NonceMaxValueError" }
          );
        }
      }
      Object.defineProperty(l, "nodeMessage", {
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
      class f extends i.C {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction exceeds the limit allowed for the block.`,
            { cause: e, name: "IntrinsicGasTooHighError" }
          );
        }
      }
      Object.defineProperty(f, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too high|gas limit reached/,
      });
      class h extends i.C {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction is too low.`,
            { cause: e, name: "IntrinsicGasTooLowError" }
          );
        }
      }
      Object.defineProperty(h, "nodeMessage", {
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
      class b extends i.C {
        constructor({
          cause: e,
          maxPriorityFeePerGas: t,
          maxFeePerGas: r,
        } = {}) {
          super(
            `The provided tip (\`maxPriorityFeePerGas\`${
              t ? ` = ${(0, n.Q)(t)} gwei` : ""
            }) cannot be higher than the fee cap (\`maxFeePerGas\`${
              r ? ` = ${(0, n.Q)(r)} gwei` : ""
            }).`,
            { cause: e, name: "TipAboveFeeCapError" }
          );
        }
      }
      Object.defineProperty(b, "nodeMessage", {
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
    42714: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "setAttributesFromProps", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = {
          acceptCharset: "accept-charset",
          className: "class",
          htmlFor: "for",
          httpEquiv: "http-equiv",
          noModule: "noModule",
        },
        n = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
          "stylesheets",
        ];
      function i(e) {
        return ["async", "defer", "noModule"].includes(e);
      }
      function s(e, t) {
        for (let [s, a] of Object.entries(t)) {
          if (!t.hasOwnProperty(s) || n.includes(s) || void 0 === a) continue;
          let o = r[s] || s.toLowerCase();
          "SCRIPT" === e.tagName && i(o)
            ? (e[o] = !!a)
            : e.setAttribute(o, String(a)),
            (!1 === a ||
              ("SCRIPT" === e.tagName && i(o) && (!a || "false" === a))) &&
              (e.setAttribute(o, ""), e.removeAttribute(o));
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    43935: (e, t, r) => {
      r.d(t, { n: () => b });
      var n = r(99702),
        i = r(35883),
        s = r(87456),
        a = r(87094),
        o = r(93727),
        c = r(54335),
        u = r(94201),
        l = r(27493),
        d = r(67622);
      function f(e, t = {}) {
        void 0 !== t.size && (0, l.Sl)(e, { size: t.size });
        let r = (0, d.My)(e, t);
        return (0, l.ME)(r, t);
      }
      var h = r(80844),
        p = r(13423);
      function b(e, t) {
        let r = "string" == typeof t ? (0, h.aT)(t) : t,
          b = (0, s.l)(r);
        if (0 === (0, a.E)(r) && e.length > 0) throw new n.O();
        if ((0, a.E)(t) && 32 > (0, a.E)(t))
          throw new n.Iy({
            data: "string" == typeof t ? t : (0, d.My)(t),
            params: e,
            size: (0, a.E)(t),
          });
        let m = 0,
          g = [];
        for (let t = 0; t < e.length; ++t) {
          let r = e[t];
          b.setPosition(m);
          let [s, a] = (function e(t, r, { staticPosition: s }) {
            let a = (0, p.k)(r.type);
            if (a) {
              let [n, i] = a;
              return (function (t, r, { length: n, staticPosition: i }) {
                if (!n) {
                  let n = i + f(t.readBytes(32)),
                    s = n + 32;
                  t.setPosition(n);
                  let a = f(t.readBytes(32)),
                    o = y(r),
                    c = 0,
                    u = [];
                  for (let n = 0; n < a; ++n) {
                    t.setPosition(s + (o ? 32 * n : c));
                    let [i, a] = e(t, r, { staticPosition: s });
                    (c += a), u.push(i);
                  }
                  return t.setPosition(i + 32), [u, 32];
                }
                if (y(r)) {
                  let s = i + f(t.readBytes(32)),
                    a = [];
                  for (let i = 0; i < n; ++i) {
                    t.setPosition(s + 32 * i);
                    let [n] = e(t, r, { staticPosition: s });
                    a.push(n);
                  }
                  return t.setPosition(i + 32), [a, 32];
                }
                let s = 0,
                  a = [];
                for (let o = 0; o < n; ++o) {
                  let [n, o] = e(t, r, { staticPosition: i + s });
                  (s += o), a.push(n);
                }
                return [a, s];
              })(t, { ...r, type: i }, { length: n, staticPosition: s });
            }
            if ("tuple" === r.type)
              return (function (t, r, { staticPosition: n }) {
                let i =
                    0 === r.components.length ||
                    r.components.some(({ name: e }) => !e),
                  s = i ? [] : {},
                  a = 0;
                if (y(r)) {
                  let o = n + f(t.readBytes(32));
                  for (let n = 0; n < r.components.length; ++n) {
                    let c = r.components[n];
                    t.setPosition(o + a);
                    let [u, l] = e(t, c, { staticPosition: o });
                    (a += l), (s[i ? n : c?.name] = u);
                  }
                  return t.setPosition(n + 32), [s, 32];
                }
                for (let o = 0; o < r.components.length; ++o) {
                  let c = r.components[o],
                    [u, l] = e(t, c, { staticPosition: n });
                  (s[i ? o : c?.name] = u), (a += l);
                }
                return [s, a];
              })(t, r, { staticPosition: s });
            if ("address" === r.type) {
              var h = t;
              let e = h.readBytes(32);
              return [(0, i.o)((0, d.My)((0, o.A1)(e, -20))), 32];
            }
            if ("bool" === r.type)
              return [
                (function (e, t = {}) {
                  let r = e;
                  if (
                    (void 0 !== t.size &&
                      ((0, l.Sl)(r, { size: t.size }), (r = (0, c.B)(r))),
                    r.length > 1 || r[0] > 1)
                  )
                    throw new u.xO(r);
                  return !!r[0];
                })(t.readBytes(32), { size: 32 }),
                32,
              ];
            if (r.type.startsWith("bytes"))
              return (function (e, t, { staticPosition: r }) {
                let [n, i] = t.type.split("bytes");
                if (!i) {
                  let t = f(e.readBytes(32));
                  e.setPosition(r + t);
                  let n = f(e.readBytes(32));
                  if (0 === n) return e.setPosition(r + 32), ["0x", 32];
                  let i = e.readBytes(n);
                  return e.setPosition(r + 32), [(0, d.My)(i), 32];
                }
                return [(0, d.My)(e.readBytes(Number.parseInt(i), 32)), 32];
              })(t, r, { staticPosition: s });
            if (r.type.startsWith("uint") || r.type.startsWith("int")) {
              var b = t,
                m = r;
              let e = m.type.startsWith("int"),
                n = Number.parseInt(m.type.split("int")[1] || "256"),
                i = b.readBytes(32);
              return [
                n > 48
                  ? (function (e, t = {}) {
                      void 0 !== t.size && (0, l.Sl)(e, { size: t.size });
                      let r = (0, d.My)(e, t);
                      return (0, l.uU)(r, t);
                    })(i, { signed: e })
                  : f(i, { signed: e }),
                32,
              ];
            }
            if ("string" === r.type)
              return (function (e, { staticPosition: t }) {
                let r = f(e.readBytes(32));
                e.setPosition(t + r);
                let n = f(e.readBytes(32));
                if (0 === n) return e.setPosition(t + 32), ["", 32];
                let i = e.readBytes(n, 32),
                  s = (function (e, t = {}) {
                    let r = e;
                    return (
                      void 0 !== t.size &&
                        ((0, l.Sl)(r, { size: t.size }),
                        (r = (0, c.B)(r, { dir: "right" }))),
                      new TextDecoder().decode(r)
                    );
                  })((0, c.B)(i));
                return e.setPosition(t + 32), [s, 32];
              })(t, { staticPosition: s });
            throw new n.j(r.type, {
              docsPath: "/docs/contract/decodeAbiParameters",
            });
          })(b, r, { staticPosition: 0 });
          (m += a), g.push(s);
        }
        return g;
      }
      function y(e) {
        let { type: t } = e;
        if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
        if ("tuple" === t) return e.components?.some(y);
        let r = (0, p.k)(e.type);
        return !!(r && y({ ...e, type: r[1] }));
      }
    },
    44494: (e, t, r) => {
      r.d(t, { c: () => s });
      var n = r(77136),
        i = r(1405);
      function s(e, t = "wei") {
        return (0, i.J)(e, n.eL[t]);
      }
    },
    45446: (e, t, r) => {
      r.d(t, { Q: () => s });
      var n = r(59126);
      let i = /^tuple(?<array>(\[(\d*)\])*)$/;
      function s(e) {
        let t = "",
          r = e.length;
        for (let s = 0; s < r; s++)
          (t += (function e(t) {
            let r = t.type;
            if (i.test(t.type) && "components" in t) {
              r = "(";
              let s = t.components.length;
              for (let n = 0; n < s; n++)
                (r += e(t.components[n])), n < s - 1 && (r += ", ");
              let a = (0, n.Yv)(i, t.type);
              return (r += `)${a?.array ?? ""}`), e({ ...t, type: r });
            }
            return ("indexed" in t && t.indexed && (r = `${r} indexed`), t.name)
              ? `${r} ${t.name}`
              : r;
          })(e[s])),
            s !== r - 1 && (t += ", ");
        return t;
      }
    },
    45566: (e, t, r) => {
      e.exports = r(72312);
    },
    47826: (e, t, r) => {
      r.d(t, { W: () => u });
      var n = r(29995),
        i = r(99702),
        s = r(93727),
        a = r(21135),
        o = r(43935),
        c = r(21159);
      function u(e) {
        let { abi: t, data: r } = e,
          u = (0, s.di)(r, 0, 4);
        if ("0x" === u) throw new i.O();
        let l = [...(t || []), n.Mc, n.J9].find(
          (e) => "error" === e.type && u === (0, a.V)((0, c.B)(e))
        );
        if (!l)
          throw new i.Wq(u, { docsPath: "/docs/contract/decodeErrorResult" });
        return {
          abiItem: l,
          args:
            "inputs" in l && l.inputs && l.inputs.length > 0
              ? (0, o.n)(l.inputs, (0, s.di)(r, 4))
              : void 0,
          errorName: l.name,
        };
      }
    },
    48354: (e, t, r) => {
      r.d(t, { Z: () => n });
      async function n(e, { filter: t }) {
        return t.request({ method: "eth_uninstallFilter", params: [t.id] });
      }
    },
    48701: (e, t, r) => {
      r.d(t, {
        B4: () => h,
        CQ: () => w,
        CW: () => v,
        Ei: () => d,
        F8: () => x,
        P5: () => f,
        TH: () => E,
        Vl: () => m,
        Vr: () => g,
        WM: () => p,
        WQ: () => y,
        im: () => b,
        jm: () => o,
        lD: () => s,
        qh: () => l,
        rE: () => c,
        ry: () => u,
        xn: () => a,
      });
      let n = BigInt(0x100000000 - 1),
        i = BigInt(32);
      function s(e, t = !1) {
        let r = e.length,
          a = new Uint32Array(r),
          o = new Uint32Array(r);
        for (let s = 0; s < r; s++) {
          let { h: r, l: c } = (function (e, t = !1) {
            return t
              ? { h: Number(e & n), l: Number((e >> i) & n) }
              : { h: 0 | Number((e >> i) & n), l: 0 | Number(e & n) };
          })(e[s], t);
          [a[s], o[s]] = [r, c];
        }
        return [a, o];
      }
      let a = (e, t, r) => e >>> r,
        o = (e, t, r) => (e << (32 - r)) | (t >>> r),
        c = (e, t, r) => (e >>> r) | (t << (32 - r)),
        u = (e, t, r) => (e << (32 - r)) | (t >>> r),
        l = (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
        d = (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
        f = (e, t, r) => (e << r) | (t >>> (32 - r)),
        h = (e, t, r) => (t << r) | (e >>> (32 - r)),
        p = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
        b = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r));
      function y(e, t, r, n) {
        let i = (t >>> 0) + (n >>> 0);
        return { h: (e + r + ((i / 0x100000000) | 0)) | 0, l: 0 | i };
      }
      let m = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
        g = (e, t, r, n) => (t + r + n + ((e / 0x100000000) | 0)) | 0,
        v = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
        w = (e, t, r, n, i) => (t + r + n + i + ((e / 0x100000000) | 0)) | 0,
        x = (e, t, r, n, i) =>
          (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0),
        E = (e, t, r, n, i, s) =>
          (t + r + n + i + s + ((e / 0x100000000) | 0)) | 0;
    },
    49539: (e, t, r) => {
      r.d(t, { Q: () => i });
      var n = r(67622);
      async function i(
        e,
        { address: t, blockNumber: r, blockTag: i = "latest" }
      ) {
        let s = void 0 !== r ? (0, n.cK)(r) : void 0,
          a = await e.request(
            { method: "eth_getCode", params: [t, s || i] },
            { dedupe: !!s }
          );
        if ("0x" !== a) return a;
      }
    },
    50431: (e, t, r) => {
      r.d(t, { T: () => i, Z: () => s });
      var n = r(7441);
      class i extends n.C {
        constructor({ docsPath: e } = {}) {
          super(
            "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
            { docsPath: e, docsSlug: "account", name: "AccountNotFoundError" }
          );
        }
      }
      class s extends n.C {
        constructor({ docsPath: e, metaMessages: t, type: r }) {
          super(`Account type "${r}" is not supported.`, {
            docsPath: e,
            metaMessages: t,
            name: "AccountTypeNotSupportedError",
          });
        }
      }
    },
    50541: (e, t, r) => {
      r.d(t, { u: () => l });
      var n = r(34524),
        i = r(72342),
        s = r(86435),
        a = r(79183),
        o = r(27049),
        c = r(17249),
        u = r(48354);
      function l(
        e,
        {
          batch: t = !0,
          onError: r,
          onTransactions: l,
          poll: d,
          pollingInterval: f = e.pollingInterval,
        }
      ) {
        let h, p;
        return (void 0 !== d ? d : "webSocket" !== e.transport.type)
          ? (() => {
              let d = (0, a.A)(["watchPendingTransactions", e.uid, t, f]);
              return (0, i.lB)(d, { onTransactions: l, onError: r }, (r) => {
                let i,
                  a = (0, s.w)(
                    async () => {
                      try {
                        if (!i)
                          try {
                            i = await (0, n.T)(
                              e,
                              o.O,
                              "createPendingTransactionFilter"
                            )({});
                            return;
                          } catch (e) {
                            throw (a(), e);
                          }
                        let s = await (0, n.T)(
                          e,
                          c.I,
                          "getFilterChanges"
                        )({ filter: i });
                        if (0 === s.length) return;
                        if (t) r.onTransactions(s);
                        else for (let e of s) r.onTransactions([e]);
                      } catch (e) {
                        r.onError?.(e);
                      }
                    },
                    { emitOnBegin: !0, interval: f }
                  );
                return async () => {
                  i &&
                    (await (0, n.T)(e, u.Z, "uninstallFilter")({ filter: i })),
                    a();
                };
              });
            })()
          : ((h = !0),
            (p = () => (h = !1)),
            (async () => {
              try {
                let { unsubscribe: t } = await e.transport.subscribe({
                  params: ["newPendingTransactions"],
                  onData(e) {
                    if (!h) return;
                    let t = e.result;
                    l([t]);
                  },
                  onError(e) {
                    r?.(e);
                  },
                });
                (p = t), h || p();
              } catch (e) {
                r?.(e);
              }
            })(),
            () => p());
      }
    },
    50920: (e, t, r) => {
      r.d(t, { m: () => s });
      var n = r(25910),
        i = r(52020),
        s = new (class extends n.Q {
          #g;
          #o;
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
            this.#o || this.setEventListener(this.#c);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#o?.(), (this.#o = void 0));
          }
          setEventListener(e) {
            (this.#c = e),
              this.#o?.(),
              (this.#o = e((e) => {
                "boolean" == typeof e ? this.setFocused(e) : this.onFocus();
              }));
          }
          setFocused(e) {
            this.#g !== e && ((this.#g = e), this.onFocus());
          }
          onFocus() {
            let e = this.isFocused();
            this.listeners.forEach((t) => {
              t(e);
            });
          }
          isFocused() {
            return "boolean" == typeof this.#g
              ? this.#g
              : globalThis.document?.visibilityState !== "hidden";
          }
        })();
    },
    52020: (e, t, r) => {
      r.d(t, {
        BH: () => b,
        Cp: () => p,
        EN: () => h,
        Eh: () => u,
        F$: () => f,
        GU: () => O,
        MK: () => l,
        S$: () => n,
        ZM: () => I,
        ZZ: () => P,
        Zw: () => s,
        d2: () => c,
        f8: () => y,
        gn: () => a,
        hT: () => C,
        j3: () => o,
        lQ: () => i,
        nJ: () => d,
        pl: () => x,
        y9: () => E,
        yy: () => w,
      });
      var n = "undefined" == typeof window || "Deno" in globalThis;
      function i() {}
      function s(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function a(e) {
        return "number" == typeof e && e >= 0 && e !== 1 / 0;
      }
      function o(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0);
      }
      function c(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function u(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function l(e, t) {
        let {
          type: r = "all",
          exact: n,
          fetchStatus: i,
          predicate: s,
          queryKey: a,
          stale: o,
        } = e;
        if (a) {
          if (n) {
            if (t.queryHash !== f(a, t.options)) return !1;
          } else if (!p(t.queryKey, a)) return !1;
        }
        if ("all" !== r) {
          let e = t.isActive();
          if (("active" === r && !e) || ("inactive" === r && e)) return !1;
        }
        return (
          ("boolean" != typeof o || t.isStale() === o) &&
          (!i || i === t.state.fetchStatus) &&
          (!s || !!s(t))
        );
      }
      function d(e, t) {
        let { exact: r, status: n, predicate: i, mutationKey: s } = e;
        if (s) {
          if (!t.options.mutationKey) return !1;
          if (r) {
            if (h(t.options.mutationKey) !== h(s)) return !1;
          } else if (!p(t.options.mutationKey, s)) return !1;
        }
        return (!n || t.state.status === n) && (!i || !!i(t));
      }
      function f(e, t) {
        return (t?.queryKeyHashFn || h)(e);
      }
      function h(e) {
        return JSON.stringify(e, (e, t) =>
          g(t)
            ? Object.keys(t)
                .sort()
                .reduce((e, r) => ((e[r] = t[r]), e), {})
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
            Object.keys(t).every((r) => p(e[r], t[r])))
        );
      }
      function b(e, t) {
        if (e === t) return e;
        let r = m(e) && m(t);
        if (r || (g(e) && g(t))) {
          let n = r ? e : Object.keys(e),
            i = n.length,
            s = r ? t : Object.keys(t),
            a = s.length,
            o = r ? [] : {},
            c = 0;
          for (let i = 0; i < a; i++) {
            let a = r ? i : s[i];
            ((!r && n.includes(a)) || r) && void 0 === e[a] && void 0 === t[a]
              ? ((o[a] = void 0), c++)
              : ((o[a] = b(e[a], t[a])),
                o[a] === e[a] && void 0 !== e[a] && c++);
          }
          return i === a && c === i ? e : o;
        }
        return t;
      }
      function y(e, t) {
        if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
        for (let r in e) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function m(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length;
      }
      function g(e) {
        if (!v(e)) return !1;
        let t = e.constructor;
        if (void 0 === t) return !0;
        let r = t.prototype;
        return (
          !!v(r) &&
          !!r.hasOwnProperty("isPrototypeOf") &&
          Object.getPrototypeOf(e) === Object.prototype
        );
      }
      function v(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function w(e) {
        return new Promise((t) => {
          setTimeout(t, e);
        });
      }
      function x(e, t, r) {
        return "function" == typeof r.structuralSharing
          ? r.structuralSharing(e, t)
          : !1 !== r.structuralSharing
          ? b(e, t)
          : t;
      }
      function E(e, t, r = 0) {
        let n = [...e, t];
        return r && n.length > r ? n.slice(1) : n;
      }
      function P(e, t, r = 0) {
        let n = [t, ...e];
        return r && n.length > r ? n.slice(0, -1) : n;
      }
      var C = Symbol();
      function I(e, t) {
        return !e.queryFn && t?.initialPromise
          ? () => t.initialPromise
          : e.queryFn && e.queryFn !== C
          ? e.queryFn
          : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
      }
      function O(e, t) {
        return "function" == typeof e ? e(...t) : !!e;
      }
    },
    53031: (e, t, r) => {
      r.d(t, { useConfig: () => u });
      var n = r(12115),
        i = r(63401),
        s = r(95782);
      let a = () => "wagmi@2.15.4";
      class o extends s.C {
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
      class c extends o {
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
      function u() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = null != (e = t.config) ? e : (0, n.useContext)(i.WagmiContext);
        if (!r) throw new c();
        return r;
      }
    },
    54315: (e, t, r) => {
      r.d(t, { o: () => d });
      var n = r(7441),
        i = r(90557),
        s = r(81379),
        a = r(67622);
      let o = new (r(65003).A)(8192);
      var c = r(42142),
        u = r(79183),
        l = r(65368);
      function d(
        {
          key: e,
          methods: t,
          name: r,
          request: d,
          retryCount: f = 3,
          retryDelay: h = 150,
          timeout: p,
          type: b,
        },
        y
      ) {
        return {
          config: {
            key: e,
            methods: t,
            name: r,
            request: d,
            retryCount: f,
            retryDelay: h,
            timeout: p,
            type: b,
          },
          request: (function (e, t = {}) {
            return async (r, l = {}) => {
              let {
                  dedupe: d = !1,
                  methods: f,
                  retryDelay: h = 150,
                  retryCount: p = 3,
                  uid: b,
                } = { ...t, ...l },
                { method: y } = r;
              if (
                f?.exclude?.includes(y) ||
                (f?.include && !f.include.includes(y))
              )
                throw new s.ab(Error("method not supported"), { method: y });
              let m = d ? (0, a.i3)(`${b}.${(0, u.A)(r)}`) : void 0;
              return (function (e, { enabled: t = !0, id: r }) {
                if (!t || !r) return e();
                if (o.get(r)) return o.get(r);
                let n = e().finally(() => o.delete(r));
                return o.set(r, n), n;
              })(
                () =>
                  (0, c.b)(
                    async () => {
                      try {
                        return await e(r);
                      } catch (e) {
                        switch (e.code) {
                          case s.XU.code:
                            throw new s.XU(e);
                          case s.CL.code:
                            throw new s.CL(e);
                          case s.Gi.code:
                            throw new s.Gi(e, { method: r.method });
                          case s.D5.code:
                            throw new s.D5(e);
                          case s.bq.code:
                            throw new s.bq(e);
                          case s.Di.code:
                            throw new s.Di(e);
                          case s.hA.code:
                            throw new s.hA(e);
                          case s.qZ.code:
                            throw new s.qZ(e);
                          case s.YW.code:
                            throw new s.YW(e);
                          case s.ab.code:
                            throw new s.ab(e, { method: r.method });
                          case s.s0.code:
                            throw new s.s0(e);
                          case s.xQ.code:
                            throw new s.xQ(e);
                          case s.vx.code:
                            throw new s.vx(e);
                          case s.sV.code:
                            throw new s.sV(e);
                          case s.Sf.code:
                            throw new s.Sf(e);
                          case s.RV.code:
                            throw new s.RV(e);
                          case s.xq.code:
                            throw new s.xq(e);
                          case s.ch.code:
                            throw new s.ch(e);
                          case s.L5.code:
                            throw new s.L5(e);
                          case s.WT.code:
                            throw new s.WT(e);
                          case s.hl.code:
                            throw new s.hl(e);
                          case s.cg.code:
                            throw new s.cg(e);
                          case s.uL.code:
                            throw new s.uL(e);
                          case s.G1.code:
                            throw new s.G1(e);
                          case s.jz.code:
                            throw new s.jz(e);
                          case 5e3:
                            throw new s.vx(e);
                          default:
                            if (e instanceof n.C) throw e;
                            throw new s.MI(e);
                        }
                      }
                    },
                    {
                      delay: ({ count: e, error: t }) => {
                        if (t && t instanceof i.Ci) {
                          let e = t?.headers?.get("Retry-After");
                          if (e?.match(/\d/)) return 1e3 * Number.parseInt(e);
                        }
                        return ~~(1 << e) * h;
                      },
                      retryCount: p,
                      shouldRetry: ({ error: e }) => {
                        var t;
                        return "code" in (t = e) && "number" == typeof t.code
                          ? -1 === t.code ||
                              t.code === s.s0.code ||
                              t.code === s.bq.code
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
                { enabled: d, id: m }
              );
            };
          })(d, { methods: t, retryCount: f, retryDelay: h, uid: (0, l.L)() }),
          value: y,
        };
      }
    },
    54335: (e, t, r) => {
      r.d(t, { B: () => n });
      function n(e, { dir: t = "left" } = {}) {
        let r = "string" == typeof e ? e.replace("0x", "") : e,
          i = 0;
        for (let e = 0; e < r.length - 1; e++)
          if ("0" === r["left" === t ? e : r.length - e - 1].toString()) i++;
          else break;
        return ((r = "left" === t ? r.slice(i) : r.slice(0, r.length - i)),
        "string" == typeof e)
          ? (1 === r.length && "right" === t && (r = `${r}0`),
            `0x${r.length % 2 == 1 ? `0${r}` : r}`)
          : r;
      }
    },
    54842: (e, t, r) => {
      r.d(t, { j: () => c });
      var n = r(99702),
        i = r(7441),
        s = r(35109),
        a = r(90557),
        o = r(81379);
      function c(
        e,
        { abi: t, address: r, args: c, docsPath: u, functionName: l, sender: d }
      ) {
        let f =
            e instanceof s.$S
              ? e
              : e instanceof i.C
              ? e.walk((e) => "data" in e) || e.walk()
              : {},
          { code: h, data: p, details: b, message: y, shortMessage: m } = f,
          g =
            e instanceof n.O
              ? new s.rR({ functionName: l })
              : [3, o.bq.code].includes(h) && (p || b || y || m)
              ? new s.M({
                  abi: t,
                  data: "object" == typeof p ? p.data : p,
                  functionName: l,
                  message: f instanceof a.J8 ? b : m ?? y,
                })
              : e;
        return new s.bG(g, {
          abi: t,
          args: c,
          contractAddress: r,
          docsPath: u,
          functionName: l,
          sender: d,
        });
      }
    },
    55259: (e, t, r) => {
      r.d(t, { Hydrate: () => s });
      var n = r(75483),
        i = r(12115);
      function s(e) {
        let {
            children: t,
            config: r,
            initialState: s,
            reconnectOnMount: a = !0,
          } = e,
          { onMount: o } = (function (e, t) {
            let { initialState: r, reconnectOnMount: i } = t;
            return (
              r &&
                !e._internal.store.persist.hasHydrated() &&
                e.setState({
                  ...r,
                  chainId: e.chains.some((e) => e.id === r.chainId)
                    ? r.chainId
                    : e.chains[0].id,
                  connections: i ? r.connections : new Map(),
                  status: i ? "reconnecting" : "disconnected",
                }),
              {
                async onMount() {
                  e._internal.ssr &&
                    (await e._internal.store.persist.rehydrate(),
                    e._internal.mipd &&
                      e._internal.connectors.setState((t) => {
                        let r = new Set();
                        for (let e of t ?? [])
                          if (e.rdns)
                            for (let t of Array.isArray(e.rdns)
                              ? e.rdns
                              : [e.rdns])
                              r.add(t);
                        let n = [];
                        for (let t of e._internal.mipd?.getProviders() ?? []) {
                          if (r.has(t.info.rdns)) continue;
                          let i =
                              e._internal.connectors.providerDetailToConnector(
                                t
                              ),
                            s = e._internal.connectors.setup(i);
                          n.push(s);
                        }
                        return [...t, ...n];
                      })),
                    i
                      ? (0, n.M)(e)
                      : e.storage &&
                        e.setState((e) => ({ ...e, connections: new Map() }));
                },
              }
            );
          })(r, { initialState: s, reconnectOnMount: a });
        r._internal.ssr || o();
        let c = (0, i.useRef)(!0);
        return (
          (0, i.useEffect)(() => {
            if (c.current && r._internal.ssr)
              return (
                o(),
                () => {
                  c.current = !1;
                }
              );
          }, []),
          t
        );
      }
    },
    55394: (e, t, r) => {
      r.d(t, { s: () => l });
      var n = r(14493),
        i = r(13861),
        s = r(67622),
        a = r(41052),
        o = r(7612),
        c = r(34524),
        u = r(3488);
      async function l(
        e,
        {
          address: t,
          blockNumber: r,
          blockTag: l,
          gatewayUrls: d,
          strict: f,
          universalResolverAddress: h,
        }
      ) {
        let p = h;
        if (!p) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          p = (0, i.M)({
            blockNumber: r,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        let b = `${t.toLowerCase().substring(2)}.addr.reverse`;
        try {
          let i = {
              address: p,
              abi: n.oX,
              functionName: "reverse",
              args: [(0, s.nj)((0, o.F)(b))],
              blockNumber: r,
              blockTag: l,
            },
            a = (0, c.T)(e, u.J, "readContract"),
            [f, h] = d ? await a({ ...i, args: [...i.args, d] }) : await a(i);
          if (t.toLowerCase() !== h.toLowerCase()) return null;
          return f;
        } catch (e) {
          if (f) throw e;
          if ((0, a.J)(e, "reverse")) return null;
          throw e;
        }
      }
    },
    57011: (e, t, r) => {
      r.d(t, { l: () => s });
      var n = r(67622),
        i = r(27493);
      async function s(
        e,
        { address: t, blockNumber: r, blockTag: s, storageKeys: a }
      ) {
        let o = void 0 !== r ? (0, n.cK)(r) : void 0;
        var c = await e.request({
          method: "eth_getProof",
          params: [t, a, o || (s ?? "latest")],
        });
        return {
          ...c,
          balance: c.balance ? BigInt(c.balance) : void 0,
          nonce: c.nonce ? (0, i.ME)(c.nonce) : void 0,
          storageProof: c.storageProof
            ? c.storageProof.map((e) => ({ ...e, value: BigInt(e.value) }))
            : void 0,
        };
      }
    },
    57490: (e, t, r) => {
      r.d(t, { a: () => o });
      var n = r(78008),
        i = r(73991),
        s = r(67622),
        a = r(87632);
      async function o(
        e,
        {
          address: t,
          blockHash: r,
          fromBlock: c,
          toBlock: u,
          event: l,
          events: d,
          args: f,
          strict: h,
        } = {}
      ) {
        let p,
          b = d ?? (l ? [l] : void 0),
          y = [];
        b &&
          ((y = [
            b.flatMap((e) =>
              (0, n.R)({ abi: [e], eventName: e.name, args: d ? void 0 : f })
            ),
          ]),
          l && (y = y[0]));
        let m = (
          r
            ? await e.request({
                method: "eth_getLogs",
                params: [{ address: t, topics: y, blockHash: r }],
              })
            : await e.request({
                method: "eth_getLogs",
                params: [
                  {
                    address: t,
                    topics: y,
                    fromBlock: "bigint" == typeof c ? (0, s.cK)(c) : c,
                    toBlock: "bigint" == typeof u ? (0, s.cK)(u) : u,
                  },
                ],
              })
        ).map((e) => (0, a.e)(e));
        return b ? (0, i.p)({ abi: b, args: f, logs: m, strict: h ?? !1 }) : m;
      }
    },
    57948: (e, t, r) => {
      r.d(t, { k: () => i });
      var n = r(52020),
        i = class {
          #v;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout(),
              (0, n.gn)(this.gcTime) &&
                (this.#v = setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (n.S$ ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            this.#v && (clearTimeout(this.#v), (this.#v = void 0));
          }
        };
    },
    58404: (e, t, r) => {
      r.d(t, { usePublicClient: () => tC });
      var n = r(9775),
        i = r(75794),
        s = r(55394),
        a = r(18619),
        o = r(65830),
        c = r(81946),
        u = r(19405),
        l = r(67622),
        d = r(23360),
        f = r(7671),
        h = r(76743),
        p = r(65358);
      async function b(e, t) {
        let {
            account: r = e.account,
            blockNumber: n,
            blockTag: i = "latest",
            blobs: s,
            data: a,
            gas: o,
            gasPrice: c,
            maxFeePerBlobGas: b,
            maxFeePerGas: y,
            maxPriorityFeePerGas: m,
            to: g,
            value: v,
            ...w
          } = t,
          x = r ? (0, u.J)(r) : void 0;
        try {
          (0, p.c)(t);
          let r = "bigint" == typeof n ? (0, l.cK)(n) : void 0,
            u = e.chain?.formatters?.transactionRequest?.format,
            d = (u || h.Bv)({
              ...(0, f.o)(w, { format: u }),
              from: x?.address,
              blobs: s,
              data: a,
              gas: o,
              gasPrice: c,
              maxFeePerBlobGas: b,
              maxFeePerGas: y,
              maxPriorityFeePerGas: m,
              to: g,
              value: v,
            }),
            E = await e.request({
              method: "eth_createAccessList",
              params: [d, r || i],
            });
          return { accessList: E.accessList, gasUsed: BigInt(E.gasUsed) };
        } catch (r) {
          throw (0, d.d)(r, { ...t, account: x, chain: e.chain });
        }
      }
      var y = r(7739);
      async function m(e) {
        let t = (0, y.g)(e, { method: "eth_newBlockFilter" }),
          r = await e.request({ method: "eth_newBlockFilter" });
        return { id: r, request: t(r), type: "block" };
      }
      var g = r(86850),
        v = r(78008);
      async function w(
        e,
        {
          address: t,
          args: r,
          event: n,
          events: i,
          fromBlock: s,
          strict: a,
          toBlock: o,
        } = {}
      ) {
        let c = i ?? (n ? [n] : void 0),
          u = (0, y.g)(e, { method: "eth_newFilter" }),
          d = [];
        c &&
          ((d = [
            c.flatMap((e) =>
              (0, v.R)({ abi: [e], eventName: e.name, args: r })
            ),
          ]),
          n && (d = d[0]));
        let f = await e.request({
          method: "eth_newFilter",
          params: [
            {
              address: t,
              fromBlock: "bigint" == typeof s ? (0, l.cK)(s) : s,
              toBlock: "bigint" == typeof o ? (0, l.cK)(o) : o,
              ...(d.length ? { topics: d } : {}),
            },
          ],
        });
        return {
          abi: c,
          args: r,
          eventName: n ? n.name : void 0,
          fromBlock: s,
          id: f,
          request: u(f),
          strict: !!a,
          toBlock: o,
          type: "event",
        };
      }
      var x = r(27049),
        E = r(60367),
        P = r(54842),
        C = r(34524),
        I = r(16712);
      async function O(e, t) {
        let {
            abi: r,
            address: n,
            args: i,
            functionName: s,
            dataSuffix: a,
            ...o
          } = t,
          c = (0, E.p)({ abi: r, args: i, functionName: s });
        try {
          return await (0, C.T)(
            e,
            I.Q,
            "estimateGas"
          )({ data: `${c}${a ? a.replace("0x", "") : ""}`, to: n, ...o });
        } catch (t) {
          let e = o.account ? (0, u.J)(o.account) : void 0;
          throw (0, P.j)(t, {
            abi: r,
            address: n,
            args: i,
            docsPath: "/docs/contract/estimateContractGas",
            functionName: s,
            sender: e?.address,
          });
        }
      }
      var A = r(24573),
        $ = r(76654),
        B = r(59742);
      async function S(e) {
        return BigInt(await e.request({ method: "eth_blobBaseFee" }));
      }
      var M = r(23335),
        R = r(94181),
        T = r(60004),
        j = r(926),
        k = r(49539),
        F = r(1777),
        N = r(7441);
      class z extends N.C {
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
      var U = r(3488);
      async function q(e, t) {
        let { address: r, factory: n, factoryData: i } = t;
        try {
          let [t, s, a, o, c, u, l] = await (0, C.T)(
            e,
            U.J,
            "readContract"
          )({
            abi: L,
            address: r,
            functionName: "eip712Domain",
            factory: n,
            factoryData: i,
          });
          return {
            domain: {
              name: s,
              version: a,
              chainId: Number(o),
              verifyingContract: c,
              salt: u,
            },
            extensions: l,
            fields: t,
          };
        } catch (e) {
          if (
            "ContractFunctionExecutionError" === e.name &&
            "ContractFunctionZeroDataError" === e.cause.name
          )
            throw new z({ address: r });
          throw e;
        }
      }
      let L = [
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
      var _ = r(39050),
        D = r(17249),
        G = r(73991),
        H = r(87632);
      async function K(e, { filter: t }) {
        let r = t.strict ?? !1,
          n = (
            await t.request({ method: "eth_getFilterLogs", params: [t.id] })
          ).map((e) => (0, H.e)(e));
        return t.abi ? (0, G.p)({ abi: t.abi, logs: n, strict: r }) : n;
      }
      var W = r(39112),
        Q = r(57490),
        V = r(57011),
        Z = r(75830),
        J = r(30106),
        Y = r(19192),
        X = r(13649),
        ee = r(13494),
        et = r(6083),
        er = r(35791),
        en = r(99702),
        ei = r(35109),
        es = r(42264),
        ea = r(69330),
        eo = r(35020),
        ec = r(17327),
        eu = r(25507);
      async function el(e, t) {
        let {
          blockNumber: r,
          blockTag: n = "latest",
          blocks: i,
          returnFullTransactions: s,
          traceTransfers: a,
          validation: o,
        } = t;
        try {
          let t = [];
          for (let e of i) {
            let r = e.blockOverrides ? er.J(e.blockOverrides) : void 0,
              n = e.calls.map((e) => {
                let t = e.account ? (0, u.J)(e.account) : void 0,
                  r = {
                    ...e,
                    data: e.abi ? (0, E.p)(e) : e.data,
                    from: e.from ?? t?.address,
                  };
                return (0, p.c)(r), (0, h.Bv)(r);
              }),
              i = e.stateOverrides ? (0, eu.yH)(e.stateOverrides) : void 0;
            t.push({ blockOverrides: r, calls: n, stateOverrides: i });
          }
          let c = "bigint" == typeof r ? (0, l.cK)(r) : void 0;
          return (
            await e.request({
              method: "eth_simulateV1",
              params: [
                {
                  blockStateCalls: t,
                  returnFullTransactions: s,
                  traceTransfers: a,
                  validation: o,
                },
                c || n,
              ],
            })
          ).map((e, t) => ({
            ...(0, ec.$)(e),
            calls: e.calls.map((e, r) => {
              let { abi: n, args: s, functionName: a, to: o } = i[t].calls[r],
                c = e.error?.data ?? e.returnData,
                u = BigInt(e.gasUsed),
                l = e.logs?.map((e) => (0, H.e)(e)),
                d = "0x1" === e.status ? "success" : "failure",
                f =
                  n && "success" === d && "0x" !== c
                    ? (0, ea.e)({ abi: n, data: c, functionName: a })
                    : null,
                h = (() => {
                  let t;
                  if (
                    "success" !== d &&
                    (e.error?.data === "0x"
                      ? (t = new en.O())
                      : e.error && (t = new ei.$S(e.error)),
                    t)
                  )
                    return (0, P.j)(t, {
                      abi: n ?? [],
                      address: o,
                      args: s,
                      functionName: a ?? "<unknown>",
                    });
                })();
              return {
                data: c,
                gasUsed: u,
                logs: l,
                status: d,
                ...("success" === d ? { result: f } : { error: h }),
              };
            }),
          }));
        } catch (t) {
          let e = (0, eo.l)(t, {});
          if (e instanceof es.RM) throw t;
          throw e;
        }
      }
      var ed = r(84701),
        ef = r(17130),
        eh = r(38958),
        ep = r(27442),
        eb = r(16652),
        ey = r(28452),
        em = r(8512),
        eg = r(86205),
        ev = r(97486);
      let ew = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function ex(e) {
        return e >= ew.zero && e <= ew.nine
          ? e - ew.zero
          : e >= ew.A && e <= ew.F
          ? e - (ew.A - 10)
          : e >= ew.a && e <= ew.f
          ? e - (ew.a - 10)
          : void 0;
      }
      var eE = r(93587);
      let eP = new TextEncoder();
      ey.C, ey.C;
      class eC extends ey.C {
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
      ey.C;
      class eI extends ey.C {
        constructor({ size: e, targetSize: t, type: r }) {
          super(
            `${r.charAt(0).toUpperCase()}${r
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
      function eO(e, t = {}) {
        var r;
        let { as: n = "string" == typeof e ? "Hex" : "Bytes" } = t,
          i = (0, em.lY)(
            e instanceof Uint8Array
              ? e
              : "string" == typeof e
              ? (function (e, t = {}) {
                  let { size: r } = t,
                    n = e;
                  r && (eE.Sl(e, r), (n = eg.M7(e, r)));
                  let i = n.slice(2);
                  i.length % 2 && (i = `0${i}`);
                  let s = i.length / 2,
                    a = new Uint8Array(s);
                  for (let e = 0, t = 0; e < s; e++) {
                    let r = ex(i.charCodeAt(t++)),
                      n = ex(i.charCodeAt(t++));
                    if (void 0 === r || void 0 === n)
                      throw new ey.C(
                        `Invalid byte sequence ("${i[t - 2]}${
                          i[t - 1]
                        }" in "${i}").`
                      );
                    a[e] = 16 * r + n;
                  }
                  return a;
                })(e)
              : (r = e) instanceof Uint8Array
              ? r
              : new Uint8Array(r)
          );
        return "Bytes" === n ? i : eg.uK(i);
      }
      class eA extends Map {
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
      let e$ = { checksum: new eA(8192) }.checksum,
        eB = /^0x[a-fA-F0-9]{40}$/;
      function eS(e, t = {}) {
        let { strict: r = !0 } = t;
        if (!eB.test(e)) throw new eR({ address: e, cause: new eT() });
        if (r) {
          if (e.toLowerCase() === e) return;
          if (
            (function (e) {
              if (e$.has(e)) return e$.get(e);
              eS(e, { strict: !1 });
              let t = e.substring(2).toLowerCase(),
                r = eO(
                  (function (e, t = {}) {
                    let { size: r } = t,
                      n = eP.encode(e);
                    if ("number" == typeof r) {
                      var i;
                      if (n.length > r)
                        throw new eC({ givenSize: n.length, maxSize: r });
                      return (
                        (i = n),
                        (function (e, t = {}) {
                          let { dir: r, size: n = 32 } = t;
                          if (0 === n) return e;
                          if (e.length > n)
                            throw new eI({
                              size: e.length,
                              targetSize: n,
                              type: "Bytes",
                            });
                          let i = new Uint8Array(n);
                          for (let t = 0; t < n; t++) {
                            let s = "right" === r;
                            i[s ? t : n - t - 1] = e[s ? t : e.length - t - 1];
                          }
                          return i;
                        })(i, { dir: "right", size: r })
                      );
                    }
                    return n;
                  })(t),
                  { as: "Bytes" }
                ),
                n = t.split("");
              for (let e = 0; e < 40; e += 2)
                r[e >> 1] >> 4 >= 8 && n[e] && (n[e] = n[e].toUpperCase()),
                  (15 & r[e >> 1]) >= 8 &&
                    n[e + 1] &&
                    (n[e + 1] = n[e + 1].toUpperCase());
              let i = `0x${n.join("")}`;
              return e$.set(e, i), i;
            })(e) !== e
          )
            throw new eR({ address: e, cause: new ej() });
        }
      }
      function eM(e, t = {}) {
        let { strict: r = !0 } = t ?? {};
        try {
          return eS(e, { strict: r }), !0;
        } catch {
          return !1;
        }
      }
      class eR extends ey.C {
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
      class eT extends ey.C {
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
      class ej extends ey.C {
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
      function ek(e) {
        let t = !0,
          r = "",
          n = 0,
          i = "",
          s = !1;
        for (let a = 0; a < e.length; a++) {
          let o = e[a];
          if (
            (["(", ")", ","].includes(o) && (t = !0),
            "(" === o && n++,
            ")" === o && n--,
            t)
          ) {
            if (0 === n) {
              if (" " === o && ["event", "function", "error", ""].includes(i))
                i = "";
              else if (((i += o), ")" === o)) {
                s = !0;
                break;
              }
              continue;
            }
            if (" " === o) {
              "," !== e[a - 1] &&
                "," !== r &&
                ",(" !== r &&
                ((r = ""), (t = !1));
              continue;
            }
            (i += o), (r += o);
          }
        }
        if (!s) throw new ey.C("Unable to normalize signature.");
        return i;
      }
      function eF(e, t = {}) {
        let { prepare: r = !0 } = t,
          n =
            Array.isArray(e) || "string" == typeof e
              ? (function (e) {
                  let t;
                  if ("string" == typeof e) t = (0, ep.uT)(e);
                  else {
                    let r = (0, eh.e)(e),
                      n = e.length;
                    for (let i = 0; i < n; i++) {
                      let n = e[i];
                      if (!(0, ef.WL)(n)) {
                        t = (0, ep.uT)(n, r);
                        break;
                      }
                    }
                  }
                  if (!t) throw new ed.xo({ signature: e });
                  return t;
                })(e)
              : e;
        return { ...n, ...(r ? { hash: ez(n) } : {}) };
      }
      function eN(e) {
        return eg.di(ez(e), 0, 4);
      }
      function ez(e) {
        return "string" != typeof e && "hash" in e && e.hash
          ? e.hash
          : eO(eg.sH(ek("string" == typeof e ? e : eb.B(e))));
      }
      class eU extends ey.C {
        constructor(e, t) {
          super("Found ambiguous types in overloaded ABI Items.", {
            metaMessages: [
              `\`${e.type}\` in \`${ek(eb.B(e.abiItem))}\`, and`,
              `\`${t.type}\` in \`${ek(eb.B(t.abiItem))}\``,
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
      class eq extends ey.C {
        constructor({ name: e, data: t, type: r = "item" }) {
          super(
            `ABI ${r}${
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
      ey.C;
      var eL = r(45446);
      let e_ = /^(.*)\[([0-9]*)\]$/,
        eD = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        eG =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
      function eH(e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let { dynamic: n, encoded: i } = e[r];
          n ? (t += 32) : (t += eg.Ej(i));
        }
        let r = [],
          n = [],
          i = 0;
        for (let s = 0; s < e.length; s++) {
          let { dynamic: a, encoded: o } = e[s];
          a
            ? (r.push(eg.oB(t + i, { size: 32 })), n.push(o), (i += eg.Ej(o)))
            : r.push(o);
        }
        return eg.xW(...r, ...n);
      }
      function eK(e) {
        let t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
      function eW(e) {
        let { type: t } = e;
        if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
        if ("tuple" === t) return e.components?.some(eW);
        let r = eK(e.type);
        return !!(r && eW({ ...e, type: r[1] }));
      }
      function eQ(e, t, r) {
        let { checksumAddress: n = !1 } = r ?? {};
        if (e.length !== t.length)
          throw new eY({ expectedLength: e.length, givenLength: t.length });
        let i = eH(
          (function ({ checksumAddress: e, parameters: t, values: r }) {
            let n = [];
            for (let i = 0; i < t.length; i++)
              n.push(
                (function e({
                  checksumAddress: t = !1,
                  parameter: r,
                  value: n,
                }) {
                  let i = eK(r.type);
                  if (i) {
                    let [s, a] = i;
                    return (function (t, r) {
                      let { checksumAddress: n, length: i, parameter: s } = r,
                        a = null === i;
                      if (!Array.isArray(t)) throw new eX(t);
                      if (!a && t.length !== i)
                        throw new eZ({
                          expectedLength: i,
                          givenLength: t.length,
                          type: `${s.type}[${i}]`,
                        });
                      let o = !1,
                        c = [];
                      for (let r = 0; r < t.length; r++) {
                        let i = e({
                          checksumAddress: n,
                          parameter: s,
                          value: t[r],
                        });
                        i.dynamic && (o = !0), c.push(i);
                      }
                      if (a || o) {
                        let e = eH(c);
                        if (a) {
                          let t = eg.oB(c.length, { size: 32 });
                          return {
                            dynamic: !0,
                            encoded: c.length > 0 ? eg.xW(t, e) : t,
                          };
                        }
                        if (o) return { dynamic: !0, encoded: e };
                      }
                      return {
                        dynamic: !1,
                        encoded: eg.xW(...c.map(({ encoded: e }) => e)),
                      };
                    })(n, {
                      checksumAddress: t,
                      length: s,
                      parameter: { ...r, type: a },
                    });
                  }
                  if ("tuple" === r.type)
                    return (function (t, r) {
                      let { checksumAddress: n, parameter: i } = r,
                        s = !1,
                        a = [];
                      for (let r = 0; r < i.components.length; r++) {
                        let o = i.components[r],
                          c = Array.isArray(t) ? r : o.name,
                          u = e({
                            checksumAddress: n,
                            parameter: o,
                            value: t[c],
                          });
                        a.push(u), u.dynamic && (s = !0);
                      }
                      return {
                        dynamic: s,
                        encoded: s
                          ? eH(a)
                          : eg.xW(...a.map(({ encoded: e }) => e)),
                      };
                    })(n, { checksumAddress: t, parameter: r });
                  if ("address" === r.type) {
                    var s = n,
                      a = { checksum: t };
                    let { checksum: e = !1 } = a;
                    return (
                      eS(s, { strict: e }),
                      { dynamic: !1, encoded: eg.Ho(s.toLowerCase()) }
                    );
                  }
                  if ("bool" === r.type) {
                    var o = n;
                    if ("boolean" != typeof o)
                      throw new ey.C(
                        `Invalid boolean value: "${o}" (type: ${typeof o}). Expected: \`true\` or \`false\`.`
                      );
                    return { dynamic: !1, encoded: eg.Ho(eg.xb(o)) };
                  }
                  if (r.type.startsWith("uint") || r.type.startsWith("int")) {
                    let e = r.type.startsWith("int"),
                      [, , t = "256"] = eG.exec(r.type) ?? [];
                    return (function (e, { signed: t, size: r }) {
                      if ("number" == typeof r) {
                        let n = 2n ** (BigInt(r) - (t ? 1n : 0n)) - 1n,
                          i = t ? -n - 1n : 0n;
                        if (e > n || e < i)
                          throw new eg.Ty({
                            max: n.toString(),
                            min: i.toString(),
                            signed: t,
                            size: r / 8,
                            value: e.toString(),
                          });
                      }
                      return {
                        dynamic: !1,
                        encoded: eg.oB(e, { size: 32, signed: t }),
                      };
                    })(n, { signed: e, size: Number(t) });
                  }
                  if (r.type.startsWith("bytes"))
                    return (function (e, { type: t }) {
                      let [, r] = t.split("bytes"),
                        n = eg.Ej(e);
                      if (!r) {
                        let t = e;
                        return (
                          n % 32 != 0 &&
                            (t = eg.M7(
                              t,
                              32 * Math.ceil((e.length - 2) / 2 / 32)
                            )),
                          {
                            dynamic: !0,
                            encoded: eg.xW(eg.Ho(eg.oB(n, { size: 32 })), t),
                          }
                        );
                      }
                      if (n !== Number.parseInt(r))
                        throw new eJ({
                          expectedSize: Number.parseInt(r),
                          value: e,
                        });
                      return { dynamic: !1, encoded: eg.M7(e) };
                    })(n, { type: r.type });
                  if ("string" === r.type) {
                    var c = n;
                    let e = eg.sH(c),
                      t = Math.ceil(eg.Ej(e) / 32),
                      r = [];
                    for (let n = 0; n < t; n++)
                      r.push(eg.M7(eg.di(e, 32 * n, (n + 1) * 32)));
                    return {
                      dynamic: !0,
                      encoded: eg.xW(
                        eg.M7(eg.oB(eg.Ej(e), { size: 32 })),
                        ...r
                      ),
                    };
                  }
                  throw new e0(r.type);
                })({ checksumAddress: e, parameter: t[i], value: r[i] })
              );
            return n;
          })({ checksumAddress: n, parameters: e, values: t })
        );
        return 0 === i.length ? "0x" : i;
      }
      function eV(e, t) {
        if (e.length !== t.length)
          throw new eY({ expectedLength: e.length, givenLength: t.length });
        let r = [];
        for (let n = 0; n < e.length; n++) {
          let i = e[n],
            s = t[n];
          r.push(eV.encode(i, s));
        }
        return eg.xW(...r);
      }
      ((eV || (eV = {})).encode = function e(t, r, n = !1) {
        if ("address" === t) return eS(r), eg.Ho(r.toLowerCase(), 32 * !!n);
        if ("string" === t) return eg.sH(r);
        if ("bytes" === t) return r;
        if ("bool" === t) return eg.Ho(eg.xb(r), n ? 32 : 1);
        let i = t.match(eG);
        if (i) {
          let [e, t, s = "256"] = i,
            a = Number.parseInt(s) / 8;
          return eg.oB(r, { size: n ? 32 : a, signed: "int" === t });
        }
        let s = t.match(eD);
        if (s) {
          let [e, t] = s;
          if (Number.parseInt(t) !== (r.length - 2) / 2)
            throw new eJ({ expectedSize: Number.parseInt(t), value: r });
          return eg.M7(r, 32 * !!n);
        }
        let a = t.match(e_);
        if (a && Array.isArray(r)) {
          let [t, n] = a,
            i = [];
          for (let t = 0; t < r.length; t++) i.push(e(n, r[t], !0));
          return 0 === i.length ? "0x" : eg.xW(...i);
        }
        throw new e0(t);
      }),
        ey.C,
        ey.C;
      class eZ extends ey.C {
        constructor({ expectedLength: e, givenLength: t, type: r }) {
          super(
            `Array length mismatch for type \`${r}\`. Expected: \`${e}\`. Given: \`${t}\`.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiParameters.ArrayLengthMismatchError",
            });
        }
      }
      class eJ extends ey.C {
        constructor({ expectedSize: e, value: t }) {
          super(
            `Size of bytes "${t}" (bytes${eg.Ej(
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
      class eY extends ey.C {
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
      class eX extends ey.C {
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
      class e0 extends ey.C {
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
      function e1(e, t = {}) {
        return eF(e, t);
      }
      let e2 = "0x0000000000000000000000000000000000000000";
      var e6 = r(15313),
        e5 = r(27493);
      async function e3(e, t) {
        let {
            blockNumber: r,
            blockTag: n,
            calls: i,
            stateOverrides: s,
            traceAssetChanges: a,
            traceTransfers: o,
            validation: c,
          } = t,
          l = t.account ? (0, u.J)(t.account) : void 0;
        if (a && !l)
          throw new N.C(
            "`account` is required when `traceAssetChanges` is true"
          );
        let d = l
            ? (function (e, t) {
                let { bytecode: r, args: n } = t;
                return eg.xW(
                  r,
                  e.inputs?.length && n?.length ? eQ(e.inputs, n) : "0x"
                );
              })(eF("constructor(bytes, bytes)"), {
                bytecode: e6.LX,
                args: [
                  "0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033",
                  (function (e, ...t) {
                    let { overloads: r } = e,
                      n = r
                        ? (function (e, t, r) {
                            let n = (function (e, t, r) {
                              let n,
                                { args: i = [], prepare: s = !0 } = r ?? {},
                                a = eg.tf(t, { strict: !1 }),
                                o = e.filter((e) =>
                                  a
                                    ? "function" === e.type ||
                                      "error" === e.type
                                      ? eN(e) === eg.di(t, 0, 4)
                                      : "event" === e.type && ez(e) === t
                                    : "name" in e && e.name === t
                                );
                              if (0 === o.length) throw new eq({ name: t });
                              if (1 === o.length)
                                return {
                                  ...o[0],
                                  ...(s ? { hash: ez(o[0]) } : {}),
                                };
                              for (let e of o) {
                                if ("inputs" in e) {
                                  if (!i || 0 === i.length) {
                                    if (!e.inputs || 0 === e.inputs.length)
                                      return {
                                        ...e,
                                        ...(s ? { hash: ez(e) } : {}),
                                      };
                                    continue;
                                  }
                                  if (
                                    e.inputs &&
                                    0 !== e.inputs.length &&
                                    e.inputs.length === i.length &&
                                    i.every((t, r) => {
                                      let n = "inputs" in e && e.inputs[r];
                                      return (
                                        !!n &&
                                        (function e(t, r) {
                                          let n = typeof t,
                                            i = r.type;
                                          switch (i) {
                                            case "address":
                                              return eM(t, { strict: !1 });
                                            case "bool":
                                              return "boolean" === n;
                                            case "function":
                                            case "string":
                                              return "string" === n;
                                            default:
                                              if (
                                                "tuple" === i &&
                                                "components" in r
                                              )
                                                return Object.values(
                                                  r.components
                                                ).every((r, n) =>
                                                  e(Object.values(t)[n], r)
                                                );
                                              if (
                                                /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                                                  i
                                                )
                                              )
                                                return (
                                                  "number" === n ||
                                                  "bigint" === n
                                                );
                                              if (
                                                /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(
                                                  i
                                                )
                                              )
                                                return (
                                                  "string" === n ||
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
                                                      ...r,
                                                      type: i.replace(
                                                        /(\[[0-9]{0,}\])$/,
                                                        ""
                                                      ),
                                                    })
                                                  )
                                                );
                                              return !1;
                                          }
                                        })(t, n)
                                      );
                                    })
                                  ) {
                                    if (n && "inputs" in n && n.inputs) {
                                      let t = (function e(t, r, n) {
                                        for (let i in t) {
                                          let s = t[i],
                                            a = r[i];
                                          if (
                                            "tuple" === s.type &&
                                            "tuple" === a.type &&
                                            "components" in s &&
                                            "components" in a
                                          )
                                            return e(
                                              s.components,
                                              a.components,
                                              n[i]
                                            );
                                          let o = [s.type, a.type];
                                          if (
                                            (o.includes("address") &&
                                              o.includes("bytes20")) ||
                                            (((o.includes("address") &&
                                              o.includes("string")) ||
                                              (o.includes("address") &&
                                                o.includes("bytes"))) &&
                                              eM(n[i], { strict: !1 }))
                                          )
                                            return o;
                                        }
                                      })(e.inputs, n.inputs, i);
                                      if (t)
                                        throw new eU(
                                          { abiItem: e, type: t[0] },
                                          { abiItem: n, type: t[1] }
                                        );
                                    }
                                    n = e;
                                  }
                                }
                              }
                              let c = (() => {
                                if (n) return n;
                                let [e, ...t] = o;
                                return { ...e, overloads: t };
                              })();
                              if (!c) throw new eq({ name: t });
                              return { ...c, ...(s ? { hash: ez(c) } : {}) };
                            })(e, t, r);
                            if ("function" !== n.type)
                              throw new eq({ name: t, type: "function" });
                            return n;
                          })([e, ...r], e.name, { args: t[0] })
                        : e,
                      i = eN(n),
                      s = t.length > 0 ? eQ(n.inputs, t[0]) : void 0;
                    return s ? eg.xW(i, s) : i;
                  })(e1("function getBalance(address)"), [l.address]),
                ],
              })
            : void 0,
          f = a
            ? await Promise.all(
                t.calls.map(async (t) => {
                  if (!t.data && !t.abi) return;
                  let { accessList: r } = await b(e, {
                    account: l.address,
                    ...t,
                    data: t.abi ? (0, E.p)(t) : t.data,
                  });
                  return r.map(({ address: e, storageKeys: t }) =>
                    t.length > 0 ? e : null
                  );
                })
              ).then((e) => e.flat().filter(Boolean))
            : [],
          h = s?.map((e) =>
            e.address === l?.address ? { ...e, nonce: 0 } : e
          ),
          p = await el(e, {
            blockNumber: r,
            blockTag: n,
            blocks: [
              ...(a
                ? [
                    { calls: [{ data: d }], stateOverrides: s },
                    {
                      calls: f.map((e, t) => ({
                        abi: [
                          e1("function balanceOf(address) returns (uint256)"),
                        ],
                        functionName: "balanceOf",
                        args: [l.address],
                        to: e,
                        from: e2,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: e2, nonce: 0 }],
                    },
                  ]
                : []),
              {
                calls: [...i, {}].map((e, t) => ({
                  ...e,
                  from: l?.address,
                  nonce: t,
                })),
                stateOverrides: h,
              },
              ...(a
                ? [
                    { calls: [{ data: d }] },
                    {
                      calls: f.map((e, t) => ({
                        abi: [
                          e1("function balanceOf(address) returns (uint256)"),
                        ],
                        functionName: "balanceOf",
                        args: [l.address],
                        to: e,
                        from: e2,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: e2, nonce: 0 }],
                    },
                    {
                      calls: f.map((e, t) => ({
                        to: e,
                        abi: [e1("function decimals() returns (uint256)")],
                        functionName: "decimals",
                        from: e2,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: e2, nonce: 0 }],
                    },
                    {
                      calls: f.map((e, t) => ({
                        to: e,
                        abi: [
                          e1("function tokenURI(uint256) returns (string)"),
                        ],
                        functionName: "tokenURI",
                        args: [0n],
                        from: e2,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: e2, nonce: 0 }],
                    },
                    {
                      calls: f.map((e, t) => ({
                        to: e,
                        abi: [e1("function symbol() returns (string)")],
                        functionName: "symbol",
                        from: e2,
                        nonce: t,
                      })),
                      stateOverrides: [{ address: e2, nonce: 0 }],
                    },
                  ]
                : []),
            ],
            traceTransfers: o,
            validation: c,
          }),
          y = a ? p[2] : p[0],
          [m, g, , v, w, x, P, C] = a ? p : [],
          { calls: I, ...O } = y,
          A = I.slice(0, -1) ?? [],
          $ = [...(m?.calls ?? []), ...(g?.calls ?? [])].map((e) =>
            "success" === e.status ? (0, e5.uU)(e.data) : null
          ),
          B = [...(v?.calls ?? []), ...(w?.calls ?? [])].map((e) =>
            "success" === e.status ? (0, e5.uU)(e.data) : null
          ),
          S = (x?.calls ?? []).map((e) =>
            "success" === e.status ? e.result : null
          ),
          M = (C?.calls ?? []).map((e) =>
            "success" === e.status ? e.result : null
          ),
          R = (P?.calls ?? []).map((e) =>
            "success" === e.status ? e.result : null
          ),
          T = [];
        for (let [e, t] of B.entries()) {
          let r = $[e];
          if ("bigint" != typeof t || "bigint" != typeof r) continue;
          let n = S[e - 1],
            i = M[e - 1],
            s = R[e - 1],
            a =
              0 === e
                ? {
                    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                    decimals: 18,
                    symbol: "ETH",
                  }
                : {
                    address: f[e - 1],
                    decimals: s || n ? Number(n ?? 1) : void 0,
                    symbol: i ?? void 0,
                  };
          T.some((e) => e.token.address === a.address) ||
            T.push({ token: a, value: { pre: r, post: t, diff: t - r } });
        }
        return { assetChanges: T, block: O, results: A };
      }
      var e8 = r(58950),
        e4 = r(48354),
        e9 = r(20578),
        e7 = r(83185),
        te = r(84014),
        tt = r(85543),
        tr = r(73479),
        tn = r(22653),
        ti = r(72342),
        ts = r(86435),
        ta = r(79183),
        to = r(81379),
        tc = r(79225),
        tu = r(50541),
        tl = r(59243);
      let td =
          /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
        tf =
          /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
      var th = r(81757),
        tp = r(17255),
        tb = r(76365);
      async function ty(e, t) {
        let {
            address: r,
            domain: n,
            message: i,
            nonce: s,
            scheme: a,
            signature: o,
            time: c = new Date(),
            ...u
          } = t,
          l = (function (e) {
            let { scheme: t, statement: r, ...n } = e.match(td)?.groups ?? {},
              {
                chainId: i,
                expirationTime: s,
                issuedAt: a,
                notBefore: o,
                requestId: c,
                ...u
              } = e.match(tf)?.groups ?? {},
              l = e.split("Resources:")[1]?.split("\n- ").slice(1);
            return {
              ...n,
              ...u,
              ...(i ? { chainId: Number(i) } : {}),
              ...(s ? { expirationTime: new Date(s) } : {}),
              ...(a ? { issuedAt: new Date(a) } : {}),
              ...(o ? { notBefore: new Date(o) } : {}),
              ...(c ? { requestId: c } : {}),
              ...(l ? { resources: l } : {}),
              ...(t ? { scheme: t } : {}),
              ...(r ? { statement: r } : {}),
            };
          })(i);
        if (
          !l.address ||
          !(function (e) {
            let {
              address: t,
              domain: r,
              message: n,
              nonce: i,
              scheme: s,
              time: a = new Date(),
            } = e;
            if (
              (r && n.domain !== r) ||
              (i && n.nonce !== i) ||
              (s && n.scheme !== s) ||
              (n.expirationTime && a >= n.expirationTime) ||
              (n.notBefore && a < n.notBefore)
            )
              return !1;
            try {
              if (
                !n.address ||
                !(0, th.P)(n.address, { strict: !1 }) ||
                (t && !(0, tp.h)(n.address, t))
              )
                return !1;
            } catch {
              return !1;
            }
            return !0;
          })({
            address: r,
            domain: n,
            message: l,
            nonce: s,
            scheme: a,
            time: c,
          })
        )
          return !1;
        let d = (0, tl.A)(i);
        return (0, tb.K)(e, {
          address: l.address,
          hash: d,
          signature: o,
          ...u,
        });
      }
      var tm = r(73979),
        tg = r(2806);
      function tv(e) {
        return {
          call: (t) => (0, c.T)(e, t),
          createAccessList: (t) => b(e, t),
          createBlockFilter: () => m(e),
          createContractEventFilter: (t) => (0, g.X)(e, t),
          createEventFilter: (t) => w(e, t),
          createPendingTransactionFilter: () => (0, x.O)(e),
          estimateContractGas: (t) => O(e, t),
          estimateGas: (t) => (0, I.Q)(e, t),
          getBalance: (t) => (0, B.r)(e, t),
          getBlobBaseFee: () => S(e),
          getBlock: (t) => (0, M.g)(e, t),
          getBlockNumber: (t) => (0, R.G)(e, t),
          getBlockTransactionCount: (t) => (0, T.L)(e, t),
          getBytecode: (t) => (0, k.Q)(e, t),
          getChainId: () => (0, j.T)(e),
          getCode: (t) => (0, k.Q)(e, t),
          getContractEvents: (t) => (0, F.u)(e, t),
          getEip712Domain: (t) => q(e, t),
          getEnsAddress: (t) => (0, n.B)(e, t),
          getEnsAvatar: (t) => (0, i.i)(e, t),
          getEnsName: (t) => (0, s.s)(e, t),
          getEnsResolver: (t) => (0, a.D)(e, t),
          getEnsText: (t) => (0, o.m)(e, t),
          getFeeHistory: (t) => (0, _.T)(e, t),
          estimateFeesPerGas: (t) => (0, A._)(e, t),
          getFilterChanges: (t) => (0, D.I)(e, t),
          getFilterLogs: (t) => K(e, t),
          getGasPrice: () => (0, W.L)(e),
          getLogs: (t) => (0, Q.a)(e, t),
          getProof: (t) => (0, V.l)(e, t),
          estimateMaxPriorityFeePerGas: (t) => (0, $.b)(e, t),
          getStorageAt: (t) => (0, Z.P)(e, t),
          getTransaction: (t) => (0, J.x)(e, t),
          getTransactionConfirmations: (t) => (0, Y.d)(e, t),
          getTransactionCount: (t) => (0, X.y)(e, t),
          getTransactionReceipt: (t) => (0, ee.h)(e, t),
          multicall: (t) => (0, et.C)(e, t),
          prepareTransactionRequest: (t) => (0, tm.ft)(e, t),
          readContract: (t) => (0, U.J)(e, t),
          sendRawTransaction: (t) => (0, tg.L)(e, t),
          simulate: (t) => el(e, t),
          simulateBlocks: (t) => el(e, t),
          simulateCalls: (t) => e3(e, t),
          simulateContract: (t) => (0, e8.v)(e, t),
          verifyMessage: (t) => (0, e9.l)(e, t),
          verifySiweMessage: (t) => ty(e, t),
          verifyTypedData: (t) => (0, e7.w)(e, t),
          uninstallFilter: (t) => (0, e4.Z)(e, t),
          waitForTransactionReceipt: (t) => (0, te.n)(e, t),
          watchBlocks: (t) => (0, tr.O)(e, t),
          watchBlockNumber: (t) => (0, tt.q)(e, t),
          watchContractEvent: (t) => (0, tn.q)(e, t),
          watchEvent: (t) =>
            (function (
              e,
              {
                address: t,
                args: r,
                batch: n = !0,
                event: i,
                events: s,
                fromBlock: a,
                onError: o,
                onLogs: c,
                poll: u,
                pollingInterval: l = e.pollingInterval,
                strict: d,
              }
            ) {
              let f,
                h,
                p =
                  void 0 !== u
                    ? u
                    : "bigint" == typeof a ||
                      ("webSocket" !== e.transport.type &&
                        ("fallback" !== e.transport.type ||
                          "webSocket" !==
                            e.transport.transports[0].config.type)),
                b = d ?? !1;
              return p
                ? (() => {
                    let u = (0, ta.A)(["watchEvent", t, r, n, e.uid, i, l, a]);
                    return (0, ti.lB)(u, { onLogs: c, onError: o }, (o) => {
                      let c, u;
                      void 0 !== a && (c = a - 1n);
                      let d = !1,
                        f = (0, ts.w)(
                          async () => {
                            if (!d) {
                              try {
                                u = await (0, C.T)(
                                  e,
                                  w,
                                  "createEventFilter"
                                )({
                                  address: t,
                                  args: r,
                                  event: i,
                                  events: s,
                                  strict: b,
                                  fromBlock: a,
                                });
                              } catch {}
                              d = !0;
                              return;
                            }
                            try {
                              let a;
                              if (u)
                                a = await (0, C.T)(
                                  e,
                                  D.I,
                                  "getFilterChanges"
                                )({ filter: u });
                              else {
                                let n = await (0, C.T)(
                                  e,
                                  R.G,
                                  "getBlockNumber"
                                )({});
                                (a =
                                  c && c !== n
                                    ? await (0, C.T)(
                                        e,
                                        Q.a,
                                        "getLogs"
                                      )({
                                        address: t,
                                        args: r,
                                        event: i,
                                        events: s,
                                        fromBlock: c + 1n,
                                        toBlock: n,
                                      })
                                    : []),
                                  (c = n);
                              }
                              if (0 === a.length) return;
                              if (n) o.onLogs(a);
                              else for (let e of a) o.onLogs([e]);
                            } catch (e) {
                              u && e instanceof to.Di && (d = !1),
                                o.onError?.(e);
                            }
                          },
                          { emitOnBegin: !0, interval: l }
                        );
                      return async () => {
                        u &&
                          (await (0, C.T)(
                            e,
                            e4.Z,
                            "uninstallFilter"
                          )({ filter: u })),
                          f();
                      };
                    });
                  })()
                : ((f = !0),
                  (h = () => (f = !1)),
                  (async () => {
                    try {
                      let n = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => "webSocket" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        a = s ?? (i ? [i] : void 0),
                        u = [];
                      a &&
                        ((u = [
                          a.flatMap((e) =>
                            (0, v.R)({ abi: [e], eventName: e.name, args: r })
                          ),
                        ]),
                        i && (u = u[0]));
                      let { unsubscribe: l } = await n.subscribe({
                        params: ["logs", { address: t, topics: u }],
                        onData(e) {
                          if (!f) return;
                          let t = e.result;
                          try {
                            let { eventName: e, args: r } = (0, tc.j)({
                                abi: a ?? [],
                                data: t.data,
                                topics: t.topics,
                                strict: b,
                              }),
                              n = (0, H.e)(t, { args: r, eventName: e });
                            c([n]);
                          } catch (i) {
                            let e, r;
                            if (i instanceof en.fo || i instanceof en.l3) {
                              if (d) return;
                              (e = i.abiItem.name),
                                (r = i.abiItem.inputs?.some(
                                  (e) => !("name" in e && e.name)
                                ));
                            }
                            let n = (0, H.e)(t, {
                              args: r ? [] : {},
                              eventName: e,
                            });
                            c([n]);
                          }
                        },
                        onError(e) {
                          o?.(e);
                        },
                      });
                      (h = l), f || h();
                    } catch (e) {
                      o?.(e);
                    }
                  })(),
                  () => h());
            })(e, t),
          watchPendingTransactions: (t) => (0, tu.u)(e, t),
        };
      }
      var tw = r(34613);
      function tx(e, t = {}) {
        let r = (0, tw.K)(e, t);
        return r?.extend(tv);
      }
      var tE = r(45566),
        tP = r(53031);
      function tC() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, tP.useConfig)(e);
        return (0, tE.useSyncExternalStoreWithSelector)(
          (e) =>
            (function (e, t) {
              let { onChange: r } = t;
              return e.subscribe(() => tx(e), r, {
                equalityFn: (e, t) => e?.uid === t?.uid,
              });
            })(t, { onChange: e }),
          () => tx(t, e),
          () => tx(t, e),
          (e) => e,
          (e, t) =>
            (null == e ? void 0 : e.uid) === (null == t ? void 0 : t.uid)
        );
      }
    },
    58950: (e, t, r) => {
      r.d(t, { v: () => u });
      var n = r(19405),
        i = r(69330),
        s = r(60367),
        a = r(54842),
        o = r(34524),
        c = r(81946);
      async function u(e, t) {
        let {
            abi: r,
            address: u,
            args: l,
            dataSuffix: d,
            functionName: f,
            ...h
          } = t,
          p = h.account ? (0, n.J)(h.account) : e.account,
          b = (0, s.p)({ abi: r, args: l, functionName: f });
        try {
          let { data: n } = await (0, o.T)(
              e,
              c.T,
              "call"
            )({
              batch: !1,
              data: `${b}${d ? d.replace("0x", "") : ""}`,
              to: u,
              ...h,
              account: p,
            }),
            s = (0, i.e)({ abi: r, args: l, functionName: f, data: n || "0x" }),
            a = r.filter((e) => "name" in e && e.name === t.functionName);
          return {
            result: s,
            request: {
              abi: a,
              address: u,
              args: l,
              dataSuffix: d,
              functionName: f,
              ...h,
              account: p,
            },
          };
        } catch (e) {
          throw (0, a.j)(e, {
            abi: r,
            address: u,
            args: l,
            docsPath: "/docs/contract/simulateContract",
            functionName: f,
            sender: p?.address,
          });
        }
      }
    },
    58972: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.EnvProvider = void 0);
      let n = r(95155),
        i = r(94484);
      t.EnvProvider = (e) => {
        let { children: t, env: r } = e;
        return (0, n.jsx)(i.EnvContext.Provider, { value: r, children: t });
      };
    },
    58980: (e, t, r) => {
      r.d(t, { Fl: () => s, NV: () => a, ii: () => i });
      var n = r(7441);
      class i extends n.C {
        constructor({ offset: e, position: t, size: r }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset "${e}" is out-of-bounds (size: ${r}).`,
            { name: "SliceOffsetOutOfBoundsError" }
          );
        }
      }
      class s extends n.C {
        constructor({ size: e, targetSize: t, type: r }) {
          super(
            `${r.charAt(0).toUpperCase()}${r
              .slice(1)
              .toLowerCase()} size (${e}) exceeds padding size (${t}).`,
            { name: "SizeExceedsPaddingSizeError" }
          );
        }
      }
      class a extends n.C {
        constructor({ size: e, targetSize: t, type: r }) {
          super(
            `${r.charAt(0).toUpperCase()}${r
              .slice(1)
              .toLowerCase()} is expected to be ${t} ${r} long, but is ${e} ${r} long.`,
            { name: "InvalidBytesLengthError" }
          );
        }
      }
    },
    59126: (e, t, r) => {
      function n(e, t) {
        let r = e.exec(t);
        return r?.groups;
      }
      r.d(t, { BD: () => i, Ge: () => s, Yv: () => n, wj: () => a });
      let i = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        s =
          /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
        a = /^\(.+?\).*?$/;
    },
    59243: (e, t, r) => {
      r.d(t, { A: () => o });
      var n = r(24578),
        i = r(79731),
        s = r(87094),
        a = r(67622);
      function o(e, t) {
        return (0, n.S)(
          (function (e) {
            let t =
                "string" == typeof e
                  ? (0, a.i3)(e)
                  : "string" == typeof e.raw
                  ? e.raw
                  : (0, a.My)(e.raw),
              r = (0, a.i3)(`\x19Ethereum Signed Message:
${(0, s.E)(t)}`);
            return (0, i.xW)([r, t]);
          })(e),
          t
        );
      }
    },
    59742: (e, t, r) => {
      r.d(t, { r: () => i });
      var n = r(67622);
      async function i(
        e,
        { address: t, blockNumber: r, blockTag: i = "latest" }
      ) {
        let s = "bigint" == typeof r ? (0, n.cK)(r) : void 0;
        return BigInt(
          await e.request({ method: "eth_getBalance", params: [t, s || i] })
        );
      }
    },
    60004: (e, t, r) => {
      r.d(t, { L: () => s });
      var n = r(27493),
        i = r(67622);
      async function s(
        e,
        { blockHash: t, blockNumber: r, blockTag: a = "latest" } = {}
      ) {
        let o,
          c = void 0 !== r ? (0, i.cK)(r) : void 0;
        return (
          (o = t
            ? await e.request(
                { method: "eth_getBlockTransactionCountByHash", params: [t] },
                { dedupe: !0 }
              )
            : await e.request(
                {
                  method: "eth_getBlockTransactionCountByNumber",
                  params: [c || a],
                },
                { dedupe: !!c }
              )),
          (0, n.ME)(o)
        );
      }
    },
    60367: (e, t, r) => {
      r.d(t, { p: () => l });
      var n = r(79731),
        i = r(13423),
        s = r(99702),
        a = r(21135),
        o = r(21159),
        c = r(23008);
      let u = "/docs/contract/encodeFunctionData";
      function l(e) {
        let { args: t } = e,
          { abi: r, functionName: l } = (() => {
            if (1 === e.abi.length && e.functionName?.startsWith("0x"))
              return e;
            let { abi: t, args: r, functionName: n } = e,
              i = t[0];
            if (n) {
              let e = (0, c.iY)({ abi: t, args: r, name: n });
              if (!e) throw new s.Iz(n, { docsPath: u });
              i = e;
            }
            if ("function" !== i.type) throw new s.Iz(void 0, { docsPath: u });
            return { abi: [i], functionName: (0, a.V)((0, o.B)(i)) };
          })(),
          d = r[0],
          f = "inputs" in d && d.inputs ? (0, i.h)(d.inputs, t ?? []) : void 0;
        return (0, n.aP)([l, f ?? "0x"]);
      }
    },
    62108: (e, t, r) => {
      r.d(t, { I_: () => i, Zi: () => s, xO: () => o });
      var n = r(52020);
      function i(e, t) {
        return (0, n.BH)(e, t);
      }
      function s(e) {
        return JSON.stringify(e, (e, t) =>
          !(function (e) {
            if (!a(e)) return !1;
            let t = e.constructor;
            if (void 0 === t) return !0;
            let r = t.prototype;
            return !!a(r) && !!r.hasOwnProperty("isPrototypeOf");
          })(t)
            ? "bigint" == typeof t
              ? t.toString()
              : t
            : Object.keys(t)
                .sort()
                .reduce((e, r) => ((e[r] = t[r]), e), {})
        );
      }
      function a(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function o(e) {
        let {
          _defaulted: t,
          behavior: r,
          gcTime: n,
          initialData: i,
          initialDataUpdatedAt: s,
          maxPages: a,
          meta: o,
          networkMode: c,
          queryFn: u,
          queryHash: l,
          queryKey: d,
          queryKeyHashFn: f,
          retry: h,
          retryDelay: p,
          structuralSharing: b,
          getPreviousPageParam: y,
          getNextPageParam: m,
          initialPageParam: g,
          _optimisticResults: v,
          enabled: w,
          notifyOnChangeProps: x,
          placeholderData: E,
          refetchInterval: P,
          refetchIntervalInBackground: C,
          refetchOnMount: I,
          refetchOnReconnect: O,
          refetchOnWindowFocus: A,
          retryOnMount: $,
          select: B,
          staleTime: S,
          suspense: M,
          throwOnError: R,
          config: T,
          connector: j,
          query: k,
          ...F
        } = e;
        return F;
      }
    },
    62288: (e, t, r) => {
      r.d(t, { sc: () => n });
      let n = r(98693).sc;
    },
    62739: (e, t, r) => {
      r.d(t, { Y: () => n });
      function n() {
        let e = () => void 0,
          t = () => void 0;
        return {
          promise: new Promise((r, n) => {
            (e = r), (t = n);
          }),
          resolve: e,
          reject: t,
        };
      }
    },
    63401: (e, t, r) => {
      r.d(t, { WagmiContext: () => s, WagmiProvider: () => a });
      var n = r(12115),
        i = r(55259);
      let s = (0, n.createContext)(void 0);
      function a(e) {
        let { children: t, config: r } = e;
        return (0, n.createElement)(
          i.Hydrate,
          e,
          (0, n.createElement)(s.Provider, { value: r }, t)
        );
      }
    },
    64079: (e, t, r) => {
      r.d(t, { t: () => g });
      var n = r(12115),
        i = r(7165),
        s = r(52020),
        a = r(26715);
      r(95155);
      var o = n.createContext(
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
        c = () => n.useContext(o),
        u = (e, t) => {
          (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
            !t.isReset() &&
            (e.retryOnMount = !1);
        },
        l = (e) => {
          n.useEffect(() => {
            e.clearReset();
          }, [e]);
        },
        d = (e) => {
          let {
            result: t,
            errorResetBoundary: r,
            throwOnError: n,
            query: i,
            suspense: a,
          } = e;
          return (
            t.isError &&
            !r.isReset() &&
            !t.isFetching &&
            i &&
            ((a && void 0 === t.data) || (0, s.GU)(n, [t.error, i]))
          );
        },
        f = n.createContext(!1),
        h = () => n.useContext(f);
      f.Provider;
      var p = (e) => {
          let t = e.staleTime;
          e.suspense &&
            ((e.staleTime =
              "function" == typeof t
                ? (...e) => Math.max(t(...e), 1e3)
                : Math.max(t ?? 1e3, 1e3)),
            "number" == typeof e.gcTime &&
              (e.gcTime = Math.max(e.gcTime, 1e3)));
        },
        b = (e, t) => e.isLoading && e.isFetching && !t,
        y = (e, t) => e?.suspense && t.isPending,
        m = (e, t, r) =>
          t.fetchOptimistic(e).catch(() => {
            r.clearReset();
          });
      function g(e, t, r) {
        var o, f, g, v, w;
        let x = (0, a.jE)(r),
          E = h(),
          P = c(),
          C = x.defaultQueryOptions(e);
        null == (f = x.getDefaultOptions().queries) ||
          null == (o = f._experimental_beforeQuery) ||
          o.call(f, C),
          (C._optimisticResults = E ? "isRestoring" : "optimistic"),
          p(C),
          u(C, P),
          l(P);
        let I = !x.getQueryCache().get(C.queryHash),
          [O] = n.useState(() => new t(x, C)),
          A = O.getOptimisticResult(C),
          $ = !E && !1 !== e.subscribed;
        if (
          (n.useSyncExternalStore(
            n.useCallback(
              (e) => {
                let t = $ ? O.subscribe(i.jG.batchCalls(e)) : s.lQ;
                return O.updateResult(), t;
              },
              [O, $]
            ),
            () => O.getCurrentResult(),
            () => O.getCurrentResult()
          ),
          n.useEffect(() => {
            O.setOptions(C);
          }, [C, O]),
          y(C, A))
        )
          throw m(C, O, P);
        if (
          d({
            result: A,
            errorResetBoundary: P,
            throwOnError: C.throwOnError,
            query: x.getQueryCache().get(C.queryHash),
            suspense: C.suspense,
          })
        )
          throw A.error;
        if (
          (null == (v = x.getDefaultOptions().queries) ||
            null == (g = v._experimental_afterQuery) ||
            g.call(v, C, A),
          C.experimental_prefetchInRender && !s.S$ && b(A, E))
        ) {
          let e = I
            ? m(C, O, P)
            : null == (w = x.getQueryCache().get(C.queryHash))
            ? void 0
            : w.promise;
          null == e ||
            e.catch(s.lQ).finally(() => {
              O.updateResult();
            });
        }
        return C.notifyOnChangeProps ? A : O.trackResult(A);
      }
    },
    64275: (e, t, r) => {
      r.d(t, { PL: () => i, RQ: () => c, rB: () => o });
      var n = r(52020);
      function i(e) {
        return {
          onFetch: (t, r) => {
            let i = t.options,
              o = t.fetchOptions?.meta?.fetchMore?.direction,
              c = t.state.data?.pages || [],
              u = t.state.data?.pageParams || [],
              l = { pages: [], pageParams: [] },
              d = 0,
              f = async () => {
                let r = !1,
                  f = (e) => {
                    Object.defineProperty(e, "signal", {
                      enumerable: !0,
                      get: () => (
                        t.signal.aborted
                          ? (r = !0)
                          : t.signal.addEventListener("abort", () => {
                              r = !0;
                            }),
                        t.signal
                      ),
                    });
                  },
                  h = (0, n.ZM)(t.options, t.fetchOptions),
                  p = async (e, i, s) => {
                    if (r) return Promise.reject();
                    if (null == i && e.pages.length) return Promise.resolve(e);
                    let a = {
                      client: t.client,
                      queryKey: t.queryKey,
                      pageParam: i,
                      direction: s ? "backward" : "forward",
                      meta: t.options.meta,
                    };
                    f(a);
                    let o = await h(a),
                      { maxPages: c } = t.options,
                      u = s ? n.ZZ : n.y9;
                    return {
                      pages: u(e.pages, o, c),
                      pageParams: u(e.pageParams, i, c),
                    };
                  };
                if (o && c.length) {
                  let e = "backward" === o,
                    t = { pages: c, pageParams: u },
                    r = (e ? a : s)(i, t);
                  l = await p(t, r, e);
                } else {
                  let t = e ?? c.length;
                  do {
                    let e = 0 === d ? u[0] ?? i.initialPageParam : s(i, l);
                    if (d > 0 && null == e) break;
                    (l = await p(l, e)), d++;
                  } while (d < t);
                }
                return l;
              };
            t.options.persister
              ? (t.fetchFn = () =>
                  t.options.persister?.(
                    f,
                    {
                      client: t.client,
                      queryKey: t.queryKey,
                      meta: t.options.meta,
                      signal: t.signal,
                    },
                    r
                  ))
              : (t.fetchFn = f);
          },
        };
      }
      function s(e, { pages: t, pageParams: r }) {
        let n = t.length - 1;
        return t.length > 0 ? e.getNextPageParam(t[n], t, r[n], r) : void 0;
      }
      function a(e, { pages: t, pageParams: r }) {
        return t.length > 0
          ? e.getPreviousPageParam?.(t[0], t, r[0], r)
          : void 0;
      }
      function o(e, t) {
        return !!t && null != s(e, t);
      }
      function c(e, t) {
        return !!t && !!e.getPreviousPageParam && null != a(e, t);
      }
    },
    64997: (e, t, r) => {
      r.d(t, { s: () => n });
      function n(e) {
        let t = e.state.current,
          r = e.state.connections.get(t),
          n = r?.accounts,
          i = n?.[0],
          s = e.chains.find((e) => e.id === r?.chainId),
          a = e.state.status;
        switch (a) {
          case "connected":
            return {
              address: i,
              addresses: n,
              chain: s,
              chainId: r?.chainId,
              connector: r?.connector,
              isConnected: !0,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !1,
              status: a,
            };
          case "reconnecting":
            return {
              address: i,
              addresses: n,
              chain: s,
              chainId: r?.chainId,
              connector: r?.connector,
              isConnected: !!i,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !0,
              status: a,
            };
          case "connecting":
            return {
              address: i,
              addresses: n,
              chain: s,
              chainId: r?.chainId,
              connector: r?.connector,
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
    },
    65003: (e, t, r) => {
      r.d(t, { A: () => n });
      class n extends Map {
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
    65358: (e, t, r) => {
      r.d(t, { c: () => u });
      var n = r(19405);
      let i = 2n ** 256n - 1n;
      var s = r(36444),
        a = r(42264),
        o = r(69432),
        c = r(81757);
      function u(e) {
        let {
            account: t,
            gasPrice: r,
            maxFeePerGas: u,
            maxPriorityFeePerGas: l,
            to: d,
          } = e,
          f = t ? (0, n.J)(t) : void 0;
        if (f && !(0, c.P)(f.address)) throw new s.M({ address: f.address });
        if (d && !(0, c.P)(d)) throw new s.M({ address: d });
        if (void 0 !== r && (void 0 !== u || void 0 !== l)) throw new o.n3();
        if (u && u > i) throw new a.BG({ maxFeePerGas: u });
        if (l && u && l > u)
          throw new a.lN({ maxFeePerGas: u, maxPriorityFeePerGas: l });
      }
    },
    65368: (e, t, r) => {
      let n;
      r.d(t, { L: () => s });
      let i = 256;
      function s(e = 11) {
        if (!n || i + e > 512) {
          (n = ""), (i = 0);
          for (let e = 0; e < 256; e++)
            n += ((256 + 256 * Math.random()) | 0).toString(16).substring(1);
        }
        return n.substring(i, i++ + e);
      }
    },
    65830: (e, t, r) => {
      r.d(t, { m: () => p });
      var n = r(14493),
        i = r(69330),
        s = r(60367),
        a = r(13861),
        o = r(67622),
        c = r(41052),
        u = r(95041),
        l = r(32160),
        d = r(7612),
        f = r(34524),
        h = r(3488);
      async function p(e, t) {
        let {
            blockNumber: r,
            blockTag: p,
            key: b,
            name: y,
            gatewayUrls: m,
            strict: g,
          } = t,
          { chain: v } = e,
          w = (() => {
            if (t.universalResolverAddress) return t.universalResolverAddress;
            if (!v)
              throw Error(
                "client chain not configured. universalResolverAddress is required."
              );
            return (0, a.M)({
              blockNumber: r,
              chain: v,
              contract: "ensUniversalResolver",
            });
          })(),
          x = v?.ensTlds;
        if (x && !x.some((e) => y.endsWith(e))) return null;
        try {
          let t = {
              address: w,
              abi: n.Ag,
              functionName: "resolve",
              args: [
                (0, o.nj)((0, d.F)(y)),
                (0, s.p)({
                  abi: n.SJ,
                  functionName: "text",
                  args: [(0, l.k)(y), b],
                }),
                m ?? [u.J],
              ],
              blockNumber: r,
              blockTag: p,
            },
            a = (0, f.T)(e, h.J, "readContract"),
            c = await a(t);
          if ("0x" === c[0]) return null;
          let g = (0, i.e)({ abi: n.SJ, functionName: "text", data: c[0] });
          return "" === g ? null : g;
        } catch (e) {
          if (g) throw e;
          if ((0, c.J)(e, "resolve")) return null;
          throw e;
        }
      }
    },
    67622: (e, t, r) => {
      r.d(t, {
        $P: () => c,
        My: () => u,
        cK: () => l,
        i3: () => f,
        nj: () => o,
      });
      var n = r(94201),
        i = r(36984),
        s = r(27493);
      let a = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function o(e, t = {}) {
        return "number" == typeof e || "bigint" == typeof e
          ? l(e, t)
          : "string" == typeof e
          ? f(e, t)
          : "boolean" == typeof e
          ? c(e, t)
          : u(e, t);
      }
      function c(e, t = {}) {
        let r = `0x${Number(e)}`;
        return "number" == typeof t.size
          ? ((0, s.Sl)(r, { size: t.size }), (0, i.eV)(r, { size: t.size }))
          : r;
      }
      function u(e, t = {}) {
        let r = "";
        for (let t = 0; t < e.length; t++) r += a[e[t]];
        let n = `0x${r}`;
        return "number" == typeof t.size
          ? ((0, s.Sl)(n, { size: t.size }),
            (0, i.eV)(n, { dir: "right", size: t.size }))
          : n;
      }
      function l(e, t = {}) {
        let r,
          { signed: s, size: a } = t,
          o = BigInt(e);
        a
          ? (r = s
              ? (1n << (8n * BigInt(a) - 1n)) - 1n
              : 2n ** (8n * BigInt(a)) - 1n)
          : "number" == typeof e && (r = BigInt(Number.MAX_SAFE_INTEGER));
        let c = "bigint" == typeof r && s ? -r - 1n : 0;
        if ((r && o > r) || o < c) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new n.Ty({
            max: r ? `${r}${t}` : void 0,
            min: `${c}${t}`,
            signed: s,
            size: a,
            value: `${e}${t}`,
          });
        }
        let u = `0x${(s && o < 0
          ? (1n << BigInt(8 * a)) + BigInt(o)
          : o
        ).toString(16)}`;
        return a ? (0, i.eV)(u, { size: a }) : u;
      }
      let d = new TextEncoder();
      function f(e, t = {}) {
        return u(d.encode(e), t);
      }
    },
    68321: (e, t, r) => {
      r.d(t, { C: () => n });
      class n extends Error {
        constructor(e, t = {}) {
          let r =
              t.cause instanceof n
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            i = (t.cause instanceof n && t.cause.docsPath) || t.docsPath;
          super(
            [
              e || "An error occurred.",
              "",
              ...(t.metaMessages ? [...t.metaMessages, ""] : []),
              ...(i ? [`Docs: https://abitype.dev${i}`] : []),
              ...(r ? [`Details: ${r}`] : []),
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
            (this.details = r),
            (this.docsPath = i),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
      }
    },
    68629: (e, t, r) => {
      r.d(t, { k: () => u });
      var n = r(80844),
        i = r(24578);
      let s = (e) => (0, i.S)((0, n.ZJ)(e));
      var a = r(16652),
        o = r(7441);
      let c = (e) =>
        (function (e) {
          let t = !0,
            r = "",
            n = 0,
            i = "",
            s = !1;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            if (
              (["(", ")", ","].includes(o) && (t = !0),
              "(" === o && n++,
              ")" === o && n--,
              t)
            ) {
              if (0 === n) {
                if (" " === o && ["event", "function", ""].includes(i)) i = "";
                else if (((i += o), ")" === o)) {
                  s = !0;
                  break;
                }
                continue;
              }
              if (" " === o) {
                "," !== e[a - 1] &&
                  "," !== r &&
                  ",(" !== r &&
                  ((r = ""), (t = !1));
                continue;
              }
              (i += o), (r += o);
            }
          }
          if (!s) throw new o.C("Unable to normalize signature.");
          return i;
        })("string" == typeof e ? e : (0, a.B)(e));
      function u(e) {
        return s(c(e));
      }
    },
    69243: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return g;
          },
          handleClientScriptLoad: function () {
            return b;
          },
          initScriptLoader: function () {
            return y;
          },
        });
      let n = r(88229),
        i = r(6966),
        s = r(95155),
        a = n._(r(47650)),
        o = i._(r(12115)),
        c = r(82830),
        u = r(42714),
        l = r(92374),
        d = new Map(),
        f = new Set(),
        h = (e) => {
          if (a.default.preinit)
            return void e.forEach((e) => {
              a.default.preinit(e, { as: "style" });
            });
          {
            let t = document.head;
            e.forEach((e) => {
              let r = document.createElement("link");
              (r.type = "text/css"),
                (r.rel = "stylesheet"),
                (r.href = e),
                t.appendChild(r);
            });
          }
        },
        p = (e) => {
          let {
              src: t,
              id: r,
              onLoad: n = () => {},
              onReady: i = null,
              dangerouslySetInnerHTML: s,
              children: a = "",
              strategy: o = "afterInteractive",
              onError: c,
              stylesheets: l,
            } = e,
            p = r || t;
          if (p && f.has(p)) return;
          if (d.has(t)) {
            f.add(p), d.get(t).then(n, c);
            return;
          }
          let b = () => {
              i && i(), f.add(p);
            },
            y = document.createElement("script"),
            m = new Promise((e, t) => {
              y.addEventListener("load", function (t) {
                e(), n && n.call(this, t), b();
              }),
                y.addEventListener("error", function (e) {
                  t(e);
                });
            }).catch(function (e) {
              c && c(e);
            });
          s
            ? ((y.innerHTML = s.__html || ""), b())
            : a
            ? ((y.textContent =
                "string" == typeof a ? a : Array.isArray(a) ? a.join("") : ""),
              b())
            : t && ((y.src = t), d.set(t, m)),
            (0, u.setAttributesFromProps)(y, e),
            "worker" === o && y.setAttribute("type", "text/partytown"),
            y.setAttribute("data-nscript", o),
            l && h(l),
            document.body.appendChild(y);
        };
      function b(e) {
        let { strategy: t = "afterInteractive" } = e;
        "lazyOnload" === t
          ? window.addEventListener("load", () => {
              (0, l.requestIdleCallback)(() => p(e));
            })
          : p(e);
      }
      function y(e) {
        e.forEach(b),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((e) => {
            let t = e.id || e.getAttribute("src");
            f.add(t);
          });
      }
      function m(e) {
        let {
            id: t,
            src: r = "",
            onLoad: n = () => {},
            onReady: i = null,
            strategy: u = "afterInteractive",
            onError: d,
            stylesheets: h,
            ...b
          } = e,
          {
            updateScripts: y,
            scripts: m,
            getIsSsr: g,
            appDir: v,
            nonce: w,
          } = (0, o.useContext)(c.HeadManagerContext),
          x = (0, o.useRef)(!1);
        (0, o.useEffect)(() => {
          let e = t || r;
          x.current || (i && e && f.has(e) && i(), (x.current = !0));
        }, [i, t, r]);
        let E = (0, o.useRef)(!1);
        if (
          ((0, o.useEffect)(() => {
            if (!E.current) {
              if ("afterInteractive" === u) p(e);
              else
                "lazyOnload" === u &&
                  ("complete" === document.readyState
                    ? (0, l.requestIdleCallback)(() => p(e))
                    : window.addEventListener("load", () => {
                        (0, l.requestIdleCallback)(() => p(e));
                      }));
              E.current = !0;
            }
          }, [e, u]),
          ("beforeInteractive" === u || "worker" === u) &&
            (y
              ? ((m[u] = (m[u] || []).concat([
                  { id: t, src: r, onLoad: n, onReady: i, onError: d, ...b },
                ])),
                y(m))
              : g && g()
              ? f.add(t || r)
              : g && !g() && p(e)),
          v)
        ) {
          if (
            (h &&
              h.forEach((e) => {
                a.default.preinit(e, { as: "style" });
              }),
            "beforeInteractive" === u)
          )
            if (!r)
              return (
                b.dangerouslySetInnerHTML &&
                  ((b.children = b.dangerouslySetInnerHTML.__html),
                  delete b.dangerouslySetInnerHTML),
                (0, s.jsx)("script", {
                  nonce: w,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ...b, id: t }]) +
                      ")",
                  },
                })
              );
            else
              return (
                a.default.preload(
                  r,
                  b.integrity
                    ? {
                        as: "script",
                        integrity: b.integrity,
                        nonce: w,
                        crossOrigin: b.crossOrigin,
                      }
                    : { as: "script", nonce: w, crossOrigin: b.crossOrigin }
                ),
                (0, s.jsx)("script", {
                  nonce: w,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([r, { ...b, id: t }]) +
                      ")",
                  },
                })
              );
          "afterInteractive" === u &&
            r &&
            a.default.preload(
              r,
              b.integrity
                ? {
                    as: "script",
                    integrity: b.integrity,
                    nonce: w,
                    crossOrigin: b.crossOrigin,
                  }
                : { as: "script", nonce: w, crossOrigin: b.crossOrigin }
            );
        }
        return null;
      }
      Object.defineProperty(m, "__nextScript", { value: !0 });
      let g = m;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    69330: (e, t, r) => {
      r.d(t, { e: () => o });
      var n = r(99702),
        i = r(43935),
        s = r(23008);
      let a = "/docs/contract/decodeFunctionResult";
      function o(e) {
        let { abi: t, args: r, functionName: o, data: c } = e,
          u = t[0];
        if (o) {
          let e = (0, s.iY)({ abi: t, args: r, name: o });
          if (!e) throw new n.Iz(o, { docsPath: a });
          u = e;
        }
        if ("function" !== u.type) throw new n.Iz(void 0, { docsPath: a });
        if (!u.outputs) throw new n.MR(u.name, { docsPath: a });
        let l = (0, i.n)(u.outputs, c);
        return l && l.length > 1 ? l : l && 1 === l.length ? l[0] : void 0;
      }
    },
    69432: (e, t, r) => {
      r.d(t, {
        $s: () => u,
        Kc: () => d,
        Kz: () => l,
        Vg: () => c,
        WA: () => f,
        aO: () => a,
        n3: () => o,
      });
      var n = r(44494),
        i = r(31942),
        s = r(7441);
      function a(e) {
        let t = Object.entries(e)
            .map(([e, t]) => (void 0 === t || !1 === t ? null : [e, t]))
            .filter(Boolean),
          r = t.reduce((e, [t]) => Math.max(e, t.length), 0);
        return t.map(([e, t]) => `  ${`${e}:`.padEnd(r + 1)}  ${t}`).join("\n");
      }
      class o extends s.C {
        constructor() {
          super(
            "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.",
            { name: "FeeConflictError" }
          );
        }
      }
      s.C;
      class c extends s.C {
        constructor({ transaction: e }) {
          super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: [
              "Provided Transaction:",
              "{",
              a(e),
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
      s.C, s.C, s.C;
      class u extends s.C {
        constructor(
          e,
          {
            account: t,
            docsPath: r,
            chain: s,
            data: o,
            gas: c,
            gasPrice: u,
            maxFeePerGas: l,
            maxPriorityFeePerGas: d,
            nonce: f,
            to: h,
            value: p,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: r,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Request Arguments:",
              a({
                chain: s && `${s?.name} (id: ${s?.id})`,
                from: t?.address,
                to: h,
                value:
                  void 0 !== p &&
                  `${(0, n.c)(p)} ${s?.nativeCurrency?.symbol || "ETH"}`,
                data: o,
                gas: c,
                gasPrice: void 0 !== u && `${(0, i.Q)(u)} gwei`,
                maxFeePerGas: void 0 !== l && `${(0, i.Q)(l)} gwei`,
                maxPriorityFeePerGas: void 0 !== d && `${(0, i.Q)(d)} gwei`,
                nonce: f,
              }),
            ].filter(Boolean),
            name: "TransactionExecutionError",
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
      class l extends s.C {
        constructor({
          blockHash: e,
          blockNumber: t,
          blockTag: r,
          hash: n,
          index: i,
        }) {
          let s = "Transaction";
          r &&
            void 0 !== i &&
            (s = `Transaction at block time "${r}" at index "${i}"`),
            e &&
              void 0 !== i &&
              (s = `Transaction at block hash "${e}" at index "${i}"`),
            t &&
              void 0 !== i &&
              (s = `Transaction at block number "${t}" at index "${i}"`),
            n && (s = `Transaction with hash "${n}"`),
            super(`${s} could not be found.`, {
              name: "TransactionNotFoundError",
            });
        }
      }
      class d extends s.C {
        constructor({ hash: e }) {
          super(
            `Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`,
            { name: "TransactionReceiptNotFoundError" }
          );
        }
      }
      class f extends s.C {
        constructor({ hash: e }) {
          super(
            `Timed out while waiting for transaction with hash "${e}" to be confirmed.`,
            { name: "WaitForTransactionReceiptTimeoutError" }
          );
        }
      }
    },
    70030: (e, t, r) => {
      r.d(t, { T: () => n });
      function n(e, t, r) {
        let n = e[t.name];
        if ("function" == typeof n) return n;
        let i = e[r];
        return "function" == typeof i ? i : (r) => t(e, r);
      }
    },
    70872: (e, t, r) => {
      r.d(t, { q: () => i });
      var n = r(32840);
      function i(e) {
        if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]"))
          return null;
        let t = `0x${e.slice(1, 65)}`;
        return (0, n.q)(t) ? t : null;
      }
    },
    72312: (e, t, r) => {
      var n = r(12115),
        i = r(81960),
        s =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        a = i.useSyncExternalStore,
        o = n.useRef,
        c = n.useEffect,
        u = n.useMemo,
        l = n.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, r, n, i) {
        var d = o(null);
        if (null === d.current) {
          var f = { hasValue: !1, value: null };
          d.current = f;
        } else f = d.current;
        var h = a(
          e,
          (d = u(
            function () {
              function e(e) {
                if (!c) {
                  if (
                    ((c = !0), (a = e), (e = n(e)), void 0 !== i && f.hasValue)
                  ) {
                    var t = f.value;
                    if (i(t, e)) return (o = t);
                  }
                  return (o = e);
                }
                if (((t = o), s(a, e))) return t;
                var r = n(e);
                return void 0 !== i && i(t, r)
                  ? ((a = e), t)
                  : ((a = e), (o = r));
              }
              var a,
                o,
                c = !1,
                u = void 0 === r ? null : r;
              return [
                function () {
                  return e(t());
                },
                null === u
                  ? void 0
                  : function () {
                      return e(u());
                    },
              ];
            },
            [t, r, n, i]
          ))[0],
          d[1]
        );
        return (
          c(
            function () {
              (f.hasValue = !0), (f.value = h);
            },
            [h]
          ),
          l(h),
          h
        );
      };
    },
    72342: (e, t, r) => {
      r.d(t, { lB: () => a });
      let n = new Map(),
        i = new Map(),
        s = 0;
      function a(e, t, r) {
        let a = ++s,
          o = () => n.get(e) || [],
          c = () => {
            let t = o();
            n.set(
              e,
              t.filter((e) => e.id !== a)
            );
          },
          u = () => {
            let t = o();
            if (!t.some((e) => e.id === a)) return;
            let r = i.get(e);
            1 === t.length && r && r(), c();
          },
          l = o();
        if ((n.set(e, [...l, { id: a, fns: t }]), l && l.length > 0)) return u;
        let d = {};
        for (let e in t)
          d[e] = (...t) => {
            let r = o();
            if (0 !== r.length) for (let n of r) n.fns[e]?.(...t);
          };
        let f = r(d);
        return "function" == typeof f && i.set(e, f), u;
      }
    },
    73479: (e, t, r) => {
      r.d(t, { O: () => c });
      var n = r(34524),
        i = r(72342),
        s = r(86435),
        a = r(79183),
        o = r(23335);
      function c(
        e,
        {
          blockTag: t = "latest",
          emitMissed: r = !1,
          emitOnBegin: c = !1,
          onBlock: u,
          onError: l,
          includeTransactions: d,
          poll: f,
          pollingInterval: h = e.pollingInterval,
        }
      ) {
        let p,
          b,
          y,
          m,
          g =
            void 0 !== f
              ? f
              : "webSocket" !== e.transport.type &&
                ("fallback" !== e.transport.type ||
                  "webSocket" !== e.transport.transports[0].config.type),
          v = d ?? !1;
        return g
          ? (() => {
              let d = (0, a.A)(["watchBlocks", e.uid, t, r, c, v, h]);
              return (0, i.lB)(d, { onBlock: u, onError: l }, (i) =>
                (0, s.w)(
                  async () => {
                    try {
                      let s = await (0, n.T)(
                        e,
                        o.g,
                        "getBlock"
                      )({ blockTag: t, includeTransactions: v });
                      if (null !== s.number && p?.number != null) {
                        if (s.number === p.number) return;
                        if (s.number - p.number > 1 && r)
                          for (let t = p?.number + 1n; t < s.number; t++) {
                            let r = await (0, n.T)(
                              e,
                              o.g,
                              "getBlock"
                            )({ blockNumber: t, includeTransactions: v });
                            i.onBlock(r, p), (p = r);
                          }
                      }
                      (p?.number == null ||
                        ("pending" === t && s?.number == null) ||
                        (null !== s.number && s.number > p.number)) &&
                        (i.onBlock(s, p), (p = s));
                    } catch (e) {
                      i.onError?.(e);
                    }
                  },
                  { emitOnBegin: c, interval: h }
                )
              );
            })()
          : ((b = !0),
            (y = !0),
            (m = () => (b = !1)),
            (async () => {
              try {
                c &&
                  (0, n.T)(
                    e,
                    o.g,
                    "getBlock"
                  )({ blockTag: t, includeTransactions: v }).then((e) => {
                    b && y && (u(e, void 0), (y = !1));
                  });
                let r = (() => {
                    if ("fallback" === e.transport.type) {
                      let t = e.transport.transports.find(
                        (e) => "webSocket" === e.config.type
                      );
                      return t ? t.value : e.transport;
                    }
                    return e.transport;
                  })(),
                  { unsubscribe: i } = await r.subscribe({
                    params: ["newHeads"],
                    async onData(t) {
                      if (!b) return;
                      let r = await (0, n.T)(
                        e,
                        o.g,
                        "getBlock"
                      )({
                        blockNumber: t.blockNumber,
                        includeTransactions: v,
                      }).catch(() => {});
                      b && (u(r, p), (y = !1), (p = r));
                    },
                    onError(e) {
                      l?.(e);
                    },
                  });
                (m = i), b || m();
              } catch (e) {
                l?.(e);
              }
            })(),
            () => m());
      }
    },
    73504: (e, t, r) => {
      function n() {
        let e,
          t,
          r = new Promise((r, n) => {
            (e = r), (t = n);
          });
        function n(e) {
          Object.assign(r, e), delete r.resolve, delete r.reject;
        }
        return (
          (r.status = "pending"),
          r.catch(() => {}),
          (r.resolve = (t) => {
            n({ status: "fulfilled", value: t }), e(t);
          }),
          (r.reject = (e) => {
            n({ status: "rejected", reason: e }), t(e);
          }),
          r
        );
      }
      r.d(t, { T: () => n });
    },
    73979: (e, t, r) => {
      r.d(t, { MM: () => C, ft: () => O });
      var n = r(19405),
        i = r(24573),
        s = r(16712),
        a = r(23335),
        o = r(13649),
        c = r(91836),
        u = r(80844),
        l = r(67622);
      function d(e) {
        let { kzg: t } = e,
          r = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
          n =
            "string" == typeof e.blobs[0]
              ? e.blobs.map((e) => (0, u.aT)(e))
              : e.blobs,
          i = [];
        for (let e of n) i.push(Uint8Array.from(t.blobToKzgCommitment(e)));
        return "bytes" === r ? i : i.map((e) => (0, l.My)(e));
      }
      function f(e) {
        let { kzg: t } = e,
          r = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
          n =
            "string" == typeof e.blobs[0]
              ? e.blobs.map((e) => (0, u.aT)(e))
              : e.blobs,
          i =
            "string" == typeof e.commitments[0]
              ? e.commitments.map((e) => (0, u.aT)(e))
              : e.commitments,
          s = [];
        for (let e = 0; e < n.length; e++) {
          let r = n[e],
            a = i[e];
          s.push(Uint8Array.from(t.computeBlobKzgProof(r, a)));
        }
        return "bytes" === r ? s : s.map((e) => (0, l.My)(e));
      }
      var h = r(62288),
        p = r(32840),
        b = r(7441);
      class y extends b.C {
        constructor({ maxSize: e, size: t }) {
          super("Blob size is too large.", {
            metaMessages: [`Max: ${e} bytes`, `Given: ${t} bytes`],
            name: "BlobSizeTooLargeError",
          });
        }
      }
      class m extends b.C {
        constructor() {
          super("Blob data must not be empty.", { name: "EmptyBlobError" });
        }
      }
      b.C, b.C;
      var g = r(87456),
        v = r(87094),
        w = r(34524),
        x = r(65358),
        E = r(69432),
        P = r(926);
      let C = [
          "blobVersionedHashes",
          "chainId",
          "fees",
          "gas",
          "nonce",
          "type",
        ],
        I = new Map();
      async function O(e, t) {
        let r,
          b,
          {
            account: O = e.account,
            blobs: A,
            chain: $,
            gas: B,
            kzg: S,
            nonce: M,
            nonceManager: R,
            parameters: T = C,
            type: j,
          } = t,
          k = O ? (0, n.J)(O) : O,
          F = { ...t, ...(k ? { from: k?.address } : {}) };
        async function N() {
          return (
            r ||
            (r = await (0, w.T)(e, a.g, "getBlock")({ blockTag: "latest" }))
          );
        }
        async function z() {
          return (
            b ||
            ($
              ? $.id
              : void 0 !== t.chainId
              ? t.chainId
              : (b = await (0, w.T)(e, P.T, "getChainId")({})))
          );
        }
        if (T.includes("nonce") && void 0 === M && k)
          if (R) {
            let t = await z();
            F.nonce = await R.consume({
              address: k.address,
              chainId: t,
              client: e,
            });
          } else
            F.nonce = await (0, w.T)(
              e,
              o.y,
              "getTransactionCount"
            )({ address: k.address, blockTag: "pending" });
        if (
          (T.includes("blobVersionedHashes") || T.includes("sidecars")) &&
          A &&
          S
        ) {
          let e = d({ blobs: A, kzg: S });
          if (
            (T.includes("blobVersionedHashes") &&
              (F.blobVersionedHashes = (function (e) {
                let { commitments: t, version: r } = e,
                  n = e.to ?? ("string" == typeof t[0] ? "hex" : "bytes"),
                  i = [];
                for (let e of t)
                  i.push(
                    (function (e) {
                      let { commitment: t, version: r = 1 } = e,
                        n = e.to ?? ("string" == typeof t ? "hex" : "bytes"),
                        i = (function (e, t) {
                          let r = (0, h.sc)(
                            (0, p.q)(e, { strict: !1 }) ? (0, u.ZJ)(e) : e
                          );
                          return "bytes" === (t || "hex") ? r : (0, l.nj)(r);
                        })(t, "bytes");
                      return i.set([r], 0), "bytes" === n ? i : (0, l.My)(i);
                    })({ commitment: e, to: n, version: r })
                  );
                return i;
              })({ commitments: e, to: "hex" })),
            T.includes("sidecars"))
          ) {
            let t = f({ blobs: A, commitments: e, kzg: S });
            F.sidecars = (function (e) {
              let { data: t, kzg: r, to: n } = e,
                i =
                  e.blobs ??
                  (function (e) {
                    let t =
                        e.to ?? ("string" == typeof e.data ? "hex" : "bytes"),
                      r =
                        "string" == typeof e.data ? (0, u.aT)(e.data) : e.data,
                      n = (0, v.E)(r);
                    if (!n) throw new m();
                    if (n > 761855) throw new y({ maxSize: 761855, size: n });
                    let i = [],
                      s = !0,
                      a = 0;
                    for (; s; ) {
                      let e = (0, g.l)(new Uint8Array(131072)),
                        t = 0;
                      for (; t < 4096; ) {
                        let n = r.slice(a, a + 31);
                        if ((e.pushByte(0), e.pushBytes(n), n.length < 31)) {
                          e.pushByte(128), (s = !1);
                          break;
                        }
                        t++, (a += 31);
                      }
                      i.push(e);
                    }
                    return "bytes" === t
                      ? i.map((e) => e.bytes)
                      : i.map((e) => (0, l.My)(e.bytes));
                  })({ data: t, to: n }),
                s = e.commitments ?? d({ blobs: i, kzg: r, to: n }),
                a = e.proofs ?? f({ blobs: i, commitments: s, kzg: r, to: n }),
                o = [];
              for (let e = 0; e < i.length; e++)
                o.push({ blob: i[e], commitment: s[e], proof: a[e] });
              return o;
            })({ blobs: A, commitments: e, proofs: t, to: "hex" });
          }
        }
        if (
          (T.includes("chainId") && (F.chainId = await z()),
          (T.includes("fees") || T.includes("type")) && void 0 === j)
        )
          try {
            F.type = (function (e) {
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
              throw new E.Vg({ transaction: e });
            })(F);
          } catch {
            let t = I.get(e.uid);
            if (void 0 === t) {
              let r = await N();
              (t = "bigint" == typeof r?.baseFeePerGas), I.set(e.uid, t);
            }
            F.type = t ? "eip1559" : "legacy";
          }
        if (T.includes("fees"))
          if ("legacy" !== F.type && "eip2930" !== F.type) {
            if (
              void 0 === F.maxFeePerGas ||
              void 0 === F.maxPriorityFeePerGas
            ) {
              let r = await N(),
                { maxFeePerGas: n, maxPriorityFeePerGas: s } = await (0, i.O)(
                  e,
                  { block: r, chain: $, request: F }
                );
              if (
                void 0 === t.maxPriorityFeePerGas &&
                t.maxFeePerGas &&
                t.maxFeePerGas < s
              )
                throw new c.RR({ maxPriorityFeePerGas: s });
              (F.maxPriorityFeePerGas = s), (F.maxFeePerGas = n);
            }
          } else {
            if (void 0 !== t.maxFeePerGas || void 0 !== t.maxPriorityFeePerGas)
              throw new c.pw();
            if (void 0 === t.gasPrice) {
              let t = await N(),
                { gasPrice: r } = await (0, i.O)(e, {
                  block: t,
                  chain: $,
                  request: F,
                  type: "legacy",
                });
              F.gasPrice = r;
            }
          }
        return (
          T.includes("gas") &&
            void 0 === B &&
            (F.gas = await (0, w.T)(
              e,
              s.Q,
              "estimateGas"
            )({
              ...F,
              account: k ? { address: k.address, type: "json-rpc" } : k,
            })),
          (0, x.c)(F),
          delete F.parameters,
          F
        );
      }
    },
    73991: (e, t, r) => {
      r.d(t, { p: () => u });
      var n = r(99702),
        i = r(17255),
        s = r(80844),
        a = r(24578),
        o = r(399),
        c = r(79225);
      function u(e) {
        let { abi: t, args: r, logs: u, strict: l = !0 } = e,
          d = (() => {
            if (e.eventName)
              return Array.isArray(e.eventName) ? e.eventName : [e.eventName];
          })();
        return u
          .map((e) => {
            try {
              let n = t.find(
                (t) => "event" === t.type && e.topics[0] === (0, o.h)(t)
              );
              if (!n) return null;
              let u = (0, c.j)({ ...e, abi: [n], strict: l });
              if (
                (d && !d.includes(u.eventName)) ||
                !(function (e) {
                  let { args: t, inputs: r, matchArgs: n } = e;
                  if (!n) return !0;
                  if (!t) return !1;
                  function o(e, t, r) {
                    try {
                      if ("address" === e.type) return (0, i.h)(t, r);
                      if ("string" === e.type || "bytes" === e.type)
                        return (0, a.S)((0, s.ZJ)(t)) === r;
                      return t === r;
                    } catch {
                      return !1;
                    }
                  }
                  return Array.isArray(t) && Array.isArray(n)
                    ? n.every((e, n) => {
                        if (null == e) return !0;
                        let i = r[n];
                        return (
                          !!i &&
                          (Array.isArray(e) ? e : [e]).some((e) =>
                            o(i, e, t[n])
                          )
                        );
                      })
                    : !(
                        "object" != typeof t ||
                        Array.isArray(t) ||
                        "object" != typeof n ||
                        Array.isArray(n)
                      ) &&
                        Object.entries(n).every(([e, n]) => {
                          if (null == n) return !0;
                          let i = r.find((t) => t.name === e);
                          return (
                            !!i &&
                            (Array.isArray(n) ? n : [n]).some((r) =>
                              o(i, r, t[e])
                            )
                          );
                        });
                })({ args: u.args, inputs: n.inputs, matchArgs: r })
              )
                return null;
              return { ...u, ...e };
            } catch (i) {
              let t, r;
              if (i instanceof n.kE) return null;
              if (i instanceof n.fo || i instanceof n.l3) {
                if (l) return null;
                (t = i.abiItem.name),
                  (r = i.abiItem.inputs?.some((e) => !("name" in e && e.name)));
              }
              return { ...e, args: r ? [] : {}, eventName: t };
            }
          })
          .filter(Boolean);
      }
    },
    75483: (e, t, r) => {
      r.d(t, { M: () => i });
      let n = !1;
      async function i(e, t = {}) {
        let r;
        if (n) return [];
        (n = !0),
          e.setState((e) => ({
            ...e,
            status: e.current ? "reconnecting" : "connecting",
          }));
        let s = [];
        if (t.connectors?.length)
          for (let r of t.connectors) {
            let t;
            (t = "function" == typeof r ? e._internal.connectors.setup(r) : r),
              s.push(t);
          }
        else s.push(...e.connectors);
        try {
          r = await e.storage?.getItem("recentConnectorId");
        } catch {}
        let a = {};
        for (let [, t] of e.state.connections) a[t.connector.id] = 1;
        r && (a[r] = 0);
        let o =
            Object.keys(a).length > 0
              ? [...s].sort((e, t) => (a[e.id] ?? 10) - (a[t.id] ?? 10))
              : s,
          c = !1,
          u = [],
          l = [];
        for (let t of o) {
          let r = await t.getProvider().catch(() => void 0);
          if (!r || l.some((e) => e === r) || !(await t.isAuthorized()))
            continue;
          let n = await t.connect({ isReconnecting: !0 }).catch(() => null);
          n &&
            (t.emitter.off("connect", e._internal.events.connect),
            t.emitter.on("change", e._internal.events.change),
            t.emitter.on("disconnect", e._internal.events.disconnect),
            e.setState((e) => {
              let r = new Map(c ? e.connections : new Map()).set(t.uid, {
                accounts: n.accounts,
                chainId: n.chainId,
                connector: t,
              });
              return { ...e, current: c ? e.current : t.uid, connections: r };
            }),
            u.push({ accounts: n.accounts, chainId: n.chainId, connector: t }),
            l.push(r),
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
          (n = !1),
          u
        );
      }
    },
    75794: (e, t, r) => {
      r.d(t, { i: () => C });
      var n = r(3488),
        i = r(7441);
      class s extends i.C {
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
      class o extends i.C {
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
      let u =
          /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
        l =
          /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
        d = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
        f = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
      async function h(e) {
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
            let r = new Image();
            (r.onload = () => {
              t(!0);
            }),
              (r.onerror = () => {
                t(!1);
              }),
              (r.src = e);
          });
        }
      }
      function p(e, t) {
        return e ? (e.endsWith("/") ? e.slice(0, -1) : e) : t;
      }
      function b({ uri: e, gatewayUrls: t }) {
        let r = d.test(e);
        if (r) return { uri: e, isOnChain: !0, isEncoded: r };
        let n = p(t?.ipfs, "https://ipfs.io"),
          i = p(t?.arweave, "https://arweave.net"),
          s = e.match(u),
          {
            protocol: a,
            subpath: c,
            target: h,
            subtarget: b = "",
          } = s?.groups || {},
          y = "ipns:/" === a || "ipns/" === c,
          m = "ipfs:/" === a || "ipfs/" === c || l.test(e);
        if (e.startsWith("http") && !y && !m) {
          let r = e;
          return (
            t?.arweave && (r = e.replace(/https:\/\/arweave.net/g, t?.arweave)),
            { uri: r, isOnChain: !1, isEncoded: !1 }
          );
        }
        if ((y || m) && h)
          return {
            uri: `${n}/${y ? "ipns" : "ipfs"}/${h}${b}`,
            isOnChain: !1,
            isEncoded: !1,
          };
        if ("ar:/" === a && h)
          return { uri: `${i}/${h}${b || ""}`, isOnChain: !1, isEncoded: !1 };
        let g = e.replace(f, "");
        if (
          (g.startsWith("<svg") && (g = `data:image/svg+xml;base64,${btoa(g)}`),
          g.startsWith("data:") || g.startsWith("{"))
        )
          return { uri: g, isOnChain: !0, isEncoded: !1 };
        throw new o({ uri: e });
      }
      function y(e) {
        if (
          "object" != typeof e ||
          (!("image" in e) && !("image_url" in e) && !("image_data" in e))
        )
          throw new s({ data: e });
        return e.image || e.image_url || e.image_data;
      }
      async function m({ gatewayUrls: e, uri: t }) {
        try {
          let r = await fetch(t).then((e) => e.json());
          return await g({ gatewayUrls: e, uri: y(r) });
        } catch {
          throw new o({ uri: t });
        }
      }
      async function g({ gatewayUrls: e, uri: t }) {
        let { uri: r, isOnChain: n } = b({ uri: t, gatewayUrls: e });
        if (n || (await h(r))) return r;
        throw new o({ uri: t });
      }
      async function v(e, { nft: t }) {
        if ("erc721" === t.namespace)
          return (0, n.J)(e, {
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
          return (0, n.J)(e, {
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
      async function w(e, { gatewayUrls: t, record: r }) {
        return /eip155:/i.test(r)
          ? x(e, { gatewayUrls: t, record: r })
          : g({ uri: r, gatewayUrls: t });
      }
      async function x(e, { gatewayUrls: t, record: r }) {
        let n = (function (e) {
            let t = e;
            t.startsWith("did:nft:") &&
              (t = t.replace("did:nft:", "").replace(/_/g, "/"));
            let [r, n, i] = t.split("/"),
              [s, o] = r.split(":"),
              [c, u] = n.split(":");
            if (!s || "eip155" !== s.toLowerCase())
              throw new a({ reason: "Only EIP-155 supported" });
            if (!o) throw new a({ reason: "Chain ID not found" });
            if (!u) throw new a({ reason: "Contract address not found" });
            if (!i) throw new a({ reason: "Token ID not found" });
            if (!c) throw new a({ reason: "ERC namespace not found" });
            return {
              chainID: Number.parseInt(o),
              namespace: c.toLowerCase(),
              contractAddress: u,
              tokenID: i,
            };
          })(r),
          {
            uri: i,
            isOnChain: s,
            isEncoded: o,
          } = b({ uri: await v(e, { nft: n }), gatewayUrls: t });
        if (
          s &&
          (i.includes("data:application/json;base64,") || i.startsWith("{"))
        )
          return g({
            uri: y(
              JSON.parse(
                o ? atob(i.replace("data:application/json;base64,", "")) : i
              )
            ),
            gatewayUrls: t,
          });
        let c = n.tokenID;
        return (
          "erc1155" === n.namespace &&
            (c = c.replace("0x", "").padStart(64, "0")),
          m({ gatewayUrls: t, uri: i.replace(/(?:0x)?{id}/, c) })
        );
      }
      var E = r(34524),
        P = r(65830);
      async function C(
        e,
        {
          blockNumber: t,
          blockTag: r,
          assetGatewayUrls: n,
          name: i,
          gatewayUrls: s,
          strict: a,
          universalResolverAddress: o,
        }
      ) {
        let c = await (0, E.T)(
          e,
          P.m,
          "getEnsText"
        )({
          blockNumber: t,
          blockTag: r,
          key: "avatar",
          name: i,
          universalResolverAddress: o,
          gatewayUrls: s,
          strict: a,
        });
        if (!c) return null;
        try {
          return await w(e, { record: c, gatewayUrls: n });
        } catch {
          return null;
        }
      }
    },
    75830: (e, t, r) => {
      r.d(t, { P: () => i });
      var n = r(67622);
      async function i(
        e,
        { address: t, blockNumber: r, blockTag: i = "latest", slot: s }
      ) {
        let a = void 0 !== r ? (0, n.cK)(r) : void 0;
        return await e.request({
          method: "eth_getStorageAt",
          params: [t, s, a || i],
        });
      }
    },
    76149: (e, t, r) => {
      r.d(t, { useConnect: () => u });
      var n = r(5041),
        i = r(77752);
      async function s(e, t) {
        let r;
        if (
          (r =
            "function" == typeof t.connector
              ? e._internal.connectors.setup(t.connector)
              : t.connector).uid === e.state.current
        )
          throw new i.nM();
        try {
          e.setState((e) => ({ ...e, status: "connecting" })),
            r.emitter.emit("message", { type: "connecting" });
          let { connector: n, ...i } = t,
            s = await r.connect(i),
            a = s.accounts;
          return (
            r.emitter.off("connect", e._internal.events.connect),
            r.emitter.on("change", e._internal.events.change),
            r.emitter.on("disconnect", e._internal.events.disconnect),
            await e.storage?.setItem("recentConnectorId", r.id),
            e.setState((e) => ({
              ...e,
              connections: new Map(e.connections).set(r.uid, {
                accounts: a,
                chainId: s.chainId,
                connector: r,
              }),
              current: r.uid,
              status: "connected",
            })),
            { accounts: a, chainId: s.chainId }
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
      var a = r(12115),
        o = r(53031),
        c = r(29889);
      function u() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          r = (0, o.useConfig)(e),
          i = { mutationFn: (e) => s(r, e), mutationKey: ["connect"] },
          { mutate: u, mutateAsync: l, ...d } = (0, n.n)({ ...t, ...i });
        return (
          (0, a.useEffect)(
            () =>
              r.subscribe(
                (e) => {
                  let { status: t } = e;
                  return t;
                },
                (e, t) => {
                  "connected" === t && "disconnected" === e && d.reset();
                }
              ),
            [r, d.reset]
          ),
          {
            ...d,
            connect: u,
            connectAsync: l,
            connectors: (0, c.useConnectors)({ config: r }),
          }
        );
      }
    },
    76347: (e, t, r) => {
      r.d(t, { $: () => u });
      var n = r(50920),
        i = r(7165),
        s = r(39853),
        a = r(25910),
        o = r(73504),
        c = r(52020),
        u = class extends a.Q {
          constructor(e, t) {
            super(),
              (this.options = t),
              (this.#e = e),
              (this.#w = null),
              (this.#x = (0, o.T)()),
              this.options.experimental_prefetchInRender ||
                this.#x.reject(
                  Error(
                    "experimental_prefetchInRender feature flag is not enabled"
                  )
                ),
              this.bindMethods(),
              this.setOptions(t);
          }
          #e;
          #E = void 0;
          #P = void 0;
          #t = void 0;
          #C;
          #I;
          #x;
          #w;
          #O;
          #A;
          #$;
          #B;
          #S;
          #M;
          #R = new Set();
          bindMethods() {
            this.refetch = this.refetch.bind(this);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              (this.#E.addObserver(this),
              l(this.#E, this.options) ? this.#T() : this.updateResult(),
              this.#j());
          }
          onUnsubscribe() {
            this.hasListeners() || this.destroy();
          }
          shouldFetchOnReconnect() {
            return d(this.#E, this.options, this.options.refetchOnReconnect);
          }
          shouldFetchOnWindowFocus() {
            return d(this.#E, this.options, this.options.refetchOnWindowFocus);
          }
          destroy() {
            (this.listeners = new Set()),
              this.#k(),
              this.#F(),
              this.#E.removeObserver(this);
          }
          setOptions(e) {
            let t = this.options,
              r = this.#E;
            if (
              ((this.options = this.#e.defaultQueryOptions(e)),
              void 0 !== this.options.enabled &&
                "boolean" != typeof this.options.enabled &&
                "function" != typeof this.options.enabled &&
                "boolean" != typeof (0, c.Eh)(this.options.enabled, this.#E))
            )
              throw Error(
                "Expected enabled to be a boolean or a callback that returns a boolean"
              );
            this.#N(),
              this.#E.setOptions(this.options),
              t._defaulted &&
                !(0, c.f8)(this.options, t) &&
                this.#e
                  .getQueryCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    query: this.#E,
                    observer: this,
                  });
            let n = this.hasListeners();
            n && f(this.#E, r, this.options, t) && this.#T(),
              this.updateResult(),
              n &&
                (this.#E !== r ||
                  (0, c.Eh)(this.options.enabled, this.#E) !==
                    (0, c.Eh)(t.enabled, this.#E) ||
                  (0, c.d2)(this.options.staleTime, this.#E) !==
                    (0, c.d2)(t.staleTime, this.#E)) &&
                this.#z();
            let i = this.#U();
            n &&
              (this.#E !== r ||
                (0, c.Eh)(this.options.enabled, this.#E) !==
                  (0, c.Eh)(t.enabled, this.#E) ||
                i !== this.#M) &&
              this.#q(i);
          }
          getOptimisticResult(e) {
            var t, r;
            let n = this.#e.getQueryCache().build(this.#e, e),
              i = this.createResult(n, e);
            return (
              (t = this),
              (r = i),
              (0, c.f8)(t.getCurrentResult(), r) ||
                ((this.#t = i),
                (this.#I = this.options),
                (this.#C = this.#E.state)),
              i
            );
          }
          getCurrentResult() {
            return this.#t;
          }
          trackResult(e, t) {
            return new Proxy(e, {
              get: (e, r) => (this.trackProp(r), t?.(r), Reflect.get(e, r)),
            });
          }
          trackProp(e) {
            this.#R.add(e);
          }
          getCurrentQuery() {
            return this.#E;
          }
          refetch({ ...e } = {}) {
            return this.fetch({ ...e });
          }
          fetchOptimistic(e) {
            let t = this.#e.defaultQueryOptions(e),
              r = this.#e.getQueryCache().build(this.#e, t);
            return r.fetch().then(() => this.createResult(r, t));
          }
          fetch(e) {
            return this.#T({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
              () => (this.updateResult(), this.#t)
            );
          }
          #T(e) {
            this.#N();
            let t = this.#E.fetch(this.options, e);
            return e?.throwOnError || (t = t.catch(c.lQ)), t;
          }
          #z() {
            this.#k();
            let e = (0, c.d2)(this.options.staleTime, this.#E);
            if (c.S$ || this.#t.isStale || !(0, c.gn)(e)) return;
            let t = (0, c.j3)(this.#t.dataUpdatedAt, e);
            this.#B = setTimeout(() => {
              this.#t.isStale || this.updateResult();
            }, t + 1);
          }
          #U() {
            return (
              ("function" == typeof this.options.refetchInterval
                ? this.options.refetchInterval(this.#E)
                : this.options.refetchInterval) ?? !1
            );
          }
          #q(e) {
            this.#F(),
              (this.#M = e),
              !c.S$ &&
                !1 !== (0, c.Eh)(this.options.enabled, this.#E) &&
                (0, c.gn)(this.#M) &&
                0 !== this.#M &&
                (this.#S = setInterval(() => {
                  (this.options.refetchIntervalInBackground ||
                    n.m.isFocused()) &&
                    this.#T();
                }, this.#M));
          }
          #j() {
            this.#z(), this.#q(this.#U());
          }
          #k() {
            this.#B && (clearTimeout(this.#B), (this.#B = void 0));
          }
          #F() {
            this.#S && (clearInterval(this.#S), (this.#S = void 0));
          }
          createResult(e, t) {
            let r,
              n = this.#E,
              i = this.options,
              a = this.#t,
              u = this.#C,
              d = this.#I,
              p = e !== n ? e.state : this.#P,
              { state: b } = e,
              y = { ...b },
              m = !1;
            if (t._optimisticResults) {
              let r = this.hasListeners(),
                a = !r && l(e, t),
                o = r && f(e, n, t, i);
              (a || o) && (y = { ...y, ...(0, s.k)(b.data, e.options) }),
                "isRestoring" === t._optimisticResults &&
                  (y.fetchStatus = "idle");
            }
            let { error: g, errorUpdatedAt: v, status: w } = y;
            r = y.data;
            let x = !1;
            if (
              void 0 !== t.placeholderData &&
              void 0 === r &&
              "pending" === w
            ) {
              let e;
              a?.isPlaceholderData && t.placeholderData === d?.placeholderData
                ? ((e = a.data), (x = !0))
                : (e =
                    "function" == typeof t.placeholderData
                      ? t.placeholderData(this.#$?.state.data, this.#$)
                      : t.placeholderData),
                void 0 !== e &&
                  ((w = "success"), (r = (0, c.pl)(a?.data, e, t)), (m = !0));
            }
            if (t.select && void 0 !== r && !x)
              if (a && r === u?.data && t.select === this.#O) r = this.#A;
              else
                try {
                  (this.#O = t.select),
                    (r = t.select(r)),
                    (r = (0, c.pl)(a?.data, r, t)),
                    (this.#A = r),
                    (this.#w = null);
                } catch (e) {
                  this.#w = e;
                }
            this.#w &&
              ((g = this.#w), (r = this.#A), (v = Date.now()), (w = "error"));
            let E = "fetching" === y.fetchStatus,
              P = "pending" === w,
              C = "error" === w,
              I = P && E,
              O = void 0 !== r,
              A = {
                status: w,
                fetchStatus: y.fetchStatus,
                isPending: P,
                isSuccess: "success" === w,
                isError: C,
                isInitialLoading: I,
                isLoading: I,
                data: r,
                dataUpdatedAt: y.dataUpdatedAt,
                error: g,
                errorUpdatedAt: v,
                failureCount: y.fetchFailureCount,
                failureReason: y.fetchFailureReason,
                errorUpdateCount: y.errorUpdateCount,
                isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
                isFetchedAfterMount:
                  y.dataUpdateCount > p.dataUpdateCount ||
                  y.errorUpdateCount > p.errorUpdateCount,
                isFetching: E,
                isRefetching: E && !P,
                isLoadingError: C && !O,
                isPaused: "paused" === y.fetchStatus,
                isPlaceholderData: m,
                isRefetchError: C && O,
                isStale: h(e, t),
                refetch: this.refetch,
                promise: this.#x,
              };
            if (this.options.experimental_prefetchInRender) {
              let t = (e) => {
                  "error" === A.status
                    ? e.reject(A.error)
                    : void 0 !== A.data && e.resolve(A.data);
                },
                r = () => {
                  t((this.#x = A.promise = (0, o.T)()));
                },
                i = this.#x;
              switch (i.status) {
                case "pending":
                  e.queryHash === n.queryHash && t(i);
                  break;
                case "fulfilled":
                  ("error" === A.status || A.data !== i.value) && r();
                  break;
                case "rejected":
                  ("error" !== A.status || A.error !== i.reason) && r();
              }
            }
            return A;
          }
          updateResult() {
            let e = this.#t,
              t = this.createResult(this.#E, this.options);
            (this.#C = this.#E.state),
              (this.#I = this.options),
              void 0 !== this.#C.data && (this.#$ = this.#E),
              (0, c.f8)(t, e) ||
                ((this.#t = t),
                this.#s({
                  listeners: (() => {
                    if (!e) return !0;
                    let { notifyOnChangeProps: t } = this.options,
                      r = "function" == typeof t ? t() : t;
                    if ("all" === r || (!r && !this.#R.size)) return !0;
                    let n = new Set(r ?? this.#R);
                    return (
                      this.options.throwOnError && n.add("error"),
                      Object.keys(this.#t).some(
                        (t) => this.#t[t] !== e[t] && n.has(t)
                      )
                    );
                  })(),
                }));
          }
          #N() {
            let e = this.#e.getQueryCache().build(this.#e, this.options);
            if (e === this.#E) return;
            let t = this.#E;
            (this.#E = e),
              (this.#P = e.state),
              this.hasListeners() &&
                (t?.removeObserver(this), e.addObserver(this));
          }
          onQueryUpdate() {
            this.updateResult(), this.hasListeners() && this.#j();
          }
          #s(e) {
            i.jG.batch(() => {
              e.listeners &&
                this.listeners.forEach((e) => {
                  e(this.#t);
                }),
                this.#e
                  .getQueryCache()
                  .notify({ query: this.#E, type: "observerResultsUpdated" });
            });
          }
        };
      function l(e, t) {
        return (
          (!1 !== (0, c.Eh)(t.enabled, e) &&
            void 0 === e.state.data &&
            ("error" !== e.state.status || !1 !== t.retryOnMount)) ||
          (void 0 !== e.state.data && d(e, t, t.refetchOnMount))
        );
      }
      function d(e, t, r) {
        if (!1 !== (0, c.Eh)(t.enabled, e)) {
          let n = "function" == typeof r ? r(e) : r;
          return "always" === n || (!1 !== n && h(e, t));
        }
        return !1;
      }
      function f(e, t, r, n) {
        return (
          (e !== t || !1 === (0, c.Eh)(n.enabled, e)) &&
          (!r.suspense || "error" !== e.state.status) &&
          h(e, r)
        );
      }
      function h(e, t) {
        return (
          !1 !== (0, c.Eh)(t.enabled, e) &&
          e.isStaleByTime((0, c.d2)(t.staleTime, e))
        );
      }
    },
    76365: (e, t, r) => {
      r.d(t, { K: () => E });
      var n = r(14493),
        i = r(15313),
        s = r(35109),
        a = r(20760),
        o = r(35883),
        c = r(17255),
        u = r(32840),
        l = r(67622),
        d = r(34524),
        f = r(60367),
        h = r(27493);
      let p =
        "0x6492649264926492649264926492649264926492649264926492649264926492";
      var b = r(93727),
        y = r(6158),
        m = r(13423),
        g = r(79731),
        v = r(80844),
        w = r(34132),
        x = r(81946);
      async function E(e, t) {
        let {
            address: r,
            factory: E,
            factoryData: P,
            hash: C,
            signature: I,
            universalSignatureVerifierAddress: O = e.chain?.contracts
              ?.universalSignatureVerifier?.address,
            ...A
          } = t,
          $ = (0, u.q)(I)
            ? I
            : "object" == typeof I && "r" in I && "s" in I
            ? (function ({ r: e, s: t, to: r = "hex", v: n, yParity: i }) {
                let s = (() => {
                    if (0 === i || 1 === i) return i;
                    if (n && (27n === n || 28n === n || n >= 35n))
                      return +(n % 2n === 0n);
                    throw Error("Invalid `v` or `yParity` value");
                  })(),
                  a = `0x${new w.secp256k1.Signature(
                    (0, h.uU)(e),
                    (0, h.uU)(t)
                  ).toCompactHex()}${0 === s ? "1b" : "1c"}`;
                return "hex" === r ? a : (0, v.aT)(a);
              })(I)
            : (0, l.My)(I),
          B = await (async () => {
            if ((!E && !P) || (0, b.iN)($, -32) === p) return $;
            let {
                address: e,
                data: t,
                signature: r,
                to: n = "hex",
              } = { address: E, data: P, signature: $ },
              i = (0, g.aP)([
                (0, m.h)(
                  [{ type: "address" }, { type: "bytes" }, { type: "bytes" }],
                  [e, t, r]
                ),
                p,
              ]);
            return "hex" === n ? i : (0, v.aT)(i);
          })();
        try {
          let t = O
              ? {
                  to: O,
                  data: (0, f.p)({
                    abi: n._,
                    functionName: "isValidSig",
                    args: [r, C, B],
                  }),
                  ...A,
                }
              : {
                  data: (0, a.m)({ abi: n._, args: [r, C, B], bytecode: i.nP }),
                  ...A,
                },
            { data: s } = await (0, d.T)(e, x.T, "call")(t);
          return (0, h.Nx)(s ?? "0x0");
        } catch (e) {
          try {
            if (
              (0, c.h)((0, o.b)(r), await (0, y.x)({ hash: C, signature: I }))
            )
              return !0;
          } catch {}
          if (e instanceof s.zX) return !1;
          throw e;
        }
      }
    },
    76654: (e, t, r) => {
      r.d(t, { N: () => u, b: () => c });
      var n = r(91836),
        i = r(27493),
        s = r(34524),
        a = r(23335),
        o = r(39112);
      async function c(e, t) {
        return u(e, t);
      }
      async function u(e, t) {
        let { block: r, chain: c = e.chain, request: u } = t || {};
        try {
          let t = c?.fees?.maxPriorityFeePerGas ?? c?.fees?.defaultPriorityFee;
          if ("function" == typeof t) {
            let n = r || (await (0, s.T)(e, a.g, "getBlock")({})),
              i = await t({ block: n, client: e, request: u });
            if (null === i) throw Error();
            return i;
          }
          if (void 0 !== t) return t;
          let n = await e.request({ method: "eth_maxPriorityFeePerGas" });
          return (0, i.uU)(n);
        } catch {
          let [t, i] = await Promise.all([
            r ? Promise.resolve(r) : (0, s.T)(e, a.g, "getBlock")({}),
            (0, s.T)(e, o.L, "getGasPrice")({}),
          ]);
          if ("bigint" != typeof t.baseFeePerGas) throw new n.pw();
          let c = i - t.baseFeePerGas;
          if (c < 0n) return 0n;
          return c;
        }
      }
    },
    76743: (e, t, r) => {
      r.d(t, { Bv: () => s });
      var n = r(67622);
      let i = {
        legacy: "0x0",
        eip2930: "0x1",
        eip1559: "0x2",
        eip4844: "0x3",
        eip7702: "0x4",
      };
      function s(e) {
        let t = {};
        return (
          void 0 !== e.authorizationList &&
            (t.authorizationList = e.authorizationList.map((e) => ({
              address: e.address,
              r: e.r ? (0, n.cK)(BigInt(e.r)) : e.r,
              s: e.s ? (0, n.cK)(BigInt(e.s)) : e.s,
              chainId: (0, n.cK)(e.chainId),
              nonce: (0, n.cK)(e.nonce),
              ...(void 0 !== e.yParity
                ? { yParity: (0, n.cK)(e.yParity) }
                : {}),
              ...(void 0 !== e.v && void 0 === e.yParity
                ? { v: (0, n.cK)(e.v) }
                : {}),
            }))),
          void 0 !== e.accessList && (t.accessList = e.accessList),
          void 0 !== e.blobVersionedHashes &&
            (t.blobVersionedHashes = e.blobVersionedHashes),
          void 0 !== e.blobs &&
            ("string" != typeof e.blobs[0]
              ? (t.blobs = e.blobs.map((e) => (0, n.My)(e)))
              : (t.blobs = e.blobs)),
          void 0 !== e.data && (t.data = e.data),
          void 0 !== e.from && (t.from = e.from),
          void 0 !== e.gas && (t.gas = (0, n.cK)(e.gas)),
          void 0 !== e.gasPrice && (t.gasPrice = (0, n.cK)(e.gasPrice)),
          void 0 !== e.maxFeePerBlobGas &&
            (t.maxFeePerBlobGas = (0, n.cK)(e.maxFeePerBlobGas)),
          void 0 !== e.maxFeePerGas &&
            (t.maxFeePerGas = (0, n.cK)(e.maxFeePerGas)),
          void 0 !== e.maxPriorityFeePerGas &&
            (t.maxPriorityFeePerGas = (0, n.cK)(e.maxPriorityFeePerGas)),
          void 0 !== e.nonce && (t.nonce = (0, n.cK)(e.nonce)),
          void 0 !== e.to && (t.to = e.to),
          void 0 !== e.type && (t.type = i[e.type]),
          void 0 !== e.value && (t.value = (0, n.cK)(e.value)),
          t
        );
      }
    },
    77136: (e, t, r) => {
      r.d(t, { eL: () => n, pj: () => s, sz: () => i });
      let n = { gwei: 9, wei: 18 },
        i = { ether: -9, wei: 9 },
        s = { ether: -18, gwei: -9 };
    },
    77752: (e, t, r) => {
      r.d(t, {
        HF: () => u,
        aj: () => o,
        gC: () => a,
        nM: () => s,
        nk: () => i,
        xU: () => c,
      });
      var n = r(95782);
      class i extends n.C {
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
      class s extends n.C {
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
      class a extends n.C {
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
      n.C;
      class o extends n.C {
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
      class c extends n.C {
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
      class u extends n.C {
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
    78008: (e, t, r) => {
      r.d(t, { R: () => h });
      var n = r(99702),
        i = r(7441);
      class s extends i.C {
        constructor(e) {
          super(`Filter type "${e}" is not supported.`, {
            name: "FilterTypeNotSupportedError",
          });
        }
      }
      var a = r(80844),
        o = r(24578),
        c = r(399),
        u = r(13423),
        l = r(21159),
        d = r(23008);
      let f = "/docs/contract/encodeEventTopics";
      function h(e) {
        let { abi: t, eventName: r, args: i } = e,
          s = t[0];
        if (r) {
          let e = (0, d.iY)({ abi: t, name: r });
          if (!e) throw new n.M_(r, { docsPath: f });
          s = e;
        }
        if ("event" !== s.type) throw new n.M_(void 0, { docsPath: f });
        let a = (0, l.B)(s),
          o = (0, c.h)(a),
          u = [];
        if (i && "inputs" in s) {
          let e = s.inputs?.filter((e) => "indexed" in e && e.indexed),
            t = Array.isArray(i)
              ? i
              : Object.values(i).length > 0
              ? e?.map((e) => i[e.name]) ?? []
              : [];
          t.length > 0 &&
            (u =
              e?.map((e, r) =>
                Array.isArray(t[r])
                  ? t[r].map((n, i) => p({ param: e, value: t[r][i] }))
                  : void 0 !== t[r] && null !== t[r]
                  ? p({ param: e, value: t[r] })
                  : null
              ) ?? []);
        }
        return [o, ...u];
      }
      function p({ param: e, value: t }) {
        if ("string" === e.type || "bytes" === e.type)
          return (0, o.S)((0, a.ZJ)(t));
        if ("tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/))
          throw new s(e.type);
        return (0, u.h)([e], [t]);
      }
    },
    79183: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (e, t, r) =>
        JSON.stringify(
          e,
          (e, r) => {
            let n = "bigint" == typeof r ? r.toString() : r;
            return "function" == typeof t ? t(e, n) : n;
          },
          r
        );
    },
    79225: (e, t, r) => {
      r.d(t, { j: () => l });
      var n = r(99702),
        i = r(87094),
        s = r(399),
        a = r(97118),
        o = r(43935),
        c = r(21159);
      let u = "/docs/contract/decodeEventLog";
      function l(e) {
        let { abi: t, data: r, strict: l, topics: d } = e,
          f = l ?? !0,
          [h, ...p] = d;
        if (!h) throw new n._z({ docsPath: u });
        let b =
          1 === t.length
            ? t[0]
            : t.find((e) => "event" === e.type && h === (0, s.h)((0, c.B)(e)));
        if (!(b && "name" in b) || "event" !== b.type)
          throw new n.kE(h, { docsPath: u });
        let { name: y, inputs: m } = b,
          g = m?.some((e) => !("name" in e && e.name)),
          v = g ? [] : {},
          w = m.filter((e) => "indexed" in e && e.indexed);
        for (let e = 0; e < w.length; e++) {
          let t = w[e],
            r = p[e];
          if (!r) throw new n.l3({ abiItem: b, param: t });
          v[g ? e : t.name || e] = (function ({ param: e, value: t }) {
            return "string" === e.type ||
              "bytes" === e.type ||
              "tuple" === e.type ||
              e.type.match(/^(.*)\[(\d+)?\]$/)
              ? t
              : ((0, o.n)([e], t) || [])[0];
          })({ param: t, value: r });
        }
        let x = m.filter((e) => !("indexed" in e && e.indexed));
        if (x.length > 0) {
          if (r && "0x" !== r)
            try {
              let e = (0, o.n)(x, r);
              if (e)
                if (g) v = [...v, ...e];
                else for (let t = 0; t < x.length; t++) v[x[t].name] = e[t];
            } catch (e) {
              if (f) {
                if (e instanceof n.Iy || e instanceof a.SK)
                  throw new n.fo({
                    abiItem: b,
                    data: r,
                    params: x,
                    size: (0, i.E)(r),
                  });
                throw e;
              }
            }
          else if (f)
            throw new n.fo({ abiItem: b, data: "0x", params: x, size: 0 });
        }
        return { eventName: y, args: Object.values(v).length > 0 ? v : void 0 };
      }
    },
    79731: (e, t, r) => {
      function n(e) {
        return "string" == typeof e[0]
          ? i(e)
          : (function (e) {
              let t = 0;
              for (let r of e) t += r.length;
              let r = new Uint8Array(t),
                n = 0;
              for (let t of e) r.set(t, n), (n += t.length);
              return r;
            })(e);
      }
      function i(e) {
        return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
      }
      r.d(t, { aP: () => i, xW: () => n });
    },
    80844: (e, t, r) => {
      r.d(t, { Af: () => h, ZJ: () => u, aT: () => f });
      var n = r(7441),
        i = r(32840),
        s = r(36984),
        a = r(27493),
        o = r(67622);
      let c = new TextEncoder();
      function u(e, t = {}) {
        var r, n;
        return "number" == typeof e || "bigint" == typeof e
          ? ((r = e), (n = t), f((0, o.cK)(r, n)))
          : "boolean" == typeof e
          ? (function (e, t = {}) {
              let r = new Uint8Array(1);
              return ((r[0] = Number(e)), "number" == typeof t.size)
                ? ((0, a.Sl)(r, { size: t.size }),
                  (0, s.eV)(r, { size: t.size }))
                : r;
            })(e, t)
          : (0, i.q)(e)
          ? f(e, t)
          : h(e, t);
      }
      let l = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function d(e) {
        return e >= l.zero && e <= l.nine
          ? e - l.zero
          : e >= l.A && e <= l.F
          ? e - (l.A - 10)
          : e >= l.a && e <= l.f
          ? e - (l.a - 10)
          : void 0;
      }
      function f(e, t = {}) {
        let r = e;
        t.size &&
          ((0, a.Sl)(r, { size: t.size }),
          (r = (0, s.eV)(r, { dir: "right", size: t.size })));
        let i = r.slice(2);
        i.length % 2 && (i = `0${i}`);
        let o = i.length / 2,
          c = new Uint8Array(o);
        for (let e = 0, t = 0; e < o; e++) {
          let r = d(i.charCodeAt(t++)),
            s = d(i.charCodeAt(t++));
          if (void 0 === r || void 0 === s)
            throw new n.C(
              `Invalid byte sequence ("${i[t - 2]}${i[t - 1]}" in "${i}").`
            );
          c[e] = 16 * r + s;
        }
        return c;
      }
      function h(e, t = {}) {
        let r = c.encode(e);
        return "number" == typeof t.size
          ? ((0, a.Sl)(r, { size: t.size }),
            (0, s.eV)(r, { dir: "right", size: t.size }))
          : r;
      }
    },
    81379: (e, t, r) => {
      r.d(t, {
        CL: () => c,
        D5: () => l,
        Di: () => f,
        G1: () => S,
        Gi: () => u,
        L5: () => I,
        MI: () => R,
        RV: () => E,
        Sf: () => x,
        WT: () => O,
        XU: () => o,
        YW: () => b,
        ab: () => y,
        bq: () => d,
        cg: () => $,
        ch: () => C,
        hA: () => h,
        hl: () => A,
        jz: () => M,
        qZ: () => p,
        s0: () => m,
        sV: () => w,
        uL: () => B,
        vx: () => v,
        xQ: () => g,
        xq: () => P,
      });
      var n = r(7441),
        i = r(90557);
      class s extends n.C {
        constructor(
          e,
          { code: t, docsPath: r, metaMessages: n, name: s, shortMessage: a }
        ) {
          super(a, {
            cause: e,
            docsPath: r,
            metaMessages: n || e?.metaMessages,
            name: s || "RpcError",
          }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.name = s || e.name),
            (this.code = e instanceof i.J8 ? e.code : t ?? -1);
        }
      }
      class a extends s {
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
      class o extends s {
        constructor(e) {
          super(e, {
            code: o.code,
            name: "ParseRpcError",
            shortMessage:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          });
        }
      }
      Object.defineProperty(o, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32700,
      });
      class c extends s {
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
      class u extends s {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: u.code,
            name: "MethodNotFoundRpcError",
            shortMessage: `The method${
              t ? ` "${t}"` : ""
            } does not exist / is not available.`,
          });
        }
      }
      Object.defineProperty(u, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32601,
      });
      class l extends s {
        constructor(e) {
          super(e, {
            code: l.code,
            name: "InvalidParamsRpcError",
            shortMessage:
              "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(l, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32602,
      });
      class d extends s {
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
      class f extends s {
        constructor(e) {
          super(e, {
            code: f.code,
            name: "InvalidInputRpcError",
            shortMessage:
              "Missing or invalid parameters.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(f, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32e3,
      });
      class h extends s {
        constructor(e) {
          super(e, {
            code: h.code,
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
      Object.defineProperty(h, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32001,
      });
      class p extends s {
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
      class b extends s {
        constructor(e) {
          super(e, {
            code: b.code,
            name: "TransactionRejectedRpcError",
            shortMessage: "Transaction creation failed.",
          });
        }
      }
      Object.defineProperty(b, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32003,
      });
      class y extends s {
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
      class m extends s {
        constructor(e) {
          super(e, {
            code: m.code,
            name: "LimitExceededRpcError",
            shortMessage: "Request exceeds defined limit.",
          });
        }
      }
      Object.defineProperty(m, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32005,
      });
      class g extends s {
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
      class v extends a {
        constructor(e) {
          super(e, {
            code: v.code,
            name: "UserRejectedRequestError",
            shortMessage: "User rejected the request.",
          });
        }
      }
      Object.defineProperty(v, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4001,
      });
      class w extends a {
        constructor(e) {
          super(e, {
            code: w.code,
            name: "UnauthorizedProviderError",
            shortMessage:
              "The requested method and/or account has not been authorized by the user.",
          });
        }
      }
      Object.defineProperty(w, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4100,
      });
      class x extends a {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: x.code,
            name: "UnsupportedProviderMethodError",
            shortMessage: `The Provider does not support the requested method${
              t ? ` " ${t}"` : ""
            }.`,
          });
        }
      }
      Object.defineProperty(x, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4200,
      });
      class E extends a {
        constructor(e) {
          super(e, {
            code: E.code,
            name: "ProviderDisconnectedError",
            shortMessage: "The Provider is disconnected from all chains.",
          });
        }
      }
      Object.defineProperty(E, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4900,
      });
      class P extends a {
        constructor(e) {
          super(e, {
            code: P.code,
            name: "ChainDisconnectedError",
            shortMessage:
              "The Provider is not connected to the requested chain.",
          });
        }
      }
      Object.defineProperty(P, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4901,
      });
      class C extends a {
        constructor(e) {
          super(e, {
            code: C.code,
            name: "SwitchChainError",
            shortMessage: "An error occurred when attempting to switch chain.",
          });
        }
      }
      Object.defineProperty(C, "code", {
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
      class O extends a {
        constructor(e) {
          super(e, {
            code: O.code,
            name: "UnsupportedChainIdError",
            shortMessage:
              "This Wallet does not support the requested chain ID.",
          });
        }
      }
      Object.defineProperty(O, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5710,
      });
      class A extends a {
        constructor(e) {
          super(e, {
            code: A.code,
            name: "DuplicateIdError",
            shortMessage: "There is already a bundle submitted with this ID.",
          });
        }
      }
      Object.defineProperty(A, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5720,
      });
      class $ extends a {
        constructor(e) {
          super(e, {
            code: $.code,
            name: "UnknownBundleIdError",
            shortMessage: "This bundle id is unknown / has not been submitted",
          });
        }
      }
      Object.defineProperty($, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5730,
      });
      class B extends a {
        constructor(e) {
          super(e, {
            code: B.code,
            name: "BundleTooLargeError",
            shortMessage:
              "The call bundle is too large for the Wallet to process.",
          });
        }
      }
      Object.defineProperty(B, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 5740,
      });
      class S extends a {
        constructor(e) {
          super(e, {
            code: S.code,
            name: "AtomicReadyWalletRejectedUpgradeError",
            shortMessage:
              "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade.",
          });
        }
      }
      Object.defineProperty(S, "code", {
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
      class R extends s {
        constructor(e) {
          super(e, {
            name: "UnknownRpcError",
            shortMessage: "An unknown RPC error occurred.",
          });
        }
      }
    },
    81757: (e, t, r) => {
      r.d(t, { P: () => o });
      var n = r(65003),
        i = r(35883);
      let s = /^0x[a-fA-F0-9]{40}$/,
        a = new n.A(8192);
      function o(e, t) {
        let { strict: r = !0 } = t ?? {},
          n = `${e}.${r}`;
        if (a.has(n)) return a.get(n);
        let o =
          !!s.test(e) && (e.toLowerCase() === e || !r || (0, i.o)(e) === e);
        return a.set(n, o), o;
      }
    },
    81946: (e, t, r) => {
      r.d(t, { T: () => I });
      var n = r(17130),
        i = r(38958),
        s = r(27442);
      function a(e) {
        let t = (0, i.e)(e),
          r = [],
          a = e.length;
        for (let i = 0; i < a; i++) {
          let a = e[i];
          (0, n.WL)(a) || r.push((0, s.uT)(a, t));
        }
        return r;
      }
      var o = r(35791),
        c = r(19405),
        u = r(14493),
        l = r(15313),
        d = r(7441),
        f = r(30445),
        h = r(35109),
        p = r(69330),
        b = r(20760),
        y = r(60367),
        m = r(13861),
        g = r(67622),
        v = r(23360),
        w = r(7671),
        x = r(76743),
        E = r(85569),
        P = r(25507),
        C = r(65358);
      async function I(e, t) {
        let {
            account: n = e.account,
            batch: i = !!e.batch?.multicall,
            blockNumber: s,
            blockTag: u = "latest",
            accessList: p,
            blobs: y,
            blockOverrides: m,
            code: E,
            data: I,
            factory: A,
            factoryData: $,
            gas: B,
            gasPrice: S,
            maxFeePerBlobGas: M,
            maxFeePerGas: R,
            maxPriorityFeePerGas: T,
            nonce: j,
            to: k,
            value: F,
            stateOverride: N,
            ...z
          } = t,
          U = n ? (0, c.J)(n) : void 0;
        if (E && (A || $))
          throw new d.C(
            "Cannot provide both `code` & `factory`/`factoryData` as parameters."
          );
        if (E && k)
          throw new d.C("Cannot provide both `code` & `to` as parameters.");
        let q = E && I,
          L = A && $ && k && I,
          _ = q || L,
          D = q
            ? (function (e) {
                let { code: t, data: r } = e;
                return (0, b.m)({
                  abi: a(["constructor(bytes, bytes)"]),
                  bytecode: l.LX,
                  args: [t, r],
                });
              })({ code: E, data: I })
            : L
            ? (function (e) {
                let { data: t, factory: r, factoryData: n, to: i } = e;
                return (0, b.m)({
                  abi: a(["constructor(address, bytes, address, bytes)"]),
                  bytecode: l.WN,
                  args: [i, t, r, n],
                });
              })({ data: I, factory: A, factoryData: $, to: k })
            : I;
        try {
          (0, C.c)(t);
          let r = ("bigint" == typeof s ? (0, g.cK)(s) : void 0) || u,
            n = m ? o.J(m) : void 0,
            a = (0, P.yH)(N),
            c = e.chain?.formatters?.transactionRequest?.format,
            l = (c || x.Bv)({
              ...(0, w.o)(z, { format: c }),
              from: U?.address,
              accessList: p,
              blobs: y,
              data: D,
              gas: B,
              gasPrice: S,
              maxFeePerBlobGas: M,
              maxFeePerGas: R,
              maxPriorityFeePerGas: T,
              nonce: j,
              to: _ ? void 0 : k,
              value: F,
            });
          if (
            i &&
            (function ({ request: e }) {
              let { data: t, to: r, ...n } = e;
              return (
                !(!t || t.startsWith("0x82ad56cb")) &&
                !!r &&
                !(Object.values(n).filter((e) => void 0 !== e).length > 0)
              );
            })({ request: l }) &&
            !a &&
            !n
          )
            try {
              return await O(e, { ...l, blockNumber: s, blockTag: u });
            } catch (e) {
              if (!(e instanceof f.YE) && !(e instanceof f.rj)) throw e;
            }
          let d = (() => {
              let e = [l, r];
              return a && n
                ? [...e, a, n]
                : a
                ? [...e, a]
                : n
                ? [...e, {}, n]
                : e;
            })(),
            h = await e.request({ method: "eth_call", params: d });
          if ("0x" === h) return { data: void 0 };
          return { data: h };
        } catch (a) {
          let n = (function (e) {
              if (!(e instanceof d.C)) return;
              let t = e.walk();
              return "object" == typeof t?.data ? t.data?.data : t.data;
            })(a),
            { offchainLookup: i, offchainLookupSignature: s } = await r
              .e(1026)
              .then(r.bind(r, 31026));
          if (!1 !== e.ccipRead && n?.slice(0, 10) === s && k)
            return { data: await i(e, { data: n, to: k }) };
          if (_ && n?.slice(0, 10) === "0x101bb98d")
            throw new h.Po({ factory: A });
          throw (0, v.d)(a, { ...t, account: U, chain: e.chain });
        }
      }
      async function O(e, t) {
        let { batchSize: r = 1024, wait: n = 0 } =
            "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
          {
            blockNumber: i,
            blockTag: s = "latest",
            data: a,
            multicallAddress: o,
            to: c,
          } = t,
          l = o;
        if (!l) {
          if (!e.chain) throw new f.YE();
          l = (0, m.M)({
            blockNumber: i,
            chain: e.chain,
            contract: "multicall3",
          });
        }
        let d = ("bigint" == typeof i ? (0, g.cK)(i) : void 0) || s,
          { schedule: b } = (0, E.u)({
            id: `${e.uid}.${d}`,
            wait: n,
            shouldSplitBatch: (e) =>
              e.reduce((e, { data: t }) => e + (t.length - 2), 0) > 2 * r,
            fn: async (t) => {
              let r = t.map((e) => ({
                  allowFailure: !0,
                  callData: e.data,
                  target: e.to,
                })),
                n = (0, y.p)({
                  abi: u.v2,
                  args: [r],
                  functionName: "aggregate3",
                }),
                i = await e.request({
                  method: "eth_call",
                  params: [{ data: n, to: l }, d],
                });
              return (0, p.e)({
                abi: u.v2,
                args: [r],
                functionName: "aggregate3",
                data: i || "0x",
              });
            },
          }),
          [{ returnData: v, success: w }] = await b({ data: a, to: c });
        if (!w) throw new h.$S({ data: v });
        return "0x" === v ? { data: void 0 } : { data: v };
      }
    },
    81960: (e, t, r) => {
      e.exports = r(98335);
    },
    83185: (e, t, r) => {
      r.d(t, { w: () => s });
      var n = r(7900),
        i = r(76365);
      async function s(e, t) {
        let {
            address: r,
            factory: s,
            factoryData: a,
            signature: o,
            message: c,
            primaryType: u,
            types: l,
            domain: d,
            ...f
          } = t,
          h = (0, n.Zh)({ message: c, primaryType: u, types: l, domain: d });
        return (0, i.K)(e, {
          address: r,
          factory: s,
          factoryData: a,
          hash: h,
          signature: o,
          ...f,
        });
      }
    },
    83987: (e, t, r) => {
      r.d(t, { g: () => d });
      var n = r(6158),
        i = r(79731),
        s = r(80844),
        a = r(67622),
        o = r(7441),
        c = r(87456);
      function u(e) {
        if (e < 256) return 1;
        if (e < 65536) return 2;
        if (e < 0x1000000) return 3;
        if (e < 0x100000000) return 4;
        throw new o.C("Length is too large.");
      }
      var l = r(24578);
      async function d(e) {
        let { authorization: t, signature: r } = e;
        return (0, n.x)({
          hash: (function (e) {
            let { chainId: t, nonce: r, to: n } = e,
              o = e.contractAddress ?? e.address,
              d = (0, l.S)(
                (0, i.aP)([
                  "0x05",
                  (function (e, t = "hex") {
                    let r = (function e(t) {
                        return Array.isArray(t)
                          ? (function (e) {
                              let t = e.reduce((e, t) => e + t.length, 0),
                                r = u(t);
                              return {
                                length: t <= 55 ? 1 + t : 1 + r + t,
                                encode(n) {
                                  for (let { encode: i } of (t <= 55
                                    ? n.pushByte(192 + t)
                                    : (n.pushByte(247 + r),
                                      1 === r
                                        ? n.pushUint8(t)
                                        : 2 === r
                                        ? n.pushUint16(t)
                                        : 3 === r
                                        ? n.pushUint24(t)
                                        : n.pushUint32(t)),
                                  e))
                                    i(n);
                                },
                              };
                            })(t.map((t) => e(t)))
                          : (function (e) {
                              let t = "string" == typeof e ? (0, s.aT)(e) : e,
                                r = u(t.length);
                              return {
                                length:
                                  1 === t.length && t[0] < 128
                                    ? 1
                                    : t.length <= 55
                                    ? 1 + t.length
                                    : 1 + r + t.length,
                                encode(e) {
                                  (1 === t.length && t[0] < 128) ||
                                    (t.length <= 55
                                      ? e.pushByte(128 + t.length)
                                      : (e.pushByte(183 + r),
                                        1 === r
                                          ? e.pushUint8(t.length)
                                          : 2 === r
                                          ? e.pushUint16(t.length)
                                          : 3 === r
                                          ? e.pushUint24(t.length)
                                          : e.pushUint32(t.length))),
                                    e.pushBytes(t);
                                },
                              };
                            })(t);
                      })(e),
                      n = (0, c.l)(new Uint8Array(r.length));
                    return (r.encode(n), "hex" === t)
                      ? (0, a.My)(n.bytes)
                      : n.bytes;
                  })([t ? (0, a.cK)(t) : "0x", o, r ? (0, a.cK)(r) : "0x"]),
                ])
              );
            return "bytes" === n ? (0, s.aT)(d) : d;
          })(t),
          signature: r ?? t,
        });
      }
    },
    84014: (e, t, r) => {
      r.d(t, { n: () => p });
      var n = r(20789),
        i = r(69432),
        s = r(34524),
        a = r(72342),
        o = r(62739),
        c = r(42142),
        u = r(79183),
        l = r(23335),
        d = r(30106),
        f = r(13494),
        h = r(85543);
      async function p(
        e,
        {
          confirmations: t = 1,
          hash: r,
          onReplaced: p,
          pollingInterval: b = e.pollingInterval,
          retryCount: y = 6,
          retryDelay: m = ({ count: e }) => 200 * ~~(1 << e),
          timeout: g = 18e4,
        }
      ) {
        let v,
          w,
          x,
          E,
          P,
          C = (0, u.A)(["waitForTransactionReceipt", e.uid, r]),
          I = !1,
          { promise: O, resolve: A, reject: $ } = (0, o.Y)(),
          B = g
            ? setTimeout(() => {
                P(), E(), $(new i.WA({ hash: r }));
              }, g)
            : void 0;
        return (
          (E = (0, a.lB)(C, { onReplaced: p, resolve: A, reject: $ }, (a) => {
            P = (0, s.T)(
              e,
              h.q,
              "watchBlockNumber"
            )({
              emitMissed: !0,
              emitOnBegin: !0,
              poll: !0,
              pollingInterval: b,
              async onBlockNumber(o) {
                let u = (e) => {
                    clearTimeout(B), P(), e(), E();
                  },
                  h = o;
                if (!I)
                  try {
                    if (x) {
                      if (
                        t > 1 &&
                        (!x.blockNumber || h - x.blockNumber + 1n < t)
                      )
                        return;
                      u(() => a.resolve(x));
                      return;
                    }
                    if (
                      (v ||
                        ((I = !0),
                        await (0, c.b)(
                          async () => {
                            (v = await (0, s.T)(
                              e,
                              d.x,
                              "getTransaction"
                            )({ hash: r })).blockNumber && (h = v.blockNumber);
                          },
                          { delay: m, retryCount: y }
                        ),
                        (I = !1)),
                      (x = await (0, s.T)(
                        e,
                        f.h,
                        "getTransactionReceipt"
                      )({ hash: r })),
                      t > 1 && (!x.blockNumber || h - x.blockNumber + 1n < t))
                    )
                      return;
                    u(() => a.resolve(x));
                  } catch (r) {
                    if (r instanceof i.Kz || r instanceof i.Kc) {
                      if (!v) {
                        I = !1;
                        return;
                      }
                      try {
                        (w = v), (I = !0);
                        let r = await (0, c.b)(
                          () =>
                            (0, s.T)(
                              e,
                              l.g,
                              "getBlock"
                            )({ blockNumber: h, includeTransactions: !0 }),
                          {
                            delay: m,
                            retryCount: y,
                            shouldRetry: ({ error: e }) => e instanceof n.l,
                          }
                        );
                        I = !1;
                        let i = r.transactions.find(
                          ({ from: e, nonce: t }) =>
                            e === w.from && t === w.nonce
                        );
                        if (
                          !i ||
                          ((x = await (0, s.T)(
                            e,
                            f.h,
                            "getTransactionReceipt"
                          )({ hash: i.hash })),
                          t > 1 &&
                            (!x.blockNumber || h - x.blockNumber + 1n < t))
                        )
                          return;
                        let o = "replaced";
                        i.to === w.to &&
                        i.value === w.value &&
                        i.input === w.input
                          ? (o = "repriced")
                          : i.from === i.to &&
                            0n === i.value &&
                            (o = "cancelled"),
                          u(() => {
                            a.onReplaced?.({
                              reason: o,
                              replacedTransaction: w,
                              transaction: i,
                              transactionReceipt: x,
                            }),
                              a.resolve(x);
                          });
                      } catch (e) {
                        u(() => a.reject(e));
                      }
                    } else u(() => a.reject(r));
                  }
              },
            });
          })),
          O
        );
      }
    },
    84701: (e, t, r) => {
      r.d(t, { UG: () => a, xo: () => i, zz: () => s });
      var n = r(68321);
      class i extends n.C {
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
      class s extends n.C {
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
      class a extends n.C {
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
    85543: (e, t, r) => {
      r.d(t, { q: () => u });
      var n = r(27493),
        i = r(34524),
        s = r(72342),
        a = r(86435),
        o = r(79183),
        c = r(94181);
      function u(
        e,
        {
          emitOnBegin: t = !1,
          emitMissed: r = !1,
          onBlockNumber: u,
          onError: l,
          poll: d,
          pollingInterval: f = e.pollingInterval,
        }
      ) {
        let h;
        return (
          void 0 !== d
            ? d
            : "webSocket" !== e.transport.type &&
              ("fallback" !== e.transport.type ||
                "webSocket" !== e.transport.transports[0].config.type)
        )
          ? (() => {
              let n = (0, o.A)(["watchBlockNumber", e.uid, t, r, f]);
              return (0, s.lB)(n, { onBlockNumber: u, onError: l }, (n) =>
                (0, a.w)(
                  async () => {
                    try {
                      let t = await (0, i.T)(
                        e,
                        c.G,
                        "getBlockNumber"
                      )({ cacheTime: 0 });
                      if (h) {
                        if (t === h) return;
                        if (t - h > 1 && r)
                          for (let e = h + 1n; e < t; e++)
                            n.onBlockNumber(e, h), (h = e);
                      }
                      (!h || t > h) && (n.onBlockNumber(t, h), (h = t));
                    } catch (e) {
                      n.onError?.(e);
                    }
                  },
                  { emitOnBegin: t, interval: f }
                )
              );
            })()
          : (() => {
              let i = (0, o.A)(["watchBlockNumber", e.uid, t, r]);
              return (0, s.lB)(i, { onBlockNumber: u, onError: l }, (t) => {
                let r = !0,
                  i = () => (r = !1);
                return (
                  (async () => {
                    try {
                      let s = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => "webSocket" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        { unsubscribe: a } = await s.subscribe({
                          params: ["newHeads"],
                          onData(e) {
                            if (!r) return;
                            let i = (0, n.uU)(e.result?.number);
                            t.onBlockNumber(i, h), (h = i);
                          },
                          onError(e) {
                            t.onError?.(e);
                          },
                        });
                      (i = a), r || i();
                    } catch (e) {
                      l?.(e);
                    }
                  })(),
                  () => i()
                );
              });
            })();
      }
    },
    85569: (e, t, r) => {
      r.d(t, { u: () => s });
      var n = r(62739);
      let i = new Map();
      function s({ fn: e, id: t, shouldSplitBatch: r, wait: s = 0, sort: a }) {
        let o = async () => {
            let t = l();
            c();
            let r = t.map(({ args: e }) => e);
            0 !== r.length &&
              e(r)
                .then((e) => {
                  a && Array.isArray(e) && e.sort(a);
                  for (let r = 0; r < t.length; r++) {
                    let { resolve: n } = t[r];
                    n?.([e[r], e]);
                  }
                })
                .catch((e) => {
                  for (let r = 0; r < t.length; r++) {
                    let { reject: n } = t[r];
                    n?.(e);
                  }
                });
          },
          c = () => i.delete(t),
          u = () => l().map(({ args: e }) => e),
          l = () => i.get(t) || [],
          d = (e) => i.set(t, [...l(), e]);
        return {
          flush: c,
          async schedule(e) {
            let { promise: t, resolve: i, reject: a } = (0, n.Y)();
            return (
              (r?.([...u(), e]) && o(), l().length > 0)
                ? d({ args: e, resolve: i, reject: a })
                : (d({ args: e, resolve: i, reject: a }), setTimeout(o, s)),
              t
            );
          },
        };
      }
    },
    85616: (e, t, r) => {
      r.d(t, { useSignMessage: () => u });
      var n = r(5041),
        i = r(41246),
        s = r(70030),
        a = r(95990);
      async function o(e, t) {
        let r,
          { account: n, connector: o, ...c } = t;
        return (
          (r =
            "object" == typeof n && "local" === n.type
              ? e.getClient()
              : await (0, a.r)(e, { account: n, connector: o })),
          (0, s.T)(
            r,
            i.l,
            "signMessage"
          )({ ...c, ...(n ? { account: n } : {}) })
        );
      }
      var c = r(53031);
      function u() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: r } = t,
          i =
            ((e = (0, c.useConfig)(t)),
            { mutationFn: (t) => o(e, t), mutationKey: ["signMessage"] }),
          { mutate: s, mutateAsync: a, ...u } = (0, n.n)({ ...r, ...i });
        return { ...u, signMessage: s, signMessageAsync: a };
      }
    },
    86205: (e, t, r) => {
      r.d(t, {
        Ej: () => y,
        Fl: () => P,
        Ho: () => h,
        M7: () => p,
        Ty: () => g,
        di: () => b,
        ii: () => E,
        oB: () => d,
        sH: () => f,
        tf: () => m,
        u: () => x,
        uK: () => l,
        xW: () => c,
        xb: () => u,
      });
      var n = r(28452),
        i = r(97486),
        s = r(93587);
      let a = new TextEncoder(),
        o = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function c(...e) {
        return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
      }
      function u(e, t = {}) {
        let r = `0x${Number(e)}`;
        return "number" == typeof t.size ? (s.Sl(r, t.size), h(r, t.size)) : r;
      }
      function l(e, t = {}) {
        let r = "";
        for (let t = 0; t < e.length; t++) r += o[e[t]];
        let n = `0x${r}`;
        return "number" == typeof t.size ? (s.Sl(n, t.size), p(n, t.size)) : n;
      }
      function d(e, t = {}) {
        let r,
          { signed: n, size: i } = t,
          s = BigInt(e);
        i
          ? (r = n
              ? (1n << (8n * BigInt(i) - 1n)) - 1n
              : 2n ** (8n * BigInt(i)) - 1n)
          : "number" == typeof e && (r = BigInt(Number.MAX_SAFE_INTEGER));
        let a = "bigint" == typeof r && n ? -r - 1n : 0;
        if ((r && s > r) || s < a) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new g({
            max: r ? `${r}${t}` : void 0,
            min: `${a}${t}`,
            signed: n,
            size: i,
            value: `${e}${t}`,
          });
        }
        let o = (n && s < 0 ? (1n << BigInt(8 * i)) + BigInt(s) : s).toString(
            16
          ),
          c = `0x${o}`;
        return i ? h(c, i) : c;
      }
      function f(e, t = {}) {
        return l(a.encode(e), t);
      }
      function h(e, t) {
        return s.eV(e, { dir: "left", size: t });
      }
      function p(e, t) {
        return s.eV(e, { dir: "right", size: t });
      }
      function b(e, t, r, n = {}) {
        let { strict: i } = n;
        s.kK(e, t);
        let a = `0x${e
          .replace("0x", "")
          .slice((t ?? 0) * 2, (r ?? e.length) * 2)}`;
        return i && s.X(a, t, r), a;
      }
      function y(e) {
        return Math.ceil((e.length - 2) / 2);
      }
      function m(e, t = {}) {
        let { strict: r = !1 } = t;
        try {
          return (
            !(function (e, t = {}) {
              let { strict: r = !1 } = t;
              if (!e || "string" != typeof e) throw new v(e);
              if ((r && !/^0x[0-9a-fA-F]*$/.test(e)) || !e.startsWith("0x"))
                throw new w(e);
            })(e, { strict: r }),
            !0
          );
        } catch {
          return !1;
        }
      }
      class g extends n.C {
        constructor({ max: e, min: t, signed: r, size: n, value: i }) {
          super(
            `Number \`${i}\` is not in safe${n ? ` ${8 * n}-bit` : ""}${
              r ? " signed" : " unsigned"
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
      n.C;
      class v extends n.C {
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
      class w extends n.C {
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
      n.C;
      class x extends n.C {
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
      class E extends n.C {
        constructor({ offset: e, position: t, size: r }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset \`${e}\` is out-of-bounds (size: \`${r}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SliceOffsetOutOfBoundsError",
            });
        }
      }
      class P extends n.C {
        constructor({ size: e, targetSize: t, type: r }) {
          super(
            `${r.charAt(0).toUpperCase()}${r
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
    86435: (e, t, r) => {
      r.d(t, { w: () => i });
      var n = r(10231);
      function i(e, { emitOnBegin: t, initialWaitTime: r, interval: i }) {
        let s = !0,
          a = () => (s = !1);
        return (
          (async () => {
            let o;
            t && (o = await e({ unpoll: a }));
            let c = (await r?.(o)) ?? i;
            await (0, n.u)(c);
            let u = async () => {
              s && (await e({ unpoll: a }), await (0, n.u)(i), u());
            };
            u();
          })(),
          a
        );
      }
    },
    86850: (e, t, r) => {
      r.d(t, { X: () => a });
      var n = r(78008),
        i = r(67622),
        s = r(7739);
      async function a(e, t) {
        let {
            address: r,
            abi: a,
            args: o,
            eventName: c,
            fromBlock: u,
            strict: l,
            toBlock: d,
          } = t,
          f = (0, s.g)(e, { method: "eth_newFilter" }),
          h = c ? (0, n.R)({ abi: a, args: o, eventName: c }) : void 0,
          p = await e.request({
            method: "eth_newFilter",
            params: [
              {
                address: r,
                fromBlock: "bigint" == typeof u ? (0, i.cK)(u) : u,
                toBlock: "bigint" == typeof d ? (0, i.cK)(d) : d,
                topics: h,
              },
            ],
          });
        return {
          abi: a,
          args: o,
          eventName: c,
          id: p,
          request: f(p),
          strict: !!l,
          type: "event",
        };
      }
    },
    87094: (e, t, r) => {
      r.d(t, { E: () => i });
      var n = r(32840);
      function i(e) {
        return (0, n.q)(e, { strict: !1 })
          ? Math.ceil((e.length - 2) / 2)
          : e.length;
      }
    },
    87332: (e, t, r) => {
      r.d(t, { useAccountEffect: () => a });
      var n = r(87660),
        i = r(12115),
        s = r(53031);
      function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { onConnect: t, onDisconnect: r } = e,
          a = (0, s.useConfig)(e);
        (0, i.useEffect)(
          () =>
            (0, n.F)(a, {
              onChange(e, n) {
                if (
                  ("reconnecting" === n.status ||
                    ("connecting" === n.status && void 0 === n.address)) &&
                  "connected" === e.status
                ) {
                  let {
                      address: r,
                      addresses: i,
                      chain: s,
                      chainId: a,
                      connector: o,
                    } = e,
                    c = "reconnecting" === n.status || void 0 === n.status;
                  null == t ||
                    t({
                      address: r,
                      addresses: i,
                      chain: s,
                      chainId: a,
                      connector: o,
                      isReconnected: c,
                    });
                } else
                  "connected" === n.status &&
                    "disconnected" === e.status &&
                    (null == r || r());
              },
            }),
          [a, t, r]
        );
      }
    },
    87456: (e, t, r) => {
      r.d(t, { l: () => s });
      var n = r(97118);
      let i = {
        bytes: new Uint8Array(),
        dataView: new DataView(new ArrayBuffer(0)),
        position: 0,
        positionReadCount: new Map(),
        recursiveReadCount: 0,
        recursiveReadLimit: Number.POSITIVE_INFINITY,
        assertReadLimit() {
          if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new n.hX({
              count: this.recursiveReadCount + 1,
              limit: this.recursiveReadLimit,
            });
        },
        assertPosition(e) {
          if (e < 0 || e > this.bytes.length - 1)
            throw new n.SK({ length: this.bytes.length, position: e });
        },
        decrementPosition(e) {
          if (e < 0) throw new n.B4({ offset: e });
          let t = this.position - e;
          this.assertPosition(t), (this.position = t);
        },
        getReadCount(e) {
          return this.positionReadCount.get(e || this.position) || 0;
        },
        incrementPosition(e) {
          if (e < 0) throw new n.B4({ offset: e });
          let t = this.position + e;
          this.assertPosition(t), (this.position = t);
        },
        inspectByte(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectBytes(e, t) {
          let r = t ?? this.position;
          return this.assertPosition(r + e - 1), this.bytes.subarray(r, r + e);
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
          let r = this.inspectBytes(e);
          return (this.position += t ?? e), r;
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
      function s(e, { recursiveReadLimit: t = 8192 } = {}) {
        let r = Object.create(i);
        return (
          (r.bytes = e),
          (r.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
          (r.positionReadCount = new Map()),
          (r.recursiveReadLimit = t),
          r
        );
      }
    },
    87632: (e, t, r) => {
      r.d(t, { e: () => n });
      function n(e, { args: t, eventName: r } = {}) {
        return {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          logIndex: e.logIndex ? Number(e.logIndex) : null,
          transactionHash: e.transactionHash ? e.transactionHash : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          ...(r ? { args: t, eventName: r } : {}),
        };
      }
    },
    87651: (e, t, r) => {
      r.d(t, { useChains: () => c });
      var n = r(34250);
      let i = [];
      function s(e) {
        let t = e.chains;
        return (0, n.b)(i, t) ? i : ((i = t), t);
      }
      var a = r(12115),
        o = r(53031);
      function c() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, o.useConfig)(e);
        return (0, a.useSyncExternalStore)(
          (e) =>
            (function (e, t) {
              let { onChange: r } = t;
              return e._internal.chains.subscribe((e, t) => {
                r(e, t);
              });
            })(t, { onChange: e }),
          () => s(t),
          () => s(t)
        );
      }
    },
    87660: (e, t, r) => {
      r.d(t, { F: () => s });
      var n = r(34250),
        i = r(64997);
      function s(e, t) {
        let { onChange: r } = t;
        return e.subscribe(() => (0, i.s)(e), r, {
          equalityFn(e, t) {
            let { connector: r, ...i } = e,
              { connector: s, ...a } = t;
            return (0, n.b)(i, a) && r?.id === s?.id && r?.uid === s?.uid;
          },
        });
      }
    },
    90113: (e, t, r) => {
      r.d(t, { N: () => i, V: () => s });
      var n = r(95782);
      class i extends n.C {
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
      class s extends n.C {
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
    90477: (e, t, r) => {
      r.d(t, { H4: () => y, v8: () => p, $$: () => b });
      var n = r(99702),
        i = r(36444),
        s = r(79183),
        a = r(7441);
      class o extends a.C {
        constructor({ domain: e }) {
          super(`Invalid domain "${(0, s.A)(e)}".`, {
            metaMessages: ["Must be a valid EIP-712 domain."],
          });
        }
      }
      class c extends a.C {
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
      class u extends a.C {
        constructor({ type: e }) {
          super(`Struct type "${e}" is invalid.`, {
            metaMessages: ["Struct type must not be a Solidity type."],
            name: "InvalidStructTypeError",
          });
        }
      }
      var l = r(81757),
        d = r(87094),
        f = r(67622),
        h = r(38697);
      function p(e) {
        let { domain: t, message: r, primaryType: n, types: i } = e,
          a = (e, t) => {
            let r = { ...t };
            for (let t of e) {
              let { name: e, type: n } = t;
              "address" === n && (r[e] = r[e].toLowerCase());
            }
            return r;
          },
          o = i.EIP712Domain && t ? a(i.EIP712Domain, t) : {},
          c = (() => {
            if ("EIP712Domain" !== n) return a(i[n], r);
          })();
        return (0, s.A)({ domain: o, message: c, primaryType: n, types: i });
      }
      function b(e) {
        let { domain: t, message: r, primaryType: s, types: a } = e,
          p = (e, t) => {
            for (let r of e) {
              let { name: e, type: s } = r,
                o = t[e],
                c = s.match(h.Ge);
              if (c && ("number" == typeof o || "bigint" == typeof o)) {
                let [e, t, r] = c;
                (0, f.cK)(o, {
                  signed: "int" === t,
                  size: Number.parseInt(r) / 8,
                });
              }
              if ("address" === s && "string" == typeof o && !(0, l.P)(o))
                throw new i.M({ address: o });
              let b = s.match(h.BD);
              if (b) {
                let [e, t] = b;
                if (t && (0, d.E)(o) !== Number.parseInt(t))
                  throw new n.BI({
                    expectedSize: Number.parseInt(t),
                    givenSize: (0, d.E)(o),
                  });
              }
              let y = a[s];
              y &&
                ((function (e) {
                  if (
                    "address" === e ||
                    "bool" === e ||
                    "string" === e ||
                    e.startsWith("bytes") ||
                    e.startsWith("uint") ||
                    e.startsWith("int")
                  )
                    throw new u({ type: e });
                })(s),
                p(y, o));
            }
          };
        if (a.EIP712Domain && t) {
          if ("object" != typeof t) throw new o({ domain: t });
          p(a.EIP712Domain, t);
        }
        if ("EIP712Domain" !== s)
          if (a[s]) p(a[s], r);
          else throw new c({ primaryType: s, types: a });
      }
      function y({ domain: e }) {
        return [
          "string" == typeof e?.name && { name: "name", type: "string" },
          e?.version && { name: "version", type: "string" },
          ("number" == typeof e?.chainId || "bigint" == typeof e?.chainId) && {
            name: "chainId",
            type: "uint256",
          },
          e?.verifyingContract && {
            name: "verifyingContract",
            type: "address",
          },
          e?.salt && { name: "salt", type: "bytes32" },
        ].filter(Boolean);
      }
    },
    90557: (e, t, r) => {
      r.d(t, { Ci: () => a, J8: () => o, MU: () => c });
      var n = r(79183),
        i = r(7441),
        s = r(41514);
      class a extends i.C {
        constructor({
          body: e,
          cause: t,
          details: r,
          headers: i,
          status: a,
          url: o,
        }) {
          super("HTTP request failed.", {
            cause: t,
            details: r,
            metaMessages: [
              a && `Status: ${a}`,
              `URL: ${(0, s.I)(o)}`,
              e && `Request body: ${(0, n.A)(e)}`,
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
            (this.url = o);
        }
      }
      i.C;
      class o extends i.C {
        constructor({ body: e, error: t, url: r }) {
          super("RPC Request failed.", {
            cause: t,
            details: t.message,
            metaMessages: [
              `URL: ${(0, s.I)(r)}`,
              `Request body: ${(0, n.A)(e)}`,
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
              `URL: ${(0, s.I)(t)}`,
              `Request body: ${(0, n.A)(e)}`,
            ],
            name: "TimeoutError",
          });
        }
      }
    },
    91836: (e, t, r) => {
      r.d(t, { RR: () => o, pw: () => a, sM: () => s });
      var n = r(31942),
        i = r(7441);
      class s extends i.C {
        constructor() {
          super("`baseFeeMultiplier` must be greater than 1.", {
            name: "BaseFeeScalarError",
          });
        }
      }
      class a extends i.C {
        constructor() {
          super("Chain does not support EIP-1559 fees.", {
            name: "Eip1559FeesNotSupportedError",
          });
        }
      }
      class o extends i.C {
        constructor({ maxPriorityFeePerGas: e }) {
          super(
            `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,
            n.Q)(e)} gwei).`,
            { name: "MaxFeePerGasTooLowError" }
          );
        }
      }
    },
    92374: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          cancelIdleCallback: function () {
            return n;
          },
          requestIdleCallback: function () {
            return r;
          },
        });
      let r =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        n =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    92966: (e, t, r) => {
      r.d(t, { useEnsAvatar: () => u });
      var n = r(75794),
        i = r(70030),
        s = r(62108),
        a = r(31959),
        o = r(18224),
        c = r(53031);
      function u() {
        var e, t;
        let r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { name: u, query: l = {} } = r,
          d = (0, c.useConfig)(r),
          f = (0, o.useChainId)({ config: d }),
          h = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { name: r, scopeKey: s, ...a } = t[1];
                if (!r) throw Error("name is required");
                let { chainId: o, ...c } = { ...a, name: r },
                  u = e.getClient({ chainId: o });
                return (0, i.T)(u, n.i, "getEnsAvatar")(c);
              },
              queryKey: (function (e = {}) {
                return ["ensAvatar", (0, s.xO)(e)];
              })(t),
            };
          })(d, { ...r, chainId: null != (e = r.chainId) ? e : f }),
          p = !!(u && (null == (t = l.enabled) || t));
        return (0, a.IT)({ ...l, ...h, enabled: p });
      }
    },
    93587: (e, t, r) => {
      r.d(t, { Sl: () => i, X: () => a, eV: () => o, kK: () => s });
      var n = r(86205);
      function i(e, t) {
        if (n.Ej(e) > t) throw new n.u({ givenSize: n.Ej(e), maxSize: t });
      }
      function s(e, t) {
        if ("number" == typeof t && t > 0 && t > n.Ej(e) - 1)
          throw new n.ii({ offset: t, position: "start", size: n.Ej(e) });
      }
      function a(e, t, r) {
        if ("number" == typeof t && "number" == typeof r && n.Ej(e) !== r - t)
          throw new n.ii({ offset: r, position: "end", size: n.Ej(e) });
      }
      function o(e, t = {}) {
        let { dir: r, size: i = 32 } = t;
        if (0 === i) return e;
        let s = e.replace("0x", "");
        if (s.length > 2 * i)
          throw new n.Fl({
            size: Math.ceil(s.length / 2),
            targetSize: i,
            type: "Hex",
          });
        return `0x${s["right" === r ? "padEnd" : "padStart"](2 * i, "0")}`;
      }
    },
    93727: (e, t, r) => {
      r.d(t, { A1: () => u, di: () => a, iN: () => l });
      var n = r(58980),
        i = r(32840),
        s = r(87094);
      function a(e, t, r, { strict: n } = {}) {
        return (0, i.q)(e, { strict: !1 })
          ? l(e, t, r, { strict: n })
          : u(e, t, r, { strict: n });
      }
      function o(e, t) {
        if ("number" == typeof t && t > 0 && t > (0, s.E)(e) - 1)
          throw new n.ii({ offset: t, position: "start", size: (0, s.E)(e) });
      }
      function c(e, t, r) {
        if (
          "number" == typeof t &&
          "number" == typeof r &&
          (0, s.E)(e) !== r - t
        )
          throw new n.ii({ offset: r, position: "end", size: (0, s.E)(e) });
      }
      function u(e, t, r, { strict: n } = {}) {
        o(e, t);
        let i = e.slice(t, r);
        return n && c(i, t, r), i;
      }
      function l(e, t, r, { strict: n } = {}) {
        o(e, t);
        let i = `0x${e
          .replace("0x", "")
          .slice((t ?? 0) * 2, (r ?? e.length) * 2)}`;
        return n && c(i, t, r), i;
      }
    },
    94181: (e, t, r) => {
      r.d(t, { G: () => o });
      let n = new Map(),
        i = new Map();
      async function s(
        e,
        { cacheKey: t, cacheTime: r = Number.POSITIVE_INFINITY }
      ) {
        let s = (function (e) {
            let t = (e, t) => ({
                clear: () => t.delete(e),
                get: () => t.get(e),
                set: (r) => t.set(e, r),
              }),
              r = t(e, n),
              s = t(e, i);
            return {
              clear: () => {
                r.clear(), s.clear();
              },
              promise: r,
              response: s,
            };
          })(t),
          a = s.response.get();
        if (a && r > 0 && new Date().getTime() - a.created.getTime() < r)
          return a.data;
        let o = s.promise.get();
        o || ((o = e()), s.promise.set(o));
        try {
          let e = await o;
          return s.response.set({ created: new Date(), data: e }), e;
        } finally {
          s.promise.clear();
        }
      }
      let a = (e) => `blockNumber.${e}`;
      async function o(e, { cacheTime: t = e.cacheTime } = {}) {
        return BigInt(
          await s(() => e.request({ method: "eth_blockNumber" }), {
            cacheKey: a(e.uid),
            cacheTime: t,
          })
        );
      }
    },
    94201: (e, t, r) => {
      r.d(t, { H2: () => a, Ty: () => i, u: () => o, xO: () => s });
      var n = r(7441);
      class i extends n.C {
        constructor({ max: e, min: t, signed: r, size: n, value: i }) {
          super(
            `Number "${i}" is not in safe ${
              n ? `${8 * n}-bit ${r ? "signed" : "unsigned"} ` : ""
            }integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`,
            { name: "IntegerOutOfRangeError" }
          );
        }
      }
      class s extends n.C {
        constructor(e) {
          super(
            `Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,
            { name: "InvalidBytesBooleanError" }
          );
        }
      }
      class a extends n.C {
        constructor(e) {
          super(
            `Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`,
            { name: "InvalidHexBooleanError" }
          );
        }
      }
      n.C;
      class o extends n.C {
        constructor({ givenSize: e, maxSize: t }) {
          super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
            name: "SizeOverflowError",
          });
        }
      }
    },
    94484: (e, t, r) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.EnvContext = void 0),
        (t.EnvContext = (0, r(12115).createContext)(null));
    },
    95041: (e, t, r) => {
      r.d(t, { X: () => m, J: () => y });
      var n = r(14493),
        i = r(29995),
        s = r(99702),
        a = r(93727),
        o = r(21135),
        c = r(43935),
        u = r(21159),
        l = r(79731),
        d = r(13423),
        f = r(23008);
      let h = "/docs/contract/encodeErrorResult";
      function p(e) {
        let { abi: t, errorName: r, args: n } = e,
          i = t[0];
        if (r) {
          let e = (0, f.iY)({ abi: t, args: n, name: r });
          if (!e) throw new s.yy(r, { docsPath: h });
          i = e;
        }
        if ("error" !== i.type) throw new s.yy(void 0, { docsPath: h });
        let a = (0, u.B)(i),
          c = (0, o.V)(a),
          p = "0x";
        if (n && n.length > 0) {
          if (!i.inputs) throw new s.ZP(i.name, { docsPath: h });
          p = (0, d.h)(i.inputs, n);
        }
        return (0, l.aP)([c, p]);
      }
      let b = "/docs/contract/encodeFunctionResult",
        y = "x-batch-gateway:true";
      async function m(e) {
        let { data: t, ccipRequest: r } = e,
          {
            args: [l],
          } = (function (e) {
            let { abi: t, data: r } = e,
              n = (0, a.di)(r, 0, 4),
              i = t.find(
                (e) => "function" === e.type && n === (0, o.V)((0, u.B)(e))
              );
            if (!i)
              throw new s.EB(n, {
                docsPath: "/docs/contract/decodeFunctionData",
              });
            return {
              functionName: i.name,
              args:
                "inputs" in i && i.inputs && i.inputs.length > 0
                  ? (0, c.n)(i.inputs, (0, a.di)(r, 4))
                  : void 0,
            };
          })({ abi: n.b2, data: t }),
          h = [],
          y = [];
        return (
          await Promise.all(
            l.map(async (e, t) => {
              try {
                (y[t] = await r(e)), (h[t] = !1);
              } catch (e) {
                var s;
                (h[t] = !0),
                  (y[t] =
                    "HttpRequestError" === (s = e).name && s.status
                      ? p({
                          abi: n.b2,
                          errorName: "HttpError",
                          args: [s.status, s.shortMessage],
                        })
                      : p({
                          abi: [i.Mc],
                          errorName: "Error",
                          args: [
                            "shortMessage" in s ? s.shortMessage : s.message,
                          ],
                        }));
              }
            })
          ),
          (function (e) {
            let { abi: t, functionName: r, result: n } = e,
              i = t[0];
            if (r) {
              let e = (0, f.iY)({ abi: t, name: r });
              if (!e) throw new s.Iz(r, { docsPath: b });
              i = e;
            }
            if ("function" !== i.type) throw new s.Iz(void 0, { docsPath: b });
            if (!i.outputs) throw new s.MR(i.name, { docsPath: b });
            let a = (() => {
              if (0 === i.outputs.length) return [];
              if (1 === i.outputs.length) return [n];
              if (Array.isArray(n)) return n;
              throw new s.dm(n);
            })();
            return (0, d.h)(i.outputs, a);
          })({ abi: n.b2, functionName: "query", result: [h, y] })
        );
      }
    },
    95782: (e, t, r) => {
      r.d(t, { C: () => c });
      var n,
        i,
        s = r(40194);
      let a = () => `@wagmi/core@${s.r}`;
      var o = function (e, t, r, n) {
        if ("a" === r && !n)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
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
            n.add(this),
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
          let r =
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
            ...(r ? [`Details: ${r}`] : []),
            `Version: ${this.version}`,
          ].join("\n")),
            t.cause && (this.cause = t.cause),
            (this.details = r),
            (this.docsPath = i),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
        walk(e) {
          return o(this, n, "m", i).call(this, this, e);
        }
      }
      (n = new WeakSet()),
        (i = function e(t, r) {
          return r?.(t)
            ? t
            : t.cause
            ? o(this, n, "m", e).call(this, t.cause, r)
            : t;
        });
    },
    95838: (e, t, r) => {
      r.d(t, { I: () => s });
      var n = r(76347),
        i = r(64079);
      function s(e, t) {
        return (0, i.t)(e, n.$, t);
      }
    },
    95990: (e, t, r) => {
      r.d(t, { r: () => c });
      var n = r(98078),
        i = r(54315),
        s = r(19405),
        a = r(35883),
        o = r(77752);
      async function c(e, t = {}) {
        let r;
        if (t.connector) {
          let { connector: n } = t;
          if (
            "reconnecting" === e.state.status &&
            !n.getAccounts &&
            !n.getChainId
          )
            throw new o.HF({ connector: n });
          let [i, s] = await Promise.all([
            n.getAccounts().catch((e) => {
              if (null === t.account) return [];
              throw e;
            }),
            n.getChainId(),
          ]);
          r = { accounts: i, chainId: s, connector: n };
        } else r = e.state.connections.get(e.state.current);
        if (!r) throw new o.gC();
        let u = t.chainId ?? r.chainId,
          l = await r.connector.getChainId();
        if (l !== r.chainId)
          throw new o.xU({ connectionChainId: r.chainId, connectorChainId: l });
        let d = r.connector;
        if (d.getClient) return d.getClient({ chainId: u });
        let f = (0, s.J)(t.account ?? r.accounts[0]);
        if (
          (f && (f.address = (0, a.b)(f.address)),
          t.account &&
            !r.accounts.some(
              (e) => e.toLowerCase() === f.address.toLowerCase()
            ))
        )
          throw new o.aj({ address: f.address, connector: d });
        let h = e.chains.find((e) => e.id === u),
          p = await r.connector.getProvider({ chainId: u });
        return (0, n.U)({
          account: f,
          chain: h,
          name: "Connector Client",
          transport: (e) =>
            (function (e, t = {}) {
              let {
                key: r = "custom",
                methods: n,
                name: s = "Custom Provider",
                retryDelay: a,
              } = t;
              return ({ retryCount: o }) =>
                (0, i.o)({
                  key: r,
                  methods: n,
                  name: s,
                  request: e.request.bind(e),
                  retryCount: t.retryCount ?? o,
                  retryDelay: a,
                  type: "custom",
                });
            })(p)({ ...e, retryCount: 0 }),
        });
      }
    },
    97118: (e, t, r) => {
      r.d(t, { B4: () => i, SK: () => s, hX: () => a });
      var n = r(7441);
      class i extends n.C {
        constructor({ offset: e }) {
          super(`Offset \`${e}\` cannot be negative.`, {
            name: "NegativeOffsetError",
          });
        }
      }
      class s extends n.C {
        constructor({ length: e, position: t }) {
          super(
            `Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`,
            { name: "PositionOutOfBoundsError" }
          );
        }
      }
      class a extends n.C {
        constructor({ count: e, limit: t }) {
          super(
            `Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`,
            { name: "RecursiveReadLimitExceededError" }
          );
        }
      }
    },
    97486: (e, t, r) => {
      r.d(t, { A: () => n });
      function n(e, t, r) {
        return JSON.stringify(
          e,
          (e, r) =>
            "function" == typeof t
              ? t(e, r)
              : "bigint" == typeof r
              ? r.toString() + "#__bigint"
              : r,
          r
        );
      }
    },
    98078: (e, t, r) => {
      r.d(t, { U: () => s });
      var n = r(19405),
        i = r(65368);
      function s(e) {
        let {
            batch: t,
            cacheTime: r = e.pollingInterval ?? 4e3,
            ccipRead: s,
            key: a = "base",
            name: o = "Base Client",
            pollingInterval: c = 4e3,
            type: u = "base",
          } = e,
          l = e.chain,
          d = e.account ? (0, n.J)(e.account) : void 0,
          {
            config: f,
            request: h,
            value: p,
          } = e.transport({ chain: l, pollingInterval: c }),
          b = {
            account: d,
            batch: t,
            cacheTime: r,
            ccipRead: s,
            chain: l,
            key: a,
            name: o,
            pollingInterval: c,
            request: h,
            transport: { ...f, ...p },
            type: u,
            uid: (0, i.L)(),
          };
        return Object.assign(b, {
          extend: (function e(t) {
            return (r) => {
              let n = r(t);
              for (let e in b) delete n[e];
              let i = { ...t, ...n };
              return Object.assign(i, { extend: e(i) });
            };
          })(b),
        });
      }
    },
    98335: (e, t, r) => {
      var n = r(12115),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        s = n.useState,
        a = n.useEffect,
        o = n.useLayoutEffect,
        c = n.useDebugValue;
      function u(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !i(e, r);
        } catch (e) {
          return !0;
        }
      }
      var l =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var r = t(),
                n = s({ inst: { value: r, getSnapshot: t } }),
                i = n[0].inst,
                l = n[1];
              return (
                o(
                  function () {
                    (i.value = r), (i.getSnapshot = t), u(i) && l({ inst: i });
                  },
                  [e, r, t]
                ),
                a(
                  function () {
                    return (
                      u(i) && l({ inst: i }),
                      e(function () {
                        u(i) && l({ inst: i });
                      })
                    );
                  },
                  [e]
                ),
                c(r),
                r
              );
            };
      t.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : l;
    },
    98693: (e, t, r) => {
      r.d(t, { sc: () => l });
      var n = r(19989);
      class i extends n.Vw {
        constructor(e, t, r, i) {
          super(),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = i),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, n.O8)(this.buffer));
        }
        update(e) {
          (0, n.CC)(this), (e = (0, n.ZJ)(e)), (0, n.DO)(e);
          let { view: t, buffer: r, blockLen: i } = this,
            s = e.length;
          for (let a = 0; a < s; ) {
            let o = Math.min(i - this.pos, s - a);
            if (o === i) {
              let t = (0, n.O8)(e);
              for (; i <= s - a; a += i) this.process(t, a);
              continue;
            }
            r.set(e.subarray(a, a + o), this.pos),
              (this.pos += o),
              (a += o),
              this.pos === i && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          (0, n.CC)(this), (0, n.Ht)(e, this), (this.finished = !0);
          let { buffer: t, view: r, blockLen: i, isLE: s } = this,
            { pos: a } = this;
          (t[a++] = 128),
            (0, n.uH)(this.buffer.subarray(a)),
            this.padOffset > i - a && (this.process(r, 0), (a = 0));
          for (let e = a; e < i; e++) t[e] = 0;
          !(function (e, t, r, n) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, r, n);
            let i = BigInt(32),
              s = BigInt(0xffffffff),
              a = Number((r >> i) & s),
              o = Number(r & s),
              c = 4 * !!n,
              u = 4 * !n;
            e.setUint32(t + c, a, n), e.setUint32(t + u, o, n);
          })(r, i - 8, BigInt(8 * this.length), s),
            this.process(r, 0);
          let o = (0, n.O8)(e),
            c = this.outputLen;
          if (c % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let u = c / 4,
            l = this.get();
          if (u > l.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < u; e++) o.setUint32(4 * e, l[e], s);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: r,
            length: n,
            finished: i,
            destroyed: s,
            pos: a,
          } = this;
          return (
            (e.destroyed = s),
            (e.finished = i),
            (e.length = n),
            (e.pos = a),
            n % t && e.buffer.set(r),
            e
          );
        }
        clone() {
          return this._cloneInto();
        }
      }
      let s = Uint32Array.from([
        0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c,
        0x1f83d9ab, 0x5be0cd19,
      ]);
      var a = r(48701);
      let o = Uint32Array.from([
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
        c = new Uint32Array(64);
      class u extends i {
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
          let { A: e, B: t, C: r, D: n, E: i, F: s, G: a, H: o } = this;
          return [e, t, r, n, i, s, a, o];
        }
        set(e, t, r, n, i, s, a, o) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | i),
            (this.F = 0 | s),
            (this.G = 0 | a),
            (this.H = 0 | o);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4) c[r] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = c[e - 15],
              r = c[e - 2],
              i = (0, n.Ow)(t, 7) ^ (0, n.Ow)(t, 18) ^ (t >>> 3),
              s = (0, n.Ow)(r, 17) ^ (0, n.Ow)(r, 19) ^ (r >>> 10);
            c[e] = (s + c[e - 7] + i + c[e - 16]) | 0;
          }
          let { A: r, B: i, C: s, D: a, E: u, F: l, G: d, H: f } = this;
          for (let e = 0; e < 64; e++) {
            var h, p, b, y;
            let t =
                (f +
                  ((0, n.Ow)(u, 6) ^ (0, n.Ow)(u, 11) ^ (0, n.Ow)(u, 25)) +
                  (((h = u) & l) ^ (~h & d)) +
                  o[e] +
                  c[e]) |
                0,
              m =
                (((0, n.Ow)(r, 2) ^ (0, n.Ow)(r, 13) ^ (0, n.Ow)(r, 22)) +
                  (((p = r) & (b = i)) ^ (p & (y = s)) ^ (b & y))) |
                0;
            (f = d),
              (d = l),
              (l = u),
              (u = (a + t) | 0),
              (a = s),
              (s = i),
              (i = r),
              (r = (t + m) | 0);
          }
          (r = (r + this.A) | 0),
            (i = (i + this.B) | 0),
            (s = (s + this.C) | 0),
            (a = (a + this.D) | 0),
            (u = (u + this.E) | 0),
            (l = (l + this.F) | 0),
            (d = (d + this.G) | 0),
            (f = (f + this.H) | 0),
            this.set(r, i, s, a, u, l, d, f);
        }
        roundClean() {
          (0, n.uH)(c);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), (0, n.uH)(this.buffer);
        }
      }
      a.lD(
        [
          "0x428a2f98d728ae22",
          "0x7137449123ef65cd",
          "0xb5c0fbcfec4d3b2f",
          "0xe9b5dba58189dbbc",
          "0x3956c25bf348b538",
          "0x59f111f1b605d019",
          "0x923f82a4af194f9b",
          "0xab1c5ed5da6d8118",
          "0xd807aa98a3030242",
          "0x12835b0145706fbe",
          "0x243185be4ee4b28c",
          "0x550c7dc3d5ffb4e2",
          "0x72be5d74f27b896f",
          "0x80deb1fe3b1696b1",
          "0x9bdc06a725c71235",
          "0xc19bf174cf692694",
          "0xe49b69c19ef14ad2",
          "0xefbe4786384f25e3",
          "0x0fc19dc68b8cd5b5",
          "0x240ca1cc77ac9c65",
          "0x2de92c6f592b0275",
          "0x4a7484aa6ea6e483",
          "0x5cb0a9dcbd41fbd4",
          "0x76f988da831153b5",
          "0x983e5152ee66dfab",
          "0xa831c66d2db43210",
          "0xb00327c898fb213f",
          "0xbf597fc7beef0ee4",
          "0xc6e00bf33da88fc2",
          "0xd5a79147930aa725",
          "0x06ca6351e003826f",
          "0x142929670a0e6e70",
          "0x27b70a8546d22ffc",
          "0x2e1b21385c26c926",
          "0x4d2c6dfc5ac42aed",
          "0x53380d139d95b3df",
          "0x650a73548baf63de",
          "0x766a0abb3c77b2a8",
          "0x81c2c92e47edaee6",
          "0x92722c851482353b",
          "0xa2bfe8a14cf10364",
          "0xa81a664bbc423001",
          "0xc24b8b70d0f89791",
          "0xc76c51a30654be30",
          "0xd192e819d6ef5218",
          "0xd69906245565a910",
          "0xf40e35855771202a",
          "0x106aa07032bbd1b8",
          "0x19a4c116b8d2d0c8",
          "0x1e376c085141ab53",
          "0x2748774cdf8eeb99",
          "0x34b0bcb5e19b48a8",
          "0x391c0cb3c5c95a63",
          "0x4ed8aa4ae3418acb",
          "0x5b9cca4f7763e373",
          "0x682e6ff3d6b2b8a3",
          "0x748f82ee5defb2fc",
          "0x78a5636f43172f60",
          "0x84c87814a1f0ab72",
          "0x8cc702081a6439ec",
          "0x90befffa23631e28",
          "0xa4506cebde82bde9",
          "0xbef9a3f7b2c67915",
          "0xc67178f2e372532b",
          "0xca273eceea26619c",
          "0xd186b8c721c0c207",
          "0xeada7dd6cde0eb1e",
          "0xf57d4f7fee6ed178",
          "0x06f067aa72176fba",
          "0x0a637dc5a2c898a6",
          "0x113f9804bef90dae",
          "0x1b710b35131c471b",
          "0x28db77f523047d84",
          "0x32caab7b40c72493",
          "0x3c9ebe0a15c9bebc",
          "0x431d67c49c100d4c",
          "0x4cc5d4becb3e42b6",
          "0x597f299cfc657e2a",
          "0x5fcb6fab3ad6faec",
          "0x6c44198c4a475817",
        ].map((e) => BigInt(e))
      );
      let l = (0, n.qj)(() => new u());
    },
    99702: (e, t, r) => {
      r.d(t, {
        BI: () => P,
        EB: () => x,
        Iy: () => c,
        Iz: () => v,
        MR: () => w,
        M_: () => g,
        Nc: () => l,
        O: () => u,
        Wq: () => b,
        YE: () => f,
        YF: () => o,
        YW: () => a,
        ZP: () => h,
        _z: () => y,
        d_: () => B,
        dm: () => $,
        fo: () => C,
        gH: () => d,
        j: () => A,
        kE: () => m,
        l3: () => I,
        nK: () => O,
        nM: () => E,
        yy: () => p,
      });
      var n = r(21159),
        i = r(87094),
        s = r(7441);
      class a extends s.C {
        constructor({ docsPath: e }) {
          super(
            "A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",
            { docsPath: e, name: "AbiConstructorNotFoundError" }
          );
        }
      }
      class o extends s.C {
        constructor({ docsPath: e }) {
          super(
            "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
            { docsPath: e, name: "AbiConstructorParamsNotFoundError" }
          );
        }
      }
      s.C;
      class c extends s.C {
        constructor({ data: e, params: t, size: r }) {
          super(`Data size of ${r} bytes is too small for given parameters.`, {
            metaMessages: [
              `Params: (${(0, n.A)(t, { includeName: !0 })})`,
              `Data:   ${e} (${r} bytes)`,
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
            (this.size = r);
        }
      }
      class u extends s.C {
        constructor() {
          super('Cannot decode zero data ("0x") with ABI parameters.', {
            name: "AbiDecodingZeroDataError",
          });
        }
      }
      class l extends s.C {
        constructor({ expectedLength: e, givenLength: t, type: r }) {
          super(
            `ABI encoding array length mismatch for type ${r}.
Expected length: ${e}
Given length: ${t}`,
            { name: "AbiEncodingArrayLengthMismatchError" }
          );
        }
      }
      class d extends s.C {
        constructor({ expectedSize: e, value: t }) {
          super(
            `Size of bytes "${t}" (bytes${(0, i.E)(
              t
            )}) does not match expected size (bytes${e}).`,
            { name: "AbiEncodingBytesSizeMismatchError" }
          );
        }
      }
      class f extends s.C {
        constructor({ expectedLength: e, givenLength: t }) {
          super(
            `ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`,
            { name: "AbiEncodingLengthMismatchError" }
          );
        }
      }
      class h extends s.C {
        constructor(e, { docsPath: t }) {
          super(
            `Arguments (\`args\`) were provided to "${e}", but "${e}" on the ABI does not contain any parameters (\`inputs\`).
Cannot encode error result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the inputs exist on it.`,
            { docsPath: t, name: "AbiErrorInputsNotFoundError" }
          );
        }
      }
      class p extends s.C {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Error ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.`,
            { docsPath: t, name: "AbiErrorNotFoundError" }
          );
        }
      }
      class b extends s.C {
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
      class y extends s.C {
        constructor({ docsPath: e }) {
          super("Cannot extract event signature from empty topics.", {
            docsPath: e,
            name: "AbiEventSignatureEmptyTopicsError",
          });
        }
      }
      class m extends s.C {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: "AbiEventSignatureNotFoundError" }
          );
        }
      }
      class g extends s.C {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Event ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,
            { docsPath: t, name: "AbiEventNotFoundError" }
          );
        }
      }
      class v extends s.C {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Function ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: "AbiFunctionNotFoundError" }
          );
        }
      }
      class w extends s.C {
        constructor(e, { docsPath: t }) {
          super(
            `Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: "AbiFunctionOutputsNotFoundError" }
          );
        }
      }
      class x extends s.C {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded function signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: "AbiFunctionSignatureNotFoundError" }
          );
        }
      }
      class E extends s.C {
        constructor(e, t) {
          super("Found ambiguous types in overloaded ABI items.", {
            metaMessages: [
              `\`${e.type}\` in \`${(0, n.B)(e.abiItem)}\`, and`,
              `\`${t.type}\` in \`${(0, n.B)(t.abiItem)}\``,
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
            name: "AbiItemAmbiguityError",
          });
        }
      }
      class P extends s.C {
        constructor({ expectedSize: e, givenSize: t }) {
          super(`Expected bytes${e}, got bytes${t}.`, {
            name: "BytesSizeMismatchError",
          });
        }
      }
      class C extends s.C {
        constructor({ abiItem: e, data: t, params: r, size: i }) {
          super(
            `Data size of ${i} bytes is too small for non-indexed event parameters.`,
            {
              metaMessages: [
                `Params: (${(0, n.A)(r, { includeName: !0 })})`,
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
            (this.params = r),
            (this.size = i);
        }
      }
      class I extends s.C {
        constructor({ abiItem: e, param: t }) {
          super(
            `Expected a topic for indexed event parameter${
              t.name ? ` "${t.name}"` : ""
            } on event "${(0, n.B)(e, { includeName: !0 })}".`,
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
      class O extends s.C {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: "InvalidAbiEncodingType" }
          );
        }
      }
      class A extends s.C {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: "InvalidAbiDecodingType" }
          );
        }
      }
      class $ extends s.C {
        constructor(e) {
          super(`Value "${e}" is not a valid array.`, {
            name: "InvalidArrayError",
          });
        }
      }
      class B extends s.C {
        constructor(e) {
          super(
            `"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`,
            { name: "InvalidDefinitionTypeError" }
          );
        }
      }
      s.C;
    },
    99901: (e, t, r) => {
      r.d(t, {
        NO: () => a,
        Pj: () => o,
        dV: () => i,
        nx: () => c,
        zd: () => s,
      });
      var n = r(68321);
      n.C, n.C;
      class i extends n.C {
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
      class s extends n.C {
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
      class a extends n.C {
        constructor({ param: e, type: t, modifier: r }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `Modifier "${r}" not allowed${t ? ` in "${t}" type` : ""}.`,
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
      class o extends n.C {
        constructor({ param: e, type: t, modifier: r }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `Modifier "${r}" not allowed${t ? ` in "${t}" type` : ""}.`,
              `Data location can only be specified for array, struct, or mapping types, but "${r}" was given.`,
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
      class c extends n.C {
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
