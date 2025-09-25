"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [220],
  {
    86010: function (e, a, i) {
      function clsx() {
        for (var e, a, i = 0, s = ""; i < arguments.length; )
          (e = arguments[i++]) &&
            (a = (function r(e) {
              var a,
                i,
                s = "";
              if ("string" == typeof e || "number" == typeof e) s += e;
              else if ("object" == typeof e) {
                if (Array.isArray(e))
                  for (a = 0; a < e.length; a++)
                    e[a] && (i = r(e[a])) && (s && (s += " "), (s += i));
                else for (a in e) e[a] && (s && (s += " "), (s += a));
              }
              return s;
            })(e)) &&
            (s && (s += " "), (s += a));
        return s;
      }
      i.r(a),
        i.d(a, {
          clsx: function () {
            return clsx;
          },
        }),
        (a.default = clsx);
    },
    98388: function (e, a, i) {
      i.d(a, {
        m6: function () {
          return g;
        },
      });
      let createClassGroupUtils = (e) => {
          let a = createClassMap(e),
            { conflictingClassGroups: i, conflictingClassGroupModifiers: s } =
              e;
          return {
            getClassGroupId: (e) => {
              let i = e.split("-");
              return (
                "" === i[0] && 1 !== i.length && i.shift(),
                getGroupRecursive(i, a) || getGroupIdForArbitraryProperty(e)
              );
            },
            getConflictingClassGroupIds: (e, a) => {
              let o = i[e] || [];
              return a && s[e] ? [...o, ...s[e]] : o;
            },
          };
        },
        getGroupRecursive = (e, a) => {
          if (0 === e.length) return a.classGroupId;
          let i = e[0],
            s = a.nextPart.get(i),
            o = s ? getGroupRecursive(e.slice(1), s) : void 0;
          if (o) return o;
          if (0 === a.validators.length) return;
          let t = e.join("-");
          return a.validators.find(({ validator: e }) => e(t))?.classGroupId;
        },
        s = /^\[(.+)\]$/,
        getGroupIdForArbitraryProperty = (e) => {
          if (s.test(e)) {
            let a = s.exec(e)[1],
              i = a?.substring(0, a.indexOf(":"));
            if (i) return "arbitrary.." + i;
          }
        },
        createClassMap = (e) => {
          let { theme: a, classGroups: i } = e,
            s = { nextPart: new Map(), validators: [] };
          for (let e in i) processClassesRecursively(i[e], s, e, a);
          return s;
        },
        processClassesRecursively = (e, a, i, s) => {
          e.forEach((e) => {
            if ("string" == typeof e) {
              let s = "" === e ? a : getPart(a, e);
              s.classGroupId = i;
              return;
            }
            if ("function" == typeof e) {
              if (isThemeGetter(e)) {
                processClassesRecursively(e(s), a, i, s);
                return;
              }
              a.validators.push({ validator: e, classGroupId: i });
              return;
            }
            Object.entries(e).forEach(([e, o]) => {
              processClassesRecursively(o, getPart(a, e), i, s);
            });
          });
        },
        getPart = (e, a) => {
          let i = e;
          return (
            a.split("-").forEach((e) => {
              i.nextPart.has(e) ||
                i.nextPart.set(e, { nextPart: new Map(), validators: [] }),
                (i = i.nextPart.get(e));
            }),
            i
          );
        },
        isThemeGetter = (e) => e.isThemeGetter,
        createLruCache = (e) => {
          if (e < 1) return { get: () => void 0, set: () => {} };
          let a = 0,
            i = new Map(),
            s = new Map(),
            update = (o, t) => {
              i.set(o, t), ++a > e && ((a = 0), (s = i), (i = new Map()));
            };
          return {
            get(e) {
              let a = i.get(e);
              return void 0 !== a
                ? a
                : void 0 !== (a = s.get(e))
                ? (update(e, a), a)
                : void 0;
            },
            set(e, a) {
              i.has(e) ? i.set(e, a) : update(e, a);
            },
          };
        },
        createParseClassName = (e) => {
          let { prefix: a, experimentalParseClassName: i } = e,
            parseClassName = (e) => {
              let a;
              let i = [],
                s = 0,
                o = 0,
                t = 0;
              for (let l = 0; l < e.length; l++) {
                let n = e[l];
                if (0 === s && 0 === o) {
                  if (":" === n) {
                    i.push(e.slice(t, l)), (t = l + 1);
                    continue;
                  }
                  if ("/" === n) {
                    a = l;
                    continue;
                  }
                }
                "[" === n
                  ? s++
                  : "]" === n
                  ? s--
                  : "(" === n
                  ? o++
                  : ")" === n && o--;
              }
              let l = 0 === i.length ? e : e.substring(t),
                n = stripImportantModifier(l),
                c = n !== l,
                b = a && a > t ? a - t : void 0;
              return {
                modifiers: i,
                hasImportantModifier: c,
                baseClassName: n,
                maybePostfixModifierPosition: b,
              };
            };
          if (a) {
            let e = a + ":",
              i = parseClassName;
            parseClassName = (a) =>
              a.startsWith(e)
                ? i(a.substring(e.length))
                : {
                    isExternal: !0,
                    modifiers: [],
                    hasImportantModifier: !1,
                    baseClassName: a,
                    maybePostfixModifierPosition: void 0,
                  };
          }
          if (i) {
            let e = parseClassName;
            parseClassName = (a) => i({ className: a, parseClassName: e });
          }
          return parseClassName;
        },
        stripImportantModifier = (e) =>
          e.endsWith("!")
            ? e.substring(0, e.length - 1)
            : e.startsWith("!")
            ? e.substring(1)
            : e,
        createSortModifiers = (e) => {
          let a = Object.fromEntries(
            e.orderSensitiveModifiers.map((e) => [e, !0])
          );
          return (e) => {
            if (e.length <= 1) return e;
            let i = [],
              s = [];
            return (
              e.forEach((e) => {
                let o = "[" === e[0] || a[e];
                o ? (i.push(...s.sort(), e), (s = [])) : s.push(e);
              }),
              i.push(...s.sort()),
              i
            );
          };
        },
        createConfigUtils = (e) => ({
          cache: createLruCache(e.cacheSize),
          parseClassName: createParseClassName(e),
          sortModifiers: createSortModifiers(e),
          ...createClassGroupUtils(e),
        }),
        o = /\s+/,
        mergeClassList = (e, a) => {
          let {
              parseClassName: i,
              getClassGroupId: s,
              getConflictingClassGroupIds: t,
              sortModifiers: l,
            } = a,
            n = [],
            c = e.trim().split(o),
            b = "";
          for (let e = c.length - 1; e >= 0; e -= 1) {
            let a = c[e],
              {
                isExternal: o,
                modifiers: d,
                hasImportantModifier: m,
                baseClassName: u,
                maybePostfixModifierPosition: g,
              } = i(a);
            if (o) {
              b = a + (b.length > 0 ? " " + b : b);
              continue;
            }
            let p = !!g,
              y = s(p ? u.substring(0, g) : u);
            if (!y) {
              if (!p || !(y = s(u))) {
                b = a + (b.length > 0 ? " " + b : b);
                continue;
              }
              p = !1;
            }
            let f = l(d).join(":"),
              h = m ? f + "!" : f,
              A = h + y;
            if (n.includes(A)) continue;
            n.push(A);
            let w = t(y, p);
            for (let e = 0; e < w.length; ++e) {
              let a = w[e];
              n.push(h + a);
            }
            b = a + (b.length > 0 ? " " + b : b);
          }
          return b;
        };
      function twJoin() {
        let e,
          a,
          i = 0,
          s = "";
        for (; i < arguments.length; )
          (e = arguments[i++]) &&
            (a = toValue(e)) &&
            (s && (s += " "), (s += a));
        return s;
      }
      let toValue = (e) => {
          let a;
          if ("string" == typeof e) return e;
          let i = "";
          for (let s = 0; s < e.length; s++)
            e[s] && (a = toValue(e[s])) && (i && (i += " "), (i += a));
          return i;
        },
        fromTheme = (e) => {
          let themeGetter = (a) => a[e] || [];
          return (themeGetter.isThemeGetter = !0), themeGetter;
        },
        t = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
        l = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
        n = /^\d+\/\d+$/,
        c = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        b =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        d = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        m = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        u =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        isFraction = (e) => n.test(e),
        isNumber = (e) => !!e && !Number.isNaN(Number(e)),
        isInteger = (e) => !!e && Number.isInteger(Number(e)),
        isPercent = (e) => e.endsWith("%") && isNumber(e.slice(0, -1)),
        isTshirtSize = (e) => c.test(e),
        isAny = () => !0,
        isLengthOnly = (e) => b.test(e) && !d.test(e),
        isNever = () => !1,
        isShadow = (e) => m.test(e),
        isImage = (e) => u.test(e),
        isAnyNonArbitrary = (e) =>
          !isArbitraryValue(e) && !isArbitraryVariable(e),
        isArbitrarySize = (e) => getIsArbitraryValue(e, isLabelSize, isNever),
        isArbitraryValue = (e) => t.test(e),
        isArbitraryLength = (e) =>
          getIsArbitraryValue(e, isLabelLength, isLengthOnly),
        isArbitraryNumber = (e) =>
          getIsArbitraryValue(e, isLabelNumber, isNumber),
        isArbitraryPosition = (e) =>
          getIsArbitraryValue(e, isLabelPosition, isNever),
        isArbitraryImage = (e) => getIsArbitraryValue(e, isLabelImage, isImage),
        isArbitraryShadow = (e) =>
          getIsArbitraryValue(e, isLabelShadow, isShadow),
        isArbitraryVariable = (e) => l.test(e),
        isArbitraryVariableLength = (e) =>
          getIsArbitraryVariable(e, isLabelLength),
        isArbitraryVariableFamilyName = (e) =>
          getIsArbitraryVariable(e, isLabelFamilyName),
        isArbitraryVariablePosition = (e) =>
          getIsArbitraryVariable(e, isLabelPosition),
        isArbitraryVariableSize = (e) => getIsArbitraryVariable(e, isLabelSize),
        isArbitraryVariableImage = (e) =>
          getIsArbitraryVariable(e, isLabelImage),
        isArbitraryVariableShadow = (e) =>
          getIsArbitraryVariable(e, isLabelShadow, !0),
        getIsArbitraryValue = (e, a, i) => {
          let s = t.exec(e);
          return !!s && (s[1] ? a(s[1]) : i(s[2]));
        },
        getIsArbitraryVariable = (e, a, i = !1) => {
          let s = l.exec(e);
          return !!s && (s[1] ? a(s[1]) : i);
        },
        isLabelPosition = (e) => "position" === e || "percentage" === e,
        isLabelImage = (e) => "image" === e || "url" === e,
        isLabelSize = (e) => "length" === e || "size" === e || "bg-size" === e,
        isLabelLength = (e) => "length" === e,
        isLabelNumber = (e) => "number" === e,
        isLabelFamilyName = (e) => "family-name" === e,
        isLabelShadow = (e) => "shadow" === e,
        g = (function (e) {
          let a, i, s;
          let functionToCall = function (o) {
            let t = [].reduce((e, a) => a(e), e());
            return (
              (i = (a = createConfigUtils(t)).cache.get),
              (s = a.cache.set),
              (functionToCall = tailwindMerge),
              tailwindMerge(o)
            );
          };
          function tailwindMerge(e) {
            let o = i(e);
            if (o) return o;
            let t = mergeClassList(e, a);
            return s(e, t), t;
          }
          return function () {
            return functionToCall(twJoin.apply(null, arguments));
          };
        })(() => {
          let e = fromTheme("color"),
            a = fromTheme("font"),
            i = fromTheme("text"),
            s = fromTheme("font-weight"),
            o = fromTheme("tracking"),
            t = fromTheme("leading"),
            l = fromTheme("breakpoint"),
            n = fromTheme("container"),
            c = fromTheme("spacing"),
            b = fromTheme("radius"),
            d = fromTheme("shadow"),
            m = fromTheme("inset-shadow"),
            u = fromTheme("text-shadow"),
            g = fromTheme("drop-shadow"),
            p = fromTheme("blur"),
            y = fromTheme("perspective"),
            f = fromTheme("aspect"),
            h = fromTheme("ease"),
            A = fromTheme("animate"),
            scaleBreak = () => [
              "auto",
              "avoid",
              "all",
              "avoid-page",
              "page",
              "left",
              "right",
              "column",
            ],
            scalePosition = () => [
              "center",
              "top",
              "bottom",
              "left",
              "right",
              "top-left",
              "left-top",
              "top-right",
              "right-top",
              "bottom-right",
              "right-bottom",
              "bottom-left",
              "left-bottom",
            ],
            scalePositionWithArbitrary = () => [
              ...scalePosition(),
              isArbitraryVariable,
              isArbitraryValue,
            ],
            scaleOverflow = () => [
              "auto",
              "hidden",
              "clip",
              "visible",
              "scroll",
            ],
            scaleOverscroll = () => ["auto", "contain", "none"],
            scaleUnambiguousSpacing = () => [
              isArbitraryVariable,
              isArbitraryValue,
              c,
            ],
            scaleInset = () => [
              isFraction,
              "full",
              "auto",
              ...scaleUnambiguousSpacing(),
            ],
            scaleGridTemplateColsRows = () => [
              isInteger,
              "none",
              "subgrid",
              isArbitraryVariable,
              isArbitraryValue,
            ],
            scaleGridColRowStartAndEnd = () => [
              "auto",
              {
                span: [
                  "full",
                  isInteger,
                  isArbitraryVariable,
                  isArbitraryValue,
                ],
              },
              isInteger,
              isArbitraryVariable,
              isArbitraryValue,
            ],
            scaleGridColRowStartOrEnd = () => [
              isInteger,
              "auto",
              isArbitraryVariable,
              isArbitraryValue,
            ],
            scaleGridAutoColsRows = () => [
              "auto",
              "min",
              "max",
              "fr",
              isArbitraryVariable,
              isArbitraryValue,
            ],
            scaleAlignPrimaryAxis = () => [
              "start",
              "end",
              "center",
              "between",
              "around",
              "evenly",
              "stretch",
              "baseline",
              "center-safe",
              "end-safe",
            ],
            scaleAlignSecondaryAxis = () => [
              "start",
              "end",
              "center",
              "stretch",
              "center-safe",
              "end-safe",
            ],
            scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()],
            scaleSizing = () => [
              isFraction,
              "auto",
              "full",
              "dvw",
              "dvh",
              "lvw",
              "lvh",
              "svw",
              "svh",
              "min",
              "max",
              "fit",
              ...scaleUnambiguousSpacing(),
            ],
            scaleColor = () => [e, isArbitraryVariable, isArbitraryValue],
            scaleBgPosition = () => [
              ...scalePosition(),
              isArbitraryVariablePosition,
              isArbitraryPosition,
              { position: [isArbitraryVariable, isArbitraryValue] },
            ],
            scaleBgRepeat = () => [
              "no-repeat",
              { repeat: ["", "x", "y", "space", "round"] },
            ],
            scaleBgSize = () => [
              "auto",
              "cover",
              "contain",
              isArbitraryVariableSize,
              isArbitrarySize,
              { size: [isArbitraryVariable, isArbitraryValue] },
            ],
            scaleGradientStopPosition = () => [
              isPercent,
              isArbitraryVariableLength,
              isArbitraryLength,
            ],
            scaleRadius = () => [
              "",
              "none",
              "full",
              b,
              isArbitraryVariable,
              isArbitraryValue,
            ],
            scaleBorderWidth = () => [
              "",
              isNumber,
              isArbitraryVariableLength,
              isArbitraryLength,
            ],
            scaleLineStyle = () => ["solid", "dashed", "dotted", "double"],
            scaleBlendMode = () => [
              "normal",
              "multiply",
              "screen",
              "overlay",
              "darken",
              "lighten",
              "color-dodge",
              "color-burn",
              "hard-light",
              "soft-light",
              "difference",
              "exclusion",
              "hue",
              "saturation",
              "color",
              "luminosity",
            ],
            scaleMaskImagePosition = () => [
              isNumber,
              isPercent,
              isArbitraryVariablePosition,
              isArbitraryPosition,
            ],
            scaleBlur = () => [
              "",
              "none",
              p,
              isArbitraryVariable,
              isArbitraryValue,
            ],
            scaleRotate = () => [
              "none",
              isNumber,
              isArbitraryVariable,
              isArbitraryValue,
            ],
            scaleScale = () => [
              "none",
              isNumber,
              isArbitraryVariable,
              isArbitraryValue,
            ],
            scaleSkew = () => [isNumber, isArbitraryVariable, isArbitraryValue],
            scaleTranslate = () => [
              isFraction,
              "full",
              ...scaleUnambiguousSpacing(),
            ];
          return {
            cacheSize: 500,
            theme: {
              animate: ["spin", "ping", "pulse", "bounce"],
              aspect: ["video"],
              blur: [isTshirtSize],
              breakpoint: [isTshirtSize],
              color: [isAny],
              container: [isTshirtSize],
              "drop-shadow": [isTshirtSize],
              ease: ["in", "out", "in-out"],
              font: [isAnyNonArbitrary],
              "font-weight": [
                "thin",
                "extralight",
                "light",
                "normal",
                "medium",
                "semibold",
                "bold",
                "extrabold",
                "black",
              ],
              "inset-shadow": [isTshirtSize],
              leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
              perspective: [
                "dramatic",
                "near",
                "normal",
                "midrange",
                "distant",
                "none",
              ],
              radius: [isTshirtSize],
              shadow: [isTshirtSize],
              spacing: ["px", isNumber],
              text: [isTshirtSize],
              "text-shadow": [isTshirtSize],
              tracking: [
                "tighter",
                "tight",
                "normal",
                "wide",
                "wider",
                "widest",
              ],
            },
            classGroups: {
              aspect: [
                {
                  aspect: [
                    "auto",
                    "square",
                    isFraction,
                    isArbitraryValue,
                    isArbitraryVariable,
                    f,
                  ],
                },
              ],
              container: ["container"],
              columns: [
                {
                  columns: [isNumber, isArbitraryValue, isArbitraryVariable, n],
                },
              ],
              "break-after": [{ "break-after": scaleBreak() }],
              "break-before": [{ "break-before": scaleBreak() }],
              "break-inside": [
                {
                  "break-inside": [
                    "auto",
                    "avoid",
                    "avoid-page",
                    "avoid-column",
                  ],
                },
              ],
              "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
              box: [{ box: ["border", "content"] }],
              display: [
                "block",
                "inline-block",
                "inline",
                "flex",
                "inline-flex",
                "table",
                "inline-table",
                "table-caption",
                "table-cell",
                "table-column",
                "table-column-group",
                "table-footer-group",
                "table-header-group",
                "table-row-group",
                "table-row",
                "flow-root",
                "grid",
                "inline-grid",
                "contents",
                "list-item",
                "hidden",
              ],
              sr: ["sr-only", "not-sr-only"],
              float: [{ float: ["right", "left", "none", "start", "end"] }],
              clear: [
                { clear: ["left", "right", "both", "none", "start", "end"] },
              ],
              isolation: ["isolate", "isolation-auto"],
              "object-fit": [
                { object: ["contain", "cover", "fill", "none", "scale-down"] },
              ],
              "object-position": [{ object: scalePositionWithArbitrary() }],
              overflow: [{ overflow: scaleOverflow() }],
              "overflow-x": [{ "overflow-x": scaleOverflow() }],
              "overflow-y": [{ "overflow-y": scaleOverflow() }],
              overscroll: [{ overscroll: scaleOverscroll() }],
              "overscroll-x": [{ "overscroll-x": scaleOverscroll() }],
              "overscroll-y": [{ "overscroll-y": scaleOverscroll() }],
              position: ["static", "fixed", "absolute", "relative", "sticky"],
              inset: [{ inset: scaleInset() }],
              "inset-x": [{ "inset-x": scaleInset() }],
              "inset-y": [{ "inset-y": scaleInset() }],
              start: [{ start: scaleInset() }],
              end: [{ end: scaleInset() }],
              top: [{ top: scaleInset() }],
              right: [{ right: scaleInset() }],
              bottom: [{ bottom: scaleInset() }],
              left: [{ left: scaleInset() }],
              visibility: ["visible", "invisible", "collapse"],
              z: [
                {
                  z: [isInteger, "auto", isArbitraryVariable, isArbitraryValue],
                },
              ],
              basis: [
                {
                  basis: [
                    isFraction,
                    "full",
                    "auto",
                    n,
                    ...scaleUnambiguousSpacing(),
                  ],
                },
              ],
              "flex-direction": [
                { flex: ["row", "row-reverse", "col", "col-reverse"] },
              ],
              "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
              flex: [
                {
                  flex: [
                    isNumber,
                    isFraction,
                    "auto",
                    "initial",
                    "none",
                    isArbitraryValue,
                  ],
                },
              ],
              grow: [
                { grow: ["", isNumber, isArbitraryVariable, isArbitraryValue] },
              ],
              shrink: [
                {
                  shrink: ["", isNumber, isArbitraryVariable, isArbitraryValue],
                },
              ],
              order: [
                {
                  order: [
                    isInteger,
                    "first",
                    "last",
                    "none",
                    isArbitraryVariable,
                    isArbitraryValue,
                  ],
                },
              ],
              "grid-cols": [{ "grid-cols": scaleGridTemplateColsRows() }],
              "col-start-end": [{ col: scaleGridColRowStartAndEnd() }],
              "col-start": [{ "col-start": scaleGridColRowStartOrEnd() }],
              "col-end": [{ "col-end": scaleGridColRowStartOrEnd() }],
              "grid-rows": [{ "grid-rows": scaleGridTemplateColsRows() }],
              "row-start-end": [{ row: scaleGridColRowStartAndEnd() }],
              "row-start": [{ "row-start": scaleGridColRowStartOrEnd() }],
              "row-end": [{ "row-end": scaleGridColRowStartOrEnd() }],
              "grid-flow": [
                {
                  "grid-flow": [
                    "row",
                    "col",
                    "dense",
                    "row-dense",
                    "col-dense",
                  ],
                },
              ],
              "auto-cols": [{ "auto-cols": scaleGridAutoColsRows() }],
              "auto-rows": [{ "auto-rows": scaleGridAutoColsRows() }],
              gap: [{ gap: scaleUnambiguousSpacing() }],
              "gap-x": [{ "gap-x": scaleUnambiguousSpacing() }],
              "gap-y": [{ "gap-y": scaleUnambiguousSpacing() }],
              "justify-content": [
                { justify: [...scaleAlignPrimaryAxis(), "normal"] },
              ],
              "justify-items": [
                { "justify-items": [...scaleAlignSecondaryAxis(), "normal"] },
              ],
              "justify-self": [
                { "justify-self": ["auto", ...scaleAlignSecondaryAxis()] },
              ],
              "align-content": [
                { content: ["normal", ...scaleAlignPrimaryAxis()] },
              ],
              "align-items": [
                {
                  items: [
                    ...scaleAlignSecondaryAxis(),
                    { baseline: ["", "last"] },
                  ],
                },
              ],
              "align-self": [
                {
                  self: [
                    "auto",
                    ...scaleAlignSecondaryAxis(),
                    { baseline: ["", "last"] },
                  ],
                },
              ],
              "place-content": [{ "place-content": scaleAlignPrimaryAxis() }],
              "place-items": [
                { "place-items": [...scaleAlignSecondaryAxis(), "baseline"] },
              ],
              "place-self": [
                { "place-self": ["auto", ...scaleAlignSecondaryAxis()] },
              ],
              p: [{ p: scaleUnambiguousSpacing() }],
              px: [{ px: scaleUnambiguousSpacing() }],
              py: [{ py: scaleUnambiguousSpacing() }],
              ps: [{ ps: scaleUnambiguousSpacing() }],
              pe: [{ pe: scaleUnambiguousSpacing() }],
              pt: [{ pt: scaleUnambiguousSpacing() }],
              pr: [{ pr: scaleUnambiguousSpacing() }],
              pb: [{ pb: scaleUnambiguousSpacing() }],
              pl: [{ pl: scaleUnambiguousSpacing() }],
              m: [{ m: scaleMargin() }],
              mx: [{ mx: scaleMargin() }],
              my: [{ my: scaleMargin() }],
              ms: [{ ms: scaleMargin() }],
              me: [{ me: scaleMargin() }],
              mt: [{ mt: scaleMargin() }],
              mr: [{ mr: scaleMargin() }],
              mb: [{ mb: scaleMargin() }],
              ml: [{ ml: scaleMargin() }],
              "space-x": [{ "space-x": scaleUnambiguousSpacing() }],
              "space-x-reverse": ["space-x-reverse"],
              "space-y": [{ "space-y": scaleUnambiguousSpacing() }],
              "space-y-reverse": ["space-y-reverse"],
              size: [{ size: scaleSizing() }],
              w: [{ w: [n, "screen", ...scaleSizing()] }],
              "min-w": [{ "min-w": [n, "screen", "none", ...scaleSizing()] }],
              "max-w": [
                {
                  "max-w": [
                    n,
                    "screen",
                    "none",
                    "prose",
                    { screen: [l] },
                    ...scaleSizing(),
                  ],
                },
              ],
              h: [{ h: ["screen", "lh", ...scaleSizing()] }],
              "min-h": [
                { "min-h": ["screen", "lh", "none", ...scaleSizing()] },
              ],
              "max-h": [{ "max-h": ["screen", "lh", ...scaleSizing()] }],
              "font-size": [
                {
                  text: [
                    "base",
                    i,
                    isArbitraryVariableLength,
                    isArbitraryLength,
                  ],
                },
              ],
              "font-smoothing": ["antialiased", "subpixel-antialiased"],
              "font-style": ["italic", "not-italic"],
              "font-weight": [
                { font: [s, isArbitraryVariable, isArbitraryNumber] },
              ],
              "font-stretch": [
                {
                  "font-stretch": [
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "normal",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    isPercent,
                    isArbitraryValue,
                  ],
                },
              ],
              "font-family": [
                { font: [isArbitraryVariableFamilyName, isArbitraryValue, a] },
              ],
              "fvn-normal": ["normal-nums"],
              "fvn-ordinal": ["ordinal"],
              "fvn-slashed-zero": ["slashed-zero"],
              "fvn-figure": ["lining-nums", "oldstyle-nums"],
              "fvn-spacing": ["proportional-nums", "tabular-nums"],
              "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
              tracking: [
                { tracking: [o, isArbitraryVariable, isArbitraryValue] },
              ],
              "line-clamp": [
                {
                  "line-clamp": [
                    isNumber,
                    "none",
                    isArbitraryVariable,
                    isArbitraryNumber,
                  ],
                },
              ],
              leading: [{ leading: [t, ...scaleUnambiguousSpacing()] }],
              "list-image": [
                {
                  "list-image": ["none", isArbitraryVariable, isArbitraryValue],
                },
              ],
              "list-style-position": [{ list: ["inside", "outside"] }],
              "list-style-type": [
                {
                  list: [
                    "disc",
                    "decimal",
                    "none",
                    isArbitraryVariable,
                    isArbitraryValue,
                  ],
                },
              ],
              "text-alignment": [
                {
                  text: ["left", "center", "right", "justify", "start", "end"],
                },
              ],
              "placeholder-color": [{ placeholder: scaleColor() }],
              "text-color": [{ text: scaleColor() }],
              "text-decoration": [
                "underline",
                "overline",
                "line-through",
                "no-underline",
              ],
              "text-decoration-style": [
                { decoration: [...scaleLineStyle(), "wavy"] },
              ],
              "text-decoration-thickness": [
                {
                  decoration: [
                    isNumber,
                    "from-font",
                    "auto",
                    isArbitraryVariable,
                    isArbitraryLength,
                  ],
                },
              ],
              "text-decoration-color": [{ decoration: scaleColor() }],
              "underline-offset": [
                {
                  "underline-offset": [
                    isNumber,
                    "auto",
                    isArbitraryVariable,
                    isArbitraryValue,
                  ],
                },
              ],
              "text-transform": [
                "uppercase",
                "lowercase",
                "capitalize",
                "normal-case",
              ],
              "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
              "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
              indent: [{ indent: scaleUnambiguousSpacing() }],
              "vertical-align": [
                {
                  align: [
                    "baseline",
                    "top",
                    "middle",
                    "bottom",
                    "text-top",
                    "text-bottom",
                    "sub",
                    "super",
                    isArbitraryVariable,
                    isArbitraryValue,
                  ],
                },
              ],
              whitespace: [
                {
                  whitespace: [
                    "normal",
                    "nowrap",
                    "pre",
                    "pre-line",
                    "pre-wrap",
                    "break-spaces",
                  ],
                },
              ],
              break: [{ break: ["normal", "words", "all", "keep"] }],
              wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
              hyphens: [{ hyphens: ["none", "manual", "auto"] }],
              content: [
                { content: ["none", isArbitraryVariable, isArbitraryValue] },
              ],
              "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
              "bg-clip": [
                { "bg-clip": ["border", "padding", "content", "text"] },
              ],
              "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
              "bg-position": [{ bg: scaleBgPosition() }],
              "bg-repeat": [{ bg: scaleBgRepeat() }],
              "bg-size": [{ bg: scaleBgSize() }],
              "bg-image": [
                {
                  bg: [
                    "none",
                    {
                      linear: [
                        { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                        isInteger,
                        isArbitraryVariable,
                        isArbitraryValue,
                      ],
                      radial: ["", isArbitraryVariable, isArbitraryValue],
                      conic: [isInteger, isArbitraryVariable, isArbitraryValue],
                    },
                    isArbitraryVariableImage,
                    isArbitraryImage,
                  ],
                },
              ],
              "bg-color": [{ bg: scaleColor() }],
              "gradient-from-pos": [{ from: scaleGradientStopPosition() }],
              "gradient-via-pos": [{ via: scaleGradientStopPosition() }],
              "gradient-to-pos": [{ to: scaleGradientStopPosition() }],
              "gradient-from": [{ from: scaleColor() }],
              "gradient-via": [{ via: scaleColor() }],
              "gradient-to": [{ to: scaleColor() }],
              rounded: [{ rounded: scaleRadius() }],
              "rounded-s": [{ "rounded-s": scaleRadius() }],
              "rounded-e": [{ "rounded-e": scaleRadius() }],
              "rounded-t": [{ "rounded-t": scaleRadius() }],
              "rounded-r": [{ "rounded-r": scaleRadius() }],
              "rounded-b": [{ "rounded-b": scaleRadius() }],
              "rounded-l": [{ "rounded-l": scaleRadius() }],
              "rounded-ss": [{ "rounded-ss": scaleRadius() }],
              "rounded-se": [{ "rounded-se": scaleRadius() }],
              "rounded-ee": [{ "rounded-ee": scaleRadius() }],
              "rounded-es": [{ "rounded-es": scaleRadius() }],
              "rounded-tl": [{ "rounded-tl": scaleRadius() }],
              "rounded-tr": [{ "rounded-tr": scaleRadius() }],
              "rounded-br": [{ "rounded-br": scaleRadius() }],
              "rounded-bl": [{ "rounded-bl": scaleRadius() }],
              "border-w": [{ border: scaleBorderWidth() }],
              "border-w-x": [{ "border-x": scaleBorderWidth() }],
              "border-w-y": [{ "border-y": scaleBorderWidth() }],
              "border-w-s": [{ "border-s": scaleBorderWidth() }],
              "border-w-e": [{ "border-e": scaleBorderWidth() }],
              "border-w-t": [{ "border-t": scaleBorderWidth() }],
              "border-w-r": [{ "border-r": scaleBorderWidth() }],
              "border-w-b": [{ "border-b": scaleBorderWidth() }],
              "border-w-l": [{ "border-l": scaleBorderWidth() }],
              "divide-x": [{ "divide-x": scaleBorderWidth() }],
              "divide-x-reverse": ["divide-x-reverse"],
              "divide-y": [{ "divide-y": scaleBorderWidth() }],
              "divide-y-reverse": ["divide-y-reverse"],
              "border-style": [
                { border: [...scaleLineStyle(), "hidden", "none"] },
              ],
              "divide-style": [
                { divide: [...scaleLineStyle(), "hidden", "none"] },
              ],
              "border-color": [{ border: scaleColor() }],
              "border-color-x": [{ "border-x": scaleColor() }],
              "border-color-y": [{ "border-y": scaleColor() }],
              "border-color-s": [{ "border-s": scaleColor() }],
              "border-color-e": [{ "border-e": scaleColor() }],
              "border-color-t": [{ "border-t": scaleColor() }],
              "border-color-r": [{ "border-r": scaleColor() }],
              "border-color-b": [{ "border-b": scaleColor() }],
              "border-color-l": [{ "border-l": scaleColor() }],
              "divide-color": [{ divide: scaleColor() }],
              "outline-style": [
                { outline: [...scaleLineStyle(), "none", "hidden"] },
              ],
              "outline-offset": [
                {
                  "outline-offset": [
                    isNumber,
                    isArbitraryVariable,
                    isArbitraryValue,
                  ],
                },
              ],
              "outline-w": [
                {
                  outline: [
                    "",
                    isNumber,
                    isArbitraryVariableLength,
                    isArbitraryLength,
                  ],
                },
              ],
              "outline-color": [{ outline: scaleColor() }],
              shadow: [
                {
                  shadow: [
                    "",
                    "none",
                    d,
                    isArbitraryVariableShadow,
                    isArbitraryShadow,
                  ],
                },
              ],
              "shadow-color": [{ shadow: scaleColor() }],
              "inset-shadow": [
                {
                  "inset-shadow": [
                    "none",
                    m,
                    isArbitraryVariableShadow,
                    isArbitraryShadow,
                  ],
                },
              ],
              "inset-shadow-color": [{ "inset-shadow": scaleColor() }],
              "ring-w": [{ ring: scaleBorderWidth() }],
              "ring-w-inset": ["ring-inset"],
              "ring-color": [{ ring: scaleColor() }],
              "ring-offset-w": [
                { "ring-offset": [isNumber, isArbitraryLength] },
              ],
              "ring-offset-color": [{ "ring-offset": scaleColor() }],
              "inset-ring-w": [{ "inset-ring": scaleBorderWidth() }],
              "inset-ring-color": [{ "inset-ring": scaleColor() }],
              "text-shadow": [
                {
                  "text-shadow": [
                    "none",
                    u,
                    isArbitraryVariableShadow,
                    isArbitraryShadow,
                  ],
                },
              ],
              "text-shadow-color": [{ "text-shadow": scaleColor() }],
              opacity: [
                { opacity: [isNumber, isArbitraryVariable, isArbitraryValue] },
              ],
              "mix-blend": [
                {
                  "mix-blend": [
                    ...scaleBlendMode(),
                    "plus-darker",
                    "plus-lighter",
                  ],
                },
              ],
              "bg-blend": [{ "bg-blend": scaleBlendMode() }],
              "mask-clip": [
                {
                  "mask-clip": [
                    "border",
                    "padding",
                    "content",
                    "fill",
                    "stroke",
                    "view",
                  ],
                },
                "mask-no-clip",
              ],
              "mask-composite": [
                { mask: ["add", "subtract", "intersect", "exclude"] },
              ],
              "mask-image-linear-pos": [{ "mask-linear": [isNumber] }],
              "mask-image-linear-from-pos": [
                { "mask-linear-from": scaleMaskImagePosition() },
              ],
              "mask-image-linear-to-pos": [
                { "mask-linear-to": scaleMaskImagePosition() },
              ],
              "mask-image-linear-from-color": [
                { "mask-linear-from": scaleColor() },
              ],
              "mask-image-linear-to-color": [
                { "mask-linear-to": scaleColor() },
              ],
              "mask-image-t-from-pos": [
                { "mask-t-from": scaleMaskImagePosition() },
              ],
              "mask-image-t-to-pos": [
                { "mask-t-to": scaleMaskImagePosition() },
              ],
              "mask-image-t-from-color": [{ "mask-t-from": scaleColor() }],
              "mask-image-t-to-color": [{ "mask-t-to": scaleColor() }],
              "mask-image-r-from-pos": [
                { "mask-r-from": scaleMaskImagePosition() },
              ],
              "mask-image-r-to-pos": [
                { "mask-r-to": scaleMaskImagePosition() },
              ],
              "mask-image-r-from-color": [{ "mask-r-from": scaleColor() }],
              "mask-image-r-to-color": [{ "mask-r-to": scaleColor() }],
              "mask-image-b-from-pos": [
                { "mask-b-from": scaleMaskImagePosition() },
              ],
              "mask-image-b-to-pos": [
                { "mask-b-to": scaleMaskImagePosition() },
              ],
              "mask-image-b-from-color": [{ "mask-b-from": scaleColor() }],
              "mask-image-b-to-color": [{ "mask-b-to": scaleColor() }],
              "mask-image-l-from-pos": [
                { "mask-l-from": scaleMaskImagePosition() },
              ],
              "mask-image-l-to-pos": [
                { "mask-l-to": scaleMaskImagePosition() },
              ],
              "mask-image-l-from-color": [{ "mask-l-from": scaleColor() }],
              "mask-image-l-to-color": [{ "mask-l-to": scaleColor() }],
              "mask-image-x-from-pos": [
                { "mask-x-from": scaleMaskImagePosition() },
              ],
              "mask-image-x-to-pos": [
                { "mask-x-to": scaleMaskImagePosition() },
              ],
              "mask-image-x-from-color": [{ "mask-x-from": scaleColor() }],
              "mask-image-x-to-color": [{ "mask-x-to": scaleColor() }],
              "mask-image-y-from-pos": [
                { "mask-y-from": scaleMaskImagePosition() },
              ],
              "mask-image-y-to-pos": [
                { "mask-y-to": scaleMaskImagePosition() },
              ],
              "mask-image-y-from-color": [{ "mask-y-from": scaleColor() }],
              "mask-image-y-to-color": [{ "mask-y-to": scaleColor() }],
              "mask-image-radial": [
                { "mask-radial": [isArbitraryVariable, isArbitraryValue] },
              ],
              "mask-image-radial-from-pos": [
                { "mask-radial-from": scaleMaskImagePosition() },
              ],
              "mask-image-radial-to-pos": [
                { "mask-radial-to": scaleMaskImagePosition() },
              ],
              "mask-image-radial-from-color": [
                { "mask-radial-from": scaleColor() },
              ],
              "mask-image-radial-to-color": [
                { "mask-radial-to": scaleColor() },
              ],
              "mask-image-radial-shape": [
                { "mask-radial": ["circle", "ellipse"] },
              ],
              "mask-image-radial-size": [
                {
                  "mask-radial": [
                    {
                      closest: ["side", "corner"],
                      farthest: ["side", "corner"],
                    },
                  ],
                },
              ],
              "mask-image-radial-pos": [{ "mask-radial-at": scalePosition() }],
              "mask-image-conic-pos": [{ "mask-conic": [isNumber] }],
              "mask-image-conic-from-pos": [
                { "mask-conic-from": scaleMaskImagePosition() },
              ],
              "mask-image-conic-to-pos": [
                { "mask-conic-to": scaleMaskImagePosition() },
              ],
              "mask-image-conic-from-color": [
                { "mask-conic-from": scaleColor() },
              ],
              "mask-image-conic-to-color": [{ "mask-conic-to": scaleColor() }],
              "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
              "mask-origin": [
                {
                  "mask-origin": [
                    "border",
                    "padding",
                    "content",
                    "fill",
                    "stroke",
                    "view",
                  ],
                },
              ],
              "mask-position": [{ mask: scaleBgPosition() }],
              "mask-repeat": [{ mask: scaleBgRepeat() }],
              "mask-size": [{ mask: scaleBgSize() }],
              "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
              "mask-image": [
                { mask: ["none", isArbitraryVariable, isArbitraryValue] },
              ],
              filter: [
                { filter: ["", "none", isArbitraryVariable, isArbitraryValue] },
              ],
              blur: [{ blur: scaleBlur() }],
              brightness: [
                {
                  brightness: [isNumber, isArbitraryVariable, isArbitraryValue],
                },
              ],
              contrast: [
                { contrast: [isNumber, isArbitraryVariable, isArbitraryValue] },
              ],
              "drop-shadow": [
                {
                  "drop-shadow": [
                    "",
                    "none",
                    g,
                    isArbitraryVariableShadow,
                    isArbitraryShadow,
                  ],
                },
              ],
              "drop-shadow-color": [{ "drop-shadow": scaleColor() }],
              grayscale: [
                {
                  grayscale: [
                    "",
                    isNumber,
                    isArbitraryVariable,
                    isArbitraryValue,
                  ],
                },
              ],
              "hue-rotate": [
                {
                  "hue-rotate": [
                    isNumber,
                    isArbitraryVariable,
                    isArbitraryValue,
                  ],
                },
              ],
              invert: [
                {
                  invert: ["", isNumber, isArbitraryVariable, isArbitraryValue],
                },
              ],
              saturate: [
                { saturate: [isNumber, isArbitraryVariable, isArbitraryValue] },
              ],
              sepia: [
                {
                  sepia: ["", isNumber, isArbitraryVariable, isArbitraryValue],
                },
              ],
              "backdrop-filter": [
                {
                  "backdrop-filter": [
                    "",
                    "none",
                    isArbitraryVariable,
                    isArbitraryValue,
                  ],
                },
              ],
              "backdrop-blur": [{ "backdrop-blur": scaleBlur() }],
              "backdrop-brightness": [
                {
                  "backdrop-brightness": [
                    isNumber,
                    isArbitraryVariable,
                    isArbitraryValue,
                  ],
                },
              ],
              "backdrop-contrast": [
                {
                  "backdrop-contrast": [
                    isNumber,
                    isArbitraryVariable,
                    isArbitraryValue,
                  ],
                },
              ],
              "backdrop-grayscale": [
                {
                  "backdrop-grayscale": [
                    "",
                    isNumber,
                    isArbitraryVariable,
                    isArbitraryValue,
                  ],
                },
              ],
              "backdrop-hue-rotate": [
                {
                  "backdrop-hue-rotate": [
                    isNumber,
                    isArbitraryVariable,
                    isArbitraryValue,
                  ],
                },
              ],
              "backdrop-invert": [
                {
                  "backdrop-invert": [
                    "",
                    isNumber,
                    isArbitraryVariable,
                    isArbitraryValue,
                  ],
                },
              ],
              "backdrop-opacity": [
                {
                  "backdrop-opacity": [
                    isNumber,
                    isArbitraryVariable,
                    isArbitraryValue,
                  ],
                },
              ],
              "backdrop-saturate": [
                {
                  "backdrop-saturate": [
                    isNumber,
                    isArbitraryVariable,
                    isArbitraryValue,
                  ],
                },
              ],
              "backdrop-sepia": [
                {
                  "backdrop-sepia": [
                    "",
                    isNumber,
                    isArbitraryVariable,
                    isArbitraryValue,
                  ],
                },
              ],
              "border-collapse": [{ border: ["collapse", "separate"] }],
              "border-spacing": [
                { "border-spacing": scaleUnambiguousSpacing() },
              ],
              "border-spacing-x": [
                { "border-spacing-x": scaleUnambiguousSpacing() },
              ],
              "border-spacing-y": [
                { "border-spacing-y": scaleUnambiguousSpacing() },
              ],
              "table-layout": [{ table: ["auto", "fixed"] }],
              caption: [{ caption: ["top", "bottom"] }],
              transition: [
                {
                  transition: [
                    "",
                    "all",
                    "colors",
                    "opacity",
                    "shadow",
                    "transform",
                    "none",
                    isArbitraryVariable,
                    isArbitraryValue,
                  ],
                },
              ],
              "transition-behavior": [{ transition: ["normal", "discrete"] }],
              duration: [
                {
                  duration: [
                    isNumber,
                    "initial",
                    isArbitraryVariable,
                    isArbitraryValue,
                  ],
                },
              ],
              ease: [
                {
                  ease: [
                    "linear",
                    "initial",
                    h,
                    isArbitraryVariable,
                    isArbitraryValue,
                  ],
                },
              ],
              delay: [
                { delay: [isNumber, isArbitraryVariable, isArbitraryValue] },
              ],
              animate: [
                { animate: ["none", A, isArbitraryVariable, isArbitraryValue] },
              ],
              backface: [{ backface: ["hidden", "visible"] }],
              perspective: [
                { perspective: [y, isArbitraryVariable, isArbitraryValue] },
              ],
              "perspective-origin": [
                { "perspective-origin": scalePositionWithArbitrary() },
              ],
              rotate: [{ rotate: scaleRotate() }],
              "rotate-x": [{ "rotate-x": scaleRotate() }],
              "rotate-y": [{ "rotate-y": scaleRotate() }],
              "rotate-z": [{ "rotate-z": scaleRotate() }],
              scale: [{ scale: scaleScale() }],
              "scale-x": [{ "scale-x": scaleScale() }],
              "scale-y": [{ "scale-y": scaleScale() }],
              "scale-z": [{ "scale-z": scaleScale() }],
              "scale-3d": ["scale-3d"],
              skew: [{ skew: scaleSkew() }],
              "skew-x": [{ "skew-x": scaleSkew() }],
              "skew-y": [{ "skew-y": scaleSkew() }],
              transform: [
                {
                  transform: [
                    isArbitraryVariable,
                    isArbitraryValue,
                    "",
                    "none",
                    "gpu",
                    "cpu",
                  ],
                },
              ],
              "transform-origin": [{ origin: scalePositionWithArbitrary() }],
              "transform-style": [{ transform: ["3d", "flat"] }],
              translate: [{ translate: scaleTranslate() }],
              "translate-x": [{ "translate-x": scaleTranslate() }],
              "translate-y": [{ "translate-y": scaleTranslate() }],
              "translate-z": [{ "translate-z": scaleTranslate() }],
              "translate-none": ["translate-none"],
              accent: [{ accent: scaleColor() }],
              appearance: [{ appearance: ["none", "auto"] }],
              "caret-color": [{ caret: scaleColor() }],
              "color-scheme": [
                {
                  scheme: [
                    "normal",
                    "dark",
                    "light",
                    "light-dark",
                    "only-dark",
                    "only-light",
                  ],
                },
              ],
              cursor: [
                {
                  cursor: [
                    "auto",
                    "default",
                    "pointer",
                    "wait",
                    "text",
                    "move",
                    "help",
                    "not-allowed",
                    "none",
                    "context-menu",
                    "progress",
                    "cell",
                    "crosshair",
                    "vertical-text",
                    "alias",
                    "copy",
                    "no-drop",
                    "grab",
                    "grabbing",
                    "all-scroll",
                    "col-resize",
                    "row-resize",
                    "n-resize",
                    "e-resize",
                    "s-resize",
                    "w-resize",
                    "ne-resize",
                    "nw-resize",
                    "se-resize",
                    "sw-resize",
                    "ew-resize",
                    "ns-resize",
                    "nesw-resize",
                    "nwse-resize",
                    "zoom-in",
                    "zoom-out",
                    isArbitraryVariable,
                    isArbitraryValue,
                  ],
                },
              ],
              "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
              "pointer-events": [{ "pointer-events": ["auto", "none"] }],
              resize: [{ resize: ["none", "", "y", "x"] }],
              "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
              "scroll-m": [{ "scroll-m": scaleUnambiguousSpacing() }],
              "scroll-mx": [{ "scroll-mx": scaleUnambiguousSpacing() }],
              "scroll-my": [{ "scroll-my": scaleUnambiguousSpacing() }],
              "scroll-ms": [{ "scroll-ms": scaleUnambiguousSpacing() }],
              "scroll-me": [{ "scroll-me": scaleUnambiguousSpacing() }],
              "scroll-mt": [{ "scroll-mt": scaleUnambiguousSpacing() }],
              "scroll-mr": [{ "scroll-mr": scaleUnambiguousSpacing() }],
              "scroll-mb": [{ "scroll-mb": scaleUnambiguousSpacing() }],
              "scroll-ml": [{ "scroll-ml": scaleUnambiguousSpacing() }],
              "scroll-p": [{ "scroll-p": scaleUnambiguousSpacing() }],
              "scroll-px": [{ "scroll-px": scaleUnambiguousSpacing() }],
              "scroll-py": [{ "scroll-py": scaleUnambiguousSpacing() }],
              "scroll-ps": [{ "scroll-ps": scaleUnambiguousSpacing() }],
              "scroll-pe": [{ "scroll-pe": scaleUnambiguousSpacing() }],
              "scroll-pt": [{ "scroll-pt": scaleUnambiguousSpacing() }],
              "scroll-pr": [{ "scroll-pr": scaleUnambiguousSpacing() }],
              "scroll-pb": [{ "scroll-pb": scaleUnambiguousSpacing() }],
              "scroll-pl": [{ "scroll-pl": scaleUnambiguousSpacing() }],
              "snap-align": [
                { snap: ["start", "end", "center", "align-none"] },
              ],
              "snap-stop": [{ snap: ["normal", "always"] }],
              "snap-type": [{ snap: ["none", "x", "y", "both"] }],
              "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
              touch: [{ touch: ["auto", "none", "manipulation"] }],
              "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
              "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
              "touch-pz": ["touch-pinch-zoom"],
              select: [{ select: ["none", "text", "all", "auto"] }],
              "will-change": [
                {
                  "will-change": [
                    "auto",
                    "scroll",
                    "contents",
                    "transform",
                    isArbitraryVariable,
                    isArbitraryValue,
                  ],
                },
              ],
              fill: [{ fill: ["none", ...scaleColor()] }],
              "stroke-w": [
                {
                  stroke: [
                    isNumber,
                    isArbitraryVariableLength,
                    isArbitraryLength,
                    isArbitraryNumber,
                  ],
                },
              ],
              stroke: [{ stroke: ["none", ...scaleColor()] }],
              "forced-color-adjust": [
                { "forced-color-adjust": ["auto", "none"] },
              ],
            },
            conflictingClassGroups: {
              overflow: ["overflow-x", "overflow-y"],
              overscroll: ["overscroll-x", "overscroll-y"],
              inset: [
                "inset-x",
                "inset-y",
                "start",
                "end",
                "top",
                "right",
                "bottom",
                "left",
              ],
              "inset-x": ["right", "left"],
              "inset-y": ["top", "bottom"],
              flex: ["basis", "grow", "shrink"],
              gap: ["gap-x", "gap-y"],
              p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
              px: ["pr", "pl"],
              py: ["pt", "pb"],
              m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
              mx: ["mr", "ml"],
              my: ["mt", "mb"],
              size: ["w", "h"],
              "font-size": ["leading"],
              "fvn-normal": [
                "fvn-ordinal",
                "fvn-slashed-zero",
                "fvn-figure",
                "fvn-spacing",
                "fvn-fraction",
              ],
              "fvn-ordinal": ["fvn-normal"],
              "fvn-slashed-zero": ["fvn-normal"],
              "fvn-figure": ["fvn-normal"],
              "fvn-spacing": ["fvn-normal"],
              "fvn-fraction": ["fvn-normal"],
              "line-clamp": ["display", "overflow"],
              rounded: [
                "rounded-s",
                "rounded-e",
                "rounded-t",
                "rounded-r",
                "rounded-b",
                "rounded-l",
                "rounded-ss",
                "rounded-se",
                "rounded-ee",
                "rounded-es",
                "rounded-tl",
                "rounded-tr",
                "rounded-br",
                "rounded-bl",
              ],
              "rounded-s": ["rounded-ss", "rounded-es"],
              "rounded-e": ["rounded-se", "rounded-ee"],
              "rounded-t": ["rounded-tl", "rounded-tr"],
              "rounded-r": ["rounded-tr", "rounded-br"],
              "rounded-b": ["rounded-br", "rounded-bl"],
              "rounded-l": ["rounded-tl", "rounded-bl"],
              "border-spacing": ["border-spacing-x", "border-spacing-y"],
              "border-w": [
                "border-w-x",
                "border-w-y",
                "border-w-s",
                "border-w-e",
                "border-w-t",
                "border-w-r",
                "border-w-b",
                "border-w-l",
              ],
              "border-w-x": ["border-w-r", "border-w-l"],
              "border-w-y": ["border-w-t", "border-w-b"],
              "border-color": [
                "border-color-x",
                "border-color-y",
                "border-color-s",
                "border-color-e",
                "border-color-t",
                "border-color-r",
                "border-color-b",
                "border-color-l",
              ],
              "border-color-x": ["border-color-r", "border-color-l"],
              "border-color-y": ["border-color-t", "border-color-b"],
              translate: ["translate-x", "translate-y", "translate-none"],
              "translate-none": [
                "translate",
                "translate-x",
                "translate-y",
                "translate-z",
              ],
              "scroll-m": [
                "scroll-mx",
                "scroll-my",
                "scroll-ms",
                "scroll-me",
                "scroll-mt",
                "scroll-mr",
                "scroll-mb",
                "scroll-ml",
              ],
              "scroll-mx": ["scroll-mr", "scroll-ml"],
              "scroll-my": ["scroll-mt", "scroll-mb"],
              "scroll-p": [
                "scroll-px",
                "scroll-py",
                "scroll-ps",
                "scroll-pe",
                "scroll-pt",
                "scroll-pr",
                "scroll-pb",
                "scroll-pl",
              ],
              "scroll-px": ["scroll-pr", "scroll-pl"],
              "scroll-py": ["scroll-pt", "scroll-pb"],
              touch: ["touch-x", "touch-y", "touch-pz"],
              "touch-x": ["touch"],
              "touch-y": ["touch"],
              "touch-pz": ["touch"],
            },
            conflictingClassGroupModifiers: { "font-size": ["leading"] },
            orderSensitiveModifiers: [
              "*",
              "**",
              "after",
              "backdrop",
              "before",
              "details-content",
              "file",
              "first-letter",
              "first-line",
              "marker",
              "placeholder",
              "selection",
            ],
          };
        });
    },
  },
]);
