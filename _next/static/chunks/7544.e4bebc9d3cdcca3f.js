(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7544],
  {
    23518: function (e, r, s) {
      "use strict";
      s.d(r, {
        EthereumProvider: function () {
          return rs;
        },
      });
      var p = s(17187),
        b = s.n(p),
        v = s(41932),
        w = s(66736),
        _ = s(38200);
      let n = class n extends _.q {
        constructor(e) {
          super();
        }
      };
      let P = w.FIVE_SECONDS,
        S = { pulse: "heartbeat_pulse" };
      let index_es_i = class index_es_i extends n {
        constructor(e) {
          super(e),
            (this.events = new p.EventEmitter()),
            (this.interval = P),
            (this.interval = e?.interval || P);
        }
        static async init(e) {
          let r = new index_es_i(e);
          return await r.init(), r;
        }
        async init() {
          await this.initialize();
        }
        stop() {
          clearInterval(this.intervalRef);
        }
        on(e, r) {
          this.events.on(e, r);
        }
        once(e, r) {
          this.events.once(e, r);
        }
        off(e, r) {
          this.events.off(e, r);
        }
        removeListener(e, r) {
          this.events.removeListener(e, r);
        }
        async initialize() {
          this.intervalRef = setInterval(
            () => this.pulse(),
            (0, w.toMiliseconds)(this.interval)
          );
        }
        pulse() {
          this.events.emit(S.pulse);
        }
      };
      var I = s(3432),
        A = s(36559),
        R = s.n(A),
        C = s(85094);
      let B = { level: "info" },
        j = "custom_context";
      let O = class O {
        constructor(e) {
          (this.nodeValue = e),
            (this.sizeInBytes = new TextEncoder().encode(
              this.nodeValue
            ).length),
            (this.next = null);
        }
        get value() {
          return this.nodeValue;
        }
        get size() {
          return this.sizeInBytes;
        }
      };
      let d = class d {
        constructor(e) {
          (this.head = null),
            (this.tail = null),
            (this.lengthInNodes = 0),
            (this.maxSizeInBytes = e),
            (this.sizeInBytes = 0);
        }
        append(e) {
          let r = new O(e);
          if (r.size > this.maxSizeInBytes)
            throw Error(
              `[LinkedList] Value too big to insert into list: ${e} with size ${r.size}`
            );
          for (; this.size + r.size > this.maxSizeInBytes; ) this.shift();
          this.head ? this.tail && (this.tail.next = r) : (this.head = r),
            (this.tail = r),
            this.lengthInNodes++,
            (this.sizeInBytes += r.size);
        }
        shift() {
          if (!this.head) return;
          let e = this.head;
          (this.head = this.head.next),
            this.head || (this.tail = null),
            this.lengthInNodes--,
            (this.sizeInBytes -= e.size);
        }
        toArray() {
          let e = [],
            r = this.head;
          for (; null !== r; ) e.push(r.value), (r = r.next);
          return e;
        }
        get length() {
          return this.lengthInNodes;
        }
        get size() {
          return this.sizeInBytes;
        }
        toOrderedArray() {
          return Array.from(this);
        }
        [Symbol.iterator]() {
          let e = this.head;
          return {
            next: () => {
              if (!e) return { done: !0, value: null };
              let r = e.value;
              return (e = e.next), { done: !1, value: r };
            },
          };
        }
      };
      let L = class L {
        constructor(e, r = 1024e3) {
          (this.level = e ?? "error"),
            (this.levelValue = A.levels.values[this.level]),
            (this.MAX_LOG_SIZE_IN_BYTES = r),
            (this.logs = new d(this.MAX_LOG_SIZE_IN_BYTES));
        }
        forwardToConsole(e, r) {
          r === A.levels.values.error
            ? console.error(e)
            : r === A.levels.values.warn
            ? console.warn(e)
            : r === A.levels.values.debug
            ? console.debug(e)
            : r === A.levels.values.trace
            ? console.trace(e)
            : console.log(e);
        }
        appendToLogs(e) {
          this.logs.append(
            (0, C.u)({ timestamp: new Date().toISOString(), log: e })
          );
          let r = "string" == typeof e ? JSON.parse(e).level : e.level;
          r >= this.levelValue && this.forwardToConsole(e, r);
        }
        getLogs() {
          return this.logs;
        }
        clearLogs() {
          this.logs = new d(this.MAX_LOG_SIZE_IN_BYTES);
        }
        getLogArray() {
          return Array.from(this.logs);
        }
        logsToBlob(e) {
          let r = this.getLogArray();
          return (
            r.push((0, C.u)({ extraMetadata: e })),
            new Blob(r, { type: "application/json" })
          );
        }
      };
      let m = class m {
        constructor(e, r = 1024e3) {
          this.baseChunkLogger = new L(e, r);
        }
        write(e) {
          this.baseChunkLogger.appendToLogs(e);
        }
        getLogs() {
          return this.baseChunkLogger.getLogs();
        }
        clearLogs() {
          this.baseChunkLogger.clearLogs();
        }
        getLogArray() {
          return this.baseChunkLogger.getLogArray();
        }
        logsToBlob(e) {
          return this.baseChunkLogger.logsToBlob(e);
        }
        downloadLogsBlobInBrowser(e) {
          let r = URL.createObjectURL(this.logsToBlob(e)),
            s = document.createElement("a");
          (s.href = r),
            (s.download = `walletconnect-logs-${new Date().toISOString()}.txt`),
            document.body.appendChild(s),
            s.click(),
            document.body.removeChild(s),
            URL.revokeObjectURL(r);
        }
      };
      let index_es_B = class index_es_B {
        constructor(e, r = 1024e3) {
          this.baseChunkLogger = new L(e, r);
        }
        write(e) {
          this.baseChunkLogger.appendToLogs(e);
        }
        getLogs() {
          return this.baseChunkLogger.getLogs();
        }
        clearLogs() {
          this.baseChunkLogger.clearLogs();
        }
        getLogArray() {
          return this.baseChunkLogger.getLogArray();
        }
        logsToBlob(e) {
          return this.baseChunkLogger.logsToBlob(e);
        }
      };
      var V = Object.defineProperty,
        J = Object.defineProperties,
        W = Object.getOwnPropertyDescriptors,
        X = Object.getOwnPropertySymbols,
        et = Object.prototype.hasOwnProperty,
        es = Object.prototype.propertyIsEnumerable,
        f = (e, r, s) =>
          r in e
            ? V(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (e[r] = s),
        dist_index_es_i = (e, r) => {
          for (var s in r || (r = {})) et.call(r, s) && f(e, s, r[s]);
          if (X) for (var s of X(r)) es.call(r, s) && f(e, s, r[s]);
          return e;
        },
        g = (e, r) => J(e, W(r));
      function k(e) {
        return g(dist_index_es_i({}, e), { level: e?.level || B.level });
      }
      function y(e, r = j) {
        return typeof e.bindings > "u"
          ? (function (e, r = j) {
              return e[r] || "";
            })(e, r)
          : e.bindings().context || "";
      }
      function E(e, r, s = j) {
        let p = (function (e, r, s = j) {
            let p = y(e, s);
            return p.trim() ? `${p}/${r}` : r;
          })(e, r, s),
          b = e.child({ context: p });
        return (function (e, r, s = j) {
          return (e[s] = r), e;
        })(b, p, s);
      }
      let dist_index_es_n = class dist_index_es_n extends _.q {
        constructor(e) {
          super(), (this.opts = e), (this.protocol = "wc"), (this.version = 2);
        }
      };
      let h = class h extends _.q {
        constructor(e, r) {
          super(),
            (this.core = e),
            (this.logger = r),
            (this.records = new Map());
        }
      };
      let a = class a {
        constructor(e, r) {
          (this.logger = e), (this.core = r);
        }
      };
      let index_es_g = class index_es_g extends _.q {
        constructor(e, r) {
          super(), (this.relayer = e), (this.logger = r);
        }
      };
      let u = class u extends _.q {
        constructor(e) {
          super();
        }
      };
      let index_es_p = class index_es_p {
        constructor(e, r, s, p) {
          (this.core = e), (this.logger = r), (this.name = s);
        }
      };
      let index_es_d = class index_es_d extends _.q {
        constructor(e, r) {
          super(), (this.relayer = e), (this.logger = r);
        }
      };
      let index_es_x = class index_es_x extends _.q {
        constructor(e, r) {
          super(), (this.core = e), (this.logger = r);
        }
      };
      let index_es_y = class index_es_y {
        constructor(e, r, s) {
          (this.core = e), (this.logger = r), (this.store = s);
        }
      };
      let index_es_v = class index_es_v {
        constructor(e, r) {
          (this.projectId = e), (this.logger = r);
        }
      };
      let index_es_C = class index_es_C {
        constructor(e, r, s) {
          (this.core = e), (this.logger = r), (this.telemetryEnabled = s);
        }
      };
      let index_es_S = class index_es_S {
        constructor(e) {
          (this.opts = e), (this.protocol = "wc"), (this.version = 2);
        }
      };
      let M = class M {
        constructor(e) {
          this.client = e;
        }
      };
      var eo = s(21878),
        ec = s(21236),
        ed = s(59800),
        eh = s(56186);
      let o = class o extends eh.IJsonRpcProvider {
        constructor(e) {
          super(e),
            (this.events = new p.EventEmitter()),
            (this.hasRegisteredEventListeners = !1),
            (this.connection = this.setConnection(e)),
            this.connection.connected && this.registerEventListeners();
        }
        async connect(e = this.connection) {
          await this.open(e);
        }
        async disconnect() {
          await this.close();
        }
        on(e, r) {
          this.events.on(e, r);
        }
        once(e, r) {
          this.events.once(e, r);
        }
        off(e, r) {
          this.events.off(e, r);
        }
        removeListener(e, r) {
          this.events.removeListener(e, r);
        }
        async request(e, r) {
          return this.requestStrict(
            (0, eh.formatJsonRpcRequest)(
              e.method,
              e.params || [],
              e.id || (0, eh.getBigIntRpcId)().toString()
            ),
            r
          );
        }
        async requestStrict(e, r) {
          return new Promise(async (s, p) => {
            if (!this.connection.connected)
              try {
                await this.open();
              } catch (e) {
                p(e);
              }
            this.events.on(`${e.id}`, (e) => {
              (0, eh.isJsonRpcError)(e) ? p(e.error) : s(e.result);
            });
            try {
              await this.connection.send(e, r);
            } catch (e) {
              p(e);
            }
          });
        }
        setConnection(e = this.connection) {
          return e;
        }
        onPayload(e) {
          this.events.emit("payload", e),
            (0, eh.isJsonRpcResponse)(e)
              ? this.events.emit(`${e.id}`, e)
              : this.events.emit("message", { type: e.method, data: e.params });
        }
        onClose(e) {
          e &&
            3e3 === e.code &&
            this.events.emit(
              "error",
              Error(
                `WebSocket connection closed abnormally with code: ${e.code} ${
                  e.reason ? `(${e.reason})` : ""
                }`
              )
            ),
            this.events.emit("disconnect");
        }
        async open(e = this.connection) {
          (this.connection === e && this.connection.connected) ||
            (this.connection.connected && this.close(),
            "string" == typeof e &&
              (await this.connection.open(e), (e = this.connection)),
            (this.connection = this.setConnection(e)),
            await this.connection.open(),
            this.registerEventListeners(),
            this.events.emit("connect"));
        }
        async close() {
          await this.connection.close();
        }
        registerEventListeners() {
          this.hasRegisteredEventListeners ||
            (this.connection.on("payload", (e) => this.onPayload(e)),
            this.connection.on("close", (e) => this.onClose(e)),
            this.connection.on("error", (e) => this.events.emit("error", e)),
            this.connection.on("register_error", (e) => this.onClose()),
            (this.hasRegisteredEventListeners = !0));
        }
      };
      var ef = s(28939),
        el = s(72307),
        ep = s.n(el);
      let eb = "core",
        eg = `wc@2:${eb}:`,
        em = { logger: "error" },
        ev = { database: ":memory:" },
        ey = "client_ed25519_seed",
        ew = w.ONE_DAY,
        e_ = w.SIX_HOURS,
        eM = "wss://relay.walletconnect.org",
        eP = {
          message: "relayer_message",
          message_ack: "relayer_message_ack",
          connect: "relayer_connect",
          disconnect: "relayer_disconnect",
          error: "relayer_error",
          connection_stalled: "relayer_connection_stalled",
          publish: "relayer_publish",
        },
        eS = {
          payload: "payload",
          connect: "connect",
          disconnect: "disconnect",
          error: "error",
        },
        eI = "2.17.0",
        eE = { link_mode: "link_mode", relay: "relay" },
        ex = "WALLETCONNECT_LINK_MODE_APPS",
        eA = {
          created: "subscription_created",
          deleted: "subscription_deleted",
          sync: "subscription_sync",
          resubscribed: "subscription_resubscribed",
        },
        eN = 1e3 * w.FIVE_SECONDS,
        eR = {
          wc_pairingDelete: {
            req: { ttl: w.ONE_DAY, prompt: !1, tag: 1e3 },
            res: { ttl: w.ONE_DAY, prompt: !1, tag: 1001 },
          },
          wc_pairingPing: {
            req: { ttl: w.THIRTY_SECONDS, prompt: !1, tag: 1002 },
            res: { ttl: w.THIRTY_SECONDS, prompt: !1, tag: 1003 },
          },
          unregistered_method: {
            req: { ttl: w.ONE_DAY, prompt: !1, tag: 0 },
            res: { ttl: w.ONE_DAY, prompt: !1, tag: 0 },
          },
        },
        eC = {
          create: "pairing_create",
          expire: "pairing_expire",
          delete: "pairing_delete",
          ping: "pairing_ping",
        },
        eq = {
          created: "history_created",
          updated: "history_updated",
          deleted: "history_deleted",
          sync: "history_sync",
        },
        eT = {
          created: "expirer_created",
          deleted: "expirer_deleted",
          expired: "expirer_expired",
          sync: "expirer_sync",
        },
        eB = "https://verify.walletconnect.org",
        eO = `${eB}/v3`,
        ek = ["https://verify.walletconnect.com", eB],
        eD = {
          pairing_started: "pairing_started",
          pairing_uri_validation_success: "pairing_uri_validation_success",
          pairing_uri_not_expired: "pairing_uri_not_expired",
          store_new_pairing: "store_new_pairing",
          subscribing_pairing_topic: "subscribing_pairing_topic",
          subscribe_pairing_topic_success: "subscribe_pairing_topic_success",
          existing_pairing: "existing_pairing",
          pairing_not_expired: "pairing_not_expired",
          emit_inactive_pairing: "emit_inactive_pairing",
          emit_session_proposal: "emit_session_proposal",
        },
        ez = {
          no_internet_connection: "no_internet_connection",
          malformed_pairing_uri: "malformed_pairing_uri",
          active_pairing_already_exists: "active_pairing_already_exists",
          subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure",
          pairing_expired: "pairing_expired",
          proposal_listener_not_found: "proposal_listener_not_found",
        },
        eL = {
          session_approve_started: "session_approve_started",
          session_namespaces_validation_success:
            "session_namespaces_validation_success",
          subscribing_session_topic: "subscribing_session_topic",
          subscribe_session_topic_success: "subscribe_session_topic_success",
          publishing_session_approve: "publishing_session_approve",
          session_approve_publish_success: "session_approve_publish_success",
          store_session: "store_session",
          publishing_session_settle: "publishing_session_settle",
          session_settle_publish_success: "session_settle_publish_success",
        },
        ej = {
          no_internet_connection: "no_internet_connection",
          proposal_expired: "proposal_expired",
          subscribe_session_topic_failure: "subscribe_session_topic_failure",
          session_approve_publish_failure: "session_approve_publish_failure",
          session_settle_publish_failure: "session_settle_publish_failure",
          session_approve_namespace_validation_failure:
            "session_approve_namespace_validation_failure",
          proposal_not_found: "proposal_not_found",
        },
        e$ = {
          authenticated_session_approve_started:
            "authenticated_session_approve_started",
          create_authenticated_session_topic:
            "create_authenticated_session_topic",
          cacaos_verified: "cacaos_verified",
          store_authenticated_session: "store_authenticated_session",
          subscribing_authenticated_session_topic:
            "subscribing_authenticated_session_topic",
          subscribe_authenticated_session_topic_success:
            "subscribe_authenticated_session_topic_success",
          publishing_authenticated_session_approve:
            "publishing_authenticated_session_approve",
        },
        eF = {
          no_internet_connection: "no_internet_connection",
          invalid_cacao: "invalid_cacao",
          subscribe_authenticated_session_topic_failure:
            "subscribe_authenticated_session_topic_failure",
          authenticated_session_approve_publish_failure:
            "authenticated_session_approve_publish_failure",
          authenticated_session_pending_request_not_found:
            "authenticated_session_pending_request_not_found",
        };
      var As = function (e, r) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        for (var s = new Uint8Array(256), p = 0; p < s.length; p++) s[p] = 255;
        for (var b = 0; b < e.length; b++) {
          var v = e.charAt(b),
            w = v.charCodeAt(0);
          if (255 !== s[w]) throw TypeError(v + " is ambiguous");
          s[w] = b;
        }
        var _ = e.length,
          P = e.charAt(0),
          S = Math.log(_) / Math.log(256),
          I = Math.log(256) / Math.log(_);
        function m(e) {
          if ("string" != typeof e) throw TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          var r = 0;
          if (" " !== e[0]) {
            for (var p = 0, b = 0; e[r] === P; ) p++, r++;
            for (
              var v = ((e.length - r) * S + 1) >>> 0, w = new Uint8Array(v);
              e[r];

            ) {
              var I = s[e.charCodeAt(r)];
              if (255 === I) return;
              for (
                var A = 0, R = v - 1;
                (0 !== I || A < b) && -1 !== R;
                R--, A++
              )
                (I += (_ * w[R]) >>> 0),
                  (w[R] = I % 256 >>> 0),
                  (I = (I / 256) >>> 0);
              if (0 !== I) throw Error("Non-zero carry");
              (b = A), r++;
            }
            if (" " !== e[r]) {
              for (var C = v - b; C !== v && 0 === w[C]; ) C++;
              for (var B = new Uint8Array(p + (v - C)), j = p; C !== v; )
                B[j++] = w[C++];
              return B;
            }
          }
        }
        return {
          encode: function (r) {
            if (
              (r instanceof Uint8Array ||
                (ArrayBuffer.isView(r)
                  ? (r = new Uint8Array(r.buffer, r.byteOffset, r.byteLength))
                  : Array.isArray(r) && (r = Uint8Array.from(r))),
              !(r instanceof Uint8Array))
            )
              throw TypeError("Expected Uint8Array");
            if (0 === r.length) return "";
            for (var s = 0, p = 0, b = 0, v = r.length; b !== v && 0 === r[b]; )
              b++, s++;
            for (
              var w = ((v - b) * I + 1) >>> 0, S = new Uint8Array(w);
              b !== v;

            ) {
              for (
                var A = r[b], R = 0, C = w - 1;
                (0 !== A || R < p) && -1 !== C;
                C--, R++
              )
                (A += (256 * S[C]) >>> 0),
                  (S[C] = A % _ >>> 0),
                  (A = (A / _) >>> 0);
              if (0 !== A) throw Error("Non-zero carry");
              (p = R), b++;
            }
            for (var B = w - p; B !== w && 0 === S[B]; ) B++;
            for (var j = P.repeat(s); B < w; ++B) j += e.charAt(S[B]);
            return j;
          },
          decodeUnsafe: m,
          decode: function (e) {
            var s = m(e);
            if (s) return s;
            throw Error(`Non-${r} character`);
          },
        };
      };
      let Nt = (e) => {
          if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
            return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e))
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error("Unknown type, must be binary type");
        },
        Ns = (e) => new TextEncoder().encode(e),
        Ls = (e) => new TextDecoder().decode(e);
      let zs = class zs {
        constructor(e, r, s) {
          (this.name = e), (this.prefix = r), (this.baseEncode = s);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      };
      let ks = class ks {
        constructor(e, r, s) {
          if (((this.name = e), (this.prefix = r), void 0 === r.codePointAt(0)))
            throw Error("Invalid prefix character");
          (this.prefixCodePoint = r.codePointAt(0)), (this.baseDecode = s);
        }
        decode(e) {
          if ("string" == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(e) {
          return Lt(this, e);
        }
      };
      let Ms = class Ms {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return Lt(this, e);
        }
        decode(e) {
          let r = e[0],
            s = this.decoders[r];
          if (s) return s.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              e
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      };
      let Lt = (e, r) =>
        new Ms({
          ...(e.decoders || { [e.prefix]: e }),
          ...(r.decoders || { [r.prefix]: r }),
        });
      let $s = class $s {
        constructor(e, r, s, p) {
          (this.name = e),
            (this.prefix = r),
            (this.baseEncode = s),
            (this.baseDecode = p),
            (this.encoder = new zs(e, r, s)),
            (this.decoder = new ks(e, r, p));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      };
      let ae = ({ name: e, prefix: r, encode: s, decode: p }) =>
          new $s(e, r, s, p),
        Q = ({ prefix: e, name: r, alphabet: s }) => {
          let { encode: p, decode: b } = As(s, r);
          return ae({ prefix: e, name: r, encode: p, decode: (e) => Nt(b(e)) });
        },
        Fs = (e, r, s, p) => {
          let b = {};
          for (let e = 0; e < r.length; ++e) b[r[e]] = e;
          let v = e.length;
          for (; "=" === e[v - 1]; ) --v;
          let w = new Uint8Array(((v * s) / 8) | 0),
            _ = 0,
            P = 0,
            S = 0;
          for (let r = 0; r < v; ++r) {
            let v = b[e[r]];
            if (void 0 === v) throw SyntaxError(`Non-${p} character`);
            (P = (P << s) | v),
              (_ += s) >= 8 && ((_ -= 8), (w[S++] = 255 & (P >> _)));
          }
          if (_ >= s || 255 & (P << (8 - _)))
            throw SyntaxError("Unexpected end of data");
          return w;
        },
        Us = (e, r, s) => {
          let p = "=" === r[r.length - 1],
            b = (1 << s) - 1,
            v = "",
            w = 0,
            _ = 0;
          for (let p = 0; p < e.length; ++p)
            for (_ = (_ << 8) | e[p], w += 8; w > s; )
              (w -= s), (v += r[b & (_ >> w)]);
          if ((w && (v += r[b & (_ << (s - w))]), p))
            for (; (v.length * s) & 7; ) v += "=";
          return v;
        },
        index_es_ = ({ name: e, prefix: r, bitsPerChar: s, alphabet: p }) =>
          ae({
            prefix: r,
            name: e,
            encode: (e) => Us(e, p, s),
            decode: (r) => Fs(r, p, s, e),
          }),
        eK = ae({
          prefix: "\x00",
          name: "identity",
          encode: (e) => Ls(e),
          decode: (e) => Ns(e),
        });
      var eH = Object.freeze({ __proto__: null, identity: eK });
      let eU = index_es_({
        prefix: "0",
        name: "base2",
        alphabet: "01",
        bitsPerChar: 1,
      });
      var eV = Object.freeze({ __proto__: null, base2: eU });
      let eJ = index_es_({
        prefix: "7",
        name: "base8",
        alphabet: "01234567",
        bitsPerChar: 3,
      });
      var eG = Object.freeze({ __proto__: null, base8: eJ });
      let eY = Q({ prefix: "9", name: "base10", alphabet: "0123456789" });
      var eW = Object.freeze({ __proto__: null, base10: eY });
      let eZ = index_es_({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        eQ = index_es_({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        });
      var eX = Object.freeze({ __proto__: null, base16: eZ, base16upper: eQ });
      let e0 = index_es_({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        e1 = index_es_({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        e6 = index_es_({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        e2 = index_es_({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        e8 = index_es_({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        e3 = index_es_({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        e4 = index_es_({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        e9 = index_es_({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        e7 = index_es_({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        });
      var e5 = Object.freeze({
        __proto__: null,
        base32: e0,
        base32upper: e1,
        base32pad: e6,
        base32padupper: e2,
        base32hex: e8,
        base32hexupper: e3,
        base32hexpad: e4,
        base32hexpadupper: e9,
        base32z: e7,
      });
      let ts = Q({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        to = Q({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        });
      var tc = Object.freeze({ __proto__: null, base36: ts, base36upper: to });
      let td = Q({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        th = Q({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        });
      var tf = Object.freeze({
        __proto__: null,
        base58btc: td,
        base58flickr: th,
      });
      let tl = index_es_({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        tp = index_es_({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        tb = index_es_({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        tg = index_es_({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        });
      var tm = Object.freeze({
        __proto__: null,
        base64: tl,
        base64pad: tp,
        base64url: tb,
        base64urlpad: tg,
      });
      let tv = Array.from(
          "\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"
        ),
        ty = tv.reduce((e, r, s) => ((e[s] = r), e), []),
        tw = tv.reduce((e, r, s) => ((e[r.codePointAt(0)] = s), e), []),
        t_ = ae({
          prefix: "\uD83D\uDE80",
          name: "base256emoji",
          encode: function (e) {
            return e.reduce((e, r) => (e += ty[r]), "");
          },
          decode: function (e) {
            let r = [];
            for (let s of e) {
              let e = tw[s.codePointAt(0)];
              if (void 0 === e) throw Error(`Non-base256emoji character: ${s}`);
              r.push(e);
            }
            return new Uint8Array(r);
          },
        });
      var tM = Object.freeze({ __proto__: null, base256emoji: t_ });
      function Mt(e, r, s) {
        (r = r || []), (s = s || 0);
        for (var p = s; e >= 2147483648; )
          (r[s++] = (255 & e) | 128), (e /= 128);
        for (; -128 & e; ) (r[s++] = (255 & e) | 128), (e >>>= 7);
        return (r[s] = 0 | e), (Mt.bytes = s - p + 1), r;
      }
      function we(e, r) {
        var s,
          p = 0,
          r = r || 0,
          b = 0,
          v = r,
          w = e.length;
        do {
          if (v >= w)
            throw ((we.bytes = 0), RangeError("Could not decode varint"));
          (s = e[v++]),
            (p += b < 28 ? (127 & s) << b : (127 & s) * Math.pow(2, b)),
            (b += 7);
        } while (s >= 128);
        return (we.bytes = v - r), p;
      }
      var tP = {
        encode: Mt,
        decode: we,
        encodingLength: function (e) {
          return e < 128
            ? 1
            : e < 16384
            ? 2
            : e < 2097152
            ? 3
            : e < 268435456
            ? 4
            : e < 34359738368
            ? 5
            : e < 4398046511104
            ? 6
            : e < 562949953421312
            ? 7
            : e < 72057594037927940
            ? 8
            : e < 0x7fffffffffffffff
            ? 9
            : 10;
        },
      };
      let Ut = (e, r, s = 0) => (tP.encode(e, r, s), r),
        Kt = (e) => tP.encodingLength(e),
        Ie = (e, r) => {
          let s = r.byteLength,
            p = Kt(e),
            b = p + Kt(s),
            v = new Uint8Array(b + s);
          return Ut(e, v, 0), Ut(s, v, p), v.set(r, b), new Br(e, s, r, v);
        };
      let Br = class Br {
        constructor(e, r, s, p) {
          (this.code = e), (this.size = r), (this.digest = s), (this.bytes = p);
        }
      };
      let Bt = ({ name: e, code: r, encode: s }) => new Vr(e, r, s);
      let Vr = class Vr {
        constructor(e, r, s) {
          (this.name = e), (this.code = r), (this.encode = s);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            let r = this.encode(e);
            return r instanceof Uint8Array
              ? Ie(this.code, r)
              : r.then((e) => Ie(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      };
      let Vt = (e) => async (r) =>
          new Uint8Array(await crypto.subtle.digest(e, r)),
        tS = Bt({ name: "sha2-256", code: 18, encode: Vt("SHA-256") }),
        tI = Bt({ name: "sha2-512", code: 19, encode: Vt("SHA-512") });
      var tE = Object.freeze({ __proto__: null, sha256: tS, sha512: tI }),
        tx = Object.freeze({
          __proto__: null,
          identity: {
            code: 0,
            name: "identity",
            encode: Nt,
            digest: (e) => Ie(0, Nt(e)),
          },
        });
      new TextEncoder(), new TextDecoder();
      let tA = {
        ...eH,
        ...eV,
        ...eG,
        ...eW,
        ...eX,
        ...e5,
        ...tc,
        ...tf,
        ...tm,
        ...tM,
      };
      function Ht(e, r, s, p) {
        return {
          name: e,
          prefix: r,
          encoder: { name: e, prefix: r, encode: s },
          decoder: { decode: p },
        };
      }
      ({ ...tE, ...tx });
      let tN = Ht(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        tR = Ht(
          "ascii",
          "a",
          (e) => {
            let r = "a";
            for (let s = 0; s < e.length; s++) r += String.fromCharCode(e[s]);
            return r;
          },
          (e) => {
            e = e.substring(1);
            let r = (function (e = 0) {
              return null != globalThis.Buffer &&
                null != globalThis.Buffer.allocUnsafe
                ? globalThis.Buffer.allocUnsafe(e)
                : new Uint8Array(e);
            })(e.length);
            for (let s = 0; s < e.length; s++) r[s] = e.charCodeAt(s);
            return r;
          }
        ),
        tC = {
          utf8: tN,
          "utf-8": tN,
          hex: tA.base16,
          latin1: tR,
          ascii: tR,
          binary: tR,
          ...tA,
        };
      let Jt = class Jt {
        constructor(e, r) {
          (this.core = e),
            (this.logger = r),
            (this.keychain = new Map()),
            (this.name = "keychain"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = eg),
            (this.init = async () => {
              if (!this.initialized) {
                let e = await this.getKeyChain();
                "u" > typeof e && (this.keychain = e), (this.initialized = !0);
              }
            }),
            (this.has = (e) => (this.isInitialized(), this.keychain.has(e))),
            (this.set = async (e, r) => {
              this.isInitialized(),
                this.keychain.set(e, r),
                await this.persist();
            }),
            (this.get = (e) => {
              this.isInitialized();
              let r = this.keychain.get(e);
              if (typeof r > "u") {
                let { message: r } = (0, ec.kCb)(
                  "NO_MATCHING_KEY",
                  `${this.name}: ${e}`
                );
                throw Error(r);
              }
              return r;
            }),
            (this.del = async (e) => {
              this.isInitialized(),
                this.keychain.delete(e),
                await this.persist();
            }),
            (this.core = e),
            (this.logger = E(r, this.name));
        }
        get context() {
          return y(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        async setKeyChain(e) {
          await this.core.storage.setItem(this.storageKey, (0, ec.KCv)(e));
        }
        async getKeyChain() {
          let e = await this.core.storage.getItem(this.storageKey);
          return "u" > typeof e ? (0, ec.IPd)(e) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, ec.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      };
      let Wt = class Wt {
        constructor(e, r, s) {
          (this.core = e),
            (this.logger = r),
            (this.name = "crypto"),
            (this.randomSessionIdentifier = (0, ec.jdp)()),
            (this.initialized = !1),
            (this.init = async () => {
              this.initialized ||
                (await this.keychain.init(), (this.initialized = !0));
            }),
            (this.hasKeys = (e) => (
              this.isInitialized(), this.keychain.has(e)
            )),
            (this.getClientId = async () => {
              this.isInitialized();
              let e = await this.getClientSeed(),
                r = eo.generateKeyPair(e);
              return eo.encodeIss(r.publicKey);
            }),
            (this.generateKeyPair = () => {
              this.isInitialized();
              let e = (0, ec.Au2)();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            (this.signJWT = async (e) => {
              this.isInitialized();
              let r = await this.getClientSeed(),
                s = eo.generateKeyPair(r),
                p = this.randomSessionIdentifier;
              return await eo.signJWT(p, e, ew, s);
            }),
            (this.generateSharedKey = (e, r, s) => {
              this.isInitialized();
              let p = this.getPrivateKey(e),
                b = (0, ec.m$A)(p, r);
              return this.setSymKey(b, s);
            }),
            (this.setSymKey = async (e, r) => {
              this.isInitialized();
              let s = r || (0, ec.YmJ)(e);
              return await this.keychain.set(s, e), s;
            }),
            (this.deleteKeyPair = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.deleteSymKey = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.encode = async (e, r, s) => {
              this.isInitialized();
              let p = (0, ec.ENt)(s),
                b = (0, C.u)(r);
              if ((0, ec.Hs$)(p)) return (0, ec.Spz)(b, s?.encoding);
              if ((0, ec.Q8x)(p)) {
                let r = p.senderPublicKey,
                  s = p.receiverPublicKey;
                e = await this.generateSharedKey(r, s);
              }
              let v = this.getSymKey(e),
                { type: w, senderPublicKey: _ } = p;
              return (0, ec.HIp)({
                type: w,
                symKey: v,
                message: b,
                senderPublicKey: _,
                encoding: s?.encoding,
              });
            }),
            (this.decode = async (e, r, s) => {
              this.isInitialized();
              let p = (0, ec.Llj)(r, s);
              if ((0, ec.Hs$)(p)) {
                let e = (0, ec.xQU)(r, s?.encoding);
                return (0, C.D)(e);
              }
              if ((0, ec.Q8x)(p)) {
                let r = p.receiverPublicKey,
                  s = p.senderPublicKey;
                e = await this.generateSharedKey(r, s);
              }
              try {
                let p = this.getSymKey(e),
                  b = (0, ec.peR)({
                    symKey: p,
                    encoded: r,
                    encoding: s?.encoding,
                  });
                return (0, C.D)(b);
              } catch (r) {
                this.logger.error(
                  `Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`
                ),
                  this.logger.error(r);
              }
            }),
            (this.getPayloadType = (e, r = ec.$dT) => {
              let s = (0, ec.vBi)({ encoded: e, encoding: r });
              return (0, ec.WGe)(s.type);
            }),
            (this.getPayloadSenderPublicKey = (e, r = ec.$dT) => {
              let s = (0, ec.vBi)({ encoded: e, encoding: r });
              return s.senderPublicKey
                ? (0, ed.BB)(s.senderPublicKey, ec.AWt)
                : void 0;
            }),
            (this.core = e),
            (this.logger = E(r, this.name)),
            (this.keychain = s || new Jt(this.core, this.logger));
        }
        get context() {
          return y(this.logger);
        }
        async setPrivateKey(e, r) {
          return await this.keychain.set(e, r), e;
        }
        getPrivateKey(e) {
          return this.keychain.get(e);
        }
        async getClientSeed() {
          let e = "";
          try {
            e = this.keychain.get(ey);
          } catch {
            (e = (0, ec.jdp)()), await this.keychain.set(ey, e);
          }
          return (function (e, r = "utf8") {
            let s = tC[r];
            if (!s) throw Error(`Unsupported encoding "${r}"`);
            return ("utf8" === r || "utf-8" === r) &&
              null != globalThis.Buffer &&
              null != globalThis.Buffer.from
              ? globalThis.Buffer.from(e, "utf8")
              : s.decoder.decode(`${s.prefix}${e}`);
          })(e, "base16");
        }
        getSymKey(e) {
          return this.keychain.get(e);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, ec.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      };
      let Xt = class Xt extends a {
        constructor(e, r) {
          super(e, r),
            (this.logger = e),
            (this.core = r),
            (this.messages = new Map()),
            (this.name = "messages"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = eg),
            (this.init = async () => {
              if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                  let e = await this.getRelayerMessages();
                  "u" > typeof e && (this.messages = e),
                    this.logger.debug(
                      `Successfully Restored records for ${this.name}`
                    ),
                    this.logger.trace({
                      type: "method",
                      method: "restore",
                      size: this.messages.size,
                    });
                } catch (e) {
                  this.logger.debug(
                    `Failed to Restore records for ${this.name}`
                  ),
                    this.logger.error(e);
                } finally {
                  this.initialized = !0;
                }
              }
            }),
            (this.set = async (e, r) => {
              this.isInitialized();
              let s = (0, ec.rjm)(r),
                p = this.messages.get(e);
              return (
                typeof p > "u" && (p = {}),
                "u" > typeof p[s] ||
                  ((p[s] = r), this.messages.set(e, p), await this.persist()),
                s
              );
            }),
            (this.get = (e) => {
              this.isInitialized();
              let r = this.messages.get(e);
              return typeof r > "u" && (r = {}), r;
            }),
            (this.has = (e, r) => {
              this.isInitialized();
              let s = this.get(e),
                p = (0, ec.rjm)(r);
              return "u" > typeof s[p];
            }),
            (this.del = async (e) => {
              this.isInitialized(),
                this.messages.delete(e),
                await this.persist();
            }),
            (this.logger = E(e, this.name)),
            (this.core = r);
        }
        get context() {
          return y(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        async setRelayerMessages(e) {
          await this.core.storage.setItem(this.storageKey, (0, ec.KCv)(e));
        }
        async getRelayerMessages() {
          let e = await this.core.storage.getItem(this.storageKey);
          return "u" > typeof e ? (0, ec.IPd)(e) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, ec.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      };
      let en = class en extends index_es_g {
        constructor(e, r) {
          super(e, r),
            (this.relayer = e),
            (this.logger = r),
            (this.events = new p.EventEmitter()),
            (this.name = "publisher"),
            (this.queue = new Map()),
            (this.publishTimeout = (0, w.toMiliseconds)(w.ONE_MINUTE)),
            (this.failedPublishTimeout = (0, w.toMiliseconds)(w.ONE_SECOND)),
            (this.needsTransportRestart = !1),
            (this.publish = async (e, r, s) => {
              var p;
              this.logger.debug("Publishing Payload"),
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { topic: e, message: r, opts: s },
                });
              let b = s?.ttl || e_,
                v = (0, ec._HE)(s),
                w = s?.prompt || !1,
                _ = s?.tag || 0,
                P = s?.id || (0, eh.getBigIntRpcId)().toString(),
                S = {
                  topic: e,
                  message: r,
                  opts: {
                    ttl: b,
                    relay: v,
                    prompt: w,
                    tag: _,
                    id: P,
                    attestation: s?.attestation,
                  },
                },
                I = `Failed to publish payload, please try again. id:${P} tag:${_}`,
                A = Date.now(),
                R,
                C = 1;
              try {
                for (; void 0 === R; ) {
                  if (Date.now() - A > this.publishTimeout) throw Error(I);
                  this.logger.trace(
                    { id: P, attempts: C },
                    `publisher.publish - attempt ${C}`
                  ),
                    (R = await await (0, ec.hFY)(
                      this.rpcPublish(
                        e,
                        r,
                        b,
                        v,
                        w,
                        _,
                        P,
                        s?.attestation
                      ).catch((e) => this.logger.warn(e)),
                      this.publishTimeout,
                      I
                    )),
                    C++,
                    R ||
                      (await new Promise((e) =>
                        setTimeout(e, this.failedPublishTimeout)
                      ));
                }
                this.relayer.events.emit(eP.publish, S),
                  this.logger.debug("Successfully Published Payload"),
                  this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: { id: P, topic: e, message: r, opts: s },
                  });
              } catch (e) {
                if (
                  (this.logger.debug("Failed to Publish Payload"),
                  this.logger.error(e),
                  null != (p = s?.internal) && p.throwOnFailedPublish)
                )
                  throw e;
                this.queue.set(P, S);
              }
            }),
            (this.on = (e, r) => {
              this.events.on(e, r);
            }),
            (this.once = (e, r) => {
              this.events.once(e, r);
            }),
            (this.off = (e, r) => {
              this.events.off(e, r);
            }),
            (this.removeListener = (e, r) => {
              this.events.removeListener(e, r);
            }),
            (this.relayer = e),
            (this.logger = E(r, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return y(this.logger);
        }
        rpcPublish(e, r, s, p, b, v, w, _) {
          var P, S, I, A;
          let R = {
            method: (0, ec.cOS)(p.protocol).publish,
            params: {
              topic: e,
              message: r,
              ttl: s,
              prompt: b,
              tag: v,
              attestation: _,
            },
            id: w,
          };
          return (
            (0, ec.o8e)(null == (P = R.params) ? void 0 : P.prompt) &&
              (null == (S = R.params) || delete S.prompt),
            (0, ec.o8e)(null == (I = R.params) ? void 0 : I.tag) &&
              (null == (A = R.params) || delete A.tag),
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "message",
              direction: "outgoing",
              request: R,
            }),
            this.relayer.request(R)
          );
        }
        removeRequestFromQueue(e) {
          this.queue.delete(e);
        }
        checkQueue() {
          this.queue.forEach(async (e) => {
            let { topic: r, message: s, opts: p } = e;
            await this.publish(r, s, p);
          });
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(S.pulse, () => {
            if (this.needsTransportRestart) {
              (this.needsTransportRestart = !1),
                this.relayer.events.emit(eP.connection_stalled);
              return;
            }
            this.checkQueue();
          }),
            this.relayer.on(eP.message_ack, (e) => {
              this.removeRequestFromQueue(e.id.toString());
            });
        }
      };
      let tn = class tn {
        constructor() {
          (this.map = new Map()),
            (this.set = (e, r) => {
              let s = this.get(e);
              this.exists(e, r) || this.map.set(e, [...s, r]);
            }),
            (this.get = (e) => this.map.get(e) || []),
            (this.exists = (e, r) => this.get(e).includes(r)),
            (this.delete = (e, r) => {
              if (typeof r > "u") {
                this.map.delete(e);
                return;
              }
              if (!this.map.has(e)) return;
              let s = this.get(e);
              if (!this.exists(e, r)) return;
              let p = s.filter((e) => e !== r);
              if (!p.length) {
                this.map.delete(e);
                return;
              }
              this.map.set(e, p);
            }),
            (this.clear = () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      };
      var tq = Object.defineProperty,
        tT = Object.defineProperties,
        tB = Object.getOwnPropertyDescriptors,
        tO = Object.getOwnPropertySymbols,
        tk = Object.prototype.hasOwnProperty,
        tD = Object.prototype.propertyIsEnumerable,
        Qt = (e, r, s) =>
          r in e
            ? tq(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (e[r] = s),
        ee = (e, r) => {
          for (var s in r || (r = {})) tk.call(r, s) && Qt(e, s, r[s]);
          if (tO) for (var s of tO(r)) tD.call(r, s) && Qt(e, s, r[s]);
          return e;
        },
        Ce = (e, r) => tT(e, tB(r));
      let ei = class ei extends index_es_d {
        constructor(e, r) {
          super(e, r),
            (this.relayer = e),
            (this.logger = r),
            (this.subscriptions = new Map()),
            (this.topicMap = new tn()),
            (this.events = new p.EventEmitter()),
            (this.name = "subscription"),
            (this.version = "0.3"),
            (this.pending = new Map()),
            (this.cached = []),
            (this.initialized = !1),
            (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
            (this.pollingInterval = 20),
            (this.storagePrefix = eg),
            (this.subscribeTimeout = (0, w.toMiliseconds)(w.ONE_MINUTE)),
            (this.restartInProgress = !1),
            (this.batchSubscribeTopicsLimit = 500),
            (this.pendingBatchMessages = []),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                this.registerEventListeners(),
                (this.clientId = await this.relayer.core.crypto.getClientId()),
                await this.restore()),
                (this.initialized = !0);
            }),
            (this.subscribe = async (e, r) => {
              this.isInitialized(),
                this.logger.debug("Subscribing Topic"),
                this.logger.trace({
                  type: "method",
                  method: "subscribe",
                  params: { topic: e, opts: r },
                });
              try {
                let s = (0, ec._HE)(r),
                  p = { topic: e, relay: s, transportType: r?.transportType };
                this.pending.set(e, p);
                let b = await this.rpcSubscribe(e, s, r?.transportType);
                return (
                  "string" == typeof b &&
                    (this.onSubscribe(b, p),
                    this.logger.debug("Successfully Subscribed Topic"),
                    this.logger.trace({
                      type: "method",
                      method: "subscribe",
                      params: { topic: e, opts: r },
                    })),
                  b
                );
              } catch (e) {
                throw (
                  (this.logger.debug("Failed to Subscribe Topic"),
                  this.logger.error(e),
                  e)
                );
              }
            }),
            (this.unsubscribe = async (e, r) => {
              await this.restartToComplete(),
                this.isInitialized(),
                "u" > typeof r?.id
                  ? await this.unsubscribeById(e, r.id, r)
                  : await this.unsubscribeByTopic(e, r);
            }),
            (this.isSubscribed = async (e) => {
              if (this.topics.includes(e)) return !0;
              let r = `${this.pendingSubscriptionWatchLabel}_${e}`;
              return await new Promise((s, p) => {
                let b = new w.Watch();
                b.start(r);
                let v = setInterval(() => {
                  !this.pending.has(e) &&
                    this.topics.includes(e) &&
                    (clearInterval(v), b.stop(r), s(!0)),
                    b.elapsed(r) >= eN &&
                      (clearInterval(v),
                      b.stop(r),
                      p(Error("Subscription resolution timeout")));
                }, this.pollingInterval);
              }).catch(() => !1);
            }),
            (this.on = (e, r) => {
              this.events.on(e, r);
            }),
            (this.once = (e, r) => {
              this.events.once(e, r);
            }),
            (this.off = (e, r) => {
              this.events.off(e, r);
            }),
            (this.removeListener = (e, r) => {
              this.events.removeListener(e, r);
            }),
            (this.start = async () => {
              await this.onConnect();
            }),
            (this.stop = async () => {
              await this.onDisconnect();
            }),
            (this.restart = async () => {
              (this.restartInProgress = !0),
                await this.restore(),
                await this.reset(),
                (this.restartInProgress = !1);
            }),
            (this.relayer = e),
            (this.logger = E(r, this.name)),
            (this.clientId = "");
        }
        get context() {
          return y(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.relayer.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.subscriptions.size;
        }
        get ids() {
          return Array.from(this.subscriptions.keys());
        }
        get values() {
          return Array.from(this.subscriptions.values());
        }
        get topics() {
          return this.topicMap.topics;
        }
        hasSubscription(e, r) {
          let s = !1;
          try {
            s = this.getSubscription(e).topic === r;
          } catch {}
          return s;
        }
        onEnable() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          (this.cached = this.values),
            this.subscriptions.clear(),
            this.topicMap.clear();
        }
        async unsubscribeByTopic(e, r) {
          let s = this.topicMap.get(e);
          await Promise.all(
            s.map(async (s) => await this.unsubscribeById(e, s, r))
          );
        }
        async unsubscribeById(e, r, s) {
          this.logger.debug("Unsubscribing Topic"),
            this.logger.trace({
              type: "method",
              method: "unsubscribe",
              params: { topic: e, id: r, opts: s },
            });
          try {
            let p = (0, ec._HE)(s);
            await this.rpcUnsubscribe(e, r, p);
            let b = (0, ec.D6H)("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, r, b),
              this.logger.debug("Successfully Unsubscribed Topic"),
              this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: { topic: e, id: r, opts: s },
              });
          } catch (e) {
            throw (
              (this.logger.debug("Failed to Unsubscribe Topic"),
              this.logger.error(e),
              e)
            );
          }
        }
        async rpcSubscribe(e, r, s = eE.relay) {
          s === eE.relay && (await this.restartToComplete());
          let p = {
            method: (0, ec.cOS)(r.protocol).subscribe,
            params: { topic: e },
          };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: p,
            });
          try {
            let r = (0, ec.rjm)(e + this.clientId);
            return s === eE.link_mode
              ? (setTimeout(() => {
                  (this.relayer.connected || this.relayer.connecting) &&
                    this.relayer.request(p).catch((e) => this.logger.warn(e));
                }, (0, w.toMiliseconds)(w.ONE_SECOND)),
                r)
              : (await await (0, ec.hFY)(
                  this.relayer.request(p).catch((e) => this.logger.warn(e)),
                  this.subscribeTimeout
                ))
              ? r
              : null;
          } catch {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
              this.relayer.events.emit(eP.connection_stalled);
          }
          return null;
        }
        async rpcBatchSubscribe(e) {
          if (!e.length) return;
          let r = e[0].relay,
            s = {
              method: (0, ec.cOS)(r.protocol).batchSubscribe,
              params: { topics: e.map((e) => e.topic) },
            };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: s,
            });
          try {
            return await await (0, ec.hFY)(
              this.relayer.request(s).catch((e) => this.logger.warn(e)),
              this.subscribeTimeout
            );
          } catch {
            this.relayer.events.emit(eP.connection_stalled);
          }
        }
        async rpcBatchFetchMessages(e) {
          let r;
          if (!e.length) return;
          let s = e[0].relay,
            p = {
              method: (0, ec.cOS)(s.protocol).batchFetchMessages,
              params: { topics: e.map((e) => e.topic) },
            };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: p,
            });
          try {
            r = await await (0, ec.hFY)(
              this.relayer.request(p).catch((e) => this.logger.warn(e)),
              this.subscribeTimeout
            );
          } catch {
            this.relayer.events.emit(eP.connection_stalled);
          }
          return r;
        }
        rpcUnsubscribe(e, r, s) {
          let p = {
            method: (0, ec.cOS)(s.protocol).unsubscribe,
            params: { topic: e, id: r },
          };
          return (
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: p,
            }),
            this.relayer.request(p)
          );
        }
        onSubscribe(e, r) {
          this.setSubscription(e, Ce(ee({}, r), { id: e })),
            this.pending.delete(r.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, ee({}, e)),
                this.pending.delete(e.topic);
            });
        }
        async onUnsubscribe(e, r, s) {
          this.events.removeAllListeners(r),
            this.hasSubscription(r, e) && this.deleteSubscription(r, s),
            await this.relayer.messages.del(e);
        }
        async setRelayerSubscriptions(e) {
          await this.relayer.core.storage.setItem(this.storageKey, e);
        }
        async getRelayerSubscriptions() {
          return await this.relayer.core.storage.getItem(this.storageKey);
        }
        setSubscription(e, r) {
          this.logger.debug("Setting subscription"),
            this.logger.trace({
              type: "method",
              method: "setSubscription",
              id: e,
              subscription: r,
            }),
            this.addSubscription(e, r);
        }
        addSubscription(e, r) {
          this.subscriptions.set(e, ee({}, r)),
            this.topicMap.set(r.topic, e),
            this.events.emit(eA.created, r);
        }
        getSubscription(e) {
          this.logger.debug("Getting subscription"),
            this.logger.trace({
              type: "method",
              method: "getSubscription",
              id: e,
            });
          let r = this.subscriptions.get(e);
          if (!r) {
            let { message: r } = (0, ec.kCb)(
              "NO_MATCHING_KEY",
              `${this.name}: ${e}`
            );
            throw Error(r);
          }
          return r;
        }
        deleteSubscription(e, r) {
          this.logger.debug("Deleting subscription"),
            this.logger.trace({
              type: "method",
              method: "deleteSubscription",
              id: e,
              reason: r,
            });
          let s = this.getSubscription(e);
          this.subscriptions.delete(e),
            this.topicMap.delete(s.topic, e),
            this.events.emit(eA.deleted, Ce(ee({}, s), { reason: r }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values),
            this.events.emit(eA.sync);
        }
        async reset() {
          if (this.cached.length) {
            let e = Math.ceil(
              this.cached.length / this.batchSubscribeTopicsLimit
            );
            for (let r = 0; r < e; r++) {
              let e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchFetchMessages(e), await this.batchSubscribe(e);
            }
          }
          this.events.emit(eA.resubscribed);
        }
        async restore() {
          try {
            let e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length) return;
            if (this.subscriptions.size) {
              let { message: e } = (0, ec.kCb)(
                "RESTORE_WILL_OVERRIDE",
                this.name
              );
              throw (
                (this.logger.error(e),
                this.logger.error(
                  `${this.name}: ${JSON.stringify(this.values)}`
                ),
                Error(e))
              );
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored subscriptions for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values,
              });
          } catch (e) {
            this.logger.debug(
              `Failed to Restore subscriptions for ${this.name}`
            ),
              this.logger.error(e);
          }
        }
        async batchSubscribe(e) {
          if (!e.length) return;
          let r = await this.rpcBatchSubscribe(e);
          (0, ec.qt8)(r) &&
            this.onBatchSubscribe(r.map((r, s) => Ce(ee({}, e[s]), { id: r })));
        }
        async batchFetchMessages(e) {
          if (!e.length) return;
          this.logger.trace(
            `Fetching batch messages for ${e.length} subscriptions`
          );
          let r = await this.rpcBatchFetchMessages(e);
          r &&
            r.messages &&
            (this.pendingBatchMessages = this.pendingBatchMessages.concat(
              r.messages
            ));
        }
        async onConnect() {
          await this.restart(), this.onEnable();
        }
        onDisconnect() {
          this.onDisable();
        }
        async checkPending() {
          if (!this.initialized || !this.relayer.connected) return;
          let e = [];
          this.pending.forEach((r) => {
            e.push(r);
          }),
            await this.batchSubscribe(e),
            this.pendingBatchMessages.length &&
              (await this.relayer.handleBatchMessageEvents(
                this.pendingBatchMessages
              ),
              (this.pendingBatchMessages = []));
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(S.pulse, async () => {
            await this.checkPending();
          }),
            this.events.on(eA.created, async (e) => {
              let r = eA.created;
              this.logger.info(`Emitting ${r}`),
                this.logger.debug({ type: "event", event: r, data: e }),
                await this.persist();
            }),
            this.events.on(eA.deleted, async (e) => {
              let r = eA.deleted;
              this.logger.info(`Emitting ${r}`),
                this.logger.debug({ type: "event", event: r, data: e }),
                await this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, ec.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        async restartToComplete() {
          this.relayer.connected ||
            this.relayer.connecting ||
            (await this.relayer.transportOpen()),
            this.restartInProgress &&
              (await new Promise((e) => {
                let r = setInterval(() => {
                  this.restartInProgress || (clearInterval(r), e());
                }, this.pollingInterval);
              }));
        }
      };
      var tz = Object.defineProperty,
        tL = Object.getOwnPropertySymbols,
        tj = Object.prototype.hasOwnProperty,
        t$ = Object.prototype.propertyIsEnumerable,
        ii = (e, r, s) =>
          r in e
            ? tz(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (e[r] = s),
        un = (e, r) => {
          for (var s in r || (r = {})) tj.call(r, s) && ii(e, s, r[s]);
          if (tL) for (var s of tL(r)) t$.call(r, s) && ii(e, s, r[s]);
          return e;
        };
      let si = class si extends u {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.events = new p.EventEmitter()),
            (this.name = "relayer"),
            (this.transportExplicitlyClosed = !1),
            (this.initialized = !1),
            (this.connectionAttemptInProgress = !1),
            (this.connectionStatusPollingInterval = 20),
            (this.staleConnectionErrors = [
              "socket hang up",
              "stalled",
              "interrupted",
            ]),
            (this.hasExperiencedNetworkDisruption = !1),
            (this.requestsInFlight = new Map()),
            (this.heartBeatTimeout = (0, w.toMiliseconds)(
              w.THIRTY_SECONDS + w.ONE_SECOND
            )),
            (this.request = async (e) => {
              var r, s;
              this.logger.debug("Publishing Request Payload");
              let p = e.id || (0, eh.getBigIntRpcId)().toString();
              await this.toEstablishConnection();
              try {
                let b = this.provider.request(e);
                this.requestsInFlight.set(p, { promise: b, request: e }),
                  this.logger.trace(
                    {
                      id: p,
                      method: e.method,
                      topic: null == (r = e.params) ? void 0 : r.topic,
                    },
                    "relayer.request - attempt to publish..."
                  );
                let v = await new Promise(async (e, r) => {
                  let d = () => {
                    r(Error(`relayer.request - publish interrupted, id: ${p}`));
                  };
                  this.provider.on(eS.disconnect, d);
                  let s = await b;
                  this.provider.off(eS.disconnect, d), e(s);
                });
                return (
                  this.logger.trace(
                    {
                      id: p,
                      method: e.method,
                      topic: null == (s = e.params) ? void 0 : s.topic,
                    },
                    "relayer.request - published"
                  ),
                  v
                );
              } catch (e) {
                throw (this.logger.debug(`Failed to Publish Request: ${p}`), e);
              } finally {
                this.requestsInFlight.delete(p);
              }
            }),
            (this.resetPingTimeout = () => {
              if ((0, ec.UGU)())
                try {
                  clearTimeout(this.pingTimeout),
                    (this.pingTimeout = setTimeout(() => {
                      var e, r, s;
                      null ==
                        (s =
                          null ==
                          (r =
                            null == (e = this.provider) ? void 0 : e.connection)
                            ? void 0
                            : r.socket) || s.terminate();
                    }, this.heartBeatTimeout));
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            (this.onPayloadHandler = (e) => {
              this.onProviderPayload(e), this.resetPingTimeout();
            }),
            (this.onConnectHandler = () => {
              this.logger.trace("relayer connected"),
                this.startPingTimeout(),
                this.events.emit(eP.connect);
            }),
            (this.onDisconnectHandler = () => {
              this.logger.trace("relayer disconnected"),
                this.onProviderDisconnect();
            }),
            (this.onProviderErrorHandler = (e) => {
              this.logger.error(e),
                this.events.emit(eP.error, e),
                this.logger.info(
                  "Fatal socket error received, closing transport"
                ),
                this.transportClose();
            }),
            (this.registerProviderListeners = () => {
              this.provider.on(eS.payload, this.onPayloadHandler),
                this.provider.on(eS.connect, this.onConnectHandler),
                this.provider.on(eS.disconnect, this.onDisconnectHandler),
                this.provider.on(eS.error, this.onProviderErrorHandler);
            }),
            (this.core = e.core),
            (this.logger =
              "u" > typeof e.logger && "string" != typeof e.logger
                ? E(e.logger, this.name)
                : R()(k({ level: e.logger || "error" }))),
            (this.messages = new Xt(this.logger, e.core)),
            (this.subscriber = new ei(this, this.logger)),
            (this.publisher = new en(this, this.logger)),
            (this.relayUrl = e?.relayUrl || eM),
            (this.projectId = e.projectId),
            (this.bundleId = (0, ec.X_B)()),
            (this.provider = {});
        }
        async init() {
          if (
            (this.logger.trace("Initialized"),
            this.registerEventListeners(),
            await Promise.all([this.messages.init(), this.subscriber.init()]),
            (this.initialized = !0),
            this.subscriber.cached.length > 0)
          )
            try {
              await this.transportOpen();
            } catch (e) {
              this.logger.warn(e);
            }
        }
        get context() {
          return y(this.logger);
        }
        get connected() {
          var e, r, s;
          return (
            (null ==
            (s =
              null == (r = null == (e = this.provider) ? void 0 : e.connection)
                ? void 0
                : r.socket)
              ? void 0
              : s.readyState) === 1
          );
        }
        get connecting() {
          var e, r, s;
          return (
            (null ==
            (s =
              null == (r = null == (e = this.provider) ? void 0 : e.connection)
                ? void 0
                : r.socket)
              ? void 0
              : s.readyState) === 0
          );
        }
        async publish(e, r, s) {
          this.isInitialized(),
            await this.publisher.publish(e, r, s),
            await this.recordMessageEvent({
              topic: e,
              message: r,
              publishedAt: Date.now(),
              transportType: eE.relay,
            });
        }
        async subscribe(e, r) {
          var s;
          this.isInitialized(),
            r?.transportType === "relay" &&
              (await this.toEstablishConnection());
          let p =
              (null == (s = this.subscriber.topicMap.get(e)) ? void 0 : s[0]) ||
              "",
            b,
            n = (r) => {
              r.topic === e && (this.subscriber.off(eA.created, n), b());
            };
          return (
            await Promise.all([
              new Promise((e) => {
                (b = e), this.subscriber.on(eA.created, n);
              }),
              new Promise(async (s) => {
                (p = (await this.subscriber.subscribe(e, r)) || p), s();
              }),
            ]),
            p
          );
        }
        async unsubscribe(e, r) {
          this.isInitialized(), await this.subscriber.unsubscribe(e, r);
        }
        on(e, r) {
          this.events.on(e, r);
        }
        once(e, r) {
          this.events.once(e, r);
        }
        off(e, r) {
          this.events.off(e, r);
        }
        removeListener(e, r) {
          this.events.removeListener(e, r);
        }
        async transportDisconnect() {
          if (
            !this.hasExperiencedNetworkDisruption &&
            this.connected &&
            this.requestsInFlight.size > 0
          )
            try {
              await Promise.all(
                Array.from(this.requestsInFlight.values()).map((e) => e.promise)
              );
            } catch (e) {
              this.logger.warn(e);
            }
          this.hasExperiencedNetworkDisruption || this.connected
            ? await (0, ec.hFY)(
                this.provider.disconnect(),
                2e3,
                "provider.disconnect()"
              ).catch(() => this.onProviderDisconnect())
            : this.onProviderDisconnect();
        }
        async transportClose() {
          (this.transportExplicitlyClosed = !0),
            await this.transportDisconnect();
        }
        async transportOpen(e) {
          await this.confirmOnlineStateOrThrow(),
            e &&
              e !== this.relayUrl &&
              ((this.relayUrl = e), await this.transportDisconnect()),
            await this.createProvider(),
            (this.connectionAttemptInProgress = !0),
            (this.transportExplicitlyClosed = !1);
          try {
            await new Promise(async (e, r) => {
              let i = () => {
                this.provider.off(eS.disconnect, i),
                  r(Error("Connection interrupted while trying to subscribe"));
              };
              this.provider.on(eS.disconnect, i),
                await (0, ec.hFY)(
                  this.provider.connect(),
                  (0, w.toMiliseconds)(w.ONE_MINUTE),
                  `Socket stalled when trying to connect to ${this.relayUrl}`
                )
                  .catch((e) => {
                    r(e);
                  })
                  .finally(() => {
                    clearTimeout(this.reconnectTimeout),
                      (this.reconnectTimeout = void 0);
                  }),
                this.subscriber.start().catch((e) => {
                  this.logger.error(e), this.onDisconnectHandler();
                }),
                (this.hasExperiencedNetworkDisruption = !1),
                e();
            });
          } catch (e) {
            if (
              (this.logger.error(e),
              (this.hasExperiencedNetworkDisruption = !0),
              !this.isConnectionStalled(e.message))
            )
              throw e;
          } finally {
            this.connectionAttemptInProgress = !1;
          }
        }
        async restartTransport(e) {
          this.connectionAttemptInProgress ||
            ((this.relayUrl = e || this.relayUrl),
            await this.confirmOnlineStateOrThrow(),
            await this.transportClose(),
            await this.transportOpen());
        }
        async confirmOnlineStateOrThrow() {
          if (!(await (0, ec.Ggh)()))
            throw Error(
              "No internet connection detected. Please restart your network and try again."
            );
        }
        async handleBatchMessageEvents(e) {
          if (e?.length === 0) {
            this.logger.trace("Batch message events is empty. Ignoring...");
            return;
          }
          let r = e.sort((e, r) => e.publishedAt - r.publishedAt);
          for (let e of (this.logger.trace(
            `Batch of ${r.length} message events sorted`
          ),
          r))
            try {
              await this.onMessageEvent(e);
            } catch (e) {
              this.logger.warn(e);
            }
          this.logger.trace(`Batch of ${r.length} message events processed`);
        }
        async onLinkMessageEvent(e, r) {
          let { topic: s } = e;
          if (!r.sessionExists) {
            let e = (0, ec.gn4)(w.FIVE_MINUTES);
            await this.core.pairing.pairings.set(s, {
              topic: s,
              expiry: e,
              relay: { protocol: "irn" },
              active: !1,
            });
          }
          this.events.emit(eP.message, e), await this.recordMessageEvent(e);
        }
        startPingTimeout() {
          var e, r, s, p, b;
          if ((0, ec.UGU)())
            try {
              null !=
                (r = null == (e = this.provider) ? void 0 : e.connection) &&
                r.socket &&
                (null ==
                  (b =
                    null ==
                    (p = null == (s = this.provider) ? void 0 : s.connection)
                      ? void 0
                      : p.socket) ||
                  b.once("ping", () => {
                    this.resetPingTimeout();
                  })),
                this.resetPingTimeout();
            } catch (e) {
              this.logger.warn(e);
            }
        }
        isConnectionStalled(e) {
          return this.staleConnectionErrors.some((r) => e.includes(r));
        }
        async createProvider() {
          this.provider.connection && this.unregisterProviderListeners();
          let e = await this.core.crypto.signJWT(this.relayUrl);
          (this.provider = new o(
            new ef.Z(
              (0, ec.$0m)({
                sdkVersion: eI,
                protocol: this.protocol,
                version: this.version,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
                auth: e,
                useOnCloseEvent: !0,
                bundleId: this.bundleId,
              })
            )
          )),
            this.registerProviderListeners();
        }
        async recordMessageEvent(e) {
          let { topic: r, message: s } = e;
          await this.messages.set(r, s);
        }
        async shouldIgnoreMessageEvent(e) {
          let { topic: r, message: s } = e;
          if (!s || 0 === s.length)
            return (
              this.logger.debug(`Ignoring invalid/empty message: ${s}`), !0
            );
          if (!(await this.subscriber.isSubscribed(r)))
            return (
              this.logger.debug(
                `Ignoring message for non-subscribed topic ${r}`
              ),
              !0
            );
          let p = this.messages.has(r, s);
          return p && this.logger.debug(`Ignoring duplicate message: ${s}`), p;
        }
        async onProviderPayload(e) {
          if (
            (this.logger.debug("Incoming Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "incoming",
              payload: e,
            }),
            (0, eh.isJsonRpcRequest)(e))
          ) {
            if (!e.method.endsWith("_subscription")) return;
            let r = e.params,
              { topic: s, message: p, publishedAt: b, attestation: v } = r.data,
              w = {
                topic: s,
                message: p,
                publishedAt: b,
                transportType: eE.relay,
                attestation: v,
              };
            this.logger.debug("Emitting Relayer Payload"),
              this.logger.trace(un({ type: "event", event: r.id }, w)),
              this.events.emit(r.id, w),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(w);
          } else
            (0, eh.isJsonRpcResponse)(e) && this.events.emit(eP.message_ack, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (this.events.emit(eP.message, e), await this.recordMessageEvent(e));
        }
        async acknowledgePayload(e) {
          let r = (0, eh.formatJsonRpcResult)(e.id, !0);
          await this.provider.connection.send(r);
        }
        unregisterProviderListeners() {
          this.provider.off(eS.payload, this.onPayloadHandler),
            this.provider.off(eS.connect, this.onConnectHandler),
            this.provider.off(eS.disconnect, this.onDisconnectHandler),
            this.provider.off(eS.error, this.onProviderErrorHandler),
            clearTimeout(this.pingTimeout);
        }
        async registerEventListeners() {
          let e = await (0, ec.Ggh)();
          (0, ec.uwg)(async (r) => {
            e !== r &&
              ((e = r),
              r
                ? await this.restartTransport().catch((e) =>
                    this.logger.error(e)
                  )
                : ((this.hasExperiencedNetworkDisruption = !0),
                  await this.transportDisconnect(),
                  (this.transportExplicitlyClosed = !1)));
          });
        }
        async onProviderDisconnect() {
          await this.subscriber.stop(),
            this.requestsInFlight.clear(),
            clearTimeout(this.pingTimeout),
            this.events.emit(eP.disconnect),
            (this.connectionAttemptInProgress = !1),
            !this.transportExplicitlyClosed &&
              (this.reconnectTimeout ||
                (this.reconnectTimeout = setTimeout(async () => {
                  await this.transportOpen().catch((e) => this.logger.error(e));
                }, (0, w.toMiliseconds)(0.1))));
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, ec.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        async toEstablishConnection() {
          await this.confirmOnlineStateOrThrow(),
            this.connected ||
              (this.connectionAttemptInProgress &&
                (await new Promise((e) => {
                  let r = setInterval(() => {
                    this.connected && (clearInterval(r), e());
                  }, this.connectionStatusPollingInterval);
                })),
              await this.transportOpen());
        }
      };
      var tF = Object.defineProperty,
        tK = Object.getOwnPropertySymbols,
        tH = Object.prototype.hasOwnProperty,
        tU = Object.prototype.propertyIsEnumerable,
        ni = (e, r, s) =>
          r in e
            ? tF(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (e[r] = s),
        oi = (e, r) => {
          for (var s in r || (r = {})) tH.call(r, s) && ni(e, s, r[s]);
          if (tK) for (var s of tK(r)) tU.call(r, s) && ni(e, s, r[s]);
          return e;
        };
      let ai = class ai extends index_es_p {
        constructor(e, r, s, p = eg, b) {
          super(e, r, s, p),
            (this.core = e),
            (this.logger = r),
            (this.name = s),
            (this.map = new Map()),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = eg),
            (this.recentlyDeleted = []),
            (this.recentlyDeletedLimit = 200),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => {
                  this.getKey && null !== e && !(0, ec.o8e)(e)
                    ? this.map.set(this.getKey(e), e)
                    : (0, ec.xWS)(e)
                    ? this.map.set(e.id, e)
                    : (0, ec.h1R)(e) && this.map.set(e.topic, e);
                }),
                (this.cached = []),
                (this.initialized = !0));
            }),
            (this.set = async (e, r) => {
              this.isInitialized(),
                this.map.has(e)
                  ? await this.update(e, r)
                  : (this.logger.debug("Setting value"),
                    this.logger.trace({
                      type: "method",
                      method: "set",
                      key: e,
                      value: r,
                    }),
                    this.map.set(e, r),
                    await this.persist());
            }),
            (this.get = (e) => (
              this.isInitialized(),
              this.logger.debug("Getting value"),
              this.logger.trace({ type: "method", method: "get", key: e }),
              this.getData(e)
            )),
            (this.getAll = (e) => (
              this.isInitialized(),
              e
                ? this.values.filter((r) =>
                    Object.keys(e).every((s) => ep()(r[s], e[s]))
                  )
                : this.values
            )),
            (this.update = async (e, r) => {
              this.isInitialized(),
                this.logger.debug("Updating value"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  key: e,
                  update: r,
                });
              let s = oi(oi({}, this.getData(e)), r);
              this.map.set(e, s), await this.persist();
            }),
            (this.delete = async (e, r) => {
              this.isInitialized(),
                this.map.has(e) &&
                  (this.logger.debug("Deleting value"),
                  this.logger.trace({
                    type: "method",
                    method: "delete",
                    key: e,
                    reason: r,
                  }),
                  this.map.delete(e),
                  this.addToRecentlyDeleted(e),
                  await this.persist());
            }),
            (this.logger = E(r, this.name)),
            (this.storagePrefix = p),
            (this.getKey = b);
        }
        get context() {
          return y(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.map.size;
        }
        get keys() {
          return Array.from(this.map.keys());
        }
        get values() {
          return Array.from(this.map.values());
        }
        addToRecentlyDeleted(e) {
          this.recentlyDeleted.push(e),
            this.recentlyDeleted.length >= this.recentlyDeletedLimit &&
              this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
        }
        async setDataStore(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getDataStore() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getData(e) {
          let r = this.map.get(e);
          if (!r) {
            if (this.recentlyDeleted.includes(e)) {
              let { message: r } = (0, ec.kCb)(
                "MISSING_OR_INVALID",
                `Record was recently deleted - ${this.name}: ${e}`
              );
              throw (this.logger.error(r), Error(r));
            }
            let { message: r } = (0, ec.kCb)(
              "NO_MATCHING_KEY",
              `${this.name}: ${e}`
            );
            throw (this.logger.error(r), Error(r));
          }
          return r;
        }
        async persist() {
          await this.setDataStore(this.values);
        }
        async restore() {
          try {
            let e = await this.getDataStore();
            if (typeof e > "u" || !e.length) return;
            if (this.map.size) {
              let { message: e } = (0, ec.kCb)(
                "RESTORE_WILL_OVERRIDE",
                this.name
              );
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(`Successfully Restored value for ${this.name}`),
              this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`),
              this.logger.error(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, ec.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      };
      let ci = class ci {
        constructor(e, r) {
          (this.core = e),
            (this.logger = r),
            (this.name = "pairing"),
            (this.version = "0.3"),
            (this.events = new (b())()),
            (this.initialized = !1),
            (this.storagePrefix = eg),
            (this.ignoredPayloadTypes = [ec.rVF]),
            (this.registeredMethods = []),
            (this.init = async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace("Initialized"));
            }),
            (this.register = ({ methods: e }) => {
              this.isInitialized(),
                (this.registeredMethods = [
                  ...new Set([...this.registeredMethods, ...e]),
                ]);
            }),
            (this.create = async (e) => {
              this.isInitialized();
              let r = (0, ec.jdp)(),
                s = await this.core.crypto.setSymKey(r),
                p = (0, ec.gn4)(w.FIVE_MINUTES),
                b = { protocol: "irn" },
                v = {
                  topic: s,
                  expiry: p,
                  relay: b,
                  active: !1,
                  methods: e?.methods,
                },
                _ = (0, ec.Bvr)({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: s,
                  symKey: r,
                  relay: b,
                  expiryTimestamp: p,
                  methods: e?.methods,
                });
              return (
                this.events.emit(eC.create, v),
                this.core.expirer.set(s, p),
                await this.pairings.set(s, v),
                await this.core.relayer.subscribe(s, {
                  transportType: e?.transportType,
                }),
                { topic: s, uri: _ }
              );
            }),
            (this.pair = async (e) => {
              let r;
              this.isInitialized();
              let s = this.core.eventClient.createEvent({
                properties: { topic: e?.uri, trace: [eD.pairing_started] },
              });
              this.isValidPair(e, s);
              let {
                topic: p,
                symKey: b,
                relay: v,
                expiryTimestamp: _,
                methods: P,
              } = (0, ec.heJ)(e.uri);
              if (
                ((s.props.properties.topic = p),
                s.addTrace(eD.pairing_uri_validation_success),
                s.addTrace(eD.pairing_uri_not_expired),
                this.pairings.keys.includes(p))
              ) {
                if (
                  ((r = this.pairings.get(p)),
                  s.addTrace(eD.existing_pairing),
                  r.active)
                )
                  throw (
                    (s.setError(ez.active_pairing_already_exists),
                    Error(
                      `Pairing already exists: ${p}. Please try again with a new connection URI.`
                    ))
                  );
                s.addTrace(eD.pairing_not_expired);
              }
              let S = _ || (0, ec.gn4)(w.FIVE_MINUTES),
                I = { topic: p, relay: v, expiry: S, active: !1, methods: P };
              this.core.expirer.set(p, S),
                await this.pairings.set(p, I),
                s.addTrace(eD.store_new_pairing),
                e.activatePairing && (await this.activate({ topic: p })),
                this.events.emit(eC.create, I),
                s.addTrace(eD.emit_inactive_pairing),
                this.core.crypto.keychain.has(p) ||
                  (await this.core.crypto.setSymKey(b, p)),
                s.addTrace(eD.subscribing_pairing_topic);
              try {
                await this.core.relayer.confirmOnlineStateOrThrow();
              } catch {
                s.setError(ez.no_internet_connection);
              }
              try {
                await this.core.relayer.subscribe(p, { relay: v });
              } catch (e) {
                throw (s.setError(ez.subscribe_pairing_topic_failure), e);
              }
              return s.addTrace(eD.subscribe_pairing_topic_success), I;
            }),
            (this.activate = async ({ topic: e }) => {
              this.isInitialized();
              let r = (0, ec.gn4)(w.THIRTY_DAYS);
              this.core.expirer.set(e, r),
                await this.pairings.update(e, { active: !0, expiry: r });
            }),
            (this.ping = async (e) => {
              this.isInitialized(), await this.isValidPing(e);
              let { topic: r } = e;
              if (this.pairings.keys.includes(r)) {
                let e = await this.sendRequest(r, "wc_pairingPing", {}),
                  { done: s, resolve: p, reject: b } = (0, ec.H1S)();
                this.events.once(
                  (0, ec.E0T)("pairing_ping", e),
                  ({ error: e }) => {
                    e ? b(e) : p();
                  }
                ),
                  await s();
              }
            }),
            (this.updateExpiry = async ({ topic: e, expiry: r }) => {
              this.isInitialized(),
                await this.pairings.update(e, { expiry: r });
            }),
            (this.updateMetadata = async ({ topic: e, metadata: r }) => {
              this.isInitialized(),
                await this.pairings.update(e, { peerMetadata: r });
            }),
            (this.getPairings = () => (
              this.isInitialized(), this.pairings.values
            )),
            (this.disconnect = async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              let { topic: r } = e;
              this.pairings.keys.includes(r) &&
                (await this.sendRequest(
                  r,
                  "wc_pairingDelete",
                  (0, ec.D6H)("USER_DISCONNECTED")
                ),
                await this.deletePairing(r));
            }),
            (this.formatUriFromPairing = (e) => {
              this.isInitialized();
              let { topic: r, relay: s, expiry: p, methods: b } = e,
                v = this.core.crypto.keychain.get(r);
              return (0, ec.Bvr)({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: r,
                symKey: v,
                relay: s,
                expiryTimestamp: p,
                methods: b,
              });
            }),
            (this.sendRequest = async (e, r, s) => {
              let p = (0, eh.formatJsonRpcRequest)(r, s),
                b = await this.core.crypto.encode(e, p),
                v = eR[r].req;
              return (
                this.core.history.set(e, p),
                this.core.relayer.publish(e, b, v),
                p.id
              );
            }),
            (this.sendResult = async (e, r, s) => {
              let p = (0, eh.formatJsonRpcResult)(e, s),
                b = await this.core.crypto.encode(r, p),
                v = await this.core.history.get(r, e),
                w = eR[v.request.method].res;
              await this.core.relayer.publish(r, b, w),
                await this.core.history.resolve(p);
            }),
            (this.sendError = async (e, r, s) => {
              let p = (0, eh.formatJsonRpcError)(e, s),
                b = await this.core.crypto.encode(r, p),
                v = await this.core.history.get(r, e),
                w = eR[v.request.method]
                  ? eR[v.request.method].res
                  : eR.unregistered_method.res;
              await this.core.relayer.publish(r, b, w),
                await this.core.history.resolve(p);
            }),
            (this.deletePairing = async (e, r) => {
              await this.core.relayer.unsubscribe(e),
                await Promise.all([
                  this.pairings.delete(e, (0, ec.D6H)("USER_DISCONNECTED")),
                  this.core.crypto.deleteSymKey(e),
                  r ? Promise.resolve() : this.core.expirer.del(e),
                ]);
            }),
            (this.cleanup = async () => {
              let e = this.pairings
                .getAll()
                .filter((e) => (0, ec.BwD)(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            (this.onRelayEventRequest = (e) => {
              let { topic: r, payload: s } = e;
              switch (s.method) {
                case "wc_pairingPing":
                  return this.onPairingPingRequest(r, s);
                case "wc_pairingDelete":
                  return this.onPairingDeleteRequest(r, s);
                default:
                  return this.onUnknownRpcMethodRequest(r, s);
              }
            }),
            (this.onRelayEventResponse = async (e) => {
              let { topic: r, payload: s } = e,
                p = (await this.core.history.get(r, s.id)).request.method;
              return "wc_pairingPing" === p
                ? this.onPairingPingResponse(r, s)
                : this.onUnknownRpcMethodResponse(p);
            }),
            (this.onPairingPingRequest = async (e, r) => {
              let { id: s } = r;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(s, e, !0),
                  this.events.emit(eC.ping, { id: s, topic: e });
              } catch (r) {
                await this.sendError(s, e, r), this.logger.error(r);
              }
            }),
            (this.onPairingPingResponse = (e, r) => {
              let { id: s } = r;
              setTimeout(() => {
                (0, eh.isJsonRpcResult)(r)
                  ? this.events.emit((0, ec.E0T)("pairing_ping", s), {})
                  : (0, eh.isJsonRpcError)(r) &&
                    this.events.emit((0, ec.E0T)("pairing_ping", s), {
                      error: r.error,
                    });
              }, 500);
            }),
            (this.onPairingDeleteRequest = async (e, r) => {
              let { id: s } = r;
              try {
                this.isValidDisconnect({ topic: e }),
                  await this.deletePairing(e),
                  this.events.emit(eC.delete, { id: s, topic: e });
              } catch (r) {
                await this.sendError(s, e, r), this.logger.error(r);
              }
            }),
            (this.onUnknownRpcMethodRequest = async (e, r) => {
              let { id: s, method: p } = r;
              try {
                if (this.registeredMethods.includes(p)) return;
                let r = (0, ec.D6H)("WC_METHOD_UNSUPPORTED", p);
                await this.sendError(s, e, r), this.logger.error(r);
              } catch (r) {
                await this.sendError(s, e, r), this.logger.error(r);
              }
            }),
            (this.onUnknownRpcMethodResponse = (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error((0, ec.D6H)("WC_METHOD_UNSUPPORTED", e));
            }),
            (this.isValidPair = (e, r) => {
              var s;
              if (!(0, ec.EJd)(e)) {
                let { message: s } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `pair() params: ${e}`
                );
                throw (r.setError(ez.malformed_pairing_uri), Error(s));
              }
              if (!(0, ec.jvJ)(e.uri)) {
                let { message: s } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `pair() uri: ${e.uri}`
                );
                throw (r.setError(ez.malformed_pairing_uri), Error(s));
              }
              let p = (0, ec.heJ)(e?.uri);
              if (!(null != (s = p?.relay) && s.protocol)) {
                let { message: e } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  "pair() uri#relay-protocol"
                );
                throw (r.setError(ez.malformed_pairing_uri), Error(e));
              }
              if (!(null != p && p.symKey)) {
                let { message: e } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  "pair() uri#symKey"
                );
                throw (r.setError(ez.malformed_pairing_uri), Error(e));
              }
              if (
                null != p &&
                p.expiryTimestamp &&
                (0, w.toMiliseconds)(p?.expiryTimestamp) < Date.now()
              ) {
                r.setError(ez.pairing_expired);
                let { message: e } = (0, ec.kCb)(
                  "EXPIRED",
                  "pair() URI has expired. Please try again with a new connection URI."
                );
                throw Error(e);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!(0, ec.EJd)(e)) {
                let { message: r } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`
                );
                throw Error(r);
              }
              let { topic: r } = e;
              await this.isValidPairingTopic(r);
            }),
            (this.isValidDisconnect = async (e) => {
              if (!(0, ec.EJd)(e)) {
                let { message: r } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`
                );
                throw Error(r);
              }
              let { topic: r } = e;
              await this.isValidPairingTopic(r);
            }),
            (this.isValidPairingTopic = async (e) => {
              if (!(0, ec.M_r)(e, !1)) {
                let { message: r } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `pairing topic should be a string: ${e}`
                );
                throw Error(r);
              }
              if (!this.pairings.keys.includes(e)) {
                let { message: r } = (0, ec.kCb)(
                  "NO_MATCHING_KEY",
                  `pairing topic doesn't exist: ${e}`
                );
                throw Error(r);
              }
              if ((0, ec.BwD)(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                let { message: r } = (0, ec.kCb)(
                  "EXPIRED",
                  `pairing topic: ${e}`
                );
                throw Error(r);
              }
            }),
            (this.core = e),
            (this.logger = E(r, this.name)),
            (this.pairings = new ai(
              this.core,
              this.logger,
              this.name,
              this.storagePrefix
            ));
        }
        get context() {
          return y(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, ec.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(eP.message, async (e) => {
            let { topic: r, message: s, transportType: p } = e;
            if (
              !this.pairings.keys.includes(r) ||
              p === eE.link_mode ||
              this.ignoredPayloadTypes.includes(
                this.core.crypto.getPayloadType(s)
              )
            )
              return;
            let b = await this.core.crypto.decode(r, s);
            try {
              (0, eh.isJsonRpcRequest)(b)
                ? (this.core.history.set(r, b),
                  this.onRelayEventRequest({ topic: r, payload: b }))
                : (0, eh.isJsonRpcResponse)(b) &&
                  (await this.core.history.resolve(b),
                  await this.onRelayEventResponse({ topic: r, payload: b }),
                  this.core.history.delete(r, b.id));
            } catch (e) {
              this.logger.error(e);
            }
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(eT.expired, async (e) => {
            let { topic: r } = (0, ec.iPz)(e.target);
            r &&
              this.pairings.keys.includes(r) &&
              (await this.deletePairing(r, !0),
              this.events.emit(eC.expire, { topic: r }));
          });
        }
      };
      let hi = class hi extends h {
        constructor(e, r) {
          super(e, r),
            (this.core = e),
            (this.logger = r),
            (this.records = new Map()),
            (this.events = new p.EventEmitter()),
            (this.name = "history"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = eg),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.records.set(e.id, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.set = (e, r, s) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Setting JSON-RPC request history record"),
                this.logger.trace({
                  type: "method",
                  method: "set",
                  topic: e,
                  request: r,
                  chainId: s,
                }),
                this.records.has(r.id))
              )
                return;
              let p = {
                id: r.id,
                topic: e,
                request: { method: r.method, params: r.params || null },
                chainId: s,
                expiry: (0, ec.gn4)(w.THIRTY_DAYS),
              };
              this.records.set(p.id, p),
                this.persist(),
                this.events.emit(eq.created, p);
            }),
            (this.resolve = async (e) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Updating JSON-RPC response history record"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  response: e,
                }),
                !this.records.has(e.id))
              )
                return;
              let r = await this.getRecord(e.id);
              typeof r.response > "u" &&
                ((r.response = (0, eh.isJsonRpcError)(e)
                  ? { error: e.error }
                  : { result: e.result }),
                this.records.set(r.id, r),
                this.persist(),
                this.events.emit(eq.updated, r));
            }),
            (this.get = async (e, r) => (
              this.isInitialized(),
              this.logger.debug("Getting record"),
              this.logger.trace({
                type: "method",
                method: "get",
                topic: e,
                id: r,
              }),
              await this.getRecord(r)
            )),
            (this.delete = (e, r) => {
              this.isInitialized(),
                this.logger.debug("Deleting record"),
                this.logger.trace({ type: "method", method: "delete", id: r }),
                this.values.forEach((s) => {
                  s.topic !== e ||
                    ("u" > typeof r && s.id !== r) ||
                    (this.records.delete(s.id),
                    this.events.emit(eq.deleted, s));
                }),
                this.persist();
            }),
            (this.exists = async (e, r) => (
              this.isInitialized(),
              !!this.records.has(r) && (await this.getRecord(r)).topic === e
            )),
            (this.on = (e, r) => {
              this.events.on(e, r);
            }),
            (this.once = (e, r) => {
              this.events.once(e, r);
            }),
            (this.off = (e, r) => {
              this.events.off(e, r);
            }),
            (this.removeListener = (e, r) => {
              this.events.removeListener(e, r);
            }),
            (this.logger = E(r, this.name));
        }
        get context() {
          return y(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get size() {
          return this.records.size;
        }
        get keys() {
          return Array.from(this.records.keys());
        }
        get values() {
          return Array.from(this.records.values());
        }
        get pending() {
          let e = [];
          return (
            this.values.forEach((r) => {
              if ("u" > typeof r.response) return;
              let s = {
                topic: r.topic,
                request: (0, eh.formatJsonRpcRequest)(
                  r.request.method,
                  r.request.params,
                  r.id
                ),
                chainId: r.chainId,
              };
              return e.push(s);
            }),
            e
          );
        }
        async setJsonRpcRecords(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getJsonRpcRecords() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getRecord(e) {
          this.isInitialized();
          let r = this.records.get(e);
          if (!r) {
            let { message: r } = (0, ec.kCb)(
              "NO_MATCHING_KEY",
              `${this.name}: ${e}`
            );
            throw Error(r);
          }
          return r;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(eq.sync);
        }
        async restore() {
          try {
            let e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length) return;
            if (this.records.size) {
              let { message: e } = (0, ec.kCb)(
                "RESTORE_WILL_OVERRIDE",
                this.name
              );
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(e);
          }
        }
        registerEventListeners() {
          this.events.on(eq.created, (e) => {
            let r = eq.created;
            this.logger.info(`Emitting ${r}`),
              this.logger.debug({ type: "event", event: r, record: e });
          }),
            this.events.on(eq.updated, (e) => {
              let r = eq.updated;
              this.logger.info(`Emitting ${r}`),
                this.logger.debug({ type: "event", event: r, record: e });
            }),
            this.events.on(eq.deleted, (e) => {
              let r = eq.deleted;
              this.logger.info(`Emitting ${r}`),
                this.logger.debug({ type: "event", event: r, record: e });
            }),
            this.core.heartbeat.on(S.pulse, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.isInitialized();
            let e = !1;
            this.records.forEach((r) => {
              (0, w.toMiliseconds)(r.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${r.id}`),
                this.records.delete(r.id),
                this.events.emit(eq.deleted, r, !1),
                (e = !0));
            }),
              e && this.persist();
          } catch (e) {
            this.logger.warn(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, ec.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      };
      let li = class li extends index_es_x {
        constructor(e, r) {
          super(e, r),
            (this.core = e),
            (this.logger = r),
            (this.expirations = new Map()),
            (this.events = new p.EventEmitter()),
            (this.name = "expirer"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = eg),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.has = (e) => {
              try {
                let r = this.formatTarget(e);
                return "u" > typeof this.getExpiration(r);
              } catch {
                return !1;
              }
            }),
            (this.set = (e, r) => {
              this.isInitialized();
              let s = this.formatTarget(e),
                p = { target: s, expiry: r };
              this.expirations.set(s, p),
                this.checkExpiry(s, p),
                this.events.emit(eT.created, { target: s, expiration: p });
            }),
            (this.get = (e) => {
              this.isInitialized();
              let r = this.formatTarget(e);
              return this.getExpiration(r);
            }),
            (this.del = (e) => {
              if ((this.isInitialized(), this.has(e))) {
                let r = this.formatTarget(e),
                  s = this.getExpiration(r);
                this.expirations.delete(r),
                  this.events.emit(eT.deleted, { target: r, expiration: s });
              }
            }),
            (this.on = (e, r) => {
              this.events.on(e, r);
            }),
            (this.once = (e, r) => {
              this.events.once(e, r);
            }),
            (this.off = (e, r) => {
              this.events.off(e, r);
            }),
            (this.removeListener = (e, r) => {
              this.events.removeListener(e, r);
            }),
            (this.logger = E(r, this.name));
        }
        get context() {
          return y(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.expirations.size;
        }
        get keys() {
          return Array.from(this.expirations.keys());
        }
        get values() {
          return Array.from(this.expirations.values());
        }
        formatTarget(e) {
          if ("string" == typeof e) return (0, ec.Z42)(e);
          if ("number" == typeof e) return (0, ec.GqV)(e);
          let { message: r } = (0, ec.kCb)(
            "UNKNOWN_TYPE",
            `Target type: ${typeof e}`
          );
          throw Error(r);
        }
        async setExpirations(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(eT.sync);
        }
        async restore() {
          try {
            let e = await this.getExpirations();
            if (typeof e > "u" || !e.length) return;
            if (this.expirations.size) {
              let { message: e } = (0, ec.kCb)(
                "RESTORE_WILL_OVERRIDE",
                this.name
              );
              throw (this.logger.error(e), Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                `Successfully Restored expirations for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values,
              });
          } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
              this.logger.error(e);
          }
        }
        getExpiration(e) {
          let r = this.expirations.get(e);
          if (!r) {
            let { message: r } = (0, ec.kCb)(
              "NO_MATCHING_KEY",
              `${this.name}: ${e}`
            );
            throw (this.logger.warn(r), Error(r));
          }
          return r;
        }
        checkExpiry(e, r) {
          let { expiry: s } = r;
          (0, w.toMiliseconds)(s) - Date.now() <= 0 && this.expire(e, r);
        }
        expire(e, r) {
          this.expirations.delete(e),
            this.events.emit(eT.expired, { target: e, expiration: r });
        }
        checkExpirations() {
          this.core.relayer.connected &&
            this.expirations.forEach((e, r) => this.checkExpiry(r, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(S.pulse, () => this.checkExpirations()),
            this.events.on(eT.created, (e) => {
              let r = eT.created;
              this.logger.info(`Emitting ${r}`),
                this.logger.debug({ type: "event", event: r, data: e }),
                this.persist();
            }),
            this.events.on(eT.expired, (e) => {
              let r = eT.expired;
              this.logger.info(`Emitting ${r}`),
                this.logger.debug({ type: "event", event: r, data: e }),
                this.persist();
            }),
            this.events.on(eT.deleted, (e) => {
              let r = eT.deleted;
              this.logger.info(`Emitting ${r}`),
                this.logger.debug({ type: "event", event: r, data: e }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, ec.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
      };
      var tV = {};
      function U(e) {
        let r;
        return (
          "u" > typeof window && "u" > typeof window[e] && (r = window[e]), r
        );
      }
      function G(e) {
        let r = U(e);
        if (!r) throw Error(`${e} is not defined in Window`);
        return r;
      }
      Object.defineProperty(tV, "__esModule", { value: !0 }),
        (tV.getLocalStorage =
          tV.getLocalStorageOrThrow =
          tV.getCrypto =
          tV.getCryptoOrThrow =
          tV.getLocation =
          tV.getLocationOrThrow =
          tV.getNavigator =
          tV.getNavigatorOrThrow =
          tJ =
          tV.getDocument =
          tV.getDocumentOrThrow =
          tV.getFromWindowOrThrow =
          tV.getFromWindow =
            void 0),
        (tV.getFromWindow = U),
        (tV.getFromWindowOrThrow = G),
        (tV.getDocumentOrThrow = function () {
          return G("document");
        });
      var tJ = (tV.getDocument = function () {
        return U("document");
      });
      (tV.getNavigatorOrThrow = function () {
        return G("navigator");
      }),
        (tV.getNavigator = function () {
          return U("navigator");
        }),
        (tV.getLocationOrThrow = function () {
          return G("location");
        }),
        (tV.getLocation = function () {
          return U("location");
        }),
        (tV.getCryptoOrThrow = function () {
          return G("crypto");
        }),
        (tV.getCrypto = function () {
          return U("crypto");
        }),
        (tV.getLocalStorageOrThrow = function () {
          return G("localStorage");
        }),
        (tV.getLocalStorage = function () {
          return U("localStorage");
        });
      let di = class di extends index_es_y {
        constructor(e, r, s) {
          super(e, r, s),
            (this.core = e),
            (this.logger = r),
            (this.store = s),
            (this.name = "verify-api"),
            (this.verifyUrlV3 = eO),
            (this.storagePrefix = eg),
            (this.version = 2),
            (this.init = async () => {
              var e;
              this.isDevEnv ||
                ((this.publicKey = await this.store.getItem(this.storeKey)),
                this.publicKey &&
                  (0, w.toMiliseconds)(
                    null == (e = this.publicKey) ? void 0 : e.expiresAt
                  ) < Date.now() &&
                  (this.logger.debug("verify v2 public key expired"),
                  await this.removePublicKey()));
            }),
            (this.register = async (e) => {
              if (!(0, ec.jUY)() || this.isDevEnv) return;
              let r = window.location.origin,
                { id: s, decryptedId: p } = e,
                b = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${r}&id=${s}&decryptedId=${p}`;
              try {
                let e = tJ(),
                  r = this.startAbortTimer(5 * w.ONE_SECOND),
                  p = await new Promise((p, v) => {
                    let l = () => {
                      window.removeEventListener("message", E),
                        e.body.removeChild(w),
                        v("attestation aborted");
                    };
                    this.abortController.signal.addEventListener("abort", l);
                    let w = e.createElement("iframe");
                    (w.src = b),
                      (w.style.display = "none"),
                      w.addEventListener("error", l, {
                        signal: this.abortController.signal,
                      });
                    let E = (b) => {
                      if (b.data && "string" == typeof b.data)
                        try {
                          let v = JSON.parse(b.data);
                          if ("verify_attestation" === v.type) {
                            if (
                              (0, eo.decodeJWT)(v.attestation).payload.id !== s
                            )
                              return;
                            clearInterval(r),
                              e.body.removeChild(w),
                              this.abortController.signal.removeEventListener(
                                "abort",
                                l
                              ),
                              window.removeEventListener("message", E),
                              p(null === v.attestation ? "" : v.attestation);
                          }
                        } catch (e) {
                          this.logger.warn(e);
                        }
                    };
                    e.body.appendChild(w),
                      window.addEventListener("message", E, {
                        signal: this.abortController.signal,
                      });
                  });
                return this.logger.debug("jwt attestation", p), p;
              } catch (e) {
                this.logger.warn(e);
              }
              return "";
            }),
            (this.resolve = async (e) => {
              if (this.isDevEnv) return "";
              let { attestationId: r, hash: s, encryptedId: p } = e;
              if ("" === r) {
                this.logger.debug("resolve: attestationId is empty, skipping");
                return;
              }
              if (r) {
                if ((0, eo.decodeJWT)(r).payload.id !== p) return;
                let e = await this.isValidJwtAttestation(r);
                if (e) {
                  if (!e.isVerified) {
                    this.logger.warn(
                      "resolve: jwt attestation: origin url not verified"
                    );
                    return;
                  }
                  return e;
                }
              }
              if (!s) return;
              let b = this.getVerifyUrl(e?.verifyUrl);
              return this.fetchAttestation(s, b);
            }),
            (this.fetchAttestation = async (e, r) => {
              this.logger.debug(`resolving attestation: ${e} from url: ${r}`);
              let s = this.startAbortTimer(5 * w.ONE_SECOND),
                p = await fetch(`${r}/attestation/${e}?v2Supported=true`, {
                  signal: this.abortController.signal,
                });
              return (
                clearTimeout(s), 200 === p.status ? await p.json() : void 0
              );
            }),
            (this.getVerifyUrl = (e) => {
              let r = e || eB;
              return (
                ek.includes(r) ||
                  (this.logger.info(
                    `verify url: ${r}, not included in trusted list, assigning default: ${eB}`
                  ),
                  (r = eB)),
                r
              );
            }),
            (this.fetchPublicKey = async () => {
              try {
                this.logger.debug(
                  `fetching public key from: ${this.verifyUrlV3}`
                );
                let e = this.startAbortTimer(w.FIVE_SECONDS),
                  r = await fetch(`${this.verifyUrlV3}/public-key`, {
                    signal: this.abortController.signal,
                  });
                return clearTimeout(e), await r.json();
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            (this.persistPublicKey = async (e) => {
              this.logger.debug("persisting public key to local storage", e),
                await this.store.setItem(this.storeKey, e),
                (this.publicKey = e);
            }),
            (this.removePublicKey = async () => {
              this.logger.debug("removing verify v2 public key from storage"),
                await this.store.removeItem(this.storeKey),
                (this.publicKey = void 0);
            }),
            (this.isValidJwtAttestation = async (e) => {
              let r = await this.getPublicKey();
              try {
                if (r) return this.validateAttestation(e, r);
              } catch (e) {
                this.logger.error(e),
                  this.logger.warn("error validating attestation");
              }
              let s = await this.fetchAndPersistPublicKey();
              try {
                if (s) return this.validateAttestation(e, s);
              } catch (e) {
                this.logger.error(e),
                  this.logger.warn("error validating attestation");
              }
            }),
            (this.getPublicKey = async () =>
              this.publicKey
                ? this.publicKey
                : await this.fetchAndPersistPublicKey()),
            (this.fetchAndPersistPublicKey = async () => {
              if (this.fetchPromise)
                return await this.fetchPromise, this.publicKey;
              this.fetchPromise = new Promise(async (e) => {
                let r = await this.fetchPublicKey();
                r && (await this.persistPublicKey(r), e(r));
              });
              let e = await this.fetchPromise;
              return (this.fetchPromise = void 0), e;
            }),
            (this.validateAttestation = (e, r) => {
              let s = (0, ec.NbI)(e, r.publicKey),
                p = {
                  hasExpired: (0, w.toMiliseconds)(s.exp) < Date.now(),
                  payload: s,
                };
              if (p.hasExpired)
                throw (
                  (this.logger.warn("resolve: jwt attestation expired"),
                  Error("JWT attestation expired"))
                );
              return {
                origin: p.payload.origin,
                isScam: p.payload.isScam,
                isVerified: p.payload.isVerified,
              };
            }),
            (this.logger = E(r, this.name)),
            (this.abortController = new AbortController()),
            (this.isDevEnv = (0, ec.h9F)()),
            this.init();
        }
        get storeKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//verify:public:key"
          );
        }
        get context() {
          return y(this.logger);
        }
        startAbortTimer(e) {
          return (
            (this.abortController = new AbortController()),
            setTimeout(
              () => this.abortController.abort(),
              (0, w.toMiliseconds)(e)
            )
          );
        }
      };
      let gi = class gi extends index_es_v {
        constructor(e, r) {
          super(e, r),
            (this.projectId = e),
            (this.logger = r),
            (this.context = "echo"),
            (this.registerDeviceToken = async (e) => {
              let {
                  clientId: r,
                  token: s,
                  notificationType: p,
                  enableEncrypted: b = !1,
                } = e,
                v = `https://echo.walletconnect.com/${this.projectId}/clients`;
              await fetch(v, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  client_id: r,
                  type: p,
                  token: s,
                  always_raw: b,
                }),
              });
            }),
            (this.logger = E(r, this.context));
        }
      };
      var tG = Object.defineProperty,
        tY = Object.getOwnPropertySymbols,
        tW = Object.prototype.hasOwnProperty,
        tZ = Object.prototype.propertyIsEnumerable,
        yi = (e, r, s) =>
          r in e
            ? tG(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (e[r] = s),
        te = (e, r) => {
          for (var s in r || (r = {})) tW.call(r, s) && yi(e, s, r[s]);
          if (tY) for (var s of tY(r)) tZ.call(r, s) && yi(e, s, r[s]);
          return e;
        };
      let Di = class Di extends index_es_C {
        constructor(e, r, s = !0) {
          super(e, r, s),
            (this.core = e),
            (this.logger = r),
            (this.context = "event-client"),
            (this.storagePrefix = eg),
            (this.storageVersion = 0.1),
            (this.events = new Map()),
            (this.shouldPersist = !1),
            (this.init = async () => {
              if (!(0, ec.h9F)())
                try {
                  let e = {
                    eventId: (0, ec.k$y)(),
                    timestamp: Date.now(),
                    domain: this.getAppDomain(),
                    props: {
                      event: "INIT",
                      type: "",
                      properties: {
                        client_id: await this.core.crypto.getClientId(),
                        user_agent: (0, ec.oIp)(
                          this.core.relayer.protocol,
                          this.core.relayer.version,
                          eI
                        ),
                      },
                    },
                  };
                  await this.sendEvent([e]);
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            (this.createEvent = (e) => {
              let {
                  event: r = "ERROR",
                  type: s = "",
                  properties: { topic: p, trace: b },
                } = e,
                v = (0, ec.k$y)(),
                w = this.core.projectId || "",
                _ = Date.now(),
                P = te(
                  {
                    eventId: v,
                    timestamp: _,
                    props: {
                      event: r,
                      type: s,
                      properties: { topic: p, trace: b },
                    },
                    bundleId: w,
                    domain: this.getAppDomain(),
                  },
                  this.setMethods(v)
                );
              return (
                this.telemetryEnabled &&
                  (this.events.set(v, P), (this.shouldPersist = !0)),
                P
              );
            }),
            (this.getEvent = (e) => {
              let { eventId: r, topic: s } = e;
              if (r) return this.events.get(r);
              let p = Array.from(this.events.values()).find(
                (e) => e.props.properties.topic === s
              );
              if (p) return te(te({}, p), this.setMethods(p.eventId));
            }),
            (this.deleteEvent = (e) => {
              let { eventId: r } = e;
              this.events.delete(r), (this.shouldPersist = !0);
            }),
            (this.setEventListeners = () => {
              this.core.heartbeat.on(S.pulse, async () => {
                this.shouldPersist && (await this.persist()),
                  this.events.forEach((e) => {
                    (0, w.fromMiliseconds)(Date.now()) -
                      (0, w.fromMiliseconds)(e.timestamp) >
                      86400 &&
                      (this.events.delete(e.eventId),
                      (this.shouldPersist = !0));
                  });
              });
            }),
            (this.setMethods = (e) => ({
              addTrace: (r) => this.addTrace(e, r),
              setError: (r) => this.setError(e, r),
            })),
            (this.addTrace = (e, r) => {
              let s = this.events.get(e);
              s &&
                (s.props.properties.trace.push(r),
                this.events.set(e, s),
                (this.shouldPersist = !0));
            }),
            (this.setError = (e, r) => {
              let s = this.events.get(e);
              s &&
                ((s.props.type = r),
                (s.timestamp = Date.now()),
                this.events.set(e, s),
                (this.shouldPersist = !0));
            }),
            (this.persist = async () => {
              await this.core.storage.setItem(
                this.storageKey,
                Array.from(this.events.values())
              ),
                (this.shouldPersist = !1);
            }),
            (this.restore = async () => {
              try {
                let e =
                  (await this.core.storage.getItem(this.storageKey)) || [];
                if (!e.length) return;
                e.forEach((e) => {
                  this.events.set(
                    e.eventId,
                    te(te({}, e), this.setMethods(e.eventId))
                  );
                });
              } catch (e) {
                this.logger.warn(e);
              }
            }),
            (this.submit = async () => {
              if (!this.telemetryEnabled || 0 === this.events.size) return;
              let e = [];
              for (let [r, s] of this.events) s.props.type && e.push(s);
              if (0 !== e.length)
                try {
                  if ((await this.sendEvent(e)).ok)
                    for (let r of e)
                      this.events.delete(r.eventId), (this.shouldPersist = !0);
                } catch (e) {
                  this.logger.warn(e);
                }
            }),
            (this.sendEvent = async (e) => {
              let r = this.getAppDomain() ? "" : "&sp=desktop";
              return await fetch(
                `https://pulse.walletconnect.org/batch?projectId=${this.core.projectId}&st=events_sdk&sv=js-${eI}${r}`,
                { method: "POST", body: JSON.stringify(e) }
              );
            }),
            (this.getAppDomain = () => (0, ec.DaH)().url),
            (this.logger = E(r, this.context)),
            (this.telemetryEnabled = s),
            s
              ? this.restore().then(async () => {
                  await this.submit(), this.setEventListeners();
                })
              : this.persist();
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.storageVersion +
            this.core.customStoragePrefix +
            "//" +
            this.context
          );
        }
      };
      var tQ = Object.defineProperty,
        tX = Object.getOwnPropertySymbols,
        t0 = Object.prototype.hasOwnProperty,
        t1 = Object.prototype.propertyIsEnumerable,
        bi = (e, r, s) =>
          r in e
            ? tQ(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (e[r] = s),
        fi = (e, r) => {
          for (var s in r || (r = {})) t0.call(r, s) && bi(e, s, r[s]);
          if (tX) for (var s of tX(r)) t1.call(r, s) && bi(e, s, r[s]);
          return e;
        };
      let ce = class ce extends dist_index_es_n {
        constructor(e) {
          var r, s;
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = eb),
            (this.events = new p.EventEmitter()),
            (this.initialized = !1),
            (this.on = (e, r) => this.events.on(e, r)),
            (this.once = (e, r) => this.events.once(e, r)),
            (this.off = (e, r) => this.events.off(e, r)),
            (this.removeListener = (e, r) => this.events.removeListener(e, r)),
            (this.dispatchEnvelope = ({
              topic: e,
              message: r,
              sessionExists: s,
            }) => {
              if (!e || !r) return;
              let p = {
                topic: e,
                message: r,
                publishedAt: Date.now(),
                transportType: eE.link_mode,
              };
              this.relayer.onLinkMessageEvent(p, { sessionExists: s });
            }),
            (this.projectId = e?.projectId),
            (this.relayUrl = e?.relayUrl || eM),
            (this.customStoragePrefix =
              null != e && e.customStoragePrefix
                ? `:${e.customStoragePrefix}`
                : "");
          let b = k({
              level:
                "string" == typeof e?.logger && e.logger ? e.logger : em.logger,
            }),
            { logger: v, chunkLoggerController: w } =
              "u" >
                typeof (s = {
                  opts: b,
                  maxSizeInBytes: e?.maxLogBlobSizeInBytes,
                  loggerOverride: e?.logger,
                }).loggerOverride && "string" != typeof s.loggerOverride
                ? { logger: s.loggerOverride, chunkLoggerController: null }
                : "u" > typeof window
                ? (function (e) {
                    var r, s;
                    let p = new m(
                      null == (r = e.opts) ? void 0 : r.level,
                      e.maxSizeInBytes
                    );
                    return {
                      logger: R()(
                        g(dist_index_es_i({}, e.opts), {
                          level: "trace",
                          browser: g(
                            dist_index_es_i(
                              {},
                              null == (s = e.opts) ? void 0 : s.browser
                            ),
                            { write: (e) => p.write(e) }
                          ),
                        })
                      ),
                      chunkLoggerController: p,
                    };
                  })(s)
                : (function (e) {
                    var r;
                    let s = new index_es_B(
                      null == (r = e.opts) ? void 0 : r.level,
                      e.maxSizeInBytes
                    );
                    return {
                      logger: R()(
                        g(dist_index_es_i({}, e.opts), { level: "trace" }),
                        s
                      ),
                      chunkLoggerController: s,
                    };
                  })(s);
          (this.logChunkController = w),
            null != (r = this.logChunkController) &&
              r.downloadLogsBlobInBrowser &&
              (window.downloadLogsBlobInBrowser = async () => {
                var e, r;
                null != (e = this.logChunkController) &&
                  e.downloadLogsBlobInBrowser &&
                  (null == (r = this.logChunkController) ||
                    r.downloadLogsBlobInBrowser({
                      clientId: await this.crypto.getClientId(),
                    }));
              }),
            (this.logger = E(v, this.name)),
            (this.heartbeat = new index_es_i()),
            (this.crypto = new Wt(this, this.logger, e?.keychain)),
            (this.history = new hi(this, this.logger)),
            (this.expirer = new li(this, this.logger)),
            (this.storage =
              null != e && e.storage
                ? e.storage
                : new I.Z(fi(fi({}, ev), e?.storageOptions))),
            (this.relayer = new si({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new ci(this, this.logger)),
            (this.verify = new di(this, this.logger, this.storage)),
            (this.echoClient = new gi(this.projectId || "", this.logger)),
            (this.linkModeSupportedApps = []),
            (this.eventClient = new Di(this, this.logger, e?.telemetryEnabled));
        }
        static async init(e) {
          let r = new ce(e);
          await r.initialize();
          let s = await r.crypto.getClientId();
          return await r.storage.setItem("WALLETCONNECT_CLIENT_ID", s), r;
        }
        get context() {
          return y(this.logger);
        }
        async start() {
          this.initialized || (await this.initialize());
        }
        async getLogsBlob() {
          var e;
          return null == (e = this.logChunkController)
            ? void 0
            : e.logsToBlob({ clientId: await this.crypto.getClientId() });
        }
        async addLinkModeSupportedApp(e) {
          this.linkModeSupportedApps.includes(e) ||
            (this.linkModeSupportedApps.push(e),
            await this.storage.setItem(ex, this.linkModeSupportedApps));
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.crypto.init(),
              await this.history.init(),
              await this.expirer.init(),
              await this.relayer.init(),
              await this.heartbeat.init(),
              await this.pairing.init(),
              this.eventClient.init(),
              (this.linkModeSupportedApps =
                (await this.storage.getItem(ex)) || []),
              (this.initialized = !0),
              this.logger.info("Core Initialization Success");
          } catch (e) {
            throw (
              (this.logger.warn(
                `Core Initialization Failure at epoch ${Date.now()}`,
                e
              ),
              this.logger.error(e.message),
              e)
            );
          }
        }
      };
      let t6 = "client",
        t2 = `wc@2:${t6}:`,
        t8 = { name: t6, logger: "error" },
        t3 = "WALLETCONNECT_DEEPLINK_CHOICE",
        t4 = "Proposal expired",
        t9 = w.SEVEN_DAYS,
        t7 = {
          wc_sessionPropose: {
            req: { ttl: w.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: w.FIVE_MINUTES, prompt: !1, tag: 1101 },
            reject: { ttl: w.FIVE_MINUTES, prompt: !1, tag: 1120 },
            autoReject: { ttl: w.FIVE_MINUTES, prompt: !1, tag: 1121 },
          },
          wc_sessionSettle: {
            req: { ttl: w.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: w.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: w.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: w.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: w.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: w.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: w.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: w.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: w.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: w.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: w.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: w.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: w.ONE_DAY, prompt: !1, tag: 1114 },
            res: { ttl: w.ONE_DAY, prompt: !1, tag: 1115 },
          },
          wc_sessionAuthenticate: {
            req: { ttl: w.ONE_HOUR, prompt: !0, tag: 1116 },
            res: { ttl: w.ONE_HOUR, prompt: !1, tag: 1117 },
            reject: { ttl: w.FIVE_MINUTES, prompt: !1, tag: 1118 },
            autoReject: { ttl: w.FIVE_MINUTES, prompt: !1, tag: 1119 },
          },
        },
        t5 = { min: w.FIVE_MINUTES, max: w.SEVEN_DAYS },
        is = { idle: "IDLE", active: "ACTIVE" },
        io = [
          "wc_sessionPropose",
          "wc_sessionRequest",
          "wc_authRequest",
          "wc_sessionAuthenticate",
        ],
        ic = "wc@1.5:auth:",
        id = `${ic}:PUB_KEY`;
      var ih = Object.defineProperty,
        il = Object.defineProperties,
        ip = Object.getOwnPropertyDescriptors,
        ib = Object.getOwnPropertySymbols,
        ig = Object.prototype.hasOwnProperty,
        im = Object.prototype.propertyIsEnumerable,
        index_es_gt = (e, r, s) =>
          r in e
            ? ih(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (e[r] = s),
        dist_index_es_I = (e, r) => {
          for (var s in r || (r = {})) ig.call(r, s) && index_es_gt(e, s, r[s]);
          if (ib) for (var s of ib(r)) im.call(r, s) && index_es_gt(e, s, r[s]);
          return e;
        },
        D = (e, r) => il(e, ip(r));
      let Rs = class Rs extends M {
        constructor(e) {
          super(e),
            (this.name = "engine"),
            (this.events = new (b())()),
            (this.initialized = !1),
            (this.requestQueue = { state: is.idle, queue: [] }),
            (this.sessionRequestQueue = { state: is.idle, queue: [] }),
            (this.requestQueueDelay = w.ONE_SECOND),
            (this.expectedPairingMethodMap = new Map()),
            (this.recentlyDeletedMap = new Map()),
            (this.recentlyDeletedLimit = 200),
            (this.relayMessageCache = []),
            (this.init = async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.registerPairingEvents(),
                await this.registerLinkModeListeners(),
                this.client.core.pairing.register({ methods: Object.keys(t7) }),
                (this.initialized = !0),
                setTimeout(() => {
                  (this.sessionRequestQueue.queue =
                    this.getPendingSessionRequests()),
                    this.processSessionRequestQueue();
                }, (0, w.toMiliseconds)(this.requestQueueDelay)));
            }),
            (this.connect = async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              let r = D(dist_index_es_I({}, e), {
                requiredNamespaces: e.requiredNamespaces || {},
                optionalNamespaces: e.optionalNamespaces || {},
              });
              await this.isValidConnect(r);
              let {
                  pairingTopic: s,
                  requiredNamespaces: p,
                  optionalNamespaces: b,
                  sessionProperties: v,
                  relays: _,
                } = r,
                P = s,
                S,
                I = !1;
              try {
                P && (I = this.client.core.pairing.pairings.get(P).active);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `connect() -> pairing.get(${P}) failed`
                  ),
                  e)
                );
              }
              if (!P || !I) {
                let { topic: e, uri: r } =
                  await this.client.core.pairing.create();
                (P = e), (S = r);
              }
              if (!P) {
                let { message: e } = (0, ec.kCb)(
                  "NO_MATCHING_KEY",
                  `connect() pairing topic: ${P}`
                );
                throw Error(e);
              }
              let A = await this.client.core.crypto.generateKeyPair(),
                R = t7.wc_sessionPropose.req.ttl || w.FIVE_MINUTES,
                C = (0, ec.gn4)(R),
                B = dist_index_es_I(
                  {
                    requiredNamespaces: p,
                    optionalNamespaces: b,
                    relays: _ ?? [{ protocol: "irn" }],
                    proposer: { publicKey: A, metadata: this.client.metadata },
                    expiryTimestamp: C,
                    pairingTopic: P,
                  },
                  v && { sessionProperties: v }
                ),
                { reject: j, resolve: V, done: J } = (0, ec.H1S)(R, t4);
              this.events.once(
                (0, ec.E0T)("session_connect"),
                async ({ error: e, session: r }) => {
                  if (e) j(e);
                  else if (r) {
                    r.self.publicKey = A;
                    let e = D(dist_index_es_I({}, r), {
                      pairingTopic: B.pairingTopic,
                      requiredNamespaces: B.requiredNamespaces,
                      optionalNamespaces: B.optionalNamespaces,
                      transportType: eE.relay,
                    });
                    await this.client.session.set(r.topic, e),
                      await this.setExpiry(r.topic, r.expiry),
                      P &&
                        (await this.client.core.pairing.updateMetadata({
                          topic: P,
                          metadata: r.peer.metadata,
                        })),
                      this.cleanupDuplicatePairings(e),
                      V(e);
                  }
                }
              );
              let W = await this.sendRequest({
                topic: P,
                method: "wc_sessionPropose",
                params: B,
                throwOnFailedPublish: !0,
              });
              return (
                await this.setProposal(W, dist_index_es_I({ id: W }, B)),
                { uri: S, approval: J }
              );
            }),
            (this.pair = async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                return await this.client.core.pairing.pair(e);
              } catch (e) {
                throw (this.client.logger.error("pair() failed"), e);
              }
            }),
            (this.approve = async (e) => {
              var r, s, p;
              let b = this.client.core.eventClient.createEvent({
                properties: {
                  topic: null == (r = e?.id) ? void 0 : r.toString(),
                  trace: [eL.session_approve_started],
                },
              });
              try {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
              } catch (e) {
                throw (b.setError(ej.no_internet_connection), e);
              }
              try {
                await this.isValidProposalId(e?.id);
              } catch (r) {
                throw (
                  (this.client.logger.error(
                    `approve() -> proposal.get(${e?.id}) failed`
                  ),
                  b.setError(ej.proposal_not_found),
                  r)
                );
              }
              try {
                await this.isValidApprove(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "approve() -> isValidApprove() failed"
                  ),
                  b.setError(ej.session_approve_namespace_validation_failure),
                  e)
                );
              }
              let {
                  id: v,
                  relayProtocol: w,
                  namespaces: _,
                  sessionProperties: P,
                  sessionConfig: S,
                } = e,
                I = this.client.proposal.get(v);
              this.client.core.eventClient.deleteEvent({ eventId: b.eventId });
              let {
                  pairingTopic: A,
                  proposer: R,
                  requiredNamespaces: C,
                  optionalNamespaces: B,
                } = I,
                j =
                  null == (s = this.client.core.eventClient)
                    ? void 0
                    : s.getEvent({ topic: A });
              j ||
                (j =
                  null == (p = this.client.core.eventClient)
                    ? void 0
                    : p.createEvent({
                        type: eL.session_approve_started,
                        properties: {
                          topic: A,
                          trace: [
                            eL.session_approve_started,
                            eL.session_namespaces_validation_success,
                          ],
                        },
                      }));
              let V = await this.client.core.crypto.generateKeyPair(),
                J = R.publicKey,
                W = await this.client.core.crypto.generateSharedKey(V, J),
                X = dist_index_es_I(
                  dist_index_es_I(
                    {
                      relay: { protocol: w ?? "irn" },
                      namespaces: _,
                      controller: {
                        publicKey: V,
                        metadata: this.client.metadata,
                      },
                      expiry: (0, ec.gn4)(t9),
                    },
                    P && { sessionProperties: P }
                  ),
                  S && { sessionConfig: S }
                ),
                et = eE.relay;
              j.addTrace(eL.subscribing_session_topic);
              try {
                await this.client.core.relayer.subscribe(W, {
                  transportType: et,
                });
              } catch (e) {
                throw (j.setError(ej.subscribe_session_topic_failure), e);
              }
              j.addTrace(eL.subscribe_session_topic_success);
              let es = D(dist_index_es_I({}, X), {
                topic: W,
                requiredNamespaces: C,
                optionalNamespaces: B,
                pairingTopic: A,
                acknowledged: !1,
                self: X.controller,
                peer: { publicKey: R.publicKey, metadata: R.metadata },
                controller: V,
                transportType: eE.relay,
              });
              await this.client.session.set(W, es),
                j.addTrace(eL.store_session);
              try {
                j.addTrace(eL.publishing_session_settle),
                  await this.sendRequest({
                    topic: W,
                    method: "wc_sessionSettle",
                    params: X,
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (j?.setError(ej.session_settle_publish_failure), e);
                  }),
                  j.addTrace(eL.session_settle_publish_success),
                  j.addTrace(eL.publishing_session_approve),
                  await this.sendResult({
                    id: v,
                    topic: A,
                    result: {
                      relay: { protocol: w ?? "irn" },
                      responderPublicKey: V,
                    },
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    throw (j?.setError(ej.session_approve_publish_failure), e);
                  }),
                  j.addTrace(eL.session_approve_publish_success);
              } catch (e) {
                throw (
                  (this.client.logger.error(e),
                  this.client.session.delete(
                    W,
                    (0, ec.D6H)("USER_DISCONNECTED")
                  ),
                  await this.client.core.relayer.unsubscribe(W),
                  e)
                );
              }
              return (
                this.client.core.eventClient.deleteEvent({
                  eventId: j.eventId,
                }),
                await this.client.core.pairing.updateMetadata({
                  topic: A,
                  metadata: R.metadata,
                }),
                await this.client.proposal.delete(
                  v,
                  (0, ec.D6H)("USER_DISCONNECTED")
                ),
                await this.client.core.pairing.activate({ topic: A }),
                await this.setExpiry(W, (0, ec.gn4)(t9)),
                {
                  topic: W,
                  acknowledged: () =>
                    Promise.resolve(this.client.session.get(W)),
                }
              );
            }),
            (this.reject = async (e) => {
              let r;
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidReject(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "reject() -> isValidReject() failed"
                  ),
                  e)
                );
              }
              let { id: s, reason: p } = e;
              try {
                r = this.client.proposal.get(s).pairingTopic;
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `reject() -> proposal.get(${s}) failed`
                  ),
                  e)
                );
              }
              r &&
                (await this.sendError({
                  id: s,
                  topic: r,
                  error: p,
                  rpcOpts: t7.wc_sessionPropose.reject,
                }),
                await this.client.proposal.delete(
                  s,
                  (0, ec.D6H)("USER_DISCONNECTED")
                ));
            }),
            (this.update = async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidUpdate(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "update() -> isValidUpdate() failed"
                  ),
                  e)
                );
              }
              let { topic: r, namespaces: s } = e,
                { done: p, resolve: b, reject: v } = (0, ec.H1S)(),
                w = (0, eh.payloadId)(),
                _ = (0, eh.getBigIntRpcId)().toString(),
                P = this.client.session.get(r).namespaces;
              return (
                this.events.once(
                  (0, ec.E0T)("session_update", w),
                  ({ error: e }) => {
                    e ? v(e) : b();
                  }
                ),
                await this.client.session.update(r, { namespaces: s }),
                await this.sendRequest({
                  topic: r,
                  method: "wc_sessionUpdate",
                  params: { namespaces: s },
                  throwOnFailedPublish: !0,
                  clientRpcId: w,
                  relayRpcId: _,
                }).catch((e) => {
                  this.client.logger.error(e),
                    this.client.session.update(r, { namespaces: P }),
                    v(e);
                }),
                { acknowledged: p }
              );
            }),
            (this.extend = async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidExtend(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "extend() -> isValidExtend() failed"
                  ),
                  e)
                );
              }
              let { topic: r } = e,
                s = (0, eh.payloadId)(),
                { done: p, resolve: b, reject: v } = (0, ec.H1S)();
              return (
                this.events.once(
                  (0, ec.E0T)("session_extend", s),
                  ({ error: e }) => {
                    e ? v(e) : b();
                  }
                ),
                await this.setExpiry(r, (0, ec.gn4)(t9)),
                this.sendRequest({
                  topic: r,
                  method: "wc_sessionExtend",
                  params: {},
                  clientRpcId: s,
                  throwOnFailedPublish: !0,
                }).catch((e) => {
                  v(e);
                }),
                { acknowledged: p }
              );
            }),
            (this.request = async (e) => {
              this.isInitialized();
              try {
                await this.isValidRequest(e);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    "request() -> isValidRequest() failed"
                  ),
                  e)
                );
              }
              let {
                  chainId: r,
                  request: s,
                  topic: p,
                  expiry: b = t7.wc_sessionRequest.req.ttl,
                } = e,
                v = this.client.session.get(p);
              v?.transportType === eE.relay &&
                (await this.confirmOnlineStateOrThrow());
              let w = (0, eh.payloadId)(),
                _ = (0, eh.getBigIntRpcId)().toString(),
                {
                  done: P,
                  resolve: S,
                  reject: I,
                } = (0, ec.H1S)(b, "Request expired. Please try again.");
              this.events.once(
                (0, ec.E0T)("session_request", w),
                ({ error: e, result: r }) => {
                  e ? I(e) : S(r);
                }
              );
              let A = this.getAppLinkIfEnabled(
                v.peer.metadata,
                v.transportType
              );
              return A
                ? (await this.sendRequest({
                    clientRpcId: w,
                    relayRpcId: _,
                    topic: p,
                    method: "wc_sessionRequest",
                    params: {
                      request: D(dist_index_es_I({}, s), {
                        expiryTimestamp: (0, ec.gn4)(b),
                      }),
                      chainId: r,
                    },
                    expiry: b,
                    throwOnFailedPublish: !0,
                    appLink: A,
                  }).catch((e) => I(e)),
                  this.client.events.emit("session_request_sent", {
                    topic: p,
                    request: s,
                    chainId: r,
                    id: w,
                  }),
                  await P())
                : await Promise.all([
                    new Promise(async (e) => {
                      await this.sendRequest({
                        clientRpcId: w,
                        relayRpcId: _,
                        topic: p,
                        method: "wc_sessionRequest",
                        params: {
                          request: D(dist_index_es_I({}, s), {
                            expiryTimestamp: (0, ec.gn4)(b),
                          }),
                          chainId: r,
                        },
                        expiry: b,
                        throwOnFailedPublish: !0,
                      }).catch((e) => I(e)),
                        this.client.events.emit("session_request_sent", {
                          topic: p,
                          request: s,
                          chainId: r,
                          id: w,
                        }),
                        e();
                    }),
                    new Promise(async (e) => {
                      var r;
                      if (
                        !(null != (r = v.sessionConfig) && r.disableDeepLink)
                      ) {
                        let e = await (0, ec.bW6)(this.client.core.storage, t3);
                        await (0, ec.HhN)({ id: w, topic: p, wcDeepLink: e });
                      }
                      e();
                    }),
                    P(),
                  ]).then((e) => e[2]);
            }),
            (this.respond = async (e) => {
              this.isInitialized(), await this.isValidRespond(e);
              let { topic: r, response: s } = e,
                { id: p } = s,
                b = this.client.session.get(r);
              b.transportType === eE.relay &&
                (await this.confirmOnlineStateOrThrow());
              let v = this.getAppLinkIfEnabled(
                b.peer.metadata,
                b.transportType
              );
              (0, eh.isJsonRpcResult)(s)
                ? await this.sendResult({
                    id: p,
                    topic: r,
                    result: s.result,
                    throwOnFailedPublish: !0,
                    appLink: v,
                  })
                : (0, eh.isJsonRpcError)(s) &&
                  (await this.sendError({
                    id: p,
                    topic: r,
                    error: s.error,
                    appLink: v,
                  })),
                this.cleanupAfterResponse(e);
            }),
            (this.ping = async (e) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidPing(e);
              } catch (e) {
                throw (
                  (this.client.logger.error("ping() -> isValidPing() failed"),
                  e)
                );
              }
              let { topic: r } = e;
              if (this.client.session.keys.includes(r)) {
                let e = (0, eh.payloadId)(),
                  s = (0, eh.getBigIntRpcId)().toString(),
                  { done: p, resolve: b, reject: v } = (0, ec.H1S)();
                this.events.once(
                  (0, ec.E0T)("session_ping", e),
                  ({ error: e }) => {
                    e ? v(e) : b();
                  }
                ),
                  await Promise.all([
                    this.sendRequest({
                      topic: r,
                      method: "wc_sessionPing",
                      params: {},
                      throwOnFailedPublish: !0,
                      clientRpcId: e,
                      relayRpcId: s,
                    }),
                    p(),
                  ]);
              } else
                this.client.core.pairing.pairings.keys.includes(r) &&
                  (await this.client.core.pairing.ping({ topic: r }));
            }),
            (this.emit = async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidEmit(e);
              let { topic: r, event: s, chainId: p } = e,
                b = (0, eh.getBigIntRpcId)().toString();
              await this.sendRequest({
                topic: r,
                method: "wc_sessionEvent",
                params: { event: s, chainId: p },
                throwOnFailedPublish: !0,
                relayRpcId: b,
              });
            }),
            (this.disconnect = async (e) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidDisconnect(e);
              let { topic: r } = e;
              if (this.client.session.keys.includes(r))
                await this.sendRequest({
                  topic: r,
                  method: "wc_sessionDelete",
                  params: (0, ec.D6H)("USER_DISCONNECTED"),
                  throwOnFailedPublish: !0,
                }),
                  await this.deleteSession({ topic: r, emitEvent: !1 });
              else if (this.client.core.pairing.pairings.keys.includes(r))
                await this.client.core.pairing.disconnect({ topic: r });
              else {
                let { message: e } = (0, ec.kCb)(
                  "MISMATCHED_TOPIC",
                  `Session or pairing topic not found: ${r}`
                );
                throw Error(e);
              }
            }),
            (this.find = (e) => (
              this.isInitialized(),
              this.client.session.getAll().filter((r) => (0, ec.Ih8)(r, e))
            )),
            (this.getPendingSessionRequests = () =>
              this.client.pendingRequest.getAll()),
            (this.authenticate = async (e, r) => {
              var s;
              let p;
              this.isInitialized(), this.isValidAuthenticate(e);
              let b =
                  r &&
                  this.client.core.linkModeSupportedApps.includes(r) &&
                  (null == (s = this.client.metadata.redirect)
                    ? void 0
                    : s.linkMode),
                v = b ? eE.link_mode : eE.relay;
              v === eE.relay && (await this.confirmOnlineStateOrThrow());
              let {
                  chains: w,
                  statement: _ = "",
                  uri: P,
                  domain: S,
                  nonce: I,
                  type: A,
                  exp: R,
                  nbf: C,
                  methods: B = [],
                  expiry: j,
                } = e,
                V = [...(e.resources || [])],
                { topic: J, uri: W } = await this.client.core.pairing.create({
                  methods: ["wc_sessionAuthenticate"],
                  transportType: v,
                });
              this.client.logger.info({
                message: "Generated new pairing",
                pairing: { topic: J, uri: W },
              });
              let X = await this.client.core.crypto.generateKeyPair(),
                et = (0, ec.YmJ)(X);
              if (
                (await Promise.all([
                  this.client.auth.authKeys.set(id, {
                    responseTopic: et,
                    publicKey: X,
                  }),
                  this.client.auth.pairingTopics.set(et, {
                    topic: et,
                    pairingTopic: J,
                  }),
                ]),
                await this.client.core.relayer.subscribe(et, {
                  transportType: v,
                }),
                this.client.logger.info(
                  `sending request to new pairing topic: ${J}`
                ),
                B.length > 0)
              ) {
                let { namespace: e } = (0, ec.DQe)(w[0]),
                  r = (0, ec.IkP)(e, "request", B);
                (0, ec.hA9)(V) && (r = (0, ec.qJM)(r, V.pop())), V.push(r);
              }
              let es =
                  j && j > t7.wc_sessionAuthenticate.req.ttl
                    ? j
                    : t7.wc_sessionAuthenticate.req.ttl,
                eo = {
                  authPayload: {
                    type: A ?? "caip122",
                    chains: w,
                    statement: _,
                    aud: P,
                    domain: S,
                    version: "1",
                    nonce: I,
                    iat: new Date().toISOString(),
                    exp: R,
                    nbf: C,
                    resources: V,
                  },
                  requester: { publicKey: X, metadata: this.client.metadata },
                  expiryTimestamp: (0, ec.gn4)(es),
                },
                ed = {
                  eip155: {
                    chains: w,
                    methods: [...new Set(["personal_sign", ...B])],
                    events: ["chainChanged", "accountsChanged"],
                  },
                },
                ef = {
                  requiredNamespaces: {},
                  optionalNamespaces: ed,
                  relays: [{ protocol: "irn" }],
                  pairingTopic: J,
                  proposer: { publicKey: X, metadata: this.client.metadata },
                  expiryTimestamp: (0, ec.gn4)(t7.wc_sessionPropose.req.ttl),
                },
                {
                  done: el,
                  resolve: ep,
                  reject: eb,
                } = (0, ec.H1S)(es, "Request expired"),
                ce = async ({ error: e, session: r }) => {
                  if (
                    (this.events.off((0, ec.E0T)("session_request", eg), Re), e)
                  )
                    eb(e);
                  else if (r) {
                    (r.self.publicKey = X),
                      await this.client.session.set(r.topic, r),
                      await this.setExpiry(r.topic, r.expiry),
                      J &&
                        (await this.client.core.pairing.updateMetadata({
                          topic: J,
                          metadata: r.peer.metadata,
                        }));
                    let e = this.client.session.get(r.topic);
                    await this.deleteProposal(em), ep({ session: e });
                  }
                },
                Re = async (e) => {
                  var s, p, b;
                  let w;
                  if (
                    (await this.deletePendingAuthRequest(eg, {
                      message: "fulfilled",
                      code: 0,
                    }),
                    e.error)
                  ) {
                    let r = (0, ec.D6H)(
                      "WC_METHOD_UNSUPPORTED",
                      "wc_sessionAuthenticate"
                    );
                    return e.error.code === r.code
                      ? void 0
                      : (this.events.off((0, ec.E0T)("session_connect"), ce),
                        eb(e.error.message));
                  }
                  await this.deleteProposal(em),
                    this.events.off((0, ec.E0T)("session_connect"), ce);
                  let { cacaos: _, responder: P } = e.result,
                    S = [],
                    I = [];
                  for (let e of _) {
                    (await (0, ec.c4l)({
                      cacao: e,
                      projectId: this.client.core.projectId,
                    })) ||
                      (this.client.logger.error(
                        e,
                        "Signature verification failed"
                      ),
                      eb(
                        (0, ec.D6H)(
                          "SESSION_SETTLEMENT_FAILED",
                          "Signature verification failed"
                        )
                      ));
                    let { p: r } = e,
                      s = (0, ec.hA9)(r.resources),
                      p = [(0, ec.DJo)(r.iss)],
                      b = (0, ec.NmC)(r.iss);
                    if (s) {
                      let e = (0, ec.Y31)(s),
                        r = (0, ec.ouN)(s);
                      S.push(...e), p.push(...r);
                    }
                    for (let e of p) I.push(`${e}:${b}`);
                  }
                  let A = await this.client.core.crypto.generateSharedKey(
                    X,
                    P.publicKey
                  );
                  S.length > 0 &&
                    ((w = {
                      topic: A,
                      acknowledged: !0,
                      self: { publicKey: X, metadata: this.client.metadata },
                      peer: P,
                      controller: P.publicKey,
                      expiry: (0, ec.gn4)(t9),
                      requiredNamespaces: {},
                      optionalNamespaces: {},
                      relay: { protocol: "irn" },
                      pairingTopic: J,
                      namespaces: (0, ec.E12)([...new Set(S)], [...new Set(I)]),
                      transportType: v,
                    }),
                    await this.client.core.relayer.subscribe(A, {
                      transportType: v,
                    }),
                    await this.client.session.set(A, w),
                    J &&
                      (await this.client.core.pairing.updateMetadata({
                        topic: J,
                        metadata: P.metadata,
                      })),
                    (w = this.client.session.get(A))),
                    null != (s = this.client.metadata.redirect) &&
                      s.linkMode &&
                      null != (p = P.metadata.redirect) &&
                      p.linkMode &&
                      null != (b = P.metadata.redirect) &&
                      b.universal &&
                      r &&
                      (this.client.core.addLinkModeSupportedApp(
                        P.metadata.redirect.universal
                      ),
                      this.client.session.update(A, {
                        transportType: eE.link_mode,
                      })),
                    ep({ auths: _, session: w });
                },
                eg = (0, eh.payloadId)(),
                em = (0, eh.payloadId)();
              this.events.once((0, ec.E0T)("session_connect"), ce),
                this.events.once((0, ec.E0T)("session_request", eg), Re);
              try {
                if (b) {
                  let e = (0, eh.formatJsonRpcRequest)(
                    "wc_sessionAuthenticate",
                    eo,
                    eg
                  );
                  this.client.core.history.set(J, e);
                  let s = await this.client.core.crypto.encode("", e, {
                    type: ec.FpL,
                    encoding: ec.zl_,
                  });
                  p = (0, ec.L9d)(r, J, s);
                } else
                  await Promise.all([
                    this.sendRequest({
                      topic: J,
                      method: "wc_sessionAuthenticate",
                      params: eo,
                      expiry: e.expiry,
                      throwOnFailedPublish: !0,
                      clientRpcId: eg,
                    }),
                    this.sendRequest({
                      topic: J,
                      method: "wc_sessionPropose",
                      params: ef,
                      expiry: t7.wc_sessionPropose.req.ttl,
                      throwOnFailedPublish: !0,
                      clientRpcId: em,
                    }),
                  ]);
              } catch (e) {
                throw (
                  (this.events.off((0, ec.E0T)("session_connect"), ce),
                  this.events.off((0, ec.E0T)("session_request", eg), Re),
                  e)
                );
              }
              return (
                await this.setProposal(em, dist_index_es_I({ id: em }, ef)),
                await this.setAuthRequest(eg, {
                  request: D(dist_index_es_I({}, eo), { verifyContext: {} }),
                  pairingTopic: J,
                  transportType: v,
                }),
                { uri: p ?? W, response: el }
              );
            }),
            (this.approveSessionAuthenticate = async (e) => {
              let r;
              let { id: s, auths: p } = e,
                b = this.client.core.eventClient.createEvent({
                  properties: {
                    topic: s.toString(),
                    trace: [e$.authenticated_session_approve_started],
                  },
                });
              try {
                this.isInitialized();
              } catch (e) {
                throw (b.setError(eF.no_internet_connection), e);
              }
              let v = this.getPendingAuthRequest(s);
              if (!v)
                throw (
                  (b.setError(
                    eF.authenticated_session_pending_request_not_found
                  ),
                  Error(`Could not find pending auth request with id ${s}`))
                );
              let w = v.transportType || eE.relay;
              w === eE.relay && (await this.confirmOnlineStateOrThrow());
              let _ = v.requester.publicKey,
                P = await this.client.core.crypto.generateKeyPair(),
                S = (0, ec.YmJ)(_),
                I = { type: ec.rVF, receiverPublicKey: _, senderPublicKey: P },
                A = [],
                R = [];
              for (let e of p) {
                if (
                  !(await (0, ec.c4l)({
                    cacao: e,
                    projectId: this.client.core.projectId,
                  }))
                ) {
                  b.setError(eF.invalid_cacao);
                  let e = (0, ec.D6H)(
                    "SESSION_SETTLEMENT_FAILED",
                    "Signature verification failed"
                  );
                  throw (
                    (await this.sendError({
                      id: s,
                      topic: S,
                      error: e,
                      encodeOpts: I,
                    }),
                    Error(e.message))
                  );
                }
                b.addTrace(e$.cacaos_verified);
                let { p: r } = e,
                  p = (0, ec.hA9)(r.resources),
                  v = [(0, ec.DJo)(r.iss)],
                  w = (0, ec.NmC)(r.iss);
                if (p) {
                  let e = (0, ec.Y31)(p),
                    r = (0, ec.ouN)(p);
                  A.push(...e), v.push(...r);
                }
                for (let e of v) R.push(`${e}:${w}`);
              }
              let C = await this.client.core.crypto.generateSharedKey(P, _);
              if (
                (b.addTrace(e$.create_authenticated_session_topic),
                A?.length > 0)
              ) {
                (r = {
                  topic: C,
                  acknowledged: !0,
                  self: { publicKey: P, metadata: this.client.metadata },
                  peer: { publicKey: _, metadata: v.requester.metadata },
                  controller: _,
                  expiry: (0, ec.gn4)(t9),
                  authentication: p,
                  requiredNamespaces: {},
                  optionalNamespaces: {},
                  relay: { protocol: "irn" },
                  pairingTopic: v.pairingTopic,
                  namespaces: (0, ec.E12)([...new Set(A)], [...new Set(R)]),
                  transportType: w,
                }),
                  b.addTrace(e$.subscribing_authenticated_session_topic);
                try {
                  await this.client.core.relayer.subscribe(C, {
                    transportType: w,
                  });
                } catch (e) {
                  throw (
                    (b.setError(
                      eF.subscribe_authenticated_session_topic_failure
                    ),
                    e)
                  );
                }
                b.addTrace(e$.subscribe_authenticated_session_topic_success),
                  await this.client.session.set(C, r),
                  b.addTrace(e$.store_authenticated_session),
                  await this.client.core.pairing.updateMetadata({
                    topic: v.pairingTopic,
                    metadata: v.requester.metadata,
                  });
              }
              b.addTrace(e$.publishing_authenticated_session_approve);
              try {
                await this.sendResult({
                  topic: S,
                  id: s,
                  result: {
                    cacaos: p,
                    responder: { publicKey: P, metadata: this.client.metadata },
                  },
                  encodeOpts: I,
                  throwOnFailedPublish: !0,
                  appLink: this.getAppLinkIfEnabled(v.requester.metadata, w),
                });
              } catch (e) {
                throw (
                  (b.setError(eF.authenticated_session_approve_publish_failure),
                  e)
                );
              }
              return (
                await this.client.auth.requests.delete(s, {
                  message: "fulfilled",
                  code: 0,
                }),
                await this.client.core.pairing.activate({
                  topic: v.pairingTopic,
                }),
                this.client.core.eventClient.deleteEvent({
                  eventId: b.eventId,
                }),
                { session: r }
              );
            }),
            (this.rejectSessionAuthenticate = async (e) => {
              this.isInitialized();
              let { id: r, reason: s } = e,
                p = this.getPendingAuthRequest(r);
              if (!p)
                throw Error(`Could not find pending auth request with id ${r}`);
              p.transportType === eE.relay &&
                (await this.confirmOnlineStateOrThrow());
              let b = p.requester.publicKey,
                v = await this.client.core.crypto.generateKeyPair(),
                w = (0, ec.YmJ)(b),
                _ = { type: ec.rVF, receiverPublicKey: b, senderPublicKey: v };
              await this.sendError({
                id: r,
                topic: w,
                error: s,
                encodeOpts: _,
                rpcOpts: t7.wc_sessionAuthenticate.reject,
                appLink: this.getAppLinkIfEnabled(
                  p.requester.metadata,
                  p.transportType
                ),
              }),
                await this.client.auth.requests.delete(r, {
                  message: "rejected",
                  code: 0,
                }),
                await this.client.proposal.delete(
                  r,
                  (0, ec.D6H)("USER_DISCONNECTED")
                );
            }),
            (this.formatAuthMessage = (e) => {
              this.isInitialized();
              let { request: r, iss: s } = e;
              return (0, ec.wvx)(r, s);
            }),
            (this.processRelayMessageCache = () => {
              setTimeout(async () => {
                if (0 !== this.relayMessageCache.length)
                  for (; this.relayMessageCache.length > 0; )
                    try {
                      let e = this.relayMessageCache.shift();
                      e && (await this.onRelayMessage(e));
                    } catch (e) {
                      this.client.logger.error(e);
                    }
              }, 50);
            }),
            (this.cleanupDuplicatePairings = async (e) => {
              if (e.pairingTopic)
                try {
                  let r = this.client.core.pairing.pairings.get(e.pairingTopic),
                    s = this.client.core.pairing.pairings
                      .getAll()
                      .filter((s) => {
                        var p, b;
                        return (
                          (null == (p = s.peerMetadata) ? void 0 : p.url) &&
                          (null == (b = s.peerMetadata) ? void 0 : b.url) ===
                            e.peer.metadata.url &&
                          s.topic &&
                          s.topic !== r.topic
                        );
                      });
                  if (0 === s.length) return;
                  this.client.logger.info(
                    `Cleaning up ${s.length} duplicate pairing(s)`
                  ),
                    await Promise.all(
                      s.map((e) =>
                        this.client.core.pairing.disconnect({ topic: e.topic })
                      )
                    ),
                    this.client.logger.info(
                      "Duplicate pairings clean up finished"
                    );
                } catch (e) {
                  this.client.logger.error(e);
                }
            }),
            (this.deleteSession = async (e) => {
              var r;
              let {
                  topic: s,
                  expirerHasDeleted: p = !1,
                  emitEvent: b = !0,
                  id: v = 0,
                } = e,
                { self: w } = this.client.session.get(s);
              await this.client.core.relayer.unsubscribe(s),
                await this.client.session.delete(
                  s,
                  (0, ec.D6H)("USER_DISCONNECTED")
                ),
                this.addToRecentlyDeleted(s, "session"),
                this.client.core.crypto.keychain.has(w.publicKey) &&
                  (await this.client.core.crypto.deleteKeyPair(w.publicKey)),
                this.client.core.crypto.keychain.has(s) &&
                  (await this.client.core.crypto.deleteSymKey(s)),
                p || this.client.core.expirer.del(s),
                this.client.core.storage
                  .removeItem(t3)
                  .catch((e) => this.client.logger.warn(e)),
                this.getPendingSessionRequests().forEach((e) => {
                  e.topic === s &&
                    this.deletePendingSessionRequest(
                      e.id,
                      (0, ec.D6H)("USER_DISCONNECTED")
                    );
                }),
                s ===
                  (null == (r = this.sessionRequestQueue.queue[0])
                    ? void 0
                    : r.topic) && (this.sessionRequestQueue.state = is.idle),
                b &&
                  this.client.events.emit("session_delete", {
                    id: v,
                    topic: s,
                  });
            }),
            (this.deleteProposal = async (e, r) => {
              if (r)
                try {
                  let r = this.client.proposal.get(e),
                    s = this.client.core.eventClient.getEvent({
                      topic: r.pairingTopic,
                    });
                  s?.setError(ej.proposal_expired);
                } catch {}
              await Promise.all([
                this.client.proposal.delete(
                  e,
                  (0, ec.D6H)("USER_DISCONNECTED")
                ),
                r ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, "proposal");
            }),
            (this.deletePendingSessionRequest = async (e, r, s = !1) => {
              await Promise.all([
                this.client.pendingRequest.delete(e, r),
                s ? Promise.resolve() : this.client.core.expirer.del(e),
              ]),
                this.addToRecentlyDeleted(e, "request"),
                (this.sessionRequestQueue.queue =
                  this.sessionRequestQueue.queue.filter((r) => r.id !== e)),
                s &&
                  ((this.sessionRequestQueue.state = is.idle),
                  this.client.events.emit("session_request_expire", { id: e }));
            }),
            (this.deletePendingAuthRequest = async (e, r, s = !1) => {
              await Promise.all([
                this.client.auth.requests.delete(e, r),
                s ? Promise.resolve() : this.client.core.expirer.del(e),
              ]);
            }),
            (this.setExpiry = async (e, r) => {
              this.client.session.keys.includes(e) &&
                (this.client.core.expirer.set(e, r),
                await this.client.session.update(e, { expiry: r }));
            }),
            (this.setProposal = async (e, r) => {
              this.client.core.expirer.set(
                e,
                (0, ec.gn4)(t7.wc_sessionPropose.req.ttl)
              ),
                await this.client.proposal.set(e, r);
            }),
            (this.setAuthRequest = async (e, r) => {
              let {
                request: s,
                pairingTopic: p,
                transportType: b = eE.relay,
              } = r;
              this.client.core.expirer.set(e, s.expiryTimestamp),
                await this.client.auth.requests.set(e, {
                  authPayload: s.authPayload,
                  requester: s.requester,
                  expiryTimestamp: s.expiryTimestamp,
                  id: e,
                  pairingTopic: p,
                  verifyContext: s.verifyContext,
                  transportType: b,
                });
            }),
            (this.setPendingSessionRequest = async (e) => {
              let { id: r, topic: s, params: p, verifyContext: b } = e,
                v =
                  p.request.expiryTimestamp ||
                  (0, ec.gn4)(t7.wc_sessionRequest.req.ttl);
              this.client.core.expirer.set(r, v),
                await this.client.pendingRequest.set(r, {
                  id: r,
                  topic: s,
                  params: p,
                  verifyContext: b,
                });
            }),
            (this.sendRequest = async (e) => {
              let r, p;
              let {
                  topic: b,
                  method: v,
                  params: w,
                  expiry: _,
                  relayRpcId: P,
                  clientRpcId: S,
                  throwOnFailedPublish: I,
                  appLink: A,
                } = e,
                R = (0, eh.formatJsonRpcRequest)(v, w, S),
                C = !!A;
              try {
                let e = C ? ec.zl_ : ec.$dT;
                r = await this.client.core.crypto.encode(b, R, { encoding: e });
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendRequest() -> core.crypto.encode() for topic ${b} failed`
                  ),
                  e)
                );
              }
              if (io.includes(v)) {
                let e = (0, ec.rjm)(JSON.stringify(R)),
                  s = (0, ec.rjm)(r);
                p = await this.client.core.verify.register({
                  id: s,
                  decryptedId: e,
                });
              }
              let B = t7[v].req;
              if (
                ((B.attestation = p),
                _ && (B.ttl = _),
                P && (B.id = P),
                this.client.core.history.set(b, R),
                C)
              ) {
                let e = (0, ec.L9d)(A, b, r);
                await s.g.Linking.openURL(e, this.client.name);
              } else {
                let e = t7[v].req;
                _ && (e.ttl = _),
                  P && (e.id = P),
                  I
                    ? ((e.internal = D(dist_index_es_I({}, e.internal), {
                        throwOnFailedPublish: !0,
                      })),
                      await this.client.core.relayer.publish(b, r, e))
                    : this.client.core.relayer
                        .publish(b, r, e)
                        .catch((e) => this.client.logger.error(e));
              }
              return R.id;
            }),
            (this.sendResult = async (e) => {
              let r, p;
              let {
                  id: b,
                  topic: v,
                  result: w,
                  throwOnFailedPublish: _,
                  encodeOpts: P,
                  appLink: S,
                } = e,
                I = (0, eh.formatJsonRpcResult)(b, w),
                A = S && "u" > typeof (null == s.g ? void 0 : s.g.Linking);
              try {
                let e = A ? ec.zl_ : ec.$dT;
                r = await this.client.core.crypto.encode(
                  v,
                  I,
                  D(dist_index_es_I({}, P || {}), { encoding: e })
                );
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendResult() -> core.crypto.encode() for topic ${v} failed`
                  ),
                  e)
                );
              }
              try {
                p = await this.client.core.history.get(v, b);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `sendResult() -> history.get(${v}, ${b}) failed`
                  ),
                  e)
                );
              }
              if (A) {
                let e = (0, ec.L9d)(S, v, r);
                await s.g.Linking.openURL(e, this.client.name);
              } else {
                let e = t7[p.request.method].res;
                _
                  ? ((e.internal = D(dist_index_es_I({}, e.internal), {
                      throwOnFailedPublish: !0,
                    })),
                    await this.client.core.relayer.publish(v, r, e))
                  : this.client.core.relayer
                      .publish(v, r, e)
                      .catch((e) => this.client.logger.error(e));
              }
              await this.client.core.history.resolve(I);
            }),
            (this.sendError = async (e) => {
              let r, p;
              let {
                  id: b,
                  topic: v,
                  error: w,
                  encodeOpts: _,
                  rpcOpts: P,
                  appLink: S,
                } = e,
                I = (0, eh.formatJsonRpcError)(b, w),
                A = S && "u" > typeof (null == s.g ? void 0 : s.g.Linking);
              try {
                let e = A ? ec.zl_ : ec.$dT;
                r = await this.client.core.crypto.encode(
                  v,
                  I,
                  D(dist_index_es_I({}, _ || {}), { encoding: e })
                );
              } catch (e) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendError() -> core.crypto.encode() for topic ${v} failed`
                  ),
                  e)
                );
              }
              try {
                p = await this.client.core.history.get(v, b);
              } catch (e) {
                throw (
                  (this.client.logger.error(
                    `sendError() -> history.get(${v}, ${b}) failed`
                  ),
                  e)
                );
              }
              if (A) {
                let e = (0, ec.L9d)(S, v, r);
                await s.g.Linking.openURL(e, this.client.name);
              } else {
                let e = P || t7[p.request.method].res;
                this.client.core.relayer.publish(v, r, e);
              }
              await this.client.core.history.resolve(I);
            }),
            (this.cleanup = async () => {
              let e = [],
                r = [];
              this.client.session.getAll().forEach((r) => {
                let s = !1;
                (0, ec.BwD)(r.expiry) && (s = !0),
                  this.client.core.crypto.keychain.has(r.topic) || (s = !0),
                  s && e.push(r.topic);
              }),
                this.client.proposal.getAll().forEach((e) => {
                  (0, ec.BwD)(e.expiryTimestamp) && r.push(e.id);
                }),
                await Promise.all([
                  ...e.map((e) => this.deleteSession({ topic: e })),
                  ...r.map((e) => this.deleteProposal(e)),
                ]);
            }),
            (this.onRelayEventRequest = async (e) => {
              this.requestQueue.queue.push(e),
                await this.processRequestsQueue();
            }),
            (this.processRequestsQueue = async () => {
              if (this.requestQueue.state === is.active) {
                this.client.logger.info(
                  "Request queue already active, skipping..."
                );
                return;
              }
              for (
                this.client.logger.info(
                  `Request queue starting with ${this.requestQueue.queue.length} requests`
                );
                this.requestQueue.queue.length > 0;

              ) {
                this.requestQueue.state = is.active;
                let e = this.requestQueue.queue.shift();
                if (e)
                  try {
                    await this.processRequest(e);
                  } catch (e) {
                    this.client.logger.warn(e);
                  }
              }
              this.requestQueue.state = is.idle;
            }),
            (this.processRequest = async (e) => {
              let {
                  topic: r,
                  payload: s,
                  attestation: p,
                  transportType: b,
                  encryptedId: v,
                } = e,
                w = s.method;
              if (
                !this.shouldIgnorePairingRequest({ topic: r, requestMethod: w })
              )
                switch (w) {
                  case "wc_sessionPropose":
                    return await this.onSessionProposeRequest({
                      topic: r,
                      payload: s,
                      attestation: p,
                      encryptedId: v,
                    });
                  case "wc_sessionSettle":
                    return await this.onSessionSettleRequest(r, s);
                  case "wc_sessionUpdate":
                    return await this.onSessionUpdateRequest(r, s);
                  case "wc_sessionExtend":
                    return await this.onSessionExtendRequest(r, s);
                  case "wc_sessionPing":
                    return await this.onSessionPingRequest(r, s);
                  case "wc_sessionDelete":
                    return await this.onSessionDeleteRequest(r, s);
                  case "wc_sessionRequest":
                    return await this.onSessionRequest({
                      topic: r,
                      payload: s,
                      attestation: p,
                      encryptedId: v,
                      transportType: b,
                    });
                  case "wc_sessionEvent":
                    return await this.onSessionEventRequest(r, s);
                  case "wc_sessionAuthenticate":
                    return await this.onSessionAuthenticateRequest({
                      topic: r,
                      payload: s,
                      attestation: p,
                      encryptedId: v,
                      transportType: b,
                    });
                  default:
                    return this.client.logger.info(
                      `Unsupported request method ${w}`
                    );
                }
            }),
            (this.onRelayEventResponse = async (e) => {
              let { topic: r, payload: s, transportType: p } = e,
                b = (await this.client.core.history.get(r, s.id)).request
                  .method;
              switch (b) {
                case "wc_sessionPropose":
                  return this.onSessionProposeResponse(r, s, p);
                case "wc_sessionSettle":
                  return this.onSessionSettleResponse(r, s);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateResponse(r, s);
                case "wc_sessionExtend":
                  return this.onSessionExtendResponse(r, s);
                case "wc_sessionPing":
                  return this.onSessionPingResponse(r, s);
                case "wc_sessionRequest":
                  return this.onSessionRequestResponse(r, s);
                case "wc_sessionAuthenticate":
                  return this.onSessionAuthenticateResponse(r, s);
                default:
                  return this.client.logger.info(
                    `Unsupported response method ${b}`
                  );
              }
            }),
            (this.onRelayEventUnknownPayload = (e) => {
              let { topic: r } = e,
                { message: s } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `Decoded payload on topic ${r} is not identifiable as a JSON-RPC request or a response.`
                );
              throw Error(s);
            }),
            (this.shouldIgnorePairingRequest = (e) => {
              let { topic: r, requestMethod: s } = e,
                p = this.expectedPairingMethodMap.get(r);
              return (
                !(!p || p.includes(s)) &&
                !!(
                  p.includes("wc_sessionAuthenticate") &&
                  this.client.events.listenerCount("session_authenticate") > 0
                )
              );
            }),
            (this.onSessionProposeRequest = async (e) => {
              let { topic: r, payload: s, attestation: p, encryptedId: b } = e,
                { params: v, id: w } = s;
              try {
                let e = this.client.core.eventClient.getEvent({ topic: r });
                this.isValidConnect(dist_index_es_I({}, s.params));
                let _ =
                    v.expiryTimestamp ||
                    (0, ec.gn4)(t7.wc_sessionPropose.req.ttl),
                  P = dist_index_es_I(
                    { id: w, pairingTopic: r, expiryTimestamp: _ },
                    v
                  );
                await this.setProposal(w, P);
                let S = await this.getVerifyContext({
                  attestationId: p,
                  hash: (0, ec.rjm)(JSON.stringify(s)),
                  encryptedId: b,
                  metadata: P.proposer.metadata,
                });
                0 === this.client.events.listenerCount("session_proposal") &&
                  (console.warn("No listener for session_proposal event"),
                  e?.setError(ez.proposal_listener_not_found)),
                  e?.addTrace(eD.emit_session_proposal),
                  this.client.events.emit("session_proposal", {
                    id: w,
                    params: P,
                    verifyContext: S,
                  });
              } catch (e) {
                await this.sendError({
                  id: w,
                  topic: r,
                  error: e,
                  rpcOpts: t7.wc_sessionPropose.autoReject,
                }),
                  this.client.logger.error(e);
              }
            }),
            (this.onSessionProposeResponse = async (e, r, s) => {
              let { id: p } = r;
              if ((0, eh.isJsonRpcResult)(r)) {
                let { result: b } = r;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  result: b,
                });
                let v = this.client.proposal.get(p);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  proposal: v,
                });
                let w = v.proposer.publicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  selfPublicKey: w,
                });
                let _ = b.responderPublicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  peerPublicKey: _,
                });
                let P = await this.client.core.crypto.generateSharedKey(w, _);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  sessionTopic: P,
                });
                let S = await this.client.core.relayer.subscribe(P, {
                  transportType: s,
                });
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  subscriptionId: S,
                }),
                  await this.client.core.pairing.activate({ topic: e });
              } else if ((0, eh.isJsonRpcError)(r)) {
                await this.client.proposal.delete(
                  p,
                  (0, ec.D6H)("USER_DISCONNECTED")
                );
                let e = (0, ec.E0T)("session_connect");
                if (0 === this.events.listenerCount(e))
                  throw Error(`emitting ${e} without any listeners, 954`);
                this.events.emit((0, ec.E0T)("session_connect"), {
                  error: r.error,
                });
              }
            }),
            (this.onSessionSettleRequest = async (e, r) => {
              let { id: s, params: p } = r;
              try {
                this.isValidSessionSettleRequest(p);
                let {
                    relay: s,
                    controller: b,
                    expiry: v,
                    namespaces: w,
                    sessionProperties: _,
                    sessionConfig: P,
                  } = r.params,
                  S = D(
                    dist_index_es_I(
                      dist_index_es_I(
                        {
                          topic: e,
                          relay: s,
                          expiry: v,
                          namespaces: w,
                          acknowledged: !0,
                          pairingTopic: "",
                          requiredNamespaces: {},
                          optionalNamespaces: {},
                          controller: b.publicKey,
                          self: {
                            publicKey: "",
                            metadata: this.client.metadata,
                          },
                          peer: {
                            publicKey: b.publicKey,
                            metadata: b.metadata,
                          },
                        },
                        _ && { sessionProperties: _ }
                      ),
                      P && { sessionConfig: P }
                    ),
                    { transportType: eE.relay }
                  ),
                  I = (0, ec.E0T)("session_connect");
                if (0 === this.events.listenerCount(I))
                  throw Error(`emitting ${I} without any listeners 997`);
                this.events.emit((0, ec.E0T)("session_connect"), {
                  session: S,
                }),
                  await this.sendResult({
                    id: r.id,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  });
              } catch (r) {
                await this.sendError({ id: s, topic: e, error: r }),
                  this.client.logger.error(r);
              }
            }),
            (this.onSessionSettleResponse = async (e, r) => {
              let { id: s } = r;
              (0, eh.isJsonRpcResult)(r)
                ? (await this.client.session.update(e, { acknowledged: !0 }),
                  this.events.emit((0, ec.E0T)("session_approve", s), {}))
                : (0, eh.isJsonRpcError)(r) &&
                  (await this.client.session.delete(
                    e,
                    (0, ec.D6H)("USER_DISCONNECTED")
                  ),
                  this.events.emit((0, ec.E0T)("session_approve", s), {
                    error: r.error,
                  }));
            }),
            (this.onSessionUpdateRequest = async (e, r) => {
              let { params: s, id: p } = r;
              try {
                let r = `${e}_session_update`,
                  b = ec.O6B.get(r);
                if (b && this.isRequestOutOfSync(b, p)) {
                  this.client.logger.info(
                    `Discarding out of sync request - ${p}`
                  ),
                    this.sendError({
                      id: p,
                      topic: e,
                      error: (0, ec.D6H)("INVALID_UPDATE_REQUEST"),
                    });
                  return;
                }
                this.isValidUpdate(dist_index_es_I({ topic: e }, s));
                try {
                  ec.O6B.set(r, p),
                    await this.client.session.update(e, {
                      namespaces: s.namespaces,
                    }),
                    await this.sendResult({
                      id: p,
                      topic: e,
                      result: !0,
                      throwOnFailedPublish: !0,
                    });
                } catch (e) {
                  throw (ec.O6B.delete(r), e);
                }
                this.client.events.emit("session_update", {
                  id: p,
                  topic: e,
                  params: s,
                });
              } catch (r) {
                await this.sendError({ id: p, topic: e, error: r }),
                  this.client.logger.error(r);
              }
            }),
            (this.isRequestOutOfSync = (e, r) =>
              parseInt(r.toString().slice(0, -3)) <=
              parseInt(e.toString().slice(0, -3))),
            (this.onSessionUpdateResponse = (e, r) => {
              let { id: s } = r,
                p = (0, ec.E0T)("session_update", s);
              if (0 === this.events.listenerCount(p))
                throw Error(`emitting ${p} without any listeners`);
              (0, eh.isJsonRpcResult)(r)
                ? this.events.emit((0, ec.E0T)("session_update", s), {})
                : (0, eh.isJsonRpcError)(r) &&
                  this.events.emit((0, ec.E0T)("session_update", s), {
                    error: r.error,
                  });
            }),
            (this.onSessionExtendRequest = async (e, r) => {
              let { id: s } = r;
              try {
                this.isValidExtend({ topic: e }),
                  await this.setExpiry(e, (0, ec.gn4)(t9)),
                  await this.sendResult({
                    id: s,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  }),
                  this.client.events.emit("session_extend", {
                    id: s,
                    topic: e,
                  });
              } catch (r) {
                await this.sendError({ id: s, topic: e, error: r }),
                  this.client.logger.error(r);
              }
            }),
            (this.onSessionExtendResponse = (e, r) => {
              let { id: s } = r,
                p = (0, ec.E0T)("session_extend", s);
              if (0 === this.events.listenerCount(p))
                throw Error(`emitting ${p} without any listeners`);
              (0, eh.isJsonRpcResult)(r)
                ? this.events.emit((0, ec.E0T)("session_extend", s), {})
                : (0, eh.isJsonRpcError)(r) &&
                  this.events.emit((0, ec.E0T)("session_extend", s), {
                    error: r.error,
                  });
            }),
            (this.onSessionPingRequest = async (e, r) => {
              let { id: s } = r;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult({
                    id: s,
                    topic: e,
                    result: !0,
                    throwOnFailedPublish: !0,
                  }),
                  this.client.events.emit("session_ping", { id: s, topic: e });
              } catch (r) {
                await this.sendError({ id: s, topic: e, error: r }),
                  this.client.logger.error(r);
              }
            }),
            (this.onSessionPingResponse = (e, r) => {
              let { id: s } = r,
                p = (0, ec.E0T)("session_ping", s);
              if (0 === this.events.listenerCount(p))
                throw Error(`emitting ${p} without any listeners`);
              setTimeout(() => {
                (0, eh.isJsonRpcResult)(r)
                  ? this.events.emit((0, ec.E0T)("session_ping", s), {})
                  : (0, eh.isJsonRpcError)(r) &&
                    this.events.emit((0, ec.E0T)("session_ping", s), {
                      error: r.error,
                    });
              }, 500);
            }),
            (this.onSessionDeleteRequest = async (e, r) => {
              let { id: s } = r;
              try {
                this.isValidDisconnect({ topic: e, reason: r.params }),
                  Promise.all([
                    new Promise((r) => {
                      this.client.core.relayer.once(eP.publish, async () => {
                        r(await this.deleteSession({ topic: e, id: s }));
                      });
                    }),
                    this.sendResult({
                      id: s,
                      topic: e,
                      result: !0,
                      throwOnFailedPublish: !0,
                    }),
                    this.cleanupPendingSentRequestsForTopic({
                      topic: e,
                      error: (0, ec.D6H)("USER_DISCONNECTED"),
                    }),
                  ]).catch((e) => this.client.logger.error(e));
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            (this.onSessionRequest = async (e) => {
              var r, s, p;
              let {
                  topic: b,
                  payload: v,
                  attestation: w,
                  encryptedId: _,
                  transportType: P,
                } = e,
                { id: S, params: I } = v;
              try {
                await this.isValidRequest(dist_index_es_I({ topic: b }, I));
                let e = this.client.session.get(b),
                  v = await this.getVerifyContext({
                    attestationId: w,
                    hash: (0, ec.rjm)(
                      JSON.stringify(
                        (0, eh.formatJsonRpcRequest)("wc_sessionRequest", I, S)
                      )
                    ),
                    encryptedId: _,
                    metadata: e.peer.metadata,
                    transportType: P,
                  }),
                  A = { id: S, topic: b, params: I, verifyContext: v };
                await this.setPendingSessionRequest(A),
                  P === eE.link_mode &&
                    null != (r = e.peer.metadata.redirect) &&
                    r.universal &&
                    this.client.core.addLinkModeSupportedApp(
                      null == (s = e.peer.metadata.redirect)
                        ? void 0
                        : s.universal
                    ),
                  null != (p = this.client.signConfig) && p.disableRequestQueue
                    ? this.emitSessionRequest(A)
                    : (this.addSessionRequestToSessionRequestQueue(A),
                      this.processSessionRequestQueue());
              } catch (e) {
                await this.sendError({ id: S, topic: b, error: e }),
                  this.client.logger.error(e);
              }
            }),
            (this.onSessionRequestResponse = (e, r) => {
              let { id: s } = r,
                p = (0, ec.E0T)("session_request", s);
              if (0 === this.events.listenerCount(p))
                throw Error(`emitting ${p} without any listeners`);
              (0, eh.isJsonRpcResult)(r)
                ? this.events.emit((0, ec.E0T)("session_request", s), {
                    result: r.result,
                  })
                : (0, eh.isJsonRpcError)(r) &&
                  this.events.emit((0, ec.E0T)("session_request", s), {
                    error: r.error,
                  });
            }),
            (this.onSessionEventRequest = async (e, r) => {
              let { id: s, params: p } = r;
              try {
                let r = `${e}_session_event_${p.event.name}`,
                  b = ec.O6B.get(r);
                if (b && this.isRequestOutOfSync(b, s)) {
                  this.client.logger.info(
                    `Discarding out of sync request - ${s}`
                  );
                  return;
                }
                this.isValidEmit(dist_index_es_I({ topic: e }, p)),
                  this.client.events.emit("session_event", {
                    id: s,
                    topic: e,
                    params: p,
                  }),
                  ec.O6B.set(r, s);
              } catch (r) {
                await this.sendError({ id: s, topic: e, error: r }),
                  this.client.logger.error(r);
              }
            }),
            (this.onSessionAuthenticateResponse = (e, r) => {
              let { id: s } = r;
              this.client.logger.trace({
                type: "method",
                method: "onSessionAuthenticateResponse",
                topic: e,
                payload: r,
              }),
                (0, eh.isJsonRpcResult)(r)
                  ? this.events.emit((0, ec.E0T)("session_request", s), {
                      result: r.result,
                    })
                  : (0, eh.isJsonRpcError)(r) &&
                    this.events.emit((0, ec.E0T)("session_request", s), {
                      error: r.error,
                    });
            }),
            (this.onSessionAuthenticateRequest = async (e) => {
              var r;
              let {
                topic: s,
                payload: p,
                attestation: b,
                encryptedId: v,
                transportType: w,
              } = e;
              try {
                let {
                    requester: e,
                    authPayload: _,
                    expiryTimestamp: P,
                  } = p.params,
                  S = await this.getVerifyContext({
                    attestationId: b,
                    hash: (0, ec.rjm)(JSON.stringify(p)),
                    encryptedId: v,
                    metadata: e.metadata,
                    transportType: w,
                  }),
                  I = {
                    requester: e,
                    pairingTopic: s,
                    id: p.id,
                    authPayload: _,
                    verifyContext: S,
                    expiryTimestamp: P,
                  };
                await this.setAuthRequest(p.id, {
                  request: I,
                  pairingTopic: s,
                  transportType: w,
                }),
                  w === eE.link_mode &&
                    null != (r = e.metadata.redirect) &&
                    r.universal &&
                    this.client.core.addLinkModeSupportedApp(
                      e.metadata.redirect.universal
                    ),
                  this.client.events.emit("session_authenticate", {
                    topic: s,
                    params: p.params,
                    id: p.id,
                    verifyContext: S,
                  });
              } catch (_) {
                this.client.logger.error(_);
                let e = p.params.requester.publicKey,
                  r = await this.client.core.crypto.generateKeyPair(),
                  b = this.getAppLinkIfEnabled(p.params.requester.metadata, w),
                  v = {
                    type: ec.rVF,
                    receiverPublicKey: e,
                    senderPublicKey: r,
                  };
                await this.sendError({
                  id: p.id,
                  topic: s,
                  error: _,
                  encodeOpts: v,
                  rpcOpts: t7.wc_sessionAuthenticate.autoReject,
                  appLink: b,
                });
              }
            }),
            (this.addSessionRequestToSessionRequestQueue = (e) => {
              this.sessionRequestQueue.queue.push(e);
            }),
            (this.cleanupAfterResponse = (e) => {
              this.deletePendingSessionRequest(e.response.id, {
                message: "fulfilled",
                code: 0,
              }),
                setTimeout(() => {
                  (this.sessionRequestQueue.state = is.idle),
                    this.processSessionRequestQueue();
                }, (0, w.toMiliseconds)(this.requestQueueDelay));
            }),
            (this.cleanupPendingSentRequestsForTopic = ({
              topic: e,
              error: r,
            }) => {
              let s = this.client.core.history.pending;
              s.length > 0 &&
                s
                  .filter(
                    (r) =>
                      r.topic === e && "wc_sessionRequest" === r.request.method
                  )
                  .forEach((e) => {
                    let s = e.request.id,
                      p = (0, ec.E0T)("session_request", s);
                    if (0 === this.events.listenerCount(p))
                      throw Error(`emitting ${p} without any listeners`);
                    this.events.emit(
                      (0, ec.E0T)("session_request", e.request.id),
                      { error: r }
                    );
                  });
            }),
            (this.processSessionRequestQueue = () => {
              if (this.sessionRequestQueue.state === is.active) {
                this.client.logger.info(
                  "session request queue is already active."
                );
                return;
              }
              let e = this.sessionRequestQueue.queue[0];
              if (!e) {
                this.client.logger.info("session request queue is empty.");
                return;
              }
              try {
                (this.sessionRequestQueue.state = is.active),
                  this.emitSessionRequest(e);
              } catch (e) {
                this.client.logger.error(e);
              }
            }),
            (this.emitSessionRequest = (e) => {
              this.client.events.emit("session_request", e);
            }),
            (this.onPairingCreated = (e) => {
              if (
                (e.methods &&
                  this.expectedPairingMethodMap.set(e.topic, e.methods),
                e.active)
              )
                return;
              let r = this.client.proposal
                .getAll()
                .find((r) => r.pairingTopic === e.topic);
              r &&
                this.onSessionProposeRequest({
                  topic: e.topic,
                  payload: (0, eh.formatJsonRpcRequest)(
                    "wc_sessionPropose",
                    {
                      requiredNamespaces: r.requiredNamespaces,
                      optionalNamespaces: r.optionalNamespaces,
                      relays: r.relays,
                      proposer: r.proposer,
                      sessionProperties: r.sessionProperties,
                    },
                    r.id
                  ),
                });
            }),
            (this.isValidConnect = async (e) => {
              if (!(0, ec.EJd)(e)) {
                let { message: r } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `connect() params: ${JSON.stringify(e)}`
                );
                throw Error(r);
              }
              let {
                pairingTopic: r,
                requiredNamespaces: s,
                optionalNamespaces: p,
                sessionProperties: b,
                relays: v,
              } = e;
              if (
                ((0, ec.o8e)(r) || (await this.isValidPairingTopic(r)),
                !(0, ec.PMr)(v, !0))
              ) {
                let { message: e } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `connect() relays: ${v}`
                );
                throw Error(e);
              }
              (0, ec.o8e)(s) ||
                0 === (0, ec.L5o)(s) ||
                this.validateNamespaces(s, "requiredNamespaces"),
                (0, ec.o8e)(p) ||
                  0 === (0, ec.L5o)(p) ||
                  this.validateNamespaces(p, "optionalNamespaces"),
                (0, ec.o8e)(b) ||
                  this.validateSessionProps(b, "sessionProperties");
            }),
            (this.validateNamespaces = (e, r) => {
              let s = (0, ec.naP)(e, "connect()", r);
              if (s) throw Error(s.message);
            }),
            (this.isValidApprove = async (e) => {
              if (!(0, ec.EJd)(e))
                throw Error(
                  (0, ec.kCb)("MISSING_OR_INVALID", `approve() params: ${e}`)
                    .message
                );
              let {
                id: r,
                namespaces: s,
                relayProtocol: p,
                sessionProperties: b,
              } = e;
              this.checkRecentlyDeleted(r), await this.isValidProposalId(r);
              let v = this.client.proposal.get(r),
                w = (0, ec.ing)(s, "approve()");
              if (w) throw Error(w.message);
              let _ = (0, ec.rFo)(v.requiredNamespaces, s, "approve()");
              if (_) throw Error(_.message);
              if (!(0, ec.M_r)(p, !0)) {
                let { message: e } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `approve() relayProtocol: ${p}`
                );
                throw Error(e);
              }
              (0, ec.o8e)(b) ||
                this.validateSessionProps(b, "sessionProperties");
            }),
            (this.isValidReject = async (e) => {
              if (!(0, ec.EJd)(e)) {
                let { message: r } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `reject() params: ${e}`
                );
                throw Error(r);
              }
              let { id: r, reason: s } = e;
              if (
                (this.checkRecentlyDeleted(r),
                await this.isValidProposalId(r),
                !(0, ec.H4H)(s))
              ) {
                let { message: e } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `reject() reason: ${JSON.stringify(s)}`
                );
                throw Error(e);
              }
            }),
            (this.isValidSessionSettleRequest = (e) => {
              if (!(0, ec.EJd)(e)) {
                let { message: r } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `onSessionSettleRequest() params: ${e}`
                );
                throw Error(r);
              }
              let { relay: r, controller: s, namespaces: p, expiry: b } = e;
              if (!(0, ec.Z26)(r)) {
                let { message: e } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  "onSessionSettleRequest() relay protocol should be a string"
                );
                throw Error(e);
              }
              let v = (0, ec.DdM)(s, "onSessionSettleRequest()");
              if (v) throw Error(v.message);
              let w = (0, ec.ing)(p, "onSessionSettleRequest()");
              if (w) throw Error(w.message);
              if ((0, ec.BwD)(b)) {
                let { message: e } = (0, ec.kCb)(
                  "EXPIRED",
                  "onSessionSettleRequest()"
                );
                throw Error(e);
              }
            }),
            (this.isValidUpdate = async (e) => {
              if (!(0, ec.EJd)(e)) {
                let { message: r } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `update() params: ${e}`
                );
                throw Error(r);
              }
              let { topic: r, namespaces: s } = e;
              this.checkRecentlyDeleted(r), await this.isValidSessionTopic(r);
              let p = this.client.session.get(r),
                b = (0, ec.ing)(s, "update()");
              if (b) throw Error(b.message);
              let v = (0, ec.rFo)(p.requiredNamespaces, s, "update()");
              if (v) throw Error(v.message);
            }),
            (this.isValidExtend = async (e) => {
              if (!(0, ec.EJd)(e)) {
                let { message: r } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `extend() params: ${e}`
                );
                throw Error(r);
              }
              let { topic: r } = e;
              this.checkRecentlyDeleted(r), await this.isValidSessionTopic(r);
            }),
            (this.isValidRequest = async (e) => {
              if (!(0, ec.EJd)(e)) {
                let { message: r } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `request() params: ${e}`
                );
                throw Error(r);
              }
              let { topic: r, request: s, chainId: p, expiry: b } = e;
              this.checkRecentlyDeleted(r), await this.isValidSessionTopic(r);
              let { namespaces: v } = this.client.session.get(r);
              if (!(0, ec.p8o)(v, p)) {
                let { message: e } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `request() chainId: ${p}`
                );
                throw Error(e);
              }
              if (!(0, ec.hHR)(s)) {
                let { message: e } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `request() ${JSON.stringify(s)}`
                );
                throw Error(e);
              }
              if (!(0, ec.alS)(v, p, s.method)) {
                let { message: e } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `request() method: ${s.method}`
                );
                throw Error(e);
              }
              if (b && !(0, ec.ONw)(b, t5)) {
                let { message: e } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `request() expiry: ${b}. Expiry must be a number (in seconds) between ${t5.min} and ${t5.max}`
                );
                throw Error(e);
              }
            }),
            (this.isValidRespond = async (e) => {
              var r;
              if (!(0, ec.EJd)(e)) {
                let { message: r } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `respond() params: ${e}`
                );
                throw Error(r);
              }
              let { topic: s, response: p } = e;
              try {
                await this.isValidSessionTopic(s);
              } catch (s) {
                throw (
                  (null != (r = e?.response) &&
                    r.id &&
                    this.cleanupAfterResponse(e),
                  s)
                );
              }
              if (!(0, ec.JTI)(p)) {
                let { message: e } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `respond() response: ${JSON.stringify(p)}`
                );
                throw Error(e);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!(0, ec.EJd)(e)) {
                let { message: r } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `ping() params: ${e}`
                );
                throw Error(r);
              }
              let { topic: r } = e;
              await this.isValidSessionOrPairingTopic(r);
            }),
            (this.isValidEmit = async (e) => {
              if (!(0, ec.EJd)(e)) {
                let { message: r } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `emit() params: ${e}`
                );
                throw Error(r);
              }
              let { topic: r, event: s, chainId: p } = e;
              await this.isValidSessionTopic(r);
              let { namespaces: b } = this.client.session.get(r);
              if (!(0, ec.p8o)(b, p)) {
                let { message: e } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `emit() chainId: ${p}`
                );
                throw Error(e);
              }
              if (!(0, ec.nfW)(s)) {
                let { message: e } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(s)}`
                );
                throw Error(e);
              }
              if (!(0, ec.B95)(b, p, s.name)) {
                let { message: e } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(s)}`
                );
                throw Error(e);
              }
            }),
            (this.isValidDisconnect = async (e) => {
              if (!(0, ec.EJd)(e)) {
                let { message: r } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${e}`
                );
                throw Error(r);
              }
              let { topic: r } = e;
              await this.isValidSessionOrPairingTopic(r);
            }),
            (this.isValidAuthenticate = (e) => {
              let { chains: r, uri: s, domain: p, nonce: b } = e;
              if (!Array.isArray(r) || 0 === r.length)
                throw Error("chains is required and must be a non-empty array");
              if (!(0, ec.M_r)(s, !1)) throw Error("uri is required parameter");
              if (!(0, ec.M_r)(p, !1))
                throw Error("domain is required parameter");
              if (!(0, ec.M_r)(b, !1))
                throw Error("nonce is required parameter");
              if (
                [...new Set(r.map((e) => (0, ec.DQe)(e).namespace))].length > 1
              )
                throw Error(
                  "Multi-namespace requests are not supported. Please request single namespace only."
                );
              let { namespace: v } = (0, ec.DQe)(r[0]);
              if ("eip155" !== v)
                throw Error(
                  "Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains."
                );
            }),
            (this.getVerifyContext = async (e) => {
              let {
                  attestationId: r,
                  hash: s,
                  encryptedId: p,
                  metadata: b,
                  transportType: v,
                } = e,
                w = {
                  verified: {
                    verifyUrl: b.verifyUrl || eB,
                    validation: "UNKNOWN",
                    origin: b.url || "",
                  },
                };
              try {
                if (v === eE.link_mode) {
                  let e = this.getAppLinkIfEnabled(b, v);
                  return (
                    (w.verified.validation =
                      e && new URL(e).origin === new URL(b.url).origin
                        ? "VALID"
                        : "INVALID"),
                    w
                  );
                }
                let e = await this.client.core.verify.resolve({
                  attestationId: r,
                  hash: s,
                  encryptedId: p,
                  verifyUrl: b.verifyUrl,
                });
                e &&
                  ((w.verified.origin = e.origin),
                  (w.verified.isScam = e.isScam),
                  (w.verified.validation =
                    e.origin === new URL(b.url).origin ? "VALID" : "INVALID"));
              } catch (e) {
                this.client.logger.warn(e);
              }
              return (
                this.client.logger.debug(
                  `Verify context: ${JSON.stringify(w)}`
                ),
                w
              );
            }),
            (this.validateSessionProps = (e, r) => {
              Object.values(e).forEach((e) => {
                if (!(0, ec.M_r)(e, !1)) {
                  let { message: s } = (0, ec.kCb)(
                    "MISSING_OR_INVALID",
                    `${r} must be in Record<string, string> format. Received: ${JSON.stringify(
                      e
                    )}`
                  );
                  throw Error(s);
                }
              });
            }),
            (this.getPendingAuthRequest = (e) => {
              let r = this.client.auth.requests.get(e);
              return "object" == typeof r ? r : void 0;
            }),
            (this.addToRecentlyDeleted = (e, r) => {
              if (
                (this.recentlyDeletedMap.set(e, r),
                this.recentlyDeletedMap.size >= this.recentlyDeletedLimit)
              ) {
                let e = 0,
                  r = this.recentlyDeletedLimit / 2;
                for (let s of this.recentlyDeletedMap.keys()) {
                  if (e++ >= r) break;
                  this.recentlyDeletedMap.delete(s);
                }
              }
            }),
            (this.checkRecentlyDeleted = (e) => {
              let r = this.recentlyDeletedMap.get(e);
              if (r) {
                let { message: s } = (0, ec.kCb)(
                  "MISSING_OR_INVALID",
                  `Record was recently deleted - ${r}: ${e}`
                );
                throw Error(s);
              }
            }),
            (this.isLinkModeEnabled = (e, r) => {
              var p, b, v, w, _, P, S, I, A;
              return (
                !!e &&
                r === eE.link_mode &&
                (null ==
                (b = null == (p = this.client.metadata) ? void 0 : p.redirect)
                  ? void 0
                  : b.linkMode) === !0 &&
                (null ==
                (w = null == (v = this.client.metadata) ? void 0 : v.redirect)
                  ? void 0
                  : w.universal) !== void 0 &&
                (null ==
                (P = null == (_ = this.client.metadata) ? void 0 : _.redirect)
                  ? void 0
                  : P.universal) !== "" &&
                (null == (S = e?.redirect) ? void 0 : S.universal) !== void 0 &&
                (null == (I = e?.redirect) ? void 0 : I.universal) !== "" &&
                (null == (A = e?.redirect) ? void 0 : A.linkMode) === !0 &&
                this.client.core.linkModeSupportedApps.includes(
                  e.redirect.universal
                ) &&
                "u" > typeof (null == s.g ? void 0 : s.g.Linking)
              );
            }),
            (this.getAppLinkIfEnabled = (e, r) => {
              var s;
              return this.isLinkModeEnabled(e, r)
                ? null == (s = e?.redirect)
                  ? void 0
                  : s.universal
                : void 0;
            }),
            (this.handleLinkModeMessage = ({ url: e }) => {
              if (!e || !e.includes("wc_ev") || !e.includes("topic")) return;
              let r = (0, ec.waw)(e, "topic") || "",
                s = decodeURIComponent((0, ec.waw)(e, "wc_ev") || ""),
                p = this.client.session.keys.includes(r);
              p &&
                this.client.session.update(r, { transportType: eE.link_mode }),
                this.client.core.dispatchEnvelope({
                  topic: r,
                  message: s,
                  sessionExists: p,
                });
            }),
            (this.registerLinkModeListeners = async () => {
              var e;
              if (
                (0, ec.h9F)() ||
                ((0, ec.b$m)() &&
                  null != (e = this.client.metadata.redirect) &&
                  e.linkMode)
              ) {
                let e = null == s.g ? void 0 : s.g.Linking;
                if ("u" > typeof e) {
                  e.addEventListener(
                    "url",
                    this.handleLinkModeMessage,
                    this.client.name
                  );
                  let r = await e.getInitialURL();
                  r &&
                    setTimeout(() => {
                      this.handleLinkModeMessage({ url: r });
                    }, 50);
                }
              }
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: e } = (0, ec.kCb)("NOT_INITIALIZED", this.name);
            throw Error(e);
          }
        }
        async confirmOnlineStateOrThrow() {
          await this.client.core.relayer.confirmOnlineStateOrThrow();
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(eP.message, (e) => {
            !this.initialized || this.relayMessageCache.length > 0
              ? this.relayMessageCache.push(e)
              : this.onRelayMessage(e);
          });
        }
        async onRelayMessage(e) {
          let { topic: r, message: s, attestation: p, transportType: b } = e,
            { publicKey: v } = this.client.auth.authKeys.keys.includes(id)
              ? this.client.auth.authKeys.get(id)
              : { responseTopic: void 0, publicKey: void 0 },
            w = await this.client.core.crypto.decode(r, s, {
              receiverPublicKey: v,
              encoding: b === eE.link_mode ? ec.zl_ : ec.$dT,
            });
          try {
            (0, eh.isJsonRpcRequest)(w)
              ? (this.client.core.history.set(r, w),
                this.onRelayEventRequest({
                  topic: r,
                  payload: w,
                  attestation: p,
                  transportType: b,
                  encryptedId: (0, ec.rjm)(s),
                }))
              : (0, eh.isJsonRpcResponse)(w)
              ? (await this.client.core.history.resolve(w),
                await this.onRelayEventResponse({
                  topic: r,
                  payload: w,
                  transportType: b,
                }),
                this.client.core.history.delete(r, w.id))
              : this.onRelayEventUnknownPayload({
                  topic: r,
                  payload: w,
                  transportType: b,
                });
          } catch (e) {
            this.client.logger.error(e);
          }
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(eT.expired, async (e) => {
            let { topic: r, id: s } = (0, ec.iPz)(e.target);
            return s && this.client.pendingRequest.keys.includes(s)
              ? await this.deletePendingSessionRequest(
                  s,
                  (0, ec.kCb)("EXPIRED"),
                  !0
                )
              : s && this.client.auth.requests.keys.includes(s)
              ? await this.deletePendingAuthRequest(
                  s,
                  (0, ec.kCb)("EXPIRED"),
                  !0
                )
              : void (r
                  ? this.client.session.keys.includes(r) &&
                    (await this.deleteSession({
                      topic: r,
                      expirerHasDeleted: !0,
                    }),
                    this.client.events.emit("session_expire", { topic: r }))
                  : s &&
                    (await this.deleteProposal(s, !0),
                    this.client.events.emit("proposal_expire", { id: s })));
          });
        }
        registerPairingEvents() {
          this.client.core.pairing.events.on(eC.create, (e) =>
            this.onPairingCreated(e)
          ),
            this.client.core.pairing.events.on(eC.delete, (e) => {
              this.addToRecentlyDeleted(e.topic, "pairing");
            });
        }
        isValidPairingTopic(e) {
          if (!(0, ec.M_r)(e, !1)) {
            let { message: r } = (0, ec.kCb)(
              "MISSING_OR_INVALID",
              `pairing topic should be a string: ${e}`
            );
            throw Error(r);
          }
          if (!this.client.core.pairing.pairings.keys.includes(e)) {
            let { message: r } = (0, ec.kCb)(
              "NO_MATCHING_KEY",
              `pairing topic doesn't exist: ${e}`
            );
            throw Error(r);
          }
          if ((0, ec.BwD)(this.client.core.pairing.pairings.get(e).expiry)) {
            let { message: r } = (0, ec.kCb)("EXPIRED", `pairing topic: ${e}`);
            throw Error(r);
          }
        }
        async isValidSessionTopic(e) {
          if (!(0, ec.M_r)(e, !1)) {
            let { message: r } = (0, ec.kCb)(
              "MISSING_OR_INVALID",
              `session topic should be a string: ${e}`
            );
            throw Error(r);
          }
          if (
            (this.checkRecentlyDeleted(e),
            !this.client.session.keys.includes(e))
          ) {
            let { message: r } = (0, ec.kCb)(
              "NO_MATCHING_KEY",
              `session topic doesn't exist: ${e}`
            );
            throw Error(r);
          }
          if ((0, ec.BwD)(this.client.session.get(e).expiry)) {
            await this.deleteSession({ topic: e });
            let { message: r } = (0, ec.kCb)("EXPIRED", `session topic: ${e}`);
            throw Error(r);
          }
          if (!this.client.core.crypto.keychain.has(e)) {
            let { message: r } = (0, ec.kCb)(
              "MISSING_OR_INVALID",
              `session topic does not exist in keychain: ${e}`
            );
            throw (await this.deleteSession({ topic: e }), Error(r));
          }
        }
        async isValidSessionOrPairingTopic(e) {
          if (
            (this.checkRecentlyDeleted(e), this.client.session.keys.includes(e))
          )
            await this.isValidSessionTopic(e);
          else if (this.client.core.pairing.pairings.keys.includes(e))
            this.isValidPairingTopic(e);
          else if ((0, ec.M_r)(e, !1)) {
            let { message: r } = (0, ec.kCb)(
              "NO_MATCHING_KEY",
              `session or pairing topic doesn't exist: ${e}`
            );
            throw Error(r);
          } else {
            let { message: r } = (0, ec.kCb)(
              "MISSING_OR_INVALID",
              `session or pairing topic should be a string: ${e}`
            );
            throw Error(r);
          }
        }
        async isValidProposalId(e) {
          if (!(0, ec.Q01)(e)) {
            let { message: r } = (0, ec.kCb)(
              "MISSING_OR_INVALID",
              `proposal id should be a number: ${e}`
            );
            throw Error(r);
          }
          if (!this.client.proposal.keys.includes(e)) {
            let { message: r } = (0, ec.kCb)(
              "NO_MATCHING_KEY",
              `proposal id doesn't exist: ${e}`
            );
            throw Error(r);
          }
          if ((0, ec.BwD)(this.client.proposal.get(e).expiryTimestamp)) {
            await this.deleteProposal(e);
            let { message: r } = (0, ec.kCb)("EXPIRED", `proposal id: ${e}`);
            throw Error(r);
          }
        }
      };
      let index_es_Ss = class index_es_Ss extends ai {
        constructor(e, r) {
          super(e, r, "proposal", t2), (this.core = e), (this.logger = r);
        }
      };
      let index_es_yt = class index_es_yt extends ai {
        constructor(e, r) {
          super(e, r, "session", t2), (this.core = e), (this.logger = r);
        }
      };
      let index_es_Is = class index_es_Is extends ai {
        constructor(e, r) {
          super(e, r, "request", t2, (e) => e.id),
            (this.core = e),
            (this.logger = r);
        }
      };
      let index_es_fs = class index_es_fs extends ai {
        constructor(e, r) {
          super(e, r, "authKeys", ic, () => id),
            (this.core = e),
            (this.logger = r);
        }
      };
      let index_es_vs = class index_es_vs extends ai {
        constructor(e, r) {
          super(e, r, "pairingTopics", ic), (this.core = e), (this.logger = r);
        }
      };
      let index_es_qs = class index_es_qs extends ai {
        constructor(e, r) {
          super(e, r, "requests", ic, (e) => e.id),
            (this.core = e),
            (this.logger = r);
        }
      };
      let index_es_Ts = class index_es_Ts {
        constructor(e, r) {
          (this.core = e),
            (this.logger = r),
            (this.authKeys = new index_es_fs(this.core, this.logger)),
            (this.pairingTopics = new index_es_vs(this.core, this.logger)),
            (this.requests = new index_es_qs(this.core, this.logger));
        }
        async init() {
          await this.authKeys.init(),
            await this.pairingTopics.init(),
            await this.requests.init();
        }
      };
      let index_es_e = class index_es_e extends index_es_S {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = t8.name),
            (this.events = new p.EventEmitter()),
            (this.on = (e, r) => this.events.on(e, r)),
            (this.once = (e, r) => this.events.once(e, r)),
            (this.off = (e, r) => this.events.off(e, r)),
            (this.removeListener = (e, r) => this.events.removeListener(e, r)),
            (this.removeAllListeners = (e) =>
              this.events.removeAllListeners(e)),
            (this.connect = async (e) => {
              try {
                return await this.engine.connect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.pair = async (e) => {
              try {
                return await this.engine.pair(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.approve = async (e) => {
              try {
                return await this.engine.approve(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.reject = async (e) => {
              try {
                return await this.engine.reject(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.update = async (e) => {
              try {
                return await this.engine.update(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.extend = async (e) => {
              try {
                return await this.engine.extend(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.request = async (e) => {
              try {
                return await this.engine.request(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.respond = async (e) => {
              try {
                return await this.engine.respond(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.ping = async (e) => {
              try {
                return await this.engine.ping(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.emit = async (e) => {
              try {
                return await this.engine.emit(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.disconnect = async (e) => {
              try {
                return await this.engine.disconnect(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.find = (e) => {
              try {
                return this.engine.find(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.getPendingSessionRequests = () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.authenticate = async (e, r) => {
              try {
                return await this.engine.authenticate(e, r);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.formatAuthMessage = (e) => {
              try {
                return this.engine.formatAuthMessage(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.approveSessionAuthenticate = async (e) => {
              try {
                return await this.engine.approveSessionAuthenticate(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.rejectSessionAuthenticate = async (e) => {
              try {
                return await this.engine.rejectSessionAuthenticate(e);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.name = e?.name || t8.name),
            (this.metadata = e?.metadata || (0, ec.DaH)()),
            (this.signConfig = e?.signConfig);
          let r =
            "u" > typeof e?.logger && "string" != typeof e?.logger
              ? e.logger
              : R()(k({ level: e?.logger || t8.logger }));
          (this.core = e?.core || new ce(e)),
            (this.logger = E(r, this.name)),
            (this.session = new index_es_yt(this.core, this.logger)),
            (this.proposal = new index_es_Ss(this.core, this.logger)),
            (this.pendingRequest = new index_es_Is(this.core, this.logger)),
            (this.engine = new Rs(this)),
            (this.auth = new index_es_Ts(this.core, this.logger));
        }
        static async init(e) {
          let r = new index_es_e(e);
          return await r.initialize(), r;
        }
        get context() {
          return y(this.logger);
        }
        get pairing() {
          return this.core.pairing.pairings;
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.core.start(),
              await this.session.init(),
              await this.proposal.init(),
              await this.pendingRequest.init(),
              await this.auth.init(),
              await this.engine.init(),
              this.logger.info("SignClient Initialization Success"),
              this.engine.processRelayMessageCache();
          } catch (e) {
            throw (
              (this.logger.info("SignClient Initialization Failure"),
              this.logger.error(e.message),
              e)
            );
          }
        }
      };
      var iy = s(85257),
        iw = s.n(iy),
        i_ = Object.defineProperty,
        iM = Object.defineProperties,
        iP = Object.getOwnPropertyDescriptors,
        iS = Object.getOwnPropertySymbols,
        iI = Object.prototype.hasOwnProperty,
        iE = Object.prototype.propertyIsEnumerable,
        dist_index_es_l = (e, r, s) =>
          r in e
            ? i_(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (e[r] = s),
        dist_index_es_p = (e, r) => {
          for (var s in r || (r = {}))
            iI.call(r, s) && dist_index_es_l(e, s, r[s]);
          if (iS)
            for (var s of iS(r)) iE.call(r, s) && dist_index_es_l(e, s, r[s]);
          return e;
        },
        jsonrpc_http_connection_dist_index_es_v = (e, r) => iM(e, iP(r));
      let ix = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      };
      let index_es_f = class index_es_f {
        constructor(e, r = !1) {
          if (
            ((this.url = e),
            (this.disableProviderPing = r),
            (this.events = new p.EventEmitter()),
            (this.isAvailable = !1),
            (this.registering = !1),
            !(0, eh.isHttpUrl)(e))
          )
            throw Error(
              `Provided URL is not compatible with HTTP connection: ${e}`
            );
          (this.url = e), (this.disableProviderPing = r);
        }
        get connected() {
          return this.isAvailable;
        }
        get connecting() {
          return this.registering;
        }
        on(e, r) {
          this.events.on(e, r);
        }
        once(e, r) {
          this.events.once(e, r);
        }
        off(e, r) {
          this.events.off(e, r);
        }
        removeListener(e, r) {
          this.events.removeListener(e, r);
        }
        async open(e = this.url) {
          await this.register(e);
        }
        async close() {
          if (!this.isAvailable) throw Error("Connection already closed");
          this.onClose();
        }
        async send(e) {
          this.isAvailable || (await this.register());
          try {
            let r = (0, C.u)(e),
              s = await (
                await iw()(
                  this.url,
                  jsonrpc_http_connection_dist_index_es_v(
                    dist_index_es_p({}, ix),
                    { body: r }
                  )
                )
              ).json();
            this.onPayload({ data: s });
          } catch (r) {
            this.onError(e.id, r);
          }
        }
        async register(e = this.url) {
          if (!(0, eh.isHttpUrl)(e))
            throw Error(
              `Provided URL is not compatible with HTTP connection: ${e}`
            );
          if (this.registering) {
            let e = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= e ||
                this.events.listenerCount("open") >= e) &&
                this.events.setMaxListeners(e + 1),
              new Promise((e, r) => {
                this.events.once("register_error", (e) => {
                  this.resetMaxListeners(), r(e);
                }),
                  this.events.once("open", () => {
                    if (
                      (this.resetMaxListeners(), typeof this.isAvailable > "u")
                    )
                      return r(Error("HTTP connection is missing or invalid"));
                    e();
                  });
              })
            );
          }
          (this.url = e), (this.registering = !0);
          try {
            if (!this.disableProviderPing) {
              let r = (0, C.u)({
                id: 1,
                jsonrpc: "2.0",
                method: "test",
                params: [],
              });
              await iw()(
                e,
                jsonrpc_http_connection_dist_index_es_v(
                  dist_index_es_p({}, ix),
                  { body: r }
                )
              );
            }
            this.onOpen();
          } catch (r) {
            let e = this.parseError(r);
            throw (this.events.emit("register_error", e), this.onClose(), e);
          }
        }
        onOpen() {
          (this.isAvailable = !0),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose() {
          (this.isAvailable = !1),
            (this.registering = !1),
            this.events.emit("close");
        }
        onPayload(e) {
          if (typeof e.data > "u") return;
          let r = "string" == typeof e.data ? (0, C.D)(e.data) : e.data;
          this.events.emit("payload", r);
        }
        onError(e, r) {
          let s = this.parseError(r),
            p = s.message || s.toString(),
            b = (0, eh.formatJsonRpcError)(e, p);
          this.events.emit("payload", b);
        }
        parseError(e, r = this.url) {
          return (0, eh.parseConnectionError)(e, r, "HTTP");
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
      };
      let iA = "error",
        iN = "wc@2:universal_provider:",
        iR = "https://rpc.walletconnect.org/v1/",
        iC = "generic",
        iq = `${iR}bundler`,
        iT = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
      var iB =
          "u" > typeof globalThis
            ? globalThis
            : "u" > typeof window
            ? window
            : "u" > typeof s.g
            ? s.g
            : "u" > typeof self
            ? self
            : {},
        iO = { exports: {} };
      /**
       * @license
       * Lodash <https://lodash.com/>
       * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
       * Released under MIT license <https://lodash.com/license>
       * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
       * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
       */ !(function (e, r) {
        (function () {
          var s,
            p = "Expected a function",
            b = "__lodash_hash_undefined__",
            v = "__lodash_placeholder__",
            w = 1 / 0,
            _ = 0 / 0,
            P = [
              ["ary", 128],
              ["bind", 1],
              ["bindKey", 2],
              ["curry", 8],
              ["curryRight", 16],
              ["flip", 512],
              ["partial", 32],
              ["partialRight", 64],
              ["rearg", 256],
            ],
            S = "[object Arguments]",
            I = "[object Array]",
            A = "[object Boolean]",
            R = "[object Date]",
            C = "[object Error]",
            B = "[object Function]",
            j = "[object GeneratorFunction]",
            V = "[object Map]",
            J = "[object Number]",
            W = "[object Object]",
            X = "[object Promise]",
            et = "[object RegExp]",
            es = "[object Set]",
            eo = "[object String]",
            ec = "[object Symbol]",
            ed = "[object WeakMap]",
            eh = "[object ArrayBuffer]",
            ef = "[object DataView]",
            el = "[object Float32Array]",
            ep = "[object Float64Array]",
            eb = "[object Int8Array]",
            eg = "[object Int16Array]",
            em = "[object Int32Array]",
            ev = "[object Uint8Array]",
            ey = "[object Uint8ClampedArray]",
            ew = "[object Uint16Array]",
            e_ = "[object Uint32Array]",
            eM = /\b__p \+= '';/g,
            eP = /\b(__p \+=) '' \+/g,
            eS = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            eI = /&(?:amp|lt|gt|quot|#39);/g,
            eE = /[&<>"']/g,
            ex = RegExp(eI.source),
            eA = RegExp(eE.source),
            eN = /<%-([\s\S]+?)%>/g,
            eR = /<%([\s\S]+?)%>/g,
            eC = /<%=([\s\S]+?)%>/g,
            eq = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            eT = /^\w*$/,
            eB =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            eO = /[\\^$.*+?()[\]{}|]/g,
            ek = RegExp(eO.source),
            eD = /^\s+/,
            ez = /\s/,
            eL = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            ej = /\{\n\/\* \[wrapped with (.+)\] \*/,
            e$ = /,? & /,
            eF = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            eK = /[()=,{}\[\]\/\s]/,
            eH = /\\(\\)?/g,
            eU = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            eV = /\w*$/,
            eJ = /^[-+]0x[0-9a-f]+$/i,
            eG = /^0b[01]+$/i,
            eY = /^\[object .+?Constructor\]$/,
            eW = /^0o[0-7]+$/i,
            eZ = /^(?:0|[1-9]\d*)$/,
            eQ = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            eX = /($^)/,
            e0 = /['\n\r\u2028\u2029\\]/g,
            e1 = "\ud800-\udfff",
            e6 = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
            e2 = "\\u2700-\\u27bf",
            e8 = "a-z\\xdf-\\xf6\\xf8-\\xff",
            e3 = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            e4 = "\\ufe0e\\ufe0f",
            e9 =
              "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            e7 = "['’]",
            e5 = "[" + e9 + "]",
            ts = "[" + e6 + "]",
            to = "[" + e8 + "]",
            tc = "[^" + e1 + e9 + "\\d+" + e2 + e8 + e3 + "]",
            td = "\ud83c[\udffb-\udfff]",
            th = "[^" + e1 + "]",
            tf = "(?:\ud83c[\udde6-\uddff]){2}",
            tl = "[\ud800-\udbff][\udc00-\udfff]",
            tp = "[" + e3 + "]",
            tb = "\\u200d",
            tg = "(?:" + to + "|" + tc + ")",
            tm = "(?:" + e7 + "(?:d|ll|m|re|s|t|ve))?",
            tv = "(?:" + e7 + "(?:D|LL|M|RE|S|T|VE))?",
            ty = "(?:" + ts + "|" + td + ")?",
            tw = "[" + e4 + "]?",
            t_ =
              "(?:" +
              tb +
              "(?:" +
              [th, tf, tl].join("|") +
              ")" +
              tw +
              ty +
              ")*",
            tM = tw + ty + t_,
            tP = "(?:" + ["[" + e2 + "]", tf, tl].join("|") + ")" + tM,
            tS =
              "(?:" +
              [th + ts + "?", ts, tf, tl, "[" + e1 + "]"].join("|") +
              ")",
            tI = RegExp(e7, "g"),
            tE = RegExp(ts, "g"),
            tx = RegExp(td + "(?=" + td + ")|" + tS + tM, "g"),
            tA = RegExp(
              [
                tp +
                  "?" +
                  to +
                  "+" +
                  tm +
                  "(?=" +
                  [e5, tp, "$"].join("|") +
                  ")",
                "(?:" +
                  tp +
                  "|" +
                  tc +
                  ")+" +
                  tv +
                  "(?=" +
                  [e5, tp + tg, "$"].join("|") +
                  ")",
                tp + "?" + tg + "+" + tm,
                tp + "+" + tv,
                "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                "\\d+",
                tP,
              ].join("|"),
              "g"
            ),
            tN = RegExp("[" + tb + e1 + e6 + e4 + "]"),
            tR =
              /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            tC = [
              "Array",
              "Buffer",
              "DataView",
              "Date",
              "Error",
              "Float32Array",
              "Float64Array",
              "Function",
              "Int8Array",
              "Int16Array",
              "Int32Array",
              "Map",
              "Math",
              "Object",
              "Promise",
              "RegExp",
              "Set",
              "String",
              "Symbol",
              "TypeError",
              "Uint8Array",
              "Uint8ClampedArray",
              "Uint16Array",
              "Uint32Array",
              "WeakMap",
              "_",
              "clearTimeout",
              "isFinite",
              "parseInt",
              "setTimeout",
            ],
            tq = -1,
            tT = {};
          (tT[el] =
            tT[ep] =
            tT[eb] =
            tT[eg] =
            tT[em] =
            tT[ev] =
            tT[ey] =
            tT[ew] =
            tT[e_] =
              !0),
            (tT[S] =
              tT[I] =
              tT[eh] =
              tT[A] =
              tT[ef] =
              tT[R] =
              tT[C] =
              tT[B] =
              tT[V] =
              tT[J] =
              tT[W] =
              tT[et] =
              tT[es] =
              tT[eo] =
              tT[ed] =
                !1);
          var tB = {};
          (tB[S] =
            tB[I] =
            tB[eh] =
            tB[ef] =
            tB[A] =
            tB[R] =
            tB[el] =
            tB[ep] =
            tB[eb] =
            tB[eg] =
            tB[em] =
            tB[V] =
            tB[J] =
            tB[W] =
            tB[et] =
            tB[es] =
            tB[eo] =
            tB[ec] =
            tB[ev] =
            tB[ey] =
            tB[ew] =
            tB[e_] =
              !0),
            (tB[C] = tB[B] = tB[ed] = !1);
          var tO = {
              "\\": "\\",
              "'": "'",
              "\n": "n",
              "\r": "r",
              "\u2028": "u2028",
              "\u2029": "u2029",
            },
            tk = parseFloat,
            tD = parseInt,
            tz = "object" == typeof iB && iB && iB.Object === Object && iB,
            tL =
              "object" == typeof self && self && self.Object === Object && self,
            tj = tz || tL || Function("return this")(),
            t$ = r && !r.nodeType && r,
            tF = t$ && e && !e.nodeType && e,
            tK = tF && tF.exports === t$,
            tH = tK && tz.process,
            tU = (function () {
              try {
                return (
                  (tF && tF.require && tF.require("util").types) ||
                  (tH && tH.binding && tH.binding("util"))
                );
              } catch {}
            })(),
            tV = tU && tU.isArrayBuffer,
            tJ = tU && tU.isDate,
            tG = tU && tU.isMap,
            tY = tU && tU.isRegExp,
            tW = tU && tU.isSet,
            tZ = tU && tU.isTypedArray;
          function ft(e, r, s) {
            switch (s.length) {
              case 0:
                return e.call(r);
              case 1:
                return e.call(r, s[0]);
              case 2:
                return e.call(r, s[0], s[1]);
              case 3:
                return e.call(r, s[0], s[1], s[2]);
            }
            return e.apply(r, s);
          }
          function uc(e, r, s, p) {
            for (var b = -1, v = null == e ? 0 : e.length; ++b < v; ) {
              var w = e[b];
              r(p, w, s(w), e);
            }
            return p;
          }
          function mt(e, r) {
            for (
              var s = -1, p = null == e ? 0 : e.length;
              ++s < p && !1 !== r(e[s], s, e);

            );
            return e;
          }
          function Is(e, r) {
            for (var s = -1, p = null == e ? 0 : e.length; ++s < p; )
              if (!r(e[s], s, e)) return !1;
            return !0;
          }
          function ne(e, r) {
            for (
              var s = -1, p = null == e ? 0 : e.length, b = 0, v = [];
              ++s < p;

            ) {
              var w = e[s];
              r(w, s, e) && (v[b++] = w);
            }
            return v;
          }
          function Sn(e, r) {
            return !!(null == e ? 0 : e.length) && Te(e, r, 0) > -1;
          }
          function Dr(e, r, s) {
            for (var p = -1, b = null == e ? 0 : e.length; ++p < b; )
              if (s(r, e[p])) return !0;
            return !1;
          }
          function z(e, r) {
            for (
              var s = -1, p = null == e ? 0 : e.length, b = Array(p);
              ++s < p;

            )
              b[s] = r(e[s], s, e);
            return b;
          }
          function re(e, r) {
            for (var s = -1, p = r.length, b = e.length; ++s < p; )
              e[b + s] = r[s];
            return e;
          }
          function Nr(e, r, s, p) {
            var b = -1,
              v = null == e ? 0 : e.length;
            for (p && v && (s = e[++b]); ++b < v; ) s = r(s, e[b], b, e);
            return s;
          }
          function oc(e, r, s, p) {
            var b = null == e ? 0 : e.length;
            for (p && b && (s = e[--b]); b--; ) s = r(s, e[b], b, e);
            return s;
          }
          function $r(e, r) {
            for (var s = -1, p = null == e ? 0 : e.length; ++s < p; )
              if (r(e[s], s, e)) return !0;
            return !1;
          }
          var tQ = Ur("length");
          function xs(e, r, s) {
            var p;
            return (
              s(e, function (e, s, b) {
                if (r(e, s, b)) return (p = s), !1;
              }),
              p
            );
          }
          function On(e, r, s, p) {
            for (var b = e.length, v = s + (p ? 1 : -1); p ? v-- : ++v < b; )
              if (r(e[v], v, e)) return v;
            return -1;
          }
          function Te(e, r, s) {
            return r == r
              ? (function (e, r, s) {
                  for (var p = s - 1, b = e.length; ++p < b; )
                    if (e[p] === r) return p;
                  return -1;
                })(e, r, s)
              : On(e, Es, s);
          }
          function lc(e, r, s, p) {
            for (var b = s - 1, v = e.length; ++b < v; )
              if (p(e[b], r)) return b;
            return -1;
          }
          function Es(e) {
            return e != e;
          }
          function ys(e, r) {
            var s = null == e ? 0 : e.length;
            return s ? Fr(e, r) / s : _;
          }
          function Ur(e) {
            return function (r) {
              return null == r ? s : r[e];
            };
          }
          function qr(e) {
            return function (r) {
              return null == e ? s : e[r];
            };
          }
          function Ss(e, r, s, p, b) {
            return (
              b(e, function (e, b, v) {
                s = p ? ((p = !1), e) : r(s, e, b, v);
              }),
              s
            );
          }
          function Fr(e, r) {
            for (var p, b = -1, v = e.length; ++b < v; ) {
              var w = r(e[b]);
              w !== s && (p = p === s ? w : p + w);
            }
            return p;
          }
          function Wr(e, r) {
            for (var s = -1, p = Array(e); ++s < e; ) p[s] = r(s);
            return p;
          }
          function Os(e) {
            return e && e.slice(0, Ls(e) + 1).replace(eD, "");
          }
          function ht(e) {
            return function (r) {
              return e(r);
            };
          }
          function Mr(e, r) {
            return z(r, function (r) {
              return e[r];
            });
          }
          function tn(e, r) {
            return e.has(r);
          }
          function Rs(e, r) {
            for (var s = -1, p = e.length; ++s < p && Te(r, e[s], 0) > -1; );
            return s;
          }
          function bs(e, r) {
            for (var s = e.length; s-- && Te(r, e[s], 0) > -1; );
            return s;
          }
          var tX = qr({
              À: "A",
              Á: "A",
              Â: "A",
              Ã: "A",
              Ä: "A",
              Å: "A",
              à: "a",
              á: "a",
              â: "a",
              ã: "a",
              ä: "a",
              å: "a",
              Ç: "C",
              ç: "c",
              Ð: "D",
              ð: "d",
              È: "E",
              É: "E",
              Ê: "E",
              Ë: "E",
              è: "e",
              é: "e",
              ê: "e",
              ë: "e",
              Ì: "I",
              Í: "I",
              Î: "I",
              Ï: "I",
              ì: "i",
              í: "i",
              î: "i",
              ï: "i",
              Ñ: "N",
              ñ: "n",
              Ò: "O",
              Ó: "O",
              Ô: "O",
              Õ: "O",
              Ö: "O",
              Ø: "O",
              ò: "o",
              ó: "o",
              ô: "o",
              õ: "o",
              ö: "o",
              ø: "o",
              Ù: "U",
              Ú: "U",
              Û: "U",
              Ü: "U",
              ù: "u",
              ú: "u",
              û: "u",
              ü: "u",
              Ý: "Y",
              ý: "y",
              ÿ: "y",
              Æ: "Ae",
              æ: "ae",
              Þ: "Th",
              þ: "th",
              ß: "ss",
              Ā: "A",
              Ă: "A",
              Ą: "A",
              ā: "a",
              ă: "a",
              ą: "a",
              Ć: "C",
              Ĉ: "C",
              Ċ: "C",
              Č: "C",
              ć: "c",
              ĉ: "c",
              ċ: "c",
              č: "c",
              Ď: "D",
              Đ: "D",
              ď: "d",
              đ: "d",
              Ē: "E",
              Ĕ: "E",
              Ė: "E",
              Ę: "E",
              Ě: "E",
              ē: "e",
              ĕ: "e",
              ė: "e",
              ę: "e",
              ě: "e",
              Ĝ: "G",
              Ğ: "G",
              Ġ: "G",
              Ģ: "G",
              ĝ: "g",
              ğ: "g",
              ġ: "g",
              ģ: "g",
              Ĥ: "H",
              Ħ: "H",
              ĥ: "h",
              ħ: "h",
              Ĩ: "I",
              Ī: "I",
              Ĭ: "I",
              Į: "I",
              İ: "I",
              ĩ: "i",
              ī: "i",
              ĭ: "i",
              į: "i",
              ı: "i",
              Ĵ: "J",
              ĵ: "j",
              Ķ: "K",
              ķ: "k",
              ĸ: "k",
              Ĺ: "L",
              Ļ: "L",
              Ľ: "L",
              Ŀ: "L",
              Ł: "L",
              ĺ: "l",
              ļ: "l",
              ľ: "l",
              ŀ: "l",
              ł: "l",
              Ń: "N",
              Ņ: "N",
              Ň: "N",
              Ŋ: "N",
              ń: "n",
              ņ: "n",
              ň: "n",
              ŋ: "n",
              Ō: "O",
              Ŏ: "O",
              Ő: "O",
              ō: "o",
              ŏ: "o",
              ő: "o",
              Ŕ: "R",
              Ŗ: "R",
              Ř: "R",
              ŕ: "r",
              ŗ: "r",
              ř: "r",
              Ś: "S",
              Ŝ: "S",
              Ş: "S",
              Š: "S",
              ś: "s",
              ŝ: "s",
              ş: "s",
              š: "s",
              Ţ: "T",
              Ť: "T",
              Ŧ: "T",
              ţ: "t",
              ť: "t",
              ŧ: "t",
              Ũ: "U",
              Ū: "U",
              Ŭ: "U",
              Ů: "U",
              Ű: "U",
              Ų: "U",
              ũ: "u",
              ū: "u",
              ŭ: "u",
              ů: "u",
              ű: "u",
              ų: "u",
              Ŵ: "W",
              ŵ: "w",
              Ŷ: "Y",
              ŷ: "y",
              Ÿ: "Y",
              Ź: "Z",
              Ż: "Z",
              Ž: "Z",
              ź: "z",
              ż: "z",
              ž: "z",
              Ĳ: "IJ",
              ĳ: "ij",
              Œ: "Oe",
              œ: "oe",
              ŉ: "'n",
              ſ: "s",
            }),
            t0 = qr({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
            });
          function mc(e) {
            return "\\" + tO[e];
          }
          function Le(e) {
            return tN.test(e);
          }
          function Br(e) {
            var r = -1,
              s = Array(e.size);
            return (
              e.forEach(function (e, p) {
                s[++r] = [p, e];
              }),
              s
            );
          }
          function Ts(e, r) {
            return function (s) {
              return e(r(s));
            };
          }
          function ie(e, r) {
            for (var s = -1, p = e.length, b = 0, w = []; ++s < p; ) {
              var _ = e[s];
              (_ === r || _ === v) && ((e[s] = v), (w[b++] = s));
            }
            return w;
          }
          function Rn(e) {
            var r = -1,
              s = Array(e.size);
            return (
              e.forEach(function (e) {
                s[++r] = e;
              }),
              s
            );
          }
          function He(e) {
            return Le(e)
              ? (function (e) {
                  for (var r = (tx.lastIndex = 0); tx.test(e); ) ++r;
                  return r;
                })(e)
              : tQ(e);
          }
          function St(e) {
            return Le(e) ? e.match(tx) || [] : e.split("");
          }
          function Ls(e) {
            for (var r = e.length; r-- && ez.test(e.charAt(r)); );
            return r;
          }
          var t1 = qr({
              "&amp;": "&",
              "&lt;": "<",
              "&gt;": ">",
              "&quot;": '"',
              "&#39;": "'",
            }),
            t6 = (function h(e) {
              var r,
                ez,
                e1,
                e6,
                e2 = (e =
                  null == e ? tj : t6.defaults(tj.Object(), e, t6.pick(tj, tC)))
                  .Array,
                e8 = e.Date,
                e3 = e.Error,
                e4 = e.Function,
                e9 = e.Math,
                e7 = e.Object,
                e5 = e.RegExp,
                ts = e.String,
                to = e.TypeError,
                tc = e2.prototype,
                td = e4.prototype,
                th = e7.prototype,
                tf = e["__core-js_shared__"],
                tl = td.toString,
                tp = th.hasOwnProperty,
                tb = 0,
                tg = (r = /[^.]+$/.exec(
                  (tf && tf.keys && tf.keys.IE_PROTO) || ""
                ))
                  ? "Symbol(src)_1." + r
                  : "",
                tm = th.toString,
                tv = tl.call(e7),
                ty = tj._,
                tw = e5(
                  "^" +
                    tl
                      .call(tp)
                      .replace(eO, "\\$&")
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?"
                      ) +
                    "$"
                ),
                t_ = tK ? e.Buffer : s,
                tM = e.Symbol,
                tP = e.Uint8Array,
                tS = t_ ? t_.allocUnsafe : s,
                tx = Ts(e7.getPrototypeOf, e7),
                tN = e7.create,
                tO = th.propertyIsEnumerable,
                tz = tc.splice,
                tL = tM ? tM.isConcatSpreadable : s,
                t$ = tM ? tM.iterator : s,
                tF = tM ? tM.toStringTag : s,
                tH = (function () {
                  try {
                    var e = we(e7, "defineProperty");
                    return e({}, "", {}), e;
                  } catch {}
                })(),
                tU = e.clearTimeout !== tj.clearTimeout && e.clearTimeout,
                tQ = e8 && e8.now !== tj.Date.now && e8.now,
                t2 = e.setTimeout !== tj.setTimeout && e.setTimeout,
                t8 = e9.ceil,
                t3 = e9.floor,
                t4 = e7.getOwnPropertySymbols,
                t9 = t_ ? t_.isBuffer : s,
                t7 = e.isFinite,
                t5 = tc.join,
                is = Ts(e7.keys, e7),
                io = e9.max,
                ic = e9.min,
                id = e8.now,
                ih = e.parseInt,
                il = e9.random,
                ip = tc.reverse,
                ib = we(e, "DataView"),
                ig = we(e, "Map"),
                im = we(e, "Promise"),
                iy = we(e, "Set"),
                iw = we(e, "WeakMap"),
                i_ = we(e7, "create"),
                iM = iw && new iw(),
                iP = {},
                iS = Pe(ib),
                iI = Pe(ig),
                iE = Pe(im),
                ix = Pe(iy),
                iA = Pe(iw),
                iN = tM ? tM.prototype : s,
                iR = iN ? iN.valueOf : s,
                iC = iN ? iN.toString : s;
              function a(e) {
                if (Y(e) && !rN(e) && !(e instanceof N)) {
                  if (e instanceof Pt) return e;
                  if (tp.call(e, "__wrapped__")) return Mu(e);
                }
                return new Pt(e);
              }
              var iq = (function () {
                function t() {}
                return function (e) {
                  if (!K(e)) return {};
                  if (tN) return tN(e);
                  t.prototype = e;
                  var r = new t();
                  return (t.prototype = s), r;
                };
              })();
              function Gn() {}
              function Pt(e, r) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__chain__ = !!r),
                  (this.__index__ = 0),
                  (this.__values__ = s);
              }
              function N(e) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__dir__ = 1),
                  (this.__filtered__ = !1),
                  (this.__iteratees__ = []),
                  (this.__takeCount__ = 4294967295),
                  (this.__views__ = []);
              }
              function ge(e) {
                var r = -1,
                  s = null == e ? 0 : e.length;
                for (this.clear(); ++r < s; ) {
                  var p = e[r];
                  this.set(p[0], p[1]);
                }
              }
              function Kt(e) {
                var r = -1,
                  s = null == e ? 0 : e.length;
                for (this.clear(); ++r < s; ) {
                  var p = e[r];
                  this.set(p[0], p[1]);
                }
              }
              function Jt(e) {
                var r = -1,
                  s = null == e ? 0 : e.length;
                for (this.clear(); ++r < s; ) {
                  var p = e[r];
                  this.set(p[0], p[1]);
                }
              }
              function ve(e) {
                var r = -1,
                  s = null == e ? 0 : e.length;
                for (this.__data__ = new Jt(); ++r < s; ) this.add(e[r]);
              }
              function Ot(e) {
                var r = (this.__data__ = new Kt(e));
                this.size = r.size;
              }
              function Ms(e, r) {
                var s = rN(e),
                  p = !s && rA(e),
                  b = !s && !p && rC(e),
                  v = !s && !p && !b && rk(e),
                  w = s || p || b || v,
                  _ = w ? Wr(e.length, ts) : [],
                  P = _.length;
                for (var S in e)
                  (r || tp.call(e, S)) &&
                    !(
                      w &&
                      ("length" == S ||
                        (b && ("offset" == S || "parent" == S)) ||
                        (v &&
                          ("buffer" == S ||
                            "byteLength" == S ||
                            "byteOffset" == S)) ||
                        Qt(S, P))
                    ) &&
                    _.push(S);
                return _;
              }
              function Bs(e) {
                var r = e.length;
                return r ? e[ri(0, r - 1)] : s;
              }
              function Yr(e, r, p) {
                ((p === s || Rt(e[r], p)) && (p !== s || r in e)) ||
                  Yt(e, r, p);
              }
              function an(e, r, p) {
                var b = e[r];
                (tp.call(e, r) && Rt(b, p) && (p !== s || r in e)) ||
                  Yt(e, r, p);
              }
              function zn(e, r) {
                for (var s = e.length; s--; ) if (Rt(e[s][0], r)) return s;
                return -1;
              }
              function xf(e, r, s, p) {
                return (
                  iT(e, function (e, b, v) {
                    r(p, e, s(e), v);
                  }),
                  p
                );
              }
              function Gs(e, r) {
                return e && Ft(r, k(r), e);
              }
              function Yt(e, r, s) {
                "__proto__" == r && tH
                  ? tH(e, r, {
                      configurable: !0,
                      enumerable: !0,
                      value: s,
                      writable: !0,
                    })
                  : (e[r] = s);
              }
              function Zr(e, r) {
                for (
                  var p = -1, b = r.length, v = e2(b), w = null == e;
                  ++p < b;

                )
                  v[p] = w ? s : Oi(e, r[p]);
                return v;
              }
              function _e(e, r, p) {
                return (
                  e == e &&
                    (p !== s && (e = e <= p ? e : p),
                    r !== s && (e = e >= r ? e : r)),
                  e
                );
              }
              function Ct(e, r, p, b, v, w) {
                var _,
                  P = 1 & r,
                  I = 2 & r,
                  C = 4 & r;
                if ((p && (_ = v ? p(e, b, v, w) : p(e)), _ !== s)) return _;
                if (!K(e)) return e;
                var X = rN(e);
                if (X) {
                  if (
                    ((ed = e.length),
                    (eM = new e.constructor(ed)),
                    ed &&
                      "string" == typeof e[0] &&
                      tp.call(e, "index") &&
                      ((eM.index = e.index), (eM.input = e.input)),
                    (_ = eM),
                    !P)
                  )
                    return ut(e, _);
                } else {
                  var ed,
                    eM,
                    eP,
                    eS,
                    eI,
                    eE = iH(e),
                    ex = eE == B || eE == j;
                  if (rC(e)) return pu(e, P);
                  if (eE == W || eE == S || (ex && !v)) {
                    if (((_ = I || ex ? {} : Lu(e)), !P))
                      return I
                        ? ((eP = (eI = _) && Ft(e, ot(e), eI)),
                          Ft(e, iK(e), eP))
                        : ((eS = Gs(_, e)), Ft(e, iF(e), eS));
                  } else {
                    if (!tB[eE]) return v ? e : {};
                    _ = (function (e, r, s) {
                      var p,
                        b,
                        v = e.constructor;
                      switch (r) {
                        case eh:
                          return fi(e);
                        case A:
                        case R:
                          return new v(+e);
                        case ef:
                          return (
                            (p = s ? fi(e.buffer) : e.buffer),
                            new e.constructor(p, e.byteOffset, e.byteLength)
                          );
                        case el:
                        case ep:
                        case eb:
                        case eg:
                        case em:
                        case ev:
                        case ey:
                        case ew:
                        case e_:
                          return du(e, s);
                        case V:
                          return new v();
                        case J:
                        case eo:
                          return new v(e);
                        case et:
                          return (
                            ((b = new e.constructor(
                              e.source,
                              eV.exec(e)
                            )).lastIndex = e.lastIndex),
                            b
                          );
                        case es:
                          return new v();
                        case ec:
                          return iR ? e7(iR.call(e)) : {};
                      }
                    })(e, eE, P);
                  }
                }
                w || (w = new Ot());
                var eA = w.get(e);
                if (eA) return eA;
                w.set(e, _),
                  rO(e)
                    ? e.forEach(function (s) {
                        _.add(Ct(s, r, p, s, e, w));
                      })
                    : rT(e) &&
                      e.forEach(function (s, b) {
                        _.set(b, Ct(s, r, p, b, e, w));
                      });
                var eN = C ? (I ? di : pi) : I ? ot : k,
                  eR = X ? s : eN(e);
                return (
                  mt(eR || e, function (s, b) {
                    eR && (s = e[(b = s)]), an(_, b, Ct(s, r, p, b, e, w));
                  }),
                  _
                );
              }
              function zs(e, r, p) {
                var b = p.length;
                if (null == e) return !b;
                for (e = e7(e); b--; ) {
                  var v = p[b],
                    w = r[v],
                    _ = e[v];
                  if ((_ === s && !(v in e)) || !w(_)) return !1;
                }
                return !0;
              }
              function Ks(e, r, b) {
                if ("function" != typeof e) throw new to(p);
                return iJ(function () {
                  e.apply(s, b);
                }, r);
              }
              function on(e, r, s, p) {
                var b = -1,
                  v = Sn,
                  w = !0,
                  _ = e.length,
                  P = [],
                  S = r.length;
                if (!_) return P;
                s && (r = z(r, ht(s))),
                  p
                    ? ((v = Dr), (w = !1))
                    : r.length >= 200 && ((v = tn), (w = !1), (r = new ve(r)));
                e: for (; ++b < _; ) {
                  var I = e[b],
                    A = null == s ? I : s(I);
                  if (((I = p || 0 !== I ? I : 0), w && A == A)) {
                    for (var R = S; R--; ) if (r[R] === A) continue e;
                    P.push(I);
                  } else v(r, A, p) || P.push(I);
                }
                return P;
              }
              (a.templateSettings = {
                escape: eN,
                evaluate: eR,
                interpolate: eC,
                variable: "",
                imports: { _: a },
              }),
                (a.prototype = Gn.prototype),
                (a.prototype.constructor = a),
                (Pt.prototype = iq(Gn.prototype)),
                (Pt.prototype.constructor = Pt),
                (N.prototype = iq(Gn.prototype)),
                (N.prototype.constructor = N),
                (ge.prototype.clear = function () {
                  (this.__data__ = i_ ? i_(null) : {}), (this.size = 0);
                }),
                (ge.prototype.delete = function (e) {
                  var r = this.has(e) && delete this.__data__[e];
                  return (this.size -= r ? 1 : 0), r;
                }),
                (ge.prototype.get = function (e) {
                  var r = this.__data__;
                  if (i_) {
                    var p = r[e];
                    return p === b ? s : p;
                  }
                  return tp.call(r, e) ? r[e] : s;
                }),
                (ge.prototype.has = function (e) {
                  var r = this.__data__;
                  return i_ ? r[e] !== s : tp.call(r, e);
                }),
                (ge.prototype.set = function (e, r) {
                  var p = this.__data__;
                  return (
                    (this.size += this.has(e) ? 0 : 1),
                    (p[e] = i_ && r === s ? b : r),
                    this
                  );
                }),
                (Kt.prototype.clear = function () {
                  (this.__data__ = []), (this.size = 0);
                }),
                (Kt.prototype.delete = function (e) {
                  var r = this.__data__,
                    s = zn(r, e);
                  return (
                    !(s < 0) &&
                    (s == r.length - 1 ? r.pop() : tz.call(r, s, 1),
                    --this.size,
                    !0)
                  );
                }),
                (Kt.prototype.get = function (e) {
                  var r = this.__data__,
                    p = zn(r, e);
                  return p < 0 ? s : r[p][1];
                }),
                (Kt.prototype.has = function (e) {
                  return zn(this.__data__, e) > -1;
                }),
                (Kt.prototype.set = function (e, r) {
                  var s = this.__data__,
                    p = zn(s, e);
                  return (
                    p < 0 ? (++this.size, s.push([e, r])) : (s[p][1] = r), this
                  );
                }),
                (Jt.prototype.clear = function () {
                  (this.size = 0),
                    (this.__data__ = {
                      hash: new ge(),
                      map: new (ig || Kt)(),
                      string: new ge(),
                    });
                }),
                (Jt.prototype.delete = function (e) {
                  var r = nr(this, e).delete(e);
                  return (this.size -= r ? 1 : 0), r;
                }),
                (Jt.prototype.get = function (e) {
                  return nr(this, e).get(e);
                }),
                (Jt.prototype.has = function (e) {
                  return nr(this, e).has(e);
                }),
                (Jt.prototype.set = function (e, r) {
                  var s = nr(this, e),
                    p = s.size;
                  return s.set(e, r), (this.size += s.size == p ? 0 : 1), this;
                }),
                (ve.prototype.add = ve.prototype.push =
                  function (e) {
                    return this.__data__.set(e, b), this;
                  }),
                (ve.prototype.has = function (e) {
                  return this.__data__.has(e);
                }),
                (Ot.prototype.clear = function () {
                  (this.__data__ = new Kt()), (this.size = 0);
                }),
                (Ot.prototype.delete = function (e) {
                  var r = this.__data__,
                    s = r.delete(e);
                  return (this.size = r.size), s;
                }),
                (Ot.prototype.get = function (e) {
                  return this.__data__.get(e);
                }),
                (Ot.prototype.has = function (e) {
                  return this.__data__.has(e);
                }),
                (Ot.prototype.set = function (e, r) {
                  var s = this.__data__;
                  if (s instanceof Kt) {
                    var p = s.__data__;
                    if (!ig || p.length < 199)
                      return p.push([e, r]), (this.size = ++s.size), this;
                    s = this.__data__ = new Jt(p);
                  }
                  return s.set(e, r), (this.size = s.size), this;
                });
              var iT = mu(qt),
                iB = mu(Qr, !0);
              function Sf(e, r) {
                var s = !0;
                return (
                  iT(e, function (e, p, b) {
                    return (s = !!r(e, p, b));
                  }),
                  s
                );
              }
              function Kn(e, r, p) {
                for (var b = -1, v = e.length; ++b < v; ) {
                  var w = e[b],
                    _ = r(w);
                  if (null != _ && (P === s ? _ == _ && !pt(_) : p(_, P)))
                    var P = _,
                      S = w;
                }
                return S;
              }
              function Ys(e, r) {
                var s = [];
                return (
                  iT(e, function (e, p, b) {
                    r(e, p, b) && s.push(e);
                  }),
                  s
                );
              }
              function tt(e, r, s, p, b) {
                var v = -1,
                  w = e.length;
                for (s || (s = vh), b || (b = []); ++v < w; ) {
                  var _ = e[v];
                  r > 0 && s(_)
                    ? r > 1
                      ? tt(_, r - 1, s, p, b)
                      : re(b, _)
                    : p || (b[b.length] = _);
                }
                return b;
              }
              var iO = wu(),
                ik = wu(!0);
              function qt(e, r) {
                return e && iO(e, r, k);
              }
              function Qr(e, r) {
                return e && ik(e, r, k);
              }
              function Jn(e, r) {
                return ne(r, function (r) {
                  return Vt(e[r]);
                });
              }
              function me(e, r) {
                r = oe(r, e);
                for (var p = 0, b = r.length; null != e && p < b; )
                  e = e[Wt(r[p++])];
                return p && p == b ? e : s;
              }
              function Xs(e, r, s) {
                var p = r(e);
                return rN(e) ? p : re(p, s(e));
              }
              function rt(e) {
                return null == e
                  ? e === s
                    ? "[object Undefined]"
                    : "[object Null]"
                  : tF && tF in e7(e)
                  ? (function (e) {
                      var r = tp.call(e, tF),
                        p = e[tF];
                      try {
                        e[tF] = s;
                        var b = !0;
                      } catch {}
                      var v = tm.call(e);
                      return b && (r ? (e[tF] = p) : delete e[tF]), v;
                    })(e)
                  : tm.call(e);
              }
              function Vr(e, r) {
                return e > r;
              }
              function Rf(e, r) {
                return null != e && tp.call(e, r);
              }
              function bf(e, r) {
                return null != e && r in e7(e);
              }
              function kr(e, r, p) {
                for (
                  var b = p ? Dr : Sn,
                    v = e[0].length,
                    w = e.length,
                    _ = w,
                    P = e2(w),
                    S = 1 / 0,
                    I = [];
                  _--;

                ) {
                  var A = e[_];
                  _ && r && (A = z(A, ht(r))),
                    (S = ic(A.length, S)),
                    (P[_] =
                      !p && (r || (v >= 120 && A.length >= 120))
                        ? new ve(_ && A)
                        : s);
                }
                A = e[0];
                var R = -1,
                  C = P[0];
                e: for (; ++R < v && I.length < S; ) {
                  var B = A[R],
                    j = r ? r(B) : B;
                  if (
                    ((B = p || 0 !== B ? B : 0), !(C ? tn(C, j) : b(I, j, p)))
                  ) {
                    for (_ = w; --_; ) {
                      var V = P[_];
                      if (!(V ? tn(V, j) : b(e[_], j, p))) continue e;
                    }
                    C && C.push(j), I.push(B);
                  }
                }
                return I;
              }
              function cn(e, r, p) {
                r = oe(r, e);
                var b = null == (e = $u(e, r)) ? e : e[Wt(It(r))];
                return null == b ? s : ft(b, e, p);
              }
              function Qs(e) {
                return Y(e) && rt(e) == S;
              }
              function fn(e, r, p, b, v) {
                return (
                  e === r ||
                  (null != e && null != r && (Y(e) || Y(r))
                    ? (function (e, r, p, b, v, w) {
                        var _ = rN(e),
                          P = rN(r),
                          B = _ ? I : iH(e),
                          j = P ? I : iH(r);
                        (B = B == S ? W : B), (j = j == S ? W : j);
                        var X = B == W,
                          ed = j == W,
                          el = B == j;
                        if (el && rC(e)) {
                          if (!rC(r)) return !1;
                          (_ = !0), (X = !1);
                        }
                        if (el && !X)
                          return (
                            w || (w = new Ot()),
                            _ || rk(e)
                              ? Ru(e, r, p, b, v, w)
                              : (function (e, r, s, p, b, v, w) {
                                  switch (s) {
                                    case ef:
                                      if (
                                        e.byteLength != r.byteLength ||
                                        e.byteOffset != r.byteOffset
                                      )
                                        break;
                                      (e = e.buffer), (r = r.buffer);
                                    case eh:
                                      return !(
                                        e.byteLength != r.byteLength ||
                                        !v(new tP(e), new tP(r))
                                      );
                                    case A:
                                    case R:
                                    case J:
                                      return Rt(+e, +r);
                                    case C:
                                      return (
                                        e.name == r.name &&
                                        e.message == r.message
                                      );
                                    case et:
                                    case eo:
                                      return e == r + "";
                                    case V:
                                      var _ = Br;
                                    case es:
                                      var P = 1 & p;
                                      if (
                                        (_ || (_ = Rn), e.size != r.size && !P)
                                      )
                                        break;
                                      var S = w.get(e);
                                      if (S) return S == r;
                                      (p |= 2), w.set(e, r);
                                      var I = Ru(_(e), _(r), p, b, v, w);
                                      return w.delete(e), I;
                                    case ec:
                                      if (iR) return iR.call(e) == iR.call(r);
                                  }
                                  return !1;
                                })(e, r, B, p, b, v, w)
                          );
                        if (!(1 & p)) {
                          var ep = X && tp.call(e, "__wrapped__"),
                            eb = ed && tp.call(r, "__wrapped__");
                          if (ep || eb) {
                            var eg = ep ? e.value() : e,
                              em = eb ? r.value() : r;
                            return w || (w = new Ot()), v(eg, em, p, b, w);
                          }
                        }
                        return (
                          !!el &&
                          (w || (w = new Ot()),
                          (function (e, r, p, b, v, w) {
                            var _ = 1 & p,
                              P = pi(e),
                              S = P.length;
                            if (S != pi(r).length && !_) return !1;
                            for (var I = S; I--; ) {
                              var A = P[I];
                              if (!(_ ? A in r : tp.call(r, A))) return !1;
                            }
                            var R = w.get(e),
                              C = w.get(r);
                            if (R && C) return R == r && C == e;
                            var B = !0;
                            w.set(e, r), w.set(r, e);
                            for (var j = _; ++I < S; ) {
                              var V = e[(A = P[I])],
                                J = r[A];
                              if (b)
                                var W = _
                                  ? b(J, V, A, r, e, w)
                                  : b(V, J, A, e, r, w);
                              if (
                                !(W === s ? V === J || v(V, J, p, b, w) : W)
                              ) {
                                B = !1;
                                break;
                              }
                              j || (j = "constructor" == A);
                            }
                            if (B && !j) {
                              var X = e.constructor,
                                et = r.constructor;
                              X != et &&
                                "constructor" in e &&
                                "constructor" in r &&
                                !(
                                  "function" == typeof X &&
                                  X instanceof X &&
                                  "function" == typeof et &&
                                  et instanceof et
                                ) &&
                                (B = !1);
                            }
                            return w.delete(e), w.delete(r), B;
                          })(e, r, p, b, v, w))
                        );
                      })(e, r, p, b, fn, v)
                    : e != e && r != r)
                );
              }
              function jr(e, r, p, b) {
                var v = p.length,
                  w = v,
                  _ = !b;
                if (null == e) return !w;
                for (e = e7(e); v--; ) {
                  var P = p[v];
                  if (_ && P[2] ? P[1] !== e[P[0]] : !(P[0] in e)) return !1;
                }
                for (; ++v < w; ) {
                  var S = (P = p[v])[0],
                    I = e[S],
                    A = P[1];
                  if (_ && P[2]) {
                    if (I === s && !(S in e)) return !1;
                  } else {
                    var R = new Ot();
                    if (b) var C = b(I, A, S, e, r, R);
                    if (!(C === s ? fn(A, I, 3, b, R) : C)) return !1;
                  }
                }
                return !0;
              }
              function Vs(e) {
                return (
                  !(!K(e) || (tg && tg in e)) && (Vt(e) ? tw : eY).test(Pe(e))
                );
              }
              function ks(e) {
                return "function" == typeof e
                  ? e
                  : null == e
                  ? ct
                  : "object" == typeof e
                  ? rN(e)
                    ? eu(e[0], e[1])
                    : tu(e)
                  : Pa(e);
              }
              function ti(e) {
                if (!pn(e)) return is(e);
                var r = [];
                for (var s in e7(e))
                  tp.call(e, s) && "constructor" != s && r.push(s);
                return r;
              }
              function ei(e, r) {
                return e < r;
              }
              function js(e, r) {
                var s = -1,
                  p = at(e) ? e2(e.length) : [];
                return (
                  iT(e, function (e, b, v) {
                    p[++s] = r(e, b, v);
                  }),
                  p
                );
              }
              function tu(e) {
                var r = vi(e);
                return 1 == r.length && r[0][2]
                  ? Du(r[0][0], r[0][1])
                  : function (s) {
                      return s === e || jr(s, e, r);
                    };
              }
              function eu(e, r) {
                var p;
                return mi(e) && (p = r) == p && !K(p)
                  ? Du(Wt(e), r)
                  : function (p) {
                      var b = Oi(p, e);
                      return b === s && b === r ? Ri(p, e) : fn(r, b, 3);
                    };
              }
              function Yn(e, r, p, b, v) {
                e !== r &&
                  iO(
                    r,
                    function (w, _) {
                      if ((v || (v = new Ot()), K(w)))
                        !(function (e, r, p, b, v, w, _) {
                          var P = Pi(e, p),
                            S = Pi(r, p),
                            I = _.get(S);
                          if (I) {
                            Yr(e, p, I);
                            return;
                          }
                          var A = w ? w(P, S, p + "", e, r, _) : s,
                            R = A === s;
                          if (R) {
                            var C = rN(S),
                              B = !C && rC(S),
                              j = !C && !B && rk(S);
                            (A = S),
                              C || B || j
                                ? rN(P)
                                  ? (A = P)
                                  : Z(P)
                                  ? (A = ut(P))
                                  : B
                                  ? ((R = !1), (A = pu(S, !0)))
                                  : j
                                  ? ((R = !1), (A = du(S, !0)))
                                  : (A = [])
                                : gn(S) || rA(S)
                                ? ((A = P),
                                  rA(P)
                                    ? (A = fa(P))
                                    : (!K(P) || Vt(P)) && (A = Lu(S)))
                                : (R = !1);
                          }
                          R && (_.set(S, A), v(A, S, b, w, _), _.delete(S)),
                            Yr(e, p, A);
                        })(e, r, _, p, Yn, b, v);
                      else {
                        var P = b ? b(Pi(e, _), w, _ + "", e, r, v) : s;
                        P === s && (P = w), Yr(e, _, P);
                      }
                    },
                    ot
                  );
              }
              function nu(e, r) {
                var p = e.length;
                if (p) return Qt((r += r < 0 ? p : 0), p) ? e[r] : s;
              }
              function ru(e, r, s) {
                r = r.length
                  ? z(r, function (e) {
                      return rN(e)
                        ? function (r) {
                            return me(r, 1 === e.length ? e[0] : e);
                          }
                        : e;
                    })
                  : [ct];
                var p = -1;
                return (
                  (r = z(r, ht(E()))),
                  (function (e, r) {
                    var s = e.length;
                    for (e.sort(r); s--; ) e[s] = e[s].value;
                    return e;
                  })(
                    js(e, function (e, s, b) {
                      return {
                        criteria: z(r, function (r) {
                          return r(e);
                        }),
                        index: ++p,
                        value: e,
                      };
                    }),
                    function (e, r) {
                      return (function (e, r, s) {
                        for (
                          var p = -1,
                            b = e.criteria,
                            v = r.criteria,
                            w = b.length,
                            _ = s.length;
                          ++p < w;

                        ) {
                          var P = gu(b[p], v[p]);
                          if (P) {
                            if (p >= _) return P;
                            return P * ("desc" == s[p] ? -1 : 1);
                          }
                        }
                        return e.index - r.index;
                      })(e, r, s);
                    }
                  )
                );
              }
              function iu(e, r, s) {
                for (var p = -1, b = r.length, v = {}; ++p < b; ) {
                  var w = r[p],
                    _ = me(e, w);
                  s(_, w) && hn(v, oe(w, e), _);
                }
                return v;
              }
              function ni(e, r, s, p) {
                var b = p ? lc : Te,
                  v = -1,
                  w = r.length,
                  _ = e;
                for (e === r && (r = ut(r)), s && (_ = z(e, ht(s))); ++v < w; )
                  for (
                    var P = 0, S = r[v], I = s ? s(S) : S;
                    (P = b(_, I, P, p)) > -1;

                  )
                    _ !== e && tz.call(_, P, 1), tz.call(e, P, 1);
                return e;
              }
              function su(e, r) {
                for (var s = e ? r.length : 0, p = s - 1; s--; ) {
                  var b = r[s];
                  if (s == p || b !== v) {
                    var v = b;
                    Qt(b) ? tz.call(e, b, 1) : ui(e, b);
                  }
                }
                return e;
              }
              function ri(e, r) {
                return e + t3(il() * (r - e + 1));
              }
              function ii(e, r) {
                var s = "";
                if (!e || r < 1 || r > 9007199254740991) return s;
                do r % 2 && (s += e), (r = t3(r / 2)) && (e += e);
                while (r);
                return s;
              }
              function H(e, r) {
                return iG(Nu(e, r, ct), e + "");
              }
              function hn(e, r, p, b) {
                if (!K(e)) return e;
                r = oe(r, e);
                for (
                  var v = -1, w = r.length, _ = w - 1, P = e;
                  null != P && ++v < w;

                ) {
                  var S = Wt(r[v]),
                    I = p;
                  if (
                    "__proto__" === S ||
                    "constructor" === S ||
                    "prototype" === S
                  )
                    break;
                  if (v != _) {
                    var A = P[S];
                    (I = b ? b(A, S, P) : s) === s &&
                      (I = K(A) ? A : Qt(r[v + 1]) ? [] : {});
                  }
                  an(P, S, I), (P = P[S]);
                }
                return e;
              }
              var iD = iM
                  ? function (e, r) {
                      return iM.set(e, r), e;
                    }
                  : ct,
                iz = tH
                  ? function (e, r) {
                      return tH(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: Ti(r),
                        writable: !0,
                      });
                    }
                  : ct;
              function At(e, r, s) {
                var p = -1,
                  b = e.length;
                r < 0 && (r = -r > b ? 0 : b + r),
                  (s = s > b ? b : s) < 0 && (s += b),
                  (b = r > s ? 0 : (s - r) >>> 0),
                  (r >>>= 0);
                for (var v = e2(b); ++p < b; ) v[p] = e[p + r];
                return v;
              }
              function Xf(e, r) {
                var s;
                return (
                  iT(e, function (e, p, b) {
                    return !(s = r(e, p, b));
                  }),
                  !!s
                );
              }
              function Zn(e, r, s) {
                var p = 0,
                  b = null == e ? p : e.length;
                if ("number" == typeof r && r == r && b <= 2147483647) {
                  for (; p < b; ) {
                    var v = (p + b) >>> 1,
                      w = e[v];
                    null !== w && !pt(w) && (s ? w <= r : w < r)
                      ? (p = v + 1)
                      : (b = v);
                  }
                  return b;
                }
                return si(e, r, ct, s);
              }
              function si(e, r, p, b) {
                var v = 0,
                  w = null == e ? 0 : e.length;
                if (0 === w) return 0;
                r = p(r);
                for (
                  var _ = r != r, P = null === r, S = pt(r), I = r === s;
                  v < w;

                ) {
                  var A = t3((v + w) / 2),
                    R = p(e[A]),
                    C = R !== s,
                    B = null === R,
                    j = R == R,
                    V = pt(R);
                  if (_) var J = b || j;
                  else
                    J = I
                      ? j && (b || C)
                      : P
                      ? j && C && (b || !B)
                      : S
                      ? j && C && !B && (b || !V)
                      : !B && !V && (b ? R <= r : R < r);
                  J ? (v = A + 1) : (w = A);
                }
                return ic(w, 4294967294);
              }
              function au(e, r) {
                for (var s = -1, p = e.length, b = 0, v = []; ++s < p; ) {
                  var w = e[s],
                    _ = r ? r(w) : w;
                  if (!s || !Rt(_, P)) {
                    var P = _;
                    v[b++] = 0 === w ? 0 : w;
                  }
                }
                return v;
              }
              function ou(e) {
                return "number" == typeof e ? e : pt(e) ? _ : +e;
              }
              function lt(e) {
                if ("string" == typeof e) return e;
                if (rN(e)) return z(e, lt) + "";
                if (pt(e)) return iC ? iC.call(e) : "";
                var r = e + "";
                return "0" == r && 1 / e == -w ? "-0" : r;
              }
              function ae(e, r, s) {
                var p = -1,
                  b = Sn,
                  v = e.length,
                  w = !0,
                  _ = [],
                  P = _;
                if (s) (w = !1), (b = Dr);
                else if (v >= 200) {
                  var S = r ? null : ij(e);
                  if (S) return Rn(S);
                  (w = !1), (b = tn), (P = new ve());
                } else P = r ? [] : _;
                e: for (; ++p < v; ) {
                  var I = e[p],
                    A = r ? r(I) : I;
                  if (((I = s || 0 !== I ? I : 0), w && A == A)) {
                    for (var R = P.length; R--; ) if (P[R] === A) continue e;
                    r && P.push(A), _.push(I);
                  } else b(P, A, s) || (P !== _ && P.push(A), _.push(I));
                }
                return _;
              }
              function ui(e, r) {
                return (
                  (r = oe(r, e)), null == (e = $u(e, r)) || delete e[Wt(It(r))]
                );
              }
              function cu(e, r, s, p) {
                return hn(e, r, s(me(e, r)), p);
              }
              function Xn(e, r, s, p) {
                for (
                  var b = e.length, v = p ? b : -1;
                  (p ? v-- : ++v < b) && r(e[v], v, e);

                );
                return s
                  ? At(e, p ? 0 : v, p ? v + 1 : b)
                  : At(e, p ? v + 1 : 0, p ? b : v);
              }
              function fu(e, r) {
                var s = e;
                return (
                  s instanceof N && (s = s.value()),
                  Nr(
                    r,
                    function (e, r) {
                      return r.func.apply(r.thisArg, re([e], r.args));
                    },
                    s
                  )
                );
              }
              function ai(e, r, s) {
                var p = e.length;
                if (p < 2) return p ? ae(e[0]) : [];
                for (var b = -1, v = e2(p); ++b < p; )
                  for (var w = e[b], _ = -1; ++_ < p; )
                    _ != b && (v[b] = on(v[b] || w, e[_], r, s));
                return ae(tt(v, 1), r, s);
              }
              function hu(e, r, p) {
                for (
                  var b = -1, v = e.length, w = r.length, _ = {};
                  ++b < v;

                ) {
                  var P = b < w ? r[b] : s;
                  p(_, e[b], P);
                }
                return _;
              }
              function oi(e) {
                return Z(e) ? e : [];
              }
              function ci(e) {
                return "function" == typeof e ? e : ct;
              }
              function oe(e, r) {
                return rN(e) ? e : mi(e, r) ? [e] : iY(q(e));
              }
              function ce(e, r, p) {
                var b = e.length;
                return (p = p === s ? b : p), !r && p >= b ? e : At(e, r, p);
              }
              var iL =
                tU ||
                function (e) {
                  return tj.clearTimeout(e);
                };
              function pu(e, r) {
                if (r) return e.slice();
                var s = e.length,
                  p = tS ? tS(s) : new e.constructor(s);
                return e.copy(p), p;
              }
              function fi(e) {
                var r = new e.constructor(e.byteLength);
                return new tP(r).set(new tP(e)), r;
              }
              function du(e, r) {
                var s = r ? fi(e.buffer) : e.buffer;
                return new e.constructor(s, e.byteOffset, e.length);
              }
              function gu(e, r) {
                if (e !== r) {
                  var p = e !== s,
                    b = null === e,
                    v = e == e,
                    w = pt(e),
                    _ = r !== s,
                    P = null === r,
                    S = r == r,
                    I = pt(r);
                  if (
                    (!P && !I && !w && e > r) ||
                    (w && _ && S && !P && !I) ||
                    (b && _ && S) ||
                    (!p && S) ||
                    !v
                  )
                    return 1;
                  if (
                    (!b && !w && !I && e < r) ||
                    (I && p && v && !b && !w) ||
                    (P && p && v) ||
                    (!_ && v) ||
                    !S
                  )
                    return -1;
                }
                return 0;
              }
              function vu(e, r, s, p) {
                for (
                  var b = -1,
                    v = e.length,
                    w = s.length,
                    _ = -1,
                    P = r.length,
                    S = io(v - w, 0),
                    I = e2(P + S),
                    A = !p;
                  ++_ < P;

                )
                  I[_] = r[_];
                for (; ++b < w; ) (A || b < v) && (I[s[b]] = e[b]);
                for (; S--; ) I[_++] = e[b++];
                return I;
              }
              function _u(e, r, s, p) {
                for (
                  var b = -1,
                    v = e.length,
                    w = -1,
                    _ = s.length,
                    P = -1,
                    S = r.length,
                    I = io(v - _, 0),
                    A = e2(I + S),
                    R = !p;
                  ++b < I;

                )
                  A[b] = e[b];
                for (var C = b; ++P < S; ) A[C + P] = r[P];
                for (; ++w < _; ) (R || b < v) && (A[C + s[w]] = e[b++]);
                return A;
              }
              function ut(e, r) {
                var s = -1,
                  p = e.length;
                for (r || (r = e2(p)); ++s < p; ) r[s] = e[s];
                return r;
              }
              function Ft(e, r, p, b) {
                var v = !p;
                p || (p = {});
                for (var w = -1, _ = r.length; ++w < _; ) {
                  var P = r[w],
                    S = b ? b(p[P], e[P], P, p, e) : s;
                  S === s && (S = e[P]), v ? Yt(p, P, S) : an(p, P, S);
                }
                return p;
              }
              function Qn(e, r) {
                return function (s, p) {
                  var b = rN(s) ? uc : xf,
                    v = r ? r() : {};
                  return b(s, e, E(p, 2), v);
                };
              }
              function Fe(e) {
                return H(function (r, p) {
                  var b = -1,
                    v = p.length,
                    w = v > 1 ? p[v - 1] : s,
                    _ = v > 2 ? p[2] : s;
                  for (
                    w = e.length > 3 && "function" == typeof w ? (v--, w) : s,
                      _ && it(p[0], p[1], _) && ((w = v < 3 ? s : w), (v = 1)),
                      r = e7(r);
                    ++b < v;

                  ) {
                    var P = p[b];
                    P && e(r, P, b, w);
                  }
                  return r;
                });
              }
              function mu(e, r) {
                return function (s, p) {
                  if (null == s) return s;
                  if (!at(s)) return e(s, p);
                  for (
                    var b = s.length, v = r ? b : -1, w = e7(s);
                    (r ? v-- : ++v < b) && !1 !== p(w[v], v, w);

                  );
                  return s;
                };
              }
              function wu(e) {
                return function (r, s, p) {
                  for (var b = -1, v = e7(r), w = p(r), _ = w.length; _--; ) {
                    var P = w[e ? _ : ++b];
                    if (!1 === s(v[P], P, v)) break;
                  }
                  return r;
                };
              }
              function Pu(e) {
                return function (r) {
                  var p = Le((r = q(r))) ? St(r) : s,
                    b = p ? p[0] : r.charAt(0),
                    v = p ? ce(p, 1).join("") : r.slice(1);
                  return b[e]() + v;
                };
              }
              function We(e) {
                return function (r) {
                  return Nr(ma(_a(r).replace(tI, "")), e, "");
                };
              }
              function ln(e) {
                return function () {
                  var r = arguments;
                  switch (r.length) {
                    case 0:
                      return new e();
                    case 1:
                      return new e(r[0]);
                    case 2:
                      return new e(r[0], r[1]);
                    case 3:
                      return new e(r[0], r[1], r[2]);
                    case 4:
                      return new e(r[0], r[1], r[2], r[3]);
                    case 5:
                      return new e(r[0], r[1], r[2], r[3], r[4]);
                    case 6:
                      return new e(r[0], r[1], r[2], r[3], r[4], r[5]);
                    case 7:
                      return new e(r[0], r[1], r[2], r[3], r[4], r[5], r[6]);
                  }
                  var s = iq(e.prototype),
                    p = e.apply(s, r);
                  return K(p) ? p : s;
                };
              }
              function Cu(e) {
                return function (r, p, b) {
                  var v = e7(r);
                  if (!at(r)) {
                    var w = E(p, 3);
                    (r = k(r)),
                      (p = function (e) {
                        return w(v[e], e, v);
                      });
                  }
                  var _ = e(r, p, b);
                  return _ > -1 ? v[w ? r[_] : _] : s;
                };
              }
              function Au(e) {
                return Xt(function (r) {
                  var b = r.length,
                    v = b,
                    w = Pt.prototype.thru;
                  for (e && r.reverse(); v--; ) {
                    var _ = r[v];
                    if ("function" != typeof _) throw new to(p);
                    if (w && !P && "wrapper" == er(_)) var P = new Pt([], !0);
                  }
                  for (v = P ? v : b; ++v < b; ) {
                    var S = er((_ = r[v])),
                      I = "wrapper" == S ? i$(_) : s;
                    P =
                      I && wi(I[0]) && 424 == I[1] && !I[4].length && 1 == I[9]
                        ? P[er(I[0])].apply(P, I[3])
                        : 1 == _.length && wi(_)
                        ? P[S]()
                        : P.thru(_);
                  }
                  return function () {
                    var e = arguments,
                      s = e[0];
                    if (P && 1 == e.length && rN(s)) return P.plant(s).value();
                    for (var p = 0, v = b ? r[p].apply(this, e) : s; ++p < b; )
                      v = r[p].call(this, v);
                    return v;
                  };
                });
              }
              function Vn(e, r, p, b, v, w, _, P, S, I) {
                var A = 128 & r,
                  R = 1 & r,
                  C = 2 & r,
                  B = 24 & r,
                  j = 512 & r,
                  V = C ? s : ln(e);
                return function O() {
                  for (var J = arguments.length, W = e2(J), X = J; X--; )
                    W[X] = arguments[X];
                  if (B)
                    var et = Me(O),
                      es = (function (e, r) {
                        for (var s = e.length, p = 0; s--; ) e[s] === r && ++p;
                        return p;
                      })(W, et);
                  if (
                    (b && (W = vu(W, b, v, B)),
                    w && (W = _u(W, w, _, B)),
                    (J -= es),
                    B && J < I)
                  ) {
                    var eo = ie(W, et);
                    return Eu(e, r, Vn, O.placeholder, p, W, eo, P, S, I - J);
                  }
                  var ec = R ? p : this,
                    ed = C ? ec[e] : e;
                  return (
                    (J = W.length),
                    P
                      ? (W = (function (e, r) {
                          for (
                            var p = e.length, b = ic(r.length, p), v = ut(e);
                            b--;

                          ) {
                            var w = r[b];
                            e[b] = Qt(w, p) ? v[w] : s;
                          }
                          return e;
                        })(W, P))
                      : j && J > 1 && W.reverse(),
                    A && S < J && (W.length = S),
                    this &&
                      this !== tj &&
                      this instanceof O &&
                      (ed = V || ln(ed)),
                    ed.apply(ec, W)
                  );
                };
              }
              function Iu(e, r) {
                return function (s, p) {
                  var b, v;
                  return (
                    (b = r(p)),
                    (v = {}),
                    qt(s, function (r, s, p) {
                      e(v, b(r), s, p);
                    }),
                    v
                  );
                };
              }
              function kn(e, r) {
                return function (p, b) {
                  var v;
                  if (p === s && b === s) return r;
                  if ((p !== s && (v = p), b !== s)) {
                    if (v === s) return b;
                    "string" == typeof p || "string" == typeof b
                      ? ((p = lt(p)), (b = lt(b)))
                      : ((p = ou(p)), (b = ou(b))),
                      (v = e(p, b));
                  }
                  return v;
                };
              }
              function hi(e) {
                return Xt(function (r) {
                  return (
                    (r = z(r, ht(E()))),
                    H(function (s) {
                      var p = this;
                      return e(r, function (e) {
                        return ft(e, p, s);
                      });
                    })
                  );
                });
              }
              function jn(e, r) {
                var p = (r = r === s ? " " : lt(r)).length;
                if (p < 2) return p ? ii(r, e) : r;
                var b = ii(r, t8(e / He(r)));
                return Le(r) ? ce(St(b), 0, e).join("") : b.slice(0, e);
              }
              function xu(e) {
                return function (r, p, b) {
                  return (
                    b && "number" != typeof b && it(r, p, b) && (p = b = s),
                    (r = kt(r)),
                    p === s ? ((p = r), (r = 0)) : (p = kt(p)),
                    (b = b === s ? (r < p ? 1 : -1) : kt(b)),
                    (function (e, r, s, p) {
                      for (
                        var b = -1,
                          v = io(t8((r - e) / (s || 1)), 0),
                          w = e2(v);
                        v--;

                      )
                        (w[p ? v : ++b] = e), (e += s);
                      return w;
                    })(r, p, b, e)
                  );
                };
              }
              function tr(e) {
                return function (r, s) {
                  return (
                    ("string" == typeof r && "string" == typeof s) ||
                      ((r = xt(r)), (s = xt(s))),
                    e(r, s)
                  );
                };
              }
              function Eu(e, r, p, b, v, w, _, P, S, I) {
                var A = 8 & r,
                  R = A ? _ : s,
                  C = A ? s : _,
                  B = A ? w : s,
                  j = A ? s : w;
                (r |= A ? 32 : 64), 4 & (r &= ~(A ? 64 : 32)) || (r &= -4);
                var V = [e, r, v, B, R, j, C, P, S, I],
                  J = p.apply(s, V);
                return wi(e) && iV(J, V), (J.placeholder = b), qu(J, e, r);
              }
              function li(e) {
                var r = e9[e];
                return function (e, s) {
                  if (
                    ((e = xt(e)), (s = null == s ? 0 : ic(T(s), 292)) && t7(e))
                  ) {
                    var p = (q(e) + "e").split("e");
                    return +(
                      (p = (q(r(p[0] + "e" + (+p[1] + s))) + "e").split(
                        "e"
                      ))[0] +
                      "e" +
                      (+p[1] - s)
                    );
                  }
                  return r(e);
                };
              }
              var ij =
                iy && 1 / Rn(new iy([, -0]))[1] == w
                  ? function (e) {
                      return new iy(e);
                    }
                  : Di;
              function yu(e) {
                return function (r) {
                  var s,
                    p,
                    b = iH(r);
                  return b == V
                    ? Br(r)
                    : b == es
                    ? ((s = -1),
                      (p = Array(r.size)),
                      r.forEach(function (e) {
                        p[++s] = [e, e];
                      }),
                      p)
                    : z(e(r), function (e) {
                        return [e, r[e]];
                      });
                };
              }
              function Zt(e, r, b, w, _, P, S, I) {
                var A = 2 & r;
                if (!A && "function" != typeof e) throw new to(p);
                var R = w ? w.length : 0;
                if (
                  (R || ((r &= -97), (w = _ = s)),
                  (S = S === s ? S : io(T(S), 0)),
                  (I = I === s ? I : T(I)),
                  (R -= _ ? _.length : 0),
                  64 & r)
                ) {
                  var C = w,
                    B = _;
                  w = _ = s;
                }
                var j = A ? s : i$(e),
                  V = [e, r, b, w, _, C, B, P, S, I];
                if (
                  (j &&
                    (function (e, r) {
                      var s = e[1],
                        p = r[1],
                        b = s | p,
                        w = b < 131,
                        _ =
                          (128 == p && 8 == s) ||
                          (128 == p && 256 == s && e[7].length <= r[8]) ||
                          (384 == p && r[7].length <= r[8] && 8 == s);
                      if (w || _) {
                        1 & p && ((e[2] = r[2]), (b |= 1 & s ? 0 : 4));
                        var P = r[3];
                        if (P) {
                          var S = e[3];
                          (e[3] = S ? vu(S, P, r[4]) : P),
                            (e[4] = S ? ie(e[3], v) : r[4]);
                        }
                        (P = r[5]) &&
                          ((S = e[5]),
                          (e[5] = S ? _u(S, P, r[6]) : P),
                          (e[6] = S ? ie(e[5], v) : r[6])),
                          (P = r[7]) && (e[7] = P),
                          128 & p &&
                            (e[8] = null == e[8] ? r[8] : ic(e[8], r[8])),
                          null == e[9] && (e[9] = r[9]),
                          (e[0] = r[0]),
                          (e[1] = b);
                      }
                    })(V, j),
                  (e = V[0]),
                  (r = V[1]),
                  (b = V[2]),
                  (w = V[3]),
                  (_ = V[4]),
                  (I = V[9] =
                    V[9] === s ? (A ? 0 : e.length) : io(V[9] - R, 0)) ||
                    !(24 & r) ||
                    (r &= -25),
                  r && 1 != r)
                )
                  8 == r || 16 == r
                    ? ((J = e),
                      (W = r),
                      (X = I),
                      (et = ln(J)),
                      (ev = function u() {
                        for (
                          var e = arguments.length, r = e2(e), p = e, b = Me(u);
                          p--;

                        )
                          r[p] = arguments[p];
                        var v =
                          e < 3 && r[0] !== b && r[e - 1] !== b ? [] : ie(r, b);
                        return (e -= v.length) < X
                          ? Eu(J, W, Vn, u.placeholder, s, r, v, s, s, X - e)
                          : ft(
                              this && this !== tj && this instanceof u ? et : J,
                              this,
                              r
                            );
                      }))
                    : (32 != r && 33 != r) || _.length
                    ? (ev = Vn.apply(s, V))
                    : ((es = e),
                      (eo = r),
                      (ec = b),
                      (ed = w),
                      (eh = 1 & eo),
                      (ef = ln(es)),
                      (ev = function c() {
                        for (
                          var e = -1,
                            r = arguments.length,
                            s = -1,
                            p = ed.length,
                            b = e2(p + r),
                            v =
                              this && this !== tj && this instanceof c
                                ? ef
                                : es;
                          ++s < p;

                        )
                          b[s] = ed[s];
                        for (; r--; ) b[s++] = arguments[++e];
                        return ft(v, eh ? ec : this, b);
                      }));
                else
                  var J,
                    W,
                    X,
                    et,
                    es,
                    eo,
                    ec,
                    ed,
                    eh,
                    ef,
                    el,
                    ep,
                    eb,
                    eg,
                    em,
                    ev =
                      ((el = e),
                      (ep = r),
                      (eb = b),
                      (eg = 1 & ep),
                      (em = ln(el)),
                      function o() {
                        return (
                          this && this !== tj && this instanceof o ? em : el
                        ).apply(eg ? eb : this, arguments);
                      });
                return qu((j ? iD : iV)(ev, V), e, r);
              }
              function Su(e, r, p, b) {
                return e === s || (Rt(e, th[p]) && !tp.call(b, p)) ? r : e;
              }
              function Ou(e, r, p, b, v, w) {
                return (
                  K(e) &&
                    K(r) &&
                    (w.set(r, e), Yn(e, r, s, Ou, w), w.delete(r)),
                  e
                );
              }
              function ah(e) {
                return gn(e) ? s : e;
              }
              function Ru(e, r, p, b, v, w) {
                var _ = 1 & p,
                  P = e.length,
                  S = r.length;
                if (P != S && !(_ && S > P)) return !1;
                var I = w.get(e),
                  A = w.get(r);
                if (I && A) return I == r && A == e;
                var R = -1,
                  C = !0,
                  B = 2 & p ? new ve() : s;
                for (w.set(e, r), w.set(r, e); ++R < P; ) {
                  var j = e[R],
                    V = r[R];
                  if (b) var J = _ ? b(V, j, R, r, e, w) : b(j, V, R, e, r, w);
                  if (J !== s) {
                    if (J) continue;
                    C = !1;
                    break;
                  }
                  if (B) {
                    if (
                      !$r(r, function (e, r) {
                        if (!tn(B, r) && (j === e || v(j, e, p, b, w)))
                          return B.push(r);
                      })
                    ) {
                      C = !1;
                      break;
                    }
                  } else if (!(j === V || v(j, V, p, b, w))) {
                    C = !1;
                    break;
                  }
                }
                return w.delete(e), w.delete(r), C;
              }
              function Xt(e) {
                return iG(Nu(e, s, zu), e + "");
              }
              function pi(e) {
                return Xs(e, k, iF);
              }
              function di(e) {
                return Xs(e, ot, iK);
              }
              var i$ = iM
                ? function (e) {
                    return iM.get(e);
                  }
                : Di;
              function er(e) {
                for (
                  var r = e.name + "",
                    s = iP[r],
                    p = tp.call(iP, r) ? s.length : 0;
                  p--;

                ) {
                  var b = s[p],
                    v = b.func;
                  if (null == v || v == e) return b.name;
                }
                return r;
              }
              function Me(e) {
                return (tp.call(a, "placeholder") ? a : e).placeholder;
              }
              function E() {
                var e = a.iteratee || Li;
                return (
                  (e = e === Li ? ks : e),
                  arguments.length ? e(arguments[0], arguments[1]) : e
                );
              }
              function nr(e, r) {
                var s,
                  p = e.__data__;
                return (
                  "string" == (s = typeof r) ||
                  "number" == s ||
                  "symbol" == s ||
                  "boolean" == s
                    ? "__proto__" !== r
                    : null === r
                )
                  ? p["string" == typeof r ? "string" : "hash"]
                  : p.map;
              }
              function vi(e) {
                for (var r = k(e), s = r.length; s--; ) {
                  var p = r[s],
                    b = e[p];
                  r[s] = [p, b, b == b && !K(b)];
                }
                return r;
              }
              function we(e, r) {
                var p = null == e ? s : e[r];
                return Vs(p) ? p : s;
              }
              var iF = t4
                  ? function (e) {
                      return null == e
                        ? []
                        : ne(t4((e = e7(e))), function (r) {
                            return tO.call(e, r);
                          });
                    }
                  : Ni,
                iK = t4
                  ? function (e) {
                      for (var r = []; e; ) re(r, iF(e)), (e = tx(e));
                      return r;
                    }
                  : Ni,
                iH = rt;
              function Tu(e, r, s) {
                r = oe(r, e);
                for (var p = -1, b = r.length, v = !1; ++p < b; ) {
                  var w = Wt(r[p]);
                  if (!(v = null != e && s(e, w))) break;
                  e = e[w];
                }
                return v || ++p != b
                  ? v
                  : !!(b = null == e ? 0 : e.length) &&
                      cr(b) &&
                      Qt(w, b) &&
                      (rN(e) || rA(e));
              }
              function Lu(e) {
                return "function" != typeof e.constructor || pn(e)
                  ? {}
                  : iq(tx(e));
              }
              function vh(e) {
                return rN(e) || rA(e) || !!(tL && e && e[tL]);
              }
              function Qt(e, r) {
                var s = typeof e;
                return (
                  !!(r = r ?? 9007199254740991) &&
                  ("number" == s || ("symbol" != s && eZ.test(e))) &&
                  e > -1 &&
                  e % 1 == 0 &&
                  e < r
                );
              }
              function it(e, r, s) {
                if (!K(s)) return !1;
                var p = typeof r;
                return (
                  ("number" == p
                    ? !!(at(s) && Qt(r, s.length))
                    : "string" == p && r in s) && Rt(s[r], e)
                );
              }
              function mi(e, r) {
                if (rN(e)) return !1;
                var s = typeof e;
                return (
                  !!(
                    "number" == s ||
                    "symbol" == s ||
                    "boolean" == s ||
                    null == e ||
                    pt(e)
                  ) ||
                  eT.test(e) ||
                  !eq.test(e) ||
                  (null != r && e in e7(r))
                );
              }
              function wi(e) {
                var r = er(e),
                  s = a[r];
                if ("function" != typeof s || !(r in N.prototype)) return !1;
                if (e === s) return !0;
                var p = i$(s);
                return !!p && e === p[0];
              }
              ((ib && iH(new ib(new ArrayBuffer(1))) != ef) ||
                (ig && iH(new ig()) != V) ||
                (im && iH(im.resolve()) != X) ||
                (iy && iH(new iy()) != es) ||
                (iw && iH(new iw()) != ed)) &&
                (iH = function (e) {
                  var r = rt(e),
                    p = r == W ? e.constructor : s,
                    b = p ? Pe(p) : "";
                  if (b)
                    switch (b) {
                      case iS:
                        return ef;
                      case iI:
                        return V;
                      case iE:
                        return X;
                      case ix:
                        return es;
                      case iA:
                        return ed;
                    }
                  return r;
                });
              var iU = tf ? Vt : $i;
              function pn(e) {
                var r = e && e.constructor;
                return e === (("function" == typeof r && r.prototype) || th);
              }
              function Du(e, r) {
                return function (p) {
                  return null != p && p[e] === r && (r !== s || e in e7(p));
                };
              }
              function Nu(e, r, p) {
                return (
                  (r = io(r === s ? e.length - 1 : r, 0)),
                  function () {
                    for (
                      var s = arguments,
                        b = -1,
                        v = io(s.length - r, 0),
                        w = e2(v);
                      ++b < v;

                    )
                      w[b] = s[r + b];
                    b = -1;
                    for (var _ = e2(r + 1); ++b < r; ) _[b] = s[b];
                    return (_[r] = p(w)), ft(e, this, _);
                  }
                );
              }
              function $u(e, r) {
                return r.length < 2 ? e : me(e, At(r, 0, -1));
              }
              function Pi(e, r) {
                if (
                  !("constructor" === r && "function" == typeof e[r]) &&
                  "__proto__" != r
                )
                  return e[r];
              }
              var iV = Fu(iD),
                iJ =
                  t2 ||
                  function (e, r) {
                    return tj.setTimeout(e, r);
                  },
                iG = Fu(iz);
              function qu(e, r, s) {
                var p,
                  b,
                  v = r + "";
                return iG(
                  e,
                  (function (e, r) {
                    var s = r.length;
                    if (!s) return e;
                    var p = s - 1;
                    return (
                      (r[p] = (s > 1 ? "& " : "") + r[p]),
                      (r = r.join(s > 2 ? ", " : " ")),
                      e.replace(
                        eL,
                        `{
/* [wrapped with ` +
                          r +
                          `] */
`
                      )
                    );
                  })(
                    v,
                    ((p = (b = v.match(ej)) ? b[1].split(e$) : []),
                    mt(P, function (e) {
                      var r = "_." + e[0];
                      s & e[1] && !Sn(p, r) && p.push(r);
                    }),
                    p.sort())
                  )
                );
              }
              function Fu(e) {
                var r = 0,
                  p = 0;
                return function () {
                  var b = id(),
                    v = 16 - (b - p);
                  if (((p = b), v > 0)) {
                    if (++r >= 800) return arguments[0];
                  } else r = 0;
                  return e.apply(s, arguments);
                };
              }
              function rr(e, r) {
                var p = -1,
                  b = e.length,
                  v = b - 1;
                for (r = r === s ? b : r; ++p < r; ) {
                  var w = ri(p, v),
                    _ = e[w];
                  (e[w] = e[p]), (e[p] = _);
                }
                return (e.length = r), e;
              }
              var iY =
                ((e1 = (ez = ar(
                  function (e) {
                    var r = [];
                    return (
                      46 === e.charCodeAt(0) && r.push(""),
                      e.replace(eB, function (e, s, p, b) {
                        r.push(p ? b.replace(eH, "$1") : s || e);
                      }),
                      r
                    );
                  },
                  function (e) {
                    return 500 === e1.size && e1.clear(), e;
                  }
                )).cache),
                ez);
              function Wt(e) {
                if ("string" == typeof e || pt(e)) return e;
                var r = e + "";
                return "0" == r && 1 / e == -w ? "-0" : r;
              }
              function Pe(e) {
                if (null != e) {
                  try {
                    return tl.call(e);
                  } catch {}
                  try {
                    return e + "";
                  } catch {}
                }
                return "";
              }
              function Mu(e) {
                if (e instanceof N) return e.clone();
                var r = new Pt(e.__wrapped__, e.__chain__);
                return (
                  (r.__actions__ = ut(e.__actions__)),
                  (r.__index__ = e.__index__),
                  (r.__values__ = e.__values__),
                  r
                );
              }
              var iW = H(function (e, r) {
                  return Z(e) ? on(e, tt(r, 1, Z, !0)) : [];
                }),
                iZ = H(function (e, r) {
                  var p = It(r);
                  return (
                    Z(p) && (p = s), Z(e) ? on(e, tt(r, 1, Z, !0), E(p, 2)) : []
                  );
                }),
                iQ = H(function (e, r) {
                  var p = It(r);
                  return (
                    Z(p) && (p = s), Z(e) ? on(e, tt(r, 1, Z, !0), s, p) : []
                  );
                });
              function Bu(e, r, s) {
                var p = null == e ? 0 : e.length;
                if (!p) return -1;
                var b = null == s ? 0 : T(s);
                return b < 0 && (b = io(p + b, 0)), On(e, E(r, 3), b);
              }
              function Gu(e, r, p) {
                var b = null == e ? 0 : e.length;
                if (!b) return -1;
                var v = b - 1;
                return (
                  p !== s &&
                    ((v = T(p)), (v = p < 0 ? io(b + v, 0) : ic(v, b - 1))),
                  On(e, E(r, 3), v, !0)
                );
              }
              function zu(e) {
                return (null == e ? 0 : e.length) ? tt(e, 1) : [];
              }
              function Ku(e) {
                return e && e.length ? e[0] : s;
              }
              var iX = H(function (e) {
                  var r = z(e, oi);
                  return r.length && r[0] === e[0] ? kr(r) : [];
                }),
                i0 = H(function (e) {
                  var r = It(e),
                    p = z(e, oi);
                  return (
                    r === It(p) ? (r = s) : p.pop(),
                    p.length && p[0] === e[0] ? kr(p, E(r, 2)) : []
                  );
                }),
                i1 = H(function (e) {
                  var r = It(e),
                    p = z(e, oi);
                  return (
                    (r = "function" == typeof r ? r : s) && p.pop(),
                    p.length && p[0] === e[0] ? kr(p, s, r) : []
                  );
                });
              function It(e) {
                var r = null == e ? 0 : e.length;
                return r ? e[r - 1] : s;
              }
              var i6 = H(Ju);
              function Ju(e, r) {
                return e && e.length && r && r.length ? ni(e, r) : e;
              }
              var i2 = Xt(function (e, r) {
                var s = null == e ? 0 : e.length,
                  p = Zr(e, r);
                return (
                  su(
                    e,
                    z(r, function (e) {
                      return Qt(e, s) ? +e : e;
                    }).sort(gu)
                  ),
                  p
                );
              });
              function Ai(e) {
                return null == e ? e : ip.call(e);
              }
              var i8 = H(function (e) {
                  return ae(tt(e, 1, Z, !0));
                }),
                i3 = H(function (e) {
                  var r = It(e);
                  return Z(r) && (r = s), ae(tt(e, 1, Z, !0), E(r, 2));
                }),
                i4 = H(function (e) {
                  var r = It(e);
                  return (
                    (r = "function" == typeof r ? r : s),
                    ae(tt(e, 1, Z, !0), s, r)
                  );
                });
              function Ii(e) {
                if (!(e && e.length)) return [];
                var r = 0;
                return (
                  (e = ne(e, function (e) {
                    if (Z(e)) return (r = io(e.length, r)), !0;
                  })),
                  Wr(r, function (r) {
                    return z(e, Ur(r));
                  })
                );
              }
              function Yu(e, r) {
                if (!(e && e.length)) return [];
                var p = Ii(e);
                return null == r
                  ? p
                  : z(p, function (e) {
                      return ft(r, s, e);
                    });
              }
              var i9 = H(function (e, r) {
                  return Z(e) ? on(e, r) : [];
                }),
                i7 = H(function (e) {
                  return ai(ne(e, Z));
                }),
                i5 = H(function (e) {
                  var r = It(e);
                  return Z(r) && (r = s), ai(ne(e, Z), E(r, 2));
                }),
                rn = H(function (e) {
                  var r = It(e);
                  return (
                    (r = "function" == typeof r ? r : s), ai(ne(e, Z), s, r)
                  );
                }),
                rs = H(Ii),
                ra = H(function (e) {
                  var r = e.length,
                    p = r > 1 ? e[r - 1] : s;
                  return (
                    (p = "function" == typeof p ? (e.pop(), p) : s), Yu(e, p)
                  );
                });
              function Zu(e) {
                var r = a(e);
                return (r.__chain__ = !0), r;
              }
              function ir(e, r) {
                return r(e);
              }
              var ro = Xt(function (e) {
                  var r = e.length,
                    p = r ? e[0] : 0,
                    b = this.__wrapped__,
                    u = function (r) {
                      return Zr(r, e);
                    };
                  return !(r > 1) &&
                    !this.__actions__.length &&
                    b instanceof N &&
                    Qt(p)
                    ? ((b = b.slice(p, +p + (r ? 1 : 0))).__actions__.push({
                        func: ir,
                        args: [u],
                        thisArg: s,
                      }),
                      new Pt(b, this.__chain__).thru(function (e) {
                        return r && !e.length && e.push(s), e;
                      }))
                    : this.thru(u);
                }),
                rc = Qn(function (e, r, s) {
                  tp.call(e, s) ? ++e[s] : Yt(e, s, 1);
                }),
                rd = Cu(Bu),
                rh = Cu(Gu);
              function Xu(e, r) {
                return (rN(e) ? mt : iT)(e, E(r, 3));
              }
              function Qu(e, r) {
                return (
                  rN(e)
                    ? function (e, r) {
                        for (
                          var s = null == e ? 0 : e.length;
                          s-- && !1 !== r(e[s], s, e);

                        );
                        return e;
                      }
                    : iB
                )(e, E(r, 3));
              }
              var rf = Qn(function (e, r, s) {
                  tp.call(e, s) ? e[s].push(r) : Yt(e, s, [r]);
                }),
                rl = H(function (e, r, s) {
                  var p = -1,
                    b = "function" == typeof r,
                    v = at(e) ? e2(e.length) : [];
                  return (
                    iT(e, function (e) {
                      v[++p] = b ? ft(r, e, s) : cn(e, r, s);
                    }),
                    v
                  );
                }),
                rp = Qn(function (e, r, s) {
                  Yt(e, s, r);
                });
              function sr(e, r) {
                return (rN(e) ? z : js)(e, E(r, 3));
              }
              var rb = Qn(
                  function (e, r, s) {
                    e[s ? 0 : 1].push(r);
                  },
                  function () {
                    return [[], []];
                  }
                ),
                rg = H(function (e, r) {
                  if (null == e) return [];
                  var s = r.length;
                  return (
                    s > 1 && it(e, r[0], r[1])
                      ? (r = [])
                      : s > 2 && it(r[0], r[1], r[2]) && (r = [r[0]]),
                    ru(e, tt(r, 1), [])
                  );
                }),
                rm =
                  tQ ||
                  function () {
                    return tj.Date.now();
                  };
              function Vu(e, r, p) {
                return (
                  (r = p ? s : r),
                  (r = e && null == r ? e.length : r),
                  Zt(e, 128, s, s, s, s, r)
                );
              }
              function ku(e, r) {
                var b;
                if ("function" != typeof r) throw new to(p);
                return (
                  (e = T(e)),
                  function () {
                    return (
                      --e > 0 && (b = r.apply(this, arguments)),
                      e <= 1 && (r = s),
                      b
                    );
                  }
                );
              }
              var rv = H(function (e, r, s) {
                  var p = 1;
                  if (s.length) {
                    var b = ie(s, Me(rv));
                    p |= 32;
                  }
                  return Zt(e, p, r, s, b);
                }),
                ry = H(function (e, r, s) {
                  var p = 3;
                  if (s.length) {
                    var b = ie(s, Me(ry));
                    p |= 32;
                  }
                  return Zt(r, p, e, s, b);
                });
              function na(e, r, b) {
                var v,
                  w,
                  _,
                  P,
                  S,
                  I,
                  A = 0,
                  R = !1,
                  C = !1,
                  B = !0;
                if ("function" != typeof e) throw new to(p);
                function x(r) {
                  var p = v,
                    b = w;
                  return (v = w = s), (A = r), (P = e.apply(b, p));
                }
                function O(e) {
                  var p = e - I,
                    b = e - A;
                  return I === s || p >= r || p < 0 || (C && b >= _);
                }
                function D() {
                  var e,
                    s,
                    p,
                    b = rm();
                  if (O(b)) return $(b);
                  S = iJ(
                    D,
                    ((e = b - I),
                    (s = b - A),
                    (p = r - e),
                    C ? ic(p, _ - s) : p)
                  );
                }
                function $(e) {
                  return (S = s), B && v ? x(e) : ((v = w = s), P);
                }
                function gt() {
                  var e,
                    p = rm(),
                    b = O(p);
                  if (((v = arguments), (w = this), (I = p), b)) {
                    if (S === s)
                      return (A = e = I), (S = iJ(D, r)), R ? x(e) : P;
                    if (C) return iL(S), (S = iJ(D, r)), x(I);
                  }
                  return S === s && (S = iJ(D, r)), P;
                }
                return (
                  (r = xt(r) || 0),
                  K(b) &&
                    ((R = !!b.leading),
                    (_ = (C = "maxWait" in b) ? io(xt(b.maxWait) || 0, r) : _),
                    (B = "trailing" in b ? !!b.trailing : B)),
                  (gt.cancel = function () {
                    S !== s && iL(S), (A = 0), (v = I = w = S = s);
                  }),
                  (gt.flush = function () {
                    return S === s ? P : $(rm());
                  }),
                  gt
                );
              }
              var rw = H(function (e, r) {
                  return Ks(e, 1, r);
                }),
                r_ = H(function (e, r, s) {
                  return Ks(e, xt(r) || 0, s);
                });
              function ar(e, r) {
                if (
                  "function" != typeof e ||
                  (null != r && "function" != typeof r)
                )
                  throw new to(p);
                var n = function () {
                  var s = arguments,
                    p = r ? r.apply(this, s) : s[0],
                    b = n.cache;
                  if (b.has(p)) return b.get(p);
                  var v = e.apply(this, s);
                  return (n.cache = b.set(p, v) || b), v;
                };
                return (n.cache = new (ar.Cache || Jt)()), n;
              }
              function or(e) {
                if ("function" != typeof e) throw new to(p);
                return function () {
                  var r = arguments;
                  switch (r.length) {
                    case 0:
                      return !e.call(this);
                    case 1:
                      return !e.call(this, r[0]);
                    case 2:
                      return !e.call(this, r[0], r[1]);
                    case 3:
                      return !e.call(this, r[0], r[1], r[2]);
                  }
                  return !e.apply(this, r);
                };
              }
              ar.Cache = Jt;
              var rM = H(function (e, r) {
                  var s = (r =
                    1 == r.length && rN(r[0])
                      ? z(r[0], ht(E()))
                      : z(tt(r, 1), ht(E()))).length;
                  return H(function (p) {
                    for (var b = -1, v = ic(p.length, s); ++b < v; )
                      p[b] = r[b].call(this, p[b]);
                    return ft(e, this, p);
                  });
                }),
                rP = H(function (e, r) {
                  var p = ie(r, Me(rP));
                  return Zt(e, 32, s, r, p);
                }),
                rS = H(function (e, r) {
                  var p = ie(r, Me(rS));
                  return Zt(e, 64, s, r, p);
                }),
                rI = Xt(function (e, r) {
                  return Zt(e, 256, s, s, s, r);
                });
              function Rt(e, r) {
                return e === r || (e != e && r != r);
              }
              var rE = tr(Vr),
                rx = tr(function (e, r) {
                  return e >= r;
                }),
                rA = Qs(
                  (function () {
                    return arguments;
                  })()
                )
                  ? Qs
                  : function (e) {
                      return (
                        Y(e) && tp.call(e, "callee") && !tO.call(e, "callee")
                      );
                    },
                rN = e2.isArray,
                rR = tV
                  ? ht(tV)
                  : function (e) {
                      return Y(e) && rt(e) == eh;
                    };
              function at(e) {
                return null != e && cr(e.length) && !Vt(e);
              }
              function Z(e) {
                return Y(e) && at(e);
              }
              var rC = t9 || $i,
                rq = tJ
                  ? ht(tJ)
                  : function (e) {
                      return Y(e) && rt(e) == R;
                    };
              function yi(e) {
                if (!Y(e)) return !1;
                var r = rt(e);
                return (
                  r == C ||
                  "[object DOMException]" == r ||
                  ("string" == typeof e.message &&
                    "string" == typeof e.name &&
                    !gn(e))
                );
              }
              function Vt(e) {
                if (!K(e)) return !1;
                var r = rt(e);
                return (
                  r == B ||
                  r == j ||
                  "[object AsyncFunction]" == r ||
                  "[object Proxy]" == r
                );
              }
              function ia(e) {
                return "number" == typeof e && e == T(e);
              }
              function cr(e) {
                return (
                  "number" == typeof e &&
                  e > -1 &&
                  e % 1 == 0 &&
                  e <= 9007199254740991
                );
              }
              function K(e) {
                var r = typeof e;
                return null != e && ("object" == r || "function" == r);
              }
              function Y(e) {
                return null != e && "object" == typeof e;
              }
              var rT = tG
                ? ht(tG)
                : function (e) {
                    return Y(e) && iH(e) == V;
                  };
              function ua(e) {
                return "number" == typeof e || (Y(e) && rt(e) == J);
              }
              function gn(e) {
                if (!Y(e) || rt(e) != W) return !1;
                var r = tx(e);
                if (null === r) return !0;
                var s = tp.call(r, "constructor") && r.constructor;
                return (
                  "function" == typeof s && s instanceof s && tl.call(s) == tv
                );
              }
              var rB = tY
                  ? ht(tY)
                  : function (e) {
                      return Y(e) && rt(e) == et;
                    },
                rO = tW
                  ? ht(tW)
                  : function (e) {
                      return Y(e) && iH(e) == es;
                    };
              function fr(e) {
                return "string" == typeof e || (!rN(e) && Y(e) && rt(e) == eo);
              }
              function pt(e) {
                return "symbol" == typeof e || (Y(e) && rt(e) == ec);
              }
              var rk = tZ
                  ? ht(tZ)
                  : function (e) {
                      return Y(e) && cr(e.length) && !!tT[rt(e)];
                    },
                rD = tr(ei),
                rz = tr(function (e, r) {
                  return e <= r;
                });
              function oa(e) {
                if (!e) return [];
                if (at(e)) return fr(e) ? St(e) : ut(e);
                if (t$ && e[t$])
                  return (function (e) {
                    for (var r, s = []; !(r = e.next()).done; ) s.push(r.value);
                    return s;
                  })(e[t$]());
                var r = iH(e);
                return (r == V ? Br : r == es ? Rn : Ge)(e);
              }
              function kt(e) {
                return e
                  ? (e = xt(e)) === w || e === -w
                    ? (e < 0 ? -1 : 1) * 17976931348623157e292
                    : e == e
                    ? e
                    : 0
                  : 0 === e
                  ? e
                  : 0;
              }
              function T(e) {
                var r = kt(e),
                  s = r % 1;
                return r == r ? (s ? r - s : r) : 0;
              }
              function ca(e) {
                return e ? _e(T(e), 0, 4294967295) : 0;
              }
              function xt(e) {
                if ("number" == typeof e) return e;
                if (pt(e)) return _;
                if (K(e)) {
                  var r = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = K(r) ? r + "" : r;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = Os(e);
                var s = eG.test(e);
                return s || eW.test(e)
                  ? tD(e.slice(2), s ? 2 : 8)
                  : eJ.test(e)
                  ? _
                  : +e;
              }
              function fa(e) {
                return Ft(e, ot(e));
              }
              function q(e) {
                return null == e ? "" : lt(e);
              }
              var rL = Fe(function (e, r) {
                  if (pn(r) || at(r)) {
                    Ft(r, k(r), e);
                    return;
                  }
                  for (var s in r) tp.call(r, s) && an(e, s, r[s]);
                }),
                rj = Fe(function (e, r) {
                  Ft(r, ot(r), e);
                }),
                r$ = Fe(function (e, r, s, p) {
                  Ft(r, ot(r), e, p);
                }),
                rF = Fe(function (e, r, s, p) {
                  Ft(r, k(r), e, p);
                }),
                rK = Xt(Zr),
                rH = H(function (e, r) {
                  e = e7(e);
                  var p = -1,
                    b = r.length,
                    v = b > 2 ? r[2] : s;
                  for (v && it(r[0], r[1], v) && (b = 1); ++p < b; )
                    for (
                      var w = r[p], _ = ot(w), P = -1, S = _.length;
                      ++P < S;

                    ) {
                      var I = _[P],
                        A = e[I];
                      (A === s || (Rt(A, th[I]) && !tp.call(e, I))) &&
                        (e[I] = w[I]);
                    }
                  return e;
                }),
                rU = H(function (e) {
                  return e.push(s, Ou), ft(rW, s, e);
                });
              function Oi(e, r, p) {
                var b = null == e ? s : me(e, r);
                return b === s ? p : b;
              }
              function Ri(e, r) {
                return null != e && Tu(e, r, bf);
              }
              var rV = Iu(function (e, r, s) {
                  null != r &&
                    "function" != typeof r.toString &&
                    (r = tm.call(r)),
                    (e[r] = s);
                }, Ti(ct)),
                rJ = Iu(function (e, r, s) {
                  null != r &&
                    "function" != typeof r.toString &&
                    (r = tm.call(r)),
                    tp.call(e, r) ? e[r].push(s) : (e[r] = [s]);
                }, E),
                rG = H(cn);
              function k(e) {
                return at(e) ? Ms(e) : ti(e);
              }
              function ot(e) {
                return at(e)
                  ? Ms(e, !0)
                  : (function (e) {
                      if (!K(e))
                        return (function (e) {
                          var r = [];
                          if (null != e) for (var s in e7(e)) r.push(s);
                          return r;
                        })(e);
                      var r = pn(e),
                        s = [];
                      for (var p in e)
                        ("constructor" == p && (r || !tp.call(e, p))) ||
                          s.push(p);
                      return s;
                    })(e);
              }
              var rY = Fe(function (e, r, s) {
                  Yn(e, r, s);
                }),
                rW = Fe(function (e, r, s, p) {
                  Yn(e, r, s, p);
                }),
                rZ = Xt(function (e, r) {
                  var s = {};
                  if (null == e) return s;
                  var p = !1;
                  (r = z(r, function (r) {
                    return (r = oe(r, e)), p || (p = r.length > 1), r;
                  })),
                    Ft(e, di(e), s),
                    p && (s = Ct(s, 7, ah));
                  for (var b = r.length; b--; ) ui(s, r[b]);
                  return s;
                }),
                rQ = Xt(function (e, r) {
                  return null == e
                    ? {}
                    : iu(e, r, function (r, s) {
                        return Ri(e, s);
                      });
                });
              function pa(e, r) {
                if (null == e) return {};
                var s = z(di(e), function (e) {
                  return [e];
                });
                return (
                  (r = E(r)),
                  iu(e, s, function (e, s) {
                    return r(e, s[0]);
                  })
                );
              }
              var rX = yu(k),
                r0 = yu(ot);
              function Ge(e) {
                return null == e ? [] : Mr(e, k(e));
              }
              var r1 = We(function (e, r, s) {
                return (r = r.toLowerCase()), e + (s ? va(r) : r);
              });
              function va(e) {
                return r7(q(e).toLowerCase());
              }
              function _a(e) {
                return (e = q(e)) && e.replace(eQ, tX).replace(tE, "");
              }
              var r6 = We(function (e, r, s) {
                  return e + (s ? "-" : "") + r.toLowerCase();
                }),
                r2 = We(function (e, r, s) {
                  return e + (s ? " " : "") + r.toLowerCase();
                }),
                r8 = Pu("toLowerCase"),
                r3 = We(function (e, r, s) {
                  return e + (s ? "_" : "") + r.toLowerCase();
                }),
                r4 = We(function (e, r, s) {
                  return e + (s ? " " : "") + r7(r);
                }),
                r9 = We(function (e, r, s) {
                  return e + (s ? " " : "") + r.toUpperCase();
                }),
                r7 = Pu("toUpperCase");
              function ma(e, r, p) {
                var b;
                return (
                  (e = q(e)),
                  (r = p ? s : r) === s
                    ? ((b = e), tR.test(b))
                      ? e.match(tA) || []
                      : e.match(eF) || []
                    : e.match(r) || []
                );
              }
              var r5 = H(function (e, r) {
                  try {
                    return ft(e, s, r);
                  } catch (e) {
                    return yi(e) ? e : new e3(e);
                  }
                }),
                nt = Xt(function (e, r) {
                  return (
                    mt(r, function (r) {
                      Yt(e, (r = Wt(r)), rv(e[r], e));
                    }),
                    e
                  );
                });
              function Ti(e) {
                return function () {
                  return e;
                };
              }
              var nn = Au(),
                ns = Au(!0);
              function ct(e) {
                return e;
              }
              function Li(e) {
                return ks("function" == typeof e ? e : Ct(e, 1));
              }
              var no = H(function (e, r) {
                  return function (s) {
                    return cn(s, e, r);
                  };
                }),
                nc = H(function (e, r) {
                  return function (s) {
                    return cn(e, s, r);
                  };
                });
              function Hi(e, r, s) {
                var p = k(r),
                  b = Jn(r, p);
                null != s ||
                  (K(r) && (b.length || !p.length)) ||
                  ((s = r), (r = e), (e = this), (b = Jn(r, k(r))));
                var v = !(K(s) && "chain" in s) || !!s.chain,
                  w = Vt(e);
                return (
                  mt(b, function (s) {
                    var p = r[s];
                    (e[s] = p),
                      w &&
                        (e.prototype[s] = function () {
                          var r = this.__chain__;
                          if (v || r) {
                            var s = e(this.__wrapped__);
                            return (
                              (s.__actions__ = ut(this.__actions__)).push({
                                func: p,
                                args: arguments,
                                thisArg: e,
                              }),
                              (s.__chain__ = r),
                              s
                            );
                          }
                          return p.apply(e, re([this.value()], arguments));
                        });
                  }),
                  e
                );
              }
              function Di() {}
              var nd = hi(z),
                nh = hi(Is),
                nf = hi($r);
              function Pa(e) {
                return mi(e)
                  ? Ur(Wt(e))
                  : function (r) {
                      return me(r, e);
                    };
              }
              var nl = xu(),
                np = xu(!0);
              function Ni() {
                return [];
              }
              function $i() {
                return !1;
              }
              var nb = kn(function (e, r) {
                  return e + r;
                }, 0),
                ng = li("ceil"),
                nm = kn(function (e, r) {
                  return e / r;
                }, 1),
                ny = li("floor"),
                nw = kn(function (e, r) {
                  return e * r;
                }, 1),
                n_ = li("round"),
                nM = kn(function (e, r) {
                  return e - r;
                }, 0);
              return (
                (a.after = function (e, r) {
                  if ("function" != typeof r) throw new to(p);
                  return (
                    (e = T(e)),
                    function () {
                      if (--e < 1) return r.apply(this, arguments);
                    }
                  );
                }),
                (a.ary = Vu),
                (a.assign = rL),
                (a.assignIn = rj),
                (a.assignInWith = r$),
                (a.assignWith = rF),
                (a.at = rK),
                (a.before = ku),
                (a.bind = rv),
                (a.bindAll = nt),
                (a.bindKey = ry),
                (a.castArray = function () {
                  if (!arguments.length) return [];
                  var e = arguments[0];
                  return rN(e) ? e : [e];
                }),
                (a.chain = Zu),
                (a.chunk = function (e, r, p) {
                  r = (p ? it(e, r, p) : r === s) ? 1 : io(T(r), 0);
                  var b = null == e ? 0 : e.length;
                  if (!b || r < 1) return [];
                  for (var v = 0, w = 0, _ = e2(t8(b / r)); v < b; )
                    _[w++] = At(e, v, (v += r));
                  return _;
                }),
                (a.compact = function (e) {
                  for (
                    var r = -1, s = null == e ? 0 : e.length, p = 0, b = [];
                    ++r < s;

                  ) {
                    var v = e[r];
                    v && (b[p++] = v);
                  }
                  return b;
                }),
                (a.concat = function () {
                  var e = arguments.length;
                  if (!e) return [];
                  for (var r = e2(e - 1), s = arguments[0], p = e; p--; )
                    r[p - 1] = arguments[p];
                  return re(rN(s) ? ut(s) : [s], tt(r, 1));
                }),
                (a.cond = function (e) {
                  var r = null == e ? 0 : e.length,
                    s = E();
                  return (
                    (e = r
                      ? z(e, function (e) {
                          if ("function" != typeof e[1]) throw new to(p);
                          return [s(e[0]), e[1]];
                        })
                      : []),
                    H(function (s) {
                      for (var p = -1; ++p < r; ) {
                        var b = e[p];
                        if (ft(b[0], this, s)) return ft(b[1], this, s);
                      }
                    })
                  );
                }),
                (a.conforms = function (e) {
                  var r, s;
                  return (
                    (s = k((r = Ct(e, 1)))),
                    function (e) {
                      return zs(e, r, s);
                    }
                  );
                }),
                (a.constant = Ti),
                (a.countBy = rc),
                (a.create = function (e, r) {
                  var s = iq(e);
                  return null == r ? s : Gs(s, r);
                }),
                (a.curry = function ta(e, r, p) {
                  r = p ? s : r;
                  var b = Zt(e, 8, s, s, s, s, s, r);
                  return (b.placeholder = ta.placeholder), b;
                }),
                (a.curryRight = function ea(e, r, p) {
                  r = p ? s : r;
                  var b = Zt(e, 16, s, s, s, s, s, r);
                  return (b.placeholder = ea.placeholder), b;
                }),
                (a.debounce = na),
                (a.defaults = rH),
                (a.defaultsDeep = rU),
                (a.defer = rw),
                (a.delay = r_),
                (a.difference = iW),
                (a.differenceBy = iZ),
                (a.differenceWith = iQ),
                (a.drop = function (e, r, p) {
                  var b = null == e ? 0 : e.length;
                  return b
                    ? At(e, (r = p || r === s ? 1 : T(r)) < 0 ? 0 : r, b)
                    : [];
                }),
                (a.dropRight = function (e, r, p) {
                  var b = null == e ? 0 : e.length;
                  return b
                    ? At(
                        e,
                        0,
                        (r = b - (r = p || r === s ? 1 : T(r))) < 0 ? 0 : r
                      )
                    : [];
                }),
                (a.dropRightWhile = function (e, r) {
                  return e && e.length ? Xn(e, E(r, 3), !0, !0) : [];
                }),
                (a.dropWhile = function (e, r) {
                  return e && e.length ? Xn(e, E(r, 3), !0) : [];
                }),
                (a.fill = function (e, r, p, b) {
                  var v = null == e ? 0 : e.length;
                  return v
                    ? (p &&
                        "number" != typeof p &&
                        it(e, r, p) &&
                        ((p = 0), (b = v)),
                      (function (e, r, p, b) {
                        var v = e.length;
                        for (
                          (p = T(p)) < 0 && (p = -p > v ? 0 : v + p),
                            (b = b === s || b > v ? v : T(b)) < 0 && (b += v),
                            b = p > b ? 0 : ca(b);
                          p < b;

                        )
                          e[p++] = r;
                        return e;
                      })(e, r, p, b))
                    : [];
                }),
                (a.filter = function (e, r) {
                  return (rN(e) ? ne : Ys)(e, E(r, 3));
                }),
                (a.flatMap = function (e, r) {
                  return tt(sr(e, r), 1);
                }),
                (a.flatMapDeep = function (e, r) {
                  return tt(sr(e, r), w);
                }),
                (a.flatMapDepth = function (e, r, p) {
                  return (p = p === s ? 1 : T(p)), tt(sr(e, r), p);
                }),
                (a.flatten = zu),
                (a.flattenDeep = function (e) {
                  return (null == e ? 0 : e.length) ? tt(e, w) : [];
                }),
                (a.flattenDepth = function (e, r) {
                  return (null == e ? 0 : e.length)
                    ? tt(e, (r = r === s ? 1 : T(r)))
                    : [];
                }),
                (a.flip = function (e) {
                  return Zt(e, 512);
                }),
                (a.flow = nn),
                (a.flowRight = ns),
                (a.fromPairs = function (e) {
                  for (
                    var r = -1, s = null == e ? 0 : e.length, p = {};
                    ++r < s;

                  ) {
                    var b = e[r];
                    p[b[0]] = b[1];
                  }
                  return p;
                }),
                (a.functions = function (e) {
                  return null == e ? [] : Jn(e, k(e));
                }),
                (a.functionsIn = function (e) {
                  return null == e ? [] : Jn(e, ot(e));
                }),
                (a.groupBy = rf),
                (a.initial = function (e) {
                  return (null == e ? 0 : e.length) ? At(e, 0, -1) : [];
                }),
                (a.intersection = iX),
                (a.intersectionBy = i0),
                (a.intersectionWith = i1),
                (a.invert = rV),
                (a.invertBy = rJ),
                (a.invokeMap = rl),
                (a.iteratee = Li),
                (a.keyBy = rp),
                (a.keys = k),
                (a.keysIn = ot),
                (a.map = sr),
                (a.mapKeys = function (e, r) {
                  var s = {};
                  return (
                    (r = E(r, 3)),
                    qt(e, function (e, p, b) {
                      Yt(s, r(e, p, b), e);
                    }),
                    s
                  );
                }),
                (a.mapValues = function (e, r) {
                  var s = {};
                  return (
                    (r = E(r, 3)),
                    qt(e, function (e, p, b) {
                      Yt(s, p, r(e, p, b));
                    }),
                    s
                  );
                }),
                (a.matches = function (e) {
                  return tu(Ct(e, 1));
                }),
                (a.matchesProperty = function (e, r) {
                  return eu(e, Ct(r, 1));
                }),
                (a.memoize = ar),
                (a.merge = rY),
                (a.mergeWith = rW),
                (a.method = no),
                (a.methodOf = nc),
                (a.mixin = Hi),
                (a.negate = or),
                (a.nthArg = function (e) {
                  return (
                    (e = T(e)),
                    H(function (r) {
                      return nu(r, e);
                    })
                  );
                }),
                (a.omit = rZ),
                (a.omitBy = function (e, r) {
                  return pa(e, or(E(r)));
                }),
                (a.once = function (e) {
                  return ku(2, e);
                }),
                (a.orderBy = function (e, r, p, b) {
                  return null == e
                    ? []
                    : (rN(r) || (r = null == r ? [] : [r]),
                      rN((p = b ? s : p)) || (p = null == p ? [] : [p]),
                      ru(e, r, p));
                }),
                (a.over = nd),
                (a.overArgs = rM),
                (a.overEvery = nh),
                (a.overSome = nf),
                (a.partial = rP),
                (a.partialRight = rS),
                (a.partition = rb),
                (a.pick = rQ),
                (a.pickBy = pa),
                (a.property = Pa),
                (a.propertyOf = function (e) {
                  return function (r) {
                    return null == e ? s : me(e, r);
                  };
                }),
                (a.pull = i6),
                (a.pullAll = Ju),
                (a.pullAllBy = function (e, r, s) {
                  return e && e.length && r && r.length ? ni(e, r, E(s, 2)) : e;
                }),
                (a.pullAllWith = function (e, r, p) {
                  return e && e.length && r && r.length ? ni(e, r, s, p) : e;
                }),
                (a.pullAt = i2),
                (a.range = nl),
                (a.rangeRight = np),
                (a.rearg = rI),
                (a.reject = function (e, r) {
                  return (rN(e) ? ne : Ys)(e, or(E(r, 3)));
                }),
                (a.remove = function (e, r) {
                  var s = [];
                  if (!(e && e.length)) return s;
                  var p = -1,
                    b = [],
                    v = e.length;
                  for (r = E(r, 3); ++p < v; ) {
                    var w = e[p];
                    r(w, p, e) && (s.push(w), b.push(p));
                  }
                  return su(e, b), s;
                }),
                (a.rest = function (e, r) {
                  if ("function" != typeof e) throw new to(p);
                  return H(e, (r = r === s ? r : T(r)));
                }),
                (a.reverse = Ai),
                (a.sampleSize = function (e, r, p) {
                  return (
                    (r = (p ? it(e, r, p) : r === s) ? 1 : T(r)),
                    (rN(e)
                      ? function (e, r) {
                          return rr(ut(e), _e(r, 0, e.length));
                        }
                      : function (e, r) {
                          var s = Ge(e);
                          return rr(s, _e(r, 0, s.length));
                        })(e, r)
                  );
                }),
                (a.set = function (e, r, s) {
                  return null == e ? e : hn(e, r, s);
                }),
                (a.setWith = function (e, r, p, b) {
                  return (
                    (b = "function" == typeof b ? b : s),
                    null == e ? e : hn(e, r, p, b)
                  );
                }),
                (a.shuffle = function (e) {
                  return (
                    rN(e)
                      ? function (e) {
                          return rr(ut(e));
                        }
                      : function (e) {
                          return rr(Ge(e));
                        }
                  )(e);
                }),
                (a.slice = function (e, r, p) {
                  var b = null == e ? 0 : e.length;
                  return b
                    ? (p && "number" != typeof p && it(e, r, p)
                        ? ((r = 0), (p = b))
                        : ((r = null == r ? 0 : T(r)),
                          (p = p === s ? b : T(p))),
                      At(e, r, p))
                    : [];
                }),
                (a.sortBy = rg),
                (a.sortedUniq = function (e) {
                  return e && e.length ? au(e) : [];
                }),
                (a.sortedUniqBy = function (e, r) {
                  return e && e.length ? au(e, E(r, 2)) : [];
                }),
                (a.split = function (e, r, p) {
                  return (
                    p && "number" != typeof p && it(e, r, p) && (r = p = s),
                    (p = p === s ? 4294967295 : p >>> 0)
                      ? (e = q(e)) &&
                        ("string" == typeof r || (null != r && !rB(r))) &&
                        !(r = lt(r)) &&
                        Le(e)
                        ? ce(St(e), 0, p)
                        : e.split(r, p)
                      : []
                  );
                }),
                (a.spread = function (e, r) {
                  if ("function" != typeof e) throw new to(p);
                  return (
                    (r = null == r ? 0 : io(T(r), 0)),
                    H(function (s) {
                      var p = s[r],
                        b = ce(s, 0, r);
                      return p && re(b, p), ft(e, this, b);
                    })
                  );
                }),
                (a.tail = function (e) {
                  var r = null == e ? 0 : e.length;
                  return r ? At(e, 1, r) : [];
                }),
                (a.take = function (e, r, p) {
                  return e && e.length
                    ? At(e, 0, (r = p || r === s ? 1 : T(r)) < 0 ? 0 : r)
                    : [];
                }),
                (a.takeRight = function (e, r, p) {
                  var b = null == e ? 0 : e.length;
                  return b
                    ? At(
                        e,
                        (r = b - (r = p || r === s ? 1 : T(r))) < 0 ? 0 : r,
                        b
                      )
                    : [];
                }),
                (a.takeRightWhile = function (e, r) {
                  return e && e.length ? Xn(e, E(r, 3), !1, !0) : [];
                }),
                (a.takeWhile = function (e, r) {
                  return e && e.length ? Xn(e, E(r, 3)) : [];
                }),
                (a.tap = function (e, r) {
                  return r(e), e;
                }),
                (a.throttle = function (e, r, s) {
                  var b = !0,
                    v = !0;
                  if ("function" != typeof e) throw new to(p);
                  return (
                    K(s) &&
                      ((b = "leading" in s ? !!s.leading : b),
                      (v = "trailing" in s ? !!s.trailing : v)),
                    na(e, r, { leading: b, maxWait: r, trailing: v })
                  );
                }),
                (a.thru = ir),
                (a.toArray = oa),
                (a.toPairs = rX),
                (a.toPairsIn = r0),
                (a.toPath = function (e) {
                  return rN(e) ? z(e, Wt) : pt(e) ? [e] : ut(iY(q(e)));
                }),
                (a.toPlainObject = fa),
                (a.transform = function (e, r, s) {
                  var p = rN(e),
                    b = p || rC(e) || rk(e);
                  if (((r = E(r, 4)), null == s)) {
                    var v = e && e.constructor;
                    s = b ? (p ? new v() : []) : K(e) && Vt(v) ? iq(tx(e)) : {};
                  }
                  return (
                    (b ? mt : qt)(e, function (e, p, b) {
                      return r(s, e, p, b);
                    }),
                    s
                  );
                }),
                (a.unary = function (e) {
                  return Vu(e, 1);
                }),
                (a.union = i8),
                (a.unionBy = i3),
                (a.unionWith = i4),
                (a.uniq = function (e) {
                  return e && e.length ? ae(e) : [];
                }),
                (a.uniqBy = function (e, r) {
                  return e && e.length ? ae(e, E(r, 2)) : [];
                }),
                (a.uniqWith = function (e, r) {
                  return (
                    (r = "function" == typeof r ? r : s),
                    e && e.length ? ae(e, s, r) : []
                  );
                }),
                (a.unset = function (e, r) {
                  return null == e || ui(e, r);
                }),
                (a.unzip = Ii),
                (a.unzipWith = Yu),
                (a.update = function (e, r, s) {
                  return null == e ? e : cu(e, r, ci(s));
                }),
                (a.updateWith = function (e, r, p, b) {
                  return (
                    (b = "function" == typeof b ? b : s),
                    null == e ? e : cu(e, r, ci(p), b)
                  );
                }),
                (a.values = Ge),
                (a.valuesIn = function (e) {
                  return null == e ? [] : Mr(e, ot(e));
                }),
                (a.without = i9),
                (a.words = ma),
                (a.wrap = function (e, r) {
                  return rP(ci(r), e);
                }),
                (a.xor = i7),
                (a.xorBy = i5),
                (a.xorWith = rn),
                (a.zip = rs),
                (a.zipObject = function (e, r) {
                  return hu(e || [], r || [], an);
                }),
                (a.zipObjectDeep = function (e, r) {
                  return hu(e || [], r || [], hn);
                }),
                (a.zipWith = ra),
                (a.entries = rX),
                (a.entriesIn = r0),
                (a.extend = rj),
                (a.extendWith = r$),
                Hi(a, a),
                (a.add = nb),
                (a.attempt = r5),
                (a.camelCase = r1),
                (a.capitalize = va),
                (a.ceil = ng),
                (a.clamp = function (e, r, p) {
                  return (
                    p === s && ((p = r), (r = s)),
                    p !== s && (p = (p = xt(p)) == p ? p : 0),
                    r !== s && (r = (r = xt(r)) == r ? r : 0),
                    _e(xt(e), r, p)
                  );
                }),
                (a.clone = function (e) {
                  return Ct(e, 4);
                }),
                (a.cloneDeep = function (e) {
                  return Ct(e, 5);
                }),
                (a.cloneDeepWith = function (e, r) {
                  return Ct(e, 5, (r = "function" == typeof r ? r : s));
                }),
                (a.cloneWith = function (e, r) {
                  return Ct(e, 4, (r = "function" == typeof r ? r : s));
                }),
                (a.conformsTo = function (e, r) {
                  return null == r || zs(e, r, k(r));
                }),
                (a.deburr = _a),
                (a.defaultTo = function (e, r) {
                  return null == e || e != e ? r : e;
                }),
                (a.divide = nm),
                (a.endsWith = function (e, r, p) {
                  (e = q(e)), (r = lt(r));
                  var b = e.length,
                    v = (p = p === s ? b : _e(T(p), 0, b));
                  return (p -= r.length) >= 0 && e.slice(p, v) == r;
                }),
                (a.eq = Rt),
                (a.escape = function (e) {
                  return (e = q(e)) && eA.test(e) ? e.replace(eE, t0) : e;
                }),
                (a.escapeRegExp = function (e) {
                  return (e = q(e)) && ek.test(e) ? e.replace(eO, "\\$&") : e;
                }),
                (a.every = function (e, r, p) {
                  var b = rN(e) ? Is : Sf;
                  return p && it(e, r, p) && (r = s), b(e, E(r, 3));
                }),
                (a.find = rd),
                (a.findIndex = Bu),
                (a.findKey = function (e, r) {
                  return xs(e, E(r, 3), qt);
                }),
                (a.findLast = rh),
                (a.findLastIndex = Gu),
                (a.findLastKey = function (e, r) {
                  return xs(e, E(r, 3), Qr);
                }),
                (a.floor = ny),
                (a.forEach = Xu),
                (a.forEachRight = Qu),
                (a.forIn = function (e, r) {
                  return null == e ? e : iO(e, E(r, 3), ot);
                }),
                (a.forInRight = function (e, r) {
                  return null == e ? e : ik(e, E(r, 3), ot);
                }),
                (a.forOwn = function (e, r) {
                  return e && qt(e, E(r, 3));
                }),
                (a.forOwnRight = function (e, r) {
                  return e && Qr(e, E(r, 3));
                }),
                (a.get = Oi),
                (a.gt = rE),
                (a.gte = rx),
                (a.has = function (e, r) {
                  return null != e && Tu(e, r, Rf);
                }),
                (a.hasIn = Ri),
                (a.head = Ku),
                (a.identity = ct),
                (a.includes = function (e, r, s, p) {
                  (e = at(e) ? e : Ge(e)), (s = s && !p ? T(s) : 0);
                  var b = e.length;
                  return (
                    s < 0 && (s = io(b + s, 0)),
                    fr(e)
                      ? s <= b && e.indexOf(r, s) > -1
                      : !!b && Te(e, r, s) > -1
                  );
                }),
                (a.indexOf = function (e, r, s) {
                  var p = null == e ? 0 : e.length;
                  if (!p) return -1;
                  var b = null == s ? 0 : T(s);
                  return b < 0 && (b = io(p + b, 0)), Te(e, r, b);
                }),
                (a.inRange = function (e, r, p) {
                  var b, v, w;
                  return (
                    (r = kt(r)),
                    p === s ? ((p = r), (r = 0)) : (p = kt(p)),
                    (b = e = xt(e)) >= ic((v = r), (w = p)) && b < io(v, w)
                  );
                }),
                (a.invoke = rG),
                (a.isArguments = rA),
                (a.isArray = rN),
                (a.isArrayBuffer = rR),
                (a.isArrayLike = at),
                (a.isArrayLikeObject = Z),
                (a.isBoolean = function (e) {
                  return !0 === e || !1 === e || (Y(e) && rt(e) == A);
                }),
                (a.isBuffer = rC),
                (a.isDate = rq),
                (a.isElement = function (e) {
                  return Y(e) && 1 === e.nodeType && !gn(e);
                }),
                (a.isEmpty = function (e) {
                  if (null == e) return !0;
                  if (
                    at(e) &&
                    (rN(e) ||
                      "string" == typeof e ||
                      "function" == typeof e.splice ||
                      rC(e) ||
                      rk(e) ||
                      rA(e))
                  )
                    return !e.length;
                  var r = iH(e);
                  if (r == V || r == es) return !e.size;
                  if (pn(e)) return !ti(e).length;
                  for (var s in e) if (tp.call(e, s)) return !1;
                  return !0;
                }),
                (a.isEqual = function (e, r) {
                  return fn(e, r);
                }),
                (a.isEqualWith = function (e, r, p) {
                  var b = (p = "function" == typeof p ? p : s) ? p(e, r) : s;
                  return b === s ? fn(e, r, s, p) : !!b;
                }),
                (a.isError = yi),
                (a.isFinite = function (e) {
                  return "number" == typeof e && t7(e);
                }),
                (a.isFunction = Vt),
                (a.isInteger = ia),
                (a.isLength = cr),
                (a.isMap = rT),
                (a.isMatch = function (e, r) {
                  return e === r || jr(e, r, vi(r));
                }),
                (a.isMatchWith = function (e, r, p) {
                  return (
                    (p = "function" == typeof p ? p : s), jr(e, r, vi(r), p)
                  );
                }),
                (a.isNaN = function (e) {
                  return ua(e) && e != +e;
                }),
                (a.isNative = function (e) {
                  if (iU(e))
                    throw new e3(
                      "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                    );
                  return Vs(e);
                }),
                (a.isNil = function (e) {
                  return null == e;
                }),
                (a.isNull = function (e) {
                  return null === e;
                }),
                (a.isNumber = ua),
                (a.isObject = K),
                (a.isObjectLike = Y),
                (a.isPlainObject = gn),
                (a.isRegExp = rB),
                (a.isSafeInteger = function (e) {
                  return (
                    ia(e) && e >= -9007199254740991 && e <= 9007199254740991
                  );
                }),
                (a.isSet = rO),
                (a.isString = fr),
                (a.isSymbol = pt),
                (a.isTypedArray = rk),
                (a.isUndefined = function (e) {
                  return e === s;
                }),
                (a.isWeakMap = function (e) {
                  return Y(e) && iH(e) == ed;
                }),
                (a.isWeakSet = function (e) {
                  return Y(e) && "[object WeakSet]" == rt(e);
                }),
                (a.join = function (e, r) {
                  return null == e ? "" : t5.call(e, r);
                }),
                (a.kebabCase = r6),
                (a.last = It),
                (a.lastIndexOf = function (e, r, p) {
                  var b = null == e ? 0 : e.length;
                  if (!b) return -1;
                  var v = b;
                  return (
                    p !== s &&
                      (v = (v = T(p)) < 0 ? io(b + v, 0) : ic(v, b - 1)),
                    r == r
                      ? (function (e, r, s) {
                          for (var p = s + 1; p-- && e[p] !== r; );
                          return p;
                        })(e, r, v)
                      : On(e, Es, v, !0)
                  );
                }),
                (a.lowerCase = r2),
                (a.lowerFirst = r8),
                (a.lt = rD),
                (a.lte = rz),
                (a.max = function (e) {
                  return e && e.length ? Kn(e, ct, Vr) : s;
                }),
                (a.maxBy = function (e, r) {
                  return e && e.length ? Kn(e, E(r, 2), Vr) : s;
                }),
                (a.mean = function (e) {
                  return ys(e, ct);
                }),
                (a.meanBy = function (e, r) {
                  return ys(e, E(r, 2));
                }),
                (a.min = function (e) {
                  return e && e.length ? Kn(e, ct, ei) : s;
                }),
                (a.minBy = function (e, r) {
                  return e && e.length ? Kn(e, E(r, 2), ei) : s;
                }),
                (a.stubArray = Ni),
                (a.stubFalse = $i),
                (a.stubObject = function () {
                  return {};
                }),
                (a.stubString = function () {
                  return "";
                }),
                (a.stubTrue = function () {
                  return !0;
                }),
                (a.multiply = nw),
                (a.nth = function (e, r) {
                  return e && e.length ? nu(e, T(r)) : s;
                }),
                (a.noConflict = function () {
                  return tj._ === this && (tj._ = ty), this;
                }),
                (a.noop = Di),
                (a.now = rm),
                (a.pad = function (e, r, s) {
                  e = q(e);
                  var p = (r = T(r)) ? He(e) : 0;
                  if (!r || p >= r) return e;
                  var b = (r - p) / 2;
                  return jn(t3(b), s) + e + jn(t8(b), s);
                }),
                (a.padEnd = function (e, r, s) {
                  e = q(e);
                  var p = (r = T(r)) ? He(e) : 0;
                  return r && p < r ? e + jn(r - p, s) : e;
                }),
                (a.padStart = function (e, r, s) {
                  e = q(e);
                  var p = (r = T(r)) ? He(e) : 0;
                  return r && p < r ? jn(r - p, s) + e : e;
                }),
                (a.parseInt = function (e, r, s) {
                  return (
                    s || null == r ? (r = 0) : r && (r = +r),
                    ih(q(e).replace(eD, ""), r || 0)
                  );
                }),
                (a.random = function (e, r, p) {
                  if (
                    (p && "boolean" != typeof p && it(e, r, p) && (r = p = s),
                    p === s &&
                      ("boolean" == typeof r
                        ? ((p = r), (r = s))
                        : "boolean" == typeof e && ((p = e), (e = s))),
                    e === s && r === s
                      ? ((e = 0), (r = 1))
                      : ((e = kt(e)),
                        r === s ? ((r = e), (e = 0)) : (r = kt(r))),
                    e > r)
                  ) {
                    var b = e;
                    (e = r), (r = b);
                  }
                  if (p || e % 1 || r % 1) {
                    var v = il();
                    return ic(
                      e + v * (r - e + tk("1e-" + ((v + "").length - 1))),
                      r
                    );
                  }
                  return ri(e, r);
                }),
                (a.reduce = function (e, r, s) {
                  var p = rN(e) ? Nr : Ss,
                    b = arguments.length < 3;
                  return p(e, E(r, 4), s, b, iT);
                }),
                (a.reduceRight = function (e, r, s) {
                  var p = rN(e) ? oc : Ss,
                    b = arguments.length < 3;
                  return p(e, E(r, 4), s, b, iB);
                }),
                (a.repeat = function (e, r, p) {
                  return (
                    (r = (p ? it(e, r, p) : r === s) ? 1 : T(r)), ii(q(e), r)
                  );
                }),
                (a.replace = function () {
                  var e = arguments,
                    r = q(e[0]);
                  return e.length < 3 ? r : r.replace(e[1], e[2]);
                }),
                (a.result = function (e, r, p) {
                  r = oe(r, e);
                  var b = -1,
                    v = r.length;
                  for (v || ((v = 1), (e = s)); ++b < v; ) {
                    var w = null == e ? s : e[Wt(r[b])];
                    w === s && ((b = v), (w = p)), (e = Vt(w) ? w.call(e) : w);
                  }
                  return e;
                }),
                (a.round = n_),
                (a.runInContext = h),
                (a.sample = function (e) {
                  return (
                    rN(e)
                      ? Bs
                      : function (e) {
                          return Bs(Ge(e));
                        }
                  )(e);
                }),
                (a.size = function (e) {
                  if (null == e) return 0;
                  if (at(e)) return fr(e) ? He(e) : e.length;
                  var r = iH(e);
                  return r == V || r == es ? e.size : ti(e).length;
                }),
                (a.snakeCase = r3),
                (a.some = function (e, r, p) {
                  var b = rN(e) ? $r : Xf;
                  return p && it(e, r, p) && (r = s), b(e, E(r, 3));
                }),
                (a.sortedIndex = function (e, r) {
                  return Zn(e, r);
                }),
                (a.sortedIndexBy = function (e, r, s) {
                  return si(e, r, E(s, 2));
                }),
                (a.sortedIndexOf = function (e, r) {
                  var s = null == e ? 0 : e.length;
                  if (s) {
                    var p = Zn(e, r);
                    if (p < s && Rt(e[p], r)) return p;
                  }
                  return -1;
                }),
                (a.sortedLastIndex = function (e, r) {
                  return Zn(e, r, !0);
                }),
                (a.sortedLastIndexBy = function (e, r, s) {
                  return si(e, r, E(s, 2), !0);
                }),
                (a.sortedLastIndexOf = function (e, r) {
                  if (null == e ? 0 : e.length) {
                    var s = Zn(e, r, !0) - 1;
                    if (Rt(e[s], r)) return s;
                  }
                  return -1;
                }),
                (a.startCase = r4),
                (a.startsWith = function (e, r, s) {
                  return (
                    (e = q(e)),
                    (s = null == s ? 0 : _e(T(s), 0, e.length)),
                    (r = lt(r)),
                    e.slice(s, s + r.length) == r
                  );
                }),
                (a.subtract = nM),
                (a.sum = function (e) {
                  return e && e.length ? Fr(e, ct) : 0;
                }),
                (a.sumBy = function (e, r) {
                  return e && e.length ? Fr(e, E(r, 2)) : 0;
                }),
                (a.template = function (e, r, p) {
                  var b = a.templateSettings;
                  p && it(e, r, p) && (r = s),
                    (e = q(e)),
                    (r = r$({}, r, b, Su));
                  var v,
                    w,
                    _ = r$({}, r.imports, b.imports, Su),
                    P = k(_),
                    S = Mr(_, P),
                    I = 0,
                    A = r.interpolate || eX,
                    R = "__p += '",
                    C = e5(
                      (r.escape || eX).source +
                        "|" +
                        A.source +
                        "|" +
                        (A === eC ? eU : eX).source +
                        "|" +
                        (r.evaluate || eX).source +
                        "|$",
                      "g"
                    ),
                    B =
                      "//# sourceURL=" +
                      (tp.call(r, "sourceURL")
                        ? (r.sourceURL + "").replace(/\s/g, " ")
                        : "lodash.templateSources[" + ++tq + "]") +
                      `
`;
                  e.replace(C, function (r, s, p, b, _, P) {
                    return (
                      p || (p = b),
                      (R += e.slice(I, P).replace(e0, mc)),
                      s &&
                        ((v = !0),
                        (R +=
                          `' +
__e(` +
                          s +
                          `) +
'`)),
                      _ &&
                        ((w = !0),
                        (R +=
                          `';
` +
                          _ +
                          `;
__p += '`)),
                      p &&
                        (R +=
                          `' +
((__t = (` +
                          p +
                          `)) == null ? '' : __t) +
'`),
                      (I = P + r.length),
                      r
                    );
                  }),
                    (R += `';
`);
                  var j = tp.call(r, "variable") && r.variable;
                  if (j) {
                    if (eK.test(j))
                      throw new e3(
                        "Invalid `variable` option passed into `_.template`"
                      );
                  } else
                    R =
                      `with (obj) {
` +
                      R +
                      `
}
`;
                  (R = (w ? R.replace(eM, "") : R)
                    .replace(eP, "$1")
                    .replace(eS, "$1;")),
                    (R =
                      "function(" +
                      (j || "obj") +
                      `) {
` +
                      (j
                        ? ""
                        : `obj || (obj = {});
`) +
                      "var __t, __p = ''" +
                      (v ? ", __e = _.escape" : "") +
                      (w
                        ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                        : `;
`) +
                      R +
                      `return __p
}`);
                  var V = r5(function () {
                    return e4(P, B + "return " + R).apply(s, S);
                  });
                  if (((V.source = R), yi(V))) throw V;
                  return V;
                }),
                (a.times = function (e, r) {
                  if ((e = T(e)) < 1 || e > 9007199254740991) return [];
                  var s = 4294967295,
                    p = ic(e, 4294967295);
                  (r = E(r)), (e -= 4294967295);
                  for (var b = Wr(p, r); ++s < e; ) r(s);
                  return b;
                }),
                (a.toFinite = kt),
                (a.toInteger = T),
                (a.toLength = ca),
                (a.toLower = function (e) {
                  return q(e).toLowerCase();
                }),
                (a.toNumber = xt),
                (a.toSafeInteger = function (e) {
                  return e
                    ? _e(T(e), -9007199254740991, 9007199254740991)
                    : 0 === e
                    ? e
                    : 0;
                }),
                (a.toString = q),
                (a.toUpper = function (e) {
                  return q(e).toUpperCase();
                }),
                (a.trim = function (e, r, p) {
                  if ((e = q(e)) && (p || r === s)) return Os(e);
                  if (!e || !(r = lt(r))) return e;
                  var b = St(e),
                    v = St(r),
                    w = Rs(b, v),
                    _ = bs(b, v) + 1;
                  return ce(b, w, _).join("");
                }),
                (a.trimEnd = function (e, r, p) {
                  if ((e = q(e)) && (p || r === s))
                    return e.slice(0, Ls(e) + 1);
                  if (!e || !(r = lt(r))) return e;
                  var b = St(e),
                    v = bs(b, St(r)) + 1;
                  return ce(b, 0, v).join("");
                }),
                (a.trimStart = function (e, r, p) {
                  if ((e = q(e)) && (p || r === s)) return e.replace(eD, "");
                  if (!e || !(r = lt(r))) return e;
                  var b = St(e),
                    v = Rs(b, St(r));
                  return ce(b, v).join("");
                }),
                (a.truncate = function (e, r) {
                  var p = 30,
                    b = "...";
                  if (K(r)) {
                    var v = "separator" in r ? r.separator : v;
                    (p = "length" in r ? T(r.length) : p),
                      (b = "omission" in r ? lt(r.omission) : b);
                  }
                  var w = (e = q(e)).length;
                  if (Le(e)) {
                    var _ = St(e);
                    w = _.length;
                  }
                  if (p >= w) return e;
                  var P = p - He(b);
                  if (P < 1) return b;
                  var S = _ ? ce(_, 0, P).join("") : e.slice(0, P);
                  if (v === s) return S + b;
                  if ((_ && (P += S.length - P), rB(v))) {
                    if (e.slice(P).search(v)) {
                      var I,
                        A = S;
                      for (
                        v.global || (v = e5(v.source, q(eV.exec(v)) + "g")),
                          v.lastIndex = 0;
                        (I = v.exec(A));

                      )
                        var R = I.index;
                      S = S.slice(0, R === s ? P : R);
                    }
                  } else if (e.indexOf(lt(v), P) != P) {
                    var C = S.lastIndexOf(v);
                    C > -1 && (S = S.slice(0, C));
                  }
                  return S + b;
                }),
                (a.unescape = function (e) {
                  return (e = q(e)) && ex.test(e) ? e.replace(eI, t1) : e;
                }),
                (a.uniqueId = function (e) {
                  var r = ++tb;
                  return q(e) + r;
                }),
                (a.upperCase = r9),
                (a.upperFirst = r7),
                (a.each = Xu),
                (a.eachRight = Qu),
                (a.first = Ku),
                Hi(
                  a,
                  ((e6 = {}),
                  qt(a, function (e, r) {
                    tp.call(a.prototype, r) || (e6[r] = e);
                  }),
                  e6),
                  { chain: !1 }
                ),
                (a.VERSION = "4.17.21"),
                mt(
                  [
                    "bind",
                    "bindKey",
                    "curry",
                    "curryRight",
                    "partial",
                    "partialRight",
                  ],
                  function (e) {
                    a[e].placeholder = a;
                  }
                ),
                mt(["drop", "take"], function (e, r) {
                  (N.prototype[e] = function (p) {
                    p = p === s ? 1 : io(T(p), 0);
                    var b =
                      this.__filtered__ && !r ? new N(this) : this.clone();
                    return (
                      b.__filtered__
                        ? (b.__takeCount__ = ic(p, b.__takeCount__))
                        : b.__views__.push({
                            size: ic(p, 4294967295),
                            type: e + (b.__dir__ < 0 ? "Right" : ""),
                          }),
                      b
                    );
                  }),
                    (N.prototype[e + "Right"] = function (r) {
                      return this.reverse()[e](r).reverse();
                    });
                }),
                mt(["filter", "map", "takeWhile"], function (e, r) {
                  var s = r + 1,
                    p = 1 == s || 3 == s;
                  N.prototype[e] = function (e) {
                    var r = this.clone();
                    return (
                      r.__iteratees__.push({ iteratee: E(e, 3), type: s }),
                      (r.__filtered__ = r.__filtered__ || p),
                      r
                    );
                  };
                }),
                mt(["head", "last"], function (e, r) {
                  var s = "take" + (r ? "Right" : "");
                  N.prototype[e] = function () {
                    return this[s](1).value()[0];
                  };
                }),
                mt(["initial", "tail"], function (e, r) {
                  var s = "drop" + (r ? "" : "Right");
                  N.prototype[e] = function () {
                    return this.__filtered__ ? new N(this) : this[s](1);
                  };
                }),
                (N.prototype.compact = function () {
                  return this.filter(ct);
                }),
                (N.prototype.find = function (e) {
                  return this.filter(e).head();
                }),
                (N.prototype.findLast = function (e) {
                  return this.reverse().find(e);
                }),
                (N.prototype.invokeMap = H(function (e, r) {
                  return "function" == typeof e
                    ? new N(this)
                    : this.map(function (s) {
                        return cn(s, e, r);
                      });
                })),
                (N.prototype.reject = function (e) {
                  return this.filter(or(E(e)));
                }),
                (N.prototype.slice = function (e, r) {
                  e = T(e);
                  var p = this;
                  return p.__filtered__ && (e > 0 || r < 0)
                    ? new N(p)
                    : (e < 0 ? (p = p.takeRight(-e)) : e && (p = p.drop(e)),
                      r !== s &&
                        (p = (r = T(r)) < 0 ? p.dropRight(-r) : p.take(r - e)),
                      p);
                }),
                (N.prototype.takeRightWhile = function (e) {
                  return this.reverse().takeWhile(e).reverse();
                }),
                (N.prototype.toArray = function () {
                  return this.take(4294967295);
                }),
                qt(N.prototype, function (e, r) {
                  var p = /^(?:filter|find|map|reject)|While$/.test(r),
                    b = /^(?:head|last)$/.test(r),
                    v = a[b ? "take" + ("last" == r ? "Right" : "") : r],
                    w = b || /^find/.test(r);
                  v &&
                    (a.prototype[r] = function () {
                      var r = this.__wrapped__,
                        _ = b ? [1] : arguments,
                        P = r instanceof N,
                        S = _[0],
                        I = P || rN(r),
                        m = function (e) {
                          var r = v.apply(a, re([e], _));
                          return b && A ? r[0] : r;
                        };
                      I &&
                        p &&
                        "function" == typeof S &&
                        1 != S.length &&
                        (P = I = !1);
                      var A = this.__chain__,
                        R = !!this.__actions__.length,
                        C = w && !A,
                        B = P && !R;
                      if (!w && I) {
                        r = B ? r : new N(this);
                        var j = e.apply(r, _);
                        return (
                          j.__actions__.push({
                            func: ir,
                            args: [m],
                            thisArg: s,
                          }),
                          new Pt(j, A)
                        );
                      }
                      return C && B
                        ? e.apply(this, _)
                        : ((j = this.thru(m)),
                          C ? (b ? j.value()[0] : j.value()) : j);
                    });
                }),
                mt(
                  ["pop", "push", "shift", "sort", "splice", "unshift"],
                  function (e) {
                    var r = tc[e],
                      s = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                      p = /^(?:pop|shift)$/.test(e);
                    a.prototype[e] = function () {
                      var e = arguments;
                      if (p && !this.__chain__) {
                        var b = this.value();
                        return r.apply(rN(b) ? b : [], e);
                      }
                      return this[s](function (s) {
                        return r.apply(rN(s) ? s : [], e);
                      });
                    };
                  }
                ),
                qt(N.prototype, function (e, r) {
                  var s = a[r];
                  if (s) {
                    var p = s.name + "";
                    tp.call(iP, p) || (iP[p] = []),
                      iP[p].push({ name: r, func: s });
                  }
                }),
                (iP[Vn(s, 2).name] = [{ name: "wrapper", func: s }]),
                (N.prototype.clone = function () {
                  var e = new N(this.__wrapped__);
                  return (
                    (e.__actions__ = ut(this.__actions__)),
                    (e.__dir__ = this.__dir__),
                    (e.__filtered__ = this.__filtered__),
                    (e.__iteratees__ = ut(this.__iteratees__)),
                    (e.__takeCount__ = this.__takeCount__),
                    (e.__views__ = ut(this.__views__)),
                    e
                  );
                }),
                (N.prototype.reverse = function () {
                  if (this.__filtered__) {
                    var e = new N(this);
                    (e.__dir__ = -1), (e.__filtered__ = !0);
                  } else (e = this.clone()), (e.__dir__ *= -1);
                  return e;
                }),
                (N.prototype.value = function () {
                  var e = this.__wrapped__.value(),
                    r = this.__dir__,
                    s = rN(e),
                    p = r < 0,
                    b = s ? e.length : 0,
                    v = (function (e, r, s) {
                      for (var p = -1, b = s.length; ++p < b; ) {
                        var v = s[p],
                          w = v.size;
                        switch (v.type) {
                          case "drop":
                            e += w;
                            break;
                          case "dropRight":
                            r -= w;
                            break;
                          case "take":
                            r = ic(r, e + w);
                            break;
                          case "takeRight":
                            e = io(e, r - w);
                        }
                      }
                      return { start: e, end: r };
                    })(0, b, this.__views__),
                    w = v.start,
                    _ = v.end,
                    P = _ - w,
                    S = p ? _ : w - 1,
                    I = this.__iteratees__,
                    A = I.length,
                    R = 0,
                    C = ic(P, this.__takeCount__);
                  if (!s || (!p && b == P && C == P))
                    return fu(e, this.__actions__);
                  var B = [];
                  e: for (; P-- && R < C; ) {
                    S += r;
                    for (var j = -1, V = e[S]; ++j < A; ) {
                      var J = I[j],
                        W = J.iteratee,
                        X = J.type,
                        et = W(V);
                      if (2 == X) V = et;
                      else if (!et) {
                        if (1 == X) continue e;
                        break e;
                      }
                    }
                    B[R++] = V;
                  }
                  return B;
                }),
                (a.prototype.at = ro),
                (a.prototype.chain = function () {
                  return Zu(this);
                }),
                (a.prototype.commit = function () {
                  return new Pt(this.value(), this.__chain__);
                }),
                (a.prototype.next = function () {
                  this.__values__ === s && (this.__values__ = oa(this.value()));
                  var e = this.__index__ >= this.__values__.length,
                    r = e ? s : this.__values__[this.__index__++];
                  return { done: e, value: r };
                }),
                (a.prototype.plant = function (e) {
                  for (var r, p = this; p instanceof Gn; ) {
                    var b = Mu(p);
                    (b.__index__ = 0),
                      (b.__values__ = s),
                      r ? (v.__wrapped__ = b) : (r = b);
                    var v = b;
                    p = p.__wrapped__;
                  }
                  return (v.__wrapped__ = e), r;
                }),
                (a.prototype.reverse = function () {
                  var e = this.__wrapped__;
                  if (e instanceof N) {
                    var r = e;
                    return (
                      this.__actions__.length && (r = new N(this)),
                      (r = r.reverse()).__actions__.push({
                        func: ir,
                        args: [Ai],
                        thisArg: s,
                      }),
                      new Pt(r, this.__chain__)
                    );
                  }
                  return this.thru(Ai);
                }),
                (a.prototype.toJSON =
                  a.prototype.valueOf =
                  a.prototype.value =
                    function () {
                      return fu(this.__wrapped__, this.__actions__);
                    }),
                (a.prototype.first = a.prototype.head),
                t$ &&
                  (a.prototype[t$] = function () {
                    return this;
                  }),
                a
              );
            })();
          tF ? (((tF.exports = t6)._ = t6), (t$._ = t6)) : (tj._ = t6);
        }.call(iB));
      })(iO, iO.exports);
      var ik = Object.defineProperty,
        iD = Object.defineProperties,
        iz = Object.getOwnPropertyDescriptors,
        iL = Object.getOwnPropertySymbols,
        ij = Object.prototype.hasOwnProperty,
        i$ = Object.prototype.propertyIsEnumerable,
        ba = (e, r, s) =>
          r in e
            ? ik(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (e[r] = s),
        index_es_lr = (e, r) => {
          for (var s in r || (r = {})) ij.call(r, s) && ba(e, s, r[s]);
          if (iL) for (var s of iL(r)) i$.call(r, s) && ba(e, s, r[s]);
          return e;
        },
        nv = (e, r) => iD(e, iz(r));
      function index_es_Lt(e, r, s) {
        var p;
        let b = (0, ec.DQe)(e);
        return (
          (null == (p = r.rpcMap) ? void 0 : p[b.reference]) ||
          `${iR}?chainId=${b.namespace}:${b.reference}&projectId=${s}`
        );
      }
      function Ae(e) {
        return e.includes(":") ? e.split(":")[1] : e;
      }
      function Ta(e) {
        return e.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
      }
      function Fi(e = {}, r = {}) {
        let s = La(e),
          p = La(r);
        return iO.exports.merge(s, p);
      }
      function La(e) {
        var r, s, p, b;
        let v = {};
        if (!(0, ec.L5o)(e)) return v;
        for (let [w, _] of Object.entries(e)) {
          let e = (0, ec.gpE)(w) ? [w] : _.chains,
            P = _.methods || [],
            S = _.events || [],
            I = _.rpcMap || {},
            A = (0, ec.Maj)(w);
          v[A] = nv(index_es_lr(index_es_lr({}, v[A]), _), {
            chains: (0, ec.eGA)(e, null == (r = v[A]) ? void 0 : r.chains),
            methods: (0, ec.eGA)(P, null == (s = v[A]) ? void 0 : s.methods),
            events: (0, ec.eGA)(S, null == (p = v[A]) ? void 0 : p.events),
            rpcMap: index_es_lr(
              index_es_lr({}, I),
              null == (b = v[A]) ? void 0 : b.rpcMap
            ),
          });
        }
        return v;
      }
      function iv(e) {
        return e.includes(":") ? e.split(":")[2] : e;
      }
      function Ha(e) {
        let r = {};
        for (let [s, p] of Object.entries(e)) {
          let e = p.methods || [],
            b = p.events || [],
            v = p.accounts || [],
            w = (0, ec.gpE)(s) ? [s] : p.chains ? p.chains : Ta(p.accounts);
          r[s] = { chains: w, methods: e, events: b, accounts: v };
        }
        return r;
      }
      function Wi(e) {
        return "number" == typeof e
          ? e
          : e.includes("0x")
          ? parseInt(e, 16)
          : isNaN(Number((e = e.includes(":") ? e.split(":")[1] : e)))
          ? e
          : Number(e);
      }
      let iF = {},
        index_es_F = (e) => iF[e],
        Mi = (e, r) => {
          iF[e] = r;
        };
      let sv = class sv {
        constructor(e) {
          (this.name = "polkadot"),
            (this.namespace = e.namespace),
            (this.events = index_es_F("events")),
            (this.client = index_es_F("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, r) {
          this.httpProviders[e] || this.setHttpProvider(e, r),
            (this.chainId = e),
            this.events.emit(iT.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((r) => {
              var s;
              let p = Ae(r);
              e[p] = this.createHttpProvider(
                p,
                null == (s = this.namespace.rpcMap) ? void 0 : s[r]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            r = this.httpProviders[e];
          if (typeof r > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return r;
        }
        setHttpProvider(e, r) {
          let s = this.createHttpProvider(e, r);
          s && (this.httpProviders[e] = s);
        }
        createHttpProvider(e, r) {
          let s =
            r || index_es_Lt(e, this.namespace, this.client.core.projectId);
          if (!s) throw Error(`No RPC url provided for chainId: ${e}`);
          return new o(new index_es_f(s, index_es_F("disableProviderPing")));
        }
      };
      var iK = Object.defineProperty,
        iH = Object.defineProperties,
        iU = Object.getOwnPropertyDescriptors,
        iV = Object.getOwnPropertySymbols,
        iJ = Object.prototype.hasOwnProperty,
        iG = Object.prototype.propertyIsEnumerable,
        $a = (e, r, s) =>
          r in e
            ? iK(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (e[r] = s),
        Ua = (e, r) => {
          for (var s in r || (r = {})) iJ.call(r, s) && $a(e, s, r[s]);
          if (iV) for (var s of iV(r)) iG.call(r, s) && $a(e, s, r[s]);
          return e;
        },
        qa = (e, r) => iH(e, iU(r));
      let hv = class hv {
        constructor(e) {
          (this.name = "eip155"),
            (this.namespace = e.namespace),
            (this.events = index_es_F("events")),
            (this.client = index_es_F("client")),
            (this.httpProviders = this.createHttpProviders()),
            (this.chainId = parseInt(this.getDefaultChain()));
        }
        async request(e) {
          switch (e.request.method) {
            case "eth_requestAccounts":
            case "eth_accounts":
              return this.getAccounts();
            case "wallet_switchEthereumChain":
              return await this.handleSwitchChain(e);
            case "eth_chainId":
              return parseInt(this.getDefaultChain());
            case "wallet_getCapabilities":
              return await this.getCapabilities(e);
            case "wallet_getCallsStatus":
              return await this.getCallStatus(e);
          }
          return this.namespace.methods.includes(e.request.method)
            ? await this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        setDefaultChain(e, r) {
          this.httpProviders[e] || this.setHttpProvider(parseInt(e), r),
            (this.chainId = parseInt(e)),
            this.events.emit(iT.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId.toString();
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        createHttpProvider(e, r) {
          let s =
            r ||
            index_es_Lt(
              `${this.name}:${e}`,
              this.namespace,
              this.client.core.projectId
            );
          if (!s) throw Error(`No RPC url provided for chainId: ${e}`);
          return new o(new index_es_f(s, index_es_F("disableProviderPing")));
        }
        setHttpProvider(e, r) {
          let s = this.createHttpProvider(e, r);
          s && (this.httpProviders[e] = s);
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((r) => {
              var s;
              let p = parseInt(Ae(r));
              e[p] = this.createHttpProvider(
                p,
                null == (s = this.namespace.rpcMap) ? void 0 : s[r]
              );
            }),
            e
          );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        getHttpProvider() {
          let e = this.chainId,
            r = this.httpProviders[e];
          if (typeof r > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return r;
        }
        async handleSwitchChain(e) {
          var r, s;
          let p = e.request.params
            ? null == (r = e.request.params[0])
              ? void 0
              : r.chainId
            : "0x0";
          p = p.startsWith("0x") ? p : `0x${p}`;
          let b = parseInt(p, 16);
          if (this.isChainApproved(b)) this.setDefaultChain(`${b}`);
          else if (
            this.namespace.methods.includes("wallet_switchEthereumChain")
          )
            await this.client.request({
              topic: e.topic,
              request: { method: e.request.method, params: [{ chainId: p }] },
              chainId: null == (s = this.namespace.chains) ? void 0 : s[0],
            }),
              this.setDefaultChain(`${b}`);
          else
            throw Error(
              `Failed to switch to chain 'eip155:${b}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
            );
          return null;
        }
        isChainApproved(e) {
          return this.namespace.chains.includes(`${this.name}:${e}`);
        }
        async getCapabilities(e) {
          var r, s, p;
          let b =
            null == (s = null == (r = e.request) ? void 0 : r.params)
              ? void 0
              : s[0];
          if (!b)
            throw Error(
              "Missing address parameter in `wallet_getCapabilities` request"
            );
          let v = this.client.session.get(e.topic),
            w =
              (null == (p = v?.sessionProperties) ? void 0 : p.capabilities) ||
              {};
          if (null != w && w[b]) return w?.[b];
          let _ = await this.client.request(e);
          try {
            await this.client.session.update(e.topic, {
              sessionProperties: qa(Ua({}, v.sessionProperties || {}), {
                capabilities: qa(Ua({}, w || {}), { [b]: _ }),
              }),
            });
          } catch (e) {
            console.warn("Failed to update session with capabilities", e);
          }
          return _;
        }
        async getCallStatus(e) {
          var r, s;
          let p = this.client.session.get(e.topic),
            b = null == (r = p.sessionProperties) ? void 0 : r.bundler_name;
          if (b) {
            let r = this.getBundlerUrl(e.chainId, b);
            try {
              return await this.getUserOperationReceipt(r, e);
            } catch (e) {
              console.warn("Failed to fetch call status from bundler", e, r);
            }
          }
          let v = null == (s = p.sessionProperties) ? void 0 : s.bundler_url;
          if (v)
            try {
              return await this.getUserOperationReceipt(v, e);
            } catch (e) {
              console.warn(
                "Failed to fetch call status from custom bundler",
                e,
                v
              );
            }
          if (this.namespace.methods.includes(e.request.method))
            return await this.client.request(e);
          throw Error("Fetching call status not approved by the wallet.");
        }
        async getUserOperationReceipt(e, r) {
          var s;
          let p = new URL(e),
            b = await fetch(p, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(
                (0, eh.formatJsonRpcRequest)("eth_getUserOperationReceipt", [
                  null == (s = r.request.params) ? void 0 : s[0],
                ])
              ),
            });
          if (!b.ok)
            throw Error(`Failed to fetch user operation receipt - ${b.status}`);
          return await b.json();
        }
        getBundlerUrl(e, r) {
          return `${iq}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${r}`;
        }
      };
      let lv = class lv {
        constructor(e) {
          (this.name = "solana"),
            (this.namespace = e.namespace),
            (this.events = index_es_F("events")),
            (this.client = index_es_F("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, r) {
          this.httpProviders[e] || this.setHttpProvider(e, r),
            (this.chainId = e),
            this.events.emit(iT.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((r) => {
              var s;
              let p = Ae(r);
              e[p] = this.createHttpProvider(
                p,
                null == (s = this.namespace.rpcMap) ? void 0 : s[r]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            r = this.httpProviders[e];
          if (typeof r > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return r;
        }
        setHttpProvider(e, r) {
          let s = this.createHttpProvider(e, r);
          s && (this.httpProviders[e] = s);
        }
        createHttpProvider(e, r) {
          let s =
            r || index_es_Lt(e, this.namespace, this.client.core.projectId);
          if (!s) throw Error(`No RPC url provided for chainId: ${e}`);
          return new o(new index_es_f(s, index_es_F("disableProviderPing")));
        }
      };
      let pv = class pv {
        constructor(e) {
          (this.name = "cosmos"),
            (this.namespace = e.namespace),
            (this.events = index_es_F("events")),
            (this.client = index_es_F("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, r) {
          this.httpProviders[e] || this.setHttpProvider(e, r),
            (this.chainId = e),
            this.events.emit(
              iT.DEFAULT_CHAIN_CHANGED,
              `${this.name}:${this.chainId}`
            );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((r) => {
              var s;
              let p = Ae(r);
              e[p] = this.createHttpProvider(
                p,
                null == (s = this.namespace.rpcMap) ? void 0 : s[r]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            r = this.httpProviders[e];
          if (typeof r > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return r;
        }
        setHttpProvider(e, r) {
          let s = this.createHttpProvider(e, r);
          s && (this.httpProviders[e] = s);
        }
        createHttpProvider(e, r) {
          let s =
            r || index_es_Lt(e, this.namespace, this.client.core.projectId);
          if (!s) throw Error(`No RPC url provided for chainId: ${e}`);
          return new o(new index_es_f(s, index_es_F("disableProviderPing")));
        }
      };
      let dv = class dv {
        constructor(e) {
          (this.name = "algorand"),
            (this.namespace = e.namespace),
            (this.events = index_es_F("events")),
            (this.client = index_es_F("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, r) {
          if (!this.httpProviders[e]) {
            let s =
              r ||
              index_es_Lt(
                `${this.name}:${e}`,
                this.namespace,
                this.client.core.projectId
              );
            if (!s) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, s);
          }
          (this.chainId = e),
            this.events.emit(
              iT.DEFAULT_CHAIN_CHANGED,
              `${this.name}:${this.chainId}`
            );
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((r) => {
              var s;
              e[r] = this.createHttpProvider(
                r,
                null == (s = this.namespace.rpcMap) ? void 0 : s[r]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            r = this.httpProviders[e];
          if (typeof r > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return r;
        }
        setHttpProvider(e, r) {
          let s = this.createHttpProvider(e, r);
          s && (this.httpProviders[e] = s);
        }
        createHttpProvider(e, r) {
          let s =
            r || index_es_Lt(e, this.namespace, this.client.core.projectId);
          return typeof s > "u"
            ? void 0
            : new o(new index_es_f(s, index_es_F("disableProviderPing")));
        }
      };
      let gv = class gv {
        constructor(e) {
          (this.name = "cip34"),
            (this.namespace = e.namespace),
            (this.events = index_es_F("events")),
            (this.client = index_es_F("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, r) {
          this.httpProviders[e] || this.setHttpProvider(e, r),
            (this.chainId = e),
            this.events.emit(
              iT.DEFAULT_CHAIN_CHANGED,
              `${this.name}:${this.chainId}`
            );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((r) => {
              let s = this.getCardanoRPCUrl(r),
                p = Ae(r);
              e[p] = this.createHttpProvider(p, s);
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            r = this.httpProviders[e];
          if (typeof r > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return r;
        }
        getCardanoRPCUrl(e) {
          let r = this.namespace.rpcMap;
          if (r) return r[e];
        }
        setHttpProvider(e, r) {
          let s = this.createHttpProvider(e, r);
          s && (this.httpProviders[e] = s);
        }
        createHttpProvider(e, r) {
          let s = r || this.getCardanoRPCUrl(e);
          if (!s) throw Error(`No RPC url provided for chainId: ${e}`);
          return new o(new index_es_f(s, index_es_F("disableProviderPing")));
        }
      };
      let vv = class vv {
        constructor(e) {
          (this.name = "elrond"),
            (this.namespace = e.namespace),
            (this.events = index_es_F("events")),
            (this.client = index_es_F("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, r) {
          this.httpProviders[e] || this.setHttpProvider(e, r),
            (this.chainId = e),
            this.events.emit(iT.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((r) => {
              var s;
              let p = Ae(r);
              e[p] = this.createHttpProvider(
                p,
                null == (s = this.namespace.rpcMap) ? void 0 : s[r]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            r = this.httpProviders[e];
          if (typeof r > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return r;
        }
        setHttpProvider(e, r) {
          let s = this.createHttpProvider(e, r);
          s && (this.httpProviders[e] = s);
        }
        createHttpProvider(e, r) {
          let s =
            r || index_es_Lt(e, this.namespace, this.client.core.projectId);
          if (!s) throw Error(`No RPC url provided for chainId: ${e}`);
          return new o(new index_es_f(s, index_es_F("disableProviderPing")));
        }
      };
      let _v = class _v {
        constructor(e) {
          (this.name = "multiversx"),
            (this.namespace = e.namespace),
            (this.events = index_es_F("events")),
            (this.client = index_es_F("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, r) {
          this.httpProviders[e] || this.setHttpProvider(e, r),
            (this.chainId = e),
            this.events.emit(iT.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((r) => {
              var s;
              let p = Ae(r);
              e[p] = this.createHttpProvider(
                p,
                null == (s = this.namespace.rpcMap) ? void 0 : s[r]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            r = this.httpProviders[e];
          if (typeof r > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return r;
        }
        setHttpProvider(e, r) {
          let s = this.createHttpProvider(e, r);
          s && (this.httpProviders[e] = s);
        }
        createHttpProvider(e, r) {
          let s =
            r || index_es_Lt(e, this.namespace, this.client.core.projectId);
          if (!s) throw Error(`No RPC url provided for chainId: ${e}`);
          return new o(new index_es_f(s, index_es_F("disableProviderPing")));
        }
      };
      let mv = class mv {
        constructor(e) {
          (this.name = "near"),
            (this.namespace = e.namespace),
            (this.events = index_es_F("events")),
            (this.client = index_es_F("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, r) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            let s = r || index_es_Lt(`${this.name}:${e}`, this.namespace);
            if (!s) throw Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, s);
          }
          this.events.emit(
            iT.DEFAULT_CHAIN_CHANGED,
            `${this.name}:${this.chainId}`
          );
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let e = {};
          return (
            this.namespace.chains.forEach((r) => {
              var s;
              e[r] = this.createHttpProvider(
                r,
                null == (s = this.namespace.rpcMap) ? void 0 : s[r]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          let e = `${this.name}:${this.chainId}`,
            r = this.httpProviders[e];
          if (typeof r > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return r;
        }
        setHttpProvider(e, r) {
          let s = this.createHttpProvider(e, r);
          s && (this.httpProviders[e] = s);
        }
        createHttpProvider(e, r) {
          let s = r || index_es_Lt(e, this.namespace);
          return typeof s > "u"
            ? void 0
            : new o(new index_es_f(s, index_es_F("disableProviderPing")));
        }
      };
      let wv = class wv {
        constructor(e) {
          (this.name = iC),
            (this.namespace = e.namespace),
            (this.events = index_es_F("events")),
            (this.client = index_es_F("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          (this.namespace.chains = [
            ...new Set((this.namespace.chains || []).concat(e.chains || [])),
          ]),
            (this.namespace.accounts = [
              ...new Set(
                (this.namespace.accounts || []).concat(e.accounts || [])
              ),
            ]),
            (this.namespace.methods = [
              ...new Set(
                (this.namespace.methods || []).concat(e.methods || [])
              ),
            ]),
            (this.namespace.events = [
              ...new Set((this.namespace.events || []).concat(e.events || [])),
            ]),
            (this.httpProviders = this.createHttpProviders());
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider(e.chainId).request(e.request);
        }
        setDefaultChain(e, r) {
          this.httpProviders[e] || this.setHttpProvider(e, r),
            (this.chainId = e),
            this.events.emit(iT.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let e = this.namespace.chains[0];
          if (!e) throw Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          let e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          var e, r;
          let s = {};
          return (
            null == (r = null == (e = this.namespace) ? void 0 : e.accounts) ||
              r.forEach((e) => {
                let r = (0, ec.DQe)(e);
                s[`${r.namespace}:${r.reference}`] = this.createHttpProvider(e);
              }),
            s
          );
        }
        getHttpProvider(e) {
          let r = this.httpProviders[e];
          if (typeof r > "u")
            throw Error(`JSON-RPC provider for ${e} not found`);
          return r;
        }
        setHttpProvider(e, r) {
          let s = this.createHttpProvider(e, r);
          s && (this.httpProviders[e] = s);
        }
        createHttpProvider(e, r) {
          let s =
            r || index_es_Lt(e, this.namespace, this.client.core.projectId);
          if (!s) throw Error(`No RPC url provided for chainId: ${e}`);
          return new o(new index_es_f(s, index_es_F("disableProviderPing")));
        }
      };
      var iY = Object.defineProperty,
        iW = Object.defineProperties,
        iZ = Object.getOwnPropertyDescriptors,
        iQ = Object.getOwnPropertySymbols,
        iX = Object.prototype.hasOwnProperty,
        i0 = Object.prototype.propertyIsEnumerable,
        Wa = (e, r, s) =>
          r in e
            ? iY(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (e[r] = s),
        index_es_pr = (e, r) => {
          for (var s in r || (r = {})) iX.call(r, s) && Wa(e, s, r[s]);
          if (iQ) for (var s of iQ(r)) i0.call(r, s) && Wa(e, s, r[s]);
          return e;
        },
        Bi = (e, r) => iW(e, iZ(r));
      let index_es_dr = class index_es_dr {
        constructor(e) {
          (this.events = new (b())()),
            (this.rpcProviders = {}),
            (this.shouldAbortPairingAttempt = !1),
            (this.maxPairingAttempts = 10),
            (this.disableProviderPing = !1),
            (this.providerOpts = e),
            (this.logger =
              "u" > typeof e?.logger && "string" != typeof e?.logger
                ? e.logger
                : R()(k({ level: e?.logger || iA }))),
            (this.disableProviderPing = e?.disableProviderPing || !1);
        }
        static async init(e) {
          let r = new index_es_dr(e);
          return await r.initialize(), r;
        }
        async request(e, r, s) {
          let [p, b] = this.validateChain(r);
          if (!this.session)
            throw Error("Please call connect() before request()");
          return await this.getProvider(p).request({
            request: index_es_pr({}, e),
            chainId: `${p}:${b}`,
            topic: this.session.topic,
            expiry: s,
          });
        }
        sendAsync(e, r, s, p) {
          let b = new Date().getTime();
          this.request(e, s, p)
            .then((e) => r(null, (0, eh.formatJsonRpcResult)(b, e)))
            .catch((e) => r(e, void 0));
        }
        async enable() {
          if (!this.client) throw Error("Sign Client not initialized");
          return (
            this.session ||
              (await this.connect({
                namespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties,
              })),
            await this.requestAccounts()
          );
        }
        async disconnect() {
          var e;
          if (!this.session)
            throw Error("Please call connect() before enable()");
          await this.client.disconnect({
            topic: null == (e = this.session) ? void 0 : e.topic,
            reason: (0, ec.D6H)("USER_DISCONNECTED"),
          }),
            await this.cleanup();
        }
        async connect(e) {
          if (!this.client) throw Error("Sign Client not initialized");
          if (
            (this.setNamespaces(e),
            await this.cleanupPendingPairings(),
            !e.skipPairing)
          )
            return await this.pair(e.pairingTopic);
        }
        async authenticate(e, r) {
          if (!this.client) throw Error("Sign Client not initialized");
          this.setNamespaces(e), await this.cleanupPendingPairings();
          let { uri: s, response: p } = await this.client.authenticate(e, r);
          s && ((this.uri = s), this.events.emit("display_uri", s));
          let b = await p();
          if (((this.session = b.session), this.session)) {
            let e = Ha(this.session.namespaces);
            (this.namespaces = Fi(this.namespaces, e)),
              this.persist("namespaces", this.namespaces),
              this.onConnect();
          }
          return b;
        }
        on(e, r) {
          this.events.on(e, r);
        }
        once(e, r) {
          this.events.once(e, r);
        }
        removeListener(e, r) {
          this.events.removeListener(e, r);
        }
        off(e, r) {
          this.events.off(e, r);
        }
        get isWalletConnect() {
          return !0;
        }
        async pair(e) {
          this.shouldAbortPairingAttempt = !1;
          let r = 0;
          do {
            if (this.shouldAbortPairingAttempt) throw Error("Pairing aborted");
            if (r >= this.maxPairingAttempts)
              throw Error("Max auto pairing attempts reached");
            let { uri: s, approval: p } = await this.client.connect({
              pairingTopic: e,
              requiredNamespaces: this.namespaces,
              optionalNamespaces: this.optionalNamespaces,
              sessionProperties: this.sessionProperties,
            });
            s && ((this.uri = s), this.events.emit("display_uri", s)),
              await p()
                .then((e) => {
                  this.session = e;
                  let r = Ha(e.namespaces);
                  (this.namespaces = Fi(this.namespaces, r)),
                    this.persist("namespaces", this.namespaces);
                })
                .catch((e) => {
                  if (e.message !== t4) throw e;
                  r++;
                });
          } while (!this.session);
          return this.onConnect(), this.session;
        }
        setDefaultChain(e, r) {
          try {
            if (!this.session) return;
            let [s, p] = this.validateChain(e),
              b = this.getProvider(s);
            b.name === iC
              ? b.setDefaultChain(`${s}:${p}`, r)
              : b.setDefaultChain(p, r);
          } catch (e) {
            if (!/Please call connect/.test(e.message)) throw e;
          }
        }
        async cleanupPendingPairings(e = {}) {
          this.logger.info("Cleaning up inactive pairings...");
          let r = this.client.pairing.getAll();
          if ((0, ec.qt8)(r)) {
            for (let s of r)
              e.deletePairings
                ? this.client.core.expirer.set(s.topic, 0)
                : await this.client.core.relayer.subscriber.unsubscribe(
                    s.topic
                  );
            this.logger.info(`Inactive pairings cleared: ${r.length}`);
          }
        }
        abortPairingAttempt() {
          this.shouldAbortPairingAttempt = !0;
        }
        async checkStorage() {
          if (
            ((this.namespaces = await this.getFromStore("namespaces")),
            (this.optionalNamespaces =
              (await this.getFromStore("optionalNamespaces")) || {}),
            this.client.session.length)
          ) {
            let e = this.client.session.keys.length - 1;
            (this.session = this.client.session.get(
              this.client.session.keys[e]
            )),
              this.createProviders();
          }
        }
        async initialize() {
          this.logger.trace("Initialized"),
            await this.createClient(),
            await this.checkStorage(),
            this.registerEventListeners();
        }
        async createClient() {
          (this.client =
            this.providerOpts.client ||
            (await index_es_e.init({
              core: this.providerOpts.core,
              logger: this.providerOpts.logger || iA,
              relayUrl:
                this.providerOpts.relayUrl || "wss://relay.walletconnect.org",
              projectId: this.providerOpts.projectId,
              metadata: this.providerOpts.metadata,
              storageOptions: this.providerOpts.storageOptions,
              storage: this.providerOpts.storage,
              name: this.providerOpts.name,
              customStoragePrefix: this.providerOpts.customStoragePrefix,
              telemetryEnabled: this.providerOpts.telemetryEnabled,
            }))),
            this.logger.trace("SignClient Initialized");
        }
        createProviders() {
          if (!this.client) throw Error("Sign Client not initialized");
          if (!this.session)
            throw Error(
              "Session not initialized. Please call connect() before enable()"
            );
          let e = [
            ...new Set(
              Object.keys(this.session.namespaces).map((e) => (0, ec.Maj)(e))
            ),
          ];
          Mi("client", this.client),
            Mi("events", this.events),
            Mi("disableProviderPing", this.disableProviderPing),
            e.forEach((e) => {
              if (!this.session) return;
              let r = (function (e, r) {
                  let s = Object.keys(r.namespaces).filter((r) =>
                    r.includes(e)
                  );
                  if (!s.length) return [];
                  let p = [];
                  return (
                    s.forEach((e) => {
                      let s = r.namespaces[e].accounts;
                      p.push(...s);
                    }),
                    p
                  );
                })(e, this.session),
                s = Ta(r),
                p = Fi(this.namespaces, this.optionalNamespaces),
                b = Bi(index_es_pr({}, p[e]), { accounts: r, chains: s });
              switch (e) {
                case "eip155":
                  this.rpcProviders[e] = new hv({ namespace: b });
                  break;
                case "algorand":
                  this.rpcProviders[e] = new dv({ namespace: b });
                  break;
                case "solana":
                  this.rpcProviders[e] = new lv({ namespace: b });
                  break;
                case "cosmos":
                  this.rpcProviders[e] = new pv({ namespace: b });
                  break;
                case "polkadot":
                  this.rpcProviders[e] = new sv({ namespace: b });
                  break;
                case "cip34":
                  this.rpcProviders[e] = new gv({ namespace: b });
                  break;
                case "elrond":
                  this.rpcProviders[e] = new vv({ namespace: b });
                  break;
                case "multiversx":
                  this.rpcProviders[e] = new _v({ namespace: b });
                  break;
                case "near":
                  this.rpcProviders[e] = new mv({ namespace: b });
                  break;
                default:
                  this.rpcProviders[iC]
                    ? this.rpcProviders[iC].updateNamespace(b)
                    : (this.rpcProviders[iC] = new wv({ namespace: b }));
              }
            });
        }
        registerEventListeners() {
          if (typeof this.client > "u")
            throw Error("Sign Client is not initialized");
          this.client.on("session_ping", (e) => {
            this.events.emit("session_ping", e);
          }),
            this.client.on("session_event", (e) => {
              let { params: r } = e,
                { event: s } = r;
              if ("accountsChanged" === s.name) {
                let e = s.data;
                e &&
                  (0, ec.qt8)(e) &&
                  this.events.emit("accountsChanged", e.map(iv));
              } else if ("chainChanged" === s.name) {
                let e = r.chainId,
                  s = r.event.data,
                  p = (0, ec.Maj)(e),
                  b = Wi(e) !== Wi(s) ? `${p}:${Wi(s)}` : e;
                this.onChainChanged(b);
              } else this.events.emit(s.name, s.data);
              this.events.emit("session_event", e);
            }),
            this.client.on("session_update", ({ topic: e, params: r }) => {
              var s;
              let { namespaces: p } = r,
                b = null == (s = this.client) ? void 0 : s.session.get(e);
              (this.session = Bi(index_es_pr({}, b), { namespaces: p })),
                this.onSessionUpdate(),
                this.events.emit("session_update", { topic: e, params: r });
            }),
            this.client.on("session_delete", async (e) => {
              await this.cleanup(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  Bi(index_es_pr({}, (0, ec.D6H)("USER_DISCONNECTED")), {
                    data: e.topic,
                  })
                );
            }),
            this.on(iT.DEFAULT_CHAIN_CHANGED, (e) => {
              this.onChainChanged(e, !0);
            });
        }
        getProvider(e) {
          return this.rpcProviders[e] || this.rpcProviders[iC];
        }
        onSessionUpdate() {
          Object.keys(this.rpcProviders).forEach((e) => {
            var r;
            this.getProvider(e).updateNamespace(
              null == (r = this.session) ? void 0 : r.namespaces[e]
            );
          });
        }
        setNamespaces(e) {
          let {
            namespaces: r,
            optionalNamespaces: s,
            sessionProperties: p,
          } = e;
          r && Object.keys(r).length && (this.namespaces = r),
            s && Object.keys(s).length && (this.optionalNamespaces = s),
            (this.sessionProperties = p),
            this.persist("namespaces", r),
            this.persist("optionalNamespaces", s);
        }
        validateChain(e) {
          let [r, s] = e?.split(":") || ["", ""];
          if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [r, s];
          if (
            r &&
            !Object.keys(this.namespaces || {})
              .map((e) => (0, ec.Maj)(e))
              .includes(r)
          )
            throw Error(
              `Namespace '${r}' is not configured. Please call connect() first with namespace config.`
            );
          if (r && s) return [r, s];
          let p = (0, ec.Maj)(Object.keys(this.namespaces)[0]),
            b = this.rpcProviders[p].getDefaultChain();
          return [p, b];
        }
        async requestAccounts() {
          let [e] = this.validateChain();
          return await this.getProvider(e).requestAccounts();
        }
        onChainChanged(e, r = !1) {
          if (!this.namespaces) return;
          let [s, p] = this.validateChain(e);
          p &&
            (r || this.getProvider(s).setDefaultChain(p),
            this.namespaces[s]
              ? (this.namespaces[s].defaultChain = p)
              : this.namespaces[`${s}:${p}`]
              ? (this.namespaces[`${s}:${p}`].defaultChain = p)
              : (this.namespaces[`${s}:${p}`] = { defaultChain: p }),
            this.persist("namespaces", this.namespaces),
            this.events.emit("chainChanged", p));
        }
        onConnect() {
          this.createProviders(),
            this.events.emit("connect", { session: this.session });
        }
        async cleanup() {
          (this.session = void 0),
            (this.namespaces = void 0),
            (this.optionalNamespaces = void 0),
            (this.sessionProperties = void 0),
            this.persist("namespaces", void 0),
            this.persist("optionalNamespaces", void 0),
            this.persist("sessionProperties", void 0),
            await this.cleanupPendingPairings({ deletePairings: !0 });
        }
        persist(e, r) {
          this.client.core.storage.setItem(`${iN}/${e}`, r);
        }
        async getFromStore(e) {
          return await this.client.core.storage.getItem(`${iN}/${e}`);
        }
      };
      let i1 = ["eth_sendTransaction", "personal_sign"],
        i6 = [
          "eth_accounts",
          "eth_requestAccounts",
          "eth_sendRawTransaction",
          "eth_sign",
          "eth_signTransaction",
          "eth_signTypedData",
          "eth_signTypedData_v3",
          "eth_signTypedData_v4",
          "eth_sendTransaction",
          "personal_sign",
          "wallet_switchEthereumChain",
          "wallet_addEthereumChain",
          "wallet_getPermissions",
          "wallet_requestPermissions",
          "wallet_registerOnboarding",
          "wallet_watchAsset",
          "wallet_scanQRCode",
          "wallet_sendCalls",
          "wallet_getCapabilities",
          "wallet_getCallsStatus",
          "wallet_showCallsStatus",
        ],
        i2 = ["chainChanged", "accountsChanged"],
        i8 = [
          "chainChanged",
          "accountsChanged",
          "message",
          "disconnect",
          "connect",
        ];
      var i3 = Object.defineProperty,
        i4 = Object.defineProperties,
        i9 = Object.getOwnPropertyDescriptors,
        i7 = Object.getOwnPropertySymbols,
        i5 = Object.prototype.hasOwnProperty,
        rn = Object.prototype.propertyIsEnumerable,
        ethereum_provider_dist_index_es_O = (e, r, s) =>
          r in e
            ? i3(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (e[r] = s),
        ethereum_provider_dist_index_es_p = (e, r) => {
          for (var s in r || (r = {}))
            i5.call(r, s) && ethereum_provider_dist_index_es_O(e, s, r[s]);
          if (i7)
            for (var s of i7(r))
              rn.call(r, s) && ethereum_provider_dist_index_es_O(e, s, r[s]);
          return e;
        },
        ethereum_provider_dist_index_es_E = (e, r) => i4(e, i9(r));
      function dist_index_es_m(e) {
        return Number(e[0].split(":")[1]);
      }
      function ethereum_provider_dist_index_es_v(e) {
        return `0x${e.toString(16)}`;
      }
      let dist_index_es_C = class dist_index_es_C {
        constructor() {
          (this.events = new p.EventEmitter()),
            (this.namespace = "eip155"),
            (this.accounts = []),
            (this.chainId = 1),
            (this.STORAGE_KEY = "wc@2:ethereum_provider:"),
            (this.on = (e, r) => (this.events.on(e, r), this)),
            (this.once = (e, r) => (this.events.once(e, r), this)),
            (this.removeListener = (e, r) => (
              this.events.removeListener(e, r), this
            )),
            (this.off = (e, r) => (this.events.off(e, r), this)),
            (this.parseAccount = (e) =>
              this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e),
            (this.signer = {}),
            (this.rpc = {});
        }
        static async init(e) {
          let r = new dist_index_es_C();
          return await r.initialize(e), r;
        }
        async request(e, r) {
          return await this.signer.request(
            e,
            this.formatChainId(this.chainId),
            r
          );
        }
        sendAsync(e, r, s) {
          this.signer.sendAsync(e, r, this.formatChainId(this.chainId), s);
        }
        get connected() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connected
          );
        }
        get connecting() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connecting
          );
        }
        async enable() {
          return (
            this.session || (await this.connect()),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async connect(e) {
          if (!this.signer.client)
            throw Error("Provider not initialized. Call init() first");
          this.loadConnectOpts(e);
          let { required: r, optional: s } = (function (e) {
            let {
              chains: r,
              optionalChains: s,
              methods: p,
              optionalMethods: b,
              events: w,
              optionalEvents: _,
              rpcMap: P,
            } = e;
            if (!(0, v.qt8)(r)) throw Error("Invalid chains");
            let S = {
                chains: r,
                methods: p || i1,
                events: w || i2,
                rpcMap: ethereum_provider_dist_index_es_p(
                  {},
                  r.length
                    ? { [dist_index_es_m(r)]: P[dist_index_es_m(r)] }
                    : {}
                ),
              },
              I = w?.filter((e) => !i2.includes(e)),
              A = p?.filter((e) => !i1.includes(e));
            if (
              !s &&
              !_ &&
              !b &&
              !(null != I && I.length) &&
              !(null != A && A.length)
            )
              return { required: r.length ? S : void 0 };
            let R = (I?.length && A?.length) || !s,
              C = {
                chains: [...new Set(R ? S.chains.concat(s || []) : s)],
                methods: [
                  ...new Set(S.methods.concat(null != b && b.length ? b : i6)),
                ],
                events: [
                  ...new Set(S.events.concat(null != _ && _.length ? _ : i8)),
                ],
                rpcMap: P,
              };
            return {
              required: r.length ? S : void 0,
              optional: s.length ? C : void 0,
            };
          })(this.rpc);
          try {
            let p = await new Promise(async (p, b) => {
              var v;
              this.rpc.showQrModal &&
                (null == (v = this.modal) ||
                  v.subscribeModal((e) => {
                    e.open ||
                      this.signer.session ||
                      (this.signer.abortPairingAttempt(),
                      b(Error("Connection request reset. Please try again.")));
                  })),
                await this.signer
                  .connect(
                    ethereum_provider_dist_index_es_E(
                      ethereum_provider_dist_index_es_p(
                        {
                          namespaces: ethereum_provider_dist_index_es_p(
                            {},
                            r && { [this.namespace]: r }
                          ),
                        },
                        s && { optionalNamespaces: { [this.namespace]: s } }
                      ),
                      { pairingTopic: e?.pairingTopic }
                    )
                  )
                  .then((e) => {
                    p(e);
                  })
                  .catch((e) => {
                    b(Error(e.message));
                  });
            });
            if (!p) return;
            let b = (0, v.guN)(p.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : b),
              this.setAccounts(b),
              this.events.emit("connect", {
                chainId: ethereum_provider_dist_index_es_v(this.chainId),
              });
          } catch (e) {
            throw (this.signer.logger.error(e), e);
          } finally {
            this.modal && this.modal.closeModal();
          }
        }
        async authenticate(e, r) {
          if (!this.signer.client)
            throw Error("Provider not initialized. Call init() first");
          this.loadConnectOpts({ chains: e?.chains });
          try {
            let s = await new Promise(async (s, p) => {
                var b;
                this.rpc.showQrModal &&
                  (null == (b = this.modal) ||
                    b.subscribeModal((e) => {
                      e.open ||
                        this.signer.session ||
                        (this.signer.abortPairingAttempt(),
                        p(
                          Error("Connection request reset. Please try again.")
                        ));
                    })),
                  await this.signer
                    .authenticate(
                      ethereum_provider_dist_index_es_E(
                        ethereum_provider_dist_index_es_p({}, e),
                        { chains: this.rpc.chains }
                      ),
                      r
                    )
                    .then((e) => {
                      s(e);
                    })
                    .catch((e) => {
                      p(Error(e.message));
                    });
              }),
              p = s.session;
            if (p) {
              let e = (0, v.guN)(p.namespaces, [this.namespace]);
              this.setChainIds(this.rpc.chains.length ? this.rpc.chains : e),
                this.setAccounts(e),
                this.events.emit("connect", {
                  chainId: ethereum_provider_dist_index_es_v(this.chainId),
                });
            }
            return s;
          } catch (e) {
            throw (this.signer.logger.error(e), e);
          } finally {
            this.modal && this.modal.closeModal();
          }
        }
        async disconnect() {
          this.session && (await this.signer.disconnect()), this.reset();
        }
        get isWalletConnect() {
          return !0;
        }
        get session() {
          return this.signer.session;
        }
        registerEventListeners() {
          this.signer.on("session_event", (e) => {
            let { params: r } = e,
              { event: s } = r;
            "accountsChanged" === s.name
              ? ((this.accounts = this.parseAccounts(s.data)),
                this.events.emit("accountsChanged", this.accounts))
              : "chainChanged" === s.name
              ? this.setChainId(this.formatChainId(s.data))
              : this.events.emit(s.name, s.data),
              this.events.emit("session_event", e);
          }),
            this.signer.on("chainChanged", (e) => {
              let r = parseInt(e);
              (this.chainId = r),
                this.events.emit(
                  "chainChanged",
                  ethereum_provider_dist_index_es_v(this.chainId)
                ),
                this.persist();
            }),
            this.signer.on("session_update", (e) => {
              this.events.emit("session_update", e);
            }),
            this.signer.on("session_delete", (e) => {
              this.reset(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  ethereum_provider_dist_index_es_E(
                    ethereum_provider_dist_index_es_p(
                      {},
                      (0, v.D6H)("USER_DISCONNECTED")
                    ),
                    { data: e.topic, name: "USER_DISCONNECTED" }
                  )
                );
            }),
            this.signer.on("display_uri", (e) => {
              var r, s;
              this.rpc.showQrModal &&
                (null == (r = this.modal) || r.closeModal(),
                null == (s = this.modal) || s.openModal({ uri: e })),
                this.events.emit("display_uri", e);
            });
        }
        switchEthereumChain(e) {
          this.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: e.toString(16) }],
          });
        }
        isCompatibleChainId(e) {
          return "string" == typeof e && e.startsWith(`${this.namespace}:`);
        }
        formatChainId(e) {
          return `${this.namespace}:${e}`;
        }
        parseChainId(e) {
          return Number(e.split(":")[1]);
        }
        setChainIds(e) {
          let r = e
            .filter((e) => this.isCompatibleChainId(e))
            .map((e) => this.parseChainId(e));
          r.length &&
            ((this.chainId = r[0]),
            this.events.emit(
              "chainChanged",
              ethereum_provider_dist_index_es_v(this.chainId)
            ),
            this.persist());
        }
        setChainId(e) {
          if (this.isCompatibleChainId(e)) {
            let r = this.parseChainId(e);
            (this.chainId = r), this.switchEthereumChain(r);
          }
        }
        parseAccountId(e) {
          let [r, s, p] = e.split(":");
          return { chainId: `${r}:${s}`, address: p };
        }
        setAccounts(e) {
          (this.accounts = e
            .filter(
              (e) =>
                this.parseChainId(this.parseAccountId(e).chainId) ===
                this.chainId
            )
            .map((e) => this.parseAccountId(e).address)),
            this.events.emit("accountsChanged", this.accounts);
        }
        getRpcConfig(e) {
          var r, s;
          let p = null != (r = e?.chains) ? r : [],
            b = null != (s = e?.optionalChains) ? s : [],
            v = p.concat(b);
          if (!v.length)
            throw Error(
              "No chains specified in either `chains` or `optionalChains`"
            );
          let w = p.length ? e?.methods || i1 : [],
            _ = p.length ? e?.events || i2 : [],
            P = e?.optionalMethods || [],
            S = e?.optionalEvents || [],
            I = e?.rpcMap || this.buildRpcMap(v, e.projectId),
            A = e?.qrModalOptions || void 0;
          return {
            chains: p?.map((e) => this.formatChainId(e)),
            optionalChains: b.map((e) => this.formatChainId(e)),
            methods: w,
            events: _,
            optionalMethods: P,
            optionalEvents: S,
            rpcMap: I,
            showQrModal: !!(null != e && e.showQrModal),
            qrModalOptions: A,
            projectId: e.projectId,
            metadata: e.metadata,
          };
        }
        buildRpcMap(e, r) {
          let s = {};
          return (
            e.forEach((e) => {
              s[e] = this.getRpcUrl(e, r);
            }),
            s
          );
        }
        async initialize(e) {
          if (
            ((this.rpc = this.getRpcConfig(e)),
            (this.chainId = this.rpc.chains.length
              ? dist_index_es_m(this.rpc.chains)
              : dist_index_es_m(this.rpc.optionalChains)),
            (this.signer = await index_es_dr.init({
              projectId: this.rpc.projectId,
              metadata: this.rpc.metadata,
              disableProviderPing: e.disableProviderPing,
              relayUrl: e.relayUrl,
              storageOptions: e.storageOptions,
              customStoragePrefix: e.customStoragePrefix,
              telemetryEnabled: e.telemetryEnabled,
            })),
            this.registerEventListeners(),
            await this.loadPersistedSession(),
            this.rpc.showQrModal)
          ) {
            let e;
            try {
              let { WalletConnectModal: r } = await s
                .e(2778)
                .then(s.bind(s, 92545));
              e = r;
            } catch {
              throw Error(
                "To use QR modal, please install @walletconnect/modal package"
              );
            }
            if (e)
              try {
                this.modal = new e(
                  ethereum_provider_dist_index_es_p(
                    { projectId: this.rpc.projectId },
                    this.rpc.qrModalOptions
                  )
                );
              } catch (e) {
                throw (
                  (this.signer.logger.error(e),
                  Error("Could not generate WalletConnectModal Instance"))
                );
              }
          }
        }
        loadConnectOpts(e) {
          if (!e) return;
          let { chains: r, optionalChains: s, rpcMap: p } = e;
          r &&
            (0, v.qt8)(r) &&
            ((this.rpc.chains = r.map((e) => this.formatChainId(e))),
            r.forEach((e) => {
              this.rpc.rpcMap[e] = p?.[e] || this.getRpcUrl(e);
            })),
            s &&
              (0, v.qt8)(s) &&
              ((this.rpc.optionalChains = []),
              (this.rpc.optionalChains = s?.map((e) => this.formatChainId(e))),
              s.forEach((e) => {
                this.rpc.rpcMap[e] = p?.[e] || this.getRpcUrl(e);
              }));
        }
        getRpcUrl(e, r) {
          var s;
          return (
            (null == (s = this.rpc.rpcMap) ? void 0 : s[e]) ||
            `https://rpc.walletconnect.org/v1/?chainId=eip155:${e}&projectId=${
              r || this.rpc.projectId
            }`
          );
        }
        async loadPersistedSession() {
          if (this.session)
            try {
              let e = await this.signer.client.core.storage.getItem(
                  `${this.STORAGE_KEY}/chainId`
                ),
                r = this.session.namespaces[`${this.namespace}:${e}`]
                  ? this.session.namespaces[`${this.namespace}:${e}`]
                  : this.session.namespaces[this.namespace];
              this.setChainIds(e ? [this.formatChainId(e)] : r?.accounts),
                this.setAccounts(r?.accounts);
            } catch (e) {
              this.signer.logger.error(
                "Failed to load persisted session, clearing state..."
              ),
                this.signer.logger.error(e),
                await this.disconnect().catch((e) =>
                  this.signer.logger.warn(e)
                );
            }
        }
        reset() {
          (this.chainId = 1), (this.accounts = []);
        }
        persist() {
          this.session &&
            this.signer.client.core.storage.setItem(
              `${this.STORAGE_KEY}/chainId`,
              this.chainId
            );
        }
        parseAccounts(e) {
          return "string" == typeof e || e instanceof String
            ? [this.parseAccount(e)]
            : e.map((e) => this.parseAccount(e));
        }
      };
      let rs = dist_index_es_C;
    },
    21721: function (e, r, s) {},
    44152: function (e, r, s) {
      !(function (e, r) {
        "use strict";
        function assert(e, r) {
          if (!e) throw Error(r || "Assertion failed");
        }
        function inherits(e, r) {
          e.super_ = r;
          var TempCtor = function () {};
          (TempCtor.prototype = r.prototype),
            (e.prototype = new TempCtor()),
            (e.prototype.constructor = e);
        }
        function BN(e, r, s) {
          if (BN.isBN(e)) return e;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== e &&
              (("le" === r || "be" === r) && ((s = r), (r = 10)),
              this._init(e || 0, r || 10, s || "be"));
        }
        "object" == typeof e ? (e.exports = BN) : (r.BN = BN),
          (BN.BN = BN),
          (BN.wordSize = 26);
        try {
          p =
            "undefined" != typeof window && void 0 !== window.Buffer
              ? window.Buffer
              : s(21903).Buffer;
        } catch (e) {}
        function parseHex4Bits(e, r) {
          var s = e.charCodeAt(r);
          return s >= 65 && s <= 70
            ? s - 55
            : s >= 97 && s <= 102
            ? s - 87
            : (s - 48) & 15;
        }
        function parseHexByte(e, r, s) {
          var p = parseHex4Bits(e, s);
          return s - 1 >= r && (p |= parseHex4Bits(e, s - 1) << 4), p;
        }
        function parseBase(e, r, s, p) {
          for (var b = 0, v = Math.min(e.length, s), w = r; w < v; w++) {
            var _ = e.charCodeAt(w) - 48;
            (b *= p),
              _ >= 49
                ? (b += _ - 49 + 10)
                : _ >= 17
                ? (b += _ - 17 + 10)
                : (b += _);
          }
          return b;
        }
        (BN.isBN = function (e) {
          return (
            e instanceof BN ||
            (null !== e &&
              "object" == typeof e &&
              e.constructor.wordSize === BN.wordSize &&
              Array.isArray(e.words))
          );
        }),
          (BN.max = function (e, r) {
            return e.cmp(r) > 0 ? e : r;
          }),
          (BN.min = function (e, r) {
            return 0 > e.cmp(r) ? e : r;
          }),
          (BN.prototype._init = function (e, r, s) {
            if ("number" == typeof e) return this._initNumber(e, r, s);
            if ("object" == typeof e) return this._initArray(e, r, s);
            "hex" === r && (r = 16), assert(r === (0 | r) && r >= 2 && r <= 36);
            var p = 0;
            "-" === (e = e.toString().replace(/\s+/g, ""))[0] &&
              (p++, (this.negative = 1)),
              p < e.length &&
                (16 === r
                  ? this._parseHex(e, p, s)
                  : (this._parseBase(e, r, p),
                    "le" === s && this._initArray(this.toArray(), r, s)));
          }),
          (BN.prototype._initNumber = function (e, r, s) {
            e < 0 && ((this.negative = 1), (e = -e)),
              e < 67108864
                ? ((this.words = [67108863 & e]), (this.length = 1))
                : e < 4503599627370496
                ? ((this.words = [67108863 & e, (e / 67108864) & 67108863]),
                  (this.length = 2))
                : (assert(e < 9007199254740992),
                  (this.words = [67108863 & e, (e / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === s && this._initArray(this.toArray(), r, s);
          }),
          (BN.prototype._initArray = function (e, r, s) {
            if ((assert("number" == typeof e.length), e.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(e.length / 3)),
              (this.words = Array(this.length));
            for (var p, b, v = 0; v < this.length; v++) this.words[v] = 0;
            var w = 0;
            if ("be" === s)
              for (v = e.length - 1, p = 0; v >= 0; v -= 3)
                (b = e[v] | (e[v - 1] << 8) | (e[v - 2] << 16)),
                  (this.words[p] |= (b << w) & 67108863),
                  (this.words[p + 1] = (b >>> (26 - w)) & 67108863),
                  (w += 24) >= 26 && ((w -= 26), p++);
            else if ("le" === s)
              for (v = 0, p = 0; v < e.length; v += 3)
                (b = e[v] | (e[v + 1] << 8) | (e[v + 2] << 16)),
                  (this.words[p] |= (b << w) & 67108863),
                  (this.words[p + 1] = (b >>> (26 - w)) & 67108863),
                  (w += 24) >= 26 && ((w -= 26), p++);
            return this.strip();
          }),
          (BN.prototype._parseHex = function (e, r, s) {
            (this.length = Math.ceil((e.length - r) / 6)),
              (this.words = Array(this.length));
            for (var p, b = 0; b < this.length; b++) this.words[b] = 0;
            var v = 0,
              w = 0;
            if ("be" === s)
              for (b = e.length - 1; b >= r; b -= 2)
                (p = parseHexByte(e, r, b) << v),
                  (this.words[w] |= 67108863 & p),
                  v >= 18
                    ? ((v -= 18), (w += 1), (this.words[w] |= p >>> 26))
                    : (v += 8);
            else
              for (
                b = (e.length - r) % 2 == 0 ? r + 1 : r;
                b < e.length;
                b += 2
              )
                (p = parseHexByte(e, r, b) << v),
                  (this.words[w] |= 67108863 & p),
                  v >= 18
                    ? ((v -= 18), (w += 1), (this.words[w] |= p >>> 26))
                    : (v += 8);
            this.strip();
          }),
          (BN.prototype._parseBase = function (e, r, s) {
            (this.words = [0]), (this.length = 1);
            for (var p = 0, b = 1; b <= 67108863; b *= r) p++;
            p--, (b = (b / r) | 0);
            for (
              var v = e.length - s,
                w = v % p,
                _ = Math.min(v, v - w) + s,
                P = 0,
                S = s;
              S < _;
              S += p
            )
              (P = parseBase(e, S, S + p, r)),
                this.imuln(b),
                this.words[0] + P < 67108864
                  ? (this.words[0] += P)
                  : this._iaddn(P);
            if (0 !== w) {
              var I = 1;
              for (P = parseBase(e, S, e.length, r), S = 0; S < w; S++) I *= r;
              this.imuln(I),
                this.words[0] + P < 67108864
                  ? (this.words[0] += P)
                  : this._iaddn(P);
            }
            this.strip();
          }),
          (BN.prototype.copy = function (e) {
            e.words = Array(this.length);
            for (var r = 0; r < this.length; r++) e.words[r] = this.words[r];
            (e.length = this.length),
              (e.negative = this.negative),
              (e.red = this.red);
          }),
          (BN.prototype.clone = function () {
            var e = new BN(null);
            return this.copy(e), e;
          }),
          (BN.prototype._expand = function (e) {
            for (; this.length < e; ) this.words[this.length++] = 0;
            return this;
          }),
          (BN.prototype.strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (BN.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          (BN.prototype.inspect = function () {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          });
        var p,
          b = [
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
          v = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          w = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        function smallMulTo(e, r, s) {
          s.negative = r.negative ^ e.negative;
          var p = (e.length + r.length) | 0;
          (s.length = p), (p = (p - 1) | 0);
          var b = 0 | e.words[0],
            v = 0 | r.words[0],
            w = b * v,
            _ = 67108863 & w,
            P = (w / 67108864) | 0;
          s.words[0] = _;
          for (var S = 1; S < p; S++) {
            for (
              var I = P >>> 26,
                A = 67108863 & P,
                R = Math.min(S, r.length - 1),
                C = Math.max(0, S - e.length + 1);
              C <= R;
              C++
            ) {
              var B = (S - C) | 0;
              (I +=
                ((w = (b = 0 | e.words[B]) * (v = 0 | r.words[C]) + A) /
                  67108864) |
                0),
                (A = 67108863 & w);
            }
            (s.words[S] = 0 | A), (P = 0 | I);
          }
          return 0 !== P ? (s.words[S] = 0 | P) : s.length--, s.strip();
        }
        (BN.prototype.toString = function (e, r) {
          if (((r = 0 | r || 1), 16 === (e = e || 10) || "hex" === e)) {
            s = "";
            for (var s, p = 0, _ = 0, P = 0; P < this.length; P++) {
              var S = this.words[P],
                I = (((S << p) | _) & 16777215).toString(16);
              (s =
                0 != (_ = (S >>> (24 - p)) & 16777215) || P !== this.length - 1
                  ? b[6 - I.length] + I + s
                  : I + s),
                (p += 2) >= 26 && ((p -= 26), P--);
            }
            for (0 !== _ && (s = _.toString(16) + s); s.length % r != 0; )
              s = "0" + s;
            return 0 !== this.negative && (s = "-" + s), s;
          }
          if (e === (0 | e) && e >= 2 && e <= 36) {
            var A = v[e],
              R = w[e];
            s = "";
            var C = this.clone();
            for (C.negative = 0; !C.isZero(); ) {
              var B = C.modn(R).toString(e);
              s = (C = C.idivn(R)).isZero() ? B + s : b[A - B.length] + B + s;
            }
            for (this.isZero() && (s = "0" + s); s.length % r != 0; )
              s = "0" + s;
            return 0 !== this.negative && (s = "-" + s), s;
          }
          assert(!1, "Base should be between 2 and 36");
        }),
          (BN.prototype.toNumber = function () {
            var e = this.words[0];
            return (
              2 === this.length
                ? (e += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (e += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  assert(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -e : e
            );
          }),
          (BN.prototype.toJSON = function () {
            return this.toString(16);
          }),
          (BN.prototype.toBuffer = function (e, r) {
            return assert(void 0 !== p), this.toArrayLike(p, e, r);
          }),
          (BN.prototype.toArray = function (e, r) {
            return this.toArrayLike(Array, e, r);
          }),
          (BN.prototype.toArrayLike = function (e, r, s) {
            var p,
              b,
              v = this.byteLength(),
              w = s || Math.max(1, v);
            assert(v <= w, "byte array longer than desired length"),
              assert(w > 0, "Requested array length <= 0"),
              this.strip();
            var _ = new e(w),
              P = this.clone();
            if ("le" === r) {
              for (b = 0; !P.isZero(); b++)
                (p = P.andln(255)), P.iushrn(8), (_[b] = p);
              for (; b < w; b++) _[b] = 0;
            } else {
              for (b = 0; b < w - v; b++) _[b] = 0;
              for (b = 0; !P.isZero(); b++)
                (p = P.andln(255)), P.iushrn(8), (_[w - b - 1] = p);
            }
            return _;
          }),
          Math.clz32
            ? (BN.prototype._countBits = function (e) {
                return 32 - Math.clz32(e);
              })
            : (BN.prototype._countBits = function (e) {
                var r = e,
                  s = 0;
                return (
                  r >= 4096 && ((s += 13), (r >>>= 13)),
                  r >= 64 && ((s += 7), (r >>>= 7)),
                  r >= 8 && ((s += 4), (r >>>= 4)),
                  r >= 2 && ((s += 2), (r >>>= 2)),
                  s + r
                );
              }),
          (BN.prototype._zeroBits = function (e) {
            if (0 === e) return 26;
            var r = e,
              s = 0;
            return (
              (8191 & r) == 0 && ((s += 13), (r >>>= 13)),
              (127 & r) == 0 && ((s += 7), (r >>>= 7)),
              (15 & r) == 0 && ((s += 4), (r >>>= 4)),
              (3 & r) == 0 && ((s += 2), (r >>>= 2)),
              (1 & r) == 0 && s++,
              s
            );
          }),
          (BN.prototype.bitLength = function () {
            var e = this.words[this.length - 1],
              r = this._countBits(e);
            return (this.length - 1) * 26 + r;
          }),
          (BN.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var e = 0, r = 0; r < this.length; r++) {
              var s = this._zeroBits(this.words[r]);
              if (((e += s), 26 !== s)) break;
            }
            return e;
          }),
          (BN.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (BN.prototype.toTwos = function (e) {
            return 0 !== this.negative
              ? this.abs().inotn(e).iaddn(1)
              : this.clone();
          }),
          (BN.prototype.fromTwos = function (e) {
            return this.testn(e - 1)
              ? this.notn(e).iaddn(1).ineg()
              : this.clone();
          }),
          (BN.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (BN.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (BN.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (BN.prototype.iuor = function (e) {
            for (; this.length < e.length; ) this.words[this.length++] = 0;
            for (var r = 0; r < e.length; r++)
              this.words[r] = this.words[r] | e.words[r];
            return this.strip();
          }),
          (BN.prototype.ior = function (e) {
            return assert((this.negative | e.negative) == 0), this.iuor(e);
          }),
          (BN.prototype.or = function (e) {
            return this.length > e.length
              ? this.clone().ior(e)
              : e.clone().ior(this);
          }),
          (BN.prototype.uor = function (e) {
            return this.length > e.length
              ? this.clone().iuor(e)
              : e.clone().iuor(this);
          }),
          (BN.prototype.iuand = function (e) {
            var r;
            r = this.length > e.length ? e : this;
            for (var s = 0; s < r.length; s++)
              this.words[s] = this.words[s] & e.words[s];
            return (this.length = r.length), this.strip();
          }),
          (BN.prototype.iand = function (e) {
            return assert((this.negative | e.negative) == 0), this.iuand(e);
          }),
          (BN.prototype.and = function (e) {
            return this.length > e.length
              ? this.clone().iand(e)
              : e.clone().iand(this);
          }),
          (BN.prototype.uand = function (e) {
            return this.length > e.length
              ? this.clone().iuand(e)
              : e.clone().iuand(this);
          }),
          (BN.prototype.iuxor = function (e) {
            this.length > e.length
              ? ((r = this), (s = e))
              : ((r = e), (s = this));
            for (var r, s, p = 0; p < s.length; p++)
              this.words[p] = r.words[p] ^ s.words[p];
            if (this !== r)
              for (; p < r.length; p++) this.words[p] = r.words[p];
            return (this.length = r.length), this.strip();
          }),
          (BN.prototype.ixor = function (e) {
            return assert((this.negative | e.negative) == 0), this.iuxor(e);
          }),
          (BN.prototype.xor = function (e) {
            return this.length > e.length
              ? this.clone().ixor(e)
              : e.clone().ixor(this);
          }),
          (BN.prototype.uxor = function (e) {
            return this.length > e.length
              ? this.clone().iuxor(e)
              : e.clone().iuxor(this);
          }),
          (BN.prototype.inotn = function (e) {
            assert("number" == typeof e && e >= 0);
            var r = 0 | Math.ceil(e / 26),
              s = e % 26;
            this._expand(r), s > 0 && r--;
            for (var p = 0; p < r; p++)
              this.words[p] = 67108863 & ~this.words[p];
            return (
              s > 0 &&
                (this.words[p] = ~this.words[p] & (67108863 >> (26 - s))),
              this.strip()
            );
          }),
          (BN.prototype.notn = function (e) {
            return this.clone().inotn(e);
          }),
          (BN.prototype.setn = function (e, r) {
            assert("number" == typeof e && e >= 0);
            var s = (e / 26) | 0,
              p = e % 26;
            return (
              this._expand(s + 1),
              r
                ? (this.words[s] = this.words[s] | (1 << p))
                : (this.words[s] = this.words[s] & ~(1 << p)),
              this.strip()
            );
          }),
          (BN.prototype.iadd = function (e) {
            if (0 !== this.negative && 0 === e.negative)
              return (
                (this.negative = 0),
                (r = this.isub(e)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== e.negative)
              return (
                (e.negative = 0),
                (r = this.isub(e)),
                (e.negative = 1),
                r._normSign()
              );
            this.length > e.length
              ? ((s = this), (p = e))
              : ((s = e), (p = this));
            for (var r, s, p, b = 0, v = 0; v < p.length; v++)
              (r = (0 | s.words[v]) + (0 | p.words[v]) + b),
                (this.words[v] = 67108863 & r),
                (b = r >>> 26);
            for (; 0 !== b && v < s.length; v++)
              (r = (0 | s.words[v]) + b),
                (this.words[v] = 67108863 & r),
                (b = r >>> 26);
            if (((this.length = s.length), 0 !== b))
              (this.words[this.length] = b), this.length++;
            else if (s !== this)
              for (; v < s.length; v++) this.words[v] = s.words[v];
            return this;
          }),
          (BN.prototype.add = function (e) {
            var r;
            return 0 !== e.negative && 0 === this.negative
              ? ((e.negative = 0), (r = this.sub(e)), (e.negative ^= 1), r)
              : 0 === e.negative && 0 !== this.negative
              ? ((this.negative = 0), (r = e.sub(this)), (this.negative = 1), r)
              : this.length > e.length
              ? this.clone().iadd(e)
              : e.clone().iadd(this);
          }),
          (BN.prototype.isub = function (e) {
            if (0 !== e.negative) {
              e.negative = 0;
              var r,
                s,
                p = this.iadd(e);
              return (e.negative = 1), p._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(e),
                (this.negative = 1),
                this._normSign()
              );
            var b = this.cmp(e);
            if (0 === b)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            b > 0 ? ((r = this), (s = e)) : ((r = e), (s = this));
            for (var v = 0, w = 0; w < s.length; w++)
              (v = (p = (0 | r.words[w]) - (0 | s.words[w]) + v) >> 26),
                (this.words[w] = 67108863 & p);
            for (; 0 !== v && w < r.length; w++)
              (v = (p = (0 | r.words[w]) + v) >> 26),
                (this.words[w] = 67108863 & p);
            if (0 === v && w < r.length && r !== this)
              for (; w < r.length; w++) this.words[w] = r.words[w];
            return (
              (this.length = Math.max(this.length, w)),
              r !== this && (this.negative = 1),
              this.strip()
            );
          }),
          (BN.prototype.sub = function (e) {
            return this.clone().isub(e);
          });
        var comb10MulTo = function (e, r, s) {
          var p,
            b,
            v,
            w = e.words,
            _ = r.words,
            P = s.words,
            S = 0,
            I = 0 | w[0],
            A = 8191 & I,
            R = I >>> 13,
            C = 0 | w[1],
            B = 8191 & C,
            j = C >>> 13,
            V = 0 | w[2],
            J = 8191 & V,
            W = V >>> 13,
            X = 0 | w[3],
            et = 8191 & X,
            es = X >>> 13,
            eo = 0 | w[4],
            ec = 8191 & eo,
            ed = eo >>> 13,
            eh = 0 | w[5],
            ef = 8191 & eh,
            el = eh >>> 13,
            ep = 0 | w[6],
            eb = 8191 & ep,
            eg = ep >>> 13,
            em = 0 | w[7],
            ev = 8191 & em,
            ey = em >>> 13,
            ew = 0 | w[8],
            e_ = 8191 & ew,
            eM = ew >>> 13,
            eP = 0 | w[9],
            eS = 8191 & eP,
            eI = eP >>> 13,
            eE = 0 | _[0],
            ex = 8191 & eE,
            eA = eE >>> 13,
            eN = 0 | _[1],
            eR = 8191 & eN,
            eC = eN >>> 13,
            eq = 0 | _[2],
            eT = 8191 & eq,
            eB = eq >>> 13,
            eO = 0 | _[3],
            ek = 8191 & eO,
            eD = eO >>> 13,
            ez = 0 | _[4],
            eL = 8191 & ez,
            ej = ez >>> 13,
            e$ = 0 | _[5],
            eF = 8191 & e$,
            eK = e$ >>> 13,
            eH = 0 | _[6],
            eU = 8191 & eH,
            eV = eH >>> 13,
            eJ = 0 | _[7],
            eG = 8191 & eJ,
            eY = eJ >>> 13,
            eW = 0 | _[8],
            eZ = 8191 & eW,
            eQ = eW >>> 13,
            eX = 0 | _[9],
            e0 = 8191 & eX,
            e1 = eX >>> 13;
          (s.negative = e.negative ^ r.negative), (s.length = 19);
          var e6 =
            (((S + (p = Math.imul(A, ex))) | 0) +
              ((8191 & (b = ((b = Math.imul(A, eA)) + Math.imul(R, ex)) | 0)) <<
                13)) |
            0;
          (S = ((((v = Math.imul(R, eA)) + (b >>> 13)) | 0) + (e6 >>> 26)) | 0),
            (e6 &= 67108863),
            (p = Math.imul(B, ex)),
            (b = ((b = Math.imul(B, eA)) + Math.imul(j, ex)) | 0),
            (v = Math.imul(j, eA));
          var e2 =
            (((S + (p = (p + Math.imul(A, eR)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(A, eC)) | 0) + Math.imul(R, eR)) | 0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(R, eC)) | 0) + (b >>> 13)) | 0) +
              (e2 >>> 26)) |
            0),
            (e2 &= 67108863),
            (p = Math.imul(J, ex)),
            (b = ((b = Math.imul(J, eA)) + Math.imul(W, ex)) | 0),
            (v = Math.imul(W, eA)),
            (p = (p + Math.imul(B, eR)) | 0),
            (b = ((b = (b + Math.imul(B, eC)) | 0) + Math.imul(j, eR)) | 0),
            (v = (v + Math.imul(j, eC)) | 0);
          var e8 =
            (((S + (p = (p + Math.imul(A, eT)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(A, eB)) | 0) + Math.imul(R, eT)) | 0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(R, eB)) | 0) + (b >>> 13)) | 0) +
              (e8 >>> 26)) |
            0),
            (e8 &= 67108863),
            (p = Math.imul(et, ex)),
            (b = ((b = Math.imul(et, eA)) + Math.imul(es, ex)) | 0),
            (v = Math.imul(es, eA)),
            (p = (p + Math.imul(J, eR)) | 0),
            (b = ((b = (b + Math.imul(J, eC)) | 0) + Math.imul(W, eR)) | 0),
            (v = (v + Math.imul(W, eC)) | 0),
            (p = (p + Math.imul(B, eT)) | 0),
            (b = ((b = (b + Math.imul(B, eB)) | 0) + Math.imul(j, eT)) | 0),
            (v = (v + Math.imul(j, eB)) | 0);
          var e3 =
            (((S + (p = (p + Math.imul(A, ek)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(A, eD)) | 0) + Math.imul(R, ek)) | 0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(R, eD)) | 0) + (b >>> 13)) | 0) +
              (e3 >>> 26)) |
            0),
            (e3 &= 67108863),
            (p = Math.imul(ec, ex)),
            (b = ((b = Math.imul(ec, eA)) + Math.imul(ed, ex)) | 0),
            (v = Math.imul(ed, eA)),
            (p = (p + Math.imul(et, eR)) | 0),
            (b = ((b = (b + Math.imul(et, eC)) | 0) + Math.imul(es, eR)) | 0),
            (v = (v + Math.imul(es, eC)) | 0),
            (p = (p + Math.imul(J, eT)) | 0),
            (b = ((b = (b + Math.imul(J, eB)) | 0) + Math.imul(W, eT)) | 0),
            (v = (v + Math.imul(W, eB)) | 0),
            (p = (p + Math.imul(B, ek)) | 0),
            (b = ((b = (b + Math.imul(B, eD)) | 0) + Math.imul(j, ek)) | 0),
            (v = (v + Math.imul(j, eD)) | 0);
          var e4 =
            (((S + (p = (p + Math.imul(A, eL)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(A, ej)) | 0) + Math.imul(R, eL)) | 0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(R, ej)) | 0) + (b >>> 13)) | 0) +
              (e4 >>> 26)) |
            0),
            (e4 &= 67108863),
            (p = Math.imul(ef, ex)),
            (b = ((b = Math.imul(ef, eA)) + Math.imul(el, ex)) | 0),
            (v = Math.imul(el, eA)),
            (p = (p + Math.imul(ec, eR)) | 0),
            (b = ((b = (b + Math.imul(ec, eC)) | 0) + Math.imul(ed, eR)) | 0),
            (v = (v + Math.imul(ed, eC)) | 0),
            (p = (p + Math.imul(et, eT)) | 0),
            (b = ((b = (b + Math.imul(et, eB)) | 0) + Math.imul(es, eT)) | 0),
            (v = (v + Math.imul(es, eB)) | 0),
            (p = (p + Math.imul(J, ek)) | 0),
            (b = ((b = (b + Math.imul(J, eD)) | 0) + Math.imul(W, ek)) | 0),
            (v = (v + Math.imul(W, eD)) | 0),
            (p = (p + Math.imul(B, eL)) | 0),
            (b = ((b = (b + Math.imul(B, ej)) | 0) + Math.imul(j, eL)) | 0),
            (v = (v + Math.imul(j, ej)) | 0);
          var e9 =
            (((S + (p = (p + Math.imul(A, eF)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(A, eK)) | 0) + Math.imul(R, eF)) | 0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(R, eK)) | 0) + (b >>> 13)) | 0) +
              (e9 >>> 26)) |
            0),
            (e9 &= 67108863),
            (p = Math.imul(eb, ex)),
            (b = ((b = Math.imul(eb, eA)) + Math.imul(eg, ex)) | 0),
            (v = Math.imul(eg, eA)),
            (p = (p + Math.imul(ef, eR)) | 0),
            (b = ((b = (b + Math.imul(ef, eC)) | 0) + Math.imul(el, eR)) | 0),
            (v = (v + Math.imul(el, eC)) | 0),
            (p = (p + Math.imul(ec, eT)) | 0),
            (b = ((b = (b + Math.imul(ec, eB)) | 0) + Math.imul(ed, eT)) | 0),
            (v = (v + Math.imul(ed, eB)) | 0),
            (p = (p + Math.imul(et, ek)) | 0),
            (b = ((b = (b + Math.imul(et, eD)) | 0) + Math.imul(es, ek)) | 0),
            (v = (v + Math.imul(es, eD)) | 0),
            (p = (p + Math.imul(J, eL)) | 0),
            (b = ((b = (b + Math.imul(J, ej)) | 0) + Math.imul(W, eL)) | 0),
            (v = (v + Math.imul(W, ej)) | 0),
            (p = (p + Math.imul(B, eF)) | 0),
            (b = ((b = (b + Math.imul(B, eK)) | 0) + Math.imul(j, eF)) | 0),
            (v = (v + Math.imul(j, eK)) | 0);
          var e7 =
            (((S + (p = (p + Math.imul(A, eU)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(A, eV)) | 0) + Math.imul(R, eU)) | 0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(R, eV)) | 0) + (b >>> 13)) | 0) +
              (e7 >>> 26)) |
            0),
            (e7 &= 67108863),
            (p = Math.imul(ev, ex)),
            (b = ((b = Math.imul(ev, eA)) + Math.imul(ey, ex)) | 0),
            (v = Math.imul(ey, eA)),
            (p = (p + Math.imul(eb, eR)) | 0),
            (b = ((b = (b + Math.imul(eb, eC)) | 0) + Math.imul(eg, eR)) | 0),
            (v = (v + Math.imul(eg, eC)) | 0),
            (p = (p + Math.imul(ef, eT)) | 0),
            (b = ((b = (b + Math.imul(ef, eB)) | 0) + Math.imul(el, eT)) | 0),
            (v = (v + Math.imul(el, eB)) | 0),
            (p = (p + Math.imul(ec, ek)) | 0),
            (b = ((b = (b + Math.imul(ec, eD)) | 0) + Math.imul(ed, ek)) | 0),
            (v = (v + Math.imul(ed, eD)) | 0),
            (p = (p + Math.imul(et, eL)) | 0),
            (b = ((b = (b + Math.imul(et, ej)) | 0) + Math.imul(es, eL)) | 0),
            (v = (v + Math.imul(es, ej)) | 0),
            (p = (p + Math.imul(J, eF)) | 0),
            (b = ((b = (b + Math.imul(J, eK)) | 0) + Math.imul(W, eF)) | 0),
            (v = (v + Math.imul(W, eK)) | 0),
            (p = (p + Math.imul(B, eU)) | 0),
            (b = ((b = (b + Math.imul(B, eV)) | 0) + Math.imul(j, eU)) | 0),
            (v = (v + Math.imul(j, eV)) | 0);
          var e5 =
            (((S + (p = (p + Math.imul(A, eG)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(A, eY)) | 0) + Math.imul(R, eG)) | 0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(R, eY)) | 0) + (b >>> 13)) | 0) +
              (e5 >>> 26)) |
            0),
            (e5 &= 67108863),
            (p = Math.imul(e_, ex)),
            (b = ((b = Math.imul(e_, eA)) + Math.imul(eM, ex)) | 0),
            (v = Math.imul(eM, eA)),
            (p = (p + Math.imul(ev, eR)) | 0),
            (b = ((b = (b + Math.imul(ev, eC)) | 0) + Math.imul(ey, eR)) | 0),
            (v = (v + Math.imul(ey, eC)) | 0),
            (p = (p + Math.imul(eb, eT)) | 0),
            (b = ((b = (b + Math.imul(eb, eB)) | 0) + Math.imul(eg, eT)) | 0),
            (v = (v + Math.imul(eg, eB)) | 0),
            (p = (p + Math.imul(ef, ek)) | 0),
            (b = ((b = (b + Math.imul(ef, eD)) | 0) + Math.imul(el, ek)) | 0),
            (v = (v + Math.imul(el, eD)) | 0),
            (p = (p + Math.imul(ec, eL)) | 0),
            (b = ((b = (b + Math.imul(ec, ej)) | 0) + Math.imul(ed, eL)) | 0),
            (v = (v + Math.imul(ed, ej)) | 0),
            (p = (p + Math.imul(et, eF)) | 0),
            (b = ((b = (b + Math.imul(et, eK)) | 0) + Math.imul(es, eF)) | 0),
            (v = (v + Math.imul(es, eK)) | 0),
            (p = (p + Math.imul(J, eU)) | 0),
            (b = ((b = (b + Math.imul(J, eV)) | 0) + Math.imul(W, eU)) | 0),
            (v = (v + Math.imul(W, eV)) | 0),
            (p = (p + Math.imul(B, eG)) | 0),
            (b = ((b = (b + Math.imul(B, eY)) | 0) + Math.imul(j, eG)) | 0),
            (v = (v + Math.imul(j, eY)) | 0);
          var ts =
            (((S + (p = (p + Math.imul(A, eZ)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(A, eQ)) | 0) + Math.imul(R, eZ)) | 0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(R, eQ)) | 0) + (b >>> 13)) | 0) +
              (ts >>> 26)) |
            0),
            (ts &= 67108863),
            (p = Math.imul(eS, ex)),
            (b = ((b = Math.imul(eS, eA)) + Math.imul(eI, ex)) | 0),
            (v = Math.imul(eI, eA)),
            (p = (p + Math.imul(e_, eR)) | 0),
            (b = ((b = (b + Math.imul(e_, eC)) | 0) + Math.imul(eM, eR)) | 0),
            (v = (v + Math.imul(eM, eC)) | 0),
            (p = (p + Math.imul(ev, eT)) | 0),
            (b = ((b = (b + Math.imul(ev, eB)) | 0) + Math.imul(ey, eT)) | 0),
            (v = (v + Math.imul(ey, eB)) | 0),
            (p = (p + Math.imul(eb, ek)) | 0),
            (b = ((b = (b + Math.imul(eb, eD)) | 0) + Math.imul(eg, ek)) | 0),
            (v = (v + Math.imul(eg, eD)) | 0),
            (p = (p + Math.imul(ef, eL)) | 0),
            (b = ((b = (b + Math.imul(ef, ej)) | 0) + Math.imul(el, eL)) | 0),
            (v = (v + Math.imul(el, ej)) | 0),
            (p = (p + Math.imul(ec, eF)) | 0),
            (b = ((b = (b + Math.imul(ec, eK)) | 0) + Math.imul(ed, eF)) | 0),
            (v = (v + Math.imul(ed, eK)) | 0),
            (p = (p + Math.imul(et, eU)) | 0),
            (b = ((b = (b + Math.imul(et, eV)) | 0) + Math.imul(es, eU)) | 0),
            (v = (v + Math.imul(es, eV)) | 0),
            (p = (p + Math.imul(J, eG)) | 0),
            (b = ((b = (b + Math.imul(J, eY)) | 0) + Math.imul(W, eG)) | 0),
            (v = (v + Math.imul(W, eY)) | 0),
            (p = (p + Math.imul(B, eZ)) | 0),
            (b = ((b = (b + Math.imul(B, eQ)) | 0) + Math.imul(j, eZ)) | 0),
            (v = (v + Math.imul(j, eQ)) | 0);
          var to =
            (((S + (p = (p + Math.imul(A, e0)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(A, e1)) | 0) + Math.imul(R, e0)) | 0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(R, e1)) | 0) + (b >>> 13)) | 0) +
              (to >>> 26)) |
            0),
            (to &= 67108863),
            (p = Math.imul(eS, eR)),
            (b = ((b = Math.imul(eS, eC)) + Math.imul(eI, eR)) | 0),
            (v = Math.imul(eI, eC)),
            (p = (p + Math.imul(e_, eT)) | 0),
            (b = ((b = (b + Math.imul(e_, eB)) | 0) + Math.imul(eM, eT)) | 0),
            (v = (v + Math.imul(eM, eB)) | 0),
            (p = (p + Math.imul(ev, ek)) | 0),
            (b = ((b = (b + Math.imul(ev, eD)) | 0) + Math.imul(ey, ek)) | 0),
            (v = (v + Math.imul(ey, eD)) | 0),
            (p = (p + Math.imul(eb, eL)) | 0),
            (b = ((b = (b + Math.imul(eb, ej)) | 0) + Math.imul(eg, eL)) | 0),
            (v = (v + Math.imul(eg, ej)) | 0),
            (p = (p + Math.imul(ef, eF)) | 0),
            (b = ((b = (b + Math.imul(ef, eK)) | 0) + Math.imul(el, eF)) | 0),
            (v = (v + Math.imul(el, eK)) | 0),
            (p = (p + Math.imul(ec, eU)) | 0),
            (b = ((b = (b + Math.imul(ec, eV)) | 0) + Math.imul(ed, eU)) | 0),
            (v = (v + Math.imul(ed, eV)) | 0),
            (p = (p + Math.imul(et, eG)) | 0),
            (b = ((b = (b + Math.imul(et, eY)) | 0) + Math.imul(es, eG)) | 0),
            (v = (v + Math.imul(es, eY)) | 0),
            (p = (p + Math.imul(J, eZ)) | 0),
            (b = ((b = (b + Math.imul(J, eQ)) | 0) + Math.imul(W, eZ)) | 0),
            (v = (v + Math.imul(W, eQ)) | 0);
          var tc =
            (((S + (p = (p + Math.imul(B, e0)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(B, e1)) | 0) + Math.imul(j, e0)) | 0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(j, e1)) | 0) + (b >>> 13)) | 0) +
              (tc >>> 26)) |
            0),
            (tc &= 67108863),
            (p = Math.imul(eS, eT)),
            (b = ((b = Math.imul(eS, eB)) + Math.imul(eI, eT)) | 0),
            (v = Math.imul(eI, eB)),
            (p = (p + Math.imul(e_, ek)) | 0),
            (b = ((b = (b + Math.imul(e_, eD)) | 0) + Math.imul(eM, ek)) | 0),
            (v = (v + Math.imul(eM, eD)) | 0),
            (p = (p + Math.imul(ev, eL)) | 0),
            (b = ((b = (b + Math.imul(ev, ej)) | 0) + Math.imul(ey, eL)) | 0),
            (v = (v + Math.imul(ey, ej)) | 0),
            (p = (p + Math.imul(eb, eF)) | 0),
            (b = ((b = (b + Math.imul(eb, eK)) | 0) + Math.imul(eg, eF)) | 0),
            (v = (v + Math.imul(eg, eK)) | 0),
            (p = (p + Math.imul(ef, eU)) | 0),
            (b = ((b = (b + Math.imul(ef, eV)) | 0) + Math.imul(el, eU)) | 0),
            (v = (v + Math.imul(el, eV)) | 0),
            (p = (p + Math.imul(ec, eG)) | 0),
            (b = ((b = (b + Math.imul(ec, eY)) | 0) + Math.imul(ed, eG)) | 0),
            (v = (v + Math.imul(ed, eY)) | 0),
            (p = (p + Math.imul(et, eZ)) | 0),
            (b = ((b = (b + Math.imul(et, eQ)) | 0) + Math.imul(es, eZ)) | 0),
            (v = (v + Math.imul(es, eQ)) | 0);
          var td =
            (((S + (p = (p + Math.imul(J, e0)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(J, e1)) | 0) + Math.imul(W, e0)) | 0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(W, e1)) | 0) + (b >>> 13)) | 0) +
              (td >>> 26)) |
            0),
            (td &= 67108863),
            (p = Math.imul(eS, ek)),
            (b = ((b = Math.imul(eS, eD)) + Math.imul(eI, ek)) | 0),
            (v = Math.imul(eI, eD)),
            (p = (p + Math.imul(e_, eL)) | 0),
            (b = ((b = (b + Math.imul(e_, ej)) | 0) + Math.imul(eM, eL)) | 0),
            (v = (v + Math.imul(eM, ej)) | 0),
            (p = (p + Math.imul(ev, eF)) | 0),
            (b = ((b = (b + Math.imul(ev, eK)) | 0) + Math.imul(ey, eF)) | 0),
            (v = (v + Math.imul(ey, eK)) | 0),
            (p = (p + Math.imul(eb, eU)) | 0),
            (b = ((b = (b + Math.imul(eb, eV)) | 0) + Math.imul(eg, eU)) | 0),
            (v = (v + Math.imul(eg, eV)) | 0),
            (p = (p + Math.imul(ef, eG)) | 0),
            (b = ((b = (b + Math.imul(ef, eY)) | 0) + Math.imul(el, eG)) | 0),
            (v = (v + Math.imul(el, eY)) | 0),
            (p = (p + Math.imul(ec, eZ)) | 0),
            (b = ((b = (b + Math.imul(ec, eQ)) | 0) + Math.imul(ed, eZ)) | 0),
            (v = (v + Math.imul(ed, eQ)) | 0);
          var th =
            (((S + (p = (p + Math.imul(et, e0)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(et, e1)) | 0) + Math.imul(es, e0)) |
                  0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(es, e1)) | 0) + (b >>> 13)) | 0) +
              (th >>> 26)) |
            0),
            (th &= 67108863),
            (p = Math.imul(eS, eL)),
            (b = ((b = Math.imul(eS, ej)) + Math.imul(eI, eL)) | 0),
            (v = Math.imul(eI, ej)),
            (p = (p + Math.imul(e_, eF)) | 0),
            (b = ((b = (b + Math.imul(e_, eK)) | 0) + Math.imul(eM, eF)) | 0),
            (v = (v + Math.imul(eM, eK)) | 0),
            (p = (p + Math.imul(ev, eU)) | 0),
            (b = ((b = (b + Math.imul(ev, eV)) | 0) + Math.imul(ey, eU)) | 0),
            (v = (v + Math.imul(ey, eV)) | 0),
            (p = (p + Math.imul(eb, eG)) | 0),
            (b = ((b = (b + Math.imul(eb, eY)) | 0) + Math.imul(eg, eG)) | 0),
            (v = (v + Math.imul(eg, eY)) | 0),
            (p = (p + Math.imul(ef, eZ)) | 0),
            (b = ((b = (b + Math.imul(ef, eQ)) | 0) + Math.imul(el, eZ)) | 0),
            (v = (v + Math.imul(el, eQ)) | 0);
          var tf =
            (((S + (p = (p + Math.imul(ec, e0)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(ec, e1)) | 0) + Math.imul(ed, e0)) |
                  0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(ed, e1)) | 0) + (b >>> 13)) | 0) +
              (tf >>> 26)) |
            0),
            (tf &= 67108863),
            (p = Math.imul(eS, eF)),
            (b = ((b = Math.imul(eS, eK)) + Math.imul(eI, eF)) | 0),
            (v = Math.imul(eI, eK)),
            (p = (p + Math.imul(e_, eU)) | 0),
            (b = ((b = (b + Math.imul(e_, eV)) | 0) + Math.imul(eM, eU)) | 0),
            (v = (v + Math.imul(eM, eV)) | 0),
            (p = (p + Math.imul(ev, eG)) | 0),
            (b = ((b = (b + Math.imul(ev, eY)) | 0) + Math.imul(ey, eG)) | 0),
            (v = (v + Math.imul(ey, eY)) | 0),
            (p = (p + Math.imul(eb, eZ)) | 0),
            (b = ((b = (b + Math.imul(eb, eQ)) | 0) + Math.imul(eg, eZ)) | 0),
            (v = (v + Math.imul(eg, eQ)) | 0);
          var tl =
            (((S + (p = (p + Math.imul(ef, e0)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(ef, e1)) | 0) + Math.imul(el, e0)) |
                  0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(el, e1)) | 0) + (b >>> 13)) | 0) +
              (tl >>> 26)) |
            0),
            (tl &= 67108863),
            (p = Math.imul(eS, eU)),
            (b = ((b = Math.imul(eS, eV)) + Math.imul(eI, eU)) | 0),
            (v = Math.imul(eI, eV)),
            (p = (p + Math.imul(e_, eG)) | 0),
            (b = ((b = (b + Math.imul(e_, eY)) | 0) + Math.imul(eM, eG)) | 0),
            (v = (v + Math.imul(eM, eY)) | 0),
            (p = (p + Math.imul(ev, eZ)) | 0),
            (b = ((b = (b + Math.imul(ev, eQ)) | 0) + Math.imul(ey, eZ)) | 0),
            (v = (v + Math.imul(ey, eQ)) | 0);
          var tp =
            (((S + (p = (p + Math.imul(eb, e0)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(eb, e1)) | 0) + Math.imul(eg, e0)) |
                  0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(eg, e1)) | 0) + (b >>> 13)) | 0) +
              (tp >>> 26)) |
            0),
            (tp &= 67108863),
            (p = Math.imul(eS, eG)),
            (b = ((b = Math.imul(eS, eY)) + Math.imul(eI, eG)) | 0),
            (v = Math.imul(eI, eY)),
            (p = (p + Math.imul(e_, eZ)) | 0),
            (b = ((b = (b + Math.imul(e_, eQ)) | 0) + Math.imul(eM, eZ)) | 0),
            (v = (v + Math.imul(eM, eQ)) | 0);
          var tb =
            (((S + (p = (p + Math.imul(ev, e0)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(ev, e1)) | 0) + Math.imul(ey, e0)) |
                  0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(ey, e1)) | 0) + (b >>> 13)) | 0) +
              (tb >>> 26)) |
            0),
            (tb &= 67108863),
            (p = Math.imul(eS, eZ)),
            (b = ((b = Math.imul(eS, eQ)) + Math.imul(eI, eZ)) | 0),
            (v = Math.imul(eI, eQ));
          var tg =
            (((S + (p = (p + Math.imul(e_, e0)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(e_, e1)) | 0) + Math.imul(eM, e0)) |
                  0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(eM, e1)) | 0) + (b >>> 13)) | 0) +
              (tg >>> 26)) |
            0),
            (tg &= 67108863);
          var tm =
            (((S + (p = Math.imul(eS, e0))) | 0) +
              ((8191 &
                (b = ((b = Math.imul(eS, e1)) + Math.imul(eI, e0)) | 0)) <<
                13)) |
            0;
          return (
            (S =
              ((((v = Math.imul(eI, e1)) + (b >>> 13)) | 0) + (tm >>> 26)) | 0),
            (tm &= 67108863),
            (P[0] = e6),
            (P[1] = e2),
            (P[2] = e8),
            (P[3] = e3),
            (P[4] = e4),
            (P[5] = e9),
            (P[6] = e7),
            (P[7] = e5),
            (P[8] = ts),
            (P[9] = to),
            (P[10] = tc),
            (P[11] = td),
            (P[12] = th),
            (P[13] = tf),
            (P[14] = tl),
            (P[15] = tp),
            (P[16] = tb),
            (P[17] = tg),
            (P[18] = tm),
            0 !== S && ((P[19] = S), s.length++),
            s
          );
        };
        function jumboMulTo(e, r, s) {
          return new FFTM().mulp(e, r, s);
        }
        function FFTM(e, r) {
          (this.x = e), (this.y = r);
        }
        Math.imul || (comb10MulTo = smallMulTo),
          (BN.prototype.mulTo = function (e, r) {
            var s = this.length + e.length;
            return 10 === this.length && 10 === e.length
              ? comb10MulTo(this, e, r)
              : s < 63
              ? smallMulTo(this, e, r)
              : s < 1024
              ? (function (e, r, s) {
                  (s.negative = r.negative ^ e.negative),
                    (s.length = e.length + r.length);
                  for (var p = 0, b = 0, v = 0; v < s.length - 1; v++) {
                    var w = b;
                    b = 0;
                    for (
                      var _ = 67108863 & p,
                        P = Math.min(v, r.length - 1),
                        S = Math.max(0, v - e.length + 1);
                      S <= P;
                      S++
                    ) {
                      var I = v - S,
                        A = (0 | e.words[I]) * (0 | r.words[S]),
                        R = 67108863 & A;
                      (w = (w + ((A / 67108864) | 0)) | 0),
                        (_ = 67108863 & (R = (R + _) | 0)),
                        (b += (w = (w + (R >>> 26)) | 0) >>> 26),
                        (w &= 67108863);
                    }
                    (s.words[v] = _), (p = w), (w = b);
                  }
                  return 0 !== p ? (s.words[v] = p) : s.length--, s.strip();
                })(this, e, r)
              : jumboMulTo(this, e, r);
          }),
          (FFTM.prototype.makeRBT = function (e) {
            for (
              var r = Array(e), s = BN.prototype._countBits(e) - 1, p = 0;
              p < e;
              p++
            )
              r[p] = this.revBin(p, s, e);
            return r;
          }),
          (FFTM.prototype.revBin = function (e, r, s) {
            if (0 === e || e === s - 1) return e;
            for (var p = 0, b = 0; b < r; b++)
              (p |= (1 & e) << (r - b - 1)), (e >>= 1);
            return p;
          }),
          (FFTM.prototype.permute = function (e, r, s, p, b, v) {
            for (var w = 0; w < v; w++) (p[w] = r[e[w]]), (b[w] = s[e[w]]);
          }),
          (FFTM.prototype.transform = function (e, r, s, p, b, v) {
            this.permute(v, e, r, s, p, b);
            for (var w = 1; w < b; w <<= 1)
              for (
                var _ = w << 1,
                  P = Math.cos((2 * Math.PI) / _),
                  S = Math.sin((2 * Math.PI) / _),
                  I = 0;
                I < b;
                I += _
              )
                for (var A = P, R = S, C = 0; C < w; C++) {
                  var B = s[I + C],
                    j = p[I + C],
                    V = s[I + C + w],
                    J = p[I + C + w],
                    W = A * V - R * J;
                  (J = A * J + R * V),
                    (V = W),
                    (s[I + C] = B + V),
                    (p[I + C] = j + J),
                    (s[I + C + w] = B - V),
                    (p[I + C + w] = j - J),
                    C !== _ &&
                      ((W = P * A - S * R), (R = P * R + S * A), (A = W));
                }
          }),
          (FFTM.prototype.guessLen13b = function (e, r) {
            var s = 1 | Math.max(r, e),
              p = 1 & s,
              b = 0;
            for (s = (s / 2) | 0; s; s >>>= 1) b++;
            return 1 << (b + 1 + p);
          }),
          (FFTM.prototype.conjugate = function (e, r, s) {
            if (!(s <= 1))
              for (var p = 0; p < s / 2; p++) {
                var b = e[p];
                (e[p] = e[s - p - 1]),
                  (e[s - p - 1] = b),
                  (b = r[p]),
                  (r[p] = -r[s - p - 1]),
                  (r[s - p - 1] = -b);
              }
          }),
          (FFTM.prototype.normalize13b = function (e, r) {
            for (var s = 0, p = 0; p < r / 2; p++) {
              var b =
                8192 * Math.round(e[2 * p + 1] / r) +
                Math.round(e[2 * p] / r) +
                s;
              (e[p] = 67108863 & b),
                (s = b < 67108864 ? 0 : (b / 67108864) | 0);
            }
            return e;
          }),
          (FFTM.prototype.convert13b = function (e, r, s, p) {
            for (var b = 0, v = 0; v < r; v++)
              (b += 0 | e[v]),
                (s[2 * v] = 8191 & b),
                (b >>>= 13),
                (s[2 * v + 1] = 8191 & b),
                (b >>>= 13);
            for (v = 2 * r; v < p; ++v) s[v] = 0;
            assert(0 === b), assert((-8192 & b) == 0);
          }),
          (FFTM.prototype.stub = function (e) {
            for (var r = Array(e), s = 0; s < e; s++) r[s] = 0;
            return r;
          }),
          (FFTM.prototype.mulp = function (e, r, s) {
            var p = 2 * this.guessLen13b(e.length, r.length),
              b = this.makeRBT(p),
              v = this.stub(p),
              w = Array(p),
              _ = Array(p),
              P = Array(p),
              S = Array(p),
              I = Array(p),
              A = Array(p),
              R = s.words;
            (R.length = p),
              this.convert13b(e.words, e.length, w, p),
              this.convert13b(r.words, r.length, S, p),
              this.transform(w, v, _, P, p, b),
              this.transform(S, v, I, A, p, b);
            for (var C = 0; C < p; C++) {
              var B = _[C] * I[C] - P[C] * A[C];
              (P[C] = _[C] * A[C] + P[C] * I[C]), (_[C] = B);
            }
            return (
              this.conjugate(_, P, p),
              this.transform(_, P, R, v, p, b),
              this.conjugate(R, v, p),
              this.normalize13b(R, p),
              (s.negative = e.negative ^ r.negative),
              (s.length = e.length + r.length),
              s.strip()
            );
          }),
          (BN.prototype.mul = function (e) {
            var r = new BN(null);
            return (r.words = Array(this.length + e.length)), this.mulTo(e, r);
          }),
          (BN.prototype.mulf = function (e) {
            var r = new BN(null);
            return (
              (r.words = Array(this.length + e.length)), jumboMulTo(this, e, r)
            );
          }),
          (BN.prototype.imul = function (e) {
            return this.clone().mulTo(e, this);
          }),
          (BN.prototype.imuln = function (e) {
            assert("number" == typeof e), assert(e < 67108864);
            for (var r = 0, s = 0; s < this.length; s++) {
              var p = (0 | this.words[s]) * e,
                b = (67108863 & p) + (67108863 & r);
              (r >>= 26),
                (r += ((p / 67108864) | 0) + (b >>> 26)),
                (this.words[s] = 67108863 & b);
            }
            return 0 !== r && ((this.words[s] = r), this.length++), this;
          }),
          (BN.prototype.muln = function (e) {
            return this.clone().imuln(e);
          }),
          (BN.prototype.sqr = function () {
            return this.mul(this);
          }),
          (BN.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (BN.prototype.pow = function (e) {
            var r = (function (e) {
              for (var r = Array(e.bitLength()), s = 0; s < r.length; s++) {
                var p = (s / 26) | 0,
                  b = s % 26;
                r[s] = (e.words[p] & (1 << b)) >>> b;
              }
              return r;
            })(e);
            if (0 === r.length) return new BN(1);
            for (
              var s = this, p = 0;
              p < r.length && 0 === r[p];
              p++, s = s.sqr()
            );
            if (++p < r.length)
              for (var b = s.sqr(); p < r.length; p++, b = b.sqr())
                0 !== r[p] && (s = s.mul(b));
            return s;
          }),
          (BN.prototype.iushln = function (e) {
            assert("number" == typeof e && e >= 0);
            var r,
              s = e % 26,
              p = (e - s) / 26,
              b = (67108863 >>> (26 - s)) << (26 - s);
            if (0 !== s) {
              var v = 0;
              for (r = 0; r < this.length; r++) {
                var w = this.words[r] & b,
                  _ = ((0 | this.words[r]) - w) << s;
                (this.words[r] = _ | v), (v = w >>> (26 - s));
              }
              v && ((this.words[r] = v), this.length++);
            }
            if (0 !== p) {
              for (r = this.length - 1; r >= 0; r--)
                this.words[r + p] = this.words[r];
              for (r = 0; r < p; r++) this.words[r] = 0;
              this.length += p;
            }
            return this.strip();
          }),
          (BN.prototype.ishln = function (e) {
            return assert(0 === this.negative), this.iushln(e);
          }),
          (BN.prototype.iushrn = function (e, r, s) {
            assert("number" == typeof e && e >= 0),
              (p = r ? (r - (r % 26)) / 26 : 0);
            var p,
              b = e % 26,
              v = Math.min((e - b) / 26, this.length),
              w = 67108863 ^ ((67108863 >>> b) << b);
            if (((p -= v), (p = Math.max(0, p)), s)) {
              for (var _ = 0; _ < v; _++) s.words[_] = this.words[_];
              s.length = v;
            }
            if (0 === v);
            else if (this.length > v)
              for (this.length -= v, _ = 0; _ < this.length; _++)
                this.words[_] = this.words[_ + v];
            else (this.words[0] = 0), (this.length = 1);
            var P = 0;
            for (_ = this.length - 1; _ >= 0 && (0 !== P || _ >= p); _--) {
              var S = 0 | this.words[_];
              (this.words[_] = (P << (26 - b)) | (S >>> b)), (P = S & w);
            }
            return (
              s && 0 !== P && (s.words[s.length++] = P),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this.strip()
            );
          }),
          (BN.prototype.ishrn = function (e, r, s) {
            return assert(0 === this.negative), this.iushrn(e, r, s);
          }),
          (BN.prototype.shln = function (e) {
            return this.clone().ishln(e);
          }),
          (BN.prototype.ushln = function (e) {
            return this.clone().iushln(e);
          }),
          (BN.prototype.shrn = function (e) {
            return this.clone().ishrn(e);
          }),
          (BN.prototype.ushrn = function (e) {
            return this.clone().iushrn(e);
          }),
          (BN.prototype.testn = function (e) {
            assert("number" == typeof e && e >= 0);
            var r = e % 26,
              s = (e - r) / 26;
            return !(this.length <= s) && !!(this.words[s] & (1 << r));
          }),
          (BN.prototype.imaskn = function (e) {
            assert("number" == typeof e && e >= 0);
            var r = e % 26,
              s = (e - r) / 26;
            return (assert(
              0 === this.negative,
              "imaskn works only with positive numbers"
            ),
            this.length <= s)
              ? this
              : (0 !== r && s++,
                (this.length = Math.min(s, this.length)),
                0 !== r &&
                  (this.words[this.length - 1] &=
                    67108863 ^ ((67108863 >>> r) << r)),
                this.strip());
          }),
          (BN.prototype.maskn = function (e) {
            return this.clone().imaskn(e);
          }),
          (BN.prototype.iaddn = function (e) {
            return (assert("number" == typeof e), assert(e < 67108864), e < 0)
              ? this.isubn(-e)
              : 0 !== this.negative
              ? (1 === this.length && (0 | this.words[0]) < e
                  ? ((this.words[0] = e - (0 | this.words[0])),
                    (this.negative = 0))
                  : ((this.negative = 0), this.isubn(e), (this.negative = 1)),
                this)
              : this._iaddn(e);
          }),
          (BN.prototype._iaddn = function (e) {
            this.words[0] += e;
            for (var r = 0; r < this.length && this.words[r] >= 67108864; r++)
              (this.words[r] -= 67108864),
                r === this.length - 1
                  ? (this.words[r + 1] = 1)
                  : this.words[r + 1]++;
            return (this.length = Math.max(this.length, r + 1)), this;
          }),
          (BN.prototype.isubn = function (e) {
            if ((assert("number" == typeof e), assert(e < 67108864), e < 0))
              return this.iaddn(-e);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(e), (this.negative = 1), this
              );
            if (((this.words[0] -= e), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var r = 0; r < this.length && this.words[r] < 0; r++)
                (this.words[r] += 67108864), (this.words[r + 1] -= 1);
            return this.strip();
          }),
          (BN.prototype.addn = function (e) {
            return this.clone().iaddn(e);
          }),
          (BN.prototype.subn = function (e) {
            return this.clone().isubn(e);
          }),
          (BN.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (BN.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (BN.prototype._ishlnsubmul = function (e, r, s) {
            var p,
              b,
              v = e.length + s;
            this._expand(v);
            var w = 0;
            for (p = 0; p < e.length; p++) {
              b = (0 | this.words[p + s]) + w;
              var _ = (0 | e.words[p]) * r;
              (b -= 67108863 & _),
                (w = (b >> 26) - ((_ / 67108864) | 0)),
                (this.words[p + s] = 67108863 & b);
            }
            for (; p < this.length - s; p++)
              (w = (b = (0 | this.words[p + s]) + w) >> 26),
                (this.words[p + s] = 67108863 & b);
            if (0 === w) return this.strip();
            for (assert(-1 === w), w = 0, p = 0; p < this.length; p++)
              (w = (b = -(0 | this.words[p]) + w) >> 26),
                (this.words[p] = 67108863 & b);
            return (this.negative = 1), this.strip();
          }),
          (BN.prototype._wordDiv = function (e, r) {
            var s,
              p = this.length - e.length,
              b = this.clone(),
              v = e,
              w = 0 | v.words[v.length - 1];
            0 != (p = 26 - this._countBits(w)) &&
              ((v = v.ushln(p)), b.iushln(p), (w = 0 | v.words[v.length - 1]));
            var _ = b.length - v.length;
            if ("mod" !== r) {
              ((s = new BN(null)).length = _ + 1), (s.words = Array(s.length));
              for (var P = 0; P < s.length; P++) s.words[P] = 0;
            }
            var S = b.clone()._ishlnsubmul(v, 1, _);
            0 === S.negative && ((b = S), s && (s.words[_] = 1));
            for (var I = _ - 1; I >= 0; I--) {
              var A =
                (0 | b.words[v.length + I]) * 67108864 +
                (0 | b.words[v.length + I - 1]);
              for (
                A = Math.min((A / w) | 0, 67108863), b._ishlnsubmul(v, A, I);
                0 !== b.negative;

              )
                A--,
                  (b.negative = 0),
                  b._ishlnsubmul(v, 1, I),
                  b.isZero() || (b.negative ^= 1);
              s && (s.words[I] = A);
            }
            return (
              s && s.strip(),
              b.strip(),
              "div" !== r && 0 !== p && b.iushrn(p),
              { div: s || null, mod: b }
            );
          }),
          (BN.prototype.divmod = function (e, r, s) {
            var p, b, v;
            return (assert(!e.isZero()), this.isZero())
              ? { div: new BN(0), mod: new BN(0) }
              : 0 !== this.negative && 0 === e.negative
              ? ((v = this.neg().divmod(e, r)),
                "mod" !== r && (p = v.div.neg()),
                "div" !== r &&
                  ((b = v.mod.neg()), s && 0 !== b.negative && b.iadd(e)),
                { div: p, mod: b })
              : 0 === this.negative && 0 !== e.negative
              ? ((v = this.divmod(e.neg(), r)),
                "mod" !== r && (p = v.div.neg()),
                { div: p, mod: v.mod })
              : (this.negative & e.negative) != 0
              ? ((v = this.neg().divmod(e.neg(), r)),
                "div" !== r &&
                  ((b = v.mod.neg()), s && 0 !== b.negative && b.isub(e)),
                { div: v.div, mod: b })
              : e.length > this.length || 0 > this.cmp(e)
              ? { div: new BN(0), mod: this }
              : 1 === e.length
              ? "div" === r
                ? { div: this.divn(e.words[0]), mod: null }
                : "mod" === r
                ? { div: null, mod: new BN(this.modn(e.words[0])) }
                : {
                    div: this.divn(e.words[0]),
                    mod: new BN(this.modn(e.words[0])),
                  }
              : this._wordDiv(e, r);
          }),
          (BN.prototype.div = function (e) {
            return this.divmod(e, "div", !1).div;
          }),
          (BN.prototype.mod = function (e) {
            return this.divmod(e, "mod", !1).mod;
          }),
          (BN.prototype.umod = function (e) {
            return this.divmod(e, "mod", !0).mod;
          }),
          (BN.prototype.divRound = function (e) {
            var r = this.divmod(e);
            if (r.mod.isZero()) return r.div;
            var s = 0 !== r.div.negative ? r.mod.isub(e) : r.mod,
              p = e.ushrn(1),
              b = e.andln(1),
              v = s.cmp(p);
            return v < 0 || (1 === b && 0 === v)
              ? r.div
              : 0 !== r.div.negative
              ? r.div.isubn(1)
              : r.div.iaddn(1);
          }),
          (BN.prototype.modn = function (e) {
            assert(e <= 67108863);
            for (var r = 67108864 % e, s = 0, p = this.length - 1; p >= 0; p--)
              s = (r * s + (0 | this.words[p])) % e;
            return s;
          }),
          (BN.prototype.idivn = function (e) {
            assert(e <= 67108863);
            for (var r = 0, s = this.length - 1; s >= 0; s--) {
              var p = (0 | this.words[s]) + 67108864 * r;
              (this.words[s] = (p / e) | 0), (r = p % e);
            }
            return this.strip();
          }),
          (BN.prototype.divn = function (e) {
            return this.clone().idivn(e);
          }),
          (BN.prototype.egcd = function (e) {
            assert(0 === e.negative), assert(!e.isZero());
            var r = this,
              s = e.clone();
            r = 0 !== r.negative ? r.umod(e) : r.clone();
            for (
              var p = new BN(1),
                b = new BN(0),
                v = new BN(0),
                w = new BN(1),
                _ = 0;
              r.isEven() && s.isEven();

            )
              r.iushrn(1), s.iushrn(1), ++_;
            for (var P = s.clone(), S = r.clone(); !r.isZero(); ) {
              for (
                var I = 0, A = 1;
                (r.words[0] & A) == 0 && I < 26;
                ++I, A <<= 1
              );
              if (I > 0)
                for (r.iushrn(I); I-- > 0; )
                  (p.isOdd() || b.isOdd()) && (p.iadd(P), b.isub(S)),
                    p.iushrn(1),
                    b.iushrn(1);
              for (
                var R = 0, C = 1;
                (s.words[0] & C) == 0 && R < 26;
                ++R, C <<= 1
              );
              if (R > 0)
                for (s.iushrn(R); R-- > 0; )
                  (v.isOdd() || w.isOdd()) && (v.iadd(P), w.isub(S)),
                    v.iushrn(1),
                    w.iushrn(1);
              r.cmp(s) >= 0
                ? (r.isub(s), p.isub(v), b.isub(w))
                : (s.isub(r), v.isub(p), w.isub(b));
            }
            return { a: v, b: w, gcd: s.iushln(_) };
          }),
          (BN.prototype._invmp = function (e) {
            assert(0 === e.negative), assert(!e.isZero());
            var r,
              s = this,
              p = e.clone();
            s = 0 !== s.negative ? s.umod(e) : s.clone();
            for (
              var b = new BN(1), v = new BN(0), w = p.clone();
              s.cmpn(1) > 0 && p.cmpn(1) > 0;

            ) {
              for (
                var _ = 0, P = 1;
                (s.words[0] & P) == 0 && _ < 26;
                ++_, P <<= 1
              );
              if (_ > 0)
                for (s.iushrn(_); _-- > 0; )
                  b.isOdd() && b.iadd(w), b.iushrn(1);
              for (
                var S = 0, I = 1;
                (p.words[0] & I) == 0 && S < 26;
                ++S, I <<= 1
              );
              if (S > 0)
                for (p.iushrn(S); S-- > 0; )
                  v.isOdd() && v.iadd(w), v.iushrn(1);
              s.cmp(p) >= 0 ? (s.isub(p), b.isub(v)) : (p.isub(s), v.isub(b));
            }
            return 0 > (r = 0 === s.cmpn(1) ? b : v).cmpn(0) && r.iadd(e), r;
          }),
          (BN.prototype.gcd = function (e) {
            if (this.isZero()) return e.abs();
            if (e.isZero()) return this.abs();
            var r = this.clone(),
              s = e.clone();
            (r.negative = 0), (s.negative = 0);
            for (var p = 0; r.isEven() && s.isEven(); p++)
              r.iushrn(1), s.iushrn(1);
            for (;;) {
              for (; r.isEven(); ) r.iushrn(1);
              for (; s.isEven(); ) s.iushrn(1);
              var b = r.cmp(s);
              if (b < 0) {
                var v = r;
                (r = s), (s = v);
              } else if (0 === b || 0 === s.cmpn(1)) break;
              r.isub(s);
            }
            return s.iushln(p);
          }),
          (BN.prototype.invm = function (e) {
            return this.egcd(e).a.umod(e);
          }),
          (BN.prototype.isEven = function () {
            return (1 & this.words[0]) == 0;
          }),
          (BN.prototype.isOdd = function () {
            return (1 & this.words[0]) == 1;
          }),
          (BN.prototype.andln = function (e) {
            return this.words[0] & e;
          }),
          (BN.prototype.bincn = function (e) {
            assert("number" == typeof e);
            var r = e % 26,
              s = (e - r) / 26,
              p = 1 << r;
            if (this.length <= s)
              return this._expand(s + 1), (this.words[s] |= p), this;
            for (var b = p, v = s; 0 !== b && v < this.length; v++) {
              var w = 0 | this.words[v];
              (w += b), (b = w >>> 26), (w &= 67108863), (this.words[v] = w);
            }
            return 0 !== b && ((this.words[v] = b), this.length++), this;
          }),
          (BN.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (BN.prototype.cmpn = function (e) {
            var r,
              s = e < 0;
            if (0 !== this.negative && !s) return -1;
            if (0 === this.negative && s) return 1;
            if ((this.strip(), this.length > 1)) r = 1;
            else {
              s && (e = -e), assert(e <= 67108863, "Number is too big");
              var p = 0 | this.words[0];
              r = p === e ? 0 : p < e ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -r : r;
          }),
          (BN.prototype.cmp = function (e) {
            if (0 !== this.negative && 0 === e.negative) return -1;
            if (0 === this.negative && 0 !== e.negative) return 1;
            var r = this.ucmp(e);
            return 0 !== this.negative ? 0 | -r : r;
          }),
          (BN.prototype.ucmp = function (e) {
            if (this.length > e.length) return 1;
            if (this.length < e.length) return -1;
            for (var r = 0, s = this.length - 1; s >= 0; s--) {
              var p = 0 | this.words[s],
                b = 0 | e.words[s];
              if (p !== b) {
                p < b ? (r = -1) : p > b && (r = 1);
                break;
              }
            }
            return r;
          }),
          (BN.prototype.gtn = function (e) {
            return 1 === this.cmpn(e);
          }),
          (BN.prototype.gt = function (e) {
            return 1 === this.cmp(e);
          }),
          (BN.prototype.gten = function (e) {
            return this.cmpn(e) >= 0;
          }),
          (BN.prototype.gte = function (e) {
            return this.cmp(e) >= 0;
          }),
          (BN.prototype.ltn = function (e) {
            return -1 === this.cmpn(e);
          }),
          (BN.prototype.lt = function (e) {
            return -1 === this.cmp(e);
          }),
          (BN.prototype.lten = function (e) {
            return 0 >= this.cmpn(e);
          }),
          (BN.prototype.lte = function (e) {
            return 0 >= this.cmp(e);
          }),
          (BN.prototype.eqn = function (e) {
            return 0 === this.cmpn(e);
          }),
          (BN.prototype.eq = function (e) {
            return 0 === this.cmp(e);
          }),
          (BN.red = function (e) {
            return new Red(e);
          }),
          (BN.prototype.toRed = function (e) {
            return (
              assert(!this.red, "Already a number in reduction context"),
              assert(0 === this.negative, "red works only with positives"),
              e.convertTo(this)._forceRed(e)
            );
          }),
          (BN.prototype.fromRed = function () {
            return (
              assert(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (BN.prototype._forceRed = function (e) {
            return (this.red = e), this;
          }),
          (BN.prototype.forceRed = function (e) {
            return (
              assert(!this.red, "Already a number in reduction context"),
              this._forceRed(e)
            );
          }),
          (BN.prototype.redAdd = function (e) {
            return (
              assert(this.red, "redAdd works only with red numbers"),
              this.red.add(this, e)
            );
          }),
          (BN.prototype.redIAdd = function (e) {
            return (
              assert(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, e)
            );
          }),
          (BN.prototype.redSub = function (e) {
            return (
              assert(this.red, "redSub works only with red numbers"),
              this.red.sub(this, e)
            );
          }),
          (BN.prototype.redISub = function (e) {
            return (
              assert(this.red, "redISub works only with red numbers"),
              this.red.isub(this, e)
            );
          }),
          (BN.prototype.redShl = function (e) {
            return (
              assert(this.red, "redShl works only with red numbers"),
              this.red.shl(this, e)
            );
          }),
          (BN.prototype.redMul = function (e) {
            return (
              assert(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, e),
              this.red.mul(this, e)
            );
          }),
          (BN.prototype.redIMul = function (e) {
            return (
              assert(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, e),
              this.red.imul(this, e)
            );
          }),
          (BN.prototype.redSqr = function () {
            return (
              assert(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (BN.prototype.redISqr = function () {
            return (
              assert(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (BN.prototype.redSqrt = function () {
            return (
              assert(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (BN.prototype.redInvm = function () {
            return (
              assert(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (BN.prototype.redNeg = function () {
            return (
              assert(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (BN.prototype.redPow = function (e) {
            return (
              assert(this.red && !e.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, e)
            );
          });
        var _ = { k256: null, p224: null, p192: null, p25519: null };
        function MPrime(e, r) {
          (this.name = e),
            (this.p = new BN(r, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new BN(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function K256() {
          MPrime.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function P224() {
          MPrime.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function P192() {
          MPrime.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function P25519() {
          MPrime.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function Red(e) {
          if ("string" == typeof e) {
            var r = BN._prime(e);
            (this.m = r.p), (this.prime = r);
          } else
            assert(e.gtn(1), "modulus must be greater than 1"),
              (this.m = e),
              (this.prime = null);
        }
        function Mont(e) {
          Red.call(this, e),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new BN(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (MPrime.prototype._tmp = function () {
          var e = new BN(null);
          return (e.words = Array(Math.ceil(this.n / 13))), e;
        }),
          (MPrime.prototype.ireduce = function (e) {
            var r,
              s = e;
            do
              this.split(s, this.tmp),
                (r = (s = (s = this.imulK(s)).iadd(this.tmp)).bitLength());
            while (r > this.n);
            var p = r < this.n ? -1 : s.ucmp(this.p);
            return (
              0 === p
                ? ((s.words[0] = 0), (s.length = 1))
                : p > 0
                ? s.isub(this.p)
                : void 0 !== s.strip
                ? s.strip()
                : s._strip(),
              s
            );
          }),
          (MPrime.prototype.split = function (e, r) {
            e.iushrn(this.n, 0, r);
          }),
          (MPrime.prototype.imulK = function (e) {
            return e.imul(this.k);
          }),
          inherits(K256, MPrime),
          (K256.prototype.split = function (e, r) {
            for (var s = Math.min(e.length, 9), p = 0; p < s; p++)
              r.words[p] = e.words[p];
            if (((r.length = s), e.length <= 9)) {
              (e.words[0] = 0), (e.length = 1);
              return;
            }
            var b = e.words[9];
            for (p = 10, r.words[r.length++] = 4194303 & b; p < e.length; p++) {
              var v = 0 | e.words[p];
              (e.words[p - 10] = ((4194303 & v) << 4) | (b >>> 22)), (b = v);
            }
            (b >>>= 22),
              (e.words[p - 10] = b),
              0 === b && e.length > 10 ? (e.length -= 10) : (e.length -= 9);
          }),
          (K256.prototype.imulK = function (e) {
            (e.words[e.length] = 0),
              (e.words[e.length + 1] = 0),
              (e.length += 2);
            for (var r = 0, s = 0; s < e.length; s++) {
              var p = 0 | e.words[s];
              (r += 977 * p),
                (e.words[s] = 67108863 & r),
                (r = 64 * p + ((r / 67108864) | 0));
            }
            return (
              0 === e.words[e.length - 1] &&
                (e.length--, 0 === e.words[e.length - 1] && e.length--),
              e
            );
          }),
          inherits(P224, MPrime),
          inherits(P192, MPrime),
          inherits(P25519, MPrime),
          (P25519.prototype.imulK = function (e) {
            for (var r = 0, s = 0; s < e.length; s++) {
              var p = (0 | e.words[s]) * 19 + r,
                b = 67108863 & p;
              (p >>>= 26), (e.words[s] = b), (r = p);
            }
            return 0 !== r && (e.words[e.length++] = r), e;
          }),
          (BN._prime = function (e) {
            var r;
            if (_[e]) return _[e];
            if ("k256" === e) r = new K256();
            else if ("p224" === e) r = new P224();
            else if ("p192" === e) r = new P192();
            else if ("p25519" === e) r = new P25519();
            else throw Error("Unknown prime " + e);
            return (_[e] = r), r;
          }),
          (Red.prototype._verify1 = function (e) {
            assert(0 === e.negative, "red works only with positives"),
              assert(e.red, "red works only with red numbers");
          }),
          (Red.prototype._verify2 = function (e, r) {
            assert(
              (e.negative | r.negative) == 0,
              "red works only with positives"
            ),
              assert(
                e.red && e.red === r.red,
                "red works only with red numbers"
              );
          }),
          (Red.prototype.imod = function (e) {
            return this.prime
              ? this.prime.ireduce(e)._forceRed(this)
              : e.umod(this.m)._forceRed(this);
          }),
          (Red.prototype.neg = function (e) {
            return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
          }),
          (Red.prototype.add = function (e, r) {
            this._verify2(e, r);
            var s = e.add(r);
            return s.cmp(this.m) >= 0 && s.isub(this.m), s._forceRed(this);
          }),
          (Red.prototype.iadd = function (e, r) {
            this._verify2(e, r);
            var s = e.iadd(r);
            return s.cmp(this.m) >= 0 && s.isub(this.m), s;
          }),
          (Red.prototype.sub = function (e, r) {
            this._verify2(e, r);
            var s = e.sub(r);
            return 0 > s.cmpn(0) && s.iadd(this.m), s._forceRed(this);
          }),
          (Red.prototype.isub = function (e, r) {
            this._verify2(e, r);
            var s = e.isub(r);
            return 0 > s.cmpn(0) && s.iadd(this.m), s;
          }),
          (Red.prototype.shl = function (e, r) {
            return this._verify1(e), this.imod(e.ushln(r));
          }),
          (Red.prototype.imul = function (e, r) {
            return this._verify2(e, r), this.imod(e.imul(r));
          }),
          (Red.prototype.mul = function (e, r) {
            return this._verify2(e, r), this.imod(e.mul(r));
          }),
          (Red.prototype.isqr = function (e) {
            return this.imul(e, e.clone());
          }),
          (Red.prototype.sqr = function (e) {
            return this.mul(e, e);
          }),
          (Red.prototype.sqrt = function (e) {
            if (e.isZero()) return e.clone();
            var r = this.m.andln(3);
            if ((assert(r % 2 == 1), 3 === r)) {
              var s = this.m.add(new BN(1)).iushrn(2);
              return this.pow(e, s);
            }
            for (
              var p = this.m.subn(1), b = 0;
              !p.isZero() && 0 === p.andln(1);

            )
              b++, p.iushrn(1);
            assert(!p.isZero());
            var v = new BN(1).toRed(this),
              w = v.redNeg(),
              _ = this.m.subn(1).iushrn(1),
              P = this.m.bitLength();
            for (
              P = new BN(2 * P * P).toRed(this);
              0 !== this.pow(P, _).cmp(w);

            )
              P.redIAdd(w);
            for (
              var S = this.pow(P, p),
                I = this.pow(e, p.addn(1).iushrn(1)),
                A = this.pow(e, p),
                R = b;
              0 !== A.cmp(v);

            ) {
              for (var C = A, B = 0; 0 !== C.cmp(v); B++) C = C.redSqr();
              assert(B < R);
              var j = this.pow(S, new BN(1).iushln(R - B - 1));
              (I = I.redMul(j)), (S = j.redSqr()), (A = A.redMul(S)), (R = B);
            }
            return I;
          }),
          (Red.prototype.invm = function (e) {
            var r = e._invmp(this.m);
            return 0 !== r.negative
              ? ((r.negative = 0), this.imod(r).redNeg())
              : this.imod(r);
          }),
          (Red.prototype.pow = function (e, r) {
            if (r.isZero()) return new BN(1).toRed(this);
            if (0 === r.cmpn(1)) return e.clone();
            var s = Array(16);
            (s[0] = new BN(1).toRed(this)), (s[1] = e);
            for (var p = 2; p < s.length; p++) s[p] = this.mul(s[p - 1], e);
            var b = s[0],
              v = 0,
              w = 0,
              _ = r.bitLength() % 26;
            for (0 === _ && (_ = 26), p = r.length - 1; p >= 0; p--) {
              for (var P = r.words[p], S = _ - 1; S >= 0; S--) {
                var I = (P >> S) & 1;
                if ((b !== s[0] && (b = this.sqr(b)), 0 === I && 0 === v)) {
                  w = 0;
                  continue;
                }
                (v <<= 1),
                  (v |= I),
                  (4 == ++w || (0 === p && 0 === S)) &&
                    ((b = this.mul(b, s[v])), (w = 0), (v = 0));
              }
              _ = 26;
            }
            return b;
          }),
          (Red.prototype.convertTo = function (e) {
            var r = e.umod(this.m);
            return r === e ? r.clone() : r;
          }),
          (Red.prototype.convertFrom = function (e) {
            var r = e.clone();
            return (r.red = null), r;
          }),
          (BN.mont = function (e) {
            return new Mont(e);
          }),
          inherits(Mont, Red),
          (Mont.prototype.convertTo = function (e) {
            return this.imod(e.ushln(this.shift));
          }),
          (Mont.prototype.convertFrom = function (e) {
            var r = this.imod(e.mul(this.rinv));
            return (r.red = null), r;
          }),
          (Mont.prototype.imul = function (e, r) {
            if (e.isZero() || r.isZero())
              return (e.words[0] = 0), (e.length = 1), e;
            var s = e.imul(r),
              p = s
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              b = s.isub(p).iushrn(this.shift),
              v = b;
            return (
              b.cmp(this.m) >= 0
                ? (v = b.isub(this.m))
                : 0 > b.cmpn(0) && (v = b.iadd(this.m)),
              v._forceRed(this)
            );
          }),
          (Mont.prototype.mul = function (e, r) {
            if (e.isZero() || r.isZero()) return new BN(0)._forceRed(this);
            var s = e.mul(r),
              p = s
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              b = s.isub(p).iushrn(this.shift),
              v = b;
            return (
              b.cmp(this.m) >= 0
                ? (v = b.isub(this.m))
                : 0 > b.cmpn(0) && (v = b.iadd(this.m)),
              v._forceRed(this)
            );
          }),
          (Mont.prototype.invm = function (e) {
            return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((e = s.nmd(e)), this);
    },
    98973: function (e, r, s) {
      "use strict";
      (r.version = s(25972).i8),
        (r.utils = s(92790)),
        (r.rand = s(29931)),
        (r.curve = s(7020)),
        (r.curves = s(48332)),
        (r.ec = s(10663)),
        (r.eddsa = s(88208));
    },
    41423: function (e, r, s) {
      "use strict";
      var p = s(44152),
        b = s(92790),
        v = b.getNAF,
        w = b.getJSF,
        _ = b.assert;
      function BaseCurve(e, r) {
        (this.type = e),
          (this.p = new p(r.p, 16)),
          (this.red = r.prime ? p.red(r.prime) : p.mont(this.p)),
          (this.zero = new p(0).toRed(this.red)),
          (this.one = new p(1).toRed(this.red)),
          (this.two = new p(2).toRed(this.red)),
          (this.n = r.n && new p(r.n, 16)),
          (this.g = r.g && this.pointFromJSON(r.g, r.gRed)),
          (this._wnafT1 = [, , , ,]),
          (this._wnafT2 = [, , , ,]),
          (this._wnafT3 = [, , , ,]),
          (this._wnafT4 = [, , , ,]),
          (this._bitLength = this.n ? this.n.bitLength() : 0);
        var s = this.n && this.p.div(this.n);
        !s || s.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
      }
      function BasePoint(e, r) {
        (this.curve = e), (this.type = r), (this.precomputed = null);
      }
      (e.exports = BaseCurve),
        (BaseCurve.prototype.point = function () {
          throw Error("Not implemented");
        }),
        (BaseCurve.prototype.validate = function () {
          throw Error("Not implemented");
        }),
        (BaseCurve.prototype._fixedNafMul = function (e, r) {
          _(e.precomputed);
          var s,
            p,
            b = e._getDoubles(),
            w = v(r, 1, this._bitLength),
            P = (1 << (b.step + 1)) - (b.step % 2 == 0 ? 2 : 1);
          P /= 3;
          var S = [];
          for (s = 0; s < w.length; s += b.step) {
            p = 0;
            for (var I = s + b.step - 1; I >= s; I--) p = (p << 1) + w[I];
            S.push(p);
          }
          for (
            var A = this.jpoint(null, null, null),
              R = this.jpoint(null, null, null),
              C = P;
            C > 0;
            C--
          ) {
            for (s = 0; s < S.length; s++)
              (p = S[s]) === C
                ? (R = R.mixedAdd(b.points[s]))
                : p === -C && (R = R.mixedAdd(b.points[s].neg()));
            A = A.add(R);
          }
          return A.toP();
        }),
        (BaseCurve.prototype._wnafMul = function (e, r) {
          var s = 4,
            p = e._getNAFPoints(s);
          s = p.wnd;
          for (
            var b = p.points,
              w = v(r, s, this._bitLength),
              P = this.jpoint(null, null, null),
              S = w.length - 1;
            S >= 0;
            S--
          ) {
            for (var I = 0; S >= 0 && 0 === w[S]; S--) I++;
            if ((S >= 0 && I++, (P = P.dblp(I)), S < 0)) break;
            var A = w[S];
            _(0 !== A),
              (P =
                "affine" === e.type
                  ? A > 0
                    ? P.mixedAdd(b[(A - 1) >> 1])
                    : P.mixedAdd(b[(-A - 1) >> 1].neg())
                  : A > 0
                  ? P.add(b[(A - 1) >> 1])
                  : P.add(b[(-A - 1) >> 1].neg()));
          }
          return "affine" === e.type ? P.toP() : P;
        }),
        (BaseCurve.prototype._wnafMulAdd = function (e, r, s, p, b) {
          var _,
            P,
            S,
            I = this._wnafT1,
            A = this._wnafT2,
            R = this._wnafT3,
            C = 0;
          for (_ = 0; _ < p; _++) {
            var B = (S = r[_])._getNAFPoints(e);
            (I[_] = B.wnd), (A[_] = B.points);
          }
          for (_ = p - 1; _ >= 1; _ -= 2) {
            var j = _ - 1,
              V = _;
            if (1 !== I[j] || 1 !== I[V]) {
              (R[j] = v(s[j], I[j], this._bitLength)),
                (R[V] = v(s[V], I[V], this._bitLength)),
                (C = Math.max(R[j].length, C)),
                (C = Math.max(R[V].length, C));
              continue;
            }
            var J = [r[j], null, null, r[V]];
            0 === r[j].y.cmp(r[V].y)
              ? ((J[1] = r[j].add(r[V])),
                (J[2] = r[j].toJ().mixedAdd(r[V].neg())))
              : 0 === r[j].y.cmp(r[V].y.redNeg())
              ? ((J[1] = r[j].toJ().mixedAdd(r[V])),
                (J[2] = r[j].add(r[V].neg())))
              : ((J[1] = r[j].toJ().mixedAdd(r[V])),
                (J[2] = r[j].toJ().mixedAdd(r[V].neg())));
            var W = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
              X = w(s[j], s[V]);
            for (
              P = 0,
                C = Math.max(X[0].length, C),
                R[j] = Array(C),
                R[V] = Array(C);
              P < C;
              P++
            ) {
              var et = 0 | X[0][P],
                es = 0 | X[1][P];
              (R[j][P] = W[(et + 1) * 3 + (es + 1)]), (R[V][P] = 0), (A[j] = J);
            }
          }
          var eo = this.jpoint(null, null, null),
            ec = this._wnafT4;
          for (_ = C; _ >= 0; _--) {
            for (var ed = 0; _ >= 0; ) {
              var eh = !0;
              for (P = 0; P < p; P++)
                (ec[P] = 0 | R[P][_]), 0 !== ec[P] && (eh = !1);
              if (!eh) break;
              ed++, _--;
            }
            if ((_ >= 0 && ed++, (eo = eo.dblp(ed)), _ < 0)) break;
            for (P = 0; P < p; P++) {
              var ef = ec[P];
              0 !== ef &&
                (ef > 0
                  ? (S = A[P][(ef - 1) >> 1])
                  : ef < 0 && (S = A[P][(-ef - 1) >> 1].neg()),
                (eo = "affine" === S.type ? eo.mixedAdd(S) : eo.add(S)));
            }
          }
          for (_ = 0; _ < p; _++) A[_] = null;
          return b ? eo : eo.toP();
        }),
        (BaseCurve.BasePoint = BasePoint),
        (BasePoint.prototype.eq = function () {
          throw Error("Not implemented");
        }),
        (BasePoint.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (BaseCurve.prototype.decodePoint = function (e, r) {
          e = b.toArray(e, r);
          var s = this.p.byteLength();
          if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * s)
            return (
              6 === e[0]
                ? _(e[e.length - 1] % 2 == 0)
                : 7 === e[0] && _(e[e.length - 1] % 2 == 1),
              this.point(e.slice(1, 1 + s), e.slice(1 + s, 1 + 2 * s))
            );
          if ((2 === e[0] || 3 === e[0]) && e.length - 1 === s)
            return this.pointFromX(e.slice(1, 1 + s), 3 === e[0]);
          throw Error("Unknown point format");
        }),
        (BasePoint.prototype.encodeCompressed = function (e) {
          return this.encode(e, !0);
        }),
        (BasePoint.prototype._encode = function (e) {
          var r = this.curve.p.byteLength(),
            s = this.getX().toArray("be", r);
          return e
            ? [this.getY().isEven() ? 2 : 3].concat(s)
            : [4].concat(s, this.getY().toArray("be", r));
        }),
        (BasePoint.prototype.encode = function (e, r) {
          return b.encode(this._encode(r), e);
        }),
        (BasePoint.prototype.precompute = function (e) {
          if (this.precomputed) return this;
          var r = { doubles: null, naf: null, beta: null };
          return (
            (r.naf = this._getNAFPoints(8)),
            (r.doubles = this._getDoubles(4, e)),
            (r.beta = this._getBeta()),
            (this.precomputed = r),
            this
          );
        }),
        (BasePoint.prototype._hasDoubles = function (e) {
          if (!this.precomputed) return !1;
          var r = this.precomputed.doubles;
          return (
            !!r && r.points.length >= Math.ceil((e.bitLength() + 1) / r.step)
          );
        }),
        (BasePoint.prototype._getDoubles = function (e, r) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
          for (var s = [this], p = this, b = 0; b < r; b += e) {
            for (var v = 0; v < e; v++) p = p.dbl();
            s.push(p);
          }
          return { step: e, points: s };
        }),
        (BasePoint.prototype._getNAFPoints = function (e) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
          for (
            var r = [this],
              s = (1 << e) - 1,
              p = 1 === s ? null : this.dbl(),
              b = 1;
            b < s;
            b++
          )
            r[b] = r[b - 1].add(p);
          return { wnd: e, points: r };
        }),
        (BasePoint.prototype._getBeta = function () {
          return null;
        }),
        (BasePoint.prototype.dblp = function (e) {
          for (var r = this, s = 0; s < e; s++) r = r.dbl();
          return r;
        });
    },
    59958: function (e, r, s) {
      "use strict";
      var p = s(92790),
        b = s(44152),
        v = s(35717),
        w = s(41423),
        _ = p.assert;
      function EdwardsCurve(e) {
        (this.twisted = (0 | e.a) != 1),
          (this.mOneA = this.twisted && (0 | e.a) == -1),
          (this.extended = this.mOneA),
          w.call(this, "edwards", e),
          (this.a = new b(e.a, 16).umod(this.red.m)),
          (this.a = this.a.toRed(this.red)),
          (this.c = new b(e.c, 16).toRed(this.red)),
          (this.c2 = this.c.redSqr()),
          (this.d = new b(e.d, 16).toRed(this.red)),
          (this.dd = this.d.redAdd(this.d)),
          _(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
          (this.oneC = (0 | e.c) == 1);
      }
      function Point(e, r, s, p, v) {
        w.BasePoint.call(this, e, "projective"),
          null === r && null === s && null === p
            ? ((this.x = this.curve.zero),
              (this.y = this.curve.one),
              (this.z = this.curve.one),
              (this.t = this.curve.zero),
              (this.zOne = !0))
            : ((this.x = new b(r, 16)),
              (this.y = new b(s, 16)),
              (this.z = p ? new b(p, 16) : this.curve.one),
              (this.t = v && new b(v, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)),
              this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
              (this.zOne = this.z === this.curve.one),
              !this.curve.extended ||
                this.t ||
                ((this.t = this.x.redMul(this.y)),
                this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
      }
      v(EdwardsCurve, w),
        (e.exports = EdwardsCurve),
        (EdwardsCurve.prototype._mulA = function (e) {
          return this.mOneA ? e.redNeg() : this.a.redMul(e);
        }),
        (EdwardsCurve.prototype._mulC = function (e) {
          return this.oneC ? e : this.c.redMul(e);
        }),
        (EdwardsCurve.prototype.jpoint = function (e, r, s, p) {
          return this.point(e, r, s, p);
        }),
        (EdwardsCurve.prototype.pointFromX = function (e, r) {
          (e = new b(e, 16)).red || (e = e.toRed(this.red));
          var s = e.redSqr(),
            p = this.c2.redSub(this.a.redMul(s)),
            v = this.one.redSub(this.c2.redMul(this.d).redMul(s)),
            w = p.redMul(v.redInvm()),
            _ = w.redSqrt();
          if (0 !== _.redSqr().redSub(w).cmp(this.zero))
            throw Error("invalid point");
          var P = _.fromRed().isOdd();
          return ((r && !P) || (!r && P)) && (_ = _.redNeg()), this.point(e, _);
        }),
        (EdwardsCurve.prototype.pointFromY = function (e, r) {
          (e = new b(e, 16)).red || (e = e.toRed(this.red));
          var s = e.redSqr(),
            p = s.redSub(this.c2),
            v = s.redMul(this.d).redMul(this.c2).redSub(this.a),
            w = p.redMul(v.redInvm());
          if (0 === w.cmp(this.zero)) {
            if (!r) return this.point(this.zero, e);
            throw Error("invalid point");
          }
          var _ = w.redSqrt();
          if (0 !== _.redSqr().redSub(w).cmp(this.zero))
            throw Error("invalid point");
          return (
            _.fromRed().isOdd() !== r && (_ = _.redNeg()), this.point(_, e)
          );
        }),
        (EdwardsCurve.prototype.validate = function (e) {
          if (e.isInfinity()) return !0;
          e.normalize();
          var r = e.x.redSqr(),
            s = e.y.redSqr(),
            p = r.redMul(this.a).redAdd(s),
            b = this.c2.redMul(this.one.redAdd(this.d.redMul(r).redMul(s)));
          return 0 === p.cmp(b);
        }),
        v(Point, w.BasePoint),
        (EdwardsCurve.prototype.pointFromJSON = function (e) {
          return Point.fromJSON(this, e);
        }),
        (EdwardsCurve.prototype.point = function (e, r, s, p) {
          return new Point(this, e, r, s, p);
        }),
        (Point.fromJSON = function (e, r) {
          return new Point(e, r[0], r[1], r[2]);
        }),
        (Point.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                " z: " +
                this.z.fromRed().toString(16, 2) +
                ">";
        }),
        (Point.prototype.isInfinity = function () {
          return (
            0 === this.x.cmpn(0) &&
            (0 === this.y.cmp(this.z) ||
              (this.zOne && 0 === this.y.cmp(this.curve.c)))
          );
        }),
        (Point.prototype._extDbl = function () {
          var e = this.x.redSqr(),
            r = this.y.redSqr(),
            s = this.z.redSqr();
          s = s.redIAdd(s);
          var p = this.curve._mulA(e),
            b = this.x.redAdd(this.y).redSqr().redISub(e).redISub(r),
            v = p.redAdd(r),
            w = v.redSub(s),
            _ = p.redSub(r),
            P = b.redMul(w),
            S = v.redMul(_),
            I = b.redMul(_),
            A = w.redMul(v);
          return this.curve.point(P, S, A, I);
        }),
        (Point.prototype._projDbl = function () {
          var e,
            r,
            s,
            p,
            b,
            v,
            w = this.x.redAdd(this.y).redSqr(),
            _ = this.x.redSqr(),
            P = this.y.redSqr();
          if (this.curve.twisted) {
            var S = (p = this.curve._mulA(_)).redAdd(P);
            this.zOne
              ? ((e = w.redSub(_).redSub(P).redMul(S.redSub(this.curve.two))),
                (r = S.redMul(p.redSub(P))),
                (s = S.redSqr().redSub(S).redSub(S)))
              : ((b = this.z.redSqr()),
                (v = S.redSub(b).redISub(b)),
                (e = w.redSub(_).redISub(P).redMul(v)),
                (r = S.redMul(p.redSub(P))),
                (s = S.redMul(v)));
          } else
            (p = _.redAdd(P)),
              (b = this.curve._mulC(this.z).redSqr()),
              (v = p.redSub(b).redSub(b)),
              (e = this.curve._mulC(w.redISub(p)).redMul(v)),
              (r = this.curve._mulC(p).redMul(_.redISub(P))),
              (s = p.redMul(v));
          return this.curve.point(e, r, s);
        }),
        (Point.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.extended
            ? this._extDbl()
            : this._projDbl();
        }),
        (Point.prototype._extAdd = function (e) {
          var r = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
            s = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
            p = this.t.redMul(this.curve.dd).redMul(e.t),
            b = this.z.redMul(e.z.redAdd(e.z)),
            v = s.redSub(r),
            w = b.redSub(p),
            _ = b.redAdd(p),
            P = s.redAdd(r),
            S = v.redMul(w),
            I = _.redMul(P),
            A = v.redMul(P),
            R = w.redMul(_);
          return this.curve.point(S, I, R, A);
        }),
        (Point.prototype._projAdd = function (e) {
          var r,
            s,
            p = this.z.redMul(e.z),
            b = p.redSqr(),
            v = this.x.redMul(e.x),
            w = this.y.redMul(e.y),
            _ = this.curve.d.redMul(v).redMul(w),
            P = b.redSub(_),
            S = b.redAdd(_),
            I = this.x
              .redAdd(this.y)
              .redMul(e.x.redAdd(e.y))
              .redISub(v)
              .redISub(w),
            A = p.redMul(P).redMul(I);
          return (
            this.curve.twisted
              ? ((r = p.redMul(S).redMul(w.redSub(this.curve._mulA(v)))),
                (s = P.redMul(S)))
              : ((r = p.redMul(S).redMul(w.redSub(v))),
                (s = this.curve._mulC(P).redMul(S))),
            this.curve.point(A, r, s)
          );
        }),
        (Point.prototype.add = function (e) {
          return this.isInfinity()
            ? e
            : e.isInfinity()
            ? this
            : this.curve.extended
            ? this._extAdd(e)
            : this._projAdd(e);
        }),
        (Point.prototype.mul = function (e) {
          return this._hasDoubles(e)
            ? this.curve._fixedNafMul(this, e)
            : this.curve._wnafMul(this, e);
        }),
        (Point.prototype.mulAdd = function (e, r, s) {
          return this.curve._wnafMulAdd(1, [this, r], [e, s], 2, !1);
        }),
        (Point.prototype.jmulAdd = function (e, r, s) {
          return this.curve._wnafMulAdd(1, [this, r], [e, s], 2, !0);
        }),
        (Point.prototype.normalize = function () {
          if (this.zOne) return this;
          var e = this.z.redInvm();
          return (
            (this.x = this.x.redMul(e)),
            (this.y = this.y.redMul(e)),
            this.t && (this.t = this.t.redMul(e)),
            (this.z = this.curve.one),
            (this.zOne = !0),
            this
          );
        }),
        (Point.prototype.neg = function () {
          return this.curve.point(
            this.x.redNeg(),
            this.y,
            this.z,
            this.t && this.t.redNeg()
          );
        }),
        (Point.prototype.getX = function () {
          return this.normalize(), this.x.fromRed();
        }),
        (Point.prototype.getY = function () {
          return this.normalize(), this.y.fromRed();
        }),
        (Point.prototype.eq = function (e) {
          return (
            this === e ||
            (0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY()))
          );
        }),
        (Point.prototype.eqXToP = function (e) {
          var r = e.toRed(this.curve.red).redMul(this.z);
          if (0 === this.x.cmp(r)) return !0;
          for (var s = e.clone(), p = this.curve.redN.redMul(this.z); ; ) {
            if ((s.iadd(this.curve.n), s.cmp(this.curve.p) >= 0)) return !1;
            if ((r.redIAdd(p), 0 === this.x.cmp(r))) return !0;
          }
        }),
        (Point.prototype.toP = Point.prototype.normalize),
        (Point.prototype.mixedAdd = Point.prototype.add);
    },
    7020: function (e, r, s) {
      "use strict";
      (r.base = s(41423)),
        (r.short = s(50022)),
        (r.mont = s(14118)),
        (r.edwards = s(59958));
    },
    14118: function (e, r, s) {
      "use strict";
      var p = s(44152),
        b = s(35717),
        v = s(41423),
        w = s(92790);
      function MontCurve(e) {
        v.call(this, "mont", e),
          (this.a = new p(e.a, 16).toRed(this.red)),
          (this.b = new p(e.b, 16).toRed(this.red)),
          (this.i4 = new p(4).toRed(this.red).redInvm()),
          (this.two = new p(2).toRed(this.red)),
          (this.a24 = this.i4.redMul(this.a.redAdd(this.two)));
      }
      function Point(e, r, s) {
        v.BasePoint.call(this, e, "projective"),
          null === r && null === s
            ? ((this.x = this.curve.one), (this.z = this.curve.zero))
            : ((this.x = new p(r, 16)),
              (this.z = new p(s, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)));
      }
      b(MontCurve, v),
        (e.exports = MontCurve),
        (MontCurve.prototype.validate = function (e) {
          var r = e.normalize().x,
            s = r.redSqr(),
            p = s.redMul(r).redAdd(s.redMul(this.a)).redAdd(r);
          return 0 === p.redSqrt().redSqr().cmp(p);
        }),
        b(Point, v.BasePoint),
        (MontCurve.prototype.decodePoint = function (e, r) {
          return this.point(w.toArray(e, r), 1);
        }),
        (MontCurve.prototype.point = function (e, r) {
          return new Point(this, e, r);
        }),
        (MontCurve.prototype.pointFromJSON = function (e) {
          return Point.fromJSON(this, e);
        }),
        (Point.prototype.precompute = function () {}),
        (Point.prototype._encode = function () {
          return this.getX().toArray("be", this.curve.p.byteLength());
        }),
        (Point.fromJSON = function (e, r) {
          return new Point(e, r[0], r[1] || e.one);
        }),
        (Point.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " z: " +
                this.z.fromRed().toString(16, 2) +
                ">";
        }),
        (Point.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        }),
        (Point.prototype.dbl = function () {
          var e = this.x.redAdd(this.z).redSqr(),
            r = this.x.redSub(this.z).redSqr(),
            s = e.redSub(r),
            p = e.redMul(r),
            b = s.redMul(r.redAdd(this.curve.a24.redMul(s)));
          return this.curve.point(p, b);
        }),
        (Point.prototype.add = function () {
          throw Error("Not supported on Montgomery curve");
        }),
        (Point.prototype.diffAdd = function (e, r) {
          var s = this.x.redAdd(this.z),
            p = this.x.redSub(this.z),
            b = e.x.redAdd(e.z),
            v = e.x.redSub(e.z).redMul(s),
            w = b.redMul(p),
            _ = r.z.redMul(v.redAdd(w).redSqr()),
            P = r.x.redMul(v.redISub(w).redSqr());
          return this.curve.point(_, P);
        }),
        (Point.prototype.mul = function (e) {
          for (
            var r = e.clone(),
              s = this,
              p = this.curve.point(null, null),
              b = [];
            0 !== r.cmpn(0);
            r.iushrn(1)
          )
            b.push(r.andln(1));
          for (var v = b.length - 1; v >= 0; v--)
            0 === b[v]
              ? ((s = s.diffAdd(p, this)), (p = p.dbl()))
              : ((p = s.diffAdd(p, this)), (s = s.dbl()));
          return p;
        }),
        (Point.prototype.mulAdd = function () {
          throw Error("Not supported on Montgomery curve");
        }),
        (Point.prototype.jumlAdd = function () {
          throw Error("Not supported on Montgomery curve");
        }),
        (Point.prototype.eq = function (e) {
          return 0 === this.getX().cmp(e.getX());
        }),
        (Point.prototype.normalize = function () {
          return (
            (this.x = this.x.redMul(this.z.redInvm())),
            (this.z = this.curve.one),
            this
          );
        }),
        (Point.prototype.getX = function () {
          return this.normalize(), this.x.fromRed();
        });
    },
    50022: function (e, r, s) {
      "use strict";
      var p = s(92790),
        b = s(44152),
        v = s(35717),
        w = s(41423),
        _ = p.assert;
      function ShortCurve(e) {
        w.call(this, "short", e),
          (this.a = new b(e.a, 16).toRed(this.red)),
          (this.b = new b(e.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(e)),
          (this._endoWnafT1 = [, , , ,]),
          (this._endoWnafT2 = [, , , ,]);
      }
      function Point(e, r, s, p) {
        w.BasePoint.call(this, e, "affine"),
          null === r && null === s
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new b(r, 16)),
              (this.y = new b(s, 16)),
              p &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1));
      }
      function JPoint(e, r, s, p) {
        w.BasePoint.call(this, e, "jacobian"),
          null === r && null === s && null === p
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new b(0)))
            : ((this.x = new b(r, 16)),
              (this.y = new b(s, 16)),
              (this.z = new b(p, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one);
      }
      v(ShortCurve, w),
        (e.exports = ShortCurve),
        (ShortCurve.prototype._getEndomorphism = function (e) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            if (e.beta) r = new b(e.beta, 16).toRed(this.red);
            else {
              var r,
                s,
                p,
                v = this._getEndoRoots(this.p);
              r = (r = 0 > v[0].cmp(v[1]) ? v[0] : v[1]).toRed(this.red);
            }
            if (e.lambda) s = new b(e.lambda, 16);
            else {
              var w = this._getEndoRoots(this.n);
              0 === this.g.mul(w[0]).x.cmp(this.g.x.redMul(r))
                ? (s = w[0])
                : ((s = w[1]),
                  _(0 === this.g.mul(s).x.cmp(this.g.x.redMul(r))));
            }
            return (
              (p = e.basis
                ? e.basis.map(function (e) {
                    return { a: new b(e.a, 16), b: new b(e.b, 16) };
                  })
                : this._getEndoBasis(s)),
              { beta: r, lambda: s, basis: p }
            );
          }
        }),
        (ShortCurve.prototype._getEndoRoots = function (e) {
          var r = e === this.p ? this.red : b.mont(e),
            s = new b(2).toRed(r).redInvm(),
            p = s.redNeg(),
            v = new b(3).toRed(r).redNeg().redSqrt().redMul(s);
          return [p.redAdd(v).fromRed(), p.redSub(v).fromRed()];
        }),
        (ShortCurve.prototype._getEndoBasis = function (e) {
          for (
            var r,
              s,
              p,
              v,
              w,
              _,
              P,
              S,
              I,
              A = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              R = e,
              C = this.n.clone(),
              B = new b(1),
              j = new b(0),
              V = new b(0),
              J = new b(1),
              W = 0;
            0 !== R.cmpn(0);

          ) {
            var X = C.div(R);
            (S = C.sub(X.mul(R))), (I = V.sub(X.mul(B)));
            var et = J.sub(X.mul(j));
            if (!p && 0 > S.cmp(A))
              (r = P.neg()), (s = B), (p = S.neg()), (v = I);
            else if (p && 2 == ++W) break;
            (P = S), (C = R), (R = S), (V = B), (B = I), (J = j), (j = et);
          }
          (w = S.neg()), (_ = I);
          var es = p.sqr().add(v.sqr());
          return (
            w.sqr().add(_.sqr()).cmp(es) >= 0 && ((w = r), (_ = s)),
            p.negative && ((p = p.neg()), (v = v.neg())),
            w.negative && ((w = w.neg()), (_ = _.neg())),
            [
              { a: p, b: v },
              { a: w, b: _ },
            ]
          );
        }),
        (ShortCurve.prototype._endoSplit = function (e) {
          var r = this.endo.basis,
            s = r[0],
            p = r[1],
            b = p.b.mul(e).divRound(this.n),
            v = s.b.neg().mul(e).divRound(this.n),
            w = b.mul(s.a),
            _ = v.mul(p.a),
            P = b.mul(s.b),
            S = v.mul(p.b);
          return { k1: e.sub(w).sub(_), k2: P.add(S).neg() };
        }),
        (ShortCurve.prototype.pointFromX = function (e, r) {
          (e = new b(e, 16)).red || (e = e.toRed(this.red));
          var s = e
              .redSqr()
              .redMul(e)
              .redIAdd(e.redMul(this.a))
              .redIAdd(this.b),
            p = s.redSqrt();
          if (0 !== p.redSqr().redSub(s).cmp(this.zero))
            throw Error("invalid point");
          var v = p.fromRed().isOdd();
          return ((r && !v) || (!r && v)) && (p = p.redNeg()), this.point(e, p);
        }),
        (ShortCurve.prototype.validate = function (e) {
          if (e.inf) return !0;
          var r = e.x,
            s = e.y,
            p = this.a.redMul(r),
            b = r.redSqr().redMul(r).redIAdd(p).redIAdd(this.b);
          return 0 === s.redSqr().redISub(b).cmpn(0);
        }),
        (ShortCurve.prototype._endoWnafMulAdd = function (e, r, s) {
          for (
            var p = this._endoWnafT1, b = this._endoWnafT2, v = 0;
            v < e.length;
            v++
          ) {
            var w = this._endoSplit(r[v]),
              _ = e[v],
              P = _._getBeta();
            w.k1.negative && (w.k1.ineg(), (_ = _.neg(!0))),
              w.k2.negative && (w.k2.ineg(), (P = P.neg(!0))),
              (p[2 * v] = _),
              (p[2 * v + 1] = P),
              (b[2 * v] = w.k1),
              (b[2 * v + 1] = w.k2);
          }
          for (
            var S = this._wnafMulAdd(1, p, b, 2 * v, s), I = 0;
            I < 2 * v;
            I++
          )
            (p[I] = null), (b[I] = null);
          return S;
        }),
        v(Point, w.BasePoint),
        (ShortCurve.prototype.point = function (e, r, s) {
          return new Point(this, e, r, s);
        }),
        (ShortCurve.prototype.pointFromJSON = function (e, r) {
          return Point.fromJSON(this, e, r);
        }),
        (Point.prototype._getBeta = function () {
          if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta) return e.beta;
            var r = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y
            );
            if (e) {
              var s = this.curve,
                endoMul = function (e) {
                  return s.point(e.x.redMul(s.endo.beta), e.y);
                };
              (e.beta = r),
                (r.precomputed = {
                  beta: null,
                  naf: e.naf && {
                    wnd: e.naf.wnd,
                    points: e.naf.points.map(endoMul),
                  },
                  doubles: e.doubles && {
                    step: e.doubles.step,
                    points: e.doubles.points.map(endoMul),
                  },
                });
            }
            return r;
          }
        }),
        (Point.prototype.toJSON = function () {
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
        (Point.fromJSON = function (e, r, s) {
          "string" == typeof r && (r = JSON.parse(r));
          var p = e.point(r[0], r[1], s);
          if (!r[2]) return p;
          function obj2point(r) {
            return e.point(r[0], r[1], s);
          }
          var b = r[2];
          return (
            (p.precomputed = {
              beta: null,
              doubles: b.doubles && {
                step: b.doubles.step,
                points: [p].concat(b.doubles.points.map(obj2point)),
              },
              naf: b.naf && {
                wnd: b.naf.wnd,
                points: [p].concat(b.naf.points.map(obj2point)),
              },
            }),
            p
          );
        }),
        (Point.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                ">";
        }),
        (Point.prototype.isInfinity = function () {
          return this.inf;
        }),
        (Point.prototype.add = function (e) {
          if (this.inf) return e;
          if (e.inf) return this;
          if (this.eq(e)) return this.dbl();
          if (this.neg().eq(e) || 0 === this.x.cmp(e.x))
            return this.curve.point(null, null);
          var r = this.y.redSub(e.y);
          0 !== r.cmpn(0) && (r = r.redMul(this.x.redSub(e.x).redInvm()));
          var s = r.redSqr().redISub(this.x).redISub(e.x),
            p = r.redMul(this.x.redSub(s)).redISub(this.y);
          return this.curve.point(s, p);
        }),
        (Point.prototype.dbl = function () {
          if (this.inf) return this;
          var e = this.y.redAdd(this.y);
          if (0 === e.cmpn(0)) return this.curve.point(null, null);
          var r = this.curve.a,
            s = this.x.redSqr(),
            p = e.redInvm(),
            b = s.redAdd(s).redIAdd(s).redIAdd(r).redMul(p),
            v = b.redSqr().redISub(this.x.redAdd(this.x)),
            w = b.redMul(this.x.redSub(v)).redISub(this.y);
          return this.curve.point(v, w);
        }),
        (Point.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (Point.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (Point.prototype.mul = function (e) {
          return ((e = new b(e, 16)), this.isInfinity())
            ? this
            : this._hasDoubles(e)
            ? this.curve._fixedNafMul(this, e)
            : this.curve.endo
            ? this.curve._endoWnafMulAdd([this], [e])
            : this.curve._wnafMul(this, e);
        }),
        (Point.prototype.mulAdd = function (e, r, s) {
          var p = [this, r],
            b = [e, s];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(p, b)
            : this.curve._wnafMulAdd(1, p, b, 2);
        }),
        (Point.prototype.jmulAdd = function (e, r, s) {
          var p = [this, r],
            b = [e, s];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(p, b, !0)
            : this.curve._wnafMulAdd(1, p, b, 2, !0);
        }),
        (Point.prototype.eq = function (e) {
          return (
            this === e ||
            (this.inf === e.inf &&
              (this.inf || (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))))
          );
        }),
        (Point.prototype.neg = function (e) {
          if (this.inf) return this;
          var r = this.curve.point(this.x, this.y.redNeg());
          if (e && this.precomputed) {
            var s = this.precomputed,
              negate = function (e) {
                return e.neg();
              };
            r.precomputed = {
              naf: s.naf && {
                wnd: s.naf.wnd,
                points: s.naf.points.map(negate),
              },
              doubles: s.doubles && {
                step: s.doubles.step,
                points: s.doubles.points.map(negate),
              },
            };
          }
          return r;
        }),
        (Point.prototype.toJ = function () {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        v(JPoint, w.BasePoint),
        (ShortCurve.prototype.jpoint = function (e, r, s) {
          return new JPoint(this, e, r, s);
        }),
        (JPoint.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var e = this.z.redInvm(),
            r = e.redSqr(),
            s = this.x.redMul(r),
            p = this.y.redMul(r).redMul(e);
          return this.curve.point(s, p);
        }),
        (JPoint.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (JPoint.prototype.add = function (e) {
          if (this.isInfinity()) return e;
          if (e.isInfinity()) return this;
          var r = e.z.redSqr(),
            s = this.z.redSqr(),
            p = this.x.redMul(r),
            b = e.x.redMul(s),
            v = this.y.redMul(r.redMul(e.z)),
            w = e.y.redMul(s.redMul(this.z)),
            _ = p.redSub(b),
            P = v.redSub(w);
          if (0 === _.cmpn(0))
            return 0 !== P.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var S = _.redSqr(),
            I = S.redMul(_),
            A = p.redMul(S),
            R = P.redSqr().redIAdd(I).redISub(A).redISub(A),
            C = P.redMul(A.redISub(R)).redISub(v.redMul(I)),
            B = this.z.redMul(e.z).redMul(_);
          return this.curve.jpoint(R, C, B);
        }),
        (JPoint.prototype.mixedAdd = function (e) {
          if (this.isInfinity()) return e.toJ();
          if (e.isInfinity()) return this;
          var r = this.z.redSqr(),
            s = this.x,
            p = e.x.redMul(r),
            b = this.y,
            v = e.y.redMul(r).redMul(this.z),
            w = s.redSub(p),
            _ = b.redSub(v);
          if (0 === w.cmpn(0))
            return 0 !== _.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var P = w.redSqr(),
            S = P.redMul(w),
            I = s.redMul(P),
            A = _.redSqr().redIAdd(S).redISub(I).redISub(I),
            R = _.redMul(I.redISub(A)).redISub(b.redMul(S)),
            C = this.z.redMul(w);
          return this.curve.jpoint(A, R, C);
        }),
        (JPoint.prototype.dblp = function (e) {
          if (0 === e || this.isInfinity()) return this;
          if (!e) return this.dbl();
          if (this.curve.zeroA || this.curve.threeA) {
            var r,
              s = this;
            for (r = 0; r < e; r++) s = s.dbl();
            return s;
          }
          var p = this.curve.a,
            b = this.curve.tinv,
            v = this.x,
            w = this.y,
            _ = this.z,
            P = _.redSqr().redSqr(),
            S = w.redAdd(w);
          for (r = 0; r < e; r++) {
            var I = v.redSqr(),
              A = S.redSqr(),
              R = A.redSqr(),
              C = I.redAdd(I).redIAdd(I).redIAdd(p.redMul(P)),
              B = v.redMul(A),
              j = C.redSqr().redISub(B.redAdd(B)),
              V = B.redISub(j),
              J = C.redMul(V);
            J = J.redIAdd(J).redISub(R);
            var W = S.redMul(_);
            r + 1 < e && (P = P.redMul(R)), (v = j), (_ = W), (S = J);
          }
          return this.curve.jpoint(v, S.redMul(b), _);
        }),
        (JPoint.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl();
        }),
        (JPoint.prototype._zeroDbl = function () {
          if (this.zOne) {
            var e,
              r,
              s,
              p = this.x.redSqr(),
              b = this.y.redSqr(),
              v = b.redSqr(),
              w = this.x.redAdd(b).redSqr().redISub(p).redISub(v);
            w = w.redIAdd(w);
            var _ = p.redAdd(p).redIAdd(p),
              P = _.redSqr().redISub(w).redISub(w),
              S = v.redIAdd(v);
            (S = (S = S.redIAdd(S)).redIAdd(S)),
              (e = P),
              (r = _.redMul(w.redISub(P)).redISub(S)),
              (s = this.y.redAdd(this.y));
          } else {
            var I = this.x.redSqr(),
              A = this.y.redSqr(),
              R = A.redSqr(),
              C = this.x.redAdd(A).redSqr().redISub(I).redISub(R);
            C = C.redIAdd(C);
            var B = I.redAdd(I).redIAdd(I),
              j = B.redSqr(),
              V = R.redIAdd(R);
            (V = (V = V.redIAdd(V)).redIAdd(V)),
              (e = j.redISub(C).redISub(C)),
              (r = B.redMul(C.redISub(e)).redISub(V)),
              (s = (s = this.y.redMul(this.z)).redIAdd(s));
          }
          return this.curve.jpoint(e, r, s);
        }),
        (JPoint.prototype._threeDbl = function () {
          if (this.zOne) {
            var e,
              r,
              s,
              p = this.x.redSqr(),
              b = this.y.redSqr(),
              v = b.redSqr(),
              w = this.x.redAdd(b).redSqr().redISub(p).redISub(v);
            w = w.redIAdd(w);
            var _ = p.redAdd(p).redIAdd(p).redIAdd(this.curve.a),
              P = _.redSqr().redISub(w).redISub(w);
            e = P;
            var S = v.redIAdd(v);
            (S = (S = S.redIAdd(S)).redIAdd(S)),
              (r = _.redMul(w.redISub(P)).redISub(S)),
              (s = this.y.redAdd(this.y));
          } else {
            var I = this.z.redSqr(),
              A = this.y.redSqr(),
              R = this.x.redMul(A),
              C = this.x.redSub(I).redMul(this.x.redAdd(I));
            C = C.redAdd(C).redIAdd(C);
            var B = R.redIAdd(R),
              j = (B = B.redIAdd(B)).redAdd(B);
            (e = C.redSqr().redISub(j)),
              (s = this.y.redAdd(this.z).redSqr().redISub(A).redISub(I));
            var V = A.redSqr();
            (V = (V = (V = V.redIAdd(V)).redIAdd(V)).redIAdd(V)),
              (r = C.redMul(B.redISub(e)).redISub(V));
          }
          return this.curve.jpoint(e, r, s);
        }),
        (JPoint.prototype._dbl = function () {
          var e = this.curve.a,
            r = this.x,
            s = this.y,
            p = this.z,
            b = p.redSqr().redSqr(),
            v = r.redSqr(),
            w = s.redSqr(),
            _ = v.redAdd(v).redIAdd(v).redIAdd(e.redMul(b)),
            P = r.redAdd(r),
            S = (P = P.redIAdd(P)).redMul(w),
            I = _.redSqr().redISub(S.redAdd(S)),
            A = S.redISub(I),
            R = w.redSqr();
          R = (R = (R = R.redIAdd(R)).redIAdd(R)).redIAdd(R);
          var C = _.redMul(A).redISub(R),
            B = s.redAdd(s).redMul(p);
          return this.curve.jpoint(I, C, B);
        }),
        (JPoint.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var e = this.x.redSqr(),
            r = this.y.redSqr(),
            s = this.z.redSqr(),
            p = r.redSqr(),
            b = e.redAdd(e).redIAdd(e),
            v = b.redSqr(),
            w = this.x.redAdd(r).redSqr().redISub(e).redISub(p),
            _ = (w = (w = (w = w.redIAdd(w)).redAdd(w).redIAdd(w)).redISub(
              v
            )).redSqr(),
            P = p.redIAdd(p);
          P = (P = (P = P.redIAdd(P)).redIAdd(P)).redIAdd(P);
          var S = b.redIAdd(w).redSqr().redISub(v).redISub(_).redISub(P),
            I = r.redMul(S);
          I = (I = I.redIAdd(I)).redIAdd(I);
          var A = this.x.redMul(_).redISub(I);
          A = (A = A.redIAdd(A)).redIAdd(A);
          var R = this.y.redMul(S.redMul(P.redISub(S)).redISub(w.redMul(_)));
          R = (R = (R = R.redIAdd(R)).redIAdd(R)).redIAdd(R);
          var C = this.z.redAdd(w).redSqr().redISub(s).redISub(_);
          return this.curve.jpoint(A, R, C);
        }),
        (JPoint.prototype.mul = function (e, r) {
          return (e = new b(e, r)), this.curve._wnafMul(this, e);
        }),
        (JPoint.prototype.eq = function (e) {
          if ("affine" === e.type) return this.eq(e.toJ());
          if (this === e) return !0;
          var r = this.z.redSqr(),
            s = e.z.redSqr();
          if (0 !== this.x.redMul(s).redISub(e.x.redMul(r)).cmpn(0)) return !1;
          var p = r.redMul(this.z),
            b = s.redMul(e.z);
          return 0 === this.y.redMul(b).redISub(e.y.redMul(p)).cmpn(0);
        }),
        (JPoint.prototype.eqXToP = function (e) {
          var r = this.z.redSqr(),
            s = e.toRed(this.curve.red).redMul(r);
          if (0 === this.x.cmp(s)) return !0;
          for (var p = e.clone(), b = this.curve.redN.redMul(r); ; ) {
            if ((p.iadd(this.curve.n), p.cmp(this.curve.p) >= 0)) return !1;
            if ((s.redIAdd(b), 0 === this.x.cmp(s))) return !0;
          }
        }),
        (JPoint.prototype.inspect = function () {
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
        (JPoint.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        });
    },
    48332: function (e, r, s) {
      "use strict";
      var p,
        b = s(33715),
        v = s(7020),
        w = s(92790).assert;
      function PresetCurve(e) {
        "short" === e.type
          ? (this.curve = new v.short(e))
          : "edwards" === e.type
          ? (this.curve = new v.edwards(e))
          : (this.curve = new v.mont(e)),
          (this.g = this.curve.g),
          (this.n = this.curve.n),
          (this.hash = e.hash),
          w(this.g.validate(), "Invalid curve"),
          w(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
      }
      function defineCurve(e, s) {
        Object.defineProperty(r, e, {
          configurable: !0,
          enumerable: !0,
          get: function () {
            var p = new PresetCurve(s);
            return (
              Object.defineProperty(r, e, {
                configurable: !0,
                enumerable: !0,
                value: p,
              }),
              p
            );
          },
        });
      }
      (r.PresetCurve = PresetCurve),
        defineCurve("p192", {
          type: "short",
          prime: "p192",
          p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
          a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
          b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
          n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
          hash: b.sha256,
          gRed: !1,
          g: [
            "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
            "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
          ],
        }),
        defineCurve("p224", {
          type: "short",
          prime: "p224",
          p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
          a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
          b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
          n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
          hash: b.sha256,
          gRed: !1,
          g: [
            "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
            "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
          ],
        }),
        defineCurve("p256", {
          type: "short",
          prime: null,
          p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
          a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
          b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
          n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
          hash: b.sha256,
          gRed: !1,
          g: [
            "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
            "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
          ],
        }),
        defineCurve("p384", {
          type: "short",
          prime: null,
          p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
          a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
          b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
          n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
          hash: b.sha384,
          gRed: !1,
          g: [
            "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
            "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
          ],
        }),
        defineCurve("p521", {
          type: "short",
          prime: null,
          p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
          a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
          b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
          n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
          hash: b.sha512,
          gRed: !1,
          g: [
            "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
            "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
          ],
        }),
        defineCurve("curve25519", {
          type: "mont",
          prime: "p25519",
          p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
          a: "76d06",
          b: "1",
          n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
          hash: b.sha256,
          gRed: !1,
          g: ["9"],
        }),
        defineCurve("ed25519", {
          type: "edwards",
          prime: "p25519",
          p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
          a: "-1",
          c: "1",
          d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
          n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
          hash: b.sha256,
          gRed: !1,
          g: [
            "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
            "6666666666666666666666666666666666666666666666666666666666666658",
          ],
        });
      try {
        p = s(78256);
      } catch (e) {
        p = void 0;
      }
      defineCurve("secp256k1", {
        type: "short",
        prime: "k256",
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
        a: "0",
        b: "7",
        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
        h: "1",
        hash: b.sha256,
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
          p,
        ],
      });
    },
    10663: function (e, r, s) {
      "use strict";
      var p = s(44152),
        b = s(2156),
        v = s(92790),
        w = s(48332),
        _ = s(29931),
        P = v.assert,
        S = s(37748),
        I = s(28588);
      function EC(e) {
        if (!(this instanceof EC)) return new EC(e);
        "string" == typeof e &&
          (P(Object.prototype.hasOwnProperty.call(w, e), "Unknown curve " + e),
          (e = w[e])),
          e instanceof w.PresetCurve && (e = { curve: e }),
          (this.curve = e.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = e.curve.g),
          this.g.precompute(e.curve.n.bitLength() + 1),
          (this.hash = e.hash || e.curve.hash);
      }
      (e.exports = EC),
        (EC.prototype.keyPair = function (e) {
          return new S(this, e);
        }),
        (EC.prototype.keyFromPrivate = function (e, r) {
          return S.fromPrivate(this, e, r);
        }),
        (EC.prototype.keyFromPublic = function (e, r) {
          return S.fromPublic(this, e, r);
        }),
        (EC.prototype.genKeyPair = function (e) {
          e || (e = {});
          for (
            var r = new b({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || "utf8",
                entropy: e.entropy || _(this.hash.hmacStrength),
                entropyEnc: (e.entropy && e.entropyEnc) || "utf8",
                nonce: this.n.toArray(),
              }),
              s = this.n.byteLength(),
              v = this.n.sub(new p(2));
            ;

          ) {
            var w = new p(r.generate(s));
            if (!(w.cmp(v) > 0)) return w.iaddn(1), this.keyFromPrivate(w);
          }
        }),
        (EC.prototype._truncateToN = function (e, r) {
          var s = 8 * e.byteLength() - this.n.bitLength();
          return (s > 0 && (e = e.ushrn(s)), !r && e.cmp(this.n) >= 0)
            ? e.sub(this.n)
            : e;
        }),
        (EC.prototype.sign = function (e, r, s, v) {
          "object" == typeof s && ((v = s), (s = null)),
            v || (v = {}),
            (r = this.keyFromPrivate(r, s)),
            (e = this._truncateToN(new p(e, 16)));
          for (
            var w = this.n.byteLength(),
              _ = r.getPrivate().toArray("be", w),
              P = e.toArray("be", w),
              S = new b({
                hash: this.hash,
                entropy: _,
                nonce: P,
                pers: v.pers,
                persEnc: v.persEnc || "utf8",
              }),
              A = this.n.sub(new p(1)),
              R = 0;
            ;
            R++
          ) {
            var C = v.k ? v.k(R) : new p(S.generate(this.n.byteLength()));
            if (
              !(0 >= (C = this._truncateToN(C, !0)).cmpn(1) || C.cmp(A) >= 0)
            ) {
              var B = this.g.mul(C);
              if (!B.isInfinity()) {
                var j = B.getX(),
                  V = j.umod(this.n);
                if (0 !== V.cmpn(0)) {
                  var J = C.invm(this.n).mul(V.mul(r.getPrivate()).iadd(e));
                  if (0 !== (J = J.umod(this.n)).cmpn(0)) {
                    var W =
                      (B.getY().isOdd() ? 1 : 0) | (0 !== j.cmp(V) ? 2 : 0);
                    return (
                      v.canonical &&
                        J.cmp(this.nh) > 0 &&
                        ((J = this.n.sub(J)), (W ^= 1)),
                      new I({ r: V, s: J, recoveryParam: W })
                    );
                  }
                }
              }
            }
          }
        }),
        (EC.prototype.verify = function (e, r, s, b) {
          (e = this._truncateToN(new p(e, 16))), (s = this.keyFromPublic(s, b));
          var v,
            w = (r = new I(r, "hex")).r,
            _ = r.s;
          if (
            0 > w.cmpn(1) ||
            w.cmp(this.n) >= 0 ||
            0 > _.cmpn(1) ||
            _.cmp(this.n) >= 0
          )
            return !1;
          var P = _.invm(this.n),
            S = P.mul(e).umod(this.n),
            A = P.mul(w).umod(this.n);
          return this.curve._maxwellTrick
            ? !(v = this.g.jmulAdd(S, s.getPublic(), A)).isInfinity() &&
                v.eqXToP(w)
            : !(v = this.g.mulAdd(S, s.getPublic(), A)).isInfinity() &&
                0 === v.getX().umod(this.n).cmp(w);
        }),
        (EC.prototype.recoverPubKey = function (e, r, s, b) {
          P((3 & s) === s, "The recovery param is more than two bits"),
            (r = new I(r, b));
          var v = this.n,
            w = new p(e),
            _ = r.r,
            S = r.s,
            A = 1 & s,
            R = s >> 1;
          if (_.cmp(this.curve.p.umod(this.curve.n)) >= 0 && R)
            throw Error("Unable to find sencond key candinate");
          _ = R
            ? this.curve.pointFromX(_.add(this.curve.n), A)
            : this.curve.pointFromX(_, A);
          var C = r.r.invm(v),
            B = v.sub(w).mul(C).umod(v),
            j = S.mul(C).umod(v);
          return this.g.mulAdd(B, _, j);
        }),
        (EC.prototype.getKeyRecoveryParam = function (e, r, s, p) {
          if (null !== (r = new I(r, p)).recoveryParam) return r.recoveryParam;
          for (var b, v = 0; v < 4; v++) {
            try {
              b = this.recoverPubKey(e, r, v);
            } catch (e) {
              continue;
            }
            if (b.eq(s)) return v;
          }
          throw Error("Unable to find valid recovery factor");
        });
    },
    37748: function (e, r, s) {
      "use strict";
      var p = s(44152),
        b = s(92790).assert;
      function KeyPair(e, r) {
        (this.ec = e),
          (this.priv = null),
          (this.pub = null),
          r.priv && this._importPrivate(r.priv, r.privEnc),
          r.pub && this._importPublic(r.pub, r.pubEnc);
      }
      (e.exports = KeyPair),
        (KeyPair.fromPublic = function (e, r, s) {
          return r instanceof KeyPair
            ? r
            : new KeyPair(e, { pub: r, pubEnc: s });
        }),
        (KeyPair.fromPrivate = function (e, r, s) {
          return r instanceof KeyPair
            ? r
            : new KeyPair(e, { priv: r, privEnc: s });
        }),
        (KeyPair.prototype.validate = function () {
          var e = this.getPublic();
          return e.isInfinity()
            ? { result: !1, reason: "Invalid public key" }
            : e.validate()
            ? e.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: "Public key * N != O" }
            : { result: !1, reason: "Public key is not a point" };
        }),
        (KeyPair.prototype.getPublic = function (e, r) {
          return ("string" == typeof e && ((r = e), (e = null)),
          this.pub || (this.pub = this.ec.g.mul(this.priv)),
          r)
            ? this.pub.encode(r, e)
            : this.pub;
        }),
        (KeyPair.prototype.getPrivate = function (e) {
          return "hex" === e ? this.priv.toString(16, 2) : this.priv;
        }),
        (KeyPair.prototype._importPrivate = function (e, r) {
          (this.priv = new p(e, r || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        (KeyPair.prototype._importPublic = function (e, r) {
          if (e.x || e.y) {
            "mont" === this.ec.curve.type
              ? b(e.x, "Need x coordinate")
              : ("short" === this.ec.curve.type ||
                  "edwards" === this.ec.curve.type) &&
                b(e.x && e.y, "Need both x and y coordinate"),
              (this.pub = this.ec.curve.point(e.x, e.y));
            return;
          }
          this.pub = this.ec.curve.decodePoint(e, r);
        }),
        (KeyPair.prototype.derive = function (e) {
          return (
            e.validate() || b(e.validate(), "public point not validated"),
            e.mul(this.priv).getX()
          );
        }),
        (KeyPair.prototype.sign = function (e, r, s) {
          return this.ec.sign(e, this, r, s);
        }),
        (KeyPair.prototype.verify = function (e, r) {
          return this.ec.verify(e, r, this);
        }),
        (KeyPair.prototype.inspect = function () {
          return (
            "<Key priv: " +
            (this.priv && this.priv.toString(16, 2)) +
            " pub: " +
            (this.pub && this.pub.inspect()) +
            " >"
          );
        });
    },
    28588: function (e, r, s) {
      "use strict";
      var p = s(44152),
        b = s(92790),
        v = b.assert;
      function Signature(e, r) {
        if (e instanceof Signature) return e;
        this._importDER(e, r) ||
          (v(e.r && e.s, "Signature without r or s"),
          (this.r = new p(e.r, 16)),
          (this.s = new p(e.s, 16)),
          void 0 === e.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = e.recoveryParam));
      }
      function Position() {
        this.place = 0;
      }
      function getLength(e, r) {
        var s = e[r.place++];
        if (!(128 & s)) return s;
        var p = 15 & s;
        if (0 === p || p > 4 || 0 === e[r.place]) return !1;
        for (var b = 0, v = 0, w = r.place; v < p; v++, w++)
          (b <<= 8), (b |= e[w]), (b >>>= 0);
        return !(b <= 127) && ((r.place = w), b);
      }
      function rmPadding(e) {
        for (var r = 0, s = e.length - 1; !e[r] && !(128 & e[r + 1]) && r < s; )
          r++;
        return 0 === r ? e : e.slice(r);
      }
      function constructLength(e, r) {
        if (r < 128) {
          e.push(r);
          return;
        }
        var s = 1 + ((Math.log(r) / Math.LN2) >>> 3);
        for (e.push(128 | s); --s; ) e.push((r >>> (s << 3)) & 255);
        e.push(r);
      }
      (e.exports = Signature),
        (Signature.prototype._importDER = function (e, r) {
          e = b.toArray(e, r);
          var s = new Position();
          if (48 !== e[s.place++]) return !1;
          var v = getLength(e, s);
          if (!1 === v || v + s.place !== e.length || 2 !== e[s.place++])
            return !1;
          var w = getLength(e, s);
          if (!1 === w || (128 & e[s.place]) != 0) return !1;
          var _ = e.slice(s.place, w + s.place);
          if (((s.place += w), 2 !== e[s.place++])) return !1;
          var P = getLength(e, s);
          if (!1 === P || e.length !== P + s.place || (128 & e[s.place]) != 0)
            return !1;
          var S = e.slice(s.place, P + s.place);
          if (0 === _[0]) {
            if (!(128 & _[1])) return !1;
            _ = _.slice(1);
          }
          if (0 === S[0]) {
            if (!(128 & S[1])) return !1;
            S = S.slice(1);
          }
          return (
            (this.r = new p(_)),
            (this.s = new p(S)),
            (this.recoveryParam = null),
            !0
          );
        }),
        (Signature.prototype.toDER = function (e) {
          var r = this.r.toArray(),
            s = this.s.toArray();
          for (
            128 & r[0] && (r = [0].concat(r)),
              128 & s[0] && (s = [0].concat(s)),
              r = rmPadding(r),
              s = rmPadding(s);
            !s[0] && !(128 & s[1]);

          )
            s = s.slice(1);
          var p = [2];
          constructLength(p, r.length),
            (p = p.concat(r)).push(2),
            constructLength(p, s.length);
          var v = p.concat(s),
            w = [48];
          return (
            constructLength(w, v.length), (w = w.concat(v)), b.encode(w, e)
          );
        });
    },
    88208: function (e, r, s) {
      "use strict";
      var p = s(33715),
        b = s(48332),
        v = s(92790),
        w = v.assert,
        _ = v.parseBytes,
        P = s(32367),
        S = s(15796);
      function EDDSA(e) {
        if (
          (w("ed25519" === e, "only tested with ed25519 so far"),
          !(this instanceof EDDSA))
        )
          return new EDDSA(e);
        (e = b[e].curve),
          (this.curve = e),
          (this.g = e.g),
          this.g.precompute(e.n.bitLength() + 1),
          (this.pointClass = e.point().constructor),
          (this.encodingLength = Math.ceil(e.n.bitLength() / 8)),
          (this.hash = p.sha512);
      }
      (e.exports = EDDSA),
        (EDDSA.prototype.sign = function (e, r) {
          e = _(e);
          var s = this.keyFromSecret(r),
            p = this.hashInt(s.messagePrefix(), e),
            b = this.g.mul(p),
            v = this.encodePoint(b),
            w = this.hashInt(v, s.pubBytes(), e).mul(s.priv()),
            P = p.add(w).umod(this.curve.n);
          return this.makeSignature({ R: b, S: P, Rencoded: v });
        }),
        (EDDSA.prototype.verify = function (e, r, s) {
          if (
            ((e = _(e)),
            (r = this.makeSignature(r)).S().gte(r.eddsa.curve.n) ||
              r.S().isNeg())
          )
            return !1;
          var p = this.keyFromPublic(s),
            b = this.hashInt(r.Rencoded(), p.pubBytes(), e),
            v = this.g.mul(r.S());
          return r.R().add(p.pub().mul(b)).eq(v);
        }),
        (EDDSA.prototype.hashInt = function () {
          for (var e = this.hash(), r = 0; r < arguments.length; r++)
            e.update(arguments[r]);
          return v.intFromLE(e.digest()).umod(this.curve.n);
        }),
        (EDDSA.prototype.keyFromPublic = function (e) {
          return P.fromPublic(this, e);
        }),
        (EDDSA.prototype.keyFromSecret = function (e) {
          return P.fromSecret(this, e);
        }),
        (EDDSA.prototype.makeSignature = function (e) {
          return e instanceof S ? e : new S(this, e);
        }),
        (EDDSA.prototype.encodePoint = function (e) {
          var r = e.getY().toArray("le", this.encodingLength);
          return (r[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0), r;
        }),
        (EDDSA.prototype.decodePoint = function (e) {
          var r = (e = v.parseBytes(e)).length - 1,
            s = e.slice(0, r).concat(-129 & e[r]),
            p = (128 & e[r]) != 0,
            b = v.intFromLE(s);
          return this.curve.pointFromY(b, p);
        }),
        (EDDSA.prototype.encodeInt = function (e) {
          return e.toArray("le", this.encodingLength);
        }),
        (EDDSA.prototype.decodeInt = function (e) {
          return v.intFromLE(e);
        }),
        (EDDSA.prototype.isPoint = function (e) {
          return e instanceof this.pointClass;
        });
    },
    32367: function (e, r, s) {
      "use strict";
      var p = s(92790),
        b = p.assert,
        v = p.parseBytes,
        w = p.cachedProperty;
      function KeyPair(e, r) {
        (this.eddsa = e),
          (this._secret = v(r.secret)),
          e.isPoint(r.pub) ? (this._pub = r.pub) : (this._pubBytes = v(r.pub));
      }
      (KeyPair.fromPublic = function (e, r) {
        return r instanceof KeyPair ? r : new KeyPair(e, { pub: r });
      }),
        (KeyPair.fromSecret = function (e, r) {
          return r instanceof KeyPair ? r : new KeyPair(e, { secret: r });
        }),
        (KeyPair.prototype.secret = function () {
          return this._secret;
        }),
        w(KeyPair, "pubBytes", function () {
          return this.eddsa.encodePoint(this.pub());
        }),
        w(KeyPair, "pub", function () {
          return this._pubBytes
            ? this.eddsa.decodePoint(this._pubBytes)
            : this.eddsa.g.mul(this.priv());
        }),
        w(KeyPair, "privBytes", function () {
          var e = this.eddsa,
            r = this.hash(),
            s = e.encodingLength - 1,
            p = r.slice(0, e.encodingLength);
          return (p[0] &= 248), (p[s] &= 127), (p[s] |= 64), p;
        }),
        w(KeyPair, "priv", function () {
          return this.eddsa.decodeInt(this.privBytes());
        }),
        w(KeyPair, "hash", function () {
          return this.eddsa.hash().update(this.secret()).digest();
        }),
        w(KeyPair, "messagePrefix", function () {
          return this.hash().slice(this.eddsa.encodingLength);
        }),
        (KeyPair.prototype.sign = function (e) {
          return (
            b(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this)
          );
        }),
        (KeyPair.prototype.verify = function (e, r) {
          return this.eddsa.verify(e, r, this);
        }),
        (KeyPair.prototype.getSecret = function (e) {
          return (
            b(this._secret, "KeyPair is public only"),
            p.encode(this.secret(), e)
          );
        }),
        (KeyPair.prototype.getPublic = function (e) {
          return p.encode(this.pubBytes(), e);
        }),
        (e.exports = KeyPair);
    },
    15796: function (e, r, s) {
      "use strict";
      var p = s(44152),
        b = s(92790),
        v = b.assert,
        w = b.cachedProperty,
        _ = b.parseBytes;
      function Signature(e, r) {
        (this.eddsa = e),
          "object" != typeof r && (r = _(r)),
          Array.isArray(r) &&
            (v(r.length === 2 * e.encodingLength, "Signature has invalid size"),
            (r = {
              R: r.slice(0, e.encodingLength),
              S: r.slice(e.encodingLength),
            })),
          v(r.R && r.S, "Signature without R or S"),
          e.isPoint(r.R) && (this._R = r.R),
          r.S instanceof p && (this._S = r.S),
          (this._Rencoded = Array.isArray(r.R) ? r.R : r.Rencoded),
          (this._Sencoded = Array.isArray(r.S) ? r.S : r.Sencoded);
      }
      w(Signature, "S", function () {
        return this.eddsa.decodeInt(this.Sencoded());
      }),
        w(Signature, "R", function () {
          return this.eddsa.decodePoint(this.Rencoded());
        }),
        w(Signature, "Rencoded", function () {
          return this.eddsa.encodePoint(this.R());
        }),
        w(Signature, "Sencoded", function () {
          return this.eddsa.encodeInt(this.S());
        }),
        (Signature.prototype.toBytes = function () {
          return this.Rencoded().concat(this.Sencoded());
        }),
        (Signature.prototype.toHex = function () {
          return b.encode(this.toBytes(), "hex").toUpperCase();
        }),
        (e.exports = Signature);
    },
    78256: function (e) {
      e.exports = {
        doubles: {
          step: 4,
          points: [
            [
              "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
              "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821",
            ],
            [
              "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
              "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf",
            ],
            [
              "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
              "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695",
            ],
            [
              "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
              "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9",
            ],
            [
              "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
              "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36",
            ],
            [
              "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
              "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f",
            ],
            [
              "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
              "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999",
            ],
            [
              "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
              "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09",
            ],
            [
              "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
              "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d",
            ],
            [
              "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
              "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088",
            ],
            [
              "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
              "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d",
            ],
            [
              "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
              "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8",
            ],
            [
              "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
              "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a",
            ],
            [
              "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
              "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453",
            ],
            [
              "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
              "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160",
            ],
            [
              "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
              "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0",
            ],
            [
              "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
              "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6",
            ],
            [
              "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
              "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589",
            ],
            [
              "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
              "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17",
            ],
            [
              "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
              "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda",
            ],
            [
              "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
              "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd",
            ],
            [
              "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
              "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2",
            ],
            [
              "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
              "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6",
            ],
            [
              "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
              "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f",
            ],
            [
              "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
              "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01",
            ],
            [
              "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
              "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3",
            ],
            [
              "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
              "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f",
            ],
            [
              "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
              "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7",
            ],
            [
              "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
              "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78",
            ],
            [
              "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
              "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1",
            ],
            [
              "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
              "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150",
            ],
            [
              "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
              "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82",
            ],
            [
              "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
              "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc",
            ],
            [
              "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
              "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b",
            ],
            [
              "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
              "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51",
            ],
            [
              "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
              "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45",
            ],
            [
              "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
              "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120",
            ],
            [
              "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
              "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84",
            ],
            [
              "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
              "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d",
            ],
            [
              "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
              "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d",
            ],
            [
              "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
              "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8",
            ],
            [
              "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
              "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8",
            ],
            [
              "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
              "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac",
            ],
            [
              "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
              "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f",
            ],
            [
              "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
              "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962",
            ],
            [
              "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
              "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907",
            ],
            [
              "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
              "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec",
            ],
            [
              "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
              "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d",
            ],
            [
              "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
              "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414",
            ],
            [
              "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
              "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd",
            ],
            [
              "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
              "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0",
            ],
            [
              "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
              "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811",
            ],
            [
              "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
              "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1",
            ],
            [
              "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
              "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c",
            ],
            [
              "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
              "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73",
            ],
            [
              "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
              "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd",
            ],
            [
              "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
              "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405",
            ],
            [
              "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
              "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589",
            ],
            [
              "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
              "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e",
            ],
            [
              "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
              "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27",
            ],
            [
              "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
              "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1",
            ],
            [
              "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
              "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482",
            ],
            [
              "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
              "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945",
            ],
            [
              "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
              "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573",
            ],
            [
              "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
              "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82",
            ],
          ],
        },
        naf: {
          wnd: 7,
          points: [
            [
              "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
              "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672",
            ],
            [
              "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
              "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6",
            ],
            [
              "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
              "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da",
            ],
            [
              "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
              "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37",
            ],
            [
              "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
              "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b",
            ],
            [
              "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
              "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81",
            ],
            [
              "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
              "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58",
            ],
            [
              "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
              "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77",
            ],
            [
              "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
              "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a",
            ],
            [
              "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
              "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c",
            ],
            [
              "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
              "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67",
            ],
            [
              "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
              "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402",
            ],
            [
              "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
              "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55",
            ],
            [
              "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
              "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482",
            ],
            [
              "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
              "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82",
            ],
            [
              "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
              "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396",
            ],
            [
              "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
              "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49",
            ],
            [
              "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
              "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf",
            ],
            [
              "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
              "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a",
            ],
            [
              "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
              "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7",
            ],
            [
              "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
              "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933",
            ],
            [
              "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
              "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a",
            ],
            [
              "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
              "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6",
            ],
            [
              "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
              "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37",
            ],
            [
              "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
              "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e",
            ],
            [
              "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
              "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6",
            ],
            [
              "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
              "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476",
            ],
            [
              "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
              "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40",
            ],
            [
              "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
              "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61",
            ],
            [
              "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
              "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683",
            ],
            [
              "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
              "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5",
            ],
            [
              "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
              "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b",
            ],
            [
              "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
              "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417",
            ],
            [
              "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
              "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868",
            ],
            [
              "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
              "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a",
            ],
            [
              "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
              "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6",
            ],
            [
              "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
              "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996",
            ],
            [
              "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
              "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e",
            ],
            [
              "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
              "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d",
            ],
            [
              "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
              "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2",
            ],
            [
              "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
              "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e",
            ],
            [
              "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
              "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437",
            ],
            [
              "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
              "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311",
            ],
            [
              "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
              "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4",
            ],
            [
              "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
              "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575",
            ],
            [
              "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
              "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d",
            ],
            [
              "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
              "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d",
            ],
            [
              "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
              "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629",
            ],
            [
              "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
              "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06",
            ],
            [
              "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
              "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374",
            ],
            [
              "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
              "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee",
            ],
            [
              "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
              "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1",
            ],
            [
              "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
              "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b",
            ],
            [
              "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
              "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661",
            ],
            [
              "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
              "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6",
            ],
            [
              "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
              "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e",
            ],
            [
              "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
              "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d",
            ],
            [
              "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
              "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc",
            ],
            [
              "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
              "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4",
            ],
            [
              "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
              "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c",
            ],
            [
              "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
              "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b",
            ],
            [
              "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
              "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913",
            ],
            [
              "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
              "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154",
            ],
            [
              "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
              "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865",
            ],
            [
              "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
              "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc",
            ],
            [
              "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
              "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224",
            ],
            [
              "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
              "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e",
            ],
            [
              "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
              "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6",
            ],
            [
              "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
              "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511",
            ],
            [
              "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
              "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b",
            ],
            [
              "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
              "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2",
            ],
            [
              "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
              "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c",
            ],
            [
              "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
              "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3",
            ],
            [
              "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
              "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d",
            ],
            [
              "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
              "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700",
            ],
            [
              "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
              "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4",
            ],
            [
              "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
              "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196",
            ],
            [
              "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
              "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4",
            ],
            [
              "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
              "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257",
            ],
            [
              "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
              "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13",
            ],
            [
              "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
              "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096",
            ],
            [
              "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
              "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38",
            ],
            [
              "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
              "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f",
            ],
            [
              "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
              "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448",
            ],
            [
              "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
              "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a",
            ],
            [
              "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
              "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4",
            ],
            [
              "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
              "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437",
            ],
            [
              "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
              "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7",
            ],
            [
              "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
              "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d",
            ],
            [
              "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
              "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a",
            ],
            [
              "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
              "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54",
            ],
            [
              "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
              "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77",
            ],
            [
              "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
              "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517",
            ],
            [
              "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
              "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10",
            ],
            [
              "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
              "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125",
            ],
            [
              "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
              "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e",
            ],
            [
              "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
              "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1",
            ],
            [
              "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
              "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2",
            ],
            [
              "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
              "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423",
            ],
            [
              "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
              "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8",
            ],
            [
              "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
              "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758",
            ],
            [
              "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
              "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375",
            ],
            [
              "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
              "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d",
            ],
            [
              "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
              "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec",
            ],
            [
              "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
              "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0",
            ],
            [
              "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
              "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c",
            ],
            [
              "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
              "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4",
            ],
            [
              "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
              "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f",
            ],
            [
              "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
              "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649",
            ],
            [
              "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
              "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826",
            ],
            [
              "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
              "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5",
            ],
            [
              "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
              "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87",
            ],
            [
              "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
              "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b",
            ],
            [
              "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
              "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc",
            ],
            [
              "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
              "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c",
            ],
            [
              "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
              "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f",
            ],
            [
              "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
              "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a",
            ],
            [
              "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
              "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46",
            ],
            [
              "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
              "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f",
            ],
            [
              "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
              "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03",
            ],
            [
              "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
              "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08",
            ],
            [
              "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
              "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8",
            ],
            [
              "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
              "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373",
            ],
            [
              "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
              "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3",
            ],
            [
              "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
              "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8",
            ],
            [
              "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
              "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1",
            ],
            [
              "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
              "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9",
            ],
          ],
        },
      };
    },
    92790: function (e, r, s) {
      "use strict";
      var p = s(44152),
        b = s(79746),
        v = s(34504);
      (r.assert = b),
        (r.toArray = v.toArray),
        (r.zero2 = v.zero2),
        (r.toHex = v.toHex),
        (r.encode = v.encode),
        (r.getNAF = function (e, r, s) {
          var p = Array(Math.max(e.bitLength(), s) + 1);
          for (w = 0; w < p.length; w += 1) p[w] = 0;
          var b = 1 << (r + 1),
            v = e.clone();
          for (w = 0; w < p.length; w++) {
            var w,
              _,
              P = v.andln(b - 1);
            v.isOdd()
              ? ((_ = P > (b >> 1) - 1 ? (b >> 1) - P : P), v.isubn(_))
              : (_ = 0),
              (p[w] = _),
              v.iushrn(1);
          }
          return p;
        }),
        (r.getJSF = function (e, r) {
          var s = [[], []];
          (e = e.clone()), (r = r.clone());
          for (var p = 0, b = 0; e.cmpn(-p) > 0 || r.cmpn(-b) > 0; ) {
            var v,
              w,
              _,
              P = (e.andln(3) + p) & 3,
              S = (r.andln(3) + b) & 3;
            3 === P && (P = -1),
              3 === S && (S = -1),
              (w =
                (1 & P) == 0
                  ? 0
                  : (3 == (v = (e.andln(7) + p) & 7) || 5 === v) && 2 === S
                  ? -P
                  : P),
              s[0].push(w),
              (_ =
                (1 & S) == 0
                  ? 0
                  : (3 == (v = (r.andln(7) + b) & 7) || 5 === v) && 2 === P
                  ? -S
                  : S),
              s[1].push(_),
              2 * p === w + 1 && (p = 1 - p),
              2 * b === _ + 1 && (b = 1 - b),
              e.iushrn(1),
              r.iushrn(1);
          }
          return s;
        }),
        (r.cachedProperty = function (e, r, s) {
          var p = "_" + r;
          e.prototype[r] = function () {
            return void 0 !== this[p] ? this[p] : (this[p] = s.call(this));
          };
        }),
        (r.parseBytes = function (e) {
          return "string" == typeof e ? r.toArray(e, "hex") : e;
        }),
        (r.intFromLE = function (e) {
          return new p(e, "hex", "le");
        });
    },
    44952: function (e, r, s) {
      "use strict";
      s.d(r, {
        iO: function () {
          return p;
        },
      });
      let p = {
        waku: {
          publish: "waku_publish",
          batchPublish: "waku_batchPublish",
          subscribe: "waku_subscribe",
          batchSubscribe: "waku_batchSubscribe",
          subscription: "waku_subscription",
          unsubscribe: "waku_unsubscribe",
          batchUnsubscribe: "waku_batchUnsubscribe",
          batchFetchMessages: "waku_batchFetchMessages",
        },
        irn: {
          publish: "irn_publish",
          batchPublish: "irn_batchPublish",
          subscribe: "irn_subscribe",
          batchSubscribe: "irn_batchSubscribe",
          subscription: "irn_subscription",
          unsubscribe: "irn_unsubscribe",
          batchUnsubscribe: "irn_batchUnsubscribe",
          batchFetchMessages: "irn_batchFetchMessages",
        },
        iridium: {
          publish: "iridium_publish",
          batchPublish: "iridium_batchPublish",
          subscribe: "iridium_subscribe",
          batchSubscribe: "iridium_batchSubscribe",
          subscription: "iridium_subscription",
          unsubscribe: "iridium_unsubscribe",
          batchUnsubscribe: "iridium_batchUnsubscribe",
          batchFetchMessages: "iridium_batchFetchMessages",
        },
      };
    },
    1067: function (e, r, s) {
      !(function (e, r) {
        "use strict";
        function assert(e, r) {
          if (!e) throw Error(r || "Assertion failed");
        }
        function inherits(e, r) {
          e.super_ = r;
          var TempCtor = function () {};
          (TempCtor.prototype = r.prototype),
            (e.prototype = new TempCtor()),
            (e.prototype.constructor = e);
        }
        function BN(e, r, s) {
          if (BN.isBN(e)) return e;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== e &&
              (("le" === r || "be" === r) && ((s = r), (r = 10)),
              this._init(e || 0, r || 10, s || "be"));
        }
        "object" == typeof e ? (e.exports = BN) : (r.BN = BN),
          (BN.BN = BN),
          (BN.wordSize = 26);
        try {
          p =
            "undefined" != typeof window && void 0 !== window.Buffer
              ? window.Buffer
              : s(66688).Buffer;
        } catch (e) {}
        function parseHex4Bits(e, r) {
          var s = e.charCodeAt(r);
          return s >= 65 && s <= 70
            ? s - 55
            : s >= 97 && s <= 102
            ? s - 87
            : (s - 48) & 15;
        }
        function parseHexByte(e, r, s) {
          var p = parseHex4Bits(e, s);
          return s - 1 >= r && (p |= parseHex4Bits(e, s - 1) << 4), p;
        }
        function parseBase(e, r, s, p) {
          for (var b = 0, v = Math.min(e.length, s), w = r; w < v; w++) {
            var _ = e.charCodeAt(w) - 48;
            (b *= p),
              _ >= 49
                ? (b += _ - 49 + 10)
                : _ >= 17
                ? (b += _ - 17 + 10)
                : (b += _);
          }
          return b;
        }
        (BN.isBN = function (e) {
          return (
            e instanceof BN ||
            (null !== e &&
              "object" == typeof e &&
              e.constructor.wordSize === BN.wordSize &&
              Array.isArray(e.words))
          );
        }),
          (BN.max = function (e, r) {
            return e.cmp(r) > 0 ? e : r;
          }),
          (BN.min = function (e, r) {
            return 0 > e.cmp(r) ? e : r;
          }),
          (BN.prototype._init = function (e, r, s) {
            if ("number" == typeof e) return this._initNumber(e, r, s);
            if ("object" == typeof e) return this._initArray(e, r, s);
            "hex" === r && (r = 16), assert(r === (0 | r) && r >= 2 && r <= 36);
            var p = 0;
            "-" === (e = e.toString().replace(/\s+/g, ""))[0] &&
              (p++, (this.negative = 1)),
              p < e.length &&
                (16 === r
                  ? this._parseHex(e, p, s)
                  : (this._parseBase(e, r, p),
                    "le" === s && this._initArray(this.toArray(), r, s)));
          }),
          (BN.prototype._initNumber = function (e, r, s) {
            e < 0 && ((this.negative = 1), (e = -e)),
              e < 67108864
                ? ((this.words = [67108863 & e]), (this.length = 1))
                : e < 4503599627370496
                ? ((this.words = [67108863 & e, (e / 67108864) & 67108863]),
                  (this.length = 2))
                : (assert(e < 9007199254740992),
                  (this.words = [67108863 & e, (e / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === s && this._initArray(this.toArray(), r, s);
          }),
          (BN.prototype._initArray = function (e, r, s) {
            if ((assert("number" == typeof e.length), e.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(e.length / 3)),
              (this.words = Array(this.length));
            for (var p, b, v = 0; v < this.length; v++) this.words[v] = 0;
            var w = 0;
            if ("be" === s)
              for (v = e.length - 1, p = 0; v >= 0; v -= 3)
                (b = e[v] | (e[v - 1] << 8) | (e[v - 2] << 16)),
                  (this.words[p] |= (b << w) & 67108863),
                  (this.words[p + 1] = (b >>> (26 - w)) & 67108863),
                  (w += 24) >= 26 && ((w -= 26), p++);
            else if ("le" === s)
              for (v = 0, p = 0; v < e.length; v += 3)
                (b = e[v] | (e[v + 1] << 8) | (e[v + 2] << 16)),
                  (this.words[p] |= (b << w) & 67108863),
                  (this.words[p + 1] = (b >>> (26 - w)) & 67108863),
                  (w += 24) >= 26 && ((w -= 26), p++);
            return this.strip();
          }),
          (BN.prototype._parseHex = function (e, r, s) {
            (this.length = Math.ceil((e.length - r) / 6)),
              (this.words = Array(this.length));
            for (var p, b = 0; b < this.length; b++) this.words[b] = 0;
            var v = 0,
              w = 0;
            if ("be" === s)
              for (b = e.length - 1; b >= r; b -= 2)
                (p = parseHexByte(e, r, b) << v),
                  (this.words[w] |= 67108863 & p),
                  v >= 18
                    ? ((v -= 18), (w += 1), (this.words[w] |= p >>> 26))
                    : (v += 8);
            else
              for (
                b = (e.length - r) % 2 == 0 ? r + 1 : r;
                b < e.length;
                b += 2
              )
                (p = parseHexByte(e, r, b) << v),
                  (this.words[w] |= 67108863 & p),
                  v >= 18
                    ? ((v -= 18), (w += 1), (this.words[w] |= p >>> 26))
                    : (v += 8);
            this.strip();
          }),
          (BN.prototype._parseBase = function (e, r, s) {
            (this.words = [0]), (this.length = 1);
            for (var p = 0, b = 1; b <= 67108863; b *= r) p++;
            p--, (b = (b / r) | 0);
            for (
              var v = e.length - s,
                w = v % p,
                _ = Math.min(v, v - w) + s,
                P = 0,
                S = s;
              S < _;
              S += p
            )
              (P = parseBase(e, S, S + p, r)),
                this.imuln(b),
                this.words[0] + P < 67108864
                  ? (this.words[0] += P)
                  : this._iaddn(P);
            if (0 !== w) {
              var I = 1;
              for (P = parseBase(e, S, e.length, r), S = 0; S < w; S++) I *= r;
              this.imuln(I),
                this.words[0] + P < 67108864
                  ? (this.words[0] += P)
                  : this._iaddn(P);
            }
            this.strip();
          }),
          (BN.prototype.copy = function (e) {
            e.words = Array(this.length);
            for (var r = 0; r < this.length; r++) e.words[r] = this.words[r];
            (e.length = this.length),
              (e.negative = this.negative),
              (e.red = this.red);
          }),
          (BN.prototype.clone = function () {
            var e = new BN(null);
            return this.copy(e), e;
          }),
          (BN.prototype._expand = function (e) {
            for (; this.length < e; ) this.words[this.length++] = 0;
            return this;
          }),
          (BN.prototype.strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (BN.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          (BN.prototype.inspect = function () {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          });
        var p,
          b = [
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
          v = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          w = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        function smallMulTo(e, r, s) {
          s.negative = r.negative ^ e.negative;
          var p = (e.length + r.length) | 0;
          (s.length = p), (p = (p - 1) | 0);
          var b = 0 | e.words[0],
            v = 0 | r.words[0],
            w = b * v,
            _ = 67108863 & w,
            P = (w / 67108864) | 0;
          s.words[0] = _;
          for (var S = 1; S < p; S++) {
            for (
              var I = P >>> 26,
                A = 67108863 & P,
                R = Math.min(S, r.length - 1),
                C = Math.max(0, S - e.length + 1);
              C <= R;
              C++
            ) {
              var B = (S - C) | 0;
              (I +=
                ((w = (b = 0 | e.words[B]) * (v = 0 | r.words[C]) + A) /
                  67108864) |
                0),
                (A = 67108863 & w);
            }
            (s.words[S] = 0 | A), (P = 0 | I);
          }
          return 0 !== P ? (s.words[S] = 0 | P) : s.length--, s.strip();
        }
        (BN.prototype.toString = function (e, r) {
          if (((r = 0 | r || 1), 16 === (e = e || 10) || "hex" === e)) {
            s = "";
            for (var s, p = 0, _ = 0, P = 0; P < this.length; P++) {
              var S = this.words[P],
                I = (((S << p) | _) & 16777215).toString(16);
              (s =
                0 != (_ = (S >>> (24 - p)) & 16777215) || P !== this.length - 1
                  ? b[6 - I.length] + I + s
                  : I + s),
                (p += 2) >= 26 && ((p -= 26), P--);
            }
            for (0 !== _ && (s = _.toString(16) + s); s.length % r != 0; )
              s = "0" + s;
            return 0 !== this.negative && (s = "-" + s), s;
          }
          if (e === (0 | e) && e >= 2 && e <= 36) {
            var A = v[e],
              R = w[e];
            s = "";
            var C = this.clone();
            for (C.negative = 0; !C.isZero(); ) {
              var B = C.modn(R).toString(e);
              s = (C = C.idivn(R)).isZero() ? B + s : b[A - B.length] + B + s;
            }
            for (this.isZero() && (s = "0" + s); s.length % r != 0; )
              s = "0" + s;
            return 0 !== this.negative && (s = "-" + s), s;
          }
          assert(!1, "Base should be between 2 and 36");
        }),
          (BN.prototype.toNumber = function () {
            var e = this.words[0];
            return (
              2 === this.length
                ? (e += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (e += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  assert(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -e : e
            );
          }),
          (BN.prototype.toJSON = function () {
            return this.toString(16);
          }),
          (BN.prototype.toBuffer = function (e, r) {
            return assert(void 0 !== p), this.toArrayLike(p, e, r);
          }),
          (BN.prototype.toArray = function (e, r) {
            return this.toArrayLike(Array, e, r);
          }),
          (BN.prototype.toArrayLike = function (e, r, s) {
            var p,
              b,
              v = this.byteLength(),
              w = s || Math.max(1, v);
            assert(v <= w, "byte array longer than desired length"),
              assert(w > 0, "Requested array length <= 0"),
              this.strip();
            var _ = new e(w),
              P = this.clone();
            if ("le" === r) {
              for (b = 0; !P.isZero(); b++)
                (p = P.andln(255)), P.iushrn(8), (_[b] = p);
              for (; b < w; b++) _[b] = 0;
            } else {
              for (b = 0; b < w - v; b++) _[b] = 0;
              for (b = 0; !P.isZero(); b++)
                (p = P.andln(255)), P.iushrn(8), (_[w - b - 1] = p);
            }
            return _;
          }),
          Math.clz32
            ? (BN.prototype._countBits = function (e) {
                return 32 - Math.clz32(e);
              })
            : (BN.prototype._countBits = function (e) {
                var r = e,
                  s = 0;
                return (
                  r >= 4096 && ((s += 13), (r >>>= 13)),
                  r >= 64 && ((s += 7), (r >>>= 7)),
                  r >= 8 && ((s += 4), (r >>>= 4)),
                  r >= 2 && ((s += 2), (r >>>= 2)),
                  s + r
                );
              }),
          (BN.prototype._zeroBits = function (e) {
            if (0 === e) return 26;
            var r = e,
              s = 0;
            return (
              (8191 & r) == 0 && ((s += 13), (r >>>= 13)),
              (127 & r) == 0 && ((s += 7), (r >>>= 7)),
              (15 & r) == 0 && ((s += 4), (r >>>= 4)),
              (3 & r) == 0 && ((s += 2), (r >>>= 2)),
              (1 & r) == 0 && s++,
              s
            );
          }),
          (BN.prototype.bitLength = function () {
            var e = this.words[this.length - 1],
              r = this._countBits(e);
            return (this.length - 1) * 26 + r;
          }),
          (BN.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var e = 0, r = 0; r < this.length; r++) {
              var s = this._zeroBits(this.words[r]);
              if (((e += s), 26 !== s)) break;
            }
            return e;
          }),
          (BN.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (BN.prototype.toTwos = function (e) {
            return 0 !== this.negative
              ? this.abs().inotn(e).iaddn(1)
              : this.clone();
          }),
          (BN.prototype.fromTwos = function (e) {
            return this.testn(e - 1)
              ? this.notn(e).iaddn(1).ineg()
              : this.clone();
          }),
          (BN.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (BN.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (BN.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (BN.prototype.iuor = function (e) {
            for (; this.length < e.length; ) this.words[this.length++] = 0;
            for (var r = 0; r < e.length; r++)
              this.words[r] = this.words[r] | e.words[r];
            return this.strip();
          }),
          (BN.prototype.ior = function (e) {
            return assert((this.negative | e.negative) == 0), this.iuor(e);
          }),
          (BN.prototype.or = function (e) {
            return this.length > e.length
              ? this.clone().ior(e)
              : e.clone().ior(this);
          }),
          (BN.prototype.uor = function (e) {
            return this.length > e.length
              ? this.clone().iuor(e)
              : e.clone().iuor(this);
          }),
          (BN.prototype.iuand = function (e) {
            var r;
            r = this.length > e.length ? e : this;
            for (var s = 0; s < r.length; s++)
              this.words[s] = this.words[s] & e.words[s];
            return (this.length = r.length), this.strip();
          }),
          (BN.prototype.iand = function (e) {
            return assert((this.negative | e.negative) == 0), this.iuand(e);
          }),
          (BN.prototype.and = function (e) {
            return this.length > e.length
              ? this.clone().iand(e)
              : e.clone().iand(this);
          }),
          (BN.prototype.uand = function (e) {
            return this.length > e.length
              ? this.clone().iuand(e)
              : e.clone().iuand(this);
          }),
          (BN.prototype.iuxor = function (e) {
            this.length > e.length
              ? ((r = this), (s = e))
              : ((r = e), (s = this));
            for (var r, s, p = 0; p < s.length; p++)
              this.words[p] = r.words[p] ^ s.words[p];
            if (this !== r)
              for (; p < r.length; p++) this.words[p] = r.words[p];
            return (this.length = r.length), this.strip();
          }),
          (BN.prototype.ixor = function (e) {
            return assert((this.negative | e.negative) == 0), this.iuxor(e);
          }),
          (BN.prototype.xor = function (e) {
            return this.length > e.length
              ? this.clone().ixor(e)
              : e.clone().ixor(this);
          }),
          (BN.prototype.uxor = function (e) {
            return this.length > e.length
              ? this.clone().iuxor(e)
              : e.clone().iuxor(this);
          }),
          (BN.prototype.inotn = function (e) {
            assert("number" == typeof e && e >= 0);
            var r = 0 | Math.ceil(e / 26),
              s = e % 26;
            this._expand(r), s > 0 && r--;
            for (var p = 0; p < r; p++)
              this.words[p] = 67108863 & ~this.words[p];
            return (
              s > 0 &&
                (this.words[p] = ~this.words[p] & (67108863 >> (26 - s))),
              this.strip()
            );
          }),
          (BN.prototype.notn = function (e) {
            return this.clone().inotn(e);
          }),
          (BN.prototype.setn = function (e, r) {
            assert("number" == typeof e && e >= 0);
            var s = (e / 26) | 0,
              p = e % 26;
            return (
              this._expand(s + 1),
              r
                ? (this.words[s] = this.words[s] | (1 << p))
                : (this.words[s] = this.words[s] & ~(1 << p)),
              this.strip()
            );
          }),
          (BN.prototype.iadd = function (e) {
            if (0 !== this.negative && 0 === e.negative)
              return (
                (this.negative = 0),
                (r = this.isub(e)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== e.negative)
              return (
                (e.negative = 0),
                (r = this.isub(e)),
                (e.negative = 1),
                r._normSign()
              );
            this.length > e.length
              ? ((s = this), (p = e))
              : ((s = e), (p = this));
            for (var r, s, p, b = 0, v = 0; v < p.length; v++)
              (r = (0 | s.words[v]) + (0 | p.words[v]) + b),
                (this.words[v] = 67108863 & r),
                (b = r >>> 26);
            for (; 0 !== b && v < s.length; v++)
              (r = (0 | s.words[v]) + b),
                (this.words[v] = 67108863 & r),
                (b = r >>> 26);
            if (((this.length = s.length), 0 !== b))
              (this.words[this.length] = b), this.length++;
            else if (s !== this)
              for (; v < s.length; v++) this.words[v] = s.words[v];
            return this;
          }),
          (BN.prototype.add = function (e) {
            var r;
            return 0 !== e.negative && 0 === this.negative
              ? ((e.negative = 0), (r = this.sub(e)), (e.negative ^= 1), r)
              : 0 === e.negative && 0 !== this.negative
              ? ((this.negative = 0), (r = e.sub(this)), (this.negative = 1), r)
              : this.length > e.length
              ? this.clone().iadd(e)
              : e.clone().iadd(this);
          }),
          (BN.prototype.isub = function (e) {
            if (0 !== e.negative) {
              e.negative = 0;
              var r,
                s,
                p = this.iadd(e);
              return (e.negative = 1), p._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(e),
                (this.negative = 1),
                this._normSign()
              );
            var b = this.cmp(e);
            if (0 === b)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            b > 0 ? ((r = this), (s = e)) : ((r = e), (s = this));
            for (var v = 0, w = 0; w < s.length; w++)
              (v = (p = (0 | r.words[w]) - (0 | s.words[w]) + v) >> 26),
                (this.words[w] = 67108863 & p);
            for (; 0 !== v && w < r.length; w++)
              (v = (p = (0 | r.words[w]) + v) >> 26),
                (this.words[w] = 67108863 & p);
            if (0 === v && w < r.length && r !== this)
              for (; w < r.length; w++) this.words[w] = r.words[w];
            return (
              (this.length = Math.max(this.length, w)),
              r !== this && (this.negative = 1),
              this.strip()
            );
          }),
          (BN.prototype.sub = function (e) {
            return this.clone().isub(e);
          });
        var comb10MulTo = function (e, r, s) {
          var p,
            b,
            v,
            w = e.words,
            _ = r.words,
            P = s.words,
            S = 0,
            I = 0 | w[0],
            A = 8191 & I,
            R = I >>> 13,
            C = 0 | w[1],
            B = 8191 & C,
            j = C >>> 13,
            V = 0 | w[2],
            J = 8191 & V,
            W = V >>> 13,
            X = 0 | w[3],
            et = 8191 & X,
            es = X >>> 13,
            eo = 0 | w[4],
            ec = 8191 & eo,
            ed = eo >>> 13,
            eh = 0 | w[5],
            ef = 8191 & eh,
            el = eh >>> 13,
            ep = 0 | w[6],
            eb = 8191 & ep,
            eg = ep >>> 13,
            em = 0 | w[7],
            ev = 8191 & em,
            ey = em >>> 13,
            ew = 0 | w[8],
            e_ = 8191 & ew,
            eM = ew >>> 13,
            eP = 0 | w[9],
            eS = 8191 & eP,
            eI = eP >>> 13,
            eE = 0 | _[0],
            ex = 8191 & eE,
            eA = eE >>> 13,
            eN = 0 | _[1],
            eR = 8191 & eN,
            eC = eN >>> 13,
            eq = 0 | _[2],
            eT = 8191 & eq,
            eB = eq >>> 13,
            eO = 0 | _[3],
            ek = 8191 & eO,
            eD = eO >>> 13,
            ez = 0 | _[4],
            eL = 8191 & ez,
            ej = ez >>> 13,
            e$ = 0 | _[5],
            eF = 8191 & e$,
            eK = e$ >>> 13,
            eH = 0 | _[6],
            eU = 8191 & eH,
            eV = eH >>> 13,
            eJ = 0 | _[7],
            eG = 8191 & eJ,
            eY = eJ >>> 13,
            eW = 0 | _[8],
            eZ = 8191 & eW,
            eQ = eW >>> 13,
            eX = 0 | _[9],
            e0 = 8191 & eX,
            e1 = eX >>> 13;
          (s.negative = e.negative ^ r.negative), (s.length = 19);
          var e6 =
            (((S + (p = Math.imul(A, ex))) | 0) +
              ((8191 & (b = ((b = Math.imul(A, eA)) + Math.imul(R, ex)) | 0)) <<
                13)) |
            0;
          (S = ((((v = Math.imul(R, eA)) + (b >>> 13)) | 0) + (e6 >>> 26)) | 0),
            (e6 &= 67108863),
            (p = Math.imul(B, ex)),
            (b = ((b = Math.imul(B, eA)) + Math.imul(j, ex)) | 0),
            (v = Math.imul(j, eA));
          var e2 =
            (((S + (p = (p + Math.imul(A, eR)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(A, eC)) | 0) + Math.imul(R, eR)) | 0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(R, eC)) | 0) + (b >>> 13)) | 0) +
              (e2 >>> 26)) |
            0),
            (e2 &= 67108863),
            (p = Math.imul(J, ex)),
            (b = ((b = Math.imul(J, eA)) + Math.imul(W, ex)) | 0),
            (v = Math.imul(W, eA)),
            (p = (p + Math.imul(B, eR)) | 0),
            (b = ((b = (b + Math.imul(B, eC)) | 0) + Math.imul(j, eR)) | 0),
            (v = (v + Math.imul(j, eC)) | 0);
          var e8 =
            (((S + (p = (p + Math.imul(A, eT)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(A, eB)) | 0) + Math.imul(R, eT)) | 0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(R, eB)) | 0) + (b >>> 13)) | 0) +
              (e8 >>> 26)) |
            0),
            (e8 &= 67108863),
            (p = Math.imul(et, ex)),
            (b = ((b = Math.imul(et, eA)) + Math.imul(es, ex)) | 0),
            (v = Math.imul(es, eA)),
            (p = (p + Math.imul(J, eR)) | 0),
            (b = ((b = (b + Math.imul(J, eC)) | 0) + Math.imul(W, eR)) | 0),
            (v = (v + Math.imul(W, eC)) | 0),
            (p = (p + Math.imul(B, eT)) | 0),
            (b = ((b = (b + Math.imul(B, eB)) | 0) + Math.imul(j, eT)) | 0),
            (v = (v + Math.imul(j, eB)) | 0);
          var e3 =
            (((S + (p = (p + Math.imul(A, ek)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(A, eD)) | 0) + Math.imul(R, ek)) | 0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(R, eD)) | 0) + (b >>> 13)) | 0) +
              (e3 >>> 26)) |
            0),
            (e3 &= 67108863),
            (p = Math.imul(ec, ex)),
            (b = ((b = Math.imul(ec, eA)) + Math.imul(ed, ex)) | 0),
            (v = Math.imul(ed, eA)),
            (p = (p + Math.imul(et, eR)) | 0),
            (b = ((b = (b + Math.imul(et, eC)) | 0) + Math.imul(es, eR)) | 0),
            (v = (v + Math.imul(es, eC)) | 0),
            (p = (p + Math.imul(J, eT)) | 0),
            (b = ((b = (b + Math.imul(J, eB)) | 0) + Math.imul(W, eT)) | 0),
            (v = (v + Math.imul(W, eB)) | 0),
            (p = (p + Math.imul(B, ek)) | 0),
            (b = ((b = (b + Math.imul(B, eD)) | 0) + Math.imul(j, ek)) | 0),
            (v = (v + Math.imul(j, eD)) | 0);
          var e4 =
            (((S + (p = (p + Math.imul(A, eL)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(A, ej)) | 0) + Math.imul(R, eL)) | 0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(R, ej)) | 0) + (b >>> 13)) | 0) +
              (e4 >>> 26)) |
            0),
            (e4 &= 67108863),
            (p = Math.imul(ef, ex)),
            (b = ((b = Math.imul(ef, eA)) + Math.imul(el, ex)) | 0),
            (v = Math.imul(el, eA)),
            (p = (p + Math.imul(ec, eR)) | 0),
            (b = ((b = (b + Math.imul(ec, eC)) | 0) + Math.imul(ed, eR)) | 0),
            (v = (v + Math.imul(ed, eC)) | 0),
            (p = (p + Math.imul(et, eT)) | 0),
            (b = ((b = (b + Math.imul(et, eB)) | 0) + Math.imul(es, eT)) | 0),
            (v = (v + Math.imul(es, eB)) | 0),
            (p = (p + Math.imul(J, ek)) | 0),
            (b = ((b = (b + Math.imul(J, eD)) | 0) + Math.imul(W, ek)) | 0),
            (v = (v + Math.imul(W, eD)) | 0),
            (p = (p + Math.imul(B, eL)) | 0),
            (b = ((b = (b + Math.imul(B, ej)) | 0) + Math.imul(j, eL)) | 0),
            (v = (v + Math.imul(j, ej)) | 0);
          var e9 =
            (((S + (p = (p + Math.imul(A, eF)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(A, eK)) | 0) + Math.imul(R, eF)) | 0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(R, eK)) | 0) + (b >>> 13)) | 0) +
              (e9 >>> 26)) |
            0),
            (e9 &= 67108863),
            (p = Math.imul(eb, ex)),
            (b = ((b = Math.imul(eb, eA)) + Math.imul(eg, ex)) | 0),
            (v = Math.imul(eg, eA)),
            (p = (p + Math.imul(ef, eR)) | 0),
            (b = ((b = (b + Math.imul(ef, eC)) | 0) + Math.imul(el, eR)) | 0),
            (v = (v + Math.imul(el, eC)) | 0),
            (p = (p + Math.imul(ec, eT)) | 0),
            (b = ((b = (b + Math.imul(ec, eB)) | 0) + Math.imul(ed, eT)) | 0),
            (v = (v + Math.imul(ed, eB)) | 0),
            (p = (p + Math.imul(et, ek)) | 0),
            (b = ((b = (b + Math.imul(et, eD)) | 0) + Math.imul(es, ek)) | 0),
            (v = (v + Math.imul(es, eD)) | 0),
            (p = (p + Math.imul(J, eL)) | 0),
            (b = ((b = (b + Math.imul(J, ej)) | 0) + Math.imul(W, eL)) | 0),
            (v = (v + Math.imul(W, ej)) | 0),
            (p = (p + Math.imul(B, eF)) | 0),
            (b = ((b = (b + Math.imul(B, eK)) | 0) + Math.imul(j, eF)) | 0),
            (v = (v + Math.imul(j, eK)) | 0);
          var e7 =
            (((S + (p = (p + Math.imul(A, eU)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(A, eV)) | 0) + Math.imul(R, eU)) | 0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(R, eV)) | 0) + (b >>> 13)) | 0) +
              (e7 >>> 26)) |
            0),
            (e7 &= 67108863),
            (p = Math.imul(ev, ex)),
            (b = ((b = Math.imul(ev, eA)) + Math.imul(ey, ex)) | 0),
            (v = Math.imul(ey, eA)),
            (p = (p + Math.imul(eb, eR)) | 0),
            (b = ((b = (b + Math.imul(eb, eC)) | 0) + Math.imul(eg, eR)) | 0),
            (v = (v + Math.imul(eg, eC)) | 0),
            (p = (p + Math.imul(ef, eT)) | 0),
            (b = ((b = (b + Math.imul(ef, eB)) | 0) + Math.imul(el, eT)) | 0),
            (v = (v + Math.imul(el, eB)) | 0),
            (p = (p + Math.imul(ec, ek)) | 0),
            (b = ((b = (b + Math.imul(ec, eD)) | 0) + Math.imul(ed, ek)) | 0),
            (v = (v + Math.imul(ed, eD)) | 0),
            (p = (p + Math.imul(et, eL)) | 0),
            (b = ((b = (b + Math.imul(et, ej)) | 0) + Math.imul(es, eL)) | 0),
            (v = (v + Math.imul(es, ej)) | 0),
            (p = (p + Math.imul(J, eF)) | 0),
            (b = ((b = (b + Math.imul(J, eK)) | 0) + Math.imul(W, eF)) | 0),
            (v = (v + Math.imul(W, eK)) | 0),
            (p = (p + Math.imul(B, eU)) | 0),
            (b = ((b = (b + Math.imul(B, eV)) | 0) + Math.imul(j, eU)) | 0),
            (v = (v + Math.imul(j, eV)) | 0);
          var e5 =
            (((S + (p = (p + Math.imul(A, eG)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(A, eY)) | 0) + Math.imul(R, eG)) | 0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(R, eY)) | 0) + (b >>> 13)) | 0) +
              (e5 >>> 26)) |
            0),
            (e5 &= 67108863),
            (p = Math.imul(e_, ex)),
            (b = ((b = Math.imul(e_, eA)) + Math.imul(eM, ex)) | 0),
            (v = Math.imul(eM, eA)),
            (p = (p + Math.imul(ev, eR)) | 0),
            (b = ((b = (b + Math.imul(ev, eC)) | 0) + Math.imul(ey, eR)) | 0),
            (v = (v + Math.imul(ey, eC)) | 0),
            (p = (p + Math.imul(eb, eT)) | 0),
            (b = ((b = (b + Math.imul(eb, eB)) | 0) + Math.imul(eg, eT)) | 0),
            (v = (v + Math.imul(eg, eB)) | 0),
            (p = (p + Math.imul(ef, ek)) | 0),
            (b = ((b = (b + Math.imul(ef, eD)) | 0) + Math.imul(el, ek)) | 0),
            (v = (v + Math.imul(el, eD)) | 0),
            (p = (p + Math.imul(ec, eL)) | 0),
            (b = ((b = (b + Math.imul(ec, ej)) | 0) + Math.imul(ed, eL)) | 0),
            (v = (v + Math.imul(ed, ej)) | 0),
            (p = (p + Math.imul(et, eF)) | 0),
            (b = ((b = (b + Math.imul(et, eK)) | 0) + Math.imul(es, eF)) | 0),
            (v = (v + Math.imul(es, eK)) | 0),
            (p = (p + Math.imul(J, eU)) | 0),
            (b = ((b = (b + Math.imul(J, eV)) | 0) + Math.imul(W, eU)) | 0),
            (v = (v + Math.imul(W, eV)) | 0),
            (p = (p + Math.imul(B, eG)) | 0),
            (b = ((b = (b + Math.imul(B, eY)) | 0) + Math.imul(j, eG)) | 0),
            (v = (v + Math.imul(j, eY)) | 0);
          var ts =
            (((S + (p = (p + Math.imul(A, eZ)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(A, eQ)) | 0) + Math.imul(R, eZ)) | 0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(R, eQ)) | 0) + (b >>> 13)) | 0) +
              (ts >>> 26)) |
            0),
            (ts &= 67108863),
            (p = Math.imul(eS, ex)),
            (b = ((b = Math.imul(eS, eA)) + Math.imul(eI, ex)) | 0),
            (v = Math.imul(eI, eA)),
            (p = (p + Math.imul(e_, eR)) | 0),
            (b = ((b = (b + Math.imul(e_, eC)) | 0) + Math.imul(eM, eR)) | 0),
            (v = (v + Math.imul(eM, eC)) | 0),
            (p = (p + Math.imul(ev, eT)) | 0),
            (b = ((b = (b + Math.imul(ev, eB)) | 0) + Math.imul(ey, eT)) | 0),
            (v = (v + Math.imul(ey, eB)) | 0),
            (p = (p + Math.imul(eb, ek)) | 0),
            (b = ((b = (b + Math.imul(eb, eD)) | 0) + Math.imul(eg, ek)) | 0),
            (v = (v + Math.imul(eg, eD)) | 0),
            (p = (p + Math.imul(ef, eL)) | 0),
            (b = ((b = (b + Math.imul(ef, ej)) | 0) + Math.imul(el, eL)) | 0),
            (v = (v + Math.imul(el, ej)) | 0),
            (p = (p + Math.imul(ec, eF)) | 0),
            (b = ((b = (b + Math.imul(ec, eK)) | 0) + Math.imul(ed, eF)) | 0),
            (v = (v + Math.imul(ed, eK)) | 0),
            (p = (p + Math.imul(et, eU)) | 0),
            (b = ((b = (b + Math.imul(et, eV)) | 0) + Math.imul(es, eU)) | 0),
            (v = (v + Math.imul(es, eV)) | 0),
            (p = (p + Math.imul(J, eG)) | 0),
            (b = ((b = (b + Math.imul(J, eY)) | 0) + Math.imul(W, eG)) | 0),
            (v = (v + Math.imul(W, eY)) | 0),
            (p = (p + Math.imul(B, eZ)) | 0),
            (b = ((b = (b + Math.imul(B, eQ)) | 0) + Math.imul(j, eZ)) | 0),
            (v = (v + Math.imul(j, eQ)) | 0);
          var to =
            (((S + (p = (p + Math.imul(A, e0)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(A, e1)) | 0) + Math.imul(R, e0)) | 0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(R, e1)) | 0) + (b >>> 13)) | 0) +
              (to >>> 26)) |
            0),
            (to &= 67108863),
            (p = Math.imul(eS, eR)),
            (b = ((b = Math.imul(eS, eC)) + Math.imul(eI, eR)) | 0),
            (v = Math.imul(eI, eC)),
            (p = (p + Math.imul(e_, eT)) | 0),
            (b = ((b = (b + Math.imul(e_, eB)) | 0) + Math.imul(eM, eT)) | 0),
            (v = (v + Math.imul(eM, eB)) | 0),
            (p = (p + Math.imul(ev, ek)) | 0),
            (b = ((b = (b + Math.imul(ev, eD)) | 0) + Math.imul(ey, ek)) | 0),
            (v = (v + Math.imul(ey, eD)) | 0),
            (p = (p + Math.imul(eb, eL)) | 0),
            (b = ((b = (b + Math.imul(eb, ej)) | 0) + Math.imul(eg, eL)) | 0),
            (v = (v + Math.imul(eg, ej)) | 0),
            (p = (p + Math.imul(ef, eF)) | 0),
            (b = ((b = (b + Math.imul(ef, eK)) | 0) + Math.imul(el, eF)) | 0),
            (v = (v + Math.imul(el, eK)) | 0),
            (p = (p + Math.imul(ec, eU)) | 0),
            (b = ((b = (b + Math.imul(ec, eV)) | 0) + Math.imul(ed, eU)) | 0),
            (v = (v + Math.imul(ed, eV)) | 0),
            (p = (p + Math.imul(et, eG)) | 0),
            (b = ((b = (b + Math.imul(et, eY)) | 0) + Math.imul(es, eG)) | 0),
            (v = (v + Math.imul(es, eY)) | 0),
            (p = (p + Math.imul(J, eZ)) | 0),
            (b = ((b = (b + Math.imul(J, eQ)) | 0) + Math.imul(W, eZ)) | 0),
            (v = (v + Math.imul(W, eQ)) | 0);
          var tc =
            (((S + (p = (p + Math.imul(B, e0)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(B, e1)) | 0) + Math.imul(j, e0)) | 0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(j, e1)) | 0) + (b >>> 13)) | 0) +
              (tc >>> 26)) |
            0),
            (tc &= 67108863),
            (p = Math.imul(eS, eT)),
            (b = ((b = Math.imul(eS, eB)) + Math.imul(eI, eT)) | 0),
            (v = Math.imul(eI, eB)),
            (p = (p + Math.imul(e_, ek)) | 0),
            (b = ((b = (b + Math.imul(e_, eD)) | 0) + Math.imul(eM, ek)) | 0),
            (v = (v + Math.imul(eM, eD)) | 0),
            (p = (p + Math.imul(ev, eL)) | 0),
            (b = ((b = (b + Math.imul(ev, ej)) | 0) + Math.imul(ey, eL)) | 0),
            (v = (v + Math.imul(ey, ej)) | 0),
            (p = (p + Math.imul(eb, eF)) | 0),
            (b = ((b = (b + Math.imul(eb, eK)) | 0) + Math.imul(eg, eF)) | 0),
            (v = (v + Math.imul(eg, eK)) | 0),
            (p = (p + Math.imul(ef, eU)) | 0),
            (b = ((b = (b + Math.imul(ef, eV)) | 0) + Math.imul(el, eU)) | 0),
            (v = (v + Math.imul(el, eV)) | 0),
            (p = (p + Math.imul(ec, eG)) | 0),
            (b = ((b = (b + Math.imul(ec, eY)) | 0) + Math.imul(ed, eG)) | 0),
            (v = (v + Math.imul(ed, eY)) | 0),
            (p = (p + Math.imul(et, eZ)) | 0),
            (b = ((b = (b + Math.imul(et, eQ)) | 0) + Math.imul(es, eZ)) | 0),
            (v = (v + Math.imul(es, eQ)) | 0);
          var td =
            (((S + (p = (p + Math.imul(J, e0)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(J, e1)) | 0) + Math.imul(W, e0)) | 0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(W, e1)) | 0) + (b >>> 13)) | 0) +
              (td >>> 26)) |
            0),
            (td &= 67108863),
            (p = Math.imul(eS, ek)),
            (b = ((b = Math.imul(eS, eD)) + Math.imul(eI, ek)) | 0),
            (v = Math.imul(eI, eD)),
            (p = (p + Math.imul(e_, eL)) | 0),
            (b = ((b = (b + Math.imul(e_, ej)) | 0) + Math.imul(eM, eL)) | 0),
            (v = (v + Math.imul(eM, ej)) | 0),
            (p = (p + Math.imul(ev, eF)) | 0),
            (b = ((b = (b + Math.imul(ev, eK)) | 0) + Math.imul(ey, eF)) | 0),
            (v = (v + Math.imul(ey, eK)) | 0),
            (p = (p + Math.imul(eb, eU)) | 0),
            (b = ((b = (b + Math.imul(eb, eV)) | 0) + Math.imul(eg, eU)) | 0),
            (v = (v + Math.imul(eg, eV)) | 0),
            (p = (p + Math.imul(ef, eG)) | 0),
            (b = ((b = (b + Math.imul(ef, eY)) | 0) + Math.imul(el, eG)) | 0),
            (v = (v + Math.imul(el, eY)) | 0),
            (p = (p + Math.imul(ec, eZ)) | 0),
            (b = ((b = (b + Math.imul(ec, eQ)) | 0) + Math.imul(ed, eZ)) | 0),
            (v = (v + Math.imul(ed, eQ)) | 0);
          var th =
            (((S + (p = (p + Math.imul(et, e0)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(et, e1)) | 0) + Math.imul(es, e0)) |
                  0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(es, e1)) | 0) + (b >>> 13)) | 0) +
              (th >>> 26)) |
            0),
            (th &= 67108863),
            (p = Math.imul(eS, eL)),
            (b = ((b = Math.imul(eS, ej)) + Math.imul(eI, eL)) | 0),
            (v = Math.imul(eI, ej)),
            (p = (p + Math.imul(e_, eF)) | 0),
            (b = ((b = (b + Math.imul(e_, eK)) | 0) + Math.imul(eM, eF)) | 0),
            (v = (v + Math.imul(eM, eK)) | 0),
            (p = (p + Math.imul(ev, eU)) | 0),
            (b = ((b = (b + Math.imul(ev, eV)) | 0) + Math.imul(ey, eU)) | 0),
            (v = (v + Math.imul(ey, eV)) | 0),
            (p = (p + Math.imul(eb, eG)) | 0),
            (b = ((b = (b + Math.imul(eb, eY)) | 0) + Math.imul(eg, eG)) | 0),
            (v = (v + Math.imul(eg, eY)) | 0),
            (p = (p + Math.imul(ef, eZ)) | 0),
            (b = ((b = (b + Math.imul(ef, eQ)) | 0) + Math.imul(el, eZ)) | 0),
            (v = (v + Math.imul(el, eQ)) | 0);
          var tf =
            (((S + (p = (p + Math.imul(ec, e0)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(ec, e1)) | 0) + Math.imul(ed, e0)) |
                  0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(ed, e1)) | 0) + (b >>> 13)) | 0) +
              (tf >>> 26)) |
            0),
            (tf &= 67108863),
            (p = Math.imul(eS, eF)),
            (b = ((b = Math.imul(eS, eK)) + Math.imul(eI, eF)) | 0),
            (v = Math.imul(eI, eK)),
            (p = (p + Math.imul(e_, eU)) | 0),
            (b = ((b = (b + Math.imul(e_, eV)) | 0) + Math.imul(eM, eU)) | 0),
            (v = (v + Math.imul(eM, eV)) | 0),
            (p = (p + Math.imul(ev, eG)) | 0),
            (b = ((b = (b + Math.imul(ev, eY)) | 0) + Math.imul(ey, eG)) | 0),
            (v = (v + Math.imul(ey, eY)) | 0),
            (p = (p + Math.imul(eb, eZ)) | 0),
            (b = ((b = (b + Math.imul(eb, eQ)) | 0) + Math.imul(eg, eZ)) | 0),
            (v = (v + Math.imul(eg, eQ)) | 0);
          var tl =
            (((S + (p = (p + Math.imul(ef, e0)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(ef, e1)) | 0) + Math.imul(el, e0)) |
                  0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(el, e1)) | 0) + (b >>> 13)) | 0) +
              (tl >>> 26)) |
            0),
            (tl &= 67108863),
            (p = Math.imul(eS, eU)),
            (b = ((b = Math.imul(eS, eV)) + Math.imul(eI, eU)) | 0),
            (v = Math.imul(eI, eV)),
            (p = (p + Math.imul(e_, eG)) | 0),
            (b = ((b = (b + Math.imul(e_, eY)) | 0) + Math.imul(eM, eG)) | 0),
            (v = (v + Math.imul(eM, eY)) | 0),
            (p = (p + Math.imul(ev, eZ)) | 0),
            (b = ((b = (b + Math.imul(ev, eQ)) | 0) + Math.imul(ey, eZ)) | 0),
            (v = (v + Math.imul(ey, eQ)) | 0);
          var tp =
            (((S + (p = (p + Math.imul(eb, e0)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(eb, e1)) | 0) + Math.imul(eg, e0)) |
                  0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(eg, e1)) | 0) + (b >>> 13)) | 0) +
              (tp >>> 26)) |
            0),
            (tp &= 67108863),
            (p = Math.imul(eS, eG)),
            (b = ((b = Math.imul(eS, eY)) + Math.imul(eI, eG)) | 0),
            (v = Math.imul(eI, eY)),
            (p = (p + Math.imul(e_, eZ)) | 0),
            (b = ((b = (b + Math.imul(e_, eQ)) | 0) + Math.imul(eM, eZ)) | 0),
            (v = (v + Math.imul(eM, eQ)) | 0);
          var tb =
            (((S + (p = (p + Math.imul(ev, e0)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(ev, e1)) | 0) + Math.imul(ey, e0)) |
                  0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(ey, e1)) | 0) + (b >>> 13)) | 0) +
              (tb >>> 26)) |
            0),
            (tb &= 67108863),
            (p = Math.imul(eS, eZ)),
            (b = ((b = Math.imul(eS, eQ)) + Math.imul(eI, eZ)) | 0),
            (v = Math.imul(eI, eQ));
          var tg =
            (((S + (p = (p + Math.imul(e_, e0)) | 0)) | 0) +
              ((8191 &
                (b =
                  ((b = (b + Math.imul(e_, e1)) | 0) + Math.imul(eM, e0)) |
                  0)) <<
                13)) |
            0;
          (S =
            ((((v = (v + Math.imul(eM, e1)) | 0) + (b >>> 13)) | 0) +
              (tg >>> 26)) |
            0),
            (tg &= 67108863);
          var tm =
            (((S + (p = Math.imul(eS, e0))) | 0) +
              ((8191 &
                (b = ((b = Math.imul(eS, e1)) + Math.imul(eI, e0)) | 0)) <<
                13)) |
            0;
          return (
            (S =
              ((((v = Math.imul(eI, e1)) + (b >>> 13)) | 0) + (tm >>> 26)) | 0),
            (tm &= 67108863),
            (P[0] = e6),
            (P[1] = e2),
            (P[2] = e8),
            (P[3] = e3),
            (P[4] = e4),
            (P[5] = e9),
            (P[6] = e7),
            (P[7] = e5),
            (P[8] = ts),
            (P[9] = to),
            (P[10] = tc),
            (P[11] = td),
            (P[12] = th),
            (P[13] = tf),
            (P[14] = tl),
            (P[15] = tp),
            (P[16] = tb),
            (P[17] = tg),
            (P[18] = tm),
            0 !== S && ((P[19] = S), s.length++),
            s
          );
        };
        function jumboMulTo(e, r, s) {
          return new FFTM().mulp(e, r, s);
        }
        function FFTM(e, r) {
          (this.x = e), (this.y = r);
        }
        Math.imul || (comb10MulTo = smallMulTo),
          (BN.prototype.mulTo = function (e, r) {
            var s = this.length + e.length;
            return 10 === this.length && 10 === e.length
              ? comb10MulTo(this, e, r)
              : s < 63
              ? smallMulTo(this, e, r)
              : s < 1024
              ? (function (e, r, s) {
                  (s.negative = r.negative ^ e.negative),
                    (s.length = e.length + r.length);
                  for (var p = 0, b = 0, v = 0; v < s.length - 1; v++) {
                    var w = b;
                    b = 0;
                    for (
                      var _ = 67108863 & p,
                        P = Math.min(v, r.length - 1),
                        S = Math.max(0, v - e.length + 1);
                      S <= P;
                      S++
                    ) {
                      var I = v - S,
                        A = (0 | e.words[I]) * (0 | r.words[S]),
                        R = 67108863 & A;
                      (w = (w + ((A / 67108864) | 0)) | 0),
                        (_ = 67108863 & (R = (R + _) | 0)),
                        (b += (w = (w + (R >>> 26)) | 0) >>> 26),
                        (w &= 67108863);
                    }
                    (s.words[v] = _), (p = w), (w = b);
                  }
                  return 0 !== p ? (s.words[v] = p) : s.length--, s.strip();
                })(this, e, r)
              : jumboMulTo(this, e, r);
          }),
          (FFTM.prototype.makeRBT = function (e) {
            for (
              var r = Array(e), s = BN.prototype._countBits(e) - 1, p = 0;
              p < e;
              p++
            )
              r[p] = this.revBin(p, s, e);
            return r;
          }),
          (FFTM.prototype.revBin = function (e, r, s) {
            if (0 === e || e === s - 1) return e;
            for (var p = 0, b = 0; b < r; b++)
              (p |= (1 & e) << (r - b - 1)), (e >>= 1);
            return p;
          }),
          (FFTM.prototype.permute = function (e, r, s, p, b, v) {
            for (var w = 0; w < v; w++) (p[w] = r[e[w]]), (b[w] = s[e[w]]);
          }),
          (FFTM.prototype.transform = function (e, r, s, p, b, v) {
            this.permute(v, e, r, s, p, b);
            for (var w = 1; w < b; w <<= 1)
              for (
                var _ = w << 1,
                  P = Math.cos((2 * Math.PI) / _),
                  S = Math.sin((2 * Math.PI) / _),
                  I = 0;
                I < b;
                I += _
              )
                for (var A = P, R = S, C = 0; C < w; C++) {
                  var B = s[I + C],
                    j = p[I + C],
                    V = s[I + C + w],
                    J = p[I + C + w],
                    W = A * V - R * J;
                  (J = A * J + R * V),
                    (V = W),
                    (s[I + C] = B + V),
                    (p[I + C] = j + J),
                    (s[I + C + w] = B - V),
                    (p[I + C + w] = j - J),
                    C !== _ &&
                      ((W = P * A - S * R), (R = P * R + S * A), (A = W));
                }
          }),
          (FFTM.prototype.guessLen13b = function (e, r) {
            var s = 1 | Math.max(r, e),
              p = 1 & s,
              b = 0;
            for (s = (s / 2) | 0; s; s >>>= 1) b++;
            return 1 << (b + 1 + p);
          }),
          (FFTM.prototype.conjugate = function (e, r, s) {
            if (!(s <= 1))
              for (var p = 0; p < s / 2; p++) {
                var b = e[p];
                (e[p] = e[s - p - 1]),
                  (e[s - p - 1] = b),
                  (b = r[p]),
                  (r[p] = -r[s - p - 1]),
                  (r[s - p - 1] = -b);
              }
          }),
          (FFTM.prototype.normalize13b = function (e, r) {
            for (var s = 0, p = 0; p < r / 2; p++) {
              var b =
                8192 * Math.round(e[2 * p + 1] / r) +
                Math.round(e[2 * p] / r) +
                s;
              (e[p] = 67108863 & b),
                (s = b < 67108864 ? 0 : (b / 67108864) | 0);
            }
            return e;
          }),
          (FFTM.prototype.convert13b = function (e, r, s, p) {
            for (var b = 0, v = 0; v < r; v++)
              (b += 0 | e[v]),
                (s[2 * v] = 8191 & b),
                (b >>>= 13),
                (s[2 * v + 1] = 8191 & b),
                (b >>>= 13);
            for (v = 2 * r; v < p; ++v) s[v] = 0;
            assert(0 === b), assert((-8192 & b) == 0);
          }),
          (FFTM.prototype.stub = function (e) {
            for (var r = Array(e), s = 0; s < e; s++) r[s] = 0;
            return r;
          }),
          (FFTM.prototype.mulp = function (e, r, s) {
            var p = 2 * this.guessLen13b(e.length, r.length),
              b = this.makeRBT(p),
              v = this.stub(p),
              w = Array(p),
              _ = Array(p),
              P = Array(p),
              S = Array(p),
              I = Array(p),
              A = Array(p),
              R = s.words;
            (R.length = p),
              this.convert13b(e.words, e.length, w, p),
              this.convert13b(r.words, r.length, S, p),
              this.transform(w, v, _, P, p, b),
              this.transform(S, v, I, A, p, b);
            for (var C = 0; C < p; C++) {
              var B = _[C] * I[C] - P[C] * A[C];
              (P[C] = _[C] * A[C] + P[C] * I[C]), (_[C] = B);
            }
            return (
              this.conjugate(_, P, p),
              this.transform(_, P, R, v, p, b),
              this.conjugate(R, v, p),
              this.normalize13b(R, p),
              (s.negative = e.negative ^ r.negative),
              (s.length = e.length + r.length),
              s.strip()
            );
          }),
          (BN.prototype.mul = function (e) {
            var r = new BN(null);
            return (r.words = Array(this.length + e.length)), this.mulTo(e, r);
          }),
          (BN.prototype.mulf = function (e) {
            var r = new BN(null);
            return (
              (r.words = Array(this.length + e.length)), jumboMulTo(this, e, r)
            );
          }),
          (BN.prototype.imul = function (e) {
            return this.clone().mulTo(e, this);
          }),
          (BN.prototype.imuln = function (e) {
            assert("number" == typeof e), assert(e < 67108864);
            for (var r = 0, s = 0; s < this.length; s++) {
              var p = (0 | this.words[s]) * e,
                b = (67108863 & p) + (67108863 & r);
              (r >>= 26),
                (r += ((p / 67108864) | 0) + (b >>> 26)),
                (this.words[s] = 67108863 & b);
            }
            return 0 !== r && ((this.words[s] = r), this.length++), this;
          }),
          (BN.prototype.muln = function (e) {
            return this.clone().imuln(e);
          }),
          (BN.prototype.sqr = function () {
            return this.mul(this);
          }),
          (BN.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (BN.prototype.pow = function (e) {
            var r = (function (e) {
              for (var r = Array(e.bitLength()), s = 0; s < r.length; s++) {
                var p = (s / 26) | 0,
                  b = s % 26;
                r[s] = (e.words[p] & (1 << b)) >>> b;
              }
              return r;
            })(e);
            if (0 === r.length) return new BN(1);
            for (
              var s = this, p = 0;
              p < r.length && 0 === r[p];
              p++, s = s.sqr()
            );
            if (++p < r.length)
              for (var b = s.sqr(); p < r.length; p++, b = b.sqr())
                0 !== r[p] && (s = s.mul(b));
            return s;
          }),
          (BN.prototype.iushln = function (e) {
            assert("number" == typeof e && e >= 0);
            var r,
              s = e % 26,
              p = (e - s) / 26,
              b = (67108863 >>> (26 - s)) << (26 - s);
            if (0 !== s) {
              var v = 0;
              for (r = 0; r < this.length; r++) {
                var w = this.words[r] & b,
                  _ = ((0 | this.words[r]) - w) << s;
                (this.words[r] = _ | v), (v = w >>> (26 - s));
              }
              v && ((this.words[r] = v), this.length++);
            }
            if (0 !== p) {
              for (r = this.length - 1; r >= 0; r--)
                this.words[r + p] = this.words[r];
              for (r = 0; r < p; r++) this.words[r] = 0;
              this.length += p;
            }
            return this.strip();
          }),
          (BN.prototype.ishln = function (e) {
            return assert(0 === this.negative), this.iushln(e);
          }),
          (BN.prototype.iushrn = function (e, r, s) {
            assert("number" == typeof e && e >= 0),
              (p = r ? (r - (r % 26)) / 26 : 0);
            var p,
              b = e % 26,
              v = Math.min((e - b) / 26, this.length),
              w = 67108863 ^ ((67108863 >>> b) << b);
            if (((p -= v), (p = Math.max(0, p)), s)) {
              for (var _ = 0; _ < v; _++) s.words[_] = this.words[_];
              s.length = v;
            }
            if (0 === v);
            else if (this.length > v)
              for (this.length -= v, _ = 0; _ < this.length; _++)
                this.words[_] = this.words[_ + v];
            else (this.words[0] = 0), (this.length = 1);
            var P = 0;
            for (_ = this.length - 1; _ >= 0 && (0 !== P || _ >= p); _--) {
              var S = 0 | this.words[_];
              (this.words[_] = (P << (26 - b)) | (S >>> b)), (P = S & w);
            }
            return (
              s && 0 !== P && (s.words[s.length++] = P),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this.strip()
            );
          }),
          (BN.prototype.ishrn = function (e, r, s) {
            return assert(0 === this.negative), this.iushrn(e, r, s);
          }),
          (BN.prototype.shln = function (e) {
            return this.clone().ishln(e);
          }),
          (BN.prototype.ushln = function (e) {
            return this.clone().iushln(e);
          }),
          (BN.prototype.shrn = function (e) {
            return this.clone().ishrn(e);
          }),
          (BN.prototype.ushrn = function (e) {
            return this.clone().iushrn(e);
          }),
          (BN.prototype.testn = function (e) {
            assert("number" == typeof e && e >= 0);
            var r = e % 26,
              s = (e - r) / 26;
            return !(this.length <= s) && !!(this.words[s] & (1 << r));
          }),
          (BN.prototype.imaskn = function (e) {
            assert("number" == typeof e && e >= 0);
            var r = e % 26,
              s = (e - r) / 26;
            return (assert(
              0 === this.negative,
              "imaskn works only with positive numbers"
            ),
            this.length <= s)
              ? this
              : (0 !== r && s++,
                (this.length = Math.min(s, this.length)),
                0 !== r &&
                  (this.words[this.length - 1] &=
                    67108863 ^ ((67108863 >>> r) << r)),
                this.strip());
          }),
          (BN.prototype.maskn = function (e) {
            return this.clone().imaskn(e);
          }),
          (BN.prototype.iaddn = function (e) {
            return (assert("number" == typeof e), assert(e < 67108864), e < 0)
              ? this.isubn(-e)
              : 0 !== this.negative
              ? (1 === this.length && (0 | this.words[0]) < e
                  ? ((this.words[0] = e - (0 | this.words[0])),
                    (this.negative = 0))
                  : ((this.negative = 0), this.isubn(e), (this.negative = 1)),
                this)
              : this._iaddn(e);
          }),
          (BN.prototype._iaddn = function (e) {
            this.words[0] += e;
            for (var r = 0; r < this.length && this.words[r] >= 67108864; r++)
              (this.words[r] -= 67108864),
                r === this.length - 1
                  ? (this.words[r + 1] = 1)
                  : this.words[r + 1]++;
            return (this.length = Math.max(this.length, r + 1)), this;
          }),
          (BN.prototype.isubn = function (e) {
            if ((assert("number" == typeof e), assert(e < 67108864), e < 0))
              return this.iaddn(-e);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(e), (this.negative = 1), this
              );
            if (((this.words[0] -= e), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var r = 0; r < this.length && this.words[r] < 0; r++)
                (this.words[r] += 67108864), (this.words[r + 1] -= 1);
            return this.strip();
          }),
          (BN.prototype.addn = function (e) {
            return this.clone().iaddn(e);
          }),
          (BN.prototype.subn = function (e) {
            return this.clone().isubn(e);
          }),
          (BN.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (BN.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (BN.prototype._ishlnsubmul = function (e, r, s) {
            var p,
              b,
              v = e.length + s;
            this._expand(v);
            var w = 0;
            for (p = 0; p < e.length; p++) {
              b = (0 | this.words[p + s]) + w;
              var _ = (0 | e.words[p]) * r;
              (b -= 67108863 & _),
                (w = (b >> 26) - ((_ / 67108864) | 0)),
                (this.words[p + s] = 67108863 & b);
            }
            for (; p < this.length - s; p++)
              (w = (b = (0 | this.words[p + s]) + w) >> 26),
                (this.words[p + s] = 67108863 & b);
            if (0 === w) return this.strip();
            for (assert(-1 === w), w = 0, p = 0; p < this.length; p++)
              (w = (b = -(0 | this.words[p]) + w) >> 26),
                (this.words[p] = 67108863 & b);
            return (this.negative = 1), this.strip();
          }),
          (BN.prototype._wordDiv = function (e, r) {
            var s,
              p = this.length - e.length,
              b = this.clone(),
              v = e,
              w = 0 | v.words[v.length - 1];
            0 != (p = 26 - this._countBits(w)) &&
              ((v = v.ushln(p)), b.iushln(p), (w = 0 | v.words[v.length - 1]));
            var _ = b.length - v.length;
            if ("mod" !== r) {
              ((s = new BN(null)).length = _ + 1), (s.words = Array(s.length));
              for (var P = 0; P < s.length; P++) s.words[P] = 0;
            }
            var S = b.clone()._ishlnsubmul(v, 1, _);
            0 === S.negative && ((b = S), s && (s.words[_] = 1));
            for (var I = _ - 1; I >= 0; I--) {
              var A =
                (0 | b.words[v.length + I]) * 67108864 +
                (0 | b.words[v.length + I - 1]);
              for (
                A = Math.min((A / w) | 0, 67108863), b._ishlnsubmul(v, A, I);
                0 !== b.negative;

              )
                A--,
                  (b.negative = 0),
                  b._ishlnsubmul(v, 1, I),
                  b.isZero() || (b.negative ^= 1);
              s && (s.words[I] = A);
            }
            return (
              s && s.strip(),
              b.strip(),
              "div" !== r && 0 !== p && b.iushrn(p),
              { div: s || null, mod: b }
            );
          }),
          (BN.prototype.divmod = function (e, r, s) {
            var p, b, v;
            return (assert(!e.isZero()), this.isZero())
              ? { div: new BN(0), mod: new BN(0) }
              : 0 !== this.negative && 0 === e.negative
              ? ((v = this.neg().divmod(e, r)),
                "mod" !== r && (p = v.div.neg()),
                "div" !== r &&
                  ((b = v.mod.neg()), s && 0 !== b.negative && b.iadd(e)),
                { div: p, mod: b })
              : 0 === this.negative && 0 !== e.negative
              ? ((v = this.divmod(e.neg(), r)),
                "mod" !== r && (p = v.div.neg()),
                { div: p, mod: v.mod })
              : (this.negative & e.negative) != 0
              ? ((v = this.neg().divmod(e.neg(), r)),
                "div" !== r &&
                  ((b = v.mod.neg()), s && 0 !== b.negative && b.isub(e)),
                { div: v.div, mod: b })
              : e.length > this.length || 0 > this.cmp(e)
              ? { div: new BN(0), mod: this }
              : 1 === e.length
              ? "div" === r
                ? { div: this.divn(e.words[0]), mod: null }
                : "mod" === r
                ? { div: null, mod: new BN(this.modn(e.words[0])) }
                : {
                    div: this.divn(e.words[0]),
                    mod: new BN(this.modn(e.words[0])),
                  }
              : this._wordDiv(e, r);
          }),
          (BN.prototype.div = function (e) {
            return this.divmod(e, "div", !1).div;
          }),
          (BN.prototype.mod = function (e) {
            return this.divmod(e, "mod", !1).mod;
          }),
          (BN.prototype.umod = function (e) {
            return this.divmod(e, "mod", !0).mod;
          }),
          (BN.prototype.divRound = function (e) {
            var r = this.divmod(e);
            if (r.mod.isZero()) return r.div;
            var s = 0 !== r.div.negative ? r.mod.isub(e) : r.mod,
              p = e.ushrn(1),
              b = e.andln(1),
              v = s.cmp(p);
            return v < 0 || (1 === b && 0 === v)
              ? r.div
              : 0 !== r.div.negative
              ? r.div.isubn(1)
              : r.div.iaddn(1);
          }),
          (BN.prototype.modn = function (e) {
            assert(e <= 67108863);
            for (var r = 67108864 % e, s = 0, p = this.length - 1; p >= 0; p--)
              s = (r * s + (0 | this.words[p])) % e;
            return s;
          }),
          (BN.prototype.idivn = function (e) {
            assert(e <= 67108863);
            for (var r = 0, s = this.length - 1; s >= 0; s--) {
              var p = (0 | this.words[s]) + 67108864 * r;
              (this.words[s] = (p / e) | 0), (r = p % e);
            }
            return this.strip();
          }),
          (BN.prototype.divn = function (e) {
            return this.clone().idivn(e);
          }),
          (BN.prototype.egcd = function (e) {
            assert(0 === e.negative), assert(!e.isZero());
            var r = this,
              s = e.clone();
            r = 0 !== r.negative ? r.umod(e) : r.clone();
            for (
              var p = new BN(1),
                b = new BN(0),
                v = new BN(0),
                w = new BN(1),
                _ = 0;
              r.isEven() && s.isEven();

            )
              r.iushrn(1), s.iushrn(1), ++_;
            for (var P = s.clone(), S = r.clone(); !r.isZero(); ) {
              for (
                var I = 0, A = 1;
                (r.words[0] & A) == 0 && I < 26;
                ++I, A <<= 1
              );
              if (I > 0)
                for (r.iushrn(I); I-- > 0; )
                  (p.isOdd() || b.isOdd()) && (p.iadd(P), b.isub(S)),
                    p.iushrn(1),
                    b.iushrn(1);
              for (
                var R = 0, C = 1;
                (s.words[0] & C) == 0 && R < 26;
                ++R, C <<= 1
              );
              if (R > 0)
                for (s.iushrn(R); R-- > 0; )
                  (v.isOdd() || w.isOdd()) && (v.iadd(P), w.isub(S)),
                    v.iushrn(1),
                    w.iushrn(1);
              r.cmp(s) >= 0
                ? (r.isub(s), p.isub(v), b.isub(w))
                : (s.isub(r), v.isub(p), w.isub(b));
            }
            return { a: v, b: w, gcd: s.iushln(_) };
          }),
          (BN.prototype._invmp = function (e) {
            assert(0 === e.negative), assert(!e.isZero());
            var r,
              s = this,
              p = e.clone();
            s = 0 !== s.negative ? s.umod(e) : s.clone();
            for (
              var b = new BN(1), v = new BN(0), w = p.clone();
              s.cmpn(1) > 0 && p.cmpn(1) > 0;

            ) {
              for (
                var _ = 0, P = 1;
                (s.words[0] & P) == 0 && _ < 26;
                ++_, P <<= 1
              );
              if (_ > 0)
                for (s.iushrn(_); _-- > 0; )
                  b.isOdd() && b.iadd(w), b.iushrn(1);
              for (
                var S = 0, I = 1;
                (p.words[0] & I) == 0 && S < 26;
                ++S, I <<= 1
              );
              if (S > 0)
                for (p.iushrn(S); S-- > 0; )
                  v.isOdd() && v.iadd(w), v.iushrn(1);
              s.cmp(p) >= 0 ? (s.isub(p), b.isub(v)) : (p.isub(s), v.isub(b));
            }
            return 0 > (r = 0 === s.cmpn(1) ? b : v).cmpn(0) && r.iadd(e), r;
          }),
          (BN.prototype.gcd = function (e) {
            if (this.isZero()) return e.abs();
            if (e.isZero()) return this.abs();
            var r = this.clone(),
              s = e.clone();
            (r.negative = 0), (s.negative = 0);
            for (var p = 0; r.isEven() && s.isEven(); p++)
              r.iushrn(1), s.iushrn(1);
            for (;;) {
              for (; r.isEven(); ) r.iushrn(1);
              for (; s.isEven(); ) s.iushrn(1);
              var b = r.cmp(s);
              if (b < 0) {
                var v = r;
                (r = s), (s = v);
              } else if (0 === b || 0 === s.cmpn(1)) break;
              r.isub(s);
            }
            return s.iushln(p);
          }),
          (BN.prototype.invm = function (e) {
            return this.egcd(e).a.umod(e);
          }),
          (BN.prototype.isEven = function () {
            return (1 & this.words[0]) == 0;
          }),
          (BN.prototype.isOdd = function () {
            return (1 & this.words[0]) == 1;
          }),
          (BN.prototype.andln = function (e) {
            return this.words[0] & e;
          }),
          (BN.prototype.bincn = function (e) {
            assert("number" == typeof e);
            var r = e % 26,
              s = (e - r) / 26,
              p = 1 << r;
            if (this.length <= s)
              return this._expand(s + 1), (this.words[s] |= p), this;
            for (var b = p, v = s; 0 !== b && v < this.length; v++) {
              var w = 0 | this.words[v];
              (w += b), (b = w >>> 26), (w &= 67108863), (this.words[v] = w);
            }
            return 0 !== b && ((this.words[v] = b), this.length++), this;
          }),
          (BN.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (BN.prototype.cmpn = function (e) {
            var r,
              s = e < 0;
            if (0 !== this.negative && !s) return -1;
            if (0 === this.negative && s) return 1;
            if ((this.strip(), this.length > 1)) r = 1;
            else {
              s && (e = -e), assert(e <= 67108863, "Number is too big");
              var p = 0 | this.words[0];
              r = p === e ? 0 : p < e ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -r : r;
          }),
          (BN.prototype.cmp = function (e) {
            if (0 !== this.negative && 0 === e.negative) return -1;
            if (0 === this.negative && 0 !== e.negative) return 1;
            var r = this.ucmp(e);
            return 0 !== this.negative ? 0 | -r : r;
          }),
          (BN.prototype.ucmp = function (e) {
            if (this.length > e.length) return 1;
            if (this.length < e.length) return -1;
            for (var r = 0, s = this.length - 1; s >= 0; s--) {
              var p = 0 | this.words[s],
                b = 0 | e.words[s];
              if (p !== b) {
                p < b ? (r = -1) : p > b && (r = 1);
                break;
              }
            }
            return r;
          }),
          (BN.prototype.gtn = function (e) {
            return 1 === this.cmpn(e);
          }),
          (BN.prototype.gt = function (e) {
            return 1 === this.cmp(e);
          }),
          (BN.prototype.gten = function (e) {
            return this.cmpn(e) >= 0;
          }),
          (BN.prototype.gte = function (e) {
            return this.cmp(e) >= 0;
          }),
          (BN.prototype.ltn = function (e) {
            return -1 === this.cmpn(e);
          }),
          (BN.prototype.lt = function (e) {
            return -1 === this.cmp(e);
          }),
          (BN.prototype.lten = function (e) {
            return 0 >= this.cmpn(e);
          }),
          (BN.prototype.lte = function (e) {
            return 0 >= this.cmp(e);
          }),
          (BN.prototype.eqn = function (e) {
            return 0 === this.cmpn(e);
          }),
          (BN.prototype.eq = function (e) {
            return 0 === this.cmp(e);
          }),
          (BN.red = function (e) {
            return new Red(e);
          }),
          (BN.prototype.toRed = function (e) {
            return (
              assert(!this.red, "Already a number in reduction context"),
              assert(0 === this.negative, "red works only with positives"),
              e.convertTo(this)._forceRed(e)
            );
          }),
          (BN.prototype.fromRed = function () {
            return (
              assert(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (BN.prototype._forceRed = function (e) {
            return (this.red = e), this;
          }),
          (BN.prototype.forceRed = function (e) {
            return (
              assert(!this.red, "Already a number in reduction context"),
              this._forceRed(e)
            );
          }),
          (BN.prototype.redAdd = function (e) {
            return (
              assert(this.red, "redAdd works only with red numbers"),
              this.red.add(this, e)
            );
          }),
          (BN.prototype.redIAdd = function (e) {
            return (
              assert(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, e)
            );
          }),
          (BN.prototype.redSub = function (e) {
            return (
              assert(this.red, "redSub works only with red numbers"),
              this.red.sub(this, e)
            );
          }),
          (BN.prototype.redISub = function (e) {
            return (
              assert(this.red, "redISub works only with red numbers"),
              this.red.isub(this, e)
            );
          }),
          (BN.prototype.redShl = function (e) {
            return (
              assert(this.red, "redShl works only with red numbers"),
              this.red.shl(this, e)
            );
          }),
          (BN.prototype.redMul = function (e) {
            return (
              assert(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, e),
              this.red.mul(this, e)
            );
          }),
          (BN.prototype.redIMul = function (e) {
            return (
              assert(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, e),
              this.red.imul(this, e)
            );
          }),
          (BN.prototype.redSqr = function () {
            return (
              assert(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (BN.prototype.redISqr = function () {
            return (
              assert(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (BN.prototype.redSqrt = function () {
            return (
              assert(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (BN.prototype.redInvm = function () {
            return (
              assert(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (BN.prototype.redNeg = function () {
            return (
              assert(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (BN.prototype.redPow = function (e) {
            return (
              assert(this.red && !e.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, e)
            );
          });
        var _ = { k256: null, p224: null, p192: null, p25519: null };
        function MPrime(e, r) {
          (this.name = e),
            (this.p = new BN(r, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new BN(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function K256() {
          MPrime.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function P224() {
          MPrime.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function P192() {
          MPrime.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function P25519() {
          MPrime.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function Red(e) {
          if ("string" == typeof e) {
            var r = BN._prime(e);
            (this.m = r.p), (this.prime = r);
          } else
            assert(e.gtn(1), "modulus must be greater than 1"),
              (this.m = e),
              (this.prime = null);
        }
        function Mont(e) {
          Red.call(this, e),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new BN(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (MPrime.prototype._tmp = function () {
          var e = new BN(null);
          return (e.words = Array(Math.ceil(this.n / 13))), e;
        }),
          (MPrime.prototype.ireduce = function (e) {
            var r,
              s = e;
            do
              this.split(s, this.tmp),
                (r = (s = (s = this.imulK(s)).iadd(this.tmp)).bitLength());
            while (r > this.n);
            var p = r < this.n ? -1 : s.ucmp(this.p);
            return (
              0 === p
                ? ((s.words[0] = 0), (s.length = 1))
                : p > 0
                ? s.isub(this.p)
                : void 0 !== s.strip
                ? s.strip()
                : s._strip(),
              s
            );
          }),
          (MPrime.prototype.split = function (e, r) {
            e.iushrn(this.n, 0, r);
          }),
          (MPrime.prototype.imulK = function (e) {
            return e.imul(this.k);
          }),
          inherits(K256, MPrime),
          (K256.prototype.split = function (e, r) {
            for (var s = Math.min(e.length, 9), p = 0; p < s; p++)
              r.words[p] = e.words[p];
            if (((r.length = s), e.length <= 9)) {
              (e.words[0] = 0), (e.length = 1);
              return;
            }
            var b = e.words[9];
            for (p = 10, r.words[r.length++] = 4194303 & b; p < e.length; p++) {
              var v = 0 | e.words[p];
              (e.words[p - 10] = ((4194303 & v) << 4) | (b >>> 22)), (b = v);
            }
            (b >>>= 22),
              (e.words[p - 10] = b),
              0 === b && e.length > 10 ? (e.length -= 10) : (e.length -= 9);
          }),
          (K256.prototype.imulK = function (e) {
            (e.words[e.length] = 0),
              (e.words[e.length + 1] = 0),
              (e.length += 2);
            for (var r = 0, s = 0; s < e.length; s++) {
              var p = 0 | e.words[s];
              (r += 977 * p),
                (e.words[s] = 67108863 & r),
                (r = 64 * p + ((r / 67108864) | 0));
            }
            return (
              0 === e.words[e.length - 1] &&
                (e.length--, 0 === e.words[e.length - 1] && e.length--),
              e
            );
          }),
          inherits(P224, MPrime),
          inherits(P192, MPrime),
          inherits(P25519, MPrime),
          (P25519.prototype.imulK = function (e) {
            for (var r = 0, s = 0; s < e.length; s++) {
              var p = (0 | e.words[s]) * 19 + r,
                b = 67108863 & p;
              (p >>>= 26), (e.words[s] = b), (r = p);
            }
            return 0 !== r && (e.words[e.length++] = r), e;
          }),
          (BN._prime = function (e) {
            var r;
            if (_[e]) return _[e];
            if ("k256" === e) r = new K256();
            else if ("p224" === e) r = new P224();
            else if ("p192" === e) r = new P192();
            else if ("p25519" === e) r = new P25519();
            else throw Error("Unknown prime " + e);
            return (_[e] = r), r;
          }),
          (Red.prototype._verify1 = function (e) {
            assert(0 === e.negative, "red works only with positives"),
              assert(e.red, "red works only with red numbers");
          }),
          (Red.prototype._verify2 = function (e, r) {
            assert(
              (e.negative | r.negative) == 0,
              "red works only with positives"
            ),
              assert(
                e.red && e.red === r.red,
                "red works only with red numbers"
              );
          }),
          (Red.prototype.imod = function (e) {
            return this.prime
              ? this.prime.ireduce(e)._forceRed(this)
              : e.umod(this.m)._forceRed(this);
          }),
          (Red.prototype.neg = function (e) {
            return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
          }),
          (Red.prototype.add = function (e, r) {
            this._verify2(e, r);
            var s = e.add(r);
            return s.cmp(this.m) >= 0 && s.isub(this.m), s._forceRed(this);
          }),
          (Red.prototype.iadd = function (e, r) {
            this._verify2(e, r);
            var s = e.iadd(r);
            return s.cmp(this.m) >= 0 && s.isub(this.m), s;
          }),
          (Red.prototype.sub = function (e, r) {
            this._verify2(e, r);
            var s = e.sub(r);
            return 0 > s.cmpn(0) && s.iadd(this.m), s._forceRed(this);
          }),
          (Red.prototype.isub = function (e, r) {
            this._verify2(e, r);
            var s = e.isub(r);
            return 0 > s.cmpn(0) && s.iadd(this.m), s;
          }),
          (Red.prototype.shl = function (e, r) {
            return this._verify1(e), this.imod(e.ushln(r));
          }),
          (Red.prototype.imul = function (e, r) {
            return this._verify2(e, r), this.imod(e.imul(r));
          }),
          (Red.prototype.mul = function (e, r) {
            return this._verify2(e, r), this.imod(e.mul(r));
          }),
          (Red.prototype.isqr = function (e) {
            return this.imul(e, e.clone());
          }),
          (Red.prototype.sqr = function (e) {
            return this.mul(e, e);
          }),
          (Red.prototype.sqrt = function (e) {
            if (e.isZero()) return e.clone();
            var r = this.m.andln(3);
            if ((assert(r % 2 == 1), 3 === r)) {
              var s = this.m.add(new BN(1)).iushrn(2);
              return this.pow(e, s);
            }
            for (
              var p = this.m.subn(1), b = 0;
              !p.isZero() && 0 === p.andln(1);

            )
              b++, p.iushrn(1);
            assert(!p.isZero());
            var v = new BN(1).toRed(this),
              w = v.redNeg(),
              _ = this.m.subn(1).iushrn(1),
              P = this.m.bitLength();
            for (
              P = new BN(2 * P * P).toRed(this);
              0 !== this.pow(P, _).cmp(w);

            )
              P.redIAdd(w);
            for (
              var S = this.pow(P, p),
                I = this.pow(e, p.addn(1).iushrn(1)),
                A = this.pow(e, p),
                R = b;
              0 !== A.cmp(v);

            ) {
              for (var C = A, B = 0; 0 !== C.cmp(v); B++) C = C.redSqr();
              assert(B < R);
              var j = this.pow(S, new BN(1).iushln(R - B - 1));
              (I = I.redMul(j)), (S = j.redSqr()), (A = A.redMul(S)), (R = B);
            }
            return I;
          }),
          (Red.prototype.invm = function (e) {
            var r = e._invmp(this.m);
            return 0 !== r.negative
              ? ((r.negative = 0), this.imod(r).redNeg())
              : this.imod(r);
          }),
          (Red.prototype.pow = function (e, r) {
            if (r.isZero()) return new BN(1).toRed(this);
            if (0 === r.cmpn(1)) return e.clone();
            var s = Array(16);
            (s[0] = new BN(1).toRed(this)), (s[1] = e);
            for (var p = 2; p < s.length; p++) s[p] = this.mul(s[p - 1], e);
            var b = s[0],
              v = 0,
              w = 0,
              _ = r.bitLength() % 26;
            for (0 === _ && (_ = 26), p = r.length - 1; p >= 0; p--) {
              for (var P = r.words[p], S = _ - 1; S >= 0; S--) {
                var I = (P >> S) & 1;
                if ((b !== s[0] && (b = this.sqr(b)), 0 === I && 0 === v)) {
                  w = 0;
                  continue;
                }
                (v <<= 1),
                  (v |= I),
                  (4 == ++w || (0 === p && 0 === S)) &&
                    ((b = this.mul(b, s[v])), (w = 0), (v = 0));
              }
              _ = 26;
            }
            return b;
          }),
          (Red.prototype.convertTo = function (e) {
            var r = e.umod(this.m);
            return r === e ? r.clone() : r;
          }),
          (Red.prototype.convertFrom = function (e) {
            var r = e.clone();
            return (r.red = null), r;
          }),
          (BN.mont = function (e) {
            return new Mont(e);
          }),
          inherits(Mont, Red),
          (Mont.prototype.convertTo = function (e) {
            return this.imod(e.ushln(this.shift));
          }),
          (Mont.prototype.convertFrom = function (e) {
            var r = this.imod(e.mul(this.rinv));
            return (r.red = null), r;
          }),
          (Mont.prototype.imul = function (e, r) {
            if (e.isZero() || r.isZero())
              return (e.words[0] = 0), (e.length = 1), e;
            var s = e.imul(r),
              p = s
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              b = s.isub(p).iushrn(this.shift),
              v = b;
            return (
              b.cmp(this.m) >= 0
                ? (v = b.isub(this.m))
                : 0 > b.cmpn(0) && (v = b.iadd(this.m)),
              v._forceRed(this)
            );
          }),
          (Mont.prototype.mul = function (e, r) {
            if (e.isZero() || r.isZero()) return new BN(0)._forceRed(this);
            var s = e.mul(r),
              p = s
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              b = s.isub(p).iushrn(this.shift),
              v = b;
            return (
              b.cmp(this.m) >= 0
                ? (v = b.isub(this.m))
                : 0 > b.cmpn(0) && (v = b.iadd(this.m)),
              v._forceRed(this)
            );
          }),
          (Mont.prototype.invm = function (e) {
            return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((e = s.nmd(e)), this);
    },
    85257: function (e, r) {
      var s = "undefined" != typeof self ? self : this,
        p = (function () {
          function F() {
            (this.fetch = !1), (this.DOMException = s.DOMException);
          }
          return (F.prototype = s), new F();
        })();
      (function (e) {
        var r = {
          searchParams: "URLSearchParams" in p,
          iterable: "Symbol" in p && "iterator" in Symbol,
          blob:
            "FileReader" in p &&
            "Blob" in p &&
            (function () {
              try {
                return new Blob(), !0;
              } catch (e) {
                return !1;
              }
            })(),
          formData: "FormData" in p,
          arrayBuffer: "ArrayBuffer" in p,
        };
        if (r.arrayBuffer)
          var s = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]",
            ],
            b =
              ArrayBuffer.isView ||
              function (e) {
                return e && s.indexOf(Object.prototype.toString.call(e)) > -1;
              };
        function normalizeName(e) {
          if (
            ("string" != typeof e && (e = String(e)),
            /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
          )
            throw TypeError("Invalid character in header field name");
          return e.toLowerCase();
        }
        function normalizeValue(e) {
          return "string" != typeof e && (e = String(e)), e;
        }
        function iteratorFor(e) {
          var s = {
            next: function () {
              var r = e.shift();
              return { done: void 0 === r, value: r };
            },
          };
          return (
            r.iterable &&
              (s[Symbol.iterator] = function () {
                return s;
              }),
            s
          );
        }
        function Headers(e) {
          (this.map = {}),
            e instanceof Headers
              ? e.forEach(function (e, r) {
                  this.append(r, e);
                }, this)
              : Array.isArray(e)
              ? e.forEach(function (e) {
                  this.append(e[0], e[1]);
                }, this)
              : e &&
                Object.getOwnPropertyNames(e).forEach(function (r) {
                  this.append(r, e[r]);
                }, this);
        }
        function consumed(e) {
          if (e.bodyUsed) return Promise.reject(TypeError("Already read"));
          e.bodyUsed = !0;
        }
        function fileReaderReady(e) {
          return new Promise(function (r, s) {
            (e.onload = function () {
              r(e.result);
            }),
              (e.onerror = function () {
                s(e.error);
              });
          });
        }
        function readBlobAsArrayBuffer(e) {
          var r = new FileReader(),
            s = fileReaderReady(r);
          return r.readAsArrayBuffer(e), s;
        }
        function bufferClone(e) {
          if (e.slice) return e.slice(0);
          var r = new Uint8Array(e.byteLength);
          return r.set(new Uint8Array(e)), r.buffer;
        }
        function Body() {
          return (
            (this.bodyUsed = !1),
            (this._initBody = function (e) {
              if (((this._bodyInit = e), e)) {
                if ("string" == typeof e) this._bodyText = e;
                else if (r.blob && Blob.prototype.isPrototypeOf(e))
                  this._bodyBlob = e;
                else if (r.formData && FormData.prototype.isPrototypeOf(e))
                  this._bodyFormData = e;
                else if (
                  r.searchParams &&
                  URLSearchParams.prototype.isPrototypeOf(e)
                )
                  this._bodyText = e.toString();
                else {
                  var s;
                  r.arrayBuffer &&
                  r.blob &&
                  (s = e) &&
                  DataView.prototype.isPrototypeOf(s)
                    ? ((this._bodyArrayBuffer = bufferClone(e.buffer)),
                      (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                    : r.arrayBuffer &&
                      (ArrayBuffer.prototype.isPrototypeOf(e) || b(e))
                    ? (this._bodyArrayBuffer = bufferClone(e))
                    : (this._bodyText = e = Object.prototype.toString.call(e));
                }
              } else this._bodyText = "";
              !this.headers.get("content-type") &&
                ("string" == typeof e
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : r.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(e) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
            }),
            r.blob &&
              ((this.blob = function () {
                var e = consumed(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (!this._bodyFormData)
                  return Promise.resolve(new Blob([this._bodyText]));
                throw Error("could not read FormData body as blob");
              }),
              (this.arrayBuffer = function () {
                return this._bodyArrayBuffer
                  ? consumed(this) || Promise.resolve(this._bodyArrayBuffer)
                  : this.blob().then(readBlobAsArrayBuffer);
              })),
            (this.text = function () {
              var e,
                r,
                s,
                p = consumed(this);
              if (p) return p;
              if (this._bodyBlob)
                return (
                  (e = this._bodyBlob),
                  (s = fileReaderReady((r = new FileReader()))),
                  r.readAsText(e),
                  s
                );
              if (this._bodyArrayBuffer)
                return Promise.resolve(
                  (function (e) {
                    for (
                      var r = new Uint8Array(e), s = Array(r.length), p = 0;
                      p < r.length;
                      p++
                    )
                      s[p] = String.fromCharCode(r[p]);
                    return s.join("");
                  })(this._bodyArrayBuffer)
                );
              if (!this._bodyFormData) return Promise.resolve(this._bodyText);
              throw Error("could not read FormData body as text");
            }),
            r.formData &&
              (this.formData = function () {
                return this.text().then(decode);
              }),
            (this.json = function () {
              return this.text().then(JSON.parse);
            }),
            this
          );
        }
        (Headers.prototype.append = function (e, r) {
          (e = normalizeName(e)), (r = normalizeValue(r));
          var s = this.map[e];
          this.map[e] = s ? s + ", " + r : r;
        }),
          (Headers.prototype.delete = function (e) {
            delete this.map[normalizeName(e)];
          }),
          (Headers.prototype.get = function (e) {
            return (e = normalizeName(e)), this.has(e) ? this.map[e] : null;
          }),
          (Headers.prototype.has = function (e) {
            return this.map.hasOwnProperty(normalizeName(e));
          }),
          (Headers.prototype.set = function (e, r) {
            this.map[normalizeName(e)] = normalizeValue(r);
          }),
          (Headers.prototype.forEach = function (e, r) {
            for (var s in this.map)
              this.map.hasOwnProperty(s) && e.call(r, this.map[s], s, this);
          }),
          (Headers.prototype.keys = function () {
            var e = [];
            return (
              this.forEach(function (r, s) {
                e.push(s);
              }),
              iteratorFor(e)
            );
          }),
          (Headers.prototype.values = function () {
            var e = [];
            return (
              this.forEach(function (r) {
                e.push(r);
              }),
              iteratorFor(e)
            );
          }),
          (Headers.prototype.entries = function () {
            var e = [];
            return (
              this.forEach(function (r, s) {
                e.push([s, r]);
              }),
              iteratorFor(e)
            );
          }),
          r.iterable &&
            (Headers.prototype[Symbol.iterator] = Headers.prototype.entries);
        var v = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function Request(e, r) {
          var s,
            p,
            b = (r = r || {}).body;
          if (e instanceof Request) {
            if (e.bodyUsed) throw TypeError("Already read");
            (this.url = e.url),
              (this.credentials = e.credentials),
              r.headers || (this.headers = new Headers(e.headers)),
              (this.method = e.method),
              (this.mode = e.mode),
              (this.signal = e.signal),
              b ||
                null == e._bodyInit ||
                ((b = e._bodyInit), (e.bodyUsed = !0));
          } else this.url = String(e);
          if (
            ((this.credentials =
              r.credentials || this.credentials || "same-origin"),
            (r.headers || !this.headers) &&
              (this.headers = new Headers(r.headers)),
            (this.method =
              ((p = (s = r.method || this.method || "GET").toUpperCase()),
              v.indexOf(p) > -1 ? p : s)),
            (this.mode = r.mode || this.mode || null),
            (this.signal = r.signal || this.signal),
            (this.referrer = null),
            ("GET" === this.method || "HEAD" === this.method) && b)
          )
            throw TypeError("Body not allowed for GET or HEAD requests");
          this._initBody(b);
        }
        function decode(e) {
          var r = new FormData();
          return (
            e
              .trim()
              .split("&")
              .forEach(function (e) {
                if (e) {
                  var s = e.split("="),
                    p = s.shift().replace(/\+/g, " "),
                    b = s.join("=").replace(/\+/g, " ");
                  r.append(decodeURIComponent(p), decodeURIComponent(b));
                }
              }),
            r
          );
        }
        function Response(e, r) {
          r || (r = {}),
            (this.type = "default"),
            (this.status = void 0 === r.status ? 200 : r.status),
            (this.ok = this.status >= 200 && this.status < 300),
            (this.statusText = "statusText" in r ? r.statusText : "OK"),
            (this.headers = new Headers(r.headers)),
            (this.url = r.url || ""),
            this._initBody(e);
        }
        (Request.prototype.clone = function () {
          return new Request(this, { body: this._bodyInit });
        }),
          Body.call(Request.prototype),
          Body.call(Response.prototype),
          (Response.prototype.clone = function () {
            return new Response(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new Headers(this.headers),
              url: this.url,
            });
          }),
          (Response.error = function () {
            var e = new Response(null, { status: 0, statusText: "" });
            return (e.type = "error"), e;
          });
        var w = [301, 302, 303, 307, 308];
        (Response.redirect = function (e, r) {
          if (-1 === w.indexOf(r)) throw RangeError("Invalid status code");
          return new Response(null, { status: r, headers: { location: e } });
        }),
          (e.DOMException = p.DOMException);
        try {
          new e.DOMException();
        } catch (r) {
          (e.DOMException = function (e, r) {
            (this.message = e), (this.name = r);
            var s = Error(e);
            this.stack = s.stack;
          }),
            (e.DOMException.prototype = Object.create(Error.prototype)),
            (e.DOMException.prototype.constructor = e.DOMException);
        }
        function fetch(s, p) {
          return new Promise(function (b, v) {
            var w = new Request(s, p);
            if (w.signal && w.signal.aborted)
              return v(new e.DOMException("Aborted", "AbortError"));
            var _ = new XMLHttpRequest();
            function abortXhr() {
              _.abort();
            }
            (_.onload = function () {
              var e,
                r,
                s = {
                  status: _.status,
                  statusText: _.statusText,
                  headers:
                    ((e = _.getAllResponseHeaders() || ""),
                    (r = new Headers()),
                    e
                      .replace(/\r?\n[\t ]+/g, " ")
                      .split(/\r?\n/)
                      .forEach(function (e) {
                        var s = e.split(":"),
                          p = s.shift().trim();
                        if (p) {
                          var b = s.join(":").trim();
                          r.append(p, b);
                        }
                      }),
                    r),
                };
              s.url =
                "responseURL" in _
                  ? _.responseURL
                  : s.headers.get("X-Request-URL");
              var p = "response" in _ ? _.response : _.responseText;
              b(new Response(p, s));
            }),
              (_.onerror = function () {
                v(TypeError("Network request failed"));
              }),
              (_.ontimeout = function () {
                v(TypeError("Network request failed"));
              }),
              (_.onabort = function () {
                v(new e.DOMException("Aborted", "AbortError"));
              }),
              _.open(w.method, w.url, !0),
              "include" === w.credentials
                ? (_.withCredentials = !0)
                : "omit" === w.credentials && (_.withCredentials = !1),
              "responseType" in _ && r.blob && (_.responseType = "blob"),
              w.headers.forEach(function (e, r) {
                _.setRequestHeader(r, e);
              }),
              w.signal &&
                (w.signal.addEventListener("abort", abortXhr),
                (_.onreadystatechange = function () {
                  4 === _.readyState &&
                    w.signal.removeEventListener("abort", abortXhr);
                })),
              _.send(void 0 === w._bodyInit ? null : w._bodyInit);
          });
        }
        (fetch.polyfill = !0),
          p.fetch ||
            ((p.fetch = fetch),
            (p.Headers = Headers),
            (p.Request = Request),
            (p.Response = Response)),
          (e.Headers = Headers),
          (e.Request = Request),
          (e.Response = Response),
          (e.fetch = fetch),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })({}),
        (p.fetch.ponyfill = !0),
        delete p.fetch.polyfill,
        ((r = p.fetch).default = p.fetch),
        (r.fetch = p.fetch),
        (r.Headers = p.Headers),
        (r.Request = p.Request),
        (r.Response = p.Response),
        (e.exports = r);
    },
    13964: function (e, r, s) {
      "use strict";
      (r.version = s(15220).i8),
        (r.utils = s(63039)),
        (r.rand = s(29931)),
        (r.curve = s(30472)),
        (r.curves = s(1538)),
        (r.ec = s(57387)),
        (r.eddsa = s(58625));
    },
    9568: function (e, r, s) {
      "use strict";
      var p = s(1067),
        b = s(63039),
        v = b.getNAF,
        w = b.getJSF,
        _ = b.assert;
      function BaseCurve(e, r) {
        (this.type = e),
          (this.p = new p(r.p, 16)),
          (this.red = r.prime ? p.red(r.prime) : p.mont(this.p)),
          (this.zero = new p(0).toRed(this.red)),
          (this.one = new p(1).toRed(this.red)),
          (this.two = new p(2).toRed(this.red)),
          (this.n = r.n && new p(r.n, 16)),
          (this.g = r.g && this.pointFromJSON(r.g, r.gRed)),
          (this._wnafT1 = [, , , ,]),
          (this._wnafT2 = [, , , ,]),
          (this._wnafT3 = [, , , ,]),
          (this._wnafT4 = [, , , ,]),
          (this._bitLength = this.n ? this.n.bitLength() : 0);
        var s = this.n && this.p.div(this.n);
        !s || s.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
      }
      function BasePoint(e, r) {
        (this.curve = e), (this.type = r), (this.precomputed = null);
      }
      (e.exports = BaseCurve),
        (BaseCurve.prototype.point = function () {
          throw Error("Not implemented");
        }),
        (BaseCurve.prototype.validate = function () {
          throw Error("Not implemented");
        }),
        (BaseCurve.prototype._fixedNafMul = function (e, r) {
          _(e.precomputed);
          var s,
            p,
            b = e._getDoubles(),
            w = v(r, 1, this._bitLength),
            P = (1 << (b.step + 1)) - (b.step % 2 == 0 ? 2 : 1);
          P /= 3;
          var S = [];
          for (s = 0; s < w.length; s += b.step) {
            p = 0;
            for (var I = s + b.step - 1; I >= s; I--) p = (p << 1) + w[I];
            S.push(p);
          }
          for (
            var A = this.jpoint(null, null, null),
              R = this.jpoint(null, null, null),
              C = P;
            C > 0;
            C--
          ) {
            for (s = 0; s < S.length; s++)
              (p = S[s]) === C
                ? (R = R.mixedAdd(b.points[s]))
                : p === -C && (R = R.mixedAdd(b.points[s].neg()));
            A = A.add(R);
          }
          return A.toP();
        }),
        (BaseCurve.prototype._wnafMul = function (e, r) {
          var s = 4,
            p = e._getNAFPoints(s);
          s = p.wnd;
          for (
            var b = p.points,
              w = v(r, s, this._bitLength),
              P = this.jpoint(null, null, null),
              S = w.length - 1;
            S >= 0;
            S--
          ) {
            for (var I = 0; S >= 0 && 0 === w[S]; S--) I++;
            if ((S >= 0 && I++, (P = P.dblp(I)), S < 0)) break;
            var A = w[S];
            _(0 !== A),
              (P =
                "affine" === e.type
                  ? A > 0
                    ? P.mixedAdd(b[(A - 1) >> 1])
                    : P.mixedAdd(b[(-A - 1) >> 1].neg())
                  : A > 0
                  ? P.add(b[(A - 1) >> 1])
                  : P.add(b[(-A - 1) >> 1].neg()));
          }
          return "affine" === e.type ? P.toP() : P;
        }),
        (BaseCurve.prototype._wnafMulAdd = function (e, r, s, p, b) {
          var _,
            P,
            S,
            I = this._wnafT1,
            A = this._wnafT2,
            R = this._wnafT3,
            C = 0;
          for (_ = 0; _ < p; _++) {
            var B = (S = r[_])._getNAFPoints(e);
            (I[_] = B.wnd), (A[_] = B.points);
          }
          for (_ = p - 1; _ >= 1; _ -= 2) {
            var j = _ - 1,
              V = _;
            if (1 !== I[j] || 1 !== I[V]) {
              (R[j] = v(s[j], I[j], this._bitLength)),
                (R[V] = v(s[V], I[V], this._bitLength)),
                (C = Math.max(R[j].length, C)),
                (C = Math.max(R[V].length, C));
              continue;
            }
            var J = [r[j], null, null, r[V]];
            0 === r[j].y.cmp(r[V].y)
              ? ((J[1] = r[j].add(r[V])),
                (J[2] = r[j].toJ().mixedAdd(r[V].neg())))
              : 0 === r[j].y.cmp(r[V].y.redNeg())
              ? ((J[1] = r[j].toJ().mixedAdd(r[V])),
                (J[2] = r[j].add(r[V].neg())))
              : ((J[1] = r[j].toJ().mixedAdd(r[V])),
                (J[2] = r[j].toJ().mixedAdd(r[V].neg())));
            var W = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
              X = w(s[j], s[V]);
            for (
              P = 0,
                C = Math.max(X[0].length, C),
                R[j] = Array(C),
                R[V] = Array(C);
              P < C;
              P++
            ) {
              var et = 0 | X[0][P],
                es = 0 | X[1][P];
              (R[j][P] = W[(et + 1) * 3 + (es + 1)]), (R[V][P] = 0), (A[j] = J);
            }
          }
          var eo = this.jpoint(null, null, null),
            ec = this._wnafT4;
          for (_ = C; _ >= 0; _--) {
            for (var ed = 0; _ >= 0; ) {
              var eh = !0;
              for (P = 0; P < p; P++)
                (ec[P] = 0 | R[P][_]), 0 !== ec[P] && (eh = !1);
              if (!eh) break;
              ed++, _--;
            }
            if ((_ >= 0 && ed++, (eo = eo.dblp(ed)), _ < 0)) break;
            for (P = 0; P < p; P++) {
              var ef = ec[P];
              0 !== ef &&
                (ef > 0
                  ? (S = A[P][(ef - 1) >> 1])
                  : ef < 0 && (S = A[P][(-ef - 1) >> 1].neg()),
                (eo = "affine" === S.type ? eo.mixedAdd(S) : eo.add(S)));
            }
          }
          for (_ = 0; _ < p; _++) A[_] = null;
          return b ? eo : eo.toP();
        }),
        (BaseCurve.BasePoint = BasePoint),
        (BasePoint.prototype.eq = function () {
          throw Error("Not implemented");
        }),
        (BasePoint.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (BaseCurve.prototype.decodePoint = function (e, r) {
          e = b.toArray(e, r);
          var s = this.p.byteLength();
          if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * s)
            return (
              6 === e[0]
                ? _(e[e.length - 1] % 2 == 0)
                : 7 === e[0] && _(e[e.length - 1] % 2 == 1),
              this.point(e.slice(1, 1 + s), e.slice(1 + s, 1 + 2 * s))
            );
          if ((2 === e[0] || 3 === e[0]) && e.length - 1 === s)
            return this.pointFromX(e.slice(1, 1 + s), 3 === e[0]);
          throw Error("Unknown point format");
        }),
        (BasePoint.prototype.encodeCompressed = function (e) {
          return this.encode(e, !0);
        }),
        (BasePoint.prototype._encode = function (e) {
          var r = this.curve.p.byteLength(),
            s = this.getX().toArray("be", r);
          return e
            ? [this.getY().isEven() ? 2 : 3].concat(s)
            : [4].concat(s, this.getY().toArray("be", r));
        }),
        (BasePoint.prototype.encode = function (e, r) {
          return b.encode(this._encode(r), e);
        }),
        (BasePoint.prototype.precompute = function (e) {
          if (this.precomputed) return this;
          var r = { doubles: null, naf: null, beta: null };
          return (
            (r.naf = this._getNAFPoints(8)),
            (r.doubles = this._getDoubles(4, e)),
            (r.beta = this._getBeta()),
            (this.precomputed = r),
            this
          );
        }),
        (BasePoint.prototype._hasDoubles = function (e) {
          if (!this.precomputed) return !1;
          var r = this.precomputed.doubles;
          return (
            !!r && r.points.length >= Math.ceil((e.bitLength() + 1) / r.step)
          );
        }),
        (BasePoint.prototype._getDoubles = function (e, r) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
          for (var s = [this], p = this, b = 0; b < r; b += e) {
            for (var v = 0; v < e; v++) p = p.dbl();
            s.push(p);
          }
          return { step: e, points: s };
        }),
        (BasePoint.prototype._getNAFPoints = function (e) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
          for (
            var r = [this],
              s = (1 << e) - 1,
              p = 1 === s ? null : this.dbl(),
              b = 1;
            b < s;
            b++
          )
            r[b] = r[b - 1].add(p);
          return { wnd: e, points: r };
        }),
        (BasePoint.prototype._getBeta = function () {
          return null;
        }),
        (BasePoint.prototype.dblp = function (e) {
          for (var r = this, s = 0; s < e; s++) r = r.dbl();
          return r;
        });
    },
    2629: function (e, r, s) {
      "use strict";
      var p = s(63039),
        b = s(1067),
        v = s(35717),
        w = s(9568),
        _ = p.assert;
      function EdwardsCurve(e) {
        (this.twisted = (0 | e.a) != 1),
          (this.mOneA = this.twisted && (0 | e.a) == -1),
          (this.extended = this.mOneA),
          w.call(this, "edwards", e),
          (this.a = new b(e.a, 16).umod(this.red.m)),
          (this.a = this.a.toRed(this.red)),
          (this.c = new b(e.c, 16).toRed(this.red)),
          (this.c2 = this.c.redSqr()),
          (this.d = new b(e.d, 16).toRed(this.red)),
          (this.dd = this.d.redAdd(this.d)),
          _(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
          (this.oneC = (0 | e.c) == 1);
      }
      function Point(e, r, s, p, v) {
        w.BasePoint.call(this, e, "projective"),
          null === r && null === s && null === p
            ? ((this.x = this.curve.zero),
              (this.y = this.curve.one),
              (this.z = this.curve.one),
              (this.t = this.curve.zero),
              (this.zOne = !0))
            : ((this.x = new b(r, 16)),
              (this.y = new b(s, 16)),
              (this.z = p ? new b(p, 16) : this.curve.one),
              (this.t = v && new b(v, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)),
              this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
              (this.zOne = this.z === this.curve.one),
              !this.curve.extended ||
                this.t ||
                ((this.t = this.x.redMul(this.y)),
                this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
      }
      v(EdwardsCurve, w),
        (e.exports = EdwardsCurve),
        (EdwardsCurve.prototype._mulA = function (e) {
          return this.mOneA ? e.redNeg() : this.a.redMul(e);
        }),
        (EdwardsCurve.prototype._mulC = function (e) {
          return this.oneC ? e : this.c.redMul(e);
        }),
        (EdwardsCurve.prototype.jpoint = function (e, r, s, p) {
          return this.point(e, r, s, p);
        }),
        (EdwardsCurve.prototype.pointFromX = function (e, r) {
          (e = new b(e, 16)).red || (e = e.toRed(this.red));
          var s = e.redSqr(),
            p = this.c2.redSub(this.a.redMul(s)),
            v = this.one.redSub(this.c2.redMul(this.d).redMul(s)),
            w = p.redMul(v.redInvm()),
            _ = w.redSqrt();
          if (0 !== _.redSqr().redSub(w).cmp(this.zero))
            throw Error("invalid point");
          var P = _.fromRed().isOdd();
          return ((r && !P) || (!r && P)) && (_ = _.redNeg()), this.point(e, _);
        }),
        (EdwardsCurve.prototype.pointFromY = function (e, r) {
          (e = new b(e, 16)).red || (e = e.toRed(this.red));
          var s = e.redSqr(),
            p = s.redSub(this.c2),
            v = s.redMul(this.d).redMul(this.c2).redSub(this.a),
            w = p.redMul(v.redInvm());
          if (0 === w.cmp(this.zero)) {
            if (!r) return this.point(this.zero, e);
            throw Error("invalid point");
          }
          var _ = w.redSqrt();
          if (0 !== _.redSqr().redSub(w).cmp(this.zero))
            throw Error("invalid point");
          return (
            _.fromRed().isOdd() !== r && (_ = _.redNeg()), this.point(_, e)
          );
        }),
        (EdwardsCurve.prototype.validate = function (e) {
          if (e.isInfinity()) return !0;
          e.normalize();
          var r = e.x.redSqr(),
            s = e.y.redSqr(),
            p = r.redMul(this.a).redAdd(s),
            b = this.c2.redMul(this.one.redAdd(this.d.redMul(r).redMul(s)));
          return 0 === p.cmp(b);
        }),
        v(Point, w.BasePoint),
        (EdwardsCurve.prototype.pointFromJSON = function (e) {
          return Point.fromJSON(this, e);
        }),
        (EdwardsCurve.prototype.point = function (e, r, s, p) {
          return new Point(this, e, r, s, p);
        }),
        (Point.fromJSON = function (e, r) {
          return new Point(e, r[0], r[1], r[2]);
        }),
        (Point.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                " z: " +
                this.z.fromRed().toString(16, 2) +
                ">";
        }),
        (Point.prototype.isInfinity = function () {
          return (
            0 === this.x.cmpn(0) &&
            (0 === this.y.cmp(this.z) ||
              (this.zOne && 0 === this.y.cmp(this.curve.c)))
          );
        }),
        (Point.prototype._extDbl = function () {
          var e = this.x.redSqr(),
            r = this.y.redSqr(),
            s = this.z.redSqr();
          s = s.redIAdd(s);
          var p = this.curve._mulA(e),
            b = this.x.redAdd(this.y).redSqr().redISub(e).redISub(r),
            v = p.redAdd(r),
            w = v.redSub(s),
            _ = p.redSub(r),
            P = b.redMul(w),
            S = v.redMul(_),
            I = b.redMul(_),
            A = w.redMul(v);
          return this.curve.point(P, S, A, I);
        }),
        (Point.prototype._projDbl = function () {
          var e,
            r,
            s,
            p,
            b,
            v,
            w = this.x.redAdd(this.y).redSqr(),
            _ = this.x.redSqr(),
            P = this.y.redSqr();
          if (this.curve.twisted) {
            var S = (p = this.curve._mulA(_)).redAdd(P);
            this.zOne
              ? ((e = w.redSub(_).redSub(P).redMul(S.redSub(this.curve.two))),
                (r = S.redMul(p.redSub(P))),
                (s = S.redSqr().redSub(S).redSub(S)))
              : ((b = this.z.redSqr()),
                (v = S.redSub(b).redISub(b)),
                (e = w.redSub(_).redISub(P).redMul(v)),
                (r = S.redMul(p.redSub(P))),
                (s = S.redMul(v)));
          } else
            (p = _.redAdd(P)),
              (b = this.curve._mulC(this.z).redSqr()),
              (v = p.redSub(b).redSub(b)),
              (e = this.curve._mulC(w.redISub(p)).redMul(v)),
              (r = this.curve._mulC(p).redMul(_.redISub(P))),
              (s = p.redMul(v));
          return this.curve.point(e, r, s);
        }),
        (Point.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.extended
            ? this._extDbl()
            : this._projDbl();
        }),
        (Point.prototype._extAdd = function (e) {
          var r = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
            s = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
            p = this.t.redMul(this.curve.dd).redMul(e.t),
            b = this.z.redMul(e.z.redAdd(e.z)),
            v = s.redSub(r),
            w = b.redSub(p),
            _ = b.redAdd(p),
            P = s.redAdd(r),
            S = v.redMul(w),
            I = _.redMul(P),
            A = v.redMul(P),
            R = w.redMul(_);
          return this.curve.point(S, I, R, A);
        }),
        (Point.prototype._projAdd = function (e) {
          var r,
            s,
            p = this.z.redMul(e.z),
            b = p.redSqr(),
            v = this.x.redMul(e.x),
            w = this.y.redMul(e.y),
            _ = this.curve.d.redMul(v).redMul(w),
            P = b.redSub(_),
            S = b.redAdd(_),
            I = this.x
              .redAdd(this.y)
              .redMul(e.x.redAdd(e.y))
              .redISub(v)
              .redISub(w),
            A = p.redMul(P).redMul(I);
          return (
            this.curve.twisted
              ? ((r = p.redMul(S).redMul(w.redSub(this.curve._mulA(v)))),
                (s = P.redMul(S)))
              : ((r = p.redMul(S).redMul(w.redSub(v))),
                (s = this.curve._mulC(P).redMul(S))),
            this.curve.point(A, r, s)
          );
        }),
        (Point.prototype.add = function (e) {
          return this.isInfinity()
            ? e
            : e.isInfinity()
            ? this
            : this.curve.extended
            ? this._extAdd(e)
            : this._projAdd(e);
        }),
        (Point.prototype.mul = function (e) {
          return this._hasDoubles(e)
            ? this.curve._fixedNafMul(this, e)
            : this.curve._wnafMul(this, e);
        }),
        (Point.prototype.mulAdd = function (e, r, s) {
          return this.curve._wnafMulAdd(1, [this, r], [e, s], 2, !1);
        }),
        (Point.prototype.jmulAdd = function (e, r, s) {
          return this.curve._wnafMulAdd(1, [this, r], [e, s], 2, !0);
        }),
        (Point.prototype.normalize = function () {
          if (this.zOne) return this;
          var e = this.z.redInvm();
          return (
            (this.x = this.x.redMul(e)),
            (this.y = this.y.redMul(e)),
            this.t && (this.t = this.t.redMul(e)),
            (this.z = this.curve.one),
            (this.zOne = !0),
            this
          );
        }),
        (Point.prototype.neg = function () {
          return this.curve.point(
            this.x.redNeg(),
            this.y,
            this.z,
            this.t && this.t.redNeg()
          );
        }),
        (Point.prototype.getX = function () {
          return this.normalize(), this.x.fromRed();
        }),
        (Point.prototype.getY = function () {
          return this.normalize(), this.y.fromRed();
        }),
        (Point.prototype.eq = function (e) {
          return (
            this === e ||
            (0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY()))
          );
        }),
        (Point.prototype.eqXToP = function (e) {
          var r = e.toRed(this.curve.red).redMul(this.z);
          if (0 === this.x.cmp(r)) return !0;
          for (var s = e.clone(), p = this.curve.redN.redMul(this.z); ; ) {
            if ((s.iadd(this.curve.n), s.cmp(this.curve.p) >= 0)) return !1;
            if ((r.redIAdd(p), 0 === this.x.cmp(r))) return !0;
          }
        }),
        (Point.prototype.toP = Point.prototype.normalize),
        (Point.prototype.mixedAdd = Point.prototype.add);
    },
    30472: function (e, r, s) {
      "use strict";
      (r.base = s(9568)),
        (r.short = s(39573)),
        (r.mont = s(60208)),
        (r.edwards = s(2629));
    },
    60208: function (e, r, s) {
      "use strict";
      var p = s(1067),
        b = s(35717),
        v = s(9568),
        w = s(63039);
      function MontCurve(e) {
        v.call(this, "mont", e),
          (this.a = new p(e.a, 16).toRed(this.red)),
          (this.b = new p(e.b, 16).toRed(this.red)),
          (this.i4 = new p(4).toRed(this.red).redInvm()),
          (this.two = new p(2).toRed(this.red)),
          (this.a24 = this.i4.redMul(this.a.redAdd(this.two)));
      }
      function Point(e, r, s) {
        v.BasePoint.call(this, e, "projective"),
          null === r && null === s
            ? ((this.x = this.curve.one), (this.z = this.curve.zero))
            : ((this.x = new p(r, 16)),
              (this.z = new p(s, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)));
      }
      b(MontCurve, v),
        (e.exports = MontCurve),
        (MontCurve.prototype.validate = function (e) {
          var r = e.normalize().x,
            s = r.redSqr(),
            p = s.redMul(r).redAdd(s.redMul(this.a)).redAdd(r);
          return 0 === p.redSqrt().redSqr().cmp(p);
        }),
        b(Point, v.BasePoint),
        (MontCurve.prototype.decodePoint = function (e, r) {
          return this.point(w.toArray(e, r), 1);
        }),
        (MontCurve.prototype.point = function (e, r) {
          return new Point(this, e, r);
        }),
        (MontCurve.prototype.pointFromJSON = function (e) {
          return Point.fromJSON(this, e);
        }),
        (Point.prototype.precompute = function () {}),
        (Point.prototype._encode = function () {
          return this.getX().toArray("be", this.curve.p.byteLength());
        }),
        (Point.fromJSON = function (e, r) {
          return new Point(e, r[0], r[1] || e.one);
        }),
        (Point.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " z: " +
                this.z.fromRed().toString(16, 2) +
                ">";
        }),
        (Point.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        }),
        (Point.prototype.dbl = function () {
          var e = this.x.redAdd(this.z).redSqr(),
            r = this.x.redSub(this.z).redSqr(),
            s = e.redSub(r),
            p = e.redMul(r),
            b = s.redMul(r.redAdd(this.curve.a24.redMul(s)));
          return this.curve.point(p, b);
        }),
        (Point.prototype.add = function () {
          throw Error("Not supported on Montgomery curve");
        }),
        (Point.prototype.diffAdd = function (e, r) {
          var s = this.x.redAdd(this.z),
            p = this.x.redSub(this.z),
            b = e.x.redAdd(e.z),
            v = e.x.redSub(e.z).redMul(s),
            w = b.redMul(p),
            _ = r.z.redMul(v.redAdd(w).redSqr()),
            P = r.x.redMul(v.redISub(w).redSqr());
          return this.curve.point(_, P);
        }),
        (Point.prototype.mul = function (e) {
          for (
            var r = e.clone(),
              s = this,
              p = this.curve.point(null, null),
              b = [];
            0 !== r.cmpn(0);
            r.iushrn(1)
          )
            b.push(r.andln(1));
          for (var v = b.length - 1; v >= 0; v--)
            0 === b[v]
              ? ((s = s.diffAdd(p, this)), (p = p.dbl()))
              : ((p = s.diffAdd(p, this)), (s = s.dbl()));
          return p;
        }),
        (Point.prototype.mulAdd = function () {
          throw Error("Not supported on Montgomery curve");
        }),
        (Point.prototype.jumlAdd = function () {
          throw Error("Not supported on Montgomery curve");
        }),
        (Point.prototype.eq = function (e) {
          return 0 === this.getX().cmp(e.getX());
        }),
        (Point.prototype.normalize = function () {
          return (
            (this.x = this.x.redMul(this.z.redInvm())),
            (this.z = this.curve.one),
            this
          );
        }),
        (Point.prototype.getX = function () {
          return this.normalize(), this.x.fromRed();
        });
    },
    39573: function (e, r, s) {
      "use strict";
      var p = s(63039),
        b = s(1067),
        v = s(35717),
        w = s(9568),
        _ = p.assert;
      function ShortCurve(e) {
        w.call(this, "short", e),
          (this.a = new b(e.a, 16).toRed(this.red)),
          (this.b = new b(e.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(e)),
          (this._endoWnafT1 = [, , , ,]),
          (this._endoWnafT2 = [, , , ,]);
      }
      function Point(e, r, s, p) {
        w.BasePoint.call(this, e, "affine"),
          null === r && null === s
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new b(r, 16)),
              (this.y = new b(s, 16)),
              p &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1));
      }
      function JPoint(e, r, s, p) {
        w.BasePoint.call(this, e, "jacobian"),
          null === r && null === s && null === p
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new b(0)))
            : ((this.x = new b(r, 16)),
              (this.y = new b(s, 16)),
              (this.z = new b(p, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one);
      }
      v(ShortCurve, w),
        (e.exports = ShortCurve),
        (ShortCurve.prototype._getEndomorphism = function (e) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            if (e.beta) r = new b(e.beta, 16).toRed(this.red);
            else {
              var r,
                s,
                p,
                v = this._getEndoRoots(this.p);
              r = (r = 0 > v[0].cmp(v[1]) ? v[0] : v[1]).toRed(this.red);
            }
            if (e.lambda) s = new b(e.lambda, 16);
            else {
              var w = this._getEndoRoots(this.n);
              0 === this.g.mul(w[0]).x.cmp(this.g.x.redMul(r))
                ? (s = w[0])
                : ((s = w[1]),
                  _(0 === this.g.mul(s).x.cmp(this.g.x.redMul(r))));
            }
            return (
              (p = e.basis
                ? e.basis.map(function (e) {
                    return { a: new b(e.a, 16), b: new b(e.b, 16) };
                  })
                : this._getEndoBasis(s)),
              { beta: r, lambda: s, basis: p }
            );
          }
        }),
        (ShortCurve.prototype._getEndoRoots = function (e) {
          var r = e === this.p ? this.red : b.mont(e),
            s = new b(2).toRed(r).redInvm(),
            p = s.redNeg(),
            v = new b(3).toRed(r).redNeg().redSqrt().redMul(s);
          return [p.redAdd(v).fromRed(), p.redSub(v).fromRed()];
        }),
        (ShortCurve.prototype._getEndoBasis = function (e) {
          for (
            var r,
              s,
              p,
              v,
              w,
              _,
              P,
              S,
              I,
              A = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              R = e,
              C = this.n.clone(),
              B = new b(1),
              j = new b(0),
              V = new b(0),
              J = new b(1),
              W = 0;
            0 !== R.cmpn(0);

          ) {
            var X = C.div(R);
            (S = C.sub(X.mul(R))), (I = V.sub(X.mul(B)));
            var et = J.sub(X.mul(j));
            if (!p && 0 > S.cmp(A))
              (r = P.neg()), (s = B), (p = S.neg()), (v = I);
            else if (p && 2 == ++W) break;
            (P = S), (C = R), (R = S), (V = B), (B = I), (J = j), (j = et);
          }
          (w = S.neg()), (_ = I);
          var es = p.sqr().add(v.sqr());
          return (
            w.sqr().add(_.sqr()).cmp(es) >= 0 && ((w = r), (_ = s)),
            p.negative && ((p = p.neg()), (v = v.neg())),
            w.negative && ((w = w.neg()), (_ = _.neg())),
            [
              { a: p, b: v },
              { a: w, b: _ },
            ]
          );
        }),
        (ShortCurve.prototype._endoSplit = function (e) {
          var r = this.endo.basis,
            s = r[0],
            p = r[1],
            b = p.b.mul(e).divRound(this.n),
            v = s.b.neg().mul(e).divRound(this.n),
            w = b.mul(s.a),
            _ = v.mul(p.a),
            P = b.mul(s.b),
            S = v.mul(p.b);
          return { k1: e.sub(w).sub(_), k2: P.add(S).neg() };
        }),
        (ShortCurve.prototype.pointFromX = function (e, r) {
          (e = new b(e, 16)).red || (e = e.toRed(this.red));
          var s = e
              .redSqr()
              .redMul(e)
              .redIAdd(e.redMul(this.a))
              .redIAdd(this.b),
            p = s.redSqrt();
          if (0 !== p.redSqr().redSub(s).cmp(this.zero))
            throw Error("invalid point");
          var v = p.fromRed().isOdd();
          return ((r && !v) || (!r && v)) && (p = p.redNeg()), this.point(e, p);
        }),
        (ShortCurve.prototype.validate = function (e) {
          if (e.inf) return !0;
          var r = e.x,
            s = e.y,
            p = this.a.redMul(r),
            b = r.redSqr().redMul(r).redIAdd(p).redIAdd(this.b);
          return 0 === s.redSqr().redISub(b).cmpn(0);
        }),
        (ShortCurve.prototype._endoWnafMulAdd = function (e, r, s) {
          for (
            var p = this._endoWnafT1, b = this._endoWnafT2, v = 0;
            v < e.length;
            v++
          ) {
            var w = this._endoSplit(r[v]),
              _ = e[v],
              P = _._getBeta();
            w.k1.negative && (w.k1.ineg(), (_ = _.neg(!0))),
              w.k2.negative && (w.k2.ineg(), (P = P.neg(!0))),
              (p[2 * v] = _),
              (p[2 * v + 1] = P),
              (b[2 * v] = w.k1),
              (b[2 * v + 1] = w.k2);
          }
          for (
            var S = this._wnafMulAdd(1, p, b, 2 * v, s), I = 0;
            I < 2 * v;
            I++
          )
            (p[I] = null), (b[I] = null);
          return S;
        }),
        v(Point, w.BasePoint),
        (ShortCurve.prototype.point = function (e, r, s) {
          return new Point(this, e, r, s);
        }),
        (ShortCurve.prototype.pointFromJSON = function (e, r) {
          return Point.fromJSON(this, e, r);
        }),
        (Point.prototype._getBeta = function () {
          if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta) return e.beta;
            var r = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y
            );
            if (e) {
              var s = this.curve,
                endoMul = function (e) {
                  return s.point(e.x.redMul(s.endo.beta), e.y);
                };
              (e.beta = r),
                (r.precomputed = {
                  beta: null,
                  naf: e.naf && {
                    wnd: e.naf.wnd,
                    points: e.naf.points.map(endoMul),
                  },
                  doubles: e.doubles && {
                    step: e.doubles.step,
                    points: e.doubles.points.map(endoMul),
                  },
                });
            }
            return r;
          }
        }),
        (Point.prototype.toJSON = function () {
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
        (Point.fromJSON = function (e, r, s) {
          "string" == typeof r && (r = JSON.parse(r));
          var p = e.point(r[0], r[1], s);
          if (!r[2]) return p;
          function obj2point(r) {
            return e.point(r[0], r[1], s);
          }
          var b = r[2];
          return (
            (p.precomputed = {
              beta: null,
              doubles: b.doubles && {
                step: b.doubles.step,
                points: [p].concat(b.doubles.points.map(obj2point)),
              },
              naf: b.naf && {
                wnd: b.naf.wnd,
                points: [p].concat(b.naf.points.map(obj2point)),
              },
            }),
            p
          );
        }),
        (Point.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                ">";
        }),
        (Point.prototype.isInfinity = function () {
          return this.inf;
        }),
        (Point.prototype.add = function (e) {
          if (this.inf) return e;
          if (e.inf) return this;
          if (this.eq(e)) return this.dbl();
          if (this.neg().eq(e) || 0 === this.x.cmp(e.x))
            return this.curve.point(null, null);
          var r = this.y.redSub(e.y);
          0 !== r.cmpn(0) && (r = r.redMul(this.x.redSub(e.x).redInvm()));
          var s = r.redSqr().redISub(this.x).redISub(e.x),
            p = r.redMul(this.x.redSub(s)).redISub(this.y);
          return this.curve.point(s, p);
        }),
        (Point.prototype.dbl = function () {
          if (this.inf) return this;
          var e = this.y.redAdd(this.y);
          if (0 === e.cmpn(0)) return this.curve.point(null, null);
          var r = this.curve.a,
            s = this.x.redSqr(),
            p = e.redInvm(),
            b = s.redAdd(s).redIAdd(s).redIAdd(r).redMul(p),
            v = b.redSqr().redISub(this.x.redAdd(this.x)),
            w = b.redMul(this.x.redSub(v)).redISub(this.y);
          return this.curve.point(v, w);
        }),
        (Point.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (Point.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (Point.prototype.mul = function (e) {
          return ((e = new b(e, 16)), this.isInfinity())
            ? this
            : this._hasDoubles(e)
            ? this.curve._fixedNafMul(this, e)
            : this.curve.endo
            ? this.curve._endoWnafMulAdd([this], [e])
            : this.curve._wnafMul(this, e);
        }),
        (Point.prototype.mulAdd = function (e, r, s) {
          var p = [this, r],
            b = [e, s];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(p, b)
            : this.curve._wnafMulAdd(1, p, b, 2);
        }),
        (Point.prototype.jmulAdd = function (e, r, s) {
          var p = [this, r],
            b = [e, s];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(p, b, !0)
            : this.curve._wnafMulAdd(1, p, b, 2, !0);
        }),
        (Point.prototype.eq = function (e) {
          return (
            this === e ||
            (this.inf === e.inf &&
              (this.inf || (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))))
          );
        }),
        (Point.prototype.neg = function (e) {
          if (this.inf) return this;
          var r = this.curve.point(this.x, this.y.redNeg());
          if (e && this.precomputed) {
            var s = this.precomputed,
              negate = function (e) {
                return e.neg();
              };
            r.precomputed = {
              naf: s.naf && {
                wnd: s.naf.wnd,
                points: s.naf.points.map(negate),
              },
              doubles: s.doubles && {
                step: s.doubles.step,
                points: s.doubles.points.map(negate),
              },
            };
          }
          return r;
        }),
        (Point.prototype.toJ = function () {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        v(JPoint, w.BasePoint),
        (ShortCurve.prototype.jpoint = function (e, r, s) {
          return new JPoint(this, e, r, s);
        }),
        (JPoint.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var e = this.z.redInvm(),
            r = e.redSqr(),
            s = this.x.redMul(r),
            p = this.y.redMul(r).redMul(e);
          return this.curve.point(s, p);
        }),
        (JPoint.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (JPoint.prototype.add = function (e) {
          if (this.isInfinity()) return e;
          if (e.isInfinity()) return this;
          var r = e.z.redSqr(),
            s = this.z.redSqr(),
            p = this.x.redMul(r),
            b = e.x.redMul(s),
            v = this.y.redMul(r.redMul(e.z)),
            w = e.y.redMul(s.redMul(this.z)),
            _ = p.redSub(b),
            P = v.redSub(w);
          if (0 === _.cmpn(0))
            return 0 !== P.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var S = _.redSqr(),
            I = S.redMul(_),
            A = p.redMul(S),
            R = P.redSqr().redIAdd(I).redISub(A).redISub(A),
            C = P.redMul(A.redISub(R)).redISub(v.redMul(I)),
            B = this.z.redMul(e.z).redMul(_);
          return this.curve.jpoint(R, C, B);
        }),
        (JPoint.prototype.mixedAdd = function (e) {
          if (this.isInfinity()) return e.toJ();
          if (e.isInfinity()) return this;
          var r = this.z.redSqr(),
            s = this.x,
            p = e.x.redMul(r),
            b = this.y,
            v = e.y.redMul(r).redMul(this.z),
            w = s.redSub(p),
            _ = b.redSub(v);
          if (0 === w.cmpn(0))
            return 0 !== _.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var P = w.redSqr(),
            S = P.redMul(w),
            I = s.redMul(P),
            A = _.redSqr().redIAdd(S).redISub(I).redISub(I),
            R = _.redMul(I.redISub(A)).redISub(b.redMul(S)),
            C = this.z.redMul(w);
          return this.curve.jpoint(A, R, C);
        }),
        (JPoint.prototype.dblp = function (e) {
          if (0 === e || this.isInfinity()) return this;
          if (!e) return this.dbl();
          if (this.curve.zeroA || this.curve.threeA) {
            var r,
              s = this;
            for (r = 0; r < e; r++) s = s.dbl();
            return s;
          }
          var p = this.curve.a,
            b = this.curve.tinv,
            v = this.x,
            w = this.y,
            _ = this.z,
            P = _.redSqr().redSqr(),
            S = w.redAdd(w);
          for (r = 0; r < e; r++) {
            var I = v.redSqr(),
              A = S.redSqr(),
              R = A.redSqr(),
              C = I.redAdd(I).redIAdd(I).redIAdd(p.redMul(P)),
              B = v.redMul(A),
              j = C.redSqr().redISub(B.redAdd(B)),
              V = B.redISub(j),
              J = C.redMul(V);
            J = J.redIAdd(J).redISub(R);
            var W = S.redMul(_);
            r + 1 < e && (P = P.redMul(R)), (v = j), (_ = W), (S = J);
          }
          return this.curve.jpoint(v, S.redMul(b), _);
        }),
        (JPoint.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl();
        }),
        (JPoint.prototype._zeroDbl = function () {
          if (this.zOne) {
            var e,
              r,
              s,
              p = this.x.redSqr(),
              b = this.y.redSqr(),
              v = b.redSqr(),
              w = this.x.redAdd(b).redSqr().redISub(p).redISub(v);
            w = w.redIAdd(w);
            var _ = p.redAdd(p).redIAdd(p),
              P = _.redSqr().redISub(w).redISub(w),
              S = v.redIAdd(v);
            (S = (S = S.redIAdd(S)).redIAdd(S)),
              (e = P),
              (r = _.redMul(w.redISub(P)).redISub(S)),
              (s = this.y.redAdd(this.y));
          } else {
            var I = this.x.redSqr(),
              A = this.y.redSqr(),
              R = A.redSqr(),
              C = this.x.redAdd(A).redSqr().redISub(I).redISub(R);
            C = C.redIAdd(C);
            var B = I.redAdd(I).redIAdd(I),
              j = B.redSqr(),
              V = R.redIAdd(R);
            (V = (V = V.redIAdd(V)).redIAdd(V)),
              (e = j.redISub(C).redISub(C)),
              (r = B.redMul(C.redISub(e)).redISub(V)),
              (s = (s = this.y.redMul(this.z)).redIAdd(s));
          }
          return this.curve.jpoint(e, r, s);
        }),
        (JPoint.prototype._threeDbl = function () {
          if (this.zOne) {
            var e,
              r,
              s,
              p = this.x.redSqr(),
              b = this.y.redSqr(),
              v = b.redSqr(),
              w = this.x.redAdd(b).redSqr().redISub(p).redISub(v);
            w = w.redIAdd(w);
            var _ = p.redAdd(p).redIAdd(p).redIAdd(this.curve.a),
              P = _.redSqr().redISub(w).redISub(w);
            e = P;
            var S = v.redIAdd(v);
            (S = (S = S.redIAdd(S)).redIAdd(S)),
              (r = _.redMul(w.redISub(P)).redISub(S)),
              (s = this.y.redAdd(this.y));
          } else {
            var I = this.z.redSqr(),
              A = this.y.redSqr(),
              R = this.x.redMul(A),
              C = this.x.redSub(I).redMul(this.x.redAdd(I));
            C = C.redAdd(C).redIAdd(C);
            var B = R.redIAdd(R),
              j = (B = B.redIAdd(B)).redAdd(B);
            (e = C.redSqr().redISub(j)),
              (s = this.y.redAdd(this.z).redSqr().redISub(A).redISub(I));
            var V = A.redSqr();
            (V = (V = (V = V.redIAdd(V)).redIAdd(V)).redIAdd(V)),
              (r = C.redMul(B.redISub(e)).redISub(V));
          }
          return this.curve.jpoint(e, r, s);
        }),
        (JPoint.prototype._dbl = function () {
          var e = this.curve.a,
            r = this.x,
            s = this.y,
            p = this.z,
            b = p.redSqr().redSqr(),
            v = r.redSqr(),
            w = s.redSqr(),
            _ = v.redAdd(v).redIAdd(v).redIAdd(e.redMul(b)),
            P = r.redAdd(r),
            S = (P = P.redIAdd(P)).redMul(w),
            I = _.redSqr().redISub(S.redAdd(S)),
            A = S.redISub(I),
            R = w.redSqr();
          R = (R = (R = R.redIAdd(R)).redIAdd(R)).redIAdd(R);
          var C = _.redMul(A).redISub(R),
            B = s.redAdd(s).redMul(p);
          return this.curve.jpoint(I, C, B);
        }),
        (JPoint.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var e = this.x.redSqr(),
            r = this.y.redSqr(),
            s = this.z.redSqr(),
            p = r.redSqr(),
            b = e.redAdd(e).redIAdd(e),
            v = b.redSqr(),
            w = this.x.redAdd(r).redSqr().redISub(e).redISub(p),
            _ = (w = (w = (w = w.redIAdd(w)).redAdd(w).redIAdd(w)).redISub(
              v
            )).redSqr(),
            P = p.redIAdd(p);
          P = (P = (P = P.redIAdd(P)).redIAdd(P)).redIAdd(P);
          var S = b.redIAdd(w).redSqr().redISub(v).redISub(_).redISub(P),
            I = r.redMul(S);
          I = (I = I.redIAdd(I)).redIAdd(I);
          var A = this.x.redMul(_).redISub(I);
          A = (A = A.redIAdd(A)).redIAdd(A);
          var R = this.y.redMul(S.redMul(P.redISub(S)).redISub(w.redMul(_)));
          R = (R = (R = R.redIAdd(R)).redIAdd(R)).redIAdd(R);
          var C = this.z.redAdd(w).redSqr().redISub(s).redISub(_);
          return this.curve.jpoint(A, R, C);
        }),
        (JPoint.prototype.mul = function (e, r) {
          return (e = new b(e, r)), this.curve._wnafMul(this, e);
        }),
        (JPoint.prototype.eq = function (e) {
          if ("affine" === e.type) return this.eq(e.toJ());
          if (this === e) return !0;
          var r = this.z.redSqr(),
            s = e.z.redSqr();
          if (0 !== this.x.redMul(s).redISub(e.x.redMul(r)).cmpn(0)) return !1;
          var p = r.redMul(this.z),
            b = s.redMul(e.z);
          return 0 === this.y.redMul(b).redISub(e.y.redMul(p)).cmpn(0);
        }),
        (JPoint.prototype.eqXToP = function (e) {
          var r = this.z.redSqr(),
            s = e.toRed(this.curve.red).redMul(r);
          if (0 === this.x.cmp(s)) return !0;
          for (var p = e.clone(), b = this.curve.redN.redMul(r); ; ) {
            if ((p.iadd(this.curve.n), p.cmp(this.curve.p) >= 0)) return !1;
            if ((s.redIAdd(b), 0 === this.x.cmp(s))) return !0;
          }
        }),
        (JPoint.prototype.inspect = function () {
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
        (JPoint.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        });
    },
    1538: function (e, r, s) {
      "use strict";
      var p,
        b = s(33715),
        v = s(30472),
        w = s(63039).assert;
      function PresetCurve(e) {
        "short" === e.type
          ? (this.curve = new v.short(e))
          : "edwards" === e.type
          ? (this.curve = new v.edwards(e))
          : (this.curve = new v.mont(e)),
          (this.g = this.curve.g),
          (this.n = this.curve.n),
          (this.hash = e.hash),
          w(this.g.validate(), "Invalid curve"),
          w(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
      }
      function defineCurve(e, s) {
        Object.defineProperty(r, e, {
          configurable: !0,
          enumerable: !0,
          get: function () {
            var p = new PresetCurve(s);
            return (
              Object.defineProperty(r, e, {
                configurable: !0,
                enumerable: !0,
                value: p,
              }),
              p
            );
          },
        });
      }
      (r.PresetCurve = PresetCurve),
        defineCurve("p192", {
          type: "short",
          prime: "p192",
          p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
          a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
          b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
          n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
          hash: b.sha256,
          gRed: !1,
          g: [
            "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
            "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
          ],
        }),
        defineCurve("p224", {
          type: "short",
          prime: "p224",
          p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
          a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
          b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
          n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
          hash: b.sha256,
          gRed: !1,
          g: [
            "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
            "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
          ],
        }),
        defineCurve("p256", {
          type: "short",
          prime: null,
          p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
          a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
          b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
          n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
          hash: b.sha256,
          gRed: !1,
          g: [
            "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
            "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
          ],
        }),
        defineCurve("p384", {
          type: "short",
          prime: null,
          p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
          a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
          b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
          n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
          hash: b.sha384,
          gRed: !1,
          g: [
            "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
            "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
          ],
        }),
        defineCurve("p521", {
          type: "short",
          prime: null,
          p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
          a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
          b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
          n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
          hash: b.sha512,
          gRed: !1,
          g: [
            "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
            "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
          ],
        }),
        defineCurve("curve25519", {
          type: "mont",
          prime: "p25519",
          p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
          a: "76d06",
          b: "1",
          n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
          hash: b.sha256,
          gRed: !1,
          g: ["9"],
        }),
        defineCurve("ed25519", {
          type: "edwards",
          prime: "p25519",
          p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
          a: "-1",
          c: "1",
          d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
          n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
          hash: b.sha256,
          gRed: !1,
          g: [
            "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
            "6666666666666666666666666666666666666666666666666666666666666658",
          ],
        });
      try {
        p = s(69008);
      } catch (e) {
        p = void 0;
      }
      defineCurve("secp256k1", {
        type: "short",
        prime: "k256",
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
        a: "0",
        b: "7",
        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
        h: "1",
        hash: b.sha256,
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
          p,
        ],
      });
    },
    57387: function (e, r, s) {
      "use strict";
      var p = s(1067),
        b = s(2156),
        v = s(63039),
        w = s(1538),
        _ = s(29931),
        P = v.assert,
        S = s(63896),
        I = s(25207);
      function EC(e) {
        if (!(this instanceof EC)) return new EC(e);
        "string" == typeof e &&
          (P(Object.prototype.hasOwnProperty.call(w, e), "Unknown curve " + e),
          (e = w[e])),
          e instanceof w.PresetCurve && (e = { curve: e }),
          (this.curve = e.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = e.curve.g),
          this.g.precompute(e.curve.n.bitLength() + 1),
          (this.hash = e.hash || e.curve.hash);
      }
      (e.exports = EC),
        (EC.prototype.keyPair = function (e) {
          return new S(this, e);
        }),
        (EC.prototype.keyFromPrivate = function (e, r) {
          return S.fromPrivate(this, e, r);
        }),
        (EC.prototype.keyFromPublic = function (e, r) {
          return S.fromPublic(this, e, r);
        }),
        (EC.prototype.genKeyPair = function (e) {
          e || (e = {});
          for (
            var r = new b({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || "utf8",
                entropy: e.entropy || _(this.hash.hmacStrength),
                entropyEnc: (e.entropy && e.entropyEnc) || "utf8",
                nonce: this.n.toArray(),
              }),
              s = this.n.byteLength(),
              v = this.n.sub(new p(2));
            ;

          ) {
            var w = new p(r.generate(s));
            if (!(w.cmp(v) > 0)) return w.iaddn(1), this.keyFromPrivate(w);
          }
        }),
        (EC.prototype._truncateToN = function (e, r) {
          var s = 8 * e.byteLength() - this.n.bitLength();
          return (s > 0 && (e = e.ushrn(s)), !r && e.cmp(this.n) >= 0)
            ? e.sub(this.n)
            : e;
        }),
        (EC.prototype.sign = function (e, r, s, v) {
          "object" == typeof s && ((v = s), (s = null)),
            v || (v = {}),
            (r = this.keyFromPrivate(r, s)),
            (e = this._truncateToN(new p(e, 16)));
          for (
            var w = this.n.byteLength(),
              _ = r.getPrivate().toArray("be", w),
              P = e.toArray("be", w),
              S = new b({
                hash: this.hash,
                entropy: _,
                nonce: P,
                pers: v.pers,
                persEnc: v.persEnc || "utf8",
              }),
              A = this.n.sub(new p(1)),
              R = 0;
            ;
            R++
          ) {
            var C = v.k ? v.k(R) : new p(S.generate(this.n.byteLength()));
            if (
              !(0 >= (C = this._truncateToN(C, !0)).cmpn(1) || C.cmp(A) >= 0)
            ) {
              var B = this.g.mul(C);
              if (!B.isInfinity()) {
                var j = B.getX(),
                  V = j.umod(this.n);
                if (0 !== V.cmpn(0)) {
                  var J = C.invm(this.n).mul(V.mul(r.getPrivate()).iadd(e));
                  if (0 !== (J = J.umod(this.n)).cmpn(0)) {
                    var W =
                      (B.getY().isOdd() ? 1 : 0) | (0 !== j.cmp(V) ? 2 : 0);
                    return (
                      v.canonical &&
                        J.cmp(this.nh) > 0 &&
                        ((J = this.n.sub(J)), (W ^= 1)),
                      new I({ r: V, s: J, recoveryParam: W })
                    );
                  }
                }
              }
            }
          }
        }),
        (EC.prototype.verify = function (e, r, s, b) {
          (e = this._truncateToN(new p(e, 16))), (s = this.keyFromPublic(s, b));
          var v,
            w = (r = new I(r, "hex")).r,
            _ = r.s;
          if (
            0 > w.cmpn(1) ||
            w.cmp(this.n) >= 0 ||
            0 > _.cmpn(1) ||
            _.cmp(this.n) >= 0
          )
            return !1;
          var P = _.invm(this.n),
            S = P.mul(e).umod(this.n),
            A = P.mul(w).umod(this.n);
          return this.curve._maxwellTrick
            ? !(v = this.g.jmulAdd(S, s.getPublic(), A)).isInfinity() &&
                v.eqXToP(w)
            : !(v = this.g.mulAdd(S, s.getPublic(), A)).isInfinity() &&
                0 === v.getX().umod(this.n).cmp(w);
        }),
        (EC.prototype.recoverPubKey = function (e, r, s, b) {
          P((3 & s) === s, "The recovery param is more than two bits"),
            (r = new I(r, b));
          var v = this.n,
            w = new p(e),
            _ = r.r,
            S = r.s,
            A = 1 & s,
            R = s >> 1;
          if (_.cmp(this.curve.p.umod(this.curve.n)) >= 0 && R)
            throw Error("Unable to find sencond key candinate");
          _ = R
            ? this.curve.pointFromX(_.add(this.curve.n), A)
            : this.curve.pointFromX(_, A);
          var C = r.r.invm(v),
            B = v.sub(w).mul(C).umod(v),
            j = S.mul(C).umod(v);
          return this.g.mulAdd(B, _, j);
        }),
        (EC.prototype.getKeyRecoveryParam = function (e, r, s, p) {
          if (null !== (r = new I(r, p)).recoveryParam) return r.recoveryParam;
          for (var b, v = 0; v < 4; v++) {
            try {
              b = this.recoverPubKey(e, r, v);
            } catch (e) {
              continue;
            }
            if (b.eq(s)) return v;
          }
          throw Error("Unable to find valid recovery factor");
        });
    },
    63896: function (e, r, s) {
      "use strict";
      var p = s(1067),
        b = s(63039).assert;
      function KeyPair(e, r) {
        (this.ec = e),
          (this.priv = null),
          (this.pub = null),
          r.priv && this._importPrivate(r.priv, r.privEnc),
          r.pub && this._importPublic(r.pub, r.pubEnc);
      }
      (e.exports = KeyPair),
        (KeyPair.fromPublic = function (e, r, s) {
          return r instanceof KeyPair
            ? r
            : new KeyPair(e, { pub: r, pubEnc: s });
        }),
        (KeyPair.fromPrivate = function (e, r, s) {
          return r instanceof KeyPair
            ? r
            : new KeyPair(e, { priv: r, privEnc: s });
        }),
        (KeyPair.prototype.validate = function () {
          var e = this.getPublic();
          return e.isInfinity()
            ? { result: !1, reason: "Invalid public key" }
            : e.validate()
            ? e.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: "Public key * N != O" }
            : { result: !1, reason: "Public key is not a point" };
        }),
        (KeyPair.prototype.getPublic = function (e, r) {
          return ("string" == typeof e && ((r = e), (e = null)),
          this.pub || (this.pub = this.ec.g.mul(this.priv)),
          r)
            ? this.pub.encode(r, e)
            : this.pub;
        }),
        (KeyPair.prototype.getPrivate = function (e) {
          return "hex" === e ? this.priv.toString(16, 2) : this.priv;
        }),
        (KeyPair.prototype._importPrivate = function (e, r) {
          (this.priv = new p(e, r || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        (KeyPair.prototype._importPublic = function (e, r) {
          if (e.x || e.y) {
            "mont" === this.ec.curve.type
              ? b(e.x, "Need x coordinate")
              : ("short" === this.ec.curve.type ||
                  "edwards" === this.ec.curve.type) &&
                b(e.x && e.y, "Need both x and y coordinate"),
              (this.pub = this.ec.curve.point(e.x, e.y));
            return;
          }
          this.pub = this.ec.curve.decodePoint(e, r);
        }),
        (KeyPair.prototype.derive = function (e) {
          return (
            e.validate() || b(e.validate(), "public point not validated"),
            e.mul(this.priv).getX()
          );
        }),
        (KeyPair.prototype.sign = function (e, r, s) {
          return this.ec.sign(e, this, r, s);
        }),
        (KeyPair.prototype.verify = function (e, r) {
          return this.ec.verify(e, r, this);
        }),
        (KeyPair.prototype.inspect = function () {
          return (
            "<Key priv: " +
            (this.priv && this.priv.toString(16, 2)) +
            " pub: " +
            (this.pub && this.pub.inspect()) +
            " >"
          );
        });
    },
    25207: function (e, r, s) {
      "use strict";
      var p = s(1067),
        b = s(63039),
        v = b.assert;
      function Signature(e, r) {
        if (e instanceof Signature) return e;
        this._importDER(e, r) ||
          (v(e.r && e.s, "Signature without r or s"),
          (this.r = new p(e.r, 16)),
          (this.s = new p(e.s, 16)),
          void 0 === e.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = e.recoveryParam));
      }
      function Position() {
        this.place = 0;
      }
      function getLength(e, r) {
        var s = e[r.place++];
        if (!(128 & s)) return s;
        var p = 15 & s;
        if (0 === p || p > 4 || 0 === e[r.place]) return !1;
        for (var b = 0, v = 0, w = r.place; v < p; v++, w++)
          (b <<= 8), (b |= e[w]), (b >>>= 0);
        return !(b <= 127) && ((r.place = w), b);
      }
      function rmPadding(e) {
        for (var r = 0, s = e.length - 1; !e[r] && !(128 & e[r + 1]) && r < s; )
          r++;
        return 0 === r ? e : e.slice(r);
      }
      function constructLength(e, r) {
        if (r < 128) {
          e.push(r);
          return;
        }
        var s = 1 + ((Math.log(r) / Math.LN2) >>> 3);
        for (e.push(128 | s); --s; ) e.push((r >>> (s << 3)) & 255);
        e.push(r);
      }
      (e.exports = Signature),
        (Signature.prototype._importDER = function (e, r) {
          e = b.toArray(e, r);
          var s = new Position();
          if (48 !== e[s.place++]) return !1;
          var v = getLength(e, s);
          if (!1 === v || v + s.place !== e.length || 2 !== e[s.place++])
            return !1;
          var w = getLength(e, s);
          if (!1 === w || (128 & e[s.place]) != 0) return !1;
          var _ = e.slice(s.place, w + s.place);
          if (((s.place += w), 2 !== e[s.place++])) return !1;
          var P = getLength(e, s);
          if (!1 === P || e.length !== P + s.place || (128 & e[s.place]) != 0)
            return !1;
          var S = e.slice(s.place, P + s.place);
          if (0 === _[0]) {
            if (!(128 & _[1])) return !1;
            _ = _.slice(1);
          }
          if (0 === S[0]) {
            if (!(128 & S[1])) return !1;
            S = S.slice(1);
          }
          return (
            (this.r = new p(_)),
            (this.s = new p(S)),
            (this.recoveryParam = null),
            !0
          );
        }),
        (Signature.prototype.toDER = function (e) {
          var r = this.r.toArray(),
            s = this.s.toArray();
          for (
            128 & r[0] && (r = [0].concat(r)),
              128 & s[0] && (s = [0].concat(s)),
              r = rmPadding(r),
              s = rmPadding(s);
            !s[0] && !(128 & s[1]);

          )
            s = s.slice(1);
          var p = [2];
          constructLength(p, r.length),
            (p = p.concat(r)).push(2),
            constructLength(p, s.length);
          var v = p.concat(s),
            w = [48];
          return (
            constructLength(w, v.length), (w = w.concat(v)), b.encode(w, e)
          );
        });
    },
    58625: function (e, r, s) {
      "use strict";
      var p = s(33715),
        b = s(1538),
        v = s(63039),
        w = v.assert,
        _ = v.parseBytes,
        P = s(28509),
        S = s(73022);
      function EDDSA(e) {
        if (
          (w("ed25519" === e, "only tested with ed25519 so far"),
          !(this instanceof EDDSA))
        )
          return new EDDSA(e);
        (e = b[e].curve),
          (this.curve = e),
          (this.g = e.g),
          this.g.precompute(e.n.bitLength() + 1),
          (this.pointClass = e.point().constructor),
          (this.encodingLength = Math.ceil(e.n.bitLength() / 8)),
          (this.hash = p.sha512);
      }
      (e.exports = EDDSA),
        (EDDSA.prototype.sign = function (e, r) {
          e = _(e);
          var s = this.keyFromSecret(r),
            p = this.hashInt(s.messagePrefix(), e),
            b = this.g.mul(p),
            v = this.encodePoint(b),
            w = this.hashInt(v, s.pubBytes(), e).mul(s.priv()),
            P = p.add(w).umod(this.curve.n);
          return this.makeSignature({ R: b, S: P, Rencoded: v });
        }),
        (EDDSA.prototype.verify = function (e, r, s) {
          if (
            ((e = _(e)),
            (r = this.makeSignature(r)).S().gte(r.eddsa.curve.n) ||
              r.S().isNeg())
          )
            return !1;
          var p = this.keyFromPublic(s),
            b = this.hashInt(r.Rencoded(), p.pubBytes(), e),
            v = this.g.mul(r.S());
          return r.R().add(p.pub().mul(b)).eq(v);
        }),
        (EDDSA.prototype.hashInt = function () {
          for (var e = this.hash(), r = 0; r < arguments.length; r++)
            e.update(arguments[r]);
          return v.intFromLE(e.digest()).umod(this.curve.n);
        }),
        (EDDSA.prototype.keyFromPublic = function (e) {
          return P.fromPublic(this, e);
        }),
        (EDDSA.prototype.keyFromSecret = function (e) {
          return P.fromSecret(this, e);
        }),
        (EDDSA.prototype.makeSignature = function (e) {
          return e instanceof S ? e : new S(this, e);
        }),
        (EDDSA.prototype.encodePoint = function (e) {
          var r = e.getY().toArray("le", this.encodingLength);
          return (r[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0), r;
        }),
        (EDDSA.prototype.decodePoint = function (e) {
          var r = (e = v.parseBytes(e)).length - 1,
            s = e.slice(0, r).concat(-129 & e[r]),
            p = (128 & e[r]) != 0,
            b = v.intFromLE(s);
          return this.curve.pointFromY(b, p);
        }),
        (EDDSA.prototype.encodeInt = function (e) {
          return e.toArray("le", this.encodingLength);
        }),
        (EDDSA.prototype.decodeInt = function (e) {
          return v.intFromLE(e);
        }),
        (EDDSA.prototype.isPoint = function (e) {
          return e instanceof this.pointClass;
        });
    },
    28509: function (e, r, s) {
      "use strict";
      var p = s(63039),
        b = p.assert,
        v = p.parseBytes,
        w = p.cachedProperty;
      function KeyPair(e, r) {
        (this.eddsa = e),
          (this._secret = v(r.secret)),
          e.isPoint(r.pub) ? (this._pub = r.pub) : (this._pubBytes = v(r.pub));
      }
      (KeyPair.fromPublic = function (e, r) {
        return r instanceof KeyPair ? r : new KeyPair(e, { pub: r });
      }),
        (KeyPair.fromSecret = function (e, r) {
          return r instanceof KeyPair ? r : new KeyPair(e, { secret: r });
        }),
        (KeyPair.prototype.secret = function () {
          return this._secret;
        }),
        w(KeyPair, "pubBytes", function () {
          return this.eddsa.encodePoint(this.pub());
        }),
        w(KeyPair, "pub", function () {
          return this._pubBytes
            ? this.eddsa.decodePoint(this._pubBytes)
            : this.eddsa.g.mul(this.priv());
        }),
        w(KeyPair, "privBytes", function () {
          var e = this.eddsa,
            r = this.hash(),
            s = e.encodingLength - 1,
            p = r.slice(0, e.encodingLength);
          return (p[0] &= 248), (p[s] &= 127), (p[s] |= 64), p;
        }),
        w(KeyPair, "priv", function () {
          return this.eddsa.decodeInt(this.privBytes());
        }),
        w(KeyPair, "hash", function () {
          return this.eddsa.hash().update(this.secret()).digest();
        }),
        w(KeyPair, "messagePrefix", function () {
          return this.hash().slice(this.eddsa.encodingLength);
        }),
        (KeyPair.prototype.sign = function (e) {
          return (
            b(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this)
          );
        }),
        (KeyPair.prototype.verify = function (e, r) {
          return this.eddsa.verify(e, r, this);
        }),
        (KeyPair.prototype.getSecret = function (e) {
          return (
            b(this._secret, "KeyPair is public only"),
            p.encode(this.secret(), e)
          );
        }),
        (KeyPair.prototype.getPublic = function (e) {
          return p.encode(this.pubBytes(), e);
        }),
        (e.exports = KeyPair);
    },
    73022: function (e, r, s) {
      "use strict";
      var p = s(1067),
        b = s(63039),
        v = b.assert,
        w = b.cachedProperty,
        _ = b.parseBytes;
      function Signature(e, r) {
        (this.eddsa = e),
          "object" != typeof r && (r = _(r)),
          Array.isArray(r) &&
            (v(r.length === 2 * e.encodingLength, "Signature has invalid size"),
            (r = {
              R: r.slice(0, e.encodingLength),
              S: r.slice(e.encodingLength),
            })),
          v(r.R && r.S, "Signature without R or S"),
          e.isPoint(r.R) && (this._R = r.R),
          r.S instanceof p && (this._S = r.S),
          (this._Rencoded = Array.isArray(r.R) ? r.R : r.Rencoded),
          (this._Sencoded = Array.isArray(r.S) ? r.S : r.Sencoded);
      }
      w(Signature, "S", function () {
        return this.eddsa.decodeInt(this.Sencoded());
      }),
        w(Signature, "R", function () {
          return this.eddsa.decodePoint(this.Rencoded());
        }),
        w(Signature, "Rencoded", function () {
          return this.eddsa.encodePoint(this.R());
        }),
        w(Signature, "Sencoded", function () {
          return this.eddsa.encodeInt(this.S());
        }),
        (Signature.prototype.toBytes = function () {
          return this.Rencoded().concat(this.Sencoded());
        }),
        (Signature.prototype.toHex = function () {
          return b.encode(this.toBytes(), "hex").toUpperCase();
        }),
        (e.exports = Signature);
    },
    69008: function (e) {
      e.exports = {
        doubles: {
          step: 4,
          points: [
            [
              "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
              "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821",
            ],
            [
              "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
              "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf",
            ],
            [
              "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
              "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695",
            ],
            [
              "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
              "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9",
            ],
            [
              "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
              "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36",
            ],
            [
              "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
              "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f",
            ],
            [
              "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
              "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999",
            ],
            [
              "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
              "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09",
            ],
            [
              "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
              "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d",
            ],
            [
              "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
              "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088",
            ],
            [
              "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
              "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d",
            ],
            [
              "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
              "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8",
            ],
            [
              "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
              "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a",
            ],
            [
              "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
              "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453",
            ],
            [
              "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
              "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160",
            ],
            [
              "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
              "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0",
            ],
            [
              "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
              "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6",
            ],
            [
              "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
              "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589",
            ],
            [
              "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
              "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17",
            ],
            [
              "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
              "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda",
            ],
            [
              "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
              "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd",
            ],
            [
              "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
              "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2",
            ],
            [
              "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
              "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6",
            ],
            [
              "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
              "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f",
            ],
            [
              "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
              "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01",
            ],
            [
              "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
              "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3",
            ],
            [
              "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
              "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f",
            ],
            [
              "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
              "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7",
            ],
            [
              "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
              "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78",
            ],
            [
              "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
              "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1",
            ],
            [
              "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
              "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150",
            ],
            [
              "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
              "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82",
            ],
            [
              "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
              "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc",
            ],
            [
              "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
              "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b",
            ],
            [
              "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
              "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51",
            ],
            [
              "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
              "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45",
            ],
            [
              "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
              "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120",
            ],
            [
              "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
              "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84",
            ],
            [
              "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
              "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d",
            ],
            [
              "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
              "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d",
            ],
            [
              "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
              "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8",
            ],
            [
              "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
              "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8",
            ],
            [
              "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
              "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac",
            ],
            [
              "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
              "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f",
            ],
            [
              "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
              "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962",
            ],
            [
              "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
              "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907",
            ],
            [
              "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
              "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec",
            ],
            [
              "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
              "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d",
            ],
            [
              "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
              "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414",
            ],
            [
              "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
              "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd",
            ],
            [
              "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
              "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0",
            ],
            [
              "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
              "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811",
            ],
            [
              "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
              "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1",
            ],
            [
              "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
              "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c",
            ],
            [
              "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
              "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73",
            ],
            [
              "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
              "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd",
            ],
            [
              "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
              "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405",
            ],
            [
              "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
              "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589",
            ],
            [
              "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
              "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e",
            ],
            [
              "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
              "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27",
            ],
            [
              "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
              "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1",
            ],
            [
              "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
              "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482",
            ],
            [
              "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
              "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945",
            ],
            [
              "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
              "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573",
            ],
            [
              "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
              "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82",
            ],
          ],
        },
        naf: {
          wnd: 7,
          points: [
            [
              "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
              "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672",
            ],
            [
              "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
              "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6",
            ],
            [
              "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
              "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da",
            ],
            [
              "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
              "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37",
            ],
            [
              "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
              "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b",
            ],
            [
              "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
              "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81",
            ],
            [
              "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
              "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58",
            ],
            [
              "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
              "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77",
            ],
            [
              "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
              "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a",
            ],
            [
              "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
              "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c",
            ],
            [
              "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
              "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67",
            ],
            [
              "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
              "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402",
            ],
            [
              "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
              "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55",
            ],
            [
              "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
              "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482",
            ],
            [
              "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
              "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82",
            ],
            [
              "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
              "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396",
            ],
            [
              "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
              "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49",
            ],
            [
              "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
              "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf",
            ],
            [
              "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
              "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a",
            ],
            [
              "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
              "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7",
            ],
            [
              "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
              "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933",
            ],
            [
              "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
              "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a",
            ],
            [
              "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
              "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6",
            ],
            [
              "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
              "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37",
            ],
            [
              "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
              "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e",
            ],
            [
              "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
              "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6",
            ],
            [
              "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
              "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476",
            ],
            [
              "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
              "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40",
            ],
            [
              "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
              "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61",
            ],
            [
              "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
              "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683",
            ],
            [
              "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
              "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5",
            ],
            [
              "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
              "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b",
            ],
            [
              "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
              "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417",
            ],
            [
              "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
              "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868",
            ],
            [
              "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
              "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a",
            ],
            [
              "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
              "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6",
            ],
            [
              "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
              "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996",
            ],
            [
              "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
              "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e",
            ],
            [
              "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
              "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d",
            ],
            [
              "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
              "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2",
            ],
            [
              "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
              "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e",
            ],
            [
              "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
              "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437",
            ],
            [
              "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
              "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311",
            ],
            [
              "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
              "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4",
            ],
            [
              "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
              "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575",
            ],
            [
              "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
              "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d",
            ],
            [
              "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
              "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d",
            ],
            [
              "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
              "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629",
            ],
            [
              "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
              "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06",
            ],
            [
              "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
              "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374",
            ],
            [
              "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
              "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee",
            ],
            [
              "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
              "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1",
            ],
            [
              "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
              "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b",
            ],
            [
              "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
              "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661",
            ],
            [
              "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
              "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6",
            ],
            [
              "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
              "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e",
            ],
            [
              "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
              "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d",
            ],
            [
              "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
              "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc",
            ],
            [
              "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
              "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4",
            ],
            [
              "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
              "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c",
            ],
            [
              "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
              "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b",
            ],
            [
              "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
              "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913",
            ],
            [
              "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
              "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154",
            ],
            [
              "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
              "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865",
            ],
            [
              "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
              "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc",
            ],
            [
              "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
              "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224",
            ],
            [
              "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
              "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e",
            ],
            [
              "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
              "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6",
            ],
            [
              "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
              "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511",
            ],
            [
              "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
              "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b",
            ],
            [
              "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
              "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2",
            ],
            [
              "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
              "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c",
            ],
            [
              "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
              "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3",
            ],
            [
              "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
              "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d",
            ],
            [
              "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
              "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700",
            ],
            [
              "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
              "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4",
            ],
            [
              "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
              "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196",
            ],
            [
              "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
              "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4",
            ],
            [
              "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
              "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257",
            ],
            [
              "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
              "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13",
            ],
            [
              "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
              "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096",
            ],
            [
              "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
              "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38",
            ],
            [
              "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
              "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f",
            ],
            [
              "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
              "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448",
            ],
            [
              "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
              "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a",
            ],
            [
              "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
              "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4",
            ],
            [
              "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
              "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437",
            ],
            [
              "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
              "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7",
            ],
            [
              "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
              "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d",
            ],
            [
              "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
              "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a",
            ],
            [
              "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
              "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54",
            ],
            [
              "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
              "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77",
            ],
            [
              "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
              "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517",
            ],
            [
              "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
              "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10",
            ],
            [
              "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
              "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125",
            ],
            [
              "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
              "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e",
            ],
            [
              "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
              "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1",
            ],
            [
              "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
              "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2",
            ],
            [
              "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
              "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423",
            ],
            [
              "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
              "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8",
            ],
            [
              "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
              "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758",
            ],
            [
              "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
              "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375",
            ],
            [
              "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
              "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d",
            ],
            [
              "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
              "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec",
            ],
            [
              "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
              "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0",
            ],
            [
              "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
              "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c",
            ],
            [
              "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
              "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4",
            ],
            [
              "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
              "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f",
            ],
            [
              "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
              "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649",
            ],
            [
              "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
              "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826",
            ],
            [
              "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
              "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5",
            ],
            [
              "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
              "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87",
            ],
            [
              "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
              "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b",
            ],
            [
              "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
              "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc",
            ],
            [
              "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
              "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c",
            ],
            [
              "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
              "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f",
            ],
            [
              "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
              "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a",
            ],
            [
              "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
              "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46",
            ],
            [
              "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
              "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f",
            ],
            [
              "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
              "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03",
            ],
            [
              "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
              "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08",
            ],
            [
              "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
              "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8",
            ],
            [
              "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
              "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373",
            ],
            [
              "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
              "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3",
            ],
            [
              "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
              "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8",
            ],
            [
              "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
              "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1",
            ],
            [
              "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
              "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9",
            ],
          ],
        },
      };
    },
    63039: function (e, r, s) {
      "use strict";
      var p = s(1067),
        b = s(79746),
        v = s(34504);
      (r.assert = b),
        (r.toArray = v.toArray),
        (r.zero2 = v.zero2),
        (r.toHex = v.toHex),
        (r.encode = v.encode),
        (r.getNAF = function (e, r, s) {
          var p = Array(Math.max(e.bitLength(), s) + 1);
          for (w = 0; w < p.length; w += 1) p[w] = 0;
          var b = 1 << (r + 1),
            v = e.clone();
          for (w = 0; w < p.length; w++) {
            var w,
              _,
              P = v.andln(b - 1);
            v.isOdd()
              ? ((_ = P > (b >> 1) - 1 ? (b >> 1) - P : P), v.isubn(_))
              : (_ = 0),
              (p[w] = _),
              v.iushrn(1);
          }
          return p;
        }),
        (r.getJSF = function (e, r) {
          var s = [[], []];
          (e = e.clone()), (r = r.clone());
          for (var p = 0, b = 0; e.cmpn(-p) > 0 || r.cmpn(-b) > 0; ) {
            var v,
              w,
              _,
              P = (e.andln(3) + p) & 3,
              S = (r.andln(3) + b) & 3;
            3 === P && (P = -1),
              3 === S && (S = -1),
              (w =
                (1 & P) == 0
                  ? 0
                  : (3 == (v = (e.andln(7) + p) & 7) || 5 === v) && 2 === S
                  ? -P
                  : P),
              s[0].push(w),
              (_ =
                (1 & S) == 0
                  ? 0
                  : (3 == (v = (r.andln(7) + b) & 7) || 5 === v) && 2 === P
                  ? -S
                  : S),
              s[1].push(_),
              2 * p === w + 1 && (p = 1 - p),
              2 * b === _ + 1 && (b = 1 - b),
              e.iushrn(1),
              r.iushrn(1);
          }
          return s;
        }),
        (r.cachedProperty = function (e, r, s) {
          var p = "_" + r;
          e.prototype[r] = function () {
            return void 0 !== this[p] ? this[p] : (this[p] = s.call(this));
          };
        }),
        (r.parseBytes = function (e) {
          return "string" == typeof e ? r.toArray(e, "hex") : e;
        }),
        (r.intFromLE = function (e) {
          return new p(e, "hex", "le");
        });
    },
    29931: function (e, r, s) {
      var p;
      function Rand(e) {
        this.rand = e;
      }
      if (
        ((e.exports = function (e) {
          return p || (p = new Rand(null)), p.generate(e);
        }),
        (e.exports.Rand = Rand),
        (Rand.prototype.generate = function (e) {
          return this._rand(e);
        }),
        (Rand.prototype._rand = function (e) {
          if (this.rand.getBytes) return this.rand.getBytes(e);
          for (var r = new Uint8Array(e), s = 0; s < r.length; s++)
            r[s] = this.rand.getByte();
          return r;
        }),
        "object" == typeof self)
      )
        self.crypto && self.crypto.getRandomValues
          ? (Rand.prototype._rand = function (e) {
              var r = new Uint8Array(e);
              return self.crypto.getRandomValues(r), r;
            })
          : self.msCrypto && self.msCrypto.getRandomValues
          ? (Rand.prototype._rand = function (e) {
              var r = new Uint8Array(e);
              return self.msCrypto.getRandomValues(r), r;
            })
          : "object" == typeof window &&
            (Rand.prototype._rand = function () {
              throw Error("Not implemented yet");
            });
      else
        try {
          var b = s(89214);
          if ("function" != typeof b.randomBytes) throw Error("Not supported");
          Rand.prototype._rand = function (e) {
            return b.randomBytes(e);
          };
        } catch (e) {}
    },
    2156: function (e, r, s) {
      "use strict";
      var p = s(33715),
        b = s(34504),
        v = s(79746);
      function HmacDRBG(e) {
        if (!(this instanceof HmacDRBG)) return new HmacDRBG(e);
        (this.hash = e.hash),
          (this.predResist = !!e.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = e.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var r = b.toArray(e.entropy, e.entropyEnc || "hex"),
          s = b.toArray(e.nonce, e.nonceEnc || "hex"),
          p = b.toArray(e.pers, e.persEnc || "hex");
        v(
          r.length >= this.minEntropy / 8,
          "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
        ),
          this._init(r, s, p);
      }
      (e.exports = HmacDRBG),
        (HmacDRBG.prototype._init = function (e, r, s) {
          var p = e.concat(r).concat(s);
          (this.K = Array(this.outLen / 8)), (this.V = Array(this.outLen / 8));
          for (var b = 0; b < this.V.length; b++)
            (this.K[b] = 0), (this.V[b] = 1);
          this._update(p),
            (this._reseed = 1),
            (this.reseedInterval = 281474976710656);
        }),
        (HmacDRBG.prototype._hmac = function () {
          return new p.hmac(this.hash, this.K);
        }),
        (HmacDRBG.prototype._update = function (e) {
          var r = this._hmac().update(this.V).update([0]);
          e && (r = r.update(e)),
            (this.K = r.digest()),
            (this.V = this._hmac().update(this.V).digest()),
            e &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(e)
                .digest()),
              (this.V = this._hmac().update(this.V).digest()));
        }),
        (HmacDRBG.prototype.reseed = function (e, r, s, p) {
          "string" != typeof r && ((p = s), (s = r), (r = null)),
            (e = b.toArray(e, r)),
            (s = b.toArray(s, p)),
            v(
              e.length >= this.minEntropy / 8,
              "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
            ),
            this._update(e.concat(s || [])),
            (this._reseed = 1);
        }),
        (HmacDRBG.prototype.generate = function (e, r, s, p) {
          if (this._reseed > this.reseedInterval)
            throw Error("Reseed is required");
          "string" != typeof r && ((p = s), (s = r), (r = null)),
            s && ((s = b.toArray(s, p || "hex")), this._update(s));
          for (var v = []; v.length < e; )
            (this.V = this._hmac().update(this.V).digest()),
              (v = v.concat(this.V));
          var w = v.slice(0, e);
          return this._update(s), this._reseed++, b.encode(w, r);
        });
    },
    34504: function (e, r) {
      "use strict";
      function zero2(e) {
        return 1 === e.length ? "0" + e : e;
      }
      function toHex(e) {
        for (var r = "", s = 0; s < e.length; s++)
          r += zero2(e[s].toString(16));
        return r;
      }
      (r.toArray = function (e, r) {
        if (Array.isArray(e)) return e.slice();
        if (!e) return [];
        var s = [];
        if ("string" != typeof e) {
          for (var p = 0; p < e.length; p++) s[p] = 0 | e[p];
          return s;
        }
        if ("hex" === r) {
          (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e);
          for (var p = 0; p < e.length; p += 2)
            s.push(parseInt(e[p] + e[p + 1], 16));
        } else
          for (var p = 0; p < e.length; p++) {
            var b = e.charCodeAt(p),
              v = b >> 8,
              w = 255 & b;
            v ? s.push(v, w) : s.push(w);
          }
        return s;
      }),
        (r.zero2 = zero2),
        (r.toHex = toHex),
        (r.encode = function (e, r) {
          return "hex" === r ? toHex(e) : e;
        });
    },
    49993: function (e, r, s) {
      "use strict";
      var p = s(91835);
      function createCodec(e, r, s, p) {
        return {
          name: e,
          prefix: r,
          encoder: { name: e, prefix: r, encode: s },
          decoder: { decode: p },
        };
      }
      createCodec(
        "utf8",
        "u",
        (e) => {
          let r = new TextDecoder("utf8");
          return "u" + r.decode(e);
        },
        (e) => {
          let r = new TextEncoder();
          return r.encode(e.substring(1));
        }
      ),
        createCodec(
          "ascii",
          "a",
          (e) => {
            let r = "a";
            for (let s = 0; s < e.length; s++) r += String.fromCharCode(e[s]);
            return r;
          },
          (e) => {
            e = e.substring(1);
            let r = (function (e = 0) {
              return null != globalThis.Buffer &&
                null != globalThis.Buffer.allocUnsafe
                ? globalThis.Buffer.allocUnsafe(e)
                : new Uint8Array(e);
            })(e.length);
            for (let s = 0; s < e.length; s++) r[s] = e.charCodeAt(s);
            return r;
          }
        ),
        p.gh.base16,
        p.gh;
    },
    59800: function (e, r, s) {
      "use strict";
      function allocUnsafe(e = 0) {
        return null != globalThis.Buffer &&
          null != globalThis.Buffer.allocUnsafe
          ? globalThis.Buffer.allocUnsafe(e)
          : new Uint8Array(e);
      }
      function concat(e, r) {
        r || (r = e.reduce((e, r) => e + r.length, 0));
        let s = allocUnsafe(r),
          p = 0;
        for (let r of e) s.set(r, p), (p += r.length);
        return s;
      }
      s.d(r, {
        zo: function () {
          return concat;
        },
        mL: function () {
          return fromString;
        },
        BB: function () {
          return to_string_toString;
        },
      });
      var p = s(91835);
      function createCodec(e, r, s, p) {
        return {
          name: e,
          prefix: r,
          encoder: { name: e, prefix: r, encode: s },
          decoder: { decode: p },
        };
      }
      let b = createCodec(
          "utf8",
          "u",
          (e) => {
            let r = new TextDecoder("utf8");
            return "u" + r.decode(e);
          },
          (e) => {
            let r = new TextEncoder();
            return r.encode(e.substring(1));
          }
        ),
        v = createCodec(
          "ascii",
          "a",
          (e) => {
            let r = "a";
            for (let s = 0; s < e.length; s++) r += String.fromCharCode(e[s]);
            return r;
          },
          (e) => {
            e = e.substring(1);
            let r = allocUnsafe(e.length);
            for (let s = 0; s < e.length; s++) r[s] = e.charCodeAt(s);
            return r;
          }
        ),
        w = {
          utf8: b,
          "utf-8": b,
          hex: p.gh.base16,
          latin1: v,
          ascii: v,
          binary: v,
          ...p.gh,
        };
      function fromString(e, r = "utf8") {
        let s = w[r];
        if (!s) throw Error(`Unsupported encoding "${r}"`);
        return ("utf8" === r || "utf-8" === r) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(e, "utf8")
          : s.decoder.decode(`${s.prefix}${e}`);
      }
      function to_string_toString(e, r = "utf8") {
        let s = w[r];
        if (!s) throw Error(`Unsupported encoding "${r}"`);
        return ("utf8" === r || "utf-8" === r) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(
              e.buffer,
              e.byteOffset,
              e.byteLength
            ).toString("utf8")
          : s.encoder.encode(e).substring(1);
      }
    },
    25972: function (e) {
      "use strict";
      e.exports = { i8: "6.5.7" };
    },
    15220: function (e) {
      "use strict";
      e.exports = { i8: "6.5.7" };
    },
  },
]);
