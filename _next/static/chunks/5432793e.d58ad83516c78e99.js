"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1362],
  {
    41932: function (t, e, f) {
      let h, u;
      f.d(e, {
        D6H: function () {
          return er;
        },
        guN: function () {
          return Wo;
        },
        qt8: function () {
          return Nr;
        },
      }),
        f(66736),
        f(62873),
        f(65755),
        f(17563),
        f(15501),
        f(512),
        f(31416),
        f(73294),
        f(57664),
        f(49993),
        f(98973),
        f(21878),
        f(21721);
      var l,
        d,
        c,
        m,
        b,
        M,
        E,
        S,
        B,
        I,
        N,
        C = f(34155);
      function Wo(t, e = []) {
        let f = [];
        return (
          Object.keys(t).forEach((h) => {
            if (e.length && !e.includes(h)) return;
            let u = t[h];
            f.push(...u.accounts);
          }),
          f
        );
      }
      f(48764).Buffer,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      var x =
          "u" > typeof globalThis
            ? globalThis
            : "u" > typeof window
            ? window
            : "u" > typeof f.g
            ? f.g
            : "u" > typeof self
            ? self
            : {},
        _ = { exports: {} };
      (function () {
        var t = "input is invalid type",
          e = "object" == typeof window,
          f = e ? window : {};
        f.JS_SHA3_NO_WINDOW && (e = !1);
        var h = !e && "object" == typeof self;
        !f.JS_SHA3_NO_NODE_JS &&
        "object" == typeof C &&
        C.versions &&
        C.versions.node
          ? (f = x)
          : h && (f = self);
        var u = !f.JS_SHA3_NO_COMMON_JS && _.exports,
          l = !f.JS_SHA3_NO_ARRAY_BUFFER && "u" > typeof ArrayBuffer,
          d = "0123456789abcdef".split(""),
          c = [4, 1024, 262144, 67108864],
          m = [0, 8, 16, 24],
          b = [
            1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
            2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0,
            136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139,
            2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648,
            128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545,
            2147483648, 32896, 2147483648, 2147483649, 0, 2147516424,
            2147483648,
          ],
          M = [224, 256, 384, 512],
          E = [128, 256],
          S = ["hex", "buffer", "arrayBuffer", "array", "digest"],
          B = { 128: 168, 256: 136 };
        (f.JS_SHA3_NO_NODE_JS || !Array.isArray) &&
          (Array.isArray = function (t) {
            return "[object Array]" === Object.prototype.toString.call(t);
          }),
          l &&
            (f.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
            (ArrayBuffer.isView = function (t) {
              return (
                "object" == typeof t &&
                t.buffer &&
                t.buffer.constructor === ArrayBuffer
              );
            });
        for (
          var G = function (t, e, f) {
              return function (h) {
                return new s(t, e, t).update(h)[f]();
              };
            },
            H = function (t, e, f) {
              return function (h, u) {
                return new s(t, e, u).update(h)[f]();
              };
            },
            L = function (t, e, f) {
              return function (e, h, u, l) {
                return N["cshake" + t].update(e, h, u, l)[f]();
              };
            },
            Pt = function (t, e, f) {
              return function (e, h, u, l) {
                return N["kmac" + t].update(e, h, u, l)[f]();
              };
            },
            W = function (t, e, f, h) {
              for (var u = 0; u < S.length; ++u) {
                var l = S[u];
                t[l] = e(f, h, l);
              }
              return t;
            },
            Rt = function (t, e) {
              var f = G(t, e, "hex");
              return (
                (f.create = function () {
                  return new s(t, e, t);
                }),
                (f.update = function (t) {
                  return f.create().update(t);
                }),
                W(f, G, t, e)
              );
            },
            I = [
              {
                name: "keccak",
                padding: [1, 256, 65536, 16777216],
                bits: M,
                createMethod: Rt,
              },
              {
                name: "sha3",
                padding: [6, 1536, 393216, 100663296],
                bits: M,
                createMethod: Rt,
              },
              {
                name: "shake",
                padding: [31, 7936, 2031616, 520093696],
                bits: E,
                createMethod: function (t, e) {
                  var f = H(t, e, "hex");
                  return (
                    (f.create = function (f) {
                      return new s(t, e, f);
                    }),
                    (f.update = function (t, e) {
                      return f.create(e).update(t);
                    }),
                    W(f, H, t, e)
                  );
                },
              },
              {
                name: "cshake",
                padding: c,
                bits: E,
                createMethod: function (t, e) {
                  var f = B[t],
                    h = L(t, e, "hex");
                  return (
                    (h.create = function (h, u, l) {
                      return u || l
                        ? new s(t, e, h).bytepad([u, l], f)
                        : N["shake" + t].create(h);
                    }),
                    (h.update = function (t, e, f, u) {
                      return h.create(e, f, u).update(t);
                    }),
                    W(h, L, t, e)
                  );
                },
              },
              {
                name: "kmac",
                padding: c,
                bits: E,
                createMethod: function (t, e) {
                  var f = B[t],
                    h = Pt(t, e, "hex");
                  return (
                    (h.create = function (h, u, l) {
                      return new g(t, e, u)
                        .bytepad(["KMAC", l], f)
                        .bytepad([h], f);
                    }),
                    (h.update = function (t, e, f, u) {
                      return h.create(t, f, u).update(e);
                    }),
                    W(h, Pt, t, e)
                  );
                },
              },
            ],
            N = {},
            R = [],
            D = 0;
          D < I.length;
          ++D
        )
          for (var F = I[D], T = F.bits, O = 0; O < T.length; ++O) {
            var P = F.name + "_" + T[O];
            if (
              (R.push(P),
              (N[P] = F.createMethod(T[O], F.padding)),
              "sha3" !== F.name)
            ) {
              var q = F.name + T[O];
              R.push(q), (N[q] = N[P]);
            }
          }
        function s(t, e, f) {
          (this.blocks = []),
            (this.s = []),
            (this.padding = e),
            (this.outputBits = f),
            (this.reset = !0),
            (this.finalized = !1),
            (this.block = 0),
            (this.start = 0),
            (this.blockCount = (1600 - (t << 1)) >> 5),
            (this.byteCount = this.blockCount << 2),
            (this.outputBlocks = f >> 5),
            (this.extraBytes = (31 & f) >> 3);
          for (var h = 0; h < 50; ++h) this.s[h] = 0;
        }
        function g(t, e, f) {
          s.call(this, t, e, f);
        }
        (s.prototype.update = function (e) {
          if (this.finalized) throw Error("finalize already called");
          var f,
            h = typeof e;
          if ("string" !== h) {
            if ("object" === h) {
              if (null === e) throw Error(t);
              if (l && e.constructor === ArrayBuffer) e = new Uint8Array(e);
              else if (!Array.isArray(e) && (!l || !ArrayBuffer.isView(e)))
                throw Error(t);
            } else throw Error(t);
            f = !0;
          }
          for (
            var u,
              d,
              c = this.blocks,
              b = this.byteCount,
              M = e.length,
              E = this.blockCount,
              S = 0,
              B = this.s;
            S < M;

          ) {
            if (this.reset)
              for (this.reset = !1, c[0] = this.block, u = 1; u < E + 1; ++u)
                c[u] = 0;
            if (f)
              for (u = this.start; S < M && u < b; ++S)
                c[u >> 2] |= e[S] << m[3 & u++];
            else
              for (u = this.start; S < M && u < b; ++S)
                (d = e.charCodeAt(S)) < 128
                  ? (c[u >> 2] |= d << m[3 & u++])
                  : (d < 2048
                      ? (c[u >> 2] |= (192 | (d >> 6)) << m[3 & u++])
                      : (d < 55296 || d >= 57344
                          ? (c[u >> 2] |= (224 | (d >> 12)) << m[3 & u++])
                          : ((d =
                              65536 +
                              (((1023 & d) << 10) |
                                (1023 & e.charCodeAt(++S)))),
                            (c[u >> 2] |= (240 | (d >> 18)) << m[3 & u++]),
                            (c[u >> 2] |=
                              (128 | ((d >> 12) & 63)) << m[3 & u++])),
                        (c[u >> 2] |= (128 | ((d >> 6) & 63)) << m[3 & u++])),
                    (c[u >> 2] |= (128 | (63 & d)) << m[3 & u++]));
            if (((this.lastByteIndex = u), u >= b)) {
              for (this.start = u - b, this.block = c[E], u = 0; u < E; ++u)
                B[u] ^= c[u];
              k(B), (this.reset = !0);
            } else this.start = u;
          }
          return this;
        }),
          (s.prototype.encode = function (t, e) {
            var f = 255 & t,
              h = 1,
              u = [f];
            for (t >>= 8, f = 255 & t; f > 0; )
              u.unshift(f), (t >>= 8), (f = 255 & t), ++h;
            return e ? u.push(h) : u.unshift(h), this.update(u), u.length;
          }),
          (s.prototype.encodeString = function (e) {
            var f,
              h = typeof e;
            if ("string" !== h) {
              if ("object" === h) {
                if (null === e) throw Error(t);
                if (l && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                else if (!Array.isArray(e) && (!l || !ArrayBuffer.isView(e)))
                  throw Error(t);
              } else throw Error(t);
              f = !0;
            }
            var u = 0,
              d = e.length;
            if (f) u = d;
            else
              for (var c = 0; c < e.length; ++c) {
                var m = e.charCodeAt(c);
                m < 128
                  ? (u += 1)
                  : m < 2048
                  ? (u += 2)
                  : m < 55296 || m >= 57344
                  ? (u += 3)
                  : ((m =
                      65536 +
                      (((1023 & m) << 10) | (1023 & e.charCodeAt(++c)))),
                    (u += 4));
              }
            return (u += this.encode(8 * u)), this.update(e), u;
          }),
          (s.prototype.bytepad = function (t, e) {
            for (var f = this.encode(e), h = 0; h < t.length; ++h)
              f += this.encodeString(t[h]);
            var u = e - (f % e),
              l = [];
            return (l.length = u), this.update(l), this;
          }),
          (s.prototype.finalize = function () {
            if (!this.finalized) {
              this.finalized = !0;
              var t = this.blocks,
                e = this.lastByteIndex,
                f = this.blockCount,
                h = this.s;
              if (
                ((t[e >> 2] |= this.padding[3 & e]),
                this.lastByteIndex === this.byteCount)
              )
                for (t[0] = t[f], e = 1; e < f + 1; ++e) t[e] = 0;
              for (t[f - 1] |= 2147483648, e = 0; e < f; ++e) h[e] ^= t[e];
              k(h);
            }
          }),
          (s.prototype.toString = s.prototype.hex =
            function () {
              this.finalize();
              for (
                var t,
                  e = this.blockCount,
                  f = this.s,
                  h = this.outputBlocks,
                  u = this.extraBytes,
                  l = 0,
                  c = 0,
                  m = "";
                c < h;

              ) {
                for (l = 0; l < e && c < h; ++l, ++c)
                  m +=
                    d[((t = f[l]) >> 4) & 15] +
                    d[15 & t] +
                    d[(t >> 12) & 15] +
                    d[(t >> 8) & 15] +
                    d[(t >> 20) & 15] +
                    d[(t >> 16) & 15] +
                    d[(t >> 28) & 15] +
                    d[(t >> 24) & 15];
                c % e == 0 && (k(f), (l = 0));
              }
              return (
                u &&
                  ((m += d[((t = f[l]) >> 4) & 15] + d[15 & t]),
                  u > 1 && (m += d[(t >> 12) & 15] + d[(t >> 8) & 15]),
                  u > 2 && (m += d[(t >> 20) & 15] + d[(t >> 16) & 15])),
                m
              );
            }),
          (s.prototype.arrayBuffer = function () {
            this.finalize();
            var t,
              e = this.blockCount,
              f = this.s,
              h = this.outputBlocks,
              u = this.extraBytes,
              l = 0,
              d = 0,
              c = this.outputBits >> 3;
            t = new ArrayBuffer(u ? (h + 1) << 2 : c);
            for (var m = new Uint32Array(t); d < h; ) {
              for (l = 0; l < e && d < h; ++l, ++d) m[d] = f[l];
              d % e == 0 && k(f);
            }
            return u && ((m[l] = f[l]), (t = t.slice(0, c))), t;
          }),
          (s.prototype.buffer = s.prototype.arrayBuffer),
          (s.prototype.digest = s.prototype.array =
            function () {
              this.finalize();
              for (
                var t,
                  e,
                  f = this.blockCount,
                  h = this.s,
                  u = this.outputBlocks,
                  l = this.extraBytes,
                  d = 0,
                  c = 0,
                  m = [];
                c < u;

              ) {
                for (d = 0; d < f && c < u; ++d, ++c)
                  (t = c << 2),
                    (e = h[d]),
                    (m[t] = 255 & e),
                    (m[t + 1] = (e >> 8) & 255),
                    (m[t + 2] = (e >> 16) & 255),
                    (m[t + 3] = (e >> 24) & 255);
                c % f == 0 && k(h);
              }
              return (
                l &&
                  ((t = c << 2),
                  (e = h[d]),
                  (m[t] = 255 & e),
                  l > 1 && (m[t + 1] = (e >> 8) & 255),
                  l > 2 && (m[t + 2] = (e >> 16) & 255)),
                m
              );
            }),
          (g.prototype = new s()),
          (g.prototype.finalize = function () {
            return (
              this.encode(this.outputBits, !0), s.prototype.finalize.call(this)
            );
          });
        var k = function (t) {
          var e,
            f,
            h,
            u,
            l,
            d,
            c,
            m,
            M,
            E,
            S,
            B,
            I,
            N,
            C,
            x,
            _,
            R,
            D,
            F,
            T,
            O,
            P,
            q,
            Q,
            K,
            X,
            Z,
            $,
            tt,
            tr,
            ti,
            tn,
            to,
            ts,
            tf,
            th,
            tu,
            ta,
            tl,
            td,
            tc,
            tp,
            tm,
            tg,
            tA,
            tv,
            tb,
            ty,
            tw,
            tM,
            tE,
            tS,
            tB,
            tI,
            tN,
            tC,
            tx,
            t_,
            tR,
            tU,
            tD,
            tk;
          for (h = 0; h < 48; h += 2)
            (u = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40]),
              (l = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41]),
              (d = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42]),
              (c = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43]),
              (m = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44]),
              (M = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45]),
              (E = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46]),
              (S = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47]),
              (B = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]),
              (I = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]),
              (e = B ^ ((d << 1) | (c >>> 31))),
              (f = I ^ ((c << 1) | (d >>> 31))),
              (t[0] ^= e),
              (t[1] ^= f),
              (t[10] ^= e),
              (t[11] ^= f),
              (t[20] ^= e),
              (t[21] ^= f),
              (t[30] ^= e),
              (t[31] ^= f),
              (t[40] ^= e),
              (t[41] ^= f),
              (e = u ^ ((m << 1) | (M >>> 31))),
              (f = l ^ ((M << 1) | (m >>> 31))),
              (t[2] ^= e),
              (t[3] ^= f),
              (t[12] ^= e),
              (t[13] ^= f),
              (t[22] ^= e),
              (t[23] ^= f),
              (t[32] ^= e),
              (t[33] ^= f),
              (t[42] ^= e),
              (t[43] ^= f),
              (e = d ^ ((E << 1) | (S >>> 31))),
              (f = c ^ ((S << 1) | (E >>> 31))),
              (t[4] ^= e),
              (t[5] ^= f),
              (t[14] ^= e),
              (t[15] ^= f),
              (t[24] ^= e),
              (t[25] ^= f),
              (t[34] ^= e),
              (t[35] ^= f),
              (t[44] ^= e),
              (t[45] ^= f),
              (e = m ^ ((B << 1) | (I >>> 31))),
              (f = M ^ ((I << 1) | (B >>> 31))),
              (t[6] ^= e),
              (t[7] ^= f),
              (t[16] ^= e),
              (t[17] ^= f),
              (t[26] ^= e),
              (t[27] ^= f),
              (t[36] ^= e),
              (t[37] ^= f),
              (t[46] ^= e),
              (t[47] ^= f),
              (e = E ^ ((u << 1) | (l >>> 31))),
              (f = S ^ ((l << 1) | (u >>> 31))),
              (t[8] ^= e),
              (t[9] ^= f),
              (t[18] ^= e),
              (t[19] ^= f),
              (t[28] ^= e),
              (t[29] ^= f),
              (t[38] ^= e),
              (t[39] ^= f),
              (t[48] ^= e),
              (t[49] ^= f),
              (N = t[0]),
              (C = t[1]),
              (tA = (t[11] << 4) | (t[10] >>> 28)),
              (tv = (t[10] << 4) | (t[11] >>> 28)),
              (Z = (t[20] << 3) | (t[21] >>> 29)),
              ($ = (t[21] << 3) | (t[20] >>> 29)),
              (tR = (t[31] << 9) | (t[30] >>> 23)),
              (tU = (t[30] << 9) | (t[31] >>> 23)),
              (tc = (t[40] << 18) | (t[41] >>> 14)),
              (tp = (t[41] << 18) | (t[40] >>> 14)),
              (to = (t[2] << 1) | (t[3] >>> 31)),
              (ts = (t[3] << 1) | (t[2] >>> 31)),
              (x = (t[13] << 12) | (t[12] >>> 20)),
              (_ = (t[12] << 12) | (t[13] >>> 20)),
              (tb = (t[22] << 10) | (t[23] >>> 22)),
              (ty = (t[23] << 10) | (t[22] >>> 22)),
              (tt = (t[33] << 13) | (t[32] >>> 19)),
              (tr = (t[32] << 13) | (t[33] >>> 19)),
              (tD = (t[42] << 2) | (t[43] >>> 30)),
              (tk = (t[43] << 2) | (t[42] >>> 30)),
              (tB = (t[5] << 30) | (t[4] >>> 2)),
              (tI = (t[4] << 30) | (t[5] >>> 2)),
              (tf = (t[14] << 6) | (t[15] >>> 26)),
              (th = (t[15] << 6) | (t[14] >>> 26)),
              (R = (t[25] << 11) | (t[24] >>> 21)),
              (D = (t[24] << 11) | (t[25] >>> 21)),
              (tw = (t[34] << 15) | (t[35] >>> 17)),
              (tM = (t[35] << 15) | (t[34] >>> 17)),
              (ti = (t[45] << 29) | (t[44] >>> 3)),
              (tn = (t[44] << 29) | (t[45] >>> 3)),
              (q = (t[6] << 28) | (t[7] >>> 4)),
              (Q = (t[7] << 28) | (t[6] >>> 4)),
              (tN = (t[17] << 23) | (t[16] >>> 9)),
              (tC = (t[16] << 23) | (t[17] >>> 9)),
              (tu = (t[26] << 25) | (t[27] >>> 7)),
              (ta = (t[27] << 25) | (t[26] >>> 7)),
              (F = (t[36] << 21) | (t[37] >>> 11)),
              (T = (t[37] << 21) | (t[36] >>> 11)),
              (tE = (t[47] << 24) | (t[46] >>> 8)),
              (tS = (t[46] << 24) | (t[47] >>> 8)),
              (tm = (t[8] << 27) | (t[9] >>> 5)),
              (tg = (t[9] << 27) | (t[8] >>> 5)),
              (K = (t[18] << 20) | (t[19] >>> 12)),
              (X = (t[19] << 20) | (t[18] >>> 12)),
              (tx = (t[29] << 7) | (t[28] >>> 25)),
              (t_ = (t[28] << 7) | (t[29] >>> 25)),
              (tl = (t[38] << 8) | (t[39] >>> 24)),
              (td = (t[39] << 8) | (t[38] >>> 24)),
              (O = (t[48] << 14) | (t[49] >>> 18)),
              (P = (t[49] << 14) | (t[48] >>> 18)),
              (t[0] = N ^ (~x & R)),
              (t[1] = C ^ (~_ & D)),
              (t[10] = q ^ (~K & Z)),
              (t[11] = Q ^ (~X & $)),
              (t[20] = to ^ (~tf & tu)),
              (t[21] = ts ^ (~th & ta)),
              (t[30] = tm ^ (~tA & tb)),
              (t[31] = tg ^ (~tv & ty)),
              (t[40] = tB ^ (~tN & tx)),
              (t[41] = tI ^ (~tC & t_)),
              (t[2] = x ^ (~R & F)),
              (t[3] = _ ^ (~D & T)),
              (t[12] = K ^ (~Z & tt)),
              (t[13] = X ^ (~$ & tr)),
              (t[22] = tf ^ (~tu & tl)),
              (t[23] = th ^ (~ta & td)),
              (t[32] = tA ^ (~tb & tw)),
              (t[33] = tv ^ (~ty & tM)),
              (t[42] = tN ^ (~tx & tR)),
              (t[43] = tC ^ (~t_ & tU)),
              (t[4] = R ^ (~F & O)),
              (t[5] = D ^ (~T & P)),
              (t[14] = Z ^ (~tt & ti)),
              (t[15] = $ ^ (~tr & tn)),
              (t[24] = tu ^ (~tl & tc)),
              (t[25] = ta ^ (~td & tp)),
              (t[34] = tb ^ (~tw & tE)),
              (t[35] = ty ^ (~tM & tS)),
              (t[44] = tx ^ (~tR & tD)),
              (t[45] = t_ ^ (~tU & tk)),
              (t[6] = F ^ (~O & N)),
              (t[7] = T ^ (~P & C)),
              (t[16] = tt ^ (~ti & q)),
              (t[17] = tr ^ (~tn & Q)),
              (t[26] = tl ^ (~tc & to)),
              (t[27] = td ^ (~tp & ts)),
              (t[36] = tw ^ (~tE & tm)),
              (t[37] = tM ^ (~tS & tg)),
              (t[46] = tR ^ (~tD & tB)),
              (t[47] = tU ^ (~tk & tI)),
              (t[8] = O ^ (~N & x)),
              (t[9] = P ^ (~C & _)),
              (t[18] = ti ^ (~q & K)),
              (t[19] = tn ^ (~Q & X)),
              (t[28] = tc ^ (~to & tf)),
              (t[29] = tp ^ (~ts & th)),
              (t[38] = tE ^ (~tm & tA)),
              (t[39] = tS ^ (~tg & tv)),
              (t[48] = tD ^ (~tB & tN)),
              (t[49] = tk ^ (~tI & tC)),
              (t[0] ^= b[h]),
              (t[1] ^= b[h + 1]);
        };
        if (u) _.exports = N;
        else for (D = 0; D < R.length; ++D) f[R[D]] = N[R[D]];
      })(),
        _.exports;
      let R = !1,
        D = !1,
        F = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 },
        T = 2,
        O = null,
        P = (function () {
          try {
            let t = [];
            if (
              (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
                try {
                  if ("test" !== "test".normalize(e))
                    throw Error("bad normalize");
                } catch {
                  t.push(e);
                }
              }),
              t.length)
            )
              throw Error("missing " + t.join(", "));
            if (
              String.fromCharCode(233).normalize("NFD") !==
              String.fromCharCode(101, 769)
            )
              throw Error("broken implementation");
          } catch (t) {
            return t.message;
          }
          return null;
        })();
      ((E = d || (d = {})).DEBUG = "DEBUG"),
        (E.INFO = "INFO"),
        (E.WARNING = "WARNING"),
        (E.ERROR = "ERROR"),
        (E.OFF = "OFF"),
        ((S = c || (c = {})).UNKNOWN_ERROR = "UNKNOWN_ERROR"),
        (S.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
        (S.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
        (S.NETWORK_ERROR = "NETWORK_ERROR"),
        (S.SERVER_ERROR = "SERVER_ERROR"),
        (S.TIMEOUT = "TIMEOUT"),
        (S.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
        (S.NUMERIC_FAULT = "NUMERIC_FAULT"),
        (S.MISSING_NEW = "MISSING_NEW"),
        (S.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
        (S.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
        (S.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
        (S.CALL_EXCEPTION = "CALL_EXCEPTION"),
        (S.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
        (S.NONCE_EXPIRED = "NONCE_EXPIRED"),
        (S.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
        (S.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
        (S.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
        (S.ACTION_REJECTED = "ACTION_REJECTED");
      let q = "0123456789abcdef";
      let z = class z {
        constructor(t) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: t,
            writable: !1,
          });
        }
        _log(t, e) {
          let f = t.toLowerCase();
          null == F[f] &&
            this.throwArgumentError("invalid log level name", "logLevel", t),
            T > F[f] || console.log.apply(console, e);
        }
        debug(...t) {
          this._log(z.levels.DEBUG, t);
        }
        info(...t) {
          this._log(z.levels.INFO, t);
        }
        warn(...t) {
          this._log(z.levels.WARNING, t);
        }
        makeError(t, e, f) {
          if (D) return this.makeError("censored error", e, {});
          e || (e = z.errors.UNKNOWN_ERROR), f || (f = {});
          let h = [];
          Object.keys(f).forEach((t) => {
            let e = f[t];
            try {
              if (e instanceof Uint8Array) {
                let f = "";
                for (let t = 0; t < e.length; t++)
                  f += q[e[t] >> 4] + q[15 & e[t]];
                h.push(t + "=Uint8Array(0x" + f + ")");
              } else h.push(t + "=" + JSON.stringify(e));
            } catch {
              h.push(t + "=" + JSON.stringify(f[t].toString()));
            }
          }),
            h.push(`code=${e}`),
            h.push(`version=${this.version}`);
          let u = t,
            l = "";
          switch (e) {
            case c.NUMERIC_FAULT: {
              l = "NUMERIC_FAULT";
              let e = t;
              switch (e) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  l += "-" + e;
                  break;
                case "negative-power":
                case "negative-width":
                  l += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  l += "-unbound-result";
              }
              break;
            }
            case c.CALL_EXCEPTION:
            case c.INSUFFICIENT_FUNDS:
            case c.MISSING_NEW:
            case c.NONCE_EXPIRED:
            case c.REPLACEMENT_UNDERPRICED:
            case c.TRANSACTION_REPLACED:
            case c.UNPREDICTABLE_GAS_LIMIT:
              l = e;
          }
          l && (t += " [ See: https://links.ethers.org/v5-errors-" + l + " ]"),
            h.length && (t += " (" + h.join(", ") + ")");
          let d = Error(t);
          return (
            (d.reason = u),
            (d.code = e),
            Object.keys(f).forEach(function (t) {
              d[t] = f[t];
            }),
            d
          );
        }
        throwError(t, e, f) {
          throw this.makeError(t, e, f);
        }
        throwArgumentError(t, e, f) {
          return this.throwError(t, z.errors.INVALID_ARGUMENT, {
            argument: e,
            value: f,
          });
        }
        assert(t, e, f, h) {
          t || this.throwError(e, f, h);
        }
        assertArgument(t, e, f, h) {
          t || this.throwArgumentError(e, f, h);
        }
        checkNormalize(t) {
          P &&
            this.throwError(
              "platform missing String.prototype.normalize",
              z.errors.UNSUPPORTED_OPERATION,
              { operation: "String.prototype.normalize", form: P }
            );
        }
        checkSafeUint53(t, e) {
          "number" == typeof t &&
            (null == e && (e = "value not safe"),
            (t < 0 || t >= 9007199254740991) &&
              this.throwError(e, z.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: t,
              }),
            t % 1 &&
              this.throwError(e, z.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: t,
              }));
        }
        checkArgumentCount(t, e, f) {
          (f = f ? ": " + f : ""),
            t < e &&
              this.throwError(
                "missing argument" + f,
                z.errors.MISSING_ARGUMENT,
                { count: t, expectedCount: e }
              ),
            t > e &&
              this.throwError(
                "too many arguments" + f,
                z.errors.UNEXPECTED_ARGUMENT,
                { count: t, expectedCount: e }
              );
        }
        checkNew(t, e) {
          (t === Object || null == t) &&
            this.throwError("missing new", z.errors.MISSING_NEW, {
              name: e.name,
            });
        }
        checkAbstract(t, e) {
          t === e
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(e.name) +
                  " directly; use a sub-class",
                z.errors.UNSUPPORTED_OPERATION,
                { name: t.name, operation: "new" }
              )
            : (t === Object || null == t) &&
              this.throwError("missing new", z.errors.MISSING_NEW, {
                name: e.name,
              });
        }
        static globalLogger() {
          return O || (O = new z("logger/5.7.0")), O;
        }
        static setCensorship(t, e) {
          if (
            (!t &&
              e &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                z.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" }
              ),
            R)
          ) {
            if (!t) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              z.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" }
            );
          }
          (D = !!t), (R = !!e);
        }
        static setLogLevel(t) {
          let e = F[t.toLowerCase()];
          if (null == e) {
            z.globalLogger().warn("invalid log level - " + t);
            return;
          }
          T = e;
        }
        static from(t) {
          return new z(t);
        }
      };
      (z.errors = c), (z.levels = d);
      let Q = new z("bytes/5.7.0");
      function Gn(t) {
        return !!t.toHexString;
      }
      function ir(t) {
        return (
          t.slice ||
            (t.slice = function () {
              let e = Array.prototype.slice.call(arguments);
              return ir(new Uint8Array(Array.prototype.slice.apply(t, e)));
            }),
          t
        );
      }
      function Yn(t) {
        return "number" == typeof t && t == t && t % 1 == 0;
      }
      function nr(t) {
        if (null == t) return !1;
        if (t.constructor === Uint8Array) return !0;
        if ("string" == typeof t || !Yn(t.length) || t.length < 0) return !1;
        for (let e = 0; e < t.length; e++) {
          let f = t[e];
          if (!Yn(f) || f < 0 || f >= 256) return !1;
        }
        return !0;
      }
      function Ot(t, e) {
        if ((e || (e = {}), "number" == typeof t)) {
          Q.checkSafeUint53(t, "invalid arrayify value");
          let e = [];
          for (; t; ) e.unshift(255 & t), (t = parseInt(String(t / 256)));
          return 0 === e.length && e.push(0), ir(new Uint8Array(e));
        }
        if (
          (e.allowMissingPrefix &&
            "string" == typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          Gn(t) && (t = t.toHexString()),
          Jt(t))
        ) {
          let f = t.substring(2);
          f.length % 2 &&
            ("left" === e.hexPad
              ? (f = "0" + f)
              : "right" === e.hexPad
              ? (f += "0")
              : Q.throwArgumentError("hex data is odd-length", "value", t));
          let h = [];
          for (let t = 0; t < f.length; t += 2)
            h.push(parseInt(f.substring(t, t + 2), 16));
          return ir(new Uint8Array(h));
        }
        return nr(t)
          ? ir(new Uint8Array(t))
          : Q.throwArgumentError("invalid arrayify value", "value", t);
      }
      function Jt(t, e) {
        return !(
          "string" != typeof t ||
          !t.match(/^0x[0-9A-Fa-f]*$/) ||
          (e && t.length !== 2 + 2 * e)
        );
      }
      let K = "0123456789abcdef";
      function Kt(t, e) {
        if ((e || (e = {}), "number" == typeof t)) {
          Q.checkSafeUint53(t, "invalid hexlify value");
          let e = "";
          for (; t; ) (e = K[15 & t] + e), (t = Math.floor(t / 16));
          return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00";
        }
        if ("bigint" == typeof t)
          return (t = t.toString(16)).length % 2 ? "0x0" + t : "0x" + t;
        if (
          (e.allowMissingPrefix &&
            "string" == typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          Gn(t))
        )
          return t.toHexString();
        if (Jt(t))
          return (
            t.length % 2 &&
              ("left" === e.hexPad
                ? (t = "0x0" + t.substring(2))
                : "right" === e.hexPad
                ? (t += "0")
                : Q.throwArgumentError("hex data is odd-length", "value", t)),
            t.toLowerCase()
          );
        if (nr(t)) {
          let e = "0x";
          for (let f = 0; f < t.length; f++) {
            let h = t[f];
            e += K[(240 & h) >> 4] + K[15 & h];
          }
          return e;
        }
        return Q.throwArgumentError("invalid hexlify value", "value", t);
      }
      function oe(t, e) {
        for (
          "string" != typeof t
            ? (t = Kt(t))
            : Jt(t) || Q.throwArgumentError("invalid hex string", "value", t),
            t.length > 2 * e + 2 &&
              Q.throwArgumentError("value out of range", "value", arguments[1]);
          t.length < 2 * e + 2;

        )
          t = "0x0" + t.substring(2);
        return t;
      }
      var X = { exports: {} },
        Z = (function (t) {
          var e = t.default;
          if ("function" == typeof e) {
            var r = function () {
              return e.apply(this, arguments);
            };
            r.prototype = e.prototype;
          } else r = {};
          return (
            Object.defineProperty(r, "__esModule", { value: !0 }),
            Object.keys(t).forEach(function (e) {
              var f = Object.getOwnPropertyDescriptor(t, e);
              Object.defineProperty(
                r,
                e,
                f.get
                  ? f
                  : {
                      enumerable: !0,
                      get: function () {
                        return t[e];
                      },
                    }
              );
            }),
            r
          );
        })(Object.freeze({ __proto__: null, default: {} }));
      !(function (t, e) {
        function i(t, e) {
          if (!t) throw Error(e || "Assertion failed");
        }
        function n(t, e) {
          t.super_ = e;
          var a = function () {};
          (a.prototype = e.prototype),
            (t.prototype = new a()),
            (t.prototype.constructor = t);
        }
        function o(t, e, f) {
          if (o.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" === e || "be" === e) && ((f = e), (e = 10)),
              this._init(t || 0, e || 10, f || "be"));
        }
        "object" == typeof t ? (t.exports = o) : (e.BN = o),
          (o.BN = o),
          (o.wordSize = 26);
        try {
          f =
            "u" > typeof window && "u" > typeof window.Buffer
              ? window.Buffer
              : Z.Buffer;
        } catch {}
        function p(t, e) {
          var f = t.charCodeAt(e);
          return f >= 48 && f <= 57
            ? f - 48
            : f >= 65 && f <= 70
            ? f - 55
            : f >= 97 && f <= 102
            ? f - 87
            : void i(!1, "Invalid character in " + t);
        }
        function A(t, e, f) {
          var h = p(t, f);
          return f - 1 >= e && (h |= p(t, f - 1) << 4), h;
        }
        function v(t, e, f, h) {
          for (var u = 0, l = 0, d = Math.min(t.length, f), c = e; c < d; c++) {
            var m = t.charCodeAt(c) - 48;
            (u *= h),
              (l = m >= 49 ? m - 49 + 10 : m >= 17 ? m - 17 + 10 : m),
              i(m >= 0 && l < h, "Invalid character"),
              (u += l);
          }
          return u;
        }
        function w(t, e) {
          (t.words = e.words),
            (t.length = e.length),
            (t.negative = e.negative),
            (t.red = e.red);
        }
        if (
          ((o.isBN = function (t) {
            return (
              t instanceof o ||
              (null !== t &&
                "object" == typeof t &&
                t.constructor.wordSize === o.wordSize &&
                Array.isArray(t.words))
            );
          }),
          (o.max = function (t, e) {
            return t.cmp(e) > 0 ? t : e;
          }),
          (o.min = function (t, e) {
            return 0 > t.cmp(e) ? t : e;
          }),
          (o.prototype._init = function (t, e, f) {
            if ("number" == typeof t) return this._initNumber(t, e, f);
            if ("object" == typeof t) return this._initArray(t, e, f);
            "hex" === e && (e = 16), i(e === (0 | e) && e >= 2 && e <= 36);
            var h = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
              (h++, (this.negative = 1)),
              h < t.length &&
                (16 === e
                  ? this._parseHex(t, h, f)
                  : (this._parseBase(t, e, h),
                    "le" === f && this._initArray(this.toArray(), e, f)));
          }),
          (o.prototype._initNumber = function (t, e, f) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (i(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === f && this._initArray(this.toArray(), e, f);
          }),
          (o.prototype._initArray = function (t, e, f) {
            if ((i("number" == typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = Array(this.length));
            for (var h = 0; h < this.length; h++) this.words[h] = 0;
            var u,
              l,
              d = 0;
            if ("be" === f)
              for (h = t.length - 1, u = 0; h >= 0; h -= 3)
                (l = t[h] | (t[h - 1] << 8) | (t[h - 2] << 16)),
                  (this.words[u] |= (l << d) & 67108863),
                  (this.words[u + 1] = (l >>> (26 - d)) & 67108863),
                  (d += 24) >= 26 && ((d -= 26), u++);
            else if ("le" === f)
              for (h = 0, u = 0; h < t.length; h += 3)
                (l = t[h] | (t[h + 1] << 8) | (t[h + 2] << 16)),
                  (this.words[u] |= (l << d) & 67108863),
                  (this.words[u + 1] = (l >>> (26 - d)) & 67108863),
                  (d += 24) >= 26 && ((d -= 26), u++);
            return this._strip();
          }),
          (o.prototype._parseHex = function (t, e, f) {
            (this.length = Math.ceil((t.length - e) / 6)),
              (this.words = Array(this.length));
            for (var h = 0; h < this.length; h++) this.words[h] = 0;
            var u,
              l = 0,
              d = 0;
            if ("be" === f)
              for (h = t.length - 1; h >= e; h -= 2)
                (u = A(t, e, h) << l),
                  (this.words[d] |= 67108863 & u),
                  l >= 18
                    ? ((l -= 18), (d += 1), (this.words[d] |= u >>> 26))
                    : (l += 8);
            else
              for (
                h = (t.length - e) % 2 == 0 ? e + 1 : e;
                h < t.length;
                h += 2
              )
                (u = A(t, e, h) << l),
                  (this.words[d] |= 67108863 & u),
                  l >= 18
                    ? ((l -= 18), (d += 1), (this.words[d] |= u >>> 26))
                    : (l += 8);
            this._strip();
          }),
          (o.prototype._parseBase = function (t, e, f) {
            (this.words = [0]), (this.length = 1);
            for (var h = 0, u = 1; u <= 67108863; u *= e) h++;
            h--, (u = (u / e) | 0);
            for (
              var l = t.length - f,
                d = l % h,
                c = Math.min(l, l - d) + f,
                m = 0,
                b = f;
              b < c;
              b += h
            )
              (m = v(t, b, b + h, e)),
                this.imuln(u),
                this.words[0] + m < 67108864
                  ? (this.words[0] += m)
                  : this._iaddn(m);
            if (0 !== d) {
              var M = 1;
              for (m = v(t, b, t.length, e), b = 0; b < d; b++) M *= e;
              this.imuln(M),
                this.words[0] + m < 67108864
                  ? (this.words[0] += m)
                  : this._iaddn(m);
            }
            this._strip();
          }),
          (o.prototype.copy = function (t) {
            t.words = Array(this.length);
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (o.prototype._move = function (t) {
            w(t, this);
          }),
          (o.prototype.clone = function () {
            var t = new o(null);
            return this.copy(t), t;
          }),
          (o.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (o.prototype._strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (o.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          "u" > typeof Symbol && "function" == typeof Symbol.for)
        )
          try {
            o.prototype[Symbol.for("nodejs.util.inspect.custom")] = y;
          } catch {
            o.prototype.inspect = y;
          }
        else o.prototype.inspect = y;
        function y() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var f,
          h = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          u = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          l = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        function U(t, e, f) {
          f.negative = e.negative ^ t.negative;
          var h = (t.length + e.length) | 0;
          (f.length = h), (h = (h - 1) | 0);
          var u = 0 | t.words[0],
            l = 0 | e.words[0],
            d = u * l,
            c = 67108863 & d,
            m = (d / 67108864) | 0;
          f.words[0] = c;
          for (var b = 1; b < h; b++) {
            for (
              var M = m >>> 26,
                E = 67108863 & m,
                S = Math.min(b, e.length - 1),
                B = Math.max(0, b - t.length + 1);
              B <= S;
              B++
            ) {
              var I = (b - B) | 0;
              (M +=
                ((d = (u = 0 | t.words[I]) * (l = 0 | e.words[B]) + E) /
                  67108864) |
                0),
                (E = 67108863 & d);
            }
            (f.words[b] = 0 | E), (m = 0 | M);
          }
          return 0 !== m ? (f.words[b] = 0 | m) : f.length--, f._strip();
        }
        (o.prototype.toString = function (t, e) {
          if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
            f = "";
            for (var f, d = 0, c = 0, m = 0; m < this.length; m++) {
              var b = this.words[m],
                M = (((b << d) | c) & 16777215).toString(16);
              (c = (b >>> (24 - d)) & 16777215),
                (d += 2) >= 26 && ((d -= 26), m--),
                (f =
                  0 !== c || m !== this.length - 1
                    ? h[6 - M.length] + M + f
                    : M + f);
            }
            for (0 !== c && (f = c.toString(16) + f); f.length % e != 0; )
              f = "0" + f;
            return 0 !== this.negative && (f = "-" + f), f;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var E = u[t],
              S = l[t];
            f = "";
            var B = this.clone();
            for (B.negative = 0; !B.isZero(); ) {
              var I = B.modrn(S).toString(t);
              f = (B = B.idivn(S)).isZero() ? I + f : h[E - I.length] + I + f;
            }
            for (this.isZero() && (f = "0" + f); f.length % e != 0; )
              f = "0" + f;
            return 0 !== this.negative && (f = "-" + f), f;
          }
          i(!1, "Base should be between 2 and 36");
        }),
          (o.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  i(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (o.prototype.toJSON = function () {
            return this.toString(16, 2);
          }),
          f &&
            (o.prototype.toBuffer = function (t, e) {
              return this.toArrayLike(f, t, e);
            }),
          (o.prototype.toArray = function (t, e) {
            return this.toArrayLike(Array, t, e);
          }),
          (o.prototype.toArrayLike = function (t, e, f) {
            this._strip();
            var h = this.byteLength(),
              u = f || Math.max(1, h);
            i(h <= u, "byte array longer than desired length"),
              i(u > 0, "Requested array length <= 0");
            var l = t.allocUnsafe ? t.allocUnsafe(u) : new t(u);
            return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](l, h), l;
          }),
          (o.prototype._toArrayLikeLE = function (t, e) {
            for (var f = 0, h = 0, u = 0, l = 0; u < this.length; u++) {
              var d = (this.words[u] << l) | h;
              (t[f++] = 255 & d),
                f < t.length && (t[f++] = (d >> 8) & 255),
                f < t.length && (t[f++] = (d >> 16) & 255),
                6 === l
                  ? (f < t.length && (t[f++] = (d >> 24) & 255),
                    (h = 0),
                    (l = 0))
                  : ((h = d >>> 24), (l += 2));
            }
            if (f < t.length) for (t[f++] = h; f < t.length; ) t[f++] = 0;
          }),
          (o.prototype._toArrayLikeBE = function (t, e) {
            for (
              var f = t.length - 1, h = 0, u = 0, l = 0;
              u < this.length;
              u++
            ) {
              var d = (this.words[u] << l) | h;
              (t[f--] = 255 & d),
                f >= 0 && (t[f--] = (d >> 8) & 255),
                f >= 0 && (t[f--] = (d >> 16) & 255),
                6 === l
                  ? (f >= 0 && (t[f--] = (d >> 24) & 255), (h = 0), (l = 0))
                  : ((h = d >>> 24), (l += 2));
            }
            if (f >= 0) for (t[f--] = h; f >= 0; ) t[f--] = 0;
          }),
          Math.clz32
            ? (o.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (o.prototype._countBits = function (t) {
                var e = t,
                  f = 0;
                return (
                  e >= 4096 && ((f += 13), (e >>>= 13)),
                  e >= 64 && ((f += 7), (e >>>= 7)),
                  e >= 8 && ((f += 4), (e >>>= 4)),
                  e >= 2 && ((f += 2), (e >>>= 2)),
                  f + e
                );
              }),
          (o.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var e = t,
              f = 0;
            return (
              8191 & e || ((f += 13), (e >>>= 13)),
              127 & e || ((f += 7), (e >>>= 7)),
              15 & e || ((f += 4), (e >>>= 4)),
              3 & e || ((f += 2), (e >>>= 2)),
              1 & e || f++,
              f
            );
          }),
          (o.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              e = this._countBits(t);
            return (this.length - 1) * 26 + e;
          }),
          (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, e = 0; e < this.length; e++) {
              var f = this._zeroBits(this.words[e]);
              if (((t += f), 26 !== f)) break;
            }
            return t;
          }),
          (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (o.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (o.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (o.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (o.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (o.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var e = 0; e < t.length; e++)
              this.words[e] = this.words[e] | t.words[e];
            return this._strip();
          }),
          (o.prototype.ior = function (t) {
            return i((this.negative | t.negative) == 0), this.iuor(t);
          }),
          (o.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (o.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (o.prototype.iuand = function (t) {
            var e;
            e = this.length > t.length ? t : this;
            for (var f = 0; f < e.length; f++)
              this.words[f] = this.words[f] & t.words[f];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.iand = function (t) {
            return i((this.negative | t.negative) == 0), this.iuand(t);
          }),
          (o.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (o.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (o.prototype.iuxor = function (t) {
            var e, f;
            this.length > t.length
              ? ((e = this), (f = t))
              : ((e = t), (f = this));
            for (var h = 0; h < f.length; h++)
              this.words[h] = e.words[h] ^ f.words[h];
            if (this !== e)
              for (; h < e.length; h++) this.words[h] = e.words[h];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.ixor = function (t) {
            return i((this.negative | t.negative) == 0), this.iuxor(t);
          }),
          (o.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (o.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (o.prototype.inotn = function (t) {
            i("number" == typeof t && t >= 0);
            var e = 0 | Math.ceil(t / 26),
              f = t % 26;
            this._expand(e), f > 0 && e--;
            for (var h = 0; h < e; h++)
              this.words[h] = 67108863 & ~this.words[h];
            return (
              f > 0 &&
                (this.words[h] = ~this.words[h] & (67108863 >> (26 - f))),
              this._strip()
            );
          }),
          (o.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (o.prototype.setn = function (t, e) {
            i("number" == typeof t && t >= 0);
            var f = (t / 26) | 0,
              h = t % 26;
            return (
              this._expand(f + 1),
              e
                ? (this.words[f] = this.words[f] | (1 << h))
                : (this.words[f] = this.words[f] & ~(1 << h)),
              this._strip()
            );
          }),
          (o.prototype.iadd = function (t) {
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (e = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (e = this.isub(t)),
                (t.negative = 1),
                e._normSign()
              );
            this.length > t.length
              ? ((f = this), (h = t))
              : ((f = t), (h = this));
            for (var e, f, h, u = 0, l = 0; l < h.length; l++)
              (e = (0 | f.words[l]) + (0 | h.words[l]) + u),
                (this.words[l] = 67108863 & e),
                (u = e >>> 26);
            for (; 0 !== u && l < f.length; l++)
              (e = (0 | f.words[l]) + u),
                (this.words[l] = 67108863 & e),
                (u = e >>> 26);
            if (((this.length = f.length), 0 !== u))
              (this.words[this.length] = u), this.length++;
            else if (f !== this)
              for (; l < f.length; l++) this.words[l] = f.words[l];
            return this;
          }),
          (o.prototype.add = function (t) {
            var e;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (o.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var e,
                f,
                h = this.iadd(t);
              return (t.negative = 1), h._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var u = this.cmp(t);
            if (0 === u)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            u > 0 ? ((e = this), (f = t)) : ((e = t), (f = this));
            for (var l = 0, d = 0; d < f.length; d++)
              (l = (h = (0 | e.words[d]) - (0 | f.words[d]) + l) >> 26),
                (this.words[d] = 67108863 & h);
            for (; 0 !== l && d < e.length; d++)
              (l = (h = (0 | e.words[d]) + l) >> 26),
                (this.words[d] = 67108863 & h);
            if (0 === l && d < e.length && e !== this)
              for (; d < e.length; d++) this.words[d] = e.words[d];
            return (
              (this.length = Math.max(this.length, d)),
              e !== this && (this.negative = 1),
              this._strip()
            );
          }),
          (o.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var J = function (t, e, f) {
          var h,
            u,
            l,
            d = t.words,
            c = e.words,
            m = f.words,
            b = 0,
            M = 0 | d[0],
            E = 8191 & M,
            S = M >>> 13,
            B = 0 | d[1],
            I = 8191 & B,
            N = B >>> 13,
            C = 0 | d[2],
            x = 8191 & C,
            _ = C >>> 13,
            R = 0 | d[3],
            D = 8191 & R,
            F = R >>> 13,
            T = 0 | d[4],
            O = 8191 & T,
            P = T >>> 13,
            q = 0 | d[5],
            Q = 8191 & q,
            K = q >>> 13,
            X = 0 | d[6],
            Z = 8191 & X,
            $ = X >>> 13,
            tt = 0 | d[7],
            tr = 8191 & tt,
            ti = tt >>> 13,
            tn = 0 | d[8],
            to = 8191 & tn,
            ts = tn >>> 13,
            tf = 0 | d[9],
            th = 8191 & tf,
            tu = tf >>> 13,
            ta = 0 | c[0],
            tl = 8191 & ta,
            td = ta >>> 13,
            tc = 0 | c[1],
            tp = 8191 & tc,
            tm = tc >>> 13,
            tg = 0 | c[2],
            tA = 8191 & tg,
            tv = tg >>> 13,
            tb = 0 | c[3],
            ty = 8191 & tb,
            tw = tb >>> 13,
            tM = 0 | c[4],
            tE = 8191 & tM,
            tS = tM >>> 13,
            tB = 0 | c[5],
            tI = 8191 & tB,
            tN = tB >>> 13,
            tC = 0 | c[6],
            tx = 8191 & tC,
            t_ = tC >>> 13,
            tR = 0 | c[7],
            tU = 8191 & tR,
            tD = tR >>> 13,
            tk = 0 | c[8],
            tF = 8191 & tk,
            tT = tk >>> 13,
            tz = 0 | c[9],
            tO = 8191 & tz,
            tP = tz >>> 13;
          (f.negative = t.negative ^ e.negative),
            (f.length = 19),
            (h = Math.imul(E, tl)),
            (u = ((u = Math.imul(E, td)) + Math.imul(S, tl)) | 0),
            (l = Math.imul(S, td));
          var tq = (((b + h) | 0) + ((8191 & u) << 13)) | 0;
          (b = (((l + (u >>> 13)) | 0) + (tq >>> 26)) | 0),
            (tq &= 67108863),
            (h = Math.imul(I, tl)),
            (u = ((u = Math.imul(I, td)) + Math.imul(N, tl)) | 0),
            (l = Math.imul(N, td)),
            (h = (h + Math.imul(E, tp)) | 0),
            (u = ((u = (u + Math.imul(E, tm)) | 0) + Math.imul(S, tp)) | 0),
            (l = (l + Math.imul(S, tm)) | 0);
          var tL = (((b + h) | 0) + ((8191 & u) << 13)) | 0;
          (b = (((l + (u >>> 13)) | 0) + (tL >>> 26)) | 0),
            (tL &= 67108863),
            (h = Math.imul(x, tl)),
            (u = ((u = Math.imul(x, td)) + Math.imul(_, tl)) | 0),
            (l = Math.imul(_, td)),
            (h = (h + Math.imul(I, tp)) | 0),
            (u = ((u = (u + Math.imul(I, tm)) | 0) + Math.imul(N, tp)) | 0),
            (l = (l + Math.imul(N, tm)) | 0),
            (h = (h + Math.imul(E, tA)) | 0),
            (u = ((u = (u + Math.imul(E, tv)) | 0) + Math.imul(S, tA)) | 0),
            (l = (l + Math.imul(S, tv)) | 0);
          var tQ = (((b + h) | 0) + ((8191 & u) << 13)) | 0;
          (b = (((l + (u >>> 13)) | 0) + (tQ >>> 26)) | 0),
            (tQ &= 67108863),
            (h = Math.imul(D, tl)),
            (u = ((u = Math.imul(D, td)) + Math.imul(F, tl)) | 0),
            (l = Math.imul(F, td)),
            (h = (h + Math.imul(x, tp)) | 0),
            (u = ((u = (u + Math.imul(x, tm)) | 0) + Math.imul(_, tp)) | 0),
            (l = (l + Math.imul(_, tm)) | 0),
            (h = (h + Math.imul(I, tA)) | 0),
            (u = ((u = (u + Math.imul(I, tv)) | 0) + Math.imul(N, tA)) | 0),
            (l = (l + Math.imul(N, tv)) | 0),
            (h = (h + Math.imul(E, ty)) | 0),
            (u = ((u = (u + Math.imul(E, tw)) | 0) + Math.imul(S, ty)) | 0),
            (l = (l + Math.imul(S, tw)) | 0);
          var tH = (((b + h) | 0) + ((8191 & u) << 13)) | 0;
          (b = (((l + (u >>> 13)) | 0) + (tH >>> 26)) | 0),
            (tH &= 67108863),
            (h = Math.imul(O, tl)),
            (u = ((u = Math.imul(O, td)) + Math.imul(P, tl)) | 0),
            (l = Math.imul(P, td)),
            (h = (h + Math.imul(D, tp)) | 0),
            (u = ((u = (u + Math.imul(D, tm)) | 0) + Math.imul(F, tp)) | 0),
            (l = (l + Math.imul(F, tm)) | 0),
            (h = (h + Math.imul(x, tA)) | 0),
            (u = ((u = (u + Math.imul(x, tv)) | 0) + Math.imul(_, tA)) | 0),
            (l = (l + Math.imul(_, tv)) | 0),
            (h = (h + Math.imul(I, ty)) | 0),
            (u = ((u = (u + Math.imul(I, tw)) | 0) + Math.imul(N, ty)) | 0),
            (l = (l + Math.imul(N, tw)) | 0),
            (h = (h + Math.imul(E, tE)) | 0),
            (u = ((u = (u + Math.imul(E, tS)) | 0) + Math.imul(S, tE)) | 0),
            (l = (l + Math.imul(S, tS)) | 0);
          var tY = (((b + h) | 0) + ((8191 & u) << 13)) | 0;
          (b = (((l + (u >>> 13)) | 0) + (tY >>> 26)) | 0),
            (tY &= 67108863),
            (h = Math.imul(Q, tl)),
            (u = ((u = Math.imul(Q, td)) + Math.imul(K, tl)) | 0),
            (l = Math.imul(K, td)),
            (h = (h + Math.imul(O, tp)) | 0),
            (u = ((u = (u + Math.imul(O, tm)) | 0) + Math.imul(P, tp)) | 0),
            (l = (l + Math.imul(P, tm)) | 0),
            (h = (h + Math.imul(D, tA)) | 0),
            (u = ((u = (u + Math.imul(D, tv)) | 0) + Math.imul(F, tA)) | 0),
            (l = (l + Math.imul(F, tv)) | 0),
            (h = (h + Math.imul(x, ty)) | 0),
            (u = ((u = (u + Math.imul(x, tw)) | 0) + Math.imul(_, ty)) | 0),
            (l = (l + Math.imul(_, tw)) | 0),
            (h = (h + Math.imul(I, tE)) | 0),
            (u = ((u = (u + Math.imul(I, tS)) | 0) + Math.imul(N, tE)) | 0),
            (l = (l + Math.imul(N, tS)) | 0),
            (h = (h + Math.imul(E, tI)) | 0),
            (u = ((u = (u + Math.imul(E, tN)) | 0) + Math.imul(S, tI)) | 0),
            (l = (l + Math.imul(S, tN)) | 0);
          var tJ = (((b + h) | 0) + ((8191 & u) << 13)) | 0;
          (b = (((l + (u >>> 13)) | 0) + (tJ >>> 26)) | 0),
            (tJ &= 67108863),
            (h = Math.imul(Z, tl)),
            (u = ((u = Math.imul(Z, td)) + Math.imul($, tl)) | 0),
            (l = Math.imul($, td)),
            (h = (h + Math.imul(Q, tp)) | 0),
            (u = ((u = (u + Math.imul(Q, tm)) | 0) + Math.imul(K, tp)) | 0),
            (l = (l + Math.imul(K, tm)) | 0),
            (h = (h + Math.imul(O, tA)) | 0),
            (u = ((u = (u + Math.imul(O, tv)) | 0) + Math.imul(P, tA)) | 0),
            (l = (l + Math.imul(P, tv)) | 0),
            (h = (h + Math.imul(D, ty)) | 0),
            (u = ((u = (u + Math.imul(D, tw)) | 0) + Math.imul(F, ty)) | 0),
            (l = (l + Math.imul(F, tw)) | 0),
            (h = (h + Math.imul(x, tE)) | 0),
            (u = ((u = (u + Math.imul(x, tS)) | 0) + Math.imul(_, tE)) | 0),
            (l = (l + Math.imul(_, tS)) | 0),
            (h = (h + Math.imul(I, tI)) | 0),
            (u = ((u = (u + Math.imul(I, tN)) | 0) + Math.imul(N, tI)) | 0),
            (l = (l + Math.imul(N, tN)) | 0),
            (h = (h + Math.imul(E, tx)) | 0),
            (u = ((u = (u + Math.imul(E, t_)) | 0) + Math.imul(S, tx)) | 0),
            (l = (l + Math.imul(S, t_)) | 0);
          var tj = (((b + h) | 0) + ((8191 & u) << 13)) | 0;
          (b = (((l + (u >>> 13)) | 0) + (tj >>> 26)) | 0),
            (tj &= 67108863),
            (h = Math.imul(tr, tl)),
            (u = ((u = Math.imul(tr, td)) + Math.imul(ti, tl)) | 0),
            (l = Math.imul(ti, td)),
            (h = (h + Math.imul(Z, tp)) | 0),
            (u = ((u = (u + Math.imul(Z, tm)) | 0) + Math.imul($, tp)) | 0),
            (l = (l + Math.imul($, tm)) | 0),
            (h = (h + Math.imul(Q, tA)) | 0),
            (u = ((u = (u + Math.imul(Q, tv)) | 0) + Math.imul(K, tA)) | 0),
            (l = (l + Math.imul(K, tv)) | 0),
            (h = (h + Math.imul(O, ty)) | 0),
            (u = ((u = (u + Math.imul(O, tw)) | 0) + Math.imul(P, ty)) | 0),
            (l = (l + Math.imul(P, tw)) | 0),
            (h = (h + Math.imul(D, tE)) | 0),
            (u = ((u = (u + Math.imul(D, tS)) | 0) + Math.imul(F, tE)) | 0),
            (l = (l + Math.imul(F, tS)) | 0),
            (h = (h + Math.imul(x, tI)) | 0),
            (u = ((u = (u + Math.imul(x, tN)) | 0) + Math.imul(_, tI)) | 0),
            (l = (l + Math.imul(_, tN)) | 0),
            (h = (h + Math.imul(I, tx)) | 0),
            (u = ((u = (u + Math.imul(I, t_)) | 0) + Math.imul(N, tx)) | 0),
            (l = (l + Math.imul(N, t_)) | 0),
            (h = (h + Math.imul(E, tU)) | 0),
            (u = ((u = (u + Math.imul(E, tD)) | 0) + Math.imul(S, tU)) | 0),
            (l = (l + Math.imul(S, tD)) | 0);
          var tG = (((b + h) | 0) + ((8191 & u) << 13)) | 0;
          (b = (((l + (u >>> 13)) | 0) + (tG >>> 26)) | 0),
            (tG &= 67108863),
            (h = Math.imul(to, tl)),
            (u = ((u = Math.imul(to, td)) + Math.imul(ts, tl)) | 0),
            (l = Math.imul(ts, td)),
            (h = (h + Math.imul(tr, tp)) | 0),
            (u = ((u = (u + Math.imul(tr, tm)) | 0) + Math.imul(ti, tp)) | 0),
            (l = (l + Math.imul(ti, tm)) | 0),
            (h = (h + Math.imul(Z, tA)) | 0),
            (u = ((u = (u + Math.imul(Z, tv)) | 0) + Math.imul($, tA)) | 0),
            (l = (l + Math.imul($, tv)) | 0),
            (h = (h + Math.imul(Q, ty)) | 0),
            (u = ((u = (u + Math.imul(Q, tw)) | 0) + Math.imul(K, ty)) | 0),
            (l = (l + Math.imul(K, tw)) | 0),
            (h = (h + Math.imul(O, tE)) | 0),
            (u = ((u = (u + Math.imul(O, tS)) | 0) + Math.imul(P, tE)) | 0),
            (l = (l + Math.imul(P, tS)) | 0),
            (h = (h + Math.imul(D, tI)) | 0),
            (u = ((u = (u + Math.imul(D, tN)) | 0) + Math.imul(F, tI)) | 0),
            (l = (l + Math.imul(F, tN)) | 0),
            (h = (h + Math.imul(x, tx)) | 0),
            (u = ((u = (u + Math.imul(x, t_)) | 0) + Math.imul(_, tx)) | 0),
            (l = (l + Math.imul(_, t_)) | 0),
            (h = (h + Math.imul(I, tU)) | 0),
            (u = ((u = (u + Math.imul(I, tD)) | 0) + Math.imul(N, tU)) | 0),
            (l = (l + Math.imul(N, tD)) | 0),
            (h = (h + Math.imul(E, tF)) | 0),
            (u = ((u = (u + Math.imul(E, tT)) | 0) + Math.imul(S, tF)) | 0),
            (l = (l + Math.imul(S, tT)) | 0);
          var tK = (((b + h) | 0) + ((8191 & u) << 13)) | 0;
          (b = (((l + (u >>> 13)) | 0) + (tK >>> 26)) | 0),
            (tK &= 67108863),
            (h = Math.imul(th, tl)),
            (u = ((u = Math.imul(th, td)) + Math.imul(tu, tl)) | 0),
            (l = Math.imul(tu, td)),
            (h = (h + Math.imul(to, tp)) | 0),
            (u = ((u = (u + Math.imul(to, tm)) | 0) + Math.imul(ts, tp)) | 0),
            (l = (l + Math.imul(ts, tm)) | 0),
            (h = (h + Math.imul(tr, tA)) | 0),
            (u = ((u = (u + Math.imul(tr, tv)) | 0) + Math.imul(ti, tA)) | 0),
            (l = (l + Math.imul(ti, tv)) | 0),
            (h = (h + Math.imul(Z, ty)) | 0),
            (u = ((u = (u + Math.imul(Z, tw)) | 0) + Math.imul($, ty)) | 0),
            (l = (l + Math.imul($, tw)) | 0),
            (h = (h + Math.imul(Q, tE)) | 0),
            (u = ((u = (u + Math.imul(Q, tS)) | 0) + Math.imul(K, tE)) | 0),
            (l = (l + Math.imul(K, tS)) | 0),
            (h = (h + Math.imul(O, tI)) | 0),
            (u = ((u = (u + Math.imul(O, tN)) | 0) + Math.imul(P, tI)) | 0),
            (l = (l + Math.imul(P, tN)) | 0),
            (h = (h + Math.imul(D, tx)) | 0),
            (u = ((u = (u + Math.imul(D, t_)) | 0) + Math.imul(F, tx)) | 0),
            (l = (l + Math.imul(F, t_)) | 0),
            (h = (h + Math.imul(x, tU)) | 0),
            (u = ((u = (u + Math.imul(x, tD)) | 0) + Math.imul(_, tU)) | 0),
            (l = (l + Math.imul(_, tD)) | 0),
            (h = (h + Math.imul(I, tF)) | 0),
            (u = ((u = (u + Math.imul(I, tT)) | 0) + Math.imul(N, tF)) | 0),
            (l = (l + Math.imul(N, tT)) | 0),
            (h = (h + Math.imul(E, tO)) | 0),
            (u = ((u = (u + Math.imul(E, tP)) | 0) + Math.imul(S, tO)) | 0),
            (l = (l + Math.imul(S, tP)) | 0);
          var tV = (((b + h) | 0) + ((8191 & u) << 13)) | 0;
          (b = (((l + (u >>> 13)) | 0) + (tV >>> 26)) | 0),
            (tV &= 67108863),
            (h = Math.imul(th, tp)),
            (u = ((u = Math.imul(th, tm)) + Math.imul(tu, tp)) | 0),
            (l = Math.imul(tu, tm)),
            (h = (h + Math.imul(to, tA)) | 0),
            (u = ((u = (u + Math.imul(to, tv)) | 0) + Math.imul(ts, tA)) | 0),
            (l = (l + Math.imul(ts, tv)) | 0),
            (h = (h + Math.imul(tr, ty)) | 0),
            (u = ((u = (u + Math.imul(tr, tw)) | 0) + Math.imul(ti, ty)) | 0),
            (l = (l + Math.imul(ti, tw)) | 0),
            (h = (h + Math.imul(Z, tE)) | 0),
            (u = ((u = (u + Math.imul(Z, tS)) | 0) + Math.imul($, tE)) | 0),
            (l = (l + Math.imul($, tS)) | 0),
            (h = (h + Math.imul(Q, tI)) | 0),
            (u = ((u = (u + Math.imul(Q, tN)) | 0) + Math.imul(K, tI)) | 0),
            (l = (l + Math.imul(K, tN)) | 0),
            (h = (h + Math.imul(O, tx)) | 0),
            (u = ((u = (u + Math.imul(O, t_)) | 0) + Math.imul(P, tx)) | 0),
            (l = (l + Math.imul(P, t_)) | 0),
            (h = (h + Math.imul(D, tU)) | 0),
            (u = ((u = (u + Math.imul(D, tD)) | 0) + Math.imul(F, tU)) | 0),
            (l = (l + Math.imul(F, tD)) | 0),
            (h = (h + Math.imul(x, tF)) | 0),
            (u = ((u = (u + Math.imul(x, tT)) | 0) + Math.imul(_, tF)) | 0),
            (l = (l + Math.imul(_, tT)) | 0),
            (h = (h + Math.imul(I, tO)) | 0),
            (u = ((u = (u + Math.imul(I, tP)) | 0) + Math.imul(N, tO)) | 0),
            (l = (l + Math.imul(N, tP)) | 0);
          var tW = (((b + h) | 0) + ((8191 & u) << 13)) | 0;
          (b = (((l + (u >>> 13)) | 0) + (tW >>> 26)) | 0),
            (tW &= 67108863),
            (h = Math.imul(th, tA)),
            (u = ((u = Math.imul(th, tv)) + Math.imul(tu, tA)) | 0),
            (l = Math.imul(tu, tv)),
            (h = (h + Math.imul(to, ty)) | 0),
            (u = ((u = (u + Math.imul(to, tw)) | 0) + Math.imul(ts, ty)) | 0),
            (l = (l + Math.imul(ts, tw)) | 0),
            (h = (h + Math.imul(tr, tE)) | 0),
            (u = ((u = (u + Math.imul(tr, tS)) | 0) + Math.imul(ti, tE)) | 0),
            (l = (l + Math.imul(ti, tS)) | 0),
            (h = (h + Math.imul(Z, tI)) | 0),
            (u = ((u = (u + Math.imul(Z, tN)) | 0) + Math.imul($, tI)) | 0),
            (l = (l + Math.imul($, tN)) | 0),
            (h = (h + Math.imul(Q, tx)) | 0),
            (u = ((u = (u + Math.imul(Q, t_)) | 0) + Math.imul(K, tx)) | 0),
            (l = (l + Math.imul(K, t_)) | 0),
            (h = (h + Math.imul(O, tU)) | 0),
            (u = ((u = (u + Math.imul(O, tD)) | 0) + Math.imul(P, tU)) | 0),
            (l = (l + Math.imul(P, tD)) | 0),
            (h = (h + Math.imul(D, tF)) | 0),
            (u = ((u = (u + Math.imul(D, tT)) | 0) + Math.imul(F, tF)) | 0),
            (l = (l + Math.imul(F, tT)) | 0),
            (h = (h + Math.imul(x, tO)) | 0),
            (u = ((u = (u + Math.imul(x, tP)) | 0) + Math.imul(_, tO)) | 0),
            (l = (l + Math.imul(_, tP)) | 0);
          var tX = (((b + h) | 0) + ((8191 & u) << 13)) | 0;
          (b = (((l + (u >>> 13)) | 0) + (tX >>> 26)) | 0),
            (tX &= 67108863),
            (h = Math.imul(th, ty)),
            (u = ((u = Math.imul(th, tw)) + Math.imul(tu, ty)) | 0),
            (l = Math.imul(tu, tw)),
            (h = (h + Math.imul(to, tE)) | 0),
            (u = ((u = (u + Math.imul(to, tS)) | 0) + Math.imul(ts, tE)) | 0),
            (l = (l + Math.imul(ts, tS)) | 0),
            (h = (h + Math.imul(tr, tI)) | 0),
            (u = ((u = (u + Math.imul(tr, tN)) | 0) + Math.imul(ti, tI)) | 0),
            (l = (l + Math.imul(ti, tN)) | 0),
            (h = (h + Math.imul(Z, tx)) | 0),
            (u = ((u = (u + Math.imul(Z, t_)) | 0) + Math.imul($, tx)) | 0),
            (l = (l + Math.imul($, t_)) | 0),
            (h = (h + Math.imul(Q, tU)) | 0),
            (u = ((u = (u + Math.imul(Q, tD)) | 0) + Math.imul(K, tU)) | 0),
            (l = (l + Math.imul(K, tD)) | 0),
            (h = (h + Math.imul(O, tF)) | 0),
            (u = ((u = (u + Math.imul(O, tT)) | 0) + Math.imul(P, tF)) | 0),
            (l = (l + Math.imul(P, tT)) | 0),
            (h = (h + Math.imul(D, tO)) | 0),
            (u = ((u = (u + Math.imul(D, tP)) | 0) + Math.imul(F, tO)) | 0),
            (l = (l + Math.imul(F, tP)) | 0);
          var tZ = (((b + h) | 0) + ((8191 & u) << 13)) | 0;
          (b = (((l + (u >>> 13)) | 0) + (tZ >>> 26)) | 0),
            (tZ &= 67108863),
            (h = Math.imul(th, tE)),
            (u = ((u = Math.imul(th, tS)) + Math.imul(tu, tE)) | 0),
            (l = Math.imul(tu, tS)),
            (h = (h + Math.imul(to, tI)) | 0),
            (u = ((u = (u + Math.imul(to, tN)) | 0) + Math.imul(ts, tI)) | 0),
            (l = (l + Math.imul(ts, tN)) | 0),
            (h = (h + Math.imul(tr, tx)) | 0),
            (u = ((u = (u + Math.imul(tr, t_)) | 0) + Math.imul(ti, tx)) | 0),
            (l = (l + Math.imul(ti, t_)) | 0),
            (h = (h + Math.imul(Z, tU)) | 0),
            (u = ((u = (u + Math.imul(Z, tD)) | 0) + Math.imul($, tU)) | 0),
            (l = (l + Math.imul($, tD)) | 0),
            (h = (h + Math.imul(Q, tF)) | 0),
            (u = ((u = (u + Math.imul(Q, tT)) | 0) + Math.imul(K, tF)) | 0),
            (l = (l + Math.imul(K, tT)) | 0),
            (h = (h + Math.imul(O, tO)) | 0),
            (u = ((u = (u + Math.imul(O, tP)) | 0) + Math.imul(P, tO)) | 0),
            (l = (l + Math.imul(P, tP)) | 0);
          var t$ = (((b + h) | 0) + ((8191 & u) << 13)) | 0;
          (b = (((l + (u >>> 13)) | 0) + (t$ >>> 26)) | 0),
            (t$ &= 67108863),
            (h = Math.imul(th, tI)),
            (u = ((u = Math.imul(th, tN)) + Math.imul(tu, tI)) | 0),
            (l = Math.imul(tu, tN)),
            (h = (h + Math.imul(to, tx)) | 0),
            (u = ((u = (u + Math.imul(to, t_)) | 0) + Math.imul(ts, tx)) | 0),
            (l = (l + Math.imul(ts, t_)) | 0),
            (h = (h + Math.imul(tr, tU)) | 0),
            (u = ((u = (u + Math.imul(tr, tD)) | 0) + Math.imul(ti, tU)) | 0),
            (l = (l + Math.imul(ti, tD)) | 0),
            (h = (h + Math.imul(Z, tF)) | 0),
            (u = ((u = (u + Math.imul(Z, tT)) | 0) + Math.imul($, tF)) | 0),
            (l = (l + Math.imul($, tT)) | 0),
            (h = (h + Math.imul(Q, tO)) | 0),
            (u = ((u = (u + Math.imul(Q, tP)) | 0) + Math.imul(K, tO)) | 0),
            (l = (l + Math.imul(K, tP)) | 0);
          var t0 = (((b + h) | 0) + ((8191 & u) << 13)) | 0;
          (b = (((l + (u >>> 13)) | 0) + (t0 >>> 26)) | 0),
            (t0 &= 67108863),
            (h = Math.imul(th, tx)),
            (u = ((u = Math.imul(th, t_)) + Math.imul(tu, tx)) | 0),
            (l = Math.imul(tu, t_)),
            (h = (h + Math.imul(to, tU)) | 0),
            (u = ((u = (u + Math.imul(to, tD)) | 0) + Math.imul(ts, tU)) | 0),
            (l = (l + Math.imul(ts, tD)) | 0),
            (h = (h + Math.imul(tr, tF)) | 0),
            (u = ((u = (u + Math.imul(tr, tT)) | 0) + Math.imul(ti, tF)) | 0),
            (l = (l + Math.imul(ti, tT)) | 0),
            (h = (h + Math.imul(Z, tO)) | 0),
            (u = ((u = (u + Math.imul(Z, tP)) | 0) + Math.imul($, tO)) | 0),
            (l = (l + Math.imul($, tP)) | 0);
          var t1 = (((b + h) | 0) + ((8191 & u) << 13)) | 0;
          (b = (((l + (u >>> 13)) | 0) + (t1 >>> 26)) | 0),
            (t1 &= 67108863),
            (h = Math.imul(th, tU)),
            (u = ((u = Math.imul(th, tD)) + Math.imul(tu, tU)) | 0),
            (l = Math.imul(tu, tD)),
            (h = (h + Math.imul(to, tF)) | 0),
            (u = ((u = (u + Math.imul(to, tT)) | 0) + Math.imul(ts, tF)) | 0),
            (l = (l + Math.imul(ts, tT)) | 0),
            (h = (h + Math.imul(tr, tO)) | 0),
            (u = ((u = (u + Math.imul(tr, tP)) | 0) + Math.imul(ti, tO)) | 0),
            (l = (l + Math.imul(ti, tP)) | 0);
          var t2 = (((b + h) | 0) + ((8191 & u) << 13)) | 0;
          (b = (((l + (u >>> 13)) | 0) + (t2 >>> 26)) | 0),
            (t2 &= 67108863),
            (h = Math.imul(th, tF)),
            (u = ((u = Math.imul(th, tT)) + Math.imul(tu, tF)) | 0),
            (l = Math.imul(tu, tT)),
            (h = (h + Math.imul(to, tO)) | 0),
            (u = ((u = (u + Math.imul(to, tP)) | 0) + Math.imul(ts, tO)) | 0),
            (l = (l + Math.imul(ts, tP)) | 0);
          var t3 = (((b + h) | 0) + ((8191 & u) << 13)) | 0;
          (b = (((l + (u >>> 13)) | 0) + (t3 >>> 26)) | 0),
            (t3 &= 67108863),
            (h = Math.imul(th, tO)),
            (u = ((u = Math.imul(th, tP)) + Math.imul(tu, tO)) | 0),
            (l = Math.imul(tu, tP));
          var t6 = (((b + h) | 0) + ((8191 & u) << 13)) | 0;
          return (
            (b = (((l + (u >>> 13)) | 0) + (t6 >>> 26)) | 0),
            (t6 &= 67108863),
            (m[0] = tq),
            (m[1] = tL),
            (m[2] = tQ),
            (m[3] = tH),
            (m[4] = tY),
            (m[5] = tJ),
            (m[6] = tj),
            (m[7] = tG),
            (m[8] = tK),
            (m[9] = tV),
            (m[10] = tW),
            (m[11] = tX),
            (m[12] = tZ),
            (m[13] = t$),
            (m[14] = t0),
            (m[15] = t1),
            (m[16] = t2),
            (m[17] = t3),
            (m[18] = t6),
            0 !== b && ((m[19] = b), f.length++),
            f
          );
        };
        function Bt(t, e, f) {
          (f.negative = e.negative ^ t.negative),
            (f.length = t.length + e.length);
          for (var h = 0, u = 0, l = 0; l < f.length - 1; l++) {
            var d = u;
            u = 0;
            for (
              var c = 67108863 & h,
                m = Math.min(l, e.length - 1),
                b = Math.max(0, l - t.length + 1);
              b <= m;
              b++
            ) {
              var M = l - b,
                E = (0 | t.words[M]) * (0 | e.words[b]),
                S = 67108863 & E;
              (d = (d + ((E / 67108864) | 0)) | 0),
                (c = 67108863 & (S = (S + c) | 0)),
                (u += (d = (d + (S >>> 26)) | 0) >>> 26),
                (d &= 67108863);
            }
            (f.words[l] = c), (h = d), (d = u);
          }
          return 0 !== h ? (f.words[l] = h) : f.length--, f._strip();
        }
        Math.imul || (J = U),
          (o.prototype.mulTo = function (t, e) {
            var f,
              h = this.length + t.length;
            return 10 === this.length && 10 === t.length
              ? J(this, t, e)
              : h < 63
              ? U(this, t, e)
              : Bt(this, t, e);
          }),
          (o.prototype.mul = function (t) {
            var e = new o(null);
            return (e.words = Array(this.length + t.length)), this.mulTo(t, e);
          }),
          (o.prototype.mulf = function (t) {
            var e = new o(null);
            return (e.words = Array(this.length + t.length)), Bt(this, t, e);
          }),
          (o.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (o.prototype.imuln = function (t) {
            var e = t < 0;
            e && (t = -t), i("number" == typeof t), i(t < 67108864);
            for (var f = 0, h = 0; h < this.length; h++) {
              var u = (0 | this.words[h]) * t,
                l = (67108863 & u) + (67108863 & f);
              (f >>= 26),
                (f += ((u / 67108864) | 0) + (l >>> 26)),
                (this.words[h] = 67108863 & l);
            }
            return (
              0 !== f && ((this.words[h] = f), this.length++),
              e ? this.ineg() : this
            );
          }),
          (o.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (o.prototype.sqr = function () {
            return this.mul(this);
          }),
          (o.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (o.prototype.pow = function (t) {
            var e = (function (t) {
              for (var e = Array(t.bitLength()), f = 0; f < e.length; f++) {
                var h = (f / 26) | 0,
                  u = f % 26;
                e[f] = (t.words[h] >>> u) & 1;
              }
              return e;
            })(t);
            if (0 === e.length) return new o(1);
            for (
              var f = this, h = 0;
              h < e.length && 0 === e[h];
              h++, f = f.sqr()
            );
            if (++h < e.length)
              for (var u = f.sqr(); h < e.length; h++, u = u.sqr())
                0 !== e[h] && (f = f.mul(u));
            return f;
          }),
          (o.prototype.iushln = function (t) {
            i("number" == typeof t && t >= 0);
            var e,
              f = t % 26,
              h = (t - f) / 26,
              u = (67108863 >>> (26 - f)) << (26 - f);
            if (0 !== f) {
              var l = 0;
              for (e = 0; e < this.length; e++) {
                var d = this.words[e] & u,
                  c = ((0 | this.words[e]) - d) << f;
                (this.words[e] = c | l), (l = d >>> (26 - f));
              }
              l && ((this.words[e] = l), this.length++);
            }
            if (0 !== h) {
              for (e = this.length - 1; e >= 0; e--)
                this.words[e + h] = this.words[e];
              for (e = 0; e < h; e++) this.words[e] = 0;
              this.length += h;
            }
            return this._strip();
          }),
          (o.prototype.ishln = function (t) {
            return i(0 === this.negative), this.iushln(t);
          }),
          (o.prototype.iushrn = function (t, e, f) {
            i("number" == typeof t && t >= 0),
              (h = e ? (e - (e % 26)) / 26 : 0);
            var h,
              u = t % 26,
              l = Math.min((t - u) / 26, this.length),
              d = 67108863 ^ ((67108863 >>> u) << u);
            if (((h -= l), (h = Math.max(0, h)), f)) {
              for (var c = 0; c < l; c++) f.words[c] = this.words[c];
              f.length = l;
            }
            if (0 !== l) {
              if (this.length > l)
                for (this.length -= l, c = 0; c < this.length; c++)
                  this.words[c] = this.words[c + l];
              else (this.words[0] = 0), (this.length = 1);
            }
            var m = 0;
            for (c = this.length - 1; c >= 0 && (0 !== m || c >= h); c--) {
              var b = 0 | this.words[c];
              (this.words[c] = (m << (26 - u)) | (b >>> u)), (m = b & d);
            }
            return (
              f && 0 !== m && (f.words[f.length++] = m),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this._strip()
            );
          }),
          (o.prototype.ishrn = function (t, e, f) {
            return i(0 === this.negative), this.iushrn(t, e, f);
          }),
          (o.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (o.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (o.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (o.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (o.prototype.testn = function (t) {
            i("number" == typeof t && t >= 0);
            var e = t % 26,
              f = (t - e) / 26;
            return !(this.length <= f) && !!(this.words[f] & (1 << e));
          }),
          (o.prototype.imaskn = function (t) {
            i("number" == typeof t && t >= 0);
            var e = t % 26,
              f = (t - e) / 26;
            return (i(
              0 === this.negative,
              "imaskn works only with positive numbers"
            ),
            this.length <= f)
              ? this
              : (0 !== e && f++,
                (this.length = Math.min(f, this.length)),
                0 !== e &&
                  (this.words[this.length - 1] &=
                    67108863 ^ ((67108863 >>> e) << e)),
                this._strip());
          }),
          (o.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (o.prototype.iaddn = function (t) {
            return (
              i("number" == typeof t),
              i(t < 67108864),
              t < 0
                ? this.isubn(-t)
                : 0 !== this.negative
                ? (1 === this.length && (0 | this.words[0]) <= t
                    ? ((this.words[0] = t - (0 | this.words[0])),
                      (this.negative = 0))
                    : ((this.negative = 0), this.isubn(t), (this.negative = 1)),
                  this)
                : this._iaddn(t)
            );
          }),
          (o.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864),
                e === this.length - 1
                  ? (this.words[e + 1] = 1)
                  : this.words[e + 1]++;
            return (this.length = Math.max(this.length, e + 1)), this;
          }),
          (o.prototype.isubn = function (t) {
            if ((i("number" == typeof t), i(t < 67108864), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1);
            return this._strip();
          }),
          (o.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (o.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (o.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (o.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (o.prototype._ishlnsubmul = function (t, e, f) {
            var h,
              u = t.length + f;
            this._expand(u);
            var l,
              d = 0;
            for (h = 0; h < t.length; h++) {
              l = (0 | this.words[h + f]) + d;
              var c = (0 | t.words[h]) * e;
              (l -= 67108863 & c),
                (d = (l >> 26) - ((c / 67108864) | 0)),
                (this.words[h + f] = 67108863 & l);
            }
            for (; h < this.length - f; h++)
              (d = (l = (0 | this.words[h + f]) + d) >> 26),
                (this.words[h + f] = 67108863 & l);
            if (0 === d) return this._strip();
            for (i(-1 === d), d = 0, h = 0; h < this.length; h++)
              (d = (l = -(0 | this.words[h]) + d) >> 26),
                (this.words[h] = 67108863 & l);
            return (this.negative = 1), this._strip();
          }),
          (o.prototype._wordDiv = function (t, e) {
            var f = this.length - t.length,
              h = this.clone(),
              u = t,
              l = 0 | u.words[u.length - 1];
            0 != (f = 26 - this._countBits(l)) &&
              ((u = u.ushln(f)), h.iushln(f), (l = 0 | u.words[u.length - 1]));
            var d,
              c = h.length - u.length;
            if ("mod" !== e) {
              ((d = new o(null)).length = c + 1), (d.words = Array(d.length));
              for (var m = 0; m < d.length; m++) d.words[m] = 0;
            }
            var b = h.clone()._ishlnsubmul(u, 1, c);
            0 === b.negative && ((h = b), d && (d.words[c] = 1));
            for (var M = c - 1; M >= 0; M--) {
              var E =
                (0 | h.words[u.length + M]) * 67108864 +
                (0 | h.words[u.length + M - 1]);
              for (
                E = Math.min((E / l) | 0, 67108863), h._ishlnsubmul(u, E, M);
                0 !== h.negative;

              )
                E--,
                  (h.negative = 0),
                  h._ishlnsubmul(u, 1, M),
                  h.isZero() || (h.negative ^= 1);
              d && (d.words[M] = E);
            }
            return (
              d && d._strip(),
              h._strip(),
              "div" !== e && 0 !== f && h.iushrn(f),
              { div: d || null, mod: h }
            );
          }),
          (o.prototype.divmod = function (t, e, f) {
            var h, u, l;
            return (i(!t.isZero()), this.isZero())
              ? { div: new o(0), mod: new o(0) }
              : 0 !== this.negative && 0 === t.negative
              ? ((l = this.neg().divmod(t, e)),
                "mod" !== e && (h = l.div.neg()),
                "div" !== e &&
                  ((u = l.mod.neg()), f && 0 !== u.negative && u.iadd(t)),
                { div: h, mod: u })
              : 0 === this.negative && 0 !== t.negative
              ? ((l = this.divmod(t.neg(), e)),
                "mod" !== e && (h = l.div.neg()),
                { div: h, mod: l.mod })
              : this.negative & t.negative
              ? ((l = this.neg().divmod(t.neg(), e)),
                "div" !== e &&
                  ((u = l.mod.neg()), f && 0 !== u.negative && u.isub(t)),
                { div: l.div, mod: u })
              : t.length > this.length || 0 > this.cmp(t)
              ? { div: new o(0), mod: this }
              : 1 === t.length
              ? "div" === e
                ? { div: this.divn(t.words[0]), mod: null }
                : "mod" === e
                ? { div: null, mod: new o(this.modrn(t.words[0])) }
                : {
                    div: this.divn(t.words[0]),
                    mod: new o(this.modrn(t.words[0])),
                  }
              : this._wordDiv(t, e);
          }),
          (o.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (o.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (o.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (o.prototype.divRound = function (t) {
            var e = this.divmod(t);
            if (e.mod.isZero()) return e.div;
            var f = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              h = t.ushrn(1),
              u = t.andln(1),
              l = f.cmp(h);
            return l < 0 || (1 === u && 0 === l)
              ? e.div
              : 0 !== e.div.negative
              ? e.div.isubn(1)
              : e.div.iaddn(1);
          }),
          (o.prototype.modrn = function (t) {
            var e = t < 0;
            e && (t = -t), i(t <= 67108863);
            for (var f = 67108864 % t, h = 0, u = this.length - 1; u >= 0; u--)
              h = (f * h + (0 | this.words[u])) % t;
            return e ? -h : h;
          }),
          (o.prototype.modn = function (t) {
            return this.modrn(t);
          }),
          (o.prototype.idivn = function (t) {
            var e = t < 0;
            e && (t = -t), i(t <= 67108863);
            for (var f = 0, h = this.length - 1; h >= 0; h--) {
              var u = (0 | this.words[h]) + 67108864 * f;
              (this.words[h] = (u / t) | 0), (f = u % t);
            }
            return this._strip(), e ? this.ineg() : this;
          }),
          (o.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (o.prototype.egcd = function (t) {
            i(0 === t.negative), i(!t.isZero());
            var e = this,
              f = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var h = new o(1), u = new o(0), l = new o(0), d = new o(1), c = 0;
              e.isEven() && f.isEven();

            )
              e.iushrn(1), f.iushrn(1), ++c;
            for (var m = f.clone(), b = e.clone(); !e.isZero(); ) {
              for (var M = 0, E = 1; !(e.words[0] & E) && M < 26; ++M, E <<= 1);
              if (M > 0)
                for (e.iushrn(M); M-- > 0; )
                  (h.isOdd() || u.isOdd()) && (h.iadd(m), u.isub(b)),
                    h.iushrn(1),
                    u.iushrn(1);
              for (var S = 0, B = 1; !(f.words[0] & B) && S < 26; ++S, B <<= 1);
              if (S > 0)
                for (f.iushrn(S); S-- > 0; )
                  (l.isOdd() || d.isOdd()) && (l.iadd(m), d.isub(b)),
                    l.iushrn(1),
                    d.iushrn(1);
              e.cmp(f) >= 0
                ? (e.isub(f), h.isub(l), u.isub(d))
                : (f.isub(e), l.isub(h), d.isub(u));
            }
            return { a: l, b: d, gcd: f.iushln(c) };
          }),
          (o.prototype._invmp = function (t) {
            i(0 === t.negative), i(!t.isZero());
            var e,
              f = this,
              h = t.clone();
            f = 0 !== f.negative ? f.umod(t) : f.clone();
            for (
              var u = new o(1), l = new o(0), d = h.clone();
              f.cmpn(1) > 0 && h.cmpn(1) > 0;

            ) {
              for (var c = 0, m = 1; !(f.words[0] & m) && c < 26; ++c, m <<= 1);
              if (c > 0)
                for (f.iushrn(c); c-- > 0; )
                  u.isOdd() && u.iadd(d), u.iushrn(1);
              for (var b = 0, M = 1; !(h.words[0] & M) && b < 26; ++b, M <<= 1);
              if (b > 0)
                for (h.iushrn(b); b-- > 0; )
                  l.isOdd() && l.iadd(d), l.iushrn(1);
              f.cmp(h) >= 0 ? (f.isub(h), u.isub(l)) : (h.isub(f), l.isub(u));
            }
            return 0 > (e = 0 === f.cmpn(1) ? u : l).cmpn(0) && e.iadd(t), e;
          }),
          (o.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var e = this.clone(),
              f = t.clone();
            (e.negative = 0), (f.negative = 0);
            for (var h = 0; e.isEven() && f.isEven(); h++)
              e.iushrn(1), f.iushrn(1);
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1);
              for (; f.isEven(); ) f.iushrn(1);
              var u = e.cmp(f);
              if (u < 0) {
                var l = e;
                (e = f), (f = l);
              } else if (0 === u || 0 === f.cmpn(1)) break;
              e.isub(f);
            }
            return f.iushln(h);
          }),
          (o.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (o.prototype.isEven = function () {
            return (1 & this.words[0]) == 0;
          }),
          (o.prototype.isOdd = function () {
            return (1 & this.words[0]) == 1;
          }),
          (o.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (o.prototype.bincn = function (t) {
            i("number" == typeof t);
            var e = t % 26,
              f = (t - e) / 26,
              h = 1 << e;
            if (this.length <= f)
              return this._expand(f + 1), (this.words[f] |= h), this;
            for (var u = h, l = f; 0 !== u && l < this.length; l++) {
              var d = 0 | this.words[l];
              (d += u), (u = d >>> 26), (d &= 67108863), (this.words[l] = d);
            }
            return 0 !== u && ((this.words[l] = u), this.length++), this;
          }),
          (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (o.prototype.cmpn = function (t) {
            var e,
              f = t < 0;
            if (0 !== this.negative && !f) return -1;
            if (0 === this.negative && f) return 1;
            if ((this._strip(), this.length > 1)) e = 1;
            else {
              f && (t = -t), i(t <= 67108863, "Number is too big");
              var h = 0 | this.words[0];
              e = h === t ? 0 : h < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var e = this.ucmp(t);
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var e = 0, f = this.length - 1; f >= 0; f--) {
              var h = 0 | this.words[f],
                u = 0 | t.words[f];
              if (h !== u) {
                h < u ? (e = -1) : h > u && (e = 1);
                break;
              }
            }
            return e;
          }),
          (o.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (o.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (o.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (o.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (o.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (o.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (o.prototype.lten = function (t) {
            return 0 >= this.cmpn(t);
          }),
          (o.prototype.lte = function (t) {
            return 0 >= this.cmp(t);
          }),
          (o.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (o.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (o.red = function (t) {
            return new Y(t);
          }),
          (o.prototype.toRed = function (t) {
            return (
              i(!this.red, "Already a number in reduction context"),
              i(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (o.prototype.fromRed = function () {
            return (
              i(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (o.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (o.prototype.forceRed = function (t) {
            return (
              i(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (o.prototype.redAdd = function (t) {
            return (
              i(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (o.prototype.redIAdd = function (t) {
            return (
              i(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (o.prototype.redSub = function (t) {
            return (
              i(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (o.prototype.redISub = function (t) {
            return (
              i(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (o.prototype.redShl = function (t) {
            return (
              i(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (o.prototype.redMul = function (t) {
            return (
              i(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (o.prototype.redIMul = function (t) {
            return (
              i(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (o.prototype.redSqr = function () {
            return (
              i(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (o.prototype.redISqr = function () {
            return (
              i(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (o.prototype.redSqrt = function () {
            return (
              i(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (o.prototype.redInvm = function () {
            return (
              i(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (o.prototype.redNeg = function () {
            return (
              i(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (o.prototype.redPow = function (t) {
            return (
              i(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var d = { k256: null, p224: null, p192: null, p25519: null };
        function L(t, e) {
          (this.name = t),
            (this.p = new o(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function Pt() {
          L.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function W() {
          L.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function Rt() {
          L.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function Vt() {
          L.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function Y(t) {
          if ("string" == typeof t) {
            var e = o._prime(t);
            (this.m = e.p), (this.prime = e);
          } else
            i(t.gtn(1), "modulus must be greater than 1"),
              (this.m = t),
              (this.prime = null);
        }
        function Wt(t) {
          Y.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (L.prototype._tmp = function () {
          var t = new o(null);
          return (t.words = Array(Math.ceil(this.n / 13))), t;
        }),
          (L.prototype.ireduce = function (t) {
            var e,
              f = t;
            do
              this.split(f, this.tmp),
                (e = (f = (f = this.imulK(f)).iadd(this.tmp)).bitLength());
            while (e > this.n);
            var h = e < this.n ? -1 : f.ucmp(this.p);
            return (
              0 === h
                ? ((f.words[0] = 0), (f.length = 1))
                : h > 0
                ? f.isub(this.p)
                : void 0 !== f.strip
                ? f.strip()
                : f._strip(),
              f
            );
          }),
          (L.prototype.split = function (t, e) {
            t.iushrn(this.n, 0, e);
          }),
          (L.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          n(Pt, L),
          (Pt.prototype.split = function (t, e) {
            for (var f = Math.min(t.length, 9), h = 0; h < f; h++)
              e.words[h] = t.words[h];
            if (((e.length = f), t.length <= 9)) {
              (t.words[0] = 0), (t.length = 1);
              return;
            }
            var u = t.words[9];
            for (e.words[e.length++] = 4194303 & u, h = 10; h < t.length; h++) {
              var l = 0 | t.words[h];
              (t.words[h - 10] = ((4194303 & l) << 4) | (u >>> 22)), (u = l);
            }
            (u >>>= 22),
              (t.words[h - 10] = u),
              0 === u && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (Pt.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var e = 0, f = 0; f < t.length; f++) {
              var h = 0 | t.words[f];
              (e += 977 * h),
                (t.words[f] = 67108863 & e),
                (e = 64 * h + ((e / 67108864) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          n(W, L),
          n(Rt, L),
          n(Vt, L),
          (Vt.prototype.imulK = function (t) {
            for (var e = 0, f = 0; f < t.length; f++) {
              var h = (0 | t.words[f]) * 19 + e,
                u = 67108863 & h;
              (h >>>= 26), (t.words[f] = u), (e = h);
            }
            return 0 !== e && (t.words[t.length++] = e), t;
          }),
          (o._prime = function (t) {
            var e;
            if (d[t]) return d[t];
            if ("k256" === t) e = new Pt();
            else if ("p224" === t) e = new W();
            else if ("p192" === t) e = new Rt();
            else if ("p25519" === t) e = new Vt();
            else throw Error("Unknown prime " + t);
            return (d[t] = e), e;
          }),
          (Y.prototype._verify1 = function (t) {
            i(0 === t.negative, "red works only with positives"),
              i(t.red, "red works only with red numbers");
          }),
          (Y.prototype._verify2 = function (t, e) {
            i((t.negative | e.negative) == 0, "red works only with positives"),
              i(t.red && t.red === e.red, "red works only with red numbers");
          }),
          (Y.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : (w(t, t.umod(this.m)._forceRed(this)), t);
          }),
          (Y.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (Y.prototype.add = function (t, e) {
            this._verify2(t, e);
            var f = t.add(e);
            return f.cmp(this.m) >= 0 && f.isub(this.m), f._forceRed(this);
          }),
          (Y.prototype.iadd = function (t, e) {
            this._verify2(t, e);
            var f = t.iadd(e);
            return f.cmp(this.m) >= 0 && f.isub(this.m), f;
          }),
          (Y.prototype.sub = function (t, e) {
            this._verify2(t, e);
            var f = t.sub(e);
            return 0 > f.cmpn(0) && f.iadd(this.m), f._forceRed(this);
          }),
          (Y.prototype.isub = function (t, e) {
            this._verify2(t, e);
            var f = t.isub(e);
            return 0 > f.cmpn(0) && f.iadd(this.m), f;
          }),
          (Y.prototype.shl = function (t, e) {
            return this._verify1(t), this.imod(t.ushln(e));
          }),
          (Y.prototype.imul = function (t, e) {
            return this._verify2(t, e), this.imod(t.imul(e));
          }),
          (Y.prototype.mul = function (t, e) {
            return this._verify2(t, e), this.imod(t.mul(e));
          }),
          (Y.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (Y.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (Y.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var e = this.m.andln(3);
            if ((i(e % 2 == 1), 3 === e)) {
              var f = this.m.add(new o(1)).iushrn(2);
              return this.pow(t, f);
            }
            for (
              var h = this.m.subn(1), u = 0;
              !h.isZero() && 0 === h.andln(1);

            )
              u++, h.iushrn(1);
            i(!h.isZero());
            var l = new o(1).toRed(this),
              d = l.redNeg(),
              c = this.m.subn(1).iushrn(1),
              m = this.m.bitLength();
            for (
              m = new o(2 * m * m).toRed(this);
              0 !== this.pow(m, c).cmp(d);

            )
              m.redIAdd(d);
            for (
              var b = this.pow(m, h),
                M = this.pow(t, h.addn(1).iushrn(1)),
                E = this.pow(t, h),
                S = u;
              0 !== E.cmp(l);

            ) {
              for (var B = E, I = 0; 0 !== B.cmp(l); I++) B = B.redSqr();
              i(I < S);
              var N = this.pow(b, new o(1).iushln(S - I - 1));
              (M = M.redMul(N)), (b = N.redSqr()), (E = E.redMul(b)), (S = I);
            }
            return M;
          }),
          (Y.prototype.invm = function (t) {
            var e = t._invmp(this.m);
            return 0 !== e.negative
              ? ((e.negative = 0), this.imod(e).redNeg())
              : this.imod(e);
          }),
          (Y.prototype.pow = function (t, e) {
            if (e.isZero()) return new o(1).toRed(this);
            if (0 === e.cmpn(1)) return t.clone();
            var f = Array(16);
            (f[0] = new o(1).toRed(this)), (f[1] = t);
            for (var h = 2; h < f.length; h++) f[h] = this.mul(f[h - 1], t);
            var u = f[0],
              l = 0,
              d = 0,
              c = e.bitLength() % 26;
            for (0 === c && (c = 26), h = e.length - 1; h >= 0; h--) {
              for (var m = e.words[h], b = c - 1; b >= 0; b--) {
                var M = (m >> b) & 1;
                if ((u !== f[0] && (u = this.sqr(u)), 0 === M && 0 === l)) {
                  d = 0;
                  continue;
                }
                (l <<= 1),
                  (l |= M),
                  (4 != ++d && (0 !== h || 0 !== b)) ||
                    ((u = this.mul(u, f[l])), (d = 0), (l = 0));
              }
              c = 26;
            }
            return u;
          }),
          (Y.prototype.convertTo = function (t) {
            var e = t.umod(this.m);
            return e === t ? e.clone() : e;
          }),
          (Y.prototype.convertFrom = function (t) {
            var e = t.clone();
            return (e.red = null), e;
          }),
          (o.mont = function (t) {
            return new Wt(t);
          }),
          n(Wt, Y),
          (Wt.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (Wt.prototype.convertFrom = function (t) {
            var e = this.imod(t.mul(this.rinv));
            return (e.red = null), e;
          }),
          (Wt.prototype.imul = function (t, e) {
            if (t.isZero() || e.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var f = t.imul(e),
              h = f
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              u = f.isub(h).iushrn(this.shift),
              l = u;
            return (
              u.cmp(this.m) >= 0
                ? (l = u.isub(this.m))
                : 0 > u.cmpn(0) && (l = u.iadd(this.m)),
              l._forceRed(this)
            );
          }),
          (Wt.prototype.mul = function (t, e) {
            if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
            var f = t.mul(e),
              h = f
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              u = f.isub(h).iushrn(this.shift),
              l = u;
            return (
              u.cmp(this.m) >= 0
                ? (l = u.isub(this.m))
                : 0 > u.cmpn(0) && (l = u.iadd(this.m)),
              l._forceRed(this)
            );
          }),
          (Wt.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })(X, x);
      var $ = X.exports;
      let tt = "bignumber/5.7.0";
      var tr = $.BN;
      let ti = new z(tt),
        tn = {},
        to = !1;
      let V = class V {
        constructor(t, e) {
          t !== tn &&
            ti.throwError(
              "cannot call constructor directly; use BigNumber.from",
              z.errors.UNSUPPORTED_OPERATION,
              { operation: "new (BigNumber)" }
            ),
            (this._hex = e),
            (this._isBigNumber = !0),
            Object.freeze(this);
        }
        fromTwos(t) {
          return zt(j(this).fromTwos(t));
        }
        toTwos(t) {
          return zt(j(this).toTwos(t));
        }
        abs() {
          return "-" === this._hex[0] ? V.from(this._hex.substring(1)) : this;
        }
        add(t) {
          return zt(j(this).add(j(t)));
        }
        sub(t) {
          return zt(j(this).sub(j(t)));
        }
        div(t) {
          return (
            V.from(t).isZero() && $t("division-by-zero", "div"),
            zt(j(this).div(j(t)))
          );
        }
        mul(t) {
          return zt(j(this).mul(j(t)));
        }
        mod(t) {
          let e = j(t);
          return (
            e.isNeg() && $t("division-by-zero", "mod"), zt(j(this).umod(e))
          );
        }
        pow(t) {
          let e = j(t);
          return e.isNeg() && $t("negative-power", "pow"), zt(j(this).pow(e));
        }
        and(t) {
          let e = j(t);
          return (
            (this.isNegative() || e.isNeg()) &&
              $t("unbound-bitwise-result", "and"),
            zt(j(this).and(e))
          );
        }
        or(t) {
          let e = j(t);
          return (
            (this.isNegative() || e.isNeg()) &&
              $t("unbound-bitwise-result", "or"),
            zt(j(this).or(e))
          );
        }
        xor(t) {
          let e = j(t);
          return (
            (this.isNegative() || e.isNeg()) &&
              $t("unbound-bitwise-result", "xor"),
            zt(j(this).xor(e))
          );
        }
        mask(t) {
          return (
            (this.isNegative() || t < 0) && $t("negative-width", "mask"),
            zt(j(this).maskn(t))
          );
        }
        shl(t) {
          return (
            (this.isNegative() || t < 0) && $t("negative-width", "shl"),
            zt(j(this).shln(t))
          );
        }
        shr(t) {
          return (
            (this.isNegative() || t < 0) && $t("negative-width", "shr"),
            zt(j(this).shrn(t))
          );
        }
        eq(t) {
          return j(this).eq(j(t));
        }
        lt(t) {
          return j(this).lt(j(t));
        }
        lte(t) {
          return j(this).lte(j(t));
        }
        gt(t) {
          return j(this).gt(j(t));
        }
        gte(t) {
          return j(this).gte(j(t));
        }
        isNegative() {
          return "-" === this._hex[0];
        }
        isZero() {
          return j(this).isZero();
        }
        toNumber() {
          try {
            return j(this).toNumber();
          } catch {
            $t("overflow", "toNumber", this.toString());
          }
          return null;
        }
        toBigInt() {
          try {
            return BigInt(this.toString());
          } catch {}
          return ti.throwError(
            "this platform does not support BigInt",
            z.errors.UNSUPPORTED_OPERATION,
            { value: this.toString() }
          );
        }
        toString() {
          return (
            arguments.length > 0 &&
              (10 === arguments[0]
                ? to ||
                  ((to = !0),
                  ti.warn(
                    "BigNumber.toString does not accept any parameters; base-10 is assumed"
                  ))
                : 16 === arguments[0]
                ? ti.throwError(
                    "BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",
                    z.errors.UNEXPECTED_ARGUMENT,
                    {}
                  )
                : ti.throwError(
                    "BigNumber.toString does not accept parameters",
                    z.errors.UNEXPECTED_ARGUMENT,
                    {}
                  )),
            j(this).toString(10)
          );
        }
        toHexString() {
          return this._hex;
        }
        toJSON(t) {
          return { type: "BigNumber", hex: this.toHexString() };
        }
        static from(t) {
          if (t instanceof V) return t;
          if ("string" == typeof t)
            return t.match(/^-?0x[0-9a-f]+$/i)
              ? new V(tn, mr(t))
              : t.match(/^-?[0-9]+$/)
              ? new V(tn, mr(new tr(t)))
              : ti.throwArgumentError("invalid BigNumber string", "value", t);
          if ("number" == typeof t)
            return (
              t % 1 && $t("underflow", "BigNumber.from", t),
              (t >= 9007199254740991 || t <= -9007199254740991) &&
                $t("overflow", "BigNumber.from", t),
              V.from(String(t))
            );
          if ("bigint" == typeof t) return V.from(t.toString());
          if (nr(t)) return V.from(Kt(t));
          if (t) {
            if (t.toHexString) {
              let e = t.toHexString();
              if ("string" == typeof e) return V.from(e);
            } else {
              let e = t._hex;
              if (
                (null == e && "BigNumber" === t.type && (e = t.hex),
                "string" == typeof e &&
                  (Jt(e) || ("-" === e[0] && Jt(e.substring(1)))))
              )
                return V.from(e);
            }
          }
          return ti.throwArgumentError("invalid BigNumber value", "value", t);
        }
        static isBigNumber(t) {
          return !!(t && t._isBigNumber);
        }
      };
      function mr(t) {
        if ("string" != typeof t) return mr(t.toString(16));
        if ("-" === t[0])
          return (
            "-" === (t = t.substring(1))[0] &&
              ti.throwArgumentError("invalid hex", "value", t),
            "0x00" === (t = mr(t)) ? t : "-" + t
          );
        if (("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t))
          return "0x00";
        for (
          t.length % 2 && (t = "0x0" + t.substring(2));
          t.length > 4 && "0x00" === t.substring(0, 4);

        )
          t = "0x" + t.substring(4);
        return t;
      }
      function zt(t) {
        return V.from(mr(t));
      }
      function j(t) {
        let e = V.from(t).toHexString();
        return "-" === e[0]
          ? new tr("-" + e.substring(3), 16)
          : new tr(e.substring(2), 16);
      }
      function $t(t, e, f) {
        let h = { fault: t, operation: e };
        return (
          null != f && (h.value = f),
          ti.throwError(t, z.errors.NUMERIC_FAULT, h)
        );
      }
      let ts = new z(tt),
        tf = {},
        th = V.from(0),
        tu = V.from(-1);
      function nf(t, e, f, h) {
        let u = { fault: e, operation: f };
        return (
          void 0 !== h && (u.value = h),
          ts.throwError(t, z.errors.NUMERIC_FAULT, u)
        );
      }
      let ta = "0";
      for (; ta.length < 256; ) ta += ta;
      function _i(t) {
        if ("number" != typeof t)
          try {
            t = V.from(t).toNumber();
          } catch {}
        return "number" == typeof t && t >= 0 && t <= 256 && !(t % 1)
          ? "1" + ta.substring(0, t)
          : ts.throwArgumentError("invalid decimal size", "decimals", t);
      }
      function Bi(t, e) {
        null == e && (e = 0);
        let f = _i(e);
        t = V.from(t);
        let h = t.lt(th);
        h && (t = t.mul(tu));
        let u = t.mod(f).toString();
        for (; u.length < f.length - 1; ) u = "0" + u;
        u = u.match(/^([0-9]*[1-9]|0)(0*)/)[1];
        let l = t.div(f).toString();
        return (t = 1 === f.length ? l : l + "." + u), h && (t = "-" + t), t;
      }
      function be(t, e) {
        null == e && (e = 0);
        let f = _i(e);
        ("string" == typeof t && t.match(/^-?[0-9.]+$/)) ||
          ts.throwArgumentError("invalid decimal value", "value", t);
        let h = "-" === t.substring(0, 1);
        h && (t = t.substring(1)),
          "." === t && ts.throwArgumentError("missing value", "value", t);
        let u = t.split(".");
        u.length > 2 &&
          ts.throwArgumentError("too many decimal points", "value", t);
        let l = u[0],
          d = u[1];
        for (l || (l = "0"), d || (d = "0"); "0" === d[d.length - 1]; )
          d = d.substring(0, d.length - 1);
        for (
          d.length > f.length - 1 &&
            nf(
              "fractional component exceeds decimals",
              "underflow",
              "parseFixed"
            ),
            "" === d && (d = "0");
          d.length < f.length - 1;

        )
          d += "0";
        let c = V.from(l),
          m = V.from(d),
          b = c.mul(f).add(m);
        return h && (b = b.mul(tu)), b;
      }
      let vr = class vr {
        constructor(t, e, f, h) {
          t !== tf &&
            ts.throwError(
              "cannot use FixedFormat constructor; use FixedFormat.from",
              z.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" }
            ),
            (this.signed = e),
            (this.width = f),
            (this.decimals = h),
            (this.name =
              (e ? "" : "u") + "fixed" + String(f) + "x" + String(h)),
            (this._multiplier = _i(h)),
            Object.freeze(this);
        }
        static from(t) {
          if (t instanceof vr) return t;
          "number" == typeof t && (t = `fixed128x${t}`);
          let e = !0,
            f = 128,
            h = 18;
          if ("string" == typeof t) {
            if ("fixed" !== t) {
              if ("ufixed" === t) e = !1;
              else {
                let u = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                u || ts.throwArgumentError("invalid fixed format", "format", t),
                  (e = "u" !== u[1]),
                  (f = parseInt(u[2])),
                  (h = parseInt(u[3]));
              }
            }
          } else if (t) {
            let o = (e, f, h) =>
              null == t[e]
                ? h
                : (typeof t[e] !== f &&
                    ts.throwArgumentError(
                      "invalid fixed format (" + e + " not " + f + ")",
                      "format." + e,
                      t[e]
                    ),
                  t[e]);
            (e = o("signed", "boolean", e)),
              (f = o("width", "number", f)),
              (h = o("decimals", "number", h));
          }
          return (
            f % 8 &&
              ts.throwArgumentError(
                "invalid fixed format width (not byte aligned)",
                "format.width",
                f
              ),
            h > 80 &&
              ts.throwArgumentError(
                "invalid fixed format (decimals too large)",
                "format.decimals",
                h
              ),
            new vr(tf, e, f, h)
          );
        }
      };
      let Ut = class Ut {
        constructor(t, e, f, h) {
          t !== tf &&
            ts.throwError(
              "cannot use FixedNumber constructor; use FixedNumber.from",
              z.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" }
            ),
            (this.format = h),
            (this._hex = e),
            (this._value = f),
            (this._isFixedNumber = !0),
            Object.freeze(this);
        }
        _checkFormat(t) {
          this.format.name !== t.format.name &&
            ts.throwArgumentError(
              "incompatible format; use fixedNumber.toFormat",
              "other",
              t
            );
        }
        addUnsafe(t) {
          this._checkFormat(t);
          let e = be(this._value, this.format.decimals),
            f = be(t._value, t.format.decimals);
          return Ut.fromValue(e.add(f), this.format.decimals, this.format);
        }
        subUnsafe(t) {
          this._checkFormat(t);
          let e = be(this._value, this.format.decimals),
            f = be(t._value, t.format.decimals);
          return Ut.fromValue(e.sub(f), this.format.decimals, this.format);
        }
        mulUnsafe(t) {
          this._checkFormat(t);
          let e = be(this._value, this.format.decimals),
            f = be(t._value, t.format.decimals);
          return Ut.fromValue(
            e.mul(f).div(this.format._multiplier),
            this.format.decimals,
            this.format
          );
        }
        divUnsafe(t) {
          this._checkFormat(t);
          let e = be(this._value, this.format.decimals),
            f = be(t._value, t.format.decimals);
          return Ut.fromValue(
            e.mul(this.format._multiplier).div(f),
            this.format.decimals,
            this.format
          );
        }
        floor() {
          let t = this.toString().split(".");
          1 === t.length && t.push("0");
          let e = Ut.from(t[0], this.format),
            f = !t[1].match(/^(0*)$/);
          return (
            this.isNegative() && f && (e = e.subUnsafe(tl.toFormat(e.format))),
            e
          );
        }
        ceiling() {
          let t = this.toString().split(".");
          1 === t.length && t.push("0");
          let e = Ut.from(t[0], this.format),
            f = !t[1].match(/^(0*)$/);
          return (
            !this.isNegative() && f && (e = e.addUnsafe(tl.toFormat(e.format))),
            e
          );
        }
        round(t) {
          null == t && (t = 0);
          let e = this.toString().split(".");
          if (
            (1 === e.length && e.push("0"),
            (t < 0 || t > 80 || t % 1) &&
              ts.throwArgumentError("invalid decimal count", "decimals", t),
            e[1].length <= t)
          )
            return this;
          let f = Ut.from("1" + ta.substring(0, t), this.format),
            h = td.toFormat(this.format);
          return this.mulUnsafe(f).addUnsafe(h).floor().divUnsafe(f);
        }
        isZero() {
          return "0.0" === this._value || "0" === this._value;
        }
        isNegative() {
          return "-" === this._value[0];
        }
        toString() {
          return this._value;
        }
        toHexString(t) {
          if (null == t) return this._hex;
          t % 8 && ts.throwArgumentError("invalid byte width", "width", t);
          let e = V.from(this._hex)
            .fromTwos(this.format.width)
            .toTwos(t)
            .toHexString();
          return oe(e, t / 8);
        }
        toUnsafeFloat() {
          return parseFloat(this.toString());
        }
        toFormat(t) {
          return Ut.fromString(this._value, t);
        }
        static fromValue(t, e, f) {
          var h;
          return (
            null != f ||
              null == e ||
              (null != (h = e) &&
                (V.isBigNumber(h) ||
                  ("number" == typeof h && h % 1 == 0) ||
                  ("string" == typeof h && h.match(/^-?[0-9]+$/)) ||
                  Jt(h) ||
                  "bigint" == typeof h ||
                  nr(h))) ||
              ((f = e), (e = null)),
            null == e && (e = 0),
            null == f && (f = "fixed"),
            Ut.fromString(Bi(t, e), vr.from(f))
          );
        }
        static fromString(t, e) {
          null == e && (e = "fixed");
          let f = vr.from(e),
            h = be(t, f.decimals);
          !f.signed &&
            h.lt(th) &&
            nf("unsigned value cannot be negative", "overflow", "value", t);
          let u = null;
          u = f.signed
            ? h.toTwos(f.width).toHexString()
            : oe((u = h.toHexString()), f.width / 8);
          let l = Bi(h, f.decimals);
          return new Ut(tf, u, l, f);
        }
        static fromBytes(t, e) {
          null == e && (e = "fixed");
          let f = vr.from(e);
          if (Ot(t).length > f.width / 8) throw Error("overflow");
          let h = V.from(t);
          f.signed && (h = h.fromTwos(f.width));
          let u = h.toTwos((f.signed ? 0 : 1) + f.width).toHexString(),
            l = Bi(h, f.decimals);
          return new Ut(tf, u, l, f);
        }
        static from(t, e) {
          if ("string" == typeof t) return Ut.fromString(t, e);
          if (nr(t)) return Ut.fromBytes(t, e);
          try {
            return Ut.fromValue(t, 0, e);
          } catch (t) {
            if (t.code !== z.errors.INVALID_ARGUMENT) throw t;
          }
          return ts.throwArgumentError("invalid FixedNumber value", "value", t);
        }
        static isFixedNumber(t) {
          return !!(t && t._isFixedNumber);
        }
      };
      let tl = Ut.from(1),
        td = Ut.from("0.5"),
        tc = new z("strings/5.7.0");
      function sf(t, e, f, h, u) {
        if (t === b.BAD_PREFIX || t === b.UNEXPECTED_CONTINUE) {
          let t = 0;
          for (let h = e + 1; h < f.length && f[h] >> 6 == 2; h++) t++;
          return t;
        }
        return t === b.OVERRUN ? f.length - e - 1 : 0;
      }
      function Ri(t, e) {
        e ||
          (e = function (t) {
            return [parseInt(t, 16)];
          });
        let f = 0,
          h = {};
        return (
          t.split(",").forEach((t) => {
            let u = t.split(":");
            h[(f += parseInt(u[0], 16))] = e(u[1]);
          }),
          h
        );
      }
      function af(t) {
        let e = 0;
        return t.split(",").map((t) => {
          let f = t.split("-");
          return (
            1 === f.length ? (f[1] = "0") : "" === f[1] && (f[1] = "1"),
            { l: e + parseInt(f[0], 16), h: (e = parseInt(f[1], 16)) }
          );
        });
      }
      ((B = m || (m = {})).current = ""),
        (B.NFC = "NFC"),
        (B.NFD = "NFD"),
        (B.NFKC = "NFKC"),
        (B.NFKD = "NFKD"),
        ((I = b || (b = {})).UNEXPECTED_CONTINUE =
          "unexpected continuation byte"),
        (I.BAD_PREFIX = "bad codepoint prefix"),
        (I.OVERRUN = "string overrun"),
        (I.MISSING_CONTINUE = "missing continuation byte"),
        (I.OUT_OF_RANGE = "out of UTF-8 range"),
        (I.UTF16_SURROGATE = "UTF-16 surrogate"),
        (I.OVERLONG = "overlong representation"),
        Object.freeze({
          error: function (t, e, f, h, u) {
            return tc.throwArgumentError(
              `invalid codepoint at offset ${e}; ${t}`,
              "bytes",
              f
            );
          },
          ignore: sf,
          replace: function (t, e, f, h, u) {
            return t === b.OVERLONG
              ? (h.push(u), 0)
              : (h.push(65533), sf(t, e, f));
          },
        }),
        af(
          "221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"
        ),
        "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff"
          .split(",")
          .map((t) => parseInt(t, 16)),
        Ri(
          "b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"
        ),
        Ri(
          "179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"
        ),
        Ri(
          "df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",
          function (t) {
            if (t.length % 4 != 0) throw Error("bad data");
            let e = [];
            for (let f = 0; f < t.length; f += 4)
              e.push(parseInt(t.substring(f, f + 4), 16));
            return e;
          }
        ),
        af(
          "80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001"
        );
      let tp = "hash/5.7.0";
      function hf(t, e) {
        null == e && (e = 1);
        let f = [],
          h = f.forEach,
          n = function (t, e) {
            h.call(t, function (t) {
              e > 0 && Array.isArray(t) ? n(t, e - 1) : f.push(t);
            });
          };
        return n(t, e), f;
      }
      function cf(t, e) {
        let f = Array(t);
        for (let h = 0, u = -1; h < t; h++) f[h] = u += 1 + e();
        return f;
      }
      function Ur(t, e) {
        let f = cf(t(), t),
          h = t(),
          u = cf(h, t),
          l = (function (t, e) {
            let f = Array(t);
            for (let h = 0; h < t; h++) f[h] = 1 + e();
            return f;
          })(h, t);
        for (let t = 0; t < h; t++)
          for (let e = 0; e < l[t]; e++) f.push(u[t] + e);
        return e ? f.map((t) => e[t]) : f;
      }
      function lf(t, e, f) {
        let h = Array(t)
          .fill(void 0)
          .map(() => []);
        for (let u = 0; u < e; u++)
          (function (t, e) {
            let f = Array(t);
            for (let u = 0, l = 0; u < t; u++) {
              var h;
              f[u] = l += 1 & (h = e()) ? ~h >> 1 : h >> 1;
            }
            return f;
          })(t, f).forEach((t, e) => h[e].push(t));
        return h;
      }
      let tm =
        ((l = (function (t) {
          let e = 0;
          function r() {
            return (t[e++] << 8) | t[e++];
          }
          let f = r(),
            h = 1,
            u = [0, 1];
          for (let t = 1; t < f; t++) u.push((h += r()));
          let l = r(),
            d = e;
          e += l;
          let c = 0,
            m = 0;
          function w() {
            return 0 == c && ((m = (m << 8) | t[e++]), (c = 8)), (m >> --c) & 1;
          }
          let b = 0;
          for (let t = 0; t < 31; t++) b = (b << 1) | w();
          let M = [],
            E = 0,
            S = 2147483648;
          for (;;) {
            let t = Math.floor(((b - E + 1) * h - 1) / S),
              e = 0,
              l = f;
            for (; l - e > 1; ) {
              let f = (e + l) >>> 1;
              t < u[f] ? (l = f) : (e = f);
            }
            if (0 == e) break;
            M.push(e);
            let d = E + Math.floor((S * u[e]) / h),
              c = E + Math.floor((S * u[e + 1]) / h) - 1;
            for (; !((d ^ c) & 1073741824); )
              (b = ((b << 1) & 2147483647) | w()),
                (d = (d << 1) & 2147483647),
                (c = ((c << 1) & 2147483647) | 1);
            for (; d & ~c & 536870912; )
              (b = (1073741824 & b) | ((b << 1) & 1073741823) | w()),
                (d = (d << 1) ^ 1073741824),
                (c = ((1073741824 ^ c) << 1) | 1073741824 | 1);
            (E = d), (S = 1 + c - d);
          }
          let B = f - 4;
          return M.map((e) => {
            switch (e - B) {
              case 3:
                return B + 65792 + ((t[d++] << 16) | (t[d++] << 8) | t[d++]);
              case 2:
                return B + 256 + ((t[d++] << 8) | t[d++]);
              case 1:
                return B + t[d++];
              default:
                return e - 1;
            }
          });
        })(
          (function (t) {
            t = atob(t);
            let e = [];
            for (let f = 0; f < t.length; f++) e.push(t.charCodeAt(f));
            return Ot(e);
          })(
            "AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="
          )
        )),
        (u = 0),
        () => l[u++]);
      Ur(tm),
        Ur(tm),
        (function (t) {
          let e = [];
          for (;;) {
            let f = t();
            if (0 == f) break;
            e.push(
              (function (t, e) {
                let f = 1 + e(),
                  h = e(),
                  u = (function (t) {
                    let e = [];
                    for (;;) {
                      let f = t();
                      if (0 == f) break;
                      e.push(f);
                    }
                    return e;
                  })(e);
                return hf(
                  lf(u.length, 1 + t, e).map((t, e) => {
                    let l = t[0],
                      d = t.slice(1);
                    return Array(u[e])
                      .fill(void 0)
                      .map((t, e) => {
                        let u = e * h;
                        return [l + e * f, d.map((t) => t + u)];
                      });
                  })
                );
              })(f, t)
            );
          }
          for (;;) {
            let f = t() - 1;
            if (f < 0) break;
            e.push(lf(1 + t(), 1 + f, t).map((t) => [t[0], t.slice(1)]));
          }
          (function (t) {
            let e = {};
            for (let f = 0; f < t.length; f++) {
              let h = t[f];
              e[h[0]] = h[1];
            }
          })(hf(e));
        })(tm),
        (h = Ur(tm).sort((t, e) => t - e)),
        (function r() {
          let t = [];
          for (;;) {
            let e = Ur(tm, h);
            if (0 == e.length) break;
            t.push({ set: new Set(e), node: r() });
          }
          t.sort((t, e) => e.set.size - t.set.size);
          let e = tm();
          return {
            branches: t,
            valid: e % 3,
            fe0f: !!(1 & (e = (e / 3) | 0)),
            save: 1 == (e >>= 1),
            check: 2 == e,
          };
        })(),
        new z(tp);
      let tg = new Uint8Array(32);
      tg.fill(0), new z("rlp/5.7.0"), new z("address/5.7.0");
      let tA = {};
      for (let t = 0; t < 10; t++) tA[String(t)] = String(t);
      for (let t = 0; t < 26; t++)
        tA[String.fromCharCode(65 + t)] = String(10 + t);
      new z("properties/5.7.0"), new z(tp);
      let tv = new Uint8Array(32);
      tv.fill(0), V.from(-1);
      let tb = V.from(0),
        ty = V.from(1);
      V.from(
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      ),
        oe(ty.toHexString(), 32),
        oe(tb.toHexString(), 32);
      var tw = {},
        tM = {};
      function gf(t, e) {
        if (!t) throw Error(e || "Assertion failed");
      }
      gf.equal = function (t, e, f) {
        if (t != e) throw Error(f || "Assertion failed: " + t + " != " + e);
      };
      var tE = { exports: {} };
      "function" == typeof Object.create
        ? (tE.exports = function (t, e) {
            e &&
              ((t.super_ = e),
              (t.prototype = Object.create(e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (tE.exports = function (t, e) {
            if (e) {
              t.super_ = e;
              var i = function () {};
              (i.prototype = e.prototype),
                (t.prototype = new i()),
                (t.prototype.constructor = t);
            }
          });
      var tS = tE.exports;
      function mf(t) {
        return (
          ((t >>> 24) |
            ((t >>> 8) & 65280) |
            ((t << 8) & 16711680) |
            ((255 & t) << 24)) >>>
          0
        );
      }
      function Af(t) {
        return 1 === t.length ? "0" + t : t;
      }
      function bf(t) {
        return 7 === t.length
          ? "0" + t
          : 6 === t.length
          ? "00" + t
          : 5 === t.length
          ? "000" + t
          : 4 === t.length
          ? "0000" + t
          : 3 === t.length
          ? "00000" + t
          : 2 === t.length
          ? "000000" + t
          : 1 === t.length
          ? "0000000" + t
          : t;
      }
      (tM.inherits = tS),
        (tM.toArray = function (t, e) {
          if (Array.isArray(t)) return t.slice();
          if (!t) return [];
          var f = [];
          if ("string" == typeof t) {
            if (e) {
              if ("hex" === e)
                for (
                  (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 &&
                    (t = "0" + t),
                    u = 0;
                  u < t.length;
                  u += 2
                )
                  f.push(parseInt(t[u] + t[u + 1], 16));
            } else
              for (var h = 0, u = 0; u < t.length; u++) {
                var l,
                  d,
                  c = t.charCodeAt(u);
                c < 128
                  ? (f[h++] = c)
                  : (c < 2048
                      ? (f[h++] = (c >> 6) | 192)
                      : (((l = t),
                        (d = u),
                        (64512 & l.charCodeAt(d)) != 55296 ||
                          d < 0 ||
                          d + 1 >= l.length ||
                          (64512 & l.charCodeAt(d + 1)) != 56320)
                          ? (f[h++] = (c >> 12) | 224)
                          : ((c =
                              65536 +
                              ((1023 & c) << 10) +
                              (1023 & t.charCodeAt(++u))),
                            (f[h++] = (c >> 18) | 240),
                            (f[h++] = ((c >> 12) & 63) | 128)),
                        (f[h++] = ((c >> 6) & 63) | 128)),
                    (f[h++] = (63 & c) | 128));
              }
          } else for (u = 0; u < t.length; u++) f[u] = 0 | t[u];
          return f;
        }),
        (tM.toHex = function (t) {
          for (var e = "", f = 0; f < t.length; f++) e += Af(t[f].toString(16));
          return e;
        }),
        (tM.htonl = mf),
        (tM.toHex32 = function (t, e) {
          for (var f = "", h = 0; h < t.length; h++) {
            var u = t[h];
            "little" === e && (u = mf(u)), (f += bf(u.toString(16)));
          }
          return f;
        }),
        (tM.zero2 = Af),
        (tM.zero8 = bf),
        (tM.join32 = function (t, e, f, h) {
          var u,
            l = f - e;
          gf(l % 4 == 0);
          for (var d = Array(l / 4), c = 0, m = e; c < d.length; c++, m += 4)
            (u =
              "big" === h
                ? (t[m] << 24) | (t[m + 1] << 16) | (t[m + 2] << 8) | t[m + 3]
                : (t[m + 3] << 24) | (t[m + 2] << 16) | (t[m + 1] << 8) | t[m]),
              (d[c] = u >>> 0);
          return d;
        }),
        (tM.split32 = function (t, e) {
          for (
            var f = Array(4 * t.length), h = 0, u = 0;
            h < t.length;
            h++, u += 4
          ) {
            var l = t[h];
            "big" === e
              ? ((f[u] = l >>> 24),
                (f[u + 1] = (l >>> 16) & 255),
                (f[u + 2] = (l >>> 8) & 255),
                (f[u + 3] = 255 & l))
              : ((f[u + 3] = l >>> 24),
                (f[u + 2] = (l >>> 16) & 255),
                (f[u + 1] = (l >>> 8) & 255),
                (f[u] = 255 & l));
          }
          return f;
        }),
        (tM.rotr32 = function (t, e) {
          return (t >>> e) | (t << (32 - e));
        }),
        (tM.rotl32 = function (t, e) {
          return (t << e) | (t >>> (32 - e));
        }),
        (tM.sum32 = function (t, e) {
          return (t + e) >>> 0;
        }),
        (tM.sum32_3 = function (t, e, f) {
          return (t + e + f) >>> 0;
        }),
        (tM.sum32_4 = function (t, e, f, h) {
          return (t + e + f + h) >>> 0;
        }),
        (tM.sum32_5 = function (t, e, f, h, u) {
          return (t + e + f + h + u) >>> 0;
        }),
        (tM.sum64 = function (t, e, f, h) {
          var u = t[e],
            l = (h + t[e + 1]) >>> 0;
          (t[e] = ((l < h ? 1 : 0) + f + u) >>> 0), (t[e + 1] = l);
        }),
        (tM.sum64_hi = function (t, e, f, h) {
          return (((e + h) >>> 0 < e ? 1 : 0) + t + f) >>> 0;
        }),
        (tM.sum64_lo = function (t, e, f, h) {
          return (e + h) >>> 0;
        }),
        (tM.sum64_4_hi = function (t, e, f, h, u, l, d, c) {
          var m,
            b = e;
          return (
            (t +
              f +
              u +
              d +
              (0 +
                ((b = (b + h) >>> 0) < e ? 1 : 0) +
                ((b = (b + l) >>> 0) < l ? 1 : 0) +
                ((b = (b + c) >>> 0) < c ? 1 : 0))) >>>
            0
          );
        }),
        (tM.sum64_4_lo = function (t, e, f, h, u, l, d, c) {
          return (e + h + l + c) >>> 0;
        }),
        (tM.sum64_5_hi = function (t, e, f, h, u, l, d, c, m, b) {
          var M,
            E = e;
          return (
            (t +
              f +
              u +
              d +
              m +
              (0 +
                ((E = (E + h) >>> 0) < e ? 1 : 0) +
                ((E = (E + l) >>> 0) < l ? 1 : 0) +
                ((E = (E + c) >>> 0) < c ? 1 : 0) +
                ((E = (E + b) >>> 0) < b ? 1 : 0))) >>>
            0
          );
        }),
        (tM.sum64_5_lo = function (t, e, f, h, u, l, d, c, m, b) {
          return (e + h + l + c + b) >>> 0;
        }),
        (tM.rotr64_hi = function (t, e, f) {
          return ((e << (32 - f)) | (t >>> f)) >>> 0;
        }),
        (tM.rotr64_lo = function (t, e, f) {
          return ((t << (32 - f)) | (e >>> f)) >>> 0;
        }),
        (tM.shr64_hi = function (t, e, f) {
          return t >>> f;
        }),
        (tM.shr64_lo = function (t, e, f) {
          return ((t << (32 - f)) | (e >>> f)) >>> 0;
        });
      var tB = {};
      function qr() {
        (this.pending = null),
          (this.pendingTotal = 0),
          (this.blockSize = this.constructor.blockSize),
          (this.outSize = this.constructor.outSize),
          (this.hmacStrength = this.constructor.hmacStrength),
          (this.padLength = this.constructor.padLength / 8),
          (this.endian = "big"),
          (this._delta8 = this.blockSize / 8),
          (this._delta32 = this.blockSize / 32);
      }
      (tB.BlockHash = qr),
        (qr.prototype.update = function (t, e) {
          if (
            ((t = tM.toArray(t, e)),
            this.pending
              ? (this.pending = this.pending.concat(t))
              : (this.pending = t),
            (this.pendingTotal += t.length),
            this.pending.length >= this._delta8)
          ) {
            var f = (t = this.pending).length % this._delta8;
            (this.pending = t.slice(t.length - f, t.length)),
              0 === this.pending.length && (this.pending = null),
              (t = tM.join32(t, 0, t.length - f, this.endian));
            for (var h = 0; h < t.length; h += this._delta32)
              this._update(t, h, h + this._delta32);
          }
          return this;
        }),
        (qr.prototype.digest = function (t) {
          return (
            this.update(this._pad()), gf(null === this.pending), this._digest(t)
          );
        }),
        (qr.prototype._pad = function () {
          var t = this.pendingTotal,
            e = this._delta8,
            f = e - ((t + this.padLength) % e),
            h = Array(f + this.padLength);
          h[0] = 128;
          for (var u = 1; u < f; u++) h[u] = 0;
          if (((t <<= 3), "big" === this.endian)) {
            for (var l = 8; l < this.padLength; l++) h[u++] = 0;
            (h[u++] = 0),
              (h[u++] = 0),
              (h[u++] = 0),
              (h[u++] = 0),
              (h[u++] = (t >>> 24) & 255),
              (h[u++] = (t >>> 16) & 255),
              (h[u++] = (t >>> 8) & 255),
              (h[u++] = 255 & t);
          } else
            for (
              h[u++] = 255 & t,
                h[u++] = (t >>> 8) & 255,
                h[u++] = (t >>> 16) & 255,
                h[u++] = (t >>> 24) & 255,
                h[u++] = 0,
                h[u++] = 0,
                h[u++] = 0,
                h[u++] = 0,
                l = 8;
              l < this.padLength;
              l++
            )
              h[u++] = 0;
          return h;
        });
      var tI = {},
        tN = {},
        tC = tM.rotr32;
      function xf(t, e, f) {
        return (t & e) ^ (t & f) ^ (e & f);
      }
      (tN.ft_1 = function (t, e, f, h) {
        return 0 === t
          ? (e & f) ^ (~e & h)
          : 1 === t || 3 === t
          ? e ^ f ^ h
          : 2 === t
          ? xf(e, f, h)
          : void 0;
      }),
        (tN.ch32 = function (t, e, f) {
          return (t & e) ^ (~t & f);
        }),
        (tN.maj32 = xf),
        (tN.p32 = function (t, e, f) {
          return t ^ e ^ f;
        }),
        (tN.s0_256 = function (t) {
          return tC(t, 2) ^ tC(t, 13) ^ tC(t, 22);
        }),
        (tN.s1_256 = function (t) {
          return tC(t, 6) ^ tC(t, 11) ^ tC(t, 25);
        }),
        (tN.g0_256 = function (t) {
          return tC(t, 7) ^ tC(t, 18) ^ (t >>> 3);
        }),
        (tN.g1_256 = function (t) {
          return tC(t, 17) ^ tC(t, 19) ^ (t >>> 10);
        });
      var tx = tM.rotl32,
        t_ = tM.sum32,
        tR = tM.sum32_5,
        tU = tN.ft_1,
        tD = tB.BlockHash,
        tk = [1518500249, 1859775393, 2400959708, 3395469782];
      function he() {
        if (!(this instanceof he)) return new he();
        tD.call(this),
          (this.h = [
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]),
          (this.W = Array(80));
      }
      tM.inherits(he, tD),
        (he.blockSize = 512),
        (he.outSize = 160),
        (he.hmacStrength = 80),
        (he.padLength = 64),
        (he.prototype._update = function (t, e) {
          for (var f = this.W, h = 0; h < 16; h++) f[h] = t[e + h];
          for (; h < f.length; h++)
            f[h] = tx(f[h - 3] ^ f[h - 8] ^ f[h - 14] ^ f[h - 16], 1);
          var u = this.h[0],
            l = this.h[1],
            d = this.h[2],
            c = this.h[3],
            m = this.h[4];
          for (h = 0; h < f.length; h++) {
            var b = ~~(h / 20),
              M = tR(tx(u, 5), tU(b, l, d, c), m, f[h], tk[b]);
            (m = c), (c = d), (d = tx(l, 30)), (l = u), (u = M);
          }
          (this.h[0] = t_(this.h[0], u)),
            (this.h[1] = t_(this.h[1], l)),
            (this.h[2] = t_(this.h[2], d)),
            (this.h[3] = t_(this.h[3], c)),
            (this.h[4] = t_(this.h[4], m));
        }),
        (he.prototype._digest = function (t) {
          return "hex" === t
            ? tM.toHex32(this.h, "big")
            : tM.split32(this.h, "big");
        });
      var tF = tM.sum32,
        tT = tM.sum32_4,
        tz = tM.sum32_5,
        tO = tN.ch32,
        tP = tN.maj32,
        tq = tN.s0_256,
        tL = tN.s1_256,
        tQ = tN.g0_256,
        tH = tN.g1_256,
        tY = tB.BlockHash,
        tJ = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ];
      function ce() {
        if (!(this instanceof ce)) return new ce();
        tY.call(this),
          (this.h = [
            1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
            2600822924, 528734635, 1541459225,
          ]),
          (this.k = tJ),
          (this.W = Array(64));
      }
      function ye() {
        if (!(this instanceof ye)) return new ye();
        ce.call(this),
          (this.h = [
            3238371032, 914150663, 812702999, 4144912697, 4290775857,
            1750603025, 1694076839, 3204075428,
          ]);
      }
      tM.inherits(ce, tY),
        (ce.blockSize = 512),
        (ce.outSize = 256),
        (ce.hmacStrength = 192),
        (ce.padLength = 64),
        (ce.prototype._update = function (t, e) {
          for (var f = this.W, h = 0; h < 16; h++) f[h] = t[e + h];
          for (; h < f.length; h++)
            f[h] = tT(tH(f[h - 2]), f[h - 7], tQ(f[h - 15]), f[h - 16]);
          var u = this.h[0],
            l = this.h[1],
            d = this.h[2],
            c = this.h[3],
            m = this.h[4],
            b = this.h[5],
            M = this.h[6],
            E = this.h[7];
          for (gf(this.k.length === f.length), h = 0; h < f.length; h++) {
            var S = tz(E, tL(m), tO(m, b, M), this.k[h], f[h]),
              B = tF(tq(u), tP(u, l, d));
            (E = M),
              (M = b),
              (b = m),
              (m = tF(c, S)),
              (c = d),
              (d = l),
              (l = u),
              (u = tF(S, B));
          }
          (this.h[0] = tF(this.h[0], u)),
            (this.h[1] = tF(this.h[1], l)),
            (this.h[2] = tF(this.h[2], d)),
            (this.h[3] = tF(this.h[3], c)),
            (this.h[4] = tF(this.h[4], m)),
            (this.h[5] = tF(this.h[5], b)),
            (this.h[6] = tF(this.h[6], M)),
            (this.h[7] = tF(this.h[7], E));
        }),
        (ce.prototype._digest = function (t) {
          return "hex" === t
            ? tM.toHex32(this.h, "big")
            : tM.split32(this.h, "big");
        }),
        tM.inherits(ye, ce),
        (ye.blockSize = 512),
        (ye.outSize = 224),
        (ye.hmacStrength = 192),
        (ye.padLength = 64),
        (ye.prototype._digest = function (t) {
          return "hex" === t
            ? tM.toHex32(this.h.slice(0, 7), "big")
            : tM.split32(this.h.slice(0, 7), "big");
        });
      var tj = tM.rotr64_hi,
        tG = tM.rotr64_lo,
        tK = tM.shr64_hi,
        tV = tM.shr64_lo,
        tW = tM.sum64,
        tX = tM.sum64_hi,
        tZ = tM.sum64_lo,
        t$ = tM.sum64_4_hi,
        t0 = tM.sum64_4_lo,
        t1 = tM.sum64_5_hi,
        t2 = tM.sum64_5_lo,
        t3 = tB.BlockHash,
        t6 = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ];
      function ne() {
        if (!(this instanceof ne)) return new ne();
        t3.call(this),
          (this.h = [
            1779033703, 4089235720, 3144134277, 2227873595, 1013904242,
            4271175723, 2773480762, 1595750129, 1359893119, 2917565137,
            2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209,
          ]),
          (this.k = t6),
          (this.W = Array(160));
      }
      function we() {
        if (!(this instanceof we)) return new we();
        ne.call(this),
          (this.h = [
            3418070365, 3238371032, 1654270250, 914150663, 2438529370,
            812702999, 355462360, 4144912697, 1731405415, 4290775857,
            2394180231, 1750603025, 3675008525, 1694076839, 1203062813,
            3204075428,
          ]);
      }
      tM.inherits(ne, t3),
        (ne.blockSize = 1024),
        (ne.outSize = 512),
        (ne.hmacStrength = 192),
        (ne.padLength = 128),
        (ne.prototype._prepareBlock = function (t, e) {
          for (var f = this.W, h = 0; h < 32; h++) f[h] = t[e + h];
          for (; h < f.length; h += 2) {
            var u = (function (t, e) {
                var f = tj(t, e, 19) ^ tj(e, t, 29) ^ tK(t, e, 6);
                return f < 0 && (f += 4294967296), f;
              })(f[h - 4], f[h - 3]),
              l = (function (t, e) {
                var f = tG(t, e, 19) ^ tG(e, t, 29) ^ tV(t, e, 6);
                return f < 0 && (f += 4294967296), f;
              })(f[h - 4], f[h - 3]),
              d = f[h - 14],
              c = f[h - 13],
              m = (function (t, e) {
                var f = tj(t, e, 1) ^ tj(t, e, 8) ^ tK(t, e, 7);
                return f < 0 && (f += 4294967296), f;
              })(f[h - 30], f[h - 29]),
              b = (function (t, e) {
                var f = tG(t, e, 1) ^ tG(t, e, 8) ^ tV(t, e, 7);
                return f < 0 && (f += 4294967296), f;
              })(f[h - 30], f[h - 29]),
              M = f[h - 32],
              E = f[h - 31];
            (f[h] = t$(u, l, d, c, m, b, M, E)),
              (f[h + 1] = t0(u, l, d, c, m, b, M, E));
          }
        }),
        (ne.prototype._update = function (t, e) {
          this._prepareBlock(t, e);
          var f = this.W,
            h = this.h[0],
            u = this.h[1],
            l = this.h[2],
            d = this.h[3],
            c = this.h[4],
            m = this.h[5],
            b = this.h[6],
            M = this.h[7],
            E = this.h[8],
            S = this.h[9],
            B = this.h[10],
            I = this.h[11],
            N = this.h[12],
            C = this.h[13],
            x = this.h[14],
            _ = this.h[15];
          gf(this.k.length === f.length);
          for (var R = 0; R < f.length; R += 2) {
            var D = x,
              F = _,
              T = (function (t, e) {
                var f = tj(t, e, 14) ^ tj(t, e, 18) ^ tj(e, t, 9);
                return f < 0 && (f += 4294967296), f;
              })(E, S),
              O = (function (t, e) {
                var f = tG(t, e, 14) ^ tG(t, e, 18) ^ tG(e, t, 9);
                return f < 0 && (f += 4294967296), f;
              })(E, S),
              P = (function (t, e, f, h, u) {
                var l = (t & f) ^ (~t & u);
                return l < 0 && (l += 4294967296), l;
              })(E, 0, B, 0, N),
              q = (function (t, e, f, h, u, l) {
                var d = (e & h) ^ (~e & l);
                return d < 0 && (d += 4294967296), d;
              })(0, S, 0, I, 0, C),
              Q = this.k[R],
              K = this.k[R + 1],
              X = f[R],
              Z = f[R + 1],
              $ = t1(D, F, T, O, P, q, Q, K, X, Z),
              tt = t2(D, F, T, O, P, q, Q, K, X, Z);
            D = (function (t, e) {
              var f = tj(t, e, 28) ^ tj(e, t, 2) ^ tj(e, t, 7);
              return f < 0 && (f += 4294967296), f;
            })(h, u);
            var tr = tX(
                D,
                (F = (function (t, e) {
                  var f = tG(t, e, 28) ^ tG(e, t, 2) ^ tG(e, t, 7);
                  return f < 0 && (f += 4294967296), f;
                })(h, u)),
                (T = (function (t, e, f, h, u) {
                  var l = (t & f) ^ (t & u) ^ (f & u);
                  return l < 0 && (l += 4294967296), l;
                })(h, 0, l, 0, c)),
                (O = (function (t, e, f, h, u, l) {
                  var d = (e & h) ^ (e & l) ^ (h & l);
                  return d < 0 && (d += 4294967296), d;
                })(0, u, 0, d, 0, m))
              ),
              ti = tZ(D, F, T, O);
            (x = N),
              (_ = C),
              (N = B),
              (C = I),
              (B = E),
              (I = S),
              (E = tX(b, M, $, tt)),
              (S = tZ(M, M, $, tt)),
              (b = c),
              (M = m),
              (c = l),
              (m = d),
              (l = h),
              (d = u),
              (h = tX($, tt, tr, ti)),
              (u = tZ($, tt, tr, ti));
          }
          tW(this.h, 0, h, u),
            tW(this.h, 2, l, d),
            tW(this.h, 4, c, m),
            tW(this.h, 6, b, M),
            tW(this.h, 8, E, S),
            tW(this.h, 10, B, I),
            tW(this.h, 12, N, C),
            tW(this.h, 14, x, _);
        }),
        (ne.prototype._digest = function (t) {
          return "hex" === t
            ? tM.toHex32(this.h, "big")
            : tM.split32(this.h, "big");
        }),
        tM.inherits(we, ne),
        (we.blockSize = 1024),
        (we.outSize = 384),
        (we.hmacStrength = 192),
        (we.padLength = 128),
        (we.prototype._digest = function (t) {
          return "hex" === t
            ? tM.toHex32(this.h.slice(0, 12), "big")
            : tM.split32(this.h.slice(0, 12), "big");
        }),
        (tI.sha1 = he),
        (tI.sha224 = ye),
        (tI.sha256 = ce),
        (tI.sha384 = we),
        (tI.sha512 = ne);
      var t8 = {},
        t4 = tM.rotl32,
        t5 = tM.sum32,
        t7 = tM.sum32_3,
        t9 = tM.sum32_4,
        et = tB.BlockHash;
      function pe() {
        if (!(this instanceof pe)) return new pe();
        et.call(this),
          (this.h = [
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]),
          (this.endian = "little");
      }
      function Uf(t, e, f, h) {
        return t <= 15
          ? e ^ f ^ h
          : t <= 31
          ? (e & f) | (~e & h)
          : t <= 47
          ? (e | ~f) ^ h
          : t <= 63
          ? (e & h) | (f & ~h)
          : e ^ (f | ~h);
      }
      tM.inherits(pe, et),
        (t8.ripemd160 = pe),
        (pe.blockSize = 512),
        (pe.outSize = 160),
        (pe.hmacStrength = 192),
        (pe.padLength = 64),
        (pe.prototype._update = function (t, e) {
          for (
            var f = this.h[0],
              h = this.h[1],
              u = this.h[2],
              l = this.h[3],
              d = this.h[4],
              c = f,
              m = h,
              b = u,
              M = l,
              E = d,
              S = 0;
            S < 80;
            S++
          ) {
            var B,
              I,
              N = t5(
                t4(
                  t9(
                    f,
                    Uf(S, h, u, l),
                    t[ei[S] + e],
                    (B = S) <= 15
                      ? 0
                      : B <= 31
                      ? 1518500249
                      : B <= 47
                      ? 1859775393
                      : B <= 63
                      ? 2400959708
                      : 2840853838
                  ),
                  eo[S]
                ),
                d
              );
            (f = d),
              (d = l),
              (l = t4(u, 10)),
              (u = h),
              (h = N),
              (N = t5(
                t4(
                  t9(
                    c,
                    Uf(79 - S, m, b, M),
                    t[en[S] + e],
                    (I = S) <= 15
                      ? 1352829926
                      : I <= 31
                      ? 1548603684
                      : I <= 47
                      ? 1836072691
                      : I <= 63
                      ? 2053994217
                      : 0
                  ),
                  es[S]
                ),
                E
              )),
              (c = E),
              (E = M),
              (M = t4(b, 10)),
              (b = m),
              (m = N);
          }
          (N = t7(this.h[1], u, M)),
            (this.h[1] = t7(this.h[2], l, E)),
            (this.h[2] = t7(this.h[3], d, c)),
            (this.h[3] = t7(this.h[4], f, m)),
            (this.h[4] = t7(this.h[0], h, b)),
            (this.h[0] = N);
        }),
        (pe.prototype._digest = function (t) {
          return "hex" === t
            ? tM.toHex32(this.h, "little")
            : tM.split32(this.h, "little");
        });
      var ei = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10,
          6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7,
          0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5,
          6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
        ],
        en = [
          5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0,
          13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8,
          12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10,
          14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
        ],
        eo = [
          11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13,
          11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13,
          15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5,
          6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5,
          6,
        ],
        es = [
          8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7,
          12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14,
          12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9,
          12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
        ];
      function cr(t, e, f) {
        if (!(this instanceof cr)) return new cr(t, e, f);
        (this.Hash = t),
          (this.blockSize = t.blockSize / 8),
          (this.outSize = t.outSize / 8),
          (this.inner = null),
          (this.outer = null),
          this._init(tM.toArray(e, f));
      }
      function lr(t, e, f) {
        return (
          t(
            (f = {
              path: e,
              exports: {},
              require: function (t, e) {
                return (function () {
                  throw Error(
                    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
                  );
                })(t, e ?? f.path);
              },
            }),
            f.exports
          ),
          f.exports
        );
      }
      (cr.prototype._init = function (t) {
        t.length > this.blockSize && (t = new this.Hash().update(t).digest()),
          gf(t.length <= this.blockSize);
        for (var e = t.length; e < this.blockSize; e++) t.push(0);
        for (e = 0; e < t.length; e++) t[e] ^= 54;
        for (this.inner = new this.Hash().update(t), e = 0; e < t.length; e++)
          t[e] ^= 106;
        this.outer = new this.Hash().update(t);
      }),
        (cr.prototype.update = function (t, e) {
          return this.inner.update(t, e), this;
        }),
        (cr.prototype.digest = function (t) {
          return this.outer.update(this.inner.digest()), this.outer.digest(t);
        }),
        (tw.utils = tM),
        (tw.common = tB),
        (tw.sha = tI),
        (tw.ripemd = t8),
        (tw.hmac = cr),
        (tw.sha1 = tw.sha.sha1),
        (tw.sha256 = tw.sha.sha256),
        (tw.sha224 = tw.sha.sha224),
        (tw.sha384 = tw.sha.sha384),
        (tw.sha512 = tw.sha.sha512),
        (tw.ripemd160 = tw.ripemd.ripemd160);
      var ef = kf;
      function kf(t, e) {
        if (!t) throw Error(e || "Assertion failed");
      }
      kf.equal = function (t, e, f) {
        if (t != e) throw Error(f || "Assertion failed: " + t + " != " + e);
      };
      var eh = lr(function (t, e) {
          function n(t) {
            return 1 === t.length ? "0" + t : t;
          }
          function o(t) {
            for (var e = "", f = 0; f < t.length; f++)
              e += n(t[f].toString(16));
            return e;
          }
          (e.toArray = function (t, e) {
            if (Array.isArray(t)) return t.slice();
            if (!t) return [];
            var f = [];
            if ("string" != typeof t) {
              for (var h = 0; h < t.length; h++) f[h] = 0 | t[h];
              return f;
            }
            if ("hex" === e) {
              (t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 &&
                (t = "0" + t);
              for (var h = 0; h < t.length; h += 2)
                f.push(parseInt(t[h] + t[h + 1], 16));
            } else
              for (var h = 0; h < t.length; h++) {
                var u = t.charCodeAt(h),
                  l = u >> 8,
                  d = 255 & u;
                l ? f.push(l, d) : f.push(d);
              }
            return f;
          }),
            (e.zero2 = n),
            (e.toHex = o),
            (e.encode = function (t, e) {
              return "hex" === e ? o(t) : t;
            });
        }),
        eu = lr(function (t, e) {
          (e.assert = ef),
            (e.toArray = eh.toArray),
            (e.zero2 = eh.zero2),
            (e.toHex = eh.toHex),
            (e.encode = eh.encode),
            (e.getNAF = function (t, e, f) {
              var h = Array(Math.max(t.bitLength(), f) + 1);
              h.fill(0);
              for (
                var u = 1 << (e + 1), l = t.clone(), d = 0;
                d < h.length;
                d++
              ) {
                var c,
                  m = l.andln(u - 1);
                l.isOdd()
                  ? ((c = m > (u >> 1) - 1 ? (u >> 1) - m : m), l.isubn(c))
                  : (c = 0),
                  (h[d] = c),
                  l.iushrn(1);
              }
              return h;
            }),
            (e.getJSF = function (t, e) {
              var f = [[], []];
              (t = t.clone()), (e = e.clone());
              for (var h, u = 0, l = 0; t.cmpn(-u) > 0 || e.cmpn(-l) > 0; ) {
                var d,
                  c,
                  m = (t.andln(3) + u) & 3,
                  b = (e.andln(3) + l) & 3;
                3 === m && (m = -1),
                  3 === b && (b = -1),
                  (d =
                    1 & m
                      ? (3 == (h = (t.andln(7) + u) & 7) || 5 === h) && 2 === b
                        ? -m
                        : m
                      : 0),
                  f[0].push(d),
                  (c =
                    1 & b
                      ? (3 == (h = (e.andln(7) + l) & 7) || 5 === h) && 2 === m
                        ? -b
                        : b
                      : 0),
                  f[1].push(c),
                  2 * u === d + 1 && (u = 1 - u),
                  2 * l === c + 1 && (l = 1 - l),
                  t.iushrn(1),
                  e.iushrn(1);
              }
              return f;
            }),
            (e.cachedProperty = function (t, e, f) {
              var h = "_" + e;
              t.prototype[e] = function () {
                return void 0 !== this[h] ? this[h] : (this[h] = f.call(this));
              };
            }),
            (e.parseBytes = function (t) {
              return "string" == typeof t ? e.toArray(t, "hex") : t;
            }),
            (e.intFromLE = function (t) {
              return new $(t, "hex", "le");
            });
        }),
        ea = eu.getNAF,
        el = eu.getJSF,
        ed = eu.assert;
      function Ce(t, e) {
        (this.type = t),
          (this.p = new $(e.p, 16)),
          (this.red = e.prime ? $.red(e.prime) : $.mont(this.p)),
          (this.zero = new $(0).toRed(this.red)),
          (this.one = new $(1).toRed(this.red)),
          (this.two = new $(2).toRed(this.red)),
          (this.n = e.n && new $(e.n, 16)),
          (this.g = e.g && this.pointFromJSON(e.g, e.gRed)),
          (this._wnafT1 = [, , , ,]),
          (this._wnafT2 = [, , , ,]),
          (this._wnafT3 = [, , , ,]),
          (this._wnafT4 = [, , , ,]),
          (this._bitLength = this.n ? this.n.bitLength() : 0);
        var f = this.n && this.p.div(this.n);
        !f || f.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
      }
      function Zt(t, e) {
        (this.curve = t), (this.type = e), (this.precomputed = null);
      }
      (Ce.prototype.point = function () {
        throw Error("Not implemented");
      }),
        (Ce.prototype.validate = function () {
          throw Error("Not implemented");
        }),
        (Ce.prototype._fixedNafMul = function (t, e) {
          ed(t.precomputed);
          var f = t._getDoubles(),
            h = ea(e, 1, this._bitLength),
            u = (1 << (f.step + 1)) - (f.step % 2 == 0 ? 2 : 1);
          u /= 3;
          var l,
            d,
            c = [];
          for (l = 0; l < h.length; l += f.step) {
            d = 0;
            for (var m = l + f.step - 1; m >= l; m--) d = (d << 1) + h[m];
            c.push(d);
          }
          for (
            var b = this.jpoint(null, null, null),
              M = this.jpoint(null, null, null),
              E = u;
            E > 0;
            E--
          ) {
            for (l = 0; l < c.length; l++)
              (d = c[l]) === E
                ? (M = M.mixedAdd(f.points[l]))
                : d === -E && (M = M.mixedAdd(f.points[l].neg()));
            b = b.add(M);
          }
          return b.toP();
        }),
        (Ce.prototype._wnafMul = function (t, e) {
          var f = 4,
            h = t._getNAFPoints(f);
          f = h.wnd;
          for (
            var u = h.points,
              l = ea(e, f, this._bitLength),
              d = this.jpoint(null, null, null),
              c = l.length - 1;
            c >= 0;
            c--
          ) {
            for (var m = 0; c >= 0 && 0 === l[c]; c--) m++;
            if ((c >= 0 && m++, (d = d.dblp(m)), c < 0)) break;
            var b = l[c];
            ed(0 !== b),
              (d =
                "affine" === t.type
                  ? b > 0
                    ? d.mixedAdd(u[(b - 1) >> 1])
                    : d.mixedAdd(u[(-b - 1) >> 1].neg())
                  : b > 0
                  ? d.add(u[(b - 1) >> 1])
                  : d.add(u[(-b - 1) >> 1].neg()));
          }
          return "affine" === t.type ? d.toP() : d;
        }),
        (Ce.prototype._wnafMulAdd = function (t, e, f, h, u) {
          var l,
            d,
            c,
            m = this._wnafT1,
            b = this._wnafT2,
            M = this._wnafT3,
            E = 0;
          for (l = 0; l < h; l++) {
            var S = (c = e[l])._getNAFPoints(t);
            (m[l] = S.wnd), (b[l] = S.points);
          }
          for (l = h - 1; l >= 1; l -= 2) {
            var B = l - 1,
              I = l;
            if (1 !== m[B] || 1 !== m[I]) {
              (M[B] = ea(f[B], m[B], this._bitLength)),
                (M[I] = ea(f[I], m[I], this._bitLength)),
                (E = Math.max(M[B].length, E)),
                (E = Math.max(M[I].length, E));
              continue;
            }
            var N = [e[B], null, null, e[I]];
            0 === e[B].y.cmp(e[I].y)
              ? ((N[1] = e[B].add(e[I])),
                (N[2] = e[B].toJ().mixedAdd(e[I].neg())))
              : 0 === e[B].y.cmp(e[I].y.redNeg())
              ? ((N[1] = e[B].toJ().mixedAdd(e[I])),
                (N[2] = e[B].add(e[I].neg())))
              : ((N[1] = e[B].toJ().mixedAdd(e[I])),
                (N[2] = e[B].toJ().mixedAdd(e[I].neg())));
            var C = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
              x = el(f[B], f[I]);
            for (
              E = Math.max(x[0].length, E),
                M[B] = Array(E),
                M[I] = Array(E),
                d = 0;
              d < E;
              d++
            ) {
              var _ = 0 | x[0][d],
                R = 0 | x[1][d];
              (M[B][d] = C[(_ + 1) * 3 + (R + 1)]), (M[I][d] = 0), (b[B] = N);
            }
          }
          var D = this.jpoint(null, null, null),
            F = this._wnafT4;
          for (l = E; l >= 0; l--) {
            for (var T = 0; l >= 0; ) {
              var O = !0;
              for (d = 0; d < h; d++)
                (F[d] = 0 | M[d][l]), 0 !== F[d] && (O = !1);
              if (!O) break;
              T++, l--;
            }
            if ((l >= 0 && T++, (D = D.dblp(T)), l < 0)) break;
            for (d = 0; d < h; d++) {
              var P = F[d];
              0 !== P &&
                (P > 0
                  ? (c = b[d][(P - 1) >> 1])
                  : P < 0 && (c = b[d][(-P - 1) >> 1].neg()),
                (D = "affine" === c.type ? D.mixedAdd(c) : D.add(c)));
            }
          }
          for (l = 0; l < h; l++) b[l] = null;
          return u ? D : D.toP();
        }),
        (Ce.BasePoint = Zt),
        (Zt.prototype.eq = function () {
          throw Error("Not implemented");
        }),
        (Zt.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (Ce.prototype.decodePoint = function (t, e) {
          t = eu.toArray(t, e);
          var f = this.p.byteLength();
          if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * f)
            return (
              6 === t[0]
                ? ed(t[t.length - 1] % 2 == 0)
                : 7 === t[0] && ed(t[t.length - 1] % 2 == 1),
              this.point(t.slice(1, 1 + f), t.slice(1 + f, 1 + 2 * f))
            );
          if ((2 === t[0] || 3 === t[0]) && t.length - 1 === f)
            return this.pointFromX(t.slice(1, 1 + f), 3 === t[0]);
          throw Error("Unknown point format");
        }),
        (Zt.prototype.encodeCompressed = function (t) {
          return this.encode(t, !0);
        }),
        (Zt.prototype._encode = function (t) {
          var e = this.curve.p.byteLength(),
            f = this.getX().toArray("be", e);
          return t
            ? [this.getY().isEven() ? 2 : 3].concat(f)
            : [4].concat(f, this.getY().toArray("be", e));
        }),
        (Zt.prototype.encode = function (t, e) {
          return eu.encode(this._encode(e), t);
        }),
        (Zt.prototype.precompute = function (t) {
          if (this.precomputed) return this;
          var e = { doubles: null, naf: null, beta: null };
          return (
            (e.naf = this._getNAFPoints(8)),
            (e.doubles = this._getDoubles(4, t)),
            (e.beta = this._getBeta()),
            (this.precomputed = e),
            this
          );
        }),
        (Zt.prototype._hasDoubles = function (t) {
          if (!this.precomputed) return !1;
          var e = this.precomputed.doubles;
          return (
            !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
          );
        }),
        (Zt.prototype._getDoubles = function (t, e) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
          for (var f = [this], h = this, u = 0; u < e; u += t) {
            for (var l = 0; l < t; l++) h = h.dbl();
            f.push(h);
          }
          return { step: t, points: f };
        }),
        (Zt.prototype._getNAFPoints = function (t) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
          for (
            var e = [this],
              f = (1 << t) - 1,
              h = 1 === f ? null : this.dbl(),
              u = 1;
            u < f;
            u++
          )
            e[u] = e[u - 1].add(h);
          return { wnd: t, points: e };
        }),
        (Zt.prototype._getBeta = function () {
          return null;
        }),
        (Zt.prototype.dblp = function (t) {
          for (var e = this, f = 0; f < t; f++) e = e.dbl();
          return e;
        });
      var ec = lr(function (t) {
          "function" == typeof Object.create
            ? (t.exports = function (t, e) {
                e &&
                  ((t.super_ = e),
                  (t.prototype = Object.create(e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })));
              })
            : (t.exports = function (t, e) {
                if (e) {
                  t.super_ = e;
                  var n = function () {};
                  (n.prototype = e.prototype),
                    (t.prototype = new n()),
                    (t.prototype.constructor = t);
                }
              });
        }),
        ep = eu.assert;
      function te(t) {
        Ce.call(this, "short", t),
          (this.a = new $(t.a, 16).toRed(this.red)),
          (this.b = new $(t.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(t)),
          (this._endoWnafT1 = [, , , ,]),
          (this._endoWnafT2 = [, , , ,]);
      }
      function Dt(t, e, f, h) {
        Ce.BasePoint.call(this, t, "affine"),
          null === e && null === f
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new $(e, 16)),
              (this.y = new $(f, 16)),
              h &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1));
      }
      function Ft(t, e, f, h) {
        Ce.BasePoint.call(this, t, "jacobian"),
          null === e && null === f && null === h
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new $(0)))
            : ((this.x = new $(e, 16)),
              (this.y = new $(f, 16)),
              (this.z = new $(h, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one);
      }
      ec(te, Ce),
        (te.prototype._getEndomorphism = function (t) {
          if (!(!this.zeroA || !this.g || !this.n || 1 !== this.p.modn(3))) {
            if (t.beta) e = new $(t.beta, 16).toRed(this.red);
            else {
              var e,
                f,
                h,
                u = this._getEndoRoots(this.p);
              e = (e = 0 > u[0].cmp(u[1]) ? u[0] : u[1]).toRed(this.red);
            }
            if (t.lambda) f = new $(t.lambda, 16);
            else {
              var l = this._getEndoRoots(this.n);
              0 === this.g.mul(l[0]).x.cmp(this.g.x.redMul(e))
                ? (f = l[0])
                : ((f = l[1]),
                  ep(0 === this.g.mul(f).x.cmp(this.g.x.redMul(e))));
            }
            return (
              (h = t.basis
                ? t.basis.map(function (t) {
                    return { a: new $(t.a, 16), b: new $(t.b, 16) };
                  })
                : this._getEndoBasis(f)),
              { beta: e, lambda: f, basis: h }
            );
          }
        }),
        (te.prototype._getEndoRoots = function (t) {
          var e = t === this.p ? this.red : $.mont(t),
            f = new $(2).toRed(e).redInvm(),
            h = f.redNeg(),
            u = new $(3).toRed(e).redNeg().redSqrt().redMul(f);
          return [h.redAdd(u).fromRed(), h.redSub(u).fromRed()];
        }),
        (te.prototype._getEndoBasis = function (t) {
          for (
            var e,
              f,
              h,
              u,
              l,
              d,
              c,
              m,
              b,
              M = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              E = t,
              S = this.n.clone(),
              B = new $(1),
              I = new $(0),
              N = new $(0),
              C = new $(1),
              x = 0;
            0 !== E.cmpn(0);

          ) {
            var _ = S.div(E);
            (m = S.sub(_.mul(E))), (b = N.sub(_.mul(B)));
            var R = C.sub(_.mul(I));
            if (!h && 0 > m.cmp(M))
              (e = c.neg()), (f = B), (h = m.neg()), (u = b);
            else if (h && 2 == ++x) break;
            (c = m), (S = E), (E = m), (N = B), (B = b), (C = I), (I = R);
          }
          (l = m.neg()), (d = b);
          var D = h.sqr().add(u.sqr());
          return (
            l.sqr().add(d.sqr()).cmp(D) >= 0 && ((l = e), (d = f)),
            h.negative && ((h = h.neg()), (u = u.neg())),
            l.negative && ((l = l.neg()), (d = d.neg())),
            [
              { a: h, b: u },
              { a: l, b: d },
            ]
          );
        }),
        (te.prototype._endoSplit = function (t) {
          var e = this.endo.basis,
            f = e[0],
            h = e[1],
            u = h.b.mul(t).divRound(this.n),
            l = f.b.neg().mul(t).divRound(this.n),
            d = u.mul(f.a),
            c = l.mul(h.a),
            m = u.mul(f.b),
            b = l.mul(h.b);
          return { k1: t.sub(d).sub(c), k2: m.add(b).neg() };
        }),
        (te.prototype.pointFromX = function (t, e) {
          (t = new $(t, 16)).red || (t = t.toRed(this.red));
          var f = t
              .redSqr()
              .redMul(t)
              .redIAdd(t.redMul(this.a))
              .redIAdd(this.b),
            h = f.redSqrt();
          if (0 !== h.redSqr().redSub(f).cmp(this.zero))
            throw Error("invalid point");
          var u = h.fromRed().isOdd();
          return ((e && !u) || (!e && u)) && (h = h.redNeg()), this.point(t, h);
        }),
        (te.prototype.validate = function (t) {
          if (t.inf) return !0;
          var e = t.x,
            f = t.y,
            h = this.a.redMul(e),
            u = e.redSqr().redMul(e).redIAdd(h).redIAdd(this.b);
          return 0 === f.redSqr().redISub(u).cmpn(0);
        }),
        (te.prototype._endoWnafMulAdd = function (t, e, f) {
          for (
            var h = this._endoWnafT1, u = this._endoWnafT2, l = 0;
            l < t.length;
            l++
          ) {
            var d = this._endoSplit(e[l]),
              c = t[l],
              m = c._getBeta();
            d.k1.negative && (d.k1.ineg(), (c = c.neg(!0))),
              d.k2.negative && (d.k2.ineg(), (m = m.neg(!0))),
              (h[2 * l] = c),
              (h[2 * l + 1] = m),
              (u[2 * l] = d.k1),
              (u[2 * l + 1] = d.k2);
          }
          for (
            var b = this._wnafMulAdd(1, h, u, 2 * l, f), M = 0;
            M < 2 * l;
            M++
          )
            (h[M] = null), (u[M] = null);
          return b;
        }),
        ec(Dt, Ce.BasePoint),
        (te.prototype.point = function (t, e, f) {
          return new Dt(this, t, e, f);
        }),
        (te.prototype.pointFromJSON = function (t, e) {
          return Dt.fromJSON(this, t, e);
        }),
        (Dt.prototype._getBeta = function () {
          if (this.curve.endo) {
            var t = this.precomputed;
            if (t && t.beta) return t.beta;
            var e = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y
            );
            if (t) {
              var f = this.curve,
                n = function (t) {
                  return f.point(t.x.redMul(f.endo.beta), t.y);
                };
              (t.beta = e),
                (e.precomputed = {
                  beta: null,
                  naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(n) },
                  doubles: t.doubles && {
                    step: t.doubles.step,
                    points: t.doubles.points.map(n),
                  },
                });
            }
            return e;
          }
        }),
        (Dt.prototype.toJSON = function () {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1),
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1),
                  },
                },
              ]
            : [this.x, this.y];
        }),
        (Dt.fromJSON = function (t, e, f) {
          "string" == typeof e && (e = JSON.parse(e));
          var h = t.point(e[0], e[1], f);
          if (!e[2]) return h;
          function o(e) {
            return t.point(e[0], e[1], f);
          }
          var u = e[2];
          return (
            (h.precomputed = {
              beta: null,
              doubles: u.doubles && {
                step: u.doubles.step,
                points: [h].concat(u.doubles.points.map(o)),
              },
              naf: u.naf && {
                wnd: u.naf.wnd,
                points: [h].concat(u.naf.points.map(o)),
              },
            }),
            h
          );
        }),
        (Dt.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                ">";
        }),
        (Dt.prototype.isInfinity = function () {
          return this.inf;
        }),
        (Dt.prototype.add = function (t) {
          if (this.inf) return t;
          if (t.inf) return this;
          if (this.eq(t)) return this.dbl();
          if (this.neg().eq(t) || 0 === this.x.cmp(t.x))
            return this.curve.point(null, null);
          var e = this.y.redSub(t.y);
          0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
          var f = e.redSqr().redISub(this.x).redISub(t.x),
            h = e.redMul(this.x.redSub(f)).redISub(this.y);
          return this.curve.point(f, h);
        }),
        (Dt.prototype.dbl = function () {
          if (this.inf) return this;
          var t = this.y.redAdd(this.y);
          if (0 === t.cmpn(0)) return this.curve.point(null, null);
          var e = this.curve.a,
            f = this.x.redSqr(),
            h = t.redInvm(),
            u = f.redAdd(f).redIAdd(f).redIAdd(e).redMul(h),
            l = u.redSqr().redISub(this.x.redAdd(this.x)),
            d = u.redMul(this.x.redSub(l)).redISub(this.y);
          return this.curve.point(l, d);
        }),
        (Dt.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (Dt.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (Dt.prototype.mul = function (t) {
          return (
            (t = new $(t, 16)),
            this.isInfinity()
              ? this
              : this._hasDoubles(t)
              ? this.curve._fixedNafMul(this, t)
              : this.curve.endo
              ? this.curve._endoWnafMulAdd([this], [t])
              : this.curve._wnafMul(this, t)
          );
        }),
        (Dt.prototype.mulAdd = function (t, e, f) {
          var h = [this, e],
            u = [t, f];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(h, u)
            : this.curve._wnafMulAdd(1, h, u, 2);
        }),
        (Dt.prototype.jmulAdd = function (t, e, f) {
          var h = [this, e],
            u = [t, f];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(h, u, !0)
            : this.curve._wnafMulAdd(1, h, u, 2, !0);
        }),
        (Dt.prototype.eq = function (t) {
          return (
            this === t ||
            (this.inf === t.inf &&
              (this.inf || (0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))))
          );
        }),
        (Dt.prototype.neg = function (t) {
          if (this.inf) return this;
          var e = this.curve.point(this.x, this.y.redNeg());
          if (t && this.precomputed) {
            var f = this.precomputed,
              n = function (t) {
                return t.neg();
              };
            e.precomputed = {
              naf: f.naf && { wnd: f.naf.wnd, points: f.naf.points.map(n) },
              doubles: f.doubles && {
                step: f.doubles.step,
                points: f.doubles.points.map(n),
              },
            };
          }
          return e;
        }),
        (Dt.prototype.toJ = function () {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        ec(Ft, Ce.BasePoint),
        (te.prototype.jpoint = function (t, e, f) {
          return new Ft(this, t, e, f);
        }),
        (Ft.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var t = this.z.redInvm(),
            e = t.redSqr(),
            f = this.x.redMul(e),
            h = this.y.redMul(e).redMul(t);
          return this.curve.point(f, h);
        }),
        (Ft.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (Ft.prototype.add = function (t) {
          if (this.isInfinity()) return t;
          if (t.isInfinity()) return this;
          var e = t.z.redSqr(),
            f = this.z.redSqr(),
            h = this.x.redMul(e),
            u = t.x.redMul(f),
            l = this.y.redMul(e.redMul(t.z)),
            d = t.y.redMul(f.redMul(this.z)),
            c = h.redSub(u),
            m = l.redSub(d);
          if (0 === c.cmpn(0))
            return 0 !== m.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var b = c.redSqr(),
            M = b.redMul(c),
            E = h.redMul(b),
            S = m.redSqr().redIAdd(M).redISub(E).redISub(E),
            B = m.redMul(E.redISub(S)).redISub(l.redMul(M)),
            I = this.z.redMul(t.z).redMul(c);
          return this.curve.jpoint(S, B, I);
        }),
        (Ft.prototype.mixedAdd = function (t) {
          if (this.isInfinity()) return t.toJ();
          if (t.isInfinity()) return this;
          var e = this.z.redSqr(),
            f = this.x,
            h = t.x.redMul(e),
            u = this.y,
            l = t.y.redMul(e).redMul(this.z),
            d = f.redSub(h),
            c = u.redSub(l);
          if (0 === d.cmpn(0))
            return 0 !== c.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var m = d.redSqr(),
            b = m.redMul(d),
            M = f.redMul(m),
            E = c.redSqr().redIAdd(b).redISub(M).redISub(M),
            S = c.redMul(M.redISub(E)).redISub(u.redMul(b)),
            B = this.z.redMul(d);
          return this.curve.jpoint(E, S, B);
        }),
        (Ft.prototype.dblp = function (t) {
          if (0 === t || this.isInfinity()) return this;
          if (!t) return this.dbl();
          if (this.curve.zeroA || this.curve.threeA) {
            var e,
              f = this;
            for (e = 0; e < t; e++) f = f.dbl();
            return f;
          }
          var h = this.curve.a,
            u = this.curve.tinv,
            l = this.x,
            d = this.y,
            c = this.z,
            m = c.redSqr().redSqr(),
            b = d.redAdd(d);
          for (e = 0; e < t; e++) {
            var M = l.redSqr(),
              E = b.redSqr(),
              S = E.redSqr(),
              B = M.redAdd(M).redIAdd(M).redIAdd(h.redMul(m)),
              I = l.redMul(E),
              N = B.redSqr().redISub(I.redAdd(I)),
              C = I.redISub(N),
              x = B.redMul(C);
            x = x.redIAdd(x).redISub(S);
            var _ = b.redMul(c);
            e + 1 < t && (m = m.redMul(S)), (l = N), (c = _), (b = x);
          }
          return this.curve.jpoint(l, b.redMul(u), c);
        }),
        (Ft.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl();
        }),
        (Ft.prototype._zeroDbl = function () {
          var t, e, f;
          if (this.zOne) {
            var h = this.x.redSqr(),
              u = this.y.redSqr(),
              l = u.redSqr(),
              d = this.x.redAdd(u).redSqr().redISub(h).redISub(l);
            d = d.redIAdd(d);
            var c = h.redAdd(h).redIAdd(h),
              m = c.redSqr().redISub(d).redISub(d),
              b = l.redIAdd(l);
            (b = (b = b.redIAdd(b)).redIAdd(b)),
              (t = m),
              (e = c.redMul(d.redISub(m)).redISub(b)),
              (f = this.y.redAdd(this.y));
          } else {
            var M = this.x.redSqr(),
              E = this.y.redSqr(),
              S = E.redSqr(),
              B = this.x.redAdd(E).redSqr().redISub(M).redISub(S);
            B = B.redIAdd(B);
            var I = M.redAdd(M).redIAdd(M),
              N = I.redSqr(),
              C = S.redIAdd(S);
            (C = (C = C.redIAdd(C)).redIAdd(C)),
              (t = N.redISub(B).redISub(B)),
              (e = I.redMul(B.redISub(t)).redISub(C)),
              (f = (f = this.y.redMul(this.z)).redIAdd(f));
          }
          return this.curve.jpoint(t, e, f);
        }),
        (Ft.prototype._threeDbl = function () {
          var t, e, f;
          if (this.zOne) {
            var h = this.x.redSqr(),
              u = this.y.redSqr(),
              l = u.redSqr(),
              d = this.x.redAdd(u).redSqr().redISub(h).redISub(l);
            d = d.redIAdd(d);
            var c = h.redAdd(h).redIAdd(h).redIAdd(this.curve.a),
              m = c.redSqr().redISub(d).redISub(d);
            t = m;
            var b = l.redIAdd(l);
            (b = (b = b.redIAdd(b)).redIAdd(b)),
              (e = c.redMul(d.redISub(m)).redISub(b)),
              (f = this.y.redAdd(this.y));
          } else {
            var M = this.z.redSqr(),
              E = this.y.redSqr(),
              S = this.x.redMul(E),
              B = this.x.redSub(M).redMul(this.x.redAdd(M));
            B = B.redAdd(B).redIAdd(B);
            var I = S.redIAdd(S),
              N = (I = I.redIAdd(I)).redAdd(I);
            (t = B.redSqr().redISub(N)),
              (f = this.y.redAdd(this.z).redSqr().redISub(E).redISub(M));
            var C = E.redSqr();
            (C = (C = (C = C.redIAdd(C)).redIAdd(C)).redIAdd(C)),
              (e = B.redMul(I.redISub(t)).redISub(C));
          }
          return this.curve.jpoint(t, e, f);
        }),
        (Ft.prototype._dbl = function () {
          var t = this.curve.a,
            e = this.x,
            f = this.y,
            h = this.z,
            u = h.redSqr().redSqr(),
            l = e.redSqr(),
            d = f.redSqr(),
            c = l.redAdd(l).redIAdd(l).redIAdd(t.redMul(u)),
            m = e.redAdd(e),
            b = (m = m.redIAdd(m)).redMul(d),
            M = c.redSqr().redISub(b.redAdd(b)),
            E = b.redISub(M),
            S = d.redSqr();
          S = (S = (S = S.redIAdd(S)).redIAdd(S)).redIAdd(S);
          var B = c.redMul(E).redISub(S),
            I = f.redAdd(f).redMul(h);
          return this.curve.jpoint(M, B, I);
        }),
        (Ft.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var t = this.x.redSqr(),
            e = this.y.redSqr(),
            f = this.z.redSqr(),
            h = e.redSqr(),
            u = t.redAdd(t).redIAdd(t),
            l = u.redSqr(),
            d = this.x.redAdd(e).redSqr().redISub(t).redISub(h),
            c = (d = (d = (d = d.redIAdd(d)).redAdd(d).redIAdd(d)).redISub(
              l
            )).redSqr(),
            m = h.redIAdd(h);
          m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m);
          var b = u.redIAdd(d).redSqr().redISub(l).redISub(c).redISub(m),
            M = e.redMul(b);
          M = (M = M.redIAdd(M)).redIAdd(M);
          var E = this.x.redMul(c).redISub(M);
          E = (E = E.redIAdd(E)).redIAdd(E);
          var S = this.y.redMul(b.redMul(m.redISub(b)).redISub(d.redMul(c)));
          S = (S = (S = S.redIAdd(S)).redIAdd(S)).redIAdd(S);
          var B = this.z.redAdd(d).redSqr().redISub(f).redISub(c);
          return this.curve.jpoint(E, S, B);
        }),
        (Ft.prototype.mul = function (t, e) {
          return (t = new $(t, e)), this.curve._wnafMul(this, t);
        }),
        (Ft.prototype.eq = function (t) {
          if ("affine" === t.type) return this.eq(t.toJ());
          if (this === t) return !0;
          var e = this.z.redSqr(),
            f = t.z.redSqr();
          if (0 !== this.x.redMul(f).redISub(t.x.redMul(e)).cmpn(0)) return !1;
          var h = e.redMul(this.z),
            u = f.redMul(t.z);
          return 0 === this.y.redMul(u).redISub(t.y.redMul(h)).cmpn(0);
        }),
        (Ft.prototype.eqXToP = function (t) {
          var e = this.z.redSqr(),
            f = t.toRed(this.curve.red).redMul(e);
          if (0 === this.x.cmp(f)) return !0;
          for (var h = t.clone(), u = this.curve.redN.redMul(e); ; ) {
            if ((h.iadd(this.curve.n), h.cmp(this.curve.p) >= 0)) return !1;
            if ((f.redIAdd(u), 0 === this.x.cmp(f))) return !0;
          }
        }),
        (Ft.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC JPoint Infinity>"
            : "<EC JPoint x: " +
                this.x.toString(16, 2) +
                " y: " +
                this.y.toString(16, 2) +
                " z: " +
                this.z.toString(16, 2) +
                ">";
        }),
        (Ft.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        });
      var em = lr(function (t, e) {
          (e.base = Ce), (e.short = te), (e.mont = null), (e.edwards = null);
        }),
        eg = lr(function (t, e) {
          var f,
            h = eu.assert;
          function n(t) {
            "short" === t.type
              ? (this.curve = new em.short(t))
              : "edwards" === t.type
              ? (this.curve = new em.edwards(t))
              : (this.curve = new em.mont(t)),
              (this.g = this.curve.g),
              (this.n = this.curve.n),
              (this.hash = t.hash),
              h(this.g.validate(), "Invalid curve"),
              h(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
          }
          function o(t, f) {
            Object.defineProperty(e, t, {
              configurable: !0,
              enumerable: !0,
              get: function () {
                var h = new n(f);
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: h,
                  }),
                  h
                );
              },
            });
          }
          (e.PresetCurve = n),
            o("p192", {
              type: "short",
              prime: "p192",
              p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
              b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
              n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
              hash: tw.sha256,
              gRed: !1,
              g: [
                "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
                "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
              ],
            }),
            o("p224", {
              type: "short",
              prime: "p224",
              p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
              a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
              b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
              n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
              hash: tw.sha256,
              gRed: !1,
              g: [
                "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
                "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
              ],
            }),
            o("p256", {
              type: "short",
              prime: null,
              p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
              a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
              b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
              n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
              hash: tw.sha256,
              gRed: !1,
              g: [
                "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
                "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
              ],
            }),
            o("p384", {
              type: "short",
              prime: null,
              p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
              a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
              b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
              n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
              hash: tw.sha384,
              gRed: !1,
              g: [
                "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
                "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
              ],
            }),
            o("p521", {
              type: "short",
              prime: null,
              p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
              a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
              b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
              n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
              hash: tw.sha512,
              gRed: !1,
              g: [
                "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
                "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
              ],
            }),
            o("curve25519", {
              type: "mont",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "76d06",
              b: "1",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: tw.sha256,
              gRed: !1,
              g: ["9"],
            }),
            o("ed25519", {
              type: "edwards",
              prime: "p25519",
              p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
              a: "-1",
              c: "1",
              d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
              n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
              hash: tw.sha256,
              gRed: !1,
              g: [
                "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
                "6666666666666666666666666666666666666666666666666666666666666658",
              ],
            });
          try {
            f = null.crash();
          } catch {
            f = void 0;
          }
          o("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: tw.sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda:
              "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [
              {
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3",
              },
              {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15",
              },
            ],
            gRed: !1,
            g: [
              "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
              "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
              f,
            ],
          });
        });
      function Re(t) {
        if (!(this instanceof Re)) return new Re(t);
        (this.hash = t.hash),
          (this.predResist = !!t.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = t.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var e = eh.toArray(t.entropy, t.entropyEnc || "hex"),
          f = eh.toArray(t.nonce, t.nonceEnc || "hex"),
          h = eh.toArray(t.pers, t.persEnc || "hex");
        ef(
          e.length >= this.minEntropy / 8,
          "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
        ),
          this._init(e, f, h);
      }
      (Re.prototype._init = function (t, e, f) {
        var h = t.concat(e).concat(f);
        (this.K = Array(this.outLen / 8)), (this.V = Array(this.outLen / 8));
        for (var u = 0; u < this.V.length; u++)
          (this.K[u] = 0), (this.V[u] = 1);
        this._update(h),
          (this._reseed = 1),
          (this.reseedInterval = 281474976710656);
      }),
        (Re.prototype._hmac = function () {
          return new tw.hmac(this.hash, this.K);
        }),
        (Re.prototype._update = function (t) {
          var e = this._hmac().update(this.V).update([0]);
          t && (e = e.update(t)),
            (this.K = e.digest()),
            (this.V = this._hmac().update(this.V).digest()),
            t &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(t)
                .digest()),
              (this.V = this._hmac().update(this.V).digest()));
        }),
        (Re.prototype.reseed = function (t, e, f, h) {
          "string" != typeof e && ((h = f), (f = e), (e = null)),
            (t = eh.toArray(t, e)),
            (f = eh.toArray(f, h)),
            ef(
              t.length >= this.minEntropy / 8,
              "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
            ),
            this._update(t.concat(f || [])),
            (this._reseed = 1);
        }),
        (Re.prototype.generate = function (t, e, f, h) {
          if (this._reseed > this.reseedInterval)
            throw Error("Reseed is required");
          "string" != typeof e && ((h = f), (f = e), (e = null)),
            f && ((f = eh.toArray(f, h || "hex")), this._update(f));
          for (var u = []; u.length < t; )
            (this.V = this._hmac().update(this.V).digest()),
              (u = u.concat(this.V));
          var l = u.slice(0, t);
          return this._update(f), this._reseed++, eh.encode(l, e);
        });
      var eA = eu.assert;
      function kt(t, e) {
        (this.ec = t),
          (this.priv = null),
          (this.pub = null),
          e.priv && this._importPrivate(e.priv, e.privEnc),
          e.pub && this._importPublic(e.pub, e.pubEnc);
      }
      (kt.fromPublic = function (t, e, f) {
        return e instanceof kt ? e : new kt(t, { pub: e, pubEnc: f });
      }),
        (kt.fromPrivate = function (t, e, f) {
          return e instanceof kt ? e : new kt(t, { priv: e, privEnc: f });
        }),
        (kt.prototype.validate = function () {
          var t = this.getPublic();
          return t.isInfinity()
            ? { result: !1, reason: "Invalid public key" }
            : t.validate()
            ? t.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: "Public key * N != O" }
            : { result: !1, reason: "Public key is not a point" };
        }),
        (kt.prototype.getPublic = function (t, e) {
          return (
            "string" == typeof t && ((e = t), (t = null)),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            e ? this.pub.encode(e, t) : this.pub
          );
        }),
        (kt.prototype.getPrivate = function (t) {
          return "hex" === t ? this.priv.toString(16, 2) : this.priv;
        }),
        (kt.prototype._importPrivate = function (t, e) {
          (this.priv = new $(t, e || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        (kt.prototype._importPublic = function (t, e) {
          if (t.x || t.y) {
            "mont" === this.ec.curve.type
              ? eA(t.x, "Need x coordinate")
              : ("short" === this.ec.curve.type ||
                  "edwards" === this.ec.curve.type) &&
                eA(t.x && t.y, "Need both x and y coordinate"),
              (this.pub = this.ec.curve.point(t.x, t.y));
            return;
          }
          this.pub = this.ec.curve.decodePoint(t, e);
        }),
        (kt.prototype.derive = function (t) {
          return (
            t.validate() || eA(t.validate(), "public point not validated"),
            t.mul(this.priv).getX()
          );
        }),
        (kt.prototype.sign = function (t, e, f) {
          return this.ec.sign(t, this, e, f);
        }),
        (kt.prototype.verify = function (t, e) {
          return this.ec.verify(t, e, this);
        }),
        (kt.prototype.inspect = function () {
          return (
            "<Key priv: " +
            (this.priv && this.priv.toString(16, 2)) +
            " pub: " +
            (this.pub && this.pub.inspect()) +
            " >"
          );
        });
      var ev = eu.assert;
      function Qr(t, e) {
        if (t instanceof Qr) return t;
        this._importDER(t, e) ||
          (ev(t.r && t.s, "Signature without r or s"),
          (this.r = new $(t.r, 16)),
          (this.s = new $(t.s, 16)),
          void 0 === t.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = t.recoveryParam));
      }
      function Xa() {
        this.place = 0;
      }
      function zi(t, e) {
        var f = t[e.place++];
        if (!(128 & f)) return f;
        var h = 15 & f;
        if (0 === h || h > 4) return !1;
        for (var u = 0, l = 0, d = e.place; l < h; l++, d++)
          (u <<= 8), (u |= t[d]), (u >>>= 0);
        return !(u <= 127) && ((e.place = d), u);
      }
      function Kf(t) {
        for (var e = 0, f = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < f; )
          e++;
        return 0 === e ? t : t.slice(e);
      }
      function ji(t, e) {
        if (e < 128) {
          t.push(e);
          return;
        }
        var f = 1 + ((Math.log(e) / Math.LN2) >>> 3);
        for (t.push(128 | f); --f; ) t.push((e >>> (f << 3)) & 255);
        t.push(e);
      }
      (Qr.prototype._importDER = function (t, e) {
        t = eu.toArray(t, e);
        var f = new Xa();
        if (48 !== t[f.place++]) return !1;
        var h = zi(t, f);
        if (!1 === h || h + f.place !== t.length || 2 !== t[f.place++])
          return !1;
        var u = zi(t, f);
        if (!1 === u) return !1;
        var l = t.slice(f.place, u + f.place);
        if (((f.place += u), 2 !== t[f.place++])) return !1;
        var d = zi(t, f);
        if (!1 === d || t.length !== d + f.place) return !1;
        var c = t.slice(f.place, d + f.place);
        if (0 === l[0]) {
          if (!(128 & l[1])) return !1;
          l = l.slice(1);
        }
        if (0 === c[0]) {
          if (!(128 & c[1])) return !1;
          c = c.slice(1);
        }
        return (
          (this.r = new $(l)),
          (this.s = new $(c)),
          (this.recoveryParam = null),
          !0
        );
      }),
        (Qr.prototype.toDER = function (t) {
          var e = this.r.toArray(),
            f = this.s.toArray();
          for (
            128 & e[0] && (e = [0].concat(e)),
              128 & f[0] && (f = [0].concat(f)),
              e = Kf(e),
              f = Kf(f);
            !f[0] && !(128 & f[1]);

          )
            f = f.slice(1);
          var h = [2];
          ji(h, e.length), (h = h.concat(e)).push(2), ji(h, f.length);
          var u = h.concat(f),
            l = [48];
          return ji(l, u.length), (l = l.concat(u)), eu.encode(l, t);
        });
      var $a = function () {
          throw Error("unsupported");
        },
        eb = eu.assert;
      function ee(t) {
        if (!(this instanceof ee)) return new ee(t);
        "string" == typeof t &&
          (eb(
            Object.prototype.hasOwnProperty.call(eg, t),
            "Unknown curve " + t
          ),
          (t = eg[t])),
          t instanceof eg.PresetCurve && (t = { curve: t }),
          (this.curve = t.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = t.curve.g),
          this.g.precompute(t.curve.n.bitLength() + 1),
          (this.hash = t.hash || t.curve.hash);
      }
      (ee.prototype.keyPair = function (t) {
        return new kt(this, t);
      }),
        (ee.prototype.keyFromPrivate = function (t, e) {
          return kt.fromPrivate(this, t, e);
        }),
        (ee.prototype.keyFromPublic = function (t, e) {
          return kt.fromPublic(this, t, e);
        }),
        (ee.prototype.genKeyPair = function (t) {
          t || (t = {});
          for (
            var e = new Re({
                hash: this.hash,
                pers: t.pers,
                persEnc: t.persEnc || "utf8",
                entropy: t.entropy || $a(this.hash.hmacStrength),
                entropyEnc: (t.entropy && t.entropyEnc) || "utf8",
                nonce: this.n.toArray(),
              }),
              f = this.n.byteLength(),
              h = this.n.sub(new $(2));
            ;

          ) {
            var u = new $(e.generate(f));
            if (!(u.cmp(h) > 0)) return u.iaddn(1), this.keyFromPrivate(u);
          }
        }),
        (ee.prototype._truncateToN = function (t, e) {
          var f = 8 * t.byteLength() - this.n.bitLength();
          return (
            f > 0 && (t = t.ushrn(f)),
            !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
          );
        }),
        (ee.prototype.sign = function (t, e, f, h) {
          "object" == typeof f && ((h = f), (f = null)),
            h || (h = {}),
            (e = this.keyFromPrivate(e, f)),
            (t = this._truncateToN(new $(t, 16)));
          for (
            var u = this.n.byteLength(),
              l = e.getPrivate().toArray("be", u),
              d = t.toArray("be", u),
              c = new Re({
                hash: this.hash,
                entropy: l,
                nonce: d,
                pers: h.pers,
                persEnc: h.persEnc || "utf8",
              }),
              m = this.n.sub(new $(1)),
              b = 0;
            ;
            b++
          ) {
            var M = h.k ? h.k(b) : new $(c.generate(this.n.byteLength()));
            if (
              !(0 >= (M = this._truncateToN(M, !0)).cmpn(1) || M.cmp(m) >= 0)
            ) {
              var E = this.g.mul(M);
              if (!E.isInfinity()) {
                var S = E.getX(),
                  B = S.umod(this.n);
                if (0 !== B.cmpn(0)) {
                  var I = M.invm(this.n).mul(B.mul(e.getPrivate()).iadd(t));
                  if (0 !== (I = I.umod(this.n)).cmpn(0)) {
                    var N =
                      (E.getY().isOdd() ? 1 : 0) | (0 !== S.cmp(B) ? 2 : 0);
                    return (
                      h.canonical &&
                        I.cmp(this.nh) > 0 &&
                        ((I = this.n.sub(I)), (N ^= 1)),
                      new Qr({ r: B, s: I, recoveryParam: N })
                    );
                  }
                }
              }
            }
          }
        }),
        (ee.prototype.verify = function (t, e, f, h) {
          (t = this._truncateToN(new $(t, 16))), (f = this.keyFromPublic(f, h));
          var u = (e = new Qr(e, "hex")).r,
            l = e.s;
          if (
            0 > u.cmpn(1) ||
            u.cmp(this.n) >= 0 ||
            0 > l.cmpn(1) ||
            l.cmp(this.n) >= 0
          )
            return !1;
          var d,
            c = l.invm(this.n),
            m = c.mul(t).umod(this.n),
            b = c.mul(u).umod(this.n);
          return this.curve._maxwellTrick
            ? !(d = this.g.jmulAdd(m, f.getPublic(), b)).isInfinity() &&
                d.eqXToP(u)
            : !(d = this.g.mulAdd(m, f.getPublic(), b)).isInfinity() &&
                0 === d.getX().umod(this.n).cmp(u);
        }),
        (ee.prototype.recoverPubKey = function (t, e, f, h) {
          eb((3 & f) === f, "The recovery param is more than two bits"),
            (e = new Qr(e, h));
          var u = this.n,
            l = new $(t),
            d = e.r,
            c = e.s,
            m = 1 & f,
            b = f >> 1;
          if (d.cmp(this.curve.p.umod(this.curve.n)) >= 0 && b)
            throw Error("Unable to find sencond key candinate");
          d = b
            ? this.curve.pointFromX(d.add(this.curve.n), m)
            : this.curve.pointFromX(d, m);
          var M = e.r.invm(u),
            E = u.sub(l).mul(M).umod(u),
            S = c.mul(M).umod(u);
          return this.g.mulAdd(E, d, S);
        }),
        (ee.prototype.getKeyRecoveryParam = function (t, e, f, h) {
          if (null !== (e = new Qr(e, h)).recoveryParam) return e.recoveryParam;
          for (var u, l = 0; l < 4; l++) {
            try {
              u = this.recoverPubKey(t, e, l);
            } catch {
              continue;
            }
            if (u.eq(f)) return l;
          }
          throw Error("Unable to find valid recovery factor");
        }),
        lr(function (t, e) {
          (e.version = "6.5.4"),
            (e.utils = eu),
            (e.rand = function () {
              throw Error("unsupported");
            }),
            (e.curve = em),
            (e.curves = eg),
            (e.ec = ee),
            (e.eddsa = null);
        }).ec,
        new z("signing-key/5.7.0"),
        new z("transactions/5.7.0"),
        ((N = M || (M = {}))[(N.legacy = 0)] = "legacy"),
        (N[(N.eip2930 = 1)] = "eip2930"),
        (N[(N.eip1559 = 2)] = "eip1559"),
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      let ey = {
        INVALID_METHOD: { message: "Invalid method.", code: 1001 },
        INVALID_EVENT: { message: "Invalid event.", code: 1002 },
        INVALID_UPDATE_REQUEST: {
          message: "Invalid update request.",
          code: 1003,
        },
        INVALID_EXTEND_REQUEST: {
          message: "Invalid extend request.",
          code: 1004,
        },
        INVALID_SESSION_SETTLE_REQUEST: {
          message: "Invalid session settle request.",
          code: 1005,
        },
        UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
        UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
        UNAUTHORIZED_UPDATE_REQUEST: {
          message: "Unauthorized update request.",
          code: 3003,
        },
        UNAUTHORIZED_EXTEND_REQUEST: {
          message: "Unauthorized extend request.",
          code: 3004,
        },
        USER_REJECTED: { message: "User rejected.", code: 5e3 },
        USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
        USER_REJECTED_METHODS: {
          message: "User rejected methods.",
          code: 5002,
        },
        USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
        UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
        UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
        UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
        UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
        UNSUPPORTED_NAMESPACE_KEY: {
          message: "Unsupported namespace key.",
          code: 5104,
        },
        USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
        SESSION_SETTLEMENT_FAILED: {
          message: "Session settlement failed.",
          code: 7e3,
        },
        WC_METHOD_UNSUPPORTED: {
          message: "Unsupported wc_ method.",
          code: 10001,
        },
      };
      function er(t, e) {
        let { message: f, code: h } = ey[t];
        return { message: e ? `${f} ${e}` : f, code: h };
      }
      function Nr(t, e) {
        return (
          !!Array.isArray(t) && (!("u" > typeof e) || !t.length || t.every(e))
        );
      }
    },
  },
]);
