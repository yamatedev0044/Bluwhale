"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9543],
  {
    1196: (e, t, n) => {
      n.d(t, { v: () => a });
      var r = n(30445);
      function a({ chain: e, currentChainId: t }) {
        if (!e) throw new r.jF();
        if (t !== e.id) throw new r.EH({ chain: e, currentChainId: t });
      }
    },
    5112: (e, t, n) => {
      n.d(t, { p: () => o });
      var r = n(42264),
        a = n(69432),
        i = n(35020);
      function o(e, { docsPath: t, ...n }) {
        let o = (() => {
          let t = (0, i.l)(e, n);
          return t instanceof r.RM ? e : t;
        })();
        return new a.$s(o, { docsPath: t, ...n });
      }
    },
    6001: (e, t, n) => {
      n.d(t, { useEnsAddress: () => s });
      var r = n(9775),
        a = n(70030),
        i = n(62108),
        o = n(31959),
        u = n(18224),
        c = n(53031);
      function s() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { name: s, query: l = {} } = n,
          d = (0, c.useConfig)(n),
          h = (0, u.useChainId)({ config: d }),
          f = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { name: n, scopeKey: i, ...o } = t[1];
                if (!n) throw Error("name is required");
                let { chainId: u, ...c } = { ...o, name: n },
                  s = e.getClient({ chainId: u });
                return (0, a.T)(s, r.B, "getEnsAddress")(c);
              },
              queryKey: (function (e = {}) {
                return ["ensAddress", (0, i.xO)(e)];
              })(t),
            };
          })(d, { ...n, chainId: null != (e = n.chainId) ? e : h }),
          y = !!(s && (null == (t = l.enabled) || t));
        return (0, o.IT)({ ...l, ...f, enabled: y });
      }
    },
    6790: (e, t, n) => {
      n.d(t, { useTransactionReceipt: () => l });
      var r = n(13494),
        a = n(70030);
      async function i(e, t) {
        let { chainId: n, ...i } = t,
          o = e.getClient({ chainId: n });
        return (0, a.T)(o, r.h, "getTransactionReceipt")(i);
      }
      var o = n(62108),
        u = n(31959),
        c = n(18224),
        s = n(53031);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { hash: r, query: a = {} } = n,
          l = (0, s.useConfig)(n),
          d = (0, c.useChainId)({ config: l }),
          h = (function (e, t = {}) {
            var n;
            return {
              queryFn({ queryKey: t }) {
                let { hash: n, scopeKey: r, ...a } = t[1];
                if (!n) throw Error("hash is required");
                return i(e, { ...a, hash: n });
              },
              queryKey: ((n = t), ["getTransactionReceipt", (0, o.xO)(n)]),
            };
          })(l, { ...n, chainId: null != (e = n.chainId) ? e : d }),
          f = !!(r && (null == (t = a.enabled) || t));
        return (0, u.IT)({ ...a, ...h, enabled: f });
      }
    },
    10405: (e, t, n) => {
      n.d(t, { usePrepareTransactionRequest: () => d });
      var r = n(73979),
        a = n(70030),
        i = n(64997);
      async function o(e, t) {
        let { account: n, chainId: o, ...u } = t,
          c = n ?? (0, i.s)(e).address,
          s = e.getClient({ chainId: o });
        return (0, a.T)(
          s,
          r.ft,
          "prepareTransactionRequest"
        )({ ...u, ...(c ? { account: c } : {}) });
      }
      var u = n(62108),
        c = n(31959),
        s = n(18224),
        l = n(53031);
      function d() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { to: r, query: a = {} } = n,
          i = (0, l.useConfig)(n),
          d = (0, s.useChainId)({ config: i }),
          h = (function (e, t = {}) {
            var n;
            return {
              queryFn({ queryKey: t }) {
                let { scopeKey: n, to: r, ...a } = t[1];
                if (!r) throw Error("to is required");
                return o(e, { to: r, ...a });
              },
              queryKey: ((n = t), ["prepareTransactionRequest", (0, u.xO)(n)]),
            };
          })(i, { ...n, chainId: null != (e = n.chainId) ? e : d }),
          f = !!(r && (null == (t = a.enabled) || t));
        return (0, c.IT)({ ...a, ...h, enabled: f });
      }
    },
    13244: (e, t, n) => {
      n.d(t, { useReadContract: () => c });
      var r = n(9428),
        a = n(62108),
        i = n(31959),
        o = n(18224),
        u = n(53031);
      function c() {
        var e, t, n;
        let c =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { abi: s, address: l, functionName: d, query: h = {} } = c,
          f = c.code,
          y = (0, u.useConfig)(c),
          v = (0, o.useChainId)({ config: y }),
          g = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let a = t.abi;
                if (!a) throw Error("abi is required");
                let { functionName: i, scopeKey: o, ...u } = n[1],
                  c = (() => {
                    let e = n[1];
                    if (e.address) return { address: e.address };
                    if (e.code) return { code: e.code };
                    throw Error("address or code is required");
                  })();
                if (!i) throw Error("functionName is required");
                return (0, r.J)(e, {
                  abi: a,
                  functionName: i,
                  args: u.args,
                  ...c,
                  ...u,
                });
              },
              queryKey: (function (e = {}) {
                let { abi: t, ...n } = e;
                return ["readContract", (0, a.xO)(n)];
              })(t),
            };
          })(y, { ...c, chainId: null != (e = c.chainId) ? e : v }),
          C = !!((l || f) && s && d && (null == (t = h.enabled) || t));
        return (0, i.IT)({
          ...h,
          ...g,
          enabled: C,
          structuralSharing: null != (n = h.structuralSharing) ? n : a.I_,
        });
      }
    },
    20436: (e, t, n) => {
      n.d(t, { useEstimateGas: () => h });
      var r = n(16712),
        a = n(70030),
        i = n(95990);
      async function o(e, t) {
        let n,
          { chainId: o, connector: u, ...c } = t;
        n = t.account
          ? t.account
          : (
              await (0, i.r)(e, {
                account: t.account,
                chainId: o,
                connector: u,
              })
            ).account;
        let s = e.getClient({ chainId: o });
        return (0, a.T)(s, r.Q, "estimateGas")({ ...c, account: n });
      }
      var u = n(62108),
        c = n(31959),
        s = n(18224),
        l = n(53031),
        d = n(48129);
      function h() {
        var e, t, n;
        let r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { connector: a, query: i = {} } = r,
          h = (0, l.useConfig)(r),
          { data: f } = (0, d.useConnectorClient)({
            config: h,
            connector: a,
            query: { enabled: void 0 === r.account },
          }),
          y = null != (e = r.account) ? e : null == f ? void 0 : f.account,
          v = (0, s.useChainId)({ config: h }),
          g = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let { connector: r } = t,
                  { account: a, scopeKey: i, ...u } = n[1];
                if (!a && !r) throw Error("account or connector is required");
                return o(e, { account: a, connector: r, ...u });
              },
              queryKey: (function (e = {}) {
                let { connector: t, ...n } = e;
                return ["estimateGas", (0, u.xO)(n)];
              })(t),
            };
          })(h, {
            ...r,
            account: y,
            chainId: null != (t = r.chainId) ? t : v,
            connector: a,
          }),
          C = !!((y || a) && (null == (n = i.enabled) || n));
        return (0, c.IT)({ ...i, ...g, enabled: C });
      }
    },
    21095: (e, t, n) => {
      n.d(t, { c: () => i });
      var r = n(20760),
        a = n(98564);
      function i(e, t) {
        let { abi: n, args: i, bytecode: o, ...u } = t,
          c = (0, r.m)({ abi: n, args: i, bytecode: o });
        return (0, a.v)(e, {
          ...u,
          ...(u.authorizationList ? { to: null } : {}),
          data: c,
        });
      }
    },
    25089: (e, t, n) => {
      n.d(t, { useSendCalls: () => c });
      var r = n(5041),
        a = n(59857),
        i = n(95990);
      async function o(e, t) {
        let { account: n, chainId: r, connector: o, calls: u, ...c } = t,
          s = await (0, i.r)(e, { account: n, chainId: r, connector: o });
        return (0, a.yM)(s, {
          ...c,
          ...(void 0 !== n ? { account: n } : {}),
          calls: u,
          chain: r ? { id: r } : void 0,
        });
      }
      var u = n(53031);
      function c() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = t,
          a =
            ((e = (0, u.useConfig)(t)),
            { mutationFn: (t) => o(e, t), mutationKey: ["sendCalls"] }),
          { mutate: i, mutateAsync: c, ...s } = (0, r.n)({ ...n, ...a });
        return { ...s, sendCalls: i, sendCallsAsync: c };
      }
    },
    25235: (e, t, n) => {
      n.d(t, { useBlockTransactionCount: () => s });
      var r = n(60004),
        a = n(70030),
        i = n(62108),
        o = n(31959),
        u = n(18224),
        c = n(53031);
      function s() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: n = {} } = t,
          s = (0, c.useConfig)(t),
          l = (0, u.useChainId)({ config: s }),
          d = null != (e = t.chainId) ? e : l,
          h = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { scopeKey: n, ...i } = t[1];
                return (
                  (await (function (e, t = {}) {
                    let { chainId: n, ...i } = t,
                      o = e.getClient({ chainId: n });
                    return (0, a.T)(o, r.L, "getBlockTransactionCount")(i);
                  })(e, i)) ?? null
                );
              },
              queryKey: (function (e = {}) {
                return ["blockTransactionCount", (0, i.xO)(e)];
              })(t),
            };
          })(s, { ...t, chainId: d });
        return (0, o.IT)({ ...n, ...h });
      }
    },
    28118: (e, t, n) => {
      n.d(t, { useStorageAt: () => l });
      var r = n(75830),
        a = n(70030);
      async function i(e, t) {
        let { chainId: n, ...i } = t,
          o = e.getClient({ chainId: n });
        return (0, a.T)(o, r.P, "getStorageAt")(i);
      }
      var o = n(62108),
        u = n(31959),
        c = n(18224),
        s = n(53031);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, slot: a, query: l = {} } = n,
          d = (0, s.useConfig)(n),
          h = (0, c.useChainId)({ config: d }),
          f = (function (e, t = {}) {
            var n;
            return {
              queryFn({ queryKey: t }) {
                let { address: n, slot: r, scopeKey: a, ...o } = t[1];
                if (!n || !r) throw Error("address and slot are required");
                return i(e, { ...o, address: n, slot: r });
              },
              queryKey: ((n = t), ["getStorageAt", (0, o.xO)(n)]),
            };
          })(d, { ...n, chainId: null != (e = n.chainId) ? e : h }),
          y = !!(r && a && (null == (t = l.enabled) || t));
        return (0, u.IT)({ ...l, ...f, enabled: y });
      }
    },
    29383: (e, t, n) => {
      n.d(t, { w: () => r });
      async function r(e, t) {
        return await e.request(
          { method: "wallet_watchAsset", params: t },
          { retryCount: 0 }
        );
      }
    },
    29646: (e, t, n) => {
      n.d(t, { useWaitForCallsStatus: () => l });
      var r = n(84869),
        a = n(95990);
      async function i(e, t) {
        let { connector: n } = t,
          i = await (0, a.r)(e, { connector: n });
        return (0, r.c)(i, t);
      }
      var o = n(77752),
        u = n(62108),
        c = n(31959),
        s = n(53031);
      function l(e) {
        var t, n, r;
        let { id: a, query: l = {} } = e,
          d =
            ((n = (0, s.useConfig)(e)),
            {
              async queryFn({ queryKey: e }) {
                let { scopeKey: t, id: r, ...a } = e[1];
                if (!r) throw Error("id is required");
                return await i(n, { ...a, id: r });
              },
              queryKey: ((r = e), ["callsStatus", (0, u.xO)(r)]),
              retry: (e, t) => !(t instanceof o.gC) && e < 3,
            }),
          h = !!(a && (null == (t = l.enabled) || t));
        return (0, c.IT)({ ...l, ...d, enabled: h });
      }
    },
    30513: (e, t, n) => {
      n.d(t, { useSimulateContract: () => h });
      var r = n(58950),
        a = n(70030),
        i = n(95990);
      async function o(e, t) {
        let n,
          { abi: o, chainId: u, connector: c, ...s } = t;
        n = t.account
          ? t.account
          : (await (0, i.r)(e, { chainId: u, connector: c })).account;
        let l = e.getClient({ chainId: u }),
          d = (0, a.T)(l, r.v, "simulateContract"),
          { result: h, request: f } = await d({ ...s, abi: o, account: n });
        return {
          chainId: l.chain.id,
          result: h,
          request: { ...f, chainId: u },
        };
      }
      var u = n(62108),
        c = n(31959),
        s = n(18224),
        l = n(53031),
        d = n(48129);
      function h() {
        var e, t, n;
        let r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            abi: a,
            address: i,
            connector: h,
            functionName: f,
            query: y = {},
          } = r,
          v = (0, l.useConfig)(r),
          { data: g } = (0, d.useConnectorClient)({
            config: v,
            connector: h,
            query: { enabled: void 0 === r.account },
          }),
          C = (0, s.useChainId)({ config: v }),
          w = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let { abi: r, connector: a } = t;
                if (!r) throw Error("abi is required");
                let { scopeKey: i, ...u } = n[1],
                  { address: c, functionName: s } = u;
                if (!c) throw Error("address is required");
                if (!s) throw Error("functionName is required");
                return o(e, { abi: r, connector: a, ...u });
              },
              queryKey: (function (e = {}) {
                let { abi: t, connector: n, ...r } = e;
                return ["simulateContract", (0, u.xO)(r)];
              })(t),
            };
          })(v, {
            ...r,
            account:
              null != (e = r.account) ? e : null == g ? void 0 : g.account,
            chainId: null != (t = r.chainId) ? t : C,
          }),
          p = !!(a && i && f && (null == (n = y.enabled) || n));
        return (0, c.IT)({ ...y, ...w, enabled: p });
      }
    },
    36781: (e, t, n) => {
      n.d(t, { k: () => c });
      var r = n(93727),
        a = n(54335),
        i = n(27493),
        o = n(35886),
        u = n(59857);
      async function c(e, t) {
        async function n(t) {
          if (t.endsWith(u.vB.slice(2))) {
            let n = (0, a.B)((0, r.iN)(t, -64, -32)),
              o = (0, r.iN)(t, 0, -64)
                .slice(2)
                .match(/.{1,64}/g),
              c = await Promise.all(
                o.map((t) =>
                  u.BH.slice(2) !== t
                    ? e.request(
                        {
                          method: "eth_getTransactionReceipt",
                          params: [`0x${t}`],
                        },
                        { dedupe: !0 }
                      )
                    : void 0
                )
              ),
              s = c.some((e) => null === e)
                ? 100
                : c.every((e) => e?.status === "0x1")
                ? 200
                : c.every((e) => e?.status === "0x0")
                ? 500
                : 600;
            return {
              atomic: !1,
              chainId: (0, i.ME)(n),
              receipts: c.filter(Boolean),
              status: s,
              version: "2.0.0",
            };
          }
          return e.request({ method: "wallet_getCallsStatus", params: [t] });
        }
        let {
            atomic: c = !1,
            chainId: s,
            receipts: l,
            version: d = "2.0.0",
            ...h
          } = await n(t.id),
          [f, y] = (() => {
            let e = h.status;
            return e >= 100 && e < 200
              ? ["pending", e]
              : e >= 200 && e < 300
              ? ["success", e]
              : e >= 300 && e < 700
              ? ["failure", e]
              : "CONFIRMED" === e
              ? ["success", 200]
              : "PENDING" === e
              ? ["pending", 100]
              : [void 0, e];
          })();
        return {
          ...h,
          atomic: c,
          chainId: s ? (0, i.ME)(s) : void 0,
          receipts:
            l?.map((e) => ({
              ...e,
              blockNumber: (0, i.uU)(e.blockNumber),
              gasUsed: (0, i.uU)(e.gasUsed),
              status: o.Lj[e.status],
            })) ?? [],
          statusCode: y,
          status: f,
          version: d,
        };
      }
    },
    37725: (e, t, n) => {
      n.d(t, { useBlockNumber: () => d });
      var r = n(26715),
        a = n(94181),
        i = n(70030),
        o = n(62108),
        u = n(31959),
        c = n(18224),
        s = n(53031),
        l = n(57377);
      function d() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: d = {}, watch: h } = n,
          f = (0, s.useConfig)(n),
          y = (0, r.jE)(),
          v = (0, c.useChainId)({ config: f }),
          g = null != (e = n.chainId) ? e : v,
          C = (function (e, t = {}) {
            return {
              gcTime: 0,
              async queryFn({ queryKey: t }) {
                let { scopeKey: n, ...r } = t[1];
                return (
                  (await (function (e, t = {}) {
                    let { chainId: n, ...r } = t,
                      o = e.getClient({ chainId: n });
                    return (0, i.T)(o, a.G, "getBlockNumber")(r);
                  })(e, r)) ?? null
                );
              },
              queryKey: (function (e = {}) {
                return ["blockNumber", (0, o.xO)(e)];
              })(t),
            };
          })(f, { ...n, chainId: g });
        return (
          (0, l.useWatchBlockNumber)({
            ...{
              config: n.config,
              chainId: n.chainId,
              ...("object" == typeof h ? h : {}),
            },
            enabled: !!(
              (null == (t = d.enabled) || t) &&
              ("object" == typeof h ? h.enabled : h)
            ),
            onBlockNumber(e) {
              y.setQueryData(C.queryKey, e);
            },
          }),
          (0, u.IT)({ ...d, ...C })
        );
      }
    },
    41897: (e, t, n) => {
      n.d(t, { useEstimateFeesPerGas: () => h });
      var r = n(1405),
        a = n(24573),
        i = n(70030),
        o = n(32330);
      async function u(e, t = {}) {
        let { chainId: n, formatUnits: c = "gwei", ...s } = t,
          l = e.getClient({ chainId: n }),
          d = (0, i.T)(l, a._, "estimateFeesPerGas"),
          {
            gasPrice: h,
            maxFeePerGas: f,
            maxPriorityFeePerGas: y,
          } = await d({ ...s, chain: l.chain }),
          v = (0, o.l)(c);
        return {
          formatted: {
            gasPrice: h ? (0, r.J)(h, v) : void 0,
            maxFeePerGas: f ? (0, r.J)(f, v) : void 0,
            maxPriorityFeePerGas: y ? (0, r.J)(y, v) : void 0,
          },
          gasPrice: h,
          maxFeePerGas: f,
          maxPriorityFeePerGas: y,
        };
      }
      var c = n(62108),
        s = n(31959),
        l = n(18224),
        d = n(53031);
      function h() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: n = {} } = t,
          r = (0, d.useConfig)(t),
          a = (0, l.useChainId)({ config: r }),
          i = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { scopeKey: n, ...r } = t[1];
                return u(e, r);
              },
              queryKey: (function (e = {}) {
                return ["estimateFeesPerGas", (0, c.xO)(e)];
              })(t),
            };
          })(r, { ...t, chainId: null != (e = t.chainId) ? e : a });
        return (0, s.IT)({ ...n, ...i });
      }
    },
    42026: (e, t, n) => {
      n.d(t, { useEnsResolver: () => s });
      var r = n(18619),
        a = n(70030),
        i = n(62108),
        o = n(31959),
        u = n(18224),
        c = n(53031);
      function s() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { name: s, query: l = {} } = n,
          d = (0, c.useConfig)(n),
          h = (0, u.useChainId)({ config: d }),
          f = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { name: n, scopeKey: i, ...o } = t[1];
                if (!n) throw Error("name is required");
                let { chainId: u, ...c } = { ...o, name: n },
                  s = e.getClient({ chainId: u });
                return (0, a.T)(s, r.D, "getEnsResolver")(c);
              },
              queryKey: (function (e = {}) {
                return ["ensResolver", (0, i.xO)(e)];
              })(t),
            };
          })(d, { ...n, chainId: null != (e = n.chainId) ? e : h }),
          y = !!(s && (null == (t = l.enabled) || t));
        return (0, o.IT)({ ...l, ...f, enabled: y });
      }
    },
    43600: (e, t, n) => {
      n.d(t, { useShowCallsStatus: () => c });
      var r = n(5041),
        a = n(46786),
        i = n(95990);
      async function o(e, t) {
        let { connector: n, id: r } = t,
          o = await (0, i.r)(e, { connector: n });
        return (0, a.J)(o, { id: r });
      }
      var u = n(53031);
      function c() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = t,
          a =
            ((e = (0, u.useConfig)(t)),
            { mutationFn: (t) => o(e, t), mutationKey: ["showCallsStatus"] }),
          { mutate: i, mutateAsync: c, ...s } = (0, r.n)({ ...n, ...a });
        return { ...s, showCallsStatus: i, showCallsStatusAsync: c };
      }
    },
    43809: (e, t, n) => {
      n.d(t, { useGasPrice: () => s });
      var r = n(39112),
        a = n(70030),
        i = n(62108),
        o = n(31959),
        u = n(18224),
        c = n(53031);
      function s() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: n = {} } = t,
          s = (0, c.useConfig)(t),
          l = (0, u.useChainId)({ config: s }),
          d = null != (e = t.chainId) ? e : l,
          h = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { scopeKey: n, ...i } = t[1];
                return (
                  (await (function (e, t = {}) {
                    let { chainId: n } = t,
                      i = e.getClient({ chainId: n });
                    return (0, a.T)(i, r.L, "getGasPrice")({});
                  })(e, i)) ?? null
                );
              },
              queryKey: (function (e = {}) {
                return ["gasPrice", (0, i.xO)(e)];
              })(t),
            };
          })(s, { ...t, chainId: d });
        return (0, o.IT)({ ...n, ...h });
      }
    },
    46176: (e, t, n) => {
      n.d(t, { useEstimateMaxPriorityFeePerGas: () => l });
      var r = n(76654),
        a = n(70030);
      async function i(e, t = {}) {
        let { chainId: n } = t,
          o = e.getClient({ chainId: n });
        return (0, a.T)(
          o,
          r.b,
          "estimateMaxPriorityFeePerGas"
        )({ chain: o.chain });
      }
      var o = n(62108),
        u = n(31959),
        c = n(18224),
        s = n(53031);
      function l() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: n = {} } = t,
          r = (0, s.useConfig)(t),
          a = (0, c.useChainId)({ config: r }),
          l = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { scopeKey: n, ...r } = t[1];
                return i(e, r);
              },
              queryKey: (function (e = {}) {
                return ["estimateMaxPriorityFeePerGas", (0, o.xO)(e)];
              })(t),
            };
          })(r, { ...t, chainId: null != (e = t.chainId) ? e : a });
        return (0, u.IT)({ ...n, ...l });
      }
    },
    46786: (e, t, n) => {
      n.d(t, { J: () => r });
      async function r(e, t) {
        let { id: n } = t;
        await e.request({ method: "wallet_showCallsStatus", params: [n] });
      }
    },
    47692: (e, t, n) => {
      n.d(t, { useWatchAsset: () => s });
      var r = n(5041),
        a = n(29383),
        i = n(70030),
        o = n(95990);
      async function u(e, t) {
        let { connector: n, ...r } = t,
          u = await (0, o.r)(e, { connector: n });
        return (0, i.T)(u, a.w, "watchAsset")(r);
      }
      var c = n(53031);
      function s() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = t,
          a =
            ((e = (0, c.useConfig)(t)),
            { mutationFn: (t) => u(e, t), mutationKey: ["watchAsset"] }),
          { mutate: i, mutateAsync: o, ...s } = (0, r.n)({ ...n, ...a });
        return { ...s, watchAsset: i, watchAssetAsync: o };
      }
    },
    47990: (e, t, n) => {
      n.d(t, { useInfiniteReadContracts: () => c });
      var r = n(5400),
        a = n(62108),
        i = n(31959),
        o = n(18224),
        u = n(53031);
      function c(e) {
        var t, n;
        let { contracts: c = [], query: s } = e,
          l = (0, u.useConfig)(e),
          d = (0, o.useChainId)({ config: l }),
          h = {
            ...(n = { ...e, chainId: d, contracts: c, query: s }).query,
            async queryFn({ pageParam: e, queryKey: t }) {
              let { contracts: a } = n,
                { cacheKey: i, scopeKey: o, ...u } = t[1];
              return await (0, r.I)(l, { ...u, contracts: a(e) });
            },
            queryKey: (function (e) {
              let { contracts: t, query: n, ...r } = e;
              return ["infiniteReadContracts", (0, a.xO)(r)];
            })(n),
          };
        return (0, i.qu)({
          ...s,
          ...h,
          initialPageParam: h.initialPageParam,
          structuralSharing: null != (t = s.structuralSharing) ? t : a.I_,
        });
      }
    },
    48129: (e, t, n) => {
      n.d(t, { useConnectorClient: () => d });
      var r = n(26715),
        a = n(95990),
        i = n(62108),
        o = n(12115),
        u = n(31959),
        c = n(2145),
        s = n(18224),
        l = n(53031);
      function d() {
        var e, t, n;
        let d =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: h = {}, ...f } = d,
          y = (0, l.useConfig)(f),
          v = (0, r.jE)(),
          {
            address: g,
            connector: C,
            status: w,
          } = (0, c.useAccount)({ config: y }),
          p = (0, s.useChainId)({ config: y }),
          m = null != (e = d.connector) ? e : C,
          { queryKey: I, ...T } = (function (e, t = {}) {
            return {
              gcTime: 0,
              async queryFn({ queryKey: n }) {
                let { connector: r } = t,
                  { connectorUid: i, scopeKey: o, ...u } = n[1];
                return (0, a.r)(e, { ...u, connector: r });
              },
              queryKey: (function (e = {}) {
                let { connector: t, ...n } = e;
                return [
                  "connectorClient",
                  { ...(0, i.xO)(n), connectorUid: t?.uid },
                ];
              })(t),
            };
          })(y, {
            ...d,
            chainId: null != (t = d.chainId) ? t : p,
            connector: m,
          }),
          q = !!(
            ("connected" === w ||
              ("reconnecting" === w && (null == m ? void 0 : m.getProvider))) &&
            (null == (n = h.enabled) || n)
          ),
          b = (0, o.useRef)(g);
        return (
          (0, o.useEffect)(() => {
            let e = b.current;
            !g && e
              ? (v.removeQueries({ queryKey: I }), (b.current = void 0))
              : g !== e &&
                (v.invalidateQueries({ queryKey: I }), (b.current = g));
          }, [g, v]),
          (0, u.IT)({
            ...h,
            ...T,
            queryKey: I,
            enabled: q,
            staleTime: Number.POSITIVE_INFINITY,
          })
        );
      }
    },
    51084: (e, t, n) => {
      n.d(t, { useBytecode: () => l });
      var r = n(49539),
        a = n(70030);
      async function i(e, t) {
        let { chainId: n, ...i } = t,
          o = e.getClient({ chainId: n });
        return (0, a.T)(o, r.Q, "getBytecode")(i);
      }
      var o = n(62108),
        u = n(31959),
        c = n(18224),
        s = n(53031);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, query: a = {} } = n,
          l = (0, s.useConfig)(n),
          d = (0, c.useChainId)({ config: l }),
          h = (function (e, t = {}) {
            var n;
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, scopeKey: r, ...a } = t[1];
                if (!n) throw Error("address is required");
                return (await i(e, { ...a, address: n })) ?? null;
              },
              queryKey: ((n = t), ["getBytecode", (0, o.xO)(n)]),
            };
          })(l, { ...n, chainId: null != (e = n.chainId) ? e : d }),
          f = !!(r && (null == (t = a.enabled) || t));
        return (0, u.IT)({ ...a, ...h, enabled: f });
      }
    },
    53412: (e, t, n) => {
      n.d(t, { useWriteContract: () => o });
      var r = n(5041),
        a = n(97351),
        i = n(53031);
      function o() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = t,
          o =
            ((e = (0, i.useConfig)(t)),
            {
              mutationFn: (t) => (0, a.E)(e, t),
              mutationKey: ["writeContract"],
            }),
          { mutate: u, mutateAsync: c, ...s } = (0, r.n)({ ...n, ...o });
        return { ...s, writeContract: u, writeContractAsync: c };
      }
    },
    55389: (e, t, n) => {
      n.d(t, { useTransaction: () => s });
      var r = n(30106),
        a = n(70030),
        i = n(62108),
        o = n(31959),
        u = n(18224),
        c = n(53031);
      function s() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            blockHash: s,
            blockNumber: l,
            blockTag: d,
            hash: h,
            query: f = {},
          } = n,
          y = (0, c.useConfig)(n),
          v = (0, u.useChainId)({ config: y }),
          g = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let {
                  blockHash: n,
                  blockNumber: i,
                  blockTag: o,
                  hash: u,
                  index: c,
                } = t[1];
                if (!n && !i && !o && !u)
                  throw Error(
                    "blockHash, blockNumber, blockTag, or hash is required"
                  );
                if (!u && !c)
                  throw Error(
                    "index is required for blockHash, blockNumber, or blockTag"
                  );
                let { scopeKey: s, ...l } = t[1],
                  { chainId: d, ...h } = l,
                  f = e.getClient({ chainId: d });
                return (0, a.T)(f, r.x, "getTransaction")(h);
              },
              queryKey: (function (e = {}) {
                return ["transaction", (0, i.xO)(e)];
              })(t),
            };
          })(y, { ...n, chainId: null != (e = n.chainId) ? e : v }),
          C = !!(!(s && l && d && h) && (null == (t = f.enabled) || t));
        return (0, o.IT)({ ...f, ...g, enabled: C });
      }
    },
    55539: (e, t, n) => {
      n.d(t, { useSwitchAccount: () => c });
      var r = n(5041),
        a = n(77752);
      async function i(e, t) {
        let { connector: n } = t,
          r = e.state.connections.get(n.uid);
        if (!r) throw new a.gC();
        return (
          await e.storage?.setItem("recentConnectorId", n.id),
          e.setState((e) => ({ ...e, current: n.uid })),
          { accounts: r.accounts, chainId: r.chainId }
        );
      }
      var o = n(53031),
        u = n(34533);
      function c() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, o.useConfig)(e),
          a = { mutationFn: (e) => i(n, e), mutationKey: ["switchAccount"] },
          { mutate: c, mutateAsync: s, ...l } = (0, r.n)({ ...t, ...a });
        return {
          ...l,
          connectors: (0, u.useConnections)({ config: n }).map(
            (e) => e.connector
          ),
          switchAccount: c,
          switchAccountAsync: s,
        };
      }
    },
    57377: (e, t, n) => {
      n.d(t, { useWatchBlockNumber: () => c });
      var r = n(85543),
        a = n(70030),
        i = n(12115),
        o = n(18224),
        u = n(53031);
      function c() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { enabled: n = !0, onBlockNumber: c, config: s, ...l } = t,
          d = (0, u.useConfig)(t),
          h = (0, o.useChainId)({ config: d }),
          f = null != (e = t.chainId) ? e : h;
        (0, i.useEffect)(() => {
          if (n && c)
            return (function (e, t) {
              let n,
                i,
                {
                  syncConnectedChain: o = e._internal.syncConnectedChain,
                  ...u
                } = t,
                c = (t) => {
                  n && n();
                  let i = e.getClient({ chainId: t });
                  return (n = (0, a.T)(i, r.q, "watchBlockNumber")(u));
                },
                s = c(t.chainId);
              return (
                o &&
                  !t.chainId &&
                  (i = e.subscribe(
                    ({ chainId: e }) => e,
                    async (e) => c(e)
                  )),
                () => {
                  s?.(), i?.();
                }
              );
            })(d, { ...l, chainId: f, onBlockNumber: c });
        }, [
          f,
          d,
          n,
          c,
          l.onError,
          l.emitMissed,
          l.emitOnBegin,
          l.poll,
          l.pollingInterval,
          l.syncConnectedChain,
        ]);
      }
    },
    58389: (e, t, n) => {
      n.d(t, { useReconnect: () => o });
      var r = n(5041),
        a = n(75483),
        i = n(53031);
      function o() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, i.useConfig)(e),
          o = { mutationFn: (e) => (0, a.M)(n, e), mutationKey: ["reconnect"] },
          { mutate: u, mutateAsync: c, ...s } = (0, r.n)({ ...t, ...o });
        return {
          ...s,
          connectors: n.connectors,
          reconnect: u,
          reconnectAsync: c,
        };
      }
    },
    59450: (e, t, n) => {
      n.d(t, { useWatchPendingTransactions: () => c });
      var r = n(50541),
        a = n(70030),
        i = n(12115),
        o = n(18224),
        u = n(53031);
      function c() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { enabled: n = !0, onTransactions: c, config: s, ...l } = t,
          d = (0, u.useConfig)(t),
          h = (0, o.useChainId)({ config: d }),
          f = null != (e = t.chainId) ? e : h;
        (0, i.useEffect)(() => {
          if (n && c)
            return (function (e, t) {
              let n,
                i,
                {
                  syncConnectedChain: o = e._internal.syncConnectedChain,
                  ...u
                } = t,
                c = (t) => {
                  n && n();
                  let i = e.getClient({ chainId: t });
                  return (n = (0, a.T)(i, r.u, "watchPendingTransactions")(u));
                },
                s = c(t.chainId);
              return (
                o &&
                  !t.chainId &&
                  (i = e.subscribe(
                    ({ chainId: e }) => e,
                    async (e) => c(e)
                  )),
                () => {
                  s?.(), i?.();
                }
              );
            })(d, { ...l, chainId: f, onTransactions: c });
        }, [
          f,
          d,
          n,
          c,
          l.batch,
          l.onError,
          l.poll,
          l.pollingInterval,
          l.syncConnectedChain,
        ]);
      }
    },
    59857: (e, t, n) => {
      n.d(t, { BH: () => y, vB: () => f, yM: () => v });
      var r = n(19405),
        a = n(50431),
        i = n(7441),
        o = n(81379),
        u = n(60367),
        c = n(79731),
        s = n(27493),
        l = n(67622),
        d = n(5112),
        h = n(98564);
      let f =
          "0x5792579257925792579257925792579257925792579257925792579257925792",
        y = (0, l.cK)(0, { size: 32 });
      async function v(e, t) {
        let {
          account: n = e.account,
          capabilities: v,
          chain: g = e.chain,
          experimental_fallback: C,
          experimental_fallbackDelay: w = 32,
          forceAtomic: p = !1,
          id: m,
          version: I = "2.0.0",
        } = t;
        if (void 0 === n)
          throw new a.T({ docsPath: "/docs/actions/wallet/sendCalls" });
        let T = n ? (0, r.J)(n) : null,
          q = t.calls.map((e) => ({
            data: e.abi
              ? (0, u.p)({
                  abi: e.abi,
                  functionName: e.functionName,
                  args: e.args,
                })
              : e.data,
            to: e.to,
            value: e.value ? (0, l.cK)(e.value) : void 0,
          }));
        try {
          let t = await e.request(
            {
              method: "wallet_sendCalls",
              params: [
                {
                  atomicRequired: p,
                  calls: q,
                  capabilities: v,
                  chainId: (0, l.cK)(g.id),
                  from: T?.address,
                  id: m,
                  version: I,
                },
              ],
            },
            { retryCount: 0 }
          );
          if ("string" == typeof t) return { id: t };
          return t;
        } catch (n) {
          if (
            C &&
            ("MethodNotFoundRpcError" === n.name ||
              "MethodNotSupportedRpcError" === n.name ||
              n.details
                .toLowerCase()
                .includes("does not exist / is not available") ||
              n.details
                .toLowerCase()
                .includes("missing or invalid. request()") ||
              n.details
                .toLowerCase()
                .includes("did not match any variant of untagged enum"))
          ) {
            if (v && Object.values(v).some((e) => !e.optional)) {
              let e =
                "non-optional `capabilities` are not supported on fallback to `eth_sendTransaction`.";
              throw new o.L5(new i.C(e, { details: e }));
            }
            if (p && q.length > 1) {
              let e =
                "`forceAtomic` is not supported on fallback to `eth_sendTransaction`.";
              throw new o.jz(new i.C(e, { details: e }));
            }
            let t = [];
            for (let n of q) {
              let r = (0, h.v)(e, {
                account: T,
                chain: g,
                data: n.data,
                to: n.to,
                value: n.value ? (0, s.uU)(n.value) : void 0,
              });
              t.push(r), w > 0 && (await new Promise((e) => setTimeout(e, w)));
            }
            let n = await Promise.allSettled(t);
            if (n.every((e) => "rejected" === e.status)) throw n[0].reason;
            let r = n.map((e) => ("fulfilled" === e.status ? e.value : y));
            return { id: (0, c.xW)([...r, (0, l.cK)(g.id, { size: 32 }), f]) };
          }
          throw (0, d.p)(n, { ...t, account: T, chain: t.chain });
        }
      }
    },
    61131: (e, t, n) => {
      n.d(t, { E: () => s });
      var r = n(19405),
        a = n(50431),
        i = n(60367),
        o = n(54842),
        u = n(34524),
        c = n(98564);
      async function s(e, t) {
        let {
          abi: n,
          account: s = e.account,
          address: l,
          args: d,
          dataSuffix: h,
          functionName: f,
          ...y
        } = t;
        if (void 0 === s)
          throw new a.T({ docsPath: "/docs/contract/writeContract" });
        let v = s ? (0, r.J)(s) : null,
          g = (0, i.p)({ abi: n, args: d, functionName: f });
        try {
          return await (0, u.T)(
            e,
            c.v,
            "sendTransaction"
          )({
            data: `${g}${h ? h.replace("0x", "") : ""}`,
            to: l,
            account: v,
            ...y,
          });
        } catch (e) {
          throw (0, o.j)(e, {
            abi: n,
            address: l,
            args: d,
            docsPath: "/docs/contract/writeContract",
            functionName: f,
            sender: v?.address,
          });
        }
      }
    },
    62854: (e, t, n) => {
      n.d(t, { useWatchContractEvent: () => c });
      var r = n(22653),
        a = n(70030),
        i = n(12115),
        o = n(18224),
        u = n(53031);
      function c() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { enabled: n = !0, onLogs: c, config: s, ...l } = t,
          d = (0, u.useConfig)(t),
          h = (0, o.useChainId)({ config: d }),
          f = null != (e = t.chainId) ? e : h;
        (0, i.useEffect)(() => {
          if (n && c)
            return (function (e, t) {
              let n,
                i,
                {
                  syncConnectedChain: o = e._internal.syncConnectedChain,
                  ...u
                } = t,
                c = (t) => {
                  n && n();
                  let i = e.getClient({ chainId: t });
                  return (n = (0, a.T)(i, r.q, "watchContractEvent")(u));
                },
                s = c(t.chainId);
              return (
                o &&
                  !t.chainId &&
                  (i = e.subscribe(
                    ({ chainId: e }) => e,
                    async (e) => c(e)
                  )),
                () => {
                  s?.(), i?.();
                }
              );
            })(d, { ...l, chainId: f, onLogs: c });
        }, [
          f,
          d,
          n,
          c,
          l.abi,
          l.address,
          l.args,
          l.batch,
          l.eventName,
          l.fromBlock,
          l.onError,
          l.poll,
          l.pollingInterval,
          l.strict,
          l.syncConnectedChain,
        ]);
      }
    },
    65840: (e, t, n) => {
      n.d(t, { useBlock: () => h });
      var r = n(26715),
        a = n(23335),
        i = n(70030);
      async function o(e, t = {}) {
        let { chainId: n, ...r } = t,
          u = e.getClient({ chainId: n }),
          c = (0, i.T)(u, a.g, "getBlock");
        return { ...(await c(r)), chainId: u.chain.id };
      }
      var u = n(62108),
        c = n(31959),
        s = n(18224),
        l = n(53031),
        d = n(94329);
      function h() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: a = {}, watch: i } = n,
          h = (0, l.useConfig)(n),
          f = (0, r.jE)(),
          y = (0, s.useChainId)({ config: h }),
          v = null != (e = n.chainId) ? e : y,
          g = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { scopeKey: n, ...r } = t[1];
                return (await o(e, r)) ?? null;
              },
              queryKey: (function (e = {}) {
                return ["block", (0, u.xO)(e)];
              })(t),
            };
          })(h, { ...n, chainId: v }),
          C = !!(null == (t = a.enabled) || t);
        return (
          (0, d.useWatchBlocks)({
            ...{
              config: n.config,
              chainId: n.chainId,
              ...("object" == typeof i ? i : {}),
            },
            enabled: !!(C && ("object" == typeof i ? i.enabled : i)),
            onBlock(e) {
              f.setQueryData(g.queryKey, e);
            },
          }),
          (0, c.IT)({ ...a, ...g, enabled: C })
        );
      }
    },
    69493: (e, t, n) => {
      n.d(t, { useVerifyTypedData: () => l });
      var r = n(83185),
        a = n(70030);
      async function i(e, t) {
        let { chainId: n, ...i } = t,
          o = e.getClient({ chainId: n });
        return (0, a.T)(o, r.w, "verifyTypedData")(i);
      }
      var o = n(62108),
        u = n(31959),
        c = n(18224),
        s = n(53031);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            address: r,
            message: a,
            primaryType: l,
            signature: d,
            types: h,
            query: f = {},
          } = n,
          y = (0, s.useConfig)(n),
          v = (0, c.useChainId)({ config: y }),
          g = (function (e, t = {}) {
            var n;
            return {
              async queryFn({ queryKey: t }) {
                let {
                  address: n,
                  message: r,
                  primaryType: a,
                  signature: o,
                  types: u,
                  scopeKey: c,
                  ...s
                } = t[1];
                if (!n) throw Error("address is required");
                if (!r) throw Error("message is required");
                if (!a) throw Error("primaryType is required");
                if (!o) throw Error("signature is required");
                if (!u) throw Error("types is required");
                return (
                  (await i(e, {
                    ...s,
                    address: n,
                    message: r,
                    primaryType: a,
                    signature: o,
                    types: u,
                  })) ?? null
                );
              },
              queryKey: ((n = t), ["verifyTypedData", (0, o.xO)(n)]),
            };
          })(y, { ...n, chainId: null != (e = n.chainId) ? e : v }),
          C = !!(r && a && l && d && h && (null == (t = f.enabled) || t));
        return (0, u.IT)({ ...f, ...g, enabled: C });
      }
    },
    70272: (e, t, n) => {
      n.d(t, { useVerifyMessage: () => l });
      var r = n(20578),
        a = n(70030);
      async function i(e, t) {
        let { chainId: n, ...i } = t,
          o = e.getClient({ chainId: n });
        return (0, a.T)(o, r.l, "verifyMessage")(i);
      }
      var o = n(62108),
        u = n(31959),
        c = n(18224),
        s = n(53031);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, message: a, signature: l, query: d = {} } = n,
          h = (0, s.useConfig)(n),
          f = (0, c.useChainId)({ config: h }),
          y = (function (e, t = {}) {
            var n;
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, message: r, signature: a } = t[1];
                if (!n || !r || !a)
                  throw Error("address, message, and signature are required");
                let { scopeKey: o, ...u } = t[1];
                return (await i(e, u)) ?? null;
              },
              queryKey: ((n = t), ["verifyMessage", (0, o.xO)(n)]),
            };
          })(h, { ...n, chainId: null != (e = n.chainId) ? e : f }),
          v = !!(r && a && l && (null == (t = d.enabled) || t));
        return (0, u.IT)({ ...d, ...y, enabled: v });
      }
    },
    72340: (e, t, n) => {
      n.d(t, { F: () => i });
      var r = n(19405),
        a = n(67622);
      async function i(e, t = {}) {
        let { account: n = e.account, chainId: o } = t,
          u = n ? (0, r.J)(n) : void 0,
          c = o ? [u?.address, [(0, a.cK)(o)]] : [u?.address],
          s = await e.request({ method: "wallet_getCapabilities", params: c }),
          l = {};
        for (let [e, t] of Object.entries(s))
          for (let [n, r] of ((l[Number(e)] = {}), Object.entries(t)))
            "addSubAccount" === n && (n = "unstable_addSubAccount"),
              (l[Number(e)][n] = r);
        return "number" == typeof o ? l[o] : l;
      }
    },
    72501: (e, t, n) => {
      n.d(t, { C: () => o });
      var r = n(19405),
        a = n(50431),
        i = n(90477);
      async function o(e, t) {
        let {
          account: n = e.account,
          domain: o,
          message: u,
          primaryType: c,
        } = t;
        if (!n)
          throw new a.T({ docsPath: "/docs/actions/wallet/signTypedData" });
        let s = (0, r.J)(n),
          l = { EIP712Domain: (0, i.H4)({ domain: o }), ...t.types };
        if (
          ((0, i.$$)({ domain: o, message: u, primaryType: c, types: l }),
          s.signTypedData)
        )
          return s.signTypedData({
            domain: o,
            message: u,
            primaryType: c,
            types: l,
          });
        let d = (0, i.v8)({ domain: o, message: u, primaryType: c, types: l });
        return e.request(
          { method: "eth_signTypedData_v4", params: [s.address, d] },
          { retryCount: 0 }
        );
      }
    },
    75162: (e, t, n) => {
      n.d(t, { n: () => c });
      var r = n(27493),
        a = n(84014),
        i = n(30106),
        o = n(81946),
        u = n(70030);
      async function c(e, t) {
        let { chainId: n, timeout: c = 0, ...s } = t,
          l = e.getClient({ chainId: n }),
          d = (0, u.T)(l, a.n, "waitForTransactionReceipt"),
          h = await d({ ...s, timeout: c });
        if ("reverted" === h.status) {
          let e = (0, u.T)(l, i.x, "getTransaction"),
            t = await e({ hash: h.transactionHash }),
            n = (0, u.T)(l, o.T, "call"),
            a = await n({
              ...t,
              data: t.input,
              gasPrice: "eip1559" !== t.type ? t.gasPrice : void 0,
              maxFeePerGas: "eip1559" === t.type ? t.maxFeePerGas : void 0,
              maxPriorityFeePerGas:
                "eip1559" === t.type ? t.maxPriorityFeePerGas : void 0,
            });
          throw Error(
            a?.data ? (0, r.IQ)(`0x${a.data.substring(138)}`) : "unknown reason"
          );
        }
        return { ...h, chainId: l.chain.id };
      }
    },
    75933: (e, t, n) => {
      n.d(t, { useDeployContract: () => s });
      var r = n(5041),
        a = n(21095),
        i = n(70030),
        o = n(95990);
      async function u(e, t) {
        let n,
          { account: r, chainId: u, connector: c, ...s } = t;
        n =
          "object" == typeof r && r?.type === "local"
            ? e.getClient({ chainId: u })
            : await (0, o.r)(e, {
                account: r ?? void 0,
                chainId: u,
                connector: c,
              });
        let l = (0, i.T)(n, a.c, "deployContract");
        return await l({
          ...s,
          ...(r ? { account: r } : {}),
          chain: u ? { id: u } : null,
        });
      }
      var c = n(53031);
      function s() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = t,
          a =
            ((e = (0, c.useConfig)(t)),
            { mutationFn: (t) => u(e, t), mutationKey: ["deployContract"] }),
          { mutate: i, mutateAsync: o, ...s } = (0, r.n)({ ...n, ...a });
        return { ...s, deployContract: i, deployContractAsync: o };
      }
    },
    80364: (e, t, n) => {
      n.d(t, { useProof: () => l });
      var r = n(57011),
        a = n(70030);
      async function i(e, t) {
        let { chainId: n, ...i } = t,
          o = e.getClient({ chainId: n });
        return (0, a.T)(o, r.l, "getProof")(i);
      }
      var o = n(62108),
        u = n(31959),
        c = n(18224),
        s = n(53031);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, storageKeys: a, query: l = {} } = n,
          d = (0, s.useConfig)(n),
          h = (0, c.useChainId)({ config: d }),
          f = (function (e, t = {}) {
            var n;
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, scopeKey: r, storageKeys: a, ...o } = t[1];
                if (!n || !a)
                  throw Error("address and storageKeys are required");
                return i(e, { ...o, address: n, storageKeys: a });
              },
              queryKey: ((n = t), ["getProof", (0, o.xO)(n)]),
            };
          })(d, { ...n, chainId: null != (e = n.chainId) ? e : h }),
          y = !!(r && a && (null == (t = l.enabled) || t));
        return (0, u.IT)({ ...l, ...f, enabled: y });
      }
    },
    81328: (e, t, n) => {
      n.d(t, { useCall: () => l });
      var r = n(81946),
        a = n(70030);
      async function i(e, t) {
        let { chainId: n, ...i } = t,
          o = e.getClient({ chainId: n });
        return (0, a.T)(o, r.T, "call")(i);
      }
      var o = n(62108),
        u = n(31959),
        c = n(18224),
        s = n(53031);
      function l() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: n = {} } = t,
          r = (0, s.useConfig)(t),
          a = (0, c.useChainId)({ config: r }),
          l = (function (e, t = {}) {
            var n;
            return {
              async queryFn({ queryKey: t }) {
                let { scopeKey: n, ...r } = t[1];
                return (await i(e, { ...r })) ?? null;
              },
              queryKey: ((n = t), ["call", (0, o.xO)(n)]),
            };
          })(r, { ...t, chainId: null != (e = t.chainId) ? e : a });
        return (0, u.IT)({ ...n, ...l });
      }
    },
    82588: (e, t, n) => {
      n.d(t, { useCapabilities: () => d });
      var r = n(72340),
        a = n(95990);
      async function i(e, t = {}) {
        let { account: n, chainId: o, connector: u } = t,
          c = await (0, a.r)(e, { account: n, connector: u });
        return (0, r.F)(c, { account: n, chainId: o });
      }
      var o = n(77752),
        u = n(62108),
        c = n(31959),
        s = n(2145),
        l = n(53031);
      function d() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { account: t, query: n = {} } = e,
          { address: r } = (0, s.useAccount)(),
          a = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { scopeKey: n, ...r } = t[1];
                return await i(e, r);
              },
              queryKey: (function (e = {}) {
                return ["capabilities", (0, u.xO)(e)];
              })(t),
              retry: (e, t) => !(t instanceof o.gC) && e < 3,
            };
          })((0, l.useConfig)(e), { ...e, account: null != t ? t : r });
        return (0, c.IT)({ ...n, ...a });
      }
    },
    83902: (e, t, n) => {
      n.d(t, { useSignTypedData: () => s });
      var r = n(5041),
        a = n(72501),
        i = n(70030),
        o = n(95990);
      async function u(e, t) {
        let n,
          { account: r, connector: u, ...c } = t;
        return (
          (n =
            "object" == typeof r && "local" === r.type
              ? e.getClient()
              : await (0, o.r)(e, { account: r, connector: u })),
          (0, i.T)(
            n,
            a.C,
            "signTypedData"
          )({ ...c, ...(r ? { account: r } : {}) })
        );
      }
      var c = n(53031);
      function s() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = t,
          a =
            ((e = (0, c.useConfig)(t)),
            { mutationFn: (t) => u(e, t), mutationKey: ["signTypedData"] }),
          { mutate: i, mutateAsync: o, ...s } = (0, r.n)({ ...n, ...a });
        return { ...s, signTypedData: i, signTypedDataAsync: o };
      }
    },
    83908: (e, t, n) => {
      n.d(t, { useCallsStatus: () => l });
      var r = n(36781),
        a = n(95990);
      async function i(e, t) {
        let { connector: n, id: i } = t,
          o = await (0, a.r)(e, { connector: n });
        return (0, r.k)(o, { id: i });
      }
      var o = n(77752),
        u = n(62108),
        c = n(31959),
        s = n(53031);
      function l(e) {
        var t, n;
        let { query: r = {} } = e,
          a =
            ((t = (0, s.useConfig)(e)),
            {
              async queryFn({ queryKey: e }) {
                let { scopeKey: n, ...r } = e[1];
                return await i(t, r);
              },
              queryKey: ((n = e), ["callsStatus", (0, u.xO)(n)]),
              retry: (e, t) => !(t instanceof o.gC) && e < 3,
            });
        return (0, c.IT)({ ...r, ...a });
      }
    },
    83947: (e, t, n) => {
      n.d(t, { useSendTransaction: () => s });
      var r = n(5041),
        a = n(98564),
        i = n(70030),
        o = n(95990);
      async function u(e, t) {
        let n,
          { account: r, chainId: u, connector: c, ...s } = t;
        n =
          "object" == typeof r && r?.type === "local"
            ? e.getClient({ chainId: u })
            : await (0, o.r)(e, {
                account: r ?? void 0,
                chainId: u,
                connector: c,
              });
        let l = (0, i.T)(n, a.v, "sendTransaction");
        return await l({
          ...s,
          ...(r ? { account: r } : {}),
          chain: u ? { id: u } : null,
          gas: s.gas ?? void 0,
        });
      }
      var c = n(53031);
      function s() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = t,
          a =
            ((e = (0, c.useConfig)(t)),
            { mutationFn: (t) => u(e, t), mutationKey: ["sendTransaction"] }),
          { mutate: i, mutateAsync: o, ...s } = (0, r.n)({ ...n, ...a });
        return { ...s, sendTransaction: i, sendTransactionAsync: o };
      }
    },
    84661: (e, t, n) => {
      n.d(t, { useWaitForTransactionReceipt: () => c });
      var r = n(75162),
        a = n(62108),
        i = n(31959),
        o = n(18224),
        u = n(53031);
      function c() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { hash: c, query: s = {} } = n,
          l = (0, u.useConfig)(n),
          d = (0, o.useChainId)({ config: l }),
          h = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let { hash: a, ...i } = n[1];
                if (!a) throw Error("hash is required");
                return (0, r.n)(e, { ...i, onReplaced: t.onReplaced, hash: a });
              },
              queryKey: (function (e = {}) {
                let { onReplaced: t, ...n } = e;
                return ["waitForTransactionReceipt", (0, a.xO)(n)];
              })(t),
            };
          })(l, { ...n, chainId: null != (e = n.chainId) ? e : d }),
          f = !!(c && (null == (t = s.enabled) || t));
        return (0, i.IT)({ ...s, ...h, enabled: f });
      }
    },
    84869: (e, t, n) => {
      n.d(t, { c: () => s });
      var r = n(7441),
        a = n(72342),
        i = n(86435),
        o = n(62739),
        u = n(79183),
        c = n(36781);
      async function s(e, t) {
        let n,
          {
            id: r,
            pollingInterval: s = e.pollingInterval,
            status: d = ({ statusCode: e }) => e >= 200,
            timeout: h = 6e4,
          } = t,
          f = (0, u.A)(["waitForCallsStatus", e.uid, r]),
          { promise: y, resolve: v, reject: g } = (0, o.Y)(),
          C = (0, a.lB)(f, { resolve: v, reject: g }, (t) => {
            let a = (0, i.w)(
              async () => {
                let i = (e) => {
                  clearTimeout(n), a(), e(), C();
                };
                try {
                  let n = await (0, c.k)(e, { id: r });
                  if (!d(n)) return;
                  i(() => t.resolve(n));
                } catch (e) {
                  i(() => t.reject(e));
                }
              },
              { interval: s, emitOnBegin: !0 }
            );
            return a;
          });
        return (
          (n = h
            ? setTimeout(() => {
                C(), clearTimeout(n), g(new l({ id: r }));
              }, h)
            : void 0),
          await y
        );
      }
      class l extends r.C {
        constructor({ id: e }) {
          super(
            `Timed out while waiting for call bundle with id "${e}" to be confirmed.`,
            { name: "WaitForCallsStatusTimeoutError" }
          );
        }
      }
    },
    84881: (e, t, n) => {
      n.d(t, { useEnsText: () => s });
      var r = n(65830),
        a = n(70030),
        i = n(62108),
        o = n(31959),
        u = n(18224),
        c = n(53031);
      function s() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { key: s, name: l, query: d = {} } = n,
          h = (0, c.useConfig)(n),
          f = (0, u.useChainId)({ config: h }),
          y = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { key: n, name: i, scopeKey: o, ...u } = t[1];
                if (!n || !i) throw Error("key and name are required");
                let { chainId: c, ...s } = { ...u, key: n, name: i },
                  l = e.getClient({ chainId: c });
                return (0, a.T)(l, r.m, "getEnsText")(s);
              },
              queryKey: (function (e = {}) {
                return ["ensText", (0, i.xO)(e)];
              })(t),
            };
          })(h, { ...n, chainId: null != (e = n.chainId) ? e : f }),
          v = !!(s && l && (null == (t = d.enabled) || t));
        return (0, o.IT)({ ...d, ...y, enabled: v });
      }
    },
    91035: (e, t, n) => {
      n.d(t, { useTransactionCount: () => l });
      var r = n(13649),
        a = n(70030);
      async function i(e, t) {
        let { address: n, blockNumber: i, blockTag: o, chainId: u } = t,
          c = e.getClient({ chainId: u });
        return (0, a.T)(
          c,
          r.y,
          "getTransactionCount"
        )(i ? { address: n, blockNumber: i } : { address: n, blockTag: o });
      }
      var o = n(62108),
        u = n(31959),
        c = n(18224),
        s = n(53031);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, query: a = {} } = n,
          l = (0, s.useConfig)(n),
          d = (0, c.useChainId)({ config: l }),
          h = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, scopeKey: r, ...a } = t[1];
                if (!n) throw Error("address is required");
                return (await i(e, { ...a, address: n })) ?? null;
              },
              queryKey: (function (e = {}) {
                return ["transactionCount", (0, o.xO)(e)];
              })(t),
            };
          })(l, { ...n, chainId: null != (e = n.chainId) ? e : d }),
          f = !!(r && (null == (t = a.enabled) || t));
        return (0, u.IT)({ ...a, ...h, enabled: f });
      }
    },
    91287: (e, t, n) => {
      n.d(t, { useFeeHistory: () => s });
      var r = n(39050),
        a = n(70030),
        i = n(62108),
        o = n(31959),
        u = n(18224),
        c = n(53031);
      function s() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { blockCount: s, rewardPercentiles: l, query: d = {} } = n,
          h = (0, c.useConfig)(n),
          f = (0, u.useChainId)({ config: h }),
          y = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let {
                  blockCount: n,
                  rewardPercentiles: i,
                  scopeKey: o,
                  ...u
                } = t[1];
                if (!n) throw Error("blockCount is required");
                if (!i) throw Error("rewardPercentiles is required");
                return (
                  (await (function (e, t) {
                    let { chainId: n, ...i } = t,
                      o = e.getClient({ chainId: n });
                    return (0, a.T)(o, r.T, "getFeeHistory")(i);
                  })(e, { ...u, blockCount: n, rewardPercentiles: i })) ?? null
                );
              },
              queryKey: (function (e = {}) {
                return ["feeHistory", (0, i.xO)(e)];
              })(t),
            };
          })(h, { ...n, chainId: null != (e = n.chainId) ? e : f }),
          v = !!(s && l && (null == (t = d.enabled) || t));
        return (0, o.IT)({ ...d, ...y, enabled: v });
      }
    },
    92934: (e, t, n) => {
      n.d(t, { useTransactionConfirmations: () => s });
      var r = n(19192),
        a = n(70030),
        i = n(62108),
        o = n(31959),
        u = n(18224),
        c = n(53031);
      function s() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { hash: s, transactionReceipt: l, query: d = {} } = n,
          h = (0, c.useConfig)(n),
          f = (0, u.useChainId)({ config: h }),
          y = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let {
                  hash: n,
                  transactionReceipt: i,
                  scopeKey: o,
                  ...u
                } = t[1];
                if (!n && !i)
                  throw Error("hash or transactionReceipt is required");
                return (
                  (await (function (e, t) {
                    let { chainId: n, ...i } = t,
                      o = e.getClient({ chainId: n });
                    return (0, a.T)(o, r.d, "getTransactionConfirmations")(i);
                  })(e, { hash: n, transactionReceipt: i, ...u })) ?? null
                );
              },
              queryKey: (function (e = {}) {
                return ["transactionConfirmations", (0, i.xO)(e)];
              })(t),
            };
          })(h, { ...n, chainId: null != (e = n.chainId) ? e : f }),
          v = !!(!(s && l) && (s || l) && (null == (t = d.enabled) || t));
        return (0, o.IT)({ ...d, ...y, enabled: v });
      }
    },
    93212: (e, t, n) => {
      n.d(t, { useToken: () => y });
      var r = n(35109),
        a = n(1405),
        i = n(27493),
        o = n(54335),
        u = n(32330),
        c = n(5400);
      async function s(e, t) {
        let { address: n, chainId: s, formatUnits: l = 18 } = t;
        function d(e) {
          return [
            {
              type: "function",
              name: "decimals",
              stateMutability: "view",
              inputs: [],
              outputs: [{ type: "uint8" }],
            },
            {
              type: "function",
              name: "name",
              stateMutability: "view",
              inputs: [],
              outputs: [{ type: e }],
            },
            {
              type: "function",
              name: "symbol",
              stateMutability: "view",
              inputs: [],
              outputs: [{ type: e }],
            },
            {
              type: "function",
              name: "totalSupply",
              stateMutability: "view",
              inputs: [],
              outputs: [{ type: "uint256" }],
            },
          ];
        }
        try {
          let t = d("string"),
            i = { address: n, abi: t, chainId: s },
            [o, h, f, y] = await (0, c.I)(e, {
              allowFailure: !0,
              contracts: [
                { ...i, functionName: "decimals" },
                { ...i, functionName: "name" },
                { ...i, functionName: "symbol" },
                { ...i, functionName: "totalSupply" },
              ],
            });
          if (h.error instanceof r.bG) throw h.error;
          if (f.error instanceof r.bG) throw f.error;
          if (o.error) throw o.error;
          if (y.error) throw y.error;
          return {
            address: n,
            decimals: o.result,
            name: h.result,
            symbol: f.result,
            totalSupply: {
              formatted: (0, a.J)(y.result, (0, u.l)(l)),
              value: y.result,
            },
          };
        } catch (t) {
          if (t instanceof r.bG) {
            let t = { address: n, abi: d("bytes32"), chainId: s },
              [r, h, f, y] = await (0, c.I)(e, {
                allowFailure: !1,
                contracts: [
                  { ...t, functionName: "decimals" },
                  { ...t, functionName: "name" },
                  { ...t, functionName: "symbol" },
                  { ...t, functionName: "totalSupply" },
                ],
              });
            return {
              address: n,
              decimals: r,
              name: (0, i.IQ)((0, o.B)(h, { dir: "right" })),
              symbol: (0, i.IQ)((0, o.B)(f, { dir: "right" })),
              totalSupply: { formatted: (0, a.J)(y, (0, u.l)(l)), value: y },
            };
          }
          throw t;
        }
      }
      var l = n(62108),
        d = n(31959),
        h = n(18224),
        f = n(53031);
      function y() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, query: a = {} } = n,
          i = (0, f.useConfig)(n),
          o = (0, h.useChainId)({ config: i }),
          u = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: n, scopeKey: r, ...a } = t[1];
                if (!n) throw Error("address is required");
                return s(e, { ...a, address: n });
              },
              queryKey: (function (e = {}) {
                return ["token", (0, l.xO)(e)];
              })(t),
            };
          })(i, { ...n, chainId: null != (e = n.chainId) ? e : o }),
          c = !!(r && (null == (t = a.enabled) || t));
        return (0, d.IT)({ ...a, ...u, enabled: c });
      }
    },
    94329: (e, t, n) => {
      n.d(t, { useWatchBlocks: () => c });
      var r = n(73479),
        a = n(70030),
        i = n(12115),
        o = n(18224),
        u = n(53031);
      function c() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { enabled: n = !0, onBlock: c, config: s, ...l } = t,
          d = (0, u.useConfig)(t),
          h = (0, o.useChainId)({ config: d }),
          f = null != (e = t.chainId) ? e : h;
        (0, i.useEffect)(() => {
          if (n && c)
            return (function (e, t) {
              let n,
                i,
                {
                  syncConnectedChain: o = e._internal.syncConnectedChain,
                  ...u
                } = t,
                c = (t) => {
                  n && n();
                  let i = e.getClient({ chainId: t });
                  return (n = (0, a.T)(i, r.O, "watchBlocks")(u));
                },
                s = c(t.chainId);
              return (
                o &&
                  !t.chainId &&
                  (i = e.subscribe(
                    ({ chainId: e }) => e,
                    async (e) => c(e)
                  )),
                () => {
                  s?.(), i?.();
                }
              );
            })(d, { ...l, chainId: f, onBlock: c });
        }, [
          f,
          d,
          n,
          c,
          l.blockTag,
          l.emitMissed,
          l.emitOnBegin,
          l.includeTransactions,
          l.onError,
          l.poll,
          l.pollingInterval,
          l.syncConnectedChain,
        ]);
      }
    },
    94739: (e, t, n) => {
      n.d(t, { useClient: () => o });
      var r = n(34613),
        a = n(45566),
        i = n(53031);
      function o() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, i.useConfig)(e);
        return (0, a.useSyncExternalStoreWithSelector)(
          (e) =>
            (function (e, t) {
              let { onChange: n } = t;
              return e.subscribe(() => (0, r.K)(e), n, {
                equalityFn: (e, t) => e?.uid === t?.uid,
              });
            })(t, { onChange: e }),
          () => (0, r.K)(t, e),
          () => (0, r.K)(t, e),
          (e) => e,
          (e, t) =>
            (null == e ? void 0 : e.uid) === (null == t ? void 0 : t.uid)
        );
      }
    },
    95052: (e, t, n) => {
      n.d(t, { useReadContracts: () => s });
      var r = n(5400),
        a = n(62108),
        i = n(12115),
        o = n(31959),
        u = n(18224),
        c = n(53031);
      function s() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { contracts: n = [], query: s = {} } = t,
          l = (0, c.useConfig)(t),
          d = (0, u.useChainId)({ config: l }),
          h = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let a = [],
                  i = n[1].contracts.length;
                for (let e = 0; e < i; e++) {
                  let r = n[1].contracts[e],
                    i = (t.contracts?.[e]).abi;
                  a.push({ ...r, abi: i });
                }
                let { scopeKey: o, ...u } = n[1];
                return (0, r.I)(e, { ...u, contracts: a });
              },
              queryKey: (function (e = {}) {
                let t = [];
                for (let n of e.contracts ?? []) {
                  let { abi: r, ...a } = n;
                  t.push({ ...a, chainId: a.chainId ?? e.chainId });
                }
                return ["readContracts", (0, a.xO)({ ...e, contracts: t })];
              })(t),
            };
          })(l, { ...t, chainId: d }),
          f = (0, i.useMemo)(() => {
            var e;
            let t = !1;
            for (let e of n) {
              let { abi: n, address: r, functionName: a } = e;
              if (!n || !r || !a) {
                t = !1;
                break;
              }
              t = !0;
            }
            return !!(t && (null == (e = s.enabled) || e));
          }, [n, s.enabled]);
        return (0, o.IT)({
          ...h,
          ...s,
          enabled: f,
          structuralSharing: null != (e = s.structuralSharing) ? e : a.I_,
        });
      }
    },
    97351: (e, t, n) => {
      n.d(t, { E: () => o });
      var r = n(61131),
        a = n(70030),
        i = n(95990);
      async function o(e, t) {
        let n,
          { account: o, chainId: u, connector: c, ...s } = t;
        n =
          "object" == typeof o && o?.type === "local"
            ? e.getClient({ chainId: u })
            : await (0, i.r)(e, {
                account: o ?? void 0,
                chainId: u,
                connector: c,
              });
        let l = (0, a.T)(n, r.E, "writeContract");
        return await l({
          ...s,
          ...(o ? { account: o } : {}),
          chain: u ? { id: u } : null,
        });
      }
    },
    97869: (e, t, n) => {
      n.d(t, { useWalletClient: () => L });
      var r = n(26715),
        a = n(926),
        i = n(67622);
      async function o(e, { chain: t }) {
        let {
          id: n,
          name: r,
          nativeCurrency: a,
          rpcUrls: o,
          blockExplorers: u,
        } = t;
        await e.request(
          {
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: (0, i.cK)(n),
                chainName: r,
                nativeCurrency: a,
                rpcUrls: o.default.http,
                blockExplorerUrls: u
                  ? Object.values(u).map(({ url: e }) => e)
                  : void 0,
              },
            ],
          },
          { dedupe: !0, retryCount: 0 }
        );
      }
      var u = n(21095),
        c = n(35883);
      async function s(e) {
        return e.account?.type === "local"
          ? [e.account.address]
          : (await e.request({ method: "eth_accounts" }, { dedupe: !0 })).map(
              (e) => (0, c.o)(e)
            );
      }
      var l = n(36781),
        d = n(72340);
      async function h(e) {
        return await e.request(
          { method: "wallet_getPermissions" },
          { dedupe: !0 }
        );
      }
      var f = n(19405),
        y = n(50431),
        v = n(17255),
        g = n(34524),
        C = n(13649);
      async function w(e, t) {
        let { account: n = e.account, chainId: r, nonce: i } = t;
        if (!n)
          throw new y.T({ docsPath: "/docs/eip7702/prepareAuthorization" });
        let o = (0, f.J)(n),
          u = (() => {
            if (t.executor)
              return "self" === t.executor ? t.executor : (0, f.J)(t.executor);
          })(),
          c = { address: t.contractAddress ?? t.address, chainId: r, nonce: i };
        return (
          void 0 === c.chainId &&
            (c.chainId =
              e.chain?.id ?? (await (0, g.T)(e, a.T, "getChainId")({}))),
          void 0 === c.nonce &&
            ((c.nonce = await (0, g.T)(
              e,
              C.y,
              "getTransactionCount"
            )({ address: o.address, blockTag: "pending" })),
            ("self" === u || (u?.address && (0, v.h)(u.address, o.address))) &&
              (c.nonce += 1)),
          c
        );
      }
      var p = n(73979);
      async function m(e) {
        return (
          await e.request(
            { method: "eth_requestAccounts" },
            { dedupe: !0, retryCount: 0 }
          )
        ).map((e) => (0, c.b)(e));
      }
      async function I(e, t) {
        return e.request(
          { method: "wallet_requestPermissions", params: [t] },
          { retryCount: 0 }
        );
      }
      var T = n(59857),
        q = n(2806),
        b = n(98564),
        K = n(46786);
      async function E(e, t) {
        let { account: n = e.account } = t;
        if (!n) throw new y.T({ docsPath: "/docs/eip7702/signAuthorization" });
        let r = (0, f.J)(n);
        if (!r.signAuthorization)
          throw new y.Z({
            docsPath: "/docs/eip7702/signAuthorization",
            metaMessages: [
              "The `signAuthorization` Action does not support JSON-RPC Accounts.",
            ],
            type: r.type,
          });
        let a = await w(e, t);
        return r.signAuthorization(a);
      }
      var F = n(41246),
        x = n(1196),
        P = n(76743),
        A = n(65358);
      async function S(e, t) {
        let { account: n = e.account, chain: r = e.chain, ...o } = t;
        if (!n)
          throw new y.T({ docsPath: "/docs/actions/wallet/signTransaction" });
        let u = (0, f.J)(n);
        (0, A.c)({ account: u, ...t });
        let c = await (0, g.T)(e, a.T, "getChainId")({});
        null !== r && (0, x.v)({ currentChainId: c, chain: r });
        let s = r?.formatters || e.chain?.formatters,
          l = s?.transactionRequest?.format || P.Bv;
        return u.signTransaction
          ? u.signTransaction(
              { ...o, chainId: c },
              { serializer: e.chain?.serializers?.transaction }
            )
          : await e.request(
              {
                method: "eth_signTransaction",
                params: [{ ...l(o), chainId: (0, i.cK)(c), from: u.address }],
              },
              { retryCount: 0 }
            );
      }
      var N = n(72501);
      async function O(e, { id: t }) {
        await e.request(
          {
            method: "wallet_switchEthereumChain",
            params: [{ chainId: (0, i.cK)(t) }],
          },
          { retryCount: 0 }
        );
      }
      var k = n(84869),
        R = n(29383),
        _ = n(61131);
      function M(e) {
        return {
          addChain: (t) => o(e, t),
          deployContract: (t) => (0, u.c)(e, t),
          getAddresses: () => s(e),
          getCallsStatus: (t) => (0, l.k)(e, t),
          getCapabilities: (t) => (0, d.F)(e, t),
          getChainId: () => (0, a.T)(e),
          getPermissions: () => h(e),
          prepareAuthorization: (t) => w(e, t),
          prepareTransactionRequest: (t) => (0, p.ft)(e, t),
          requestAddresses: () => m(e),
          requestPermissions: (t) => I(e, t),
          sendCalls: (t) => (0, T.yM)(e, t),
          sendRawTransaction: (t) => (0, q.L)(e, t),
          sendTransaction: (t) => (0, b.v)(e, t),
          showCallsStatus: (t) => (0, K.J)(e, t),
          signAuthorization: (t) => E(e, t),
          signMessage: (t) => (0, F.l)(e, t),
          signTransaction: (t) => S(e, t),
          signTypedData: (t) => (0, N.C)(e, t),
          switchChain: (t) => O(e, t),
          waitForCallsStatus: (t) => (0, k.c)(e, t),
          watchAsset: (t) => (0, R.w)(e, t),
          writeContract: (t) => (0, _.E)(e, t),
        };
      }
      var B = n(95990);
      async function j(e, t = {}) {
        return (await (0, B.r)(e, t)).extend(M);
      }
      var G = n(62108),
        D = n(12115),
        J = n(31959),
        z = n(2145),
        U = n(18224),
        W = n(53031);
      function L() {
        var e, t, n, a;
        let i =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: o = {}, ...u } = i,
          c = (0, W.useConfig)(u),
          s = (0, r.jE)(),
          {
            address: l,
            connector: d,
            status: h,
          } = (0, z.useAccount)({ config: c }),
          f = (0, U.useChainId)({ config: c }),
          y = null != (e = i.connector) ? e : d,
          { queryKey: v, ...g } = (function (e, t = {}) {
            return {
              gcTime: 0,
              async queryFn({ queryKey: n }) {
                let { connector: r } = t,
                  { connectorUid: a, scopeKey: i, ...o } = n[1];
                return j(e, { ...o, connector: r });
              },
              queryKey: (function (e = {}) {
                let { connector: t, ...n } = e;
                return [
                  "walletClient",
                  { ...(0, G.xO)(n), connectorUid: t?.uid },
                ];
              })(t),
            };
          })(c, {
            ...i,
            chainId: null != (t = i.chainId) ? t : f,
            connector: null != (n = i.connector) ? n : d,
          }),
          C = !!(
            ("connected" === h ||
              ("reconnecting" === h && (null == y ? void 0 : y.getProvider))) &&
            (null == (a = o.enabled) || a)
          ),
          w = (0, D.useRef)(l);
        return (
          (0, D.useEffect)(() => {
            let e = w.current;
            !l && e
              ? (s.removeQueries({ queryKey: v }), (w.current = void 0))
              : l !== e &&
                (s.invalidateQueries({ queryKey: v }), (w.current = l));
          }, [l, s]),
          (0, J.IT)({
            ...o,
            ...g,
            queryKey: v,
            enabled: C,
            staleTime: Number.POSITIVE_INFINITY,
          })
        );
      }
    },
    98564: (e, t, n) => {
      n.d(t, { v: () => w });
      var r = n(19405),
        a = n(50431),
        i = n(7441),
        o = n(83987),
        u = n(1196),
        c = n(5112),
        s = n(7671),
        l = n(76743),
        d = n(34524),
        h = n(65003),
        f = n(65358),
        y = n(926),
        v = n(73979),
        g = n(2806);
      let C = new h.A(128);
      async function w(e, t) {
        let {
          account: n = e.account,
          chain: h = e.chain,
          accessList: w,
          authorizationList: p,
          blobs: m,
          data: I,
          gas: T,
          gasPrice: q,
          maxFeePerBlobGas: b,
          maxFeePerGas: K,
          maxPriorityFeePerGas: E,
          nonce: F,
          type: x,
          value: P,
          ...A
        } = t;
        if (void 0 === n)
          throw new a.T({ docsPath: "/docs/actions/wallet/sendTransaction" });
        let S = n ? (0, r.J)(n) : null;
        try {
          (0, f.c)(t);
          let n = await (async () =>
            t.to
              ? t.to
              : null !== t.to && p && p.length > 0
              ? await (0, o.g)({ authorization: p[0] }).catch(() => {
                  throw new i.C(
                    "`to` is required. Could not infer from `authorizationList`."
                  );
                })
              : void 0)();
          if (S?.type === "json-rpc" || null === S) {
            let t;
            null !== h &&
              ((t = await (0, d.T)(e, y.T, "getChainId")({})),
              (0, u.v)({ currentChainId: t, chain: h }));
            let r = e.chain?.formatters?.transactionRequest?.format,
              a = (r || l.Bv)({
                ...(0, s.o)(A, { format: r }),
                accessList: w,
                authorizationList: p,
                blobs: m,
                chainId: t,
                data: I,
                from: S?.address,
                gas: T,
                gasPrice: q,
                maxFeePerBlobGas: b,
                maxFeePerGas: K,
                maxPriorityFeePerGas: E,
                nonce: F,
                to: n,
                type: x,
                value: P,
              }),
              i = C.get(e.uid);
            try {
              return await e.request(
                {
                  method: i ? "wallet_sendTransaction" : "eth_sendTransaction",
                  params: [a],
                },
                { retryCount: 0 }
              );
            } catch (t) {
              if (!1 === i) throw t;
              if (
                "InvalidInputRpcError" === t.name ||
                "InvalidParamsRpcError" === t.name ||
                "MethodNotFoundRpcError" === t.name ||
                "MethodNotSupportedRpcError" === t.name
              )
                return await e
                  .request(
                    { method: "wallet_sendTransaction", params: [a] },
                    { retryCount: 0 }
                  )
                  .then((t) => (C.set(e.uid, !0), t))
                  .catch((n) => {
                    if (
                      "MethodNotFoundRpcError" === n.name ||
                      "MethodNotSupportedRpcError" === n.name
                    )
                      throw (C.set(e.uid, !1), t);
                    throw n;
                  });
              throw t;
            }
          }
          if (S?.type === "local") {
            let t = await (0, d.T)(
                e,
                v.ft,
                "prepareTransactionRequest"
              )({
                account: S,
                accessList: w,
                authorizationList: p,
                blobs: m,
                chain: h,
                data: I,
                gas: T,
                gasPrice: q,
                maxFeePerBlobGas: b,
                maxFeePerGas: K,
                maxPriorityFeePerGas: E,
                nonce: F,
                nonceManager: S.nonceManager,
                parameters: [...v.MM, "sidecars"],
                type: x,
                value: P,
                ...A,
                to: n,
              }),
              r = h?.serializers?.transaction,
              a = await S.signTransaction(t, { serializer: r });
            return await (0, d.T)(
              e,
              g.L,
              "sendRawTransaction"
            )({ serializedTransaction: a });
          }
          if (S?.type === "smart")
            throw new a.Z({
              metaMessages: [
                "Consider using the `sendUserOperation` Action instead.",
              ],
              docsPath: "/docs/actions/bundler/sendUserOperation",
              type: "smart",
            });
          throw new a.Z({
            docsPath: "/docs/actions/wallet/sendTransaction",
            type: S?.type,
          });
        } catch (e) {
          if (e instanceof a.Z) throw e;
          throw (0, c.p)(e, { ...t, account: S, chain: t.chain || void 0 });
        }
      }
    },
  },
]);
