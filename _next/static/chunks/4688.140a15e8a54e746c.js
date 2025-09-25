(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4688],
  {
    8314: (e, t, n) => {
      var r = n(44134).Buffer;
      let s = n(96236),
        i = n(59828),
        a = {
          type: "object",
          properties: {
            types: {
              type: "object",
              additionalProperties: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    type: { type: "string" },
                  },
                  required: ["name", "type"],
                },
              },
            },
            primaryType: { type: "string" },
            domain: { type: "object" },
            message: { type: "object" },
          },
          required: ["types", "primaryType", "domain", "message"],
        },
        o = {
          encodeData(e, t, n, a = !0) {
            let o = ["bytes32"],
              c = [this.hashType(e, n)];
            if (a) {
              let l = (e, t, o) => {
                if (void 0 !== n[t])
                  return [
                    "bytes32",
                    null == o
                      ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                      : s.keccak(this.encodeData(t, o, n, a)),
                  ];
                if (void 0 === o)
                  throw Error(`missing value for field ${e} of type ${t}`);
                if ("bytes" === t) return ["bytes32", s.keccak(o)];
                if ("string" === t)
                  return (
                    "string" == typeof o && (o = r.from(o, "utf8")),
                    ["bytes32", s.keccak(o)]
                  );
                if (t.lastIndexOf("]") === t.length - 1) {
                  let n = t.slice(0, t.lastIndexOf("[")),
                    r = o.map((t) => l(e, n, t));
                  return [
                    "bytes32",
                    s.keccak(
                      i.rawEncode(
                        r.map(([e]) => e),
                        r.map(([, e]) => e)
                      )
                    ),
                  ];
                }
                return [t, o];
              };
              for (let r of n[e]) {
                let [e, n] = l(r.name, r.type, t[r.name]);
                o.push(e), c.push(n);
              }
            } else
              for (let i of n[e]) {
                let e = t[i.name];
                if (void 0 !== e)
                  if ("bytes" === i.type)
                    o.push("bytes32"), (e = s.keccak(e)), c.push(e);
                  else if ("string" === i.type)
                    o.push("bytes32"),
                      "string" == typeof e && (e = r.from(e, "utf8")),
                      (e = s.keccak(e)),
                      c.push(e);
                  else if (void 0 !== n[i.type])
                    o.push("bytes32"),
                      (e = s.keccak(this.encodeData(i.type, e, n, a))),
                      c.push(e);
                  else if (i.type.lastIndexOf("]") === i.type.length - 1)
                    throw Error("Arrays currently unimplemented in encodeData");
                  else o.push(i.type), c.push(e);
              }
            return i.rawEncode(o, c);
          },
          encodeType(e, t) {
            let n = "",
              r = this.findTypeDependencies(e, t).filter((t) => t !== e);
            for (let s of (r = [e].concat(r.sort()))) {
              if (!t[s]) throw Error("No type definition specified: " + s);
              n +=
                s +
                "(" +
                t[s].map(({ name: e, type: t }) => t + " " + e).join(",") +
                ")";
            }
            return n;
          },
          findTypeDependencies(e, t, n = []) {
            if (((e = e.match(/^\w*/)[0]), n.includes(e) || void 0 === t[e]))
              return n;
            for (let r of (n.push(e), t[e]))
              for (let e of this.findTypeDependencies(r.type, t, n))
                n.includes(e) || n.push(e);
            return n;
          },
          hashStruct(e, t, n, r = !0) {
            return s.keccak(this.encodeData(e, t, n, r));
          },
          hashType(e, t) {
            return s.keccak(this.encodeType(e, t));
          },
          sanitizeData(e) {
            let t = {};
            for (let n in a.properties) e[n] && (t[n] = e[n]);
            return (
              t.types &&
                (t.types = Object.assign({ EIP712Domain: [] }, t.types)),
              t
            );
          },
          hash(e, t = !0) {
            let n = this.sanitizeData(e),
              i = [r.from("1901", "hex")];
            return (
              i.push(this.hashStruct("EIP712Domain", n.domain, n.types, t)),
              "EIP712Domain" !== n.primaryType &&
                i.push(this.hashStruct(n.primaryType, n.message, n.types, t)),
              s.keccak(r.concat(i))
            );
          },
        };
      e.exports = {
        TYPED_MESSAGE_SCHEMA: a,
        TypedDataUtils: o,
        hashForSignTypedDataLegacy: function (e) {
          return (function (e) {
            let t = Error("Expect argument to be non-empty array");
            if ("object" != typeof e || !e.length) throw t;
            let n = e.map(function (e) {
                return "bytes" === e.type ? s.toBuffer(e.value) : e.value;
              }),
              r = e.map(function (e) {
                return e.type;
              }),
              a = e.map(function (e) {
                if (!e.name) throw t;
                return e.type + " " + e.name;
              });
            return i.soliditySHA3(
              ["bytes32", "bytes32"],
              [
                i.soliditySHA3(Array(e.length).fill("string"), a),
                i.soliditySHA3(r, n),
              ]
            );
          })(e.data);
        },
        hashForSignTypedData_v3: function (e) {
          return o.hash(e.data, !1);
        },
        hashForSignTypedData_v4: function (e) {
          return o.hash(e.data);
        },
      };
    },
    50755: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          useCallback: () => C,
          useContext: () => x,
          useDebugValue: () => S,
          useEffect: () => w,
          useErrorBoundary: () => M,
          useId: () => A,
          useImperativeHandle: () => I,
          useLayoutEffect: () => v,
          useMemo: () => E,
          useReducer: () => b,
          useRef: () => k,
          useState: () => y,
        });
      var r,
        s,
        i,
        a,
        o = n(66117),
        c = 0,
        l = [],
        u = o.options,
        d = u.__b,
        h = u.__r,
        p = u.diffed,
        f = u.__c,
        _ = u.unmount,
        m = u.__;
      function g(e, t) {
        u.__h && u.__h(s, e, c || t), (c = 0);
        var n = s.__H || (s.__H = { __: [], __h: [] });
        return e >= n.__.length && n.__.push({}), n.__[e];
      }
      function y(e) {
        return (c = 1), b(T, e);
      }
      function b(e, t, n) {
        var i = g(r++, 2);
        if (
          ((i.t = e),
          !i.__c &&
            ((i.__ = [
              n ? n(t) : T(void 0, t),
              function (e) {
                var t = i.__N ? i.__N[0] : i.__[0],
                  n = i.t(t, e);
                t !== n && ((i.__N = [n, i.__[1]]), i.__c.setState({}));
              },
            ]),
            (i.__c = s),
            !s.__f))
        ) {
          var a = function (e, t, n) {
            if (!i.__c.__H) return !0;
            var r = i.__c.__H.__.filter(function (e) {
              return !!e.__c;
            });
            if (
              r.every(function (e) {
                return !e.__N;
              })
            )
              return !o || o.call(this, e, t, n);
            var s = i.__c.props !== e;
            return (
              r.forEach(function (e) {
                if (e.__N) {
                  var t = e.__[0];
                  (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (s = !0);
                }
              }),
              (o && o.call(this, e, t, n)) || s
            );
          };
          s.__f = !0;
          var o = s.shouldComponentUpdate,
            c = s.componentWillUpdate;
          (s.componentWillUpdate = function (e, t, n) {
            if (this.__e) {
              var r = o;
              (o = void 0), a(e, t, n), (o = r);
            }
            c && c.call(this, e, t, n);
          }),
            (s.shouldComponentUpdate = a);
        }
        return i.__N || i.__;
      }
      function w(e, t) {
        var n = g(r++, 3);
        !u.__s && R(n.__H, t) && ((n.__ = e), (n.u = t), s.__H.__h.push(n));
      }
      function v(e, t) {
        var n = g(r++, 4);
        !u.__s && R(n.__H, t) && ((n.__ = e), (n.u = t), s.__h.push(n));
      }
      function k(e) {
        return (
          (c = 5),
          E(function () {
            return { current: e };
          }, [])
        );
      }
      function I(e, t, n) {
        (c = 6),
          v(
            function () {
              if ("function" == typeof e) {
                var n = e(t());
                return function () {
                  e(null), n && "function" == typeof n && n();
                };
              }
              if (e)
                return (
                  (e.current = t()),
                  function () {
                    return (e.current = null);
                  }
                );
            },
            null == n ? n : n.concat(e)
          );
      }
      function E(e, t) {
        var n = g(r++, 7);
        return R(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
      }
      function C(e, t) {
        return (
          (c = 8),
          E(function () {
            return e;
          }, t)
        );
      }
      function x(e) {
        var t = s.context[e.__c],
          n = g(r++, 9);
        return (
          (n.c = e),
          t ? (null == n.__ && ((n.__ = !0), t.sub(s)), t.props.value) : e.__
        );
      }
      function S(e, t) {
        u.useDebugValue && u.useDebugValue(t ? t(e) : e);
      }
      function M(e) {
        var t = g(r++, 10),
          n = y();
        return (
          (t.__ = e),
          s.componentDidCatch ||
            (s.componentDidCatch = function (e, r) {
              t.__ && t.__(e, r), n[1](e);
            }),
          [
            n[0],
            function () {
              n[1](void 0);
            },
          ]
        );
      }
      function A() {
        var e = g(r++, 11);
        if (!e.__) {
          for (var t = s.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
          var n = t.__m || (t.__m = [0, 0]);
          e.__ = "P" + n[0] + "-" + n[1]++;
        }
        return e.__;
      }
      function P() {
        for (var e; (e = l.shift()); )
          if (e.__P && e.__H)
            try {
              e.__H.__h.forEach(N), e.__H.__h.forEach(L), (e.__H.__h = []);
            } catch (t) {
              (e.__H.__h = []), u.__e(t, e.__v);
            }
      }
      (u.__b = function (e) {
        (s = null), d && d(e);
      }),
        (u.__ = function (e, t) {
          e && t.__k && t.__k.__m && (e.__m = t.__k.__m), m && m(e, t);
        }),
        (u.__r = function (e) {
          h && h(e), (r = 0);
          var t = (s = e.__c).__H;
          t &&
            (i === s
              ? ((t.__h = []),
                (s.__h = []),
                t.__.forEach(function (e) {
                  e.__N && (e.__ = e.__N), (e.u = e.__N = void 0);
                }))
              : (t.__h.forEach(N), t.__h.forEach(L), (t.__h = []), (r = 0))),
            (i = s);
        }),
        (u.diffed = function (e) {
          p && p(e);
          var t = e.__c;
          t &&
            t.__H &&
            (t.__H.__h.length &&
              ((1 !== l.push(t) && a === u.requestAnimationFrame) ||
                (
                  (a = u.requestAnimationFrame) ||
                  function (e) {
                    var t,
                      n = function () {
                        clearTimeout(r),
                          D && cancelAnimationFrame(t),
                          setTimeout(e);
                      },
                      r = setTimeout(n, 35);
                    D && (t = requestAnimationFrame(n));
                  }
                )(P)),
            t.__H.__.forEach(function (e) {
              e.u && (e.__H = e.u), (e.u = void 0);
            })),
            (i = s = null);
        }),
        (u.__c = function (e, t) {
          t.some(function (e) {
            try {
              e.__h.forEach(N),
                (e.__h = e.__h.filter(function (e) {
                  return !e.__ || L(e);
                }));
            } catch (n) {
              t.some(function (e) {
                e.__h && (e.__h = []);
              }),
                (t = []),
                u.__e(n, e.__v);
            }
          }),
            f && f(e, t);
        }),
        (u.unmount = function (e) {
          _ && _(e);
          var t,
            n = e.__c;
          n &&
            n.__H &&
            (n.__H.__.forEach(function (e) {
              try {
                N(e);
              } catch (e) {
                t = e;
              }
            }),
            (n.__H = void 0),
            t && u.__e(t, n.__v));
        });
      var D = "function" == typeof requestAnimationFrame;
      function N(e) {
        var t = s,
          n = e.__c;
        "function" == typeof n && ((e.__c = void 0), n()), (s = t);
      }
      function L(e) {
        var t = s;
        (e.__c = e.__()), (s = t);
      }
      function R(e, t) {
        return (
          !e ||
          e.length !== t.length ||
          t.some(function (t, n) {
            return t !== e[n];
          })
        );
      }
      function T(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
    },
    59828: (e, t, n) => {
      var r = n(44134).Buffer;
      let s = n(96236);
      function i(e) {
        if (e.startsWith("int[")) return "int256" + e.slice(3);
        if ("int" === e) return "int256";
        if (e.startsWith("uint[")) return "uint256" + e.slice(4);
        if ("uint" === e) return "uint256";
        if (e.startsWith("fixed[")) return "fixed128x128" + e.slice(5);
        else if ("fixed" === e) return "fixed128x128";
        else if (e.startsWith("ufixed[")) return "ufixed128x128" + e.slice(6);
        else if ("ufixed" === e) return "ufixed128x128";
        return e;
      }
      function a(e) {
        return Number.parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
      }
      function o(e) {
        var t = /^\D+(\d+)x(\d+)$/.exec(e);
        return [Number.parseInt(t[1], 10), Number.parseInt(t[2], 10)];
      }
      function c(e) {
        var t = e.match(/(.*)\[(.*?)\]$/);
        return t ? ("" === t[2] ? "dynamic" : Number.parseInt(t[2], 10)) : null;
      }
      function l(e) {
        var t = typeof e;
        if ("string" === t || "number" === t) return BigInt(e);
        if ("bigint" === t) return e;
        throw Error("Argument is not a number");
      }
      function u(e, t) {
        if ("address" === e) return u("uint160", l(t));
        if ("bool" === e) return u("uint8", +!!t);
        if ("string" === e) return u("bytes", new r(t, "utf8"));
        if ((p = e).lastIndexOf("]") === p.length - 1) {
          if (void 0 === t.length) throw Error("Not an array?");
          if ("dynamic" !== (n = c(e)) && 0 !== n && t.length > n)
            throw Error("Elements exceed array size: " + n);
          for (h in ((d = []),
          (e = e.slice(0, e.lastIndexOf("["))),
          "string" == typeof t && (t = JSON.parse(t)),
          t))
            d.push(u(e, t[h]));
          if ("dynamic" === n) {
            var n,
              i,
              d,
              h,
              p,
              f = u("uint256", t.length);
            d.unshift(f);
          }
          return r.concat(d);
        } else if ("bytes" === e)
          return (
            (t = new r(t)),
            (d = r.concat([u("uint256", t.length), t])),
            t.length % 32 != 0 &&
              (d = r.concat([d, s.zeros(32 - (t.length % 32))])),
            d
          );
        else if (e.startsWith("bytes")) {
          if ((n = a(e)) < 1 || n > 32)
            throw Error("Invalid bytes<N> width: " + n);
          return s.setLengthRight(t, 32);
        } else if (e.startsWith("uint")) {
          if ((n = a(e)) % 8 || n < 8 || n > 256)
            throw Error("Invalid uint<N> width: " + n);
          i = l(t);
          let r = s.bitLengthFromBigInt(i);
          if (r > n)
            throw Error("Supplied uint exceeds width: " + n + " vs " + r);
          if (i < 0) throw Error("Supplied uint is negative");
          return s.bufferBEFromBigInt(i, 32);
        } else if (e.startsWith("int")) {
          if ((n = a(e)) % 8 || n < 8 || n > 256)
            throw Error("Invalid int<N> width: " + n);
          i = l(t);
          let r = s.bitLengthFromBigInt(i);
          if (r > n)
            throw Error("Supplied int exceeds width: " + n + " vs " + r);
          let o = s.twosFromBigInt(i, 256);
          return s.bufferBEFromBigInt(o, 32);
        } else if (e.startsWith("ufixed")) {
          if (((n = o(e)), (i = l(t)) < 0))
            throw Error("Supplied ufixed is negative");
          return u("uint256", i * BigInt(2) ** BigInt(n[1]));
        } else if (e.startsWith("fixed"))
          return (n = o(e)), u("int256", l(t) * BigInt(2) ** BigInt(n[1]));
        throw Error("Unsupported or invalid type: " + e);
      }
      function d(e, t) {
        if (e.length !== t.length)
          throw Error("Number of types are not matching the values");
        for (var n, o, c = [], u = 0; u < e.length; u++) {
          var d = i(e[u]),
            h = t[u];
          if ("bytes" === d) c.push(h);
          else if ("string" === d) c.push(new r(h, "utf8"));
          else if ("bool" === d) c.push(new r(h ? "01" : "00", "hex"));
          else if ("address" === d) c.push(s.setLength(h, 20));
          else if (d.startsWith("bytes")) {
            if ((n = a(d)) < 1 || n > 32)
              throw Error("Invalid bytes<N> width: " + n);
            c.push(s.setLengthRight(h, n));
          } else if (d.startsWith("uint")) {
            if ((n = a(d)) % 8 || n < 8 || n > 256)
              throw Error("Invalid uint<N> width: " + n);
            o = l(h);
            let e = s.bitLengthFromBigInt(o);
            if (e > n)
              throw Error("Supplied uint exceeds width: " + n + " vs " + e);
            c.push(s.bufferBEFromBigInt(o, n / 8));
          } else if (d.startsWith("int")) {
            if ((n = a(d)) % 8 || n < 8 || n > 256)
              throw Error("Invalid int<N> width: " + n);
            o = l(h);
            let e = s.bitLengthFromBigInt(o);
            if (e > n)
              throw Error("Supplied int exceeds width: " + n + " vs " + e);
            let t = s.twosFromBigInt(o, n);
            c.push(s.bufferBEFromBigInt(t, n / 8));
          } else throw Error("Unsupported or invalid type: " + d);
        }
        return r.concat(c);
      }
      e.exports = {
        rawEncode: function (e, t) {
          var n = [],
            s = [],
            a = 32 * e.length;
          for (var o in e) {
            var l = i(e[o]),
              d = u(l, t[o]);
            "string" === l || "bytes" === l || "dynamic" === c(l)
              ? (n.push(u("uint256", a)), s.push(d), (a += d.length))
              : n.push(d);
          }
          return r.concat(n.concat(s));
        },
        solidityPack: d,
        soliditySHA3: function (e, t) {
          return s.keccak(d(e, t));
        },
      };
    },
    64688: (e, t, n) => {
      "use strict";
      n.d(t, { createCoinbaseWalletSDK: () => eX });
      class r {
        constructor(e, t) {
          (this.scope = e), (this.module = t);
        }
        storeObject(e, t) {
          this.setItem(e, JSON.stringify(t));
        }
        loadObject(e) {
          let t = this.getItem(e);
          return t ? JSON.parse(t) : void 0;
        }
        setItem(e, t) {
          localStorage.setItem(this.scopedKey(e), t);
        }
        getItem(e) {
          return localStorage.getItem(this.scopedKey(e));
        }
        removeItem(e) {
          localStorage.removeItem(this.scopedKey(e));
        }
        clear() {
          let e = this.scopedKey(""),
            t = [];
          for (let n = 0; n < localStorage.length; n++) {
            let r = localStorage.key(n);
            "string" == typeof r && r.startsWith(e) && t.push(r);
          }
          t.forEach((e) => localStorage.removeItem(e));
        }
        scopedKey(e) {
          return `-${this.scope}${this.module ? `:${this.module}` : ""}:${e}`;
        }
        static clearAll() {
          new r("CBWSDK").clear(), new r("walletlink").clear();
        }
      }
      let s = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
            unsupportedChain: 4902,
          },
        },
        i = {
          "-32700": {
            standard: "JSON RPC 2.0",
            message:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          },
          "-32600": {
            standard: "JSON RPC 2.0",
            message: "The JSON sent is not a valid Request object.",
          },
          "-32601": {
            standard: "JSON RPC 2.0",
            message: "The method does not exist / is not available.",
          },
          "-32602": {
            standard: "JSON RPC 2.0",
            message: "Invalid method parameter(s).",
          },
          "-32603": {
            standard: "JSON RPC 2.0",
            message: "Internal JSON-RPC error.",
          },
          "-32000": { standard: "EIP-1474", message: "Invalid input." },
          "-32001": { standard: "EIP-1474", message: "Resource not found." },
          "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
          "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
          "-32004": { standard: "EIP-1474", message: "Method not supported." },
          "-32005": {
            standard: "EIP-1474",
            message: "Request limit exceeded.",
          },
          4001: { standard: "EIP-1193", message: "User rejected the request." },
          4100: {
            standard: "EIP-1193",
            message:
              "The requested account and/or method has not been authorized by the user.",
          },
          4200: {
            standard: "EIP-1193",
            message:
              "The requested method is not supported by this Ethereum provider.",
          },
          4900: {
            standard: "EIP-1193",
            message: "The provider is disconnected from all chains.",
          },
          4901: {
            standard: "EIP-1193",
            message: "The provider is disconnected from the specified chain.",
          },
          4902: { standard: "EIP-3085", message: "Unrecognized chain ID." },
        },
        a = "Unspecified error message.";
      function o(e, t = a) {
        if (e && Number.isInteger(e)) {
          var n;
          let t = e.toString();
          if (l(i, t)) return i[t].message;
          if ((n = e) >= -32099 && n <= -32e3)
            return "Unspecified server error.";
        }
        return t;
      }
      function c(e) {
        return e && "object" == typeof e && !Array.isArray(e)
          ? Object.assign({}, e)
          : e;
      }
      function l(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function u(e, t) {
        return (
          "object" == typeof e &&
          null !== e &&
          t in e &&
          "string" == typeof e[t]
        );
      }
      let d = {
        rpc: {
          parse: (e) => h(s.rpc.parse, e),
          invalidRequest: (e) => h(s.rpc.invalidRequest, e),
          invalidParams: (e) => h(s.rpc.invalidParams, e),
          methodNotFound: (e) => h(s.rpc.methodNotFound, e),
          internal: (e) => h(s.rpc.internal, e),
          server: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum RPC Server errors must provide single object argument."
              );
            let { code: t } = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
              throw Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              );
            return h(t, e);
          },
          invalidInput: (e) => h(s.rpc.invalidInput, e),
          resourceNotFound: (e) => h(s.rpc.resourceNotFound, e),
          resourceUnavailable: (e) => h(s.rpc.resourceUnavailable, e),
          transactionRejected: (e) => h(s.rpc.transactionRejected, e),
          methodNotSupported: (e) => h(s.rpc.methodNotSupported, e),
          limitExceeded: (e) => h(s.rpc.limitExceeded, e),
        },
        provider: {
          userRejectedRequest: (e) => p(s.provider.userRejectedRequest, e),
          unauthorized: (e) => p(s.provider.unauthorized, e),
          unsupportedMethod: (e) => p(s.provider.unsupportedMethod, e),
          disconnected: (e) => p(s.provider.disconnected, e),
          chainDisconnected: (e) => p(s.provider.chainDisconnected, e),
          unsupportedChain: (e) => p(s.provider.unsupportedChain, e),
          custom: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum Provider custom errors must provide single object argument."
              );
            let { code: t, message: n, data: r } = e;
            if (!n || "string" != typeof n)
              throw Error('"message" must be a nonempty string');
            return new m(t, n, r);
          },
        },
      };
      function h(e, t) {
        let [n, r] = f(t);
        return new _(e, n || o(e), r);
      }
      function p(e, t) {
        let [n, r] = f(t);
        return new m(e, n || o(e), r);
      }
      function f(e) {
        if (e) {
          if ("string" == typeof e) return [e];
          else if ("object" == typeof e && !Array.isArray(e)) {
            let { message: t, data: n } = e;
            if (t && "string" != typeof t)
              throw Error("Must specify string message.");
            return [t || void 0, n];
          }
        }
        return [];
      }
      class _ extends Error {
        constructor(e, t, n) {
          if (!Number.isInteger(e)) throw Error('"code" must be an integer.');
          if (!t || "string" != typeof t)
            throw Error('"message" must be a nonempty string.');
          super(t), (this.code = e), void 0 !== n && (this.data = n);
        }
      }
      class m extends _ {
        constructor(e, t, n) {
          if (
            !(function (e) {
              return Number.isInteger(e) && e >= 1e3 && e <= 4999;
            })(e)
          )
            throw Error(
              '"code" must be an integer such that: 1000 <= code <= 4999'
            );
          super(e, t, n);
        }
      }
      let g = (e) => e,
        y = (e) => e,
        b = (e) => e;
      function w(e) {
        return Math.floor(e);
      }
      var v,
        k = n(44134).Buffer;
      let I = /^[0-9]*$/,
        E = /^[a-f0-9]*$/;
      function C(e) {
        return x(crypto.getRandomValues(new Uint8Array(e)));
      }
      function x(e) {
        return [...e].map((e) => e.toString(16).padStart(2, "0")).join("");
      }
      function S(e) {
        return new Uint8Array(
          e.match(/.{1,2}/g).map((e) => Number.parseInt(e, 16))
        );
      }
      function M(e, t = !1) {
        let n = e.toString("hex");
        return g(t ? `0x${n}` : n);
      }
      function A(e) {
        return M(U(e), !0);
      }
      function P(e) {
        return b(e.toString(10));
      }
      function D(e) {
        return g(`0x${BigInt(e).toString(16)}`);
      }
      function N(e) {
        return e.startsWith("0x") || e.startsWith("0X");
      }
      function L(e) {
        return N(e) ? e.slice(2) : e;
      }
      function R(e) {
        return N(e) ? `0x${e.slice(2)}` : `0x${e}`;
      }
      function T(e) {
        if ("string" != typeof e) return !1;
        let t = L(e).toLowerCase();
        return E.test(t);
      }
      function j(e, t = !1) {
        let n = (function (e, t = !1) {
          if ("string" == typeof e) {
            let n = L(e).toLowerCase();
            if (E.test(n)) return g(t ? `0x${n}` : n);
          }
          throw d.rpc.invalidParams(
            `"${String(e)}" is not a hexadecimal string`
          );
        })(e, !1);
        return n.length % 2 == 1 && (n = g(`0${n}`)), t ? g(`0x${n}`) : n;
      }
      function O(e) {
        if ("string" == typeof e) {
          let t = L(e).toLowerCase();
          if (T(t) && 40 === t.length) return y(R(t));
        }
        throw d.rpc.invalidParams(`Invalid Ethereum address: ${String(e)}`);
      }
      function U(e) {
        if (k.isBuffer(e)) return e;
        if ("string" == typeof e) {
          if (T(e)) {
            let t = j(e, !1);
            return k.from(t, "hex");
          }
          return k.from(e, "utf8");
        }
        throw d.rpc.invalidParams(`Not binary data: ${String(e)}`);
      }
      function W(e) {
        if ("number" == typeof e && Number.isInteger(e)) return w(e);
        if ("string" == typeof e) {
          if (I.test(e)) return w(Number(e));
          if (T(e)) return w(Number(BigInt(j(e, !0))));
        }
        throw d.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      function q(e) {
        if (
          null !== e &&
          ("bigint" == typeof e ||
            (function (e) {
              if (null == e || "function" != typeof e.constructor) return !1;
              let { constructor: t } = e;
              return (
                "function" == typeof t.config && "number" == typeof t.EUCLID
              );
            })(e))
        )
          return BigInt(e.toString(10));
        if ("number" == typeof e) return BigInt(W(e));
        if ("string" == typeof e) {
          if (I.test(e)) return BigInt(e);
          if (T(e)) return BigInt(j(e, !0));
        }
        throw d.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      async function z() {
        return crypto.subtle.generateKey(
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          ["deriveKey"]
        );
      }
      async function K(e, t) {
        return crypto.subtle.deriveKey(
          { name: "ECDH", public: t },
          e,
          { name: "AES-GCM", length: 256 },
          !1,
          ["encrypt", "decrypt"]
        );
      }
      async function F(e, t) {
        let n = crypto.getRandomValues(new Uint8Array(12)),
          r = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv: n },
            e,
            new TextEncoder().encode(t)
          );
        return { iv: n, cipherText: r };
      }
      async function H(e, { iv: t, cipherText: n }) {
        let r = await crypto.subtle.decrypt({ name: "AES-GCM", iv: t }, e, n);
        return new TextDecoder().decode(r);
      }
      function B(e) {
        switch (e) {
          case "public":
            return "spki";
          case "private":
            return "pkcs8";
        }
      }
      async function G(e, t) {
        let n = B(e);
        return x(new Uint8Array(await crypto.subtle.exportKey(n, t)));
      }
      async function $(e, t) {
        let n = B(e),
          r = S(t).buffer;
        return await crypto.subtle.importKey(
          n,
          new Uint8Array(r),
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          "private" === e ? ["deriveKey"] : []
        );
      }
      async function J(e, t) {
        return F(
          t,
          JSON.stringify(e, (e, t) =>
            t instanceof Error
              ? Object.assign(
                  Object.assign({}, t.code ? { code: t.code } : {}),
                  { message: t.message }
                )
              : t
          )
        );
      }
      async function Y(e, t) {
        return JSON.parse(await H(t, e));
      }
      let Q = { storageKey: "ownPrivateKey", keyType: "private" },
        V = { storageKey: "ownPublicKey", keyType: "public" },
        Z = { storageKey: "peerPublicKey", keyType: "public" };
      class X {
        constructor() {
          (this.storage = new r("CBWSDK", "SCWKeyManager")),
            (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null);
        }
        async getOwnPublicKey() {
          return await this.loadKeysIfNeeded(), this.ownPublicKey;
        }
        async getSharedSecret() {
          return await this.loadKeysIfNeeded(), this.sharedSecret;
        }
        async setPeerPublicKey(e) {
          (this.sharedSecret = null),
            (this.peerPublicKey = e),
            await this.storeKey(Z, e),
            await this.loadKeysIfNeeded();
        }
        async clear() {
          (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null),
            this.storage.removeItem(V.storageKey),
            this.storage.removeItem(Q.storageKey),
            this.storage.removeItem(Z.storageKey);
        }
        async generateKeyPair() {
          let e = await z();
          (this.ownPrivateKey = e.privateKey),
            (this.ownPublicKey = e.publicKey),
            await this.storeKey(Q, e.privateKey),
            await this.storeKey(V, e.publicKey);
        }
        async loadKeysIfNeeded() {
          null === this.ownPrivateKey &&
            (this.ownPrivateKey = await this.loadKey(Q)),
            null === this.ownPublicKey &&
              (this.ownPublicKey = await this.loadKey(V)),
            (null === this.ownPrivateKey || null === this.ownPublicKey) &&
              (await this.generateKeyPair()),
            null === this.peerPublicKey &&
              (this.peerPublicKey = await this.loadKey(Z)),
            null === this.sharedSecret &&
              null !== this.ownPrivateKey &&
              null !== this.peerPublicKey &&
              (this.sharedSecret = await K(
                this.ownPrivateKey,
                this.peerPublicKey
              ));
        }
        async loadKey(e) {
          let t = this.storage.getItem(e.storageKey);
          return t ? $(e.keyType, t) : null;
        }
        async storeKey(e, t) {
          let n = await G(e.keyType, t);
          this.storage.setItem(e.storageKey, n);
        }
      }
      let ee = "4.3.0",
        et = "@coinbase/wallet-sdk";
      async function en(e, t) {
        let n = Object.assign(Object.assign({}, e), {
            jsonrpc: "2.0",
            id: crypto.randomUUID(),
          }),
          r = await window.fetch(t, {
            method: "POST",
            body: JSON.stringify(n),
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "X-Cbw-Sdk-Version": ee,
              "X-Cbw-Sdk-Platform": et,
            },
          }),
          { result: s, error: i } = await r.json();
        if (i) throw i;
        return s;
      }
      let er = "accounts",
        es = "activeChain",
        ei = "availableChains",
        ea = "walletCapabilities";
      class eo {
        constructor(e) {
          var t, n, s;
          (this.metadata = e.metadata),
            (this.communicator = e.communicator),
            (this.callback = e.callback),
            (this.keyManager = new X()),
            (this.storage = new r("CBWSDK", "SCWStateManager")),
            (this.accounts =
              null != (t = this.storage.loadObject(er)) ? t : []),
            (this.chain = this.storage.loadObject(es) || {
              id:
                null !=
                (s = null == (n = e.metadata.appChainIds) ? void 0 : n[0])
                  ? s
                  : 1,
            }),
            (this.handshake = this.handshake.bind(this)),
            (this.request = this.request.bind(this)),
            (this.createRequestMessage = this.createRequestMessage.bind(this)),
            (this.decryptResponseMessage =
              this.decryptResponseMessage.bind(this));
        }
        async handshake(e) {
          var t, n, r, s;
          await (null == (n = (t = this.communicator).waitForPopupLoaded)
            ? void 0
            : n.call(t));
          let i = await this.createRequestMessage({
              handshake: {
                method: e.method,
                params: Object.assign(
                  {},
                  this.metadata,
                  null != (r = e.params) ? r : {}
                ),
              },
            }),
            a = await this.communicator.postRequestAndWaitForResponse(i);
          if ("failure" in a.content) throw a.content.failure;
          let o = await $("public", a.sender);
          await this.keyManager.setPeerPublicKey(o);
          let c = (await this.decryptResponseMessage(a)).result;
          if ("error" in c) throw c.error;
          if ("eth_requestAccounts" === e.method) {
            let e = c.value;
            (this.accounts = e),
              this.storage.storeObject(er, e),
              null == (s = this.callback) || s.call(this, "accountsChanged", e);
          }
        }
        async request(e) {
          var t;
          if (0 === this.accounts.length)
            if ("wallet_sendCalls" === e.method)
              return this.sendRequestToPopup(e);
            else throw d.provider.unauthorized();
          switch (e.method) {
            case "eth_requestAccounts":
              return (
                null == (t = this.callback) ||
                  t.call(this, "connect", { chainId: D(this.chain.id) }),
                this.accounts
              );
            case "eth_accounts":
              return this.accounts;
            case "eth_coinbase":
              return this.accounts[0];
            case "net_version":
              return this.chain.id;
            case "eth_chainId":
              return D(this.chain.id);
            case "wallet_getCapabilities":
              return this.storage.loadObject(ea);
            case "wallet_switchEthereumChain":
              return this.handleSwitchChainRequest(e);
            case "eth_ecRecover":
            case "personal_sign":
            case "wallet_sign":
            case "personal_ecRecover":
            case "eth_signTransaction":
            case "eth_sendTransaction":
            case "eth_signTypedData_v1":
            case "eth_signTypedData_v3":
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
            case "wallet_addEthereumChain":
            case "wallet_watchAsset":
            case "wallet_sendCalls":
            case "wallet_showCallsStatus":
            case "wallet_grantPermissions":
              return this.sendRequestToPopup(e);
            default:
              if (!this.chain.rpcUrl)
                throw d.rpc.internal("No RPC URL set for chain");
              return en(e, this.chain.rpcUrl);
          }
        }
        async sendRequestToPopup(e) {
          var t, n;
          await (null == (n = (t = this.communicator).waitForPopupLoaded)
            ? void 0
            : n.call(t));
          let r = await this.sendEncryptedRequest(e),
            s = (await this.decryptResponseMessage(r)).result;
          if ("error" in s) throw s.error;
          return s.value;
        }
        async cleanup() {
          var e, t;
          this.storage.clear(),
            await this.keyManager.clear(),
            (this.accounts = []),
            (this.chain = {
              id:
                null !=
                (t = null == (e = this.metadata.appChainIds) ? void 0 : e[0])
                  ? t
                  : 1,
            });
        }
        async handleSwitchChainRequest(e) {
          var t;
          let n = e.params;
          if (!n || !(null == (t = n[0]) ? void 0 : t.chainId))
            throw d.rpc.invalidParams();
          let r = W(n[0].chainId);
          if (this.updateChain(r)) return null;
          let s = await this.sendRequestToPopup(e);
          return null === s && this.updateChain(r), s;
        }
        async sendEncryptedRequest(e) {
          let t = await this.keyManager.getSharedSecret();
          if (!t)
            throw d.provider.unauthorized(
              "No valid session found, try requestAccounts before other methods"
            );
          let n = await J({ action: e, chainId: this.chain.id }, t),
            r = await this.createRequestMessage({ encrypted: n });
          return this.communicator.postRequestAndWaitForResponse(r);
        }
        async createRequestMessage(e) {
          let t = await G("public", await this.keyManager.getOwnPublicKey());
          return {
            id: crypto.randomUUID(),
            sender: t,
            content: e,
            timestamp: new Date(),
          };
        }
        async decryptResponseMessage(e) {
          var t, n;
          let r = e.content;
          if ("failure" in r) throw r.failure;
          let s = await this.keyManager.getSharedSecret();
          if (!s) throw d.provider.unauthorized("Invalid session");
          let i = await Y(r.encrypted, s),
            a = null == (t = i.data) ? void 0 : t.chains;
          if (a) {
            let e = Object.entries(a).map(([e, t]) => ({
              id: Number(e),
              rpcUrl: t,
            }));
            this.storage.storeObject(ei, e), this.updateChain(this.chain.id, e);
          }
          let o = null == (n = i.data) ? void 0 : n.capabilities;
          return o && this.storage.storeObject(ea, o), i;
        }
        updateChain(e, t) {
          var n;
          let r = null != t ? t : this.storage.loadObject(ei),
            s = null == r ? void 0 : r.find((t) => t.id === e);
          return (
            !!s &&
            (s !== this.chain &&
              ((this.chain = s),
              this.storage.storeObject(es, s),
              null == (n = this.callback) ||
                n.call(this, "chainChanged", D(s.id))),
            !0)
          );
        }
      }
      var ec = n(8314);
      let el = "Addresses";
      function eu(e) {
        return void 0 !== e.errorMessage;
      }
      class ed {
        constructor(e) {
          this.secret = e;
        }
        async encrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          let n = crypto.getRandomValues(new Uint8Array(12)),
            r = await crypto.subtle.importKey(
              "raw",
              S(t),
              { name: "aes-gcm" },
              !1,
              ["encrypt", "decrypt"]
            ),
            s = new TextEncoder(),
            i = await window.crypto.subtle.encrypt(
              { name: "AES-GCM", iv: n },
              r,
              s.encode(e)
            ),
            a = i.slice(i.byteLength - 16),
            o = i.slice(0, i.byteLength - 16),
            c = new Uint8Array(a),
            l = new Uint8Array(o);
          return x(new Uint8Array([...n, ...c, ...l]));
        }
        async decrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          return new Promise((n, r) => {
            !(async function () {
              let s = await crypto.subtle.importKey(
                  "raw",
                  S(t),
                  { name: "aes-gcm" },
                  !1,
                  ["encrypt", "decrypt"]
                ),
                i = S(e),
                a = i.slice(0, 12),
                o = i.slice(12, 28),
                c = new Uint8Array([...i.slice(28), ...o]),
                l = { name: "AES-GCM", iv: new Uint8Array(a) };
              try {
                let e = await window.crypto.subtle.decrypt(l, s, c),
                  t = new TextDecoder();
                n(t.decode(e));
              } catch (e) {
                r(e);
              }
            })();
          });
        }
      }
      class eh {
        constructor(e, t, n) {
          (this.linkAPIUrl = e), (this.sessionId = t);
          let r = `${t}:${n}`;
          this.auth = `Basic ${btoa(r)}`;
        }
        async markUnseenEventsAsSeen(e) {
          return Promise.all(
            e.map((e) =>
              fetch(`${this.linkAPIUrl}/events/${e.eventId}/seen`, {
                method: "POST",
                headers: { Authorization: this.auth },
              })
            )
          ).catch((e) => console.error("Unabled to mark event as failed:", e));
        }
        async fetchUnseenEvents() {
          var e;
          let t = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
            headers: { Authorization: this.auth },
          });
          if (t.ok) {
            let { events: n, error: r } = await t.json();
            if (r) throw Error(`Check unseen events failed: ${r}`);
            let s =
              null !=
              (e =
                null == n
                  ? void 0
                  : n
                      .filter((e) => "Web3Response" === e.event)
                      .map((e) => ({
                        type: "Event",
                        sessionId: this.sessionId,
                        eventId: e.id,
                        event: e.event,
                        data: e.data,
                      })))
                ? e
                : [];
            return this.markUnseenEventsAsSeen(s), s;
          }
          throw Error(`Check unseen events failed: ${t.status}`);
        }
      }
      !(function (e) {
        (e[(e.DISCONNECTED = 0)] = "DISCONNECTED"),
          (e[(e.CONNECTING = 1)] = "CONNECTING"),
          (e[(e.CONNECTED = 2)] = "CONNECTED");
      })(v || (v = {}));
      class ep {
        setConnectionStateListener(e) {
          this.connectionStateListener = e;
        }
        setIncomingDataListener(e) {
          this.incomingDataListener = e;
        }
        constructor(e, t = WebSocket) {
          (this.WebSocketClass = t),
            (this.webSocket = null),
            (this.pendingData = []),
            (this.url = e.replace(/^http/, "ws"));
        }
        async connect() {
          if (this.webSocket) throw Error("webSocket object is not null");
          return new Promise((e, t) => {
            var n;
            let r;
            try {
              this.webSocket = r = new this.WebSocketClass(this.url);
            } catch (e) {
              t(e);
              return;
            }
            null == (n = this.connectionStateListener) ||
              n.call(this, v.CONNECTING),
              (r.onclose = (e) => {
                var n;
                this.clearWebSocket(),
                  t(Error(`websocket error ${e.code}: ${e.reason}`)),
                  null == (n = this.connectionStateListener) ||
                    n.call(this, v.DISCONNECTED);
              }),
              (r.onopen = (t) => {
                var n;
                e(),
                  null == (n = this.connectionStateListener) ||
                    n.call(this, v.CONNECTED),
                  this.pendingData.length > 0 &&
                    ([...this.pendingData].forEach((e) => this.sendData(e)),
                    (this.pendingData = []));
              }),
              (r.onmessage = (e) => {
                var t, n;
                if ("h" === e.data)
                  null == (t = this.incomingDataListener) ||
                    t.call(this, { type: "Heartbeat" });
                else
                  try {
                    let t = JSON.parse(e.data);
                    null == (n = this.incomingDataListener) || n.call(this, t);
                  } catch (e) {}
              });
          });
        }
        disconnect() {
          var e;
          let { webSocket: t } = this;
          if (t) {
            this.clearWebSocket(),
              null == (e = this.connectionStateListener) ||
                e.call(this, v.DISCONNECTED),
              (this.connectionStateListener = void 0),
              (this.incomingDataListener = void 0);
            try {
              t.close();
            } catch (e) {}
          }
        }
        sendData(e) {
          let { webSocket: t } = this;
          if (!t) {
            this.pendingData.push(e), this.connect();
            return;
          }
          t.send(e);
        }
        clearWebSocket() {
          let { webSocket: e } = this;
          e &&
            ((this.webSocket = null),
            (e.onclose = null),
            (e.onerror = null),
            (e.onmessage = null),
            (e.onopen = null));
        }
      }
      class ef {
        constructor({ session: e, linkAPIUrl: t, listener: n }) {
          (this.destroyed = !1),
            (this.lastHeartbeatResponse = 0),
            (this.nextReqId = w(1)),
            (this._connected = !1),
            (this._linked = !1),
            (this.shouldFetchUnseenEventsOnConnect = !1),
            (this.requestResolutions = new Map()),
            (this.handleSessionMetadataUpdated = (e) => {
              e &&
                new Map([
                  ["__destroyed", this.handleDestroyed],
                  ["EthereumAddress", this.handleAccountUpdated],
                  ["WalletUsername", this.handleWalletUsernameUpdated],
                  ["AppVersion", this.handleAppVersionUpdated],
                  [
                    "ChainId",
                    (t) =>
                      e.JsonRpcUrl && this.handleChainUpdated(t, e.JsonRpcUrl),
                  ],
                ]).forEach((t, n) => {
                  let r = e[n];
                  void 0 !== r && t(r);
                });
            }),
            (this.handleDestroyed = (e) => {
              var t;
              "1" === e && (null == (t = this.listener) || t.resetAndReload());
            }),
            (this.handleAccountUpdated = async (e) => {
              var t;
              let n = await this.cipher.decrypt(e);
              null == (t = this.listener) || t.accountUpdated(n);
            }),
            (this.handleMetadataUpdated = async (e, t) => {
              var n;
              let r = await this.cipher.decrypt(t);
              null == (n = this.listener) || n.metadataUpdated(e, r);
            }),
            (this.handleWalletUsernameUpdated = async (e) => {
              this.handleMetadataUpdated("walletUsername", e);
            }),
            (this.handleAppVersionUpdated = async (e) => {
              this.handleMetadataUpdated("AppVersion", e);
            }),
            (this.handleChainUpdated = async (e, t) => {
              var n;
              let r = await this.cipher.decrypt(e),
                s = await this.cipher.decrypt(t);
              null == (n = this.listener) || n.chainUpdated(r, s);
            }),
            (this.session = e),
            (this.cipher = new ed(e.secret)),
            (this.listener = n);
          let r = new ep(`${t}/rpc`, WebSocket);
          r.setConnectionStateListener(async (e) => {
            let t = !1;
            switch (e) {
              case v.DISCONNECTED:
                if (!this.destroyed) {
                  let e = async () => {
                    await new Promise((e) => setTimeout(e, 5e3)),
                      this.destroyed ||
                        r.connect().catch(() => {
                          e();
                        });
                  };
                  e();
                }
                break;
              case v.CONNECTED:
                (t = await this.handleConnected()),
                  this.updateLastHeartbeat(),
                  setInterval(() => {
                    this.heartbeat();
                  }, 1e4),
                  this.shouldFetchUnseenEventsOnConnect &&
                    this.fetchUnseenEventsAPI();
              case v.CONNECTING:
            }
            this.connected !== t && (this.connected = t);
          }),
            r.setIncomingDataListener((e) => {
              var t;
              switch (e.type) {
                case "Heartbeat":
                  this.updateLastHeartbeat();
                  return;
                case "IsLinkedOK":
                case "Linked": {
                  let t = "IsLinkedOK" === e.type ? e.linked : void 0;
                  this.linked = t || e.onlineGuests > 0;
                  break;
                }
                case "GetSessionConfigOK":
                case "SessionConfigUpdated":
                  this.handleSessionMetadataUpdated(e.metadata);
                  break;
                case "Event":
                  this.handleIncomingEvent(e);
              }
              void 0 !== e.id &&
                (null == (t = this.requestResolutions.get(e.id)) || t(e));
            }),
            (this.ws = r),
            (this.http = new eh(t, e.id, e.key));
        }
        connect() {
          if (this.destroyed) throw Error("instance is destroyed");
          this.ws.connect();
        }
        async destroy() {
          this.destroyed ||
            (await this.makeRequest(
              {
                type: "SetSessionConfig",
                id: w(this.nextReqId++),
                sessionId: this.session.id,
                metadata: { __destroyed: "1" },
              },
              { timeout: 1e3 }
            ),
            (this.destroyed = !0),
            this.ws.disconnect(),
            (this.listener = void 0));
        }
        get connected() {
          return this._connected;
        }
        set connected(e) {
          this._connected = e;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          var t, n;
          (this._linked = e),
            e && (null == (t = this.onceLinked) || t.call(this)),
            null == (n = this.listener) || n.linkedUpdated(e);
        }
        setOnceLinked(e) {
          return new Promise((t) => {
            this.linked
              ? e().then(t)
              : (this.onceLinked = () => {
                  e().then(t), (this.onceLinked = void 0);
                });
          });
        }
        async handleIncomingEvent(e) {
          var t;
          if ("Event" !== e.type || "Web3Response" !== e.event) return;
          let n = JSON.parse(await this.cipher.decrypt(e.data));
          if ("WEB3_RESPONSE" !== n.type) return;
          let { id: r, response: s } = n;
          null == (t = this.listener) || t.handleWeb3ResponseMessage(r, s);
        }
        async checkUnseenEvents() {
          if (!this.connected) {
            this.shouldFetchUnseenEventsOnConnect = !0;
            return;
          }
          await new Promise((e) => setTimeout(e, 250));
          try {
            await this.fetchUnseenEventsAPI();
          } catch (e) {
            console.error("Unable to check for unseen events", e);
          }
        }
        async fetchUnseenEventsAPI() {
          (this.shouldFetchUnseenEventsOnConnect = !1),
            (await this.http.fetchUnseenEvents()).forEach((e) =>
              this.handleIncomingEvent(e)
            );
        }
        async publishEvent(e, t, n = !1) {
          let r = await this.cipher.encrypt(
              JSON.stringify(
                Object.assign(Object.assign({}, t), {
                  origin: location.origin,
                  location: location.href,
                  relaySource:
                    "coinbaseWalletExtension" in window &&
                    window.coinbaseWalletExtension
                      ? "injected_sdk"
                      : "sdk",
                })
              )
            ),
            s = {
              type: "PublishEvent",
              id: w(this.nextReqId++),
              sessionId: this.session.id,
              event: e,
              data: r,
              callWebhook: n,
            };
          return this.setOnceLinked(async () => {
            let e = await this.makeRequest(s);
            if ("Fail" === e.type)
              throw Error(e.error || "failed to publish event");
            return e.eventId;
          });
        }
        sendData(e) {
          this.ws.sendData(JSON.stringify(e));
        }
        updateLastHeartbeat() {
          this.lastHeartbeatResponse = Date.now();
        }
        heartbeat() {
          if (Date.now() - this.lastHeartbeatResponse > 2e4)
            return void this.ws.disconnect();
          try {
            this.ws.sendData("h");
          } catch (e) {}
        }
        async makeRequest(e, t = { timeout: 6e4 }) {
          let n,
            r = e.id;
          return (
            this.sendData(e),
            Promise.race([
              new Promise((e, s) => {
                n = window.setTimeout(() => {
                  s(Error(`request ${r} timed out`));
                }, t.timeout);
              }),
              new Promise((e) => {
                this.requestResolutions.set(r, (t) => {
                  clearTimeout(n), e(t), this.requestResolutions.delete(r);
                });
              }),
            ])
          );
        }
        async handleConnected() {
          return (
            "Fail" !==
              (
                await this.makeRequest({
                  type: "HostSession",
                  id: w(this.nextReqId++),
                  sessionId: this.session.id,
                  sessionKey: this.session.key,
                })
              ).type &&
            (this.sendData({
              type: "IsLinked",
              id: w(this.nextReqId++),
              sessionId: this.session.id,
            }),
            this.sendData({
              type: "GetSessionConfig",
              id: w(this.nextReqId++),
              sessionId: this.session.id,
            }),
            !0)
          );
        }
      }
      class e_ {
        constructor() {
          (this._nextRequestId = 0), (this.callbacks = new Map());
        }
        makeRequestId() {
          this._nextRequestId = (this._nextRequestId + 1) % 0x7fffffff;
          let e = this._nextRequestId,
            t = R(e.toString(16));
          return this.callbacks.get(t) && this.callbacks.delete(t), e;
        }
      }
      var em = n(62288),
        eg = n(19989);
      let ey = "session:id",
        eb = "session:secret",
        ew = "session:linked";
      class ev {
        constructor(e, t, n, r = !1) {
          (this.storage = e),
            (this.id = t),
            (this.secret = n),
            (this.key = (0, eg.My)((0, em.sc)(`${t}, ${n} WalletLink`))),
            (this._linked = !!r);
        }
        static create(e) {
          return new ev(e, C(16), C(32)).save();
        }
        static load(e) {
          let t = e.getItem(ey),
            n = e.getItem(ew),
            r = e.getItem(eb);
          return t && r ? new ev(e, t, r, "1" === n) : null;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          (this._linked = e), this.persistLinked();
        }
        save() {
          return (
            this.storage.setItem(ey, this.id),
            this.storage.setItem(eb, this.secret),
            this.persistLinked(),
            this
          );
        }
        persistLinked() {
          this.storage.setItem(ew, this._linked ? "1" : "0");
        }
      }
      function ek() {
        var e, t;
        return (
          null !=
            (t =
              null == (e = null == window ? void 0 : window.matchMedia)
                ? void 0
                : e.call(window, "(prefers-color-scheme: dark)").matches) && t
        );
      }
      function eI() {
        let e = document.createElement("style");
        (e.type = "text/css"),
          e.appendChild(
            document.createTextNode(
              '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
            )
          ),
          document.documentElement.appendChild(e);
      }
      function eE() {
        for (var e, t, n = 0, r = ""; n < arguments.length; )
          (e = arguments[n++]) &&
            (t = (function e(t) {
              var n,
                r,
                s = "";
              if ("string" == typeof t || "number" == typeof t) s += t;
              else if ("object" == typeof t)
                if (Array.isArray(t))
                  for (n = 0; n < t.length; n++)
                    t[n] && (r = e(t[n])) && (s && (s += " "), (s += r));
                else for (n in t) t[n] && (s && (s += " "), (s += n));
              return s;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      }
      var eC = n(66117),
        ex = n(50755);
      class eS {
        constructor() {
          (this.items = new Map()),
            (this.nextItemKey = 0),
            (this.root = null),
            (this.darkMode = ek());
        }
        attach(e) {
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-snackbar-root"),
            e.appendChild(this.root),
            this.render();
        }
        presentItem(e) {
          let t = this.nextItemKey++;
          return (
            this.items.set(t, e),
            this.render(),
            () => {
              this.items.delete(t), this.render();
            }
          );
        }
        clear() {
          this.items.clear(), this.render();
        }
        render() {
          this.root &&
            (0, eC.render)(
              (0, eC.h)(
                "div",
                null,
                (0, eC.h)(
                  eM,
                  { darkMode: this.darkMode },
                  Array.from(this.items.entries()).map(([e, t]) =>
                    (0, eC.h)(eA, Object.assign({}, t, { key: e }))
                  )
                )
              ),
              this.root
            );
        }
      }
      let eM = (e) =>
          (0, eC.h)(
            "div",
            { class: eE("-cbwsdk-snackbar-container") },
            (0, eC.h)(
              "style",
              null,
              ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}"
            ),
            (0, eC.h)("div", { class: "-cbwsdk-snackbar" }, e.children)
          ),
        eA = ({ autoExpand: e, message: t, menuItems: n }) => {
          let [r, s] = (0, ex.useState)(!0),
            [i, a] = (0, ex.useState)(null != e && e);
          return (
            (0, ex.useEffect)(() => {
              let e = [
                window.setTimeout(() => {
                  s(!1);
                }, 1),
                window.setTimeout(() => {
                  a(!0);
                }, 1e4),
              ];
              return () => {
                e.forEach(window.clearTimeout);
              };
            }),
            (0, eC.h)(
              "div",
              {
                class: eE(
                  "-cbwsdk-snackbar-instance",
                  r && "-cbwsdk-snackbar-instance-hidden",
                  i && "-cbwsdk-snackbar-instance-expanded"
                ),
              },
              (0, eC.h)(
                "div",
                {
                  class: "-cbwsdk-snackbar-instance-header",
                  onClick: () => {
                    a(!i);
                  },
                },
                (0, eC.h)("img", {
                  src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                  class: "-cbwsdk-snackbar-instance-header-cblogo",
                }),
                " ",
                (0, eC.h)(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-header-message" },
                  t
                ),
                (0, eC.h)(
                  "div",
                  { class: "-gear-container" },
                  !i &&
                    (0, eC.h)(
                      "svg",
                      {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      (0, eC.h)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "12",
                        fill: "#F5F7F8",
                      })
                    ),
                  (0, eC.h)("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                    class: "-gear-icon",
                    title: "Expand",
                  })
                )
              ),
              n &&
                n.length > 0 &&
                (0, eC.h)(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-menu" },
                  n.map((e, t) =>
                    (0, eC.h)(
                      "div",
                      {
                        class: eE(
                          "-cbwsdk-snackbar-instance-menu-item",
                          e.isRed &&
                            "-cbwsdk-snackbar-instance-menu-item-is-red"
                        ),
                        onClick: e.onClick,
                        key: t,
                      },
                      (0, eC.h)(
                        "svg",
                        {
                          width: e.svgWidth,
                          height: e.svgHeight,
                          viewBox: "0 0 10 11",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        (0, eC.h)("path", {
                          "fill-rule": e.defaultFillRule,
                          "clip-rule": e.defaultClipRule,
                          d: e.path,
                          fill: "#AAAAAA",
                        })
                      ),
                      (0, eC.h)(
                        "span",
                        {
                          class: eE(
                            "-cbwsdk-snackbar-instance-menu-item-info",
                            e.isRed &&
                              "-cbwsdk-snackbar-instance-menu-item-info-is-red"
                          ),
                        },
                        e.info
                      )
                    )
                  )
                )
            )
          );
        };
      class eP {
        constructor() {
          (this.attached = !1), (this.snackbar = new eS());
        }
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          let e = document.documentElement,
            t = document.createElement("div");
          (t.className = "-cbwsdk-css-reset"),
            e.appendChild(t),
            this.snackbar.attach(t),
            (this.attached = !0),
            eI();
        }
        showConnecting(e) {
          let t;
          return (
            (t = e.isUnlinkedErrorState
              ? {
                  autoExpand: !0,
                  message: "Connection lost",
                  menuItems: [
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }
              : {
                  message: "Confirm on phone",
                  menuItems: [
                    {
                      isRed: !0,
                      info: "Cancel transaction",
                      svgWidth: "11",
                      svgHeight: "11",
                      path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                      defaultFillRule: "inherit",
                      defaultClipRule: "inherit",
                      onClick: e.onCancel,
                    },
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }),
            this.snackbar.presentItem(t)
          );
        }
      }
      class eD {
        constructor() {
          (this.root = null), (this.darkMode = ek());
        }
        attach() {
          let e = document.documentElement;
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-css-reset"),
            e.appendChild(this.root),
            eI();
        }
        present(e) {
          this.render(e);
        }
        clear() {
          this.render(null);
        }
        render(e) {
          this.root &&
            ((0, eC.render)(null, this.root),
            e &&
              (0, eC.render)(
                (0, eC.h)(
                  eN,
                  Object.assign({}, e, {
                    onDismiss: () => {
                      this.clear();
                    },
                    darkMode: this.darkMode,
                  })
                ),
                this.root
              ));
        }
      }
      let eN = ({
          title: e,
          buttonText: t,
          darkMode: n,
          onButtonClick: r,
          onDismiss: s,
        }) =>
          (0, eC.h)(
            eM,
            { darkMode: n },
            (0, eC.h)(
              "div",
              { class: "-cbwsdk-redirect-dialog" },
              (0, eC.h)(
                "style",
                null,
                ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}"
              ),
              (0, eC.h)("div", {
                class: "-cbwsdk-redirect-dialog-backdrop",
                onClick: s,
              }),
              (0, eC.h)(
                "div",
                {
                  class: eE(
                    "-cbwsdk-redirect-dialog-box",
                    n ? "dark" : "light"
                  ),
                },
                (0, eC.h)("p", null, e),
                (0, eC.h)("button", { onClick: r }, t)
              )
            )
          ),
        eL = "https://www.walletlink.org";
      class eR {
        constructor() {
          (this.attached = !1), (this.redirectDialog = new eD());
        }
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          this.redirectDialog.attach(), (this.attached = !0);
        }
        redirectToCoinbaseWallet(e) {
          let t = new URL("https://go.cb-w.com/walletlink");
          t.searchParams.append(
            "redirect_url",
            (function () {
              try {
                if (
                  (function () {
                    try {
                      return null !== window.frameElement;
                    } catch (e) {
                      return !1;
                    }
                  })() &&
                  window.top
                )
                  return window.top.location;
                return window.location;
              } catch (e) {
                return window.location;
              }
            })().href
          ),
            e && t.searchParams.append("wl_url", e);
          let n = document.createElement("a");
          (n.target = "cbw-opener"),
            (n.href = t.href),
            (n.rel = "noreferrer noopener"),
            n.click();
        }
        openCoinbaseWalletDeeplink(e) {
          this.redirectDialog.present({
            title: "Redirecting to Coinbase Wallet...",
            buttonText: "Open",
            onButtonClick: () => {
              this.redirectToCoinbaseWallet(e);
            },
          }),
            setTimeout(() => {
              this.redirectToCoinbaseWallet(e);
            }, 99);
        }
        showConnecting(e) {
          return () => {
            this.redirectDialog.clear();
          };
        }
      }
      class eT {
        constructor(e) {
          (this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }),
            (this.isMobileWeb = (function () {
              var e;
              return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                null == (e = null == window ? void 0 : window.navigator)
                  ? void 0
                  : e.userAgent
              );
            })()),
            (this.linkedUpdated = (e) => {
              this.isLinked = e;
              let t = this.storage.getItem(el);
              if (
                (e && (this._session.linked = e),
                (this.isUnlinkedErrorState = !1),
                t)
              ) {
                let n = t.split(" "),
                  r = "true" === this.storage.getItem("IsStandaloneSigning");
                "" === n[0] ||
                  e ||
                  !this._session.linked ||
                  r ||
                  (this.isUnlinkedErrorState = !0);
              }
            }),
            (this.metadataUpdated = (e, t) => {
              this.storage.setItem(e, t);
            }),
            (this.chainUpdated = (e, t) => {
              (this.chainCallbackParams.chainId !== e ||
                this.chainCallbackParams.jsonRpcUrl !== t) &&
                ((this.chainCallbackParams = { chainId: e, jsonRpcUrl: t }),
                this.chainCallback &&
                  this.chainCallback(t, Number.parseInt(e, 10)));
            }),
            (this.accountUpdated = (e) => {
              this.accountsCallback && this.accountsCallback([e]),
                eT.accountRequestCallbackIds.size > 0 &&
                  (Array.from(eT.accountRequestCallbackIds.values()).forEach(
                    (t) => {
                      this.invokeCallback(t, {
                        method: "requestEthereumAccounts",
                        result: [e],
                      });
                    }
                  ),
                  eT.accountRequestCallbackIds.clear());
            }),
            (this.resetAndReload = this.resetAndReload.bind(this)),
            (this.linkAPIUrl = e.linkAPIUrl),
            (this.storage = e.storage),
            (this.metadata = e.metadata),
            (this.accountsCallback = e.accountsCallback),
            (this.chainCallback = e.chainCallback);
          let { session: t, ui: n, connection: r } = this.subscribe();
          (this._session = t),
            (this.connection = r),
            (this.relayEventManager = new e_()),
            (this.ui = n),
            this.ui.attach();
        }
        subscribe() {
          let e = ev.load(this.storage) || ev.create(this.storage),
            { linkAPIUrl: t } = this,
            n = new ef({ session: e, linkAPIUrl: t, listener: this }),
            r = this.isMobileWeb ? new eR() : new eP();
          return n.connect(), { session: e, ui: r, connection: n };
        }
        resetAndReload() {
          this.connection
            .destroy()
            .then(() => {
              let e = ev.load(this.storage);
              (null == e ? void 0 : e.id) === this._session.id && r.clearAll(),
                document.location.reload();
            })
            .catch((e) => {});
        }
        signEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: P(e.weiValue),
              data: M(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? P(e.gasPriceInWei) : null,
              maxFeePerGas: e.gasPriceInWei ? P(e.gasPriceInWei) : null,
              maxPriorityFeePerGas: e.gasPriceInWei ? P(e.gasPriceInWei) : null,
              gasLimit: e.gasLimit ? P(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !1,
            },
          });
        }
        signAndSubmitEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: P(e.weiValue),
              data: M(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? P(e.gasPriceInWei) : null,
              maxFeePerGas: e.maxFeePerGas ? P(e.maxFeePerGas) : null,
              maxPriorityFeePerGas: e.maxPriorityFeePerGas
                ? P(e.maxPriorityFeePerGas)
                : null,
              gasLimit: e.gasLimit ? P(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !0,
            },
          });
        }
        submitEthereumTransaction(e, t) {
          return this.sendRequest({
            method: "submitEthereumTransaction",
            params: { signedTransaction: M(e, !0), chainId: t },
          });
        }
        getWalletLinkSession() {
          return this._session;
        }
        sendRequest(e) {
          let t = null,
            n = C(8),
            r = (r) => {
              this.publishWeb3RequestCanceledEvent(n),
                this.handleErrorResponse(n, e.method, r),
                null == t || t();
            };
          return new Promise((s, i) => {
            (t = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: r,
              onResetConnection: this.resetAndReload,
            })),
              this.relayEventManager.callbacks.set(n, (e) => {
                if ((null == t || t(), eu(e))) return i(Error(e.errorMessage));
                s(e);
              }),
              this.publishWeb3RequestEvent(n, e);
          });
        }
        publishWeb3RequestEvent(e, t) {
          let n = { type: "WEB3_REQUEST", id: e, request: t };
          this.publishEvent("Web3Request", n, !0)
            .then((e) => {})
            .catch((e) => {
              this.handleWeb3ResponseMessage(n.id, {
                method: t.method,
                errorMessage: e.message,
              });
            }),
            this.isMobileWeb && this.openCoinbaseWalletDeeplink(t.method);
        }
        openCoinbaseWalletDeeplink(e) {
          if (this.ui instanceof eR)
            switch (e) {
              case "requestEthereumAccounts":
              case "switchEthereumChain":
                return;
              default:
                window.addEventListener(
                  "blur",
                  () => {
                    window.addEventListener(
                      "focus",
                      () => {
                        this.connection.checkUnseenEvents();
                      },
                      { once: !0 }
                    );
                  },
                  { once: !0 }
                ),
                  this.ui.openCoinbaseWalletDeeplink();
            }
        }
        publishWeb3RequestCanceledEvent(e) {
          this.publishEvent(
            "Web3RequestCanceled",
            { type: "WEB3_REQUEST_CANCELED", id: e },
            !1
          ).then();
        }
        publishEvent(e, t, n) {
          return this.connection.publishEvent(e, t, n);
        }
        handleWeb3ResponseMessage(e, t) {
          if ("requestEthereumAccounts" === t.method) {
            eT.accountRequestCallbackIds.forEach((e) =>
              this.invokeCallback(e, t)
            ),
              eT.accountRequestCallbackIds.clear();
            return;
          }
          this.invokeCallback(e, t);
        }
        handleErrorResponse(e, t, n) {
          var r;
          let s =
            null != (r = null == n ? void 0 : n.message)
              ? r
              : "Unspecified error message.";
          this.handleWeb3ResponseMessage(e, { method: t, errorMessage: s });
        }
        invokeCallback(e, t) {
          let n = this.relayEventManager.callbacks.get(e);
          n && (n(t), this.relayEventManager.callbacks.delete(e));
        }
        requestEthereumAccounts() {
          let { appName: e, appLogoUrl: t } = this.metadata,
            n = {
              method: "requestEthereumAccounts",
              params: { appName: e, appLogoUrl: t },
            },
            r = C(8);
          return new Promise((e, t) => {
            this.relayEventManager.callbacks.set(r, (n) => {
              if (eu(n)) return t(Error(n.errorMessage));
              e(n);
            }),
              eT.accountRequestCallbackIds.add(r),
              this.publishWeb3RequestEvent(r, n);
          });
        }
        watchAsset(e, t, n, r, s, i) {
          let a = {
              method: "watchAsset",
              params: {
                type: e,
                options: { address: t, symbol: n, decimals: r, image: s },
                chainId: i,
              },
            },
            o = null,
            c = C(8);
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(c),
                  this.handleErrorResponse(c, a.method, e),
                  null == o || o();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), eu(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, a);
            })
          );
        }
        addEthereumChain(e, t, n, r, s, i) {
          let a = {
              method: "addEthereumChain",
              params: {
                chainId: e,
                rpcUrls: t,
                blockExplorerUrls: r,
                chainName: s,
                iconUrls: n,
                nativeCurrency: i,
              },
            },
            o = null,
            c = C(8);
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(c),
                  this.handleErrorResponse(c, a.method, e),
                  null == o || o();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), eu(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, a);
            })
          );
        }
        switchEthereumChain(e, t) {
          let n = {
              method: "switchEthereumChain",
              params: Object.assign({ chainId: e }, { address: t }),
            },
            r = null,
            s = C(8);
          return (
            (r = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(s),
                  this.handleErrorResponse(s, n.method, e),
                  null == r || r();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(s, (n) =>
                (null == r || r(), eu(n) && n.errorCode)
                  ? t(
                      d.provider.custom({
                        code: n.errorCode,
                        message:
                          "Unrecognized chain ID. Try adding the chain using addEthereumChain first.",
                      })
                    )
                  : eu(n)
                  ? t(Error(n.errorMessage))
                  : void e(n)
              ),
                this.publishWeb3RequestEvent(s, n);
            })
          );
        }
      }
      eT.accountRequestCallbackIds = new Set();
      var ej = n(44134).Buffer;
      let eO = "DefaultChainId",
        eU = "DefaultJsonRpcUrl";
      class eW {
        constructor(e) {
          (this._relay = null),
            (this._addresses = []),
            (this.metadata = e.metadata),
            (this._storage = new r("walletlink", eL)),
            (this.callback = e.callback || null);
          let t = this._storage.getItem(el);
          if (t) {
            let e = t.split(" ");
            "" !== e[0] && (this._addresses = e.map((e) => O(e)));
          }
          this.initializeRelay();
        }
        getSession() {
          let { id: e, secret: t } =
            this.initializeRelay().getWalletLinkSession();
          return { id: e, secret: t };
        }
        async handshake() {
          await this._eth_requestAccounts();
        }
        get selectedAddress() {
          return this._addresses[0] || void 0;
        }
        get jsonRpcUrl() {
          var e;
          return null != (e = this._storage.getItem(eU)) ? e : void 0;
        }
        set jsonRpcUrl(e) {
          this._storage.setItem(eU, e);
        }
        updateProviderInfo(e, t) {
          var n;
          this.jsonRpcUrl = e;
          let r = this.getChainId();
          this._storage.setItem(eO, t.toString(10)),
            W(t) !== r &&
              (null == (n = this.callback) ||
                n.call(this, "chainChanged", D(t)));
        }
        async watchAsset(e) {
          let t = Array.isArray(e) ? e[0] : e;
          if (!t.type) throw d.rpc.invalidParams("Type is required");
          if ((null == t ? void 0 : t.type) !== "ERC20")
            throw d.rpc.invalidParams(
              `Asset of type '${t.type}' is not supported`
            );
          if (!(null == t ? void 0 : t.options))
            throw d.rpc.invalidParams("Options are required");
          if (!(null == t ? void 0 : t.options.address))
            throw d.rpc.invalidParams("Address is required");
          let n = this.getChainId(),
            { address: r, symbol: s, image: i, decimals: a } = t.options,
            o = this.initializeRelay(),
            c = await o.watchAsset(
              t.type,
              r,
              s,
              a,
              i,
              null == n ? void 0 : n.toString()
            );
          return !eu(c) && !!c.result;
        }
        async addEthereumChain(e) {
          var t, n;
          let r = e[0];
          if ((null == (t = r.rpcUrls) ? void 0 : t.length) === 0)
            throw d.rpc.invalidParams("please pass in at least 1 rpcUrl");
          if (!r.chainName || "" === r.chainName.trim())
            throw d.rpc.invalidParams("chainName is a required field");
          if (!r.nativeCurrency)
            throw d.rpc.invalidParams("nativeCurrency is a required field");
          let s = Number.parseInt(r.chainId, 16);
          if (s === this.getChainId()) return !1;
          let i = this.initializeRelay(),
            {
              rpcUrls: a = [],
              blockExplorerUrls: o = [],
              chainName: c,
              iconUrls: l = [],
              nativeCurrency: u,
            } = r,
            h = await i.addEthereumChain(s.toString(), a, l, o, c, u);
          if (eu(h)) return !1;
          if ((null == (n = h.result) ? void 0 : n.isApproved) === !0)
            return this.updateProviderInfo(a[0], s), null;
          throw d.rpc.internal("unable to add ethereum chain");
        }
        async switchEthereumChain(e) {
          let t = Number.parseInt(e[0].chainId, 16),
            n = this.initializeRelay(),
            r = await n.switchEthereumChain(
              t.toString(10),
              this.selectedAddress || void 0
            );
          if (eu(r)) throw r;
          let s = r.result;
          return (
            s.isApproved &&
              s.rpcUrl.length > 0 &&
              this.updateProviderInfo(s.rpcUrl, t),
            null
          );
        }
        async cleanup() {
          (this.callback = null),
            this._relay && this._relay.resetAndReload(),
            this._storage.clear();
        }
        _setAddresses(e, t) {
          var n;
          if (!Array.isArray(e)) throw Error("addresses is not an array");
          let r = e.map((e) => O(e));
          JSON.stringify(r) !== JSON.stringify(this._addresses) &&
            ((this._addresses = r),
            null == (n = this.callback) || n.call(this, "accountsChanged", r),
            this._storage.setItem(el, r.join(" ")));
        }
        async request(e) {
          let t = e.params || [];
          switch (e.method) {
            case "eth_accounts":
              return [...this._addresses];
            case "eth_coinbase":
              return this.selectedAddress || null;
            case "net_version":
              return this.getChainId().toString(10);
            case "eth_chainId":
              return D(this.getChainId());
            case "eth_requestAccounts":
              return this._eth_requestAccounts();
            case "eth_ecRecover":
            case "personal_ecRecover":
              return this.ecRecover(e);
            case "personal_sign":
              return this.personalSign(e);
            case "eth_signTransaction":
              return this._eth_signTransaction(t);
            case "eth_sendRawTransaction":
              return this._eth_sendRawTransaction(t);
            case "eth_sendTransaction":
              return this._eth_sendTransaction(t);
            case "eth_signTypedData_v1":
            case "eth_signTypedData_v3":
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
              return this.signTypedData(e);
            case "wallet_addEthereumChain":
              return this.addEthereumChain(t);
            case "wallet_switchEthereumChain":
              return this.switchEthereumChain(t);
            case "wallet_watchAsset":
              return this.watchAsset(t);
            default:
              if (!this.jsonRpcUrl)
                throw d.rpc.internal("No RPC URL set for chain");
              return en(e, this.jsonRpcUrl);
          }
        }
        _ensureKnownAddress(e) {
          let t = O(e);
          if (!this._addresses.map((e) => O(e)).includes(t))
            throw Error("Unknown Ethereum address");
        }
        _prepareTransactionParams(e) {
          let t = e.from ? O(e.from) : this.selectedAddress;
          if (!t) throw Error("Ethereum address is unavailable");
          this._ensureKnownAddress(t);
          let n = e.to ? O(e.to) : null,
            r = null != e.value ? q(e.value) : BigInt(0),
            s = e.data ? U(e.data) : ej.alloc(0),
            i = null != e.nonce ? W(e.nonce) : null,
            a = null != e.gasPrice ? q(e.gasPrice) : null,
            o = null != e.maxFeePerGas ? q(e.maxFeePerGas) : null,
            c =
              null != e.maxPriorityFeePerGas ? q(e.maxPriorityFeePerGas) : null;
          return {
            fromAddress: t,
            toAddress: n,
            weiValue: r,
            data: s,
            nonce: i,
            gasPriceInWei: a,
            maxFeePerGas: o,
            maxPriorityFeePerGas: c,
            gasLimit: null != e.gas ? q(e.gas) : null,
            chainId: e.chainId ? W(e.chainId) : this.getChainId(),
          };
        }
        async ecRecover(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw d.rpc.invalidParams();
          let r = this.initializeRelay(),
            s = await r.sendRequest({
              method: "ethereumAddressFromSignedMessage",
              params: {
                message: A(n[0]),
                signature: A(n[1]),
                addPrefix: "personal_ecRecover" === t,
              },
            });
          if (eu(s)) throw s;
          return s.result;
        }
        getChainId() {
          var e;
          return Number.parseInt(
            null != (e = this._storage.getItem(eO)) ? e : "1",
            10
          );
        }
        async _eth_requestAccounts() {
          var e, t;
          if (this._addresses.length > 0)
            return (
              null == (e = this.callback) ||
                e.call(this, "connect", { chainId: D(this.getChainId()) }),
              this._addresses
            );
          let n = this.initializeRelay(),
            r = await n.requestEthereumAccounts();
          if (eu(r)) throw r;
          if (!r.result) throw Error("accounts received is empty");
          return (
            this._setAddresses(r.result),
            null == (t = this.callback) ||
              t.call(this, "connect", { chainId: D(this.getChainId()) }),
            this._addresses
          );
        }
        async personalSign({ params: e }) {
          if (!Array.isArray(e)) throw d.rpc.invalidParams();
          let t = e[1],
            n = e[0];
          this._ensureKnownAddress(t);
          let r = this.initializeRelay(),
            s = await r.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: O(t),
                message: A(n),
                addPrefix: !0,
                typedDataJson: null,
              },
            });
          if (eu(s)) throw s;
          return s.result;
        }
        async _eth_signTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            r = await n.signEthereumTransaction(t);
          if (eu(r)) throw r;
          return r.result;
        }
        async _eth_sendRawTransaction(e) {
          let t = U(e[0]),
            n = this.initializeRelay(),
            r = await n.submitEthereumTransaction(t, this.getChainId());
          if (eu(r)) throw r;
          return r.result;
        }
        async _eth_sendTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            r = await n.signAndSubmitEthereumTransaction(t);
          if (eu(r)) throw r;
          return r.result;
        }
        async signTypedData(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw d.rpc.invalidParams();
          let r = n[+("eth_signTypedData_v1" === t)],
            s = n[+("eth_signTypedData_v1" !== t)];
          this._ensureKnownAddress(r);
          let i = this.initializeRelay(),
            a = await i.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: O(r),
                message: M(
                  {
                    eth_signTypedData_v1: ec.hashForSignTypedDataLegacy,
                    eth_signTypedData_v3: ec.hashForSignTypedData_v3,
                    eth_signTypedData_v4: ec.hashForSignTypedData_v4,
                    eth_signTypedData: ec.hashForSignTypedData_v4,
                  }[t]({
                    data: (function (e) {
                      if ("string" == typeof e) return JSON.parse(e);
                      if ("object" == typeof e) return e;
                      throw d.rpc.invalidParams(
                        `Not a JSON string or an object: ${String(e)}`
                      );
                    })(s),
                  }),
                  !0
                ),
                typedDataJson: JSON.stringify(s, null, 2),
                addPrefix: !1,
              },
            });
          if (eu(a)) throw a;
          return a.result;
        }
        initializeRelay() {
          return (
            this._relay ||
              (this._relay = new eT({
                linkAPIUrl: eL,
                storage: this._storage,
                metadata: this.metadata,
                accountsCallback: this._setAddresses.bind(this),
                chainCallback: this.updateProviderInfo.bind(this),
              })),
            this._relay
          );
        }
      }
      let eq = "SignerType",
        ez = new r("CBWSDK", "SignerConfigurator");
      async function eK(e) {
        let {
          communicator: t,
          metadata: n,
          handshakeRequest: r,
          callback: s,
        } = e;
        eF(t, n, s).catch(() => {});
        let i = {
            id: crypto.randomUUID(),
            event: "selectSignerType",
            data: Object.assign(Object.assign({}, e.preference), {
              handshakeRequest: r,
            }),
          },
          { data: a } = await t.postRequestAndWaitForResponse(i);
        return a;
      }
      async function eF(e, t, n) {
        await e.onMessage(({ event: e }) => "WalletLinkSessionRequest" === e);
        let r = new eW({ metadata: t, callback: n });
        e.postMessage({
          event: "WalletLinkUpdate",
          data: { session: r.getSession() },
        }),
          await r.handshake(),
          e.postMessage({ event: "WalletLinkUpdate", data: { connected: !0 } });
      }
      let eH = `Coinbase Wallet SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Coinbase Smart Wallet app.

Please see https://www.smartwallet.dev/guides/tips/popup-tips#cross-origin-opener-policy for more information.`,
        { checkCrossOriginOpenerPolicy: eB, getCrossOriginOpenerPolicy: eG } =
          (() => {
            let e;
            return {
              getCrossOriginOpenerPolicy: () =>
                void 0 === e ? "undefined" : e,
              checkCrossOriginOpenerPolicy: async () => {
                if ("undefined" == typeof window) {
                  e = "non-browser-env";
                  return;
                }
                try {
                  let t = `${window.location.origin}${window.location.pathname}`,
                    n = await fetch(t, { method: "HEAD" });
                  if (!n.ok) throw Error(`HTTP error! status: ${n.status}`);
                  let r = n.headers.get("Cross-Origin-Opener-Policy");
                  (e = null != r ? r : "null"),
                    "same-origin" === e && console.error(eH);
                } catch (t) {
                  console.error(
                    "Error checking Cross-Origin-Opener-Policy:",
                    t.message
                  ),
                    (e = "error");
                }
              },
            };
          })();
      class e$ {
        constructor({
          url: e = "https://keys.coinbase.com/connect",
          metadata: t,
          preference: n,
        }) {
          (this.popup = null),
            (this.listeners = new Map()),
            (this.postMessage = async (e) => {
              (await this.waitForPopupLoaded()).postMessage(e, this.url.origin);
            }),
            (this.postRequestAndWaitForResponse = async (e) => {
              let t = this.onMessage(({ requestId: t }) => t === e.id);
              return this.postMessage(e), await t;
            }),
            (this.onMessage = async (e) =>
              new Promise((t, n) => {
                let r = (n) => {
                  if (n.origin !== this.url.origin) return;
                  let s = n.data;
                  e(s) &&
                    (t(s),
                    window.removeEventListener("message", r),
                    this.listeners.delete(r));
                };
                window.addEventListener("message", r),
                  this.listeners.set(r, { reject: n });
              })),
            (this.disconnect = () => {
              !(function (e) {
                e && !e.closed && e.close();
              })(this.popup),
                (this.popup = null),
                this.listeners.forEach(({ reject: e }, t) => {
                  e(d.provider.userRejectedRequest("Request rejected")),
                    window.removeEventListener("message", t);
                }),
                this.listeners.clear();
            }),
            (this.waitForPopupLoaded = async () =>
              this.popup && !this.popup.closed
                ? (this.popup.focus(), this.popup)
                : ((this.popup = (function (e) {
                    let t = (window.innerWidth - 420) / 2 + window.screenX,
                      n = (window.innerHeight - 540) / 2 + window.screenY;
                    var r = e;
                    for (let [e, t] of Object.entries({
                      sdkName: et,
                      sdkVersion: ee,
                      origin: window.location.origin,
                      coop: eG(),
                    }))
                      r.searchParams.append(e, t.toString());
                    let s = `wallet_${crypto.randomUUID()}`,
                      i = window.open(
                        e,
                        s,
                        `width=420, height=540, left=${t}, top=${n}`
                      );
                    if ((null == i || i.focus(), !i))
                      throw d.rpc.internal("Pop up window failed to open");
                    return i;
                  })(this.url)),
                  this.onMessage(({ event: e }) => "PopupUnload" === e)
                    .then(this.disconnect)
                    .catch(() => {}),
                  this.onMessage(({ event: e }) => "PopupLoaded" === e)
                    .then((e) => {
                      this.postMessage({
                        requestId: e.id,
                        data: {
                          version: ee,
                          metadata: this.metadata,
                          preference: this.preference,
                          location: window.location.toString(),
                        },
                      });
                    })
                    .then(() => {
                      if (!this.popup) throw d.rpc.internal();
                      return this.popup;
                    }))),
            (this.url = new URL(e)),
            (this.metadata = t),
            (this.preference = n);
        }
      }
      var eJ = n(83026);
      class eY extends eJ {}
      var eQ = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var s = 0, r = Object.getOwnPropertySymbols(e);
            s < r.length;
            s++
          )
            0 > t.indexOf(r[s]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[s]) &&
              (n[r[s]] = e[r[s]]);
        return n;
      };
      class eV extends eY {
        constructor(e) {
          var { metadata: t } = e,
            n = e.preference,
            { keysUrl: r } = n,
            s = eQ(n, ["keysUrl"]);
          super(),
            (this.signer = null),
            (this.isCoinbaseWallet = !0),
            (this.metadata = t),
            (this.preference = s),
            (this.communicator = new e$({
              url: r,
              metadata: t,
              preference: s,
            }));
          let i = ez.getItem(eq);
          i && (this.signer = this.initSigner(i));
        }
        async request(e) {
          try {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw d.rpc.invalidParams({
                message: "Expected a single, non-array, object argument.",
                data: e,
              });
            let { method: t, params: n } = e;
            if ("string" != typeof t || 0 === t.length)
              throw d.rpc.invalidParams({
                message: "'args.method' must be a non-empty string.",
                data: e,
              });
            if (
              void 0 !== n &&
              !Array.isArray(n) &&
              ("object" != typeof n || null === n)
            )
              throw d.rpc.invalidParams({
                message:
                  "'args.params' must be an object or array if provided.",
                data: e,
              });
            switch (t) {
              case "eth_sign":
              case "eth_signTypedData_v2":
              case "eth_subscribe":
              case "eth_unsubscribe":
                throw d.provider.unsupportedMethod();
            }
            if (!this.signer)
              switch (e.method) {
                case "eth_requestAccounts": {
                  let t = await this.requestSignerSelection(e),
                    n = this.initSigner(t);
                  await n.handshake(e), (this.signer = n), ez.setItem(eq, t);
                  break;
                }
                case "wallet_sendCalls": {
                  let t = this.initSigner("scw");
                  await t.handshake({ method: "handshake" });
                  let n = await t.request(e);
                  return await t.cleanup(), n;
                }
                case "wallet_getCallsStatus":
                  return en(e, "http://rpc.wallet.coinbase.com");
                case "net_version":
                  return 1;
                case "eth_chainId":
                  return D(1);
                default:
                  throw d.provider.unauthorized(
                    "Must call 'eth_requestAccounts' before other methods"
                  );
              }
            return await this.signer.request(e);
          } catch (t) {
            let { code: e } = t;
            return (
              e === s.provider.unauthorized && this.disconnect(),
              Promise.reject(
                (function (e) {
                  let t = (function (e, { shouldIncludeStack: t = !1 } = {}) {
                      var n, r;
                      let d = {};
                      if (
                        e &&
                        "object" == typeof e &&
                        !Array.isArray(e) &&
                        l(e, "code") &&
                        Number.isInteger((n = e.code)) &&
                        (i[n.toString()] || ((r = n) >= -32099 && r <= -32e3))
                      )
                        (d.code = e.code),
                          e.message && "string" == typeof e.message
                            ? ((d.message = e.message),
                              l(e, "data") && (d.data = e.data))
                            : ((d.message = o(d.code)),
                              (d.data = { originalError: c(e) }));
                      else
                        (d.code = s.rpc.internal),
                          (d.message = u(e, "message") ? e.message : a),
                          (d.data = { originalError: c(e) });
                      return (
                        t && (d.stack = u(e, "stack") ? e.stack : void 0), d
                      );
                    })(
                      (function (e) {
                        var t;
                        if ("string" == typeof e)
                          return { message: e, code: s.rpc.internal };
                        if (eu(e)) {
                          let n = e.errorMessage,
                            r =
                              null != (t = e.errorCode)
                                ? t
                                : n.match(/(denied|rejected)/i)
                                ? s.provider.userRejectedRequest
                                : void 0;
                          return Object.assign(Object.assign({}, e), {
                            message: n,
                            code: r,
                            data: { method: e.method },
                          });
                        }
                        return e;
                      })(e),
                      { shouldIncludeStack: !0 }
                    ),
                    n = new URL(
                      "https://docs.cloud.coinbase.com/wallet-sdk/docs/errors"
                    );
                  return (
                    n.searchParams.set("version", ee),
                    n.searchParams.set("code", t.code.toString()),
                    n.searchParams.set("message", t.message),
                    Object.assign(Object.assign({}, t), { docUrl: n.href })
                  );
                })(t)
              )
            );
          }
        }
        async enable() {
          return (
            console.warn(
              '.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'
            ),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async disconnect() {
          var e;
          await (null == (e = this.signer) ? void 0 : e.cleanup()),
            (this.signer = null),
            r.clearAll(),
            this.emit(
              "disconnect",
              d.provider.disconnected("User initiated disconnection")
            );
        }
        requestSignerSelection(e) {
          return eK({
            communicator: this.communicator,
            preference: this.preference,
            metadata: this.metadata,
            handshakeRequest: e,
            callback: this.emit.bind(this),
          });
        }
        initSigner(e) {
          let {
            signerType: t,
            metadata: n,
            communicator: r,
            callback: s,
          } = {
            signerType: e,
            metadata: this.metadata,
            communicator: this.communicator,
            callback: this.emit.bind(this),
          };
          switch (t) {
            case "scw":
              return new eo({ metadata: n, callback: s, communicator: r });
            case "walletlink":
              return new eW({ metadata: n, callback: s });
          }
        }
      }
      let eZ = { options: "all" };
      function eX(e) {
        new r("CBWSDK").setItem("VERSION", ee), eB();
        let t = {
          metadata: {
            appName: e.appName || "Dapp",
            appLogoUrl: e.appLogoUrl || "",
            appChainIds: e.appChainIds || [],
          },
          preference: Object.assign(eZ, null != (n = e.preference) ? n : {}),
        };
        var n,
          s = t.preference;
        if (s) {
          if (!["all", "smartWalletOnly", "eoaOnly"].includes(s.options))
            throw Error(`Invalid options: ${s.options}`);
          if (
            s.attribution &&
            void 0 !== s.attribution.auto &&
            void 0 !== s.attribution.dataSuffix
          )
            throw Error(
              "Attribution cannot contain both auto and dataSuffix properties"
            );
        }
        let i = null;
        return {
          getProvider: () => (
            i ||
              (i = (function (e) {
                var t;
                let n = { metadata: e.metadata, preference: e.preference };
                return null !=
                  (t = (function ({ metadata: e, preference: t }) {
                    var n, r;
                    let { appName: s, appLogoUrl: i, appChainIds: a } = e;
                    if ("smartWalletOnly" !== t.options) {
                      let e = globalThis.coinbaseWalletExtension;
                      if (e)
                        return (
                          null == (n = e.setAppInfo) || n.call(e, s, i, a, t), e
                        );
                    }
                    let o = (function () {
                      var e, t;
                      try {
                        let n = globalThis;
                        return null != (e = n.ethereum)
                          ? e
                          : null == (t = n.top)
                          ? void 0
                          : t.ethereum;
                      } catch (e) {
                        return;
                      }
                    })();
                    if (null == o ? void 0 : o.isCoinbaseBrowser)
                      return (
                        null == (r = o.setAppInfo) || r.call(o, s, i, a, t), o
                      );
                  })(n))
                  ? t
                  : new eV(n);
              })(t)),
            i
          ),
        };
      }
    },
    66117: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          Component: () => x,
          Fragment: () => C,
          cloneElement: () => q,
          createContext: () => z,
          createElement: () => k,
          createRef: () => E,
          h: () => k,
          hydrate: () => W,
          isValidElement: () => a,
          options: () => s,
          render: () => U,
          toChildArray: () =>
            function e(t, n) {
              return (
                (n = n || []),
                null == t ||
                  "boolean" == typeof t ||
                  (b(t)
                    ? t.some(function (t) {
                        e(t, n);
                      })
                    : n.push(t)),
                n
              );
            },
        });
      var r,
        s,
        i,
        a,
        o,
        c,
        l,
        u,
        d,
        h,
        p,
        f,
        _,
        m = {},
        g = [],
        y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        b = Array.isArray;
      function w(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }
      function v(e) {
        e && e.parentNode && e.parentNode.removeChild(e);
      }
      function k(e, t, n) {
        var s,
          i,
          a,
          o = {};
        for (a in t)
          "key" == a ? (s = t[a]) : "ref" == a ? (i = t[a]) : (o[a] = t[a]);
        if (
          (arguments.length > 2 &&
            (o.children = arguments.length > 3 ? r.call(arguments, 2) : n),
          "function" == typeof e && null != e.defaultProps)
        )
          for (a in e.defaultProps) null == o[a] && (o[a] = e.defaultProps[a]);
        return I(e, o, s, i, null);
      }
      function I(e, t, n, r, a) {
        var o = {
          type: e,
          props: t,
          key: n,
          ref: r,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __c: null,
          constructor: void 0,
          __v: null == a ? ++i : a,
          __i: -1,
          __u: 0,
        };
        return null == a && null != s.vnode && s.vnode(o), o;
      }
      function E() {
        return { current: null };
      }
      function C(e) {
        return e.children;
      }
      function x(e, t) {
        (this.props = e), (this.context = t);
      }
      function S(e, t) {
        if (null == t) return e.__ ? S(e.__, e.__i + 1) : null;
        for (var n; t < e.__k.length; t++)
          if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? S(e) : null;
      }
      function M(e) {
        ((!e.__d && (e.__d = !0) && o.push(e) && !A.__r++) ||
          c != s.debounceRendering) &&
          ((c = s.debounceRendering) || l)(A);
      }
      function A() {
        for (var e, t, n, r, i, a, c = 1; o.length; )
          o.length > c && o.sort(u),
            (e = o.shift()),
            (c = o.length),
            e.__d &&
              ((t = void 0),
              (r = (n = e.__v).__e),
              (i = []),
              (a = []),
              e.__P &&
                (((t = w({}, n)).__v = n.__v + 1),
                s.vnode && s.vnode(t),
                R(
                  e.__P,
                  t,
                  n,
                  e.__n,
                  e.__P.namespaceURI,
                  32 & n.__u ? [r] : null,
                  i,
                  null == r ? S(n) : r,
                  !!(32 & n.__u),
                  a
                ),
                (t.__v = n.__v),
                (t.__.__k[t.__i] = t),
                T(i, t, a),
                t.__e != r &&
                  (function e(t) {
                    var n, r;
                    if (null != (t = t.__) && null != t.__c) {
                      for (
                        t.__e = t.__c.base = null, n = 0;
                        n < t.__k.length;
                        n++
                      )
                        if (null != (r = t.__k[n]) && null != r.__e) {
                          t.__e = t.__c.base = r.__e;
                          break;
                        }
                      return e(t);
                    }
                  })(t)));
        A.__r = 0;
      }
      function P(e, t, n, r, i, a, o, c, l, u, d) {
        var h,
          p,
          f,
          _,
          y,
          w,
          k = (r && r.__k) || g,
          E = t.length;
        for (
          l = (function (e, t, n, r, i) {
            var a,
              o,
              c,
              l,
              u,
              d = n.length,
              h = d,
              p = 0;
            for (e.__k = Array(i), a = 0; a < i; a++)
              null != (o = t[a]) &&
              "boolean" != typeof o &&
              "function" != typeof o
                ? ((l = a + p),
                  ((o = e.__k[a] =
                    "string" == typeof o ||
                    "number" == typeof o ||
                    "bigint" == typeof o ||
                    o.constructor == String
                      ? I(null, o, null, null, null)
                      : b(o)
                      ? I(C, { children: o }, null, null, null)
                      : null == o.constructor && o.__b > 0
                      ? I(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v)
                      : o).__ = e),
                  (o.__b = e.__b + 1),
                  (c = null),
                  -1 !=
                    (u = o.__i =
                      (function (e, t, n, r) {
                        var s,
                          i,
                          a = e.key,
                          o = e.type,
                          c = t[n];
                        if (
                          (null === c && null == e.key) ||
                          (c && a == c.key && o == c.type && 0 == (2 & c.__u))
                        )
                          return n;
                        if (r > +(null != c && 0 == (2 & c.__u)))
                          for (s = n - 1, i = n + 1; s >= 0 || i < t.length; ) {
                            if (s >= 0) {
                              if (
                                (c = t[s]) &&
                                0 == (2 & c.__u) &&
                                a == c.key &&
                                o == c.type
                              )
                                return s;
                              s--;
                            }
                            if (i < t.length) {
                              if (
                                (c = t[i]) &&
                                0 == (2 & c.__u) &&
                                a == c.key &&
                                o == c.type
                              )
                                return i;
                              i++;
                            }
                          }
                        return -1;
                      })(o, n, l, h)) && (h--, (c = n[u]) && (c.__u |= 2)),
                  null == c || null == c.__v
                    ? (-1 == u && (i > d ? p-- : i < d && p++),
                      "function" != typeof o.type && (o.__u |= 4))
                    : u != l &&
                      (u == l - 1
                        ? p--
                        : u == l + 1
                        ? p++
                        : (u > l ? p-- : p++, (o.__u |= 4))))
                : (e.__k[a] = null);
            if (h)
              for (a = 0; a < d; a++)
                null != (c = n[a]) &&
                  0 == (2 & c.__u) &&
                  (c.__e == r && (r = S(c)),
                  (function e(t, n, r) {
                    var i, a;
                    if (
                      (s.unmount && s.unmount(t),
                      (i = t.ref) &&
                        ((i.current && i.current != t.__e) || j(i, null, n)),
                      null != (i = t.__c))
                    ) {
                      if (i.componentWillUnmount)
                        try {
                          i.componentWillUnmount();
                        } catch (e) {
                          s.__e(e, n);
                        }
                      i.base = i.__P = null;
                    }
                    if ((i = t.__k))
                      for (a = 0; a < i.length; a++)
                        i[a] && e(i[a], n, r || "function" != typeof t.type);
                    r || v(t.__e), (t.__c = t.__ = t.__e = void 0);
                  })(c, c));
            return r;
          })(n, t, k, l, E),
            h = 0;
          h < E;
          h++
        )
          null != (f = n.__k[h]) &&
            ((p = -1 == f.__i ? m : k[f.__i] || m),
            (f.__i = h),
            (w = R(e, f, p, i, a, o, c, l, u, d)),
            (_ = f.__e),
            f.ref &&
              p.ref != f.ref &&
              (p.ref && j(p.ref, null, f), d.push(f.ref, f.__c || _, f)),
            null == y && null != _ && (y = _),
            4 & f.__u || p.__k === f.__k
              ? (l = (function e(t, n, r) {
                  var s, i;
                  if ("function" == typeof t.type) {
                    for (s = t.__k, i = 0; s && i < s.length; i++)
                      s[i] && ((s[i].__ = t), (n = e(s[i], n, r)));
                    return n;
                  }
                  t.__e != n &&
                    (n && t.type && !r.contains(n) && (n = S(t)),
                    r.insertBefore(t.__e, n || null),
                    (n = t.__e));
                  do n = n && n.nextSibling;
                  while (null != n && 8 == n.nodeType);
                  return n;
                })(f, l, e))
              : "function" == typeof f.type && void 0 !== w
              ? (l = w)
              : _ && (l = _.nextSibling),
            (f.__u &= -7));
        return (n.__e = y), l;
      }
      function D(e, t, n) {
        "-" == t[0]
          ? e.setProperty(t, null == n ? "" : n)
          : (e[t] =
              null == n
                ? ""
                : "number" != typeof n || y.test(t)
                ? n
                : n + "px");
      }
      function N(e, t, n, r, s) {
        var i, a;
        e: if ("style" == t)
          if ("string" == typeof n) e.style.cssText = n;
          else {
            if (("string" == typeof r && (e.style.cssText = r = ""), r))
              for (t in r) (n && t in n) || D(e.style, t, "");
            if (n) for (t in n) (r && n[t] == r[t]) || D(e.style, t, n[t]);
          }
        else if ("o" == t[0] && "n" == t[1])
          (i = t != (t = t.replace(d, "$1"))),
            (t =
              (a = t.toLowerCase()) in e ||
              "onFocusOut" == t ||
              "onFocusIn" == t
                ? a.slice(2)
                : t.slice(2)),
            e.l || (e.l = {}),
            (e.l[t + i] = n),
            n
              ? r
                ? (n.u = r.u)
                : ((n.u = h), e.addEventListener(t, i ? f : p, i))
              : e.removeEventListener(t, i ? f : p, i);
        else {
          if ("http://www.w3.org/2000/svg" == s)
            t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
          else if (
            "width" != t &&
            "height" != t &&
            "href" != t &&
            "list" != t &&
            "form" != t &&
            "tabIndex" != t &&
            "download" != t &&
            "rowSpan" != t &&
            "colSpan" != t &&
            "role" != t &&
            "popover" != t &&
            t in e
          )
            try {
              e[t] = null == n ? "" : n;
              break e;
            } catch (e) {}
          "function" == typeof n ||
            (null == n || (!1 === n && "-" != t[4])
              ? e.removeAttribute(t)
              : e.setAttribute(t, "popover" == t && 1 == n ? "" : n));
        }
      }
      function L(e) {
        return function (t) {
          if (this.l) {
            var n = this.l[t.type + e];
            if (null == t.t) t.t = h++;
            else if (t.t < n.u) return;
            return n(s.event ? s.event(t) : t);
          }
        };
      }
      function R(e, t, n, i, a, o, c, l, u, d) {
        var h,
          p,
          f,
          _,
          g,
          y,
          k,
          I,
          E,
          M,
          A,
          D,
          L,
          R,
          T,
          j,
          U,
          W = t.type;
        if (null != t.constructor) return null;
        128 & n.__u && ((u = !!(32 & n.__u)), (o = [(l = t.__e = n.__e)])),
          (h = s.__b) && h(t);
        e: if ("function" == typeof W)
          try {
            if (
              ((I = t.props),
              (E = "prototype" in W && W.prototype.render),
              (M = (h = W.contextType) && i[h.__c]),
              (A = h ? (M ? M.props.value : h.__) : i),
              n.__c
                ? (k = (p = t.__c = n.__c).__ = p.__E)
                : (E
                    ? (t.__c = p = new W(I, A))
                    : ((t.__c = p = new x(I, A)),
                      (p.constructor = W),
                      (p.render = O)),
                  M && M.sub(p),
                  (p.props = I),
                  p.state || (p.state = {}),
                  (p.context = A),
                  (p.__n = i),
                  (f = p.__d = !0),
                  (p.__h = []),
                  (p._sb = [])),
              E && null == p.__s && (p.__s = p.state),
              E &&
                null != W.getDerivedStateFromProps &&
                (p.__s == p.state && (p.__s = w({}, p.__s)),
                w(p.__s, W.getDerivedStateFromProps(I, p.__s))),
              (_ = p.props),
              (g = p.state),
              (p.__v = t),
              f)
            )
              E &&
                null == W.getDerivedStateFromProps &&
                null != p.componentWillMount &&
                p.componentWillMount(),
                E &&
                  null != p.componentDidMount &&
                  p.__h.push(p.componentDidMount);
            else {
              if (
                (E &&
                  null == W.getDerivedStateFromProps &&
                  I !== _ &&
                  null != p.componentWillReceiveProps &&
                  p.componentWillReceiveProps(I, A),
                (!p.__e &&
                  null != p.shouldComponentUpdate &&
                  !1 === p.shouldComponentUpdate(I, p.__s, A)) ||
                  t.__v == n.__v)
              ) {
                for (
                  t.__v != n.__v &&
                    ((p.props = I), (p.state = p.__s), (p.__d = !1)),
                    t.__e = n.__e,
                    t.__k = n.__k,
                    t.__k.some(function (e) {
                      e && (e.__ = t);
                    }),
                    D = 0;
                  D < p._sb.length;
                  D++
                )
                  p.__h.push(p._sb[D]);
                (p._sb = []), p.__h.length && c.push(p);
                break e;
              }
              null != p.componentWillUpdate &&
                p.componentWillUpdate(I, p.__s, A),
                E &&
                  null != p.componentDidUpdate &&
                  p.__h.push(function () {
                    p.componentDidUpdate(_, g, y);
                  });
            }
            if (
              ((p.context = A),
              (p.props = I),
              (p.__P = e),
              (p.__e = !1),
              (L = s.__r),
              (R = 0),
              E)
            ) {
              for (
                p.state = p.__s,
                  p.__d = !1,
                  L && L(t),
                  h = p.render(p.props, p.state, p.context),
                  T = 0;
                T < p._sb.length;
                T++
              )
                p.__h.push(p._sb[T]);
              p._sb = [];
            } else
              do
                (p.__d = !1),
                  L && L(t),
                  (h = p.render(p.props, p.state, p.context)),
                  (p.state = p.__s);
              while (p.__d && ++R < 25);
            (p.state = p.__s),
              null != p.getChildContext &&
                (i = w(w({}, i), p.getChildContext())),
              E &&
                !f &&
                null != p.getSnapshotBeforeUpdate &&
                (y = p.getSnapshotBeforeUpdate(_, g)),
              (j = h),
              null != h &&
                h.type === C &&
                null == h.key &&
                (j = (function e(t) {
                  return "object" != typeof t ||
                    null == t ||
                    (t.__b && t.__b > 0)
                    ? t
                    : b(t)
                    ? t.map(e)
                    : w({}, t);
                })(h.props.children)),
              (l = P(e, b(j) ? j : [j], t, n, i, a, o, c, l, u, d)),
              (p.base = t.__e),
              (t.__u &= -161),
              p.__h.length && c.push(p),
              k && (p.__E = p.__ = null);
          } catch (e) {
            if (((t.__v = null), u || null != o))
              if (e.then) {
                for (
                  t.__u |= u ? 160 : 128;
                  l && 8 == l.nodeType && l.nextSibling;

                )
                  l = l.nextSibling;
                (o[o.indexOf(l)] = null), (t.__e = l);
              } else for (U = o.length; U--; ) v(o[U]);
            else (t.__e = n.__e), (t.__k = n.__k);
            s.__e(e, t, n);
          }
        else
          null == o && t.__v == n.__v
            ? ((t.__k = n.__k), (t.__e = n.__e))
            : (l = t.__e =
                (function (e, t, n, i, a, o, c, l, u) {
                  var d,
                    h,
                    p,
                    f,
                    _,
                    g,
                    y,
                    w = n.props,
                    k = t.props,
                    I = t.type;
                  if (
                    ("svg" == I
                      ? (a = "http://www.w3.org/2000/svg")
                      : "math" == I
                      ? (a = "http://www.w3.org/1998/Math/MathML")
                      : a || (a = "http://www.w3.org/1999/xhtml"),
                    null != o)
                  ) {
                    for (d = 0; d < o.length; d++)
                      if (
                        (_ = o[d]) &&
                        "setAttribute" in _ == !!I &&
                        (I ? _.localName == I : 3 == _.nodeType)
                      ) {
                        (e = _), (o[d] = null);
                        break;
                      }
                  }
                  if (null == e) {
                    if (null == I) return document.createTextNode(k);
                    (e = document.createElementNS(a, I, k.is && k)),
                      l && (s.__m && s.__m(t, o), (l = !1)),
                      (o = null);
                  }
                  if (null == I) w === k || (l && e.data == k) || (e.data = k);
                  else {
                    if (
                      ((o = o && r.call(e.childNodes)),
                      (w = n.props || m),
                      !l && null != o)
                    )
                      for (w = {}, d = 0; d < e.attributes.length; d++)
                        w[(_ = e.attributes[d]).name] = _.value;
                    for (d in w)
                      if (((_ = w[d]), "children" == d));
                      else if ("dangerouslySetInnerHTML" == d) p = _;
                      else if (!(d in k)) {
                        if (
                          ("value" == d && "defaultValue" in k) ||
                          ("checked" == d && "defaultChecked" in k)
                        )
                          continue;
                        N(e, d, null, _, a);
                      }
                    for (d in k)
                      (_ = k[d]),
                        "children" == d
                          ? (f = _)
                          : "dangerouslySetInnerHTML" == d
                          ? (h = _)
                          : "value" == d
                          ? (g = _)
                          : "checked" == d
                          ? (y = _)
                          : (l && "function" != typeof _) ||
                            w[d] === _ ||
                            N(e, d, _, w[d], a);
                    if (h)
                      l ||
                        (p &&
                          (h.__html == p.__html || h.__html == e.innerHTML)) ||
                        (e.innerHTML = h.__html),
                        (t.__k = []);
                    else if (
                      (p && (e.innerHTML = ""),
                      P(
                        "template" == t.type ? e.content : e,
                        b(f) ? f : [f],
                        t,
                        n,
                        i,
                        "foreignObject" == I
                          ? "http://www.w3.org/1999/xhtml"
                          : a,
                        o,
                        c,
                        o ? o[0] : n.__k && S(n, 0),
                        l,
                        u
                      ),
                      null != o)
                    )
                      for (d = o.length; d--; ) v(o[d]);
                    l ||
                      ((d = "value"),
                      "progress" == I && null == g
                        ? e.removeAttribute("value")
                        : null == g ||
                          (g === e[d] &&
                            ("progress" != I || g) &&
                            ("option" != I || g == w[d])) ||
                          N(e, d, g, w[d], a),
                      (d = "checked"),
                      null != y && y != e[d] && N(e, d, y, w[d], a));
                  }
                  return e;
                })(n.__e, t, n, i, a, o, c, u, d));
        return (h = s.diffed) && h(t), 128 & t.__u ? void 0 : l;
      }
      function T(e, t, n) {
        for (var r = 0; r < n.length; r++) j(n[r], n[++r], n[++r]);
        s.__c && s.__c(t, e),
          e.some(function (t) {
            try {
              (e = t.__h),
                (t.__h = []),
                e.some(function (e) {
                  e.call(t);
                });
            } catch (e) {
              s.__e(e, t.__v);
            }
          });
      }
      function j(e, t, n) {
        try {
          if ("function" == typeof e) {
            var r = "function" == typeof e.__u;
            r && e.__u(), (r && null == t) || (e.__u = e(t));
          } else e.current = t;
        } catch (e) {
          s.__e(e, n);
        }
      }
      function O(e, t, n) {
        return this.constructor(e, n);
      }
      function U(e, t, n) {
        var i, a, o, c;
        t == document && (t = document.documentElement),
          s.__ && s.__(e, t),
          (a = (i = "function" == typeof n) ? null : (n && n.__k) || t.__k),
          (o = []),
          (c = []),
          R(
            t,
            (e = ((!i && n) || t).__k = k(C, null, [e])),
            a || m,
            m,
            t.namespaceURI,
            !i && n
              ? [n]
              : a
              ? null
              : t.firstChild
              ? r.call(t.childNodes)
              : null,
            o,
            !i && n ? n : a ? a.__e : t.firstChild,
            i,
            c
          ),
          T(o, e, c);
      }
      function W(e, t) {
        U(e, t, W);
      }
      function q(e, t, n) {
        var s,
          i,
          a,
          o,
          c = w({}, e.props);
        for (a in (e.type && e.type.defaultProps && (o = e.type.defaultProps),
        t))
          "key" == a
            ? (s = t[a])
            : "ref" == a
            ? (i = t[a])
            : (c[a] = null == t[a] && null != o ? o[a] : t[a]);
        return (
          arguments.length > 2 &&
            (c.children = arguments.length > 3 ? r.call(arguments, 2) : n),
          I(e.type, c, s || e.key, i || e.ref, null)
        );
      }
      function z(e) {
        function t(e) {
          var n, r;
          return (
            this.getChildContext ||
              ((n = new Set()),
              ((r = {})[t.__c] = this),
              (this.getChildContext = function () {
                return r;
              }),
              (this.componentWillUnmount = function () {
                n = null;
              }),
              (this.shouldComponentUpdate = function (e) {
                this.props.value != e.value &&
                  n.forEach(function (e) {
                    (e.__e = !0), M(e);
                  });
              }),
              (this.sub = function (e) {
                n.add(e);
                var t = e.componentWillUnmount;
                e.componentWillUnmount = function () {
                  n && n.delete(e), t && t.call(e);
                };
              })),
            e.children
          );
        }
        return (
          (t.__c = "__cC" + _++),
          (t.__ = e),
          (t.Provider =
            t.__l =
            (t.Consumer = function (e, t) {
              return e.children(t);
            }).contextType =
              t),
          t
        );
      }
      (r = g.slice),
        (s = {
          __e: function (e, t, n, r) {
            for (var s, i, a; (t = t.__); )
              if ((s = t.__c) && !s.__)
                try {
                  if (
                    ((i = s.constructor) &&
                      null != i.getDerivedStateFromError &&
                      (s.setState(i.getDerivedStateFromError(e)), (a = s.__d)),
                    null != s.componentDidCatch &&
                      (s.componentDidCatch(e, r || {}), (a = s.__d)),
                    a)
                  )
                    return (s.__E = s);
                } catch (t) {
                  e = t;
                }
            throw e;
          },
        }),
        (i = 0),
        (a = function (e) {
          return null != e && null == e.constructor;
        }),
        (x.prototype.setState = function (e, t) {
          var n;
          (n =
            null != this.__s && this.__s != this.state
              ? this.__s
              : (this.__s = w({}, this.state))),
            "function" == typeof e && (e = e(w({}, n), this.props)),
            e && w(n, e),
            null != e && this.__v && (t && this._sb.push(t), M(this));
        }),
        (x.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), M(this));
        }),
        (x.prototype.render = C),
        (o = []),
        (l =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (u = function (e, t) {
          return e.__v.__b - t.__v.__b;
        }),
        (A.__r = 0),
        (d = /(PointerCapture)$|Capture$/i),
        (h = 0),
        (p = L(!1)),
        (f = L(!0)),
        (_ = 0);
    },
    83026: (e) => {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        n = "~";
      function r() {}
      function s(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function i(e, t, r, i, a) {
        if ("function" != typeof r)
          throw TypeError("The listener must be a function");
        var o = new s(r, i || e, a),
          c = n ? n + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], o])
              : e._events[c].push(o)
            : ((e._events[c] = o), e._eventsCount++),
          e
        );
      }
      function a(e, t) {
        0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
      }
      function o() {
        (this._events = new r()), (this._eventsCount = 0);
      }
      Object.create &&
        ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
        (o.prototype.eventNames = function () {
          var e,
            r,
            s = [];
          if (0 === this._eventsCount) return s;
          for (r in (e = this._events))
            t.call(e, r) && s.push(n ? r.slice(1) : r);
          return Object.getOwnPropertySymbols
            ? s.concat(Object.getOwnPropertySymbols(e))
            : s;
        }),
        (o.prototype.listeners = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var s = 0, i = r.length, a = Array(i); s < i; s++)
            a[s] = r[s].fn;
          return a;
        }),
        (o.prototype.listenerCount = function (e) {
          var t = n ? n + e : e,
            r = this._events[t];
          return r ? (r.fn ? 1 : r.length) : 0;
        }),
        (o.prototype.emit = function (e, t, r, s, i, a) {
          var o = n ? n + e : e;
          if (!this._events[o]) return !1;
          var c,
            l,
            u = this._events[o],
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
                return u.fn.call(u.context, t, r, s), !0;
              case 5:
                return u.fn.call(u.context, t, r, s, i), !0;
              case 6:
                return u.fn.call(u.context, t, r, s, i, a), !0;
            }
            for (l = 1, c = Array(d - 1); l < d; l++) c[l - 1] = arguments[l];
            u.fn.apply(u.context, c);
          } else {
            var h,
              p = u.length;
            for (l = 0; l < p; l++)
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
                  u[l].fn.call(u[l].context, t, r, s);
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
        (o.prototype.on = function (e, t, n) {
          return i(this, e, t, n, !1);
        }),
        (o.prototype.once = function (e, t, n) {
          return i(this, e, t, n, !0);
        }),
        (o.prototype.removeListener = function (e, t, r, s) {
          var i = n ? n + e : e;
          if (!this._events[i]) return this;
          if (!t) return a(this, i), this;
          var o = this._events[i];
          if (o.fn)
            o.fn !== t ||
              (s && !o.once) ||
              (r && o.context !== r) ||
              a(this, i);
          else {
            for (var c = 0, l = [], u = o.length; c < u; c++)
              (o[c].fn !== t ||
                (s && !o[c].once) ||
                (r && o[c].context !== r)) &&
                l.push(o[c]);
            l.length
              ? (this._events[i] = 1 === l.length ? l[0] : l)
              : a(this, i);
          }
          return this;
        }),
        (o.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = n ? n + e : e), this._events[t] && a(this, t))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (o.prototype.off = o.prototype.removeListener),
        (o.prototype.addListener = o.prototype.on),
        (o.prefixed = n),
        (o.EventEmitter = o),
        (e.exports = o);
    },
    96236: (e, t, n) => {
      var r = n(44134).Buffer;
      let { keccak_256: s } = n(91034);
      function i(e) {
        return r.allocUnsafe(e).fill(0);
      }
      function a(e, t) {
        let n = e.toString(16);
        n.length % 2 != 0 && (n = "0" + n);
        let s = n.match(/.{1,2}/g).map((e) => parseInt(e, 16));
        for (; s.length < t; ) s.unshift(0);
        return r.from(s);
      }
      function o(e, t, n) {
        let r = i(t);
        return ((e = c(e)), n)
          ? e.length < t
            ? (e.copy(r), r)
            : e.slice(0, t)
          : e.length < t
          ? (e.copy(r, t - e.length), r)
          : e.slice(-t);
      }
      function c(e) {
        if (!r.isBuffer(e))
          if (Array.isArray(e)) e = r.from(e);
          else if ("string" == typeof e) {
            var t;
            e = l(e)
              ? r.from((t = u(e)).length % 2 ? "0" + t : t, "hex")
              : r.from(e);
          } else if ("number" == typeof e) e = intToBuffer(e);
          else if (null == e) e = r.allocUnsafe(0);
          else if ("bigint" == typeof e) e = a(e);
          else if (e.toArray) e = r.from(e.toArray());
          else throw Error("invalid type");
        return e;
      }
      function l(e) {
        return "string" == typeof e && e.match(/^0x[0-9A-Fa-f]*$/);
      }
      function u(e) {
        return "string" == typeof e && e.startsWith("0x") ? e.slice(2) : e;
      }
      e.exports = {
        zeros: i,
        setLength: o,
        setLengthRight: function (e, t) {
          return o(e, t, !0);
        },
        isHexString: l,
        stripHexPrefix: u,
        toBuffer: c,
        bufferToHex: function (e) {
          return "0x" + (e = c(e)).toString("hex");
        },
        keccak: function (e, t) {
          if (((e = c(e)), t || (t = 256), 256 !== t))
            throw Error("unsupported");
          return r.from(s(new Uint8Array(e)));
        },
        bitLengthFromBigInt: function (e) {
          return e.toString(2).length;
        },
        bufferBEFromBigInt: a,
        twosFromBigInt: function (e, t) {
          let n;
          return (
            (e < 0n ? (~e & ((1n << BigInt(t)) - 1n)) + 1n : e) &
            ((1n << BigInt(t)) - 1n)
          );
        },
      };
    },
  },
]);
