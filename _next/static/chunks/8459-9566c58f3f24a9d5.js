"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8459],
  {
    75068: function (e, t, n) {
      function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function _inheritsLoose(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          _setPrototypeOf(e, t);
      }
      n.d(t, {
        Z: function () {
          return _inheritsLoose;
        },
      });
    },
    61735: function (e, t, n) {
      function isElement(e) {
        return (
          null != e &&
          "object" == typeof e &&
          "nodeType" in e &&
          e.nodeType === Node.ELEMENT_NODE
        );
      }
      function isHTMLElement(e) {
        var t;
        if (!isElement(e)) return !1;
        let n = null != (t = e.ownerDocument.defaultView) ? t : window;
        return e instanceof n.HTMLElement;
      }
      function getOwnerWindow(e) {
        var t, n;
        return null !=
          (n = null == (t = getOwnerDocument(e)) ? void 0 : t.defaultView)
          ? n
          : window;
      }
      function getOwnerDocument(e) {
        return isElement(e) ? e.ownerDocument : document;
      }
      function getActiveElement(e) {
        return getOwnerDocument(e).activeElement;
      }
      n.d(t, {
        Re: function () {
          return isHTMLElement;
        },
        kR: function () {
          return getOwnerWindow;
        },
        vY: function () {
          return getActiveElement;
        },
      });
    },
    59136: function (e, t, n) {
      n.d(t, {
        EB: function () {
          return isFocusable;
        },
        Wq: function () {
          return isTabbable;
        },
      });
      var r = n(61735),
        hasTabIndex = (e) => e.hasAttribute("tabindex"),
        hasNegativeTabIndex = (e) => hasTabIndex(e) && -1 === e.tabIndex;
      function isFocusable(e) {
        var t;
        if (
          !(0, r.Re)(e) ||
          (function isHidden(e) {
            return !!(e.parentElement && isHidden(e.parentElement)) || e.hidden;
          })(e) ||
          !0 == !!(t = e).getAttribute("disabled") ||
          !0 == !!t.getAttribute("aria-disabled")
        )
          return !1;
        let { localName: n } = e;
        if (["input", "select", "textarea", "button"].indexOf(n) >= 0)
          return !0;
        let o = {
          a: () => e.hasAttribute("href"),
          audio: () => e.hasAttribute("controls"),
          video: () => e.hasAttribute("controls"),
        };
        return n in o
          ? o[n]()
          : !!(function (e) {
              let t = e.getAttribute("contenteditable");
              return "false" !== t && null != t;
            })(e) || hasTabIndex(e);
      }
      function isTabbable(e) {
        return !!e && (0, r.Re)(e) && isFocusable(e) && !hasNegativeTabIndex(e);
      }
    },
    42657: function (e, t, n) {
      n.d(t, {
        t5: function () {
          return getAllFocusable;
        },
      });
      var r = n(59136),
        isVisible = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
      function getAllFocusable(e) {
        let t = Array.from(
          e.querySelectorAll(
            "input:not(:disabled):not([disabled]),select:not(:disabled):not([disabled]),textarea:not(:disabled):not([disabled]),embed,iframe,object,a[href],area[href],button:not(:disabled):not([disabled]),[tabindex],audio[controls],video[controls],*[tabindex]:not([aria-disabled]),*[contenteditable]"
          )
        );
        return t.unshift(e), t.filter((e) => (0, r.EB)(e) && isVisible(e));
      }
    },
    28912: function (e, t, n) {
      n.d(t, {
        K: function () {
          return useFormControlProps;
        },
        Y: function () {
          return useFormControl;
        },
      });
      var r = n(85970),
        o = n(25432);
      function useFormControl(e) {
        let {
          isDisabled: t,
          isInvalid: n,
          isReadOnly: r,
          isRequired: a,
          ...i
        } = useFormControlProps(e);
        return {
          ...i,
          disabled: t,
          readOnly: r,
          required: a,
          "aria-invalid": (0, o.Qm)(n),
          "aria-required": (0, o.Qm)(a),
          "aria-readonly": (0, o.Qm)(r),
        };
      }
      function useFormControlProps(e) {
        var t, n, a;
        let i = (0, r.NJ)(),
          {
            id: u,
            disabled: c,
            readOnly: l,
            required: s,
            isRequired: d,
            isInvalid: f,
            isReadOnly: v,
            isDisabled: m,
            onFocus: p,
            onBlur: h,
            ...g
          } = e,
          b = e["aria-describedby"] ? [e["aria-describedby"]] : [];
        return (
          (null == i ? void 0 : i.hasFeedbackText) &&
            (null == i ? void 0 : i.isInvalid) &&
            b.push(i.feedbackId),
          (null == i ? void 0 : i.hasHelpText) && b.push(i.helpTextId),
          {
            ...g,
            "aria-describedby": b.join(" ") || void 0,
            id: null != u ? u : null == i ? void 0 : i.id,
            isDisabled:
              null != (t = null != c ? c : m)
                ? t
                : null == i
                ? void 0
                : i.isDisabled,
            isReadOnly:
              null != (n = null != l ? l : v)
                ? n
                : null == i
                ? void 0
                : i.isReadOnly,
            isRequired:
              null != (a = null != s ? s : d)
                ? a
                : null == i
                ? void 0
                : i.isRequired,
            isInvalid: null != f ? f : null == i ? void 0 : i.isInvalid,
            onFocus: (0, o.v0)(null == i ? void 0 : i.onFocus, p),
            onBlur: (0, o.v0)(null == i ? void 0 : i.onBlur, h),
          }
        );
      }
    },
    85970: function (e, t, n) {
      n.d(t, {
        NI: function () {
          return h;
        },
        NJ: function () {
          return p;
        },
        e: function () {
          return v;
        },
      });
      var r = n(55227),
        o = n(81103),
        a = n(16554),
        i = n(77030),
        u = n(33179),
        c = n(13314),
        l = n(25432),
        s = n(67294),
        d = n(85893),
        [f, v] = (0, r.k)({
          name: "FormControlStylesContext",
          errorMessage:
            "useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" ",
        }),
        [m, p] = (0, r.k)({ strict: !1, name: "FormControlContext" }),
        h = (0, a.G)(function (e, t) {
          let n = (0, i.jC)("Form", e),
            r = (0, u.Lr)(e),
            {
              getRootProps: a,
              htmlProps: v,
              ...p
            } = (function (e) {
              let {
                  id: t,
                  isRequired: n,
                  isInvalid: r,
                  isDisabled: a,
                  isReadOnly: i,
                  ...u
                } = e,
                c = (0, s.useId)(),
                d = t || `field-${c}`,
                f = `${d}-label`,
                v = `${d}-feedback`,
                m = `${d}-helptext`,
                [p, h] = (0, s.useState)(!1),
                [g, b] = (0, s.useState)(!1),
                [y, x] = (0, s.useState)(!1),
                w = (0, s.useCallback)(
                  (e = {}, t = null) => ({
                    id: m,
                    ...e,
                    ref: (0, o.lq)(t, (e) => {
                      e && b(!0);
                    }),
                  }),
                  [m]
                ),
                E = (0, s.useCallback)(
                  (e = {}, t = null) => ({
                    ...e,
                    ref: t,
                    "data-focus": (0, l.PB)(y),
                    "data-disabled": (0, l.PB)(a),
                    "data-invalid": (0, l.PB)(r),
                    "data-readonly": (0, l.PB)(i),
                    id: void 0 !== e.id ? e.id : f,
                    htmlFor: void 0 !== e.htmlFor ? e.htmlFor : d,
                  }),
                  [d, a, y, r, i, f]
                ),
                N = (0, s.useCallback)(
                  (e = {}, t = null) => ({
                    id: v,
                    ...e,
                    ref: (0, o.lq)(t, (e) => {
                      e && h(!0);
                    }),
                    "aria-live": "polite",
                  }),
                  [v]
                ),
                C = (0, s.useCallback)(
                  (e = {}, t = null) => ({
                    ...e,
                    ...u,
                    ref: t,
                    role: "group",
                    "data-focus": (0, l.PB)(y),
                    "data-disabled": (0, l.PB)(a),
                    "data-invalid": (0, l.PB)(r),
                    "data-readonly": (0, l.PB)(i),
                  }),
                  [u, a, y, r, i]
                ),
                k = (0, s.useCallback)(
                  (e = {}, t = null) => ({
                    ...e,
                    ref: t,
                    role: "presentation",
                    "aria-hidden": !0,
                    children: e.children || "*",
                  }),
                  []
                );
              return {
                isRequired: !!n,
                isInvalid: !!r,
                isReadOnly: !!i,
                isDisabled: !!a,
                isFocused: !!y,
                onFocus: () => x(!0),
                onBlur: () => x(!1),
                hasFeedbackText: p,
                setHasFeedbackText: h,
                hasHelpText: g,
                setHasHelpText: b,
                id: d,
                labelId: f,
                feedbackId: v,
                helpTextId: m,
                htmlProps: u,
                getHelpTextProps: w,
                getErrorMessageProps: N,
                getRootProps: C,
                getLabelProps: E,
                getRequiredIndicatorProps: k,
              };
            })(r),
            h = (0, l.cx)("chakra-form-control", e.className);
          return (0,
          d.jsx)(m, { value: p, children: (0, d.jsx)(f, { value: n, children: (0, d.jsx)(c.m.div, { ...a({}, t), className: h, __css: n.container }) }) });
        });
      (h.displayName = "FormControl"),
        ((0, a.G)(function (e, t) {
          let n = p(),
            r = v(),
            o = (0, l.cx)("chakra-form__helper-text", e.className);
          return (0,
          d.jsx)(c.m.div, { ...(null == n ? void 0 : n.getHelpTextProps(e, t)), __css: r.helperText, className: o });
        }).displayName = "FormHelperText");
    },
    20967: function (e, t, n) {
      n.d(t, {
        q: function () {
          return useDisclosure;
        },
      });
      var r = n(67294),
        o =
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
            ? r.useLayoutEffect
            : r.useEffect;
      function chunk_KA2477BY_useCallbackRef(e, t = []) {
        let n = (0, r.useRef)(e);
        return (
          o(() => {
            n.current = e;
          }),
          (0, r.useCallback)((...e) => {
            var t;
            return null == (t = n.current) ? void 0 : t.call(n, ...e);
          }, t)
        );
      }
      var a = n(36597);
      function useDisclosure(e = {}) {
        let { onClose: t, onOpen: n, isOpen: o, id: i } = e,
          u = chunk_KA2477BY_useCallbackRef(n),
          c = chunk_KA2477BY_useCallbackRef(t),
          [l, s] = (0, r.useState)(e.defaultIsOpen || !1),
          [d, f] = (function (e, t) {
            let n = void 0 !== e;
            return [n, n && void 0 !== e ? e : t];
          })(o, l),
          v = (function (e, t) {
            let n = (0, r.useId)();
            return (0, r.useMemo)(
              () => e || [t, n].filter(Boolean).join("-"),
              [e, t, n]
            );
          })(i, "disclosure"),
          m = (0, r.useCallback)(() => {
            d || s(!1), null == c || c();
          }, [d, c]),
          p = (0, r.useCallback)(() => {
            d || s(!0), null == u || u();
          }, [d, u]),
          h = (0, r.useCallback)(() => {
            let e = f ? m : p;
            e();
          }, [f, p, m]);
        return {
          isOpen: !!f,
          onOpen: p,
          onClose: m,
          onToggle: h,
          isControlled: d,
          getButtonProps: (e = {}) => ({
            ...e,
            "aria-expanded": f,
            "aria-controls": v,
            onClick: (0, a.v0)(e.onClick, h),
          }),
          getDisclosureProps: (e = {}) => ({ ...e, hidden: !f, id: v }),
        };
      }
    },
    24027: function (e, t, n) {
      n.d(t, {
        I: function () {
          return createIcon;
        },
      });
      var r = n(36948),
        o = n(16554),
        a = n(67294),
        i = n(85893);
      function createIcon(e) {
        let {
            viewBox: t = "0 0 24 24",
            d: n,
            displayName: u,
            defaultProps: c = {},
          } = e,
          l = a.Children.toArray(e.path),
          s = (0, o.G)((e, o) =>
            (0, i.jsx)(r.J, {
              ref: o,
              viewBox: t,
              ...c,
              ...e,
              children: l.length
                ? l
                : (0, i.jsx)("path", { fill: "currentColor", d: n }),
            })
          );
        return (s.displayName = u), s;
      }
    },
    33090: function (e, t, n) {
      n.d(t, {
        I: function () {
          return s;
        },
      });
      var r = n(28912),
        o = n(16554),
        a = n(77030),
        i = n(33179),
        u = n(13314),
        c = n(25432),
        l = n(85893),
        s = (0, o.G)(function (e, t) {
          let { htmlSize: n, ...o } = e,
            s = (0, a.jC)("Input", o),
            d = (0, i.Lr)(o),
            f = (0, r.Y)(d),
            v = (0, c.cx)("chakra-input", e.className);
          return (0,
          l.jsx)(u.m.input, { size: n, ...f, __css: s.field, ref: t, className: v });
        });
      (s.displayName = "Input"), (s.id = "Input");
    },
    66205: function (e, t, n) {
      n.d(t, {
        o: function () {
          return c;
        },
      });
      var r = n(7755),
        o = n(3949),
        a = n(25432),
        i = n(16554),
        u = n(85893),
        c = (0, i.G)((e, t) => {
          let { onClick: n, className: i, ...c } = e,
            { onClose: l } = (0, r.vR)(),
            s = (0, a.cx)("chakra-modal__close-btn", i),
            d = (0, r.I_)();
          return (0, u.jsx)(o.P, {
            ref: t,
            __css: d.closeButton,
            className: s,
            onClick: (0, a.v0)(n, (e) => {
              e.stopPropagation(), l();
            }),
            ...c,
          });
        });
      c.displayName = "ModalCloseButton";
    },
    64859: function (e, t, n) {
      n.d(t, {
        x: function () {
          return l;
        },
      });
      var r = n(7755),
        o = n(25432),
        a = n(16554),
        i = n(13314),
        u = n(67294),
        c = n(85893),
        l = (0, a.G)((e, t) => {
          let { className: n, ...a } = e,
            { headerId: l, setHeaderMounted: s } = (0, r.vR)();
          (0, u.useEffect)(() => (s(!0), () => s(!1)), [s]);
          let d = (0, o.cx)("chakra-modal__header", n),
            f = (0, r.I_)(),
            v = { flex: 0, ...f.header };
          return (0, c.jsx)(i.m.header, {
            ref: t,
            className: d,
            id: l,
            ...a,
            __css: v,
          });
        });
      l.displayName = "ModalHeader";
    },
    32856: function (e, t, n) {
      n.d(t, {
        m: function () {
          return a;
        },
        $: function () {
          return useModalManager;
        },
      });
      var r = Object.defineProperty,
        __defNormalProp = (e, t, n) =>
          t in e
            ? r(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        __publicField = (e, t, n) => (
          __defNormalProp(e, "symbol" != typeof t ? t + "" : t, n), n
        ),
        o = n(67294),
        a = new (class {
          constructor() {
            __publicField(this, "modals"), (this.modals = new Map());
          }
          add(e) {
            return this.modals.set(e, this.modals.size + 1), this.modals.size;
          }
          remove(e) {
            this.modals.delete(e);
          }
          isTopModal(e) {
            return !!e && this.modals.get(e) === this.modals.size;
          }
        })();
      function useModalManager(e, t) {
        let [n, r] = (0, o.useState)(0);
        return (
          (0, o.useEffect)(() => {
            let n = e.current;
            if (n) {
              if (t) {
                let e = a.add(n);
                r(e);
              }
              return () => {
                a.remove(n), r(0);
              };
            }
          }, [t, e]),
          n
        );
      }
    },
    14581: function (e, t, n) {
      n.d(t, {
        h: function () {
          return g;
        },
      });
      var r = n(13314),
        o = n(52094),
        a = n(25432),
        i = n(51526),
        u = n(78766),
        c = n(67294),
        l = n(85893),
        s = {
          initial: "initial",
          animate: "enter",
          exit: "exit",
          variants: {
            initial: ({
              offsetX: e,
              offsetY: t,
              transition: n,
              transitionEnd: r,
              delay: a,
            }) => {
              var i;
              return {
                opacity: 0,
                x: e,
                y: t,
                transition:
                  null != (i = null == n ? void 0 : n.exit)
                    ? i
                    : o.p$.exit(o.Sh.exit, a),
                transitionEnd: null == r ? void 0 : r.exit,
              };
            },
            enter: ({ transition: e, transitionEnd: t, delay: n }) => {
              var r;
              return {
                opacity: 1,
                x: 0,
                y: 0,
                transition:
                  null != (r = null == e ? void 0 : e.enter)
                    ? r
                    : o.p$.enter(o.Sh.enter, n),
                transitionEnd: null == t ? void 0 : t.enter,
              };
            },
            exit: ({
              offsetY: e,
              offsetX: t,
              transition: n,
              transitionEnd: r,
              reverse: a,
              delay: i,
            }) => {
              var u;
              let c = { x: t, y: e };
              return {
                opacity: 0,
                transition:
                  null != (u = null == n ? void 0 : n.exit)
                    ? u
                    : o.p$.exit(o.Sh.exit, i),
                ...(a
                  ? { ...c, transitionEnd: null == r ? void 0 : r.exit }
                  : {
                      transitionEnd: { ...c, ...(null == r ? void 0 : r.exit) },
                    }),
              };
            },
          },
        };
      (0, c.forwardRef)(function (e, t) {
        let {
            unmountOnExit: n,
            in: r,
            reverse: o = !0,
            className: c,
            offsetX: d = 0,
            offsetY: f = 8,
            transition: v,
            transitionEnd: m,
            delay: p,
            ...h
          } = e,
          g = !n || (r && n),
          b = r || n ? "enter" : "exit",
          y = {
            offsetX: d,
            offsetY: f,
            reverse: o,
            transition: v,
            transitionEnd: m,
            delay: p,
          };
        return (0,
        l.jsx)(i.M, { custom: y, children: g && (0, l.jsx)(u.E.div, { ref: t, className: (0, a.cx)("chakra-offset-slide", c), custom: y, ...s, animate: b, ...h }) });
      }).displayName = "SlideFade";
      var d = {
        initial: "exit",
        animate: "enter",
        exit: "exit",
        variants: {
          exit: ({
            reverse: e,
            initialScale: t,
            transition: n,
            transitionEnd: r,
            delay: a,
          }) => {
            var i;
            return {
              opacity: 0,
              ...(e
                ? { scale: t, transitionEnd: null == r ? void 0 : r.exit }
                : {
                    transitionEnd: {
                      scale: t,
                      ...(null == r ? void 0 : r.exit),
                    },
                  }),
              transition:
                null != (i = null == n ? void 0 : n.exit)
                  ? i
                  : o.p$.exit(o.Sh.exit, a),
            };
          },
          enter: ({ transitionEnd: e, transition: t, delay: n }) => {
            var r;
            return {
              opacity: 1,
              scale: 1,
              transition:
                null != (r = null == t ? void 0 : t.enter)
                  ? r
                  : o.p$.enter(o.Sh.enter, n),
              transitionEnd: null == e ? void 0 : e.enter,
            };
          },
        },
      };
      (0, c.forwardRef)(function (e, t) {
        let {
            unmountOnExit: n,
            in: r,
            reverse: o = !0,
            initialScale: c = 0.95,
            className: s,
            transition: f,
            transitionEnd: v,
            delay: m,
            ...p
          } = e,
          h = !n || (r && n),
          g = r || n ? "enter" : "exit",
          b = {
            initialScale: c,
            reverse: o,
            transition: f,
            transitionEnd: v,
            delay: m,
          };
        return (0,
        l.jsx)(i.M, { custom: b, children: h && (0, l.jsx)(u.E.div, { ref: t, className: (0, a.cx)("chakra-offset-slide", s), ...d, animate: g, custom: b, ...p }) });
      }).displayName = "ScaleFade";
      var f = {
          slideInBottom: { ...s, custom: { offsetY: 16, reverse: !0 } },
          slideInRight: { ...s, custom: { offsetX: 16, reverse: !0 } },
          slideInTop: { ...s, custom: { offsetY: -16, reverse: !0 } },
          slideInLeft: { ...s, custom: { offsetX: -16, reverse: !0 } },
          scale: { ...d, custom: { initialScale: 0.95, reverse: !0 } },
          none: {},
        },
        v = (0, r.m)(u.E.section),
        getMotionProps = (e) => f[e || "none"],
        m = (0, c.forwardRef)((e, t) => {
          let { preset: n, motionProps: r = getMotionProps(n), ...o } = e;
          return (0, l.jsx)(v, { ref: t, ...r, ...o });
        });
      m.displayName = "ModalTransition";
      var p = n(45272),
        h = n(7755),
        g = (0, n(16554).G)((e, t) => {
          let {
              className: n,
              children: o,
              containerProps: i,
              motionProps: u,
              ...c
            } = e,
            { getDialogProps: s, getDialogContainerProps: d } = (0, h.vR)(),
            f = s(c, t),
            v = d(i),
            g = (0, a.cx)("chakra-modal__content", n),
            b = (0, h.I_)(),
            y = {
              display: "flex",
              flexDirection: "column",
              position: "relative",
              width: "100%",
              outline: 0,
              ...b.dialog,
            },
            x = {
              display: "flex",
              width: "100vw",
              height: "$100vh",
              position: "fixed",
              left: 0,
              top: 0,
              ...b.dialogContainer,
            },
            { motionPreset: w } = (0, h.vR)();
          return (0, l.jsx)(p.M, {
            children: (0, l.jsx)(r.m.div, {
              ...v,
              className: "chakra-modal__content-container",
              tabIndex: -1,
              __css: x,
              children: (0, l.jsx)(m, {
                preset: w,
                motionProps: u,
                className: g,
                ...f,
                __css: y,
                children: o,
              }),
            }),
          });
        });
      g.displayName = "ModalContent";
    },
    19778: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var r = n(7755),
        o = n(25432),
        a = n(13314),
        i = n(16554),
        u = n(52094),
        c = n(51526),
        l = n(78766),
        s = n(67294),
        d = n(85893),
        f = {
          initial: "exit",
          animate: "enter",
          exit: "exit",
          variants: {
            enter: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
              var r;
              return {
                opacity: 1,
                transition:
                  null != (r = null == e ? void 0 : e.enter)
                    ? r
                    : u.p$.enter(u.Sh.enter, n),
                transitionEnd: null == t ? void 0 : t.enter,
              };
            },
            exit: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
              var r;
              return {
                opacity: 0,
                transition:
                  null != (r = null == e ? void 0 : e.exit)
                    ? r
                    : u.p$.exit(u.Sh.exit, n),
                transitionEnd: null == t ? void 0 : t.exit,
              };
            },
          },
        };
      (0, s.forwardRef)(function (e, t) {
        let {
            unmountOnExit: n,
            in: r,
            className: a,
            transition: i,
            transitionEnd: u,
            delay: s,
            ...v
          } = e,
          m = r || n ? "enter" : "exit",
          p = !n || (r && n),
          h = { transition: i, transitionEnd: u, delay: s };
        return (0,
        d.jsx)(c.M, { custom: h, children: p && (0, d.jsx)(l.E.div, { ref: t, className: (0, o.cx)("chakra-fade", a), custom: h, ...f, animate: m, ...v }) });
      }).displayName = "Fade";
      var v = (0, a.m)(l.E.div),
        m = (0, i.G)((e, t) => {
          let { className: n, transition: a, motionProps: i, ...u } = e,
            c = (0, o.cx)("chakra-modal__overlay", n),
            l = (0, r.I_)(),
            s = {
              pos: "fixed",
              left: "0",
              top: "0",
              w: "100vw",
              h: "100vh",
              ...l.overlay,
            },
            { motionPreset: m } = (0, r.vR)(),
            p = "none" === m ? {} : f,
            h = i || p;
          return (0, d.jsx)(v, { ...h, __css: s, ref: t, className: c, ...u });
        });
      m.displayName = "ModalOverlay";
    },
    7755: function (e, t, n) {
      n.d(t, {
        u_: function () {
          return Modal;
        },
        vR: function () {
          return y;
        },
        I_: function () {
          return g;
        },
      });
      var r = n(32856),
        o = n(25432),
        a = n(81103),
        i = new WeakMap(),
        u = new WeakMap(),
        c = {},
        l = 0,
        unwrapHost = function (e) {
          return e && (e.host || unwrapHost(e.parentNode));
        },
        applyAttributeToOthers = function (e, t, n, r) {
          var o = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = unwrapHost(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          c[n] || (c[n] = new WeakMap());
          var a = c[n],
            s = [],
            d = new Set(),
            f = new Set(o),
            keep = function (e) {
              !e || d.has(e) || (d.add(e), keep(e.parentNode));
            };
          o.forEach(keep);
          var deep = function (e) {
            !e ||
              f.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (d.has(e)) deep(e);
                else {
                  var t = e.getAttribute(r),
                    o = null !== t && "false" !== t,
                    c = (i.get(e) || 0) + 1,
                    l = (a.get(e) || 0) + 1;
                  i.set(e, c),
                    a.set(e, l),
                    s.push(e),
                    1 === c && o && u.set(e, !0),
                    1 === l && e.setAttribute(n, "true"),
                    o || e.setAttribute(r, "true");
                }
              });
          };
          return (
            deep(t),
            d.clear(),
            l++,
            function () {
              s.forEach(function (e) {
                var t = i.get(e) - 1,
                  o = a.get(e) - 1;
                i.set(e, t),
                  a.set(e, o),
                  t || (u.has(e) || e.removeAttribute(r), u.delete(e)),
                  o || e.removeAttribute(n);
              }),
                --l ||
                  ((i = new WeakMap()),
                  (i = new WeakMap()),
                  (u = new WeakMap()),
                  (c = {}));
            }
          );
        },
        hideOthers = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
              applyAttributeToOthers(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        },
        s = n(67294),
        d = n(1702),
        f = n(55227),
        v = n(77030),
        m = n(51526),
        p = n(85893),
        [h, g] = (0, f.k)({
          name: "ModalStylesContext",
          errorMessage:
            "useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Modal />\" ",
        }),
        [b, y] = (0, f.k)({
          strict: !0,
          name: "ModalContext",
          errorMessage:
            "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`",
        }),
        Modal = (e) => {
          let t = {
              scrollBehavior: "outside",
              autoFocus: !0,
              trapFocus: !0,
              returnFocusOnClose: !0,
              blockScrollOnMount: !0,
              allowPinchZoom: !1,
              motionPreset: "scale",
              lockFocusAcrossFrames: !0,
              ...e,
            },
            {
              portalProps: n,
              children: i,
              autoFocus: u,
              trapFocus: c,
              initialFocusRef: l,
              finalFocusRef: f,
              returnFocusOnClose: g,
              blockScrollOnMount: y,
              allowPinchZoom: x,
              preserveScrollBarGap: w,
              motionPreset: E,
              lockFocusAcrossFrames: N,
              onCloseComplete: C,
            } = t,
            k = (0, v.jC)("Modal", t),
            F = (function (e) {
              let {
                  isOpen: t,
                  onClose: n,
                  id: i,
                  closeOnOverlayClick: u = !0,
                  closeOnEsc: c = !0,
                  useInert: l = !0,
                  onOverlayClick: d,
                  onEsc: f,
                } = e,
                v = (0, s.useRef)(null),
                m = (0, s.useRef)(null),
                [p, h, g] = (function (e, ...t) {
                  let n = (0, s.useId)(),
                    r = e || n;
                  return (0, s.useMemo)(
                    () => t.map((e) => `${e}-${r}`),
                    [r, t]
                  );
                })(
                  i,
                  "chakra-modal",
                  "chakra-modal--header",
                  "chakra-modal--body"
                );
              !(function (e, t) {
                let n = e.current;
                (0, s.useEffect)(() => {
                  if (e.current && t) return hideOthers(e.current);
                }, [t, e, n]);
              })(v, t && l);
              let b = (0, r.$)(v, t),
                y = (0, s.useRef)(null),
                x = (0, s.useCallback)((e) => {
                  y.current = e.target;
                }, []),
                w = (0, s.useCallback)(
                  (e) => {
                    "Escape" === e.key &&
                      (e.stopPropagation(),
                      c && (null == n || n()),
                      null == f || f());
                  },
                  [c, n, f]
                ),
                [E, N] = (0, s.useState)(!1),
                [C, k] = (0, s.useState)(!1),
                F = (0, s.useCallback)(
                  (e = {}, t = null) => ({
                    role: "dialog",
                    ...e,
                    ref: (0, a.lq)(t, v),
                    id: p,
                    tabIndex: -1,
                    "aria-modal": !0,
                    "aria-labelledby": E ? h : void 0,
                    "aria-describedby": C ? g : void 0,
                    onClick: (0, o.v0)(e.onClick, (e) => e.stopPropagation()),
                  }),
                  [g, C, p, h, E]
                ),
                _ = (0, s.useCallback)(
                  (e) => {
                    e.stopPropagation(),
                      y.current === e.target &&
                        r.m.isTopModal(v.current) &&
                        (u && (null == n || n()), null == d || d());
                  },
                  [n, u, d]
                ),
                S = (0, s.useCallback)(
                  (e = {}, t = null) => ({
                    ...e,
                    ref: (0, a.lq)(t, m),
                    onClick: (0, o.v0)(e.onClick, _),
                    onKeyDown: (0, o.v0)(e.onKeyDown, w),
                    onMouseDown: (0, o.v0)(e.onMouseDown, x),
                  }),
                  [w, x, _]
                );
              return {
                isOpen: t,
                onClose: n,
                headerId: h,
                bodyId: g,
                setBodyMounted: k,
                setHeaderMounted: N,
                dialogRef: v,
                overlayRef: m,
                getDialogProps: F,
                getDialogContainerProps: S,
                index: b,
              };
            })(t),
            _ = {
              ...F,
              autoFocus: u,
              trapFocus: c,
              initialFocusRef: l,
              finalFocusRef: f,
              returnFocusOnClose: g,
              blockScrollOnMount: y,
              allowPinchZoom: x,
              preserveScrollBarGap: w,
              motionPreset: E,
              lockFocusAcrossFrames: N,
            };
          return (0, p.jsx)(b, {
            value: _,
            children: (0, p.jsx)(h, {
              value: k,
              children: (0, p.jsx)(m.M, {
                onExitComplete: C,
                children: _.isOpen && (0, p.jsx)(d.h, { ...n, children: i }),
              }),
            }),
          });
        };
      Modal.displayName = "Modal";
    },
    45272: function (e, t, n) {
      n.d(t, {
        M: function () {
          return ModalFocusScope;
        },
      });
      var r,
        o,
        a,
        i,
        u,
        c,
        l,
        s,
        d = n(7755),
        f = n(32856),
        v = n(87462),
        m = n(67294),
        p = "data-focus-lock",
        h = "data-focus-lock-disabled";
      function useMergeRefs(e, t) {
        var n, r, o;
        return (
          (n = t || null),
          (r = function (t) {
            return e.forEach(function (e) {
              return "function" == typeof e ? e(t) : e && (e.current = t), e;
            });
          }),
          ((o = (0, m.useState)(function () {
            return {
              value: n,
              callback: r,
              facade: {
                get current() {
                  return o.value;
                },
                set current(value) {
                  var e = o.value;
                  e !== value && ((o.value = value), o.callback(value, e));
                },
              },
            };
          })[0]).callback = r),
          o.facade
        );
      }
      var g = {
          width: "1px",
          height: "0px",
          padding: 0,
          overflow: "hidden",
          position: "fixed",
          top: "1px",
          left: "1px",
        },
        InFocusGuard = function (e) {
          var t = e.children;
          return m.createElement(
            m.Fragment,
            null,
            m.createElement("div", {
              key: "guard-first",
              "data-focus-guard": !0,
              "data-focus-auto-guard": !0,
              style: g,
            }),
            t,
            t &&
              m.createElement("div", {
                key: "guard-last",
                "data-focus-guard": !0,
                "data-focus-auto-guard": !0,
                style: g,
              })
          );
        };
      (InFocusGuard.propTypes = {}),
        (InFocusGuard.defaultProps = { children: null });
      var b = n(97582);
      function ItoI(e) {
        return e;
      }
      function innerCreateMedium(e, t) {
        void 0 === t && (t = ItoI);
        var n = [],
          r = !1;
        return {
          read: function () {
            if (r)
              throw Error(
                "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
              );
            return n.length ? n[n.length - 1] : e;
          },
          useMedium: function (e) {
            var o = t(e, r);
            return (
              n.push(o),
              function () {
                n = n.filter(function (e) {
                  return e !== o;
                });
              }
            );
          },
          assignSyncMedium: function (e) {
            for (r = !0; n.length; ) {
              var t = n;
              (n = []), t.forEach(e);
            }
            n = {
              push: function (t) {
                return e(t);
              },
              filter: function () {
                return n;
              },
            };
          },
          assignMedium: function (e) {
            r = !0;
            var t = [];
            if (n.length) {
              var o = n;
              (n = []), o.forEach(e), (t = n);
            }
            var executeQueue = function () {
                var n = t;
                (t = []), n.forEach(e);
              },
              cycle = function () {
                return Promise.resolve().then(executeQueue);
              };
            cycle(),
              (n = {
                push: function (e) {
                  t.push(e), cycle();
                },
                filter: function (e) {
                  return (t = t.filter(e)), n;
                },
              });
          },
        };
      }
      function createMedium(e, t) {
        return void 0 === t && (t = ItoI), innerCreateMedium(e, t);
      }
      var y = createMedium({}, function (e) {
          return { target: e.target, currentTarget: e.currentTarget };
        }),
        x = createMedium(),
        w = createMedium(),
        E =
          (((r = innerCreateMedium(null)).options = (0, b.__assign)(
            { async: !0, ssr: !1 },
            { async: !0 }
          )),
          r),
        N = [],
        C = m.forwardRef(function (e, t) {
          var n,
            r = m.useState(),
            o = r[0],
            a = r[1],
            i = m.useRef(),
            u = m.useRef(!1),
            c = m.useRef(null),
            l = e.children,
            s = e.disabled,
            d = e.noFocusGuards,
            f = e.persistentFocus,
            b = e.crossFrame,
            w = e.autoFocus,
            C = (e.allowTextSelection, e.group),
            k = e.className,
            F = e.whiteList,
            _ = e.hasPositiveIndices,
            S = e.shards,
            A = void 0 === S ? N : S,
            M = e.as,
            I = void 0 === M ? "div" : M,
            T = e.lockProps,
            P = void 0 === T ? {} : T,
            O = e.sideCar,
            R = e.returnFocus,
            B = e.focusOptions,
            D = e.onActivation,
            j = e.onDeactivation,
            L = m.useState({})[0],
            W = m.useCallback(
              function () {
                (c.current = c.current || (document && document.activeElement)),
                  i.current && D && D(i.current),
                  (u.current = !0);
              },
              [D]
            ),
            G = m.useCallback(
              function () {
                (u.current = !1), j && j(i.current);
              },
              [j]
            );
          (0, m.useEffect)(function () {
            s || (c.current = null);
          }, []);
          var H = m.useCallback(
              function (e) {
                var t = c.current;
                if (t && t.focus) {
                  var n = "function" == typeof R ? R(t) : R;
                  if (n) {
                    var r = "object" == typeof n ? n : void 0;
                    (c.current = null),
                      e
                        ? Promise.resolve().then(function () {
                            return t.focus(r);
                          })
                        : t.focus(r);
                  }
                }
              },
              [R]
            ),
            Y = m.useCallback(function (e) {
              u.current && y.useMedium(e);
            }, []),
            q = x.useMedium,
            $ = m.useCallback(function (e) {
              i.current !== e && ((i.current = e), a(e));
            }, []),
            U = (0, v.Z)((((n = {})[h] = s && "disabled"), (n[p] = C), n), P),
            X = !0 !== d,
            Z = X && "tail" !== d,
            V = useMergeRefs([t, $]);
          return m.createElement(
            m.Fragment,
            null,
            X && [
              m.createElement("div", {
                key: "guard-first",
                "data-focus-guard": !0,
                tabIndex: s ? -1 : 0,
                style: g,
              }),
              _
                ? m.createElement("div", {
                    key: "guard-nearest",
                    "data-focus-guard": !0,
                    tabIndex: s ? -1 : 1,
                    style: g,
                  })
                : null,
            ],
            !s &&
              m.createElement(O, {
                id: L,
                sideCar: E,
                observed: o,
                disabled: s,
                persistentFocus: f,
                crossFrame: b,
                autoFocus: w,
                whiteList: F,
                shards: A,
                onActivation: W,
                onDeactivation: G,
                returnFocus: H,
                focusOptions: B,
              }),
            m.createElement(
              I,
              (0, v.Z)({ ref: V }, U, { className: k, onBlur: q, onFocus: Y }),
              l
            ),
            Z &&
              m.createElement("div", {
                "data-focus-guard": !0,
                tabIndex: s ? -1 : 0,
                style: g,
              })
          );
        });
      (C.propTypes = {}),
        (C.defaultProps = {
          children: void 0,
          disabled: !1,
          returnFocus: !1,
          focusOptions: void 0,
          noFocusGuards: !1,
          autoFocus: !0,
          persistentFocus: !1,
          crossFrame: !0,
          hasPositiveIndices: void 0,
          allowTextSelection: void 0,
          group: void 0,
          className: void 0,
          whiteList: void 0,
          shards: void 0,
          as: "div",
          lockProps: {},
          onActivation: void 0,
          onDeactivation: void 0,
        });
      var k = n(75068),
        F = n(81180),
        toArray = function (e) {
          for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
          return t;
        },
        asArray = function (e) {
          return Array.isArray(e) ? e : [e];
        },
        getFirst = function (e) {
          return Array.isArray(e) ? e[0] : e;
        },
        isElementHidden = function (e) {
          if (e.nodeType !== Node.ELEMENT_NODE) return !1;
          var t = window.getComputedStyle(e, null);
          return (
            !!t &&
            !!t.getPropertyValue &&
            ("none" === t.getPropertyValue("display") ||
              "hidden" === t.getPropertyValue("visibility"))
          );
        },
        getParentNode = function (e) {
          return e.parentNode &&
            e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
            ? e.parentNode.host
            : e.parentNode;
        },
        isTopNode = function (e) {
          return e === document || (e && e.nodeType === Node.DOCUMENT_NODE);
        },
        isVisibleCached = function (e, t) {
          var n,
            r = e.get(t);
          if (void 0 !== r) return r;
          var o =
            ((n = isVisibleCached.bind(void 0, e)),
            !t || isTopNode(t) || (!isElementHidden(t) && n(getParentNode(t))));
          return e.set(t, o), o;
        },
        isAutoFocusAllowedCached = function (e, t) {
          var n,
            r = e.get(t);
          if (void 0 !== r) return r;
          var o =
            ((n = isAutoFocusAllowedCached.bind(void 0, e)),
            !t ||
              !!isTopNode(t) ||
              (!!isAutoFocusAllowed(t) && n(getParentNode(t))));
          return e.set(t, o), o;
        },
        getDataset = function (e) {
          return e.dataset;
        },
        isHTMLInputElement = function (e) {
          return "INPUT" === e.tagName;
        },
        isRadioElement = function (e) {
          return isHTMLInputElement(e) && "radio" === e.type;
        },
        isAutoFocusAllowed = function (e) {
          return ![!0, "true", ""].includes(
            e.getAttribute("data-no-autofocus")
          );
        },
        isGuard = function (e) {
          var t;
          return !!(
            e &&
            (null === (t = getDataset(e)) || void 0 === t
              ? void 0
              : t.focusGuard)
          );
        },
        isNotAGuard = function (e) {
          return !isGuard(e);
        },
        isDefined = function (e) {
          return !!e;
        },
        tabSort = function (e, t) {
          var n = e.tabIndex - t.tabIndex,
            r = e.index - t.index;
          if (n) {
            if (!e.tabIndex) return 1;
            if (!t.tabIndex) return -1;
          }
          return n || r;
        },
        orderByTabIndex = function (e, t, n) {
          return toArray(e)
            .map(function (e, t) {
              return {
                node: e,
                index: t,
                tabIndex:
                  n && -1 === e.tabIndex
                    ? (e.dataset || {}).focusGuard
                      ? 0
                      : -1
                    : e.tabIndex,
              };
            })
            .filter(function (e) {
              return !t || e.tabIndex >= 0;
            })
            .sort(tabSort);
        },
        _ =
          "button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]",
        S = "".concat(_, ", [data-focus-guard]"),
        getFocusablesWithShadowDom = function (e, t) {
          return toArray((e.shadowRoot || e).children).reduce(function (e, n) {
            return e.concat(
              n.matches(t ? S : _) ? [n] : [],
              getFocusablesWithShadowDom(n)
            );
          }, []);
        },
        getFocusablesWithIFrame = function (e, t) {
          var n;
          return e instanceof HTMLIFrameElement &&
            (null === (n = e.contentDocument) || void 0 === n ? void 0 : n.body)
            ? getFocusables([e.contentDocument.body], t)
            : [e];
        },
        getFocusables = function (e, t) {
          return e.reduce(function (e, n) {
            var r,
              o = getFocusablesWithShadowDom(n, t),
              a = (r = []).concat.apply(
                r,
                o.map(function (e) {
                  return getFocusablesWithIFrame(e, t);
                })
              );
            return e.concat(
              a,
              n.parentNode
                ? toArray(n.parentNode.querySelectorAll(_)).filter(function (
                    e
                  ) {
                    return e === n;
                  })
                : []
            );
          }, []);
        },
        filterFocusable = function (e, t) {
          return toArray(e)
            .filter(function (e) {
              return isVisibleCached(t, e);
            })
            .filter(function (e) {
              return !(
                (isHTMLInputElement(e) || "BUTTON" === e.tagName) &&
                ("hidden" === e.type || e.disabled)
              );
            });
        },
        filterAutoFocusable = function (e, t) {
          return (
            void 0 === t && (t = new Map()),
            toArray(e).filter(function (e) {
              return isAutoFocusAllowedCached(t, e);
            })
          );
        },
        getTabbableNodes = function (e, t, n) {
          return orderByTabIndex(
            filterFocusable(getFocusables(e, n), t),
            !0,
            n
          );
        },
        getFocusableNodes = function (e, t) {
          return orderByTabIndex(filterFocusable(getFocusables(e), t), !1);
        },
        contains = function (e, t) {
          return e.shadowRoot
            ? contains(e.shadowRoot, t)
            : !!(
                void 0 !== Object.getPrototypeOf(e).contains &&
                Object.getPrototypeOf(e).contains.call(e, t)
              ) ||
                toArray(e.children).some(function (e) {
                  var n;
                  if (e instanceof HTMLIFrameElement) {
                    var r =
                      null === (n = e.contentDocument) || void 0 === n
                        ? void 0
                        : n.body;
                    return !!r && contains(r, t);
                  }
                  return contains(e, t);
                });
        },
        safeProbe = function (e) {
          try {
            return e();
          } catch (e) {
            return;
          }
        },
        getActiveElement = function (e) {
          if ((void 0 === e && (e = document), e && e.activeElement)) {
            var t = e.activeElement;
            return t.shadowRoot
              ? getActiveElement(t.shadowRoot)
              : t instanceof HTMLIFrameElement &&
                safeProbe(function () {
                  return t.contentWindow.document;
                })
              ? getActiveElement(t.contentWindow.document)
              : t;
          }
        },
        focusIsHidden = function (e) {
          void 0 === e && (e = document);
          var t = getActiveElement(e);
          return (
            !!t &&
            toArray(
              e.querySelectorAll("[".concat("data-no-focus-lock", "]"))
            ).some(function (e) {
              return contains(e, t);
            })
          );
        },
        filterNested = function (e) {
          for (var t = new Set(), n = e.length, r = 0; r < n; r += 1)
            for (var o = r + 1; o < n; o += 1) {
              var a = e[r].compareDocumentPosition(e[o]);
              (a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o),
                (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
            }
          return e.filter(function (e, n) {
            return !t.has(n);
          });
        },
        getTopParent = function (e) {
          return e.parentNode ? getTopParent(e.parentNode) : e;
        },
        getAllAffectedNodes = function (e) {
          return asArray(e)
            .filter(Boolean)
            .reduce(function (e, t) {
              var n = t.getAttribute(p);
              return (
                e.push.apply(
                  e,
                  n
                    ? filterNested(
                        toArray(
                          getTopParent(t).querySelectorAll(
                            "["
                              .concat(p, '="')
                              .concat(n, '"]:not([')
                              .concat(h, '="disabled"])')
                          )
                        )
                      )
                    : [t]
                ),
                e
              );
            }, []);
        },
        focusInside = function (e, t) {
          return (
            void 0 === t && (t = getActiveElement(getFirst(e).ownerDocument)),
            !!t &&
              (!t.dataset || !t.dataset.focusGuard) &&
              getAllAffectedNodes(e).some(function (e) {
                var n;
                return (
                  contains(e, t) ||
                  ((n = t),
                  !!toArray(e.querySelectorAll("iframe")).some(function (e) {
                    return e === n;
                  }))
                );
              })
          );
        },
        focusOn = function (e, t) {
          "focus" in e && e.focus(t),
            "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
        },
        correctNode = function (e, t) {
          return (
            (isRadioElement(e) &&
              e.name &&
              t
                .filter(isRadioElement)
                .filter(function (t) {
                  return t.name === e.name;
                })
                .filter(function (e) {
                  return e.checked;
                })[0]) ||
            e
          );
        },
        correctNodes = function (e) {
          var t = new Set();
          return (
            e.forEach(function (n) {
              return t.add(correctNode(n, e));
            }),
            e.filter(function (e) {
              return t.has(e);
            })
          );
        },
        pickFirstFocus = function (e) {
          return e[0] && e.length > 1 ? correctNode(e[0], e) : e[0];
        },
        pickFocusable = function (e, t) {
          return e.length > 1 ? e.indexOf(correctNode(e[t], e)) : t;
        },
        A = "NEW_FOCUS",
        newFocus = function (e, t, n, r) {
          var o = e.length,
            a = e[0],
            i = e[o - 1],
            u = isGuard(n);
          if (!(n && e.indexOf(n) >= 0)) {
            var c = void 0 !== n ? t.indexOf(n) : -1,
              l = r ? t.indexOf(r) : c,
              s = r ? e.indexOf(r) : -1,
              d = c - l,
              f = t.indexOf(a),
              v = t.indexOf(i),
              m = correctNodes(t),
              p = (void 0 !== n ? m.indexOf(n) : -1) - (r ? m.indexOf(r) : c),
              h = pickFocusable(e, 0),
              g = pickFocusable(e, o - 1);
            if (-1 === c || -1 === s) return A;
            if (!d && s >= 0) return s;
            if (c <= f && u && Math.abs(d) > 1) return g;
            if (c >= v && u && Math.abs(d) > 1) return h;
            if (d && Math.abs(p) > 1) return s;
            if (c <= f) return g;
            if (c > v) return h;
            if (d) return Math.abs(d) > 1 ? s : (o + s + d) % o;
          }
        },
        pickAutofocus = function (e, t, n) {
          var r = filterAutoFocusable(
            e
              .map(function (e) {
                return e.node;
              })
              .filter(function (e) {
                var t,
                  r =
                    null === (t = getDataset(e)) || void 0 === t
                      ? void 0
                      : t.autofocus;
                return (
                  e.autofocus ||
                  (void 0 !== r && "false" !== r) ||
                  n.indexOf(e) >= 0
                );
              })
          );
          return r && r.length
            ? pickFirstFocus(r)
            : pickFirstFocus(filterAutoFocusable(t));
        },
        getParents = function (e, t) {
          return (
            void 0 === t && (t = []),
            t.push(e),
            e.parentNode && getParents(e.parentNode.host || e.parentNode, t),
            t
          );
        },
        getCommonParent = function (e, t) {
          for (
            var n = getParents(e), r = getParents(t), o = 0;
            o < n.length;
            o += 1
          ) {
            var a = n[o];
            if (r.indexOf(a) >= 0) return a;
          }
          return !1;
        },
        getTopCommonParent = function (e, t, n) {
          var r = asArray(e),
            o = asArray(t),
            a = r[0],
            i = !1;
          return (
            o.filter(Boolean).forEach(function (e) {
              (i = getCommonParent(i || e, e) || i),
                n.filter(Boolean).forEach(function (e) {
                  var t = getCommonParent(a, e);
                  t && (i = !i || contains(t, i) ? t : getCommonParent(t, i));
                });
            }),
            i
          );
        },
        reorderNodes = function (e, t) {
          var n = new Map();
          return (
            t.forEach(function (e) {
              return n.set(e.node, e);
            }),
            e
              .map(function (e) {
                return n.get(e);
              })
              .filter(isDefined)
          );
        },
        focusSolver = function (e, t) {
          var n = getActiveElement(
              asArray(e).length > 0 ? document : getFirst(e).ownerDocument
            ),
            r = getAllAffectedNodes(e).filter(isNotAGuard),
            o = getTopCommonParent(n || e, e, r),
            a = new Map(),
            i = getFocusableNodes(r, a),
            u = getTabbableNodes(r, a).filter(function (e) {
              return isNotAGuard(e.node);
            });
          if (u[0] || (u = i)[0]) {
            var c = getFocusableNodes([o], a).map(function (e) {
                return e.node;
              }),
              l = reorderNodes(c, u),
              s = l.map(function (e) {
                return e.node;
              }),
              d = newFocus(s, c, n, t);
            if (d === A) {
              var f = pickAutofocus(
                i,
                s,
                r.reduce(function (e, t) {
                  return e.concat(
                    filterFocusable(
                      toArray(
                        t.querySelectorAll(
                          "[".concat("data-autofocus-inside", "]")
                        )
                      )
                        .map(function (e) {
                          return getFocusables([e]);
                        })
                        .reduce(function (e, t) {
                          return e.concat(t);
                        }, []),
                      a
                    )
                  );
                }, [])
              );
              return f
                ? { node: f }
                : void console.warn(
                    "focus-lock: cannot find any node to move focus into"
                  );
            }
            return void 0 === d ? d : l[d];
          }
        },
        M = 0,
        I = !1,
        moveFocusInside = function (e, t, n) {
          void 0 === n && (n = {});
          var r = focusSolver(e, t);
          if (!I && r) {
            if (M > 2) {
              console.error(
                "FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"
              ),
                (I = !0),
                setTimeout(function () {
                  I = !1;
                }, 1);
              return;
            }
            M++, focusOn(r.node, n.focusOptions), M--;
          }
        },
        expandFocusableNodes = function (e) {
          var t = getAllAffectedNodes(e).filter(isNotAGuard),
            n = getTopCommonParent(e, e, t),
            r = new Map(),
            o = getTabbableNodes([n], r, !0),
            a = getTabbableNodes(t, r)
              .filter(function (e) {
                return isNotAGuard(e.node);
              })
              .map(function (e) {
                return e.node;
              });
          return o.map(function (e) {
            var t = e.node;
            return {
              node: t,
              index: e.index,
              lockItem: a.indexOf(t) >= 0,
              guard: isGuard(t),
            };
          });
        };
      function deferAction(e) {
        setTimeout(e, 1);
      }
      var T = null,
        P = null,
        O = null,
        R = !1,
        recordPortal = function (e, t) {
          O = { observerNode: e, portaledElement: t };
        };
      function autoGuard(e, t, n, r) {
        var o = null,
          a = e;
        do {
          var i = r[a];
          if (i.guard) i.node.dataset.focusAutoGuard && (o = i);
          else if (i.lockItem) {
            if (a !== e) return;
            o = null;
          } else break;
        } while ((a += n) !== t);
        o && (o.node.tabIndex = 0);
      }
      var extractRef = function (e) {
          return e && "current" in e ? e.current : e;
        },
        activateTrap = function () {
          var e = !1;
          if (T) {
            var t = T,
              n = t.observed,
              r = t.persistentFocus,
              o = t.autoFocus,
              a = t.shards,
              i = t.crossFrame,
              u = t.focusOptions,
              c = n || (O && O.portaledElement),
              l = document && document.activeElement;
            if (c) {
              var s = [c].concat(a.map(extractRef).filter(Boolean));
              if (
                ((!l ||
                  (
                    T.whiteList ||
                    function () {
                      return !0;
                    }
                  )(l)) &&
                  (r ||
                    (i ? !!R : "meanwhile" === R) ||
                    !(
                      (document && document.activeElement === document.body) ||
                      focusIsHidden()
                    ) ||
                    (!P && o)) &&
                  (c &&
                    !(
                      focusInside(s) ||
                      (l &&
                        s.some(function (e) {
                          return (function checkInHost(e, t, n) {
                            return (
                              t &&
                              ((t.host === e &&
                                (!t.activeElement ||
                                  n.contains(t.activeElement))) ||
                                (t.parentNode &&
                                  checkInHost(e, t.parentNode, n)))
                            );
                          })(l, e, e);
                        })) ||
                      (O && O.portaledElement === l)
                    ) &&
                    (document && !P && l && !o
                      ? (l.blur && l.blur(), document.body.focus())
                      : ((e = moveFocusInside(s, P, { focusOptions: u })),
                        (O = {}))),
                  (R = !1),
                  (P = document && document.activeElement)),
                document)
              ) {
                var d = document && document.activeElement,
                  f = expandFocusableNodes(s),
                  v = f
                    .map(function (e) {
                      return e.node;
                    })
                    .indexOf(d);
                v > -1 &&
                  (f
                    .filter(function (e) {
                      var t = e.guard,
                        n = e.node;
                      return t && n.dataset.focusAutoGuard;
                    })
                    .forEach(function (e) {
                      return e.node.removeAttribute("tabIndex");
                    }),
                  autoGuard(v, f.length, 1, f),
                  autoGuard(v, -1, -1, f));
              }
            }
          }
          return e;
        },
        onTrap = function (e) {
          activateTrap() && e && (e.stopPropagation(), e.preventDefault());
        },
        onBlur = function () {
          return deferAction(activateTrap);
        },
        onWindowBlur = function () {
          (R = "just"),
            deferAction(function () {
              R = "meanwhile";
            });
        },
        attachHandler = function () {
          document.addEventListener("focusin", onTrap),
            document.addEventListener("focusout", onBlur),
            window.addEventListener("blur", onWindowBlur);
        },
        detachHandler = function () {
          document.removeEventListener("focusin", onTrap),
            document.removeEventListener("focusout", onBlur),
            window.removeEventListener("blur", onWindowBlur);
        };
      y.assignSyncMedium(function (e) {
        var t = e.target,
          n = e.currentTarget;
        n.contains(t) || recordPortal(n, t);
      }),
        x.assignMedium(onBlur),
        w.assignMedium(function (e) {
          return e({
            moveFocusInside: moveFocusInside,
            focusInside: focusInside,
          });
        });
      var B = ((o = function (e) {
          var t = e.slice(-1)[0];
          t && !T && attachHandler();
          var n = T,
            r = n && t && t.id === n.id;
          (T = t),
            !n ||
              r ||
              (n.onDeactivation(),
              e.filter(function (e) {
                return e.id === n.id;
              }).length || n.returnFocus(!t)),
            t
              ? ((P = null),
                (r && n.observed === t.observed) || t.onActivation(),
                activateTrap(!0),
                deferAction(activateTrap))
              : (detachHandler(), (P = null));
        }),
        function (e) {
          var t,
            n = [];
          function emitChange() {
            o(
              (t = n
                .map(function (e) {
                  return e.props;
                })
                .filter(function (e) {
                  return !e.disabled;
                }))
            );
          }
          var r = (function (r) {
            function SideEffect() {
              return r.apply(this, arguments) || this;
            }
            (0, k.Z)(SideEffect, r),
              (SideEffect.peek = function () {
                return t;
              });
            var o = SideEffect.prototype;
            return (
              (o.componentDidMount = function () {
                n.push(this), emitChange();
              }),
              (o.componentDidUpdate = function () {
                emitChange();
              }),
              (o.componentWillUnmount = function () {
                var e = n.indexOf(this);
                n.splice(e, 1), emitChange();
              }),
              (o.render = function () {
                return m.createElement(e, this.props);
              }),
              SideEffect
            );
          })(m.PureComponent);
          return (
            (0, F.Z)(
              r,
              "displayName",
              "SideEffect(" + (e.displayName || e.name || "Component") + ")"
            ),
            r
          );
        })(function () {
          return null;
        }),
        D = m.forwardRef(function (e, t) {
          return m.createElement(C, (0, v.Z)({ sideCar: B, ref: t }, e));
        }),
        j = C.propTypes || {};
      j.sideCar,
        (function (e, t) {
          if (null != e) {
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              t.indexOf((n = a[r])) >= 0 || (o[n] = e[n]);
          }
        })(j, ["sideCar"]),
        (D.propTypes = {});
      var L = n(42657),
        W = n(85893),
        G = null != (s = D.default) ? s : D,
        chunk_UU5OHSNF_FocusLock = (e) => {
          let {
              initialFocusRef: t,
              finalFocusRef: n,
              contentRef: r,
              restoreFocus: o,
              children: a,
              isDisabled: i,
              autoFocus: u,
              persistentFocus: c,
              lockFocusAcrossFrames: l,
            } = e,
            s = (0, m.useCallback)(() => {
              if (null == t ? void 0 : t.current) t.current.focus();
              else if (null == r ? void 0 : r.current) {
                let e = (0, L.t5)(r.current);
                0 === e.length &&
                  requestAnimationFrame(() => {
                    var e;
                    null == (e = r.current) || e.focus();
                  });
              }
            }, [t, r]),
            d = (0, m.useCallback)(() => {
              var e;
              null == (e = null == n ? void 0 : n.current) || e.focus();
            }, [n]),
            f = o && !n;
          return (0, W.jsx)(G, {
            crossFrame: l,
            persistentFocus: c,
            autoFocus: u,
            disabled: i,
            onActivation: s,
            onDeactivation: d,
            returnFocus: f,
            children: a,
          });
        };
      chunk_UU5OHSNF_FocusLock.displayName = "FocusLock";
      var H = n(15947),
        Y = "right-scroll-bar-position",
        q = "width-before-scroll-bar",
        $ =
          (void 0 === a && (a = {}),
          ((void 0 === i &&
            (i = function (e) {
              return e;
            }),
          (u = []),
          (c = !1),
          (l = {
            read: function () {
              if (c)
                throw Error(
                  "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                );
              return u.length ? u[u.length - 1] : null;
            },
            useMedium: function (e) {
              var t = i(e, c);
              return (
                u.push(t),
                function () {
                  u = u.filter(function (e) {
                    return e !== t;
                  });
                }
              );
            },
            assignSyncMedium: function (e) {
              for (c = !0; u.length; ) {
                var t = u;
                (u = []), t.forEach(e);
              }
              u = {
                push: function (t) {
                  return e(t);
                },
                filter: function () {
                  return u;
                },
              };
            },
            assignMedium: function (e) {
              c = !0;
              var t = [];
              if (u.length) {
                var n = u;
                (u = []), n.forEach(e), (t = u);
              }
              var executeQueue = function () {
                  var n = t;
                  (t = []), n.forEach(e);
                },
                cycle = function () {
                  return Promise.resolve().then(executeQueue);
                };
              cycle(),
                (u = {
                  push: function (e) {
                    t.push(e), cycle();
                  },
                  filter: function (e) {
                    return (t = t.filter(e)), u;
                  },
                });
            },
          })).options = (0, b.__assign)({ async: !0, ssr: !1 }, a)),
          l),
        nothing = function () {},
        U = m.forwardRef(function (e, t) {
          var n = m.useRef(null),
            r = m.useState({
              onScrollCapture: nothing,
              onWheelCapture: nothing,
              onTouchMoveCapture: nothing,
            }),
            o = r[0],
            a = r[1],
            i = e.forwardProps,
            u = e.children,
            c = e.className,
            l = e.removeScrollBar,
            s = e.enabled,
            d = e.shards,
            f = e.sideCar,
            v = e.noIsolation,
            p = e.inert,
            h = e.allowPinchZoom,
            g = e.as,
            y = void 0 === g ? "div" : g,
            x = e.gapMode,
            w = (0, b.__rest)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            E = useMergeRefs([n, t]),
            N = (0, b.__assign)((0, b.__assign)({}, w), o);
          return m.createElement(
            m.Fragment,
            null,
            s &&
              m.createElement(f, {
                sideCar: $,
                removeScrollBar: l,
                shards: d,
                noIsolation: v,
                inert: p,
                setCallbacks: a,
                allowPinchZoom: !!h,
                lockRef: n,
                gapMode: x,
              }),
            i
              ? m.cloneElement(
                  m.Children.only(u),
                  (0, b.__assign)((0, b.__assign)({}, N), { ref: E })
                )
              : m.createElement(
                  y,
                  (0, b.__assign)({}, N, { className: c, ref: E }),
                  u
                )
          );
        });
      (U.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (U.classNames = { fullWidth: q, zeroRight: Y });
      var SideCar = function (e) {
        var t = e.sideCar,
          n = (0, b.__rest)(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return m.createElement(r, (0, b.__assign)({}, n));
      };
      SideCar.isSideCarExport = !0;
      var X = n(65415),
        Z = { left: 0, top: 0, right: 0, gap: 0 },
        parse = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        getOffset = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [parse(n), parse(r), parse(o)];
        },
        getGapWidth = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return Z;
          var t = getOffset(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        V = (0, X.Ws)(),
        getStyles = function (e, t, n, r) {
          var o = e.left,
            a = e.top,
            i = e.right,
            u = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  body {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(a, "px;\n    padding-right: ")
                      .concat(
                        i,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(u, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(u, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(Y, " {\n    right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(q, " {\n    margin-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(Y, " .")
              .concat(Y, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(q, " .")
              .concat(q, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(u, "px;\n  }\n")
          );
        },
        RemoveScrollBar = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r,
            a = m.useMemo(
              function () {
                return getGapWidth(o);
              },
              [o]
            );
          return m.createElement(V, {
            styles: getStyles(a, !t, o, n ? "" : "!important"),
          });
        },
        K = !1;
      if ("undefined" != typeof window)
        try {
          var Q = Object.defineProperty({}, "passive", {
            get: function () {
              return (K = !0), !0;
            },
          });
          window.addEventListener("test", Q, Q),
            window.removeEventListener("test", Q, Q);
        } catch (e) {
          K = !1;
        }
      var z = !!K && { passive: !1 },
        elementCanBeScrolled = function (e, t) {
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        locationCouldBeScrolled = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              elementCouldBeScrolled(e, r))
            ) {
              var o = getScrollVariables(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        elementCouldBeScrolled = function (e, t) {
          return "v" === e
            ? elementCanBeScrolled(t, "overflowY")
            : elementCanBeScrolled(t, "overflowX");
        },
        getScrollVariables = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        handleScroll = function (e, t, n, r, o) {
          var a,
            i =
              ((a = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === a ? -1 : 1),
            u = i * r,
            c = n.target,
            l = t.contains(c),
            s = !1,
            d = u > 0,
            f = 0,
            v = 0;
          do {
            var m = getScrollVariables(e, c),
              p = m[0],
              h = m[1] - m[2] - i * p;
            (p || h) && elementCouldBeScrolled(e, c) && ((f += h), (v += p)),
              (c = c instanceof ShadowRoot ? c.host : c.parentNode);
          } while (
            (!l && c !== document.body) ||
            (l && (t.contains(c) || t === c))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && u > f))
              ? (s = !0)
              : !d && ((o && 1 > Math.abs(v)) || (!o && -u > v)) && (s = !0),
            s
          );
        },
        getTouchXY = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        getDeltaXY = function (e) {
          return [e.deltaX, e.deltaY];
        },
        SideEffect_extractRef = function (e) {
          return e && "current" in e ? e.current : e;
        },
        J = 0,
        ee = [],
        et =
          ($.useMedium(function (e) {
            var t = m.useRef([]),
              n = m.useRef([0, 0]),
              r = m.useRef(),
              o = m.useState(J++)[0],
              a = m.useState(X.Ws)[0],
              i = m.useRef(e);
            m.useEffect(
              function () {
                i.current = e;
              },
              [e]
            ),
              m.useEffect(
                function () {
                  if (e.inert) {
                    document.body.classList.add(
                      "block-interactivity-".concat(o)
                    );
                    var t = (0, b.__spreadArray)(
                      [e.lockRef.current],
                      (e.shards || []).map(SideEffect_extractRef),
                      !0
                    ).filter(Boolean);
                    return (
                      t.forEach(function (e) {
                        return e.classList.add(
                          "allow-interactivity-".concat(o)
                        );
                      }),
                      function () {
                        document.body.classList.remove(
                          "block-interactivity-".concat(o)
                        ),
                          t.forEach(function (e) {
                            return e.classList.remove(
                              "allow-interactivity-".concat(o)
                            );
                          });
                      }
                    );
                  }
                },
                [e.inert, e.lockRef.current, e.shards]
              );
            var u = m.useCallback(function (e, t) {
                if ("touches" in e && 2 === e.touches.length)
                  return !i.current.allowPinchZoom;
                var o,
                  a = getTouchXY(e),
                  u = n.current,
                  c = "deltaX" in e ? e.deltaX : u[0] - a[0],
                  l = "deltaY" in e ? e.deltaY : u[1] - a[1],
                  s = e.target,
                  d = Math.abs(c) > Math.abs(l) ? "h" : "v";
                if ("touches" in e && "h" === d && "range" === s.type)
                  return !1;
                var f = locationCouldBeScrolled(d, s);
                if (!f) return !0;
                if (
                  (f
                    ? (o = d)
                    : ((o = "v" === d ? "h" : "v"),
                      (f = locationCouldBeScrolled(d, s))),
                  !f)
                )
                  return !1;
                if (
                  (!r.current &&
                    "changedTouches" in e &&
                    (c || l) &&
                    (r.current = o),
                  !o)
                )
                  return !0;
                var v = r.current || o;
                return handleScroll(v, t, e, "h" === v ? c : l, !0);
              }, []),
              c = m.useCallback(function (e) {
                if (ee.length && ee[ee.length - 1] === a) {
                  var n = "deltaY" in e ? getDeltaXY(e) : getTouchXY(e),
                    r = t.current.filter(function (t) {
                      var r;
                      return (
                        t.name === e.type &&
                        (t.target === e.target ||
                          e.target === t.shadowParent) &&
                        (r = t.delta)[0] === n[0] &&
                        r[1] === n[1]
                      );
                    })[0];
                  if (r && r.should) {
                    e.cancelable && e.preventDefault();
                    return;
                  }
                  if (!r) {
                    var o = (i.current.shards || [])
                      .map(SideEffect_extractRef)
                      .filter(Boolean)
                      .filter(function (t) {
                        return t.contains(e.target);
                      });
                    (o.length > 0 ? u(e, o[0]) : !i.current.noIsolation) &&
                      e.cancelable &&
                      e.preventDefault();
                  }
                }
              }, []),
              l = m.useCallback(function (e, n, r, o) {
                var a = {
                  name: e,
                  delta: n,
                  target: r,
                  should: o,
                  shadowParent: (function (e) {
                    for (var t = null; null !== e; )
                      e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                        (e = e.parentNode);
                    return t;
                  })(r),
                };
                t.current.push(a),
                  setTimeout(function () {
                    t.current = t.current.filter(function (e) {
                      return e !== a;
                    });
                  }, 1);
              }, []),
              s = m.useCallback(function (e) {
                (n.current = getTouchXY(e)), (r.current = void 0);
              }, []),
              d = m.useCallback(function (t) {
                l(t.type, getDeltaXY(t), t.target, u(t, e.lockRef.current));
              }, []),
              f = m.useCallback(function (t) {
                l(t.type, getTouchXY(t), t.target, u(t, e.lockRef.current));
              }, []);
            m.useEffect(function () {
              return (
                ee.push(a),
                e.setCallbacks({
                  onScrollCapture: d,
                  onWheelCapture: d,
                  onTouchMoveCapture: f,
                }),
                document.addEventListener("wheel", c, z),
                document.addEventListener("touchmove", c, z),
                document.addEventListener("touchstart", s, z),
                function () {
                  (ee = ee.filter(function (e) {
                    return e !== a;
                  })),
                    document.removeEventListener("wheel", c, z),
                    document.removeEventListener("touchmove", c, z),
                    document.removeEventListener("touchstart", s, z);
                }
              );
            }, []);
            var v = e.removeScrollBar,
              p = e.inert;
            return m.createElement(
              m.Fragment,
              null,
              p
                ? m.createElement(a, {
                    styles: "\n  .block-interactivity-"
                      .concat(
                        o,
                        " {pointer-events: none;}\n  .allow-interactivity-"
                      )
                      .concat(o, " {pointer-events: all;}\n"),
                  })
                : null,
              v
                ? m.createElement(RemoveScrollBar, { gapMode: e.gapMode })
                : null
            );
          }),
          SideCar),
        en = m.forwardRef(function (e, t) {
          return m.createElement(
            U,
            (0, b.__assign)({}, e, { ref: t, sideCar: et })
          );
        });
      function ModalFocusScope(e) {
        let {
            autoFocus: t,
            trapFocus: n,
            dialogRef: r,
            initialFocusRef: o,
            blockScrollOnMount: a,
            allowPinchZoom: i,
            finalFocusRef: u,
            returnFocusOnClose: c,
            preserveScrollBarGap: l,
            lockFocusAcrossFrames: s,
            isOpen: v,
          } = (0, d.vR)(),
          [p, h] = (0, H.oO)();
        (0, m.useEffect)(() => {
          !p && h && setTimeout(h);
        }, [p, h]);
        let g = (0, f.$)(r, v);
        return (0, W.jsx)(chunk_UU5OHSNF_FocusLock, {
          autoFocus: t,
          isDisabled: !n,
          initialFocusRef: o,
          finalFocusRef: u,
          restoreFocus: c,
          contentRef: r,
          lockFocusAcrossFrames: s,
          children: (0, W.jsx)(en, {
            removeScrollBar: !l,
            allowPinchZoom: i,
            enabled: 1 === g && a,
            forwardProps: !0,
            children: e.children,
          }),
        });
      }
      en.classNames = U.classNames;
    },
    54346: function (e, t, n) {
      n.d(t, {
        f: function () {
          return l;
        },
      });
      var r = n(7755),
        o = n(25432),
        a = n(16554),
        i = n(13314),
        u = n(67294),
        c = n(85893),
        l = (0, a.G)((e, t) => {
          let { className: n, ...a } = e,
            { bodyId: l, setBodyMounted: s } = (0, r.vR)();
          (0, u.useEffect)(() => (s(!0), () => s(!1)), [s]);
          let d = (0, o.cx)("chakra-modal__body", n),
            f = (0, r.I_)();
          return (0, c.jsx)(i.m.div, {
            ref: t,
            className: d,
            id: l,
            ...a,
            __css: f.body,
          });
        });
      l.displayName = "ModalBody";
    },
    14253: function (e, t, n) {
      n.d(t, {
        m: function () {
          return c;
        },
      });
      var r = n(7755),
        o = n(25432),
        a = n(16554),
        i = n(13314),
        u = n(85893),
        c = (0, a.G)((e, t) => {
          let { className: n, ...a } = e,
            c = (0, o.cx)("chakra-modal__footer", n),
            l = (0, r.I_)(),
            s = {
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              ...l.footer,
            };
          return (0, u.jsx)(i.m.footer, {
            ref: t,
            ...a,
            __css: s,
            className: c,
          });
        });
      c.displayName = "ModalFooter";
    },
    52094: function (e, t, n) {
      n.d(t, {
        Lj: function () {
          return r;
        },
        Sh: function () {
          return a;
        },
        js: function () {
          return getSlideTransition;
        },
        p$: function () {
          return i;
        },
      });
      var r = {
          ease: [0.25, 0.1, 0.25, 1],
          easeIn: [0.4, 0, 1, 1],
          easeOut: [0, 0, 0.2, 1],
          easeInOut: [0.4, 0, 0.2, 1],
        },
        o = {
          slideLeft: {
            position: { left: 0, top: 0, bottom: 0, width: "100%" },
            enter: { x: 0, y: 0 },
            exit: { x: "-100%", y: 0 },
          },
          slideRight: {
            position: { right: 0, top: 0, bottom: 0, width: "100%" },
            enter: { x: 0, y: 0 },
            exit: { x: "100%", y: 0 },
          },
          slideUp: {
            position: { top: 0, left: 0, right: 0, maxWidth: "100vw" },
            enter: { x: 0, y: 0 },
            exit: { x: 0, y: "-100%" },
          },
          slideDown: {
            position: { bottom: 0, left: 0, right: 0, maxWidth: "100vw" },
            enter: { x: 0, y: 0 },
            exit: { x: 0, y: "100%" },
          },
        };
      function getSlideTransition(e) {
        var t;
        let n = null != (t = null == e ? void 0 : e.direction) ? t : "right";
        switch (n) {
          case "right":
          default:
            return o.slideRight;
          case "left":
            return o.slideLeft;
          case "bottom":
            return o.slideDown;
          case "top":
            return o.slideUp;
        }
      }
      var a = {
          enter: { duration: 0.2, ease: r.easeOut },
          exit: { duration: 0.1, ease: r.easeIn },
        },
        i = {
          enter: (e, t) => ({
            ...e,
            delay: "number" == typeof t ? t : null == t ? void 0 : t.enter,
          }),
          exit: (e, t) => ({
            ...e,
            delay: "number" == typeof t ? t : null == t ? void 0 : t.exit,
          }),
        };
    },
    94443: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _curry1;
        },
      });
      var r = n(72588);
      function _curry1(e) {
        return function f1(t) {
          return 0 == arguments.length || (0, r.Z)(t)
            ? f1
            : e.apply(this, arguments);
        };
      }
    },
    72588: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return _isPlaceholder;
        },
      });
      function _isPlaceholder(e) {
        return (
          null != e &&
          "object" == typeof e &&
          !0 === e["@@functional/placeholder"]
        );
      }
    },
    68658: function (e, t, n) {
      var r = (0, n(94443).Z)(function (e) {
        return null == e;
      });
      t.Z = r;
    },
  },
]);
