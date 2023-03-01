!(function (t, n) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = n())
    : 'function' == typeof define && define.amd
    ? define('CognusChatbot', [], n)
    : 'object' == typeof exports
    ? (exports.CognusChatbot = n())
    : (t.CognusChatbot = n());
})(window, function () {
  return (function (t) {
    var n = {};
    function e(r) {
      if (n[r]) return n[r].exports;
      var o = (n[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
    }
    return (
      (e.m = t),
      (e.c = n),
      (e.d = function (t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
      }),
      (e.r = function (t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (e.t = function (t, n) {
        if ((1 & n && (t = e(t)), 8 & n)) return t;
        if (4 & n && 'object' == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (e.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
          2 & n && 'string' != typeof t)
        )
          for (var o in t)
            e.d(
              r,
              o,
              function (n) {
                return t[n];
              }.bind(null, o)
            );
        return r;
      }),
      (e.n = function (t) {
        var n =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return e.d(n, 'a', n), n;
      }),
      (e.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (e.p = ''),
      e((e.s = 107))
    );
  })([
    function (t, n) {
      var e = (t.exports =
        'undefined' != typeof window && window.Math == Math
          ? window
          : 'undefined' != typeof self && self.Math == Math
          ? self
          : Function('return this')());
      'number' == typeof __g && (__g = e);
    },
    function (t, n, e) {
      var r = e(27)('wks'),
        o = e(22),
        a = e(0).Symbol,
        i = 'function' == typeof a;
      (t.exports = function (t) {
        return r[t] || (r[t] = (i && a[t]) || (i ? a : o)('Symbol.' + t));
      }).store = r;
    },
    function (t, n) {
      t.exports = function (t) {
        return 'object' == typeof t ? null !== t : 'function' == typeof t;
      };
    },
    function (t, n, e) {
      var r = e(2);
      t.exports = function (t) {
        if (!r(t)) throw TypeError(t + ' is not an object!');
        return t;
      };
    },
    function (t, n, e) {
      'use strict';
      var r = e(47),
        o = {};
      (o[e(1)('toStringTag')] = 'z'),
        o + '' != '[object z]' &&
          e(11)(
            Object.prototype,
            'toString',
            function () {
              return '[object ' + r(this) + ']';
            },
            !0
          );
    },
    function (t, n, e) {
      t.exports = !e(8)(function () {
        return (
          7 !=
          Object.defineProperty({}, 'a', {
            get: function () {
              return 7;
            },
          }).a
        );
      });
    },
    function (t, n, e) {
      'use strict';
      var r,
        o,
        a,
        i,
        s = e(21),
        c = e(0),
        u = e(16),
        f = e(47),
        d = e(10),
        l = e(2),
        h = e(17),
        p = e(48),
        y = e(49),
        v = e(86),
        x = e(65).set,
        m = e(87)(),
        _ = e(66),
        b = e(88),
        g = e(89),
        S = e(90),
        w = c.TypeError,
        C = c.process,
        k = C && C.versions,
        A = (k && k.v8) || '',
        E = c.Promise,
        T = 'process' == f(C),
        O = function () {},
        j = (o = _.f),
        B = !!(function () {
          try {
            var t = E.resolve(1),
              n = ((t.constructor = {})[e(1)('species')] = function (t) {
                t(O, O);
              });
            return (
              (T || 'function' == typeof PromiseRejectionEvent) &&
              t.then(O) instanceof n &&
              0 !== A.indexOf('6.6') &&
              -1 === g.indexOf('Chrome/66')
            );
          } catch (t) {}
        })(),
        R = function (t) {
          var n;
          return !(!l(t) || 'function' != typeof (n = t.then)) && n;
        },
        I = function (t, n) {
          if (!t._n) {
            t._n = !0;
            var e = t._c;
            m(function () {
              for (
                var r = t._v,
                  o = 1 == t._s,
                  a = 0,
                  i = function (n) {
                    var e,
                      a,
                      i,
                      s = o ? n.ok : n.fail,
                      c = n.resolve,
                      u = n.reject,
                      f = n.domain;
                    try {
                      s
                        ? (o || (2 == t._h && P(t), (t._h = 1)),
                          !0 === s
                            ? (e = r)
                            : (f && f.enter(),
                              (e = s(r)),
                              f && (f.exit(), (i = !0))),
                          e === n.promise
                            ? u(w('Promise-chain cycle'))
                            : (a = R(e))
                            ? a.call(e, c, u)
                            : c(e))
                        : u(r);
                    } catch (t) {
                      f && !i && f.exit(), u(t);
                    }
                  };
                e.length > a;

              )
                i(e[a++]);
              (t._c = []), (t._n = !1), n && !t._h && W(t);
            });
          }
        },
        W = function (t) {
          x.call(c, function () {
            var n,
              e,
              r,
              o = t._v,
              a = M(t);
            if (
              (a &&
                ((n = b(function () {
                  T
                    ? C.emit('unhandledRejection', o, t)
                    : (e = c.onunhandledrejection)
                    ? e({ promise: t, reason: o })
                    : (r = c.console) &&
                      r.error &&
                      r.error('Unhandled promise rejection', o);
                })),
                (t._h = T || M(t) ? 2 : 1)),
              (t._a = void 0),
              a && n.e)
            )
              throw n.v;
          });
        },
        M = function (t) {
          return 1 !== t._h && 0 === (t._a || t._c).length;
        },
        P = function (t) {
          x.call(c, function () {
            var n;
            T
              ? C.emit('rejectionHandled', t)
              : (n = c.onrejectionhandled) && n({ promise: t, reason: t._v });
          });
        },
        H = function (t) {
          var n = this;
          n._d ||
            ((n._d = !0),
            ((n = n._w || n)._v = t),
            (n._s = 2),
            n._a || (n._a = n._c.slice()),
            I(n, !0));
        },
        L = function (t) {
          var n,
            e = this;
          if (!e._d) {
            (e._d = !0), (e = e._w || e);
            try {
              if (e === t) throw w("Promise can't be resolved itself");
              (n = R(t))
                ? m(function () {
                    var r = { _w: e, _d: !1 };
                    try {
                      n.call(t, u(L, r, 1), u(H, r, 1));
                    } catch (t) {
                      H.call(r, t);
                    }
                  })
                : ((e._v = t), (e._s = 1), I(e, !1));
            } catch (t) {
              H.call({ _w: e, _d: !1 }, t);
            }
          }
        };
      B ||
        ((E = function (t) {
          p(this, E, 'Promise', '_h'), h(t), r.call(this);
          try {
            t(u(L, this, 1), u(H, this, 1));
          } catch (t) {
            H.call(this, t);
          }
        }),
        ((r = function (t) {
          (this._c = []),
            (this._a = void 0),
            (this._s = 0),
            (this._d = !1),
            (this._v = void 0),
            (this._h = 0),
            (this._n = !1);
        }).prototype = e(50)(E.prototype, {
          then: function (t, n) {
            var e = j(v(this, E));
            return (
              (e.ok = 'function' != typeof t || t),
              (e.fail = 'function' == typeof n && n),
              (e.domain = T ? C.domain : void 0),
              this._c.push(e),
              this._a && this._a.push(e),
              this._s && I(this, !1),
              e.promise
            );
          },
          catch: function (t) {
            return this.then(void 0, t);
          },
        })),
        (a = function () {
          var t = new r();
          (this.promise = t),
            (this.resolve = u(L, t, 1)),
            (this.reject = u(H, t, 1));
        }),
        (_.f = j =
          function (t) {
            return t === E || t === i ? new a(t) : o(t);
          })),
        d(d.G + d.W + d.F * !B, { Promise: E }),
        e(23)(E, 'Promise'),
        e(67)('Promise'),
        (i = e(13).Promise),
        d(d.S + d.F * !B, 'Promise', {
          reject: function (t) {
            var n = j(this);
            return (0, n.reject)(t), n.promise;
          },
        }),
        d(d.S + d.F * (s || !B), 'Promise', {
          resolve: function (t) {
            return S(s && this === i ? E : this, t);
          },
        }),
        d(
          d.S +
            d.F *
              !(
                B &&
                e(68)(function (t) {
                  E.all(t).catch(O);
                })
              ),
          'Promise',
          {
            all: function (t) {
              var n = this,
                e = j(n),
                r = e.resolve,
                o = e.reject,
                a = b(function () {
                  var e = [],
                    a = 0,
                    i = 1;
                  y(t, !1, function (t) {
                    var s = a++,
                      c = !1;
                    e.push(void 0),
                      i++,
                      n.resolve(t).then(function (t) {
                        c || ((c = !0), (e[s] = t), --i || r(e));
                      }, o);
                  }),
                    --i || r(e);
                });
              return a.e && o(a.v), e.promise;
            },
            race: function (t) {
              var n = this,
                e = j(n),
                r = e.reject,
                o = b(function () {
                  y(t, !1, function (t) {
                    n.resolve(t).then(e.resolve, r);
                  });
                });
              return o.e && r(o.v), e.promise;
            },
          }
        );
    },
    function (t, n, e) {
      var r = e(3),
        o = e(55),
        a = e(36),
        i = Object.defineProperty;
      n.f = e(5)
        ? Object.defineProperty
        : function (t, n, e) {
            if ((r(t), (n = a(n, !0)), r(e), o))
              try {
                return i(t, n, e);
              } catch (t) {}
            if ('get' in e || 'set' in e)
              throw TypeError('Accessors not supported!');
            return 'value' in e && (t[n] = e.value), t;
          };
    },
    function (t, n) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    },
    function (t, n) {
      !(function (n) {
        'use strict';
        var e,
          r = Object.prototype,
          o = r.hasOwnProperty,
          a = 'function' == typeof Symbol ? Symbol : {},
          i = a.iterator || '@@iterator',
          s = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag',
          u = 'object' == typeof t,
          f = n.regeneratorRuntime;
        if (f) u && (t.exports = f);
        else {
          (f = n.regeneratorRuntime = u ? t.exports : {}).wrap = b;
          var d = 'suspendedStart',
            l = 'suspendedYield',
            h = 'executing',
            p = 'completed',
            y = {},
            v = {};
          v[i] = function () {
            return this;
          };
          var x = Object.getPrototypeOf,
            m = x && x(x(B([])));
          m && m !== r && o.call(m, i) && (v = m);
          var _ = (C.prototype = S.prototype = Object.create(v));
          (w.prototype = _.constructor = C),
            (C.constructor = w),
            (C[c] = w.displayName = 'GeneratorFunction'),
            (f.isGeneratorFunction = function (t) {
              var n = 'function' == typeof t && t.constructor;
              return (
                !!n &&
                (n === w || 'GeneratorFunction' === (n.displayName || n.name))
              );
            }),
            (f.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, C)
                  : ((t.__proto__ = C), c in t || (t[c] = 'GeneratorFunction')),
                (t.prototype = Object.create(_)),
                t
              );
            }),
            (f.awrap = function (t) {
              return { __await: t };
            }),
            k(A.prototype),
            (A.prototype[s] = function () {
              return this;
            }),
            (f.AsyncIterator = A),
            (f.async = function (t, n, e, r) {
              var o = new A(b(t, n, e, r));
              return f.isGeneratorFunction(n)
                ? o
                : o.next().then(function (t) {
                    return t.done ? t.value : o.next();
                  });
            }),
            k(_),
            (_[c] = 'Generator'),
            (_[i] = function () {
              return this;
            }),
            (_.toString = function () {
              return '[object Generator]';
            }),
            (f.keys = function (t) {
              var n = [];
              for (var e in t) n.push(e);
              return (
                n.reverse(),
                function e() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (f.values = B),
            (j.prototype = {
              constructor: j,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = e),
                  this.tryEntries.forEach(O),
                  !t)
                )
                  for (var n in this)
                    't' === n.charAt(0) &&
                      o.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function r(r, o) {
                  return (
                    (s.type = 'throw'),
                    (s.arg = t),
                    (n.next = r),
                    o && ((n.method = 'next'), (n.arg = e)),
                    !!o
                  );
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                  var i = this.tryEntries[a],
                    s = i.completion;
                  if ('root' === i.tryLoc) return r('end');
                  if (i.tryLoc <= this.prev) {
                    var c = o.call(i, 'catchLoc'),
                      u = o.call(i, 'finallyLoc');
                    if (c && u) {
                      if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    } else {
                      if (!u)
                        throw new Error(
                          'try statement without catch or finally'
                        );
                      if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, n) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (
                    r.tryLoc <= this.prev &&
                    o.call(r, 'finallyLoc') &&
                    this.prev < r.finallyLoc
                  ) {
                    var a = r;
                    break;
                  }
                }
                a &&
                  ('break' === t || 'continue' === t) &&
                  a.tryLoc <= n &&
                  n <= a.finallyLoc &&
                  (a = null);
                var i = a ? a.completion : {};
                return (
                  (i.type = t),
                  (i.arg = n),
                  a
                    ? ((this.method = 'next'), (this.next = a.finallyLoc), y)
                    : this.complete(i)
                );
              },
              complete: function (t, n) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && n && (this.next = n),
                  y
                );
              },
              finish: function (t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var e = this.tryEntries[n];
                  if (e.finallyLoc === t)
                    return this.complete(e.completion, e.afterLoc), O(e), y;
                }
              },
              catch: function (t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var e = this.tryEntries[n];
                  if (e.tryLoc === t) {
                    var r = e.completion;
                    if ('throw' === r.type) {
                      var o = r.arg;
                      O(e);
                    }
                    return o;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = {
                    iterator: B(t),
                    resultName: n,
                    nextLoc: r,
                  }),
                  'next' === this.method && (this.arg = e),
                  y
                );
              },
            });
        }
        function b(t, n, e, r) {
          var o = n && n.prototype instanceof S ? n : S,
            a = Object.create(o.prototype),
            i = new j(r || []);
          return (
            (a._invoke = (function (t, n, e) {
              var r = d;
              return function (o, a) {
                if (r === h) throw new Error('Generator is already running');
                if (r === p) {
                  if ('throw' === o) throw a;
                  return R();
                }
                for (e.method = o, e.arg = a; ; ) {
                  var i = e.delegate;
                  if (i) {
                    var s = E(i, e);
                    if (s) {
                      if (s === y) continue;
                      return s;
                    }
                  }
                  if ('next' === e.method) e.sent = e._sent = e.arg;
                  else if ('throw' === e.method) {
                    if (r === d) throw ((r = p), e.arg);
                    e.dispatchException(e.arg);
                  } else 'return' === e.method && e.abrupt('return', e.arg);
                  r = h;
                  var c = g(t, n, e);
                  if ('normal' === c.type) {
                    if (((r = e.done ? p : l), c.arg === y)) continue;
                    return { value: c.arg, done: e.done };
                  }
                  'throw' === c.type &&
                    ((r = p), (e.method = 'throw'), (e.arg = c.arg));
                }
              };
            })(t, e, i)),
            a
          );
        }
        function g(t, n, e) {
          try {
            return { type: 'normal', arg: t.call(n, e) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        function S() {}
        function w() {}
        function C() {}
        function k(t) {
          ['next', 'throw', 'return'].forEach(function (n) {
            t[n] = function (t) {
              return this._invoke(n, t);
            };
          });
        }
        function A(t) {
          var n;
          this._invoke = function (e, r) {
            function a() {
              return new Promise(function (n, a) {
                !(function n(e, r, a, i) {
                  var s = g(t[e], t, r);
                  if ('throw' !== s.type) {
                    var c = s.arg,
                      u = c.value;
                    return u && 'object' == typeof u && o.call(u, '__await')
                      ? Promise.resolve(u.__await).then(
                          function (t) {
                            n('next', t, a, i);
                          },
                          function (t) {
                            n('throw', t, a, i);
                          }
                        )
                      : Promise.resolve(u).then(function (t) {
                          (c.value = t), a(c);
                        }, i);
                  }
                  i(s.arg);
                })(e, r, n, a);
              });
            }
            return (n = n ? n.then(a, a) : a());
          };
        }
        function E(t, n) {
          var r = t.iterator[n.method];
          if (r === e) {
            if (((n.delegate = null), 'throw' === n.method)) {
              if (
                t.iterator.return &&
                ((n.method = 'return'),
                (n.arg = e),
                E(t, n),
                'throw' === n.method)
              )
                return y;
              (n.method = 'throw'),
                (n.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return y;
          }
          var o = g(r, t.iterator, n.arg);
          if ('throw' === o.type)
            return (
              (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), y
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((n[t.resultName] = a.value),
                (n.next = t.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = e)),
                (n.delegate = null),
                y)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              y);
        }
        function T(t) {
          var n = { tryLoc: t[0] };
          1 in t && (n.catchLoc = t[1]),
            2 in t && ((n.finallyLoc = t[2]), (n.afterLoc = t[3])),
            this.tryEntries.push(n);
        }
        function O(t) {
          var n = t.completion || {};
          (n.type = 'normal'), delete n.arg, (t.completion = n);
        }
        function j(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(T, this),
            this.reset(!0);
        }
        function B(t) {
          if (t) {
            var n = t[i];
            if (n) return n.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                a = function n() {
                  for (; ++r < t.length; )
                    if (o.call(t, r)) return (n.value = t[r]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (a.next = a);
            }
          }
          return { next: R };
        }
        function R() {
          return { value: e, done: !0 };
        }
      })(
        (function () {
          return this;
        })() || Function('return this')()
      );
    },
    function (t, n, e) {
      var r = e(0),
        o = e(13),
        a = e(15),
        i = e(11),
        s = e(16),
        c = function (t, n, e) {
          var u,
            f,
            d,
            l,
            h = t & c.F,
            p = t & c.G,
            y = t & c.S,
            v = t & c.P,
            x = t & c.B,
            m = p ? r : y ? r[n] || (r[n] = {}) : (r[n] || {}).prototype,
            _ = p ? o : o[n] || (o[n] = {}),
            b = _.prototype || (_.prototype = {});
          for (u in (p && (e = n), e))
            (d = ((f = !h && m && void 0 !== m[u]) ? m : e)[u]),
              (l =
                x && f
                  ? s(d, r)
                  : v && 'function' == typeof d
                  ? s(Function.call, d)
                  : d),
              m && i(m, u, d, t & c.U),
              _[u] != d && a(_, u, l),
              v && b[u] != d && (b[u] = d);
        };
      (r.core = o),
        (c.F = 1),
        (c.G = 2),
        (c.S = 4),
        (c.P = 8),
        (c.B = 16),
        (c.W = 32),
        (c.U = 64),
        (c.R = 128),
        (t.exports = c);
    },
    function (t, n, e) {
      var r = e(0),
        o = e(15),
        a = e(14),
        i = e(22)('src'),
        s = e(74),
        c = ('' + s).split('toString');
      (e(13).inspectSource = function (t) {
        return s.call(t);
      }),
        (t.exports = function (t, n, e, s) {
          var u = 'function' == typeof e;
          u && (a(e, 'name') || o(e, 'name', n)),
            t[n] !== e &&
              (u && (a(e, i) || o(e, i, t[n] ? '' + t[n] : c.join(String(n)))),
              t === r
                ? (t[n] = e)
                : s
                ? t[n]
                  ? (t[n] = e)
                  : o(t, n, e)
                : (delete t[n], o(t, n, e)));
        })(Function.prototype, 'toString', function () {
          return ('function' == typeof this && this[i]) || s.call(this);
        });
    },
    function (t, n, e) {
      var r;
      t.exports = (function t(n, e, o) {
        function a(s, c) {
          if (!e[s]) {
            if (!n[s]) {
              if (!c && 'function' == typeof r && r) return r(s, !0);
              if (i) return i(s, !0);
              var u = new Error("Cannot find module '" + s + "'");
              throw ((u.code = 'MODULE_NOT_FOUND'), u);
            }
            var f = (e[s] = { exports: {} });
            n[s][0].call(
              f.exports,
              function (t) {
                var e = n[s][1][t];
                return a(e || t);
              },
              f,
              f.exports,
              t,
              n,
              e,
              o
            );
          }
          return e[s].exports;
        }
        for (var i = 'function' == typeof r && r, s = 0; s < o.length; s++)
          a(o[s]);
        return a;
      })(
        {
          1: [
            function (t, n, e) {
              (function (t) {
                'use strict';
                var e,
                  r,
                  o = t.MutationObserver || t.WebKitMutationObserver;
                if (o) {
                  var a = 0,
                    i = new o(f),
                    s = t.document.createTextNode('');
                  i.observe(s, { characterData: !0 }),
                    (e = function () {
                      s.data = a = ++a % 2;
                    });
                } else if (t.setImmediate || void 0 === t.MessageChannel)
                  e =
                    'document' in t &&
                    'onreadystatechange' in t.document.createElement('script')
                      ? function () {
                          var n = t.document.createElement('script');
                          (n.onreadystatechange = function () {
                            f(),
                              (n.onreadystatechange = null),
                              n.parentNode.removeChild(n),
                              (n = null);
                          }),
                            t.document.documentElement.appendChild(n);
                        }
                      : function () {
                          setTimeout(f, 0);
                        };
                else {
                  var c = new t.MessageChannel();
                  (c.port1.onmessage = f),
                    (e = function () {
                      c.port2.postMessage(0);
                    });
                }
                var u = [];
                function f() {
                  var t, n;
                  r = !0;
                  for (var e = u.length; e; ) {
                    for (n = u, u = [], t = -1; ++t < e; ) n[t]();
                    e = u.length;
                  }
                  r = !1;
                }
                n.exports = function (t) {
                  1 !== u.push(t) || r || e();
                };
              }).call(
                this,
                'undefined' != typeof global
                  ? global
                  : 'undefined' != typeof self
                  ? self
                  : 'undefined' != typeof window
                  ? window
                  : {}
              );
            },
            {},
          ],
          2: [
            function (t, n, e) {
              'use strict';
              var r = t(1);
              function o() {}
              var a = {},
                i = ['REJECTED'],
                s = ['FULFILLED'],
                c = ['PENDING'];
              function u(t) {
                if ('function' != typeof t)
                  throw new TypeError('resolver must be a function');
                (this.state = c),
                  (this.queue = []),
                  (this.outcome = void 0),
                  t !== o && h(this, t);
              }
              function f(t, n, e) {
                (this.promise = t),
                  'function' == typeof n &&
                    ((this.onFulfilled = n),
                    (this.callFulfilled = this.otherCallFulfilled)),
                  'function' == typeof e &&
                    ((this.onRejected = e),
                    (this.callRejected = this.otherCallRejected));
              }
              function d(t, n, e) {
                r(function () {
                  var r;
                  try {
                    r = n(e);
                  } catch (n) {
                    return a.reject(t, n);
                  }
                  r === t
                    ? a.reject(
                        t,
                        new TypeError('Cannot resolve promise with itself')
                      )
                    : a.resolve(t, r);
                });
              }
              function l(t) {
                var n = t && t.then;
                if (
                  t &&
                  ('object' == typeof t || 'function' == typeof t) &&
                  'function' == typeof n
                )
                  return function () {
                    n.apply(t, arguments);
                  };
              }
              function h(t, n) {
                var e = !1;
                function r(n) {
                  e || ((e = !0), a.reject(t, n));
                }
                function o(n) {
                  e || ((e = !0), a.resolve(t, n));
                }
                var i = p(function () {
                  n(o, r);
                });
                'error' === i.status && r(i.value);
              }
              function p(t, n) {
                var e = {};
                try {
                  (e.value = t(n)), (e.status = 'success');
                } catch (t) {
                  (e.status = 'error'), (e.value = t);
                }
                return e;
              }
              (n.exports = u),
                (u.prototype.catch = function (t) {
                  return this.then(null, t);
                }),
                (u.prototype.then = function (t, n) {
                  if (
                    ('function' != typeof t && this.state === s) ||
                    ('function' != typeof n && this.state === i)
                  )
                    return this;
                  var e = new this.constructor(o);
                  return (
                    this.state !== c
                      ? d(e, this.state === s ? t : n, this.outcome)
                      : this.queue.push(new f(e, t, n)),
                    e
                  );
                }),
                (f.prototype.callFulfilled = function (t) {
                  a.resolve(this.promise, t);
                }),
                (f.prototype.otherCallFulfilled = function (t) {
                  d(this.promise, this.onFulfilled, t);
                }),
                (f.prototype.callRejected = function (t) {
                  a.reject(this.promise, t);
                }),
                (f.prototype.otherCallRejected = function (t) {
                  d(this.promise, this.onRejected, t);
                }),
                (a.resolve = function (t, n) {
                  var e = p(l, n);
                  if ('error' === e.status) return a.reject(t, e.value);
                  var r = e.value;
                  if (r) h(t, r);
                  else {
                    (t.state = s), (t.outcome = n);
                    for (var o = -1, i = t.queue.length; ++o < i; )
                      t.queue[o].callFulfilled(n);
                  }
                  return t;
                }),
                (a.reject = function (t, n) {
                  (t.state = i), (t.outcome = n);
                  for (var e = -1, r = t.queue.length; ++e < r; )
                    t.queue[e].callRejected(n);
                  return t;
                }),
                (u.resolve = function (t) {
                  return t instanceof this ? t : a.resolve(new this(o), t);
                }),
                (u.reject = function (t) {
                  var n = new this(o);
                  return a.reject(n, t);
                }),
                (u.all = function (t) {
                  var n = this;
                  if ('[object Array]' !== Object.prototype.toString.call(t))
                    return this.reject(new TypeError('must be an array'));
                  var e = t.length,
                    r = !1;
                  if (!e) return this.resolve([]);
                  for (
                    var i = new Array(e), s = 0, c = -1, u = new this(o);
                    ++c < e;

                  )
                    f(t[c], c);
                  return u;
                  function f(t, o) {
                    n.resolve(t).then(
                      function (t) {
                        (i[o] = t),
                          ++s !== e || r || ((r = !0), a.resolve(u, i));
                      },
                      function (t) {
                        r || ((r = !0), a.reject(u, t));
                      }
                    );
                  }
                }),
                (u.race = function (t) {
                  var n = this;
                  if ('[object Array]' !== Object.prototype.toString.call(t))
                    return this.reject(new TypeError('must be an array'));
                  var e = t.length,
                    r = !1;
                  if (!e) return this.resolve([]);
                  for (var i, s = -1, c = new this(o); ++s < e; )
                    (i = t[s]),
                      n.resolve(i).then(
                        function (t) {
                          r || ((r = !0), a.resolve(c, t));
                        },
                        function (t) {
                          r || ((r = !0), a.reject(c, t));
                        }
                      );
                  return c;
                });
            },
            { 1: 1 },
          ],
          3: [
            function (t, n, e) {
              (function (n) {
                'use strict';
                'function' != typeof n.Promise && (n.Promise = t(2));
              }).call(
                this,
                'undefined' != typeof global
                  ? global
                  : 'undefined' != typeof self
                  ? self
                  : 'undefined' != typeof window
                  ? window
                  : {}
              );
            },
            { 2: 2 },
          ],
          4: [
            function (t, n, e) {
              'use strict';
              var r =
                  'function' == typeof Symbol &&
                  'symbol' == typeof Symbol.iterator
                    ? function (t) {
                        return typeof t;
                      }
                    : function (t) {
                        return t &&
                          'function' == typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? 'symbol'
                          : typeof t;
                      },
                o = (function () {
                  try {
                    if ('undefined' != typeof indexedDB) return indexedDB;
                    if ('undefined' != typeof webkitIndexedDB)
                      return webkitIndexedDB;
                    if ('undefined' != typeof mozIndexedDB) return mozIndexedDB;
                    if ('undefined' != typeof OIndexedDB) return OIndexedDB;
                    if ('undefined' != typeof msIndexedDB) return msIndexedDB;
                  } catch (t) {
                    return;
                  }
                })();
              function a(t, n) {
                (t = t || []), (n = n || {});
                try {
                  return new Blob(t, n);
                } catch (o) {
                  if ('TypeError' !== o.name) throw o;
                  for (
                    var e = new (
                        'undefined' != typeof BlobBuilder
                          ? BlobBuilder
                          : 'undefined' != typeof MSBlobBuilder
                          ? MSBlobBuilder
                          : 'undefined' != typeof MozBlobBuilder
                          ? MozBlobBuilder
                          : WebKitBlobBuilder
                      )(),
                      r = 0;
                    r < t.length;
                    r += 1
                  )
                    e.append(t[r]);
                  return e.getBlob(n.type);
                }
              }
              'undefined' == typeof Promise && t(3);
              var i = Promise;
              function s(t, n) {
                n &&
                  t.then(
                    function (t) {
                      n(null, t);
                    },
                    function (t) {
                      n(t);
                    }
                  );
              }
              function c(t, n, e) {
                'function' == typeof n && t.then(n),
                  'function' == typeof e && t.catch(e);
              }
              function u(t) {
                return (
                  'string' != typeof t &&
                    (console.warn(
                      t + ' used as a key, but it is not a string.'
                    ),
                    (t = String(t))),
                  t
                );
              }
              function f() {
                if (
                  arguments.length &&
                  'function' == typeof arguments[arguments.length - 1]
                )
                  return arguments[arguments.length - 1];
              }
              var d = 'local-forage-detect-blob-support',
                l = void 0,
                h = {},
                p = Object.prototype.toString,
                y = 'readonly',
                v = 'readwrite';
              function x(t) {
                return 'boolean' == typeof l
                  ? i.resolve(l)
                  : (function (t) {
                      return new i(function (n) {
                        var e = t.transaction(d, v),
                          r = a(['']);
                        e.objectStore(d).put(r, 'key'),
                          (e.onabort = function (t) {
                            t.preventDefault(), t.stopPropagation(), n(!1);
                          }),
                          (e.oncomplete = function () {
                            var t = navigator.userAgent.match(/Chrome\/(\d+)/),
                              e = navigator.userAgent.match(/Edge\//);
                            n(e || !t || parseInt(t[1], 10) >= 43);
                          });
                      }).catch(function () {
                        return !1;
                      });
                    })(t).then(function (t) {
                      return (l = t);
                    });
              }
              function m(t) {
                var n = h[t.name],
                  e = {};
                (e.promise = new i(function (t, n) {
                  (e.resolve = t), (e.reject = n);
                })),
                  n.deferredOperations.push(e),
                  n.dbReady
                    ? (n.dbReady = n.dbReady.then(function () {
                        return e.promise;
                      }))
                    : (n.dbReady = e.promise);
              }
              function _(t) {
                var n = h[t.name].deferredOperations.pop();
                if (n) return n.resolve(), n.promise;
              }
              function b(t, n) {
                var e = h[t.name].deferredOperations.pop();
                if (e) return e.reject(n), e.promise;
              }
              function g(t, n) {
                return new i(function (e, r) {
                  if (
                    ((h[t.name] = h[t.name] || {
                      forages: [],
                      db: null,
                      dbReady: null,
                      deferredOperations: [],
                    }),
                    t.db)
                  ) {
                    if (!n) return e(t.db);
                    m(t), t.db.close();
                  }
                  var a = [t.name];
                  n && a.push(t.version);
                  var i = o.open.apply(o, a);
                  n &&
                    (i.onupgradeneeded = function (n) {
                      var e = i.result;
                      try {
                        e.createObjectStore(t.storeName),
                          n.oldVersion <= 1 && e.createObjectStore(d);
                      } catch (e) {
                        if ('ConstraintError' !== e.name) throw e;
                        console.warn(
                          'The database "' +
                            t.name +
                            '" has been upgraded from version ' +
                            n.oldVersion +
                            ' to version ' +
                            n.newVersion +
                            ', but the storage "' +
                            t.storeName +
                            '" already exists.'
                        );
                      }
                    }),
                    (i.onerror = function (t) {
                      t.preventDefault(), r(i.error);
                    }),
                    (i.onsuccess = function () {
                      e(i.result), _(t);
                    });
                });
              }
              function S(t) {
                return g(t, !1);
              }
              function w(t) {
                return g(t, !0);
              }
              function C(t, n) {
                if (!t.db) return !0;
                var e = !t.db.objectStoreNames.contains(t.storeName),
                  r = t.version < t.db.version,
                  o = t.version > t.db.version;
                if (
                  (r &&
                    (t.version !== n &&
                      console.warn(
                        'The database "' +
                          t.name +
                          '" can\'t be downgraded from version ' +
                          t.db.version +
                          ' to version ' +
                          t.version +
                          '.'
                      ),
                    (t.version = t.db.version)),
                  o || e)
                ) {
                  if (e) {
                    var a = t.db.version + 1;
                    a > t.version && (t.version = a);
                  }
                  return !0;
                }
                return !1;
              }
              function k(t) {
                return a(
                  [
                    (function (t) {
                      for (
                        var n = t.length,
                          e = new ArrayBuffer(n),
                          r = new Uint8Array(e),
                          o = 0;
                        o < n;
                        o++
                      )
                        r[o] = t.charCodeAt(o);
                      return e;
                    })(atob(t.data)),
                  ],
                  { type: t.type }
                );
              }
              function A(t) {
                return t && t.__local_forage_encoded_blob;
              }
              function E(t) {
                var n = this,
                  e = n._initReady().then(function () {
                    var t = h[n._dbInfo.name];
                    if (t && t.dbReady) return t.dbReady;
                  });
                return c(e, t, t), e;
              }
              function T(t, n, e, r) {
                void 0 === r && (r = 1);
                try {
                  var o = t.db.transaction(t.storeName, n);
                  e(null, o);
                } catch (o) {
                  if (
                    r > 0 &&
                    (!t.db ||
                      'InvalidStateError' === o.name ||
                      'NotFoundError' === o.name)
                  )
                    return i
                      .resolve()
                      .then(function () {
                        if (
                          !t.db ||
                          ('NotFoundError' === o.name &&
                            !t.db.objectStoreNames.contains(t.storeName) &&
                            t.version <= t.db.version)
                        )
                          return t.db && (t.version = t.db.version + 1), w(t);
                      })
                      .then(function () {
                        return (function (t) {
                          m(t);
                          for (
                            var n = h[t.name], e = n.forages, r = 0;
                            r < e.length;
                            r++
                          ) {
                            var o = e[r];
                            o._dbInfo.db &&
                              (o._dbInfo.db.close(), (o._dbInfo.db = null));
                          }
                          return (
                            (t.db = null),
                            S(t)
                              .then(function (n) {
                                return (t.db = n), C(t) ? w(t) : n;
                              })
                              .then(function (r) {
                                t.db = n.db = r;
                                for (var o = 0; o < e.length; o++)
                                  e[o]._dbInfo.db = r;
                              })
                              .catch(function (n) {
                                throw (b(t, n), n);
                              })
                          );
                        })(t).then(function () {
                          T(t, n, e, r - 1);
                        });
                      })
                      .catch(e);
                  e(o);
                }
              }
              var O = {
                  _driver: 'asyncStorage',
                  _initStorage: function (t) {
                    var n = this,
                      e = { db: null };
                    if (t) for (var r in t) e[r] = t[r];
                    var o = h[e.name];
                    o ||
                      ((o = {
                        forages: [],
                        db: null,
                        dbReady: null,
                        deferredOperations: [],
                      }),
                      (h[e.name] = o)),
                      o.forages.push(n),
                      n._initReady || ((n._initReady = n.ready), (n.ready = E));
                    var a = [];
                    function s() {
                      return i.resolve();
                    }
                    for (var c = 0; c < o.forages.length; c++) {
                      var u = o.forages[c];
                      u !== n && a.push(u._initReady().catch(s));
                    }
                    var f = o.forages.slice(0);
                    return i
                      .all(a)
                      .then(function () {
                        return (e.db = o.db), S(e);
                      })
                      .then(function (t) {
                        return (
                          (e.db = t), C(e, n._defaultConfig.version) ? w(e) : t
                        );
                      })
                      .then(function (t) {
                        (e.db = o.db = t), (n._dbInfo = e);
                        for (var r = 0; r < f.length; r++) {
                          var a = f[r];
                          a !== n &&
                            ((a._dbInfo.db = e.db),
                            (a._dbInfo.version = e.version));
                        }
                      });
                  },
                  _support: (function () {
                    try {
                      if (!o) return !1;
                      var t =
                          'undefined' != typeof openDatabase &&
                          /(Safari|iPhone|iPad|iPod)/.test(
                            navigator.userAgent
                          ) &&
                          !/Chrome/.test(navigator.userAgent) &&
                          !/BlackBerry/.test(navigator.platform),
                        n =
                          'function' == typeof fetch &&
                          -1 !== fetch.toString().indexOf('[native code');
                      return (
                        (!t || n) &&
                        'undefined' != typeof indexedDB &&
                        'undefined' != typeof IDBKeyRange
                      );
                    } catch (t) {
                      return !1;
                    }
                  })(),
                  iterate: function (t, n) {
                    var e = this,
                      r = new i(function (n, r) {
                        e.ready()
                          .then(function () {
                            T(e._dbInfo, y, function (o, a) {
                              if (o) return r(o);
                              try {
                                var i = a
                                    .objectStore(e._dbInfo.storeName)
                                    .openCursor(),
                                  s = 1;
                                (i.onsuccess = function () {
                                  var e = i.result;
                                  if (e) {
                                    var r = e.value;
                                    A(r) && (r = k(r));
                                    var o = t(r, e.key, s++);
                                    void 0 !== o ? n(o) : e.continue();
                                  } else n();
                                }),
                                  (i.onerror = function () {
                                    r(i.error);
                                  });
                              } catch (t) {
                                r(t);
                              }
                            });
                          })
                          .catch(r);
                      });
                    return s(r, n), r;
                  },
                  getItem: function (t, n) {
                    var e = this;
                    t = u(t);
                    var r = new i(function (n, r) {
                      e.ready()
                        .then(function () {
                          T(e._dbInfo, y, function (o, a) {
                            if (o) return r(o);
                            try {
                              var i = a.objectStore(e._dbInfo.storeName).get(t);
                              (i.onsuccess = function () {
                                var t = i.result;
                                void 0 === t && (t = null),
                                  A(t) && (t = k(t)),
                                  n(t);
                              }),
                                (i.onerror = function () {
                                  r(i.error);
                                });
                            } catch (t) {
                              r(t);
                            }
                          });
                        })
                        .catch(r);
                    });
                    return s(r, n), r;
                  },
                  setItem: function (t, n, e) {
                    var r = this;
                    t = u(t);
                    var o = new i(function (e, o) {
                      var a;
                      r.ready()
                        .then(function () {
                          return (
                            (a = r._dbInfo),
                            '[object Blob]' === p.call(n)
                              ? x(a.db).then(function (t) {
                                  return t
                                    ? n
                                    : ((e = n),
                                      new i(function (t, n) {
                                        var r = new FileReader();
                                        (r.onerror = n),
                                          (r.onloadend = function (n) {
                                            var r = btoa(n.target.result || '');
                                            t({
                                              __local_forage_encoded_blob: !0,
                                              data: r,
                                              type: e.type,
                                            });
                                          }),
                                          r.readAsBinaryString(e);
                                      }));
                                  var e;
                                })
                              : n
                          );
                        })
                        .then(function (n) {
                          T(r._dbInfo, v, function (a, i) {
                            if (a) return o(a);
                            try {
                              var s = i.objectStore(r._dbInfo.storeName);
                              null === n && (n = void 0);
                              var c = s.put(n, t);
                              (i.oncomplete = function () {
                                void 0 === n && (n = null), e(n);
                              }),
                                (i.onabort = i.onerror =
                                  function () {
                                    var t = c.error
                                      ? c.error
                                      : c.transaction.error;
                                    o(t);
                                  });
                            } catch (t) {
                              o(t);
                            }
                          });
                        })
                        .catch(o);
                    });
                    return s(o, e), o;
                  },
                  removeItem: function (t, n) {
                    var e = this;
                    t = u(t);
                    var r = new i(function (n, r) {
                      e.ready()
                        .then(function () {
                          T(e._dbInfo, v, function (o, a) {
                            if (o) return r(o);
                            try {
                              var i = a
                                .objectStore(e._dbInfo.storeName)
                                .delete(t);
                              (a.oncomplete = function () {
                                n();
                              }),
                                (a.onerror = function () {
                                  r(i.error);
                                }),
                                (a.onabort = function () {
                                  var t = i.error
                                    ? i.error
                                    : i.transaction.error;
                                  r(t);
                                });
                            } catch (t) {
                              r(t);
                            }
                          });
                        })
                        .catch(r);
                    });
                    return s(r, n), r;
                  },
                  clear: function (t) {
                    var n = this,
                      e = new i(function (t, e) {
                        n.ready()
                          .then(function () {
                            T(n._dbInfo, v, function (r, o) {
                              if (r) return e(r);
                              try {
                                var a = o
                                  .objectStore(n._dbInfo.storeName)
                                  .clear();
                                (o.oncomplete = function () {
                                  t();
                                }),
                                  (o.onabort = o.onerror =
                                    function () {
                                      var t = a.error
                                        ? a.error
                                        : a.transaction.error;
                                      e(t);
                                    });
                              } catch (t) {
                                e(t);
                              }
                            });
                          })
                          .catch(e);
                      });
                    return s(e, t), e;
                  },
                  length: function (t) {
                    var n = this,
                      e = new i(function (t, e) {
                        n.ready()
                          .then(function () {
                            T(n._dbInfo, y, function (r, o) {
                              if (r) return e(r);
                              try {
                                var a = o
                                  .objectStore(n._dbInfo.storeName)
                                  .count();
                                (a.onsuccess = function () {
                                  t(a.result);
                                }),
                                  (a.onerror = function () {
                                    e(a.error);
                                  });
                              } catch (t) {
                                e(t);
                              }
                            });
                          })
                          .catch(e);
                      });
                    return s(e, t), e;
                  },
                  key: function (t, n) {
                    var e = this,
                      r = new i(function (n, r) {
                        t < 0
                          ? n(null)
                          : e
                              .ready()
                              .then(function () {
                                T(e._dbInfo, y, function (o, a) {
                                  if (o) return r(o);
                                  try {
                                    var i = a.objectStore(e._dbInfo.storeName),
                                      s = !1,
                                      c = i.openCursor();
                                    (c.onsuccess = function () {
                                      var e = c.result;
                                      e
                                        ? 0 === t
                                          ? n(e.key)
                                          : s
                                          ? n(e.key)
                                          : ((s = !0), e.advance(t))
                                        : n(null);
                                    }),
                                      (c.onerror = function () {
                                        r(c.error);
                                      });
                                  } catch (t) {
                                    r(t);
                                  }
                                });
                              })
                              .catch(r);
                      });
                    return s(r, n), r;
                  },
                  keys: function (t) {
                    var n = this,
                      e = new i(function (t, e) {
                        n.ready()
                          .then(function () {
                            T(n._dbInfo, y, function (r, o) {
                              if (r) return e(r);
                              try {
                                var a = o
                                    .objectStore(n._dbInfo.storeName)
                                    .openCursor(),
                                  i = [];
                                (a.onsuccess = function () {
                                  var n = a.result;
                                  n ? (i.push(n.key), n.continue()) : t(i);
                                }),
                                  (a.onerror = function () {
                                    e(a.error);
                                  });
                              } catch (t) {
                                e(t);
                              }
                            });
                          })
                          .catch(e);
                      });
                    return s(e, t), e;
                  },
                  dropInstance: function (t, n) {
                    n = f.apply(this, arguments);
                    var e,
                      r = this.config();
                    if (
                      ((t = ('function' != typeof t && t) || {}).name ||
                        ((t.name = t.name || r.name),
                        (t.storeName = t.storeName || r.storeName)),
                      t.name)
                    ) {
                      var a =
                        t.name === r.name && this._dbInfo.db
                          ? i.resolve(this._dbInfo.db)
                          : S(t).then(function (n) {
                              var e = h[t.name],
                                r = e.forages;
                              e.db = n;
                              for (var o = 0; o < r.length; o++)
                                r[o]._dbInfo.db = n;
                              return n;
                            });
                      e = t.storeName
                        ? a.then(function (n) {
                            if (n.objectStoreNames.contains(t.storeName)) {
                              var e = n.version + 1;
                              m(t);
                              var r = h[t.name],
                                a = r.forages;
                              n.close();
                              for (var s = 0; s < a.length; s++) {
                                var c = a[s];
                                (c._dbInfo.db = null), (c._dbInfo.version = e);
                              }
                              return new i(function (n, r) {
                                var a = o.open(t.name, e);
                                (a.onerror = function (t) {
                                  a.result.close(), r(t);
                                }),
                                  (a.onupgradeneeded = function () {
                                    a.result.deleteObjectStore(t.storeName);
                                  }),
                                  (a.onsuccess = function () {
                                    var t = a.result;
                                    t.close(), n(t);
                                  });
                              })
                                .then(function (t) {
                                  r.db = t;
                                  for (var n = 0; n < a.length; n++) {
                                    var e = a[n];
                                    (e._dbInfo.db = t), _(e._dbInfo);
                                  }
                                })
                                .catch(function (n) {
                                  throw (
                                    ((b(t, n) || i.resolve()).catch(
                                      function () {}
                                    ),
                                    n)
                                  );
                                });
                            }
                          })
                        : a.then(function (n) {
                            m(t);
                            var e = h[t.name],
                              r = e.forages;
                            n.close();
                            for (var a = 0; a < r.length; a++)
                              r[a]._dbInfo.db = null;
                            return new i(function (n, e) {
                              var r = o.deleteDatabase(t.name);
                              (r.onerror = r.onblocked =
                                function (t) {
                                  var n = r.result;
                                  n && n.close(), e(t);
                                }),
                                (r.onsuccess = function () {
                                  var t = r.result;
                                  t && t.close(), n(t);
                                });
                            })
                              .then(function (t) {
                                e.db = t;
                                for (var n = 0; n < r.length; n++)
                                  _(r[n]._dbInfo);
                              })
                              .catch(function (n) {
                                throw (
                                  ((b(t, n) || i.resolve()).catch(
                                    function () {}
                                  ),
                                  n)
                                );
                              });
                          });
                    } else e = i.reject('Invalid arguments');
                    return s(e, n), e;
                  },
                },
                j =
                  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
                B = '~~local_forage_type~',
                R = /^~~local_forage_type~([^~]+)~/,
                I = '__lfsc__:',
                W = I.length,
                M = 'arbf',
                P = 'blob',
                H = 'si08',
                L = 'ui08',
                N = 'uic8',
                D = 'si16',
                F = 'si32',
                X = 'ur16',
                J = 'ui32',
                z = 'fl32',
                U = 'fl64',
                K = W + M.length,
                G = Object.prototype.toString;
              function q(t) {
                var n,
                  e,
                  r,
                  o,
                  a,
                  i = 0.75 * t.length,
                  s = t.length,
                  c = 0;
                '=' === t[t.length - 1] &&
                  (i--, '=' === t[t.length - 2] && i--);
                var u = new ArrayBuffer(i),
                  f = new Uint8Array(u);
                for (n = 0; n < s; n += 4)
                  (e = j.indexOf(t[n])),
                    (r = j.indexOf(t[n + 1])),
                    (o = j.indexOf(t[n + 2])),
                    (a = j.indexOf(t[n + 3])),
                    (f[c++] = (e << 2) | (r >> 4)),
                    (f[c++] = ((15 & r) << 4) | (o >> 2)),
                    (f[c++] = ((3 & o) << 6) | (63 & a));
                return u;
              }
              function V(t) {
                var n,
                  e = new Uint8Array(t),
                  r = '';
                for (n = 0; n < e.length; n += 3)
                  (r += j[e[n] >> 2]),
                    (r += j[((3 & e[n]) << 4) | (e[n + 1] >> 4)]),
                    (r += j[((15 & e[n + 1]) << 2) | (e[n + 2] >> 6)]),
                    (r += j[63 & e[n + 2]]);
                return (
                  e.length % 3 == 2
                    ? (r = r.substring(0, r.length - 1) + '=')
                    : e.length % 3 == 1 &&
                      (r = r.substring(0, r.length - 2) + '=='),
                  r
                );
              }
              var Y = {
                serialize: function (t, n) {
                  var e = '';
                  if (
                    (t && (e = G.call(t)),
                    t &&
                      ('[object ArrayBuffer]' === e ||
                        (t.buffer &&
                          '[object ArrayBuffer]' === G.call(t.buffer))))
                  ) {
                    var r,
                      o = I;
                    t instanceof ArrayBuffer
                      ? ((r = t), (o += M))
                      : ((r = t.buffer),
                        '[object Int8Array]' === e
                          ? (o += H)
                          : '[object Uint8Array]' === e
                          ? (o += L)
                          : '[object Uint8ClampedArray]' === e
                          ? (o += N)
                          : '[object Int16Array]' === e
                          ? (o += D)
                          : '[object Uint16Array]' === e
                          ? (o += X)
                          : '[object Int32Array]' === e
                          ? (o += F)
                          : '[object Uint32Array]' === e
                          ? (o += J)
                          : '[object Float32Array]' === e
                          ? (o += z)
                          : '[object Float64Array]' === e
                          ? (o += U)
                          : n(new Error('Failed to get type for BinaryArray'))),
                      n(o + V(r));
                  } else if ('[object Blob]' === e) {
                    var a = new FileReader();
                    (a.onload = function () {
                      var e = B + t.type + '~' + V(this.result);
                      n(I + P + e);
                    }),
                      a.readAsArrayBuffer(t);
                  } else
                    try {
                      n(JSON.stringify(t));
                    } catch (e) {
                      console.error(
                        "Couldn't convert value into a JSON string: ",
                        t
                      ),
                        n(null, e);
                    }
                },
                deserialize: function (t) {
                  if (t.substring(0, W) !== I) return JSON.parse(t);
                  var n,
                    e = t.substring(K),
                    r = t.substring(W, K);
                  if (r === P && R.test(e)) {
                    var o = e.match(R);
                    (n = o[1]), (e = e.substring(o[0].length));
                  }
                  var i = q(e);
                  switch (r) {
                    case M:
                      return i;
                    case P:
                      return a([i], { type: n });
                    case H:
                      return new Int8Array(i);
                    case L:
                      return new Uint8Array(i);
                    case N:
                      return new Uint8ClampedArray(i);
                    case D:
                      return new Int16Array(i);
                    case X:
                      return new Uint16Array(i);
                    case F:
                      return new Int32Array(i);
                    case J:
                      return new Uint32Array(i);
                    case z:
                      return new Float32Array(i);
                    case U:
                      return new Float64Array(i);
                    default:
                      throw new Error('Unkown type: ' + r);
                  }
                },
                stringToBuffer: q,
                bufferToString: V,
              };
              function $(t, n, e, r) {
                t.executeSql(
                  'CREATE TABLE IF NOT EXISTS ' +
                    n.storeName +
                    ' (id INTEGER PRIMARY KEY, key unique, value)',
                  [],
                  e,
                  r
                );
              }
              function Q(t, n, e, r, o, a) {
                t.executeSql(
                  e,
                  r,
                  o,
                  function (t, i) {
                    i.code === i.SYNTAX_ERR
                      ? t.executeSql(
                          "SELECT name FROM sqlite_master WHERE type='table' AND name = ?",
                          [n.storeName],
                          function (t, s) {
                            s.rows.length
                              ? a(t, i)
                              : $(
                                  t,
                                  n,
                                  function () {
                                    t.executeSql(e, r, o, a);
                                  },
                                  a
                                );
                          },
                          a
                        )
                      : a(t, i);
                  },
                  a
                );
              }
              function Z(t, n, e, r) {
                var o = this;
                t = u(t);
                var a = new i(function (a, i) {
                  o.ready()
                    .then(function () {
                      void 0 === n && (n = null);
                      var s = n,
                        c = o._dbInfo;
                      c.serializer.serialize(n, function (n, u) {
                        u
                          ? i(u)
                          : c.db.transaction(
                              function (e) {
                                Q(
                                  e,
                                  c,
                                  'INSERT OR REPLACE INTO ' +
                                    c.storeName +
                                    ' (key, value) VALUES (?, ?)',
                                  [t, n],
                                  function () {
                                    a(s);
                                  },
                                  function (t, n) {
                                    i(n);
                                  }
                                );
                              },
                              function (n) {
                                if (n.code === n.QUOTA_ERR) {
                                  if (r > 0)
                                    return void a(Z.apply(o, [t, s, e, r - 1]));
                                  i(n);
                                }
                              }
                            );
                      });
                    })
                    .catch(i);
                });
                return s(a, e), a;
              }
              var tt = {
                _driver: 'webSQLStorage',
                _initStorage: function (t) {
                  var n = this,
                    e = { db: null };
                  if (t)
                    for (var r in t)
                      e[r] = 'string' != typeof t[r] ? t[r].toString() : t[r];
                  var o = new i(function (t, r) {
                    try {
                      e.db = openDatabase(
                        e.name,
                        String(e.version),
                        e.description,
                        e.size
                      );
                    } catch (t) {
                      return r(t);
                    }
                    e.db.transaction(function (o) {
                      $(
                        o,
                        e,
                        function () {
                          (n._dbInfo = e), t();
                        },
                        function (t, n) {
                          r(n);
                        }
                      );
                    }, r);
                  });
                  return (e.serializer = Y), o;
                },
                _support: 'function' == typeof openDatabase,
                iterate: function (t, n) {
                  var e = this,
                    r = new i(function (n, r) {
                      e.ready()
                        .then(function () {
                          var o = e._dbInfo;
                          o.db.transaction(function (e) {
                            Q(
                              e,
                              o,
                              'SELECT * FROM ' + o.storeName,
                              [],
                              function (e, r) {
                                for (
                                  var a = r.rows, i = a.length, s = 0;
                                  s < i;
                                  s++
                                ) {
                                  var c = a.item(s),
                                    u = c.value;
                                  if (
                                    (u && (u = o.serializer.deserialize(u)),
                                    void 0 !== (u = t(u, c.key, s + 1)))
                                  )
                                    return void n(u);
                                }
                                n();
                              },
                              function (t, n) {
                                r(n);
                              }
                            );
                          });
                        })
                        .catch(r);
                    });
                  return s(r, n), r;
                },
                getItem: function (t, n) {
                  var e = this;
                  t = u(t);
                  var r = new i(function (n, r) {
                    e.ready()
                      .then(function () {
                        var o = e._dbInfo;
                        o.db.transaction(function (e) {
                          Q(
                            e,
                            o,
                            'SELECT * FROM ' +
                              o.storeName +
                              ' WHERE key = ? LIMIT 1',
                            [t],
                            function (t, e) {
                              var r = e.rows.length
                                ? e.rows.item(0).value
                                : null;
                              r && (r = o.serializer.deserialize(r)), n(r);
                            },
                            function (t, n) {
                              r(n);
                            }
                          );
                        });
                      })
                      .catch(r);
                  });
                  return s(r, n), r;
                },
                setItem: function (t, n, e) {
                  return Z.apply(this, [t, n, e, 1]);
                },
                removeItem: function (t, n) {
                  var e = this;
                  t = u(t);
                  var r = new i(function (n, r) {
                    e.ready()
                      .then(function () {
                        var o = e._dbInfo;
                        o.db.transaction(function (e) {
                          Q(
                            e,
                            o,
                            'DELETE FROM ' + o.storeName + ' WHERE key = ?',
                            [t],
                            function () {
                              n();
                            },
                            function (t, n) {
                              r(n);
                            }
                          );
                        });
                      })
                      .catch(r);
                  });
                  return s(r, n), r;
                },
                clear: function (t) {
                  var n = this,
                    e = new i(function (t, e) {
                      n.ready()
                        .then(function () {
                          var r = n._dbInfo;
                          r.db.transaction(function (n) {
                            Q(
                              n,
                              r,
                              'DELETE FROM ' + r.storeName,
                              [],
                              function () {
                                t();
                              },
                              function (t, n) {
                                e(n);
                              }
                            );
                          });
                        })
                        .catch(e);
                    });
                  return s(e, t), e;
                },
                length: function (t) {
                  var n = this,
                    e = new i(function (t, e) {
                      n.ready()
                        .then(function () {
                          var r = n._dbInfo;
                          r.db.transaction(function (n) {
                            Q(
                              n,
                              r,
                              'SELECT COUNT(key) as c FROM ' + r.storeName,
                              [],
                              function (n, e) {
                                var r = e.rows.item(0).c;
                                t(r);
                              },
                              function (t, n) {
                                e(n);
                              }
                            );
                          });
                        })
                        .catch(e);
                    });
                  return s(e, t), e;
                },
                key: function (t, n) {
                  var e = this,
                    r = new i(function (n, r) {
                      e.ready()
                        .then(function () {
                          var o = e._dbInfo;
                          o.db.transaction(function (e) {
                            Q(
                              e,
                              o,
                              'SELECT key FROM ' +
                                o.storeName +
                                ' WHERE id = ? LIMIT 1',
                              [t + 1],
                              function (t, e) {
                                var r = e.rows.length
                                  ? e.rows.item(0).key
                                  : null;
                                n(r);
                              },
                              function (t, n) {
                                r(n);
                              }
                            );
                          });
                        })
                        .catch(r);
                    });
                  return s(r, n), r;
                },
                keys: function (t) {
                  var n = this,
                    e = new i(function (t, e) {
                      n.ready()
                        .then(function () {
                          var r = n._dbInfo;
                          r.db.transaction(function (n) {
                            Q(
                              n,
                              r,
                              'SELECT key FROM ' + r.storeName,
                              [],
                              function (n, e) {
                                for (var r = [], o = 0; o < e.rows.length; o++)
                                  r.push(e.rows.item(o).key);
                                t(r);
                              },
                              function (t, n) {
                                e(n);
                              }
                            );
                          });
                        })
                        .catch(e);
                    });
                  return s(e, t), e;
                },
                dropInstance: function (t, n) {
                  n = f.apply(this, arguments);
                  var e = this.config();
                  (t = ('function' != typeof t && t) || {}).name ||
                    ((t.name = t.name || e.name),
                    (t.storeName = t.storeName || e.storeName));
                  var r,
                    o = this;
                  return (
                    s(
                      (r = t.name
                        ? new i(function (n) {
                            var r;
                            (r =
                              t.name === e.name
                                ? o._dbInfo.db
                                : openDatabase(t.name, '', '', 0)),
                              t.storeName
                                ? n({ db: r, storeNames: [t.storeName] })
                                : n(
                                    (function (t) {
                                      return new i(function (n, e) {
                                        t.transaction(
                                          function (r) {
                                            r.executeSql(
                                              "SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",
                                              [],
                                              function (e, r) {
                                                for (
                                                  var o = [], a = 0;
                                                  a < r.rows.length;
                                                  a++
                                                )
                                                  o.push(r.rows.item(a).name);
                                                n({ db: t, storeNames: o });
                                              },
                                              function (t, n) {
                                                e(n);
                                              }
                                            );
                                          },
                                          function (t) {
                                            e(t);
                                          }
                                        );
                                      });
                                    })(r)
                                  );
                          }).then(function (t) {
                            return new i(function (n, e) {
                              t.db.transaction(
                                function (r) {
                                  function o(t) {
                                    return new i(function (n, e) {
                                      r.executeSql(
                                        'DROP TABLE IF EXISTS ' + t,
                                        [],
                                        function () {
                                          n();
                                        },
                                        function (t, n) {
                                          e(n);
                                        }
                                      );
                                    });
                                  }
                                  for (
                                    var a = [], s = 0, c = t.storeNames.length;
                                    s < c;
                                    s++
                                  )
                                    a.push(o(t.storeNames[s]));
                                  i.all(a)
                                    .then(function () {
                                      n();
                                    })
                                    .catch(function (t) {
                                      e(t);
                                    });
                                },
                                function (t) {
                                  e(t);
                                }
                              );
                            });
                          })
                        : i.reject('Invalid arguments')),
                      n
                    ),
                    r
                  );
                },
              };
              function nt(t, n) {
                var e = t.name + '/';
                return (
                  t.storeName !== n.storeName && (e += t.storeName + '/'), e
                );
              }
              function et() {
                return (
                  !(function () {
                    try {
                      return (
                        localStorage.setItem('_localforage_support_test', !0),
                        localStorage.removeItem('_localforage_support_test'),
                        !1
                      );
                    } catch (t) {
                      return !0;
                    }
                  })() || localStorage.length > 0
                );
              }
              var rt = {
                  _driver: 'localStorageWrapper',
                  _initStorage: function (t) {
                    var n = {};
                    if (t) for (var e in t) n[e] = t[e];
                    return (
                      (n.keyPrefix = nt(t, this._defaultConfig)),
                      et()
                        ? ((this._dbInfo = n), (n.serializer = Y), i.resolve())
                        : i.reject()
                    );
                  },
                  _support: (function () {
                    try {
                      return (
                        'undefined' != typeof localStorage &&
                        'setItem' in localStorage &&
                        !!localStorage.setItem
                      );
                    } catch (t) {
                      return !1;
                    }
                  })(),
                  iterate: function (t, n) {
                    var e = this,
                      r = e.ready().then(function () {
                        for (
                          var n = e._dbInfo,
                            r = n.keyPrefix,
                            o = r.length,
                            a = localStorage.length,
                            i = 1,
                            s = 0;
                          s < a;
                          s++
                        ) {
                          var c = localStorage.key(s);
                          if (0 === c.indexOf(r)) {
                            var u = localStorage.getItem(c);
                            if (
                              (u && (u = n.serializer.deserialize(u)),
                              void 0 !== (u = t(u, c.substring(o), i++)))
                            )
                              return u;
                          }
                        }
                      });
                    return s(r, n), r;
                  },
                  getItem: function (t, n) {
                    var e = this;
                    t = u(t);
                    var r = e.ready().then(function () {
                      var n = e._dbInfo,
                        r = localStorage.getItem(n.keyPrefix + t);
                      return r && (r = n.serializer.deserialize(r)), r;
                    });
                    return s(r, n), r;
                  },
                  setItem: function (t, n, e) {
                    var r = this;
                    t = u(t);
                    var o = r.ready().then(function () {
                      void 0 === n && (n = null);
                      var e = n;
                      return new i(function (o, a) {
                        var i = r._dbInfo;
                        i.serializer.serialize(n, function (n, r) {
                          if (r) a(r);
                          else
                            try {
                              localStorage.setItem(i.keyPrefix + t, n), o(e);
                            } catch (t) {
                              ('QuotaExceededError' !== t.name &&
                                'NS_ERROR_DOM_QUOTA_REACHED' !== t.name) ||
                                a(t),
                                a(t);
                            }
                        });
                      });
                    });
                    return s(o, e), o;
                  },
                  removeItem: function (t, n) {
                    var e = this;
                    t = u(t);
                    var r = e.ready().then(function () {
                      var n = e._dbInfo;
                      localStorage.removeItem(n.keyPrefix + t);
                    });
                    return s(r, n), r;
                  },
                  clear: function (t) {
                    var n = this,
                      e = n.ready().then(function () {
                        for (
                          var t = n._dbInfo.keyPrefix,
                            e = localStorage.length - 1;
                          e >= 0;
                          e--
                        ) {
                          var r = localStorage.key(e);
                          0 === r.indexOf(t) && localStorage.removeItem(r);
                        }
                      });
                    return s(e, t), e;
                  },
                  length: function (t) {
                    var n = this.keys().then(function (t) {
                      return t.length;
                    });
                    return s(n, t), n;
                  },
                  key: function (t, n) {
                    var e = this,
                      r = e.ready().then(function () {
                        var n,
                          r = e._dbInfo;
                        try {
                          n = localStorage.key(t);
                        } catch (t) {
                          n = null;
                        }
                        return n && (n = n.substring(r.keyPrefix.length)), n;
                      });
                    return s(r, n), r;
                  },
                  keys: function (t) {
                    var n = this,
                      e = n.ready().then(function () {
                        for (
                          var t = n._dbInfo,
                            e = localStorage.length,
                            r = [],
                            o = 0;
                          o < e;
                          o++
                        ) {
                          var a = localStorage.key(o);
                          0 === a.indexOf(t.keyPrefix) &&
                            r.push(a.substring(t.keyPrefix.length));
                        }
                        return r;
                      });
                    return s(e, t), e;
                  },
                  dropInstance: function (t, n) {
                    if (
                      ((n = f.apply(this, arguments)),
                      !(t = ('function' != typeof t && t) || {}).name)
                    ) {
                      var e = this.config();
                      (t.name = t.name || e.name),
                        (t.storeName = t.storeName || e.storeName);
                    }
                    var r,
                      o = this;
                    return (
                      s(
                        (r = t.name
                          ? new i(function (n) {
                              t.storeName
                                ? n(nt(t, o._defaultConfig))
                                : n(t.name + '/');
                            }).then(function (t) {
                              for (
                                var n = localStorage.length - 1;
                                n >= 0;
                                n--
                              ) {
                                var e = localStorage.key(n);
                                0 === e.indexOf(t) &&
                                  localStorage.removeItem(e);
                              }
                            })
                          : i.reject('Invalid arguments')),
                        n
                      ),
                      r
                    );
                  },
                },
                ot = function (t, n) {
                  for (var e, r, o = t.length, a = 0; a < o; ) {
                    if (
                      (e = t[a]) === (r = n) ||
                      ('number' == typeof e &&
                        'number' == typeof r &&
                        isNaN(e) &&
                        isNaN(r))
                    )
                      return !0;
                    a++;
                  }
                  return !1;
                },
                at =
                  Array.isArray ||
                  function (t) {
                    return (
                      '[object Array]' === Object.prototype.toString.call(t)
                    );
                  },
                it = {},
                st = {},
                ct = { INDEXEDDB: O, WEBSQL: tt, LOCALSTORAGE: rt },
                ut = [
                  ct.INDEXEDDB._driver,
                  ct.WEBSQL._driver,
                  ct.LOCALSTORAGE._driver,
                ],
                ft = ['dropInstance'],
                dt = [
                  'clear',
                  'getItem',
                  'iterate',
                  'key',
                  'keys',
                  'length',
                  'removeItem',
                  'setItem',
                ].concat(ft),
                lt = {
                  description: '',
                  driver: ut.slice(),
                  name: 'localforage',
                  size: 4980736,
                  storeName: 'keyvaluepairs',
                  version: 1,
                };
              function ht(t, n) {
                t[n] = function () {
                  var e = arguments;
                  return t.ready().then(function () {
                    return t[n].apply(t, e);
                  });
                };
              }
              function pt() {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  if (n)
                    for (var e in n)
                      n.hasOwnProperty(e) &&
                        (at(n[e])
                          ? (arguments[0][e] = n[e].slice())
                          : (arguments[0][e] = n[e]));
                }
                return arguments[0];
              }
              var yt = new ((function () {
                function t(n) {
                  for (var e in ((function (t, n) {
                    if (!(t instanceof n))
                      throw new TypeError('Cannot call a class as a function');
                  })(this, t),
                  ct))
                    if (ct.hasOwnProperty(e)) {
                      var r = ct[e],
                        o = r._driver;
                      (this[e] = o), it[o] || this.defineDriver(r);
                    }
                  (this._defaultConfig = pt({}, lt)),
                    (this._config = pt({}, this._defaultConfig, n)),
                    (this._driverSet = null),
                    (this._initDriver = null),
                    (this._ready = !1),
                    (this._dbInfo = null),
                    this._wrapLibraryMethodsWithReady(),
                    this.setDriver(this._config.driver).catch(function () {});
                }
                return (
                  (t.prototype.config = function (t) {
                    if ('object' === (void 0 === t ? 'undefined' : r(t))) {
                      if (this._ready)
                        return new Error(
                          "Can't call config() after localforage has been used."
                        );
                      for (var n in t) {
                        if (
                          ('storeName' === n &&
                            (t[n] = t[n].replace(/\W/g, '_')),
                          'version' === n && 'number' != typeof t[n])
                        )
                          return new Error(
                            'Database version must be a number.'
                          );
                        this._config[n] = t[n];
                      }
                      return (
                        !('driver' in t && t.driver) ||
                        this.setDriver(this._config.driver)
                      );
                    }
                    return 'string' == typeof t
                      ? this._config[t]
                      : this._config;
                  }),
                  (t.prototype.defineDriver = function (t, n, e) {
                    var r = new i(function (n, e) {
                      try {
                        var r = t._driver,
                          o = new Error(
                            'Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver'
                          );
                        if (!t._driver) return void e(o);
                        for (
                          var a = dt.concat('_initStorage'),
                            c = 0,
                            u = a.length;
                          c < u;
                          c++
                        ) {
                          var f = a[c];
                          if ((!ot(ft, f) || t[f]) && 'function' != typeof t[f])
                            return void e(o);
                        }
                        !(function () {
                          for (
                            var n = function (t) {
                                return function () {
                                  var n = new Error(
                                      'Method ' +
                                        t +
                                        ' is not implemented by the current driver'
                                    ),
                                    e = i.reject(n);
                                  return (
                                    s(e, arguments[arguments.length - 1]), e
                                  );
                                };
                              },
                              e = 0,
                              r = ft.length;
                            e < r;
                            e++
                          ) {
                            var o = ft[e];
                            t[o] || (t[o] = n(o));
                          }
                        })();
                        var d = function (e) {
                          it[r] &&
                            console.info('Redefining LocalForage driver: ' + r),
                            (it[r] = t),
                            (st[r] = e),
                            n();
                        };
                        '_support' in t
                          ? t._support && 'function' == typeof t._support
                            ? t._support().then(d, e)
                            : d(!!t._support)
                          : d(!0);
                      } catch (t) {
                        e(t);
                      }
                    });
                    return c(r, n, e), r;
                  }),
                  (t.prototype.driver = function () {
                    return this._driver || null;
                  }),
                  (t.prototype.getDriver = function (t, n, e) {
                    var r = it[t]
                      ? i.resolve(it[t])
                      : i.reject(new Error('Driver not found.'));
                    return c(r, n, e), r;
                  }),
                  (t.prototype.getSerializer = function (t) {
                    var n = i.resolve(Y);
                    return c(n, t), n;
                  }),
                  (t.prototype.ready = function (t) {
                    var n = this,
                      e = n._driverSet.then(function () {
                        return (
                          null === n._ready && (n._ready = n._initDriver()),
                          n._ready
                        );
                      });
                    return c(e, t, t), e;
                  }),
                  (t.prototype.setDriver = function (t, n, e) {
                    var r = this;
                    at(t) || (t = [t]);
                    var o = this._getSupportedDrivers(t);
                    function a() {
                      r._config.driver = r.driver();
                    }
                    function s(t) {
                      return (
                        r._extend(t),
                        a(),
                        (r._ready = r._initStorage(r._config)),
                        r._ready
                      );
                    }
                    var u =
                      null !== this._driverSet
                        ? this._driverSet.catch(function () {
                            return i.resolve();
                          })
                        : i.resolve();
                    return (
                      (this._driverSet = u
                        .then(function () {
                          var t = o[0];
                          return (
                            (r._dbInfo = null),
                            (r._ready = null),
                            r.getDriver(t).then(function (t) {
                              (r._driver = t._driver),
                                a(),
                                r._wrapLibraryMethodsWithReady(),
                                (r._initDriver = (function (t) {
                                  return function () {
                                    var n = 0;
                                    return (function e() {
                                      for (; n < t.length; ) {
                                        var o = t[n];
                                        return (
                                          n++,
                                          (r._dbInfo = null),
                                          (r._ready = null),
                                          r.getDriver(o).then(s).catch(e)
                                        );
                                      }
                                      a();
                                      var c = new Error(
                                        'No available storage method found.'
                                      );
                                      return (
                                        (r._driverSet = i.reject(c)),
                                        r._driverSet
                                      );
                                    })();
                                  };
                                })(o));
                            })
                          );
                        })
                        .catch(function () {
                          a();
                          var t = new Error(
                            'No available storage method found.'
                          );
                          return (r._driverSet = i.reject(t)), r._driverSet;
                        })),
                      c(this._driverSet, n, e),
                      this._driverSet
                    );
                  }),
                  (t.prototype.supports = function (t) {
                    return !!st[t];
                  }),
                  (t.prototype._extend = function (t) {
                    pt(this, t);
                  }),
                  (t.prototype._getSupportedDrivers = function (t) {
                    for (var n = [], e = 0, r = t.length; e < r; e++) {
                      var o = t[e];
                      this.supports(o) && n.push(o);
                    }
                    return n;
                  }),
                  (t.prototype._wrapLibraryMethodsWithReady = function () {
                    for (var t = 0, n = dt.length; t < n; t++) ht(this, dt[t]);
                  }),
                  (t.prototype.createInstance = function (n) {
                    return new t(n);
                  }),
                  t
                );
              })())();
              n.exports = yt;
            },
            { 3: 3 },
          ],
        },
        {},
        [4]
      )(4);
    },
    function (t, n) {
      var e = (t.exports = { version: '2.6.11' });
      'number' == typeof __e && (__e = e);
    },
    function (t, n) {
      var e = {}.hasOwnProperty;
      t.exports = function (t, n) {
        return e.call(t, n);
      };
    },
    function (t, n, e) {
      var r = e(7),
        o = e(28);
      t.exports = e(5)
        ? function (t, n, e) {
            return r.f(t, n, o(1, e));
          }
        : function (t, n, e) {
            return (t[n] = e), t;
          };
    },
    function (t, n, e) {
      var r = e(17);
      t.exports = function (t, n, e) {
        if ((r(t), void 0 === n)) return t;
        switch (e) {
          case 1:
            return function (e) {
              return t.call(n, e);
            };
          case 2:
            return function (e, r) {
              return t.call(n, e, r);
            };
          case 3:
            return function (e, r, o) {
              return t.call(n, e, r, o);
            };
        }
        return function () {
          return t.apply(n, arguments);
        };
      };
    },
    function (t, n) {
      t.exports = function (t) {
        if ('function' != typeof t) throw TypeError(t + ' is not a function!');
        return t;
      };
    },
    function (t, n, e) {
      var r = e(56),
        o = e(42);
      t.exports =
        Object.keys ||
        function (t) {
          return r(t, o);
        };
    },
    function (t, n, e) {
      var r = e(57),
        o = e(39);
      t.exports = function (t) {
        return r(o(t));
      };
    },
    function (module, exports, __webpack_require__) {
      var factory;
      'undefined' == typeof window ? global : window,
        (factory = function () {
          return (function (t) {
            var n = {};
            function e(r) {
              if (n[r]) return n[r].exports;
              var o = (n[r] = { i: r, l: !1, exports: {} });
              return (
                t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports
              );
            }
            return (
              (e.m = t),
              (e.c = n),
              (e.d = function (t, n, r) {
                e.o(t, n) ||
                  Object.defineProperty(t, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: r,
                  });
              }),
              (e.r = function (t) {
                Object.defineProperty(t, '__esModule', { value: !0 });
              }),
              (e.n = function (t) {
                var n =
                  t && t.__esModule
                    ? function () {
                        return t.default;
                      }
                    : function () {
                        return t;
                      };
                return e.d(n, 'a', n), n;
              }),
              (e.o = function (t, n) {
                return Object.prototype.hasOwnProperty.call(t, n);
              }),
              (e.p = ''),
              e((e.s = './src/index.js'))
            );
          })({
            './node_modules/crypto-js/aes.js':
              /*!***************************************!*\
        !*** ./node_modules/crypto-js/aes.js ***!
        \***************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar BlockCipher = C_lib.BlockCipher;\n\t\tvar C_algo = C.algo;\n\n\t\t// Lookup tables\n\t\tvar SBOX = [];\n\t\tvar INV_SBOX = [];\n\t\tvar SUB_MIX_0 = [];\n\t\tvar SUB_MIX_1 = [];\n\t\tvar SUB_MIX_2 = [];\n\t\tvar SUB_MIX_3 = [];\n\t\tvar INV_SUB_MIX_0 = [];\n\t\tvar INV_SUB_MIX_1 = [];\n\t\tvar INV_SUB_MIX_2 = [];\n\t\tvar INV_SUB_MIX_3 = [];\n\n\t\t// Compute lookup tables\n\t\t(function () {\n\t\t\t// Compute double table\n\t\t\tvar d = [];\n\t\t\tfor (var i = 0; i < 256; i++) {\n\t\t\t\tif (i < 128) {\n\t\t\t\t\td[i] = i << 1;\n\t\t\t\t} else {\n\t\t\t\t\td[i] = i << 1 ^ 0x11b;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// Walk GF(2^8)\n\t\t\tvar x = 0;\n\t\t\tvar xi = 0;\n\t\t\tfor (var i = 0; i < 256; i++) {\n\t\t\t\t// Compute sbox\n\t\t\t\tvar sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;\n\t\t\t\tsx = sx >>> 8 ^ sx & 0xff ^ 0x63;\n\t\t\t\tSBOX[x] = sx;\n\t\t\t\tINV_SBOX[sx] = x;\n\n\t\t\t\t// Compute multiplication\n\t\t\t\tvar x2 = d[x];\n\t\t\t\tvar x4 = d[x2];\n\t\t\t\tvar x8 = d[x4];\n\n\t\t\t\t// Compute sub bytes, mix columns tables\n\t\t\t\tvar t = d[sx] * 0x101 ^ sx * 0x1010100;\n\t\t\t\tSUB_MIX_0[x] = t << 24 | t >>> 8;\n\t\t\t\tSUB_MIX_1[x] = t << 16 | t >>> 16;\n\t\t\t\tSUB_MIX_2[x] = t << 8 | t >>> 24;\n\t\t\t\tSUB_MIX_3[x] = t;\n\n\t\t\t\t// Compute inv sub bytes, inv mix columns tables\n\t\t\t\tvar t = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;\n\t\t\t\tINV_SUB_MIX_0[sx] = t << 24 | t >>> 8;\n\t\t\t\tINV_SUB_MIX_1[sx] = t << 16 | t >>> 16;\n\t\t\t\tINV_SUB_MIX_2[sx] = t << 8 | t >>> 24;\n\t\t\t\tINV_SUB_MIX_3[sx] = t;\n\n\t\t\t\t// Compute next counter\n\t\t\t\tif (!x) {\n\t\t\t\t\tx = xi = 1;\n\t\t\t\t} else {\n\t\t\t\t\tx = x2 ^ d[d[d[x8 ^ x2]]];\n\t\t\t\t\txi ^= d[d[xi]];\n\t\t\t\t}\n\t\t\t}\n\t\t})();\n\n\t\t// Precomputed Rcon lookup\n\t\tvar RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];\n\n\t\t/**\n   * AES block cipher algorithm.\n   */\n\t\tvar AES = C_algo.AES = BlockCipher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\t// Skip reset of nRounds has been set before and key did not change\n\t\t\t\tif (this._nRounds && this._keyPriorReset === this._key) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar key = this._keyPriorReset = this._key;\n\t\t\t\tvar keyWords = key.words;\n\t\t\t\tvar keySize = key.sigBytes / 4;\n\n\t\t\t\t// Compute number of rounds\n\t\t\t\tvar nRounds = this._nRounds = keySize + 6;\n\n\t\t\t\t// Compute number of key schedule rows\n\t\t\t\tvar ksRows = (nRounds + 1) * 4;\n\n\t\t\t\t// Compute key schedule\n\t\t\t\tvar keySchedule = this._keySchedule = [];\n\t\t\t\tfor (var ksRow = 0; ksRow < ksRows; ksRow++) {\n\t\t\t\t\tif (ksRow < keySize) {\n\t\t\t\t\t\tkeySchedule[ksRow] = keyWords[ksRow];\n\t\t\t\t\t} else {\n\t\t\t\t\t\tvar t = keySchedule[ksRow - 1];\n\n\t\t\t\t\t\tif (!(ksRow % keySize)) {\n\t\t\t\t\t\t\t// Rot word\n\t\t\t\t\t\t\tt = t << 8 | t >>> 24;\n\n\t\t\t\t\t\t\t// Sub word\n\t\t\t\t\t\t\tt = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff];\n\n\t\t\t\t\t\t\t// Mix Rcon\n\t\t\t\t\t\t\tt ^= RCON[ksRow / keySize | 0] << 24;\n\t\t\t\t\t\t} else if (keySize > 6 && ksRow % keySize == 4) {\n\t\t\t\t\t\t\t// Sub word\n\t\t\t\t\t\t\tt = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 0xff] << 16 | SBOX[t >>> 8 & 0xff] << 8 | SBOX[t & 0xff];\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tkeySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Compute inv key schedule\n\t\t\t\tvar invKeySchedule = this._invKeySchedule = [];\n\t\t\t\tfor (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {\n\t\t\t\t\tvar ksRow = ksRows - invKsRow;\n\n\t\t\t\t\tif (invKsRow % 4) {\n\t\t\t\t\t\tvar t = keySchedule[ksRow];\n\t\t\t\t\t} else {\n\t\t\t\t\t\tvar t = keySchedule[ksRow - 4];\n\t\t\t\t\t}\n\n\t\t\t\t\tif (invKsRow < 4 || ksRow <= 4) {\n\t\t\t\t\t\tinvKeySchedule[invKsRow] = t;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tinvKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[t >>> 16 & 0xff]] ^ INV_SUB_MIX_2[SBOX[t >>> 8 & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\n\t\t\tencryptBlock: function (M, offset) {\n\t\t\t\tthis._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);\n\t\t\t},\n\n\t\t\tdecryptBlock: function (M, offset) {\n\t\t\t\t// Swap 2nd and 4th rows\n\t\t\t\tvar t = M[offset + 1];\n\t\t\t\tM[offset + 1] = M[offset + 3];\n\t\t\t\tM[offset + 3] = t;\n\n\t\t\t\tthis._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);\n\n\t\t\t\t// Inv swap 2nd and 4th rows\n\t\t\t\tvar t = M[offset + 1];\n\t\t\t\tM[offset + 1] = M[offset + 3];\n\t\t\t\tM[offset + 3] = t;\n\t\t\t},\n\n\t\t\t_doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar nRounds = this._nRounds;\n\n\t\t\t\t// Get input, add round key\n\t\t\t\tvar s0 = M[offset] ^ keySchedule[0];\n\t\t\t\tvar s1 = M[offset + 1] ^ keySchedule[1];\n\t\t\t\tvar s2 = M[offset + 2] ^ keySchedule[2];\n\t\t\t\tvar s3 = M[offset + 3] ^ keySchedule[3];\n\n\t\t\t\t// Key schedule row counter\n\t\t\t\tvar ksRow = 4;\n\n\t\t\t\t// Rounds\n\t\t\t\tfor (var round = 1; round < nRounds; round++) {\n\t\t\t\t\t// Shift rows, sub bytes, mix columns, add round key\n\t\t\t\t\tvar t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[s1 >>> 16 & 0xff] ^ SUB_MIX_2[s2 >>> 8 & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];\n\t\t\t\t\tvar t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[s2 >>> 16 & 0xff] ^ SUB_MIX_2[s3 >>> 8 & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];\n\t\t\t\t\tvar t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[s3 >>> 16 & 0xff] ^ SUB_MIX_2[s0 >>> 8 & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];\n\t\t\t\t\tvar t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[s0 >>> 16 & 0xff] ^ SUB_MIX_2[s1 >>> 8 & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];\n\n\t\t\t\t\t// Update state\n\t\t\t\t\ts0 = t0;\n\t\t\t\t\ts1 = t1;\n\t\t\t\t\ts2 = t2;\n\t\t\t\t\ts3 = t3;\n\t\t\t\t}\n\n\t\t\t\t// Shift rows, sub bytes, add round key\n\t\t\t\tvar t0 = (SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 0xff] << 16 | SBOX[s2 >>> 8 & 0xff] << 8 | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];\n\t\t\t\tvar t1 = (SBOX[s1 >>> 24] << 24 | SBOX[s2 >>> 16 & 0xff] << 16 | SBOX[s3 >>> 8 & 0xff] << 8 | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];\n\t\t\t\tvar t2 = (SBOX[s2 >>> 24] << 24 | SBOX[s3 >>> 16 & 0xff] << 16 | SBOX[s0 >>> 8 & 0xff] << 8 | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];\n\t\t\t\tvar t3 = (SBOX[s3 >>> 24] << 24 | SBOX[s0 >>> 16 & 0xff] << 16 | SBOX[s1 >>> 8 & 0xff] << 8 | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];\n\n\t\t\t\t// Set output\n\t\t\t\tM[offset] = t0;\n\t\t\t\tM[offset + 1] = t1;\n\t\t\t\tM[offset + 2] = t2;\n\t\t\t\tM[offset + 3] = t3;\n\t\t\t},\n\n\t\t\tkeySize: 256 / 32\n\t\t});\n\n\t\t/**\n   * Shortcut functions to the cipher\'s object interface.\n   *\n   * @example\n   *\n   *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);\n   *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);\n   */\n\t\tC.AES = BlockCipher._createHelper(AES);\n\t})();\n\n\treturn CryptoJS.AES;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/aes.js?'
                );
              },
            './node_modules/crypto-js/cipher-core.js':
              /*!***********************************************!*\
        !*** ./node_modules/crypto-js/cipher-core.js ***!
        \***********************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ";(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"), __webpack_require__(/*! ./evpkdf */ \"./node_modules/crypto-js/evpkdf.js\"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * Cipher core components.\n  */\n\tCryptoJS.lib.Cipher || function (undefined) {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar Base = C_lib.Base;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;\n\t\tvar C_enc = C.enc;\n\t\tvar Utf8 = C_enc.Utf8;\n\t\tvar Base64 = C_enc.Base64;\n\t\tvar C_algo = C.algo;\n\t\tvar EvpKDF = C_algo.EvpKDF;\n\n\t\t/**\n   * Abstract base cipher template.\n   *\n   * @property {number} keySize This cipher's key size. Default: 4 (128 bits)\n   * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)\n   * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.\n   * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.\n   */\n\t\tvar Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({\n\t\t\t/**\n    * Configuration options.\n    *\n    * @property {WordArray} iv The IV to use for this operation.\n    */\n\t\t\tcfg: Base.extend(),\n\n\t\t\t/**\n    * Creates this cipher in encryption mode.\n    *\n    * @param {WordArray} key The key.\n    * @param {Object} cfg (Optional) The configuration options to use for this operation.\n    *\n    * @return {Cipher} A cipher instance.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });\n    */\n\t\t\tcreateEncryptor: function (key, cfg) {\n\t\t\t\treturn this.create(this._ENC_XFORM_MODE, key, cfg);\n\t\t\t},\n\n\t\t\t/**\n    * Creates this cipher in decryption mode.\n    *\n    * @param {WordArray} key The key.\n    * @param {Object} cfg (Optional) The configuration options to use for this operation.\n    *\n    * @return {Cipher} A cipher instance.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });\n    */\n\t\t\tcreateDecryptor: function (key, cfg) {\n\t\t\t\treturn this.create(this._DEC_XFORM_MODE, key, cfg);\n\t\t\t},\n\n\t\t\t/**\n    * Initializes a newly created cipher.\n    *\n    * @param {number} xformMode Either the encryption or decryption transormation mode constant.\n    * @param {WordArray} key The key.\n    * @param {Object} cfg (Optional) The configuration options to use for this operation.\n    *\n    * @example\n    *\n    *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });\n    */\n\t\t\tinit: function (xformMode, key, cfg) {\n\t\t\t\t// Apply config defaults\n\t\t\t\tthis.cfg = this.cfg.extend(cfg);\n\n\t\t\t\t// Store transform mode and key\n\t\t\t\tthis._xformMode = xformMode;\n\t\t\t\tthis._key = key;\n\n\t\t\t\t// Set initial values\n\t\t\t\tthis.reset();\n\t\t\t},\n\n\t\t\t/**\n    * Resets this cipher to its initial state.\n    *\n    * @example\n    *\n    *     cipher.reset();\n    */\n\t\t\treset: function () {\n\t\t\t\t// Reset data buffer\n\t\t\t\tBufferedBlockAlgorithm.reset.call(this);\n\n\t\t\t\t// Perform concrete-cipher logic\n\t\t\t\tthis._doReset();\n\t\t\t},\n\n\t\t\t/**\n    * Adds data to be encrypted or decrypted.\n    *\n    * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.\n    *\n    * @return {WordArray} The data after processing.\n    *\n    * @example\n    *\n    *     var encrypted = cipher.process('data');\n    *     var encrypted = cipher.process(wordArray);\n    */\n\t\t\tprocess: function (dataUpdate) {\n\t\t\t\t// Append\n\t\t\t\tthis._append(dataUpdate);\n\n\t\t\t\t// Process available blocks\n\t\t\t\treturn this._process();\n\t\t\t},\n\n\t\t\t/**\n    * Finalizes the encryption or decryption process.\n    * Note that the finalize operation is effectively a destructive, read-once operation.\n    *\n    * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.\n    *\n    * @return {WordArray} The data after final processing.\n    *\n    * @example\n    *\n    *     var encrypted = cipher.finalize();\n    *     var encrypted = cipher.finalize('data');\n    *     var encrypted = cipher.finalize(wordArray);\n    */\n\t\t\tfinalize: function (dataUpdate) {\n\t\t\t\t// Final data update\n\t\t\t\tif (dataUpdate) {\n\t\t\t\t\tthis._append(dataUpdate);\n\t\t\t\t}\n\n\t\t\t\t// Perform concrete-cipher logic\n\t\t\t\tvar finalProcessedData = this._doFinalize();\n\n\t\t\t\treturn finalProcessedData;\n\t\t\t},\n\n\t\t\tkeySize: 128 / 32,\n\n\t\t\tivSize: 128 / 32,\n\n\t\t\t_ENC_XFORM_MODE: 1,\n\n\t\t\t_DEC_XFORM_MODE: 2,\n\n\t\t\t/**\n    * Creates shortcut functions to a cipher's object interface.\n    *\n    * @param {Cipher} cipher The cipher to create a helper for.\n    *\n    * @return {Object} An object with encrypt and decrypt shortcut functions.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);\n    */\n\t\t\t_createHelper: function () {\n\t\t\t\tfunction selectCipherStrategy(key) {\n\t\t\t\t\tif (typeof key == 'string') {\n\t\t\t\t\t\treturn PasswordBasedCipher;\n\t\t\t\t\t} else {\n\t\t\t\t\t\treturn SerializableCipher;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\treturn function (cipher) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tencrypt: function (message, key, cfg) {\n\t\t\t\t\t\t\treturn selectCipherStrategy(key).encrypt(cipher, message, key, cfg);\n\t\t\t\t\t\t},\n\n\t\t\t\t\t\tdecrypt: function (ciphertext, key, cfg) {\n\t\t\t\t\t\t\treturn selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t};\n\t\t\t}()\n\t\t});\n\n\t\t/**\n   * Abstract base stream cipher template.\n   *\n   * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)\n   */\n\t\tvar StreamCipher = C_lib.StreamCipher = Cipher.extend({\n\t\t\t_doFinalize: function () {\n\t\t\t\t// Process partial blocks\n\t\t\t\tvar finalProcessedBlocks = this._process(!!'flush');\n\n\t\t\t\treturn finalProcessedBlocks;\n\t\t\t},\n\n\t\t\tblockSize: 1\n\t\t});\n\n\t\t/**\n   * Mode namespace.\n   */\n\t\tvar C_mode = C.mode = {};\n\n\t\t/**\n   * Abstract base block cipher mode template.\n   */\n\t\tvar BlockCipherMode = C_lib.BlockCipherMode = Base.extend({\n\t\t\t/**\n    * Creates this mode for encryption.\n    *\n    * @param {Cipher} cipher A block cipher instance.\n    * @param {Array} iv The IV words.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);\n    */\n\t\t\tcreateEncryptor: function (cipher, iv) {\n\t\t\t\treturn this.Encryptor.create(cipher, iv);\n\t\t\t},\n\n\t\t\t/**\n    * Creates this mode for decryption.\n    *\n    * @param {Cipher} cipher A block cipher instance.\n    * @param {Array} iv The IV words.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);\n    */\n\t\t\tcreateDecryptor: function (cipher, iv) {\n\t\t\t\treturn this.Decryptor.create(cipher, iv);\n\t\t\t},\n\n\t\t\t/**\n    * Initializes a newly created mode.\n    *\n    * @param {Cipher} cipher A block cipher instance.\n    * @param {Array} iv The IV words.\n    *\n    * @example\n    *\n    *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);\n    */\n\t\t\tinit: function (cipher, iv) {\n\t\t\t\tthis._cipher = cipher;\n\t\t\t\tthis._iv = iv;\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Cipher Block Chaining mode.\n   */\n\t\tvar CBC = C_mode.CBC = function () {\n\t\t\t/**\n    * Abstract base CBC mode.\n    */\n\t\t\tvar CBC = BlockCipherMode.extend();\n\n\t\t\t/**\n    * CBC encryptor.\n    */\n\t\t\tCBC.Encryptor = CBC.extend({\n\t\t\t\t/**\n     * Processes the data block at offset.\n     *\n     * @param {Array} words The data words to operate on.\n     * @param {number} offset The offset where the block starts.\n     *\n     * @example\n     *\n     *     mode.processBlock(data.words, offset);\n     */\n\t\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar cipher = this._cipher;\n\t\t\t\t\tvar blockSize = cipher.blockSize;\n\n\t\t\t\t\t// XOR and encrypt\n\t\t\t\t\txorBlock.call(this, words, offset, blockSize);\n\t\t\t\t\tcipher.encryptBlock(words, offset);\n\n\t\t\t\t\t// Remember this block to use with next block\n\t\t\t\t\tthis._prevBlock = words.slice(offset, offset + blockSize);\n\t\t\t\t}\n\t\t\t});\n\n\t\t\t/**\n    * CBC decryptor.\n    */\n\t\t\tCBC.Decryptor = CBC.extend({\n\t\t\t\t/**\n     * Processes the data block at offset.\n     *\n     * @param {Array} words The data words to operate on.\n     * @param {number} offset The offset where the block starts.\n     *\n     * @example\n     *\n     *     mode.processBlock(data.words, offset);\n     */\n\t\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar cipher = this._cipher;\n\t\t\t\t\tvar blockSize = cipher.blockSize;\n\n\t\t\t\t\t// Remember this block to use with next block\n\t\t\t\t\tvar thisBlock = words.slice(offset, offset + blockSize);\n\n\t\t\t\t\t// Decrypt and XOR\n\t\t\t\t\tcipher.decryptBlock(words, offset);\n\t\t\t\t\txorBlock.call(this, words, offset, blockSize);\n\n\t\t\t\t\t// This block becomes the previous block\n\t\t\t\t\tthis._prevBlock = thisBlock;\n\t\t\t\t}\n\t\t\t});\n\n\t\t\tfunction xorBlock(words, offset, blockSize) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar iv = this._iv;\n\n\t\t\t\t// Choose mixing block\n\t\t\t\tif (iv) {\n\t\t\t\t\tvar block = iv;\n\n\t\t\t\t\t// Remove IV for subsequent blocks\n\t\t\t\t\tthis._iv = undefined;\n\t\t\t\t} else {\n\t\t\t\t\tvar block = this._prevBlock;\n\t\t\t\t}\n\n\t\t\t\t// XOR blocks\n\t\t\t\tfor (var i = 0; i < blockSize; i++) {\n\t\t\t\t\twords[offset + i] ^= block[i];\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn CBC;\n\t\t}();\n\n\t\t/**\n   * Padding namespace.\n   */\n\t\tvar C_pad = C.pad = {};\n\n\t\t/**\n   * PKCS #5/7 padding strategy.\n   */\n\t\tvar Pkcs7 = C_pad.Pkcs7 = {\n\t\t\t/**\n    * Pads data using the algorithm defined in PKCS #5/7.\n    *\n    * @param {WordArray} data The data to pad.\n    * @param {number} blockSize The multiple that the data should be padded to.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);\n    */\n\t\t\tpad: function (data, blockSize) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar blockSizeBytes = blockSize * 4;\n\n\t\t\t\t// Count padding bytes\n\t\t\t\tvar nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;\n\n\t\t\t\t// Create padding word\n\t\t\t\tvar paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes;\n\n\t\t\t\t// Create padding\n\t\t\t\tvar paddingWords = [];\n\t\t\t\tfor (var i = 0; i < nPaddingBytes; i += 4) {\n\t\t\t\t\tpaddingWords.push(paddingWord);\n\t\t\t\t}\n\t\t\t\tvar padding = WordArray.create(paddingWords, nPaddingBytes);\n\n\t\t\t\t// Add padding\n\t\t\t\tdata.concat(padding);\n\t\t\t},\n\n\t\t\t/**\n    * Unpads data that had been padded using the algorithm defined in PKCS #5/7.\n    *\n    * @param {WordArray} data The data to unpad.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     CryptoJS.pad.Pkcs7.unpad(wordArray);\n    */\n\t\t\tunpad: function (data) {\n\t\t\t\t// Get number of padding bytes from last byte\n\t\t\t\tvar nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff;\n\n\t\t\t\t// Remove padding\n\t\t\t\tdata.sigBytes -= nPaddingBytes;\n\t\t\t}\n\t\t};\n\n\t\t/**\n   * Abstract base block cipher template.\n   *\n   * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)\n   */\n\t\tvar BlockCipher = C_lib.BlockCipher = Cipher.extend({\n\t\t\t/**\n    * Configuration options.\n    *\n    * @property {Mode} mode The block mode to use. Default: CBC\n    * @property {Padding} padding The padding strategy to use. Default: Pkcs7\n    */\n\t\t\tcfg: Cipher.cfg.extend({\n\t\t\t\tmode: CBC,\n\t\t\t\tpadding: Pkcs7\n\t\t\t}),\n\n\t\t\treset: function () {\n\t\t\t\t// Reset cipher\n\t\t\t\tCipher.reset.call(this);\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar cfg = this.cfg;\n\t\t\t\tvar iv = cfg.iv;\n\t\t\t\tvar mode = cfg.mode;\n\n\t\t\t\t// Reset block mode\n\t\t\t\tif (this._xformMode == this._ENC_XFORM_MODE) {\n\t\t\t\t\tvar modeCreator = mode.createEncryptor;\n\t\t\t\t} else /* if (this._xformMode == this._DEC_XFORM_MODE) */{\n\t\t\t\t\t\tvar modeCreator = mode.createDecryptor;\n\t\t\t\t\t\t// Keep at least one block in the buffer for unpadding\n\t\t\t\t\t\tthis._minBufferSize = 1;\n\t\t\t\t\t}\n\n\t\t\t\tif (this._mode && this._mode.__creator == modeCreator) {\n\t\t\t\t\tthis._mode.init(this, iv && iv.words);\n\t\t\t\t} else {\n\t\t\t\t\tthis._mode = modeCreator.call(mode, this, iv && iv.words);\n\t\t\t\t\tthis._mode.__creator = modeCreator;\n\t\t\t\t}\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (words, offset) {\n\t\t\t\tthis._mode.processBlock(words, offset);\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\t// Shortcut\n\t\t\t\tvar padding = this.cfg.padding;\n\n\t\t\t\t// Finalize\n\t\t\t\tif (this._xformMode == this._ENC_XFORM_MODE) {\n\t\t\t\t\t// Pad data\n\t\t\t\t\tpadding.pad(this._data, this.blockSize);\n\n\t\t\t\t\t// Process final blocks\n\t\t\t\t\tvar finalProcessedBlocks = this._process(!!'flush');\n\t\t\t\t} else /* if (this._xformMode == this._DEC_XFORM_MODE) */{\n\t\t\t\t\t\t// Process final blocks\n\t\t\t\t\t\tvar finalProcessedBlocks = this._process(!!'flush');\n\n\t\t\t\t\t\t// Unpad data\n\t\t\t\t\t\tpadding.unpad(finalProcessedBlocks);\n\t\t\t\t\t}\n\n\t\t\t\treturn finalProcessedBlocks;\n\t\t\t},\n\n\t\t\tblockSize: 128 / 32\n\t\t});\n\n\t\t/**\n   * A collection of cipher parameters.\n   *\n   * @property {WordArray} ciphertext The raw ciphertext.\n   * @property {WordArray} key The key to this ciphertext.\n   * @property {WordArray} iv The IV used in the ciphering operation.\n   * @property {WordArray} salt The salt used with a key derivation function.\n   * @property {Cipher} algorithm The cipher algorithm.\n   * @property {Mode} mode The block mode used in the ciphering operation.\n   * @property {Padding} padding The padding scheme used in the ciphering operation.\n   * @property {number} blockSize The block size of the cipher.\n   * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.\n   */\n\t\tvar CipherParams = C_lib.CipherParams = Base.extend({\n\t\t\t/**\n    * Initializes a newly created cipher params object.\n    *\n    * @param {Object} cipherParams An object with any of the possible cipher parameters.\n    *\n    * @example\n    *\n    *     var cipherParams = CryptoJS.lib.CipherParams.create({\n    *         ciphertext: ciphertextWordArray,\n    *         key: keyWordArray,\n    *         iv: ivWordArray,\n    *         salt: saltWordArray,\n    *         algorithm: CryptoJS.algo.AES,\n    *         mode: CryptoJS.mode.CBC,\n    *         padding: CryptoJS.pad.PKCS7,\n    *         blockSize: 4,\n    *         formatter: CryptoJS.format.OpenSSL\n    *     });\n    */\n\t\t\tinit: function (cipherParams) {\n\t\t\t\tthis.mixIn(cipherParams);\n\t\t\t},\n\n\t\t\t/**\n    * Converts this cipher params object to a string.\n    *\n    * @param {Format} formatter (Optional) The formatting strategy to use.\n    *\n    * @return {string} The stringified cipher params.\n    *\n    * @throws Error If neither the formatter nor the default formatter is set.\n    *\n    * @example\n    *\n    *     var string = cipherParams + '';\n    *     var string = cipherParams.toString();\n    *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);\n    */\n\t\t\ttoString: function (formatter) {\n\t\t\t\treturn (formatter || this.formatter).stringify(this);\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Format namespace.\n   */\n\t\tvar C_format = C.format = {};\n\n\t\t/**\n   * OpenSSL formatting strategy.\n   */\n\t\tvar OpenSSLFormatter = C_format.OpenSSL = {\n\t\t\t/**\n    * Converts a cipher params object to an OpenSSL-compatible string.\n    *\n    * @param {CipherParams} cipherParams The cipher params object.\n    *\n    * @return {string} The OpenSSL-compatible string.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);\n    */\n\t\t\tstringify: function (cipherParams) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar ciphertext = cipherParams.ciphertext;\n\t\t\t\tvar salt = cipherParams.salt;\n\n\t\t\t\t// Format\n\t\t\t\tif (salt) {\n\t\t\t\t\tvar wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);\n\t\t\t\t} else {\n\t\t\t\t\tvar wordArray = ciphertext;\n\t\t\t\t}\n\n\t\t\t\treturn wordArray.toString(Base64);\n\t\t\t},\n\n\t\t\t/**\n    * Converts an OpenSSL-compatible string to a cipher params object.\n    *\n    * @param {string} openSSLStr The OpenSSL-compatible string.\n    *\n    * @return {CipherParams} The cipher params object.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);\n    */\n\t\t\tparse: function (openSSLStr) {\n\t\t\t\t// Parse base64\n\t\t\t\tvar ciphertext = Base64.parse(openSSLStr);\n\n\t\t\t\t// Shortcut\n\t\t\t\tvar ciphertextWords = ciphertext.words;\n\n\t\t\t\t// Test for salt\n\t\t\t\tif (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {\n\t\t\t\t\t// Extract salt\n\t\t\t\t\tvar salt = WordArray.create(ciphertextWords.slice(2, 4));\n\n\t\t\t\t\t// Remove salt from ciphertext\n\t\t\t\t\tciphertextWords.splice(0, 4);\n\t\t\t\t\tciphertext.sigBytes -= 16;\n\t\t\t\t}\n\n\t\t\t\treturn CipherParams.create({ ciphertext: ciphertext, salt: salt });\n\t\t\t}\n\t\t};\n\n\t\t/**\n   * A cipher wrapper that returns ciphertext as a serializable cipher params object.\n   */\n\t\tvar SerializableCipher = C_lib.SerializableCipher = Base.extend({\n\t\t\t/**\n    * Configuration options.\n    *\n    * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL\n    */\n\t\t\tcfg: Base.extend({\n\t\t\t\tformat: OpenSSLFormatter\n\t\t\t}),\n\n\t\t\t/**\n    * Encrypts a message.\n    *\n    * @param {Cipher} cipher The cipher algorithm to use.\n    * @param {WordArray|string} message The message to encrypt.\n    * @param {WordArray} key The key.\n    * @param {Object} cfg (Optional) The configuration options to use for this operation.\n    *\n    * @return {CipherParams} A cipher params object.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);\n    *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });\n    *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });\n    */\n\t\t\tencrypt: function (cipher, message, key, cfg) {\n\t\t\t\t// Apply config defaults\n\t\t\t\tcfg = this.cfg.extend(cfg);\n\n\t\t\t\t// Encrypt\n\t\t\t\tvar encryptor = cipher.createEncryptor(key, cfg);\n\t\t\t\tvar ciphertext = encryptor.finalize(message);\n\n\t\t\t\t// Shortcut\n\t\t\t\tvar cipherCfg = encryptor.cfg;\n\n\t\t\t\t// Create and return serializable cipher params\n\t\t\t\treturn CipherParams.create({\n\t\t\t\t\tciphertext: ciphertext,\n\t\t\t\t\tkey: key,\n\t\t\t\t\tiv: cipherCfg.iv,\n\t\t\t\t\talgorithm: cipher,\n\t\t\t\t\tmode: cipherCfg.mode,\n\t\t\t\t\tpadding: cipherCfg.padding,\n\t\t\t\t\tblockSize: cipher.blockSize,\n\t\t\t\t\tformatter: cfg.format\n\t\t\t\t});\n\t\t\t},\n\n\t\t\t/**\n    * Decrypts serialized ciphertext.\n    *\n    * @param {Cipher} cipher The cipher algorithm to use.\n    * @param {CipherParams|string} ciphertext The ciphertext to decrypt.\n    * @param {WordArray} key The key.\n    * @param {Object} cfg (Optional) The configuration options to use for this operation.\n    *\n    * @return {WordArray} The plaintext.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });\n    *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });\n    */\n\t\t\tdecrypt: function (cipher, ciphertext, key, cfg) {\n\t\t\t\t// Apply config defaults\n\t\t\t\tcfg = this.cfg.extend(cfg);\n\n\t\t\t\t// Convert string to CipherParams\n\t\t\t\tciphertext = this._parse(ciphertext, cfg.format);\n\n\t\t\t\t// Decrypt\n\t\t\t\tvar plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);\n\n\t\t\t\treturn plaintext;\n\t\t\t},\n\n\t\t\t/**\n    * Converts serialized ciphertext to CipherParams,\n    * else assumed CipherParams already and returns ciphertext unchanged.\n    *\n    * @param {CipherParams|string} ciphertext The ciphertext.\n    * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.\n    *\n    * @return {CipherParams} The unserialized ciphertext.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);\n    */\n\t\t\t_parse: function (ciphertext, format) {\n\t\t\t\tif (typeof ciphertext == 'string') {\n\t\t\t\t\treturn format.parse(ciphertext, this);\n\t\t\t\t} else {\n\t\t\t\t\treturn ciphertext;\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Key derivation function namespace.\n   */\n\t\tvar C_kdf = C.kdf = {};\n\n\t\t/**\n   * OpenSSL key derivation function.\n   */\n\t\tvar OpenSSLKdf = C_kdf.OpenSSL = {\n\t\t\t/**\n    * Derives a key and IV from a password.\n    *\n    * @param {string} password The password to derive from.\n    * @param {number} keySize The size in words of the key to generate.\n    * @param {number} ivSize The size in words of the IV to generate.\n    * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.\n    *\n    * @return {CipherParams} A cipher params object with the key, IV, and salt.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);\n    *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');\n    */\n\t\t\texecute: function (password, keySize, ivSize, salt) {\n\t\t\t\t// Generate random salt\n\t\t\t\tif (!salt) {\n\t\t\t\t\tsalt = WordArray.random(64 / 8);\n\t\t\t\t}\n\n\t\t\t\t// Derive key and IV\n\t\t\t\tvar key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);\n\n\t\t\t\t// Separate key and IV\n\t\t\t\tvar iv = WordArray.create(key.words.slice(keySize), ivSize * 4);\n\t\t\t\tkey.sigBytes = keySize * 4;\n\n\t\t\t\t// Return params\n\t\t\t\treturn CipherParams.create({ key: key, iv: iv, salt: salt });\n\t\t\t}\n\t\t};\n\n\t\t/**\n   * A serializable cipher wrapper that derives the key from a password,\n   * and returns ciphertext as a serializable cipher params object.\n   */\n\t\tvar PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({\n\t\t\t/**\n    * Configuration options.\n    *\n    * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL\n    */\n\t\t\tcfg: SerializableCipher.cfg.extend({\n\t\t\t\tkdf: OpenSSLKdf\n\t\t\t}),\n\n\t\t\t/**\n    * Encrypts a message using a password.\n    *\n    * @param {Cipher} cipher The cipher algorithm to use.\n    * @param {WordArray|string} message The message to encrypt.\n    * @param {string} password The password.\n    * @param {Object} cfg (Optional) The configuration options to use for this operation.\n    *\n    * @return {CipherParams} A cipher params object.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');\n    *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });\n    */\n\t\t\tencrypt: function (cipher, message, password, cfg) {\n\t\t\t\t// Apply config defaults\n\t\t\t\tcfg = this.cfg.extend(cfg);\n\n\t\t\t\t// Derive key and other params\n\t\t\t\tvar derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);\n\n\t\t\t\t// Add IV to config\n\t\t\t\tcfg.iv = derivedParams.iv;\n\n\t\t\t\t// Encrypt\n\t\t\t\tvar ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);\n\n\t\t\t\t// Mix in derived params\n\t\t\t\tciphertext.mixIn(derivedParams);\n\n\t\t\t\treturn ciphertext;\n\t\t\t},\n\n\t\t\t/**\n    * Decrypts serialized ciphertext using a password.\n    *\n    * @param {Cipher} cipher The cipher algorithm to use.\n    * @param {CipherParams|string} ciphertext The ciphertext to decrypt.\n    * @param {string} password The password.\n    * @param {Object} cfg (Optional) The configuration options to use for this operation.\n    *\n    * @return {WordArray} The plaintext.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });\n    *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });\n    */\n\t\t\tdecrypt: function (cipher, ciphertext, password, cfg) {\n\t\t\t\t// Apply config defaults\n\t\t\t\tcfg = this.cfg.extend(cfg);\n\n\t\t\t\t// Convert string to CipherParams\n\t\t\t\tciphertext = this._parse(ciphertext, cfg.format);\n\n\t\t\t\t// Derive key and other params\n\t\t\t\tvar derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);\n\n\t\t\t\t// Add IV to config\n\t\t\t\tcfg.iv = derivedParams.iv;\n\n\t\t\t\t// Decrypt\n\t\t\t\tvar plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);\n\n\t\t\t\treturn plaintext;\n\t\t\t}\n\t\t});\n\t}();\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/cipher-core.js?"
                );
              },
            './node_modules/crypto-js/core.js':
              /*!****************************************!*\
        !*** ./node_modules/crypto-js/core.js ***!
        \****************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory();\n\t} else {}\n})(this, function () {\n\n\t/**\n  * CryptoJS core components.\n  */\n\tvar CryptoJS = CryptoJS || function (Math, undefined) {\n\t\t/*\n   * Local polyfil of Object.create\n   */\n\t\tvar create = Object.create || function () {\n\t\t\tfunction F() {};\n\n\t\t\treturn function (obj) {\n\t\t\t\tvar subtype;\n\n\t\t\t\tF.prototype = obj;\n\n\t\t\t\tsubtype = new F();\n\n\t\t\t\tF.prototype = null;\n\n\t\t\t\treturn subtype;\n\t\t\t};\n\t\t}();\n\n\t\t/**\n   * CryptoJS namespace.\n   */\n\t\tvar C = {};\n\n\t\t/**\n   * Library namespace.\n   */\n\t\tvar C_lib = C.lib = {};\n\n\t\t/**\n   * Base object for prototypal inheritance.\n   */\n\t\tvar Base = C_lib.Base = function () {\n\n\t\t\treturn {\n\t\t\t\t/**\n     * Creates a new object that inherits from this object.\n     *\n     * @param {Object} overrides Properties to copy into the new object.\n     *\n     * @return {Object} The new object.\n     *\n     * @static\n     *\n     * @example\n     *\n     *     var MyType = CryptoJS.lib.Base.extend({\n     *         field: 'value',\n     *\n     *         method: function () {\n     *         }\n     *     });\n     */\n\t\t\t\textend: function (overrides) {\n\t\t\t\t\t// Spawn\n\t\t\t\t\tvar subtype = create(this);\n\n\t\t\t\t\t// Augment\n\t\t\t\t\tif (overrides) {\n\t\t\t\t\t\tsubtype.mixIn(overrides);\n\t\t\t\t\t}\n\n\t\t\t\t\t// Create default initializer\n\t\t\t\t\tif (!subtype.hasOwnProperty('init') || this.init === subtype.init) {\n\t\t\t\t\t\tsubtype.init = function () {\n\t\t\t\t\t\t\tsubtype.$super.init.apply(this, arguments);\n\t\t\t\t\t\t};\n\t\t\t\t\t}\n\n\t\t\t\t\t// Initializer's prototype is the subtype object\n\t\t\t\t\tsubtype.init.prototype = subtype;\n\n\t\t\t\t\t// Reference supertype\n\t\t\t\t\tsubtype.$super = this;\n\n\t\t\t\t\treturn subtype;\n\t\t\t\t},\n\n\t\t\t\t/**\n     * Extends this object and runs the init method.\n     * Arguments to create() will be passed to init().\n     *\n     * @return {Object} The new object.\n     *\n     * @static\n     *\n     * @example\n     *\n     *     var instance = MyType.create();\n     */\n\t\t\t\tcreate: function () {\n\t\t\t\t\tvar instance = this.extend();\n\t\t\t\t\tinstance.init.apply(instance, arguments);\n\n\t\t\t\t\treturn instance;\n\t\t\t\t},\n\n\t\t\t\t/**\n     * Initializes a newly created object.\n     * Override this method to add some logic when your objects are created.\n     *\n     * @example\n     *\n     *     var MyType = CryptoJS.lib.Base.extend({\n     *         init: function () {\n     *             // ...\n     *         }\n     *     });\n     */\n\t\t\t\tinit: function () {},\n\n\t\t\t\t/**\n     * Copies properties into this object.\n     *\n     * @param {Object} properties The properties to mix in.\n     *\n     * @example\n     *\n     *     MyType.mixIn({\n     *         field: 'value'\n     *     });\n     */\n\t\t\t\tmixIn: function (properties) {\n\t\t\t\t\tfor (var propertyName in properties) {\n\t\t\t\t\t\tif (properties.hasOwnProperty(propertyName)) {\n\t\t\t\t\t\t\tthis[propertyName] = properties[propertyName];\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// IE won't copy toString using the loop above\n\t\t\t\t\tif (properties.hasOwnProperty('toString')) {\n\t\t\t\t\t\tthis.toString = properties.toString;\n\t\t\t\t\t}\n\t\t\t\t},\n\n\t\t\t\t/**\n     * Creates a copy of this object.\n     *\n     * @return {Object} The clone.\n     *\n     * @example\n     *\n     *     var clone = instance.clone();\n     */\n\t\t\t\tclone: function () {\n\t\t\t\t\treturn this.init.prototype.extend(this);\n\t\t\t\t}\n\t\t\t};\n\t\t}();\n\n\t\t/**\n   * An array of 32-bit words.\n   *\n   * @property {Array} words The array of 32-bit words.\n   * @property {number} sigBytes The number of significant bytes in this word array.\n   */\n\t\tvar WordArray = C_lib.WordArray = Base.extend({\n\t\t\t/**\n    * Initializes a newly created word array.\n    *\n    * @param {Array} words (Optional) An array of 32-bit words.\n    * @param {number} sigBytes (Optional) The number of significant bytes in the words.\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.lib.WordArray.create();\n    *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);\n    *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);\n    */\n\t\t\tinit: function (words, sigBytes) {\n\t\t\t\twords = this.words = words || [];\n\n\t\t\t\tif (sigBytes != undefined) {\n\t\t\t\t\tthis.sigBytes = sigBytes;\n\t\t\t\t} else {\n\t\t\t\t\tthis.sigBytes = words.length * 4;\n\t\t\t\t}\n\t\t\t},\n\n\t\t\t/**\n    * Converts this word array to a string.\n    *\n    * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex\n    *\n    * @return {string} The stringified word array.\n    *\n    * @example\n    *\n    *     var string = wordArray + '';\n    *     var string = wordArray.toString();\n    *     var string = wordArray.toString(CryptoJS.enc.Utf8);\n    */\n\t\t\ttoString: function (encoder) {\n\t\t\t\treturn (encoder || Hex).stringify(this);\n\t\t\t},\n\n\t\t\t/**\n    * Concatenates a word array to this word array.\n    *\n    * @param {WordArray} wordArray The word array to append.\n    *\n    * @return {WordArray} This word array.\n    *\n    * @example\n    *\n    *     wordArray1.concat(wordArray2);\n    */\n\t\t\tconcat: function (wordArray) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar thisWords = this.words;\n\t\t\t\tvar thatWords = wordArray.words;\n\t\t\t\tvar thisSigBytes = this.sigBytes;\n\t\t\t\tvar thatSigBytes = wordArray.sigBytes;\n\n\t\t\t\t// Clamp excess bits\n\t\t\t\tthis.clamp();\n\n\t\t\t\t// Concat\n\t\t\t\tif (thisSigBytes % 4) {\n\t\t\t\t\t// Copy one byte at a time\n\t\t\t\t\tfor (var i = 0; i < thatSigBytes; i++) {\n\t\t\t\t\t\tvar thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;\n\t\t\t\t\t\tthisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\t// Copy one word at a time\n\t\t\t\t\tfor (var i = 0; i < thatSigBytes; i += 4) {\n\t\t\t\t\t\tthisWords[thisSigBytes + i >>> 2] = thatWords[i >>> 2];\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tthis.sigBytes += thatSigBytes;\n\n\t\t\t\t// Chainable\n\t\t\t\treturn this;\n\t\t\t},\n\n\t\t\t/**\n    * Removes insignificant bits.\n    *\n    * @example\n    *\n    *     wordArray.clamp();\n    */\n\t\t\tclamp: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar words = this.words;\n\t\t\t\tvar sigBytes = this.sigBytes;\n\n\t\t\t\t// Clamp\n\t\t\t\twords[sigBytes >>> 2] &= 0xffffffff << 32 - sigBytes % 4 * 8;\n\t\t\t\twords.length = Math.ceil(sigBytes / 4);\n\t\t\t},\n\n\t\t\t/**\n    * Creates a copy of this word array.\n    *\n    * @return {WordArray} The clone.\n    *\n    * @example\n    *\n    *     var clone = wordArray.clone();\n    */\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Base.clone.call(this);\n\t\t\t\tclone.words = this.words.slice(0);\n\n\t\t\t\treturn clone;\n\t\t\t},\n\n\t\t\t/**\n    * Creates a word array filled with random bytes.\n    *\n    * @param {number} nBytes The number of random bytes to generate.\n    *\n    * @return {WordArray} The random word array.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.lib.WordArray.random(16);\n    */\n\t\t\trandom: function (nBytes) {\n\t\t\t\tvar words = [];\n\n\t\t\t\tvar r = function (m_w) {\n\t\t\t\t\tvar m_w = m_w;\n\t\t\t\t\tvar m_z = 0x3ade68b1;\n\t\t\t\t\tvar mask = 0xffffffff;\n\n\t\t\t\t\treturn function () {\n\t\t\t\t\t\tm_z = 0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10) & mask;\n\t\t\t\t\t\tm_w = 0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10) & mask;\n\t\t\t\t\t\tvar result = (m_z << 0x10) + m_w & mask;\n\t\t\t\t\t\tresult /= 0x100000000;\n\t\t\t\t\t\tresult += 0.5;\n\t\t\t\t\t\treturn result * (Math.random() > .5 ? 1 : -1);\n\t\t\t\t\t};\n\t\t\t\t};\n\n\t\t\t\tfor (var i = 0, rcache; i < nBytes; i += 4) {\n\t\t\t\t\tvar _r = r((rcache || Math.random()) * 0x100000000);\n\n\t\t\t\t\trcache = _r() * 0x3ade67b7;\n\t\t\t\t\twords.push(_r() * 0x100000000 | 0);\n\t\t\t\t}\n\n\t\t\t\treturn new WordArray.init(words, nBytes);\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Encoder namespace.\n   */\n\t\tvar C_enc = C.enc = {};\n\n\t\t/**\n   * Hex encoding strategy.\n   */\n\t\tvar Hex = C_enc.Hex = {\n\t\t\t/**\n    * Converts a word array to a hex string.\n    *\n    * @param {WordArray} wordArray The word array.\n    *\n    * @return {string} The hex string.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);\n    */\n\t\t\tstringify: function (wordArray) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar words = wordArray.words;\n\t\t\t\tvar sigBytes = wordArray.sigBytes;\n\n\t\t\t\t// Convert\n\t\t\t\tvar hexChars = [];\n\t\t\t\tfor (var i = 0; i < sigBytes; i++) {\n\t\t\t\t\tvar bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;\n\t\t\t\t\thexChars.push((bite >>> 4).toString(16));\n\t\t\t\t\thexChars.push((bite & 0x0f).toString(16));\n\t\t\t\t}\n\n\t\t\t\treturn hexChars.join('');\n\t\t\t},\n\n\t\t\t/**\n    * Converts a hex string to a word array.\n    *\n    * @param {string} hexStr The hex string.\n    *\n    * @return {WordArray} The word array.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.enc.Hex.parse(hexString);\n    */\n\t\t\tparse: function (hexStr) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar hexStrLength = hexStr.length;\n\n\t\t\t\t// Convert\n\t\t\t\tvar words = [];\n\t\t\t\tfor (var i = 0; i < hexStrLength; i += 2) {\n\t\t\t\t\twords[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;\n\t\t\t\t}\n\n\t\t\t\treturn new WordArray.init(words, hexStrLength / 2);\n\t\t\t}\n\t\t};\n\n\t\t/**\n   * Latin1 encoding strategy.\n   */\n\t\tvar Latin1 = C_enc.Latin1 = {\n\t\t\t/**\n    * Converts a word array to a Latin1 string.\n    *\n    * @param {WordArray} wordArray The word array.\n    *\n    * @return {string} The Latin1 string.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);\n    */\n\t\t\tstringify: function (wordArray) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar words = wordArray.words;\n\t\t\t\tvar sigBytes = wordArray.sigBytes;\n\n\t\t\t\t// Convert\n\t\t\t\tvar latin1Chars = [];\n\t\t\t\tfor (var i = 0; i < sigBytes; i++) {\n\t\t\t\t\tvar bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;\n\t\t\t\t\tlatin1Chars.push(String.fromCharCode(bite));\n\t\t\t\t}\n\n\t\t\t\treturn latin1Chars.join('');\n\t\t\t},\n\n\t\t\t/**\n    * Converts a Latin1 string to a word array.\n    *\n    * @param {string} latin1Str The Latin1 string.\n    *\n    * @return {WordArray} The word array.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);\n    */\n\t\t\tparse: function (latin1Str) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar latin1StrLength = latin1Str.length;\n\n\t\t\t\t// Convert\n\t\t\t\tvar words = [];\n\t\t\t\tfor (var i = 0; i < latin1StrLength; i++) {\n\t\t\t\t\twords[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << 24 - i % 4 * 8;\n\t\t\t\t}\n\n\t\t\t\treturn new WordArray.init(words, latin1StrLength);\n\t\t\t}\n\t\t};\n\n\t\t/**\n   * UTF-8 encoding strategy.\n   */\n\t\tvar Utf8 = C_enc.Utf8 = {\n\t\t\t/**\n    * Converts a word array to a UTF-8 string.\n    *\n    * @param {WordArray} wordArray The word array.\n    *\n    * @return {string} The UTF-8 string.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);\n    */\n\t\t\tstringify: function (wordArray) {\n\t\t\t\ttry {\n\t\t\t\t\treturn decodeURIComponent(escape(Latin1.stringify(wordArray)));\n\t\t\t\t} catch (e) {\n\t\t\t\t\tthrow new Error('Malformed UTF-8 data');\n\t\t\t\t}\n\t\t\t},\n\n\t\t\t/**\n    * Converts a UTF-8 string to a word array.\n    *\n    * @param {string} utf8Str The UTF-8 string.\n    *\n    * @return {WordArray} The word array.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);\n    */\n\t\t\tparse: function (utf8Str) {\n\t\t\t\treturn Latin1.parse(unescape(encodeURIComponent(utf8Str)));\n\t\t\t}\n\t\t};\n\n\t\t/**\n   * Abstract buffered block algorithm template.\n   *\n   * The property blockSize must be implemented in a concrete subtype.\n   *\n   * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0\n   */\n\t\tvar BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({\n\t\t\t/**\n    * Resets this block algorithm's data buffer to its initial state.\n    *\n    * @example\n    *\n    *     bufferedBlockAlgorithm.reset();\n    */\n\t\t\treset: function () {\n\t\t\t\t// Initial values\n\t\t\t\tthis._data = new WordArray.init();\n\t\t\t\tthis._nDataBytes = 0;\n\t\t\t},\n\n\t\t\t/**\n    * Adds new data to this block algorithm's buffer.\n    *\n    * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.\n    *\n    * @example\n    *\n    *     bufferedBlockAlgorithm._append('data');\n    *     bufferedBlockAlgorithm._append(wordArray);\n    */\n\t\t\t_append: function (data) {\n\t\t\t\t// Convert string to WordArray, else assume WordArray already\n\t\t\t\tif (typeof data == 'string') {\n\t\t\t\t\tdata = Utf8.parse(data);\n\t\t\t\t}\n\n\t\t\t\t// Append\n\t\t\t\tthis._data.concat(data);\n\t\t\t\tthis._nDataBytes += data.sigBytes;\n\t\t\t},\n\n\t\t\t/**\n    * Processes available data blocks.\n    *\n    * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.\n    *\n    * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.\n    *\n    * @return {WordArray} The processed data.\n    *\n    * @example\n    *\n    *     var processedData = bufferedBlockAlgorithm._process();\n    *     var processedData = bufferedBlockAlgorithm._process(!!'flush');\n    */\n\t\t\t_process: function (doFlush) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar data = this._data;\n\t\t\t\tvar dataWords = data.words;\n\t\t\t\tvar dataSigBytes = data.sigBytes;\n\t\t\t\tvar blockSize = this.blockSize;\n\t\t\t\tvar blockSizeBytes = blockSize * 4;\n\n\t\t\t\t// Count blocks ready\n\t\t\t\tvar nBlocksReady = dataSigBytes / blockSizeBytes;\n\t\t\t\tif (doFlush) {\n\t\t\t\t\t// Round up to include partial blocks\n\t\t\t\t\tnBlocksReady = Math.ceil(nBlocksReady);\n\t\t\t\t} else {\n\t\t\t\t\t// Round down to include only full blocks,\n\t\t\t\t\t// less the number of blocks that must remain in the buffer\n\t\t\t\t\tnBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);\n\t\t\t\t}\n\n\t\t\t\t// Count words ready\n\t\t\t\tvar nWordsReady = nBlocksReady * blockSize;\n\n\t\t\t\t// Count bytes ready\n\t\t\t\tvar nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);\n\n\t\t\t\t// Process blocks\n\t\t\t\tif (nWordsReady) {\n\t\t\t\t\tfor (var offset = 0; offset < nWordsReady; offset += blockSize) {\n\t\t\t\t\t\t// Perform concrete-algorithm logic\n\t\t\t\t\t\tthis._doProcessBlock(dataWords, offset);\n\t\t\t\t\t}\n\n\t\t\t\t\t// Remove processed words\n\t\t\t\t\tvar processedWords = dataWords.splice(0, nWordsReady);\n\t\t\t\t\tdata.sigBytes -= nBytesReady;\n\t\t\t\t}\n\n\t\t\t\t// Return processed words\n\t\t\t\treturn new WordArray.init(processedWords, nBytesReady);\n\t\t\t},\n\n\t\t\t/**\n    * Creates a copy of this object.\n    *\n    * @return {Object} The clone.\n    *\n    * @example\n    *\n    *     var clone = bufferedBlockAlgorithm.clone();\n    */\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Base.clone.call(this);\n\t\t\t\tclone._data = this._data.clone();\n\n\t\t\t\treturn clone;\n\t\t\t},\n\n\t\t\t_minBufferSize: 0\n\t\t});\n\n\t\t/**\n   * Abstract hasher template.\n   *\n   * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)\n   */\n\t\tvar Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({\n\t\t\t/**\n    * Configuration options.\n    */\n\t\t\tcfg: Base.extend(),\n\n\t\t\t/**\n    * Initializes a newly created hasher.\n    *\n    * @param {Object} cfg (Optional) The configuration options to use for this hash computation.\n    *\n    * @example\n    *\n    *     var hasher = CryptoJS.algo.SHA256.create();\n    */\n\t\t\tinit: function (cfg) {\n\t\t\t\t// Apply config defaults\n\t\t\t\tthis.cfg = this.cfg.extend(cfg);\n\n\t\t\t\t// Set initial values\n\t\t\t\tthis.reset();\n\t\t\t},\n\n\t\t\t/**\n    * Resets this hasher to its initial state.\n    *\n    * @example\n    *\n    *     hasher.reset();\n    */\n\t\t\treset: function () {\n\t\t\t\t// Reset data buffer\n\t\t\t\tBufferedBlockAlgorithm.reset.call(this);\n\n\t\t\t\t// Perform concrete-hasher logic\n\t\t\t\tthis._doReset();\n\t\t\t},\n\n\t\t\t/**\n    * Updates this hasher with a message.\n    *\n    * @param {WordArray|string} messageUpdate The message to append.\n    *\n    * @return {Hasher} This hasher.\n    *\n    * @example\n    *\n    *     hasher.update('message');\n    *     hasher.update(wordArray);\n    */\n\t\t\tupdate: function (messageUpdate) {\n\t\t\t\t// Append\n\t\t\t\tthis._append(messageUpdate);\n\n\t\t\t\t// Update the hash\n\t\t\t\tthis._process();\n\n\t\t\t\t// Chainable\n\t\t\t\treturn this;\n\t\t\t},\n\n\t\t\t/**\n    * Finalizes the hash computation.\n    * Note that the finalize operation is effectively a destructive, read-once operation.\n    *\n    * @param {WordArray|string} messageUpdate (Optional) A final message update.\n    *\n    * @return {WordArray} The hash.\n    *\n    * @example\n    *\n    *     var hash = hasher.finalize();\n    *     var hash = hasher.finalize('message');\n    *     var hash = hasher.finalize(wordArray);\n    */\n\t\t\tfinalize: function (messageUpdate) {\n\t\t\t\t// Final message update\n\t\t\t\tif (messageUpdate) {\n\t\t\t\t\tthis._append(messageUpdate);\n\t\t\t\t}\n\n\t\t\t\t// Perform concrete-hasher logic\n\t\t\t\tvar hash = this._doFinalize();\n\n\t\t\t\treturn hash;\n\t\t\t},\n\n\t\t\tblockSize: 512 / 32,\n\n\t\t\t/**\n    * Creates a shortcut function to a hasher's object interface.\n    *\n    * @param {Hasher} hasher The hasher to create a helper for.\n    *\n    * @return {Function} The shortcut function.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);\n    */\n\t\t\t_createHelper: function (hasher) {\n\t\t\t\treturn function (message, cfg) {\n\t\t\t\t\treturn new hasher.init(cfg).finalize(message);\n\t\t\t\t};\n\t\t\t},\n\n\t\t\t/**\n    * Creates a shortcut function to the HMAC's object interface.\n    *\n    * @param {Hasher} hasher The hasher to use in this HMAC helper.\n    *\n    * @return {Function} The shortcut function.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);\n    */\n\t\t\t_createHmacHelper: function (hasher) {\n\t\t\t\treturn function (message, key) {\n\t\t\t\t\treturn new C_algo.HMAC.init(hasher, key).finalize(message);\n\t\t\t\t};\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Algorithm namespace.\n   */\n\t\tvar C_algo = C.algo = {};\n\n\t\treturn C;\n\t}(Math);\n\n\treturn CryptoJS;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/core.js?"
                );
              },
            './node_modules/crypto-js/enc-base64.js':
              /*!**********************************************!*\
        !*** ./node_modules/crypto-js/enc-base64.js ***!
        \**********************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar C_enc = C.enc;\n\n\t\t/**\n   * Base64 encoding strategy.\n   */\n\t\tvar Base64 = C_enc.Base64 = {\n\t\t\t/**\n    * Converts a word array to a Base64 string.\n    *\n    * @param {WordArray} wordArray The word array.\n    *\n    * @return {string} The Base64 string.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);\n    */\n\t\t\tstringify: function (wordArray) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar words = wordArray.words;\n\t\t\t\tvar sigBytes = wordArray.sigBytes;\n\t\t\t\tvar map = this._map;\n\n\t\t\t\t// Clamp excess bits\n\t\t\t\twordArray.clamp();\n\n\t\t\t\t// Convert\n\t\t\t\tvar base64Chars = [];\n\t\t\t\tfor (var i = 0; i < sigBytes; i += 3) {\n\t\t\t\t\tvar byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;\n\t\t\t\t\tvar byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 0xff;\n\t\t\t\t\tvar byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 0xff;\n\n\t\t\t\t\tvar triplet = byte1 << 16 | byte2 << 8 | byte3;\n\n\t\t\t\t\tfor (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {\n\t\t\t\t\t\tbase64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 0x3f));\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Add padding\n\t\t\t\tvar paddingChar = map.charAt(64);\n\t\t\t\tif (paddingChar) {\n\t\t\t\t\twhile (base64Chars.length % 4) {\n\t\t\t\t\t\tbase64Chars.push(paddingChar);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\treturn base64Chars.join('');\n\t\t\t},\n\n\t\t\t/**\n    * Converts a Base64 string to a word array.\n    *\n    * @param {string} base64Str The Base64 string.\n    *\n    * @return {WordArray} The word array.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.enc.Base64.parse(base64String);\n    */\n\t\t\tparse: function (base64Str) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar base64StrLength = base64Str.length;\n\t\t\t\tvar map = this._map;\n\t\t\t\tvar reverseMap = this._reverseMap;\n\n\t\t\t\tif (!reverseMap) {\n\t\t\t\t\treverseMap = this._reverseMap = [];\n\t\t\t\t\tfor (var j = 0; j < map.length; j++) {\n\t\t\t\t\t\treverseMap[map.charCodeAt(j)] = j;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Ignore padding\n\t\t\t\tvar paddingChar = map.charAt(64);\n\t\t\t\tif (paddingChar) {\n\t\t\t\t\tvar paddingIndex = base64Str.indexOf(paddingChar);\n\t\t\t\t\tif (paddingIndex !== -1) {\n\t\t\t\t\t\tbase64StrLength = paddingIndex;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Convert\n\t\t\t\treturn parseLoop(base64Str, base64StrLength, reverseMap);\n\t\t\t},\n\n\t\t\t_map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='\n\t\t};\n\n\t\tfunction parseLoop(base64Str, base64StrLength, reverseMap) {\n\t\t\tvar words = [];\n\t\t\tvar nBytes = 0;\n\t\t\tfor (var i = 0; i < base64StrLength; i++) {\n\t\t\t\tif (i % 4) {\n\t\t\t\t\tvar bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;\n\t\t\t\t\tvar bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;\n\t\t\t\t\twords[nBytes >>> 2] |= (bits1 | bits2) << 24 - nBytes % 4 * 8;\n\t\t\t\t\tnBytes++;\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn WordArray.create(words, nBytes);\n\t\t}\n\t})();\n\n\treturn CryptoJS.enc.Base64;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/enc-base64.js?"
                );
              },
            './node_modules/crypto-js/enc-utf16.js':
              /*!*********************************************!*\
        !*** ./node_modules/crypto-js/enc-utf16.js ***!
        \*********************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar C_enc = C.enc;\n\n\t\t/**\n   * UTF-16 BE encoding strategy.\n   */\n\t\tvar Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {\n\t\t\t/**\n    * Converts a word array to a UTF-16 BE string.\n    *\n    * @param {WordArray} wordArray The word array.\n    *\n    * @return {string} The UTF-16 BE string.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);\n    */\n\t\t\tstringify: function (wordArray) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar words = wordArray.words;\n\t\t\t\tvar sigBytes = wordArray.sigBytes;\n\n\t\t\t\t// Convert\n\t\t\t\tvar utf16Chars = [];\n\t\t\t\tfor (var i = 0; i < sigBytes; i += 2) {\n\t\t\t\t\tvar codePoint = words[i >>> 2] >>> 16 - i % 4 * 8 & 0xffff;\n\t\t\t\t\tutf16Chars.push(String.fromCharCode(codePoint));\n\t\t\t\t}\n\n\t\t\t\treturn utf16Chars.join('');\n\t\t\t},\n\n\t\t\t/**\n    * Converts a UTF-16 BE string to a word array.\n    *\n    * @param {string} utf16Str The UTF-16 BE string.\n    *\n    * @return {WordArray} The word array.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);\n    */\n\t\t\tparse: function (utf16Str) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar utf16StrLength = utf16Str.length;\n\n\t\t\t\t// Convert\n\t\t\t\tvar words = [];\n\t\t\t\tfor (var i = 0; i < utf16StrLength; i++) {\n\t\t\t\t\twords[i >>> 1] |= utf16Str.charCodeAt(i) << 16 - i % 2 * 16;\n\t\t\t\t}\n\n\t\t\t\treturn WordArray.create(words, utf16StrLength * 2);\n\t\t\t}\n\t\t};\n\n\t\t/**\n   * UTF-16 LE encoding strategy.\n   */\n\t\tC_enc.Utf16LE = {\n\t\t\t/**\n    * Converts a word array to a UTF-16 LE string.\n    *\n    * @param {WordArray} wordArray The word array.\n    *\n    * @return {string} The UTF-16 LE string.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);\n    */\n\t\t\tstringify: function (wordArray) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar words = wordArray.words;\n\t\t\t\tvar sigBytes = wordArray.sigBytes;\n\n\t\t\t\t// Convert\n\t\t\t\tvar utf16Chars = [];\n\t\t\t\tfor (var i = 0; i < sigBytes; i += 2) {\n\t\t\t\t\tvar codePoint = swapEndian(words[i >>> 2] >>> 16 - i % 4 * 8 & 0xffff);\n\t\t\t\t\tutf16Chars.push(String.fromCharCode(codePoint));\n\t\t\t\t}\n\n\t\t\t\treturn utf16Chars.join('');\n\t\t\t},\n\n\t\t\t/**\n    * Converts a UTF-16 LE string to a word array.\n    *\n    * @param {string} utf16Str The UTF-16 LE string.\n    *\n    * @return {WordArray} The word array.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);\n    */\n\t\t\tparse: function (utf16Str) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar utf16StrLength = utf16Str.length;\n\n\t\t\t\t// Convert\n\t\t\t\tvar words = [];\n\t\t\t\tfor (var i = 0; i < utf16StrLength; i++) {\n\t\t\t\t\twords[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << 16 - i % 2 * 16);\n\t\t\t\t}\n\n\t\t\t\treturn WordArray.create(words, utf16StrLength * 2);\n\t\t\t}\n\t\t};\n\n\t\tfunction swapEndian(word) {\n\t\t\treturn word << 8 & 0xff00ff00 | word >>> 8 & 0x00ff00ff;\n\t\t}\n\t})();\n\n\treturn CryptoJS.enc.Utf16;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/enc-utf16.js?"
                );
              },
            './node_modules/crypto-js/evpkdf.js':
              /*!******************************************!*\
        !*** ./node_modules/crypto-js/evpkdf.js ***!
        \******************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./sha1 */ "./node_modules/crypto-js/sha1.js"), __webpack_require__(/*! ./hmac */ "./node_modules/crypto-js/hmac.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar Base = C_lib.Base;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar C_algo = C.algo;\n\t\tvar MD5 = C_algo.MD5;\n\n\t\t/**\n   * This key derivation function is meant to conform with EVP_BytesToKey.\n   * www.openssl.org/docs/crypto/EVP_BytesToKey.html\n   */\n\t\tvar EvpKDF = C_algo.EvpKDF = Base.extend({\n\t\t\t/**\n    * Configuration options.\n    *\n    * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)\n    * @property {Hasher} hasher The hash algorithm to use. Default: MD5\n    * @property {number} iterations The number of iterations to perform. Default: 1\n    */\n\t\t\tcfg: Base.extend({\n\t\t\t\tkeySize: 128 / 32,\n\t\t\t\thasher: MD5,\n\t\t\t\titerations: 1\n\t\t\t}),\n\n\t\t\t/**\n    * Initializes a newly created key derivation function.\n    *\n    * @param {Object} cfg (Optional) The configuration options to use for the derivation.\n    *\n    * @example\n    *\n    *     var kdf = CryptoJS.algo.EvpKDF.create();\n    *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });\n    *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });\n    */\n\t\t\tinit: function (cfg) {\n\t\t\t\tthis.cfg = this.cfg.extend(cfg);\n\t\t\t},\n\n\t\t\t/**\n    * Derives a key from a password.\n    *\n    * @param {WordArray|string} password The password.\n    * @param {WordArray|string} salt A salt.\n    *\n    * @return {WordArray} The derived key.\n    *\n    * @example\n    *\n    *     var key = kdf.compute(password, salt);\n    */\n\t\t\tcompute: function (password, salt) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar cfg = this.cfg;\n\n\t\t\t\t// Init hasher\n\t\t\t\tvar hasher = cfg.hasher.create();\n\n\t\t\t\t// Initial values\n\t\t\t\tvar derivedKey = WordArray.create();\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar derivedKeyWords = derivedKey.words;\n\t\t\t\tvar keySize = cfg.keySize;\n\t\t\t\tvar iterations = cfg.iterations;\n\n\t\t\t\t// Generate key\n\t\t\t\twhile (derivedKeyWords.length < keySize) {\n\t\t\t\t\tif (block) {\n\t\t\t\t\t\thasher.update(block);\n\t\t\t\t\t}\n\t\t\t\t\tvar block = hasher.update(password).finalize(salt);\n\t\t\t\t\thasher.reset();\n\n\t\t\t\t\t// Iterations\n\t\t\t\t\tfor (var i = 1; i < iterations; i++) {\n\t\t\t\t\t\tblock = hasher.finalize(block);\n\t\t\t\t\t\thasher.reset();\n\t\t\t\t\t}\n\n\t\t\t\t\tderivedKey.concat(block);\n\t\t\t\t}\n\t\t\t\tderivedKey.sigBytes = keySize * 4;\n\n\t\t\t\treturn derivedKey;\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Derives a key from a password.\n   *\n   * @param {WordArray|string} password The password.\n   * @param {WordArray|string} salt A salt.\n   * @param {Object} cfg (Optional) The configuration options to use for this computation.\n   *\n   * @return {WordArray} The derived key.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var key = CryptoJS.EvpKDF(password, salt);\n   *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });\n   *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });\n   */\n\t\tC.EvpKDF = function (password, salt, cfg) {\n\t\t\treturn EvpKDF.create(cfg).compute(password, salt);\n\t\t};\n\t})();\n\n\treturn CryptoJS.EvpKDF;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/evpkdf.js?'
                );
              },
            './node_modules/crypto-js/format-hex.js':
              /*!**********************************************!*\
        !*** ./node_modules/crypto-js/format-hex.js ***!
        \**********************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function (undefined) {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar CipherParams = C_lib.CipherParams;\n\t\tvar C_enc = C.enc;\n\t\tvar Hex = C_enc.Hex;\n\t\tvar C_format = C.format;\n\n\t\tvar HexFormatter = C_format.Hex = {\n\t\t\t/**\n    * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.\n    *\n    * @param {CipherParams} cipherParams The cipher params object.\n    *\n    * @return {string} The hexadecimally encoded string.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);\n    */\n\t\t\tstringify: function (cipherParams) {\n\t\t\t\treturn cipherParams.ciphertext.toString(Hex);\n\t\t\t},\n\n\t\t\t/**\n    * Converts a hexadecimally encoded ciphertext string to a cipher params object.\n    *\n    * @param {string} input The hexadecimally encoded string.\n    *\n    * @return {CipherParams} The cipher params object.\n    *\n    * @static\n    *\n    * @example\n    *\n    *     var cipherParams = CryptoJS.format.Hex.parse(hexString);\n    */\n\t\t\tparse: function (input) {\n\t\t\t\tvar ciphertext = Hex.parse(input);\n\t\t\t\treturn CipherParams.create({ ciphertext: ciphertext });\n\t\t\t}\n\t\t};\n\t})();\n\n\treturn CryptoJS.format.Hex;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/format-hex.js?'
                );
              },
            './node_modules/crypto-js/hmac.js':
              /*!****************************************!*\
        !*** ./node_modules/crypto-js/hmac.js ***!
        \****************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar Base = C_lib.Base;\n\t\tvar C_enc = C.enc;\n\t\tvar Utf8 = C_enc.Utf8;\n\t\tvar C_algo = C.algo;\n\n\t\t/**\n   * HMAC algorithm.\n   */\n\t\tvar HMAC = C_algo.HMAC = Base.extend({\n\t\t\t/**\n    * Initializes a newly created HMAC.\n    *\n    * @param {Hasher} hasher The hash algorithm to use.\n    * @param {WordArray|string} key The secret key.\n    *\n    * @example\n    *\n    *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);\n    */\n\t\t\tinit: function (hasher, key) {\n\t\t\t\t// Init hasher\n\t\t\t\thasher = this._hasher = new hasher.init();\n\n\t\t\t\t// Convert string to WordArray, else assume WordArray already\n\t\t\t\tif (typeof key == 'string') {\n\t\t\t\t\tkey = Utf8.parse(key);\n\t\t\t\t}\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar hasherBlockSize = hasher.blockSize;\n\t\t\t\tvar hasherBlockSizeBytes = hasherBlockSize * 4;\n\n\t\t\t\t// Allow arbitrary length keys\n\t\t\t\tif (key.sigBytes > hasherBlockSizeBytes) {\n\t\t\t\t\tkey = hasher.finalize(key);\n\t\t\t\t}\n\n\t\t\t\t// Clamp excess bits\n\t\t\t\tkey.clamp();\n\n\t\t\t\t// Clone key for inner and outer pads\n\t\t\t\tvar oKey = this._oKey = key.clone();\n\t\t\t\tvar iKey = this._iKey = key.clone();\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar oKeyWords = oKey.words;\n\t\t\t\tvar iKeyWords = iKey.words;\n\n\t\t\t\t// XOR keys with pad constants\n\t\t\t\tfor (var i = 0; i < hasherBlockSize; i++) {\n\t\t\t\t\toKeyWords[i] ^= 0x5c5c5c5c;\n\t\t\t\t\tiKeyWords[i] ^= 0x36363636;\n\t\t\t\t}\n\t\t\t\toKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;\n\n\t\t\t\t// Set initial values\n\t\t\t\tthis.reset();\n\t\t\t},\n\n\t\t\t/**\n    * Resets this HMAC to its initial state.\n    *\n    * @example\n    *\n    *     hmacHasher.reset();\n    */\n\t\t\treset: function () {\n\t\t\t\t// Shortcut\n\t\t\t\tvar hasher = this._hasher;\n\n\t\t\t\t// Reset\n\t\t\t\thasher.reset();\n\t\t\t\thasher.update(this._iKey);\n\t\t\t},\n\n\t\t\t/**\n    * Updates this HMAC with a message.\n    *\n    * @param {WordArray|string} messageUpdate The message to append.\n    *\n    * @return {HMAC} This HMAC instance.\n    *\n    * @example\n    *\n    *     hmacHasher.update('message');\n    *     hmacHasher.update(wordArray);\n    */\n\t\t\tupdate: function (messageUpdate) {\n\t\t\t\tthis._hasher.update(messageUpdate);\n\n\t\t\t\t// Chainable\n\t\t\t\treturn this;\n\t\t\t},\n\n\t\t\t/**\n    * Finalizes the HMAC computation.\n    * Note that the finalize operation is effectively a destructive, read-once operation.\n    *\n    * @param {WordArray|string} messageUpdate (Optional) A final message update.\n    *\n    * @return {WordArray} The HMAC.\n    *\n    * @example\n    *\n    *     var hmac = hmacHasher.finalize();\n    *     var hmac = hmacHasher.finalize('message');\n    *     var hmac = hmacHasher.finalize(wordArray);\n    */\n\t\t\tfinalize: function (messageUpdate) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar hasher = this._hasher;\n\n\t\t\t\t// Compute HMAC\n\t\t\t\tvar innerHash = hasher.finalize(messageUpdate);\n\t\t\t\thasher.reset();\n\t\t\t\tvar hmac = hasher.finalize(this._oKey.clone().concat(innerHash));\n\n\t\t\t\treturn hmac;\n\t\t\t}\n\t\t});\n\t})();\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/hmac.js?"
                );
              },
            './node_modules/crypto-js/index.js':
              /*!*****************************************!*\
        !*** ./node_modules/crypto-js/index.js ***!
        \*****************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./x64-core */ "./node_modules/crypto-js/x64-core.js"), __webpack_require__(/*! ./lib-typedarrays */ "./node_modules/crypto-js/lib-typedarrays.js"), __webpack_require__(/*! ./enc-utf16 */ "./node_modules/crypto-js/enc-utf16.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./sha1 */ "./node_modules/crypto-js/sha1.js"), __webpack_require__(/*! ./sha256 */ "./node_modules/crypto-js/sha256.js"), __webpack_require__(/*! ./sha224 */ "./node_modules/crypto-js/sha224.js"), __webpack_require__(/*! ./sha512 */ "./node_modules/crypto-js/sha512.js"), __webpack_require__(/*! ./sha384 */ "./node_modules/crypto-js/sha384.js"), __webpack_require__(/*! ./sha3 */ "./node_modules/crypto-js/sha3.js"), __webpack_require__(/*! ./ripemd160 */ "./node_modules/crypto-js/ripemd160.js"), __webpack_require__(/*! ./hmac */ "./node_modules/crypto-js/hmac.js"), __webpack_require__(/*! ./pbkdf2 */ "./node_modules/crypto-js/pbkdf2.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"), __webpack_require__(/*! ./mode-cfb */ "./node_modules/crypto-js/mode-cfb.js"), __webpack_require__(/*! ./mode-ctr */ "./node_modules/crypto-js/mode-ctr.js"), __webpack_require__(/*! ./mode-ctr-gladman */ "./node_modules/crypto-js/mode-ctr-gladman.js"), __webpack_require__(/*! ./mode-ofb */ "./node_modules/crypto-js/mode-ofb.js"), __webpack_require__(/*! ./mode-ecb */ "./node_modules/crypto-js/mode-ecb.js"), __webpack_require__(/*! ./pad-ansix923 */ "./node_modules/crypto-js/pad-ansix923.js"), __webpack_require__(/*! ./pad-iso10126 */ "./node_modules/crypto-js/pad-iso10126.js"), __webpack_require__(/*! ./pad-iso97971 */ "./node_modules/crypto-js/pad-iso97971.js"), __webpack_require__(/*! ./pad-zeropadding */ "./node_modules/crypto-js/pad-zeropadding.js"), __webpack_require__(/*! ./pad-nopadding */ "./node_modules/crypto-js/pad-nopadding.js"), __webpack_require__(/*! ./format-hex */ "./node_modules/crypto-js/format-hex.js"), __webpack_require__(/*! ./aes */ "./node_modules/crypto-js/aes.js"), __webpack_require__(/*! ./tripledes */ "./node_modules/crypto-js/tripledes.js"), __webpack_require__(/*! ./rc4 */ "./node_modules/crypto-js/rc4.js"), __webpack_require__(/*! ./rabbit */ "./node_modules/crypto-js/rabbit.js"), __webpack_require__(/*! ./rabbit-legacy */ "./node_modules/crypto-js/rabbit-legacy.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\treturn CryptoJS;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/index.js?'
                );
              },
            './node_modules/crypto-js/lib-typedarrays.js':
              /*!***************************************************!*\
        !*** ./node_modules/crypto-js/lib-typedarrays.js ***!
        \***************************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Check if typed arrays are supported\n\t\tif (typeof ArrayBuffer != \'function\') {\n\t\t\treturn;\n\t\t}\n\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\n\t\t// Reference original init\n\t\tvar superInit = WordArray.init;\n\n\t\t// Augment WordArray.init to handle typed arrays\n\t\tvar subInit = WordArray.init = function (typedArray) {\n\t\t\t// Convert buffers to uint8\n\t\t\tif (typedArray instanceof ArrayBuffer) {\n\t\t\t\ttypedArray = new Uint8Array(typedArray);\n\t\t\t}\n\n\t\t\t// Convert other array views to uint8\n\t\t\tif (typedArray instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) {\n\t\t\t\ttypedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);\n\t\t\t}\n\n\t\t\t// Handle Uint8Array\n\t\t\tif (typedArray instanceof Uint8Array) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar typedArrayByteLength = typedArray.byteLength;\n\n\t\t\t\t// Extract bytes\n\t\t\t\tvar words = [];\n\t\t\t\tfor (var i = 0; i < typedArrayByteLength; i++) {\n\t\t\t\t\twords[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;\n\t\t\t\t}\n\n\t\t\t\t// Initialize this word array\n\t\t\t\tsuperInit.call(this, words, typedArrayByteLength);\n\t\t\t} else {\n\t\t\t\t// Else call normal init\n\t\t\t\tsuperInit.apply(this, arguments);\n\t\t\t}\n\t\t};\n\n\t\tsubInit.prototype = WordArray;\n\t})();\n\n\treturn CryptoJS.lib.WordArray;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/lib-typedarrays.js?'
                );
              },
            './node_modules/crypto-js/md5.js':
              /*!***************************************!*\
        !*** ./node_modules/crypto-js/md5.js ***!
        \***************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function (Math) {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar Hasher = C_lib.Hasher;\n\t\tvar C_algo = C.algo;\n\n\t\t// Constants table\n\t\tvar T = [];\n\n\t\t// Compute constants\n\t\t(function () {\n\t\t\tfor (var i = 0; i < 64; i++) {\n\t\t\t\tT[i] = Math.abs(Math.sin(i + 1)) * 0x100000000 | 0;\n\t\t\t}\n\t\t})();\n\n\t\t/**\n   * MD5 hash algorithm.\n   */\n\t\tvar MD5 = C_algo.MD5 = Hasher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\tthis._hash = new WordArray.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476]);\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\t\t\t\t// Swap endian\n\t\t\t\tfor (var i = 0; i < 16; i++) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar offset_i = offset + i;\n\t\t\t\t\tvar M_offset_i = M[offset_i];\n\n\t\t\t\t\tM[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff | (M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;\n\t\t\t\t}\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar H = this._hash.words;\n\n\t\t\t\tvar M_offset_0 = M[offset + 0];\n\t\t\t\tvar M_offset_1 = M[offset + 1];\n\t\t\t\tvar M_offset_2 = M[offset + 2];\n\t\t\t\tvar M_offset_3 = M[offset + 3];\n\t\t\t\tvar M_offset_4 = M[offset + 4];\n\t\t\t\tvar M_offset_5 = M[offset + 5];\n\t\t\t\tvar M_offset_6 = M[offset + 6];\n\t\t\t\tvar M_offset_7 = M[offset + 7];\n\t\t\t\tvar M_offset_8 = M[offset + 8];\n\t\t\t\tvar M_offset_9 = M[offset + 9];\n\t\t\t\tvar M_offset_10 = M[offset + 10];\n\t\t\t\tvar M_offset_11 = M[offset + 11];\n\t\t\t\tvar M_offset_12 = M[offset + 12];\n\t\t\t\tvar M_offset_13 = M[offset + 13];\n\t\t\t\tvar M_offset_14 = M[offset + 14];\n\t\t\t\tvar M_offset_15 = M[offset + 15];\n\n\t\t\t\t// Working varialbes\n\t\t\t\tvar a = H[0];\n\t\t\t\tvar b = H[1];\n\t\t\t\tvar c = H[2];\n\t\t\t\tvar d = H[3];\n\n\t\t\t\t// Computation\n\t\t\t\ta = FF(a, b, c, d, M_offset_0, 7, T[0]);\n\t\t\t\td = FF(d, a, b, c, M_offset_1, 12, T[1]);\n\t\t\t\tc = FF(c, d, a, b, M_offset_2, 17, T[2]);\n\t\t\t\tb = FF(b, c, d, a, M_offset_3, 22, T[3]);\n\t\t\t\ta = FF(a, b, c, d, M_offset_4, 7, T[4]);\n\t\t\t\td = FF(d, a, b, c, M_offset_5, 12, T[5]);\n\t\t\t\tc = FF(c, d, a, b, M_offset_6, 17, T[6]);\n\t\t\t\tb = FF(b, c, d, a, M_offset_7, 22, T[7]);\n\t\t\t\ta = FF(a, b, c, d, M_offset_8, 7, T[8]);\n\t\t\t\td = FF(d, a, b, c, M_offset_9, 12, T[9]);\n\t\t\t\tc = FF(c, d, a, b, M_offset_10, 17, T[10]);\n\t\t\t\tb = FF(b, c, d, a, M_offset_11, 22, T[11]);\n\t\t\t\ta = FF(a, b, c, d, M_offset_12, 7, T[12]);\n\t\t\t\td = FF(d, a, b, c, M_offset_13, 12, T[13]);\n\t\t\t\tc = FF(c, d, a, b, M_offset_14, 17, T[14]);\n\t\t\t\tb = FF(b, c, d, a, M_offset_15, 22, T[15]);\n\n\t\t\t\ta = GG(a, b, c, d, M_offset_1, 5, T[16]);\n\t\t\t\td = GG(d, a, b, c, M_offset_6, 9, T[17]);\n\t\t\t\tc = GG(c, d, a, b, M_offset_11, 14, T[18]);\n\t\t\t\tb = GG(b, c, d, a, M_offset_0, 20, T[19]);\n\t\t\t\ta = GG(a, b, c, d, M_offset_5, 5, T[20]);\n\t\t\t\td = GG(d, a, b, c, M_offset_10, 9, T[21]);\n\t\t\t\tc = GG(c, d, a, b, M_offset_15, 14, T[22]);\n\t\t\t\tb = GG(b, c, d, a, M_offset_4, 20, T[23]);\n\t\t\t\ta = GG(a, b, c, d, M_offset_9, 5, T[24]);\n\t\t\t\td = GG(d, a, b, c, M_offset_14, 9, T[25]);\n\t\t\t\tc = GG(c, d, a, b, M_offset_3, 14, T[26]);\n\t\t\t\tb = GG(b, c, d, a, M_offset_8, 20, T[27]);\n\t\t\t\ta = GG(a, b, c, d, M_offset_13, 5, T[28]);\n\t\t\t\td = GG(d, a, b, c, M_offset_2, 9, T[29]);\n\t\t\t\tc = GG(c, d, a, b, M_offset_7, 14, T[30]);\n\t\t\t\tb = GG(b, c, d, a, M_offset_12, 20, T[31]);\n\n\t\t\t\ta = HH(a, b, c, d, M_offset_5, 4, T[32]);\n\t\t\t\td = HH(d, a, b, c, M_offset_8, 11, T[33]);\n\t\t\t\tc = HH(c, d, a, b, M_offset_11, 16, T[34]);\n\t\t\t\tb = HH(b, c, d, a, M_offset_14, 23, T[35]);\n\t\t\t\ta = HH(a, b, c, d, M_offset_1, 4, T[36]);\n\t\t\t\td = HH(d, a, b, c, M_offset_4, 11, T[37]);\n\t\t\t\tc = HH(c, d, a, b, M_offset_7, 16, T[38]);\n\t\t\t\tb = HH(b, c, d, a, M_offset_10, 23, T[39]);\n\t\t\t\ta = HH(a, b, c, d, M_offset_13, 4, T[40]);\n\t\t\t\td = HH(d, a, b, c, M_offset_0, 11, T[41]);\n\t\t\t\tc = HH(c, d, a, b, M_offset_3, 16, T[42]);\n\t\t\t\tb = HH(b, c, d, a, M_offset_6, 23, T[43]);\n\t\t\t\ta = HH(a, b, c, d, M_offset_9, 4, T[44]);\n\t\t\t\td = HH(d, a, b, c, M_offset_12, 11, T[45]);\n\t\t\t\tc = HH(c, d, a, b, M_offset_15, 16, T[46]);\n\t\t\t\tb = HH(b, c, d, a, M_offset_2, 23, T[47]);\n\n\t\t\t\ta = II(a, b, c, d, M_offset_0, 6, T[48]);\n\t\t\t\td = II(d, a, b, c, M_offset_7, 10, T[49]);\n\t\t\t\tc = II(c, d, a, b, M_offset_14, 15, T[50]);\n\t\t\t\tb = II(b, c, d, a, M_offset_5, 21, T[51]);\n\t\t\t\ta = II(a, b, c, d, M_offset_12, 6, T[52]);\n\t\t\t\td = II(d, a, b, c, M_offset_3, 10, T[53]);\n\t\t\t\tc = II(c, d, a, b, M_offset_10, 15, T[54]);\n\t\t\t\tb = II(b, c, d, a, M_offset_1, 21, T[55]);\n\t\t\t\ta = II(a, b, c, d, M_offset_8, 6, T[56]);\n\t\t\t\td = II(d, a, b, c, M_offset_15, 10, T[57]);\n\t\t\t\tc = II(c, d, a, b, M_offset_6, 15, T[58]);\n\t\t\t\tb = II(b, c, d, a, M_offset_13, 21, T[59]);\n\t\t\t\ta = II(a, b, c, d, M_offset_4, 6, T[60]);\n\t\t\t\td = II(d, a, b, c, M_offset_11, 10, T[61]);\n\t\t\t\tc = II(c, d, a, b, M_offset_2, 15, T[62]);\n\t\t\t\tb = II(b, c, d, a, M_offset_9, 21, T[63]);\n\n\t\t\t\t// Intermediate hash value\n\t\t\t\tH[0] = H[0] + a | 0;\n\t\t\t\tH[1] = H[1] + b | 0;\n\t\t\t\tH[2] = H[2] + c | 0;\n\t\t\t\tH[3] = H[3] + d | 0;\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar data = this._data;\n\t\t\t\tvar dataWords = data.words;\n\n\t\t\t\tvar nBitsTotal = this._nDataBytes * 8;\n\t\t\t\tvar nBitsLeft = data.sigBytes * 8;\n\n\t\t\t\t// Add padding\n\t\t\t\tdataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;\n\n\t\t\t\tvar nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);\n\t\t\t\tvar nBitsTotalL = nBitsTotal;\n\t\t\t\tdataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 0x00ff00ff | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 0xff00ff00;\n\t\t\t\tdataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 0x00ff00ff | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 0xff00ff00;\n\n\t\t\t\tdata.sigBytes = (dataWords.length + 1) * 4;\n\n\t\t\t\t// Hash final blocks\n\t\t\t\tthis._process();\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar hash = this._hash;\n\t\t\t\tvar H = hash.words;\n\n\t\t\t\t// Swap endian\n\t\t\t\tfor (var i = 0; i < 4; i++) {\n\t\t\t\t\t// Shortcut\n\t\t\t\t\tvar H_i = H[i];\n\n\t\t\t\t\tH[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff | (H_i << 24 | H_i >>> 8) & 0xff00ff00;\n\t\t\t\t}\n\n\t\t\t\t// Return final computed hash\n\t\t\t\treturn hash;\n\t\t\t},\n\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Hasher.clone.call(this);\n\t\t\t\tclone._hash = this._hash.clone();\n\n\t\t\t\treturn clone;\n\t\t\t}\n\t\t});\n\n\t\tfunction FF(a, b, c, d, x, s, t) {\n\t\t\tvar n = a + (b & c | ~b & d) + x + t;\n\t\t\treturn (n << s | n >>> 32 - s) + b;\n\t\t}\n\n\t\tfunction GG(a, b, c, d, x, s, t) {\n\t\t\tvar n = a + (b & d | c & ~d) + x + t;\n\t\t\treturn (n << s | n >>> 32 - s) + b;\n\t\t}\n\n\t\tfunction HH(a, b, c, d, x, s, t) {\n\t\t\tvar n = a + (b ^ c ^ d) + x + t;\n\t\t\treturn (n << s | n >>> 32 - s) + b;\n\t\t}\n\n\t\tfunction II(a, b, c, d, x, s, t) {\n\t\t\tvar n = a + (c ^ (b | ~d)) + x + t;\n\t\t\treturn (n << s | n >>> 32 - s) + b;\n\t\t}\n\n\t\t/**\n   * Shortcut function to the hasher's object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   *\n   * @return {WordArray} The hash.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hash = CryptoJS.MD5('message');\n   *     var hash = CryptoJS.MD5(wordArray);\n   */\n\t\tC.MD5 = Hasher._createHelper(MD5);\n\n\t\t/**\n   * Shortcut function to the HMAC's object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   * @param {WordArray|string} key The secret key.\n   *\n   * @return {WordArray} The HMAC.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hmac = CryptoJS.HmacMD5(message, key);\n   */\n\t\tC.HmacMD5 = Hasher._createHmacHelper(MD5);\n\t})(Math);\n\n\treturn CryptoJS.MD5;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/md5.js?"
                );
              },
            './node_modules/crypto-js/mode-cfb.js':
              /*!********************************************!*\
        !*** ./node_modules/crypto-js/mode-cfb.js ***!
        \********************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * Cipher Feedback block mode.\n  */\n\tCryptoJS.mode.CFB = function () {\n\t\tvar CFB = CryptoJS.lib.BlockCipherMode.extend();\n\n\t\tCFB.Encryptor = CFB.extend({\n\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar cipher = this._cipher;\n\t\t\t\tvar blockSize = cipher.blockSize;\n\n\t\t\t\tgenerateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);\n\n\t\t\t\t// Remember this block to use with next block\n\t\t\t\tthis._prevBlock = words.slice(offset, offset + blockSize);\n\t\t\t}\n\t\t});\n\n\t\tCFB.Decryptor = CFB.extend({\n\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar cipher = this._cipher;\n\t\t\t\tvar blockSize = cipher.blockSize;\n\n\t\t\t\t// Remember this block to use with next block\n\t\t\t\tvar thisBlock = words.slice(offset, offset + blockSize);\n\n\t\t\t\tgenerateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);\n\n\t\t\t\t// This block becomes the previous block\n\t\t\t\tthis._prevBlock = thisBlock;\n\t\t\t}\n\t\t});\n\n\t\tfunction generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {\n\t\t\t// Shortcut\n\t\t\tvar iv = this._iv;\n\n\t\t\t// Generate keystream\n\t\t\tif (iv) {\n\t\t\t\tvar keystream = iv.slice(0);\n\n\t\t\t\t// Remove IV for subsequent blocks\n\t\t\t\tthis._iv = undefined;\n\t\t\t} else {\n\t\t\t\tvar keystream = this._prevBlock;\n\t\t\t}\n\t\t\tcipher.encryptBlock(keystream, 0);\n\n\t\t\t// Encrypt\n\t\t\tfor (var i = 0; i < blockSize; i++) {\n\t\t\t\twords[offset + i] ^= keystream[i];\n\t\t\t}\n\t\t}\n\n\t\treturn CFB;\n\t}();\n\n\treturn CryptoJS.mode.CFB;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/mode-cfb.js?'
                );
              },
            './node_modules/crypto-js/mode-ctr-gladman.js':
              /*!****************************************************!*\
        !*** ./node_modules/crypto-js/mode-ctr-gladman.js ***!
        \****************************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/** @preserve\n  * Counter block mode compatible with  Dr Brian Gladman fileenc.c\n  * derived from CryptoJS.mode.CTR\n  * Jan Hruby jhruby.web@gmail.com\n  */\n\tCryptoJS.mode.CTRGladman = function () {\n\t\tvar CTRGladman = CryptoJS.lib.BlockCipherMode.extend();\n\n\t\tfunction incWord(word) {\n\t\t\tif ((word >> 24 & 0xff) === 0xff) {\n\t\t\t\t//overflow\n\t\t\t\tvar b1 = word >> 16 & 0xff;\n\t\t\t\tvar b2 = word >> 8 & 0xff;\n\t\t\t\tvar b3 = word & 0xff;\n\n\t\t\t\tif (b1 === 0xff) // overflow b1\n\t\t\t\t\t{\n\t\t\t\t\t\tb1 = 0;\n\t\t\t\t\t\tif (b2 === 0xff) {\n\t\t\t\t\t\t\tb2 = 0;\n\t\t\t\t\t\t\tif (b3 === 0xff) {\n\t\t\t\t\t\t\t\tb3 = 0;\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t++b3;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t++b2;\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t++b1;\n\t\t\t\t}\n\n\t\t\t\tword = 0;\n\t\t\t\tword += b1 << 16;\n\t\t\t\tword += b2 << 8;\n\t\t\t\tword += b3;\n\t\t\t} else {\n\t\t\t\tword += 0x01 << 24;\n\t\t\t}\n\t\t\treturn word;\n\t\t}\n\n\t\tfunction incCounter(counter) {\n\t\t\tif ((counter[0] = incWord(counter[0])) === 0) {\n\t\t\t\t// encr_data in fileenc.c from  Dr Brian Gladman\'s counts only with DWORD j < 8\n\t\t\t\tcounter[1] = incWord(counter[1]);\n\t\t\t}\n\t\t\treturn counter;\n\t\t}\n\n\t\tvar Encryptor = CTRGladman.Encryptor = CTRGladman.extend({\n\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar cipher = this._cipher;\n\t\t\t\tvar blockSize = cipher.blockSize;\n\t\t\t\tvar iv = this._iv;\n\t\t\t\tvar counter = this._counter;\n\n\t\t\t\t// Generate keystream\n\t\t\t\tif (iv) {\n\t\t\t\t\tcounter = this._counter = iv.slice(0);\n\n\t\t\t\t\t// Remove IV for subsequent blocks\n\t\t\t\t\tthis._iv = undefined;\n\t\t\t\t}\n\n\t\t\t\tincCounter(counter);\n\n\t\t\t\tvar keystream = counter.slice(0);\n\t\t\t\tcipher.encryptBlock(keystream, 0);\n\n\t\t\t\t// Encrypt\n\t\t\t\tfor (var i = 0; i < blockSize; i++) {\n\t\t\t\t\twords[offset + i] ^= keystream[i];\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\n\t\tCTRGladman.Decryptor = Encryptor;\n\n\t\treturn CTRGladman;\n\t}();\n\n\treturn CryptoJS.mode.CTRGladman;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/mode-ctr-gladman.js?'
                );
              },
            './node_modules/crypto-js/mode-ctr.js':
              /*!********************************************!*\
        !*** ./node_modules/crypto-js/mode-ctr.js ***!
        \********************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * Counter block mode.\n  */\n\tCryptoJS.mode.CTR = function () {\n\t\tvar CTR = CryptoJS.lib.BlockCipherMode.extend();\n\n\t\tvar Encryptor = CTR.Encryptor = CTR.extend({\n\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar cipher = this._cipher;\n\t\t\t\tvar blockSize = cipher.blockSize;\n\t\t\t\tvar iv = this._iv;\n\t\t\t\tvar counter = this._counter;\n\n\t\t\t\t// Generate keystream\n\t\t\t\tif (iv) {\n\t\t\t\t\tcounter = this._counter = iv.slice(0);\n\n\t\t\t\t\t// Remove IV for subsequent blocks\n\t\t\t\t\tthis._iv = undefined;\n\t\t\t\t}\n\t\t\t\tvar keystream = counter.slice(0);\n\t\t\t\tcipher.encryptBlock(keystream, 0);\n\n\t\t\t\t// Increment counter\n\t\t\t\tcounter[blockSize - 1] = counter[blockSize - 1] + 1 | 0;\n\n\t\t\t\t// Encrypt\n\t\t\t\tfor (var i = 0; i < blockSize; i++) {\n\t\t\t\t\twords[offset + i] ^= keystream[i];\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\n\t\tCTR.Decryptor = Encryptor;\n\n\t\treturn CTR;\n\t}();\n\n\treturn CryptoJS.mode.CTR;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/mode-ctr.js?'
                );
              },
            './node_modules/crypto-js/mode-ecb.js':
              /*!********************************************!*\
        !*** ./node_modules/crypto-js/mode-ecb.js ***!
        \********************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * Electronic Codebook block mode.\n  */\n\tCryptoJS.mode.ECB = function () {\n\t\tvar ECB = CryptoJS.lib.BlockCipherMode.extend();\n\n\t\tECB.Encryptor = ECB.extend({\n\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\tthis._cipher.encryptBlock(words, offset);\n\t\t\t}\n\t\t});\n\n\t\tECB.Decryptor = ECB.extend({\n\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\tthis._cipher.decryptBlock(words, offset);\n\t\t\t}\n\t\t});\n\n\t\treturn ECB;\n\t}();\n\n\treturn CryptoJS.mode.ECB;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/mode-ecb.js?'
                );
              },
            './node_modules/crypto-js/mode-ofb.js':
              /*!********************************************!*\
        !*** ./node_modules/crypto-js/mode-ofb.js ***!
        \********************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * Output Feedback block mode.\n  */\n\tCryptoJS.mode.OFB = function () {\n\t\tvar OFB = CryptoJS.lib.BlockCipherMode.extend();\n\n\t\tvar Encryptor = OFB.Encryptor = OFB.extend({\n\t\t\tprocessBlock: function (words, offset) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar cipher = this._cipher;\n\t\t\t\tvar blockSize = cipher.blockSize;\n\t\t\t\tvar iv = this._iv;\n\t\t\t\tvar keystream = this._keystream;\n\n\t\t\t\t// Generate keystream\n\t\t\t\tif (iv) {\n\t\t\t\t\tkeystream = this._keystream = iv.slice(0);\n\n\t\t\t\t\t// Remove IV for subsequent blocks\n\t\t\t\t\tthis._iv = undefined;\n\t\t\t\t}\n\t\t\t\tcipher.encryptBlock(keystream, 0);\n\n\t\t\t\t// Encrypt\n\t\t\t\tfor (var i = 0; i < blockSize; i++) {\n\t\t\t\t\twords[offset + i] ^= keystream[i];\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\n\t\tOFB.Decryptor = Encryptor;\n\n\t\treturn OFB;\n\t}();\n\n\treturn CryptoJS.mode.OFB;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/mode-ofb.js?'
                );
              },
            './node_modules/crypto-js/pad-ansix923.js':
              /*!************************************************!*\
        !*** ./node_modules/crypto-js/pad-ansix923.js ***!
        \************************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * ANSI X.923 padding strategy.\n  */\n\tCryptoJS.pad.AnsiX923 = {\n\t\tpad: function (data, blockSize) {\n\t\t\t// Shortcuts\n\t\t\tvar dataSigBytes = data.sigBytes;\n\t\t\tvar blockSizeBytes = blockSize * 4;\n\n\t\t\t// Count padding bytes\n\t\t\tvar nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;\n\n\t\t\t// Compute last byte position\n\t\t\tvar lastBytePos = dataSigBytes + nPaddingBytes - 1;\n\n\t\t\t// Pad\n\t\t\tdata.clamp();\n\t\t\tdata.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;\n\t\t\tdata.sigBytes += nPaddingBytes;\n\t\t},\n\n\t\tunpad: function (data) {\n\t\t\t// Get number of padding bytes from last byte\n\t\t\tvar nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff;\n\n\t\t\t// Remove padding\n\t\t\tdata.sigBytes -= nPaddingBytes;\n\t\t}\n\t};\n\n\treturn CryptoJS.pad.Ansix923;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/pad-ansix923.js?'
                );
              },
            './node_modules/crypto-js/pad-iso10126.js':
              /*!************************************************!*\
        !*** ./node_modules/crypto-js/pad-iso10126.js ***!
        \************************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * ISO 10126 padding strategy.\n  */\n\tCryptoJS.pad.Iso10126 = {\n\t\tpad: function (data, blockSize) {\n\t\t\t// Shortcut\n\t\t\tvar blockSizeBytes = blockSize * 4;\n\n\t\t\t// Count padding bytes\n\t\t\tvar nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;\n\n\t\t\t// Pad\n\t\t\tdata.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));\n\t\t},\n\n\t\tunpad: function (data) {\n\t\t\t// Get number of padding bytes from last byte\n\t\t\tvar nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 0xff;\n\n\t\t\t// Remove padding\n\t\t\tdata.sigBytes -= nPaddingBytes;\n\t\t}\n\t};\n\n\treturn CryptoJS.pad.Iso10126;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/pad-iso10126.js?'
                );
              },
            './node_modules/crypto-js/pad-iso97971.js':
              /*!************************************************!*\
        !*** ./node_modules/crypto-js/pad-iso97971.js ***!
        \************************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * ISO/IEC 9797-1 Padding Method 2.\n  */\n\tCryptoJS.pad.Iso97971 = {\n\t\tpad: function (data, blockSize) {\n\t\t\t// Add 0x80 byte\n\t\t\tdata.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));\n\n\t\t\t// Zero pad the rest\n\t\t\tCryptoJS.pad.ZeroPadding.pad(data, blockSize);\n\t\t},\n\n\t\tunpad: function (data) {\n\t\t\t// Remove zero padding\n\t\t\tCryptoJS.pad.ZeroPadding.unpad(data);\n\n\t\t\t// Remove one more byte -- the 0x80 byte\n\t\t\tdata.sigBytes--;\n\t\t}\n\t};\n\n\treturn CryptoJS.pad.Iso97971;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/pad-iso97971.js?'
                );
              },
            './node_modules/crypto-js/pad-nopadding.js':
              /*!*************************************************!*\
        !*** ./node_modules/crypto-js/pad-nopadding.js ***!
        \*************************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * A noop padding strategy.\n  */\n\tCryptoJS.pad.NoPadding = {\n\t\tpad: function () {},\n\n\t\tunpad: function () {}\n\t};\n\n\treturn CryptoJS.pad.NoPadding;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/pad-nopadding.js?'
                );
              },
            './node_modules/crypto-js/pad-zeropadding.js':
              /*!***************************************************!*\
        !*** ./node_modules/crypto-js/pad-zeropadding.js ***!
        \***************************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/**\n  * Zero padding strategy.\n  */\n\tCryptoJS.pad.ZeroPadding = {\n\t\tpad: function (data, blockSize) {\n\t\t\t// Shortcut\n\t\t\tvar blockSizeBytes = blockSize * 4;\n\n\t\t\t// Pad\n\t\t\tdata.clamp();\n\t\t\tdata.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);\n\t\t},\n\n\t\tunpad: function (data) {\n\t\t\t// Shortcut\n\t\t\tvar dataWords = data.words;\n\n\t\t\t// Unpad\n\t\t\tvar i = data.sigBytes - 1;\n\t\t\twhile (!(dataWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff)) {\n\t\t\t\ti--;\n\t\t\t}\n\t\t\tdata.sigBytes = i + 1;\n\t\t}\n\t};\n\n\treturn CryptoJS.pad.ZeroPadding;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/pad-zeropadding.js?'
                );
              },
            './node_modules/crypto-js/pbkdf2.js':
              /*!******************************************!*\
        !*** ./node_modules/crypto-js/pbkdf2.js ***!
        \******************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./sha1 */ "./node_modules/crypto-js/sha1.js"), __webpack_require__(/*! ./hmac */ "./node_modules/crypto-js/hmac.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar Base = C_lib.Base;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar C_algo = C.algo;\n\t\tvar SHA1 = C_algo.SHA1;\n\t\tvar HMAC = C_algo.HMAC;\n\n\t\t/**\n   * Password-Based Key Derivation Function 2 algorithm.\n   */\n\t\tvar PBKDF2 = C_algo.PBKDF2 = Base.extend({\n\t\t\t/**\n    * Configuration options.\n    *\n    * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)\n    * @property {Hasher} hasher The hasher to use. Default: SHA1\n    * @property {number} iterations The number of iterations to perform. Default: 1\n    */\n\t\t\tcfg: Base.extend({\n\t\t\t\tkeySize: 128 / 32,\n\t\t\t\thasher: SHA1,\n\t\t\t\titerations: 1\n\t\t\t}),\n\n\t\t\t/**\n    * Initializes a newly created key derivation function.\n    *\n    * @param {Object} cfg (Optional) The configuration options to use for the derivation.\n    *\n    * @example\n    *\n    *     var kdf = CryptoJS.algo.PBKDF2.create();\n    *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });\n    *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });\n    */\n\t\t\tinit: function (cfg) {\n\t\t\t\tthis.cfg = this.cfg.extend(cfg);\n\t\t\t},\n\n\t\t\t/**\n    * Computes the Password-Based Key Derivation Function 2.\n    *\n    * @param {WordArray|string} password The password.\n    * @param {WordArray|string} salt A salt.\n    *\n    * @return {WordArray} The derived key.\n    *\n    * @example\n    *\n    *     var key = kdf.compute(password, salt);\n    */\n\t\t\tcompute: function (password, salt) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar cfg = this.cfg;\n\n\t\t\t\t// Init HMAC\n\t\t\t\tvar hmac = HMAC.create(cfg.hasher, password);\n\n\t\t\t\t// Initial values\n\t\t\t\tvar derivedKey = WordArray.create();\n\t\t\t\tvar blockIndex = WordArray.create([0x00000001]);\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar derivedKeyWords = derivedKey.words;\n\t\t\t\tvar blockIndexWords = blockIndex.words;\n\t\t\t\tvar keySize = cfg.keySize;\n\t\t\t\tvar iterations = cfg.iterations;\n\n\t\t\t\t// Generate key\n\t\t\t\twhile (derivedKeyWords.length < keySize) {\n\t\t\t\t\tvar block = hmac.update(salt).finalize(blockIndex);\n\t\t\t\t\thmac.reset();\n\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar blockWords = block.words;\n\t\t\t\t\tvar blockWordsLength = blockWords.length;\n\n\t\t\t\t\t// Iterations\n\t\t\t\t\tvar intermediate = block;\n\t\t\t\t\tfor (var i = 1; i < iterations; i++) {\n\t\t\t\t\t\tintermediate = hmac.finalize(intermediate);\n\t\t\t\t\t\thmac.reset();\n\n\t\t\t\t\t\t// Shortcut\n\t\t\t\t\t\tvar intermediateWords = intermediate.words;\n\n\t\t\t\t\t\t// XOR intermediate with block\n\t\t\t\t\t\tfor (var j = 0; j < blockWordsLength; j++) {\n\t\t\t\t\t\t\tblockWords[j] ^= intermediateWords[j];\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\tderivedKey.concat(block);\n\t\t\t\t\tblockIndexWords[0]++;\n\t\t\t\t}\n\t\t\t\tderivedKey.sigBytes = keySize * 4;\n\n\t\t\t\treturn derivedKey;\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Computes the Password-Based Key Derivation Function 2.\n   *\n   * @param {WordArray|string} password The password.\n   * @param {WordArray|string} salt A salt.\n   * @param {Object} cfg (Optional) The configuration options to use for this computation.\n   *\n   * @return {WordArray} The derived key.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var key = CryptoJS.PBKDF2(password, salt);\n   *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });\n   *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });\n   */\n\t\tC.PBKDF2 = function (password, salt, cfg) {\n\t\t\treturn PBKDF2.create(cfg).compute(password, salt);\n\t\t};\n\t})();\n\n\treturn CryptoJS.PBKDF2;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/pbkdf2.js?'
                );
              },
            './node_modules/crypto-js/rabbit-legacy.js':
              /*!*************************************************!*\
        !*** ./node_modules/crypto-js/rabbit-legacy.js ***!
        \*************************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar StreamCipher = C_lib.StreamCipher;\n\t\tvar C_algo = C.algo;\n\n\t\t// Reusable objects\n\t\tvar S = [];\n\t\tvar C_ = [];\n\t\tvar G = [];\n\n\t\t/**\n   * Rabbit stream cipher algorithm.\n   *\n   * This is a legacy version that neglected to convert the key to little-endian.\n   * This error doesn\'t affect the cipher\'s security,\n   * but it does affect its compatibility with other implementations.\n   */\n\t\tvar RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar K = this._key.words;\n\t\t\t\tvar iv = this.cfg.iv;\n\n\t\t\t\t// Generate initial state values\n\t\t\t\tvar X = this._X = [K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16];\n\n\t\t\t\t// Generate initial counter values\n\t\t\t\tvar C = this._C = [K[2] << 16 | K[2] >>> 16, K[0] & 0xffff0000 | K[1] & 0x0000ffff, K[3] << 16 | K[3] >>> 16, K[1] & 0xffff0000 | K[2] & 0x0000ffff, K[0] << 16 | K[0] >>> 16, K[2] & 0xffff0000 | K[3] & 0x0000ffff, K[1] << 16 | K[1] >>> 16, K[3] & 0xffff0000 | K[0] & 0x0000ffff];\n\n\t\t\t\t// Carry bit\n\t\t\t\tthis._b = 0;\n\n\t\t\t\t// Iterate the system four times\n\t\t\t\tfor (var i = 0; i < 4; i++) {\n\t\t\t\t\tnextState.call(this);\n\t\t\t\t}\n\n\t\t\t\t// Modify the counters\n\t\t\t\tfor (var i = 0; i < 8; i++) {\n\t\t\t\t\tC[i] ^= X[i + 4 & 7];\n\t\t\t\t}\n\n\t\t\t\t// IV setup\n\t\t\t\tif (iv) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar IV = iv.words;\n\t\t\t\t\tvar IV_0 = IV[0];\n\t\t\t\t\tvar IV_1 = IV[1];\n\n\t\t\t\t\t// Generate four subvectors\n\t\t\t\t\tvar i0 = (IV_0 << 8 | IV_0 >>> 24) & 0x00ff00ff | (IV_0 << 24 | IV_0 >>> 8) & 0xff00ff00;\n\t\t\t\t\tvar i2 = (IV_1 << 8 | IV_1 >>> 24) & 0x00ff00ff | (IV_1 << 24 | IV_1 >>> 8) & 0xff00ff00;\n\t\t\t\t\tvar i1 = i0 >>> 16 | i2 & 0xffff0000;\n\t\t\t\t\tvar i3 = i2 << 16 | i0 & 0x0000ffff;\n\n\t\t\t\t\t// Modify counter values\n\t\t\t\t\tC[0] ^= i0;\n\t\t\t\t\tC[1] ^= i1;\n\t\t\t\t\tC[2] ^= i2;\n\t\t\t\t\tC[3] ^= i3;\n\t\t\t\t\tC[4] ^= i0;\n\t\t\t\t\tC[5] ^= i1;\n\t\t\t\t\tC[6] ^= i2;\n\t\t\t\t\tC[7] ^= i3;\n\n\t\t\t\t\t// Iterate the system four times\n\t\t\t\t\tfor (var i = 0; i < 4; i++) {\n\t\t\t\t\t\tnextState.call(this);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar X = this._X;\n\n\t\t\t\t// Iterate the system\n\t\t\t\tnextState.call(this);\n\n\t\t\t\t// Generate four keystream words\n\t\t\t\tS[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;\n\t\t\t\tS[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;\n\t\t\t\tS[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;\n\t\t\t\tS[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;\n\n\t\t\t\tfor (var i = 0; i < 4; i++) {\n\t\t\t\t\t// Swap endian\n\t\t\t\t\tS[i] = (S[i] << 8 | S[i] >>> 24) & 0x00ff00ff | (S[i] << 24 | S[i] >>> 8) & 0xff00ff00;\n\n\t\t\t\t\t// Encrypt\n\t\t\t\t\tM[offset + i] ^= S[i];\n\t\t\t\t}\n\t\t\t},\n\n\t\t\tblockSize: 128 / 32,\n\n\t\t\tivSize: 64 / 32\n\t\t});\n\n\t\tfunction nextState() {\n\t\t\t// Shortcuts\n\t\t\tvar X = this._X;\n\t\t\tvar C = this._C;\n\n\t\t\t// Save old counter values\n\t\t\tfor (var i = 0; i < 8; i++) {\n\t\t\t\tC_[i] = C[i];\n\t\t\t}\n\n\t\t\t// Calculate new counter values\n\t\t\tC[0] = C[0] + 0x4d34d34d + this._b | 0;\n\t\t\tC[1] = C[1] + 0xd34d34d3 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[2] = C[2] + 0x34d34d34 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[3] = C[3] + 0x4d34d34d + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[4] = C[4] + 0xd34d34d3 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[5] = C[5] + 0x34d34d34 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[6] = C[6] + 0x4d34d34d + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[7] = C[7] + 0xd34d34d3 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;\n\t\t\tthis._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;\n\n\t\t\t// Calculate the g-values\n\t\t\tfor (var i = 0; i < 8; i++) {\n\t\t\t\tvar gx = X[i] + C[i];\n\n\t\t\t\t// Construct high and low argument for squaring\n\t\t\t\tvar ga = gx & 0xffff;\n\t\t\t\tvar gb = gx >>> 16;\n\n\t\t\t\t// Calculate high and low result of squaring\n\t\t\t\tvar gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;\n\t\t\t\tvar gl = ((gx & 0xffff0000) * gx | 0) + ((gx & 0x0000ffff) * gx | 0);\n\n\t\t\t\t// High XOR low\n\t\t\t\tG[i] = gh ^ gl;\n\t\t\t}\n\n\t\t\t// Calculate new state values\n\t\t\tX[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;\n\t\t\tX[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;\n\t\t\tX[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;\n\t\t\tX[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;\n\t\t\tX[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;\n\t\t\tX[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;\n\t\t\tX[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;\n\t\t\tX[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;\n\t\t}\n\n\t\t/**\n   * Shortcut functions to the cipher\'s object interface.\n   *\n   * @example\n   *\n   *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);\n   *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);\n   */\n\t\tC.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);\n\t})();\n\n\treturn CryptoJS.RabbitLegacy;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/rabbit-legacy.js?'
                );
              },
            './node_modules/crypto-js/rabbit.js':
              /*!******************************************!*\
        !*** ./node_modules/crypto-js/rabbit.js ***!
        \******************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar StreamCipher = C_lib.StreamCipher;\n\t\tvar C_algo = C.algo;\n\n\t\t// Reusable objects\n\t\tvar S = [];\n\t\tvar C_ = [];\n\t\tvar G = [];\n\n\t\t/**\n   * Rabbit stream cipher algorithm\n   */\n\t\tvar Rabbit = C_algo.Rabbit = StreamCipher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar K = this._key.words;\n\t\t\t\tvar iv = this.cfg.iv;\n\n\t\t\t\t// Swap endian\n\t\t\t\tfor (var i = 0; i < 4; i++) {\n\t\t\t\t\tK[i] = (K[i] << 8 | K[i] >>> 24) & 0x00ff00ff | (K[i] << 24 | K[i] >>> 8) & 0xff00ff00;\n\t\t\t\t}\n\n\t\t\t\t// Generate initial state values\n\t\t\t\tvar X = this._X = [K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16];\n\n\t\t\t\t// Generate initial counter values\n\t\t\t\tvar C = this._C = [K[2] << 16 | K[2] >>> 16, K[0] & 0xffff0000 | K[1] & 0x0000ffff, K[3] << 16 | K[3] >>> 16, K[1] & 0xffff0000 | K[2] & 0x0000ffff, K[0] << 16 | K[0] >>> 16, K[2] & 0xffff0000 | K[3] & 0x0000ffff, K[1] << 16 | K[1] >>> 16, K[3] & 0xffff0000 | K[0] & 0x0000ffff];\n\n\t\t\t\t// Carry bit\n\t\t\t\tthis._b = 0;\n\n\t\t\t\t// Iterate the system four times\n\t\t\t\tfor (var i = 0; i < 4; i++) {\n\t\t\t\t\tnextState.call(this);\n\t\t\t\t}\n\n\t\t\t\t// Modify the counters\n\t\t\t\tfor (var i = 0; i < 8; i++) {\n\t\t\t\t\tC[i] ^= X[i + 4 & 7];\n\t\t\t\t}\n\n\t\t\t\t// IV setup\n\t\t\t\tif (iv) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar IV = iv.words;\n\t\t\t\t\tvar IV_0 = IV[0];\n\t\t\t\t\tvar IV_1 = IV[1];\n\n\t\t\t\t\t// Generate four subvectors\n\t\t\t\t\tvar i0 = (IV_0 << 8 | IV_0 >>> 24) & 0x00ff00ff | (IV_0 << 24 | IV_0 >>> 8) & 0xff00ff00;\n\t\t\t\t\tvar i2 = (IV_1 << 8 | IV_1 >>> 24) & 0x00ff00ff | (IV_1 << 24 | IV_1 >>> 8) & 0xff00ff00;\n\t\t\t\t\tvar i1 = i0 >>> 16 | i2 & 0xffff0000;\n\t\t\t\t\tvar i3 = i2 << 16 | i0 & 0x0000ffff;\n\n\t\t\t\t\t// Modify counter values\n\t\t\t\t\tC[0] ^= i0;\n\t\t\t\t\tC[1] ^= i1;\n\t\t\t\t\tC[2] ^= i2;\n\t\t\t\t\tC[3] ^= i3;\n\t\t\t\t\tC[4] ^= i0;\n\t\t\t\t\tC[5] ^= i1;\n\t\t\t\t\tC[6] ^= i2;\n\t\t\t\t\tC[7] ^= i3;\n\n\t\t\t\t\t// Iterate the system four times\n\t\t\t\t\tfor (var i = 0; i < 4; i++) {\n\t\t\t\t\t\tnextState.call(this);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar X = this._X;\n\n\t\t\t\t// Iterate the system\n\t\t\t\tnextState.call(this);\n\n\t\t\t\t// Generate four keystream words\n\t\t\t\tS[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;\n\t\t\t\tS[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;\n\t\t\t\tS[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;\n\t\t\t\tS[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;\n\n\t\t\t\tfor (var i = 0; i < 4; i++) {\n\t\t\t\t\t// Swap endian\n\t\t\t\t\tS[i] = (S[i] << 8 | S[i] >>> 24) & 0x00ff00ff | (S[i] << 24 | S[i] >>> 8) & 0xff00ff00;\n\n\t\t\t\t\t// Encrypt\n\t\t\t\t\tM[offset + i] ^= S[i];\n\t\t\t\t}\n\t\t\t},\n\n\t\t\tblockSize: 128 / 32,\n\n\t\t\tivSize: 64 / 32\n\t\t});\n\n\t\tfunction nextState() {\n\t\t\t// Shortcuts\n\t\t\tvar X = this._X;\n\t\t\tvar C = this._C;\n\n\t\t\t// Save old counter values\n\t\t\tfor (var i = 0; i < 8; i++) {\n\t\t\t\tC_[i] = C[i];\n\t\t\t}\n\n\t\t\t// Calculate new counter values\n\t\t\tC[0] = C[0] + 0x4d34d34d + this._b | 0;\n\t\t\tC[1] = C[1] + 0xd34d34d3 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[2] = C[2] + 0x34d34d34 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[3] = C[3] + 0x4d34d34d + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[4] = C[4] + 0xd34d34d3 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[5] = C[5] + 0x34d34d34 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[6] = C[6] + 0x4d34d34d + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;\n\t\t\tC[7] = C[7] + 0xd34d34d3 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;\n\t\t\tthis._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;\n\n\t\t\t// Calculate the g-values\n\t\t\tfor (var i = 0; i < 8; i++) {\n\t\t\t\tvar gx = X[i] + C[i];\n\n\t\t\t\t// Construct high and low argument for squaring\n\t\t\t\tvar ga = gx & 0xffff;\n\t\t\t\tvar gb = gx >>> 16;\n\n\t\t\t\t// Calculate high and low result of squaring\n\t\t\t\tvar gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;\n\t\t\t\tvar gl = ((gx & 0xffff0000) * gx | 0) + ((gx & 0x0000ffff) * gx | 0);\n\n\t\t\t\t// High XOR low\n\t\t\t\tG[i] = gh ^ gl;\n\t\t\t}\n\n\t\t\t// Calculate new state values\n\t\t\tX[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;\n\t\t\tX[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;\n\t\t\tX[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;\n\t\t\tX[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;\n\t\t\tX[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;\n\t\t\tX[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;\n\t\t\tX[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;\n\t\t\tX[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;\n\t\t}\n\n\t\t/**\n   * Shortcut functions to the cipher\'s object interface.\n   *\n   * @example\n   *\n   *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);\n   *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);\n   */\n\t\tC.Rabbit = StreamCipher._createHelper(Rabbit);\n\t})();\n\n\treturn CryptoJS.Rabbit;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/rabbit.js?'
                );
              },
            './node_modules/crypto-js/rc4.js':
              /*!***************************************!*\
        !*** ./node_modules/crypto-js/rc4.js ***!
        \***************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar StreamCipher = C_lib.StreamCipher;\n\t\tvar C_algo = C.algo;\n\n\t\t/**\n   * RC4 stream cipher algorithm.\n   */\n\t\tvar RC4 = C_algo.RC4 = StreamCipher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar key = this._key;\n\t\t\t\tvar keyWords = key.words;\n\t\t\t\tvar keySigBytes = key.sigBytes;\n\n\t\t\t\t// Init sbox\n\t\t\t\tvar S = this._S = [];\n\t\t\t\tfor (var i = 0; i < 256; i++) {\n\t\t\t\t\tS[i] = i;\n\t\t\t\t}\n\n\t\t\t\t// Key setup\n\t\t\t\tfor (var i = 0, j = 0; i < 256; i++) {\n\t\t\t\t\tvar keyByteIndex = i % keySigBytes;\n\t\t\t\t\tvar keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 0xff;\n\n\t\t\t\t\tj = (j + S[i] + keyByte) % 256;\n\n\t\t\t\t\t// Swap\n\t\t\t\t\tvar t = S[i];\n\t\t\t\t\tS[i] = S[j];\n\t\t\t\t\tS[j] = t;\n\t\t\t\t}\n\n\t\t\t\t// Counters\n\t\t\t\tthis._i = this._j = 0;\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\t\t\t\tM[offset] ^= generateKeystreamWord.call(this);\n\t\t\t},\n\n\t\t\tkeySize: 256 / 32,\n\n\t\t\tivSize: 0\n\t\t});\n\n\t\tfunction generateKeystreamWord() {\n\t\t\t// Shortcuts\n\t\t\tvar S = this._S;\n\t\t\tvar i = this._i;\n\t\t\tvar j = this._j;\n\n\t\t\t// Generate keystream word\n\t\t\tvar keystreamWord = 0;\n\t\t\tfor (var n = 0; n < 4; n++) {\n\t\t\t\ti = (i + 1) % 256;\n\t\t\t\tj = (j + S[i]) % 256;\n\n\t\t\t\t// Swap\n\t\t\t\tvar t = S[i];\n\t\t\t\tS[i] = S[j];\n\t\t\t\tS[j] = t;\n\n\t\t\t\tkeystreamWord |= S[(S[i] + S[j]) % 256] << 24 - n * 8;\n\t\t\t}\n\n\t\t\t// Update counters\n\t\t\tthis._i = i;\n\t\t\tthis._j = j;\n\n\t\t\treturn keystreamWord;\n\t\t}\n\n\t\t/**\n   * Shortcut functions to the cipher\'s object interface.\n   *\n   * @example\n   *\n   *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);\n   *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);\n   */\n\t\tC.RC4 = StreamCipher._createHelper(RC4);\n\n\t\t/**\n   * Modified RC4 stream cipher algorithm.\n   */\n\t\tvar RC4Drop = C_algo.RC4Drop = RC4.extend({\n\t\t\t/**\n    * Configuration options.\n    *\n    * @property {number} drop The number of keystream words to drop. Default 192\n    */\n\t\t\tcfg: RC4.cfg.extend({\n\t\t\t\tdrop: 192\n\t\t\t}),\n\n\t\t\t_doReset: function () {\n\t\t\t\tRC4._doReset.call(this);\n\n\t\t\t\t// Drop\n\t\t\t\tfor (var i = this.cfg.drop; i > 0; i--) {\n\t\t\t\t\tgenerateKeystreamWord.call(this);\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Shortcut functions to the cipher\'s object interface.\n   *\n   * @example\n   *\n   *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);\n   *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);\n   */\n\t\tC.RC4Drop = StreamCipher._createHelper(RC4Drop);\n\t})();\n\n\treturn CryptoJS.RC4;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/rc4.js?'
                );
              },
            './node_modules/crypto-js/ripemd160.js':
              /*!*********************************************!*\
        !*** ./node_modules/crypto-js/ripemd160.js ***!
        \*********************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t/** @preserve\n (c) 2012 by Cédric Mesnil. All rights reserved.\n \tRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n \t    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n     - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n \tTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n\t(function (Math) {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar Hasher = C_lib.Hasher;\n\t\tvar C_algo = C.algo;\n\n\t\t// Constants table\n\t\tvar _zl = WordArray.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);\n\t\tvar _zr = WordArray.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);\n\t\tvar _sl = WordArray.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);\n\t\tvar _sr = WordArray.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);\n\n\t\tvar _hl = WordArray.create([0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);\n\t\tvar _hr = WordArray.create([0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);\n\n\t\t/**\n   * RIPEMD160 hash algorithm.\n   */\n\t\tvar RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\tthis._hash = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\n\t\t\t\t// Swap endian\n\t\t\t\tfor (var i = 0; i < 16; i++) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar offset_i = offset + i;\n\t\t\t\t\tvar M_offset_i = M[offset_i];\n\n\t\t\t\t\t// Swap\n\t\t\t\t\tM[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff | (M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;\n\t\t\t\t}\n\t\t\t\t// Shortcut\n\t\t\t\tvar H = this._hash.words;\n\t\t\t\tvar hl = _hl.words;\n\t\t\t\tvar hr = _hr.words;\n\t\t\t\tvar zl = _zl.words;\n\t\t\t\tvar zr = _zr.words;\n\t\t\t\tvar sl = _sl.words;\n\t\t\t\tvar sr = _sr.words;\n\n\t\t\t\t// Working variables\n\t\t\t\tvar al, bl, cl, dl, el;\n\t\t\t\tvar ar, br, cr, dr, er;\n\n\t\t\t\tar = al = H[0];\n\t\t\t\tbr = bl = H[1];\n\t\t\t\tcr = cl = H[2];\n\t\t\t\tdr = dl = H[3];\n\t\t\t\ter = el = H[4];\n\t\t\t\t// Computation\n\t\t\t\tvar t;\n\t\t\t\tfor (var i = 0; i < 80; i += 1) {\n\t\t\t\t\tt = al + M[offset + zl[i]] | 0;\n\t\t\t\t\tif (i < 16) {\n\t\t\t\t\t\tt += f1(bl, cl, dl) + hl[0];\n\t\t\t\t\t} else if (i < 32) {\n\t\t\t\t\t\tt += f2(bl, cl, dl) + hl[1];\n\t\t\t\t\t} else if (i < 48) {\n\t\t\t\t\t\tt += f3(bl, cl, dl) + hl[2];\n\t\t\t\t\t} else if (i < 64) {\n\t\t\t\t\t\tt += f4(bl, cl, dl) + hl[3];\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// if (i<80) {\n\t\t\t\t\t\tt += f5(bl, cl, dl) + hl[4];\n\t\t\t\t\t}\n\t\t\t\t\tt = t | 0;\n\t\t\t\t\tt = rotl(t, sl[i]);\n\t\t\t\t\tt = t + el | 0;\n\t\t\t\t\tal = el;\n\t\t\t\t\tel = dl;\n\t\t\t\t\tdl = rotl(cl, 10);\n\t\t\t\t\tcl = bl;\n\t\t\t\t\tbl = t;\n\n\t\t\t\t\tt = ar + M[offset + zr[i]] | 0;\n\t\t\t\t\tif (i < 16) {\n\t\t\t\t\t\tt += f5(br, cr, dr) + hr[0];\n\t\t\t\t\t} else if (i < 32) {\n\t\t\t\t\t\tt += f4(br, cr, dr) + hr[1];\n\t\t\t\t\t} else if (i < 48) {\n\t\t\t\t\t\tt += f3(br, cr, dr) + hr[2];\n\t\t\t\t\t} else if (i < 64) {\n\t\t\t\t\t\tt += f2(br, cr, dr) + hr[3];\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// if (i<80) {\n\t\t\t\t\t\tt += f1(br, cr, dr) + hr[4];\n\t\t\t\t\t}\n\t\t\t\t\tt = t | 0;\n\t\t\t\t\tt = rotl(t, sr[i]);\n\t\t\t\t\tt = t + er | 0;\n\t\t\t\t\tar = er;\n\t\t\t\t\ter = dr;\n\t\t\t\t\tdr = rotl(cr, 10);\n\t\t\t\t\tcr = br;\n\t\t\t\t\tbr = t;\n\t\t\t\t}\n\t\t\t\t// Intermediate hash value\n\t\t\t\tt = H[1] + cl + dr | 0;\n\t\t\t\tH[1] = H[2] + dl + er | 0;\n\t\t\t\tH[2] = H[3] + el + ar | 0;\n\t\t\t\tH[3] = H[4] + al + br | 0;\n\t\t\t\tH[4] = H[0] + bl + cr | 0;\n\t\t\t\tH[0] = t;\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar data = this._data;\n\t\t\t\tvar dataWords = data.words;\n\n\t\t\t\tvar nBitsTotal = this._nDataBytes * 8;\n\t\t\t\tvar nBitsLeft = data.sigBytes * 8;\n\n\t\t\t\t// Add padding\n\t\t\t\tdataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;\n\t\t\t\tdataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotal << 8 | nBitsTotal >>> 24) & 0x00ff00ff | (nBitsTotal << 24 | nBitsTotal >>> 8) & 0xff00ff00;\n\t\t\t\tdata.sigBytes = (dataWords.length + 1) * 4;\n\n\t\t\t\t// Hash final blocks\n\t\t\t\tthis._process();\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar hash = this._hash;\n\t\t\t\tvar H = hash.words;\n\n\t\t\t\t// Swap endian\n\t\t\t\tfor (var i = 0; i < 5; i++) {\n\t\t\t\t\t// Shortcut\n\t\t\t\t\tvar H_i = H[i];\n\n\t\t\t\t\t// Swap\n\t\t\t\t\tH[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff | (H_i << 24 | H_i >>> 8) & 0xff00ff00;\n\t\t\t\t}\n\n\t\t\t\t// Return final computed hash\n\t\t\t\treturn hash;\n\t\t\t},\n\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Hasher.clone.call(this);\n\t\t\t\tclone._hash = this._hash.clone();\n\n\t\t\t\treturn clone;\n\t\t\t}\n\t\t});\n\n\t\tfunction f1(x, y, z) {\n\t\t\treturn x ^ y ^ z;\n\t\t}\n\n\t\tfunction f2(x, y, z) {\n\t\t\treturn x & y | ~x & z;\n\t\t}\n\n\t\tfunction f3(x, y, z) {\n\t\t\treturn (x | ~y) ^ z;\n\t\t}\n\n\t\tfunction f4(x, y, z) {\n\t\t\treturn x & z | y & ~z;\n\t\t}\n\n\t\tfunction f5(x, y, z) {\n\t\t\treturn x ^ (y | ~z);\n\t\t}\n\n\t\tfunction rotl(x, n) {\n\t\t\treturn x << n | x >>> 32 - n;\n\t\t}\n\n\t\t/**\n   * Shortcut function to the hasher\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   *\n   * @return {WordArray} The hash.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hash = CryptoJS.RIPEMD160(\'message\');\n   *     var hash = CryptoJS.RIPEMD160(wordArray);\n   */\n\t\tC.RIPEMD160 = Hasher._createHelper(RIPEMD160);\n\n\t\t/**\n   * Shortcut function to the HMAC\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   * @param {WordArray|string} key The secret key.\n   *\n   * @return {WordArray} The HMAC.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hmac = CryptoJS.HmacRIPEMD160(message, key);\n   */\n\t\tC.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);\n\t})(Math);\n\n\treturn CryptoJS.RIPEMD160;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/ripemd160.js?'
                );
              },
            './node_modules/crypto-js/sha1.js':
              /*!****************************************!*\
        !*** ./node_modules/crypto-js/sha1.js ***!
        \****************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar Hasher = C_lib.Hasher;\n\t\tvar C_algo = C.algo;\n\n\t\t// Reusable object\n\t\tvar W = [];\n\n\t\t/**\n   * SHA-1 hash algorithm.\n   */\n\t\tvar SHA1 = C_algo.SHA1 = Hasher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\tthis._hash = new WordArray.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar H = this._hash.words;\n\n\t\t\t\t// Working variables\n\t\t\t\tvar a = H[0];\n\t\t\t\tvar b = H[1];\n\t\t\t\tvar c = H[2];\n\t\t\t\tvar d = H[3];\n\t\t\t\tvar e = H[4];\n\n\t\t\t\t// Computation\n\t\t\t\tfor (var i = 0; i < 80; i++) {\n\t\t\t\t\tif (i < 16) {\n\t\t\t\t\t\tW[i] = M[offset + i] | 0;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tvar n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];\n\t\t\t\t\t\tW[i] = n << 1 | n >>> 31;\n\t\t\t\t\t}\n\n\t\t\t\t\tvar t = (a << 5 | a >>> 27) + e + W[i];\n\t\t\t\t\tif (i < 20) {\n\t\t\t\t\t\tt += (b & c | ~b & d) + 0x5a827999;\n\t\t\t\t\t} else if (i < 40) {\n\t\t\t\t\t\tt += (b ^ c ^ d) + 0x6ed9eba1;\n\t\t\t\t\t} else if (i < 60) {\n\t\t\t\t\t\tt += (b & c | b & d | c & d) - 0x70e44324;\n\t\t\t\t\t} else /* if (i < 80) */{\n\t\t\t\t\t\t\tt += (b ^ c ^ d) - 0x359d3e2a;\n\t\t\t\t\t\t}\n\n\t\t\t\t\te = d;\n\t\t\t\t\td = c;\n\t\t\t\t\tc = b << 30 | b >>> 2;\n\t\t\t\t\tb = a;\n\t\t\t\t\ta = t;\n\t\t\t\t}\n\n\t\t\t\t// Intermediate hash value\n\t\t\t\tH[0] = H[0] + a | 0;\n\t\t\t\tH[1] = H[1] + b | 0;\n\t\t\t\tH[2] = H[2] + c | 0;\n\t\t\t\tH[3] = H[3] + d | 0;\n\t\t\t\tH[4] = H[4] + e | 0;\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar data = this._data;\n\t\t\t\tvar dataWords = data.words;\n\n\t\t\t\tvar nBitsTotal = this._nDataBytes * 8;\n\t\t\t\tvar nBitsLeft = data.sigBytes * 8;\n\n\t\t\t\t// Add padding\n\t\t\t\tdataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;\n\t\t\t\tdataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);\n\t\t\t\tdataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;\n\t\t\t\tdata.sigBytes = dataWords.length * 4;\n\n\t\t\t\t// Hash final blocks\n\t\t\t\tthis._process();\n\n\t\t\t\t// Return final computed hash\n\t\t\t\treturn this._hash;\n\t\t\t},\n\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Hasher.clone.call(this);\n\t\t\t\tclone._hash = this._hash.clone();\n\n\t\t\t\treturn clone;\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Shortcut function to the hasher's object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   *\n   * @return {WordArray} The hash.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hash = CryptoJS.SHA1('message');\n   *     var hash = CryptoJS.SHA1(wordArray);\n   */\n\t\tC.SHA1 = Hasher._createHelper(SHA1);\n\n\t\t/**\n   * Shortcut function to the HMAC's object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   * @param {WordArray|string} key The secret key.\n   *\n   * @return {WordArray} The HMAC.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hmac = CryptoJS.HmacSHA1(message, key);\n   */\n\t\tC.HmacSHA1 = Hasher._createHmacHelper(SHA1);\n\t})();\n\n\treturn CryptoJS.SHA1;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/sha1.js?"
                );
              },
            './node_modules/crypto-js/sha224.js':
              /*!******************************************!*\
        !*** ./node_modules/crypto-js/sha224.js ***!
        \******************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./sha256 */ "./node_modules/crypto-js/sha256.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar C_algo = C.algo;\n\t\tvar SHA256 = C_algo.SHA256;\n\n\t\t/**\n   * SHA-224 hash algorithm.\n   */\n\t\tvar SHA224 = C_algo.SHA224 = SHA256.extend({\n\t\t\t_doReset: function () {\n\t\t\t\tthis._hash = new WordArray.init([0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4]);\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\tvar hash = SHA256._doFinalize.call(this);\n\n\t\t\t\thash.sigBytes -= 4;\n\n\t\t\t\treturn hash;\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Shortcut function to the hasher\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   *\n   * @return {WordArray} The hash.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hash = CryptoJS.SHA224(\'message\');\n   *     var hash = CryptoJS.SHA224(wordArray);\n   */\n\t\tC.SHA224 = SHA256._createHelper(SHA224);\n\n\t\t/**\n   * Shortcut function to the HMAC\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   * @param {WordArray|string} key The secret key.\n   *\n   * @return {WordArray} The HMAC.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hmac = CryptoJS.HmacSHA224(message, key);\n   */\n\t\tC.HmacSHA224 = SHA256._createHmacHelper(SHA224);\n\t})();\n\n\treturn CryptoJS.SHA224;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/sha224.js?'
                );
              },
            './node_modules/crypto-js/sha256.js':
              /*!******************************************!*\
        !*** ./node_modules/crypto-js/sha256.js ***!
        \******************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ";(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ \"./node_modules/crypto-js/core.js\"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function (Math) {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar Hasher = C_lib.Hasher;\n\t\tvar C_algo = C.algo;\n\n\t\t// Initialization and round constants tables\n\t\tvar H = [];\n\t\tvar K = [];\n\n\t\t// Compute constants\n\t\t(function () {\n\t\t\tfunction isPrime(n) {\n\t\t\t\tvar sqrtN = Math.sqrt(n);\n\t\t\t\tfor (var factor = 2; factor <= sqrtN; factor++) {\n\t\t\t\t\tif (!(n % factor)) {\n\t\t\t\t\t\treturn false;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\treturn true;\n\t\t\t}\n\n\t\t\tfunction getFractionalBits(n) {\n\t\t\t\treturn (n - (n | 0)) * 0x100000000 | 0;\n\t\t\t}\n\n\t\t\tvar n = 2;\n\t\t\tvar nPrime = 0;\n\t\t\twhile (nPrime < 64) {\n\t\t\t\tif (isPrime(n)) {\n\t\t\t\t\tif (nPrime < 8) {\n\t\t\t\t\t\tH[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));\n\t\t\t\t\t}\n\t\t\t\t\tK[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));\n\n\t\t\t\t\tnPrime++;\n\t\t\t\t}\n\n\t\t\t\tn++;\n\t\t\t}\n\t\t})();\n\n\t\t// Reusable object\n\t\tvar W = [];\n\n\t\t/**\n   * SHA-256 hash algorithm.\n   */\n\t\tvar SHA256 = C_algo.SHA256 = Hasher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\tthis._hash = new WordArray.init(H.slice(0));\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\t\t\t\t// Shortcut\n\t\t\t\tvar H = this._hash.words;\n\n\t\t\t\t// Working variables\n\t\t\t\tvar a = H[0];\n\t\t\t\tvar b = H[1];\n\t\t\t\tvar c = H[2];\n\t\t\t\tvar d = H[3];\n\t\t\t\tvar e = H[4];\n\t\t\t\tvar f = H[5];\n\t\t\t\tvar g = H[6];\n\t\t\t\tvar h = H[7];\n\n\t\t\t\t// Computation\n\t\t\t\tfor (var i = 0; i < 64; i++) {\n\t\t\t\t\tif (i < 16) {\n\t\t\t\t\t\tW[i] = M[offset + i] | 0;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tvar gamma0x = W[i - 15];\n\t\t\t\t\t\tvar gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;\n\n\t\t\t\t\t\tvar gamma1x = W[i - 2];\n\t\t\t\t\t\tvar gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;\n\n\t\t\t\t\t\tW[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];\n\t\t\t\t\t}\n\n\t\t\t\t\tvar ch = e & f ^ ~e & g;\n\t\t\t\t\tvar maj = a & b ^ a & c ^ b & c;\n\n\t\t\t\t\tvar sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);\n\t\t\t\t\tvar sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);\n\n\t\t\t\t\tvar t1 = h + sigma1 + ch + K[i] + W[i];\n\t\t\t\t\tvar t2 = sigma0 + maj;\n\n\t\t\t\t\th = g;\n\t\t\t\t\tg = f;\n\t\t\t\t\tf = e;\n\t\t\t\t\te = d + t1 | 0;\n\t\t\t\t\td = c;\n\t\t\t\t\tc = b;\n\t\t\t\t\tb = a;\n\t\t\t\t\ta = t1 + t2 | 0;\n\t\t\t\t}\n\n\t\t\t\t// Intermediate hash value\n\t\t\t\tH[0] = H[0] + a | 0;\n\t\t\t\tH[1] = H[1] + b | 0;\n\t\t\t\tH[2] = H[2] + c | 0;\n\t\t\t\tH[3] = H[3] + d | 0;\n\t\t\t\tH[4] = H[4] + e | 0;\n\t\t\t\tH[5] = H[5] + f | 0;\n\t\t\t\tH[6] = H[6] + g | 0;\n\t\t\t\tH[7] = H[7] + h | 0;\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar data = this._data;\n\t\t\t\tvar dataWords = data.words;\n\n\t\t\t\tvar nBitsTotal = this._nDataBytes * 8;\n\t\t\t\tvar nBitsLeft = data.sigBytes * 8;\n\n\t\t\t\t// Add padding\n\t\t\t\tdataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;\n\t\t\t\tdataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);\n\t\t\t\tdataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;\n\t\t\t\tdata.sigBytes = dataWords.length * 4;\n\n\t\t\t\t// Hash final blocks\n\t\t\t\tthis._process();\n\n\t\t\t\t// Return final computed hash\n\t\t\t\treturn this._hash;\n\t\t\t},\n\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Hasher.clone.call(this);\n\t\t\t\tclone._hash = this._hash.clone();\n\n\t\t\t\treturn clone;\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Shortcut function to the hasher's object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   *\n   * @return {WordArray} The hash.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hash = CryptoJS.SHA256('message');\n   *     var hash = CryptoJS.SHA256(wordArray);\n   */\n\t\tC.SHA256 = Hasher._createHelper(SHA256);\n\n\t\t/**\n   * Shortcut function to the HMAC's object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   * @param {WordArray|string} key The secret key.\n   *\n   * @return {WordArray} The HMAC.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hmac = CryptoJS.HmacSHA256(message, key);\n   */\n\t\tC.HmacSHA256 = Hasher._createHmacHelper(SHA256);\n\t})(Math);\n\n\treturn CryptoJS.SHA256;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/sha256.js?"
                );
              },
            './node_modules/crypto-js/sha3.js':
              /*!****************************************!*\
        !*** ./node_modules/crypto-js/sha3.js ***!
        \****************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./x64-core */ "./node_modules/crypto-js/x64-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function (Math) {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar Hasher = C_lib.Hasher;\n\t\tvar C_x64 = C.x64;\n\t\tvar X64Word = C_x64.Word;\n\t\tvar C_algo = C.algo;\n\n\t\t// Constants tables\n\t\tvar RHO_OFFSETS = [];\n\t\tvar PI_INDEXES = [];\n\t\tvar ROUND_CONSTANTS = [];\n\n\t\t// Compute Constants\n\t\t(function () {\n\t\t\t// Compute rho offset constants\n\t\t\tvar x = 1,\n\t\t\t    y = 0;\n\t\t\tfor (var t = 0; t < 24; t++) {\n\t\t\t\tRHO_OFFSETS[x + 5 * y] = (t + 1) * (t + 2) / 2 % 64;\n\n\t\t\t\tvar newX = y % 5;\n\t\t\t\tvar newY = (2 * x + 3 * y) % 5;\n\t\t\t\tx = newX;\n\t\t\t\ty = newY;\n\t\t\t}\n\n\t\t\t// Compute pi index constants\n\t\t\tfor (var x = 0; x < 5; x++) {\n\t\t\t\tfor (var y = 0; y < 5; y++) {\n\t\t\t\t\tPI_INDEXES[x + 5 * y] = y + (2 * x + 3 * y) % 5 * 5;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// Compute round constants\n\t\t\tvar LFSR = 0x01;\n\t\t\tfor (var i = 0; i < 24; i++) {\n\t\t\t\tvar roundConstantMsw = 0;\n\t\t\t\tvar roundConstantLsw = 0;\n\n\t\t\t\tfor (var j = 0; j < 7; j++) {\n\t\t\t\t\tif (LFSR & 0x01) {\n\t\t\t\t\t\tvar bitPosition = (1 << j) - 1;\n\t\t\t\t\t\tif (bitPosition < 32) {\n\t\t\t\t\t\t\troundConstantLsw ^= 1 << bitPosition;\n\t\t\t\t\t\t} else /* if (bitPosition >= 32) */{\n\t\t\t\t\t\t\t\troundConstantMsw ^= 1 << bitPosition - 32;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// Compute next LFSR\n\t\t\t\t\tif (LFSR & 0x80) {\n\t\t\t\t\t\t// Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1\n\t\t\t\t\t\tLFSR = LFSR << 1 ^ 0x71;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tLFSR <<= 1;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);\n\t\t\t}\n\t\t})();\n\n\t\t// Reusable objects for temporary values\n\t\tvar T = [];\n\t\t(function () {\n\t\t\tfor (var i = 0; i < 25; i++) {\n\t\t\t\tT[i] = X64Word.create();\n\t\t\t}\n\t\t})();\n\n\t\t/**\n   * SHA-3 hash algorithm.\n   */\n\t\tvar SHA3 = C_algo.SHA3 = Hasher.extend({\n\t\t\t/**\n    * Configuration options.\n    *\n    * @property {number} outputLength\n    *   The desired number of bits in the output hash.\n    *   Only values permitted are: 224, 256, 384, 512.\n    *   Default: 512\n    */\n\t\t\tcfg: Hasher.cfg.extend({\n\t\t\t\toutputLength: 512\n\t\t\t}),\n\n\t\t\t_doReset: function () {\n\t\t\t\tvar state = this._state = [];\n\t\t\t\tfor (var i = 0; i < 25; i++) {\n\t\t\t\t\tstate[i] = new X64Word.init();\n\t\t\t\t}\n\n\t\t\t\tthis.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar state = this._state;\n\t\t\t\tvar nBlockSizeLanes = this.blockSize / 2;\n\n\t\t\t\t// Absorb\n\t\t\t\tfor (var i = 0; i < nBlockSizeLanes; i++) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar M2i = M[offset + 2 * i];\n\t\t\t\t\tvar M2i1 = M[offset + 2 * i + 1];\n\n\t\t\t\t\t// Swap endian\n\t\t\t\t\tM2i = (M2i << 8 | M2i >>> 24) & 0x00ff00ff | (M2i << 24 | M2i >>> 8) & 0xff00ff00;\n\t\t\t\t\tM2i1 = (M2i1 << 8 | M2i1 >>> 24) & 0x00ff00ff | (M2i1 << 24 | M2i1 >>> 8) & 0xff00ff00;\n\n\t\t\t\t\t// Absorb message into state\n\t\t\t\t\tvar lane = state[i];\n\t\t\t\t\tlane.high ^= M2i1;\n\t\t\t\t\tlane.low ^= M2i;\n\t\t\t\t}\n\n\t\t\t\t// Rounds\n\t\t\t\tfor (var round = 0; round < 24; round++) {\n\t\t\t\t\t// Theta\n\t\t\t\t\tfor (var x = 0; x < 5; x++) {\n\t\t\t\t\t\t// Mix column lanes\n\t\t\t\t\t\tvar tMsw = 0,\n\t\t\t\t\t\t    tLsw = 0;\n\t\t\t\t\t\tfor (var y = 0; y < 5; y++) {\n\t\t\t\t\t\t\tvar lane = state[x + 5 * y];\n\t\t\t\t\t\t\ttMsw ^= lane.high;\n\t\t\t\t\t\t\ttLsw ^= lane.low;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Temporary values\n\t\t\t\t\t\tvar Tx = T[x];\n\t\t\t\t\t\tTx.high = tMsw;\n\t\t\t\t\t\tTx.low = tLsw;\n\t\t\t\t\t}\n\t\t\t\t\tfor (var x = 0; x < 5; x++) {\n\t\t\t\t\t\t// Shortcuts\n\t\t\t\t\t\tvar Tx4 = T[(x + 4) % 5];\n\t\t\t\t\t\tvar Tx1 = T[(x + 1) % 5];\n\t\t\t\t\t\tvar Tx1Msw = Tx1.high;\n\t\t\t\t\t\tvar Tx1Lsw = Tx1.low;\n\n\t\t\t\t\t\t// Mix surrounding columns\n\t\t\t\t\t\tvar tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);\n\t\t\t\t\t\tvar tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);\n\t\t\t\t\t\tfor (var y = 0; y < 5; y++) {\n\t\t\t\t\t\t\tvar lane = state[x + 5 * y];\n\t\t\t\t\t\t\tlane.high ^= tMsw;\n\t\t\t\t\t\t\tlane.low ^= tLsw;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// Rho Pi\n\t\t\t\t\tfor (var laneIndex = 1; laneIndex < 25; laneIndex++) {\n\t\t\t\t\t\t// Shortcuts\n\t\t\t\t\t\tvar lane = state[laneIndex];\n\t\t\t\t\t\tvar laneMsw = lane.high;\n\t\t\t\t\t\tvar laneLsw = lane.low;\n\t\t\t\t\t\tvar rhoOffset = RHO_OFFSETS[laneIndex];\n\n\t\t\t\t\t\t// Rotate lanes\n\t\t\t\t\t\tif (rhoOffset < 32) {\n\t\t\t\t\t\t\tvar tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;\n\t\t\t\t\t\t\tvar tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;\n\t\t\t\t\t\t} else /* if (rhoOffset >= 32) */{\n\t\t\t\t\t\t\t\tvar tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;\n\t\t\t\t\t\t\t\tvar tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Transpose lanes\n\t\t\t\t\t\tvar TPiLane = T[PI_INDEXES[laneIndex]];\n\t\t\t\t\t\tTPiLane.high = tMsw;\n\t\t\t\t\t\tTPiLane.low = tLsw;\n\t\t\t\t\t}\n\n\t\t\t\t\t// Rho pi at x = y = 0\n\t\t\t\t\tvar T0 = T[0];\n\t\t\t\t\tvar state0 = state[0];\n\t\t\t\t\tT0.high = state0.high;\n\t\t\t\t\tT0.low = state0.low;\n\n\t\t\t\t\t// Chi\n\t\t\t\t\tfor (var x = 0; x < 5; x++) {\n\t\t\t\t\t\tfor (var y = 0; y < 5; y++) {\n\t\t\t\t\t\t\t// Shortcuts\n\t\t\t\t\t\t\tvar laneIndex = x + 5 * y;\n\t\t\t\t\t\t\tvar lane = state[laneIndex];\n\t\t\t\t\t\t\tvar TLane = T[laneIndex];\n\t\t\t\t\t\t\tvar Tx1Lane = T[(x + 1) % 5 + 5 * y];\n\t\t\t\t\t\t\tvar Tx2Lane = T[(x + 2) % 5 + 5 * y];\n\n\t\t\t\t\t\t\t// Mix rows\n\t\t\t\t\t\t\tlane.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;\n\t\t\t\t\t\t\tlane.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// Iota\n\t\t\t\t\tvar lane = state[0];\n\t\t\t\t\tvar roundConstant = ROUND_CONSTANTS[round];\n\t\t\t\t\tlane.high ^= roundConstant.high;\n\t\t\t\t\tlane.low ^= roundConstant.low;;\n\t\t\t\t}\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar data = this._data;\n\t\t\t\tvar dataWords = data.words;\n\t\t\t\tvar nBitsTotal = this._nDataBytes * 8;\n\t\t\t\tvar nBitsLeft = data.sigBytes * 8;\n\t\t\t\tvar blockSizeBits = this.blockSize * 32;\n\n\t\t\t\t// Add padding\n\t\t\t\tdataWords[nBitsLeft >>> 5] |= 0x1 << 24 - nBitsLeft % 32;\n\t\t\t\tdataWords[(Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 0x80;\n\t\t\t\tdata.sigBytes = dataWords.length * 4;\n\n\t\t\t\t// Hash final blocks\n\t\t\t\tthis._process();\n\n\t\t\t\t// Shortcuts\n\t\t\t\tvar state = this._state;\n\t\t\t\tvar outputLengthBytes = this.cfg.outputLength / 8;\n\t\t\t\tvar outputLengthLanes = outputLengthBytes / 8;\n\n\t\t\t\t// Squeeze\n\t\t\t\tvar hashWords = [];\n\t\t\t\tfor (var i = 0; i < outputLengthLanes; i++) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar lane = state[i];\n\t\t\t\t\tvar laneMsw = lane.high;\n\t\t\t\t\tvar laneLsw = lane.low;\n\n\t\t\t\t\t// Swap endian\n\t\t\t\t\tlaneMsw = (laneMsw << 8 | laneMsw >>> 24) & 0x00ff00ff | (laneMsw << 24 | laneMsw >>> 8) & 0xff00ff00;\n\t\t\t\t\tlaneLsw = (laneLsw << 8 | laneLsw >>> 24) & 0x00ff00ff | (laneLsw << 24 | laneLsw >>> 8) & 0xff00ff00;\n\n\t\t\t\t\t// Squeeze state to retrieve hash\n\t\t\t\t\thashWords.push(laneLsw);\n\t\t\t\t\thashWords.push(laneMsw);\n\t\t\t\t}\n\n\t\t\t\t// Return final computed hash\n\t\t\t\treturn new WordArray.init(hashWords, outputLengthBytes);\n\t\t\t},\n\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Hasher.clone.call(this);\n\n\t\t\t\tvar state = clone._state = this._state.slice(0);\n\t\t\t\tfor (var i = 0; i < 25; i++) {\n\t\t\t\t\tstate[i] = state[i].clone();\n\t\t\t\t}\n\n\t\t\t\treturn clone;\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Shortcut function to the hasher\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   *\n   * @return {WordArray} The hash.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hash = CryptoJS.SHA3(\'message\');\n   *     var hash = CryptoJS.SHA3(wordArray);\n   */\n\t\tC.SHA3 = Hasher._createHelper(SHA3);\n\n\t\t/**\n   * Shortcut function to the HMAC\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   * @param {WordArray|string} key The secret key.\n   *\n   * @return {WordArray} The HMAC.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hmac = CryptoJS.HmacSHA3(message, key);\n   */\n\t\tC.HmacSHA3 = Hasher._createHmacHelper(SHA3);\n\t})(Math);\n\n\treturn CryptoJS.SHA3;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/sha3.js?'
                );
              },
            './node_modules/crypto-js/sha384.js':
              /*!******************************************!*\
        !*** ./node_modules/crypto-js/sha384.js ***!
        \******************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./x64-core */ "./node_modules/crypto-js/x64-core.js"), __webpack_require__(/*! ./sha512 */ "./node_modules/crypto-js/sha512.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_x64 = C.x64;\n\t\tvar X64Word = C_x64.Word;\n\t\tvar X64WordArray = C_x64.WordArray;\n\t\tvar C_algo = C.algo;\n\t\tvar SHA512 = C_algo.SHA512;\n\n\t\t/**\n   * SHA-384 hash algorithm.\n   */\n\t\tvar SHA384 = C_algo.SHA384 = SHA512.extend({\n\t\t\t_doReset: function () {\n\t\t\t\tthis._hash = new X64WordArray.init([new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507), new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939), new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511), new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)]);\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\tvar hash = SHA512._doFinalize.call(this);\n\n\t\t\t\thash.sigBytes -= 16;\n\n\t\t\t\treturn hash;\n\t\t\t}\n\t\t});\n\n\t\t/**\n   * Shortcut function to the hasher\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   *\n   * @return {WordArray} The hash.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hash = CryptoJS.SHA384(\'message\');\n   *     var hash = CryptoJS.SHA384(wordArray);\n   */\n\t\tC.SHA384 = SHA512._createHelper(SHA384);\n\n\t\t/**\n   * Shortcut function to the HMAC\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   * @param {WordArray|string} key The secret key.\n   *\n   * @return {WordArray} The HMAC.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hmac = CryptoJS.HmacSHA384(message, key);\n   */\n\t\tC.HmacSHA384 = SHA512._createHmacHelper(SHA384);\n\t})();\n\n\treturn CryptoJS.SHA384;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/sha384.js?'
                );
              },
            './node_modules/crypto-js/sha512.js':
              /*!******************************************!*\
        !*** ./node_modules/crypto-js/sha512.js ***!
        \******************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./x64-core */ "./node_modules/crypto-js/x64-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar Hasher = C_lib.Hasher;\n\t\tvar C_x64 = C.x64;\n\t\tvar X64Word = C_x64.Word;\n\t\tvar X64WordArray = C_x64.WordArray;\n\t\tvar C_algo = C.algo;\n\n\t\tfunction X64Word_create() {\n\t\t\treturn X64Word.create.apply(X64Word, arguments);\n\t\t}\n\n\t\t// Constants\n\t\tvar K = [X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd), X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc), X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019), X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118), X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe), X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2), X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1), X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694), X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3), X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65), X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483), X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5), X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210), X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4), X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725), X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70), X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926), X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df), X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8), X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b), X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001), X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30), X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910), X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8), X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53), X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8), X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb), X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3), X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60), X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec), X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9), X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b), X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207), X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178), X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6), X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b), X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493), X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c), X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a), X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)];\n\n\t\t// Reusable objects\n\t\tvar W = [];\n\t\t(function () {\n\t\t\tfor (var i = 0; i < 80; i++) {\n\t\t\t\tW[i] = X64Word_create();\n\t\t\t}\n\t\t})();\n\n\t\t/**\n   * SHA-512 hash algorithm.\n   */\n\t\tvar SHA512 = C_algo.SHA512 = Hasher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\tthis._hash = new X64WordArray.init([new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b), new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1), new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f), new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)]);\n\t\t\t},\n\n\t\t\t_doProcessBlock: function (M, offset) {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar H = this._hash.words;\n\n\t\t\t\tvar H0 = H[0];\n\t\t\t\tvar H1 = H[1];\n\t\t\t\tvar H2 = H[2];\n\t\t\t\tvar H3 = H[3];\n\t\t\t\tvar H4 = H[4];\n\t\t\t\tvar H5 = H[5];\n\t\t\t\tvar H6 = H[6];\n\t\t\t\tvar H7 = H[7];\n\n\t\t\t\tvar H0h = H0.high;\n\t\t\t\tvar H0l = H0.low;\n\t\t\t\tvar H1h = H1.high;\n\t\t\t\tvar H1l = H1.low;\n\t\t\t\tvar H2h = H2.high;\n\t\t\t\tvar H2l = H2.low;\n\t\t\t\tvar H3h = H3.high;\n\t\t\t\tvar H3l = H3.low;\n\t\t\t\tvar H4h = H4.high;\n\t\t\t\tvar H4l = H4.low;\n\t\t\t\tvar H5h = H5.high;\n\t\t\t\tvar H5l = H5.low;\n\t\t\t\tvar H6h = H6.high;\n\t\t\t\tvar H6l = H6.low;\n\t\t\t\tvar H7h = H7.high;\n\t\t\t\tvar H7l = H7.low;\n\n\t\t\t\t// Working variables\n\t\t\t\tvar ah = H0h;\n\t\t\t\tvar al = H0l;\n\t\t\t\tvar bh = H1h;\n\t\t\t\tvar bl = H1l;\n\t\t\t\tvar ch = H2h;\n\t\t\t\tvar cl = H2l;\n\t\t\t\tvar dh = H3h;\n\t\t\t\tvar dl = H3l;\n\t\t\t\tvar eh = H4h;\n\t\t\t\tvar el = H4l;\n\t\t\t\tvar fh = H5h;\n\t\t\t\tvar fl = H5l;\n\t\t\t\tvar gh = H6h;\n\t\t\t\tvar gl = H6l;\n\t\t\t\tvar hh = H7h;\n\t\t\t\tvar hl = H7l;\n\n\t\t\t\t// Rounds\n\t\t\t\tfor (var i = 0; i < 80; i++) {\n\t\t\t\t\t// Shortcut\n\t\t\t\t\tvar Wi = W[i];\n\n\t\t\t\t\t// Extend message\n\t\t\t\t\tif (i < 16) {\n\t\t\t\t\t\tvar Wih = Wi.high = M[offset + i * 2] | 0;\n\t\t\t\t\t\tvar Wil = Wi.low = M[offset + i * 2 + 1] | 0;\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// Gamma0\n\t\t\t\t\t\tvar gamma0x = W[i - 15];\n\t\t\t\t\t\tvar gamma0xh = gamma0x.high;\n\t\t\t\t\t\tvar gamma0xl = gamma0x.low;\n\t\t\t\t\t\tvar gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;\n\t\t\t\t\t\tvar gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25);\n\n\t\t\t\t\t\t// Gamma1\n\t\t\t\t\t\tvar gamma1x = W[i - 2];\n\t\t\t\t\t\tvar gamma1xh = gamma1x.high;\n\t\t\t\t\t\tvar gamma1xl = gamma1x.low;\n\t\t\t\t\t\tvar gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;\n\t\t\t\t\t\tvar gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26);\n\n\t\t\t\t\t\t// W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]\n\t\t\t\t\t\tvar Wi7 = W[i - 7];\n\t\t\t\t\t\tvar Wi7h = Wi7.high;\n\t\t\t\t\t\tvar Wi7l = Wi7.low;\n\n\t\t\t\t\t\tvar Wi16 = W[i - 16];\n\t\t\t\t\t\tvar Wi16h = Wi16.high;\n\t\t\t\t\t\tvar Wi16l = Wi16.low;\n\n\t\t\t\t\t\tvar Wil = gamma0l + Wi7l;\n\t\t\t\t\t\tvar Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);\n\t\t\t\t\t\tvar Wil = Wil + gamma1l;\n\t\t\t\t\t\tvar Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);\n\t\t\t\t\t\tvar Wil = Wil + Wi16l;\n\t\t\t\t\t\tvar Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);\n\n\t\t\t\t\t\tWi.high = Wih;\n\t\t\t\t\t\tWi.low = Wil;\n\t\t\t\t\t}\n\n\t\t\t\t\tvar chh = eh & fh ^ ~eh & gh;\n\t\t\t\t\tvar chl = el & fl ^ ~el & gl;\n\t\t\t\t\tvar majh = ah & bh ^ ah & ch ^ bh & ch;\n\t\t\t\t\tvar majl = al & bl ^ al & cl ^ bl & cl;\n\n\t\t\t\t\tvar sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);\n\t\t\t\t\tvar sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);\n\t\t\t\t\tvar sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);\n\t\t\t\t\tvar sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9);\n\n\t\t\t\t\t// t1 = h + sigma1 + ch + K[i] + W[i]\n\t\t\t\t\tvar Ki = K[i];\n\t\t\t\t\tvar Kih = Ki.high;\n\t\t\t\t\tvar Kil = Ki.low;\n\n\t\t\t\t\tvar t1l = hl + sigma1l;\n\t\t\t\t\tvar t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);\n\t\t\t\t\tvar t1l = t1l + chl;\n\t\t\t\t\tvar t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);\n\t\t\t\t\tvar t1l = t1l + Kil;\n\t\t\t\t\tvar t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);\n\t\t\t\t\tvar t1l = t1l + Wil;\n\t\t\t\t\tvar t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0);\n\n\t\t\t\t\t// t2 = sigma0 + maj\n\t\t\t\t\tvar t2l = sigma0l + majl;\n\t\t\t\t\tvar t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0);\n\n\t\t\t\t\t// Update working variables\n\t\t\t\t\thh = gh;\n\t\t\t\t\thl = gl;\n\t\t\t\t\tgh = fh;\n\t\t\t\t\tgl = fl;\n\t\t\t\t\tfh = eh;\n\t\t\t\t\tfl = el;\n\t\t\t\t\tel = dl + t1l | 0;\n\t\t\t\t\teh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;\n\t\t\t\t\tdh = ch;\n\t\t\t\t\tdl = cl;\n\t\t\t\t\tch = bh;\n\t\t\t\t\tcl = bl;\n\t\t\t\t\tbh = ah;\n\t\t\t\t\tbl = al;\n\t\t\t\t\tal = t1l + t2l | 0;\n\t\t\t\t\tah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;\n\t\t\t\t}\n\n\t\t\t\t// Intermediate hash value\n\t\t\t\tH0l = H0.low = H0l + al;\n\t\t\t\tH0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);\n\t\t\t\tH1l = H1.low = H1l + bl;\n\t\t\t\tH1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);\n\t\t\t\tH2l = H2.low = H2l + cl;\n\t\t\t\tH2.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);\n\t\t\t\tH3l = H3.low = H3l + dl;\n\t\t\t\tH3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);\n\t\t\t\tH4l = H4.low = H4l + el;\n\t\t\t\tH4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);\n\t\t\t\tH5l = H5.low = H5l + fl;\n\t\t\t\tH5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);\n\t\t\t\tH6l = H6.low = H6l + gl;\n\t\t\t\tH6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);\n\t\t\t\tH7l = H7.low = H7l + hl;\n\t\t\t\tH7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);\n\t\t\t},\n\n\t\t\t_doFinalize: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar data = this._data;\n\t\t\t\tvar dataWords = data.words;\n\n\t\t\t\tvar nBitsTotal = this._nDataBytes * 8;\n\t\t\t\tvar nBitsLeft = data.sigBytes * 8;\n\n\t\t\t\t// Add padding\n\t\t\t\tdataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;\n\t\t\t\tdataWords[(nBitsLeft + 128 >>> 10 << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);\n\t\t\t\tdataWords[(nBitsLeft + 128 >>> 10 << 5) + 31] = nBitsTotal;\n\t\t\t\tdata.sigBytes = dataWords.length * 4;\n\n\t\t\t\t// Hash final blocks\n\t\t\t\tthis._process();\n\n\t\t\t\t// Convert hash to 32-bit word array before returning\n\t\t\t\tvar hash = this._hash.toX32();\n\n\t\t\t\t// Return final computed hash\n\t\t\t\treturn hash;\n\t\t\t},\n\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Hasher.clone.call(this);\n\t\t\t\tclone._hash = this._hash.clone();\n\n\t\t\t\treturn clone;\n\t\t\t},\n\n\t\t\tblockSize: 1024 / 32\n\t\t});\n\n\t\t/**\n   * Shortcut function to the hasher\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   *\n   * @return {WordArray} The hash.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hash = CryptoJS.SHA512(\'message\');\n   *     var hash = CryptoJS.SHA512(wordArray);\n   */\n\t\tC.SHA512 = Hasher._createHelper(SHA512);\n\n\t\t/**\n   * Shortcut function to the HMAC\'s object interface.\n   *\n   * @param {WordArray|string} message The message to hash.\n   * @param {WordArray|string} key The secret key.\n   *\n   * @return {WordArray} The HMAC.\n   *\n   * @static\n   *\n   * @example\n   *\n   *     var hmac = CryptoJS.HmacSHA512(message, key);\n   */\n\t\tC.HmacSHA512 = Hasher._createHmacHelper(SHA512);\n\t})();\n\n\treturn CryptoJS.SHA512;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/sha512.js?'
                );
              },
            './node_modules/crypto-js/tripledes.js':
              /*!*********************************************!*\
        !*** ./node_modules/crypto-js/tripledes.js ***!
        \*********************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory, undef) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"), __webpack_require__(/*! ./enc-base64 */ "./node_modules/crypto-js/enc-base64.js"), __webpack_require__(/*! ./md5 */ "./node_modules/crypto-js/md5.js"), __webpack_require__(/*! ./evpkdf */ "./node_modules/crypto-js/evpkdf.js"), __webpack_require__(/*! ./cipher-core */ "./node_modules/crypto-js/cipher-core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function () {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar WordArray = C_lib.WordArray;\n\t\tvar BlockCipher = C_lib.BlockCipher;\n\t\tvar C_algo = C.algo;\n\n\t\t// Permuted Choice 1 constants\n\t\tvar PC1 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];\n\n\t\t// Permuted Choice 2 constants\n\t\tvar PC2 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];\n\n\t\t// Cumulative bit shift constants\n\t\tvar BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];\n\n\t\t// SBOXes and round permutation constants\n\t\tvar SBOX_P = [{\n\t\t\t0x0: 0x808200,\n\t\t\t0x10000000: 0x8000,\n\t\t\t0x20000000: 0x808002,\n\t\t\t0x30000000: 0x2,\n\t\t\t0x40000000: 0x200,\n\t\t\t0x50000000: 0x808202,\n\t\t\t0x60000000: 0x800202,\n\t\t\t0x70000000: 0x800000,\n\t\t\t0x80000000: 0x202,\n\t\t\t0x90000000: 0x800200,\n\t\t\t0xa0000000: 0x8200,\n\t\t\t0xb0000000: 0x808000,\n\t\t\t0xc0000000: 0x8002,\n\t\t\t0xd0000000: 0x800002,\n\t\t\t0xe0000000: 0x0,\n\t\t\t0xf0000000: 0x8202,\n\t\t\t0x8000000: 0x0,\n\t\t\t0x18000000: 0x808202,\n\t\t\t0x28000000: 0x8202,\n\t\t\t0x38000000: 0x8000,\n\t\t\t0x48000000: 0x808200,\n\t\t\t0x58000000: 0x200,\n\t\t\t0x68000000: 0x808002,\n\t\t\t0x78000000: 0x2,\n\t\t\t0x88000000: 0x800200,\n\t\t\t0x98000000: 0x8200,\n\t\t\t0xa8000000: 0x808000,\n\t\t\t0xb8000000: 0x800202,\n\t\t\t0xc8000000: 0x800002,\n\t\t\t0xd8000000: 0x8002,\n\t\t\t0xe8000000: 0x202,\n\t\t\t0xf8000000: 0x800000,\n\t\t\t0x1: 0x8000,\n\t\t\t0x10000001: 0x2,\n\t\t\t0x20000001: 0x808200,\n\t\t\t0x30000001: 0x800000,\n\t\t\t0x40000001: 0x808002,\n\t\t\t0x50000001: 0x8200,\n\t\t\t0x60000001: 0x200,\n\t\t\t0x70000001: 0x800202,\n\t\t\t0x80000001: 0x808202,\n\t\t\t0x90000001: 0x808000,\n\t\t\t0xa0000001: 0x800002,\n\t\t\t0xb0000001: 0x8202,\n\t\t\t0xc0000001: 0x202,\n\t\t\t0xd0000001: 0x800200,\n\t\t\t0xe0000001: 0x8002,\n\t\t\t0xf0000001: 0x0,\n\t\t\t0x8000001: 0x808202,\n\t\t\t0x18000001: 0x808000,\n\t\t\t0x28000001: 0x800000,\n\t\t\t0x38000001: 0x200,\n\t\t\t0x48000001: 0x8000,\n\t\t\t0x58000001: 0x800002,\n\t\t\t0x68000001: 0x2,\n\t\t\t0x78000001: 0x8202,\n\t\t\t0x88000001: 0x8002,\n\t\t\t0x98000001: 0x800202,\n\t\t\t0xa8000001: 0x202,\n\t\t\t0xb8000001: 0x808200,\n\t\t\t0xc8000001: 0x800200,\n\t\t\t0xd8000001: 0x0,\n\t\t\t0xe8000001: 0x8200,\n\t\t\t0xf8000001: 0x808002\n\t\t}, {\n\t\t\t0x0: 0x40084010,\n\t\t\t0x1000000: 0x4000,\n\t\t\t0x2000000: 0x80000,\n\t\t\t0x3000000: 0x40080010,\n\t\t\t0x4000000: 0x40000010,\n\t\t\t0x5000000: 0x40084000,\n\t\t\t0x6000000: 0x40004000,\n\t\t\t0x7000000: 0x10,\n\t\t\t0x8000000: 0x84000,\n\t\t\t0x9000000: 0x40004010,\n\t\t\t0xa000000: 0x40000000,\n\t\t\t0xb000000: 0x84010,\n\t\t\t0xc000000: 0x80010,\n\t\t\t0xd000000: 0x0,\n\t\t\t0xe000000: 0x4010,\n\t\t\t0xf000000: 0x40080000,\n\t\t\t0x800000: 0x40004000,\n\t\t\t0x1800000: 0x84010,\n\t\t\t0x2800000: 0x10,\n\t\t\t0x3800000: 0x40004010,\n\t\t\t0x4800000: 0x40084010,\n\t\t\t0x5800000: 0x40000000,\n\t\t\t0x6800000: 0x80000,\n\t\t\t0x7800000: 0x40080010,\n\t\t\t0x8800000: 0x80010,\n\t\t\t0x9800000: 0x0,\n\t\t\t0xa800000: 0x4000,\n\t\t\t0xb800000: 0x40080000,\n\t\t\t0xc800000: 0x40000010,\n\t\t\t0xd800000: 0x84000,\n\t\t\t0xe800000: 0x40084000,\n\t\t\t0xf800000: 0x4010,\n\t\t\t0x10000000: 0x0,\n\t\t\t0x11000000: 0x40080010,\n\t\t\t0x12000000: 0x40004010,\n\t\t\t0x13000000: 0x40084000,\n\t\t\t0x14000000: 0x40080000,\n\t\t\t0x15000000: 0x10,\n\t\t\t0x16000000: 0x84010,\n\t\t\t0x17000000: 0x4000,\n\t\t\t0x18000000: 0x4010,\n\t\t\t0x19000000: 0x80000,\n\t\t\t0x1a000000: 0x80010,\n\t\t\t0x1b000000: 0x40000010,\n\t\t\t0x1c000000: 0x84000,\n\t\t\t0x1d000000: 0x40004000,\n\t\t\t0x1e000000: 0x40000000,\n\t\t\t0x1f000000: 0x40084010,\n\t\t\t0x10800000: 0x84010,\n\t\t\t0x11800000: 0x80000,\n\t\t\t0x12800000: 0x40080000,\n\t\t\t0x13800000: 0x4000,\n\t\t\t0x14800000: 0x40004000,\n\t\t\t0x15800000: 0x40084010,\n\t\t\t0x16800000: 0x10,\n\t\t\t0x17800000: 0x40000000,\n\t\t\t0x18800000: 0x40084000,\n\t\t\t0x19800000: 0x40000010,\n\t\t\t0x1a800000: 0x40004010,\n\t\t\t0x1b800000: 0x80010,\n\t\t\t0x1c800000: 0x0,\n\t\t\t0x1d800000: 0x4010,\n\t\t\t0x1e800000: 0x40080010,\n\t\t\t0x1f800000: 0x84000\n\t\t}, {\n\t\t\t0x0: 0x104,\n\t\t\t0x100000: 0x0,\n\t\t\t0x200000: 0x4000100,\n\t\t\t0x300000: 0x10104,\n\t\t\t0x400000: 0x10004,\n\t\t\t0x500000: 0x4000004,\n\t\t\t0x600000: 0x4010104,\n\t\t\t0x700000: 0x4010000,\n\t\t\t0x800000: 0x4000000,\n\t\t\t0x900000: 0x4010100,\n\t\t\t0xa00000: 0x10100,\n\t\t\t0xb00000: 0x4010004,\n\t\t\t0xc00000: 0x4000104,\n\t\t\t0xd00000: 0x10000,\n\t\t\t0xe00000: 0x4,\n\t\t\t0xf00000: 0x100,\n\t\t\t0x80000: 0x4010100,\n\t\t\t0x180000: 0x4010004,\n\t\t\t0x280000: 0x0,\n\t\t\t0x380000: 0x4000100,\n\t\t\t0x480000: 0x4000004,\n\t\t\t0x580000: 0x10000,\n\t\t\t0x680000: 0x10004,\n\t\t\t0x780000: 0x104,\n\t\t\t0x880000: 0x4,\n\t\t\t0x980000: 0x100,\n\t\t\t0xa80000: 0x4010000,\n\t\t\t0xb80000: 0x10104,\n\t\t\t0xc80000: 0x10100,\n\t\t\t0xd80000: 0x4000104,\n\t\t\t0xe80000: 0x4010104,\n\t\t\t0xf80000: 0x4000000,\n\t\t\t0x1000000: 0x4010100,\n\t\t\t0x1100000: 0x10004,\n\t\t\t0x1200000: 0x10000,\n\t\t\t0x1300000: 0x4000100,\n\t\t\t0x1400000: 0x100,\n\t\t\t0x1500000: 0x4010104,\n\t\t\t0x1600000: 0x4000004,\n\t\t\t0x1700000: 0x0,\n\t\t\t0x1800000: 0x4000104,\n\t\t\t0x1900000: 0x4000000,\n\t\t\t0x1a00000: 0x4,\n\t\t\t0x1b00000: 0x10100,\n\t\t\t0x1c00000: 0x4010000,\n\t\t\t0x1d00000: 0x104,\n\t\t\t0x1e00000: 0x10104,\n\t\t\t0x1f00000: 0x4010004,\n\t\t\t0x1080000: 0x4000000,\n\t\t\t0x1180000: 0x104,\n\t\t\t0x1280000: 0x4010100,\n\t\t\t0x1380000: 0x0,\n\t\t\t0x1480000: 0x10004,\n\t\t\t0x1580000: 0x4000100,\n\t\t\t0x1680000: 0x100,\n\t\t\t0x1780000: 0x4010004,\n\t\t\t0x1880000: 0x10000,\n\t\t\t0x1980000: 0x4010104,\n\t\t\t0x1a80000: 0x10104,\n\t\t\t0x1b80000: 0x4000004,\n\t\t\t0x1c80000: 0x4000104,\n\t\t\t0x1d80000: 0x4010000,\n\t\t\t0x1e80000: 0x4,\n\t\t\t0x1f80000: 0x10100\n\t\t}, {\n\t\t\t0x0: 0x80401000,\n\t\t\t0x10000: 0x80001040,\n\t\t\t0x20000: 0x401040,\n\t\t\t0x30000: 0x80400000,\n\t\t\t0x40000: 0x0,\n\t\t\t0x50000: 0x401000,\n\t\t\t0x60000: 0x80000040,\n\t\t\t0x70000: 0x400040,\n\t\t\t0x80000: 0x80000000,\n\t\t\t0x90000: 0x400000,\n\t\t\t0xa0000: 0x40,\n\t\t\t0xb0000: 0x80001000,\n\t\t\t0xc0000: 0x80400040,\n\t\t\t0xd0000: 0x1040,\n\t\t\t0xe0000: 0x1000,\n\t\t\t0xf0000: 0x80401040,\n\t\t\t0x8000: 0x80001040,\n\t\t\t0x18000: 0x40,\n\t\t\t0x28000: 0x80400040,\n\t\t\t0x38000: 0x80001000,\n\t\t\t0x48000: 0x401000,\n\t\t\t0x58000: 0x80401040,\n\t\t\t0x68000: 0x0,\n\t\t\t0x78000: 0x80400000,\n\t\t\t0x88000: 0x1000,\n\t\t\t0x98000: 0x80401000,\n\t\t\t0xa8000: 0x400000,\n\t\t\t0xb8000: 0x1040,\n\t\t\t0xc8000: 0x80000000,\n\t\t\t0xd8000: 0x400040,\n\t\t\t0xe8000: 0x401040,\n\t\t\t0xf8000: 0x80000040,\n\t\t\t0x100000: 0x400040,\n\t\t\t0x110000: 0x401000,\n\t\t\t0x120000: 0x80000040,\n\t\t\t0x130000: 0x0,\n\t\t\t0x140000: 0x1040,\n\t\t\t0x150000: 0x80400040,\n\t\t\t0x160000: 0x80401000,\n\t\t\t0x170000: 0x80001040,\n\t\t\t0x180000: 0x80401040,\n\t\t\t0x190000: 0x80000000,\n\t\t\t0x1a0000: 0x80400000,\n\t\t\t0x1b0000: 0x401040,\n\t\t\t0x1c0000: 0x80001000,\n\t\t\t0x1d0000: 0x400000,\n\t\t\t0x1e0000: 0x40,\n\t\t\t0x1f0000: 0x1000,\n\t\t\t0x108000: 0x80400000,\n\t\t\t0x118000: 0x80401040,\n\t\t\t0x128000: 0x0,\n\t\t\t0x138000: 0x401000,\n\t\t\t0x148000: 0x400040,\n\t\t\t0x158000: 0x80000000,\n\t\t\t0x168000: 0x80001040,\n\t\t\t0x178000: 0x40,\n\t\t\t0x188000: 0x80000040,\n\t\t\t0x198000: 0x1000,\n\t\t\t0x1a8000: 0x80001000,\n\t\t\t0x1b8000: 0x80400040,\n\t\t\t0x1c8000: 0x1040,\n\t\t\t0x1d8000: 0x80401000,\n\t\t\t0x1e8000: 0x400000,\n\t\t\t0x1f8000: 0x401040\n\t\t}, {\n\t\t\t0x0: 0x80,\n\t\t\t0x1000: 0x1040000,\n\t\t\t0x2000: 0x40000,\n\t\t\t0x3000: 0x20000000,\n\t\t\t0x4000: 0x20040080,\n\t\t\t0x5000: 0x1000080,\n\t\t\t0x6000: 0x21000080,\n\t\t\t0x7000: 0x40080,\n\t\t\t0x8000: 0x1000000,\n\t\t\t0x9000: 0x20040000,\n\t\t\t0xa000: 0x20000080,\n\t\t\t0xb000: 0x21040080,\n\t\t\t0xc000: 0x21040000,\n\t\t\t0xd000: 0x0,\n\t\t\t0xe000: 0x1040080,\n\t\t\t0xf000: 0x21000000,\n\t\t\t0x800: 0x1040080,\n\t\t\t0x1800: 0x21000080,\n\t\t\t0x2800: 0x80,\n\t\t\t0x3800: 0x1040000,\n\t\t\t0x4800: 0x40000,\n\t\t\t0x5800: 0x20040080,\n\t\t\t0x6800: 0x21040000,\n\t\t\t0x7800: 0x20000000,\n\t\t\t0x8800: 0x20040000,\n\t\t\t0x9800: 0x0,\n\t\t\t0xa800: 0x21040080,\n\t\t\t0xb800: 0x1000080,\n\t\t\t0xc800: 0x20000080,\n\t\t\t0xd800: 0x21000000,\n\t\t\t0xe800: 0x1000000,\n\t\t\t0xf800: 0x40080,\n\t\t\t0x10000: 0x40000,\n\t\t\t0x11000: 0x80,\n\t\t\t0x12000: 0x20000000,\n\t\t\t0x13000: 0x21000080,\n\t\t\t0x14000: 0x1000080,\n\t\t\t0x15000: 0x21040000,\n\t\t\t0x16000: 0x20040080,\n\t\t\t0x17000: 0x1000000,\n\t\t\t0x18000: 0x21040080,\n\t\t\t0x19000: 0x21000000,\n\t\t\t0x1a000: 0x1040000,\n\t\t\t0x1b000: 0x20040000,\n\t\t\t0x1c000: 0x40080,\n\t\t\t0x1d000: 0x20000080,\n\t\t\t0x1e000: 0x0,\n\t\t\t0x1f000: 0x1040080,\n\t\t\t0x10800: 0x21000080,\n\t\t\t0x11800: 0x1000000,\n\t\t\t0x12800: 0x1040000,\n\t\t\t0x13800: 0x20040080,\n\t\t\t0x14800: 0x20000000,\n\t\t\t0x15800: 0x1040080,\n\t\t\t0x16800: 0x80,\n\t\t\t0x17800: 0x21040000,\n\t\t\t0x18800: 0x40080,\n\t\t\t0x19800: 0x21040080,\n\t\t\t0x1a800: 0x0,\n\t\t\t0x1b800: 0x21000000,\n\t\t\t0x1c800: 0x1000080,\n\t\t\t0x1d800: 0x40000,\n\t\t\t0x1e800: 0x20040000,\n\t\t\t0x1f800: 0x20000080\n\t\t}, {\n\t\t\t0x0: 0x10000008,\n\t\t\t0x100: 0x2000,\n\t\t\t0x200: 0x10200000,\n\t\t\t0x300: 0x10202008,\n\t\t\t0x400: 0x10002000,\n\t\t\t0x500: 0x200000,\n\t\t\t0x600: 0x200008,\n\t\t\t0x700: 0x10000000,\n\t\t\t0x800: 0x0,\n\t\t\t0x900: 0x10002008,\n\t\t\t0xa00: 0x202000,\n\t\t\t0xb00: 0x8,\n\t\t\t0xc00: 0x10200008,\n\t\t\t0xd00: 0x202008,\n\t\t\t0xe00: 0x2008,\n\t\t\t0xf00: 0x10202000,\n\t\t\t0x80: 0x10200000,\n\t\t\t0x180: 0x10202008,\n\t\t\t0x280: 0x8,\n\t\t\t0x380: 0x200000,\n\t\t\t0x480: 0x202008,\n\t\t\t0x580: 0x10000008,\n\t\t\t0x680: 0x10002000,\n\t\t\t0x780: 0x2008,\n\t\t\t0x880: 0x200008,\n\t\t\t0x980: 0x2000,\n\t\t\t0xa80: 0x10002008,\n\t\t\t0xb80: 0x10200008,\n\t\t\t0xc80: 0x0,\n\t\t\t0xd80: 0x10202000,\n\t\t\t0xe80: 0x202000,\n\t\t\t0xf80: 0x10000000,\n\t\t\t0x1000: 0x10002000,\n\t\t\t0x1100: 0x10200008,\n\t\t\t0x1200: 0x10202008,\n\t\t\t0x1300: 0x2008,\n\t\t\t0x1400: 0x200000,\n\t\t\t0x1500: 0x10000000,\n\t\t\t0x1600: 0x10000008,\n\t\t\t0x1700: 0x202000,\n\t\t\t0x1800: 0x202008,\n\t\t\t0x1900: 0x0,\n\t\t\t0x1a00: 0x8,\n\t\t\t0x1b00: 0x10200000,\n\t\t\t0x1c00: 0x2000,\n\t\t\t0x1d00: 0x10002008,\n\t\t\t0x1e00: 0x10202000,\n\t\t\t0x1f00: 0x200008,\n\t\t\t0x1080: 0x8,\n\t\t\t0x1180: 0x202000,\n\t\t\t0x1280: 0x200000,\n\t\t\t0x1380: 0x10000008,\n\t\t\t0x1480: 0x10002000,\n\t\t\t0x1580: 0x2008,\n\t\t\t0x1680: 0x10202008,\n\t\t\t0x1780: 0x10200000,\n\t\t\t0x1880: 0x10202000,\n\t\t\t0x1980: 0x10200008,\n\t\t\t0x1a80: 0x2000,\n\t\t\t0x1b80: 0x202008,\n\t\t\t0x1c80: 0x200008,\n\t\t\t0x1d80: 0x0,\n\t\t\t0x1e80: 0x10000000,\n\t\t\t0x1f80: 0x10002008\n\t\t}, {\n\t\t\t0x0: 0x100000,\n\t\t\t0x10: 0x2000401,\n\t\t\t0x20: 0x400,\n\t\t\t0x30: 0x100401,\n\t\t\t0x40: 0x2100401,\n\t\t\t0x50: 0x0,\n\t\t\t0x60: 0x1,\n\t\t\t0x70: 0x2100001,\n\t\t\t0x80: 0x2000400,\n\t\t\t0x90: 0x100001,\n\t\t\t0xa0: 0x2000001,\n\t\t\t0xb0: 0x2100400,\n\t\t\t0xc0: 0x2100000,\n\t\t\t0xd0: 0x401,\n\t\t\t0xe0: 0x100400,\n\t\t\t0xf0: 0x2000000,\n\t\t\t0x8: 0x2100001,\n\t\t\t0x18: 0x0,\n\t\t\t0x28: 0x2000401,\n\t\t\t0x38: 0x2100400,\n\t\t\t0x48: 0x100000,\n\t\t\t0x58: 0x2000001,\n\t\t\t0x68: 0x2000000,\n\t\t\t0x78: 0x401,\n\t\t\t0x88: 0x100401,\n\t\t\t0x98: 0x2000400,\n\t\t\t0xa8: 0x2100000,\n\t\t\t0xb8: 0x100001,\n\t\t\t0xc8: 0x400,\n\t\t\t0xd8: 0x2100401,\n\t\t\t0xe8: 0x1,\n\t\t\t0xf8: 0x100400,\n\t\t\t0x100: 0x2000000,\n\t\t\t0x110: 0x100000,\n\t\t\t0x120: 0x2000401,\n\t\t\t0x130: 0x2100001,\n\t\t\t0x140: 0x100001,\n\t\t\t0x150: 0x2000400,\n\t\t\t0x160: 0x2100400,\n\t\t\t0x170: 0x100401,\n\t\t\t0x180: 0x401,\n\t\t\t0x190: 0x2100401,\n\t\t\t0x1a0: 0x100400,\n\t\t\t0x1b0: 0x1,\n\t\t\t0x1c0: 0x0,\n\t\t\t0x1d0: 0x2100000,\n\t\t\t0x1e0: 0x2000001,\n\t\t\t0x1f0: 0x400,\n\t\t\t0x108: 0x100400,\n\t\t\t0x118: 0x2000401,\n\t\t\t0x128: 0x2100001,\n\t\t\t0x138: 0x1,\n\t\t\t0x148: 0x2000000,\n\t\t\t0x158: 0x100000,\n\t\t\t0x168: 0x401,\n\t\t\t0x178: 0x2100400,\n\t\t\t0x188: 0x2000001,\n\t\t\t0x198: 0x2100000,\n\t\t\t0x1a8: 0x0,\n\t\t\t0x1b8: 0x2100401,\n\t\t\t0x1c8: 0x100401,\n\t\t\t0x1d8: 0x400,\n\t\t\t0x1e8: 0x2000400,\n\t\t\t0x1f8: 0x100001\n\t\t}, {\n\t\t\t0x0: 0x8000820,\n\t\t\t0x1: 0x20000,\n\t\t\t0x2: 0x8000000,\n\t\t\t0x3: 0x20,\n\t\t\t0x4: 0x20020,\n\t\t\t0x5: 0x8020820,\n\t\t\t0x6: 0x8020800,\n\t\t\t0x7: 0x800,\n\t\t\t0x8: 0x8020000,\n\t\t\t0x9: 0x8000800,\n\t\t\t0xa: 0x20800,\n\t\t\t0xb: 0x8020020,\n\t\t\t0xc: 0x820,\n\t\t\t0xd: 0x0,\n\t\t\t0xe: 0x8000020,\n\t\t\t0xf: 0x20820,\n\t\t\t0x80000000: 0x800,\n\t\t\t0x80000001: 0x8020820,\n\t\t\t0x80000002: 0x8000820,\n\t\t\t0x80000003: 0x8000000,\n\t\t\t0x80000004: 0x8020000,\n\t\t\t0x80000005: 0x20800,\n\t\t\t0x80000006: 0x20820,\n\t\t\t0x80000007: 0x20,\n\t\t\t0x80000008: 0x8000020,\n\t\t\t0x80000009: 0x820,\n\t\t\t0x8000000a: 0x20020,\n\t\t\t0x8000000b: 0x8020800,\n\t\t\t0x8000000c: 0x0,\n\t\t\t0x8000000d: 0x8020020,\n\t\t\t0x8000000e: 0x8000800,\n\t\t\t0x8000000f: 0x20000,\n\t\t\t0x10: 0x20820,\n\t\t\t0x11: 0x8020800,\n\t\t\t0x12: 0x20,\n\t\t\t0x13: 0x800,\n\t\t\t0x14: 0x8000800,\n\t\t\t0x15: 0x8000020,\n\t\t\t0x16: 0x8020020,\n\t\t\t0x17: 0x20000,\n\t\t\t0x18: 0x0,\n\t\t\t0x19: 0x20020,\n\t\t\t0x1a: 0x8020000,\n\t\t\t0x1b: 0x8000820,\n\t\t\t0x1c: 0x8020820,\n\t\t\t0x1d: 0x20800,\n\t\t\t0x1e: 0x820,\n\t\t\t0x1f: 0x8000000,\n\t\t\t0x80000010: 0x20000,\n\t\t\t0x80000011: 0x800,\n\t\t\t0x80000012: 0x8020020,\n\t\t\t0x80000013: 0x20820,\n\t\t\t0x80000014: 0x20,\n\t\t\t0x80000015: 0x8020000,\n\t\t\t0x80000016: 0x8000000,\n\t\t\t0x80000017: 0x8000820,\n\t\t\t0x80000018: 0x8020820,\n\t\t\t0x80000019: 0x8000020,\n\t\t\t0x8000001a: 0x8000800,\n\t\t\t0x8000001b: 0x0,\n\t\t\t0x8000001c: 0x20800,\n\t\t\t0x8000001d: 0x820,\n\t\t\t0x8000001e: 0x20020,\n\t\t\t0x8000001f: 0x8020800\n\t\t}];\n\n\t\t// Masks that select the SBOX input\n\t\tvar SBOX_MASK = [0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000, 0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f];\n\n\t\t/**\n   * DES block cipher algorithm.\n   */\n\t\tvar DES = C_algo.DES = BlockCipher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar key = this._key;\n\t\t\t\tvar keyWords = key.words;\n\n\t\t\t\t// Select 56 bits according to PC1\n\t\t\t\tvar keyBits = [];\n\t\t\t\tfor (var i = 0; i < 56; i++) {\n\t\t\t\t\tvar keyBitPos = PC1[i] - 1;\n\t\t\t\t\tkeyBits[i] = keyWords[keyBitPos >>> 5] >>> 31 - keyBitPos % 32 & 1;\n\t\t\t\t}\n\n\t\t\t\t// Assemble 16 subkeys\n\t\t\t\tvar subKeys = this._subKeys = [];\n\t\t\t\tfor (var nSubKey = 0; nSubKey < 16; nSubKey++) {\n\t\t\t\t\t// Create subkey\n\t\t\t\t\tvar subKey = subKeys[nSubKey] = [];\n\n\t\t\t\t\t// Shortcut\n\t\t\t\t\tvar bitShift = BIT_SHIFTS[nSubKey];\n\n\t\t\t\t\t// Select 48 bits according to PC2\n\t\t\t\t\tfor (var i = 0; i < 24; i++) {\n\t\t\t\t\t\t// Select from the left 28 key bits\n\t\t\t\t\t\tsubKey[i / 6 | 0] |= keyBits[(PC2[i] - 1 + bitShift) % 28] << 31 - i % 6;\n\n\t\t\t\t\t\t// Select from the right 28 key bits\n\t\t\t\t\t\tsubKey[4 + (i / 6 | 0)] |= keyBits[28 + (PC2[i + 24] - 1 + bitShift) % 28] << 31 - i % 6;\n\t\t\t\t\t}\n\n\t\t\t\t\t// Since each subkey is applied to an expanded 32-bit input,\n\t\t\t\t\t// the subkey can be broken into 8 values scaled to 32-bits,\n\t\t\t\t\t// which allows the key to be used without expansion\n\t\t\t\t\tsubKey[0] = subKey[0] << 1 | subKey[0] >>> 31;\n\t\t\t\t\tfor (var i = 1; i < 7; i++) {\n\t\t\t\t\t\tsubKey[i] = subKey[i] >>> (i - 1) * 4 + 3;\n\t\t\t\t\t}\n\t\t\t\t\tsubKey[7] = subKey[7] << 5 | subKey[7] >>> 27;\n\t\t\t\t}\n\n\t\t\t\t// Compute inverse subkeys\n\t\t\t\tvar invSubKeys = this._invSubKeys = [];\n\t\t\t\tfor (var i = 0; i < 16; i++) {\n\t\t\t\t\tinvSubKeys[i] = subKeys[15 - i];\n\t\t\t\t}\n\t\t\t},\n\n\t\t\tencryptBlock: function (M, offset) {\n\t\t\t\tthis._doCryptBlock(M, offset, this._subKeys);\n\t\t\t},\n\n\t\t\tdecryptBlock: function (M, offset) {\n\t\t\t\tthis._doCryptBlock(M, offset, this._invSubKeys);\n\t\t\t},\n\n\t\t\t_doCryptBlock: function (M, offset, subKeys) {\n\t\t\t\t// Get input\n\t\t\t\tthis._lBlock = M[offset];\n\t\t\t\tthis._rBlock = M[offset + 1];\n\n\t\t\t\t// Initial permutation\n\t\t\t\texchangeLR.call(this, 4, 0x0f0f0f0f);\n\t\t\t\texchangeLR.call(this, 16, 0x0000ffff);\n\t\t\t\texchangeRL.call(this, 2, 0x33333333);\n\t\t\t\texchangeRL.call(this, 8, 0x00ff00ff);\n\t\t\t\texchangeLR.call(this, 1, 0x55555555);\n\n\t\t\t\t// Rounds\n\t\t\t\tfor (var round = 0; round < 16; round++) {\n\t\t\t\t\t// Shortcuts\n\t\t\t\t\tvar subKey = subKeys[round];\n\t\t\t\t\tvar lBlock = this._lBlock;\n\t\t\t\t\tvar rBlock = this._rBlock;\n\n\t\t\t\t\t// Feistel function\n\t\t\t\t\tvar f = 0;\n\t\t\t\t\tfor (var i = 0; i < 8; i++) {\n\t\t\t\t\t\tf |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];\n\t\t\t\t\t}\n\t\t\t\t\tthis._lBlock = rBlock;\n\t\t\t\t\tthis._rBlock = lBlock ^ f;\n\t\t\t\t}\n\n\t\t\t\t// Undo swap from last round\n\t\t\t\tvar t = this._lBlock;\n\t\t\t\tthis._lBlock = this._rBlock;\n\t\t\t\tthis._rBlock = t;\n\n\t\t\t\t// Final permutation\n\t\t\t\texchangeLR.call(this, 1, 0x55555555);\n\t\t\t\texchangeRL.call(this, 8, 0x00ff00ff);\n\t\t\t\texchangeRL.call(this, 2, 0x33333333);\n\t\t\t\texchangeLR.call(this, 16, 0x0000ffff);\n\t\t\t\texchangeLR.call(this, 4, 0x0f0f0f0f);\n\n\t\t\t\t// Set output\n\t\t\t\tM[offset] = this._lBlock;\n\t\t\t\tM[offset + 1] = this._rBlock;\n\t\t\t},\n\n\t\t\tkeySize: 64 / 32,\n\n\t\t\tivSize: 64 / 32,\n\n\t\t\tblockSize: 64 / 32\n\t\t});\n\n\t\t// Swap bits across the left and right words\n\t\tfunction exchangeLR(offset, mask) {\n\t\t\tvar t = (this._lBlock >>> offset ^ this._rBlock) & mask;\n\t\t\tthis._rBlock ^= t;\n\t\t\tthis._lBlock ^= t << offset;\n\t\t}\n\n\t\tfunction exchangeRL(offset, mask) {\n\t\t\tvar t = (this._rBlock >>> offset ^ this._lBlock) & mask;\n\t\t\tthis._lBlock ^= t;\n\t\t\tthis._rBlock ^= t << offset;\n\t\t}\n\n\t\t/**\n   * Shortcut functions to the cipher\'s object interface.\n   *\n   * @example\n   *\n   *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);\n   *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);\n   */\n\t\tC.DES = BlockCipher._createHelper(DES);\n\n\t\t/**\n   * Triple-DES block cipher algorithm.\n   */\n\t\tvar TripleDES = C_algo.TripleDES = BlockCipher.extend({\n\t\t\t_doReset: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar key = this._key;\n\t\t\t\tvar keyWords = key.words;\n\n\t\t\t\t// Create DES instances\n\t\t\t\tthis._des1 = DES.createEncryptor(WordArray.create(keyWords.slice(0, 2)));\n\t\t\t\tthis._des2 = DES.createEncryptor(WordArray.create(keyWords.slice(2, 4)));\n\t\t\t\tthis._des3 = DES.createEncryptor(WordArray.create(keyWords.slice(4, 6)));\n\t\t\t},\n\n\t\t\tencryptBlock: function (M, offset) {\n\t\t\t\tthis._des1.encryptBlock(M, offset);\n\t\t\t\tthis._des2.decryptBlock(M, offset);\n\t\t\t\tthis._des3.encryptBlock(M, offset);\n\t\t\t},\n\n\t\t\tdecryptBlock: function (M, offset) {\n\t\t\t\tthis._des3.decryptBlock(M, offset);\n\t\t\t\tthis._des2.encryptBlock(M, offset);\n\t\t\t\tthis._des1.decryptBlock(M, offset);\n\t\t\t},\n\n\t\t\tkeySize: 192 / 32,\n\n\t\t\tivSize: 64 / 32,\n\n\t\t\tblockSize: 64 / 32\n\t\t});\n\n\t\t/**\n   * Shortcut functions to the cipher\'s object interface.\n   *\n   * @example\n   *\n   *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);\n   *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);\n   */\n\t\tC.TripleDES = BlockCipher._createHelper(TripleDES);\n\t})();\n\n\treturn CryptoJS.TripleDES;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/tripledes.js?'
                );
              },
            './node_modules/crypto-js/x64-core.js':
              /*!********************************************!*\
        !*** ./node_modules/crypto-js/x64-core.js ***!
        \********************************************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                eval(
                  ';(function (root, factory) {\n\tif (true) {\n\t\t// CommonJS\n\t\tmodule.exports = exports = factory(__webpack_require__(/*! ./core */ "./node_modules/crypto-js/core.js"));\n\t} else {}\n})(this, function (CryptoJS) {\n\n\t(function (undefined) {\n\t\t// Shortcuts\n\t\tvar C = CryptoJS;\n\t\tvar C_lib = C.lib;\n\t\tvar Base = C_lib.Base;\n\t\tvar X32WordArray = C_lib.WordArray;\n\n\t\t/**\n   * x64 namespace.\n   */\n\t\tvar C_x64 = C.x64 = {};\n\n\t\t/**\n   * A 64-bit word.\n   */\n\t\tvar X64Word = C_x64.Word = Base.extend({\n\t\t\t/**\n    * Initializes a newly created 64-bit word.\n    *\n    * @param {number} high The high 32 bits.\n    * @param {number} low The low 32 bits.\n    *\n    * @example\n    *\n    *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);\n    */\n\t\t\tinit: function (high, low) {\n\t\t\t\tthis.high = high;\n\t\t\t\tthis.low = low;\n\t\t\t}\n\n\t\t\t/**\n    * Bitwise NOTs this word.\n    *\n    * @return {X64Word} A new x64-Word object after negating.\n    *\n    * @example\n    *\n    *     var negated = x64Word.not();\n    */\n\t\t\t// not: function () {\n\t\t\t// var high = ~this.high;\n\t\t\t// var low = ~this.low;\n\n\t\t\t// return X64Word.create(high, low);\n\t\t\t// },\n\n\t\t\t/**\n    * Bitwise ANDs this word with the passed word.\n    *\n    * @param {X64Word} word The x64-Word to AND with this word.\n    *\n    * @return {X64Word} A new x64-Word object after ANDing.\n    *\n    * @example\n    *\n    *     var anded = x64Word.and(anotherX64Word);\n    */\n\t\t\t// and: function (word) {\n\t\t\t// var high = this.high & word.high;\n\t\t\t// var low = this.low & word.low;\n\n\t\t\t// return X64Word.create(high, low);\n\t\t\t// },\n\n\t\t\t/**\n    * Bitwise ORs this word with the passed word.\n    *\n    * @param {X64Word} word The x64-Word to OR with this word.\n    *\n    * @return {X64Word} A new x64-Word object after ORing.\n    *\n    * @example\n    *\n    *     var ored = x64Word.or(anotherX64Word);\n    */\n\t\t\t// or: function (word) {\n\t\t\t// var high = this.high | word.high;\n\t\t\t// var low = this.low | word.low;\n\n\t\t\t// return X64Word.create(high, low);\n\t\t\t// },\n\n\t\t\t/**\n    * Bitwise XORs this word with the passed word.\n    *\n    * @param {X64Word} word The x64-Word to XOR with this word.\n    *\n    * @return {X64Word} A new x64-Word object after XORing.\n    *\n    * @example\n    *\n    *     var xored = x64Word.xor(anotherX64Word);\n    */\n\t\t\t// xor: function (word) {\n\t\t\t// var high = this.high ^ word.high;\n\t\t\t// var low = this.low ^ word.low;\n\n\t\t\t// return X64Word.create(high, low);\n\t\t\t// },\n\n\t\t\t/**\n    * Shifts this word n bits to the left.\n    *\n    * @param {number} n The number of bits to shift.\n    *\n    * @return {X64Word} A new x64-Word object after shifting.\n    *\n    * @example\n    *\n    *     var shifted = x64Word.shiftL(25);\n    */\n\t\t\t// shiftL: function (n) {\n\t\t\t// if (n < 32) {\n\t\t\t// var high = (this.high << n) | (this.low >>> (32 - n));\n\t\t\t// var low = this.low << n;\n\t\t\t// } else {\n\t\t\t// var high = this.low << (n - 32);\n\t\t\t// var low = 0;\n\t\t\t// }\n\n\t\t\t// return X64Word.create(high, low);\n\t\t\t// },\n\n\t\t\t/**\n    * Shifts this word n bits to the right.\n    *\n    * @param {number} n The number of bits to shift.\n    *\n    * @return {X64Word} A new x64-Word object after shifting.\n    *\n    * @example\n    *\n    *     var shifted = x64Word.shiftR(7);\n    */\n\t\t\t// shiftR: function (n) {\n\t\t\t// if (n < 32) {\n\t\t\t// var low = (this.low >>> n) | (this.high << (32 - n));\n\t\t\t// var high = this.high >>> n;\n\t\t\t// } else {\n\t\t\t// var low = this.high >>> (n - 32);\n\t\t\t// var high = 0;\n\t\t\t// }\n\n\t\t\t// return X64Word.create(high, low);\n\t\t\t// },\n\n\t\t\t/**\n    * Rotates this word n bits to the left.\n    *\n    * @param {number} n The number of bits to rotate.\n    *\n    * @return {X64Word} A new x64-Word object after rotating.\n    *\n    * @example\n    *\n    *     var rotated = x64Word.rotL(25);\n    */\n\t\t\t// rotL: function (n) {\n\t\t\t// return this.shiftL(n).or(this.shiftR(64 - n));\n\t\t\t// },\n\n\t\t\t/**\n    * Rotates this word n bits to the right.\n    *\n    * @param {number} n The number of bits to rotate.\n    *\n    * @return {X64Word} A new x64-Word object after rotating.\n    *\n    * @example\n    *\n    *     var rotated = x64Word.rotR(7);\n    */\n\t\t\t// rotR: function (n) {\n\t\t\t// return this.shiftR(n).or(this.shiftL(64 - n));\n\t\t\t// },\n\n\t\t\t/**\n    * Adds this word with the passed word.\n    *\n    * @param {X64Word} word The x64-Word to add with this word.\n    *\n    * @return {X64Word} A new x64-Word object after adding.\n    *\n    * @example\n    *\n    *     var added = x64Word.add(anotherX64Word);\n    */\n\t\t\t// add: function (word) {\n\t\t\t// var low = (this.low + word.low) | 0;\n\t\t\t// var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;\n\t\t\t// var high = (this.high + word.high + carry) | 0;\n\n\t\t\t// return X64Word.create(high, low);\n\t\t\t// }\n\t\t});\n\n\t\t/**\n   * An array of 64-bit words.\n   *\n   * @property {Array} words The array of CryptoJS.x64.Word objects.\n   * @property {number} sigBytes The number of significant bytes in this word array.\n   */\n\t\tvar X64WordArray = C_x64.WordArray = Base.extend({\n\t\t\t/**\n    * Initializes a newly created word array.\n    *\n    * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.\n    * @param {number} sigBytes (Optional) The number of significant bytes in the words.\n    *\n    * @example\n    *\n    *     var wordArray = CryptoJS.x64.WordArray.create();\n    *\n    *     var wordArray = CryptoJS.x64.WordArray.create([\n    *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),\n    *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)\n    *     ]);\n    *\n    *     var wordArray = CryptoJS.x64.WordArray.create([\n    *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),\n    *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)\n    *     ], 10);\n    */\n\t\t\tinit: function (words, sigBytes) {\n\t\t\t\twords = this.words = words || [];\n\n\t\t\t\tif (sigBytes != undefined) {\n\t\t\t\t\tthis.sigBytes = sigBytes;\n\t\t\t\t} else {\n\t\t\t\t\tthis.sigBytes = words.length * 8;\n\t\t\t\t}\n\t\t\t},\n\n\t\t\t/**\n    * Converts this 64-bit word array to a 32-bit word array.\n    *\n    * @return {CryptoJS.lib.WordArray} This word array\'s data as a 32-bit word array.\n    *\n    * @example\n    *\n    *     var x32WordArray = x64WordArray.toX32();\n    */\n\t\t\ttoX32: function () {\n\t\t\t\t// Shortcuts\n\t\t\t\tvar x64Words = this.words;\n\t\t\t\tvar x64WordsLength = x64Words.length;\n\n\t\t\t\t// Convert\n\t\t\t\tvar x32Words = [];\n\t\t\t\tfor (var i = 0; i < x64WordsLength; i++) {\n\t\t\t\t\tvar x64Word = x64Words[i];\n\t\t\t\t\tx32Words.push(x64Word.high);\n\t\t\t\t\tx32Words.push(x64Word.low);\n\t\t\t\t}\n\n\t\t\t\treturn X32WordArray.create(x32Words, this.sigBytes);\n\t\t\t},\n\n\t\t\t/**\n    * Creates a copy of this word array.\n    *\n    * @return {X64WordArray} The clone.\n    *\n    * @example\n    *\n    *     var clone = x64WordArray.clone();\n    */\n\t\t\tclone: function () {\n\t\t\t\tvar clone = Base.clone.call(this);\n\n\t\t\t\t// Clone "words" array\n\t\t\t\tvar words = clone.words = this.words.slice(0);\n\n\t\t\t\t// Clone each X64Word object\n\t\t\t\tvar wordsLength = words.length;\n\t\t\t\tfor (var i = 0; i < wordsLength; i++) {\n\t\t\t\t\twords[i] = words[i].clone();\n\t\t\t\t}\n\n\t\t\t\treturn clone;\n\t\t\t}\n\t\t});\n\t})();\n\n\treturn CryptoJS;\n});\n\n//# sourceURL=webpack://BaseEncryption/./node_modules/crypto-js/x64-core.js?'
                );
              },
            './src/index.js':
              /*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/
              /*! no static exports found */
              function (module, exports, __webpack_require__) {
                'use strict';
                eval(
                  "\n\nconst CryptoJS = __webpack_require__(/*! crypto-js */ \"./node_modules/crypto-js/index.js\");\nconst AES = __webpack_require__(/*! crypto-js/aes */ \"./node_modules/crypto-js/aes.js\");\n\nconst keySize = 256;\nconst ivSize = 128;\nconst iterations = 100;\nconst length = 32;\nconst ivSizeDivider = 8;\n\n// HELPERS\nfunction isObject(obj) {\n  return obj === Object(obj);\n}\n\nfunction objToString(obj) {\n  if (isObject(obj)) {\n    obj = JSON.stringify(obj);\n  }\n  return obj;\n}\n\nconst oneWayEncryption = function (data) {\n  if (data) return CryptoJS.MD5(data).toString();\n  return data;\n};\n\nconst oneWayComparation = function (cypher, compare) {\n  if (cypher && compare) {\n    return cypher === CryptoJS.MD5(compare).toString();\n  }\n  return cypher;\n};\n\nconst twoWayEncryption = function (data, passphrase) {\n  if (!data) return data;\n  if (!passphrase) return passphrase;\n\n  if (isObject(data)) {\n    data = objToString(data);\n  }\n  const salt = CryptoJS.lib.WordArray.random(ivSize / ivSizeDivider);\n  const key = CryptoJS.PBKDF2(passphrase, salt, {\n    keySize: keySize / length,\n    iterations: iterations\n  });\n  const iv = CryptoJS.lib.WordArray.random(ivSize / ivSizeDivider);\n  const encrypted = CryptoJS.AES.encrypt(objToString(data), key, {\n    iv: iv,\n    padding: CryptoJS.pad.Pkcs7,\n    mode: CryptoJS.mode.CBC\n  });\n  // salt, initialization vector will be hex 32 in length\n  const cypher = salt.toString() + iv.toString() + encrypted.toString();\n  return cypher;\n};\n\nconst twoWayDecryption = function (cypher, passphrase) {\n\n  // console.log({\n  //   twd: 1,\n  //   cypher: cypher,\n  //   passphrase: passphrase\n  // });\n\n  if (!cypher) return cypher;\n\n  if (!passphrase) return passphrase;\n\n  const salt = CryptoJS.enc.Hex.parse(cypher.substr(0, length));\n  const iv = CryptoJS.enc.Hex.parse(cypher.substr(length, length));\n  const encrypted = cypher.substring(length * 2);\n  const key = CryptoJS.PBKDF2(passphrase, salt, {\n    keySize: keySize / length,\n    iterations: iterations\n  });\n  // console.log({\n  //   twd: 2,\n  //   salt: salt,\n  //   iv: iv,\n  //   encrypted: encrypted,\n  //   key: key\n  // });\n  let decrypted = CryptoJS.AES.decrypt(encrypted, key, {\n    iv: iv,\n    padding: CryptoJS.pad.Pkcs7,\n    mode: CryptoJS.mode.CBC\n  }).toString(CryptoJS.enc.Utf8);\n\n  // console.log({\n  //   twd: 3,\n  //   decrypted:decrypted\n  // })\n  // console.log('twDec4');\n  // console.log('DECRYPED',decrypted);\n  if (decrypted.charAt(0) === '\"' && decrypted.charAt(decrypted.length - 1) === '\"') {\n    decrypted = decrypted.substr(1, decrypted.length - 2);\n  }\n\n  // console.log('twDec5');\n  // console.log('DECRYPED',decrypted);\n  return decrypted;\n};\n\nconst BaseEncryption = {\n  oneWayEncrypt: oneWayEncryption,\n  oneWayCompare: oneWayComparation,\n  twoWayEncrypt: twoWayEncryption,\n  twoWayDecrypt: twoWayDecryption\n};\n\nmodule.exports = BaseEncryption;\n\n//# sourceURL=webpack://BaseEncryption/./src/index.js?"
                );
              },
          });
        }),
        (module.exports = factory());
    },
    function (t, n) {
      t.exports = !1;
    },
    function (t, n) {
      var e = 0,
        r = Math.random();
      t.exports = function (t) {
        return 'Symbol('.concat(
          void 0 === t ? '' : t,
          ')_',
          (++e + r).toString(36)
        );
      };
    },
    function (t, n, e) {
      var r = e(7).f,
        o = e(14),
        a = e(1)('toStringTag');
      t.exports = function (t, n, e) {
        t &&
          !o((t = e ? t : t.prototype), a) &&
          r(t, a, { configurable: !0, value: n });
      };
    },
    function (t, n) {
      var e = {}.toString;
      t.exports = function (t) {
        return e.call(t).slice(8, -1);
      };
    },
    function (t, n) {
      t.exports = {};
    },
    function (t, n) {
      var e = '[object AsyncFunction]',
        r = '[object Function]',
        o = '[object GeneratorFunction]',
        a = '[object Null]',
        i = '[object Proxy]',
        s = '[object Undefined]',
        c =
          'object' == typeof global &&
          global &&
          global.Object === Object &&
          global,
        u = 'object' == typeof self && self && self.Object === Object && self,
        f = c || u || Function('return this')(),
        d = Object.prototype,
        l = d.hasOwnProperty,
        h = d.toString,
        p = f.Symbol,
        y = p ? p.toStringTag : void 0;
      function v(t) {
        return null == t
          ? void 0 === t
            ? s
            : a
          : y && y in Object(t)
          ? (function (t) {
              var n = l.call(t, y),
                e = t[y];
              try {
                t[y] = void 0;
                var r = !0;
              } catch (t) {}
              var o = h.call(t);
              r && (n ? (t[y] = e) : delete t[y]);
              return o;
            })(t)
          : (function (t) {
              return h.call(t);
            })(t);
      }
      t.exports = function (t) {
        if (
          !(function (t) {
            var n = typeof t;
            return null != t && ('object' == n || 'function' == n);
          })(t)
        )
          return !1;
        var n = v(t);
        return n == r || n == o || n == e || n == i;
      };
    },
    function (t, n, e) {
      var r = e(13),
        o = e(0),
        a = o['__core-js_shared__'] || (o['__core-js_shared__'] = {});
      (t.exports = function (t, n) {
        return a[t] || (a[t] = void 0 !== n ? n : {});
      })('versions', []).push({
        version: r.version,
        mode: e(21) ? 'pure' : 'global',
        copyright: '© 2019 Denis Pushkarev (zloirock.ru)',
      });
    },
    function (t, n) {
      t.exports = function (t, n) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: n,
        };
      };
    },
    function (t, n) {
      n.f = {}.propertyIsEnumerable;
    },
    function (t, n, e) {
      var r = e(39);
      t.exports = function (t) {
        return Object(r(t));
      };
    },
    function (t, n, e) {
      var r = e(3),
        o = e(79),
        a = e(42),
        i = e(41)('IE_PROTO'),
        s = function () {},
        c = function () {
          var t,
            n = e(35)('iframe'),
            r = a.length;
          for (
            n.style.display = 'none',
              e(59).appendChild(n),
              n.src = 'javascript:',
              (t = n.contentWindow.document).open(),
              t.write('<script>document.F=Object</script>'),
              t.close(),
              c = t.F;
            r--;

          )
            delete c.prototype[a[r]];
          return c();
        };
      t.exports =
        Object.create ||
        function (t, n) {
          var e;
          return (
            null !== t
              ? ((s.prototype = r(t)),
                (e = new s()),
                (s.prototype = null),
                (e[i] = t))
              : (e = c()),
            void 0 === n ? e : o(e, n)
          );
        };
    },
    function (t, n, e) {
      'use strict';
      var r = e(96),
        o = e(69),
        a = e(25),
        i = e(19);
      (t.exports = e(52)(
        Array,
        'Array',
        function (t, n) {
          (this._t = i(t)), (this._i = 0), (this._k = n);
        },
        function () {
          var t = this._t,
            n = this._k,
            e = this._i++;
          return !t || e >= t.length
            ? ((this._t = void 0), o(1))
            : o(0, 'keys' == n ? e : 'values' == n ? t[e] : [e, t[e]]);
        },
        'values'
      )),
        (a.Arguments = a.Array),
        r('keys'),
        r('values'),
        r('entries');
    },
    function (t, n) {
      t.exports = function (t) {
        var n = typeof t;
        return !!t && ('object' == n || 'function' == n);
      };
    },
    function (t, n, e) {
      e(53)('asyncIterator');
    },
    function (t, n, e) {
      var r = e(2),
        o = e(0).document,
        a = r(o) && r(o.createElement);
      t.exports = function (t) {
        return a ? o.createElement(t) : {};
      };
    },
    function (t, n, e) {
      var r = e(2);
      t.exports = function (t, n) {
        if (!r(t)) return t;
        var e, o;
        if (n && 'function' == typeof (e = t.toString) && !r((o = e.call(t))))
          return o;
        if ('function' == typeof (e = t.valueOf) && !r((o = e.call(t))))
          return o;
        if (!n && 'function' == typeof (e = t.toString) && !r((o = e.call(t))))
          return o;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function (t, n, e) {
      'use strict';
      var r = e(0),
        o = e(14),
        a = e(5),
        i = e(10),
        s = e(11),
        c = e(38).KEY,
        u = e(8),
        f = e(27),
        d = e(23),
        l = e(22),
        h = e(1),
        p = e(54),
        y = e(53),
        v = e(75),
        x = e(78),
        m = e(3),
        _ = e(2),
        b = e(30),
        g = e(19),
        S = e(36),
        w = e(28),
        C = e(31),
        k = e(80),
        A = e(61),
        E = e(43),
        T = e(7),
        O = e(18),
        j = A.f,
        B = T.f,
        R = k.f,
        I = r.Symbol,
        W = r.JSON,
        M = W && W.stringify,
        P = h('_hidden'),
        H = h('toPrimitive'),
        L = {}.propertyIsEnumerable,
        N = f('symbol-registry'),
        D = f('symbols'),
        F = f('op-symbols'),
        X = Object.prototype,
        J = 'function' == typeof I && !!E.f,
        z = r.QObject,
        U = !z || !z.prototype || !z.prototype.findChild,
        K =
          a &&
          u(function () {
            return (
              7 !=
              C(
                B({}, 'a', {
                  get: function () {
                    return B(this, 'a', { value: 7 }).a;
                  },
                })
              ).a
            );
          })
            ? function (t, n, e) {
                var r = j(X, n);
                r && delete X[n], B(t, n, e), r && t !== X && B(X, n, r);
              }
            : B,
        G = function (t) {
          var n = (D[t] = C(I.prototype));
          return (n._k = t), n;
        },
        q =
          J && 'symbol' == typeof I.iterator
            ? function (t) {
                return 'symbol' == typeof t;
              }
            : function (t) {
                return t instanceof I;
              },
        V = function (t, n, e) {
          return (
            t === X && V(F, n, e),
            m(t),
            (n = S(n, !0)),
            m(e),
            o(D, n)
              ? (e.enumerable
                  ? (o(t, P) && t[P][n] && (t[P][n] = !1),
                    (e = C(e, { enumerable: w(0, !1) })))
                  : (o(t, P) || B(t, P, w(1, {})), (t[P][n] = !0)),
                K(t, n, e))
              : B(t, n, e)
          );
        },
        Y = function (t, n) {
          m(t);
          for (var e, r = v((n = g(n))), o = 0, a = r.length; a > o; )
            V(t, (e = r[o++]), n[e]);
          return t;
        },
        $ = function (t) {
          var n = L.call(this, (t = S(t, !0)));
          return (
            !(this === X && o(D, t) && !o(F, t)) &&
            (!(n || !o(this, t) || !o(D, t) || (o(this, P) && this[P][t])) || n)
          );
        },
        Q = function (t, n) {
          if (((t = g(t)), (n = S(n, !0)), t !== X || !o(D, n) || o(F, n))) {
            var e = j(t, n);
            return (
              !e || !o(D, n) || (o(t, P) && t[P][n]) || (e.enumerable = !0), e
            );
          }
        },
        Z = function (t) {
          for (var n, e = R(g(t)), r = [], a = 0; e.length > a; )
            o(D, (n = e[a++])) || n == P || n == c || r.push(n);
          return r;
        },
        tt = function (t) {
          for (
            var n, e = t === X, r = R(e ? F : g(t)), a = [], i = 0;
            r.length > i;

          )
            !o(D, (n = r[i++])) || (e && !o(X, n)) || a.push(D[n]);
          return a;
        };
      J ||
        (s(
          (I = function () {
            if (this instanceof I)
              throw TypeError('Symbol is not a constructor!');
            var t = l(arguments.length > 0 ? arguments[0] : void 0),
              n = function (e) {
                this === X && n.call(F, e),
                  o(this, P) && o(this[P], t) && (this[P][t] = !1),
                  K(this, t, w(1, e));
              };
            return a && U && K(X, t, { configurable: !0, set: n }), G(t);
          }).prototype,
          'toString',
          function () {
            return this._k;
          }
        ),
        (A.f = Q),
        (T.f = V),
        (e(60).f = k.f = Z),
        (e(29).f = $),
        (E.f = tt),
        a && !e(21) && s(X, 'propertyIsEnumerable', $, !0),
        (p.f = function (t) {
          return G(h(t));
        })),
        i(i.G + i.W + i.F * !J, { Symbol: I });
      for (
        var nt =
            'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
              ','
            ),
          et = 0;
        nt.length > et;

      )
        h(nt[et++]);
      for (var rt = O(h.store), ot = 0; rt.length > ot; ) y(rt[ot++]);
      i(i.S + i.F * !J, 'Symbol', {
        for: function (t) {
          return o(N, (t += '')) ? N[t] : (N[t] = I(t));
        },
        keyFor: function (t) {
          if (!q(t)) throw TypeError(t + ' is not a symbol!');
          for (var n in N) if (N[n] === t) return n;
        },
        useSetter: function () {
          U = !0;
        },
        useSimple: function () {
          U = !1;
        },
      }),
        i(i.S + i.F * !J, 'Object', {
          create: function (t, n) {
            return void 0 === n ? C(t) : Y(C(t), n);
          },
          defineProperty: V,
          defineProperties: Y,
          getOwnPropertyDescriptor: Q,
          getOwnPropertyNames: Z,
          getOwnPropertySymbols: tt,
        });
      var at = u(function () {
        E.f(1);
      });
      i(i.S + i.F * at, 'Object', {
        getOwnPropertySymbols: function (t) {
          return E.f(b(t));
        },
      }),
        W &&
          i(
            i.S +
              i.F *
                (!J ||
                  u(function () {
                    var t = I();
                    return (
                      '[null]' != M([t]) ||
                      '{}' != M({ a: t }) ||
                      '{}' != M(Object(t))
                    );
                  })),
            'JSON',
            {
              stringify: function (t) {
                for (var n, e, r = [t], o = 1; arguments.length > o; )
                  r.push(arguments[o++]);
                if (((e = n = r[1]), (_(n) || void 0 !== t) && !q(t)))
                  return (
                    x(n) ||
                      (n = function (t, n) {
                        if (
                          ('function' == typeof e && (n = e.call(this, t, n)),
                          !q(n))
                        )
                          return n;
                      }),
                    (r[1] = n),
                    M.apply(W, r)
                  );
              },
            }
          ),
        I.prototype[H] || e(15)(I.prototype, H, I.prototype.valueOf),
        d(I, 'Symbol'),
        d(Math, 'Math', !0),
        d(r.JSON, 'JSON', !0);
    },
    function (t, n, e) {
      var r = e(22)('meta'),
        o = e(2),
        a = e(14),
        i = e(7).f,
        s = 0,
        c =
          Object.isExtensible ||
          function () {
            return !0;
          },
        u = !e(8)(function () {
          return c(Object.preventExtensions({}));
        }),
        f = function (t) {
          i(t, r, { value: { i: 'O' + ++s, w: {} } });
        },
        d = (t.exports = {
          KEY: r,
          NEED: !1,
          fastKey: function (t, n) {
            if (!o(t))
              return 'symbol' == typeof t
                ? t
                : ('string' == typeof t ? 'S' : 'P') + t;
            if (!a(t, r)) {
              if (!c(t)) return 'F';
              if (!n) return 'E';
              f(t);
            }
            return t[r].i;
          },
          getWeak: function (t, n) {
            if (!a(t, r)) {
              if (!c(t)) return !0;
              if (!n) return !1;
              f(t);
            }
            return t[r].w;
          },
          onFreeze: function (t) {
            return u && d.NEED && c(t) && !a(t, r) && f(t), t;
          },
        });
    },
    function (t, n) {
      t.exports = function (t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t;
      };
    },
    function (t, n) {
      var e = Math.ceil,
        r = Math.floor;
      t.exports = function (t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? r : e)(t);
      };
    },
    function (t, n, e) {
      var r = e(27)('keys'),
        o = e(22);
      t.exports = function (t) {
        return r[t] || (r[t] = o(t));
      };
    },
    function (t, n) {
      t.exports =
        'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
          ','
        );
    },
    function (t, n) {
      n.f = Object.getOwnPropertySymbols;
    },
    function (t, n, e) {
      'use strict';
      e(81);
      var r = e(3),
        o = e(62),
        a = e(5),
        i = /./.toString,
        s = function (t) {
          e(11)(RegExp.prototype, 'toString', t, !0);
        };
      e(8)(function () {
        return '/a/b' != i.call({ source: 'a', flags: 'b' });
      })
        ? s(function () {
            var t = r(this);
            return '/'.concat(
              t.source,
              '/',
              'flags' in t
                ? t.flags
                : !a && t instanceof RegExp
                ? o.call(t)
                : void 0
            );
          })
        : 'toString' != i.name &&
          s(function () {
            return i.call(this);
          });
    },
    function (t, n, e) {
      var r = e(10),
        o = e(31),
        a = e(17),
        i = e(3),
        s = e(2),
        c = e(8),
        u = e(82),
        f = (e(0).Reflect || {}).construct,
        d = c(function () {
          function t() {}
          return !(f(function () {}, [], t) instanceof t);
        }),
        l = !c(function () {
          f(function () {});
        });
      r(r.S + r.F * (d || l), 'Reflect', {
        construct: function (t, n) {
          a(t), i(n);
          var e = arguments.length < 3 ? t : a(arguments[2]);
          if (l && !d) return f(t, n, e);
          if (t == e) {
            switch (n.length) {
              case 0:
                return new t();
              case 1:
                return new t(n[0]);
              case 2:
                return new t(n[0], n[1]);
              case 3:
                return new t(n[0], n[1], n[2]);
              case 4:
                return new t(n[0], n[1], n[2], n[3]);
            }
            var r = [null];
            return r.push.apply(r, n), new (u.apply(t, r))();
          }
          var c = e.prototype,
            h = o(s(c) ? c : Object.prototype),
            p = Function.apply.call(t, h, n);
          return s(p) ? p : h;
        },
      });
    },
    function (t, n, e) {
      var r = e(10);
      r(r.S, 'Object', { setPrototypeOf: e(64).set });
    },
    function (t, n, e) {
      var r = e(24),
        o = e(1)('toStringTag'),
        a =
          'Arguments' ==
          r(
            (function () {
              return arguments;
            })()
          );
      t.exports = function (t) {
        var n, e, i;
        return void 0 === t
          ? 'Undefined'
          : null === t
          ? 'Null'
          : 'string' ==
            typeof (e = (function (t, n) {
              try {
                return t[n];
              } catch (t) {}
            })((n = Object(t)), o))
          ? e
          : a
          ? r(n)
          : 'Object' == (i = r(n)) && 'function' == typeof n.callee
          ? 'Arguments'
          : i;
      };
    },
    function (t, n) {
      t.exports = function (t, n, e, r) {
        if (!(t instanceof n) || (void 0 !== r && r in t))
          throw TypeError(e + ': incorrect invocation!');
        return t;
      };
    },
    function (t, n, e) {
      var r = e(16),
        o = e(83),
        a = e(84),
        i = e(3),
        s = e(58),
        c = e(85),
        u = {},
        f = {};
      ((n = t.exports =
        function (t, n, e, d, l) {
          var h,
            p,
            y,
            v,
            x = l
              ? function () {
                  return t;
                }
              : c(t),
            m = r(e, d, n ? 2 : 1),
            _ = 0;
          if ('function' != typeof x) throw TypeError(t + ' is not iterable!');
          if (a(x)) {
            for (h = s(t.length); h > _; _++)
              if (
                (v = n ? m(i((p = t[_]))[0], p[1]) : m(t[_])) === u ||
                v === f
              )
                return v;
          } else
            for (y = x.call(t); !(p = y.next()).done; )
              if ((v = o(y, m, p.value, n)) === u || v === f) return v;
        }).BREAK = u),
        (n.RETURN = f);
    },
    function (t, n, e) {
      var r = e(11);
      t.exports = function (t, n, e) {
        for (var o in n) r(t, o, n[o], e);
        return t;
      };
    },
    function (t, n, e) {
      for (
        var r = e(32),
          o = e(18),
          a = e(11),
          i = e(0),
          s = e(15),
          c = e(25),
          u = e(1),
          f = u('iterator'),
          d = u('toStringTag'),
          l = c.Array,
          h = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1,
          },
          p = o(h),
          y = 0;
        y < p.length;
        y++
      ) {
        var v,
          x = p[y],
          m = h[x],
          _ = i[x],
          b = _ && _.prototype;
        if (b && (b[f] || s(b, f, l), b[d] || s(b, d, x), (c[x] = l), m))
          for (v in r) b[v] || a(b, v, r[v], !0);
      }
    },
    function (t, n, e) {
      'use strict';
      var r = e(21),
        o = e(10),
        a = e(11),
        i = e(15),
        s = e(25),
        c = e(97),
        u = e(23),
        f = e(98),
        d = e(1)('iterator'),
        l = !([].keys && 'next' in [].keys()),
        h = function () {
          return this;
        };
      t.exports = function (t, n, e, p, y, v, x) {
        c(e, n, p);
        var m,
          _,
          b,
          g = function (t) {
            if (!l && t in k) return k[t];
            switch (t) {
              case 'keys':
              case 'values':
                return function () {
                  return new e(this, t);
                };
            }
            return function () {
              return new e(this, t);
            };
          },
          S = n + ' Iterator',
          w = 'values' == y,
          C = !1,
          k = t.prototype,
          A = k[d] || k['@@iterator'] || (y && k[y]),
          E = A || g(y),
          T = y ? (w ? g('entries') : E) : void 0,
          O = ('Array' == n && k.entries) || A;
        if (
          (O &&
            (b = f(O.call(new t()))) !== Object.prototype &&
            b.next &&
            (u(b, S, !0), r || 'function' == typeof b[d] || i(b, d, h)),
          w &&
            A &&
            'values' !== A.name &&
            ((C = !0),
            (E = function () {
              return A.call(this);
            })),
          (r && !x) || (!l && !C && k[d]) || i(k, d, E),
          (s[n] = E),
          (s[S] = h),
          y)
        )
          if (
            ((m = {
              values: w ? E : g('values'),
              keys: v ? E : g('keys'),
              entries: T,
            }),
            x)
          )
            for (_ in m) _ in k || a(k, _, m[_]);
          else o(o.P + o.F * (l || C), n, m);
        return m;
      };
    },
    function (t, n, e) {
      var r = e(0),
        o = e(13),
        a = e(21),
        i = e(54),
        s = e(7).f;
      t.exports = function (t) {
        var n = o.Symbol || (o.Symbol = a ? {} : r.Symbol || {});
        '_' == t.charAt(0) || t in n || s(n, t, { value: i.f(t) });
      };
    },
    function (t, n, e) {
      n.f = e(1);
    },
    function (t, n, e) {
      t.exports =
        !e(5) &&
        !e(8)(function () {
          return (
            7 !=
            Object.defineProperty(e(35)('div'), 'a', {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    function (t, n, e) {
      var r = e(14),
        o = e(19),
        a = e(76)(!1),
        i = e(41)('IE_PROTO');
      t.exports = function (t, n) {
        var e,
          s = o(t),
          c = 0,
          u = [];
        for (e in s) e != i && r(s, e) && u.push(e);
        for (; n.length > c; ) r(s, (e = n[c++])) && (~a(u, e) || u.push(e));
        return u;
      };
    },
    function (t, n, e) {
      var r = e(24);
      t.exports = Object('z').propertyIsEnumerable(0)
        ? Object
        : function (t) {
            return 'String' == r(t) ? t.split('') : Object(t);
          };
    },
    function (t, n, e) {
      var r = e(40),
        o = Math.min;
      t.exports = function (t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0;
      };
    },
    function (t, n, e) {
      var r = e(0).document;
      t.exports = r && r.documentElement;
    },
    function (t, n, e) {
      var r = e(56),
        o = e(42).concat('length', 'prototype');
      n.f =
        Object.getOwnPropertyNames ||
        function (t) {
          return r(t, o);
        };
    },
    function (t, n, e) {
      var r = e(29),
        o = e(28),
        a = e(19),
        i = e(36),
        s = e(14),
        c = e(55),
        u = Object.getOwnPropertyDescriptor;
      n.f = e(5)
        ? u
        : function (t, n) {
            if (((t = a(t)), (n = i(n, !0)), c))
              try {
                return u(t, n);
              } catch (t) {}
            if (s(t, n)) return o(!r.f.call(t, n), t[n]);
          };
    },
    function (t, n, e) {
      'use strict';
      var r = e(3);
      t.exports = function () {
        var t = r(this),
          n = '';
        return (
          t.global && (n += 'g'),
          t.ignoreCase && (n += 'i'),
          t.multiline && (n += 'm'),
          t.unicode && (n += 'u'),
          t.sticky && (n += 'y'),
          n
        );
      };
    },
    function (t, n) {
      t.exports = function (t, n, e) {
        var r = void 0 === e;
        switch (n.length) {
          case 0:
            return r ? t() : t.call(e);
          case 1:
            return r ? t(n[0]) : t.call(e, n[0]);
          case 2:
            return r ? t(n[0], n[1]) : t.call(e, n[0], n[1]);
          case 3:
            return r ? t(n[0], n[1], n[2]) : t.call(e, n[0], n[1], n[2]);
          case 4:
            return r
              ? t(n[0], n[1], n[2], n[3])
              : t.call(e, n[0], n[1], n[2], n[3]);
        }
        return t.apply(e, n);
      };
    },
    function (t, n, e) {
      var r = e(2),
        o = e(3),
        a = function (t, n) {
          if ((o(t), !r(n) && null !== n))
            throw TypeError(n + ": can't set as prototype!");
        };
      t.exports = {
        set:
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function (t, n, r) {
                try {
                  (r = e(16)(
                    Function.call,
                    e(61).f(Object.prototype, '__proto__').set,
                    2
                  ))(t, []),
                    (n = !(t instanceof Array));
                } catch (t) {
                  n = !0;
                }
                return function (t, e) {
                  return a(t, e), n ? (t.__proto__ = e) : r(t, e), t;
                };
              })({}, !1)
            : void 0),
        check: a,
      };
    },
    function (t, n, e) {
      var r,
        o,
        a,
        i = e(16),
        s = e(63),
        c = e(59),
        u = e(35),
        f = e(0),
        d = f.process,
        l = f.setImmediate,
        h = f.clearImmediate,
        p = f.MessageChannel,
        y = f.Dispatch,
        v = 0,
        x = {},
        m = function () {
          var t = +this;
          if (x.hasOwnProperty(t)) {
            var n = x[t];
            delete x[t], n();
          }
        },
        _ = function (t) {
          m.call(t.data);
        };
      (l && h) ||
        ((l = function (t) {
          for (var n = [], e = 1; arguments.length > e; )
            n.push(arguments[e++]);
          return (
            (x[++v] = function () {
              s('function' == typeof t ? t : Function(t), n);
            }),
            r(v),
            v
          );
        }),
        (h = function (t) {
          delete x[t];
        }),
        'process' == e(24)(d)
          ? (r = function (t) {
              d.nextTick(i(m, t, 1));
            })
          : y && y.now
          ? (r = function (t) {
              y.now(i(m, t, 1));
            })
          : p
          ? ((a = (o = new p()).port2),
            (o.port1.onmessage = _),
            (r = i(a.postMessage, a, 1)))
          : f.addEventListener &&
            'function' == typeof postMessage &&
            !f.importScripts
          ? ((r = function (t) {
              f.postMessage(t + '', '*');
            }),
            f.addEventListener('message', _, !1))
          : (r =
              'onreadystatechange' in u('script')
                ? function (t) {
                    c.appendChild(u('script')).onreadystatechange =
                      function () {
                        c.removeChild(this), m.call(t);
                      };
                  }
                : function (t) {
                    setTimeout(i(m, t, 1), 0);
                  })),
        (t.exports = { set: l, clear: h });
    },
    function (t, n, e) {
      'use strict';
      var r = e(17);
      function o(t) {
        var n, e;
        (this.promise = new t(function (t, r) {
          if (void 0 !== n || void 0 !== e)
            throw TypeError('Bad Promise constructor');
          (n = t), (e = r);
        })),
          (this.resolve = r(n)),
          (this.reject = r(e));
      }
      t.exports.f = function (t) {
        return new o(t);
      };
    },
    function (t, n, e) {
      'use strict';
      var r = e(0),
        o = e(7),
        a = e(5),
        i = e(1)('species');
      t.exports = function (t) {
        var n = r[t];
        a &&
          n &&
          !n[i] &&
          o.f(n, i, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    function (t, n, e) {
      var r = e(1)('iterator'),
        o = !1;
      try {
        var a = [7][r]();
        (a.return = function () {
          o = !0;
        }),
          Array.from(a, function () {
            throw 2;
          });
      } catch (t) {}
      t.exports = function (t, n) {
        if (!n && !o) return !1;
        var e = !1;
        try {
          var a = [7],
            i = a[r]();
          (i.next = function () {
            return { done: (e = !0) };
          }),
            (a[r] = function () {
              return i;
            }),
            t(a);
        } catch (t) {}
        return e;
      };
    },
    function (t, n) {
      t.exports = function (t, n) {
        return { value: n, done: !!t };
      };
    },
    function (t, n, e) {
      var r = e(30),
        o = e(18);
      e(99)('keys', function () {
        return function (t) {
          return o(r(t));
        };
      });
    },
    function (t, n, e) {
      var r = e(2);
      t.exports = function (t, n) {
        if (!r(t) || t._t !== n)
          throw TypeError('Incompatible receiver, ' + n + ' required!');
        return t;
      };
    },
    function (t, n, e) {
      var r = e(10);
      r(r.S + r.F, 'Object', { assign: e(106) });
    },
    function (t, n, e) {
      (function (t) {
        var e = 9007199254740991,
          r = '[object Arguments]',
          o = '[object Function]',
          a = '[object GeneratorFunction]',
          i = '[object Map]',
          s = '[object Set]',
          c = /^\[object .+?Constructor\]$/,
          u =
            'object' == typeof global &&
            global &&
            global.Object === Object &&
            global,
          f = 'object' == typeof self && self && self.Object === Object && self,
          d = u || f || Function('return this')(),
          l = n && !n.nodeType && n,
          h = l && 'object' == typeof t && t && !t.nodeType && t,
          p = h && h.exports === l;
        var y,
          v,
          x,
          m = Function.prototype,
          _ = Object.prototype,
          b = d['__core-js_shared__'],
          g = (y = /[^.]+$/.exec((b && b.keys && b.keys.IE_PROTO) || ''))
            ? 'Symbol(src)_1.' + y
            : '',
          S = m.toString,
          w = _.hasOwnProperty,
          C = _.toString,
          k = RegExp(
            '^' +
              S.call(w)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  '$1.*?'
                ) +
              '$'
          ),
          A = p ? d.Buffer : void 0,
          E = _.propertyIsEnumerable,
          T = A ? A.isBuffer : void 0,
          O =
            ((v = Object.keys),
            (x = Object),
            function (t) {
              return v(x(t));
            }),
          j = X(d, 'DataView'),
          B = X(d, 'Map'),
          R = X(d, 'Promise'),
          I = X(d, 'Set'),
          W = X(d, 'WeakMap'),
          M = !E.call({ valueOf: 1 }, 'valueOf'),
          P = z(j),
          H = z(B),
          L = z(R),
          N = z(I),
          D = z(W);
        function F(t) {
          return (
            !(
              !Y(t) ||
              (function (t) {
                return !!g && g in t;
              })(t)
            ) &&
            (V(t) ||
            (function (t) {
              var n = !1;
              if (null != t && 'function' != typeof t.toString)
                try {
                  n = !!(t + '');
                } catch (t) {}
              return n;
            })(t)
              ? k
              : c
            ).test(z(t))
          );
        }
        function X(t, n) {
          var e = (function (t, n) {
            return null == t ? void 0 : t[n];
          })(t, n);
          return F(e) ? e : void 0;
        }
        var J = function (t) {
          return C.call(t);
        };
        function z(t) {
          if (null != t) {
            try {
              return S.call(t);
            } catch (t) {}
            try {
              return t + '';
            } catch (t) {}
          }
          return '';
        }
        function U(t) {
          return (
            (function (t) {
              return (
                (function (t) {
                  return !!t && 'object' == typeof t;
                })(t) && G(t)
              );
            })(t) &&
            w.call(t, 'callee') &&
            (!E.call(t, 'callee') || C.call(t) == r)
          );
        }
        ((j && '[object DataView]' != J(new j(new ArrayBuffer(1)))) ||
          (B && J(new B()) != i) ||
          (R && '[object Promise]' != J(R.resolve())) ||
          (I && J(new I()) != s) ||
          (W && '[object WeakMap]' != J(new W()))) &&
          (J = function (t) {
            var n = C.call(t),
              e = '[object Object]' == n ? t.constructor : void 0,
              r = e ? z(e) : void 0;
            if (r)
              switch (r) {
                case P:
                  return '[object DataView]';
                case H:
                  return i;
                case L:
                  return '[object Promise]';
                case N:
                  return s;
                case D:
                  return '[object WeakMap]';
              }
            return n;
          });
        var K = Array.isArray;
        function G(t) {
          return (
            null != t &&
            (function (t) {
              return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= e;
            })(t.length) &&
            !V(t)
          );
        }
        var q =
          T ||
          function () {
            return !1;
          };
        function V(t) {
          var n = Y(t) ? C.call(t) : '';
          return n == o || n == a;
        }
        function Y(t) {
          var n = typeof t;
          return !!t && ('object' == n || 'function' == n);
        }
        t.exports = function (t) {
          if (
            G(t) &&
            (K(t) ||
              'string' == typeof t ||
              'function' == typeof t.splice ||
              q(t) ||
              U(t))
          )
            return !t.length;
          var n = J(t);
          if (n == i || n == s) return !t.size;
          if (
            M ||
            (function (t) {
              var n = t && t.constructor;
              return t === (('function' == typeof n && n.prototype) || _);
            })(t)
          )
            return !O(t).length;
          for (var e in t) if (w.call(t, e)) return !1;
          return !0;
        };
      }).call(this, e(91)(t));
    },
    function (t, n, e) {
      t.exports = e(27)('native-function-to-string', Function.toString);
    },
    function (t, n, e) {
      var r = e(18),
        o = e(43),
        a = e(29);
      t.exports = function (t) {
        var n = r(t),
          e = o.f;
        if (e)
          for (var i, s = e(t), c = a.f, u = 0; s.length > u; )
            c.call(t, (i = s[u++])) && n.push(i);
        return n;
      };
    },
    function (t, n, e) {
      var r = e(19),
        o = e(58),
        a = e(77);
      t.exports = function (t) {
        return function (n, e, i) {
          var s,
            c = r(n),
            u = o(c.length),
            f = a(i, u);
          if (t && e != e) {
            for (; u > f; ) if ((s = c[f++]) != s) return !0;
          } else
            for (; u > f; f++)
              if ((t || f in c) && c[f] === e) return t || f || 0;
          return !t && -1;
        };
      };
    },
    function (t, n, e) {
      var r = e(40),
        o = Math.max,
        a = Math.min;
      t.exports = function (t, n) {
        return (t = r(t)) < 0 ? o(t + n, 0) : a(t, n);
      };
    },
    function (t, n, e) {
      var r = e(24);
      t.exports =
        Array.isArray ||
        function (t) {
          return 'Array' == r(t);
        };
    },
    function (t, n, e) {
      var r = e(7),
        o = e(3),
        a = e(18);
      t.exports = e(5)
        ? Object.defineProperties
        : function (t, n) {
            o(t);
            for (var e, i = a(n), s = i.length, c = 0; s > c; )
              r.f(t, (e = i[c++]), n[e]);
            return t;
          };
    },
    function (t, n, e) {
      var r = e(19),
        o = e(60).f,
        a = {}.toString,
        i =
          'object' == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [];
      t.exports.f = function (t) {
        return i && '[object Window]' == a.call(t)
          ? (function (t) {
              try {
                return o(t);
              } catch (t) {
                return i.slice();
              }
            })(t)
          : o(r(t));
      };
    },
    function (t, n, e) {
      e(5) &&
        'g' != /./g.flags &&
        e(7).f(RegExp.prototype, 'flags', { configurable: !0, get: e(62) });
    },
    function (t, n, e) {
      'use strict';
      var r = e(17),
        o = e(2),
        a = e(63),
        i = [].slice,
        s = {},
        c = function (t, n, e) {
          if (!(n in s)) {
            for (var r = [], o = 0; o < n; o++) r[o] = 'a[' + o + ']';
            s[n] = Function('F,a', 'return new F(' + r.join(',') + ')');
          }
          return s[n](t, e);
        };
      t.exports =
        Function.bind ||
        function (t) {
          var n = r(this),
            e = i.call(arguments, 1),
            s = function () {
              var r = e.concat(i.call(arguments));
              return this instanceof s ? c(n, r.length, r) : a(n, r, t);
            };
          return o(n.prototype) && (s.prototype = n.prototype), s;
        };
    },
    function (t, n, e) {
      var r = e(3);
      t.exports = function (t, n, e, o) {
        try {
          return o ? n(r(e)[0], e[1]) : n(e);
        } catch (n) {
          var a = t.return;
          throw (void 0 !== a && r(a.call(t)), n);
        }
      };
    },
    function (t, n, e) {
      var r = e(25),
        o = e(1)('iterator'),
        a = Array.prototype;
      t.exports = function (t) {
        return void 0 !== t && (r.Array === t || a[o] === t);
      };
    },
    function (t, n, e) {
      var r = e(47),
        o = e(1)('iterator'),
        a = e(25);
      t.exports = e(13).getIteratorMethod = function (t) {
        if (null != t) return t[o] || t['@@iterator'] || a[r(t)];
      };
    },
    function (t, n, e) {
      var r = e(3),
        o = e(17),
        a = e(1)('species');
      t.exports = function (t, n) {
        var e,
          i = r(t).constructor;
        return void 0 === i || null == (e = r(i)[a]) ? n : o(e);
      };
    },
    function (t, n, e) {
      var r = e(0),
        o = e(65).set,
        a = r.MutationObserver || r.WebKitMutationObserver,
        i = r.process,
        s = r.Promise,
        c = 'process' == e(24)(i);
      t.exports = function () {
        var t,
          n,
          e,
          u = function () {
            var r, o;
            for (c && (r = i.domain) && r.exit(); t; ) {
              (o = t.fn), (t = t.next);
              try {
                o();
              } catch (r) {
                throw (t ? e() : (n = void 0), r);
              }
            }
            (n = void 0), r && r.enter();
          };
        if (c)
          e = function () {
            i.nextTick(u);
          };
        else if (!a || (r.navigator && r.navigator.standalone))
          if (s && s.resolve) {
            var f = s.resolve(void 0);
            e = function () {
              f.then(u);
            };
          } else
            e = function () {
              o.call(r, u);
            };
        else {
          var d = !0,
            l = document.createTextNode('');
          new a(u).observe(l, { characterData: !0 }),
            (e = function () {
              l.data = d = !d;
            });
        }
        return function (r) {
          var o = { fn: r, next: void 0 };
          n && (n.next = o), t || ((t = o), e()), (n = o);
        };
      };
    },
    function (t, n) {
      t.exports = function (t) {
        try {
          return { e: !1, v: t() };
        } catch (t) {
          return { e: !0, v: t };
        }
      };
    },
    function (t, n, e) {
      var r = e(0).navigator;
      t.exports = (r && r.userAgent) || '';
    },
    function (t, n, e) {
      var r = e(3),
        o = e(2),
        a = e(66);
      t.exports = function (t, n) {
        if ((r(t), o(n) && n.constructor === t)) return n;
        var e = a.f(t);
        return (0, e.resolve)(n), e.promise;
      };
    },
    function (t, n) {
      t.exports = function (t) {
        return (
          t.webpackPolyfill ||
            ((t.deprecate = function () {}),
            (t.paths = []),
            t.children || (t.children = []),
            Object.defineProperty(t, 'loaded', {
              enumerable: !0,
              get: function () {
                return t.l;
              },
            }),
            Object.defineProperty(t, 'id', {
              enumerable: !0,
              get: function () {
                return t.i;
              },
            }),
            (t.webpackPolyfill = 1)),
          t
        );
      };
    },
    function (t, n, e) {
      'use strict';
      var r = (function () {
        if ('undefined' != typeof self) return self;
        if ('undefined' != typeof window) return window;
        if (void 0 !== r) return r;
        throw new Error('unable to locate global object');
      })();
      (t.exports = n = r.fetch),
        (n.default = r.fetch.bind(r)),
        (n.Headers = r.Headers),
        (n.Request = r.Request),
        (n.Response = r.Response);
    },
    function (t, n, e) {
      var r = e(94),
        o = e(95);
      t.exports = function (t, n, e) {
        var a = (n && e) || 0;
        'string' == typeof t &&
          ((n = 'binary' === t ? new Array(16) : null), (t = null));
        var i = (t = t || {}).random || (t.rng || r)();
        if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), n))
          for (var s = 0; s < 16; ++s) n[a + s] = i[s];
        return n || o(i);
      };
    },
    function (t, n) {
      var e =
        ('undefined' != typeof crypto &&
          crypto.getRandomValues &&
          crypto.getRandomValues.bind(crypto)) ||
        ('undefined' != typeof msCrypto &&
          'function' == typeof window.msCrypto.getRandomValues &&
          msCrypto.getRandomValues.bind(msCrypto));
      if (e) {
        var r = new Uint8Array(16);
        t.exports = function () {
          return e(r), r;
        };
      } else {
        var o = new Array(16);
        t.exports = function () {
          for (var t, n = 0; n < 16; n++)
            0 == (3 & n) && (t = 4294967296 * Math.random()),
              (o[n] = (t >>> ((3 & n) << 3)) & 255);
          return o;
        };
      }
    },
    function (t, n) {
      for (var e = [], r = 0; r < 256; ++r)
        e[r] = (r + 256).toString(16).substr(1);
      t.exports = function (t, n) {
        var r = n || 0,
          o = e;
        return [
          o[t[r++]],
          o[t[r++]],
          o[t[r++]],
          o[t[r++]],
          '-',
          o[t[r++]],
          o[t[r++]],
          '-',
          o[t[r++]],
          o[t[r++]],
          '-',
          o[t[r++]],
          o[t[r++]],
          '-',
          o[t[r++]],
          o[t[r++]],
          o[t[r++]],
          o[t[r++]],
          o[t[r++]],
          o[t[r++]],
        ].join('');
      };
    },
    function (t, n, e) {
      var r = e(1)('unscopables'),
        o = Array.prototype;
      null == o[r] && e(15)(o, r, {}),
        (t.exports = function (t) {
          o[r][t] = !0;
        });
    },
    function (t, n, e) {
      'use strict';
      var r = e(31),
        o = e(28),
        a = e(23),
        i = {};
      e(15)(i, e(1)('iterator'), function () {
        return this;
      }),
        (t.exports = function (t, n, e) {
          (t.prototype = r(i, { next: o(1, e) })), a(t, n + ' Iterator');
        });
    },
    function (t, n, e) {
      var r = e(14),
        o = e(30),
        a = e(41)('IE_PROTO'),
        i = Object.prototype;
      t.exports =
        Object.getPrototypeOf ||
        function (t) {
          return (
            (t = o(t)),
            r(t, a)
              ? t[a]
              : 'function' == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? i
              : null
          );
        };
    },
    function (t, n, e) {
      var r = e(10),
        o = e(13),
        a = e(8);
      t.exports = function (t, n) {
        var e = (o.Object || {})[t] || Object[t],
          i = {};
        (i[t] = n(e)),
          r(
            r.S +
              r.F *
                a(function () {
                  e(1);
                }),
            'Object',
            i
          );
      };
    },
    function (t, n, e) {
      'use strict';
      var r = e(101)(!0);
      e(52)(
        String,
        'String',
        function (t) {
          (this._t = String(t)), (this._i = 0);
        },
        function () {
          var t,
            n = this._t,
            e = this._i;
          return e >= n.length
            ? { value: void 0, done: !0 }
            : ((t = r(n, e)), (this._i += t.length), { value: t, done: !1 });
        }
      );
    },
    function (t, n, e) {
      var r = e(40),
        o = e(39);
      t.exports = function (t) {
        return function (n, e) {
          var a,
            i,
            s = String(o(n)),
            c = r(e),
            u = s.length;
          return c < 0 || c >= u
            ? t
              ? ''
              : void 0
            : (a = s.charCodeAt(c)) < 55296 ||
              a > 56319 ||
              c + 1 === u ||
              (i = s.charCodeAt(c + 1)) < 56320 ||
              i > 57343
            ? t
              ? s.charAt(c)
              : a
            : t
            ? s.slice(c, c + 2)
            : i - 56320 + ((a - 55296) << 10) + 65536;
        };
      };
    },
    function (t, n, e) {
      'use strict';
      var r = e(103),
        o = e(71);
      t.exports = e(104)(
        'Map',
        function (t) {
          return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          get: function (t) {
            var n = r.getEntry(o(this, 'Map'), t);
            return n && n.v;
          },
          set: function (t, n) {
            return r.def(o(this, 'Map'), 0 === t ? 0 : t, n);
          },
        },
        r,
        !0
      );
    },
    function (t, n, e) {
      'use strict';
      var r = e(7).f,
        o = e(31),
        a = e(50),
        i = e(16),
        s = e(48),
        c = e(49),
        u = e(52),
        f = e(69),
        d = e(67),
        l = e(5),
        h = e(38).fastKey,
        p = e(71),
        y = l ? '_s' : 'size',
        v = function (t, n) {
          var e,
            r = h(n);
          if ('F' !== r) return t._i[r];
          for (e = t._f; e; e = e.n) if (e.k == n) return e;
        };
      t.exports = {
        getConstructor: function (t, n, e, u) {
          var f = t(function (t, r) {
            s(t, f, n, '_i'),
              (t._t = n),
              (t._i = o(null)),
              (t._f = void 0),
              (t._l = void 0),
              (t[y] = 0),
              null != r && c(r, e, t[u], t);
          });
          return (
            a(f.prototype, {
              clear: function () {
                for (var t = p(this, n), e = t._i, r = t._f; r; r = r.n)
                  (r.r = !0), r.p && (r.p = r.p.n = void 0), delete e[r.i];
                (t._f = t._l = void 0), (t[y] = 0);
              },
              delete: function (t) {
                var e = p(this, n),
                  r = v(e, t);
                if (r) {
                  var o = r.n,
                    a = r.p;
                  delete e._i[r.i],
                    (r.r = !0),
                    a && (a.n = o),
                    o && (o.p = a),
                    e._f == r && (e._f = o),
                    e._l == r && (e._l = a),
                    e[y]--;
                }
                return !!r;
              },
              forEach: function (t) {
                p(this, n);
                for (
                  var e,
                    r = i(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                  (e = e ? e.n : this._f);

                )
                  for (r(e.v, e.k, this); e && e.r; ) e = e.p;
              },
              has: function (t) {
                return !!v(p(this, n), t);
              },
            }),
            l &&
              r(f.prototype, 'size', {
                get: function () {
                  return p(this, n)[y];
                },
              }),
            f
          );
        },
        def: function (t, n, e) {
          var r,
            o,
            a = v(t, n);
          return (
            a
              ? (a.v = e)
              : ((t._l = a =
                  {
                    i: (o = h(n, !0)),
                    k: n,
                    v: e,
                    p: (r = t._l),
                    n: void 0,
                    r: !1,
                  }),
                t._f || (t._f = a),
                r && (r.n = a),
                t[y]++,
                'F' !== o && (t._i[o] = a)),
            t
          );
        },
        getEntry: v,
        setStrong: function (t, n, e) {
          u(
            t,
            n,
            function (t, e) {
              (this._t = p(t, n)), (this._k = e), (this._l = void 0);
            },
            function () {
              for (var t = this._k, n = this._l; n && n.r; ) n = n.p;
              return this._t && (this._l = n = n ? n.n : this._t._f)
                ? f(0, 'keys' == t ? n.k : 'values' == t ? n.v : [n.k, n.v])
                : ((this._t = void 0), f(1));
            },
            e ? 'entries' : 'values',
            !e,
            !0
          ),
            d(n);
        },
      };
    },
    function (t, n, e) {
      'use strict';
      var r = e(0),
        o = e(10),
        a = e(11),
        i = e(50),
        s = e(38),
        c = e(49),
        u = e(48),
        f = e(2),
        d = e(8),
        l = e(68),
        h = e(23),
        p = e(105);
      t.exports = function (t, n, e, y, v, x) {
        var m = r[t],
          _ = m,
          b = v ? 'set' : 'add',
          g = _ && _.prototype,
          S = {},
          w = function (t) {
            var n = g[t];
            a(
              g,
              t,
              'delete' == t
                ? function (t) {
                    return !(x && !f(t)) && n.call(this, 0 === t ? 0 : t);
                  }
                : 'has' == t
                ? function (t) {
                    return !(x && !f(t)) && n.call(this, 0 === t ? 0 : t);
                  }
                : 'get' == t
                ? function (t) {
                    return x && !f(t) ? void 0 : n.call(this, 0 === t ? 0 : t);
                  }
                : 'add' == t
                ? function (t) {
                    return n.call(this, 0 === t ? 0 : t), this;
                  }
                : function (t, e) {
                    return n.call(this, 0 === t ? 0 : t, e), this;
                  }
            );
          };
        if (
          'function' == typeof _ &&
          (x ||
            (g.forEach &&
              !d(function () {
                new _().entries().next();
              })))
        ) {
          var C = new _(),
            k = C[b](x ? {} : -0, 1) != C,
            A = d(function () {
              C.has(1);
            }),
            E = l(function (t) {
              new _(t);
            }),
            T =
              !x &&
              d(function () {
                for (var t = new _(), n = 5; n--; ) t[b](n, n);
                return !t.has(-0);
              });
          E ||
            (((_ = n(function (n, e) {
              u(n, _, t);
              var r = p(new m(), n, _);
              return null != e && c(e, v, r[b], r), r;
            })).prototype = g),
            (g.constructor = _)),
            (A || T) && (w('delete'), w('has'), v && w('get')),
            (T || k) && w(b),
            x && g.clear && delete g.clear;
        } else
          (_ = y.getConstructor(n, t, v, b)), i(_.prototype, e), (s.NEED = !0);
        return (
          h(_, t),
          (S[t] = _),
          o(o.G + o.W + o.F * (_ != m), S),
          x || y.setStrong(_, t, v),
          _
        );
      };
    },
    function (t, n, e) {
      var r = e(2),
        o = e(64).set;
      t.exports = function (t, n, e) {
        var a,
          i = n.constructor;
        return (
          i !== e &&
            'function' == typeof i &&
            (a = i.prototype) !== e.prototype &&
            r(a) &&
            o &&
            o(t, a),
          t
        );
      };
    },
    function (t, n, e) {
      'use strict';
      var r = e(5),
        o = e(18),
        a = e(43),
        i = e(29),
        s = e(30),
        c = e(57),
        u = Object.assign;
      t.exports =
        !u ||
        e(8)(function () {
          var t = {},
            n = {},
            e = Symbol(),
            r = 'abcdefghijklmnopqrst';
          return (
            (t[e] = 7),
            r.split('').forEach(function (t) {
              n[t] = t;
            }),
            7 != u({}, t)[e] || Object.keys(u({}, n)).join('') != r
          );
        })
          ? function (t, n) {
              for (
                var e = s(t), u = arguments.length, f = 1, d = a.f, l = i.f;
                u > f;

              )
                for (
                  var h,
                    p = c(arguments[f++]),
                    y = d ? o(p).concat(d(p)) : o(p),
                    v = y.length,
                    x = 0;
                  v > x;

                )
                  (h = y[x++]), (r && !l.call(p, h)) || (e[h] = p[h]);
              return e;
            }
          : u;
    },
    function (t, n, e) {
      'use strict';
      e.r(n);
      var r = {};
      e.r(r),
        e.d(r, 'default', function () {
          return q;
        });
      var o = {};
      e.r(o),
        e.d(o, 'default', function () {
          return at;
        });
      var a = {};
      e.r(a),
        e.d(a, 'default', function () {
          return st;
        });
      e(34), e(37), e(44), e(45), e(46), e(6), e(4), e(9);
      var i = {
          VERSION: '2.0.5',
          DEFAULTS: {
            LANGUAGE: 'en_EN',
            ENCRYPTION: !0,
            ENVIRONMENT: 'production',
            IFRAME_CSS: {
              position: 'fixed',
              bottom: '16px',
              right: '16px',
              height: '55px',
              width: '55px',
              border: 'none',
            },
          },
          ENVIRONMENTS: ['development', 'staging', 'production', 'local'],
          ENVIRONMENT_SHORT_NAMES: {
            development: 'dev',
            staging: 'staging',
            production: 'prod',
            local: 'dev',
          },
          ENVIRONMENT_IDS: { development: 3, staging: 4, production: 5 },
          ENCRYPTED_ENVIRONMENTS: ['staging', 'production'],
          LANGUAGES: ['en_EN'],
          LOGIN_TYPES: ['API', 'KEY_TOKEN'],
          URLS: {
            IFRAME: [
              'https://bluedarwin-chatbot-iframe',
              '.eu-de.mybluemix.net/',
            ],
            API: [
              'https://openwhisk.eu-de.bluemix.net/api/v1/web/bluedarwin_',
              '/default/api',
            ],
          },
          EVENTS: {
            API_READY: 'api:ready',
            API_FAIL: 'api:fail',
            LOGGED_IN: 'login:success',
            LOGGED_OUT: 'logout:success',
            LOGIN_FAIL: 'login:fail',
            CONVERSATION_REPLY_FAIL: 'conversation-reply:fail',
            CONVERSATION_UPDATE: 'conversation:updated',
            TOKEN_NEGOTIATION_REQUIRED: 'x-access-token:negotiation-required',
            IFRAME_LOADED: 'iframe:loaded',
          },
          STATES: {
            API_READY: 'api-ready',
            ENVIRONMENT: 'environment',
            MODEL_MODULE: 'model-am-module',
            MODEL_CHANNELS: 'modal-am-module-channels',
            MODEL_INTENT: 'modal-am-module-intent',
            MODEL_SESSION: 'modal-session',
            URL_API: 'url-api',
            URL_IFRAME: 'url-iframe',
            IS_ENCRYPTED: 'is-encrypted',
            IS_LOGGED_IN: 'is-logged-in',
            IS_INITIALIZED: 'is-initialized',
            HAS_MODULE: 'has-module',
            HAS_CHATBOT_USER: 'has-chatbot-user',
            HAS_CLIENT_USER_ID: 'has-client-user-id',
            HAS_USER: 'has-user',
            HAS_TOKEN: 'has-token',
            HAS_PROJECT: 'has-project',
            HAS_KEY: 'has-key',
            LOGIN_METHOD: 'login-method',
            ELEMENT_IFRAME: 'element-iframe',
            IS_IFRAME_IN_DEBUG_MODE: 'is-iframe-in-debug-mode',
            CONVERSATION: 'conversation',
            CHANNEL_TOKEN: 'channel-token',
          },
          STORAGE: {
            USER: 'user',
            KEY: 'key',
            TOKEN: 'token',
            OLD_KEY: 'old-key',
            OLD_TOKEN: 'old-token',
          },
        },
        s = {
          original: { environment: 'production', language: 'en_EN' },
          possible: {
            environment: ['development', 'staging', 'production', 'local'],
            language: ['en_EN'],
          },
        };
      var c = function (t, n) {
        t.forEach((t) => {
          let e;
          try {
            e = new t();
          } catch (n) {
            e = t;
          }
          let r = e.constructor.name;
          'Object' === e.constructor.name &&
            ((n.Configuration = e), (r = 'Configuration')),
            (n[r] = e);
        });
      };
      const u = {};
      class f {
        constructor() {
          const t = this.constructor.name;
          return (
            u[t] ||
              ((u[t] = this),
              c([...arguments], u[t]),
              u.Configuration &&
                !u.Configuration.environment &&
                u[t].Configuration &&
                (u.Configuration = u[t].Configuration)),
            u[t]
          );
        }
      }
      const d = {
        environment: s.original.environment,
        url: { api: '', iframe: '' },
        encryption: !0,
        language: s.original.language,
      };
      let l;
      class h extends f {
        constructor(t = {}) {
          if ((super(...arguments), !l)) {
            switch (
              (Object.keys(t).forEach((n) => {
                const e = s.original[n],
                  r = s.possible[n];
                e && r.indexOf(t[n]) > -1 && (d[n] = t[n]);
              }),
              d.environment)
            ) {
              case 'development':
                (d.encryption = !1),
                  (d.url.api =
                    'https://openwhisk.eu-de.bluemix.net/api/v1/web/bluedarwin_dev/default/api'),
                  (d.url.iframe =
                    'https://bluedarwin-chatbot-dev.eu-de.mybluemix.net/');
                break;
              case 'local':
                (d.encryption = !1),
                  (d.url.api =
                    'https://openwhisk.eu-de.bluemix.net/api/v1/web/bluedarwin_dev/default/api'),
                  (d.url.iframe = 'http://localhost:4201');
                break;
              case 'staging':
                (d.encryption = !0),
                  (d.url.api =
                    'https://openwhisk.eu-de.bluemix.net/api/v1/web/bluedarwin_staging/default/api'),
                  (d.url.iframe =
                    'https://bluedarwin-chatbot-staging.eu-de.mybluemix.net/');
                break;
              case 'production':
                (d.encryption = !0),
                  (d.url.api =
                    'https://openwhisk.eu-de.bluemix.net/api/v1/web/bluedarwin_prod/default/api'),
                  (d.url.iframe =
                    'https://bluedarwin-chatbot.eu-de.mybluemix.net/');
            }
            (l = d), Object.freeze(d), Object.freeze(l);
          }
          return l;
        }
      }
      var p = function (t, n = new h()) {
          return `${n.url.api}/${t
            .split('/')
            .filter((t) => '' !== t)
            .join('/')}`;
        },
        y = e(20),
        v = e.n(y);
      var x = function (t = !1) {
        return t;
      };
      var m = function (t, n) {
        return x(n) ? v.a.oneWayEncrypt(t) : t;
      };
      var _ = {
          DEFAULTS: {
            LANGUAGE: 'en_EN',
            ENCRYPTION: !0,
            ENVIRONMENT: 'production',
            IFRAME_CSS: {
              position: 'absolute',
              bottom: 0,
              right: '5px',
              height: '550px',
              width: '330px',
              border: 'none',
            },
            URL_API:
              'https://openwhisk.eu-de.bluemix.net/api/v1/web/bluedarwin_prod/default/api',
            URL_IFRAME: 'https://bluedarwin-chatbot.eu-de.mybluemix.net/',
          },
          ENVIRONMENTS: ['development', 'staging', 'production', 'local'],
          ENVIRONMENT_SHORT_NAMES: {
            development: 'dev',
            staging: 'staging',
            production: 'prod',
          },
          ENVIRONMENT_IDS: { development: 3, staging: 4, production: 5 },
          ENCRYPTED_ENVIRONMENTS: ['staging', 'production'],
          LANGUAGES: ['en_EN'],
          LOGIN_TYPES: ['API', 'KEY_TOKEN'],
          URLS: {
            IFRAME: ['https://cognus-chatbot', '.eu-de.mybluemix.net/'],
            API: [
              'https://openwhisk.eu-de.bluemix.net/api/v1/web/bluedarwin_',
              '/default/api',
            ],
          },
          EVENTS: {
            API_READY: 'api:ready',
            API_FAIL: 'api:fail',
            LOGGED_IN: 'login:success',
            LOGGED_OUT: 'logout:success',
            LOGIN_FAIL: 'login:fail',
            CONVERSATION_REPLY_FAIL: 'conversation-reply:fail',
            CONVERSATION_UPDATE: 'conversation:updated',
            TOKEN_NEGOTIATION_REQUIRED: 'x-access-token:negotiation-required',
          },
          STATES: {
            API_READY: 'api-ready',
            ENVIRONMENT: 'environment',
            MODEL_MODULE: 'model-am-module',
            MODEL_CHANNELS: 'modal-am-module-channels',
            MODEL_INTENT: 'modal-am-module-intent',
            MODEL_SESSION: 'modal-session',
            URL_API: 'url-api',
            URL_IFRAME: 'url-iframe',
            IS_ENCRYPTED: 'is-encrypted',
            IS_LOGGED_IN: 'is-logged-in',
            IS_INITIALIZED: 'is-initialized',
            HAS_MODULE: 'has-module',
            HAS_CHATBOT_USER: 'has-chatbot-user',
            HAS_CLIENT_USER_ID: 'has-client-user-id',
            HAS_USER: 'has-user',
            HAS_TOKEN: 'has-token',
            HAS_PROJECT: 'has-project',
            HAS_KEY: 'has-key',
            LOGIN_METHOD: 'login-method',
            ELEMENT_IFRAME: 'element-iframe',
            IS_IFRAME_IN_DEBUG_MODE: 'is-iframe-in-debug-mode',
            CONVERSATION: 'conversation',
            CHANNEL_TOKEN: 'channel-token',
          },
          STORAGE: {
            USER: 'user',
            KEY: 'key',
            TOKEN: 'token',
            OLD_KEY: 'old-key',
            OLD_TOKEN: 'old-token',
          },
        },
        b = e(12),
        g = e.n(b);
      class S extends f {
        constructor(
          t = {
            options: {
              driver: void 0,
              name: void 0,
              size: void 0,
              storeName: void 0,
            },
          }
        ) {
          switch (t.driver) {
            case 'localstorage':
              t.driver = g.a.LOCALSTORAGE;
          }
          g.a.config(t), g.a.ready().catch((t) => {}), super();
        }
        get(t) {
          return g.a.getItem(t).catch((t) => {});
        }
        set(t, n) {
          g.a.setItem(t, n).catch((t) => {});
        }
        delete(t) {
          g.a.removeItem(t).catch((t) => {});
        }
        clear() {
          g.a.clear().catch((t) => {});
        }
      }
      var w = function (t, n = { key: '', oldKey: '' }, e = new S()) {
        (n.oldKey = n.key),
          (n.key = t),
          e.set(_.STORAGE.OLD_KEY, n.oldKey),
          e.set(_.STORAGE.KEY, n.key);
      };
      var C = function (t, n, e) {
          return x(e) ? { cognus: v.a.twoWayEncrypt(t, n) } : t;
        },
        k = e(33),
        A = e.n(k);
      function E(t, n) {
        const e = v.a.twoWayDecrypt(t.cognus || t.data || t.error || t, n);
        return JSON.parse(e);
      }
      var T = function (t, n = '', e = '', r, o) {
        if (!x(r)) return t;
        if (!A()(t) || (!t.cognus && !t.error && !t.data))
          throw { message: 'ERROR.INVALID_COGNUS_RESPONSE_OBJECT' };
        if (t.error) return t;
        try {
          return E(t, o || n);
        } catch (n) {
          try {
            return E(t, o || e);
          } catch (t) {
            throw { data: t, message: 'ERROR.FAILED_TO_DECRYPT' };
          }
        }
      };
      let O = { key: '', oldKey: '' };
      class j extends f {
        constructor() {
          super(h, S);
        }
        encryptString(t) {
          return m(t, this.Configuration.encryption);
        }
        encryptPayload(t) {
          return C(t, O.key, this.Configuration.encryption);
        }
        decryptPayload(t, n) {
          return T(t, O.key, O.oldKey, this.Configuration.encryption, n);
        }
        updateKey(t) {
          w(t, (O = O), this.Storage);
        }
      }
      var B = function (t, n = { token: '' }, e = new S()) {
          (n.token = t), e.set(_.STORAGE.TOKEN, t);
        },
        R = e(73),
        I = e.n(R),
        W = e(26),
        M = e.n(W);
      var P = function (t) {
        return t.split(')').splice(1).join(')');
      };
      var H = function (t, n) {
        return !(!M()(t) || !M()(n)) && P(t.toString()) === P(n.toString());
      };
      var L = function (t, n) {
        if (!Array.isArray(t)) return !1;
        for (let e = 0; e < t.length; e++) if (H(t[e], n)) return !0;
        return !1;
      };
      class N extends f {
        constructor() {
          super();
        }
        getFunctionContent(t) {
          return P(t);
        }
        isEmpty(t) {
          return I()(t);
        }
        isFunction(t) {
          return M()(t);
        }
        isEqualFunction(t, n) {
          return H(t, n);
        }
        containsFunction(t, n) {
          return L(t, n);
        }
      }
      var D = function (
        t,
        n = { token: '' },
        e = new N(),
        r = new j(),
        o = new S()
      ) {
        const a = t.token,
          i = t.key;
        a && e.isFunction(B) && B(a, n, o), i && r.updateKey(i);
      };
      const F = {};
      class X extends f {
        constructor() {
          super(N);
        }
        on(t = '*', n) {
          !this.Validator.isFunction(n) ||
            (F[t] && this.Validator.containsFunction(F[t], n)) ||
            ((F[t] = F[t] || this.reset(t)), F[t].push(n));
        }
        off(t = '*', n) {
          if (F[t] && Array.isArray(F[t]))
            for (let e = 0; e < F[t].length; e++)
              if (F[t][e] === n) {
                F[t].splice(e, 1);
                break;
              }
        }
        emit(t = '*', n) {
          F[t] &&
            F[t].forEach((t) => {
              t(n);
            });
        }
        reset(t = '*') {
          let n = [];
          return (F[t] = n), n;
        }
        getEvents() {
          return F;
        }
      }
      var J = function (t = new X()) {
        t.emit(_.EVENTS.TOKEN_NEGOTIATION_REQUIRED);
      };
      let z;
      if (!z)
        try {
          z = fetch;
        } catch (t) {
          try {
            z = e(92);
          } catch (t) {}
        }
      var U = async function (t, n) {
        let e = await z(t, n);
        const r = await e.json();
        return { response: e, data: r };
      };
      const K = { loginDecryption: !1, getFullResponse: !1 };
      var G = async function (
          t,
          n,
          e = K,
          r = { token: '' },
          o = new j(),
          a = new N(),
          i = new S(),
          s = new X()
        ) {
          try {
            if (
              ((n = e.loginDecryption
                ? o.decryptPayload(n, e.loginDecryption)
                : o.decryptPayload(n)),
              D(n, r, a, o, i),
              (n = e.getFullResponse ? n : n.data || n.error || n),
              200 === t.status)
            )
              return n;
            throw (
              ((401 !== t.status && 403 !== t.status) || J(s),
              t.status,
              n.cognus ? o.decryptPayload(n) : n)
            );
          } catch (t) {
            throw t;
          }
        },
        q = { data: !1, message: !1 };
      const V = { returnType: 'PATH' };
      var Y = function (t = {}, n = '', e = V) {
        const r = n.split('.');
        let o = t;
        for (let t = 0; t < r.length; t++) {
          const e = o[r[t]];
          if (!e) return 'PATH' === V.returnType ? n : void 0;
          o = e;
        }
        return o;
      };
      let $;
      class Q extends f {
        constructor(t = {}) {
          super(h), this.setLanguage(t || this.Configuration.language);
        }
        setLanguage(t = {}) {
          $ = t;
        }
        instant(t = '') {
          return 'string' == typeof t && t.trim().length > 0 ? Y($, t) : t;
        }
      }
      const Z = ['OK', 'WARN', 'FAIL'],
        tt = function (t, n, e) {
          return { status: Z[t], data: n.data, message: e.instant(n.message) };
        };
      class nt extends f {
        constructor() {
          super(Q);
        }
        ok(t = r) {
          return tt(0, t, this.Translate);
        }
        warn(t = r) {
          return tt(1, t, this.Translate);
        }
        error(t = r) {
          return tt(2, t, this.Translate);
        }
      }
      var et = function (t, n = new nt(), e = new j()) {
        try {
          const r = e.decryptPayload(t);
          return n.error({ data: r, message: 'ERROR.HTTP_REQUEST_FAIL' });
        } catch (t) {
          return n.error({ data: t, message: 'ERROR.FAILED_TO_DECRYPT' });
        }
      };
      var rt = function (t = { token: '' }) {
        return {
          'Content-Type': 'application/json',
          'x-access-token': t.token,
        };
      };
      var ot = async function (
          t,
          n,
          e = { token: '' },
          r = new h(),
          o = new j(),
          a = new nt(),
          i = new N(),
          s = new S(),
          c = new X()
        ) {
          try {
            let a = p(t, r),
              u = { method: 'GET', headers: rt(e) },
              { response: f, data: d } = await U(a, u);
            return G(f, d, n, e, o, i, s, c);
          } catch (t) {
            throw et(t, a, o);
          }
        },
        at = { skipEncryption: !1 };
      var it = function (t = {}, n = o, e = new j()) {
          return (
            n.skipEncryption || (t = e.encryptPayload(t)), JSON.stringify(t)
          );
        },
        st = { skipEncryption: !1, loginDecryption: !1, getFullResponse: !1 };
      var ct = async function (
        t,
        n,
        e = a,
        r,
        o = new h(),
        i = new j(),
        s = new nt(),
        c = new N(),
        u = new S(),
        f = new X()
      ) {
        try {
          let a = p(t, o),
            s = { method: 'POST', headers: rt(r), body: it(n, e, i) },
            { response: d, data: l } = await U(a, s);
          return G(d, l, e, r, i, c, u, f);
        } catch (t) {
          throw et(t, s, i);
        }
      };
      const ut = { token: '' };
      class ft extends f {
        constructor() {
          super(h, j);
        }
        get(t = '', n = a) {
          return ot(
            t,
            n,
            ut,
            this.Configuration,
            this.Encryption,
            this.Response,
            this.Validator,
            this.Storage,
            this.PubSub
          );
        }
        post(t = '', n = {}, e = a) {
          return ct(
            t,
            n,
            e,
            ut,
            this.Configuration,
            this.Encryption,
            this.Response,
            this.Validator,
            this.Storage,
            this.PubSub
          );
        }
        updateToken(t = '') {
          return B(t, ut, this.Storage);
        }
      }
      var dt = function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : new ft();
        return t.get('am_modules');
      };
      let lt = {};
      class ht extends f {
        constructor() {
          super();
        }
        set(t, n) {
          return (lt[t] = n);
        }
        get(t) {
          return lt[t];
        }
        list() {
          return lt;
        }
        delete(t) {
          lt[t] = void 0;
        }
        clear() {
          lt = {};
        }
      }
      var pt = function (t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : new ft(),
          e =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : new ht();
        return n.get('am_modules/'.concat(t || e.get(_.STATES.HAS_MODULE)));
      };
      var yt = e(93);
      var vt = function (t = new ht()) {
          const n = t.get(_.STATES.HAS_USER).id;
          let e = t.get(_.STATES.HAS_CLIENT_USER_ID);
          if (!n) throw 'To get a chatbot user, you need a valid user with id';
          return (
            e || ((e = yt()), t.set(_.STATES.HAS_CLIENT_USER_ID, e)),
            `cb_${n}-${e}`
          );
        },
        xt = function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : new ft(),
            e =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : new ht();
          return n.get('am_client_users?client_user_id='.concat(vt(e)));
        };
      const mt = function (t, n = {}, e = new ht()) {
        const r = {
          auth: {
            channel_token: e.get(_.STATES.CHANNEL_TOKEN),
            client_user_id: vt(e),
            stage: _.ENVIRONMENT_IDS[e.get(_.STATES.ENVIRONMENT)],
          },
          context_variables: {
            extracted_entities: [],
            actions: { close_session: { enabled: !1 } },
          },
          input: t,
        };
        return (
          n.logout && (r.context_variables.actions.close_session.enabled = !0),
          r
        );
      };
      var _t = {
          v3: {
            text: function (t, n = new ht()) {
              return mt({ text: t }, {}, n);
            },
            voice: function (t, n = new ht()) {
              return mt({ voice: t }, {}, n);
            },
            postBack: function (t, n = new ht()) {
              return (
                A()(t) ||
                  (t = {
                    name: null,
                    label: null,
                    type: null,
                    value: null,
                    argType: null,
                  }),
                (t.type = t.argType),
                delete t.argType,
                mt({ postback: t }, {}, n)
              );
            },
            logout: function (t = new ht()) {
              return mt({}, { logout: !0 }, t);
            },
          },
        },
        bt = function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : new ft(),
            e =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : new ht();
          return n.post('orchestrator_v3', _t.v3.logout(e));
        },
        gt = {
          ERROR: {
            MODULE_NOT_FOUND: "The following module wan't found",
            SESSION_CREATE_WITHOUT_LOGIN_OR_INIT:
              'To create a session you need a loaded module and user, please run login and init.',
            GET_OR_CREATE_SESSION: 'Error at getOrCreateSession()',
            LOGIN_FAIL: 'Login Failed',
            ENCRYPTION_NOT_INITIALIZED: 'Encryption not initialized',
            INVALID_COGNUS_RESPONSE_OBJECT:
              'To decrypt a payload you must send a valid CognusResponseObject',
            FAILED_TO_DECRYPT: 'Failed to decrypt',
            HTTP_REQUEST_FAIL: 'Http request failed',
          },
          WARN: {
            ALREADY_INSTANCIATED: 'Already instanciated',
            NO_IFRAME_ELEMENT_FOUND:
              "Can't send postback events if no element is found",
          },
        };
      var St = function (
        t,
        n = new ft(),
        e = new j(),
        r = new ht(),
        o = new S(),
        a = new nt()
      ) {
        const i = (t = t.data || t).token,
          s = t.key,
          c = t.user || {};
        return (
          e.updateKey(s),
          n.updateToken(i),
          r.set(_.STATES.HAS_USER, c),
          r.set(_.STATES.HAS_TOKEN, i),
          r.set(_.STATES.HAS_KEY, s),
          o.set(_.STORAGE.USER, c),
          Promise.resolve(a.ok({ token: i, key: s, user: c }))
        );
      };
      var wt = function (t = new ht()) {
        t.set(_.STATES.IS_LOGGED_IN, !0);
      };
      var Ct = async function (
        t,
        n = new ft(),
        e = new j(),
        r = new X(),
        o = new nt(),
        a = new S(),
        i = new ht()
      ) {
        try {
          let s;
          const c = t[0],
            u = t[1];
          return (
            (s =
              (s = await n.post(
                'letmein',
                { email: c, password: e.encryptString(u) },
                { skipEncryption: !0, loginDecryption: u, getFullResponse: !0 }
              )).data || s),
            await St(s, n, e, i, a, o),
            wt(i),
            r.emit(_.EVENTS.LOGGED_IN),
            o.ok({ data: { id: s.user.id, key: s.key, token: s.token } })
          );
        } catch (t) {
          throw (
            (r.emit(_.EVENTS.LOGIN_FAIL),
            o.error({ data: t, message: 'ERROR.LOGIN_FAIL' }))
          );
        }
      };
      const kt = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      var At = function (t) {
        return kt.test(t);
      };
      var Et = function (t, n = new ht()) {
        let e = _.LOGIN_TYPES[1];
        return (
          ('cognus' === t || At(t)) && (e = _.LOGIN_TYPES[0]),
          n.set(_.STATES.LOGIN_METHOD, e),
          e
        );
      };
      var Tt = function (
          t,
          n = new ht(),
          e = new ft(),
          r = new j(),
          o = new X(),
          a = new nt(),
          i = new S()
        ) {
          const s = Et(t[0], n);
          return (
            n.set(_.STATES.LOGIN_METHOD, s),
            s === _.LOGIN_TYPES[0]
              ? Ct(t, e, r, o, a, i, n)
              : St(t, e, r, n, i, a)
          );
        },
        Ot = new RegExp(
          '^.*(' +
            [
              '\\+https:\\/\\/developers.google.com\\/\\+\\/web\\/snippet\\/',
              'googlebot',
              'baiduspider',
              'gurujibot',
              'yandexbot',
              'slurp',
              'msnbot',
              'bingbot',
              'facebookexternalhit',
              'linkedinbot',
              'twitterbot',
              'slackbot',
              'telegrambot',
              'applebot',
              'pingdom',
              'tumblr ',
              'Embedly',
              'spbot',
            ].join('|') +
            ').*$'
        ),
        jt = function (t) {
          t = t || {};
          var n = {
            version: !1,
            language: !1,
            platform: !0,
            os: !0,
            pixelDepth: !0,
            colorDepth: !0,
            resolution: !1,
            isAuthoritative: !0,
            silkAccelerated: !0,
            isKindleFire: !0,
            isDesktop: !0,
            isMobile: !0,
            isTablet: !0,
            isWindows: !0,
            isLinux: !0,
            isLinux64: !0,
            isChromeOS: !0,
            isMac: !0,
            isiPad: !0,
            isiPhone: !0,
            isiPod: !0,
            isAndroid: !0,
            isSamsung: !0,
            isSmartTV: !0,
            isRaspberry: !0,
            isBlackberry: !0,
            isTouchScreen: !0,
            isOpera: !1,
            isIE: !1,
            isEdge: !1,
            isIECompatibilityMode: !1,
            isSafari: !1,
            isFirefox: !1,
            isWebkit: !1,
            isChrome: !1,
            isKonqueror: !1,
            isOmniWeb: !1,
            isSeaMonkey: !1,
            isFlock: !1,
            isAmaya: !1,
            isPhantomJS: !1,
            isEpiphany: !1,
            source: !1,
            cpuCores: !1,
          };
          for (var e in t)
            t.hasOwnProperty(e) && void 0 !== n[e] && (n[e] = t[e]);
          return (
            (this.options = n),
            (this.version = '1.0.0'),
            (this._Versions = {
              Edge: /Edge\/([\d\w\.\-]+)/i,
              Firefox: /firefox\/([\d\w\.\-]+)/i,
              IE: /msie\s([\d\.]+[\d])|trident\/\d+\.\d+;.*[rv:]+(\d+\.\d)/i,
              Chrome: /chrome\/([\d\w\.\-]+)/i,
              Chromium: /(?:chromium|crios)\/([\d\w\.\-]+)/i,
              Safari: /version\/([\d\w\.\-]+)/i,
              Opera: /version\/([\d\w\.\-]+)|OPR\/([\d\w\.\-]+)/i,
              Ps3: /([\d\w\.\-]+)\)\s*$/i,
              Psp: /([\d\w\.\-]+)\)?\s*$/i,
              Amaya: /amaya\/([\d\w\.\-]+)/i,
              SeaMonkey: /seamonkey\/([\d\w\.\-]+)/i,
              OmniWeb: /omniweb\/v([\d\w\.\-]+)/i,
              Flock: /flock\/([\d\w\.\-]+)/i,
              Epiphany: /epiphany\/([\d\w\.\-]+)/i,
              WinJs: /msapphost\/([\d\w\.\-]+)/i,
              PhantomJS: /phantomjs\/([\d\w\.\-]+)/i,
              UC: /UCBrowser\/([\d\w\.]+)/i,
            }),
            (this._Browsers = {
              Edge: /edge/i,
              Amaya: /amaya/i,
              Konqueror: /konqueror/i,
              Epiphany: /epiphany/i,
              SeaMonkey: /seamonkey/i,
              Flock: /flock/i,
              OmniWeb: /omniweb/i,
              Chromium: /chromium|crios/i,
              Chrome: /chrome/i,
              Safari: /safari/i,
              IE: /msie|trident/i,
              Opera: /opera|OPR/i,
              PS3: /playstation 3/i,
              PSP: /playstation portable/i,
              Firefox: /firefox/i,
              WinJs: /msapphost/i,
              PhantomJS: /phantomjs/i,
              UC: /UCBrowser/i,
            }),
            (this._OS = {
              Windows10: /windows nt 10\.0/i,
              Windows81: /windows nt 6\.3/i,
              Windows8: /windows nt 6\.2/i,
              Windows7: /windows nt 6\.1/i,
              UnknownWindows: /windows nt 6\.\d+/i,
              WindowsVista: /windows nt 6\.0/i,
              Windows2003: /windows nt 5\.2/i,
              WindowsXP: /windows nt 5\.1/i,
              Windows2000: /windows nt 5\.0/i,
              WindowsPhone8: /windows phone 8\./,
              OSXCheetah: /os x 10[._]0/i,
              OSXPuma: /os x 10[._]1(\D|$)/i,
              OSXJaguar: /os x 10[._]2/i,
              OSXPanther: /os x 10[._]3/i,
              OSXTiger: /os x 10[._]4/i,
              OSXLeopard: /os x 10[._]5/i,
              OSXSnowLeopard: /os x 10[._]6/i,
              OSXLion: /os x 10[._]7/i,
              OSXMountainLion: /os x 10[._]8/i,
              OSXMavericks: /os x 10[._]9/i,
              OSXYosemite: /os x 10[._]10/i,
              OSXElCapitan: /os x 10[._]11/i,
              OSXSierra: /os x 10[._]12/i,
              Mac: /os x/i,
              Linux: /linux/i,
              Linux64: /linux x86_64/i,
              ChromeOS: /cros/i,
              Wii: /wii/i,
              PS3: /playstation 3/i,
              PSP: /playstation portable/i,
              iPad: /\(iPad.*os (\d+)[._](\d+)/i,
              iPhone: /\(iPhone.*os (\d+)[._](\d+)/i,
              Bada: /Bada\/(\d+)\.(\d+)/i,
              Curl: /curl\/(\d+)\.(\d+)\.(\d+)/i,
            }),
            (this._Platform = {
              Windows: /windows nt/i,
              WindowsPhone: /windows phone/i,
              Mac: /macintosh/i,
              Linux: /linux/i,
              Wii: /wii/i,
              Playstation: /playstation/i,
              iPad: /ipad/i,
              iPod: /ipod/i,
              iPhone: /iphone/i,
              Android: /android/i,
              Blackberry: /blackberry/i,
              Samsung: /samsung/i,
              Curl: /curl/i,
            }),
            (this.DefaultAgent = {
              isAuthoritative: !0,
              isMobile: !1,
              isTablet: !1,
              isiPad: !1,
              isiPod: !1,
              isiPhone: !1,
              isAndroid: !1,
              isBlackberry: !1,
              isOpera: !1,
              isIE: !1,
              isEdge: !1,
              isIECompatibilityMode: !1,
              isSafari: !1,
              isFirefox: !1,
              isWebkit: !1,
              isChrome: !1,
              isKonqueror: !1,
              isOmniWeb: !1,
              isSeaMonkey: !1,
              isFlock: !1,
              isAmaya: !1,
              isPhantomJS: !1,
              isEpiphany: !1,
              isDesktop: !1,
              isWindows: !1,
              isLinux: !1,
              isLinux64: !1,
              isMac: !1,
              isChromeOS: !1,
              isBada: !1,
              isSamsung: !1,
              isRaspberry: !1,
              isBot: !1,
              isCurl: !1,
              isAndroidTablet: !1,
              isWinJs: !1,
              isKindleFire: !1,
              isSilk: !1,
              isCaptive: !1,
              isSmartTV: !1,
              isUC: !1,
              isTouchScreen: !1,
              silkAccelerated: !1,
              colorDepth: -1,
              pixelDepth: -1,
              resolution: [],
              cpuCores: -1,
              language: 'unknown',
              browser: 'unknown',
              version: 'unknown',
              os: 'unknown',
              platform: 'unknown',
              geoIp: {},
              source: '',
              hashInt: function (t) {
                var n,
                  e,
                  r = 0;
                if (0 === t.length) return r;
                for (n = 0, e = t.length; n < e; n++)
                  (r = (r << 5) - r + t.charCodeAt(n)), (r |= 0);
                return r;
              },
              hashMD5: function (t) {
                function n(t, n) {
                  return (t << n) | (t >>> (32 - n));
                }
                function e(t, n) {
                  var e, r, o, a, i;
                  return (
                    (o = 2147483648 & t),
                    (a = 2147483648 & n),
                    (i = (1073741823 & t) + (1073741823 & n)),
                    (e = 1073741824 & t) & (r = 1073741824 & n)
                      ? 2147483648 ^ i ^ o ^ a
                      : e | r
                      ? 1073741824 & i
                        ? 3221225472 ^ i ^ o ^ a
                        : 1073741824 ^ i ^ o ^ a
                      : i ^ o ^ a
                  );
                }
                function r(t, r, o, a, i, s, c) {
                  return (
                    (t = e(
                      t,
                      e(
                        e(
                          (function (t, n, e) {
                            return (t & n) | (~t & e);
                          })(r, o, a),
                          i
                        ),
                        c
                      )
                    )),
                    e(n(t, s), r)
                  );
                }
                function o(t, r, o, a, i, s, c) {
                  return (
                    (t = e(
                      t,
                      e(
                        e(
                          (function (t, n, e) {
                            return (t & e) | (n & ~e);
                          })(r, o, a),
                          i
                        ),
                        c
                      )
                    )),
                    e(n(t, s), r)
                  );
                }
                function a(t, r, o, a, i, s, c) {
                  return (
                    (t = e(
                      t,
                      e(
                        e(
                          (function (t, n, e) {
                            return t ^ n ^ e;
                          })(r, o, a),
                          i
                        ),
                        c
                      )
                    )),
                    e(n(t, s), r)
                  );
                }
                function i(t, r, o, a, i, s, c) {
                  return (
                    (t = e(
                      t,
                      e(
                        e(
                          (function (t, n, e) {
                            return n ^ (t | ~e);
                          })(r, o, a),
                          i
                        ),
                        c
                      )
                    )),
                    e(n(t, s), r)
                  );
                }
                function s(t) {
                  var n,
                    e = '',
                    r = '';
                  for (n = 0; n <= 3; n++)
                    e += (r =
                      '0' + ((t >>> (8 * n)) & 255).toString(16)).substr(
                      r.length - 2,
                      2
                    );
                  return e;
                }
                var c, u, f, d, l, h, p, y, v, x;
                for (
                  c = (function (t) {
                    for (
                      var n,
                        e = t.length,
                        r = e + 8,
                        o = 16 * ((r - (r % 64)) / 64 + 1),
                        a = new Array(o - 1),
                        i = 0,
                        s = 0;
                      s < e;

                    )
                      (i = (s % 4) * 8),
                        (a[(n = (s - (s % 4)) / 4)] =
                          a[n] | (t.charCodeAt(s) << i)),
                        s++;
                    return (
                      (i = (s % 4) * 8),
                      (a[(n = (s - (s % 4)) / 4)] = a[n] | (128 << i)),
                      (a[o - 2] = e << 3),
                      (a[o - 1] = e >>> 29),
                      a
                    );
                  })(
                    (t = (function (t) {
                      t = t.replace(/\r\n/g, '\n');
                      for (var n = '', e = 0; e < t.length; e++) {
                        var r = t.charCodeAt(e);
                        r < 128
                          ? (n += String.fromCharCode(r))
                          : r > 127 && r < 2048
                          ? ((n += String.fromCharCode((r >> 6) | 192)),
                            (n += String.fromCharCode((63 & r) | 128)))
                          : ((n += String.fromCharCode((r >> 12) | 224)),
                            (n += String.fromCharCode(((r >> 6) & 63) | 128)),
                            (n += String.fromCharCode((63 & r) | 128)));
                      }
                      return n;
                    })(t))
                  ),
                    p = 1732584193,
                    y = 4023233417,
                    v = 2562383102,
                    x = 271733878,
                    u = 0;
                  u < c.length;
                  u += 16
                )
                  (f = p),
                    (d = y),
                    (l = v),
                    (h = x),
                    (p = r(p, y, v, x, c[u + 0], 7, 3614090360)),
                    (x = r(x, p, y, v, c[u + 1], 12, 3905402710)),
                    (v = r(v, x, p, y, c[u + 2], 17, 606105819)),
                    (y = r(y, v, x, p, c[u + 3], 22, 3250441966)),
                    (p = r(p, y, v, x, c[u + 4], 7, 4118548399)),
                    (x = r(x, p, y, v, c[u + 5], 12, 1200080426)),
                    (v = r(v, x, p, y, c[u + 6], 17, 2821735955)),
                    (y = r(y, v, x, p, c[u + 7], 22, 4249261313)),
                    (p = r(p, y, v, x, c[u + 8], 7, 1770035416)),
                    (x = r(x, p, y, v, c[u + 9], 12, 2336552879)),
                    (v = r(v, x, p, y, c[u + 10], 17, 4294925233)),
                    (y = r(y, v, x, p, c[u + 11], 22, 2304563134)),
                    (p = r(p, y, v, x, c[u + 12], 7, 1804603682)),
                    (x = r(x, p, y, v, c[u + 13], 12, 4254626195)),
                    (v = r(v, x, p, y, c[u + 14], 17, 2792965006)),
                    (p = o(
                      p,
                      (y = r(y, v, x, p, c[u + 15], 22, 1236535329)),
                      v,
                      x,
                      c[u + 1],
                      5,
                      4129170786
                    )),
                    (x = o(x, p, y, v, c[u + 6], 9, 3225465664)),
                    (v = o(v, x, p, y, c[u + 11], 14, 643717713)),
                    (y = o(y, v, x, p, c[u + 0], 20, 3921069994)),
                    (p = o(p, y, v, x, c[u + 5], 5, 3593408605)),
                    (x = o(x, p, y, v, c[u + 10], 9, 38016083)),
                    (v = o(v, x, p, y, c[u + 15], 14, 3634488961)),
                    (y = o(y, v, x, p, c[u + 4], 20, 3889429448)),
                    (p = o(p, y, v, x, c[u + 9], 5, 568446438)),
                    (x = o(x, p, y, v, c[u + 14], 9, 3275163606)),
                    (v = o(v, x, p, y, c[u + 3], 14, 4107603335)),
                    (y = o(y, v, x, p, c[u + 8], 20, 1163531501)),
                    (p = o(p, y, v, x, c[u + 13], 5, 2850285829)),
                    (x = o(x, p, y, v, c[u + 2], 9, 4243563512)),
                    (v = o(v, x, p, y, c[u + 7], 14, 1735328473)),
                    (p = a(
                      p,
                      (y = o(y, v, x, p, c[u + 12], 20, 2368359562)),
                      v,
                      x,
                      c[u + 5],
                      4,
                      4294588738
                    )),
                    (x = a(x, p, y, v, c[u + 8], 11, 2272392833)),
                    (v = a(v, x, p, y, c[u + 11], 16, 1839030562)),
                    (y = a(y, v, x, p, c[u + 14], 23, 4259657740)),
                    (p = a(p, y, v, x, c[u + 1], 4, 2763975236)),
                    (x = a(x, p, y, v, c[u + 4], 11, 1272893353)),
                    (v = a(v, x, p, y, c[u + 7], 16, 4139469664)),
                    (y = a(y, v, x, p, c[u + 10], 23, 3200236656)),
                    (p = a(p, y, v, x, c[u + 13], 4, 681279174)),
                    (x = a(x, p, y, v, c[u + 0], 11, 3936430074)),
                    (v = a(v, x, p, y, c[u + 3], 16, 3572445317)),
                    (y = a(y, v, x, p, c[u + 6], 23, 76029189)),
                    (p = a(p, y, v, x, c[u + 9], 4, 3654602809)),
                    (x = a(x, p, y, v, c[u + 12], 11, 3873151461)),
                    (v = a(v, x, p, y, c[u + 15], 16, 530742520)),
                    (p = i(
                      p,
                      (y = a(y, v, x, p, c[u + 2], 23, 3299628645)),
                      v,
                      x,
                      c[u + 0],
                      6,
                      4096336452
                    )),
                    (x = i(x, p, y, v, c[u + 7], 10, 1126891415)),
                    (v = i(v, x, p, y, c[u + 14], 15, 2878612391)),
                    (y = i(y, v, x, p, c[u + 5], 21, 4237533241)),
                    (p = i(p, y, v, x, c[u + 12], 6, 1700485571)),
                    (x = i(x, p, y, v, c[u + 3], 10, 2399980690)),
                    (v = i(v, x, p, y, c[u + 10], 15, 4293915773)),
                    (y = i(y, v, x, p, c[u + 1], 21, 2240044497)),
                    (p = i(p, y, v, x, c[u + 8], 6, 1873313359)),
                    (x = i(x, p, y, v, c[u + 15], 10, 4264355552)),
                    (v = i(v, x, p, y, c[u + 6], 15, 2734768916)),
                    (y = i(y, v, x, p, c[u + 13], 21, 1309151649)),
                    (p = i(p, y, v, x, c[u + 4], 6, 4149444226)),
                    (x = i(x, p, y, v, c[u + 11], 10, 3174756917)),
                    (v = i(v, x, p, y, c[u + 2], 15, 718787259)),
                    (y = i(y, v, x, p, c[u + 9], 21, 3951481745)),
                    (p = e(p, f)),
                    (y = e(y, d)),
                    (v = e(v, l)),
                    (x = e(x, h));
                return (s(p) + s(y) + s(v) + s(x)).toLowerCase();
              },
            }),
            (this.Agent = {}),
            (this.getBrowser = function (t) {
              switch (!0) {
                case this._Browsers.Edge.test(t):
                  return (this.Agent.isEdge = !0), 'Edge';
                case this._Browsers.PhantomJS.test(t):
                  return (this.Agent.isPhantomJS = !0), 'PhantomJS';
                case this._Browsers.Konqueror.test(t):
                  return (this.Agent.isKonqueror = !0), 'Konqueror';
                case this._Browsers.Amaya.test(t):
                  return (this.Agent.isAmaya = !0), 'Amaya';
                case this._Browsers.Epiphany.test(t):
                  return (this.Agent.isEpiphany = !0), 'Epiphany';
                case this._Browsers.SeaMonkey.test(t):
                  return (this.Agent.isSeaMonkey = !0), 'SeaMonkey';
                case this._Browsers.Flock.test(t):
                  return (this.Agent.isFlock = !0), 'Flock';
                case this._Browsers.OmniWeb.test(t):
                  return (this.Agent.isOmniWeb = !0), 'OmniWeb';
                case this._Browsers.Opera.test(t):
                  return (this.Agent.isOpera = !0), 'Opera';
                case this._Browsers.Chromium.test(t):
                  return (this.Agent.isChrome = !0), 'Chromium';
                case this._Browsers.Chrome.test(t):
                  return (this.Agent.isChrome = !0), 'Chrome';
                case this._Browsers.Safari.test(t):
                  return (this.Agent.isSafari = !0), 'Safari';
                case this._Browsers.WinJs.test(t):
                  return (this.Agent.isWinJs = !0), 'WinJs';
                case this._Browsers.IE.test(t):
                  return (this.Agent.isIE = !0), 'IE';
                case this._Browsers.PS3.test(t):
                  return 'ps3';
                case this._Browsers.PSP.test(t):
                  return 'psp';
                case this._Browsers.Firefox.test(t):
                  return (this.Agent.isFirefox = !0), 'Firefox';
                case this._Browsers.UC.test(t):
                  return (this.Agent.isUC = !0), 'UCBrowser';
                default:
                  return 0 !== t.indexOf('Mozilla') &&
                    /^([\d\w\-\.]+)\/[\d\w\.\-]+/i.test(t)
                    ? ((this.Agent.isAuthoritative = !1), RegExp.$1)
                    : 'unknown';
              }
            }),
            (this.getBrowserVersion = function (t) {
              switch (this.Agent.browser) {
                case 'Edge':
                  if (this._Versions.Edge.test(t)) return RegExp.$1;
                  break;
                case 'PhantomJS':
                  if (this._Versions.PhantomJS.test(t)) return RegExp.$1;
                  break;
                case 'Chrome':
                  if (this._Versions.Chrome.test(t)) return RegExp.$1;
                  break;
                case 'Chromium':
                  if (this._Versions.Chromium.test(t)) return RegExp.$1;
                  break;
                case 'Safari':
                  if (this._Versions.Safari.test(t)) return RegExp.$1;
                  break;
                case 'Opera':
                  if (this._Versions.Opera.test(t))
                    return RegExp.$1 ? RegExp.$1 : RegExp.$2;
                  break;
                case 'Firefox':
                  if (this._Versions.Firefox.test(t)) return RegExp.$1;
                  break;
                case 'WinJs':
                  if (this._Versions.WinJs.test(t)) return RegExp.$1;
                  break;
                case 'IE':
                  if (this._Versions.IE.test(t))
                    return RegExp.$2 ? RegExp.$2 : RegExp.$1;
                  break;
                case 'ps3':
                  if (this._Versions.Ps3.test(t)) return RegExp.$1;
                  break;
                case 'psp':
                  if (this._Versions.Psp.test(t)) return RegExp.$1;
                  break;
                case 'Amaya':
                  if (this._Versions.Amaya.test(t)) return RegExp.$1;
                  break;
                case 'Epiphany':
                  if (this._Versions.Epiphany.test(t)) return RegExp.$1;
                  break;
                case 'SeaMonkey':
                  if (this._Versions.SeaMonkey.test(t)) return RegExp.$1;
                  break;
                case 'Flock':
                  if (this._Versions.Flock.test(t)) return RegExp.$1;
                  break;
                case 'OmniWeb':
                  if (this._Versions.OmniWeb.test(t)) return RegExp.$1;
                  break;
                case 'UCBrowser':
                  if (this._Versions.UC.test(t)) return RegExp.$1;
                  break;
                default:
                  if (
                    'unknown' !== this.Agent.browser &&
                    new RegExp(
                      this.Agent.browser + '[\\/ ]([\\d\\w\\.\\-]+)',
                      'i'
                    ).test(t)
                  )
                    return RegExp.$1;
              }
            }),
            (this.getOS = function (t) {
              switch (!0) {
                case this._OS.WindowsVista.test(t):
                  return (this.Agent.isWindows = !0), 'Windows Vista';
                case this._OS.Windows7.test(t):
                  return (this.Agent.isWindows = !0), 'Windows 7';
                case this._OS.Windows8.test(t):
                  return (this.Agent.isWindows = !0), 'Windows 8';
                case this._OS.Windows81.test(t):
                  return (this.Agent.isWindows = !0), 'Windows 8.1';
                case this._OS.Windows10.test(t):
                  return (this.Agent.isWindows = !0), 'Windows 10.0';
                case this._OS.Windows2003.test(t):
                  return (this.Agent.isWindows = !0), 'Windows 2003';
                case this._OS.WindowsXP.test(t):
                  return (this.Agent.isWindows = !0), 'Windows XP';
                case this._OS.Windows2000.test(t):
                  return (this.Agent.isWindows = !0), 'Windows 2000';
                case this._OS.WindowsPhone8.test(t):
                  return 'Windows Phone 8';
                case this._OS.Linux64.test(t):
                  return (
                    (this.Agent.isLinux = !0),
                    (this.Agent.isLinux64 = !0),
                    'Linux 64'
                  );
                case this._OS.Linux.test(t):
                  return (this.Agent.isLinux = !0), 'Linux';
                case this._OS.ChromeOS.test(t):
                  return (this.Agent.isChromeOS = !0), 'Chrome OS';
                case this._OS.Wii.test(t):
                  return 'Wii';
                case this._OS.PS3.test(t):
                case this._OS.PSP.test(t):
                  return 'Playstation';
                case this._OS.OSXCheetah.test(t):
                  return (this.Agent.isMac = !0), 'OS X Cheetah';
                case this._OS.OSXPuma.test(t):
                  return (this.Agent.isMac = !0), 'OS X Puma';
                case this._OS.OSXJaguar.test(t):
                  return (this.Agent.isMac = !0), 'OS X Jaguar';
                case this._OS.OSXPanther.test(t):
                  return (this.Agent.isMac = !0), 'OS X Panther';
                case this._OS.OSXTiger.test(t):
                  return (this.Agent.isMac = !0), 'OS X Tiger';
                case this._OS.OSXLeopard.test(t):
                  return (this.Agent.isMac = !0), 'OS X Leopard';
                case this._OS.OSXSnowLeopard.test(t):
                  return (this.Agent.isMac = !0), 'OS X Snow Leopard';
                case this._OS.OSXLion.test(t):
                  return (this.Agent.isMac = !0), 'OS X Lion';
                case this._OS.OSXMountainLion.test(t):
                  return (this.Agent.isMac = !0), 'OS X Mountain Lion';
                case this._OS.OSXMavericks.test(t):
                  return (this.Agent.isMac = !0), 'OS X Mavericks';
                case this._OS.OSXYosemite.test(t):
                  return (this.Agent.isMac = !0), 'OS X Yosemite';
                case this._OS.OSXElCapitan.test(t):
                  return (this.Agent.isMac = !0), 'OS X El Capitan';
                case this._OS.OSXSierra.test(t):
                  return (this.Agent.isMac = !0), 'macOS Sierra';
                case this._OS.Mac.test(t):
                  return (this.Agent.isMac = !0), 'OS X';
                case this._OS.iPad.test(t):
                  return (
                    (this.Agent.isiPad = !0),
                    t.match(this._OS.iPad)[0].replace('_', '.')
                  );
                case this._OS.iPhone.test(t):
                  return (
                    (this.Agent.isiPhone = !0),
                    t.match(this._OS.iPhone)[0].replace('_', '.')
                  );
                case this._OS.Bada.test(t):
                  return (this.Agent.isBada = !0), 'Bada';
                case this._OS.Curl.test(t):
                  return (this.Agent.isCurl = !0), 'Curl';
                default:
                  return 'unknown';
              }
            }),
            (this.getPlatform = function (t) {
              switch (!0) {
                case this._Platform.Windows.test(t):
                  return 'Microsoft Windows';
                case this._Platform.WindowsPhone.test(t):
                  return (
                    (this.Agent.isWindowsPhone = !0), 'Microsoft Windows Phone'
                  );
                case this._Platform.Mac.test(t):
                  return 'Apple Mac';
                case this._Platform.Curl.test(t):
                  return 'Curl';
                case this._Platform.Android.test(t):
                  return (this.Agent.isAndroid = !0), 'Android';
                case this._Platform.Blackberry.test(t):
                  return (this.Agent.isBlackberry = !0), 'Blackberry';
                case this._Platform.Linux.test(t):
                  return 'Linux';
                case this._Platform.Wii.test(t):
                  return 'Wii';
                case this._Platform.Playstation.test(t):
                  return 'Playstation';
                case this._Platform.iPad.test(t):
                  return (this.Agent.isiPad = !0), 'iPad';
                case this._Platform.iPod.test(t):
                  return (this.Agent.isiPod = !0), 'iPod';
                case this._Platform.iPhone.test(t):
                  return (this.Agent.isiPhone = !0), 'iPhone';
                case this._Platform.Samsung.test(t):
                  return (this.Agent.isiSamsung = !0), 'Samsung';
                default:
                  return 'unknown';
              }
            }),
            (this.testCompatibilityMode = function () {
              var t = this;
              if (this.Agent.isIE && /Trident\/(\d)\.0/i.test(t.Agent.source)) {
                var n = parseInt(RegExp.$1, 10),
                  e = parseInt(t.Agent.version, 10);
                7 === e &&
                  7 === n &&
                  ((t.Agent.isIECompatibilityMode = !0),
                  (t.Agent.version = 11)),
                  7 === e &&
                    6 === n &&
                    ((t.Agent.isIECompatibilityMode = !0),
                    (t.Agent.version = 10)),
                  7 === e &&
                    5 === n &&
                    ((t.Agent.isIECompatibilityMode = !0),
                    (t.Agent.version = 9)),
                  7 === e &&
                    4 === n &&
                    ((t.Agent.isIECompatibilityMode = !0),
                    (t.Agent.version = 8));
              }
            }),
            (this.testSilk = function () {
              switch (!0) {
                case new RegExp('silk', 'gi').test(this.Agent.source):
                  this.Agent.isSilk = !0;
              }
              return (
                /Silk-Accelerated=true/gi.test(this.Agent.source) &&
                  (this.Agent.SilkAccelerated = !0),
                !!this.Agent.isSilk && 'Silk'
              );
            }),
            (this.testKindleFire = function () {
              var t = this;
              switch (!0) {
                case /KFOT/gi.test(t.Agent.source):
                  return (this.Agent.isKindleFire = !0), 'Kindle Fire';
                case /KFTT/gi.test(t.Agent.source):
                  return (this.Agent.isKindleFire = !0), 'Kindle Fire HD';
                case /KFJWI/gi.test(t.Agent.source):
                  return (this.Agent.isKindleFire = !0), 'Kindle Fire HD 8.9';
                case /KFJWA/gi.test(t.Agent.source):
                  return (
                    (this.Agent.isKindleFire = !0), 'Kindle Fire HD 8.9 4G'
                  );
                case /KFSOWI/gi.test(t.Agent.source):
                  return (this.Agent.isKindleFire = !0), 'Kindle Fire HD 7';
                case /KFTHWI/gi.test(t.Agent.source):
                  return (this.Agent.isKindleFire = !0), 'Kindle Fire HDX 7';
                case /KFTHWA/gi.test(t.Agent.source):
                  return (this.Agent.isKindleFire = !0), 'Kindle Fire HDX 7 4G';
                case /KFAPWI/gi.test(t.Agent.source):
                  return (this.Agent.isKindleFire = !0), 'Kindle Fire HDX 8.9';
                case /KFAPWA/gi.test(t.Agent.source):
                  return (
                    (this.Agent.isKindleFire = !0), 'Kindle Fire HDX 8.9 4G'
                  );
                default:
                  return !1;
              }
            }),
            (this.testCaptiveNetwork = function () {
              switch (!0) {
                case /CaptiveNetwork/gi.test(this.Agent.source):
                  return (
                    (this.Agent.isCaptive = !0),
                    (this.Agent.isMac = !0),
                    (this.Agent.platform = 'Apple Mac'),
                    'CaptiveNetwork'
                  );
                default:
                  return !1;
              }
            }),
            (this.testMobile = function () {
              var t = this;
              switch (!0) {
                case t.Agent.isWindows:
                case t.Agent.isLinux:
                case t.Agent.isMac:
                case t.Agent.isChromeOS:
                  t.Agent.isDesktop = !0;
                  break;
                case t.Agent.isAndroid:
                case t.Agent.isSamsung:
                  (t.Agent.isMobile = !0), (t.Agent.isDesktop = !1);
              }
              switch (!0) {
                case t.Agent.isiPad:
                case t.Agent.isiPod:
                case t.Agent.isiPhone:
                case t.Agent.isBada:
                case t.Agent.isBlackberry:
                case t.Agent.isAndroid:
                case t.Agent.isWindowsPhone:
                  (t.Agent.isMobile = !0), (t.Agent.isDesktop = !1);
              }
              /mobile/i.test(t.Agent.source) &&
                ((t.Agent.isMobile = !0), (t.Agent.isDesktop = !1));
            }),
            (this.testTablet = function () {
              var t = this;
              switch (!0) {
                case t.Agent.isiPad:
                case t.Agent.isAndroidTablet:
                case t.Agent.isKindleFire:
                  t.Agent.isTablet = !0;
              }
              /tablet/i.test(t.Agent.source) && (t.Agent.isTablet = !0);
            }),
            (this.testNginxGeoIP = function (t) {
              var n = this;
              Object.keys(t).forEach(function (e) {
                /^GEOIP/i.test(e) && (n.Agent.geoIp[e] = t[e]);
              });
            }),
            (this.testBot = function () {
              var t = this,
                n = Ot.exec(t.Agent.source.toLowerCase());
              n
                ? (t.Agent.isBot = n[1])
                : t.Agent.isAuthoritative ||
                  (t.Agent.isBot = /bot/i.test(t.Agent.source));
            }),
            (this.testSmartTV = function () {
              var t = new RegExp(
                'smart-tv|smarttv|googletv|appletv|hbbtv|pov_tv|netcast.tv',
                'gi'
              ).exec(this.Agent.source.toLowerCase());
              t && (this.Agent.isSmartTV = t[1]);
            }),
            (this.testAndroidTablet = function () {
              this.Agent.isAndroid &&
                !/mobile/i.test(this.Agent.source) &&
                (this.Agent.isAndroidTablet = !0);
            }),
            (this.testTouchSupport = function () {
              this.Agent.isTouchScreen =
                'ontouchstart' in window ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0;
            }),
            (this.getLaguage = function () {
              this.Agent.language = (
                navigator.language ||
                navigator.userLanguage ||
                navigator.browserLanguage ||
                navigator.systemLanguage ||
                ''
              ).toLowerCase();
            }),
            (this.getColorDepth = function () {
              this.Agent.colorDepth = screen.colorDepth || -1;
            }),
            (this.getScreenResolution = function () {
              this.Agent.resolution = [screen.availWidth, screen.availHeight];
            }),
            (this.getPixelDepth = function () {
              this.Agent.pixelDepth = screen.pixelDepth || -1;
            }),
            (this.getCPU = function () {
              this.Agent.cpuCores = navigator.hardwareConcurrency || -1;
            }),
            (this.reset = function () {
              var t = this;
              for (var n in t.DefaultAgent)
                t.DefaultAgent.hasOwnProperty(n) &&
                  (t.Agent[n] = t.DefaultAgent[n]);
              return t;
            }),
            (this.parse = function (t) {
              t = t || navigator.userAgent;
              var n = new jt();
              return (
                (n.Agent.source = t.replace(/^\s*/, '').replace(/\s*$/, '')),
                (n.Agent.os = n.getOS(n.Agent.source)),
                (n.Agent.platform = n.getPlatform(n.Agent.source)),
                (n.Agent.browser = n.getBrowser(n.Agent.source)),
                (n.Agent.version = n.getBrowserVersion(n.Agent.source)),
                n.testBot(),
                n.testSmartTV(),
                n.testMobile(),
                n.testAndroidTablet(),
                n.testTablet(),
                n.testCompatibilityMode(),
                n.testSilk(),
                n.testKindleFire(),
                n.testCaptiveNetwork(),
                n.testTouchSupport(),
                n.getLaguage(),
                n.getColorDepth(),
                n.getPixelDepth(),
                n.getScreenResolution(),
                n.getCPU(),
                n.Agent
              );
            }),
            (this.get = function (t) {
              var n = this.parse(),
                e = [];
              for (var r in this.options)
                this.options.hasOwnProperty(r) &&
                  !0 === this.options[r] &&
                  e.push(n[r]);
              t && e.push(t),
                !this.options.resolution && n.isMobile && e.push(n.resolution);
              var o = n.hashMD5(e.join(':'));
              return [
                o.slice(0, 8),
                o.slice(8, 12),
                '4' + o.slice(12, 15),
                'b' + o.slice(15, 18),
                o.slice(20),
              ].join('-');
            }),
            (this.Agent = this.DefaultAgent),
            this
          );
        };
      var Bt = {
        info: () => new jt().parse(),
        machine() {
          var t = localStorage.getItem('bluedarwin-chatbot__machine_uuid');
          return (
            t ||
            ((t =
              new jt().get() +
              '_' +
              new Date().getTime() +
              '_' +
              'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
                /[xy]/g,
                function (t) {
                  var n = (16 * Math.random()) | 0;
                  return ('x' == t ? n : (3 & n) | 8).toString(16);
                }
              )),
            localStorage.setItem('bluedarwin-chatbot__machine_uuid', t),
            t)
          );
        },
      };
      var Rt = async function (
        t,
        n = new ht(),
        e = new ft(),
        r = new j(),
        o = new X(),
        a = new nt(),
        i = new S()
      ) {
        try {
          let s;
          const c = t[0],
            u = t[1];
          let f = localStorage.getItem('bluedarwin-chatbot__machine_uuid');
          return (
            f ||
              ((f = Bt.machine() + Math.random().toString(36).substring(10)),
              localStorage.setItem('bluedarwin-chatbot__machine_uuid', f)),
            (s =
              (s = await e.post(
                'let-the-chatbot-in-v2',
                { channelToken: c, apiKey: u, machineUuid: f },
                {
                  skipEncryption: !0,
                  loginDecryption: t[1],
                  getFullResponse: !0,
                }
              )).data || s),
            await St(s, e, r, n, i, a),
            wt(n),
            o.emit(_.EVENTS.LOGGED_IN),
            a.ok({
              data: {
                module: s.module,
                key: s.key,
                token: s.token,
                user: s.user,
              },
            })
          );
        } catch (t) {
          throw (
            (o.emit(_.EVENTS.LOGIN_FAIL),
            a.error({ data: t, message: 'ERROR.LOGIN_FAIL' }))
          );
        }
      };
      var It = function (t = new ht(), n = new X(), e = new S()) {
        return (
          t.delete(_.STATES.IS_LOGGED_IN),
          t.delete(_.STATES.LOGIN_METHOD),
          t.delete(_.STATES.HAS_USER),
          t.delete(_.STATES.HAS_TOKEN),
          t.delete(_.STATES.HAS_KEY),
          t.delete(_.STATES.MODEL_INTENT),
          t.delete(_.STATES.MODEL_MODULE),
          t.delete(_.STATES.MODEL_CHANNELS),
          t.delete(_.STATES.MODEL_SESSION),
          e.delete(_.STORAGE.TOKEN),
          e.delete(_.STORAGE.KEY),
          e.delete(_.STORAGE.OLD_KEY),
          e.delete(_.STORAGE.USER),
          n.emit(_.EVENTS.LOGGED_OUT),
          Promise.resolve()
        );
      };
      class Wt extends f {
        constructor() {
          super(ht, ft, j, ft, X, nt, S);
        }
        login(t = []) {
          return Tt(
            t,
            this.State,
            this.Http,
            this.Encryption,
            this.PubSub,
            this.Response,
            this.Storage
          );
        }
        loginChatbot(t = []) {
          return Rt(
            t,
            this.State,
            this.Http,
            this.Encryption,
            this.PubSub,
            this.Response,
            this.Storage
          );
        }
        logout() {
          return It(this.State, this.PubSub, this.Storage);
        }
      }
      function Mt(t, n, e, r, o, a, i) {
        try {
          var s = t[a](i),
            c = s.value;
        } catch (t) {
          return void e(t);
        }
        s.done ? n(c) : Promise.resolve(c).then(r, o);
      }
      function Pt(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Ht(t, n, e) {
        return n && Pt(t.prototype, n), e && Pt(t, e), t;
      }
      function Lt(t, n) {
        if (!Object.prototype.hasOwnProperty.call(t, n))
          throw new TypeError('attempted to use private field on non-instance');
        return t;
      }
      var Nt = 0;
      function Dt(t) {
        return '__private_' + Nt++ + '_' + t;
      }
      var Ft = (function () {
          function t() {
            !(function (t, n) {
              if (!(t instanceof n))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
              Object.defineProperty(this, Xt, { writable: !0, value: null }),
              Object.defineProperty(this, Jt, { writable: !0, value: [] }),
              (this.module = void 0),
              (this.chatbotUser = void 0),
              this.whisper();
            var n = Array.prototype.slice.call(arguments),
              e = n[2] || {},
              r = n.slice(0, 2);
            (this.config = new h(e)),
              c([j, ft, Wt, Q, ht, X, nt], this),
              this.Translate.setLanguage(gt),
              (Lt(this, Jt)[Jt] = r),
              (this.chatbotUser = e.chatbotUser),
              this.State.set(i.STATES.HAS_CLIENT_USER_ID, this.chatbotUser),
              this.State.set(i.STATES.ENVIRONMENT, this.config.environment);
          }
          var n, e;
          return (
            Ht(t, [
              {
                key: 'config',
                get: function () {
                  return Lt(this, Xt)[Xt];
                },
                set: function (t) {
                  null === Lt(this, Xt)[Xt] && (Lt(this, Xt)[Xt] = t);
                },
              },
            ]),
            Ht(t, [
              {
                key: 'whisper',
                value: function () {
                  console.log(
                    '%c Cognus Chatbot        : '.concat(i.VERSION),
                    'color: transparent'
                  );
                },
              },
              {
                key: 'getModules',
                value: function () {
                  return dt(this.Http);
                },
              },
              {
                key: 'getModule',
                value: function (t) {
                  return pt(t, this.Http);
                },
              },
              {
                key: 'getChatbotUser',
                value: function (t) {
                  return xt(t, this.Http);
                },
              },
              { key: 'createChatbotUser', value: function (t) {} },
              {
                key: 'setup',
                value: function () {
                  return this.login();
                },
              },
              {
                key: 'login',
                value: function (t, n) {
                  var e = this;
                  return (
                    t && n && (Lt(this, Jt)[Jt] = [t, n]),
                    new Promise(function (t, n) {
                      e.Auth.loginChatbot(
                        Lt(e, Jt)[Jt],
                        e.State,
                        e.Http,
                        e.Encryption,
                        e.PubSub,
                        e.Response,
                        e.Storage
                      )
                        .then(function (n) {
                          e.State.set(i.STATES.HAS_MODULE, n.data.module);
                          try {
                            e.State.set(
                              i.STATES.HAS_CLIENT_USER_ID,
                              n.data.user.id
                            );
                          } catch (t) {
                            console.warn(t);
                          }
                          (Lt(e, Jt)[Jt] = {}), t(n);
                        })
                        .catch(function (t) {
                          console.warn(t), n(t);
                        });
                    })
                  );
                },
              },
              {
                key: 'closeSession',
                value:
                  ((n = regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), bt();
                            case 2:
                              this.PubSub.emit('LOGOUT');
                            case 3:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })),
                  (e = function () {
                    var t = this,
                      e = arguments;
                    return new Promise(function (r, o) {
                      var a = n.apply(t, e);
                      function i(t) {
                        Mt(a, r, o, i, s, 'next', t);
                      }
                      function s(t) {
                        Mt(a, r, o, i, s, 'throw', t);
                      }
                      i(void 0);
                    });
                  }),
                  function () {
                    return e.apply(this, arguments);
                  }),
              },
            ]),
            t
          );
        })(),
        Xt = Dt('config'),
        Jt = Dt('tmpLoginParams'),
        zt = Ft;
      e(51), e(32), e(70);
      var Ut = {
        send: function (t = '', n = {}, e = new ht(), r = new nt()) {
          const o = e.get(_.STATES.ELEMENT_IFRAME);
          if (!o)
            return console.warn(
              r.ok({
                message: "Can't send postback events if no element is found",
              })
            );
          o.contentWindow.postMessage(
            JSON.parse(JSON.stringify({ cognusEvent: { event: t, data: n } })),
            '*'
          );
        },
        recieve: function () {},
      };
      var Kt = function (t, n) {
        const e = {};
        return (
          Object.keys(t).forEach((r) => {
            e[r] = n[r] || t[r];
          }),
          e
        );
      };
      const Gt = {
        token: 'login.token',
        userId: 'login.user.id',
        key: 'login.key',
        user: 'JSON.stringify(login.user)',
      };
      var qt = function (t = new ht()) {
        const n = {
          token: t.get(_.STATES.HAS_TOKEN),
          userId: t.get(_.STATES.HAS_USER).id,
          key: t.get(_.STATES.HAS_KEY),
          user: JSON.stringify(t.get(_.STATES.HAS_USER) || {}),
        };
        Ut.send('setupClient', Kt(Gt, n));
      };
      var Vt = function (t = new ht()) {
        const n = t.get(_.STATES.HAS_CLIENT_USER_ID);
        Ut.send('setupUser', { id: n });
      };
      var Yt = function (t = new ht()) {
        Ut.send('setModuleById', t.get(_.STATES.HAS_MODULE));
      };
      function $t(t, n, e, r, o, a, i) {
        try {
          var s = t[a](i),
            c = s.value;
        } catch (t) {
          return void e(t);
        }
        s.done ? n(c) : Promise.resolve(c).then(r, o);
      }
      function Qt(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Zt(t, n) {
        if (!Object.prototype.hasOwnProperty.call(t, n))
          throw new TypeError('attempted to use private field on non-instance');
        return t;
      }
      var tn,
        nn = 0;
      function en(t) {
        return '__private_' + nn++ + '_' + t;
      }
      var rn = (function () {
          function t() {
            !(function (t, n) {
              if (!(t instanceof n))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
              Object.defineProperty(this, sn, { value: fn }),
              Object.defineProperty(this, an, { value: un }),
              Object.defineProperty(this, on, { value: cn }),
              c([h, ht, nt, X], this);
          }
          var n, e, r, o, a;
          return (
            (n = t),
            (e = [
              {
                key: 'render',
                value:
                  ((o = regeneratorRuntime.mark(function t() {
                    var n,
                      e = arguments;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                ((n =
                                  e.length > 0 && void 0 !== e[0] ? e[0] : {}),
                                (t.prev = 1),
                                tn)
                              ) {
                                t.next = 6;
                                break;
                              }
                              return (t.next = 5), Zt(this, an)[an](n);
                            case 5:
                              tn = !0;
                            case 6:
                              return (
                                Zt(this, sn)[sn](),
                                t.abrupt(
                                  'return',
                                  this.Response.ok({
                                    message: 'IFRAME_RENDER_SUCCESS',
                                  })
                                )
                              );
                            case 10:
                              throw (
                                ((t.prev = 10),
                                (t.t0 = t.catch(1)),
                                this.Response.error({
                                  message: 'IFRAME_RENDER_FAIL',
                                  data: t.t0,
                                }))
                              );
                            case 13:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[1, 10]]
                    );
                  })),
                  (a = function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (e, r) {
                      var a = o.apply(t, n);
                      function i(t) {
                        $t(a, e, r, i, s, 'next', t);
                      }
                      function s(t) {
                        $t(a, e, r, i, s, 'throw', t);
                      }
                      i(void 0);
                    });
                  }),
                  function () {
                    return a.apply(this, arguments);
                  }),
              },
            ]) && Qt(n.prototype, e),
            r && Qt(n, r),
            t
          );
        })(),
        on = en('parseIframeStyles'),
        an = en('addIframeToDocument'),
        sn = en('sendPostbackEventsToIframe'),
        cn = function () {
          arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          var t = i.DEFAULTS.IFRAME_CSS;
          return t;
        },
        un = function () {
          var t = this,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return new Promise(function (e, r) {
            t.State.get(i.STATES.ELEMENT_IFRAME);
            var o = document.createElement('cognus-chatbot-button'),
              a = Zt(t, on)[on](n);
            if (
              ((o.src = t.Configuration.url.iframe),
              (o.allow = 'microphone'),
              Object.keys(a).forEach(function (t) {
                o.style[t] = a[t];
              }),
              !o)
            )
              return console.warn(
                t.Response.error({
                  message:
                    "Can't add a iframe to document because there's no element",
                })
              );
            document.body.appendChild(o),
              document
                .querySelector('cognus-chatbot-button')
                .shadowRoot.querySelector('#cognus-chatbot__button')
                .dispatchEvent(new Event('mousedown')),
              t.PubSub.on(i.EVENTS.IFRAME_LOADED, function () {
                t.State.set(i.STATES.ELEMENT_IFRAME, o.$iframe), e();
              });
          });
        },
        fn = function () {
          qt(this.State), Vt(this.State), Yt(this.State);
        },
        dn = rn,
        ln = (e(100), e(102), document.createElement('template'));
      ln.innerHTML =
        '\n<style>\n/*! CSS Used from: https://fonts.googleapis.com/icon?family=Material+Icons */.material-icons{font-family:\'Material Icons\';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\'liga\';-webkit-font-smoothing:antialiased}/*! CSS Used from: https://bluedarwin-chatbot-iframe.eu-de.mybluemix.net/assets/chatbot-ui.css */#open-chat-button{background:url(https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/images/line-in-motion.svg),#166be9;background:url(https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/images/line-in-motion.svg),-moz-linear-gradient(-45deg,#166be9 1%,#004ab5 77%,#004ab5 77%);background:url(https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/images/line-in-motion.svg),-webkit-linear-gradient(-45deg,#166be9 1%,#004ab5 77%,#004ab5 77%);background:url(https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/images/line-in-motion.svg),linear-gradient(135deg,#166be9 1%,#004ab5 77%,#004ab5 77%);margin-top:8px}.mdl-button--fab.mdl-button--colored{background:linear-gradient(135deg,#166be9 1%,#004ab5 77%,#004ab5 77%);color:#fff;background:url(https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/images/line-in-motion.svg),#166be9;background:url(https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/images/line-in-motion.svg),-moz-linear-gradient(-45deg,#166be9 1%,#004ab5 77%,#004ab5 77%);background:url(https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/images/line-in-motion.svg),-webkit-linear-gradient(-45deg,#166be9 1%,#004ab5 77%,#004ab5 77%);background:url(https://bluedarwin-chatbot-iframeprod.eu-de.mybluemix.net/assets/images/line-in-motion.svg),linear-gradient(135deg,#166be9 1%,#004ab5 77%,#004ab5 77%)}.snippet-open-chat-button{float:right;margin-right:10px;margin-top:10px}button{text-transform:initial!important}/*! CSS Used from: https://bluedarwin-chatbot-iframe.eu-de.mybluemix.net/material.min.css */::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}@media print{*,:after,:before,:first-letter{background:0 0!important;color:#000!important;box-shadow:none!important}}.mdl-button{-webkit-tap-highlight-color:transparent;-webkit-tap-highlight-color:rgba(255,255,255,0)}.material-icons{font-family:\'Material Icons\';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;word-wrap:normal;-moz-font-feature-settings:\'liga\';font-feature-settings:\'liga\';-webkit-font-feature-settings:\'liga\';-webkit-font-smoothing:antialiased}.mdl-button{background:0 0;border:none;border-radius:2px;color:#000;position:relative;height:36px;margin:0;min-width:64px;padding:0 16px;display:inline-block;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;text-transform:uppercase;letter-spacing:0;overflow:hidden;will-change:box-shadow;transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);outline:0;cursor:pointer;text-decoration:none;text-align:center;line-height:36px;vertical-align:middle}.mdl-button::-moz-focus-inner{border:0}.mdl-button:hover{background-color:rgba(158,158,158,.2)}.mdl-button:active{background-color:rgba(158,158,158,.4)}.mdl-button.mdl-button--colored{color:#3f51b5}.mdl-button--fab{border-radius:50%;font-size:24px;height:56px;margin:auto;min-width:56px;width:56px;padding:0;overflow:hidden;background:rgba(158,158,158,.2);box-shadow:0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24);position:relative;line-height:normal}.mdl-button--fab .material-icons{position:absolute;top:50%;left:50%;-webkit-transform:translate(-12px,-12px);transform:translate(-12px,-12px);line-height:24px;width:24px}.mdl-button--fab:active{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);background-color:rgba(158,158,158,.4)}.mdl-button .material-icons{vertical-align:middle}/*! CSS Used from: https://bluedarwin-chatbot-iframe.eu-de.mybluemix.net/fonts.css */.material-icons{font-family:\'Material Icons\';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\'liga\';-webkit-font-smoothing:antialiased}\n\niframe{display:none; border: none;width: 350px;height: 690px; max-height: 100%;  position:absolute; right:4px; bottom: 0;}\n.mdl-button.mdl-js-button.mdl-button--fab.mdl-button--colored.snippet-open-chat-button{box-shadow: 0 3px 10px rgba(0,0,0,0.15)}\n#cognus-chatbot__container{\n    position: relative;\n    height: 0;\n    width: 0;\n    float: right;\n}\n\ncognus-chatbot-button{\n  width: 0px;\n  height: 0px;\n}\n\n</style>\n<div id="cognus-chatbot__container">\n<iframe class="closed" id="cognus-chatbot__iframe" allow="microphone"></iframe>\n<button id="cognus-chatbot__button"  class="mdl-button mdl-js-button\n              mdl-button--fab\n              mdl-button--colored\n              snippet-open-chat-button"  data-upgraded=",MaterialButton">\n\n<i id="cognus-chatbot__icon-close" class="material-icons">\n  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path fill="none" d="M0 0h24v24H0V0z"/>\n    <path fill="white" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>\n</i>\n<i id="cognus-chatbot__icon-open" class="material-icons">\n    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path fill="none" d="M0 0h24v24H0V0z"/>\n    <path fill="white" d="M22 2H2v20l4-4h16V2z"/></svg>\n</i>\n</button>\n</div>\n';
      var hn = ln;
      var pn = function (t, n) {
          return (
            Object.keys(n).forEach((e) => {
              t[e] || (t[e] = n[e]);
            }),
            t
          );
        },
        yn = { display: 'block', time: '0.4s', delay: 0 };
      function vn(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (
          (n = pn(n, yn)),
          new Promise(function (e, r) {
            try {
              setTimeout(function () {
                (t.style.opacity = 0),
                  (t.style.display = n.display),
                  (t.style.WebkitTransition = 'opacity '.concat(n.time)),
                  (t.style.MozTransition = 'opacity '.concat(n.time)),
                  requestAnimationFrame(function () {
                    return (t.style.opacity = 1);
                  }),
                  e();
              }, n.delay);
            } catch (t) {
              r(t);
            }
          })
        );
      }
      var xn = { time: '0.4s', delay: 0 };
      function mn(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (
          (n = pn(n, xn)),
          new Promise(function (e, r) {
            setTimeout(function () {
              try {
                (t.style.opacity = 1),
                  (t.style.WebkitTransition = 'opacity '.concat(n.time)),
                  (t.style.MozTransition = 'opacity '.concat(n.time)),
                  requestAnimationFrame(function () {
                    return (t.style.opacity = 0);
                  }),
                  e();
              } catch (t) {
                r(t);
              }
            }, n.delay);
          })
        );
      }
      function _n(t) {
        return (_n =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function bn(t, n, e, r, o, a, i) {
        try {
          var s = t[a](i),
            c = s.value;
        } catch (t) {
          return void e(t);
        }
        s.done ? n(c) : Promise.resolve(c).then(r, o);
      }
      function gn(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Sn(t, n) {
        return !n || ('object' !== _n(n) && 'function' != typeof n) ? wn(t) : n;
      }
      function wn(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Cn(t) {
        var n = 'function' == typeof Map ? new Map() : void 0;
        return (Cn = function (t) {
          if (
            null === t ||
            ((e = t), -1 === Function.toString.call(e).indexOf('[native code]'))
          )
            return t;
          var e;
          if ('function' != typeof t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          if (void 0 !== n) {
            if (n.has(t)) return n.get(t);
            n.set(t, r);
          }
          function r() {
            return kn(t, arguments, En(this).constructor);
          }
          return (
            (r.prototype = Object.create(t.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            An(r, t)
          );
        })(t);
      }
      function kn(t, n, e) {
        return (kn = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })()
          ? Reflect.construct
          : function (t, n, e) {
              var r = [null];
              r.push.apply(r, n);
              var o = new (Function.bind.apply(t, r))();
              return e && An(o, e.prototype), o;
            }).apply(null, arguments);
      }
      function An(t, n) {
        return (An =
          Object.setPrototypeOf ||
          function (t, n) {
            return (t.__proto__ = n), t;
          })(t, n);
      }
      function En(t) {
        return (En = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var Tn,
        On = [
          { id: '$button', action: 'startButtonPress', type: 'mousedown' },
          { id: '$button', action: 'endButtonPress', type: 'mouseup' },
          { id: '$iframe', action: 'broadcastIframeLoaded', type: 'load' },
        ],
        jn = 0,
        Bn = 0,
        Rn = 0,
        In = 0,
        Wn = (function (t) {
          !(function (t, n) {
            if ('function' != typeof n && null !== n)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (t.prototype = Object.create(n && n.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              n && An(t, n);
          })(c, t);
          var n,
            e,
            r,
            o,
            a,
            s = (function (t) {
              function n() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              }
              return function () {
                var e,
                  r = En(t);
                if (n()) {
                  var o = En(this).constructor;
                  e = Reflect.construct(r, arguments, o);
                } else e = r.apply(this, arguments);
                return Sn(this, e);
              };
            })(c);
          function c() {
            var t;
            return (
              (function (t, n) {
                if (!(t instanceof n))
                  throw new TypeError('Cannot call a class as a function');
              })(this, c),
              ((t = s.call(this)).isLocked = !1),
              (t.isChatbotWindowOpen = !1),
              (t.delay = 0),
              (t.isButtonPressed = !1),
              (t._shadowRoot = t.attachShadow({ mode: 'open' })),
              t._shadowRoot.appendChild(hn.content.cloneNode(!0)),
              (t.handleClick = t.handleClick.bind(wn(t))),
              (t.startButtonPress = t.startButtonPress.bind(wn(t))),
              (t.endButtonPress = t.endButtonPress.bind(wn(t))),
              (t.$container = t._shadowRoot.getElementById(
                'cognus-chatbot__container'
              )),
              (t.$button = t._shadowRoot.getElementById(
                'cognus-chatbot__button'
              )),
              (t.$iframe = t._shadowRoot.getElementById(
                'cognus-chatbot__iframe'
              )),
              (t.$iconClose = t._shadowRoot.getElementById(
                'cognus-chatbot__icon-close'
              )),
              (t.$iconOpen = t._shadowRoot.getElementById(
                'cognus-chatbot__icon-open'
              )),
              (Tn = new X()),
              t.addEventListeners(),
              t
            );
          }
          return (
            (n = c),
            (e = [
              {
                key: 'handleClick',
                value:
                  ((o = regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (((t.prev = 0), !this.isLocked)) {
                                t.next = 3;
                                break;
                              }
                              return t.abrupt('return');
                            case 3:
                              if (
                                ((this.isLocked = !0),
                                !this.isChatbotWindowOpen)
                              ) {
                                t.next = 9;
                                break;
                              }
                              return (t.next = 7), this.closeChatbotWindow();
                            case 7:
                              t.next = 11;
                              break;
                            case 9:
                              return (t.next = 11), this.openChatbotWindow();
                            case 11:
                              (this.isLocked = !1), (t.next = 18);
                              break;
                            case 14:
                              (t.prev = 14),
                                (t.t0 = t.catch(0)),
                                console.warn(t.t0),
                                (this.isLocked = !1);
                            case 18:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[0, 14]]
                    );
                  })),
                  (a = function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (e, r) {
                      var a = o.apply(t, n);
                      function i(t) {
                        bn(a, e, r, i, s, 'next', t);
                      }
                      function s(t) {
                        bn(a, e, r, i, s, 'throw', t);
                      }
                      i(void 0);
                    });
                  }),
                  function () {
                    return a.apply(this, arguments);
                  }),
              },
              {
                key: 'closeChatbotWindow',
                value: function () {
                  var t = this;
                  return new Promise(function (n, e) {
                    Ut.send('closeChatbotWindow'),
                      setTimeout(function () {
                        (t.isChatbotWindowOpen = !1), n();
                      }, Rn),
                      setTimeout(function () {
                        t.$iframe.style.display = 'none';
                      }, Bn),
                      vn(t.$iconOpen, { delay: In }),
                      mn(t.$iconClose);
                  });
                },
              },
              {
                key: 'openChatbotWindow',
                value: function () {
                  var t = this;
                  return new Promise(function (n, e) {
                    (t.$iframe.style.display = 'block'),
                      Ut.send('openChatbotWindow'),
                      setTimeout(function () {
                        (t.isChatbotWindowOpen = !0), n();
                      }, Rn),
                      setTimeout(function () {
                        (t.isChatbotWindowOpen = !0), n();
                      }, jn),
                      vn(t.$iconClose, { delay: In }),
                      mn(t.$iconOpen);
                  });
                },
              },
              {
                key: 'broadcastIframeLoaded',
                value: function () {
                  Tn.emit(i.EVENTS.IFRAME_LOADED);
                },
              },
              {
                key: 'attributeChangedCallback',
                value: function (t, n, e) {
                  switch (t) {
                    case 'src':
                      this.$iframe.src = e;
                  }
                },
              },
              {
                key: 'startButtonPress',
                value: function () {
                  this.handleClick();
                },
              },
              {
                key: 'endButtonPress',
                value: function (t) {
                  this.isButtonPressed = !1;
                },
              },
              {
                key: 'addEventListeners',
                value: function () {
                  var t = this;
                  On.forEach(function (n) {
                    t[n.id].addEventListener(n.type, t[n.action]);
                  });
                },
              },
              {
                key: 'src',
                get: function () {
                  return this.getAttribute('src');
                },
                set: function (t) {
                  this.setAttribute('src', t);
                },
              },
            ]),
            (r = [
              {
                key: 'observedAttributes',
                get: function () {
                  return ['src'];
                },
              },
            ]),
            e && gn(n.prototype, e),
            r && gn(n, r),
            c
          );
        })(Cn(HTMLElement));
      window.customElements.define('cognus-chatbot-button', Wn);
      function Mn(t) {
        return (Mn =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function Pn(t, n, e, r, o, a, i) {
        try {
          var s = t[a](i),
            c = s.value;
        } catch (t) {
          return void e(t);
        }
        s.done ? n(c) : Promise.resolve(c).then(r, o);
      }
      function Hn(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Ln(t, n) {
        return !n || ('object' !== Mn(n) && 'function' != typeof n) ? Nn(t) : n;
      }
      function Nn(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function Dn(t) {
        return (Dn = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function Fn(t, n) {
        return (Fn =
          Object.setPrototypeOf ||
          function (t, n) {
            return (t.__proto__ = n), t;
          })(t, n);
      }
      function Xn(t, n) {
        if (!Object.prototype.hasOwnProperty.call(t, n))
          throw new TypeError('attempted to use private field on non-instance');
        return t;
      }
      var Jn = 0;
      var zn = (function (t) {
          !(function (t, n) {
            if ('function' != typeof n && null !== n)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (t.prototype = Object.create(n && n.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              n && Fn(t, n);
          })(c, t);
          var n,
            e,
            r,
            o,
            a,
            s = (function (t) {
              function n() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              }
              return function () {
                var e,
                  r = Dn(t);
                if (n()) {
                  var o = Dn(this).constructor;
                  e = Reflect.construct(r, arguments, o);
                } else e = r.apply(this, arguments);
                return Ln(this, e);
              };
            })(c);
          function c(t, n, e) {
            var r;
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            return (
              (function (t, n) {
                if (!(t instanceof n))
                  throw new TypeError('Cannot call a class as a function');
              })(this, c),
              (r = s.apply(this, arguments)),
              Object.defineProperty(Nn(r), Un, { writable: !0, value: {} }),
              (r.events = { on: Ut.recieve, emit: Ut.send }),
              r
            );
          }
          return (
            (n = c),
            (e = [
              {
                key: 'render',
                value:
                  ((o = regeneratorRuntime.mark(function t() {
                    var n,
                      e,
                      r = arguments;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (n =
                                  r.length > 0 && void 0 !== r[0] ? r[0] : {}),
                                (t.prev = 1),
                                (t.next = 4),
                                this.setup()
                              );
                            case 4:
                              if (
                                ((Xn(this, Un)[Un] = Xn(this, Un)[Un] || n),
                                this.State.set(i.STATES.IS_INITIALIZED, !0),
                                this.State.get(i.STATES.IS_LOGGED_IN))
                              ) {
                                t.next = 9;
                                break;
                              }
                              return (
                                (e = this.Response.ok({
                                  message:
                                    'Chatbot iframe init: Waiting for login',
                                })),
                                t.abrupt('return', Promise.reject(e))
                              );
                            case 9:
                              return (
                                new dn(this.config).render(n),
                                t.abrupt('return', Promise.resolve())
                              );
                            case 13:
                              return (
                                (t.prev = 13),
                                (t.t0 = t.catch(1)),
                                t.abrupt(
                                  'return',
                                  Promise.reject(
                                    this.Response.error({ data: t.t0 })
                                  )
                                )
                              );
                            case 16:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[1, 13]]
                    );
                  })),
                  (a = function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (e, r) {
                      var a = o.apply(t, n);
                      function i(t) {
                        Pn(a, e, r, i, s, 'next', t);
                      }
                      function s(t) {
                        Pn(a, e, r, i, s, 'throw', t);
                      }
                      i(void 0);
                    });
                  }),
                  function () {
                    return a.apply(this, arguments);
                  }),
              },
              {
                key: 'listDefaultStyles',
                value: function () {
                  return i.DEFAULTS.IFRAME_CSS;
                },
              },
              {
                key: 'getIframeElement',
                value: function () {
                  return this.State.get(i.STATES.ELEMENT_IFRAME);
                },
              },
            ]) && Hn(n.prototype, e),
            r && Hn(n, r),
            c
          );
        })(zt),
        Un = '__private_' + Jn++ + '_' + 'options',
        Kn = zn,
        Gn =
          (e(72),
          function () {
            var t = { avatar: void 0, name: void 0 };
            return Object.assign({}, t);
          }),
        qn = function (t, n) {
          var e =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : new ft();
          return e.post('am_client_users/'.concat(t), {
            user_settings: { username: n },
          });
        },
        Vn = function (t, n) {
          var e =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : new ft();
          return e.post('am_client_users/'.concat(t), {
            user_settings: { avatar: avatar },
          });
        };
      function Yn(t, n, e, r, o, a, i) {
        try {
          var s = t[a](i),
            c = s.value;
        } catch (t) {
          return void e(t);
        }
        s.done ? n(c) : Promise.resolve(c).then(r, o);
      }
      function $n(t) {
        return function () {
          var n = this,
            e = arguments;
          return new Promise(function (r, o) {
            var a = t.apply(n, e);
            function i(t) {
              Yn(a, r, o, i, s, 'next', t);
            }
            function s(t) {
              Yn(a, r, o, i, s, 'throw', t);
            }
            i(void 0);
          });
        };
      }
      function Qn(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Zn(t, n) {
        if (!Object.prototype.hasOwnProperty.call(t, n))
          throw new TypeError('attempted to use private field on non-instance');
        return t;
      }
      var te = 0;
      var ne = Gn();
      ne.id = !1;
      var ee = (function () {
          function t(n) {
            !(function (t, n) {
              if (!(t instanceof n))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
              Object.defineProperty(this, re, { writable: !0, value: ne }),
              (Zn(this, re)[re] = n),
              c([ft], this);
          }
          var n, e, r, o, a;
          return (
            (n = t),
            (e = [
              {
                key: 'setName',
                value:
                  ((a = $n(
                    regeneratorRuntime.mark(function t(n) {
                      var e;
                      return regeneratorRuntime.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (e = Zn(this, re)[re].user_settings.username),
                                  (t.prev = 1),
                                  (Zn(this, re)[re].user_settings.username = n),
                                  (t.next = 5),
                                  qn(Zn(this, re)[re].id, n, this.Http)
                                );
                              case 5:
                                return t.abrupt('return', Promise.resolve(n));
                              case 8:
                                return (
                                  (t.prev = 8),
                                  (t.t0 = t.catch(1)),
                                  (Zn(this, re)[re].user_settings.username = e),
                                  t.abrupt('return', Promise.reject(e))
                                );
                              case 12:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[1, 8]]
                      );
                    })
                  )),
                  function (t) {
                    return a.apply(this, arguments);
                  }),
              },
              {
                key: 'setAvatar',
                value:
                  ((o = $n(
                    regeneratorRuntime.mark(function t(n) {
                      var e;
                      return regeneratorRuntime.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (e = Zn(this, re)[re].user_settings.avatar),
                                  (t.prev = 1),
                                  (Zn(this, re)[re].user_settings.avatar = n),
                                  (t.next = 5),
                                  Vn(Zn(this, re)[re].id, n, this.Http)
                                );
                              case 5:
                                return t.abrupt('return', Promise.resolve(n));
                              case 8:
                                return (
                                  (t.prev = 8),
                                  (t.t0 = t.catch(1)),
                                  (Zn(this, re)[re].user_settings.avatar = e),
                                  t.abrupt('return', Promise.reject(e))
                                );
                              case 12:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[1, 8]]
                      );
                    })
                  )),
                  function (t) {
                    return o.apply(this, arguments);
                  }),
              },
              {
                key: 'id',
                get: function () {
                  return Zn(this, re)[re].id;
                },
              },
              {
                key: 'name',
                get: function () {
                  return Zn(this, re)[re].user_settings.username;
                },
              },
              {
                key: 'avatar',
                get: function () {
                  return Zn(this, re)[re].user_settings.avatar;
                },
              },
            ]) && Qn(n.prototype, e),
            r && Qn(n, r),
            t
          );
        })(),
        re = (function (t) {
          return '__private_' + te++ + '_' + t;
        })('meta'),
        oe = ee,
        ae = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : new ht(),
            n = '',
            e = {
              am_user: 12323,
              stage: i.ENVIRONMENT_IDS[t.get(i.STATES.ENVIRONMENT)],
              project: t.get(i.STATES.HAS_PROJECT),
              status: 'open',
            };
          return (
            Object.keys(e).forEach(function (t) {
              e[t] && (n += '&'.concat(t, '=').concat(e[t]));
            }),
            (n = (n = n.substr(1)).length > 0 ? '?'.concat(n) : n)
          );
        },
        ie = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : new ft();
          return t.get('am_sessions'.concat(ae()));
        };
      function se(t, n, e, r, o, a, i) {
        try {
          var s = t[a](i),
            c = s.value;
        } catch (t) {
          return void e(t);
        }
        s.done ? n(c) : Promise.resolve(c).then(r, o);
      }
      var ce = (function () {
          var t,
            n =
              ((t = regeneratorRuntime.mark(function t() {
                var n,
                  e = arguments;
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            e.length > 0 && void 0 !== e[0] ? e[0] : new nt(),
                            (t.prev = 1),
                            (t.next = 4),
                            ie()
                          );
                        case 4:
                          return (
                            ((n = t.sent) && 0 !== n.length) || (n = !1),
                            t.abrupt('return', n[0])
                          );
                        case 9:
                          throw (
                            ((t.prev = 9),
                            (t.t0 = t.catch(1)),
                            nt.error({
                              message: 'ERROR.GET_OR_CREATE_SESSION',
                              data: t.t0,
                            }))
                          );
                        case 12:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 9]]
                );
              })),
              function () {
                var n = this,
                  e = arguments;
                return new Promise(function (r, o) {
                  var a = t.apply(n, e);
                  function i(t) {
                    se(a, r, o, i, s, 'next', t);
                  }
                  function s(t) {
                    se(a, r, o, i, s, 'throw', t);
                  }
                  i(void 0);
                });
              });
          return function () {
            return n.apply(this, arguments);
          };
        })(),
        ue = function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : new ft(),
            e =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : new ht();
          return n.post('orchestrator_v3', _t.v3.text(t, e));
        },
        fe = function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : new ft(),
            e =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : new ht();
          return n.post('orchestrator_v3', _t.v3.voice(t, e));
        },
        de = function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : new ft(),
            e =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : new ht();
          return n.post('orchestrator_v3', _t.v3.postBack(t, e));
        },
        le = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : new ft(),
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : new ht(),
            e = _t.v3.text('olá', n);
          return (
            (e.context_variables = e.context_variables || {}),
            (e.context_variables.actions = e.context_variables.actions || {}),
            (e.context_variables.actions.close_session =
              e.context_variables.actions.close_session || {}),
            (e.context_variables.actions.close_session.enabled = !0),
            delete e.input,
            delete e.auth.stage,
            delete e.context_variables.extracted_entities,
            t.post('orchestrator_v3', e)
          );
        },
        he = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : new ft(),
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : new ht(),
            e = _t.v3.text('start', n);
          return (e.input = null), t.post('orchestrator_v3', e);
        };
      function pe(t, n, e, r, o, a, i) {
        try {
          var s = t[a](i),
            c = s.value;
        } catch (t) {
          return void e(t);
        }
        s.done ? n(c) : Promise.resolve(c).then(r, o);
      }
      function ye(t) {
        return function () {
          var n = this,
            e = arguments;
          return new Promise(function (r, o) {
            var a = t.apply(n, e);
            function i(t) {
              pe(a, r, o, i, s, 'next', t);
            }
            function s(t) {
              pe(a, r, o, i, s, 'throw', t);
            }
            i(void 0);
          });
        };
      }
      function ve(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function xe(t, n) {
        if (!Object.prototype.hasOwnProperty.call(t, n))
          throw new TypeError('attempted to use private field on non-instance');
        return t;
      }
      var me = 0;
      function _e(t) {
        return '__private_' + me++ + '_' + t;
      }
      var be,
        ge = i.STATES.CONVERSATION,
        Se = (function () {
          function t() {
            return (
              (function (t, n) {
                if (!(t instanceof n))
                  throw new TypeError('Cannot call a class as a function');
              })(this, t),
              Object.defineProperty(this, Te, { value: We }),
              Object.defineProperty(this, Ee, { value: Ie }),
              Object.defineProperty(this, Ae, { value: Re }),
              Object.defineProperty(this, ke, { value: Be }),
              Object.defineProperty(this, Ce, { value: je }),
              Object.defineProperty(this, we, { value: Oe }),
              be || (c([ht, X, ft], this), (be = this)),
              be
            );
          }
          var n, e, r, o, a, i, s, u;
          return (
            (n = t),
            (e = [
              {
                key: 'sendText',
                value:
                  ((u = ye(
                    regeneratorRuntime.mark(function t(n) {
                      return regeneratorRuntime.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2), xe(this, Te)[Te]('sendText', n)
                                );
                              case 2:
                                return t.abrupt('return', t.sent);
                              case 3:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  )),
                  function (t) {
                    return u.apply(this, arguments);
                  }),
              },
              {
                key: 'sendVoice',
                value:
                  ((s = ye(
                    regeneratorRuntime.mark(function t(n) {
                      return regeneratorRuntime.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2), xe(this, Te)[Te]('sendVoice', n)
                                );
                              case 2:
                                return t.abrupt('return', t.sent);
                              case 3:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  )),
                  function (t) {
                    return s.apply(this, arguments);
                  }),
              },
              {
                key: 'sendPostBack',
                value:
                  ((i = ye(
                    regeneratorRuntime.mark(function t(n) {
                      return regeneratorRuntime.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  xe(this, Te)[Te]('sendPostBack', n)
                                );
                              case 2:
                                return t.abrupt('return', t.sent);
                              case 3:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  )),
                  function (t) {
                    return i.apply(this, arguments);
                  }),
              },
              {
                key: 'sendStartConversation',
                value:
                  ((a = ye(
                    regeneratorRuntime.mark(function t() {
                      return regeneratorRuntime.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  xe(this, Te)[Te]('sendStartConversation')
                                );
                              case 2:
                                return t.abrupt('return', t.sent);
                              case 3:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  )),
                  function () {
                    return a.apply(this, arguments);
                  }),
              },
              {
                key: 'sendReset',
                value:
                  ((o = ye(
                    regeneratorRuntime.mark(function t() {
                      return regeneratorRuntime.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2), xe(this, Te)[Te]('sendReset')
                                );
                              case 2:
                                return t.abrupt('return', t.sent);
                              case 3:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  )),
                  function () {
                    return o.apply(this, arguments);
                  }),
              },
            ]) && ve(n.prototype, e),
            r && ve(n, r),
            t
          );
        })(),
        we = _e('extractConversationFromResponse'),
        Ce = _e('updateConversationEvent'),
        ke = _e('parseDataForConversation'),
        Ae = _e('middlewareIsApiInitiated'),
        Ee = _e('middlewareBefore'),
        Te = _e('middleware'),
        Oe = function (t) {
          var n;
          try {
            n = t.system ? t : t.result.content;
          } catch (t) {
            n = { text: 'error', type: 'direct_message' };
          }
          return { type: 'output', data: n };
        },
        je = function (t) {
          this.PubSub.emit(i.EVENTS.CONVERSATION_UPDATE, t);
        },
        Be = function (t, n) {
          switch (
            ((n = { type: 'input', data: { type: '', content: n } }), t)
          ) {
            case 'sendText':
              n.data.type = 'text';
              break;
            case 'sendPostBack':
              n.data.type = 'postback';
              break;
            case 'sendVoice':
              n.data.type = 'voice';
          }
          return n;
        },
        Re = function () {
          return this.State.get(i.STATES.API_READY);
        },
        Ie = function (t) {
          var n = this.State.get(ge) || [];
          return (
            n.push(t),
            this.State.set(ge, n),
            xe(this, Ce)[Ce](t),
            { index: n.length - 1, conversation: n }
          );
        },
        We = (function () {
          var t = ye(
            regeneratorRuntime.mark(function t(n, e) {
              var r, o, a, s;
              return regeneratorRuntime.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (xe(this, Ae)[Ae]()) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt(
                          'return',
                          Promise.reject(
                            Response(1, { message: 'API_NOT_READY' })
                          )
                        );
                      case 2:
                        if (
                          ((o = xe(this, Ee)[Ee](xe(this, ke)[ke](n, e))),
                          (t.prev = 3),
                          'sendText' !== n)
                        ) {
                          t.next = 8;
                          break;
                        }
                        return (t.next = 7), ue(e);
                      case 7:
                        a = t.sent;
                      case 8:
                        if ('sendVoice' !== n) {
                          t.next = 12;
                          break;
                        }
                        return (t.next = 11), fe(e);
                      case 11:
                        a = t.sent;
                      case 12:
                        if ('sendPostBack' !== n) {
                          t.next = 16;
                          break;
                        }
                        return (t.next = 15), de(e);
                      case 15:
                        a = t.sent;
                      case 16:
                        if ('sendReset' !== n) {
                          t.next = 20;
                          break;
                        }
                        return (t.next = 19), le();
                      case 19:
                        a = t.sent;
                      case 20:
                        if ('sendStartConversation' !== n) {
                          t.next = 24;
                          break;
                        }
                        return (t.next = 23), he(e);
                      case 23:
                        a = t.sent;
                      case 24:
                        return (
                          (a = xe(this, we)[we](a)),
                          (r = this.State.get(ge)).push(a),
                          this.State.set(ge, r),
                          xe(this, Ce)[Ce](a),
                          t.abrupt('return', Promise.resolve(a))
                        );
                      case 32:
                        return (
                          (t.prev = 32),
                          (t.t0 = t.catch(3)),
                          ((s = this.State.get(ge))[o.index].failed = !0),
                          this.State.set(ge, s),
                          this.PubSub.emit(i.EVENTS.CONVERSATION_REPLY_FAIL, {
                            index: o.index,
                            reply: s[o.index],
                          }),
                          t.abrupt('return', Promise.reject(t.t0))
                        );
                      case 39:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                this,
                [[3, 32]]
              );
            })
          );
          return function (n, e) {
            return t.apply(this, arguments);
          };
        })(),
        Me = Se;
      function Pe(t, n, e, r, o, a, i) {
        try {
          var s = t[a](i),
            c = s.value;
        } catch (t) {
          return void e(t);
        }
        s.done ? n(c) : Promise.resolve(c).then(r, o);
      }
      function He(t) {
        return function () {
          var n = this,
            e = arguments;
          return new Promise(function (r, o) {
            var a = t.apply(n, e);
            function i(t) {
              Pe(a, r, o, i, s, 'next', t);
            }
            function s(t) {
              Pe(a, r, o, i, s, 'throw', t);
            }
            i(void 0);
          });
        };
      }
      function Le(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function Ne(t, n) {
        if (!Object.prototype.hasOwnProperty.call(t, n))
          throw new TypeError('attempted to use private field on non-instance');
        return t;
      }
      var De = 0;
      function Fe(t) {
        return '__private_' + De++ + '_' + t;
      }
      var Xe = (function () {
          function t(n, e) {
            if (
              ((function (t, n) {
                if (!(t instanceof n))
                  throw new TypeError('Cannot call a class as a function');
              })(this, t),
              Object.defineProperty(this, Ge, { value: Ve }),
              Object.defineProperty(this, Ke, { value: qe }),
              Object.defineProperty(this, Je, {
                writable: !0,
                value: {
                  user: !1,
                  id: !1,
                  module: !1,
                  projectId: !1,
                  isOpen: !1,
                },
              }),
              Object.defineProperty(this, ze, { writable: !0, value: {} }),
              Object.defineProperty(this, Ue, { writable: !0, value: [] }),
              (this.parameters = {}),
              !n || !e)
            )
              throw 'ERROR.SESSION_CREATE_WITHOUT_LOGIN_OR_INIT';
            (Ne(this, Je)[Je].module = n),
              (Ne(this, Je)[Je].user = e),
              c([nt, ht, ft, Me], this);
          }
          var n, e, r, o, a, i;
          return (
            (n = t),
            (e = [
              {
                key: 'getId',
                value: function () {
                  return Ne(this, Je)[Je].id;
                },
              },
              {
                key: 'getUser',
                value: function () {
                  return Ne(this, Je)[Je].user;
                },
              },
              {
                key: 'getModule',
                value: function () {
                  return Ne(this, Je)[Je].module;
                },
              },
              {
                key: 'isOpen',
                value: function () {
                  return Ne(this, Je)[Je].isOpen;
                },
              },
              {
                key: 'sendText',
                value: function (t) {
                  return this.Communication.sendText(t);
                },
              },
              {
                key: 'sendVoice',
                value: function (t) {
                  return this.Communication.sendVoice(t);
                },
              },
              {
                key: 'sendPostBack',
                value: function (t) {
                  return this.Communication.sendPostBack(t);
                },
              },
              {
                key: 'sendStartConversation',
                value: function () {
                  return this.Communication.sendStartConversation();
                },
              },
              {
                key: 'sendLogout',
                value: function () {
                  return this.Communication.sendLogout({});
                },
              },
              {
                key: 'getSession',
                value:
                  ((i = He(
                    regeneratorRuntime.mark(function t() {
                      var n;
                      return regeneratorRuntime.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.prev = 0), (t.next = 3), ce();
                              case 3:
                                if (!(n = t.sent)) {
                                  t.next = 10;
                                  break;
                                }
                                return (
                                  (Ne(this, Je)[Je].isOpen =
                                    'open' === n.attributes.status),
                                  (Ne(this, Je)[Je].projectId =
                                    n.relationships.project.data.id),
                                  (Ne(this, Je)[Je].id = n.id),
                                  (Ne(this, ze)[ze] = n),
                                  t.abrupt(
                                    'return',
                                    Promise.resolve(Ne(this, Ge)[Ge](n))
                                  )
                                );
                              case 10:
                                return t.abrupt(
                                  'return',
                                  Promise.resolve(Ne(this, Ue)[Ue])
                                );
                              case 13:
                                return (
                                  (t.prev = 13),
                                  (t.t0 = t.catch(0)),
                                  t.abrupt(
                                    'return',
                                    Promise.reject(
                                      nt.error({ message: t.t0, data: t.t0 })
                                    )
                                  )
                                );
                              case 16:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[0, 13]]
                      );
                    })
                  )),
                  function () {
                    return i.apply(this, arguments);
                  }),
              },
              {
                key: 'getConversation',
                value:
                  ((a = He(
                    regeneratorRuntime.mark(function t() {
                      var n, e;
                      return regeneratorRuntime.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((t.prev = 0),
                                  !((n = Ne(this, Ue)[Ue]).length > 0))
                                ) {
                                  t.next = 4;
                                  break;
                                }
                                return t.abrupt('return', Promise.resolve(n));
                              case 4:
                                return (t.next = 6), this.getSession();
                              case 6:
                                return (
                                  (e = t.sent),
                                  t.abrupt('return', Promise.resolve(e))
                                );
                              case 10:
                                return (
                                  (t.prev = 10),
                                  (t.t0 = t.catch(0)),
                                  console.warn(t.t0),
                                  t.abrupt(
                                    'return',
                                    Promise.resolve(Ne(this, Ue)[Ue])
                                  )
                                );
                              case 14:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[0, 10]]
                      );
                    })
                  )),
                  function () {
                    return a.apply(this, arguments);
                  }),
              },
              {
                key: 'reset',
                value:
                  ((o = He(
                    regeneratorRuntime.mark(function t() {
                      var n;
                      return regeneratorRuntime.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2), this.Communication.sendReset()
                                );
                              case 2:
                                return (
                                  (n = t.sent),
                                  (Ne(this, Ue)[Ue] = {}),
                                  t.abrupt('return', n)
                                );
                              case 5:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  )),
                  function () {
                    return o.apply(this, arguments);
                  }),
              },
            ]) && Le(n.prototype, e),
            r && Le(n, r),
            t
          );
        })(),
        Je = Fe('meta'),
        ze = Fe('session'),
        Ue = Fe('conversation'),
        Ke = Fe('updateConversation'),
        Ge = Fe('buildConversationFromSession'),
        qe = function (t, n) {
          if (t && n) {
            var e = { type: t, data: n };
            Ne(this, Ue)[Ue].push(e);
          }
        },
        Ve = function (t) {
          if (!t || !t.attributes || !t.attributes.context)
            return Ne(this, Ue)[Ue];
          for (
            var n = t.attributes.context, e = 1;
            e <= n.n_interactions;
            e++
          ) {
            var r = 'interaction_' + e,
              o =
                n.inputs[r] && Array.isArray(n.inputs[r])
                  ? n.inputs[r][0]
                  : void 0,
              a =
                n.outputs[r] && Array.isArray(n.outputs[r])
                  ? n.outputs[r][0]
                  : void 0;
            Ne(this, Ke)[Ke]('input', o), Ne(this, Ke)[Ke]('output', a);
          }
          return (
            this.State.set(i.STATES.CONVERSATION, Ne(this, Ue)[Ue]),
            Ne(this, Ue)[Ue]
          );
        },
        Ye = Xe,
        $e = function () {
          return Object.assign({}, {});
        },
        Qe = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $e;
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : new ft();
          return ft.post('url', Kt($e, t));
        };
      function Ze(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function tr(t, n) {
        if (!Object.prototype.hasOwnProperty.call(t, n))
          throw new TypeError('attempted to use private field on non-instance');
        return t;
      }
      var nr = 0;
      function er(t) {
        return '__private_' + nr++ + '_' + t;
      }
      var rr = (function () {
          function t(n) {
            !(function (t, n) {
              if (!(t instanceof n))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
              Object.defineProperty(this, or, {
                writable: !0,
                value: { label: !1, id: !1, channels: [], user: {}, bot: {} },
              }),
              Object.defineProperty(this, ar, { writable: !0, value: [] }),
              (n = n.attributes || n),
              (tr(this, or)[or] = n),
              (tr(this, or)[or].label = n.label),
              (tr(this, or)[or].id = n.id),
              (tr(this, ar)[ar] = n.am_channel_tokens),
              (this.intents = []),
              c([ft], this);
          }
          var n, e, r;
          return (
            (n = t),
            (e = [
              {
                key: 'getIntents',
                value: function () {
                  return this.intents;
                },
              },
              {
                key: 'getSession',
                value: function (t) {
                  return ie(t, this.Http);
                },
              },
              {
                key: 'getChannels',
                value: function () {
                  return tr(this, or)[or].channels;
                },
              },
              {
                key: 'getLabel',
                value: function () {
                  return tr(this, or)[or].label;
                },
              },
              {
                key: 'getId',
                value: function () {
                  return tr(this, or)[or].id;
                },
              },
              {
                key: 'getMeta',
                value: function () {
                  return tr(this, or)[or];
                },
              },
              {
                key: 'createSession',
                value: function (t) {
                  return Qe(t);
                },
              },
              { key: 'setMetaChannels', value: function () {} },
              {
                key: 'setMetaUser',
                value: function (t) {
                  tr(this, or)[or].user = new oe(t);
                },
              },
            ]) && Ze(n.prototype, e),
            r && Ze(n, r),
            t
          );
        })(),
        or = er('meta'),
        ar = er('channelTokens'),
        ir = rr,
        sr = function (t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : new ft();
          return n.get('am_channels/'.concat(t));
        },
        cr = function (t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : new ft();
          return n.get('am_channel_tokens/'.concat(t));
        },
        ur = function (t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : new ft();
          return n.get('am_intents/'.concat(t));
        };
      function fr(t) {
        return (fr =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function dr(t, n, e, r, o, a, i) {
        try {
          var s = t[a](i),
            c = s.value;
        } catch (t) {
          return void e(t);
        }
        s.done ? n(c) : Promise.resolve(c).then(r, o);
      }
      function lr(t) {
        return function () {
          var n = this,
            e = arguments;
          return new Promise(function (r, o) {
            var a = t.apply(n, e);
            function i(t) {
              dr(a, r, o, i, s, 'next', t);
            }
            function s(t) {
              dr(a, r, o, i, s, 'throw', t);
            }
            i(void 0);
          });
        };
      }
      function hr(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function pr(t, n) {
        return !n || ('object' !== fr(n) && 'function' != typeof n) ? yr(t) : n;
      }
      function yr(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function vr(t) {
        return (vr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function xr(t, n) {
        return (xr =
          Object.setPrototypeOf ||
          function (t, n) {
            return (t.__proto__ = n), t;
          })(t, n);
      }
      function mr(t, n) {
        if (!Object.prototype.hasOwnProperty.call(t, n))
          throw new TypeError('attempted to use private field on non-instance');
        return t;
      }
      var _r = 0;
      function br(t) {
        return '__private_' + _r++ + '_' + t;
      }
      var gr = (function (t) {
          !(function (t, n) {
            if ('function' != typeof n && null !== n)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (t.prototype = Object.create(n && n.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              n && xr(t, n);
          })(s, t);
          var n,
            e,
            r,
            o,
            a = (function (t) {
              function n() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], function () {})
                    ),
                    !0
                  );
                } catch (t) {
                  return !1;
                }
              }
              return function () {
                var e,
                  r = vr(t);
                if (n()) {
                  var o = vr(this).constructor;
                  e = Reflect.construct(r, arguments, o);
                } else e = r.apply(this, arguments);
                return pr(this, e);
              };
            })(s);
          function s() {
            var t;
            !(function (t, n) {
              if (!(t instanceof n))
                throw new TypeError('Cannot call a class as a function');
            })(this, s),
              (t = a.apply(this, arguments)),
              Object.defineProperty(yr(t), Or, { value: Ir }),
              Object.defineProperty(yr(t), Tr, { value: Rr }),
              Object.defineProperty(yr(t), Er, { value: Br }),
              Object.defineProperty(yr(t), Ar, { value: jr }),
              Object.defineProperty(yr(t), Sr, { writable: !0, value: [] }),
              Object.defineProperty(yr(t), wr, { writable: !0, value: void 0 }),
              Object.defineProperty(yr(t), Cr, { writable: !0, value: void 0 }),
              Object.defineProperty(yr(t), kr, { writable: !0, value: void 0 });
            try {
              (t.events = t.PubSub),
                delete t.events.emit,
                delete t.events.off,
                delete t.events.reset,
                delete t.events.getEvents,
                t.events.on('LOGOUT', function () {});
            } catch (t) {
              console.dir(t);
            }
            return t;
          }
          return (
            (n = s),
            (e = [
              {
                key: 'boot',
                value:
                  ((o = lr(
                    regeneratorRuntime.mark(function t(n) {
                      var e, r, o;
                      return regeneratorRuntime.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.prev = 0), (t.next = 3), this.setup();
                              case 3:
                                if (
                                  ((this.chatbotUser = n || this.chatbotUser),
                                  this.State.set(i.STATES.IS_INITIALIZED, !0),
                                  this.State.set(
                                    i.STATES.HAS_MODULE,
                                    this.module
                                  ),
                                  this.State.set(
                                    i.STATES.HAS_CLIENT_USER_ID,
                                    this.chatbotUser
                                  ),
                                  this.State.get(i.STATES.IS_LOGGED_IN))
                                ) {
                                  t.next = 10;
                                  break;
                                }
                                return (
                                  (e = this.Response.ok({
                                    message:
                                      'Chatbot iframe init: Waiting for login',
                                  })),
                                  t.abrupt('return', Promise.reject(e))
                                );
                              case 10:
                                return (t.next = 12), mr(this, Ar)[Ar]();
                              case 12:
                                return (
                                  (r = t.sent),
                                  (t.next = 15),
                                  mr(this, Er)[Er](r)
                                );
                              case 15:
                                return (t.next = 17), mr(this, Tr)[Tr](r);
                              case 17:
                                return (t.next = 19), mr(this, Or)[Or]();
                              case 19:
                                return (
                                  (mr(this, Cr)[Cr] = new Ye(
                                    r,
                                    i.STATES.HAS_USER
                                  )),
                                  (t.next = 22),
                                  mr(this, Cr)[Cr].getConversation()
                                );
                              case 22:
                                return (
                                  (o = t.sent),
                                  this.State.set(i.STATES.API_READY, !0),
                                  this.PubSub.emit(i.EVENTS.API_READY),
                                  t.abrupt('return', Promise.resolve(o))
                                );
                              case 28:
                                return (
                                  (t.prev = 28),
                                  (t.t0 = t.catch(0)),
                                  this.PubSub.emit(i.EVENTS.API_FAIL),
                                  t.abrupt(
                                    'return',
                                    Promise.reject(
                                      this.Response.error({ message: t.t0 })
                                    )
                                  )
                                );
                              case 32:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[0, 28]]
                      );
                    })
                  )),
                  function (t) {
                    return o.apply(this, arguments);
                  }),
              },
              {
                key: 'getMeta',
                value: function () {
                  return mr(this, kr)[kr].getMeta();
                },
              },
              {
                key: 'getConversation',
                value: function (t) {
                  return this.State.get(i.STATES.CONVERSATION);
                },
              },
              {
                key: 'sendText',
                value: function (t) {
                  return mr(this, Cr)[Cr].sendText(t);
                },
              },
              {
                key: 'sendVoice',
                value: function (t) {
                  return mr(this, Cr)[Cr].sendVoice(t);
                },
              },
              {
                key: 'sendPostBack',
                value: function (t) {
                  return mr(this, Cr)[Cr].sendPostBack(t);
                },
              },
              {
                key: 'startConversation',
                value: function () {
                  return mr(this, Cr)[Cr].sendStartConversation();
                },
              },
              {
                key: 'resetConversation',
                value: function () {
                  return mr(this, Cr)[Cr].reset();
                },
              },
            ]) && hr(n.prototype, e),
            r && hr(n, r),
            s
          );
        })(zt),
        Sr = br('channels'),
        wr = br('intent'),
        Cr = br('session'),
        kr = br('chatbotModule'),
        Ar = br('initGetModule'),
        Er = br('initGetChannels'),
        Tr = br('initGetIntent'),
        Or = br('initGetChatbotUser'),
        jr = (function () {
          var t = lr(
            regeneratorRuntime.mark(function t() {
              var n;
              return regeneratorRuntime.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (t.next = 3),
                          pt(this.module, this.Http, this.State)
                        );
                      case 3:
                        if ((n = t.sent) && 'item not found' !== n) {
                          t.next = 6;
                          break;
                        }
                        throw 'ERROR.MODULE_NOT_FOUND';
                      case 6:
                        return (
                          this.State.set(i.STATES.MODEL_MODULE, n),
                          this.State.set(
                            i.STATES.HAS_PROJECT,
                            n.relationships.project &&
                              n.relationships.project.data &&
                              n.relationships.project.data.id
                              ? n.relationships.project.data.id
                              : void 0
                          ),
                          (mr(this, kr)[kr] = new ir(n)),
                          t.abrupt('return', n)
                        );
                      case 12:
                        throw ((t.prev = 12), (t.t0 = t.catch(0)), t.t0);
                      case 15:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                this,
                [[0, 12]]
              );
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        Br = (function () {
          var t = lr(
            regeneratorRuntime.mark(function t(n) {
              var e, r, o, a;
              return regeneratorRuntime.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (t.prev = 0), (e = 0);
                      case 2:
                        if (
                          !(e < n.relationships.am_channel_tokens.data.length)
                        ) {
                          t.next = 14;
                          break;
                        }
                        return (
                          (r = n.relationships.am_channel_tokens.data[e].id),
                          (t.next = 6),
                          cr(r, this.Http)
                        );
                      case 6:
                        return (
                          (o = t.sent),
                          (t.next = 9),
                          sr(o.relationships.am_channel.data.id)
                        );
                      case 9:
                        'BlueDarwin' === (a = t.sent).attributes.label &&
                          (mr(this, Sr)[Sr].push(a.attributes),
                          this.State.set(
                            i.STATES.CHANNEL_TOKEN,
                            o.attributes.token
                          ));
                      case 11:
                        e++, (t.next = 2);
                        break;
                      case 14:
                        this.State.set(
                          i.STATES.MODEL_CHANNELS,
                          mr(this, Sr)[Sr]
                        ),
                          (t.next = 20);
                        break;
                      case 17:
                        throw ((t.prev = 17), (t.t0 = t.catch(0)), t.t0);
                      case 20:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                this,
                [[0, 17]]
              );
            })
          );
          return function (n) {
            return t.apply(this, arguments);
          };
        })(),
        Rr = (function () {
          var t = lr(
            regeneratorRuntime.mark(function t(n) {
              var e;
              return regeneratorRuntime.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (t.next = 3),
                          ur(n.relationships.am_intents.data.id, this.Http)
                        );
                      case 3:
                        return (
                          (e = t.sent),
                          this.State.set(i.STATES.MODEL_INTENT, e),
                          (mr(this, wr)[wr] = e),
                          t.abrupt('return', e)
                        );
                      case 9:
                        throw ((t.prev = 9), (t.t0 = t.catch(0)), t.t0);
                      case 12:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                this,
                [[0, 9]]
              );
            })
          );
          return function (n) {
            return t.apply(this, arguments);
          };
        })(),
        Ir = (function () {
          var t = lr(
            regeneratorRuntime.mark(function t() {
              var n;
              return regeneratorRuntime.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.prev = 0), (t.next = 3), xt();
                      case 3:
                        n = t.sent;
                        try {
                          this.State.set(
                            i.STATES.HAS_CHATBOT_USER,
                            n[0].relationships.am_users.data.id
                          ),
                            mr(this, kr)[kr].setMetaUser(n[0].attributes);
                        } catch (t) {
                          mr(this, kr)[kr].setMetaUser(Gn());
                        }
                        return t.abrupt('return', n);
                      case 8:
                        throw ((t.prev = 8), (t.t0 = t.catch(0)), t.t0);
                      case 11:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                this,
                [[0, 8]]
              );
            })
          );
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        Wr = gr;
      e.d(n, 'Iframe', function () {
        return Mr;
      }),
        e.d(n, 'Api', function () {
          return Pr;
        });
      var Mr = Kn,
        Pr = Wr;
    },
  ]);
});