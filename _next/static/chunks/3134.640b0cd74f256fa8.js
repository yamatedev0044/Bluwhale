(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3134],
  {
    64227: function (e, t) {
      "use strict";
      function number(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error(`positive integer expected, not ${e}`);
      }
      function bool(e) {
        if ("boolean" != typeof e) throw Error(`boolean expected, not ${e}`);
      }
      function isBytes(e) {
        return (
          e instanceof Uint8Array ||
          (null != e &&
            "object" == typeof e &&
            "Uint8Array" === e.constructor.name)
        );
      }
      function bytes(e, ...t) {
        if (!isBytes(e)) throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            `Uint8Array expected of length ${t}, not of length=${e.length}`
          );
      }
      function hash(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        number(e.outputLen), number(e.blockLen);
      }
      function exists(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function output(e, t) {
        bytes(e);
        let n = t.outputLen;
        if (e.length < n)
          throw Error(
            `digestInto() expects output buffer of length at least ${n}`
          );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBytes = isBytes),
        (t.number = number),
        (t.bool = bool),
        (t.bytes = bytes),
        (t.hash = hash),
        (t.exists = exists),
        (t.output = output),
        (t.default = { number, bool, bytes, hash, exists, output });
    },
    37401: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.add5L =
          t.add5H =
          t.add4H =
          t.add4L =
          t.add3H =
          t.add3L =
          t.rotlBL =
          t.rotlBH =
          t.rotlSL =
          t.rotlSH =
          t.rotr32L =
          t.rotr32H =
          t.rotrBL =
          t.rotrBH =
          t.rotrSL =
          t.rotrSH =
          t.shrSL =
          t.shrSH =
          t.toBig =
            void 0),
        (t.fromBig = fromBig),
        (t.split = split),
        (t.add = add);
      let n = BigInt(4294967296 - 1),
        s = BigInt(32);
      function fromBig(e, t = !1) {
        return t
          ? { h: Number(e & n), l: Number((e >> s) & n) }
          : { h: 0 | Number((e >> s) & n), l: 0 | Number(e & n) };
      }
      function split(e, t = !1) {
        let n = new Uint32Array(e.length),
          s = new Uint32Array(e.length);
        for (let i = 0; i < e.length; i++) {
          let { h: a, l: o } = fromBig(e[i], t);
          [n[i], s[i]] = [a, o];
        }
        return [n, s];
      }
      let toBig = (e, t) => (BigInt(e >>> 0) << s) | BigInt(t >>> 0);
      t.toBig = toBig;
      let shrSH = (e, t, n) => e >>> n;
      t.shrSH = shrSH;
      let shrSL = (e, t, n) => (e << (32 - n)) | (t >>> n);
      t.shrSL = shrSL;
      let rotrSH = (e, t, n) => (e >>> n) | (t << (32 - n));
      t.rotrSH = rotrSH;
      let rotrSL = (e, t, n) => (e << (32 - n)) | (t >>> n);
      t.rotrSL = rotrSL;
      let rotrBH = (e, t, n) => (e << (64 - n)) | (t >>> (n - 32));
      t.rotrBH = rotrBH;
      let rotrBL = (e, t, n) => (e >>> (n - 32)) | (t << (64 - n));
      t.rotrBL = rotrBL;
      let rotr32H = (e, t) => t;
      t.rotr32H = rotr32H;
      let rotr32L = (e, t) => e;
      t.rotr32L = rotr32L;
      let rotlSH = (e, t, n) => (e << n) | (t >>> (32 - n));
      t.rotlSH = rotlSH;
      let rotlSL = (e, t, n) => (t << n) | (e >>> (32 - n));
      t.rotlSL = rotlSL;
      let rotlBH = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n));
      t.rotlBH = rotlBH;
      let rotlBL = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n));
      function add(e, t, n, s) {
        let i = (t >>> 0) + (s >>> 0);
        return { h: (e + n + ((i / 4294967296) | 0)) | 0, l: 0 | i };
      }
      t.rotlBL = rotlBL;
      let add3L = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0);
      t.add3L = add3L;
      let add3H = (e, t, n, s) => (t + n + s + ((e / 4294967296) | 0)) | 0;
      t.add3H = add3H;
      let add4L = (e, t, n, s) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (s >>> 0);
      t.add4L = add4L;
      let add4H = (e, t, n, s, i) =>
        (t + n + s + i + ((e / 4294967296) | 0)) | 0;
      t.add4H = add4H;
      let add5L = (e, t, n, s, i) =>
        (e >>> 0) + (t >>> 0) + (n >>> 0) + (s >>> 0) + (i >>> 0);
      t.add5L = add5L;
      let add5H = (e, t, n, s, i, a) =>
        (t + n + s + i + a + ((e / 4294967296) | 0)) | 0;
      (t.add5H = add5H),
        (t.default = {
          fromBig,
          split,
          toBig,
          shrSH,
          shrSL,
          rotrSH,
          rotrSL,
          rotrBH,
          rotrBL,
          rotr32H,
          rotr32L,
          rotlSH,
          rotlSL,
          rotlBH,
          rotlBL,
          add,
          add3L,
          add3H,
          add4L,
          add4H,
          add5H,
          add5L,
        });
    },
    84886: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.crypto = void 0),
        (t.crypto =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0);
    },
    48653: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.shake256 =
          t.shake128 =
          t.keccak_512 =
          t.keccak_384 =
          t.keccak_256 =
          t.keccak_224 =
          t.sha3_512 =
          t.sha3_384 =
          t.sha3_256 =
          t.sha3_224 =
          t.Keccak =
            void 0),
        (t.keccakP = keccakP);
      let s = n(64227),
        i = n(37401),
        a = n(9184),
        o = [],
        l = [],
        c = [],
        d = BigInt(0),
        u = BigInt(1),
        h = BigInt(2),
        p = BigInt(7),
        y = BigInt(256),
        b = BigInt(113);
      for (let e = 0, t = u, n = 1, s = 0; e < 24; e++) {
        ([n, s] = [s, (2 * n + 3 * s) % 5]),
          o.push(2 * (5 * s + n)),
          l.push((((e + 1) * (e + 2)) / 2) % 64);
        let i = d;
        for (let e = 0; e < 7; e++)
          (t = ((t << u) ^ ((t >> p) * b)) % y) & h &&
            (i ^= u << ((u << BigInt(e)) - u));
        c.push(i);
      }
      let [v, E] = (0, i.split)(c, !0),
        rotlH = (e, t, n) =>
          n > 32 ? (0, i.rotlBH)(e, t, n) : (0, i.rotlSH)(e, t, n),
        rotlL = (e, t, n) =>
          n > 32 ? (0, i.rotlBL)(e, t, n) : (0, i.rotlSL)(e, t, n);
      function keccakP(e, t = 24) {
        let n = new Uint32Array(10);
        for (let s = 24 - t; s < 24; s++) {
          for (let t = 0; t < 10; t++)
            n[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
          for (let t = 0; t < 10; t += 2) {
            let s = (t + 8) % 10,
              i = (t + 2) % 10,
              a = n[i],
              o = n[i + 1],
              l = rotlH(a, o, 1) ^ n[s],
              c = rotlL(a, o, 1) ^ n[s + 1];
            for (let n = 0; n < 50; n += 10)
              (e[t + n] ^= l), (e[t + n + 1] ^= c);
          }
          let t = e[2],
            i = e[3];
          for (let n = 0; n < 24; n++) {
            let s = l[n],
              a = rotlH(t, i, s),
              c = rotlL(t, i, s),
              d = o[n];
            (t = e[d]), (i = e[d + 1]), (e[d] = a), (e[d + 1] = c);
          }
          for (let t = 0; t < 50; t += 10) {
            for (let s = 0; s < 10; s++) n[s] = e[t + s];
            for (let s = 0; s < 10; s++)
              e[t + s] ^= ~n[(s + 2) % 10] & n[(s + 4) % 10];
          }
          (e[0] ^= v[s]), (e[1] ^= E[s]);
        }
        n.fill(0);
      }
      let Keccak = class Keccak extends a.Hash {
        constructor(e, t, n, i = !1, o = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = n),
            (this.enableXOF = i),
            (this.rounds = o),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, s.number)(n),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, a.u32)(this.state));
        }
        keccak() {
          a.isLE || (0, a.byteSwap32)(this.state32),
            keccakP(this.state32, this.rounds),
            a.isLE || (0, a.byteSwap32)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, s.exists)(this);
          let { blockLen: t, state: n } = this;
          e = (0, a.toBytes)(e);
          let i = e.length;
          for (let s = 0; s < i; ) {
            let a = Math.min(t - this.pos, i - s);
            for (let t = 0; t < a; t++) n[this.pos++] ^= e[s++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: n, blockLen: s } = this;
          (e[n] ^= t),
            (128 & t) != 0 && n === s - 1 && this.keccak(),
            (e[s - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, s.exists)(this, !1), (0, s.bytes)(e), this.finish();
          let t = this.state,
            { blockLen: n } = this;
          for (let s = 0, i = e.length; s < i; ) {
            this.posOut >= n && this.keccak();
            let a = Math.min(n - this.posOut, i - s);
            e.set(t.subarray(this.posOut, this.posOut + a), s),
              (this.posOut += a),
              (s += a);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (0, s.number)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, s.output)(e, this), this.finished))
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
            outputLen: s,
            rounds: i,
            enableXOF: a,
          } = this;
          return (
            e || (e = new Keccak(t, n, s, a, i)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = i),
            (e.suffix = n),
            (e.outputLen = s),
            (e.enableXOF = a),
            (e.destroyed = this.destroyed),
            e
          );
        }
      };
      t.Keccak = Keccak;
      let gen = (e, t, n) => (0, a.wrapConstructor)(() => new Keccak(t, e, n));
      (t.sha3_224 = gen(6, 144, 28)),
        (t.sha3_256 = gen(6, 136, 32)),
        (t.sha3_384 = gen(6, 104, 48)),
        (t.sha3_512 = gen(6, 72, 64)),
        (t.keccak_224 = gen(1, 144, 28)),
        (t.keccak_256 = gen(1, 136, 32)),
        (t.keccak_384 = gen(1, 104, 48)),
        (t.keccak_512 = gen(1, 72, 64));
      let genShake = (e, t, n) =>
        (0, a.wrapXOFConstructorWithOpts)(
          (s = {}) => new Keccak(t, e, void 0 === s.dkLen ? n : s.dkLen, !0)
        );
      (t.shake128 = genShake(31, 168, 16)),
        (t.shake256 = genShake(31, 136, 32));
    },
    9184: function (e, t, n) {
      "use strict";
      /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ Object.defineProperty(
        t,
        "__esModule",
        { value: !0 }
      ),
        (t.Hash =
          t.nextTick =
          t.byteSwapIfBE =
          t.byteSwap =
          t.isLE =
          t.rotl =
          t.rotr =
          t.createView =
          t.u32 =
          t.u8 =
            void 0),
        (t.isBytes = function (e) {
          return (
            e instanceof Uint8Array ||
            (null != e &&
              "object" == typeof e &&
              "Uint8Array" === e.constructor.name)
          );
        }),
        (t.byteSwap32 = function (e) {
          for (let n = 0; n < e.length; n++) e[n] = (0, t.byteSwap)(e[n]);
        }),
        (t.bytesToHex = function (e) {
          (0, i.bytes)(e);
          let t = "";
          for (let n = 0; n < e.length; n++) t += a[e[n]];
          return t;
        }),
        (t.hexToBytes = function (e) {
          if ("string" != typeof e)
            throw Error("hex string expected, got " + typeof e);
          let t = e.length,
            n = t / 2;
          if (t % 2)
            throw Error(
              "padded hex string expected, got unpadded hex of length " + t
            );
          let s = new Uint8Array(n);
          for (let t = 0, i = 0; t < n; t++, i += 2) {
            let n = asciiToBase16(e.charCodeAt(i)),
              a = asciiToBase16(e.charCodeAt(i + 1));
            if (void 0 === n || void 0 === a) {
              let t = e[i] + e[i + 1];
              throw Error(
                'hex string expected, got non-hex character "' +
                  t +
                  '" at index ' +
                  i
              );
            }
            s[t] = 16 * n + a;
          }
          return s;
        }),
        (t.asyncLoop = asyncLoop),
        (t.utf8ToBytes = utf8ToBytes),
        (t.toBytes = toBytes),
        (t.concatBytes = function (...e) {
          let t = 0;
          for (let n = 0; n < e.length; n++) {
            let s = e[n];
            (0, i.bytes)(s), (t += s.length);
          }
          let n = new Uint8Array(t);
          for (let t = 0, s = 0; t < e.length; t++) {
            let i = e[t];
            n.set(i, s), (s += i.length);
          }
          return n;
        }),
        (t.checkOpts = function (e, t) {
          if (void 0 !== t && "[object Object]" !== l.call(t))
            throw Error("Options should be object or undefined");
          let n = Object.assign(e, t);
          return n;
        }),
        (t.wrapConstructor = function (e) {
          let hashC = (t) => e().update(toBytes(t)).digest(),
            t = e();
          return (
            (hashC.outputLen = t.outputLen),
            (hashC.blockLen = t.blockLen),
            (hashC.create = () => e()),
            hashC
          );
        }),
        (t.wrapConstructorWithOpts = function (e) {
          let hashC = (t, n) => e(n).update(toBytes(t)).digest(),
            t = e({});
          return (
            (hashC.outputLen = t.outputLen),
            (hashC.blockLen = t.blockLen),
            (hashC.create = (t) => e(t)),
            hashC
          );
        }),
        (t.wrapXOFConstructorWithOpts = function (e) {
          let hashC = (t, n) => e(n).update(toBytes(t)).digest(),
            t = e({});
          return (
            (hashC.outputLen = t.outputLen),
            (hashC.blockLen = t.blockLen),
            (hashC.create = (t) => e(t)),
            hashC
          );
        }),
        (t.randomBytes = function (e = 32) {
          if (s.crypto && "function" == typeof s.crypto.getRandomValues)
            return s.crypto.getRandomValues(new Uint8Array(e));
          if (s.crypto && "function" == typeof s.crypto.randomBytes)
            return s.crypto.randomBytes(e);
          throw Error("crypto.getRandomValues must be defined");
        });
      let s = n(84886),
        i = n(64227);
      (t.u8 = (e) => new Uint8Array(e.buffer, e.byteOffset, e.byteLength)),
        (t.u32 = (e) =>
          new Uint32Array(
            e.buffer,
            e.byteOffset,
            Math.floor(e.byteLength / 4)
          )),
        (t.createView = (e) =>
          new DataView(e.buffer, e.byteOffset, e.byteLength)),
        (t.rotr = (e, t) => (e << (32 - t)) | (e >>> t)),
        (t.rotl = (e, t) => (e << t) | ((e >>> (32 - t)) >>> 0)),
        (t.isLE =
          68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0]),
        (t.byteSwap = (e) =>
          ((e << 24) & 4278190080) |
          ((e << 8) & 16711680) |
          ((e >>> 8) & 65280) |
          ((e >>> 24) & 255)),
        (t.byteSwapIfBE = t.isLE ? (e) => e : (e) => (0, t.byteSwap)(e));
      let a = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        ),
        o = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
      function asciiToBase16(e) {
        return e >= o._0 && e <= o._9
          ? e - o._0
          : e >= o._A && e <= o._F
          ? e - (o._A - 10)
          : e >= o._a && e <= o._f
          ? e - (o._a - 10)
          : void 0;
      }
      let nextTick = async () => {};
      async function asyncLoop(e, n, s) {
        let i = Date.now();
        for (let a = 0; a < e; a++) {
          s(a);
          let e = Date.now() - i;
          (e >= 0 && e < n) || (await (0, t.nextTick)(), (i += e));
        }
      }
      function utf8ToBytes(e) {
        if ("string" != typeof e)
          throw Error(`utf8ToBytes expected string, got ${typeof e}`);
        return new Uint8Array(new TextEncoder().encode(e));
      }
      function toBytes(e) {
        return "string" == typeof e && (e = utf8ToBytes(e)), (0, i.bytes)(e), e;
      }
      (t.nextTick = nextTick),
        (t.Hash = class {
          clone() {
            return this._cloneInto();
          }
        });
      let l = {}.toString;
    },
    86010: function (e, t, n) {
      "use strict";
      function clsx() {
        for (var e, t, n = 0, s = ""; n < arguments.length; )
          (e = arguments[n++]) &&
            (t = (function r(e) {
              var t,
                n,
                s = "";
              if ("string" == typeof e || "number" == typeof e) s += e;
              else if ("object" == typeof e) {
                if (Array.isArray(e))
                  for (t = 0; t < e.length; t++)
                    e[t] && (n = r(e[t])) && (s && (s += " "), (s += n));
                else for (t in e) e[t] && (s && (s += " "), (s += t));
              }
              return s;
            })(e)) &&
            (s && (s += " "), (s += t));
        return s;
      }
      n.r(t),
        n.d(t, {
          clsx: function () {
            return clsx;
          },
        }),
        (t.default = clsx);
    },
    35967: function (e, t, n) {
      var s = n(48764).Buffer;
      let i = n(91686);
      function elementaryName(e) {
        if (e.startsWith("int[")) return "int256" + e.slice(3);
        if ("int" === e) return "int256";
        if (e.startsWith("uint[")) return "uint256" + e.slice(4);
        if ("uint" === e) return "uint256";
        if (e.startsWith("fixed[")) return "fixed128x128" + e.slice(5);
        if ("fixed" === e) return "fixed128x128";
        if (e.startsWith("ufixed[")) return "ufixed128x128" + e.slice(6);
        else if ("ufixed" === e) return "ufixed128x128";
        return e;
      }
      function parseTypeN(e) {
        return Number.parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
      }
      function parseTypeNxM(e) {
        var t = /^\D+(\d+)x(\d+)$/.exec(e);
        return [Number.parseInt(t[1], 10), Number.parseInt(t[2], 10)];
      }
      function parseTypeArray(e) {
        var t = e.match(/(.*)\[(.*?)\]$/);
        return t ? ("" === t[2] ? "dynamic" : Number.parseInt(t[2], 10)) : null;
      }
      function parseNumber(e) {
        var t = typeof e;
        if ("string" === t || "number" === t) return BigInt(e);
        if ("bigint" === t) return e;
        throw Error("Argument is not a number");
      }
      function encodeSingle(e, t) {
        if ("address" === e) return encodeSingle("uint160", parseNumber(t));
        if ("bool" === e) return encodeSingle("uint8", t ? 1 : 0);
        if ("string" === e) return encodeSingle("bytes", new s(t, "utf8"));
        if ((c = e).lastIndexOf("]") === c.length - 1) {
          if (void 0 === t.length) throw Error("Not an array?");
          if ("dynamic" !== (n = parseTypeArray(e)) && 0 !== n && t.length > n)
            throw Error("Elements exceed array size: " + n);
          for (l in ((o = []),
          (e = e.slice(0, e.lastIndexOf("["))),
          "string" == typeof t && (t = JSON.parse(t)),
          t))
            o.push(encodeSingle(e, t[l]));
          if ("dynamic" === n) {
            var n,
              a,
              o,
              l,
              c,
              d = encodeSingle("uint256", t.length);
            o.unshift(d);
          }
          return s.concat(o);
        }
        if ("bytes" === e)
          return (
            (t = new s(t)),
            (o = s.concat([encodeSingle("uint256", t.length), t])),
            t.length % 32 != 0 &&
              (o = s.concat([o, i.zeros(32 - (t.length % 32))])),
            o
          );
        if (e.startsWith("bytes")) {
          if ((n = parseTypeN(e)) < 1 || n > 32)
            throw Error("Invalid bytes<N> width: " + n);
          return i.setLengthRight(t, 32);
        } else if (e.startsWith("uint")) {
          if ((n = parseTypeN(e)) % 8 || n < 8 || n > 256)
            throw Error("Invalid uint<N> width: " + n);
          a = parseNumber(t);
          let s = i.bitLengthFromBigInt(a);
          if (s > n)
            throw Error("Supplied uint exceeds width: " + n + " vs " + s);
          if (a < 0) throw Error("Supplied uint is negative");
          return i.bufferBEFromBigInt(a, 32);
        } else if (e.startsWith("int")) {
          if ((n = parseTypeN(e)) % 8 || n < 8 || n > 256)
            throw Error("Invalid int<N> width: " + n);
          a = parseNumber(t);
          let s = i.bitLengthFromBigInt(a);
          if (s > n)
            throw Error("Supplied int exceeds width: " + n + " vs " + s);
          let o = i.twosFromBigInt(a, 256);
          return i.bufferBEFromBigInt(o, 32);
        } else if (e.startsWith("ufixed")) {
          if (((n = parseTypeNxM(e)), (a = parseNumber(t)) < 0))
            throw Error("Supplied ufixed is negative");
          return encodeSingle("uint256", a * BigInt(2) ** BigInt(n[1]));
        } else if (e.startsWith("fixed"))
          return (
            (n = parseTypeNxM(e)),
            encodeSingle("int256", parseNumber(t) * BigInt(2) ** BigInt(n[1]))
          );
        throw Error("Unsupported or invalid type: " + e);
      }
      function solidityPack(e, t) {
        if (e.length !== t.length)
          throw Error("Number of types are not matching the values");
        for (var n, a, o = [], l = 0; l < e.length; l++) {
          var c = elementaryName(e[l]),
            d = t[l];
          if ("bytes" === c) o.push(d);
          else if ("string" === c) o.push(new s(d, "utf8"));
          else if ("bool" === c) o.push(new s(d ? "01" : "00", "hex"));
          else if ("address" === c) o.push(i.setLength(d, 20));
          else if (c.startsWith("bytes")) {
            if ((n = parseTypeN(c)) < 1 || n > 32)
              throw Error("Invalid bytes<N> width: " + n);
            o.push(i.setLengthRight(d, n));
          } else if (c.startsWith("uint")) {
            if ((n = parseTypeN(c)) % 8 || n < 8 || n > 256)
              throw Error("Invalid uint<N> width: " + n);
            a = parseNumber(d);
            let e = i.bitLengthFromBigInt(a);
            if (e > n)
              throw Error("Supplied uint exceeds width: " + n + " vs " + e);
            o.push(i.bufferBEFromBigInt(a, n / 8));
          } else if (c.startsWith("int")) {
            if ((n = parseTypeN(c)) % 8 || n < 8 || n > 256)
              throw Error("Invalid int<N> width: " + n);
            a = parseNumber(d);
            let e = i.bitLengthFromBigInt(a);
            if (e > n)
              throw Error("Supplied int exceeds width: " + n + " vs " + e);
            let t = i.twosFromBigInt(a, n);
            o.push(i.bufferBEFromBigInt(t, n / 8));
          } else throw Error("Unsupported or invalid type: " + c);
        }
        return s.concat(o);
      }
      e.exports = {
        rawEncode: function (e, t) {
          var n = [],
            i = [],
            a = 32 * e.length;
          for (var o in e) {
            var l = elementaryName(e[o]),
              c = encodeSingle(l, t[o]);
            "string" === l || "bytes" === l || "dynamic" === parseTypeArray(l)
              ? (n.push(encodeSingle("uint256", a)), i.push(c), (a += c.length))
              : n.push(c);
          }
          return s.concat(n.concat(i));
        },
        solidityPack,
        soliditySHA3: function (e, t) {
          return i.keccak(solidityPack(e, t));
        },
      };
    },
    93185: function (e, t, n) {
      var s = n(48764).Buffer;
      let i = n(91686),
        a = n(35967),
        o = {
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
        l = {
          encodeData(e, t, n, o = !0) {
            let l = ["bytes32"],
              c = [this.hashType(e, n)];
            if (o) {
              let encodeField = (e, t, l) => {
                if (void 0 !== n[t])
                  return [
                    "bytes32",
                    null == l
                      ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                      : i.keccak(this.encodeData(t, l, n, o)),
                  ];
                if (void 0 === l)
                  throw Error(`missing value for field ${e} of type ${t}`);
                if ("bytes" === t) return ["bytes32", i.keccak(l)];
                if ("string" === t)
                  return (
                    "string" == typeof l && (l = s.from(l, "utf8")),
                    ["bytes32", i.keccak(l)]
                  );
                if (t.lastIndexOf("]") === t.length - 1) {
                  let n = t.slice(0, t.lastIndexOf("[")),
                    s = l.map((t) => encodeField(e, n, t));
                  return [
                    "bytes32",
                    i.keccak(
                      a.rawEncode(
                        s.map(([e]) => e),
                        s.map(([, e]) => e)
                      )
                    ),
                  ];
                }
                return [t, l];
              };
              for (let s of n[e]) {
                let [e, n] = encodeField(s.name, s.type, t[s.name]);
                l.push(e), c.push(n);
              }
            } else
              for (let a of n[e]) {
                let e = t[a.name];
                if (void 0 !== e) {
                  if ("bytes" === a.type)
                    l.push("bytes32"), (e = i.keccak(e)), c.push(e);
                  else if ("string" === a.type)
                    l.push("bytes32"),
                      "string" == typeof e && (e = s.from(e, "utf8")),
                      (e = i.keccak(e)),
                      c.push(e);
                  else if (void 0 !== n[a.type])
                    l.push("bytes32"),
                      (e = i.keccak(this.encodeData(a.type, e, n, o))),
                      c.push(e);
                  else if (a.type.lastIndexOf("]") === a.type.length - 1)
                    throw Error("Arrays currently unimplemented in encodeData");
                  else l.push(a.type), c.push(e);
                }
              }
            return a.rawEncode(l, c);
          },
          encodeType(e, t) {
            let n = "",
              s = this.findTypeDependencies(e, t).filter((t) => t !== e);
            for (let i of (s = [e].concat(s.sort()))) {
              let e = t[i];
              if (!e) throw Error("No type definition specified: " + i);
              n +=
                i +
                "(" +
                t[i].map(({ name: e, type: t }) => t + " " + e).join(",") +
                ")";
            }
            return n;
          },
          findTypeDependencies(e, t, n = []) {
            if (((e = e.match(/^\w*/)[0]), n.includes(e) || void 0 === t[e]))
              return n;
            for (let s of (n.push(e), t[e]))
              for (let e of this.findTypeDependencies(s.type, t, n))
                n.includes(e) || n.push(e);
            return n;
          },
          hashStruct(e, t, n, s = !0) {
            return i.keccak(this.encodeData(e, t, n, s));
          },
          hashType(e, t) {
            return i.keccak(this.encodeType(e, t));
          },
          sanitizeData(e) {
            let t = {};
            for (let n in o.properties) e[n] && (t[n] = e[n]);
            return (
              t.types &&
                (t.types = Object.assign({ EIP712Domain: [] }, t.types)),
              t
            );
          },
          hash(e, t = !0) {
            let n = this.sanitizeData(e),
              a = [s.from("1901", "hex")];
            return (
              a.push(this.hashStruct("EIP712Domain", n.domain, n.types, t)),
              "EIP712Domain" !== n.primaryType &&
                a.push(this.hashStruct(n.primaryType, n.message, n.types, t)),
              i.keccak(s.concat(a))
            );
          },
        };
      e.exports = {
        TYPED_MESSAGE_SCHEMA: o,
        TypedDataUtils: l,
        hashForSignTypedDataLegacy: function (e) {
          return (function (e) {
            let t = Error("Expect argument to be non-empty array");
            if ("object" != typeof e || !e.length) throw t;
            let n = e.map(function (e) {
                return "bytes" === e.type ? i.toBuffer(e.value) : e.value;
              }),
              s = e.map(function (e) {
                return e.type;
              }),
              o = e.map(function (e) {
                if (!e.name) throw t;
                return e.type + " " + e.name;
              });
            return a.soliditySHA3(
              ["bytes32", "bytes32"],
              [
                a.soliditySHA3(Array(e.length).fill("string"), o),
                a.soliditySHA3(s, n),
              ]
            );
          })(e.data);
        },
        hashForSignTypedData_v3: function (e) {
          return l.hash(e.data, !1);
        },
        hashForSignTypedData_v4: function (e) {
          return l.hash(e.data);
        },
      };
    },
    91686: function (e, t, n) {
      var s = n(48764).Buffer;
      let { keccak_256: i } = n(48653);
      function zeros(e) {
        return s.allocUnsafe(e).fill(0);
      }
      function bufferBEFromBigInt(e, t) {
        let n = e.toString(16);
        n.length % 2 != 0 && (n = "0" + n);
        let i = n.match(/.{1,2}/g).map((e) => parseInt(e, 16));
        for (; i.length < t; ) i.unshift(0);
        return s.from(i);
      }
      function setLength(e, t, n) {
        let s = zeros(t);
        return ((e = toBuffer(e)), n)
          ? e.length < t
            ? (e.copy(s), s)
            : e.slice(0, t)
          : e.length < t
          ? (e.copy(s, t - e.length), s)
          : e.slice(-t);
      }
      function toBuffer(e) {
        if (!s.isBuffer(e)) {
          if (Array.isArray(e)) e = s.from(e);
          else if ("string" == typeof e) {
            var t;
            e = isHexString(e)
              ? s.from((t = stripHexPrefix(e)).length % 2 ? "0" + t : t, "hex")
              : s.from(e);
          } else if ("number" == typeof e) e = intToBuffer(e);
          else if (null == e) e = s.allocUnsafe(0);
          else if ("bigint" == typeof e) e = bufferBEFromBigInt(e);
          else if (e.toArray) e = s.from(e.toArray());
          else throw Error("invalid type");
        }
        return e;
      }
      function isHexString(e) {
        return "string" == typeof e && e.match(/^0x[0-9A-Fa-f]*$/);
      }
      function stripHexPrefix(e) {
        return "string" == typeof e && e.startsWith("0x") ? e.slice(2) : e;
      }
      e.exports = {
        zeros,
        setLength,
        setLengthRight: function (e, t) {
          return setLength(e, t, !0);
        },
        isHexString,
        stripHexPrefix,
        toBuffer,
        bufferToHex: function (e) {
          return "0x" + (e = toBuffer(e)).toString("hex");
        },
        keccak: function (e, t) {
          if (((e = toBuffer(e)), t || (t = 256), 256 !== t))
            throw Error("unsupported");
          return s.from(i(new Uint8Array(e)));
        },
        bitLengthFromBigInt: function (e) {
          return e.toString(2).length;
        },
        bufferBEFromBigInt,
        twosFromBigInt: function (e, t) {
          let n;
          if (e < 0n) {
            let s = (1n << BigInt(t)) - 1n;
            n = (~e & s) + 1n;
          } else n = e;
          return n & ((1n << BigInt(t)) - 1n);
        },
      };
    },
    33134: function (e, t, n) {
      "use strict";
      let s;
      n.d(t, {
        createCoinbaseWalletSDK: function () {
          return createCoinbaseWalletSDK;
        },
      });
      let ScopedLocalStorage = class ScopedLocalStorage {
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
            let s = localStorage.key(n);
            "string" == typeof s && s.startsWith(e) && t.push(s);
          }
          t.forEach((e) => localStorage.removeItem(e));
        }
        scopedKey(e) {
          return `-${this.scope}${this.module ? `:${this.module}` : ""}:${e}`;
        }
        static clearAll() {
          new ScopedLocalStorage("CBWSDK").clear(),
            new ScopedLocalStorage("walletlink").clear();
        }
      };
      let i = {
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
        a = {
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
        o = "Unspecified error message.";
      function getMessageFromCode(e, t = o) {
        if (e && Number.isInteger(e)) {
          let t = e.toString();
          if (hasKey(a, t)) return a[t].message;
          if (e >= -32099 && e <= -32e3) return "Unspecified server error.";
        }
        return t;
      }
      function assignOriginalError(e) {
        return e && "object" == typeof e && !Array.isArray(e)
          ? Object.assign({}, e)
          : e;
      }
      function hasKey(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function hasStringProperty(e, t) {
        return (
          "object" == typeof e &&
          null !== e &&
          t in e &&
          "string" == typeof e[t]
        );
      }
      let l = {
        rpc: {
          parse: (e) => getEthJsonRpcError(i.rpc.parse, e),
          invalidRequest: (e) => getEthJsonRpcError(i.rpc.invalidRequest, e),
          invalidParams: (e) => getEthJsonRpcError(i.rpc.invalidParams, e),
          methodNotFound: (e) => getEthJsonRpcError(i.rpc.methodNotFound, e),
          internal: (e) => getEthJsonRpcError(i.rpc.internal, e),
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
            return getEthJsonRpcError(t, e);
          },
          invalidInput: (e) => getEthJsonRpcError(i.rpc.invalidInput, e),
          resourceNotFound: (e) =>
            getEthJsonRpcError(i.rpc.resourceNotFound, e),
          resourceUnavailable: (e) =>
            getEthJsonRpcError(i.rpc.resourceUnavailable, e),
          transactionRejected: (e) =>
            getEthJsonRpcError(i.rpc.transactionRejected, e),
          methodNotSupported: (e) =>
            getEthJsonRpcError(i.rpc.methodNotSupported, e),
          limitExceeded: (e) => getEthJsonRpcError(i.rpc.limitExceeded, e),
        },
        provider: {
          userRejectedRequest: (e) =>
            getEthProviderError(i.provider.userRejectedRequest, e),
          unauthorized: (e) => getEthProviderError(i.provider.unauthorized, e),
          unsupportedMethod: (e) =>
            getEthProviderError(i.provider.unsupportedMethod, e),
          disconnected: (e) => getEthProviderError(i.provider.disconnected, e),
          chainDisconnected: (e) =>
            getEthProviderError(i.provider.chainDisconnected, e),
          unsupportedChain: (e) =>
            getEthProviderError(i.provider.unsupportedChain, e),
          custom: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum Provider custom errors must provide single object argument."
              );
            let { code: t, message: n, data: s } = e;
            if (!n || "string" != typeof n)
              throw Error('"message" must be a nonempty string');
            return new EthereumProviderError(t, n, s);
          },
        },
      };
      function getEthJsonRpcError(e, t) {
        let [n, s] = parseOpts(t);
        return new EthereumRpcError(e, n || getMessageFromCode(e), s);
      }
      function getEthProviderError(e, t) {
        let [n, s] = parseOpts(t);
        return new EthereumProviderError(e, n || getMessageFromCode(e), s);
      }
      function parseOpts(e) {
        if (e) {
          if ("string" == typeof e) return [e];
          if ("object" == typeof e && !Array.isArray(e)) {
            let { message: t, data: n } = e;
            if (t && "string" != typeof t)
              throw Error("Must specify string message.");
            return [t || void 0, n];
          }
        }
        return [];
      }
      let EthereumRpcError = class EthereumRpcError extends Error {
        constructor(e, t, n) {
          if (!Number.isInteger(e)) throw Error('"code" must be an integer.');
          if (!t || "string" != typeof t)
            throw Error('"message" must be a nonempty string.');
          super(t), (this.code = e), void 0 !== n && (this.data = n);
        }
      };
      let EthereumProviderError = class EthereumProviderError extends EthereumRpcError {
        constructor(e, t, n) {
          if (!(Number.isInteger(e) && e >= 1e3 && e <= 4999))
            throw Error(
              '"code" must be an integer such that: 1000 <= code <= 4999'
            );
          super(e, t, n);
        }
      };
      let HexString = (e) => e,
        AddressString = (e) => e,
        BigIntString = (e) => e;
      function type_IntNumber(e) {
        return Math.floor(e);
      }
      var c = n(48764).Buffer;
      let d = /^[0-9]*$/,
        u = /^[a-f0-9]*$/;
      function randomBytesHex(e) {
        return uint8ArrayToHex(crypto.getRandomValues(new Uint8Array(e)));
      }
      function uint8ArrayToHex(e) {
        return [...e].map((e) => e.toString(16).padStart(2, "0")).join("");
      }
      function hexStringToUint8Array(e) {
        return new Uint8Array(
          e.match(/.{1,2}/g).map((e) => Number.parseInt(e, 16))
        );
      }
      function hexStringFromBuffer(e, t = !1) {
        let n = e.toString("hex");
        return HexString(t ? `0x${n}` : n);
      }
      function encodeToHexString(e) {
        return hexStringFromBuffer(ensureBuffer(e), !0);
      }
      function bigIntStringFromBigInt(e) {
        return BigIntString(e.toString(10));
      }
      function hexStringFromNumber(e) {
        return HexString(`0x${BigInt(e).toString(16)}`);
      }
      function has0xPrefix(e) {
        return e.startsWith("0x") || e.startsWith("0X");
      }
      function strip0x(e) {
        return has0xPrefix(e) ? e.slice(2) : e;
      }
      function prepend0x(e) {
        return has0xPrefix(e) ? `0x${e.slice(2)}` : `0x${e}`;
      }
      function isHexString(e) {
        if ("string" != typeof e) return !1;
        let t = strip0x(e).toLowerCase();
        return u.test(t);
      }
      function ensureEvenLengthHexString(e, t = !1) {
        let n = (function (e, t = !1) {
          if ("string" == typeof e) {
            let n = strip0x(e).toLowerCase();
            if (u.test(n)) return HexString(t ? `0x${n}` : n);
          }
          throw l.rpc.invalidParams(
            `"${String(e)}" is not a hexadecimal string`
          );
        })(e, !1);
        return (
          n.length % 2 == 1 && (n = HexString(`0${n}`)),
          t ? HexString(`0x${n}`) : n
        );
      }
      function ensureAddressString(e) {
        if ("string" == typeof e) {
          let t = strip0x(e).toLowerCase();
          if (isHexString(t) && 40 === t.length)
            return AddressString(prepend0x(t));
        }
        throw l.rpc.invalidParams(`Invalid Ethereum address: ${String(e)}`);
      }
      function ensureBuffer(e) {
        if (c.isBuffer(e)) return e;
        if ("string" == typeof e) {
          if (isHexString(e)) {
            let t = ensureEvenLengthHexString(e, !1);
            return c.from(t, "hex");
          }
          return c.from(e, "utf8");
        }
        throw l.rpc.invalidParams(`Not binary data: ${String(e)}`);
      }
      function ensureIntNumber(e) {
        if ("number" == typeof e && Number.isInteger(e))
          return type_IntNumber(e);
        if ("string" == typeof e) {
          if (d.test(e)) return type_IntNumber(Number(e));
          if (isHexString(e))
            return type_IntNumber(
              Number(BigInt(ensureEvenLengthHexString(e, !0)))
            );
        }
        throw l.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      function ensureBigInt(e) {
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
        if ("number" == typeof e) return BigInt(ensureIntNumber(e));
        if ("string" == typeof e) {
          if (d.test(e)) return BigInt(e);
          if (isHexString(e)) return BigInt(ensureEvenLengthHexString(e, !0));
        }
        throw l.rpc.invalidParams(`Not an integer: ${String(e)}`);
      }
      async function generateKeyPair() {
        return crypto.subtle.generateKey(
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          ["deriveKey"]
        );
      }
      async function deriveSharedSecret(e, t) {
        return crypto.subtle.deriveKey(
          { name: "ECDH", public: t },
          e,
          { name: "AES-GCM", length: 256 },
          !1,
          ["encrypt", "decrypt"]
        );
      }
      async function encrypt(e, t) {
        let n = crypto.getRandomValues(new Uint8Array(12)),
          s = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv: n },
            e,
            new TextEncoder().encode(t)
          );
        return { iv: n, cipherText: s };
      }
      async function decrypt(e, { iv: t, cipherText: n }) {
        let s = await crypto.subtle.decrypt({ name: "AES-GCM", iv: t }, e, n);
        return new TextDecoder().decode(s);
      }
      function getFormat(e) {
        switch (e) {
          case "public":
            return "spki";
          case "private":
            return "pkcs8";
        }
      }
      async function exportKeyToHexString(e, t) {
        let n = getFormat(e),
          s = await crypto.subtle.exportKey(n, t);
        return uint8ArrayToHex(new Uint8Array(s));
      }
      async function importKeyFromHexString(e, t) {
        let n = getFormat(e),
          s = hexStringToUint8Array(t).buffer;
        return await crypto.subtle.importKey(
          n,
          new Uint8Array(s),
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          "private" === e ? ["deriveKey"] : []
        );
      }
      async function encryptContent(e, t) {
        let n = JSON.stringify(e, (e, t) =>
          t instanceof Error
            ? Object.assign(Object.assign({}, t.code ? { code: t.code } : {}), {
                message: t.message,
              })
            : t
        );
        return encrypt(t, n);
      }
      async function decryptContent(e, t) {
        return JSON.parse(await decrypt(t, e));
      }
      let h = { storageKey: "ownPrivateKey", keyType: "private" },
        p = { storageKey: "ownPublicKey", keyType: "public" },
        y = { storageKey: "peerPublicKey", keyType: "public" };
      let SCWKeyManager = class SCWKeyManager {
        constructor() {
          (this.storage = new ScopedLocalStorage("CBWSDK", "SCWKeyManager")),
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
            await this.storeKey(y, e),
            await this.loadKeysIfNeeded();
        }
        async clear() {
          (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null),
            this.storage.removeItem(p.storageKey),
            this.storage.removeItem(h.storageKey),
            this.storage.removeItem(y.storageKey);
        }
        async generateKeyPair() {
          let e = await generateKeyPair();
          (this.ownPrivateKey = e.privateKey),
            (this.ownPublicKey = e.publicKey),
            await this.storeKey(h, e.privateKey),
            await this.storeKey(p, e.publicKey);
        }
        async loadKeysIfNeeded() {
          null === this.ownPrivateKey &&
            (this.ownPrivateKey = await this.loadKey(h)),
            null === this.ownPublicKey &&
              (this.ownPublicKey = await this.loadKey(p)),
            (null === this.ownPrivateKey || null === this.ownPublicKey) &&
              (await this.generateKeyPair()),
            null === this.peerPublicKey &&
              (this.peerPublicKey = await this.loadKey(y)),
            null === this.sharedSecret &&
              null !== this.ownPrivateKey &&
              null !== this.peerPublicKey &&
              (this.sharedSecret = await deriveSharedSecret(
                this.ownPrivateKey,
                this.peerPublicKey
              ));
        }
        async loadKey(e) {
          let t = this.storage.getItem(e.storageKey);
          return t ? importKeyFromHexString(e.keyType, t) : null;
        }
        async storeKey(e, t) {
          let n = await exportKeyToHexString(e.keyType, t);
          this.storage.setItem(e.storageKey, n);
        }
      };
      let b = "4.2.3",
        v = "@coinbase/wallet-sdk";
      async function fetchRPCRequest(e, t) {
        let n = Object.assign(Object.assign({}, e), {
            jsonrpc: "2.0",
            id: crypto.randomUUID(),
          }),
          s = await window.fetch(t, {
            method: "POST",
            body: JSON.stringify(n),
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "X-Cbw-Sdk-Version": b,
              "X-Cbw-Sdk-Platform": v,
            },
          }),
          { result: i, error: a } = await s.json();
        if (a) throw a;
        return i;
      }
      let E = "accounts",
        I = "activeChain",
        L = "availableChains",
        R = "walletCapabilities";
      let SCWSigner = class SCWSigner {
        constructor(e) {
          var t, n, s;
          (this.metadata = e.metadata),
            (this.communicator = e.communicator),
            (this.callback = e.callback),
            (this.keyManager = new SCWKeyManager()),
            (this.storage = new ScopedLocalStorage(
              "CBWSDK",
              "SCWStateManager"
            )),
            (this.accounts =
              null !== (t = this.storage.loadObject(E)) && void 0 !== t
                ? t
                : []),
            (this.chain = this.storage.loadObject(I) || {
              id:
                null !==
                  (s =
                    null === (n = e.metadata.appChainIds) || void 0 === n
                      ? void 0
                      : n[0]) && void 0 !== s
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
          var t, n;
          let s = await this.createRequestMessage({
              handshake: {
                method: e.method,
                params: Object.assign(
                  {},
                  this.metadata,
                  null !== (t = e.params) && void 0 !== t ? t : {}
                ),
              },
            }),
            i = await this.communicator.postRequestAndWaitForResponse(s);
          if ("failure" in i.content) throw i.content.failure;
          let a = await importKeyFromHexString("public", i.sender);
          await this.keyManager.setPeerPublicKey(a);
          let o = await this.decryptResponseMessage(i),
            l = o.result;
          if ("error" in l) throw l.error;
          let c = l.value;
          (this.accounts = c),
            this.storage.storeObject(E, c),
            null === (n = this.callback) ||
              void 0 === n ||
              n.call(this, "accountsChanged", c);
        }
        async request(e) {
          var t;
          if (0 === this.accounts.length) throw l.provider.unauthorized();
          switch (e.method) {
            case "eth_requestAccounts":
              return (
                null === (t = this.callback) ||
                  void 0 === t ||
                  t.call(this, "connect", {
                    chainId: hexStringFromNumber(this.chain.id),
                  }),
                this.accounts
              );
            case "eth_accounts":
              return this.accounts;
            case "eth_coinbase":
              return this.accounts[0];
            case "net_version":
              return this.chain.id;
            case "eth_chainId":
              return hexStringFromNumber(this.chain.id);
            case "wallet_getCapabilities":
              return this.storage.loadObject(R);
            case "wallet_switchEthereumChain":
              return this.handleSwitchChainRequest(e);
            case "eth_ecRecover":
            case "personal_sign":
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
                throw l.rpc.internal("No RPC URL set for chain");
              return fetchRPCRequest(e, this.chain.rpcUrl);
          }
        }
        async sendRequestToPopup(e) {
          var t, n;
          await (null === (n = (t = this.communicator).waitForPopupLoaded) ||
          void 0 === n
            ? void 0
            : n.call(t));
          let s = await this.sendEncryptedRequest(e),
            i = await this.decryptResponseMessage(s),
            a = i.result;
          if ("error" in a) throw a.error;
          return a.value;
        }
        async cleanup() {
          var e, t;
          this.storage.clear(),
            await this.keyManager.clear(),
            (this.accounts = []),
            (this.chain = {
              id:
                null !==
                  (t =
                    null === (e = this.metadata.appChainIds) || void 0 === e
                      ? void 0
                      : e[0]) && void 0 !== t
                  ? t
                  : 1,
            });
        }
        async handleSwitchChainRequest(e) {
          var t;
          let n = e.params;
          if (!n || !(null === (t = n[0]) || void 0 === t ? void 0 : t.chainId))
            throw l.rpc.invalidParams();
          let s = ensureIntNumber(n[0].chainId),
            i = this.updateChain(s);
          if (i) return null;
          let a = await this.sendRequestToPopup(e);
          return null === a && this.updateChain(s), a;
        }
        async sendEncryptedRequest(e) {
          let t = await this.keyManager.getSharedSecret();
          if (!t)
            throw l.provider.unauthorized(
              "No valid session found, try requestAccounts before other methods"
            );
          let n = await encryptContent(
              { action: e, chainId: this.chain.id },
              t
            ),
            s = await this.createRequestMessage({ encrypted: n });
          return this.communicator.postRequestAndWaitForResponse(s);
        }
        async createRequestMessage(e) {
          let t = await exportKeyToHexString(
            "public",
            await this.keyManager.getOwnPublicKey()
          );
          return {
            id: crypto.randomUUID(),
            sender: t,
            content: e,
            timestamp: new Date(),
          };
        }
        async decryptResponseMessage(e) {
          var t, n;
          let s = e.content;
          if ("failure" in s) throw s.failure;
          let i = await this.keyManager.getSharedSecret();
          if (!i) throw l.provider.unauthorized("Invalid session");
          let a = await decryptContent(s.encrypted, i),
            o = null === (t = a.data) || void 0 === t ? void 0 : t.chains;
          if (o) {
            let e = Object.entries(o).map(([e, t]) => ({
              id: Number(e),
              rpcUrl: t,
            }));
            this.storage.storeObject(L, e), this.updateChain(this.chain.id, e);
          }
          let c =
            null === (n = a.data) || void 0 === n ? void 0 : n.capabilities;
          return c && this.storage.storeObject(R, c), a;
        }
        updateChain(e, t) {
          var n;
          let s = null != t ? t : this.storage.loadObject(L),
            i = null == s ? void 0 : s.find((t) => t.id === e);
          return (
            !!i &&
            (i !== this.chain &&
              ((this.chain = i),
              this.storage.storeObject(I, i),
              null === (n = this.callback) ||
                void 0 === n ||
                n.call(this, "chainChanged", hexStringFromNumber(i.id))),
            !0)
          );
        }
      };
      var N = n(93185);
      let U = "Addresses";
      function isErrorResponse(e) {
        return void 0 !== e.errorMessage;
      }
      let WalletLinkCipher = class WalletLinkCipher {
        constructor(e) {
          this.secret = e;
        }
        async encrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          let n = crypto.getRandomValues(new Uint8Array(12)),
            s = await crypto.subtle.importKey(
              "raw",
              hexStringToUint8Array(t),
              { name: "aes-gcm" },
              !1,
              ["encrypt", "decrypt"]
            ),
            i = new TextEncoder(),
            a = await window.crypto.subtle.encrypt(
              { name: "AES-GCM", iv: n },
              s,
              i.encode(e)
            ),
            o = a.slice(a.byteLength - 16),
            l = a.slice(0, a.byteLength - 16),
            c = new Uint8Array(o),
            d = new Uint8Array(l),
            u = new Uint8Array([...n, ...c, ...d]);
          return uint8ArrayToHex(u);
        }
        async decrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          return new Promise((n, s) => {
            !(async function () {
              let i = await crypto.subtle.importKey(
                  "raw",
                  hexStringToUint8Array(t),
                  { name: "aes-gcm" },
                  !1,
                  ["encrypt", "decrypt"]
                ),
                a = hexStringToUint8Array(e),
                o = a.slice(0, 12),
                l = a.slice(12, 28),
                c = a.slice(28),
                d = new Uint8Array([...c, ...l]),
                u = { name: "AES-GCM", iv: new Uint8Array(o) };
              try {
                let e = await window.crypto.subtle.decrypt(u, i, d),
                  t = new TextDecoder();
                n(t.decode(e));
              } catch (e) {
                s(e);
              }
            })();
          });
        }
      };
      let WalletLinkHTTP = class WalletLinkHTTP {
        constructor(e, t, n) {
          (this.linkAPIUrl = e), (this.sessionId = t);
          let s = `${t}:${n}`;
          this.auth = `Basic ${btoa(s)}`;
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
            let { events: n, error: s } = await t.json();
            if (s) throw Error(`Check unseen events failed: ${s}`);
            let i =
              null !==
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
                        }))) && void 0 !== e
                ? e
                : [];
            return this.markUnseenEventsAsSeen(i), i;
          }
          throw Error(`Check unseen events failed: ${t.status}`);
        }
      };
      ((X = ee || (ee = {}))[(X.DISCONNECTED = 0)] = "DISCONNECTED"),
        (X[(X.CONNECTING = 1)] = "CONNECTING"),
        (X[(X.CONNECTED = 2)] = "CONNECTED");
      let WalletLinkWebSocket = class WalletLinkWebSocket {
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
            let s;
            try {
              this.webSocket = s = new this.WebSocketClass(this.url);
            } catch (e) {
              t(e);
              return;
            }
            null === (n = this.connectionStateListener) ||
              void 0 === n ||
              n.call(this, ee.CONNECTING),
              (s.onclose = (e) => {
                var n;
                this.clearWebSocket(),
                  t(Error(`websocket error ${e.code}: ${e.reason}`)),
                  null === (n = this.connectionStateListener) ||
                    void 0 === n ||
                    n.call(this, ee.DISCONNECTED);
              }),
              (s.onopen = (t) => {
                var n;
                if (
                  (e(),
                  null === (n = this.connectionStateListener) ||
                    void 0 === n ||
                    n.call(this, ee.CONNECTED),
                  this.pendingData.length > 0)
                ) {
                  let e = [...this.pendingData];
                  e.forEach((e) => this.sendData(e)), (this.pendingData = []);
                }
              }),
              (s.onmessage = (e) => {
                var t, n;
                if ("h" === e.data)
                  null === (t = this.incomingDataListener) ||
                    void 0 === t ||
                    t.call(this, { type: "Heartbeat" });
                else
                  try {
                    let t = JSON.parse(e.data);
                    null === (n = this.incomingDataListener) ||
                      void 0 === n ||
                      n.call(this, t);
                  } catch (e) {}
              });
          });
        }
        disconnect() {
          var e;
          let { webSocket: t } = this;
          if (t) {
            this.clearWebSocket(),
              null === (e = this.connectionStateListener) ||
                void 0 === e ||
                e.call(this, ee.DISCONNECTED),
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
      };
      let WalletLinkConnection = class WalletLinkConnection {
        constructor({ session: e, linkAPIUrl: t, listener: n }) {
          (this.destroyed = !1),
            (this.lastHeartbeatResponse = 0),
            (this.nextReqId = type_IntNumber(1)),
            (this._connected = !1),
            (this._linked = !1),
            (this.shouldFetchUnseenEventsOnConnect = !1),
            (this.requestResolutions = new Map()),
            (this.handleSessionMetadataUpdated = (e) => {
              if (!e) return;
              let t = new Map([
                ["__destroyed", this.handleDestroyed],
                ["EthereumAddress", this.handleAccountUpdated],
                ["WalletUsername", this.handleWalletUsernameUpdated],
                ["AppVersion", this.handleAppVersionUpdated],
                [
                  "ChainId",
                  (t) =>
                    e.JsonRpcUrl && this.handleChainUpdated(t, e.JsonRpcUrl),
                ],
              ]);
              t.forEach((t, n) => {
                let s = e[n];
                void 0 !== s && t(s);
              });
            }),
            (this.handleDestroyed = (e) => {
              var t;
              "1" === e &&
                (null === (t = this.listener) ||
                  void 0 === t ||
                  t.resetAndReload());
            }),
            (this.handleAccountUpdated = async (e) => {
              var t;
              let n = await this.cipher.decrypt(e);
              null === (t = this.listener) ||
                void 0 === t ||
                t.accountUpdated(n);
            }),
            (this.handleMetadataUpdated = async (e, t) => {
              var n;
              let s = await this.cipher.decrypt(t);
              null === (n = this.listener) ||
                void 0 === n ||
                n.metadataUpdated(e, s);
            }),
            (this.handleWalletUsernameUpdated = async (e) => {
              this.handleMetadataUpdated("walletUsername", e);
            }),
            (this.handleAppVersionUpdated = async (e) => {
              this.handleMetadataUpdated("AppVersion", e);
            }),
            (this.handleChainUpdated = async (e, t) => {
              var n;
              let s = await this.cipher.decrypt(e),
                i = await this.cipher.decrypt(t);
              null === (n = this.listener) ||
                void 0 === n ||
                n.chainUpdated(s, i);
            }),
            (this.session = e),
            (this.cipher = new WalletLinkCipher(e.secret)),
            (this.listener = n);
          let s = new WalletLinkWebSocket(`${t}/rpc`, WebSocket);
          s.setConnectionStateListener(async (e) => {
            let t = !1;
            switch (e) {
              case ee.DISCONNECTED:
                if (!this.destroyed) {
                  let connect = async () => {
                    await new Promise((e) => setTimeout(e, 5e3)),
                      this.destroyed ||
                        s.connect().catch(() => {
                          connect();
                        });
                  };
                  connect();
                }
                break;
              case ee.CONNECTED:
                (t = await this.handleConnected()),
                  this.updateLastHeartbeat(),
                  setInterval(() => {
                    this.heartbeat();
                  }, 1e4),
                  this.shouldFetchUnseenEventsOnConnect &&
                    this.fetchUnseenEventsAPI();
              case ee.CONNECTING:
            }
            this.connected !== t && (this.connected = t);
          }),
            s.setIncomingDataListener((e) => {
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
                (null === (t = this.requestResolutions.get(e.id)) ||
                  void 0 === t ||
                  t(e));
            }),
            (this.ws = s),
            (this.http = new WalletLinkHTTP(t, e.id, e.key));
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
                id: type_IntNumber(this.nextReqId++),
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
            e &&
              (null === (t = this.onceLinked) || void 0 === t || t.call(this)),
            null === (n = this.listener) || void 0 === n || n.linkedUpdated(e);
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
          let n = await this.cipher.decrypt(e.data),
            s = JSON.parse(n);
          if ("WEB3_RESPONSE" !== s.type) return;
          let { id: i, response: a } = s;
          null === (t = this.listener) ||
            void 0 === t ||
            t.handleWeb3ResponseMessage(i, a);
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
          this.shouldFetchUnseenEventsOnConnect = !1;
          let e = await this.http.fetchUnseenEvents();
          e.forEach((e) => this.handleIncomingEvent(e));
        }
        async publishEvent(e, t, n = !1) {
          let s = await this.cipher.encrypt(
              JSON.stringify(
                Object.assign(Object.assign({}, t), {
                  origin: location.origin,
                  relaySource:
                    "coinbaseWalletExtension" in window &&
                    window.coinbaseWalletExtension
                      ? "injected_sdk"
                      : "sdk",
                })
              )
            ),
            i = {
              type: "PublishEvent",
              id: type_IntNumber(this.nextReqId++),
              sessionId: this.session.id,
              event: e,
              data: s,
              callWebhook: n,
            };
          return this.setOnceLinked(async () => {
            let e = await this.makeRequest(i);
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
          if (Date.now() - this.lastHeartbeatResponse > 2e4) {
            this.ws.disconnect();
            return;
          }
          try {
            this.ws.sendData("h");
          } catch (e) {}
        }
        async makeRequest(e, t = { timeout: 6e4 }) {
          let n;
          let s = e.id;
          return (
            this.sendData(e),
            Promise.race([
              new Promise((e, i) => {
                n = window.setTimeout(() => {
                  i(Error(`request ${s} timed out`));
                }, t.timeout);
              }),
              new Promise((e) => {
                this.requestResolutions.set(s, (t) => {
                  clearTimeout(n), e(t), this.requestResolutions.delete(s);
                });
              }),
            ])
          );
        }
        async handleConnected() {
          let e = await this.makeRequest({
            type: "HostSession",
            id: type_IntNumber(this.nextReqId++),
            sessionId: this.session.id,
            sessionKey: this.session.key,
          });
          return (
            "Fail" !== e.type &&
            (this.sendData({
              type: "IsLinked",
              id: type_IntNumber(this.nextReqId++),
              sessionId: this.session.id,
            }),
            this.sendData({
              type: "GetSessionConfig",
              id: type_IntNumber(this.nextReqId++),
              sessionId: this.session.id,
            }),
            !0)
          );
        }
      };
      let RelayEventManager = class RelayEventManager {
        constructor() {
          (this._nextRequestId = 0), (this.callbacks = new Map());
        }
        makeRequestId() {
          this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
          let e = this._nextRequestId,
            t = prepend0x(e.toString(16)),
            n = this.callbacks.get(t);
          return n && this.callbacks.delete(t), e;
        }
      };
      function _assert_bytes(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (null != e &&
              "object" == typeof e &&
              "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            `Uint8Array expected of length ${t}, not of length=${e.length}`
          );
      }
      function exists(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      let createView = (e) =>
          new DataView(e.buffer, e.byteOffset, e.byteLength),
        rotr = (e, t) => (e << (32 - t)) | (e >>> t);
      new Uint8Array(new Uint32Array([287454020]).buffer)[0];
      let H = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function toBytes(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error(`utf8ToBytes expected string, got ${typeof e}`);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          _assert_bytes(e),
          e
        );
      }
      let Hash = class Hash {
        clone() {
          return this._cloneInto();
        }
      };
      let Chi = (e, t, n) => (e & t) ^ (~e & n),
        Maj = (e, t, n) => (e & t) ^ (e & n) ^ (t & n);
      let HashMD = class HashMD extends Hash {
        constructor(e, t, n, s) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = n),
            (this.isLE = s),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = createView(this.buffer));
        }
        update(e) {
          exists(this);
          let { view: t, buffer: n, blockLen: s } = this;
          e = toBytes(e);
          let i = e.length;
          for (let a = 0; a < i; ) {
            let o = Math.min(s - this.pos, i - a);
            if (o === s) {
              let t = createView(e);
              for (; s <= i - a; a += s) this.process(t, a);
              continue;
            }
            n.set(e.subarray(a, a + o), this.pos),
              (this.pos += o),
              (a += o),
              this.pos === s && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          exists(this),
            (function (e, t) {
              _assert_bytes(e);
              let n = t.outputLen;
              if (e.length < n)
                throw Error(
                  `digestInto() expects output buffer of length at least ${n}`
                );
            })(e, this),
            (this.finished = !0);
          let { buffer: t, view: n, blockLen: s, isLE: i } = this,
            { pos: a } = this;
          (t[a++] = 128),
            this.buffer.subarray(a).fill(0),
            this.padOffset > s - a && (this.process(n, 0), (a = 0));
          for (let e = a; e < s; e++) t[e] = 0;
          !(function (e, t, n, s) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, n, s);
            let i = BigInt(32),
              a = BigInt(4294967295),
              o = Number((n >> i) & a),
              l = Number(n & a),
              c = s ? 4 : 0,
              d = s ? 0 : 4;
            e.setUint32(t + c, o, s), e.setUint32(t + d, l, s);
          })(n, s - 8, BigInt(8 * this.length), i),
            this.process(n, 0);
          let o = createView(e),
            l = this.outputLen;
          if (l % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let c = l / 4,
            d = this.get();
          if (c > d.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < c; e++) o.setUint32(4 * e, d[e], i);
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
            length: s,
            finished: i,
            destroyed: a,
            pos: o,
          } = this;
          return (
            (e.length = s),
            (e.pos = o),
            (e.finished = i),
            (e.destroyed = a),
            s % t && e.buffer.set(n),
            e
          );
        }
      };
      let W = new Uint32Array([
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
        ]),
        K = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        G = new Uint32Array(64);
      let SHA256 = class SHA256 extends HashMD {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | K[0]),
            (this.B = 0 | K[1]),
            (this.C = 0 | K[2]),
            (this.D = 0 | K[3]),
            (this.E = 0 | K[4]),
            (this.F = 0 | K[5]),
            (this.G = 0 | K[6]),
            (this.H = 0 | K[7]);
        }
        get() {
          let { A: e, B: t, C: n, D: s, E: i, F: a, G: o, H: l } = this;
          return [e, t, n, s, i, a, o, l];
        }
        set(e, t, n, s, i, a, o, l) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | s),
            (this.E = 0 | i),
            (this.F = 0 | a),
            (this.G = 0 | o),
            (this.H = 0 | l);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4) G[n] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = G[e - 15],
              n = G[e - 2],
              s = rotr(t, 7) ^ rotr(t, 18) ^ (t >>> 3),
              i = rotr(n, 17) ^ rotr(n, 19) ^ (n >>> 10);
            G[e] = (i + G[e - 7] + s + G[e - 16]) | 0;
          }
          let { A: n, B: s, C: i, D: a, E: o, F: l, G: c, H: d } = this;
          for (let e = 0; e < 64; e++) {
            let t = rotr(o, 6) ^ rotr(o, 11) ^ rotr(o, 25),
              u = (d + t + Chi(o, l, c) + W[e] + G[e]) | 0,
              h = rotr(n, 2) ^ rotr(n, 13) ^ rotr(n, 22),
              p = (h + Maj(n, s, i)) | 0;
            (d = c),
              (c = l),
              (l = o),
              (o = (a + u) | 0),
              (a = i),
              (i = s),
              (s = n),
              (n = (u + p) | 0);
          }
          (n = (n + this.A) | 0),
            (s = (s + this.B) | 0),
            (i = (i + this.C) | 0),
            (a = (a + this.D) | 0),
            (o = (o + this.E) | 0),
            (l = (l + this.F) | 0),
            (c = (c + this.G) | 0),
            (d = (d + this.H) | 0),
            this.set(n, s, i, a, o, l, c, d);
        }
        roundClean() {
          G.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      };
      let J = (function (e) {
          let hashC = (t) => e().update(toBytes(t)).digest(),
            t = e();
          return (
            (hashC.outputLen = t.outputLen),
            (hashC.blockLen = t.blockLen),
            (hashC.create = () => e()),
            hashC
          );
        })(() => new SHA256()),
        Y = "session:id",
        Q = "session:secret",
        Z = "session:linked";
      let WalletLinkSession = class WalletLinkSession {
        constructor(e, t, n, s = !1) {
          (this.storage = e),
            (this.id = t),
            (this.secret = n),
            (this.key = (function (e) {
              _assert_bytes(e);
              let t = "";
              for (let n = 0; n < e.length; n++) t += H[e[n]];
              return t;
            })(J(`${t}, ${n} WalletLink`))),
            (this._linked = !!s);
        }
        static create(e) {
          let t = randomBytesHex(16),
            n = randomBytesHex(32);
          return new WalletLinkSession(e, t, n).save();
        }
        static load(e) {
          let t = e.getItem(Y),
            n = e.getItem(Z),
            s = e.getItem(Q);
          return t && s ? new WalletLinkSession(e, t, s, "1" === n) : null;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          (this._linked = e), this.persistLinked();
        }
        save() {
          return (
            this.storage.setItem(Y, this.id),
            this.storage.setItem(Q, this.secret),
            this.persistLinked(),
            this
          );
        }
        persistLinked() {
          this.storage.setItem(Z, this._linked ? "1" : "0");
        }
      };
      function isDarkMode() {
        var e, t;
        return (
          null !==
            (t =
              null === (e = null == window ? void 0 : window.matchMedia) ||
              void 0 === e
                ? void 0
                : e.call(window, "(prefers-color-scheme: dark)").matches) &&
          void 0 !== t &&
          t
        );
      }
      function injectCssReset() {
        let e = document.createElement("style");
        (e.type = "text/css"),
          e.appendChild(
            document.createTextNode(
              '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
            )
          ),
          document.documentElement.appendChild(e);
      }
      var X,
        ee,
        et,
        er,
        en,
        es,
        ei,
        ea,
        eo,
        el,
        ec,
        ed,
        eu,
        eh = n(86010),
        ep = {},
        eg = [],
        ef =
          /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        em = Array.isArray;
      function w(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }
      function _(e) {
        e && e.parentNode && e.parentNode.removeChild(e);
      }
      function g(e, t, n) {
        var s,
          i,
          a,
          o = {};
        for (a in t)
          "key" == a ? (s = t[a]) : "ref" == a ? (i = t[a]) : (o[a] = t[a]);
        if (
          (arguments.length > 2 &&
            (o.children = arguments.length > 3 ? et.call(arguments, 2) : n),
          "function" == typeof e && null != e.defaultProps)
        )
          for (a in e.defaultProps)
            void 0 === o[a] && (o[a] = e.defaultProps[a]);
        return m(e, o, s, i, null);
      }
      function m(e, t, n, s, i) {
        var a = {
          type: e,
          props: t,
          key: n,
          ref: s,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __c: null,
          constructor: void 0,
          __v: null == i ? ++en : i,
          __i: -1,
          __u: 0,
        };
        return null == i && null != er.vnode && er.vnode(a), a;
      }
      function k(e) {
        return e.children;
      }
      function x(e, t) {
        (this.props = e), (this.context = t);
      }
      function C(e, t) {
        if (null == t) return e.__ ? C(e.__, e.__i + 1) : null;
        for (var n; t < e.__k.length; t++)
          if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? C(e) : null;
      }
      function M(e) {
        ((!e.__d && (e.__d = !0) && es.push(e) && !P.__r++) ||
          ei !== er.debounceRendering) &&
          ((ei = er.debounceRendering) || ea)(P);
      }
      function P() {
        var e, t, n, s, i, a, o, l;
        for (es.sort(eo); (e = es.shift()); )
          e.__d &&
            ((t = es.length),
            (s = void 0),
            (a = (i = (n = e).__v).__e),
            (o = []),
            (l = []),
            n.__P &&
              (((s = w({}, i)).__v = i.__v + 1),
              er.vnode && er.vnode(s),
              j(
                n.__P,
                s,
                i,
                n.__n,
                n.__P.namespaceURI,
                32 & i.__u ? [a] : null,
                o,
                null == a ? C(i) : a,
                !!(32 & i.__u),
                l
              ),
              (s.__v = i.__v),
              (s.__.__k[s.__i] = s),
              z(o, s, l),
              s.__e != a &&
                (function S(e) {
                  var t, n;
                  if (null != (e = e.__) && null != e.__c) {
                    for (
                      e.__e = e.__c.base = null, t = 0;
                      t < e.__k.length;
                      t++
                    )
                      if (null != (n = e.__k[t]) && null != n.__e) {
                        e.__e = e.__c.base = n.__e;
                        break;
                      }
                    return S(e);
                  }
                })(s)),
            es.length > t && es.sort(eo));
        P.__r = 0;
      }
      function $(e, t, n, s, i, a, o, l, c, d, u) {
        var h,
          p,
          y,
          b,
          v,
          E,
          I = (s && s.__k) || eg,
          L = t.length;
        for (
          c = (function (e, t, n, s, i) {
            var a,
              o,
              l,
              c,
              d,
              u = n.length,
              h = u,
              p = 0;
            for (e.__k = Array(i), a = 0; a < i; a++)
              null != (o = t[a]) &&
              "boolean" != typeof o &&
              "function" != typeof o
                ? ((c = a + p),
                  ((o = e.__k[a] =
                    "string" == typeof o ||
                    "number" == typeof o ||
                    "bigint" == typeof o ||
                    o.constructor == String
                      ? m(null, o, null, null, null)
                      : em(o)
                      ? m(k, { children: o }, null, null, null)
                      : void 0 === o.constructor && o.__b > 0
                      ? m(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v)
                      : o).__ = e),
                  (o.__b = e.__b + 1),
                  (l = null),
                  -1 !==
                    (d = o.__i =
                      (function (e, t, n, s) {
                        var i,
                          a,
                          o = e.key,
                          l = e.type,
                          c = t[n];
                        if (
                          null === c ||
                          (c && o == c.key && l === c.type && 0 == (2 & c.__u))
                        )
                          return n;
                        if (s > (null != c && 0 == (2 & c.__u) ? 1 : 0))
                          for (i = n - 1, a = n + 1; i >= 0 || a < t.length; ) {
                            if (i >= 0) {
                              if (
                                (c = t[i]) &&
                                0 == (2 & c.__u) &&
                                o == c.key &&
                                l === c.type
                              )
                                return i;
                              i--;
                            }
                            if (a < t.length) {
                              if (
                                (c = t[a]) &&
                                0 == (2 & c.__u) &&
                                o == c.key &&
                                l === c.type
                              )
                                return a;
                              a++;
                            }
                          }
                        return -1;
                      })(o, n, c, h)) && (h--, (l = n[d]) && (l.__u |= 2)),
                  null == l || null === l.__v
                    ? (-1 == d && p--,
                      "function" != typeof o.type && (o.__u |= 4))
                    : d != c &&
                      (d == c - 1
                        ? p--
                        : d == c + 1
                        ? p++
                        : (d > c ? p-- : p++, (o.__u |= 4))))
                : (e.__k[a] = null);
            if (h)
              for (a = 0; a < u; a++)
                null != (l = n[a]) &&
                  0 == (2 & l.__u) &&
                  (l.__e == s && (s = C(l)),
                  (function q(e, t, n) {
                    var s, i;
                    if (
                      (er.unmount && er.unmount(e),
                      (s = e.ref) &&
                        ((s.current && s.current !== e.__e) || V(s, null, t)),
                      null != (s = e.__c))
                    ) {
                      if (s.componentWillUnmount)
                        try {
                          s.componentWillUnmount();
                        } catch (e) {
                          er.__e(e, t);
                        }
                      s.base = s.__P = null;
                    }
                    if ((s = e.__k))
                      for (i = 0; i < s.length; i++)
                        s[i] && q(s[i], t, n || "function" != typeof e.type);
                    n || _(e.__e), (e.__c = e.__ = e.__e = void 0);
                  })(l, l));
            return s;
          })(n, t, I, c, L),
            h = 0;
          h < L;
          h++
        )
          null != (y = n.__k[h]) &&
            ((p = -1 === y.__i ? ep : I[y.__i] || ep),
            (y.__i = h),
            (E = j(e, y, p, i, a, o, l, c, d, u)),
            (b = y.__e),
            y.ref &&
              p.ref != y.ref &&
              (p.ref && V(p.ref, null, y), u.push(y.ref, y.__c || b, y)),
            null == v && null != b && (v = b),
            4 & y.__u || p.__k === y.__k
              ? (c = (function A(e, t, n) {
                  var s, i;
                  if ("function" == typeof e.type) {
                    for (s = e.__k, i = 0; s && i < s.length; i++)
                      s[i] && ((s[i].__ = e), (t = A(s[i], t, n)));
                    return t;
                  }
                  e.__e != t &&
                    (t && e.type && !n.contains(t) && (t = C(e)),
                    n.insertBefore(e.__e, t || null),
                    (t = e.__e));
                  do t = t && t.nextSibling;
                  while (null != t && 8 == t.nodeType);
                  return t;
                })(y, c, e))
              : "function" == typeof y.type && void 0 !== E
              ? (c = E)
              : b && (c = b.nextSibling),
            (y.__u &= -7));
        return (n.__e = v), c;
      }
      function T(e, t, n) {
        "-" == t[0]
          ? e.setProperty(t, null == n ? "" : n)
          : (e[t] =
              null == n
                ? ""
                : "number" != typeof n || ef.test(t)
                ? n
                : n + "px");
      }
      function F(e, t, n, s, i) {
        var a;
        e: if ("style" == t) {
          if ("string" == typeof n) e.style.cssText = n;
          else {
            if (("string" == typeof s && (e.style.cssText = s = ""), s))
              for (t in s) (n && t in n) || T(e.style, t, "");
            if (n) for (t in n) (s && n[t] === s[t]) || T(e.style, t, n[t]);
          }
        } else if ("o" == t[0] && "n" == t[1])
          (a = t != (t = t.replace(el, "$1"))),
            (t =
              t.toLowerCase() in e || "onFocusOut" == t || "onFocusIn" == t
                ? t.toLowerCase().slice(2)
                : t.slice(2)),
            e.l || (e.l = {}),
            (e.l[t + a] = n),
            n
              ? s
                ? (n.u = s.u)
                : ((n.u = ec), e.addEventListener(t, a ? eu : ed, a))
              : e.removeEventListener(t, a ? eu : ed, a);
        else {
          if ("http://www.w3.org/2000/svg" == i)
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
      function O(e) {
        return function (t) {
          if (this.l) {
            var n = this.l[t.type + e];
            if (null == t.t) t.t = ec++;
            else if (t.t < n.u) return;
            return n(er.event ? er.event(t) : t);
          }
        };
      }
      function j(e, t, n, s, i, a, o, l, c, d) {
        var u,
          h,
          p,
          y,
          b,
          v,
          E,
          I,
          L,
          R,
          N,
          U,
          H,
          W,
          K,
          G,
          J,
          Y = t.type;
        if (void 0 !== t.constructor) return null;
        128 & n.__u && ((c = !!(32 & n.__u)), (a = [(l = t.__e = n.__e)])),
          (u = er.__b) && u(t);
        e: if ("function" == typeof Y)
          try {
            if (
              ((I = t.props),
              (L = "prototype" in Y && Y.prototype.render),
              (R = (u = Y.contextType) && s[u.__c]),
              (N = u ? (R ? R.props.value : u.__) : s),
              n.__c
                ? (E = (h = t.__c = n.__c).__ = h.__E)
                : (L
                    ? (t.__c = h = new Y(I, N))
                    : ((t.__c = h = new x(I, N)),
                      (h.constructor = Y),
                      (h.render = B)),
                  R && R.sub(h),
                  (h.props = I),
                  h.state || (h.state = {}),
                  (h.context = N),
                  (h.__n = s),
                  (p = h.__d = !0),
                  (h.__h = []),
                  (h._sb = [])),
              L && null == h.__s && (h.__s = h.state),
              L &&
                null != Y.getDerivedStateFromProps &&
                (h.__s == h.state && (h.__s = w({}, h.__s)),
                w(h.__s, Y.getDerivedStateFromProps(I, h.__s))),
              (y = h.props),
              (b = h.state),
              (h.__v = t),
              p)
            )
              L &&
                null == Y.getDerivedStateFromProps &&
                null != h.componentWillMount &&
                h.componentWillMount(),
                L &&
                  null != h.componentDidMount &&
                  h.__h.push(h.componentDidMount);
            else {
              if (
                (L &&
                  null == Y.getDerivedStateFromProps &&
                  I !== y &&
                  null != h.componentWillReceiveProps &&
                  h.componentWillReceiveProps(I, N),
                !h.__e &&
                  ((null != h.shouldComponentUpdate &&
                    !1 === h.shouldComponentUpdate(I, h.__s, N)) ||
                    t.__v == n.__v))
              ) {
                for (
                  t.__v != n.__v &&
                    ((h.props = I), (h.state = h.__s), (h.__d = !1)),
                    t.__e = n.__e,
                    t.__k = n.__k,
                    t.__k.some(function (e) {
                      e && (e.__ = t);
                    }),
                    U = 0;
                  U < h._sb.length;
                  U++
                )
                  h.__h.push(h._sb[U]);
                (h._sb = []), h.__h.length && o.push(h);
                break e;
              }
              null != h.componentWillUpdate &&
                h.componentWillUpdate(I, h.__s, N),
                L &&
                  null != h.componentDidUpdate &&
                  h.__h.push(function () {
                    h.componentDidUpdate(y, b, v);
                  });
            }
            if (
              ((h.context = N),
              (h.props = I),
              (h.__P = e),
              (h.__e = !1),
              (H = er.__r),
              (W = 0),
              L)
            ) {
              for (
                h.state = h.__s,
                  h.__d = !1,
                  H && H(t),
                  u = h.render(h.props, h.state, h.context),
                  K = 0;
                K < h._sb.length;
                K++
              )
                h.__h.push(h._sb[K]);
              h._sb = [];
            } else
              do
                (h.__d = !1),
                  H && H(t),
                  (u = h.render(h.props, h.state, h.context)),
                  (h.state = h.__s);
              while (h.__d && ++W < 25);
            (h.state = h.__s),
              null != h.getChildContext &&
                (s = w(w({}, s), h.getChildContext())),
              L &&
                !p &&
                null != h.getSnapshotBeforeUpdate &&
                (v = h.getSnapshotBeforeUpdate(y, b)),
              (l = $(
                e,
                em(
                  (G =
                    null != u && u.type === k && null == u.key
                      ? u.props.children
                      : u)
                )
                  ? G
                  : [G],
                t,
                n,
                s,
                i,
                a,
                o,
                l,
                c,
                d
              )),
              (h.base = t.__e),
              (t.__u &= -161),
              h.__h.length && o.push(h),
              E && (h.__E = h.__ = null);
          } catch (e) {
            if (((t.__v = null), c || null != a)) {
              if (e.then) {
                for (
                  t.__u |= c ? 160 : 128;
                  l && 8 == l.nodeType && l.nextSibling;

                )
                  l = l.nextSibling;
                (a[a.indexOf(l)] = null), (t.__e = l);
              } else for (J = a.length; J--; ) _(a[J]);
            } else (t.__e = n.__e), (t.__k = n.__k);
            er.__e(e, t, n);
          }
        else
          null == a && t.__v == n.__v
            ? ((t.__k = n.__k), (t.__e = n.__e))
            : (l = t.__e =
                (function (e, t, n, s, i, a, o, l, c) {
                  var d,
                    u,
                    h,
                    p,
                    y,
                    b,
                    v,
                    E = n.props,
                    I = t.props,
                    L = t.type;
                  if (
                    ("svg" == L
                      ? (i = "http://www.w3.org/2000/svg")
                      : "math" == L
                      ? (i = "http://www.w3.org/1998/Math/MathML")
                      : i || (i = "http://www.w3.org/1999/xhtml"),
                    null != a)
                  ) {
                    for (d = 0; d < a.length; d++)
                      if (
                        (y = a[d]) &&
                        "setAttribute" in y == !!L &&
                        (L ? y.localName == L : 3 == y.nodeType)
                      ) {
                        (e = y), (a[d] = null);
                        break;
                      }
                  }
                  if (null == e) {
                    if (null == L) return document.createTextNode(I);
                    (e = document.createElementNS(i, L, I.is && I)),
                      l && (er.__m && er.__m(t, a), (l = !1)),
                      (a = null);
                  }
                  if (null === L)
                    E === I || (l && e.data === I) || (e.data = I);
                  else {
                    if (
                      ((a = a && et.call(e.childNodes)),
                      (E = n.props || ep),
                      !l && null != a)
                    )
                      for (E = {}, d = 0; d < e.attributes.length; d++)
                        E[(y = e.attributes[d]).name] = y.value;
                    for (d in E)
                      if (((y = E[d]), "children" == d));
                      else if ("dangerouslySetInnerHTML" == d) h = y;
                      else if (!(d in I)) {
                        if (
                          ("value" == d && "defaultValue" in I) ||
                          ("checked" == d && "defaultChecked" in I)
                        )
                          continue;
                        F(e, d, null, y, i);
                      }
                    for (d in I)
                      (y = I[d]),
                        "children" == d
                          ? (p = y)
                          : "dangerouslySetInnerHTML" == d
                          ? (u = y)
                          : "value" == d
                          ? (b = y)
                          : "checked" == d
                          ? (v = y)
                          : (l && "function" != typeof y) ||
                            E[d] === y ||
                            F(e, d, y, E[d], i);
                    if (u)
                      l ||
                        (h &&
                          (u.__html === h.__html ||
                            u.__html === e.innerHTML)) ||
                        (e.innerHTML = u.__html),
                        (t.__k = []);
                    else if (
                      (h && (e.innerHTML = ""),
                      $(
                        e,
                        em(p) ? p : [p],
                        t,
                        n,
                        s,
                        "foreignObject" == L
                          ? "http://www.w3.org/1999/xhtml"
                          : i,
                        a,
                        o,
                        a ? a[0] : n.__k && C(n, 0),
                        l,
                        c
                      ),
                      null != a)
                    )
                      for (d = a.length; d--; ) _(a[d]);
                    l ||
                      ((d = "value"),
                      "progress" == L && null == b
                        ? e.removeAttribute("value")
                        : void 0 === b ||
                          (b === e[d] &&
                            ("progress" != L || b) &&
                            ("option" != L || b === E[d])) ||
                          F(e, d, b, E[d], i),
                      (d = "checked"),
                      void 0 !== v && v !== e[d] && F(e, d, v, E[d], i));
                  }
                  return e;
                })(n.__e, t, n, s, i, a, o, c, d));
        return (u = er.diffed) && u(t), 128 & t.__u ? void 0 : l;
      }
      function z(e, t, n) {
        for (var s = 0; s < n.length; s++) V(n[s], n[++s], n[++s]);
        er.__c && er.__c(t, e),
          e.some(function (t) {
            try {
              (e = t.__h),
                (t.__h = []),
                e.some(function (e) {
                  e.call(t);
                });
            } catch (e) {
              er.__e(e, t.__v);
            }
          });
      }
      function V(e, t, n) {
        try {
          if ("function" == typeof e) {
            var s = "function" == typeof e.__u;
            s && e.__u(), (s && null == t) || (e.__u = e(t));
          } else e.current = t;
        } catch (e) {
          er.__e(e, n);
        }
      }
      function B(e, t, n) {
        return this.constructor(e, n);
      }
      function D(e, t, n) {
        var s, i, a, o;
        t == document && (t = document.documentElement),
          er.__ && er.__(e, t),
          (i = (s = "function" == typeof n) ? null : (n && n.__k) || t.__k),
          (a = []),
          (o = []),
          j(
            t,
            (e = ((!s && n) || t).__k = g(k, null, [e])),
            i || ep,
            ep,
            t.namespaceURI,
            !s && n
              ? [n]
              : i
              ? null
              : t.firstChild
              ? et.call(t.childNodes)
              : null,
            a,
            !s && n ? n : i ? i.__e : t.firstChild,
            s,
            o
          ),
          z(a, e, o);
      }
      (et = eg.slice),
        (er = {
          __e: function (e, t, n, s) {
            for (var i, a, o; (t = t.__); )
              if ((i = t.__c) && !i.__)
                try {
                  if (
                    ((a = i.constructor) &&
                      null != a.getDerivedStateFromError &&
                      (i.setState(a.getDerivedStateFromError(e)), (o = i.__d)),
                    null != i.componentDidCatch &&
                      (i.componentDidCatch(e, s || {}), (o = i.__d)),
                    o)
                  )
                    return (i.__E = i);
                } catch (t) {
                  e = t;
                }
            throw e;
          },
        }),
        (en = 0),
        (x.prototype.setState = function (e, t) {
          var n;
          (n =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = w({}, this.state))),
            "function" == typeof e && (e = e(w({}, n), this.props)),
            e && w(n, e),
            null != e && this.__v && (t && this._sb.push(t), M(this));
        }),
        (x.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), M(this));
        }),
        (x.prototype.render = k),
        (es = []),
        (ea =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (eo = function (e, t) {
          return e.__v.__b - t.__v.__b;
        }),
        (P.__r = 0),
        (el = /(PointerCapture)$|Capture$/i),
        (ec = 0),
        (ed = O(!1)),
        (eu = O(!0));
      var ey,
        e_,
        eb,
        ew,
        ev = 0,
        ek = [],
        eS = er,
        eE = eS.__b,
        eI = eS.__r,
        ex = eS.diffed,
        eC = eS.__c,
        eL = eS.unmount,
        eM = eS.__;
      function hooks_module_d(e, t) {
        eS.__h && eS.__h(e_, e, ev || t), (ev = 0);
        var n = e_.__H || (e_.__H = { __: [], __h: [] });
        return e >= n.__.length && n.__.push({}), n.__[e];
      }
      function hooks_module_p(e, t, n) {
        var s = hooks_module_d(ey++, 2);
        if (
          ((s.t = e),
          !s.__c &&
            ((s.__ = [
              n ? n(t) : hooks_module_D(void 0, t),
              function (e) {
                var t = s.__N ? s.__N[0] : s.__[0],
                  n = s.t(t, e);
                t !== n && ((s.__N = [n, s.__[1]]), s.__c.setState({}));
              },
            ]),
            (s.__c = e_),
            !e_.u))
        ) {
          var f = function (e, t, n) {
            if (!s.__c.__H) return !0;
            var a = s.__c.__H.__.filter(function (e) {
              return !!e.__c;
            });
            if (
              a.every(function (e) {
                return !e.__N;
              })
            )
              return !i || i.call(this, e, t, n);
            var o = s.__c.props !== e;
            return (
              a.forEach(function (e) {
                if (e.__N) {
                  var t = e.__[0];
                  (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (o = !0);
                }
              }),
              (i && i.call(this, e, t, n)) || o
            );
          };
          e_.u = !0;
          var i = e_.shouldComponentUpdate,
            a = e_.componentWillUpdate;
          (e_.componentWillUpdate = function (e, t, n) {
            if (this.__e) {
              var s = i;
              (i = void 0), f(e, t, n), (i = s);
            }
            a && a.call(this, e, t, n);
          }),
            (e_.shouldComponentUpdate = f);
        }
        return s.__N || s.__;
      }
      function hooks_module_j() {
        for (var e; (e = ek.shift()); )
          if (e.__P && e.__H)
            try {
              e.__H.__h.forEach(hooks_module_z),
                e.__H.__h.forEach(hooks_module_B),
                (e.__H.__h = []);
            } catch (t) {
              (e.__H.__h = []), eS.__e(t, e.__v);
            }
      }
      (eS.__b = function (e) {
        (e_ = null), eE && eE(e);
      }),
        (eS.__ = function (e, t) {
          e && t.__k && t.__k.__m && (e.__m = t.__k.__m), eM && eM(e, t);
        }),
        (eS.__r = function (e) {
          eI && eI(e), (ey = 0);
          var t = (e_ = e.__c).__H;
          t &&
            (eb === e_
              ? ((t.__h = []),
                (e_.__h = []),
                t.__.forEach(function (e) {
                  e.__N && (e.__ = e.__N), (e.i = e.__N = void 0);
                }))
              : (t.__h.forEach(hooks_module_z),
                t.__h.forEach(hooks_module_B),
                (t.__h = []),
                (ey = 0))),
            (eb = e_);
        }),
        (eS.diffed = function (e) {
          ex && ex(e);
          var t = e.__c;
          t &&
            t.__H &&
            (t.__H.__h.length &&
              ((1 !== ek.push(t) && ew === eS.requestAnimationFrame) ||
                (
                  (ew = eS.requestAnimationFrame) ||
                  function (e) {
                    var t,
                      r = function () {
                        clearTimeout(n),
                          eA && cancelAnimationFrame(t),
                          setTimeout(e);
                      },
                      n = setTimeout(r, 100);
                    eA && (t = requestAnimationFrame(r));
                  }
                )(hooks_module_j)),
            t.__H.__.forEach(function (e) {
              e.i && (e.__H = e.i), (e.i = void 0);
            })),
            (eb = e_ = null);
        }),
        (eS.__c = function (e, t) {
          t.some(function (e) {
            try {
              e.__h.forEach(hooks_module_z),
                (e.__h = e.__h.filter(function (e) {
                  return !e.__ || hooks_module_B(e);
                }));
            } catch (n) {
              t.some(function (e) {
                e.__h && (e.__h = []);
              }),
                (t = []),
                eS.__e(n, e.__v);
            }
          }),
            eC && eC(e, t);
        }),
        (eS.unmount = function (e) {
          eL && eL(e);
          var t,
            n = e.__c;
          n &&
            n.__H &&
            (n.__H.__.forEach(function (e) {
              try {
                hooks_module_z(e);
              } catch (e) {
                t = e;
              }
            }),
            (n.__H = void 0),
            t && eS.__e(t, n.__v));
        });
      var eA = "function" == typeof requestAnimationFrame;
      function hooks_module_z(e) {
        var t = e_,
          n = e.__c;
        "function" == typeof n && ((e.__c = void 0), n()), (e_ = t);
      }
      function hooks_module_B(e) {
        var t = e_;
        (e.__c = e.__()), (e_ = t);
      }
      function hooks_module_D(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
      let Snackbar = class Snackbar {
        constructor() {
          (this.items = new Map()),
            (this.nextItemKey = 0),
            (this.root = null),
            (this.darkMode = isDarkMode());
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
            D(
              g(
                "div",
                null,
                g(
                  SnackbarContainer,
                  { darkMode: this.darkMode },
                  Array.from(this.items.entries()).map(([e, t]) =>
                    g(SnackbarInstance, Object.assign({}, t, { key: e }))
                  )
                )
              ),
              this.root
            );
        }
      };
      let SnackbarContainer = (e) =>
          g(
            "div",
            { class: (0, eh.clsx)("-cbwsdk-snackbar-container") },
            g(
              "style",
              null,
              ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}"
            ),
            g("div", { class: "-cbwsdk-snackbar" }, e.children)
          ),
        SnackbarInstance = ({ autoExpand: e, message: t, menuItems: n }) => {
          var s, i, a;
          let [o, l] = ((ev = 1), hooks_module_p(hooks_module_D, !0)),
            [c, d] = ((ev = 1), hooks_module_p(hooks_module_D, null != e && e));
          return (
            (i = hooks_module_d(ey++, 3)),
            !eS.__s &&
              (!(a = i.__H) ||
                a.length !== s.length ||
                s.some(function (e, t) {
                  return e !== a[t];
                })) &&
              ((i.__ = () => {
                let e = [
                  window.setTimeout(() => {
                    l(!1);
                  }, 1),
                  window.setTimeout(() => {
                    d(!0);
                  }, 1e4),
                ];
                return () => {
                  e.forEach(window.clearTimeout);
                };
              }),
              (i.i = s),
              e_.__H.__h.push(i)),
            g(
              "div",
              {
                class: (0, eh.clsx)(
                  "-cbwsdk-snackbar-instance",
                  o && "-cbwsdk-snackbar-instance-hidden",
                  c && "-cbwsdk-snackbar-instance-expanded"
                ),
              },
              g(
                "div",
                {
                  class: "-cbwsdk-snackbar-instance-header",
                  onClick: () => {
                    d(!c);
                  },
                },
                g("img", {
                  src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                  class: "-cbwsdk-snackbar-instance-header-cblogo",
                }),
                " ",
                g(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-header-message" },
                  t
                ),
                g(
                  "div",
                  { class: "-gear-container" },
                  !c &&
                    g(
                      "svg",
                      {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      g("circle", {
                        cx: "12",
                        cy: "12",
                        r: "12",
                        fill: "#F5F7F8",
                      })
                    ),
                  g("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                    class: "-gear-icon",
                    title: "Expand",
                  })
                )
              ),
              n &&
                n.length > 0 &&
                g(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-menu" },
                  n.map((e, t) =>
                    g(
                      "div",
                      {
                        class: (0, eh.clsx)(
                          "-cbwsdk-snackbar-instance-menu-item",
                          e.isRed &&
                            "-cbwsdk-snackbar-instance-menu-item-is-red"
                        ),
                        onClick: e.onClick,
                        key: t,
                      },
                      g(
                        "svg",
                        {
                          width: e.svgWidth,
                          height: e.svgHeight,
                          viewBox: "0 0 10 11",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        g("path", {
                          "fill-rule": e.defaultFillRule,
                          "clip-rule": e.defaultClipRule,
                          d: e.path,
                          fill: "#AAAAAA",
                        })
                      ),
                      g(
                        "span",
                        {
                          class: (0, eh.clsx)(
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
      let WalletLinkRelayUI = class WalletLinkRelayUI {
        constructor() {
          (this.attached = !1), (this.snackbar = new Snackbar());
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
            injectCssReset();
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
      };
      let RedirectDialog = class RedirectDialog {
        constructor() {
          (this.root = null), (this.darkMode = isDarkMode());
        }
        attach() {
          let e = document.documentElement;
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-css-reset"),
            e.appendChild(this.root),
            injectCssReset();
        }
        present(e) {
          this.render(e);
        }
        clear() {
          this.render(null);
        }
        render(e) {
          this.root &&
            (D(null, this.root),
            e &&
              D(
                g(
                  RedirectDialogContent,
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
      };
      let RedirectDialogContent = ({
          title: e,
          buttonText: t,
          darkMode: n,
          onButtonClick: s,
          onDismiss: i,
        }) =>
          g(
            SnackbarContainer,
            { darkMode: n },
            g(
              "div",
              { class: "-cbwsdk-redirect-dialog" },
              g(
                "style",
                null,
                ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}"
              ),
              g("div", {
                class: "-cbwsdk-redirect-dialog-backdrop",
                onClick: i,
              }),
              g(
                "div",
                {
                  class: (0, eh.clsx)(
                    "-cbwsdk-redirect-dialog-box",
                    n ? "dark" : "light"
                  ),
                },
                g("p", null, e),
                g("button", { onClick: s }, t)
              )
            )
          ),
        eR = "https://www.walletlink.org";
      let WLMobileRelayUI = class WLMobileRelayUI {
        constructor() {
          (this.attached = !1), (this.redirectDialog = new RedirectDialog());
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
      };
      let WalletLinkRelay = class WalletLinkRelay {
        constructor(e) {
          var t;
          (this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }),
            (this.isMobileWeb =
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                null === (t = null == window ? void 0 : window.navigator) ||
                  void 0 === t
                  ? void 0
                  : t.userAgent
              )),
            (this.linkedUpdated = (e) => {
              this.isLinked = e;
              let t = this.storage.getItem(U);
              if (
                (e && (this._session.linked = e),
                (this.isUnlinkedErrorState = !1),
                t)
              ) {
                let n = t.split(" "),
                  s = "true" === this.storage.getItem("IsStandaloneSigning");
                "" === n[0] ||
                  e ||
                  !this._session.linked ||
                  s ||
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
                WalletLinkRelay.accountRequestCallbackIds.size > 0 &&
                  (Array.from(
                    WalletLinkRelay.accountRequestCallbackIds.values()
                  ).forEach((t) => {
                    this.invokeCallback(t, {
                      method: "requestEthereumAccounts",
                      result: [e],
                    });
                  }),
                  WalletLinkRelay.accountRequestCallbackIds.clear());
            }),
            (this.resetAndReload = this.resetAndReload.bind(this)),
            (this.linkAPIUrl = e.linkAPIUrl),
            (this.storage = e.storage),
            (this.metadata = e.metadata),
            (this.accountsCallback = e.accountsCallback),
            (this.chainCallback = e.chainCallback);
          let { session: n, ui: s, connection: i } = this.subscribe();
          (this._session = n),
            (this.connection = i),
            (this.relayEventManager = new RelayEventManager()),
            (this.ui = s),
            this.ui.attach();
        }
        subscribe() {
          let e =
              WalletLinkSession.load(this.storage) ||
              WalletLinkSession.create(this.storage),
            { linkAPIUrl: t } = this,
            n = new WalletLinkConnection({
              session: e,
              linkAPIUrl: t,
              listener: this,
            }),
            s = this.isMobileWeb
              ? new WLMobileRelayUI()
              : new WalletLinkRelayUI();
          return n.connect(), { session: e, ui: s, connection: n };
        }
        resetAndReload() {
          this.connection
            .destroy()
            .then(() => {
              let e = WalletLinkSession.load(this.storage);
              (null == e ? void 0 : e.id) === this._session.id &&
                ScopedLocalStorage.clearAll(),
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
              weiValue: bigIntStringFromBigInt(e.weiValue),
              data: hexStringFromBuffer(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei
                ? bigIntStringFromBigInt(e.gasPriceInWei)
                : null,
              maxFeePerGas: e.gasPriceInWei
                ? bigIntStringFromBigInt(e.gasPriceInWei)
                : null,
              maxPriorityFeePerGas: e.gasPriceInWei
                ? bigIntStringFromBigInt(e.gasPriceInWei)
                : null,
              gasLimit: e.gasLimit ? bigIntStringFromBigInt(e.gasLimit) : null,
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
              weiValue: bigIntStringFromBigInt(e.weiValue),
              data: hexStringFromBuffer(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei
                ? bigIntStringFromBigInt(e.gasPriceInWei)
                : null,
              maxFeePerGas: e.maxFeePerGas
                ? bigIntStringFromBigInt(e.maxFeePerGas)
                : null,
              maxPriorityFeePerGas: e.maxPriorityFeePerGas
                ? bigIntStringFromBigInt(e.maxPriorityFeePerGas)
                : null,
              gasLimit: e.gasLimit ? bigIntStringFromBigInt(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !0,
            },
          });
        }
        submitEthereumTransaction(e, t) {
          return this.sendRequest({
            method: "submitEthereumTransaction",
            params: {
              signedTransaction: hexStringFromBuffer(e, !0),
              chainId: t,
            },
          });
        }
        getWalletLinkSession() {
          return this._session;
        }
        sendRequest(e) {
          let t = null,
            n = randomBytesHex(8),
            cancel = (s) => {
              this.publishWeb3RequestCanceledEvent(n),
                this.handleErrorResponse(n, e.method, s),
                null == t || t();
            };
          return new Promise((s, i) => {
            (t = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: cancel,
              onResetConnection: this.resetAndReload,
            })),
              this.relayEventManager.callbacks.set(n, (e) => {
                if ((null == t || t(), isErrorResponse(e)))
                  return i(Error(e.errorMessage));
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
          if (this.ui instanceof WLMobileRelayUI)
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
            WalletLinkRelay.accountRequestCallbackIds.forEach((e) =>
              this.invokeCallback(e, t)
            ),
              WalletLinkRelay.accountRequestCallbackIds.clear();
            return;
          }
          this.invokeCallback(e, t);
        }
        handleErrorResponse(e, t, n) {
          var s;
          let i =
            null !== (s = null == n ? void 0 : n.message) && void 0 !== s
              ? s
              : "Unspecified error message.";
          this.handleWeb3ResponseMessage(e, { method: t, errorMessage: i });
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
            s = randomBytesHex(8);
          return new Promise((e, t) => {
            this.relayEventManager.callbacks.set(s, (n) => {
              if (isErrorResponse(n)) return t(Error(n.errorMessage));
              e(n);
            }),
              WalletLinkRelay.accountRequestCallbackIds.add(s),
              this.publishWeb3RequestEvent(s, n);
          });
        }
        watchAsset(e, t, n, s, i, a) {
          let o = {
              method: "watchAsset",
              params: {
                type: e,
                options: { address: t, symbol: n, decimals: s, image: i },
                chainId: a,
              },
            },
            l = null,
            c = randomBytesHex(8);
          return (
            (l = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(c),
                  this.handleErrorResponse(c, o.method, e),
                  null == l || l();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == l || l(), isErrorResponse(n)))
                  return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, o);
            })
          );
        }
        addEthereumChain(e, t, n, s, i, a) {
          let o = {
              method: "addEthereumChain",
              params: {
                chainId: e,
                rpcUrls: t,
                blockExplorerUrls: s,
                chainName: i,
                iconUrls: n,
                nativeCurrency: a,
              },
            },
            l = null,
            c = randomBytesHex(8);
          return (
            (l = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(c),
                  this.handleErrorResponse(c, o.method, e),
                  null == l || l();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == l || l(), isErrorResponse(n)))
                  return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, o);
            })
          );
        }
        switchEthereumChain(e, t) {
          let n = {
              method: "switchEthereumChain",
              params: Object.assign({ chainId: e }, { address: t }),
            },
            s = null,
            i = randomBytesHex(8);
          return (
            (s = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(i),
                  this.handleErrorResponse(i, n.method, e),
                  null == s || s();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(i, (n) =>
                (null == s || s(), isErrorResponse(n) && n.errorCode)
                  ? t(
                      l.provider.custom({
                        code: n.errorCode,
                        message:
                          "Unrecognized chain ID. Try adding the chain using addEthereumChain first.",
                      })
                    )
                  : isErrorResponse(n)
                  ? t(Error(n.errorMessage))
                  : void e(n)
              ),
                this.publishWeb3RequestEvent(i, n);
            })
          );
        }
      };
      WalletLinkRelay.accountRequestCallbackIds = new Set();
      var eP = n(48764).Buffer;
      let eN = "DefaultChainId",
        eT = "DefaultJsonRpcUrl";
      let WalletLinkSigner = class WalletLinkSigner {
        constructor(e) {
          (this._relay = null),
            (this._addresses = []),
            (this.metadata = e.metadata),
            (this._storage = new ScopedLocalStorage("walletlink", eR)),
            (this.callback = e.callback || null);
          let t = this._storage.getItem(U);
          if (t) {
            let e = t.split(" ");
            "" !== e[0] &&
              (this._addresses = e.map((e) => ensureAddressString(e)));
          }
          this.initializeRelay();
        }
        getSession() {
          let e = this.initializeRelay(),
            { id: t, secret: n } = e.getWalletLinkSession();
          return { id: t, secret: n };
        }
        async handshake() {
          await this._eth_requestAccounts();
        }
        get selectedAddress() {
          return this._addresses[0] || void 0;
        }
        get jsonRpcUrl() {
          var e;
          return null !== (e = this._storage.getItem(eT)) && void 0 !== e
            ? e
            : void 0;
        }
        set jsonRpcUrl(e) {
          this._storage.setItem(eT, e);
        }
        updateProviderInfo(e, t) {
          var n;
          this.jsonRpcUrl = e;
          let s = this.getChainId();
          this._storage.setItem(eN, t.toString(10));
          let i = ensureIntNumber(t) !== s;
          i &&
            (null === (n = this.callback) ||
              void 0 === n ||
              n.call(this, "chainChanged", hexStringFromNumber(t)));
        }
        async watchAsset(e) {
          let t = Array.isArray(e) ? e[0] : e;
          if (!t.type) throw l.rpc.invalidParams("Type is required");
          if ((null == t ? void 0 : t.type) !== "ERC20")
            throw l.rpc.invalidParams(
              `Asset of type '${t.type}' is not supported`
            );
          if (!(null == t ? void 0 : t.options))
            throw l.rpc.invalidParams("Options are required");
          if (!(null == t ? void 0 : t.options.address))
            throw l.rpc.invalidParams("Address is required");
          let n = this.getChainId(),
            { address: s, symbol: i, image: a, decimals: o } = t.options,
            c = this.initializeRelay(),
            d = await c.watchAsset(
              t.type,
              s,
              i,
              o,
              a,
              null == n ? void 0 : n.toString()
            );
          return !isErrorResponse(d) && !!d.result;
        }
        async addEthereumChain(e) {
          var t, n;
          let s = e[0];
          if (
            (null === (t = s.rpcUrls) || void 0 === t ? void 0 : t.length) === 0
          )
            throw l.rpc.invalidParams("please pass in at least 1 rpcUrl");
          if (!s.chainName || "" === s.chainName.trim())
            throw l.rpc.invalidParams("chainName is a required field");
          if (!s.nativeCurrency)
            throw l.rpc.invalidParams("nativeCurrency is a required field");
          let i = Number.parseInt(s.chainId, 16);
          if (i === this.getChainId()) return !1;
          let a = this.initializeRelay(),
            {
              rpcUrls: o = [],
              blockExplorerUrls: c = [],
              chainName: d,
              iconUrls: u = [],
              nativeCurrency: h,
            } = s,
            p = await a.addEthereumChain(i.toString(), o, u, c, d, h);
          if (isErrorResponse(p)) return !1;
          if (
            (null === (n = p.result) || void 0 === n
              ? void 0
              : n.isApproved) === !0
          )
            return this.updateProviderInfo(o[0], i), null;
          throw l.rpc.internal("unable to add ethereum chain");
        }
        async switchEthereumChain(e) {
          let t = e[0],
            n = Number.parseInt(t.chainId, 16),
            s = this.initializeRelay(),
            i = await s.switchEthereumChain(
              n.toString(10),
              this.selectedAddress || void 0
            );
          if (isErrorResponse(i)) throw i;
          let a = i.result;
          return (
            a.isApproved &&
              a.rpcUrl.length > 0 &&
              this.updateProviderInfo(a.rpcUrl, n),
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
          let s = e.map((e) => ensureAddressString(e));
          JSON.stringify(s) !== JSON.stringify(this._addresses) &&
            ((this._addresses = s),
            null === (n = this.callback) ||
              void 0 === n ||
              n.call(this, "accountsChanged", s),
            this._storage.setItem(U, s.join(" ")));
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
              return hexStringFromNumber(this.getChainId());
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
                throw l.rpc.internal("No RPC URL set for chain");
              return fetchRPCRequest(e, this.jsonRpcUrl);
          }
        }
        _ensureKnownAddress(e) {
          let t = ensureAddressString(e),
            n = this._addresses.map((e) => ensureAddressString(e));
          if (!n.includes(t)) throw Error("Unknown Ethereum address");
        }
        _prepareTransactionParams(e) {
          let t = e.from ? ensureAddressString(e.from) : this.selectedAddress;
          if (!t) throw Error("Ethereum address is unavailable");
          this._ensureKnownAddress(t);
          let n = e.to ? ensureAddressString(e.to) : null,
            s = null != e.value ? ensureBigInt(e.value) : BigInt(0),
            i = e.data ? ensureBuffer(e.data) : eP.alloc(0),
            a = null != e.nonce ? ensureIntNumber(e.nonce) : null,
            o = null != e.gasPrice ? ensureBigInt(e.gasPrice) : null,
            l = null != e.maxFeePerGas ? ensureBigInt(e.maxFeePerGas) : null,
            c =
              null != e.maxPriorityFeePerGas
                ? ensureBigInt(e.maxPriorityFeePerGas)
                : null,
            d = null != e.gas ? ensureBigInt(e.gas) : null,
            u = e.chainId ? ensureIntNumber(e.chainId) : this.getChainId();
          return {
            fromAddress: t,
            toAddress: n,
            weiValue: s,
            data: i,
            nonce: a,
            gasPriceInWei: o,
            maxFeePerGas: l,
            maxPriorityFeePerGas: c,
            gasLimit: d,
            chainId: u,
          };
        }
        async ecRecover(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw l.rpc.invalidParams();
          let s = this.initializeRelay(),
            i = await s.sendRequest({
              method: "ethereumAddressFromSignedMessage",
              params: {
                message: encodeToHexString(n[0]),
                signature: encodeToHexString(n[1]),
                addPrefix: "personal_ecRecover" === t,
              },
            });
          if (isErrorResponse(i)) throw i;
          return i.result;
        }
        getChainId() {
          var e;
          return Number.parseInt(
            null !== (e = this._storage.getItem(eN)) && void 0 !== e ? e : "1",
            10
          );
        }
        async _eth_requestAccounts() {
          var e, t;
          if (this._addresses.length > 0)
            return (
              null === (e = this.callback) ||
                void 0 === e ||
                e.call(this, "connect", {
                  chainId: hexStringFromNumber(this.getChainId()),
                }),
              this._addresses
            );
          let n = this.initializeRelay(),
            s = await n.requestEthereumAccounts();
          if (isErrorResponse(s)) throw s;
          if (!s.result) throw Error("accounts received is empty");
          return (
            this._setAddresses(s.result),
            null === (t = this.callback) ||
              void 0 === t ||
              t.call(this, "connect", {
                chainId: hexStringFromNumber(this.getChainId()),
              }),
            this._addresses
          );
        }
        async personalSign({ params: e }) {
          if (!Array.isArray(e)) throw l.rpc.invalidParams();
          let t = e[1],
            n = e[0];
          this._ensureKnownAddress(t);
          let s = this.initializeRelay(),
            i = await s.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: ensureAddressString(t),
                message: encodeToHexString(n),
                addPrefix: !0,
                typedDataJson: null,
              },
            });
          if (isErrorResponse(i)) throw i;
          return i.result;
        }
        async _eth_signTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            s = await n.signEthereumTransaction(t);
          if (isErrorResponse(s)) throw s;
          return s.result;
        }
        async _eth_sendRawTransaction(e) {
          let t = ensureBuffer(e[0]),
            n = this.initializeRelay(),
            s = await n.submitEthereumTransaction(t, this.getChainId());
          if (isErrorResponse(s)) throw s;
          return s.result;
        }
        async _eth_sendTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            s = await n.signAndSubmitEthereumTransaction(t);
          if (isErrorResponse(s)) throw s;
          return s.result;
        }
        async signTypedData(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw l.rpc.invalidParams();
          let s = n["eth_signTypedData_v1" === t ? 1 : 0],
            i = n["eth_signTypedData_v1" === t ? 0 : 1];
          this._ensureKnownAddress(s);
          let a = this.initializeRelay(),
            o = await a.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: ensureAddressString(s),
                message: ((e) => {
                  let n = {
                    eth_signTypedData_v1: N.hashForSignTypedDataLegacy,
                    eth_signTypedData_v3: N.hashForSignTypedData_v3,
                    eth_signTypedData_v4: N.hashForSignTypedData_v4,
                    eth_signTypedData: N.hashForSignTypedData_v4,
                  };
                  return hexStringFromBuffer(
                    n[t]({
                      data: (function (e) {
                        if ("string" == typeof e) return JSON.parse(e);
                        if ("object" == typeof e) return e;
                        throw l.rpc.invalidParams(
                          `Not a JSON string or an object: ${String(e)}`
                        );
                      })(e),
                    }),
                    !0
                  );
                })(i),
                typedDataJson: JSON.stringify(i, null, 2),
                addPrefix: !1,
              },
            });
          if (isErrorResponse(o)) throw o;
          return o.result;
        }
        initializeRelay() {
          return (
            this._relay ||
              (this._relay = new WalletLinkRelay({
                linkAPIUrl: eR,
                storage: this._storage,
                metadata: this.metadata,
                accountsCallback: this._setAddresses.bind(this),
                chainCallback: this.updateProviderInfo.bind(this),
              })),
            this._relay
          );
        }
      };
      let eD = "SignerType",
        eO = new ScopedLocalStorage("CBWSDK", "SignerConfigurator");
      async function fetchSignerType(e) {
        let {
          communicator: t,
          metadata: n,
          handshakeRequest: s,
          callback: i,
        } = e;
        listenForWalletLinkSessionRequest(t, n, i).catch(() => {});
        let a = {
            id: crypto.randomUUID(),
            event: "selectSignerType",
            data: Object.assign(Object.assign({}, e.preference), {
              handshakeRequest: s,
            }),
          },
          { data: o } = await t.postRequestAndWaitForResponse(a);
        return o;
      }
      async function listenForWalletLinkSessionRequest(e, t, n) {
        await e.onMessage(({ event: e }) => "WalletLinkSessionRequest" === e);
        let s = new WalletLinkSigner({ metadata: t, callback: n });
        e.postMessage({
          event: "WalletLinkUpdate",
          data: { session: s.getSession() },
        }),
          await s.handshake(),
          e.postMessage({ event: "WalletLinkUpdate", data: { connected: !0 } });
      }
      let ej = `Coinbase Wallet SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Coinbase Smart Wallet app.

Please see https://www.smartwallet.dev/guides/tips/popup-tips#cross-origin-opener-policy for more information.`,
        { checkCrossOriginOpenerPolicy: eB, getCrossOriginOpenerPolicy: eU } = {
          getCrossOriginOpenerPolicy: () => (void 0 === s ? "undefined" : s),
          checkCrossOriginOpenerPolicy: async () => {
            if ("undefined" == typeof window) {
              s = "non-browser-env";
              return;
            }
            try {
              let e = `${window.location.origin}${window.location.pathname}`,
                t = await fetch(e, { method: "HEAD" });
              if (!t.ok) throw Error(`HTTP error! status: ${t.status}`);
              let n = t.headers.get("Cross-Origin-Opener-Policy");
              (s = null != n ? n : "null"),
                "same-origin" === s && console.error(ej);
            } catch (e) {
              console.error(
                "Error checking Cross-Origin-Opener-Policy:",
                e.message
              ),
                (s = "error");
            }
          },
        };
      let Communicator = class Communicator {
        constructor({
          url: e = "https://keys.coinbase.com/connect",
          metadata: t,
          preference: n,
        }) {
          (this.popup = null),
            (this.listeners = new Map()),
            (this.postMessage = async (e) => {
              let t = await this.waitForPopupLoaded();
              t.postMessage(e, this.url.origin);
            }),
            (this.postRequestAndWaitForResponse = async (e) => {
              let t = this.onMessage(({ requestId: t }) => t === e.id);
              return this.postMessage(e), await t;
            }),
            (this.onMessage = async (e) =>
              new Promise((t, n) => {
                let listener = (n) => {
                  if (n.origin !== this.url.origin) return;
                  let s = n.data;
                  e(s) &&
                    (t(s),
                    window.removeEventListener("message", listener),
                    this.listeners.delete(listener));
                };
                window.addEventListener("message", listener),
                  this.listeners.set(listener, { reject: n });
              })),
            (this.disconnect = () => {
              var e;
              (e = this.popup) && !e.closed && e.close(),
                (this.popup = null),
                this.listeners.forEach(({ reject: e }, t) => {
                  e(l.provider.userRejectedRequest("Request rejected")),
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
                    (function (e) {
                      let t = {
                        sdkName: v,
                        sdkVersion: b,
                        origin: window.location.origin,
                        coop: eU(),
                      };
                      for (let [n, s] of Object.entries(t))
                        e.searchParams.append(n, s.toString());
                    })(e);
                    let s = window.open(
                      e,
                      "Smart Wallet",
                      `width=420, height=540, left=${t}, top=${n}`
                    );
                    if ((null == s || s.focus(), !s))
                      throw l.rpc.internal("Pop up window failed to open");
                    return s;
                  })(this.url)),
                  this.onMessage(({ event: e }) => "PopupUnload" === e)
                    .then(this.disconnect)
                    .catch(() => {}),
                  this.onMessage(({ event: e }) => "PopupLoaded" === e)
                    .then((e) => {
                      this.postMessage({
                        requestId: e.id,
                        data: {
                          version: b,
                          metadata: this.metadata,
                          preference: this.preference,
                          location: window.location.toString(),
                        },
                      });
                    })
                    .then(() => {
                      if (!this.popup) throw l.rpc.internal();
                      return this.popup;
                    }))),
            (this.url = new URL(e)),
            (this.metadata = t),
            (this.preference = n);
        }
      };
      var eH = n(54146);
      let ProviderEventEmitter = class ProviderEventEmitter extends eH.v {};
      var __rest = function (e, t) {
        var n = {};
        for (var s in e)
          Object.prototype.hasOwnProperty.call(e, s) &&
            0 > t.indexOf(s) &&
            (n[s] = e[s]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, s = Object.getOwnPropertySymbols(e);
            i < s.length;
            i++
          )
            0 > t.indexOf(s[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, s[i]) &&
              (n[s[i]] = e[s[i]]);
        return n;
      };
      let CoinbaseWalletProvider = class CoinbaseWalletProvider extends ProviderEventEmitter {
        constructor(e) {
          var { metadata: t } = e,
            n = e.preference,
            { keysUrl: s } = n,
            i = __rest(n, ["keysUrl"]);
          super(),
            (this.signer = null),
            (this.isCoinbaseWallet = !0),
            (this.metadata = t),
            (this.preference = i),
            (this.communicator = new Communicator({
              url: s,
              metadata: t,
              preference: i,
            }));
          let a = eO.getItem(eD);
          a && (this.signer = this.initSigner(a));
        }
        async request(e) {
          try {
            if (
              (!(function (e) {
                if (!e || "object" != typeof e || Array.isArray(e))
                  throw l.rpc.invalidParams({
                    message: "Expected a single, non-array, object argument.",
                    data: e,
                  });
                let { method: t, params: n } = e;
                if ("string" != typeof t || 0 === t.length)
                  throw l.rpc.invalidParams({
                    message: "'args.method' must be a non-empty string.",
                    data: e,
                  });
                if (
                  void 0 !== n &&
                  !Array.isArray(n) &&
                  ("object" != typeof n || null === n)
                )
                  throw l.rpc.invalidParams({
                    message:
                      "'args.params' must be an object or array if provided.",
                    data: e,
                  });
                switch (t) {
                  case "eth_sign":
                  case "eth_signTypedData_v2":
                  case "eth_subscribe":
                  case "eth_unsubscribe":
                    throw l.provider.unsupportedMethod();
                }
              })(e),
              !this.signer)
            )
              switch (e.method) {
                case "eth_requestAccounts": {
                  let t = await this.requestSignerSelection(e),
                    n = this.initSigner(t);
                  await n.handshake(e), (this.signer = n), eO.setItem(eD, t);
                  break;
                }
                case "net_version":
                  return 1;
                case "eth_chainId":
                  return hexStringFromNumber(1);
                default:
                  throw l.provider.unauthorized(
                    "Must call 'eth_requestAccounts' before other methods"
                  );
              }
            return this.signer.request(e);
          } catch (t) {
            let { code: e } = t;
            return (
              e === i.provider.unauthorized && this.disconnect(),
              Promise.reject(
                (function (e) {
                  let t = (function (e, { shouldIncludeStack: t = !1 } = {}) {
                      let n = {};
                      return (
                        e &&
                        "object" == typeof e &&
                        !Array.isArray(e) &&
                        hasKey(e, "code") &&
                        (function (e) {
                          if (!Number.isInteger(e)) return !1;
                          let t = e.toString();
                          return !!(a[t] || (e >= -32099 && e <= -32e3));
                        })(e.code)
                          ? ((n.code = e.code),
                            e.message && "string" == typeof e.message
                              ? ((n.message = e.message),
                                hasKey(e, "data") && (n.data = e.data))
                              : ((n.message = getMessageFromCode(n.code)),
                                (n.data = {
                                  originalError: assignOriginalError(e),
                                })))
                          : ((n.code = i.rpc.internal),
                            (n.message = hasStringProperty(e, "message")
                              ? e.message
                              : o),
                            (n.data = {
                              originalError: assignOriginalError(e),
                            })),
                        t &&
                          (n.stack = hasStringProperty(e, "stack")
                            ? e.stack
                            : void 0),
                        n
                      );
                    })(
                      (function (e) {
                        var t;
                        if ("string" == typeof e)
                          return { message: e, code: i.rpc.internal };
                        if (isErrorResponse(e)) {
                          let n = e.errorMessage,
                            s =
                              null !== (t = e.errorCode) && void 0 !== t
                                ? t
                                : n.match(/(denied|rejected)/i)
                                ? i.provider.userRejectedRequest
                                : void 0;
                          return Object.assign(Object.assign({}, e), {
                            message: n,
                            code: s,
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
                    n.searchParams.set("version", b),
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
          await (null === (e = this.signer) || void 0 === e
            ? void 0
            : e.cleanup()),
            (this.signer = null),
            ScopedLocalStorage.clearAll(),
            this.emit(
              "disconnect",
              l.provider.disconnected("User initiated disconnection")
            );
        }
        requestSignerSelection(e) {
          return fetchSignerType({
            communicator: this.communicator,
            preference: this.preference,
            metadata: this.metadata,
            handshakeRequest: e,
            callback: this.emit.bind(this),
          });
        }
        initSigner(e) {
          return (function (e) {
            let {
              signerType: t,
              metadata: n,
              communicator: s,
              callback: i,
            } = e;
            switch (t) {
              case "scw":
                return new SCWSigner({
                  metadata: n,
                  callback: i,
                  communicator: s,
                });
              case "walletlink":
                return new WalletLinkSigner({ metadata: n, callback: i });
            }
          })({
            signerType: e,
            metadata: this.metadata,
            communicator: this.communicator,
            callback: this.emit.bind(this),
          });
        }
      };
      let eW = { options: "all" };
      function createCoinbaseWalletSDK(e) {
        var t;
        let n = new ScopedLocalStorage("CBWSDK");
        n.setItem("VERSION", b), eB();
        let s = {
          metadata: {
            appName: e.appName || "Dapp",
            appLogoUrl: e.appLogoUrl || "",
            appChainIds: e.appChainIds || [],
          },
          preference: Object.assign(
            eW,
            null !== (t = e.preference) && void 0 !== t ? t : {}
          ),
        };
        !(function (e) {
          if (e) {
            if (!["all", "smartWalletOnly", "eoaOnly"].includes(e.options))
              throw Error(`Invalid options: ${e.options}`);
            if (
              e.attribution &&
              void 0 !== e.attribution.auto &&
              void 0 !== e.attribution.dataSuffix
            )
              throw Error(
                "Attribution cannot contain both auto and dataSuffix properties"
              );
          }
        })(s.preference);
        let i = null;
        return {
          getProvider: () => (
            i ||
              (i = (function (e) {
                var t;
                let n = { metadata: e.metadata, preference: e.preference };
                return null !==
                  (t = (function ({ metadata: e, preference: t }) {
                    var n, s;
                    let { appName: i, appLogoUrl: a, appChainIds: o } = e;
                    if ("smartWalletOnly" !== t.options) {
                      let e = (function () {
                        let e = globalThis;
                        return e.coinbaseWalletExtension;
                      })();
                      if (e)
                        return (
                          null === (n = e.setAppInfo) ||
                            void 0 === n ||
                            n.call(e, i, a, o, t),
                          e
                        );
                    }
                    let l = (function () {
                      var e, t;
                      try {
                        let n = globalThis;
                        return null !== (e = n.ethereum) && void 0 !== e
                          ? e
                          : null === (t = n.top) || void 0 === t
                          ? void 0
                          : t.ethereum;
                      } catch (e) {
                        return;
                      }
                    })();
                    if (null == l ? void 0 : l.isCoinbaseBrowser)
                      return (
                        null === (s = l.setAppInfo) ||
                          void 0 === s ||
                          s.call(l, i, a, o, t),
                        l
                      );
                  })(n)) && void 0 !== t
                  ? t
                  : new CoinbaseWalletProvider(n);
              })(s)),
            i
          ),
        };
      }
    },
  },
]);
